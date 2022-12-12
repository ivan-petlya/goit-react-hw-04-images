import React from 'react';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <>
      {images.map(image => (
        <li key={image.id} className={css.ImageGalleryItem} onClick={showModal}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={css.ImageGalleryItem__image}
            onClick={() => {
              handleModalImage(image.largeImageURL);
              handleModalAlt(image.tags);
            }}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
