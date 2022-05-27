import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgLogo = styled.div`
  @media (max-width: 1023px) {
    width: 70%;
  }
  @media (min-width: 1024px) and (max-width: 1899px) {
    width: 500px;
  }

  @media (min-width: 1900px) {
    width: 700px;
  }
  margin-top: 50px;
`;
