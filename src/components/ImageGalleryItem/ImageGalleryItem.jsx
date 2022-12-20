import React from 'react';
import { StyledImageGalleryItem } from './ImageGalleryItemStyles';
// import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ item, openModal }) {
  const { webformatURL, id, tags } = item;

  return (
    <StyledImageGalleryItem>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => openModal(id)}
      />
    </StyledImageGalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
