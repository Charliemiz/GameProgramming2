class StarGeneratorComponent extends Component {
    constructor() {
        super("StarGeneratorComponent")
    }
    start(ctx){
        this.generateCountDown = 0;
        this.generateCountDownAmount = 5;
    }

    update(ctx){
        this.generateCountDown -= Time.deltaTime;
        console.log(this.generatecountDown)
        console.log('before generate')
        // check when countdown is over and spawn new star
        if (this.generateCountDown <= 0) {
            

            // Create and instantiate new star instances in different locations
            const locations = [
                { x: 25, y: 100 },
                { x: 10, y: 50 },
                { x: 100, y: 100 },
                { x: 200, y: 100},
                { x: 300, y: 100},
                { x: 400, y: 100},
                { x: 500, y: 100},
                { x: 600, y: 100},
                
                // Add more locations as needed
            ];

            locations.forEach(location => {
                let starGameObject = new StarGameObject();
                GameObject.instantiate(starGameObject, location.x, location.y, 3, 3);
                starGameObject.start(ctx); 
            });

            // reset countdown
            this.generateCountDown = this.generateCountDownAmount;
    }
}
}
window.StarGeneratorComponent = StarGeneratorComponent;