/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();

        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall(this.scene);

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
        //this.scene.setDiffuse(0, 1, 0, 0);
        this.scene.diamondMaterials.apply(); //alterar cor diamond
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        angle = 45*Math.PI/180;
        this.scene.rotate(angle, 0, 0, 1);
        this.scene.translate(1, 1, 0);
        this.scene.triangleMaterials.apply();
        //this.scene.setDiffuse(1, 0.752, 0.796, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        //this.scene.setDiffuse(0, 0, 1, 0);
        this.scene.triangleBigMaterials.apply();
        this.trianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.40, 1.4, 0);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 0, 1);
        //this.scene.setDiffuse(1, 0.549, 0, 0);
        this.scene.triangleBig2Materials.apply();
        this.trianglebig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.5, 1.5, 0);
        this.scene.scale(1, -1, 1);
        //this.scene.setDiffuse(1, 1, 0, 0);
        this.scene.parallelogramMaterials.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.8, 1, 0);
        //this.scene.setDiffuse(1, 0, 0, 0);
        this.scene.triangleSmallMaterials.apply();
        this.trianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, 3, 0);
        this.scene.rotate(-45.0*Math.PI/180.0, 0, 0, 1);
        //this.scene.setDiffuse(0.6, 0.19, 0.8, 0);
        this.scene.triangleSmall2Materials.apply();
        this.trianglesmall2.display();
        this.scene.popMatrix();

    }

    initMaterials() {
        var rgb;

        //Diamond - verde lima - #00ff00
        rgb = this.scene.hexToRgbA("#00ff00");
        this.scene.diamondMaterials = new CGFappearance(this.scene);
        this.scene.diamondMaterials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.diamondMaterials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.diamondMaterials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.diamondMaterials.setShininess(10.0);

        //Triangle - rosa - #FF99CC
        rgb = this.scene.hexToRgbA("#FF99CC");
        this.scene.triangleMaterials = new CGFappearance(this.scene);
        this.scene.triangleMaterials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleMaterials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleMaterials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleMaterials.setShininess(10.0);

        //TriangleBig - azul - #0084CC
        rgb = this.scene.hexToRgbA("#0084CC");
        this.scene.triangleBigMaterials = new CGFappearance(this.scene);
        this.scene.triangleBigMaterials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBigMaterials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBigMaterials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBigMaterials.setShininess(10.0);

        //TriangleBig2 - laranja - #FFAE19
        rgb = this.scene.hexToRgbA("#FFAE19");
        this.scene.triangleBig2Materials = new CGFappearance(this.scene);
        this.scene.triangleBig2Materials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBig2Materials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBig2Materials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleBig2Materials.setShininess(10.0);

        //Parallelogram - amarelo - #FFFE00
        rgb = this.scene.hexToRgbA("#FFFE00");
        this.scene.parallelogramMaterials = new CGFappearance(this.scene);
        this.scene.parallelogramMaterials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.parallelogramMaterials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.parallelogramMaterials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.parallelogramMaterials.setShininess(10.0);

        //TriangleSmall - roxo - #6919B2
        rgb = this.scene.hexToRgbA("#E51919");
        this.scene.triangleSmallMaterials = new CGFappearance(this.scene);
        this.scene.triangleSmallMaterials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmallMaterials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmallMaterials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmallMaterials.setShininess(10.0);

        //TriangleSmall2 - vermelho - #E51919
        rgb = this.scene.hexToRgbA("#6919B2");
        this.scene.triangleSmall2Materials = new CGFappearance(this.scene);
        this.scene.triangleSmall2Materials.setAmbient(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmall2Materials.setDiffuse(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmall2Materials.setSpecular(rgb[0], rgb[1], rgb[2], 1.0);
        this.scene.triangleSmall2Materials.setShininess(10.0);
    }
}