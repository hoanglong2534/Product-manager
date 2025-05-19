
import { Modal, message } from 'antd';
import { deleteProduct, deleteProducts } from '../api/deleteProduct';

const DeleteModal = ({ open, onOk, onCancel, productId, productName, selectedIds }) => {
  const handleDelete = async () => {
    try {
      // Nếu có selectedIds, xóa nhiều sản phẩm
      if (selectedIds && selectedIds.length > 0) {
        await deleteProducts(selectedIds);
        message.success('Xóa sản phẩm thành công');
      } 
      // Nếu có productId, xóa một sản phẩm
      else if (productId) {
        await deleteProduct(productId);
        message.success('Xóa sản phẩm thành công');
      }
      
      // Gọi callback onOk để thông báo xóa thành công
      onOk();
      
      // Tải lại trang sau khi xóa thành công
      window.location.reload();
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      message.error('Không thể xóa sản phẩm');
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
