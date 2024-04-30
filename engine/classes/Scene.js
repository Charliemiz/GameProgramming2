
class Scene {
    /** The list of game objects in the scene */
    gameObjects = []

    /** Flag to track if we have started the scene (by called start on the 
     * game objects) */
    hasStarted = false;

    logicalWidth = -1;

    aspectRatio = -1;

    logicalWidthViewWidthInPixels = -1
    logicalWidthViewHeightInPixels = -1

    letterBox1End = 0;
    letterBox2Start = 0;
    /**
     * Create a scene with the given background color.
     * 
     */
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false;
    }

    /**
     * Call start on all the game objects and change our start flag
     * 
     */
    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true;
            this.start(ctx);
            for(const gameObject of this.gameObjects){
                if(gameObject.start){
                    gameObject.start(ctx);
                }
            }
        }
    }

    /**
     * Call update on all the game objects 
     * 
     */
    update(ctx){
        for(const gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update(ctx);
            }
        }
    }

    /**
     * Clear the current frame and call draw on all the game objects 
     * 
     */
    draw(ctx) {
        // Clear the scene
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.save()


        let windowAspectRatio = ctx.canvas.height / ctx.canvas.width;



        let usingLogicalCoordinates = this.logicalWidth > 0 && this.aspectRatio > 0

        if (usingLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {
                this.letterBox1End = (ctx.canvas.width) / 2 - (ctx.canvas.height / this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width) / 2 + (ctx.canvas.height / this.aspectRatio) / 2;
                ctx.translate(this.letterBox1End, 0)
                let scaleFactor = ctx.canvas.height / this.logicalWidth;
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = this.letterBox2Start - this.letterBox1End;
                this.logicalWidthViewHeightInPixels = ctx.canvas.height;
            }
            else {
                this.letterBox1End = (ctx.canvas.height) / 2 - (ctx.canvas.width * this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width * this.aspectRatio) / 2 + (ctx.canvas.height) / 2;
                ctx.translate(0, this.letterBox1End)
                let scaleFactor = ctx.canvas.width / (this.logicalWidth / this.aspectRatio);
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = ctx.canvas.width;
                this.logicalWidthViewHeightInPixels = this.letterBox2Start - this.letterBox1End;
            }
        }

        ctx.scale(Camera.main.transform.scaleX, Camera.main.transform.scaleY)
        ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)
        //ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)

        // Sort game objects by their layer before drawing them
        let sortedLayers = [...this.gameObjects].sort((a, b) => a.layer - b.layer);

        ctx.restore()
        ctx.fillStyle = "black"

        if (usingLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {

                ctx.fillRect(0, 0, this.letterBox1End, ctx.canvas.height);
                ctx.fillRect(this.letterBox2Start, 0, ctx.canvas.width, ctx.canvas.height);
            }
            else {
                ctx.fillRect(0, 0, ctx.canvas.width, this.letterBox1End);
                ctx.fillRect(0, this.letterBox2Start, ctx.canvas.width, ctx.canvas.height);
            }
        }


        // Call draw on each sorted game object
        for (const gameObject of sortedLayers) {
            if (gameObject.draw) {
                gameObject.draw(ctx);
            }

        }




    }
}

window.Scene = Scene