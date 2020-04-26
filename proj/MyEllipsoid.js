class MyEllipsoid extends CGFobject {
    constructor (scene) {
        super(scene);

        this.sphere = new MySphere(this.scene, 32, 16);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2);
        this.sphere.display();
        this.scene.popMatrix();
    }
}