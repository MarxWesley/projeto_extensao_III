import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai token do header Authorization Bearer
            ignoreExpiration: false, // Rejeita tokens expirados
            secretOrKey: 'CHAVEDECRIPTOGRAFIA', // process.env.JWT_SECRET
        });
    }

    // Método chamado automaticamente após validação do token
    async validate(payload: any) {
        // Retorna os dados do usuário que serão anexados ao req.user
        return {
            userId: payload.sub,
            email: payload.email,
        };
    }
}