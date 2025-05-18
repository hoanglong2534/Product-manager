import React from 'react';
import { Table, Button, Space } from 'antd';

const handleEdit = (id) => {
  console.log('Sửa sản phẩm ID:', id);
  // Thêm logic sửa ở đây, ví dụ mở modal sửa
};

const handleDelete = (id) => {
  console.log('Xóa sản phẩm ID:', id);
  // Thêm logic xóa ở đây, ví dụ gọi API xóa hoặc confirm xóa
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
        <Button
            
          type="default"
          onClick={() => handleEdit(record.id)}
        >
          Sửa
        </Button>
        <Button 
          type="default"
          danger
          onClick={() => handleDelete(record.id)}
        >
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
    name: 'Samsung Smart TV 55"',
    description: 'Smart TV 4K UHD, tích hợp Netflix, YouTube.',
    price: 15000000,
    brand: 'Samsung',
    category: 'Tivi',
    power: 150,
    rating: 3.0,
    stock: 5,
  },
  {
    id: 3,
    name: 'Sharp Refrigerator 300L',
    description: 'Tủ lạnh 2 cửa, ngăn đá trên, tiết kiệm điện.',
    price: 6900000,
    brand: 'Sharp',
    category: 'Tủ lạnh',
    power: 120,
    rating: 3.0,
    stock: 8,
  },
  {
    id: 4,
    name: 'Electrolux Washing Machine 8kg',
    description: 'Giặt sạch mạnh mẽ, inverter tiết kiệm điện.',
    price: 7200000,
    brand: 'Electrolux',
    category: 'Máy giặt',
    power: 200,
    rating: 5.0,
    stock: 6,
  },
  {
    id: 5,
    name: 'LG Microwave Oven 23L',
    description: 'Lò vi sóng có nướng, nhiều chế độ nấu.',
    price: 2200000,
    brand: 'LG',
    category: 'Lò vi sóng',
    power: 800,
    rating: 5.0,
    stock: 15,
  },
  {
    id: 6,
    name: 'Philips Air Fryer XL',
    description: 'Nồi chiên không dầu dung tích lớn, dễ vệ sinh.',
    price: 2800000,
    brand: 'Philips',
    category: 'Nồi chiên không dầu',
    power: 1400,
    rating: 5.0,
    stock: 12,
  },
  {
    id: 7,
    name: 'Daikin Inverter 1.5HP',
    description: 'Làm lạnh nhanh, tiết kiệm điện, bền bỉ.',
    price: 8900000,
    brand: 'Daikin',
    category: 'Điều hòa',
    power: 12000,
    rating: 1.0,
    stock: 4,
  },
  {
    id: 8,
    name: 'Sony Soundbar 2.1',
    description: 'Âm thanh vòm sống động, dễ kết nối Bluetooth.',
    price: 4100000,
    brand: 'Sony',
    category: 'Loa',
    power: 100,
    rating: 4.0,
    stock: 7,
  },
  {
    id: 9,
    name: 'Midea Water Heater 15L',
    description: 'Máy nước nóng chống giật, tiết kiệm điện.',
    price: 2500000,
    brand: 'Midea',
    category: 'Máy nước nóng',
    power: 1500,
    rating: 4.0,
    stock: 9,
  },
  {
    id: 10,
    name: 'Sony Soundbar 2.1',
    description: 'Âm thanh vòm sống động, dễ kết nối Bluetooth.',
    price: 4100000,
    brand: 'Sony',
    category: 'Loa',
    power: 100,
    rating: 4.0,
    stock: 7,
  },
  {
    id: 11,
    name: 'Midea Water Heater 15L',
    description: 'Máy nước nóng chống giật, tiết kiệm điện.',
    price: 2500000,
    brand: 'Midea',
    category: 'Máy nước nóng',
    power: 1500,
    rating: 4.0,
    stock: 9,
  },
];

const ProductTable = () => {
  return (
    <div style={{ padding: 24 }}>
      <Table columns={columns} dataSource={data} rowKey="id" rowSelection={{}} pagination={{ pageSize: 10 }}/>
    </div>
  );
};

export default ProductTable;
