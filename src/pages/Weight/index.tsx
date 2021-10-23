import React from 'react'
import Head from 'next/head'
import Navbar from '@/src/Patterns/Navbar'
import Center from '@/src/Components/Center'
import Options from './Options'
import Input from '@/src/Components/Input'
import Select from '@/src/Components/Select'
import onSelectChange from '@/src/assets/js/Weight/Change'
import PaypalButton from '@/src/Patterns/PaypalButton'

const Weight: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Online Weight Converter</title>
        <meta name="description" content="Tool that helps with weight conversion"/>
        <meta name="keywords" content="grams, kilograms, ounces, pounds, stones, conversion, weight, change, converter"/>
        <meta property="og:title" content="online Weight Converter"/>
        <meta property="og:description" content="Tool that helps with weight conversion"/>

        <meta property="og:site_name" content="Convert X"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://convert-x.vercel.app/Weight/"/>
        <link rel="canonical" href="https://convert-x.vercel.app/Weight/"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://convert-x.vercel.app/Weight/#website',
              url: 'https://convert-x.vercel.app/Weight/',
              name: 'Online Weight Converter'
            })
          }}
        />
      </Head>

      <div>
        <Navbar />
      </div>
      <div
        className="container pt-5"
      >
        <Center>
          <div>
            <div
              className="container"
            >
              <h1
                style={{ color: '#DDDDDD' }}
              >
                Weight Converter
              </h1>
            </div>
            <div
              className="container"
            >
              <div
                className="row"
              >
                <div
                  className="col"
                >
                  <Select
                    name=""
                    id="select-one"
                    onChange={onSelectChange.bind(this)}
                  >
                    <Options />
                  </Select>
                  <Input
                    id='input-one'
                    type="number"
                    defaultValue={0}
                    onChange={onSelectChange.bind(this)}
                  />
                </div>
                <div
                  className="col"
                >
                  <Input
                    id='input-two'
                    type="number"
                    defaultValue={0}
                    onChange={onSelectChange.bind(this)}
                  />
                  <Select
                    name=""
                    id="select-two"
                    defaultValue='kilograms'
                    onChange={onSelectChange.bind(this)}
                  >
                    <Options />
                  </Select>
                </div>
              </div>
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

export default Weight
