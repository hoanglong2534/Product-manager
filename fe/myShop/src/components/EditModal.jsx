import React from 'react';
import { Modal, Form, Input, InputNumber, Row, Col } from 'antd';

const EditModal = ({ open, product, onOk, onCancel, onInputChange }) => {
  return (
    <Modal
      title="Chỉnh sửa sản phẩm"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText="OK"
      cancelText="Cancel"
    >
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tên sản phẩm">
              <Input
                name="name"
                value={product?.name}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mô tả">
              <Input
                name="description"
                value={product?.description}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Giá (VNĐ)">
              <InputNumber
                style={{ width: '100%' }}
                name="price"
                value={product?.price}
                onChange={(value) => onInputChange({ target: { name: 'price', value } })}
                min={0}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Thương hiệu">
              <Input
                name="brand"
                value={product?.brand}
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
                value={product?.category}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Công suất (W)">
              <Input
                name="power"
                value={product?.power}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Số sao">
              <InputNumber
                style={{ width: '100%' }}
                name="rating"
                value={product?.rating}
                onChange={(value) => onInputChange({ target: { name: 'rating', value } })}
                min={0}
                max={5}
                step={0.1}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tồn kho">
              <InputNumber
                style={{ width: '100%' }}
                name="stock"
                value={product?.stock}
                onChange={(value) => onInputChange({ target: { name: 'stock', value } })}
                min={0}
                precision={0}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditModal;
