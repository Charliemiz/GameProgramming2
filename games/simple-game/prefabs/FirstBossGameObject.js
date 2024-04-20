class FirstBossGameObject extends DeathGameObject{
    constructor(name="DeathGameObject"){
        super(name)
  
    }
    start(ctx){
        super.start(ctx)
        this.health = 5
        this.scoreValue = 5
        this.components[2].fill = "pink"
        
    }
}

window.FirstBossGameObject = FirstBossGameObject