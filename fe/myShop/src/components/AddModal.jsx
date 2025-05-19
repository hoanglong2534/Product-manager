import React from 'react';
import { Modal, Form, Input, InputNumber, Row, Col } from 'antd';

const AddModal = ({ open, newProduct, onOk, onCancel, onInputChange }) => {
  return (
    <Modal
      title="Thêm sản phẩm"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText="Thêm"
      cancelText="Hủy"
    >
      <Form layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tên sản phẩm">
              <Input
                name="name"
                value={newProduct?.name}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mô tả">
              <Input
                name="description"
                value={newProduct?.description}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Giá (VNĐ)">
              <InputNumber
                name="price"
                value={newProduct?.price}
                onChange={(value) =>
                  onInputChange({ target: { name: 'price', value } })
                }
                min={0}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Thương hiệu">
              <Input
                name="brand"
                value={newProduct?.brand}
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
                value={newProduct?.category}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Công suất (W)">
              <Input
                name="power"
                value={newProduct?.power}
                onChange={onInputChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Số sao">
              <InputNumber
                name="rating"
                value={newProduct?.rating}
                onChange={(value) =>
                  onInputChange({ target: { name: 'rating', value } })
                }
                min={0}
                max={5}
                step={0.1}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tồn kho">
              <InputNumber
                name="stock"
                value={newProduct?.stock}
                onChange={(value) =>
                  onInputChange({ target: { name: 'stock', value } })
                }
                min={0}
                precision={0}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddModal;
