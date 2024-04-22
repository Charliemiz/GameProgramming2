class StarMoverComponent extends Component {
    constructor() {
        super("StarMoverComponent")
        this.direction = .1
        this.timeElapsed = 0
        this.duration = 2000;
    }
    // I want the stars to stay in place but i want them to move left and right for a little animation
    update(ctx) {
        this.transform.x += this.direction;

        this.timeElapsed += 30

        if (this.timeElapsed >= this.duration) {
            // Reset the timer
            this.timeElapsed = 0;
            // Switch direction
            this.direction *= -1;
        }
    }
}

window.StarMoverComponent = StarMoverComponent