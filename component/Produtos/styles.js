import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-weight: 400;
  color: #878787;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
  }
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
