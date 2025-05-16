import { useState } from "react";
import {
  ProjectLinkComponent,
  ProjectTechComponent,
} from "./TecnologiesComponent";

import ModalImg from "./Modal-Image";

export function ProyectsComponent({
  imageSrc,
  tittleProyect,
  listTechProyect,
  description,
  projectRepository,
}) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="follow-card-projects-area">
      <button className="follow-card-projects-img-button" onClick={handleClick}>
        <img
          src={imageSrc}
          alt={tittleProyect}
          className="follow-card-projects-img"
          loading="lazy"
        />
        {isOpen && (
          <ModalImg
            onClose={handleClose}
            imageSrc={imageSrc}
            titleProyect={tittleProyect}
          />
        )}
      </button>

      <div className="follow-card-projects-info">
        <span>
          <strong>{tittleProyect}</strong>
        </span>
        <div className="follow-card-projects-tech">
          {listTechProyect.map((tech, ind) => (
            <ProjectTechComponent key={ind} nameTech={tech[0]} Icon={tech[1]} />
          ))}
        </div>
        <p>{description}</p>
        {/* Enlace Repositorio */}
        <ProjectLinkComponent projectRepository={projectRepository} />
      </div>
    </div>
  );
}
