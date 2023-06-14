import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { oneOfType, string, number, func } from 'prop-types';
import { SearchBtn, SearchForm, Container } from './Searchbar.styled';
import TextField from 'components/etc/TextField';
import { IconSearch } from 'styles/icons';

// извлекаем onChange, чтобы не перебивал (1) при прокидывании restProps (2)
const Searchbar = ({ style, onSubmit, onChange, ...restProps }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // При изменении вручную строки запроса и нажатии Enter -
  // изменится текст в поле поиска
  useEffect(() => {
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  // можно менять ?query в запросе тут, но надо делать debounce
  const handleSearchQueryChange = e => {
    const query = e?.target.value.trim() || '';
    setQuery(query);
    onChange && onChange(query, e);
  };

  // Менеям ?query в строке запроса только при сабмите
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
