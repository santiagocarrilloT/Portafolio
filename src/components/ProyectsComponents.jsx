import { useState } from "react";
import {
  ProjectLinkComponent,
  ProjectTechComponent,
} from "./TecnologiesComponent";

export function ProyectsComponent({
  imageSrc,
  tittleProyect,
  listTechProyect,
  description,
  projectRepository,
}) {
  return (
    <div className="follow-card-projects-area">
      <img
        src={imageSrc}
        alt={tittleProyect}
        className="follow-card-projects-img"
      />
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
