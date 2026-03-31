import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BookLikePublicService } from '../service/bookLike.public.service';
import { BookLikeListPublicDto } from '../dtos/public/bookLike.list.public.dto';
import { BookLikeDetailPublicDto } from '../dtos/public/bookLike.detail.public.dto';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { Public } from '../../../auth/decorators/public.decorator';
// To'g'rilandi: 'import type' ishlatildi
import type { JwtPayload } from '../../../auth/interfaces/jwt-payload.interface';

@ApiTags('Public / Book Likes')
@Controller('public/book-likes')
export class BookLikePublicController {
  constructor(private readonly service: BookLikePublicService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Barcha book likelarni olish' })
  @ApiOkResponse({ type: () => BookLikeListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: "ID bo'yicha book like olish" })
  @ApiOkResponse({ type: () => BookLikeDetailPublicDto })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.getOne(id);
  }

  @ApiBearerAuth()
  @Get('my/likes')
  @ApiOperation({
    summary: 'Mening like qilgan kitoblarim (token talab qilinadi)',
  })
  @ApiOkResponse({ type: () => BookLikeListPublicDto, isArray: true })
  getMyLikes(@CurrentUser() user: JwtPayload) {
    return this.service.getMyLikes(user.sub);
  }

  @ApiBearerAuth()
  @Post('toggle/:bookId')
  @ApiOperation({
    summary: 'Kitobga like/unlike toggle (token talab qilinadi)',
    description:
      "Agar foydalanuvchi avval like qilgan bo'lsa — o'chiradi, " +
      "aks holda — like qo'shadi.",
  })
  toggle(
    @Param('bookId', ParseIntPipe) bookId: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.toggle(bookId, user.sub);
  }
}
