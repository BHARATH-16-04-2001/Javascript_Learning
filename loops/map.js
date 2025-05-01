const num = [1,2,3,4,5,6,7,8]

// let new_nums = num.map( (n)=> n * 10)
// console.log(new_nums);

// Chaining
let newNums = num
                  .map( (num) => num * 10)
                  .map((num) => num + 10)
                  .filter((num) => num > 50)
console.log(newNums);
