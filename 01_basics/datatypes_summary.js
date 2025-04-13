// premitive datatypes

// 7 types :- String, Number, Boolean, null, undefined, Symbol, Bigint  

const score = 100
const scoreVal = 100.3

const isLogedIn = false
const outTemp = null

let userEmail;

const id = Symbol('123')
const id_2 = Symbol('123')

console.log(id==id_2);

const bigNumber = 23436443242354622n
console.log(typeof(bigNumber));




// Reference type (Non premitive data-type)

// Arrays, Objects, functions

const marks = [100, 93, 44, 76]

const person = {
    "name" : "Bharath",
    "age" : 34,
    "salary" : 600000
}

const myFun = function() {
    console.log("Hello World..");
    
}

console.log(myFun());
