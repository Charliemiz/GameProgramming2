class CameraMoverComponent extends Component{
    constructor () {
        super()
        Camera.main.transform.x = 0
        Camera.main.transform.y = 0
        Camera.main.transform.scaleX = 1/75;
        Camera.main.transform.scaleY = 1/75;
    }
    start(ctx){
    //   Camera.main.transform.x = 20000
    //   Camera.main.transform.y = 0
    //   Camera.main.transform.scaleX = 1;
    //   Camera.main.transform.scaleY = 1
    }
    update(ctx){
        //attempt to also make camera follow gameobject
        if (Engine.currentScene instanceof MainScene) {
            this.Gameobject = Engine.currentScene.gameObjects.find(go=>go.constructor.name == "PlayerGameObject")
            Camera.main.transform.x = this.Gameobject.transform.x - 800
            Camera.main.transform.y = this.Gameobject.transform.y - 800
    }
    }
}
  
  window.CameraMoverComponent = CameraMoverComponent;