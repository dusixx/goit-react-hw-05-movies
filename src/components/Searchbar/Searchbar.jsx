import TextField from '@components/etc/TextField/TextField.jsx';
import { IconSearch } from '@styles';
import { func, number, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, SearchBtn, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ style, onSubmit, onChange, ...restProps }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  const handleSearchQueryChange = e => {
    const query = e?.target.value.trim() || '';
    setQuery(query);
    onChange && onChange(query, e);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit && onSubmit(query, e);
  };

  return (
    <Container style={style}>
      <SearchForm onSubmit={handleFormSubmit}>
        <TextField
          autocomplete="off"
          placeholder="Search movies..."
          onChange={handleSearchQueryChange}
          value={query}
          {...restProps}
        />

        <SearchBtn type="submit" disabled={!query}>
          <IconSearch size="100%" />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};

Searchbar.propTypes = {
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  onSubmit: func,
  onChange: func,
};
