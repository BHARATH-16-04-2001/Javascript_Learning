// falsy values :-  false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy values :- "0", 'false', " ", [], {}, function(){}


// nullinsh coalescing operator (??) :  null undefined

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = 10 ?? undefined
val = null ?? undefined ?? 30


// console.log(val);


//------------------   Ternary operator ------------------------------------------------

// condition ? true : false 

const price = 100

price >=80 ? console.log("grater") : console.log("less");




