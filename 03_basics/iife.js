//Immediate Invoked function expression (IFFE)

// named iife
(function chai(){
  console.log("Hi ....!");
  
}) ();  // semicolon is must to end the iife

// unnamed iife with no parameter
(()=>{
  console.log("Hello");
}) ();

// with parameter
((name) => {
  console.log(`hi this is ${name}..`);
  
}) ("bharath")