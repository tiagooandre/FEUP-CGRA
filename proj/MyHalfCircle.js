class MyHalfCircle extends CGFobject {
    constructor(scene, slices) {
        super(scene);

        this.long = slices;

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        //front face

        //initial points
        this.vertices.push(0, 0, 0, 1, 0, 0);
        this.normals.push(0, 0, 1, 0, 0, 1);

        var angleInc = Math.PI / this.long;
        var angle = 0;

        var x = 0;
        var y = 0;

        for(let i = 2; i < this.long+2; i++){
            angle += angleInc;

            x = Math.cos(angle);
            y = - Math.sin(angle);

            this.vertices.push(x, y, 0);

            this.indices.push(0, i, i-1);

            this.normals.push(0, 0, 1);
        }

        //back face

        this.vertices.push(0, 0, 0, 1, 0, 0);
        this.normals.push(0, 0, -1, 0, 0, -1);

        angle = 0;

        for(let i = this.long +2; i < 2*(this.long+2); i++){
            angle += angleInc;

            x = Math.cos(angle);
            y = - Math.sin(angle);

            this.vertices.push(x, y, 0);

            this.indices.push(i-1, i, this.long +2);

            this.normals.push(0, 0, -1);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}