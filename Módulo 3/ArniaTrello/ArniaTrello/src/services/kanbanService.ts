import api from './api';

export const getKanbanData = async () => {
  const response = await api.get('/kanban');
  return response.data;
};

export const createCard = async (columnId: string, cardData: { title: string; content: string }) => {
  const response = await api.post(`/columns/${columnId}/cards`, cardData);
  return response.data;
};

export const deleteCard = async (cardId: string) => {
  const response = await api.delete(`/cards/${cardId}`);
  return response.data;
};


