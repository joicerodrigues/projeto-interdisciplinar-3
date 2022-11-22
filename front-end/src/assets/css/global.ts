import { createGlobalStyle } from "styled-components";
import convertToRem from "../../utils/convertToRem";
import img from "../img/2806681.jpg";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: auto ${convertToRem(1500)};
}

button {
    cursor: pointer;
}

::-moz-selection {
  color: #fff;
  background: #6FA597;
}

::selection {
color: #fff;
  background: #6FA597;
}

#root {
    margin: 0 auto;
}

.spline-watermark {
  display: none !important;
  position: initial !important;
}

`;

export default GlobalStyle;
