import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    background-color: #17171e !important;
    margin: 1rem;
  }
  * {
    color: #e3e4e5;
    box-sizing: border-box;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
          Pretendard, system-ui, -system-ui, sans-serif, 'Apple Color Emoji';
    max-width: 50rem;
    word-break: keep-all;
    word-wrap: break-word;
  }
  p, a{
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin: 0 0 1.6rem;
  }
  h2 {
    line-height: 1.5;
  }
  button {
    width: 100%;
    font-size: 1.6rem;
    /* make background transparent */
    background-color: transparent;
    height: 3.2rem;
    border: 2px solid #e3e4e5;
    border-radius: 0.8rem;
    padding: 0 1.6rem;
    cursor: pointer;
    &:hover {
      background-color: #e3e4e5;
      color: #17171e;
    }
    margin: 1rem auto;
  }
  table {
    font-size: 1.2rem;
    padding: 1rem;
    border: 1px solid #e3e4e5;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.5rem;
    border: 1px solid #e3e4e5;
    margin: 0;
    line-height: 1.5;
  }
`

export default GlobalStyle
