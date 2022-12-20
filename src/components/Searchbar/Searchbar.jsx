import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
// import css from './Searchbar.module.css';
import { StyledSearchbar } from './SearchbarStyles';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => setQuery(evt.target.value.toLowerCase());

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return Notify.info('Sorry, Please enter a more specific query');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearchbar>
      <form onSubmit={handleSearchSubmit} className="searchForm">
        <button type="submit" className="searchForm-button">
          <span>🔍</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </StyledSearchbar>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
