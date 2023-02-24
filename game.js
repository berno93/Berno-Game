export class Game {

  constructor() {
    this.points = 0
    this.level = 1
    this.sequence = 0
    this.boucle = 3
    this.computerSequence = []
    this.userSequence = []
    this.game()
    this.reset()
    
  }

  game() {
    this.pointsH3 = document.getElementById("points")
    this.updateDisplayPoints()
    this.levelH3 = document.getElementById("level")
    this.updateDisplayLevel()
    this.sequenceH3 = document.getElementById("sequence")
    this.updateDisplaySequence()
    this.compteurBoucle=document.getElementById("ini")
    this.updateDisplayInit()
    //Quand on appuie sur le bouton start
    this.btnStart = document.getElementById("start")
    this.btnStart.addEventListener("click", () => {
        
        this.part = Math.round(Math.random() * 4)
        this.partCircle = document.getElementById([this.part])
        this.partCircle.style.opacity = 0
        let opacity = 0
        const intervalId = setInterval(() => {
        opacity += 0.01 // augmenter l'opacité de 1% à chaque intervalle
        this.partCircle.style.opacity = opacity
            if (opacity >= 1) {
                clearInterval(intervalId) // arrêter l'interval quand l'opacité atteint 1
                // Faire revenir l'opacité à sa valeur initiale après une pause de 1 seconde
                setTimeout(() => {
                    this.partCircle.style.opacity = 1
                }, 1000)
            }
        }, 10) // appliquer la transition toutes les 10 millisecondes
        
        this.sequence++
        this.updateDisplaySequence()
        this.boucle--
        this.updateDisplayInit()
    })

    this.resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", () => {
        this.sequence = 0
        this.updateDisplaySequence() 
        this.level = 1
        this.updateDisplayLevel() 
        this.points = 0
        this.updateDisplayPoints() 
    })
  }

    comparerTableaux(computerSequence, userSequence) {
    if (computerSequence.length !== userSequence.length) {
      return false; // Les tableaux ont une taille différente, ils ne peuvent pas être identiques
    }
    for (let i = 0; i < tableau1.length; i++) {
      if (computerSequence[i] !== userSequence[i]) {
        return false; // Les éléments des tableaux ne sont pas égaux, ils ne peuvent pas être identiques
      }
    }
    return true; // Les tableaux sont identiques
  }
  
//   //Bouton reset
//   reset() {
//     this.resetButton = document.getElementById("reset")
//     resetButton.addEventListener("click", () => {
//         this.sequence = 0
//         this.updateDisplaySequence() 
//         this.level = 1
//         this.updateDisplayLevel() 
//         this.points = 0
//         this.updateDisplayPoints() 
//     })
//   }

  updateDisplayLevel() {
    this.levelH3.innerText = this.level
  }
  updateDisplaySequence() {
    this.sequenceH3.innerText = this.sequence
  }
  updateDisplayPoints() {
    this.pointsH3.innerText = this.points
  }
  updateDisplayInit() {
    this.compteurBoucle.innerText = this.boucle
  }
}
