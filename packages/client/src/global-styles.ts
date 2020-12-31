import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,sans-serif';
   ${reset}
  :root{
    --header-color: white;
    --content-color: #e1e1e1;
  }
  
box-sizing: border-box;
*, *:before, *:after {
  box-sizing: inherit;
}
}`;

export default GlobalStyles;
