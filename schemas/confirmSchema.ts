import * as yup from 'yup';

// Schema para validação do payload do endpoint PATCH /confirm
export const confirmSchema = yup.object().shape({
  measure_uuid: yup.string().required('O UUID da medição é obrigatório'),
  confirmed_value: yup.number().required('O valor confirmado é obrigatório').positive('O valor confirmado deve ser positivo'),
});
