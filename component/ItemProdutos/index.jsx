import React, {useEffect, useState} from 'react';
import {Rating} from 'react-simple-star-rating';
import {
  Container,
  TagOff,
  LabelTag,
  Header,
  ImageProduto,
  TagFrete,
  LabelTagFrete,
  BoxDescricao,
  HeaderDescricao,
  Icon,
  Title,
  TracoDesconto,
  PriceDiscount,
  Precos,
  PrecoDestaque,
  PrecoGrande,
  ButtonAdd,
  TextButton,
  IconBtn,
} from './styles';
import Image from 'next/image';
import Tag from '../../public/images/tags.png';
import Frete from '../../public/images/frete.png';
import Heart from '../../public/images/heart.png';
import Share from '../../public/images/shared.png';
import Bag from '../../public/images/bag.png';

function ItemProdutos({produto}) {
  const [rating, setRating] = useState(0); // initial rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <Container>
      <Header>
        {/* <TagOff>
          <Image src={Tag} style={{marginTop: 6}} quality={100} />
          <LabelTag>{produto.off}</LabelTag>
        </TagOff> */}
      </Header>
      <ImageProduto>
        {/* <TagFrete>
          <Image src={Frete} quality={100} />{' '}
          <LabelTagFrete>{produto.frete}</LabelTagFrete>
        </TagFrete> */}
        <img
          src={`https://zema.com${produto.primaryFullImageURL}`}
          style={{maxHeight: 200, maxWidth: '100%'}}
        />
      </ImageProduto>
      <BoxDescricao>
        <HeaderDescricao>
          <Rating
            onClick={handleRating}
            size={20}
            initialValue={produto.star}
            ratingValue={rating} /* Available Props */
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'row',
            }}>
            {/* <Icon>
              <Image src={Heart} layout={'responsive'} />
            </Icon>
            <Icon>
              <Image src={Share} layout={'responsive'} />
            </Icon> */}
          </div>
        </HeaderDescricao>
        <Title>{produto.displayName}</Title>
        <Precos>
          {produto.listPrice ? (
            <PriceDiscount>
              de{' '}
              <TracoDesconto>
                R${parseFloat(produto.listPrice).toFixed(2).replace('.', ',')}
              </TracoDesconto>
            </PriceDiscount>
          ) : null}
          <PrecoDestaque>
            <PrecoGrande>
              R${parseFloat(produto.salePrice).toFixed(2).replace('.', ',')}
            </PrecoGrande>
            <PriceDiscount> à vista</PriceDiscount>
          </PrecoDestaque>
          <PriceDiscount>{produto.dividido}</PriceDiscount>
        </Precos>
      </BoxDescricao>
      <ButtonAdd href={`https://zema.com${produto.route}`} target="_blank">
        <IconBtn>
          <Image src={Bag} layout={'responsive'} />
        </IconBtn>
        <TextButton>Adicionar</TextButton>
      </ButtonAdd>
    </Container>
  );
}

export default ItemProdutos;
