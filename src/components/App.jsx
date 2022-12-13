import fetchPictures from '../services/PixabayApi/Api';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImagesGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Notiflix from 'notiflix';

const Condition = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    images: [],
    imageName: '',
    page: 1,
    condition: Condition.IDLE,
    showButton: false,
    showModal: false,
    modalImage: '',
    imageAlt: '',
  };
  componentDidUpdate(_, prevState) {
    const prevName = prevState.imageName;
    const prevPage = prevState.page;
    const nextName = this.state.imageName;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ condition: Condition.PENDING });

      fetchPictures(nextName, this.state.page)
        .then(images => {
          if (images.hits.length < 1) {
            this.setState({
              showButton: false,
              condition: Condition.IDLE,
            });
            Notiflix.Notify.warning('No images on your query');
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));
          this.setState({
            condition: Condition.RESOLVED,
            showButton:
              this.state.page < Math.ceil(images.total / 12) ? true : false,
          });
        })
        .then(console.log(this.state.images))

        .catch(error => console.log(error));
    }
  }
  handleFormSubmit = imageName => {
    if (imageName === this.state.imageName) {
      return;
    }
    this.setState({
      imageName,
      page: 1,
      images: [],
      showButton: false,
      showModal: false,
      condition: Condition.IDLE,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalImage = event => {
    this.setState({ modalImage: event });
  };

  handleModalAlt = event => {
    this.setState({ imageAlt: event });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, condition, showModal, modalImage, imageAlt, showButton } =
      this.state;

    const {
      handleFormSubmit,
      toggleModal,
      handleModalImage,
      handleModalAlt,
      loadMoreImages,
    } = this;

    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />

        {condition === 'idle' && <p>search somesthing!</p>}
        {condition === 'pending' && <Loader />}

        {images.length > 0 && (
          <ImagesGallery
            showModal={toggleModal}
            images={images}
            handleModalImage={handleModalImage}
            handleModalAlt={handleModalAlt}
          />
        )}
        {showButton && <Button onClick={loadMoreImages} />}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt={imageAlt} />
          </Modal>
        )}
      </>
    );
  }
}
