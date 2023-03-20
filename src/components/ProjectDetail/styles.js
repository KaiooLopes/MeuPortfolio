import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  @media (min-width: 931px) {
    background-color: rgba(43, 83, 110, 0.37);
    border-radius: 5%;
    height: 400px;
    padding: 20px 20px 10px;
    text-align: center;
    word-wrap: break-word;
    position: relative;
    margin: 0 auto;
    max-width: 280px;

    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 50%;
      border-radius: 5%;
    }

    a {
      text-decoration: none;
      padding: 6px 30px;
      border-radius: 30px;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
      background-color: black;
      transition: 0.4s;
    }

    a:hover {
      background-color: rgb(21, 39, 77);
    }

    p {
      max-width: 100%;
      color: white;
      font-size: 19px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 24px;
      color: rgb(67, 164, 255);
    }
  }

  @media (max-width: 930px) {
    background-color: rgba(43, 83, 110, 0.37);
    border-radius: 5%;
    height: 400px;
    padding: 20px 20px 10px;
    text-align: center;
    word-wrap: break-word;
    position: relative;
    margin: 0 auto;
    max-width: 240px;

    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 50%;
      border-radius: 5%;
    }

    a {
      text-decoration: none;
      padding: 6px 0;
      border-radius: 30px;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
      background-color: black;
      position: absolute;
      bottom: 30px;
      left: 50px;
      right: 50px;
      transition: 0.4s;
    }

    a:hover {
      background-color: rgb(21, 39, 77);
    }

    p {
      max-width: 100%;
      color: white;
      font-size: 19px;
    }

    h2 {
      font-size: 24px;
      color: rgb(67, 164, 255);
    }
  }
`;
