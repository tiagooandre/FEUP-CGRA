/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.selectedElement = 0;

        this.displayVehicle = false;
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        this.objects = [
            new MyCylinder(this, 20),
            new MySphere(this, 16, 8),
            new MyCubeMap(this)
        ];

        this.objectList = {
            'Cylinder': 0,
            'Sphere': 1,
            'Cube': 2
        };

        this.vehicle = new MyVehicle(this, 4);

        //Objects connected to MyInterface
        this.displayAxis = true;

        //Textures
        this.appearance = new CGFappearance(this);

        this.textures = [
            new CGFtexture(this, "images/cylinder_red.png"),
            new CGFtexture(this, "images/earth.jpg"),
            new CGFtexture(this, "images/example.png"),
            new CGFtexture(this, "images/cubemap.png"),
            new CGFtexture(this, "images/mountain.png")
        ];

        this.textureOptions = {
            'Cylinder Red': 0,
            'Earth': 1,
            'Example': 2,
            'CubeMap': 3,
            'Mountain': 4
        };

        this.appearance.setTexture(this.textures[this.selectedElement]);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
        // var text = "Keys pressed: ";
        var keysPressed = false;

        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            // text += " W ";
            this.vehicle.accelerate(0.2)
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS")) {
            // text += " S ";
            this.vehicle.accelerate(-0.2);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            // text += " S ";
            this.vehicle.turn(10);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyD")) {
            // text += " S ";
            this.vehicle.turn(-10);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
            // text += " S ";
            this.vehicle.reset();
            keysPressed = true;
        }

        if (keysPressed)
            this.vehicle.update();
}
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();

        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        if (this.displayVehicle)
            this.vehicle.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.appearance.setTexture(this.textures[this.selectedElement]);
        this.appearance.apply();

        this.objects[this.selectedElement].display();
        // ---- END Primitive drawing section
    }
}