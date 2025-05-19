import axios from 'axios';

const API_URL = 'http://localhost:8080/api/update-product'; 

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log('Chi tiết lỗi:', error);
    throw new Error('Không thể cập nhật sản phẩm');
  }
};
