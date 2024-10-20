// index.js
import "./styles.css";
import { greeting } from "./anotherFile.js";
console.log(greeting);

let content = document.querySelector("#content");

// Helper function to create an element with classes and text content
function createElementWithClass(tag, className, innerHTML = "") {
  let element = document.createElement(tag);
  element.classList.add(className);
  element.innerHTML = innerHTML;
  return element;
}

// Create elements
let heading = createElementWithClass("h1", "heading", "Aileen's Breakfast Place");
let description = createElementWithClass("p", "description", "Soak up the sea views and enjoy a selection of breakfast treats at Aileen's Breakfast Place. We offer a number of different Filipino breakfast specialties, including several types of glutenous rice dishes served with local cocoa. Sit down and enjoy a hearty local breakfast to start your day off right! Tops Sarap!");
let openingHours = createElementWithClass("div", "openingHours");

// Creating nested elements for opening hours
let openingHoursTitle = createElementWithClass("h2", "openingHoursTitle", "Hours");
let times = createElementWithClass("div", "times", "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm<br> Wednesday: 6am - 6pm<br> Thursday: 6am - 6pm<br> Friday: 6am - 6pm<br> Saturday: 8am - 8pm");


// Append nested elements
openingHours.appendChild(openingHoursTitle);
openingHours.appendChild(times);

// Append everything to the content container
content.appendChild(heading);
content.appendChild(description);
content.appendChild(openingHours);
