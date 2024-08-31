import { v4 as uuidv4 } from 'uuid';

// Função utilitária para gerar UUIDs
export const generateUUID = (): string => {
  return uuidv4();
};
