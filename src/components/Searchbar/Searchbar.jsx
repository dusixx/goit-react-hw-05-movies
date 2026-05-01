import TextField from '@components/etc/TextField/TextField.jsx';
import { IconSearch } from '@styles';
import { func, number, oneOfType, string } from 'prop-types';
import { Container, SearchBtn, SearchForm } from './Searchbar.styled';

export const Searchbar = ({
  style,
  onSubmit,
  onChange,
  value,
  ...restProps
}) => {
  const handleChange = e => {
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    onChange?.('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <Container style={style}>
      <SearchForm onSubmit={handleSubmit}>
        <TextField
          autocomplete="off"
          placeholder="Search movies..."
          onChange={handleChange}
          onClear={handleClear}
          value={value}
          {...restProps}
        />
        <SearchBtn type="submit" disabled={!value}>
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
