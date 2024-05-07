class WinComponent extends Component {
    constructor(){
        super();

    }
    update(){
        // Check if all death objects are gone
        if(Globals.numberOfDeathGameObjects === 0){
            // All death objects are gone, player wins
         
            Engine.currentScene = new WinScene();
        }
    }

}

window.WinComponent = WinComponent;