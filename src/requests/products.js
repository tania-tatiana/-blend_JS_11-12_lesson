import axios from 'axios';
import { DUMMY_API } from '../services/api';
//Task1
export async function getAllProducts() {
  return await DUMMY_API.get('/products');
}
//Task2
export async function getProductById(id) {
  return await DUMMY_API.get(`/products/${id}`);
}
