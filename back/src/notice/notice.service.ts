import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { Repository } from 'typeorm';
import * as path from 'path';
import * as fs from 'fs/promises'
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>
  ){}

  @Cron('10 * * * *', { name: 'updateExpiredNoticesJob' })
  async updateExpiredNoticesDaily(){
    await this.noticeRepository
      .createQueryBuilder()
      .update()
      .set({ status: false })
      .where("DATE(expirationDate) <= CURRENT_DATE")
      .andWhere("status != false")
      .execute();

    console.log('Notícias expiradas atualizadas automaticamente');
  }

  async create(createNoticeDto: CreateNoticeDto, file: Express.Multer.File) {
    const fileFullPath = path.resolve(process.cwd(), 'pictures', file.originalname);
    await fs.writeFile(fileFullPath, file.buffer);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const newNotice = {
      ...createNoticeDto,
      img: file.originalname.toLowerCase().trim(),
      createdAt: today,
      expirationDate: tomorrow
    }

    const notice = this.noticeRepository.create(newNotice)

    return await this.noticeRepository.save(notice)
  }

  async findAll() {
    const notices = await this.noticeRepository.find({
      where: {
        status: true
      },
      order: {
        id: 'DESC'
      }
    })

    const retornoImg = notices.map((notices) => {
        return {
          ...notices,
          img: `http://localhost:3001/img/pictures/${notices.img}`,
        }
    }); 

    return retornoImg;
  }

  async findOne(id: number, read: boolean = true) {
    const notice = await this.noticeRepository.findOne({
      where: {
        id,
        status: true
      }
    });

    if (!notice) throw new NotFoundException("Noticia não encontrada")

    if (notice.expirationDate && notice.expirationDate === new Date()) {
      notice.status = false;
    }

    return {
      ...notice,
      img: read ? `http://localhost:3001/img/pictures/${notice.img}` : notice.img,
    };
  }

  async findByName(description: string) {
    const notice = await this.noticeRepository.findOne({
      where: {
        description: `LIKE %${description}%`
      }
    });

    if (!notice) throw new NotFoundException("Noticia não encontrada")

    return notice;
  }

  async update(id: number, updateNoticeDto: UpdateNoticeDto, file: Express.Multer.File) {
    const notice = await this.findOne(id, false);

    if (file) {
      const fileFullPath = path.resolve(process.cwd(), 'pictures', file.originalname);
      await fs.writeFile(fileFullPath, file.buffer);
      notice.img = file.originalname.toLowerCase().trim();
    }

    const updatedNotice = {
      ...notice, 
      ...updateNoticeDto
    }

    const noticeUpdated = this.noticeRepository.merge(
        notice,
        updatedNotice
     )

    return await this.noticeRepository.save(noticeUpdated)
  }

  async remove(id: number) {
    const notice = await this.findOne(id);

    return await this.noticeRepository.remove(notice);
  }
}