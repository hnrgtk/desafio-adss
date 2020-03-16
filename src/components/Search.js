import React from "react";
import Card from "./Card";

const Search = props => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  };
  return (
    <div style={style}>
      <input type="text" value={props.query} onChange={props.search} />
      <button type="submit" onClick={props.fetch}>
        Buscar
      </button>
      {props.result != "" ? <Card result={props.result} /> : null}
    </div>
  );
};

export default Search;
