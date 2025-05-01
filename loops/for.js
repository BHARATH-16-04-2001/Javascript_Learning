// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} th Table`);

//   for(let j=1; j <=10; j++){
//     console.log(i + " * " + j + " = " + i * j);
    
//   }
  
// }

const arr = ["Bharath", "sumanth", "kiran", "abhi"]

for(let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
  
}


// break and continue

// for (let i = 1; i < 10; i++) {

//   if (i == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`value is ${i}`);
   
// }


for (let i = 1; i < 10; i++) {

  if (i == 5) {
    console.log("Detected 5");
    continue
  }
  console.log(`value is ${i}`);
   
}
