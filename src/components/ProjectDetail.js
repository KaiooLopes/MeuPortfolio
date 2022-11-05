import styles from "./ProjectDetail.module.css";

const ProjectDetail = ({ title, subtitle, img, link }) => {
  return (
    <div className={`${styles.project} project`}>
      <img src={img} alt="Imagem-projeto" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <a href={link} target={"_blank"} rel="noreferrer">
        Ver mais
      </a>
    </div>
  );
};

export default ProjectDetail;
