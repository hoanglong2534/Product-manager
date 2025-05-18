import React from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';

const EditModal = ({ open, product, onOk, onCancel, onInputChange }) => {
  return (
    <Modal
      title="Chỉnh sửa sản phẩm"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      {product && (
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Tên sản phẩm">
                <Input
                  name="name"
                  value={product.name}
                  onChange={onInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mô tả">
                <Input
                  name="description"
                  value={product.description}
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
                  value={product.price}
                  onChange={onInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Thương hiệu">
                <Input
                  name="brand"
                  value={product.brand}
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
                  value={product.category}
                  onChange={onInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Công suất (W)">
                <Input
                  name="power"
                  value={product.power}
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
                  value={product.rating}
                  onChange={onInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tồn kho">
                <Input
                  name="stock"
                  value={product.stock}
                  onChange={onInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Modal>
  );
};

export default EditModal;