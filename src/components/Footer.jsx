import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css"; // Archivo CSS

const Founders = () => {
  return (
    <footer className="founders-container">
      <h3>Founders</h3>
      <div className="founders">
        <div className="founder">
          <div className="founder-name">Gera</div>
          <img src="/gera.png" alt="Founder 1" className="founder-img" />
        </div>
        <div className="founder">
          <div className="founder-name">Founder 2</div>
          <img src="/gera.png" alt="Founder 2" className="founder-img" />
        </div>
      </div>
    </footer>
  );
};

export default Founders;
