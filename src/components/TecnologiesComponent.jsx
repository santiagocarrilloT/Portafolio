import { FiGithub } from "react-icons/fi";
export function TecnologiesComponent({ nameTech, Icon }) {
  return (
    <span className="follow-card-tech-span">
      <div className="follow-card-tech-div">
        <Icon />
      </div>
      <p className="follow-card-tech-p">{nameTech}</p>
    </span>
  );
}

export function ProjectTechComponent({ nameTech, Icon }) {
  return (
    <span className="follow-card-projects-span">
      <div className="follow-card-projects-div">
        <Icon />
      </div>
      <p className="follow-card-projects-p">{nameTech}</p>
    </span>
  );
}

export function ProjectLinkComponent({ projectRepository }) {
  return (
    <a
      className="follow-card-projects-a"
      href={`${projectRepository}`}
      target="_blank"
    >
      <button className="follow-card-projects-span-button">
        <div className="follow-card-projects-div">
          <FiGithub />
        </div>
        <p className="follow-card-projects-p">GitHub</p>
      </button>
    </a>
  );
}
