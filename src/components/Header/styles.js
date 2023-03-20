import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media (min-width: 931px) {
    .menu {
      display: none;
    }
    background-color: rgba(0, 0, 0, 0.486);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    max-height: 70px;
    padding: 0 10%;

    ul {
      display: flex;
      list-style: none;
      padding: 0;
    }

    ul li a {
      border-bottom: 2px solid transparent;
      font-size: 18px;
    }

    ul li {
      margin: 0 15px;
      padding: 0.4em 0;
      position: relative;
      padding: 25.5px 0;
      box-sizing: border-box;
    }

    .ul_certificados li {
      padding: 0;
      margin: 15px 10px;
      transition: 0.4s;
      line-height: 1.4em;
      border-radius: 10%;
    }

    ul li a:hover {
      color: rgb(168, 168, 168);
    }

    .ul_certificados li a:hover {
      color: rgb(71, 169, 255);
    }

    .ul_certificados {
      z-index: 1;
      border-radius: 2%;
      max-height: 0;
      transition: max-height 0.15s ease-out;
      overflow: hidden;
      display: flex;
      text-align: center;
      flex-direction: column;
      color: white;
      position: absolute;
      top: 71px;
      background-color: rgb(20, 57, 100);
      left: -30px;
      right: -30px;
      padding: 0;
    }

    .cert_a:hover .ul_certificados {
      max-height: 300px;
      transition: max-height 0.25s ease-in;
    }

    ul li a {
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      text-decoration: none;
      transition: 0.4s;
    }

    .cert_a a {
      cursor: default;
    }

    .ul_certificados li a {
      cursor: pointer;
      font-size: 13px;
      border: none;
    }

    span {
      color: rgb(197, 220, 255);
      font-size: 20px;
      font-weight: bold;
      margin-left: 15px;
      font-family: "Courier New", Courier, monospace;
      text-transform: uppercase;
    }

    span i {
      margin-left: 8px;
    }
  }

  @media (max-width: 930px) {
    background-color: rgba(0, 0, 0, 0.856);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    position: relative;

    ul {
      z-index: 1;
      max-height: 0;
      transition: 0.15s ease-out;
      overflow: hidden;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 55px;
      background-color: rgb(0, 19, 36);
      text-align: center;
      font-size: 16px;
    }

    ul li {
      margin: 10px 0;
      padding: 0 30px;
    }

    ul button {
      background-color: transparent;
    }

    ul li a {
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      text-decoration: none;
      transition: 0.4s;
      border-bottom: 2px solid transparent;
    }

    ul li a:hover {
      color: rgb(218, 218, 218);
    }

    .ul_certificados li a:hover {
      color: rgb(71, 169, 255);
    }

    .ul_certificados {
      z-index: 1;
      max-height: 0;
      transition: max-height 0.15s ease-out;
      overflow: hidden;
      display: flex;
      font-size: 13px;
      text-align: center;
      flex-direction: column;
      color: white;
      position: absolute;
      top: 0px;
      background-color: rgb(20, 57, 100);
      right: 174px;
      padding: 0;
    }

    .ul_certificados li {
      line-height: 1.5em;
      padding: 0;
      margin: 20px 10px;
      transition: 0.4s;
    }

    .ul_certificados li a {
      cursor: pointer;
    }

    .cert_a:hover .ul_certificados {
      max-height: 300px;
      overflow: visible;
      transition: max-height 0.25s ease-in;
    }

    .cert_a a {
      cursor: default;
    }

    span {
      color: rgb(197, 220, 255);
      font-size: 20px;
      font-weight: bold;
      margin-left: 15px;
      font-family: "Courier New", Courier, monospace;
      text-transform: uppercase;
    }

    span i {
      margin-left: 8px;
    }

    .menu {
      color: rgb(197, 220, 255);
      margin-right: 20px;
      cursor: pointer;
      font-size: 30px;
      transition: 0.4s;
      background-color: transparent;
      border: none;
    }

    .menu:hover {
      transform: scale(1.1);
    }
  }
`;
