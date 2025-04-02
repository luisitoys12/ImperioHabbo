import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

const FounderCard = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://www.habbo.es/api/public/users?name=${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        if (data.figureString) {
          setUser(data);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error al cargar usuario:", username, err);
        setError(true);
      });
  }, [username]);

  if (error)
    return (
      <p className="error-message">No se pudo cargar el usuario {username}.</p>
    );
  if (!user) return null;

  const avatarUrl = `https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.figureString}&headonly=0&size=l`;

  return (
    <div className="founder">
      <div className="founder-name">{user.name}</div>
      <img src={avatarUrl} alt={user.name} className="founder-img" />
    </div>
  );
};

const Founders = () => {
  return (
    <footer className="founders-container">
      <h3 className="liderr">Líder</h3>
      <div className="founders">
        <FounderCard username="iDarkGera" />
      </div>

      {/* Contenedor de redes sociales */}
      <div className="social-links">
        <a
          href="https://discord.gg/b9ajyYWR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg
"
            alt="Únete a nuestro Discord"
            className="discord-logo"
          />
        </a>
        <a
          href="https://x.com/ejercitoems?s=21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
            alt="Síguenos en Twitter"
            className="twitter-logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Founders;
