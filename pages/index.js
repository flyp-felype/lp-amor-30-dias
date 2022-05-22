import Nav from '../component/Nav';
export default function Home() {
  return (
    <div className="container">
      <main>
        <Nav></Nav>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #52018a;

          align-items: center;
          margin: 0;
          font-family: 'Titillium Web', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
