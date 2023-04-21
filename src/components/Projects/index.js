/* STYLES */
import { ProjectsContainer, ShowDetails } from "./styles";

/* IMAGES */
import wordlol from "../../imgsProjetos/wordlol.png";
import todolistonline from "../../imgsProjetos/todolistonline.png";
import ultradentino from "../../imgsProjetos/ultradentino.png";
import cinerate from "../../imgsProjetos/cinerate.png";
import misenscene from "../../imgsProjetos/misenscene.png";
import { useState } from "react";

const Projects = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const [switchProject, setSwitchProject] = useState(false);

  const [currentProject, setCurrentProject] = useState({});

  const handleProjectDetail = (i) => {
    if (currentProject.title !== projects[i].title) {
      if (Object.keys(currentProject).length !== 0) {
        setSwitchProject(true);
        setTimeout(() => {
          setCurrentProject({ ...projects[i] });
          setSwitchProject(false);
        }, 500);
      } else {
        setCurrentProject({ ...projects[i] });
      }
      if (scrollPage === false) {
        setScrollPage(true);
      }
      setTimeout(() => {
        if (
          document.documentElement.scrollHeight -
            (window.innerHeight + window.pageYOffset) >
          100
        ) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 50);
    }
  };

  const projects = [
    {
      img: wordlol,
      title: "Wordlol",
      subtitle: "Jogo feito em React.js com o banco de dados do firebase",
      link: "https://wordlol.netlify.app",
      tecs: ["React.js", "Javascript", "Firebase", "Css", "HTML 5"],
    },
    {
      img: todolistonline,
      title: "To Do List",
      subtitle:
        "Site para criar colunas de tarefas feito com Javascript, HTML, CSS e React.js",
      link: "https://todolistonlinee.netlify.app/",
      tecs: ["React.js", "Javascript", "Css", "Styled-components", "HTML 5"],
    },
    {
      img: ultradentino,
      title: "Ultra Dentino",
      subtitle: "Site Ficticio Ultra Dentino",
      link: "https://ultradentino.netlify.app/",
      tecs: ["React.js", "Javascript", "Css", "Styled-components", "HTML 5"],
    },
    {
      img: cinerate,
      title: "Cinerate",
      subtitle: "Catálogo  de filmes",
      link: "https://cinerate.netlify.app/",
      tecs: ["React.js", "Javascript", "Css", "Styled-components", "HTML 5"],
    },
    {
      img: misenscene,
      title: "Misenscene",
      subtitle: "Site da Misenscene Arte e Cultura",
      link: "https://misenscene.com.br",
      tecs: ["React.js", "Javascript", "Css", "Styled-components", "HTML 5"],
    },
  ];

  return (
    <ProjectsContainer scrollPage={scrollPage}>
      <h1>Alguns de Meus Projetos</h1>
      <section>
        <button onClick={() => handleProjectDetail(0)}>
          <img src={wordlol} alt="Wordlol" />
        </button>
        <button onClick={() => handleProjectDetail(1)}>
          <img src={todolistonline} alt="ToDoList" />
        </button>
        <button onClick={() => handleProjectDetail(2)}>
          <img src={ultradentino} alt="Ultra Dentino" />
        </button>
        <button onClick={() => handleProjectDetail(3)}>
          <img src={cinerate} alt="Cinerate" />
        </button>
        <button onClick={() => handleProjectDetail(4)}>
          <img src={misenscene} alt="Misenscene" />
        </button>
      </section>
      <span>
        <span></span>
      </span>
      <ShowDetails scrollPage={scrollPage} switchProject={switchProject}>
        <div>
          <img src={currentProject.img} alt={currentProject.title} />
        </div>
        <div>
          <h2>{currentProject.subtitle}</h2>
          <p>Tecnologias usadas: </p>
          {currentProject.tecs && <p>{currentProject.tecs.join(", ")}</p>}
        </div>
      </ShowDetails>
    </ProjectsContainer>
  );
};

export default Projects;
