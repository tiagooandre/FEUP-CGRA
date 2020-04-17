class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [

            //Exemplo:          top
            //          left    front   right   back
            //                  bottom

            //Left Face
            -0.5, 0.5, 0.5,     // 0
            0.5, 0.5, 0.5,      // 1
            0.5, -0.5, 0.5,     // 2
            -0.5, -0.5, 0.5,    // 3

            //Front Face
            -0.5, 0.5, -0.5,     // 4
            -0.5, 0.5, 0.5,      // 5
            -0.5, -0.5, 0.5,     // 6
            -0.5, -0.5, -0.5,    // 7

            //Right Face
            0.5, 0.5, -0.5,     // 8
            -0.5, 0.5, -0.5,    // 9
            -0.5, -0.5, -0.5,   // 10
            0.5, -0.5, -0.5,    // 11

            //Back Face
            0.5, 0.5, 0.5,      // 12
            0.5, 0.5, -0.5,     // 13
            0.5, -0.5, -0.5,    // 14
            0.5, -0.5, 0.5,     // 15

            //Top Face
            -0.5, 0.5, -0.5,    // 16
            0.5, 0.5, -0.5,     // 17
            0.5, 0.5, 0.5,      // 18
            -0.5, 0.5, 0.5,     // 19

            //Bottom Face
            -0.5, -0.5, 0.5,    // 20
            0.5, -0.5, 0.5,     // 21
            0.5, -0.5, -0.5,    // 22
            -0.5, -0.5, -0.5,   // 23
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //Left Face
            1, 2, 0,
            0, 2, 3,

            //Front Face
            4, 5, 6,
            4, 6, 7,

            //Right Face
            8, 9, 10,
            8, 10, 11,

            //Back Face
            12, 13, 14,
            12, 14, 15,

            //Top Face
            16, 17, 18,
            16, 18, 19,

            //Bottom Face
            20, 21, 22,
            20, 22, 23
        ];

        this.normals = [

            //Left Face
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            //Front Face
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            //Right Face
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            // Back Face
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            //Top Face
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            //Bottom Face
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0
        ];

        this.texCoords=[

            //Left Face
            0.25, 0.335,
            0.00, 0.335,
            0.00, (2/3),
            0.25, (2/3),

            //Front Face
            0.50, 0.335,
            0.25, 0.335,
            0.25, (2/3),
            0.50, (2/3),

            //Right Face
            0.75, 0.335,
            0.50, 0.335,
            0.50, (2/3),
            0.75, (2/3),

            //Back Face
            1.00, 0.335,
            0.75, 0.335,
            0.75, (2/3),
            1.00, (2/3),

            //Top Face
            0.50, 0.335,
            0.50, 0.00,
            0.25, 0.00,
            0.25, 0.335,

            //Bottom Face
            0.25, (2/3),
            0.25, 1.00,
            0.50, 1.00,
            0.50, (2/3),

            //TUDO QUE É 0 PASSA A 0.111 E TUDO QUE É 1 PASSA A 0.99
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    display() {
        this.scene.setDiffuse(0.5, 0.5, 0.5, 1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(1, 1, 1, 1);
        this.scene.pushMatrix();
        this.scene.scale(10, 10, 10);
        super.display();
        this.scene.popMatrix();
    }
}