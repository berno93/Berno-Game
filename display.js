import { Game } from "./game.js";

export class Display {
  constructor() {
    this.game = new Game();
    this.count = 0;
    this.init();
  }

  init() {
    this.pointsH3 = document.getElementById("points");

    this.levelH3 = document.getElementById("level");

    this.sequenceH3 = document.getElementById("sequence");

    this.compteurBoucle = document.getElementById("ini");
    this.colorBtns = document.querySelectorAll("#circle > div");
    console.log("colorBtn", this.colorBtns);
    this.startButton = document.getElementById("start");
    this.startButton.addEventListener("click", () => {
      this.playSequence();
    });
    this.updateDisplay();
  }

  game() {
    this.updateDisplayInit();
    //Quand on appuie sur le bouton start
    this.btnStart = document.getElementById("start");
    // this.btnStart.addEventListener("click", () => {

    //     this.part = Math.round(Math.random() * 4)
    //     this.partCircle = document.getElementById([this.part])
    //     this.partCircle.style.opacity = 0
    //     let opacity = 0
    //     const intervalId = setInterval(() => {
    //     opacity += 0.01 // augmenter l'opacité de 1% à chaque intervalle
    //     this.partCircle.style.opacity = opacity
    //         if (opacity >= 1) {
    //             clearInterval(intervalId) // arrêter l'interval quand l'opacité atteint 1
    //             // Faire revenir l'opacité à sa valeur initiale après une pause de 1 seconde
    //             setTimeout(() => {
    //                 this.partCircle.style.opacity = 1
    //             }, 1000)
    //         }
    //     }, 10) // appliquer la transition toutes les 10 millisecondes

    //     this.sequence++
    //     this.updateDisplaySequence()
    //     this.boucle--
    //     this.updateDisplayInit()
    // })

    this.resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      this.sequence = 0;
      this.updateDisplaySequence();
      this.level = 1;
      this.updateDisplayLevel();
      this.points = 0;
      this.updateDisplayPoints();
    });
  }

  playSequence() {
    let computerSequenceIndex = 0;
    const intervalId = setInterval(() => {
      const colorBtnIndex = this.game.computerSequence[computerSequenceIndex];
      this.colorBtns[colorBtnIndex].style.opacity = 0.5;
      setTimeout(() => {
        this.colorBtns[colorBtnIndex].style.opacity = 1;
      }, 800);
      computerSequenceIndex++;
      if (computerSequenceIndex >= this.game.computerSequence.length) {
        clearInterval(intervalId); // arrêter l'interval quand l'opacité atteint 1
        // Faire revenir l'opacité à sa valeur initiale après une pause de 1 seconde
      }
    }, 1000); // appliquer la transition toutes les 10 millisecondes
  }

  updateDisplay() {
    // this.counterH2.innerText=this.count
    this.levelH3.innerText = this.level;
    this.pointsH3.innerText = this.points;
    this.sequenceH3.innerText = this.sequence;
  }
}
