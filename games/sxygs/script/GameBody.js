function GameBody(){
	base(this,LSprite,[]);
	this.init();
}
GameBody.prototype.init = function(){
	var self = this;
	self.gameover = false;

	LGlobal.align = LStageAlign.MIDDLE;
	LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	LSystem.screen(LStage.FULL_SCREEN);
	var background = new Background();
	background.name = "background";
	self.addChild(background);

	var schedule = self.schedule = new Schedule();
	schedule.name = "schedule";
	self.addChild(schedule);

	var numberManager = self.numberManager = new NumberManager();
	numberManager.name = "numberManager";
	self.addChild(numberManager);

	var nextNumberTips = new LTextField();
	nextNumberTips.color = "#953c00";
	nextNumberTips.size = 26;
	nextNumberTips.x = LGlobal.width*.54;
	nextNumberTips.y = LGlobal.height*.025;
	nextNumberTips.font = "微软雅黑";
	nextNumberTips.text = "1";
	self.nextNumberTips = nextNumberTips;
	self.addChild(nextNumberTips);

	var seriesCountTips = new LTextField();
	seriesCountTips.color = "#953c00";
	seriesCountTips.size = 26;
	seriesCountTips.x = LGlobal.width*.84;
	seriesCountTips.y = LGlobal.height*.025;
	seriesCountTips.font = "微软雅黑";
	seriesCountTips.text = "0";
	self.seriesCountTips = seriesCountTips;
	self.addChild(seriesCountTips);

	self.maxSeriesCount = 0;
	self.numberFound = 0;
	self.targetNumberFound = COLOR_MAP.positions.length;
	// self.targetNumberFound = 1;
	self.isGameOver = false;

	self.addEventListener(LMouseEvent.MOUSE_DOWN, self.onmousedown);
};
GameBody.prototype.updateNextTips = function(){
	var self = this;
	var number = self.numberManager.getNextNumber();
	var numberS = number +"";
	self.nextNumberTips.text = numberS;
	if(number > self.numberFound+1){
		self.numberFound = number-1;
	}
}
GameBody.prototype.updateSeriesCountTips = function(){
	var self = this;
	var number = self.numberManager.getSeriesCount();
	var numberS = number+"";
	self.seriesCountTips.text = numberS;
	if(number > self.maxSeriesCount){
		self.maxSeriesCount = number;
	}
}

GameBody.prototype.gameOver = function(){
	console.log("gameOver");
	var self = this;
	self.isGameOver = true;

	self.schedule.stop();

	var shape = new LShape();
	self.addChild(shape);
	shape.graphics.drawRect(0, "#000000", [0, 0, LGlobal.width, LGlobal.height], true, "#000000");
	shape.alpha = 0.5;
	$("#mask").css("display", "block");


	var overBoard = self.overBoard = new LSprite();
	var overBoardBitmapData = new LBitmapData(dataList["over_board"]);
	var overBoardBitmap = new LBitmap(overBoardBitmapData);
	overBoard.x = LGlobal.width*(.5)-overBoardBitmapData.width*.5;
	overBoard.y = 65;
	overBoard.addChild(overBoardBitmap);
	self.addChild(overBoard);

	gScore = (self.numberFound*100+self.maxSeriesCount*10)+parseInt(self.schedule.getTimeRemain()/45*100);
	var scoreText = self.scoreText = new LTextField();
	scoreText.color = "#ef4a10";
	scoreText.size = 40;
	scoreText.y = LGlobal.height*0.42;
	scoreText.weight = "bold"
	scoreText.font = "微软雅黑";
	scoreText.text = gScore+"";
	self.addChild(scoreText);
	scoreText.x = LGlobal.width*(.5+.19)-scoreText.getWidth()/2;

	var maxSeriesCountText = self.maxSeriesCountText = new LTextField();
	maxSeriesCountText.color = "#ef4a10";
	maxSeriesCountText.size = 40;
	maxSeriesCountText.y = LGlobal.height*0.42;
	maxSeriesCountText.weight = "bold"
	maxSeriesCountText.font = "微软雅黑";
	maxSeriesCountText.text = self.maxSeriesCount+"";
	self.addChild(maxSeriesCountText);
	maxSeriesCountText.x = LGlobal.width*(.5-.21)-maxSeriesCountText.getWidth()/2;

	var numberFoundText = self.numberFoundText = new LTextField();
	numberFoundText.color = "#ef4a10";
	numberFoundText.size = 46;
	numberFoundText.x = LGlobal.width*(.5-.09)-numberFoundText.getWidth()/2;
	numberFoundText.y = LGlobal.height*0.22;
	numberFoundText.weight = "bold"
	numberFoundText.font = "微软雅黑";
	numberFoundText.text = self.numberFound+"";
	self.addChild(numberFoundText);
	numberFoundText.x = LGlobal.width*(.5-.04)-numberFoundText.getWidth();

	var totalNumber = self.totalNumber = new LTextField();
	totalNumber.color = "#72490e";
	totalNumber.size = 46;
	totalNumber.x = LGlobal.width*(.5-.09)-totalNumber.getWidth()/2;
	totalNumber.y = LGlobal.height*0.22;
	totalNumber.weight = "bold"
	totalNumber.font = "微软雅黑";
	totalNumber.text = "/35";
	self.addChild(totalNumber);
	totalNumber.x = LGlobal.width*(.5+.05)-totalNumber.getWidth()/2;

	var continueBtn = self.continueBtn = new LSprite();
	var continueBtnBitmapData = new LBitmapData(dataList["continue_btn"]);
	var continueBtnBitmap = new LBitmap(continueBtnBitmapData);
	continueBtnBitmap.x = -continueBtnBitmapData.width*.5;
	continueBtnBitmap.y = -continueBtnBitmapData.height*.5;
	continueBtn.x = LGlobal.width*(.5-.21);
	continueBtn.y = continueBtnBitmapData.height*.5+LGlobal.height*.56;
	continueBtn.addChild(continueBtnBitmap);
	self.addChild(continueBtn);

	var shareBtn = self.shareBtn = new LSprite();
	var shareBtnBitmapData = new LBitmapData(dataList["share_btn"]);
	var shareBtnBitmap = new LBitmap(shareBtnBitmapData);
	shareBtnBitmap.x = -shareBtnBitmapData.width*.5;
	shareBtnBitmap.y = -shareBtnBitmapData.height*.5;
	shareBtn.x = LGlobal.width*(.5+.21);
	shareBtn.y = shareBtnBitmapData.height*.5+LGlobal.height*.56;
	shareBtn.addChild(shareBtnBitmap);
	self.addChild(shareBtn);

	var more = self.more = new LSprite();
	var moreBitmapData = new LBitmapData(dataList["more"]);
	var moreBitmap = new LBitmap(moreBitmapData);
	moreBitmap.x = -moreBitmapData.width*.5;
	moreBitmap.y = -moreBitmapData.height*.5;
	more.x = LGlobal.width*(.5);
	more.y = moreBitmapData.height*.5+LGlobal.height*.8;
	more.addChild(moreBitmap);
	self.addChild(more);

	self.continueBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onContinueBtnDown);
	self.shareBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onShareBtnDown);
	//self.more.addEventListener(/*LMouseEvent.MOUSE_DOWN, self.onMoreBtnDown*/"click", alert(1232455));
	//self.more.addEventListener("click", alert(1232455));

	self.share(self.numberFound, gScore);
}
GameBody.prototype.share = function(number, score) {
	var self = this;
	// updateShare(number,score);
	// Play68.setRankingLevelScoreDesc(number,score,Play68.rankingShowType.RANKING_SHOW);
}

GameBody.prototype.checkGameOver = function(){
	var self = this;
	if(self.numberFound >= self.targetNumberFound) {
		return true;
	}
	return false;
}

GameBody.prototype.onmousedown = function(event){
	var self = event.target.parent;
	if(!self.isGameOver) {
		offset = {x:parseInt(event.offsetX),y:parseInt(event.offsetY)};
		self.numberManager.hit(offset);
		self.updateNextTips();
		self.updateSeriesCountTips();
		if(self.checkGameOver()){
			self.gameOver();
		}
	}
}

GameBody.prototype.onContinueBtnDown = function(event) {
	gameStart();
}
GameBody.prototype.onShareBtnDown = function(event) {
	/*btGame.playShareTip();*/
}
GameBody.prototype.onMoreBtnDown = function(event) {
	/*window.location.href = btGame.URL.getMoreGame();*/
	//window.location.href="http://www.7724.com";
}

