import React from "react";
import "./styles/Welcome.css";

const Welcome = ({ username }) => (
  <div className="container">
    <div className="Fitness-User-Info">
      <h1>Hola {username}</h1>
      <p>Bienvenido a las actividades de tu fitne</p>
    </div>
  </div>
);

/* function Welcome(props) {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>Hola {props.name}</h1>
        <p>Bienvenido a las actividades de tu fitne</p>
      </div>
    </div>
  );
}
 */
export default Welcome;
