// index.js
import "./styles.css";
import { loadHomeContent } from "./home.js";    
import { loadMenuContent } from "./menu.js";

loadHomeContent();

let homebutton = document.getElementById("homeButton");
let menuButton =  document.getElementById("menuButton");


homebutton.addEventListener("click", loadHomeContent);
menuButton.addEventListener("click", loadMenuContent);
