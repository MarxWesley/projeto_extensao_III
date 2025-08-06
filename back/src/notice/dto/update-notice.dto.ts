import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticeDto } from './create-notice.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoticeDto extends PartialType(CreateNoticeDto) {}
