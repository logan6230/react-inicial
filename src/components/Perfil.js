import React from "react";
import "../styles/Perfil.css";

function Perfil(props) {
  return (
    <div className="perfil-container">
      <div className="img-container">
        <img
          className="perfil-img"
          src={require(`../images/${props.imagen}.png`)}
          alt={`Foto de ${props.imagen}`}
        />
      </div>
      <div className="person-container">
        <p className="info-perfil">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-perfil">
          {props.cargo} en {props.empresa}{" "}
        </p>
        <p className="resena-perfil">{props.resena}</p>
      </div>
    </div>
  );
}
export default Perfil;
