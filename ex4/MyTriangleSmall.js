class MyTriangleSmall extends CGFobject {
    color;

    constructor(scene, color) {
        super(scene);
        this.color = color;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0, 1, 0,
            -1, 0, 0,
            1, 0, 0
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ];

        if (this.color == 0) {
            this.texCoords = [
                0.25, 0.75,
                0.5, 0.5,
                0.5, 0.75
            ];
        } else {
            this.texCoords = [
                0.25, 0.25,
                0, 0,
                0, 0.5
            ];
        }

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
