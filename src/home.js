import { createElementWithClass } from "./utils";


export function loadHomeContent(){
let content = document.querySelector("#content");

//clear html
content.innerHTML = "";


// Create elements
let heading = createElementWithClass("h1", "heading", "Aileen's Rice is Life Breakfast");
let description = createElementWithClass("p", "description", "Soak up the sea views and enjoy a selection of breakfast treats at Aileen's Breakfast Place. We offer a number of different Filipino breakfast specialties, including several types of glutenous rice dishes served with local cocoa. Sit down and enjoy a hearty local breakfast to start your day off right! Tops Sarap!");

let openingHoursContainer = createElementWithClass("div", "openingHoursContainer");
let locationContainer = createElementWithClass("div", "locationContainer")

// Create elements for opening hours
let openingHoursHeading = createElementWithClass("h2", "subHeading", "Hours");
let times = createElementWithClass("div", "openingHours", "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm<br> Wednesday: 6am - 6pm<br> Thursday: 6am - 6pm<br> Friday: 6am - 6pm<br> Saturday: 8am - 8pm");


// Append opening hours elements
openingHoursContainer.appendChild(openingHoursHeading);
openingHoursContainer.appendChild(times);

//Create elements for location
let locationHeading = createElementWithClass("h2", "subHeading", "Location");
let location = createElementWithClass("div", "location", "123 Beach View, Dauin, The Philippines")

//append location elements
locationContainer.appendChild(locationHeading);
locationContainer.appendChild(location);

// Append everything to the content container
content.appendChild(heading);
content.appendChild(description);
content.appendChild(openingHoursContainer);
content.appendChild(locationContainer);
}
