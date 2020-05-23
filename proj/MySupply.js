const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();

        this.supply = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.INACTIVE; // TODO - trocar para INACTIVE quando terminar a modelação
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.passedtime = 0;
    }

    initMaterials() {
        //Dropping texture
        this.drop_tex = new CGFappearance(this.scene);
        this.drop_tex.setAmbient(0.1, 0.1, 0.1, 1);
        this.drop_tex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.drop_tex.setSpecular(0.1, 0.1, 0.1, 1);
        this.drop_tex.setShininess(10.0);
        this.drop_tex.loadTexture('images/supply.jpg');
        this.drop_tex.setTextureWrap('REPEAT', 'REPEAT');

        //Fallen texture
        this.fallen_tex = new CGFappearance(this.scene);
        this.fallen_tex.setAmbient(0.1, 0.1, 0.1, 1);
        this.fallen_tex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.fallen_tex.setSpecular(0.1, 0.1, 0.1, 1);
        this.fallen_tex.setShininess(10.0);
        this.fallen_tex.loadTexture('images/supply_fallen.jpg');
        this.fallen_tex.setTextureWrap('REPEAT', 'REPEAT');
    }

    update() {
        if (this.state === SupplyStates.FALLING) {
            this.passedtime++;
            this.y -= (this.passedtime * 0.0027);
            if (this.y <= 0.4)
                this.land();
        }
    }

    drop(dropx, dropz) {
        this.state = SupplyStates.FALLING;
        this.x = dropx;
        this.z = dropz;
    }

    land() {
        this.y = 0.6;
        this.state = SupplyStates.LANDED;
    }

    reset() {
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.passedtime = 0;
        this.state = SupplyStates.INACTIVE;
    }

    display() {
        if (this.state === SupplyStates.FALLING) {
            this.drop_tex.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.scene.scale(0.5, 0.5, 0.5);
            this.supply.display();
            this.scene.popMatrix();
        }
        else if (this.state === SupplyStates.LANDED) {
            this.fallen_tex.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.scene.scale(0.5, 0.5, 0.5);
            this.supply.display();
            this.scene.popMatrix();
        }
    }
}