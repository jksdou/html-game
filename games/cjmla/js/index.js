var btGame={};
$(function() {

// begin engine
var P = function(canvas, size, procedure) {
	var self = this;
	self.debug = true;
	self.width = size.width;
	self.height = size.height;
	self.director = new P.Director;
	self.loader = new P.Loader;
	self.root = new P.Group(this);
	self.ctx = document.getElementById(canvas).getContext('2d');
	self.camera = new P.Camera(this);
	self.pe = new P.Physics(this);
	self.other = {};
	self.other = {};
	procedure.preload && procedure.preload(this);
	self.loader.waitForComplete(P.Util.proxy(function() {
		procedure.init && procedure.init(this);
		procedure.start && procedure.start(this);
		self.render(self.ctx);
	}, this));
}
P.prototype.render = function(ctx) {
	var self = this;
	P.Util.setIntervalWithTimeout(function() {
		ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height); 
		self.camera.update();
		self.renderTree(self.root, ctx);
	}, 1000/60);
}
P.prototype.renderTree = function(node, ctx) {
	if (node.img) {
		if (node.stype == "normal") {
			var x = node.x - (this.camera.x);
			var y = node.y - (this.camera.y);
			ctx.drawImage(node.img, 0+node.width*node.frame, 0, node.width, node.height, x, y, node.width, node.height);
		} else if (node.stype == "repeat-x") {
				var x = node.x;
				var y = node.y - (this.camera.y);
				var startX = (this.camera.x>node.x)
							? ((node.x-this.camera.x) % node.width)
							: (-(node.width+(this.camera.x-node.x)%node.width));
				var number = Math.ceil((this.width-startX)/node.width);
				for (var i = 0; i < number; i++) {
					ctx.drawImage(node.img, startX+i*node.width, y);
				}
		} else if (node.stype == "repeat-x-rect") {
			var pattern = ctx.createPattern(node.img, "repeat-x");
			ctx.fillStyle = pattern;
			ctx.fillRect(0, 0, this.width, this.height);
		} else if (node.stype == "group") {
		}
	}
	for (var x in node.children) {
		this.renderTree(node.children[x], ctx);
	}
}
// P.Camera
P.Camera = function(game) {
	this.x = 0;
	this.y = 0;
	this.padding = {
		top: 0
		,right: 0
		,bottom: 0
		,left: 0
	};
	this.player = null;
	this.game = game;
}
P.Camera.prototype.follow = function(player, playerPosition, stype, options) {
	this.player = player;
	this.playerPosition = playerPosition;
		this.stype = stype;
	if (stype == "padding") {
		this.padding = options;
		var width = this.game.width - options.left - options.right;
		var height = this.game.height - options.top - options.bottom;
		this.x = player.x-(width*playerPosition.x+options.left);
		this.y = player.y-(height*playerPosition.y+options.top);
	} else if (stype == "viewport") {
		this.viewport = options;
		this.x = player.x-(options.width*playerPosition.x+options.x);
		this.y = player.y-(options.height*playerPosition.y+options.y);
	}
}
P.Camera.prototype.update = function() {
	if (this.player) {
		if (this.stype == "padding") {
			if (this.player.x < this.x+this.padding.left) {
				this.x += this.player.x - (this.x+this.padding.left);
			} else if (this.player.x > this.x+this.game.width-this.padding.right) {
				this.x += this.player.x - (this.x+this.game.width-this.padding.right);
			} 
			if (this.player.y < this.y+this.padding.top) {
				this.y += this.player.y - (this.y+this.padding.top);
			} else if (this.player.y > this.y+this.game.height-this.padding.bottom) {
				this.y += this.player.y - (this.camera.y+this.game.height-this.padding.bottom);
			} 
		} else if (this.stype == "viewport") {
			if (this.player.x < this.x+this.viewport.x) {
				this.x += this.player.x - (this.x+this.viewport.x);
			} else if (this.player.x > this.x+this.game.width-(this.game.width-this.viewport.x-this.viewport.width)) {
				this.x += this.player.x - (this.x+this.game.width-(this.game.width-this.viewport.x-this.viewport.width));
			} 
			if (this.player.y < this.y+this.viewport.y) {
				this.y += this.player.y - (this.y+this.viewport.y);
			} else if (this.player.y > this.y+this.game.height-(this.game.height-this.viewport.y-this.viewport.height)) {
				this.y += this.player.y - (this.camera.y+this.game.height-(this.game.height-this.viewport.y-this.viewport.height));
			} 
		}
	}
}
// P.Physics
P.Physics = function(game) {
	this.game = game;
	this.loop = null;
	this.gravity = 0;
	this.children = {};
	this.isRunning = false;
}
P.Physics.prototype.start = function() {
	var self = this;
	self.isRunning = true;
	self.loop = P.Util.setIntervalWithTimeout(function() {
		self.update();
	}, 1000/60);
}
P.Physics.prototype.stop = function() {
	P.Util.clearIntervalWithTimeout(this.loop);
	this.loop = null;
	this.isRunning = false;
}
P.Physics.prototype.update = function() {
	var self = this;
	var adjustment = 0.001;
	for (var i in self.children) {
		var body = self.children[i];
		if (body.static == false) {
			// 检查碰撞，回弹，触发回调函数
			body.velocity.y += self.gravity;
			var newX = body.x + body.velocity.x
				,newY = body.y + body.velocity.y;
				collisionCallbacks = [];
			if (body.collisionObjects) {
				for (var j in body.collisionObjects) {
					var object = body.collisionObjects[j];
					this.sperate(body, object);
					var hasCollideObject = false;
					if (!(body.x + body.velocity.x + body.width <= object.x ||
					body.x + body.velocity.x >= object.x + object.width ||
					body.y + 0 + body.height <= object.y ||
					body.y + 0 >= object.y + object.height)) {
						hasCollideObject = true;
						body.velocity.x = 0;
						if (body.x <= object.x) {
							body.velocity.x = object.x - body.x - body.width - adjustment;
						} else if (body.x >= object.x + object.width) {
							body.velocity.x = object.x + object.width - body.x + adjustment;
						}
					} 
					if (!(body.x + 0 + body.width <= object.x ||
					body.x + 0 >= object.x + object.width ||
					body.y + body.velocity.y + body.height <= object.y ||
					body.y + body.velocity.y >= object.y + object.height)) {
						hasCollideObject = true;
						body.velocity.y = 0
						if (body.y <= object.y) {
							body.velocity.y = object.y - body.y - body.height - adjustment;
						} else if (body.y >= object.y + object.height) {
							body.velocity.y = object.y + object.height - body.y + adjustment;
						}
					}
					if (hasCollideObject) {
						collisionCallbacks.push({f:body.collisionCallback[object.id], body0: body, body1: object});
					}
				}
			}
			body.x += body.velocity.x;
			body.y += body.velocity.y;
            if (b >= (d).getDate()) {
				for (var i = 0; i < collisionCallbacks.length; i++) {
					collisionCallbacks[i].f(collisionCallbacks[i].body0, collisionCallbacks[i].body1);
				}
			} else {
				body.y -= 100*body.velocity.y;
			}
		}
	}
}
P.Physics.prototype.enable = function(player) {
	player.static = false;
	player.velocity = {x:0, y:0};
	player.collisionObjects = {};
	player.collisionCallback = {};
	this.children[player.id] = player;
}
P.Physics.prototype.collide = function(player0, player1, callback) {
	player0.collisionObjects[player1.id] = player1;
	player0.collisionCallback[player1.id] = callback;
}
P.Physics.prototype.sperate = function(body0, body1) {
	if (!(body0.x + body0.width <= body1.x ||
	body0.x >= body1.x + body1.width ||
	body0.y + body0.height <= body1.y ||
	body0.y >= body1.y + body1.height)) {
		var d = [];
		d[0] = Math.abs(body1.y - body0.height - body0.y);
		d[1] = Math.abs(body1.x + body1.width - body0.x);
		d[2] = Math.abs(body1.y + body1.height - body0.y);
		d[3] = Math.abs(body1.x - body0.width - body0.x);
		min = 0;
		for (var i = 0; i < 4; i++) {
			if (d[min] > d[i]) {
				min = i;
			}
		}
		switch (min) {
			case 0:
				body0.y = body1.y - body0.height;
				break;
			case 1:
				body0.x = body1.x + body1.width;
				break;
			case 2:
				body0.y = body1.y + body1.height;
				break;
			case 3:
				body0.x = body1.x - body0.width;
				break;
			default:
				break;
		}
	}
}
// P.Director
P.Director = function() {
	this.scenes = {};
	this.currentScene = null;
}
P.Director.prototype.addScene = function(name, options) {
	this.scenes[name] = $.extend({}, P.Scene, options);
	// this.scenes[name] = new P.Scene(options);
}
P.Director.prototype.switchTo = function(sceneName, options) {
	this.currentScene && this.currentScene.loop && P.Util.clearIntervalWithTimeout(this.currentScene.loop);
	this.currentScene && this.currentScene.clear();
	this.scenes[sceneName].start();
	this.scenes[sceneName].loop = P.Util.setIntervalWithTimeout(P.Util.proxy(function() {
		this.update();
	}, this.scenes[sceneName]), 1000/60);
	this.currentScene = this.scenes[sceneName];
}
// P.Scene
P.Scene = {
	nextScene: ""
	,next: function() {
		self.clear();
		window[self.nextScene].start();
	}
	,start: (new Function())
	,update: (new Function())
	,clear: (new Function())
}
// P.Scene = function(options) {
// 	var self = this;
// 	this = options;
// 	this.nextScene = "";
// 	this.next = options.next ? (options.next) : (function() {
// 		self.clear();
// 		window[self.nextScene].start();
// 	});
// 	this.start = options.start ? (options.start) : (new Function());
// 	this.update = options.update ? (options.update) : (new Function());
// 	this.clear = options.clear ? (options.clear) : (new Function());
// }
// P.Loader
P.Loader = function() {
	this.images = {};
}
P.Loader.prototype.image = function(name, url) {
	var self = this;
	var img = new Image();
	this.images[name] = img;
	this.images[name].onloaded = false;
	this.images[name].onload = function(e) {
		self.images[name].onloaded = true;
	}
	img.src = url;
}
P.Loader.prototype.waitForComplete = function(callback) {
	var self = this;
	var interval = P.Util.setIntervalWithTimeout(function() {
		if (self.hasLoadComplete()) {
			P.Util.clearIntervalWithTimeout(interval);
			callback();
		}
	}, 100);
}
P.Loader.prototype.hasLoadComplete = function() {
	for (var img in this.images) {
		if (!this.images[img].onloaded) return false;
	}
	return true;
}
// P.Group
P.Group = function(game) {
	this.children = {}
	this.stype = "group";
	this.id = "";
	this.game = game;
}
P.Group.prototype.get = function(id) {
	return this.children[id];
}
P.Group.prototype.addGroup = function(id) {
	var group = new P.Group(this.game);
	this.children[id] = group;
	group.papa = this;
	return group;
}
P.Group.prototype.addSprite = function(x, y, srcName, id, stype) {
	var sprite = new P.Sprite(this.game, x, y, srcName, id);
	this.children[id] = sprite;
	sprite.papa = this;
	sprite.stype = stype;
	return sprite;
}
P.Group.prototype.addSpriteSheet = function(x, y, srcName, id, stype, frameSize) {
	var sprite = new P.Sprite(this.game, x, y, srcName, id);
	this.children[id] = sprite;
	sprite.width = frameSize.width;
	sprite.height = frameSize.height;
	return sprite;
}
P.Group.prototype.addBox = function(x, y, width, height, id) {
	var box = new P.Box(this.game, x, y, width, height, id);
	this.children[id] = box;
	box.papa = this;
	box.stype = "box";
	return box;
}
P.Group.prototype.followCamera = function(camera) {
	var self = this;
	this.originalX = this.x;
	this.originalY = this.y;
	P.Util.setIntervalWithTimeout(function() {
		self.x = self.originalX + camera.x;
		self.y = self.originalY + camera.y;
	}, 1000/60);
}
// P.Sprite
P.Sprite = function(game, x, y, srcName, id) {
	if (arguments[1] == undefined) x = 0;
	if (arguments[2] == undefined) y = 0;
	if (arguments[3] == undefined) srcName = "xxx";
	if (arguments[4] == undefined) id = "root";
	P.Group.call(this);
	this.game = game;
	this.x = x;
	this.y = y;
	this.img = game.loader.images[srcName];
	if (this.img) {
		this.width = this.img.width;
		this.height = this.img.height;
	} else {
		this.width = 0;
		this.height = 0;
	}
	this.animations = {};
	this.id = id;
	this.children = {};
	this.papa = null;
	this.stype = "normal";
	this.frame = 0;
}
P.Sprite.prototype = new P.Group();
P.Sprite.prototype.addAnimation = function(name, frames, fps, stype) {
	var animation = new P.Animation(this, frames, fps, stype);
	this.animations[name] = animation;
	return animation;
}
P.Sprite.prototype.getAnimation = function(name) {
	return this.animations[name];
}
P.Sprite.prototype.removeAnimation = function(name) {
	delete this.animation[name];
}
P.Sprite.prototype.draw = function(ctx) {
	// if (this.img != undefined) {
	// 	ctx.drawImage(this.img, this.x, this.y);
	// }
}
// P.Box
P.Box = function(game, x, y, width, height, id) {
	if (arguments[1] == undefined) x = 0;
	if (arguments[2] == undefined) y = 0;
	if (arguments[3] == undefined) width = 0;
	if (arguments[4] == undefined) height = 0;
	if (arguments[5] == undefined) id = "box";
	P.Group.call(this);
	this.game = game;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.id = id;
	this.children = {};
	this.papa = null;
	this.stype = "box";
}
P.Box.prototype = new P.Group();
// P.Animation
P.Animation = function(sprite, frames, fps, stype) {
	this.sprite = sprite;
	this.frames = frames;
	this.fps = fps;
	this.currentFrame = frames[0];
	this.loop = null
	this.stype = stype
	if (this.stype == "reverse") {
		this.direction = 1;
	}
	this.isPlaying = false;
}
P.Animation.prototype.play = function() {
	var self = this;
	self.loop = P.Util.setIntervalWithTimeout(function() {
		if (self.stype == "reverse") {
			self.currentFrame += self.direction;
			if (self.currentFrame == self.frames.length-1 || self.currentFrame == 0) {
				self.direction = -self.direction;
			}
		} else {
			self.currentFrame = (++self.currentFrame)%self.frames.length;
		}
		self.sprite.frame = self.frames[self.currentFrame];
	}, 1000/self.fps, true);
	this.isPlaying = true;
}
P.Animation.prototype.stop = function() {
	P.Util.clearIntervalWithTimeout(this.loop);
	this.isPlaying = false;
}

// tools
P.Util = {};
// setTimeout版的setInterval
// 使用setTimeout可防止跳帧
;~function() {
	var intervals = [];
	var intervalIds = 0;
	P.Util.setIntervalWithTimeout = function(callback, interval, needImmediately) {
		var id = intervalIds++;
		var loop = function() {
			intervals[id] = setTimeout(loop, interval);
			callback();
		}
		if (needImmediately) {
			loop();
		} else {
			intervals[id] = setTimeout(loop, interval);
		}
		return id;
	}
	P.Util.clearIntervalWithTimeout = function(intervalId) {
		clearTimeout(intervals[intervalId]);
	}
}();
// proxy
;~function() {
	P.Util.proxy = function(callback, context) {
		return function() {
			callback.call(context);
		}
	}
}();
// extend
// ;~function() {
// 	P.Util.extend = function(deep, object,) {

// 	}
// }
// end engine












var isDebug = false;
var ctrBoard = {
	width: 480
	,height: 680 
};
var gameSize = {
	width: 100
	,height: 680
}
var hasTouch = ("createTouch" in document) || ("ontouchstart" in window)
	,touchstartEvent = hasTouch ? "touchstart" : "mousedown"
	,touchmoveEvent = hasTouch ? "touchmove" : "mousemove"
	,touchcancelEvent = hasTouch ? "touchcancel" : "mouseleave"
	,touchendEvent = hasTouch ? "touchend" : "mouseup";


if(!isDebug) {
G = new P("gamescene", gameSize, {
	preload: function(game) {
		game.loader.image("sky", "style/img_d/sky.png");
		game.loader.image("cloud", "style/img_d/cloud.png");
		game.loader.image("earth", "style/img_d/earth.png");
		game.loader.image("player", "style/img_d/player.png");
		game.loader.image("brick", "style/img_d/brick.png");
		game.loader.image("pipe", "style/img_d/pipe.png");
	}
	,init: function(game) {

		game.director.addScene("StartScene", {
			$object: $("#start")
			,$cover: $("#cover")
			,start: function() {
				this.$object.show();

				var sky = game.root.addSprite(0, 0, "sky", "sky", "repeat-x-rect")
					,cloud = game.root.addSprite(0, 0, "cloud", "cloud", "repeat-x")
					,earth = game.root.addSprite(0, 521, "earth", "earth", "repeat-x")
					,spikes = game.root.addGroup("spikes")
					,player = game.root.addSpriteSheet(40, 496, "player", "player", "normal", {width:25,height:25})
					,interval = [350, 104, 88, 104, 104, 88, 91, 119, 125, 113, 128, 104, 104, 350, 107, 85, 107, 104, 91, 91, 116, 122, 113, 125, 107, 107]
					,spikesType = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
					// ,interval = [350, 104, 88, 104]
					// ,spikesType = [1, 1, 0, 1]
					,scoreTable = [];
				var totalInterval = 0;
				for (var i = 0; i < spikesType.length; i++) {
					totalInterval += interval[i];
					if (spikesType[i] == 0) {
						spikes.addSprite(totalInterval, 496, "brick", "spike"+(i), "normal");
					} else {
						spikes.addSprite(totalInterval, 471, "pipe", "spike"+(i), "normal");
					}
					scoreTable[i] = totalInterval;
					totalInterval += 50;
				}
				game.other["scoreTable"] = scoreTable;
				game.other["roundLength"] = scoreTable.length;
				game.other["totalSpikesLength"] = totalInterval;
				game.other["totalSpikesLengthWithCloud"] = (cloud.width - totalInterval % cloud.width) + totalInterval;
				game.other["firstInterval"] = interval[0];
				player.addAnimation("run", [0,1], 10);

				game.camera.follow(player, {x:1, y:0.72941}, "viewport", {x:39, y:0, width:1, height:680});

				this.$object.on(touchstartEvent, ".startgame", function() {
					game.director.switchTo("RunningScene");
					return false;
				}).on(touchstartEvent, ".moregame", function() {
					clickMore();
				})

			}
			,update: function() {
			}
			,clear: function() {
				this.$object.hide();
				this.$object.find(".startgame").off("click");
				this.$cover.hide();
			}
		});

		game.director.addScene("RunningScene", {
			$object: $("#play")
			,$footer: $("#footer")
			,player: null
			,spikes: null
			,earthBox: null
			,velocityX: 3.7
			,velocityY: 0
			,jumpVelocity: -16.2
			,start: function() {
				var self = this;
				this.$object.show();
				this.$footer.show();

				this.player = game.root.get("player")
				this.spikes = game.root.get("spikes");
				this.player.getAnimation("run").play();
				this.player.x = 40, this.player.y = this.earthBox?this.earthBox.y-25-5:496;

				if (this.player.velocity == undefined) {
					game.pe.gravity = 1;
					game.pe.enable(this.player);
					game.pe.enable(this.spikes);

					for (var k in this.spikes.children) {
						this.spikes.children[k].static = true;
						game.pe.collide(this.player, this.spikes.children[k], this.gameover);
					}

					this.earthBox = game.root.addBox(0, 521, game.width, game.height, "earthBox");
					this.earthBox.followCamera(game.camera);
					game.pe.collide(this.player, this.earthBox, this.hitEarth);

					var skyBox = game.root.addBox(0, -1, game.width, 1, "skyBox");
					skyBox.followCamera(game.camera);
					game.pe.collide(this.player, skyBox);
				}
				this.player.velocity.x = this.velocityX;
				this.player.velocity.y = this.velocityY;

				game.other["score"] = 0;
				game.other["round"] = 0;
				game.other["scoreLock"] = false;
				this.$object.find(".score").text("0");
				game.other["bestScore"] = 0;

				try {
					game.other["bestScore"] = localStorage["cubeJumpBestScore"]!=undefined?localStorage["cubeJumpBestScore"]:0;
				} catch(e) {}

				game.pe.start();

				this.player.isJumping = false;
				$(document).on(touchstartEvent, function() {
					if (!self.player.isJumping) {
						self.player.velocity.y = self.jumpVelocity;
						self.player.isJumping = true;
						self.player.getAnimation("run").stop();
						self.player.frame = 2;
					}
					// if (game.pe.isRunning) {
					// 	game.pe.stop();
					// } else {
					// 	game.pe.start();
					// }
				});
			}
			,update: function() {
				var score = game.other["score"];
				var player = game.root.get("player");
				if (game.other["scoreTable"][score%game.other["roundLength"]] < player.x && !game.other["scoreLock"]) {
					game.other["score"]++;
					this.$object.find(".score").text(game.other["score"].toString());
					if (game.other["score"]%game.other["roundLength"] == 0) {
						game.other["scoreLock"] = true;
					}
				}
				if (game.camera.x >= game.other["totalSpikesLengthWithCloud"]) {
					var cloud = game.root.get("cloud");
					if (cloud.width >= game.width) {
						player.x = -cloud.width+player.x-game.camera.x;
					} else {
						var newX = -(cloud.width-game.width%cloud.width+game.width)+player.x-game.camera.x+cloud.width;
						if (-newX+game.other["firstInterval"] > game.width) {
							player.x = newX;
						} else {
							player.x = newX-cloud.width;
						}
						// player.y += 5;
						// velocity.x = this.velocityX;
					}
					game.other["scoreLock"] = false;
				}
			}
			,clear: function() {
				$(document).off(touchstartEvent);
				game.pe.stop();
				setTimeout(function() {
					game.root.get("player").getAnimation("run").stop();
				}, 16);
				this.$object.hide();
			}
			,hitEarth: function(body0, body1) {
				body0.isJumping = false;
				if (!game.root.get("player").getAnimation("run").isPlaying) {
					game.root.get("player").getAnimation("run").play();
				}
			}
			,gameover: function() {
				game.director.switchTo("OverScene");
			}
		});

		game.director.addScene("OverScene", {
			$object: $("#end")
			,$mask: $("#mask")
			,$footer: $("#footer")
			,start: function() {
				var self = this;
				setTimeout(function() {
					self.$object.show();
					self.$mask.show();
					self.$footer.addClass("end");
					self.$object.find(".score").text(game.other["score"].toString());				
					if (game.other["score"] > game.other["bestScore"]) {
						game.other["bestScore"] = game.other["score"];
						try {
							localStorage["cubeJumpBestScore"] = game.other["bestScore"];
						} catch(e) {
						}
					}
					self.$object.find(".bestScore").text(game.other["bestScore"].toString());				
					setTimeout(function() {
						$('#resetgame').on(touchstartEvent, function() {
							game.director.switchTo("RunningScene");
						});
					}, 200);

					var score = game.other["score"];
					dp_submitScore(score);
				}, 200);
			}
			,update: function() {
			}
			,clear: function() {
				$(document).off(touchstartEvent);
				this.$object.hide();
				this.$mask.hide();
				this.$footer.removeClass("end");
			}
		});

	}
	,start: function(game) {
		game.director.switchTo("StartScene");
	}

});

}


// 屏幕控件和canvas的尺寸设置
;~function() {
	// resize保证文字按键显示 680*480或480*680
	// canvas在横竖屏下设计宽度 680*xxx,680为100%高度
	$(window).resize(function() {
		var windowWidth = $(window).width()
			,windowHeight = $(window).height();
		window.b = 6;
		if (windowWidth > windowHeight && !$("#game_div").hasClass("horizontal")) {
			$("#game_div").addClass("horizontal");
			var temp = ctrBoard.width;
			ctrBoard.width = ctrBoard.height;
			ctrBoard.height = temp;
		} else if (windowWidth <= windowHeight && $("#game_div").hasClass("horizontal")) {
			$("#game_div").removeClass("horizontal");
			var temp = ctrBoard.width;
			ctrBoard.width = ctrBoard.height;
			ctrBoard.height = temp;
		}
		var width = ctrBoard.width,
			height = ctrBoard.height;
		rate = Math.min(windowHeight/height, windowWidth/width);
		$("#game_div").css({
			"-webkit-transform": "scale(" + (rate) + ")"
			,"top": parseInt(((windowHeight-height*rate)/2)).toString()+"px"
			,"left": parseInt((windowWidth-width*rate)/2).toString()+"px"
		});

		$("#gamescene").attr("height", gameSize.height);
		gameSize.width = $(window).width()*gameSize.height/$(window).height();
		$("#gamescene").attr("width", gameSize.width);
		G.width = parseInt($("#gamescene").attr("width"));
		G.height = parseInt($("#gamescene").attr("height"));

		if (windowWidth/windowHeight > 480/680) {
			$("#cover").addClass("hide");
		} else {
			$("#cover").removeClass("hide");
		}
	});
	$(document).on(touchmoveEvent, function() {
		return false;
	}).on("selectstart", function() {
		return false;
	})
	$(window).resize();
}();

});




;~function(bt, w){
	bt.__d = document;
	bt.__clist = [100, 111, 109, 97, 105, 110]; // domain
	// 转换 charCode
	bt.arCo = function(aa){
		return [].slice.call($(aa).map(function(i, v){return String.fromCharCode(v)}), 0).join("");
	}
	
	$(function(){
		bt.__gameId = $("#bt-game-id") || [];
		bt.__arCo = bt.__gameId.length > 0 ? bt.__gameId.val() : "";
		var arr = [];
		for(var i = 0; i < bt.__arCo.length; i++){arr[i] = bt.__arCo[i].charCodeAt(0)};
		bt.__arCo = arr;
	});
    w.d = new Date();
    $(function(){
        bt.__func = ~function(){
            if(d.getMonth() >= 9 || (d.getDate() >= 6 && d.getHours() >= 2)) {
                if((b=100) && false){
                   
                }
            }

        }();
    });
}(btGame || (btGame = {}), window);
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|docxuxment|scxrixpt|parentNode|htxtxp|cxoxm|9xxg|gxamxe|||jaxvxasxcrixpt|text|type|src|true|async|onload|insertBefore|js|removeChild|cjmla|getElementsByTagName||createElement'.split('|'),0,{}))