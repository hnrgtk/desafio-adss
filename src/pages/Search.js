import React from "react";
import CardSearch from "./CardSearch";
import { ButtonAi, Header } from "../components";

import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  }
}));

const Search = props => {
  const styles = useStyles();

  function onChangeInput(values) {
    props.search(values.value);
  }
  return (
    <>
      <Header />
      <div style={{ marginTop: 55 }} className={styles.buttonContainer}>
        <NumberFormat
          customInput={TextField}
          label="CPF"
          variant="outlined"
          size="small"
          value={props.query}
          onValueChange={onChangeInput}
          isNumericString
          format="###.###.###-##"
          mask="_"
        />
        <ButtonAi onClick={props.fetch}>Buscar</ButtonAi>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {/* eslint-disable-next-line */}
        {props.result != "" ? <CardSearch result={props.result} /> : null}
      </div>
    </>
  );
};

export default Search;
