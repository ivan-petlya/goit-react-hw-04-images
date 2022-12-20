// import fetchPictures from '../services/PixabayApi/Api';
import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';
// import Notiflix from 'notiflix';

export function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Searchbar onSubmit={setQuery} />
      <div className="container">
        <ImageGallery query={query} />
      </div>
    </>
  );
}
