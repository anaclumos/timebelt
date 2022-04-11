import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    background-color: #17171e !important;
  }
  * {
    color: #e3e4e5;
    box-sizing: border-box;
    margin: 0 auto;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
          Pretendard, system-ui, -system-ui, sans-serif, 'Apple Color Emoji';
    width: 50rem;
  }
  p, a {
    font-size: 1.6rem;
  }
`

export default GlobalStyle
