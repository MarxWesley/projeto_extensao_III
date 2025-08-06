import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({summary: 'Criar usuário'})
  async create (@Body() createAuthDto: CreateAuthDto) {
    return await this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiOperation({summary: 'Realizar login'})
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateAuth(loginDto);

    if(!user) throw new UnauthorizedException();

    return this.authService.login(user);
  }
}