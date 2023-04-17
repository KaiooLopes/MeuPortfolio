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
          Olá, meu nome é Kaio, tenho 20 anos e sou de São Lourenço do Sul (
          <abbr>RS</abbr>), mas atualmente moro em Florianópolis (
          <abbr>SC</abbr>).
        </p>
      </section>
      <section>
        <img src={frontend} alt="front-end" className={"front_end"} />
        <p>
          Tenho experiência em Javascript, CSS, HTML, Typescript e quero
          aprender outras ferramentas e linguagens.
        </p>
      </section>
      <section>
        <img src={programation} alt="programação" />
        <p>
          Meu foco atualmente é conseguir um emprego na área de programação, mas
          especificamente em front-end, porém, quero aprender a atuar na área de
          back-end também, e assim poder atuar como full stack.
        </p>
      </section>
    </ApresentationContainer>
  );
};

export default Apresentation;
