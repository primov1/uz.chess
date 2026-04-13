export declare const multerConfig: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: Express.Multer.File, cb: any) => any;
    limits: {
        fileSize: number;
    };
};
export declare const multerVideoConfig: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: Express.Multer.File, cb: any) => any;
    limits: {
        fileSize: number;
    };
};
export declare const multerMixedConfig: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: Express.Multer.File, cb: any) => any;
    limits: {
        fileSize: number;
    };
};
