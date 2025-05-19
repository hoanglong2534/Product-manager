import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const searchProducts = async (searchParams) => {
  try {
    console.log('Gửi request tìm kiếm với params:', searchParams);
    
    // Đảm bảo searchParams không rỗng
    if (Object.keys(searchParams).length === 0) {
      const response = await axios.get(`${API_URL}/api/all-products`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    }
    
    const response = await axios.post(`${API_URL}/api/get-search-products`, searchParams, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Kết quả từ API tìm kiếm:', response.data);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tìm kiếm sản phẩm:', error.response || error);
    throw error;
  }
};


