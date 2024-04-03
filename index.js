const X_CLASS = 'x'
const CIRCLE_GLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const boardElements = document.getElementById('board')
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click',handleClick, {once: true})
})


//placeMark
//Check for Win
//Check for Draw
//Switch Turn

function handleClick(e) {
    const cell = e.target
    currentClass = circleTurn ? CIRCLE_GLASS : X_CLASS
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
    boardElements.classList.remove(CIRCLE_GLASS);
    if (circleTurn) {
        boardElements.classList.add(CIRCLE_GLASS)
    } else {
        boardElements.classList.add(CIRCLE_GLASS)
    }
}
