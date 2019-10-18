var egret;
(function(t) {
	var e = function() {
		function t() {
			this._hashCode = t.hashCount++
		}
		Object.defineProperty(t.prototype, "hashCode", {
			get: function() {
				return this._hashCode
			},
			enumerable: !0,
			configurable: !0
		});
		t.hashCount = 1;
		return t
	}();
	t.HashObject = e;
	e.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e) {
			void 0 === e && (e = 300);
			t.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > e && (e = 1);
			this.autoDisposeTime = e;
			this.frameCount = 0
		}
		__extends(e, t);
		e.prototype._checkFrame = function() {
			this.frameCount--;
			0 >= this.frameCount && this.dispose()
		};
		Object.defineProperty(e.prototype, "length", {
			get: function() {
				return this._length
			},
			enumerable: !0,
			configurable: !0
		});
		e.prototype.push = function(t) {
			var i = this.objectPool; - 1 == i.indexOf(t) && (i.push(t), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, e._callBackList.push(this)))
		};
		e.prototype.pop = function() {
			if (0 == this._length) return null;
			this._length--;
			return this.objectPool.pop()
		};
		e.prototype.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var t = e._callBackList,
				i = t.indexOf(this); - 1 != i && t.splice(i, 1)
		};
		e._callBackList = [];
		return e
	}(t.HashObject);
	t.Recycler = e;
	e.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(t) {
	t.__START_TIME;
	t.getTimer = function() {
		return Date.now() - t.__START_TIME
	}
})(egret || (egret = {}));
(function(t) {
	t.__callLaterFunctionList = [];
	t.__callLaterThisList = [];
	t.__callLaterArgsList = [];
	t.callLater = function(e, i) {
		for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
		t.__callLaterFunctionList.push(e);
		t.__callLaterThisList.push(i);
		t.__callLaterArgsList.push(n)
	};
	t.__callAsyncFunctionList = [];
	t.__callAsyncThisList = [];
	t.__callAsyncArgsList = [];
	t.__callAsync = function(e, i) {
		for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
		t.__callAsyncFunctionList.push(e);
		t.__callAsyncThisList.push(i);
		t.__callAsyncArgsList.push(n)
	}
})(egret || (egret = {}));
var egret_dom;
(function(t) {
	function e() {
		for (var t = document.createElement("div").style, e = ["t", "webkitT", "msT", "MozT", "OT"], i = 0; i < e.length; i++)
			if (e[i] + "ransform" in t) return e[i];
		return e[0]
	}
	t.header = "";
	t.getHeader = e;
	t.getTrans = function(i) {
		"" == t.header && (t.header = e());
		return t.header + i.substring(1, i.length)
	}
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			e.call(this);
			this._eventPhase = 2;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = t;
			this._bubbles = i;
			this._cancelable = n
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "type", {
			get: function() {
				return this._type
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "bubbles", {
			get: function() {
				return this._bubbles
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "cancelable", {
			get: function() {
				return this._cancelable
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "eventPhase", {
			get: function() {
				return this._eventPhase
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "currentTarget", {
			get: function() {
				return this._currentTarget
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "target", {
			get: function() {
				return this._target
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.isDefaultPrevented = function() {
			return this._isDefaultPrevented
		};
		i.prototype.preventDefault = function() {
			this._cancelable && (this._isDefaultPrevented = !0)
		};
		i.prototype.stopPropagation = function() {
			this._bubbles && (this._isPropagationStopped = !0)
		};
		i.prototype.stopImmediatePropagation = function() {
			this._bubbles && (this._isPropagationImmediateStopped = !0)
		};
		i.prototype._reset = function() {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
		};
		i._dispatchByTarget = function(e, i, n, r, o, s) {
			void 0 === o && (o = !1);
			void 0 === s && (s = !1);
			var a = e.eventRecycler;
			a || (a = e.eventRecycler = new t.Recycler);
			var h = a.pop();
			h ? h._type = n : h = new e(n);
			h._bubbles = o;
			h._cancelable = s;
			if (r)
				for (var c in r) h[c] = r[c], null !== h[c] && (r[c] = null);
			e = i.dispatchEvent(h);
			a.push(h);
			return e
		};
		i._getPropertyData = function(t) {
			var e = t._props;
			e || (e = t._props = {});
			return e
		};
		i.dispatchEvent = function(t, e, n, r) {
			void 0 === n && (n = !1);
			var o = i._getPropertyData(i);
			r && (o.data = r);
			i._dispatchByTarget(i, t, e, o, n)
		};
		i.ADDED_TO_STAGE = "addedToStage";
		i.REMOVED_FROM_STAGE = "removedFromStage";
		i.ADDED = "added";
		i.REMOVED = "removed";
		i.COMPLETE = "complete";
		i.ENTER_FRAME = "enterFrame";
		i.RENDER = "render";
		i.FINISH_RENDER = "finishRender";
		i.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
		i.LEAVE_STAGE = "leaveStage";
		i.RESIZE = "resize";
		i.CHANGE = "change";
		i.ACTIVATE = "activate";
		i.DEACTIVATE = "deactivate";
		i.CLOSE = "close";
		i.CONNECT = "connect";
		return i
	}(t.HashObject);
	t.Event = e;
	e.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e, i, n) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			t.call(this, e, i, n);
			this._status = 0
		}
		__extends(e, t);
		Object.defineProperty(e.prototype, "status", {
			get: function() {
				return this._status
			},
			enumerable: !0,
			configurable: !0
		});
		e.dispatchHTTPStatusEvent = function(t, i) {
			null == e.httpStatusEvent && (e.httpStatusEvent = new e(e.HTTP_STATUS));
			e.httpStatusEvent._status = i;
			t.dispatchEvent(e.httpStatusEvent)
		};
		e.HTTP_STATUS = "httpStatus";
		e.httpStatusEvent = null;
		return e
	}(t.Event);
	t.HTTPStatusEvent = e;
	e.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			e.call(this, t, i, n)
		}
		__extends(i, e);
		i.dispatchIOErrorEvent = function(e) {
			t.Event._dispatchByTarget(i, e, i.IO_ERROR)
		};
		i.IO_ERROR = "ioError";
		return i
	}(t.Event);
	t.IOErrorEvent = e;
	e.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n, r, o, s, a, h, c, u) {
			void 0 === i && (i = !0);
			void 0 === n && (n = !0);
			void 0 === r && (r = 0);
			void 0 === o && (o = 0);
			void 0 === s && (s = 0);
			void 0 === a && (a = !1);
			void 0 === h && (h = !1);
			void 0 === u && (u = !1);
			e.call(this, t, i, n);
			this._stageY = this._stageX = 0;
			this.touchPointID = r;
			this._stageX = o;
			this._stageY = s;
			this.ctrlKey = a;
			this.altKey = h;
			this.touchDown = u
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "stageX", {
			get: function() {
				return this._stageX
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "stageY", {
			get: function() {
				return this._stageY
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "localX", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, t.Point.identity).x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "localY", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, t.Point.identity).y
			},
			enumerable: !0,
			configurable: !0
		});
		i.dispatchTouchEvent = function(e, n, r, o, s, a, h, c, u) {
			void 0 === r && (r = 0);
			void 0 === o && (o = 0);
			void 0 === s && (s = 0);
			void 0 === a && (a = !1);
			void 0 === h && (h = !1);
			void 0 === c && (c = !1);
			void 0 === u && (u = !1);
			var l = t.Event._getPropertyData(i);
			l.touchPointID = r;
			l._stageX = o;
			l._stageY = s;
			l.ctrlKey = a;
			l.altKey = h;
			l.shiftKey = c;
			l.touchDown = u;
			t.Event._dispatchByTarget(i, e, n, l, !0, !0)
		};
		i.TOUCH_TAP = "touchTap";
		i.TOUCH_MOVE = "touchMove";
		i.TOUCH_BEGIN = "touchBegin";
		i.TOUCH_END = "touchEnd";
		i.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		i.TOUCH_ROLL_OUT = "touchRollOut";
		i.TOUCH_ROLL_OVER = "touchRollOver";
		i.TOUCH_OUT = "touchOut";
		i.TOUCH_OVER = "touchOver";
		return i
	}(t.Event);
	t.TouchEvent = e;
	e.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			e.call(this, t, i, n)
		}
		__extends(i, e);
		i.dispatchTimerEvent = function(e, n) {
			t.Event._dispatchByTarget(i, e, n)
		};
		i.TIMER = "timer";
		i.TIMER_COMPLETE = "timerComplete";
		return i
	}(t.Event);
	t.TimerEvent = e;
	e.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n, r, o) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			void 0 === r && (r = 0);
			void 0 === o && (o = 0);
			e.call(this, t, i, n);
			this.bytesLoaded = r;
			this.bytesTotal = o
		}
		__extends(i, e);
		i.dispatchProgressEvent = function(e, n, r, o) {
			void 0 === r && (r = 0);
			void 0 === o && (o = 0);
			t.Event._dispatchByTarget(i, e, n, {
				bytesLoaded: r,
				bytesTotal: o
			})
		};
		i.PROGRESS = "progress";
		i.SOCKET_DATA = "socketData";
		return i
	}(t.Event);
	t.ProgressEvent = e;
	e.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.CAPTURING_PHASE = 1;
		t.AT_TARGET = 2;
		t.BUBBLING_PHASE = 3;
		return t
	}();
	t.EventPhase = e;
	e.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t) {
			void 0 === t && (t = null);
			e.call(this);
			this._eventTarget = t ? t : this
		}
		__extends(i, e);
		i.prototype.addEventListener = function(e, i, n, r, o) {
			void 0 === r && (r = !1);
			void 0 === o && (o = 0);
			"undefined" === typeof r && (r = !1);
			"undefined" === typeof o && (o = 0);
			i || t.Logger.fatal("addEventListener侦听函数不能为空");
			r ? (this._captureEventsMap || (this._captureEventsMap = {}), r = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), r = this._eventsMap);
			var s = r[e];
			s || (s = r[e] = []);
			this._insertEventBin(s, i, n, o)
		};
		i.prototype._insertEventBin = function(t, e, i, n, r) {
			void 0 === r && (r = void 0);
			for (var o = -1, s = t.length, a = 0; a < s; a++) {
				var h = t[a];
				if (h.listener === e && h.thisObject === i && h.display === r) return !1; - 1 == o && h.priority < n && (o = a)
			}
			e = {
				listener: e,
				thisObject: i,
				priority: n
			};
			r && (e.display = r); - 1 != o ? t.splice(o, 0, e) : t.push(e);
			return !0
		};
		i.prototype.removeEventListener = function(t, e, i, n) {
			void 0 === n && (n = !1);
			if (n = n ? this._captureEventsMap : this._eventsMap) {
				var r = n[t];
				r && (this._removeEventBin(r, e, i), 0 == r.length && delete n[t])
			}
		};
		i.prototype._removeEventBin = function(t, e, i, n) {
			void 0 === n && (n = void 0);
			for (var r = t.length, o = 0; o < r; o++) {
				var s = t[o];
				if (s.listener === e && s.thisObject === i && s.display === n) return t.splice(o, 1), !0
			}
			return !1
		};
		i.prototype.hasEventListener = function(t) {
			return this._eventsMap && this._eventsMap[t] || this._captureEventsMap && this._captureEventsMap[t]
		};
		i.prototype.willTrigger = function(t) {
			return this.hasEventListener(t)
		};
		i.prototype.dispatchEvent = function(t) {
			t._reset();
			t._target = this._eventTarget;
			t._currentTarget = this._eventTarget;
			return this._notifyListener(t)
		};
		i.prototype._notifyListener = function(t) {
			var e = 1 == t._eventPhase ? this._captureEventsMap : this._eventsMap;
			if (!e) return !0;
			e = e[t._type];
			if (!e) return !0;
			var i = e.length;
			if (0 == i) return !0;
			for (var e = e.concat(), n = 0; n < i; n++) {
				var r = e[n];
				r.listener.call(r.thisObject, t);
				if (t._isPropagationImmediateStopped) break
			}
			return !t._isDefaultPrevented
		};
		i.prototype.dispatchEventWith = function(e, i, n) {
			void 0 === i && (i = !1);
			t.Event.dispatchEvent(this, e, i, n)
		};
		return i
	}(t.HashObject);
	t.EventDispatcher = e;
	e.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this.reuseEvent = new t.Event("")
		}
		__extends(i, e);
		i.prototype.run = function() {
			t.Ticker.getInstance().run();
			t.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			t.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run()
		};
		i.prototype.renderLoop = function(e) {
			if (0 < t.__callLaterFunctionList.length) {
				var n = t.__callLaterFunctionList;
				t.__callLaterFunctionList = [];
				var r = t.__callLaterThisList;
				t.__callLaterThisList = [];
				var o = t.__callLaterArgsList;
				t.__callLaterArgsList = []
			}
			e = this.stage;
			var s = i.cachedEvent;
			s._type = t.Event.RENDER;
			this.dispatchEvent(s);
			t.Stage._invalidateRenderFlag && (this.broadcastRender(), t.Stage._invalidateRenderFlag = !1);
			n && this.doCallLaterList(n, r, o);
			0 < t.__callAsyncFunctionList.length && this.doCallAsyncList();
			n = this.rendererContext;
			n.onRenderStart();
			n.clearScreen();
			e._updateTransform();
			s._type = t.Event.FINISH_UPDATE_TRANSFORM;
			this.dispatchEvent(s);
			e._draw(n);
			s._type = t.Event.FINISH_RENDER;
			this.dispatchEvent(s);
			n.onRenderFinish()
		};
		i.prototype.broadcastEnterFrame = function(e) {
			e = this.reuseEvent;
			e._type = t.Event.ENTER_FRAME;
			this.dispatchEvent(e);
			for (var i = t.DisplayObject._enterFrameCallBackList.concat(), n = i.length, r = 0; r < n; r++) {
				var o = i[r];
				e._target = o.display;
				e._currentTarget = o.display;
				o.listener.call(o.thisObject, e)
			}
			i = t.Recycler._callBackList;
			for (r = i.length - 1; 0 <= r; r--) i[r]._checkFrame()
		};
		i.prototype.broadcastRender = function() {
			var e = this.reuseEvent;
			e._type = t.Event.RENDER;
			for (var i = t.DisplayObject._renderCallBackList.concat(), n = i.length, r = 0; r < n; r++) {
				var o = i[r],
					s = o.display;
				e._target = s;
				e._currentTarget = s;
				o.listener.call(o.thisObject, e)
			}
		};
		i.prototype.doCallLaterList = function(t, e, i) {
			for (var n = t.length, r = 0; r < n; r++) {
				var o = t[r];
				null != o && o.apply(e[r], i[r])
			}
		};
		i.prototype.doCallAsyncList = function() {
			var e = t.__callAsyncFunctionList.concat(),
				i = t.__callAsyncThisList.concat(),
				n = t.__callAsyncArgsList.concat();
			t.__callAsyncFunctionList.length = 0;
			t.__callAsyncThisList.length = 0;
			for (var r = t.__callAsyncArgsList.length = 0; r < e.length; r++) {
				var o = e[r];
				null != o && o.apply(i[r], n[r])
			}
		};
		i.DEVICE_PC = "web";
		i.DEVICE_MOBILE = "native";
		i.RUNTIME_HTML5 = "runtime_html5";
		i.RUNTIME_NATIVE = "runtime_native";
		i.cachedEvent = new t.Event("");
		return i
	}(t.EventDispatcher);
	t.MainContext = e;
	e.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
		if (!this.navigator) return !0;
		var t = navigator.userAgent.toLowerCase();
		return -1 != t.indexOf("mobile") || -1 != t.indexOf("android")
	},
	testRuntimeType = function() {
		return this.navigator ? !0 : !1
	};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(t) {
	var e = function() {
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
			t.Ticker.getInstance().register(this.update, this);
			null == this._txt && (this._txt = new t.TextField, this._txt.size = 28, this._txt.multiline = !0, t.MainContext.instance.stage.addChild(this._txt));
			var e = t.MainContext.instance;
			e.addEventListener(t.Event.ENTER_FRAME, this.onEnterFrame, this);
			e.addEventListener(t.Event.RENDER, this.onStartRender, this);
			e.addEventListener(t.Event.FINISH_RENDER, this.onFinishRender, this);
			e.addEventListener(t.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
		};
		e.prototype.onEnterFrame = function(e) {
			this._lastTime = t.getTimer()
		};
		e.prototype.onStartRender = function(e) {
			e = t.getTimer();
			this._logicPerformanceCost = e - this._lastTime;
			this._lastTime = e
		};
		e.prototype.onFinishUpdateTransform = function(e) {
			e = t.getTimer();
			this._updateTransformPerformanceCost = e - this._lastTime;
			this._lastTime = e
		};
		e.prototype.onFinishRender = function(e) {
			e = t.getTimer();
			this._renderPerformanceCost = e - this._lastTime;
			this._lastTime = e
		};
		e.prototype.update = function(e) {
			this._tick++;
			this._totalDeltaTime += e;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				e = (this._preDrawCount - 1).toString();
				var i = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(t.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + e + "\ncost:" + i + "\nFPS:" + Math.floor(1e3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0
		};
		e.prototype.onDrawImage = function() {
			this._preDrawCount++
		};
		return e
	}();
	t.Profiler = e;
	e.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.apply(this, arguments);
			this._timeScale = 1;
			this._paused = !1;
			this.callBackList = []
		}
		__extends(i, e);
		i.prototype.run = function() {
			t.__START_TIME = (new Date).getTime();
			t.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		i.prototype.update = function(t) {
			var e = this.callBackList.concat(),
				i = e.length;
			t *= this._timeScale;
			t *= this._timeScale;
			for (var n = 0; n < i; n++) {
				var r = e[n];
				r.listener.call(r.thisObject, t)
			}
		};
		i.prototype.register = function(t, e, i) {
			void 0 === i && (i = 0);
			this._insertEventBin(this.callBackList, t, e, i)
		};
		i.prototype.unregister = function(t, e) {
			this._removeEventBin(this.callBackList, t, e)
		};
		i.prototype.setTimeout = function(e, i, n) {
			for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
			t.Logger.warning("Ticker#setTimeout方法即将废弃,请使用egret.setTimeout");
			t.setTimeout.apply(null, [e, i, n].concat(r))
		};
		i.prototype.setTimeScale = function(t) {
			this._timeScale = t
		};
		i.prototype.getTimeScale = function() {
			return this._timeScale
		};
		i.prototype.pause = function() {
			this._paused = !0
		};
		i.prototype.resume = function() {
			this._paused = !1
		};
		i.getInstance = function() {
			null == i.instance && (i.instance = new i);
			return i.instance
		};
		return i
	}(t.EventDispatcher);
	t.Ticker = e;
	e.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.LEFT = "left";
		t.RIGHT = "right";
		t.CENTER = "center";
		t.JUSTIFY = "justify";
		t.CONTENT_JUSTIFY = "contentJustify";
		return t
	}();
	t.HorizontalAlign = e;
	e.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.TOP = "top";
		t.BOTTOM = "bottom";
		t.MIDDLE = "middle";
		t.JUSTIFY = "justify";
		t.CONTENT_JUSTIFY = "contentJustify";
		return t
	}();
	t.VerticalAlign = e;
	e.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i) {
			void 0 === i && (i = 0);
			e.call(this);
			this._currentCount = 0;
			this.delay = t;
			this.repeatCount = i
		}
		__extends(i, e);
		i.prototype.currentCount = function() {
			return this._currentCount
		};
		Object.defineProperty(i.prototype, "running", {
			get: function() {
				return this._running
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.reset = function() {
			this.stop();
			this._currentCount = 0
		};
		i.prototype.start = function() {
			this._running || (this.lastTime = t.getTimer(), 0 != this._currentCount && (this._currentCount = 0), t.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		i.prototype.stop = function() {
			this._running && (t.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		i.prototype.onEnterFrame = function(e) {
			e = t.getTimer();
			e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER_COMPLETE)))
		};
		return i
	}(t.EventDispatcher);
	t.Timer = e;
	e.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(t) {
	function e(t) {
		t = t.prototype ? t.prototype : Object.getPrototypeOf(t);
		if (t.hasOwnProperty("__class__")) return t.__class__;
		var e = t.constructor.toString(),
			i = e.indexOf("("),
			e = e.substring(9, i);
		Object.defineProperty(t, "__class__", {
			value: e,
			enumerable: !1,
			writable: !0
		});
		return e
	}
	t.getQualifiedClassName = e;
	t.getQualifiedSuperclassName = function(t) {
		t = t.prototype ? t.prototype : Object.getPrototypeOf(t);
		if (t.hasOwnProperty("__superclass__")) return t.__superclass__;
		var i = Object.getPrototypeOf(t);
		if (null == i) return null;
		i = e(i.constructor);
		if (!i) return null;
		Object.defineProperty(t, "__superclass__", {
			value: i,
			enumerable: !1,
			writable: !0
		});
		return i
	}
})(egret || (egret = {}));
(function(t) {
	var e = {};
	t.getDefinitionByName = function(t) {
		if (!t) return null;
		var i = e[t];
		if (i) return i;
		for (var n = t.split("."), r = n.length, i = __global, o = 0; o < r; o++)
			if (i = i[n[o]], !i) return null;
		return e[t] = i
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(t) {
	function e(t) {
		for (var e in i) {
			var n = i[e];
			n.delay -= t;
			0 >= n.delay && (n.listener.apply(n.thisObject, n.params), delete i[e])
		}
	}
	var i = {},
		n = 0;
	t.setTimeout = function(r, o, s) {
		for (var a = [], h = 3; h < arguments.length; h++) a[h - 3] = arguments[h];
		a = {
			listener: r,
			thisObject: o,
			delay: s,
			params: a
		};
		0 == n && t.Ticker.getInstance().register(e, null);
		n++;
		i[n] = a;
		return n
	};
	t.clearTimeout = function(t) {
		delete i[t]
	}
})(egret || (egret = {}));
(function(t) {
	t.hasDefinition = function(e) {
		return t.getDefinitionByName(e) ? !0 : !1
	}
})(egret || (egret = {}));
(function(t) {
	t.toColorString = function(t) {
		if (isNaN(t) || 0 > t) t = 0;
		16777215 < t && (t = 16777215);
		for (t = t.toString(16).toUpperCase(); 6 > t.length;) t = "0" + t;
		return "#" + t
	}
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n, r, o, s) {
			void 0 === t && (t = 1);
			void 0 === i && (i = 0);
			void 0 === n && (n = 0);
			void 0 === r && (r = 1);
			void 0 === o && (o = 0);
			void 0 === s && (s = 0);
			e.call(this);
			this.a = t;
			this.b = i;
			this.c = n;
			this.d = r;
			this.tx = o;
			this.ty = s
		}
		__extends(i, e);
		i.prototype.prepend = function(t, e, i, n, r, o) {
			var s = this.tx;
			if (1 != t || 0 != e || 0 != i || 1 != n) {
				var a = this.a,
					h = this.c;
				this.a = a * t + this.b * i;
				this.b = a * e + this.b * n;
				this.c = h * t + this.d * i;
				this.d = h * e + this.d * n
			}
			this.tx = s * t + this.ty * i + r;
			this.ty = s * e + this.ty * n + o;
			return this
		};
		i.prototype.append = function(t, e, i, n, r, o) {
			var s = this.a,
				a = this.b,
				h = this.c,
				c = this.d;
			if (1 != t || 0 != e || 0 != i || 1 != n) this.a = t * s + e * h, this.b = t * a + e * c, this.c = i * s + n * h, this.d = i * a + n * c;
			this.tx = r * s + o * h + this.tx;
			this.ty = r * a + o * c + this.ty;
			return this
		};
		i.prototype.prependTransform = function(e, i, n, r, o, s, a, h, c) {
			if (o % 360) {
				var u = t.NumberUtils.cos(o);
				o = t.NumberUtils.sin(o)
			} else u = 1, o = 0;
			if (h || c) this.tx -= h, this.ty -= c;
			s || a ? (this.prepend(u * n, o * n, -o * r, u * r, 0, 0), this.prepend(t.NumberUtils.cos(a), t.NumberUtils.sin(a), -t.NumberUtils.sin(s), t.NumberUtils.cos(s), e, i)) : this.prepend(u * n, o * n, -o * r, u * r, e, i);
			return this
		};
		i.prototype.appendTransform = function(e, i, n, r, o, s, a, h, c) {
			if (o % 360) {
				var u = t.NumberUtils.cos(o);
				o = t.NumberUtils.sin(o)
			} else u = 1, o = 0;
			s || a ? (this.append(t.NumberUtils.cos(a), t.NumberUtils.sin(a), -t.NumberUtils.sin(s), t.NumberUtils.cos(s), e, i), this.append(u * n, o * n, -o * r, u * r, 0, 0)) : this.append(u * n, o * n, -o * r, u * r, e, i);
			if (h || c) this.tx -= h * this.a + c * this.c, this.ty -= h * this.b + c * this.d;
			return this
		};
		i.prototype.rotate = function(t) {
			var e = Math.cos(t);
			t = Math.sin(t);
			var i = this.a,
				n = this.c,
				r = this.tx;
			this.a = i * e - this.b * t;
			this.b = i * t + this.b * e;
			this.c = n * e - this.d * t;
			this.d = n * t + this.d * e;
			this.tx = r * e - this.ty * t;
			this.ty = r * t + this.ty * e;
			return this
		};
		i.prototype.skew = function(e, i) {
			this.append(t.NumberUtils.cos(i), t.NumberUtils.sin(i), -t.NumberUtils.sin(e), t.NumberUtils.cos(e), 0, 0);
			return this
		};
		i.prototype.scale = function(t, e) {
			this.a *= t;
			this.d *= e;
			this.c *= t;
			this.b *= e;
			this.tx *= t;
			this.ty *= e;
			return this
		};
		i.prototype.translate = function(t, e) {
			this.tx += t;
			this.ty += e;
			return this
		};
		i.prototype.identity = function() {
			this.a = this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this
		};
		i.prototype.identityMatrix = function(t) {
			this.a = t.a;
			this.b = t.b;
			this.c = t.c;
			this.d = t.d;
			this.tx = t.tx;
			this.ty = t.ty;
			return this
		};
		i.prototype.invert = function() {
			var t = this.a,
				e = this.b,
				i = this.c,
				n = this.d,
				r = this.tx,
				o = t * n - e * i;
			this.a = n / o;
			this.b = -e / o;
			this.c = -i / o;
			this.d = t / o;
			this.tx = (i * this.ty - n * r) / o;
			this.ty = -(t * this.ty - e * r) / o;
			return this
		};
		i.transformCoords = function(e, i, n) {
			var r = t.Point.identity;
			r.x = e.a * i + e.c * n + e.tx;
			r.y = e.d * n + e.b * i + e.ty;
			return r
		};
		i.prototype.toArray = function(t) {
			this.array || (this.array = new Float32Array(9));
			t ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
			this.array[8] = 1;
			return this.array
		};
		i.identity = new i;
		i.DEG_TO_RAD = Math.PI / 180;
		return i
	}(t.HashObject);
	t.Matrix = e;
	e.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e, i) {
			void 0 === e && (e = 0);
			void 0 === i && (i = 0);
			t.call(this);
			this.x = e;
			this.y = i
		}
		__extends(e, t);
		e.prototype.clone = function() {
			return new e(this.x, this.y)
		};
		e.prototype.equals = function(t) {
			return this.x == t.x && this.y == t.y
		};
		e.distance = function(t, e) {
			return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
		};
		e.identity = new e(0, 0);
		return e
	}(t.HashObject);
	t.Point = e;
	e.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e, i, n, r) {
			void 0 === e && (e = 0);
			void 0 === i && (i = 0);
			void 0 === n && (n = 0);
			void 0 === r && (r = 0);
			t.call(this);
			this.x = e;
			this.y = i;
			this.width = n;
			this.height = r
		}
		__extends(e, t);
		Object.defineProperty(e.prototype, "right", {
			get: function() {
				return this.x + this.width
			},
			set: function(t) {
				this.width = t - this.x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(e.prototype, "bottom", {
			get: function() {
				return this.y + this.height
			},
			set: function(t) {
				this.height = t - this.y
			},
			enumerable: !0,
			configurable: !0
		});
		e.prototype.initialize = function(t, e, i, n) {
			this.x = t;
			this.y = e;
			this.width = i;
			this.height = n;
			return this
		};
		e.prototype.contains = function(t, e) {
			return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e
		};
		e.prototype.intersects = function(t) {
			var e = t.right,
				i = t.bottom,
				n = this.right,
				r = this.bottom;
			return this.contains(t.x, t.y) || this.contains(t.x, i) || this.contains(e, t.y) || this.contains(e, i) || t.contains(this.x, this.y) || t.contains(this.x, r) || t.contains(n, this.y) || t.contains(n, r) ? !0 : !1
		};
		e.prototype.clone = function() {
			return new e(this.x, this.y, this.width, this.height)
		};
		e.prototype.containsPoint = function(t) {
			return this.x < t.x && this.x + this.width > t.x && this.y < t.y && this.y + this.height > t.y ? !0 : !1
		};
		e.identity = new e(0, 0, 0, 0);
		return e
	}(t.HashObject);
	t.Rectangle = e;
	e.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function e() {}
		e.fatal = function(e, i) {
			void 0 === i && (i = null);
			t.Logger.traceToConsole("Fatal", e, i);
			throw Error(t.Logger.getTraceCode("Fatal", e, i))
		};
		e.info = function(e, i) {
			void 0 === i && (i = null);
			t.Logger.traceToConsole("Info", e, i)
		};
		e.warning = function(e, i) {
			void 0 === i && (i = null);
			t.Logger.traceToConsole("Warning", e, i)
		};
		e.traceToConsole = function(e, i, n) {
			console.log(t.Logger.getTraceCode(e, i, n))
		};
		e.getTraceCode = function(t, e, i) {
			return "[" + t + "]" + e + ":" + (null == i ? "" : i)
		};
		return e
	}();
	t.Logger = e;
	e.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(i, e);
		i.getInstance = function() {
			i._instance || (i._instance = new i);
			return i._instance
		};
		i.prototype.parserXML = function(e) {
			for (var i = 0;
				"\n" == e.charAt(i) || "	" == e.charAt(i) || "\r" == e.charAt(i) || " " == e.charAt(i);) i++;
			0 != i && (e = e.substring(i, e.length));
			this._isSupportDOMParser ? i = this._parser.parseFromString(e, "text/xml") : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e));
			null == i && t.Logger.info("xml not found!");
			return i
		};
		i._instance = null;
		return i
	}(t.HashObject);
	t.SAXParser = e;
	e.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			this._stageHeight = this._stageWidth = this._offSetY = 0
		}
		__extends(i, e);
		i.getInstance = function() {
			null == i.instance && (n.initialize(), i.instance = new i);
			return i.instance
		};
		i.prototype.setDesignSize = function(e, i, n) {
			this._designWidth = e;
			this._designHeight = i;
			n && (t.Logger.warning("该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级"), this._setResolutionPolicy(n))
		};
		i.prototype._setResolutionPolicy = function(t) {
			this._resolutionPolicy = t;
			t.init(this);
			t._apply(this, this._designWidth, this._designHeight)
		};
		i.prototype.getScaleX = function() {
			return this._scaleX
		};
		i.prototype.getScaleY = function() {
			return this._scaleY
		};
		i.prototype.getOffSetY = function() {
			return this._offSetY
		};
		i.canvas_name = "egretCanvas";
		i.canvas_div_name = "gameDiv";
		return i
	}(t.HashObject);
	t.StageDelegate = e;
	e.prototype.__class__ = "egret.StageDelegate";
	var i = function() {
		function t(t, e) {
			this._containerStrategy = t;
			this._contentStrategy = e
		}
		t.prototype.init = function(t) {
			this._containerStrategy.init(t);
			this._contentStrategy.init(t)
		};
		t.prototype._apply = function(t, e, i) {
			this._containerStrategy._apply(t, e, i);
			this._contentStrategy._apply(t, e, i)
		};
		return t
	}();
	t.ResolutionPolicy = i;
	i.prototype.__class__ = "egret.ResolutionPolicy";
	var n = function() {
		function t() {}
		t.initialize = function() {
			t.EQUAL_TO_FRAME = new r
		};
		t.prototype.init = function(t) {};
		t.prototype._apply = function(t, e, i) {};
		t.prototype._setupContainer = function() {
			var t = document.body,
				e;
			t && (e = t.style) && (e.paddingTop = e.paddingTop || "0px", e.paddingRight = e.paddingRight || "0px", e.paddingBottom = e.paddingBottom || "0px", e.paddingLeft = e.paddingLeft || "0px", e.borderTop = e.borderTop || "0px", e.borderRight = e.borderRight || "0px", e.borderBottom = e.borderBottom || "0px", e.borderLeft = e.borderLeft || "0px", e.marginTop = e.marginTop || "0px", e.marginRight = e.marginRight || "0px", e.marginBottom = e.marginBottom || "0px", e.marginLeft = e.marginLeft || "0px")
		};
		return t
	}();
	t.ContainerStrategy = n;
	n.prototype.__class__ = "egret.ContainerStrategy";
	var r = function(t) {
		function e() {
			t.apply(this, arguments)
		}
		__extends(e, t);
		e.prototype._apply = function(t) {
			this._setupContainer()
		};
		return e
	}(n);
	t.EqualToFrame = r;
	r.prototype.__class__ = "egret.EqualToFrame";
	i = function() {
		function i() {}
		i.prototype.init = function(t) {};
		i.prototype._apply = function(t, e, i) {};
		i.prototype.setEgretSize = function(i, n, r, o, s, a) {
			void 0 === a && (a = 0);
			t.StageDelegate.getInstance()._stageWidth = Math.round(i);
			t.StageDelegate.getInstance()._stageHeight = Math.round(n);
			i = document.getElementById(e.canvas_div_name);
			i.style.width = r + "px";
			i.style.height = o + "px";
			i.style.top = a + "px"
		};
		i.prototype._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		i.prototype._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return i
	}();
	t.ContentStrategy = i;
	i.prototype.__class__ = "egret.ContentStrategy";
	var o = function(t) {
		function e(e) {
			void 0 === e && (e = 0);
			t.call(this);
			this.minWidth = e
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			e = this._getClientWidth();
			var n = this._getClientHeight(),
				r = n / i,
				o = e / r,
				s = 1;
			0 != this.minWidth && (s = Math.min(1, o / this.minWidth));
			this.setEgretSize(o / s, i, e, n * s);
			t._scaleX = r * s;
			t._scaleY = r * s
		};
		return e
	}(i);
	t.FixedHeight = o;
	o.prototype.__class__ = "egret.FixedHeight";
	o = function(t) {
		function e(e) {
			void 0 === e && (e = 0);
			t.call(this);
			this.minHeight = e
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			i = this._getClientWidth();
			var n = this._getClientHeight(),
				r = i / e,
				o = n / r,
				s = 1;
			0 != this.minHeight && (s = Math.min(1, o / this.minHeight));
			this.setEgretSize(e, o / s, i * s, n, i * (1 - s) / 2);
			t._scaleX = r * s;
			t._scaleY = r * s
		};
		return e
	}(i);
	t.FixedWidth = o;
	o.prototype.__class__ = "egret.FixedWidth";
	o = function(t) {
		function e(e, i) {
			t.call(this);
			this.width = e;
			this.height = i
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			i = this.width;
			var n = this.height,
				r = i / e;
			this.setEgretSize(e, n / r, i, n);
			t._scaleX = r;
			t._scaleY = r
		};
		return e
	}(i);
	t.FixedSize = o;
	o.prototype.__class__ = "egret.FixedSize";
	o = function(t) {
		function e() {
			t.call(this)
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			this.setEgretSize(e, i, e, i, Math.floor((e - e) / 2));
			t._scaleX = 1;
			t._scaleY = 1
		};
		return e
	}(i);
	t.NoScale = o;
	o.prototype.__class__ = "egret.NoScale";
	o = function(t) {
		function e() {
			t.call(this)
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			var n = this._getClientWidth(),
				r = this._getClientHeight(),
				o = n,
				s = r,
				a = o / e < s / i ? o / e : s / i,
				o = e * a,
				s = i * a,
				n = Math.floor((n - o) / 2);
			t._offSetY = Math.floor((r - s) / 2);
			this.setEgretSize(e, i / 1, 1 * o, s, n, t._offSetY);
			t._scaleX = 1 * a;
			t._scaleY = 1 * a
		};
		return e
	}(i);
	t.ShowAll = o;
	o.prototype.__class__ = "egret.ShowAll";
	i = function(t) {
		function e() {
			t.call(this)
		}
		__extends(e, t);
		e.prototype._apply = function(t, e, i) {
			var n = this._getClientWidth(),
				r = this._getClientHeight(),
				n = n / e,
				r = r / i;
			this.setEgretSize(e, i, e * n, i * r);
			t._scaleX = n;
			t._scaleY = r
		};
		return e
	}(i);
	t.FullScreen = i;
	i.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(i, e);
		i.getInstance = function() {
			null == i.instance && (i.instance = new i);
			return i.instance
		};
		i.prototype.addDrawArea = function(t) {
			this._drawAreaList.push(t)
		};
		i.prototype.clearDrawArea = function() {
			this._drawAreaList = []
		};
		i.prototype.drawImage = function(e, i, n, r, o, s, a, h, c, u, l) {
			void 0 === l && (l = void 0);
			a = a || 0;
			h = h || 0;
			var p = i._texture_to_render;
			if (null != p && 0 != s && 0 != o && 0 != c && 0 != u) {
				var _ = t.MainContext.instance.rendererContext.texture_scale_factor;
				o /= _;
				s /= _;
				if (0 != this._drawAreaList.length && t.MainContext.instance.rendererContext._cacheCanvasContext) {
					_ = t.DisplayObject.getTransformBounds(i._getSize(t.Rectangle.identity), i._worldTransform);
					i._worldBounds.initialize(_.x, _.y, _.width, _.height);
					_ = this._originalData;
					_.sourceX = n;
					_.sourceY = r;
					_.sourceWidth = o;
					_.sourceHeight = s;
					_.destX = a;
					_.destY = h;
					_.destWidth = c;
					_.destHeight = u;
					for (var d = this.getDrawAreaList(), f = 0; f < d.length; f++)
						if (!this.ignoreRender(i, d[f], _.destX, _.destY)) {
							e.drawImage(p, n, r, o, s, a, h, c, u, l);
							break
						}
				} else e.drawImage(p, n, r, o, s, a, h, c, u, l)
			}
		};
		i.prototype.ignoreRender = function(t, e, i, n) {
			var r = t._worldBounds;
			i *= t._worldTransform.a;
			n *= t._worldTransform.d;
			return r.x + r.width + i <= e.x || r.x + i >= e.x + e.width || r.y + r.height + n <= e.y || r.y + n >= e.y + e.height ? !0 : !1
		};
		i.prototype.getDrawAreaList = function() {
			var e;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new t.Rectangle(0, 0, t.MainContext.instance.stage.stageWidth, t.MainContext.instance.stage.stageHeight)], t.MainContext.instance.stage.addEventListener(t.Event.RESIZE, this.onResize, this)), e = this._defaultDrawAreaList) : e = this._drawAreaList;
			return e
		};
		i.prototype.onResize = function() {
			t.MainContext.instance.stage.removeEventListener(t.Event.RESIZE, this.onResize, this);
			this._defaultDrawAreaList = null
		};
		return i
	}(t.HashObject);
	t.RenderFilter = e;
	e.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function e() {}
		e.mapClass = function(t, e, i) {
			void 0 === i && (i = "");
			t = this.getKey(t) + "#" + i;
			this.mapClassDic[t] = e
		};
		e.getKey = function(e) {
			return "string" == typeof e ? e : t.getQualifiedClassName(e)
		};
		e.mapValue = function(t, e, i) {
			void 0 === i && (i = "");
			t = this.getKey(t) + "#" + i;
			this.mapValueDic[t] = e
		};
		e.hasMapRule = function(t, e) {
			void 0 === e && (e = "");
			var i = this.getKey(t) + "#" + e;
			return this.mapValueDic[i] || this.mapClassDic[i] ? !0 : !1
		};
		e.getInstance = function(t, e) {
			void 0 === e && (e = "");
			var i = this.getKey(t) + "#" + e;
			if (this.mapValueDic[i]) return this.mapValueDic[i];
			var n = this.mapClassDic[i];
			if (n) return n = new n, this.mapValueDic[i] = n, delete this.mapClassDic[i], n;
			throw Error("调用了未配置的注入规则:" + i + "。 请先在项目初始化里配置指定的注入规则，再调用对应单例。")
		};
		e.mapClassDic = {};
		e.mapValueDic = {};
		return e
	}();
	t.Injector = e;
	e.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.NORMAL = "normal";
		t.ADD = "add";
		return t
	}();
	t.BlendMode = e;
	e.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
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
			this.worldAlpha = 1;
			this._rectH = this._rectW = 0;
			this._stage = null;
			this._cacheDirty = this._cacheAsBitmap = !1;
			this._colorTransform = null;
			this._worldTransform = new t.Matrix;
			this._worldBounds = new t.Rectangle(0, 0, 0, 0);
			this._cacheBounds = new t.Rectangle(0, 0, 0, 0)
		}
		__extends(i, e);
		i.prototype._setDirty = function() {
			this._normalDirty = !0
		};
		i.prototype.getDirty = function() {
			return this._normalDirty || this._sizeDirty
		};
		i.prototype._setParentSizeDirty = function() {
			var t = this._parent;
			!t || t._hasWidthSet || t._hasHeightSet || t._setSizeDirty()
		};
		i.prototype._setSizeDirty = function() {
			this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
		};
		i.prototype._clearDirty = function() {
			this._normalDirty = !1
		};
		i.prototype._clearSizeDirty = function() {
			this._sizeDirty = !1
		};
		Object.defineProperty(i.prototype, "parent", {
			get: function() {
				return this._parent
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._parentChanged = function(t) {
			this._parent = t
		};
		Object.defineProperty(i.prototype, "x", {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._setX(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setX = function(e) {
			t.NumberUtils.isNumber(e) && this._x != e && (this._x = e, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(i.prototype, "y", {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._setY(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setY = function(e) {
			t.NumberUtils.isNumber(e) && this._y != e && (this._y = e, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(i.prototype, "scaleX", {
			get: function() {
				return this._scaleX
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._scaleX != e && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "scaleY", {
			get: function() {
				return this._scaleY
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._scaleY != e && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "anchorOffsetX", {
			get: function() {
				return this._anchorOffsetX
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._anchorOffsetX != e && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "anchorOffsetY", {
			get: function() {
				return this._anchorOffsetY
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._anchorOffsetY != e && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "anchorX", {
			get: function() {
				return this._anchorX
			},
			set: function(t) {
				this._setAnchorX(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setAnchorX = function(e) {
			t.NumberUtils.isNumber(e) && this._anchorX != e && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(i.prototype, "anchorY", {
			get: function() {
				return this._anchorY
			},
			set: function(t) {
				this._setAnchorY(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setAnchorY = function(e) {
			t.NumberUtils.isNumber(e) && this._anchorY != e && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(i.prototype, "visible", {
			get: function() {
				return this._visible
			},
			set: function(t) {
				this._setVisible(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setVisible = function(t) {
			this._visible != t && (this._visible = t, this._setSizeDirty())
		};
		Object.defineProperty(i.prototype, "rotation", {
			get: function() {
				return this._rotation
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._rotation != e && (this._rotation = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "alpha", {
			get: function() {
				return this._alpha
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._alpha != e && (this._alpha = e, this._setDirty(), this._setCacheDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "skewX", {
			get: function() {
				return this._skewX
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._skewX != e && (this._skewX = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "skewY", {
			get: function() {
				return this._skewY
			},
			set: function(e) {
				t.NumberUtils.isNumber(e) && this._skewY != e && (this._skewY = e, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "touchEnabled", {
			get: function() {
				return this._touchEnabled
			},
			set: function(t) {
				this._setTouchEnabled(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setTouchEnabled = function(t) {
			this._touchEnabled = t
		};
		Object.defineProperty(i.prototype, "scrollRect", {
			get: function() {
				return this._scrollRect
			},
			set: function(t) {
				this._setScrollRect(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setScrollRect = function(t) {
			this._scrollRect = t;
			this._setSizeDirty()
		};
		Object.defineProperty(i.prototype, "measuredWidth", {
			get: function() {
				return this._measureBounds().width
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "measuredHeight", {
			get: function() {
				return this._measureBounds().height
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "explicitWidth", {
			get: function() {
				return this._explicitWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "explicitHeight", {
			get: function() {
				return this._explicitHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "width", {
			get: function() {
				return this._getSize(t.Rectangle.identity).width
			},
			set: function(t) {
				this._setWidth(t)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "height", {
			get: function() {
				return this._getSize(t.Rectangle.identity).height
			},
			set: function(t) {
				this._setHeight(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setWidth = function(e) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitWidth = e;
			this._hasWidthSet = t.NumberUtils.isNumber(e)
		};
		i.prototype._setHeight = function(e) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._explicitHeight = e;
			this._hasHeightSet = t.NumberUtils.isNumber(e)
		};
		i.prototype._draw = function(t) {
			if (this._visible && !this.drawCacheTexture(t)) {
				this._colorTransform && t.setGlobalColorTransform(this._colorTransform.matrix);
				t.setAlpha(this.worldAlpha, this.blendMode);
				t.setTransform(this._worldTransform);
				var e = this.mask || this._scrollRect;
				e && t.pushMask(e);
				this._render(t);
				e && t.popMask();
				this._colorTransform && t.setGlobalColorTransform(null)
			}
			this.destroyCacheBounds()
		};
		i.prototype.drawCacheTexture = function(e) {
			if (!1 == this._cacheAsBitmap) return !1;
			if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight)) this._cacheDirty = !this._makeBitmapCache();
			if (null == this._texture_to_render) return !1;
			var i = this._texture_to_render,
				n = i._offsetX,
				r = i._offsetY,
				o = i._textureWidth,
				i = i._textureHeight;
			this._updateTransform();
			e.setAlpha(this.worldAlpha, this.blendMode);
			e.setTransform(this._worldTransform);
			var s = t.MainContext.instance.rendererContext.texture_scale_factor;
			t.RenderFilter.getInstance().drawImage(e, this, 0, 0, o * s, i * s, n, r, o, i);
			return !0
		};
		i.prototype._updateTransform = function() {
			this._calculateWorldTransform()
		};
		i.prototype._calculateWorldTransform = function() {
			var t = this._worldTransform,
				e = this._parent;
			t.identityMatrix(e._worldTransform);
			this._getMatrix(t);
			var i = this._scrollRect;
			i && t.append(1, 0, 0, 1, -i.x, -i.y);
			this.worldAlpha = e.worldAlpha * this._alpha
		};
		i.prototype._render = function(t) {};
		i.prototype.getBounds = function(e, i) {
			void 0 === i && (i = !0);
			var n = this._measureBounds(),
				r = this._hasWidthSet ? this._explicitWidth : n.width,
				o = this._hasHeightSet ? this._explicitHeight : n.height;
			this._rectW = n.width;
			this._rectH = n.height;
			this._clearSizeDirty();
			var s = n.x,
				n = n.y,
				a = 0,
				h = 0;
			i && (0 != this._anchorX || 0 != this._anchorY ? (a = r * this._anchorX, h = o * this._anchorY) : (a = this._anchorOffsetX, h = this._anchorOffsetY));
			this._cacheBounds.initialize(s - a, n - h, r, o);
			r = this._cacheBounds;
			e || (e = new t.Rectangle);
			return e.initialize(r.x, r.y, r.width, r.height)
		};
		i.prototype.destroyCacheBounds = function() {
			this._cacheBounds.x = 0;
			this._cacheBounds.y = 0;
			this._cacheBounds.width = 0;
			this._cacheBounds.height = 0
		};
		i.prototype._getConcatenatedMatrix = function() {
			for (var e = i.identityMatrixForGetConcatenated.identity(), n = this; null != n;) {
				if (0 != n._anchorX || 0 != n._anchorY) {
					var r = n._getSize(t.Rectangle.identity);
					e.prependTransform(n._x, n._y, n._scaleX, n._scaleY, n._rotation, n._skewX, n._skewY, r.width * n._anchorX, r.height * n._anchorY)
				} else e.prependTransform(n._x, n._y, n._scaleX, n._scaleY, n._rotation, n._skewX, n._skewY, n._anchorOffsetX, n._anchorOffsetY);
				n._scrollRect && e.prepend(1, 0, 0, 1, -n._scrollRect.x, -n._scrollRect.y);
				n = n._parent
			}
			return e
		};
		i.prototype.localToGlobal = function(e, i, n) {
			void 0 === e && (e = 0);
			void 0 === i && (i = 0);
			var r = this._getConcatenatedMatrix();
			r.append(1, 0, 0, 1, e, i);
			n || (n = new t.Point);
			n.x = r.tx;
			n.y = r.ty;
			return n
		};
		i.prototype.globalToLocal = function(e, i, n) {
			void 0 === e && (e = 0);
			void 0 === i && (i = 0);
			var r = this._getConcatenatedMatrix();
			r.invert();
			r.append(1, 0, 0, 1, e, i);
			n || (n = new t.Point);
			n.x = r.tx;
			n.y = r.ty;
			return n
		};
		i.prototype.hitTest = function(e, i, n) {
			void 0 === n && (n = !1);
			if (!this._visible || !n && !this._touchEnabled) return null;
			n = this._getSize(t.Rectangle.identity);
			return 0 <= e && e < n.width && 0 <= i && i < n.height ? this.mask || this._scrollRect ? this._scrollRect && e > this._scrollRect.x && i > this._scrollRect.y && e < this._scrollRect.x + this._scrollRect.width && i < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= i && i < this.mask.y + this.mask.height ? this : null : this : null
		};
		i.prototype.hitTestPoint = function(e, i, n) {
			e = this.globalToLocal(e, i);
			return n ? (this._hitTestPointTexture || (this._hitTestPointTexture = new t.RenderTexture), n = this._hitTestPointTexture, n.drawToTexture(this), 0 != n.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
		};
		i.prototype._getMatrix = function(e) {
			e || (e = t.Matrix.identity.identity());
			var i, n;
			n = this._getOffsetPoint();
			i = n.x;
			n = n.y;
			var r = this.__hack_local_matrix;
			r ? (e.append(r.a, r.b, r.c, r.d, r.tx, r.ty), e.append(1, 0, 0, 1, -i, -n)) : e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, i, n);
			return e
		};
		i.prototype._getSize = function(t) {
			return this._hasHeightSet && this._hasWidthSet ? t.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(t)
		};
		i.prototype._measureSize = function(t) {
			this._sizeDirty ? (t = this._measureBounds(), this._rectW = t.width, this._rectH = t.height, this._clearSizeDirty()) : (t.width = this._rectW, t.height = this._rectH);
			t.x = 0;
			t.y = 0;
			return t
		};
		i.prototype._measureBounds = function() {
			return t.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		i.prototype._getOffsetPoint = function() {
			var e = this._anchorOffsetX,
				i = this._anchorOffsetY;
			if (0 != this._anchorX || 0 != this._anchorY) i = this._getSize(t.Rectangle.identity), e = this._anchorX * i.width, i = this._anchorY * i.height;
			var n = t.Point.identity;
			n.x = e;
			n.y = i;
			return n
		};
		i.prototype._onAddToStage = function() {
			this._stage = t.MainContext.instance.stage;
			t.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		i.prototype._onRemoveFromStage = function() {
			t.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(i.prototype, "stage", {
			get: function() {
				return this._stage
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.addEventListener = function(n, r, o, s, a) {
			void 0 === s && (s = !1);
			void 0 === a && (a = 0);
			e.prototype.addEventListener.call(this, n, r, o, s, a);
			((s = n == t.Event.ENTER_FRAME) || n == t.Event.RENDER) && this._insertEventBin(s ? i._enterFrameCallBackList : i._renderCallBackList, r, o, a, this)
		};
		i.prototype.removeEventListener = function(n, r, o, s) {
			void 0 === s && (s = !1);
			e.prototype.removeEventListener.call(this, n, r, o, s);
			((s = n == t.Event.ENTER_FRAME) || n == t.Event.RENDER) && this._removeEventBin(s ? i._enterFrameCallBackList : i._renderCallBackList, r, o, this)
		};
		i.prototype.dispatchEvent = function(t) {
			if (!t._bubbles) return e.prototype.dispatchEvent.call(this, t);
			for (var i = [], n = this; n;) i.push(n), n = n._parent;
			t._reset();
			this._dispatchPropagationEvent(t, i);
			return !t._isDefaultPrevented
		};
		i.prototype._dispatchPropagationEvent = function(t, e, i) {
			i = e.length;
			for (var n = 1, r = i - 1; 0 <= r; r--) {
				var o = e[r];
				t._currentTarget = o;
				t._target = this;
				t._eventPhase = n;
				o._notifyListener(t);
				if (t._isPropagationStopped || t._isPropagationImmediateStopped) return
			}
			o = e[0];
			t._currentTarget = o;
			t._target = this;
			t._eventPhase = 2;
			o._notifyListener(t);
			if (!t._isPropagationStopped && !t._isPropagationImmediateStopped)
				for (n = 3, r = 1; r < i && (o = e[r], t._currentTarget = o, t._target = this, t._eventPhase = n, o._notifyListener(t), !t._isPropagationStopped && !t._isPropagationImmediateStopped); r++);
		};
		i.prototype.willTrigger = function(t) {
			for (var e = this; e;) {
				if (e.hasEventListener(t)) return !0;
				e = e._parent
			}
			return !1
		};
		Object.defineProperty(i.prototype, "cacheAsBitmap", {
			get: function() {
				return this._cacheAsBitmap
			},
			set: function(e) {
				(this._cacheAsBitmap = e) ? t.callLater(this._makeBitmapCache, this): this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._makeBitmapCache = function() {
			this.renderTexture || (this.renderTexture = new t.RenderTexture);
			var e = this.renderTexture.drawToTexture(this);
			this._texture_to_render = e ? this.renderTexture : null;
			return e
		};
		i.prototype._setCacheDirty = function(t) {
			void 0 === t && (t = !0);
			this._cacheDirty = t
		};
		i.getTransformBounds = function(t, e) {
			var i = t.x,
				n = t.y,
				r = t.width,
				o = t.height;
			(i || n) && e.appendTransform(0, 0, 1, 1, 0, 0, 0, -i, -n);
			var s = r * e.a,
				r = r * e.b,
				a = o * e.c,
				o = o * e.d,
				h = e.tx,
				c = e.ty,
				u = h,
				l = h,
				p = c,
				_ = c;
			(i = s + h) < u ? u = i : i > l && (l = i);
			(i = s + a + h) < u ? u = i : i > l && (l = i);
			(i = a + h) < u ? u = i : i > l && (l = i);
			(n = r + c) < p ? p = n : n > _ && (_ = n);
			(n = r + o + c) < p ? p = n : n > _ && (_ = n);
			(n = o + c) < p ? p = n : n > _ && (_ = n);
			return t.initialize(u, p, l - u, _ - p)
		};
		Object.defineProperty(i.prototype, "colorTransform", {
			get: function() {
				return this._colorTransform
			},
			set: function(t) {
				this._colorTransform = t
			},
			enumerable: !0,
			configurable: !0
		});
		i.identityMatrixForGetConcatenated = new t.Matrix;
		i._enterFrameCallBackList = [];
		i._renderCallBackList = [];
		return i
	}(t.EventDispatcher);
	t.DisplayObject = e;
	e.prototype.__class__ = "egret.DisplayObject";
	e = function() {
		function t() {
			this.matrix = null
		}
		t.prototype.updateColor = function(t, e, i, n, r, o, s, a) {};
		return t
	}();
	t.ColorTransform = e;
	e.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._touchChildren = !0;
			this._children = []
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(t) {
				this._touchChildren = t
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "numChildren", {
			get: function() {
				return this._children.length
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.setChildIndex = function(t, e) {
			this.doSetChildIndex(t, e)
		};
		i.prototype.doSetChildIndex = function(e, i) {
			var n = this._children.indexOf(e);
			0 > n && t.Logger.fatal("child不在当前容器内");
			this._children.splice(n, 1);
			0 > i || this._children.length <= i ? this._children.push(e) : this._children.splice(i, 0, e)
		};
		i.prototype.addChild = function(t) {
			var e = this._children.length;
			t._parent == this && e--;
			return this._doAddChild(t, e)
		};
		i.prototype.addChildAt = function(t, e) {
			return this._doAddChild(t, e)
		};
		i.prototype._doAddChild = function(e, n, r) {
			void 0 === r && (r = !0);
			if (e == this) return e;
			if (0 > n || n > this._children.length) return t.Logger.fatal("提供的索引超出范围"), e;
			var o = e._parent;
			if (o == this) return this.doSetChildIndex(e, n), e;
			o && (n = o._children.indexOf(e), 0 <= n && o._doRemoveChild(n));
			this._children.splice(n, 0, e);
			e._parentChanged(this);
			r && e.dispatchEventWith(t.Event.ADDED, !0);
			if (this._stage)
				for (e._onAddToStage(), n = i.__EVENT__ADD_TO_STAGE_LIST; 0 < n.length;) n.shift().dispatchEventWith(t.Event.ADDED_TO_STAGE);
			e._setDirty();
			this._setSizeDirty();
			return e
		};
		i.prototype.removeChild = function(e) {
			e = this._children.indexOf(e);
			if (0 <= e) return this._doRemoveChild(e);
			t.Logger.fatal("child未被addChild到该parent");
			return null
		};
		i.prototype.removeChildAt = function(e) {
			if (0 <= e && e < this._children.length) return this._doRemoveChild(e);
			t.Logger.fatal("提供的索引超出范围");
			return null
		};
		i.prototype._doRemoveChild = function(e, n) {
			void 0 === n && (n = !0);
			var r = this._children,
				o = r[e];
			n && o.dispatchEventWith(t.Event.REMOVED, !0);
			if (this._stage) {
				o._onRemoveFromStage();
				for (var s = i.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < s.length;) {
					var a = s.shift();
					a.dispatchEventWith(t.Event.REMOVED_FROM_STAGE);
					a._stage = null
				}
			}
			o._parentChanged(null);
			r.splice(e, 1);
			this._setSizeDirty();
			return o
		};
		i.prototype.getChildAt = function(e) {
			if (0 <= e && e < this._children.length) return this._children[e];
			t.Logger.fatal("提供的索引超出范围");
			return null
		};
		i.prototype.contains = function(t) {
			for (; t;) {
				if (t == this) return !0;
				t = t._parent
			}
			return !1
		};
		i.prototype.swapChildrenAt = function(e, i) {
			0 <= e && e < this._children.length && 0 <= i && i < this._children.length ? this._swapChildrenAt(e, i) : t.Logger.fatal("提供的索引超出范围")
		};
		i.prototype.swapChildren = function(e, i) {
			var n = this._children.indexOf(e),
				r = this._children.indexOf(i); - 1 == n || -1 == r ? t.Logger.fatal("child未被addChild到该parent") : this._swapChildrenAt(n, r)
		};
		i.prototype._swapChildrenAt = function(t, e) {
			if (t != e) {
				var i = this._children,
					n = i[t];
				i[t] = i[e];
				i[e] = n
			}
		};
		i.prototype.getChildIndex = function(t) {
			return this._children.indexOf(t)
		};
		i.prototype.removeChildren = function() {
			for (var t = this._children.length - 1; 0 <= t; t--) this._doRemoveChild(t)
		};
		i.prototype._updateTransform = function() {
			if (this._visible) {
				e.prototype._updateTransform.call(this);
				for (var t = 0, i = this._children.length; t < i; t++) this._children[t]._updateTransform()
			}
		};
		i.prototype._render = function(t) {
			for (var e = 0, i = this._children.length; e < i; e++) this._children[e]._draw(t)
		};
		i.prototype._measureBounds = function() {
			for (var e = 0, i = 0, n = 0, r = 0, o = this._children.length, s = 0; s < o; s++) {
				var a = this._children[s];
				if (a._visible) {
					var h = a.getBounds(t.Rectangle.identity, !1),
						c = h.x,
						u = h.y,
						l = h.width,
						h = h.height,
						a = a._getMatrix(),
						a = t.DisplayObject.getTransformBounds(t.Rectangle.identity.initialize(c, u, l, h), a),
						c = a.x,
						u = a.y,
						l = a.width + a.x,
						a = a.height + a.y;
					if (c < e || 0 == s) e = c;
					if (l > i || 0 == s) i = l;
					if (u < n || 0 == s) n = u;
					if (a > r || 0 == s) r = a
				}
			}
			return t.Rectangle.identity.initialize(e, n, i - e, r - n)
		};
		i.prototype.hitTest = function(i, n, r) {
			void 0 === r && (r = !1);
			var o;
			if (!this._visible) return null;
			if (this._scrollRect) {
				if (i < this._scrollRect.x || n < this._scrollRect.y || i > this._scrollRect.x + this._scrollRect.width || n > this._scrollRect.y + this._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > i || i > this.mask.x + this.mask.width || this.mask.y > n || n > this.mask.y + this.mask.height)) return null;
			for (var s = this._children, a = this._touchChildren, h = s.length - 1; 0 <= h; h--) {
				var c = s[h],
					u = c._getMatrix(),
					l = c._scrollRect;
				l && u.append(1, 0, 0, 1, -l.x, -l.y);
				u.invert();
				u = t.Matrix.transformCoords(u, i, n);
				if (c = c.hitTest(u.x, u.y, !0)) {
					if (!a) return this;
					if (c._touchEnabled && a) return c;
					o = this
				}
			}
			return o ? o : this._texture_to_render || this.graphics ? e.prototype.hitTest.call(this, i, n, r) : null
		};
		i.prototype._onAddToStage = function() {
			e.prototype._onAddToStage.call(this);
			for (var t = this._children.length, i = 0; i < t; i++) this._children[i]._onAddToStage()
		};
		i.prototype._onRemoveFromStage = function() {
			e.prototype._onRemoveFromStage.call(this);
			for (var t = this._children.length, i = 0; i < t; i++) this._children[i]._onRemoveFromStage()
		};
		i.prototype.getChildByName = function(t) {
			for (var e = this._children, i = e.length, n, r = 0; r < i; r++)
				if (n = e[r], n.name == t) return n;
			return null
		};
		i.__EVENT__ADD_TO_STAGE_LIST = [];
		i.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return i
	}(t.DisplayObject);
	t.DisplayObjectContainer = e;
	e.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i) {
			void 0 === t && (t = 480);
			void 0 === i && (i = 800);
			e.call(this);
			this.touchEnabled = !0;
			this._stage = this;
			this._stageWidth = t;
			this._stageHeight = i
		}
		__extends(i, e);
		i.prototype.invalidate = function() {
			i._invalidateRenderFlag = !0
		};
		Object.defineProperty(i.prototype, "scaleMode", {
			get: function() {
				return this._scaleMode
			},
			set: function(t) {
				this._scaleMode != t && (this._scaleMode = t, this.setResolutionPolicy())
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.changeSize = function() {
			this.setResolutionPolicy();
			this.dispatchEventWith(t.Event.RESIZE)
		};
		i.prototype.setResolutionPolicy = function() {
			var e = {};
			e[t.StageScaleMode.NO_SCALE] = new t.NoScale;
			e[t.StageScaleMode.SHOW_ALL] = new t.ShowAll;
			e[t.StageScaleMode.NO_BORDER] = new t.FixedWidth;
			e[t.StageScaleMode.EXACT_FIT] = new t.FullScreen;
			e = e[this._scaleMode];
			if (!e) throw Error("使用了尚未实现的ScaleMode");
			var i = new t.EqualToFrame,
				e = new t.ResolutionPolicy(i, e);
			t.StageDelegate.getInstance()._setResolutionPolicy(e);
			this._stageWidth = t.StageDelegate.getInstance()._stageWidth;
			this._stageHeight = t.StageDelegate.getInstance()._stageHeight
		};
		Object.defineProperty(i.prototype, "stageWidth", {
			get: function() {
				return this._stageWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "stageHeight", {
			get: function() {
				return this._stageHeight
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.hitTest = function(e, i, n) {
			if (!this._touchEnabled) return null;
			var r;
			if (!this._touchChildren) return this;
			n = this._children;
			for (var o = n.length - 1; 0 <= o; o--) {
				r = n[o];
				var s = r._getMatrix(),
					a = r._scrollRect;
				a && s.append(1, 0, 0, 1, -a.x, -a.y);
				s.invert();
				s = t.Matrix.transformCoords(s, e, i);
				if ((r = r.hitTest(s.x, s.y, !0)) && r._touchEnabled) return r
			}
			return this
		};
		i.prototype.getBounds = function(e) {
			e || (e = new t.Rectangle);
			return e.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		i.prototype._updateTransform = function() {
			for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._updateTransform()
		};
		Object.defineProperty(i.prototype, "focus", {
			get: function() {
				return null
			},
			enumerable: !0,
			configurable: !0
		});
		i._invalidateRenderFlag = !1;
		return i
	}(t.DisplayObjectContainer);
	t.Stage = e;
	e.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.NO_BORDER = "noBorder";
		t.NO_SCALE = "noScale";
		t.SHOW_ALL = "showAll";
		t.EXACT_FIT = "exactFit";
		return t
	}();
	t.StageScaleMode = e;
	e.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(i) {
			void 0 === i && (i = null);
			e.call(this);
			this._lastTouchPosition = new t.Point(0, 0);
			this._lastTouchTime = 0;
			this._lastTouchEvent = null;
			this._velocitys = [];
			this._content = null;
			this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
			this._scrollTop = this._scrollLeft = 0;
			this._vCanScroll = this._hCanScroll = !1;
			this.touchEnabled = !0;
			i && this.setContent(i)
		}
		__extends(i, e);
		i.prototype.setContent = function(t) {
			this._content !== t && (this.removeContent(), t && (this._content = t, e.prototype.addChild.call(this, t), this._addEvents()))
		};
		i.prototype.removeContent = function() {
			this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0));
			this._content = null
		};
		Object.defineProperty(i.prototype, "verticalScrollPolicy", {
			get: function() {
				return this._verticalScrollPolicy
			},
			set: function(t) {
				t != this._verticalScrollPolicy && (this._verticalScrollPolicy = t)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "horizontalScrollPolicy", {
			get: function() {
				return this._horizontalScrollPolicy
			},
			set: function(t) {
				t != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = t)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "scrollLeft", {
			get: function() {
				return this._scrollLeft
			},
			set: function(t) {
				t != this._scrollLeft && (this._scrollLeft = t, this._validatePosition(!1, !0), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "scrollTop", {
			get: function() {
				return this._scrollTop
			},
			set: function(t) {
				t != this._scrollTop && (this._scrollTop = t, this._validatePosition(!0, !1), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.setScrollPosition = function(t, e, i) {
			void 0 === i && (i = !1);
			if (!i || 0 != t || 0 != e)
				if (i || this._scrollTop != t || this._scrollLeft != e) {
					if (i) {
						i = this._isOnTheEdge(!0);
						var n = this._isOnTheEdge(!1);
						this._scrollTop += i ? t / 2 : t;
						this._scrollLeft += n ? e / 2 : e
					} else this._scrollTop = t, this._scrollLeft = e;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
		};
		i.prototype._isOnTheEdge = function(t) {
			void 0 === t && (t = !0);
			var e = this._scrollTop,
				i = this._scrollLeft;
			return t ? 0 > e || e > this.getMaxScrollTop() : 0 > i || i > this.getMaxScrollLeft()
		};
		i.prototype._validatePosition = function(t, e) {
			void 0 === t && (t = !1);
			void 0 === e && (e = !1);
			if (t) {
				var i = this.height,
					n = this._getContentHeight();
				this._scrollTop = Math.max(this._scrollTop, (0 - i) / 2);
				this._scrollTop = Math.min(this._scrollTop, n > i ? n - i / 2 : n / 2)
			}
			e && (i = this.width, n = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - i) / 2), this._scrollLeft = Math.min(this._scrollLeft, n > i ? n - i / 2 : n / 2))
		};
		i.prototype._setWidth = function(t) {
			this._explicitWidth != t && (e.prototype._setWidth.call(this, t), this._updateContentPosition())
		};
		i.prototype._setHeight = function(t) {
			this._explicitHeight != t && (e.prototype._setHeight.call(this, t), this._updateContentPosition())
		};
		i.prototype._updateContentPosition = function() {
			var e = this.getBounds(t.Rectangle.identity);
			this.scrollRect = new t.Rectangle(this._scrollLeft, this._scrollTop, e.width, e.height);
			this.dispatchEvent(new t.Event(t.Event.CHANGE))
		};
		i.prototype._checkScrollPolicy = function() {
			var t = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
			this._hCanScroll = t;
			var e = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
			this._vCanScroll = e;
			return t || e
		};
		i.prototype.__checkScrollPolicy = function(t, e, i) {
			return "on" == t ? !0 : "off" == t ? !1 : e > i
		};
		i.prototype._addEvents = function() {
			this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		i.prototype._removeEvents = function() {
			this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		i.prototype._onTouchBegin = function(e) {
			!e._isDefaultPrevented && this._checkScrollPolicy() && (t.Tween.removeTweens(this), this.stage.addEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
		};
		i.prototype._onTouchBeginCapture = function(e) {
			var n = this._checkScrollPolicy();
			if (n) {
				for (var r = e.target; r != this;) {
					if (r instanceof i && (n = r._checkScrollPolicy())) return;
					r = r.parent
				}
				e.stopPropagation();
				this.delayTouchBeginEvent = this.cloneTouchEvent(e);
				this.touchBeginTimer || (this.touchBeginTimer = new t.Timer(100, 1), this.touchBeginTimer.addEventListener(t.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
				this.touchBeginTimer.start();
				this._onTouchBegin(e)
			}
		};
		i.prototype._onTouchEndCapture = function(t) {
			this.delayTouchBeginEvent && this._onTouchBeginTimer()
		};
		i.prototype._onTouchBeginTimer = function() {
			this.touchBeginTimer.stop();
			var t = this.delayTouchBeginEvent;
			this.delayTouchBeginEvent = null;
			this.dispatchPropagationEvent(t)
		};
		i.prototype.dispatchPropagationEvent = function(t) {
			for (var e = [], i = t._target; i;) e.push(i), i = i.parent;
			for (var n = this._content, r = 1;; r += 2) {
				i = e[r];
				if (!i || i === n) break;
				e.unshift(i)
			}
			this._dispatchPropagationEvent(t, e)
		};
		i.prototype._dispatchPropagationEvent = function(t, e, i) {
			for (var n = e.length, r = 0; r < n; r++) {
				var o = e[r];
				t._currentTarget = o;
				t._target = this;
				t._eventPhase = r < i ? 1 : r == i ? 2 : 3;
				o._notifyListener(t);
				if (t._isPropagationStopped || t._isPropagationImmediateStopped) break
			}
		};
		i.prototype._onTouchMove = function(t) {
			if (this._lastTouchPosition.x != t.stageX || this._lastTouchPosition.y != t.stageY) {
				this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				this.touchChildren = !1;
				var e = this._getPointChange(t);
				this.setScrollPosition(e.y, e.x, !0);
				this._calcVelocitys(t);
				this._logTouchEvent(t)
			}
		};
		i.prototype._onTouchEnd = function(e) {
			this.touchChildren = !0;
			t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
			t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this);
			t.MainContext.instance.stage.removeEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
			this.removeEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this);
			this._moveAfterTouchEnd()
		};
		i.prototype._onEnterFrame = function(e) {
			e = t.getTimer();
			100 < e - this._lastTouchTime && 300 > e - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
		};
		i.prototype._logTouchEvent = function(e) {
			this._lastTouchPosition.x = e.stageX;
			this._lastTouchPosition.y = e.stageY;
			this._lastTouchEvent = this.cloneTouchEvent(e);
			this._lastTouchTime = t.getTimer()
		};
		i.prototype._getPointChange = function(t) {
			return {
				x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - t.stageX,
				y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - t.stageY
			}
		};
		i.prototype._calcVelocitys = function(e) {
			var i = t.getTimer();
			if (0 == this._lastTouchTime) this._lastTouchTime = i;
			else {
				var n = this._getPointChange(e),
					i = i - this._lastTouchTime;
				n.x /= i;
				n.y /= i;
				this._velocitys.push(n);
				5 < this._velocitys.length && this._velocitys.shift();
				this._lastTouchPosition.x = e.stageX;
				this._lastTouchPosition.y = e.stageY
			}
		};
		i.prototype._getContentWidth = function() {
			return this._content.explicitWidth || this._content.width
		};
		i.prototype._getContentHeight = function() {
			return this._content.explicitHeight || this._content.height
		};
		i.prototype.getMaxScrollLeft = function() {
			var t = this._getContentWidth() - this.width;
			return Math.max(0, t)
		};
		i.prototype.getMaxScrollTop = function() {
			var t = this._getContentHeight() - this.height;
			return Math.max(0, t)
		};
		i.prototype._moveAfterTouchEnd = function() {
			if (0 != this._velocitys.length) {
				for (var t = 0, e = 0, n = 0, r = 0; r < this._velocitys.length; r++) var o = this._velocitys[r],
					s = i.weight[r],
					t = t + o.x * s,
					e = e + o.y * s,
					n = n + s;
				this._velocitys.length = 0;
				t /= n;
				e /= n;
				o = Math.abs(t);
				n = Math.abs(e);
				s = this.getMaxScrollLeft();
				r = this.getMaxScrollTop();
				t = .02 < o ? this.getAnimationDatas(t, this._scrollLeft, s) : {
					position: this._scrollLeft,
					duration: 1
				};
				e = .02 < n ? this.getAnimationDatas(e, this._scrollTop, r) : {
					position: this._scrollTop,
					duration: 1
				};
				this.setScrollLeft(t.position, t.duration);
				this.setScrollTop(e.position, e.duration)
			}
		};
		i.prototype.setScrollTop = function(e, i) {
			void 0 === i && (i = 0);
			var n = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
			if (0 == i) return this.scrollTop = n, null;
			var r = t.Tween.get(this).to({
				scrollTop: e
			}, i, t.Ease.quartOut);
			n != e && r.to({
				scrollTop: n
			}, 300, t.Ease.quintOut)
		};
		i.prototype.setScrollLeft = function(e, i) {
			void 0 === i && (i = 0);
			var n = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
			if (0 == i) return this.scrollLeft = n, null;
			var r = t.Tween.get(this).to({
				scrollLeft: e
			}, i, t.Ease.quartOut);
			n != e && r.to({
				scrollLeft: n
			}, 300, t.Ease.quintOut)
		};
		i.prototype.getAnimationDatas = function(t, e, i) {
			var n = Math.abs(t),
				r = 0,
				o = e + 500 * t;
			if (0 > o || o > i)
				for (o = e; Infinity != Math.abs(t) && .02 < Math.abs(t);) o += t, t = 0 > o || o > i ? .998 * t * .95 : .998 * t, r++;
			else r = 500 * -Math.log(.02 / n);
			return {
				position: Math.min(i + 50, Math.max(o, -50)),
				duration: r
			}
		};
		i.prototype.cloneTouchEvent = function(e) {
			var i = new t.TouchEvent(e._type, e._bubbles, e.cancelable);
			i.touchPointID = e.touchPointID;
			i._stageX = e._stageX;
			i._stageY = e._stageY;
			i.ctrlKey = e.ctrlKey;
			i.altKey = e.altKey;
			i.shiftKey = e.shiftKey;
			i.touchDown = e.touchDown;
			i._isDefaultPrevented = !1;
			i._target = e._target;
			return i
		};
		i.prototype.throwNotSupportedError = function() {
			throw Error("此方法在ScrollView内不可用!")
		};
		i.prototype.addChild = function(t) {
			this.throwNotSupportedError();
			return null
		};
		i.prototype.addChildAt = function(t, e) {
			this.throwNotSupportedError();
			return null
		};
		i.prototype.removeChild = function(t) {
			this.throwNotSupportedError();
			return null
		};
		i.prototype.removeChildAt = function(t) {
			this.throwNotSupportedError();
			return null
		};
		i.prototype.setChildIndex = function(t, e) {
			this.throwNotSupportedError()
		};
		i.prototype.swapChildren = function(t, e) {
			this.throwNotSupportedError()
		};
		i.prototype.swapChildrenAt = function(t, e) {
			this.throwNotSupportedError()
		};
		i.prototype.hitTest = function(i, n, r) {
			void 0 === r && (r = !1);
			var o = e.prototype.hitTest.call(this, i, n, r);
			return o ? o : t.DisplayObject.prototype.hitTest.call(this, i, n, r)
		};
		i.weight = [1, 1.33, 1.66, 2, 2.33];
		return i
	}(t.DisplayObjectContainer);
	t.ScrollView = e;
	e.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.REPEAT = "repeat";
		t.SCALE = "scale";
		return t
	}();
	t.BitmapFillMode = e;
	e.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t) {
			e.call(this);
			this.debug = !1;
			this.debugColor = 16711680;
			this.scale9Grid = null;
			this.fillMode = "scale";
			t && (this._texture = t, this._setSizeDirty())
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "texture", {
			get: function() {
				return this._texture
			},
			set: function(t) {
				t != this._texture && (this._setSizeDirty(), this._texture = t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._render = function(t) {
			var e = this._texture;
			e ? (this._texture_to_render = e, i._drawBitmap(t, this._hasWidthSet ? this._explicitWidth : e._textureWidth, this._hasHeightSet ? this._explicitHeight : e._textureHeight, this)) : this._texture_to_render = null
		};
		i._drawBitmap = function(t, e, n, r) {
			var o = r._texture_to_render;
			if (o) {
				var s = o._textureWidth,
					a = o._textureHeight;
				if ("scale" == r.fillMode) {
					var h = r.scale9Grid || o.scale9Grid;
					if (h && s - h.width < e && a - h.height < n) i.drawScale9GridImage(t, r, h, e, n);
					else {
						var h = o._offsetX,
							c = o._offsetY,
							u = o._bitmapWidth || s,
							l = o._bitmapHeight || a;
						e /= s;
						h = Math.round(h * e);
						e = Math.round(u * e);
						n /= a;
						c = Math.round(c * n);
						n = Math.round(l * n);
						i.renderFilter.drawImage(t, r, o._bitmapX, o._bitmapY, u, l, h, c, e, n)
					}
				} else i.drawRepeatImage(t, r, e, n, r.fillMode)
			}
		};
		i.drawRepeatImage = function(e, i, n, r, o) {
			var s = i._texture_to_render;
			if (s) {
				var a = s._textureWidth,
					h = s._textureHeight,
					c = s._bitmapX,
					u = s._bitmapY,
					a = s._bitmapWidth || a,
					h = s._bitmapHeight || h,
					l = s._offsetX,
					s = s._offsetY;
				t.RenderFilter.getInstance().drawImage(e, i, c, u, a, h, l, s, n, r, o)
			}
		};
		i.drawScale9GridImage = function(e, i, n, r, o) {
			var s = i._texture_to_render;
			if (s && n) {
				var a = t.RenderFilter.getInstance(),
					h = s._textureWidth,
					c = s._textureHeight,
					u = s._bitmapX,
					l = s._bitmapY,
					p = s._bitmapWidth || h,
					_ = s._bitmapHeight || c,
					d = s._offsetX,
					f = s._offsetY,
					s = t.MainContext.instance.rendererContext.texture_scale_factor;
				n = t.Rectangle.identity.initialize(n.x - Math.round(d), n.y - Math.round(d), n.width, n.height);
				d = Math.round(d);
				f = Math.round(f);
				r -= h - p;
				o -= c - _;
				n.y == n.bottom && (n.bottom < _ ? n.bottom++ : n.y--);
				n.x == n.right && (n.right < p ? n.right++ : n.x--);
				var h = u + n.x,
					c = u + n.right,
					g = p - n.right,
					y = l + n.y,
					m = l + n.bottom,
					v = _ - n.bottom,
					x = d + n.x,
					T = f + n.y,
					_ = o - (_ - n.bottom),
					p = r - (p - n.right);
				a.drawImage(e, i, u / s, l / s, n.x, n.y, d, f, n.x, n.y);
				a.drawImage(e, i, h / s, l / s, n.width, n.y, x, f, p - n.x, n.y);
				a.drawImage(e, i, c / s, l / s, g, n.y, d + p, f, r - p, n.y);
				a.drawImage(e, i, u / s, y / s, n.x, n.height, d, T, n.x, _ - n.y);
				a.drawImage(e, i, h / s, y / s, n.width, n.height, x, T, p - n.x, _ - n.y);
				a.drawImage(e, i, c / s, y / s, g, n.height, d + p, T, r - p, _ - n.y);
				a.drawImage(e, i, u / s, m / s, n.x, v, d, f + _, n.x, o - _);
				a.drawImage(e, i, h / s, m / s, n.width, v, x, f + _, p - n.x, o - _);
				a.drawImage(e, i, c / s, m / s, g, v, d + p, f + _, r - p, o - _)
			}
		};
		i.prototype._measureBounds = function() {
			var i = this._texture;
			return i ? t.Rectangle.identity.initialize(i._offsetX, i._offsetY, i._textureWidth, i._textureHeight) : e.prototype._measureBounds.call(this)
		};
		i.debug = !1;
		i.renderFilter = t.RenderFilter.getInstance();
		return i
	}(t.DisplayObject);
	t.Bitmap = e;
	e.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._text = "";
			this._textChanged = !1;
			this._spriteSheet = null;
			this._spriteSheetChanged = !1;
			this._bitmapPool = []
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "text", {
			get: function() {
				return this._text
			},
			set: function(t) {
				this._textChanged = !0;
				this._text = t;
				this._setSizeDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "spriteSheet", {
			get: function() {
				return this._spriteSheet
			},
			set: function(t) {
				this._spriteSheet != t && (this._spriteSheet = t, this._spriteSheetChanged = !0, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._updateTransform = function() {
			this.visible && ((this._textChanged || this._spriteSheetChanged) && this._renderText(), e.prototype._updateTransform.call(this))
		};
		i.prototype._renderText = function(e) {
			var i = e = 0;
			(this._textChanged || this._spriteSheetChanged) && this.removeChildren();
			for (var n = 0, r = this.text.length; n < r; n++) {
				var o = this.text.charAt(n),
					s = this.spriteSheet.getTexture(o);
				if (null == s) console.log("当前没有位图文字：" + o);
				else {
					var o = s._offsetX,
						a = s._offsetY,
						h = s._textureWidth;
					if (this._textChanged || this._spriteSheetChanged) {
						var c = this._bitmapPool[n];
						c || (c = new t.Bitmap, this._bitmapPool.push(c));
						c.texture = s;
						this.addChild(c);
						c.x = e
					}
					e += h + o;
					a + s._textureHeight > i && (i = a + s._textureHeight)
				}
			}
			this._spriteSheetChanged = this._textChanged = !1;
			return t.Rectangle.identity.initialize(0, 0, e, i)
		};
		i.prototype._measureBounds = function() {
			return this._renderText(!0)
		};
		return i
	}(t.DisplayObjectContainer);
	t.BitmapText = e;
	e.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {
			this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
			this.commandQueue = []
		}
		t.prototype.beginFill = function(t, e) {};
		t.prototype._setStyle = function(t) {};
		t.prototype.drawRect = function(t, e, i, n) {
			this.checkRect(t, e, i, n)
		};
		t.prototype.drawCircle = function(t, e, i) {
			this.checkRect(t - i, e - i, 2 * i, 2 * i)
		};
		t.prototype.drawRoundRect = function(t, e, i, n, r, o) {
			this.checkRect(t, e, i, n)
		};
		t.prototype.drawEllipse = function(t, e, i, n) {
			this.checkRect(t - i, e - n, 2 * i, 2 * n)
		};
		t.prototype.lineStyle = function(t, e, i, n, r, o, s, a) {};
		t.prototype.lineTo = function(t, e) {
			this.checkPoint(t, e)
		};
		t.prototype.curveTo = function(t, e, i, n) {
			this.checkPoint(t, e);
			this.checkPoint(i, n)
		};
		t.prototype.moveTo = function(t, e) {
			this.checkPoint(t, e)
		};
		t.prototype.clear = function() {
			this._maxY = this._maxX = this._minY = this._minX = 0
		};
		t.prototype.endFill = function() {};
		t.prototype._draw = function(t) {};
		t.prototype.checkRect = function(t, e, i, n) {
			this._minX = Math.min(this._minX, t);
			this._minY = Math.min(this._minY, e);
			this._maxX = Math.max(this._maxX, t + i);
			this._maxY = Math.max(this._maxY, e + n)
		};
		t.prototype.checkPoint = function(t, e) {
			this._minX = Math.min(this._minX, t);
			this._minY = Math.min(this._minY, e);
			this._maxX = Math.max(this._maxX, t);
			this._maxY = Math.max(this._maxY, e);
			this._lastX = t;
			this._lastY = e
		};
		return t
	}();
	t.Graphics = e;
	e.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(t, e, i) {
			this.method = t;
			this.thisObject = e;
			this.args = i
		}
	})().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this)
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new t.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._render = function(t) {
			this._graphics && this._graphics._draw(t)
		};
		return i
	}(t.DisplayObject);
	t.Shape = e;
	e.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this)
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new t.Graphics);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._render = function(t) {
			this._graphics && this._graphics._draw(t);
			e.prototype._render.call(this, t)
		};
		return i
	}(t.DisplayObjectContainer);
	t.Sprite = e;
	e.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._inputEnabled = !1;
			this._text = this._type = "";
			this._displayAsPassword = !1;
			this._fontFamily = i.default_fontFamily;
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
		__extends(i, e);
		i.prototype.isInput = function() {
			return this._type == t.TextFieldType.INPUT
		};
		i.prototype._setTouchEnabled = function(t) {
			e.prototype._setTouchEnabled.call(this, t);
			this.isInput() && (this._inputEnabled = !0)
		};
		Object.defineProperty(i.prototype, "type", {
			get: function() {
				return this._type
			},
			set: function(t) {
				this._setType(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setType = function(e) {
			this._type != e && (this._type = e, this._type == t.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new t.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
		};
		Object.defineProperty(i.prototype, "text", {
			get: function() {
				return this._getText()
			},
			set: function(t) {
				this._setText(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._getText = function() {
			return this._type == t.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
		};
		i.prototype._setSizeDirty = function() {
			e.prototype._setSizeDirty.call(this);
			this._isArrayChanged = !0
		};
		i.prototype._setTextDirty = function() {
			this._setSizeDirty()
		};
		i.prototype._setBaseText = function(t) {
			null == t && (t = "");
			this._isFlow = !1;
			if (this._text != t || this._displayAsPassword) this._setTextDirty(), this._text = t, t = "", t = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
				text: t
			}])
		};
		i.prototype._setText = function(t) {
			null == t && (t = "");
			this._setBaseText(t);
			this._inputUtils && this._inputUtils._setText(this._text)
		};
		Object.defineProperty(i.prototype, "displayAsPassword", {
			get: function() {
				return this._displayAsPassword
			},
			set: function(t) {
				this._setDisplayAsPassword(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setDisplayAsPassword = function(t) {
			this._displayAsPassword != t && (this._displayAsPassword = t, this._setText(this._text))
		};
		Object.defineProperty(i.prototype, "fontFamily", {
			get: function() {
				return this._fontFamily
			},
			set: function(t) {
				this._setFontFamily(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setFontFamily = function(t) {
			this._fontFamily != t && (this._setTextDirty(), this._fontFamily = t)
		};
		Object.defineProperty(i.prototype, "size", {
			get: function() {
				return this._size
			},
			set: function(t) {
				this._setSize(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setSize = function(t) {
			this._size != t && (this._setTextDirty(), this._size = t)
		};
		Object.defineProperty(i.prototype, "italic", {
			get: function() {
				return this._italic
			},
			set: function(t) {
				this._setItalic(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setItalic = function(t) {
			this._italic != t && (this._setTextDirty(), this._italic = t)
		};
		Object.defineProperty(i.prototype, "bold", {
			get: function() {
				return this._bold
			},
			set: function(t) {
				this._setBold(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setBold = function(t) {
			this._bold != t && (this._setTextDirty(), this._bold = t)
		};
		Object.defineProperty(i.prototype, "textColor", {
			get: function() {
				return this._textColor
			},
			set: function(t) {
				this._setTextColor(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setTextColor = function(e) {
			this._textColor != e && (this._setTextDirty(), this._textColor = e, this._textColorString = t.toColorString(e))
		};
		Object.defineProperty(i.prototype, "strokeColor", {
			get: function() {
				return this._strokeColor
			},
			set: function(t) {
				this._setStrokeColor(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setStrokeColor = function(e) {
			this._strokeColor != e && (this._setTextDirty(), this._strokeColor = e, this._strokeColorString = t.toColorString(e))
		};
		Object.defineProperty(i.prototype, "stroke", {
			get: function() {
				return this._stroke
			},
			set: function(t) {
				this._setStroke(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setStroke = function(t) {
			this._stroke != t && (this._setTextDirty(), this._stroke = t)
		};
		Object.defineProperty(i.prototype, "textAlign", {
			get: function() {
				return this._textAlign
			},
			set: function(t) {
				this._setTextAlign(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setTextAlign = function(t) {
			this._textAlign != t && (this._setTextDirty(), this._textAlign = t)
		};
		Object.defineProperty(i.prototype, "verticalAlign", {
			get: function() {
				return this._verticalAlign
			},
			set: function(t) {
				this._setVerticalAlign(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setVerticalAlign = function(t) {
			this._verticalAlign != t && (this._setTextDirty(), this._verticalAlign = t)
		};
		Object.defineProperty(i.prototype, "maxChars", {
			get: function() {
				return this._maxChars
			},
			set: function(t) {
				this._setMaxChars(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setMaxChars = function(t) {
			this._maxChars != t && (this._maxChars = t)
		};
		Object.defineProperty(i.prototype, "scrollV", {
			set: function(t) {
				this._scrollV = t;
				this._setDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "maxScrollV", {
			get: function() {
				return this._maxScrollV
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "selectionBeginIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "selectionEndIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "caretIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setSelection = function(t, e) {};
		Object.defineProperty(i.prototype, "lineSpacing", {
			get: function() {
				return this._lineSpacing
			},
			set: function(t) {
				this._setLineSpacing(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setLineSpacing = function(t) {
			this._lineSpacing != t && (this._setTextDirty(), this._lineSpacing = t)
		};
		i.prototype._getLineHeight = function() {
			return this._lineSpacing + this._size
		};
		Object.defineProperty(i.prototype, "numLines", {
			get: function() {
				return this._numLines
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "multiline", {
			get: function() {
				return this._multiline
			},
			set: function(t) {
				this._setMultiline(t)
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setMultiline = function(t) {
			this._multiline = t;
			this._setDirty()
		};
		i.prototype.setFocus = function() {
			t.Logger.warning("TextField.setFocus 没有实现")
		};
		i.prototype._onRemoveFromStage = function() {
			e.prototype._onRemoveFromStage.call(this);
			this._type == t.TextFieldType.INPUT && this._inputUtils._removeStageText()
		};
		i.prototype._onAddToStage = function() {
			e.prototype._onAddToStage.call(this);
			this._type == t.TextFieldType.INPUT && this._inputUtils._addStageText()
		};
		i.prototype._updateBaseTransform = function() {
			e.prototype._updateTransform.call(this)
		};
		i.prototype._updateTransform = function() {
			this._type == t.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
		};
		i.prototype._render = function(t) {
			this.drawText(t);
			this._clearDirty()
		};
		i.prototype._measureBounds = function() {
			return this.measureText()
		};
		Object.defineProperty(i.prototype, "textFlow", {
			get: function() {
				return this._textArr
			},
			set: function(t) {
				this._isFlow = !0;
				var e = "";
				null == t && (t = []);
				for (var i = 0; i < t.length; i++) e += t[i].text;
				this._displayAsPassword ? this._setBaseText(e) : (this._text = e, this.setMiddleStyle(t))
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.changeToPassText = function(t) {
			if (this._displayAsPassword) {
				for (var e = "", i = 0, n = t.length; i < n; i++) switch (t.charAt(i)) {
					case "\n":
						e += "\n";
						break;
					case "\r":
						break;
					default:
						e += "*"
				}
				return e
			}
			return t
		};
		i.prototype.setMiddleStyle = function(t) {
			this._isArrayChanged = !0;
			this._textArr = t;
			this._setSizeDirty()
		};
		Object.defineProperty(i.prototype, "textWidth", {
			get: function() {
				return this._textMaxWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "textHeight", {
			get: function() {
				return this._textMaxHeight
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype.appendText = function(t) {
			this.appendElement({
				text: t
			})
		};
		i.prototype.appendElement = function(t) {
			this._textArr.push(t);
			this.setMiddleStyle(this._textArr)
		};
		i.prototype._getLinesArr = function() {
			if (!this._isArrayChanged) return this._linesArr;
			this._isArrayChanged = !1;
			var e = this._textArr,
				i = t.MainContext.instance.rendererContext;
			this._linesArr = [];
			this._textMaxWidth = this._textMaxHeight = 0;
			if (this._hasWidthSet && 0 == this._explicitWidth) return console.warn("文本宽度被设置为0"), this._numLines = 0, [{
				width: 0,
				height: 0,
				elements: []
			}];
			var n = this._linesArr,
				r = 0,
				o = 0,
				s = 0,
				a;
			this._isFlow || i.setupFont(this);
			for (var h = 0; h < e.length; h++) {
				var c = e[h];
				c.style = c.style || {};
				for (var u = c.text.toString().split(/(?:\r\n|\r|\n)/), l = 0; l < u.length; l++) {
					null == n[s] && (a = {
						width: 0,
						height: 0,
						elements: []
					}, n[s] = a, o = r = 0);
					o = this._type == t.TextFieldType.INPUT ? this._size : Math.max(o, c.style.size || this._size);
					if ("" != u[l]) {
						this._isFlow && i.setupFont(this, c.style);
						var p = i.measureText(u[l]);
						if (this._hasWidthSet)
							if (r + p <= this._explicitWidth) a.elements.push({
								width: p,
								text: u[l],
								style: c.style
							}), r += p;
							else {
								for (var _ = 0, d = 0, f = u[l]; _ < f.length; _++) {
									p = i.measureText(f.charAt(_));
									if (r + p > this._explicitWidth) break;
									d += p;
									r += p
								}
								0 < _ && (a.elements.push({
									width: d,
									text: f.substring(0, _),
									style: c.style
								}), u[l] = f.substring(_));
								l--
							} else r += p, a.elements.push({
							width: p,
							text: u[l],
							style: c.style
						})
					}
					if (l < u.length - 1) {
						a.width = r;
						a.height = o;
						this._textMaxWidth = Math.max(this._textMaxWidth, r);
						this._textMaxHeight += o;
						if (this._type == t.TextFieldType.INPUT && !this._multiline) return this._numLines = n.length, n;
						s++
					}
				}
				h == e.length - 1 && a && (a.width = r, a.height = o, this._textMaxWidth = Math.max(this._textMaxWidth, r), this._textMaxHeight += o)
			}
			this._numLines = n.length;
			return n
		};
		i.prototype.measureText = function() {
			return this._getLinesArr() ? t.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) * this._lineSpacing) : t.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		i.prototype.drawText = function(e) {
			var i = this._getLinesArr();
			if (i) {
				this._isFlow || e.setupFont(this);
				var n = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
					r = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
					o = 0,
					s = 0;
				if (this._hasHeightSet)
					if (r < this._explicitHeight) {
						var a = 0;
						this._verticalAlign == t.VerticalAlign.MIDDLE ? a = .5 : this._verticalAlign == t.VerticalAlign.BOTTOM && (a = 1);
						o += a * (this._explicitHeight - r)
					} else r > this._explicitHeight && (s = Math.max(this._scrollV - 1, 0), s = Math.min(this._numLines - 1, s));
				o = Math.round(o);
				r = 0;
				this._textAlign == t.HorizontalAlign.CENTER ? r = .5 : this._textAlign == t.HorizontalAlign.RIGHT && (r = 1);
				for (a = 0; s < this._numLines; s++) {
					var h = i[s],
						c = h.height,
						o = o + c / 2;
					if (0 != s && this._hasHeightSet && o > this._explicitHeight) break;
					for (var a = Math.round((n - h.width) * r), u = 0; u < h.elements.length; u++) {
						var l = h.elements[u],
							p = l.style.size || this._size;
						this._type == t.TextFieldType.INPUT ? e.drawText(this, l.text, a, o + (c - p) / 2, l.width) : (this._isFlow && e.setupFont(this, l.style), e.drawText(this, l.text, a, o + (c - p) / 2, l.width, l.style));
						a += l.width
					}
					o += c / 2 + this._lineSpacing
				}
			}
		};
		i.default_fontFamily = "Arial";
		return i
	}(t.DisplayObject);
	t.TextField = e;
	e.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {
			this.resutlArr = []
		}
		t.prototype.parser = function(t) {
			this.stackArray = [];
			this.resutlArr = [];
			for (var e = 0, i = t.length; e < i;) {
				var n = t.indexOf("<", e);
				0 > n ? (this.addToResultArr(t.substring(e)), e = i) : (this.addToResultArr(t.substring(e, n)), e = t.indexOf(">", n), "/" == t.charAt(n + 1) ? this.stackArray.pop() : this.addToArray(t.substring(n + 1, e)), e += 1)
			}
			return this.resutlArr
		};
		t.prototype.addToResultArr = function(t) {
			if ("" != t) {
				var e = [];
				e.push(["&lt;", "<"]);
				e.push(["&gt;", ">"]);
				e.push(["&amp;", "&"]);
				e.push(["&quot;", '"']);
				e.push(["&apos;;", "'"]);
				for (var i = 0; i < e.length; i++) t.replace(new RegExp(e[i][0], "g"), e[i][1]);
				0 < this.stackArray.length ? this.resutlArr.push({
					text: t,
					style: this.stackArray[this.stackArray.length - 1]
				}) : this.resutlArr.push({
					text: t
				})
			}
		};
		t.prototype.changeStringToObject = function(t) {
			var e = {};
			t = t.replace(/( )+/g, " ").split(" ");
			for (var i = 0; i < t.length; i++) this.addProperty(e, t[i]);
			return e
		};
		t.prototype.addProperty = function(t, e) {
			var i = e.replace(/( )*=( )*/g, "=").split("=");
			i[1] && (i[1] = i[1].replace(/(\"|\')/g, ""));
			switch (i[0].toLowerCase()) {
				case "color":
					t.textColor = parseInt(i[1]);
					break;
				case "b":
					t.bold = "true" == (i[1] || "true");
					break;
				case "i":
					t.italic = "true" == (i[1] || "true");
					break;
				case "size":
					t.size = parseInt(i[1]);
					break;
				case "fontFamily":
					t.fontFamily = i[1]
			}
		};
		t.prototype.addToArray = function(t) {
			t = this.changeStringToObject(t);
			if (0 != this.stackArray.length) {
				var e = this.stackArray[this.stackArray.length - 1],
					i;
				for (i in e) null == t[i] && (t[i] = e[i])
			}
			this.stackArray.push(t)
		};
		return t
	}();
	t.HtmlTextParser = e;
	e.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.DYNAMIC = "dynamic";
		t.INPUT = "input";
		return t
	}();
	t.TextFieldType = e;
	e.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t) {
			e.call(this);
			var i = t.bitmapData;
			this.bitmapData = i;
			this._textureMap = {};
			this._sourceWidth = i.width;
			this._sourceHeight = i.height;
			this._bitmapX = t._bitmapX - t._offsetX;
			this._bitmapY = t._bitmapY - t._offsetY
		}
		__extends(i, e);
		i.prototype.getTexture = function(t) {
			return this._textureMap[t]
		};
		i.prototype.createTexture = function(e, i, n, r, o, s, a, h, c) {
			void 0 === s && (s = 0);
			void 0 === a && (a = 0);
			"undefined" === typeof h && (h = s + r);
			"undefined" === typeof c && (c = a + o);
			var u = new t.Texture,
				l = t.MainContext.instance.rendererContext.texture_scale_factor;
			u._bitmapData = this.bitmapData;
			u._bitmapX = this._bitmapX + i;
			u._bitmapY = this._bitmapY + n;
			u._bitmapWidth = r * l;
			u._bitmapHeight = o * l;
			u._offsetX = s;
			u._offsetY = a;
			u._textureWidth = h * l;
			u._textureHeight = c * l;
			u._sourceWidth = this._sourceWidth;
			u._sourceHeight = this._sourceHeight;
			return this._textureMap[e] = u
		};
		return i
	}(t.HashObject);
	t.SpriteSheet = e;
	e.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._isFocus = !1;
			this._isFirst = this._isFirst = !0
		}
		__extends(i, e);
		i.prototype.init = function(e) {
			this._text = e;
			this.stageText = t.StageText.create();
			e = this._text.localToGlobal();
			this.stageText._open(e.x, e.y, this._text._explicitWidth, this._text._explicitHeight)
		};
		i.prototype._addStageText = function() {
			this._text._inputEnabled || (this._text._touchEnabled = !0);
			this.stageText._add();
			this.stageText._addListeners();
			this.stageText.addEventListener("blur", this.onBlurHandler, this);
			this.stageText.addEventListener("focus", this.onFocusHandler, this);
			this.stageText.addEventListener("updateText", this.updateTextHandler, this);
			this._text.addEventListener(t.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			t.MainContext.instance.stage.addEventListener(t.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		i.prototype._removeStageText = function() {
			this.stageText._remove();
			this.stageText._removeListeners();
			this._text._inputEnabled || (this._text._touchEnabled = !1);
			this.stageText.removeEventListener("blur", this.onBlurHandler, this);
			this.stageText.removeEventListener("focus", this.onFocusHandler, this);
			this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
			this._text.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
			t.MainContext.instance.stage.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
		};
		i.prototype._getText = function() {
			return this.stageText._getText()
		};
		i.prototype._setText = function(t) {
			this.stageText._setText(t)
		};
		i.prototype.onFocusHandler = function(t) {
			this.hideText()
		};
		i.prototype.onBlurHandler = function(t) {
			this.showText()
		};
		i.prototype.onMouseDownHandler = function(t) {
			t.stopPropagation();
			this._text._visible && this.stageText._show()
		};
		i.prototype.onStageDownHandler = function(t) {
			this.stageText._hide();
			this.showText()
		};
		i.prototype.showText = function() {
			this._isFocus && (this._isFocus = !1, this.resetText())
		};
		i.prototype.hideText = function() {
			this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
		};
		i.prototype.updateTextHandler = function(e) {
			this.resetText();
			this._text.dispatchEvent(new t.Event(t.Event.CHANGE))
		};
		i.prototype.resetText = function() {
			this._text._setBaseText(this.stageText._getText())
		};
		i.prototype._updateTransform = function() {
			var e = this._text._worldTransform.a,
				i = this._text._worldTransform.b,
				n = this._text._worldTransform.c,
				r = this._text._worldTransform.d,
				o = this._text._worldTransform.tx,
				s = this._text._worldTransform.ty;
			this._text._updateBaseTransform();
			var a = this._text._worldTransform;
			if (this._isFirst || e != a.a || i != a.b || n != a.c || r != a.d || o != a.tx || s != a.ty) {
				this._isFirst = !1;
				e = this._text.localToGlobal();
				this.stageText.changePosition(e.x, e.y);
				var h = this;
				t.callLater(function() {
					h.stageText._setScale(h._text._worldTransform.a, h._text._worldTransform.d)
				}, this)
			}
		};
		i.prototype._updateProperties = function() {
			var e = this._text._stage;
			if (null == e) this.stageText._setVisible(!1);
			else {
				for (var i = this._text, n = i._visible; n;) {
					i = i.parent;
					if (i == e) break;
					n = i._visible
				}
				this.stageText._setVisible(n)
			}
			this.stageText._setMultiline(this._text._multiline);
			this.stageText._setMaxChars(this._text._maxChars);
			this.stageText._setSize(this._text._size);
			this.stageText._setTextColor(this._text._textColorString);
			this.stageText._setTextFontFamily(this._text._fontFamily);
			this.stageText._setBold(this._text._bold);
			this.stageText._setItalic(this._text._italic);
			this.stageText._setTextAlign(this._text._textAlign);
			this.stageText._setWidth(this._text._getSize(t.Rectangle.identity).width);
			this.stageText._setHeight(this._text._getSize(t.Rectangle.identity).height);
			this.stageText._setTextType(this._text._displayAsPassword ? "password" : "text");
			this.stageText._setText(this._text._text);
			this.stageText._resetStageText();
			this._updateTransform()
		};
		return i
	}(t.HashObject);
	t.InputController = e;
	e.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e, i) {
			t.call(this, e);
			this.charList = this.parseConfig(i)
		}
		__extends(e, t);
		e.prototype.getTexture = function(t) {
			var e = this._textureMap[t];
			if (!e) {
				e = this.charList[t];
				if (!e) return null;
				e = this.createTexture(t, e.x, e.y, e.width, e.height, e.offsetX, e.offsetY);
				this._textureMap[t] = e
			}
			return e
		};
		e.prototype.parseConfig = function(t) {
			t = t.split("\r\n").join("\n");
			t = t.split("\n");
			for (var e = this.getConfigByKey(t[3], "count"), i = {}, n = 4; n < 4 + e; n++) {
				var r = t[n],
					o = String.fromCharCode(this.getConfigByKey(r, "id")),
					s = {};
				i[o] = s;
				s.x = this.getConfigByKey(r, "x");
				s.y = this.getConfigByKey(r, "y");
				s.width = this.getConfigByKey(r, "width");
				s.height = this.getConfigByKey(r, "height");
				s.offsetX = this.getConfigByKey(r, "xoffset");
				s.offsetY = this.getConfigByKey(r, "yoffset")
			}
			return i
		};
		e.prototype.getConfigByKey = function(t, e) {
			for (var i = t.split(" "), n = 0, r = i.length; n < r; n++) {
				var o = i[n];
				if (e == o.substring(0, e.length)) return i = o.substring(e.length + 1), parseInt(i)
			}
			return 0
		};
		return e
	}(t.SpriteSheet);
	t.BitmapTextSpriteSheet = e;
	e.prototype.__class__ = "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function n(n, r) {
			e.call(this);
			this.frameRate = 60;
			n instanceof i ? (t.Logger.warning("MovieClip#constructor接口参数已经变更，请尽快调整用法为 new MovieClip(data,texture)"), this.delegate = n) : this.delegate = new i(n, r);
			this.delegate.setMovieClip(this)
		}
		__extends(n, e);
		n.prototype.gotoAndPlay = function(t) {
			this.delegate.gotoAndPlay(t)
		};
		n.prototype.gotoAndStop = function(t) {
			this.delegate.gotoAndStop(t)
		};
		n.prototype.stop = function() {
			this.delegate.stop()
		};
		n.prototype.dispose = function() {
			this.delegate.dispose()
		};
		n.prototype.release = function() {
			t.Logger.warning("MovieClip#release方法即将废弃");
			this.dispose()
		};
		n.prototype.getCurrentFrameIndex = function() {
			t.Logger.warning("MovieClip#getCurrentFrameIndex方法即将废弃");
			return this.delegate._currentFrameIndex
		};
		n.prototype.getTotalFrame = function() {
			t.Logger.warning("MovieClip#getTotalFrame方法即将废弃");
			return this.delegate._totalFrame
		};
		n.prototype.setInterval = function(e) {
			t.Logger.warning("MovieClip#setInterval方法即将废弃,请使用MovieClip#frameRate代替");
			this.frameRate = 60 / e
		};
		n.prototype.getIsPlaying = function() {
			t.Logger.warning("MovieClip#getIsPlaying方法即将废弃");
			return this.delegate.isPlaying
		};
		return n
	}(t.DisplayObjectContainer);
	t.MovieClip = e;
	e.prototype.__class__ = "egret.MovieClip";
	var i = function() {
		function e(e, i) {
			this.data = e;
			this._currentFrameIndex = this._passTime = this._totalFrame = 0;
			this._isPlaying = !1;
			this._frameData = e;
			this._spriteSheet = new t.SpriteSheet(i)
		}
		e.prototype.setMovieClip = function(e) {
			this.movieClip = e;
			this.bitmap = new t.Bitmap;
			this.movieClip.addChild(this.bitmap)
		};
		e.prototype.gotoAndPlay = function(e) {
			this.checkHasFrame(e);
			this._isPlaying = !0;
			this._currentFrameIndex = 0;
			this._currentFrameName = e;
			this._totalFrame = this._frameData.frames[e].totalFrame;
			this.playNextFrame();
			this._passTime = 0;
			t.Ticker.getInstance().register(this.update, this)
		};
		e.prototype.gotoAndStop = function(t) {
			this.checkHasFrame(t);
			this.stop();
			this._currentFrameIndex = this._passTime = 0;
			this._currentFrameName = t;
			this._totalFrame = this._frameData.frames[t].totalFrame;
			this.playNextFrame()
		};
		e.prototype.stop = function() {
			this._isPlaying = !1;
			t.Ticker.getInstance().unregister(this.update, this)
		};
		e.prototype.dispose = function() {};
		e.prototype.checkHasFrame = function(e) {
			void 0 == this._frameData.frames[e] && t.Logger.fatal("MovieClip没有对应的frame：", e)
		};
		e.prototype.update = function(t) {
			for (var e = 1e3 / this.movieClip.frameRate, e = Math.floor((this._passTime % e + t) / e); 1 <= e;) 1 == e ? this.playNextFrame() : this.playNextFrame(!1), e--;
			this._passTime += t
		};
		e.prototype.playNextFrame = function(e) {
			void 0 === e && (e = !0);
			var i = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
			if (e) {
				e = this.getTexture(i.res);
				var n = this.bitmap;
				n.x = i.x;
				n.y = i.y;
				n.texture = e
			}
			null != i.action && this.movieClip.dispatchEventWith(i.action);
			this._currentFrameIndex++;
			this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0, i.action != t.Event.COMPLETE && this.movieClip.dispatchEventWith(t.Event.COMPLETE))
		};
		e.prototype.getTexture = function(t) {
			var e = this._frameData.res[t],
				i = this._spriteSheet.getTexture(t);
			i || (i = this._spriteSheet.createTexture(t, e.x, e.y, e.w, e.h));
			return i
		};
		return e
	}();
	t.DefaultMovieClipDelegate = i;
	i.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._scaleY = this._scaleX = 1;
			this._size = 30;
			this._color = "#FFFFFF";
			this._fontFamily = "Arial";
			this._italic = this._bold = !1;
			this._textAlign = "left";
			this._multiline = this._visible = !1;
			this._maxChars = 0
		}
		__extends(e, t);
		e.prototype._getText = function() {
			return null
		};
		e.prototype._setText = function(t) {};
		e.prototype._setTextType = function(t) {};
		e.prototype._getTextType = function() {
			return null
		};
		e.prototype._open = function(t, e, i, n) {};
		e.prototype._show = function() {};
		e.prototype._add = function() {};
		e.prototype._remove = function() {};
		e.prototype._hide = function() {};
		e.prototype._addListeners = function() {};
		e.prototype._removeListeners = function() {};
		e.prototype._setScale = function(t, e) {
			this._scaleX = t;
			this._scaleY = e
		};
		e.prototype.changePosition = function(t, e) {};
		e.prototype._setSize = function(t) {
			this._size = t
		};
		e.prototype._setTextColor = function(t) {
			this._color = t
		};
		e.prototype._setTextFontFamily = function(t) {
			this._fontFamily = t
		};
		e.prototype._setBold = function(t) {
			this._bold = t
		};
		e.prototype._setItalic = function(t) {
			this._italic = t
		};
		e.prototype._setTextAlign = function(t) {
			this._textAlign = t
		};
		e.prototype._setVisible = function(t) {
			this._visible = t
		};
		e.prototype._setWidth = function(t) {};
		e.prototype._setHeight = function(t) {};
		e.prototype._setMultiline = function(t) {
			this._multiline = t
		};
		e.prototype._setMaxChars = function(t) {
			this._maxChars = t
		};
		e.prototype._resetStageText = function() {};
		e.create = function() {
			return null
		};
		return e
	}(t.EventDispatcher);
	t.StageText = e;
	e.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.GET = "get";
		t.POST = "post";
		return t
	}();
	t.URLRequestMethod = e;
	e.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.BINARY = "binary";
		t.TEXT = "text";
		t.VARIABLES = "variables";
		t.TEXTURE = "texture";
		t.SOUND = "sound";
		return t
	}();
	t.URLLoaderDataFormat = e;
	e.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e(e) {
			void 0 === e && (e = null);
			t.call(this);
			null !== e && this.decode(e)
		}
		__extends(e, t);
		e.prototype.decode = function(t) {
			this.variables || (this.variables = {});
			t = t.split("+").join(" ");
			for (var e, i = /[?&]?([^=]+)=([^&]*)/g; e = i.exec(t);) this.variables[decodeURIComponent(e[1])] = decodeURIComponent(e[2])
		};
		e.prototype.toString = function() {
			if (!this.variables) return "";
			var t = this.variables,
				e = "",
				i = !0,
				n;
			for (n in t) i ? i = !1 : e += "&", e += n + "=" + t[n];
			return e
		};
		return e
	}(t.HashObject);
	t.URLVariables = e;
	e.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		return function(t, e) {
			this.name = t;
			this.value = e
		}
	}();
	t.URLRequestHeader = e;
	e.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(i) {
			void 0 === i && (i = null);
			e.call(this);
			this.method = t.URLRequestMethod.GET;
			this.url = i
		}
		__extends(i, e);
		return i
	}(t.HashObject);
	t.URLRequest = e;
	e.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(i) {
			void 0 === i && (i = null);
			e.call(this);
			this.dataFormat = t.URLLoaderDataFormat.TEXT;
			this._status = -1;
			i && this.load(i)
		}
		__extends(i, e);
		i.prototype.load = function(e) {
			this._request = e;
			this.data = null;
			t.MainContext.instance.netContext.proceed(this)
		};
		return i
	}(t.EventDispatcher);
	t.URLLoader = e;
	e.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
		}
		__extends(i, e);
		Object.defineProperty(i.prototype, "textureWidth", {
			get: function() {
				return this._textureWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "textureHeight", {
			get: function() {
				return this._textureHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(i.prototype, "bitmapData", {
			get: function() {
				return this._bitmapData
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._setBitmapData = function(e) {
			var i = t.MainContext.instance.rendererContext.texture_scale_factor;
			this._bitmapData = e;
			this._sourceWidth = e.width;
			this._sourceHeight = e.height;
			this._textureWidth = this._sourceWidth * i;
			this._textureHeight = this._sourceHeight * i;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		i.prototype.getPixel32 = function(t, e) {
			return this._bitmapData.getContext("2d").getImageData(t, e, 1, 1).data
		};
		return i
	}(t.HashObject);
	t.Texture = e;
	e.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._bitmapData = document.createElement("canvas");
			this.renderContext = t.RendererContext.createRendererContext(this._bitmapData)
		}
		__extends(i, e);
		i.prototype.drawToTexture = function(e) {
			var n = this._bitmapData,
				r = e.getBounds(t.Rectangle.identity);
			if (0 == r.width || 0 == r.height) return t.Logger.warning("egret.RenderTexture#drawToTexture:显示对象测量结果宽高为0，请检查"), !1;
			r.width = Math.floor(r.width);
			r.height = Math.floor(r.height);
			n.width = r.width;
			n.height = r.height;
			this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = r.width, this.renderContext._cacheCanvas.height = r.height);
			i.identityRectangle.width = r.width;
			i.identityRectangle.height = r.height;
			e._worldTransform.identity();
			e.worldAlpha = 1;
			if (e instanceof t.DisplayObjectContainer) {
				var n = e._anchorOffsetX,
					o = e._anchorOffsetY;
				if (0 != e._anchorX || 0 != e._anchorY) n = e._anchorX * r.width, o = e._anchorY * r.height;
				this._offsetX = r.x + n;
				this._offsetY = r.y + o;
				e._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				r = e._children;
				n = 0;
				for (o = r.length; n < o; n++) r[n]._updateTransform()
			}
			r = t.RenderFilter.getInstance();
			n = r._drawAreaList.concat();
			r._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.renderContext.onRenderStart();
			this.webGLTexture = null;
			(o = e.mask || e._scrollRect) && this.renderContext.pushMask(o);
			e._render(this.renderContext);
			o && this.renderContext.popMask();
			r.addDrawArea(i.identityRectangle);
			this.renderContext.onRenderFinish();
			r._drawAreaList = n;
			this._textureWidth = this._bitmapData.width;
			this._textureHeight = this._bitmapData.height;
			this._sourceWidth = this._textureWidth;
			this._sourceHeight = this._textureHeight;
			return !0
		};
		i.identityRectangle = new t.Rectangle;
		return i
	}(t.Texture);
	t.RenderTexture = e;
	e.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this.renderCost = 0;
			this.texture_scale_factor = 1;
			this.profiler = t.Profiler.getInstance()
		}
		__extends(i, e);
		i.prototype.clearScreen = function() {};
		i.prototype.clearRect = function(t, e, i, n) {};
		i.prototype.drawImage = function(t, e, i, n, r, o, s, a, h, c) {
			this.profiler.onDrawImage()
		};
		i.prototype.setTransform = function(t) {};
		i.prototype.setAlpha = function(t, e) {};
		i.prototype.setupFont = function(t, e) {};
		i.prototype.measureText = function(t) {
			return 0
		};
		i.prototype.drawText = function(t, e, i, n, r, o) {
			this.profiler.onDrawImage()
		};
		i.prototype.strokeRect = function(t, e, i, n, r) {};
		i.prototype.pushMask = function(t) {};
		i.prototype.popMask = function() {};
		i.prototype.onRenderStart = function() {};
		i.prototype.onRenderFinish = function() {};
		i.prototype.setGlobalColorTransform = function(t) {};
		i.createRendererContext = function(t) {
			return null
		};
		i.imageSmoothingEnabled = !0;
		return i
	}(t.HashObject);
	t.RendererContext = e;
	e.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.MOUSE = "mouse";
		t.TOUCH = "touch";
		t.mode = "touch";
		return t
	}();
	t.InteractionMode = e;
	e.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(i, e);
		i.prototype.run = function() {};
		i.prototype.getTouchData = function(t, e, i) {
			var n = this._currentTouchTarget[t];
			null == n && (n = {}, this._currentTouchTarget[t] = n);
			n.stageX = e;
			n.stageY = i;
			n.identifier = t;
			return n
		};
		i.prototype.dispatchEvent = function(e, i) {
			t.TouchEvent.dispatchTouchEvent(i.target, e, i.identifier, i.stageX, i.stageY, !1, !1, !1, !0 == this.touchDownTarget[i.identifier])
		};
		i.prototype.onTouchBegan = function(e, i, n) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				var r = t.MainContext.instance.stage.hitTest(e, i);
				r && (e = this.getTouchData(n, e, i), this.touchDownTarget[n] = !0, e.target = r, e.beginTarget = r, this.dispatchEvent(t.TouchEvent.TOUCH_BEGIN, e));
				this.touchingIdentifiers.push(n)
			}
		};
		i.prototype.onTouchMove = function(e, i, n) {
			if (-1 != this.touchingIdentifiers.indexOf(n) && (e != this.lastTouchX || i != this.lastTouchY)) {
				this.lastTouchX = e;
				this.lastTouchY = i;
				var r = t.MainContext.instance.stage.hitTest(e, i);
				r && (e = this.getTouchData(n, e, i), e.target = r, this.dispatchEvent(t.TouchEvent.TOUCH_MOVE, e))
			}
		};
		i.prototype.onTouchEnd = function(e, i, n) {
			var r = this.touchingIdentifiers.indexOf(n); - 1 != r && (this.touchingIdentifiers.splice(r, 1), r = t.MainContext.instance.stage.hitTest(e, i)) && (e = this.getTouchData(n, e, i), delete this.touchDownTarget[n], n = e.beginTarget, e.target = r, this.dispatchEvent(t.TouchEvent.TOUCH_END, e), n == r ? this.dispatchEvent(t.TouchEvent.TOUCH_TAP, e) : e.beginTarget && (e.target = e.beginTarget, this.dispatchEvent(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, e)), delete this._currentTouchTarget[e.identifier])
		};
		return i
	}(t.HashObject);
	t.TouchContext = e;
	e.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this)
		}
		__extends(i, e);
		i.prototype.proceed = function(t) {};
		i._getUrl = function(e) {
			var i = e.url; - 1 == i.indexOf("?") && e.method == t.URLRequestMethod.GET && e.data && e.data instanceof t.URLVariables && (i = i + "?" + e.data.toString());
			return i
		};
		i.prototype.getChangeList = function() {
			return []
		};
		return i
	}(t.HashObject);
	t.NetContext = e;
	e.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this.frameRate = 60
		}
		__extends(e, t);
		e.prototype.executeMainLoop = function(t, e) {};
		return e
	}(t.HashObject);
	t.DeviceContext = e;
	e.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.call = function(t, e) {};
		t.addCallback = function(t, e) {};
		return t
	}();
	t.ExternalInterface = e;
	e.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this.ua = navigator.userAgent.toLowerCase();
			this.trans = this._getTrans()
		}
		__extends(i, e);
		i.getInstance = function() {
			null == i.instance && (i.instance = new i);
			return i.instance
		};
		Object.defineProperty(i.prototype, "isMobile", {
			get: function() {
				t.Logger.warning("Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
				return t.MainContext.deviceType == t.MainContext.DEVICE_MOBILE
			},
			enumerable: !0,
			configurable: !0
		});
		i.prototype._getHeader = function(t) {
			if ("transform" in t) return "";
			for (var e = ["webkit", "ms", "Moz", "O"], i = 0; i < e.length; i++)
				if (e[i] + "Transform" in t) return e[i];
			return ""
		};
		i.prototype._getTrans = function() {
			var t = document.createElement("div").style,
				t = this._getHeader(t);
			return "" == t ? "transform" : t + "Transform"
		};
		i.prototype.$new = function(t) {
			return this.$(document.createElement(t))
		};
		i.prototype.$ = function(e) {
			var n = document;
			if (e = e instanceof HTMLElement ? e : n.querySelector(e)) e.find = e.find || this.$, e.hasClass = e.hasClass || function(t) {
				return this.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
			}, e.addClass = e.addClass || function(t) {
				this.hasClass(t) || (this.className && (this.className += " "), this.className += t);
				return this
			}, e.removeClass = e.removeClass || function(t) {
				this.hasClass(t) && (this.className = this.className.replace(t, ""));
				return this
			}, e.remove = e.remove || function() {}, e.appendTo = e.appendTo || function(t) {
				t.appendChild(this);
				return this
			}, e.prependTo = e.prependTo || function(t) {
				t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this);
				return this
			}, e.transforms = e.transforms || function() {
				this.style[i.getInstance().trans] = i.getInstance().translate(this.position) + i.getInstance().rotate(this.rotation) + i.getInstance().scale(this.scale) + i.getInstance().skew(this.skew);
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
			}, e.translates = function(e, i) {
				this.position.x = e;
				this.position.y = i - t.MainContext.instance.stage.stageHeight;
				this.transforms();
				return this
			}, e.rotate = function(t) {
				this.rotation = t;
				this.transforms();
				return this
			}, e.resize = function(t, e) {
				this.scale.x = t;
				this.scale.y = e;
				this.transforms();
				return this
			}, e.setSkew = function(t, e) {
				this.skew.x = t;
				this.skew.y = e;
				this.transforms();
				return this
			};
			return e
		};
		i.prototype.translate = function(t) {
			return "translate(" + t.x + "px, " + t.y + "px) "
		};
		i.prototype.rotate = function(t) {
			return "rotate(" + t + "deg) "
		};
		i.prototype.scale = function(t) {
			return "scale(" + t.x + ", " + t.y + ") "
		};
		i.prototype.skew = function(t) {
			return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)"
		};
		return i
	}(t.HashObject);
	t.Browser = e;
	e.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(t) {
	(function(t) {
		t.getItem = function(t) {
			return null
		};
		t.setItem = function(t, e) {
			return !1
		};
		t.removeItem = function(t) {};
		t.clear = function() {}
	})(t.localStorage || (t.localStorage = {}))
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function e() {}
		e.parse = function(i) {
			i = t.SAXParser.getInstance().parserXML(i);
			if (!i || !i.childNodes) return null;
			for (var n = i.childNodes.length, r = !1, o = 0; o < n; o++) {
				var s = i.childNodes[o];
				if (1 == s.nodeType) {
					r = !0;
					break
				}
			}
			return r ? e.parseNode(s) : null
		};
		e.parseNode = function(t) {
			if (!t || 1 != t.nodeType) return null;
			var i = {};
			i.localName = t.localName;
			i.name = t.nodeName;
			t.namespaceURI && (i.namespace = t.namespaceURI);
			t.prefix && (i.prefix = t.prefix);
			for (var n = t.attributes, r = n.length, o = 0; o < r; o++) {
				var s = n[o],
					a = s.name;
				0 != a.indexOf("xmlns:") && (i["$" + a] = s.value)
			}
			n = t.childNodes;
			r = n.length;
			for (o = 0; o < r; o++)
				if (s = e.parseNode(n[o])) i.children || (i.children = []), s.parent = i, i.children.push(s);!i.children && (t = t.textContent.trim()) && (i.text = t);
			return i
		};
		e.findChildren = function(t, i, n) {
			n ? n.length = 0 : n = [];
			e.findByPath(t, i, n);
			return n
		};
		e.findByPath = function(t, i, n) {
			var r = i.indexOf("."),
				o; - 1 == r ? (o = i, r = !0) : (o = i.substring(0, r), i = i.substring(r + 1), r = !1);
			if (t = t.children)
				for (var s = t.length, a = 0; a < s; a++) {
					var h = t[a];
					h.localName == o && (r ? n.push(h) : e.findByPath(h, i, n))
				}
		};
		e.getAttributes = function(t, e) {
			e ? e.length = 0 : e = [];
			for (var i in t) "$" == i.charAt(0) && e.push(i.substring(1));
			return e
		};
		return e
	}();
	t.XML = e;
	e.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.LITTLE_ENDIAN = "LITTLE_ENDIAN";
		t.BIG_ENDIAN = "BIG_ENDIAN";
		return t
	}();
	t.Endian = e;
	e.prototype.__class__ = "egret.Endian";
	var i = function() {
		function t() {
			this.length = this.position = 0;
			this._mode = "";
			this.maxlength = 0;
			this._endian = e.LITTLE_ENDIAN;
			this.isLittleEndian = !1;
			this._mode = "Typed array";
			this.maxlength = 4;
			this.arraybytes = new ArrayBuffer(this.maxlength);
			this.unalignedarraybytestemp = new ArrayBuffer(16);
			this.endian = t.DEFAULT_ENDIAN
		}
		Object.defineProperty(t.prototype, "endian", {
			get: function() {
				return this._endian
			},
			set: function(t) {
				this._endian = t;
				this.isLittleEndian = t == e.LITTLE_ENDIAN
			},
			enumerable: !0,
			configurable: !0
		});
		t.prototype.ensureWriteableSpace = function(t) {
			this.ensureSpace(t + this.position)
		};
		t.prototype.setArrayBuffer = function(t) {
			this.ensureSpace(t.byteLength);
			this.length = t.byteLength;
			t = new Int8Array(t);
			new Int8Array(this.arraybytes, 0, this.length).set(t);
			this.position = 0
		};
		Object.defineProperty(t.prototype, "bytesAvailable", {
			get: function() {
				return this.length - this.position
			},
			enumerable: !0,
			configurable: !0
		});
		t.prototype.ensureSpace = function(t) {
			if (t > this.maxlength) {
				t = t + 255 & -256;
				var e = new ArrayBuffer(t),
					i = new Uint8Array(this.arraybytes, 0, this.length);
				new Uint8Array(e, 0, this.length).set(i);
				this.arraybytes = e;
				this.maxlength = t
			}
		};
		t.prototype.writeByte = function(t) {
			this.ensureWriteableSpace(1);
			new Int8Array(this.arraybytes)[this.position++] = ~~t;
			this.position > this.length && (this.length = this.position)
		};
		t.prototype.readByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			return new Int8Array(this.arraybytes)[this.position++]
		};
		t.prototype.readBytes = function(t, e, i) {
			void 0 === e && (e = 0);
			void 0 === i && (i = 0);
			null == i && (i = t.length);
			t.ensureWriteableSpace(e + i);
			var n = new Int8Array(t.arraybytes),
				r = new Int8Array(this.arraybytes);
			n.set(r.subarray(this.position, this.position + i), e);
			this.position += i;
			i + e > t.length && (t.length += i + e - t.length)
		};
		t.prototype.writeUnsignedByte = function(t) {
			this.ensureWriteableSpace(1);
			new Uint8Array(this.arraybytes)[this.position++] = ~~t & 255;
			this.position > this.length && (this.length = this.position)
		};
		t.prototype.readUnsignedByte = function() {
			if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			return new Uint8Array(this.arraybytes)[this.position++]
		};
		t.prototype.writeUnsignedShort = function(t) {
			this.ensureWriteableSpace(2);
			if (0 == (this.position & 1)) {
				var e = new Uint16Array(this.arraybytes);
				e[this.position >> 1] = ~~t & 65535
			} else e = new Uint16Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~t & 65535, t = new Uint8Array(this.arraybytes, this.position, 2), e = new Uint8Array(this.unalignedarraybytestemp, 0, 2), t.set(e);
			this.position += 2;
			this.position > this.length && (this.length = this.position)
		};
		t.prototype.readUTFBytes = function(t) {
			var e = "";
			t = this.position + t;
			for (var i = new DataView(this.arraybytes); this.position < t;) {
				var n = i.getUint8(this.position++);
				if (128 > n) {
					if (0 == n) break;
					e += String.fromCharCode(n)
				} else if (224 > n) e += String.fromCharCode((n & 63) << 6 | i.getUint8(this.position++) & 127);
				else if (240 > n) var r = i.getUint8(this.position++),
					e = e + String.fromCharCode((n & 31) << 12 | (r & 127) << 6 | i.getUint8(this.position++) & 127);
				else var r = i.getUint8(this.position++),
					o = i.getUint8(this.position++),
					e = e + String.fromCharCode((n & 15) << 18 | (r & 127) << 12 | o << 6 & 127 | i.getUint8(this.position++) & 127)
			}
			return e
		};
		t.prototype.readInt = function() {
			var t = new DataView(this.arraybytes).getInt32(this.position, this.isLittleEndian);
			this.position += 4;
			return t
		};
		t.prototype.readShort = function() {
			var t = new DataView(this.arraybytes).getInt16(this.position, this.isLittleEndian);
			this.position += 2;
			return t
		};
		t.prototype.readDouble = function() {
			var t = new DataView(this.arraybytes).getFloat64(this.position, this.isLittleEndian);
			this.position += 8;
			return t
		};
		t.prototype.readUnsignedShort = function() {
			if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 1)) {
				var t = new Uint16Array(this.arraybytes),
					e = this.position >> 1;
				this.position += 2;
				return t[e]
			}
			t = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 2);
			new Uint8Array(this.unalignedarraybytestemp, 0, 2).set(e);
			this.position += 2;
			return t[0]
		};
		t.prototype.writeUnsignedInt = function(t) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var e = new Uint32Array(this.arraybytes);
				e[this.position >> 2] = ~~t & 4294967295
			} else e = new Uint32Array(this.unalignedarraybytestemp, 0, 1), e[0] = ~~t & 4294967295, t = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), t.set(e);
			this.position += 4;
			this.position > this.length && (this.length = this.position)
		};
		t.prototype.readUnsignedInt = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 3)) {
				var t = new Uint32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return t[e]
			}
			t = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			new Uint8Array(this.unalignedarraybytestemp, 0, 4).set(e);
			this.position += 4;
			return t[0]
		};
		t.prototype.writeFloat = function(t) {
			this.ensureWriteableSpace(4);
			if (0 == (this.position & 3)) {
				var e = new Float32Array(this.arraybytes);
				e[this.position >> 2] = t
			} else e = new Float32Array(this.unalignedarraybytestemp, 0, 1), e[0] = t, t = new Uint8Array(this.arraybytes, this.position, 4), e = new Uint8Array(this.unalignedarraybytestemp, 0, 4), t.set(e);
			this.position += 4;
			this.position > this.length && (this.length = this.position)
		};
		t.prototype.readFloat = function() {
			if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
			if (0 == (this.position & 3)) {
				var t = new Float32Array(this.arraybytes),
					e = this.position >> 2;
				this.position += 4;
				return t[e]
			}
			t = new Float32Array(this.unalignedarraybytestemp, 0, 1);
			e = new Uint8Array(this.arraybytes, this.position, 4);
			new Uint8Array(this.unalignedarraybytestemp, 0, 4).set(e);
			this.position += 4;
			return t[0]
		};
		t.DEFAULT_ENDIAN = e.BIG_ENDIAN;
		return t
	}();
	t.ByteArray = i;
	i.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t, i, n) {
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
			this.initialize(t, i, n)
		}
		__extends(i, e);
		i.get = function(t, e, n, r) {
			void 0 === e && (e = null);
			void 0 === n && (n = null);
			void 0 === r && (r = !1);
			r && i.removeTweens(t);
			return new i(t, e, n)
		};
		i.removeTweens = function(t) {
			if (t.tween_count) {
				for (var e = i._tweens, n = e.length - 1; 0 <= n; n--) e[n]._target == t && (e[n].paused = !0, e.splice(n, 1));
				t.tween_count = 0
			}
		};
		i.pauseTweens = function(e) {
			if (e.tween_count)
				for (var i = t.Tween._tweens, n = i.length - 1; 0 <= n; n--) i[n]._target == e && (i[n].paused = !0)
		};
		i.resumeTweens = function(e) {
			if (e.tween_count)
				for (var i = t.Tween._tweens, n = i.length - 1; 0 <= n; n--) i[n]._target == e && (i[n].paused = !1)
		};
		i.tick = function(t, e) {
			void 0 === e && (e = !1);
			for (var n = i._tweens.concat(), r = n.length - 1; 0 <= r; r--) {
				var o = n[r];
				e && !o.ignoreGlobalPause || o.paused || o.tick(o._useTicks ? 1 : t)
			}
		};
		i._register = function(e, n) {
			var r = e._target,
				o = i._tweens;
			if (n) r && (r.tween_count = r.tween_count ? r.tween_count + 1 : 1), o.push(e), i._inited || (t.Ticker.getInstance().register(i.tick, null), i._inited = !0);
			else
				for (r && r.tween_count--, r = o.length; r--;)
					if (o[r] == e) {
						o.splice(r, 1);
						break
					}
		};
		i.removeAllTweens = function() {
			for (var t = i._tweens, e = 0, n = t.length; e < n; e++) {
				var r = t[e];
				r.paused = !0;
				r._target.tweenjs_count = 0
			}
			t.length = 0
		};
		i.prototype.initialize = function(t, e, n) {
			this._target = t;
			e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && i.removeTweens(t));
			this.pluginData = n || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			e && e.paused ? this.paused = !0 : i._register(this, !0);
			e && null != e.position && this.setPosition(e.position, i.NONE)
		};
		i.prototype.setPosition = function(t, e) {
			void 0 === e && (e = 1);
			0 > t && (t = 0);
			var i = t,
				n = !1;
			i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, n = !0));
			if (i == this._prevPos) return n;
			var r = this._prevPos;
			this.position = this._prevPos = i;
			this._prevPosition = t;
			if (this._target)
				if (n) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
				for (var o = 0, s = this._steps.length; o < s && !(this._steps[o].t > i); o++);
				o = this._steps[o - 1];
				this._updateTargetProps(o, (this._stepPosition = i - o.t) / o.d)
			}
			0 != e && 0 < this._actions.length && (this._useTicks ? this._runActions(i, i) : 1 == e && i < r ? (r != this.duration && this._runActions(r, this.duration), this._runActions(0, i, !0)) : this._runActions(r, i));
			n && this.setPaused(!0);
			this.dispatchEventWith("change");
			return n
		};
		i.prototype._runActions = function(t, e, i) {
			void 0 === i && (i = !1);
			var n = t,
				r = e,
				o = -1,
				s = this._actions.length,
				a = 1;
			t > e && (n = e, r = t, o = s, s = a = -1);
			for (;
				(o += a) != s;) {
				e = this._actions[o];
				var h = e.t;
				(h == r || h > n && h < r || i && h == t) && e.f.apply(e.o, e.p)
			}
		};
		i.prototype._updateTargetProps = function(t, e) {
			var n, r, o, s;
			if (t || 1 != e) {
				if (this.passive = !!t.v) return;
				t.e && (e = t.e(e, 0, 1, 1));
				n = t.p0;
				r = t.p1
			} else this.passive = !1, n = r = this._curQueueProps;
			for (var a in this._initQueueProps) {
				null == (o = n[a]) && (n[a] = o = this._initQueueProps[a]);
				null == (s = r[a]) && (r[a] = s = o);
				o = o == s || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? s : o : o + (s - o) * e;
				var h = !1;
				if (s = i._plugins[a])
					for (var c = 0, u = s.length; c < u; c++) {
						var l = s[c].tween(this, a, o, n, r, e, !!t && n == r, !t);
						l == i.IGNORE ? h = !0 : o = l
					}
				h || (this._target[a] = o)
			}
		};
		i.prototype.setPaused = function(t) {
			this.paused = t;
			i._register(this, !t);
			return this
		};
		i.prototype._cloneProps = function(t) {
			var e = {},
				i;
			for (i in t) e[i] = t[i];
			return e
		};
		i.prototype._addStep = function(t) {
			0 < t.d && (this._steps.push(t), t.t = this.duration, this.duration += t.d);
			return this
		};
		i.prototype._appendQueueProps = function(t) {
			var e, n, r, o, s, a;
			for (a in t)
				if (void 0 === this._initQueueProps[a]) {
					n = this._target[a];
					if (e = i._plugins[a])
						for (r = 0, o = e.length; r < o; r++) n = e[r].init(this, a, n);
					this._initQueueProps[a] = this._curQueueProps[a] = void 0 === n ? null : n
				}
			for (a in t) {
				n = this._curQueueProps[a];
				if (e = i._plugins[a])
					for (s = s || {}, r = 0, o = e.length; r < o; r++) e[r].step && e[r].step(this, a, n, t[a], s);
				this._curQueueProps[a] = t[a]
			}
			s && this._appendQueueProps(s);
			return this._curQueueProps
		};
		i.prototype._addAction = function(t) {
			t.t = this.duration;
			this._actions.push(t);
			return this
		};
		i.prototype._set = function(t, e) {
			for (var i in t) e[i] = t[i]
		};
		i.prototype.wait = function(t, e) {
			if (null == t || 0 >= t) return this;
			var i = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: t,
				p0: i,
				p1: i,
				v: e
			})
		};
		i.prototype.to = function(t, e, i) {
			void 0 === i && (i = void 0);
			if (isNaN(e) || 0 > e) e = 0;
			return this._addStep({
				d: e || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: i,
				p1: this._cloneProps(this._appendQueueProps(t))
			})
		};
		i.prototype.call = function(t, e, i) {
			void 0 === e && (e = void 0);
			void 0 === i && (i = void 0);
			return this._addAction({
				f: t,
				p: i ? i : [],
				o: e ? e : this._target
			})
		};
		i.prototype.set = function(t, e) {
			void 0 === e && (e = null);
			return this._addAction({
				f: this._set,
				o: this,
				p: [t, e ? e : this._target]
			})
		};
		i.prototype.play = function(t) {
			t || (t = this);
			return this.call(t.setPaused, t, [!1])
		};
		i.prototype.pause = function(t) {
			t || (t = this);
			return this.call(t.setPaused, t, [!0])
		};
		i.prototype.tick = function(t) {
			this.paused || this.setPosition(this._prevPosition + t)
		};
		i.NONE = 0;
		i.LOOP = 1;
		i.REVERSE = 2;
		i._tweens = [];
		i.IGNORE = {};
		i._plugins = {};
		i._inited = !1;
		return i
	}(t.EventDispatcher);
	t.Tween = e;
	e.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function e() {
			t.Logger.fatal("Ease不能被实例化")
		}
		e.get = function(t) {
			-1 > t && (t = -1);
			1 < t && (t = 1);
			return function(e) {
				return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
			}
		};
		e.getPowIn = function(t) {
			return function(e) {
				return Math.pow(e, t)
			}
		};
		e.getPowOut = function(t) {
			return function(e) {
				return 1 - Math.pow(1 - e, t)
			}
		};
		e.getPowInOut = function(t) {
			return function(e) {
				return 1 > (e *= 2) ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
			}
		};
		e.sineIn = function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		};
		e.sineOut = function(t) {
			return Math.sin(t * Math.PI / 2)
		};
		e.sineInOut = function(t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		};
		e.getBackIn = function(t) {
			return function(e) {
				return e * e * ((t + 1) * e - t)
			}
		};
		e.getBackOut = function(t) {
			return function(e) {
				return --e * e * ((t + 1) * e + t) + 1
			}
		};
		e.getBackInOut = function(t) {
			t *= 1.525;
			return function(e) {
				return 1 > (e *= 2) ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
			}
		};
		e.circIn = function(t) {
			return -(Math.sqrt(1 - t * t) - 1)
		};
		e.circOut = function(t) {
			return Math.sqrt(1 - --t * t)
		};
		e.circInOut = function(t) {
			return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		};
		e.bounceIn = function(t) {
			return 1 - e.bounceOut(1 - t)
		};
		e.bounceOut = function(t) {
			return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		};
		e.bounceInOut = function(t) {
			return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
		};
		e.getElasticIn = function(t, e) {
			var i = 2 * Math.PI;
			return function(n) {
				if (0 == n || 1 == n) return n;
				var r = e / i * Math.asin(1 / t);
				return -(t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - r) * i / e))
			}
		};
		e.getElasticOut = function(t, e) {
			var i = 2 * Math.PI;
			return function(n) {
				if (0 == n || 1 == n) return n;
				var r = e / i * Math.asin(1 / t);
				return t * Math.pow(2, -10 * n) * Math.sin((n - r) * i / e) + 1
			}
		};
		e.getElasticInOut = function(t, e) {
			var i = 2 * Math.PI;
			return function(n) {
				var r = e / i * Math.asin(1 / t);
				return 1 > (n *= 2) ? -.5 * t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - r) * i / e) : t * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - r) * i / e) * .5 + 1
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
		e.elasticIn = e.getElasticIn(1, .3);
		e.elasticOut = e.getElasticOut(1, .3);
		e.elasticInOut = e.getElasticInOut(1, .3 * 1.5);
		return e
	}();
	t.Ease = e;
	e.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {
			this.type = t.EFFECT
		}
		t.prototype.play = function(t) {
			void 0 === t && (t = !1);
			var e = this.audio;
			e && (isNaN(e.duration) || (e.currentTime = 0), e.loop = t, e.play())
		};
		t.prototype.pause = function() {
			var t = this.audio;
			t && t.pause()
		};
		t.prototype.load = function() {
			var t = this.audio;
			t && t.load()
		};
		t.prototype.addEventListener = function(t, e) {
			this.audio && this.audio.addEventListener(t, e, !1)
		};
		t.prototype.removeEventListener = function(t, e) {
			this.audio && this.audio.removeEventListener(t, e, !1)
		};
		t.prototype.setVolume = function(t) {
			var e = this.audio;
			e && (e.volume = t)
		};
		t.prototype.getVolume = function() {
			return this.audio ? this.audio.volume : 0
		};
		t.prototype.preload = function(t) {
			this.type = t
		};
		t.prototype._setAudio = function(t) {
			this.audio = t
		};
		t.MUSIC = "music";
		t.EFFECT = "effect";
		return t
	}();
	t.Sound = e;
	e.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.isNumber = function(t) {
			return "number" === typeof t && !isNaN(t)
		};
		t.sin = function(t) {
			t = Math.round(t);
			t %= 360;
			0 > t && (t += 360);
			return 90 > t ? egret_sin_map[t] : 180 > t ? egret_cos_map[t - 90] : 270 > t ? -egret_sin_map[t - 180] : -egret_cos_map[t - 270]
		};
		t.cos = function(t) {
			t = Math.round(t);
			t %= 360;
			0 > t && (t += 360);
			return 90 > t ? egret_cos_map[t] : 180 > t ? -egret_sin_map[t - 90] : 270 > t ? -egret_cos_map[t - 180] : egret_sin_map[t - 270]
		};
		return t
	}();
	t.NumberUtils = e;
	e.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(t) {
	if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	var e = Array.prototype.slice.call(arguments, 1),
		i = this,
		n = function() {},
		r = function() {
			return i.apply(this instanceof n && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
		};
	n.prototype = this.prototype;
	r.prototype = new n;
	return r
});
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	RES;
(function(t) {
	var e = function(t) {
		function e(e, i, n) {
			void 0 === i && (i = !1);
			void 0 === n && (n = !1);
			t.call(this, e, i, n);
			this.itemsTotal = this.itemsLoaded = 0
		}
		__extends(e, t);
		e.dispatchResourceEvent = function(t, i, n, r, o, s) {
			void 0 === n && (n = "");
			void 0 === r && (r = null);
			void 0 === o && (o = 0);
			void 0 === s && (s = 0);
			var a = egret.Event._getPropertyData(e);
			a.groupName = n;
			a.resItem = r;
			a.itemsLoaded = o;
			a.itemsTotal = s;
			egret.Event._dispatchByTarget(e, t, i, a)
		};
		e.ITEM_LOAD_ERROR = "itemLoadError";
		e.CONFIG_COMPLETE = "configComplete";
		e.CONFIG_LOAD_ERROR = "configLoadError";
		e.GROUP_PROGRESS = "groupProgress";
		e.GROUP_COMPLETE = "groupComplete";
		e.GROUP_LOAD_ERROR = "groupLoadError";
		return e
	}(egret.Event);
	t.ResourceEvent = e;
	e.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(t) {
	var e = function() {
		function t(t, e, i) {
			this._loaded = !1;
			this.name = t;
			this.url = e;
			this.type = i
		}
		Object.defineProperty(t.prototype, "loaded", {
			get: function() {
				return this.data ? this.data.loaded : this._loaded
			},
			set: function(t) {
				this.data && (this.data.loaded = t);
				this._loaded = t
			},
			enumerable: !0,
			configurable: !0
		});
		t.prototype.toString = function() {
			return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
		};
		t.TYPE_XML = "xml";
		t.TYPE_IMAGE = "image";
		t.TYPE_BIN = "bin";
		t.TYPE_TEXT = "text";
		t.TYPE_JSON = "json";
		t.TYPE_SHEET = "sheet";
		t.TYPE_FONT = "font";
		t.TYPE_SOUND = "sound";
		return t
	}();
	t.ResourceItem = e;
	e.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(t) {
	var e = function() {
		function e() {
			this.keyMap = {};
			this.groupDic = {};
			t.configInstance = this
		}
		e.prototype.getGroupByName = function(t) {
			var e = [];
			if (!this.groupDic[t]) return e;
			t = this.groupDic[t];
			for (var i = t.length, n = 0; n < i; n++) e.push(this.parseResourceItem(t[n]));
			return e
		};
		e.prototype.getRawGroupByName = function(t) {
			return this.groupDic[t] ? this.groupDic[t] : []
		};
		e.prototype.createGroup = function(t, e, i) {
			void 0 === i && (i = !1);
			if (!i && this.groupDic[t] || !e || 0 == e.length) return !1;
			i = this.groupDic;
			for (var n = [], r = e.length, o = 0; o < r; o++) {
				var s = e[o],
					a = i[s];
				if (a)
					for (var s = a.length, h = 0; h < s; h++) {
						var c = a[h]; - 1 == n.indexOf(c) && n.push(c)
					} else(c = this.keyMap[s]) && -1 == n.indexOf(c) && n.push(c)
			}
			if (0 == n.length) return !1;
			this.groupDic[t] = n;
			return !0
		};
		e.prototype.parseConfig = function(t, e) {
			if (t) {
				var i = t.resources;
				if (i)
					for (var n = i.length, r = 0; r < n; r++) {
						var o = i[r],
							s = o.url;
						s && -1 == s.indexOf("://") && (o.url = e + s);
						this.addItemToKeyMap(o)
					}
				if (i = t.groups)
					for (n = i.length, r = 0; r < n; r++) {
						for (var s = i[r], a = [], h = s.keys.split(","), c = h.length, u = 0; u < c; u++) o = h[u].trim(), (o = this.keyMap[o]) && -1 == a.indexOf(o) && a.push(o);
						this.groupDic[s.name] = a
					}
			}
		};
		e.prototype.addSubkey = function(t, e) {
			var i = this.keyMap[e];
			i && !this.keyMap[t] && (this.keyMap[t] = i)
		};
		e.prototype.addItemToKeyMap = function(t) {
			this.keyMap[t.name] || (this.keyMap[t.name] = t);
			if (t.hasOwnProperty("subkeys")) {
				var e = t.subkeys.split(",");
				t.subkeys = e;
				for (var i = e.length, n = 0; n < i; n++) {
					var r = e[n];
					null == this.keyMap[r] && (this.keyMap[r] = t)
				}
			}
		};
		e.prototype.getName = function(t) {
			return (t = this.keyMap[t]) ? t.name : ""
		};
		e.prototype.getType = function(t) {
			return (t = this.keyMap[t]) ? t.type : ""
		};
		e.prototype.getRawResourceItem = function(t) {
			return this.keyMap[t]
		};
		e.prototype.getResourceItem = function(t) {
			return (t = this.keyMap[t]) ? this.parseResourceItem(t) : null
		};
		e.prototype.parseResourceItem = function(e) {
			var i = new t.ResourceItem(e.name, e.url, e.type);
			i.data = e;
			return i
		};
		return e
	}();
	t.ResourceConfig = e;
	e.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
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
		__extends(i, e);
		i.prototype.isGroupInLoading = function(t) {
			return void 0 !== this.itemListDic[t]
		};
		i.prototype.loadGroup = function(e, i, n) {
			void 0 === n && (n = 0);
			if (!this.itemListDic[i] && i)
				if (e && 0 != e.length) {
					this.priorityQueue[n] ? this.priorityQueue[n].push(i) : this.priorityQueue[n] = [i];
					this.itemListDic[i] = e;
					n = e.length;
					for (var r = 0; r < n; r++) e[r].groupName = i;
					this.groupTotalDic[i] = e.length;
					this.numLoadedDic[i] = 0;
					this.next()
				} else egret.Logger.warning('RES加载了不存在或空的资源组："' + i + '"'), e = new t.ResourceEvent(t.ResourceEvent.GROUP_LOAD_ERROR), e.groupName = i, this.dispatchEvent(e)
		};
		i.prototype.loadItem = function(t) {
			this.lazyLoadList.push(t);
			t.groupName = "";
			this.next()
		};
		i.prototype.next = function() {
			for (; this.loadingCount < this.thread;) {
				var e = this.getOneResourceItem();
				if (!e) break;
				this.loadingCount++;
				if (e.loaded) this.onItemComplete(e);
				else {
					var i = this.analyzerDic[e.type];
					i || (i = this.analyzerDic[e.type] = egret.Injector.getInstance(t.AnalyzerBase, e.type));
					i.loadFile(e, this.onItemComplete, this)
				}
			}
		};
		i.prototype.getOneResourceItem = function() {
			if (0 < this.failedList.length) return this.failedList.shift();
			var t = Number.NEGATIVE_INFINITY,
				e;
			for (e in this.priorityQueue) t = Math.max(t, e);
			t = this.priorityQueue[t];
			if (!t || 0 == t.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
			e = t.length;
			for (var i, n = 0; n < e; n++) {
				this.queueIndex >= e && (this.queueIndex = 0);
				i = this.itemListDic[t[this.queueIndex]];
				if (0 < i.length) break;
				this.queueIndex++
			}
			return 0 == i.length ? null : i.shift()
		};
		i.prototype.onItemComplete = function(e) {
			this.loadingCount--;
			var i = e.groupName;
			if (!e.loaded) {
				var n = this.retryTimesDic[e.name] || 1;
				if (n > this.maxRetryTimes) delete this.retryTimesDic[e.name], t.ResourceEvent.dispatchResourceEvent(this.resInstance, t.ResourceEvent.ITEM_LOAD_ERROR, i, e);
				else {
					this.retryTimesDic[e.name] = n + 1;
					this.failedList.push(e);
					this.next();
					return
				}
			}
			if (i) {
				this.numLoadedDic[i] ++;
				var n = this.numLoadedDic[i],
					r = this.groupTotalDic[i];
				e.loaded || (this.groupErrorDic[i] = !0);
				t.ResourceEvent.dispatchResourceEvent(this.resInstance, t.ResourceEvent.GROUP_PROGRESS, i, e, n, r);
				n == r && (e = this.groupErrorDic[i], this.removeGroupName(i), delete this.groupTotalDic[i], delete this.numLoadedDic[i], delete this.itemListDic[i], delete this.groupErrorDic[i], e ? t.ResourceEvent.dispatchResourceEvent(this, t.ResourceEvent.GROUP_LOAD_ERROR, i) : t.ResourceEvent.dispatchResourceEvent(this, t.ResourceEvent.GROUP_COMPLETE, i))
			} else this.callBack.call(this.resInstance, e);
			this.next()
		};
		i.prototype.removeGroupName = function(t) {
			for (var e in this.priorityQueue) {
				for (var i = this.priorityQueue[e], n = i.length, r = 0, o = !1, n = i.length, s = 0; s < n; s++) {
					if (i[s] == t) {
						i.splice(r, 1);
						o = !0;
						break
					}
					r++
				}
				if (o) {
					0 == i.length && delete this.priorityQueue[e];
					break
				}
			}
		};
		return i
	}(egret.EventDispatcher);
	t.ResourceLoader = e;
	e.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this.resourceConfig = t.configInstance
		}
		__extends(i, e);
		i.prototype.addSubkey = function(t, e) {
			this.resourceConfig.addSubkey(t, e)
		};
		i.prototype.loadFile = function(t, e, i) {};
		i.prototype.getRes = function(t) {};
		i.prototype.destroyRes = function(t) {
			return !1
		};
		i.getStringPrefix = function(t) {
			if (!t) return "";
			var e = t.indexOf(".");
			return -1 != e ? t.substring(0, e) : ""
		};
		i.getStringTail = function(t) {
			if (!t) return "";
			var e = t.indexOf(".");
			return -1 != e ? t.substring(e + 1) : ""
		};
		return i
	}(egret.HashObject);
	t.AnalyzerBase = e;
	e.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler
		}
		__extends(e, t);
		e.prototype.loadFile = function(t, e, i) {
			if (this.fileDic[t.name]) e.call(i, t);
			else {
				var n = this.getLoader();
				this.resItemDic[n.hashCode] = {
					item: t,
					func: e,
					thisObject: i
				};
				n.load(new egret.URLRequest(t.url))
			}
		};
		e.prototype.getLoader = function() {
			var t = this.recycler.pop();
			t || (t = new egret.URLLoader, t.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), t.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			t.dataFormat = this._dataFormat;
			return t
		};
		e.prototype.onLoadFinish = function(t) {
			var e = t.target,
				i = this.resItemDic[e.hashCode];
			delete this.resItemDic[e.hashCode];
			this.recycler.push(e);
			var n = i.item,
				r = i.func;
			n.loaded = t.type == egret.Event.COMPLETE;
			n.loaded && this.analyzeData(n, e.data);
			r.call(i.thisObject, n)
		};
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			!this.fileDic[i] && e && (this.fileDic[i] = e)
		};
		e.prototype.getRes = function(t) {
			return this.fileDic[t]
		};
		e.prototype.hasRes = function(t) {
			return null != this.getRes(t)
		};
		e.prototype.destroyRes = function(t) {
			return this.fileDic[t] ? (delete this.fileDic[t], !0) : !1
		};
		return e
	}(t.AnalyzerBase);
	t.BinAnalyzer = e;
	e.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
		}
		__extends(e, t);
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			!this.fileDic[i] && e && (this.fileDic[i] = e, (i = t.data) && i.scale9grid && (i = i.scale9grid.split(","), e.scale9Grid = new egret.Rectangle(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3]))))
		};
		return e
	}(t.BinAnalyzer);
	t.ImageAnalyzer = e;
	e.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(e, t);
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			if (!this.fileDic[i] && e) try {
				this.fileDic[i] = JSON.parse(e)
			} catch (n) {
				egret.Logger.warning("JSON文件格式不正确: " + t.url + "\ndata:" + e)
			}
		};
		return e
	}(t.BinAnalyzer);
	t.JsonAnalyzer = e;
	e.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(e, t);
		return e
	}(t.BinAnalyzer);
	t.TextAnalyzer = e;
	e.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(i, e);
		i.prototype.getRes = function(e) {
			var i = this.fileDic[e];
			i || (i = this.textureMap[e]);
			!i && (i = t.AnalyzerBase.getStringPrefix(e), i = this.fileDic[i]) && (e = t.AnalyzerBase.getStringTail(e), i = i.getTexture(e));
			return i
		};
		i.prototype.onLoadFinish = function(t) {
			var e = t.target,
				i = this.resItemDic[e.hashCode];
			delete this.resItemDic[e.hashCode];
			this.recycler.push(e);
			var n = i.item,
				r = i.func;
			n.loaded = t.type == egret.Event.COMPLETE;
			n.loaded && this.analyzeData(n, e.data);
			"string" == typeof e.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(n, r, i.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : r.call(i.thisObject, n)
		};
		i.prototype.analyzeData = function(t, e) {
			var i = t.name;
			if (!this.fileDic[i] && e) {
				var n;
				if ("string" == typeof e) {
					try {
						n = JSON.parse(e)
					} catch (r) {
						egret.Logger.warning("JSON文件格式不正确: " + t.url)
					}
					n && (this.sheetMap[i] = n, t.loaded = !1, t.url = this.getRelativePath(t.url, n.file))
				} else n = this.sheetMap[i], delete this.sheetMap[i], e && (n = this.parseSpriteSheet(e, n, t.data && t.data.subkeys ? "" : i), this.fileDic[i] = n)
			}
		};
		i.prototype.getRelativePath = function(t, e) {
			t = t.split("\\").join("/");
			var i = t.lastIndexOf("/");
			return t = -1 != i ? t.substring(0, i + 1) + e : e
		};
		i.prototype.parseSpriteSheet = function(t, e, i) {
			e = e.frames;
			if (!e) return null;
			var n = new egret.SpriteSheet(t),
				r = this.textureMap,
				o;
			for (o in e) {
				var s = e[o];
				t = n.createTexture(o, s.x, s.y, s.w, s.h, s.offX, s.offY, s.sourceW, s.sourceH);
				s.scale9grid && (s = s.scale9grid.split(","), t.scale9Grid = new egret.Rectangle(parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])));
				null == r[o] && (r[o] = t, i && this.addSubkey(o, i))
			}
			return n
		};
		return i
	}(t.BinAnalyzer);
	t.SheetAnalyzer = e;
	e.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this)
		}
		__extends(e, t);
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			if (!this.fileDic[i] && e) {
				var n;
				"string" == typeof e ? (n = e, this.sheetMap[i] = n, t.loaded = !1, t.url = this.getTexturePath(t.url, n)) : (n = this.sheetMap[i], delete this.sheetMap[i], e && (n = new egret.BitmapTextSpriteSheet(e, n), this.fileDic[i] = n))
			}
		};
		e.prototype.getTexturePath = function(t, e) {
			var i = "",
				n = e.split("\n")[2],
				r = n.indexOf('file="'); - 1 != r && (n = n.substring(r + 6), r = n.indexOf('"'), i = n.substring(0, r));
			t = t.split("\\").join("/");
			r = t.lastIndexOf("/");
			return t = -1 != r ? t.substring(0, r + 1) + i : i
		};
		return e
	}(t.SheetAnalyzer);
	t.FontAnalyzer = e;
	e.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(e, t);
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			!this.fileDic[i] && e && (this.fileDic[i] = e, (i = t.data) && i.soundType ? e.preload(i.soundType) : e.preload(egret.Sound.EFFECT))
		};
		return e
	}(t.BinAnalyzer);
	t.SoundAnalyzer = e;
	e.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(t) {
		function e() {
			t.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(e, t);
		e.prototype.analyzeData = function(t, e) {
			var i = t.name;
			if (!this.fileDic[i] && e) try {
				var n = egret.XML.parse(e);
				this.fileDic[i] = n
			} catch (r) {}
		};
		return e
	}(t.BinAnalyzer);
	t.XMLAnalyzer = e;
	e.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	t.loadConfig = function(t, e, n) {
		void 0 === e && (e = "");
		void 0 === n && (n = "json");
		i.loadConfig(t, e, n)
	};
	t.loadGroup = function(t, e) {
		void 0 === e && (e = 0);
		i.loadGroup(t, e)
	};
	t.isGroupLoaded = function(t) {
		return i.isGroupLoaded(t)
	};
	t.getGroupByName = function(t) {
		return i.getGroupByName(t)
	};
	t.createGroup = function(t, e, n) {
		void 0 === n && (n = !1);
		return i.createGroup(t, e, n)
	};
	t.hasRes = function(t) {
		return i.hasRes(t)
	};
	t.getRes = function(t) {
		return i.getRes(t)
	};
	t.getResAsync = function(t, e, n) {
		i.getResAsync(t, e, n)
	};
	t.getResByUrl = function(t, e, n, r) {
		void 0 === r && (r = "");
		i.getResByUrl(t, e, n, r)
	};
	t.destroyRes = function(t) {
		return i.destroyRes(t)
	};
	t.setMaxLoadingThread = function(t) {
		i.setMaxLoadingThread(t)
	};
	t.addEventListener = function(t, e, n, r, o) {
		void 0 === r && (r = !1);
		void 0 === o && (o = 0);
		i.addEventListener(t, e, n, r, o)
	};
	t.removeEventListener = function(t, e, n, r) {
		void 0 === r && (r = !1);
		i.removeEventListener(t, e, n, r)
	};
	var e = function(e) {
		function i() {
			e.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups = [];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(i, e);
		i.prototype.getAnalyzerByType = function(e) {
			var i = this.analyzerDic[e];
			i || (i = this.analyzerDic[e] = egret.Injector.getInstance(t.AnalyzerBase, e));
			return i
		};
		i.prototype.init = function() {
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(t.AnalyzerBase, t.BinAnalyzer, t.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(t.AnalyzerBase, t.ImageAnalyzer, t.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(t.AnalyzerBase, t.TextAnalyzer, t.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(t.AnalyzerBase, t.JsonAnalyzer, t.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(t.AnalyzerBase, t.SheetAnalyzer, t.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(t.AnalyzerBase, t.FontAnalyzer, t.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(t.AnalyzerBase, t.SoundAnalyzer, t.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(t.AnalyzerBase, t.ResourceItem.TYPE_XML) || egret.Injector.mapClass(t.AnalyzerBase, t.XMLAnalyzer, t.ResourceItem.TYPE_XML);
			this.resConfig = new t.ResourceConfig;
			this.resLoader = new t.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(t.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
			this.resLoader.addEventListener(t.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
		};
		i.prototype.loadConfig = function(t, e, i) {
			void 0 === i && (i = "json");
			this.configItemList.push({
				url: t,
				resourceRoot: e,
				type: i
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		i.prototype.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var e = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = e;
			for (var n = e.length, r = [], o = 0; o < n; o++) {
				var s = e[o],
					s = new t.ResourceItem(s.url, s.url, s.type);
				r.push(s)
			}
			this.resLoader.loadGroup(r, i.GROUP_CONFIG, Number.MAX_VALUE)
		};
		i.prototype.isGroupLoaded = function(t) {
			return -1 != this.loadedGroups.indexOf(t)
		};
		i.prototype.getGroupByName = function(t) {
			return this.resConfig.getGroupByName(t)
		};
		i.prototype.loadGroup = function(e, i) {
			void 0 === i && (i = 0);
			if (-1 != this.loadedGroups.indexOf(e)) t.ResourceEvent.dispatchResourceEvent(this, t.ResourceEvent.GROUP_COMPLETE, e);
			else if (!this.resLoader.isGroupInLoading(e))
				if (this.configComplete) {
					var n = this.resConfig.getGroupByName(e);
					this.resLoader.loadGroup(n, e, i)
				} else this.groupNameList.push({
					name: e,
					priority: i
				})
		};
		i.prototype.createGroup = function(t, e, i) {
			void 0 === i && (i = !1);
			if (i) {
				var n = this.loadedGroups.indexOf(t); - 1 != n && this.loadedGroups.splice(n, 1)
			}
			return this.resConfig.createGroup(t, e, i)
		};
		i.prototype.onGroupComp = function(e) {
			if (e.groupName == i.GROUP_CONFIG) {
				e = this.loadingConfigList.length;
				for (var n = 0; n < e; n++) {
					var r = this.loadingConfigList[n],
						o = this.getAnalyzerByType(r.type),
						s = o.getRes(r.url);
					o.destroyRes(r.url);
					this.resConfig.parseConfig(s, r.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList = null;
				t.ResourceEvent.dispatchResourceEvent(this, t.ResourceEvent.CONFIG_COMPLETE);
				r = this.groupNameList;
				e = r.length;
				for (n = 0; n < e; n++) o = r[n], this.loadGroup(o.name, o.priority);
				this.groupNameList = []
			} else this.loadedGroups.push(e.groupName), this.dispatchEvent(e)
		};
		i.prototype.onGroupError = function(e) {
			e.groupName == i.GROUP_CONFIG ? (this.loadingConfigList = null, t.ResourceEvent.dispatchResourceEvent(this, t.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(e)
		};
		i.prototype.hasRes = function(e) {
			var i = this.resConfig.getType(e);
			return "" == i && (e = t.AnalyzerBase.getStringPrefix(e), i = this.resConfig.getType(e), "" == i) ? !1 : !0
		};
		i.prototype.getRes = function(e) {
			var i = this.resConfig.getType(e);
			return "" == i && (i = t.AnalyzerBase.getStringPrefix(e), i = this.resConfig.getType(i), "" == i) ? null : this.getAnalyzerByType(i).getRes(e)
		};
		i.prototype.getResAsync = function(e, i, n) {
			var r = this.resConfig.getType(e),
				o = this.resConfig.getName(e);
			if ("" == r && (o = t.AnalyzerBase.getStringPrefix(e), r = this.resConfig.getType(o), "" == r)) {
				i.call(n, null);
				return
			}(r = this.getAnalyzerByType(r).getRes(e)) ? i.call(n, r): (e = {
				key: e,
				compFunc: i,
				thisObject: n
			}, this.asyncDic[o] ? this.asyncDic[o].push(e) : (this.asyncDic[o] = [e], o = this.resConfig.getResourceItem(o), this.resLoader.loadItem(o)))
		};
		i.prototype.getResByUrl = function(e, i, n, r) {
			void 0 === r && (r = "");
			if (e) {
				r || (r = this.getTypeByUrl(e));
				var o = this.getAnalyzerByType(r).getRes(e);
				o ? i.call(n, o) : (i = {
					key: e,
					compFunc: i,
					thisObject: n
				}, this.asyncDic[e] ? this.asyncDic[e].push(i) : (this.asyncDic[e] = [i], e = new t.ResourceItem(e, e, r), this.resLoader.loadItem(e)))
			} else i.call(n, null)
		};
		i.prototype.getTypeByUrl = function(e) {
			(e = e.substr(e.lastIndexOf(".") + 1)) && (e = e.toLowerCase());
			switch (e) {
				case t.ResourceItem.TYPE_XML:
				case t.ResourceItem.TYPE_JSON:
				case t.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
					e = t.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					e = t.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					e = t.ResourceItem.TYPE_TEXT;
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
					e = t.ResourceItem.TYPE_SOUND;
					break;
				default:
					e = t.ResourceItem.TYPE_BIN
			}
			return e
		};
		i.prototype.onResourceItemComp = function(t) {
			var e = this.asyncDic[t.name];
			delete this.asyncDic[t.name];
			t = this.getAnalyzerByType(t.type);
			for (var i = e.length, n = 0; n < i; n++) {
				var r = e[n],
					o = t.getRes(r.key);
				r.compFunc.call(r.thisObject, o, r.key)
			}
		};
		i.prototype.destroyRes = function(t) {
			var e = this.resConfig.getRawGroupByName(t);
			if (e) {
				var i = this.loadedGroups.indexOf(t); - 1 != i && this.loadedGroups.splice(i, 1);
				t = e.length;
				for (var n = 0; n < t; n++) {
					i = e[n];
					i.loaded = !1;
					var r = this.getAnalyzerByType(i.type);
					r.destroyRes(i.name)
				}
				return !0
			}
			e = this.resConfig.getType(t);
			if ("" == e) return !1;
			i = this.resConfig.getRawResourceItem(t);
			i.loaded = !1;
			r = this.getAnalyzerByType(e);
			return r.destroyRes(t)
		};
		i.prototype.setMaxLoadingThread = function(t) {
			1 > t && (t = 1);
			this.resLoader.thread = t
		};
		i.GROUP_CONFIG = "RES__CONFIG";
		return i
	}(egret.EventDispatcher);
	e.prototype.__class__ = "RES.Resource";
	var i = new e
})(RES || (RES = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t) {
			void 0 === t && (t = 60);
			e.call(this);
			this.frameRate = t;
			this._time = 0;
			this._isActivate = !0;
			60 == t && (i.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, i.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
				return window.setTimeout(e, 1e3 / t)
			});
			i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
				return window.clearTimeout(t)
			});
			i.instance = this;
			this.registerListener()
		}
		__extends(i, e);
		i.prototype.enterFrame = function() {
			var e = i.instance,
				n = i._thisObject,
				r = i._callback,
				o = t.getTimer(),
				s = o - e._time;
			e._requestAnimationId = i.requestAnimationFrame.call(window, i.prototype.enterFrame);
			r.call(n, s);
			e._time = o
		};
		i.prototype.executeMainLoop = function(t, e) {
			i._callback = t;
			i._thisObject = e;
			this.enterFrame()
		};
		i.prototype.reset = function() {
			var e = i.instance;
			e._requestAnimationId && (e._time = t.getTimer(), i.cancelAnimationFrame.call(window, e._requestAnimationId), e.enterFrame())
		};
		i.prototype.registerListener = function() {
			var e = this,
				n = function() {
					e._isActivate && (e._isActivate = !1, t.MainContext.instance.stage.dispatchEvent(new t.Event(t.Event.DEACTIVATE)))
				},
				r = function() {
					e._isActivate || (e._isActivate = !0, i.instance.reset(), t.MainContext.instance.stage.dispatchEvent(new t.Event(t.Event.ACTIVATE)))
				},
				o = function() {
					document[s] ? n() : r()
				};
			window.addEventListener("focus", r, !1);
			window.addEventListener("blur", n, !1);
			var s, a;
			"undefined" !== typeof document.hidden ? (s = "hidden", a = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (s = "mozHidden", a = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (s = "msHidden", a = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (s = "webkitHidden", a = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (s = "oHidden", a = "ovisibilitychange");
			"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", r, !1), window.addEventListener("pagehide", n, !1));
			s && a && document.addEventListener(a, o, !1)
		};
		return i
	}(t.DeviceContext);
	t.HTML5DeviceContext = e;
	e.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(t) {
	t.getItem = function(t) {
		return window.localStorage.getItem(t) 
	};
	t.setItem = function(t, e) {
		try {
			return window.localStorage.setItem(t, e), !0
		} catch (i) {
			return console.log("egret_html5_localStorage.setItem保存失败,key=" + t + "&value=" + e), !1
		}
	};
	t.removeItem = function(t) {
		window.localStorage.remove(t)
	};
	t.clear = function() {
		window.localStorage.clear()
	};
	t.init = function() {
		for (var e in t) egret.localStorage[e] = t[e]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(t) {
			e.call(this);
			this.globalAlpha = 1;
			this.canvas = t || this.createCanvas();
			this.canvasContext = this.canvas.getContext("2d");
			this._cacheCanvas = document.createElement("canvas");
			this._cacheCanvas.width = this.canvas.width;
			this._cacheCanvas.height = this.canvas.height;
			this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
			this.onResize();
			var i = this.canvasContext.setTransform,
				n = this;
			this._cacheCanvasContext.setTransform = function(t, e, r, o, s, a) {
				n._matrixA = t;
				n._matrixB = e;
				n._matrixC = r;
				n._matrixD = o;
				n._matrixTx = s;
				n._matrixTy = a;
				i.call(n._cacheCanvasContext, t, e, r, o, s, a)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			this.initBlendMode()
		}
		__extends(i, e);
		i.prototype.createCanvas = function() {
			var e = t.Browser.getInstance().$("#egretCanvas");
			if (!e) {
				var i = document.getElementById(t.StageDelegate.canvas_div_name),
					e = t.Browser.getInstance().$new("canvas");
				e.id = "egretCanvas";
				i.appendChild(e)
			}
			t.MainContext.instance.stage.addEventListener(t.Event.RESIZE, this.onResize, this);
			return e
		};
		i.prototype.onResize = function() {
			if (this.canvas) {
				var e = document.getElementById(t.StageDelegate.canvas_div_name);
				this.canvas.width = t.MainContext.instance.stage.stageWidth;
				this.canvas.height = t.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = e.style.width;
				this.canvas.style.height = e.style.height;
				this._cacheCanvas.width = this.canvas.width;
				this._cacheCanvas.height = this.canvas.height;
				this._cacheCanvasContext.imageSmoothingEnabled = t.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.webkitImageSmoothingEnabled = t.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.mozImageSmoothingEnabled = t.RendererContext.imageSmoothingEnabled;
				this._cacheCanvasContext.msImageSmoothingEnabled = t.RendererContext.imageSmoothingEnabled
			}
		};
		i.prototype.clearScreen = function() {
			for (var e = t.RenderFilter.getInstance().getDrawAreaList(), i = 0, n = e.length; i < n; i++) {
				var r = e[i];
				this.clearRect(r.x, r.y, r.width, r.height)
			}
			e = t.MainContext.instance.stage;
			this._cacheCanvasContext.clearRect(0, 0, e.stageWidth, e.stageHeight);
			this.renderCost = 0
		};
		i.prototype.clearRect = function(t, e, i, n) {
			this.canvasContext.clearRect(t, e, i, n)
		};
		i.prototype.drawImage = function(i, n, r, o, s, a, h, c, u, l) {
			void 0 === l && (l = void 0);
			var p = i._bitmapData;
			a += this._transformTx;
			h += this._transformTy;
			var _ = t.getTimer();
			void 0 === l ? this._cacheCanvasContext.drawImage(p, n, r, o, s, a, h, c, u) : this.drawRepeatImage(i, n, r, o, s, a, h, c, u, l);
			e.prototype.drawImage.call(this, i, n, r, o, s, a, h, c, u, l);
			this.renderCost += t.getTimer() - _
		};
		i.prototype.drawRepeatImage = function(e, i, n, r, o, s, a, h, c, u) {
			if (void 0 === e.pattern) {
				var l = t.MainContext.instance.rendererContext.texture_scale_factor,
					p = e._bitmapData,
					_ = p;
				if (p.width != r || p.height != o || 1 != l) _ = document.createElement("canvas"), _.width = r * l, _.height = o * l, _.getContext("2d").drawImage(p, i, n, r, o, 0, 0, r * l, o * l);
				i = this._cacheCanvasContext.createPattern(_, u);
				e.pattern = i
			}
			this._cacheCanvasContext.fillStyle = e.pattern;
			this._cacheCanvasContext.translate(s, a);
			this._cacheCanvasContext.fillRect(0, 0, h, c);
			this._cacheCanvasContext.translate(-s, -a)
		};
		i.prototype.setTransform = function(t) {
			1 == t.a && 0 == t.b && 0 == t.c && 1 == t.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = t.tx - this._matrixTx, this._transformTy = t.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == t.a && this._matrixB == t.b && this._matrixC == t.c && this._matrixD == t.d && this._matrixTx == t.tx && this._matrixTy == t.ty || this._cacheCanvasContext.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty))
		};
		i.prototype.setAlpha = function(e, i) {
			e != this.globalAlpha && (this._cacheCanvasContext.globalAlpha = this.globalAlpha = e);
			i ? (this.blendValue = this.blendModes[i], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != t.BlendMode.NORMAL && (this.blendValue = this.blendModes[t.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
		};
		i.prototype.initBlendMode = function() {
			this.blendModes = {};
			this.blendModes[t.BlendMode.NORMAL] = "source-over";
			this.blendModes[t.BlendMode.ADD] = "lighter"
		};
		i.prototype.setupFont = function(t, e) {
			void 0 === e && (e = null);
			e = e || {};
			var i = null == e.size ? t._size : e.size,
				n = null == e.fontFamily ? t._fontFamily : e.fontFamily,
				r = this._cacheCanvasContext,
				o = (null == e.italic ? t._italic : e.italic) ? "italic " : "normal ",
				o = o + ((null == e.bold ? t._bold : e.bold) ? "bold " : "normal ");
			r.font = o + (i + "px " + n);
			r.textAlign = "left";
			r.textBaseline = "middle"
		};
		i.prototype.measureText = function(t) {
			return this._cacheCanvasContext.measureText(t).width
		};
		i.prototype.drawText = function(i, n, r, o, s, a) {
			void 0 === a && (a = null);
			this.setupFont(i, a);
			a = a || {};
			var h;
			h = null != a.textColor ? t.toColorString(a.textColor) : i._textColorString;
			var c;
			c = null != a.strokeColor ? t.toColorString(a.strokeColor) : i._strokeColorString;
			var u;
			u = null != a.stroke ? a.stroke : i._stroke;
			var l = this._cacheCanvasContext;
			l.fillStyle = h;
			l.strokeStyle = c;
			u && (l.lineWidth = 2 * u, l.strokeText(n, r + this._transformTx, o + this._transformTy, s || 65535));
			l.fillText(n, r + this._transformTx, o + this._transformTy, s || 65535);
			e.prototype.drawText.call(this, i, n, r, o, s, a)
		};
		i.prototype.strokeRect = function(t, e, i, n, r) {
			this._cacheCanvasContext.strokeStyle = r;
			this._cacheCanvasContext.strokeRect(t, e, i, n)
		};
		i.prototype.pushMask = function(t) {
			this._cacheCanvasContext.save();
			this._cacheCanvasContext.beginPath();
			this._cacheCanvasContext.rect(t.x + this._transformTx, t.y + this._transformTy, t.width, t.height);
			this._cacheCanvasContext.clip();
			this._cacheCanvasContext.closePath()
		};
		i.prototype.popMask = function() {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		i.prototype.onRenderStart = function() {
			this._cacheCanvasContext.save()
		};
		i.prototype.onRenderFinish = function() {
			this._cacheCanvasContext.restore();
			this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
			for (var e = this._cacheCanvas.width, i = this._cacheCanvas.height, n = t.RenderFilter.getInstance().getDrawAreaList(), r = 0, o = n.length; r < o; r++) {
				var s = n[r],
					a = s.x,
					h = s.y,
					c = s.width,
					s = s.height;
				a + c > e && (c = e - a);
				h + s > i && (s = i - h);
				0 < c && 0 < s && this.canvasContext.drawImage(this._cacheCanvas, a, h, c, s, a, h, c, s)
			}
		};
		return i
	}(t.RendererContext);
	t.HTML5CanvasRenderer = e;
	e.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(t) {
	t.beginFill = function(t, i) {
		void 0 === i && (i = 1);
		var n = "rgba(" + (t >> 16) + "," + ((t & 65280) >> 8) + "," + (t & 255) + "," + i + ")";
		this.fillStyleColor = n;
		this.commandQueue.push(new e(this._setStyle, this, [n]))
	};
	t.drawRect = function(t, i, n, r) {
		this.commandQueue.push(new e(function(t, e, i, n) {
			var r = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(r._transformTx + t, r._transformTy + e, i, n);
			this.canvasContext.closePath()
		}, this, [t, i, n, r]));
		this._fill()
	};
	t.drawCircle = function(t, i, n) {
		this.commandQueue.push(new e(function(t, e, i) {
			var n = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(n._transformTx + t, n._transformTy + e, i, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [t, i, n]));
		this._fill()
	};
	t.drawRoundRect = function(t, i, n, r, o, s) {
		this.commandQueue.push(new e(function(t, e, i, n, r, o) {
			var s = this.renderContext;
			t = s._transformTx + t;
			e = s._transformTy + e;
			r /= 2;
			o = o ? o / 2 : r;
			i = t + i;
			n = e + n;
			s = n - o;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(i, s);
			this.canvasContext.quadraticCurveTo(i, n, i - r, n);
			this.canvasContext.lineTo(t + r, n);
			this.canvasContext.quadraticCurveTo(t, n, t, n - o);
			this.canvasContext.lineTo(t, e + o);
			this.canvasContext.quadraticCurveTo(t, e, t + r, e);
			this.canvasContext.lineTo(i - r, e);
			this.canvasContext.quadraticCurveTo(i, e, i, e + o);
			this.canvasContext.lineTo(i, s);
			this.canvasContext.closePath()
		}, this, [t, i, n, r, o, s]));
		this._fill()
	};
	t.drawEllipse = function(t, i, n, r) {
		this.commandQueue.push(new e(function(t, e, i, n) {
			var r = this.renderContext;
			this.canvasContext.save();
			t = r._transformTx + t;
			e = r._transformTy + e;
			var r = i > n ? i : n,
				o = i / r;
			n /= r;
			this.canvasContext.scale(o, n);
			this.canvasContext.beginPath();
			this.canvasContext.moveTo((t + i) / o, e / n);
			this.canvasContext.arc(t / o, e / n, r, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore();
			this.canvasContext.stroke()
		}, this, [t, i, n, r]));
		this._fill()
	};
	t.lineStyle = function(t, i, n, r, o, s, a, h) {
		void 0 === t && (t = NaN);
		void 0 === i && (i = 0);
		void 0 === n && (n = 1);
		void 0 === r && (r = !1);
		void 0 === o && (o = "normal");
		void 0 === s && (s = null);
		void 0 === a && (a = null);
		void 0 === h && (h = 3);
		this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
		this.strokeStyleColor = i = "rgba(" + (i >> 16) + "," + ((i & 65280) >> 8) + "," + (i & 255) + "," + n + ")";
		this.commandQueue.push(new e(function(t, e) {
			this.canvasContext.lineWidth = t;
			this.canvasContext.strokeStyle = e;
			this.canvasContext.beginPath()
		}, this, [t, i]));
		"undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
		this.moveTo(this.lineX, this.lineY)
	};
	t.lineTo = function(t, i) {
		this.commandQueue.push(new e(function(t, e) {
			var i = this.renderContext;
			this.canvasContext.lineTo(i._transformTx + t, i._transformTy + e)
		}, this, [t, i]));
		this.lineX = t;
		this.lineY = i
	};
	t.curveTo = function(t, i, n, r) {
		this.commandQueue.push(new e(function(t, e, i, n) {
			var r = this.renderContext;
			this.canvasContext.quadraticCurveTo(r._transformTx + t, r._transformTy + e, r._transformTx + i, r._transformTy + n)
		}, this, [t, i, n, r]));
		this.lineX = n;
		this.lineY = r
	};
	t.moveTo = function(t, i) {
		this.commandQueue.push(new e(function(t, e) {
			var i = this.renderContext;
			this.canvasContext.moveTo(i._transformTx + t, i._transformTy + e)
		}, this, [t, i]))
	};
	t.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null
	};
	t.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new e(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	t.endFill = function() {
		null != this.fillStyleColor && this._fill();
		this.fillStyleColor = null
	};
	t._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
	};
	t.createEndLineCommand = function() {
		this.endLineCommand || (this.endLineCommand = new e(function() {
			this.canvasContext.stroke();
			this.canvasContext.closePath()
		}, this, null))
	};
	t._draw = function(t) {
		var e = this.commandQueue.length;
		if (0 != e) {
			this.renderContext = t;
			t = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
			t.save();
			this.strokeStyleColor && 0 < e && this.commandQueue[e - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), e = this.commandQueue.length);
			for (var i = 0; i < e; i++) {
				var n = this.commandQueue[i];
				n.method.apply(n.thisObject, n.args)
			}
			t.restore()
		}
	};
	var e = function() {
		return function(t, e, i) {
			this.method = t;
			this.thisObject = e;
			this.args = i
		}
	}();
	e.prototype.__class__ = "egret_h5_graphics.Command";
	t._setStyle = function(t) {
		this.canvasContext.fillStyle = t;
		this.canvasContext.beginPath()
	};
	t.init = function() {
		for (var e in t) egret.Graphics.prototype[e] = t[e];
		egret.RendererContext.createRendererContext = function(t) {
			return new egret.HTML5CanvasRenderer(t)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i(i) {
			e.call(this);
			this.size = 2e3;
			this.vertSize = 5;
			this.contextLost = !1;
			this.glContextId = 0;
			this.currentBlendMode = "";
			this.currentBaseTexture = null;
			this.currentBatchSize = 0;
			this.maskList = [];
			this.maskDataFreeList = [];
			this.canvasContext = document.createElement("canvas").getContext("2d");
			console.log("使用WebGL模式");
			this.canvas = i || this.createCanvas();
			this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
			this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
			this.onResize();
			this.projectionX = this.canvas.width / 2;
			this.projectionY = -this.canvas.height / 2;
			i = 6 * this.size;
			this.vertices = new Float32Array(4 * this.size * this.vertSize);
			this.indices = new Uint16Array(i);
			for (var n = 0, r = 0; n < i; n += 6, r += 4) this.indices[n + 0] = r + 0, this.indices[n + 1] = r + 1, this.indices[n + 2] = r + 2, this.indices[n + 3] = r + 0, this.indices[n + 4] = r + 2, this.indices[n + 5] = r + 3;
			this.initWebGL();
			this.shaderManager = new t.WebGLShaderManager(this.gl);
			this.worldTransform = new t.Matrix;
			this.initBlendMode();
			t.MainContext.instance.addEventListener(t.Event.FINISH_RENDER, this._draw, this);
			t.TextField.prototype._draw = function(e) {
				this.getDirty() && (this.cacheAsBitmap = !0);
				t.DisplayObject.prototype._draw.call(this, e)
			}
		}
		__extends(i, e);
		i.prototype.createCanvas = function() {
			var e = t.Browser.getInstance().$("#egretCanvas");
			if (!e) {
				var i = document.getElementById(t.StageDelegate.canvas_div_name),
					e = t.Browser.getInstance().$new("canvas");
				e.id = "egretCanvas";
				i.appendChild(e)
			}
			t.MainContext.instance.stage.addEventListener(t.Event.RESIZE, this.onResize, this);
			return e
		};
		i.prototype.onResize = function() {
			if (this.canvas) {
				var e = document.getElementById(t.StageDelegate.canvas_div_name);
				this.canvas.width = t.MainContext.instance.stage.stageWidth;
				this.canvas.height = t.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = e.style.width;
				this.canvas.style.height = e.style.height;
				this.projectionX = this.canvas.width / 2;
				this.projectionY = -this.canvas.height / 2
			}
		};
		i.prototype.handleContextLost = function() {
			this.contextLost = !0
		};
		i.prototype.handleContextRestored = function() {
			this.initWebGL();
			this.shaderManager.setContext(this.gl);
			this.contextLost = !1
		};
		i.prototype.initWebGL = function() {
			for (var t = {
					stencil: !0
				}, e, i = ["experimental-webgl", "webgl"], n = 0; n < i.length; n++) {
				try {
					e = this.canvas.getContext(i[n], t)
				} catch (r) {}
				if (e) break
			}
			if (!e) throw Error("当前浏览器不支持webgl");
			this.setContext(e)
		};
		i.prototype.setContext = function(t) {
			this.gl = t;
			t.id = this.glContextId++;
			this.vertexBuffer = t.createBuffer();
			this.indexBuffer = t.createBuffer();
			t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW);
			t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
			t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW);
			t.disable(t.DEPTH_TEST);
			t.disable(t.CULL_FACE);
			t.enable(t.BLEND);
			t.colorMask(!0, !0, !0, !0)
		};
		i.prototype.initBlendMode = function() {
			this.blendModesWebGL = {};
			this.blendModesWebGL[t.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
			this.blendModesWebGL[t.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
		};
		i.prototype.start = function() {
			if (!this.contextLost) {
				var t = this.gl;
				t.activeTexture(t.TEXTURE0);
				t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
				t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var e;
				e = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : this.shaderManager.defaultShader;
				this.shaderManager.activateShader(e);
				e.syncUniforms();
				t.uniform2f(e.projectionVector, this.projectionX, this.projectionY);
				var i = 4 * this.vertSize;
				t.vertexAttribPointer(e.aVertexPosition, 2, t.FLOAT, !1, i, 0);
				t.vertexAttribPointer(e.aTextureCoord, 2, t.FLOAT, !1, i, 8);
				t.vertexAttribPointer(e.colorAttribute, 2, t.FLOAT, !1, i, 16)
			}
		};
		i.prototype.clearScreen = function() {
			var e = this.gl;
			e.colorMask(!0, !0, !0, !0);
			for (var i = t.RenderFilter.getInstance().getDrawAreaList(), n = 0, r = i.length; n < r; n++) {
				var o = i[n];
				e.viewport(o.x, o.y, o.width, o.height);
				e.bindFramebuffer(e.FRAMEBUFFER, null);
				e.clearColor(0, 0, 0, 0);
				e.clear(e.COLOR_BUFFER_BIT)
			}
			i = t.MainContext.instance.stage;
			e.viewport(0, 0, i.stageWidth, i.stageHeight);
			this.renderCost = 0
		};
		i.prototype.setBlendMode = function(e) {
			e || (e = t.BlendMode.NORMAL);
			if (this.currentBlendMode != e) {
				var i = this.blendModesWebGL[e];
				i && (this._draw(), this.gl.blendFunc(i[0], i[1]), this.currentBlendMode = e)
			}
		};
		i.prototype.drawRepeatImage = function(e, i, n, r, o, s, a, h, c, u) {
			u = t.MainContext.instance.rendererContext.texture_scale_factor;
			r *= u;
			for (o *= u; s < h; s += r)
				for (var l = a; l < c; l += o) {
					var p = Math.min(r, h - s),
						_ = Math.min(o, c - l);
					this.drawImage(e, i, n, p / u, _ / u, s, l, p, _)
				}
		};
		i.prototype.drawImage = function(t, e, i, n, r, o, s, a, h, c) {
			void 0 === c && (c = void 0);
			if (!this.contextLost)
				if (void 0 !== c) this.drawRepeatImage(t, e, i, n, r, o, s, a, h, c);
				else {
					this.createWebGLTexture(t);
					if (t.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = t.webGLTexture;
					var u = this.worldTransform,
						l = u.a,
						p = u.b,
						_ = u.c,
						d = u.d,
						f = u.tx,
						g = u.ty;
					0 == o && 0 == s || u.append(1, 0, 0, 1, o, s);
					1 == n / a && 1 == r / h || u.append(a / n, 0, 0, h / r, 0, 0);
					o = u.a;
					s = u.b;
					a = u.c;
					h = u.d;
					c = u.tx;
					var y = u.ty;
					u.a = l;
					u.b = p;
					u.c = _;
					u.d = d;
					u.tx = f;
					u.ty = g;
					l = t._sourceWidth;
					p = t._sourceHeight;
					t = n;
					u = r;
					e /= l;
					i /= p;
					n /= l;
					r /= p;
					l = this.vertices;
					p = 4 * this.currentBatchSize * this.vertSize;
					_ = this.worldAlpha;
					l[p++] = c;
					l[p++] = y;
					l[p++] = e;
					l[p++] = i;
					l[p++] = _;
					l[p++] = o * t + c;
					l[p++] = s * t + y;
					l[p++] = n + e;
					l[p++] = i;
					l[p++] = _;
					l[p++] = o * t + a * u + c;
					l[p++] = h * u + s * t + y;
					l[p++] = n + e;
					l[p++] = r + i;
					l[p++] = _;
					l[p++] = a * u + c;
					l[p++] = h * u + y;
					l[p++] = e;
					l[p++] = r + i;
					l[p++] = _;
					this.currentBatchSize++
				}
		};
		i.prototype._draw = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var e = t.getTimer();
				this.start();
				var i = this.gl;
				i.bindTexture(i.TEXTURE_2D, this.currentBaseTexture);
				var n = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				i.bufferSubData(i.ARRAY_BUFFER, 0, n);
				i.drawElements(i.TRIANGLES, 6 * this.currentBatchSize, i.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += t.getTimer() - e;
				t.Profiler.getInstance().onDrawImage()
			}
		};
		i.prototype.setTransform = function(t) {
			var e = this.worldTransform;
			e.a = t.a;
			e.b = t.b;
			e.c = t.c;
			e.d = t.d;
			e.tx = t.tx;
			e.ty = t.ty
		};
		i.prototype.setAlpha = function(t, e) {
			this.worldAlpha = t;
			this.setBlendMode(e)
		};
		i.prototype.createWebGLTexture = function(t) {
			if (!t.webGLTexture) {
				var e = this.gl;
				t.webGLTexture = e.createTexture();
				e.bindTexture(e.TEXTURE_2D, t.webGLTexture);
				e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
				e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t._bitmapData);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				e.bindTexture(e.TEXTURE_2D, null)
			}
		};
		i.prototype.pushMask = function(t) {
			this._draw();
			var e = this.gl;
			0 == this.maskList.length && (e.enable(e.STENCIL_TEST), e.stencilFunc(e.ALWAYS, 1, 1));
			var i = this.maskDataFreeList.pop();
			i ? (i.x = t.x, i.y = t.y, i.w = t.width, i.h = t.height) : i = {
				x: t.x,
				y: t.y,
				w: t.width,
				h: t.height
			};
			this.maskList.push(i);
			e.colorMask(!1, !1, !1, !1);
			e.stencilOp(e.KEEP, e.KEEP, e.INCR);
			this.renderGraphics(i);
			e.colorMask(!0, !0, !0, !0);
			e.stencilFunc(e.NOTEQUAL, 0, this.maskList.length);
			e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
		};
		i.prototype.popMask = function() {
			this._draw();
			var t = this.gl,
				e = this.maskList.pop();
			e && (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderGraphics(e), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, this.maskList.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP), this.maskDataFreeList.push(e));
			0 == this.maskList.length && t.disable(t.STENCIL_TEST)
		};
		i.prototype.setGlobalColorTransform = function(t) {
			if (this.colorTransformMatrix != t && (this._draw(), this.colorTransformMatrix = t)) {
				t = t.concat();
				var e = this.shaderManager.colorTransformShader;
				e.uniforms.colorAdd.value.w = t.splice(19, 1)[0] / 255;
				e.uniforms.colorAdd.value.z = t.splice(14, 1)[0] / 255;
				e.uniforms.colorAdd.value.y = t.splice(9, 1)[0] / 255;
				e.uniforms.colorAdd.value.x = t.splice(4, 1)[0] / 255;
				e.uniforms.matrix.value = t
			}
		};
		i.prototype.setupFont = function(t, e) {
			var i = this.canvasContext,
				n = t.italic ? "italic " : "normal ",
				n = n + (t.bold ? "bold " : "normal "),
				n = n + (t.size + "px " + t.fontFamily);
			i.font = n;
			i.textAlign = "left";
			i.textBaseline = "middle"
		};
		i.prototype.measureText = function(t) {
			return this.canvasContext.measureText(t).width
		};
		i.prototype.renderGraphics = function(t) {
			var e = this.gl,
				i = this.shaderManager.primitiveShader;
			this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = e.createBuffer(), this.graphicsIndexBuffer = e.createBuffer());
			this.updateGraphics(t);
			this.shaderManager.activateShader(i);
			e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
			e.uniformMatrix3fv(i.translationMatrix, !1, this.worldTransform.toArray(!0));
			e.uniform2f(i.projectionVector, this.projectionX, -this.projectionY);
			e.uniform2f(i.offsetVector, 0, 0);
			e.uniform3fv(i.tintColor, [1, 1, 1]);
			e.uniform1f(i.alpha, this.worldAlpha);
			e.bindBuffer(e.ARRAY_BUFFER, this.graphicsBuffer);
			e.vertexAttribPointer(i.aVertexPosition, 2, e.FLOAT, !1, 24, 0);
			e.vertexAttribPointer(i.colorAttribute, 4, e.FLOAT, !1, 24, 8);
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			e.drawElements(e.TRIANGLE_STRIP, this.graphicsIndices.length, e.UNSIGNED_SHORT, 0);
			this.shaderManager.activateShader(this.shaderManager.defaultShader)
		};
		i.prototype.updateGraphics = function(t) {
			var e = this.gl;
			this.buildRectangle(t);
			e.bindBuffer(e.ARRAY_BUFFER, this.graphicsBuffer);
			e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), e.STATIC_DRAW);
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), e.STATIC_DRAW)
		};
		i.prototype.buildRectangle = function(t) {
			var e = t.x,
				i = t.y,
				n = t.w;
			t = t.h;
			var r = this.graphicsPoints,
				o = this.graphicsIndices,
				s = r.length / 6;
			r.push(e, i);
			r.push(0, 0, 0, 1);
			r.push(e + n, i);
			r.push(0, 0, 0, 1);
			r.push(e, i + t);
			r.push(0, 0, 0, 1);
			r.push(e + n, i + t);
			r.push(0, 0, 0, 1);
			o.push(s, s, s + 1, s + 2, s + 3, s + 3)
		};
		return i
	}(t.RendererContext);
	t.WebGLRenderer = e;
	e.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(t) {
	var e = function() {
		function t() {}
		t.compileProgram = function(e, i, n) {
			n = t.compileFragmentShader(e, n);
			i = t.compileVertexShader(e, i);
			var r = e.createProgram();
			e.attachShader(r, i);
			e.attachShader(r, n);
			e.linkProgram(r);
			e.getProgramParameter(r, e.LINK_STATUS) || console.log("无法初始化着色器");
			return r
		};
		t.compileFragmentShader = function(e, i) {
			return t._compileShader(e, i, e.FRAGMENT_SHADER)
		};
		t.compileVertexShader = function(e, i) {
			return t._compileShader(e, i, e.VERTEX_SHADER)
		};
		t._compileShader = function(t, e, i) {
			i = t.createShader(i);
			t.shaderSource(i, e);
			t.compileShader(i);
			return t.getShaderParameter(i, t.COMPILE_STATUS) ? i : (console.log(t.getShaderInfoLog(i)), null)
		};
		t.checkCanUseWebGL = function() {
			if (void 0 == t.canUseWebGL) try {
				var e = document.createElement("canvas");
				t.canUseWebGL = !!window.WebGLRenderingContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
			} catch (i) {
				t.canUseWebGL = !1
			}
			return t.canUseWebGL
		};
		return t
	}();
	t.WebGLUtils = e;
	e.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function() {
		function t(t) {
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
			this.setContext(t)
		}
		t.prototype.setContext = function(t) {
			this.gl = t;
			this.primitiveShader = new r(t);
			this.defaultShader = new i(t);
			this.colorTransformShader = new n(t);
			this.activateShader(this.defaultShader)
		};
		t.prototype.activateShader = function(t) {
			this.currentShader != t && (this.gl.useProgram(t.program), this.setAttribs(t.attributes), this.currentShader = t)
		};
		t.prototype.setAttribs = function(t) {
			var e, i;
			i = this.tempAttribState.length;
			for (e = 0; e < i; e++) this.tempAttribState[e] = !1;
			i = t.length;
			for (e = 0; e < i; e++) this.tempAttribState[t[e]] = !0;
			t = this.gl;
			i = this.attribState.length;
			for (e = 0; e < i; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.tempAttribState[e] ? t.enableVertexAttribArray(e) : t.disableVertexAttribArray(e))
		};
		return t
	}();
	t.WebGLShaderManager = e;
	e.prototype.__class__ = "egret.WebGLShaderManager";
	var i = function() {
		function e(t) {
			this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
			this.program = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.gl = t;
			this.init()
		}
		e.prototype.init = function() {
			var e = this.gl,
				i = t.WebGLUtils.compileProgram(e, this.defaultVertexSrc, this.fragmentSrc);
			e.useProgram(i);
			this.uSampler = e.getUniformLocation(i, "uSampler");
			this.projectionVector = e.getUniformLocation(i, "projectionVector");
			this.offsetVector = e.getUniformLocation(i, "offsetVector");
			this.dimensions = e.getUniformLocation(i, "dimensions");
			this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition");
			this.aTextureCoord = e.getAttribLocation(i, "aTextureCoord");
			this.colorAttribute = e.getAttribLocation(i, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			for (var n in this.uniforms) this.uniforms[n].uniformLocation = e.getUniformLocation(i, n);
			this.initUniforms();
			this.program = i
		};
		e.prototype.initUniforms = function() {
			if (this.uniforms) {
				var t = this.gl,
					e, i;
				for (i in this.uniforms) {
					e = this.uniforms[i];
					var n = e.type;
					"mat2" === n || "mat3" === n || "mat4" === n ? (e.glMatrix = !0, e.glValueLength = 1, "mat2" === n ? e.glFunc = t.uniformMatrix2fv : "mat3" === n ? e.glFunc = t.uniformMatrix3fv : "mat4" === n && (e.glFunc = t.uniformMatrix4fv)) : (e.glFunc = t["uniform" + n], e.glValueLength = "2f" === n || "2i" === n ? 2 : "3f" === n || "3i" === n ? 3 : "4f" === n || "4i" === n ? 4 : 1)
				}
			}
		};
		e.prototype.syncUniforms = function() {
			if (this.uniforms) {
				var t, e = this.gl,
					i;
				for (i in this.uniforms) t = this.uniforms[i], 1 === t.glValueLength ? !0 === t.glMatrix ? t.glFunc.call(e, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(e, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength && t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w)
			}
		};
		return e
	}();
	t.EgretShader = i;
	i.prototype.__class__ = "egret.EgretShader";
	var n = function(t) {
		function e(e) {
			t.call(this, e);
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
		__extends(e, t);
		return e
	}(i);
	t.ColorTransformShader = n;
	n.prototype.__class__ = "egret.ColorTransformShader";
	var r = function() {
		function e(t) {
			this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = t;
			this.init()
		}
		e.prototype.init = function() {
			var e = this.gl,
				i = t.WebGLUtils.compileProgram(e, this.vertexSrc, this.fragmentSrc);
			e.useProgram(i);
			this.projectionVector = e.getUniformLocation(i, "projectionVector");
			this.offsetVector = e.getUniformLocation(i, "offsetVector");
			this.tintColor = e.getUniformLocation(i, "tint");
			this.aVertexPosition = e.getAttribLocation(i, "aVertexPosition");
			this.colorAttribute = e.getAttribLocation(i, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix = e.getUniformLocation(i, "translationMatrix");
			this.alpha = e.getUniformLocation(i, "alpha");
			this.program = i
		};
		return e
	}();
	t.PrimitiveShader = r;
	r.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this)
		}
		__extends(i, e);
		i.prototype.proceed = function(e) {
			function i() {
				if (4 == r.readyState)
					if (r.status != e._status && (e._status = r.status, t.HTTPStatusEvent.dispatchHTTPStatusEvent(e, r.status)), 400 <= r.status || 0 == r.status) t.IOErrorEvent.dispatchIOErrorEvent(e);
					else {
						switch (e.dataFormat) {
							case t.URLLoaderDataFormat.TEXT:
								e.data = r.responseText;
								break;
							case t.URLLoaderDataFormat.VARIABLES:
								e.data = new t.URLVariables(r.responseText);
								break;
							case t.URLLoaderDataFormat.BINARY:
								e.data = r.response;
								break;
							default:
								e.data = r.responseText
						}
						t.__callAsync(t.Event.dispatchEvent, t.Event, e, t.Event.COMPLETE)
					}
			}
			if (e.dataFormat == t.URLLoaderDataFormat.TEXTURE) this.loadTexture(e);
			else if (e.dataFormat == t.URLLoaderDataFormat.SOUND) this.loadSound(e);
			else {
				var n = e._request,
					r = this.getXHR();
				r.onreadystatechange = i;
				var o = t.NetContext._getUrl(n);
				r.open(n.method, o, !0);
				this.setResponseType(r, e.dataFormat);
				n.method != t.URLRequestMethod.GET && n.data ? n.data instanceof t.URLVariables ? (r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send(n.data.toString())) : (r.setRequestHeader("Content-Type", "multipart/form-data"), r.send(n.data)) : r.send()
			}
		};
		i.prototype.loadSound = function(e) {
			function i(o) {
				window.clearTimeout(r.__timeoutId);
				r.removeEventListener("canplaythrough", i, !1);
				r.removeEventListener("error", n, !1);
				o = new t.Sound;
				o._setAudio(r);
				e.data = o;
				t.__callAsync(t.Event.dispatchEvent, t.Event, e, t.Event.COMPLETE)
			}

			function n(o) {
				window.clearTimeout(r.__timeoutId);
				r.removeEventListener("canplaythrough", i, !1);
				r.removeEventListener("error", n, !1);
				t.IOErrorEvent.dispatchIOErrorEvent(e)
			}
			var r = new Audio(e._request.url);
			r.__timeoutId = window.setTimeout(i, 100);
			r.addEventListener("canplaythrough", i, !1);
			r.addEventListener("error", n, !1);
			r.load()
		};
		i.prototype.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		};
		i.prototype.setResponseType = function(e, i) {
			switch (i) {
				case t.URLLoaderDataFormat.TEXT:
				case t.URLLoaderDataFormat.VARIABLES:
					e.responseType = t.URLLoaderDataFormat.TEXT;
					break;
				case t.URLLoaderDataFormat.BINARY:
					e.responseType = "arraybuffer";
					break;
				default:
					e.responseType = i
			}
		};
		i.prototype.loadTexture = function(e) {
			var i = e._request,
				n = new Image;
			n.onload = function(i) {
				n.onerror = null;
				n.onload = null;
				i = new t.Texture;
				i._setBitmapData(n);
				e.data = i;
				t.__callAsync(t.Event.dispatchEvent, t.Event, e, t.Event.COMPLETE)
			};
			n.onerror = function(i) {
				n.onerror = null;
				n.onload = null;
				t.IOErrorEvent.dispatchIOErrorEvent(e)
			};
			n.src = i.url
		};
		return i
	}(t.NetContext);
	t.HTML5NetContext = e;
	e.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._isTouchDown = !1;
			this.rootDiv = document.getElementById(t.StageDelegate.canvas_div_name)
		}
		__extends(i, e);
		i.prototype.prevent = function(t) {
			t.stopPropagation();
			!0 != t.isScroll && t.preventDefault()
		};
		i.prototype.run = function() {
			var e = this;
			window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(t) {
				e._onTouchBegin(t);
				e.prevent(t)
			}, !1), this.rootDiv.addEventListener("MSPointerMove", function(t) {
				e._onTouchMove(t);
				e.prevent(t)
			}, !1), this.rootDiv.addEventListener("MSPointerUp", function(t) {
				e._onTouchEnd(t);
				e.prevent(t)
			}, !1)) : t.MainContext.deviceType == t.MainContext.DEVICE_MOBILE ? this.addTouchListener() : t.MainContext.deviceType == t.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown", function(t) {
				e.inOutOfCanvas(t) ? e.dispatchLeaveStageEvent() : e._isTouchDown = !0
			});
			window.addEventListener("mouseup", function(t) {
				e._isTouchDown && (e.inOutOfCanvas(t) ? e.dispatchLeaveStageEvent() : e._onTouchEnd(t));
				e._isTouchDown = !1
			})
		};
		i.prototype.addMouseListener = function() {
			var t = this;
			this.rootDiv.addEventListener("mousedown", function(e) {
				t._onTouchBegin(e)
			});
			this.rootDiv.addEventListener("mousemove", function(e) {
				t._onTouchMove(e)
			});
			this.rootDiv.addEventListener("mouseup", function(e) {
				t._onTouchEnd(e)
			})
		};
		i.prototype.addTouchListener = function() {
			var t = this;
			this.rootDiv.addEventListener("touchstart", function(e) {
				for (var i = e.changedTouches.length, n = 0; n < i; n++) t._onTouchBegin(e.changedTouches[n]);
				t.prevent(e)
			}, !1);
			this.rootDiv.addEventListener("touchmove", function(e) {
				for (var i = e.changedTouches.length, n = 0; n < i; n++) t._onTouchMove(e.changedTouches[n]);
				t.prevent(e)
			}, !1);
			this.rootDiv.addEventListener("touchend", function(e) {
				for (var i = e.changedTouches.length, n = 0; n < i; n++) t._onTouchEnd(e.changedTouches[n]);
				t.prevent(e)
			}, !1);
			this.rootDiv.addEventListener("touchcancel", function(e) {
				for (var i = e.changedTouches.length, n = 0; n < i; n++) t._onTouchEnd(e.changedTouches[n]);
				t.prevent(e)
			}, !1)
		};
		i.prototype.inOutOfCanvas = function(e) {
			var i = this.getLocation(this.rootDiv, e);
			e = i.x;
			var i = i.y,
				n = t.MainContext.instance.stage;
			return 0 > e || 0 > i || e > n.stageWidth || i > n.stageHeight ? !0 : !1
		};
		i.prototype.dispatchLeaveStageEvent = function() {
			this.touchingIdentifiers.length = 0;
			t.MainContext.instance.stage.dispatchEventWith(t.Event.LEAVE_STAGE)
		};
		i.prototype._onTouchBegin = function(t) {
			var e = this.getLocation(this.rootDiv, t),
				i = -1;
			t.hasOwnProperty("identifier") && (i = t.identifier);
			this.onTouchBegan(e.x, e.y, i)
		};
		i.prototype._onTouchMove = function(t) {
			var e = this.getLocation(this.rootDiv, t),
				i = -1;
			t.hasOwnProperty("identifier") && (i = t.identifier);
			this.onTouchMove(e.x, e.y, i)
		};
		i.prototype._onTouchEnd = function(t) {
			var e = this.getLocation(this.rootDiv, t),
				i = -1;
			t.hasOwnProperty("identifier") && (i = t.identifier);
			this.onTouchEnd(e.x, e.y, i)
		};
		i.prototype.getLocation = function(e, i) {
			var n = document.documentElement,
				r = window,
				o, s;
			"function" === typeof e.getBoundingClientRect ? (s = e.getBoundingClientRect(), o = s.left, s = s.top) : s = o = 0;
			o += r.pageXOffset - n.clientLeft;
			s += r.pageYOffset - n.clientTop;
			null != i.pageX ? (n = i.pageX, r = i.pageY) : (o -= document.body.scrollLeft, s -= document.body.scrollTop, n = i.clientX, r = i.clientY);
			var a = t.Point.identity;
			a.x = (n - o) / t.StageDelegate.getInstance().getScaleX();
			a.y = (r - s) / t.StageDelegate.getInstance().getScaleY();
			return a
		};
		return i
	}(t.TouchContext);
	t.HTML5TouchContext = e;
	e.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(t, e) {
	function i() {
		this.constructor = t
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
	i.prototype = e.prototype;
	t.prototype = new i
};
(function(t) {
	var e = function(e) {
		function i() {
			e.call(this);
			this._hasListeners = !1;
			this._inputType = "";
			this._isShow = !1;
			this.textValue = "";
			this._height = this._width = 0;
			this._styleInfoes = {};
			var i = t.StageDelegate.getInstance().getScaleX(),
				n = t.StageDelegate.getInstance().getScaleY(),
				r = t.Browser.getInstance().$new("div");
			r.position.x = 0;
			r.position.y = 0;
			r.scale.x = i;
			r.scale.y = n;
			r.transforms();
			r.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
			this.div = r;
			n = t.MainContext.instance.stage;
			i = n.stageWidth;
			n = n.stageHeight;
			r = new t.Shape;
			r.width = i;
			r.height = n;
			r.touchEnabled = !0;
			this._shape = r;
			this.getStageDelegateDiv().appendChild(this.div)
		}
		__extends(i, e);
		i.prototype.getStageDelegateDiv = function() {
			var e = t.Browser.getInstance().$("#StageDelegateDiv");
			e || (e = t.Browser.getInstance().$new("div"), e.id = "StageDelegateDiv", document.getElementById(t.StageDelegate.canvas_div_name).appendChild(e), e.transforms());
			return e
		};
		i.prototype._setMultiline = function(t) {
			e.prototype._setMultiline.call(this, t);
			this.createInput()
		};
		i.prototype.callHandler = function(t) {
			t.stopPropagation()
		};
		i.prototype._add = function() {
			this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
		};
		i.prototype._remove = function() {
			this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
			this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
		};
		i.prototype._addListeners = function() {
			this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart", this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
		};
		i.prototype._removeListeners = function() {
			this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
		};
		i.prototype.createInput = function() {
			var t = this._multiline ? "textarea" : "input";
			this._inputType != t && (this._inputType = t, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (t = document.createElement("textarea"), t.style.resize = "none") : t = document.createElement("input"), this._styleInfoes = {}, t.type = "text", this.inputElement = t, this.inputElement.value = "", this.div.appendChild(t), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
		};
		i.prototype._open = function(t, e, i, n) {};
		i.prototype._setScale = function(i, n) {
			e.prototype._setScale.call(this, i, n);
			var r = t.StageDelegate.getInstance().getScaleX(),
				o = t.StageDelegate.getInstance().getScaleY();
			this.div.scale.x = r * i;
			this.div.scale.y = o * n;
			this.div.transforms()
		};
		i.prototype.changePosition = function(e, i) {
			var n = t.StageDelegate.getInstance().getScaleX(),
				r = t.StageDelegate.getInstance().getScaleY();
			this.div.position.x = e * n;
			this.div.position.y = i * r;
			this.div.transforms()
		};
		i.prototype.setStyles = function() {
			this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
			this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
			this.setElementStyle("textAlign", this._textAlign);
			this.setElementStyle("fontSize", this._size + "px");
			this.setElementStyle("color", "#000000");
			this.setElementStyle("width", this._width + "px");
			this.setElementStyle("height", this._height + "px");
			this.setElementStyle("border", "1px solid red");
			this.setElementStyle("display", "block")
		};
		i.prototype._show = function() {
			0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
			this._isShow = !0;
			var e = this._getText();
			this.inputElement.value = e;
			var i = this;
			this.inputElement.oninput = function() {
				i.textValue = i.inputElement.value;
				i.dispatchEvent(new t.Event("updateText"))
			};
			this.setStyles();
			this.inputElement.focus();
			this.inputElement.selectionStart = e.length;
			this.inputElement.selectionEnd = e.length;
			this._shape && null == this._shape.parent && t.MainContext.instance.stage.addChild(this._shape)
		};
		i.prototype._hide = function() {
			if (null != this.inputElement) {
				this._isShow = !1;
				this.inputElement.oninput = function() {};
				this.setElementStyle("border", "none");
				this.setElementStyle("display", "none");
				this.inputElement.value = "";
				this.setElementStyle("width", "0px");
				window.scrollTo(0, 0);
				var e = this;
				t.setTimeout(function() {
					e.inputElement.blur();
					window.scrollTo(0, 0)
				}, this, 50);
				this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
			}
		};
		i.prototype._getText = function() {
			this.textValue || (this.textValue = "");
			return this.textValue
		};
		i.prototype._setText = function(t) {
			this.textValue = t;
			this.resetText()
		};
		i.prototype.resetText = function() {
			this.inputElement && (this.inputElement.value = this.textValue)
		};
		i.prototype._setWidth = function(t) {
			this._width = t
		};
		i.prototype._setHeight = function(t) {
			this._height = t
		};
		i.prototype.setElementStyle = function(t, e) {
			this.inputElement && this._styleInfoes[t] != e && (this.inputElement.style[t] = e, this._styleInfoes[t] = e)
		};
		return i
	}(t.StageText);
	t.HTML5StageText = e;
	e.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
	return new egret.HTML5StageText
};
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	Power = function(t) {
		function e() {
			t.call(this);
			this.texture = RES.getRes("power");
			this.anchorX = .5;
			this.anchorY = .9
		}
		__extends(e, t);
		e.produce = function() {
			null == e.cacheDict.power && (e.cacheDict.power = []);
			var t = e.cacheDict.power;
			return 0 < t.length ? t.shift() : new e
		};
		e.reclaim = function(t) {
			null == e.cacheDict.power && (e.cacheDict.power = []);
			var i = e.cacheDict.power; - 1 == i.indexOf(t) && i.push(t)
		};
		e.cacheDict = {};
		return e
	}(egret.Bitmap);
Power.prototype.__class__ = "Power";
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	Block = function(t) {
		function e(e) {
			t.call(this);
			this.type = e;
			this.power = null;
			this.texture = RES.getRes("block" + this.type)
		}
		__extends(e, t);
		e.prototype.reset = function() {
			this.power = null;
			this.texture = RES.getRes("block" + this.type)
		};
		e.prototype.setPower = function(t) {
			this.power = t
		};
		e.produce = function(t) {
			null == e.cacheDict["block" + t] && (e.cacheDict["block" + t] = []);
			var i = e.cacheDict["block" + t];
			t = 0 < i.length ? i.shift() : new e(t);
			t.reset();
			return t
		};
		e.reclaim = function(t, i) {
			null == e.cacheDict["block" + i] && (e.cacheDict["block" + i] = []);
			var n = e.cacheDict["block" + i]; - 1 == n.indexOf(t) && n.push(t)
		};
		e.cacheDict = {};
		return e
	}(egret.Bitmap);
Block.prototype.__class__ = "Block";
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	Main = function(t) {
		function e() {
			t.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(e, t);
		e.prototype.onAddToStage = function(t) {
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			/iPhone/i.test(navigator.userAgent) ? (e.factor = 4 / 3, RES.loadConfig("resource/resource.json", "resource/assets/360/")) : (e.factor = 1, RES.loadConfig("resource/resource.json", "resource/assets/360/"))
		};
		e.prototype.onConfigComplete = function(t) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("preload")
		};
		e.prototype.onResourceLoadComplete = function(t) {
			"preload" == t.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
		};
		e.prototype.createGameScene = function() {
			var t = new GameContainer;
			this.addChild(t)
		};
		e.prototype.onResourceLoadError = function(t) {
			console.warn("Group:" + t.groupName + " 中有加载失败的项目");
			this.onResourceLoadComplete(t)
		};
		e.prototype.onResourceProgress = function(t) {
			"preload" == t.groupName
		};
		return e
	}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
var utils;
(function(t) {
	t.createBitmapByName = function(t) {
		var e = new egret.Bitmap;
		t = RES.getRes(t);
		e.texture = t;
		return e
	};
	t.isOnBlock = function(t, e) {
		var i = e.x - t.x,
			n = e.y - t.y;
		return 0 < i && i < t.width && 0 < n && n < t.height && (i > t.width / 2 && (i = t.width - i), n > t.height / 2 && (n = t.height - n), 7 > (t.width / 2 - i) * Math.tan(.16667 * Math.PI) - n) ? !0 : !1
	};
	t.powerHitTest = function(t, e) {
		var i = Math.abs(e.x - t.x),
			n = Math.abs(e.y - t.y);
		return 2 * i < t.width && 2 * n < t.height ? !0 : !1
	};
	t.storeBestScore = function(t) {
		var e = egret.localStorage.getItem("best_drift");
		e && (e = parseInt(e), t < e && (t = e));
		egret.localStorage.setItem("best_drift", "" + t)
	};
	t.getBestScore = function() {
		var t = egret.localStorage.getItem("best_drift");
		return t ? parseInt(t) : 0
	}
})(utils || (utils = {}));
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	GameOverPanel = function(t) {
		function e() {
			t.call(this);
			this.width = 281 * Main.factor;
			this.height = 309 * Main.factor;
			this.createView()
		}
		__extends(e, t);
		e.prototype.createView = function() {
			var t = new egret.Bitmap(RES.getRes("gameover.bg"));
			t.y = 51 * Main.factor;
			this.addChild(t);
			this.replayBtn = new egret.Bitmap(RES.getRes("gameover.replay"));
			this.replayBtn.x = 16 * Main.factor;
			this.replayBtn.y = 252 * Main.factor;
			this.addChild(this.replayBtn);
			this.replayBtn.touchEnabled = !0;
			this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
			this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
			window.haveShare || window.haveGamelist ? (this.optionalBtn = window.haveShare ? new egret.Bitmap(RES.getRes("gameover.share")) : new egret.Bitmap(RES.getRes("gameover.more")), this.optionalBtn.x = 147 * Main.factor, this.optionalBtn.y = 252 * Main.factor, this.addChild(this.optionalBtn), this.optionalBtn.touchEnabled = !0, this.optionalBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.optionalBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)) : this.replayBtn.x = (this.width - this.replayBtn.width) / 2;
			this.scoreText = new egret.BitmapText;
			this.scoreText.spriteSheet = RES.getRes("gameOverNumber");
			this.scoreText.anchorX = .5;
			this.scoreText.y = -115 / Main.factor;
			this.scoreText.x = this.width / 2;
			this.addChild(this.scoreText)
		};
		e.prototype.setScore = function(t) {
			this.scoreText.text = "" + t;
			this.score = 0;
			var e = t / 20;
			10 >= t && (e = t / 10);
			this.scoreTimerHandler(t, e);
			this.setTitle(t)
		};
		e.prototype.setTitle = function(t) {
			t = Math.min(t, 120);
			this.statusLogo = new egret.Bitmap(RES.getRes("gameover.title" + Math.floor(t / 50)));
			this.statusLogo.x = (this.width - this.statusLogo.width) / 2;
			this.statusLogo.y = 130 * Main.factor;
			this.addChild(this.statusLogo)
		};
		e.prototype.scoreTimerHandler = function(t, e) {
			this.score += e;
			this.score >= t ? this.score = t : egret.setTimeout(function() {
				this.scoreTimerHandler(t, e)
			}, this, 50);
			this.scoreText.text = "" + Math.floor(this.score)
		};
		e.prototype.setBestScore = function(t) {
			var e = new egret.TextField;
			e.size = 18 * Main.factor;
			e.textColor = 5592405;
			e.text = "最高 " + t;
			e.anchorX = .5;
			e.x = this.width / 2;
			e.y = 84 * Main.factor;
			e.fontFamily = "Microsoft Yahei";
			this.addChild(e)
		};
		e.prototype.onTouchBegin = function(t) {
			t.target == this.replayBtn ? this.replayBtn.texture = RES.getRes("gameover.replayPress") : t.target == this.optionalBtn && (this.optionalBtn.texture = window.haveShare ? RES.getRes("gameover.sharePress") : RES.getRes("gameover.morePress"))
		};
		e.prototype.onTouchEnd = function(t) {
			t.stopImmediatePropagation();
			t.target == this.replayBtn ? (this.dispatchEventWith("game_restart"), this.replayBtn.texture = RES.getRes("gameover.replay")) : t.target == this.optionalBtn && (window.haveShare ? (this.dispatchEventWith("game_share"), this.optionalBtn.texture = RES.getRes("gameover.share")) : (this.dispatchEventWith("game_get_more"), this.optionalBtn.texture = RES.getRes("gameover.more")))
		};
		return e
	}(egret.DisplayObjectContainer);
GameOverPanel.prototype.__class__ = "GameOverPanel";
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	ScorePanel = function(t) {
		function e() {
			t.call(this);
			var e = utils.createBitmapByName("scorePanel");
			this.width = e.width;
			this.height = e.height;
			this.addChild(e);
			this.scoreText = new egret.TextField;
			this.scoreText.anchorX = this.scoreText.anchorY = .5;
			this.scoreText.size = 34 * Main.factor;
			this.scoreText.textColor = 2553848;
			this.scoreText.x = this.width / 2;
			this.scoreText.y = this.height / 2;
			this.addChild(this.scoreText)
		}
		__extends(e, t);
		e.prototype.setScore = function(t) {
			this.scoreText.text = "" + t
		};
		return e
	}(egret.DisplayObjectContainer);
ScorePanel.prototype.__class__ = "ScorePanel";
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	StartPanel = function(t) {
		function e() {
			t.call(this);
			var e = utils.createBitmapByName("logo");
			this.width = e.width;
			this.addChild(e);
			this.startBtn = utils.createBitmapByName("startBtn");
			this.startBtn.x = (this.width - this.startBtn.width) / 2;
			this.startBtn.y = e.height + 10;
			this.addChild(this.startBtn);
			this.startAnimation()
		}
		__extends(e, t);
		e.prototype.startAnimation = function() {
			egret.Tween.get(this.startBtn).to({
				alpha: .3
			}, 500).to({
				alpha: 1
			}, 500).call(function() {
				this.startAnimation()
			}, this)
		};
		e.prototype.hide = function() {
			egret.Tween.get(this).to({
				y: -400
			}, 350).call(function() {
				this.parent.removeChild(this)
			}, this)
		};
		return e
	}(egret.DisplayObjectContainer);
StartPanel.prototype.__class__ = "StartPanel";
var GameConfig = function() {
	function t() {}
	t.DIRECTION_LEFT = 1;
	t.DIRECTION_RIGHT = 0;
	t.MOVING_SPEED = 1.7;
	t.ANGLE_RATE = 1.75;
	t.BLOCK_THICKNESS = 3;
	t.MIN_LEFT_MARGIN = 100;
	t.MIN_RIGHT_MARGIN = 200;
	return t
}();
GameConfig.prototype.__class__ = "GameConfig";
var __extends = this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		i.prototype = e.prototype;
		t.prototype = new i
	},
	GameContainer = function(t) {
		function e() {
			t.call(this);
			window.outerStart = this.outerStart;
			window.gameObj = this;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(e, t);
		e.prototype.onAddToStage = function() {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.createGameScene()
		};
		e.prototype.createGameScene = function() {
			this.stageW = this.stage.stageWidth;
			this.stageH = this.stage.stageHeight;
			GameConfig.BLOCK_THICKNESS *= Main.factor;
			GameConfig.MIN_LEFT_MARGIN *= Main.factor;
			GameConfig.MIN_RIGHT_MARGIN *= Main.factor;
			GameConfig.MOVING_SPEED *= Main.factor;
			this.initBeforeStart()
		};
		e.prototype.initBeforeStart = function() {
			var t = utils.createBitmapByName("bg");
			t.width = this.stageW;
			t.height = this.stageH;
			this.addChild(t);
			this.resetData();
			this.onGameStart()
		};
		e.prototype.onGameStart = function() {
			this.initStartComponents()
		};
		e.prototype.initStartComponents = function() {
			this.initBlocks();
			this.ball = utils.createBitmapByName("ball");
			this.ball.anchorX = .5;
			this.ball.anchorY = .8;
			this.ball.x = this.stageW / 2;
			this.ball.y = this.stageH - 100 * Main.factor - this.blocks[0].height / 2 - 10;
			this.addChild(this.ball);
			this.startPanel = new StartPanel;
			this.startPanel.x = (this.stageW - this.startPanel.width) / 2;
			this.startPanel.y = 56 * Main.factor;
			this.addChild(this.startPanel);
			this.touchEnabled = !0;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this)
		};
		e.prototype.startGame = function(t) {
			// updateShare(0);
			console.info("start");
			this.startPanel.hide();
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
			this.initScorePanel();
			this.addEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
			this.lastTime = egret.getTimer();
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeDirection, this)
		};
		e.prototype.resetData = function() {
			this.score = 0;
			this.blocks = [];
			this.dropBlocks = [];
			this.powers = [];
			this.currentDirection = 1;
			this.ballSpeed = -GameConfig.MOVING_SPEED * GameConfig.ANGLE_RATE
		};
		e.prototype.initScorePanel = function() {
			this.scorePanel = new ScorePanel;
			this.scorePanel.x = (this.stageW - this.scorePanel.width) / 2;
			this.scorePanel.y = 75 * Main.factor;
			this.addChild(this.scorePanel);
			this.scorePanel.setScore(this.score)
		};
		e.prototype.initBlocks = function() {
			var t, e, i;
			t = new Block(3);
			t.x = (this.stageW - t.width) / 2;
			t.y = this.stageH - t.height - 100 * Main.factor;
			this.addChild(t);
			for (this.blocks.push(t); !(1 == this.blocks.length ? (t = new Block(0), t.x = this.stageW / 2, t.y = this.blocks[0].y - t.height / 2 + GameConfig.BLOCK_THICKNESS) : (e = Math.floor(2 * Math.random()), 1 < this.blocks.length && (i = this.blocks.length - 1, this.blocks[i].x < GameConfig.MIN_LEFT_MARGIN && -1 == this.currentDirection || this.blocks[i].x > this.stageW - GameConfig.MIN_RIGHT_MARGIN && 1 == this.currentDirection) && (e = 0), t = 0 == e ? new Block(2) : new Block(1 == this.currentDirection ? 0 : 1), t.x = this.blocks[i].x + this.currentDirection * t.width / 2, t.y = this.blocks[i].y - t.height / 2 + GameConfig.BLOCK_THICKNESS, 0 == e && (this.currentDirection = -this.currentDirection)), this.addChildAt(t, 1), this.blocks.push(t), .15 > Math.random() && (e = new Power, e.x = t.x + t.width / 2, e.y = t.y + t.height / 2, this.addChildAt(e, this.getChildIndex(t) + 1), this.powers.push(e), t.setPower(e)), t.y <= -t.height - 300 * Main.factor););
		};
		e.prototype.gameViewUpdate = function(t) {
			t = egret.getTimer();
			var e = 1e3 / (t - this.lastTime);
			this.lastTime = t;
			t = 60 / e;
			var i, e = this.blocks.length,
				n = [],
				r;
			this.ball.x += this.ballSpeed * t;
			for (i = 0; i < e; i++) r = this.blocks[i], r.y += GameConfig.MOVING_SPEED * t, r.power && (r.power.y += GameConfig.MOVING_SPEED * t, utils.powerHitTest(r.power, this.ball) && (this.removeChild(r.power), this.powerCollected(r.power.x), Power.reclaim(r.power), this.powers.splice(this.powers.indexOf(r.power), 1), r.power = null)), r.y > this.ball.y + 40 && n.push(r);
			for (i = 0; i < n.length; i++) r = n[i], this.blocks.splice(this.blocks.indexOf(r), 1), this.dropBlocks.push(r);
			n = [];
			e = this.dropBlocks.length;
			for (i = 0; i < e; i++) r = this.dropBlocks[i], r.y += GameConfig.MOVING_SPEED * t * 3, r.power && (r.power.y += GameConfig.MOVING_SPEED * t * 3), r.y > this.stageH + r.height && n.push(r);
			for (i = 0; i < n.length; i++) r = n[i], this.removeChild(r), this.addBlock(), r.power && (this.removeChild(r.power), Power.reclaim(r.power), this.powers.splice(this.powers.indexOf(r.power), 1)), Block.reclaim(r, r.type), this.dropBlocks.splice(this.dropBlocks.indexOf(r), 1);
			this.isOutOfBounds() && this.gameOver()
		};
		e.prototype.addBlock = function() {
			var t, e, i;
			e = Math.floor(2 * Math.random());
			0 < this.blocks.length && (i = this.blocks.length - 1, this.blocks[i].x < GameConfig.MIN_LEFT_MARGIN && -1 == this.currentDirection || this.blocks[i].x > this.stageW - GameConfig.MIN_RIGHT_MARGIN && 1 == this.currentDirection) && (e = 0);
			t = 0 == e ? Block.produce(2) : Block.produce(1 == this.currentDirection ? 0 : 1);
			t.x = this.blocks[i].x + this.currentDirection * t.width / 2;
			t.y = this.blocks[i].y - t.height / 2 + GameConfig.BLOCK_THICKNESS;
			0 == e && (this.currentDirection = -this.currentDirection);
			this.addChildAt(t, 1);
			this.blocks.push(t);.15 > Math.random() && (e = Power.produce(), e.x = t.x + t.width / 2, e.y = t.y + t.height / 2, this.addChildAt(e, this.getChildIndex(t) + 1), this.powers.push(e), t.setPower(e))
		};
		e.prototype.changeDirection = function() {
			this.ballSpeed = -this.ballSpeed;
			this.ball.scaleX = -this.ball.scaleX;
			this.score++;
			this.scorePanel.setScore(this.score)
		};
		e.prototype.powerCollected = function(t) {
			var e = utils.createBitmapByName("plus");
			e.x = t - e.width / 2;
			e.y = this.ball.y - this.ball.height;
			this.addChild(e);
			egret.Tween.get(e).to({
				y: this.ball.y - this.ball.height - 70
			}, 450).call(function() {
				this.removeChild(e)
			}, this);
			this.score += 2;
			this.scorePanel.setScore(this.score)
		};
		e.prototype.isOutOfBounds = function() {
			var t, e;
			e = this.blocks.length;
			for (t = 0; t < e; t++)
				if (utils.isOnBlock(this.blocks[t], this.ball)) return !1;
			return !0
		};
		e.prototype.gameRestart = function(t) {
			this.removeChildren();
			this.initBeforeStart();
			console.info("restart")
		};
		e.prototype.gameOver = function() {
			// updateShare(this.score);
			// Play68.setRankingScoreDesc(this.score);
			// Play68.closeRecommend();
			console.info("over");
			this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeDirection, this);
			this.addEventListener(egret.Event.ENTER_FRAME, this.dropBall, this);
			utils.storeBestScore(this.score)
		};
		e.prototype.dropBall = function() {
			var t = egret.getTimer(),
				e = 1e3 / (t - this.lastTime);
			this.lastTime = t;
			t = 60 / e;
			this.ball.x += this.ballSpeed * t;
			this.setChildIndex(this.ball, 1);
			this.ball.y += 10 * t * Main.factor;
			this.ball.y > this.stageH + this.ball.height && (this.removeEventListener(egret.Event.ENTER_FRAME, this.dropBall, this), this.showOverPanel())
		};
		e.prototype.showOverPanel = function() {
			this.removeChild(this.scorePanel);
			this.gameOverPanel = new GameOverPanel;
			this.gameOverPanel.x = (this.stageW - this.gameOverPanel.width) / 2;
			this.gameOverPanel.addEventListener("game_restart", this.gameRestart, this);
			window.haveShare && this.gameOverPanel.addEventListener("game_share", this.shareGame, this);
			window.haveGamelist && this.gameOverPanel.addEventListener("game_get_more", this.getMoreGame, this);
			this.gameOverPanel.y = this.stageH;
			this.gameOverPanel.setScore(this.score);
			this.gameOverPanel.setBestScore(utils.getBestScore());
			this.addChild(this.gameOverPanel);
			egret.Tween.get(this.gameOverPanel).to({
				y: (this.stageH - this.gameOverPanel.height) / 2
			}, 450, egret.Ease.backOut)
		};
		e.prototype.addShadow = function(t, e) {
			this.contains(this.shadow) && (this.removeChild(this.shadow), this.shadow = null);
			this.shadow = new egret.Shape;
			this.shadow.graphics.beginFill(t, e);
			this.shadow.graphics.drawRect(0, 0, this.stageW, this.stageH);
			this.shadow.name = "shadow";
			this.shadow.graphics.endFill();
			this.addChild(this.shadow)
		};
		e.prototype.shareGame = function(t) {
			// play68_submitScore(this.score);
		};
		e.prototype.getMoreGame = function() {
			// Play68.goHome();
		};
		e.prototype.outerStart = function() {
			this.removeChildren();
			this.initBeforeStart()
		};
		return e
	}(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";