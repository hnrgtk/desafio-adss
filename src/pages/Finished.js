import React from "react";

import { Grid, Paper } from "@material-ui/core";
import { Header } from "../components";

const Finished = props => {
  const paper = {
    marginTop: 15,
    padding: 16,
    fontSize: 14,
    background: "#228A9509"
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 45,
    fontFamily: "sans-serif",
    fontWeight: "600"
  };
  const cartao = props.result.bank.accountNumber;

  return (
    <>
      <Header />
      <div style={style}>
        <h1 style={{ color: "#228A95", marginTop: 35 }}>
          Solicitação Realizada com Sucesso!
        </h1>
        <h4 style={{ color: "#228A95", fontWeight: 400 }}>
          Resumo da Solicitação
        </h4>
        <Grid container spacing={2} style={{ width: 850 }}>
          <Grid item xs={6}>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}>Nome completo:</p>{" "}
              {props.result.name}
            </Paper>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}>Número da conta:</p> {cartao}
            </Paper>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}>Valor Total:</p>
              {props.data.fullValue}
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}>Taxa de juros:</p>{" "}
              {props.data.installmentInterest}%
            </Paper>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}> Parcelas:</p>
              {props.data.installments}
            </Paper>
            <Paper style={paper} elevation={0}>
              <p style={{ color: "#228A95" }}>Valor da parcela:</p>{" "}
              {props.data.installmentValue}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Finished;
