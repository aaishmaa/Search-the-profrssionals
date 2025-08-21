import multer,{ memoryStorage } from 'multer';
import cloudinary from '..config/cloudinary.config.js';

//Use memory storage to store files in memory
const storage = memoryStorage();
export const upload = multer({ 
    storage ,
    limits: { fileSize: 5 * 1024 * 1024 } ,// Limit file size to 5MB
    filefilter: (_req, file, next) => {
        const ok =[image/jpeg, image/png].includes(file.mimetype);
    next(ok? null: new error('only JPG and PNG allowed'), ok);
},
});

//upload buffer to cloudinary
export  function uploadBufferToCloudinary(Buffer,option ={}) {
    return new Promise((resolve, reject) => {
       const stream= cloudinary.uploader.upload_stream(
        {resource_type: 'image', ...option},
            (error, result) => (error ? reject(error) : resolve(result))
        );
        stream.end(Buffer);
    }
    );
}   