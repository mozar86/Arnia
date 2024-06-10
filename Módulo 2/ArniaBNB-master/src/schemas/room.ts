import * as yup from 'yup';
import { TypedRequest } from '../utils/typedRequest';

const roomCreateBodySchema = yup.object({
    number_room: yup.string().required().min(3),
    type: yup.string().required(),
    guest_capacity: yup.number().required().min(1),
    daily_rate: yup.string().required(),
    photo: yup.string(),
    status: yup.string(),
});

export namespace RoomCreate {
    export type RoomBodyType = TypedRequest<typeof roomCreateBodySchema>;
    export const schema = yup.object().shape({
        body: roomCreateBodySchema
    });
}

const roomUpdateBodySchema = yup.object({
    id: yup.string().required().length(24)
});

const roomUpdateParamSchema = yup.object({
    id: yup.string().required().length(24)
});

export namespace RoomUpdate {
    export type RoomBodyType = TypedRequest<typeof roomUpdateBodySchema>; 
    export type RoomParamType = TypedRequest<typeof roomUpdateParamSchema>;
    export const schema = yup.object().shape({
        body: roomUpdateBodySchema,
        params: roomUpdateParamSchema,
    });
}
