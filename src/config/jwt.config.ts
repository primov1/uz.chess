import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  global: true,
  secret: process.env.JWT_SECRET ?? 'veryveryveryevryevryevryeyvrCode001',
  signOptions: {
    expiresIn: '3h',
  },
};
