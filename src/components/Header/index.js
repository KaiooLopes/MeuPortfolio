import { HeaderContainer } from "./styles";
import { useRef, useState } from "react";
import logo from "../../images/logo.png";

const Header = () => {
  const ulCert = useRef(null);
  const ulNav = useRef(null);
  const btn = useRef(null);
  const [menu, setMenu] = useState(false);
  const [maxWidth] = useState(930);
  const handleMenu = (el) => {
    if (!menu) {
      openMenu(el);
      setMenu(true);
    } else {
      closeMenu(el);
      setMenu(false);
    }
  };

  if (maxWidth && ulNav) {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= maxWidth && ulNav.current) {
        ulNav.current.removeAttribute("style");
        setMenu(false);
      }
      if (window.innerWidth <= maxWidth && ulNav.current) {
        closeMenu();
        setMenu(false);
      }
    });
  }

  const openMenu = () => {
    btn.current.style.transform = "rotate(-90deg)";
    ulNav.current.style.maxHeight = "200px";
    ulNav.current.style.overflow = "visible";
    ulNav.current.style.padding = "20px 0";
  };

  const closeMenu = () => {
    btn.current.style.transform = "rotate(0deg)";
    ulNav.current.style.maxHeight = "0";
    ulNav.current.style.overflow = "hidden";
    ulNav.current.style.padding = "0";
  };

  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="Logo" />
      </span>
      <button
        className={`fa-solid fa-bars ${"menu"}`}
        onClick={() => {
          handleMenu();
          setMenu(!menu);
        }}
        ref={btn}
      ></button>
      <ul ref={ulNav}>
        <li>
          <a
            href="https://github.com/KaiooLopes"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kaio-alves-lopes-3a1057245/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="cert_a">
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Certificados
          </a>
          <ul className="ul_certificados" ref={ulCert}>
            <li>
              <a
                href="https://cdn.discordapp.com/attachments/665421295047016449/1038156009870475295/certificado-ingles.jpg"
                target={"_blank"}
                rel="noreferrer"
              >
                Certificado Inglês{" "}
              </a>
            </li>
            <li>
              <a
                href="https://cdn.discordapp.com/attachments/665421295047016449/1038158082771001384/image.png"
                target={"_blank"}
                rel="noreferrer"
              >
                Certficado Javascript Completo
              </a>
            </li>
            <li>
              <a
                href="https://cdn.discordapp.com/attachments/665421295047016449/1038156009534922833/Front-end.png"
                target={"_blank"}
                rel="noreferrer"
              >
                Certificado Front-end Básico
              </a>
            </li>
            <li>
              <a
                href="https://udemy-certificate.s3.amazonaws.com/image/UC-9b7aafb1-def9-40ab-9722-88aeb6b5f1f7.jpg"
                target={"_blank"}
                rel="noreferrer"
              >
                Certificado React.js
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#footer">Contate-me</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
