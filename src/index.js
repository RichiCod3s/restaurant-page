// index.js
import "./styles.css";
import { loadHomeContent } from "./home.js";    
import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact.js";

loadHomeContent();

let homebutton = document.getElementById("homeButton");
let menuButton =  document.getElementById("menuButton");
let contactButton = document.getElementById("contactButton");

homebutton.addEventListener("click", loadHomeContent);
menuButton.addEventListener("click", loadMenuContent);
contactButton.addEventListener("click", loadContactContent);