import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin: 50px 0;

  h1 {
    color: white;
    text-transform: uppercase;
  }

  section {
    button {
      transition: transform 0.4s;
      background-color: transparent;
      border: none;
      width: 150px;
      img {
        width: 100%;
        max-width: 200px;
        border-radius: 20px;
      }
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
    align-items: center;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 30px;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }

  span {
    display: block;
    max-width: ${(props) => (props.scrollPage ? "90%" : 0)};
    transition: 0.3s;
    margin: 0 auto;
    height: 2px;
    background-color: white;

    span {
      display: inline-block;
      width: 0;
      height: 0;
      background-color: transparent;
      border: 20px solid
        ${(props) => (props.scrollPage ? "white" : "transparent")};
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-left-color: transparent;
    }
  }

  @media (min-width: 931px) {
    section {
      width: 70%;
    }

    span {
      width: ${(props) => (props.scrollPage ? "70%" : 0)};
    }
  }
`;

export const ShowDetails = styled.div`
  max-height: ${(props) => (props.scrollPage ? "400px" : 0)};
  min-height: ${(props) => (props.scrollPage ? "400px" : 0)};
  display: flex;
  overflow: hidden;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.switchProject ? 0 : 1)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  div {
    width: 100%;
  }

  img {
    width: 50%;
    max-width: 250px;
    max-height: 270px;
    border-radius: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    background-color: #363636;
    border-radius: 5px;
    transition: background-color 0.4s;

    &:hover {
      background-color: black;
    }
  }

  @media (min-width: 931px) {
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
    img {
      width: 70%;
    }
  }
`;
