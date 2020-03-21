import React from "react";

import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { ButtonAi } from "../components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardButton: {
    width: "100%",
    fontWeight: 600,
    fontSize: 14
  },
  cardMain: {
    background: "#f9f9f9",
    marginTop: 30,
    fontWeight: 700,
    fontFamily: "sans-serif",
    width: 300
  }
}));

const CardSearch = props => {
  const styles = useStyles();

  return (
    <div>
      <Card className={styles.cardMain}>
        <CardContent>
          <p style={{ color: "#228A95" }}>Cliente Encontrado!</p>{" "}
          <p style={{ color: "#228A95" }}>Nome: </p>
          {props.result.name}
          <p style={{ color: "#228A95" }}>CPF:</p>
          {props.result.cpf}
        </CardContent>
        <CardActions>
          <ButtonAi
            component={Link}
            to="/solicitar"
            className={styles.cardButton}
          >
            Solicitar
          </ButtonAi>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardSearch;
