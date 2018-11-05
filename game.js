const MAX_MODS = 2;

let bird = { // target
  name: 'Dodger Duck',
  health: 100,
  hits: 0,
  items: []
}
let rain = { name: 'rain', modifier: 0.1, bool: false, description: 'Reduce velocity 10%' }
let wind = { name: 'wind', modifier: 0.25, bool: false, description: 'Reduce projectile velocity by 25%' }
let food = { name: 'fish', modifier: -0.25, bool: false, description: 'Make Dodger stronger' }
let evade = false;

let items = { rain, wind, food, evade }

function changeWind() {
  wind.bool = !wind.bool; // toggle wind
  if (bird.items.length < MAX_MODS) {
    bird.items.push(wind);
  } else {
    bird.items.shift();
    bird.items.push(wind);
  }
}
function changeRain() {
  rain.bool = !rain.bool; // toggle wind
  if (bird.items.length < MAX_MODS) {
    bird.items.push(rain);
  } else {
    bird.items.shift();
    bird.items.push(rain);
  }
}
function feedDuck() {
  food.bool = !food.bool; // toggle wind
  if (bird.items.length < MAX_MODS) {
    bird.items.push(food);
  } else {
    bird.items.shift();
    bird.items.push(food);
  }

}
function shoot(damage) {
  bird.health -= damage * addMods();
  document.getElementById('pow').className = ''; //removes hide-element class
  setTimeout(() => {
    document.getElementById('pow').className = "hide-element"
  }, 100);
  if (bird.health < 0) {
    bird.health = 0;
  }
  bird.hits++;
  update();
}
function drawPow() {
  document.getElementById('')
}
function healBird() {
  bird.health += 3;
  if (bird.health > 100)
    bird.health = 100;
  update();
}
function addMods() {
  let sum = 1;
  for (let i = 0; i < bird.items.length; i++) {
    let current = bird.items[i].modifier;
    sum += current;
  }
  return sum;
}
function update() {
  document.getElementById('health-id').innerText = bird.health.toString();
  document.getElementById('hits-id').innerText = bird.hits.toString();
  document.getElementById('duck-health-bar').style.width = bird.health + '%';
}
function resetGame() {
  bird.health = 100;
  bird.hits = 0;
  bird.items = [];
  update();
}

update();