import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';
import path from 'path';
import * as fs from 'fs/promises'

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>
  ){}


  async create(createBannerDto: CreateBannerDto, file: Express.Multer.File) {
    const fileFullPath = path.resolve(process.cwd(), 'banner', file.originalname);
    await fs.writeFile(fileFullPath, file.buffer)

    const newBanner = {
      ...createBannerDto,
      img: file.originalname.toLowerCase().trim()
    }

    const banner = this.bannerRepository.create(newBanner);

    return await this.bannerRepository.save(banner)
  }

  async findAll() {
    const banners = await this.bannerRepository.find({
      order: {
        id: 'DESC'
      }
    })

    const retornoImg = banners.map((banner) => {
      return {
        ...banner,
        img: `http://localhost:3001/img/banners/${banner.img}`
      }
    });

    return retornoImg;
  }

  async findOne(id: number) {
    const banner = await this.bannerRepository.findOne({
          where: {
            id,
          }
        });
    
        if (!banner) throw new NotFoundException("Noticia não encontrada")
    
        return {
          ...banner,
          img: `http://localhost:3001/img/banners/${banner.img}`,
        };
  }

  async update(id: number, updateBannerDto: UpdateBannerDto, file: Express.Multer.File) {
    const banner = await this.findOne(id);

    const fileFullPath = path.resolve(process.cwd(), 'banners', file.originalname);
    await fs.writeFile(fileFullPath, file.buffer);

    const updatedBanner = {
      ...banner, 
      ...updateBannerDto,
      img: file.originalname.toLowerCase().trim()
    }

    const bannerUpdated = this.bannerRepository.merge(
      banner,
      updatedBanner
    );

    return await this.bannerRepository.save(bannerUpdated);
  }

  async remove(id: number) {
    const banner = await this.findOne(id);

    return await this.bannerRepository.remove(banner);
  }
}
