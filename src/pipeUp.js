var pipeUpimg = new Image();
pipeUpimg.src = "./img/pipeUp.png";
class pipeUp {
    constructor() {
        this.img = pipeUpimg;

        this.ix = 0;
        this.iy1 = 400;
        this.iy2 = parseInt(Math.random() * 100) + 200;
        this.iy3 = parseInt(Math.random() * 100) + 200;
        this.iw = 52;
        this.ih1 = 420 - this.iy1;
        this.ih2 = 420 - this.iy2;
        this.ih3 = 420 - this.iy3;

        this.cx = 100;
        this.cx2 = 300;//+200
        this.cx3 = 550;//+300
        this.cy = 0;
        this.cw = 52;
        this.ch1 = this.ih1;
        this.ch2 = this.ih2;
        this.ch3 = this.ih3;

    }

    show() {
        // console.log(parseInt(this.r));
        this.ctx.drawImage(this.img, this.ix, this.iy1, this.iw, this.ih1, this.cx, this.cy, this.cw, this.ch1);
        this.ctx.drawImage(this.img, this.ix, this.iy2, this.iw, this.ih2, this.cx2, this.cy, this.cw, this.ch2);
        this.ctx.drawImage(this.img, this.ix, this.iy3, this.iw, this.ih3, this.cx3, this.cy, this.cw, this.ch3);
    }

    move() {
        this.cx -= 3;
        this.cx2 -= 3;
        this.cx3 -= 3;
        if (this.cx <= -52) {
            this.cx = 672;
            this.iy1 = parseInt(Math.random() * 100) + 200;
            this.ih1 = 420 - this.iy1;
            this.ch1 = this.ih1;
        } else if (this.cx2 <= -52) {
            this.cx2 = 672;
            this.iy2 = parseInt(Math.random() * 100) + 200;
            this.ih2 = 420 - this.iy2;
            this.ch2 = this.ih2;
        } else if (this.cx3 <= -52) {
            this.cx3 = 672;
            this.iy3 = parseInt(Math.random() * 100) + 200;
            this.ih3 = 420 - this.iy3;
            this.ch3 = this.ih3;
        }
    }
}