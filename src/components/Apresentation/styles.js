import styled from "styled-components";

export const ApresentationContainer = styled.div`
  @media (min-width: 931px) {
    overflow: hidden;

    section {
      opacity: 0;
      transition: opacity 2s;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      padding: 50px 0 0 0;
    }

    section:nth-child(2) {
      flex-direction: row-reverse;
    }

    section:nth-child(1) {
      transform: translateX(1500px);
      transition: transform 2s;
    }
    section:nth-child(2) {
      transform: translateX(-1500px);
      transition: transform 2s;
    }
    section:nth-child(3) {
      transform: translateX(1500px);
      transition: transform 2s;
    }

    section img {
      width: 20%;
      min-width: 200px;
      box-shadow: 0px 0px 129px -48px rgba(0, 0, 0, 1);
    }

    section:nth-child(1) img {
      border-radius: 53% 47% 54% 46% / 55% 33% 67% 45%;
    }
    section:nth-child(2) img {
      border-radius: 33% 67% 38% 62% / 53% 48% 52% 47%;
    }
    section:nth-child(3) img {
      border-radius: 34% 66% 37% 63% / 68% 29% 71% 32%;
    }

    p {
      text-shadow: 1px 1px 1px rgb(61, 61, 61);
      margin: 0 20px;
      width: 60%;
      color: white;
      font-size: 25px;
      line-height: 2em;
    }
  }

  @media (max-width: 930px) {
    overflow: hidden;

    section:nth-child(1) {
      transform: translateX(900px);
      transition: transform 2s;
    }
    section:nth-child(2) {
      transform: translateX(-900px);
      transition: transform 2s;
    }
    section:nth-child(3) {
      transform: translateX(900px);
      transition: transform 2s;
    }

    section {
      overflow: hidden;
      opacity: 0;
      transition: opacity 2s;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: flex-start;
      justify-content: center;
      width: 90%;
      margin: 0 auto;
      padding: 50px 0 0 0;
    }

    section img {
      border-radius: 20%;
      width: 30%;
      margin: 0 auto;
      min-width: 150px;
      box-shadow: 30px 30px 30px 0 rgba(2, 2, 2, 0.61);
    }

    p {
      text-shadow: 1px 1px 1px rgb(61, 61, 61);
      margin-left: 20px;
      width: 90%;
      color: white;
      font-size: 22px;
      line-height: 2em;
    }
  }

  @media (max-width: 300px) {
    section img {
      display: none;
    }

    section p {
      margin: 0 auto;
    }
  }
`;
