/* STYLES */
import styles from "./Projects.module.css";

/* IMAGES */
import ProjectDetail from "./ProjectDetail";
import calculadora from "../../src/imgsProjetos/calculadora.png";
import coffe from "../../src/imgsProjetos/coffee.png";
import conversor from "../../src/imgsProjetos/conversor.png";
import memory_game from "../../src/imgsProjetos/memory_game.png";
import tabela from "../../src/imgsProjetos/tabela.png";
import todolist from "../../src/imgsProjetos/todolist.png";
import wordlol from "../../src/imgsProjetos/wordlol.png";
import todolistonline from "../../src/imgsProjetos/todolistonline.png";

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
    <div className={styles.projects}>
      <h1>Meus Projetos</h1>
      <section>
        <ProjectDetail
          img={calculadora}
          title={"Calculadora"}
          subtitle={
            "Calculadora simples para exercitar o HTML, CSS e Javascript"
          }
          link={"https://github.com/KaiooLopes/Calculadora"}
        />
        <ProjectDetail
          img={coffe}
          title={"Grano Coffee"}
          subtitle={"Landing page fictício de uma loja de café."}
          link={"https://github.com/KaiooLopes/GranoCoffee"}
        />
        <ProjectDetail
          img={conversor}
          title={"Conversor de medidas"}
          subtitle={"Conversor de Medidas feito em Typescript"}
          link={"https://github.com/KaiooLopes/ConversorDeMedidas"}
        />
        <ProjectDetail
          img={memory_game}
          title={"Jogo da memória"}
          subtitle={"Jogo da memória feito em Typescript"}
          link={"https://github.com/KaiooLopes/MemoryGame"}
        />
        <ProjectDetail
          img={tabela}
          title={"Tabela de alunos"}
          subtitle={
            "Tabela de notas feito em HTML, CSS e Javascript. Padrão MVC."
          }
          link={"https://github.com/KaiooLopes/TabelaAlunosMedia"}
        />
        <ProjectDetail
          img={todolist}
          title={"Lista de tarefas"}
          subtitle={"Lista de tarefas simples com localStorage"}
          link={"https://github.com/KaiooLopes/ToDoList"}
        />
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
      </section>
    </div>
  );
};

export default Projects;
