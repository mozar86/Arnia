import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

const userAuthCreateBodySchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});

export namespace UserAuthCreate {
    export type BodyType = TypedRequest<typeof userAuthCreateBodySchema>;
    export const schema = yup.object().shape({ body: userAuthCreateBodySchema });
}

