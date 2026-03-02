import { useState } from "react";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">KYFM</h2>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-left">
          <p className="intro">Hola, soy</p>
          <h1 className="name">Kevin Yahir Felipe Mercado</h1>
          <h2 className="role">Frontend Developer</h2>

          <p className="description">
            Desarrollo interfaces modernas y sistemas web funcionales.
            Me enfoco en crear soluciones profesionales y eficientes.
          </p>

          <div className="buttons">
            <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
            <a href="/cv-kevin-yahir.pdf" download className="btn-secondary">
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img src="/foto.jpg" alt="Kevin" />
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="projects" id="proyectos">
        <h2 className="section-title">Mis Proyectos</h2>

        <div className="project-grid">

          <div className="project-card" onClick={() => setActiveProject("clinico")}>
            <h3>Sistema Clínico</h3>
            <p>Gestión de pacientes y citas médicas.</p>
          </div>

          <div className="project-card" onClick={() => setActiveProject("web")}>
            <h3>Páginas Web & React</h3>
            <p>Desarrollo frontend moderno.</p>
          </div>

          <div className="project-card" onClick={() => setActiveProject("colab")}>
            <h3>Proyectos Institucionales</h3>
            <p>Trabajo colaborativo académico.</p>
          </div>

        </div>

        {/* PROYECTO EXPANDIDO */}

        {activeProject && (
          <div className="project-detail">
            {activeProject === "clinico" && (
              <>
                <h3>Sistema Clínico para Doctores</h3>
                <p>
                  Sistema local que permite registrar pacientes,
                  gestionar citas médicas, generar recetas en PDF,
                  visualizar calendario, administrar notas clínicas
                  y consultar el estado de los pacientes.
                </p>
                <img src="/proyecto1.jpg" alt="Sistema Clínico" />
              </>
            )}

            {activeProject === "web" && (
              <>
                <h3>Desarrollo de Páginas Web</h3>
                <p>
                  Creación de sitios responsivos utilizando React JS,
                  JavaScript, CSS moderno y buenas prácticas
                  de desarrollo frontend.
                </p>
                <img src="/proyecto2.jpg" alt="Paginas Web" />
              </>
            )}

            {activeProject === "colab" && (
              <>
                <h3>Proyectos Colaborativos</h3>
                <p>
                  Participación en proyectos académicos
                  desarrollando aplicaciones multiplataforma
                  en equipo, utilizando metodologías ágiles.
                </p>
                <img src="/proyecto3.jpg" alt="Proyecto Colaborativo" />
              </>
            )}

            <button onClick={() => setActiveProject(null)} className="close-btn">
              Cerrar
            </button>
          </div>
        )}
      </section>

      {/* SOBRE MI */}
      <section className="about" id="sobre">
        <h2 className="section-title">Sobre Mí</h2>
        <p>
          Soy estudiante de la Universidad Tecnológica de la Sierra Hidalguense,
          curso la Licenciatura en Desarrollo de Software Multiplataforma
          y actualmente estoy en 5° cuatrimestre.
          Me especializo en desarrollo frontend con React y creación
          de sistemas web funcionales y profesionales.
        </p>
      </section>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-grid">
          <a href="mailto:tuemail@gmail.com" target="_blank">📧 Email</a>
          <a href="https://github.com/tuusuario" target="_blank">💻 GitHub</a>
          <a href="https://linkedin.com/in/tuperfil" target="_blank">🔗 LinkedIn</a>
          <a href="tel:7710000000">📱 Teléfono</a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Kevin Yahir Felipe Mercado
      </footer>
    </>
  );
}

export default App;