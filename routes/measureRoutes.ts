import { Router } from 'express';
import { MeasureController } from '../controllers/measureController';

/**
 * Define as rotas relacionadas às medições.
 */
export const measureRoutes = Router();

/**
 * Rota para upload de imagem e processamento da medição.
 * POST /measures/upload
 */
measureRoutes.post('/measures/upload', MeasureController.upload);

/**
 * Rota para confirmação/correção de valor de uma medição.
 * POST /measures/confirm
 */
measureRoutes.post('/measures/confirm', MeasureController.confirm);

/**
 * Rota para listar as medições de um cliente.
 * GET /measures
 */
measureRoutes.get('/measures', MeasureController.list);
