import React from "react";
import "../styles/departamentos.css"; // Asegúrate de tener este archivo CSS

const Departamentos = () => {
  const departamentos = [
    {
      nombre: "Departamento de Doctrina Militar (DDM)",
      descripcion:
        "El Departamento de Doctrina Militar tiene como objetivo mejorar la formación y capacitación de los militares, proporcionándoles las herramientas necesarias para aplicar la doctrina militar en el campo de batalla de manera efectiva y eficiente. Los cursos y programas ofrecidos en este departamento pueden incluir temas como estrategia militar, tácticas militares, logística militar, inteligencia militar entre otros.",
      administrador: ".:xGregx:.",
    },
    {
      nombre: "Departamento de Entrenamiento y Adiestramiento Militar (DEAM)",
      descripcion:
        "El Departamento de Entrenamiento y Adiestramiento Militar es el encargado de la instrucción constante del personal, es un espacio enfocado principalmente al entrenamiento físico del pelotón. Esto se logra a través de las marchas militares, entrenamientos especializados o de supervivencia y cursos prácticos sobre el control y manejo de armamento.",
      administrador: "-",
    },
    {
      nombre: "Departamento de Recreación y Entretenimiento Militar (DREM)",
      descripcion:
        "El Departamento de Recreación y Entretenimiento Militar es el encargado de todas las actividades recreativas de nuestra organización, administran la planificación, coordinación y creación de eventos extraoficiales e instalaciones de ocio. Este también trata de brindar un buen momento de diversión, ayudando a desconectar de las labores.",
      administrador: "Fatimitalove26 | capricolnio",
    },
    {
      nombre: "Departamento de Operaciones Militares (DOM)",
      descripcion:
        "El Departamento de Operaciones Militares es el encargado de de planear y ejecutar todo tipo de estrategias y operaciones militares, también administran el uso de la fuerza y el personal militar para infiltraciones, ataques e inclusive destrucción y neutralización de organizaciones enemigas, también se encarga del aprendizaje de todos los miembros de nuestra organización por medio de tácticas militares, donde pondrán a prueba sus reflejos, velocidad y trabajo en equipo.",
      administrador: "ll-Javi-ll",
    },
    {
      nombre: "Departamento de Personal y Valores (DPV)",
      descripcion:
        "El Departamento de Personal y Valores busca principalmente el bienestar laboral del personal, se encargan de los asuntos internos de la institución, llevando registros y supervisando al personal militar. Busca la coordinación y ayuda la compenetración entre los miembros de la organización con actividades en equipo.",
      administrador: "-Ismaaeeel",
    },
  ];

  return (
    <div className="departamentos-container">
      <h1>[EMS] DEPARTAMENTOS:</h1>
      {departamentos.map((departamento, index) => (
        <div key={index} className="departamento">
          <h2>{departamento.nombre}</h2>
          <p>{departamento.descripcion}</p>
          <p>
            <strong>Administrador:</strong> {departamento.administrador}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Departamentos;
