import React, {useEffect, useState} from 'react';

import {
  Container,
  Title,
  Carta,
  CartaInterior,
  TextArea,
  BgImage,
  Box,
  LabelData,
  SubTitle,
  BoxFooter,
  GifFooter,
  ButtonFinalizar,
  TextButtonFinalizar,
  ContainerButton,
  CheckBox,
} from './styles';

import InputText from '../InputText';
import dayjs from 'dayjs';
import Image from 'next/image';
import DeuMatch from '../../public/images/DeuMatch2.gif';
import FooterZema from '../../public/images/imagezema.png';
import Cupons from '../Cupons';
require('dayjs/locale/pt-br');
function BoxCarta() {
  const [msgCart, setMsgCarta] =
    useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's \n
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy \n
um has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy te`);

  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    setDataAtual(dayjs().locale('pt-br').format('DD [de] MMMM [de] YYYY'));
  }, []);
  return (
    <Container id="carta">
      <Title>
        Já sabe o que falar? Escreva essa mensagem com carinho hein, pois
        lembre-se: Aqui começa uma grande história!
      </Title>
      <Carta>
        <CartaInterior>
          <BgImage>
            <Box>
              <InputText
                id={'remetente'}
                label={'[remetente]'}
                variant={'standard'}
              />
            </Box>
            <Box>
              <TextArea
                name="textarea"
                cols="33"
                value={msgCart}
                onChange={(value) =>
                  setMsgCarta(value.target.value)
                }></TextArea>
            </Box>
            <Box
              style={{
                float: 'right',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 20,
              }}>
              <InputText
                id={'destinatário'}
                label={'[destinatário]'}
                variant={'standard'}
                style={{width: 130}}
              />
              <LabelData>,{dataAtual}</LabelData>
            </Box>
            <Box style={{marginTop: 100}}>
              <SubTitle>
                Alguém especial deixou essas surpresinhas aqui
                <br />
                pra você... acesse o site e aproveite!
              </SubTitle>
            </Box>
            <BoxFooter>
              <GifFooter>
                <Image
                  src={DeuMatch}
                  alt="Deu Match Zema"
                  layout="responsive"
                />
                <Image src={FooterZema} width={172} style={{paddingLeft: 20}} />
              </GifFooter>
              <Cupons />
            </BoxFooter>
          </BgImage>
        </CartaInterior>
        <ContainerButton>
          <CheckBox>
            <input type="checkbox" /> Concordo que o conteúdo dessa cartinha não
            possui vínculos diretos com a Zema e que também não há nenhum tipo
            de mensagem ofensiva para o destinário e/ou envolvidos na operação
            de envio.
          </CheckBox>
          <ButtonFinalizar>
            <TextButtonFinalizar>Finalizar carta!</TextButtonFinalizar>
          </ButtonFinalizar>
        </ContainerButton>
      </Carta>
    </Container>
  );
}

export default BoxCarta;
