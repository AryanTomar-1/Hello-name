import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getNames = () => axios.get(`${API_URL}/names/get`);

export const addName = (name: string) =>
  axios.post(`${API_URL}/names/add`, { name });

export const cleanNames = () =>
  axios.delete(`${API_URL}/names/clear`);
