import "../components/DeathComponent.js"
import "../components/PlayerDeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/FireComponent.js"
import "../components/EnemyLaserComponent.js"
import "../components/LaserComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/WinComponent.js"
import "../components/MoveEnemyComponent.js"
import "../components/EnemyFireComponent.js"
import "../components/StarMoverComponent.js"

import "../prefabs/DeathGameObject.js"
import "../prefabs/StarGameObject.js"
import "../prefabs/PlayerGameObject.js"
import "../prefabs/FlodnagGameObjects.js"
import "../prefabs/FirstBossGameObject.js"
import "../prefabs/PlayerGameObject.js"


/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("black")
  }
  start(ctx){
      Globals.numberOfDeathGameObjects = 0

      let levelNameGameObject = new GameObject()
      levelNameGameObject.addComponent(new Text("Level 1 ", "50px sans", "black"))
      GameObject.instantiate(levelNameGameObject, 500, 50)
      
      let circleGameObject = new PlayerGameObject()
      circleGameObject.addComponent(new KeyboardComponent())
      //circleGameObject.addComponent(new FireComponent())
      circleGameObject.addComponent(new WinComponent())
      GameObject.instantiate(circleGameObject, 200, 400, 50)
      // let circleGameObject = new GameObject("CircleGameObject")
      // circleGameObject.addComponent(new Circle())
      // circleGameObject.addComponent(new KeyboardComponent())
      // //circleGameObject.addComponent(new FireComponent())
      // circleGameObject.addComponent(new WinComponent())
      // GameObject.instantiate(circleGameObject, 200, 400, 50)
      
      let shooter = new DeathGameObject()
      shooter.addComponent(new EnemyFireComponent())
      GameObject.instantiate(shooter, 200, 0, 50)
      Globals.numberOfDeathGameObjects++

      GameObject.instantiate(new FlodnagGameObject(), 300, 200, 50)
      Globals.numberOfDeathGameObjects++
      
      GameObject.instantiate(new FirstBossGameObject(), 500, 200, 80)
      Globals.numberOfDeathGameObjects++

      let temp = new FirstBossGameObject()
      temp.addComponent(new MoveEnemyComponent())
      temp.addComponent(new EnemyFireComponent())
      GameObject.instantiate(temp, 800, 200, 80)
      

      
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 30, 30)
  }
}

window.MainScene = MainScene