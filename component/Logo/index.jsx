import React from 'react';

import logoZema from '../../public/images/logo-zema.png';
import Image from 'next/image';

function Logo() {
  return (
    <Image
      src={logoZema}
      alt="Logo Zema"
      layout="responsive"

      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
}

export default Logo;
