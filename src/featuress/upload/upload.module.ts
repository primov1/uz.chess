import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './controllers/upload.controller';
import { UploadService } from './service/upload.service';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
