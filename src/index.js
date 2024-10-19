// index.js
import "./styles.css";
import { greeting } from "./anotherFile.js";
console.log(greeting);

let content = document.querySelector("#content");
let heading = document.createElement("h1");
let description = document.createElement("p");
let openingHours = document.createElement("div");

heading.classList.add("heading");
description.classList.add("description");
openingHours.classList.add("openingHours");

heading.textContent = "Aileen's Breakfast Place";
description.textContent="Soak up the sea views and enjoy a selection of breakfast treats at Aileen's Breakfast Place. We offer a number of different Filipino breakfast specialties, including serveral types of glutenous rice dishes served with local cocoa. Sit down and enjoy a hearty local breakfast to start your day off right! Tops Sarap!";

let openingHoursTitle = document.createElement("h2");
openingHoursTitle.textContent = "Hours";
let monday = document.createElement("p");

openingHours.appendChild(openingHoursTitle);
content.appendChild(heading);
content.appendChild(description);
content.appendChild(openingHours);