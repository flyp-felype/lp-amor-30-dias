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

export const ContainerClear = styled.div`
  background-color: #fafafa;
  width: 100%;
  margin-top: -100px;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Traco = styled.div`
  width: 80%;
  height: 1px;
  background-color: #e3deda;
`;

export const Corpo = styled.div`
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1024)};
  }
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: #878787;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
  }
`;

export const Coluna = styled.div`
  width: 50%;
`;
