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
    this.startButton = document.getElementById("start")
    this.startButton.addEventListener("click", () => {
      this.playSequence()
    })
    this.updateDisplay()
  }

  playSequence() {
    let computerSequenceIndex = 0
    const intervalId = setInterval(() => {
      const colorBtnIndex = this.game.computerSequence[computerSequenceIndex]
      this.colorBtns[colorBtnIndex].style.opacity = 0.5
      setTimeout(() => {
        this.colorBtns[colorBtnIndex].style.opacity = 1
      }, 800)
      computerSequenceIndex++
      if (computerSequenceIndex >= this.game.computerSequence.length) {
        clearInterval(intervalId) // arrêter l'interval quand l'opacité atteint 1
        // Faire revenir l'opacité à sa valeur initiale après une pause de 1 seconde
      }
    }, 1000) // appliquer la transition toutes les 10 millisecondes
    this.turnH3.innerText = "Au tour de l'ordianteur"
  }

  updateDisplay() {
    this.levelH3.innerText = this.level
    this.pointsH3.innerText = this.points
    this.sequenceH3.innerText = this.sequenceLength
  }
}
