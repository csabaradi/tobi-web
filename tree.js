function Tree(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;

    this.update = function() {
        this.x += this.speed;

    };

    this.show = function() {
        fill(156);

        this.loopTree(this.x, this.y);

    };

    this.loopTree = function(x, y) {
        //line(0, height / 2, width, height / 2);
        //line(width / 3, 0, width / 3, height);

        var anx = width - this.x % width;

        switch (y) {
            case 1:
                if (anx % width < width / 3) {
                    line(anx, height / 2 + anx, anx, height / 2 - anx);
                    ellipse(anx, height / 2 - anx, 30, 15);
                } else if ((anx % width >= width / 3) || (anx % width <= width)) {
                    line(anx, height / 6 + (anx - width / 3) / 2, anx, 5 * height / 6 - (anx - width / 3) / 2);
                    ellipse(anx, height / 6 + (anx - width / 3) / 2, 30, 15);
                }

                break;
            case 2:
                if (anx % width < width / 3) {
                    line(anx, height / 2 + 3 * anx / 4, anx, height / 2 - 3 * anx / 4);
                    ellipse(anx, height / 2 - 3 * anx / 4, 30, 15);
                } else if ((anx % width >= width / 3) || (anx % width <= width)) {
                    line(anx, height / 4 + 3 * (anx - width / 3) / 8, anx, 3 * height / 4 - 3 * (anx - width / 3) / 8);
                    ellipse(anx, height / 4 + 3 * (anx - width / 3) / 8, 30, 15);
                };
                break;
            default:
                if (anx % width < width / 3) {
                    line(anx, height / 2 + anx / 2, anx, height / 2 - anx / 2);
                    ellipse(anx, height / 2 - anx / 2, 30, 15);
                } else if ((anx % width >= width / 3) || (anx % width <= width)) {
                    line(anx, height / 3 + (anx - width / 3) / 4, anx, 2 * height / 3 - (anx - width / 3) / 4);
                    ellipse(anx, height / 3 + (anx - width / 3) / 4, 30, 15);
                };
        };

    };

};