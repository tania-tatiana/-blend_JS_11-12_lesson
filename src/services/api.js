import axios from 'axios';

export const DUMMY_API = axios.create({
  baseURL: 'https://dummyjson.com',
});
