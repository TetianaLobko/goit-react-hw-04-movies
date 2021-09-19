import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import s from './SearchBar.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.error(
        'Enter your query!',
      );
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search images and photos"
        />
      </form>
      <ToastContainer /> 
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};