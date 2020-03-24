class MyTriangleBig extends CGFobject {
    color;

    constructor (scene, color) {
        super(scene);

        this.color = color;

        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -2, 0, 0,   //0
            0, 2, 0,    //1
            2, 0, 0,    //2


            -2, 0, 0,   //0 - 3
            0, 2, 0,    //1 - 4
            2, 0, 0,    //2 - 5
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            // double-sided
            0, 2, 1,

            3, 4, 5
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,


            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
        ];

        if (this.color == 0) {
            this.texCoords = [
                1, 0,
                0.5, 0.5,
                0, 0,

                1, 0,
                0.5, 0.5,
                0, 0
            ];
        } else {
            this.texCoords = [
                1, 1,
                0.5, 0.5,
                1, 0,

                1, 1,
                0.5, 0.5,
                1, 0,
            ];
        }

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers(); //Pega nesta informação e carrega-a para a placa gráfica
    }
}
