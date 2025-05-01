// for of

// it is used to fetch the array of obejcts
// [{}, {}, {}]

const num = [1,2,3,4,5,6]
for (const element of num) {
  // console.log(element);
}

const greetings = "Hello World"
for (const greet of greetings) {
  // console.log(greet);
  
}


// Map

const map = new Map()
map.set("IN", "India")
map.set('USA', "United States of America")
map.set('Ban', "Bangladesh")

// console.log(map);

for (const [key, values] of map) {
  // console.log(key, values);
  
}


const games = {
  game1 : 'PUBG',
  game2 : 'BGMI',
  game3 : 'Call Of Duty'
}

for (const game of games) {
  console.log(game);
  
}

