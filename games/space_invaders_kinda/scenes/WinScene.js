import "../components/ScoreReaderComponent.js"
import "../components/EndSceneCounterComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/KeyboardComponent.js"



class WinScene extends Scene {
    constructor() {
        super("black")
        this.aspectRatio = 1;
        this.logicalWidth = 10;

    }
    start(ctx) {
        let endText = new GameObject()
        endText.addComponent(new Text("Your Score was , Press T to restart:", "50px sans", "white"))
        endText.addComponent(new StartGameComponent())
        endText.addComponent(new ScoreUpdaterComponent())
        GameObject.instantiate(endText, 50, 200)

        GameObject.instantiate(new StarControllerGameObject())
        GameObject.instantiate(new ControllerGameObject())
    }

    
}

window.WinScene = WinScene