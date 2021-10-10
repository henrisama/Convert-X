import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render (): JSX.Element {
    return (
        <Html lang='en'>
            <Head>
                {/* Config */}
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, nofollow"/>
                <meta name="author" content=""/>

              {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
              <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
                    `
                  }}
                />

                {/* Roboto */}
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet"/>

                {/* Bootstrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}
