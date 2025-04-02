import React from "react";
import "../styles/remuneracion.css";

// Importa las imágenes que usas como íconos
import reclutaIcon from "../../public/placas/recluta real.gif";
import caballeriaIcon from "../../public/placas/caballeria.gif";
import suboficialIcon from "../../public/placas/suboficial.gif";
import oficialEliteIcon from "../../public/placas/oficialelite.gif";
import oficialSuperiorIcon from "../../public/placas/oficialsuperior.gif";
import oficialGeneralIcon from "../../public/placas/oficialgeneral.gif";

const RemuneracionTable = () => {
  const data = [
    {
      rango: "RECLUTA",
      requisitos: "1h",
      remuneracion: "5 créditos + 1 ascenso",
      icon: reclutaIcon,
    },
    {
      rango: "CABALLERÍA",
      requisitos: "7h, 1PA",
      remuneracion: "20 créditos / 1 grado",
      icon: caballeriaIcon,
    },
    {
      rango: "SUBOFICIAL",
      requisitos: "8h, 1.5PA, 4 ZdI",
      remuneracion: "25 créditos / 1 grado",
      icon: suboficialIcon,
    },
    {
      rango: "OFICIAL ÉLITE",
      requisitos: "10h, 2PA",
      remuneracion: "30 créditos / 1 grado",
      icon: oficialEliteIcon,
    },
    {
      rango: "OFICIAL SUPERIOR",
      requisitos: "12h, 2.5PA",
      remuneracion: "35 créditos / 1 grado",
      icon: oficialSuperiorIcon,
    },
    {
      rango: "OFICIAL GENERAL",
      requisitos: "14h, 3PA",
      remuneracion: "40 créditos / 1 grado",
      icon: oficialGeneralIcon,
    },
  ];

  return (
    <div className="remuneracion-container">
      <h2 className="remuneracion-title">Tabla de Remuneraciones EMS</h2>
      <div className="remuneracion-table-wrapper">
        <table className="remuneracion-table">
          <thead>
            <tr>
              <th>Rango</th>
              <th>Requisitos</th>
              <th>Remuneración</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.icon}
                    alt={item.rango}
                    className="rango-icon"
                  />
                  {item.rango}
                </td>
                <td>{item.requisitos}</td>
                <td>{item.remuneracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="significados-container">
        <h2 className="significados-title">Significados</h2>
        <div className="significados-box">
          <p>
            <strong>PA: </strong>Los "Puntos de Actividad" (PA) son una
            puntuación obtenida al participar en las actividades realizadas
            constantemente en la institución militar. El personal de EMS puede
            obtener estos puntos según el rol con el cual participe en dichas
            actividades, ya sea solo asistiendo (
            <strong>Actividad Asistida - AA</strong>) o dirigiendo una actividad
            (<strong>Actividad Dirigida - AD</strong>).
          </p>
          <p>
            <strong>ZdI: </strong>Es la zona por donde ingresan los Reclutas,
            invitados o rangos que juegan desde la app. A partir del rango SOF,
            quedan encargados de esta área.
          </p>
        </div>
      </div>
      <div className="idea-container">
        <h3 className="idea-title">💡</h3>
        <p className="idea-text">
          En el día de paga, cada miembro del EMS deberá elegir entre recibir su
          retribución en <strong>créditos</strong> o en <strong>grados</strong>.
          ¡Tomen la mejor decisión para su desarrollo dentro de la institución!
        </p>
      </div>
    </div>
  );
};

export default RemuneracionTable;
