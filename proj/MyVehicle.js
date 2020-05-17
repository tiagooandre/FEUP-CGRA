class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        // this.stacks = stacks;
        this.initBuffers();

        //
        this.body = new MyZeppelin(this.scene);
        this.flag = new MyPlane(this.scene);

        //control variables
        this.angle = 0; //ângulo em torno dos yy
        this.speed = 0; //velocidade
        this.posx = 0;
        this.posy = 0;  //posição
        this.posz = 0;

        this.autopilot = false;
        this.angpilot = 0;
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,1,0);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
            );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    update() {
        if (this.autopilot) {
            this.angpilot += 2 * Math.PI / (5 * 60);
        }
        else {
            this.posz += this.speed * Math.cos(this.angle * Math.PI / 180.0);
            this.posx += this.speed * Math.sin(this.angle * Math.PI / 180.0);
        }
    }

    activeautopilot() {
        this.autopilot = true;
        this.angpilot = 0;
    }

    turn(val) {
        this.angle += val;
    }

    accelerate(val) {
        this.speed = val;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    reset() {
        this.posx = 0;
        this.posy = 0;
        this.posz = 0;
        this.angle = 0;
        this.speed = 0;
        this.autopilot = false;
    }

    display() {
        this.scene.setDiffuse(0, 0, 1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);

        this.scene.pushMatrix();
        this.scene.translate(this.posx, this.posy, this.posz); //Posicionar o veículo

        if (this.autopilot) {
            this.scene.translate(-5*Math.cos(-this.angle*Math.PI/180.0), 0, -5*Math.sin(-this.angle * Math.PI / 180.0));
            this.scene.rotate(-this.angpilot, 0, 1, 0);
            this.scene.translate(5*Math.cos(-this.angle*Math.PI/180.0), 0, 5*Math.sin(-this.angle * Math.PI / 180.0));
        }

        this.scene.rotate(this.angle * Math.PI / 180.0, 0, 1, 0); //Orientar o veículo

        this.body.display();
        this.scene.pushMatrix();
        this.scene.translate(0, 10, -2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1, 0.5, 1);
        this.flag.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}