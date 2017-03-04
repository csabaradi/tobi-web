/*
 CurveBetween function by Natalie Freed, 9/22/16
 Draws symmetrical bezier curves between two points,
 includes example of use
*/

function setup() {
    createCanvas(600, 600);

    noFill();

    stroke(255, 0, 0); //red

    startPont_x = 100;
    startPont_y = 200;

    height = 50;
    width = 50;

    diff = 10;

    firstControlPoint_x = startPont_x;
    firstControlPoint_y = startPont_y - height;

    secondControlPoint_x = startPont_x + width;
    secondControlPoint_y = startPont_y - height;

    thirdControlPoint_x = startPont_x + width;
    thirdControlPoint_y = startPont_y - height + diff;

    fourthControlPoint_x = startPont_x;
    fourthControlPoint_y = startPont_y - height + diff;

    target_x = startPont_x + width;
    target_y = startPont_y;

    beginShape();

    vertex(startPont_x, startPont_y);
    bezierVertex(firstControlPoint_x, firstControlPoint_y, secondControlPoint_x, secondControlPoint_y, target_x, target_y);
    bezierVertex(thirdControlPoint_x, thirdControlPoint_y, fourthControlPoint_x, fourthControlPoint_y, startPont_x, startPont_y);

    endShape();
    //    line(startPont_x, startPont_y, firstControlPoint_x, firstControlPoint_y);
    //    line(firstControlPoint_x, firstControlPoint_y, secondControlPoint_x, secondControlPoint_y);
    //    line(secondControlPoint_x, secondControlPoint_y, target_x, target_y);
    line(target_x, target_y, thirdControlPoint_x, thirdControlPoint_y);
    line(thirdControlPoint_x, thirdControlPoint_y, fourthControlPoint_x, fourthControlPoint_y);
    line(fourthControlPoint_x, fourthControlPoint_y, startPont_x, startPont_y);

}

function draw() {

}

function curveBetween(x1, y1, x2, y2, d, h, flip) {
    //possibly there are some extraneous steps here, I am still getting used to thinking with vectors! -NF

    //find two control points off this line
    var original = p5.Vector.sub(createVector(x2, y2), createVector(x1, y1));
    var inline = original.copy().normalize().mult(original.mag() * d);
    var rotated = inline.copy().rotate(radians(90) + flip * radians(180)).normalize().mult(original.mag() * h);
    var p1 = p5.Vector.add(p5.Vector.add(inline, rotated), createVector(x1, y1));
    //line(x1, y1, p1.x, p1.y); //show control line
    rotated.mult(-1);
    var p2 = p5.Vector.add(p5.Vector.add(inline, rotated).mult(-1), createVector(x2, y2));
    //line(x2, y2, p2.x, p2.y); //show control line

    bezier(x1, y1, p1.x, p1.y, p2.x, p2.y, x2, y2)
}