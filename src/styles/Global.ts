import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }
  

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  span,
  li,
  button,
  input,
  label {
    font-family: "Inter", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  
:root {
  --color-primary:#003366;
  --color-secondary:#FFCC00;
  --color-contrast:#66CC99;

  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;

  --sucess: #3FE864;
  --negative: #E83F5B;
  
  font-size: 60%;   

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; 
    }
  }
}`;
