/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);

        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall(this.scene);
    }
    initMaterials(scene) {
        this.m1 = new CGFappearance(scene);
        this.m1.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m1.setDiffuse(1, 0.752, 0.796, 1);
        this.m1.setSpecular(1, 1, 1, 1.0);

        this.m2 = new CGFappearance(scene);
        this.m2.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m2.setDiffuse(0, 0, 1, 1);
        this.m2.setSpecular(1, 1, 1, 1.0);

        this.m3 = new CGFappearance(scene);
        this.m3.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m3.setDiffuse(1, 0.549, 0, 1);
        this.m3.setSpecular(1, 1, 1, 1.0);

        this.m4 = new CGFappearance(scene);
        this.m4.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m4.setDiffuse(1, 1, 0, 1);
        this.m4.setSpecular(1, 1, 1, 1.0);

        this.m5 = new CGFappearance(scene);
        this.m5.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m5.setDiffuse(1, 0, 0, 1);
        this.m5.setSpecular(1, 1, 1, 1.0);

        this.m6 = new CGFappearance(scene);
        this.m6.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.m6.setDiffuse(0.6, 0.19, 0.8, 1);
        this.m6.setSpecular(1, 1, 1, 1.0);

        //------ Applied Material in MyDiamond
        this.tangram_tex = new CGFappearance(this.scene);
        this.tangram_tex.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangram_tex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangram_tex.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangram_tex.setShininess(10.0);
        this.tangram_tex.loadTexture('images/tangram.png');
        this.tangram_tex.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        var tra2 = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.sqrt(2), (Math.sqrt(2) + (Math.sqrt(2)/2.8)), 0, 1
        ];
        this.scene.multMatrix(tra2);
        this.scene.translate(0.85, 0.73, 0);
        var angle = 30*Math.PI/180;
        var rot1 = [
            Math.cos(angle), Math.sin(angle), 0, 0,
            -Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        this.scene.multMatrix(rot1);
        this.tangram_tex.apply();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        angle = 45*Math.PI/180;
        this.scene.rotate(angle, 0, 0, 1);
        this.scene.translate(1, 1, 0);
        this.tangram_tex.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        this.m2.apply();
        this.trianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.40, 1.4, 0);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 0, 1);
        this.m3.apply();
        this.trianglebig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5, 1.5, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.tangram_tex.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.8, 1, 0);
        this.tangram_tex.apply();
        this.trianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, 3, 0);
        this.scene.rotate(-45.0*Math.PI/180.0, 0, 0, 1);
        this.m6.apply();
        this.trianglesmall2.display();
        this.scene.popMatrix();

    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.trianglebig.enableNormalViz();
        this.trianglebig2.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.trianglesmall.enableNormalViz();
        this.trianglesmall2.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.trianglebig.disableNormalViz();
        this.trianglebig2.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.trianglesmall.disableNormalViz();
        this.trianglesmall2.disableNormalViz();
    }

    updateBuffers(complexity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}