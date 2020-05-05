class MyPropeller extends CGFobject {
    constructor(scene) {
        super(scene);

        this.blade = new MyBlade(scene);
        this.body = new MyEllipsoid(scene);
    }

    display() {
        this.scene.pushMatrix();
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -1.5, -2);
        this.scene.scale(0.75, 0.75, 0.75);
        this.blade.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -2);
        this.scene.rotate(2* Math.PI /3, 0, 0, 1);
        this.scene.translate(0, -1.5, 0);
        this.scene.scale(0.75, 0.75, 0.75);
        this.blade.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -2);
        this.scene.rotate(-2* Math.PI /3, 0, 0, 1);
        this.scene.translate(0, -1.5, 0);
        this.scene.scale(0.75, 0.75, 0.75);
        this.blade.display();
        this.scene.popMatrix();
    }
}