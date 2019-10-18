function Logo(){
	base(this,LSprite,[]);
	this.init();
}
Logo.prototype.init = function(){
	var self = this;

	$("html").css("background", "#f8ca8c");
	$("#mask").css("display", "none");
	var backgroundBitmapData = new LBitmapData(dataList["start_bg"]);
	var backgroundBitmap = new LBitmap(backgroundBitmapData);
	self.addChild(backgroundBitmap);

	self.startBtn = new LSprite();
	var startBtnBitmapData = new LBitmapData(dataList["start_btn"]);
	var startBtnBitmap = new LBitmap(startBtnBitmapData);
	self.startBtn.addChild(startBtnBitmap);
	self.startBtn.x = LGlobal.width/2-startBtnBitmap.width/2+5;
	self.startBtn.y = LGlobal.height*0.47;
	self.addChild(self.startBtn);
	// Util.sFloat(self.startBtn, 0.7);
	Util.fadeInOut(self.startBtn, 0.7, true, 0.8);

	self.alpha = 0;
	Util.fadeIn(self, 1);

	self.startBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onStartBtnDown);
};
Logo.prototype.onStartBtnDown = function() {
	gameStart();
}

