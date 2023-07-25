/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const HandleBoton = e => {
  console.log("Me Clickeaste");
  location.reload();
  return;
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let body = document.querySelector("body");
  console.log(body);
  body.classList.add("bg", "bg-success");
  let nuevoDiv = document.createElement("Div");
  let app = document.querySelector("#app");
  nuevoDiv.classList.add("container", "bg", "bg-light", "rounded", "mx-5");
  nuevoDiv.innerHTML =
    '<div class="row symbol heading justify-content-start display-5 mt-5">Fila1</div><br/><div class="row number justify-content-center">Fila2</div><br/><div class="row symbol reverse justify-content-end display-5">Fila3</div><br/>';

  app.appendChild(nuevoDiv);

  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  /* console.log(
    "esto deberia dar el tercer elemento que es el 3: ",
    numeros[2],
    "La longuitud del arreglonumeros es: ",
    numeros.length
  ); */
  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  console.log("elemento aleatorio: ", numeros[numeroAleatorio]);

  let fila2 = document.querySelector(".number");
  fila2.innerHTML = `${numeros[numeroAleatorio]}`;

  let suit = [
    { suit: "♥", color: "red" },
    { suit: "♦", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" }
  ];

  let suitAleatoria = Math.floor(Math.random() * suit.length);
  let fila1 = document.querySelector(".heading");
  fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  let fila3 = document.querySelector(".reverse");
  fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  fila1.style.color = suit[suitAleatoria]["color"];
  fila3.style.color = suit[suitAleatoria]["color"];

  fila2.classList.add("justity-content-center", "display-5");

  let boton = document.createElement("button");
  let textoBoton = document.createTextNode("click");
  boton.appendChild(textoBoton);

  boton.addEventListener("click", e => HandleBoton(e));

  body.appendChild(boton);
};
