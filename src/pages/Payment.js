import React from "react";
import { TextField } from "@material-ui/core";
import { ButtonAi, Header } from "../components";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Payment = props => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 45,
    fontFamily: "sans-serif"
  };

  const input = {
    marginTop: 16
  };

  const button = {
    padding: "8px 75px",
    marginTop: 16,
    fontSize: 16
  };
  return (
    <>
      <Header />
      <div style={style}>
        <h1 style={{color: "#228A95"}}>Insira os dados do Cartão</h1>
        <TextField
          style={input}
          label="Nome Completo"
          variant="outlined"
          size="small"
        />
        <NumberFormat
          customInput={TextField}
          style={input}
          label="Número do cartão"
          variant="outlined"
          size="small"
          isNumericString
          format="####.####.####.####"
          mask="_"
        />
        <NumberFormat
          customInput={TextField}
          style={input}
          label="Data de validade"
          variant="outlined"
          size="small"
          isNumericString
          format="##/##"
          mask="_"
        />
        <NumberFormat
          customInput={TextField}
          style={input}
          label="Número de segurança"
          variant="outlined"
          size="small"
          isNumericString
          format="###"
          mask="_"
        />
        <ButtonAi
          component={Link}
          to="/finalizado"
          style={button}
          bgColor="#228A95"
        >
          Continuar
        </ButtonAi>
      </div>
    </>
  );
};

export default Payment;
