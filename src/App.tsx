import { useEffect } from "react";
import "./App.scss";
import { useRef } from "react";

function App() {
  const elemet: any = useRef(null);
  const wrap: any = useRef(null);

  useEffect(() => {
    if (window.screen.width < 800) {
      elemet.current.style.display = "none";
      wrap.current.style.width = "100%";
      wrap.current.style.marginBottom = "5vh";
    }
  }, [elemet, wrap]);

  return (
    <div className="main-box">
      <div className="justify">
        <section className="article-1">
          <div className="wrap" ref={wrap}>
            <h2 className="title">Carlos Omar Anzaldo Solano</h2>
            <h4 className="sub-title">
              Desarrollador Full stack, con 2 años de experiencia en la creación
              de soluciones tecnológicas.
            </h4>
            <div className="icons">
              <p>
                <i
                  className="fa fa-envelope-o"
                  id="mail"
                  aria-hidden="true"
                ></i>
              </p>
              <p>
                <i className="fa fa-phone" id="phone" aria-hidden="true"></i>
              </p>
              <p>
                <i className="fa fa-github" id="github" aria-hidden="true"></i>
              </p>
              <p>
                <i
                  className="fa fa-linkedin-square"
                  id="square"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
          <div className="facebook" id="facebook" ref={elemet}>
            <img src="../../public/Tetris.png" className="img" />
          </div>
        </section>
        <section className="article-2">
          <h3>About Me</h3>
          <p
            className="text"
            style={{ fontFamily: "monospace", fontWeight: "bolder" }}
          >
            Desarrollador web, con 2 años de experiencia en la creación de
            soluciones tecnológicas, Uso de metodología scrum y el manejo de
            tecnologías como mongodb, mysql, javascript, react, node.js, php,
            colaboración en la integración de apis como sat ws y círculo de
            crédito pruebas de vida(para obtención de imagen y videograbación)
            para la otorgación del crédito..
          </p>
        </section>
        <section className="article-3">
          <h3>Experiencie</h3>
          <p
            className="text"
            style={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              overflow: "hidden",
            }}
          >
            <h5>Lightia - full stack developer</h5>
            Colabore en la creación de aplicaciones web utilizando el stack
            MERN, me encargaba del mantenimiento de la aplicación y él 
            desarrollo de nuevas funcionalidades para distintos
            sistemas, responsable del mantenimiento de las bases de
            datos y las constantes actualizaciones que se requerían,
            seguridad de lo Sistemas y lógica de negocio.
            <h5 style={{ marginTop: "3%" }}>Cti - Soporte TI soporte</h5>+
            creación de reportes de errores y fallos, implementación de
            correcciones. + capacidad para solucionar problemas operativos vía
            remota. + mantenimiento de sistemas para garantizar el correcto
            funcionamiento.
          </p>
        </section>
        <section className="article-4">
          <h3>Education</h3>
          <p
            className="text"
            style={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              overflow: "auto",
            }}
          >
            Ingeniera en sistemas Informáticos, Universidad Tecnológica de
            Guadalajara
          </p>
        </section>
        <section className="article-5">
          <h3>project</h3>
          <div className="grid-container">
            <div className="project">
              <a href="https://tetris-dy16.vercel.app/" className="link" style={{textDecoration: 'none'}}>
                <img src="../../Tetris.png" alt="" className="picture" />
                <div className="description">
                  <p className="text-style">Testris</p>
                </div>
              </a>
            </div>
            <div className="project">
              <img src="" alt="" className="picture" />
              <div className="description">
              <p className="text-style"></p>
              </div>
            </div>
            <div className="project">
              <img src="" alt="" className="picture" />
              <div className="description">
              <p className="text-style"></p>
              </div>
            </div>
          </div>
        </section>
        <section className="article-6">
          <h3>Skills</h3>
          <p
            className="text"
            style={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              fontSize: "1vw",
            }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
              alt="bash"
              width="50"
              height="50"
            />
            <a
              href="https://getbootstrap.com"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="50"
              height="50"
            />
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="50"
              height="50"
            />
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="50"
              height="50"
            />
            <a href="https://expressjs.com" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="50"
              height="50"
            />
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer" />
            <img
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width="50"
              height="50"
            />
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" />
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="50"
              height="50"
            />
            <a
              href="https://www.w3.org/html/"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="50"
              height="50"
            />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="50"
              height="50"
            />
            <a href="https://www.linux.org/" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="50"
              height="50"
            />
            <a href="https://mariadb.org/" target="_blank" rel="noreferrer" />
            <img
              src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
              alt="mariadb"
              width="50"
              height="50"
            />
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="50"
              height="50"
            />
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="50"
              height="50"
            />
            <a href="https://www.nginx.com" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
              alt="nginx"
              width="50"
              height="50"
            />
            <a href="https://nodejs.org" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="50"
              height="50"
            />
            <a href="https://postman.com" target="_blank" rel="noreferrer" />
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="50"
              height="50"
            />
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="50"
              height="50"
            />
            <a href="https://redux.js.org" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="50"
              height="50"
            />
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="50"
              height="50"
            />
            <a href="https://webpack.js.org" target="_blank" rel="noreferrer" />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="webpack"
              width="50"
              height="50"
            />
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
