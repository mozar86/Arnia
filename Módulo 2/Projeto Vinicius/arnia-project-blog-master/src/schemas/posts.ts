import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

const postCreateBodySchema = yup.object({
    author: yup.string().required().length(24),
    content: yup.string().required().min(3),
});

export namespace PostCreate {
    export type BodyType = TypedRequest<typeof postCreateBodySchema>;
    export const schema = yup.object().shape({ body: postCreateBodySchema });
}