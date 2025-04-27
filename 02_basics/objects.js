//singlton



//Object Literals

const mySym = Symbol("Symbol")

const User = {
    name : "bharath",
    "full name" : "Bharath GS",
    age : 24,
    location : "Davangere",
    email : "bharath@gmail.com",
    phone : [687563455, 263378847],
    mySym : "MySymbol", // normal key value
    [mySym] : "Original Symbol",
    greeting : function(){
        console.log(`Hello ${this.name} Welcome...`);
        
    }
}

console.log(User.age);
console.log(User["email"]);
console.log(User["full name"]);
console.log(User.phone[1]);
console.log(User.mySym); // It is not working as Symbol
console.log(User[mySym]); // This is Symbol
console.log(typeof mySym);

console.log(User.greeting);

console.log(User.greeting());



// User.email = "bharath.g.s@gmail.com"
// Object.freeze(User)
// console.log(User.email);

// User.email = "bharath@gmail.com"
// console.log(User.email);



