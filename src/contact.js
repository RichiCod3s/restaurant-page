
export function loadContactContent(){
    let content = document.querySelector("#content");

    content.innerHTML = "";



    // Helper function to create an element with classes and text content
    function createElementWithClass(tag, className, innerHTML = "") {
    let element = document.createElement(tag);
    element.classList.add(className);
    element.innerHTML = innerHTML;
    return element;
  }

    function createContactItem(name, role, number, email){
    let contactName = createElementWithClass("h3", "contactName", name);
    let contactRole = createElementWithClass("p","contactInfo", role);
    let contactNumber = createElementWithClass("p","contactInfo",number);
    let contactEmail = createElementWithClass("p","contactInfo", email);

    let contactItem = createElementWithClass("div", "contactItem");

    contactItem.append(contactName, contactRole, contactNumber, contactEmail);
    return contactItem;
  }


     let contactContainer = createElementWithClass("div", "contactContainer");
     
     // create contact items
    let contactHeading = createElementWithClass("h1", "heading", "Contact Us");

    let aileenContact = createContactItem("Aileen", "Owner", "1234467", "aileen@notarealemail.com");
    let aaronContact = createContactItem("Aaron", "Manager", "9876543", "aaron@notarealemail.com");
    let cynthiaContact = createContactItem("Cynthia", "Chef", "53334467", "cynthia@notarealemail.com");

    contactContainer.append(contactHeading,aileenContact,aaronContact,cynthiaContact);

    content.append(contactContainer);

  
} 