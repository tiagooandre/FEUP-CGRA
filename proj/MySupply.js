const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.supply = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.INACTIVE; // TODO - trocar para INACTIVE quando terminar a modelação
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.passedtime = 0;
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
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.supply.display(/*????????*/);
            this.scene.popMatrix();
        }
        else if (this.state === SupplyStates.LANDED) {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.supply.display(/*????????*/);
            this.scene.popMatrix();
        }
    }
}