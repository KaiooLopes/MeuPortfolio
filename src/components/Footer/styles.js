import styled from "styled-components";

export const FooterContainer = styled.div`
  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.616);
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  a {
    font-size: 25px;
    color: rgb(159, 204, 255);
  }

  span {
    color: rgb(197, 220, 255);
    font-size: 25px;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    text-transform: uppercase;
  }

  .contacts a,
  .contacts div a {
    padding-top: 5px;
    margin: 0 10px;
  }

  .email,
  .whats {
    display: flex;
    align-items: center;
  }

  .contacts {
    position: relative;
    display: flex;
  }

  .whats p,
  .email p {
    font-size: 16px;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s;
    position: absolute;
    top: -40px;
    color: rgb(0, 0, 0);
    background-color: aquamarine;
    border-radius: 5px;
    padding: 3px;
    white-space: nowrap;
    font-family: "Bebas Neue", sans-serif;
  }

  .whats:hover p,
  .email:hover p {
    opacity: 1;
    visibility: visible;
    overflow: hidden;
  }

  @media (min-width: 500px) {
    footer {
      flex-direction: row;
      height: 70px;
    }
  }
`;
