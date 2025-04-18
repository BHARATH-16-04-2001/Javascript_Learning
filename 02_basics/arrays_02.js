const bike = ['Duke', 'KTM', 'R15', 'Yamaha']

const cars = ['Honda', 'Audi', 'Mahindra', 'BMW']

// bike.push(cars);
const a = bike.concat(cars)
// console.log(a);

const spread = [...bike, ...cars]
// console.log(spread);

let arr = [1,2,3,4,[5,6,7] ,8,9, [10,20,[30]]]

let ans = arr.flat(2);
// console.log(ans);


console.log(Array.isArray("bharath"));
console.log(Array.from("Bharath"));

let s = 10
let s1 = 20
let s2 = 30

console.log(Array.of(s,s1,s2));


