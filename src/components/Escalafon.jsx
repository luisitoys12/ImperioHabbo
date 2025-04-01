import React from "react";
import "../styles/escalafon.css";
import { Shield, Medal, ChevronUp, Star, Crown } from "lucide-react";

const escalafon = [
  {
    nombre: "JEDEFCO",
    descripcion:
      "Jefatura de la Defensa en Conjunto, órgano superior dentro de la estructura orgánica del Escuadrón Militar Supremo.",
    icono: <Crown size={24} className="ems-icono" />,
  },
  {
    nombre: "DIGEDEF",
    descripcion:
      "Dirección General de la Defensa, encargada de la política de seguridad del Escuadrón Militar Supremo.",
    icono: <Star size={24} className="ems-icono" />,
  },
  {
    nombre: "GEOM",
    descripcion:
      "Generales Especializados en Operaciones Militares, el grado más alto de la jerarquía militar.",
    icono: <Shield size={24} className="ems-icono" />,
  },
  {
    nombre: "OFICIAL GENERAL",
    descripcion:
      "Ejecutivos superiores responsables del mando militar en brigadas y divisiones.",
    icono: <Medal size={24} className="ems-icono" />,
  },
  {
    nombre: "OFICIAL SUPERIOR",
    descripcion:
      "Oficiales en formación avanzada con tareas administrativas y de liderazgo.",
    icono: <ChevronUp size={24} className="ems-icono" />,
  },
  {
    nombre: "OFICIAL ÉLITE",
    descripcion:
      "Militares de nivel medio superior que lideran y mentorean a niveles inferiores.",
    icono: <ChevronUp size={24} className="ems-icono" />,
  },
  {
    nombre: "SUBOFICIAL",
    descripcion:
      "Miembros en formación profesional, parte de la Academia de Seguridad.",
    icono: <Shield size={24} className="ems-icono" />,
  },
  {
    nombre: "CABALLERÍa",
    descripcion:
      "Unidad principal de las Fuerzas de Seguridad del Escuadrón.",
    icono: <Medal size={24} className="ems-icono" />,
  },
  {
    nombre: "RECLUTA",
    descripcion:
      "Civiles alistados en proceso de adhesión al Escuadrón Militar Supremo.",
    icono: <Star size={24} className="ems-icono" />,
  },
];

const EscalafonEMS = () => {
  return (
    <div className="ems-container">
      <h1 className="ems-titulo">Escalafón del EMS</h1>
      <div className="ems-piramide">
        {escalafon.map((nivel, index) => (
          <div key={index} className="ems-nivel" style={{ zIndex: escalafon.length - index }}>
            <div className="ems-card">
              <div className="ems-header">
                {nivel.icono}
                <h2>{nivel.nombre}</h2>
              </div>
              <p>{nivel.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscalafonEMS;