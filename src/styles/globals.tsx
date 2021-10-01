import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Helvetica;
    background-color: #555555;
  }
`

export default GlobalStyle
