import axios from 'axios';

export const api = (baseURL: string) => {
  const axiosApi = axios.create({ baseURL });
  return axiosApi;
};
