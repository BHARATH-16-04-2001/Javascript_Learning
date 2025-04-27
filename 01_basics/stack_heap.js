// 2 types of memory :-  1. Stack  (Premitive datatypes)  
//                              In this we receive the copy of the value

let name = "bharath"
let other = name

other = "Bharath GS"

console.log(other);
console.log(name);



//                       2. Heap  (Non primitive datatypes)
//                              In this we receive the reference or original 

let user1 = {
    email : "bharath@gmail.com",
    upi : "user@ybl"
}

let user2 = user1
console.log(user2);
user2.upi = "user2.ybl"

console.log(user1);
console.log(user2);
