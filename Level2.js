class Level2{
    constructor(){
       this.plunger1 = new Plunger(width/3,height-20)
       this.plunger2 = new Plunger(width/1.5,20)
        
    }
    display() {
        this.plunger1.display()
        this.plunger2.display()
    }
    remove() {
        this.plunger1.remove()
        this.plunger2.remove()
    }
}