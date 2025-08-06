import { Module, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { NoticeModule } from '../notice/notice.module';
import { ContactModule } from '../contact/contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BannerModule } from 'src/banner/banner.module';
import { MailerModule } from 'src/mailer/mailer.module';
import * as dotenv from 'dotenv';
import { AuthModule } from 'src/auth/auth.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.PROTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    NoticeModule, 
    ContactModule,
    BannerModule,
    MailerModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(process.cwd(), 'pictures'),
      serveRoot: '/img/pictures',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
  ],
  providers: [AppService],
})
export class AppModule {}