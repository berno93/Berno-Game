export class Game {
  constructor() {
    this.points = 0
    this.level = 1
    this.sequenceLength = this.level
    this.computerSequence = []
    this.userSequence = []
    this.createComputerSequence()
    this.isUserTurn = false
  }
  
  createComputerSequence() {
    for ( let i=0 ;i < this.sequenceLength ;i++){
      let indexComputer = Math.floor(Math.random() * 4)
      this.computerSequence.push(indexComputer)
    }
    console.log('sequence : ', this.computerSequence)
    return this.computerSequence
  }

  addToUserSequenceAndCompare(buttonIndex){
    if(this.isUserTurn){
      this.userSequence.push(buttonIndex)
      return this.compareLastUserSequenceElement()
    }
    return false
  }

  compareLastUserSequenceElement(){
    const lastUserElementIndex = this.userSequence.length-1
    this.isUserTurn=!this.isNowComputerTurn()
    return this.userSequence[lastUserElementIndex]===this.computerSequence[lastUserElementIndex]
  }

  isNowComputerTurn(){
    return this.userSequence.length===this.computerSequence.length
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

  gameReset(){
    this.points=0
    this.level=1
    this.sequenceLength = this.level
    this.userSequence.splice(0, this.userSequence.length);
  }

  turnNext(){
    this.points+=2
    this.level++
    this.sequenceLength = this.level
    this.userSequence.splice(0, this.userSequence.length);
  }
  
}
