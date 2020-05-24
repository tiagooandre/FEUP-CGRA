class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        // this.stacks = stacks;
        this.initBuffers();

        //
        this.body = new MyZeppelin(this.scene);
        this.flag = new MyPlane(this.scene, 20);

        //control variables
        this.angle = 0; //ângulo em torno dos yy
        this.addangle = 0;
        this.speed = 0; //velocidade
        this.posx = 0;
        this.posy = 0;  //posição
        this.posz = 0
        this.centerx = 0;
        this.centerz = 0;

        this.autopilot = false;
        this.angpilot = 0;

        this.propellerang = 0;

        //flag shader
        this.flagShader = new CGFshader(scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        this.flagTexture = new CGFtexture(scene, "images/flag.jpg");

        this.flagWave = 0;

        this.flagShader.setUniformsValues({patchL: this.flag.patchLength});
        this.flagShader.setUniformsValues({time: this.flagWave});
        this.flagShader.setUniformsValues({uSampler1: 0});
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

    update(elapsedTime) { //TRATAR DE UPDATE MYSCENE.JS
        if (this.autopilot) {
            this.angpilot += 2.0 * Math.PI * elapsedTime / 5000.0;
            let deltaang = 2.0 * Math.PI * elapsedTime / 5000.0;
            this.angle -= deltaang * 180.0 / Math.PI;

            this.posx -= this.centerx;
            this.posz -= this.centerz;

            let x = this.posx * Math.cos(deltaang) - this.posz*Math.sin(deltaang);
            let z = this.posx * Math.sin(deltaang) + this.posz*Math.cos(deltaang);

            this.posx = x + this.centerx;
            this.posz = z + this.centerz;
        }
        else {
            // Verificar se necessita alterações
            this.posx += this.speed * Math.sin(this.angle * Math.PI / 180.0);
            this.posz += this.speed * Math.cos(this.angle * Math.PI / 180.0);
}

        this.propellerang += 25 * this.speed;

        this.flagWave += 1.0;
        if (this.flagWave > 10.0) this.flagWave = 0.0;
        this.flagShader.setUniformsValues({time: this.flagWave});
    }

    activeautopilot() {
        this.autopilot = true;
        this.angpilot = (this.angle - 90.0) * Math.PI/180.0;
        this.centerx = this.posx + Math.sin(this.angpilot) * 5.0;
        this.centerz = this.posz + Math.cos(this.angpilot) * 5.0;
        this.speed = 0.1;
    }

    deactiveautopilot() {
        this.autopilot = false;
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
        this.angpilot = 0;
    }

    display() {
        this.scene.setDiffuse(0, 0, 1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);

        this.scene.pushMatrix();
        this.scene.translate(this.posx, this.posy, this.posz); //Posicionar o veículo
        this.scene.rotate(this.angle * Math.PI / 180.0, 0, 1, 0); //Roda sobre si mesmo

        this.body.display();

        this.scene.setActiveShader(this.flagShader);
        this.scene.pushMatrix();

        this.flagTexture.bind(0);

        this.scene.translate(0, 10, -2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1, 0.5, 1);
        this.flag.display();

        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}