import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <section>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem
          images={images}
          handleModalImage={handleModalImage}
          handleModalAlt={handleModalAlt}
          showModal={showModal}
        />
      </ul>
    </section>
  );
};
export default ImageGallery;
