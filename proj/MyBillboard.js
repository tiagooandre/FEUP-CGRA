class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);

        this.base = new MyPlane(this.scene);
        this.progressBar = new MyPlane(this.scene, 200);
        this.support = new MyPlane(this.scene);

        //shaders
        this.billboardShader = new CGFshader(scene.gl, "shaders/billboard.vert", "shaders/billboard.frag");
        this.billboardTexture = new CGFtexture(this.scene, "images/billboard.png");

        this.supportShader = new CGFshader(scene.gl, "shaders/support.vert", "shaders/support.frag");

        this.progressShader = new CGFshader(scene.gl, "shaders/progressBar.vert", "shaders/progressBar.frag");

        this.billboardShader.setUniformsValues({uSampler1: 0});
        this.progressShader.setUniformsValues({nSupplies: this.scene.nSuppliesDelivered});
    }

    update() {
        this.progressShader.setUniformsValues({nSupplies: this.scene.nSuppliesDelivered});
    }

    display() {
        this.billboardTexture.bind(0);

        this.scene.setActiveShader(this.billboardShader);

        this.scene.pushMatrix();
        this.scene.translate(0, 1.5, 0);
        this.scene.scale(2, 1, 1);
        this.base.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.supportShader);

        this.scene.pushMatrix();
        this.scene.translate(0.95, 0.5, 0);
        this.scene.scale(0.1, 1, 1);
        this.support.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.95, 0.5, 0);
        this.scene.scale(0.1, 1, 1);
        this.support.display();
        this.scene.popMatrix();


        this.scene.setActiveShader(this.progressShader);

        this.scene.pushMatrix();
        this.scene.translate(0, 1.2, 0.001);
        this.scene.scale(1.5, 0.2, 1);
        this.progressBar.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}