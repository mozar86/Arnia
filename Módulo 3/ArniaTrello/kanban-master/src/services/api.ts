import axios from "axios";

const apiService = axios.create({
  baseURL: "https://arnia-kanban.vercel.app/api",
  headers: {
    "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
  },
});

export const login = async (email: string, password: string) => {
  const response = await apiService.post("/user/login", { email, password });
  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await apiService.post("/user", { name, email, password });
  return response.data;
};

export const createCard = async (title: string, content: string) => {
  const response = await apiService.post("/card", { title, content });
  return response.data;
};

export const getCards = async () => {
  const response = await apiService.get("/card");
  return response.data;
};

export const changeColumnCard = async (id: number, column: string) => {
  const response = await apiService.put(`/card/${id}`, { column });
  return response.data;
};

export const updateCard = async (id: number, title: string, content: string) => {
  const response = await apiService.put(`/card/${id}`, { title, content });
  return response.data;
};

export const deleteCard = async (id: number) => {
  const response = await apiService.delete(`/card/${id}`);
  return response.data;
};

export default apiService;
