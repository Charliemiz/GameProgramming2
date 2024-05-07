class MoveEnemyComponent extends Component {
    constructor() {
        super();

        // Initialize variables to move enemies
        this.direction = 1
        this.timeElapsed = 0
        this.duration = 1000;
    }

    update() {
        this.transform.x += this.direction;

        this.timeElapsed += 10

        if (this.timeElapsed >= this.duration) {
            // Reset the timer
            this.timeElapsed = 0;
            // Switch direction
            this.direction *= -1;
        }
    }

}

window.MoveEnemyComponent = MoveEnemyComponent;