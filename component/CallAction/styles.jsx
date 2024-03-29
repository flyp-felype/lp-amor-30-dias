import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-directions: row;
  @media (min-width: 1024px) {
    display: flex;
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(2)};
  }
  @media (max-width: 1023px) {
    display: none;
    margin-top: ${px2vw(40)};
    margin-bottom: ${px2vw(40)};
  }
  justify-content: space-between;
`;

export const ContainerMobile = styled.div`
  margin-top: ${px2vw(40)};
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;
export const Title = styled.h1`
  text-align: center;
  line-height: 1.2;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: ${px2vw(40)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(65)};
  }
`;

export const ButtonCallAction = styled.a`
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: ${px2vw(25)};
  margin-top: ${px2vw(25)};
  text-align: center;
  text-decoration: none;
  width: 80%;
  background-color: #ffcc00;
  border-radius: 35px;
  color: #52018a;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: ${px2vw(25)};
    display: block;
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(45)};
    display: none;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
  border: none;
  cursor: pointer;
`;

export const DivButtonMobile = styled.div`
  margin-bottom: ${px2vw(50)};
  margin-top: ${px2vw(50)};
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #ffcc00;
  border-radius: 35px;
  color: #52018a;
  vertical-align: text-top;
  width: 80%;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: ${px2vw(25)};
    display: none;
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(45)};
    display: flex;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
  border: none;
  cursor: pointer;
`;
export const ButtonCallActionMobile = styled.a`
  text-decoration: none;
  width: 100%;
  padding-left: 40px;
`;

export const Text = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

export const TextMobile = styled.label`
  margin-left: 10px;
  cursor: pointer;
  font-size: ${px2vw(50)};
  padding-left: 20px;
  vertical-align: text-top;
  margin-top: -25px;
  display: block;
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
