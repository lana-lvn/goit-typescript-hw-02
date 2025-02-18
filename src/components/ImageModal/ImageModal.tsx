import Modal from "react-modal";
import s from "./imageModal.module.css";
import { FC } from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  onClose: () => void;
  picture: string;
}

const ImageModal: FC<ImageModalProps> = ({ onClose, picture }) => {
  if (!picture) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modal}>
        <img src={picture} alt="Large picture" className={s.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
