const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
// Create a new section element
const newSection = document.createElement("section");

// Add an h2 element with the content "DOM Basics"
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);

// Add a paragraph p that says: "This was added through Javascript"
const newP = document.createElement("p");
newP.innerText = "This was added through JavaScript";
newSection.appendChild(newP);

// Add your section to the body
document.body.appendChild(newSection);

