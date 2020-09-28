var landimg = new Image();
landimg.src = "./img/land.png";
class land {
    constructor(arg) {
        this.img = landimg;

        this.ix = 0;
        this.iy = 0;
        this.iw = 336;
        this.ih = 70;
        this.cx = 0;
        this.cx2 = 336;
        this.cx3 = 336 + 336;
        this.cy = 600 - 70;
        this.cw = 336;
        this.ch = 70;
    }

    show() {
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx, this.cy, this.cw, this.ch);
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx2, this.cy, this.cw, this.ch);
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx3, this.cy, this.cw, this.ch);
    }

    move() {
        this.cx -= 3;
        this.cx2 -= 3;
        this.cx3 -= 3;
        if (this.cx <= -336) {
            this.cx = 0;
            this.cx2 = 336;
            this.cx3 = 336 + 336;
        }
    }
}