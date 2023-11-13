import React from "react";
import "./styles/Welcome.css";

function Welcome(props) {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>Hola {props.name}</h1>
        <p>Parafo</p>
      </div>
    </div>
  );
}

export default Welcome;
