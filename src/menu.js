export function loadMenuContent(){
    let content = document.querySelector("#content");

    content.innerHTML = "";
    
    // Helper function to create an element with classes and text content
function createElementWithClass(tag, className, innerHTML = "") {
    let element = document.createElement(tag);
    element.classList.add(className);
    element.innerHTML = innerHTML;
    return element;
  }

  function createMenuItem(title, description, price){
    let menuHeading = createElementWithClass("h3", "subHeading", title);
    let menuDescription = createElementWithClass("p", "menuDescription", description);
    let menuPrice = createElementWithClass("p", "menuPrice", price);
    let menuItem = createElementWithClass("div", "menuItem");

    menuItem.append(menuHeading, menuDescription, menuPrice);

    return menuItem;
  } 


  let breakfastContainer = createElementWithClass("div", "breakfastContainer");
  let heading = createElementWithClass("h1", "heading", "Menu");
  
  
  // create menu items
  let breakfastHeading = createElementWithClass("h2", "subHeading", "Breakfast");

  let foodMenuContainer = createElementWithClass("div", "foodMenuContainer");
  let casavaCake = createMenuItem("Casava Cake with Jackfruit Jam", "Indulge in a rich and chewy cassava cake, topped with sweet, tropical jackfruit jam. This Filipino favorite combines the unique texture of cassava with the luscious flavor of jackfruit, creating a dessert that’s both comforting and deliciously exotic", "₱100");
  let stickyRice = createMenuItem("Sticky Rice with Cocoa Sauce", "Experience a comforting Filipino classic: sticky rice cooked to perfection, drizzled with a rich and velvety cocoa sauce. This warm, hearty treat blends the satisfying texture of rice with the deep, chocolatey notes of local cocoa—a delightful way to start your day or enjoy a sweet afternoon break.", "₱80" )
  let glutenousRice = createMenuItem("Glutenous Rice with Cocoa Sauce", "Enjoy a traditional Filipino delicacy: soft, glutinous rice wrapped in aromatic banana leaves and served with a side of rich cocoa sauce. This delightful treat combines the earthy flavor of banana leaves with the sweetness of cocoa, making each bite a comforting, nostalgic experience.", " ₱70")
  let inutak = createMenuItem("Inutak","A beloved Filipino dessert, this rich, sweet treat is made from sticky rice, coconut milk, and sugar, delicately cooked to perfection. Topped with toasted coconut curds (latik), Inutak offers a soft, creamy texture and a sweet, comforting flavor, perfect for starting your day.", "₱40");
  
  let drinksMenuContainer = createElementWithClass("div", "drinksMenuContainer","");

  let drinksHeading = createElementWithClass("h2", "subHeading", "Drinks");
  let bukoJuice = createMenuItem("Buko Juice (Coconut Water)", "Refreshing, naturally sweet coconut water served chilled, a hydrating and tropical breakfast drink.", "₱40");
  let salabat = createMenuItem("Salabat (Ginger Tea)", "A warm, sweet-spicy drink made from fresh ginger and sugar, perfect for a comforting start to the day.", "₱30");
  let calamansi = createMenuItem("Calamansi Juice", "A refreshing citrus drink made from the tart and tangy calamansi fruit, typically mixed with sugar and water for a sweet, sour flavor.","₱30");
  let cocoa = createMenuItem("Hot Cocoa", "A rich and comforting drink made from melted cocoa and milk, perfect for warming up during cooler mornings.", "₱40");
 
  //append menu items
  foodMenuContainer.append(casavaCake, stickyRice, glutenousRice, inutak);
  drinksMenuContainer.append(bukoJuice, salabat, calamansi, cocoa);

  //append menu to container
  breakfastContainer.append(breakfastHeading,foodMenuContainer,drinksHeading, drinksMenuContainer);

// append elements to  content
content.appendChild(heading);
content.appendChild(breakfastContainer);

}