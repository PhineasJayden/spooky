import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}
*,
*::before,
*::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#range {
  -webkit-appearance: none;
  appearance: none; 
  width: 100%;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
}

#range::-webkit-slider-runnable-track {
  height: 15px;
  background: #ccc;
  border-radius: 16px;
}

#range::-moz-range-track {
  height: 15px;
  background: #ccc;
  border-radius: 16px;
}

#range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #c18af5;
  box-shadow: -407px 0 0 400px #c18af5;

}

#range::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #c18af5;
  box-shadow: -407px 0 0 400px #c18af5;
}


h1 {
  text-align: center;
 
}
h2 {
  text-align: center;

}
h3 {
 
}
h4 {
  
}
p {
  
}
body {
  color: white;
  transition: color 0.3, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  margin: 0;
  overflow: hidden;
}
button {
  cursor: pointer
}
*:disabled {
  cursor: not-allowed;
}
ul {
  list-style: none;
}
img {
  max-width: 100%
}
audio::-webkit-media-controls-panel {
  background-color: #c18af5;
}
`;

export default GlobalStyles;
