import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
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
            Desarrollador apasionado por crear interfaces modernas,
            sistemas web funcionales y experiencias digitales
            profesionales utilizando React y tecnologías actuales.
          </p>

          <div className="buttons">
            <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
            <a href="/cv-kevin-yahir.pdf" download className="btn-secondary">
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/foto.jpg" alt="Kevin" className="profile-img" />
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="projects" id="proyectos">
        <h2 className="section-title">Mis Proyectos</h2>

        <div className="project-grid">
          <div className="project-card" onClick={() => setActiveProject("clinico")}>
            <h3>Sistema Clínico</h3>
            <p>Gestión médica completa con PDF y agenda.</p>
          </div>

          <div className="project-card" onClick={() => setActiveProject("web")}>
            <h3>Desarrollo Web & React</h3>
            <p>Páginas modernas y responsivas.</p>
          </div>

          <div className="project-card" onClick={() => setActiveProject("colab")}>
            <h3>Proyectos Institucionales</h3>
            <p>Trabajo colaborativo multiplataforma.</p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {activeProject === "clinico" && (
              <>
                <h3>Sistema Clínico para Doctores</h3>
                <p>
                  Aplicación local para gestión de pacientes,
                  registro de citas médicas, generación automática
                  de recetas en PDF, calendario interactivo,
                  notas médicas y control del estado del paciente.
                </p>
                <img src="/proyecto1.jpg" alt="Sistema Clínico" />
              </>
            )}

            {activeProject === "web" && (
              <>
                <h3>Desarrollo Web & React JS</h3>
                <p>
                  Desarrollo de páginas modernas utilizando React,
                  JavaScript y diseño UI profesional.
                  Implementación responsive y buenas prácticas.
                </p>
                <img src="/proyecto2.jpg" alt="React Project" />
              </>
            )}

            {activeProject === "colab" && (
              <>
                <h3>Proyectos Institucionales</h3>
                <p>
                  Participación en desarrollo de aplicaciones
                  académicas utilizando trabajo en equipo,
                  metodologías ágiles y desarrollo multiplataforma.
                </p>
                <img src="/proyecto3.jpg" alt="Colaborativo" />
              </>
            )}

            <button className="close-btn" onClick={() => setActiveProject(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

{/* SOBRE MI MODERNO */}
<section className="about-modern" id="sobre">
  <h2 className="section-title">Sobre Mí</h2>

  <div className="about-modern-container">

    <div className="about-left">
      <img
        src="/foto2.jpg"
        alt="Kevin"
        className="about-photo"
      />
    </div>

    <div className="about-right">
      <h3>Kevin Yahir Felipe Mercado</h3>

      <p>
        Soy estudiante de la Universidad Tecnológica de la Sierra Hidalguense,
        cursando la Licenciatura en Desarrollo de Software Multiplataforma.
        Actualmente me encuentro en 5° cuatrimestre.
      </p>

      <p>
        Me especializo en desarrollo web con React JS, diseño de interfaces
        modernas y creación de sistemas funcionales como sistemas clínicos,
        aplicaciones institucionales y páginas web profesionales.
      </p>

      <div className="about-stats">
        <div>
          <h4>5°</h4>
          <span>Cuatrimestre</span>
        </div>

        <div>
          <h4>3+</h4>
          <span>Proyectos Reales</span>
        </div>

        <div>
          <h4>React</h4>
          <span>Frontend</span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-grid">
          <a href="mailto:20240075@utsh.edu.mx"><FaEnvelope /> Email</a>
          <a href="https://github.com/yosoykev17-collab" target="_blank"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/kevin-yahir-felipe-mercado-8753183a9/" target="_blank"><FaLinkedin /> LinkedIn</a>
          <a href="tel:7711398703"><FaPhone /> Teléfono</a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Kevin Yahir Felipe Mercado
      </footer>
    </>
  );
}

export default App;