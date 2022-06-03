import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(1180)};
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #878787;
  margin: 0px;
  line-height: 1.2;
  @media (min-width: 1024px) and (max-width: 1989px) {
    font-size: ${px2vw(30)};
  }
  @media (min-width: 1900px) {
  }
  @media (max-width: 1023px) {
    font-size: ${px2vw(80)};
  }
`;

export const ItensVideos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ImageVideo = styled.div`
  @media (min-width: 1024px) {
    width: 388px;
    height: 218px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const VideoDesktop = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  margin-top: ${px2vw(40)};
`;

export const VideoMobile = styled.div`
  @media (min-width: 1024px) {
    display: block;
    width: 100%;
  }
  @media (max-width: 1023px) {
    display: none;
    width: 100%;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    display: block;
  }
  margin-top: ${px2vw(40)};
`;
