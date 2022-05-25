import React from 'react';

import {Container, Title, Cupom, TextCupom, Item, BigTitle} from './styles';

const itensCupos = [
  {
    desconto: '05%OFF',
    title: 'EM Telefonia',
    cupom: 'BJMELIGA5',
  },
  {
    desconto: '07%OFF',
    title: 'EM Tvs e Som',
    cupom: 'OLHAPRAMIM',
  },
  {
    desconto: '15%OFF',
    title: 'EM Perfumes',
    cupom: 'CHEIROBOM',
  },
  {
    desconto: '10%OFF',
    title: 'EM Tênis',
    cupom: 'VEMCORRENDO',
  },
  {
    desconto: '07%OFF',
    title: 'EM Informática',
    cupom: 'CONEXAOMOZ',
  },
  {
    desconto: '10%OFF',
    title: 'EM Móveis',
    cupom: 'INDIRETA1',
  },
  {
    desconto: '07%OFF',
    title: 'EM Fogões, Lavadoras e Refrigeradores',
    cupom: 'INDIRETA2',
    width: 100,
    cupomWidth: 35,
  },
];
function Cupons() {
  return (
    <Container>
      {itensCupos.map((item) => {
        return (
          <Item width={item.width}>
            <Title>
              <BigTitle>{item.desconto} </BigTitle>
              {item.title}
            </Title>
            <Cupom cupomWidth={item.cupomWidth}>
              <TextCupom>{item.cupom}</TextCupom>
            </Cupom>
          </Item>
        );
      })}
    </Container>
  );
}

export default Cupons;
