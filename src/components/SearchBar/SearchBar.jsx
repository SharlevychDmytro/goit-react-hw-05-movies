import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const formSubmit = async e => {
    e.preventDefault();

    const validValue = value.trim();

    if (validValue) {
      onSearch(validValue);
      setValue('');
    }
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
