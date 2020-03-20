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
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#228A95",
    color: "white",
    fontFamily: "sans-serif",
  },
  button: {
    background: "#F29C49",
    margin: theme.spacing(1),
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
    value: 0,
    tableData: [],
    showBar: false,
    clickedTableRow: {},
  });

  const styles = useStyles();

  const { value, tableData } = state;

  async function sendToApi() {
    const { data } = await api.get("/rateTable/1");
    setState(oldState => ({ ...oldState, tableData: data.installments }));
  }

  const confirm = rowData => {
    setState(oldState => ({
      ...oldState,
      showBar: true,
      clickedTableRow: rowData,
    }));
    onClickRow({ clickedRow: rowData, value });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Header />
      <div style={{ marginTop: 45 }} className={styles.buttonConteiner}>
        <TextField label="Valor Desejado" variant="outlined" size="small"/>
        <Button
          onClick={sendToApi}
          variant="contained"
          size="medium"
          color="primary"
          className={styles.button}
        >
          Calcular
        </Button>
      </div>
      <TableContainer component={Paper} className={styles.table}>
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
      {state.showBar && (
        <div className={styles.statusBar}>
          {state.clickedTableRow.fullValue}
          <Button
            component={Link}
            to="/pagamento"
            variant="contained"
            size="medium"
            color="primary"
            className={styles.button}
          >
            Avançar
          </Button>
        </div>
      )}
    </div>
  );
}

export default Borrow;
