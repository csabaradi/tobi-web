var margo;
var leftLeg;
var rightLeg;
var backLeftLeg;
var backRightLeg;
var aTree = [];

function setup() {
    margo = 30;
    createCanvas(300, 300);

    for (var i = 1; i < 4; i++) {
        aTree[i] = new Tree(i * 20, i);
    }

}

function draw() {

    background(40);
    stroke(255, 255, 0);
    line(0, height - margo, width, height - margo);
    for (var i = 1; i < 4; i++) {
        aTree[i].update();
        aTree[i].show();
    }

}