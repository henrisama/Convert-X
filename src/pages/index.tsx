import React from 'react'
// import Navbar from '../Patterns/Navbar'
import Buttons from '../Patterns/Buttons'
import Center from '../Components/Center'
import Text from '../Components/Text'
import Alert from '../Components/Alert'
import PaypalButton from '../Patterns/PaypalButton'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        {/* <Navbar /> */}
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
