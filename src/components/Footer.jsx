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
      <h3 className="liderr">Lider</h3>
      <div className="founders">
        <FounderCard username="iDarkGera" />
      </div>
      <div className="discord-container">
        <a
          href="https://discord.gg/b9ajyYWR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg"
            alt="Únete a nuestro Discord"
            className="discord-logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Founders;
