import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const getSearchOptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/get-search`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu tìm kiếm:', error.response || error);
    throw error;
  }
};
