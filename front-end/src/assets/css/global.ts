import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

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
}

button {
    cursor: pointer;
}

::-moz-selection {
  color: #fff;
  background: #7376AD;
}

::selection {
color: #fff;
  background: #7376AD;
}

#root {
    margin: 0 auto;
}

.spline-watermark {
  display: none !important;
  position: initial !important;
}

.css-1wc848c-MuiFormHelperText-root {
  margin-left: 0 !important;
}

`;

export default GlobalStyle;
