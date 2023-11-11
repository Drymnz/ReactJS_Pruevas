
/* metodo de js
const element = document.createElement('h1');

element.innerText = 'hola mundo';

const conteiner = document.getElementById('root');

conteiner.appendChild(element); 
*/

import React from "react";
import ReactDOM from 'react-dom'


const user = {
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
const element = <div>{getGreeting()}</div>

const conteiner = document.getElementById('root');

//ReactDOM.render(__que,__donde)
ReactDOM.render(element,conteiner); 