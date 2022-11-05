import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <footer>
        <span>
          Portfólio/Kaio
          <i className="fa-regular fa-id-card"></i>
        </span>
        <div className={styles.contacts}>
          <div className={styles.email}>
            <a href="/#" onClick={(e) => e.preventDefault()}>
              <i className="fa-regular fa-envelope"></i>
            </a>
            <p>kaio.loopes18@gmail.com</p>
          </div>

          <div className={styles.whats}>
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
    </div>
  );
};

export default Footer;
