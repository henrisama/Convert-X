import React from 'react'
import Navbar from '../Patterns/Navbar'
import Buttons from '../Patterns/Buttons'
import Center from '../Components/Center'
import Text from '../Components/Text'
import PaypalButton from '../Patterns/PaypalButton'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Center>
          <div
            className="Container pt-5"
          >
            <div>
              <h1>
                Text Area
              </h1>
              <Text id="text-area"/>
            </div>

            <div>
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
