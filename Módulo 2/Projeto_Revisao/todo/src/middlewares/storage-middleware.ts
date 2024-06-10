import multer from "multer"

export const storageMiddleware = multer({ dest: 'uploads/'})