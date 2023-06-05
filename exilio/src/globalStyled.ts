import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Press Start 2P';
  src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body{
    padding: 0px;
    margin: 0px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E0F21;
}

`