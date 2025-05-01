const coding = ['js','python', 'java', 'Ruby']

// coding.forEach(function (item){
//   console.log(item);
  
// })


// coding.forEach((item) => console.log(item))

// coding.forEach(printMe)

// function printMe(item){
//   // console.log(item);
  
// }

// coding.forEach((item, index, arr) => console.log(item, index, arr))



const myCoding = [
  {
    languageName : "Javascript",
    fileName :'js'
  },
  {
    languageName : "Python",
    fileName :'py'
  },
  {
    languageName : "Java",
    fileName :'java'
  }
]

myCoding.forEach( (code) => console.log(code.languageName));