import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
`;

export const Item = styled.div`
  @media (max-width: 1023px) {
    width: ${(props) => (props.width ? props.width + '%' : '40%')};
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.width ? props.width + '%' : '30%')};
  }
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7px;
`;

export const Title = styled.span`
  font-family: 'Titillium Web', sans-serif;
  color: #de1d62;
  text-align: center;
  font-weight: 600;
  @media (max-width: 1023px) {
    font-size: ${px2vw(35)};
  }
  @media (min-width: 1024px) {
    font-size: ${px2vw(15)};
  }
`;

export const BigTitle = styled.span`
  @media (max-width: 1023px) {
    font-size: ${px2vw(40)};
  }
  @media (min-width: 1024px) {
    font-size: ${px2vw(19)};
  }
  font-weight: 700;
`;

export const Cupom = styled.div`
  padding: 5px;
  border: 1px dashed #9e9e9e;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.cupomWidth ? props.cupomWidth + '%' : '100%')};
  }
`;

export const TextCupom = styled.span`
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: ${px2vw(45)};
  }
  @media (min-width: 1024px) {
    font-size: ${px2vw(15)};
  }
`;
