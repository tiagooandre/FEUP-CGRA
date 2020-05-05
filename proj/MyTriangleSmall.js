class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0, 1, 0,    //0
            -1, 0, 0,   //1
            1, 0, 0,    //2

            0, 1, 0,    //0
            -1, 0, 0,   //1
            1, 0, 0     //2
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,

            5, 4, 3
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
