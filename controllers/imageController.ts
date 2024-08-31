import { Request, Response } from 'express';
import { analyzeImage } from '../services/imageService';
import { validateUploadSchema } from '../schemas/uploadSchema';
import { Measure } from '../models/Measure';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    // Validar o corpo da requisição
    await validateUploadSchema.validate(req.body);
    
    const { image, customer_code, measure_datetime, measure_type } = req.body;
    
    // Verificar se já existe uma leitura para o tipo e mês
    const existingMeasure = await Measure.findOne({
      where: {
        customer_code,
        measure_type,
        measure_datetime: {
          $month: new Date(measure_datetime).getMonth() + 1,
          $year: new Date(measure_datetime).getFullYear()
        }
      }
    });
    
    if (existingMeasure) {
      return res.status(409).json({
        error_code: 'DOUBLE_REPORT',
        error_description: 'Leitura do mês já realizada'
      });
    }
    
    // Enviar a imagem para análise
    const result = await analyzeImage(image, measure_type);
    
    // Salvar a leitura no banco de dados
    const newMeasure = await Measure.create({
      customer_code,
      measure_datetime,
      measure_type,
      image_url: result.image_url,
      measure_uuid: result.measure_uuid,
      measure_value: result.measure_value
    });
    
    res.status(200).json({
      image_url: result.image_url,
      measure_value: result.measure_value,
      measure_uuid: result.measure_uuid
    });
  } catch (error) {
    if (error.isJoi) {
      return res.status
