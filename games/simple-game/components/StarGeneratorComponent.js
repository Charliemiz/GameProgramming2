class StarGeneratorComponent extends Components {
    constructor() {
        super("StarGeneratorComponent")
    }
    start(ctx){
        this.generateCountDown = 0;
        this.generateCountDownAmount = 10;
    }

    update(){
        this.countDown -= Time.deltaTime;

        // check when countdown is over and spawn new star
        if(this.countDown <= 0){
            let starGameObject = new StarGameObject()
            GameObject.instantiate(starGameObject, 25, 100, 20, 20)
            starGameObject.start(ctx)

            // reset count down
            this.generateCountDown =  this.generateCountDownAmount;
        }
    }
}