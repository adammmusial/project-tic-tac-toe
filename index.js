class TicTacToe {
    constructor() {
        this.X_CLASS = 'x'
        this.CIRCLE_CLASS = 'circle'
        this.cellElements = document.querySelectorAll('[data-cell]')
        this.boardElements = document.getElementById('board')
        this.winningMessageTextElement = document.querySelector('[data-winning-message-text]')
        this.winningMessageElement = document.getElementById('winningMessage')
        this.restartButton = document.getElementById('restartButton')
        this.WINNING_COMBINATIONS = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        this.circleTurn = false;
        this.handleClick = this.handleClick.bind(this);
        this.setBoardHoverClass = this.setBoardHoverClass.bind(this);
        this.init()
        }
    
        init() {
            this.startGame = this.startGame.bind(this)
            this.startGame()
            this.restartButton.addEventListener('click', this.startGame)
        }
        
        startGame(){
            this.circleTurn = false
            
            this.cellElements.forEach(cell => {
                cell.classList.remove(this.X_CLASS)
                cell.classList.remove(this.CIRCLE_CLASS)
                cell.removeEventListener('click',this.handleClick)
                cell.addEventListener('click',this.handleClick, {once: true})
            })
            this.setBoardHoverClass = this.setBoardHoverClass.bind(this);
            this.setBoardHoverClass()
            this.winningMessageElement.classList.remove('show')
        }
        
        handleClick(e) {
            const cell = e.target
            const currentClass = this.circleTurn ? this.CIRCLE_CLASS : this.X_CLASS
            this.placeMark(cell, currentClass)
            if (this.checkWin(currentClass)) {
                this.endGame(false)

            } else if (this.isDraw()) {
                this.endGame(true)
            } else {
                this.swapTurns()
                this.setBoardHoverClass()
            }
        
        }
        
        isDraw() {
            return [...this.cellElements].every(cell => {
                return cell.classList.contains(this.X_CLASS) || 
                cell.classList.contains(this.CIRCLE_CLASS)
            })
        }
        
        endGame(draw){
        
            if (draw) {
                this.winningMessageTextElement.innerText = `Draw!`
            } else {
                this.winningMessageTextElement.innerText = `${this.circleTurn ? "0's" : "X's"} Wins!`
            }
        
            this.winningMessageElement.classList.add('show')
        }
        
        
        placeMark(cell,currentClass){
            cell.classList.add(currentClass)
        }
        
        swapTurns(){
            this.circleTurn = !this.circleTurn
        } 
        
        setBoardHoverClass(){
            this.boardElements.classList.remove(this.X_CLASS);
            this.boardElements.classList.remove(this.CIRCLE_CLASS);
            if (this.circleTurn) {
                this.boardElements.classList.add(this.CIRCLE_CLASS)
            } else {
                this.boardElements.classList.add(this.X_CLASS)
            }
        }
        
        checkWin(currentClass){
            return this.WINNING_COMBINATIONS.some(combination => {
                return combination.every(index => {
                    return this.cellElements[index].classList.contains(currentClass);
                });
            });
        }
    }

    const ticTacToe = new TicTacToe()

