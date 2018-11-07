
//Underscores are for Java this should be maxMods
const MAX_MODS = 2;

let bird = { // target
  name: 'Dodger Duck',
  health: 100,
  hits: 0,
  items: [],
  // attacks: {
  //   slingshot: 1,
  //   blowgun: 5,
  //   crossbow: 10
  // }
}
//Now that you know how to, these would be good as classes

let rain = { name: 'rain', modifier: 0.1, bool: false, description: 'Reduce velocity 10%' }
let wind = { name: 'wind', modifier: 0.25, bool: false, description: 'Reduce projectile velocity by 25%' }
let food = { name: 'fish', modifier: -0.25, bool: false, description: 'Make Dodger stronger' }
let items = { rain, wind, food }

/*
let items = {
  rain: new Item(...),
  wind: new Item(...)
}
*/


//You can consolidate the next three functions into one, and you can simplify the function just a bit with a change of logic on the if, when you are full on items, pop one off first, as you will always add one
/*
take in a string of the type to affect ('rain', 'wind', 'food')
function applyMod(type){
  if (bird.items.length == MAX_MODS) {
    bird.items.shift();
  }
  bird.items.push(items[type]);
  }
}

*/
function changeWind() {
  //bool never seems to be used for anything?
  if (bird.items.length < MAX_MODS) {
    bird.items.push(wind);
  } else {
    bird.items.shift();
    bird.items.push(wind);
  }
}
function changeRain() {
  if (bird.items.length < MAX_MODS) {
    bird.items.push(rain);
  } else {
    bird.items.shift();
    bird.items.push(rain);
  }
}
function feedDuck() {
  if (bird.items.length < MAX_MODS) {
    bird.items.push(food);
  } else {
    bird.items.shift();
    bird.items.push(food);
  }

}
//taking in some user applied damage is dangerous as they can pass whatever value they want and the function just accepts it
// it is safer to use an object see line 12 for modifications to make this function work

//change damage to damageType, and in your HTML you can change it to the string of the attack type
function shoot(damage) {
  //this line becomes
  //bird.health -= bird.attacks[damageType] * addMods()
  bird.health -= damage * addMods();
  document.getElementById('bang').className = ''; //removes hide-element class
  setTimeout(() => {
    document.getElementById('bang').className = "hide-element"
  }, 100);
  if (bird.health < 0) { // Health cannot be negative
    bird.health = 0;
  }
  bird.hits++;
  update();
}

//I think this funciton is not doing anything?
function drawbang() {
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