
import { Modal } from 'antd';
import { deleteProduct, deleteProducts } from '../api/deleteProduct';

const DeleteModal = ({ open, onOk, onCancel, productId, productName, selectedIds }) => {
  const handleDelete = async () => {
    try {
    
      if (selectedIds && selectedIds.length > 0) {
        await deleteProducts(selectedIds);
      } 
      else if (productId) {
        await deleteProduct(productId);
      }
      
      onOk();
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      onCancel(); 
      throw error; 
    }
  };

  return (
    <Modal
      title="Cảnh báo"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={open}
      onOk={handleDelete}
      onCancel={onCancel}
      okText="Xóa"
      cancelText="Hủy"
    >
      <p>
        {selectedIds && selectedIds.length > 0 
          ? `Bạn có chắc chắn muốn xóa ${selectedIds.length} sản phẩm đã chọn?`
          : `Bạn có chắc chắn muốn xóa sản phẩm ${productName || 'này'}?`}
      </p>
    </Modal>
  );
};

export default DeleteModal;
