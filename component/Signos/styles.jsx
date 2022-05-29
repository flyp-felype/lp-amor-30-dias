import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container = styled.div`
  background-color: #fff;
  padding: ${px2vw(50)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    margin-top: ${px2vw(140)};
    width: 80%;
  }
  @media (max-width: 1023px) {
    margin-top: ${px2vw(140)};
    width: 100%;
  }
  -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 300;
  @media (min-width: 1024px) {
    font-size: ${px2vw(35)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(110)};
  }

  color: #878787;
  margin-let: ${px2vw(20)};
  margin-bottom: ${px2vw(20)};
`;

export const IconSigno = styled.div`
  width: 80px;
  margin-right: ${px2vw(20)};
`;

export const Traco = styled.div`
  width: 100%;
  background-color: #52018a;
  height: 1px;
  @media (min-width: 1024px) {
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(40)};
  }
  @media (max-width: 1023px) {
    margin-top: ${px2vw(80)};
    margin-bottom: ${px2vw(100)};
  }
`;

export const Corpo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Combina = styled.span`
  border: 2px solid #dd1c61;
  font-weidht: 100;
  border-radius: 15px;
  padding-left: ${px2vw(20)};
  text-align: center;
  width: auto;
  padding-right: ${px2vw(20)};
  color: #878787;
  @media (min-width: 1024px) {
    font-size: ${px2vw(20)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(60)};
  }
  flex-wrap: wrap;
`;

export const SignoCombina = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-bottom: ${px2vw(15)};
  width: 50%;
`;

export const IconCombina = styled.div`
  @media (min-width: 1024px) {
    width: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    width: ${px2vw(80)};
  }
  margin-right: ${px2vw(10)};
`;

export const SignosCombina = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  margin-top: ${px2vw(40)};
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 1023px) {
    width: auto;
  }
`;
export const TextSigno = styled.text`
  color: #878787;
  @media (min-width: 1024px) {
    font-size: ${px2vw(18)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(70)};
  }
`;

export const ItemDescricao = styled.div`
  color: #878787;
  width: 100%;
  margin-bottom: ${px2vw(20)};
  @media (min-width: 1024px) {
    font-size: ${px2vw(15)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
  }
  font-weight: 100;
`;

export const Color = styled.span`
  color: #dd1c61;
  font-weight: 700;
`;
