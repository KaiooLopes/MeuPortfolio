import styled from "styled-components";

export const ProjectsContainer = styled.div`
  @media (min-width: 931px) {
    width: 86%;
    margin: 0 auto 30px;

    h1 {
      color: rgb(50, 190, 255);
      margin: 90px 0;
      font-size: 45px;
      letter-spacing: 9px;
      text-transform: uppercase;
    }

    section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }
  }

  @media (max-width: 930px) {
    width: 90%;
    margin: 0 auto 20px;

    h1 {
      color: rgb(50, 190, 255);
      margin: 90px 0;
      font-size: 30px;
      letter-spacing: 7px;
      text-transform: uppercase;
    }

    section {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  }
`;
