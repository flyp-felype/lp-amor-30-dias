import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-directions: row;
  margin-top: 40px;
  @media (min-width: 1024px) {
    display: flex;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  justify-content: space-between;
`;

export const ContainerMobile = styled.div`
  margin-top: 40px;
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: ${px2vw(40)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(65)};
  }
`;

export const ButtonCallAction = styled.button`
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
  width: 80%;
  background-color: #ffcc00;
  border-radius: 35px;
  color: #52018a;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: ${px2vw(25)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(45)};
  }

  border: none;
  cursor: pointer;
`;

export const Text = styled.label`
  margin-left: 10px;
  vertical-align: text-top;
`;

export const BlocoImage = styled.div`
  width: 270px;
  heigth: auto;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 100;
  @media (min-width: 1024px) {
    font-size: ${px2vw(25)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(45)};
  }
`;