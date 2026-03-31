import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CourseLikePublicService } from '../service/courseLike.public.service';
import { CourseLikeListPublicDto } from '../dtos/public/courseLike.list.public.dto';
import { CourseLikeDetailPublicDto } from '../dtos/public/courseLike.detail.public.dto';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { Public } from '../../../auth/decorators/public.decorator';
// To'g'rilandi: 'import type' ishlatildi
import type { JwtPayload } from '../../../auth/interfaces/jwt-payload.interface';

@ApiTags('Public / Course Likes')
@Controller('public/course-likes')
export class CourseLikePublicController {
  constructor(private readonly service: CourseLikePublicService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Barcha course likelarni olish' })
  @ApiOkResponse({ type: () => CourseLikeListPublicDto, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: "ID bo'yicha course like olish" })
  @ApiOkResponse({ type: () => CourseLikeDetailPublicDto })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.getOne(id);
  }

  @ApiBearerAuth()
  @Get('my/likes')
  @ApiOperation({
    summary: 'Mening like qilgan kurslarim (token talab qilinadi)',
  })
  @ApiOkResponse({ type: () => CourseLikeListPublicDto, isArray: true })
  getMyLikes(@CurrentUser() user: JwtPayload) {
    return this.service.getMyLikes(user.sub);
  }

  @ApiBearerAuth()
  @Post('toggle/:courseId')
  @ApiOperation({
    summary: 'Kursga like/unlike toggle (token talab qilinadi)',
    description:
      "Agar foydalanuvchi avval like qilgan bo'lsa — o'chiradi, " +
      "aks holda — like qo'shadi.",
  })
  toggle(
    @Param('courseId', ParseIntPipe) courseId: number,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.toggle(courseId, user.sub);
  }
}
