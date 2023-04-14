/* STYLES */
import { ProjectsContainer } from "./styles";

/* IMAGES */
import ProjectDetail from "../ProjectDetail";
import wordlol from "../../imgsProjetos/wordlol.png";
import todolistonline from "../../imgsProjetos/todolistonline.png";
import UltraDentino from "../../imgsProjetos/UltraDentino.png";
import cinerate from "../../imgsProjetos/cinerate.png";

/* HOOKS */
import { useEffect } from "react";

/* DEPENDENCES */
import VanillaTilt from "vanilla-tilt";

const Projects = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".project"), {
      glare: true,
      "max-glare": 0.2,
      max: 10,
    });
  }, []);
  return (
    <ProjectsContainer>
      <h1>Meus Projetos</h1>
      <section>
        <ProjectDetail
          img={wordlol}
          title={"Wordlol"}
          subtitle={"Jogo feito em React.js com o banco de dados do firebase"}
          link={"https://wordlol.netlify.app"}
        />
        <ProjectDetail
          img={todolistonline}
          title={"ToDoList"}
          subtitle={
            "Site para criar colunas de tarefas feito com Javascript, HTML, CSS e React.js"
          }
          link={"https://todolistonlinee.netlify.app/"}
        />
        <ProjectDetail
          img={UltraDentino}
          title={"Ultra Dentino"}
          subtitle={"Site Ficticio Ultra Dentino"}
          link={"https://ultradentino.netlify.app/"}
        />
        <ProjectDetail
          img={cinerate}
          title={"Cinerate"}
          subtitle={"Catálogo  de filmes"}
          link={"https://cinerate.netlify.app/"}
        />
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
