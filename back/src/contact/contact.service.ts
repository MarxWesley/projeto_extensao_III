import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const {limit = 12, offset = 0} = paginationDto;
    const contact = await this.contactRepository.find({
      take: limit,
      skip: offset,
      order: {
        id: 'DESC'
      }
    });
    return contact;
  }

  async findOne(id: number) {
    const contact = await this.contactRepository.findOne({
      where: {
        id,
      }
    });

    if(!contact) throw new NotFoundException('Contato não encontrado!')
    return contact;
  }

  async create(createContactDto: CreateContactDto) {
    const existingUser = await this.contactRepository.findOne({
      where: {
        email: createContactDto.email
      },
    });

    if(existingUser) {
      throw new ConflictException('Você já enviou uma mensagem.');
    }

    const newContact = {
      ...createContactDto
    }
   
    const contact = this.contactRepository.create(newContact)
   
    try {
      return await this.contactRepository.save(contact)
    } catch (error) {
      if(error.code === '23505') {
        throw new ConflictException('Email já está em uso.')
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const userToUpdate = await this.findOne(id);

    if(updateContactDto.email && updateContactDto.email !== userToUpdate.email) {
      const emailExists = await this.contactRepository.findOne({
        where: {
          email: updateContactDto.email
        },
      });
     
      if (emailExists) {
        throw new ConflictException('Este e-mail já está em uso por outro usuário.');
      }
    }
    
     // Atualiza e salva
    const updatedUser = this.contactRepository.merge(userToUpdate, updateContactDto);
    return this.contactRepository.save(updatedUser);
  }

  async delete(id: number) {
    const contact = await this.findOne(id)
    return this.contactRepository.delete(contact);
  }
}
