function GameOver(){
	base(this,LSprite,[]);
	this.init();
}
GameOver.prototype.init = function(){
	var self = this;

	// var backgroundBitmapData = new LBitmapData(dataList["background"],0,0,640,960);
	// var backgroundBitmap = new LBitmap(backgroundBitmapData);
	// self.addChild(backgroundBitmap);
	// p
	var background = new Background();
	background.name = "background";
	self.addChild(background);

	var shareBitmapData = new LBitmapData(dataList["share"]);
	var shareBitmap = new LBitmap(shareBitmapData);
	shareBitmap.x = LGlobal.width-shareBitmap.width;
	shareBitmap.y = 0;
	shareBitmap.alpha = 0;
	Util.fadeIn(shareBitmap, 1);
	self.addChild(shareBitmap);

	var hook = new LSprite();
	var hookBitmapData = new LBitmapData(dataList["hook"],0,0,57,1100);
	var hookBitmap = new LBitmap(hookBitmapData);
	hookBitmap.x = -27.5;
	hookBitmap.y = -822;
	hook.x = LGlobal.width/2;
	hook.y = 0;
	hook.addChild(hookBitmap);
	self.addChild(hook);

	var logoBitmapData = new LBitmapData(dataList["logo"],0,0,640,960);
	var logoBitmap = new LBitmap(logoBitmapData);
	logoBitmap.x = LGlobal.width/2-logoBitmap.width/2;
	logoBitmap.y = LGlobal.height*0.87;
	logoBitmap.alpha = 0;
	Util.fadeIn(logoBitmap, 1);
	self.addChild(logoBitmap);
	// Util.sFloat(logoBitmap, 0.7);
	

	self.continueBtn = new LSprite();
	var continueBtnBitmapData = new LBitmapData(dataList["continue_btn"]);
	var continueBtnBitmap = new LBitmap(continueBtnBitmapData);
	self.continueBtn.addChild(continueBtnBitmap);
	self.continueBtn.x = LGlobal.width/2+continueBtnBitmap.width*0.1;
	self.continueBtn.y = LGlobal.height*0.55;
	self.continueBtn.alpha = 0;
	Util.fadeIn(self.continueBtn, 1);
	self.addChild(self.continueBtn);
	Util.sFloat(self.continueBtn, 0.7);

	self.moreBtn = new LSprite();
	var moreBtnBitmapData = new LBitmapData(dataList["more_btn"]);
	var moreBtnBitmap = new LBitmap(moreBtnBitmapData);
	self.moreBtn.addChild(moreBtnBitmap);
	self.moreBtn.x = LGlobal.width/2-moreBtnBitmap.width*1.1;
	self.moreBtn.y = LGlobal.height*0.55;
	self.moreBtn.alpha = 0;
	Util.fadeIn(self.moreBtn, 1);
	self.addChild(self.moreBtn);
	Util.sFloat(self.moreBtn, 0.7);

	var scoreTextField = new LTextField();
	scoreTextField.color = "#fffd71";
	scoreTextField.size = 48;
	scoreTextField.x = LGlobal.width/2;
	scoreTextField.y = LGlobal.height*0.3;
	scoreTextField.textAlign = "center";
	scoreTextField.weight = "bolder";
	scoreTextField.text = "得分:" + gScore.toString();
	scoreTextField.font = "黑体";
	self.scoreTextField = scoreTextField;
	self.scoreTextField.alpha = 0;
	Util.fadeIn(self.scoreTextField, 1);
	self.addChild(scoreTextField);

	var highScoreFlag = false;
	try {
		if(gScore > gHighScore) {
			gHighScore = localStorage["fishinglegendHighScore"] = gScore;
			highScoreFlag = true;
		}
	} catch(e) {}

	var highScoreTextField = new LTextField();
	highScoreTextField.color = "#fffd71";
	highScoreTextField.size = 36;
	highScoreTextField.x = LGlobal.width/2;
	highScoreTextField.y = LGlobal.height*0.4;
	highScoreTextField.textAlign = "center";
	highScoreTextField.weight = "bolder";
	highScoreTextField.text = "最高:" + gHighScore.toString();
	highScoreTextField.font = "黑体";
	self.highScoreTextField = highScoreTextField;
	self.highScoreTextField.alpha = 0;
	Util.fadeIn(self.highScoreTextField, 1);
	self.addChild(highScoreTextField);

	self.continueBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onContinueBtnDown);
	self.moreBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onMoreBtnDown);
	// updateShare(gScore);Play68.setRankingScoreDesc(gScore);
	//dp_submitScore(gScore);
};
GameOver.prototype.onContinueBtnDown = function(event) {
	gameStart();
}
GameOver.prototype.onMoreBtnDown = function(event) {
	//clickMore();
	 Play68.goHome();
}