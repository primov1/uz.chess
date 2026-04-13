import { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + extname(file.originalname));
  },
});

export const multerConfig = {
  storage,
  fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|webp|gif|svg\+xml)$/)) {
      return cb(new BadRequestException('Only image files are allowed'), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};

export const multerVideoConfig = {
  storage,
  fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
    if (
      !file.mimetype.match(/^video\/(mp4|mpeg|webm|ogg|quicktime|x-msvideo)$/)
    ) {
      return cb(new BadRequestException('Only video files are allowed'), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB
  },
};

// Mixed config for endpoints that accept both images and videos
export const multerMixedConfig = {
  storage,
  fileFilter: (req: any, file: Express.Multer.File, cb: any) => {
    const isImage = file.mimetype.match(/\/(jpg|jpeg|png|webp|gif|svg\+xml)$/);
    const isVideo = file.mimetype.match(
      /^video\/(mp4|mpeg|webm|ogg|quicktime|x-msvideo)$/,
    );
    if (!isImage && !isVideo) {
      return cb(
        new BadRequestException('Only image or video files are allowed'),
        false,
      );
    }
    cb(null, true);
  },
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB (video)
  },
};
