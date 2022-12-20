import React from 'react';
// import css from './ImageGallery.module.css';
import { StyledImageGallery } from './ImageGalleryStyles';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { useEffect, useState } from 'react';
import fetchPictures from 'services/PixabayApi/Api';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

export default function ImageGallery({ query }) {
  const [imgStorage, setImgStorage] = useState([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [totalHits, setTotalHits] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setImgStorage([]);
    setPage(1);
    setLoading(true);
    fetchPictures(query)
      .then(images => {
        setImgStorage(images.hits);
        setTotalHits(images.totalHits);
      })
      .catch(error => console.log('Something went wrong'))
      .finally(() => setLoading(false));
    if (totalHits === 0) {
      Notify.info('Your query could not find anything');
      setTotalHits('');
    }
  }, [query]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setLoading(true);
    fetchPictures(query, page)
      .then(images => {
        setImgStorage([...imgStorage, ...images.hits]);
        setTotalHits(images.totalHits);
      })
      .catch(error => console.log('Something went wrong'))
      .finally(() => setLoading(false));
  }, [page]);

  const handleLoadMore = evt => {
    evt.preventDefault();
    setPage(page => page + 1);
  };
  const toggleModal = () => setShowModal(showModal => !showModal);
  const openModal = imageId => {
    toggleModal();
    setModalImageIndex(imgStorage.findIndex(image => image.id === imageId));
  };

  return (
    <>
      <StyledImageGallery className="gallery">
        {imgStorage.map(el => (
          <ImageGalleryItem key={el.id} item={el} openModal={openModal} />
        ))}
      </StyledImageGallery>
      {loading && <Loader />}
      {imgStorage.length > 0 && imgStorage.length < totalHits && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
      {showModal && (
        <Modal
          gallery={imgStorage}
          index={modalImageIndex}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
