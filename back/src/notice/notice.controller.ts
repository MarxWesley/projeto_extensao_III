import { Controller, Get, Post, Body, Param, Delete, Query, UseInterceptors, UploadedFile, Put, UseGuards } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateNoticeSwaggerDto } from './dto/create-notice-swagger.dto';

@ApiTags('Notice')
@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: CreateNoticeSwaggerDto })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({summary: 'Criar uma notícia nova'})
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createNoticeDto: CreateNoticeDto, @UploadedFile() file: Express.Multer.File) {
    return this.noticeService.create(createNoticeDto, file);
  }

  @Get()
  @ApiOperation({summary: 'Listar todas as notícias'})
  findAll() {
    return this.noticeService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Buscar uma notícia pelo id'})
  findOne(@Param('id') id: number) {
    return this.noticeService.findOne(id);
  }

  @Get('filter')
  @ApiOperation({summary: 'Busca uma notícia pelo nome'})
  findByName(@Query('description') description: string) {
    return this.noticeService.findByName(description)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({summary: 'Atualiza uma notícia'})
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: number, @Body() updateNoticeDto: UpdateNoticeDto, @UploadedFile() file: Express.Multer.File) {
    return this.noticeService.update(id, updateNoticeDto, file);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({summary: 'Exclui uma notícia'})
  remove(@Param('id') id: number) {
    return this.noticeService.remove(id);
  }
}