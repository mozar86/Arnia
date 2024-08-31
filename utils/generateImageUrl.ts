import { v4 as uuidv4 } from 'uuid';

// Função utilitária para gerar URLs temporárias para imagens
export const generateImageUrl = (filename: string): string => {
  const uuid = uuidv4();
  return `https://example.com/images/${uuid}-${filename}`;
};
