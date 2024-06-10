import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

const bookingCreateBodySchema = yup.object({
    id: yup.string().required().length(24),
    checkin_date: yup.string().required().datetime(),//perguntar se no datetime preciso passar algum parâmetro ou se é melhor usar string
    checkout_date: yup.string().required().datetime(),
    id_room: yup.string().required().min(3),
    id_guest: yup.string().required().min(3),
});

export namespace BookingCreate {
    export type BookingBodyType = TypedRequest<typeof bookingCreateBodySchema>;
    export const schema = yup.object().shape({
        body: bookingCreateBodySchema
    });
}

const bookingUpdateBodySchema = yup.object({
    id: yup.string().required().length(24)
})

const bookingUpdateParamSchema = yup.object({
    id: yup.string().required().length(24)
})

export namespace BookingUpdate {
    export type BookingBodyType = TypedRequest<typeof bookingUpdateBodySchema>; 
    export type BookingParamType = TypedRequest<typeof bookingUpdateParamSchema>;
    export const schema = yup.object().shape({
        body: bookingUpdateBodySchema,
        params: bookingUpdateParamSchema,
    });
}