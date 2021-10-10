import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { useRouter } from 'next/dist/client/router'
import * as gtag from '../lib/gtag'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {<GlobalStyle />}
      <Component {...pageProps} />
    </>
  )
}

export default App
