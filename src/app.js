/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let body = document.querySelector("body");
  console.log(body);
  body.classList.add("bg", "bg-success");
  let nuevoDiv = document.createElement("Div");
  let app = document.querySelector("#app");
  nuevoDiv.classList.add("container", "bg", "bg-light");
};
