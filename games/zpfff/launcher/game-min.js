var egret;
(function (b) {
	var d = function () {
		function b() {
			this._hashCode = b.hashCount++
		}
		Object.defineProperty(b.prototype, "hashCode", {
			get : function () {
				return this._hashCode
			},
			enumerable : !0,
			configurable : !0
		});
		b.hashCount = 1;
		return b
	}
	();
	b.HashObject = d;
	d.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(c) {
			void 0 === c && (c = 300);
			b.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > c && (c = 1);
			this.autoDisposeTime = c;
			this.frameCount = 0
		}
		__extends(a, b);
		a.prototype._checkFrame = function () {
			this.frameCount--;
			0 >= this.frameCount && this.dispose()
		};
		Object.defineProperty(a.prototype, "length", {
			get : function () {
				return this._length
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.push = function (c) {
			var k = this.objectPool;
			-1 == k.indexOf(c) && (k.push(c), this._length++, 0 == this.frameCount && (this.frameCount =
						this.autoDisposeTime, a._callBackList.push(this)))
		};
		a.prototype.pop = function () {
			if (0 == this._length)
				return null;
			this._length--;
			return this.objectPool.pop()
		};
		a.prototype.dispose = function () {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var c = a._callBackList,
			k = c.indexOf(this);
			-1 != k && c.splice(k, 1)
		};
		a._callBackList = [];
		return a
	}
	(b.HashObject);
	b.Recycler = d;
	d.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function (b) {
	b.__START_TIME;
	b.getTimer = function () {
		return Date.now() - b.__START_TIME
	}
})(egret || (egret = {}));
(function (b) {
	b.__callLaterFunctionList = [];
	b.__callLaterThisList = [];
	b.__callLaterArgsList = [];
	b.callLater = function (d, e) {
		for (var a = [], c = 2; c < arguments.length; c++)
			a[c - 2] = arguments[c];
		b.__callLaterFunctionList.push(d);
		b.__callLaterThisList.push(e);
		b.__callLaterArgsList.push(a)
	};
	b.__callAsyncFunctionList = [];
	b.__callAsyncThisList = [];
	b.__callAsyncArgsList = [];
	b.__callAsync = function (d, e) {
		for (var a = [], c = 2; c < arguments.length; c++)
			a[c - 2] = arguments[c];
		b.__callAsyncFunctionList.push(d);
		b.__callAsyncThisList.push(e);
		b.__callAsyncArgsList.push(a)
	}
})(egret || (egret = {}));
var egret_dom;
(function (b) {
	function d() {
		for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], c = 0; c < a.length; c++)
			if (a[c] + "ransform" in b)
				return a[c];
		return a[0]
	}
	b.header = "";
	b.getHeader = d;
	b.getTrans = function (e) {
		"" == b.header && (b.header = d());
		return b.header + e.substring(1, e.length)
	}
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, l) {
			void 0 === a && (a = !1);
			void 0 === l && (l = !1);
			e.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = c;
			this._bubbles = a;
			this._cancelable = l
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "type", {
			get : function () {
				return this._type
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "bubbles", {
			get : function () {
				return this._bubbles
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "cancelable", {
			get : function () {
				return this._cancelable
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "eventPhase", {
			get : function () {
				return this._eventPhase
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "currentTarget", {
			get : function () {
				return this._currentTarget
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "target", {
			get : function () {
				return this._target
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.isDefaultPrevented =
		function () {
			return this._isDefaultPrevented
		};
		a.prototype.preventDefault = function () {
			this._cancelable && (this._isDefaultPrevented = !0)
		};
		a.prototype.stopPropagation = function () {
			this._bubbles && (this._isPropagationStopped = !0)
		};
		a.prototype.stopImmediatePropagation = function () {
			this._bubbles && (this._isPropagationImmediateStopped = !0)
		};
		a.prototype._reset = function () {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target =
						null, this._eventPhase = 2)
		};
		a._dispatchByTarget = function (c, a, l, e, d, f) {
			void 0 === d && (d = !1);
			void 0 === f && (f = !1);
			var h = c.eventRecycler;
			h || (h = c.eventRecycler = new b.Recycler);
			var n = h.pop();
			n ? n._type = l : n = new c(l);
			n._bubbles = d;
			n._cancelable = f;
			if (e)
				for (var p in e)
					n[p] = e[p], null !== n[p] && (e[p] = null);
			c = a.dispatchEvent(n);
			h.push(n);
			return c
		};
		a._getPropertyData = function (c) {
			var a = c._props;
			a || (a = c._props = {});
			return a
		};
		a.dispatchEvent = function (c, k, l, b) {
			void 0 === l && (l = !1);
			var e = a._getPropertyData(a);
			b && (e.data = b);
			a._dispatchByTarget(a,
				c, k, e, l)
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
	}
	(b.HashObject);
	b.Event = d;
	d.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(c, a, l) {
			void 0 === a && (a = !1);
			void 0 === l && (l = !1);
			b.call(this, c, a, l);
			this._status = 0
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "status", {
			get : function () {
				return this._status
			},
			enumerable : !0,
			configurable : !0
		});
		a.dispatchHTTPStatusEvent = function (c, k) {
			null == a.httpStatusEvent && (a.httpStatusEvent = new a(a.HTTP_STATUS));
			a.httpStatusEvent._status = k;
			c.dispatchEvent(a.httpStatusEvent)
		};
		a.HTTP_STATUS = "httpStatus";
		a.httpStatusEvent = null;
		return a
	}
	(b.Event);
	b.HTTPStatusEvent =
		d;
	d.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, b) {
			void 0 === a && (a = !1);
			void 0 === b && (b = !1);
			e.call(this, c, a, b)
		}
		__extends(a, e);
		a.dispatchIOErrorEvent = function (c) {
			b.Event._dispatchByTarget(a, c, a.IO_ERROR)
		};
		a.IO_ERROR = "ioError";
		return a
	}
	(b.Event);
	b.IOErrorEvent = d;
	d.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, b, m, d, f, h, n, p, q) {
			void 0 === a && (a = !0);
			void 0 === b && (b = !0);
			void 0 === m && (m = 0);
			void 0 === d && (d = 0);
			void 0 === f && (f = 0);
			void 0 === h && (h = !1);
			void 0 === n && (n = !1);
			void 0 === q && (q = !1);
			e.call(this, c, a, b);
			this._stageY = this._stageX = 0;
			this.touchPointID = m;
			this._stageX = d;
			this._stageY = f;
			this.ctrlKey = h;
			this.altKey = n;
			this.touchDown = q
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "stageX", {
			get : function () {
				return this._stageX
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype,
			"stageY", {
			get : function () {
				return this._stageY
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "localX", {
			get : function () {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).x
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "localY", {
			get : function () {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).y
			},
			enumerable : !0,
			configurable : !0
		});
		a.dispatchTouchEvent = function (c, k, l, e, d, f, h, n, p) {
			void 0 === l && (l = 0);
			void 0 === e && (e = 0);
			void 0 === d && (d = 0);
			void 0 === f && (f = !1);
			void 0 === h && (h = !1);
			void 0 === n && (n = !1);
			void 0 === p && (p = !1);
			var q = b.Event._getPropertyData(a);
			q.touchPointID = l;
			q._stageX = e;
			q._stageY = d;
			q.ctrlKey = f;
			q.altKey = h;
			q.shiftKey = n;
			q.touchDown = p;
			b.Event._dispatchByTarget(a, c, k, q, !0, !0)
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
	}
	(b.Event);
	b.TouchEvent = d;
	d.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, b) {
			void 0 === a && (a = !1);
			void 0 === b && (b = !1);
			e.call(this, c, a, b)
		}
		__extends(a, e);
		a.dispatchTimerEvent = function (c, k) {
			b.Event._dispatchByTarget(a, c, k)
		};
		a.TIMER = "timer";
		a.TIMER_COMPLETE = "timerComplete";
		return a
	}
	(b.Event);
	b.TimerEvent = d;
	d.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, b, m, d) {
			void 0 === a && (a = !1);
			void 0 === b && (b = !1);
			void 0 === m && (m = 0);
			void 0 === d && (d = 0);
			e.call(this, c, a, b);
			this.bytesLoaded = m;
			this.bytesTotal = d
		}
		__extends(a, e);
		a.dispatchProgressEvent = function (c, k, l, e) {
			void 0 === l && (l = 0);
			void 0 === e && (e = 0);
			b.Event._dispatchByTarget(a, c, k, {
				bytesLoaded : l,
				bytesTotal : e
			})
		};
		a.PROGRESS = "progress";
		a.SOCKET_DATA = "socketData";
		return a
	}
	(b.Event);
	b.ProgressEvent = d;
	d.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.CAPTURING_PHASE = 1;
		b.AT_TARGET = 2;
		b.BUBBLING_PHASE = 3;
		return b
	}
	();
	b.EventPhase = d;
	d.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c) {
			void 0 === c && (c = null);
			e.call(this);
			this._eventTarget = c ? c : this
		}
		__extends(a, e);
		a.prototype.addEventListener = function (c, a, l, e, d) {
			void 0 === e && (e = !1);
			void 0 === d && (d = 0);
			"undefined" === typeof e && (e = !1);
			"undefined" === typeof d && (d = 0);
			a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
			e ? (this._captureEventsMap || (this._captureEventsMap = {}), e = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), e = this._eventsMap);
			var f = e[c];
			f || (f = e[c] = []);
			this._insertEventBin(f, a, l, d)
		};
		a.prototype._insertEventBin = function (c, a, b, e, d) {
			void 0 === d && (d = void 0);
			for (var f = -1, h = c.length, n = 0; n < h; n++) {
				var p = c[n];
				if (p.listener === a && p.thisObject === b && p.display === d)
					return !1;
				-1 == f && p.priority < e && (f = n)
			}
			a = {
				listener : a,
				thisObject : b,
				priority : e
			};
			d && (a.display = d);
			-1 != f ? c.splice(f, 0, a) : c.push(a);
			return !0
		};
		a.prototype.removeEventListener = function (c, a, b, e) {
			void 0 === e && (e = !1);
			if (e = e ? this._captureEventsMap : this._eventsMap) {
				var d = e[c];
				d && (this._removeEventBin(d,
						a, b), 0 == d.length && delete e[c])
			}
		};
		a.prototype._removeEventBin = function (c, a, b, e) {
			void 0 === e && (e = void 0);
			for (var d = c.length, f = 0; f < d; f++) {
				var h = c[f];
				if (h.listener === a && h.thisObject === b && h.display === e)
					return c.splice(f, 1), !0
			}
			return !1
		};
		a.prototype.hasEventListener = function (c) {
			return this._eventsMap && this._eventsMap[c] || this._captureEventsMap && this._captureEventsMap[c]
		};
		a.prototype.willTrigger = function (c) {
			return this.hasEventListener(c)
		};
		a.prototype.dispatchEvent = function (c) {
			c._reset();
			c._target = this._eventTarget;
			c._currentTarget = this._eventTarget;
			return this._notifyListener(c)
		};
		a.prototype._notifyListener = function (c) {
			var a = 1 == c._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!a)
				return !0;
			a = a[c._type];
			if (!a)
				return !0;
			var b = a.length;
			if (0 == b)
				return !0;
			for (var a = a.concat(), e = 0; e < b; e++) {
				var d = a[e];
				d.listener.call(d.thisObject, c);
				if (c._isPropagationImmediateStopped)
					break
			}
			return !c._isDefaultPrevented
		};
		a.prototype.dispatchEventWith = function (c, a, l) {
			void 0 === a && (a = !1);
			b.Event.dispatchEvent(this, c, a, l)
		};
		return a
	}
	(b.HashObject);
	b.EventDispatcher = d;
	d.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this.reuseEvent = new b.Event("")
		}
		__extends(a, e);
		a.prototype.run = function () {
			b.Ticker.getInstance().run();
			b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		a.prototype.renderLoop = function (c) {
			if (0 < b.__callLaterFunctionList.length) {
				var k = b.__callLaterFunctionList;
				b.__callLaterFunctionList = [];
				var l = b.__callLaterThisList;
				b.__callLaterThisList = [];
				var e = b.__callLaterArgsList;
				b.__callLaterArgsList = []
			}
			c = this.stage;
			var d = a.cachedEvent;
			d._type = b.Event.RENDER;
			this.dispatchEvent(d);
			b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
			k && this.doCallLaterList(k, l, e);
			0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
			k = this.rendererContext;
			k.onRenderStart();
			k.clearScreen();
			c._updateTransform();
			d._type = b.Event.FINISH_UPDATE_TRANSFORM;
			this.dispatchEvent(d);
			c._draw(k);
			d._type = b.Event.FINISH_RENDER;
			this.dispatchEvent(d);
			k.onRenderFinish()
		};
		a.prototype.broadcastEnterFrame = function (c) {
			c = this.reuseEvent;
			c._type = b.Event.ENTER_FRAME;
			this.dispatchEvent(c);
			for (var a = b.DisplayObject._enterFrameCallBackList.concat(), l = a.length, e = 0; e < l; e++) {
				var d = a[e];
				c._target = d.display;
				c._currentTarget = d.display;
				d.listener.call(d.thisObject, c)
			}
			a = b.Recycler._callBackList;
			for (e = a.length - 1; 0 <= e; e--)
				a[e]._checkFrame()
		};
		a.prototype.broadcastRender = function () {
			var c = this.reuseEvent;
			c._type = b.Event.RENDER;
			for (var a = b.DisplayObject._renderCallBackList.concat(),
				l = a.length, e = 0; e < l; e++) {
				var d = a[e],
				f = d.display;
				c._target = f;
				c._currentTarget = f;
				d.listener.call(d.thisObject, c)
			}
		};
		a.prototype.doCallLaterList = function (c, a, b) {
			for (var e = c.length, d = 0; d < e; d++) {
				var f = c[d];
				null != f && f.apply(a[d], b[d])
			}
		};
		a.prototype.doCallAsyncList = function () {
			var c = b.__callAsyncFunctionList.concat(),
			a = b.__callAsyncThisList.concat(),
			l = b.__callAsyncArgsList.concat();
			b.__callAsyncFunctionList.length = 0;
			b.__callAsyncThisList.length = 0;
			for (var e = b.__callAsyncArgsList.length = 0; e < c.length; e++) {
				var d =
					c[e];
				null != d && d.apply(a[e], l[e])
			}
		};
		a.DEVICE_PC = "web";
		a.DEVICE_MOBILE = "native";
		a.RUNTIME_HTML5 = "runtime_html5";
		a.RUNTIME_NATIVE = "runtime_native";
		a.cachedEvent = new b.Event("");
		return a
	}
	(b.EventDispatcher);
	b.MainContext = d;
	d.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function () {
	if (!this.navigator)
		return !0;
	var b = navigator.userAgent.toLowerCase();
	return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
}, testRuntimeType = function () {
	return this.navigator ? !0 : !1
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function (b) {
	var d = function () {
		function e() {
			this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0
		}
		e.getInstance = function () {
			null == e.instance && (e.instance = new e);
			return e.instance
		};
		e.prototype.run = function () {
			b.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, this._txt.multiline = !0, b.MainContext.instance.stage.addChild(this._txt));
			var a = b.MainContext.instance;
			a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
			a.addEventListener(b.Event.RENDER, this.onStartRender, this);
			a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
			a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		e.prototype.onEnterFrame = function (a) {
			this._lastTime = b.getTimer()
		};
		e.prototype.onStartRender = function (a) {
			a = b.getTimer();
			this._logicPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		e.prototype.onFinishUpdateTransform =
		function (a) {
			a = b.getTimer();
			this._updateTransformPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		e.prototype.onFinishRender = function (a) {
			a = b.getTimer();
			this._renderPerformanceCost = a - this._lastTime;
			this._lastTime = a
		};
		e.prototype.update = function (a) {
			this._tick++;
			this._totalDeltaTime += a;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				a = (this._preDrawCount - 1).toString();
				var c = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() +
					"," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + a + "\ncost:" + c + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		e.prototype.onDrawImage = function () {
			this._preDrawCount++
		};
		return e
	}
	();
	b.Profiler = d;
	d.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(a, e);
		a.prototype.run = function () {
			b.__START_TIME = (new Date).getTime();
			b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		a.prototype.update = function (c) {
			var a = this.callBackList.concat(),
			b = a.length;
			c *= this._timeScale;
			c *= this._timeScale;
			for (var e = 0; e < b; e++) {
				var d = a[e];
				d.listener.call(d.thisObject, c)
			}
		};
		a.prototype.register = function (c, a, b) {
			void 0 === b &&
			(b = 0);
			this._insertEventBin(this.callBackList, c, a, b)
		};
		a.prototype.unregister = function (c, a) {
			this._removeEventBin(this.callBackList, c, a)
		};
		a.prototype.setTimeout = function (c, a, l) {
			for (var e = [], d = 3; d < arguments.length; d++)
				e[d - 3] = arguments[d];
			b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
			b.setTimeout.apply(null, [c, a, l].concat(e))
		};
		a.prototype.setTimeScale = function (c) {
			this._timeScale = c
		};
		a.prototype.getTimeScale = function () {
			return this._timeScale
		};
		a.prototype.pause = function () {
			this._paused = !0
		};
		a.prototype.resume = function () {
			this._paused = !1
		};
		a.getInstance = function () {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		return a
	}
	(b.EventDispatcher);
	b.Ticker = d;
	d.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.LEFT = "left";
		b.RIGHT = "right";
		b.CENTER = "center";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}
	();
	b.HorizontalAlign = d;
	d.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.TOP = "top";
		b.BOTTOM = "bottom";
		b.MIDDLE = "middle";
		b.JUSTIFY = "justify";
		b.CONTENT_JUSTIFY = "contentJustify";
		return b
	}
	();
	b.VerticalAlign = d;
	d.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a) {
			void 0 === a && (a = 0);
			e.call(this);
			this._currentCount = 0;
			this.delay = c;
			this.repeatCount = a
		}
		__extends(a, e);
		a.prototype.currentCount = function () {
			return this._currentCount
		};
		Object.defineProperty(a.prototype, "running", {
			get : function () {
				return this._running
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.reset = function () {
			this.stop();
			this._currentCount = 0
		};
		a.prototype.start = function () {
			this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount =
						0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		a.prototype.stop = function () {
			this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		a.prototype.onEnterFrame = function (c) {
			c = b.getTimer();
			c - this.lastTime > this.delay && (this.lastTime = c, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
		};
		return a
	}
	(b.EventDispatcher);
	b.Timer = d;
	d.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function (b) {
	function d(b) {
		b = b.prototype ? b.prototype : b.__proto__;
		if (b.hasOwnProperty("__class__"))
			return b.__class__;
		var a = b.constructor.toString(),
		c = a.indexOf("("),
		a = a.substring(9, c);
		Object.defineProperty(b, "__class__", {
			value : a,
			enumerable : !1,
			writable : !0
		});
		return a
	}
	b.getQualifiedClassName = d;
	b.getQualifiedSuperclassName = function (b) {
		b = b.prototype ? b.prototype : b.__proto__;
		if (b.hasOwnProperty("__superclass__"))
			return b.__superclass__;
		var a = Object.getPrototypeOf(b);
		if (null == a)
			return null;
		a = d(a.constructor);
		if (!a)
			return null;
		Object.defineProperty(b, "__superclass__", {
			value : a,
			enumerable : !1,
			writable : !0
		});
		return a
	}
})(egret || (egret = {}));
(function (b) {
	var d = {};
	b.getDefinitionByName = function (b) {
		if (!b)
			return null;
		var a = d[b];
		if (a)
			return a;
		for (var c = b.split("."), k = c.length, a = __global, l = 0; l < k; l++)
			if (a = a[c[l]], !a)
				return null;
		return d[b] = a
	}
})(egret || (egret = {}));
var __global = __global || this;
(function (b) {
	function d(c) {
		for (var a in e) {
			var b = e[a];
			b.delay -= c;
			0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete e[a])
		}
	}
	var e = {},
	a = 0;
	b.setTimeout = function (c, k, l) {
		for (var m = [], g = 3; g < arguments.length; g++)
			m[g - 3] = arguments[g];
		m = {
			listener : c,
			thisObject : k,
			delay : l,
			params : m
		};
		0 == a && b.Ticker.getInstance().register(d, null);
		a++;
		e[a] = m;
		return a
	};
	b.clearTimeout = function (c) {
		delete e[c]
	}
})(egret || (egret = {}));
(function (b) {
	b.hasDefinition = function (d) {
		return b.getDefinitionByName(d) ? !0 : !1
	}
})(egret || (egret = {}));
(function (b) {
	b.toColorString = function (b) {
		if (isNaN(b) || 0 > b)
			b = 0;
		16777215 < b && (b = 16777215);
		for (b = b.toString(16).toUpperCase(); 6 > b.length; )
			b = "0" + b;
		return "#" + b
	}
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, b, d, g, f) {
			void 0 === c && (c = 1);
			void 0 === a && (a = 0);
			void 0 === b && (b = 0);
			void 0 === d && (d = 1);
			void 0 === g && (g = 0);
			void 0 === f && (f = 0);
			e.call(this);
			this.a = c;
			this.b = a;
			this.c = b;
			this.d = d;
			this.tx = g;
			this.ty = f
		}
		__extends(a, e);
		a.prototype.prepend = function (c, a, b, e, d, f) {
			var h = this.tx;
			if (1 != c || 0 != a || 0 != b || 1 != e) {
				var n = this.a,
				p = this.c;
				this.a = n * c + this.b * b;
				this.b = n * a + this.b * e;
				this.c = p * c + this.d * b;
				this.d = p * a + this.d * e
			}
			this.tx = h * c + this.ty * b + d;
			this.ty = h * a + this.ty * e + f;
			return this
		};
		a.prototype.append =
		function (c, a, b, e, d, f) {
			var h = this.a,
			n = this.b,
			p = this.c,
			q = this.d;
			if (1 != c || 0 != a || 0 != b || 1 != e)
				this.a = c * h + a * p, this.b = c * n + a * q, this.c = b * h + e * p, this.d = b * n + e * q;
			this.tx = d * h + f * p + this.tx;
			this.ty = d * n + f * q + this.ty;
			return this
		};
		a.prototype.prependTransform = function (c, k, b, e, d, f, h, n, p) {
			if (d % 360) {
				var q = d * a.DEG_TO_RAD;
				d = Math.cos(q);
				q = Math.sin(q)
			} else
				d = 1, q = 0;
			if (n || p)
				this.tx -= n, this.ty -= p;
			f || h ? (f *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(d * b, q * b, -q * e, d * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(f), Math.cos(f),
					c, k)) : this.prepend(d * b, q * b, -q * e, d * e, c, k);
			return this
		};
		a.prototype.appendTransform = function (c, k, b, e, d, f, h, n, p) {
			if (d % 360) {
				var q = d * a.DEG_TO_RAD;
				d = Math.cos(q);
				q = Math.sin(q)
			} else
				d = 1, q = 0;
			f || h ? (f *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(f), Math.cos(f), c, k), this.append(d * b, q * b, -q * e, d * e, 0, 0)) : this.append(d * b, q * b, -q * e, d * e, c, k);
			if (n || p)
				this.tx -= n * this.a + p * this.c, this.ty -= n * this.b + p * this.d;
			return this
		};
		a.prototype.rotate = function (c) {
			var a = Math.cos(c);
			c = Math.sin(c);
			var b = this.a,
			e = this.c,
			d = this.tx;
			this.a = b * a - this.b * c;
			this.b = b * c + this.b * a;
			this.c = e * a - this.d * c;
			this.d = e * c + this.d * a;
			this.tx = d * a - this.ty * c;
			this.ty = d * c + this.ty * a;
			return this
		};
		a.prototype.skew = function (c, k) {
			c *= a.DEG_TO_RAD;
			k *= a.DEG_TO_RAD;
			this.append(Math.cos(k), Math.sin(k), -Math.sin(c), Math.cos(c), 0, 0);
			return this
		};
		a.prototype.scale = function (c, a) {
			this.a *= c;
			this.d *= a;
			this.c *= c;
			this.b *= a;
			this.tx *= c;
			this.ty *= a;
			return this
		};
		a.prototype.translate = function (c, a) {
			this.tx += c;
			this.ty += a;
			return this
		};
		a.prototype.identity = function () {
			this.a =
				this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this
		};
		a.prototype.identityMatrix = function (c) {
			this.a = c.a;
			this.b = c.b;
			this.c = c.c;
			this.d = c.d;
			this.tx = c.tx;
			this.ty = c.ty;
			return this
		};
		a.prototype.invert = function () {
			var c = this.a,
			a = this.b,
			b = this.c,
			e = this.d,
			d = this.tx,
			f = c * e - a * b;
			this.a = e / f;
			this.b = -a / f;
			this.c = -b / f;
			this.d = c / f;
			this.tx = (b * this.ty - e * d) / f;
			this.ty =  - (c * this.ty - a * d) / f;
			return this
		};
		a.transformCoords = function (c, a, l) {
			var e = b.Point.identity;
			e.x = c.a * a + c.c * l + c.tx;
			e.y = c.d * l + c.b * a + c.ty;
			return e
		};
		a.prototype.toArray =
		function (c) {
			this.array || (this.array = new Float32Array(9));
			c ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
			this.array[8] = 1;
			return this.array
		};
		a.identity = new a;
		a.DEG_TO_RAD = Math.PI / 180;
		return a
	}
	(b.HashObject);
	b.Matrix = d;
	d.prototype.__class__ =
		"egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(c, a) {
			void 0 === c && (c = 0);
			void 0 === a && (a = 0);
			b.call(this);
			this.x = c;
			this.y = a
		}
		__extends(a, b);
		a.prototype.clone = function () {
			return new a(this.x, this.y)
		};
		a.prototype.equals = function (c) {
			return this.x == c.x && this.y == c.y
		};
		a.distance = function (c, a) {
			return Math.sqrt((c.x - a.x) * (c.x - a.x) + (c.y - a.y) * (c.y - a.y))
		};
		a.identity = new a(0, 0);
		return a
	}
	(b.HashObject);
	b.Point = d;
	d.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(c, a, l, d) {
			void 0 === c && (c = 0);
			void 0 === a && (a = 0);
			void 0 === l && (l = 0);
			void 0 === d && (d = 0);
			b.call(this);
			this.x = c;
			this.y = a;
			this.width = l;
			this.height = d
		}
		__extends(a, b);
		Object.defineProperty(a.prototype, "right", {
			get : function () {
				return this.x + this.width
			},
			set : function (c) {
				this.width = c - this.x
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "bottom", {
			get : function () {
				return this.y + this.height
			},
			set : function (c) {
				this.height = c - this.y
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.initialize = function (c, a, b, e) {
			this.x = c;
			this.y = a;
			this.width = b;
			this.height = e;
			return this
		};
		a.prototype.contains = function (c, a) {
			return this.x <= c && this.x + this.width >= c && this.y <= a && this.y + this.height >= a
		};
		a.prototype.intersects = function (c) {
			var a = c.right,
			b = c.bottom,
			e = this.right,
			d = this.bottom;
			return this.contains(c.x, c.y) || this.contains(c.x, b) || this.contains(a, c.y) || this.contains(a, b) || c.contains(this.x, this.y) || c.contains(this.x, d) || c.contains(e, this.y) || c.contains(e, d) ? !0 : !1
		};
		a.prototype.clone =
		function () {
			return new a(this.x, this.y, this.width, this.height)
		};
		a.prototype.containsPoint = function (c) {
			return this.x < c.x && this.x + this.width > c.x && this.y < c.y && this.y + this.height > c.y ? !0 : !1
		};
		a.identity = new a(0, 0, 0, 0);
		return a
	}
	(b.HashObject);
	b.Rectangle = d;
	d.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function e() {}

		e.fatal = function (a, c) {
			void 0 === c && (c = null);
			b.Logger.traceToConsole("Fatal", a, c);
			throw Error(b.Logger.getTraceCode("Fatal", a, c));
		};
		e.info = function (a, c) {
			void 0 === c && (c = null);
			b.Logger.traceToConsole("Info", a, c)
		};
		e.warning = function (a, c) {
			void 0 === c && (c = null);
			b.Logger.traceToConsole("Warning", a, c)
		};
		e.traceToConsole = function (a, c, k) {
			console.log(b.Logger.getTraceCode(a, c, k))
		};
		e.getTraceCode = function (a, c, k) {
			return "[" + a + "]" + c + ":" + (null == k ? "" : k)
		};
		return e
	}
	();
	b.Logger =
		d;
	d.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(a, e);
		a.getInstance = function () {
			a._instance || (a._instance = new a);
			return a._instance
		};
		a.prototype.parserXML = function (c) {
			for (var a = 0; "\n" == c.charAt(a) || "\t" == c.charAt(a) || "\r" == c.charAt(a) || " " == c.charAt(a); )
				a++;
			0 != a && (c = c.substring(a, c.length));
			this._isSupportDOMParser ?
			a = this._parser.parseFromString(c, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(c));
			null == a && b.Logger.info("xml not found!");
			return a
		};
		a._instance = null;
		return a
	}
	(b.HashObject);
	b.SAXParser = d;
	d.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (c) {
		function k() {
			c.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			this._stageHeight = this._stageWidth = this._offSetY = 0
		}
		__extends(k, c);
		k.getInstance = function () {
			null == k.instance && (a.initialize(), k.instance = new k);
			return k.instance
		};
		k.prototype.setDesignSize = function (c, a, k) {
			this._designWidth = c;
			this._designHeight = a;
			k && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
				this._setResolutionPolicy(k))
		};
		k.prototype._setResolutionPolicy = function (c) {
			this._resolutionPolicy = c;
			c.init(this);
			c._apply(this, this._designWidth, this._designHeight)
		};
		k.prototype.getScaleX = function () {
			return this._scaleX
		};
		k.prototype.getScaleY = function () {
			return this._scaleY
		};
		k.prototype.getOffSetY = function () {
			return this._offSetY
		};
		k.canvas_name = "egretCanvas";
		k.canvas_div_name = "gameDiv";
		return k
	}
	(b.HashObject);
	b.StageDelegate = d;
	d.prototype.__class__ = "egret.StageDelegate";
	var e = function () {
		function c(a,
			k) {
			this._containerStrategy = a;
			this._contentStrategy = k
		}
		c.prototype.init = function (c) {
			this._containerStrategy.init(c);
			this._contentStrategy.init(c)
		};
		c.prototype._apply = function (c, a, k) {
			this._containerStrategy._apply(c, a, k);
			this._contentStrategy._apply(c, a, k)
		};
		return c
	}
	();
	b.ResolutionPolicy = e;
	e.prototype.__class__ = "egret.ResolutionPolicy";
	var a = function () {
		function a() {}

		a.initialize = function () {
			a.EQUAL_TO_FRAME = new c
		};
		a.prototype.init = function (c) {};
		a.prototype._apply = function (c, a, k) {};
		a.prototype._setupContainer =
		function () {
			var c = document.body,
			a;
			c && (a = c.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
		};
		return a
	}
	();
	b.ContainerStrategy = a;
	a.prototype.__class__ = "egret.ContainerStrategy";
	var c = function (c) {
		function a() {
			c.apply(this, arguments)
		}
		__extends(a, c);
		a.prototype._apply = function (c) {
			this._setupContainer()
		};
		return a
	}
	(a);
	b.EqualToFrame = c;
	c.prototype.__class__ = "egret.EqualToFrame";
	e = function () {
		function c() {}

		c.prototype.init = function (c) {};
		c.prototype._apply = function (c, a, k) {};
		c.prototype.setEgretSize = function (c, a, k, l, e, p) {
			void 0 === p && (p = 0);
			b.StageDelegate.getInstance()._stageWidth = Math.round(c);
			b.StageDelegate.getInstance()._stageHeight =
				Math.round(a);
			c = document.getElementById(d.canvas_div_name);
			c.style.width = k + "px";
			c.style.height = l + "px";
			c.style.top = p + "px"
		};
		c.prototype._getClientWidth = function () {
			return document.documentElement.clientWidth
		};
		c.prototype._getClientHeight = function () {
			return document.documentElement.clientHeight
		};
		return c
	}
	();
	b.ContentStrategy = e;
	e.prototype.__class__ = "egret.ContentStrategy";
	var k = function (c) {
		function a(k) {
			void 0 === k && (k = 0);
			c.call(this);
			this.minWidth = k
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			a =
				this._getClientWidth();
			var b = this._getClientHeight(),
			l = b / k,
			e = a / l,
			d = 1;
			0 != this.minWidth && (d = Math.min(1, e / this.minWidth));
			this.setEgretSize(e / d, k, a, b * d);
			c._scaleX = l * d;
			c._scaleY = l * d
		};
		return a
	}
	(e);
	b.FixedHeight = k;
	k.prototype.__class__ = "egret.FixedHeight";
	k = function (c) {
		function a(k) {
			void 0 === k && (k = 0);
			c.call(this);
			this.minHeight = k
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			k = this._getClientWidth();
			var b = this._getClientHeight(),
			l = k / a,
			e = b / l,
			d = 1;
			0 != this.minHeight && (d = Math.min(1, e / this.minHeight));
			this.setEgretSize(a,
				e / d, k * d, b, k * (1 - d) / 2);
			c._scaleX = l * d;
			c._scaleY = l * d
		};
		return a
	}
	(e);
	b.FixedWidth = k;
	k.prototype.__class__ = "egret.FixedWidth";
	k = function (c) {
		function a(k, b) {
			c.call(this);
			this.width = k;
			this.height = b
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			k = this.width;
			var b = this.height,
			l = k / a;
			this.setEgretSize(a, b / l, k, b);
			c._scaleX = l;
			c._scaleY = l
		};
		return a
	}
	(e);
	b.FixedSize = k;
	k.prototype.__class__ = "egret.FixedSize";
	k = function (c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			this.setEgretSize(a,
				k, a, k, Math.floor((a - a) / 2));
			c._scaleX = 1;
			c._scaleY = 1
		};
		return a
	}
	(e);
	b.NoScale = k;
	k.prototype.__class__ = "egret.NoScale";
	k = function (c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			var b = this._getClientWidth(),
			l = this._getClientHeight(),
			e = b,
			d = l,
			m = e / a < d / k ? e / a : d / k,
			e = a * m,
			d = k * m,
			b = Math.floor((b - e) / 2);
			c._offSetY = Math.floor((l - d) / 2);
			this.setEgretSize(a, k / 1, 1 * e, d, b, c._offSetY);
			c._scaleX = 1 * m;
			c._scaleY = 1 * m
		};
		return a
	}
	(e);
	b.ShowAll = k;
	k.prototype.__class__ = "egret.ShowAll";
	e = function (c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function (c, a, k) {
			var b = this._getClientWidth(),
			l = this._getClientHeight(),
			b = b / a,
			l = l / k;
			this.setEgretSize(a, k, a * b, k * l);
			c._scaleX = b;
			c._scaleY = l
		};
		return a
	}
	(e);
	b.FullScreen = e;
	e.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(a, e);
		a.getInstance = function () {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		a.prototype.addDrawArea = function (c) {
			this._drawAreaList.push(c)
		};
		a.prototype.clearDrawArea = function () {
			this._drawAreaList = []
		};
		a.prototype.drawImage = function (c, a, l, e, d, f, h, n, p, q, r) {
			void 0 === r && (r = void 0);
			h = h || 0;
			n = n || 0;
			var s = a._texture_to_render;
			if (null != s && 0 != f && 0 != d && 0 != p && 0 != q)
				if (0 != this._drawAreaList.length &&
					b.MainContext.instance.rendererContext._cacheCanvasContext) {
					var t = b.DisplayObject.getTransformBounds(a._getSize(b.Rectangle.identity), a._worldTransform);
					a._worldBounds.initialize(t.x, t.y, t.width, t.height);
					t = this._originalData;
					t.sourceX = l;
					t.sourceY = e;
					t.sourceWidth = d;
					t.sourceHeight = f;
					t.destX = h;
					t.destY = n;
					t.destWidth = p;
					t.destHeight = q;
					for (var u = this.getDrawAreaList(), v = 0; v < u.length; v++)
						if (!this.ignoreRender(a, u[v], t.destX, t.destY)) {
							c.drawImage(s, l, e, d, f, h, n, p, q, r);
							break
						}
				} else
					c.drawImage(s, l, e, d, f, h, n,
						p, q, r)
		};
		a.prototype.ignoreRender = function (c, a, b, e) {
			var d = c._worldBounds;
			b *= c._worldTransform.a;
			e *= c._worldTransform.d;
			return d.x + d.width + b <= a.x || d.x + b >= a.x + a.width || d.y + d.height + e <= a.y || d.y + e >= a.y + a.height ? !0 : !1
		};
		a.prototype.getDrawAreaList = function () {
			var c;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)], b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
						this.onResize, this)), c = this._defaultDrawAreaList) : c = this._drawAreaList;
			return c
		};
		a.prototype.onResize = function () {
			b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
			this._defaultDrawAreaList = null
		};
		return a
	}
	(b.HashObject);
	b.RenderFilter = d;
	d.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function e() {}

		e.mapClass = function (a, c, k) {
			void 0 === k && (k = "");
			a = this.getKey(a) + "#" + k;
			this.mapClassDic[a] = c
		};
		e.getKey = function (a) {
			return "string" == typeof a ? a : b.getQualifiedClassName(a)
		};
		e.mapValue = function (a, c, k) {
			void 0 === k && (k = "");
			a = this.getKey(a) + "#" + k;
			this.mapValueDic[a] = c
		};
		e.hasMapRule = function (a, c) {
			void 0 === c && (c = "");
			var k = this.getKey(a) + "#" + c;
			return this.mapValueDic[k] || this.mapClassDic[k] ? !0 : !1
		};
		e.getInstance = function (a, c) {
			void 0 === c && (c = "");
			var k = this.getKey(a) + "#" +
				c;
			if (this.mapValueDic[k])
				return this.mapValueDic[k];
			var b = this.mapClassDic[k];
			if (b)
				return b = new b, this.mapValueDic[k] = b, delete this.mapClassDic[k], b;
			throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + k + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
		};
		e.mapClassDic = {};
		e.mapValueDic = {};
		return e
	}
	();
	b.Injector = d;
	d.prototype.__class__ = "egret.Injector"
})(egret ||
	(egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.NORMAL = "normal";
		b.ADD = "add";
		return b
	}
	();
	b.BlendMode = d;
	d.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
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
		__extends(a, e);
		a.prototype._setDirty = function () {
			this._normalDirty = !0
		};
		a.prototype.getDirty = function () {
			return this._normalDirty || this._sizeDirty
		};
		a.prototype._setParentSizeDirty = function () {
			var c = this._parent;
			!c || c._hasWidthSet || c._hasHeightSet || c._setSizeDirty()
		};
		a.prototype._setSizeDirty =
		function () {
			this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
		};
		a.prototype._clearDirty = function () {
			this._normalDirty = !1
		};
		a.prototype._clearSizeDirty = function () {
			this._sizeDirty = !1
		};
		Object.defineProperty(a.prototype, "parent", {
			get : function () {
				return this._parent
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._parentChanged = function (c) {
			this._parent = c
		};
		Object.defineProperty(a.prototype, "x", {
			get : function () {
				return this._x
			},
			set : function (c) {
				this._setX(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setX = function (c) {
			b.NumberUtils.isNumber(c) && this._x != c && (this._x = c, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "y", {
			get : function () {
				return this._y
			},
			set : function (c) {
				this._setY(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setY = function (c) {
			b.NumberUtils.isNumber(c) && this._y != c && (this._y = c, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "scaleX", {
			get : function () {
				return this._scaleX
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) &&
				this._scaleX != c && (this._scaleX = c, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "scaleY", {
			get : function () {
				return this._scaleY
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._scaleY != c && (this._scaleY = c, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "anchorOffsetX", {
			get : function () {
				return this._anchorOffsetX
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._anchorOffsetX !=
				c && (this._anchorOffsetX = c, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "anchorOffsetY", {
			get : function () {
				return this._anchorOffsetY
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._anchorOffsetY != c && (this._anchorOffsetY = c, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "anchorX", {
			get : function () {
				return this._anchorX
			},
			set : function (c) {
				this._setAnchorX(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setAnchorX = function (c) {
			b.NumberUtils.isNumber(c) && this._anchorX != c && (this._anchorX = c, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "anchorY", {
			get : function () {
				return this._anchorY
			},
			set : function (c) {
				this._setAnchorY(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setAnchorY = function (c) {
			b.NumberUtils.isNumber(c) && this._anchorY != c && (this._anchorY = c, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(a.prototype, "visible", {
			get : function () {
				return this._visible
			},
			set : function (c) {
				this._setVisible(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setVisible = function (c) {
			this._visible != c && (this._visible = c, this._setSizeDirty())
		};
		Object.defineProperty(a.prototype, "rotation", {
			get : function () {
				return this._rotation
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._rotation != c && (this._rotation = c, this._setSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "alpha", {
			get : function () {
				return this._alpha
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) &&
				this._alpha != c && (this._alpha = c, this._setDirty(), this._setCacheDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "skewX", {
			get : function () {
				return this._skewX
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._skewX != c && (this._skewX = c, this._setSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "skewY", {
			get : function () {
				return this._skewY
			},
			set : function (c) {
				b.NumberUtils.isNumber(c) && this._skewY != c && (this._skewY = c, this._setSizeDirty())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "touchEnabled", {
			get : function () {
				return this._touchEnabled
			},
			set : function (c) {
				this._setTouchEnabled(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setTouchEnabled = function (c) {
			this._touchEnabled = c
		};
		Object.defineProperty(a.prototype, "scrollRect", {
			get : function () {
				return this._scrollRect
			},
			set : function (c) {
				this._setScrollRect(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setScrollRect = function (c) {
			this._scrollRect = c;
			this._setSizeDirty()
		};
		Object.defineProperty(a.prototype,
			"measuredWidth", {
			get : function () {
				return this._measureBounds().width
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "measuredHeight", {
			get : function () {
				return this._measureBounds().height
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "explicitWidth", {
			get : function () {
				return this._explicitWidth
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "explicitHeight", {
			get : function () {
				return this._explicitHeight
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype,
			"width", {
			get : function () {
				return this._getSize(b.Rectangle.identity).width
			},
			set : function (c) {
				this._setWidth(c)
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "height", {
			get : function () {
				return this._getSize(b.Rectangle.identity).height
			},
			set : function (c) {
				this._setHeight(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setWidth = function (c) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitWidth = c;
			this._hasWidthSet = b.NumberUtils.isNumber(c)
		};
		a.prototype._setHeight = function (c) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitHeight = c;
			this._hasHeightSet = b.NumberUtils.isNumber(c)
		};
		a.prototype._draw = function (c) {
			if (this._visible && !this.drawCacheTexture(c)) {
				this._colorTransform && c.setGlobalColorTransform(this._colorTransform.matrix);
				c.setAlpha(this.worldAlpha, this.blendMode);
				c.setTransform(this._worldTransform);
				var a = this.mask || this._scrollRect;
				a && c.pushMask(a);
				this._render(c);
				a && c.popMask();
				this._colorTransform && c.setGlobalColorTransform(null)
			}
			this.destroyCacheBounds()
		};
		a.prototype.drawCacheTexture =
		function (c) {
			if (!1 == this._cacheAsBitmap)
				return !1;
			if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight))
				this._cacheDirty = !this._makeBitmapCache();
			if (null == this._texture_to_render)
				return !1;
			var a = this._texture_to_render,
			l = a._offsetX,
			e = a._offsetY,
			d = a._textureWidth,
			a = a._textureHeight;
			this._updateTransform();
			c.setAlpha(this.worldAlpha, this.blendMode);
			c.setTransform(this._worldTransform);
			var f = b.MainContext.instance.rendererContext.texture_scale_factor;
			b.RenderFilter.getInstance().drawImage(c, this, 0, 0, d * f, a * f, l, e, d, a);
			return !0
		};
		a.prototype._updateTransform = function () {
			this._calculateWorldTransform()
		};
		a.prototype._calculateWorldTransform = function () {
			var c = this._worldTransform,
			a = this._parent;
			c.identityMatrix(a._worldTransform);
			this._getMatrix(c);
			var b = this._scrollRect;
			b && c.append(1, 0, 0, 1, -b.x, -b.y);
			this.worldAlpha = a.worldAlpha * this._alpha
		};
		a.prototype._render = function (c) {};
		a.prototype.getBounds =
		function (c, a) {
			void 0 === a && (a = !0);
			var l = this._measureBounds(),
			e = this._hasWidthSet ? this._explicitWidth : l.width,
			d = this._hasHeightSet ? this._explicitHeight : l.height;
			this._rectW = l.width;
			this._rectH = l.height;
			this._clearSizeDirty();
			var f = l.x,
			l = l.y,
			h = 0,
			n = 0;
			a && (0 != this._anchorX || 0 != this._anchorY ? (h = e * this._anchorX, n = d * this._anchorY) : (h = this._anchorOffsetX, n = this._anchorOffsetY));
			this._cacheBounds.initialize(f - h, l - n, e, d);
			e = this._cacheBounds;
			c || (c = new b.Rectangle);
			return c.initialize(e.x, e.y, e.width, e.height)
		};
		a.prototype.destroyCacheBounds = function () {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0
		};
		a.prototype._getConcatenatedMatrix = function () {
			for (var c = a.identityMatrixForGetConcatenated.identity(), k = this; null != k; ) {
				if (0 != k._anchorX || 0 != k._anchorY) {
					var l = k._getSize(b.Rectangle.identity);
					c.prependTransform(k._x, k._y, k._scaleX, k._scaleY, k._rotation, k._skewX, k._skewY, l.width * k._anchorX, l.height * k._anchorY)
				} else
					c.prependTransform(k._x, k._y, k._scaleX, k._scaleY,
						k._rotation, k._skewX, k._skewY, k._anchorOffsetX, k._anchorOffsetY);
				k = k._parent
			}
			return c
		};
		a.prototype.localToGlobal = function (c, a, l) {
			void 0 === c && (c = 0);
			void 0 === a && (a = 0);
			var e = this._getConcatenatedMatrix();
			e.append(1, 0, 0, 1, c, a);
			l || (l = new b.Point);
			l.x = e.tx;
			l.y = e.ty;
			return l
		};
		a.prototype.globalToLocal = function (c, a, l) {
			void 0 === c && (c = 0);
			void 0 === a && (a = 0);
			var e = this._getConcatenatedMatrix();
			e.invert();
			e.append(1, 0, 0, 1, c, a);
			l || (l = new b.Point);
			l.x = e.tx;
			l.y = e.ty;
			return l
		};
		a.prototype.hitTest = function (c, a, e) {
			void 0 ===
			e && (e = !1);
			if (!this._visible || !e && !this._touchEnabled)
				return null;
			e = this._getSize(b.Rectangle.identity);
			return 0 <= c && c < e.width && 0 <= a && a < e.height ? this.mask || this._scrollRect ? this._scrollRect && c > this._scrollRect.x && a > this._scrollRect.y && c < this._scrollRect.x + this._scrollRect.width && a < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= c && c < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this : null : this : null
		};
		a.prototype.hitTestPoint = function (c, a, e) {
			c = this.globalToLocal(c,
					a);
			return e ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), e = this._hitTestPointTexture, e.drawToTexture(this), 0 != e.getPixel32(c.x - this._hitTestPointTexture._offsetX, c.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(c.x, c.y, !0)
		};
		a.prototype._getMatrix = function (c) {
			c || (c = b.Matrix.identity.identity());
			var a,
			e;
			e = this._getOffsetPoint();
			a = e.x;
			e = e.y;
			var d = this.__hack_local_matrix;
			d ? (c.append(d.a, d.b, d.c, d.d, d.tx, d.ty), c.append(1, 0, 0, 1, -a, -e)) : c.appendTransform(this._x,
				this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a, e);
			return c
		};
		a.prototype._getSize = function (c) {
			return this._hasHeightSet && this._hasWidthSet ? c.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(c)
		};
		a.prototype._measureSize = function (c) {
			this._sizeDirty ? (c = this._measureBounds(), this._rectW = c.width, this._rectH = c.height, this._clearSizeDirty()) : (c.width = this._rectW, c.height = this._rectH);
			c.x = 0;
			c.y = 0;
			return c
		};
		a.prototype._measureBounds = function () {
			return b.Rectangle.identity.initialize(0,
				0, 0, 0)
		};
		a.prototype._getOffsetPoint = function () {
			var c = this._anchorOffsetX,
			a = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY)
				a = this._getSize(b.Rectangle.identity), c = this._anchorX * a.width, a = this._anchorY * a.height;
			var e = b.Point.identity;
			e.x = c;
			e.y = a;
			return e
		};
		a.prototype._onAddToStage = function () {
			this._stage = b.MainContext.instance.stage;
			b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		a.prototype._onRemoveFromStage = function () {
			b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(a.prototype, "stage", {
			get : function () {
				return this._stage
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.addEventListener = function (c, k, l, d, g) {
			void 0 === d && (d = !1);
			void 0 === g && (g = 0);
			e.prototype.addEventListener.call(this, c, k, l, d, g);
			((d = c == b.Event.ENTER_FRAME) || c == b.Event.RENDER) && this._insertEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, k, l, g, this)
		};
		a.prototype.removeEventListener = function (c, k, l, d) {
			void 0 === d && (d = !1);
			e.prototype.removeEventListener.call(this, c, k, l, d);
			((d =
						c == b.Event.ENTER_FRAME) || c == b.Event.RENDER) && this._removeEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, k, l, this)
		};
		a.prototype.dispatchEvent = function (c) {
			if (!c._bubbles)
				return e.prototype.dispatchEvent.call(this, c);
			for (var a = [], b = this; b; )
				a.push(b), b = b._parent;
			c._reset();
			this._dispatchPropagationEvent(c, a);
			return !c._isDefaultPrevented
		};
		a.prototype._dispatchPropagationEvent = function (c, a, b) {
			b = a.length;
			for (var e = 1, d = b - 1; 0 <= d; d--) {
				var f = a[d];
				c._currentTarget = f;
				c._target = this;
				c._eventPhase = e;
				f._notifyListener(c);
				if (c._isPropagationStopped || c._isPropagationImmediateStopped)
					return
			}
			f = a[0];
			c._currentTarget = f;
			c._target = this;
			c._eventPhase = 2;
			f._notifyListener(c);
			if (!c._isPropagationStopped && !c._isPropagationImmediateStopped)
				for (e = 3, d = 1; d < b && (f = a[d], c._currentTarget = f, c._target = this, c._eventPhase = e, f._notifyListener(c), !c._isPropagationStopped && !c._isPropagationImmediateStopped); d++);
		};
		a.prototype.willTrigger = function (c) {
			for (var a = this; a; ) {
				if (a.hasEventListener(c))
					return !0;
				a = a._parent
			}
			return !1
		};
		Object.defineProperty(a.prototype, "cacheAsBitmap", {
			get : function () {
				return this._cacheAsBitmap
			},
			set : function (c) {
				(this._cacheAsBitmap = c) ? b.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._makeBitmapCache = function () {
			this.renderTexture || (this.renderTexture = new b.RenderTexture);
			var c = this.renderTexture.drawToTexture(this);
			this._texture_to_render = c ? this.renderTexture : null;
			return c
		};
		a.prototype._setCacheDirty = function (c) {
			void 0 === c && (c = !0);
			this._cacheDirty =
				c
		};
		a.getTransformBounds = function (c, a) {
			var b = c.x,
			e = c.y,
			d = c.width,
			f = c.height;
			(b || e) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -e);
			var h = d * a.a,
			d = d * a.b,
			n = f * a.c,
			f = f * a.d,
			p = a.tx,
			q = a.ty,
			r = p,
			s = p,
			t = q,
			u = q;
			(b = h + p) < r ? r = b : b > s && (s = b);
			(b = h + n + p) < r ? r = b : b > s && (s = b);
			(b = n + p) < r ? r = b : b > s && (s = b);
			(e = d + q) < t ? t = e : e > u && (u = e);
			(e = d + f + q) < t ? t = e : e > u && (u = e);
			(e = f + q) < t ? t = e : e > u && (u = e);
			return c.initialize(r, t, s - r, u - t)
		};
		Object.defineProperty(a.prototype, "colorTransform", {
			get : function () {
				return this._colorTransform
			},
			set : function (c) {
				this._colorTransform =
					c
			},
			enumerable : !0,
			configurable : !0
		});
		a.identityMatrixForGetConcatenated = new b.Matrix;
		a._enterFrameCallBackList = [];
		a._renderCallBackList = [];
		return a
	}
	(b.EventDispatcher);
	b.DisplayObject = d;
	d.prototype.__class__ = "egret.DisplayObject";
	d = function () {
		function b() {
			this.matrix = null
		}
		b.prototype.updateColor = function (a, c, k, b, e, d, f, h) {};
		return b
	}
	();
	b.ColorTransform = d;
	d.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "touchChildren", {
			get : function () {
				return this._touchChildren
			},
			set : function (c) {
				this._touchChildren = c
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "numChildren", {
			get : function () {
				return this._children.length
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.setChildIndex = function (c, a) {
			this.doSetChildIndex(c, a)
		};
		a.prototype.doSetChildIndex = function (c,
			a) {
			var e = this._children.indexOf(c);
			0 > e && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
			this._children.splice(e, 1);
			0 > a || this._children.length <= a ? this._children.push(c) : this._children.splice(a, 0, c)
		};
		a.prototype.addChild = function (c) {
			var a = this._children.length;
			c._parent == this && a--;
			return this._doAddChild(c, a)
		};
		a.prototype.addChildAt = function (c, a) {
			return this._doAddChild(c, a)
		};
		a.prototype._doAddChild = function (c, k, e) {
			void 0 === e && (e = !0);
			if (c == this)
				return c;
			if (0 > k || k > this._children.length)
				return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
				c;
			var d = c._parent;
			if (d == this)
				return this.doSetChildIndex(c, k), c;
			d && (k = d._children.indexOf(c), 0 <= k && d._doRemoveChild(k));
			this._children.splice(k, 0, c);
			c._parentChanged(this);
			e && c.dispatchEventWith(b.Event.ADDED, !0);
			if (this._stage)
				for (c._onAddToStage(), k = a.__EVENT__ADD_TO_STAGE_LIST; 0 < k.length; )
					k.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
			c._setDirty();
			this._setSizeDirty();
			return c
		};
		a.prototype.removeChild = function (c) {
			c = this._children.indexOf(c);
			if (0 <= c)
				return this._doRemoveChild(c);
			b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
			return null
		};
		a.prototype.removeChildAt = function (c) {
			if (0 <= c && c < this._children.length)
				return this._doRemoveChild(c);
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype._doRemoveChild = function (c, k) {
			void 0 === k && (k = !0);
			var e = this._children,
			d = e[c];
			k && d.dispatchEventWith(b.Event.REMOVED, !0);
			if (this._stage) {
				d._onRemoveFromStage();
				for (var g = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < g.length; ) {
					var f = g.shift();
					f.dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
					f._stage = null
				}
			}
			d._parentChanged(null);
			e.splice(c, 1);
			this._setSizeDirty();
			return d
		};
		a.prototype.getChildAt = function (c) {
			if (0 <= c && c < this._children.length)
				return this._children[c];
			b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
			return null
		};
		a.prototype.contains = function (c) {
			for (; c; ) {
				if (c == this)
					return !0;
				c = c._parent
			}
			return !1
		};
		a.prototype.swapChildrenAt = function (c, a) {
			0 <= c && c < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(c, a) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
		};
		a.prototype.swapChildren = function (c, a) {
			var e = this._children.indexOf(c),
			d = this._children.indexOf(a);
			-1 == e || -1 == d ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(e, d)
		};
		a.prototype._swapChildrenAt = function (c, a) {
			if (c != a) {
				var b = this._children,
				e = b[c];
				b[c] = b[a];
				b[a] = e
			}
		};
		a.prototype.getChildIndex = function (c) {
			return this._children.indexOf(c)
		};
		a.prototype.removeChildren = function () {
			for (var c = this._children.length - 1; 0 <= c; c--)
				this._doRemoveChild(c)
		};
		a.prototype._updateTransform =
		function () {
			if (this._visible) {
				e.prototype._updateTransform.call(this);
				for (var c = 0, a = this._children.length; c < a; c++)
					this._children[c]._updateTransform()
			}
		};
		a.prototype._render = function (c) {
			for (var a = 0, b = this._children.length; a < b; a++)
				this._children[a]._draw(c)
		};
		a.prototype._measureBounds = function () {
			for (var c = 0, a = 0, e = 0, d = 0, g = this._children.length, f = 0; f < g; f++) {
				var h = this._children[f];
				if (h._visible) {
					var n = h.getBounds(b.Rectangle.identity, !1),
					p = n.x,
					q = n.y,
					r = n.width,
					n = n.height,
					h = h._getMatrix(),
					h = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p,
								q, r, n), h),
					p = h.x,
					q = h.y,
					r = h.width + h.x,
					h = h.height + h.y;
					if (p < c || 0 == f)
						c = p;
					if (r > a || 0 == f)
						a = r;
					if (q < e || 0 == f)
						e = q;
					if (h > d || 0 == f)
						d = h
				}
			}
			return b.Rectangle.identity.initialize(c, e, a - c, d - e)
		};
		a.prototype.hitTest = function (c, a, l) {
			void 0 === l && (l = !1);
			var d;
			if (!this._visible)
				return null;
			if (this._scrollRect) {
				if (c < this._scrollRect.x || a < this._scrollRect.y || c > this._scrollRect.x + this._scrollRect.width || a > this._scrollRect.y + this._scrollRect.height)
					return null
			} else if (this.mask && (this.mask.x > c || c > this.mask.x + this.mask.width || this.mask.y >
					a || a > this.mask.y + this.mask.height))
				return null;
			for (var g = this._children, f = this._touchChildren, h = g.length - 1; 0 <= h; h--) {
				var n = g[h],
				p = n._getMatrix(),
				q = n._scrollRect;
				q && p.append(1, 0, 0, 1, -q.x, -q.y);
				p.invert();
				p = b.Matrix.transformCoords(p, c, a);
				if (n = n.hitTest(p.x, p.y, !0)) {
					if (!f)
						return this;
					if (n._touchEnabled && f)
						return n;
					d = this
				}
			}
			return d ? d : this._texture_to_render || this.graphics ? e.prototype.hitTest.call(this, c, a, l) : null
		};
		a.prototype._onAddToStage = function () {
			e.prototype._onAddToStage.call(this);
			for (var c = this._children.length,
				a = 0; a < c; a++)
				this._children[a]._onAddToStage()
		};
		a.prototype._onRemoveFromStage = function () {
			e.prototype._onRemoveFromStage.call(this);
			for (var c = this._children.length, a = 0; a < c; a++)
				this._children[a]._onRemoveFromStage()
		};
		a.prototype.getChildByName = function (c) {
			for (var a = this._children, b = a.length, e, d = 0; d < b; d++)
				if (e = a[d], e.name == c)
					return e;
			return null
		};
		a.__EVENT__ADD_TO_STAGE_LIST = [];
		a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return a
	}
	(b.DisplayObject);
	b.DisplayObjectContainer = d;
	d.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret ||
	(egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a) {
			void 0 === c && (c = 480);
			void 0 === a && (a = 800);
			e.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = c;
			this._stageHeight = a
		}
		__extends(a, e);
		a.prototype.invalidate = function () {
			a._invalidateRenderFlag = !0
		};
		Object.defineProperty(a.prototype, "scaleMode", {
			get : function () {
				return this._scaleMode
			},
			set : function (c) {
				this._scaleMode != c && (this._scaleMode = c, this.setResolutionPolicy())
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.changeSize = function () {
			this.setResolutionPolicy();
			this.dispatchEventWith(b.Event.RESIZE)
		};
		a.prototype.setResolutionPolicy = function () {
			var c = {};
			c[b.StageScaleMode.NO_SCALE] = new b.NoScale;
			c[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
			c[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
			c[b.StageScaleMode.EXACT_FIT] = new b.FullScreen;
			c = c[this._scaleMode];
			if (!c)
				throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
			var a = new b.EqualToFrame,
			c = new b.ResolutionPolicy(a, c);
			b.StageDelegate.getInstance()._setResolutionPolicy(c);
			this._stageWidth = b.StageDelegate.getInstance()._stageWidth;
			this._stageHeight = b.StageDelegate.getInstance()._stageHeight
		};
		Object.defineProperty(a.prototype, "stageWidth", {
			get : function () {
				return this._stageWidth
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "stageHeight", {
			get : function () {
				return this._stageHeight
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.hitTest = function (c, a, e) {
			if (!this._touchEnabled)
				return null;
			var d;
			if (!this._touchChildren)
				return this;
			e = this._children;
			for (var g = e.length - 1; 0 <= g; g--) {
				d = e[g];
				var f = d._getMatrix(),
				h = d._scrollRect;
				h && f.append(1, 0, 0, 1, -h.x, -h.y);
				f.invert();
				f = b.Matrix.transformCoords(f, c, a);
				if ((d = d.hitTest(f.x, f.y, !0)) && d._touchEnabled)
					return d
			}
			return this
		};
		a.prototype.getBounds = function (c) {
			c || (c = new b.Rectangle);
			return c.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		a.prototype._updateTransform = function () {
			for (var c = 0, a = this._children.length; c < a; c++)
				this._children[c]._updateTransform()
		};
		Object.defineProperty(a.prototype, "focus", {
			get : function () {
				return null
			},
			enumerable : !0,
			configurable : !0
		});
		a._invalidateRenderFlag =
			!1;
		return a
	}
	(b.DisplayObjectContainer);
	b.Stage = d;
	d.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.NO_BORDER = "noBorder";
		b.NO_SCALE = "noScale";
		b.SHOW_ALL = "showAll";
		b.EXACT_FIT = "exactFit";
		return b
	}
	();
	b.StageScaleMode = d;
	d.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c) {
			void 0 === c && (c = null);
			e.call(this);
			this._lastTouchPosition = new b.Point(0, 0);
			this._lastTouchTime = 0;
			this._lastTouchEvent = null;
			this._velocitys = [];
			this._content = null;
			this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
			this._scrollTop = this._scrollLeft = 0;
			this._vCanScroll = this._hCanScroll = !1;
			this.touchEnabled = !0;
			c && this.setContent(c)
		}
		__extends(a, e);
		a.prototype.setContent = function (c) {
			this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this,
					0));
			this._content = c;
			e.prototype.addChild.call(this, c);
			this._addEvents();
			this._explicitWidth || this._getContentWidth();
			this._explicitHeight || this._getContentHeight()
		};
		Object.defineProperty(a.prototype, "verticalScrollPolicy", {
			get : function () {
				return this._verticalScrollPolicy
			},
			set : function (c) {
				c != this._verticalScrollPolicy && (this._verticalScrollPolicy = c)
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "horizontalScrollPolicy", {
			get : function () {
				return this._horizontalScrollPolicy
			},
			set : function (c) {
				c !=
				this._horizontalScrollPolicy && (this._horizontalScrollPolicy = c)
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "scrollLeft", {
			get : function () {
				return this._scrollLeft
			},
			set : function (c) {
				c != this._scrollLeft && (this._scrollLeft = c, this._validatePosition(!1, !0), this._updateContentPosition())
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "scrollTop", {
			get : function () {
				return this._scrollTop
			},
			set : function (c) {
				c != this._scrollTop && (this._scrollTop = c, this._validatePosition(!0,
						!1), this._updateContentPosition())
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.setScrollPosition = function (c, a, b) {
			void 0 === b && (b = !1);
			if (!b || 0 != c || 0 != a)
				if (b || this._scrollTop != c || this._scrollLeft != a) {
					if (b) {
						b = this._isOnTheEdge(!0);
						var e = this._isOnTheEdge(!1);
						this._scrollTop += b ? c / 2 : c;
						this._scrollLeft += e ? a / 2 : a
					} else
						this._scrollTop = c, this._scrollLeft = a;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
		};
		a.prototype._isOnTheEdge = function (c) {
			void 0 === c && (c = !0);
			var a = this._scrollTop,
			b = this._scrollLeft;
			return c ? 0 > a || a > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
		};
		a.prototype._validatePosition = function (c, a) {
			void 0 === c && (c = !1);
			void 0 === a && (a = !1);
			if (c) {
				var b = this.height,
				e = this._getContentHeight();
				this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
				this._scrollTop = Math.min(this._scrollTop, e > b ? e - b / 2 : e / 2)
			}
			a && (b = this.width, e = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, e > b ? e - b / 2 : e / 2))
		};
		a.prototype._setWidth = function (c) {
			this._explicitWidth !=
			c && (e.prototype._setWidth.call(this, c), this._updateContentPosition())
		};
		a.prototype._setHeight = function (c) {
			this._explicitHeight != c && (e.prototype._setHeight.call(this, c), this._updateContentPosition())
		};
		a.prototype._updateContentPosition = function () {
			var c = this.getBounds(b.Rectangle.identity);
			this.scrollRect = new b.Rectangle(this._scrollLeft, this._scrollTop, c.width, c.height);
			this.dispatchEvent(new b.Event(b.Event.CHANGE))
		};
		a.prototype._checkScrollPolicy = function () {
			var c = this.__checkScrollPolicy(this._horizontalScrollPolicy,
					this._getContentWidth(), this.width);
			this._hCanScroll = c;
			var a = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
			this._vCanScroll = a;
			return c || a
		};
		a.prototype.__checkScrollPolicy = function (c, a, b) {
			return "on" == c ? !0 : "off" == c ? !1 : a > b
		};
		a.prototype._addEvents = function () {
			this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture,
				this, !0)
		};
		a.prototype._removeEvents = function () {
			this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		a.prototype._onTouchBegin = function (c) {
			c._isDefaultPrevented || (b.Tween.removeTweens(this), this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(b.TouchEvent.TOUCH_END,
					this._onTouchEnd, this), this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(c), c.preventDefault())
		};
		a.prototype._onTouchBeginCapture = function (c) {
			var k = this._checkScrollPolicy();
			if (k) {
				for (var e = c.target; e != this; ) {
					if (e instanceof a && (k = e._checkScrollPolicy()))
						return;
					e = e.parent
				}
				c.stopPropagation();
				this.delayTouchBeginEvent = this.cloneTouchEvent(c);
				this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100,
							1), this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
				this.touchBeginTimer.start();
				this._onTouchBegin(c)
			}
		};
		a.prototype._onTouchEndCapture = function (c) {
			this.delayTouchBeginEvent && this._onTouchBeginTimer()
		};
		a.prototype._onTouchBeginTimer = function () {
			this.touchBeginTimer.stop();
			var c = this.delayTouchBeginEvent;
			this.delayTouchBeginEvent = null;
			this.dispatchPropagationEvent(c)
		};
		a.prototype.dispatchPropagationEvent = function (c) {
			for (var a = [], b = c._target; b; )
				a.push(b),
				b = b.parent;
			for (var e = this._content, d = 1; ; d += 2) {
				b = a[d];
				if (!b || b === e)
					break;
				a.unshift(b)
			}
			this._dispatchPropagationEvent(c, a)
		};
		a.prototype._dispatchPropagationEvent = function (c, a, b) {
			for (var e = a.length, d = 0; d < e; d++) {
				var f = a[d];
				c._currentTarget = f;
				c._target = this;
				c._eventPhase = d < b ? 1 : d == b ? 2 : 3;
				f._notifyListener(c);
				if (c._isPropagationStopped || c._isPropagationImmediateStopped)
					break
			}
		};
		a.prototype._onTouchMove = function (c) {
			if (this._lastTouchPosition.x != c.stageX || this._lastTouchPosition.y != c.stageY) {
				this.delayTouchBeginEvent &&
				(this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				this.touchChildren = !1;
				var a = this._getPointChange(c);
				this.setScrollPosition(a.y, a.x, !0);
				this._calcVelocitys(c);
				this._logTouchEvent(c)
			}
		};
		a.prototype._onTouchEnd = function (c) {
			this.touchChildren = !0;
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
			b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE,
				this._onTouchEnd, this);
			this.removeEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this);
			this._moveAfterTouchEnd()
		};
		a.prototype._onEnterFrame = function (c) {
			c = b.getTimer();
			100 < c - this._lastTouchTime && 300 > c - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
		};
		a.prototype._logTouchEvent = function (c) {
			this._lastTouchPosition.x = c.stageX;
			this._lastTouchPosition.y = c.stageY;
			this._lastTouchEvent = this.cloneTouchEvent(c);
			this._lastTouchTime = b.getTimer()
		};
		a.prototype._getPointChange = function (c) {
			return {
				x : !1 ===
				this._hCanScroll ? 0 : this._lastTouchPosition.x - c.stageX,
				y : !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - c.stageY
			}
		};
		a.prototype._calcVelocitys = function (c) {
			var a = b.getTimer();
			if (0 == this._lastTouchTime)
				this._lastTouchTime = a;
			else {
				var e = this._getPointChange(c),
				a = a - this._lastTouchTime;
				e.x /= a;
				e.y /= a;
				this._velocitys.push(e);
				5 < this._velocitys.length && this._velocitys.shift();
				this._lastTouchPosition.x = c.stageX;
				this._lastTouchPosition.y = c.stageY
			}
		};
		a.prototype._getContentWidth = function () {
			return this._content.explicitWidth ||
			this._content.width
		};
		a.prototype._getContentHeight = function () {
			return this._content.explicitHeight || this._content.height
		};
		a.prototype.getMaxScrollLeft = function () {
			var c = this._getContentWidth() - this.width;
			return Math.max(0, c)
		};
		a.prototype.getMaxScrollTop = function () {
			var c = this._getContentHeight() - this.height;
			return Math.max(0, c)
		};
		a.prototype._moveAfterTouchEnd = function () {
			if (0 != this._velocitys.length) {
				for (var c = 0, b = 0, e = 0, d = 0; d < this._velocitys.length; d++)
					var g = this._velocitys[d], f = a.weight[d], c = c + g.x * f,
					b = b + g.y * f, e = e + f;
				this._velocitys.length = 0;
				c /= e;
				b /= e;
				g = Math.abs(c);
				e = Math.abs(b);
				f = this.getMaxScrollLeft();
				d = this.getMaxScrollTop();
				c = 0.02 < g ? this.getAnimationDatas(c, this._scrollLeft, f) : {
					position : this._scrollLeft,
					duration : 1
				};
				b = 0.02 < e ? this.getAnimationDatas(b, this._scrollTop, d) : {
					position : this._scrollTop,
					duration : 1
				};
				this.setScrollLeft(c.position, c.duration);
				this.setScrollTop(b.position, b.duration)
			}
		};
		a.prototype.setScrollTop = function (c, a) {
			void 0 === a && (a = 0);
			var e = Math.min(this.getMaxScrollTop(), Math.max(c,
						0));
			if (0 == a)
				return this.scrollTop = e, null;
			var d = b.Tween.get(this).to({
					scrollTop : c
				}, a, b.Ease.quartOut);
			e != c && d.to({
				scrollTop : e
			}, 300, b.Ease.quintOut)
		};
		a.prototype.setScrollLeft = function (c, a) {
			void 0 === a && (a = 0);
			var e = Math.min(this.getMaxScrollLeft(), Math.max(c, 0));
			if (0 == a)
				return this.scrollLeft = e, null;
			var d = b.Tween.get(this).to({
					scrollLeft : c
				}, a, b.Ease.quartOut);
			e != c && d.to({
				scrollLeft : e
			}, 300, b.Ease.quintOut)
		};
		a.prototype.getAnimationDatas = function (c, a, b) {
			var e = Math.abs(c),
			d = 0,
			f = a + 500 * c;
			if (0 > f || f > b)
				for (f =
						a; Infinity != Math.abs(c) && 0.02 < Math.abs(c); )
					f += c, c = 0 > f || f > b ? 0.998 * c * 0.95 : 0.998 * c, d++;
			else
				d = 500 * -Math.log(0.02 / e);
			return {
				position : Math.min(b + 50, Math.max(f, -50)),
				duration : d
			}
		};
		a.prototype.cloneTouchEvent = function (c) {
			var a = new b.TouchEvent(c._type, c._bubbles, c.cancelable);
			a.touchPointID = c.touchPointID;
			a._stageX = c._stageX;
			a._stageY = c._stageY;
			a.ctrlKey = c.ctrlKey;
			a.altKey = c.altKey;
			a.shiftKey = c.shiftKey;
			a.touchDown = c.touchDown;
			a._isDefaultPrevented = !1;
			a._target = c._target;
			return a
		};
		a.prototype.throwNotSupportedError =
		function () {
			throw Error("\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!");
		};
		a.prototype.addChild = function (c) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.addChildAt = function (c, a) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.removeChild = function (c) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.removeChildAt = function (c) {
			this.throwNotSupportedError();
			return null
		};
		a.prototype.setChildIndex = function (c, a) {
			this.throwNotSupportedError()
		};
		a.prototype.swapChildren = function (c,
			a) {
			this.throwNotSupportedError()
		};
		a.prototype.swapChildrenAt = function (c, a) {
			this.throwNotSupportedError()
		};
		a.weight = [1, 1.33, 1.66, 2, 2.33];
		return a
	}
	(b.DisplayObjectContainer);
	b.ScrollView = d;
	d.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c, a, d) {
			void 0 === a && (a = NaN);
			void 0 === d && (d = NaN);
			e.call(this, c);
			this.content = c;
			this.width = NaN == a ? this._getContentWidth() : a;
			this.height = NaN == d ? this._getContentHeight() : d;
			b.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView")
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "scrollXEnabled", {
			get : function () {
				return "off" != this.horizontalScrollPolicy
			},
			set : function (c) {
				b.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView");
				this.horizontalScrollPolicy = c ? "auto" : "off"
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "scrollYEnabled", {
			get : function () {
				return "off" != this.verticalScrollPolicy
			},
			set : function (c) {
				b.Logger.warning("egret.Scroller\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.ScrollView");
				this.verticalScrollPolicy = c ? "auto" : "off"
			},
			enumerable : !0,
			configurable : !0
		});
		return a
	}
	(b.ScrollView);
	b.Scroller = d;
	d.prototype.__class__ = "egret.Scroller"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.REPEAT = "repeat";
		b.SCALE = "scale";
		return b
	}
	();
	b.BitmapFillMode = d;
	d.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c) {
			e.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.scale9Grid = null;
			this.fillMode = "scale";
			c && (this._texture = c, this._setSizeDirty())
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "texture", {
			get : function () {
				return this._texture
			},
			set : function (c) {
				c != this._texture && (this._setSizeDirty(), this._texture = c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._render = function (c) {
			var b = this._texture;
			b ? (this._texture_to_render = b, a._drawBitmap(c, this._hasWidthSet ? this._explicitWidth :
					b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
		};
		a._drawBitmap = function (c, b, e, d) {
			var g = d._texture_to_render;
			if (g) {
				var f = g._textureWidth,
				h = g._textureHeight;
				if ("scale" == d.fillMode) {
					var n = d.scale9Grid || g.scale9Grid;
					if (n && f - n.width < b && h - n.height < e)
						a.drawScale9GridImage(c, d, n, b, e);
					else {
						var n = g._offsetX,
						p = g._offsetY,
						q = g._bitmapWidth || f,
						r = g._bitmapHeight || h;
						b /= f;
						n = Math.round(n * b);
						b = Math.round(q * b);
						e /= h;
						p = Math.round(p * e);
						e = Math.round(r * e);
						a.renderFilter.drawImage(c,
							d, g._bitmapX, g._bitmapY, q, r, n, p, b, e)
					}
				} else
					a.drawRepeatImage(c, d, b, e, d.fillMode)
			}
		};
		a.drawRepeatImage = function (c, a, e, d, g) {
			var f = a._texture_to_render;
			if (f) {
				var h = f._textureWidth,
				n = f._textureHeight,
				p = f._bitmapX,
				q = f._bitmapY,
				h = f._bitmapWidth || h,
				n = f._bitmapHeight || n,
				r = f._offsetX,
				f = f._offsetY;
				b.RenderFilter.getInstance().drawImage(c, a, p, q, h, n, r, f, e, d, g)
			}
		};
		a.drawScale9GridImage = function (c, a, e, d, g) {
			var f = a._texture_to_render;
			if (f && e) {
				var h = b.RenderFilter.getInstance(),
				n = f._textureWidth,
				p = f._textureHeight,
				q = f._bitmapX,
				r = f._bitmapY,
				s = f._bitmapWidth || n,
				t = f._bitmapHeight || p,
				u = f._offsetX,
				f = f._offsetY;
				e = b.Rectangle.identity.initialize(e.x - Math.round(u), e.y - Math.round(u), e.width, e.height);
				u = Math.round(u);
				f = Math.round(f);
				d -= n - s;
				g -= p - t;
				e.y == e.bottom && (e.bottom < t ? e.bottom++ : e.y--);
				e.x == e.right && (e.right < s ? e.right++ : e.x--);
				var n = q + e.x,
				p = q + e.right,
				v = s - e.right,
				x = r + e.y,
				y = r + e.bottom,
				w = t - e.bottom,
				z = u + e.x,
				A = f + e.y,
				t = g - (t - e.bottom),
				s = d - (s - e.right);
				h.drawImage(c, a, q, r, e.x, e.y, u, f, e.x, e.y);
				h.drawImage(c, a, n, r, e.width,
					e.y, z, f, s - e.x, e.y);
				h.drawImage(c, a, p, r, v, e.y, u + s, f, d - s, e.y);
				h.drawImage(c, a, q, x, e.x, e.height, u, A, e.x, t - e.y);
				h.drawImage(c, a, n, x, e.width, e.height, z, A, s - e.x, t - e.y);
				h.drawImage(c, a, p, x, v, e.height, u + s, A, d - s, t - e.y);
				h.drawImage(c, a, q, y, e.x, w, u, f + t, e.x, g - t);
				h.drawImage(c, a, n, y, e.width, w, z, f + t, s - e.x, g - t);
				h.drawImage(c, a, p, y, v, w, u + s, f + t, d - s, g - t)
			}
		};
		a.prototype._measureBounds = function () {
			var c = this._texture;
			return c ? b.Rectangle.identity.initialize(c._offsetX, c._offsetY, c._textureWidth, c._textureHeight) : e.prototype._measureBounds.call(this)
		};
		a.debug = !1;
		a.renderFilter = b.RenderFilter.getInstance();
		return a
	}
	(b.DisplayObject);
	b.Bitmap = d;
	d.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._text = "";
			this._textChanged = !1;
			this._bitmapPool = []
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "text", {
			get : function () {
				return this._text
			},
			set : function (c) {
				this._textChanged = !0;
				this._text = c;
				this._setSizeDirty()
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._updateTransform = function () {
			this.visible && (this._textChanged && this._renderText(), e.prototype._updateTransform.call(this))
		};
		a.prototype._renderText = function (c) {
			var a = c = 0;
			this._textChanged &&
			this.removeChildren();
			for (var e = 0, d = this.text.length; e < d; e++) {
				var g = this.text.charAt(e),
				f = this.spriteSheet.getTexture(g);
				if (null == f)
					console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + g);
				else {
					var g = f._offsetX,
					h = f._offsetY,
					n = f._textureWidth;
					if (this._textChanged) {
						var p = this._bitmapPool[e];
						p || (p = new b.Bitmap, this._bitmapPool.push(p));
						p.texture = f;
						this.addChild(p);
						p.x = c
					}
					c += n + g;
					h + f._textureHeight > a && (a = h + f._textureHeight)
				}
			}
			this._textChanged = !1;
			return b.Rectangle.identity.initialize(0, 0,
				c, a)
		};
		a.prototype._measureBounds = function () {
			return this._renderText(!0)
		};
		return a
	}
	(b.DisplayObjectContainer);
	b.BitmapText = d;
	d.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {
			this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
			this.commandQueue = []
		}
		b.prototype.beginFill = function (a, c) {};
		b.prototype._setStyle = function (a) {};
		b.prototype.drawRect = function (a, c, b, e) {
			this.checkRect(a, c, b, e)
		};
		b.prototype.drawCircle = function (a, c, b) {
			this.checkRect(a - b, c - b, 2 * b, 2 * b)
		};
		b.prototype.drawRoundRect = function (a, c, b, e, d, g) {
			this.checkRect(a, c, b, e)
		};
		b.prototype.drawEllipse = function (a, c, b, e) {
			this.checkRect(a - b, c - e, 2 * b, 2 * e)
		};
		b.prototype.lineStyle =
		function (a, c, b, e, d, g, f, h) {};
		b.prototype.lineTo = function (a, c) {
			this.checkPoint(a, c)
		};
		b.prototype.curveTo = function (a, c, b, e) {
			this.checkPoint(a, c);
			this.checkPoint(b, e)
		};
		b.prototype.moveTo = function (a, c) {
			this.checkPoint(a, c)
		};
		b.prototype.clear = function () {
			this._maxY = this._maxX = this._minY = this._minX = 0
		};
		b.prototype.endFill = function () {};
		b.prototype._draw = function (a) {};
		b.prototype.checkRect = function (a, c, b, e) {
			this._minX = Math.min(this._minX, a);
			this._minY = Math.min(this._minY, c);
			this._maxX = Math.max(this._maxX, a +
					b);
			this._maxY = Math.max(this._maxY, c + e)
		};
		b.prototype.checkPoint = function (a, c) {
			this._minX = Math.min(this._minX, a);
			this._minY = Math.min(this._minY, c);
			this._maxX = Math.max(this._maxX, a);
			this._maxY = Math.max(this._maxY, c);
			this._lastX = a;
			this._lastY = c
		};
		return b
	}
	();
	b.Graphics = d;
	d.prototype.__class__ = "egret.Graphics";
	(function () {
		return function (b, a, c) {
			this.method = b;
			this.thisObject = a;
			this.args = c
		}
	})().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "graphics", {
			get : function () {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._render = function (c) {
			this._graphics && this._graphics._draw(c)
		};
		return a
	}
	(b.DisplayObject);
	b.Shape = d;
	d.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "graphics", {
			get : function () {
				this._graphics || (this._graphics = new b.Graphics);
				return this._graphics
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._render = function (c) {
			this._graphics && this._graphics._draw(c);
			e.prototype._render.call(this, c)
		};
		return a
	}
	(b.DisplayObjectContainer);
	b.Sprite = d;
	d.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
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
			this._isArrayChanged =
				!1;
			this._textMaxHeight = this._textMaxWidth = 0;
			this._linesArr = []
		}
		__extends(a, e);
		a.prototype.isInput = function () {
			return this._type == b.TextFieldType.INPUT
		};
		a.prototype._setTouchEnabled = function (c) {
			e.prototype._setTouchEnabled.call(this, c);
			this.isInput() && (this._inputEnabled = !0)
		};
		Object.defineProperty(a.prototype, "type", {
			get : function () {
				return this._type
			},
			set : function (c) {
				this._setType(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setType = function (c) {
			this._type != c && (this._type = c, this._type == b.TextFieldType.INPUT ?
				(this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new b.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
		};
		Object.defineProperty(a.prototype, "text", {
			get : function () {
				return this._getText()
			},
			set : function (c) {
				this._setText(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._getText = function () {
			return this._type ==
			b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
		};
		a.prototype._setSizeDirty = function () {
			e.prototype._setSizeDirty.call(this);
			this._isArrayChanged = !0
		};
		a.prototype._setTextDirty = function () {
			this._setSizeDirty()
		};
		a.prototype._setBaseText = function (c) {
			null == c && (c = "");
			this._isFlow = !1;
			if (this._text != c || this._displayAsPassword)
				this._setTextDirty(), this._text = c, c = "", c = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
							text : c
						}
					])
		};
		a.prototype._setText = function (c) {
			null ==
			c && (c = "");
			this._setBaseText(c);
			this._inputUtils && this._inputUtils._setText(this._text)
		};
		Object.defineProperty(a.prototype, "displayAsPassword", {
			get : function () {
				return this._displayAsPassword
			},
			set : function (c) {
				this._setDisplayAsPassword(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setDisplayAsPassword = function (c) {
			this._displayAsPassword != c && (this._displayAsPassword = c, this._setText(this._text))
		};
		Object.defineProperty(a.prototype, "fontFamily", {
			get : function () {
				return this._fontFamily
			},
			set : function (c) {
				this._setFontFamily(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setFontFamily = function (c) {
			this._fontFamily != c && (this._setTextDirty(), this._fontFamily = c)
		};
		Object.defineProperty(a.prototype, "size", {
			get : function () {
				return this._size
			},
			set : function (c) {
				this._setSize(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setSize = function (c) {
			this._size != c && (this._setTextDirty(), this._size = c)
		};
		Object.defineProperty(a.prototype, "italic", {
			get : function () {
				return this._italic
			},
			set : function (c) {
				this._setItalic(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setItalic = function (c) {
			this._italic != c && (this._setTextDirty(), this._italic = c)
		};
		Object.defineProperty(a.prototype, "bold", {
			get : function () {
				return this._bold
			},
			set : function (c) {
				this._setBold(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setBold = function (c) {
			this._bold != c && (this._setTextDirty(), this._bold = c)
		};
		Object.defineProperty(a.prototype, "textColor", {
			get : function () {
				return this._textColor
			},
			set : function (c) {
				this._setTextColor(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setTextColor =
		function (c) {
			this._textColor != c && (this._setTextDirty(), this._textColor = c, this._textColorString = b.toColorString(c))
		};
		Object.defineProperty(a.prototype, "strokeColor", {
			get : function () {
				return this._strokeColor
			},
			set : function (c) {
				this._setStrokeColor(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setStrokeColor = function (c) {
			this._strokeColor != c && (this._setTextDirty(), this._strokeColor = c, this._strokeColorString = b.toColorString(c))
		};
		Object.defineProperty(a.prototype, "stroke", {
			get : function () {
				return this._stroke
			},
			set : function (c) {
				this._setStroke(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setStroke = function (c) {
			this._stroke != c && (this._setTextDirty(), this._stroke = c)
		};
		Object.defineProperty(a.prototype, "textAlign", {
			get : function () {
				return this._textAlign
			},
			set : function (c) {
				this._setTextAlign(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setTextAlign = function (c) {
			this._textAlign != c && (this._setTextDirty(), this._textAlign = c)
		};
		Object.defineProperty(a.prototype, "verticalAlign", {
			get : function () {
				return this._verticalAlign
			},
			set : function (c) {
				this._setVerticalAlign(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setVerticalAlign = function (c) {
			this._verticalAlign != c && (this._setTextDirty(), this._verticalAlign = c)
		};
		Object.defineProperty(a.prototype, "maxChars", {
			get : function () {
				return this._maxChars
			},
			set : function (c) {
				this._setMaxChars(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setMaxChars = function (c) {
			this._maxChars != c && (this._maxChars = c)
		};
		Object.defineProperty(a.prototype, "scrollV", {
			set : function (c) {
				this._scrollV = c;
				this._setDirty()
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "maxScrollV", {
			get : function () {
				return this._maxScrollV
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "selectionBeginIndex", {
			get : function () {
				return 0
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "selectionEndIndex", {
			get : function () {
				return 0
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "caretIndex", {
			get : function () {
				return 0
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setSelection =
		function (c, a) {};
		Object.defineProperty(a.prototype, "lineSpacing", {
			get : function () {
				return this._lineSpacing
			},
			set : function (c) {
				this._setLineSpacing(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setLineSpacing = function (c) {
			this._lineSpacing != c && (this._setTextDirty(), this._lineSpacing = c)
		};
		a.prototype._getLineHeight = function () {
			return this._lineSpacing + this._size
		};
		Object.defineProperty(a.prototype, "numLines", {
			get : function () {
				return this._numLines
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype,
			"multiline", {
			get : function () {
				return this._multiline
			},
			set : function (c) {
				this._setMultiline(c)
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setMultiline = function (c) {
			this._multiline = c;
			this._setDirty()
		};
		a.prototype.setFocus = function () {
			b.Logger.warning("TextField.setFocus \u6ca1\u6709\u5b9e\u73b0")
		};
		a.prototype._onRemoveFromStage = function () {
			e.prototype._onRemoveFromStage.call(this);
			this._type == b.TextFieldType.INPUT && this._inputUtils._removeStageText()
		};
		a.prototype._onAddToStage = function () {
			e.prototype._onAddToStage.call(this);
			this._type == b.TextFieldType.INPUT && this._inputUtils._addStageText()
		};
		a.prototype._updateBaseTransform = function () {
			e.prototype._updateTransform.call(this)
		};
		a.prototype._updateTransform = function () {
			this._type == b.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
		};
		a.prototype._render = function (c) {
			this.drawText(c);
			this._clearDirty()
		};
		a.prototype._measureBounds = function () {
			return this.measureText()
		};
		Object.defineProperty(a.prototype, "textFlow", {
			set : function (c) {
				this._isFlow = !0;
				for (var a = "", b = 0; b < c.length; b++)
					a += c[b].text;
				this._displayAsPassword ? this._setBaseText(a) : (this._text = a, this.setMiddleStyle(c))
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.changeToPassText = function (c) {
			if (this._displayAsPassword) {
				for (var a = "", b = 0, e = c.length; b < e; b++)
					switch (c.charAt(b)) {
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
			return c
		};
		a.prototype.setMiddleStyle = function (c) {
			this._isArrayChanged = !0;
			this._textArr = c;
			this._setSizeDirty()
		};
		Object.defineProperty(a.prototype, "textWidth", {
			get : function () {
				return this._textMaxWidth
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "textHeight", {
			get : function () {
				return this._textMaxHeight
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.appendText = function (c) {
			this.appendElement({
				text : c
			})
		};
		a.prototype.appendElement = function (c) {
			this._textArr.push(c);
			this.setMiddleStyle(this._textArr)
		};
		a.prototype._getLinesArr = function () {
			if (!this._isArrayChanged)
				return this._linesArr;
			this._isArrayChanged = !1;
			var c = this._textArr,
			a = b.MainContext.instance.rendererContext;
			this._linesArr = [];
			this._textMaxWidth = this._textMaxHeight = 0;
			var e = this._linesArr,
			d = 0,
			g = 0,
			f = 0,
			h;
			this._isFlow || a.setupFont(this);
			for (var n = 0; n < c.length; n++) {
				var p = c[n];
				p.style = p.style || {};
				for (var q = p.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < q.length; r++) {
					null == e[f] && (h = {
							width : 0,
							height : 0,
							elements : []
						}, e[f] = h, g = d = 0);
					g = this._type == b.TextFieldType.INPUT ? this._size : Math.max(g, p.style.size || this._size);
					if ("" != q[r]) {
						this._isFlow &&
						a.setupFont(this, p.style);
						var s = a.measureText(q[r]);
						if (this._hasWidthSet)
							if (d + s <= this._explicitWidth)
								h.elements.push({
									width : s,
									text : q[r],
									style : p.style
								}), d += s;
							else {
								for (var t = 0, u = 0, v = q[r]; t < v.length; t++) {
									s = a.measureText(v.charAt(t));
									if (d + s > this._explicitWidth)
										break;
									u += s;
									d += s
								}
								0 < t && (h.elements.push({
										width : u,
										text : v.substring(0, t),
										style : p.style
									}), q[r] = v.substring(t));
								r--
							}
						else
							d += s, h.elements.push({
								width : s,
								text : q[r],
								style : p.style
							})
					}
					if (r < q.length - 1) {
						h.width = d;
						h.height = g;
						this._textMaxWidth = Math.max(this._textMaxWidth,
								d);
						this._textMaxHeight += g;
						if (this._type == b.TextFieldType.INPUT && !this._multiline)
							return this._numLines = e.length, e;
						f++
					}
				}
				n == c.length - 1 && h && (h.width = d, h.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, d), this._textMaxHeight += g)
			}
			this._numLines = e.length;
			return e
		};
		a.prototype.measureText = function () {
			return this._getLinesArr() ? b.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) *
				this._lineSpacing) : b.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		a.prototype.drawText = function (c) {
			var a = this._getLinesArr();
			if (a) {
				this._isFlow || c.setupFont(this);
				var e = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
				d = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
				g = 0,
				f = 0;
				if (this._hasHeightSet)
					if (d < this._explicitHeight) {
						var h = 0;
						this._verticalAlign == b.VerticalAlign.MIDDLE ? h = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (h = 1);
						g += h * (this._explicitHeight - d)
					} else
						d > this._explicitHeight &&
						(f = Math.max(this._scrollV - 1, 0), f = Math.min(this._numLines - 1, f));
				g = Math.round(g);
				d = 0;
				this._textAlign == b.HorizontalAlign.CENTER ? d = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (d = 1);
				for (h = 0; f < this._numLines; f++) {
					var n = a[f],
					p = n.height,
					g = g + p / 2;
					if (0 != f && this._hasHeightSet && g > this._explicitHeight)
						break;
					for (var h = Math.round((e - n.width) * d), q = 0; q < n.elements.length; q++) {
						var r = n.elements[q],
						s = r.style.size || this._size;
						this._type == b.TextFieldType.INPUT ? c.drawText(this, r.text, h, g + (p - s) / 2, r.width) : (this._isFlow &&
							c.setupFont(this, r.style), c.drawText(this, r.text, h, g + (p - s) / 2, r.width, r.style));
						h += r.width
					}
					g += p / 2 + this._lineSpacing
				}
			}
		};
		a.default_fontFamily = "Arial";
		return a
	}
	(b.DisplayObject);
	b.TextField = d;
	d.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {
			this.resutlArr = []
		}
		b.prototype.parser = function (a) {
			this.stackArray = [];
			this.resutlArr = [];
			for (var c = 0, b = a.length; c < b; ) {
				var e = a.indexOf("<", c);
				0 > e ? (this.addToResultArr(a.substring(c)), c = b) : (this.addToResultArr(a.substring(c, e)), c = a.indexOf(">", e), "/" == a.charAt(e + 1) ? this.stackArray.pop() : this.addToArray(a.substring(e + 1, c)), c += 1)
			}
			return this.resutlArr
		};
		b.prototype.addToResultArr = function (a) {
			if ("" != a) {
				var c = [];
				c.push(["&lt;", "<"]);
				c.push(["&gt;", ">"]);
				c.push(["&amp;",
						"&"]);
				c.push(["&quot;", '"']);
				c.push(["&apos;;", "'"]);
				for (var b = 0; b < c.length; b++)
					a.replace(new RegExp(c[b][0], "g"), c[b][1]);
				0 < this.stackArray.length ? this.resutlArr.push({
					text : a,
					style : this.stackArray[this.stackArray.length - 1]
				}) : this.resutlArr.push({
					text : a
				})
			}
		};
		b.prototype.changeStringToObject = function (a) {
			var c = {};
			a = a.replace(/( )+/g, " ").split(" ");
			for (var b = 0; b < a.length; b++)
				this.addProperty(c, a[b]);
			return c
		};
		b.prototype.addProperty = function (a, c) {
			var b = c.replace(/( )*=( )*/g, "=").split("=");
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
		b.prototype.addToArray = function (a) {
			a = this.changeStringToObject(a);
			if (0 != this.stackArray.length) {
				var c = this.stackArray[this.stackArray.length - 1],
				b;
				for (b in c)
					null == a[b] && (a[b] = c[b])
			}
			this.stackArray.push(a)
		};
		return b
	}
	();
	b.HtmlTextParser =
		d;
	d.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.DYNAMIC = "dynamic";
		b.INPUT = "input";
		return b
	}
	();
	b.TextFieldType = d;
	d.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(c) {
			e.call(this);
			var a = c.bitmapData;
			this.bitmapData = a;
			this._textureMap = {};
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._bitmapX = c._bitmapX - c._offsetX;
			this._bitmapY = c._bitmapY - c._offsetY
		}
		__extends(a, e);
		a.prototype.getTexture = function (c) {
			return this._textureMap[c]
		};
		a.prototype.createTexture = function (c, a, e, d, g, f, h, n, p) {
			void 0 === f && (f = 0);
			void 0 === h && (h = 0);
			"undefined" === typeof n && (n = f + d);
			"undefined" === typeof p && (p = h + g);
			var q = new b.Texture;
			q._bitmapData =
				this.bitmapData;
			q._bitmapX = this._bitmapX + a;
			q._bitmapY = this._bitmapY + e;
			q._bitmapWidth = d;
			q._bitmapHeight = g;
			q._offsetX = f;
			q._offsetY = h;
			q._textureWidth = n;
			q._textureHeight = p;
			q._sourceWidth = this._sourceWidth;
			q._sourceHeight = this._sourceHeight;
			return this._textureMap[c] = q
		};
		return a
	}
	(b.HashObject);
	b.SpriteSheet = d;
	d.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			b.Logger.warning("TextInput \u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextField\u4ee3\u66ff\uff0c\u5e76\u8bbe\u7f6etype\u4e3aTextFieldType.INPUT");
			this.type = b.TextFieldType.INPUT
		}
		__extends(a, e);
		a.prototype.setText = function (c) {
			b.Logger.warning("TextField.setText()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.text\u8bbe\u7f6e");
			this.text = c
		};
		a.prototype.getText = function () {
			b.Logger.warning("TextField.getText()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.text\u83b7\u53d6");
			return this.text
		};
		a.prototype.setTextType = function (c) {
			b.Logger.warning("TextField.setTextType()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.displayAsPassword\u8bbe\u7f6e");
			this.displayAsPassword = "password" == c
		};
		a.prototype.getTextType = function () {
			b.Logger.warning("TextField.getTextType()\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528TextInput.displayAsPassword\u83b7\u53d6");
			return this.displayAsPassword ? "password" : "text"
		};
		return a
	}
	(b.TextField);
	b.TextInput = d;
	d.prototype.__class__ = "egret.TextInput"
})(egret ||
	(egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._isFocus = !1;
			this._isFirst = this._isFirst = !0
		}
		__extends(a, e);
		a.prototype.init = function (c) {
			this._text = c;
			this.stageText = b.StageText.create();
			c = this._text.localToGlobal();
			this.stageText._open(c.x, c.y, this._text._explicitWidth, this._text._explicitHeight)
		};
		a.prototype._addStageText = function () {
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
		a.prototype._removeStageText = function () {
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
		a.prototype._getText = function () {
			return this.stageText._getText()
		};
		a.prototype._setText = function (c) {
			this.stageText._setText(c)
		};
		a.prototype.onFocusHandler =
		function (c) {
			this.hideText()
		};
		a.prototype.onBlurHandler = function (c) {
			this.showText()
		};
		a.prototype.onMouseDownHandler = function (c) {
			c.stopPropagation();
			this._text._visible && this.stageText._show()
		};
		a.prototype.onStageDownHandler = function (c) {
			this.stageText._hide();
			this.showText()
		};
		a.prototype.showText = function () {
			this._isFocus && (this._isFocus = !1, this.resetText())
		};
		a.prototype.hideText = function () {
			this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
		};
		a.prototype.updateTextHandler = function (c) {
			this.resetText();
			this._text.dispatchEvent(new b.Event(b.Event.CHANGE))
		};
		a.prototype.resetText = function () {
			this._text._setBaseText(this.stageText._getText())
		};
		a.prototype._updateTransform = function () {
			var c = this._text._worldTransform.a,
			a = this._text._worldTransform.b,
			e = this._text._worldTransform.c,
			d = this._text._worldTransform.d,
			g = this._text._worldTransform.tx,
			f = this._text._worldTransform.ty;
			this._text._updateBaseTransform();
			var h = this._text._worldTransform;
			if (this._isFirst || c != h.a || a != h.b || e != h.c || d != h.d || g != h.tx || f !=
				h.ty) {
				this._isFirst = !1;
				c = this._text.localToGlobal();
				this.stageText.changePosition(c.x, c.y);
				var n = this;
				b.callLater(function () {
					n.stageText._setScale(n._text._worldTransform.a, n._text._worldTransform.d)
				}, this)
			}
		};
		a.prototype._updateProperties = function () {
			var c = this._text._stage;
			if (null == c)
				this.stageText._setVisible(!1);
			else {
				for (var a = this._text, e = a._visible; e; ) {
					a = a.parent;
					if (a == c)
						break;
					e = a._visible
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
	}
	(b.HashObject);
	b.InputController = d;
	d.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(c, a) {
			b.call(this, c);
			this.charList = this.parseConfig(a)
		}
		__extends(a, b);
		a.prototype.getTexture = function (c) {
			var a = this._textureMap[c];
			if (!a) {
				a = this.charList[c];
				if (!a)
					return null;
				a = this.createTexture(c, a.x, a.y, a.width, a.height, a.offsetX, a.offsetY);
				this._textureMap[c] = a
			}
			return a
		};
		a.prototype.parseConfig = function (c) {
			c = c.split("\r\n").join("\n");
			c = c.split("\n");
			for (var a = this.getConfigByKey(c[3], "count"), b = {}, e = 4; e < 4 + a; e++) {
				var d = c[e],
				f = String.fromCharCode(this.getConfigByKey(d,
							"id")),
				h = {};
				b[f] = h;
				h.x = this.getConfigByKey(d, "x");
				h.y = this.getConfigByKey(d, "y");
				h.width = this.getConfigByKey(d, "width");
				h.height = this.getConfigByKey(d, "height");
				h.offsetX = this.getConfigByKey(d, "xoffset");
				h.offsetY = this.getConfigByKey(d, "yoffset")
			}
			return b
		};
		a.prototype.getConfigByKey = function (c, a) {
			for (var b = c.split(" "), e = 0, d = b.length; e < d; e++) {
				var f = b[e];
				if (a == f.substring(0, a.length))
					return b = f.substring(a.length + 1), parseInt(b)
			}
			return 0
		};
		return a
	}
	(b.SpriteSheet);
	b.BitmapTextSpriteSheet = d;
	d.prototype.__class__ =
		"egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (a) {
		function c(c, d) {
			a.call(this);
			this.frameRate = 60;
			c instanceof e ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = c) : this.delegate = new e(c, d);
			this.delegate.setMovieClip(this)
		}
		__extends(c, a);
		c.prototype.gotoAndPlay = function (c) {
			this.delegate.gotoAndPlay(c)
		};
		c.prototype.gotoAndStop = function (c) {
			this.delegate.gotoAndStop(c)
		};
		c.prototype.stop =
		function () {
			this.delegate.stop()
		};
		c.prototype.dispose = function () {
			this.delegate.dispose()
		};
		c.prototype.release = function () {
			b.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			this.dispose()
		};
		c.prototype.getCurrentFrameIndex = function () {
			b.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._currentFrameIndex
		};
		c.prototype.getTotalFrame = function () {
			b.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate._totalFrame
		};
		c.prototype.setInterval = function (c) {
			b.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
			this.frameRate = 60 / c
		};
		c.prototype.getIsPlaying = function () {
			b.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
			return this.delegate.isPlaying
		};
		return c
	}
	(b.DisplayObjectContainer);
	b.MovieClip = d;
	d.prototype.__class__ = "egret.MovieClip";
	var e = function () {
		function a(c, a) {
			this.data = c;
			this._currentFrameIndex = this._passTime =
				this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = c;
			this._spriteSheet = new b.SpriteSheet(a)
		}
		a.prototype.setMovieClip = function (c) {
			this.movieClip = c;
			this.bitmap = new b.Bitmap;
			this.movieClip.addChild(this.bitmap)
		};
		a.prototype.gotoAndPlay = function (c) {
			this.checkHasFrame(c);
			this._isPlaying = !0;
			this._currentFrameIndex = 0;
			this._currentFrameName = c;
			this._totalFrame = this._frameData.frames[c].totalFrame;
			this.playNextFrame();
			this._passTime = 0;
			b.Ticker.getInstance().register(this.update, this)
		};
		a.prototype.gotoAndStop =
		function (c) {
			this.checkHasFrame(c);
			this.stop();
			this._currentFrameIndex = this._passTime = 0;
			this._currentFrameName = c;
			this._totalFrame = this._frameData.frames[c].totalFrame;
			this.playNextFrame()
		};
		a.prototype.stop = function () {
			this._isPlaying = !1;
			b.Ticker.getInstance().unregister(this.update, this)
		};
		a.prototype.dispose = function () {};
		a.prototype.checkHasFrame = function (c) {
			void 0 == this._frameData.frames[c] && b.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", c)
		};
		a.prototype.update = function (c) {
			for (var a =
					1E3 / this.movieClip.frameRate, a = Math.floor((this._passTime % a + c) / a); 1 <= a; )
				1 == a ? this.playNextFrame() : this.playNextFrame(!1), a--;
			this._passTime += c
		};
		a.prototype.playNextFrame = function (c) {
			void 0 === c && (c = !0);
			var a = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (c) {
				c = this.getTexture(a.res);
				var e = this.bitmap;
				e.x = a.x;
				e.y = a.y;
				e.texture = c
			}
			null != a.action && this.movieClip.dispatchEventWith(a.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex =
					0, a.action != b.Event.COMPLETE && this.movieClip.dispatchEventWith(b.Event.COMPLETE))
		};
		a.prototype.getTexture = function (a) {
			var b = this._frameData.res[a],
			e = this._spriteSheet.getTexture(a);
			e || (e = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
			return e
		};
		return a
	}
	();
	b.DefaultMovieClipDelegate = e;
	e.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
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
		a.prototype._getText = function () {
			return null
		};
		a.prototype._setText = function (a) {};
		a.prototype._setTextType = function (a) {};
		a.prototype._getTextType = function () {
			return null
		};
		a.prototype._open = function (a, b, e, d) {};
		a.prototype._show = function () {};
		a.prototype._add =
		function () {};
		a.prototype._remove = function () {};
		a.prototype._hide = function () {};
		a.prototype._addListeners = function () {};
		a.prototype._removeListeners = function () {};
		a.prototype._setScale = function (a, b) {
			this._scaleX = a;
			this._scaleY = b
		};
		a.prototype.changePosition = function (a, b) {};
		a.prototype._setSize = function (a) {
			this._size = a
		};
		a.prototype._setTextColor = function (a) {
			this._color = a
		};
		a.prototype._setTextFontFamily = function (a) {
			this._fontFamily = a
		};
		a.prototype._setBold = function (a) {
			this._bold = a
		};
		a.prototype._setItalic =
		function (a) {
			this._italic = a
		};
		a.prototype._setTextAlign = function (a) {
			this._textAlign = a
		};
		a.prototype._setVisible = function (a) {
			this._visible = a
		};
		a.prototype._setWidth = function (a) {};
		a.prototype._setHeight = function (a) {};
		a.prototype._setMultiline = function (a) {
			this._multiline = a
		};
		a.prototype._setMaxChars = function (a) {
			this._maxChars = a
		};
		a.prototype._resetStageText = function () {};
		a.create = function () {
			return null
		};
		return a
	}
	(b.EventDispatcher);
	b.StageText = d;
	d.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.GET = "get";
		b.POST = "post";
		return b
	}
	();
	b.URLRequestMethod = d;
	d.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.BINARY = "binary";
		b.TEXT = "text";
		b.VARIABLES = "variables";
		b.TEXTURE = "texture";
		b.SOUND = "sound";
		return b
	}
	();
	b.URLLoaderDataFormat = d;
	d.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a(a) {
			void 0 === a && (a = null);
			b.call(this);
			null !== a && this.decode(a)
		}
		__extends(a, b);
		a.prototype.decode = function (a) {
			this.variables || (this.variables = {});
			a = a.split("+").join(" ");
			for (var b, e = /[?&]?([^=]+)=([^&]*)/g; b = e.exec(a); )
				this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
		};
		a.prototype.toString = function () {
			if (!this.variables)
				return "";
			var a = this.variables,
			b = "",
			e = !0,
			d;
			for (d in a)
				e ? e = !1 : b += "&", b += d + "=" + a[d];
			return b
		};
		return a
	}
	(b.HashObject);
	b.URLVariables =
		d;
	d.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(a) {
			void 0 === a && (a = null);
			e.call(this);
			this.method = b.URLRequestMethod.GET;
			this.url = a
		}
		__extends(a, e);
		return a
	}
	(b.HashObject);
	b.URLRequest = d;
	d.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(a) {
			void 0 === a && (a = null);
			e.call(this);
			this.dataFormat = b.URLLoaderDataFormat.TEXT;
			this._status = -1;
			a && this.load(a)
		}
		__extends(a, e);
		a.prototype.load = function (a) {
			this._request = a;
			this.data = null;
			b.MainContext.instance.netContext.proceed(this)
		};
		return a
	}
	(b.EventDispatcher);
	b.URLLoader = d;
	d.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(a, e);
		Object.defineProperty(a.prototype, "textureWidth", {
			get : function () {
				return this._textureWidth
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "textureHeight", {
			get : function () {
				return this._textureHeight
			},
			enumerable : !0,
			configurable : !0
		});
		Object.defineProperty(a.prototype, "bitmapData", {
			get : function () {
				return this._bitmapData
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._setBitmapData = function (a) {
			var e = b.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * e;
			this._textureHeight = this._sourceHeight * e;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		a.prototype.getPixel32 = function (a, b) {
			return this._bitmapData.getContext("2d").getImageData(a,
				b, 1, 1).data
		};
		return a
	}
	(b.HashObject);
	b.Texture = d;
	d.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(a, e);
		a.prototype.drawToTexture = function (c) {
			var e = this._bitmapData,
			d = c.getBounds(b.Rectangle.identity);
			if (0 == d.width || 0 == d.height)
				return b.Logger.warning("egret.RenderTexture#drawToTexture:\u663e\u793a\u5bf9\u8c61\u6d4b\u91cf\u7ed3\u679c\u5bbd\u9ad8\u4e3a0\uff0c\u8bf7\u68c0\u67e5"), !1;
			d.width = Math.floor(d.width);
			d.height = Math.floor(d.height);
			e.width = d.width;
			e.height = d.height;
			this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = d.width, this.renderContext._cacheCanvas.height = d.height);
			a.identityRectangle.width = d.width;
			a.identityRectangle.height = d.height;
			c._worldTransform.identity();
			c.worldAlpha = 1;
			if (c instanceof b.DisplayObjectContainer) {
				var e = c._anchorOffsetX,
				m = c._anchorOffsetY;
				if (0 != c._anchorX || 0 != c._anchorY)
					e = c._anchorX * d.width, m = c._anchorY * d.height;
				this._offsetX = d.x + e;
				this._offsetY = d.y +
					m;
				c._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				d = c._children;
				e = 0;
				for (m = d.length; e < m; e++)
					d[e]._updateTransform()
			}
			d = b.RenderFilter.getInstance();
			e = d._drawAreaList.concat();
			d._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.renderContext.onRenderStart();
			this.webGLTexture = null;
			(m = c.mask || c._scrollRect) && this.renderContext.pushMask(m);
			c._render(this.renderContext);
			m && this.renderContext.popMask();
			d.addDrawArea(a.identityRectangle);
			this.renderContext.onRenderFinish();
			d._drawAreaList =
				e;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight;
			return !0
		};
		a.identityRectangle = new b.Rectangle;
		return a
	}
	(b.Texture);
	b.RenderTexture = d;
	d.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1;
			this.profiler = b.Profiler.getInstance()
		}
		__extends(a, e);
		a.prototype.clearScreen = function () {};
		a.prototype.clearRect = function (a, b, e, d) {};
		a.prototype.drawImage = function (a, b, e, d, g, f, h, n, p, q) {
			this.profiler.onDrawImage()
		};
		a.prototype.setTransform = function (a) {};
		a.prototype.setAlpha = function (a, b) {};
		a.prototype.setupFont = function (a, b) {};
		a.prototype.measureText = function (a) {
			return 0
		};
		a.prototype.drawText = function (a,
			b, e, d, g, f) {
			this.profiler.onDrawImage()
		};
		a.prototype.strokeRect = function (a, b, e, d, g) {};
		a.prototype.pushMask = function (a) {};
		a.prototype.popMask = function () {};
		a.prototype.onRenderStart = function () {};
		a.prototype.onRenderFinish = function () {};
		a.prototype.setGlobalColorTransform = function (a) {};
		a.createRendererContext = function (a) {
			return null
		};
		a.imageSmoothingEnabled = !0;
		return a
	}
	(b.HashObject);
	b.RendererContext = d;
	d.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.MOUSE = "mouse";
		b.TOUCH = "touch";
		b.mode = "touch";
		return b
	}
	();
	b.InteractionMode = d;
	d.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(a, e);
		a.prototype.run = function () {};
		a.prototype.getTouchData = function (a, b, e) {
			var d = this._currentTouchTarget[a];
			null == d && (d = {}, this._currentTouchTarget[a] = d);
			d.stageX = b;
			d.stageY = e;
			d.identifier = a;
			return d
		};
		a.prototype.dispatchEvent = function (a, e) {
			b.TouchEvent.dispatchTouchEvent(e.target, a, e.identifier, e.stageX,
				e.stageY, !1, !1, !1, !0 == this.touchDownTarget[e.identifier])
		};
		a.prototype.onTouchBegan = function (a, e, d) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				var m = b.MainContext.instance.stage.hitTest(a, e);
				m && (a = this.getTouchData(d, a, e), this.touchDownTarget[d] = !0, a.target = m, a.beginTarget = m, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
				this.touchingIdentifiers.push(d)
			}
		};
		a.prototype.onTouchMove = function (a, e, d) {
			if (-1 != this.touchingIdentifiers.indexOf(d) && (a != this.lastTouchX || e != this.lastTouchY)) {
				this.lastTouchX =
					a;
				this.lastTouchY = e;
				var m = b.MainContext.instance.stage.hitTest(a, e);
				m && (a = this.getTouchData(d, a, e), a.target = m, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
			}
		};
		a.prototype.onTouchEnd = function (a, e, d) {
			var m = this.touchingIdentifiers.indexOf(d);
			-1 != m && (this.touchingIdentifiers.splice(m, 1), m = b.MainContext.instance.stage.hitTest(a, e)) && (a = this.getTouchData(d, a, e), delete this.touchDownTarget[d], d = a.beginTarget, a.target = m, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), d == m ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP,
					a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return a
	}
	(b.HashObject);
	b.TouchContext = d;
	d.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype.proceed = function (a) {};
		a._getUrl = function (a) {
			var e = a.url;
			-1 == e.indexOf("?") && a.method == b.URLRequestMethod.GET && a.data && a.data instanceof b.URLVariables && (e = e + "?" + a.data.toString());
			return e
		};
		a.prototype.getChangeList = function () {
			return []
		};
		return a
	}
	(b.HashObject);
	b.NetContext = d;
	d.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this.frameRate = 60
		}
		__extends(a, b);
		a.prototype.executeMainLoop = function (a, b) {};
		return a
	}
	(b.HashObject);
	b.DeviceContext = d;
	d.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.call = function (a, c) {};
		b.addCallback = function (a, c) {};
		return b
	}
	();
	b.ExternalInterface = d;
	d.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this.ua = navigator.userAgent.toLowerCase();
			this.trans = this._getTrans()
		}
		__extends(a, e);
		a.getInstance = function () {
			null == a.instance && (a.instance = new a);
			return a.instance
		};
		Object.defineProperty(a.prototype, "isMobile", {
			get : function () {
				b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
				return b.MainContext.deviceType ==
				b.MainContext.DEVICE_MOBILE
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype._getHeader = function (a) {
			if ("transform" in a)
				return "";
			for (var b = ["webkit", "ms", "Moz", "O"], e = 0; e < b.length; e++)
				if (b[e] + "Transform" in a)
					return b[e];
			return ""
		};
		a.prototype._getTrans = function () {
			var a = document.createElement("div").style,
			a = this._getHeader(a);
			return "" == a ? "transform" : a + "Transform"
		};
		a.prototype.$new = function (a) {
			return this.$(document.createElement(a))
		};
		a.prototype.$ = function (c) {
			var e = document;
			if (c = c instanceof HTMLElement ?
					c : e.querySelector(c))
				c.find = c.find || this.$, c.hasClass = c.hasClass || function (a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				},
			c.addClass = c.addClass || function (a) {
				this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
				return this
			},
			c.removeClass = c.removeClass || function (a) {
				this.hasClass(a) && (this.className = this.className.replace(a, ""));
				return this
			},
			c.remove = c.remove || function () {},
			c.appendTo = c.appendTo || function (a) {
				a.appendChild(this);
				return this
			},
			c.prependTo = c.prependTo ||
			function (a) {
				a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
				return this
			},
			c.transforms = c.transforms || function () {
				this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
				return this
			},
			c.position = c.position || {
				x : 0,
				y : 0
			},
			c.rotation = c.rotation || 0,
			c.scale = c.scale || {
				x : 1,
				y : 1
			},
			c.skew = c.skew || {
				x : 0,
				y : 0
			},
			c.translates = function (a, c) {
				this.position.x = a;
				this.position.y = c -
					b.MainContext.instance.stage.stageHeight;
				this.transforms();
				return this
			},
			c.rotate = function (a) {
				this.rotation = a;
				this.transforms();
				return this
			},
			c.resize = function (a, c) {
				this.scale.x = a;
				this.scale.y = c;
				this.transforms();
				return this
			},
			c.setSkew = function (a, c) {
				this.skew.x = a;
				this.skew.y = c;
				this.transforms();
				return this
			};
			return c
		};
		a.prototype.translate = function (a) {
			return "translate(" + a.x + "px, " + a.y + "px) "
		};
		a.prototype.rotate = function (a) {
			return "rotate(" + a + "deg) "
		};
		a.prototype.scale = function (a) {
			return "scale(" + a.x + ", " +
			a.y + ") "
		};
		a.prototype.skew = function (a) {
			return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
		};
		return a
	}
	(b.HashObject);
	b.Browser = d;
	d.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function (b) {
	(function (b) {
		b.getItem = function (b) {
			return null
		};
		b.setItem = function (b, a) {
			return !1
		};
		b.removeItem = function (b) {};
		b.clear = function () {}

	})(b.localStorage || (b.localStorage = {}))
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function e() {}

		e.parse = function (a) {
			a = b.SAXParser.getInstance().parserXML(a);
			if (!a || !a.childNodes)
				return null;
			for (var c = a.childNodes.length, d = !1, l = 0; l < c; l++) {
				var m = a.childNodes[l];
				if (1 == m.nodeType) {
					d = !0;
					break
				}
			}
			return d ? e.parseNode(m) : null
		};
		e.parseNode = function (a) {
			if (!a || 1 != a.nodeType)
				return null;
			var c = {};
			c.localName = a.localName;
			c.name = a.nodeName;
			a.namespaceURI && (c.namespace = a.namespaceURI);
			a.prefix && (c.prefix = a.prefix);
			for (var b = a.attributes, d = b.length, m = 0; m < d; m++) {
				var g =
					b[m],
				f = g.name;
				0 != f.indexOf("xmlns:") && (c["$" + f] = g.value)
			}
			b = a.childNodes;
			d = b.length;
			for (m = 0; m < d; m++)
				if (g = e.parseNode(b[m]))
					c.children || (c.children = []), g.parent = c, c.children.push(g);
			!c.children && (a = a.textContent.trim()) && (c.text = a);
			return c
		};
		e.findChildren = function (a, c, b) {
			b ? b.length = 0 : b = [];
			e.findByPath(a, c, b);
			return b
		};
		e.findByPath = function (a, c, b) {
			var d = c.indexOf("."),
			m;
			-1 == d ? (m = c, d = !0) : (m = c.substring(0, d), c = c.substring(d + 1), d = !1);
			if (a = a.children)
				for (var g = a.length, f = 0; f < g; f++) {
					var h = a[f];
					h.localName ==
					m && (d ? b.push(h) : e.findByPath(h, c, b))
				}
		};
		e.getAttributes = function (a, c) {
			c ? c.length = 0 : c = [];
			for (var b in a)
				"$" == b.charAt(0) && c.push(b.substring(1));
			return c
		};
		return e
	}
	();
	b.XML = d;
	d.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function a() {}

		a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		a.BIG_ENDIAN = "BIG_ENDIAN";
		return a
	}
	();
	b.Endian = d;
	d.prototype.__class__ = "egret.Endian";
	var e = function () {
		function a() {
			this.length = this.position = 0;
			this._mode = "";
			this.maxlength = 0;
			this._endian = d.LITTLE_ENDIAN;
			this.isLittleEndian = !1;
			this._mode = "Typed array";
			this.maxlength = 4;
			this.arraybytes = new ArrayBuffer(this.maxlength);
			this.unalignedarraybytestemp = new ArrayBuffer(16);
			this.endian = a.DEFAULT_ENDIAN
		}
		Object.defineProperty(a.prototype,
			"endian", {
			get : function () {
				return this._endian
			},
			set : function (a) {
				this._endian = a;
				this.isLittleEndian = a == d.LITTLE_ENDIAN
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.ensureWriteableSpace = function (a) {
			this.ensureSpace(a + this.position)
		};
		a.prototype.setArrayBuffer = function (a) {
			this.ensureSpace(a.byteLength);
			this.length = a.byteLength;
			a = new Int8Array(a);
			(new Int8Array(this.arraybytes, 0, this.length)).set(a);
			this.position = 0
		};
		Object.defineProperty(a.prototype, "bytesAvailable", {
			get : function () {
				return this.length - this.position
			},
			enumerable : !0,
			configurable : !0
		});
		a.prototype.ensureSpace = function (a) {
			if (a > this.maxlength) {
				a = a + 255 & -256;
				var b = new ArrayBuffer(a),
				e = new Uint8Array(this.arraybytes, 0, this.length);
				(new Uint8Array(b, 0, this.length)).set(e);
				this.arraybytes = b;
				this.maxlength = a
			}
		};
		a.prototype.writeByte = function (a) {
			this.ensureWriteableSpace(1);
			(new Int8Array(this.arraybytes))[this.position++] = ~~a;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readByte = function () {
			if (this.position >= this.length)
				throw "ByteArray out of bounds read. Positon=" +
				this.position + ", Length=" + this.length;
			return (new Int8Array(this.arraybytes))[this.position++]
		};
		a.prototype.readBytes = function (a, b, e) {
			void 0 === b && (b = 0);
			void 0 === e && (e = 0);
			null == e && (e = a.length);
			a.ensureWriteableSpace(b + e);
			var d = new Int8Array(a.arraybytes),
			g = new Int8Array(this.arraybytes);
			d.set(g.subarray(this.position, this.position + e), b);
			this.position += e;
			e + b > a.length && (a.length += e + b - a.length)
		};
		a.prototype.writeUnsignedByte = function (a) {
			this.ensureWriteableSpace(1);
			(new Uint8Array(this.arraybytes))[this.position++] =
				~~a & 255;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readUnsignedByte = function () {
			if (this.position >= this.length)
				throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			return (new Uint8Array(this.arraybytes))[this.position++]
		};
		a.prototype.writeUnsignedShort = function (a) {
			this.ensureWriteableSpace(2);
			if (0 == (this.position & 1)) {
				var b = new Uint16Array(this.arraybytes);
				b[this.position >> 1] = ~~a & 65535
			} else
				b = new Uint16Array(this.unalignedarraybytestemp, 0, 1), b[0] =
					~~a & 65535, a = new Uint8Array(this.arraybytes, this.position, 2), b = new Uint8Array(this.unalignedarraybytestemp, 0, 2), a.set(b);
			this.position += 2;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readUTFBytes = function (a) {
			var b = "";
			a = this.position + a;
			for (var e = new DataView(this.arraybytes); this.position < a; ) {
				var d = e.getUint8(this.position++);
				if (128 > d) {
					if (0 == d)
						break;
					b += String.fromCharCode(d)
				} else if (224 > d)
					b += String.fromCharCode((d & 63) << 6 | e.getUint8(this.position++) & 127);
				else if (240 > d)
					var g = e.getUint8(this.position++),
					b = b + String.fromCharCode((d & 31) << 12 | (g & 127) << 6 | e.getUint8(this.position++) & 127);
				else
					var g = e.getUint8(this.position++), f = e.getUint8(this.position++), b = b + String.fromCharCode((d & 15) << 18 | (g & 127) << 12 | f << 6 & 127 | e.getUint8(this.position++) & 127)
			}
			return b
		};
		a.prototype.readInt = function () {
			var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
			this.position += 4;
			return a
		};
		a.prototype.readShort = function () {
			var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
			this.position += 2;
			return a
		};
		a.prototype.readDouble = function () {
			var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
			this.position += 8;
			return a
		};
		a.prototype.readUnsignedShort = function () {
			if (this.position > this.length + 2)
				throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
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
		a.prototype.writeUnsignedInt = function (a) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var b = new Uint32Array(this.arraybytes);
				b[this.position >> 2] = ~~a & 4294967295
			} else
				b = new Uint32Array(this.unalignedarraybytestemp, 0, 1), b[0] = ~~a & 4294967295, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
			this.position += 4;
			this.position > this.length &&
			(this.length = this.position)
		};
		a.prototype.readUnsignedInt = function () {
			if (this.position > this.length + 4)
				throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
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
		function (a) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var b = new Float32Array(this.arraybytes);
				b[this.position >> 2] = a
			} else
				b = new Float32Array(this.unalignedarraybytestemp, 0, 1), b[0] = a, a = new Uint8Array(this.arraybytes, this.position, 4), b = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(b);
			this.position += 4;
			this.position > this.length && (this.length = this.position)
		};
		a.prototype.readFloat = function () {
			if (this.position > this.length + 4)
				throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" +
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
		a.DEFAULT_ENDIAN = d.BIG_ENDIAN;
		return a
	}
	();
	b.ByteArray = e;
	e.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(a, b, d) {
			e.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(a, b, d)
		}
		__extends(a, e);
		a.get = function (c, b, e, d) {
			void 0 === b && (b = null);
			void 0 === e && (e = null);
			void 0 === d && (d = !1);
			d && a.removeTweens(c);
			return new a(c, b, e)
		};
		a.removeTweens = function (c) {
			if (c.tween_count) {
				for (var b =
						a._tweens, e = b.length - 1; 0 <= e; e--)
					b[e]._target == c && (b[e].paused = !0, b.splice(e, 1));
				c.tween_count = 0
			}
		};
		a.pauseTweens = function (a) {
			if (a.tween_count)
				for (var e = b.Tween._tweens, d = e.length - 1; 0 <= d; d--)
					e[d]._target == a && (e[d].paused = !0)
		};
		a.resumeTweens = function (a) {
			if (a.tween_count)
				for (var e = b.Tween._tweens, d = e.length - 1; 0 <= d; d--)
					e[d]._target == a && (e[d].paused = !1)
		};
		a.tick = function (c, b) {
			void 0 === b && (b = !1);
			for (var e = a._tweens.concat(), d = e.length - 1; 0 <= d; d--) {
				var g = e[d];
				b && !g.ignoreGlobalPause || g.paused || g.tick(g._useTicks ?
					1 : c)
			}
		};
		a._register = function (c, e) {
			var d = c._target,
			m = a._tweens;
			if (e)
				d && (d.tween_count = d.tween_count ? d.tween_count + 1 : 1), m.push(c), a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
			else
				for (d && d.tween_count--, d = m.length; d--; )
					if (m[d] == c) {
						m.splice(d, 1);
						break
					}
		};
		a.removeAllTweens = function () {
			for (var c = a._tweens, b = 0, e = c.length; b < e; b++) {
				var d = c[b];
				d.paused = !0;
				d._target.tweenjs_count = 0
			}
			c.length = 0
		};
		a.prototype.initialize = function (c, b, e) {
			this._target = c;
			b && (this._useTicks = b.useTicks, this.ignoreGlobalPause =
					b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(c));
			this.pluginData = e || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			b && b.paused ? this.paused = !0 : a._register(this, !0);
			b && null != b.position && this.setPosition(b.position, a.NONE)
		};
		a.prototype.setPosition = function (a, b) {
			void 0 === b && (b = 1);
			0 > a && (a = 0);
			var e = a,
			d = !1;
			e >= this.duration && (this.loop ? e %= this.duration : (e = this.duration, d = !0));
			if (e == this._prevPos)
				return d;
			var g = this._prevPos;
			this.position = this._prevPos = e;
			this._prevPosition = a;
			if (this._target)
				if (d)
					this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
					for (var f = 0, h = this._steps.length; f < h && !(this._steps[f].t > e); f++);
					f = this._steps[f - 1];
					this._updateTargetProps(f, (this._stepPosition = e - f.t) / f.d)
				}
			0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(e, e) : 1 == b && e < g ? (g != this.duration && this._runActions(g, this.duration), this._runActions(0, e, !0)) : this._runActions(g, e));
			d && this.setPaused(!0);
			this.dispatchEventWith("change");
			return d
		};
		a.prototype._runActions = function (a, b, e) {
			void 0 === e && (e = !1);
			var d = a,
			g = b,
			f = -1,
			h = this._actions.length,
			n = 1;
			a > b && (d = b, g = a, f = h, h = n = -1);
			for (; (f += n) != h; ) {
				b = this._actions[f];
				var p = b.t;
				(p == g || p > d && p < g || e && p == a) && b.f.apply(b.o, b.p)
			}
		};
		a.prototype._updateTargetProps = function (c, b) {
			var e,
			d,
			g,
			f;
			if (c || 1 != b) {
				if (this.passive = !!c.v)
					return;
				c.e && (b = c.e(b, 0, 1, 1));
				e = c.p0;
				d = c.p1
			} else
				this.passive = !1, e = d = this._curQueueProps;
			for (var h in this._initQueueProps) {
				null == (g = e[h]) && (e[h] = g = this._initQueueProps[h]);
				null ==
				(f = d[h]) && (d[h] = f = g);
				g = g == f || 0 == b || 1 == b || "number" != typeof g ? 1 == b ? f : g : g + (f - g) * b;
				var n = !1;
				if (f = a._plugins[h])
					for (var p = 0, q = f.length; p < q; p++) {
						var r = f[p].tween(this, h, g, e, d, b, !!c && e == d, !c);
						r == a.IGNORE ? n = !0 : g = r
					}
				n || (this._target[h] = g)
			}
		};
		a.prototype.setPaused = function (c) {
			this.paused = c;
			a._register(this, !c);
			return this
		};
		a.prototype._cloneProps = function (a) {
			var b = {},
			e;
			for (e in a)
				b[e] = a[e];
			return b
		};
		a.prototype._addStep = function (a) {
			0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
			return this
		};
		a.prototype._appendQueueProps = function (c) {
			var b,
			e,
			d,
			g,
			f,
			h;
			for (h in c)
				if (void 0 === this._initQueueProps[h]) {
					e = this._target[h];
					if (b = a._plugins[h])
						for (d = 0, g = b.length; d < g; d++)
							e = b[d].init(this, h, e);
					this._initQueueProps[h] = this._curQueueProps[h] = void 0 === e ? null : e
				}
			for (h in c) {
				e = this._curQueueProps[h];
				if (b = a._plugins[h])
					for (f = f || {}, d = 0, g = b.length; d < g; d++)
						b[d].step && b[d].step(this, h, e, c[h], f);
				this._curQueueProps[h] = c[h]
			}
			f && this._appendQueueProps(f);
			return this._curQueueProps
		};
		a.prototype._addAction = function (a) {
			a.t =
				this.duration;
			this._actions.push(a);
			return this
		};
		a.prototype._set = function (a, b) {
			for (var e in a)
				b[e] = a[e]
		};
		a.prototype.wait = function (a, b) {
			if (null == a || 0 >= a)
				return this;
			var e = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d : a,
				p0 : e,
				p1 : e,
				v : b
			})
		};
		a.prototype.to = function (a, b, e) {
			void 0 === e && (e = void 0);
			if (isNaN(b) || 0 > b)
				b = 0;
			return this._addStep({
				d : b || 0,
				p0 : this._cloneProps(this._curQueueProps),
				e : e,
				p1 : this._cloneProps(this._appendQueueProps(a))
			})
		};
		a.prototype.call = function (a, b, e) {
			void 0 === b && (b = void 0);
			void 0 === e && (e = void 0);
			return this._addAction({
				f : a,
				p : e ? e : [],
				o : b ? b : this._target
			})
		};
		a.prototype.set = function (a, b) {
			void 0 === b && (b = null);
			return this._addAction({
				f : this._set,
				o : this,
				p : [a, b ? b : this._target]
			})
		};
		a.prototype.play = function (a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!1])
		};
		a.prototype.pause = function (a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!0])
		};
		a.prototype.tick = function (a) {
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
	}
	(b.EventDispatcher);
	b.Tween = d;
	d.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function e() {
			b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
		}
		e.get = function (a) {
			-1 > a && (a = -1);
			1 < a && (a = 1);
			return function (c) {
				return 0 == a ? c : 0 > a ? c * (c * -a + 1 + a) : c * ((2 - c) * a + (1 - a))
			}
		};
		e.getPowIn = function (a) {
			return function (c) {
				return Math.pow(c, a)
			}
		};
		e.getPowOut = function (a) {
			return function (c) {
				return 1 - Math.pow(1 - c, a)
			}
		};
		e.getPowInOut = function (a) {
			return function (c) {
				return 1 > (c *= 2) ? 0.5 * Math.pow(c, a) : 1 - 0.5 * Math.abs(Math.pow(2 - c, a))
			}
		};
		e.sineIn = function (a) {
			return 1 - Math.cos(a *
				Math.PI / 2)
		};
		e.sineOut = function (a) {
			return Math.sin(a * Math.PI / 2)
		};
		e.sineInOut = function (a) {
			return -0.5 * (Math.cos(Math.PI * a) - 1)
		};
		e.getBackIn = function (a) {
			return function (c) {
				return c * c * ((a + 1) * c - a)
			}
		};
		e.getBackOut = function (a) {
			return function (c) {
				return --c * c * ((a + 1) * c + a) + 1
			}
		};
		e.getBackInOut = function (a) {
			a *= 1.525;
			return function (c) {
				return 1 > (c *= 2) ? 0.5 * c * c * ((a + 1) * c - a) : 0.5 * ((c -= 2) * c * ((a + 1) * c + a) + 2)
			}
		};
		e.circIn = function (a) {
			return  - (Math.sqrt(1 - a * a) - 1)
		};
		e.circOut = function (a) {
			return Math.sqrt(1 - --a * a)
		};
		e.circInOut = function (a) {
			return 1 >
			(a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
		};
		e.bounceIn = function (a) {
			return 1 - e.bounceOut(1 - a)
		};
		e.bounceOut = function (a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
		};
		e.bounceInOut = function (a) {
			return 0.5 > a ? 0.5 * e.bounceIn(2 * a) : 0.5 * e.bounceOut(2 * a - 1) + 0.5
		};
		e.getElasticIn = function (a, c) {
			var b = 2 * Math.PI;
			return function (e) {
				if (0 == e || 1 == e)
					return e;
				var d = c / b * Math.asin(1 / a);
				return  - (a * Math.pow(2, 10 *
						(e -= 1)) * Math.sin((e - d) * b / c))
			}
		};
		e.getElasticOut = function (a, c) {
			var b = 2 * Math.PI;
			return function (e) {
				if (0 == e || 1 == e)
					return e;
				var d = c / b * Math.asin(1 / a);
				return a * Math.pow(2, -10 * e) * Math.sin((e - d) * b / c) + 1
			}
		};
		e.getElasticInOut = function (a, c) {
			var b = 2 * Math.PI;
			return function (e) {
				var d = c / b * Math.asin(1 / a);
				return 1 > (e *= 2) ? -0.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - d) * b / c) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - d) * b / c) * 0.5 + 1
			}
		};
		e.quadIn = e.getPowIn(2);
		e.quadOut = e.getPowOut(2);
		e.quadInOut = e.getPowInOut(2);
		e.cubicIn = e.getPowIn(3);
		e.cubicOut = e.getPowOut(3);
		e.cubicInOut = e.getPowInOut(3);
		e.quartIn = e.getPowIn(4);
		e.quartOut = e.getPowOut(4);
		e.quartInOut = e.getPowInOut(4);
		e.quintIn = e.getPowIn(5);
		e.quintOut = e.getPowOut(5);
		e.quintInOut = e.getPowInOut(5);
		e.backIn = e.getBackIn(1.7);
		e.backOut = e.getBackOut(1.7);
		e.backInOut = e.getBackInOut(1.7);
		e.elasticIn = e.getElasticIn(1, 0.3);
		e.elasticOut = e.getElasticOut(1, 0.3);
		e.elasticInOut = e.getElasticInOut(1, 0.3 * 1.5);
		return e
	}
	();
	b.Ease = d;
	d.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {
			this.type = b.EFFECT
		}
		b.prototype.play = function (a) {
			void 0 === a && (a = !1);
			var c = this.audio;
			c && (isNaN(c.duration) || (c.currentTime = 0), c.loop = a, c.play())
		};
		b.prototype.pause = function () {
			var a = this.audio;
			a && a.pause()
		};
		b.prototype.load = function () {
			var a = this.audio;
			a && a.load()
		};
		b.prototype.addEventListener = function (a, c) {
			this.audio && this.audio.addEventListener(a, c, !1)
		};
		b.prototype.removeEventListener = function (a, c) {
			this.audio && this.audio.removeEventListener(a, c, !1)
		};
		b.prototype.setVolume =
		function (a) {
			var c = this.audio;
			c && (c.volume = a)
		};
		b.prototype.getVolume = function () {
			return this.audio ? this.audio.volume : 0
		};
		b.prototype.preload = function (a) {
			this.type = a
		};
		b.prototype._setAudio = function (a) {
			this.audio = a
		};
		b.MUSIC = "music";
		b.EFFECT = "effect";
		return b
	}
	();
	b.Sound = d;
	d.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.isNumber = function (a) {
			return "number" === typeof a && !isNaN(a)
		};
		return b
	}
	();
	b.NumberUtils = d;
	d.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
Function.prototype.bind || (Function.prototype.bind = function (b) {
	if ("function" !== typeof this)
		throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	var d = Array.prototype.slice.call(arguments, 1),
	e = this,
	a = function () {},
	c = function () {
		return e.apply(this instanceof a && b ? this : b, d.concat(Array.prototype.slice.call(arguments)))
	};
	a.prototype = this.prototype;
	c.prototype = new a;
	return c
});
var __extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
}, RES;
(function (b) {
	var d = function (b) {
		function a(a, d, l) {
			void 0 === d && (d = !1);
			void 0 === l && (l = !1);
			b.call(this, a, d, l);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(a, b);
		a.dispatchResourceEvent = function (c, b, e, d, g, f) {
			void 0 === e && (e = "");
			void 0 === d && (d = null);
			void 0 === g && (g = 0);
			void 0 === f && (f = 0);
			var h = egret.Event._getPropertyData(a);
			h.groupName = e;
			h.resItem = d;
			h.itemsLoaded = g;
			h.itemsTotal = f;
			egret.Event._dispatchByTarget(a, c, b, h)
		};
		a.ITEM_LOAD_ERROR = "itemLoadError";
		a.CONFIG_COMPLETE = "configComplete";
		a.GROUP_PROGRESS = "groupProgress";
		a.GROUP_COMPLETE = "groupComplete";
		return a
	}
	(egret.Event);
	b.ResourceEvent = d;
	d.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function (b) {
	var d = function () {
		function b(a, c, e) {
			this._loaded = !1;
			this.name = a;
			this.url = c;
			this.type = e
		}
		Object.defineProperty(b.prototype, "loaded", {
			get : function () {
				return this.data ? this.data.loaded : this._loaded
			},
			set : function (a) {
				this.data && (this.data.loaded = a);
				this._loaded = a
			},
			enumerable : !0,
			configurable : !0
		});
		b.prototype.toString = function () {
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
	}
	();
	b.ResourceItem = d;
	d.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function (b) {
	var d = function () {
		function e() {
			this.keyMap = {};
			this.groupDic = {};
			b.configInstance = this
		}
		e.prototype.getGroupByName = function (a) {
			var c = [];
			if (!this.groupDic[a])
				return c;
			a = this.groupDic[a];
			for (var b = a.length, e = 0; e < b; e++)
				c.push(this.parseResourceItem(a[e]));
			return c
		};
		e.prototype.getRawGroupByName = function (a) {
			return this.groupDic[a] ? this.groupDic[a] : []
		};
		e.prototype.createGroup = function (a, c, b) {
			void 0 === b && (b = !1);
			if (!b && this.groupDic[a] || !c || 0 == c.length)
				return !1;
			b = this.groupDic;
			for (var e = [], d = c.length,
				g = 0; g < d; g++) {
				var f = c[g],
				h = b[f];
				if (h)
					for (var f = h.length, n = 0; n < f; n++) {
						var p = h[n];
						-1 == e.indexOf(p) && e.push(p)
					}
				else (p = this.keyMap[f]) && -1 == e.indexOf(p) && e.push(p)
			}
			if (0 == e.length)
				return !1;
			this.groupDic[a] = e;
			return !0
		};
		e.prototype.parseConfig = function (a, c) {
			if (a) {
				var b = a.resources;
				if (b)
					for (var e = b.length, d = 0; d < e; d++) {
						var g = b[d],
						f = g.url;
						f && -1 == f.indexOf("://") && (g.url = c + f);
						this.addItemToKeyMap(g)
					}
				if (b = a.groups)
					for (e = b.length, d = 0; d < e; d++) {
						for (var f = b[d], h = [], n = f.keys.split(","), p = n.length, q = 0; q < p; q++)
							g = n[q].trim(),
							(g = this.keyMap[g]) && -1 == h.indexOf(g) && h.push(g);
						this.groupDic[f.name] = h
					}
			}
		};
		e.prototype.addSubkey = function (a, c) {
			var b = this.keyMap[c];
			b && !this.keyMap[a] && (this.keyMap[a] = b)
		};
		e.prototype.addItemToKeyMap = function (a) {
			this.keyMap[a.name] || (this.keyMap[a.name] = a);
			if (a.hasOwnProperty("subkeys")) {
				var c = a.subkeys.split(",");
				a.subkeys = c;
				for (var b = c.length, e = 0; e < b; e++) {
					var d = c[e];
					null == this.keyMap[d] && (this.keyMap[d] = a)
				}
			}
		};
		e.prototype.getName = function (a) {
			return (a = this.keyMap[a]) ? a.name : ""
		};
		e.prototype.getType =
		function (a) {
			return (a = this.keyMap[a]) ? a.type : ""
		};
		e.prototype.getRawResourceItem = function (a) {
			return this.keyMap[a]
		};
		e.prototype.getResourceItem = function (a) {
			return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
		};
		e.prototype.parseResourceItem = function (a) {
			var c = new b.ResourceItem(a.name, a.url, a.type);
			c.data = a;
			return c
		};
		return e
	}
	();
	b.ResourceConfig = d;
	d.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
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
		__extends(a, e);
		a.prototype.isGroupInLoading = function (a) {
			return void 0 !== this.itemListDic[a]
		};
		a.prototype.loadGroup = function (a, e, d) {
			void 0 === d && (d = 0);
			if (!this.itemListDic[e] && e)
				if (a && 0 != a.length) {
					this.priorityQueue[d] ? this.priorityQueue[d].push(e) : this.priorityQueue[d] =
						[e];
					this.itemListDic[e] = a;
					d = a.length;
					for (var m = 0; m < d; m++)
						a[m].groupName = e;
					this.groupTotalDic[e] = a.length;
					this.numLoadedDic[e] = 0;
					this.next()
				} else
					egret.Logger.warning('RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4\uff1a"' + e + '"'), a = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE), a.groupName = e, this.dispatchEvent(a)
		};
		a.prototype.loadItem = function (a) {
			this.lazyLoadList.push(a);
			a.groupName = "";
			this.next()
		};
		a.prototype.next = function () {
			for (; this.loadingCount < this.thread; ) {
				var a =
					this.getOneResourceItem();
				if (!a)
					break;
				this.loadingCount++;
				if (a.loaded)
					this.onItemComplete(a);
				else {
					var e = this.analyzerDic[a.type];
					e || (e = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
					e.loadFile(a, this.onItemComplete, this)
				}
			}
		};
		a.prototype.getOneResourceItem = function () {
			var a = Number.NEGATIVE_INFINITY,
			b;
			for (b in this.priorityQueue)
				a = Math.max(a, b);
			a = this.priorityQueue[a];
			if (!a || 0 == a.length)
				return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			b = a.length;
			for (var e, d =
					0; d < b; d++) {
				this.queueIndex >= b && (this.queueIndex = 0);
				e = this.itemListDic[a[this.queueIndex]];
				if (0 < e.length)
					break;
				this.queueIndex++
			}
			return 0 == e.length ? null : e.shift()
		};
		a.prototype.onItemComplete = function (a) {
			this.loadingCount--;
			var e = a.groupName;
			a.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, e, a);
			if (e) {
				this.numLoadedDic[e]++;
				var d = this.numLoadedDic[e],
				m = this.groupTotalDic[e];
				b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS,
					e, a, d, m);
				d == m && (this.removeGroupName(e), delete this.groupTotalDic[e], delete this.numLoadedDic[e], delete this.itemListDic[e], b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, e))
			} else
				this.callBack.call(this.resInstance, a);
			this.next()
		};
		a.prototype.removeGroupName = function (a) {
			for (var b in this.priorityQueue) {
				for (var e = this.priorityQueue[b], d = e.length, g = 0, f = !1, d = e.length, h = 0; h < d; h++) {
					if (e[h] == a) {
						e.splice(g, 1);
						f = !0;
						break
					}
					g++
				}
				if (f) {
					0 == e.length && delete this.priorityQueue[b];
					break
				}
			}
		};
		return a
	}
	(egret.EventDispatcher);
	b.ResourceLoader = d;
	d.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this.resourceConfig = b.configInstance
		}
		__extends(a, e);
		a.prototype.addSubkey = function (a, b) {
			this.resourceConfig.addSubkey(a, b)
		};
		a.prototype.loadFile = function (a, b, e) {};
		a.prototype.getRes = function (a) {};
		a.prototype.destroyRes = function (a) {
			return !1
		};
		a.getStringPrefix = function (a) {
			if (!a)
				return "";
			var b = a.indexOf(".");
			return -1 != b ? a.substring(0, b) : ""
		};
		a.getStringTail = function (a) {
			if (!a)
				return "";
			var b = a.indexOf(".");
			return -1 != b ? a.substring(b + 1) : ""
		};
		return a
	}
	(egret.HashObject);
	b.AnalyzerBase = d;
	d.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler
		}
		__extends(a, b);
		a.prototype.loadFile = function (a, b, e) {
			if (this.fileDic[a.name])
				b.call(e, a);
			else {
				var d = this.getLoader();
				this.resItemDic[d.hashCode] = {
					item : a,
					func : b,
					thisObject : e
				};
				d.load(new egret.URLRequest(a.url))
			}
		};
		a.prototype.getLoader = function () {
			var a = this.recycler.pop();
			a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE,
					this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			a.dataFormat = this._dataFormat;
			return a
		};
		a.prototype.onLoadFinish = function (a) {
			var b = a.target,
			e = this.resItemDic[b.hashCode];
			delete this.resItemDic[b.hashCode];
			this.recycler.push(b);
			var d = e.item,
			g = e.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			d.loaded && this.analyzeData(d, b.data);
			g.call(e.thisObject, d)
		};
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			!this.fileDic[e] && b && (this.fileDic[e] = b)
		};
		a.prototype.getRes =
		function (a) {
			return this.fileDic[a]
		};
		a.prototype.hasRes = function (a) {
			return null != this.getRes(a)
		};
		a.prototype.destroyRes = function (a) {
			return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
		};
		return a
	}
	(b.AnalyzerBase);
	b.BinAnalyzer = d;
	d.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
		}
		__extends(a, b);
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			!this.fileDic[e] && b && (this.fileDic[e] = b, (e = a.data) && e.scale9grid && (e = e.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3]))))
		};
		return a
	}
	(b.BinAnalyzer);
	b.ImageAnalyzer = d;
	d.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			if (!this.fileDic[e] && b)
				try {
					this.fileDic[e] = JSON.parse(b)
				} catch (d) {
					egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + "\ndata:" + b)
				}
		};
		return a
	}
	(b.BinAnalyzer);
	b.JsonAnalyzer = d;
	d.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		return a
	}
	(b.BinAnalyzer);
	b.TextAnalyzer = d;
	d.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, e);
		a.prototype.getRes = function (a) {
			var e = this.fileDic[a];
			e || (e = this.textureMap[a]);
			!e && (e = b.AnalyzerBase.getStringPrefix(a), e = this.fileDic[e]) && (a = b.AnalyzerBase.getStringTail(a), e = e.getTexture(a));
			return e
		};
		a.prototype.onLoadFinish = function (a) {
			var b = a.target,
			e = this.resItemDic[b.hashCode];
			delete this.resItemDic[b.hashCode];
			this.recycler.push(b);
			var d =
				e.item,
			g = e.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			d.loaded && this.analyzeData(d, b.data);
			"string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(d, g, e.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : g.call(e.thisObject, d)
		};
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			if (!this.fileDic[e] && b) {
				var d;
				if ("string" == typeof b) {
					try {
						d = JSON.parse(b)
					} catch (g) {
						egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
					}
					d && (this.sheetMap[e] =
							d, a.loaded = !1, a.url = this.getRelativePath(a.url, d.file))
				} else
					d = this.sheetMap[e], delete this.sheetMap[e], b && (d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "" : e), this.fileDic[e] = d)
			}
		};
		a.prototype.getRelativePath = function (a, b) {
			a = a.split("\\").join("/");
			var e = a.lastIndexOf("/");
			return a = -1 != e ? a.substring(0, e + 1) + b : b
		};
		a.prototype.parseSpriteSheet = function (a, b, e) {
			b = b.frames;
			if (!b)
				return null;
			var d = new egret.SpriteSheet(a),
			g = this.textureMap,
			f;
			for (f in b) {
				var h = b[f];
				a = d.createTexture(f, h.x, h.y, h.w, h.h,
						h.offX, h.offY, h.sourceW, h.sourceH);
				h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
				null == g[f] && (g[f] = a, e && this.addSubkey(f, e))
			}
			return d
		};
		return a
	}
	(b.BinAnalyzer);
	b.SheetAnalyzer = d;
	d.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			if (!this.fileDic[e] && b) {
				var d;
				"string" == typeof b ? (d = b, this.sheetMap[e] = d, a.loaded = !1, a.url = this.getTexturePath(a.url, d)) : (d = this.sheetMap[e], delete this.sheetMap[e], b && (d = new egret.BitmapTextSpriteSheet(b, d), this.fileDic[e] = d))
			}
		};
		a.prototype.getTexturePath = function (a, b) {
			var e = "",
			d = b.split("\n")[2],
			g = d.indexOf('file="');
			-1 != g && (d = d.substring(g + 6), g = d.indexOf('"'), e = d.substring(0,
						g));
			a = a.split("\\").join("/");
			g = a.lastIndexOf("/");
			return a = -1 != g ? a.substring(0, g + 1) + e : e
		};
		return a
	}
	(b.SheetAnalyzer);
	b.FontAnalyzer = d;
	d.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(a, b);
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			!this.fileDic[e] && b && (this.fileDic[e] = b, (e = a.data) && e.soundType ? b.preload(e.soundType) : b.preload(egret.Sound.EFFECT))
		};
		return a
	}
	(b.BinAnalyzer);
	b.SoundAnalyzer = d;
	d.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (b) {
		function a() {
			b.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(a, b);
		a.prototype.analyzeData = function (a, b) {
			var e = a.name;
			if (!this.fileDic[e] && b)
				try {
					var d = egret.XML.parse(b);
					this.fileDic[e] = d
				} catch (g) {}

		};
		return a
	}
	(b.BinAnalyzer);
	b.XMLAnalyzer = d;
	d.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	b.loadConfig = function (a, b, d) {
		void 0 === b && (b = "");
		void 0 === d && (d = "json");
		e.loadConfig(a, b, d)
	};
	b.loadGroup = function (a, b) {
		void 0 === b && (b = 0);
		e.loadGroup(a, b)
	};
	b.isGroupLoaded = function (a) {
		return e.isGroupLoaded(a)
	};
	b.getGroupByName = function (a) {
		return e.getGroupByName(a)
	};
	b.createGroup = function (a, b, d) {
		void 0 === d && (d = !1);
		return e.createGroup(a, b, d)
	};
	b.hasRes = function (a) {
		return e.hasRes(a)
	};
	b.getRes = function (a) {
		return e.getRes(a)
	};
	b.getResAsync = function (a, b, d) {
		e.getResAsync(a, b, d)
	};
	b.getResByUrl =
	function (a, b, d, l) {
		void 0 === l && (l = "");
		e.getResByUrl(a, b, d, l)
	};
	b.destroyRes = function (a) {
		return e.destroyRes(a)
	};
	b.setMaxLoadingThread = function (a) {
		e.setMaxLoadingThread(a)
	};
	b.addEventListener = function (a, b, d, l, m) {
		void 0 === l && (l = !1);
		void 0 === m && (m = 0);
		e.addEventListener(a, b, d, l, m)
	};
	b.removeEventListener = function (a, b, d, l) {
		void 0 === l && (l = !1);
		e.removeEventListener(a, b, d, l)
	};
	var d = function (a) {
		function c() {
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
		__extends(c, a);
		c.prototype.getAnalyzerByType = function (a) {
			var c = this.analyzerDic[a];
			c || (c = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
			return c
		};
		c.prototype.init = function () {
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
			this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
		};
		c.prototype.loadConfig = function (a, b, c) {
			void 0 === c && (c = "json");
			this.configItemList.push({
				url : a,
				resourceRoot : b,
				type : c
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		c.prototype.startLoadConfig = function () {
			this.callLaterFlag = !1;
			var a = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = a;
			for (var e = a.length, d = [], g = 0; g < e; g++) {
				var f =
					a[g],
				f = new b.ResourceItem(f.url, f.url, f.type);
				d.push(f)
			}
			this.resLoader.loadGroup(d, c.GROUP_CONFIG, Number.MAX_VALUE)
		};
		c.prototype.isGroupLoaded = function (a) {
			return -1 != this.loadedGroups.indexOf(a)
		};
		c.prototype.getGroupByName = function (a) {
			return this.resConfig.getGroupByName(a)
		};
		c.prototype.loadGroup = function (a, b) {
			void 0 === b && (b = 0);
			if (-1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a))
				if (this.configComplete) {
					var c = this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(c, a, b)
				} else
					this.groupNameList.push({
						name : a,
						priority : b
					})
		};
		c.prototype.createGroup = function (a, b, c) {
			void 0 === c && (c = !1);
			if (c) {
				var e = this.loadedGroups.indexOf(a);
				-1 != e && this.loadedGroups.splice(e, 1)
			}
			return this.resConfig.createGroup(a, b, c)
		};
		c.prototype.onGroupComp = function (a) {
			if (a.groupName == c.GROUP_CONFIG) {
				a = this.loadingConfigList.length;
				for (var e = 0; e < a; e++) {
					var d = this.loadingConfigList[e],
					g = this.getAnalyzerByType(d.type),
					f = g.getRes(d.url);
					g.destroyRes(d.url);
					this.resConfig.parseConfig(f, d.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList =
					null;
				b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
				d = this.groupNameList;
				a = d.length;
				for (e = 0; e < a; e++)
					g = d[e], this.loadGroup(g.name, g.priority);
				this.groupNameList = []
			} else
				this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
		};
		c.prototype.hasRes = function (a) {
			var c = this.resConfig.getType(a);
			return "" == c && (a = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(a), "" == c) ? !1 : !0
		};
		c.prototype.getRes = function (a) {
			var c = this.resConfig.getType(a);
			return "" == c && (c = b.AnalyzerBase.getStringPrefix(a),
				c = this.resConfig.getType(c), "" == c) ? null : this.getAnalyzerByType(c).getRes(a)
		};
		c.prototype.getResAsync = function (a, c, e) {
			var d = this.resConfig.getType(a),
			f = this.resConfig.getName(a);
			if ("" == d && (f = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(f), "" == d)) {
				c.call(e, null);
				return
			}
			(d = this.getAnalyzerByType(d).getRes(a)) ? c.call(e, d) : (a = {
					key : a,
					compFunc : c,
					thisObject : e
				}, this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
		};
		c.prototype.getResByUrl =
		function (a, c, e, d) {
			void 0 === d && (d = "");
			if (a) {
				d || (d = this.getTypeByUrl(a));
				var f = this.getAnalyzerByType(d).getRes(a);
				f ? c.call(e, f) : (c = {
						key : a,
						compFunc : c,
						thisObject : e
					}, this.asyncDic[a] ? this.asyncDic[a].push(c) : (this.asyncDic[a] = [c], a = new b.ResourceItem(a, a, d), this.resLoader.loadItem(a)))
			} else
				c.call(e, null)
		};
		c.prototype.getTypeByUrl = function (a) {
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
		c.prototype.onResourceItemComp = function (a) {
			var b = this.asyncDic[a.name];
			delete this.asyncDic[a.name];
			a = this.getAnalyzerByType(a.type);
			for (var c = b.length, e = 0; e < c; e++) {
				var d =
					b[e],
				h = a.getRes(d.key);
				d.compFunc.call(d.thisObject, h, d.key)
			}
		};
		c.prototype.destroyRes = function (a) {
			var b = this.resConfig.getRawGroupByName(a);
			if (b) {
				var c = this.loadedGroups.indexOf(a);
				-1 != c && this.loadedGroups.splice(c, 1);
				a = b.length;
				for (var e = 0; e < a; e++) {
					c = b[e];
					c.loaded = !1;
					var d = this.getAnalyzerByType(c.type);
					d.destroyRes(c.name)
				}
				return !0
			}
			b = this.resConfig.getType(a);
			if ("" == b)
				return !1;
			c = this.resConfig.getRawResourceItem(a);
			c.loaded = !1;
			d = this.getAnalyzerByType(b);
			return d.destroyRes(a)
		};
		c.prototype.setMaxLoadingThread =
		function (a) {
			1 > a && (a = 1);
			this.resLoader.thread = a
		};
		c.GROUP_CONFIG = "RES__CONFIG";
		return c
	}
	(egret.EventDispatcher);
	d.prototype.__class__ = "RES.Resource";
	var e = new d
})(RES || (RES = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(b) {
			void 0 === b && (b = 60);
			e.call(this);
			this.frameRate = b;
			this._time = 0;
			this._isActivate = !0;
			60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame ||
					window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			a.requestAnimationFrame || (a.requestAnimationFrame = function (a) {
				return window.setTimeout(a, 1E3 / b)
			});
			a.cancelAnimationFrame || (a.cancelAnimationFrame = function (a) {
				return window.clearTimeout(a)
			});
			a.instance = this;
			this.registerListener()
		}
		__extends(a, e);
		a.prototype.enterFrame = function () {
			var c = a.instance,
			e = a._thisObject,
			d = a._callback,
			m = b.getTimer(),
			g = m -
				c._time;
			c._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
			d.call(e, g);
			c._time = m
		};
		a.prototype.executeMainLoop = function (b, e) {
			a._callback = b;
			a._thisObject = e;
			this.enterFrame()
		};
		a.prototype.reset = function () {
			var c = a.instance;
			c._requestAnimationId && (c._time = b.getTimer(), a.cancelAnimationFrame.call(window, c._requestAnimationId), c.enterFrame())
		};
		a.prototype.registerListener = function () {
			var c = this,
			e = function () {
				c._isActivate && (c._isActivate = !1, b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.DEACTIVATE)))
			},
			d = function () {
				c._isActivate || (c._isActivate = !0, a.instance.reset(), b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.ACTIVATE)))
			},
			m = function () {
				document[g] ? e() : d()
			};
			window.addEventListener("focus", d, !1);
			window.addEventListener("blur", e, !1);
			var g,
			f;
			"undefined" !== typeof document.hidden ? (g = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ?
			(g = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", f = "ovisibilitychange");
			"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", d, !1), window.addEventListener("pagehide", e, !1));
			g && f && document.addEventListener(f, m, !1)
		};
		return a
	}
	(b.DeviceContext);
	b.HTML5DeviceContext = d;
	d.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function (b) {
	b.getItem = function (b) {
		return window.localStorage.getItem(b)
	};
	b.setItem = function (b, e) {
		try {
			return window.localStorage.setItem(b, e),
			!0
		} catch (a) {
			return console.log("egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key=" + b + "&value=" + e),
			!1
		}
	};
	b.removeItem = function (b) {
		window.localStorage.removeItem(b)
	};
	b.clear = function () {
		window.localStorage.clear()
	};
	b.init = function () {
		for (var d in b)
			egret.localStorage[d] = b[d]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(a) {
			e.call(this);
			this.globalAlpha = 1;
			this.canvas = a || this.createCanvas();
			this.canvasContext = this.canvas.getContext("2d");
			this._cacheCanvas = document.createElement("canvas");
			this._cacheCanvas.width = this.canvas.width;
			this._cacheCanvas.height = this.canvas.height;
			this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
			this._cacheCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
			this._cacheCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
			this.onResize();
			var d = this.canvasContext.setTransform,
			l = this;
			this._cacheCanvasContext.setTransform = function (a, b, c, e, n, p) {
				l._matrixA = a;
				l._matrixB = b;
				l._matrixC = c;
				l._matrixD = e;
				l._matrixTx = n;
				l._matrixTy = p;
				d.call(l._cacheCanvasContext, a, b, c, e, n, p)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy =
				this._transformTx = this._matrixTy = this._matrixTx = 0;
			this.initBlendMode()
		}
		__extends(a, e);
		a.prototype.createCanvas = function () {
			var a = b.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var e = document.getElementById(b.StageDelegate.canvas_div_name),
				a = b.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				e.appendChild(a)
			}
			b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this);
			return a
		};
		a.prototype.onResize = function () {
			if (this.canvas) {
				var a = document.getElementById(b.StageDelegate.canvas_div_name);
				this.canvas.width = b.MainContext.instance.stage.stageWidth;
				this.canvas.height = b.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this._cacheCanvas.width = this.canvas.width;
				this._cacheCanvas.height = this.canvas.height
			}
		};
		a.prototype.clearScreen = function () {
			for (var a = b.RenderFilter.getInstance().getDrawAreaList(), e = 0, d = a.length; e < d; e++) {
				var m = a[e];
				this.clearRect(m.x, m.y, m.width, m.height)
			}
			a = b.MainContext.instance.stage;
			this._cacheCanvasContext.clearRect(0,
				0, a.stageWidth, a.stageHeight);
			this.renderCost = 0
		};
		a.prototype.clearRect = function (a, b, e, d) {
			this.canvasContext.clearRect(a, b, e, d)
		};
		a.prototype.drawImage = function (a, d, l, m, g, f, h, n, p, q) {
			void 0 === q && (q = void 0);
			var r = b.MainContext.instance.rendererContext.texture_scale_factor;
			d /= r;
			l /= r;
			m /= r;
			g /= r;
			r = a._bitmapData;
			f += this._transformTx;
			h += this._transformTy;
			var s = b.getTimer();
			void 0 === q ? this._cacheCanvasContext.drawImage(r, d, l, m, g, f, h, n, p) : this.drawRepeatImage(a, d, l, m, g, f, h, n, p, q);
			e.prototype.drawImage.call(this,
				a, d, l, m, g, f, h, n, p, q);
			this.renderCost += b.getTimer() - s
		};
		a.prototype.drawRepeatImage = function (a, b, e, d, g, f, h, n, p, q) {
			if (void 0 === a.pattern) {
				var r = a._bitmapData,
				s = r;
				if (r.width != d || r.height != g)
					s = document.createElement("canvas"), s.width = d, s.height = g, s.getContext("2d").drawImage(r, b, e, d, g, 0, 0, d, g);
				b = this._cacheCanvasContext.createPattern(s, q);
				a.pattern = b
			}
			this._cacheCanvasContext.fillStyle = a.pattern;
			this._cacheCanvasContext.translate(f, h);
			this._cacheCanvasContext.fillRect(0, 0, n, p);
			this._cacheCanvasContext.translate(-f,
				-h)
		};
		a.prototype.setTransform = function (a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		a.prototype.setAlpha = function (a, e) {
			a != this.globalAlpha &&
			(this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
			e ? (this.blendValue = this.blendModes[e], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
		};
		a.prototype.initBlendMode = function () {
			this.blendModes = {};
			this.blendModes[b.BlendMode.NORMAL] = "source-over";
			this.blendModes[b.BlendMode.ADD] = "lighter"
		};
		a.prototype.setupFont = function (a,
			b) {
			void 0 === b && (b = null);
			b = b || {};
			var e = null == b.size ? a._size : b.size,
			d = null == b.fontFamily ? a._fontFamily : b.fontFamily,
			g = this._cacheCanvasContext,
			f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
			f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
			g.font = f + (e + "px " + d);
			g.textAlign = "left";
			g.textBaseline = "middle"
		};
		a.prototype.measureText = function (a) {
			return this._cacheCanvasContext.measureText(a).width
		};
		a.prototype.drawText = function (a, d, l, m, g, f) {
			void 0 === f && (f = null);
			this.setupFont(a, f);
			f = f || {};
			var h;
			h = null != f.textColor ? b.toColorString(f.textColor) : a._textColorString;
			var n;
			n = null != f.strokeColor ? b.toColorString(f.strokeColor) : a._strokeColorString;
			var p;
			p = null != f.stroke ? f.stroke : a._stroke;
			var q = this._cacheCanvasContext;
			q.fillStyle = h;
			q.strokeStyle = n;
			p && (q.lineWidth = 2 * p, q.strokeText(d, l + this._transformTx, m + this._transformTy, g || 65535));
			q.fillText(d, l + this._transformTx, m + this._transformTy, g || 65535);
			e.prototype.drawText.call(this, a, d, l, m, g, f)
		};
		a.prototype.strokeRect = function (a, b, e, d, g) {
			this._cacheCanvasContext.strokeStyle =
				g;
			this._cacheCanvasContext.strokeRect(a, b, e, d)
		};
		a.prototype.pushMask = function (a) {
			this._cacheCanvasContext.save();
			this._cacheCanvasContext.beginPath();
			this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
			this._cacheCanvasContext.clip();
			this._cacheCanvasContext.closePath()
		};
		a.prototype.popMask = function () {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		a.prototype.onRenderStart = function () {
			this._cacheCanvasContext.save()
		};
		a.prototype.onRenderFinish =
		function () {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
			for (var a = b.RenderFilter.getInstance().getDrawAreaList(), e = 0, d = a.length; e < d; e++) {
				var m = a[e];
				this.canvasContext.drawImage(this._cacheCanvas, m.x, m.y, m.width, m.height, m.x, m.y, m.width, m.height)
			}
		};
		return a
	}
	(b.RendererContext);
	b.HTML5CanvasRenderer = d;
	d.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function (b) {
	b.beginFill = function (b, a) {
		void 0 === a && (a = 1);
		var c = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.fillStyleColor = c;
		this.commandQueue.push(new d(this._setStyle, this, [c]))
	};
	b.drawRect = function (b, a, c, k) {
		this.commandQueue.push(new d(function (a, b, c, e) {
				var d = this.renderContext;
				this.canvasContext.beginPath();
				this.canvasContext.rect(d._transformTx + a, d._transformTy + b, c, e);
				this.canvasContext.closePath()
			}, this, [b, a, c, k]));
		this._fill()
	};
	b.drawCircle = function (b, a, c) {
		this.commandQueue.push(new d(function (a,
					b, c) {
				var e = this.renderContext;
				this.canvasContext.beginPath();
				this.canvasContext.arc(e._transformTx + a, e._transformTy + b, c, 0, 2 * Math.PI);
				this.canvasContext.closePath()
			}, this, [b, a, c]));
		this._fill()
	};
	b.drawRoundRect = function (b, a, c, k, l, m) {
		this.commandQueue.push(new d(function (a, b, c, e, d, k) {
				var l = this.renderContext;
				a = l._transformTx + a;
				b = l._transformTy + b;
				d /= 2;
				k = k ? k / 2 : d;
				c = a + c;
				e = b + e;
				l = e - k;
				this.canvasContext.beginPath();
				this.canvasContext.moveTo(c, l);
				this.canvasContext.quadraticCurveTo(c, e, c - d, e);
				this.canvasContext.lineTo(a +
					d, e);
				this.canvasContext.quadraticCurveTo(a, e, a, e - k);
				this.canvasContext.lineTo(a, b + k);
				this.canvasContext.quadraticCurveTo(a, b, a + d, b);
				this.canvasContext.lineTo(c - d, b);
				this.canvasContext.quadraticCurveTo(c, b, c, b + k);
				this.canvasContext.lineTo(c, l);
				this.canvasContext.closePath()
			}, this, [b, a, c, k, l, m]));
		this._fill()
	};
	b.drawEllipse = function (b, a, c, k) {
		this.commandQueue.push(new d(function (a, b, c, e) {
				var d = this.renderContext;
				this.canvasContext.save();
				a = d._transformTx + a;
				b = d._transformTy + b;
				var d = c > e ? c : e,
				k = c / d;
				e /=
				d;
				this.canvasContext.scale(k, e);
				this.canvasContext.beginPath();
				this.canvasContext.moveTo((a + c) / k, b / e);
				this.canvasContext.arc(a / k, b / e, d, 0, 2 * Math.PI);
				this.canvasContext.closePath();
				this.canvasContext.restore();
				this.canvasContext.stroke()
			}, this, [b, a, c, k]));
		this._fill()
	};
	b.lineStyle = function (b, a, c, k, l, m, g, f) {
		void 0 === b && (b = NaN);
		void 0 === a && (a = 0);
		void 0 === c && (c = 1);
		void 0 === k && (k = !1);
		void 0 === l && (l = "normal");
		void 0 === m && (m = null);
		void 0 === g && (g = null);
		void 0 === f && (f = 3);
		this.strokeStyleColor && (this.createEndLineCommand(),
			this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + c + ")";
		this.commandQueue.push(new d(function (a, b) {
				this.canvasContext.lineWidth = a;
				this.canvasContext.strokeStyle = b;
				this.canvasContext.beginPath()
			}, this, [b, a]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	b.lineTo = function (b, a) {
		this.commandQueue.push(new d(function (a, b) {
				var e = this.renderContext;
				this.canvasContext.lineTo(e._transformTx +
					a, e._transformTy + b)
			}, this, [b, a]));
		this.lineX = b;
		this.lineY = a
	};
	b.curveTo = function (b, a, c, k) {
		this.commandQueue.push(new d(function (a, b, c, e) {
				var d = this.renderContext;
				this.canvasContext.quadraticCurveTo(d._transformTx + a, d._transformTy + b, d._transformTx + c, d._transformTy + e)
			}, this, [b, a, c, k]));
		this.lineX = c;
		this.lineY = k
	};
	b.moveTo = function (b, a) {
		this.commandQueue.push(new d(function (a, b) {
				var e = this.renderContext;
				this.canvasContext.moveTo(e._transformTx + a, e._transformTy + b)
			}, this, [b, a]))
	};
	b.clear = function () {
		this.lineY =
			this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null
	};
	b.createEndFillCommand = function () {
		this.endFillCommand || (this.endFillCommand = new d(function () {
					this.canvasContext.fill();
					this.canvasContext.closePath()
				}, this, null))
	};
	b.endFill = function () {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null
	};
	b._fill = function () {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
	};
	b.createEndLineCommand = function () {
		this.endLineCommand ||
		(this.endLineCommand = new d(function () {
					this.canvasContext.stroke();
					this.canvasContext.closePath()
				}, this, null))
	};
	b._draw = function (b) {
		var a = this.commandQueue.length;
		if (0 != a) {
			this.renderContext = b;
			b = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
			b.save();
			this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
			for (var c = 0; c < a; c++) {
				var d = this.commandQueue[c];
				d.method.apply(d.thisObject, d.args)
			}
			b.restore()
		}
	};
	var d = function () {
		return function (b, a, c) {
			this.method = b;
			this.thisObject = a;
			this.args = c
		}
	}
	();
	d.prototype.__class__ = "egret_h5_graphics.Command";
	b._setStyle = function (b) {
		this.canvasContext.fillStyle = b;
		this.canvasContext.beginPath()
	};
	b.init = function () {
		for (var e in b)
			egret.Graphics.prototype[e] = b[e];
		egret.RendererContext.createRendererContext = function (a) {
			return new egret.HTML5CanvasRenderer(a)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a(a) {
			e.call(this);
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
			for (var d = 0, l = 0; d < a; d += 6, l += 4)
				this.indices[d + 0] = l + 0, this.indices[d + 1] = l + 1, this.indices[d + 2] = l + 2, this.indices[d + 3] = l + 0, this.indices[d + 4] = l + 2, this.indices[d + 5] = l + 3;
			this.initWebGL();
			this.shaderManager = new b.WebGLShaderManager(this.gl);
			this.worldTransform = new b.Matrix;
			this.initBlendMode();
			b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
			b.TextField.prototype._draw = function (a) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				b.DisplayObject.prototype._draw.call(this, a)
			}
		}
		__extends(a, e);
		a.prototype.createCanvas = function () {
			var a = b.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var e = document.getElementById(b.StageDelegate.canvas_div_name),
				a = b.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				e.appendChild(a)
			}
			b.MainContext.instance.stage.addEventListener(b.Event.RESIZE,
				this.onResize, this);
			return a
		};
		a.prototype.onResize = function () {
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
		a.prototype.handleContextLost = function () {
			this.contextLost = !0
		};
		a.prototype.handleContextRestored =
		function () {
			this.initWebGL();
			this.shaderManager.setContext(this.gl);
			this.contextLost = !1
		};
		a.prototype.initWebGL = function () {
			for (var a = {
					stencil : !0
				}, b, e = ["experimental-webgl", "webgl"], d = 0; d < e.length; d++) {
				try {
					b = this.canvas.getContext(e[d], a)
				} catch (g) {}

				if (b)
					break
			}
			if (!b)
				throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
			this.setContext(b)
		};
		a.prototype.setContext = function (a) {
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
		a.prototype.initBlendMode = function () {
			this.blendModesWebGL = {};
			this.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			this.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
		};
		a.prototype.start =
		function () {
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
				var e = 4 * this.vertSize;
				a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, e, 0);
				a.vertexAttribPointer(b.aTextureCoord,
					2, a.FLOAT, !1, e, 8);
				a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, e, 16)
			}
		};
		a.prototype.clearScreen = function () {
			var a = this.gl;
			a.colorMask(!0, !0, !0, !0);
			for (var e = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, m = e.length; d < m; d++) {
				var g = e[d];
				a.viewport(g.x, g.y, g.width, g.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			e = b.MainContext.instance.stage;
			a.viewport(0, 0, e.stageWidth, e.stageHeight);
			this.renderCost = 0
		};
		a.prototype.setBlendMode = function (a) {
			a ||
			(a = b.BlendMode.NORMAL);
			if (this.currentBlendMode != a) {
				var e = this.blendModesWebGL[a];
				e && (this._draw(), this.gl.blendFunc(e[0], e[1]), this.currentBlendMode = a)
			}
		};
		a.prototype.drawRepeatImage = function (a, b, e, d, g, f, h, n, p, q) {
			for (; f < n; f += d)
				for (q = h; q < p; q += g) {
					var r = Math.min(d, n - f),
					s = Math.min(g, p - q);
					this.drawImage(a, b, e, r, s, f, q, r, s)
				}
		};
		a.prototype.drawImage = function (a, e, d, m, g, f, h, n, p, q) {
			void 0 === q && (q = void 0);
			if (!this.contextLost)
				if (void 0 !== q)
					this.drawRepeatImage(a, e, d, m, g, f, h, n, p, q);
				else {
					q = b.MainContext.instance.rendererContext.texture_scale_factor;
					e /= q;
					d /= q;
					m /= q;
					g /= q;
					this.createWebGLTexture(a);
					if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1)
						this._draw(), this.currentBaseTexture = a.webGLTexture;
					var r = this.worldTransform,
					s = r.a,
					t = r.b,
					u = r.c,
					v = r.d,
					x = r.tx,
					y = r.ty;
					0 == f && 0 == h || r.append(1, 0, 0, 1, f, h);
					1 == m / n && 1 == g / p || r.append(n / m, 0, 0, p / g, 0, 0);
					f = r.a;
					h = r.b;
					n = r.c;
					p = r.d;
					q = r.tx;
					var w = r.ty;
					r.a = s;
					r.b = t;
					r.c = u;
					r.d = v;
					r.tx = x;
					r.ty = y;
					s = a._sourceWidth;
					t = a._sourceHeight;
					a = m;
					r = g;
					e /= s;
					d /= t;
					m /= s;
					g /= t;
					s = this.vertices;
					t = 4 * this.currentBatchSize *
						this.vertSize;
					u = this.worldAlpha;
					s[t++] = q;
					s[t++] = w;
					s[t++] = e;
					s[t++] = d;
					s[t++] = u;
					s[t++] = f * a + q;
					s[t++] = h * a + w;
					s[t++] = m + e;
					s[t++] = d;
					s[t++] = u;
					s[t++] = f * a + n * r + q;
					s[t++] = p * r + h * a + w;
					s[t++] = m + e;
					s[t++] = g + d;
					s[t++] = u;
					s[t++] = n * r + q;
					s[t++] = p * r + w;
					s[t++] = e;
					s[t++] = g + d;
					s[t++] = u;
					this.currentBatchSize++
				}
		};
		a.prototype._draw = function () {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = b.getTimer();
				this.start();
				var e = this.gl;
				e.bindTexture(e.TEXTURE_2D, this.currentBaseTexture);
				var d = this.vertices.subarray(0, 4 * this.currentBatchSize *
						this.vertSize);
				e.bufferSubData(e.ARRAY_BUFFER, 0, d);
				e.drawElements(e.TRIANGLES, 6 * this.currentBatchSize, e.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += b.getTimer() - a;
				b.Profiler.getInstance().onDrawImage()
			}
		};
		a.prototype.setTransform = function (a) {
			var b = this.worldTransform;
			b.a = a.a;
			b.b = a.b;
			b.c = a.c;
			b.d = a.d;
			b.tx = a.tx;
			b.ty = a.ty
		};
		a.prototype.setAlpha = function (a, b) {
			this.worldAlpha = a;
			this.setBlendMode(b)
		};
		a.prototype.createWebGLTexture = function (a) {
			if (!a.webGLTexture) {
				var b = this.gl;
				a.webGLTexture =
					b.createTexture();
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
		a.prototype.pushMask = function (a) {
			this._draw();
			var b = this.gl;
			0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
			var e = this.maskDataFreeList.pop();
			e ? (e.x = a.x, e.y = a.y, e.w = a.width, e.h = a.height) : e = {
				x : a.x,
				y : a.y,
				w : a.width,
				h : a.height
			};
			this.maskList.push(e);
			b.colorMask(!1, !1, !1, !1);
			b.stencilOp(b.KEEP, b.KEEP, b.INCR);
			this.renderGraphics(e);
			b.colorMask(!0, !0, !0, !0);
			b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
			b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
		};
		a.prototype.popMask = function () {
			this._draw();
			var a = this.gl,
			b = this.maskList.pop();
			b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
			0 == this.maskList.length && a.disable(a.STENCIL_TEST)
		};
		a.prototype.setGlobalColorTransform = function (a) {
			if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
				a = a.concat();
				var b = this.shaderManager.colorTransformShader;
				b.uniforms.colorAdd.value.w = a.splice(19,
						1)[0] / 255;
				b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
				b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
				b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
				b.uniforms.matrix.value = a
			}
		};
		a.prototype.setupFont = function (a, b) {
			var e = this.canvasContext,
			d = a.italic ? "italic " : "normal ",
			d = d + (a.bold ? "bold " : "normal "),
			d = d + (a.size + "px " + a.fontFamily);
			e.font = d;
			e.textAlign = "left";
			e.textBaseline = "middle"
		};
		a.prototype.measureText = function (a) {
			return this.canvasContext.measureText(a).width
		};
		a.prototype.renderGraphics =
		function (a) {
			var b = this.gl,
			e = this.shaderManager.primitiveShader;
			this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
			this.updateGraphics(a);
			this.shaderManager.activateShader(e);
			b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
			b.uniformMatrix3fv(e.translationMatrix, !1, this.worldTransform.toArray(!0));
			b.uniform2f(e.projectionVector, this.projectionX, -this.projectionY);
			b.uniform2f(e.offsetVector, 0, 0);
			b.uniform3fv(e.tintColor, [1, 1, 1]);
			b.uniform1f(e.alpha, this.worldAlpha);
			b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
			b.vertexAttribPointer(e.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
			b.vertexAttribPointer(e.colorAttribute, 4, b.FLOAT, !1, 24, 8);
			b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
			this.shaderManager.activateShader(this.shaderManager.defaultShader)
		};
		a.prototype.updateGraphics =
		function (a) {
			var b = this.gl;
			this.buildRectangle(a);
			b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
			b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
			b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
		};
		a.prototype.buildRectangle = function (a) {
			var b = a.x,
			e = a.y,
			d = a.w;
			a = a.h;
			var g = this.graphicsPoints,
			f = this.graphicsIndices,
			h = g.length / 6;
			g.push(b, e);
			g.push(0, 0, 0, 1);
			g.push(b + d, e);
			g.push(0, 0, 0, 1);
			g.push(b, e + a);
			g.push(0, 0, 0, 1);
			g.push(b + d, e + a);
			g.push(0, 0, 0, 1);
			f.push(h, h, h + 1, h + 2, h + 3, h + 3)
		};
		return a
	}
	(b.RendererContext);
	b.WebGLRenderer = d;
	d.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function (b) {
	var d = function () {
		function b() {}

		b.compileProgram = function (a, c, d) {
			d = b.compileFragmentShader(a, d);
			c = b.compileVertexShader(a, c);
			var l = a.createProgram();
			a.attachShader(l, c);
			a.attachShader(l, d);
			a.linkProgram(l);
			a.getProgramParameter(l, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
			return l
		};
		b.compileFragmentShader = function (a, c) {
			return b._compileShader(a, c, a.FRAGMENT_SHADER)
		};
		b.compileVertexShader = function (a, c) {
			return b._compileShader(a, c, a.VERTEX_SHADER)
		};
		b._compileShader =
		function (a, b, e) {
			e = a.createShader(e);
			a.shaderSource(e, b);
			a.compileShader(e);
			return a.getShaderParameter(e, a.COMPILE_STATUS) ? e : (console.log(a.getShaderInfoLog(e)), null)
		};
		b.checkCanUseWebGL = function () {
			if (void 0 == b.canUseWebGL)
				try {
					var a = document.createElement("canvas");
					b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
				} catch (c) {
					b.canUseWebGL = !1
				}
			return b.canUseWebGL
		};
		return b
	}
	();
	b.WebGLUtils = d;
	d.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function () {
		function b(a) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var c = 0; c < this.maxAttibs; c++)
				this.attribState[c] = !1;
			this.setContext(a)
		}
		b.prototype.setContext = function (b) {
			this.gl = b;
			this.primitiveShader = new c(b);
			this.defaultShader = new e(b);
			this.colorTransformShader = new a(b);
			this.activateShader(this.defaultShader)
		};
		b.prototype.activateShader = function (a) {
			this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader =
					a)
		};
		b.prototype.setAttribs = function (a) {
			var b,
			c;
			c = this.tempAttribState.length;
			for (b = 0; b < c; b++)
				this.tempAttribState[b] = !1;
			c = a.length;
			for (b = 0; b < c; b++)
				this.tempAttribState[a[b]] = !0;
			a = this.gl;
			c = this.attribState.length;
			for (b = 0; b < c; b++)
				this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
		};
		return b
	}
	();
	b.WebGLShaderManager = d;
	d.prototype.__class__ = "egret.WebGLShaderManager";
	var e = function () {
		function a(b) {
			this.defaultVertexSrc =
				"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function () {
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
				a.getAttribLocation(c, "aColor");
			-1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			for (var e in this.uniforms)
				this.uniforms[e].uniformLocation = a.getUniformLocation(c, e);
			this.initUniforms();
			this.program = c
		};
		a.prototype.initUniforms = function () {
			if (this.uniforms) {
				var a = this.gl,
				b,
				c;
				for (c in this.uniforms) {
					b = this.uniforms[c];
					var e = b.type;
					"mat2" === e || "mat3" === e || "mat4" === e ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === e ? b.glFunc = a.uniformMatrix2fv :
							"mat3" === e ? b.glFunc = a.uniformMatrix3fv : "mat4" === e && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + e], b.glValueLength = "2f" === e || "2i" === e ? 2 : "3f" === e || "3i" === e ? 3 : "4f" === e || "4i" === e ? 4 : 1)
				}
			}
		};
		a.prototype.syncUniforms = function () {
			if (this.uniforms) {
				var a,
				b = this.gl,
				c;
				for (c in this.uniforms)
					a = this.uniforms[c], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x,
						a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
			}
		};
		return a
	}
	();
	b.EgretShader = e;
	e.prototype.__class__ = "egret.EgretShader";
	var a = function (a) {
		function b(c) {
			a.call(this, c);
			this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
			this.uniforms = {
				matrix : {
					type : "mat4",
					value : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
				},
				colorAdd : {
					type : "4f",
					value : {
						x : 0,
						y : 0,
						z : 0,
						w : 0
					}
				}
			};
			this.init()
		}
		__extends(b, a);
		return b
	}
	(e);
	b.ColorTransformShader = a;
	a.prototype.__class__ = "egret.ColorTransformShader";
	var c = function () {
		function a(b) {
			this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = b;
			this.init()
		}
		a.prototype.init = function () {
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
	}
	();
	b.PrimitiveShader = c;
	c.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype.proceed = function (a) {
			function e() {
				if (4 == m.readyState)
					if (m.status != a._status && (a._status = m.status, b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, m.status)), 400 <= m.status || 0 == m.status)
						b.IOErrorEvent.dispatchIOErrorEvent(a);
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
			if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE)
				this.loadTexture(a);
			else if (a.dataFormat == b.URLLoaderDataFormat.SOUND)
				this.loadSound(a);
			else {
				var d = a._request,
				m = this.getXHR();
				m.onreadystatechange = e;
				var g = b.NetContext._getUrl(d);
				m.open(d.method, g, !0);
				this.setResponseType(m, a.dataFormat);
				d.method != b.URLRequestMethod.GET && d.data ? d.data instanceof b.URLVariables ? (m.setRequestHeader("Content-Type",
						"application/x-www-form-urlencoded"), m.send(d.data.toString())) : (m.setRequestHeader("Content-Type", "multipart/form-data"), m.send(d.data)) : m.send()
			}
		};
		a.prototype.loadSound = function (a) {
			function e(g) {
				window.clearTimeout(m.__timeoutId);
				m.removeEventListener("canplaythrough", e, !1);
				m.removeEventListener("error", d, !1);
				g = new b.Sound;
				g._setAudio(m);
				a.data = g;
				b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
			}
			function d(g) {
				window.clearTimeout(m.__timeoutId);
				m.removeEventListener("canplaythrough",
					e, !1);
				m.removeEventListener("error", d, !1);
				b.IOErrorEvent.dispatchIOErrorEvent(a)
			}
			var m = new Audio(a._request.url);
			m.__timeoutId = window.setTimeout(e, 100);
			m.addEventListener("canplaythrough", e, !1);
			m.addEventListener("error", d, !1);
			m.load()
		};
		a.prototype.getXHR = function () {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		a.prototype.setResponseType = function (a, e) {
			switch (e) {
			case b.URLLoaderDataFormat.TEXT:
			case b.URLLoaderDataFormat.VARIABLES:
				a.responseType = b.URLLoaderDataFormat.TEXT;
				break;
			case b.URLLoaderDataFormat.BINARY:
				a.responseType = "arraybuffer";
				break;
			default:
				a.responseType = e
			}
		};
		a.prototype.loadTexture = function (a) {
			var e = a._request,
			d = new Image;
			d.onload = function (e) {
				d.onerror = null;
				d.onload = null;
				e = new b.Texture;
				e._setBitmapData(d);
				a.data = e;
				b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
			};
			d.onerror = function (e) {
				d.onerror = null;
				d.onload = null;
				b.IOErrorEvent.dispatchIOErrorEvent(a)
			};
			d.src = e.url
		};
		return a
	}
	(b.NetContext);
	b.HTML5NetContext = d;
	d.prototype.__class__ = "egret.HTML5NetContext"
})(egret ||
	(egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._isTouchDown = !1;
			this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
		}
		__extends(a, e);
		a.prototype.prevent = function (a) {
			a.stopPropagation();
			!0 != a.isScroll && a.preventDefault()
		};
		a.prototype.run = function () {
			var a = this;
			window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function (b) {
					a._onTouchBegin(b);
					a.prevent(b)
				}, !1), this.rootDiv.addEventListener("MSPointerMove", function (b) {
					a._onTouchMove(b);
					a.prevent(b)
				},
					!1), this.rootDiv.addEventListener("MSPointerUp", function (b) {
					a._onTouchEnd(b);
					a.prevent(b)
				}, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function (b) {
				a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
			});
			window.addEventListener("mouseup", function (b) {
				a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
				a._isTouchDown = !1
			})
		};
		a.prototype.addMouseListener = function () {
			var a = this;
			this.rootDiv.addEventListener("mousedown", function (b) {
				a._onTouchBegin(b)
			});
			this.rootDiv.addEventListener("mousemove", function (b) {
				a._onTouchMove(b)
			});
			this.rootDiv.addEventListener("mouseup", function (b) {
				a._onTouchEnd(b)
			})
		};
		a.prototype.addTouchListener = function () {
			var a = this;
			this.rootDiv.addEventListener("touchstart", function (b) {
				for (var e = b.changedTouches.length, d = 0; d < e; d++)
					a._onTouchBegin(b.changedTouches[d]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchmove",
				function (b) {
				for (var e = b.changedTouches.length, d = 0; d < e; d++)
					a._onTouchMove(b.changedTouches[d]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchend", function (b) {
				for (var e = b.changedTouches.length, d = 0; d < e; d++)
					a._onTouchEnd(b.changedTouches[d]);
				a.prevent(b)
			}, !1);
			this.rootDiv.addEventListener("touchcancel", function (b) {
				for (var e = b.changedTouches.length, d = 0; d < e; d++)
					a._onTouchEnd(b.changedTouches[d]);
				a.prevent(b)
			}, !1)
		};
		a.prototype.inOutOfCanvas = function (a) {
			var e = this.getLocation(this.rootDiv, a);
			a = e.x;
			var e = e.y,
			d = b.MainContext.instance.stage;
			return 0 > a || 0 > e || a > d.stageWidth || e > d.stageHeight ? !0 : !1
		};
		a.prototype.dispatchLeaveStageEvent = function () {
			this.touchingIdentifiers.length = 0;
			b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
		};
		a.prototype._onTouchBegin = function (a) {
			var b = this.getLocation(this.rootDiv, a),
			e = -1;
			a.hasOwnProperty("identifier") && (e = a.identifier);
			this.onTouchBegan(b.x, b.y, e)
		};
		a.prototype._onTouchMove = function (a) {
			var b = this.getLocation(this.rootDiv, a),
			e = -1;
			a.hasOwnProperty("identifier") &&
			(e = a.identifier);
			this.onTouchMove(b.x, b.y, e)
		};
		a.prototype._onTouchEnd = function (a) {
			var b = this.getLocation(this.rootDiv, a),
			e = -1;
			a.hasOwnProperty("identifier") && (e = a.identifier);
			this.onTouchEnd(b.x, b.y, e)
		};
		a.prototype.getLocation = function (a, e) {
			var d = document.documentElement,
			m = window,
			g,
			f;
			"function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), g = f.left, f = f.top) : f = g = 0;
			g += m.pageXOffset - d.clientLeft;
			f += m.pageYOffset - d.clientTop;
			null != e.pageX ? (d = e.pageX, m = e.pageY) : (g -= document.body.scrollLeft,
				f -= document.body.scrollTop, d = e.clientX, m = e.clientY);
			var h = b.Point.identity;
			h.x = (d - g) / b.StageDelegate.getInstance().getScaleX();
			h.y = (m - f) / b.StageDelegate.getInstance().getScaleY();
			return h
		};
		return a
	}
	(b.TouchContext);
	b.HTML5TouchContext = d;
	d.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function (b, d) {
	function e() {
		this.constructor = b
	}
	for (var a in d)
		d.hasOwnProperty(a) && (b[a] = d[a]);
	e.prototype = d.prototype;
	b.prototype = new e
};
(function (b) {
	var d = function (e) {
		function a() {
			e.call(this);
			this._hasListeners = !1;
			this._inputType = "";
			this._isShow = !1;
			this.textValue = "";
			this._height = this._width = 0;
			this._styleInfoes = {};
			var a = b.StageDelegate.getInstance().getScaleX(),
			d = b.StageDelegate.getInstance().getScaleY(),
			l = b.Browser.getInstance().$new("div");
			l.position.x = 0;
			l.position.y = 0;
			l.scale.x = a;
			l.scale.y = d;
			l.transforms();
			l.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
			this.div = l;
			d = b.MainContext.instance.stage;
			a = d.stageWidth;
			d = d.stageHeight;
			l = new b.Shape;
			l.width = a;
			l.height = d;
			l.touchEnabled = !0;
			this._shape = l;
			this.getStageDelegateDiv().appendChild(this.div)
		}
		__extends(a, e);
		a.prototype.getStageDelegateDiv = function () {
			var a = b.Browser.getInstance().$("#StageDelegateDiv");
			a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
			return a
		};
		a.prototype._setMultiline = function (a) {
			e.prototype._setMultiline.call(this, a);
			this.createInput()
		};
		a.prototype.callHandler =
		function (a) {
			a.stopPropagation()
		};
		a.prototype._add = function () {
			this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
		};
		a.prototype._remove = function () {
			this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
			this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
		};
		a.prototype._addListeners = function () {
			this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart",
					this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
		};
		a.prototype._removeListeners = function () {
			this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
		};
		a.prototype.createInput = function () {
			var a = this._multiline ? "textarea" : "input";
			this._inputType != a && (this._inputType =
					a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign",
					"top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
		};
		a.prototype._open = function (a, b, e, d) {};
		a.prototype._setScale = function (a, d) {
			e.prototype._setScale.call(this, a, d);
			var l = b.StageDelegate.getInstance().getScaleX(),
			m = b.StageDelegate.getInstance().getScaleY();
			this.div.scale.x = l * a;
			this.div.scale.y = m * d;
			this.div.transforms()
		};
		a.prototype.changePosition = function (a, e) {
			var d = b.StageDelegate.getInstance().getScaleX(),
			m = b.StageDelegate.getInstance().getScaleY();
			this.div.position.x =
				a * d;
			this.div.position.y = e * m;
			this.div.transforms()
		};
		a.prototype.setStyles = function () {
			this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
			this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
			this.setElementStyle("textAlign", this._textAlign);
			this.setElementStyle("fontSize", this._size + "px");
			this.setElementStyle("color", "#000000");
			this.setElementStyle("width", this._width + "px");
			this.setElementStyle("height", this._height + "px");
			this.setElementStyle("border", "1px solid red");
			this.setElementStyle("display",
				"block")
		};
		a.prototype._show = function () {
			0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
			this._isShow = !0;
			var a = this._getText();
			this.inputElement.value = a;
			var e = this;
			this.inputElement.oninput = function () {
				e.textValue = e.inputElement.value;
				e.dispatchEvent(new b.Event("updateText"))
			};
			this.setStyles();
			this.inputElement.focus();
			this.inputElement.selectionStart = a.length;
			this.inputElement.selectionEnd = a.length;
			this._shape && null == this._shape.parent &&
			b.MainContext.instance.stage.addChild(this._shape)
		};
		a.prototype._hide = function () {
			if (null != this.inputElement) {
				this._isShow = !1;
				this.inputElement.oninput = function () {};
				this.setElementStyle("border", "none");
				this.setElementStyle("display", "none");
				this.inputElement.value = "";
				this.setElementStyle("width", "0px");
				window.scrollTo(0, 0);
				var a = this;
				b.setTimeout(function () {
					a.inputElement.blur();
					window.scrollTo(0, 0)
				}, this, 50);
				this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
			}
		};
		a.prototype._getText =
		function () {
			this.textValue || (this.textValue = "");
			return this.textValue
		};
		a.prototype._setText = function (a) {
			this.textValue = a;
			this.resetText()
		};
		a.prototype.resetText = function () {
			this.inputElement && (this.inputElement.value = this.textValue)
		};
		a.prototype._setWidth = function (a) {
			this._width = a
		};
		a.prototype._setHeight = function (a) {
			this._height = a
		};
		a.prototype.setElementStyle = function (a, b) {
			this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
		};
		return a
	}
	(b.StageText);
	b.HTML5StageText =
		d;
	d.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function () {
	return new egret.HTML5StageText
};
/*ih5game.setShare({
	title : "\u5b57\u724c\u7ffb\u7ffb\u7ffb\uff0c\u73a9\u4e86\u5b83\uff0c\u5988\u5988\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3\u6211\u7684\u56fd\u5b66\u4e86",
	desc : "\u8bb0\u4f4f\u987a\u5e8f\uff0c\u731c\u4e2d\u5b83\uff0c\u4f60\u4f1a\u770b\u5230\u4e0d\u4e00\u6837\u7684\u56fd\u5b66"
});*/
var GloabData = function () {
	function t() {}

	return t.CONST_WIDTH = 640,
	t.CONST_HEIGHT = 960,
	t.nTouchDiff = 0,
	t.arraySay = null,
	t.arrayPlayWord = null,
	t.arrayMoreGame = null,
	t.REQ_URL = "http://www.onekes.com/plate_wx/",
	t.arrayBanner = null,
	t
}
();
GloabData.prototype.__class__ = "GloabData";
var Helper = function () {
	function t() {}

	return t.createBitMap = function (t, e, a) {
		var r = new egret.Bitmap;
		return r.texture = RES.getRes(t),
		r.x = e,
		r.y = a,
		r
	},
	t.createText = function (t, e, a, r) {
		var o = new egret.TextField;
		return o.text = t,
		o.textAlign = "center",
		o.size = r,
		o.width = 120,
		o.x = e,
		o.y = a,
		o
	},
	t.createBtn = function (t, e, a, r, o) {
		var i = new egret.Sprite,
		n = new egret.Bitmap;
		return n.texture = RES.getRes(t),
		i.addChild(n),
		i.touchEnabled = !0,
		i.x = e,
		i.y = a,
		i.addEventListener(egret.TouchEvent.TOUCH_TAP, r, o),
		i
	},
	t.changeLayer = function (t) {
		var e = egret.MainContext.instance.stage;
		e.removeChildren(),
		e.addChild(t)
	},
	t.isInArray = function (t, e) {
		for (var a = 0; a < e.length; ++a)
			if (e[a] == t)
				return !0;
		return !1
	},
	t.createBannner = function () {
		return e
	},
	t.getPlatfrom = function () {
		var t = navigator.platform;
		return "Linux" == t.substr(0, 5) ? "Android" : "iPod" == t.substr(0, 4) || "iPhone" == t.substr(0, 6) || "iPad" == t.substr(0, 4) ? "IOS" : "Win32" == t.substr(0, 5) ? "Win32" : "unknow"
	},
	t
}
();
Helper.prototype.__class__ = "Helper";
var NetWork = function () {
	function t() {
		this.urlloader = null,
		this.urlloader = new egret.URLLoader
	}
	return t.getInstance = function () {
		return null == this.mInstance && (this.mInstance = new t),
		this.mInstance
	},
	t.prototype.reqState = function () {},
	t.prototype.reqAds = function () {},
	t.mInstance = null,
	t
}
();
NetWork.prototype.__class__ = "NetWork";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, Card = function (t) {
	function e(e, a) {
		t.call(this),
		this.nChangeCount = 0,
		this.bmCardBg = new egret.Bitmap,
		this.bmCardBg.texture = RES.getRes("pic_16"),
		this.addChild(this.bmCardBg),
		this.txtWord = new egret.TextField,
		this.txtWord.text = a,
		this.txtWord.textColor = 9315107,
		this.txtWord.textAlign = "center",
		this.txtWord.size = 50,
		this.txtWord.width = 120,
		this.txtWord.anchorX = .5,
		this.txtWord.anchorY = .5,
		this.txtWord.x = this.bmCardBg.width / 2,
		this.txtWord.y = this.bmCardBg.height / 2,
		this.addChild(this.txtWord),
		this.txtError = new egret.TextField,
		this.txtError.text = "X",
		this.txtError.textColor = 16711680,
		this.txtError.textAlign = "center",
		this.txtError.size = 90,
		this.txtError.width = 120,
		this.txtError.anchorX = .5,
		this.txtError.anchorY = .5,
		this.txtError.x = this.bmCardBg.width / 2,
		this.txtError.y = this.bmCardBg.height / 2,
		this.txtError.visible = !1,
		this.addChild(this.txtError)
	}
	return __extends(e, t),
	e.prototype.showWord = function () {
		this.bmCardBg.texture = RES.getRes("pic_16"),
		this.txtWord.visible = !0
	},
	e.prototype.hideWord = function () {
		this.bmCardBg.texture = RES.getRes("pic_19"),
		this.txtWord.visible = !1
	},
	e.prototype.showError = function () {
		this.showWord(),
		this.txtError.visible = !0
	},
	e.prototype.addChangeCount = function () {
		this.nChangeCount++
	},
	e.prototype.getChangeCount = function () {
		return this.nChangeCount
	},
	e
}
(egret.Sprite);
Card.prototype.__class__ = "Card";
var UIGameData = function () {
	function t() {
		this.nScore = 0,
		this.nState = 1,
		this.nCardCount = 5,
		this.nWordEnd = this.nWordStart = 0,
		this.calcWordStarAndEnd()
	}
	return t.prototype.getScore = function () {
		return this.nScore
	},
	t.prototype.getState = function () {
		return this.nState
	},
	t.prototype.getMaxState = function () {
		return this.arrayWord.length
	},
	t.prototype.addScore = function (t) {
		this.nScore += t
	},
	t.prototype.addState = function (t) {
		this.nState += t,
		0 >= this.nCardCount && (this.nCardCount = 3)
	},
	t.prototype.getLookTime = function () {
		return 0
	},
	t.prototype.getChangeTime = function () {
		var t = 400 - 100 * Math.log(this.nState);
		return console.log("=============  " + t),
		50 >= t && (t = 50),
		t
	},
	t.prototype.getCardCount = function () {
		return this.nState <= this.arrayWord.length ? this.arrayWord[this.nState - 1].length : 3
	},
	t.prototype.getChangeCount = function () {
		return 5 + Math.round(this.nState / 3)
	},
	t.prototype.calcWordStarAndEnd = function () {
		this.arrayWord = GloabData.arrayPlayWord
	},
	t.prototype.getWord = function (t) {
		return this.nState <= this.arrayWord.length ? this.arrayWord[this.nState - 1].charAt(t - 1) : t.toString()
	},
	t.prototype.getWords = function () {
		return this.nState <= this.arrayWord.length ? this.arrayWord[this.nState - 1] : ""
	},
	t.prototype.getWordAllState = function () {
		return ""
	},
	t
}
();
UIGameData.prototype.__class__ = "UIGameData";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, UIGameFail = function (t) {
	function e(e, a, r) {
		t.call(this),
		this.addChild(Helper.createBitMap("bgImage", 0, 0));
		var o = Helper.createBitMap("fail_bg", GloabData.CONST_WIDTH / 2, 400);
		o.anchorX = .5,
		o.anchorY = .5,
		this.addChild(o),
		this.addChild(Helper.createBtn("pic_32", 258, 600, this.contiunHander, this)),
		this.addChild(Helper.createBtn("more_game", 415, 600, this.touchHanderMore, this)),
		this.addChild(Helper.createBtn("share", 100, 600, this.shareHandler, this)),
		this.addChild(Helper.createText(e.toString(), 370, 300, 30)),
		o = Helper.createText("\u4f60\u73a9\u5230\u3010" + r + "\u3011\u6298\u621f\u4e86                                 ", 120, 3 * GloabData.CONST_HEIGHT / 4 - 300, 30),
		o.width = 400,
		this.addChild(o),
		o = Helper.createText("\u83b7\u5f97\u4e86" + e + "\u5206                                            ", 120, 3 * GloabData.CONST_HEIGHT / 4 - 265, 30),
		o.width = 400,
		this.addChild(o),
		o = Helper.createText("\u53f7\u79f0\u3010" + this.getSayWord(e) + "\u3011                           ", 120, 3 * GloabData.CONST_HEIGHT / 4 - 230, 30),
		o.width = 400,
		this.addChild(o),
		o = Helper.createText("\u5f00\u5fc3\u4e0d\uff1f                                                          ", 120, 3 * GloabData.CONST_HEIGHT / 4 - 195, 30),
		o.width = 400,
		this.addChild(o),
		function (t, e, a, r) {
			var o = "";
			o = 0 == e ? "\u5b57\u724c\u7ffb\u7ffb\u7ffb\uff0c\u73a9\u4e86\u5b83\uff0c\u5988\u5988\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3\u6211\u7684\u56fd\u5b66\u4e86\uff01" : e >= 1 && 20 >= e ? "\u6211\u7ffb\u5230\u4e86\u3010" + r + "\u3011\uff0c\u83b7\u5f97\u4e86" + e + "\u5206 \u53f7\u79f0\u3010" + a + "\u3011\uff0c\u8d76\u7d27\u6765\u5e2e\u6211\u554a" : e >= 21 && 100 >= e ? "\u6211\u7ffb\u5230\u4e86\u3010" + r + "\u3011\uff0c\u83b7\u5f97\u4e86" + e + "\u5206 \u53f7\u79f0\u3010" + a + "\u3011\uff0c\u53ef\u4ee5\u8f7b\u677e\u85d0\u89c6\u4f60\u4eec\u5566" : "\u6211\u7ffb\u5230\u4e86\u3010" + r + "\u3011\uff0c\u83b7\u5f97\u4e86" + e + "\u5206 \u53f7\u79f0\u3010" + a + "\u3011\uff0c\u85d0\u89c6\u56fd\u5b66\u5927\u5e08";
			/*
			"字牌翻翻翻，玩了它，妈妈再也不用担心我的国学了！" : e >= 1 && 20 >= e ? "我翻到了【" + r + "】，获得了" + e + "分 号称【" + a + "】，赶紧来帮我啊 赏给你辣条！" : e >= 21 && 100 >= e ? "我翻到了【" + r + "】，获得了" + e + "分 号称【" + a + "】，可以轻松藐视你们啦  哈哈哈哈" : "我翻到了【" + r + "】，获得了" + e + "分 号称【" + a + "】，藐视国学大师 哈哈哈哈哈！不服来战";
			*/
			window.myPlayScore = e;
			// updateShare(e,o);
		}
		(a, e, this.getSayWord(e), r)
	}
	return __extends(e, t),
	e.prototype.contiunHander = function () {
		Helper.changeLayer(new UIGame)
	},
	e.prototype.getSayWord = function (t) {
		for (var e = Math.round(3 * Math.random()), a = 0; a < GloabData.arraySay.length; ++a)
			if (t >= GloabData.arraySay[a].score_down && t <= GloabData.arraySay[a].score_up)
				return GloabData.arraySay[a].content[e];
		return GloabData.arraySay[GloabData.arraySay.length - 1].content[e]
	},
	e.prototype.touchHanderMore = function () {
		Play68.goHome();
	},
	e.prototype.shareHandler = function () {
	   play68_submitScore(window.myPlayScore);
	},
	e.prototype.weixinShare = function () {},
	e
}
(egret.Sprite);
UIGameFail.prototype.__class__ = "UIGameFail";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, UIGameShow = function (t) {
	function e() {
		t.call(this),
		this.arrayWord = [],
		this.addChild(Helper.createBitMap("bgImage", 0, 0)),
		this.addChild(Helper.createBitMap("pic_05", 0, 0)),
		this.txtScore = Helper.createText("0", 525, 35, 30),
		this.txtScore.anchorX = .5,
		this.txtScore.anchorY = .5,
		this.addChild(this.txtScore),
		this.txtState = Helper.createText("0", 190, 35, 30),
		this.txtState.anchorX = .5,
		this.txtState.anchorY = .5,
		this.addChild(this.txtState),
		this.txtWordTip = Helper.createText("", GloabData.CONST_WIDTH / 2, 100, 40),
		this.txtWordTip.anchorX = .5,
		this.txtWordTip.anchorY = .5,
		this.txtWordTip.width = 500,
		this.addChild(this.txtWordTip)
	}
	return __extends(e, t),
	e.prototype.showScore = function (t) {
		egret.Tween.get(this.txtScore, {
			loop : !1
		}).to({
			scaleX : 1.5,
			scaleY : 1.5
		}, 200).to({
			scaleX : 1,
			scaleY : 1
		}, 200),
		this.txtScore.text = (10 * t).toString(),
		egret.Tween.get(this.txtState, {
			loop : !1
		}).to({
			scaleX : 1.5,
			scaleY : 1.5
		}, 200).to({
			scaleX : 1,
			scaleY : 1
		}, 200),
		this.txtState.text = t.toString()
	},
	e.prototype.showState = function () {},
	e.prototype.showWordTip = function (t) {
		this.removeWords(),
		this.txtWordTip.text = t
	},
	e.prototype.showWordRight = function (t, e, a, r, o) {
		return t = Helper.createText(a, t, e, 40),
		t.textColor = 9315107,
		t.anchorX = .5,
		t.anchorY = .5,
		egret.Tween.get(t, {
			loop : !1
		}).to({
			x : GloabData.CONST_WIDTH / 2 + 40 * (r - o / 2 - .5),
			y : 100
		}, 500),
		this.arrayWord.push(t),
		t
	},
	e.prototype.removeWords = function () {
		for (var t = 0; t < this.arrayWord.length; t++)
			this.arrayWord[t]._parent.removeChild(this.arrayWord[t]);
		this.arrayWord = []
	},
	e
}
(egret.Sprite);
UIGameShow.prototype.__class__ = "UIGameShow";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, UIGame = function (t) {
	function e() {
		t.call(this),
		this.clsGameData = new UIGameData,
		this.clsGameShow = new UIGameShow,
		this.addChild(this.clsGameShow),
		this.initData(),
		this.initView(),
		1 == this.clsGameData.getState() ? this.createTip() : this.startTimeGame(),
		this.touchEnabled = !0,
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHander, this),
		this.uiTime = Helper.createText("", 130, 480, 30),
		share(0, 0, " ", "")
	}
	return __extends(e, t),
	e.prototype.initData = function () {
		this.arrayLastY = [],
		this.arrayCard = [],
		this.arrayAction = [],
		this.nCurRight = 1,
		this.bCanTouch = !1
	},
	e.prototype.initView = function () {
		this.clsGameShow.showWordTip(this.clsGameData.getWords()),
		this.createCard()
	},
	e.prototype.initStartGame = function () {
		this.startTimeGame(),
		this.uiReady = Helper.createBitMap("", 200, 160),
		this.addChild(this.uiReady),
		this.setChildIndex(this.uiReady, 1e3),
		this.showReadAction()
	},
	e.prototype.createCard = function () {
		this.clsGameData.getCardCount();
		for (var t = 1; t <= this.clsGameData.getCardCount(); ++t) {
			var e = new Card(t, this.clsGameData.getWord(t));
			e.y = GloabData.CONST_HEIGHT / 2,
			e.x = GloabData.CONST_WIDTH / 2 + 150 * (t - (this.clsGameData.getCardCount() / 2 + .5)) - 50,
			this.addChild(e),
			this.arrayCard.push(e)
		}
	},
	e.prototype.startTimeGame = function () {
		this.arrayCard.length && egret.Tween.get(this.arrayCard[0], {
			loop : !1
		}).wait(this.clsGameData.getLookTime() + 2100).call(this.handerGameStart, this)
	},
	e.prototype.changgeCard = function () {
		this.arrayHavePosX = [],
		this.arrayHavePosY = [];
		for (var t = 0; t < this.arrayCard.length; t++) {
			var e = this.clsGameData.getChangeTime(),
			a = [],
			r = [];
			a[0] = this.arrayCard[t].x,
			r[0] = this.arrayCard[t].y;
			var o = egret.Tween.get(this.arrayCard[t], {
					loop : !1
				});
			o.to({
				x : a[0],
				y : r[0]
			}, e, egret.Ease.circInOut);
			for (var i = 1; i < this.clsGameData.getChangeCount(); i++) {
				var n = this.randDirecX(a[i - 1], r[i - 1], t, i);
				a[i] = n[0],
				r[i] = n[1],
				o.to({
					x : a[i],
					y : r[i]
				}, e, egret.Ease.circInOut)
			}
			o.call(this.handerCanTouch, this),
			this.arrayHavePosX.push(a),
			this.arrayHavePosY.push(r)
		}
	},
	e.prototype.moveCard = function () {},
	e.prototype.randDirecX = function (t, e, a, r) {
		Math.random(),
		Math.round(3 * Math.random() + .5);
		var o = 200 - 400 * Math.random(),
		i = 200 - 400 * Math.random();
		return this.clsGameData.getState(),
		t + o > 0 && 550 > t + o && this.isHavePos(t + o, e + i, r) && e + i > 250 && 700 > e + i ? [t + o, e + i] : this.randDirecX(t, e, a, r)
	},
	e.prototype.isHavePos = function (t, e, a) {
		for (var r = 0; r < this.arrayHavePosX.length; r++)
			if (t >= this.arrayHavePosX[r][a] && t <= this.arrayHavePosX[r][a] + 120 && e >= this.arrayHavePosY[r][a] && e <= this.arrayHavePosY[r][a] + 120 || t + 120 >= this.arrayHavePosX[r][a] && t + 120 <= this.arrayHavePosX[r][a] + 120 && e + 120 >= this.arrayHavePosY[r][a] && e + 120 <= this.arrayHavePosY[r][a] + 120 || t + 120 >= this.arrayHavePosX[r][a] && t + 120 <= this.arrayHavePosX[r][a] + 120 && e >= this.arrayHavePosY[r][a] && e <= this.arrayHavePosY[r][a] + 120 || t >= this.arrayHavePosX[r][a] && t <= this.arrayHavePosX[r][a] + 120 && e + 120 >= this.arrayHavePosY[r][a] && e + 120 <= this.arrayHavePosY[r][a] + 120)
				return !1;
		return !0
	},
	e.prototype.getLastPos = function () {
		for (var t = Math.round(2 * Math.random()); Helper.isInArray(t, this.arrayLastY); )
			t = Math.round(2 * Math.random());
		return this.arrayLastY.push(t),
		GloabData.CONST_HEIGHT / 2 - 120 * (t - 1) - 50
	},
	e.prototype.touchHander = function (t) {
		this.bCanTouch && (t = this.isTouch(t.localX, t.localY), t < this.nCurRight || (this.nCurRight == t ? (this.nCurRight++, this.dealRight(t)) : this.dealError(t), this.nCurRight == this.clsGameData.getCardCount() + 1 && (this.bCanTouch = !1, egret.Tween.get(this.uiTime, {
						loop : !1
					}).wait(600).call(this.enterNextState, this))))
	},
	e.prototype.isTouch = function (t, e) {
		for (var a = 0, r = 0; r < this.arrayCard.length; r++) {
			var o = this.arrayCard[r].x - GloabData.nTouchDiff,
			i = this.arrayCard[r].y - GloabData.nTouchDiff,
			n = this.arrayCard[r].width + 2 * GloabData.nTouchDiff,
			s = this.arrayCard[r].height + 2 * GloabData.nTouchDiff;
			if (t >= o && o + n >= t && e >= i && i + s >= e) {
				a = r + 1;
				break
			}
		}
		return a
	},
	e.prototype.handerCanTouch = function () {
		this.bCanTouch = !0
	},
	e.prototype.handerGameStart = function () {
		this.hideAllCard(),
		this.changgeCard()
	},
	e.prototype.hideAllCard = function () {
		for (var t = 0; t < this.arrayCard.length; ++t)
			this.arrayCard[t].hideWord()
	},
	e.prototype.hideCard = function (t) {
		t.hideWord()
	},
	e.prototype.cleanCards = function () {
		for (var t = 0; t < this.arrayCard.length; t++)
			this.removeChild(this.arrayCard[t])
	},
	e.prototype.dealRight = function (t) {
		this.arrayCard[t - 1]._touchEnabled = !1,
		this.arrayCard[t - 1].showWord(),
		this.addChild(this.clsGameShow.showWordRight(this.arrayCard[t - 1].x, this.arrayCard[t - 1].y, this.clsGameData.getWord(t), t, this.clsGameData.getCardCount())),
		this.clsGameData.addScore(1),
		this.clsGameShow.showScore(this.clsGameData.getScore())
	},
	e.prototype.dealError = function (t) {
		this.bCanTouch = !1;
		for (var e = 0; e < this.arrayCard.length; ++e)
			this.arrayCard[e].showWord();
		this.arrayCard[t - 1].showError(),
		this.dealFail()
	},
	e.prototype.enterNextState = function () {
		NetWork.getInstance().reqState(this.clsGameData.getState()),
		this.clsGameData.getState() >= this.clsGameData.getMaxState() && this.openFail(),
		this.cleanCards(),
		this.clsGameData.addState(1),
		this.clsGameShow.showState(this.clsGameData.getState()),
		this.initData(),
		this.initView(),
		this.initStartGame()
	},
	e.prototype.dealFail = function () {
		this.bCanTouch = !1,
		egret.Tween.get(this.uiTime, {
			loop : !1
		}).wait(1e3).call(this.openFail, this)
	},
	e.prototype.openFail = function () {
		Helper.changeLayer(new UIGameFail(this.clsGameData.getScore(), this.clsGameData.getState(), this.clsGameData.getWords()))
	},
	e.prototype.showReadAction = function () {
		this.nReadWord = 3,
		egret.Tween.get(this.uiTime, {
			loop : !1
		}).wait(this.clsGameData.getLookTime()).call(this.playReadAction, this)
	},
	e.prototype.playReadAction = function () {
		this.createReadyUI(this.nReadWord),
		egret.Tween.get(this.uiReady, {
			loop : !1
		}).to({
			scaleX : 0,
			scaleY : 0,
			alpha : 0
		}, 700, egret.Ease.quintIn).call(this.playeReadyHandler, this)
	},
	e.prototype.playeReadyHandler = function () {
		0 < --this.nReadWord && this.playReadAction()
	},
	e.prototype.createReadyUI = function () {
		this.uiReady.texture = RES.getRes("ready_" + this.nReadWord),
		this.uiReady.x = GloabData.CONST_WIDTH / 2,
		this.uiReady.y = 320,
		this.uiReady.anchorX = .5,
		this.uiReady.anchorY = .5,
		this.uiReady.alpha = 1,
		this.uiReady.scaleX = 1,
		this.uiReady.scaleY = 1
	},
	e.prototype.createTip = function () {
		this.spTipLayer = new egret.Sprite,
		this.addChild(this.spTipLayer),
		this.spTipLayer.touchEnabled = !0;
		var t = Helper.createBitMap("black", 0, 0),
		e = new egret.Rectangle(2, 2, 2, 2);
		t.scale9Grid = e,
		t.width = GloabData.CONST_WIDTH,
		t.height = GloabData.CONST_HEIGHT,
		this.spTipLayer.addChild(t),
		this.spTipLayer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipLayerHandler, this),
		t = Helper.createText("\u8bf7\u5728\u5b57\u724c", 20, 230, 40),
		t.width = 160,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u6253\u4e71", 230, 250, 50),
		t.width = 100,
		t.textColor = 16711680,
		t.rotation = -15,
		t.anchorX = .5,
		t.anchorY = .5,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u540e\uff0c\u6309", 280, 230, 40),
		t.width = 120,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u987a\u5e8f", 450, 250, 50),
		t.width = 100,
		t.textColor = 16711680,
		t.rotation = -15,
		t.anchorX = .5,
		t.anchorY = .5,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u7ffb\u5f00\u3002", 500, 230, 40),
		t.width = 120,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u6e38\u620f\u7684\u5173\u952e\u662f\u76ef\u4f4f\u5b57\u724c\u3002\u4e00\u822c\u4eba\u6211\u4e0d\u544a\u8bc9\u4ed6\uff01", 20, 320, 30),
		t.width = 610,
		this.spTipLayer.addChild(t),
		t = Helper.createText("\u70b9\u51fb\u6311\u6218", GloabData.CONST_WIDTH / 2, 850, 30),
		t.anchorX = .5,
		t.anchorY = .5,
		t.width = 500,
		this.spTipLayer.addChild(t),
		egret.Tween.get(t, {
			loop : !0
		}).to({
			scaleX : 1.2,
			scaleY : 1.2
		}, 1e3).to({
			scaleX : 1,
			scaleY : 1
		}, 1e3)
	},
	e.prototype.tipLayerHandler = function () {
		this.removeChild(this.spTipLayer),
		this.initStartGame()
	},
	e
}
(egret.Sprite);
UIGame.prototype.__class__ = "UIGame";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, UILoading = function (t) {
	function e() {
		t.call(this),
		this.createView()
	}
	return __extends(e, t),
	e.prototype.createView = function () {
		this.textField = new egret.TextField,
		this.addChild(this.textField),
		this.textField.x = GloabData.CONST_WIDTH / 2,
		this.textField.y = GloabData.CONST_HEIGHT / 2,
		this.textField.anchorX = .5,
		this.textField.anchorY = .5,
		this.textField.width = 480,
		this.textField.height = 100,
		this.textField.textAlign = "center"
	},
	e.prototype.setProgress = function (t, e) {
		this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + t + "/" + e
	},
	e
}
(egret.Sprite);
UILoading.prototype.__class__ = "UILoading";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, UIMain = function (t) {
	function e() {
		t.call(this),
		this.addChild(Helper.createBitMap("bgImage", 0, 0));
		var e = Helper.createBitMap("title", GloabData.CONST_WIDTH / 2, 300);
		e.anchorX = .5,
		e.anchorY = .5,
		this.addChild(e),
		e = Helper.createText("\u70b9\u51fb\u8fdb\u5165", GloabData.CONST_WIDTH / 2, 740, 50),
		e.anchorX = .5,
		e.anchorY = .5,
		e.width = 500,
		this.addChild(e),
		egret.Tween.get(e, {
			loop : !0
		}).to({
			scaleX : 1.2,
			scaleY : 1.2
		}, 1e3).to({
			scaleX : 1,
			scaleY : 1
		}, 1e3),
		this.touchEnabled = !0,
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHander, this),
		e = Helper.createText("\u0036\u0038\u5fae\u6e38\u620f", GloabData.CONST_WIDTH / 2, 840, 20),
		e.anchorX = .5,
		e.anchorY = .5,
		e.width = 1e3,
		this.addChild(e),
		share(0, 0, " ", "")
	}
	return __extends(e, t),
	e.prototype.touchHander = function () {
		Helper.changeLayer(new UIGame)
	},
	e
}
(egret.Sprite);
UIMain.prototype.__class__ = "UIMain";
var __extends = this.__extends || function (t, e) {
	function a() {
		this.constructor = t
	}
	for (var r in e)
		e.hasOwnProperty(r) && (t[r] = e[r]);
	a.prototype = e.prototype,
	t.prototype = new a
}, Main = function (t) {
	function e() {
		t.call(this),
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this)
	}
	return __extends(e, t),
	e.prototype.startGame = function () {
		this.clsLoadingView = new UILoading,
		this.stage.addChild(this.clsLoadingView),
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		RES.loadConfig("resource/resource.json", "resource/")
	},
	e.prototype.onConfigComplete = function () {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
		RES.loadGroup("preload")
	},
	e.prototype.onResourceLoadComplete = function (t) {
		"preload" == t.groupName && (this.stage.removeChild(this.clsLoadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.getResAsync("config", this.onStart, this))
	},
	e.prototype.onResourceProgress = function (t) {
		"preload" == t.groupName && this.clsLoadingView.setProgress(t.itemsLoaded, t.itemsTotal)
	},
	e.prototype.onStart = function (t) {
		GloabData.arraySay = t[0].comment,
		GloabData.arrayPlayWord = t[0].play_content,
		GloabData.arrayMoreGame = t[0].more_game,
		Helper.changeLayer(new UIMain)
	},
	e
}
(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
