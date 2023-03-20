import { ProjectDetailContainer } from "./styles";

const ProjectDetail = ({ title, subtitle, img, link }) => {
  return (
    <ProjectDetailContainer className="project">
      <img src={img} alt="Imagem-projeto" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <a href={link} target={"_blank"} rel="noreferrer">
        Ver mais
      </a>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
