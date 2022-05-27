import Nav from '../component/Nav';
import {
  Container,
  Body,
  ContainerClear,
  ContainerBG,
  Traco,
  Corpo,
  Title,
  ContainerSecondeClear,
  Footer,
  IntFooter,
  IconImage,
} from './styles';
import Banner from '../component/Banner';
import Carrousel from '../component/Carrousel';
import CallAction from '../component/CallAction';
import BoxCarta from '../component/BoxCarta';
import Produtos from '../component/Produtos';
import Roleta from '../component/Roleta';
import Image from 'next/image';
import Estrela from '../public/images/estrela.png';
import Videos from '../component/Videos';

import Footer1 from '../public/images/footer1.png';
import Footer2 from '../public/images/footer2.png';
import LogoZema from '../public/images/logofooter.png';

export default function Home() {
  return (
    <>
      <ContainerBG>
        <Container>
          <main>
            <Nav></Nav>
            <Body>
              <Banner />
              <Carrousel />
            </Body>
          </main>
        </Container>
      </ContainerBG>

      <CallAction />

      <Container>
        <BoxCarta />
      </Container>
      <ContainerClear>
        {/* <Traco />
        <Corpo>
          <Title>
            Agora é onde você confirma seus dados e do destinatário para que
            possamos enviar sua cartinha de forma correta e segura:
          </Title>
        </Corpo> */}
        <Traco />
        <Corpo>
          <Roleta />
        </Corpo>
      </ContainerClear>
      <ContainerSecondeClear>
        <div
          style={{
            marginBottom: 40,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Traco />
          <div
            style={{position: 'absolute', marginTop: -53, marginRight: -450}}>
            <Image src={Estrela} />
          </div>
        </div>
        <Corpo>
          <Produtos />
        </Corpo>
        <Traco />
        <Videos></Videos>
      </ContainerSecondeClear>

      <Footer>
        <IntFooter>
          <IconImage>
            <Image src={Footer1} />
          </IconImage>

          <Image src={LogoZema}></Image>
          <IconImage>
            <Image src={Footer2}></Image>
          </IconImage>
        </IntFooter>
      </Footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #52018a;
          justify-content: center;
          position: relative;
          margin: 0;
          font-family: 'Titillium Web', sans-serif;
          width: 100vw;
          scrollbar-color: #52018a;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
