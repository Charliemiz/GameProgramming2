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
import "../components/StarGeneratorComponent.js"
import "../components/StarMoverComponent.js"
import "../components/HealthUpdaterComponent.js"
import "../components/PlayerBorderComponent.js"
import "../components/CameraMoverComponent.js"

import "../prefabs/DeathGameObject.js"
import "../prefabs/StarGameObject.js"
import "../prefabs/PlayerGameObject.js"
import "../prefabs/FlodnagGameObjects.js"
import "../prefabs/FirstBossGameObject.js"
import "../prefabs/PlayerGameObject.js"
import "../prefabs/StarControllerGameObject.js"
import "../prefabs/ControllerGameObject.js"


/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("black")

      this.aspectRatio = 1;
      this.logicalWidth = 20;
  }
  start(ctx){
      Globals.numberOfDeathGameObjects = 0

      let levelNameGameObject = new GameObject()
      levelNameGameObject.addComponent(new Text("Level: 1 ", "50px sans", "white"))
      GameObject.instantiate(levelNameGameObject, 550, 50)
      
      let circleGameObject = new PlayerGameObject()
      circleGameObject.addComponent(new KeyboardComponent())
      circleGameObject.addComponent(new FireComponent())
      circleGameObject.addComponent(new WinComponent())
      circleGameObject.addComponent(new PlayerBorderComponent())
      GameObject.instantiate(circleGameObject, 700, 700, 50)

      
      // let circleGameObject = new GameObject("CircleGameObject")
      // circleGameObject.addComponent(new Circle())
      // circleGameObject.addComponent(new KeyboardComponent())
      // //circleGameObject.addComponent(new FireComponent())
      // circleGameObject.addComponent(new WinComponent())
      // GameObject.instantiate(circleGameObject, 200, 400, 50)
      
      let shooter = new DeathGameObject()
      //shooter.addComponent(new EnemyFireComponent())
      GameObject.instantiate(shooter, 700, 100, 10)
      

      // GameObject.instantiate(new FlodnagGameObject(), 300, 200, 10)

      
      // GameObject.instantiate(new FirstBossGameObject(), 500, 200, 30)
      

      // let temp = new FirstBossGameObject()
      // temp.addComponent(new MoveEnemyComponent())
      // //temp.addComponent(new EnemyFireComponent())
      // GameObject.instantiate(temp, 800, 200, 80)
      
      

      
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "50px sans", "white"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 750, 50)

      // instantiate after everything so its layered above player and enemies
      let playerHealthGameObject = new GameObject()
      playerHealthGameObject.addComponent(new Text("PlayerHealth: ", "50px sans", "white"))
      playerHealthGameObject.addComponent(new HealthUpdaterComponent())
      GameObject.instantiate(playerHealthGameObject, 950, 50)

      GameObject.instantiate(new StarControllerGameObject())
      GameObject.instantiate(new ControllerGameObject())
  }
}

window.MainScene = MainScene