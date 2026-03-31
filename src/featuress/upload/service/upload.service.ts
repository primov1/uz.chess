import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  getUrl(file: Express.Multer.File): string {
    return `/uploads/${file.filename}`;
  }
}
