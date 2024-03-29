import { FooterContainer } from "./styles";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <footer>
        <span>
          <img src={logo} alt="Logo" />
        </span>
        <div className="contacts">
          <div className="email">
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <i className="fa-regular fa-envelope"></i>
            </a>
            <p>kaio.loopes18@gmail.com</p>
          </div>

          <div className="whats">
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <p>(51) 9 8653-7075</p>
          </div>
          <a
            href="https://www.instagram.com/kaio_al1/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/kaio.alveslopes/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
