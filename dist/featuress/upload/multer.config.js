"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerMixedConfig = exports.multerVideoConfig = exports.multerConfig = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const storage = (0, multer_1.diskStorage)({
    destination: './uploads',
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, unique + (0, path_1.extname)(file.originalname));
    },
});
exports.multerConfig = {
    storage,
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|webp|gif|svg\+xml)$/)) {
            return cb(new common_1.BadRequestException('Only image files are allowed'), false);
        }
        cb(null, true);
    },
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
};
exports.multerVideoConfig = {
    storage,
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/^video\/(mp4|mpeg|webm|ogg|quicktime|x-msvideo)$/)) {
            return cb(new common_1.BadRequestException('Only video files are allowed'), false);
        }
        cb(null, true);
    },
    limits: {
        fileSize: 500 * 1024 * 1024,
    },
};
exports.multerMixedConfig = {
    storage,
    fileFilter: (req, file, cb) => {
        const isImage = file.mimetype.match(/\/(jpg|jpeg|png|webp|gif|svg\+xml)$/);
        const isVideo = file.mimetype.match(/^video\/(mp4|mpeg|webm|ogg|quicktime|x-msvideo)$/);
        if (!isImage && !isVideo) {
            return cb(new common_1.BadRequestException('Only image or video files are allowed'), false);
        }
        cb(null, true);
    },
    limits: {
        fileSize: 500 * 1024 * 1024,
    },
};
//# sourceMappingURL=multer.config.js.map