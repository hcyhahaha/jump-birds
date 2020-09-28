var skyimg = new Image();
skyimg.src = "./img/sky.png";
class sky {
    constructor(arg) {
        this.img = skyimg;

        this.ix = 0;
        this.iy = 0;
        this.iw = 672;
        this.ih = 569;
        this.cx = 0;
        this.cx2 = 672;
        this.cy = 0;
        this.cw = 672;
        this.ch = 569;
    }

    show() {
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx, this.cy, this.cw, this.ch);
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx2, this.cy, this.cw, this.ch);
    }

    move() {
        this.cx -= 3;
        this.cx2 -= 3;
        if (this.cx <= -672) {
            this.cx = 0;
            this.cx2 = 672;
        }
    }
}