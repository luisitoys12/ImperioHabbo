import React, { useEffect, useState } from "react";
import "../styles/habbocard.css"; // Asegúrate de que la ruta sea correcta

const HabboCard = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.habbo.es/api/public/users?name=${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("No se pudo cargar el usuario.");
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Cargando {username}...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  const avatarUrl = `https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.figureString}`;

  return (
    <div className="habbo-card">
      <img src={avatarUrl} alt={user.name} />
      <h5>{user.name}</h5>
      <p className="motto">{user.motto}</p>
      <p className={`status ${user.online ? "online" : "offline"}`}>
        {user.online ? "🟢 En línea" : "🔴 Desconectado"}
      </p>
    </div>
  );
};

export default HabboCard;
