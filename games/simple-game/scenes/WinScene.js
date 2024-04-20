class WinScene extends Scene {
    constructor() {
        super("green")
        
        let winGameObject = new GameObject()
        winGameObject.addComponent(new Text("YOU WON, press any key to go to next level", "30px sans", "white"))
        GameObject.instantiate(winGameObject, 30, 30)

    }
}

window.WinScene = WinScene