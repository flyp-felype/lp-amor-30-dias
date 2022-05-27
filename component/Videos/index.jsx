import React from 'react';

import {Container, Title, ItensVideos, ImageVideo} from './styles';
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
      <ItensVideos>
        <ImageVideo>
          <Image src={YouTube} layout="responsive" />
        </ImageVideo>

        <ImageVideo>
          <Image src={YouTube2} layout="responsive" />
        </ImageVideo>

        <ImageVideo>
          <Image src={YouTube3} layout="responsive" />
        </ImageVideo>
      </ItensVideos>
    </Container>
  );
}

export default Videos;
