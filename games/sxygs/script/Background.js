function Background() {
	base(this,LSprite,[]);
	this.init();
}
Background.prototype.init = function() {
	var self = this;

	$("html").css("background", "url(style/img_d/tile.jpg) repeat");
	$("#mask").css("display", "none");
	self.backgroundTopBitmapData = new LBitmapData(dataList["background"]);
	self.backgroundTopBitmap = new LBitmap(self.backgroundTopBitmapData);
	self.backgroundTopBitmap.x = 0;
	self.backgroundTopBitmap.y = 0;
	self.addChild(self.backgroundTopBitmap);

};
Background.prototype.onframe = function(event) {
	var self = event.target;
	self.sprite.onframe();
}

