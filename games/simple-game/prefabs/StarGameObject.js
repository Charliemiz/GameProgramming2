class StarGameObject extends GameObject {
    constructor() {
        super("StarGameObject")
    }
    start(ctx){
        this.layer = -1
        this.addComponent(new Circle("white", "transparent"))

        // want this component to move my stars up and to the right
        // I also want to have many rows of stars within the game
        this.addComponent(new StarMoverComponent())

        //start
        super.start(ctx)

    }
}

window.StarGameObject = StarGameObject;