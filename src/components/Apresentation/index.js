import { ApresentationContainer } from "./styles";
import mypick from "./../../images/mypick.jpg";
import frontend from "./../../images/front-end.jpg";
import programation from "./../../images/programation.jpg";
import { useRef } from "react";

const Apresentation = () => {
  const div = useRef(null);

  const onload = () => {
    const sections = div.current.querySelectorAll("section");
    Array.from(sections).forEach((section, i) => {
      section.style.opacity = 1;
      section.style.transform = "translateX(0)";
    });
  };

  return (
    <ApresentationContainer ref={div} onLoad={onload}>
      <section>
        <img src={mypick} alt="foto perfil" className={"mypick"} />
        <p>
          Olá, meu nome é Kaio, sou desenvolvedor Front-End, tenho 20 anos e sou
          de São Lourenço do Sul (RS), mas atualmente moro em Florianópolis
          (SC).
        </p>
      </section>
      <section>
        <img src={programation} alt="programação" />
        <p>
          Sempre gostei muito de computação e me achei na programação, onde
          quero seguir na carreira de programador front-end, porém, tenho
          vontade de ampliar cada vez meus conhecimentos em outras áreas.
        </p>
      </section>
      <section>
        <img src={frontend} alt="front-end" className={"front_end"} />
        <p>
          Tenho experiência em Javascript, CSS, HTML, Typescript, React.js,
          Styled-components, Git, Github e sempre estou buscando aprender mais
          ferramentas e adquirir mais conhecimentos Front-End.
        </p>
      </section>
    </ApresentationContainer>
  );
};

export default Apresentation;
