import TextField from '@components/etc/TextField/TextField.jsx';
import { IconSearch } from '@styles';
import { func, number, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, SearchBtn, SearchForm } from './Searchbar.styled';

// extract onChange so it doesn't overlap(1) when propagating restProps(2)
export const Searchbar = ({ style, onSubmit, onChange, ...restProps }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  // when manually changing the query string and pressing Enter,
  // the text in the search field will change.
  useEffect(() => {
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  // you can change ?query in the request here, but need to debounce it
  const handleSearchQueryChange = e => {
    const query = e?.target.value.trim() || '';
    setQuery(query);
    onChange && onChange(query, e);
  };

  // change ?query in the query string only when submitting
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
          onChange={handleSearchQueryChange} //(1)
          value={query}
          {...restProps} //(2)
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
