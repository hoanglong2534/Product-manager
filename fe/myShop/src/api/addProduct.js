import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/api/add-product`, product, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Lỗi khi thêm sản phẩm:', error.response || error);
    throw error;
  }
};