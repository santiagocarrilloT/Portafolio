import "./FollowCard.css";

import { MdOutlinePlace, MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn, FaHtml5, FaUniversity, FaSchool } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiSupabase,
  SiDart,
  SiPhp,
  SiPhpmyadmin,
  SiApachecordova,
  SiOracle,
  SiApache,
} from "react-icons/si";
import { DiScala } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { BiLogoFirebase, BiLogoPostgresql, BiLogoFigma } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { TbCircleLetterBFilled, TbBrandMysql } from "react-icons/tb";
import { TecnologiesComponent } from "./components/TecnologiesComponent.jsx";
import { IoIosSchool, IoLogoCss3 } from "react-icons/io";
import { LuCloudCog } from "react-icons/lu";

import { ProyectsComponent } from "./components/ProyectsComponents.jsx";
import { FormationComponent } from "./components/FormationComponent.jsx";

import bylsBanner from "./assets/byls-Banner.png";
import ticketsBanner from "./assets/systemTickets.png";
import notasBanner from "./assets/notesWeb.png";
import fundacionBanner from "./assets/fundacion.png";
import { useState } from "react";

export function FollowCard() {
  //Agregar los proyectos en esta lista
  const listTechProject = [
    <ProyectsComponent
      imageSrc={bylsBanner}
      tittleProyect={"Gestor Gastos Personales - Byls"}
      listTechProyect={[
        ["Supabase", SiSupabase],
        ["Flutter", FaFlutter],
        ["Dart", SiDart],
      ]}
      description={
        "Aplicación multiplataforma para gestionar gastos personales, enfocada en ofrecer mayor control financiero mediante recordatorios y gráficos de ingresos y egresos."
      }
      projectRepository={"https://github.com/santiagocarrilloT/Byls"}
    />,
    <ProyectsComponent
      imageSrc={ticketsBanner}
      tittleProyect={"Sistema de Gestión de Tickets - SystemTickets"}
      listTechProyect={[
        ["PHP", SiPhp],
        ["JavaScript", RiJavascriptFill],
        ["HTML", FaHtml5],
        ["Boostrap", TbCircleLetterBFilled],
        ["PHPMyAdmin", SiPhpmyadmin],
        ["Figma", BiLogoFigma],
      ]}
      description={
        "Sistema web para la gestión de tickets de una empresa de reparación de equipos. Su función es informar por medio de un ticket o informe, cual es el estado actual del dispositivo en reparación."
      }
      projectRepository={"https://github.com/santiagocarrilloT/SystemTickets"}
    />,
    <ProyectsComponent
      imageSrc={notasBanner}
      tittleProyect={"Notes Web"}
      listTechProyect={[
        ["Cordova", SiApachecordova],
        ["JavaScript", RiJavascriptFill],
        ["HTML", FaHtml5],
        ["CSS", IoLogoCss3],
        ["OnsenUI", SiApache],
        ["Firebase", BiLogoFirebase],
      ]}
      description={
        "Aplicación multiplataforma para la toma de notas. Contiene base de datos conectada en la nube, lo cual permite ver las mismas notas en distintos dispositivos."
      }
      projectRepository={
        "https://github.com/santiagocarrilloT/MobileAppDevelop"
      }
    />,
    <ProyectsComponent
      imageSrc={fundacionBanner}
      tittleProyect={"Fundación ProNiñez"}
      listTechProyect={[
        ["Java", RiJavaLine],
        ["JavaSwing", SiOracle],
        ["PostgreSQL", BiLogoPostgresql],
      ]}
      description={
        "Aplicación de escritorio. Consulta y maneja funciones como presupuesto, comunidades beneficiadas, evaluación del porcentaje y trabajadores de la misma."
      }
      projectRepository={
        "https://github.com/santiagocarrilloT/FundacionProNinez"
      }
    />,
  ];

  const listResume = listTechProject.slice(0, 2);
  const [showAll, setShowAll] = useState(false);

  const visibleListProjects = showAll ? listTechProject : listResume;

  return (
    <article className="follow-card-article">
      {/* Imagen, nombre y ocupación */}
      <header className="follow-card-header">
        {/* Foto de Perfil */}
        <img className="follow-card-avatar" src="" alt="Foto de perfil"></img>

        {/* Info Contact */}
        <div className="follow-card-info">
          <h1 className="follow-card-username">Santiago A. Carrillo</h1>
          <h2 className="follow-h2-ocupation">Desarrollador de Software</h2>
          <p className="follow-p-ubicacion">
            <MdOutlinePlace className="follow-icon-email" /> Tuluá, Valle del
            Cauca
          </p>
          {/* Contacto */}
          <div className="follow-card-contact">
            {/* Email */}
            <a target="_blank" href="mailto::santicarrillo314@gmail.com">
              <button htmlFor="" className="follow-card-address">
                <MdOutlineMailOutline className="follow-icon-email" />
                santicarrillo314@gmail.com
              </button>
            </a>
            <div className="follow-card-contact-2">
              {/* Hoja de Vida */}
              <a
                target="_blank"
                href="https://raw.githubusercontent.com/santiagocarrilloT/Portafolio/refs/heads/main/CV-SantiagoCarrillo.pdf"
                download="Desarrollador_Santiago_Carrillo.pdf"
              >
                <button className="follow-card-cv">
                  <TbFileCv className="follow-icon-email" />
                </button>
              </a>
              {/* GitHub */}
              <a target="_blank" href="https://github.com/santiagocarrilloT">
                <button htmlFor="" className="follow-card-github">
                  <FiGithub className="follow-icon-email" />
                </button>
              </a>
              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/santiago-carrillo-215452287/"
              >
                <button htmlFor="" className="follow-card-linkedin">
                  <FaLinkedinIn className="follow-icon-email" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Mí */}
      <section className="follow-card-section">
        <div>
          <h2>Sobre Mí</h2>
          <p>
            Tecnólogo en Desarrollo de Software, reconocido como el mejor
            graduando. Poseo experiencia en backend y habilidades en frontend.
            Me especializo en la creación de soluciones limpias, escalables y
            eficientes, aplicando principios de POO, programación funcional y
            orientada a eventos. Disfruto trabajar en equipo, buscando siempre
            aportar ideas y generar valor en los proyectos.
          </p>
        </div>
      </section>

      <div className="follow-line" />

      {/* Tecnologías */}
      <section className="follow-card-section-tech">
        <div>
          <h2>Tecnologías</h2>
          <div className="follow-card-tech">
            {/* Java */}
            <TecnologiesComponent nameTech="Java" Icon={RiJavaLine} />
            {/* JavaScript */}
            <TecnologiesComponent
              nameTech="JavaScript"
              Icon={RiJavascriptFill}
            />
            {/* HTML */}
            <TecnologiesComponent nameTech="HTML" Icon={FaHtml5} />
            {/* CSS */}
            <TecnologiesComponent nameTech="CSS" Icon={IoLogoCss3} />
            {/* PHP */}
            <TecnologiesComponent nameTech="PHP" Icon={SiPhp} />
            {/* Scala */}
            <TecnologiesComponent nameTech="Scala" Icon={DiScala} />
            {/* Firebase */}
            <TecnologiesComponent nameTech="Firebase" Icon={BiLogoFirebase} />
            {/* Supabase */}
            <TecnologiesComponent nameTech="Supabase" Icon={SiSupabase} />
            {/* PostgreSQL */}
            <TecnologiesComponent
              nameTech="PostgreSQL"
              Icon={BiLogoPostgresql}
            />
            {/* MySQL */}
            <TecnologiesComponent nameTech="MySQL" Icon={TbBrandMysql} />
            {/* API REST */}
            <TecnologiesComponent nameTech="RESTful" Icon={LuCloudCog} />
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="follow-card-section-projects">
        <div>
          <h2>Proyectos</h2>
          <div>
            {visibleListProjects.map((element, ind) => {
              return element;
            })}
          </div>
          <a
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="btn-projects follow-card-projects-button"
          >
            {showAll ? "Ver menos" : "Ver más"}
            <span></span>
            <span></span>
          </a>
        </div>
      </section>

      {/* Formación */}
      <section className="follow-card-section-formation">
        <div>
          <h2>Formación</h2>
          <div>
            {/* Universidad del Valle */}
            <FormationComponent
              Icon={FaUniversity}
              linkAcademic={"https://tulua.univalle.edu.co/"}
              titleAcademic={"Tecnología en Desarrollo de Software - 2025"}
              educativeCenter={"Universidad del Valle"}
              description={
                "Durante la carrera, aprendí programación orientada a objetos con C#, eventos con Java y funcional/concurrente con Scala. Adquirí conocimientos en análisis de algoritmos, estructuras de datos y errores de truncamiento/redondeo. También estudié UX/UI, creando prototipos en Figma, y aprendí sobre maquetación, patrones de diseño y arquitecturas de software."
              }
            />
            {/* SENA */}
            <FormationComponent
              Icon={IoIosSchool}
              linkAcademic={
                "https://www.sena.edu.co/es-co/Paginas/default.aspx"
              }
              titleAcademic={"Técnico En Sistemas - 2021"}
              educativeCenter={"SENA"}
              description={
                "Curso de ofimática en Microsoft Office. En Excel aprendí tablas dinámicas, filtros, funciones condicionales y operaciones matemáticas. En Word, trabajé con estilos, encabezados, sangrías y configuración de página."
              }
            />
            {/* Primitivo Crespo */}
            <FormationComponent
              Icon={FaSchool}
              linkAcademic={"https://www.primitivocrespo.edu.co/"}
              titleAcademic={"Bachiller Académico - 2021"}
              educativeCenter={"Primitivo Crespo"}
              description={
                "Estudié conocimientos básicos en áreas como lenguas, matemáticas, ofimática, tecnología, entre otros."
              }
            />
          </div>
        </div>
      </section>

      <div className="follow-line" />

      {/* Info Contact */}
      <div className="follow-card-info-final">
        <p className="follow-card-info-final-p">Santiago Carrillo</p>
        {/* Email */}
        <a
          className="follow-card-a-email"
          target="_blank"
          href="mailto::santicarrillo314@gmail.com"
        >
          <button htmlFor="" className="follow-card-address">
            <MdOutlineMailOutline className="follow-icon-email" />
            santicarrillo314@gmail.com
          </button>
        </a>
        <div className="follow-card-contact">
          <div className="follow-card-contact-2">
            {/* Hoja de Vida */}
            <a
              target="_blank"
              href="https://raw.githubusercontent.com/santiagocarrilloT/Portafolio/refs/heads/main/Perfil%20Desarrollador%20Santiago%20Carrillo.pdf"
              download="Desarrollador_Santiago_Carrillo.pdf"
            >
              <button hidden className="follow-card-cv">
                <TbFileCv className="follow-icon-email" />
              </button>
            </a>
            {/* GitHub */}
            <a target="_blank" href="https://github.com/santiagocarrilloT">
              <button htmlFor="" className="follow-card-github">
                <FiGithub className="follow-icon-email" />
              </button>
            </a>
            {/* LinkedIn */}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/santiago-carrillo-215452287/"
            >
              <button htmlFor="" className="follow-card-linkedin">
                <FaLinkedinIn className="follow-icon-email" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
