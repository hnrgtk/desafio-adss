import React from "react";

import { Grid, Paper } from "@material-ui/core";

const Finished = props => {
  const paper = {
    marginTop: 12
  };
  return (
    <div>
      <h2>Solicitação Realizada com Sucesso!</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper style={paper}>{props.result.name}</Paper>
          <Paper style={paper}>{props.result.cpf}</Paper>
          {/* <Paper style={paper}>{props.result.bank.accountNumber}</Paper> */}
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
};

export default Finished;
