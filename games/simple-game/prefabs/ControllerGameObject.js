class ControllerGameObject extends GameObject{
    constructor(){
      super("ControllerGameObject")
    }
    start(ctx){
      this.addComponent(new StarGeneratorComponent())
      super.start(ctx)
    }
  }
  
  window.ControllerGameObject = ControllerGameObject;