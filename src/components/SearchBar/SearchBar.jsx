import { useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from 'components/SearchBar/SearchBar.styled';
import { Outlet } from 'react-router-dom';

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
      <Box paddingTop="20px">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
