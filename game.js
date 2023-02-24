export class Game {
  constructor() {
    this.points = 0
    this.level = 4
    this.sequenceLength = this.level
    this.computerSequence = []
    this.userSequence = []
    this.createComputerSequence()
  }
  
  createComputerSequence() {
    for ( let i=0 ;i < this.sequenceLength ;i++){
      let indexComputer = Math.round(Math.random() * 3)
      this.computerSequence.push(indexComputer)
    }
    return this.computerSequence
  }

  createUserSequence(){
    this.circle = document.getElementById('circle');
    circle.addEventListener('click', (event) => {
      let indexUser = Array.from(circle.children).indexOf(event.target);
      this.userSequence.push(indexUser);
    });
  }

  compareLastUserSequenceElement(){
    for (let i=0; i==indexComputer; i++){
      return true
    }
    return false
  }

  isLastUserSequenceElement(){
    
  }

  comparerTableaux() {
    if (this.computerSequence.length !== this.userSequence.length) {
      return false // Les tableaux ont une taille différente, ils ne peuvent pas être identiques
    }
    for (let i = 0; i < tableau1.length; i++) {
      if (this.computerSequence[i] !== this.userSequence[i]) {
        return false // Les éléments des tableaux ne sont pas égaux, ils ne peuvent pas être identiques
      }
    }
    return true // Les tableaux sont identiques
  }
  
}
