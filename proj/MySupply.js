const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.sypply = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.FALLING; // TODO - trocar para INACTIVE quando terminar a modelação
    }

    update(elapsedtime) {
        if (this.state === SupplyStates.FALLING) {
            this.passedtime += elapsedtime;
            this.y = this.fallingPoint - (this.passedtime * 0.0027);
            if (this.y <= 0.4)
                this.land();
        }
        if (this.state === SupplyStates.INACTIVE) {
            this.fallingPoint = this.scene.vehicle.y - 1.0;
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

    display() {
        if (this.state === SupplyStates.FALLING) {
            this.scene.pushMatrix();
            this.scene.translate(0, 5, 0);
            this.supply.display(/*????????*/);
            this.scene.popMatrix();
        }
        else if (this.state === SupplyStates.LANDED) {
            this.scene.pushMatrix();
            this.scene.translate(0, 5, 0);
            this.supply.display(/*????????*/);
            this.scene.popMatrix();
        }
    }
}