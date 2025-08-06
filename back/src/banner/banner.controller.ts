import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() createBannerDto: CreateBannerDto, @UploadedFile() file: Express.Multer.File) {
    return await this.bannerService.create(createBannerDto, file);
  }

  @Get()
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(@Param('id') id: string, @Body() updateBannerDto: UpdateBannerDto, @UploadedFile() file: Express.Multer.File) {
    return await this.bannerService.update(+id, updateBannerDto, file);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bannerService.remove(+id);
  }
}
