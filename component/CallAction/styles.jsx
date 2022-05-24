import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  flex-directions: row;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: ${px2vw(40)};
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
  font-size: ${px2vw(25)};
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
  font-size: ${px2vw(20)};
  font-weight: 100;
`;
