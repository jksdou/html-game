function Schedule() {
	base(this,LSprite,[]);
	this.init();
}
Schedule.prototype.init = function() {
	var self = this;

	gScore = self.timeRemain = self.totalTime = 0;

	var theTextField = new LTextField();
	theTextField.color = "#953c00";
	theTextField.size = 26;
	theTextField.x = LGlobal.width*.15;
	theTextField.y = LGlobal.height*.025;
	theTextField.font = "微软雅黑";
	theTextField.text = self.totalTime.toFixed(1);
	self.theTextField = theTextField;
	self.addChild(theTextField);

	var startTime = currentTime = new Date();
	self.loop = setInterval(function() {
		currentTime = new Date();
		var time = parseInt((currentTime - startTime)/10);
		// self.totalTime += 1;
		// self.theTextField.text = ((gTime-self.totalTime)/100).toFixed(2);
		self.timeRemain = ((gTime-time)/100);
		self.theTextField.text = self.timeRemain.toFixed(2);
		if(time >= gTime){
			self.theTextField.text = (0).toFixed(2);
			self.timeRemain = 0;
			self.parent.gameOver();
		}
	}, 10);

	// LTweenLite.to(object, duration, {alpha:0, ease:LEasing.Sine.easeOut, onComplete:callback});

	self.addEventListener(LEvent.END_CONTACT, self.onremoved);
};

Schedule.prototype.stop = function(){
	var self = this;
	clearInterval(self.loop);
}

Schedule.prototype.onremoved = function() {
	var self = this;
	clearInterval(self.loop);
}

Schedule.prototype.getTimeRemain = function() {
	var self = this;
	return self.timeRemain;
}

