import styled from 'styled-components';
import px2vw from '../utils/px2vw';
import BgMarcia from '../public/images/bg-marcia.png';
import BgMobile from '../public/images/bg-mobile-marcia.png';
import BgSigno from '../public/images/signo-bg.png';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1900px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Body = styled.div``;

export const ContainerClear = styled.div`
  background-color: #fafafa;
  @media (min-width: 1024px) {
    background-image: url(${BgSigno.src});
  }
  background-repeat: no-repeat;
  background-position: bottom left;
  width: 100%;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerSecondeClear = styled.div`
  background-color: #fafafa;
  padding-bottom: 50px;
  width: 100%;
  padding-top: 50px;
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
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;

    width: ${px2vw(1180)};
  }
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Coluna = styled.div`
  width: 50%;

  position: relative;
`;

export const ContainerBG = styled.div`
  @media (min-width: 1024px) {
    background-size: 100%;
    background-repeat: no-repeat;

    background-position: center top;
    background-image: url(${BgMarcia.src});
  }
  @media (min-width: 1900px) {
    height: 1473px;
  }
  @media (max-width: 1023px) {
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${BgMobile.src});
  }
  margin: 0;
`;

export const Footer = styled.div`
  background-color: #dd1c61;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const IntFooter = styled.div`
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1180)};
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconImage = styled.div`
  width: 303px;
  height: 19px;
  margin-top: 10px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
