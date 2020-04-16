/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();

        this.face = new MyQuad(this.scene);
    }

    initMaterials(){
        this.topcube = new CGFappearance(this.scene);
        this.topcube.setAmbient(0.1, 0.1, 0.1, 1);
        this.topcube.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topcube.setSpecular(0.1, 0.1, 0.1, 1);
        this.topcube.setShininess(10.0);
        this.topcube.loadTexture('images/split_cubemap/top.png');
        this.topcube.setTextureWrap('REPEAT', 'REPEAT');

        this.sideCube1 = new CGFappearance(this.scene);
        this.sideCube1.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideCube1.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideCube1.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideCube1.setShininess(10.0);
        this.sideCube1.loadTexture('images/split_cubemap/left.png');
        this.sideCube1.setTextureWrap('REPEAT', 'REPEAT');

        this.sideCube2 = new CGFappearance(this.scene);
        this.sideCube2.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideCube2.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideCube2.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideCube2.setShininess(10.0);
        this.sideCube2.loadTexture('images/split_cubemap/front.png');
        this.sideCube2.setTextureWrap('REPEAT', 'REPEAT');

        this.sideCube3   = new CGFappearance(this.scene);
        this.sideCube3.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideCube3.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideCube3.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideCube3.setShininess(10.0);
        this.sideCube3.loadTexture('images/split_cubemap/right.png');
        this.sideCube3.setTextureWrap('REPEAT', 'REPEAT');

        this.sideCube4 = new CGFappearance(this.scene);
        this.sideCube4.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideCube4.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideCube4.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideCube4.setShininess(10.0);
        this.sideCube4.loadTexture('images/split_cubemap/back.png');
        this.sideCube4.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomCube = new CGFappearance(this.scene);
        this.bottomCube.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomCube.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomCube.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomCube.setShininess(10.0);
        this.bottomCube.loadTexture('images/split_cubemap/bottom.png');
        this.bottomCube.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        //TOP
        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 1, 0, 0);
        this.topcube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        //SIDES
        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube3.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(-180.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube4.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(90.0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-0 * Math.PI / 180.0, 0, 1, 0);
        this.sideCube2.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        //BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-90.0 * Math.PI / 180.0, 1, 0, 0);
        this.bottomCube.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();
    }
}