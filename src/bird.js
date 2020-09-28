var birdimg = new Image();
birdimg.src = "./img/bird.png";
class bird {
    constructor() {
        this.img = birdimg;

        this.ix = 0;
        this.iy = 0;
        this.iw = 52;
        this.ih = 45;
        
        this.cx = 10;
        this.cy = 100;
        this.cw = 52;
        this.ch = 45;

        this.speed = 0;
    }

    show() {
        this.ctx.drawImage(this.img, this.ix, this.iy, this.iw, this.ih, this.cx, this.cy, this.cw, this.ch);
    }

    move() {
        this.ix = this.ix + 52;
        if (this.ix > 104) {
            this.ix = 0;
        }
    }

    up() {
        this.speed = -18;
    }

    down() {
        this.speed += 2;
        this.cy += this.speed;
        if(this.cy >= 300) {
            this.cy = 300;
        }else if(this.cy <= 0) {
            this.cy = 0;
        }
    }
}