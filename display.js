import {Game} from "./game.js"

export class Display{
  constructor() {
    this.game = new Game()
    this.init()
  }

  init() {
    this.turnH3 = document.getElementById("turn-text")
    this.pointsH3 = document.getElementById("points")
    this.levelH3 = document.getElementById("level")
    this.sequenceH3 = document.getElementById("sequence")
    this.colorBtns = document.querySelectorAll("#circle > div")
    console.log("colorBtn", this.colorBtns)
    this.resetButton = document.getElementById("reset")
    this.resetButton.addEventListener("click", () => {
      this.reset()
    })
    this.startButton = document.getElementById("start")
    this.startButton.addEventListener("click", () => {
      this.playSequence()
    })
    this.updateDisplay()
    this.colorBtns.forEach((colorBtn,index)=>{
      colorBtn.addEventListener('click',()=>{
        const isLastElementGood = this.game.addToUserSequenceAndCompare(index)
        if(!isLastElementGood){
            this.reset()
        }else{
            this.turnAfter()
        }

        
      })
    })
  }

  playSequence() {
    this.turnH3.innerText = "Au tour de l'ordianteur"
    let computerSequenceIndex = 0
    const intervalId = setInterval(() => {
      const colorBtnIndex = this.game.computerSequence[computerSequenceIndex]
      this.turnButtonOn(colorBtnIndex)
      computerSequenceIndex++
      if (computerSequenceIndex >= this.game.computerSequence.length) {
        clearInterval(intervalId) // arrêter l'interval quand l'opacité atteint 1
        // Faire revenir l'opacité à sa valeur initiale après une pause de 1 seconde
        this.game.isUserTurn=true
        this.turnH3.innerText = "Au tour du joueur"
      }
    }, 1000) // appliquer la transition toutes les 10 millisecondes
  }

  turnButtonOn(colorBtnIndex){
    this.colorBtns[colorBtnIndex].style.opacity = 0.5
      setTimeout(() => {
        this.colorBtns[colorBtnIndex].style.opacity = 1
      }, 800)
    //   this.turnH3.innerText = "Au tour du joueur"
  }

  updateDisplay() {
    this.levelH3.innerText = this.game.level
    this.pointsH3.innerText = this.game.points
    this.sequenceH3.innerText = this.game.sequenceLength
  }

  reset(){
    this.game.gameReset()
    this.updateDisplay()
    this.playSequence()
  }

  turnAfter(){
    this.game.turnNext()
    this.updateDisplay()
    this.playSequence()
  }
}
