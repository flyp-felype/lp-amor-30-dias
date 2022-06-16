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

export const Strong = styled.span`
  font-weight: bold;
  color: #878787;
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
    display: block;
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
    display: none;
  }
`;

export const TitleMobile = styled.h1`
  text-align: center;
  color: #fff;
  width: 80%;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
    display: none;
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
    display: block;
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
  padding: ${px2vw(10)} ${px2vw(50)} ${px2vw(50)} ${px2vw(50)};
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
  background-repeat: no-repeat;
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
  overflow: hidden;
  color: #666666;
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
    min-height: ${px2vw(570)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(38)};
    min-height: ${px2vw(1070)};
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
  position: relative;
  border-radius: 5px;
  z-index: 99999;
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
  width: 100%;
`;

export const CheckBox = styled.div`
  font-family: 'Titillium Web', sans-serif;
  color: #666666;
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    font-size: ${px2vw(15)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(40)};
  }
`;

export const Formularios = styled.div`
  width: 100%;
  margin-top: 50px;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CorpoForm = styled.div`
  @media (min-width: 1024px) {
    width: 47%;
    margin-right: 3%;
    border-radius: 15px;
    padding: ${px2vw(40)};
    float: left;
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding: ${px2vw(90)};
  }

  background-color: #7f11c8;
`;
export const CorpoForm2 = styled.div`
  @media (min-width: 1024px) {
    width: 47%;
    margin-right: 3%;
    border-radius: 15px;
    padding: ${px2vw(40)};
    float: left;
    z-index: 99;
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding: ${px2vw(90)};
  }
  background-color: #7f11c8;
`;

export const TitleForm = styled.h3`
  color: #fff;
  display: flex;
  flex-direction: row;
  vertical-align: baseline;
  @media (min-width: 1024px) {
    font-size: ${px2vw(28)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(88)};
  }
  margin-left: ${px2vw(50)};
`;

export const Quadrado = styled.div`
  width: 7px;
  height: 7px;
  background-color: #ffcc00;
  @media (min-width: 1024px) {
    margin-top: ${px2vw(25)};
  }
  @media (max-width: 1023px) {
    margin-top: ${px2vw(76)};
  }
  margin-right: ${px2vw(5)};
`;

export const Input = styled.input`
  background-color: ${(props) => (props.disabled ? '#dbd9d9' : '#fff')};
  border-radius: 5px;
  font-family: 'Titillium Web', sans-serif;
  @media (min-width: 1024px) {
    font-size: ${px2vw(17)};
    margin-bottom: ${px2vw(10)};
    margin-top: ${px2vw(10)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(47)};
    margin-bottom: ${px2vw(20)};
    margin-top: ${px2vw(20)};
  }
  width: 100%;
  padding: 20px;
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
  float: right;
  @media (min-width: 1024px) {
    margin-top: -90px;
    width: 414px;
    height: 304px;
  }
  @media (max-width: 1023px) {
    margin-top: 10px;
    width: 314px;
    height: 204px;
  }

  z-index: 9;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-content: center;
  align-self: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid #df1179;
  &:checked {
    background-color: #df1179;
  }
  &:after {
    background-color: #df1179;
  }
`;

export const LabelRadio = styled.span`
  color: #9e9e9e;
  font-weight: bold;
  font-size: ${px2vw(20)};
  margin-left: 5px;
  vertical-align: text-bottom;
`;

export const ItemRadio = styled.label`
  margin-left: 20px;
  margin-right: 20px;
`;
