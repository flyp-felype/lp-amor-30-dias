import React from 'react';

import {Container, Title, CarroselDesktop, CarroselMobile} from './styles';
import ItemProdutos from '../ItemProdutos';
import Brastremp from '../../public/images/produtos/brastremp.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import Carousel from 'react-elastic-carousel';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Pagination, Scrollbar} from 'swiper';
const produtos = [
  {
    off: '15% OFF',
    image: Brastremp,
    frete: 'Frete Grátis',
    title: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350L...',
    price: 'R$2.599,00',
    priceDiscount: 'R$2.199,00',
    dividido: 'ou em até 10x de R$ 219,00 s/ juros',
    star: 3,
  },
  {
    off: '15% OFF',
    image: Brastremp,
    frete: 'Frete Grátis',
    title: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350L...',
    price: 'R$2.599,00',
    priceDiscount: 'R$2.199,00',
    dividido: 'ou em até 10x de R$ 219,00 s/ juros',
    star: 4,
  },
  {
    off: '15% OFF',
    image: Brastremp,
    frete: 'Frete Grátis',
    title: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350L...',
    price: 'R$2.599,00',
    priceDiscount: 'R$2.199,00',
    dividido: 'ou em até 10x de R$ 219,00 s/ juros',
    star: 2,
  },
  {
    off: '15% OFF',
    image: Brastremp,
    frete: 'Frete Grátis',
    title: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350L...',
    price: 'R$2.599,00',
    priceDiscount: 'R$2.199,00',
    dividido: 'ou em até 10x de R$ 219,00 s/ juros',
    star: 4,
  },
  {
    off: '15% OFF',
    image: Brastremp,
    frete: 'Frete Grátis',
    title: 'Geladeira/Refrigerador Brastemp Frost Free Evox 350L...',
    price: 'R$2.599,00',
    priceDiscount: 'R$2.199,00',
    dividido: 'ou em até 10x de R$ 219,00 s/ juros',
    star: 5,
  },
];
function Produtos() {
  return (
    <Container id="produtos">
      <Title>Encontre o presente que tem a cara do benzinho</Title>
      <CarroselDesktop>
        <Carousel showArrows={false} itemPosition={'START'} itemsToShow={4}>
          {produtos.map((item, index) => {
            return <ItemProdutos produto={item}></ItemProdutos>;
          })}
        </Carousel>
      </CarroselDesktop>
      <CarroselMobile>
        <Carousel showArrows={false} itemsToShow={1}>
          {produtos.map((item, index) => {
            return <ItemProdutos produto={item}></ItemProdutos>;
          })}
        </Carousel>
      </CarroselMobile>
    </Container>
  );
}

export default Produtos;
