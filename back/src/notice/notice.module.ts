import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([Notice]), 
    ScheduleModule.forRoot()
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule {}