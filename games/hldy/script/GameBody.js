function GameBody(){
	base(this,LSprite,[]);
	this.init();
}
GameBody.prototype.init = function(){
	var self = this;
	// self.moveStepCount = 0;
	self.gameover = false;

	var background = new Background();
	background.name = "background";
	self.addChild(background);

	var score = new Score();
	score.name = "score";
	self.addChild(score);

	var hook = new Hook();
	hook.name = "hook";
	self.addChild(hook);

	var fishManager = new FishManager();
	fishManager.name = "fishManager";
	self.addChild(fishManager);

	self.addShape(LShape.RECT, [0,0,LGlobal.width,LGlobal.height]);

	self.addEventListener(LMouseEvent.MOUSE_DOWN, self.onmousedown);	
};
GameBody.prototype.onmousedown = function(event) {
	var self = event.target;
	var hook = self.getChildByName("hook");
	hook.shoot();
}

