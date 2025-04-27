function calculateCartPrice(...num1) {
   let sum = 0
   for (let i = 0; i < num1.length; i++) {
     sum +=  num1[i];
   }
   return sum
}

console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
    name : "Bharath",
    price : 555
}

function handleObject(obj) {
    console.log(`Username is ${obj.name} and salary is ${obj.price}`);
}

// handleObject(user)
//  o/p  :- Username is Bharath and salary is 555

handleObject({name: "Sumanth", price: 33})


const arr = [100, 200, 300, 400]

function myArray(arr){
    let sum = 0
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index]
    }
    return sum
}

console.log(myArray(arr));
