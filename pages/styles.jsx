import styled from 'styled-components';
import px2vw from '../utils/px2vw';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${px2vw(10)};
  max-width: 1900px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Body = styled.div``;
