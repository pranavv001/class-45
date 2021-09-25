class Goal{
    constructor(x, y){
        var goal_options = {
           
            isStatic:true
        }
        this.width = 125
        this.height = 75
        this.thickness = 10
        this.x = x
        this.y = y
        this.bWall = Bodies.rectangle(this.x, this.y,this.width,this.thickness,goal_options)
        this.lWall = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,goal_options)
        this.rWall = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,goal_options)

        World.add(world,this.bWall)
        World.add(world,this.lWall)
        World.add(world,this.rWall)
    }

    display() {
        var pos = this.bWall.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.thickness)
        rect(pos.x-this.width/2,pos.y-this.height/2,this.thickness,this.height)
        rect(pos.x+this.width/2,pos.y-this.height/2,this.thickness,this.height)
    }
    rePosition(xx,yy) {
        Matter.Body.setPosition(this.bWall,{x:xx,y:yy})
        Matter.Body.setPosition(this.lWall,{x:xx-this.width/2,y:yy-this.height/2})
        Matter.Body.setPosition(this.rWall,{x:xx+this.width/2,y:yy-this.height/2})

    }
}