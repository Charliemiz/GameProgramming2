class PlayerGameObject extends GameObject{
    constructor(name="PlayerGameObject"){
        super(name);
        window.player = this;
    }
    start(ctx) {
        super.start(ctx)
        this.health = 5
        this.addComponent(new PlayerDeathComponent())
        this.addComponent(new Circle("purple", "blue"))

    }
    // Getter method to access health
    getHealth() {
        return this.health;
    }
}

window.PlayerGameObject = PlayerGameObject