import { Layout, Button, Input, Form, Select, InputNumber, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import { deleteProducts } from '../api/deleteProduct';
import { getAllProducts } from '../api/getAllProduct';
import { getSearchOptions } from '../api/getSearchOptions';
import { searchProducts } from '../api/searchProducts';
import { addProduct } from '../api/addProduct';

const { Content } = Layout;

export default function ProductList() {
    
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState({});
    const [searchName, setSearchName] = useState('');
    const [form] = Form.useForm();

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    
    const handleCustomInputChange = (name, value) => {
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

   
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await getAllProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi tải danh sách sản phẩm:', error);
                message.error('Không thể tải danh sách sản phẩm');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    useEffect(() => {
        const fetchSearchOptions = async () => {
            try {
                const data = await getSearchOptions();
                console.log('Dữ liệu tìm kiếm:', data);
                
                
                if (data && data.categories) {
                    setCategories(data.categories);
                }
            } catch (error) {
                console.error('Lỗi khi tải dữ liệu tìm kiếm:', error);
            }
        };

        fetchSearchOptions();
    }, []);


    const reloadCategories = async () => {
        try {
            const data = await getSearchOptions();
            if (data && data.categories) {
                console.log('Tải lại categories:', data.categories);
                setCategories(data.categories);
            }
        } catch (error) {
            console.error('Lỗi khi tải lại danh sách categories:', error);
        }
    };

    const handleAddOk = async () => {
        try {
            await addProduct(newProduct);
            message.success('Thêm sản phẩm thành công');
            setIsAddModalOpen(false);
            setNewProduct({});
            
          
            const data = await getAllProducts();
            setProducts(data);
            
            
            await reloadCategories();
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            message.error('Không thể thêm sản phẩm');
        }
    };

    const handleAddCancel = () => {
        setIsAddModalOpen(false);
    };

    const handleDeleteOk = async () => {
        if (selectedRowKeys.length > 0) {
            try {
                await deleteProducts(selectedRowKeys);
                message.success('Xóa sản phẩm thành công');
                
                
                setProducts(prevProducts => 
                    prevProducts.filter(product => !selectedRowKeys.includes(product.id))
                );
                
               
                setSelectedRowKeys([]);
            } catch (error) {
                console.error('Lỗi khi xóa sản phẩm:', error);
                message.error('Không thể xóa sản phẩm');
            }
        } else {
            message.warning('Vui lòng chọn sản phẩm cần xóa');
        }
        setIsDeleteModalOpen(false);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('Đã chọn các hàng:', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleSearch = async () => {
        try {
            setLoading(true);
            
           
            let values = {};
            if (showAdvanced) {
                try {
                    values = await form.validateFields();
                } catch (error) {
                    console.log('Form validation failed:', error);
                }
            }
            
           
            const searchParams = {
                name: searchName || undefined,
                ...values
            };
            
            
            Object.keys(searchParams).forEach(key => {
                if (searchParams[key] === undefined || searchParams[key] === '' || searchParams[key] === null || searchParams[key] === 'all') {
                    delete searchParams[key];
                }
            });
            
            console.log('Tham số tìm kiếm:', searchParams);
            
          
            if (Object.keys(searchParams).length === 0) {
                console.log('Không có tham số tìm kiếm, lấy tất cả sản phẩm');
                const data = await getAllProducts();
                setProducts(data);
                setLoading(false);
                return;
            }
            
           
            try {
                const data = await searchProducts(searchParams);
                console.log('Kết quả tìm kiếm:', data);
                
                if (Array.isArray(data)) {
                    setProducts(data);
                    if (data.length === 0) {
                        message.info('Không tìm thấy sản phẩm nào phù hợp');
                    }
                } else {
                    console.error('Dữ liệu trả về không phải là mảng:', data);
                    message.error('Dữ liệu trả về không đúng định dạng');
                    
                    const allData = await getAllProducts();
                    setProducts(allData);
                }
            } catch (searchError) {
                console.error('Lỗi khi tìm kiếm:', searchError);
                message.error('Không thể tìm kiếm sản phẩm, hiển thị tất cả sản phẩm');
                
                const allData = await getAllProducts();
                setProducts(allData);
            }
        } catch (error) {
            console.error('Lỗi khi tìm kiếm sản phẩm:', error);
            message.error('Không thể tìm kiếm sản phẩm');
        } finally {
            setLoading(false);
        }
    };

    const handleProductDataUpdate = (updatedData) => {
        setProducts(updatedData);
    };

    const handleCategoriesUpdate = async () => {
        await reloadCategories();
    };

    return (
        <>
            <Content className="min-h-[120px] flex flex-col items-center bg-gray-200 px-8 py-8">
                <div className="flex gap-4 w-full max-w-5xl mb-4">
                    <Input 
                        placeholder="Nhập tên sản phẩm" 
                        className="flex-1" 
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        onPressEnter={handleSearch}
                    />
                    <Button onClick={() => setShowAdvanced((v) => !v)}>
                        {showAdvanced ? 'Ẩn tiêu chí' : 'Tìm theo tiêu chí khác'}
                    </Button>
                    <Button 
                        type="primary" 
                        icon={<SearchOutlined />} 
                        className="w-32"
                        onClick={handleSearch}
                    >
                        Tìm kiếm
                    </Button>
                </div>
                {showAdvanced && (
                    <div className="w-full max-w-5xl bg-white rounded shadow p-8 mb-5">
                        <Form form={form} layout="vertical">
                            <div className="grid grid-cols-2 gap-6 items-end">
                                <Form.Item label="Danh mục" name="category" className="mb-0">
                                    <Select placeholder="Chọn danh mục" key={categories.length}>
                                        <Select.Option value="all">Tất cả</Select.Option>
                                        {categories.map((category, index) => (
                                            <Select.Option key={index} value={category}>
                                                {category}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Thương hiệu" name="brand" className="mb-0">
                                    <Input placeholder="Nhập thương hiệu" />
                                </Form.Item>
                                <Form.Item label="Giá từ" name="priceFrom" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Giá từ" min={0} />
                                </Form.Item>
                                <Form.Item label="Giá đến" name="priceTo" className="mb-0">
                                    <InputNumber className="w-full" placeholder="Giá đến" min={0} />
                                </Form.Item>
                                <Form.Item label="Công suất từ" name="powerFrom" className="mb-0 col-span-1">
                                    <InputNumber className="w-full" placeholder="Công suất từ" min={0} />
                                </Form.Item>
                                <Form.Item label="Công suất đến" name="powerTo" className="mb-0 col-span-1">
                                    <InputNumber className="w-full" placeholder="Công suất đến" min={0} />
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                )}

                <div className="w-full max-w-5xl bg-white rounded shadow p-8">
                    <div className="flex justify-between mb-4">
                        <h1 className="text-4xl w-full max-w-3xl">Danh sách sản phẩm</h1>
                        <div className="flex space-x-4">
                            <Button type="primary" shape="round" onClick={() => setIsAddModalOpen(true)}>
                                Thêm sản phẩm
                            </Button>
                            <Button 
                                type="primary" 
                                danger 
                                shape="round" 
                                onClick={() => setIsDeleteModalOpen(true)}
                                disabled={selectedRowKeys.length === 0}
                            >
                                Xóa ({selectedRowKeys.length})
                            </Button>
                        </div>
                    </div>
                    <ProductTable 
                        rowSelection={rowSelection} 
                        data={products} 
                        loading={loading}
                        onDataUpdate={handleProductDataUpdate}
                        onCategoriesUpdate={handleCategoriesUpdate}
                    />
                </div>

                <AddModal
                    open={isAddModalOpen}
                    onOk={handleAddOk}
                    onCancel={handleAddCancel}
                    newProduct={newProduct}
                    onInputChange={handleInputChange}
                    onCustomInputChange={handleCustomInputChange}
                    categories={categories}
                />

                <DeleteModal
                    open={isDeleteModalOpen}
                    onOk={handleDeleteOk}
                    onCancel={handleDeleteCancel}
                    selectedIds={selectedRowKeys}
                />
            </Content>
        </>
    );
}




























