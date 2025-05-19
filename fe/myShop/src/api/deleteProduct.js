import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; 

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-product/${id}`,  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log('Chi tiết lỗi:', error);
    throw new Error('Không thể xóa sản phẩm');
  }
};


export const deleteProducts = async (ids) => {
  try {
    console.log(`Đang xóa nhiều sản phẩm với IDs:`, ids);
    const response = await axios.delete(`${API_URL}/delete-products`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: ids 
    });
    console.log('Kết quả xóa nhiều sản phẩm:', response.data);
    return response.data;
  } catch (error) {
    console.error('Chi tiết lỗi khi xóa nhiều sản phẩm:', error.response || error);
    throw error;
  }
};
