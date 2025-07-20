//Tracks Data
const tracks = [
  { title:"Fallen Down",       src:"music/Fallen Down Soft Piano.wav", genre:"Cover",  favorite:false },
  { title:"Emails",            src:"music/Emails.wav",                 genre:"Original", favorite:false },
  { title:"White Noise",       src:"music/White Noise.wav",            genre:"Original",    favorite:false },
  { title:"One‑Stop Cat Shop", src:"music/Buy Somethin' Will Ya!.wav", genre:"Original",       favorite:false },
  { title:"Step it Up",        src:"music/Step it Up.wav",             genre:"SUPAFUNK",       favorite:false },
  { title:"Techno Syndrome (Work in Progress)",   src:"music/Techno Syndrome.wav",        genre:"Cover", favorite:false },
  { title:"Humanity",          src:"music/Humanity.wav",               genre:"SUPAFUNK",  favorite:false }
];

//DOM Refs
const tracksList     = document.getElementById("tracks-list");
const genreSelect    = document.getElementById("genre-select");
const alphaSelect    = document.getElementById("alpha-select");
const favSelect      = document.getElementById("fav-select");
const darkToggle     = document.getElementById("dark-mode-toggle");
const toggleBtn      = document.querySelector('.menu-toggle');
const navMenu        = document.querySelector('nav ul');

//Mobile Menu Toggle
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//Dark Mode Toggle
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkToggle.checked);
});

//Populate Genre Dropdown
[...new Set(tracks.map(t => t.genre.toLowerCase()))].forEach(g => {
  const o = document.createElement("option");
  o.value = g;
  o.textContent = g[0].toUpperCase() + g.slice(1);
  genreSelect.append(o);
});

//Render Function
function render() {
  // 1) by genre
  let list = genreSelect.value === "all"
    ? [...tracks]
    : tracks.filter(t => t.genre.toLowerCase() === genreSelect.value);

  // 2) by favorite
  if (favSelect.value === "fav") {
    list = list.filter(t => t.favorite);
  }

  // 3) alphabetical
  if (alphaSelect.value !== "none") {
    list.sort((a, b) => {
      const cmp = a.title.localeCompare(b.title);
      return alphaSelect.value === "asc" ? cmp : -cmp;
    });
  }

  // 4) inject cards
  tracksList.innerHTML = "";
  list.forEach((t, idx) => {
    const div = document.createElement("div");
    div.className = "track" + (t.favorite ? " favorited" : "");
    div.innerHTML = `
      <p>${t.title} – <em>${t.genre}</em></p>
      <audio controls src="${t.src}"></audio>
      <button class="favorite-btn" data-idx="${idx}">
        ${t.favorite ? "★" : "☆"} Favorite
      </button>
    `;
    tracksList.append(div);
  });

  // 5) favorite button handlers
  document.querySelectorAll(".favorite-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const idx = Number(e.currentTarget.dataset.idx);
      const track = list[idx];
      const globalIdx = tracks.findIndex(tr => tr.title === track.title);
      tracks[globalIdx].favorite = !tracks[globalIdx].favorite;
      render();
    });
  });
}

//Listeners & Initial Draw
[genreSelect, alphaSelect, favSelect].forEach(el => {
  el.addEventListener("change", render);
});
render();