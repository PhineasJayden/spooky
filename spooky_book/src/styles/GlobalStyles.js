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
h1 {
  text-align: center
}
h2 {
  text-align: center
}
body {
  color: black;
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
  background-color: #56AEFF;
}
`;

export default GlobalStyles;
