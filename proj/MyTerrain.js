class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.terrainShader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.texture1 = new CGFtexture(scene, 'images/colormap.png');
        this.texture2 = new CGFtexture(scene, 'images/heightmapipad2.png');

        this.terrainShader.setUniformsValues({ uSampler1: 0});
        this.terrainShader.setUniformsValues({ uSampler2: 1});
        this.plane = new MyPlane(scene, 20);
    }

    display() {
        this.scene.setActiveShader(this.terrainShader);
        this.scene.pushMatrix();

        this.texture1.bind(0);
        this.texture2.bind(1);

        this.scene.pushMatrix();
        this.scene.rotate(-90 * Math.PI / 180.0, 1, 0, 0);
        this.scene.scale(50, 50, 50);
        this.plane.display();

        this.scene.popMatrix();

        // restore default shader (will be needed for drawing the axis in next frame)
        this.scene.setActiveShader(this.scene.defaultShader);
    }

}