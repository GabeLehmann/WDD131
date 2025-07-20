//Mobile Menu Toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu   = document.querySelector('nav ul');
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//Fun Facts Data
const facts     = [
  "I play piano.",
  "I love drawing.",
  "I'm studying computer science.",
  "I enjoy skating.",
  "I make music in my free time."
];

//DOM Refs
const factsList = document.getElementById("facts-list");
const shuffleBtn= document.getElementById("shuffle-btn");

//Render Facts
function renderFacts(arr) {
  factsList.innerHTML = "";
  arr.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    factsList.appendChild(li);
  });
}

//Shuffle Handler
shuffleBtn.addEventListener("click", () => {
  const shuffled = facts.slice().sort(() => Math.random() - 0.5);
  renderFacts(shuffled);
});

//Initial Facts
renderFacts(facts);