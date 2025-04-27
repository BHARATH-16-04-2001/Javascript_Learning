let score = "33"

console.log(typeof score)       // number
console.log(typeof(score))      // number

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))  

// Notes

// 33 => 33
// "33" => 33
// "33qbc" => NaN
// true => 1
// false => 0
// undefined => NAN
// null => 0

let isLogIn = 1

let boolenLogIn = Boolean(isLogIn)
console.log(boolenLogIn)

// note for Boolean

// let iLogIn = 1  =>  true
// let iLogIn = 0  => false
// let iLogIn = "" => false
// let iLogIn = "bhara" => true


let number = 33

let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof(stringNumber))