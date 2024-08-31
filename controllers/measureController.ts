import { Request, Response } from 'express';
import { MeasureService } from '../services/measureService';
import * as yup from 'yup';

/**
 * MeasureController é responsável por lidar com as requisições relacionadas às medições.
 */
export const MeasureController = {
  /**
   * Lida com o upload da imagem e salva a medição.
   * @param req - Objeto de requisição.
   * @param res - Objeto de resposta.
   */
  async upload(req: Request, res: Response) {
    try {
      // Valida os dados da requisição
      const schema = yup.object().shape({
        image: yup.string().required(),
        customerCode: yup.string().required(),
        measureDatetime: yup.date().required(),
        measureType: yup.string().oneOf(['WATER', 'GAS']).required(),
      });

      await schema.validate(req.body);

      // Processa a medição e responde com os dados
      const result = await MeasureService.uploadMeasure(req.body);
      res.status(200).json(result);
    } catch (error) {
      // Lida com erros de validação ou outros erros do serviço
      if (error.name === 'ValidationError') {
        res.status(400).json({ error_code: 'INVALID_DATA', error_description: error.message });
      } else if (error.message === 'DOUBLE_REPORT') {
        res.status(409).json({ error_code: 'DOUBLE_REPORT', error_description: 'Leitura do mês já realizada' });
      } else {
        res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'Erro interno do servidor' });
      }
    }
  },

  /**
   * Lida com a confirmação ou correção do valor de uma medição.
   * @param req - Objeto de requisição.
   * @param res - Objeto de resposta.
   */
  async confirm(req: Request, res: Response) {
    try {
      // Valida os dados da requisição
      const schema = yup.object().shape({
        measureUuid: yup.string().required(),
        confirmedValue: yup.number().required(),
      });

      await schema.validate(req.body);

      // Confirma a medição e responde com sucesso
      const result = await MeasureService.confirmMeasure(req.body.measureUuid, req.body.confirmedValue);
      res.status(200).json(result);
    } catch (error) {
      // Lida com erros de validação ou outros erros do serviço
      if (error.name === 'ValidationError') {
        res.status(400).json({ error_code: 'INVALID_DATA', error_description: error.message });
      } else if (error.message === 'MEASURE_NOT_FOUND') {
        res.status(404).json({ error_code: 'MEASURE_NOT_FOUND', error_description: 'Medição não encontrada' });
      } else {
        res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'Erro interno do servidor' });
      }
    }
  },

  /**
   * Lida com a listagem de medições de um cliente.
   * @param req - Objeto de requisição.
   * @param res - Objeto de resposta.
   */
  async list(req: Request, res: Response) {
    try {
      // Valida os parâmetros da requisição
      const schema = yup.object().shape({
        customerCode: yup.string().required(),
        measureType: yup.string().oneOf(['WATER', 'GAS']),
      });

      await schema.validate(req.query);

      // Lista as medições e responde com os dados
      const result = await MeasureService.listMeasures(
        req.query.customerCode as string,
        req.query.measureType as string
      );
      res.status(200).json(result);
    } catch (error) {
      // Lida com erros de validação ou outros erros do serviço
      if (error.name === 'ValidationError') {
        res.status(400).json({ error_code: 'INVALID_DATA', error_description: error.message });
      } else if (error.message === 'MEASURES_NOT_FOUND') {
        res.status(404).json({ error_code: 'MEASURES_NOT_FOUND', error_description: 'Medições não encontradas' });
      } else {
        res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'Erro interno do servidor' });
      }
    }
  },
};
