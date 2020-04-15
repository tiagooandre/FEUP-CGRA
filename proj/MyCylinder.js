class MyCylinder extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.sides = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var alpha = 0;
        var alphaInc = (2*Math.PI) / this.sides;

        for (var i = 0; i <= this.sides; i++){
            var x = Math.cos(alpha);
            var z = Math.sin(-alpha);

            //Vertices
            this.vertices.push(x, 1, z);
            this.vertices.push(x, 0, z);

            //Indices
            if (i < this.sides) {
                this.indices.push(2*i, 2*i +1, 2*i +2);
                this.indices.push(2*i +1, 2*i+3, 2*i +2);
            }

            //Normals
            this.normals.push(x, 0, z);
            this.normals.push(x, 0, z);

            //Texture
            this.texCoords.push(i / this.sides, 0);
            this.texCoords.push(i / this.sides, 1);

            alpha += alphaInc;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}