const name = "bharath"
const count = 50

// old version
console.log(name + count + "gs");

// new and standard method  ***String interpulation
console.log(`Hello this is ${name} and my age is ${count}` );

const game = new String("BGMI")
console.log(game);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.slice(0,4));
console.log(game.slice(-4,2))
console.log(game.bold());

console.log(game.constructor());
console.log(game.blink());



