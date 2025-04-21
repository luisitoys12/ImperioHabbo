// src/Directiva.jsx
import React from "react";
import HabboCard from "./components/HabboCard";
import "./styles/directiva.css";

const directivaPorCargo = {
  Fundadores: ["iDarkGera", "-Emmanuel."],
  Administradores: ["anapao", "Fatimitalove26", "Desty"],
  Moderadores: ["guiller63676", ".-Fabiaan-.", "capricolnio", "-ismaaeeel"],
  Colaboradores: ["Djluisalegre", "7even"],
};

const nombresBonitos = {
  Fundadores: "Fundadores de HSpeed",
  Administradores: "Administradores de la Fansite",
  Moderadores: "Moderadores del Equipo",
  Colaboradores: "Colaboradores Técnicos",
};

const Directiva = () => {
  const jerarquia = ["Fundadores", "Administradores", "Moderadores", "Colaboradores"];

  return (
    <div className="directiva-container">
      <h2 className="main-title">Equipo de HSpeed</h2>
      {jerarquia.map((cargo) => (
        <section key={cargo} className={`cargo-section cargo-${cargo}`}>
          <div className="cargo-header">
            <span className="cargo-icon">★</span>
            <h4 className="cargo-title">{nombresBonitos[cargo]}</h4>
            <span className="cargo-icon">★</span>
          </div>
          <div className="cards-wrapper">
            {directivaPorCargo[cargo].map((name) => (
              <HabboCard key={name} username={name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Directiva;
