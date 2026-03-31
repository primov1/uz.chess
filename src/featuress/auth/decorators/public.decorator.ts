import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Bu decorator bilan belgilangan route yoki controller uchun
 * JwtAuthGuard tekshiruvini o'tkazib yuboradi (token talab qilinmaydi).
 *
 * @example
 * @Public()
 * @Get('public-endpoint')
 * getPublicData() { ... }
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
