import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/components/Circle.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"

import "/engine/prefabs/Camera.js"

import "/engine/static/Collisions.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"
import "/engine/static/EventSystem.js"


class Engine {
  /**
         * The game loop.
         * The game loop calls update and draw using a timer
         */
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    Engine.currentScene._start(ctx);


    

    // Update the current scene
    Engine.currentScene.update(ctx)
    
    //Update the input
    Input.update();

    //Remove anything marked for destroy
    Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go=>go.markForDestroy == false);

    //Draw in world space
    Engine.currentScene.draw(ctx)

    //Draw in Screen/UI space
    //currentScene.drawUI(ctx)
  }

  /** Setup the game **/
  static setup(name = "") {
    if(name != "")
      document.title = name

    document.body.style.margin = "0px"
    document.body.style.overflow = "hidden"
    document.body.style.backgroundColor = "black"

    let canvas = document.createElement("canvas")
    canvas.id = "canv"
    document.body.appendChild(canvas);

    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)
    document.addEventListener("mouseup", Input.mouseup);
    document.addEventListener("mousedown", Input.mousedown);
    document.addEventListener("wheel", Input.wheel);


    //In the background, create a thread and call
    //gameLoop every 100ms.

    setInterval(Engine.gameLoop, Time.ms)
  }
  // for when a scene is switched to clear listeners
  static changeScene(scene) {
    EventSystem.listeners = []
    Engine.currentScene = scene;
  }

}

window.Engine = Engine