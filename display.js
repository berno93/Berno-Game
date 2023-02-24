export class Display{

    constructor(){
        this.count=0
        this.init()
    }

    init(){
        this.counterH2=document.querySelector('h2')
        this.updateDisplayCount()
        this.minusBtn = document.getElementById('btn-moins')
        this.plusBtn = document.getElementById('btn-plus')
        this.minusBtn.addEventListener('click',()=>{
            this.count--
            this.updateDisplayCount()
        })
        this.plusBtn.addEventListener('click',()=>{
            this.count++
            this.updateDisplayCount()
        })
    }

    updateDisplayCount(){
        this.counterH2.innerText=this.count
    }
}

