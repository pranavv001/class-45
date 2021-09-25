class Plunger{
    constructor(x, y){
        var plunger_options = {
           
            isStatic:true
        }
        this.x = x
        this.y = y
        this.w = 25
        this.h = 135
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.y,plunger_options)
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        rectMode(CENTER)
        ellipseMode(RADIUS)
        rect(pos.x,pos.y-13,this.w,this.h)
        ellipse(pos.x,pos.y-this.h/2-30,15,15)
    }
    remove() {
        World.remove(world,this.body)
        
    }
}