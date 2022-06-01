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
    width: ${px2vw(1024)};
  }
`;
export const ContainerClear = styled.div`
  background-color: #fafafa;

  background-repeat: no-repeat;
  background-position: bottom left;
  width: 100vw;
  margin-top: -100px;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CorpoRetorno = styled.div`
  @media (min-width: 1024px) {
    flex-wrap: nowrap;

    width: ${px2vw(1024)};
  }
  margin-top: ${px2vw(50)};
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

export const TitleEx = styled.h1`
  text-align: center;

  color: #878787;
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
  z-index: 999;
  border-radius: ${px2vw(15)};
  padding: ${px2vw(50)};
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    max-width: ${px2vw(1000)};
  }
  -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
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

export const Traco = styled.div`
  width: 80%;
  height: 1px;
  background-color: #e3deda;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  height: auto;
  overflow: hidden;
  color: #666666;
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
    min-height: ${px2vw(370)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(38)};
    min-height: ${px2vw(970)};
  }
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
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(38)};
  }
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
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(38)};
  }
`;

export const ButtonFinalizar = styled.button`
  background-color: #dd1c61;
  border-radius: 5px;
  padding: 15px;
  border: none;
  margin-top: 40px;
  width: 200px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
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
  font-family: 'Titillium Web', sans-serif;
  color: #666666;
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    font-size: ${px2vw(15)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(30)};
  }
`;

export const Formularios = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const CorpoForm = styled.div`
  width: 47%;
  background-color: #7f11c8;
  margin-right: 3%;
  border-radius: 15px;
  padding: ${px2vw(40)};
  float: left;
`;
export const CorpoForm2 = styled.div`
  width: 47%;
  background-color: #7f11c8;
  margin-left: 3%;
  border-radius: 15px;
  padding: ${px2vw(40)};
  float: left;
  z-index: 9;
`;

export const TitleForm = styled.h3`
  color: #fff;
  display: flex;
  flex-direction: row;
  vertical-align: baseline;
  font-size: ${px2vw(28)};
  margin-left: ${px2vw(50)};
`;

export const Quadrado = styled.div`
  width: 7px;
  height: 7px;
  background-color: #ffcc00;
  margin-top: ${px2vw(25)};
  margin-right: ${px2vw(5)};
`;

export const Input = styled.input`
  background-color: ${(props) => (props.disabled ? '#dbd9d9' : '#fff')};
  border-radius: 5px;
  font-family: 'Titillium Web', sans-serif;
  font-size: ${px2vw(17)};
  width: 100%;
  padding: 20px;
  margin-bottom: ${px2vw(10)};
  margin-top: ${px2vw(10)};
  border: none;
  color: #666666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #666666;
  }
  ::d,
  ::-webkit-input-placeholder {
    color: #666666;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box60 = styled.div`
  width: 53%;
`;
export const Box40 = styled.div`
  width: 40%;
`;

export const BottonCarta = styled.div`
  width: 414px;
  height: 304px;
  float: right;
  margin-top: -9 0px;
`;
