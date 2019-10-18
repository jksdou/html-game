function Hook() {
	base(this,LSprite,[]);
	this.init();
}
Hook.prototype.init = function() {
	var self = this;
	self.hookBitmapData = new LBitmapData(dataList["hook"],0,0,57,1100);
	self.hookBitmap = new LBitmap(self.hookBitmapData);
	self.hookBitmap.x = -27.5;
	self.hookBitmap.y = -822;
	self.x = LGlobal.width/2;
	self.y = 0;
	self.addChild(self.hookBitmap);

	// self.graphics.drawVertices(0,"#880088", [[26-26,194],[3-26,237],[4-26,264],[30-26,277],[50-26,268],[51-26,242],[40-26,196]], true, "#880088");
	self.addShape(LShape.VERTICES, [[26-26,194],[3-26,237],[4-26,264],[30-26,277],[50-26,268],[51-26,242],[40-26,196]])
	self.direction = -1;
	self.isShooting = false;
	self.addEventListener(LEvent.ENTER_FRAME, self.onframe);	
	self.addEventListener(LMouseEvent.MOUSE_DOWN, self.onmousedown);	
};
Hook.prototype.onframe = function(event) {
	var self = event.target;
	if(!self.isShooting) {
		self.rotate += self.direction * 1.5;
		if(Math.abs(self.rotate)>35) {
			self.direction = -self.direction;
		}
	} else {
		var r = self.rotate/180*Math.PI;
		var v = 20;
		self.x -= v*Math.sin(r)*self.shootDirection;
		self.y += v*Math.cos(r)*self.shootDirection;
		if(self.hitTestObject(self.parent.getChildByName("background"))) {
			self.shootDirection = -1;
		}
		if(!self.hasGotFish) {
			for(var i = 0; i < self.fishManager.childList.length; i++) {
				if(self.hitTestObject(self.fishManager.childList[i])) {
					self.fishOnHook = self.fishManager.childList[i];
					self.fishOnHook.beHooked();
					self.fishOnHook.rotate = self.rotate+90+(self.fishOnHook.motion.direction==0?0:180);
					self.shootDirection = -1;
					self.hasGotFish = true;
					self.parent.getChildByName("score").addScore(self.fishOnHook.stype, self.fishOnHook);
					break;
				}
			}
		} else {
			self.fishOnHook.x = self.x-270*Math.sin(r);
			self.fishOnHook.y = self.y+270*Math.cos(r);
		}
		if(self.y <= 0) {
			self.isShooting = false;
			self.x = LGlobal.width/2;
			self.y = 0;
			if(self.fishOnHook) {
				self.fishOnHook.remove();
				self.fishOnHook.die();
				self.fishOnHook = null;
			} else {
				self.parent.getChildByName("score").addHook(-1);
			}
		}
	}
}
Hook.prototype.onmousedown = function(event) {
	var self = event.target;
}
Hook.prototype.shoot = function() {
	var self = this;
	if(!self.isShooting) {
		self.isShooting = true;
		self.shootDirection = 1;
		self.fishManager = self.parent.getChildByName("fishManager");
		self.hasGotFish = false;
	}
}

