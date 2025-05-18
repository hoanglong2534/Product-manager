
import { Modal } from 'antd';


const DeleteModal = ({ open, onOk, onCancel }) => {

  return (
    <>

      <Modal
        title="Cảnh báo"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>

      </Modal>
    </>
  );
};
export default DeleteModal;