/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.selectedElement = 2;
        this.selectedTexture = 0;
        this.speedFactor = 1;
        this.scaleFactor = 1;

        this.displayVehicle = true;
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
        this.terrain = new MyTerrain(this);

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

        this.supplies = [
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this)
        ];

        this.nSuppliesDelivered = 0;

        this.vehicle = new MyVehicle(this, 4);

        //Objects connected to MyInterface
        this.displayAxis = true;

        //Textures
        this.appearance = new CGFappearance(this);

        this.fixedTextures = [
            new CGFtexture(this, "images/cylinder_red.png"),
            new CGFtexture(this, "images/earth.jpg"),
        ];

        this.cubeTextures = [
            new CGFtexture(this, "images/example.png"),
            new CGFtexture(this, "images/cubemap.png"),
            new CGFtexture(this, "images/mountain.png")
        ];

        this.cubeTextureOptions = {
            'Example': 0,
            'CubeMap': 1,
            'Mountain': 2
        };

        // ---- Applied Material
        this.material = new CGFappearance(this);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/earth.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');

        this.appearance.setTexture(this.fixedTextures[this.selectedTexture]);
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
        if (this.gui.isKeyPressed("KeyW") && !this.vehicle.autopilot) {
            this.vehicle.accelerate(0.2 * this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS") && !this.vehicle.autopilot) {
            this.vehicle.accelerate(-0.2 * this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyA") && !this.vehicle.autopilot) {
            this.vehicle.turn(10);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyD") && !this.vehicle.autopilot) {
            this.vehicle.turn(-10);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
            this.supplies[0].reset();
            this.supplies[1].reset();
            this.supplies[2].reset();
            this.supplies[3].reset();
            this.supplies[4].reset();
            this.nSuppliesDelivered = 0;
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyP") && !this.vehicle.autopilot) {
            this.vehicle.activeautopilot();
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyL") && this.nSuppliesDelivered < 5 && !this.vehicle.autopilot) {
            this.supplies[this.nSuppliesDelivered].drop(this.vehicle.posx, this.vehicle.posz);
            this.nSuppliesDelivered++;
        }

        if (keysPressed)
            this.vehicle.update();
}
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.vehicle.update();
        this.supplies[0].update(t);
        this.supplies[1].update(t);
        this.supplies[2].update(t);
        this.supplies[3].update(t);
        this.supplies[4].update(t);
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
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        // Draw axis
        this.pushMatrix();

        if (this.displayAxis)
            this.axis.display();

        if (this.displayVehicle) {
            this.pushMatrix();
            this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
            this.vehicle.display();
            this.popMatrix();
        }
        this.popMatrix();

        this.material.apply();
        this.terrain.display();


        if (this.selectedElement < 2) {
            this.appearance.setTexture(this.fixedTextures[this.selectedElement]);
        } else {
            this.appearance.setTexture(this.cubeTextures[this.selectedTexture]);
        }
        this.appearance.apply();

        this.objects[this.selectedElement].display();

        this.supplies[0].display();
        this.supplies[1].display();
        this.supplies[2].display();
        this.supplies[3].display();
        this.supplies[4].display();
        // ---- END Primitive drawing section
    }
}