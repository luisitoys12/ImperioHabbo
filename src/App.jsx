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
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark w-100 p-3 shadow ${isHidden ? "hidden-navbar" : ""}`}>
        <a className="navbar-brand fw-bold" href="#">⚔️ Habbo Defense</a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 animate__animated animate__fadeInDown">¡Alístate en la Fuerza de Defensa!</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Demuestra tu valentía y honor en la mejor simulación militar de Habbo.
        </p>
        <p className="mt-3 animate__animated animate__pulse animate__infinite">¡Únete ahora!</p>
      </header>

      {/* Sección de Tarjetas */}
      <section className="cards-container d-flex flex-wrap justify-content-center">
        {[
          {
            title: "Únete a la Defensa",
            text: "Forma parte de una fuerza élite y protege Habbo con honor.",
            img: "/logo ems.png"
          },
          {
            title: "Rangos Exclusivos",
            text: "Gana prestigio y asciende en nuestra jerarquía militar.",
            img: "/logo ems.png"
          },
          {
            title: "Especialízate",
            text: "Elige tu camino ¡La decisión es tuya!",
            img: "/logo ems.png"
          }
        ].map((card, index) => (
          <div key={index} className="card custom-card animate__animated animate__zoomIn">
            <img src={card.img} className="card-img-top" alt="Símbolo" />
            <div className="card-body text-center">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
