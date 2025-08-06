import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
    private transporter: nodemailer.Transporter;
    
    constructor() {
        this.transporter = nodemailer.createTransport({ 
            host: 'smtp.ethereal.email', port: 587, secure: false,
        auth: { 
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS 
            } 
        });
    }

    async sendMail(to: string, subject: string, html: string) {
        const mailOptions = {
            from: 'IEE Diomício Freitas <ieediomiciofr@instituo.com>',
            to,
            subject,
            html,
        }

        try {
            const info = await this.transporter.sendMail(mailOptions);
            return {message: `e-mail enviado!`, data: info.data}
        } catch (error) {
            console.error('Erro ao enviar email: ', error);
            throw error;
        }
    }
}
