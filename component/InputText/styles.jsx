import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Input = styled.input`
  font-family: 'Patrick Hand', cursive !important;
  border: none;
  width: 100%;
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(38)};
  }
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
