class StarControllerGameObject extends GameObject {
    constructor() {
        super("StarControllerGameObject")
    }


    // this game object will implement this controller into scenes
    start(ctx) {
        this.addComponent(new StarGeneratorComponent())
        super.start(ctx)
    }

}

window.StarControllerGameObject = StarControllerGameObject;