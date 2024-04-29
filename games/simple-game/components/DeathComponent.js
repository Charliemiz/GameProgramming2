class DeathComponent extends Component {
    constructor() {
        super()
        EventSystem.registerListener(this);
    }
    start() {
    }

    handleEvent(event) {
        //console.log(event);
        console.log(event.dest)
        if (event.dest == this.parent) {
        
            if (event.name == "laserCollision") {
                this.parent.health--;
                if (this.parent.health <= 0) {
                    EventSystem.fireEvent({
                        origin:this.parent,
                        dest: null,
                        name: "scoreUpdate"
                    })
                    GameObject.destroy(this.parent);
                    Globals.numberOfDeathGameObjects--

                    GameObject.instantiate(new FirstBossGameObject(), 700, 200, 30)

                    // let new_spawn = new FlodnagGameObject()
                    // GameObject.instantiate(new_spawn, 1000, 400, 50)
                    // new_spawn.start(ctx)
                    // //new_spawn.addComponent("Circle")
                    // Globals.numberOfDeathGameObjects--
                    
                    
                }
            }
        }
    }

    update() {
        
        let circleGameObject = null;
        for (let gameObject of Engine.currentScene.gameObjects) {
            if (gameObject.name == "PlayerGameObject") {
                circleGameObject = gameObject
            }
        }

        if (!circleGameObject) return;

        let collision = Collisions.isCircleCircleCollision(
            { x: this.transform.x, y: this.transform.y },
            { x: circleGameObject.transform.x, y: circleGameObject.transform.y },
            50,
            50)


        if (collision) {
            Engine.currentScene = new DeathScene()
        }
    }
}

window.DeathComponent = DeathComponent;