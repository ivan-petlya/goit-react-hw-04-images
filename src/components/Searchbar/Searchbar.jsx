import React, { Component } from 'react';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleImageChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      //   return alert('Please, enter image name.');
      Notiflix.Notify.warning('please enter your request');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <span className={css.buttonLabel}>🔍</span>
          </button>

          <input
            name="image"
            className={css.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
