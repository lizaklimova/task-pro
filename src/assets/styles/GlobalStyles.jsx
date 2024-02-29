import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --easedTransition: 350ms ease-in-out;
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
    color: #000;
    background-color: #fff;
    transition: background-color var(--easedTransition), color var(--easedTransition);
}

#root {
  @media screen and (min-width: 1440px){
    display: grid;
    grid-template: "sidebar header header" 68px
        "sidebar main main" auto 
        / 260px auto auto;
  }
}

header {
  @media screen and (min-width: 1440px){
    grid-area: header;
    grid-column: 2 / -1;
  }
}

main {
  @media screen and (min-width: 1440px){
    grid-area: main;
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }
}

aside {
  @media screen and (min-width: 1440px){
    grid-area: sidebar;
    grid-column: 1 / 1;
    grid-row: 1 / -1;
  }
}

 /* ::-webkit-scrollbar {

} 

::-webkit-scrollbar-thumb {

}

::-webkit-scrollbar-track {
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border:none;
}


`;

export default GlobalStyles;
