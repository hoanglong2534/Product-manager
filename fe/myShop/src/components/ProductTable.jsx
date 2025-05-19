import React, { useState, useEffect } from 'react';
import { Table, Button, Space, message } from 'antd';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { getAllProducts } from '../api/getAllProduct';


const ProductTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      console.log('Dữ liệu từ API:', products); // Kiểm tra dữ liệu từ API
      
      // Kiểm tra cấu trúc dữ liệu
      if (Array.isArray(products)) {
        setData(products);
      } else if (products && typeof products === 'object') {
        console.log('API trả về object, không phải array');
        const possibleArrays = Object.values(products).filter(val => Array.isArray(val));
        if (possibleArrays.length > 0) {
          setData(possibleArrays[0]);
        }
      }
    } catch (error) {
      console.error('Chi tiết lỗi:', error); 
      message.error('Không thể tải danh sách sản phẩm');
    } 
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    const product = data.find((item) => item.id === id);
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditOk = () => {
    console.log('Cập nhật sản phẩm:', selectedProduct);
    setIsEditModalOpen(false);
    // Thêm logic lưu thay đổi, ví dụ gọi API cập nhật sản phẩm
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Tên sản phẩm', dataIndex: 'name' },
    { title: 'Mô tả', dataIndex: 'description' },
    { 
      title: 'Giá (VNĐ)', 
      dataIndex: 'price', 
      render: (price) => price ? price.toLocaleString('vi-VN') : '0' 
    },
    { title: 'Thương hiệu', dataIndex: 'brand' },
    { title: 'Loại', dataIndex: 'category' },
    { title: 'Công suất (W)', dataIndex: 'power' },
    { title: 'Số sao', dataIndex: 'rating' },
    { title: 'Tồn kho', dataIndex: 'stock' },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" onClick={() => handleEdit(record.id)}>
            Sửa
          </Button>
          <Button type="default" danger onClick={showModal}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
    
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="id" 
        rowSelection={{}} 
        pagination={{ pageSize: 10 }}
      
      />
      <DeleteModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
      <EditModal
        open={isEditModalOpen}
        product={selectedProduct}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default ProductTable;
