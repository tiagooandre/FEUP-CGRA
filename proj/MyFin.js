class MyFin extends CGFobject {
    constructor(scene) {
        super(scene);

        this.quad = new MyQuad(this.scene, undefined);
        this.triangle = new MyTriangle(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0.175, 0.175, 0);
        this.scene.scale(0.35, 0.35, 0.35);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.175, 0.525, 0);
        this.scene.scale(0.175, 0.175, 0.175);
        this.triangle.display();
        this.scene.popMatrix();
    }
}