import { useState, useEffect } from 'react';
import { oneOfType, string, number, func } from 'prop-types';
import { BiSearch as IconSearch } from 'react-icons/bi';
import { SearchBtn, SearchForm, Container } from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';
import TextField from 'components/TextField';

// извлекаем onChange, чтобы не перебивал (1) при прокидывании restProps (2)
const Searchbar = ({ style, onSubmit, onChange, ...restProps }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // синхронизация со строкой запроса
  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  const handleSearchQueryChange = e => {
    const query = e?.target.value.trim() || '';
    if (!query) setSearchParams({ query });
    setQuery(query);
    onChange && onChange(query, e);
  };

  // синхронизация со строкой запроса
  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    onSubmit && onSubmit(query, e);
  };

  return (
    <Container style={style}>
      <SearchForm onSubmit={handleFormSubmit}>
        <TextField
          autocomplete="off"
          placeholder="Search movies..."
          onChange={handleSearchQueryChange} // (1)
          value={query}
          {...restProps} // (2)
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

export default Searchbar;
