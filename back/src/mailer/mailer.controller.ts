import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller()
export class MailerController {
    constructor(
        private readonly mailService: MailerService
    ){}

    @Post('sendEmail')
    async sendEmail(@Body() body: {to: string; subject: string; content: string},){
        return await this.mailService.sendMail(
            body.to,
            body.subject,
            body.content,
        );
    }
}
