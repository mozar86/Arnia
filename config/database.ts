import { DataSource } from 'typeorm';
import { Measure } from '../entities/measure';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Measure],
  synchronize: true,
  logging: false,
});
