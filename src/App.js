import "./css/style.css";
import "./css/mediaqueries.css";
import React, { useEffect } from "react";
import { useRef } from "react";
// Animaciones de LottieFiles
import Lottie from "lottie-react";
import animationPerson from "./lotties/animation_person.json";
import animationWorking from "./lotties/animation_working.json";

import translationsES from "./translations/ES"; // Importa las traducciones en español
import translationsEN from "./translations/EN"; // Importa las traducciones en inglés

import Translations from "./translations/Translations.js";

import projectsData from "./projects/projectsData.js";

function App() {
  // Constantes y función para reproducir en bucle los videos

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);
  const video6Ref = useRef(null);
  const video7Ref = useRef(null);

  const videoRefs = [
    video1Ref,
    video2Ref,
    video3Ref,
    video4Ref,
    video5Ref,
    video6Ref,
    video7Ref,
  ];

  const configureVideoLoop = (videoRef) => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true; // Silencia el video
      video.loop = true; // Habilita la reproducción en bucle
      video.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  };

  useEffect(() => {
    videoRefs.forEach(configureVideoLoop);
  });

  // Función para hacer scroll con la flecha
  function redirect(fragment) {
    window.location.href = `/#${fragment}`;
  }

  // Función para abrir el pdf del CV
  function openPDF() {
    window.open("./assets/CV Álvaro Sánchez Vélez.pdf");
  }

  // Traducción usando el componente Translations.js y los archivos de las traducciones ES.js y EN.js

  const [currentLanguage, setCurrentLanguage] = React.useState("en"); // Estado para el idioma actual

  // Función para cambiar el idioma
  const handleLanguageChange = () => {
    setCurrentLanguage(currentLanguage === "en" ? "es" : "en");
  };

  // Utiliza el conjunto de traducciones según el idioma actual
  const translations = currentLanguage === "en" ? translationsEN : translationsES;

  return (
    <html lang={currentLanguage}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Álvaro Sánchez Vélez</title>
      </head>
      <body>
        <nav id="desktop-nav">
          <div className="logo">Álvaro Sánchez</div>
          <div className="nav-list">
            <ul className="nav-links">
              <li>
                <a href="#about">{translations.about}</a>
              </li>
              <li>
                <a href="#technologies">{translations.tecns}</a>
              </li>
              <li>
                <a href="#projects">{translations.projects}</a>
              </li>
              <li>
                <a href="#contact">{translations.contact}</a>
              </li>
            </ul>
            <Translations onLanguageChange={handleLanguageChange} />
          </div>
        </nav>
        <section id="profile">
          <div className="section__pic-container1">
            <Lottie animationData={animationPerson} />
          </div>
          <div className="section__text">
            <p className="section__text__p1">{translations.saludo}</p>
            <h1 className="title">Álvaro Sánchez</h1>
            <p className="section__text__p2">{translations.trabajo}</p>
            <div className="btn-container1">
              <button className="btn btn-color-2" onClick={openPDF}>
                {translations.CV}
              </button>
              <button
                className="btn btn-color-1"
                onClick={() => redirect("contact")}
              >
                {translations["contact-me"]}
              </button>
            </div>
            <div id="socials-container">
              <a
                href="https://www.linkedin.com/in/alvaro-sanchez-velez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/linkedin.png"
                  alt="My LinkedIn profile"
                  className="icon"
                  loading="lazy"
                />
              </a>

              <a
                href="https://github.com/Alvarosanchezz3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/github.png"
                  alt="My Github profile"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="experience">
          <div>
           <p className="section__text__p1">{translations.SeeMy}</p>
           <h1 className="title">{translations.experience}</h1>
            <div className="experience">
              
              <div className="exp-title">
                <h2>Desarrollador de software (Marzo 2023 - Julio 2023) - HUVR </h2>
                <img src="./assets/HUVR.png" alt="huvr"></img>
              </div>  
              <p>Desarrollo de una API en C# que manejaba los logs de un programa de gran importancia del Hospital y uso de HTML, CSS y JavaScript para ayuda en la creación de la nueva página web del Hospital. Uso de Git como control de versiones para subir los cambios a producción. Aprendí metodologías de trabajo como SCRUM en reuniones que organizaban los Sprints, buenas prácticas, trabajo en equipo, adaptabilidad...</p>  
           </div>
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">{translations.KnowMore}</p>
          <h1 className="title">{translations.about}</h1>
          <div className="section-container">
            <div className="section__pic-container2">
              <Lottie animationData={animationWorking} />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img
                    src="./assets/education.png"
                    alt="Education icon"
                    className="icon"
                  />
                  <h3 className="about-title-containers">
                    {translations.education}
                  </h3>
                  <p>{translations.bacc}</p>
                  <p>{translations.dam}</p>
                </div>
                <div className="details-container">
                  <img
                    src="./assets/certification.png"
                    alt="technologies icon"
                    className="icon"
                  />
                  <h3 className="about-title-containers">
                    {translations["lic-certif"]}
                  </h3>
                  <p>{translations.cambridge}</p>
                  <p>{translations.efSet}</p>
                </div>
                <div className="details-container">
                  <img
                    src="./assets/course.png"
                    alt="technologies icon"
                    className="icon"
                  />
                  <h3 className="about-title-containers">
                    {translations.courses}
                  </h3>
                  <p>{translations.course1}</p>
                  <p>{translations.course2}</p>
                </div>
              </div>
              <div className="text-container">
                <p>{translations["cover-letter"]}</p>
              </div>
            </div>
          </div>
          <img
            src="./assets/arrow-down.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => redirect("technologies")}
          />
        </section>
        <section id="technologies">
          <p className="section__text__p1">{translations["explore-my"]}</p>
          <h1 className="title">{translations.tecns}</h1>
          <div className="technologies-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="technologies-sub-title">
                  {translations.frontdev}
                </h2>
                <div className="article-container">
                  <article>
                    <img
                      src="./assets/technologies/html.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/css.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/sass.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>SASS</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/js.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>{translations.int}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/react.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>React</h3>
                      <p>{translations.bas}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/angular.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>Angular</h3>
                      <p>{translations.bas}</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container">
                <h2 className="technologies-sub-title">Backend Development</h2>
                <div className="article-container">
                  <article>
                    <img
                      src="./assets/technologies/java.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>Java</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/spring.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>Spring</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/postgreSQL.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/git.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>{translations.adv}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/docker.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>Docker</h3>
                      <p>{translations.bas}</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./assets/technologies/php.png"
                      alt="technologies icon"
                      className="icon"
                    />
                    <div>
                      <h3>PHP</h3>
                      <p>{translations.bas}</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img
            src="./assets/arrow-down.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => redirect("projects")}
          />
        </section>
        <section id="projects">
          <p className="section__text__p1">{translations["explore-my"]}</p>
          <h1 className="title">{translations.projects}</h1>
          <div className="technologies-details-container">
            <div className="project-containers">
              {projectsData.map((project, index) => (
                <div className="each-project" key={index}>
                  <div className="article-container">
                    {project.videoSrc ? (
                      // Si hay un video, utilizar un elemento video
                      <video
                        className="project-video"
                        src={project.videoSrc}
                        ref={videoRefs[index]}
                        muted
                      />
                    ) : (
                      // Si no hay video, utilizar un elemento img
                      <img
                        src={project.imageSrc} // Asegúrate de tener una propiedad imageSrc en tus datos del proyecto
                        alt={`Project ${index + 1}`}
                        className="project-img"
                      />
                    )}
                  </div>
                  <h2 className="technologies-sub-title project-title">
                    {translations[project.title.toLowerCase()]}
                  </h2>
                  <p>{translations[`${project.title.toLowerCase()}-desc`]}</p>
                  <div className="btn-container1">
                    {project.technologies.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={`./assets/technologies/${tech.toLowerCase()}.png`}
                        alt={tech}
                        className="icon"
                      />
                    ))}
                  </div>
                  <div className="repository">
                    <p>{translations.github}</p>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./assets/github.png"
                        alt="Github"
                        className="icon"
                      />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="./assets/link.svg"
                          alt="link"
                          className="icon"
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="./assets/arrow-down.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => redirect("contact")}
          />
        </section>
        <section id="contact">
          <p className="section__text__p1">{translations.getTouch}</p>
          <h1 className="title">{translations["contact-me"]}</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src="./assets/email.png"
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:alvarosanchezvelez1@gmail.com">
                  alvarosanchezvelez1@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <img
                src="./assets/linkedin.png"
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p>
                <a
                  href="https://www.linkedin.com/in/alvaro-sanchez-velez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div className="nav-links-container">
              <ul className="nav-links">
                <li>
                  <a href="#about">{translations.about}</a>
                </li>
                <li>
                  <a href="#technologies">{translations.tecns}</a>
                </li>
                <li>
                  <a href="#projects">{translations.projects}</a>
                </li>
                <li>
                  <a href="#contact">{translations.contact}</a>
                </li>
              </ul>
            </div>
          </nav>
          <p>{translations.made}</p>
          <div className="btn-container2">
            <img
              src="./assets/technologies/react.png"
              alt="html"
              className="icon"
            />
            <img
              src="./assets/technologies/js.png"
              alt="js"
              className="icon-css-footer"
            />
            <img src="./assets/technologies/html.png" alt="html" className="icon" />
            <img
              src="./assets/technologies/css.png"
              alt="css"
              className="icon"
            />
          </div>
          <p className="copyright">{translations.copyright}</p>
        </footer>
      </body>
    </html>
  );
}
export default App;
