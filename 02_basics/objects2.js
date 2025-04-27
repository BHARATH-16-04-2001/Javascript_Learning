//Singleton
// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = 111
tinderUser.name = "Bharath"
tinderUser.age = 23


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))


// console.log(tinderUser);

const user = {
    email : "demo@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Bharath",
            lastname : "G S"
        }
    }
}
// console.log(user.fullname?.userfullname);   // optional Chaining


const obj1 = { 1:"a", 2: "b" }
const obj2 = { 3:"c", 4: "d" }

// const obj = {obj1, obj2}
// console.log(obj);    // this will return the object inside other object

// const obj = Object.assign({}, obj1, obj2)
// console.log(obj);
// console.log(obj1);


const obj = {...obj1, ...obj2}
console.log(obj);


console.log(obj1 === obj);


