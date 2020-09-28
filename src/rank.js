class rank{
	constructor(arg) {
	   this.rank=1 ;
	}
	show(){
		this.ctx.fillStyle="red";
		this.ctx.font="20px 微软雅黑";
		this.ctx.fillText("得分："+this.rank.toString().padStart(5, '0'),500,50);
	}
	change(){
		this.rank++;
	}
	
}