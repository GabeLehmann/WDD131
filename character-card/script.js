const character = {
  name: "Computer Creep",
  class: "of 98'",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } else {
      alert('Computer Creep Shut Down!');
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

function updateCard() {
  document.querySelector('.image').src = character.image;
  document.querySelector('.image').alt = character.name;
  document.querySelector('.name').textContent = character.name;
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
}

document.getElementById('attacked').addEventListener('click', () => {
  character.attacked();
  updateCard();
  document.getElementById('log').textContent = `${character.name} was attacked remotely!`;
});

document.getElementById('levelup').addEventListener('click', () => {
  character.levelUp();
  updateCard();
  document.getElementById('log').textContent = `${character.name} installed more RAM!`;
});

updateCard();