class StartGameComponent extends Component {
    constructor () {
        super()
    }

    start() {


    }
    update(){
        
        if (Input.keysDown.includes("KeyT")) {
            Engine.currentScene = new MainScene();
        }
    }
}

window.StartGameComponent = StartGameComponent;