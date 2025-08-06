import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, ConflictException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { MailerService } from 'src/mailer/mailer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly mailerService: MailerService
  ){}

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.contactService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.contactService.findOne(id);
  }

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    try {
      const { email, name } = createContactDto;

      await this.mailerService.sendMail(
        email,
        `Bem-vindo, ao Instituto Diomício Freitas!`,
        `<h1>Olá, ${name}!</h1>
        <p>Obrigado por entrar em contato com a gente.</p>
        `
      );
      
      const contact = await this.contactService.create(createContactDto);
      return contact;

    } catch (error) {
      console.log('erro: ', error)
      
      throw new ConflictException(`Erro ao enviar email: ${error.message || error}`);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return await this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.contactService.delete(id);
  }
}
