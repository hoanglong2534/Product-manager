import React from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';

const AddModal = ({ open, newProduct, onOk, onCancel, onInputChange }) => {
  return (
    <Modal
      title="Thêm sản phẩm mới"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tên sản phẩm">
              <Input
                name="name"
                value={newProduct.name}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mô tả">
              <Input
                name="description"
                value={newProduct.description}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Giá (VNĐ)">
              <Input
                name="price"
                value={newProduct.price}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Thương hiệu">
              <Input
                name="brand"
                value={newProduct.brand}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Loại">
              <Input
                name="category"
                value={newProduct.category}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Công suất (W)">
              <Input
                name="power"
                value={newProduct.power}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Số sao">
              <Input
                name="rating"
                value={newProduct.rating}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tồn kho">
              <Input
                name="stock"
                value={newProduct.stock}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddModal;