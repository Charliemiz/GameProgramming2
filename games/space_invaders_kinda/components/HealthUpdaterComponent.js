class HealthUpdaterComponent extends Component {
    constructor() {
      super()
      Globals.playerhealth = 5
    }
    start() {
        
        
      //   EventSystem.registerListener(this);
      // }
      // handleEvent(event) {
      //   if (event.name == "laserPlayerCollision") {
    
         
      //   }
      }
      update() {
        
        this.parent.getComponent("Text").text = "PlayerHealth: " + player.getHealth();
        
      }
    }
    
    window.HealthUpdaterComponent = HealthUpdaterComponent