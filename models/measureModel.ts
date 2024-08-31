import { AppDataSource } from '../config/database';
import { Measure } from '../entities/measure';

export const MeasureModel = AppDataSource.getRepository(Measure);
