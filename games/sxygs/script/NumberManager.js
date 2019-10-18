function NumberManager() {
	base(this,LSprite,[]);
	this.init();
}
NumberManager.prototype.init = function() {
	var self = this;

	self.colorMap = COLOR_MAP;
	self.colorMap.offset = {x:15,y:90};
	self.board = {x:15,y:90,width:616,height:856};
	self.targetList = Util.shuffle(Util.range(0,35));
	self.step = 0;
	self.setNumbers();
	self.seriesCount = 0;

	self.addEventListener(LEvent.END_CONTACT, self.onremoved);
};
NumberManager.prototype.setNumbers = function(){
	var self = this;
	self.targetListText = [];
	for(var i = 0; i < self.targetList.length; i++){
		var theTextField = new LTextField();
		theTextField.color = "#926f05";
		theTextField.size = 28;
		theTextField.text = (i+1)+"";
		theTextField.font = "微软雅黑";
		self.addChild(theTextField);
		theTextField.x = self.colorMap.positions[17][0]+self.board.x-theTextField.getWidth()*.5;
		theTextField.y = self.colorMap.positions[17][1]+self.board.y-theTextField.getHeight()*.6;
		theTextField.targetX = self.colorMap.positions[self.targetList[i]][0]+self.board.x-theTextField.getWidth()*.5;
		theTextField.targetY = self.colorMap.positions[self.targetList[i]][1]+self.board.y-theTextField.getHeight()*.6;

		LTweenLite.to(theTextField, 0.5, {x:theTextField.targetX, y:theTextField.targetY, loop:false, ease:LEasing.Sine.easeIn})
		self.targetListText.push(theTextField);
	}
}

NumberManager.prototype.isInBoard = function(point){
	var self = this;
	if(point.x > self.board.x
		&& point.y > self.board.y
		&& point.x < self.board.x+self.board.width
		&& point.y < self.board.y+self.board.height
	){
		return true;
	}
	return false;
}

NumberManager.prototype.getColorFromMap = function(point){
	var self = this;
	var x = parseInt(point.x/self.colorMap.rate);
	var y = parseInt(point.y/self.colorMap.rate);
	return self.colorMap.datalist[y*(parseInt(self.colorMap.wOriginal/self.colorMap.rate))+x]
}

NumberManager.prototype.isCorrect = function(color){
	var self = this;
	if(color == self.targetList[self.step]+1){
		return true;
	}
	return false;
}

NumberManager.prototype.dealCorrect = function(){
	var self = this;
	self.targetListText[self.step].color = "#cea95e"
	self.targetListText[self.step].isSelected = true;
	self.step++;
	self.seriesCount++;
}

NumberManager.prototype.dealWrong = function(color){
	var self = this;
	self.seriesCount = 0;
	if(color){
		console.log(color)
		var index = self.targetList.indexOf(color-1)
		var object = self.targetListText[index];	
		if(!object.isPlayingWrongTips){
			var duration = 0.2;
			var originalColor = object.color;
			var targetColor = "#ef4a10";
			object.color = targetColor;
			object.isPlayingWrongTips = true;
			LTweenLite.to(object, duration, {loop:false, ease:LEasing.None.easeIn, onComplete:function(){
				if(!object.isSelected){
					object.color = originalColor;
				}
			}})
			.to(object, duration, {loop:false, ease:LEasing.None.easeIn, onComplete:function(){
				if(!object.isSelected){
					object.color = targetColor;
				}
			}})
			.to(object, duration, {loop:false, ease:LEasing.None.easeIn, onComplete:function(){
				if(!object.isSelected){
					object.color = originalColor;
				}
				object.isPlayingWrongTips = false;
			}});
		}
	}
}

NumberManager.prototype.hit = function(point){
	var self = this;
	if(self.isInBoard(point)){
		pointInBoard = {x:point.x-self.board.x, y:point.y-self.board.y}
		var color = self.getColorFromMap(pointInBoard);
		if(self.isCorrect(color)){
			self.dealCorrect();
			return;
		}else{
			self.dealWrong(color)
		}
	}
	self.dealWrong();
}

NumberManager.prototype.getNextNumber = function(){
	var self = this;
	return (self.step+1);
}

NumberManager.prototype.getSeriesCount = function(){
	var self = this;
	return (self.seriesCount);
}

NumberManager.prototype.onremoved = function() {
	var self = this;
}

