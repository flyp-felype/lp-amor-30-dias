import Document, {Html, Head, Main, NextScript} from 'next/document';

import Script from 'next/script';
import Analytics from '../component/Analytics';
import * as gtag from '../utils/gtag';
class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-MR3MCYDLPT"
            strategy="afterInteractive"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
          />
          <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
          <title>Trago seu amor de volta</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
