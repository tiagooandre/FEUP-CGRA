/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'selectedElement', this.scene.objectList).name('Display Element');
        // this.gui.add(this.scene, 'selectedTexture', this.scene.textureOptions).onChange(this.scene.onSelectedTextureChanged.bind(this.scene)).name('Texture');

        return true;
    }
}