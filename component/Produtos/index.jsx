import React, {useEffect, useState} from 'react';

import {
  Container,
  Title,
  CarroselDesktop,
  CarroselMobile,
  CarroselBig,
} from './styles';
import ItemProdutos from '../ItemProdutos';
import Brastremp from '../../public/images/produtos/brastremp.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import Carousel from 'react-elastic-carousel';

import ReactLoading from 'react-loading';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

import {Pagination, Scrollbar} from 'swiper';
const produtosMock = [
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
  const [produtos, setProdutos] = useState([]);
  const getProdutos = async () => {
    axios.get(process.env.NEXT_PUBLIC__URL + 'produtos').then((response) => {
      console.log(response.data.items);
      setProdutos(response.data.items);
    });
  };
  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <Container id="produtos">
      <Title>Encontre o presente que tem a cara do benzinho</Title>

      {produtos.length === 0 ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
          <ReactLoading
            type={'spin'}
            color={'#7f11c8'}
            height={50}
            width={50}
          />
        </div>
      ) : null}
      <CarroselBig>
        <Carousel
          itemsToScroll={6}
          showArrows={false}
          itemPosition={'START'}
          itemsToShow={6}>
          {produtos.map((item, index) => {
            return <ItemProdutos produto={item}></ItemProdutos>;
          })}
        </Carousel>
      </CarroselBig>
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
