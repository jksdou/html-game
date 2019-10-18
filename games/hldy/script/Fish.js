function Fish(options, fishData) {
	base(this,LSprite,[]);
	this.init(options, fishData);
}
Fish.SWIM = "swim";
Fish.prototype.init = function(options, fishData) {
	var self = this;
	self.stype = options.stype;
	var data = fishData[options.image.name];
	var list = LGlobal.divideCoordinate(options.image.width, options.image.height, 1, options.image.frameNumber);

	self.sprite = new LAnimationTimeline(data,list);
	self.sprite.setLabel(Fish.SWIM,0,0);
	self.sprite.scaleX = (options.motion.direction==0?1:-1);
	self.sprite.speed = Math.floor(GAME_FPS/options.motion.speed);
	// self.sprite.speed = 10;
	if(options.motion.direction==0) {
		self.sprite.x = -data.width/2;
		self.sprite.y = -data.height/2;
		// self.graphics.drawVertices(0,"#880088", [[-data.width/2,-data.height/2],[data.width/2,-data.height/2],[data.width/2,data.height/2],[-data.width/2,data.height/2]], true, "#880088");
	} else {
		self.sprite.x = data.width/2;
		self.sprite.y = -data.height/2;
		// self.graphics.drawVertices(0,"#880088", [[-data.width/2,-data.height/2],[data.width/2,-data.height/2],[data.width/2,data.height/2],[-data.width/2,data.height/2]], true, "#880088");
	}
	self.addShape(LShape.RECT, [-data.width/2,-data.height/2,data.width,data.height]);
	self.motion = options.motion;
	self.addChild(self.sprite);

	self.bodyWidth = data.width;
	self.hasBeenHooked = false;


	self.addEventListener(LEvent.ENTER_FRAME, self.onframe);	
	self.step = 0;
};
Fish.prototype.onframe = function(event) {
	var self = event.target;
	self.sprite.onframe();
	if(!self.hasBeenHooked) {
		self.step++;
		if (self.motion.direction == 0) {
			self.x = LGlobal.width+self.bodyWidth/2 - self.motion.speed*self.step;
		} else {
			self.x = self.motion.speed*self.step - self.bodyWidth/2;
		}
		self.y = self.motion.amplitude * Math.sin(self.x*self.motion.frequency) + self.motion.phase;
		if (self.x > LGlobal.width+Math.abs(self.bodyWidth) || self.x < -Math.abs(self.bodyWidth)) {
			setTimeout(function() {
				self.remove();
				self.die();
			}, 0);
		}
	}
}
Fish.prototype.beHooked = function() {
	var self = this;
	self.hasBeenHooked = true;
}

