class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -0.5, -0.5, -0.5,	//0 - canto inferior esquerdo trás
            0.5, -0.5, -0.5, 	//1 - canto inferior esquerdo frente
            -0.5, 0.5, -0.5,	//2 - canto inferior direito trás
            0.5, 0.5, -0.5,     //3 - canto inferior direito frente
            -0.5, -0.5, 0.5,	//4 - canto superior esquerdo trás
            0.5, -0.5, 0.5, 	//5 - canto superior esquerdo frente
            -0.5, 0.5, 0.5,	    //6 - canto superior direito trás
            0.5, 0.5, 0.5       //7 - canto superior direito frente
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            2, 1, 0,    // face inferior
            3, 1, 2,    // face inferior
            4, 2, 0,    // face traseira
            6, 2, 4,    // face traseira
            4, 0, 1,    // face esquerda
            5, 4, 1,    // face esquerda
            5, 1, 3,    // face dianteira
            7, 5, 3,    // face dianteira
            7, 3, 2,    // face direita
            6, 7, 2,    // face direita
            4, 5, 7,    // face superior
            6, 4, 7     // face superior
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers(); //Pega nesta informação e carrega-a para a placa gráfica
    }
}