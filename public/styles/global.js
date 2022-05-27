import {createGlobalStyle} from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-color: #52018A
  }
  :root {
    scrollbar-color: #52018A;
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-slide {
      width: 60%;
    }

    .swiper-slide:nth-child(2n) {
      width: 40%;
    }

    .swiper-slide:nth-child(3n) {
      width: 20%;
    }
    
    ::-webkit-scrollbar {
     background-color: #52018A
    } 
    ::-webkit-scrollbar-thumb {
      background-color: #52018A
    }
`;

export default Global;
