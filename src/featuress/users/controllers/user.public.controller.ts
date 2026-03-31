import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserPublicService } from '../service/user.public.service';
import { UserDetailPublicDto } from '../dtos/public/user.detail.public.dto';
import { UserUpdatePublicDto } from '../dtos/public/user.update.public.dto';
import { multerConfig } from '../../upload/multer.config';

@ApiTags('Public / Users')
@Controller('public/users')
export class UserPublicController {
  constructor(private readonly service: UserPublicService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get my profile' })
  @ApiOkResponse({ type: () => UserDetailPublicDto })
  getMe(@Param('id') id: number) {
    return this.service.getMe(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update my profile (profileImage upload optional)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fullName: { type: 'string', maxLength: 64 },
        profileImage: {
          type: 'string',
          format: 'binary',
          description: 'Profile photo (optional)',
        },
        password: { type: 'string', maxLength: 128 },
        birthDate: { type: 'string', description: 'ISO date' },
      },
    },
  })
  @ApiOkResponse({ type: () => UserDetailPublicDto })
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  update(
    @Param('id') id: number,
    @Body() payload: UserUpdatePublicDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) payload.profileImage = `/uploads/${file.filename}`;
    return this.service.update(id, payload);
  }
}
