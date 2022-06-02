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
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/wr_Qy4rkcx0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>

          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/nvLpt-ts32s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>

          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/vcGuzYZFHOs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>
          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/hjbAKpnUzGU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>
        </Carousel>
      </VideoDesktop>
      <VideoMobile>
        <Carousel itemsToShow={1} showArrows={false}>
          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/wr_Qy4rkcx0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>

          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/nvLpt-ts32s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>

          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/vcGuzYZFHOs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>
          <ImageVideo>
            <iframe
              width="350"
              height="260"
              src="https://www.youtube.com/embed/hjbAKpnUzGU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </ImageVideo>
        </Carousel>
      </VideoMobile>
    </Container>
  );
}

export default Videos;
