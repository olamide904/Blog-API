const multer = require('multer');
const cloudinary = require("../config/cloudinary.js");
const CloudinaryStorage = require('multer-storage-cloudinary').CloudinaryStorage;


const storage = new CloudinaryStorage({
    cloudinary,
    params: { folder: 'uploads' }
});

const upload = multer({
     storage, 
     limits: {
        fileSize: 3 * 1024 * 1024,
     },
});

module.exports = upload;