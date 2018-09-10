var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
kittens.push(name);
}
  
function destructivelyPrependKitten(name) {
kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
kittens.pop();
  }

function destructivelyRemoveFirstKitten() {
kittens.shift();
}

function appendKitten(name) {
return [name,...kittens];
}

function prependKitten(name) {
return [name,...kittens];  
}

function removeLastKitten() {

}

function removeFirstKitten() {
return kittens.slice(1);
}