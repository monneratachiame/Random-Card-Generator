/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const suits = [
  { name: "diamond", symbol: "♦" },
  { name: "heart", symbol: "♥" },
  { name: "spade", symbol: "♠" },
  { name: "club", symbol: "♣" }
];
const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let card = document.querySelector(".card");
let cardSpans = document.querySelectorAll(".card>span");
let number = cardSpans[1];
let upperSymbol = cardSpans[0];
let lowerSymbol = cardSpans[2];
let currentSuitName = "";
console.log(number);

const width = document.querySelector("#width");
const height = document.querySelector("#height");

const genRandomNum = array => {
  return Math.floor(Math.random() * array.length);
};

const generateRandomCard = () => {
  let suit = suits[genRandomNum(suits)];
  if (currentSuitName) {
    card.classList.remove(currentSuitName);
  }
  currentSuitName = suit.name;
  card.classList.add(currentSuitName);
  number.innerHTML = numbers[genRandomNum(numbers)];
  upperSymbol.innerHTML = suit.symbol;
  lowerSymbol.innerHTML = suit.symbol;
};

const changeDim = dim => {
  if (dim === "h") {
    if (height.value) {
      document.documentElement.style.setProperty(
        "--cardHeight",
        `${parseInt(height.value)}px`
      );
    }
  } else if (dim === "w") {
    if (width.value) {
      document.documentElement.style.setProperty(
        "--cardWidth",
        `${parseInt(width.value)}px`
      );
    }
  }
};

window.onload = generateRandomCard;
window.setInterval(generateRandomCard, 10000);
window.generate = generateRandomCard;
window.changeDim = changeDim;
