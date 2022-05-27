import React from 'react';

import {Container, Title} from './styles';
import ItemProdutos from '../ItemProdutos';
import Brastremp from '../../public/images/produtos/brastremp.png';
import {Swiper, SwiperSlide} from 'swiper/react';

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
    <Container>
      <Title>Encontre o presente que tem a cara do benzinho</Title>
      <Swiper
        modules={[Pagination, Scrollbar]}
        slidesPerView={'auto'}
        spaceBetween={20}
        slidesPerView={4}
        scrollbar={{draggable: true}}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {produtos.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ItemProdutos produto={item}></ItemProdutos>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default Produtos;
