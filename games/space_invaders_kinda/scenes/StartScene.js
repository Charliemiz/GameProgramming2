import "../components/KeyboardComponent.js"
import "../components/StartGameComponent.js"


class StartScene extends Scene {
    constructor() {
        super("darkgray")
    }

    start(ctx) {
        let userStartText = new GameObject()
        userStartText.addComponent(new Text("press t to begin", "50px sans", "white"))
        userStartText.addComponent(new StartGameComponent())
        GameObject.instantiate(userStartText, 500, 50)




    }
    

}

window.StartScene = StartScene