import React from 'react';
import Carousel from 'react-elastic-carousel';
import {
  Container,
  Title,
  VideoDesktop,
  ImageVideo,
  VideoMobile,
} from './styles';
import YouTube from '../../public/images/youtubeplayer.png';
import Image from 'next/image';
import YouTube2 from '../../public/images/youtube2.png';
import YouTube3 from '../../public/images/youtube3.png';

function Videos() {
  return (
    <Container>
      <Title>
        Conheça a pessoa que vai te ajudar
        <br /> a conquistar o amor da sua vida!
      </Title>
      <VideoDesktop>
        <Carousel itemsToShow={3} showArrows={false}>
          <ImageVideo>
            <Image src={YouTube} layout="responsive" />
          </ImageVideo>

          <ImageVideo>
            <Image src={YouTube2} layout="responsive" />
          </ImageVideo>

          <ImageVideo>
            <Image src={YouTube3} layout="responsive" />
          </ImageVideo>
        </Carousel>
      </VideoDesktop>
      <VideoMobile>
        <Carousel itemsToShow={1} showArrows={false}>
          <ImageVideo>
            <Image src={YouTube} layout="responsive" />
          </ImageVideo>

          <ImageVideo>
            <Image src={YouTube2} layout="responsive" />
          </ImageVideo>

          <ImageVideo>
            <Image src={YouTube3} layout="responsive" />
          </ImageVideo>
        </Carousel>
      </VideoMobile>
    </Container>
  );
}

export default Videos;
