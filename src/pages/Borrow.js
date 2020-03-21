import React, { useState } from "react";

import { Link } from "react-router-dom";
import { api } from "../services/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button
} from "@material-ui/core";

import { makeStyles, darken } from "@material-ui/core/styles";
import clsx from "clsx";
import { Header } from "../components";
import NumberFormat from "react-number-format";

const useStyles = makeStyles(theme => ({
  table: {
    width: 650
  },
  row: {
    cursor: "pointer"
  },
  selectedRow: {
    background: "#F9FEAE"
  },
  statusBar: {
    position: "absolute",
    bottom: 0,
    height: 75,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#228A95",
    color: "white",
    overflowY: "hidden",
    fontFamily: "sans-serif",
    fontWeight: 600
  },
  button: {
    background: "#F29C49",
    margin: theme.spacing(1),
    marginBottom: 30,
    textTransform: "initial",
    "&:hover": {
      background: darken("#F29C49", 0.1)
    }
  },
  buttonConteiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rowHead: {
    fontWeight: 600,
    fontSize: 14
  }
}));

function Borrow({ onClickRow }) {
  const [state, setState] = useState({
    tableData: [],
    showBar: false,
    clickedTableRow: {}
  });

  const styles = useStyles();

  const { tableData } = state;

  const [input, setInput] = useState();
  const [error, setError] = useState(false);


  async function sendToApi() {
    const { data } = await api.get("/rateTable/1");
    setState(oldState => ({ ...oldState, tableData: data.installments }));
  }

  const confirm = rowData => {
    setState(oldState => ({
      ...oldState,
      showBar: true,
      clickedTableRow: rowData,
      input: input
    }));
    onClickRow({ clickedRow: rowData, input: input });
  };

  function handleInput(e) {
    setInput(e.value);
  }

  function onClickCond() {
    let n = input;
    if (n >= 300 && n <= 10000) {
      sendToApi();
      setError(false);
    } else {
      setError(true);
      setState({...state, tableData: []});
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        overflowY: "hidden"
      }}
    >
      <Header />
      <div style={{ marginTop: 65 }} className={styles.buttonConteiner}>
        <NumberFormat
          customInput={TextField}
          label="Valor Desejado"
          variant="outlined"
          size="small"
          
          onValueChange={handleInput}
          value={input}

          error={error}
          fixedDecimalScale={2}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$"
          helperText="Apenas valores entre 300 e 10.000"
        />
        <Button
          onClick={onClickCond}
          variant="contained"
          size="medium"
          color="primary"
          className={styles.button}
        >
          Calcular
        </Button>
      </div>
      {tableData.length > 0 ? (

        <TableContainer
        component={Paper}
        className={styles.table}
        style={{ marginTop: 20 }}
        >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "#228A95",
                  background: "#F8F8F8",
                  fontWeight: "bold",
                  fontSize: 24
                }}
                align="center"
                colSpan={5}
                >
                Tabela Padrão
              </TableCell>
            </TableRow>
            <TableRow
              style={{
                background: "#F8F8F8",
                fontWeight: "bold",
                fontSize: 24
              }}
              >
              <TableCell className={styles.rowHead}>Parcelas</TableCell>
              <TableCell className={styles.rowHead}>Juros da Parcela</TableCell>
              <TableCell className={styles.rowHead}>Valor Parcela</TableCell>
              <TableCell className={styles.rowHead}>Valor Total</TableCell>
              <TableCell className={styles.rowHead}>
                Comissão Parceiro
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(data => (
              <TableRow
              key={data.id}
              onClick={() => confirm(data)}
              className={clsx({
                [styles.row]: true,
                [styles.selectedRow]: state.clickedTableRow.id === data.id
              })}
              >
                <TableCell>{data.installments}</TableCell>
                <TableCell>{data.installmentInterest} % </TableCell>
                <TableCell>R$ {data.installmentValue}</TableCell>
                <TableCell>R$ {data.fullValue}</TableCell>
                <TableCell>R$ {data.comission}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        ) : (
          <div>
            <h2 style={{color: "#228A95", fontFamily: "sans-serif"}}>Sem informações</h2>
          </div>
        )}
      {state.showBar && (
        <div className={styles.statusBar}>
          <p style={{ marginRight: 10 }}>Nome: Tabela Padrão</p>
          <p style={{ marginRight: 10 }}>
            Parcelas: {state.clickedTableRow.installments}
          </p>
          <p style={{ marginRight: 10 }}>
            Valor da parcela: R${state.clickedTableRow.installmentValue}
          </p>
          <Button
            component={Link}
            to="/pagamento"
            variant="contained"
            size="medium"
            color="primary"
            className={styles.button}
            style={{ marginTop: 30 }}
          >
            Avançar
          </Button>
        </div>
      )}
    </div>
  );
}

export default Borrow;
