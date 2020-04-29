class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.terrain = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');

        this.plane = new MyPlane(this.scene, 20);
    }

    display() {

    }

}