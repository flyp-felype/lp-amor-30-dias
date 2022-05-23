import Nav from '../component/Nav';
import {Container} from './styles';
export default function Home() {
  return (
    <Container>
      <main>
        <Nav></Nav>
      </main>

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
    </Container>
  );
}
