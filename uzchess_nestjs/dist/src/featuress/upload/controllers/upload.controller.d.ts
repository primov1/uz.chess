import { UploadService } from '../service/upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File): {
        url: string;
    };
    uploadVideo(file: Express.Multer.File): {
        url: string;
    };
}
