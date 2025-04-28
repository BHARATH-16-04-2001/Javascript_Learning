const user = {
  name : "Bharath",
  price : 23,
  welcomeMessage : function(){
    console.log(`Hi ${this.name}, Welcome to website ...`);
    console.log(this);
    
  }
}

// console.log(user.welcomeMessage())
// user.name = "kiran"
// user.welcomeMessage()

// console.log(this);


// we cant use this in the function 

// function one(){
//   let user = "dvdv"
//   console.log(this.user);  // undefined
//   console.log(this)  // global object
// }



const one = function () {
  let user = "dvdv"
  console.log(this.user);  // undefined
  console.log(this)  // global object
}


// const one = () => {
//     let user = "dvdv"
//     console.log(this.user);  // undefined
//     console.log(this)  // {}
// }

// one()  

//====================  Arror function ============================

// const add = (num1, num2) => {
//   return num1 + num2
// }
// console.log(add(2,2));

// const sub = (num1, num2) => num1 - num2
// console.log(sub(6,3));


const a = () => ({name: "Bharath", age:24})

console.log(a());

