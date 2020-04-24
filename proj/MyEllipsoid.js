class MyEllipsoid extends CGFobject {
    constructor (scene) {
        super(scene);

        this.sphere = new MySphere(this.scene, 32, 16);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(2, 1, 1);
        this.sphere.display();
        this.scene.popMatrix();
    }
}