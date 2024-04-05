const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const boardElements = document.getElementById('board')
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let circleTurn

//Check for Win
//Check for Draw
//Switch Turn

startGame()

function startGame(){
    circleTurn = false
    
    cellElements.forEach(cell => {
        cell.addEventListener('click',handleClick, {once: true})
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark (cell, currentClass)
    swapTurns()
    setBoardHoverClass()
}


function placeMark (cell,currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
} 

function setBoardHoverClass(){
    boardElements.classList.remove(X_CLASS);
    boardElements.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        boardElements.classList.add(CIRCLE_CLASS)
    } else {
        boardElements.classList.add(X_CLASS)
    }
}
