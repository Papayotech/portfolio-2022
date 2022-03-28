import React from 'react'
import Document, { DocumentContext, DocumentInitialProps,NextScript, Head, Main, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    return (
      <Html lang="es">
         <Head>
          {/* <!-- Cache --> */}

          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />
          {/* <!-- Favicon & Icons--> */}
      

          {/* <!-- Font Awesome --> */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            rel="stylesheet"
          />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
        
          <NextScript />

        
        </body>
      </Html>
    )
  }
}
