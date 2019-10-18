function Score() {
	base(this,LSprite,[]);
	this.init();
}
Score.prototype.init = function() {
	var self = this;
	self.hooksNumber = HOOKS_NUMBER;
	self.score = 0;

	var scoreBoardBitmapData = new LBitmapData(dataList["score_board"],0,0,258,58);
	var scoreBoardBitmap = new LBitmap(scoreBoardBitmapData);
	scoreBoardBitmap.x = 374;
	scoreBoardBitmap.y = 85;
	self.addChild(scoreBoardBitmap);

	var theTextField = new LTextField();
	theTextField.color = "#ffffff";
	theTextField.size = 20;
	theTextField.x = 410;
	theTextField.y = 100;
	theTextField.weight = "bolder";
	theTextField.font = "黑体";
	self.theTextField = theTextField;
	self.addChild(theTextField);

	self.hooks = new LSprite();
	self.scoreHookBitmapData = new LBitmapData(dataList["score_hook"],0,0,42,78);
	self.addChild(self.hooks);

	// self.sFace = new LSprite();
	// self.faceNormalBitmapData = new LBitmapData(dataList["face_normal"],0,0,0,0);
	// self.faceHappyBitmapData  = new LBitmapData(dataList["face_happy"]);
	// self.faceSadBitmapData = new LBitmapData(dataList["face_sad"]);
	// self.faceBitmap = new LBitmap(self.faceNormalBitmapData);
	// self.sFace.x = 80;
	// self.sFace.y = 35;
	// // self.sFace.scaleX = 0.5;
	// // self.sFace.scaleY = 0.5;
	// self.sFace.addChild(self.faceBitmap);
	// self.addChild(self.sFace);

	gScore = self.score;
	self.showScore(self.score);
	self.showHooks(self.hooksNumber);
	self.setFace("normal");
};
Score.prototype.addScore = function(stype, fish) {
	var self = this;
	var getScore = 0;
	if(stype == "l") {
		getScore = 100;
	} else if(stype == "m") {
		getScore = 300;
	} else if(stype == "s") {
		getScore = 500;
	}
	self.score += getScore;
	self.showScoreTips(getScore, fish);
	gScore = self.score;
	self.showScore(self.score);

	self.setFace("happy");
}
Score.prototype.addHook = function(number) {
	var self = this;
	self.hooksNumber += number;
	self.showHooks(self.hooksNumber);
	if(self.hooksNumber <= 0) {
		gameOver();
	}
	if(number < 0) {
		self.setFace("sad");
	}
}
Score.prototype.showScoreTips = function(score, fish) {
	var self = this;
	var scoreTips = new LTextField();
	scoreTips.color = "#fffd71";
	scoreTips.size = 30;
	scoreTips.x = fish.x;
	scoreTips.x = Util.correctInRange(fish.x, 100, LGlobal.width-100);
	scoreTips.y = fish.y;
	scoreTips.text = "+" + score;
	scoreTips.weight = "bolder";
	scoreTips.font = "黑体";
	scoreTips.textAlign = "center";
	self.parent.addChild(scoreTips);
	LTweenLite.to(scoreTips, 0.5, {size:50, ease:LEasing.Sine.easeInOut, onComplete:function() {
		self.parent.removeChild(scoreTips);
	}});

}
Score.prototype.showScore = function(score) {
	var self = this;
	var s = "分数：" + score.toString();
	self.theTextField.text = s;
}
Score.prototype.showHooks = function(number) {
	var self = this;
	var originalHooksNumber = self.hooks.childList.length;
	if(number > originalHooksNumber) {
		for(var i = 0; i < number-originalHooksNumber; i++) {
			var scoreHookBitmap = new LBitmap(self.scoreHookBitmapData);
			scoreHookBitmap.x = LGlobal.width-(i+originalHooksNumber+1)*(self.scoreHookBitmapData.width*1.2);
			scoreHookBitmap.y = 0;
			self.hooks.addChild(scoreHookBitmap);
		}
	} else if(number < originalHooksNumber) {
		for(var i = 0; i < originalHooksNumber-number; i++) {
			Util.fadeOut(self.hooks.childList[self.hooks.childList.length-1], 1, function() {
				self.hooks.removeChildAt(self.hooks.childList.length-1);
			});
		}
	}
}
Score.prototype.setFace = function(stype) {
	// var self = this;
	// if(self.setFaceTimeout) {
	// 	clearTimeout(self.setFaceTimeout);
	// 	self.setFaceTimeout = null;
	// }
	// if(stype == "happy") {
	// 	self.faceBitmap = new LBitmap(self.faceHappyBitmapData);
	// } else if(stype == "sad") {
	// 	self.faceBitmap = new LBitmap(self.faceSadBitmapData);
	// } else {
	// 	self.faceBitmap = new LBitmap(self.faceNormalBitmapData);
	// }
	// self.sFace.removeAllChild();
	// self.sFace.addChild(self.faceBitmap);
	// if(stype != "normal") {
	// 	self.setFaceTimeout = setTimeout(function() {
	// 		self.setFace.call(self, "normal");
	// 	}, 2000);
	// }
}
