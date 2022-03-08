const squaress = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-lefts')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTimes = 60
let timerIds = null

function randomSquare() {
  squaress.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squaress[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squaress.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerIds = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTimes--
 timeLeft.textContent = currentTimes

 if (currentTimes == 0) {
   clearInterval(countDownTimerIds)
   clearInterval(timerIds)
   alert('GAME OVER! Your final score is ' + result)
 }

}

