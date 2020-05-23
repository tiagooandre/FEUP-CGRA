class MyZeppelin extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();

        this.mainBody = new MyEllipsoid(this.scene);
        this.Fin = new MyFin(this.scene);
        this.cabin = new MyCabin(this.scene);
        this.propeller = new MyPropeller(this.scene);
    }

    initMaterials(){
        //Main body texture
        this.body_tex = new CGFappearance(this.scene);
        this.body_tex.setAmbient(0.1, 0.1, 0.1, 1);
        this.body_tex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.body_tex.setSpecular(0.1, 0.1, 0.1, 1);
        this.body_tex.setShininess(10.0);
        this.body_tex.loadTexture('images/zeppelin.jpg');
        this.body_tex.setTextureWrap('REPEAT', 'REPEAT');

        //Cabin and Proppeler Color
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(0.1, 0, 0, 1);
        this.red.setDiffuse(0.9, 0, 0, 1);
        this.red.setSpecular(0.1, 0, 0, 1);
        this.red.setShininess(10);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 10, 0); //initial position

        //Main Body
        this.scene.pushMatrix();
        this.body_tex.apply();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.mainBody.display();
        this.scene.popMatrix();

        //Cabin
        this.scene.pushMatrix();
        this.red.apply();
        this.scene.translate(0, -0.55, -0.25);
        this.scene.scale(0.125, 0.125, 0.125);
        this.cabin.display();
        this.scene.popMatrix();

        //Left Propeller
        this.scene.pushMatrix();
        this.scene.translate(0.1625, -0.55, -0.3125);
        this.scene.rotate(this.scene.vehicle.propellerang, 0, 0, 1);
        this.scene.scale(0.0625, 0.0625, 0.0625);
        this.propeller.display();
        this.scene.popMatrix();

        //Right Propeller
        this.scene.pushMatrix();
        this.scene.translate(-0.1625, -0.55, -0.3125);
        this.scene.rotate(this.scene.vehicle.propellerang, 0, 0, 1);
        this.scene.scale(0.0625, 0.0625, 0.0625);
        this.propeller.display();
        this.scene.popMatrix();

        //Horizontal left fin
        this.scene.pushMatrix();
        this.scene.translate(0.2, 0, -1.25);
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        this.Fin.display();
        this.scene.popMatrix();

        //Horizontal right fin
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0, -1.25);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        this.Fin.display();
        this.scene.popMatrix();

        //Vertical up fin
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, -1.25);
        this.scene.rotate(Math.PI /2, 0, 0, 1);
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        if (this.scene.gui.isKeyPressed("KeyD"))
            this.scene.rotate(45 * Math.PI / 180, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
            this.scene.rotate(-45 * Math.PI / 180, 0, 1, 0);
        this.Fin.display();
        this.scene.popMatrix();

        //Vertical down fin
        this.scene.pushMatrix();
        this.scene.translate(0, -0.2, -1.25);
        this.scene.rotate(-Math.PI /2, 0, 0, 1);
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        if (this.scene.gui.isKeyPressed("KeyD"))
            this.scene.rotate(-45 * Math.PI / 180, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
            this.scene.rotate(45 * Math.PI / 180, 0, 1, 0);
        this.Fin.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}