class PlayerBorderComponent extends Component {
    constructor() {
        super()
    }

    update(){
    
        
        if (this.transform.y <= 600) {
            this.transform.y += 5
        }
        if (this.transform.y >= 1000) {
            this.transform.y -= 5
        }
    }
}


window.PlayerBorderComponent = PlayerBorderComponent;