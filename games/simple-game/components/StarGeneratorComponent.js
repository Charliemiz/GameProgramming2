class StarGeneratorComponent extends Component {
    constructor() {
        super("StarGeneratorComponent")
    }
    start(ctx) {
        // Create and instantiate new star instances in different locations
        // Randomly spread 10 points on a 800x500 canvas
        const locations = [];
        for (let i = 0; i < 50; i++) {
            locations.push({
                x: Math.floor(Math.random() * 1800), // Random x-coordinate from 0 to 1800
                y: Math.floor(Math.random() * 1000)  // Random y-coordinate from 0 to 1000
            });
        }
        
        locations.forEach(location => {
            let starGameObject = new StarGameObject();
            GameObject.instantiate(starGameObject, location.x, location.y, 8, 8);
            starGameObject.start(ctx); 
        });
    }

    update(ctx){
        
    }
}

window.StarGeneratorComponent = StarGeneratorComponent;