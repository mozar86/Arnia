import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

export const adminAuthCreateBodySchema = yup.object({
    emailAdmin: yup.string().required().email(),
    passwordAdmin: yup.string().required().min(6),
});

export namespace adminAuthCreate {
    export type AdminAuthBodyType = TypedRequest<typeof adminAuthCreateBodySchema>;
    export const schema = yup.object().shape({
    body: adminAuthCreateBodySchema
    });
}