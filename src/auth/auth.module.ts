import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || "fjdskfjehh34hjkhdfshfjkdjher3eui54r35jrfdlkedsjflkj",
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
