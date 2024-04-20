class PlayerDeathComponent extends Component {
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
                console.log('hit')
                if (this.parent.health <= 0) {
                    EventSystem.fireEvent({
                        origin:this.parent,
                        dest: null,
                        name: null
                    })
                    GameObject.destroy(this.parent);
                    Engine.currentScene = new DeathScene();
                }
            }
        }
    }

}

window.PlayerDeathComponent = PlayerDeathComponent;