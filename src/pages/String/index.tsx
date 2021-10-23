import React from 'react'
import Navbar from '@/src/Patterns/Navbar'
import Buttons from './Buttons'
import Center from '@/src/Components/Center'
import Text from '@/src/Components/Text'
import Alert from '@/src/Components/Alert'
import PaypalButton from '@/src/Patterns/PaypalButton'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Online String Converter</title>
        <meta name="description" content="Tool that helps to pass a certain text to uppercase, lowercase,
              alternate, first letter of each word capitalized or even reverses the entire text."/>
        <meta name="keywords" content="text, uppercase, lowercase, alternate, convert, strike, underline, inverse, italic,
              bold, transform, online string, string converter"/>
        <meta property="og:title" content="Online String Converter"/>
        <meta property="og:description" content="Tool that helps to pass a certain text to uppercase, lowercase,
              alternate, first letter of each word capitalized or even reverses the entire text."/>

        <meta property="og:site_name" content="Convert X"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://convert-x.vercel.app/String/"/>
        <link rel="canonical" href="https://convert-x.vercel.app/String/"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://convert-x.vercel.app/String/#website',
              url: 'https://convert-x.vercel.app/String/',
              name: 'Online String Converter'
            })
          }}
        />
      </Head>

      <div>
        <Navbar />
      </div>
      <div>
        <Center>
          <div
            className="container pt-3"
          >
            <div
              className="container w-50"
              style={{ height: '70px' }}
            >
              <Alert
                id="alert"
                className="alert alert-success"
                role="alert"
              >
              </Alert>
            </div>

            <div
              className="container"
            >
              <h1
                style={{ color: '#DDDDDD' }}
              >
                String Converter
              </h1>
              <Text
                id="text-area"
              />
            </div>

            <div
              className="container"
            >
              <Buttons />
            </div>
          </div>
        </Center>
      </div>
      <div
        className="container p-5 w-100 text-center"
      >
        <PaypalButton />
      </div>
    </div>
  )
}

export default Home
