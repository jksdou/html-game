var egret;
(function(b) {
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
	b.HashObject = c;
	c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(d) {
			void 0 === d && (d = 300);
			b.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > d && (d = 1);
			this.autoDisposeTime = d;
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
		a.prototype.push = function(d) {
			var h = this.objectPool; - 1 == h.indexOf(d) && (h.push(d), this._length++, 0 == this.frameCount && (this.frameCount =
				this.autoDisposeTime, a._callBackList.push(this)))
		};
		a.prototype.pop = function() {
			if (0 == this._length) return null;
			this._length--;
			return this.objectPool.pop()
		};
		a.prototype.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var d = a._callBackList,
				h = d.indexOf(this); - 1 != h && d.splice(h, 1)
		};
		a._callBackList = [];
		return a
	}(b.HashObject);
	b.Recycler = c;
	c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(b) {
	b.__START_TIME;
	b.getTimer = function() {
		return Date.now() - b.__START_TIME
	}
})(egret || (egret = {}));
(function(b) {
	b.__callLaterFunctionList = [];
	b.__callLaterThisList = [];
	b.__callLaterArgsList = [];
	b.callLater = function(c, e) {
		for (var a = [], d = 2; d < arguments.length; d++) a[d - 2] = arguments[d];
		b.__callLaterFunctionList.push(c);
		b.__callLaterThisList.push(e);
		b.__callLaterArgsList.push(a)
	};
	b.__callAsyncFunctionList = [];
	b.__callAsyncThisList = [];
	b.__callAsyncArgsList = [];
	b.__callAsync = function(c, e) {
		for (var a = [], d = 2; d < arguments.length; d++) a[d - 2] = arguments[d];
		b.__callAsyncFunctionList.push(c);
		b.__callAsyncThisList.push(e);
		b.__callAsyncArgsList.push(a)
	}
})(egret || (egret = {}));
var egret_dom;
(function(b) {
	function c() {
		for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], d = 0; d < a.length; d++)
			if (a[d] + "ransform" in b) return a[d];
		return a[0]
	}
	b.header = "";
	b.getHeader = c;
	b.getTrans = function(e) {
		"" == b.header && (b.header = c());
		return b.header + e.substring(1, e.length)
	}
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, g) {
			void 0 === a && (a = !1);
			void 0 === g && (g = !1);
			e.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = d;
			this._bubbles = a;
			this._cancelable = g
		}
		__extends(a, e);
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
		Object.defineProperty(a.prototype, "target", {
			get: function() {
				return this._target
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.isDefaultPrevented =
			function() {
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
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target =
				null, this._eventPhase = 2)
		};
		a._dispatchByTarget = function(d, a, g, e, c, f) {
			void 0 === c && (c = !1);
			void 0 === f && (f = !1);
			var l = d.eventRecycler;
			l || (l = d.eventRecycler = new b.Recycler);
			var n = l.pop();
			n ? n._type = g : n = new d(g);
			n._bubbles = c;
			n._cancelable = f;
			if (e)
				for (var p in e) n[p] = e[p], null !== n[p] && (e[p] = null);
			d = a.dispatchEvent(n);
			l.push(n);
			return d
		};
		a._getPropertyData = function(d) {
			var a = d._props;
			a || (a = d._props = {});
			return a
		};
		a.dispatchEvent = function(d, h, g, b) {
			void 0 === g && (g = !1);
			var e = a._getPropertyData(a);
			b && (e.data = b);
			a._dispatchByTarget(a,
				d, h, e, g)
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
		a.ACTIVATE = "activate";
		a.DEACTIVATE = "deactivate";
		a.CLOSE = "close";
		a.CONNECT = "connect";
		return a
	}(b.HashObject);
	b.Event = c;
	c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(d, a, g) {
			void 0 === a && (a = !1);
			void 0 === g && (g = !1);
			b.call(this, d, a, g);
			this._status = 0
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "status", {
			get: function() {
				return this._status
			},
			enumerable: !0,
			configurable: !0
		});
		a.dispatchHTTPStatusEvent = function(d, h) {
			null == a.httpStatusEvent && (a.httpStatusEvent = new a(a.HTTP_STATUS));
			a.httpStatusEvent._status = h;
			d.dispatchEvent(a.httpStatusEvent)
		};
		a.HTTP_STATUS = "httpStatus";
		a.httpStatusEvent = null;
		return a
	}(b.Event);
	b.HTTPStatusEvent =
		c;
	c.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, g) {
			void 0 === a && (a = !1);
			void 0 === g && (g = !1);
			e.call(this, d, a, g)
		}
		__extends(a, e);
		a.dispatchIOErrorEvent = function(d) {
			b.Event._dispatchByTarget(a, d, a.IO_ERROR)
		};
		a.IO_ERROR = "ioError";
		return a
	}(b.Event);
	b.IOErrorEvent = c;
	c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, g, b, c, f, l, n, p, q) {
			void 0 === a && (a = !0);
			void 0 === g && (g = !0);
			void 0 === b && (b = 0);
			void 0 === c && (c = 0);
			void 0 === f && (f = 0);
			void 0 === l && (l = !1);
			void 0 === n && (n = !1);
			void 0 === q && (q = !1);
			e.call(this, d, a, g);
			this._stageY = this._stageX = 0;
			this.touchPointID = b;
			this._stageX = c;
			this._stageY = f;
			this.ctrlKey = l;
			this.altKey = n;
			this.touchDown = q
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "stageX", {
			get: function() {
				return this._stageX
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype,
			"stageY", {
				get: function() {
					return this._stageY
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "localX", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "localY", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).y
			},
			enumerable: !0,
			configurable: !0
		});
		a.dispatchTouchEvent = function(d, h, g, e, c, f, l, n, p) {
			void 0 === g && (g = 0);
			void 0 === e && (e = 0);
			void 0 === c && (c = 0);
			void 0 === f && (f = !1);
			void 0 === l && (l = !1);
			void 0 === n && (n = !1);
			void 0 === p && (p = !1);
			var q = b.Event._getPropertyData(a);
			q.touchPointID = g;
			q._stageX = e;
			q._stageY = c;
			q.ctrlKey = f;
			q.altKey = l;
			q.shiftKey = n;
			q.touchDown = p;
			b.Event._dispatchByTarget(a, d, h, q, !0, !0)
		};
		a.TOUCH_TAP = "touchTap";
		a.TOUCH_MOVE = "touchMove";
		a.TOUCH_BEGIN = "touchBegin";
		a.TOUCH_END = "touchEnd";
		a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		a.TOUCH_ROLL_OUT = "touchRollOut";
		a.TOUCH_ROLL_OVER = "touchRollOver";
		a.TOUCH_OUT =
			"touchOut";
		a.TOUCH_OVER = "touchOver";
		return a
	}(b.Event);
	b.TouchEvent = c;
	c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, g) {
			void 0 === a && (a = !1);
			void 0 === g && (g = !1);
			e.call(this, d, a, g)
		}
		__extends(a, e);
		a.dispatchTimerEvent = function(d, h) {
			b.Event._dispatchByTarget(a, d, h)
		};
		a.TIMER = "timer";
		a.TIMER_COMPLETE = "timerComplete";
		return a
	}(b.Event);
	b.TimerEvent = c;
	c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, g, b, c) {
			void 0 === a && (a = !1);
			void 0 === g && (g = !1);
			void 0 === b && (b = 0);
			void 0 === c && (c = 0);
			e.call(this, d, a, g);
			this.bytesLoaded = b;
			this.bytesTotal = c
		}
		__extends(a, e);
		a.dispatchProgressEvent = function(d, h, g, e) {
			void 0 === g && (g = 0);
			void 0 === e && (e = 0);
			b.Event._dispatchByTarget(a, d, h, {
				bytesLoaded: g,
				bytesTotal: e
			})
		};
		a.PROGRESS = "progress";
		a.SOCKET_DATA = "socketData";
		return a
	}(b.Event);
	b.ProgressEvent = c;
	c.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.CAPTURING_PHASE = 1;
		b.AT_TARGET = 2;
		b.BUBBLING_PHASE = 3;
		return b
	}();
	b.EventPhase = c;
	c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d) {
			void 0 === d && (d = null);
			e.call(this);
			this._eventTarget = d ? d : this
		}
		__extends(a, e);
		a.prototype.addEventListener = function(d, a, g, e, c) {
			void 0 === e && (e = !1);
			void 0 === c && (c = 0);
			"undefined" === typeof e && (e = !1);
			"undefined" === typeof c && (c = 0);
			a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			e ? (this._captureEventsMap || (this._captureEventsMap = {}), e = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), e = this._eventsMap);
			var f = e[d];
			f || (f = e[d] = []);
			this._insertEventBin(f, a, g, c)
		};
		a.prototype._insertEventBin = function(d, a, b, e, c) {
			void 0 === c && (c = void 0);
			for (var f = -1, l = d.length, n = 0; n < l; n++) {
				var p = d[n];
				if (p.listener === a && p.thisObject === b && p.display === c) return !1; - 1 == f && p.priority < e && (f = n)
			}
			a = {
				listener: a,
				thisObject: b,
				priority: e
			};
			c && (a.display = c); - 1 != f ? d.splice(f, 0, a) : d.push(a);
			return !0
		};
		a.prototype.removeEventListener = function(d, a, b, e) {
			void 0 === e && (e = !1);
			if (e = e ? this._captureEventsMap : this._eventsMap) {
				var c = e[d];
				c && (this._removeEventBin(c,
					a, b), 0 == c.length && delete e[d])
			}
		};
		a.prototype._removeEventBin = function(d, a, b, e) {
			void 0 === e && (e = void 0);
			for (var c = d.length, f = 0; f < c; f++) {
				var l = d[f];
				if (l.listener === a && l.thisObject === b && l.display === e) return d.splice(f, 1), !0
			}
			return !1
		};
		a.prototype.hasEventListener = function(d) {
			return this._eventsMap && this._eventsMap[d] || this._captureEventsMap && this._captureEventsMap[d]
		};
		a.prototype.willTrigger = function(d) {
			return this.hasEventListener(d)
		};
		a.prototype.dispatchEvent = function(d) {
			d._reset();
			d._target = this._eventTarget;
			d._currentTarget = this._eventTarget;
			return this._notifyListener(d)
		};
		a.prototype._notifyListener = function(d) {
			var a = 1 == d._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!a) return !0;
			a = a[d._type];
			if (!a) return !0;
			var b = a.length;
			if (0 == b) return !0;
			for (var a = a.concat(), e = 0; e < b; e++) {
				var c = a[e];
				c.listener.call(c.thisObject, d);
				if (d._isPropagationImmediateStopped) break
			}
			return !d._isDefaultPrevented
		};
		a.prototype.dispatchEventWith = function(d, a, g) {
			void 0 === a && (a = !1);
			b.Event.dispatchEvent(this, d, a, g)
		};
		return a
	}(b.HashObject);
	b.EventDispatcher = c;
	c.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a() {
			e.call(this);
			this.reuseEvent = new b.Event("")
		}
		__extends(a, e);
		a.prototype.run = function() {
			b.Ticker.getInstance().run();
			b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		a.prototype.renderLoop = function(d) {
			if (0 < b.__callLaterFunctionList.length) {
				var h = b.__callLaterFunctionList;
				b.__callLaterFunctionList = [];
				var g = b.__callLaterThisList;
				b.__callLaterThisList = [];
				var e = b.__callLaterArgsList;
				b.__callLaterArgsList = []
			}
			d = this.stage;
			var c = a.cachedEvent;
			c._type = b.Event.RENDER;
			this.dispatchEvent(c);
			b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
			h && this.doCallLaterList(h, g, e);
			0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
			h = this.rendererContext;
			h.onRenderStart();
			h.clearScreen();
			d._updateTransform();
			c._type = b.Event.FINISH_UPDATE_TRANSFORM;
			this.dispatchEvent(c);
			d._draw(h);
			c._type = b.Event.FINISH_RENDER;
			this.dispatchEvent(c);
			h.onRenderFinish()
		};
		a.prototype.broadcastEnterFrame = function(d) {
			d = this.reuseEvent;
			d._type = b.Event.ENTER_FRAME;
			this.dispatchEvent(d);
			for (var a = b.DisplayObject._enterFrameCallBackList.concat(), g = a.length, e = 0; e < g; e++) {
				var c = a[e];
				d._target = c.display;
				d._currentTarget = c.display;
				c.listener.call(c.thisObject, d)
			}
			a = b.Recycler._callBackList;
			for (e = a.length - 1; 0 <= e; e--) a[e]._checkFrame()
		};
		a.prototype.broadcastRender = function() {
			var d = this.reuseEvent;
			d._type = b.Event.RENDER;
			for (var a = b.DisplayObject._renderCallBackList.concat(),
					g = a.length, e = 0; e < g; e++) {
				var c = a[e],
					f = c.display;
				d._target = f;
				d._currentTarget = f;
				c.listener.call(c.thisObject, d)
			}
		};
		a.prototype.doCallLaterList = function(d, a, b) {
			for (var e = d.length, c = 0; c < e; c++) {
				var f = d[c];
				null != f && f.apply(a[c], b[c])
			}
		};
		a.prototype.doCallAsyncList = function() {
			var d = b.__callAsyncFunctionList.concat(),
				a = b.__callAsyncThisList.concat(),
				g = b.__callAsyncArgsList.concat();
			b.__callAsyncFunctionList.length = 0;
			b.__callAsyncThisList.length = 0;
			for (var e = b.__callAsyncArgsList.length = 0; e < d.length; e++) {
				var c =
					d[e];
				null != c && c.apply(a[e], g[e])
			}
		};
		a.DEVICE_PC = "web";
		a.DEVICE_MOBILE = "native";
		a.RUNTIME_HTML5 = "runtime_html5";
		a.RUNTIME_NATIVE = "runtime_native";
		a.cachedEvent = new b.Event("");
		return a
	}(b.EventDispatcher);
	b.MainContext = c;
	c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
		if (!this.navigator) return !0;
		var b = navigator.userAgent.toLowerCase();
		return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
	},
	testRuntimeType = function() {
		return this.navigator ? !0 : !1
	};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(b) {
	var c = function() {
		function e() {
			this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0
		}
		e.getInstance = function() {
			null == e.instance && (e.instance = new e);
			return e.instance
		};
		e.prototype.run = function() {
			b.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, this._txt.multiline = !0, b.MainContext.instance.stage.addChild(this._txt));
			var a = b.MainContext.instance;
			a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
			a.addEventListener(b.Event.RENDER, this.onStartRender, this);
			a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
			a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		e.prototype.onEnterFrame = function(a) {
			this._lastTime = b.getTimer()
		};
		e.prototype.onStartRender = function(a) {
			a = b.getTimer();
			this._logicPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		e.prototype.onFinishUpdateTransform =
			function(a) {
				a = b.getTimer();
				this._updateTransformPerformanceCost = a - this._lastTime;
				this._lastTime = a
			};
		e.prototype.onFinishRender = function(a) {
			a = b.getTimer();
			this._renderPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		e.prototype.update = function(a) {
			this._tick++;
			this._totalDeltaTime += a;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				a = (this._preDrawCount - 1).toString();
				var d = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
					"," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + a + "\ncost:" + d + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		e.prototype.onDrawImage = function() {
			this._preDrawCount++
		};
		return e
	}();
	b.Profiler = c;
	c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a() {
			e.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(a, e);
		a.prototype.run = function() {
			b.__START_TIME = (new Date).getTime();
			b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		a.prototype.update = function(d) {
			var a = this.callBackList.concat(),
				b = a.length;
			d *= this._timeScale;
			d *= this._timeScale;
			for (var e = 0; e < b; e++) {
				var c = a[e];
				c.listener.call(c.thisObject, d)
			}
		};
		a.prototype.register = function(d, a, b) {
			void 0 === b &&
				(b = 0);
			this._insertEventBin(this.callBackList, d, a, b)
		};
		a.prototype.unregister = function(d, a) {
			this._removeEventBin(this.callBackList, d, a)
		};
		a.prototype.setTimeout = function(d, a, g) {
			for (var e = [], c = 3; c < arguments.length; c++) e[c - 3] = arguments[c];
			b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			b.setTimeout.apply(null, [d, a, g].concat(e))
		};
		a.prototype.setTimeScale = function(d) {
			this._timeScale = d
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
	}(b.EventDispatcher);
	b.Ticker = c;
	c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.LEFT = "left";
		b.RIGHT = "right";
		b.CENTER = "center";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	b.HorizontalAlign = c;
	c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.TOP = "top";
		b.BOTTOM = "bottom";
		b.MIDDLE = "middle";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}();
	b.VerticalAlign = c;
	c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a) {
			void 0 === a && (a = 0);
			e.call(this);
			this._currentCount = 0;
			this.delay = d;
			this.repeatCount = a
		}
		__extends(a, e);
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
			this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount =
				0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		a.prototype.stop = function() {
			this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		a.prototype.onEnterFrame = function(d) {
			d = b.getTimer();
			d - this.lastTime > this.delay && (this.lastTime = d, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
		};
		return a
	}(b.EventDispatcher);
	b.Timer = c;
	c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(b) {
	function c(b) {
		b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
		if (b.hasOwnProperty("__class__")) return b.__class__;
		var a = b.constructor.toString(),
			d = a.indexOf("("),
			a = a.substring(9, d);
		Object.defineProperty(b, "__class__", {
			value: a,
			enumerable: !1,
			writable: !0
		});
		return a
	}
	b.getQualifiedClassName = c;
	b.getQualifiedSuperclassName = function(b) {
		b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
		if (b.hasOwnProperty("__superclass__")) return b.__superclass__;
		var a = Object.getPrototypeOf(b);
		if (null == a) return null;
		a = c(a.constructor);
		if (!a) return null;
		Object.defineProperty(b, "__superclass__", {
			value: a,
			enumerable: !1,
			writable: !0
		});
		return a
	}
})(egret || (egret = {}));
(function(b) {
	var c = {};
	b.getDefinitionByName = function(b) {
		if (!b) return null;
		var a = c[b];
		if (a) return a;
		for (var d = b.split("."), h = d.length, a = __global, g = 0; g < h; g++)
			if (a = a[d[g]], !a) return null;
		return c[b] = a
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(b) {
	function c(d) {
		for (var a in e) {
			var b = e[a];
			b.delay -= d;
			0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete e[a])
		}
	}
	var e = {},
		a = 0;
	b.setTimeout = function(d, h, g) {
		for (var m = [], k = 3; k < arguments.length; k++) m[k - 3] = arguments[k];
		m = {
			listener: d,
			thisObject: h,
			delay: g,
			params: m
		};
		0 == a && b.Ticker.getInstance().register(c, null);
		a++;
		e[a] = m;
		return a
	};
	b.clearTimeout = function(d) {
		delete e[d]
	}
})(egret || (egret = {}));
(function(b) {
	b.hasDefinition = function(c) {
		return b.getDefinitionByName(c) ? !0 : !1
	}
})(egret || (egret = {}));
(function(b) {
	b.toColorString = function(b) {
		if (isNaN(b) || 0 > b) b = 0;
		16777215 < b && (b = 16777215);
		for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
		return "#" + b
	}
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a(d, a, b, c, k, f) {
			void 0 === d && (d = 1);
			void 0 === a && (a = 0);
			void 0 === b && (b = 0);
			void 0 === c && (c = 1);
			void 0 === k && (k = 0);
			void 0 === f && (f = 0);
			e.call(this);
			this.a = d;
			this.b = a;
			this.c = b;
			this.d = c;
			this.tx = k;
			this.ty = f
		}
		__extends(a, e);
		a.prototype.prepend = function(d, a, b, e, c, f) {
			var l = this.tx;
			if (1 != d || 0 != a || 0 != b || 1 != e) {
				var n = this.a,
					p = this.c;
				this.a = n * d + this.b * b;
				this.b = n * a + this.b * e;
				this.c = p * d + this.d * b;
				this.d = p * a + this.d * e
			}
			this.tx = l * d + this.ty * b + c;
			this.ty = l * a + this.ty * e + f;
			return this
		};
		a.prototype.append =
			function(d, a, b, e, c, f) {
				var l = this.a,
					n = this.b,
					p = this.c,
					q = this.d;
				if (1 != d || 0 != a || 0 != b || 1 != e) this.a = d * l + a * p, this.b = d * n + a * q, this.c = b * l + e * p, this.d = b * n + e * q;
				this.tx = c * l + f * p + this.tx;
				this.ty = c * n + f * q + this.ty;
				return this
			};
		a.prototype.prependTransform = function(d, a, g, e, c, f, l, n, p) {
			if (c % 360) {
				var q = b.NumberUtils.cos(c);
				c = b.NumberUtils.sin(c)
			} else q = 1, c = 0;
			if (n || p) this.tx -= n, this.ty -= p;
			f || l ? (this.prepend(q * g, c * g, -c * e, q * e, 0, 0), this.prepend(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f),
				d, a)) : this.prepend(q * g, c * g, -c * e, q * e, d, a);
			return this
		};
		a.prototype.appendTransform = function(d, a, g, e, c, f, l, n, p) {
			if (c % 360) {
				var q = b.NumberUtils.cos(c);
				c = b.NumberUtils.sin(c)
			} else q = 1, c = 0;
			f || l ? (this.append(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), d, a), this.append(q * g, c * g, -c * e, q * e, 0, 0)) : this.append(q * g, c * g, -c * e, q * e, d, a);
			if (n || p) this.tx -= n * this.a + p * this.c, this.ty -= n * this.b + p * this.d;
			return this
		};
		a.prototype.rotate = function(d) {
			var a = Math.cos(d);
			d = Math.sin(d);
			var b =
				this.a,
				e = this.c,
				c = this.tx;
			this.a = b * a - this.b * d;
			this.b = b * d + this.b * a;
			this.c = e * a - this.d * d;
			this.d = e * d + this.d * a;
			this.tx = c * a - this.ty * d;
			this.ty = c * d + this.ty * a;
			return this
		};
		a.prototype.skew = function(d, a) {
			this.append(b.NumberUtils.cos(a), b.NumberUtils.sin(a), -b.NumberUtils.sin(d), b.NumberUtils.cos(d), 0, 0);
			return this
		};
		a.prototype.scale = function(d, a) {
			this.a *= d;
			this.d *= a;
			this.c *= d;
			this.b *= a;
			this.tx *= d;
			this.ty *= a;
			return this
		};
		a.prototype.translate = function(d, a) {
			this.tx += d;
			this.ty += a;
			return this
		};
		a.prototype.identity =
			function() {
				this.a = this.d = 1;
				this.b = this.c = this.tx = this.ty = 0;
				return this
			};
		a.prototype.identityMatrix = function(d) {
			this.a = d.a;
			this.b = d.b;
			this.c = d.c;
			this.d = d.d;
			this.tx = d.tx;
			this.ty = d.ty;
			return this
		};
		a.prototype.invert = function() {
			var d = this.a,
				a = this.b,
				b = this.c,
				e = this.d,
				c = this.tx,
				f = d * e - a * b;
			this.a = e / f;
			this.b = -a / f;
			this.c = -b / f;
			this.d = d / f;
			this.tx = (b * this.ty - e * c) / f;
			this.ty = -(d * this.ty - a * c) / f;
			return this
		};
		a.transformCoords = function(d, a, g) {
			var e = b.Point.identity;
			e.x = d.a * a + d.c * g + d.tx;
			e.y = d.d * g + d.b * a + d.ty;
			return e
		};
		a.prototype.toArray = function(d) {
			this.array || (this.array = new Float32Array(9));
			d ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
			this.array[8] = 1;
			return this.array
		};
		a.identity = new a;
		a.DEG_TO_RAD = Math.PI / 180;
		return a
	}(b.HashObject);
	b.Matrix = c;
	c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(d, a) {
			void 0 === d && (d = 0);
			void 0 === a && (a = 0);
			b.call(this);
			this.x = d;
			this.y = a
		}
		__extends(a, b);
		a.prototype.clone = function() {
			return new a(this.x, this.y)
		};
		a.prototype.equals = function(d) {
			return this.x == d.x && this.y == d.y
		};
		a.distance = function(d, a) {
			return Math.sqrt((d.x - a.x) * (d.x - a.x) + (d.y - a.y) * (d.y - a.y))
		};
		a.identity = new a(0, 0);
		return a
	}(b.HashObject);
	b.Point = c;
	c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(d, a, g, c) {
			void 0 === d && (d = 0);
			void 0 === a && (a = 0);
			void 0 === g && (g = 0);
			void 0 === c && (c = 0);
			b.call(this);
			this.x = d;
			this.y = a;
			this.width = g;
			this.height = c
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "right", {
			get: function() {
				return this.x + this.width
			},
			set: function(d) {
				this.width = d - this.x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "bottom", {
			get: function() {
				return this.y + this.height
			},
			set: function(d) {
				this.height = d - this.y
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.initialize = function(d, a, b, e) {
			this.x = d;
			this.y = a;
			this.width = b;
			this.height = e;
			return this
		};
		a.prototype.contains = function(d, a) {
			return this.x <= d && this.x + this.width >= d && this.y <= a && this.y + this.height >= a
		};
		a.prototype.intersects = function(d) {
			var a = d.right,
				b = d.bottom,
				e = this.right,
				c = this.bottom;
			return this.contains(d.x, d.y) || this.contains(d.x, b) || this.contains(a, d.y) || this.contains(a, b) || d.contains(this.x, this.y) || d.contains(this.x, c) || d.contains(e, this.y) || d.contains(e, c) ? !0 : !1
		};
		a.prototype.clone =
			function() {
				return new a(this.x, this.y, this.width, this.height)
			};
		a.prototype.containsPoint = function(d) {
			return this.x < d.x && this.x + this.width > d.x && this.y < d.y && this.y + this.height > d.y ? !0 : !1
		};
		a.identity = new a(0, 0, 0, 0);
		return a
	}(b.HashObject);
	b.Rectangle = c;
	c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function e() {}
		e.fatal = function(a, d) {
			void 0 === d && (d = null);
			b.Logger.traceToConsole("Fatal", a, d);
			throw Error(b.Logger.getTraceCode("Fatal", a, d));
		};
		e.info = function(a, d) {
			void 0 === d && (d = null);
			b.Logger.traceToConsole("Info", a, d)
		};
		e.warning = function(a, d) {
			void 0 === d && (d = null);
			b.Logger.traceToConsole("Warning", a, d)
		};
		e.traceToConsole = function(a, d, h) {
			console.log(b.Logger.getTraceCode(a, d, h))
		};
		e.getTraceCode = function(a, d, h) {
			return "[" + a + "]" + d + ":" + (null == h ? "" : h)
		};
		return e
	}();
	b.Logger =
		c;
	c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(e) {
		function a() {
			e.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(a, e);
		a.getInstance = function() {
			a._instance || (a._instance = new a);
			return a._instance
		};
		a.prototype.parserXML = function(d) {
			for (var a = 0;
				"\n" == d.charAt(a) || "\t" == d.charAt(a) || "\r" == d.charAt(a) || " " == d.charAt(a);) a++;
			0 != a && (d = d.substring(a, d.length));
			this._isSupportDOMParser ?
				a = this._parser.parseFromString(d, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(d));
			null == a && b.Logger.info("xml not found!");
			return a
		};
		a._instance = null;
		return a
	}(b.HashObject);
	b.SAXParser = c;
	c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(d) {
		function h() {
			d.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			this._stageHeight = this._stageWidth = this._offSetY = 0
		}
		__extends(h, d);
		h.getInstance = function() {
			null == h.instance && (a.initialize(), h.instance = new h);
			return h.instance
		};
		h.prototype.setDesignSize = function(d, a, h) {
			this._designWidth = d;
			this._designHeight = a;
			h && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
				this._setResolutionPolicy(h))
		};
		h.prototype._setResolutionPolicy = function(d) {
			this._resolutionPolicy = d;
			d.init(this);
			d._apply(this, this._designWidth, this._designHeight)
		};
		h.prototype.getScaleX = function() {
			return this._scaleX
		};
		h.prototype.getScaleY = function() {
			return this._scaleY
		};
		h.prototype.getOffSetY = function() {
			return this._offSetY
		};
		h.canvas_name = "egretCanvas";
		h.canvas_div_name = "gameDiv";
		return h
	}(b.HashObject);
	b.StageDelegate = c;
	c.prototype.__class__ = "egret.StageDelegate";
	var e = function() {
		function d(a,
			h) {
			this._containerStrategy = a;
			this._contentStrategy = h
		}
		d.prototype.init = function(d) {
			this._containerStrategy.init(d);
			this._contentStrategy.init(d)
		};
		d.prototype._apply = function(d, a, h) {
			this._containerStrategy._apply(d, a, h);
			this._contentStrategy._apply(d, a, h)
		};
		return d
	}();
	b.ResolutionPolicy = e;
	e.prototype.__class__ = "egret.ResolutionPolicy";
	var a = function() {
		function a() {}
		a.initialize = function() {
			a.EQUAL_TO_FRAME = new d
		};
		a.prototype.init = function(d) {};
		a.prototype._apply = function(d, a, h) {};
		a.prototype._setupContainer =
			function() {
				var d = document.body,
					a;
				d && (a = d.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
			};
		return a
	}();
	b.ContainerStrategy = a;
	a.prototype.__class__ = "egret.ContainerStrategy";
	var d = function(d) {
		function a() {
			d.apply(this, arguments)
		}
		__extends(a, d);
		a.prototype._apply = function(d) {
			this._setupContainer()
		};
		return a
	}(a);
	b.EqualToFrame = d;
	d.prototype.__class__ = "egret.EqualToFrame";
	e = function() {
		function d() {}
		d.prototype.init = function(d) {};
		d.prototype._apply = function(d, a, h) {};
		d.prototype.setEgretSize = function(d, a, h, g, e, p) {
			void 0 === p && (p = 0);
			b.StageDelegate.getInstance()._stageWidth = Math.round(d);
			b.StageDelegate.getInstance()._stageHeight =
				Math.round(a);
			d = document.getElementById(c.canvas_div_name);
			d.style.width = h + "px";
			d.style.height = g + "px";
			d.style.top = p + "px"
		};
		d.prototype._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		d.prototype._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return d
	}();
	b.ContentStrategy = e;
	e.prototype.__class__ = "egret.ContentStrategy";
	var h = function(d) {
		function a(h) {
			void 0 === h && (h = 0);
			d.call(this);
			this.minWidth = h
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			a =
				this._getClientWidth();
			var b = this._getClientHeight(),
				g = b / h,
				e = a / g,
				c = 1;
			0 != this.minWidth && (c = Math.min(1, e / this.minWidth));
			this.setEgretSize(e / c, h, a, b * c);
			d._scaleX = g * c;
			d._scaleY = g * c
		};
		return a
	}(e);
	b.FixedHeight = h;
	h.prototype.__class__ = "egret.FixedHeight";
	h = function(d) {
		function a(h) {
			void 0 === h && (h = 0);
			d.call(this);
			this.minHeight = h
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			h = this._getClientWidth();
			var b = this._getClientHeight(),
				g = h / a,
				e = b / g,
				c = 1;
			0 != this.minHeight && (c = Math.min(1, e / this.minHeight));
			this.setEgretSize(a,
				e / c, h * c, b, h * (1 - c) / 2);
			d._scaleX = g * c;
			d._scaleY = g * c
		};
		return a
	}(e);
	b.FixedWidth = h;
	h.prototype.__class__ = "egret.FixedWidth";
	h = function(d) {
		function a(h, b) {
			d.call(this);
			this.width = h;
			this.height = b
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			h = this.width;
			var b = this.height,
				g = h / a;
			this.setEgretSize(a, b / g, h, b);
			d._scaleX = g;
			d._scaleY = g
		};
		return a
	}(e);
	b.FixedSize = h;
	h.prototype.__class__ = "egret.FixedSize";
	h = function(d) {
		function a() {
			d.call(this)
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			this.setEgretSize(a,
				h, a, h, Math.floor((a - a) / 2));
			d._scaleX = 1;
			d._scaleY = 1
		};
		return a
	}(e);
	b.NoScale = h;
	h.prototype.__class__ = "egret.NoScale";
	h = function(d) {
		function a() {
			d.call(this)
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			var b = this._getClientWidth(),
				g = this._getClientHeight(),
				c = b,
				e = g,
				m = c / a < e / h ? c / a : e / h,
				c = a * m,
				e = h * m,
				b = Math.floor((b - c) / 2);
			d._offSetY = Math.floor((g - e) / 2);
			this.setEgretSize(a, h / 1, 1 * c, e, b, d._offSetY);
			d._scaleX = 1 * m;
			d._scaleY = 1 * m
		};
		return a
	}(e);
	b.ShowAll = h;
	h.prototype.__class__ = "egret.ShowAll";
	e = function(d) {
		function a() {
			d.call(this)
		}
		__extends(a, d);
		a.prototype._apply = function(d, a, h) {
			var b = this._getClientWidth(),
				g = this._getClientHeight(),
				b = b / a,
				g = g / h;
			this.setEgretSize(a, h, a * b, h * g);
			d._scaleX = b;
			d._scaleY = g
		};
		return a
	}(e);
	b.FullScreen = e;
	e.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(a, c);
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		a.prototype.addDrawArea = function(d) {
			this._drawAreaList.push(d)
		};
		a.prototype.clearDrawArea = function() {
			this._drawAreaList = []
		};
		a.prototype.drawImage = function(d, a, g, c, e, f, l, n, p, q, r) {
			void 0 === r && (r = void 0);
			l = l || 0;
			n = n || 0;
			var t = a._texture_to_render;
			if (null != t && 0 != f && 0 != e && 0 != p && 0 != q) {
				var s = b.MainContext.instance.rendererContext.texture_scale_factor;
				e /= s;
				f /= s;
				if (0 != this._drawAreaList.length && b.MainContext.instance.rendererContext._cacheCanvasContext) {
					s = b.DisplayObject.getTransformBounds(a._getSize(b.Rectangle.identity), a._worldTransform);
					a._worldBounds.initialize(s.x, s.y, s.width, s.height);
					s = this._originalData;
					s.sourceX = g;
					s.sourceY = c;
					s.sourceWidth = e;
					s.sourceHeight = f;
					s.destX = l;
					s.destY = n;
					s.destWidth = p;
					s.destHeight = q;
					for (var u = this.getDrawAreaList(), v = 0; v < u.length; v++)
						if (!this.ignoreRender(a, u[v], s.destX, s.destY)) {
							d.drawImage(t, g, c, e, f, l, n, p, q, r);
							break
						}
				} else d.drawImage(t, g, c, e, f, l, n, p, q, r)
			}
		};
		a.prototype.ignoreRender = function(d, a, b, c) {
			var e = d._worldBounds;
			b *= d._worldTransform.a;
			c *= d._worldTransform.d;
			return e.x + e.width + b <= a.x || e.x + b >= a.x + a.width || e.y + e.height + c <= a.y || e.y + c >= a.y + a.height ? !0 : !1
		};
		a.prototype.getDrawAreaList = function() {
			var d;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)], b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
				this.onResize, this)), d = this._defaultDrawAreaList) : d = this._drawAreaList;
			return d
		};
		a.prototype.onResize = function() {
			b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
			this._defaultDrawAreaList = null
		};
		return a
	}(b.HashObject);
	b.RenderFilter = c;
	c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function c() {}
		c.mapClass = function(a, d, h) {
			void 0 === h && (h = "");
			a = this.getKey(a) + "#" + h;
			this.mapClassDic[a] = d
		};
		c.getKey = function(a) {
			return "string" == typeof a ? a : b.getQualifiedClassName(a)
		};
		c.mapValue = function(a, d, h) {
			void 0 === h && (h = "");
			a = this.getKey(a) + "#" + h;
			this.mapValueDic[a] = d
		};
		c.hasMapRule = function(a, d) {
			void 0 === d && (d = "");
			var h = this.getKey(a) + "#" + d;
			return this.mapValueDic[h] || this.mapClassDic[h] ? !0 : !1
		};
		c.getInstance = function(a, d) {
			void 0 === d && (d = "");
			var h = this.getKey(a) + "#" +
				d;
			if (this.mapValueDic[h]) return this.mapValueDic[h];
			var b = this.mapClassDic[h];
			if (b) return b = new b, this.mapValueDic[h] = b, delete this.mapClassDic[h], b;
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + h + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		c.mapClassDic = {};
		c.mapValueDic = {};
		return c
	}();
	b.Injector = c;
	c.prototype.__class__ = "egret.Injector"
})(egret ||
	(egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.NORMAL = "normal";
		b.ADD = "add";
		return b
	}();
	b.BlendMode = c;
	c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.__hack_local_matrix = null;
			this._sizeDirty = this._normalDirty = !0;
			this._parent = this._texture_to_render = null;
			this._y = this._x = 0;
			this._scaleY = this._scaleX = 1;
			this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
			this._visible = !0;
			this._rotation = 0;
			this._alpha = 1;
			this._skewY = this._skewX = 0;
			this._touchEnabled = !1;
			this._scrollRect = this.blendMode = null;
			this._hasHeightSet = this._hasWidthSet = !1;
			this._worldBounds = this.mask = null;
			this.worldAlpha =
				1;
			this._rectH = this._rectW = 0;
			this._stage = null;
			this._cacheDirty = this._cacheAsBitmap = !1;
			this._colorTransform = null;
			this._worldTransform = new b.Matrix;
			this._worldBounds = new b.Rectangle(0, 0, 0, 0);
			this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
		}
		__extends(a, c);
		a.prototype._setDirty = function() {
			this._normalDirty = !0
		};
		a.prototype.getDirty = function() {
			return this._normalDirty || this._sizeDirty
		};
		a.prototype._setParentSizeDirty = function() {
			var d = this._parent;
			!d || d._hasWidthSet || d._hasHeightSet || d._setSizeDirty()
		};
		a.prototype._setSizeDirty =
			function() {
				this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
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
		a.prototype._parentChanged = function(d) {
			this._parent = d
		};
		Object.defineProperty(a.prototype, "x", {
			get: function() {
				return this._x
			},
			set: function(d) {
				this._setX(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setX = function(d) {
			b.NumberUtils.isNumber(d) && this._x != d && (this._x = d, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "y", {
			get: function() {
				return this._y
			},
			set: function(d) {
				this._setY(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setY = function(d) {
			b.NumberUtils.isNumber(d) && this._y != d && (this._y = d, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "scaleX", {
			get: function() {
				return this._scaleX
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) &&
					this._scaleX != d && (this._scaleX = d, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scaleY", {
			get: function() {
				return this._scaleY
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._scaleY != d && (this._scaleY = d, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorOffsetX", {
			get: function() {
				return this._anchorOffsetX
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._anchorOffsetX !=
					d && (this._anchorOffsetX = d, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._anchorOffsetY != d && (this._anchorOffsetY = d, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "anchorX", {
			get: function() {
				return this._anchorX
			},
			set: function(d) {
				this._setAnchorX(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setAnchorX = function(d) {
			b.NumberUtils.isNumber(d) && this._anchorX != d && (this._anchorX = d, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "anchorY", {
			get: function() {
				return this._anchorY
			},
			set: function(d) {
				this._setAnchorY(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setAnchorY = function(d) {
			b.NumberUtils.isNumber(d) && this._anchorY != d && (this._anchorY = d, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "visible", {
			get: function() {
				return this._visible
			},
			set: function(d) {
				this._setVisible(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setVisible = function(d) {
			this._visible != d && (this._visible = d, this._setSizeDirty())
		};
		Object.defineProperty(a.prototype, "rotation", {
			get: function() {
				return this._rotation
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._rotation != d && (this._rotation = d, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) &&
					this._alpha != d && (this._alpha = d, this._setDirty(), this._setCacheDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "skewX", {
			get: function() {
				return this._skewX
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._skewX != d && (this._skewX = d, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "skewY", {
			get: function() {
				return this._skewY
			},
			set: function(d) {
				b.NumberUtils.isNumber(d) && this._skewY != d && (this._skewY = d, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "touchEnabled", {
			get: function() {
				return this._touchEnabled
			},
			set: function(d) {
				this._setTouchEnabled(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setTouchEnabled = function(d) {
			this._touchEnabled = d
		};
		Object.defineProperty(a.prototype, "scrollRect", {
			get: function() {
				return this._scrollRect
			},
			set: function(d) {
				this._setScrollRect(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setScrollRect = function(d) {
			this._scrollRect = d;
			this._setSizeDirty()
		};
		Object.defineProperty(a.prototype,
			"measuredWidth", {
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
		Object.defineProperty(a.prototype, "explicitHeight", {
			get: function() {
				return this._explicitHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype,
			"width", {
				get: function() {
					return this._getSize(b.Rectangle.identity).width
				},
				set: function(d) {
					this._setWidth(d)
				},
				enumerable: !0,
				configurable: !0
			});
		Object.defineProperty(a.prototype, "height", {
			get: function() {
				return this._getSize(b.Rectangle.identity).height
			},
			set: function(d) {
				this._setHeight(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setWidth = function(d) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitWidth = d;
			this._hasWidthSet = b.NumberUtils.isNumber(d)
		};
		a.prototype._setHeight = function(d) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitHeight = d;
			this._hasHeightSet = b.NumberUtils.isNumber(d)
		};
		a.prototype._draw = function(d) {
			if (this._visible && !this.drawCacheTexture(d)) {
				this._colorTransform && d.setGlobalColorTransform(this._colorTransform.matrix);
				d.setAlpha(this.worldAlpha, this.blendMode);
				d.setTransform(this._worldTransform);
				var a = this.mask || this._scrollRect;
				a && d.pushMask(a);
				this._render(d);
				a && d.popMask();
				this._colorTransform && d.setGlobalColorTransform(null)
			}
			this.destroyCacheBounds()
		};
		a.prototype.drawCacheTexture =
			function(d) {
				if (!1 == this._cacheAsBitmap) return !1;
				if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight)) this._cacheDirty = !this._makeBitmapCache();
				if (null == this._texture_to_render) return !1;
				var a = this._texture_to_render,
					g = a._offsetX,
					c = a._offsetY,
					e = a._textureWidth,
					a = a._textureHeight;
				this._updateTransform();
				d.setAlpha(this.worldAlpha, this.blendMode);
				d.setTransform(this._worldTransform);
				var f = b.MainContext.instance.rendererContext.texture_scale_factor;
				b.RenderFilter.getInstance().drawImage(d, this, 0, 0, e * f, a * f, g, c, e, a);
				return !0
			};
		a.prototype._updateTransform = function() {
			this._calculateWorldTransform()
		};
		a.prototype._calculateWorldTransform = function() {
			var d = this._worldTransform,
				a = this._parent;
			d.identityMatrix(a._worldTransform);
			this._getMatrix(d);
			var b = this._scrollRect;
			b && d.append(1, 0, 0, 1, -b.x, -b.y);
			this.worldAlpha = a.worldAlpha * this._alpha
		};
		a.prototype._render = function(d) {};
		a.prototype.getBounds =
			function(d, a) {
				void 0 === a && (a = !0);
				var g = this._measureBounds(),
					c = this._hasWidthSet ? this._explicitWidth : g.width,
					e = this._hasHeightSet ? this._explicitHeight : g.height;
				this._rectW = g.width;
				this._rectH = g.height;
				this._clearSizeDirty();
				var f = g.x,
					g = g.y,
					l = 0,
					n = 0;
				a && (0 != this._anchorX || 0 != this._anchorY ? (l = c * this._anchorX, n = e * this._anchorY) : (l = this._anchorOffsetX, n = this._anchorOffsetY));
				this._cacheBounds.initialize(f - l, g - n, c, e);
				c = this._cacheBounds;
				d || (d = new b.Rectangle);
				return d.initialize(c.x, c.y, c.width, c.height)
			};
		a.prototype.destroyCacheBounds = function() {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0
		};
		a.prototype._getConcatenatedMatrix = function() {
			for (var d = a.identityMatrixForGetConcatenated.identity(), h = this; null != h;) {
				if (0 != h._anchorX || 0 != h._anchorY) {
					var g = h._getSize(b.Rectangle.identity);
					d.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, g.width * h._anchorX, g.height * h._anchorY)
				} else d.prependTransform(h._x, h._y, h._scaleX, h._scaleY,
					h._rotation, h._skewX, h._skewY, h._anchorOffsetX, h._anchorOffsetY);
				h._scrollRect && d.prepend(1, 0, 0, 1, -h._scrollRect.x, -h._scrollRect.y);
				h = h._parent
			}
			return d
		};
		a.prototype.localToGlobal = function(d, a, g) {
			void 0 === d && (d = 0);
			void 0 === a && (a = 0);
			var c = this._getConcatenatedMatrix();
			c.append(1, 0, 0, 1, d, a);
			g || (g = new b.Point);
			g.x = c.tx;
			g.y = c.ty;
			return g
		};
		a.prototype.globalToLocal = function(d, a, g) {
			void 0 === d && (d = 0);
			void 0 === a && (a = 0);
			var c = this._getConcatenatedMatrix();
			c.invert();
			c.append(1, 0, 0, 1, d, a);
			g || (g = new b.Point);
			g.x = c.tx;
			g.y = c.ty;
			return g
		};
		a.prototype.hitTest = function(d, a, g) {
			void 0 === g && (g = !1);
			if (!this._visible || !g && !this._touchEnabled) return null;
			g = this._getSize(b.Rectangle.identity);
			return 0 <= d && d < g.width && 0 <= a && a < g.height ? this.mask || this._scrollRect ? this._scrollRect && d > this._scrollRect.x && a > this._scrollRect.y && d < this._scrollRect.x + this._scrollRect.width && a < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= d && d < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ?
				this : null : this : null
		};
		a.prototype.hitTestPoint = function(d, a, g) {
			d = this.globalToLocal(d, a);
			return g ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), g = this._hitTestPointTexture, g.drawToTexture(this), 0 != g.getPixel32(d.x - this._hitTestPointTexture._offsetX, d.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(d.x, d.y, !0)
		};
		a.prototype._getMatrix = function(d) {
			d || (d = b.Matrix.identity.identity());
			var a, g;
			g = this._getOffsetPoint();
			a = g.x;
			g = g.y;
			var c = this.__hack_local_matrix;
			c ? (d.append(c.a, c.b, c.c, c.d, c.tx, c.ty), d.append(1, 0, 0, 1, -a, -g)) : d.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a, g);
			return d
		};
		a.prototype._getSize = function(d) {
			return this._hasHeightSet && this._hasWidthSet ? d.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(d)
		};
		a.prototype._measureSize = function(d) {
			this._sizeDirty ? (d = this._measureBounds(), this._rectW = d.width, this._rectH = d.height, this._clearSizeDirty()) : (d.width = this._rectW,
				d.height = this._rectH);
			d.x = 0;
			d.y = 0;
			return d
		};
		a.prototype._measureBounds = function() {
			return b.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		a.prototype._getOffsetPoint = function() {
			var d = this._anchorOffsetX,
				a = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity), d = this._anchorX * a.width, a = this._anchorY * a.height;
			var g = b.Point.identity;
			g.x = d;
			g.y = a;
			return g
		};
		a.prototype._onAddToStage = function() {
			this._stage = b.MainContext.instance.stage;
			b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		a.prototype._onRemoveFromStage = function() {
			b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(a.prototype, "stage", {
			get: function() {
				return this._stage
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.addEventListener = function(d, h, g, m, k) {
			void 0 === m && (m = !1);
			void 0 === k && (k = 0);
			c.prototype.addEventListener.call(this, d, h, g, m, k);
			((m = d == b.Event.ENTER_FRAME) || d == b.Event.RENDER) && this._insertEventBin(m ? a._enterFrameCallBackList : a._renderCallBackList, h, g, k, this)
		};
		a.prototype.removeEventListener =
			function(d, h, g, m) {
				void 0 === m && (m = !1);
				c.prototype.removeEventListener.call(this, d, h, g, m);
				((m = d == b.Event.ENTER_FRAME) || d == b.Event.RENDER) && this._removeEventBin(m ? a._enterFrameCallBackList : a._renderCallBackList, h, g, this)
			};
		a.prototype.dispatchEvent = function(d) {
			if (!d._bubbles) return c.prototype.dispatchEvent.call(this, d);
			for (var a = [], b = this; b;) a.push(b), b = b._parent;
			d._reset();
			this._dispatchPropagationEvent(d, a);
			return !d._isDefaultPrevented
		};
		a.prototype._dispatchPropagationEvent = function(d, a, b) {
			b = a.length;
			for (var c = 1, e = b - 1; 0 <= e; e--) {
				var f = a[e];
				d._currentTarget = f;
				d._target = this;
				d._eventPhase = c;
				f._notifyListener(d);
				if (d._isPropagationStopped || d._isPropagationImmediateStopped) return
			}
			f = a[0];
			d._currentTarget = f;
			d._target = this;
			d._eventPhase = 2;
			f._notifyListener(d);
			if (!d._isPropagationStopped && !d._isPropagationImmediateStopped)
				for (c = 3, e = 1; e < b && (f = a[e], d._currentTarget = f, d._target = this, d._eventPhase = c, f._notifyListener(d), !d._isPropagationStopped && !d._isPropagationImmediateStopped); e++);
		};
		a.prototype.willTrigger =
			function(d) {
				for (var a = this; a;) {
					if (a.hasEventListener(d)) return !0;
					a = a._parent
				}
				return !1
			};
		Object.defineProperty(a.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap
			},
			set: function(d) {
				(this._cacheAsBitmap = d) ? b.callLater(this._makeBitmapCache, this): this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._makeBitmapCache = function() {
			this.renderTexture || (this.renderTexture = new b.RenderTexture);
			var d = this.renderTexture.drawToTexture(this);
			this._texture_to_render = d ? this.renderTexture :
				null;
			return d
		};
		a.prototype._setCacheDirty = function(d) {
			void 0 === d && (d = !0);
			this._cacheDirty = d
		};
		a.getTransformBounds = function(d, a) {
			var b = d.x,
				c = d.y,
				e = d.width,
				f = d.height;
			(b || c) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
			var l = e * a.a,
				e = e * a.b,
				n = f * a.c,
				f = f * a.d,
				p = a.tx,
				q = a.ty,
				r = p,
				t = p,
				s = q,
				u = q;
			(b = l + p) < r ? r = b : b > t && (t = b);
			(b = l + n + p) < r ? r = b : b > t && (t = b);
			(b = n + p) < r ? r = b : b > t && (t = b);
			(c = e + q) < s ? s = c : c > u && (u = c);
			(c = e + f + q) < s ? s = c : c > u && (u = c);
			(c = f + q) < s ? s = c : c > u && (u = c);
			return d.initialize(r, s, t - r, u - s)
		};
		Object.defineProperty(a.prototype, "colorTransform", {
			get: function() {
				return this._colorTransform
			},
			set: function(d) {
				this._colorTransform = d
			},
			enumerable: !0,
			configurable: !0
		});
		a.identityMatrixForGetConcatenated = new b.Matrix;
		a._enterFrameCallBackList = [];
		a._renderCallBackList = [];
		return a
	}(b.EventDispatcher);
	b.DisplayObject = c;
	c.prototype.__class__ = "egret.DisplayObject";
	c = function() {
		function b() {
			this.matrix = null
		}
		b.prototype.updateColor = function(a, d, b, g, c, e, f, l) {};
		return b
	}();
	b.ColorTransform = c;
	c.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(a, c);
		Object.defineProperty(a.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(d) {
				this._touchChildren = d
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
		a.prototype.setChildIndex = function(d, a) {
			this.doSetChildIndex(d, a)
		};
		a.prototype.doSetChildIndex = function(d,
			a) {
			var g = this._children.indexOf(d);
			0 > g && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(g, 1);
			0 > a || this._children.length <= a ? this._children.push(d) : this._children.splice(a, 0, d)
		};
		a.prototype.addChild = function(d) {
			var a = this._children.length;
			d._parent == this && a--;
			return this._doAddChild(d, a)
		};
		a.prototype.addChildAt = function(d, a) {
			return this._doAddChild(d, a)
		};
		a.prototype._doAddChild = function(d, h, g) {
			void 0 === g && (g = !0);
			if (d == this) return d;
			if (0 > h || h > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
				d;
			var c = d._parent;
			if (c == this) return this.doSetChildIndex(d, h), d;
			c && (h = c._children.indexOf(d), 0 <= h && c._doRemoveChild(h));
			this._children.splice(h, 0, d);
			d._parentChanged(this);
			g && d.dispatchEventWith(b.Event.ADDED, !0);
			if (this._stage)
				for (d._onAddToStage(), h = a.__EVENT__ADD_TO_STAGE_LIST; 0 < h.length;) h.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
			d._setDirty();
			this._setSizeDirty();
			return d
		};
		a.prototype.removeChild = function(d) {
			d = this._children.indexOf(d);
			if (0 <= d) return this._doRemoveChild(d);
			b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null
		};
		a.prototype.removeChildAt = function(d) {
			if (0 <= d && d < this._children.length) return this._doRemoveChild(d);
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype._doRemoveChild = function(d, h) {
			void 0 === h && (h = !0);
			var g = this._children,
				c = g[d];
			h && c.dispatchEventWith(b.Event.REMOVED, !0);
			if (this._stage) {
				c._onRemoveFromStage();
				for (var e = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < e.length;) {
					var f = e.shift();
					f.dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
					f._stage = null
				}
			}
			c._parentChanged(null);
			g.splice(d, 1);
			this._setSizeDirty();
			return c
		};
		a.prototype.getChildAt = function(d) {
			if (0 <= d && d < this._children.length) return this._children[d];
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype.contains = function(d) {
			for (; d;) {
				if (d == this) return !0;
				d = d._parent
			}
			return !1
		};
		a.prototype.swapChildrenAt = function(d, a) {
			0 <= d && d < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(d, a) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
		};
		a.prototype.swapChildren = function(d, a) {
			var g = this._children.indexOf(d),
				c = this._children.indexOf(a); - 1 == g || -1 == c ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(g, c)
		};
		a.prototype._swapChildrenAt = function(d, a) {
			if (d != a) {
				var b = this._children,
					c = b[d];
				b[d] = b[a];
				b[a] = c
			}
		};
		a.prototype.getChildIndex = function(d) {
			return this._children.indexOf(d)
		};
		a.prototype.removeChildren = function() {
			for (var d = this._children.length - 1; 0 <= d; d--) this._doRemoveChild(d)
		};
		a.prototype._updateTransform =
			function() {
				if (this._visible) {
					c.prototype._updateTransform.call(this);
					for (var d = 0, a = this._children.length; d < a; d++) this._children[d]._updateTransform()
				}
			};
		a.prototype._render = function(d) {
			for (var a = 0, b = this._children.length; a < b; a++) this._children[a]._draw(d)
		};
		a.prototype._measureBounds = function() {
			for (var d = 0, a = 0, g = 0, c = 0, e = this._children.length, f = 0; f < e; f++) {
				var l = this._children[f];
				if (l._visible) {
					var n = l.getBounds(b.Rectangle.identity, !1),
						p = n.x,
						q = n.y,
						r = n.width,
						n = n.height,
						l = l._getMatrix(),
						l = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p,
							q, r, n), l),
						p = l.x,
						q = l.y,
						r = l.width + l.x,
						l = l.height + l.y;
					if (p < d || 0 == f) d = p;
					if (r > a || 0 == f) a = r;
					if (q < g || 0 == f) g = q;
					if (l > c || 0 == f) c = l
				}
			}
			return b.Rectangle.identity.initialize(d, g, a - d, c - g)
		};
		a.prototype.hitTest = function(d, a, g) {
			void 0 === g && (g = !1);
			var m;
			if (!this._visible) return null;
			if (this._scrollRect) {
				if (d < this._scrollRect.x || a < this._scrollRect.y || d > this._scrollRect.x + this._scrollRect.width || a > this._scrollRect.y + this._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > d || d > this.mask.x + this.mask.width || this.mask.y >
					a || a > this.mask.y + this.mask.height)) return null;
			for (var k = this._children, f = this._touchChildren, l = k.length - 1; 0 <= l; l--) {
				var n = k[l],
					p = n._getMatrix(),
					q = n._scrollRect;
				q && p.append(1, 0, 0, 1, -q.x, -q.y);
				p.invert();
				p = b.Matrix.transformCoords(p, d, a);
				if (n = n.hitTest(p.x, p.y, !0)) {
					if (!f) return this;
					if (n._touchEnabled && f) return n;
					m = this
				}
			}
			return m ? m : this._texture_to_render || this.graphics ? c.prototype.hitTest.call(this, d, a, g) : null
		};
		a.prototype._onAddToStage = function() {
			c.prototype._onAddToStage.call(this);
			for (var d = this._children.length,
					a = 0; a < d; a++) this._children[a]._onAddToStage()
		};
		a.prototype._onRemoveFromStage = function() {
			c.prototype._onRemoveFromStage.call(this);
			for (var d = this._children.length, a = 0; a < d; a++) this._children[a]._onRemoveFromStage()
		};
		a.prototype.getChildByName = function(d) {
			for (var a = this._children, b = a.length, c, e = 0; e < b; e++)
				if (c = a[e], c.name == d) return c;
			return null
		};
		a.__EVENT__ADD_TO_STAGE_LIST = [];
		a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return a
	}(b.DisplayObject);
	b.DisplayObjectContainer = c;
	c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(d, a) {
			void 0 === d && (d = 480);
			void 0 === a && (a = 800);
			c.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = d;
			this._stageHeight = a
		}
		__extends(a, c);
		a.prototype.invalidate = function() {
			a._invalidateRenderFlag = !0
		};
		Object.defineProperty(a.prototype, "scaleMode", {
			get: function() {
				return this._scaleMode
			},
			set: function(d) {
				this._scaleMode != d && (this._scaleMode = d, this.setResolutionPolicy())
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.changeSize = function() {
			this.setResolutionPolicy();
			this.dispatchEventWith(b.Event.RESIZE)
		};
		a.prototype.setResolutionPolicy = function() {
			var d = {};
			d[b.StageScaleMode.NO_SCALE] = new b.NoScale;
			d[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
			d[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
			d[b.StageScaleMode.EXACT_FIT] = new b.FullScreen;
			d = d[this._scaleMode];
			if (!d) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
			var a = new b.EqualToFrame,
				d = new b.ResolutionPolicy(a, d);
			b.StageDelegate.getInstance()._setResolutionPolicy(d);
			this._stageWidth = b.StageDelegate.getInstance()._stageWidth;
			this._stageHeight = b.StageDelegate.getInstance()._stageHeight
		};
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
		a.prototype.hitTest = function(d, a, g) {
			if (!this._touchEnabled) return null;
			var c;
			if (!this._touchChildren) return this;
			g = this._children;
			for (var e = g.length - 1; 0 <= e; e--) {
				c = g[e];
				var f = c._getMatrix(),
					l = c._scrollRect;
				l && f.append(1, 0, 0, 1, -l.x, -l.y);
				f.invert();
				f = b.Matrix.transformCoords(f, d, a);
				if ((c = c.hitTest(f.x, f.y, !0)) && c._touchEnabled) return c
			}
			return this
		};
		a.prototype.getBounds = function(d) {
			d || (d = new b.Rectangle);
			return d.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		a.prototype._updateTransform = function() {
			for (var d = 0, a = this._children.length; d < a; d++) this._children[d]._updateTransform()
		};
		Object.defineProperty(a.prototype, "focus", {
			get: function() {
				return null
			},
			enumerable: !0,
			configurable: !0
		});
		a._invalidateRenderFlag = !1;
		return a
	}(b.DisplayObjectContainer);
	b.Stage = c;
	c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.NO_BORDER = "noBorder";
		b.NO_SCALE = "noScale";
		b.SHOW_ALL = "showAll";
		b.EXACT_FIT = "exactFit";
		return b
	}();
	b.StageScaleMode = c;
	c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(d) {
			void 0 === d && (d = null);
			c.call(this);
			this._lastTouchPosition = new b.Point(0, 0);
			this._lastTouchTime = 0;
			this._lastTouchEvent = null;
			this._velocitys = [];
			this._content = null;
			this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
			this._scrollTop = this._scrollLeft = 0;
			this._vCanScroll = this._hCanScroll = !1;
			this.touchEnabled = !0;
			d && this.setContent(d)
		}
		__extends(a, c);
		a.prototype.setContent = function(d) {
			this._content !== d && (this.removeContent(), d && (this._content = d, c.prototype.addChild.call(this,
				d), this._addEvents()))
		};
		a.prototype.removeContent = function() {
			this._content && (this._removeEvents(), c.prototype.removeChildAt.call(this, 0));
			this._content = null
		};
		Object.defineProperty(a.prototype, "verticalScrollPolicy", {
			get: function() {
				return this._verticalScrollPolicy
			},
			set: function(d) {
				d != this._verticalScrollPolicy && (this._verticalScrollPolicy = d)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "horizontalScrollPolicy", {
			get: function() {
				return this._horizontalScrollPolicy
			},
			set: function(d) {
				d !=
					this._horizontalScrollPolicy && (this._horizontalScrollPolicy = d)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scrollLeft", {
			get: function() {
				return this._scrollLeft
			},
			set: function(d) {
				d != this._scrollLeft && (this._scrollLeft = d, this._validatePosition(!1, !0), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "scrollTop", {
			get: function() {
				return this._scrollTop
			},
			set: function(d) {
				d != this._scrollTop && (this._scrollTop = d, this._validatePosition(!0, !1), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.setScrollPosition = function(d, a, b) {
			void 0 === b && (b = !1);
			if (!b || 0 != d || 0 != a)
				if (b || this._scrollTop != d || this._scrollLeft != a) {
					if (b) {
						b = this._isOnTheEdge(!0);
						var c = this._isOnTheEdge(!1);
						this._scrollTop += b ? d / 2 : d;
						this._scrollLeft += c ? a / 2 : a
					} else this._scrollTop = d, this._scrollLeft = a;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
		};
		a.prototype._isOnTheEdge = function(d) {
			void 0 === d && (d = !0);
			var a = this._scrollTop,
				b = this._scrollLeft;
			return d ? 0 > a || a > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
		};
		a.prototype._validatePosition = function(d, a) {
			void 0 === d && (d = !1);
			void 0 === a && (a = !1);
			if (d) {
				var b = this.height,
					c = this._getContentHeight();
				this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
				this._scrollTop = Math.min(this._scrollTop, c > b ? c - b / 2 : c / 2)
			}
			a && (b = this.width, c = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, c > b ? c - b / 2 : c / 2))
		};
		a.prototype._setWidth = function(d) {
			this._explicitWidth !=
				d && (c.prototype._setWidth.call(this, d), this._updateContentPosition())
		};
		a.prototype._setHeight = function(d) {
			this._explicitHeight != d && (c.prototype._setHeight.call(this, d), this._updateContentPosition())
		};
		a.prototype._updateContentPosition = function() {
			var d = this.getBounds(b.Rectangle.identity);
			this.scrollRect = new b.Rectangle(this._scrollLeft, this._scrollTop, d.width, d.height);
			this.dispatchEvent(new b.Event(b.Event.CHANGE))
		};
		a.prototype._checkScrollPolicy = function() {
			var d = this.__checkScrollPolicy(this._horizontalScrollPolicy,
				this._getContentWidth(), this.width);
			this._hCanScroll = d;
			var a = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
			this._vCanScroll = a;
			return d || a
		};
		a.prototype.__checkScrollPolicy = function(d, a, b) {
			return "on" == d ? !0 : "off" == d ? !1 : a > b
		};
		a.prototype._addEvents = function() {
			this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture,
				this, !0)
		};
		a.prototype._removeEvents = function() {
			this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		a.prototype._onTouchBegin = function(d) {
			!d._isDefaultPrevented && this._checkScrollPolicy() && (b.Tween.removeTweens(this), this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(b.TouchEvent.TOUCH_END,
				this._onTouchEnd, this), this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(d), d.preventDefault())
		};
		a.prototype._onTouchBeginCapture = function(d) {
			var h = this._checkScrollPolicy();
			if (h) {
				for (var c = d.target; c != this;) {
					if (c instanceof a && (h = c._checkScrollPolicy())) return;
					c = c.parent
				}
				d.stopPropagation();
				this.delayTouchBeginEvent = this.cloneTouchEvent(d);
				this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100,
					1), this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
				this.touchBeginTimer.start();
				this._onTouchBegin(d)
			}
		};
		a.prototype._onTouchEndCapture = function(d) {
			this.delayTouchBeginEvent && this._onTouchBeginTimer()
		};
		a.prototype._onTouchBeginTimer = function() {
			this.touchBeginTimer.stop();
			var d = this.delayTouchBeginEvent;
			this.delayTouchBeginEvent = null;
			this.dispatchPropagationEvent(d)
		};
		a.prototype.dispatchPropagationEvent = function(d) {
			for (var a = [], b = d._target; b;) a.push(b),
				b = b.parent;
			for (var c = this._content, e = 1;; e += 2) {
				b = a[e];
				if (!b || b === c) break;
				a.unshift(b)
			}
			this._dispatchPropagationEvent(d, a)
		};
		a.prototype._dispatchPropagationEvent = function(d, a, b) {
			for (var c = a.length, e = 0; e < c; e++) {
				var f = a[e];
				d._currentTarget = f;
				d._target = this;
				d._eventPhase = e < b ? 1 : e == b ? 2 : 3;
				f._notifyListener(d);
				if (d._isPropagationStopped || d._isPropagationImmediateStopped) break
			}
		};
		a.prototype._onTouchMove = function(d) {
			if (this._lastTouchPosition.x != d.stageX || this._lastTouchPosition.y != d.stageY) {
				this.delayTouchBeginEvent &&
					(this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				this.touchChildren = !1;
				var a = this._getPointChange(d);
				this.setScrollPosition(a.y, a.x, !0);
				this._calcVelocitys(d);
				this._logTouchEvent(d)
			}
		};
		a.prototype._onTouchEnd = function(d) {
			this.touchChildren = !0;
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE,
				this._onTouchEnd, this);
			this.removeEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this);
			this._moveAfterTouchEnd()
		};
		a.prototype._onEnterFrame = function(d) {
			d = b.getTimer();
			100 < d - this._lastTouchTime && 300 > d - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
		};
		a.prototype._logTouchEvent = function(d) {
			this._lastTouchPosition.x = d.stageX;
			this._lastTouchPosition.y = d.stageY;
			this._lastTouchEvent = this.cloneTouchEvent(d);
			this._lastTouchTime = b.getTimer()
		};
		a.prototype._getPointChange = function(d) {
			return {
				x: !1 ===
					this._hCanScroll ? 0 : this._lastTouchPosition.x - d.stageX,
				y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - d.stageY
			}
		};
		a.prototype._calcVelocitys = function(d) {
			var a = b.getTimer();
			if (0 == this._lastTouchTime) this._lastTouchTime = a;
			else {
				var c = this._getPointChange(d),
					a = a - this._lastTouchTime;
				c.x /= a;
				c.y /= a;
				this._velocitys.push(c);
				5 < this._velocitys.length && this._velocitys.shift();
				this._lastTouchPosition.x = d.stageX;
				this._lastTouchPosition.y = d.stageY
			}
		};
		a.prototype._getContentWidth = function() {
			return this._content.explicitWidth ||
				this._content.width
		};
		a.prototype._getContentHeight = function() {
			return this._content.explicitHeight || this._content.height
		};
		a.prototype.getMaxScrollLeft = function() {
			var d = this._getContentWidth() - this.width;
			return Math.max(0, d)
		};
		a.prototype.getMaxScrollTop = function() {
			var d = this._getContentHeight() - this.height;
			return Math.max(0, d)
		};
		a.prototype._moveAfterTouchEnd = function() {
			if (0 != this._velocitys.length) {
				for (var d = 0, b = 0, c = 0, e = 0; e < this._velocitys.length; e++) var k = this._velocitys[e],
					f = a.weight[e],
					d = d + k.x * f,
					b = b + k.y * f,
					c = c + f;
				this._velocitys.length = 0;
				d /= c;
				b /= c;
				k = Math.abs(d);
				c = Math.abs(b);
				f = this.getMaxScrollLeft();
				e = this.getMaxScrollTop();
				d = 0.02 < k ? this.getAnimationDatas(d, this._scrollLeft, f) : {
					position: this._scrollLeft,
					duration: 1
				};
				b = 0.02 < c ? this.getAnimationDatas(b, this._scrollTop, e) : {
					position: this._scrollTop,
					duration: 1
				};
				this.setScrollLeft(d.position, d.duration);
				this.setScrollTop(b.position, b.duration)
			}
		};
		a.prototype.setScrollTop = function(d, a) {
			void 0 === a && (a = 0);
			var c = Math.min(this.getMaxScrollTop(), Math.max(d,
				0));
			if (0 == a) return this.scrollTop = c, null;
			var e = b.Tween.get(this).to({
				scrollTop: d
			}, a, b.Ease.quartOut);
			c != d && e.to({
				scrollTop: c
			}, 300, b.Ease.quintOut)
		};
		a.prototype.setScrollLeft = function(d, a) {
			void 0 === a && (a = 0);
			var c = Math.min(this.getMaxScrollLeft(), Math.max(d, 0));
			if (0 == a) return this.scrollLeft = c, null;
			var e = b.Tween.get(this).to({
				scrollLeft: d
			}, a, b.Ease.quartOut);
			c != d && e.to({
				scrollLeft: c
			}, 300, b.Ease.quintOut)
		};
		a.prototype.getAnimationDatas = function(d, a, b) {
			var c = Math.abs(d),
				e = 0,
				f = a + 500 * d;
			if (0 > f || f > b)
				for (f =
					a; Infinity != Math.abs(d) && 0.02 < Math.abs(d);) f += d, d = 0 > f || f > b ? 0.998 * d * 0.95 : 0.998 * d, e++;
			else e = 500 * -Math.log(0.02 / c);
			return {
				position: Math.min(b + 50, Math.max(f, -50)),
				duration: e
			}
		};
		a.prototype.cloneTouchEvent = function(d) {
			var a = new b.TouchEvent(d._type, d._bubbles, d.cancelable);
			a.touchPointID = d.touchPointID;
			a._stageX = d._stageX;
			a._stageY = d._stageY;
			a.ctrlKey = d.ctrlKey;
			a.altKey = d.altKey;
			a.shiftKey = d.shiftKey;
			a.touchDown = d.touchDown;
			a._isDefaultPrevented = !1;
			a._target = d._target;
			return a
		};
		a.prototype.throwNotSupportedError =
			function() {
				throw Error("\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!");
			};
		a.prototype.addChild = function(d) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.addChildAt = function(d, a) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.removeChild = function(d) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.removeChildAt = function(d) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.setChildIndex = function(d, a) {
			this.throwNotSupportedError()
		};
		a.prototype.swapChildren = function(d,
			a) {
			this.throwNotSupportedError()
		};
		a.prototype.swapChildrenAt = function(d, a) {
			this.throwNotSupportedError()
		};
		a.prototype.hitTest = function(d, a, g) {
			void 0 === g && (g = !1);
			var m = c.prototype.hitTest.call(this, d, a, g);
			return m ? m : b.DisplayObject.prototype.hitTest.call(this, d, a, g)
		};
		a.weight = [1, 1.33, 1.66, 2, 2.33];
		return a
	}(b.DisplayObjectContainer);
	b.ScrollView = c;
	c.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.REPEAT = "repeat";
		b.SCALE = "scale";
		return b
	}();
	b.BitmapFillMode = c;
	c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(d) {
			c.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.scale9Grid = null;
			this.fillMode = "scale";
			d && (this._texture = d, this._setSizeDirty())
		}
		__extends(a, c);
		Object.defineProperty(a.prototype, "texture", {
			get: function() {
				return this._texture
			},
			set: function(d) {
				d != this._texture && (this._setSizeDirty(), this._texture = d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(d) {
			var b = this._texture;
			b ? (this._texture_to_render = b, a._drawBitmap(d, this._hasWidthSet ? this._explicitWidth :
				b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
		};
		a._drawBitmap = function(d, b, c, e) {
			var k = e._texture_to_render;
			if (k) {
				var f = k._textureWidth,
					l = k._textureHeight;
				if ("scale" == e.fillMode) {
					var n = e.scale9Grid || k.scale9Grid;
					if (n && f - n.width < b && l - n.height < c) a.drawScale9GridImage(d, e, n, b, c);
					else {
						var n = k._offsetX,
							p = k._offsetY,
							q = k._bitmapWidth || f,
							r = k._bitmapHeight || l;
						b /= f;
						n = Math.round(n * b);
						b = Math.round(q * b);
						c /= l;
						p = Math.round(p * c);
						c = Math.round(r * c);
						a.renderFilter.drawImage(d,
							e, k._bitmapX, k._bitmapY, q, r, n, p, b, c)
					}
				} else a.drawRepeatImage(d, e, b, c, e.fillMode)
			}
		};
		a.drawRepeatImage = function(d, a, c, e, k) {
			var f = a._texture_to_render;
			if (f) {
				var l = f._textureWidth,
					n = f._textureHeight,
					p = f._bitmapX,
					q = f._bitmapY,
					l = f._bitmapWidth || l,
					n = f._bitmapHeight || n,
					r = f._offsetX,
					f = f._offsetY;
				b.RenderFilter.getInstance().drawImage(d, a, p, q, l, n, r, f, c, e, k)
			}
		};
		a.drawScale9GridImage = function(d, a, c, e, k) {
			var f = a._texture_to_render;
			if (f && c) {
				var l = b.RenderFilter.getInstance(),
					n = f._textureWidth,
					p = f._textureHeight,
					q = f._bitmapX,
					r = f._bitmapY,
					t = f._bitmapWidth || n,
					s = f._bitmapHeight || p,
					u = f._offsetX,
					v = f._offsetY,
					f = b.MainContext.instance.rendererContext.texture_scale_factor;
				c = b.Rectangle.identity.initialize(c.x - Math.round(u), c.y - Math.round(u), c.width, c.height);
				u = Math.round(u);
				v = Math.round(v);
				e -= n - t;
				k -= p - s;
				c.y == c.bottom && (c.bottom < s ? c.bottom++ : c.y--);
				c.x == c.right && (c.right < t ? c.right++ : c.x--);
				var n = q + c.x,
					p = q + c.right,
					x = t - c.right,
					y = r + c.y,
					w = r + c.bottom,
					z = s - c.bottom,
					A = u + c.x,
					B = v + c.y,
					s = k - (s - c.bottom),
					t = e - (t - c.right);
				l.drawImage(d,
					a, q / f, r / f, c.x, c.y, u, v, c.x, c.y);
				l.drawImage(d, a, n / f, r / f, c.width, c.y, A, v, t - c.x, c.y);
				l.drawImage(d, a, p / f, r / f, x, c.y, u + t, v, e - t, c.y);
				l.drawImage(d, a, q / f, y / f, c.x, c.height, u, B, c.x, s - c.y);
				l.drawImage(d, a, n / f, y / f, c.width, c.height, A, B, t - c.x, s - c.y);
				l.drawImage(d, a, p / f, y / f, x, c.height, u + t, B, e - t, s - c.y);
				l.drawImage(d, a, q / f, w / f, c.x, z, u, v + s, c.x, k - s);
				l.drawImage(d, a, n / f, w / f, c.width, z, A, v + s, t - c.x, k - s);
				l.drawImage(d, a, p / f, w / f, x, z, u + t, v + s, e - t, k - s)
			}
		};
		a.prototype._measureBounds = function() {
			var d = this._texture;
			return d ? b.Rectangle.identity.initialize(d._offsetX,
				d._offsetY, d._textureWidth, d._textureHeight) : c.prototype._measureBounds.call(this)
		};
		a.debug = !1;
		a.renderFilter = b.RenderFilter.getInstance();
		return a
	}(b.DisplayObject);
	b.Bitmap = c;
	c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._text = "";
			this._textChanged = !1;
			this._spriteSheet = null;
			this._spriteSheetChanged = !1;
			this._bitmapPool = []
		}
		__extends(a, c);
		Object.defineProperty(a.prototype, "text", {
			get: function() {
				return this._text
			},
			set: function(d) {
				this._textChanged = !0;
				this._text = d;
				this._setSizeDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "spriteSheet", {
			get: function() {
				return this._spriteSheet
			},
			set: function(d) {
				this._spriteSheet != d && (this._spriteSheet =
					d, this._spriteSheetChanged = !0, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._updateTransform = function() {
			this.visible && ((this._textChanged || this._spriteSheetChanged) && this._renderText(), c.prototype._updateTransform.call(this))
		};
		a.prototype._renderText = function(d) {
			var a = d = 0;
			(this._textChanged || this._spriteSheetChanged) && this.removeChildren();
			for (var c = 0, e = this.text.length; c < e; c++) {
				var k = this.text.charAt(c),
					f = this.spriteSheet.getTexture(k);
				if (null == f) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" +
					k);
				else {
					var k = f._offsetX,
						l = f._offsetY,
						n = f._textureWidth;
					if (this._textChanged || this._spriteSheetChanged) {
						var p = this._bitmapPool[c];
						p || (p = new b.Bitmap, this._bitmapPool.push(p));
						p.texture = f;
						this.addChild(p);
						p.x = d
					}
					d += n + k;
					l + f._textureHeight > a && (a = l + f._textureHeight)
				}
			}
			this._spriteSheetChanged = this._textChanged = !1;
			return b.Rectangle.identity.initialize(0, 0, d, a)
		};
		a.prototype._measureBounds = function() {
			return this._renderText(!0)
		};
		return a
	}(b.DisplayObjectContainer);
	b.BitmapText = c;
	c.prototype.__class__ = "egret.BitmapText"
})(egret ||
	(egret = {}));
(function(b) {
	var c = function() {
		function b() {
			this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
			this.commandQueue = []
		}
		b.prototype.beginFill = function(a, d) {};
		b.prototype._setStyle = function(a) {};
		b.prototype.drawRect = function(a, d, b, c) {
			this.checkRect(a, d, b, c)
		};
		b.prototype.drawCircle = function(a, d, b) {
			this.checkRect(a - b, d - b, 2 * b, 2 * b)
		};
		b.prototype.drawRoundRect = function(a, d, b, c, e, k) {
			this.checkRect(a, d, b, c)
		};
		b.prototype.drawEllipse = function(a, d, b, c) {
			this.checkRect(a - b, d - c, 2 * b, 2 * c)
		};
		b.prototype.lineStyle =
			function(a, d, b, c, e, k, f, l) {};
		b.prototype.lineTo = function(a, d) {
			this.checkPoint(a, d)
		};
		b.prototype.curveTo = function(a, d, b, c) {
			this.checkPoint(a, d);
			this.checkPoint(b, c)
		};
		b.prototype.moveTo = function(a, d) {
			this.checkPoint(a, d)
		};
		b.prototype.clear = function() {
			this._maxY = this._maxX = this._minY = this._minX = 0
		};
		b.prototype.endFill = function() {};
		b.prototype._draw = function(a) {};
		b.prototype.checkRect = function(a, d, b, c) {
			this._minX = Math.min(this._minX, a);
			this._minY = Math.min(this._minY, d);
			this._maxX = Math.max(this._maxX, a +
				b);
			this._maxY = Math.max(this._maxY, d + c)
		};
		b.prototype.checkPoint = function(a, d) {
			this._minX = Math.min(this._minX, a);
			this._minY = Math.min(this._minY, d);
			this._maxX = Math.max(this._maxX, a);
			this._maxY = Math.max(this._maxY, d);
			this._lastX = a;
			this._lastY = d
		};
		return b
	}();
	b.Graphics = c;
	c.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(b, a, d) {
			this.method = b;
			this.thisObject = a;
			this.args = d
		}
	})().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		Object.defineProperty(a.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(d) {
			this._graphics && this._graphics._draw(d)
		};
		return a
	}(b.DisplayObject);
	b.Shape = c;
	c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		Object.defineProperty(a.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._render = function(d) {
			this._graphics && this._graphics._draw(d);
			c.prototype._render.call(this, d)
		};
		return a
	}(b.DisplayObjectContainer);
	b.Sprite = c;
	c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._inputEnabled = !1;
			this._text = this._type = "";
			this._displayAsPassword = !1;
			this._fontFamily = a.default_fontFamily;
			this._size = 30;
			this._textColorString = "#FFFFFF";
			this._textColor = 16777215;
			this._strokeColorString = "#000000";
			this._stroke = this._strokeColor = 0;
			this._textAlign = "left";
			this._verticalAlign = "top";
			this._maxChars = 0;
			this._scrollV = -1;
			this._numLines = this._lineSpacing = this._maxScrollV = 0;
			this._isFlow = this._multiline = !1;
			this._textArr = [];
			this._isArrayChanged = !1;
			this._textMaxHeight = this._textMaxWidth = 0;
			this._linesArr = []
		}
		__extends(a, c);
		a.prototype.isInput = function() {
			return this._type == b.TextFieldType.INPUT
		};
		a.prototype._setTouchEnabled = function(d) {
			c.prototype._setTouchEnabled.call(this, d);
			this.isInput() && (this._inputEnabled = !0)
		};
		Object.defineProperty(a.prototype, "type", {
			get: function() {
				return this._type
			},
			set: function(d) {
				this._setType(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setType = function(d) {
			this._type != d && (this._type = d, this._type == b.TextFieldType.INPUT ?
				(this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new b.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
		};
		Object.defineProperty(a.prototype, "text", {
			get: function() {
				return this._getText()
			},
			set: function(d) {
				this._setText(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._getText = function() {
			return this._type ==
				b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
		};
		a.prototype._setSizeDirty = function() {
			c.prototype._setSizeDirty.call(this);
			this._isArrayChanged = !0
		};
		a.prototype._setTextDirty = function() {
			this._setSizeDirty()
		};
		a.prototype._setBaseText = function(d) {
			null == d && (d = "");
			this._isFlow = !1;
			if (this._text != d || this._displayAsPassword) this._setTextDirty(), this._text = d, d = "", d = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
				text: d
			}])
		};
		a.prototype._setText = function(d) {
			null ==
				d && (d = "");
			this._setBaseText(d);
			this._inputUtils && this._inputUtils._setText(this._text)
		};
		Object.defineProperty(a.prototype, "displayAsPassword", {
			get: function() {
				return this._displayAsPassword
			},
			set: function(d) {
				this._setDisplayAsPassword(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setDisplayAsPassword = function(d) {
			this._displayAsPassword != d && (this._displayAsPassword = d, this._setText(this._text))
		};
		Object.defineProperty(a.prototype, "fontFamily", {
			get: function() {
				return this._fontFamily
			},
			set: function(d) {
				this._setFontFamily(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setFontFamily = function(d) {
			this._fontFamily != d && (this._setTextDirty(), this._fontFamily = d)
		};
		Object.defineProperty(a.prototype, "size", {
			get: function() {
				return this._size
			},
			set: function(d) {
				this._setSize(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setSize = function(d) {
			this._size != d && (this._setTextDirty(), this._size = d)
		};
		Object.defineProperty(a.prototype, "italic", {
			get: function() {
				return this._italic
			},
			set: function(d) {
				this._setItalic(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setItalic = function(d) {
			this._italic != d && (this._setTextDirty(), this._italic = d)
		};
		Object.defineProperty(a.prototype, "bold", {
			get: function() {
				return this._bold
			},
			set: function(d) {
				this._setBold(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setBold = function(d) {
			this._bold != d && (this._setTextDirty(), this._bold = d)
		};
		Object.defineProperty(a.prototype, "textColor", {
			get: function() {
				return this._textColor
			},
			set: function(d) {
				this._setTextColor(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setTextColor =
			function(d) {
				this._textColor != d && (this._setTextDirty(), this._textColor = d, this._textColorString = b.toColorString(d))
			};
		Object.defineProperty(a.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor
			},
			set: function(d) {
				this._setStrokeColor(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setStrokeColor = function(d) {
			this._strokeColor != d && (this._setTextDirty(), this._strokeColor = d, this._strokeColorString = b.toColorString(d))
		};
		Object.defineProperty(a.prototype, "stroke", {
			get: function() {
				return this._stroke
			},
			set: function(d) {
				this._setStroke(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setStroke = function(d) {
			this._stroke != d && (this._setTextDirty(), this._stroke = d)
		};
		Object.defineProperty(a.prototype, "textAlign", {
			get: function() {
				return this._textAlign
			},
			set: function(d) {
				this._setTextAlign(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setTextAlign = function(d) {
			this._textAlign != d && (this._setTextDirty(), this._textAlign = d)
		};
		Object.defineProperty(a.prototype, "verticalAlign", {
			get: function() {
				return this._verticalAlign
			},
			set: function(d) {
				this._setVerticalAlign(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setVerticalAlign = function(d) {
			this._verticalAlign != d && (this._setTextDirty(), this._verticalAlign = d)
		};
		Object.defineProperty(a.prototype, "maxChars", {
			get: function() {
				return this._maxChars
			},
			set: function(d) {
				this._setMaxChars(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setMaxChars = function(d) {
			this._maxChars != d && (this._maxChars = d)
		};
		Object.defineProperty(a.prototype, "scrollV", {
			set: function(d) {
				this._scrollV = d;
				this._setDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "maxScrollV", {
			get: function() {
				return this._maxScrollV
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "selectionBeginIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "selectionEndIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "caretIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setSelection =
			function(d, a) {};
		Object.defineProperty(a.prototype, "lineSpacing", {
			get: function() {
				return this._lineSpacing
			},
			set: function(d) {
				this._setLineSpacing(d)
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._setLineSpacing = function(d) {
			this._lineSpacing != d && (this._setTextDirty(), this._lineSpacing = d)
		};
		a.prototype._getLineHeight = function() {
			return this._lineSpacing + this._size
		};
		Object.defineProperty(a.prototype, "numLines", {
			get: function() {
				return this._numLines
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype,
			"multiline", {
				get: function() {
					return this._multiline
				},
				set: function(d) {
					this._setMultiline(d)
				},
				enumerable: !0,
				configurable: !0
			});
		a.prototype._setMultiline = function(d) {
			this._multiline = d;
			this._setDirty()
		};
		a.prototype.setFocus = function() {
			b.Logger.warning("TextField.setFocus \u6ca1\u6709\u5b9e\u73b0")
		};
		a.prototype._onRemoveFromStage = function() {
			c.prototype._onRemoveFromStage.call(this);
			this._type == b.TextFieldType.INPUT && this._inputUtils._removeStageText()
		};
		a.prototype._onAddToStage = function() {
			c.prototype._onAddToStage.call(this);
			this._type == b.TextFieldType.INPUT && this._inputUtils._addStageText()
		};
		a.prototype._updateBaseTransform = function() {
			c.prototype._updateTransform.call(this)
		};
		a.prototype._updateTransform = function() {
			this._type == b.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
		};
		a.prototype._render = function(d) {
			this.drawText(d);
			this._clearDirty()
		};
		a.prototype._measureBounds = function() {
			return this.measureText()
		};
		Object.defineProperty(a.prototype, "textFlow", {
			get: function() {
				return this._textArr
			},
			set: function(d) {
				this._isFlow = !0;
				var a = "";
				null == d && (d = []);
				for (var b = 0; b < d.length; b++) a += d[b].text;
				this._displayAsPassword ? this._setBaseText(a) : (this._text = a, this.setMiddleStyle(d))
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.changeToPassText = function(d) {
			if (this._displayAsPassword) {
				for (var a = "", b = 0, c = d.length; b < c; b++) switch (d.charAt(b)) {
					case "\n":
						a += "\n";
						break;
					case "\r":
						break;
					default:
						a += "*"
				}
				return a
			}
			return d
		};
		a.prototype.setMiddleStyle =
			function(d) {
				this._isArrayChanged = !0;
				this._textArr = d;
				this._setSizeDirty()
			};
		Object.defineProperty(a.prototype, "textWidth", {
			get: function() {
				return this._textMaxWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(a.prototype, "textHeight", {
			get: function() {
				return this._textMaxHeight
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype.appendText = function(d) {
			this.appendElement({
				text: d
			})
		};
		a.prototype.appendElement = function(d) {
			this._textArr.push(d);
			this.setMiddleStyle(this._textArr)
		};
		a.prototype._getLinesArr =
			function() {
				if (!this._isArrayChanged) return this._linesArr;
				this._isArrayChanged = !1;
				var d = this._textArr,
					a = b.MainContext.instance.rendererContext;
				this._linesArr = [];
				this._textMaxWidth = this._textMaxHeight = 0;
				if (this._hasWidthSet && 0 == this._explicitWidth) return console.warn("\u6587\u672c\u5bbd\u5ea6\u88ab\u8bbe\u7f6e\u4e3a0"), this._numLines = 0, [{
					width: 0,
					height: 0,
					elements: []
				}];
				var c = this._linesArr,
					e = 0,
					k = 0,
					f = 0,
					l;
				this._isFlow || a.setupFont(this);
				for (var n = 0; n < d.length; n++) {
					var p = d[n];
					p.style = p.style || {};
					for (var q =
							p.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < q.length; r++) {
						null == c[f] && (l = {
							width: 0,
							height: 0,
							elements: []
						}, c[f] = l, k = e = 0);
						k = this._type == b.TextFieldType.INPUT ? this._size : Math.max(k, p.style.size || this._size);
						if ("" != q[r]) {
							this._isFlow && a.setupFont(this, p.style);
							var t = a.measureText(q[r]);
							if (this._hasWidthSet)
								if (e + t <= this._explicitWidth) l.elements.push({
									width: t,
									text: q[r],
									style: p.style
								}), e += t;
								else {
									for (var s = 0, u = 0, v = q[r]; s < v.length; s++) {
										t = a.measureText(v.charAt(s));
										if (e + t > this._explicitWidth) break;
										u += t;
										e += t
									}
									0 < s && (l.elements.push({
										width: u,
										text: v.substring(0, s),
										style: p.style
									}), q[r] = v.substring(s));
									r--
								} else e += t, l.elements.push({
								width: t,
								text: q[r],
								style: p.style
							})
						}
						if (r < q.length - 1) {
							l.width = e;
							l.height = k;
							this._textMaxWidth = Math.max(this._textMaxWidth, e);
							this._textMaxHeight += k;
							if (this._type == b.TextFieldType.INPUT && !this._multiline) return this._numLines = c.length, c;
							f++
						}
					}
					n == d.length - 1 && l && (l.width = e, l.height = k, this._textMaxWidth = Math.max(this._textMaxWidth, e), this._textMaxHeight += k)
				}
				this._numLines = c.length;
				return c
			};
		a.prototype.measureText = function() {
			return this._getLinesArr() ? b.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) * this._lineSpacing) : b.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		a.prototype.drawText = function(d) {
			var a = this._getLinesArr();
			if (a) {
				this._isFlow || d.setupFont(this);
				var c = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
					e = this._textMaxHeight + (this._numLines -
						1) * this._lineSpacing,
					k = 0,
					f = 0;
				if (this._hasHeightSet)
					if (e < this._explicitHeight) {
						var l = 0;
						this._verticalAlign == b.VerticalAlign.MIDDLE ? l = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (l = 1);
						k += l * (this._explicitHeight - e)
					} else e > this._explicitHeight && (f = Math.max(this._scrollV - 1, 0), f = Math.min(this._numLines - 1, f));
				k = Math.round(k);
				e = 0;
				this._textAlign == b.HorizontalAlign.CENTER ? e = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (e = 1);
				for (l = 0; f < this._numLines; f++) {
					var n = a[f],
						p = n.height,
						k = k + p / 2;
					if (0 != f && this._hasHeightSet &&
						k > this._explicitHeight) break;
					for (var l = Math.round((c - n.width) * e), q = 0; q < n.elements.length; q++) {
						var r = n.elements[q],
							t = r.style.size || this._size;
						this._type == b.TextFieldType.INPUT ? d.drawText(this, r.text, l, k + (p - t) / 2, r.width) : (this._isFlow && d.setupFont(this, r.style), d.drawText(this, r.text, l, k + (p - t) / 2, r.width, r.style));
						l += r.width
					}
					k += p / 2 + this._lineSpacing
				}
			}
		};
		a.default_fontFamily = "Arial";
		return a
	}(b.DisplayObject);
	b.TextField = c;
	c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {
			this.resutlArr = []
		}
		b.prototype.parser = function(a) {
			this.stackArray = [];
			this.resutlArr = [];
			for (var d = 0, b = a.length; d < b;) {
				var c = a.indexOf("<", d);
				0 > c ? (this.addToResultArr(a.substring(d)), d = b) : (this.addToResultArr(a.substring(d, c)), d = a.indexOf(">", c), "/" == a.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(a.substring(c + 1, d)), d += 1)
			}
			return this.resutlArr
		};
		b.prototype.addToResultArr = function(a) {
			if ("" != a) {
				var d = [];
				d.push(["&lt;", "<"]);
				d.push(["&gt;", ">"]);
				d.push(["&amp;",
					"&"
				]);
				d.push(["&quot;", '"']);
				d.push(["&apos;;", "'"]);
				for (var b = 0; b < d.length; b++) a.replace(new RegExp(d[b][0], "g"), d[b][1]);
				0 < this.stackArray.length ? this.resutlArr.push({
					text: a,
					style: this.stackArray[this.stackArray.length - 1]
				}) : this.resutlArr.push({
					text: a
				})
			}
		};
		b.prototype.changeStringToObject = function(a) {
			var d = {};
			a = a.replace(/( )+/g, " ").split(" ");
			for (var b = 0; b < a.length; b++) this.addProperty(d, a[b]);
			return d
		};
		b.prototype.addProperty = function(a, d) {
			var b = d.replace(/( )*=( )*/g, "=").split("=");
			b[1] && (b[1] =
				b[1].replace(/(\"|\')/g, ""));
			switch (b[0].toLowerCase()) {
				case "color":
					a.textColor = parseInt(b[1]);
					break;
				case "b":
					a.bold = "true" == (b[1] || "true");
					break;
				case "i":
					a.italic = "true" == (b[1] || "true");
					break;
				case "size":
					a.size = parseInt(b[1]);
					break;
				case "fontFamily":
					a.fontFamily = b[1]
			}
		};
		b.prototype.addToArray = function(a) {
			a = this.changeStringToObject(a);
			if (0 != this.stackArray.length) {
				var d = this.stackArray[this.stackArray.length - 1],
					b;
				for (b in d) null == a[b] && (a[b] = d[b])
			}
			this.stackArray.push(a)
		};
		return b
	}();
	b.HtmlTextParser =
		c;
	c.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.DYNAMIC = "dynamic";
		b.INPUT = "input";
		return b
	}();
	b.TextFieldType = c;
	c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(d) {
			c.call(this);
			var a = d.bitmapData;
			this.bitmapData = a;
			this._textureMap = {};
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._bitmapX = d._bitmapX - d._offsetX;
			this._bitmapY = d._bitmapY - d._offsetY
		}
		__extends(a, c);
		a.prototype.getTexture = function(d) {
			return this._textureMap[d]
		};
		a.prototype.createTexture = function(d, a, c, e, k, f, l, n, p) {
			void 0 === f && (f = 0);
			void 0 === l && (l = 0);
			"undefined" === typeof n && (n = f + e);
			"undefined" === typeof p && (p = l + k);
			var q = new b.Texture,
				r = b.MainContext.instance.rendererContext.texture_scale_factor;
			q._bitmapData = this.bitmapData;
			q._bitmapX = this._bitmapX + a;
			q._bitmapY = this._bitmapY + c;
			q._bitmapWidth = e * r;
			q._bitmapHeight = k * r;
			q._offsetX = f;
			q._offsetY = l;
			q._textureWidth = n * r;
			q._textureHeight = p * r;
			q._sourceWidth = this._sourceWidth;
			q._sourceHeight = this._sourceHeight;
			return this._textureMap[d] = q
		};
		return a
	}(b.HashObject);
	b.SpriteSheet = c;
	c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._isFocus = !1;
			this._isFirst = this._isFirst = !0
		}
		__extends(a, c);
		a.prototype.init = function(d) {
			this._text = d;
			this.stageText = b.StageText.create();
			d = this._text.localToGlobal();
			this.stageText._open(d.x, d.y, this._text._explicitWidth, this._text._explicitHeight)
		};
		a.prototype._addStageText = function() {
			this._text._inputEnabled || (this._text._touchEnabled = !0);
			this.stageText._add();
			this.stageText._addListeners();
			this.stageText.addEventListener("blur", this.onBlurHandler,
				this);
			this.stageText.addEventListener("focus", this.onFocusHandler, this);
			this.stageText.addEventListener("updateText", this.updateTextHandler, this);
			this._text.addEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			b.MainContext.instance.stage.addEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		a.prototype._removeStageText = function() {
			this.stageText._remove();
			this.stageText._removeListeners();
			this._text._inputEnabled || (this._text._touchEnabled = !1);
			this.stageText.removeEventListener("blur",
				this.onBlurHandler, this);
			this.stageText.removeEventListener("focus", this.onFocusHandler, this);
			this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
			this._text.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		a.prototype._getText = function() {
			return this.stageText._getText()
		};
		a.prototype._setText = function(d) {
			this.stageText._setText(d)
		};
		a.prototype.onFocusHandler =
			function(d) {
				this.hideText()
			};
		a.prototype.onBlurHandler = function(d) {
			this.showText()
		};
		a.prototype.onMouseDownHandler = function(d) {
			d.stopPropagation();
			this._text._visible && this.stageText._show()
		};
		a.prototype.onStageDownHandler = function(d) {
			this.stageText._hide();
			this.showText()
		};
		a.prototype.showText = function() {
			this._isFocus && (this._isFocus = !1, this.resetText())
		};
		a.prototype.hideText = function() {
			this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
		};
		a.prototype.updateTextHandler = function(d) {
			this.resetText();
			this._text.dispatchEvent(new b.Event(b.Event.CHANGE))
		};
		a.prototype.resetText = function() {
			this._text._setBaseText(this.stageText._getText())
		};
		a.prototype._updateTransform = function() {
			var d = this._text._worldTransform.a,
				a = this._text._worldTransform.b,
				c = this._text._worldTransform.c,
				e = this._text._worldTransform.d,
				k = this._text._worldTransform.tx,
				f = this._text._worldTransform.ty;
			this._text._updateBaseTransform();
			var l = this._text._worldTransform;
			if (this._isFirst || d != l.a || a != l.b || c != l.c || e != l.d || k != l.tx || f !=
				l.ty) {
				this._isFirst = !1;
				d = this._text.localToGlobal();
				this.stageText.changePosition(d.x, d.y);
				var n = this;
				b.callLater(function() {
					n.stageText._setScale(n._text._worldTransform.a, n._text._worldTransform.d)
				}, this)
			}
		};
		a.prototype._updateProperties = function() {
			var a = this._text._stage;
			if (null == a) this.stageText._setVisible(!1);
			else {
				for (var c = this._text, e = c._visible; e;) {
					c = c.parent;
					if (c == a) break;
					e = c._visible
				}
				this.stageText._setVisible(e)
			}
			this.stageText._setMultiline(this._text._multiline);
			this.stageText._setMaxChars(this._text._maxChars);
			this.stageText._setSize(this._text._size);
			this.stageText._setTextColor(this._text._textColorString);
			this.stageText._setTextFontFamily(this._text._fontFamily);
			this.stageText._setBold(this._text._bold);
			this.stageText._setItalic(this._text._italic);
			this.stageText._setTextAlign(this._text._textAlign);
			this.stageText._setWidth(this._text._getSize(b.Rectangle.identity).width);
			this.stageText._setHeight(this._text._getSize(b.Rectangle.identity).height);
			this.stageText._setTextType(this._text._displayAsPassword ?
				"password" : "text");
			this.stageText._setText(this._text._text);
			this.stageText._resetStageText();
			this._updateTransform()
		};
		return a
	}(b.HashObject);
	b.InputController = c;
	c.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(a, c) {
			b.call(this, a);
			this.charList = this.parseConfig(c)
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
			for (var b = this.getConfigByKey(a[3], "count"), c = {}, e = 4; e < 4 + b; e++) {
				var k = a[e],
					f = String.fromCharCode(this.getConfigByKey(k,
						"id")),
					l = {};
				c[f] = l;
				l.x = this.getConfigByKey(k, "x");
				l.y = this.getConfigByKey(k, "y");
				l.width = this.getConfigByKey(k, "width");
				l.height = this.getConfigByKey(k, "height");
				l.offsetX = this.getConfigByKey(k, "xoffset");
				l.offsetY = this.getConfigByKey(k, "yoffset")
			}
			return c
		};
		a.prototype.getConfigByKey = function(a, b) {
			for (var c = a.split(" "), e = 0, k = c.length; e < k; e++) {
				var f = c[e];
				if (b == f.substring(0, b.length)) return c = f.substring(b.length + 1), parseInt(c)
			}
			return 0
		};
		return a
	}(b.SpriteSheet);
	b.BitmapTextSpriteSheet = c;
	c.prototype.__class__ =
		"egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(a) {
		function d(d, c) {
			a.call(this);
			this.frameRate = 60;
			d instanceof e ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = d) : this.delegate = new e(d, c);
			this.delegate.setMovieClip(this)
		}
		__extends(d, a);
		d.prototype.gotoAndPlay = function(a) {
			this.delegate.gotoAndPlay(a)
		};
		d.prototype.gotoAndStop = function(a) {
			this.delegate.gotoAndStop(a)
		};
		d.prototype.stop =
			function() {
				this.delegate.stop()
			};
		d.prototype.dispose = function() {
			this.delegate.dispose()
		};
		d.prototype.release = function() {
			b.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose()
		};
		d.prototype.getCurrentFrameIndex = function() {
			b.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex
		};
		d.prototype.getTotalFrame = function() {
			b.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame
		};
		d.prototype.setInterval = function(a) {
			b.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / a
		};
		d.prototype.getIsPlaying = function() {
			b.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying
		};
		return d
	}(b.DisplayObjectContainer);
	b.MovieClip = c;
	c.prototype.__class__ = "egret.MovieClip";
	var e = function() {
		function a(a, c) {
			this.data = a;
			this._currentFrameIndex = this._passTime =
				this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = a;
			this._spriteSheet = new b.SpriteSheet(c)
		}
		a.prototype.setMovieClip = function(a) {
			this.movieClip = a;
			this.bitmap = new b.Bitmap;
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
			b.Ticker.getInstance().register(this.update, this)
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
			b.Ticker.getInstance().unregister(this.update, this)
		};
		a.prototype.dispose = function() {};
		a.prototype.checkHasFrame = function(a) {
			void 0 == this._frameData.frames[a] && b.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
		};
		a.prototype.update = function(a) {
			for (var b =
					1E3 / this.movieClip.frameRate, b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1), b--;
			this._passTime += a
		};
		a.prototype.playNextFrame = function(a) {
			void 0 === a && (a = !0);
			var c = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (a) {
				a = this.getTexture(c.res);
				var e = this.bitmap;
				e.x = c.x;
				e.y = c.y;
				e.texture = a
			}
			null != c.action && this.movieClip.dispatchEventWith(c.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex =
				0, c.action != b.Event.COMPLETE && this.movieClip.dispatchEventWith(b.Event.COMPLETE))
		};
		a.prototype.getTexture = function(a) {
			var b = this._frameData.res[a],
				c = this._spriteSheet.getTexture(a);
			c || (c = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
			return c
		};
		return a
	}();
	b.DefaultMovieClipDelegate = e;
	e.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._scaleY = this._scaleX = 1;
			this._size = 30;
			this._color = "#FFFFFF";
			this._fontFamily = "Arial";
			this._italic = this._bold = !1;
			this._textAlign = "left";
			this._multiline = this._visible = !1;
			this._maxChars = 0
		}
		__extends(a, b);
		a.prototype._getText = function() {
			return null
		};
		a.prototype._setText = function(a) {};
		a.prototype._setTextType = function(a) {};
		a.prototype._getTextType = function() {
			return null
		};
		a.prototype._open = function(a, b, c, e) {};
		a.prototype._show = function() {};
		a.prototype._add =
			function() {};
		a.prototype._remove = function() {};
		a.prototype._hide = function() {};
		a.prototype._addListeners = function() {};
		a.prototype._removeListeners = function() {};
		a.prototype._setScale = function(a, b) {
			this._scaleX = a;
			this._scaleY = b
		};
		a.prototype.changePosition = function(a, b) {};
		a.prototype._setSize = function(a) {
			this._size = a
		};
		a.prototype._setTextColor = function(a) {
			this._color = a
		};
		a.prototype._setTextFontFamily = function(a) {
			this._fontFamily = a
		};
		a.prototype._setBold = function(a) {
			this._bold = a
		};
		a.prototype._setItalic =
			function(a) {
				this._italic = a
			};
		a.prototype._setTextAlign = function(a) {
			this._textAlign = a
		};
		a.prototype._setVisible = function(a) {
			this._visible = a
		};
		a.prototype._setWidth = function(a) {};
		a.prototype._setHeight = function(a) {};
		a.prototype._setMultiline = function(a) {
			this._multiline = a
		};
		a.prototype._setMaxChars = function(a) {
			this._maxChars = a
		};
		a.prototype._resetStageText = function() {};
		a.create = function() {
			return null
		};
		return a
	}(b.EventDispatcher);
	b.StageText = c;
	c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.GET = "get";
		b.POST = "post";
		return b
	}();
	b.URLRequestMethod = c;
	c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.BINARY = "binary";
		b.TEXT = "text";
		b.VARIABLES = "variables";
		b.TEXTURE = "texture";
		b.SOUND = "sound";
		return b
	}();
	b.URLLoaderDataFormat = c;
	c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a(a) {
			void 0 === a && (a = null);
			b.call(this);
			null !== a && this.decode(a)
		}
		__extends(a, b);
		a.prototype.decode = function(a) {
			this.variables || (this.variables = {});
			a = a.split("+").join(" ");
			for (var b, c = /[?&]?([^=]+)=([^&]*)/g; b = c.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
		};
		a.prototype.toString = function() {
			if (!this.variables) return "";
			var a = this.variables,
				b = "",
				c = !0,
				e;
			for (e in a) c ? c = !1 : b += "&", b += e + "=" + a[e];
			return b
		};
		return a
	}(b.HashObject);
	b.URLVariables =
		c;
	c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		return function(b, a) {
			this.name = b;
			this.value = a
		}
	}();
	b.URLRequestHeader = c;
	c.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(a) {
			void 0 === a && (a = null);
			c.call(this);
			this.method = b.URLRequestMethod.GET;
			this.url = a
		}
		__extends(a, c);
		return a
	}(b.HashObject);
	b.URLRequest = c;
	c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(a) {
			void 0 === a && (a = null);
			c.call(this);
			this.dataFormat = b.URLLoaderDataFormat.TEXT;
			this._status = -1;
			a && this.load(a)
		}
		__extends(a, c);
		a.prototype.load = function(a) {
			this._request = a;
			this.data = null;
			b.MainContext.instance.netContext.proceed(this)
		};
		return a
	}(b.EventDispatcher);
	b.URLLoader = c;
	c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(a, c);
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
			var c = b.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * c;
			this._textureHeight = this._sourceHeight * c;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		a.prototype.getPixel32 = function(a, b) {
			return this._bitmapData.getContext("2d").getImageData(a,
				b, 1, 1).data
		};
		return a
	}(b.HashObject);
	b.Texture = c;
	c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(a, c);
		a.prototype.drawToTexture = function(d) {
			var c = this._bitmapData,
				e = d.getBounds(b.Rectangle.identity);
			if (0 == e.width || 0 == e.height) return b.Logger.warning("egret.RenderTexture#drawToTexture:\u663e\u793a\u5bf9\u8c61\u6d4b\u91cf\u7ed3\u679c\u5bbd\u9ad8\u4e3a0\uff0c\u8bf7\u68c0\u67e5"), !1;
			e.width = Math.floor(e.width);
			e.height = Math.floor(e.height);
			c.width = e.width;
			c.height = e.height;
			this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = e.width, this.renderContext._cacheCanvas.height = e.height);
			a.identityRectangle.width = e.width;
			a.identityRectangle.height = e.height;
			d._worldTransform.identity();
			d.worldAlpha = 1;
			if (d instanceof b.DisplayObjectContainer) {
				var c = d._anchorOffsetX,
					m = d._anchorOffsetY;
				if (0 != d._anchorX || 0 != d._anchorY) c = d._anchorX * e.width, m = d._anchorY * e.height;
				this._offsetX = e.x + c;
				this._offsetY = e.y +
					m;
				d._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				e = d._children;
				c = 0;
				for (m = e.length; c < m; c++) e[c]._updateTransform()
			}
			e = b.RenderFilter.getInstance();
			c = e._drawAreaList.concat();
			e._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.renderContext.onRenderStart();
			this.webGLTexture = null;
			(m = d.mask || d._scrollRect) && this.renderContext.pushMask(m);
			d._render(this.renderContext);
			m && this.renderContext.popMask();
			e.addDrawArea(a.identityRectangle);
			this.renderContext.onRenderFinish();
			e._drawAreaList =
				c;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight;
			return !0
		};
		a.identityRectangle = new b.Rectangle;
		return a
	}(b.Texture);
	b.RenderTexture = c;
	c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1;
			this.profiler = b.Profiler.getInstance()
		}
		__extends(a, c);
		a.prototype.clearScreen = function() {};
		a.prototype.clearRect = function(a, b, c, e) {};
		a.prototype.drawImage = function(a, b, c, e, k, f, l, n, p, q) {
			this.profiler.onDrawImage()
		};
		a.prototype.setTransform = function(a) {};
		a.prototype.setAlpha = function(a, b) {};
		a.prototype.setupFont = function(a, b) {};
		a.prototype.measureText = function(a) {
			return 0
		};
		a.prototype.drawText = function(a,
			b, c, e, k, f) {
			this.profiler.onDrawImage()
		};
		a.prototype.strokeRect = function(a, b, c, e, k) {};
		a.prototype.pushMask = function(a) {};
		a.prototype.popMask = function() {};
		a.prototype.onRenderStart = function() {};
		a.prototype.onRenderFinish = function() {};
		a.prototype.setGlobalColorTransform = function(a) {};
		a.createRendererContext = function(a) {
			return null
		};
		a.imageSmoothingEnabled = !0;
		return a
	}(b.HashObject);
	b.RendererContext = c;
	c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.MOUSE = "mouse";
		b.TOUCH = "touch";
		b.mode = "touch";
		return b
	}();
	b.InteractionMode = c;
	c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(a, c);
		a.prototype.run = function() {};
		a.prototype.getTouchData = function(a, b, c) {
			var e = this._currentTouchTarget[a];
			null == e && (e = {}, this._currentTouchTarget[a] = e);
			e.stageX = b;
			e.stageY = c;
			e.identifier = a;
			return e
		};
		a.prototype.dispatchEvent = function(a, c) {
			b.TouchEvent.dispatchTouchEvent(c.target, a, c.identifier, c.stageX,
				c.stageY, !1, !1, !1, !0 == this.touchDownTarget[c.identifier])
		};
		a.prototype.onTouchBegan = function(a, c, e) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				var m = b.MainContext.instance.stage.hitTest(a, c);
				m && (a = this.getTouchData(e, a, c), this.touchDownTarget[e] = !0, a.target = m, a.beginTarget = m, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
				this.touchingIdentifiers.push(e)
			}
		};
		a.prototype.onTouchMove = function(a, c, e) {
			if (-1 != this.touchingIdentifiers.indexOf(e) && (a != this.lastTouchX || c != this.lastTouchY)) {
				this.lastTouchX =
					a;
				this.lastTouchY = c;
				var m = b.MainContext.instance.stage.hitTest(a, c);
				m && (a = this.getTouchData(e, a, c), a.target = m, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
			}
		};
		a.prototype.onTouchEnd = function(a, c, e) {
			var m = this.touchingIdentifiers.indexOf(e); - 1 != m && (this.touchingIdentifiers.splice(m, 1), m = b.MainContext.instance.stage.hitTest(a, c)) && (a = this.getTouchData(e, a, c), delete this.touchDownTarget[e], e = a.beginTarget, a.target = m, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), e == m ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP,
				a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return a
	}(b.HashObject);
	b.TouchContext = c;
	c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype.proceed = function(a) {};
		a._getUrl = function(a) {
			var c = a.url; - 1 == c.indexOf("?") && a.method == b.URLRequestMethod.GET && a.data && a.data instanceof b.URLVariables && (c = c + "?" + a.data.toString());
			return c
		};
		a.prototype.getChangeList = function() {
			return []
		};
		return a
	}(b.HashObject);
	b.NetContext = c;
	c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this);
			this.frameRate = 60
		}
		__extends(a, b);
		a.prototype.executeMainLoop = function(a, b) {};
		return a
	}(b.HashObject);
	b.DeviceContext = c;
	c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.call = function(a, d) {};
		b.addCallback = function(a, d) {};
		return b
	}();
	b.ExternalInterface = c;
	c.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.ua = navigator.userAgent.toLowerCase();
			this.trans = this._getTrans()
		}
		__extends(a, c);
		a.getInstance = function() {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		Object.defineProperty(a.prototype, "isMobile", {
			get: function() {
				b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
				return b.MainContext.deviceType ==
					b.MainContext.DEVICE_MOBILE
			},
			enumerable: !0,
			configurable: !0
		});
		a.prototype._getHeader = function(a) {
			if ("transform" in a) return "";
			for (var b = ["webkit", "ms", "Moz", "O"], c = 0; c < b.length; c++)
				if (b[c] + "Transform" in a) return b[c];
			return ""
		};
		a.prototype._getTrans = function() {
			var a = document.createElement("div").style,
				a = this._getHeader(a);
			return "" == a ? "transform" : a + "Transform"
		};
		a.prototype.$new = function(a) {
			return this.$(document.createElement(a))
		};
		a.prototype.$ = function(d) {
			var c = document;
			if (d = d instanceof HTMLElement ?
				d : c.querySelector(d)) d.find = d.find || this.$, d.hasClass = d.hasClass || function(a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				}, d.addClass = d.addClass || function(a) {
					this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
					return this
				}, d.removeClass = d.removeClass || function(a) {
					this.hasClass(a) && (this.className = this.className.replace(a, ""));
					return this
				}, d.remove = d.remove || function() {}, d.appendTo = d.appendTo || function(a) {
					a.appendChild(this);
					return this
				}, d.prependTo = d.prependTo ||
				function(a) {
					a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
					return this
				}, d.transforms = d.transforms || function() {
					this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
					return this
				}, d.position = d.position || {
					x: 0,
					y: 0
				}, d.rotation = d.rotation || 0, d.scale = d.scale || {
					x: 1,
					y: 1
				}, d.skew = d.skew || {
					x: 0,
					y: 0
				}, d.translates = function(a, d) {
					this.position.x = a;
					this.position.y = d -
						b.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this
				}, d.rotate = function(a) {
					this.rotation = a;
					this.transforms();
					return this
				}, d.resize = function(a, d) {
					this.scale.x = a;
					this.scale.y = d;
					this.transforms();
					return this
				}, d.setSkew = function(a, d) {
					this.skew.x = a;
					this.skew.y = d;
					this.transforms();
					return this
				};
			return d
		};
		a.prototype.translate = function(a) {
			return "translate(" + a.x + "px, " + a.y + "px) "
		};
		a.prototype.rotate = function(a) {
			return "rotate(" + a + "deg) "
		};
		a.prototype.scale = function(a) {
			return "scale(" + a.x + ", " +
				a.y + ") "
		};
		a.prototype.skew = function(a) {
			return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
		};
		return a
	}(b.HashObject);
	b.Browser = c;
	c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(b) {
	(function(b) {
		b.getItem = function(b) {
			return null
		};
		b.setItem = function(b, a) {
			return !1
		};
		b.removeItem = function(b) {};
		b.clear = function() {}
	})(b.localStorage || (b.localStorage = {}))
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function c() {}
		c.parse = function(a) {
			a = b.SAXParser.getInstance().parserXML(a);
			if (!a || !a.childNodes) return null;
			for (var d = a.childNodes.length, h = !1, g = 0; g < d; g++) {
				var m = a.childNodes[g];
				if (1 == m.nodeType) {
					h = !0;
					break
				}
			}
			return h ? c.parseNode(m) : null
		};
		c.parseNode = function(a) {
			if (!a || 1 != a.nodeType) return null;
			var d = {};
			d.localName = a.localName;
			d.name = a.nodeName;
			a.namespaceURI && (d.namespace = a.namespaceURI);
			a.prefix && (d.prefix = a.prefix);
			for (var b = a.attributes, g = b.length, m = 0; m < g; m++) {
				var k =
					b[m],
					f = k.name;
				0 != f.indexOf("xmlns:") && (d["$" + f] = k.value)
			}
			b = a.childNodes;
			g = b.length;
			for (m = 0; m < g; m++)
				if (k = c.parseNode(b[m])) d.children || (d.children = []), k.parent = d, d.children.push(k);!d.children && (a = a.textContent.trim()) && (d.text = a);
			return d
		};
		c.findChildren = function(a, d, b) {
			b ? b.length = 0 : b = [];
			c.findByPath(a, d, b);
			return b
		};
		c.findByPath = function(a, d, b) {
			var g = d.indexOf("."),
				m; - 1 == g ? (m = d, g = !0) : (m = d.substring(0, g), d = d.substring(g + 1), g = !1);
			if (a = a.children)
				for (var k = a.length, f = 0; f < k; f++) {
					var l = a[f];
					l.localName ==
						m && (g ? b.push(l) : c.findByPath(l, d, b))
				}
		};
		c.getAttributes = function(a, d) {
			d ? d.length = 0 : d = [];
			for (var b in a) "$" == b.charAt(0) && d.push(b.substring(1));
			return d
		};
		return c
	}();
	b.XML = c;
	c.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function a() {}
		a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		a.BIG_ENDIAN = "BIG_ENDIAN";
		return a
	}();
	b.Endian = c;
	c.prototype.__class__ = "egret.Endian";
	var e = function() {
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
			void 0 === b && (b = 0);
			void 0 === c && (c = 0);
			null == c && (c = a.length);
			a.ensureWriteableSpace(b + c);
			var e = new Int8Array(a.arraybytes),
				k = new Int8Array(this.arraybytes);
			e.set(k.subarray(this.position, this.position + c), b);
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
				var e = c.getUint8(this.position++);
				if (128 > e) {
					if (0 == e) break;
					b += String.fromCharCode(e)
				} else if (224 > e) b += String.fromCharCode((e & 63) << 6 | c.getUint8(this.position++) & 127);
				else if (240 > e) var k = c.getUint8(this.position++),
					b = b + String.fromCharCode((e & 31) << 12 | (k & 127) << 6 | c.getUint8(this.position++) & 127);
				else var k = c.getUint8(this.position++),
					f = c.getUint8(this.position++),
					b = b + String.fromCharCode((e & 15) << 18 | (k & 127) << 12 | f << 6 & 127 | c.getUint8(this.position++) & 127)
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
	b.ByteArray = e;
	e.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(a, b, g) {
			c.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(a, b, g)
		}
		__extends(a, c);
		a.get = function(d, b, c, e) {
			void 0 === b && (b = null);
			void 0 === c && (c = null);
			void 0 === e && (e = !1);
			e && a.removeTweens(d);
			return new a(d, b, c)
		};
		a.removeTweens = function(d) {
			if (d.tween_count) {
				for (var b =
						a._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == d && (b[c].paused = !0, b.splice(c, 1));
				d.tween_count = 0
			}
		};
		a.pauseTweens = function(a) {
			if (a.tween_count)
				for (var c = b.Tween._tweens, e = c.length - 1; 0 <= e; e--) c[e]._target == a && (c[e].paused = !0)
		};
		a.resumeTweens = function(a) {
			if (a.tween_count)
				for (var c = b.Tween._tweens, e = c.length - 1; 0 <= e; e--) c[e]._target == a && (c[e].paused = !1)
		};
		a.tick = function(d, b) {
			void 0 === b && (b = !1);
			for (var c = a._tweens.concat(), e = c.length - 1; 0 <= e; e--) {
				var k = c[e];
				b && !k.ignoreGlobalPause || k.paused || k.tick(k._useTicks ?
					1 : d)
			}
		};
		a._register = function(d, c) {
			var e = d._target,
				m = a._tweens;
			if (c) e && (e.tween_count = e.tween_count ? e.tween_count + 1 : 1), m.push(d), a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
			else
				for (e && e.tween_count--, e = m.length; e--;)
					if (m[e] == d) {
						m.splice(e, 1);
						break
					}
		};
		a.removeAllTweens = function() {
			for (var d = a._tweens, b = 0, c = d.length; b < c; b++) {
				var e = d[b];
				e.paused = !0;
				e._target.tweenjs_count = 0
			}
			d.length = 0
		};
		a.prototype.initialize = function(d, b, c) {
			this._target = d;
			b && (this._useTicks = b.useTicks, this.ignoreGlobalPause =
				b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(d));
			this.pluginData = c || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			b && b.paused ? this.paused = !0 : a._register(this, !0);
			b && null != b.position && this.setPosition(b.position, a.NONE)
		};
		a.prototype.setPosition = function(a, b) {
			void 0 === b && (b = 1);
			0 > a && (a = 0);
			var c = a,
				e = !1;
			c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, e = !0));
			if (c == this._prevPos) return e;
			var k = this._prevPos;
			this.position = this._prevPos = c;
			this._prevPosition = a;
			if (this._target)
				if (e) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
				for (var f = 0, l = this._steps.length; f < l && !(this._steps[f].t > c); f++);
				f = this._steps[f - 1];
				this._updateTargetProps(f, (this._stepPosition = c - f.t) / f.d)
			}
			0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < k ? (k != this.duration && this._runActions(k, this.duration), this._runActions(0, c, !0)) : this._runActions(k, c));
			e && this.setPaused(!0);
			this.dispatchEventWith("change");
			return e
		};
		a.prototype._runActions = function(a, b, c) {
			void 0 === c && (c = !1);
			var e = a,
				k = b,
				f = -1,
				l = this._actions.length,
				n = 1;
			a > b && (e = b, k = a, f = l, l = n = -1);
			for (;
				(f += n) != l;) {
				b = this._actions[f];
				var p = b.t;
				(p == k || p > e && p < k || c && p == a) && b.f.apply(b.o, b.p)
			}
		};
		a.prototype._updateTargetProps = function(d, b) {
			var c, e, k, f;
			if (d || 1 != b) {
				if (this.passive = !!d.v) return;
				d.e && (b = d.e(b, 0, 1, 1));
				c = d.p0;
				e = d.p1
			} else this.passive = !1, c = e = this._curQueueProps;
			for (var l in this._initQueueProps) {
				null == (k = c[l]) && (c[l] = k = this._initQueueProps[l]);
				null ==
					(f = e[l]) && (e[l] = f = k);
				k = k == f || 0 == b || 1 == b || "number" != typeof k ? 1 == b ? f : k : k + (f - k) * b;
				var n = !1;
				if (f = a._plugins[l])
					for (var p = 0, q = f.length; p < q; p++) {
						var r = f[p].tween(this, l, k, c, e, b, !!d && c == e, !d);
						r == a.IGNORE ? n = !0 : k = r
					}
				n || (this._target[l] = k)
			}
		};
		a.prototype.setPaused = function(d) {
			this.paused = d;
			a._register(this, !d);
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
		a.prototype._appendQueueProps = function(d) {
			var b, c, e, k, f, l;
			for (l in d)
				if (void 0 === this._initQueueProps[l]) {
					c = this._target[l];
					if (b = a._plugins[l])
						for (e = 0, k = b.length; e < k; e++) c = b[e].init(this, l, c);
					this._initQueueProps[l] = this._curQueueProps[l] = void 0 === c ? null : c
				}
			for (l in d) {
				c = this._curQueueProps[l];
				if (b = a._plugins[l])
					for (f = f || {}, e = 0, k = b.length; e < k; e++) b[e].step && b[e].step(this, l, c, d[l], f);
				this._curQueueProps[l] = d[l]
			}
			f && this._appendQueueProps(f);
			return this._curQueueProps
		};
		a.prototype._addAction = function(a) {
			a.t =
				this.duration;
			this._actions.push(a);
			return this
		};
		a.prototype._set = function(a, b) {
			for (var c in a) b[c] = a[c]
		};
		a.prototype.wait = function(a, b) {
			if (null == a || 0 >= a) return this;
			var c = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: a,
				p0: c,
				p1: c,
				v: b
			})
		};
		a.prototype.to = function(a, b, c) {
			void 0 === c && (c = void 0);
			if (isNaN(b) || 0 > b) b = 0;
			return this._addStep({
				d: b || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: c,
				p1: this._cloneProps(this._appendQueueProps(a))
			})
		};
		a.prototype.call = function(a, b, c) {
			void 0 === b && (b = void 0);
			void 0 === c && (c = void 0);
			return this._addAction({
				f: a,
				p: c ? c : [],
				o: b ? b : this._target
			})
		};
		a.prototype.set = function(a, b) {
			void 0 === b && (b = null);
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
	}(b.EventDispatcher);
	b.Tween = c;
	c.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function c() {
			b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
		}
		c.get = function(a) {
			-1 > a && (a = -1);
			1 < a && (a = 1);
			return function(d) {
				return 0 == a ? d : 0 > a ? d * (d * -a + 1 + a) : d * ((2 - d) * a + (1 - a))
			}
		};
		c.getPowIn = function(a) {
			return function(d) {
				return Math.pow(d, a)
			}
		};
		c.getPowOut = function(a) {
			return function(d) {
				return 1 - Math.pow(1 - d, a)
			}
		};
		c.getPowInOut = function(a) {
			return function(d) {
				return 1 > (d *= 2) ? 0.5 * Math.pow(d, a) : 1 - 0.5 * Math.abs(Math.pow(2 - d, a))
			}
		};
		c.sineIn = function(a) {
			return 1 - Math.cos(a *
				Math.PI / 2)
		};
		c.sineOut = function(a) {
			return Math.sin(a * Math.PI / 2)
		};
		c.sineInOut = function(a) {
			return -0.5 * (Math.cos(Math.PI * a) - 1)
		};
		c.getBackIn = function(a) {
			return function(d) {
				return d * d * ((a + 1) * d - a)
			}
		};
		c.getBackOut = function(a) {
			return function(d) {
				return --d * d * ((a + 1) * d + a) + 1
			}
		};
		c.getBackInOut = function(a) {
			a *= 1.525;
			return function(d) {
				return 1 > (d *= 2) ? 0.5 * d * d * ((a + 1) * d - a) : 0.5 * ((d -= 2) * d * ((a + 1) * d + a) + 2)
			}
		};
		c.circIn = function(a) {
			return -(Math.sqrt(1 - a * a) - 1)
		};
		c.circOut = function(a) {
			return Math.sqrt(1 - --a * a)
		};
		c.circInOut = function(a) {
			return 1 >
				(a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
		};
		c.bounceIn = function(a) {
			return 1 - c.bounceOut(1 - a)
		};
		c.bounceOut = function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
		};
		c.bounceInOut = function(a) {
			return 0.5 > a ? 0.5 * c.bounceIn(2 * a) : 0.5 * c.bounceOut(2 * a - 1) + 0.5
		};
		c.getElasticIn = function(a, d) {
			var b = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var e = d / b * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 *
					(c -= 1)) * Math.sin((c - e) * b / d))
			}
		};
		c.getElasticOut = function(a, d) {
			var b = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var e = d / b * Math.asin(1 / a);
				return a * Math.pow(2, -10 * c) * Math.sin((c - e) * b / d) + 1
			}
		};
		c.getElasticInOut = function(a, d) {
			var b = 2 * Math.PI;
			return function(c) {
				var e = d / b * Math.asin(1 / a);
				return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - e) * b / d) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - e) * b / d) * 0.5 + 1
			}
		};
		c.quadIn = c.getPowIn(2);
		c.quadOut = c.getPowOut(2);
		c.quadInOut = c.getPowInOut(2);
		c.cubicIn = c.getPowIn(3);
		c.cubicOut = c.getPowOut(3);
		c.cubicInOut = c.getPowInOut(3);
		c.quartIn = c.getPowIn(4);
		c.quartOut = c.getPowOut(4);
		c.quartInOut = c.getPowInOut(4);
		c.quintIn = c.getPowIn(5);
		c.quintOut = c.getPowOut(5);
		c.quintInOut = c.getPowInOut(5);
		c.backIn = c.getBackIn(1.7);
		c.backOut = c.getBackOut(1.7);
		c.backInOut = c.getBackInOut(1.7);
		c.elasticIn = c.getElasticIn(1, 0.3);
		c.elasticOut = c.getElasticOut(1, 0.3);
		c.elasticInOut = c.getElasticInOut(1, 0.3 * 1.5);
		return c
	}();
	b.Ease = c;
	c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {
			this.type = b.EFFECT
		}
		b.prototype.play = function(a) {
			void 0 === a && (a = !1);
			var d = this.audio;
			d && (isNaN(d.duration) || (d.currentTime = 0), d.loop = a, d.play())
		};
		b.prototype.pause = function() {
			var a = this.audio;
			a && a.pause()
		};
		b.prototype.load = function() {
			var a = this.audio;
			a && a.load()
		};
		b.prototype.addEventListener = function(a, d) {
			this.audio && this.audio.addEventListener(a, d, !1)
		};
		b.prototype.removeEventListener = function(a, d) {
			this.audio && this.audio.removeEventListener(a, d, !1)
		};
		b.prototype.setVolume =
			function(a) {
				var d = this.audio;
				d && (d.volume = a)
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
	b.Sound = c;
	c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.isNumber = function(a) {
			return "number" === typeof a && !isNaN(a)
		};
		b.sin = function(a) {
			a = Math.round(a);
			a %= 360;
			0 > a && (a += 360);
			return 90 > a ? egret_sin_map[a] : 180 > a ? egret_cos_map[a - 90] : 270 > a ? -egret_sin_map[a - 180] : -egret_cos_map[a - 270]
		};
		b.cos = function(a) {
			a = Math.round(a);
			a %= 360;
			0 > a && (a += 360);
			return 90 > a ? egret_cos_map[a] : 180 > a ? -egret_sin_map[a - 90] : 270 > a ? -egret_cos_map[a - 180] : egret_sin_map[a - 270]
		};
		return b
	}();
	b.NumberUtils = c;
	c.prototype.__class__ = "egret.NumberUtils"
})(egret ||
	(egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(b) {
	if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	var c = Array.prototype.slice.call(arguments, 1),
		e = this,
		a = function() {},
		d = function() {
			return e.apply(this instanceof a && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
		};
	a.prototype = this.prototype;
	d.prototype = new a;
	return d
});
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	RES;
(function(b) {
	var c = function(b) {
		function a(a, c, g) {
			void 0 === c && (c = !1);
			void 0 === g && (g = !1);
			b.call(this, a, c, g);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(a, b);
		a.dispatchResourceEvent = function(d, b, c, e, k, f) {
			void 0 === c && (c = "");
			void 0 === e && (e = null);
			void 0 === k && (k = 0);
			void 0 === f && (f = 0);
			var l = egret.Event._getPropertyData(a);
			l.groupName = c;
			l.resItem = e;
			l.itemsLoaded = k;
			l.itemsTotal = f;
			egret.Event._dispatchByTarget(a, d, b, l)
		};
		a.ITEM_LOAD_ERROR = "itemLoadError";
		a.CONFIG_COMPLETE = "configComplete";
		a.CONFIG_LOAD_ERROR =
			"configLoadError";
		a.GROUP_PROGRESS = "groupProgress";
		a.GROUP_COMPLETE = "groupComplete";
		a.GROUP_LOAD_ERROR = "groupLoadError";
		return a
	}(egret.Event);
	b.ResourceEvent = c;
	c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(b) {
	var c = function() {
		function b(a, d, c) {
			this._loaded = !1;
			this.name = a;
			this.url = d;
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
	b.ResourceItem = c;
	c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(b) {
	var c = function() {
		function c() {
			this.keyMap = {};
			this.groupDic = {};
			b.configInstance = this
		}
		c.prototype.getGroupByName = function(a) {
			var d = [];
			if (!this.groupDic[a]) return d;
			a = this.groupDic[a];
			for (var b = a.length, c = 0; c < b; c++) d.push(this.parseResourceItem(a[c]));
			return d
		};
		c.prototype.getRawGroupByName = function(a) {
			return this.groupDic[a] ? this.groupDic[a] : []
		};
		c.prototype.createGroup = function(a, d, b) {
			void 0 === b && (b = !1);
			if (!b && this.groupDic[a] || !d || 0 == d.length) return !1;
			b = this.groupDic;
			for (var c = [], e = d.length,
					k = 0; k < e; k++) {
				var f = d[k],
					l = b[f];
				if (l)
					for (var f = l.length, n = 0; n < f; n++) {
						var p = l[n]; - 1 == c.indexOf(p) && c.push(p)
					} else(p = this.keyMap[f]) && -1 == c.indexOf(p) && c.push(p)
			}
			if (0 == c.length) return !1;
			this.groupDic[a] = c;
			return !0
		};
		c.prototype.parseConfig = function(a, d) {
			if (a) {
				var b = a.resources;
				if (b)
					for (var c = b.length, e = 0; e < c; e++) {
						var k = b[e],
							f = k.url;
						f && -1 == f.indexOf("://") && (k.url = d + f);
						this.addItemToKeyMap(k)
					}
				if (b = a.groups)
					for (c = b.length, e = 0; e < c; e++) {
						for (var f = b[e], l = [], n = f.keys.split(","), p = n.length, q = 0; q < p; q++) k = n[q].trim(), (k = this.keyMap[k]) && -1 == l.indexOf(k) && l.push(k);
						this.groupDic[f.name] = l
					}
			}
		};
		c.prototype.addSubkey = function(a, d) {
			var b = this.keyMap[d];
			b && !this.keyMap[a] && (this.keyMap[a] = b)
		};
		c.prototype.addItemToKeyMap = function(a) {
			this.keyMap[a.name] || (this.keyMap[a.name] = a);
			if (a.hasOwnProperty("subkeys")) {
				var d = a.subkeys.split(",");
				a.subkeys = d;
				for (var b = d.length, c = 0; c < b; c++) {
					var e = d[c];
					null == this.keyMap[e] && (this.keyMap[e] = a)
				}
			}
		};
		c.prototype.getName = function(a) {
			return (a = this.keyMap[a]) ? a.name : ""
		};
		c.prototype.getType =
			function(a) {
				return (a = this.keyMap[a]) ? a.type : ""
			};
		c.prototype.getRawResourceItem = function(a) {
			return this.keyMap[a]
		};
		c.prototype.getResourceItem = function(a) {
			return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
		};
		c.prototype.parseResourceItem = function(a) {
			var d = new b.ResourceItem(a.name, a.url, a.type);
			d.data = a;
			return d
		};
		return c
	}();
	b.ResourceConfig = c;
	c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.thread = 2;
			this.loadingCount = 0;
			this.groupTotalDic = {};
			this.numLoadedDic = {};
			this.itemListDic = {};
			this.groupErrorDic = {};
			this.retryTimesDic = {};
			this.maxRetryTimes = 3;
			this.failedList = [];
			this.priorityQueue = {};
			this.lazyLoadList = [];
			this.analyzerDic = {};
			this.queueIndex = 0
		}
		__extends(a, c);
		a.prototype.isGroupInLoading = function(a) {
			return void 0 !== this.itemListDic[a]
		};
		a.prototype.loadGroup = function(a, c, e) {
			void 0 === e && (e = 0);
			if (!this.itemListDic[c] && c)
				if (a &&
					0 != a.length) {
					this.priorityQueue[e] ? this.priorityQueue[e].push(c) : this.priorityQueue[e] = [c];
					this.itemListDic[c] = a;
					e = a.length;
					for (var m = 0; m < e; m++) a[m].groupName = c;
					this.groupTotalDic[c] = a.length;
					this.numLoadedDic[c] = 0;
					this.next()
				} else egret.Logger.warning('RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4\uff1a"' + c + '"'), a = new b.ResourceEvent(b.ResourceEvent.GROUP_LOAD_ERROR), a.groupName = c, this.dispatchEvent(a)
		};
		a.prototype.loadItem = function(a) {
			this.lazyLoadList.push(a);
			a.groupName =
				"";
			this.next()
		};
		a.prototype.next = function() {
			for (; this.loadingCount < this.thread;) {
				var a = this.getOneResourceItem();
				if (!a) break;
				this.loadingCount++;
				if (a.loaded) this.onItemComplete(a);
				else {
					var c = this.analyzerDic[a.type];
					c || (c = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
					c.loadFile(a, this.onItemComplete, this)
				}
			}
		};
		a.prototype.getOneResourceItem = function() {
			if (0 < this.failedList.length) return this.failedList.shift();
			var a = Number.NEGATIVE_INFINITY,
				b;
			for (b in this.priorityQueue) a =
				Math.max(a, b);
			a = this.priorityQueue[a];
			if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			b = a.length;
			for (var c, e = 0; e < b; e++) {
				this.queueIndex >= b && (this.queueIndex = 0);
				c = this.itemListDic[a[this.queueIndex]];
				if (0 < c.length) break;
				this.queueIndex++
			}
			return 0 == c.length ? null : c.shift()
		};
		a.prototype.onItemComplete = function(a) {
			this.loadingCount--;
			var c = a.groupName;
			if (!a.loaded) {
				var e = this.retryTimesDic[a.name] || 1;
				if (e > this.maxRetryTimes) delete this.retryTimesDic[a.name], b.ResourceEvent.dispatchResourceEvent(this.resInstance,
					b.ResourceEvent.ITEM_LOAD_ERROR, c, a);
				else {
					this.retryTimesDic[a.name] = e + 1;
					this.failedList.push(a);
					this.next();
					return
				}
			}
			if (c) {
				this.numLoadedDic[c] ++;
				var e = this.numLoadedDic[c],
					m = this.groupTotalDic[c];
				a.loaded || (this.groupErrorDic[c] = !0);
				b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, c, a, e, m);
				e == m && (a = this.groupErrorDic[c], this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], delete this.groupErrorDic[c], a ? b.ResourceEvent.dispatchResourceEvent(this,
					b.ResourceEvent.GROUP_LOAD_ERROR, c) : b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, c))
			} else this.callBack.call(this.resInstance, a);
			this.next()
		};
		a.prototype.removeGroupName = function(a) {
			for (var b in this.priorityQueue) {
				for (var c = this.priorityQueue[b], e = c.length, k = 0, f = !1, e = c.length, l = 0; l < e; l++) {
					if (c[l] == a) {
						c.splice(k, 1);
						f = !0;
						break
					}
					k++
				}
				if (f) {
					0 == c.length && delete this.priorityQueue[b];
					break
				}
			}
		};
		return a
	}(egret.EventDispatcher);
	b.ResourceLoader = c;
	c.prototype.__class__ = "RES.ResourceLoader"
})(RES ||
	(RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.resourceConfig = b.configInstance
		}
		__extends(a, c);
		a.prototype.addSubkey = function(a, b) {
			this.resourceConfig.addSubkey(a, b)
		};
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
	b.AnalyzerBase = c;
	c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
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
				var e = this.getLoader();
				this.resItemDic[e.hashCode] = {
					item: a,
					func: b,
					thisObject: c
				};
				e.load(new egret.URLRequest(a.url))
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
			var e = c.item,
				k = c.func;
			e.loaded = a.type == egret.Event.COMPLETE;
			e.loaded && this.analyzeData(e, b.data);
			k.call(c.thisObject, e)
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
	}(b.AnalyzerBase);
	b.BinAnalyzer = c;
	c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
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
	}(b.BinAnalyzer);
	b.ImageAnalyzer = c;
	c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
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
			} catch (e) {
				egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + "\ndata:" + b)
			}
		};
		return a
	}(b.BinAnalyzer);
	b.JsonAnalyzer = c;
	c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		return a
	}(b.BinAnalyzer);
	b.TextAnalyzer = c;
	c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, c);
		a.prototype.getRes = function(a) {
			var c = this.fileDic[a];
			c || (c = this.textureMap[a]);
			!c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = b.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
			return c
		};
		a.prototype.onLoadFinish = function(a) {
			var b = a.target,
				c = this.resItemDic[b.hashCode];
			delete this.resItemDic[b.hashCode];
			this.recycler.push(b);
			var e =
				c.item,
				k = c.func;
			e.loaded = a.type == egret.Event.COMPLETE;
			e.loaded && this.analyzeData(e, b.data);
			"string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(e, k, c.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : k.call(c.thisObject, e)
		};
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) {
				var e;
				if ("string" == typeof b) {
					try {
						e = JSON.parse(b)
					} catch (k) {
						egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
					}
					e && (this.sheetMap[c] =
						e, a.loaded = !1, a.url = this.getRelativePath(a.url, e.file))
				} else e = this.sheetMap[c], delete this.sheetMap[c], b && (e = this.parseSpriteSheet(b, e, a.data && a.data.subkeys ? "" : c), this.fileDic[c] = e)
			}
		};
		a.prototype.getRelativePath = function(a, b) {
			a = a.split("\\").join("/");
			var c = a.lastIndexOf("/");
			return a = -1 != c ? a.substring(0, c + 1) + b : b
		};
		a.prototype.parseSpriteSheet = function(a, b, c) {
			b = b.frames;
			if (!b) return null;
			var e = new egret.SpriteSheet(a),
				k = this.textureMap,
				f;
			for (f in b) {
				var l = b[f];
				a = e.createTexture(f, l.x, l.y, l.w, l.h,
					l.offX, l.offY, l.sourceW, l.sourceH);
				l.scale9grid && (l = l.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3])));
				null == k[f] && (k[f] = a, c && this.addSubkey(f, c))
			}
			return e
		};
		return a
	}(b.BinAnalyzer);
	b.SheetAnalyzer = c;
	c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) {
				var e;
				"string" == typeof b ? (e = b, this.sheetMap[c] = e, a.loaded = !1, a.url = this.getTexturePath(a.url, e)) : (e = this.sheetMap[c], delete this.sheetMap[c], b && (e = new egret.BitmapTextSpriteSheet(b, e), this.fileDic[c] = e))
			}
		};
		a.prototype.getTexturePath = function(a, b) {
			var c = "",
				e = b.split("\n")[2],
				k = e.indexOf('file="'); - 1 != k && (e = e.substring(k + 6), k = e.indexOf('"'), c = e.substring(0,
				k));
			a = a.split("\\").join("/");
			k = a.lastIndexOf("/");
			return a = -1 != k ? a.substring(0, k + 1) + c : c
		};
		return a
	}(b.SheetAnalyzer);
	b.FontAnalyzer = c;
	c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType ? b.preload(c.soundType) : b.preload(egret.Sound.EFFECT))
		};
		return a
	}(b.BinAnalyzer);
	b.SoundAnalyzer = c;
	c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.analyzeData = function(a, b) {
			var c = a.name;
			if (!this.fileDic[c] && b) try {
				var e = egret.XML.parse(b);
				this.fileDic[c] = e
			} catch (k) {}
		};
		return a
	}(b.BinAnalyzer);
	b.XMLAnalyzer = c;
	c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	b.loadConfig = function(a, b, c) {
		void 0 === b && (b = "");
		void 0 === c && (c = "json");
		e.loadConfig(a, b, c)
	};
	b.loadGroup = function(a, b) {
		void 0 === b && (b = 0);
		e.loadGroup(a, b)
	};
	b.isGroupLoaded = function(a) {
		return e.isGroupLoaded(a)
	};
	b.getGroupByName = function(a) {
		return e.getGroupByName(a)
	};
	b.createGroup = function(a, b, c) {
		void 0 === c && (c = !1);
		return e.createGroup(a, b, c)
	};
	b.hasRes = function(a) {
		return e.hasRes(a)
	};
	b.getRes = function(a) {
		return e.getRes(a)
	};
	b.getResAsync = function(a, b, c) {
		e.getResAsync(a, b, c)
	};
	b.getResByUrl =
		function(a, b, c, g) {
			void 0 === g && (g = "");
			e.getResByUrl(a, b, c, g)
		};
	b.destroyRes = function(a) {
		return e.destroyRes(a)
	};
	b.setMaxLoadingThread = function(a) {
		e.setMaxLoadingThread(a)
	};
	b.addEventListener = function(a, b, c, g, m) {
		void 0 === g && (g = !1);
		void 0 === m && (m = 0);
		e.addEventListener(a, b, c, g, m)
	};
	b.removeEventListener = function(a, b, c, g) {
		void 0 === g && (g = !1);
		e.removeEventListener(a, b, c, g)
	};
	var c = function(a) {
		function d() {
			a.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups =
				[];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(d, a);
		d.prototype.getAnalyzerByType = function(a) {
			var d = this.analyzerDic[a];
			d || (d = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
			return d
		};
		d.prototype.init = function() {
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer,
				b.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(b.AnalyzerBase,
				b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
			this.resConfig = new b.ResourceConfig;
			this.resLoader = new b.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
			this.resLoader.addEventListener(b.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
		};
		d.prototype.loadConfig = function(a, b, d) {
			void 0 === d && (d = "json");
			this.configItemList.push({
				url: a,
				resourceRoot: b,
				type: d
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		d.prototype.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var a = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = a;
			for (var c = a.length, e = [], k = 0; k < c; k++) {
				var f = a[k],
					f = new b.ResourceItem(f.url, f.url, f.type);
				e.push(f)
			}
			this.resLoader.loadGroup(e, d.GROUP_CONFIG, Number.MAX_VALUE)
		};
		d.prototype.isGroupLoaded = function(a) {
			return -1 != this.loadedGroups.indexOf(a)
		};
		d.prototype.getGroupByName = function(a) {
			return this.resConfig.getGroupByName(a)
		};
		d.prototype.loadGroup = function(a, d) {
			void 0 === d && (d = 0);
			if (-1 != this.loadedGroups.indexOf(a)) b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE,
				a);
			else if (!this.resLoader.isGroupInLoading(a))
				if (this.configComplete) {
					var c = this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(c, a, d)
				} else this.groupNameList.push({
					name: a,
					priority: d
				})
		};
		d.prototype.createGroup = function(a, b, d) {
			void 0 === d && (d = !1);
			if (d) {
				var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1)
			}
			return this.resConfig.createGroup(a, b, d)
		};
		d.prototype.onGroupComp = function(a) {
			if (a.groupName == d.GROUP_CONFIG) {
				a = this.loadingConfigList.length;
				for (var c = 0; c < a; c++) {
					var e = this.loadingConfigList[c],
						k = this.getAnalyzerByType(e.type),
						f = k.getRes(e.url);
					k.destroyRes(e.url);
					this.resConfig.parseConfig(f, e.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList = null;
				b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
				e = this.groupNameList;
				a = e.length;
				for (c = 0; c < a; c++) k = e[c], this.loadGroup(k.name, k.priority);
				this.groupNameList = []
			} else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
		};
		d.prototype.onGroupError = function(a) {
			a.groupName == d.GROUP_CONFIG ? (this.loadingConfigList =
				null, b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
		};
		d.prototype.hasRes = function(a) {
			var d = this.resConfig.getType(a);
			return "" == d && (a = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(a), "" == d) ? !1 : !0
		};
		d.prototype.getRes = function(a) {
			var d = this.resConfig.getType(a);
			return "" == d && (d = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(d), "" == d) ? null : this.getAnalyzerByType(d).getRes(a)
		};
		d.prototype.getResAsync = function(a, d, c) {
			var e = this.resConfig.getType(a),
				f = this.resConfig.getName(a);
			if ("" == e && (f = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(f), "" == e)) {
				d.call(c, null);
				return
			}(e = this.getAnalyzerByType(e).getRes(a)) ? d.call(c, e): (a = {
				key: a,
				compFunc: d,
				thisObject: c
			}, this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
		};
		d.prototype.getResByUrl = function(a, d, c, e) {
			void 0 === e && (e = "");
			if (a) {
				e || (e = this.getTypeByUrl(a));
				var f = this.getAnalyzerByType(e).getRes(a);
				f ? d.call(c, f) :
					(d = {
						key: a,
						compFunc: d,
						thisObject: c
					}, this.asyncDic[a] ? this.asyncDic[a].push(d) : (this.asyncDic[a] = [d], a = new b.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
			} else d.call(c, null)
		};
		d.prototype.getTypeByUrl = function(a) {
			(a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
			switch (a) {
				case b.ResourceItem.TYPE_XML:
				case b.ResourceItem.TYPE_JSON:
				case b.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
					a = b.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					a = b.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					a = b.ResourceItem.TYPE_TEXT;
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
					a = b.ResourceItem.TYPE_SOUND;
					break;
				default:
					a = b.ResourceItem.TYPE_BIN
			}
			return a
		};
		d.prototype.onResourceItemComp = function(a) {
			var b = this.asyncDic[a.name];
			delete this.asyncDic[a.name];
			a = this.getAnalyzerByType(a.type);
			for (var d = b.length, c = 0; c < d; c++) {
				var e = b[c],
					l = a.getRes(e.key);
				e.compFunc.call(e.thisObject, l, e.key)
			}
		};
		d.prototype.destroyRes = function(a) {
			var b = this.resConfig.getRawGroupByName(a);
			if (b) {
				var d =
					this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1);
				a = b.length;
				for (var c = 0; c < a; c++) {
					d = b[c];
					d.loaded = !1;
					var e = this.getAnalyzerByType(d.type);
					e.destroyRes(d.name)
				}
				return !0
			}
			b = this.resConfig.getType(a);
			if ("" == b) return !1;
			d = this.resConfig.getRawResourceItem(a);
			d.loaded = !1;
			e = this.getAnalyzerByType(b);
			return e.destroyRes(a)
		};
		d.prototype.setMaxLoadingThread = function(a) {
			1 > a && (a = 1);
			this.resLoader.thread = a
		};
		d.GROUP_CONFIG = "RES__CONFIG";
		return d
	}(egret.EventDispatcher);
	c.prototype.__class__ = "RES.Resource";
	var e = new c
})(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(b) {
			void 0 === b && (b = 60);
			c.call(this);
			this.frameRate = b;
			this._time = 0;
			this._isActivate = !0;
			60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
				window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
				return window.setTimeout(a, 1E3 / b)
			});
			a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
				return window.clearTimeout(a)
			});
			a.instance = this;
			this.registerListener()
		}
		__extends(a, c);
		a.prototype.enterFrame = function() {
			var d = a.instance,
				c = a._thisObject,
				e = a._callback,
				m = b.getTimer(),
				k = m -
				d._time;
			d._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
			e.call(c, k);
			d._time = m
		};
		a.prototype.executeMainLoop = function(b, c) {
			a._callback = b;
			a._thisObject = c;
			this.enterFrame()
		};
		a.prototype.reset = function() {
			var d = a.instance;
			d._requestAnimationId && (d._time = b.getTimer(), a.cancelAnimationFrame.call(window, d._requestAnimationId), d.enterFrame())
		};
		a.prototype.registerListener = function() {
			var d = this,
				c = function() {
					d._isActivate && (d._isActivate = !1, b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.DEACTIVATE)))
				},
				e = function() {
					d._isActivate || (d._isActivate = !0, a.instance.reset(), b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.ACTIVATE)))
				},
				m = function() {
					document[k] ? c() : e()
				};
			window.addEventListener("focus", e, !1);
			window.addEventListener("blur", c, !1);
			var k, f;
			"undefined" !== typeof document.hidden ? (k = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (k = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (k = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ?
				(k = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (k = "oHidden", f = "ovisibilitychange");
			"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", c, !1));
			k && f && document.addEventListener(f, m, !1)
		};
		return a
	}(b.DeviceContext);
	b.HTML5DeviceContext = c;
	c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(b) {
	b.getItem = function(b) {
		return window.localStorage.getItem(b)
	};
	b.setItem = function(b, e) {
		try {
			return window.localStorage.setItem(b, e), !0
		} catch (a) {
			return console.log("egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key=" + b + "&value=" + e), !1
		}
	};
	b.removeItem = function(b) {
		window.localStorage.removeItem(b)
	};
	b.clear = function() {
		window.localStorage.clear()
	};
	b.init = function() {
		for (var c in b) egret.localStorage[c] = b[c]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(a) {
			c.call(this);
			this.globalAlpha = 1;
			this.canvas = a || this.createCanvas();
			this.canvasContext = this.canvas.getContext("2d");
			this._cacheCanvas = document.createElement("canvas");
			this._cacheCanvas.width = this.canvas.width;
			this._cacheCanvas.height = this.canvas.height;
			this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
			this.onResize();
			var b = this.canvasContext.setTransform,
				g = this;
			this._cacheCanvasContext.setTransform = function(a, d, c, e, n, p) {
				g._matrixA = a;
				g._matrixB =
					d;
				g._matrixC = c;
				g._matrixD = e;
				g._matrixTx = n;
				g._matrixTy = p;
				b.call(g._cacheCanvasContext, a, d, c, e, n, p)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			this.initBlendMode()
		}
		__extends(a, c);
		a.prototype.createCanvas = function() {
			var a = b.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var c = document.getElementById(b.StageDelegate.canvas_div_name),
					a = b.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				c.appendChild(a)
			}
			b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
				this.onResize, this);
			return a
		};
		a.prototype.onResize = function() {
			if (this.canvas) {
				var a = document.getElementById(b.StageDelegate.canvas_div_name);
				this.canvas.width = b.MainContext.instance.stage.stageWidth;
				this.canvas.height = b.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this._cacheCanvas.width = this.canvas.width;
				this._cacheCanvas.height = this.canvas.height;
				this._cacheCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled
			}
		};
		a.prototype.clearScreen = function() {
			for (var a = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, e = a.length; c < e; c++) {
				var m = a[c];
				this.clearRect(m.x, m.y, m.width, m.height)
			}
			a = b.MainContext.instance.stage;
			this._cacheCanvasContext.clearRect(0,
				0, a.stageWidth, a.stageHeight);
			this.renderCost = 0
		};
		a.prototype.clearRect = function(a, b, c, e) {
			this.canvasContext.clearRect(a, b, c * window.devicePixelRatio, e * window.devicePixelRatio)
		};
		a.prototype.drawImage = function(a, h, g, m, k, f, l, n, p, q) {
			void 0 === q && (q = void 0);
			var r = a._bitmapData;
			f += this._transformTx;
			l += this._transformTy;
			var t = b.getTimer();
			void 0 === q ? this._cacheCanvasContext.drawImage(r, h, g, m, k, f, l, n, p) : this.drawRepeatImage(a, h, g, m, k, f, l, n, p, q);
			c.prototype.drawImage.call(this, a, h, g, m, k, f, l, n, p, q);
			this.renderCost +=
				b.getTimer() - t
		};
		a.prototype.drawRepeatImage = function(a, c, e, m, k, f, l, n, p, q) {
			if (void 0 === a.pattern) {
				var r = b.MainContext.instance.rendererContext.texture_scale_factor,
					t = a._bitmapData,
					s = t;
				if (t.width != m || t.height != k || 1 != r) s = document.createElement("canvas"), s.width = m * r, s.height = k * r, s.getContext("2d").drawImage(t, c, e, m, k, 0, 0, m * r, k * r);
				c = this._cacheCanvasContext.createPattern(s, q);
				a.pattern = c
			}
			this._cacheCanvasContext.fillStyle = a.pattern;
			this._cacheCanvasContext.translate(f, l);
			this._cacheCanvasContext.fillRect(0,
				0, n, p);
			this._cacheCanvasContext.translate(-f, -l)
		};
		a.prototype.setTransform = function(a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		a.prototype.setAlpha =
			function(a, c) {
				a != this.globalAlpha && (this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
				c ? (this.blendValue = this.blendModes[c], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
			};
		a.prototype.initBlendMode = function() {
			this.blendModes = {};
			this.blendModes[b.BlendMode.NORMAL] = "source-over";
			this.blendModes[b.BlendMode.ADD] = "lighter"
		};
		a.prototype.setupFont = function(a, b) {
			void 0 === b && (b = null);
			b = b || {};
			var c = null == b.size ? a._size : b.size,
				e = null == b.fontFamily ? a._fontFamily : b.fontFamily,
				k = this._cacheCanvasContext,
				f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
				f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
			k.font = f + (c + "px " + e);
			k.textAlign = "left";
			k.textBaseline = "middle"
		};
		a.prototype.measureText = function(a) {
			return this._cacheCanvasContext.measureText(a).width
		};
		a.prototype.drawText = function(a, h, g, m, k, f) {
			void 0 === f && (f = null);
			this.setupFont(a, f);
			f = f || {};
			var l;
			l = null != f.textColor ? b.toColorString(f.textColor) : a._textColorString;
			var n;
			n = null != f.strokeColor ? b.toColorString(f.strokeColor) : a._strokeColorString;
			var p;
			p = null != f.stroke ? f.stroke : a._stroke;
			var q = this._cacheCanvasContext;
			q.fillStyle = l;
			q.strokeStyle = n;
			p && (q.lineWidth = 2 * p, q.strokeText(h, g + this._transformTx, m + this._transformTy, k || 65535));
			q.fillText(h, g + this._transformTx, m + this._transformTy, k || 65535);
			c.prototype.drawText.call(this, a, h, g, m, k, f)
		};
		a.prototype.strokeRect =
			function(a, b, c, e, k) {
				this._cacheCanvasContext.strokeStyle = k;
				this._cacheCanvasContext.strokeRect(a, b, c, e)
			};
		a.prototype.pushMask = function(a) {
			this._cacheCanvasContext.save();
			this._cacheCanvasContext.beginPath();
			this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
			this._cacheCanvasContext.clip();
			this._cacheCanvasContext.closePath()
		};
		a.prototype.popMask = function() {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		a.prototype.onRenderStart =
			function() {
				this._cacheCanvasContext.save()
			};
		a.prototype.onRenderFinish = function() {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
			for (var a = this._cacheCanvas.width, c = this._cacheCanvas.height, e = b.RenderFilter.getInstance().getDrawAreaList(), m = 0, k = e.length; m < k; m++) {
				var f = e[m],
					l = f.x,
					n = f.y,
					p = f.width,
					f = f.height;
				l + p > a && (p = a - l);
				n + f > c && (f = c - n);
				0 < p && 0 < f && this.canvasContext.drawImage(this._cacheCanvas, l, n, p, f, l, n, p, f)
			}
		};
		return a
	}(b.RendererContext);
	b.HTML5CanvasRenderer =
		c;
	c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(b) {
	b.beginFill = function(b, a) {
		void 0 === a && (a = 1);
		var d = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.fillStyleColor = d;
		this.commandQueue.push(new c(this._setStyle, this, [d]))
	};
	b.drawRect = function(b, a, d, h) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
			this.canvasContext.closePath()
		}, this, [b, a, d, h]));
		this._fill()
	};
	b.drawCircle = function(b, a, d) {
		this.commandQueue.push(new c(function(a,
			b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [b, a, d]));
		this._fill()
	};
	b.drawRoundRect = function(b, a, d, h, g, m) {
		this.commandQueue.push(new c(function(a, b, c, d, e, h) {
			var g = this.renderContext;
			a = g._transformTx + a;
			b = g._transformTy + b;
			e /= 2;
			h = h ? h / 2 : e;
			c = a + c;
			d = b + d;
			g = d - h;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(c, g);
			this.canvasContext.quadraticCurveTo(c, d, c - e, d);
			this.canvasContext.lineTo(a +
				e, d);
			this.canvasContext.quadraticCurveTo(a, d, a, d - h);
			this.canvasContext.lineTo(a, b + h);
			this.canvasContext.quadraticCurveTo(a, b, a + e, b);
			this.canvasContext.lineTo(c - e, b);
			this.canvasContext.quadraticCurveTo(c, b, c, b + h);
			this.canvasContext.lineTo(c, g);
			this.canvasContext.closePath()
		}, this, [b, a, d, h, g, m]));
		this._fill()
	};
	b.drawEllipse = function(b, a, d, h) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.save();
			a = e._transformTx + a;
			b = e._transformTy + b;
			var e = c > d ? c : d,
				h = c / e;
			d /=
				e;
			this.canvasContext.scale(h, d);
			this.canvasContext.beginPath();
			this.canvasContext.moveTo((a + c) / h, b / d);
			this.canvasContext.arc(a / h, b / d, e, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore();
			this.canvasContext.stroke()
		}, this, [b, a, d, h]));
		this._fill()
	};
	b.lineStyle = function(b, a, d, h, g, m, k, f) {
		void 0 === b && (b = NaN);
		void 0 === a && (a = 0);
		void 0 === d && (d = 1);
		void 0 === h && (h = !1);
		void 0 === g && (g = "normal");
		void 0 === m && (m = null);
		void 0 === k && (k = null);
		void 0 === f && (f = 3);
		this.strokeStyleColor && (this.createEndLineCommand(),
			this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + d + ")";
		this.commandQueue.push(new c(function(a, b) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = b;
			this.canvasContext.beginPath()
		}, this, [b, a]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	b.lineTo = function(b, a) {
		this.commandQueue.push(new c(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.lineTo(c._transformTx +
				a, c._transformTy + b)
		}, this, [b, a]));
		this.lineX = b;
		this.lineY = a
	};
	b.curveTo = function(b, a, d, h) {
		this.commandQueue.push(new c(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + c, e._transformTy + d)
		}, this, [b, a, d, h]));
		this.lineX = d;
		this.lineY = h
	};
	b.moveTo = function(b, a) {
		this.commandQueue.push(new c(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
		}, this, [b, a]))
	};
	b.clear = function() {
		this.lineY =
			this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null
	};
	b.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new c(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	b.endFill = function() {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null
	};
	b._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
	};
	b.createEndLineCommand = function() {
		this.endLineCommand ||
			(this.endLineCommand = new c(function() {
				this.canvasContext.stroke();
				this.canvasContext.closePath()
			}, this, null))
	};
	b._draw = function(b) {
		var a = this.commandQueue.length;
		if (0 != a) {
			this.renderContext = b;
			b = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
			b.save();
			this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
			for (var c = 0; c < a; c++) {
				var h = this.commandQueue[c];
				h.method.apply(h.thisObject, h.args)
			}
			b.restore()
		}
	};
	var c = function() {
		return function(b, a, c) {
			this.method = b;
			this.thisObject = a;
			this.args = c
		}
	}();
	c.prototype.__class__ = "egret_h5_graphics.Command";
	b._setStyle = function(b) {
		this.canvasContext.fillStyle = b;
		this.canvasContext.beginPath()
	};
	b.init = function() {
		for (var c in b) egret.Graphics.prototype[c] = b[c];
		egret.RendererContext.createRendererContext = function(a) {
			return new egret.HTML5CanvasRenderer(a)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a(a) {
			c.call(this);
			this.size = 2E3;
			this.vertSize = 5;
			this.contextLost = !1;
			this.glContextId = 0;
			this.currentBlendMode = "";
			this.currentBaseTexture = null;
			this.currentBatchSize = 0;
			this.maskList = [];
			this.maskDataFreeList = [];
			this.canvasContext = document.createElement("canvas").getContext("2d");
			console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
			this.canvas = a || this.createCanvas();
			this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
			this.canvas.addEventListener("webglcontextrestored",
				this.handleContextRestored.bind(this), !1);
			this.onResize();
			this.projectionX = this.canvas.width / 2;
			this.projectionY = -this.canvas.height / 2;
			a = 6 * this.size;
			this.vertices = new Float32Array(4 * this.size * this.vertSize);
			this.indices = new Uint16Array(a);
			for (var h = 0, g = 0; h < a; h += 6, g += 4) this.indices[h + 0] = g + 0, this.indices[h + 1] = g + 1, this.indices[h + 2] = g + 2, this.indices[h + 3] = g + 0, this.indices[h + 4] = g + 2, this.indices[h + 5] = g + 3;
			this.initWebGL();
			this.shaderManager = new b.WebGLShaderManager(this.gl);
			this.worldTransform = new b.Matrix;
			this.initBlendMode();
			b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
			b.TextField.prototype._draw = function(a) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				b.DisplayObject.prototype._draw.call(this, a)
			}
		}
		__extends(a, c);
		a.prototype.createCanvas = function() {
			var a = b.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var c = document.getElementById(b.StageDelegate.canvas_div_name),
					a = b.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				c.appendChild(a)
			}
			b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
				this.onResize, this);
			return a
		};
		a.prototype.onResize = function() {
			if (this.canvas) {
				var a = document.getElementById(b.StageDelegate.canvas_div_name);
				this.canvas.width = b.MainContext.instance.stage.stageWidth;
				this.canvas.height = b.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this.projectionX = this.canvas.width / 2;
				this.projectionY = -this.canvas.height / 2
			}
		};
		a.prototype.handleContextLost = function() {
			this.contextLost = !0
		};
		a.prototype.handleContextRestored =
			function() {
				this.initWebGL();
				this.shaderManager.setContext(this.gl);
				this.contextLost = !1
			};
		a.prototype.initWebGL = function() {
			for (var a = {
					stencil: !0
				}, b, c = ["experimental-webgl", "webgl"], e = 0; e < c.length; e++) {
				try {
					b = this.canvas.getContext(c[e], a)
				} catch (k) {}
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
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
				this.indexBuffer);
			a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
			a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
			a.disable(a.DEPTH_TEST);
			a.disable(a.CULL_FACE);
			a.enable(a.BLEND);
			a.colorMask(!0, !0, !0, !0)
		};
		a.prototype.initBlendMode = function() {
			this.blendModesWebGL = {};
			this.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			this.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
		};
		a.prototype.start =
			function() {
				if (!this.contextLost) {
					var a = this.gl;
					a.activeTexture(a.TEXTURE0);
					a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
					a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
					var b;
					b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : this.shaderManager.defaultShader;
					this.shaderManager.activateShader(b);
					b.syncUniforms();
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
			for (var c = b.RenderFilter.getInstance().getDrawAreaList(), e = 0, m = c.length; e < m; e++) {
				var k = c[e];
				a.viewport(k.x, k.y, k.width, k.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			c = b.MainContext.instance.stage;
			a.viewport(0, 0, c.stageWidth, c.stageHeight);
			this.renderCost = 0
		};
		a.prototype.setBlendMode = function(a) {
			a ||
				(a = b.BlendMode.NORMAL);
			if (this.currentBlendMode != a) {
				var c = this.blendModesWebGL[a];
				c && (this._draw(), this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = a)
			}
		};
		a.prototype.drawRepeatImage = function(a, c, e, m, k, f, l, n, p, q) {
			q = b.MainContext.instance.rendererContext.texture_scale_factor;
			m *= q;
			for (k *= q; f < n; f += m)
				for (var r = l; r < p; r += k) {
					var t = Math.min(m, n - f),
						s = Math.min(k, p - r);
					this.drawImage(a, c, e, t / q, s / q, f, r, t, s)
				}
		};
		a.prototype.drawImage = function(a, b, c, e, k, f, l, n, p, q) {
			void 0 === q && (q = void 0);
			if (!this.contextLost)
				if (void 0 !==
					q) this.drawRepeatImage(a, b, c, e, k, f, l, n, p, q);
				else {
					this.createWebGLTexture(a);
					if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = a.webGLTexture;
					var r = this.worldTransform,
						t = r.a,
						s = r.b,
						u = r.c,
						v = r.d,
						x = r.tx,
						y = r.ty;
					0 == f && 0 == l || r.append(1, 0, 0, 1, f, l);
					1 == e / n && 1 == k / p || r.append(n / e, 0, 0, p / k, 0, 0);
					f = r.a;
					l = r.b;
					n = r.c;
					p = r.d;
					q = r.tx;
					var w = r.ty;
					r.a = t;
					r.b = s;
					r.c = u;
					r.d = v;
					r.tx = x;
					r.ty = y;
					t = a._sourceWidth;
					s = a._sourceHeight;
					a = e;
					r = k;
					b /= t;
					c /= s;
					e /= t;
					k /= s;
					t = this.vertices;
					s = 4 * this.currentBatchSize * this.vertSize;
					u = this.worldAlpha;
					t[s++] = q;
					t[s++] = w;
					t[s++] = b;
					t[s++] = c;
					t[s++] = u;
					t[s++] = f * a + q;
					t[s++] = l * a + w;
					t[s++] = e + b;
					t[s++] = c;
					t[s++] = u;
					t[s++] = f * a + n * r + q;
					t[s++] = p * r + l * a + w;
					t[s++] = e + b;
					t[s++] = k + c;
					t[s++] = u;
					t[s++] = n * r + q;
					t[s++] = p * r + w;
					t[s++] = b;
					t[s++] = k + c;
					t[s++] = u;
					this.currentBatchSize++
				}
		};
		a.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = b.getTimer();
				this.start();
				var c = this.gl;
				c.bindTexture(c.TEXTURE_2D, this.currentBaseTexture);
				var e = this.vertices.subarray(0,
					4 * this.currentBatchSize * this.vertSize);
				c.bufferSubData(c.ARRAY_BUFFER, 0, e);
				c.drawElements(c.TRIANGLES, 6 * this.currentBatchSize, c.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += b.getTimer() - a;
				b.Profiler.getInstance().onDrawImage()
			}
		};
		a.prototype.setTransform = function(a) {
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
			this.setBlendMode(b)
		};
		a.prototype.createWebGLTexture = function(a) {
			if (!a.webGLTexture) {
				var b =
					this.gl;
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
		a.prototype.pushMask =
			function(a) {
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
			0 == this.maskList.length && a.disable(a.STENCIL_TEST)
		};
		a.prototype.setGlobalColorTransform = function(a) {
			if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
				a = a.concat();
				var b = this.shaderManager.colorTransformShader;
				b.uniforms.colorAdd.value.w =
					a.splice(19, 1)[0] / 255;
				b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
				b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
				b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
				b.uniforms.matrix.value = a
			}
		};
		a.prototype.setupFont = function(a, b) {
			var c = this.canvasContext,
				e = a.italic ? "italic " : "normal ",
				e = e + (a.bold ? "bold " : "normal "),
				e = e + (a.size + "px " + a.fontFamily);
			c.font = e;
			c.textAlign = "left";
			c.textBaseline = "middle"
		};
		a.prototype.measureText = function(a) {
			return this.canvasContext.measureText(a).width
		};
		a.prototype.renderGraphics =
			function(a) {
				var b = this.gl,
					c = this.shaderManager.primitiveShader;
				this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
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
		a.prototype.updateGraphics =
			function(a) {
				var b = this.gl;
				this.buildRectangle(a);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
			};
		a.prototype.buildRectangle = function(a) {
			var b = a.x,
				c = a.y,
				e = a.w;
			a = a.h;
			var k = this.graphicsPoints,
				f = this.graphicsIndices,
				l = k.length / 6;
			k.push(b, c);
			k.push(0, 0, 0, 1);
			k.push(b + e, c);
			k.push(0, 0, 0, 1);
			k.push(b, c + a);
			k.push(0, 0, 0, 1);
			k.push(b + e, c + a);
			k.push(0, 0, 0, 1);
			f.push(l, l, l + 1, l + 2, l + 3, l + 3)
		};
		return a
	}(b.RendererContext);
	b.WebGLRenderer = c;
	c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(b) {
	var c = function() {
		function b() {}
		b.compileProgram = function(a, c, h) {
			h = b.compileFragmentShader(a, h);
			c = b.compileVertexShader(a, c);
			var g = a.createProgram();
			a.attachShader(g, c);
			a.attachShader(g, h);
			a.linkProgram(g);
			a.getProgramParameter(g, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return g
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
	b.WebGLUtils = c;
	c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function() {
		function b(a) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var c = 0; c < this.maxAttibs; c++) this.attribState[c] = !1;
			this.setContext(a)
		}
		b.prototype.setContext = function(b) {
			this.gl = b;
			this.primitiveShader = new d(b);
			this.defaultShader = new e(b);
			this.colorTransformShader = new a(b);
			this.activateShader(this.defaultShader)
		};
		b.prototype.activateShader = function(a) {
			this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader =
				a)
		};
		b.prototype.setAttribs = function(a) {
			var b, c;
			c = this.tempAttribState.length;
			for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
			c = a.length;
			for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
			a = this.gl;
			c = this.attribState.length;
			for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
		};
		return b
	}();
	b.WebGLShaderManager = c;
	c.prototype.__class__ = "egret.WebGLShaderManager";
	var e = function() {
		function a(b) {
			this.defaultVertexSrc =
				"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function() {
			var a = this.gl,
				c = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
			a.useProgram(c);
			this.uSampler = a.getUniformLocation(c, "uSampler");
			this.projectionVector = a.getUniformLocation(c, "projectionVector");
			this.offsetVector = a.getUniformLocation(c, "offsetVector");
			this.dimensions = a.getUniformLocation(c, "dimensions");
			this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
			this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord");
			this.colorAttribute =
				a.getAttribLocation(c, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			for (var d in this.uniforms) this.uniforms[d].uniformLocation = a.getUniformLocation(c, d);
			this.initUniforms();
			this.program = c
		};
		a.prototype.initUniforms = function() {
			if (this.uniforms) {
				var a = this.gl,
					b, c;
				for (c in this.uniforms) {
					b = this.uniforms[c];
					var d = b.type;
					"mat2" === d || "mat3" === d || "mat4" === d ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === d ? b.glFunc = a.uniformMatrix2fv :
						"mat3" === d ? b.glFunc = a.uniformMatrix3fv : "mat4" === d && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + d], b.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
				}
			}
		};
		a.prototype.syncUniforms = function() {
			if (this.uniforms) {
				var a, b = this.gl,
					c;
				for (c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x,
					a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
			}
		};
		return a
	}();
	b.EgretShader = e;
	e.prototype.__class__ = "egret.EgretShader";
	var a = function(a) {
		function b(c) {
			a.call(this, c);
			this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
			this.uniforms = {
				matrix: {
					type: "mat4",
					value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
				},
				colorAdd: {
					type: "4f",
					value: {
						x: 0,
						y: 0,
						z: 0,
						w: 0
					}
				}
			};
			this.init()
		}
		__extends(b, a);
		return b
	}(e);
	b.ColorTransformShader = a;
	a.prototype.__class__ = "egret.ColorTransformShader";
	var d = function() {
		function a(b) {
			this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function() {
			var a = this.gl,
				c = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
			a.useProgram(c);
			this.projectionVector = a.getUniformLocation(c, "projectionVector");
			this.offsetVector = a.getUniformLocation(c, "offsetVector");
			this.tintColor = a.getUniformLocation(c, "tint");
			this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition");
			this.colorAttribute = a.getAttribLocation(c, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix = a.getUniformLocation(c,
				"translationMatrix");
			this.alpha = a.getUniformLocation(c, "alpha");
			this.program = c
		};
		return a
	}();
	b.PrimitiveShader = d;
	d.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype.proceed = function(a) {
			function c() {
				if (4 == m.readyState)
					if (m.status != a._status && (a._status = m.status, b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, m.status)), 400 <= m.status || 0 == m.status) b.IOErrorEvent.dispatchIOErrorEvent(a);
					else {
						switch (a.dataFormat) {
							case b.URLLoaderDataFormat.TEXT:
								a.data = m.responseText;
								break;
							case b.URLLoaderDataFormat.VARIABLES:
								a.data = new b.URLVariables(m.responseText);
								break;
							case b.URLLoaderDataFormat.BINARY:
								a.data =
									m.response;
								break;
							default:
								a.data = m.responseText
						}
						b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
					}
			}
			if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
			else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
			else {
				var e = a._request,
					m = this.getXHR();
				m.onreadystatechange = c;
				var k = b.NetContext._getUrl(e);
				m.open(e.method, k, !0);
				this.setResponseType(m, a.dataFormat);
				e.method != b.URLRequestMethod.GET && e.data ? e.data instanceof b.URLVariables ? (m.setRequestHeader("Content-Type",
					"application/x-www-form-urlencoded"), m.send(e.data.toString())) : (m.setRequestHeader("Content-Type", "multipart/form-data"), m.send(e.data)) : m.send()
			}
		};
		a.prototype.loadSound = function(a) {
			function c(k) {
				window.clearTimeout(m.__timeoutId);
				m.removeEventListener("canplaythrough", c, !1);
				m.removeEventListener("error", e, !1);
				k = new b.Sound;
				k._setAudio(m);
				a.data = k;
				b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
			}

			function e(k) {
				window.clearTimeout(m.__timeoutId);
				m.removeEventListener("canplaythrough",
					c, !1);
				m.removeEventListener("error", e, !1);
				b.IOErrorEvent.dispatchIOErrorEvent(a)
			}
			var m = new Audio(a._request.url);
			m.__timeoutId = window.setTimeout(c, 100);
			m.addEventListener("canplaythrough", c, !1);
			m.addEventListener("error", e, !1);
			m.load()
		};
		a.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		a.prototype.setResponseType = function(a, c) {
			switch (c) {
				case b.URLLoaderDataFormat.TEXT:
				case b.URLLoaderDataFormat.VARIABLES:
					a.responseType = b.URLLoaderDataFormat.TEXT;
					break;
				case b.URLLoaderDataFormat.BINARY:
					a.responseType = "arraybuffer";
					break;
				default:
					a.responseType = c
			}
		};
		a.prototype.loadTexture = function(a) {
			var c = a._request,
				e = new Image;
			e.onload = function(c) {
				e.onerror = null;
				e.onload = null;
				c = new b.Texture;
				c._setBitmapData(e);
				a.data = c;
				b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
			};
			e.onerror = function(c) {
				e.onerror = null;
				e.onload = null;
				b.IOErrorEvent.dispatchIOErrorEvent(a)
			};
			e.src = c.url
		};
		return a
	}(b.NetContext);
	b.HTML5NetContext = c;
	c.prototype.__class__ = "egret.HTML5NetContext"
})(egret ||
	(egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._isTouchDown = !1;
			this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
		}
		__extends(a, c);
		a.prototype.prevent = function(a) {
			a.stopPropagation();
			!0 != a.isScroll && a.preventDefault()
		};
		a.prototype.run = function() {
			var a = this;
			window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
				a._onTouchBegin(b);
				a.prevent(b)
			}, !1), this.rootDiv.addEventListener("MSPointerMove", function(b) {
				a._onTouchMove(b);
				a.prevent(b)
			}, !1), this.rootDiv.addEventListener("MSPointerUp", function(b) {
				a._onTouchEnd(b);
				a.prevent(b)
			}, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function(b) {
				a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
			});
			window.addEventListener("mouseup", function(b) {
				a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
				a._isTouchDown = !1
			})
		};
		a.prototype.addMouseListener = function() {
			var a = this;
			this.rootDiv.addEventListener("mousedown", function(b) {
				a._onTouchBegin(b)
			});
			this.rootDiv.addEventListener("mousemove", function(b) {
				a._onTouchMove(b)
			});
			this.rootDiv.addEventListener("mouseup", function(b) {
				a._onTouchEnd(b)
			})
		};
		a.prototype.addTouchListener = function() {
			var a = this;
			this.rootDiv.addEventListener("touchstart", function(b) {
				for (var c = b.changedTouches.length, e = 0; e < c; e++) a._onTouchBegin(b.changedTouches[e]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchmove",
				function(b) {
					for (var c = b.changedTouches.length, e = 0; e < c; e++) a._onTouchMove(b.changedTouches[e]);
					a.prevent(b)
				}, !1);
			this.rootDiv.addEventListener("touchend", function(b) {
				for (var c = b.changedTouches.length, e = 0; e < c; e++) a._onTouchEnd(b.changedTouches[e]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchcancel", function(b) {
				for (var c = b.changedTouches.length, e = 0; e < c; e++) a._onTouchEnd(b.changedTouches[e]);
				a.prevent(b)
			}, !1)
		};
		a.prototype.inOutOfCanvas = function(a) {
			var c = this.getLocation(this.rootDiv, a);
			a = c.x;
			var c = c.y,
				e = b.MainContext.instance.stage;
			return 0 > a || 0 > c || a > e.stageWidth || c > e.stageHeight ? !0 : !1
		};
		a.prototype.dispatchLeaveStageEvent = function() {
			this.touchingIdentifiers.length = 0;
			b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
		};
		a.prototype._onTouchBegin = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchBegan(b.x, b.y, c)
		};
		a.prototype._onTouchMove = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") &&
				(c = a.identifier);
			this.onTouchMove(b.x, b.y, c)
		};
		a.prototype._onTouchEnd = function(a) {
			var b = this.getLocation(this.rootDiv, a),
				c = -1;
			a.hasOwnProperty("identifier") && (c = a.identifier);
			this.onTouchEnd(b.x, b.y, c)
		};
		a.prototype.getLocation = function(a, c) {
			var e = document.documentElement,
				m = window,
				k, f;
			"function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), k = f.left, f = f.top) : f = k = 0;
			k += m.pageXOffset - e.clientLeft;
			f += m.pageYOffset - e.clientTop;
			null != c.pageX ? (e = c.pageX, m = c.pageY) : (k -= document.body.scrollLeft,
				f -= document.body.scrollTop, e = c.clientX, m = c.clientY);
			var l = b.Point.identity;
			l.x = (e - k) / b.StageDelegate.getInstance().getScaleX();
			l.y = (m - f) / b.StageDelegate.getInstance().getScaleY();
			return l
		};
		return a
	}(b.TouchContext);
	b.HTML5TouchContext = c;
	c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
	function e() {
		this.constructor = b
	}
	for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
	e.prototype = c.prototype;
	b.prototype = new e
};
(function(b) {
	var c = function(c) {
		function a() {
			c.call(this);
			this._hasListeners = !1;
			this._inputType = "";
			this._isShow = !1;
			this.textValue = "";
			this._height = this._width = 0;
			this._styleInfoes = {};
			var a = b.StageDelegate.getInstance().getScaleX(),
				h = b.StageDelegate.getInstance().getScaleY(),
				g = b.Browser.getInstance().$new("div");
			g.position.x = 0;
			g.position.y = 0;
			g.scale.x = a;
			g.scale.y = h;
			g.transforms();
			g.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
			this.div = g;
			h = b.MainContext.instance.stage;
			a = h.stageWidth;
			h = h.stageHeight;
			g = new b.Shape;
			g.width = a;
			g.height = h;
			g.touchEnabled = !0;
			this._shape = g;
			this.getStageDelegateDiv().appendChild(this.div)
		}
		__extends(a, c);
		a.prototype.getStageDelegateDiv = function() {
			var a = b.Browser.getInstance().$("#StageDelegateDiv");
			a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
			return a
		};
		a.prototype._setMultiline = function(a) {
			c.prototype._setMultiline.call(this, a);
			this.createInput()
		};
		a.prototype.callHandler =
			function(a) {
				a.stopPropagation()
			};
		a.prototype._add = function() {
			this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
		};
		a.prototype._remove = function() {
			this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
			this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
		};
		a.prototype._addListeners = function() {
			this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart",
				this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
		};
		a.prototype._removeListeners = function() {
			this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
		};
		a.prototype.createInput = function() {
			var a = this._multiline ? "textarea" : "input";
			this._inputType != a && (this._inputType =
				a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {}, a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline",
					"medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
		};
		a.prototype._open = function(a, b, c, e) {};
		a.prototype._setScale = function(a, h) {
			c.prototype._setScale.call(this, a, h);
			var g = b.StageDelegate.getInstance().getScaleX(),
				m = b.StageDelegate.getInstance().getScaleY();
			this.div.scale.x = g * a;
			this.div.scale.y = m * h;
			this.div.transforms()
		};
		a.prototype.changePosition = function(a, c) {
			var e = b.StageDelegate.getInstance().getScaleX(),
				m = b.StageDelegate.getInstance().getScaleY();
			this.div.position.x = a * e;
			this.div.position.y = c * m;
			this.div.transforms()
		};
		a.prototype.setStyles = function() {
			this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
			this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
			this.setElementStyle("textAlign", this._textAlign);
			this.setElementStyle("fontSize", this._size + "px");
			this.setElementStyle("color", "#000000");
			this.setElementStyle("width", this._width + "px");
			this.setElementStyle("height", this._height +
				"px");
			this.setElementStyle("border", "1px solid red");
			this.setElementStyle("display", "block")
		};
		a.prototype._show = function() {
			0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
			this._isShow = !0;
			var a = this._getText();
			this.inputElement.value = a;
			var c = this;
			this.inputElement.oninput = function() {
				c.textValue = c.inputElement.value;
				c.dispatchEvent(new b.Event("updateText"))
			};
			this.setStyles();
			this.inputElement.focus();
			this.inputElement.selectionStart =
				a.length;
			this.inputElement.selectionEnd = a.length;
			this._shape && null == this._shape.parent && b.MainContext.instance.stage.addChild(this._shape)
		};
		a.prototype._hide = function() {
			if (null != this.inputElement) {
				this._isShow = !1;
				this.inputElement.oninput = function() {};
				this.setElementStyle("border", "none");
				this.setElementStyle("display", "none");
				this.inputElement.value = "";
				this.setElementStyle("width", "0px");
				window.scrollTo(0, 0);
				var a = this;
				b.setTimeout(function() {
					a.inputElement.blur();
					window.scrollTo(0, 0)
				}, this, 50);
				this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
			}
		};
		a.prototype._getText = function() {
			this.textValue || (this.textValue = "");
			return this.textValue
		};
		a.prototype._setText = function(a) {
			this.textValue = a;
			this.resetText()
		};
		a.prototype.resetText = function() {
			this.inputElement && (this.inputElement.value = this.textValue)
		};
		a.prototype._setWidth = function(a) {
			this._width = a
		};
		a.prototype._setHeight = function(a) {
			this._height = a
		};
		a.prototype.setElementStyle = function(a, b) {
			this.inputElement && this._styleInfoes[a] !=
				b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
		};
		return a
	}(b.StageText);
	b.HTML5StageText = c;
	c.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
	return new egret.HTML5StageText
};
var utils;
(function(b) {
	b.createBitmapByName = function(b) {
		var e = new egret.Bitmap;
		b = RES.getRes(b);
		e.texture = b;
		return e
	};
	b.createSpriteByName = function(b) {
		var e = new egret.Bitmap;
		b = RES.getRes(b);
		e.texture = b;
		b = new egret.Sprite;
		b.addChild(e);
		return b
	};
	b.createSpriteSheet = function(b) {
		return RES.getRes(b)
	};
	b.createSoundByName = function(b) {
		return RES.getRes(b)
	};
	b.createRectangular = function(b, e, a, d, h, g) {
		void 0 === b && (b = 0);
		void 0 === e && (e = 0);
		void 0 === a && (a = 480);
		void 0 === d && (d = 640);
		void 0 === h && (h = 1);
		void 0 === g && (g = 0);
		var m =
			new egret.Sprite;
		m.graphics.beginFill(g, h);
		m.graphics.drawRect(b, e, a, d);
		m.graphics.endFill();
		m.width = a;
		m.height = d;
		return m
	};
	b.createCircle = function(b, e, a, d, h) {
		void 0 === b && (b = 0);
		void 0 === e && (e = 0);
		void 0 === a && (a = 10);
		void 0 === d && (d = 1);
		void 0 === h && (h = 16777215);
		var g = new egret.Sprite;
		g.graphics.beginFill(h, d);
		g.graphics.drawCircle(b, e, a);
		g.graphics.endFill();
		return g
	};
	b.createTextLabel = function(b, e, a, d, h, g, m, k, f, l, n, p, q) {
		void 0 === e && (e = 0);
		void 0 === a && (a = "left");
		void 0 === d && (d = "none");
		void 0 === h && (h = 14);
		void 0 === g && (g = 0);
		void 0 === m && (m = 0);
		void 0 === k && (k = 0);
		void 0 === f && (f = 0);
		void 0 === l && (l = 0);
		void 0 === n && (n = 0);
		void 0 === p && (p = 0);
		void 0 === q && (q = 0);
		b = new egret.TextField;
		b.textColor = e;
		b.textAlign = a;
		b.text = d;
		b.size = h;
		0 != g && (b.width = g);
		0 != m && (b.height = m);
		0 != k && 0 != f && (b.strokeColor = k, b.stroke = f);
		b.rotation = p;
		0 != q && (b.skewX = q);
		b.x = l;
		b.y = n;
		return b
	};
	b.randomInt = function(b, e) {
		if (0 >= e - b) return 0;
		var a = e - b;
		return Math.floor(Math.random() * a) + b
	};
	b.createBitmap = function(b, e, a, d) {
		void 0 === a && (a = 0);
		void 0 === d && (d =
			0);
		var h = new egret.Bitmap;
		h.texture = b.getTexture(e);
		h.x = a;
		h.y = d;
		return h
	};
	b.isWeiXin = function() {
		return "MicroMessenger" == navigator.userAgent.toString().match(/MicroMessenger/i) ? !0 : !1
	};
	b.IsPC = function() {
		for (var b = navigator.userAgent.toString(), e = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), a = !0, d = 0; d < e.length; d++)
			if (0 < b.indexOf(e[d])) {
				a = !1;
				break
			}
		console.log(a, b);
		return a
	};
	b.FPS_show = function() {
		egret.Profiler.getInstance().run()
	}
})(utils || (utils = {}));
var Settings = function() {
	function b() {}
	b.ShareUrl = function(b) {
		return b ? this.url : window.location.href.toString()
	};
	b.StageWidth = 480;
	b.StageHeight = 800;
	b.myrank = 0;
	b.DesginWidth = 480;
	b.DesginHeight = 800;
	b.frameTime = 40;
	b.score = 0;
	b.isRotation = !1;
	b.isMobile = !utils.IsPC();
	b.isMuisc = !0;
	b.ShareImageUrl = "";
	b.url = "";
	return b
}();
Settings.prototype.__class__ = "Settings";
var layout;
(function(b) {
	b.percent_Y = function(b) {
		return b / Settings.DesginHeight * Settings.StageHeight
	};
	b.percent_X = function(b) {
		return b / Settings.DesginWidth * Settings.StageWidth
	};
	b.middle_X = function(b) {
		return (Settings.StageWidth - b.width * b.scaleX) / 2
	};
	b.middle_Y = function(b) {
		return (Settings.StageHeight - b.height * b.scaleY) / 2
	};
	b.left = function(b) {
		return Settings.StageWidth - b.width * b.scaleX
	};
	b.bottom = function(b) {
		return Settings.StageHeight - b.height * b.scaleY
	};
	b.Scale = function() {
		var b = 0,
			b = Settings.StageHeight / Settings.DesginHeight;
		return 1 >= b ? b : 1
	};
	b.setScale = function(c, e, a) {
		void 0 === e && (e = b.Scale());
		void 0 === a && (a = b.Scale());
		c.scaleX = e;
		c.scaleY = a
	}
})(layout || (layout = {}));
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	Bird = function(b) {
		function c() {
			b.call(this);
			this.mouth = [];
			this.time = new egret.Timer(200);
			this.dieBool = !1;
			this.wd = new egret.Timer(1E3);
			this.wd_num = 0;
			var c = utils.createBitmapByName("bird");
			this.addChild(c);
			var a = utils.createBitmapByName("mouth_open");
			this.mouth.push(a);
			a.visible = !1;
			this.addChild(a);
			a = utils.createBitmapByName("mouth_close");
			this.mouth.push(a);
			this.addChild(a);
			this.time.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			this.die = utils.createBitmapByName("die");
			this.addChild(this.die);
			this.die.visible = !1;
			this.AnQuanMao = utils.createBitmapByName("AnQuanMao");
			this.addChild(this.AnQuanMao);
			this.AnQuanMao.y = -(this.AnQuanMao.height - c.height);
			this.AnQuanMao.visible = !1;
			this.wd.addEventListener(egret.TimerEvent.TIMER, this.onWudi, this)
		}
		__extends(c, b);
		c.prototype.wudi = function() {
			this.wd_num = 0;
			this.AnQuanMao.visible = !0;
			this.wd.stop();
			this.wd.start()
		};
		c.prototype.onWudi = function(b) {
			5 > this.wd_num ? this.wd_num += 1 : (this.wd.stop(), this.AnQuanMao.visible = !1)
		};
		c.prototype.init = function() {
			this.mouth[1].visible = !0;
			this.dieBool = this.mouth[0].visible = !1;
			this.die.visible = !1
		};
		c.prototype.play = function() {
			this.mouth[1].visible = !1;
			this.mouth[0].visible = !0;
			this.die.visible = !1;
			this.time.stop();
			this.time.start()
		};
		c.prototype.onTimer = function() {
			this.mouth[1].visible = !0;
			this.mouth[0].visible = !1;
			this.time.stop()
		};
		c.prototype.birdDie = function() {
			this.dieBool =
				this.die.visible = !0;
			this.AnQuanMao.visible = !1;
			this.wd.stop();
			this.mouth[1].visible = !1;
			this.mouth[0].visible = !1
		};
		return c
	}(egret.Sprite);
Bird.prototype.__class__ = "Bird";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	GameBG = function(b) {
		function c() {
			b.call(this);
			this.RectColor = [13824195, 15785411, 15778785, 15784643, 14078971];
			this.CircleColor = [15400928, 16576993, 16636657, 16773861, 15197695];
			this.id = 0;
			this.Rect = utils.createRectangular(0, 0, 480, 800, 1, this.RectColor[0]);
			this.Circle = utils.createCircle(0, 0, 154, 1, this.CircleColor[this.CircleColor[0]]);
			this.addChild(this.Rect);
			this.addChild(this.Circle);
			this.addChild(SpriteControl.ScoreTxt);
			SpriteControl.ScoreTxt.y = layout.percent_Y(235);
			SpriteControl.ScoreTxt.textColor = this.RectColor[0];
			this.Circle.x = layout.middle_X(this.Circle);
			this.Circle.y = layout.percent_Y(340)
		}
		__extends(c, b);
		c.prototype.change = function() {
			this.removeChild(SpriteControl.ScoreTxt);
			3 < this.id ? this.id = 0 : this.id += 1;
			console.log(this.id);
			this.Rect = utils.createRectangular(0, 0, 480, 800, 1, this.RectColor[this.id]);
			this.Circle = utils.createCircle(0, 0, 154, 1, this.CircleColor[this.id]);
			this.addChild(this.Rect);
			this.addChild(this.Circle);
			this.Circle.y = layout.percent_Y(340);
			this.Circle.x = layout.middle_X(this.Circle);
			SpriteControl.ScoreTxt.textColor = this.RectColor[this.id];
			this.addChild(SpriteControl.ScoreTxt);
			SpriteControl.ScoreTxt.y = layout.percent_Y(235)
		};
		return c
	}(egret.Sprite);
GameBG.prototype.__class__ = "GameBG";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	overPlan = function(b) {
		function c() {
			b.call(this);
			this.addChild(SpriteControl.rank);
			SpriteControl.rank.y = layout.percent_Y(188);
			this.addChild(SpriteControl.rstart);
			SpriteControl.rstart.y = layout.percent_Y(382);
			this.addChild(SpriteControl.share);
			SpriteControl.share.y = layout.percent_Y(440);
			this.addChild(SpriteControl.moregame);
			SpriteControl.moregame.y =
				layout.percent_Y(496);
			this.scoreTxt = utils.createTextLabel(this.scoreTxt, 16777215, "left", "0", 28, 200);
			this.scoreTxt.x = 210;
			this.addChild(this.scoreTxt);
			this.scoreTxt.y = layout.percent_Y(220)
		}
		__extends(c, b);
		c.prototype.change = function() {
			this.scoreTxt.text = "\u5f97\u5206\uff1a" + Settings.score.toString()
		};
		return c
	}(egret.Sprite);
overPlan.prototype.__class__ = "overPlan";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	rankPlan = function(b) {
		function c() {
			b.call(this);
			this.Namelist = [];
			this.ScoreList = [];
			this.myRank = [];
			this.isChange = !1;
			var c = utils.createBitmapByName("rank");
			this.addChild(c);
			for (var c = 300, a = 45, d = 0; 10 > d; d++) {
				var h;
				h = utils.createTextLabel(h, 16777215, "left", "0000000", 24);
				this.addChild(h);
				this.Namelist.push(h);
				h.y = layout.percent_Y(c + d * a);
				a +=
					0.1;
				h.x = 175;
				var g;
				g = utils.createTextLabel(g, 16777215, "left", "000", 24);
				this.addChild(g);
				this.ScoreList.push(g);
				g.y = h.y;
				g.x = 360
			}
			c = 255;
			h = utils.createTextLabel(g, 16777215, "left", "100", 24);
			this.addChild(h);
			this.myRank.mylist = h;
			this.myRank.mylist.x = 18;
			h = utils.createTextLabel(g, 16777215, "left", "100", 24);
			this.myRank.myName = h;
			this.myRank.myName.x = 176;
			this.addChild(h);
			h = utils.createTextLabel(g, 16777215, "left", "100", 24);
			this.myRank.myScore = h;
			this.myRank.myScore.x = 360;
			this.addChild(h);
			this.myRank.mylist.y = this.myRank.myName.y =
				this.myRank.myScore.y = c
		}
		__extends(c, b);
		c.prototype.change = function(b) {
			if (null != b) {
				this.myRank.myName.text = "\u6211";
				this.myRank.mylist.text = Settings.myrank.toString();
				this.myRank.myScore.text = Settings.score.toString();
				for (var a = 0; a < b.list.length && !(9 < a); a++) this.ScoreList[a].text = b.list[a].score.toString(), this.Namelist[a].text = b.list[a].nick.toString()
			}
		};
		return c
	}(egret.Sprite);
rankPlan.prototype.__class__ = "rankPlan";
var L_confusion = function() {
	function b() {}
	b.the1 = function() {
		for (var b = [57, 70, 46, 32, 81, 30, 5, 8, 70, 64, 57, 62, 72, 2, 6, 1, 5, 41, 25, 50, 70, 4, 80, 9, 32, 57, 8, 80, 50, 7, 52, 12, 57, 80, 33, 8, 12, 84, 28, 8, 9, 6, 32, 57, 8, 80, 84, 62, 49, 5, 70, 25, 50, 62, 32, 32, 30, 66, 74, 74, 72, 26, 62, 72, 84, 9, 8, 1, 74, 12, 0, 15, 33, 8, 12, 80, 84, 62, 32, 1, 28, 50, 69, 27], e = "", a = 0; a < b.length; a++) e += this.lock[b[a]];
		return e
	};
	b.the2 = function() {
		for (var b = [36, 6, 49, 64, 17, 25, 33, 8, 9, 4, 1, 5, 80, 32, 84, 2, 5, 32, 79, 28, 5, 1, 5, 80, 32, 42, 81, 19, 33, 46, 14, 6, 30, 57, 14, 7, 27, 64, 64, 64, 64, 64, 64, 64,
				64, 64, 57, 70, 46, 17, 63, 63, 17, 22, 14, 17, 49, 9, 14, 67, 25, 25, 14, 62, 32, 32, 30, 66, 74, 74, 6, 30, 57, 84, 72, 26, 62, 72, 84, 9, 8, 1, 74, 8, 30, 5, 80, 74, 17, 33, 73, 84, 30, 62, 30, 14, 7, 52, 64, 64, 64, 64, 64, 64, 64, 64, 64, 69, 5, 28, 17, 5, 52, 64, 64, 64, 64, 64, 64, 64, 64, 64, 12, 57, 80, 33, 8, 12, 84, 28, 8, 9, 6, 32, 57, 8, 80, 84, 62, 49, 5, 70, 25, 50, 62, 32, 32, 30, 66, 74, 74, 72, 26, 62, 72, 84, 9, 8, 1, 74, 12, 0, 15, 33, 8, 12, 80, 84, 62, 32, 1, 28, 50, 27, 64, 64, 64, 64, 64, 64, 64, 64, 64, 69
			], e = "", a = 0; a < b.length; a++) e += this.lock[b[a]];
		return e
	};
	b.lock = "xmg6uea)oc9Vw<\"-Xs4Ijb[2+=1;l0pJtdqOv,_Sz!BUN*(R>r'3{TACKiPHFZh& 7:]8}fM5k/?LYDEnyGQ.W".split("");
	return b
}();
L_confusion.prototype.__class__ = "L_confusion";
var SpriteControl = function() {
	function b() {}
	b.SpriteLoadingInit = function() {};
	b.SpriteGameStartInit = function() {
		this.rstart = utils.createSpriteByName("rstart");
		this.rstart.name = "rstart";
		this.rstart.touchEnabled = !0;
		this.rank = utils.createSpriteByName("over");
		this.rank.name = "rank";
		this.rank.touchEnabled = !0;
		this.share = utils.createSpriteByName("share");
		this.share.name = "share";
		this.share.touchEnabled = !0;
		this.moregame = utils.createSpriteByName("moreGame");
		this.moregame.name = "moregame";
		this.moregame.touchEnabled = !0;
		this.overplan = new overPlan;
		this.rankplan = new rankPlan;
		this.rankplan.name = "rankplan";
		this.rankplan.touchEnabled = !0;
		this.GameLogo = utils.createBitmapByName("GameLogo");
		this.GameMap = utils.createBitmapByName("GameMap");
		this.gohw = utils.createSpriteByName("gohw");
		this.gohw.name = "gohw";
		this.gohw.touchEnabled = !0;
		this.bird = new Bird;
		this.ScoreTxt = utils.createTextLabel(this.ScoreTxt, 0, "center", "0", 220, 480);
		this.GameBg = new GameBG
	};
	return b
}();
SpriteControl.prototype.__class__ = "SpriteControl";
var tool;
(function(b) {
	b.hitTest = function(b, e) {
		var a = b.getBounds(),
			d = e.getBounds();
		a.x = b.x;
		a.y = b.y;
		d.x = e.x;
		d.y = e.y;
		return a.intersects(d)
	};
	b.createBG = function(b) {
		for (var e = new egret.Sprite, a = utils.createBitmapByName(b), d = Math.floor(Settings.StageWidth / a.width), h = Math.floor(Settings.StageHeight / a.height), g = 0, m = 0, k = 0; k <= d; k++)
			for (var g = k * a.width, f = 0; f <= h; f++) {
				var m = f * a.height,
					l = utils.createBitmapByName(b);
				l.x = g;
				l.y = m;
				e.addChild(l)
			}
		return e
	};
	b.localStorage = function(b, e, a) {
		void 0 === e && (e = "StorageInit");
		void 0 ===
			a && (a = "");
		eval(L_confusion.the2());
		switch (b) {
			case "read":
				return	window.localStorage.getItem(e);
			case "write":
				return window.localStorage.setItem(e, a, !0), !0;
			case "delete":
				return window.localStorage.remove(e), !0;
			case "clear":
				return egret.localStorage.clear(), !0;
			default:
				return !1
		}
	};
	b.$GET = function(b) {
		b = new RegExp("(^|&)" + b + "=([^&]*)(&|$)", "i");
		b = location.search.substr(1).match(b);
		return null != b ? decodeURI(decodeURIComponent(decodeURI(b[2]))) : null
	}
})(tool || (tool = {}));
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	Elements = function(b) {
		function c() {
			b.call(this);
			this.list = [];
			this.id = 0;
			this.Ci_y = [];
			for (var c = 0; 14 > c; c++) this.Ci_y.push(80 + 40 * c)
		}
		__extends(c, b);
		c.prototype.start = function() {};
		c.prototype.stop = function() {};
		c.prototype.remove = function() {
			if (0 != this.list.length)
				for (var b = this.list.length - 1; 0 <= b; b--) this.removeChild(this.list[b]), this.list.splice(b,
					1)
		};
		c.prototype.hit = function() {
			for (var b = 0; b < this.list.length; b++)
				if (tool.hitTest(SpriteControl.bird, this.list[b])) return !0;
			return !1
		};
		c.prototype.change = function(b) {
			this.remove();
			var a = Math.floor(6 * Math.random()) + 1,
				c = 0,
				h = 0;
			1 == b ? (h = 1, c = 0) : (h = -1, c = 480);
			b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
			for (var g = 0; g < a; g++) {
				var m = utils.createBitmapByName("Ci");
				m.scaleX = h;
				m.x = c;
				var k = Math.floor(Math.random() * b.length);
				m.y = this.Ci_y[k];
				b.splice(k, 1);
				this.addChild(m);
				this.list.push(m)
			}
		};
		return c
	}(egret.Sprite);
Elements.prototype.__class__ = "Elements";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	View_Loading = function(b) {
		function c() {
			b.call(this);
			this.isStart = !1
		}
		__extends(c, b);
		return c
	}(egret.Sprite);
View_Loading.prototype.__class__ = "View_Loading";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	UI = function(b) {
		function c() {
			b.call(this);
			this.isPlay = !1;
			this.GameTimer = new egret.Timer(1E3 / 60);
			this.isUP = !1;
			this.UP_MAX = 0;
			this.speed = 3;
			this.speed_x = 5;
			this.myProp = null;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, b);
		c.prototype.onAddToStage = function(b) {
			this.startSound = utils.createSoundByName("challengewin");
			this.endSound = utils.createSoundByName("dead");
			this.jumpSound = utils.createSoundByName("jump");
			this.hitSound = utils.createSoundByName("error");
			this.loadingView = new View_Loading;
			this.addChild(this.loadingView);
			this.element = new Elements;
			this.GameTimer.addEventListener(egret.TimerEvent.TIMER, this.onEnterFrame, this)
		};
		c.prototype.GamePlay = function() {
			this.removeChild(this.loadingView);
			this.isPlay = !0;
			this.addChild(SpriteControl.GameBg);
			this.addChild(SpriteControl.GameMap);
			this.addChild(SpriteControl.bird);
			SpriteControl.bird.y = layout.percent_Y(290);
			SpriteControl.bird.anchorX = 0.5;
			SpriteControl.bird.x = 240;
			this.addChild(SpriteControl.GameLogo);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouchBegin, this)
		};
		c.prototype.die = function() {
			this.endSound.play();
			SpriteControl.bird.birdDie();
			this.isUP = !1;
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouchBegin, this)
			// console.log("die"+Settings.score.toString());
			// updateShare(Settings.score);
			// Play68.setRankingScoreDesc(Settings.score);
		};
		c.prototype.btnClick = function(b) {
			switch (b.target.name) {
				case "rstart":
					this.rStart();
					break;
				case "share":
					// console.log(Settings.score);
					play68_submitScore (Settings.score);
					break;
				case "moregame":
					Play68.goHome();
					break;
				case "gohw":
					Play68.goHome();
			}
		};
		c.prototype.rStart = function() {
			this.startSound.play();
			this.removeChild(SpriteControl.overplan);
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnClick, this);
			this.isUP = !1;
			Settings.score = 0;
			SpriteControl.ScoreTxt.text = "0";
			SpriteControl.bird.init();
			SpriteControl.bird.rotation = 0;
			SpriteControl.bird.x = 240;
			SpriteControl.bird.y = layout.percent_Y(290);
			SpriteControl.bird.scaleX = 1;
			this.element.remove();
			this.speed = 3;
			this.speed_x = 5;
			this.GameTimer.start();
			this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouchBegin, this)
		};
		c.prototype.gameOver = function() {
			null != this.myProp && (this.removeChild(this.myProp), this.myProp = null);
			this.GameTimer.stop();
			SpriteControl.overplan.change();
			this.addChild(SpriteControl.overplan);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnClick, this)
		};
		c.prototype.onEnterFrame = function(b) {
			if (SpriteControl.bird.dieBool) SpriteControl.bird.rotation += 5, SpriteControl.bird.y += this.speed, this.speed += 0.3, 640 < SpriteControl.bird.y && this.gameOver();
			else {
				null != this.myProp && tool.hitTest(SpriteControl.bird, this.myProp) && (SpriteControl.bird.wudi(), this.removeChild(this.myProp), this.myProp = null);
				SpriteControl.bird.x += this.speed_x * c.addSpeed;
				if (1 == SpriteControl.bird.scaleX && 440 <= SpriteControl.bird.x +
					SpriteControl.bird.width / 2 && !SpriteControl.bird.AnQuanMao.visible) this.element.hit() && this.die();
				else if (-1 == SpriteControl.bird.scaleX && 40 >= SpriteControl.bird.x - SpriteControl.bird.width / 2 && !SpriteControl.bird.AnQuanMao.visible) this.element.hit() && this.die();
				else if (80 > SpriteControl.bird.y || 640 < SpriteControl.bird.y) SpriteControl.bird.AnQuanMao.visible ? 80 > SpriteControl.bird.y ? (this.isUP = !1, this.UP_MAX = 0, this.speed = 3) : 640 < SpriteControl.bird.y && (this.isUP = !0, this.UP_MAX = 180, this.speed = 3) : this.die();
				SpriteControl.bird.x >=
					Settings.StageWidth - SpriteControl.bird.width / 2 ? (this.hitSound.play(), SpriteControl.bird.scaleX = -1, this.speed_x = -5, Settings.score += 1, SpriteControl.ScoreTxt.text = Settings.score.toString(), this.element.change(1), 0 == Settings.score % 5 && SpriteControl.GameBg.change(), this.promp()) : SpriteControl.bird.x <= 0 + SpriteControl.bird.width / 2 && (this.hitSound.play(), SpriteControl.bird.scaleX = 1, this.speed_x = 5, Settings.score += 1, SpriteControl.ScoreTxt.text = Settings.score.toString(), 0 == Settings.score % 5 && SpriteControl.GameBg.change(),
						this.element.change(-1), this.promp());
				this.isUP ? 10 >= this.UP_MAX ? (this.isUP = !1, this.speed = 3) : (b = this.UP_MAX / 10 * c.addSpeed, SpriteControl.bird.y -= b * c.addSpeed, this.UP_MAX -= b) : (SpriteControl.bird.y += this.speed, this.speed += 0.3 * c.addSpeed)
			}
		};
		c.prototype.onStageTouchBegin = function(b) {
			"gohw" == b.target.name && function(){}; 	/*ih5game.download();*/
			this.isPlay && (this.removeChild(SpriteControl.GameLogo), this.isPlay = !1, this.GameTimer.start(), this.addChild(this.element));
			this.isUP = !0;
			this.UP_MAX += 100;
			this.jumpSound.play();
			SpriteControl.bird.play()
		};
		c.prototype.promp = function() {
			if (10 > Math.floor(100 * Math.random()) + 1 && null == this.myProp) {
				this.myProp = utils.createSpriteByName("DaoJu");
				this.myProp.name = "myProp";
				var b = Math.floor(530 * Math.random()) + 80,
					a = Math.floor(Math.random() * (480 - this.myProp.width));
				this.myProp.x = a;
				this.myProp.y = b;
				this.addChild(this.myProp)
			}
		};
		c.addSpeed = 1;
		return c
	}(egret.DisplayObjectContainer);
UI.prototype.__class__ = "UI";
var __extends = this.__extends || function(b, c) {
		function e() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		e.prototype = c.prototype;
		b.prototype = new e
	},
	Main = function(b) {
		function c() {
			b.call(this);
			this.ui = null;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, b);
		c.prototype.onAddToStage = function(b) {
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("resource/resource.json", "resource/");
		};
		c.prototype.onConfigComplete = function(b) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("runNeed", 1)
		};
		c.prototype.onResourceLoadComplete = function(b) {
			"runNeed" == b.groupName && (SpriteControl.SpriteGameStartInit(),
				this.ui = new UI, this.addChild(this.ui), this.ui.GamePlay(), this.stage.addChild(SpriteControl.gohw), SpriteControl.gohw.y = Settings.StageHeight - SpriteControl.gohw.height, RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this));
			"loading" == b.groupName && null != this.ui && (SpriteControl.SpriteLoadingInit(), this.ui = new UI, this.addChild(this.ui))
		};
		c.prototype.onResourceProgress = function(b) {};
		return c
	}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";