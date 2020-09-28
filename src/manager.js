class manager {
    constructor(arg) {
        Object.prototype.canvas = document.getElementById(arg);
        Object.prototype.ctx = document.getElementById(arg).getContext("2d");
        this.land = new land();
        this.sky = new sky();
        this.pipeUp = new pipeUp();
        this.bird = new bird();
        this.pipeDown = new pipeDown();
        this.rank = new rank();
    }

    play() {
        console.log(this);// this——>manager
        // 渲染
        this.t1 = setInterval(() => {
            canvas.width = canvas.width;
            this.sky.show();
            this.land.show();
            this.pipeUp.show();
            this.pipeDown.show();
            this.bird.show();
            this.isBoom();
            this.rank.show();
        }, 17);

        // 天空 大地移动
        this.t2 = setInterval(() => {
            this.sky.move();
            this.land.move();
        }, 45);

        // 小鸟飞
        this.t3 = setInterval(() => {
            this.bird.move();
        }, 100);

        // 小鸟下落
        this.t4 = setInterval(() => {
            this.bird.down();
        }, 50);

        // 上面的水管移动
        this.t5 = setInterval(() => {
            this.pipeUp.move();
        }, 45);

        // 下面的水管移动
        this.t6 = setInterval(() => {
            this.pipeDown.move();
        }, 45 );

        
        // 分数
        this.t7 = setInterval(() => {
            this.rank.change();
        }, 45);


    }

    // 小鸟向上飞
    up() {
        this.bird.up();
    }

    // 暂停
    stop() {
        clearInterval(this.t1);
        clearInterval(this.t2);
        clearInterval(this.t3);
        clearInterval(this.t4);
        clearInterval(this.t5);
        clearInterval(this.t6);
    }

    // 碰撞
    isBoom() {
        // 小鸟
        var x1 = this.bird.cx;
        var y1 = this.bird.cy;
        var w1 = this.bird.cw;
        var h1 = this.bird.ch;
        var obj1 = {
            x: x1 + w1 / 2, // 中心点的横坐标
            y: y1 + h1 / 2 // 中心点的纵坐标
        };

        // 下水管
        var x2cx = this.pipeDown.cx;
        var x2cx2 = this.pipeDown.cx2;
        var x2cx3 = this.pipeDown.cx3;

        var y2cy1 = this.pipeDown.cy1;
        var y2cy2 = this.pipeDown.cy2;
        var y2cy3 = this.pipeDown.cy3;

        var w2 = this.pipeDown.cw;

        var h2ch1 = this.pipeDown.ch1;
        var h2ch2 = this.pipeDown.ch2;
        var h2ch3 = this.pipeDown.ch3;
        var obj2 = {
            x1: x2cx + w2 / 2,
            y1: y2cy1 + h2ch1 / 2,

            x2: x2cx2 + w2 / 2,
            y2: y2cy2 + h2ch2 / 2,

            x3: x2cx3 + w2 / 2,
            y3: y2cy3 + h2ch3 / 2,
        };

        // 上水管
        var x3cx = this.pipeUp.cx;
        var x3cx2 = this.pipeUp.cx2;
        var x3cx3 = this.pipeUp.cx3;

        var y3 = this.pipeUp.cy;
        var w3 = this.pipeUp.cw;
        var h3ch1 = this.pipeUp.ch1;
        var h3ch2 = this.pipeUp.ch2;
        var h3ch3 = this.pipeUp.ch3;
        var obj3 = {
            x1: x3cx + w3 / 2,
            x2: x3cx2 + w3 / 2,
            x3: x3cx3 + w3 / 2,

            y1: y3 + h3ch1 / 2,
            y2: y3 + h3ch2 / 2,
            yy3: y3 + h3ch3 / 2
        };

        // 小鸟和下面水管第一个碰撞
        var resx1 = Math.abs(obj1.x - obj2.x1) <= (w1 - 16 + w2) / 2;
        var resy1 = Math.abs(obj1.y - obj2.y1) <= (h1 - 20 + h2ch1) / 2;

        //小鸟和下面水管第二个碰撞
        var resx2 = Math.abs(obj1.x - obj2.x2) <= (w1 - 16 + w2) / 2;
        var resy2 = Math.abs(obj1.y - obj2.y2) <= (h1 - 20 + h2ch2) / 2;

        //小鸟和下面水管第三个碰撞
        var resx3 = Math.abs(obj1.x - obj2.x3) <= (w1 - 16 + w2) / 2;
        var resy3 = Math.abs(obj1.y - obj2.y3) <= (h1 - 20 + h2ch3) / 2;

        // 小鸟和上面水管第一个碰撞
        var outx1 = Math.abs(obj1.x - obj3.x1) <= (w1 - 16 + w3) / 2;
        var outy1 = Math.abs(obj1.y - obj3.y1) <= (h1 - 20 + h3ch1) / 2;

        // 小鸟和上面水管第二个碰撞
        var outx2 = Math.abs(obj1.x - obj3.x2) <= (w1 - 16 + w3) / 2;
        var outy2 = Math.abs(obj1.y - obj3.y2) <= (h1 - 20 + h3ch2) / 2;

        // 小鸟和上面水管第三个碰撞
        var outx3 = Math.abs(obj1.x - obj3.x3) <= (w1 - 16 + w3) / 2;
        var outy3 = Math.abs(obj1.y - obj3.yy3) <= (h1 - 20 + h3ch3) / 2;


        if ((resx1 && resy1) || (resx2 && resy2) || (resx3 && resy3) || (outx1 && outy1) || (outx2 && outy2) || (outx3 && outy3)) {
            this.stop();
            this.ctx.font = "40px 幼圆";
            this.ctx.fillText(`游戏结束`, 300, 250);
        }

    }
}