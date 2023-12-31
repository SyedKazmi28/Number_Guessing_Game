const randomNumber = parseInt(Math.random()*100+1)
// console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.preguesses')
const remaining = document.querySelector('.remain')
const lowOrHi = document.querySelector('.loworhi')

let prevGuess = []
let noOfGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
     if(isNaN(guess)){
        alert(`Enter a valid number`)
     }
     else if(guess < 1){
        alert(`Enter a number greater than 1`)  
     }
     else if(guess > 100){
        alert(`Enter a number less than 100`)    
     }
     else{
        prevGuess.push(guess)
        if(noOfGuess>10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){
     if(guess === randomNumber){
        displayMessage(`Congratulations!, you guessed it right`)
        endGame()
     }
     else if(guess>randomNumber){
        displayMessage(`Number is too high`)
     }
     else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    
     }
     
}

function displayGuess(guess){
    userInput.value = ' '
    guessSlot.innerHTML += `[${guess}]`
    noOfGuess++

    remaining.innerHTML = `${11 - noOfGuess}`

}

function displayMessage(message){
     lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
     userInput.value = ''
     userInput.setAttribute('disabled', '')
     submit.setAttribute('disabled','')

}





