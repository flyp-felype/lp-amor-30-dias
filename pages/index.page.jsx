import React, {useEffect, useState} from 'react';
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
  CorpoRetorno,
  Footer,
  IntFooter,
  IconImage,
  Desktop,
  Mobile,
} from './styles';
import Script from 'next/script';
import Banner from '../component/Banner';
import Analytics from '../component/Analytics';
import Carrousel from '../component/Carrousel';
import CallAction from '../component/CallAction';
import BoxCarta from '../component/BoxCarta';
import Produtos from '../component/Produtos';
import Roleta from '../component/Roleta';
import Image from 'next/image';
import Estrela from '../public/images/estrela.png';
import Videos from '../component/Videos';
import {useRouter} from 'next/router';
import Footer1 from '../public/images/footer1.png';
import Footer2 from '../public/images/footer2.png';
import LogoZema from '../public/images/logofooter.png';
import * as gtag from '../utils/gtag';
import axios from 'axios';

import TagManager from 'react-gtm-module';
export default function Home() {
  const [carta, setCarta] = useState();
  const tagManagerArgs = {
    gtmId: 'GTM-TZ6MTVK',
  };

  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    console.log('id ', id);
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC__URL}carta?id=${id}`, {
          headers: {
            'Content-type': 'Application/json',
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data) {
            setCarta(response.data);
          }
        });
    }
  }, [id]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    gtag.pageview('/');
  }, []);
  return (
    <>
      <div className="container">
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'G-46P3997TN6', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
      </div>
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
        <BoxCarta cartaId={carta} id={id} />
      </Container>
      <ContainerClear>
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
          <div style={{position: 'absolute', marginTop: -53}}>
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
          <Mobile>
            <Image width={100} height={14} src={LogoZema}></Image>
          </Mobile>
          <Desktop>
            <Image src={LogoZema}></Image>
          </Desktop>

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
          overflow-x: hidden;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <Analytics />
    </>
  );
}
