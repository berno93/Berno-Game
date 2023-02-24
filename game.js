export class Game {
  constructor() {
    this.points = 0;
    this.level = 1;
    this.sequenceLength = 1;
    this.boucle = 3;
    this.computerSequence = [];
    this.userSequence = [];
    // this.game()
    // this.reset()
  }

  createComputerSequence() {
    //loop => Math.random()
  }

  compareLastUserSequenceElement(){

  }

  isLastUserSequenceElement(){
    
  }

  comparerTableaux() {
    if (this.computerSequence.length !== this.userSequence.length) {
      return false; // Les tableaux ont une taille différente, ils ne peuvent pas être identiques
    }
    for (let i = 0; i < tableau1.length; i++) {
      if (this.computerSequence[i] !== this.userSequence[i]) {
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

  updateDisplayInit() {
    this.compteurBoucle.innerText = this.boucle;
  }
}
