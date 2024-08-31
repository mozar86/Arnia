import * as yup from 'yup';

// Schema para validação do payload do endpoint POST /upload
export const uploadSchema = yup.object().shape({
  image: yup.string().required('A imagem é obrigatória').matches(/^data:image\/(png|jpg|jpeg);base64,/, 'Formato de imagem inválido'),
  customer_code: yup.string().required('O código do cliente é obrigatório'),
  measure_datetime: yup.date().required('A data e hora da medição são obrigatórias'),
  measure_type: yup.string().oneOf(['WATER', 'GAS'], 'O tipo de medição deve ser "WATER" ou "GAS"').required('O tipo de medição é obrigatório'),
});
