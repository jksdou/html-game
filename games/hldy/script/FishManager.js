function FishManager() {
	base(this,LSprite,[]);
	this.init();
}
FishManager.prototype.init = function() {
	var self = this;
	self.setFishRule = 
		[{duration:30, period:1, speedInSecond:{min:4,max:7}}
		,{duration:20, period:1.5, speedInSecond:{min:3,max:5}}
		,{duration:-1, period:1.5, speedInSecond:{min:2,max:3}}
		];
	self.fishType = 
		[{
			stype:"l"
			,images:[{name:"l_1", width:336, height:84, frameNumber:4}
					,{name:"l_2", width:400, height:80, frameNumber:4}
					,{name:"l_3", width:480, height:82, frameNumber:4}
					,{name:"l_4", width:400, height:80, frameNumber:4}]
		},{
			stype:"m"
			,images:[{name:"m_1", width:280, height:70, frameNumber:4}
					,{name:"m_2", width:280, height:55, frameNumber:4}
					,{name:"m_3", width:240, height:80, frameNumber:4}]
		},{
			stype:"s"
			,images:[{name:"s_1", width:240, height:30, frameNumber:4}
					,{name:"s_2", width:280, height:50, frameNumber:4}]
		}];
	self.setTimeoutQueue = {};
	self.fishData = {};
	self.setFishData();
	self.setStep(0);
	self.setFish();

	self.frameCount = 0;

	self.addEventListener(LEvent.END_CONTACT, self.onremoved);
	// self.addEventListener(LEvent.ENTER_FRAME, self.onframe);	
};
FishManager.prototype.setFishData = function() {
	var self = this;
	for(var i in self.fishType) {
		for(var j in self.fishType[i].images) {
			var image = self.fishType[i].images[j];
			self.fishData[image["name"]] = new LBitmapData(dataList[image["name"]], 0, 0, Math.floor(image.width/image.frameNumber), image.height);
		}
	}
}
FishManager.prototype.setStep = function(newStep) {
	var self = this;
	self.currentStep = newStep;
	if (self.setFishRule[self.currentStep].duration != -1) {
		self.setTimeoutQueue["setStep"] = setTimeout(function() {
			self.setStep.call(self, self.currentStep+1)
		}, self.setFishRule[self.currentStep].duration*1000);
	}
};
FishManager.prototype.setFish = function() {
	var self = this;
	var step = self.currentStep;
	var options = {};
	var stypeIndex = Util.randomN(self.fishType.length);
	options.stype = self.fishType[stypeIndex].stype;
	options.image = self.fishType[stypeIndex].images[Util.randomN(self.fishType[stypeIndex].images.length)];
	options.motion = {
		frequency: Util.randomInRange(0.02, 0.03)
		,phase: Util.randomInRange(400, 900)
		,amplitude: Util.randomInRange(20, 30)
		,direction: Util.randomN(2)
		,speed: GAME_FPS*(LGlobal.width/Util.randomInRange(self.setFishRule[step].speedInSecond.min, self.setFishRule[step].speedInSecond.max))/1000
	}

	var fish = new Fish(options, self.fishData);
	self.addChild(fish);

	self.setTimeoutQueue["setStep"] = setTimeout(function() {
		self.setFish.call(self);
	}, self.setFishRule[step].period*1000);
}
FishManager.prototype.clearSetTimeoutQueue = function() {
	for(var i in self.setTimeoutQueue) {
		clearTimeout(self.setTimeoutQueue[i]);
	}
}
FishManager.prototype.onremoved = function() {
	self.clearSetTimeoutQueue();
}
FishManager.prototype.onframe = function() {
	self.frameCount += 1;
}
FishManager.prototype.setTimeoutByFrameCount = function(callback, interval) {

}

