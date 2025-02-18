import Modal from 'react-modal';
import s from './imageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ onClose, picture }) => {

  if (!picture) return null; 

  return (
    
    <Modal
     isOpen={true}
  onRequestClose={onClose} 
  contentLabel="Image Modal"
  className={s.modal} 
  overlayClassName={s.overlay}>
      
      <div className={s.modal}>
        <img src={picture} alt='Large picture' className={s.image} />
      </div>
    </Modal>
  
   
  )
}

export default ImageModal
