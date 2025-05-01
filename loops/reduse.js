// const arr = [1,2,3,4,5]

// let val = arr.reduce((acc, curr) => {
//   console.log(`acc ${acc} and curr ${curr}`);
  
//  return acc + curr
// }, 2)

// console.log(val);



const shoppingCart = [
  {
    itemName : "javascript",
    price : 2999
  },
  {
    itemName : "Python",
    price : 4000
  },
  {
    itemName : "Java",
    price : 500
  }
]

const Total_Price = shoppingCart.reduce( (acc, curr)=>  acc + curr.price, 0 )
console.log(Total_Price);
