var margo;
var leg = [];
var aTree = [];


function setup() {
    margo = 30;
    createCanvas(300, 300);

    var startingPoints = [
        [margo, 90],
        [width - margo, 140],
        [margo + 10, 75],
        [width - margo - 10, 125]
    ];

    for (var i = 1; i < 4; i++) {
        this.aTree[i] = new Tree(i * 20, i);
    }
    for (var j = 0; j < 4; j++) {
        this.leg[j] = new Leg(startingPoints[j][0], startingPoints[j][1]);
    }

}

function draw() {

    background(40);
    stroke(255, 255, 0);
    line(0, height - margo, width, height - margo);
    for (var i = 1; i < 4; i++) {
        this.aTree[i].update();
        this.aTree[i].show();
    }

    for (var j = 0; j < 4; j++) {
        this.leg[j].update();
    }


    this.leg[0].curveTo(this.leg[1]);
    this.leg[2].curveTo(this.leg[3]);

}

function keyPressed() {
    if (keyCode === 65) {
        this.leg[0].up();
        this.leg[2].up();
    } else if (keyCode === 83) {
        this.leg[1].up();
        this.leg[3].up();
    }
    return false;
}