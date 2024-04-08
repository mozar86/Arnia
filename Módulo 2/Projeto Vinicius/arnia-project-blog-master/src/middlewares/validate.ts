import { ValidationError } from 'yup';
import { NextFunction, Request, Response, query } from 'express';

export default (schema: any) => async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await schema.validate(
            {
                body: request.body,
                query: request.query,
                params: request.params
            },
            { strict: true, abortEarly: false }
        ); 
        next();
    } catch (error) {
        const { name, message, errors } = error as ValidationError;
        response.status(406).send({ name, message, errors });
    }
};