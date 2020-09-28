var pipeDownimg = new Image();
pipeDownimg.src = "./img/pipeDown.png";
class pipeDown {
    constructor() {
        this.img = pipeDownimg;

        this.ix = 0;
        this.iy = 0;
        this.iw = 52;
        //this.ih = 420;
        this.ih1 = parseInt(Math.random() * 300 + 30);//截取高度，需要变化
        this.ih2 = parseInt(Math.random() * 300 + 30);
        this.ih3 = parseInt(Math.random() * 300 + 30);

        this.cx = 200;
        this.cx2 = 400;//+200
        this.cx3 = 700;//+300
        this.cy1 = this.canvas.height - 70 - this.ih1;
        this.cy2 = this.canvas.height - 70 - this.ih2;
        this.cy3 = this.canvas.height - 70 - this.ih3;
        this.cw = 52;
        this.ch1 = this.ih1;
        this.ch2 = this.ih2;
        this.ch3 = this.ih3;
    }

    show() {
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih1, this.cx, this.cy1, this.cw, this.ch1);
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih2, this.cx2, this.cy2, this.cw, this.ch2);
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih3, this.cx3, this.cy3, this.cw, this.ch3);
    }

    move() {
        this.cx -= 3;
        this.cx2 -= 3;
        this.cx3 -= 3;
        if (this.cx <= -52) {
            this.cx = 672;
            this.ih1 = parseInt(Math.random() * 300 + 30);
            this.cy1 = this.canvas.height - 70 - this.ih1;
            this.ch1 = this.ih1;
        }else if (this.cx2 <= -52) {
            this.cx2 = 672;
            this.ih2 =parseInt(Math.random() * 300 + 30);
            this.cy2 = this.canvas.height - 70 - this.ih2;
            this.ch2 = this.ih2;
        } else if (this.cx3 <= -52) {
            this.cx3 = 672;
            this.ih3 =parseInt(Math.random() * 300 + 30);
            this.cy3 = this.canvas.height - 70 - this.ih3;
            this.ch3 = this.ih3;
        }
    }
}