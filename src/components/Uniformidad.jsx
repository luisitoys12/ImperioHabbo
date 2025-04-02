import React from "react";
import "../styles/Uniformidad.css"; // Asegúrate de tener un archivo CSS

const Documentos = () => {
  const pdfUrl = "/documentos/CBEMS.pdf"; // Ruta del PDF en tu proyecto
  const driveUrl =
    "https://docs.google.com/spreadsheets/d/1-DFoOB-ZIdQJ71H_I3Zmo99-0V7kxW2keHAp_pqJKM4/edit?usp=sharing"; // Reemplaza con tu enlace

  return (
    <div className="documentos-container">
      <h1>📂 Acceso a Documentos</h1>

      <div className="documento">
        <h2>📄 [EMS] Documento de Capacitación para Reclutas</h2>
        <embed src={pdfUrl} type="application/pdf" className="pdf-viewer" />
        <a href={pdfUrl} download className="boton-descarga">
          Descargar PDF
        </a>
      </div>

      <div className="documento">
        <h2>🔗 [EMS] Documento - Escalafón & Departamentos</h2>
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-drive"
        >
          Ver en Google Drive
        </a>
      </div>
    </div>
  );
};

export default Documentos;
