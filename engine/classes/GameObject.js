
class GameObject {
    
    /** The list of components in this game object */
    components = []

    // this will allow the stars to stay behind the game objects
    layer = 0

    /**
     * Create a new game object. Note that this also instantiate and adds the 
     * first component, an instance of `Transform` so that all game objects are
     * forced to have a transform component.
     * 
     */
    constructor(name) {
        this.name = name
        this.addComponent(new Transform())
        this.markForDestroy = false;
    }

    /**
     * Get the transform of this game object
     */
    get transform() {
        return this.components[0]
    }

    /**
     * Add a component to this game object and set its parent to this game
     * object
     * 
     */
    addComponent(component) {
        this.components.push(component);
        component.parent = this;
    }

    /**
     * Start the game object by calling start on all its components.
     * 
     */
    start(ctx) {
        for (let component of this.components) {
            if (component.start) {
                component.start(ctx)
            }
        }
    }

    /**
     * Update the game object by calling update on all its components.
     *
     */
    update(ctx) {
        for (let component of this.components) {
            if (component.update) {
                component.update(ctx)
            }
        }
    }

    /**
     * Draw the game object by calling draw on all its components.
     */
    draw(ctx) {
        for (let component of this.components) {
            if (component.draw) {
                component.draw(ctx)
            }
        }
    }

    getComponent(name){
        return this.components.find(c=>c.constructor.name == name);
    }

    /**
     * Find the first game object in the scene whose name matches the given string.
     * 
     * @returns The first game object in the scene that matches. 'undefined' otherwise
     */
    static find(gameObjectName) {
        return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    /**
     * Find all the game objects in the scene whose name matches the given string.
     * 
     * @returns All game objects in the scene that match. `[]` otherwise.
     */
    static filter(gameObjectName) {
        return Engine.currentScene.gameObjects.filter(go => go.name == gameObjectName)
    }

    /**
     * Add a game object to the list of game objects in the current scene.
     * 
     * Note: This function is not complete. In the future we will need to make sure we properly 
     * initialize this game object.
     */
    static instantiate(gameObject, x = 0, y = 0, scaleX = 1, scaleY = 1) {
        Engine.currentScene.gameObjects.push(gameObject)
        gameObject.transform.x = x;
        gameObject.transform.y = y;
        gameObject.transform.scaleX = scaleX;
        gameObject.transform.scaleY = scaleY;
    }

    /**
     * Prepare a game object to be destroyed by marking it for destroy.
     * The next time the scene culls game objects that are marked for destroy,
     * this object will be removed from the scene.
     * 
     */
    static destroy(gameObject) {
        gameObject.markForDestroy = true;
    }
}

window.GameObject = GameObject