import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateContactDto {
    @Transform(({value}) => value.toUpperCase().trim())
    @IsString({message: 'campo name deve ser string'})
    @MaxLength(255, {message: 'Nome deve ter no máximo 255 caracteres'})
    @IsNotEmpty({message: 'Nome é obrigatório!'})
    @ApiProperty({
            type: 'string',
            description: 'Teste da Silva',
            nullable: false
        })
    readonly name: string;

    @Transform(({value}) => value.toLowerCase().trim())
    @IsString({message: 'campo e-mail deve ser string'})
    @Length(10, 200, {message: 'e-mail deve ter entre 10 e 200 caracteres'})
    @IsEmail({}, {message: 'O e-mail deve ser válido'})
    @IsNotEmpty({message: 'e-mail é obrigatório!'})
    @ApiProperty({
            type: 'string',
            description: 'example@outlook.com',
            nullable: false
        })
    readonly email: string;

    @Transform(({value}) => value.trim())
    @IsString({message: 'campo name deve ser string'})
    @Length(11, 14, {message: 'Telefone deve ter 14 caracteres'})
    @IsNotEmpty({message: 'Telefone é obrigatório!'})
    @ApiProperty({
            type: 'string',
            description: '(51)98080-8080',
            nullable: false
        })
    readonly phone: string;

    @Transform(({value}) => value.toLowerCase().trim())
    @IsString({message: 'campo name deve ser string'})
    @IsNotEmpty({message: 'Mensagem é obrigatória'})
    @Length(10, 255, {message: "Mensagem deve ter entre 10 e 255 caracteres"})
    @ApiProperty({
            type: 'string',
            description: 'Aqui uma mensagem que deseja enviar',
            nullable: false
        })
    readonly message: string;

    @IsBoolean(({message: "consent deve ser boolean"}))
    @IsNotEmpty(({message: "É necessário aceitar os termos"}))
    @ApiProperty({
            type: 'boolean',
            description: 'true',
            nullable: false
        })
    readonly consent: boolean;
}
