class ControllerGameObject extends GameObject{
    constructor(){
      super("Camera")
    }
    start(ctx){
      
      this.addComponent(new CameraMoverComponent())
      super.start(ctx)
    }
  }
  
  window.ControllerGameObject = ControllerGameObject;