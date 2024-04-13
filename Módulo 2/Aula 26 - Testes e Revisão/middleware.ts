import {NextFunction, Request, Response} from 'express';
import * as yup from 'yup';

enum HttpStatus {
    BAD_REQUEST = 400
}

export async function validateCreatePostMiddleware(req: Request, res: Response, next: NextFunction) {
    const bodyValidator = yup.object({
        author: yup.string(),
        content: yup.string().min(10)
    })

    try {
        await bodyValidator.validate(req.body)
    } catch (error: any) {
        return res.status(HttpStatus).json({
            message: error.message
        })
    }
}