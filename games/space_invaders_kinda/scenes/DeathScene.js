import "../components/ScoreReaderComponent.js"
import "../components/EndSceneCounterComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/KeyboardComponent.js"
import "../components/CameraMoverComponent.js"

/** The final scene in our game */
class DeathScene extends Scene {
  constructor() {
      super("black")
      this.aspectRatio = 1;
      this.logicalWidth = 20;
  }
  start(ctx){
      
    let scoreGameObject = new GameObject()
    scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    GameObject.instantiate(scoreGameObject, 30, 30)

      let deathTextGameObject = new GameObject()
      deathTextGameObject.addComponent(new Text("You Died, wait to respawn.", "35px sans", "red"))
      GameObject.instantiate(deathTextGameObject, 60, 60)

      let endSceneGameObject = new GameObject("EndSceneCounterGameObject")
      endSceneGameObject.addComponent(new EndSceneCounterComponent())
      GameObject.instantiate(endSceneGameObject)

      GameObject.instantiate(new StarControllerGameObject())
      GameObject.instantiate(new ControllerGameObject())
  }
}

window.DeathScene = DeathScene