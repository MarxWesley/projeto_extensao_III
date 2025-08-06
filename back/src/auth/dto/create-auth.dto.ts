import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @Transform(({value}) => value.toLowerCase().trim())
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
            type: 'string',
            description: 'email@example.com',
            nullable: false
        })
    readonly email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
            type: 'string',
            description: 'teste123',
            nullable: false
        })
    readonly password: string;
}
