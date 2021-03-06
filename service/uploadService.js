const Multer = require('multer');

class UploadService {
    constructor() {
        this.storage = Multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "public/files");
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
    }

    up() {
        let storage = this.storage;
        let upload = Multer({
            storage
        });
        return upload;
    }
}

module.exports = UploadService;