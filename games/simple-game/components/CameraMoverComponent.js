class CameraMoverComponent extends Component{
    start(ctx){
      Camera.main.transform.x = 0
      Camera.main.transform.y = 0
      Camera.main.transform.scaleX = 1;
      Camera.main.transform.scaleY = 1
    }
    // update(ctx){
      
    // }
    
  }
  
  window.CameraMoverComponent = CameraMoverComponent;