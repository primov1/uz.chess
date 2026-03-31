import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * JWT tokendan kelgan foydalanuvchi ma'lumotlarini olish uchun decorator.
 *
 * @example
 * @Get('profile')
 * getProfile(@CurrentUser() user: JwtPayload) { ... }
 */
export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
