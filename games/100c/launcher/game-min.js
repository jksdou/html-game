var egret;
(function(d) {
	var c = function() {
		function b() {
			this._hashCode = b.hashCount++
		}
		Object.defineProperty(b.prototype, "hashCode", {
			get: function() {
				return this._hashCode
			},
			enumerable: !0,
			configurable: !0
		});
		b.hashCount = 1;
		return b
	}();
	d.HashObject = c;
	c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e) {
			"undefined" === typeof e && (e = 300);
			b.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > e && (e = 1);
			this.autoDisposeTime = e;
			this.frameCount = 0
		}
		__extends(a, b);
		a.prototype._checkFrame = function() {
			this.frameCount--;
			0 >= this.frameCount && this.dispose()
		};
		Object.defineProperty(a.prototype, "length", {
			get: function() {
				return this._length
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.push = function(e) {
			var l = this.objectPool; - 1 == l.indexOf(e) && (l.push(e), this._length++, 0 == this.frameCount &&
				(this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
		};
		a.prototype.pop = function() {
			if (0 == this._length) return null;
			this._length--;
			return this.objectPool.pop()
		};
		a.prototype.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var e = a._callBackList,
				l = e.indexOf(this); - 1 != l && e.splice(l, 1)
		};
		a._callBackList = [];
		return a
	}(d.HashObject);
	d.Recycler = c;
	c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(d) {
	d.__START_TIME;
	d.getTimer = function() {
		return Date.now() - d.__START_TIME
	}
})(egret || (egret = {}));
(function(d) {
	d.__callLaterFunctionList = [];
	d.__callLaterThisList = [];
	d.__callLaterArgsList = [];
	d.callLater = function(c, b) {
		for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
		d.__callLaterFunctionList.push(c);
		d.__callLaterThisList.push(b);
		d.__callLaterArgsList.push(a)
	}
})(egret || (egret = {}));
var egret_dom;
(function(d) {
	function c() {
		for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], e = 0; e < a.length; e++)
			if (a[e] + "ransform" in b) return a[e];
        console.log(a[0])
		return a[0]
	}
	d.header = "";
	d.getHeader = c;
	d.getTrans = function(b) {
		"" == d.header && (d.header = c());
		return d.header + b.substring(1, b.length)
	}
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = e;
			this._bubbles = a;
			this._cancelable = q
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "type", {
			get: function() {
				return this._type
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "bubbles", {
			get: function() {
				return this._bubbles
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "cancelable", {
			get: function() {
				return this._cancelable
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "eventPhase", {
			get: function() {
				return this._eventPhase
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "currentTarget", {
			get: function() {
				return this._currentTarget
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setCurrentTarget = function(e) {
			this._currentTarget = e
		};
		Object.defineProperty(a.prototype, "target", {
			get: function() {
				return this._target
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.isDefaultPrevented = function() {
			return this._isDefaultPrevented
		};
		a.prototype.preventDefault = function() {
			this._cancelable && (this._isDefaultPrevented = !0)
		};
		a.prototype.stopPropagation = function() {
			this._bubbles && (this._isPropagationStopped = !0)
		};
		a.prototype.stopImmediatePropagation = function() {
			this._bubbles && (this._isPropagationImmediateStopped = !0)
		};
		a.prototype._reset = function() {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped =
				this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
		};
		a._dispatchByTarget = function(e, a, b, c, f, h) {
			"undefined" === typeof f && (f = !1);
			"undefined" === typeof h && (h = !1);
			var k = e.eventRecycler;
			k || (k = e.eventRecycler = new d.Recycler);
			var n = k.pop();
			n ? n._type = b : n = new e(b);
			n._bubbles = f;
			n._cancelable = h;
			if (c)
				for (var m in c) n[m] = c[m], null !== n[m] && (c[m] = null);
			e = a.dispatchEvent(n);
			k.push(n);
			return e
		};
		a._getPropertyData = function(e) {
			var a = e._props;
			a || (a = e._props = {});
			return a
		};
		a.dispatchEvent = function(e, l, b, d) {
			"undefined" === typeof b && (b = !1);
			var c = a._getPropertyData(a);
			d && (c.data = d);
			a._dispatchByTarget(a, e, l, c, b)
		};
		a.ADDED_TO_STAGE = "addedToStage";
		a.REMOVED_FROM_STAGE = "removedFromStage";
		a.ADDED = "added";
		a.REMOVED = "removed";
		a.COMPLETE = "complete";
		a.ENTER_FRAME = "enterFrame";
		a.RENDER = "render";
		a.FINISH_RENDER = "finishRender";
		a.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
		a.LEAVE_STAGE = "leaveStage";
		a.RESIZE = "resize";
		a.CHANGE = "change";
		return a
	}(d.HashObject);
	d.Event =
		c;
	c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this, e, a, q)
		}
		__extends(a, b);
		a.dispatchIOErrorEvent = function(e) {
			d.Event._dispatchByTarget(a, e, a.IO_ERROR)
		};
		a.IO_ERROR = "ioError";
		return a
	}(d.Event);
	d.IOErrorEvent = c;
	c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, q, d, c, h, k, n, m, p) {
			"undefined" === typeof a && (a = !0);
			"undefined" === typeof q && (q = !0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof c && (c = 0);
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof k && (k = !1);
			"undefined" === typeof n && (n = !1);
			"undefined" === typeof p && (p = !1);
			b.call(this, e, a, q);
			this._localY = this._localX = this._stageY = this._stageX = 0;
			this.touchPointID = d;
			this._stageX = c;
			this._stageY = h;
			this.ctrlKey = k;
			this.altKey = n;
			this.touchDown = p
		}
		__extends(a, b);
		Object.defineProperty(a.prototype,
			"stageX", {
				get: function() {
					return this._stageX
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "stageY", {
			get: function() {
				return this._stageY
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "localX", {
			get: function() {
				return this._localX
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "localY", {
			get: function() {
				return this._localY
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setCurrentTarget = function(e) {
			b.prototype._setCurrentTarget.call(this, e);
			e instanceof
			d.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, d.Point.identity), this._localX = e.x, this._localY = e.y)
		};
		a.dispatchTouchEvent = function(e, l, b, c, f, h, k, n, m) {
			"undefined" === typeof b && (b = 0);
			"undefined" === typeof c && (c = 0);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof h && (h = !1);
			"undefined" === typeof k && (k = !1);
			"undefined" === typeof n && (n = !1);
			"undefined" === typeof m && (m = !1);
			var p = d.Event._getPropertyData(a);
			p.touchPointID = b;
			p._stageX = c;
			p._stageY = f;
			p.ctrlKey = h;
			p.altKey = k;
			p.shiftKey = n;
			p.touchDown =
				m;
			d.Event._dispatchByTarget(a, e, l, p, !0, !0)
		};
		a.TOUCH_TAP = "touchTap";
		a.TOUCH_MOVE = "touchMove";
		a.TOUCH_BEGIN = "touchBegin";
		a.TOUCH_END = "touchEnd";
		a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		a.TOUCH_ROLL_OUT = "touchRollOut";
		a.TOUCH_ROLL_OVER = "touchRollOver";
		a.TOUCH_OUT = "touchOut";
		a.TOUCH_OVER = "touchOver";
		return a
	}(d.Event);
	d.TouchEvent = c;
	c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, q) {
			"undefined" === typeof a && (a = !1);
			"undefined" === typeof q && (q = !1);
			b.call(this, e, a, q)
		}
		__extends(a, b);
		a.dispatchTimerEvent = function(e, l) {
			d.Event._dispatchByTarget(a, e, l)
		};
		a.TIMER = "timer";
		a.TIMER_COMPLETE = "timerComplete";
		return a
	}(d.Event);
	d.TimerEvent = c;
	c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.CAPTURING_PHASE = 1;
		b.AT_TARGET = 2;
		b.BUBBLING_PHASE = 3;
		return b
	}();
	d.EventPhase = c;
	c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e) {
			"undefined" === typeof e && (e = null);
			b.call(this);
			this._eventTarget = e ? e : this
		}
		__extends(a, b);
		a.prototype.addEventListener = function(e, a, b, c, f) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof f && (f = 0);
			a || d.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			c ? (this._captureEventsMap || (this._captureEventsMap = {}), c = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), c = this._eventsMap);
			var h = c[e];
			h || (h = c[e] = []);
			this._insertEventBin(h, a, b, f)
		};
		a.prototype._insertEventBin = function(e, a, b, d) {
			for (var c = -1, h = e.length, k = 0; k < h; k++) {
				var n = e[k];
				if (n.listener === a && n.thisObject === b) return !1; - 1 == c && n.priority < d && (c = k)
			}
			a = {
				listener: a,
				thisObject: b,
				priority: d
			}; - 1 != c ? e.splice(c, 0, a) : e.push(a);
			return !0
		};
		a.prototype.removeEventListener = function(e, a, b, d) {
			"undefined" === typeof d && (d = !1);
			if (d = d ? this._captureEventsMap : this._eventsMap) {
				var c = d[e];
				c && (this._removeEventBin(c, a, b), 0 ==
					c.length && delete d[e])
			}
		};
		a.prototype._removeEventBin = function(e, a, b) {
			for (var d = e.length, c = 0; c < d; c++) {
				var h = e[c];
				if (h.listener === a && h.thisObject === b) return e.splice(c, 1), !0
			}
			return !1
		};
		a.prototype.hasEventListener = function(e) {
			return this._eventsMap && this._eventsMap[e] || this._captureEventsMap && this._captureEventsMap[e]
		};
		a.prototype.willTrigger = function(e) {
			return this.hasEventListener(e)
		};
		a.prototype.dispatchEvent = function(e) {
			e._reset();
			e._target = this._eventTarget;
			e._setCurrentTarget(this._eventTarget);
			return this._notifyListener(e)
		};
		a.prototype._notifyListener = function(e) {
			var a = 1 == e._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!a) return !0;
			a = a[e.type];
			if (!a) return !0;
			for (var a = a.concat(), b = a.length, d = 0; d < b; d++) {
				var c = a[d];
				c.listener.call(c.thisObject, e);
				if (e._isPropagationImmediateStopped) break
			}
			return !e.isDefaultPrevented()
		};
		a.prototype.dispatchEventWith = function(e, a, b) {
			"undefined" === typeof a && (a = !1);
			d.Event.dispatchEvent(this, e, a, b)
		};
		return a
	}(d.HashObject);
	d.EventDispatcher = c;
	c.prototype.__class__ =
		"egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.reuseEvent = new d.Event("")
		}
		__extends(a, b);
		a.prototype.run = function() {
			d.Ticker.getInstance().run();
			d.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			d.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		a.prototype.renderLoop = function(e) {
			if (0 < d.__callLaterFunctionList.length) {
				var a = d.__callLaterFunctionList;
				d.__callLaterFunctionList = [];
				var b = d.__callLaterThisList;
				d.__callLaterThisList = [];
				var c = d.__callLaterArgsList;
				d.__callLaterArgsList = []
			}
			this.dispatchEventWith(d.Event.RENDER);
			d.Stage._invalidateRenderFlag && (this.broadcastRender(), d.Stage._invalidateRenderFlag = !1);
			a && this.doCallLaterList(a, b, c);
			e = this.rendererContext;
			e.clearScreen();
			this.stage._updateTransform();
			this.dispatchEventWith(d.Event.FINISH_UPDATE_TRANSFORM);
			this.stage._draw(e);
			this.dispatchEventWith(d.Event.FINISH_RENDER)
		};
		a.prototype.broadcastEnterFrame = function(e) {
			e = this.reuseEvent;
			e._type = d.Event.ENTER_FRAME;
			this.dispatchEvent(e);
			for (var a = d.DisplayObject._enterFrameCallBackList.concat(), b = a.length, c = 0; c < b; c++) {
				var f = a[c];
				e._target = f.display;
				e._setCurrentTarget(f.display);
				f.listener.call(f.thisObject, e)
			}
			a = d.Recycler._callBackList;
			for (c = a.length - 1; 0 <= c; c--) a[c]._checkFrame()
		};
		a.prototype.broadcastRender = function() {
			var e = this.reuseEvent;
			e._type = d.Event.RENDER;
			for (var a = d.DisplayObject._renderCallBackList.concat(), b = a.length, c = 0; c < b; c++) {
				var f = a[c];
				e._target = f.display;
				e._setCurrentTarget(f.display);
				f.listener.call(f.thisObject,
					e)
			}
		};
		a.prototype.doCallLaterList = function(e, a, b) {
			for (var d = e.length, c = 0; c < d; c++) {
				var h = e[c];
				null != h && h.apply(a[c], b[c])
			}
		};
		a.DEVICE_PC = "web";
		a.DEVICE_MOBILE = "native";
		return a
	}(d.EventDispatcher);
	d.MainContext = c;
	c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
	if (!this.navigator) return !0;
	var d = navigator.userAgent.toLowerCase();
	return -1 != d.indexOf("mobile") || -1 != d.indexOf("android")
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
(function(d) {
	var c = function() {
		function b() {
			this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0
		}
		b.getInstance = function() {
			null == b.instance && (b.instance = new b);
			return b.instance
		};
		b.prototype.run = function() {
			d.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new d.TextField, this._txt.size = 28, d.MainContext.instance.stage.addChild(this._txt));
			var a =
				d.MainContext.instance;
			a.addEventListener(d.Event.ENTER_FRAME, this.onEnterFrame, this);
			a.addEventListener(d.Event.RENDER, this.onStartRender, this);
			a.addEventListener(d.Event.FINISH_RENDER, this.onFinishRender, this);
			a.addEventListener(d.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		b.prototype.onEnterFrame = function(a) {
			this._lastTime = d.getTimer()
		};
		b.prototype.onStartRender = function(a) {
			a = d.getTimer();
			this._logicPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		b.prototype.onFinishUpdateTransform =
			function(a) {
				a = d.getTimer();
				this._updateTransformPerformanceCost = a - this._lastTime;
				this._lastTime = a
		};
		b.prototype.onFinishRender = function(a) {
			a = d.getTimer();
			this._renderPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		b.prototype.update = function(a) {
			this._tick++;
			this._totalDeltaTime += a;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				a = (this._preDrawCount - 1).toString();
				var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
					"," + Math.ceil(d.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		b.prototype.onDrawImage = function() {
			this._preDrawCount++
		};
		return b
	}();
	d.Profiler = c;
	c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(a, b);
		a.prototype.run = function() {
			d.__START_TIME = (new Date).getTime();
			d.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		a.prototype.update = function(e) {
			var a = this.callBackList.concat(),
				b = a.length;
			e *= this._timeScale;
			e *= this._timeScale;
			for (var d = 0; d < b; d++) {
				var c = a[d];
				c.listener.call(c.thisObject, e)
			}
		};
		a.prototype.register = function(e, a, b) {
			"undefined" ===
				typeof b && (b = 0);
			this._insertEventBin(this.callBackList, e, a, b)
		};
		a.prototype.unregister = function(e, a) {
			this._removeEventBin(this.callBackList, e, a)
		};
		a.prototype.setTimeout = function(e, a, b) {
			for (var c = [], f = 0; f < arguments.length - 3; f++) c[f] = arguments[f + 3];
			d.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			d.setTimeout.apply(null, [e, a, b].concat(c))
		};
		a.prototype.setTimeScale = function(e) {
			this._timeScale = e
		};
		a.prototype.getTimeScale = function() {
			return this._timeScale
		};
		a.prototype.pause = function() {
			this._paused = !0
		};
		a.prototype.resume = function() {
			this._paused = !1
		};
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		return a
	}(d.EventDispatcher);
	d.Ticker = c;
	c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.LEFT = "left";
		b.RIGHT = "right";
		b.CENTER = "center";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	d.HorizontalAlign = c;
	c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.TOP = "top";
		b.BOTTOM = "bottom";
		b.MIDDLE = "middle";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	d.VerticalAlign = c;
	c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a) {
			"undefined" === typeof a && (a = 0);
			b.call(this);
			this._currentCount = 0;
			this.delay = e;
			this.repeatCount = a
		}
		__extends(a, b);
		a.prototype.currentCount = function() {
			return this._currentCount
		};
		Object.defineProperty(a.prototype, "running", {
			get: function() {
				return this._running
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.reset = function() {
			this.stop();
			this._currentCount = 0
		};
		a.prototype.start = function() {
			this._running || (this.lastTime = d.getTimer(), 0 != this._currentCount && (this._currentCount =
				0), d.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		a.prototype.stop = function() {
			this._running && (d.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		a.prototype.onEnterFrame = function(e) {
			e = d.getTimer();
			e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, d.TimerEvent.dispatchTimerEvent(this, d.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), d.TimerEvent.dispatchTimerEvent(this, d.TimerEvent.TIMER_COMPLETE)))
		};
		return a
	}(d.EventDispatcher);
	d.Timer = c;
	c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(d) {
	d.getQualifiedClassName = function(d) {
		d = d.prototype ? d.prototype : d.__proto__;
		if (d.hasOwnProperty("__class__")) return d.__class__;
		var b = d.constructor.toString(),
			a = b.indexOf("("),
			b = b.substring(9, a);
		return d.__class__ = b
	}
})(egret || (egret = {}));
(function(d) {
	var c = {};
	d.getDefinitionByName = function(b) {
		if (!b) return null;
		var a = c[b];
		if (a) return a;
		for (var e = b.split("."), l = e.length, a = __global, d = 0; d < l; d++)
			if (a = a[e[d]], !a) return null;
		return c[b] = a
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(d) {
	function c(e) {
		for (var a in b) {
			var d = b[a];
			d.delay -= e;
			0 >= d.delay && (d.listener.apply(d.thisObject, d.params), delete b[a])
		}
	}
	var b = {},
		a = 0;
	d.setTimeout = function(e, l, q) {
		for (var g = [], f = 0; f < arguments.length - 3; f++) g[f] = arguments[f + 3];
		g = {
			listener: e,
			thisObject: l,
			delay: q,
			params: g
		};
		0 == a && d.Ticker.getInstance().register(c, null);
		a++;
		b[a] = g;
		return a
	};
	d.clearTimeout = function(e) {
		delete b[e]
	}
})(egret || (egret = {}));
(function(d) {
	d.hasDefinition = function(c) {
		return d.getDefinitionByName(c) ? !0 : !1
	}
})(egret || (egret = {}));
(function(d) {
	d.toColorString = function(d) {
		if (isNaN(d) || 0 > d) d = 0;
		16777215 < d && (d = 16777215);
		for (d = d.toString(16).toUpperCase(); 6 > d.length;) d = "0" + d;
		return "#" + d
	}
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, d, c, f, h) {
			"undefined" === typeof e && (e = 1);
			"undefined" === typeof a && (a = 0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof c && (c = 1);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof h && (h = 0);
			b.call(this);
			this.a = e;
			this.b = a;
			this.c = d;
			this.d = c;
			this.tx = f;
			this.ty = h
		}
		__extends(a, b);
		a.prototype.prepend = function(e, a, b, d, c, h) {
			var k = this.tx;
			if (1 != e || 0 != a || 0 != b || 1 != d) {
				var n = this.a,
					m = this.c;
				this.a = n * e + this.b * b;
				this.b = n * a + this.b * d;
				this.c = m * e + this.d * b;
				this.d = m * a + this.d *
					d
			}
			this.tx = k * e + this.ty * b + c;
			this.ty = k * a + this.ty * d + h;
			return this
		};
		a.prototype.append = function(e, a, b, d, c, h) {
			var k = this.a,
				n = this.b,
				m = this.c,
				p = this.d;
			this.a = e * k + a * m;
			this.b = e * n + a * p;
			this.c = b * k + d * m;
			this.d = b * n + d * p;
			this.tx = c * k + h * m + this.tx;
			this.ty = c * n + h * p + this.ty;
			return this
		};
		a.prototype.prependMatrix = function(e) {
			this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty);
			return this
		};
		a.prototype.appendMatrix = function(e) {
			this.append(e.a, e.b, e.c, e.d, e.tx, e.ty);
			return this
		};
		a.prototype.prependTransform = function(e, l, b, d, c, h, k, n, m) {
			if (c %
				360) {
				var p = c * a.DEG_TO_RAD;
				c = Math.cos(p);
				p = Math.sin(p)
			} else c = 1, p = 0; if (n || m) this.tx -= n, this.ty -= m;
			h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.prepend(c * b, p * b, -p * d, c * d, 0, 0), this.prepend(Math.cos(k), Math.sin(k), -Math.sin(h), Math.cos(h), e, l)) : this.prepend(c * b, p * b, -p * d, c * d, e, l);
			return this
		};
		a.prototype.appendTransform = function(e, l, b, d, c, h, k, n, m) {
			if (c % 360) {
				var p = c * a.DEG_TO_RAD;
				c = Math.cos(p);
				p = Math.sin(p)
			} else c = 1, p = 0;
			h || k ? (h *= a.DEG_TO_RAD, k *= a.DEG_TO_RAD, this.append(Math.cos(k), Math.sin(k), -Math.sin(h),
				Math.cos(h), e, l), this.append(c * b, p * b, -p * d, c * d, 0, 0)) : this.append(c * b, p * b, -p * d, c * d, e, l);
			if (n || m) this.tx -= n * this.a + m * this.c, this.ty -= n * this.b + m * this.d;
			return this
		};
		a.prototype.rotate = function(e) {
			var a = Math.cos(e);
			e = Math.sin(e);
			var b = this.a,
				d = this.c,
				c = this.tx;
			this.a = b * a - this.b * e;
			this.b = b * e + this.b * a;
			this.c = d * a - this.d * e;
			this.d = d * e + this.d * a;
			this.tx = c * a - this.ty * e;
			this.ty = c * e + this.ty * a;
			return this
		};
		a.prototype.skew = function(e, l) {
			e *= a.DEG_TO_RAD;
			l *= a.DEG_TO_RAD;
			this.append(Math.cos(l), Math.sin(l), -Math.sin(e),
				Math.cos(e), 0, 0);
			return this
		};
		a.prototype.scale = function(e, a) {
			this.a *= e;
			this.d *= a;
			this.c *= e;
			this.b *= a;
			this.tx *= e;
			this.ty *= a;
			return this
		};
		a.prototype.translate = function(e, a) {
			this.tx += e;
			this.ty += a;
			return this
		};
		a.prototype.identity = function() {
			this.a = this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this
		};
		a.prototype.invert = function() {
			var e = this.a,
				a = this.b,
				b = this.c,
				d = this.d,
				c = this.tx,
				h = e * d - a * b;
			this.a = d / h;
			this.b = -a / h;
			this.c = -b / h;
			this.d = e / h;
			this.tx = (b * this.ty - d * c) / h;
			this.ty = -(e * this.ty - a * c) / h;
			return this
		};
		a.transformCoords = function(e, a, b) {
			var c = d.Point.identity;
			c.x = e.a * a + e.c * b + e.tx;
			c.y = e.d * b + e.b * a + e.ty;
			return c
		};
		a.prototype.toArray = function(e) {
			this.array || (this.array = new Float32Array(9));
			e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] =
				0);
			this.array[8] = 1;
			return this.array
		};
		a.identity = new a;
		a.DEG_TO_RAD = Math.PI / 180;
		return a
	}(d.HashObject);
	d.Matrix = c;
	c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			b.call(this);
			this.x = e;
			this.y = a
		}
		__extends(a, b);
		a.prototype.clone = function() {
			return new a(this.x, this.y)
		};
		a.prototype.equals = function(e) {
			return this.x == e.x && this.y == e.y
		};
		a.distance = function(e, a) {
			return Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y))
		};
		a.identity = new a(0, 0);
		return a
	}(d.HashObject);
	d.Point = c;
	c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(e, a, d, c) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			"undefined" === typeof d && (d = 0);
			"undefined" === typeof c && (c = 0);
			b.call(this);
			this.x = e;
			this.y = a;
			this.width = d;
			this.height = c
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "right", {
			get: function() {
				return this.x + this.width
			},
			set: function(e) {
				this.width = e - this.x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "bottom", {
			get: function() {
				return this.y + this.height
			},
			set: function(e) {
				this.height =
					e - this.y
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.initialize = function(e, a, b, d) {
			this.x = e;
			this.y = a;
			this.width = b;
			this.height = d;
			return this
		};
		a.prototype.contains = function(e, a) {
			return this.x <= e && this.x + this.width >= e && this.y <= a && this.y + this.height >= a
		};
		a.prototype.intersects = function(e) {
			return this.contains(e.x, e.y) || this.contains(e.x, e.bottom) || this.contains(e.right, e.y) || this.contains(e.right, e.bottom) ? !0 : !1
		};
		a.prototype.clone = function() {
			return new a(this.x, this.y, this.width, this.height)
		};
		a.prototype.containsPoint =
			function(e) {
				return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
		};
		a.identity = new a(0, 0, 0, 0);
		return a
	}(d.HashObject);
	d.Rectangle = c;
	c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.fatal = function(a, e) {
			"undefined" === typeof e && (e = null);
			d.Logger.traceToConsole("Fatal", a, e);
			throw Error(d.Logger.getTraceCode("Fatal", a, e));
		};
		b.info = function(a, e) {
			"undefined" === typeof e && (e = null);
			d.Logger.traceToConsole("Info", a, e)
		};
		b.warning = function(a, e) {
			"undefined" === typeof e && (e = null);
			d.Logger.traceToConsole("Warning", a, e)
		};
		b.traceToConsole = function(a, e, l) {
			//console.log(d.Logger.getTraceCode(a, e, l))
		};
		b.getTraceCode = function(a, e, l) {
			return "[" + a + "]" + e + ":" +
				(null == l ? "" : l)
		};
		return b
	}();
	d.Logger = c;
	c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(a, b);
		a.getInstance = function() {
			a._instance || (a._instance = new a);
			return a._instance
		};
		a.prototype.parserXML = function(e) {
			for (var a = 0;
				"\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
			0 != a && (e = e.substring(a, e.length));
			this._isSupportDOMParser ?
				a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
			null == a && d.Logger.info("xml not found!");
			return a
		};
		a._instance = null;
		return a
	}(d.HashObject);
	d.SAXParser = c;
	c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(e) {
		function l() {
			e.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			var a = document.getElementById(l.canvas_name),
				b = a.height;
			this._designWidth = a.width;
			this._designHeight = b
		}
		__extends(l, e);
		l.getInstance = function() {
			null == l.instance && (a.initialize(), l.instance = new l);
			return l.instance
		};
		l.prototype.setDesignSize = function(e, a, l) {
			this._designWidth = e;
			this._designHeight = a;
			l && (d.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
				this._setResolutionPolicy(l))
		};
		l.prototype._setResolutionPolicy = function(e) {
			this._resolutionPolicy = e;
			e.init(this);
			e._apply(this, this._designWidth, this._designHeight)
		};
		l.prototype.getScaleX = function() {
			return this._scaleX
		};
		l.prototype.getScaleY = function() {
			return this._scaleY
		};
		l.canvas_name = "gameCanvas";
		l.canvas_div_name = "gameDiv";
		return l
	}(d.HashObject);
	d.StageDelegate = c;
	c.prototype.__class__ = "egret.StageDelegate";
	var b = function() {
		function e(a, l) {
			this.setContainerStrategy(a);
			this.setContentStrategy(l)
		}
		e.prototype.init = function(e) {
			this._containerStrategy.init(e);
			this._contentStrategy.init(e)
		};
		e.prototype._apply = function(e, a, l) {
			this._containerStrategy._apply(e, a, l);
			this._contentStrategy._apply(e, a, l)
		};
		e.prototype.setContainerStrategy = function(e) {
			e instanceof a && (this._containerStrategy = e)
		};
		e.prototype.setContentStrategy = function(e) {
			e instanceof l && (this._contentStrategy = e)
		};
		return e
	}();
	d.ResolutionPolicy = b;
	b.prototype.__class__ = "egret.ResolutionPolicy";
	var a = function() {
		function a() {}
		a.initialize =
			function() {
				a.EQUAL_TO_FRAME = new e
		};
		a.prototype.init = function(e) {};
		a.prototype._apply = function(e, a, l) {};
		a.prototype._setupContainer = function() {
			var e = document.body,
				a;
			e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight =
				a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
		};
		return a
	}();
	d.ContainerStrategy = a;
	a.prototype.__class__ = "egret.ContainerStrategy";
	var e = function(e) {
		function a() {
			e.apply(this, arguments)
		}
		__extends(a, e);
		a.prototype._apply = function(e) {
			this._setupContainer()
		};
		return a
	}(a);
	d.EqualToFrame = e;
	e.prototype.__class__ = "egret.EqualToFrame";
	var l = function() {
		function e() {}
		e.prototype.init = function(e) {};
		e.prototype._apply = function(e, a, l) {};
		return e
	}();
	d.ContentStrategy =
		l;
	l.prototype.__class__ = "egret.ContentStrategy";
	b = function(e) {
		function a(l) {
			"undefined" === typeof l && (l = 0);
			e.call(this);
			this.minWidth = l
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, l) {
			a = document.getElementById(c.canvas_name);
			var b = document.getElementById(c.canvas_div_name),
				d = document.documentElement.clientWidth,
				q = document.documentElement.clientHeight,
				g = q / l,
				r = d / g,
				s = 1;
			0 != this.minWidth && (s = Math.min(1, r / this.minWidth));
			a.width = r / s;
			a.height = l;
			a.style.width = d + "px";
			a.style.height = q * s + "px";
			b.style.width =
				d + "px";
			b.style.height = q * s + "px";
			e._scaleX = g * s;
			e._scaleY = g * s
		};
		return a
	}(l);
	d.FixedHeight = b;
	b.prototype.__class__ = "egret.FixedHeight";
	b = function(e) {
		function a(l) {
			"undefined" === typeof l && (l = 0);
			e.call(this);
			this.minHeight = l
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, l) {
			l = document.getElementById(c.canvas_name);
			var b = document.getElementById(c.canvas_div_name),
				d = document.documentElement.clientWidth,
				q = document.documentElement.clientHeight,
				g = d / a,
				r = q / g,
				s = 1;
			0 != this.minHeight && (s = Math.min(1, r / this.minHeight));
			l.width = a;
			l.height = r / s;
			l.style.width = d * s + "px";
			l.style.height = q + "px";
			b.style.width = d * s + "px";
			b.style.height = q + "px";
			e._scaleX = g * s;
			e._scaleY = g * s
		};
		return a
	}(l);
	d.FixedWidth = b;
	b.prototype.__class__ = "egret.FixedWidth";
	b = function(e) {
		function a(l, b) {
			e.call(this);
			this.width = l;
			this.height = b
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, l) {
			l = document.getElementById(c.canvas_name);
			var b = document.getElementById(c.canvas_div_name),
				d = this.width,
				q = this.height,
				g = d / a;
			l.width = a;
			l.height = q / g;
			l.style.width = d + "px";
			l.style.height =
				q + "px";
			b.style.width = d + "px";
			b.style.height = q + "px";
			e._scaleX = g;
			e._scaleY = g
		};
		return a
	}(l);
	d.FixedSize = b;
	b.prototype.__class__ = "egret.FixedSize";
	b = function(e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, l) {
			a = document.getElementById(c.canvas_name);
			a.style.width = a.width + "px";
			a.style.height = a.height + "px";
			e._scaleX = 1;
			e._scaleY = 1
		};
		return a
	}(l);
	d.NoScale = b;
	b.prototype.__class__ = "egret.NoScale"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(a, b);
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		a.prototype.addDrawArea = function(e) {
			this._drawAreaList.push(e)
		};
		a.prototype.clearDrawArea = function() {
			this._drawAreaList = []
		};
		a.prototype.drawImage = function(e, a, b, c, f, h, k, n, m, p) {
			k = k || 0;
			n = n || 0;
			var t = a._texture_to_render;
			if (null != t && 0 != h && 0 != f && 0 != m && 0 != p)
				if (a._worldBounds) {
					var r = this._originalData;
					r.sourceX =
						b;
					r.sourceY = c;
					r.sourceWidth = f;
					r.sourceHeight = h;
					r.destX = k;
					r.destY = n;
					r.destWidth = m;
					r.destHeight = p;
					for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
						var v = s[u];
						if (!this.ignoreRender(a, v, r.destX, r.destY)) {
							if (0 != this._drawAreaList.length)
								if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
									if (a._worldBounds.x + r.destX < v.x || a._worldBounds.y + r.destY < v.y || a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height) {
										d.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
										break
									}
								} else {
									var x = a._worldTransform.a,
										y = a._worldTransform.d,
										w;
									a._worldBounds.x + r.destX < v.x && (w = (v.x - a._worldBounds.x) / x - r.destX, b += w / (m / f), f -= w / (m / f), m -= w, k += w);
									a._worldBounds.y + r.destY < v.y && (w = (v.y - a._worldBounds.y) / y - r.destY, c += w / (p / h), h -= w / (p / h), p -= w, n += w);
									a._worldBounds.x + a._worldBounds.width + r.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + r.destX, f -= w / (m / f), m -= w);
									a._worldBounds.y + a._worldBounds.height + r.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height -
										v.y - v.height) / y + r.destY, h -= w / (p / h), p -= w)
								}
							e.drawImage(t, b, c, f, h, k, n, m, p)
						}
					}
				} else e.drawImage(t, b, c, f, h, k, n, m, p)
		};
		a.prototype.ignoreRender = function(e, a, b, d) {
			var c = e._worldBounds;
			b *= e._worldTransform.a;
			d *= e._worldTransform.d;
			return c.x + c.width + b <= a.x || c.x + b >= a.x + a.width || c.y + c.height + d <= a.y || c.y + d >= a.y + a.height ? !0 : !1
		};
		a.prototype.getDrawAreaList = function() {
			var e;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new d.Rectangle(0, 0, d.MainContext.instance.stage.stageWidth,
				d.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
			return e
		};
		return a
	}(d.HashObject);
	d.RenderFilter = c;
	c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.mapClass = function(a, e, l) {
			"undefined" === typeof l && (l = "");
			a = this.getKey(a) + "#" + l;
			this.mapClassDic[a] = e
		};
		b.getKey = function(a) {
			return "string" == typeof a ? a : d.getQualifiedClassName(a)
		};
		b.mapValue = function(a, e, l) {
			"undefined" === typeof l && (l = "");
			a = this.getKey(a) + "#" + l;
			this.mapValueDic[a] = e
		};
		b.hasMapRule = function(a, e) {
			"undefined" === typeof e && (e = "");
			var l = this.getKey(a) + "#" + e;
			return this.mapValueDic[l] || this.mapClassDic[l] ? !0 : !1
		};
		b.getInstance = function(a, e) {
			"undefined" ===
				typeof e && (e = "");
			var l = this.getKey(a) + "#" + e;
			if (this.mapValueDic[l]) return this.mapValueDic[l];
			var b = this.mapClassDic[l];
			if (b) return b = new b, this.mapValueDic[l] = b, delete this.mapClassDic[l], b;
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + l + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		b.mapClassDic = {};
		b.mapValueDic = {};
		return b
	}();
	d.Injector =
		c;
	c.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.NORMAL = "normal";
		b.ADD = "add";
		b.LAYER = "layer";
		return b
	}();
	d.BlendMode = c;
	c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._sizeDirty = this._normalDirty = !0;
			this._parent = null;
			this._cacheAsBitmap = !1;
			this._y = this._x = 0;
			this._scaleY = this._scaleX = 1;
			this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
			this._visible = !0;
			this._rotation = 0;
			this._alpha = 1;
			this._skewY = this._skewX = 0;
			this._hasHeightSet = this._hasWidthSet = !1;
			this.worldAlpha = 1;
			this._rectH = this._rectW = 0;
			this._stage = null;
			this._worldTransform = new d.Matrix;
			this._cacheBounds = new d.Rectangle(0, 0, 0, 0)
		}
		__extends(a, b);
		a.prototype._setDirty = function() {
			this._normalDirty = !0
		};
		a.prototype.getDirty = function() {
			return this._normalDirty || this._sizeDirty
		};
		a.prototype._setParentSizeDirty = function() {
			!this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty()
		};
		a.prototype._setSizeDirty = function() {
			this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setParentSizeDirty())
		};
		a.prototype._clearDirty = function() {
			this._normalDirty = !1
		};
		a.prototype._clearSizeDirty = function() {
			this._sizeDirty = !1
		};
		Object.defineProperty(a.prototype, "parent", {
			get: function() {
				return this._parent
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._parentChanged = function(e) {
			this._parent = e
		};
		Object.defineProperty(a.prototype, "x", {
			get: function() {
				return this._x
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._x = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "y", {
			get: function() {
				return this._y
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(),
					this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scaleX", {
			get: function() {
				return this._scaleX
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scaleY", {
			get: function() {
				return this._scaleY
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype,
			"anchorOffsetX", {
				get: function() {
					return this._anchorOffsetX
				},
				set: function(e) {
					d.NumberUtils.isNumber(e) && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorX", {
			get: function() {
				return this._anchorX
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorY", {
			get: function() {
				return this._anchorY
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "visible", {
			get: function() {
				return this._visible
			},
			set: function(e) {
				this._visible = e;
				this._setSizeDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "rotation", {
			get: function() {
				return this._rotation
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._rotation = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._alpha = e, this._setDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "skewX", {
			get: function() {
				return this._skewX
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) &&
					(this._skewX = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "skewY", {
			get: function() {
				return this._skewY
			},
			set: function(e) {
				d.NumberUtils.isNumber(e) && (this._skewY = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "touchEnabled", {
			get: function() {
				return this._touchEnabled
			},
			set: function(e) {
				this._touchEnabled = e
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scrollRect", {
			get: function() {
				return this._scrollRect
			},
			set: function(e) {
				this._scrollRect = e;
				this._setSizeDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "measuredWidth", {
			get: function() {
				return this._measureBounds().width
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "measuredHeight", {
			get: function() {
				return this._measureBounds().height
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "explicitWidth", {
			get: function() {
				return this._explicitWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype,
			"explicitHeight", {
				get: function() {
					return this._explicitHeight
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "width", {
			get: function() {
				return this._getSize(d.Rectangle.identity).width
			},
			set: function(e) {
				this._setWidth(e)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "height", {
			get: function() {
				return this._getSize(d.Rectangle.identity).height
			},
			set: function(e) {
				this._setHeight(e)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setWidth = function(e) {
			this._setSizeDirty();
			this._explicitWidth = e;
			this._hasWidthSet = d.NumberUtils.isNumber(e)
		};
		a.prototype._setHeight = function(e) {
			this._setSizeDirty();
			this._explicitHeight = e;
			this._hasHeightSet = d.NumberUtils.isNumber(e)
		};
		a.prototype._draw = function(e) {
			if (this.visible && !this.drawCacheTexture(e)) {
				e.setAlpha(this.worldAlpha, this.blendMode);
				e.setTransform(this._worldTransform);
				var a = this.mask || this._scrollRect;
				a && e.pushMask(a);
				this._render(e);
				a && e.popMask()
			}
			this.destroyCacheBounds()
		};
		a.prototype.drawCacheTexture = function(e) {
			if (this._cacheAsBitmap) {
				var a =
					this._texture_to_render,
					b = a._offsetX,
					c = a._offsetY,
					f = a._textureWidth,
					a = a._textureHeight;
				this._updateTransform();
				e.setAlpha(this.worldAlpha, this.blendMode);
				e.setTransform(this._worldTransform);
				var h = d.MainContext.instance.rendererContext.texture_scale_factor;
				d.RenderFilter.getInstance().drawImage(e, this, 0, 0, f * h, a * h, b, c, f, a);
				return !0
			}
			return !1
		};
		a.prototype._updateTransform = function() {
			this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
			var e = this._getOffsetPoint();
			this._worldTransform.appendTransform(this._x,
				this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e.x, e.y);
			this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
			this.worldAlpha = this._parent.worldAlpha * this._alpha
		};
		a.prototype._render = function(e) {};
		a.prototype.getBounds = function(e) {
			var a = this._measureBounds(),
				b = this._hasWidthSet ? this._explicitWidth : a.width,
				c = this._hasHeightSet ? this._explicitHeight : a.height,
				f = a.x,
				a = a.y,
				h, k;
			0 != this._anchorX || 0 != this._anchorY ? (h = b * this._anchorX, k = c * this._anchorY) :
				(h = this._anchorOffsetX, k = this._anchorOffsetY);
			this._cacheBounds.initialize(f - h, a - k, b, c);
			b = this._cacheBounds;
			e || (e = new d.Rectangle);
			return e.initialize(b.x, b.y, b.width, b.height)
		};
		a.prototype.destroyCacheBounds = function() {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0
		};
		a.prototype._getConcatenatedMatrix = function() {
			for (var e = a.identityMatrixForGetConcatenated.identity(), l = this; null != l;) {
				if (0 != l._anchorX || 0 != l._anchorY) {
					var b = l._getSize(d.Rectangle.identity);
					e.prependTransform(l._x, l._y, l._scaleX, l._scaleY, l._rotation, l._skewX, l._skewY, b.width * l._anchorX, b.height * l._anchorY)
				} else e.prependTransform(l._x, l._y, l._scaleX, l._scaleY, l._rotation, l._skewX, l._skewY, l._anchorOffsetX, l._anchorOffsetY);
				l = l._parent
			}
			return e
		};
		a.prototype.localToGlobal = function(e, a, b) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			var c = this._getConcatenatedMatrix();
			c.append(1, 0, 0, 1, e, a);
			b || (b = new d.Point);
			b.x = c.tx;
			b.y = c.ty;
			return b
		};
		a.prototype.globalToLocal = function(e,
			a, b) {
			"undefined" === typeof e && (e = 0);
			"undefined" === typeof a && (a = 0);
			var c = this._getConcatenatedMatrix();
			c.invert();
			c.append(1, 0, 0, 1, e, a);
			b || (b = new d.Point);
			b.x = c.tx;
			b.y = c.ty;
			return b
		};
		a.prototype.hitTest = function(e, a, b) {
			"undefined" === typeof b && (b = !1);
			if (!this.visible || !b && !this._touchEnabled) return null;
			b = this._getSize(d.Rectangle.identity);
			return 0 <= e && e < b.width && 0 <= a && a < b.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <=
				e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this : null : this : null
		};
		a.prototype.hitTestPoint = function(e, a, b) {
			e = this.globalToLocal(e, a);
			return b ? (this._hitTestPointTexture || (this._hitTestPointTexture = new d.RenderTexture), b = this._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
		};
		a.prototype._getMatrix = function() {
			var e = d.Matrix.identity.identity(),
				a = this._getOffsetPoint();
			e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a.x, a.y);
			return e
		};
		a.prototype._getSize = function(e) {
			return this._hasHeightSet && this._hasWidthSet ? e.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(d.Rectangle.identity)
		};
		a.prototype._measureSize = function(e) {
			this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW, e.height = this._rectH);
			return e
		};
		a.prototype._measureBounds = function() {
			return d.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		a.prototype._getOffsetPoint = function() {
			var e = this._anchorOffsetX,
				a = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(d.Rectangle.identity), e = this._anchorX * a.width, a = this._anchorY * a.height;
			var b = d.Point.identity;
			b.x = e;
			b.y = a;
			return b
		};
		a.prototype._onAddToStage = function() {
			this._stage = d.MainContext.instance.stage;
			d.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		a.prototype._onRemoveFromStage =
			function() {
				this._stage = null;
				d.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(a.prototype, "stage", {
			get: function() {
				return this._stage
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.addEventListener = function(e, l, c, g, f) {
			"undefined" === typeof g && (g = !1);
			"undefined" === typeof f && (f = 0);
			b.prototype.addEventListener.call(this, e, l, c, g, f);
			((g = e == d.Event.ENTER_FRAME) || e == d.Event.RENDER) && this._insertEventBin(g ? a._enterFrameCallBackList : a._renderCallBackList, l, c, f)
		};
		a.prototype.removeEventListener =
			function(e, l, c, g) {
				"undefined" === typeof g && (g = !1);
				b.prototype.removeEventListener.call(this, e, l, c, g);
				((g = e == d.Event.ENTER_FRAME) || e == d.Event.RENDER) && this._removeEventBin(g ? a._enterFrameCallBackList : a._renderCallBackList, l, c)
		};
		a.prototype.dispatchEvent = function(e) {
			if (!e._bubbles) return b.prototype.dispatchEvent.call(this, e);
			for (var a = [], d = this; d;) a.unshift(d), d = d.parent;
			for (var c = a.length, d = c - 1, c = c - 2; 0 <= c; c--) a.push(a[c]);
			e._reset();
			this._dispatchPropagationEvent(e, a, d);
			return !e.isDefaultPrevented()
		};
		a.prototype._dispatchPropagationEvent = function(e, a, b) {
			for (var d = a.length, c = 0; c < d; c++) {
				var h = a[c];
				e._setCurrentTarget(h);
				e._target = this;
				e._eventPhase = c < b ? 1 : c == b ? 2 : 3;
				h._notifyListener(e);
				if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
			}
		};
		a.prototype.willTrigger = function(e) {
			for (var a = this; a;) {
				if (a.hasEventListener(e)) return !0;
				a = a._parent
			}
			return !1
		};
		Object.defineProperty(a.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap
			},
			set: function(e) {
				(this._cacheAsBitmap = e) ? (this.renderTexture ||
					(this.renderTexture = new d.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		a.getTransformBounds = function(e, a) {
			var b, d, c = e.width,
				h = e.height,
				k = c * a.a,
				c = c * a.b,
				n = h * a.c,
				h = h * a.d,
				m = a.tx,
				p = a.ty,
				t = m,
				r = m,
				s = p,
				u = p;
			(b = k + m) < t ? t = b : b > r && (r = b);
			(b = k + n + m) < t ? t = b : b > r && (r = b);
			(b = n + m) < t ? t = b : b > r && (r = b);
			(d = c + p) < s ? s = d : d > u && (u = d);
			(d = c + h + p) < s ? s = d : d > u && (u = d);
			(d = h + p) < s ? s = d : d > u && (u = d);
			return e.initialize(t, s, r - t, u - s)
		};
		a.identityMatrixForGetConcatenated =
			new d.Matrix;
		a._enterFrameCallBackList = [];
		a._renderCallBackList = [];
		return a
	}(d.EventDispatcher);
	d.DisplayObject = c;
	c.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(e) {
				this._touchChildren = e
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "numChildren", {
			get: function() {
				return this._children.length
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.setChildIndex = function(e, a) {
			this.doSetChildIndex(e, a)
		};
		a.prototype.doSetChildIndex = function(e,
			a) {
			var b = this._children.indexOf(e);
			0 > b && d.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(b, 1);
			0 > a || this._children.length <= a ? this._children.push(e) : this._children.splice(a, 0, e)
		};
		a.prototype.addChild = function(e) {
			var a = this.numChildren;
			e._parent == this && a--;
			return this._doAddChild(e, a)
		};
		a.prototype.addChildAt = function(e, a) {
			return this._doAddChild(e, a)
		};
		a.prototype._doAddChild = function(e, l, b) {
			"undefined" === typeof b && (b = !0);
			if (e == this) return e;
			if (0 > l || l > this._children.length) return d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
				e;
			var c = e.parent;
			if (c == this) return this.doSetChildIndex(e, l), e;
			c && c.removeChild(e);
			this._children.splice(l, 0, e);
			e._parentChanged(this);
			b && e.dispatchEventWith(d.Event.ADDED, !0);
			if (this._stage)
				for (e._onAddToStage(), l = a.__EVENT__ADD_TO_STAGE_LIST; 0 < l.length;) l.shift().dispatchEventWith(d.Event.ADDED_TO_STAGE);
			e._setDirty();
			this._setSizeDirty();
			return e
		};
		a.prototype.removeChild = function(e) {
			e = this._children.indexOf(e);
			if (0 <= e) return this._doRemoveChild(e);
			d.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null
		};
		a.prototype.removeChildAt = function(e) {
			if (0 <= e && e < this._children.length) return this._doRemoveChild(e);
			d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype._doRemoveChild = function(e, b) {
			"undefined" === typeof b && (b = !0);
			var c = this._children,
				g = c[e];
			b && g.dispatchEventWith(d.Event.REMOVED, !0);
			if (this._stage) {
				g._onRemoveFromStage();
				for (var f = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) f.shift().dispatchEventWith(d.Event.REMOVED_FROM_STAGE)
			}
			g._parentChanged(null);
			c.splice(e, 1);
			this._setSizeDirty();
			return g
		};
		a.prototype.getChildAt = function(e) {
			if (0 <= e && e < this._children.length) return this._children[e];
			d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype.contains = function(e) {
			for (; e;) {
				if (e == this) return !0;
				e = e._parent
			}
			return !1
		};
		a.prototype.swapChildrenAt = function(e, a) {
			0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : d.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
		};
		a.prototype.swapChildren = function(e, a) {
			var b = this._children.indexOf(e),
				c = this._children.indexOf(a); - 1 == b || -1 == c ? d.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(b, c)
		};
		a.prototype._swapChildrenAt = function(e, a) {
			if (e != a) {
				var b = this._children,
					d = b[e];
				b[e] = b[a];
				b[a] = d
			}
		};
		a.prototype.getChildIndex = function(e) {
			return this._children.indexOf(e)
		};
		a.prototype.removeChildren = function() {
			for (var e = this._children.length - 1; 0 <= e; e--) this._doRemoveChild(e)
		};
		a.prototype._updateTransform =
			function() {
				if (this.visible) {
					b.prototype._updateTransform.call(this);
					for (var e = 0, a = this._children.length; e < a; e++) this._children[e]._updateTransform()
				}
		};
		a.prototype._render = function(e) {
			for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._draw(e)
		};
		a.prototype._measureBounds = function() {
			for (var a = 0, b = 0, c = 0, g = 0, f = this._children.length, h = 0; h < f; h++) {
				var k = this._children[h],
					n;
				if (k.visible && (n = d.DisplayObject.getTransformBounds(k._getSize(d.Rectangle.identity), k._getMatrix()))) {
					var k = n.x,
						m = n.y,
						p =
						n.width + n.x,
						t = n.height + n.y;
					if (k < a || 0 == h) a = k;
					if (p > b || 0 == h) b = p;
					if (m < c || 0 == h) c = m;
					if (t > g || 0 == h) g = t
				}
			}
			return d.Rectangle.identity.initialize(a, c, b - a, g - c)
		};
		a.prototype.hitTest = function(a, l, c) {
			"undefined" === typeof c && (c = !1);
			var g;
			if (!this.visible) return null;
			if (this._scrollRect) {
				if (0 > a || 0 > l || a > this._scrollRect.width || l > this._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > l || l > this.mask.y + this.mask.height)) return null;
			for (var f = this._children, h =
				this._touchChildren, k = f.length - 1; 0 <= k; k--) {
				var n = f[k],
					m = n,
					p = m._getOffsetPoint(),
					t = m._x,
					r = m._y;
				this._scrollRect && (t -= this._scrollRect.x, r -= this._scrollRect.y);
				m = d.Matrix.identity.identity().prependTransform(t, r, m._scaleX, m._scaleY, m._rotation, 0, 0, p.x, p.y);
				m.invert();
				m = d.Matrix.transformCoords(m, a, l);
				if (n = n.hitTest(m.x, m.y, !0)) {
					if (n._touchEnabled && h) return n;
					if (this._touchEnabled) return this;
					null == g && (g = n)
				}
			}
			return g ? g : b.prototype.hitTest.call(this, a, l, c)
		};
		a.prototype._onAddToStage = function() {
			b.prototype._onAddToStage.call(this);
			for (var a = this.numChildren, l = 0; l < a; l++) this._children[l]._onAddToStage()
		};
		a.prototype._onRemoveFromStage = function() {
			b.prototype._onRemoveFromStage.call(this);
			for (var a = this.numChildren, l = 0; l < a; l++) this._children[l]._onRemoveFromStage()
		};
		a.prototype.getChildByName = function(a) {
			for (var b = this._children, d = this.numChildren, c, f = 0; f < d; f++)
				if (c = b[f], c.name == a) return c;
			return null
		};
		a.__EVENT__ADD_TO_STAGE_LIST = [];
		a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return a
	}(d.DisplayObject);
	d.DisplayObjectContainer = c;
	c.prototype.__class__ =
		"egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a, l) {
			"undefined" === typeof a && (a = 480);
			"undefined" === typeof l && (l = 800);
			b.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = a;
			this._stageHeight = l
		}
		__extends(a, b);
		a.prototype.invalidate = function() {
			a._invalidateRenderFlag = !0
		};
		Object.defineProperty(a.prototype, "scaleMode", {
			get: function() {
				return this._scaleMode
			},
			set: function(a) {
				if (this._scaleMode != a) {
					this._scaleMode = a;
					var b = {};
					b[d.StageScaleMode.NO_SCALE] = new d.NoScale;
					b[d.StageScaleMode.SHOW_ALL] =
						new d.FixedWidth;
					a = b[a];
					if (!a) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
					b = new d.EqualToFrame;
					a = new d.ResolutionPolicy(b, a);
					d.StageDelegate.getInstance()._setResolutionPolicy(a);
					a = document.getElementById(d.StageDelegate.canvas_name);
					this._stageWidth = a.width;
					this._stageHeight = a.height;
					this.dispatchEventWith(d.Event.RESIZE)
				}
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "stageWidth", {
			get: function() {
				return this._stageWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "stageHeight", {
			get: function() {
				return this._stageHeight
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.hitTest = function(a, b) {
			if (!this.touchEnabled) return null;
			var c;
			if (!this.visible) return this;
			for (var g = this._children, f = g.length - 1; 0 <= f; f--) {
				var h = c = g[f],
					k = h._getOffsetPoint(),
					h = d.Matrix.identity.identity().prependTransform(h.x, h.y, h.scaleX, h.scaleY, h.rotation, 0, 0, k.x, k.y);
				h.invert();
				h = d.Matrix.transformCoords(h, a, b);
				if ((c = c.hitTest(h.x, h.y, !0)) && c.touchEnabled) return c
			}
			return this
		};
		a.prototype.getBounds = function(a) {
			a || (a = new d.Rectangle);
			return a.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		a.prototype._updateTransform = function() {
			for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._updateTransform()
		};
		a._invalidateRenderFlag = !1;
		return a
	}(d.DisplayObjectContainer);
	d.Stage = c;
	c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.NO_SCALE = "noScale";
		b.SHOW_ALL = "showAll";
		return b
	}();
	d.StageScaleMode = c;
	c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.REPEAT = "repeat";
		b.SCALE = "scale";
		return b
	}();
	d.BitmapFillMode = c;
	c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			b.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.fillMode = "scale";
			a && (this._texture = a, this._setSizeDirty())
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "texture", {
			get: function() {
				return this._texture
			},
			set: function(a) {
				a != this._texture && (this._setSizeDirty(), this._texture = a)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(e) {
			var b = this._texture;
			b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : b._textureWidth,
				this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
		};
		a._drawBitmap = function(e, b, c, g) {
			var f = g._texture_to_render;
			if (f) {
				var h = f._textureWidth,
					k = f._textureHeight;
				if ("scale" == g.fillMode) {
					var n = g.scale9Grid || f.scale9Grid;
					if (n && h - n.width < b && k - n.height < c) a.drawScale9GridImage(e, g, n, b, c);
					else {
						var n = f._offsetX,
							m = f._offsetY,
							p = f._bitmapWidth || h,
							t = f._bitmapHeight || k;
						b /= h;
						n = Math.round(n * b);
						b = Math.round(p * b);
						c /= k;
						m = Math.round(m * c);
						c = Math.round(t * c);
						d.RenderFilter.getInstance().drawImage(e,
							g, f._bitmapX, f._bitmapY, p, t, n, m, b, c)
					}
				} else a.drawRepeatImage(e, g, b, c)
			}
		};
		a.drawRepeatImage = function(a, b, c, g) {
			var f = b._texture_to_render;
			if (f)
				for (var h = f._textureWidth, k = f._textureHeight, n = f._bitmapX, m = f._bitmapY, p = f._bitmapWidth || h, t = f._bitmapHeight || k, r = f._offsetX, f = f._offsetY, s = d.RenderFilter.getInstance(); r < c; r += h)
					for (var u = f; u < g; u += k) {
						var v = Math.min(p, c - r),
							x = Math.min(t, g - u);
						s.drawImage(a, b, n, m, p, t, r, u, v, x)
					}
		};
		a.drawScale9GridImage = function(a, b, c, g, f) {
			var h = b._texture_to_render;
			if (h && c) {
				var k = d.RenderFilter.getInstance(),
					n = h._textureWidth,
					m = h._textureHeight,
					p = h._bitmapX,
					t = h._bitmapY,
					r = h._bitmapWidth || n,
					s = h._bitmapHeight || m,
					u = h._offsetX,
					h = h._offsetY;
				c = d.Rectangle.identity.initialize(c.x - Math.round(u), c.y - Math.round(u), c.width, c.height);
				u = Math.round(u);
				h = Math.round(h);
				g -= n - r;
				f -= m - s;
				c.y == c.bottom && (c.bottom < s ? c.bottom++ : c.y--);
				c.x == c.right && (c.right < r ? c.right++ : c.x--);
				var n = p + c.x,
					m = p + c.right,
					v = r - c.right,
					x = t + c.y,
					y = t + c.bottom,
					w = s - c.bottom,
					z = u + c.x,
					A = h + c.y,
					s = f - (s - c.bottom),
					r = g - (r - c.right);
				k.drawImage(a, b, p, t, c.x, c.y, u, h,
					c.x, c.y);
				k.drawImage(a, b, n, t, c.width, c.y, z, h, r - c.x, c.y);
				k.drawImage(a, b, m, t, v, c.y, u + r, h, g - r, c.y);
				k.drawImage(a, b, p, x, c.x, c.height, u, A, c.x, s - c.y);
				k.drawImage(a, b, n, x, c.width, c.height, z, A, r - c.x, s - c.y);
				k.drawImage(a, b, m, x, v, c.height, u + r, A, g - r, s - c.y);
				k.drawImage(a, b, p, y, c.x, w, u, h + s, c.x, f - s);
				k.drawImage(a, b, n, y, c.width, w, z, h + s, r - c.x, f - s);
				k.drawImage(a, b, m, y, v, w, u + r, h + s, g - r, f - s)
			}
		};
		a.prototype._measureBounds = function() {
			var a = this._texture;
			return a ? d.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth,
				a._textureHeight) : b.prototype._measureBounds.call(this)
		};
		a.debug = !1;
		return a
	}(d.DisplayObject);
	d.Bitmap = c;
	c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._text = "";
			this._textChanged = !1;
			this._bitmapPool = []
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "text", {
			get: function() {
				return this._text
			},
			set: function(a) {
				this._textChanged = !0;
				this._text = a
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._updateTransform = function() {
			this.visible && (this._textChanged && this._renderText(), b.prototype._updateTransform.call(this))
		};
		a.prototype._renderText = function(a) {
			var b = a = 0;
			this._textChanged && this.removeChildren();
			for (var c = 0, g = this.text.length; c < g; c++) {
				var f = this.text.charAt(c),
					h = this.spriteSheet.getTexture(f);
				if (null == h) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + f);
				else {
					var f = h._offsetX,
						k = h._offsetY,
						n = h._textureWidth;
					if (this._textChanged) {
						var m = this._bitmapPool[c];
						m || (m = new d.Bitmap, this._bitmapPool.push(m));
						m.texture = h;
						this.addChild(m);
						m.x = a
					}
					a += n + f;
					k + h._textureHeight > b && (b = k + h._textureHeight)
				}
			}
			this._textChanged = !1;
			return d.Rectangle.identity.initialize(0, 0, a, b)
		};
		a.prototype._measureBounds =
			function() {
				return this._renderText(!0)
		};
		return a
	}(d.DisplayObjectContainer);
	d.BitmapText = c;
	c.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {
			this.commandQueue = []
		}
		b.prototype.beginFill = function(a, e) {};
		b.prototype._setStyle = function(a) {};
		b.prototype.drawRect = function(a, e, b, d) {};
		b.prototype.drawCircle = function(a, e, b) {};
		b.prototype.drawRoundRect = function(a, e, b, d, c, f) {};
		b.prototype.drawEllipse = function(a, e, b, d) {};
		b.prototype.lineStyle = function(a, e, b, d, c, f, h, k) {};
		b.prototype.lineTo = function(a, e) {};
		b.prototype.curveTo = function(a, e, b, d) {};
		b.prototype.moveTo = function(a, e) {};
		b.prototype.clear = function() {};
		b.prototype.endFill = function() {};
		b.prototype._draw = function(a) {};
		return b
	}();
	d.Graphics = c;
	c.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(b, a, e) {
			this.method = b;
			this.thisObject = a;
			this.args = e
		}
	})().prototype.__class__ = "Command"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new d.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(a) {
			this._graphics && this._graphics._draw(a)
		};
		return a
	}(d.DisplayObject);
	d.Shape = c;
	c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new d.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(a) {
			this._graphics && this._graphics._draw(a);
			b.prototype._render.call(this, a)
		};
		return a
	}(d.DisplayObjectContainer);
	d.Sprite = c;
	c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._fontFamily = "Arial";
			this._size = 30;
			this._textColorString = "#FFFFFF";
			this._textColor = 16777215;
			this._strokeColorString = "#000000";
			this._stroke = this._strokeColor = 0;
			this._textAlign = "left";
			this._verticalAlign = "top";
			this._numLines = this._lineSpacing = 0;
			this.measuredWidths = []
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "text", {
			get: function() {
				return this._text
			},
			set: function(a) {
				this._text != a && (this._setTextDirty(), this._text = a)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setTextDirty = function() {
			this._setSizeDirty()
		};
		Object.defineProperty(a.prototype, "fontFamily", {
			get: function() {
				return this._fontFamily
			},
			set: function(a) {
				this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "size", {
			get: function() {
				return this._size
			},
			set: function(a) {
				this._size != a && (this._setTextDirty(), this._size = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "italic", {
			get: function() {
				return this._italic
			},
			set: function(a) {
				this._italic != a && (this._setTextDirty(), this._italic = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "bold", {
			get: function() {
				return this._bold
			},
			set: function(a) {
				this._bold != a && (this._setTextDirty(), this._bold = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "textColor", {
			get: function() {
				return this._textColor
			},
			set: function(a) {
				this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = d.toColorString(a))
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor
			},
			set: function(a) {
				this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = d.toColorString(a))
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "stroke", {
			get: function() {
				return this._stroke
			},
			set: function(a) {
				this._stroke != a && (this._setTextDirty(), this._stroke = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "textAlign", {
			get: function() {
				return this._textAlign
			},
			set: function(a) {
				this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "verticalAlign", {
			get: function() {
				return this._verticalAlign
			},
			set: function(a) {
				this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "lineSpacing", {
			get: function() {
				return this._lineSpacing
			},
			set: function(a) {
				this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "numLines", {
			get: function() {
				return this._numLines
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(a) {
			this.drawText(a, !1);
			this._clearDirty()
		};
		a.prototype._measureBounds = function() {
			return this.drawText(d.MainContext.instance.rendererContext, !0)
		};
		a.prototype.drawText = function(a, b) {
			var c = this.getTextLines(a);
			if (!c) return d.Rectangle.identity.initialize(0, 0, 0, 0);
			var g = c.length,
				f = 0.5 * this._size,
				h = this._size + this._lineSpacing,
				k = g * h - this._lineSpacing;
			this._textHeight = k;
			var n = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY;
			if (this._hasHeightSet && k < n) {
				var m = 0;
				this._verticalAlign == d.VerticalAlign.MIDDLE ? m = 0.5 : this._verticalAlign == d.VerticalAlign.BOTTOM && (m = 1);
				f += m * (n - k)
			}
			var m = f = Math.round(f),
				p = 0;
			this._textAlign == d.HorizontalAlign.CENTER ? p = 0.5 : this._textAlign == d.HorizontalAlign.RIGHT && (p = 1);
			var t = this.measuredWidths,
				r;
			r = this._hasWidthSet ? this._explicitWidth : this._textWidth;
			for (var s = Number.POSITIVE_INFINITY, u = 0; u < g; u++) {
				var v = c[u],
					x = Math.round((r - t[u]) * p);
				x < s && (s = x);
				!b && f < n && a.drawText(this, v, x, f, r);
				f += h
			}
			return d.Rectangle.identity.initialize(s, m, r, k)
		};
		a.prototype.getTextLines = function(a) {
			var b = this.text ? this.text.toString() : "";
			if (!b) return null;
			var d = this.measuredWidths;
			d.length = 0;
			a.setupFont(this);
			var b = b.split(/(?:\r\n|\r|\n)/),
				c = b.length,
				f = 0;
			if (this._hasWidthSet)
				for (var h = this._explicitWidth, k = 0; k < c; k++) {
					var n = b[k],
						m = a.measureText(n);
					if (m > h) {
						for (var p = "", t = 0, r = n.length, s = 0; s < r; s++) {
							var u = n.charAt(s),
								m = a.measureText(u);
							t + m > h && (0 == t ? (b.splice(k, 0, u), d[k] = m, f < m && (f = m), m = 0, u = "") : (b.splice(k, 0, p), d[k] = t, f < t && (f = t), p = "", t = 0), k++, c++);
							t += m;
							p += u
						}
						b[k] = p;
						d[k] = t
					} else d[k] = m, f < m && (f = m)
				} else
					for (k = 0; k < c; k++) n = b[k], m = a.measureText(n), d[k] = m, f < m && (f = m);
			this._textWidth = f;
			return b
		};
		return a
	}(d.DisplayObject);
	d.TextField = c;
	c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.DYNAMIC = "dynamic";
		b.INPUT = "input";
		return b
	}();
	d.TextFieldType = c;
	c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			b.call(this);
			var d = a.bitmapData;
			this.bitmapData = d;
			this._textureMap = {};
			this._sourceWidth = d.width;
			this._sourceHeight = d.height;
			this._bitmapX = a._bitmapX - a._offsetX;
			this._bitmapY = a._bitmapY - a._offsetY
		}
		__extends(a, b);
		a.prototype.getTexture = function(a) {
			return this._textureMap[a]
		};
		a.prototype.createTexture = function(a, b, c, g, f, h, k, n, m) {
			"undefined" === typeof h && (h = 0);
			"undefined" === typeof k && (k = 0);
			"undefined" === typeof n && (n = h + g);
			"undefined" === typeof m && (m = k + f);
			var p =
				new d.Texture;
			p._bitmapData = this.bitmapData;
			p._bitmapX = this._bitmapX + b;
			p._bitmapY = this._bitmapY + c;
			p._bitmapWidth = g;
			p._bitmapHeight = f;
			p._offsetX = h;
			p._offsetY = k;
			p._textureWidth = n;
			p._textureHeight = m;
			p._sourceWidth = this._sourceWidth;
			p._sourceHeight = this._sourceHeight;
			return this._textureMap[a] = p
		};
		return a
	}(d.HashObject);
	d.SpriteSheet = c;
	c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._placeholderText = "";
			this._edFontSize = 14;
			this._textColor = 16711680;
			this._placeholderFontSize = 14;
			this._placeholderColor = 16776960;
			this._preY = this._preX = 0;
			this.stageText = new d.StageText;
			var a = this.localToGlobal();
			this.stageText._open(a.x, a.y, this._explicitWidth, this._explicitHeight)
		}
		__extends(a, b);
		a.prototype._onAddToStage = function() {
			b.prototype._onAddToStage.call(this);
			this.addEventListener(d.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler,
				this)
		};
		a.prototype.setText = function(a) {
			this.stageText._setText(a)
		};
		a.prototype.getText = function() {
			return this.stageText._getText()
		};
		a.prototype.setTextType = function(a) {
			this.stageText._setTextType(a)
		};
		a.prototype.getTextType = function() {
			return this.stageText._getTextType()
		};
		a.prototype.onMouseDownHandler = function(a) {};
		a.prototype._onRemoveFromStage = function() {
			this.stageText._remove()
		};
		a.prototype._measureBounds = function() {
			return d.Rectangle.identity
		};
		a.prototype.hitTest = function(a, b, d) {
			return null
		};
		a.prototype._setDirty = function() {
			b.prototype._setDirty.call(this);
			var a = this.localToGlobal();
			this.stageText.changePosition(a.x, a.y);
			this.stageText.changeSize(this._explicitWidth, this._explicitHeight)
		};
		return a
	}(d.DisplayObject);
	d.TextInput = c;
	c.prototype.__class__ = "egret.TextInput"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a, d) {
			b.call(this, a);
			this.charList = this.parseConfig(d)
		}
		__extends(a, b);
		a.prototype.getTexture = function(a) {
			var b = this._textureMap[a];
			if (!b) {
				b = this.charList[a];
				if (!b) return null;
				b = this.createTexture(a, b.x, b.y, b.width, b.height, b.offsetX, b.offsetY);
				this._textureMap[a] = b
			}
			return b
		};
		a.prototype.parseConfig = function(a) {
			a = a.split("\r\n").join("\n");
			a = a.split("\n");
			for (var b = this.getConfigByKey(a[3], "count"), d = {}, c = 4; c < 4 + b; c++) {
				var f = a[c],
					h = String.fromCharCode(this.getConfigByKey(f,
						"id")),
					k = {};
				d[h] = k;
				k.x = this.getConfigByKey(f, "x");
				k.y = this.getConfigByKey(f, "y");
				k.width = this.getConfigByKey(f, "width");
				k.height = this.getConfigByKey(f, "height");
				k.offsetX = this.getConfigByKey(f, "xoffset");
				k.offsetY = this.getConfigByKey(f, "yoffset")
			}
			return d
		};
		a.prototype.getConfigByKey = function(a, b) {
			for (var d = a.split(" "), c = 0, f = d.length; c < f; c++) {
				var h = d[c];
				if (b == h.substring(0, b.length)) return d = h.substring(b.length + 1), parseInt(d)
			}
			return 0
		};
		return a
	}(d.SpriteSheet);
	d.BitmapTextSpriteSheet = c;
	c.prototype.__class__ =
		"egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(a) {
		function e(e, c) {
			a.call(this);
			this.frameRate = 60;
			e instanceof b ? (d.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new b(e, c);
			this.delegate.setMovieClip(this)
		}
		__extends(e, a);
		e.prototype.gotoAndPlay = function(a) {
			this.delegate.gotoAndPlay(a)
		};
		e.prototype.gotoAndStop = function(a) {
			this.delegate.gotoAndStop(a)
		};
		e.prototype.stop =
			function() {
				this.delegate.stop()
		};
		e.prototype.dispose = function() {
			this.delegate.dispose()
		};
		e.prototype.release = function() {
			d.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose()
		};
		e.prototype.getCurrentFrameIndex = function() {
			d.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex
		};
		e.prototype.getTotalFrame = function() {
			d.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame
		};
		e.prototype.setInterval = function(a) {
			d.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / a
		};
		e.prototype.getIsPlaying = function() {
			d.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying
		};
		return e
	}(d.DisplayObjectContainer);
	d.MovieClip = c;
	c.prototype.__class__ = "egret.MovieClip";
	var b = function() {
		function a(a, b) {
			this.data = a;
			this._currentFrameIndex = this._passTime =
				this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = a;
			this._spriteSheet = new d.SpriteSheet(b)
		}
		a.prototype.setMovieClip = function(a) {
			this.movieClip = a;
			this.bitmap = new d.Bitmap;
			this.movieClip.addChild(this.bitmap)
		};
		a.prototype.gotoAndPlay = function(a) {
			this.checkHasFrame(a);
			this._isPlaying = !0;
			this._currentFrameIndex = 0;
			this._currentFrameName = a;
			this._totalFrame = this._frameData.frames[a].totalFrame;
			this.playNextFrame();
			this._passTime = 0;
			d.Ticker.getInstance().register(this.update, this)
		};
		a.prototype.gotoAndStop =
			function(a) {
				this.checkHasFrame(a);
				this.stop();
				this._currentFrameIndex = this._passTime = 0;
				this._currentFrameName = a;
				this._totalFrame = this._frameData.frames[a].totalFrame;
				this.playNextFrame()
		};
		a.prototype.stop = function() {
			this._isPlaying = !1;
			d.Ticker.getInstance().unregister(this.update, this)
		};
		a.prototype.dispose = function() {};
		a.prototype.checkHasFrame = function(a) {
			void 0 == this._frameData.frames[a] && d.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
		};
		a.prototype.update = function(a) {
			for (var b =
				1E3 / this.movieClip.frameRate, b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1), b--;
			this._passTime += a
		};
		a.prototype.playNextFrame = function(a) {
			"undefined" === typeof a && (a = !0);
			var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (a) {
				a = this.getTexture(b.res);
				var d = this.bitmap;
				d.x = b.x;
				d.y = b.y;
				d.texture = a
			}
			null != b.action && this.movieClip.dispatchEventWith(b.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame &&
				(this._currentFrameIndex = 0)
		};
		a.prototype.getTexture = function(a) {
			var b = this._frameData.res[a],
				d = this._spriteSheet.getTexture(a);
			d || (d = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
			return d
		};
		return a
	}();
	d.DefaultMovieClipDelegate = b;
	b.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._size = 20
		}
		__extends(a, b);
		a.prototype._getText = function() {
			return this.inputElement.value
		};
		a.prototype._setText = function(a) {
			this.inputElement.value = a
		};
		a.prototype._setTextType = function(a) {
			this.inputElement.type = a
		};
		a.prototype._getTextType = function() {
			return this.inputElement.type
		};
		a.prototype._open = function(a, b, c, g) {
			"undefined" === typeof c && (c = 160);
			var f = d.StageDelegate.getInstance().getScaleX(),
				h = d.StageDelegate.getInstance().getScaleY();
			g =
				document.createElement("input");
			g.type = "text";
			g.style.fontSize = this._size + "px";
			g.style.color = "#FFFFFF";
			g.style.border = "none";
			g.style.background = "none";
			g.style.width = c + "px";
			g.style.padding = "0";
			g.style.outline = "medium";
			var k = d.Browser.getInstance().$new("div");
			k.position.x = a * f;
			k.position.y = b * h;
			k.style.width = c + "px";
			k.scale.x = f;
			k.scale.y = h;
			k.transforms();
			k.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
			k.appendChild(g);
			a = d.Browser.getInstance().$("#StageDelegateDiv");
			a || (b = document.getElementById(d.StageDelegate.canvas_name),
				a = d.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", a.style.width = b.style.width, a.style.height = b.style.height, document.getElementById(d.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
			a.appendChild(k);
			this.div = k;
			this.inputElement = g
		};
		a.prototype._remove = function() {
			var a = this.div;
			a && a.parentNode && a.parentNode.removeChild(a)
		};
		a.prototype.changePosition = function(a, b) {
			var c = d.StageDelegate.getInstance().getScaleX(),
				g = d.StageDelegate.getInstance().getScaleY();
			this.div.position.x =
				a * c;
			this.div.position.y = b * g;
			this.div.transforms()
		};
		a.prototype.changeSize = function(a, b) {
			this.inputElement.style.width = a + "px";
			this.div.style.width = a + "px";
			this.div.transforms()
		};
		return a
	}(d.HashObject);
	d.StageText = c;
	c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.GET = "GET";
		b.POST = "POST";
		return b
	}();
	d.URLRequestMethod = c;
	c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.BINARY = "binary";
		b.TEXT = "text";
		b.VARIABLES = "variables";
		b.TEXTURE = "texture";
		b.SOUND = "sound";
		return b
	}();
	d.URLLoaderDataFormat = c;
	c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			"undefined" === typeof a && (a = null);
			b.call(this);
			null !== a && this.decode(a)
		}
		__extends(a, b);
		a.prototype.decode = function(a) {
			this.variables || (this.variables = {});
			a = a.split("+").join(" ");
			for (var b, d = /[?&]?([^=]+)=([^&]*)/g; b = d.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
		};
		a.prototype.toString = function() {
			if (!this.variables) return "";
			var a = this.variables,
				b = "",
				d = !0,
				c;
			for (c in a) d ? d = !1 : b += "&", b += c + "=" + a[c];
			return b
		};
		return a
	}(d.HashObject);
	d.URLVariables = c;
	c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			"undefined" === typeof a && (a = null);
			b.call(this);
			this.method = d.URLRequestMethod.GET;
			this.url = a
		}
		__extends(a, b);
		return a
	}(d.HashObject);
	d.URLRequest = c;
	c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			"undefined" === typeof a && (a = null);
			b.call(this);
			this.dataFormat = d.URLLoaderDataFormat.TEXT;
			a && this.load(a)
		}
		__extends(a, b);
		a.prototype.load = function(a) {
			this._request = a;
			this.data = null;
			d.MainContext.instance.netContext.proceed(this)
		};
		return a
	}(d.EventDispatcher);
	d.URLLoader = c;
	c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "textureWidth", {
			get: function() {
				return this._textureWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "textureHeight", {
			get: function() {
				return this._textureHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "bitmapData", {
			get: function() {
				return this._bitmapData
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setBitmapData = function(a) {
			var b = d.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * b;
			this._textureHeight = this._sourceHeight * b;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		a.prototype.getPixel32 = function(a, b) {
			return this._bitmapData.getContext("2d").getImageData(a,
				b, 1, 1).data
		};
		return a
	}(d.HashObject);
	d.Texture = c;
	c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = d.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(a, b);
		a.prototype.drawToTexture = function(a) {
			var b = this._bitmapData,
				c = a.getBounds(d.Rectangle.identity);
			b.width = c.width;
			b.height = c.height;
			a._worldTransform.identity();
			a.worldAlpha = 1;
			if (a instanceof d.DisplayObjectContainer) {
				this._offsetX = c.x;
				this._offsetY = c.y;
				a._worldTransform.append(1, 0, 0, 1, -c.x, -c.y);
				for (var b =
					a._children, c = 0, g = b.length; c < g; c++) b[c]._updateTransform()
			}
			b = d.RenderFilter.getInstance();
			c = b._drawAreaList.concat();
			b._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.webGLTexture = null;
			(g = a.mask || a._scrollRect) && this.renderContext.pushMask(g);
			a._render(this.renderContext);
			g && this.renderContext.popMask();
			b._drawAreaList = c;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight
		};
		return a
	}(d.Texture);
	d.RenderTexture = c;
	c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1
		}
		__extends(a, b);
		a.prototype.clearScreen = function() {};
		a.prototype.clearRect = function(a, b, d, c) {};
		a.prototype.drawImage = function(a, b, c, g, f, h, k, n, m) {
			d.Profiler.getInstance().onDrawImage()
		};
		a.prototype.setTransform = function(a) {};
		a.prototype.setAlpha = function(a, b) {};
		a.prototype.setupFont = function(a) {};
		a.prototype.measureText = function(a) {
			return 0
		};
		a.prototype.drawText = function(a, b, c, g, f) {
			d.Profiler.getInstance().onDrawImage()
		};
		a.prototype.strokeRect = function(a, b, d, c, f) {};
		a.prototype.pushMask = function(a) {};
		a.prototype.popMask = function() {};
		a.createRendererContext = function(a) {
			return null
		};
		return a
	}(d.HashObject);
	d.RendererContext = c;
	c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.MOUSE = "mouse";
		b.TOUCH = "touch";
		b.mode = "touch";
		return b
	}();
	d.InteractionMode = c;
	c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(a, b);
		a.prototype.run = function() {};
		a.prototype.getTouchData = function(a, b, d) {
			var c = this._currentTouchTarget[a];
			null == c && (c = {}, this._currentTouchTarget[a] = c);
			c.stageX = b;
			c.stageY = d;
			c.identifier = a;
			return c
		};
		a.prototype.dispatchEvent = function(a, b) {
			d.TouchEvent.dispatchTouchEvent(b.target, a, b.identifier, b.stageX,
				b.stageY, !1, !1, !1, !0 == this.touchDownTarget[b.identifier])
		};
		a.prototype.onTouchBegan = function(a, b, c) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				var g = d.MainContext.instance.stage.hitTest(a, b);
				g && (a = this.getTouchData(c, a, b), this.touchDownTarget[c] = !0, a.target = g, a.beginTarget = g, this.dispatchEvent(d.TouchEvent.TOUCH_BEGIN, a));
				this.touchingIdentifiers.push(c)
			}
		};
		a.prototype.onTouchMove = function(a, b, c) {
			if (-1 != this.touchingIdentifiers.indexOf(c) && (a != this.lastTouchX || b != this.lastTouchY)) {
				this.lastTouchX =
					a;
				this.lastTouchY = b;
				var g = d.MainContext.instance.stage.hitTest(a, b);
				g && (a = this.getTouchData(c, a, b), a.target = g, this.dispatchEvent(d.TouchEvent.TOUCH_MOVE, a))
			}
		};
		a.prototype.onTouchEnd = function(a, b, c) {
			var g = this.touchingIdentifiers.indexOf(c); - 1 != g && (this.touchingIdentifiers.splice(g, 1), g = d.MainContext.instance.stage.hitTest(a, b)) && (a = this.getTouchData(c, a, b), delete this.touchDownTarget[c], c = a.beginTarget, a.target = g, this.dispatchEvent(d.TouchEvent.TOUCH_END, a), c == g ? this.dispatchEvent(d.TouchEvent.TOUCH_TAP,
				a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(d.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return a
	}(d.HashObject);
	d.TouchContext = c;
	c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.proceed = function(a) {};
		return a
	}(d.HashObject);
	d.NetContext = c;
	c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.frameRate = 60
		}
		__extends(a, b);
		a.prototype.executeMainLoop = function(a, b) {};
		return a
	}(d.HashObject);
	d.DeviceContext = c;
	c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.translate = this.isHD ? function(a) {
				return "translate3d(" + a.x + "px, " + (a.y - d.MainContext.instance.stage.stageHeight) + "px, 0) "
			} : function(a) {
				return "translate(" + a.x + "px, " + a.y + "px) "
			};
			this.rotate = this.isHD ? function(a) {
				return "rotateZ(" + a + "deg) "
			} : function(a) {
				return "rotate(" + a + "deg) "
			};
			this.ua = navigator.userAgent.toLowerCase();
			var a = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || this.ua.match(/chrome|safari/);
			a && 0 < a.length && (a = a[0], "micromessenger" == a && (this.type = "wechat"), this.type = a);
			this.type = "unknow";
			switch (this.type) {
				case "firefox":
					this.pfx = "Moz";
					this.isHD = !0;
					break;
				case "chrome":
				case "safari":
					this.pfx = "webkit";
					this.isHD = !0;
					break;
				case "opera":
					this.pfx = "O";
					this.isHD = !1;
					break;
				case "ie":
					this.pfx = "ms";
					this.isHD = !1;
					break;
				default:
					this.pfx = "webkit", this.isHD = !0
			}
			this.trans = this.pfx + "Transform"
		}
		__extends(a, b);
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		Object.defineProperty(a.prototype,
			"isMobile", {
				get: function() {
					d.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
					return d.MainContext.deviceType == d.MainContext.DEVICE_MOBILE
				},
				enumerable: !0,
				configurable: !0
			});
		a.prototype.$new = function(a) {
			return this.$(document.createElement(a))
		};
		a.prototype.$ = function(e) {
			var b = document;
			if (e = e instanceof HTMLElement ? e : b.querySelector(e)) e.find = e.find ||
				this.$, e.hasClass = e.hasClass || function(a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				}, e.addClass = e.addClass || function(a) {
					this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
					return this
				}, e.removeClass = e.removeClass || function(a) {
					this.hasClass(a) && (this.className = this.className.replace(a, ""));
					return this
				}, e.remove = e.remove || function() {}, e.appendTo = e.appendTo || function(a) {
					a.appendChild(this);
					return this
				}, e.prependTo = e.prependTo || function(a) {
					a.childNodes[0] ?
						a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
					return this
				}, e.transforms = e.transforms || function() {
					this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
					return this
				}, e.position = e.position || {
					x: 0,
					y: 0
				}, e.rotation = e.rotation || 0, e.scale = e.scale || {
					x: 1,
					y: 1
				}, e.skew = e.skew || {
					x: 0,
					y: 0
				}, e.translates = function(a, e) {
					this.position.x = a;
					this.position.y = e - d.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this
				}, e.rotate = function(a) {
					this.rotation = a;
					this.transforms();
					return this
				}, e.resize = function(a, e) {
					this.scale.x = a;
					this.scale.y = e;
					this.transforms();
					return this
				}, e.setSkew = function(a, e) {
					this.skew.x = a;
					this.skew.y = e;
					this.transforms();
					return this
				};
			return e
		};
		a.prototype.scale = function(a) {
			return "scale(" + a.x + ", " + a.y + ") "
		};
		a.prototype.skew = function(a) {
			return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
		};
		return a
	}(d.HashObject);
	d.Browser = c;
	c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.parse = function(a) {
			a = d.SAXParser.getInstance().parserXML(a);
			if (!a || !a.childNodes) return null;
			for (var e = a.childNodes.length, c = !1, q = 0; q < e; q++) {
				var g = a.childNodes[q];
				if (1 == g.nodeType) {
					c = !0;
					break
				}
			}
			return c ? b.parseNode(g) : null
		};
		b.parseNode = function(a) {
			if (!a || 1 != a.nodeType) return null;
			var e = {};
			e.localName = a.localName;
			e.name = a.nodeName;
			a.namespaceURI && (e.namespace = a.namespaceURI);
			a.prefix && (e.prefix = a.prefix);
			for (var c = a.attributes, d = c.length, g = 0; g < d; g++) {
				var f = c[g],
					h = f.name;
				0 != h.indexOf("xmlns:") && (e["$" + h] = f.value)
			}
			c = a.childNodes;
			d = c.length;
			for (g = 0; g < d; g++)
				if (f = b.parseNode(c[g])) e.children || (e.children = []), f.parent = e, e.children.push(f);!e.children && (a = a.textContent.trim()) && (e.text = a);
			return e
		};
		b.findChildren = function(a, e, c) {
			c ? c.length = 0 : c = [];
			b.findByPath(a, e, c);
			return c
		};
		b.findByPath = function(a, e, c) {
			var d = e.indexOf("."),
				g; - 1 == d ? (g = e, d = !0) : (g = e.substring(0, d), e = e.substring(d + 1), d = !1);
			if (a = a.children)
				for (var f = a.length, h = 0; h < f; h++) {
					var k = a[h];
					k.localName == g &&
						(d ? c.push(k) : b.findByPath(k, e, c))
				}
		};
		b.getAttributes = function(a, e) {
			e ? e.length = 0 : e = [];
			for (var b in a) "$" == b.charAt(0) && e.push(b.substring(1));
			return e
		};
		return b
	}();
	d.XML = c;
	c.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function a() {}
		a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		a.BIG_ENDIAN = "BIG_ENDIAN";
		return a
	}();
	d.Endian = c;
	c.prototype.__class__ = "egret.Endian";
	var b = function() {
		function a() {
			this.length = this.position = 0;
			this._mode = "";
			this.maxlength = 0;
			this._endian = c.LITTLE_ENDIAN;
			this.isLittleEndian = !1;
			this._mode = "Typed array";
			this.maxlength = 4;
			this.arraybytes = new ArrayBuffer(this.maxlength);
			this.unalignedarraybytestemp = new ArrayBuffer(16);
			this.endian = a.DEFAULT_ENDIAN
		}
		Object.defineProperty(a.prototype,
			"endian", {
				get: function() {
					return this._endian
				},
				set: function(a) {
					this._endian = a;
					this.isLittleEndian = a == c.LITTLE_ENDIAN
				},
				enumerable: !0,
				configurable: !0
			});
		a.prototype.ensureWriteableSpace = function(a) {
			this.ensureSpace(a + this.position)
		};
		a.prototype.setArrayBuffer = function(a) {
			this.ensureSpace(a.byteLength);
			this.length = a.byteLength;
			a = new Int8Array(a);
			(new Int8Array(this.arraybytes, 0, this.length)).set(a);
			this.position = 0
		};
		Object.defineProperty(a.prototype, "bytesAvailable", {
			get: function() {
				return this.length - this.position
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.ensureSpace = function(a) {
			if (a > this.maxlength) {
				a = a + 255 & -256;
				var b = new ArrayBuffer(a),
					c = new Uint8Array(this.arraybytes, 0, this.length);
				(new Uint8Array(b, 0, this.length)).set(c);
				this.arraybytes = b;
				this.maxlength = a
			}
		};
		a.prototype.writeByte = function(a) {
			this.ensureWriteableSpace(1);
			(new Int8Array(this.arraybytes))[this.position++] = ~~a;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" +
				this.position + ", Length=" + this.length;
			return (new Int8Array(this.arraybytes))[this.position++]
		};
		a.prototype.readBytes = function(a, b, c) {
			"undefined" === typeof b && (b = 0);
			"undefined" === typeof c && (c = 0);
			null == c && (c = a.length);
			a.ensureWriteableSpace(b + c);
			var d = new Int8Array(a.arraybytes),
				f = new Int8Array(this.arraybytes);
			d.set(f.subarray(this.position, this.position + c), b);
			this.position += c;
			c + b > a.length && (a.length += c + b - a.length)
		};
		a.prototype.writeUnsignedByte = function(a) {
			this.ensureWriteableSpace(1);
			(new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readUnsignedByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			return (new Uint8Array(this.arraybytes))[this.position++]
		};
		a.prototype.writeUnsignedShort = function(a) {
			this.ensureWriteableSpace(2);
			if (0 == (this.position & 1)) {
				var b = new Uint16Array(this.arraybytes);
				b[this.position >> 1] = ~~a & 65535
			} else b = new Uint16Array(this.unalignedarraybytestemp, 0, 1), b[0] = ~~a & 65535, a = new Uint8Array(this.arraybytes, this.position, 2), b = new Uint8Array(this.unalignedarraybytestemp, 0, 2), a.set(b);
			this.position += 2;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readUTFBytes = function(a) {
			var b = "";
			a = this.position + a;
			for (var c = new DataView(this.arraybytes); this.position < a;) {
				var d = c.getUint8(this.position++);
				if (128 > d) {
					if (0 == d) break;
					b += String.fromCharCode(d)
				} else if (224 > d) b += String.fromCharCode((d & 63) << 6 | c.getUint8(this.position++) & 127);
				else if (240 > d) var f = c.getUint8(this.position++),
					b = b + String.fromCharCode((d & 31) << 12 | (f & 127) << 6 | c.getUint8(this.position++) & 127);
				else var f = c.getUint8(this.position++),
					h = c.getUint8(this.position++),
					b = b + String.fromCharCode((d & 15) << 18 | (f & 127) << 12 | h << 6 & 127 | c.getUint8(this.position++) & 127)
			}
			return b
		};
		a.prototype.readInt = function() {
			var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
			this.position += 4;
			return a
		};
		a.prototype.readShort = function() {
			var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
			this.position += 2;
			return a
		};
		a.prototype.readDouble = function() {
			var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
			this.position += 8;
			return a
		};
		a.prototype.readUnsignedShort = function() {
			if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 1)) {
				var a = new Uint16Array(this.arraybytes),
					b = this.position >> 1;
				this.position += 2;
				return a[b]
			}
			a = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
			b = new Uint8Array(this.arraybytes,
				this.position, 2);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(b);
			this.position += 2;
			return a[0]
		};
		a.prototype.writeUnsignedInt = function(a) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var b = new Uint32Array(this.arraybytes);
				b[this.position >> 2] = ~~a & 4294967295
			} else b = new Uint32Array(this.unalignedarraybytestemp, 0, 1), b[0] = ~~a & 4294967295, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
			this.position += 4;
			this.position > this.length &&
				(this.length = this.position)
		};
		a.prototype.readUnsignedInt = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 3)) {
				var a = new Uint32Array(this.arraybytes),
					b = this.position >> 2;
				this.position += 4;
				return a[b]
			}
			a = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
			b = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
			this.position += 4;
			return a[0]
		};
		a.prototype.writeFloat =
			function(a) {
				this.ensureWriteableSpace(4);
				if (0 == (this.position & 3)) {
					var b = new Float32Array(this.arraybytes);
					b[this.position >> 2] = a
				} else b = new Float32Array(this.unalignedarraybytestemp, 0, 1), b[0] = a, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
				this.position += 4;
				this.position > this.length && (this.length = this.position)
		};
		a.prototype.readFloat = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" +
				this.length;
			if (0 == (this.position & 3)) {
				var a = new Float32Array(this.arraybytes),
					b = this.position >> 2;
				this.position += 4;
				return a[b]
			}
			a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
			b = new Uint8Array(this.arraybytes, this.position, 4);
			(new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
			this.position += 4;
			return a[0]
		};
		a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
		return a
	}();
	d.ByteArray = b;
	b.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a, c, d) {
			b.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(a, c, d)
		}
		__extends(a, b);
		a.get = function(e, b, c, d) {
			"undefined" === typeof b && (b = null);
			"undefined" === typeof c && (c = null);
			"undefined" === typeof d && (d = !1);
			d && a.removeTweens(e);
			return new a(e, b, c)
		};
		a.removeTweens = function(e) {
			if (e.tween_count) {
				for (var b = a._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == e && (b[c].paused = !0, b.splice(c, 1));
				e.tween_count = 0
			}
		};
		a.tick = function(e, b) {
			"undefined" === typeof b && (b = !1);
			for (var c = a._tweens.concat(), d = c.length - 1; 0 <= d; d--) {
				var f = c[d];
				b && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : e)
			}
		};
		a._register = function(e, b) {
			var c = e._target,
				g = a._tweens;
			if (b) c && (c.tween_count = c.tween_count ? c.tween_count + 1 : 1), g.push(e), a._inited || (d.Ticker.getInstance().register(a.tick, null),
				a._inited = !0);
			else
				for (c && c.tween_count--, c = g.length; c--;)
					if (g[c] == e) {
						g.splice(c, 1);
						break
					}
		};
		a.removeAllTweens = function() {
			for (var e = a._tweens, b = 0, c = e.length; b < c; b++) {
				var d = e[b];
				d.paused = !0;
				d._target.tweenjs_count = 0
			}
			e.length = 0
		};
		a.prototype.initialize = function(e, b, c) {
			this._target = e;
			b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
			this.pluginData = c || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			b && b.paused ? this.paused = !0 : a._register(this, !0);
			b && null != b.position && this.setPosition(b.position, a.NONE)
		};
		a.prototype.setPosition = function(a, b) {
			"undefined" === typeof b && (b = 1);
			0 > a && (a = 0);
			var c = a,
				d = !1;
			c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0));
			if (c == this._prevPos) return d;
			var f = this._prevPos;
			this.position = this._prevPos = c;
			this._prevPosition = a;
			if (this._target)
				if (d) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
				for (var h =
					0, k = this._steps.length; h < k && !(this._steps[h].t > c); h++);
				h = this._steps[h - 1];
				this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d)
			}
			0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < f ? (f != this.duration && this._runActions(f, this.duration), this._runActions(0, c, !0)) : this._runActions(f, c));
			d && this.setPaused(!0);
			this.dispatchEventWith("change");
			return d
		};
		a.prototype._runActions = function(a, b, c) {
			"undefined" === typeof c && (c = !1);
			var d = a,
				f = b,
				h = -1,
				k = this._actions.length,
				n = 1;
			a > b && (d = b,
				f = a, h = k, k = n = -1);
			for (;
				(h += n) != k;) {
				b = this._actions[h];
				var m = b.t;
				(m == f || m > d && m < f || c && m == a) && b.f.apply(b.o, b.p)
			}
		};
		a.prototype._updateTargetProps = function(e, b) {
			var c, d, f, h;
			if (e || 1 != b) {
				if (this.passive = !!e.v) return;
				e.e && (b = e.e(b, 0, 1, 1));
				c = e.p0;
				d = e.p1
			} else this.passive = !1, c = d = this._curQueueProps;
			for (var k in this._initQueueProps) {
				null == (f = c[k]) && (c[k] = f = this._initQueueProps[k]);
				null == (h = d[k]) && (d[k] = h = f);
				f = f == h || 0 == b || 1 == b || "number" != typeof f ? 1 == b ? h : f : f + (h - f) * b;
				var n = !1;
				if (h = a._plugins[k])
					for (var m = 0, p = h.length; m <
						p; m++) {
						var t = h[m].tween(this, k, f, c, d, b, !!e && c == d, !e);
						t == a.IGNORE ? n = !0 : f = t
					}
				n || (this._target[k] = f)
			}
		};
		a.prototype.setPaused = function(e) {
			this.paused = e;
			a._register(this, !e);
			return this
		};
		a.prototype._cloneProps = function(a) {
			var b = {},
				c;
			for (c in a) b[c] = a[c];
			return b
		};
		a.prototype._addStep = function(a) {
			0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
			return this
		};
		a.prototype._appendQueueProps = function(e) {
			var b, c, d, f, h, k;
			for (k in e)
				if (void 0 === this._initQueueProps[k]) {
					c = this._target[k];
					if (b = a._plugins[k])
						for (d =
							0, f = b.length; d < f; d++) c = b[d].init(this, k, c);
					this._initQueueProps[k] = this._curQueueProps[k] = void 0 === c ? null : c
				}
			for (k in e) {
				c = this._curQueueProps[k];
				if (b = a._plugins[k])
					for (h = h || {}, d = 0, f = b.length; d < f; d++) b[d].step && b[d].step(this, k, c, e[k], h);
				this._curQueueProps[k] = e[k]
			}
			h && this._appendQueueProps(h);
			return this._curQueueProps
		};
		a.prototype._addAction = function(a) {
			a.t = this.duration;
			this._actions.push(a);
			return this
		};
		a.prototype._set = function(a, b) {
			for (var c in a) b[c] = a[c]
		};
		a.prototype.wait = function(a, b) {
			if (null ==
				a || 0 >= a) return this;
			var c = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: a,
				p0: c,
				p1: c,
				v: b
			})
		};
		a.prototype.to = function(a, b, c) {
			"undefined" === typeof c && (c = void 0);
			if (isNaN(b) || 0 > b) b = 0;
			return this._addStep({
				d: b || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: c,
				p1: this._cloneProps(this._appendQueueProps(a))
			})
		};
		a.prototype.call = function(a, b, c) {
			"undefined" === typeof b && (b = void 0);
			"undefined" === typeof c && (c = void 0);
			return this._addAction({
				f: a,
				p: c ? c : [],
				o: b ? b : this._target
			})
		};
		a.prototype.set = function(a,
			b) {
			"undefined" === typeof b && (b = null);
			return this._addAction({
				f: this._set,
				o: this,
				p: [a, b ? b : this._target]
			})
		};
		a.prototype.play = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!1])
		};
		a.prototype.pause = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!0])
		};
		a.prototype.tick = function(a) {
			this.paused || this.setPosition(this._prevPosition + a)
		};
		a.NONE = 0;
		a.LOOP = 1;
		a.REVERSE = 2;
		a._tweens = [];
		a.IGNORE = {};
		a._plugins = {};
		a._inited = !1;
		return a
	}(d.EventDispatcher);
	d.Tween = c;
	c.prototype.__class__ = "egret.Tween"
})(egret ||
	(egret = {}));
(function(d) {
	var c = function() {
		function b() {
			d.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
		}
		b.get = function(a) {
			-1 > a && (a = -1);
			1 < a && (a = 1);
			return function(b) {
				return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
			}
		};
		b.getPowIn = function(a) {
			return function(b) {
				return Math.pow(b, a)
			}
		};
		b.getPowOut = function(a) {
			return function(b) {
				return 1 - Math.pow(1 - b, a)
			}
		};
		b.getPowInOut = function(a) {
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
			}
		};
		b.sineIn = function(a) {
			return 1 - Math.cos(a *
				Math.PI / 2)
		};
		b.sineOut = function(a) {
			return Math.sin(a * Math.PI / 2)
		};
		b.sineInOut = function(a) {
			return -0.5 * (Math.cos(Math.PI * a) - 1)
		};
		b.getBackIn = function(a) {
			return function(b) {
				return b * b * ((a + 1) * b - a)
			}
		};
		b.getBackOut = function(a) {
			return function(b) {
				b -= 1;
				return b * b * ((a + 1) * b + a) + 1
			}
		};
		b.getBackInOut = function(a) {
			a *= 1.525;
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
			}
		};
		b.circIn = function(a) {
			return -(Math.sqrt(1 - a * a) - 1)
		};
		b.circOut = function(a) {
			return Math.sqrt(1 - a * a)
		};
		b.circInOut = function(a) {
			return 1 >
				(a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
		};
		b.bounceIn = function(a) {
			return 1 - b.bounceOut(1 - a)
		};
		b.bounceOut = function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
		};
		b.bounceInOut = function(a) {
			return 0.5 > a ? 0.5 * b.bounceIn(2 * a) : 0.5 * b.bounceOut(2 * a - 1) + 0.5
		};
		b.getElasticIn = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				if (0 == d || 1 == d) return d;
				var g = b / c * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 *
					(d -= 1)) * Math.sin((d - g) * c / b))
			}
		};
		b.getElasticOut = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				if (0 == d || 1 == d) return d;
				var g = b / c * Math.asin(1 / a);
				return a * Math.pow(2, -10 * d) * Math.sin((d - g) * c / b) + 1
			}
		};
		b.getElasticInOut = function(a, b) {
			var c = 2 * Math.PI;
			return function(d) {
				var g = b / c * Math.asin(1 / a);
				return 1 > (d *= 2) ? -0.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - g) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - g) * c / b) * 0.5 + 1
			}
		};
		b.quadIn = b.getPowIn(2);
		b.quadOut = b.getPowOut(2);
		b.quadInOut = b.getPowInOut(2);
		b.cubicIn = b.getPowIn(3);
		b.cubicOut = b.getPowOut(3);
		b.cubicInOut = b.getPowInOut(3);
		b.quartIn = b.getPowIn(4);
		b.quartOut = b.getPowOut(4);
		b.quartInOut = b.getPowInOut(4);
		b.quintIn = b.getPowIn(5);
		b.quintOut = b.getPowOut(5);
		b.quintInOut = b.getPowInOut(5);
		b.backIn = b.getBackIn(1.7);
		b.backOut = b.getBackOut(1.7);
		b.backInOut = b.getBackInOut(1.7);
		b.elasticIn = b.getElasticIn(1, 0.3);
		b.elasticOut = b.getElasticOut(1, 0.3);
		b.elasticInOut = b.getElasticInOut(1, 0.3 * 1.5);
		return b
	}();
	d.Ease = c;
	c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {
			this.type = b.EFFECT
		}
		b.prototype.play = function(a) {
			"undefined" === typeof a && (a = !1);
			var b = this.audio;
			b && (isNaN(b.duration) || (b.currentTime = 0), b.loop = a, b.play())
		};
		b.prototype.pause = function() {
			var a = this.audio;
			a && a.pause()
		};
		b.prototype.load = function() {
			var a = this.audio;
			a && a.load()
		};
		b.prototype.addEventListener = function(a, b) {
			this.audio && this.audio.addEventListener(a, b, !1)
		};
		b.prototype.removeEventListener = function(a, b) {
			this.audio && this.audio.removeEventListener(a,
				b, !1)
		};
		b.prototype.setVolume = function(a) {
			var b = this.audio;
			b && (b.volume = a)
		};
		b.prototype.getVolume = function() {
			return this.audio ? this.audio.volume : 0
		};
		b.prototype.preload = function(a) {
			this.type = a
		};
		b.prototype._setAudio = function(a) {
			this.audio = a
		};
		b.MUSIC = "music";
		b.EFFECT = "effect";
		return b
	}();
	d.Sound = c;
	c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.isNumber = function(a) {
			return "number" === typeof a && !isNaN(a)
		};
		return b
	}();
	d.NumberUtils = c;
	c.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	RES;
(function(d) {
	var c = function(b) {
		function a(a, c, d) {
			"undefined" === typeof c && (c = !1);
			"undefined" === typeof d && (d = !1);
			b.call(this, a, c, d);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(a, b);
		a.dispatchResourceEvent = function(b, c, d, g, f, h) {
			"undefined" === typeof d && (d = "");
			"undefined" === typeof g && (g = null);
			"undefined" === typeof f && (f = 0);
			"undefined" === typeof h && (h = 0);
			var k = egret.Event._getPropertyData(a);
			k.groupName = d;
			k.resItem = g;
			k.itemsLoaded = f;
			k.itemsTotal = h;
			egret.Event._dispatchByTarget(a, b, c, k)
		};
		a.ITEM_LOAD_ERROR =
			"itemLoadError";
		a.CONFIG_COMPLETE = "configComplete";
		a.GROUP_PROGRESS = "groupProgress";
		a.GROUP_COMPLETE = "groupComplete";
		return a
	}(egret.Event);
	d.ResourceEvent = c;
	c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(d) {
	var c = function() {
		function b(a, b, c) {
			this._loaded = !1;
			this.name = a;
			this.url = b;
			this.type = c
		}
		Object.defineProperty(b.prototype, "loaded", {
			get: function() {
				return this.data ? this.data.loaded : this._loaded
			},
			set: function(a) {
				this.data && (this.data.loaded = a);
				this._loaded = a
			},
			enumerable: !0,
			configurable: !0
		});
		b.prototype.toString = function() {
			return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
		};
		b.TYPE_XML = "xml";
		b.TYPE_IMAGE = "image";
		b.TYPE_BIN = "bin";
		b.TYPE_TEXT = "text";
		b.TYPE_JSON =
			"json";
		b.TYPE_SHEET = "sheet";
		b.TYPE_FONT = "font";
		b.TYPE_SOUND = "sound";
		return b
	}();
	d.ResourceItem = c;
	c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(d) {
	var c = function() {
		function b() {
			this.keyMap = {};
			this.groupDic = {}
		}
		b.prototype.getGroupByName = function(a) {
			var b = [];
			if (!this.groupDic[a]) return b;
			a = this.groupDic[a];
			for (var c = a.length, d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
			return b
		};
		b.prototype.getRawGroupByName = function(a) {
			return this.groupDic[a] ? this.groupDic[a] : []
		};
		b.prototype.createGroup = function(a, b, c) {
			"undefined" === typeof c && (c = !1);
			if (!c && this.groupDic[a] || !b || 0 == b.length) return !1;
			c = this.groupDic;
			for (var d = [], g = b.length, f = 0; f <
				g; f++) {
				var h = b[f],
					k = c[h];
				if (k)
					for (var h = k.length, n = 0; n < h; n++) {
						var m = k[n]; - 1 == d.indexOf(m) && d.push(m)
					} else(m = this.keyMap[h]) && -1 == d.indexOf(m) && d.push(m)
			}
			if (0 == d.length) return !1;
			this.groupDic[a] = d;
			return !0
		};
		b.prototype.parseConfig = function(a, b) {
			if (a) {
				var c = a.resources;
				if (c)
					for (var d = c.length, g = 0; g < d; g++) {
						var f = c[g],
							h = f.url;
						h && -1 == h.indexOf("://") && (f.url = b + h);
						this.addItemToKeyMap(f)
					}
				if (c = a.groups)
					for (d = c.length, g = 0; g < d; g++) {
						for (var h = c[g], k = [], n = h.keys.split(","), m = n.length, p = 0; p < m; p++) f = n[p].trim(), (f = this.keyMap[f]) && -1 == k.indexOf(f) && k.push(f);
						this.groupDic[h.name] = k
					}
			}
		};
		b.prototype.addItemToKeyMap = function(a) {
			this.keyMap[a.name] || (this.keyMap[a.name] = a);
			if (a.hasOwnProperty("subkeys")) {
				var b = a.subkeys.split(",");
				a.subkeys = b;
				for (var c = b.length, d = 0; d < c; d++) {
					var g = b[d];
					null == this.keyMap[g] && (this.keyMap[g] = a)
				}
			}
		};
		b.prototype.getName = function(a) {
			return (a = this.keyMap[a]) ? a.name : ""
		};
		b.prototype.getType = function(a) {
			return (a = this.keyMap[a]) ? a.type : ""
		};
		b.prototype.getRawResourceItem = function(a) {
			return this.keyMap[a]
		};
		b.prototype.getResourceItem = function(a) {
			return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
		};
		b.prototype.parseResourceItem = function(a) {
			var b = new d.ResourceItem(a.name, a.url, a.type);
			b.data = a;
			return b
		};
		return b
	}();
	d.ResourceConfig = c;
	c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.thread = 2;
			this.loadingCount = 0;
			this.groupTotalDic = {};
			this.numLoadedDic = {};
			this.itemListDic = {};
			this.priorityQueue = {};
			this.lazyLoadList = [];
			this.analyzerDic = {};
			this.queueIndex = 0
		}
		__extends(a, b);
		a.prototype.isGroupInLoading = function(a) {
			return void 0 !== this.itemListDic[a]
		};
		a.prototype.loadGroup = function(a, b, c) {
			"undefined" === typeof c && (c = 0);
			if (!this.itemListDic[b] && b)
				if (a && 0 != a.length) {
					this.priorityQueue[c] ? this.priorityQueue[c].push(b) : this.priorityQueue[c] =
						[b];
					this.itemListDic[b] = a;
					c = a.length;
					for (var g = 0; g < c; g++) a[g].groupName = b;
					this.groupTotalDic[b] = a.length;
					this.numLoadedDic[b] = 0;
					this.next()
				} else a = new d.ResourceEvent(d.ResourceEvent.GROUP_COMPLETE), a.groupName = b, this.dispatchEvent(a)
		};
		a.prototype.loadItem = function(a) {
			this.lazyLoadList.push(a);
			a.groupName = "";
			this.next()
		};
		a.prototype.next = function() {
			for (; this.loadingCount < this.thread;) {
				var a = this.getOneResourceItem();
				if (!a) break;
				this.loadingCount++;
				if (a.loaded) this.onItemComplete(a);
				else {
					var b = this.analyzerDic[a.type];
					b || (b = this.analyzerDic[a.type] = egret.Injector.getInstance(d.AnalyzerBase, a.type));
					b.loadFile(a, this.onItemComplete, this)
				}
			}
		};
		a.prototype.getOneResourceItem = function() {
			var a = Number.NEGATIVE_INFINITY,
				b;
			for (b in this.priorityQueue) a = Math.max(a, b);
			a = this.priorityQueue[a];
			if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			b = a.length;
			for (var c, d = 0; d < b; d++) {
				this.queueIndex >= b && (this.queueIndex = 0);
				c = this.itemListDic[a[this.queueIndex]];
				if (0 < c.length) break;
				this.queueIndex++
			}
			return 0 ==
				c.length ? null : c.shift()
		};
		a.prototype.onItemComplete = function(a) {
			this.loadingCount--;
			var b = a.groupName;
			a.loaded || d.ResourceEvent.dispatchResourceEvent(this.resInstance, d.ResourceEvent.ITEM_LOAD_ERROR, b, a);
			if (b) {
				this.numLoadedDic[b]++;
				var c = this.numLoadedDic[b],
					g = this.groupTotalDic[b];
				d.ResourceEvent.dispatchResourceEvent(this.resInstance, d.ResourceEvent.GROUP_PROGRESS, b, a, c, g);
				c == g && (this.removeGroupName(b), delete this.groupTotalDic[b], delete this.numLoadedDic[b], delete this.itemListDic[b], d.ResourceEvent.dispatchResourceEvent(this,
					d.ResourceEvent.GROUP_COMPLETE, b))
			} else this.callBack.call(this.resInstance, a);
			this.next()
		};
		a.prototype.removeGroupName = function(a) {
			for (var b in this.priorityQueue) {
				for (var c = this.priorityQueue[b], d = c.length, f = 0, h = !1, d = c.length, k = 0; k < d; k++) {
					if (c[k] == a) {
						c.splice(f, 1);
						h = !0;
						break
					}
					f++
				}
				if (h) {
					0 == c.length && delete this.priorityQueue[b];
					break
				}
			}
		};
		return a
	}(egret.EventDispatcher);
	d.ResourceLoader = c;
	c.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.loadFile = function(a, b, c) {};
		a.prototype.getRes = function(a) {};
		a.prototype.destroyRes = function(a) {
			return !1
		};
		a.getStringPrefix = function(a) {
			if (!a) return "";
			var b = a.indexOf(".");
			return -1 != b ? a.substring(0, b) : ""
		};
		a.getStringTail = function(a) {
			if (!a) return "";
			var b = a.indexOf(".");
			return -1 != b ? a.substring(b + 1) : ""
		};
		return a
	}(egret.HashObject);
	d.AnalyzerBase = c;
	c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler
		}
		__extends(a, b);
		a.prototype.loadFile = function(a, b, c) {
			if (this.fileDic[a.name]) b.call(c, a);
			else {
				var d = this.getLoader();
				this.resItemDic[d.hashCode] = {
					item: a,
					func: b,
					thisObject: c
				};
				d.load(new egret.URLRequest(a.url))
			}
		};
		a.prototype.getLoader = function() {
			var a = this.recycler.pop();
			a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE,
				this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			a.dataFormat = this._dataFormat;
			return a
		};
		a.prototype.onLoadFinish = function(a) {
			var b = a.target,
				c = this.resItemDic[b.hashCode];
			delete this.resItemDic[b.hashCode];
			this.recycler.push(b);
			var d = c.item,
				f = c.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			d.loaded && this.analyzeData(d, b.data);
			f.call(c.thisObject, d)
		};
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			!this.fileDic[c] && b && (this.fileDic[c] = b)
		};
		a.prototype.getRes =
			function(a) {
				return this.fileDic[a]
		};
		a.prototype.hasRes = function(a) {
			return null != this.getRes(a)
		};
		a.prototype.destroyRes = function(a) {
			return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
		};
		return a
	}(d.AnalyzerBase);
	d.BinAnalyzer = c;
	c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
		};
		return a
	}(d.BinAnalyzer);
	d.ImageAnalyzer = c;
	c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) try {
				this.fileDic[c] = JSON.parse(b)
			} catch (d) {
				egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
			}
		};
		return a
	}(d.BinAnalyzer);
	d.JsonAnalyzer = c;
	c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		return a
	}(d.BinAnalyzer);
	d.TextAnalyzer = c;
	c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.getRes = function(a) {
			var b = this.fileDic[a];
			b || (b = this.textureMap[a]);
			!b && (b = d.AnalyzerBase.getStringPrefix(a), b = this.fileDic[b]) && (a = d.AnalyzerBase.getStringTail(a), b = b.getTexture(a));
			return b
		};
		a.prototype.onLoadFinish = function(a) {
			var b = a.target,
				c = this.resItemDic[b.hashCode];
			delete this.resItemDic[b.hashCode];
			this.recycler.push(b);
			var d =
				c.item,
				f = c.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			d.loaded && this.analyzeData(d, b.data);
			"string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, f, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : f.call(c.thisObject, d)
		};
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) {
				var d;
				if ("string" == typeof b) {
					try {
						d = JSON.parse(b)
					} catch (f) {
						egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
					}
					d && (this.sheetMap[c] =
						d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
				} else d = this.sheetMap[c], delete this.sheetMap[c], b && (d = this.parseSpriteSheet(b, d), this.fileDic[c] = d)
			}
		};
		a.prototype.getRelativePath = function(a, b) {
			a = a.split("\\").join("/");
			var c = a.lastIndexOf("/");
			return a = -1 != c ? a.substring(0, c + 1) + b : b
		};
		a.prototype.parseSpriteSheet = function(a, b) {
			var c = b.frames;
			if (!c) return null;
			var d = new egret.SpriteSheet(a),
				f = this.textureMap,
				h;
			for (h in c) {
				var k = c[h];
				a = d.createTexture(h, k.x, k.y, k.w, k.h, k.offX, k.offY, k.sourceW, k.sourceH);
				null == f[h] && (f[h] = a)
			}
			return d
		};
		return a
	}(d.BinAnalyzer);
	d.SheetAnalyzer = c;
	c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) {
				var d;
				"string" == typeof b ? (d = b, this.sheetMap[c] = d, a.loaded = !1, a.url = this.getTexturePath(a.url, d)) : (d = this.sheetMap[c], delete this.sheetMap[c], b && (d = new egret.BitmapTextSpriteSheet(b, d), this.fileDic[c] = d))
			}
		};
		a.prototype.getTexturePath = function(a, b) {
			var c = "",
				d = b.split("\n")[2],
				f = d.indexOf('file="'); - 1 != f && (d = d.substring(f + 6), f = d.indexOf('"'), c = d.substring(0,
				f));
			a = a.split("\\").join("/");
			f = a.lastIndexOf("/");
			return a = -1 != f ? a.substring(0, f + 1) + c : c
		};
		return a
	}(d.SheetAnalyzer);
	d.FontAnalyzer = c;
	c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType && b.preload(c.soundType))
		};
		return a
	}(d.BinAnalyzer);
	d.SoundAnalyzer = c;
	c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) try {
				var d = egret.XML.parse(b);
				this.fileDic[c] = d
			} catch (f) {}
		};
		return a
	}(d.BinAnalyzer);
	d.XMLAnalyzer = c;
	c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	d.loadConfig = function(a, c, d) {
		"undefined" === typeof c && (c = "");
		"undefined" === typeof d && (d = "json");
		b.loadConfig(a, c, d)
	};
	d.loadGroup = function(a, c) {
		"undefined" === typeof c && (c = 0);
		b.loadGroup(a, c)
	};
	d.isGroupLoaded = function(a) {
		return b.isGroupLoaded(a)
	};
	d.getGroupByName = function(a) {
		return b.getGroupByName(a)
	};
	d.createGroup = function(a, c, d) {
		"undefined" === typeof d && (d = !1);
		return b.createGroup(a, c, d)
	};
	d.hasRes = function(a) {
		return b.hasRes(a)
	};
	d.getRes = function(a) {
		return b.getRes(a)
	};
	d.getResAsync =
		function(a, c, d) {
			b.getResAsync(a, c, d)
	};
	d.getResByUrl = function(a, c, d, q) {
		"undefined" === typeof q && (q = "");
		b.getResByUrl(a, c, d, q)
	};
	d.destroyRes = function(a) {
		return b.destroyRes(a)
	};
	d.setMaxLoadingThread = function(a) {
		b.setMaxLoadingThread(a)
	};
	d.addEventListener = function(a, c, d, q, g) {
		"undefined" === typeof q && (q = !1);
		"undefined" === typeof g && (g = 0);
		b.addEventListener(a, c, d, q, g)
	};
	d.removeEventListener = function(a, c, d, q) {
		"undefined" === typeof q && (q = !1);
		b.removeEventListener(a, c, d, q)
	};
	var c = function(a) {
		function b() {
			a.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups = [];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(b, a);
		b.prototype.getAnalyzerByType = function(a) {
			var b = this.analyzerDic[a];
			b || (b = this.analyzerDic[a] = egret.Injector.getInstance(d.AnalyzerBase, a));
			return b
		};
		b.prototype.init = function() {
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(d.AnalyzerBase, d.BinAnalyzer, d.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(d.AnalyzerBase,
				d.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(d.AnalyzerBase, d.ImageAnalyzer, d.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(d.AnalyzerBase, d.TextAnalyzer, d.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(d.AnalyzerBase, d.JsonAnalyzer, d.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(d.AnalyzerBase,
				d.SheetAnalyzer, d.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(d.AnalyzerBase, d.FontAnalyzer, d.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(d.AnalyzerBase, d.SoundAnalyzer, d.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_XML) || egret.Injector.mapClass(d.AnalyzerBase, d.XMLAnalyzer, d.ResourceItem.TYPE_XML);
			this.resConfig =
				new d.ResourceConfig;
			this.resLoader = new d.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(d.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
		};
		b.prototype.loadConfig = function(a, b, c) {
			"undefined" === typeof c && (c = "json");
			this.configItemList.push({
				url: a,
				resourceRoot: b,
				type: c
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		b.prototype.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var a = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = a;
			for (var c = a.length, g = [], f = 0; f < c; f++) {
				var h = a[f],
					h = new d.ResourceItem(h.url, h.url, h.type);
				g.push(h)
			}
			this.resLoader.loadGroup(g, b.GROUP_CONFIG, Number.MAX_VALUE)
		};
		b.prototype.isGroupLoaded = function(a) {
			return -1 != this.loadedGroups.indexOf(a)
		};
		b.prototype.getGroupByName = function(a) {
			return this.resConfig.getGroupByName(a)
		};
		b.prototype.loadGroup = function(a, b) {
			"undefined" === typeof b && (b = 0);
			if (-1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a))
				if (this.configComplete) {
					var c =
						this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(c, a, b)
				} else this.groupNameList.push({
					name: a,
					priority: b
				})
		};
		b.prototype.createGroup = function(a, b, c) {
			"undefined" === typeof c && (c = !1);
			if (c) {
				var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
			}
			return this.resConfig.createGroup(a, b, c)
		};
		b.prototype.onGroupComp = function(a) {
			if (a.groupName == b.GROUP_CONFIG) {
				a = this.loadingConfigList.length;
				for (var c = 0; c < a; c++) {
					var g = this.loadingConfigList[c],
						f = this.getAnalyzerByType(g.type),
						h = f.getRes(g.url);
					f.destroyRes(g.url);
					this.resConfig.parseConfig(h, g.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList = null;
				d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.CONFIG_COMPLETE);
				g = this.groupNameList;
				a = g.length;
				for (c = 0; c < a; c++) f = g[c], this.loadGroup(f.name, f.priority);
				this.groupNameList = []
			} else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
		};
		b.prototype.hasRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (a = d.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a),
				"" == b) ? !1 : !0
		};
		b.prototype.getRes = function(a) {
			var b = this.resConfig.getType(a);
			return "" == b && (b = d.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(b), "" == b) ? null : this.getAnalyzerByType(b).getRes(a)
		};
		b.prototype.getResAsync = function(a, b, c) {
			var e = this.resConfig.getType(a),
				h = this.resConfig.getName(a);
			if ("" == e && (h = d.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(h), "" == e)) {
				b.call(c, null);
				return
			}(e = this.getAnalyzerByType(e).getRes(a)) ? b.call(c, e) : (a = {
					key: a,
					compFunc: b,
					thisObject: c
				}, this.asyncDic[h] ?
				this.asyncDic[h].push(a) : (this.asyncDic[h] = [a], h = this.resConfig.getResourceItem(h), this.resLoader.loadItem(h)))
		};
		b.prototype.getResByUrl = function(a, b, c, e) {
			"undefined" === typeof e && (e = "");
			if (a) {
				e || (e = this.getTypeByUrl(a));
				var h = this.getAnalyzerByType(e).getRes(a);
				h ? b.call(c, h) : (b = {
					key: a,
					compFunc: b,
					thisObject: c
				}, this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new d.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
			} else b.call(c, null)
		};
		b.prototype.getTypeByUrl = function(a) {
			(a = a.substr(a.lastIndexOf(".") +
				1)) && (a = a.toLowerCase());
			switch (a) {
				case d.ResourceItem.TYPE_XML:
				case d.ResourceItem.TYPE_JSON:
				case d.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
					a = d.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					a = d.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					a = d.ResourceItem.TYPE_TEXT;
					break;
				case "mp3":
				case "ogg":
				case "mpeg":
				case "wav":
				case "m4a":
				case "mp4":
				case "aiff":
				case "wma":
				case "mid":
					a = d.ResourceItem.TYPE_SOUND;
					break;
				default:
					a = d.ResourceItem.TYPE_BIN
			}
			return a
		};
		b.prototype.onResourceItemComp = function(a) {
			var b =
				this.asyncDic[a.name];
			delete this.asyncDic[a.name];
			a = this.getAnalyzerByType(a.type);
			for (var c = b.length, d = 0; d < c; d++) {
				var e = b[d],
					k = a.getRes(e.key);
				e.compFunc.call(e.thisObject, k, e.key)
			}
		};
		b.prototype.destroyRes = function(a) {
			var b = this.resConfig.getRawGroupByName(a);
			if (b) {
				var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
				a = b.length;
				for (var d = 0; d < a; d++) {
					c = b[d];
					c.loaded = !1;
					var e = this.getAnalyzerByType(c.type);
					e.destroyRes(c.name)
				}
				return !0
			}
			b = this.resConfig.getType(a);
			if ("" == b) return !1;
			c = this.resConfig.getRawResourceItem(a);
			c.loaded = !1;
			e = this.getAnalyzerByType(b);
			return e.destroyRes(a)
		};
		b.prototype.setMaxLoadingThread = function(a) {
			1 > a && (a = 1);
			this.resLoader.thread = a
		};
		b.GROUP_CONFIG = "RES__CONFIG";
		return b
	}(egret.EventDispatcher);
	c.prototype.__class__ = "Resource";
	var b = new c
})(RES || (RES = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(c) {
			"undefined" === typeof c && (c = 60);
			b.call(this);
			this.frameRate = c;
			this._time = 0;
			60 == c && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
				window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
				return window.setTimeout(a, 1E3 / c)
			});
			a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
				return window.clearTimeout(a)
			});
			a.instance = this;
			this.registerListener()
		}
		__extends(a, b);
		a.prototype.enterFrame = function() {
			var b = a.instance,
				c = a._thisObject,
				q = a._callback,
				g = d.getTimer(),
				f = g -
				b._time;
			b._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
			q.call(c, f);
			b._time = g
		};
		a.prototype.executeMainLoop = function(b, c) {
			a._callback = b;
			a._thisObject = c;
			this.enterFrame()
		};
		a.prototype.reset = function() {
			var b = a.instance;
			b._requestAnimationId && (b._time = d.getTimer(), a.cancelAnimationFrame.call(window, b._requestAnimationId), b.enterFrame())
		};
		a.prototype.registerListener = function() {
			var b = function() {
					a.instance.reset()
				},
				c = function() {
					document[d] || b()
				};
			window.onfocus = b;
			window.onblur =
				function() {};
			var d, g;
			"undefined" !== typeof document.hidden ? (d = "hidden", g = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (d = "mozHidden", g = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (d = "msHidden", g = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (d = "webkitHidden", g = "webkitvisibilitychange");
			"onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", b, !1);
			d && g && document.addEventListener(g, c, !1)
		};
		return a
	}(d.DeviceContext);
	d.HTML5DeviceContext =
		c;
	c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			this.canvas = a;
			this.canvasContext = a.getContext("2d");
			var c = this.canvasContext.setTransform,
				d = this;
			this.canvasContext.setTransform = function(a, b, e, k, n, m) {
				d._matrixA = a;
				d._matrixB = b;
				d._matrixC = e;
				d._matrixD = k;
				d._matrixTx = n;
				d._matrixTy = m;
				c.call(d.canvasContext, a, b, e, k, n, m)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			b.call(this)
		}
		__extends(a, b);
		a.prototype.clearScreen = function() {
			this.setTransform(d.Matrix.identity.identity());
			for (var a = d.RenderFilter.getInstance().getDrawAreaList(), b = 0, c = a.length; b < c; b++) {
				var g = a[b];
				this.clearRect(g.x + this._transformTx, g.y + this._transformTy, g.width, g.height)
			}
			this.renderCost = 0
		};
		a.prototype.clearRect = function(a, b, c, d) {

			this.canvasContext.clearRect(a, b, c, d)
		};
		a.prototype.drawImage = function(a, c, q, g, f, h, k, n, m) {
			c /= d.MainContext.instance.rendererContext.texture_scale_factor;
			q /= d.MainContext.instance.rendererContext.texture_scale_factor;
			g /= d.MainContext.instance.rendererContext.texture_scale_factor;
			f /= d.MainContext.instance.rendererContext.texture_scale_factor;
			a = a._bitmapData;
			h += this._transformTx;
			k += this._transformTy;
			var p = d.getTimer();
			this.canvasContext.drawImage(a, c, q, g, f, h, k, n, m);
			b.prototype.drawImage.call(this, a, c, q, g, f, h, k, n, m);
			this.renderCost += d.getTimer() - p
		};
		a.prototype.setTransform = function(a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx =
				this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		a.prototype.setAlpha = function(a, b) {
			a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
			b ? (this.blendValue = b, this.canvasContext.globalCompositeOperation = b) : this.blendValue != d.BlendMode.NORMAL && (this.blendValue = d.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = d.BlendMode.NORMAL)
		};
		a.prototype.setupFont = function(a) {
			var b = this.canvasContext,
				c = a.italic ? "italic " : "normal ",
				c = c + (a.bold ? "bold " : "normal "),
				c = c + (a.size + "px " + a.fontFamily);
			b.font = c;
			b.textAlign = "left";
			b.textBaseline = "middle"
		};
		a.prototype.measureText = function(a) {
			return this.canvasContext.measureText(a).width
		};
		a.prototype.drawText = function(a, c, d, g, f) {
			var h = a._strokeColorString,
				k = a.stroke,
				n = this.canvasContext;
			n.fillStyle = a._textColorString;
			n.strokeStyle = h;
			k && (n.lineWidth = 2 * k, n.strokeText(c, d + this._transformTx, g + this._transformTy,
				f || 65535));
			n.fillText(c, d + this._transformTx, g + this._transformTy, f || 65535);
			b.prototype.drawText.call(this, a, c, d, g, f)
		};
		a.prototype.strokeRect = function(a, b, c, d, f) {
			this.canvasContext.strokeStyle = f;
			this.canvasContext.strokeRect(a, b, c, d)
		};
		a.prototype.pushMask = function(a) {
			this.canvasContext.save();
			this.canvasContext.beginPath();
			this.canvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
			this.canvasContext.clip();
			this.canvasContext.closePath()
		};
		a.prototype.popMask = function() {
			this.canvasContext.restore();
			this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		return a
	}(d.RendererContext);
	d.HTML5CanvasRenderer = c;
	c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(d) {
	d.beginFill = function(b, a) {
		"undefined" === typeof a && (a = 1);
		var d = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.fillStyleColor = d;
		this.commandQueue.push(new c(this._setStyle, this, [d]))
	};
	d.drawRect = function(b, a, d, l) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
			this.canvasContext.closePath()
		}, this, [b, a, d, l]));
		this._fill()
	};
	d.drawCircle = function(b, a, d) {
		this.commandQueue.push(new c(function(a,
			b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [b, a, d]));
		this._fill()
	};
	d.drawRoundRect = function(b, a, d, l, q, g) {
		this.commandQueue.push(new c(function(a, b, c, d, e, l) {
			var g = this.renderContext;
			a = g._transformTx + a;
			b = g._transformTy + b;
			e /= 2;
			l = l ? l / 2 : e;
			c = a + c;
			d = b + d;
			g = d - l;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(c, g);
			this.canvasContext.quadraticCurveTo(c, d, c - e, d);
			this.canvasContext.lineTo(a +
				e, d);
			this.canvasContext.quadraticCurveTo(a, d, a, d - l);
			this.canvasContext.lineTo(a, b + l);
			this.canvasContext.quadraticCurveTo(a, b, a + e, b);
			this.canvasContext.lineTo(c - e, b);
			this.canvasContext.quadraticCurveTo(c, b, c, b + l);
			this.canvasContext.lineTo(c, g);
			this.canvasContext.closePath()
		}, this, [b, a, d, l, q, g]));
		this._fill()
	};
	d.drawEllipse = function(b, a, d, l) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.save();
			a = e._transformTx + a;
			b = e._transformTy + b;
			var e = c > d ? c : d,
				l = c / e;
			d /=
				e;
			this.canvasContext.scale(l, d);
			this.canvasContext.beginPath();
			this.canvasContext.moveTo((a + c) / l, b / d);
			this.canvasContext.arc(a / l, b / d, e, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore();
			this.canvasContext.stroke()
		}, this, [b, a, d, l]));
		this._fill()
	};
	d.lineStyle = function(b, a, d, l, q, g, f, h) {
		"undefined" === typeof b && (b = NaN);
		"undefined" === typeof a && (a = 0);
		"undefined" === typeof d && (d = 1);
		"undefined" === typeof l && (l = !1);
		"undefined" === typeof q && (q = "normal");
		"undefined" === typeof g && (g = null);
		"undefined" ===
			typeof f && (f = null);
		"undefined" === typeof h && (h = 3);
		this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + d + ")";
		this.commandQueue.push(new c(function(a, b) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = b;
			this.canvasContext.beginPath()
		}, this, [b, a]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	d.lineTo = function(b, a) {
		this.commandQueue.push(new c(function(a,
			b) {
			var c = this.renderContext;
			this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
		}, this, [b, a]));
		this.lineX = b;
		this.lineY = a
	};
	d.curveTo = function(b, a, d, l) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, c, d)
		}, this, [b, a, d, l]));
		this.lineX = d;
		this.lineY = l
	};
	d.moveTo = function(b, a) {
		this.commandQueue.push(new c(function(a, b) {
				var c = this.renderContext;
				this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
			},
			this, [b, a]))
	};
	d.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null
	};
	d.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new c(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	d.endFill = function() {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null
	};
	d._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
	};
	d.createEndLineCommand =
		function() {
			this.endLineCommand || (this.endLineCommand = new c(function() {
				this.canvasContext.stroke();
				this.canvasContext.closePath()
			}, this, null))
	};
	d._draw = function(b) {
		this.renderContext = b;
		b = this.canvasContext = this.renderContext.canvasContext;
		b.save();
		var a = this.commandQueue.length;
		this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
		for (var c = 0; c < a; c++) {
			var d = this.commandQueue[c];
			d.method.apply(d.thisObject,
				d.args)
		}
		b.restore()
	};
	var c = function() {
		return function(b, a, c) {
			this.method = b;
			this.thisObject = a;
			this.args = c
		}
	}();
	c.prototype.__class__ = "Command";
	d._setStyle = function(b) {
		this.canvasContext.fillStyle = b;
		this.canvasContext.beginPath()
	};
	d.init = function() {
		for (var b in d) egret.Graphics.prototype[b] = d[b];
		egret.RendererContext.createRendererContext = function(a) {
			return new egret.HTML5CanvasRenderer(a)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			b.call(this);
			this.size = 2E3;
			this.vertSize = 6;
			this.contextLost = !1;
			this.glContextId = 0;
			this.currentBlendMode = "";
			this.currentBaseTexture = null;
			this.currentBatchSize = 0;
			this.maskList = [];
			this.maskDataFreeList = [];
			this.canvasContext = document.createElement("canvas").getContext("2d");
			console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
			this.canvas = a;
			a.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
			a.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
			this.projectionX = a.width / 2;
			this.projectionY = -a.height / 2;
			a = 6 * this.size;
			this.vertices = new Float32Array(4 * this.size * this.vertSize);
			this.indices = new Uint16Array(a);
			for (var c = 0, q = 0; c < a; c += 6, q += 4) this.indices[c + 0] = q + 0, this.indices[c + 1] = q + 1, this.indices[c + 2] = q + 2, this.indices[c + 3] = q + 0, this.indices[c + 4] = q + 2, this.indices[c + 5] = q + 3;
			this.initWebGL();
			this.shaderManager = new d.WebGLShaderManager(this.gl);
			this.worldTransform = new d.Matrix;
			this.initBlendMode();
			d.MainContext.instance.addEventListener(d.Event.FINISH_RENDER,
				this._draw, this);
			d.TextField.prototype._draw = function(a) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				d.DisplayObject.prototype._draw.call(this, a)
			}
		}
		__extends(a, b);
		a.prototype.handleContextLost = function() {
			this.contextLost = !0
		};
		a.prototype.handleContextRestored = function() {
			this.initWebGL();
			this.shaderManager.setContext(this.gl);
			this.contextLost = !1
		};
		a.prototype.initWebGL = function() {
			for (var a = {
				stencil: !0
			}, b, c = ["experimental-webgl", "webgl"], d = 0; d < c.length; d++) {
				try {
					b = this.canvas.getContext(c[d], a)
				} catch (f) {}
				if (b) break
			}
			if (!b) throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
			this.setContext(b)
		};
		a.prototype.setContext = function(a) {
			this.gl = a;
			a.id = this.glContextId++;
			this.vertexBuffer = a.createBuffer();
			this.indexBuffer = a.createBuffer();
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
			a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
			a.disable(a.DEPTH_TEST);
			a.disable(a.CULL_FACE);
			a.enable(a.BLEND);
			a.colorMask(!0, !0, !0, !0)
		};
		a.prototype.initBlendMode = function() {
			a.blendModesWebGL[d.BlendMode.NORMAL] =
				[this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			a.blendModesWebGL[d.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.DST_ALPHA]
		};
		a.prototype.start = function() {
			if (!this.contextLost) {
				var a = this.gl;
				a.activeTexture(a.TEXTURE0);
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var b = this.shaderManager.defaultShader;
				a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
				var c = 4 * this.vertSize;
				a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
				a.vertexAttribPointer(b.aTextureCoord,
					2, a.FLOAT, !1, c, 8);
				a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
			}
		};
		a.prototype.clearScreen = function() {
			var a = this.gl;
			a.colorMask(!0, !0, !0, !0);
			for (var b = d.RenderFilter.getInstance().getDrawAreaList(), c = 0, g = b.length; c < g; c++) {
				var f = b[c];
				a.viewport(f.x, f.y, f.width, f.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			this.renderCost = 0
		};
		a.prototype.setBlendMode = function(b) {
			b || (b = d.BlendMode.NORMAL);
			if (this.currentBlendMode != b) {
				var c = a.blendModesWebGL[b];
				c && (this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = b)
			}
		};
		a.prototype.drawImage = function(a, b, c, g, f, h, k, n, m) {
			if (!this.contextLost) {
				var p = d.MainContext.instance.rendererContext.texture_scale_factor;
				b /= p;
				c /= p;
				g /= p;
				f /= p;
				this.createWebGLTexture(a);
				if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(), this.currentBaseTexture = a.webGLTexture;
				var t = this.worldTransform,
					r = t.a,
					s = t.b,
					u = t.c,
					v = t.d,
					x = t.tx,
					y = t.ty;
				0 == h && 0 == k || t.append(1, 0, 0, 1, h, k);
				1 == g / n && 1 == f / m || t.append(n / g,
					0, 0, m / f, 0, 0);
				h = t.a;
				k = t.b;
				n = t.c;
				m = t.d;
				var p = t.tx,
					w = t.ty;
				t.a = r;
				t.b = s;
				t.c = u;
				t.d = v;
				t.tx = x;
				t.ty = y;
				r = a._sourceWidth;
				s = a._sourceHeight;
				a = g;
				t = f;
				b /= r;
				c /= s;
				g /= r;
				f /= s;
				r = this.vertices;
				s = 4 * this.currentBatchSize * this.vertSize;
				u = this.worldAlpha;
				r[s++] = p;
				r[s++] = w;
				r[s++] = b;
				r[s++] = c;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = h * a + p;
				r[s++] = k * a + w;
				r[s++] = g + b;
				r[s++] = c;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = h * a + n * t + p;
				r[s++] = m * t + k * a + w;
				r[s++] = g + b;
				r[s++] = f + c;
				r[s++] = u;
				r[s++] = 16777215;
				r[s++] = n * t + p;
				r[s++] = m * t + w;
				r[s++] = b;
				r[s++] = f + c;
				r[s++] = u;
				r[s++] =
					16777215;
				this.currentBatchSize++
			}
		};
		a.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = d.getTimer();
				this.start();
				var b = this.gl;
				b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
				var c = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				b.bufferSubData(b.ARRAY_BUFFER, 0, c);
				b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += d.getTimer() - a;
				d.Profiler.getInstance().onDrawImage()
			}
		};
		a.prototype.setTransform =
			function(a) {
				var b = this.worldTransform;
				b.a = a.a;
				b.b = a.b;
				b.c = a.c;
				b.d = a.d;
				b.tx = a.tx;
				b.ty = a.ty
		};
		a.prototype.setAlpha = function(a, b) {
			this.worldAlpha = a;
			b && this.setBlendMode(b)
		};
		a.prototype.createWebGLTexture = function(a) {
			if (!a.webGLTexture) {
				var b = this.gl;
				a.webGLTexture = b.createTexture();
				b.bindTexture(b.TEXTURE_2D, a.webGLTexture);
				b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
				b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a._bitmapData);
				b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
				b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
				b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
				b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
				b.bindTexture(b.TEXTURE_2D, null)
			}
		};
		a.prototype.pushMask = function(a) {
			this._draw();
			var b = this.gl;
			0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
			var c = this.maskDataFreeList.pop();
			c ? (c.x = a.x, c.y = a.y, c.w = a.width, c.h = a.height) : c = {
				x: a.x,
				y: a.y,
				w: a.width,
				h: a.height
			};
			this.maskList.push(c);
			b.colorMask(!1, !1, !1, !1);
			b.stencilOp(b.KEEP, b.KEEP, b.INCR);
			this.renderGraphics(c);
			b.colorMask(!0, !0, !0, !0);
			b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
			b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
		};
		a.prototype.popMask = function() {
			this._draw();
			var a = this.gl,
				b = this.maskList.pop();
			b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
			0 == this.maskList.length &&
				a.disable(a.STENCIL_TEST)
		};
		a.prototype.setupFont = function(a) {
			var b = this.canvasContext,
				c = a.italic ? "italic " : "normal ",
				c = c + (a.bold ? "bold " : "normal "),
				c = c + (a.size + "px " + a.fontFamily);
			b.font = c;
			b.textAlign = "left";
			b.textBaseline = "middle"
		};
		a.prototype.measureText = function(a) {
			return this.canvasContext.measureText(a).width
		};
		a.prototype.renderGraphics = function(a) {
			var b = this.gl,
				c = this.shaderManager.primitiveShader;
			this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints =
				[], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
			this.updateGraphics(a);
			this.shaderManager.activateShader(c);
			b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
			b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
			b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
			b.uniform2f(c.offsetVector, 0, 0);
			b.uniform3fv(c.tintColor, [1, 1, 1]);
			b.uniform1f(c.alpha, this.worldAlpha);
			b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
			b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
			b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
			b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
			this.shaderManager.activateShader(this.shaderManager.defaultShader)
		};
		a.prototype.updateGraphics = function(a) {
			var b = this.gl;
			this.buildRectangle(a);
			b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
			b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints),
				b.STATIC_DRAW);
			b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
		};
		a.prototype.buildRectangle = function(a) {
			var b = a.x,
				c = a.y,
				d = a.w;
			a = a.h;
			var f = this.graphicsPoints,
				h = this.graphicsIndices,
				k = f.length / 6;
			f.push(b, c);
			f.push(0, 0, 0, 1);
			f.push(b + d, c);
			f.push(0, 0, 0, 1);
			f.push(b, c + a);
			f.push(0, 0, 0, 1);
			f.push(b + d, c + a);
			f.push(0, 0, 0, 1);
			h.push(k, k, k + 1, k + 2, k + 3, k + 3)
		};
		a.blendModesWebGL = {};
		return a
	}(d.RendererContext);
	d.WebGLRenderer =
		c;
	c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.compileProgram = function(a, c, d) {
			d = b.compileFragmentShader(a, d);
			c = b.compileVertexShader(a, c);
			var q = a.createProgram();
			a.attachShader(q, c);
			a.attachShader(q, d);
			a.linkProgram(q);
			a.getProgramParameter(q, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return q
		};
		b.compileFragmentShader = function(a, c) {
			return b._compileShader(a, c, a.FRAGMENT_SHADER)
		};
		b.compileVertexShader = function(a, c) {
			return b._compileShader(a, c, a.VERTEX_SHADER)
		};
		b._compileShader =
			function(a, b, c) {
				c = a.createShader(c);
				a.shaderSource(c, b);
				a.compileShader(c);
				return a.getShaderParameter(c, a.COMPILE_STATUS) ? c : (console.log(a.getShaderInfoLog(c)), null)
		};
		b.checkCanUseWebGL = function() {
			if (void 0 == b.canUseWebGL) try {
				var a = document.createElement("canvas");
				b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
			} catch (c) {
				b.canUseWebGL = !1
			}
			return b.canUseWebGL
		};
		return b
	}();
	d.WebGLUtils = c;
	c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
(function(d) {
	var c = function() {
		function c(a) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
			this.setContext(a)
		}
		c.prototype.setContext = function(c) {
			this.gl = c;
			this.primitiveShader = new a(c);
			this.defaultShader = new b(c);
			this.activateShader(this.defaultShader)
		};
		c.prototype.activateShader = function(a) {
			this.gl.useProgram(a.program);
			this.setAttribs(a.attributes)
		};
		c.prototype.setAttribs = function(a) {
			var b, c;
			c = this.tempAttribState.length;
			for (b =
				0; b < c; b++) this.tempAttribState[b] = !1;
			c = a.length;
			for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
			a = this.gl;
			c = this.attribState.length;
			for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
		};
		return c
	}();
	d.WebGLShaderManager = c;
	c.prototype.__class__ = "egret.WebGLShaderManager";
	var b = function() {
		function a(b) {
			this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;\n   vColor = vec4(color * aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function() {
			var a = this.gl,
				b = d.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.uSampler = a.getUniformLocation(b, "uSampler");
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector =
				a.getUniformLocation(b, "offsetVector");
			this.dimensions = a.getUniformLocation(b, "dimensions");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord");
			this.colorAttribute = a.getAttribLocation(b, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			this.program = b
		};
		return a
	}();
	d.EgretShader = b;
	b.prototype.__class__ = "egret.EgretShader";
	var a = function() {
		function a(b) {
			this.alpha =
				this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function() {
			var a = this.gl,
				b = d.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
			a.useProgram(b);
			this.projectionVector = a.getUniformLocation(b, "projectionVector");
			this.offsetVector = a.getUniformLocation(b, "offsetVector");
			this.tintColor = a.getUniformLocation(b, "tint");
			this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
			this.colorAttribute = a.getAttribLocation(b, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix =
				a.getUniformLocation(b, "translationMatrix");
			this.alpha = a.getUniformLocation(b, "alpha");
			this.program = b
		};
		return a
	}();
	d.PrimitiveShader = a;
	a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.proceed = function(a) {
			function b(c) {
				d.IOErrorEvent.dispatchIOErrorEvent(a)
			}

			function c(b) {
				switch (a.dataFormat) {
					case d.URLLoaderDataFormat.TEXT:
						a.data = f.responseText;
						break;
					case d.URLLoaderDataFormat.VARIABLES:
						a.data = new d.URLVariables(f.responseText);
						break;
					case d.URLLoaderDataFormat.BINARY:
						a.data = f.response;
						break;
					default:
						a.data = f.responseText
				}
				d.callLater(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
			}
			if (a.dataFormat ==
				d.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
			else if (a.dataFormat == d.URLLoaderDataFormat.SOUND) this.loadSound(a);
			else {
				var g = a._request,
					f = this.getXHR();
				f.onerror = b;
				f.onload = c;
				f.open(g.method, g.url, !0);
				this.setResponseType(f, a.dataFormat);
				g.method != d.URLRequestMethod.GET && g.data ? g.data instanceof d.URLVariables ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(g.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(g.data)) : f.send()
			}
		};
		a.prototype.loadSound =
			function(a) {
				function b(f) {
					window.clearTimeout(g.__timeoutId);
					g.removeEventListener("canplaythrough", b, !1);
					g.removeEventListener("error", c, !1);
					f = new d.Sound;
					f._setAudio(g);
					a.data = f;
					d.callLater(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
				}

				function c(f) {
					window.clearTimeout(g.__timeoutId);
					g.removeEventListener("canplaythrough", b, !1);
					g.removeEventListener("error", c, !1);
					d.IOErrorEvent.dispatchIOErrorEvent(a)
				}
				var g = new Audio(a._request.url);
				g.__timeoutId = window.setTimeout(b, 100);
				g.addEventListener("canplaythrough",
					b, !1);
				g.addEventListener("error", c, !1);
				g.load()
		};
		a.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		a.prototype.setResponseType = function(a, b) {
			switch (b) {
				case d.URLLoaderDataFormat.TEXT:
				case d.URLLoaderDataFormat.VARIABLES:
					a.responseType = d.URLLoaderDataFormat.TEXT;
					break;
				case d.URLLoaderDataFormat.BINARY:
					a.responseType = "arraybuffer";
					break;
				default:
					a.responseType = b
			}
		};
		a.prototype.loadTexture = function(a) {
			var b = a._request,
				c = new Image;
			c.crossOrigin = "Anonymous";
			c.onload = function(b) {
				c.onerror = null;
				c.onload = null;
				b = new d.Texture;
				b._setBitmapData(c);
				a.data = b;
				d.callLater(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
			};
			c.onerror = function(b) {
				c.onerror = null;
				c.onload = null;
				d.IOErrorEvent.dispatchIOErrorEvent(a)
			};
			c.src = b.url
		};
		return a
	}(d.NetContext);
	d.HTML5NetContext = c;
	c.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a) {
			b.call(this);
			this.canvas = a;
			this._isTouchDown = !1
		}
		__extends(a, b);
		a.prototype.run = function() {
			var a = this;
			window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(b) {
				a._onTouchBegin(b);
				b.stopPropagation();
				b.preventDefault()
			}, !1), this.canvas.addEventListener("MSPointerMove", function(b) {
				a._onTouchMove(b);
				b.stopPropagation();
				b.preventDefault()
			}, !1), this.canvas.addEventListener("MSPointerUp", function(b) {
				a._onTouchEnd(b);
				b.stopPropagation();
				b.preventDefault()
			}, !1)) : d.MainContext.deviceType == d.MainContext.DEVICE_MOBILE ? this.addTouchListener() : d.MainContext.deviceType == d.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function(b) {
				a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
			});
			window.addEventListener("mouseup", function(b) {
				a._isTouchDown && a.inOutOfCanvas(b) && a.dispatchLeaveStageEvent();
				a._isTouchDown = !1
			})
		};
		a.prototype.addMouseListener = function() {
			var a = this;
			this.canvas.addEventListener("mousedown", function(b) {
				a._onTouchBegin(b)
			});
			this.canvas.addEventListener("mousemove", function(b) {
				a._onTouchMove(b)
			});
			this.canvas.addEventListener("mouseup", function(b) {
				a._onTouchEnd(b)
			})
		};
		a.prototype.addTouchListener = function() {
			var a = this;
			this.canvas.addEventListener("touchstart", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
				b.stopPropagation();
				b.preventDefault()
			}, !1);
			this.canvas.addEventListener("touchmove", function(b) {
				for (var c =
					b.changedTouches.length, d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
				b.stopPropagation();
				b.preventDefault()
			}, !1);
			this.canvas.addEventListener("touchend", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
				b.stopPropagation();
				b.preventDefault()
			}, !1);
			this.canvas.addEventListener("touchcancel", function(b) {
				for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
				b.stopPropagation();
				b.preventDefault()
			}, !1)
		};
		a.prototype.inOutOfCanvas = function(a) {
			a =
				this.getLocation(this.canvas, a);
			return 0 > a.x || 0 > a.y || a.x > this.canvas.width || a.y > this.canvas.height ? !0 : !1
		};
		a.prototype.dispatchLeaveStageEvent = function() {
			d.MainContext.instance.stage.dispatchEventWith(d.Event.LEAVE_STAGE)
		};
		a.prototype._onTouchBegin = function(a) {
			var b = this.getLocation(this.canvas, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchBegan(b.x, b.y, c)
		};
		a.prototype._onTouchMove = function(a) {
			var b = this.getLocation(this.canvas, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchMove(b.x, b.y, c)
		};
		a.prototype._onTouchEnd = function(a) {
			var b = this.getLocation(this.canvas, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchEnd(b.x, b.y, c)
		};
		a.prototype.getLocation = function(a, b) {
			var c = document.documentElement,
				g = window,
				f, h;
			"function" === typeof a.getBoundingClientRect ? (h = a.getBoundingClientRect(), f = h.left, h = h.top) : h = f = 0;
			f += g.pageXOffset - c.clientLeft;
			h += g.pageYOffset - c.clientTop;
			null != b.pageX ? (c = b.pageX, g = b.pageY) : (f -= document.body.scrollLeft, h -= document.body.scrollTop,
				c = b.clientX, g = b.clientY);
			var k = d.Point.identity;
			k.x = (c - f) / d.StageDelegate.getInstance().getScaleX();
			k.y = (g - h) / d.StageDelegate.getInstance().getScaleY();
			return k
		};
		return a
	}(d.TouchContext);
	d.HTML5TouchContext = c;
	c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	GameObject = function(d) {
		function c() {
			d.call(this);
			this.key = "gameObject";
			this.isStand = !0;
			this.hitCount = 0
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			this.hitCount++
		};
		c.prototype.isHit = function(b) {
			return b.x + 12 >= this.view.x - this.view.width / 2 && b.x - 12 <= this.view.x + this.view.width / 2 && b.y >= this.view.y && b.oldY <= this.view.y + 1 && this.isStand ?
				!0 : !1
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {};
		c.prototype.onRenew = function() {};
		return c
	}(egret.HashObject);
GameObject.prototype.__class__ = "GameObject";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	starlingswf;
(function(d) {
	var c = function(b) {
		function a() {
			b.apply(this, arguments)
		}
		__extends(a, b);
		a.prototype.getTextField = function(a) {
			return this.getChildByName(a)
		};
		a.prototype.getMovie = function(a) {
			return this.getChildByName(a)
		};
		a.prototype.getSprite = function(a) {
			return this.getChildByName(a)
		};
		a.prototype.getImage = function(a) {
			return this.getChildByName(a)
		};
		return a
	}(egret.DisplayObjectContainer);
	d.SwfSprite = c;
	c.prototype.__class__ = "starlingswf.SwfSprite"
})(starlingswf || (starlingswf = {}));
(function(d) {
	var c = function() {
		function b(a, c, l) {
			"undefined" === typeof l && (l = 24);
			this._swfData = a;
			this._assetManager = c;
			this._createDisplayFuns = {};
			this._createDisplayFuns[b.dataKey_Sprite] = this.createSprite;
			this._createDisplayFuns[b.dataKey_MovieClip] = this.createMovie;
			this._createDisplayFuns[b.dataKey_Image] = this.createImage;
			this._createDisplayFuns[b.dataKey_Scale9] = this.createS9Image;
			this._createDisplayFuns[b.dataKey_ShapeImg] = this.createShapeImage;
			this._createDisplayFuns[b.dataKey_TextField] = this.createTextField;
			this.swfUpdateManager = d.SwfUpdateManager.createSwfUpdateManager(l)
		}
		b.prototype.createSprite = function(a, c, l) {
			"undefined" === typeof l && (l = null);
			null == l && (l = this._swfData[b.dataKey_Sprite][a]);
			a = new d.SwfSprite;
			c = l.length;
			for (var q, g, f = 0; f < c; f++) q = l[f], g = this._createDisplayFuns[q[1]], null != g && (g = g.apply(this, [q[0], q]), g.name = q[9], g.x = q[2], g.y = q[3], q[1] != b.dataKey_Scale9 && q[1] != b.dataKey_ShapeImg && (g.scaleX = q[4], g.scaleY = q[5]), g.skewX = q[6], g.skewY = q[7], g.alpha = q[8], a.addChild(g));
			return a
		};
		b.prototype.createMovie =
			function(a, c) {
				var l = this._swfData[b.dataKey_MovieClip][a],
					q = l.objCount,
					g = {},
					f, h, k, n, m;
				for (m in q) {
					h = q[m][0];
					k = q[m][1];
					f = null == g[m] ? [] : g[m];
					for (var p = 0; p < k; p++) n = this._createDisplayFuns[h], null != n && f.push(n.apply(this, [m, null]));
					g[m] = f
				}
				q = new d.SwfMovieClip(l.frames, l.labels, g, this);
				q.loop = l.loop;
                return q
		};
		b.prototype.createImage = function(a, c) {
			var d = this._swfData[b.dataKey_Image][a],
				q = this._assetManager.createBitmap(a);
			q.anchorOffsetX = d[0];
			q.anchorOffsetY = d[1];
			return q
		};
		b.prototype.createS9Image = function(a,
			c) {
			"undefined" === typeof c && (c = null);
			var d = this._swfData[b.dataKey_Scale9][a],
				q = this._assetManager.createBitmap(a);
			q.scale9Grid = new egret.Rectangle(d[0], d[1], d[2], d[3]);
			null != c && (q.width = c[10], q.height = c[11]);
			return q
		};
		b.prototype.createShapeImage = function(a, b) {
			"undefined" === typeof b && (b = null);
			var c = this._assetManager.createBitmap(a);
			c.fillMode = egret.BitmapFillMode.REPEAT;
			null != b && (c.width = b[10], c.height = b[11]);
			return c
		};
		b.prototype.createTextField = function(a, b) {
			"undefined" === typeof b && (b = null);
			var c =
				new egret.TextField;
			null != b && (c.width = b[10], c.height = b[11], c.fontFamily = b[12], c.textColor = b[13], c.size = b[14], c.textAlign = b[15], c.text = b[18]);
			return c
		};
		b.dataKey_Sprite = "spr";
		b.dataKey_Image = "img";
		b.dataKey_MovieClip = "mc";
		b.dataKey_TextField = "text";
		b.dataKey_Button = "btn";
		b.dataKey_Scale9 = "s9";
		b.dataKey_ShapeImg = "shapeImg";
		b.dataKey_Component = "comp";
		b.dataKey_Particle = "particle";
		return b
	}();
	d.Swf = c;
	c.prototype.__class__ = "starlingswf.Swf"
})(starlingswf || (starlingswf = {}));
var ManStatus = function() {
	function d() {}
	d.STAND = "stand";
	d.JUMP = "jump";
	d.LEFT_RUN = "left_run";
	d.RIGHT_RUN = "right_run";
	d.STAND_HURT = "stand_hurt";
	d.JUMP_HURT = "jump_hurt";
	d.LEFT_RUN_HURT = "left_run_hurt";
	d.RIGHT_RUN_HURT = "right_run_hurt";
	return d
}();
ManStatus.prototype.__class__ = "ManStatus";
(function(d) {
	var c = function() {
		function b() {
			this._sheets = {};
			this._textures = {}
		}
		b.prototype.addSpriteSheet = function(a, b) {
			this._sheets[a] = b
		};
		b.prototype.addTexture = function(a, b) {
			this._textures[a] = b
		};
		b.prototype.createBitmap = function(a) {
			var b, c;
			for (c in this._sheets)
				if (b = this._sheets[c], b = b.getTexture(a), null != b) break;
			null == b && (b = this._textures[a]);
			if (null == b) return null;
			a = new egret.Bitmap;
			a.texture = b;
			return a
		};
		return b
	}();
	d.SwfAssetManager = c;
	c.prototype.__class__ = "starlingswf.SwfAssetManager"
})(starlingswf ||
	(starlingswf = {}));
(function(d) {
	var c = function() {
		function b() {}
		b.createSwfUpdateManager = function(a) {
			var c = new b;
			c._animations = [];
			c._addQueue = [];
			c._removeQueue = [];
			c._currentTime = 0;
			c.setFps(a);
			egret.Ticker.getInstance().register(c.update, c);
			return c
		};
		b.prototype.setFps = function(a) {
			this._fps = a;
			this._fpsTime = 1E3 / a
		};
		b.prototype.addSwfAnimation = function(a) {
			this._addQueue.push(a)
		};
		b.prototype.removeSwfAnimation = function(a) {
			this._removeQueue.push(a)
		};
		b.prototype.updateAdd = function() {
			for (var a = this._addQueue.length, b, c, d = 0; d <
				a; d++) c = this._addQueue.pop(), b = this._animations.indexOf(c), -1 == b && this._animations.push(c)
		};
		b.prototype.updateRemove = function() {
			for (var a = this._removeQueue.length, b, c = 0; c < a; c++) b = this._removeQueue.pop(), b = this._animations.indexOf(b), -1 != b && this._animations.splice(b, 1)
		};
		b.prototype.update = function(a) {
			this._currentTime += a;
			if (!(this._currentTime < this._fpsTime)) {
				this._currentTime -= this._fpsTime;
				this._currentTime > this._fpsTime && (this._currentTime = 0);
				this.updateRemove();
				this.updateAdd();
				a = this._animations.length;
				for (var b = 0; b < a; b++) this._animations[b].update()
			}
		};
		return b
	}();
	d.SwfUpdateManager = c;
	c.prototype.__class__ = "starlingswf.SwfUpdateManager"
})(starlingswf || (starlingswf = {}));
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a(a, c, d, g) {
			b.call(this);
			this._isPlay = !1;
			this.loop = !0;
			this._completeFunction = null;
			this._hasCompleteListener = !1;
			this._frames = a;
			this._labels = c;
			this._displayObjects = d;
			this._startFrame = 0;
			this._endFrame = this._frames.length - 1;
			this._ownerSwf = g;
			this.setCurrentFrame(0);
			this.play();
		}
		__extends(a, b);
		a.prototype.update = function() {
			this._isPlay && (this._currentFrame > this._endFrame ? (this._hasCompleteListener && this.dispatchEventWith(egret.Event.COMPLETE), this._currentFrame = this._startFrame,
				this.loop ? this._startFrame == this._endFrame ? this._ownerSwf && this.stop(!1) : this.setCurrentFrame(this._startFrame) : this._ownerSwf && this.stop(!1)) : (this.setCurrentFrame(this._currentFrame), this._currentFrame += 1))
		};
		a.prototype.setCurrentFrame = function(a) {
			this._children.length = 0;
			this._currentFrame = a;
			this.__frameInfos = this._frames[this._currentFrame];
			for (var b, c = this.__frameInfos.length, g = 0; g < c; g++) a = this.__frameInfos[g], b = a[10], b = this._displayObjects[a[0]][b], b._skewX = a[6], b._skewY = a[7], b._alpha = a[8], b.name =
				a[9], b._x = a[2], b._y = a[3], a[1] == d.Swf.dataKey_Scale9 ? (b.width = a[11], b.height = a[12]) : (b._scaleX = a[4], b._scaleY = a[5]), this._children.push(b), b._parent = this, a[1] == d.Swf.dataKey_TextField && (b.width = a[11], b.height = a[12], b.fontFamily = a[13], b.textColor = a[14], b.size = a[15], b.textAlign = a[16], a[19] && "\r" != a[19] && "" != a[19] && (b.text = a[19]))
		};
		a.prototype.getCurrentFrame = function() {
			return this._currentFrame
		};
		a.prototype.play = function() {
			this._isPlay = !0;
			this._ownerSwf.swfUpdateManager.addSwfAnimation(this);
			var a, b,
				c;
			for (a in this._displayObjects)
				if (0 == a.indexOf(d.Swf.dataKey_MovieClip)) {
					b = this._displayObjects[a];
					c = b.length;
					for (var g = 0; g < c; g++) b[g].play()
				}
		};
		a.prototype.stop = function(a) {
			"undefined" === typeof a && (a = !0);
			this._isPlay = !1;
			this._ownerSwf.swfUpdateManager.removeSwfAnimation(this);
			if (a) {
				var b, c, g;
				for (b in this._displayObjects)
					if (0 == b.indexOf(d.Swf.dataKey_MovieClip)) {
						c = this._displayObjects[b];
						g = c.length;
						for (var f = 0; f < g; f++) c[f].stop(a)
					}
			}
		};
		a.prototype.gotoAndStop = function(a, b) {
			"undefined" === typeof b &&
				(b = !0);
			this.goTo(a);
			this.stop(b)
		};
		a.prototype.gotoAndPlay = function(a) {
			this.goTo(a);
			this.play()
		};
		a.prototype.goTo = function(a) {
			"string" == typeof a ? (a = this.getLabelData(a), this._currentLabel = a[0], this._currentFrame = this._startFrame = a[1], this._endFrame = a[2]) : "number" == typeof a && (this._currentFrame = this._startFrame = a, this._endFrame = this._frames.length - 1);
			this.setCurrentFrame(this._currentFrame)
		};
		a.prototype.getLabelData = function(a) {
			for (var b = this._labels.length, c, d = 0; d < b; d++)
				if (c = this._labels[d], c[0] ==
					a) return c;
			return null
		};
		a.prototype.isPlay = function() {
			return this._isPlay
		};
		a.prototype.totalFrames = function() {
			return this._frames.length
		};
		a.prototype.currentLabel = function() {
			return this._currentLabel
		};
		a.prototype.labels = function() {
			for (var a = this._labels.length, b = [], c = 0; c < a; c++) b.push(this._labels[c][0]);
			return b
		};
		a.prototype.hasLabel = function(a) {
			return -1 != this.labels().indexOf(a)
		};
		a.prototype.addEventListener = function(a, c, d, g, f) {
			"undefined" === typeof g && (g = !1);
			"undefined" === typeof f && (f = 0);
			b.prototype.addEventListener.call(this,
				a, c, d, g, f);
			this._hasCompleteListener = this.hasEventListener(egret.Event.COMPLETE)
		};
		a.prototype.removeEventListener = function(a, c, d, g) {
			"undefined" === typeof g && (g = !1);
			b.prototype.removeEventListener.call(this, a, c, d, g);
			this._hasCompleteListener = this.hasEventListener(egret.Event.COMPLETE)
		};
		return a
	}(d.SwfSprite);
	d.SwfMovieClip = c;
	c.prototype.__class__ = "starlingswf.SwfMovieClip"
})(starlingswf || (starlingswf = {}));
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	Man = function(d) {
		function c() {
			d.call(this);
			this.isJump = this.isHurt = !1;
			this.oldY = this.xSpeed = this.xForce = this.jumpSpeed = 0;
			this.life = 12;
			this.isStartJump = !1;
			this.playState = ManStatus.STAND;
			this.man = GameApp.swf.createMovie("mc_man");
			this.recoverTimer = new egret.Timer(2E3, 1);
			this.recoverTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,
				this.timerComFunc, this);
			this.addChild(this.man)
		}
		__extends(c, d);
		c.prototype.stand = function() {
			this.isHurt ? (this.man.gotoAndStop("stand_hurt"), this.playState = ManStatus.STAND_HURT) : (this.man.gotoAndStop("stand"), this.playState = ManStatus.STAND)
		};
		c.prototype.jump = function() {
			this.isHurt ? this.playState != ManStatus.JUMP_HURT && (this.playState = ManStatus.JUMP_HURT, this.man.gotoAndPlay("jump_hurt")) : this.playState != ManStatus.JUMP && (this.playState = ManStatus.JUMP, this.man.gotoAndPlay("jump"))
		};
		c.prototype.runLeft =
			function() {
				this.isHurt ? this.playState != ManStatus.LEFT_RUN_HURT && (this.playState = ManStatus.LEFT_RUN_HURT, this.man.gotoAndPlay("run_left_hurt")) : this.playState != ManStatus.LEFT_RUN && (this.playState = ManStatus.LEFT_RUN, this.man.gotoAndPlay("run_left"))
		};
		c.prototype.runRight = function() {
			this.isHurt ? this.playState != ManStatus.RIGHT_RUN_HURT && (this.playState = ManStatus.RIGHT_RUN_HURT, this.man.gotoAndPlay("run_right_hurt")) : this.playState != ManStatus.RIGHT_RUN && (this.playState = ManStatus.RIGHT_RUN, this.man.gotoAndPlay("run_right"))
		};
		c.prototype.hurt = function() {
			this.updateLife(!0);
			this.isHurt = !0;
			this.recoverTimer.reset();
			this.recoverTimer.running || this.recoverTimer.start()
		};
		c.prototype.recover = function() {
			this.isHurt = !1
		};
		c.prototype.updateLife = function(b) {
			"undefined" === typeof b && (b = !1);
			b ? (this.life -= 4, this.life = Math.max(0, this.life)) : (this.life++, this.life = Math.min(this.life, 12))
		};
		c.prototype.timerComFunc = function() {
			this.recover()
		};
		return c
	}(egret.Sprite);
Man.prototype.__class__ = "Man";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	NailBox = function(d) {
		function c() {
			d.call(this);
			this.key = "nail";
			this.alreadyCauseHurt = !1;
			this.view = GameApp.swf.createSprite("spr_nail_step");
			this.view.touchEnabled = !1
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			this.alreadyCauseHurt || (this.alreadyCauseHurt = !0, b.hurt(), RES.getRes("sound_hurt").play(!1))
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {
			this.alreadyCauseHurt = !1
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
NailBox.prototype.__class__ = "NailBox";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	NormalBox = function(d) {
		function c() {
			d.call(this);
			this.key = "normal";
			this.alreadyHealing = !1;
			this.view = GameApp.swf.createSprite("spr_step");
			this.view.touchEnabled = !1
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			d.prototype.interact.call(this, b);
			this.alreadyHealing || (this.alreadyHealing = !0, b.updateLife(), RES.getRes("sound_touch").play(!1))
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {
			this.alreadyHealing = !1
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
NormalBox.prototype.__class__ = "NormalBox";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	RightBox = function(d) {
		function c() {
			d.call(this);
			this.key = "right";
			this.alreadyTouched = !1;
			this.view = GameApp.swf.createMovie("mc_right_step");
			this.view.touchEnabled = !1;
			this.view.anchorOffsetY = -8
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			b.xForce = 0.12;
			this.alreadyTouched || (this.alreadyTouched = !0, b.updateLife(), RES.getRes("sound_lr").play(!1))
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {
			this.alreadyTouched = !1
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
RightBox.prototype.__class__ = "RightBox";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	RollBox = function(d) {
		function c() {
			d.call(this);
			this.key = "roll";
			this.isTouch = !1;
			this.view = GameApp.swf.createMovie("mc_roll_step");
			this.view.touchEnabled = !1;
			this.view.anchorOffsetY = -8;
			this.view.stop()
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			this.isTouch || (this.isTouch = !0, b.updateLife(), RES.getRes("sound_roll").play(!1), this.view.gotoAndPlay("origin"),
				this.view.addEventListener(egret.Event.ENTER_FRAME, this.onTick, this), this.view.touchEnabled)
		};
		c.prototype.onTick = function() {
			this.view.getCurrentFrame() == this.view.totalFrames() && (this.view.gotoAndStop("origin"), this.view.removeEventListener(egret.Event.ENTER_FRAME, this.onTick, this));
			2 == this.view.getCurrentFrame() && (this.isStand = !1)
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {
			this.view.gotoAndStop("origin");
			this.isStand = !0;
			this.isTouch = !1
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
RollBox.prototype.__class__ = "RollBox";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	SpringBox = function(d) {
		function c() {
			d.call(this);
			this.key = "spring";
			this.view = GameApp.swf.createMovie("mc_spring");
			this.view.touchEnabled = !1;
			this.view.stop()
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			this.view.gotoAndPlay("origin");
			this.view.addEventListener(egret.Event.ENTER_FRAME, this.onTick, this);
			b.jumpSpeed = -12.5;
			b.isJump = !0;
			b.updateLife();
			RES.getRes("sound_jump").play(!1)
		};
		c.prototype.onTick = function() {
			this.view.getCurrentFrame() == this.view.totalFrames() && (this.view.gotoAndStop("origin"), this.view.removeEventListener(egret.Event.ENTER_FRAME, this.onTick, this))
		};
		c.prototype.onCreate = function() {};
		c.prototype.onDestroy = function() {
			this.view.gotoAndStop("origin")
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
SpringBox.prototype.__class__ = "SpringBox";
var ObjectPool = function() {
	function d() {
		this._pool = {};
		this._list = []
	}
	d.prototype.registerPool = function(c, b, a) {
		this._pool[b] || (this._pool[b] = new PoolItem(c, a))
	};
	d.prototype.getObj = function(c, b) {
		if (this._pool[c]) {
			var a;
			this._pool[c].active >= this._pool[c].size ? (a = new b, this._pool[c].size++, this._pool[c].active++, this._pool[c].items.push(a)) : (a = this._pool[c].items[this._pool[c].active], this._pool[c].active++, a.onRenew());
			return a
		}
	};
	d.prototype.returnObj = function(c, b) {
		if (this._pool[c]) {
			var a = this._pool[c].items.indexOf(b);
			0 <= a && (this._pool[c].items.splice(a, 1), b.onDestroy(), this._pool[c].items.push(b), this._pool[c].active--)
		}
	};
	d.getInstance = function() {
		null == d.instance && (d.instance = new d);
		return d.instance
	};
	return d
}();
ObjectPool.prototype.__class__ = "ObjectPool";
var PoolItem = function() {
	function d(c, b) {
		this.itemClass = c;
		this.size = b;
		this.active = 0;
		this.items = Array(b);
		this.initialize()
	}
	d.prototype.initialize = function() {
		for (var c = 0; c < this.size; c++) this.items[c] = new this.itemClass
	};
	return d
}();
PoolItem.prototype.__class__ = "PoolItem";
__extends = this.__extends || function(d, c) {
	function b() {
		this.constructor = d
	}
	for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
	b.prototype = c.prototype;
	d.prototype = new b
};
(function(d) {
	var c = function(b) {
		function a() {
			b.apply(this, arguments)
		}
		__extends(a, b);
		a.prototype.parseSpriteSheet = function(a, b) {
			var c = b.frames;
			if (c) {
				var d = new egret.SpriteSheet(a),
					f;
				for (f in c) {
					var h = c[f];
					d.createTexture(f, h.x, h.y, h.w, h.h, -h.offX, -h.offY)
				}
				return d
			}
		};
		return a
	}(RES.SheetAnalyzer);
	d.StarlingSwfSheetAnalyzer = c;
	c.prototype.__class__ = "starlingswf.StarlingSwfSheetAnalyzer"
})(starlingswf || (starlingswf = {}));
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	CompanyContainer = function(d) {
		function c() {
			d.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, d);
		c.prototype.onAddToStage = function(b) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.graphics.beginFill(0);
			this.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
			this.graphics.endFill();
			b = GameApp.swf.createImage("img_wizcloud_logo");
			b.alpha = 0;
			this.addChild(b);
			var a = new egret.TextField;
			a.alpha = 0;
			a.text = "";
			a.bold = !0;
			a.size = 36;
			this.addChild(a);
			b.x = (this.stage.stageWidth - b.width - a.width) / 2;
			a.x = b.x + b.width + 5;
			b.y = 295;
			a.y = 300;
			egret.Tween.get(b).to({
				alpha: 1
			}, 1500).to({
				alpha: 0
			}, 1500).call(this.tweenComplete, this);
			egret.Tween.get(a).to({
				alpha: 1
			}, 1500).to({
				alpha: 0
			}, 1500)
		};
		c.prototype.tweenComplete = function() {
			this.parent.removeChild(this)
		};
		return c
	}(egret.Sprite);
CompanyContainer.prototype.__class__ = "CompanyContainer";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	GameApp = function(d) {
		function c() {
			d.call(this);
			this.keys = "left right normal nail roll spring".split(" ");
			this.classes = [LeftBox, RightBox, NormalBox, NailBox, RollBox, SpringBox];
			this.sectend = 0;
			this.stepInterval = 400;
			this.tempUID = "";
			this.socres = [];
			this._mcIndex = 400;
			this._mcArray = [];
			this.isRightCtrl = this.isLeftCtrl = !1;
			this.isManCtrl = !0;
			this.ratio1 =
				60;
			this.ratio3 = this.ratio2 = 14;
			this.ratio4 = 8;
			this.ratio6 = this.ratio5 = 2;
			this.keyWords = "gm mm wi ty 00 un".split(" ");
			this.last_time = -1;
			egret.Injector.mapClass(RES.AnalyzerBase, starlingswf.StarlingSwfSheetAnalyzer, "starlingswf_sheet");
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, d);
		c.prototype.onAddToStage = function(b) {
			this.loadingView = new LoadingUI;
			this.stage.addChild(this.loadingView);
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete,
				this);
			RES.loadConfig("resource/resource.json", "./");
		};
		c.prototype.onConfigComplete = function(b) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("starlingswf")
		};
		c.prototype.onResourceLoadComplete = function(b) {
			"starlingswf" ==
				b.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), b = window.location.href, (0 < b.indexOf("localhost") || 0 < b.indexOf(this.keyWords[this.randomRange(0, 5)]) && 0 < b.indexOf(this.keyWords[this.randomRange(0, 5)])) && this.createGameScene())
				this.createGameScene();
		};
		c.prototype.onResourceProgress = function(b) {
			"starlingswf" == b.groupName && this.loadingView.setProgress(b.itemsLoaded,
				b.itemsTotal)
		};
		c.prototype.createGameScene = function() {
			this.stageW = this.stage.stageWidth;
			this.stageH = this.stage.stageHeight;
			var b = RES.getRes("mandown_swf");
			this.spriteSheet = RES.getRes("mandown");
			this.spriteSheet2 = RES.getRes("big_image");
			var a = new starlingswf.SwfAssetManager;
			a.addSpriteSheet("mandown", this.spriteSheet);
			a.addSpriteSheet("big_image", this.spriteSheet2);
			c.swf = new starlingswf.Swf(b, a, 30);
			ObjectPool.getInstance().registerPool(LeftBox, "left", 5);
			ObjectPool.getInstance().registerPool(RightBox,
				"right", 5);
			ObjectPool.getInstance().registerPool(NormalBox, "normal", 10);
			ObjectPool.getInstance().registerPool(NailBox, "nail", 5);
			ObjectPool.getInstance().registerPool(RollBox, "roll", 5);
			ObjectPool.getInstance().registerPool(SpringBox, "spring", 5);
			this.initSteps();
			this.initLayers();
			b = new CompanyContainer;
			this.addChild(b)
		};
		c.prototype.gameStart = function() {
			for (var b = 3; 0 <= b; b--) 3 == b ? (this.getStep(640 - 48 * b, 240, "normal"), this.man.x = 240, this.man.y = 640 - 48 * b) : this.getStep(640 - 48 * b, -1, "normal");
			c.currentFloors =
				0;
			this.man.life = 12;
			this.updateLifeBar();
			this.updateFloors(0);
            sppd = 0;
            blayer = 0;
            bTime = new Date().getTime();
			this.bgContainer.start();
			this.last_time = egret.getTimer();
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
		};
		c.prototype.dead = function() {
			this.bgContainer.pause();
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			this.endLayer.visible = !0;
			this.socres.push(blayer);
            this.socres.sort();
            var best = localStorage.best || 0;
            if(blayer*1 > best*1){
                localStorage.best = best = blayer;
            }
            this.bestValueText.text = best + "\u5c42";
            this.scoreValueText.text = blayer + "\u5c42";
            this.onPostComplete(this);
            var play68ShareData = "我在#是男人就下100层#一鼓作气下了" + GameApp.currentFloors +"层,\u83b7\u5f97\u79f0\u53f7: \u3010" + c.getTitle(blayer) + "\u3011";
            // updateShare(play68ShareData);
			// Play68.setRankingScoreDesc(GameApp.currentFloors);
		};
		c.prototype.onPostComplete = function(b) {
			c.currentRank = blayer;
			c.totalCount = 2000;
            var t = new Date().getTime();
            var cSco = blayer;
            var bsetSco = localStorage.best;

            if(cSco > 0){
                var thisrank = new Date().getTime()/10000000000 * (20000-cSco) / cSco*6 /cSco*9 - Math.random()*100 >> 0;
            }else{
                var thisrank = 0;
            }
            if( localStorage.bestrank == undefined ){
                localStorage.bestrank = thisrank;
            }
            var bestrank = localStorage.bestrank || thisrank;

            if(thisrank < bestrank && thisrank != 0 && bestrank > 0){
                localStorage.bestrank = bestrank = thisrank;
            }

			this.awardText.text = "\u5168\u5b87\u5b99\u6392\u540d " + Math.abs(thisrank) + " \u4f4d\n\u51fb\u8d25\u4e86\u5168\u5b87\u5b99 " + Math.abs(100 - 200/blayer).toFixed(1) + "% \u7684\u7f51\u53cb\n\u83b7\u5f97\u79f0\u53f7: \u3010" + c.getTitle(blayer) + "\u3011";

		};
		c.prototype.randomString = function(b) {
			var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
			b || (b = Math.floor(Math.random() * a.length));
			for (var c = "", d = 0; d < b; d++) c += a[Math.floor(Math.random() * a.length)];
			return c
		};
		c.prototype.gameOver = function() {

			this.isRightCtrl = this.isLeftCtrl = this.man.isJump = !1;
			this.isManCtrl = !0;
			this.sectend = 0;

			this.gameLayer.y = 0;
			c.speed = 0.14;
			this._mcIndex = this.stepInterval;
			for (this.man.stand(); 0 < this._mcArray.length;) this.backLayer.removeChild(this._mcArray[0].view), ObjectPool.getInstance().returnObj(this._mcArray[0].key, this._mcArray[0]), this._mcArray.splice(0, 1)
		};
		c.prototype.onStart = function() {
			this.gameStart()
		};
		c.prototype.initLayers = function() {

			this.gameLayer = new egret.Sprite;
			this.bgContainer = new BackgroundContainer;
			this.addChild(this.bgContainer);
			this.backLayer = new egret.Sprite;
			this.gameLayer.addChild(this.backLayer);

			this.man = new Man;
			this.man.anchorOffsetY = 16;
			this.man.stand();
			this.gameLayer.addChild(this.man);
			this.addChild(this.gameLayer);
			this.gameUILayer = new egret.Sprite;
			this.addChild(this.gameUILayer);
			this.uiLayer = new egret.Sprite;
			this.addChild(this.uiLayer);
			this.initGameUI();
			this.initStartLayer();
			this.initGameOverLayer()
		};
		c.prototype.initController = function() {
			var b = new egret.Shape;
			b.graphics.beginFill(0, 0.1);
			b.graphics.drawCircle(100, 450, 60);
			b.graphics.endFill();
			b.graphics.beginFill(16777215, 0.2);
			b.graphics.drawCircle(100, 450, 58);
			b.graphics.endFill();
			this.uiLayer.addChild(b);
			b = new egret.TextField;
			b.text = "<";
			b.size = 48;
			b.alpha = 0.3;
			b.stroke = 2;
			b.strokeColor = 0;
			b.x = 100 - b.width / 2;
			b.y = 450 - b.height / 2;
			this.uiLayer.addChild(b);
			b = new egret.Shape;
			b.graphics.beginFill(0, 0.1);
			b.graphics.drawCircle(this.stageW - 100, 450, 60);
			b.graphics.endFill();
			b.graphics.beginFill(16777215, 0.2);
			b.graphics.drawCircle(this.stageW - 100, 450, 58);
			b.graphics.endFill();
			this.uiLayer.addChild(b);
			b = new egret.TextField;
			b.text = ">";
			b.size = 48;
			b.alpha = 0.3;
			b.stroke = 2;
			b.strokeColor = 0;
			b.x = this.stageW - 100 - b.width / 2;
			b.y = 450 - b.height / 2;
			this.uiLayer.addChild(b)
		};
		c.prototype.initStartLayer = function() {
			this.startLayer = new egret.Sprite;
			this.startLayer.graphics.beginFill(0, 0.5);
			this.startLayer.graphics.drawRect(0, 0, this.stageW, this.stageH);
			this.startLayer.graphics.endFill();
			var b =
				new egret.Shape;
			b.graphics.lineStyle(3, 16776960);
			b.graphics.drawRoundRect(50, 190, this.stageW - 100, 250, 5, 5);
			this.startLayer.addChild(b);
			egret.Tween.get(b, {
				loop: !0
			}).to({
				alpha: 0
			}, 500).to({
				alpha: 1
			}, 500);
			b = c.swf.createImage("img_mandown_label");
			b.y = 100;
			b.x = (this.stageW - b.width) / 2;
			this.startLayer.addChild(b);



			b = c.swf.createSprite("spr_startgame");
			b.touchEnabled = !0;
			b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
			//console.log(b);
			b.y = 480;
			b.x = (this.stageW - b.width) / 2;
			this.startLayer.addChild(b);
			var a = c.swf.createSprite("spr_right_intro"),
				b = c.swf.createSprite("spr_left_intro");
			this.startLayer.addChild(a);
			this.startLayer.addChild(b);
			a.x = (this.stageW - a.width) / 2;
			a.y = 200;
			b.x = (this.stageW - b.width) / 2;
			b.y = 325;
			var d = new egret.TextField;
			d.text = "\u70b9\u51fb\u5c4f\u5e55\u53f3\u4fa7\u53ef\u4ee5\u63a7\u5236\u4eba\u7269\u5411\u53f3";
			d.textColor = 16777215;
			d.size = 18;
			d.y = a.y + a.height;
			d.x = (this.stageW - d.width) / 2;
			this.startLayer.addChild(d);
			a = new egret.TextField;
			a.text = "\u70b9\u51fb\u5c4f\u5e55\u5de6\u4fa7\u53ef\u4ee5\u63a7\u5236\u4eba\u7269\u5411\u5de6";
			a.textColor = 16777215;
			a.size = 18;
			a.y = b.y + b.height;
			a.x = (this.stageW - a.width) / 2;
			this.startLayer.addChild(a);
			b = this.getChildIndex(this.gameUILayer);
			this.addChildAt(this.startLayer, b)
		};
		c.prototype.initGameOverLayer = function() {
			this.endLayer = new egret.Sprite;
			this.endLayer.graphics.beginFill(0, 0.5);
			this.endLayer.graphics.drawRect(0, 0, this.stageW, this.stageH);
			this.endLayer.graphics.endFill();
			this.addChild(this.endLayer);
			var b = new egret.TextField;
			b.text = "游戏结束";
			b.textColor = 15724527;
			b.bold = !0;
			b.size = 48;
			b.width =
				this.stageW;
			b.textAlign = egret.HorizontalAlign.CENTER;
			b.touchEnabled = !1;
			b.y = 80;
			this.endLayer.addChild(b);
			b = new egret.TextField;
			b.text = "最高分";
			b.textColor = 16681509;
			b.bold = !0;
			b.size = 36;
			b.width = this.stageW;
			b.textAlign = egret.HorizontalAlign.CENTER;
			b.touchEnabled = !1;
			b.y = 140;
			b.stroke = 2;
			b.strokeColor = 16777215;
			this.endLayer.addChild(b);
			this.bestValueText = new egret.TextField;
			this.bestValueText.text = "0";
			this.bestValueText.textColor = 16777215;
			this.bestValueText.bold = !0;
			this.bestValueText.size = 36;
			this.bestValueText.width =
				this.stageW;
			this.bestValueText.textAlign = egret.HorizontalAlign.CENTER;
			this.bestValueText.touchEnabled = !1;
			this.bestValueText.y = b.y + b.height + 5;
			this.endLayer.addChild(this.bestValueText);
			b = new egret.TextField;
			b.text = "分数";
			b.textColor = 16681509;
			b.bold = !0;
			b.size = 36;
			b.width = this.stageW;
			b.textAlign = egret.HorizontalAlign.CENTER;
			b.touchEnabled = !1;
			b.y = this.bestValueText.y + this.bestValueText.height + 20;
			b.stroke = 2;
			b.strokeColor = 16777215;
			this.endLayer.addChild(b);
			this.scoreValueText = new egret.TextField;
			this.scoreValueText.text =
				"0";
			this.scoreValueText.bold = !0;
			this.scoreValueText.size = 36;
			this.scoreValueText.textColor = 16777215;
			this.scoreValueText.width = this.stageW;
			this.scoreValueText.textAlign = egret.HorizontalAlign.CENTER;
			this.scoreValueText.touchEnabled = !1;
			this.scoreValueText.y = b.y + b.height + 5;
			this.endLayer.addChild(this.scoreValueText);
			this.awardText = new egret.TextField;
			this.awardText._lineSpacing = 2;
			this.awardText.size = 24;
			this.awardText.bold = !0;
			this.awardText.width = this.stageW;
			this.awardText.textAlign = egret.HorizontalAlign.CENTER;
			this.awardText.touchEnabled = !1;
			this.awardText.y = this.scoreValueText.y + this.scoreValueText.height + 10;
			this.endLayer.addChild(this.awardText);
			var a = new egret.Sprite;
			a.graphics.beginFill(13421772, 0.2);
			a.graphics.drawRoundRect(0, 0, 160, 60, 4, 4);
			a.graphics.endFill();
			a.graphics.lineStyle(4, 16777215);
			a.graphics.drawRoundRect(0, 0, 160, 60, 4, 4);
			a.graphics.endFill();
			a.width = 160;
			a.height = 60;
			a.touchEnabled = !0;
			a.x = 70;
			a.y = 450;
			this.endLayer.addChild(a);
			var c = new egret.Sprite;
			c.graphics.beginFill(65280, 0.2);
			c.graphics.drawRoundRect(0,
				0, 160, 60, 4, 4);
			c.graphics.endFill();
			c.graphics.lineStyle(4, 16777215);
			c.graphics.drawRoundRect(0, 0, 160, 60, 4, 4);
			c.width = 160;
			c.height = 60;
			c.touchEnabled = !0;
			c.x = this.stageW - 160 - 70;
			c.y = 450;
			this.endLayer.addChild(c);
			var d = new egret.TextField;
			d.text = "\u91cd\u73a9";
			d.textColor = 16777215;
			d.bold = !0;
			d.size = 36;
			d.width = a.width;
			d.height = a.height;
			a.addChild(d);
			d.textAlign = egret.HorizontalAlign.CENTER;
			d.verticalAlign = egret.VerticalAlign.MIDDLE;
			d.touchEnabled = !0;
			d.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplay,
				this);
			a = new egret.TextField;
			a.text = "\u901a\u77e5\u597d\u53cb";
			a.textColor = 16777215;
			a.bold = !0;
			a.size = 36;
			a.width = c.width;
			a.height = c.height;
			c.addChild(a);

			a.textAlign = egret.HorizontalAlign.CENTER;
			a.verticalAlign = egret.VerticalAlign.MIDDLE;
			a.touchEnabled = !0;
			a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);

			a = new egret.TextField;
			a.textColor = 10066329;
			//a.text = "\u8054\u7cfb\u6211\u4eec: service@wityun.com \n powered by egret framework";
			a.width = this.stageW;
			a.textAlign = egret.HorizontalAlign.CENTER;
			a.size = 18;
			this.endLayer.addChild(a);

			a.y = c.y + c.height + 20;
			c = new egret.TextField;
			c.textColor = 60928;
			c.size = 18;
			c.y = a.y + b.height + 10;
			c.width = this.stageW;
			c.textAlign = egret.HorizontalAlign.CENTER;
			c.italic = !0;
			//c.text = "\u70b9\u51fb\u8fd9\u91cc\u5173\u6ce8\u6211\u4eec\u516c\u4f17\u8d26\u53f7";
			c.touchEnabled = !0;
			c.height = 40;
			c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHome, this);
			this.endLayer.addChild(c);
			this.endLayer.visible = !1;
		};
		c.prototype.goHome = function(b) {
            // Play68.goHome();
		};
		c.prototype.initGameUI = function() {
			this.gameUI = c.swf.createSprite("spr_uiframe");
			this.addChild(this.gameUI);
			this.lifeBar = this.gameUI.getImage("progress");
			this.stage.touchEnabled = !0;
			this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageDown, this);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageUp, this);
			this.count1 = this.gameUI.getMovie("floor_count1");
			this.count2 = this.gameUI.getMovie("floor_count2");
			this.count3 = this.gameUI.getMovie("floor_count3");
			this.count4 = this.gameUI.getMovie("floor_count4");
			this.count1.gotoAndStop(0);
			this.count2.gotoAndStop(0);
			this.count3.gotoAndStop(0);
			this.count4.gotoAndStop(0);
			var b = this;
			document.addEventListener("keydown", function(a) {
				if (37 == a.keyCode) b.onLeftDown();
				else if (39 == a.keyCode) b.onRightDown()
			});
			document.addEventListener("keyup", function(a) {
				if (37 == a.keyCode) b.onLeftUp();
				else if (39 == a.keyCode) b.onRightUp()
			})
		};
		c.prototype.initSteps = function() {
			this.steps = [];
			this.distributeStepsRatio(this.ratio1, this.ratio2, this.ratio3, this.ratio4, this.ratio5, this.ratio6)
		};
		c.prototype.distributeStepsRatio = function(b, a, c, d, q, g) {
			this.steps = [];
			for (var f = 0; f < b; f++) this.steps.push("normal");
			for (f = 0; f < a; f++) this.steps.push("nail");
			for (f = 0; f < c; f++) this.steps.push("roll");
			for (f = 0; f < d; f++) this.steps.push("spring");
			for (f = 0; f < q; f++) this.steps.push("left");
			for (f = 0; f < g; f++) this.steps.push("right");
			this.shuffledSteps = Array(this.steps.length);
			for (f = b = 0; f < this.shuffledSteps.length; f++) b = Math.floor(Math.random() * this.steps.length), this.shuffledSteps[f] = this.steps.splice(b, 1)[0]
		};
		c.prototype.onShare =function(b) {
				// dolaApi.showSharePage();
				var play68ShareData = "我在#是男人就下100层#一鼓作气下了" + GameApp.currentFloors +"层,\u83b7\u5f97\u79f0\u53f7: \u3010" + c.getTitle(blayer) + "\u3011";
				// play68_submitScore(play68ShareData);
		};
		c.prototype.onCloseShareLayer = function(b) {
			this.shareWeiXinContainer && (this.shareWeiXinContainer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseShareLayer,
				this), this.contains(this.shareWeiXinContainer) && this.removeChild(this.shareWeiXinContainer), this.shareWeiXinContainer = null)
		};
		c.prototype.onStartGame = function(b) {
            this.contains(this.startLayer) && this.removeChild(this.startLayer);
			this.gameStart()
		};
		c.prototype.onStageDown = function(b) {
			b._stageX <= this.stage.stageWidth / 2 ? (this.isLeftCtrl = !0, this.isRightCtrl = !1) : (this.isRightCtrl = !0, this.isLeftCtrl = !1)
		};
		c.prototype.onStageUp = function(b) {
			b.stageX <= this.stage.stageWidth / 2 ? this.isLeftCtrl = !1 : this.isRightCtrl = !1
		};
		c.prototype.onLeftDown = function(b) {
			this.isLeftCtrl = !0;
			this.isRightCtrl = !1
		};
		c.prototype.onLeftUp = function(b) {
			this.isLeftCtrl = !1
		};
		c.prototype.onRightDown = function(b) {
			this.isRightCtrl = !0;
			this.isLeftCtrl = !1
		};
		c.prototype.onRightUp = function(b) {
			this.isRightCtrl = !1
		};
		c.prototype.onReplay = function(b) {
			this.endLayer.visible = !1;
			this.gameOver();
			this.gameStart()
		};
		c.prototype.randomRange = function(b, a) {
			return Math.floor(Math.random() * (a - b + 1)) + b
		};
		c.prototype.onEnterFrame = function() {
			var b = egret.getTimer();
			c.dt =
				b - this.last_time;
			this.last_time = b;
           // console.log(new Date().getTime() - bTime)
            if(new Date().getTime() - bTime > 1000000){
                sppd += 1;
            }

			this.gameLayer.y -= (c.speed * c.dt + sppd/10000 );
			this.man.xForce = 0;
			this.man.xSpeed = 0;
			0 < this._mcArray.length && 40 > this._mcArray[0].view.y + this.gameLayer.y && (b = this._mcArray.splice(0, 1)[0], this.backLayer.removeChild(b.view), ObjectPool.getInstance().returnObj(b.key, b));
			this.isManCtrl ? this.man.isJump && (this.man.jump(), this.man.y -= 60 / (1E3 / c.dt) * this.man.jumpSpeed * 0.06 * this.man.jumpSpeed, this.man.jumpSpeed += 0.06 * c.dt, 0 <= this.man.jumpSpeed && (this.man.isJump = !1)) : (this.man.y += 2 * c.speed * c.dt,
				this.man.jump(), b = 0.03 * this.sectend * this.sectend, 6 < b && (b = 6), this.man.y += b, this.sectend += 0.06 * c.dt);
			this.man.isJump ? 0 <= this.man.jumpSpeed && (this.man.isJump = !1) : this.isManCtrl = !1;
			for (var b = this._mcArray.length, a = 0; a < b; a++)
				if (this._mcArray[a].isHit(this.man)) {
					this._mcArray[a].interact(this.man);
					this.isManCtrl = !0;
					this.man.y = this._mcArray[a].view.y + 1;
					this.sectend = 1;
					break
				}
			this.isLeftCtrl && (this.isManCtrl ? this.man.runLeft() : this.man.jump(), this.man.xSpeed = -0.24 * c.dt);
			this.isRightCtrl && (this.isManCtrl ? this.man.runRight() :
				this.man.jump(), this.man.xSpeed = 0.24 * c.dt);
			!this.isManCtrl || this.isRightCtrl || this.isLeftCtrl ? this.isManCtrl || this.man.jump() : this.man.stand();
			this.man.x += this.man.xSpeed + this.man.xForce * c.dt;
			58 > this.man.x && (this.man.x = 58);
			this.man.x > this.stage.stageWidth - 58 && (this.man.x = this.stage.stageWidth - 58);
			0 >= this._mcIndex && (this.getStep(), this._mcIndex = 48 / c.speed);
			this._mcIndex -= c.dt;
			105 >= this.man.y + this.gameLayer.y && (this.isManCtrl = !1, this.man.isJump = !1, this.man.y += 30, this.sectend = 3, this.man.hurt(), b = RES.getRes("sound_hurt"),
				b.play(!1));
			this.updateLifeBar();
			if (0 >= this.man.life || 750 < this.man.y + this.gameLayer.y) this.dead(), b = 0 >= this.man.life ? RES.getRes("sound_dead1") : RES.getRes("sound_dead2"), b.play(!1);
			b = Math.floor(-this.gameLayer.y / 450);
			//b > c.currentFloors && this.updateFloors(b);
            blayer > c.currentFloors && this.updateFloors(b);
            this.updateFloors(blayer);
			this.man.oldY = this.man.y
		};
        blayer = 0;
        var bTime = new Date().getTime();
		c.prototype.getStep = function(b, a, c) {
			"undefined" === typeof b && (b = 640);
			"undefined" === typeof a && (a = -1);
			"undefined" === typeof c && (c = "random");
			"random" == c && (c = this.randomRange(0, 99), c = this.shuffledSteps[c]);
			var d = this.keys.indexOf(c),
				d = this.classes[d];
			c = ObjectPool.getInstance().getObj(c, d);
			0 < a ? c.view.x = a : (c.view.x = 12 * this.randomRange(3, 28) + 48, c.view.x = Math.max(90, c.view.x), c.view.x = Math.min(384, c.view.x));
			c.view.y = b - this.gameLayer.y;
            //blayer
            blayer++;

            /*arrow*/
            b = new egret.Bitmap;
			b.texture = RES.getRes("tip_arrow");
			this.addChild(b);
			b.x = 13;
			b.y = this.stage.stageHeight - b.height - 10;
            /*arrow end*/

//            xb = new egret.Bitmap;
//            xb.texture = RES.getRes("arrow");
//            this.addChild(xb);
//            xb.x =0;
//            xb.y =600;

			this.backLayer.addChild(c.view);
			this._mcArray.push(c)
		};
		c.prototype.updateFloors = function(b) {

			c.currentFloors = b;
			var a;
			a = 10 > b ? Array(1) : 10 <= b && 100 > b ? Array(2) : Array(3);
			for (var d = 0; d < a.length; d++) a[d] = Math.floor(b % 10), b /= 10;
			switch (a.length) {
				case 1:
					this.count2.gotoAndStop(0);
					this.count3.gotoAndStop(0);
					this.count4.gotoAndStop(a[0]);
					break;
				case 2:
					this.count2.gotoAndStop(0);
					this.count3.gotoAndStop(a[1]);
					this.count4.gotoAndStop(a[0]);
					break;
				case 3:
					this.count2.gotoAndStop(a[2]), this.count3.gotoAndStop(a[1]), this.count4.gotoAndStop(a[0])
			}
			10 == c.currentFloors ? this.distributeStepsRatio(this.ratio1, this.ratio2, this.ratio3, this.ratio4, this.ratio5, this.ratio6) : 20 == c.currentFloors ? (c.speed += 0.001, this.distributeStepsRatio(this.ratio1 - 10, this.ratio2 + 5, this.ratio3 + 5, this.ratio4, this.ratio5, this.ratio6 )) : 30 == c.currentFloors ?
        (c.speed += 0.000, this.distributeStepsRatio(this.ratio1 - 15, this.ratio2+7, this.ratio3 + 8, this.ratio4, this.ratio5, this.ratio6)) : 40 == c.currentFloors ? (c.speed += 0.001, this.distributeStepsRatio(this.ratio1 - 20, this.ratio2 + 10, this.ratio3 + 10, this.ratio4, this.ratio5, this.ratio6)) : 50 == c.currentFloors ? (c.speed += 0.000, this.distributeStepsRatio(this.ratio1 - 25 , this.ratio2 + 10, this.ratio3 + 10, this.ratio4 + 5, this.ratio5, this.ratio6)) : 70 == c.currentFloors ? (c.speed += 0.003, this.distributeStepsRatio(this.ratio1 - 30, this.ratio2 +
        10, this.ratio3 + 10, this.ratio4 + 10, this.ratio5, this.ratio6)) : 90 == c.currentFloors && (c.speed += 0.005, this.distributeStepsRatio(this.ratio1 - 35, this.ratio2 + 10, this.ratio3 + 10, this.ratio4 + 5, this.ratio5 + 7, this.ratio6 + 8))
		};
		c.getTitle = function(b) {
			return 10 > b ? "\u5c0f\u8bd5\u8eab\u624b\u8005" : 10 <= b && 20 > b ? "\u82f1\u52c7\u65e0\u754f\u8005" : 20 <= b && 30 > b ? "\u884c\u5982\u98ce\u884c\u8005" : 30 <= b && 40 > b ? "\u5f71\u8eab\u5982\u98ce\u8005" : 40 <= b && 50 > b ? "\u6df1\u6e0a\u638c\u63a7\u8005" : 50 <= b && 60 > b ? "\u6781\u9650\u98de\u767b\u8005" :
				60 <= b && 70 > b ? "\u53ef\u8c13\u82f1\u96c4\u8005" : 70 <= b && 80 > b ? "\u51b2\u950b\u9677\u9635\u8005" : 80 <= b && 90 > b ? "\u8eab\u5982\u75be\u98ce\u8005" : "\u518d\u73b0\u6b66\u9b42\u8005"
		};
		c.prototype.updateLifeBar = function() {
			this.lifeBar.x = 51 - 8 * (12 - this.man.life)
		};
		c.speed = 0.14;
		c.dt = -1;
		c.currentFloors = 0;
		return c
	}(egret.DisplayObjectContainer);
GameApp.prototype.__class__ = "GameApp";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	LoadingUI = function(d) {
		function c() {
			d.call(this);
			this.createView()
		}
		__extends(c, d);
		c.prototype.createView = function() {
			this.textField = new egret.TextField;
			this.addChild(this.textField);
			this.textField.y = 300;
			this.textField.width = 480;
			this.textField.height = 100;
			this.textField.textAlign = "center"
		};
		c.prototype.setProgress = function(b, a) {
			this.textField.text =
				"\u6e38\u620f\u52a0\u8f7d\u4e2d..." + b + "/" + a
		};
		return c
	}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	ShareWeiXinContainer = function(d) {
		function c() {
			d.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, d);
		c.prototype.onAddToStage = function(b) {
			this.graphics.beginFill(0, 0.9);
			this.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
			this.graphics.endFill();
			this.touchEnabled = !0;
			b = new egret.Bitmap;
			b.texture = RES.getRes("share_weixin");
			//this.addChild(b);
			b.x = this.stage.stageWidth - b.width;
			var a = new egret.TextField;
			a.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2 \n \u70b9\u51fb \u3010\u5206\u4eab\u5230\u670b\u53cb\u5708\u3011\n";
			a.width = this.stage.stageWidth;
			a.textAlign = egret.HorizontalAlign.CENTER;
			a.textColor = 16777215;
			a.size = 36;
			a.lineSpacing = 4;
			a.bold = !0;

			a.y = b.height + 5;
            var ck = this;



			/*shareData.wxTimelineDesc = shareData.wxFriendDesc = shareData.desc = shareData.title = shareData.desc = "我一鼓作气下了" + GameApp.currentFloors +"层，超过了" + Math.abs(100 - 200/blayer).toFixed(1) + "%的人，不服来战，看看你能下几层！";;
            LBShare.updateData(shareData);
            
            LBShare.callShare();*/


		};
		return c;
	}(egret.Sprite);
ShareWeiXinContainer.prototype.__class__ = "ShareWeiXinContainer";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	LeftBox = function(d) {
		function c() {
			d.call(this);
			this.key = "left";
			this.alreadyTouched = !1;
			this.view = GameApp.swf.createMovie("mc_left_step");
			this.view.anchorOffsetY = -8
		}
		__extends(c, d);
		c.prototype.interact = function(b) {
			b.xForce = -0.12;
			this.alreadyTouched || (this.alreadyTouched = !0, b.updateLife(), RES.getRes("sound_lr").play(!1))
		};
		c.prototype.onCreate =
			function() {};
		c.prototype.onDestroy = function() {
			this.alreadyTouched = !1
		};
		c.prototype.onRenew = function() {};
		return c
	}(GameObject);
LeftBox.prototype.__class__ = "LeftBox";
var __extends = this.__extends || function(d, c) {
		function b() {
			this.constructor = d
		}
		for (var a in c) c.hasOwnProperty(a) && (d[a] = c[a]);
		b.prototype = c.prototype;
		d.prototype = new b
	},
	BackgroundContainer = function(d) {
		function c() {
			d.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, d);
		c.prototype.onAddToStage = function(b) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.stageW = this.stage.stageWidth;
			this.stageH = this.stage.stageHeight;
			b = RES.getRes("Main");
			var a = RES.getRes("line");
			this.textureHeight1 = b.textureHeight;
			this.textureHeight2 = a.textureHeight;
			//console.log(this.textureHeight1, this.textureHeight2, "texttureHeight");
			this.mainRowCount = Math.ceil(this.stageH / this.textureHeight1) + 1;
			this.lineRowCount = Math.ceil(this.stageH / this.textureHeight2) + 1;
			this.lineBmpArr = [];
			this.lineBmpArr1 = [];
			this.mainBmpArr = [];
			for (a = 0; a < this.mainRowCount; a++) {
				var c = new egret.Bitmap;
				b = RES.getRes("Main");
				c.texture = b;
				c.y = this.textureHeight1 * a;
				this.mainBmpArr.push(c);
				this.addChild(c)
			}
			for (a =
				0; a < this.lineRowCount; a++) c = new egret.Bitmap, c.x = 25, b = RES.getRes("line"), c.texture = b, c.y = this.textureHeight2 * a, this.lineBmpArr.push(c), this.addChild(c), b = new egret.Bitmap, b.texture = RES.getRes("line"), b.y = this.textureHeight2 * a, this.lineBmpArr1.push(b), b.scaleX = -1, b.x = this.stageW - 25, this.addChild(b)
		};
		c.prototype.start = function() {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
			this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this)
		};
		c.prototype.enterFrameHandler =
			function(b) {
				for (b = 0; b < this.mainRowCount; b++) {
					var a = this.mainBmpArr[b];
					a.y -= GameApp.speed * GameApp.dt * 0.5;
					a.y < -this.stageH && a.y < -this.textureHeight1 && (a.y = this.mainBmpArr[this.mainRowCount - 1].y + this.textureHeight1, this.mainBmpArr.shift(), this.mainBmpArr.push(a))
				}
				for (b = 0; b < this.lineRowCount; b++) {
					a = this.lineBmpArr[b];
					a.y -= GameApp.speed * GameApp.dt;
					var c = this.lineBmpArr1[b];
					c.y -= GameApp.speed * GameApp.dt;
					a.y < -this.textureHeight2 && (a.y = this.lineBmpArr[this.lineRowCount - 1].y + this.textureHeight2, this.lineBmpArr.shift(),
						this.lineBmpArr.push(a), c.y = this.lineBmpArr1[this.lineRowCount - 1].y + this.textureHeight2, this.lineBmpArr1.shift(), this.lineBmpArr1.push(c))
				}
		};
		c.prototype.pause = function() {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this)
		};
		return c
	}(egret.DisplayObjectContainer);
BackgroundContainer.prototype.__class__ = "BackgroundContainer";