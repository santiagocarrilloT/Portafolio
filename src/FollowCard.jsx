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
import { TbCircleLetterBFilled } from "react-icons/tb";
import { TecnologiesComponent } from "./components/TecnologiesComponent.jsx";
import { IoLogoCss3 } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";

import { ProyectsComponent } from "./components/ProyectsComponents.jsx";
import { FormationComponent } from "./components/FormationComponent.jsx";
import { useState } from "react";

export function FollowCard() {
  //Agregar los proyectos
  const listTechProject = [
    <ProyectsComponent
      imageSrc={"https://innovainternetmx.com/wp-content/uploads/app.jpeg"}
      tittleProyect={"Gestor Gastos Personales - Byls"}
      listTechProyect={[
        ["Supabase", SiSupabase],
        ["Flutter", FaFlutter],
        ["Dart", SiDart],
      ]}
      description={
        "Aplicación multiplataforma para gestionar gastos personales, enfocada en ofrecer mayor control financiero mediante recordatorios y gráficos de ingresos y egresos."
      }
    />,
    <ProyectsComponent
      imageSrc={"https://innovainternetmx.com/wp-content/uploads/app.jpeg"}
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
    />,
    <ProyectsComponent
      imageSrc={"https://innovainternetmx.com/wp-content/uploads/app.jpeg"}
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
    />,
    <ProyectsComponent
      imageSrc={"https://innovainternetmx.com/wp-content/uploads/app.jpeg"}
      tittleProyect={"Fundación ProNiñez"}
      listTechProyect={[
        ["Java", RiJavaLine],
        ["JavaSwing", SiOracle],
        ["PostgreSQL", BiLogoPostgresql],
      ]}
      description={
        "Aplicación de escritorio. Consulta y maneja funciones como presupuesto, comunidades beneficiadas, evaluación del porcentaje y trabajadores de la misma."
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
        <img
          className="follow-card-avatar"
          src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg"
          alt="Foto de perfil"
        ></img>

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
            {/* Hoja de Vida */}
            <a
              target="_blank"
              href="/Portafolio/blob/main/Perfil%20Desarrollador%20Santiago%20Carrillo.pdf"
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
      </header>

      {/* Sobre Mí */}
      <section className="follow-card-section">
        <div>
          <h2>Sobre Mí</h2>
          <p>
            Candidato a grado de Tecnología en Desarrollo de Software en la
            Universidad del Valle, reconocido entre los 5 mejores estudiantes en
            3 de 5 semestres. Me especializo en el desarrollo de aplicaciones
            móviles y web, destacando en el trabajo en equipo. Mi meta es
            continuar mis estudios para ser ingeniero en sistemas. Actualmente,
            también me capacito de forma autodidacta para fortalecer mis
            conocimientos en el desarrollo de software e iniciar en el mundo de
            los negocios.
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
          <button
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="follow-card-projects-button"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
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
          {/* Hoja de Vida */}
          <a
            target="_blank"
            href="/Portafolio/blob/main/Perfil%20Desarrollador%20Santiago%20Carrillo.pdf"
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
    </article>
  );
}
