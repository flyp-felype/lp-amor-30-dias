import styled from 'styled-components';

export const Input = styled.input`
  font-family: 'Patrick Hand', cursive !important;
  border: none;
  font-size: 20px;

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
