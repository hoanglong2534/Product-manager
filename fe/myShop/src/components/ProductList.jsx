import { Layout, Button, Input, Form, Select, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ProductTable from './ProductTable';
const { Content } = Layout;


export default function ProductList() {
    const [showAdvanced, setShowAdvanced] = useState(false);

    return (
        <>
            <Content className="min-h-[120px] flex flex-col items-center bg-gray-200 px-8 py-8">
                <div className="flex gap-4 w-full max-w-5xl mb-4">
                    <Input placeholder="Nhập tên sản phẩm" className="flex-1" />

                    <Button onClick={() => setShowAdvanced((v) => !v)}>
                        {showAdvanced ? 'Ẩn tiêu chí' : 'Tìm theo tiêu chí khác'}
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />} className="w-32">
                        Tìm kiếm
                    </Button>
                </div>

                {showAdvanced && (
                    <div className="w-full max-w-5xl bg-white rounded shadow p-8 mb-5">
                        <Form layout="vertical">
                            <div className="grid grid-cols-3 gap-6 items-end">
                                <Form.Item label="Danh mục" name="category" className="mb-0">
                                    <Select placeholder="Chọn danh mục">
                                        <Select.Option value="all">Tất cả</Select.Option>
                                        <Select.Option value="thoi-trang">Thời trang</Select.Option>
                                        <Select.Option value="dien-tu">Điện tử</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Giá từ" name="priceFrom" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Giá từ" min={0} />
                                </Form.Item>
                                <Form.Item label="Giá đến" name="priceTo" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Giá đến" min={0} />
                                </Form.Item>
                                <Form.Item label="Công suất từ" name="powerFrom" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Công suất từ" min={0} />
                                </Form.Item>
                                <Form.Item label="Công suất đến" name="powerTo" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Công suất đến" min={0} />
                                </Form.Item>
                                <Form.Item label="Số sao" name="star" className="mb-0">
                                    <Select placeholder="Chọn số sao">
                                        <Select.Option value="all">Tất cả</Select.Option>
                                        <Select.Option value="1">1 Sao</Select.Option>
                                        <Select.Option value="2">2 Sao</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                )}


                <div className='w-full max-w-5xl bg-white rounded shadow p-8'>
                    <div className='flex justify-between mb-4'>
                        <h1 className='text-4xl w-full max-w-3xl'>Danh sách sản phẩm</h1>
                        <div className="flex space-x-4 mt-4">
                            <Button type="primary" shape="round">Thêm sản phẩm</Button>
                            <Button type="primary" shape="round">Xóa</Button>
                        </div>
                    </div>
                    <ProductTable />
                </div>


            </Content>


        </>

    );
} 