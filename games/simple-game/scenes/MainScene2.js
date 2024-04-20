import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/FireComponent.js"
import "../components/LaserComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/WinComponent.js"

import "../prefabs/DeathGameObject.js"
import "../prefabs/FlodnagGameObjects.js"



/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("darkgray")
  }
  start(ctx){
      Globals.numberOfDeathGameObjects = 0

      let circleGameObject = new GameObject("CircleGameObject")
      circleGameObject.addComponent(new Circle())
      circleGameObject.addComponent(new KeyboardComponent())
      circleGameObject.addComponent(new FireComponent())
      circleGameObject.addComponent(new WinComponent())
      GameObject.instantiate(circleGameObject, 200, 400, 50)
           

      
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 30, 30)
  }
}

window.MainScene = MainScene