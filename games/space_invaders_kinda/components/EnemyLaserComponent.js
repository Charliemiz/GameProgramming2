class EnemyLaserComponent extends Component{
    constructor(){
        super();
    }
    update(){
        
        this.transform.y+=Time.deltaTime * 1000;

        if(this.transform.y >= 1000){
            GameObject.destroy(this.parent);
        }

        
        let invaders = GameObject.filter("PlayerGameObject")
        for(let invader of invaders){
            if(Collisions.isCircleCircleCollision(
                {x:invader.transform.x,y:invader.transform.y},
                {x:this.transform.x, y:this.transform.y},
                invader.transform.scaleX,
                this.transform.scaleX
                )){
                    // GameObject.destroy(invader);
                    // Globals.score++;
                    
                    let event = {
                        origin: this,
                        dest: invader,
                        name: "laserPlayerCollision",
                    }
                    
                    
                    EventSystem.fireEvent(event)
                    GameObject.destroy(this.parent);

            }
        }

    }
}

window.EnemyLaserComponent = EnemyLaserComponent;