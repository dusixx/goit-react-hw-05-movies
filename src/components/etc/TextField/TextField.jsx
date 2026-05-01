import { func, string } from 'prop-types';
import { VscClose as IconClose } from 'react-icons/vsc';
import { ClearBtn, Field, Input, InputWrapper } from './TextField.styled';

const TextField = ({ value, type, onChange, onClear, ...restProps }) => {
  return (
    <Field>
      <InputWrapper>
        <Input
          type={type || 'text'}
          onChange={onChange}
          value={value}
          {...restProps}
        />
        {value && (
          <ClearBtn type="button" onClick={() => onClear()}>
            <IconClose size="100%" />
          </ClearBtn>
        )}
      </InputWrapper>
    </Field>
  );
};

TextField.propTypes = {
  value: string,
  type: string,
  onChange: func,
};

export default TextField;
