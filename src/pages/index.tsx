import React from 'react'
// import Navbar from '../Patterns/Navbar'
import Center from '../Components/Center'
import Head from 'next/head'
import Link from 'next/link'

const Home: React.FC = () => {
  const style = {
    width: '250px',
    color: '#DDDDDD'
  }

  return (
    <div>
      <Head>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta property="og:title" content="Convert X"/>
        <meta property="og:description" content=""/>

        <meta property="og:site_name" content="Convert X"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://convert-x.vercel.app/"/>
        <link rel="canonical" href="https://convert-x.vercel.app/"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://convert-x.vercel.app/#website',
              url: 'https://convert-x.vercel.app/',
              name: 'Online String Converter'
            })
          }}
        />
      </Head>
      <div>
        {/* <Navbar /> */}
      </div>
      <div>
        <Center>
          <div
            className="container pt-3"
          >
            <div
              className="row row-cols-auto justify-content-center"
            >
              <div className="col mb-1">
                <Link href="/String">
                  <button
                    type="button"
                    className="btn btn-dark btn-lg"
                    style={style}
                  >
                    String
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </Center>
      </div>
    </div>
  )
}

export default Home
