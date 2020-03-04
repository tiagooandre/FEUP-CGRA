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
        this.gui.add(this.scene, 'displayAxis').name('Display Axis'); //Acrescenta-se à interface um controlo que está associado à variável DisplayAxis da cenas
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');
        this.gui.add(this.scene, 'displayParallelogram').name('Display Parallelogram');

        this.gui.add(this.scene, 'displayTriangleSmall').name('Display TriangleSmall');
        this.gui.add(this.scene, 'displayTriangleBig').name('Display TriangleBig');

        this.gui.add(this.scene, 'displayMyTangram').name('Display Tangram');


        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor'); //Same mas coom slide

        return true;
    }
}