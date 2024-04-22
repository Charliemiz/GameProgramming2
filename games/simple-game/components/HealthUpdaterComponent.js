class HealthUpdaterComponent extends Component {
    start() {
        Globals.playerhealth = 5
        EventSystem.registerListener(this);
      }
      handleEvent(event) {
        if (event.name == "laserPlayerCollision") {
    
          Globals.playerhealth -= 1
          console.log(Globals.playerhealth)
        }
      }
      update() {
        
        this.parent.getComponent("Text").text = "PlayerHealth: " + Globals.playerhealth;
        
      }
    }
    
    window.HealthUpdaterComponent = HealthUpdaterComponent