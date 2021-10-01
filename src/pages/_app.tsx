import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/globals'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>xCaser - Online String Converter</title>
      </Head>
      {<GlobalStyle />}
      <Component {...pageProps} />
    </>
  )
}

export default App
