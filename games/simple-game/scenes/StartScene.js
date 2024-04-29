import "../components/KeyboardComponent.js"


class StartScene extends Scene {
    constructor() {
        super("darkgray")
    }

    start(ctx) {
        let userStartText = new GameObject()
        userStartText.addComponent(new Text("Level 1 ", "50px sans", "white"))
        GameObject.instantiate(userStartText, 500, 50)



        
    }
    

}

window.StartScene = StartScene