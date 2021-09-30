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
                <meta name="description" content="Tool that helps to pass a certain text to uppercase, lowercase,
                     alternate, first letter of each word capitalized or even reverses the entire text."/>
                <meta name="author" content="Pedro Flores"/>
                <meta name="keywords" content="text, uppercase, lowercase, alternate, convert, strike, underline, inverse, italic,
                     bold, transform"/>
                <meta name="robots" content="index, nofollow"/>
                <link rel="icon" href="/favicon.ico" />

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
