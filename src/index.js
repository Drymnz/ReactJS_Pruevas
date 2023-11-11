
import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import Card from './Components/Card.js'
import { Style } from "bootstrap/dist/css/bootstrap.min.css";
/* import { Style_one } from "./Components/styles/Card.css"; */

const rootElement =document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Card
      title="Deporte"
      description="Otro deporte"
      img=""
      letColor="#A74CF2"
      reghtColor="#617BFB"
    />
  </React.StrictMode>
);

/* const user = {
  firtName:'Benjamin',
  lastName:'Perez',
  avatar:'http'
}

function getName(user)
{
  return user.firtName + ' ' +user.lastName
}

function getGreeting(user) 
{
  if (user) {
    return <h1>Hola {user.firtName}</h1>
  } else {
    return <h1>Quien sos ?</h1>
  }  
}

const nombre = 'Benjamin'
/* const element = <h1>Hola mundo {nombre}, {getName(user)} </h1>; */
/* const element = <div>{getGreeting(user)}</div> */
/* const element = <div>{getGreeting()}</div>

const conteiner = document.getElementById('root');

//ReactDOM.render(__que,__donde)
ReactDOM.render(element,conteiner);  */


/* metodo de js
const element = document.createElement('h1');

element.innerText = 'hola mundo';

const conteiner = document.getElementById('root');

conteiner.appendChild(element); 
*/
