function Background() {
	base(this,LSprite,[]);
	this.init();
}
Background.prototype.init = function() {
	var self = this;

	self.backgroundBitmapData = new LBitmapData(dataList["background"],0,0,640,960);
	self.backgroundBitmap = new LBitmap(self.backgroundBitmapData);
	self.backgroundBitmap.x = 0;
	self.backgroundBitmap.y = 0;
	self.addChild(self.backgroundBitmap);

	self.addShape(LShape.RECT, [0,LGlobal.height,LGlobal.width,1]);
	self.addShape(LShape.RECT, [-1,0,1,LGlobal.height]);
	self.addShape(LShape.RECT, [LGlobal.width,0,1,LGlobal.height]);

	self.bubbleBitmapData = new LBitmapData(dataList["bubble"],0,0,640,960);
	self.setBubbles(10);
};
Background.prototype.setBubbles = function(number) {
	var self = this;
	for(var i = 0; i < number; i++) {
		self.bubbleBitmap = new LBitmap(self.bubbleBitmapData);
		self.bubbleBitmap.x = Util.randomInRange(0, (620-20)/number)+20+i*(620-20)/number;
		self.bubbleBitmap.y = Util.randomInRange(600, 930);
		self.addChild(self.bubbleBitmap);
		self.bubbleBitmap.originalY = self.bubbleBitmap.y;
		self.bubbleBitmap.originalX = self.bubbleBitmap.x;
		self.bubbleBitmap.originalScale = Util.randomInRange(0.8, 1.2);
		self.bubbleBitmap.scaleX = self.bubbleBitmap.scaleY = self.bubbleBitmap.originalScale;
		(function() {
			var object = self.bubbleBitmap;
			object.alpha = 0;
			setTimeout(function() {
				object.alpha = 1;
				self.bubble1(object, Util.randomInRange(4, 10));
			}, Util.randomInRange(0, 4000));
		})();
	}
}
Background.prototype.bubble = function(object, direction) {
	var self = this;
	var target = {};
	target.y = object.y - 150;
	if(target.y < 160) target.y = 160;
	target.x = object.x+direction*50;
	target.scale = object.scaleX+0.1
	LTweenLite.to(object, 1, {y:target.y, x:target.x, scaleX:target.scale, scaleY:target.scale, ease:LEasing.None.easeOut, onComplete:function() {
		if(target.y<=160) {
			object.y = object.originalY;
			object.x = object.originalX;
			object.scaleX = object.scaleY = 1;
		}
		self.bubble(object, -direction); 
	}});
}
Background.prototype.bubble1 = function(object, duration) {
	LTweenLite.to(object, duration, {y:Util.randomInRange(160, 200), scaleX:object.originalScale*1.6, scaleY:object.originalScale*1.6, alpha:0.7, loop:true, ease:LEasing.None.easeOut, onComplete:function() {
		object.y = object.originalY; 
		object.scaleX = object.scaleY = object.originalScale;
		object.alpha = 1;
	}});
}
