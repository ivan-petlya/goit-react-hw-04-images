import { useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default function App() {
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
