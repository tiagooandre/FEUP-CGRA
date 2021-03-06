class MyCabin extends CGFobject {
    constructor(scene) {
        super(scene);

        this.myCylinder = new MyCylinder(this.scene, 10);
        this.myHalfSphere = new MySphere(this.scene, 16, 8);
    }

    display(){
        //Main body
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        this.scene.scale(1, 4, 1);
        this.myCylinder.display();
        this.scene.popMatrix();

        //Back
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI /2, 1, 0, 0);
        this.myHalfSphere.display();
        this.scene.popMatrix();

        //Front
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 4);
        this.scene.rotate(Math.PI /2, 1, 0, 0);
        this.myHalfSphere.display();
        this.scene.popMatrix();
    }
}