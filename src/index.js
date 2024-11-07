// index.js
import "./styles.css";
import { greeting } from "./anotherFile.js";
console.log(greeting);

import { loadHomeContent } from "./home.js";    

loadHomeContent();

// Load the home content by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadHomeContent();
  });