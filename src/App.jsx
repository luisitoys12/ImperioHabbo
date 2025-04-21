import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/App.css";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Oculta el navbar al bajar
      } else {
        setIsHidden(false); // Muestra el navbar al subir
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid app-container d-flex flex-column align-items-center">
      {/* Navbar con efecto de ocultarse al hacer scroll */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark w-100 p-3 shadow ${
          isHidden ? "hidden-navbar" : ""
        }`}
      >
        <a className="navbar-brand fw-bold" href="#">
          🌟 HSpeed Fansite
        </a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 animate__animated animate__fadeInDown">
          ¡Bienvenido a HSpeed!
        </h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Tu fansite favorito para todo lo relacionado con Habbo.
        </p>
        <p className="mt-3 animate__animated animate__pulse animate__infinite">
          ¡Sigue nuestras actualizaciones y participa en eventos increíbles!
        </p>
      </header>

      {/* Sección de Noticias */}
      <section className="noticias-container text-center mt-5">
        <h2 className="mb-4">📰 Últimas Noticias</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card custom-card animate__animated animate__fadeIn">
            <img
              src="/noticia1.png"
              alt="Noticia 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">¡Nuevo Evento de Primavera!</h3>
              <p>
                Participa en los concursos de primavera y gana premios exclusivos.
              </p>
            </div>
          </div>
          <div className="card custom-card animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="/noticia2.png"
              alt="Noticia 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">¡Nuevos Furnis Disponibles!</h3>
              <p>
                Descubre los increíbles furnis en la tienda de Habbo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Personalización */}
      <section className="personalizacion-container text-center mt-5">
        <h2 className="mb-4">🎨 Personaliza tu Habbo</h2>
        <p className="text-white">
          Explora las mejores combinaciones de trajes y diseños de salas.
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card custom-card animate__animated animate__fadeIn">
            <img
              src="/trajes.png"
              alt="Trajes"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">¡Ideas de Trajes!</h3>
              <p>
                Encuentra los mejores estilos para destacar en la comunidad.
              </p>
            </div>
          </div>
          <div className="card custom-card animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="/salas.png"
              alt="Salas"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Decoración de Salas</h3>
              <p>
                Inspírate con estas creaciones únicas de la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Eventos */}
      <section className="eventos-container text-center mt-5">
        <h2 className="mb-4">🎉 Próximos Eventos</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Torneo de Batallas de Baile - 25 de Abril
          </li>
          <li className="list-group-item">
            Carrera de Laberintos - 30 de Abril
          </li>
          <li className="list-group-item">
            Fiesta Temática de los 80s - 5 de Mayo
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
