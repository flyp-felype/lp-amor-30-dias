import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1180)};
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #878787;
  margin: 0px;
  @media (min-width: 1024px) {
    font-size: ${px2vw(30)};
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(50)};
  }
`;

export const ItensVideos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ImageVideo = styled.div`
  width: 388px;
  height: 218px;
`;

export const VideoDesktop = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const VideoMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
`;
