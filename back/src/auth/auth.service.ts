import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ){}
  
  async login (user: any) {
    const payload = { sub: user.id, email: user.email};
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
  async validateAuth (loginDto: LoginDto) {
    const auth = await this.findUserByEmail(loginDto.email);
    const isMatch = await bcrypt.compare(loginDto.password, auth.password);

    if(auth && isMatch) {
      const {password, ...result} = auth;
      return result;
    }

    return null;
  }

  async findUserByEmail(email: string) {
    const product = await this.authRepository.findOne({
      where: {
        email,
      }
    });

    if(!product) throw new NotFoundException('Usuário não encontrado!');

    return product
  }
  async create(createAuthDto: CreateAuthDto) {
    const existingAuth = await this.authRepository.findOne({
      where: {
        email: createAuthDto.email
      }
    });
    if (existingAuth) throw new ConflictException('E-mail já registrado');
    
    const passwordHash = await bcrypt.hash(createAuthDto.password, 10);

    const newAuth = {
      email: createAuthDto.email,
      password: passwordHash,
    };
    
    const auth = this.authRepository.create(newAuth);
    
    return this.authRepository.save(auth);
  }
}