class MyBlade extends CGFobject {
    constructor(scene) {
        super(scene);

        this.triangle = new MyTriangleSmall(this.scene);
        this.halfCircle = new MyHalfCircle(this.scene, 20);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1, 2, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.halfCircle.display();
        this.scene.popMatrix();
    }
}