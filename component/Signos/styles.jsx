import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  @media (min-width: 1024px) {
    margin-top: ${px2vw(140)};
  }
  -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
`;
