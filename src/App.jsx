import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">KM</h2>
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Sobre mí</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p className="intro">Hola, soy</p>
          <h1 className="name">Kevin Meraz</h1>
          <h2 className="role">Frontend Developer</h2>

          <p className="description">
            Creo experiencias digitales modernas, limpias y funcionales.
            Especializado en React, JavaScript y diseño UI elegante.
          </p>

          <div className="buttons">
            <button className="btn-primary">Ver Proyectos</button>
            <button className="btn-secondary">Descargar CV</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img src="/foto.jpg" alt="Kevin" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;