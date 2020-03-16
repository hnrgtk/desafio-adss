import React from "react";

import { Link } from "react-router-dom";

const Card = props => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  };
  return (
    <div style={style}>
      <h4>Cliente encontrado:</h4>
      <h4>{props.result.cpf}</h4>
      <h4>{props.result.nome}</h4>
      <Link to="/solicitar">
        <button>Solicitar</button>
      </Link>
    </div>
  );
};

export default Card;
