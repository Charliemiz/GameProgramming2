class ScoreUpdaterComponent extends Component {
  start() {
    Globals.score = 0;
    EventSystem.registerListener(this);
  }
  handleEvent(event) {
    if (event.name == "scoreUpdate") {

      Globals.score += event.origin.scoreValue
      console.log(Globals.score)
    }
  }
  update() {
    // Globals.score++
    this.parent.getComponent("Text").text = "Score: " + Globals.score;
    // this.parent.components[1].text = "" + Globals.score;
  }
}

window.ScoreUpdaterComponent = ScoreUpdaterComponent