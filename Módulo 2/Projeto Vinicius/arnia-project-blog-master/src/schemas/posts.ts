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

const postUpdateBodySchema = yup.object({
    author: yup.string().required().length(24)
});

const postUpdateParamSchema = yup.object({
    postId: yup.string().required().length(24)
});

export namespace PostUpdate { //3- Criou o schema
    export type BodyType = TypedRequest<typeof postUpdateBodySchema>;
    export type ParamType = TypedRequest<typeof postUpdateParamSchema>;
    export const schema = yup.object().shape({ body: postUpdateBodySchema, params:postUpdateParamSchema });
}