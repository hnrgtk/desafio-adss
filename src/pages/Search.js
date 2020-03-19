import React from "react";
import CardSearch from "./CardSearch";
import { ButtonAi } from "../components";

import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const Search = props => {
  const styles = useStyles();

  function onChangeInput(values) {
    props.search(values.value);
  }
  return (
    <>
    <div className={styles.buttonContainer}>
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
        {props.result != "" ? <CardSearch result={props.result} /> : null}
      </div>
    </>
  );
};

export default Search;
