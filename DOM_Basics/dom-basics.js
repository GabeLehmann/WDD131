//Step 1
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//Step 2
const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Random image from picsum");
document.body.appendChild(newImg);

//Step 3
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//Step 4
const newSection = document.createElement("section");

const sectionHeading = document.createElement("h2");
sectionHeading.innerText = "DOM Basics";

const sectionParagraph = document.createElement("p");
sectionParagraph.innerText = "This was added through Javascript";

newSection.appendChild(sectionHeading);
newSection.appendChild(sectionParagraph);
document.body.appendChild(newSection);
