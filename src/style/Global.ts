import { createGlobalStyle } from 'styled-components'
import mainbg from './mainbg.png'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Barlow Semi Condensed', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image:url(${mainbg});
    background-size:cover;
    background-repeat:no-repeat;

    img {
      height: auto;
      max-width: 100%;
    }
  }



`

export default GlobalStyle
