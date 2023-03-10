import fs from "fs";
import multer from "multer";
import path from "path";

// multer configuration for handling file to upload
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const upload_path = path.join(__dirname, "../../../public/static");
            fs.mkdirSync(upload_path, { recursive: true });
            cb(null, upload_path);
        },
    }),
});

// const upload = multer({
//     storage: multer.memoryStorage(),
// });

export default upload;
