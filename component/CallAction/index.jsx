import React from 'react';
import Image from 'next/image';
import {
  Container,
  Title,
  ButtonCallAction,
  Text,
  BlocoImage,
  Label,
  ContainerMobile,
  ButtonCallActionMobile,
  TextMobile,
  DivButtonMobile,
} from './styles';
import Conquest from '../../public/images/conquest.png';
import Surpreenda from '../../public/images/surpreenda.png';
import Vector from '../../public/images/Vector.png';
function CallAction() {
  return (
    <>
      <Container>
        <BlocoImage>
          <Image src={Conquest} layout="responsive" alt="Surpreenda Zema" />
        </BlocoImage>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Title>
            Já imaginou surpreender quem você gosta?
            <br />
            Inicie um belo romance agora!
          </Title>

          <ButtonCallAction href="#carta">
            <Image
              src={Vector}
              width={20}
              height={20}
              alt="Botão Envie gratuitamente"
            />

            <Text>Envie gratuitamente sua cartinha!</Text>
          </ButtonCallAction>
          <Label>As cartas serão impressas e enviadas via Correios</Label>
        </div>
        <BlocoImage>
          <Image
            src={Surpreenda}
            layout="responsive"
            alt="Conqueste seu amor zema"
          />
        </BlocoImage>
      </Container>
      <ContainerMobile>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}>
          <Title>
            Já imaginou surpreender quem você gosta?
            <br />
            Inicie um belo romance agora!
          </Title>
          <DivButtonMobile>
            <ButtonCallActionMobile href="#carta">
              <Image
                src={Vector}
                width={20}
                height={20}
                alt="Botão Envie gratuitamente"
              />

              <TextMobile>Envie gratuitamente sua cartinha!</TextMobile>
            </ButtonCallActionMobile>
          </DivButtonMobile>

          <Label>As cartas serão impressas e enviadas via Correios</Label>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BlocoImage>
            <Image src={Conquest} layout="responsive" alt="Surpreenda Zema" />
          </BlocoImage>
          <BlocoImage>
            <Image
              src={Surpreenda}
              layout="responsive"
              alt="Conqueste seu amor zema"
            />
          </BlocoImage>
        </div>
      </ContainerMobile>
    </>
  );
}

export default CallAction;
