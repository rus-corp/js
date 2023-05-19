const numberGuess = Math.floor(Math.random() * 1000)

console.log("I guess", numberGuess)

const numberFromUser = Number(prompt("Input number: "))

console.log("You guess", numberFromUser)

if (isNaN(numberFromUser) || (numberFromUser > 999) || (numberFromUser <= 0)) {
    alert('Вы ввели не число')
} else if (numberFromUser > numberGuess) {
    alert('загаданное число меньше')    
} else {
    alert("Загаданное число больше")
}




