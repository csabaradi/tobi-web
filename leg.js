function Leg(x, y) {

    this.x = x;
    this.y = y;
    //    this.gravity = 0.6;
    this.gravity = 0.3;
    //    this.lift = -15;
    this.lift = -25;
    this.velocity = 0;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 10, 10);
    };

    this.up = function() {
        this.velocity += this.lift;
    };

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y >= height - 40) {
            this.up();
        }

        if (this.y <= 0) {
            this.y = 0;
            this.velocity = 0;
        }

    };


    this.curveTo = function(l) {

        var cps = this.getControlPoints(l);

        beginShape();

        stroke(255, 102, 0);
        vertex(this.x, this.y);
        //line(this.x, this.y, cps[0][0], cps[0][1]);
        //line(cps[1][0], cps[1][1], l.x, l.y);
        bezierVertex(cps[0][0], cps[0][1], cps[1][0], cps[1][1], l.x, l.y);
        // (this-implicitly set) -> firstControlPoint
        // secondControlPoint -> target

        //line(l.x, l.y, cps[2][0], cps[2][1]);
        //line(cps[3][0], cps[3][1], this.x, this.y);
        bezierVertex(cps[2][0], cps[2][1], cps[3][0], cps[3][1], this.x, this.y);
        // (target-implicitly set) -> thirdControlPoint
        // fourthControlPoint -> this

        endShape();

    };

    // the bezierVertex function expects an implicit starting point and 3 new control points as parameters
    // 1 - starting point
    // 2 - first control point
    // 3 - second contrel point
    // 4 - end point
    // given that we want a curve with growing height we create to curves to the target leg, then back to this leg
    this.getControlPoints = function(legB) {

        // heigh variable allready exists it is the height of the canvas
        vheight = abs(this.y - legB.y);

        ddiff = 10;

        return [
            [this.x, this.y - vheight],
            [legB.x, legB.y - vheight],
            [legB.x, legB.y - vheight + ddiff],
            [this.x, this.y - vheight + ddiff]
        ];

    };
}