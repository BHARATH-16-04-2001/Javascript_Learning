const clock = document.getElementById('clock')

// example

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date()
  clock.innerText = date.toLocaleTimeString()
}, 1000)
