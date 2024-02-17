/* eslint-disable */
import "bootstrap";
import "./style.css";

/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Davis from the console");
};
let generateExcuse = () => {
  let pronoun = ["The", "A"];
  let subject = ["teacher", "dog", "pig", "turtle", "flower", "truck"];
  let action = [
    "burned my",
    "stole my",
    "pooped on my",
    "laughed at my",
    "broke my"
  ];
  let possesion = ["homework", "foot", "shirt", "wallet", "phone"];
  let where = [
    "in my room",
    "at the theater",
    "in the store",
    "in my yard",
    "in the library",
    "at the rehab",
    "at the blood drive"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posessionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    possesion[posessionIndex] +
    " " +
    where[whereIndex]
  );
};
