/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();

        this.face = new MyQuad(this.scene);
        this.initMaterials();
    }

    initMaterials(){
        this.topcube = new CGFappearance(this.scene);
        this.topcube.setAmbient(0.1, 0.1, 0.1, 1);
        this.topcube.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topcube.setSpecular(0.1, 0.1, 0.1, 1);
        this.topcube.setShininess(10.0);
        // this.topcube.loadTexture('images/mineTop.png');
        // this.topcube.setTextureWrap('REPEAT', 'REPEAT');

        this.sideCube = new CGFappearance(this.scene);
        this.sideCube.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideCube.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideCube.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideCube.setShininess(10.0);
        // this.sideCube.loadTexture('images/mineSide.png');
        // this.sideCube.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomCube = new CGFappearance(this.scene);
        this.bottomCube.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomCube.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomCube.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomCube.setShininess(10.0);
        // this.bottomCube.loadTexture('images/mineBottom.png');
        // this.bottomCube.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        //TOP
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 1, 0, 0);
        this.topcube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        //SIDES
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.sideCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-180.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        //BOTTOM
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 1, 0, 0);
        this.bottomCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();
    }
}