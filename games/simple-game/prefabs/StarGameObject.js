class StarGameObject extends GameObject {
    constructor() {
        super("StarGameObject")
    
    }
    start(ctx){
        //start
        this.layer = -1
        
        
        this.addComponent(new Rectangle("white", "yellow"))

        // want this component to move my stars up and to the right
        // I also want to have many rows of stars within the game
        this.addComponent(new StarMoverComponent())

        super.start(ctx)

    }
}

window.StarGameObject = StarGameObject;