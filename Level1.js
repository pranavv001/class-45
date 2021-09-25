class Level1{
    constructor(){
       this.plunger = new Plunger(width/2,height-20)
        this.wall = new Ground(840,115,15,60)
    }
    display() {
        this.plunger.display()
        this.wall.display()
            
        
    }
    remove() {
        this.plunger.remove()
        this.wall.remove()
    }
    checkCollision() {
        if (Matter.SAT.collides(ball.body,this.plunger.body)) {
           // Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10})  
          }
    }
}