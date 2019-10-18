function SoundPlayer(){
	base(this,LSprite,[]);
	this.init();
}
SoundPlayer.prototype.init = function() {
	var self = this;
	self.background = new LSound();
	background = self.background;
	self.background.parent = self;
	self.loadSound();
	// self.addEventListener(LEvent.REMOVED, self.onremoved);
}
SoundPlayer.prototype.onremoved = function() {
	console.log("aaaa");
	self.background.removeAllEventListener();
}
SoundPlayer.prototype.loadSound = function(){
	var self = this;
	self.backgroundLoad();
};
SoundPlayer.prototype.backgroundLoad = function(){
	var self = this;
	self.background.addEventListener(LEvent.COMPLETE,self.backgroundLoadComplete);
	self.background.load("./media/music.ogg");
};
SoundPlayer.prototype.backgroundLoadComplete = function(event){
	var self = event.currentTarget;
	self.parent.backgroundIsLoad = true;
	self.parent.setSwitcher();
	self.parent.setState("play");
};
SoundPlayer.prototype.setState = function(state) {
	var self = this;
	if(state == "play") {
		self.background.play();
		self.background.loopLength = 1000;
		self.switcherBitmap = new LBitmap(self.switcherOnBitmapData);
	} else {
		self.background.stop();
		self.switcherBitmap = new LBitmap(self.switcherOffBitmapData);
	}
	self.switcher.removeAllChild();
	self.switcher.addChild(self.switcherBitmap);
	self.state = state;
}
SoundPlayer.prototype.toggleState = function(event) {
	var self = event.target.parent.parent;
	if(self.state == "play") {
		self.setState("stop");
	} else {
		self.setState("play");
	}
}
SoundPlayer.prototype.setSwitcher = function() {
	var self = this;
	self.switcher = new LSprite();
	self.switcherOnBitmapData = new LBitmapData(dataList["sound_on"]);
	self.switcherOffBitmapData = new LBitmapData(dataList["sound_off"]);
	self.switcherBitmap = new LBitmap(self.switcherOnBitmapData);
	self.switcher.addChild(self.switcherBitmap);
	// self.switcher.x = LGlobal.width/2-switcherBitmap.width/2;
	// self.switcher.y = LGlobal.height*0.62;
	self.switcher.x = 10;
	self.switcher.y = 10;
	self.addChild(self.switcher);
	self.alpha = 0;
	Util.fadeIn(self, 1);

	self.switcher.addEventListener(LMouseEvent.MOUSE_DOWN, self.toggleState);

	;~function() {
		var isMobile = (/mobile|Mobile/gi).test(navigator.userAgent);
		var blur = function() {
			self.lastState = self.state;
			self.setState("stop");
		};
		var focus = function() {
			self.setState(self.lastState);
		}
		if(isMobile) {
			window.addEventListener("pageshow", focus);
			window.addEventListener("pagehide", blur)
		} else {
			window.addEventListener("focus", focus);
			window.addEventListener("blur", blur);
		}
	}();
}
