
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"

//elemento, atributo, children
//const element = React.createElement("h1", {}, "soy children")

const container = document.getElementById("app")

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
