import React from 'react';

import {Container, ImgLogo} from './styles';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
function Banner() {
  return (
    <Container>
      <ImgLogo>
        <Image src={Logo} layout="responsive" quality={100} />
      </ImgLogo>
    </Container>
  );
}

export default Banner;
