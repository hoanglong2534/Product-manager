import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const ProductTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    { title: 'Giá (VNĐ)', dataIndex: 'price', render: (price) => price.toLocaleString('vi-VN') },
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

  const data = [
    {
      id: 1,
      name: 'Panasonic Inverter 1HP',
      description: 'Máy lạnh tiết kiệm điện, phù hợp phòng nhỏ.',
      price: 7800000,
      brand: 'Panasonic',
      category: 'Điều hòa',
      power: 9000,
      rating: 3.0,
      stock: 10,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description: 'Điện thoại thông minh với camera chất lượng cao.',
      price: 20000000,
      brand: 'Samsung',
      category: 'Điện thoại',
      power: 100,
      rating: 4.5,
      stock: 5,
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4',
      description: 'Tai nghe chống ồn, âm thanh chất lượng cao.',
      price: 9000000,
      brand: 'Sony',
      category: 'Âm thanh',
      power: 111,
      rating: 4.8,
      stock: 20,
    },
    {
      id: 4,
      name: 'LG OLED55CXPTA',
      description: 'TV OLED 4K, hình ảnh sắc nét.',
      price: 30000000,
      brand: 'LG',
      category: 'TV',
      power: 123,
      rating: 4.7,
      stock: 8,
    },
    {
      id: 5,
      name: 'Dell XPS 13',
      description: 'Laptop mỏng nhẹ, hiệu năng cao.',
      price: 25000000,
      brand: 'Dell',
      category: 'Laptop',
      power: 100,
      rating: 4.6,
      stock: 12,
    },
    {
      id: 6,
      name: 'Apple MacBook Air M1',
      description: 'Laptop mỏng nhẹ, hiệu năng cao.',
      price: 30000000,
      brand: 'Apple',
      category: 'Laptop',
      power: 11,
      rating: 4.9,
      stock: 15,
    },
    {
      id: 7,
      name: 'Bose QuietComfort 35 II',
      description: 'Tai nghe chống ồn, âm thanh chất lượng cao.',
      price: 8000000,
      brand: 'Bose',
      category: 'Âm thanh',
      power: 12,
      rating: 4.5,
      stock: 10,
    },
    {
      id: 8,
      name: 'Samsung Galaxy Tab S7',
      description: 'Máy tính bảng Android với hiệu năng mạnh mẽ.',
      price: 15000000,
      brand: 'Samsung',
      category: 'Máy tính bảng',
      power: 100,
      rating: 4.4,
      stock: 7,
    },
    {
      id: 9,
      name: 'Nikon D3500',
      description: 'Máy ảnh DSLR cho người mới bắt đầu.',
      price: 12000000,
      brand: 'Nikon',
      category: 'Máy ảnh',
      power: 100,
      rating: 4.3,
      stock: 5,
    },
    {
      id: 10,
      name: 'Canon EOS M50',
      description: 'Máy ảnh mirrorless với khả năng quay video 4K.',
      price: 15000000,
      brand: 'Canon',
      category: 'Máy ảnh',
      power: 100,
      rating: 4.6,
      stock: 8,
    },
    {
      id: 11,
      name: 'Apple iPhone 13 Pro',
      description: 'Điện thoại thông minh với camera chất lượng cao.',
      price: 30000000,
      brand: 'Apple',
      category: 'Điện thoại',
      power: 100,
      rating: 4.9,
      stock: 3,
    },
    {
      id: 12,
      name: 'Xiaomi Mi Band 6',
      description: 'Vòng đeo tay thông minh với nhiều tính năng theo dõi sức khỏe.',
      price: 1000000,
      brand: 'Xiaomi',
      category: 'Thiết bị đeo',
      power: 100,
      rating: 4.5,
      stock: 20,
    },
    {
      id: 13,
      name: 'Asus ROG Zephyrus G14',
      description: 'Laptop gaming với hiệu năng mạnh mẽ.',
      price: 40000000,
      brand: 'Asus',
      category: 'Laptop',
      power: 100,
      rating: 4.8,
      stock: 5,
    },

      
    
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <Table columns={columns} dataSource={data} rowKey="id" rowSelection={{}} pagination={{ pageSize: 10 }} />
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