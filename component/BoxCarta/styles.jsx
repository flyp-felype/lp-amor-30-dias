import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1024)};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: ${px2vw(30)};
`;

export const Carta = styled.div`
  width: 100%;
  height: ${px2vw(500)};
  background-color: #fff;
  border-radius: ${px2vw(15)};
`;
