import React, { useState } from 'react';
import { Table, Button, Space, message } from 'antd';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { updateProduct } from '../api/updateProduct';
import { deleteProduct } from '../api/deleteProduct';

const ProductTable = ({ rowSelection, data = [], loading = false, onDataUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleEdit = (id) => {
    const product = data.find((item) => item.id === id);
    if (product) {
      setSelectedProduct(product);
      setIsEditModalOpen(true);
    } else {
      message.warning('Không tìm thấy sản phẩm');
    }
  };

  const handleDelete = (record) => {
    setProductToDelete(record);
    setIsDeleteModalOpen(true);
  };

  const handleEditOk = async () => {
    try {
      await updateProduct(selectedProduct.id, selectedProduct);
      message.success('Cập nhật thành công');
      setIsEditModalOpen(false);
      // Loại bỏ window.location.reload() để không tải lại trang
      
      // Cập nhật dữ liệu trong state
      const updatedData = data.map(item => 
        item.id === selectedProduct.id ? selectedProduct : item
      );
      // Nếu component cha có hàm callback để cập nhật dữ liệu
      if (onDataUpdate) {
        onDataUpdate(updatedData);
      }
    } catch (error) {
      message.error('Không thể cập nhật sản phẩm');
    }
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteOk = async () => {
    try {
      if (productToDelete && productToDelete.id) {
        await deleteProduct(productToDelete.id);
        message.success('Xóa sản phẩm thành công');
        // Loại bỏ window.location.reload() để không tải lại trang
        
        // Cập nhật dữ liệu trong state
        const updatedData = data.filter(item => item.id !== productToDelete.id);
        // Nếu component cha có hàm callback để cập nhật dữ liệu
        if (onDataUpdate) {
          onDataUpdate(updatedData);
        }
      }
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      message.error('Không thể xóa sản phẩm');
    }
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
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
          <Button type="default" danger onClick={() => handleDelete(record)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={{ pageSize: 10 }}
      />
      <DeleteModal 
        open={isDeleteModalOpen} 
        onOk={handleDeleteOk} 
        onCancel={handleDeleteCancel} 
        productId={productToDelete?.id}
        productName={productToDelete?.name}
      />
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
