import React from 'react';
import Carousel from 'react-elastic-carousel';
import amorEamor from '../../public/images/amorEamor.png';
import mandaProCrush from '../../public/images/mandaProCrush.png';
import tragoSeuAmorDeVolta from '../../public/images/tragoSeuAmorDeVolta.png';
import Image from 'next/image';
import {
  Container,
  Item,
  CarouselMobile,
  CarouselDesktop,
  Circle,
  Pointer,
} from './styles';

function Carrousel() {
  const items = [
    {id: 1, title: 'item #1', image: amorEamor},
    {id: 2, title: 'item #2', image: mandaProCrush},
    {id: 3, title: 'item #3', image: tragoSeuAmorDeVolta},
  ];
  return (
    <Container>
      <CarouselMobile>
        <Carousel
          itemsToShow={1}
          renderPagination={({pages, activePage, onClick}) => {
            return (
              <Circle>
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  console.log('isActivePage ', isActivePage);
                  return (
                    <Pointer
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </Circle>
            );
          }}>
          {items.map((item) => (
            <Item key={item.id}>
              <Image src={item.image} alt={item.title} />
            </Item>
          ))}
        </Carousel>
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
