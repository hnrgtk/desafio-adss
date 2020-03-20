import React from "react";

const Header = () => {
  const header = {
    position: "absolute",
    top: 0,
    right: 0.5,
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#228A95",
    color: "white",
    fontFamily: "sans-serif"
  };

  return (
    <div style={header}>
      <h2>Credfica</h2>
    </div>
  );
};

export default Header;
