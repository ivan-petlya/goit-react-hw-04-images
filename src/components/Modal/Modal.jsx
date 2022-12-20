import { createPortal } from 'react-dom';
// import css from './Modal.module.css';
import { StyledModal } from './ModalStyles';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ index, gallery, onClose }) => {
  const [imageIndex, setImageIndex] = useState(index);
  const { tags, largeImageURL } = gallery[imageIndex];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const nextPage = () =>
    setImageIndex(imageIndex === gallery.length - 1 ? 0 : imageIndex + 1);

  const prevPage = () =>
    setImageIndex(imageIndex === 0 ? gallery.length - 1 : imageIndex - 1);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
    if (e.code === 'ArrowRight') {
      nextPage();
    }
    if (e.code === 'ArrowLeft') {
      prevPage();
    }
  };

  return createPortal(
    <StyledModal onClick={handleBackdropClose} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
        <div className="modalBtnsWrap">
          <button className="modalBtn" type="button" onClick={prevPage}>
            {/* ⮨ */}
          </button>
          <button className="modalBtn" type="button" onClick={nextPage}>
            {/* ⮩ */}
          </button>
        </div>
      </div>
    </StyledModal>,
    modalRoot
  );
};

Modal.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
