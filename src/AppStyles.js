import styled, { createGlobalStyle } from "styled-components";
import Background from "./images/background.jpg";

export const AppContainer = styled.div`
  text-align: center;
`;
export const Body = styled.div`
  background-color: rgba(0, 0, 0, 0.815);
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
    html {
  scroll-behavior: smooth;
}

body {
  background-image: url(${Background});
  background-repeat: repeat-y;
  background-position: top;
  background-size: contain;
  margin: 0;
  font-family: "Signika Negative", sans-serif;
}

`;
