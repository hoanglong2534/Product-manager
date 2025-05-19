import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const getAllProducts = async () => {
  try {
    console.log('Đang gọi API:', `${API_URL}/api/all-products`);
    const response = await axios.get(`${API_URL}/api/all-products`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log('Phản hồi từ API:', response);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sản phẩm:', error.response || error);
    throw error;
  }
};