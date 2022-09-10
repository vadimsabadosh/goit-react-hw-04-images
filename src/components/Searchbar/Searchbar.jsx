import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState('');

  function onInput(e) {
    setInput(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (input) {
      onSubmit(input);
    }
  }
  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={onFormSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={onInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
