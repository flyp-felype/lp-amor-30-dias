import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

import BgCartaz from '../../public/images/bg-cartaz.png';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1180)};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
  }
`;

export const Carta = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: ${px2vw(15)};
  padding: ${px2vw(50)};
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.34);
`;

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BgCartaz.src});
  background-repeat: repeat-y;
  background-size: contain;
`;
export const CartaInterior = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #b6b6b6;
  padding: ${px2vw(50)};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  min-height: 350px;
  height: auto;
  overflow: hidden;
  color: #666666;
  font-size: 18px;
  font-family: 'Patrick Hand', cursive;
  font-weight: 100;
  background: transparent;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const Box = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const LabelData = styled.span`
  color: #666666;
  font-size: 18px;
  font-family: 'Patrick Hand', cursive;
`;

export const SubTitle = styled.h1`
  text-align: center;
  color: #52018a;

  font-size: 25px;
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const GifFooter = styled.div`
  width: 25%;
`;

export const TextButtonFinalizar = styled.span`
  color: #fff;
`;

export const ButtonFinalizar = styled.button`
  background-color: #dd1c61;
  border-radius: 5px;
  padding: 15px;
  border: none;
  margin-top: 40px;
  width: 200px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CheckBox = styled.div`
  font-family: 'Patrick Hand', cursive;
  color: #666666;
  margin-top: 20px;
`;
