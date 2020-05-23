/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.face = new MyQuad(this.scene);
    }


    display() {
        //TOP
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();

        //SIDES
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-180.0 * Math.PI / 180.0, 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        //BOTTOM
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();
    }
}