import React from 'react';
import Image from 'next/image';
import logoZema from '../../public/images/logo-zema.png';
// import { Container } from './styles';

function Logo() {
  return (
    <Image
      src={logoZema}
      alt="Logo Zema"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
}

export default Logo;
