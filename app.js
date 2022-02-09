const startBtn = document.querySelector('#start')
// добавил цвета
const colors = ['#e0b90', '#ebcb3f', '#89da0', '#0fb46f', '#0fa9b4', '#4a23a5', '#b611a8', '#97165' ]
const screen = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screen[0].classList.add('up')
})

timeList.addEventListener('click', (event) => 
{
if (event.target.classList.contains('time-btn')) {
time = parseInt(event.target.getAttribute('data-time'))
screen[1].classList.add('up')
startGame()
}
})

board.addEventListener('click', event => {
   if (event.target.classList.contains('circle')){
       score++
      event.target.remove()
      creatRandomCircle()
   }
})

function startGame() {
   setInterval(decreaseTime, 1000)
   creatRandomCircle()
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      finishGame()
   } else {
      let current = --time
      if (current < 10) {
       current = `0${current}`
    }
      setTime(current)
   }
       }

    function setTime(value) {
      timeEl.innerHTML = `00:${value}`
    }
    function finishGame() {
       timeEl.parentNode.classList.add('hide')
      board.innerHTML = `<h3> Вас счёт: <span class = 'primary'> ${score}</span></h3>`
    }

    function creatRandomCircle() {
         const circle = document.createElement('div')
         const size = getRandomNumber(10,60)
         const {width, height} = board.getBoundingClientRect()
         circle.classList.add('circle')
         const x = getRandomNumber(0, width - size)
         const y = getRandomNumber(0, height - size)
         circle.classList.add('circle')
         circle.style.width = `${size}px`
         circle.style.height = `${size}px`
         circle.style.top = `${y}px`
         circle.style.left = `${x}px`
         // добавил сюда генерацию цвета кружка
         const colors = getRandomColor()  
         circle.style.background = colors  
         
         board.append(circle)

    }
    function getRandomNumber(min,max) {
        return  Math.round(Math.random() * (max - min) + min)

    }
     // функция генерации цвета. 
    function getRandomColor() {
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
   }

