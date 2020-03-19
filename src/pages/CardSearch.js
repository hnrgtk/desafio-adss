import React from "react";

import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { ButtonAi } from "../components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardButton: {
    width: "100%",
    fontWeight: 600,
		fontSize: 14
  },
  cardMain: {
    background: "#f9f9f9"
  }
}));

const CardSearch = props => {
  const styles = useStyles();

  return (
    <div>
      <Card className={styles.cardMain}>
        <CardContent>
          <Typography>Cliente Encontrado: </Typography>
          <Typography>Nome: {props.result.name}</Typography>
          <Typography>CPF: {props.result.cpf}</Typography>
        </CardContent>
        <CardActions>
          <ButtonAi component={Link} to="/solicitar" className={styles.cardButton}>
            Solicitar
          </ButtonAi>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardSearch;
