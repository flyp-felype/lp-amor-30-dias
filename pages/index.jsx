import Nav from '../component/Nav';
import {Container, Body, ContainerClear, Traco, Corpo, Title} from './styles';
import Banner from '../component/Banner';
import Carrousel from '../component/Carrousel';
import CallAction from '../component/CallAction';
import BoxCarta from '../component/BoxCarta';
import Roleta from '../component/Roleta';

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <Nav></Nav>
          <Body>
            <Banner />
            <Carrousel />
          </Body>
        </main>
      </Container>

      <CallAction />

      <Container>
        <BoxCarta />
      </Container>
      <ContainerClear>
        <Traco />
        <Corpo>
          <Title>
            Agora é onde você confirma seus dados e do destinatário para que
            possamos enviar sua cartinha de forma correta e segura:
          </Title>
        </Corpo>
        <Traco />
        <Corpo>
          <Roleta />
        </Corpo>
      </ContainerClear>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #52018a;
          justify-content: center;
          margin: 0;
          font-family: 'Titillium Web', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
