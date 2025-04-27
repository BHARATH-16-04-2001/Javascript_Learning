const Id = 1234
let name = "Bharath"
let email = "bharath@gmail.com"
/*
prefer not to use var
beacause issue with block scope and functional scope
*/
var password = "1234"

let state;

city = "Banglore"

// id = 222  // not allowed to change bcs it is const

email = "bharath_gs@gmail.com"
password = "2222"
city = "Davangere"

console.log(name);
console.table([Id, name, email, password, city, state]);

