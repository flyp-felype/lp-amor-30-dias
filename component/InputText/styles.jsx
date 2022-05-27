import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Input = styled.input`
  font-family: 'Patrick Hand', cursive !important;
  border: none;

  font-size: ${px2vw(18)};

  background: transparent;
  color: #666666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #666666;
    font-family: 'Patrick Hand', cursive !important;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
