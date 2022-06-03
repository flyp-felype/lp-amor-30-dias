import React from 'react';
import Carousel from 'react-elastic-carousel';
import amorEamor from '../../public/images/amorEamor.gif';
import mandaProCrush from '../../public/images/mandaProCrush.gif';
import tragoSeuAmorDeVolta from '../../public/images/tragoSeuAmorDeVolta.gif';
import Image from 'next/image';
import {
  Container,
  Item,
  CarouselMobile,
  CarouselDesktop,
  Circle,
  Pointer,
  ItemImage,
} from './styles';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';

function Carrousel() {
  const items = [
    {id: 1, title: 'item #1', image: amorEamor},
    {id: 2, title: 'item #2', image: mandaProCrush},
    {id: 3, title: 'item #3', image: tragoSeuAmorDeVolta},
  ];
  return (
    <Container>
      <CarouselMobile>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {items.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <ItemImage>
                <Image
                  src={item.image}
                  width={250}
                  height={333}
                  alt={item.title}
                />
              </ItemImage>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselMobile>

      <CarouselDesktop>
        <Carousel itemsToShow={3} pagination={false} showArrows={false}>
          {items.map((item) => (
            <Item key={item.id}>
              <Image src={item.image} alt={item.title} />
            </Item>
          ))}
        </Carousel>
      </CarouselDesktop>
    </Container>
  );
}

export default Carrousel;
