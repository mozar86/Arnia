import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

const guestCreateBodySchema = yup.object({
    name: yup.string().min(3),
    cpf: yup.string(),
    phone_number: yup.number().min(3),
    email: yup.string().required().min(3),
    password: yup.string().required().min(6),
});

export namespace GuestCreate {
    export type GuestBodyType = TypedRequest<typeof guestCreateBodySchema>;
    export const schema = yup.object().shape({
        body: guestCreateBodySchema
    });
}

const guestUpdateBodySchema = yup.object({
    id: yup.string().required().length(24)
})

const guestUpdateParamSchema = yup.object({
    id: yup.string().required().length(24)
})

export namespace GuestUpdate {
    export type GuestBodyType = TypedRequest<typeof guestUpdateBodySchema>; 
    export type GuestParamType = TypedRequest<typeof guestUpdateParamSchema>;
    export const schema = yup.object().shape({
        body: guestUpdateBodySchema,
        params: guestUpdateParamSchema,
    });
}