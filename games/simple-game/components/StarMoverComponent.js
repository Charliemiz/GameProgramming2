class StarMoverComponenet extends Components {
    constructor() {
        super("StarMoverComponent")
    }
    // when updating the stars in my game i want them
    // to go up and to the right from the 
    // bottom left corner of the canvas
    update(ctx) {
        this.transform.x += Time.deltaTime * 10;
        this.transform.y += Time.deltaTime * 10;
    }
}

window.StarMoverComponenet = StarMoverComponent