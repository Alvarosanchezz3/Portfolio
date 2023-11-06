import './css/style.css';
import './css/mediaqueries.css';
import React, { useEffect } from 'react';
import { useRef } from 'react';
// Animaciones de LottieFiles
import Lottie from 'lottie-react';
import animationPerson from './lotties/animation_person.json';
import animationWorking from './lotties/animation_working.json';

function App() {
  
  // Función para configurar un video para reproducción en bucle
  
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);
  const video6Ref = useRef(null);

  const configureVideoLoop = (videoRef) => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true; // Silencia el video
      video.loop = true; // Habilita la reproducción en bucle
      video.play()
        .catch(error => {
          console.error('Error al reproducir el video:', error);
        });
    }
  };

  useEffect(() => {
    configureVideoLoop(video1Ref);
    configureVideoLoop(video2Ref);
    configureVideoLoop(video3Ref);
    configureVideoLoop(video4Ref);
    configureVideoLoop(video5Ref);
    configureVideoLoop(video6Ref);
  }, []);

  // Función para hacer scroll con la flecha
  function redirect(fragment) {
    window.location.href = `/#${fragment}`;
  }

  //Función para abrir el pdf del CV
  function openPDF () {
    window.open('./assets/CV Álvaro Sánchez Vélez.pdf');
  }

  return (
    
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <nav id="desktop-nav">
      <div className="logo">Álvaro Sánchez</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo">Álvaro Sánchez</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </div>
    </nav>
    <section id="profile">
      <div className="section__pic-container1">     
          <Lottie animationData={animationPerson}/>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello👋🏼, I'm</p>
        <h1 className="title">Álvaro Sánchez</h1>
        <p className="section__text__p2">Junior Developer</p>
        <div className="btn-container1">
          <button
            className="btn btn-color-2"
            onClick={openPDF}>Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => redirect('contact')}>
            Contact me
          </button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/alvaro-sanchez-velez/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/linkedin.png" alt="My LinkedIn profile" className="icon" loading="lazy"/>
          </a>

          <a href="https://github.com/Alvarosanchezz3" target="_blank" rel="noopener noreferrer">
            <img src="./assets/github.png" alt="My Github profile" className="icon"/>
          </a>
        </div>
      </div>
    </section>
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container2">
        <Lottie animationData={animationWorking}/>
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="./assets/education.png" alt="Education icon" className="icon"/>
              <h3 className="about-title-containers">Education</h3>
              <p>Baccalaureate<br/>DAM graduate</p>
            </div>
            <div className="details-container">
              <img src="./assets/certification.png" alt="technologies icon" className="icon"/>
              <h3 className="about-title-containers">Licenses and certifications</h3>
              <p>B1 English Certificate Cambridge<br/>B2 English Certificate EF SET </p>
            </div>
            <div className="details-container">
              <img src="./assets/course.png" alt="technologies icon" className="icon"/>
              <h3 className="about-title-containers">Courses</h3>
              <p>HTML and CSS - path to REACT<br/>Java Master with Spring and Angular (+127h)</p>
            </div>
          </div>
          <div className="text-container">
            <p>
            20 year old man passionate about programming and the technological world with the desire to contribute in his first work environment, continue learning languages, frameworks and improving every day. I consider myself a fairly persevering, ambitious and committed person to give my best and improve every day.
            </p>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => redirect('technologies')}/>
    </section>
    <section id="technologies">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Technologies</h1>
      <div className="technologies-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="technologies-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src="./assets/technologies/html.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>HTML</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/css.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>CSS</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/sass.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>SASS</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/js.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/react.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/angular.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>Angular</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="technologies-sub-title">Backend Development</h2>
            <div className="article-container">
            <article>
                <img src="./assets/technologies/java.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>Java</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/postgreSQL.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Advanced</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/git.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/php.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>PHP</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/spring.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>Spring</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src="./assets/technologies/docker.png" alt="technologies icon" className="icon"/>
                <div>
                  <h3>Docker</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png"
      alt="Arrow icon" 
      className="icon arrow" 
      onClick={() => redirect('projects')}/>
    </section>
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="technologies-details-container">
        <div className="project-containers">

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/nikeCard.mp4" alt="Project 2" className="project-video" ref={video2Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">Nike card</h2>
            <p>Nike letter made using HTML, CSS with animations using Javascript to change the image and colors of it</p>
            <div className="btn-container1">
              <img src="./assets/technologies/html.png" alt='html' className="icon"/>
              <img src="./assets/technologies/sass.png" alt='css' className="icon"/>
              <img src="./assets/technologies/js.png" alt='js' className="icon"/>              
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/Nike-Card" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github " className="icon"/>
              </a>
            </div>           
          </div>

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/Calculator.mp4" alt="Project 3" className="project-video" ref={video3Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">Calculator</h2>
            <p>Calculator made with HTML CSS and JavaScript</p>
            <div className="btn-container1">
              <img src="./assets/technologies/html.png" alt='html' className="icon"/>
              <img src="./assets/technologies/css.png" alt='css' className="icon-css-footer"/>
              <img src="./assets/technologies/js.png" alt='js' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/Calculator" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/menu-animado.webm" alt="Project 4" className="project-video" ref={video4Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">Animated menu</h2>
            <p>Animated menu using hover, before, after... Made with HTML and SASS</p>
            <div className="btn-container1">
              <img src="./assets/technologies/html.png" alt='html' className="icon"/>
              <img src="./assets/technologies/sass.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/Animated-menu" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/login.webm" alt="Project 6" className="project-video" ref={video6Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">Login-Registrer</h2>
            <p>Login and registration with changing background made with HTML, CSS and JavaScript.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/html.png" alt='html' className="icon"/>
              <img src="./assets/technologies/sass.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/js.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/Login-Registrer" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
          <div className="article-container">
              <video src="./assets/projects/TWD-Netflix.mp4" alt="Project 1" className="project-video" ref={video1Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">TWD Netflix page</h2>
            <p>Responsive section of the Walking Dead on Netflix. Using media queries for response and javascript for videos, image changes and menu openings</p>
            <div className="btn-container1">
                <img src="./assets/technologies/html.png" alt='html' className="icon"/>
                <img src="./assets/technologies/sass.png" alt='css' className="icon"/>
                <img src="./assets/technologies/js.png" alt='js' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/NetflixPage" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/weatherApp.webm" alt="Project 5" className="project-video" ref={video5Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">WeatherApp</h2>
            <p>Web application that allows users to search for a city and get current weather conditions. Developed using HTML, CSS and JavaScript, it consumes an API to obtain data in real time.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/html.png" alt='html' className="icon"/>
              <img src="./assets/technologies/sass.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/js.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/WeatherApp" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
              <video src="./assets/projects/PokemonParejas.mp4" alt="Project 5" className="project-video" ref={video6Ref} muted/>
            </div>
            <h2 className="technologies-sub-title project-title">Pokemon-CouplesGame</h2>
            <p>Pokemon-themed match-finding game, made in Java using the java swing library for the graphical interface. They appear randomly in each game</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/eclipse.png" alt='html' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/Pokemon-CouplesGame" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
            <img src="./assets/projects/API REST.jpg" alt='img' className="project-img" />
            </div>
            <h2 className="technologies-sub-title project-title">API REST - Java</h2>
            <p>Project in Spring Boot that provides a simple REST API to manage customer data in a PostgreSQL database and powered by Docker.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/spring.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/postgreSQL.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/docker.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/SpringBootAPI" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
            <img src="./assets/projects/ID-Spring.jpg" alt='img' className="project-img" />
            </div>
            <h2 className="technologies-sub-title project-title">Dependency injection</h2>
            <p>Spring project developed to learn the different forms of dependency injection for code reuse, refactoring and easier testing</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/spring.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/html.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/css.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/SpringBootDI" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
            <img src="./assets/projects/Forms.png" alt='img' className="project-img" />
            </div>
            <h2 className="technologies-sub-title project-title">Spring forms</h2>
            <p>Implemented form validation with Spring Framework, leveraging Thymeleaf and Bootstrap to create dynamic and aesthetic web content.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/spring.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/html.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/bootstrap.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/SpringBoot-Form" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
            <img src="./assets/projects/Interceptores.png" alt='img' className="project-img" />
            </div>
            <h2 className="technologies-sub-title project-title">Spring Interceptors</h2>
            <p>Simple project in Spring that uses an interceptor to display a welcome message to users accessing the application during customer service hours and redirects to a closing page outside of customer service hours.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/spring.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/html.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/css.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/SpringBoot-Horario" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

          <div className="each-project">
            <div className="article-container">
            <img src="./assets/projects/errores.png" alt='img' className="project-img" />
            </div>
            <h2 className="technologies-sub-title project-title">Error handling in Spring</h2>
            <p>This project demonstrates how to handle errors in an application based on the Spring framework. The project includes a handler, services, and custom exceptions to show how different types of errors can be handled.</p>
            <div className="btn-container1">
              <img src="./assets/technologies/java.png" alt='html' className="icon"/>
              <img src="./assets/technologies/spring.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/html.png" alt='sass' className="icon"/>
              <img src="./assets/technologies/css.png" alt='sass' className="icon"/>
            </div>
            <div className="repository">
              <p>Link to the github repository: </p>
              <a href="https://github.com/Alvarosanchezz3/SpringBoot-Errors" target="_blank" rel="noopener noreferrer">
                <img src="./assets/github.png" alt="Github" className="icon"/>
              </a>
            </div> 
          </div>

        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => redirect('contact')}/>
    </section>
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:alvarosanchezvelez1@gmail.com">alvarosanchezvelez1@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/alvaro-sanchez-velez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>This portfolio is made with: </p>     
      <div className="btn-container2">
        <img src="./assets/technologies/html.png" alt='html' className="icon"/>
        <img src="./assets/technologies/css.png" alt='css' className="icon-css-footer"/>
        <img src="./assets/technologies/js.png" alt='js' className="icon"/>
        <img src="./assets/technologies/react.png" alt='react' className="icon"/>
      </div>
      <p className="copyright">Copyright &#169; 2023 Álvaro Sánchez. All Rights Reserved.</p>
    </footer>
    <script src=""></script>
  </body>
</html>
  );
}

export default App;