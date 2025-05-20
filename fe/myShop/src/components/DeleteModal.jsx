
import { Modal } from 'antd';
import { deleteProduct, deleteProducts } from '../api/deleteProduct';

const DeleteModal = ({ open, onOk, onCancel, productId, productName, selectedIds }) => {
  const handleDelete = async () => {
    try {
      // Nếu có selectedIds, xóa nhiều sản phẩm
      if (selectedIds && selectedIds.length > 0) {
        await deleteProducts(selectedIds);
        // Đã loại bỏ message.success để tránh hiển thị 2 lần
      } 
      // Nếu có productId, xóa một sản phẩm
      else if (productId) {
        await deleteProduct(productId);
        // Đã loại bỏ message.success để tránh hiển thị 2 lần
      }
      
      // Gọi callback onOk để thông báo xóa thành công
      onOk();
      
      // Đã loại bỏ window.location.reload() để không tải lại trang
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      onCancel(); // Đóng modal khi có lỗi
      throw error; // Ném lỗi để component cha xử lý
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
