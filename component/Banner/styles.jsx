import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  @media (min-width: 1024px) {
    height: ${px2vw(500)};
  }
  @media (max-width: 1023px) {
    height: ${px2vw(1000)};
  }
`;
