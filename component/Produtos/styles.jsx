import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h2`
  color: #878787;
  margin: 0px;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(80)};
    text-align: center;
  }
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CarroselDesktop = styled.div`
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: block;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1900px) {
    display: none;
  }
`;

export const CarroselMobile = styled.div`
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
  @media (min-width: 1900px) {
    display: none;
  }
`;

export const CarroselBig = styled.div`
  @media (min-width: 1024px) and (max-width: 1899px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1900px) {
    display: block;
  }
`;
