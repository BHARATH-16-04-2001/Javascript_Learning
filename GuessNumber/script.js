let random_num = Math.round(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const guessRem = document.querySelector('.lastResult')
const low = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let palyGame = true

if(palyGame){
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value)
    console.log(guess);
    validateGuess(guess)
  })  
}


// It will check the number is between 1 to 100 and postive number 
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter the Valid Number.')
  }
  else if(guess < 1){
    alert('Please enter the number Greater than 1')
  }
  else if(guess > 100){
    alert('Please enter the number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      dispalyGuess(guess)
      dispalyMessage(`Game Over. Random number was ${random_num}`)
      endGame()
    }else{
      dispalyGuess(guess)
      checkGuess(guess)

    }
  }

}

// It will check user Input with random number
function checkGuess(guess){
    if(guess === random_num){
      dispalyMessage(`You guessed it Right..!`)
      endGame()
    }else if(guess < random_num){
      dispalyMessage(`Number is Greater than your Number`)
    }else if(guess > random_num){
      dispalyMessage(`Number is less than Your Number`)
    }
}

// clean up function
function dispalyGuess(guess) {
  input.value = ''
  guessSlot.innerHTML += `${guess} , ` 
  numGuess ++
  guessRem.innerHTML = `${11 - numGuess}`
}


function dispalyMessage(message) {
  low.innerHTML = `<h2> ${message} </h2>`
}


function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
      random_num = Math.round(Math.random() * 100 + 1)
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML = ''
      guessRem.innerHTML = `${11 - numGuess}`
      input.removeAttribute('disabled')
      startOver.removeChild(p)
      palyGame = true
    })
}

function endGame() {
  input.value = ''
  input.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
  startOver.appendChild(p)
  palyGame = false
  newGame()
}