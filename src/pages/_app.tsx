import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default App
