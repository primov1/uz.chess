import {
  Controller,
  Post,
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
import { UploadService } from '../service/upload.service';
import { multerConfig, multerVideoConfig } from '../multer.config';

@ApiTags('Admin / Upload')
@Controller('admin/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @ApiOperation({ summary: 'Upload image file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        url: { type: 'string', example: '/uploads/1234567890-image.png' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return { url: this.uploadService.getUrl(file) };
  }

  @Post('video')
  @ApiOperation({ summary: 'Upload video file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        url: { type: 'string', example: '/uploads/1234567890-video.mp4' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', multerVideoConfig))
  uploadVideo(@UploadedFile() file: Express.Multer.File) {
    return { url: this.uploadService.getUrl(file) };
  }
}
