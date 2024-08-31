import { AppDataSource } from '../config/database';

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error during Data Source initialization', error);
  }
};
