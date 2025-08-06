import { ApiProperty } from '@nestjs/swagger';
import { CreateNoticeDto } from './create-notice.dto';

export class CreateNoticeSwaggerDto extends CreateNoticeDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
