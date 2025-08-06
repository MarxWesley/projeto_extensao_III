import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {  IsNotEmpty, IsString } from "class-validator";

export class CreateNoticeDto {
    @Transform(({value}) => value.toLowerCase().trim())
    @IsString({message: 'campo title deve ser string'})
    @IsNotEmpty({message: 'title nao pode ser vazio'})
    @ApiProperty({
        type: 'string',
        description: 'Título da notícia',
        nullable: false
    })
    readonly title: string;
    
    @Transform(({value}) => value.toLowerCase().trim())
    @IsString({message: 'campo description deve ser string'})
    @IsNotEmpty({message: 'description nao pode ser vazio'})
    @ApiProperty({
        type: 'string',
        description: 'Descriçao da notícia, pode ser longa',
        nullable: false
    })
    readonly description: string;
}