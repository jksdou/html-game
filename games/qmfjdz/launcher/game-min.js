var egret;
(function(c) {
    var e = function() {
        function c() {
            this._hashCode = c.hashCount++
        }
        Object.defineProperty(c.prototype, "hashCode", {
            get: function() {
                return this._hashCode
            },
            enumerable: !0,
            configurable: !0
        });
        c.hashCount = 1;
        return c
    }();
    c.HashObject = e;
    e.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    };
(function(c) {
    var e = function(c) {
        function b(a) {
            void 0 === a && (a = 300);
            c.call(this);
            this.objectPool = [];
            this._length = 0;
            1 > a && (a = 1);
            this.autoDisposeTime = a;
            this.frameCount = 0
        }
        __extends(b, c);
        b.prototype._checkFrame = function() {
            this.frameCount--;
            0 >= this.frameCount && this.dispose()
        };
        Object.defineProperty(b.prototype, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.push = function(a) {
            var d = this.objectPool; - 1 == d.indexOf(a) && (d.push(a), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, b._callBackList.push(this)))
        };
        b.prototype.pop = function() {
            if (0 == this._length) return null;
            this._length--;
            return this.objectPool.pop()
        };
        b.prototype.dispose = function() {
            0 < this._length && (this.objectPool = [], this._length = 0);
            this.frameCount = 0;
            var a = b._callBackList,
                d = a.indexOf(this); - 1 != d && a.splice(d, 1)
        };
        b._callBackList = [];
        return b
    }(c.HashObject);
    c.Recycler = e;
    e.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(c) {
    c.__START_TIME;
    c.getTimer = function() {
        return Date.now() - c.__START_TIME
    }
})(egret || (egret = {}));
(function(c) {
    c.__callLaterFunctionList = [];
    c.__callLaterThisList = [];
    c.__callLaterArgsList = [];
    c.callLater = function(e, f) {
        for (var b = [], a = 2; a < arguments.length; a++) b[a - 2] = arguments[a];
        c.__callLaterFunctionList.push(e);
        c.__callLaterThisList.push(f);
        c.__callLaterArgsList.push(b)
    };
    c.__callAsyncFunctionList = [];
    c.__callAsyncThisList = [];
    c.__callAsyncArgsList = [];
    c.__callAsync = function(e, f) {
        for (var b = [], a = 2; a < arguments.length; a++) b[a - 2] = arguments[a];
        c.__callAsyncFunctionList.push(e);
        c.__callAsyncThisList.push(f);
        c.__callAsyncArgsList.push(b)
    }
})(egret || (egret = {}));
var egret_dom;
(function(c) {
    function e() {
        for (var c = document.createElement("div").style, b = ["t", "webkitT", "msT", "MozT", "OT"], a = 0; a < b.length; a++)
            if (b[a] + "ransform" in c) return b[a];
        return b[0]
    }
    c.header = "";
    c.getHeader = e;
    c.getTrans = function(f) {
        "" == c.header && (c.header = e());
        return c.header + f.substring(1, f.length)
    }
})(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            e.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = a;
            this._bubbles = d;
            this._cancelable = b
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "type", {
            get: function() {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "bubbles", {
            get: function() {
                return this._bubbles
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "cancelable", {
            get: function() {
                return this._cancelable
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "eventPhase", {
            get: function() {
                return this._eventPhase
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "currentTarget", {
            get: function() {
                return this._currentTarget
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "target", {
            get: function() {
                return this._target
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.isDefaultPrevented = function() {
            return this._isDefaultPrevented
        };
        b.prototype.preventDefault = function() {
            this._cancelable && (this._isDefaultPrevented = !0)
        };
        b.prototype.stopPropagation = function() {
            this._bubbles && (this._isPropagationStopped = !0)
        };
        b.prototype.stopImmediatePropagation = function() {
            this._bubbles && (this._isPropagationImmediateStopped = !0)
        };
        b.prototype._reset = function() {
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
        };
        b._dispatchByTarget = function(a, d, b, e, f, g) {
            void 0 === f && (f = !1);
            void 0 === g && (g = !1);
            var h = a.eventRecycler;
            h || (h = a.eventRecycler = new c.Recycler);
            var k = h.pop();
            k ? k._type = b : k = new a(b);
            k._bubbles = f;
            k._cancelable = g;
            if (e)
                for (var l in e) k[l] = e[l], null !== k[l] && (e[l] = null);
            a = d.dispatchEvent(k);
            h.push(k);
            return a
        };
        b._getPropertyData = function(a) {
            var d = a._props;
            d || (d = a._props = {});
            return d
        };
        b.dispatchEvent = function(a, d, s, c) {
            void 0 === s && (s = !1);
            var e = b._getPropertyData(b);
            c && (e.data = c);
            b._dispatchByTarget(b, a, d, e, s)
        };
        b.ADDED_TO_STAGE = "addedToStage";
        b.REMOVED_FROM_STAGE = "removedFromStage";
        b.ADDED = "added";
        b.REMOVED = "removed";
        b.COMPLETE = "complete";
        b.ENTER_FRAME = "enterFrame";
        b.RENDER = "render";
        b.FINISH_RENDER = "finishRender";
        b.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
        b.LEAVE_STAGE = "leaveStage";
        b.RESIZE = "resize";
        b.CHANGE = "change";
        b.ACTIVATE = "activate";
        b.DEACTIVATE = "deactivate";
        b.CLOSE = "close";
        b.CONNECT = "connect";
        return b
    }(c.HashObject);
    c.Event = e;
    e.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b(a, d, b) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            c.call(this, a, d, b);
            this._status = 0
        }
        __extends(b, c);
        Object.defineProperty(b.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !0,
            configurable: !0
        });
        b.dispatchHTTPStatusEvent = function(a, d) {
            null == b.httpStatusEvent && (b.httpStatusEvent = new b(b.HTTP_STATUS));
            b.httpStatusEvent._status = d;
            a.dispatchEvent(b.httpStatusEvent)
        };
        b.HTTP_STATUS = "httpStatus";
        b.httpStatusEvent = null;
        return b
    }(c.Event);
    c.HTTPStatusEvent = e;
    e.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            e.call(this, a, d, b)
        }
        __extends(b, e);
        b.dispatchIOErrorEvent = function(a) {
            c.Event._dispatchByTarget(b, a, b.IO_ERROR)
        };
        b.IO_ERROR = "ioError";
        return b
    }(c.Event);
    c.IOErrorEvent = e;
    e.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b, c, q, g, h, k, l, m) {
            void 0 === d && (d = !0);
            void 0 === b && (b = !0);
            void 0 === c && (c = 0);
            void 0 === q && (q = 0);
            void 0 === g && (g = 0);
            void 0 === h && (h = !1);
            void 0 === k && (k = !1);
            void 0 === m && (m = !1);
            e.call(this, a, d, b);
            this._stageY = this._stageX = 0;
            this.touchPointID = c;
            this._stageX = q;
            this._stageY = g;
            this.ctrlKey = h;
            this.altKey = k;
            this.touchDown = m
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "stageX", {
            get: function() {
                return this._stageX
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "stageY", {
            get: function() {
                return this._stageY
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "localX", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "localY", {
            get: function() {
                return this._currentTarget.globalToLocal(this._stageX, this._stageY, c.Point.identity).y
            },
            enumerable: !0,
            configurable: !0
        });
        b.dispatchTouchEvent = function(a, d, s, e, f, g, h, k, l) {
            void 0 === s && (s = 0);
            void 0 === e && (e = 0);
            void 0 === f && (f = 0);
            void 0 === g && (g = !1);
            void 0 === h && (h = !1);
            void 0 === k && (k = !1);
            void 0 === l && (l = !1);
            var m = c.Event._getPropertyData(b);
            m.touchPointID = s;
            m._stageX = e;
            m._stageY = f;
            m.ctrlKey = g;
            m.altKey = h;
            m.shiftKey = k;
            m.touchDown = l;
            c.Event._dispatchByTarget(b, a, d, m, !0, !0)
        };
        b.TOUCH_TAP = "touchTap";
        b.TOUCH_MOVE = "touchMove";
        b.TOUCH_BEGIN = "touchBegin";
        b.TOUCH_END = "touchEnd";
        b.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
        b.TOUCH_ROLL_OUT = "touchRollOut";
        b.TOUCH_ROLL_OVER = "touchRollOver";
        b.TOUCH_OUT = "touchOut";
        b.TOUCH_OVER = "touchOver";
        return b
    }(c.Event);
    c.TouchEvent = e;
    e.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            e.call(this, a, d, b)
        }
        __extends(b, e);
        b.dispatchTimerEvent = function(a, d) {
            c.Event._dispatchByTarget(b, a, d)
        };
        b.TIMER = "timer";
        b.TIMER_COMPLETE = "timerComplete";
        return b
    }(c.Event);
    c.TimerEvent = e;
    e.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b, c, q) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            void 0 === c && (c = 0);
            void 0 === q && (q = 0);
            e.call(this, a, d, b);
            this.bytesLoaded = c;
            this.bytesTotal = q
        }
        __extends(b, e);
        b.dispatchProgressEvent = function(a, d, s, e) {
            void 0 === s && (s = 0);
            void 0 === e && (e = 0);
            c.Event._dispatchByTarget(b, a, d, {
                bytesLoaded: s,
                bytesTotal: e
            })
        };
        b.PROGRESS = "progress";
        b.SOCKET_DATA = "socketData";
        return b
    }(c.Event);
    c.ProgressEvent = e;
    e.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.CAPTURING_PHASE = 1;
        c.AT_TARGET = 2;
        c.BUBBLING_PHASE = 3;
        return c
    }();
    c.EventPhase = e;
    e.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            void 0 === a && (a = null);
            e.call(this);
            this._eventTarget = a ? a : this
        }
        __extends(b, e);
        b.prototype.addEventListener = function(a, d, b, e, f) {
            void 0 === e && (e = !1);
            void 0 === f && (f = 0);
            "undefined" === typeof e && (e = !1);
            "undefined" === typeof f && (f = 0);
            d || c.Logger.fatal("addEventListener侦听函数不能为空");
            e ? (this._captureEventsMap || (this._captureEventsMap = {}), e = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), e = this._eventsMap);
            var g = e[a];
            g || (g = e[a] = []);
            this._insertEventBin(g, d, b, f)
        };
        b.prototype._insertEventBin = function(a, d, b, c, e) {
            void 0 === e && (e = void 0);
            for (var f = -1, h = a.length, k = 0; k < h; k++) {
                var l = a[k];
                if (l.listener === d && l.thisObject === b && l.display === e) return !1; - 1 == f && l.priority < c && (f = k)
            }
            d = {
                listener: d,
                thisObject: b,
                priority: c
            };
            e && (d.display = e); - 1 != f ? a.splice(f, 0, d) : a.push(d);
            return !0
        };
        b.prototype.removeEventListener = function(a, d, b, c) {
            void 0 === c && (c = !1);
            if (c = c ? this._captureEventsMap : this._eventsMap) {
                var e = c[a];
                e && (this._removeEventBin(e, d, b), 0 == e.length && delete c[a])
            }
        };
        b.prototype._removeEventBin = function(a, d, b, c) {
            void 0 === c && (c = void 0);
            for (var e = a.length, f = 0; f < e; f++) {
                var h = a[f];
                if (h.listener === d && h.thisObject === b && h.display === c) return a.splice(f, 1), !0
            }
            return !1
        };
        b.prototype.hasEventListener = function(a) {
            return this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a]
        };
        b.prototype.willTrigger = function(a) {
            return this.hasEventListener(a)
        };
        b.prototype.dispatchEvent = function(a) {
            a._reset();
            a._target = this._eventTarget;
            a._currentTarget = this._eventTarget;
            return this._notifyListener(a)
        };
        b.prototype._notifyListener = function(a) {
            var d = 1 == a._eventPhase ? this._captureEventsMap : this._eventsMap;
            if (!d) return !0;
            d = d[a._type];
            if (!d) return !0;
            var b = d.length;
            if (0 == b) return !0;
            for (var d = d.concat(), c = 0; c < b; c++) {
                var e = d[c];
                e.listener.call(e.thisObject, a);
                if (a._isPropagationImmediateStopped) break
            }
            return !a._isDefaultPrevented
        };
        b.prototype.dispatchEventWith = function(a, d, b) {
            void 0 === d && (d = !1);
            c.Event.dispatchEvent(this, a, d, b)
        };
        return b
    }(c.HashObject);
    c.EventDispatcher = e;
    e.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this.reuseEvent = new c.Event("")
        }
        __extends(b, e);
        b.prototype.run = function() {
            c.Ticker.getInstance().run();
            c.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            c.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run()
        };
        b.prototype.renderLoop = function(a) {
            if (0 < c.__callLaterFunctionList.length) {
                var d = c.__callLaterFunctionList;
                c.__callLaterFunctionList = [];
                var s = c.__callLaterThisList;
                c.__callLaterThisList = [];
                var e = c.__callLaterArgsList;
                c.__callLaterArgsList = []
            }
            a = this.stage;
            var f = b.cachedEvent;
            f._type = c.Event.RENDER;
            this.dispatchEvent(f);
            c.Stage._invalidateRenderFlag && (this.broadcastRender(), c.Stage._invalidateRenderFlag = !1);
            d && this.doCallLaterList(d, s, e);
            0 < c.__callAsyncFunctionList.length && this.doCallAsyncList();
            d = this.rendererContext;
            d.onRenderStart();
            d.clearScreen();
            a._updateTransform();
            f._type = c.Event.FINISH_UPDATE_TRANSFORM;
            this.dispatchEvent(f);
            a._draw(d);
            f._type = c.Event.FINISH_RENDER;
            this.dispatchEvent(f);
            d.onRenderFinish()
        };
        b.prototype.broadcastEnterFrame = function(a) {
            a = this.reuseEvent;
            a._type = c.Event.ENTER_FRAME;
            this.dispatchEvent(a);
            for (var d = c.DisplayObject._enterFrameCallBackList.concat(), b = d.length, e = 0; e < b; e++) {
                var f = d[e];
                a._target = f.display;
                a._currentTarget = f.display;
                f.listener.call(f.thisObject, a)
            }
            d = c.Recycler._callBackList;
            for (e = d.length - 1; 0 <= e; e--) d[e]._checkFrame()
        };
        b.prototype.broadcastRender = function() {
            var a = this.reuseEvent;
            a._type = c.Event.RENDER;
            for (var d = c.DisplayObject._renderCallBackList.concat(), b = d.length, e = 0; e < b; e++) {
                var f = d[e],
                    g = f.display;
                a._target = g;
                a._currentTarget = g;
                f.listener.call(f.thisObject, a)
            }
        };
        b.prototype.doCallLaterList = function(a, d, b) {
            for (var c = a.length, e = 0; e < c; e++) {
                var f = a[e];
                null != f && f.apply(d[e], b[e])
            }
        };
        b.prototype.doCallAsyncList = function() {
            var a = c.__callAsyncFunctionList.concat(),
                d = c.__callAsyncThisList.concat(),
                b = c.__callAsyncArgsList.concat();
            c.__callAsyncFunctionList.length = 0;
            c.__callAsyncThisList.length = 0;
            for (var e = c.__callAsyncArgsList.length = 0; e < a.length; e++) {
                var f = a[e];
                null != f && f.apply(d[e], b[e])
            }
        };
        b.DEVICE_PC = "web";
        b.DEVICE_MOBILE = "native";
        b.RUNTIME_HTML5 = "runtime_html5";
        b.RUNTIME_NATIVE = "runtime_native";
        b.cachedEvent = new c.Event("");
        return b
    }(c.EventDispatcher);
    c.MainContext = e;
    e.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return !0;
    var c = navigator.userAgent.toLowerCase();
    return -1 != c.indexOf("mobile") || -1 != c.indexOf("android")
}, testRuntimeType = function() {
        return this.navigator ? !0 : !1
    };
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(c) {
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
            c.Ticker.getInstance().register(this.update, this);
            null == this._txt && (this._txt = new c.TextField, this._txt.size = 28, this._txt.multiline = !0, c.MainContext.instance.stage.addChild(this._txt));
            var b = c.MainContext.instance;
            b.addEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
            b.addEventListener(c.Event.RENDER, this.onStartRender, this);
            b.addEventListener(c.Event.FINISH_RENDER, this.onFinishRender, this);
            b.addEventListener(c.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
        };
        e.prototype.onEnterFrame = function(b) {
            this._lastTime = c.getTimer()
        };
        e.prototype.onStartRender = function(b) {
            b = c.getTimer();
            this._logicPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        e.prototype.onFinishUpdateTransform = function(b) {
            b = c.getTimer();
            this._updateTransformPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        e.prototype.onFinishRender = function(b) {
            b = c.getTimer();
            this._renderPerformanceCost = b - this._lastTime;
            this._lastTime = b
        };
        e.prototype.update = function(b) {
            this._tick++;
            this._totalDeltaTime += b;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                b = (this._preDrawCount - 1).toString();
                var a = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(c.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + b + "\ncost:" + a + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        };
        e.prototype.onDrawImage = function() {
            this._preDrawCount++
        };
        return e
    }();
    c.Profiler = e;
    e.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.apply(this, arguments);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = []
        }
        __extends(b, e);
        b.prototype.run = function() {
            c.__START_TIME = (new Date).getTime();
            c.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        b.prototype.update = function(a) {
            var d = this.callBackList.concat(),
                b = d.length;
            a *= this._timeScale;
            a *= this._timeScale;
            for (var c = 0; c < b; c++) {
                var e = d[c];
                e.listener.call(e.thisObject, a)
            }
        };
        b.prototype.register = function(a, d, b) {
            void 0 === b && (b = 0);
            this._insertEventBin(this.callBackList, a, d, b)
        };
        b.prototype.unregister = function(a, d) {
            this._removeEventBin(this.callBackList, a, d)
        };
        b.prototype.setTimeout = function(a, d, b) {
            for (var e = [], f = 3; f < arguments.length; f++) e[f - 3] = arguments[f];
            c.Logger.warning("Ticker#setTimeout方法即将废弃,请使用egret.setTimeout");
            c.setTimeout.apply(null, [a, d, b].concat(e))
        };
        b.prototype.setTimeScale = function(a) {
            this._timeScale = a
        };
        b.prototype.getTimeScale = function() {
            return this._timeScale
        };
        b.prototype.pause = function() {
            this._paused = !0
        };
        b.prototype.resume = function() {
            this._paused = !1
        };
        b.getInstance = function() {
            null == b.instance && (b.instance = new b);
            return b.instance
        };
        return b
    }(c.EventDispatcher);
    c.Ticker = e;
    e.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.LEFT = "left";
        c.RIGHT = "right";
        c.CENTER = "center";
        c.JUSTIFY = "justify";
        c.CONTENT_JUSTIFY = "contentJustify";
        return c
    }();
    c.HorizontalAlign = e;
    e.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.TOP = "top";
        c.BOTTOM = "bottom";
        c.MIDDLE = "middle";
        c.JUSTIFY = "justify";
        c.CONTENT_JUSTIFY = "contentJustify";
        return c
    }();
    c.VerticalAlign = e;
    e.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d) {
            void 0 === d && (d = 0);
            e.call(this);
            this._currentCount = 0;
            this.delay = a;
            this.repeatCount = d
        }
        __extends(b, e);
        b.prototype.currentCount = function() {
            return this._currentCount
        };
        Object.defineProperty(b.prototype, "running", {
            get: function() {
                return this._running
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.reset = function() {
            this.stop();
            this._currentCount = 0
        };
        b.prototype.start = function() {
            this._running || (this.lastTime = c.getTimer(), 0 != this._currentCount && (this._currentCount = 0), c.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
        };
        b.prototype.stop = function() {
            this._running && (c.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
        };
        b.prototype.onEnterFrame = function(a) {
            a = c.getTimer();
            a - this.lastTime > this.delay && (this.lastTime = a, this._currentCount++, c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), c.TimerEvent.dispatchTimerEvent(this, c.TimerEvent.TIMER_COMPLETE)))
        };
        return b
    }(c.EventDispatcher);
    c.Timer = e;
    e.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(c) {
    function e(c) {
        c = c.prototype ? c.prototype : Object.getPrototypeOf(c);
        if (c.hasOwnProperty("__class__")) return c.__class__;
        var b = c.constructor.toString(),
            a = b.indexOf("("),
            b = b.substring(9, a);
        Object.defineProperty(c, "__class__", {
            value: b,
            enumerable: !1,
            writable: !0
        });
        return b
    }
    c.getQualifiedClassName = e;
    c.getQualifiedSuperclassName = function(c) {
        c = c.prototype ? c.prototype : Object.getPrototypeOf(c);
        if (c.hasOwnProperty("__superclass__")) return c.__superclass__;
        var b = Object.getPrototypeOf(c);
        if (null == b) return null;
        b = e(b.constructor);
        if (!b) return null;
        Object.defineProperty(c, "__superclass__", {
            value: b,
            enumerable: !1,
            writable: !0
        });
        return b
    }
})(egret || (egret = {}));
(function(c) {
    var e = {};
    c.getDefinitionByName = function(c) {
        if (!c) return null;
        var b = e[c];
        if (b) return b;
        for (var a = c.split("."), d = a.length, b = __global, s = 0; s < d; s++)
            if (b = b[a[s]], !b) return null;
        return e[c] = b
    }
})(egret || (egret = {}));
var __global = __global || this;
(function(c) {
    function e(a) {
        for (var d in f) {
            var b = f[d];
            b.delay -= a;
            0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete f[d])
        }
    }
    var f = {}, b = 0;
    c.setTimeout = function(a, d, s) {
        for (var x = [], q = 3; q < arguments.length; q++) x[q - 3] = arguments[q];
        x = {
            listener: a,
            thisObject: d,
            delay: s,
            params: x
        };
        0 == b && c.Ticker.getInstance().register(e, null);
        b++;
        f[b] = x;
        return b
    };
    c.clearTimeout = function(a) {
        delete f[a]
    }
})(egret || (egret = {}));
(function(c) {
    c.hasDefinition = function(e) {
        return c.getDefinitionByName(e) ? !0 : !1
    }
})(egret || (egret = {}));
(function(c) {
    c.toColorString = function(c) {
        if (isNaN(c) || 0 > c) c = 0;
        16777215 < c && (c = 16777215);
        for (c = c.toString(16).toUpperCase(); 6 > c.length;) c = "0" + c;
        return "#" + c
    }
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b, c, q, g) {
            void 0 === a && (a = 1);
            void 0 === d && (d = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 1);
            void 0 === q && (q = 0);
            void 0 === g && (g = 0);
            e.call(this);
            this.a = a;
            this.b = d;
            this.c = b;
            this.d = c;
            this.tx = q;
            this.ty = g
        }
        __extends(b, e);
        b.prototype.prepend = function(a, d, b, c, e, f) {
            var h = this.tx;
            if (1 != a || 0 != d || 0 != b || 1 != c) {
                var k = this.a,
                    l = this.c;
                this.a = k * a + this.b * b;
                this.b = k * d + this.b * c;
                this.c = l * a + this.d * b;
                this.d = l * d + this.d * c
            }
            this.tx = h * a + this.ty * b + e;
            this.ty = h * d + this.ty * c + f;
            return this
        };
        b.prototype.append = function(a, d, b, c, e, f) {
            var h = this.a,
                k = this.b,
                l = this.c,
                m = this.d;
            if (1 != a || 0 != d || 0 != b || 1 != c) this.a = a * h + d * l, this.b = a * k + d * m, this.c = b * h + c * l, this.d = b * k + c * m;
            this.tx = e * h + f * l + this.tx;
            this.ty = e * k + f * m + this.ty;
            return this
        };
        b.prototype.prependTransform = function(a, d, b, e, f, g, h, k, l) {
            if (f % 360) {
                var m = c.NumberUtils.cos(f);
                f = c.NumberUtils.sin(f)
            } else m = 1, f = 0; if (k || l) this.tx -= k, this.ty -= l;
            g || h ? (this.prepend(m * b, f * b, -f * e, m * e, 0, 0), this.prepend(c.NumberUtils.cos(h), c.NumberUtils.sin(h), -c.NumberUtils.sin(g), c.NumberUtils.cos(g), a, d)) : this.prepend(m * b, f * b, -f * e, m * e, a, d);
            return this
        };
        b.prototype.appendTransform = function(a, d, b, e, f, g, h, k, l) {
            if (f % 360) {
                var m = c.NumberUtils.cos(f);
                f = c.NumberUtils.sin(f)
            } else m = 1, f = 0;
            g || h ? (this.append(c.NumberUtils.cos(h), c.NumberUtils.sin(h), -c.NumberUtils.sin(g), c.NumberUtils.cos(g), a, d), this.append(m * b, f * b, -f * e, m * e, 0, 0)) : this.append(m * b, f * b, -f * e, m * e, a, d);
            if (k || l) this.tx -= k * this.a + l * this.c, this.ty -= k * this.b + l * this.d;
            return this
        };
        b.prototype.rotate = function(a) {
            var d = Math.cos(a);
            a = Math.sin(a);
            var b = this.a,
                c = this.c,
                e = this.tx;
            this.a = b * d - this.b * a;
            this.b = b * a + this.b * d;
            this.c = c * d - this.d * a;
            this.d = c * a + this.d * d;
            this.tx = e * d - this.ty * a;
            this.ty = e * a + this.ty * d;
            return this
        };
        b.prototype.skew = function(a, d) {
            this.append(c.NumberUtils.cos(d), c.NumberUtils.sin(d), -c.NumberUtils.sin(a), c.NumberUtils.cos(a), 0, 0);
            return this
        };
        b.prototype.scale = function(a, d) {
            this.a *= a;
            this.d *= d;
            this.c *= a;
            this.b *= d;
            this.tx *= a;
            this.ty *= d;
            return this
        };
        b.prototype.translate = function(a, d) {
            this.tx += a;
            this.ty += d;
            return this
        };
        b.prototype.identity = function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this
        };
        b.prototype.identityMatrix = function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.tx = a.tx;
            this.ty = a.ty;
            return this
        };
        b.prototype.invert = function() {
            var a = this.a,
                d = this.b,
                b = this.c,
                c = this.d,
                e = this.tx,
                f = a * c - d * b;
            this.a = c / f;
            this.b = -d / f;
            this.c = -b / f;
            this.d = a / f;
            this.tx = (b * this.ty - c * e) / f;
            this.ty = -(a * this.ty - d * e) / f;
            return this
        };
        b.transformCoords = function(a, d, b) {
            var e = c.Point.identity;
            e.x = a.a * d + a.c * b + a.tx;
            e.y = a.d * b + a.b * d + a.ty;
            return e
        };
        b.prototype.toArray = function(a) {
            this.array || (this.array = new Float32Array(9));
            a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        };
        b.identity = new b;
        b.DEG_TO_RAD = Math.PI / 180;
        return b
    }(c.HashObject);
    c.Matrix = e;
    e.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b(a, d) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            c.call(this);
            this.x = a;
            this.y = d
        }
        __extends(b, c);
        b.prototype.clone = function() {
            return new b(this.x, this.y)
        };
        b.prototype.equals = function(a) {
            return this.x == a.x && this.y == a.y
        };
        b.distance = function(a, d) {
            return Math.sqrt((a.x - d.x) * (a.x - d.x) + (a.y - d.y) * (a.y - d.y))
        };
        b.identity = new b(0, 0);
        return b
    }(c.HashObject);
    c.Point = e;
    e.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b(a, d, b, e) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            void 0 === b && (b = 0);
            void 0 === e && (e = 0);
            c.call(this);
            this.x = a;
            this.y = d;
            this.width = b;
            this.height = e
        }
        __extends(b, c);
        Object.defineProperty(b.prototype, "right", {
            get: function() {
                return this.x + this.width
            },
            set: function(a) {
                this.width = a - this.x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(a) {
                this.height = a - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.initialize = function(a, d, b, c) {
            this.x = a;
            this.y = d;
            this.width = b;
            this.height = c;
            return this
        };
        b.prototype.contains = function(a, d) {
            return this.x <= a && this.x + this.width >= a && this.y <= d && this.y + this.height >= d
        };
        b.prototype.intersects = function(a) {
            var d = a.right,
                b = a.bottom,
                c = this.right,
                e = this.bottom;
            return this.contains(a.x, a.y) || this.contains(a.x, b) || this.contains(d, a.y) || this.contains(d, b) || a.contains(this.x, this.y) || a.contains(this.x, e) || a.contains(c, this.y) || a.contains(c, e) ? !0 : !1
        };
        b.prototype.clone = function() {
            return new b(this.x, this.y, this.width, this.height)
        };
        b.prototype.containsPoint = function(a) {
            return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
        };
        b.identity = new b(0, 0, 0, 0);
        return b
    }(c.HashObject);
    c.Rectangle = e;
    e.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function e() {}
        e.fatal = function(b, a) {
            void 0 === a && (a = null);
            c.Logger.traceToConsole("Fatal", b, a);
            throw Error(c.Logger.getTraceCode("Fatal", b, a));
        };
        e.info = function(b, a) {
            void 0 === a && (a = null);
            c.Logger.traceToConsole("Info", b, a)
        };
        e.warning = function(b, a) {
            void 0 === a && (a = null);
            c.Logger.traceToConsole("Warning", b, a)
        };
        e.traceToConsole = function(b, a, d) {
          //  console.log(c.Logger.getTraceCode(b, a, d))
        };
        e.getTraceCode = function(b, a, d) {
            return "[" + b + "]" + a + ":" + (null == d ? "" : d)
        };
        return e
    }();
    c.Logger = e;
    e.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(b, e);
        b.getInstance = function() {
            b._instance || (b._instance = new b);
            return b._instance
        };
        b.prototype.parserXML = function(a) {
            for (var d = 0;
                "\n" == a.charAt(d) || "\t" == a.charAt(d) || "\r" == a.charAt(d) || " " == a.charAt(d);) d++;
            0 != d && (a = a.substring(d, a.length));
            this._isSupportDOMParser ? d = this._parser.parseFromString(a, "text/xml") : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a));
            null == d && c.Logger.info("xml not found!");
            return d
        };
        b._instance = null;
        return b
    }(c.HashObject);
    c.SAXParser = e;
    e.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(d) {
        function a() {
            d.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            this._stageHeight = this._stageWidth = this._offSetY = 0
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (b.initialize(), a.instance = new a);
            return a.instance
        };
        a.prototype.setDesignSize = function(d, a, b) {
            this._designWidth = d;
            this._designHeight = a;
            b && (c.Logger.warning("该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级"), this._setResolutionPolicy(b))
        };
        a.prototype._setResolutionPolicy = function(d) {
            this._resolutionPolicy = d;
            d.init(this);
            d._apply(this, this._designWidth, this._designHeight)
        };
        a.prototype.getScaleX = function() {
            return this._scaleX
        };
        a.prototype.getScaleY = function() {
            return this._scaleY
        };
        a.prototype.getOffSetY = function() {
            return this._offSetY
        };
        a.canvas_name = "egretCanvas";
        a.canvas_div_name = "gameDiv";
        return a
    }(c.HashObject);
    c.StageDelegate = e;
    e.prototype.__class__ = "egret.StageDelegate";
    var f = function() {
        function d(a, b) {
            this._containerStrategy = a;
            this._contentStrategy = b
        }
        d.prototype.init = function(d) {
            this._containerStrategy.init(d);
            this._contentStrategy.init(d)
        };
        d.prototype._apply = function(d, a, b) {
            this._containerStrategy._apply(d, a, b);
            this._contentStrategy._apply(d, a, b)
        };
        return d
    }();
    c.ResolutionPolicy = f;
    f.prototype.__class__ = "egret.ResolutionPolicy";
    var b = function() {
        function d() {}
        d.initialize = function() {
            d.EQUAL_TO_FRAME = new a
        };
        d.prototype.init = function(d) {};
        d.prototype._apply = function(d, a, b) {};
        d.prototype._setupContainer = function() {
            var d = document.body,
                a;
            d && (a = d.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
        };
        return d
    }();
    c.ContainerStrategy = b;
    b.prototype.__class__ = "egret.ContainerStrategy";
    var a = function(d) {
        function a() {
            d.apply(this, arguments)
        }
        __extends(a, d);
        a.prototype._apply = function(d) {
            this._setupContainer()
        };
        return a
    }(b);
    c.EqualToFrame = a;
    a.prototype.__class__ = "egret.EqualToFrame";
    f = function() {
        function d() {}
        d.prototype.init = function(d) {};
        d.prototype._apply = function(d, a, b) {};
        d.prototype.setEgretSize = function(d, a, b, s, f, l) {
            void 0 === l && (l = 0);
            c.StageDelegate.getInstance()._stageWidth = Math.round(d);
            c.StageDelegate.getInstance()._stageHeight = Math.round(a);
            d = document.getElementById(e.canvas_div_name);
            d.style.width = b + "px";
            d.style.height = s + "px";
            d.style.top = l + "px"
        };
        d.prototype._getClientWidth = function() {
            return document.documentElement.clientWidth
        };
        d.prototype._getClientHeight = function() {
            return document.documentElement.clientHeight
        };
        return d
    }();
    c.ContentStrategy = f;
    f.prototype.__class__ = "egret.ContentStrategy";
    var d = function(d) {
        function a(b) {
            void 0 === b && (b = 0);
            d.call(this);
            this.minWidth = b
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            a = this._getClientWidth();
            var s = this._getClientHeight(),
                c = s / b,
                e = a / c,
                f = 1;
            0 != this.minWidth && (f = Math.min(1, e / this.minWidth));
            this.setEgretSize(e / f, b, a, s * f);
            d._scaleX = c * f;
            d._scaleY = c * f
        };
        return a
    }(f);
    c.FixedHeight = d;
    d.prototype.__class__ = "egret.FixedHeight";
    d = function(d) {
        function a(b) {
            void 0 === b && (b = 0);
            d.call(this);
            this.minHeight = b
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            b = this._getClientWidth();
            var s = this._getClientHeight(),
                c = b / a,
                e = s / c,
                f = 1;
            0 != this.minHeight && (f = Math.min(1, e / this.minHeight));
            this.setEgretSize(a, e / f, b * f, s, b * (1 - f) / 2);
            d._scaleX = c * f;
            d._scaleY = c * f
        };
        return a
    }(f);
    c.FixedWidth = d;
    d.prototype.__class__ = "egret.FixedWidth";
    d = function(d) {
        function a(b, c) {
            d.call(this);
            this.width = b;
            this.height = c
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            b = this.width;
            var s = this.height,
                c = b / a;
            this.setEgretSize(a, s / c, b, s);
            d._scaleX = c;
            d._scaleY = c
        };
        return a
    }(f);
    c.FixedSize = d;
    d.prototype.__class__ = "egret.FixedSize";
    d = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            this.setEgretSize(a, b, a, b, Math.floor((a - a) / 2));
            d._scaleX = 1;
            d._scaleY = 1
        };
        return a
    }(f);
    c.NoScale = d;
    d.prototype.__class__ = "egret.NoScale";
    d = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            var s = this._getClientWidth(),
                c = this._getClientHeight(),
                e = s,
                f = c,
                x = e / a < f / b ? e / a : f / b,
                e = a * x,
                f = b * x,
                s = Math.floor((s - e) / 2);
            d._offSetY = Math.floor((c - f) / 2);
            this.setEgretSize(a, b / 1, 1 * e, f, s, d._offSetY);
            d._scaleX = 1 * x;
            d._scaleY = 1 * x
        };
        return a
    }(f);
    c.ShowAll = d;
    d.prototype.__class__ = "egret.ShowAll";
    f = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype._apply = function(d, a, b) {
            var s = this._getClientWidth(),
                c = this._getClientHeight(),
                s = s / a,
                c = c / b;
            this.setEgretSize(a, b, a * s, b * c);
            d._scaleX = s;
            d._scaleY = c
        };
        return a
    }(f);
    c.FullScreen = f;
    f.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(b, e);
        b.getInstance = function() {
            null == b.instance && (b.instance = new b);
            return b.instance
        };
        b.prototype.addDrawArea = function(a) {
            this._drawAreaList.push(a)
        };
        b.prototype.clearDrawArea = function() {
            this._drawAreaList = []
        };
        b.prototype.drawImage = function(a, d, b, e, f, g, h, k, l, m, n) {
            void 0 === n && (n = void 0);
            h = h || 0;
            k = k || 0;
            var p = d._texture_to_render;
            if (null != p && 0 != g && 0 != f && 0 != l && 0 != m) {
                var r = c.MainContext.instance.rendererContext.texture_scale_factor;
                f /= r;
                g /= r;
                if (0 != this._drawAreaList.length && c.MainContext.instance.rendererContext._cacheCanvasContext) {
                    r = c.DisplayObject.getTransformBounds(d._getSize(c.Rectangle.identity), d._worldTransform);
                    d._worldBounds.initialize(r.x, r.y, r.width, r.height);
                    r = this._originalData;
                    r.sourceX = b;
                    r.sourceY = e;
                    r.sourceWidth = f;
                    r.sourceHeight = g;
                    r.destX = h;
                    r.destY = k;
                    r.destWidth = l;
                    r.destHeight = m;
                    for (var w = this.getDrawAreaList(), A = 0; A < w.length; A++)
                        if (!this.ignoreRender(d, w[A], r.destX, r.destY)) {
                            a.drawImage(p, b, e, f, g, h, k, l, m, n);
                            break
                        }
                } else a.drawImage(p, b, e, f, g, h, k, l, m, n)
            }
        };
        b.prototype.ignoreRender = function(a, d, b, c) {
            var e = a._worldBounds;
            b *= a._worldTransform.a;
            c *= a._worldTransform.d;
            return e.x + e.width + b <= d.x || e.x + b >= d.x + d.width || e.y + e.height + c <= d.y || e.y + c >= d.y + d.height ? !0 : !1
        };
        b.prototype.getDrawAreaList = function() {
            var a;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new c.Rectangle(0, 0, c.MainContext.instance.stage.stageWidth, c.MainContext.instance.stage.stageHeight)], c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this)), a = this._defaultDrawAreaList) : a = this._drawAreaList;
            return a
        };
        b.prototype.onResize = function() {
            c.MainContext.instance.stage.removeEventListener(c.Event.RESIZE, this.onResize, this);
            this._defaultDrawAreaList = null
        };
        return b
    }(c.HashObject);
    c.RenderFilter = e;
    e.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function e() {}
        e.mapClass = function(b, a, d) {
            void 0 === d && (d = "");
            b = this.getKey(b) + "#" + d;
            this.mapClassDic[b] = a
        };
        e.getKey = function(b) {
            return "string" == typeof b ? b : c.getQualifiedClassName(b)
        };
        e.mapValue = function(b, a, d) {
            void 0 === d && (d = "");
            b = this.getKey(b) + "#" + d;
            this.mapValueDic[b] = a
        };
        e.hasMapRule = function(b, a) {
            void 0 === a && (a = "");
            var d = this.getKey(b) + "#" + a;
            return this.mapValueDic[d] || this.mapClassDic[d] ? !0 : !1
        };
        e.getInstance = function(b, a) {
            void 0 === a && (a = "");
            var d = this.getKey(b) + "#" + a;
            if (this.mapValueDic[d]) return this.mapValueDic[d];
            var c = this.mapClassDic[d];
            if (c) return c = new c, this.mapValueDic[d] = c, delete this.mapClassDic[d], c;
            throw Error("调用了未配置的注入规则:" + d + "。 请先在项目初始化里配置指定的注入规则，再调用对应单例。");
        };
        e.mapClassDic = {};
        e.mapValueDic = {};
        return e
    }();
    c.Injector = e;
    e.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.NORMAL = "normal";
        c.ADD = "add";
        return c
    }();
    c.BlendMode = e;
    e.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
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
            this._worldTransform = new c.Matrix;
            this._worldBounds = new c.Rectangle(0, 0, 0, 0);
            this._cacheBounds = new c.Rectangle(0, 0, 0, 0)
        }
        __extends(b, e);
        b.prototype._setDirty = function() {
            this._normalDirty = !0
        };
        b.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        };
        b.prototype._setParentSizeDirty = function() {
            var a = this._parent;
            !a || a._hasWidthSet || a._hasHeightSet || a._setSizeDirty()
        };
        b.prototype._setSizeDirty = function() {
            this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty())
        };
        b.prototype._clearDirty = function() {
            this._normalDirty = !1
        };
        b.prototype._clearSizeDirty = function() {
            this._sizeDirty = !1
        };
        Object.defineProperty(b.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._parentChanged = function(a) {
            this._parent = a
        };
        Object.defineProperty(b.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._setX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setX = function(a) {
            c.NumberUtils.isNumber(a) && this._x != a && (this._x = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._setY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setY = function(a) {
            c.NumberUtils.isNumber(a) && this._y != a && (this._y = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b.prototype, "scaleX", {
            get: function() {
                return this._scaleX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._scaleX != a && (this._scaleX = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "scaleY", {
            get: function() {
                return this._scaleY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._scaleY != a && (this._scaleY = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "anchorOffsetX", {
            get: function() {
                return this._anchorOffsetX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._anchorOffsetX != a && (this._anchorOffsetX = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "anchorOffsetY", {
            get: function() {
                return this._anchorOffsetY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._anchorOffsetY != a && (this._anchorOffsetY = a, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(a) {
                this._setAnchorX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setAnchorX = function(a) {
            c.NumberUtils.isNumber(a) && this._anchorX != a && (this._anchorX = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(a) {
                this._setAnchorY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setAnchorY = function(a) {
            c.NumberUtils.isNumber(a) && this._anchorY != a && (this._anchorY = a, this._setDirty(), this._setParentSizeDirty())
        };
        Object.defineProperty(b.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(a) {
                this._setVisible(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setVisible = function(a) {
            this._visible != a && (this._visible = a, this._setSizeDirty())
        };
        Object.defineProperty(b.prototype, "rotation", {
            get: function() {
                return this._rotation
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._rotation != a && (this._rotation = a, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._alpha != a && (this._alpha = a, this._setDirty(), this._setCacheDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "skewX", {
            get: function() {
                return this._skewX
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._skewX != a && (this._skewX = a, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "skewY", {
            get: function() {
                return this._skewY
            },
            set: function(a) {
                c.NumberUtils.isNumber(a) && this._skewY != a && (this._skewY = a, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "touchEnabled", {
            get: function() {
                return this._touchEnabled
            },
            set: function(a) {
                this._setTouchEnabled(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setTouchEnabled = function(a) {
            this._touchEnabled = a
        };
        Object.defineProperty(b.prototype, "scrollRect", {
            get: function() {
                return this._scrollRect
            },
            set: function(a) {
                this._setScrollRect(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setScrollRect = function(a) {
            this._scrollRect = a;
            this._setSizeDirty()
        };
        Object.defineProperty(b.prototype, "measuredWidth", {
            get: function() {
                return this._measureBounds().width
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "measuredHeight", {
            get: function() {
                return this._measureBounds().height
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "explicitWidth", {
            get: function() {
                return this._explicitWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "explicitHeight", {
            get: function() {
                return this._explicitHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "width", {
            get: function() {
                return this._getSize(c.Rectangle.identity).width
            },
            set: function(a) {
                this._setWidth(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "height", {
            get: function() {
                return this._getSize(c.Rectangle.identity).height
            },
            set: function(a) {
                this._setHeight(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setWidth = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._explicitWidth = a;
            this._hasWidthSet = c.NumberUtils.isNumber(a)
        };
        b.prototype._setHeight = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._explicitHeight = a;
            this._hasHeightSet = c.NumberUtils.isNumber(a)
        };
        b.prototype._draw = function(a) {
            if (this._visible && !this.drawCacheTexture(a)) {
                this._colorTransform && a.setGlobalColorTransform(this._colorTransform.matrix);
                a.setAlpha(this.worldAlpha, this.blendMode);
                a.setTransform(this._worldTransform);
                var d = this.mask || this._scrollRect;
                d && a.pushMask(d);
                this._render(a);
                d && a.popMask();
                this._colorTransform && a.setGlobalColorTransform(null)
            }
            this.destroyCacheBounds()
        };
        b.prototype.drawCacheTexture = function(a) {
            if (!1 == this._cacheAsBitmap) return !1;
            if (this._cacheDirty || null == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight)) this._cacheDirty = !this._makeBitmapCache();
            if (null == this._texture_to_render) return !1;
            var d = this._texture_to_render,
                b = d._offsetX,
                e = d._offsetY,
                f = d._textureWidth,
                d = d._textureHeight;
            this._updateTransform();
            a.setAlpha(this.worldAlpha, this.blendMode);
            a.setTransform(this._worldTransform);
            var g = c.MainContext.instance.rendererContext.texture_scale_factor;
            c.RenderFilter.getInstance().drawImage(a, this, 0, 0, f * g, d * g, b, e, f, d);
            return !0
        };
        b.prototype._updateTransform = function() {
            this._calculateWorldTransform()
        };
        b.prototype._calculateWorldTransform = function() {
            var a = this._worldTransform,
                d = this._parent;
            a.identityMatrix(d._worldTransform);
            this._getMatrix(a);
            var b = this._scrollRect;
            b && a.append(1, 0, 0, 1, -b.x, -b.y);
            this.worldAlpha = d.worldAlpha * this._alpha
        };
        b.prototype._render = function(a) {};
        b.prototype.getBounds = function(a, d) {
            void 0 === d && (d = !0);
            var b = this._measureBounds(),
                e = this._hasWidthSet ? this._explicitWidth : b.width,
                f = this._hasHeightSet ? this._explicitHeight : b.height;
            this._rectW = b.width;
            this._rectH = b.height;
            this._clearSizeDirty();
            var g = b.x,
                b = b.y,
                h = 0,
                k = 0;
            d && (0 != this._anchorX || 0 != this._anchorY ? (h = e * this._anchorX, k = f * this._anchorY) : (h = this._anchorOffsetX, k = this._anchorOffsetY));
            this._cacheBounds.initialize(g - h, b - k, e, f);
            e = this._cacheBounds;
            a || (a = new c.Rectangle);
            return a.initialize(e.x, e.y, e.width, e.height)
        };
        b.prototype.destroyCacheBounds = function() {
            this._cacheBounds.x = 0;
            this._cacheBounds.y = 0;
            this._cacheBounds.width = 0;
            this._cacheBounds.height = 0
        };
        b.prototype._getConcatenatedMatrix = function() {
            for (var a = b.identityMatrixForGetConcatenated.identity(), d = this; null != d;) {
                if (0 != d._anchorX || 0 != d._anchorY) {
                    var s = d._getSize(c.Rectangle.identity);
                    a.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, s.width * d._anchorX, s.height * d._anchorY)
                } else a.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, d._anchorOffsetX, d._anchorOffsetY);
                d._scrollRect && a.prepend(1, 0, 0, 1, -d._scrollRect.x, -d._scrollRect.y);
                d = d._parent
            }
            return a
        };
        b.prototype.localToGlobal = function(a, d, b) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            var e = this._getConcatenatedMatrix();
            e.append(1, 0, 0, 1, a, d);
            b || (b = new c.Point);
            b.x = e.tx;
            b.y = e.ty;
            return b
        };
        b.prototype.globalToLocal = function(a, d, b) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            var e = this._getConcatenatedMatrix();
            e.invert();
            e.append(1, 0, 0, 1, a, d);
            b || (b = new c.Point);
            b.x = e.tx;
            b.y = e.ty;
            return b
        };
        b.prototype.hitTest = function(a, d, b) {
            void 0 === b && (b = !1);
            if (!this._visible || !b && !this._touchEnabled) return null;
            b = this._getSize(c.Rectangle.identity);
            return 0 <= a && a < b.width && 0 <= d && d < b.height ? this.mask || this._scrollRect ? this._scrollRect && a > this._scrollRect.x && d > this._scrollRect.y && a < this._scrollRect.x + this._scrollRect.width && d < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= d && d < this.mask.y + this.mask.height ? this : null : this : null
        };
        b.prototype.hitTestPoint = function(a, d, b) {
            a = this.globalToLocal(a, d);
            return b ? (this._hitTestPointTexture || (this._hitTestPointTexture = new c.RenderTexture), b = this._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(a.x - this._hitTestPointTexture._offsetX, a.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !! this.hitTest(a.x, a.y, !0)
        };
        b.prototype._getMatrix = function(a) {
            a || (a = c.Matrix.identity.identity());
            var d, b;
            b = this._getOffsetPoint();
            d = b.x;
            b = b.y;
            var e = this.__hack_local_matrix;
            e ? (a.append(e.a, e.b, e.c, e.d, e.tx, e.ty), a.append(1, 0, 0, 1, -d, -b)) : a.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, d, b);
            return a
        };
        b.prototype._getSize = function(a) {
            return this._hasHeightSet && this._hasWidthSet ? a.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(a)
        };
        b.prototype._measureSize = function(a) {
            this._sizeDirty ? (a = this._measureBounds(), this._rectW = a.width, this._rectH = a.height, this._clearSizeDirty()) : (a.width = this._rectW, a.height = this._rectH);
            a.x = 0;
            a.y = 0;
            return a
        };
        b.prototype._measureBounds = function() {
            return c.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        b.prototype._getOffsetPoint = function() {
            var a = this._anchorOffsetX,
                d = this._anchorOffsetY;
            if (0 != this._anchorX || 0 != this._anchorY) d = this._getSize(c.Rectangle.identity), a = this._anchorX * d.width, d = this._anchorY * d.height;
            var b = c.Point.identity;
            b.x = a;
            b.y = d;
            return b
        };
        b.prototype._onAddToStage = function() {
            this._stage = c.MainContext.instance.stage;
            c.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        b.prototype._onRemoveFromStage = function() {
            c.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
        };
        Object.defineProperty(b.prototype, "stage", {
            get: function() {
                return this._stage
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.addEventListener = function(a, d, s, x, q) {
            void 0 === x && (x = !1);
            void 0 === q && (q = 0);
            e.prototype.addEventListener.call(this, a, d, s, x, q);
            ((x = a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._insertEventBin(x ? b._enterFrameCallBackList : b._renderCallBackList, d, s, q, this)
        };
        b.prototype.removeEventListener = function(a, d, s, x) {
            void 0 === x && (x = !1);
            e.prototype.removeEventListener.call(this, a, d, s, x);
            ((x = a == c.Event.ENTER_FRAME) || a == c.Event.RENDER) && this._removeEventBin(x ? b._enterFrameCallBackList : b._renderCallBackList, d, s, this)
        };
        b.prototype.dispatchEvent = function(a) {
            if (!a._bubbles) return e.prototype.dispatchEvent.call(this, a);
            for (var d = [], b = this; b;) d.push(b), b = b._parent;
            a._reset();
            this._dispatchPropagationEvent(a, d);
            return !a._isDefaultPrevented
        };
        b.prototype._dispatchPropagationEvent = function(a, d, b) {
            b = d.length;
            for (var c = 1, e = b - 1; 0 <= e; e--) {
                var f = d[e];
                a._currentTarget = f;
                a._target = this;
                a._eventPhase = c;
                f._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped) return
            }
            f = d[0];
            a._currentTarget = f;
            a._target = this;
            a._eventPhase = 2;
            f._notifyListener(a);
            if (!a._isPropagationStopped && !a._isPropagationImmediateStopped)
                for (c = 3, e = 1; e < b && (f = d[e], a._currentTarget = f, a._target = this, a._eventPhase = c, f._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); e++);
        };
        b.prototype.willTrigger = function(a) {
            for (var d = this; d;) {
                if (d.hasEventListener(a)) return !0;
                d = d._parent
            }
            return !1
        };
        Object.defineProperty(b.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(a) {
                (this._cacheAsBitmap = a) ? c.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._makeBitmapCache = function() {
            this.renderTexture || (this.renderTexture = new c.RenderTexture);
            var a = this.renderTexture.drawToTexture(this);
            this._texture_to_render = a ? this.renderTexture : null;
            return a
        };
        b.prototype._setCacheDirty = function(a) {
            void 0 === a && (a = !0);
            this._cacheDirty = a
        };
        b.getTransformBounds = function(a, d) {
            var b = a.x,
                c = a.y,
                e = a.width,
                f = a.height;
            (b || c) && d.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
            var h = e * d.a,
                e = e * d.b,
                k = f * d.c,
                f = f * d.d,
                l = d.tx,
                m = d.ty,
                n = l,
                p = l,
                r = m,
                w = m;
            (b = h + l) < n ? n = b : b > p && (p = b);
            (b = h + k + l) < n ? n = b : b > p && (p = b);
            (b = k + l) < n ? n = b : b > p && (p = b);
            (c = e + m) < r ? r = c : c > w && (w = c);
            (c = e + f + m) < r ? r = c : c > w && (w = c);
            (c = f + m) < r ? r = c : c > w && (w = c);
            return a.initialize(n, r, p - n, w - r)
        };
        Object.defineProperty(b.prototype, "colorTransform", {
            get: function() {
                return this._colorTransform
            },
            set: function(a) {
                this._colorTransform = a
            },
            enumerable: !0,
            configurable: !0
        });
        b.identityMatrixForGetConcatenated = new c.Matrix;
        b._enterFrameCallBackList = [];
        b._renderCallBackList = [];
        return b
    }(c.EventDispatcher);
    c.DisplayObject = e;
    e.prototype.__class__ = "egret.DisplayObject";
    e = function() {
        function c() {
            this.matrix = null
        }
        c.prototype.updateColor = function(b, a, d, c, e, f, g, h) {};
        return c
    }();
    c.ColorTransform = e;
    e.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._touchChildren = !0;
            this._children = []
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "touchChildren", {
            get: function() {
                return this._touchChildren
            },
            set: function(a) {
                this._touchChildren = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "numChildren", {
            get: function() {
                return this._children.length
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.setChildIndex = function(a, d) {
            this.doSetChildIndex(a, d)
        };
        b.prototype.doSetChildIndex = function(a, d) {
            var b = this._children.indexOf(a);
            0 > b && c.Logger.fatal("child不在当前容器内");
            this._children.splice(b, 1);
            0 > d || this._children.length <= d ? this._children.push(a) : this._children.splice(d, 0, a)
        };
        b.prototype.addChild = function(a) {
            var d = this._children.length;
            a._parent == this && d--;
            return this._doAddChild(a, d)
        };
        b.prototype.addChildAt = function(a, d) {
            return this._doAddChild(a, d)
        };
        b.prototype._doAddChild = function(a, d, s) {
            void 0 === s && (s = !0);
            if (a == this) return a;
            if (0 > d || d > this._children.length) return c.Logger.fatal("提供的索引超出范围"),
            a;
            var e = a._parent;
            if (e == this) return this.doSetChildIndex(a, d), a;
            e && (d = e._children.indexOf(a), 0 <= d && e._doRemoveChild(d));
            this._children.splice(d, 0, a);
            a._parentChanged(this);
            s && a.dispatchEventWith(c.Event.ADDED, !0);
            if (this._stage)
                for (a._onAddToStage(), d = b.__EVENT__ADD_TO_STAGE_LIST; 0 < d.length;) d.shift().dispatchEventWith(c.Event.ADDED_TO_STAGE);
            a._setDirty();
            this._setSizeDirty();
            return a
        };
        b.prototype.removeChild = function(a) {
            a = this._children.indexOf(a);
            if (0 <= a) return this._doRemoveChild(a);
            c.Logger.fatal("child未被addChild到该parent");
            return null
        };
        b.prototype.removeChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
            c.Logger.fatal("提供的索引超出范围");
            return null
        };
        b.prototype._doRemoveChild = function(a, d) {
            void 0 === d && (d = !0);
            var s = this._children,
                e = s[a];
            d && e.dispatchEventWith(c.Event.REMOVED, !0);
            if (this._stage) {
                e._onRemoveFromStage();
                for (var f = b.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) {
                    var g = f.shift();
                    g.dispatchEventWith(c.Event.REMOVED_FROM_STAGE);
                    g._stage = null
                }
            }
            e._parentChanged(null);
            s.splice(a, 1);
            this._setSizeDirty();
            return e
        };
        b.prototype.getChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._children[a];
            c.Logger.fatal("提供的索引超出范围");
            return null
        };
        b.prototype.contains = function(a) {
            for (; a;) {
                if (a == this) return !0;
                a = a._parent
            }
            return !1
        };
        b.prototype.swapChildrenAt = function(a, d) {
            0 <= a && a < this._children.length && 0 <= d && d < this._children.length ? this._swapChildrenAt(a, d) : c.Logger.fatal("提供的索引超出范围")
        };
        b.prototype.swapChildren = function(a, d) {
            var b = this._children.indexOf(a),
                e = this._children.indexOf(d); - 1 == b || -1 == e ? c.Logger.fatal("child未被addChild到该parent") : this._swapChildrenAt(b, e)
        };
        b.prototype._swapChildrenAt = function(a, d) {
            if (a != d) {
                var b = this._children,
                    c = b[a];
                b[a] = b[d];
                b[d] = c
            }
        };
        b.prototype.getChildIndex = function(a) {
            return this._children.indexOf(a)
        };
        b.prototype.removeChildren = function() {
            for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
        };
        b.prototype._updateTransform = function() {
            if (this._visible) {
                e.prototype._updateTransform.call(this);
                for (var a = 0, d = this._children.length; a < d; a++) this._children[a]._updateTransform()
            }
        };
        b.prototype._render = function(a) {
            for (var d = 0, b = this._children.length; d < b; d++) this._children[d]._draw(a)
        };
        b.prototype._measureBounds = function() {
            for (var a = 0, d = 0, b = 0, e = 0, f = this._children.length, g = 0; g < f; g++) {
                var h = this._children[g];
                if (h._visible) {
                    var k = h.getBounds(c.Rectangle.identity, !1),
                        l = k.x,
                        m = k.y,
                        n = k.width,
                        k = k.height,
                        h = h._getMatrix(),
                        h = c.DisplayObject.getTransformBounds(c.Rectangle.identity.initialize(l, m, n, k), h),
                        l = h.x,
                        m = h.y,
                        n = h.width + h.x,
                        h = h.height + h.y;
                    if (l < a || 0 == g) a = l;
                    if (n > d || 0 == g) d = n;
                    if (m < b || 0 == g) b = m;
                    if (h > e || 0 == g) e = h
                }
            }
            return c.Rectangle.identity.initialize(a, b, d - a, e - b)
        };
        b.prototype.hitTest = function(a, d, b) {
            void 0 === b && (b = !1);
            var x;
            if (!this._visible) return null;
            if (this._scrollRect) {
                if (a < this._scrollRect.x || d < this._scrollRect.y || a > this._scrollRect.x + this._scrollRect.width || d > this._scrollRect.y + this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > d || d > this.mask.y + this.mask.height)) return null;
            for (var q = this._children, g = this._touchChildren, h = q.length - 1; 0 <= h; h--) {
                var k = q[h],
                    l = k._getMatrix(),
                    m = k._scrollRect;
                m && l.append(1, 0, 0, 1, -m.x, -m.y);
                l.invert();
                l = c.Matrix.transformCoords(l, a, d);
                if (k = k.hitTest(l.x, l.y, !0)) {
                    if (!g) return this;
                    if (k._touchEnabled && g) return k;
                    x = this
                }
            }
            return x ? x : this._texture_to_render || this.graphics ? e.prototype.hitTest.call(this, a, d, b) : null
        };
        b.prototype._onAddToStage = function() {
            e.prototype._onAddToStage.call(this);
            for (var a = this._children.length, d = 0; d < a; d++) this._children[d]._onAddToStage()
        };
        b.prototype._onRemoveFromStage = function() {
            e.prototype._onRemoveFromStage.call(this);
            for (var a = this._children.length, d = 0; d < a; d++) this._children[d]._onRemoveFromStage()
        };
        b.prototype.getChildByName = function(a) {
            for (var d = this._children, b = d.length, c, e = 0; e < b; e++)
                if (c = d[e], c.name == a) return c;
            return null
        };
        b.__EVENT__ADD_TO_STAGE_LIST = [];
        b.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return b
    }(c.DisplayObject);
    c.DisplayObjectContainer = e;
    e.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d) {
            void 0 === a && (a = 480);
            void 0 === d && (d = 800);
            e.call(this);
            this.touchEnabled = !0;
            this._stage = this;
            this._stageWidth = a;
            this._stageHeight = d
        }
        __extends(b, e);
        b.prototype.invalidate = function() {
            b._invalidateRenderFlag = !0
        };
        Object.defineProperty(b.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(a) {
                this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.changeSize = function() {
            this.setResolutionPolicy();
            this.dispatchEventWith(c.Event.RESIZE)
        };
        b.prototype.setResolutionPolicy = function() {
            var a = {};
            a[c.StageScaleMode.NO_SCALE] = new c.NoScale;
            a[c.StageScaleMode.SHOW_ALL] = new c.ShowAll;
            a[c.StageScaleMode.NO_BORDER] = new c.FixedWidth;
            a[c.StageScaleMode.EXACT_FIT] = new c.FullScreen;
            a = a[this._scaleMode];
            if (!a) throw Error("使用了尚未实现的ScaleMode");
            var d = new c.EqualToFrame,
                a = new c.ResolutionPolicy(d, a);
            c.StageDelegate.getInstance()._setResolutionPolicy(a);
            this._stageWidth = c.StageDelegate.getInstance()._stageWidth;
            this._stageHeight = c.StageDelegate.getInstance()._stageHeight
        };
        Object.defineProperty(b.prototype, "stageWidth", {
            get: function() {
                return this._stageWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "stageHeight", {
            get: function() {
                return this._stageHeight
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.hitTest = function(a, d, b) {
            if (!this._touchEnabled) return null;
            var e;
            if (!this._touchChildren) return this;
            b = this._children;
            for (var f = b.length - 1; 0 <= f; f--) {
                e = b[f];
                var g = e._getMatrix(),
                    h = e._scrollRect;
                h && g.append(1, 0, 0, 1, -h.x, -h.y);
                g.invert();
                g = c.Matrix.transformCoords(g, a, d);
                if ((e = e.hitTest(g.x, g.y, !0)) && e._touchEnabled) return e
            }
            return this
        };
        b.prototype.getBounds = function(a) {
            a || (a = new c.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        b.prototype._updateTransform = function() {
            for (var a = 0, d = this._children.length; a < d; a++) this._children[a]._updateTransform()
        };
        Object.defineProperty(b.prototype, "focus", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        });
        b._invalidateRenderFlag = !1;
        return b
    }(c.DisplayObjectContainer);
    c.Stage = e;
    e.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.NO_BORDER = "noBorder";
        c.NO_SCALE = "noScale";
        c.SHOW_ALL = "showAll";
        c.EXACT_FIT = "exactFit";
        return c
    }();
    c.StageScaleMode = e;
    e.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            void 0 === a && (a = null);
            e.call(this);
            this._lastTouchPosition = new c.Point(0, 0);
            this._lastTouchTime = 0;
            this._lastTouchEvent = null;
            this._velocitys = [];
            this._content = null;
            this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
            this._scrollTop = this._scrollLeft = 0;
            this._vCanScroll = this._hCanScroll = !1;
            this.touchEnabled = !0;
            a && this.setContent(a)
        }
        __extends(b, e);
        b.prototype.setContent = function(a) {
            this._content !== a && (this.removeContent(), a && (this._content = a, e.prototype.addChild.call(this, a), this._addEvents()))
        };
        b.prototype.removeContent = function() {
            this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0));
            this._content = null
        };
        Object.defineProperty(b.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._verticalScrollPolicy
            },
            set: function(a) {
                a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._horizontalScrollPolicy
            },
            set: function(a) {
                a != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "scrollLeft", {
            get: function() {
                return this._scrollLeft
            },
            set: function(a) {
                a != this._scrollLeft && (this._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "scrollTop", {
            get: function() {
                return this._scrollTop
            },
            set: function(a) {
                a != this._scrollTop && (this._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.setScrollPosition = function(a, d, b) {
            void 0 === b && (b = !1);
            if (!b || 0 != a || 0 != d)
                if (b || this._scrollTop != a || this._scrollLeft != d) {
                    if (b) {
                        b = this._isOnTheEdge(!0);
                        var c = this._isOnTheEdge(!1);
                        this._scrollTop += b ? a / 2 : a;
                        this._scrollLeft += c ? d / 2 : d
                    } else this._scrollTop = a, this._scrollLeft = d;
                    this._validatePosition(!0, !0);
                    this._updateContentPosition()
                }
        };
        b.prototype._isOnTheEdge = function(a) {
            void 0 === a && (a = !0);
            var d = this._scrollTop,
                b = this._scrollLeft;
            return a ? 0 > d || d > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
        };
        b.prototype._validatePosition = function(a, d) {
            void 0 === a && (a = !1);
            void 0 === d && (d = !1);
            if (a) {
                var b = this.height,
                    c = this._getContentHeight();
                this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
                this._scrollTop = Math.min(this._scrollTop, c > b ? c - b / 2 : c / 2)
            }
            d && (b = this.width, c = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, c > b ? c - b / 2 : c / 2))
        };
        b.prototype._setWidth = function(a) {
            this._explicitWidth != a && (e.prototype._setWidth.call(this, a), this._updateContentPosition())
        };
        b.prototype._setHeight = function(a) {
            this._explicitHeight != a && (e.prototype._setHeight.call(this, a), this._updateContentPosition())
        };
        b.prototype._updateContentPosition = function() {
            var a = this.getBounds(c.Rectangle.identity);
            this.scrollRect = new c.Rectangle(this._scrollLeft, this._scrollTop, a.width, a.height);
            this.dispatchEvent(new c.Event(c.Event.CHANGE))
        };
        b.prototype._checkScrollPolicy = function() {
            var a = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
            this._hCanScroll = a;
            var d = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
            this._vCanScroll = d;
            return a || d
        };
        b.prototype.__checkScrollPolicy = function(a, d, b) {
            return "on" == a ? !0 : "off" == a ? !1 : d > b
        };
        b.prototype._addEvents = function() {
            this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.addEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        b.prototype._removeEvents = function() {
            this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        };
        b.prototype._onTouchBegin = function(a) {
            !a._isDefaultPrevented && this._checkScrollPolicy() && (c.Tween.removeTweens(this), this.stage.addEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(c.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(c.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(a), a.preventDefault())
        };
        b.prototype._onTouchBeginCapture = function(a) {
            var d = this._checkScrollPolicy();
            if (d) {
                for (var s = a.target; s != this;) {
                    if (s instanceof b && (d = s._checkScrollPolicy())) return;
                    s = s.parent
                }
                a.stopPropagation();
                this.delayTouchBeginEvent = this.cloneTouchEvent(a);
                this.touchBeginTimer || (this.touchBeginTimer = new c.Timer(100, 1), this.touchBeginTimer.addEventListener(c.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
                this.touchBeginTimer.start();
                this._onTouchBegin(a)
            }
        };
        b.prototype._onTouchEndCapture = function(a) {
            this.delayTouchBeginEvent && this._onTouchBeginTimer()
        };
        b.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var a = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null;
            this.dispatchPropagationEvent(a)
        };
        b.prototype.dispatchPropagationEvent = function(a) {
            for (var d = [], b = a._target; b;) d.push(b),
            b = b.parent;
            for (var c = this._content, e = 1;; e += 2) {
                b = d[e];
                if (!b || b === c) break;
                d.unshift(b)
            }
            this._dispatchPropagationEvent(a, d)
        };
        b.prototype._dispatchPropagationEvent = function(a, d, b) {
            for (var c = d.length, e = 0; e < c; e++) {
                var f = d[e];
                a._currentTarget = f;
                a._target = this;
                a._eventPhase = e < b ? 1 : e == b ? 2 : 3;
                f._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
            }
        };
        b.prototype._onTouchMove = function(a) {
            if (this._lastTouchPosition.x != a.stageX || this._lastTouchPosition.y != a.stageY) {
                this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
                this.touchChildren = !1;
                var d = this._getPointChange(a);
                this.setScrollPosition(d.y, d.x, !0);
                this._calcVelocitys(a);
                this._logTouchEvent(a)
            }
        };
        b.prototype._onTouchEnd = function(a) {
            this.touchChildren = !0;
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
            this.removeEventListener(c.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._moveAfterTouchEnd()
        };
        b.prototype._onEnterFrame = function(a) {
            a = c.getTimer();
            100 < a - this._lastTouchTime && 300 > a - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
        };
        b.prototype._logTouchEvent = function(a) {
            this._lastTouchPosition.x = a.stageX;
            this._lastTouchPosition.y = a.stageY;
            this._lastTouchEvent = this.cloneTouchEvent(a);
            this._lastTouchTime = c.getTimer()
        };
        b.prototype._getPointChange = function(a) {
            return {
                x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - a.stageX,
                y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - a.stageY
            }
        };
        b.prototype._calcVelocitys = function(a) {
            var d = c.getTimer();
            if (0 == this._lastTouchTime) this._lastTouchTime = d;
            else {
                var b = this._getPointChange(a),
                    d = d - this._lastTouchTime;
                b.x /= d;
                b.y /= d;
                this._velocitys.push(b);
                5 < this._velocitys.length && this._velocitys.shift();
                this._lastTouchPosition.x = a.stageX;
                this._lastTouchPosition.y = a.stageY
            }
        };
        b.prototype._getContentWidth = function() {
            return this._content.explicitWidth || this._content.width
        };
        b.prototype._getContentHeight = function() {
            return this._content.explicitHeight || this._content.height
        };
        b.prototype.getMaxScrollLeft = function() {
            var a = this._getContentWidth() - this.width;
            return Math.max(0, a)
        };
        b.prototype.getMaxScrollTop = function() {
            var a = this._getContentHeight() - this.height;
            return Math.max(0, a)
        };
        b.prototype._moveAfterTouchEnd = function() {
            if (0 != this._velocitys.length) {
                for (var a = 0, d = 0, c = 0, e = 0; e < this._velocitys.length; e++) var f = this._velocitys[e],
                g = b.weight[e], a = a + f.x * g,
                d = d + f.y * g, c = c + g;
                this._velocitys.length = 0;
                a /= c;
                d /= c;
                f = Math.abs(a);
                c = Math.abs(d);
                g = this.getMaxScrollLeft();
                e = this.getMaxScrollTop();
                a = 0.02 < f ? this.getAnimationDatas(a, this._scrollLeft, g) : {
                    position: this._scrollLeft,
                    duration: 1
                };
                d = 0.02 < c ? this.getAnimationDatas(d, this._scrollTop, e) : {
                    position: this._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(a.position, a.duration);
                this.setScrollTop(d.position, d.duration)
            }
        };
        b.prototype.setScrollTop = function(a, d) {
            void 0 === d && (d = 0);
            var b = Math.min(this.getMaxScrollTop(), Math.max(a, 0));
            if (0 == d) return this.scrollTop = b, null;
            var e = c.Tween.get(this).to({
                scrollTop: a
            }, d, c.Ease.quartOut);
            b != a && e.to({
                scrollTop: b
            }, 300, c.Ease.quintOut)
        };
        b.prototype.setScrollLeft = function(a, d) {
            void 0 === d && (d = 0);
            var b = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
            if (0 == d) return this.scrollLeft = b, null;
            var e = c.Tween.get(this).to({
                scrollLeft: a
            }, d, c.Ease.quartOut);
            b != a && e.to({
                scrollLeft: b
            }, 300, c.Ease.quintOut)
        };
        b.prototype.getAnimationDatas = function(a, d, b) {
            var c = Math.abs(a),
                e = 0,
                f = d + 500 * a;
            if (0 > f || f > b)
                for (f = d; Infinity != Math.abs(a) && 0.02 < Math.abs(a);) f += a, a = 0 > f || f > b ? 0.998 * a * 0.95 : 0.998 * a, e++;
            else e = 500 * -Math.log(0.02 / c);
            return {
                position: Math.min(b + 50, Math.max(f, -50)),
                duration: e
            }
        };
        b.prototype.cloneTouchEvent = function(a) {
            var d = new c.TouchEvent(a._type, a._bubbles, a.cancelable);
            d.touchPointID = a.touchPointID;
            d._stageX = a._stageX;
            d._stageY = a._stageY;
            d.ctrlKey = a.ctrlKey;
            d.altKey = a.altKey;
            d.shiftKey = a.shiftKey;
            d.touchDown = a.touchDown;
            d._isDefaultPrevented = !1;
            d._target = a._target;
            return d
        };
        b.prototype.throwNotSupportedError = function() {
            throw Error("此方法在ScrollView内不可用!");
        };
        b.prototype.addChild = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.prototype.addChildAt = function(a, d) {
            this.throwNotSupportedError();
            return null
        };
        b.prototype.removeChild = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.prototype.removeChildAt = function(a) {
            this.throwNotSupportedError();
            return null
        };
        b.prototype.setChildIndex = function(a, d) {
            this.throwNotSupportedError()
        };
        b.prototype.swapChildren = function(a, d) {
            this.throwNotSupportedError()
        };
        b.prototype.swapChildrenAt = function(a, d) {
            this.throwNotSupportedError()
        };
        b.prototype.hitTest = function(a, d, b) {
            void 0 === b && (b = !1);
            var x = e.prototype.hitTest.call(this, a, d, b);
            return x ? x : c.DisplayObject.prototype.hitTest.call(this, a, d, b)
        };
        b.weight = [1, 1.33, 1.66, 2, 2.33];
        return b
    }(c.DisplayObjectContainer);
    c.ScrollView = e;
    e.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.REPEAT = "repeat";
        c.SCALE = "scale";
        return c
    }();
    c.BitmapFillMode = e;
    e.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            e.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.scale9Grid = null;
            this.fillMode = "scale";
            a && (this._texture = a, this._setSizeDirty())
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(a) {
                a != this._texture && (this._setSizeDirty(), this._texture = a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._render = function(a) {
            var d = this._texture;
            d ? (this._texture_to_render = d, b._drawBitmap(a, this._hasWidthSet ? this._explicitWidth : d._textureWidth, this._hasHeightSet ? this._explicitHeight : d._textureHeight, this)) : this._texture_to_render = null
        };
        b._drawBitmap = function(a, d, c, e) {
            var f = e._texture_to_render;
            if (f) {
                var g = f._textureWidth,
                    h = f._textureHeight;
                if ("scale" == e.fillMode) {
                    var k = e.scale9Grid || f.scale9Grid;
                    if (k && g - k.width < d && h - k.height < c) b.drawScale9GridImage(a, e, k, d, c);
                    else {
                        var k = f._offsetX,
                            l = f._offsetY,
                            m = f._bitmapWidth || g,
                            n = f._bitmapHeight || h;
                        d /= g;
                        k = Math.round(k * d);
                        d = Math.round(m * d);
                        c /= h;
                        l = Math.round(l * c);
                        c = Math.round(n * c);
                        b.renderFilter.drawImage(a, e, f._bitmapX, f._bitmapY, m, n, k, l, d, c)
                    }
                } else b.drawRepeatImage(a, e, d, c, e.fillMode)
            }
        };
        b.drawRepeatImage = function(a, d, b, e, f) {
            var g = d._texture_to_render;
            if (g) {
                var h = g._textureWidth,
                    k = g._textureHeight,
                    l = g._bitmapX,
                    m = g._bitmapY,
                    h = g._bitmapWidth || h,
                    k = g._bitmapHeight || k,
                    n = g._offsetX,
                    g = g._offsetY;
                c.RenderFilter.getInstance().drawImage(a, d, l, m, h, k, n, g, b, e, f)
            }
        };
        b.drawScale9GridImage = function(a, d, b, e, f) {
            var g = d._texture_to_render;
            if (g && b) {
                var h = c.RenderFilter.getInstance(),
                    k = g._textureWidth,
                    l = g._textureHeight,
                    m = g._bitmapX,
                    n = g._bitmapY,
                    p = g._bitmapWidth || k,
                    r = g._bitmapHeight || l,
                    w = g._offsetX,
                    A = g._offsetY,
                    g = c.MainContext.instance.rendererContext.texture_scale_factor;
                b = c.Rectangle.identity.initialize(b.x - Math.round(w), b.y - Math.round(w), b.width, b.height);
                w = Math.round(w);
                A = Math.round(A);
                e -= k - p;
                f -= l - r;
                b.y == b.bottom && (b.bottom < r ? b.bottom++ : b.y--);
                b.x == b.right && (b.right < p ? b.right++ : b.x--);
                var k = m + b.x,
                    l = m + b.right,
                    u = p - b.right,
                    y = n + b.y,
                    v = n + b.bottom,
                    z = r - b.bottom,
                    t = w + b.x,
                    E = A + b.y,
                    r = f - (r - b.bottom),
                    p = e - (p - b.right);
                h.drawImage(a, d, m / g, n / g, b.x, b.y, w, A, b.x, b.y);
                h.drawImage(a, d, k / g, n / g, b.width, b.y, t, A, p - b.x, b.y);
                h.drawImage(a, d, l / g, n / g, u, b.y, w + p, A, e - p, b.y);
                h.drawImage(a, d, m / g, y / g, b.x, b.height, w, E, b.x, r - b.y);
                h.drawImage(a, d, k / g, y / g, b.width, b.height, t, E, p - b.x, r - b.y);
                h.drawImage(a, d, l / g, y / g, u, b.height, w + p, E, e - p, r - b.y);
                h.drawImage(a, d, m / g, v / g, b.x, z, w, A + r, b.x, f - r);
                h.drawImage(a, d, k / g, v / g, b.width, z, t, A + r, p - b.x, f - r);
                h.drawImage(a, d, l / g, v / g, u, z, w + p, A + r, e - p, f - r)
            }
        };
        b.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? c.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : e.prototype._measureBounds.call(this)
        };
        b.debug = !1;
        b.renderFilter = c.RenderFilter.getInstance();
        return b
    }(c.DisplayObject);
    c.Bitmap = e;
    e.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._text = "";
            this._textChanged = !1;
            this._spriteSheet = null;
            this._spriteSheetChanged = !1;
            this._bitmapPool = []
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._textChanged = !0;
                this._text = a;
                this._setSizeDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "spriteSheet", {
            get: function() {
                return this._spriteSheet
            },
            set: function(a) {
                this._spriteSheet != a && (this._spriteSheet = a, this._spriteSheetChanged = !0, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._updateTransform = function() {
            this.visible && ((this._textChanged || this._spriteSheetChanged) && this._renderText(), e.prototype._updateTransform.call(this))
        };
        b.prototype._renderText = function(a) {
            var d = a = 0;
            (this._textChanged || this._spriteSheetChanged) && this.removeChildren();
            for (var b = 0, e = this.text.length; b < e; b++) {
                var f = this.text.charAt(b),
                    g = this.spriteSheet.getTexture(f);
                if (null == g) console.log("当前没有位图文字：" + f);
                else {
                    var f = g._offsetX,
                        h = g._offsetY,
                        k = g._textureWidth;
                    if (this._textChanged || this._spriteSheetChanged) {
                        var l = this._bitmapPool[b];
                        l || (l = new c.Bitmap, this._bitmapPool.push(l));
                        l.texture = g;
                        this.addChild(l);
                        l.x = a
                    }
                    a += k + f;
                    h + g._textureHeight > d && (d = h + g._textureHeight)
                }
            }
            this._spriteSheetChanged = this._textChanged = !1;
            return c.Rectangle.identity.initialize(0, 0, a, d)
        };
        b.prototype._measureBounds = function() {
            return this._renderText(!0)
        };
        return b
    }(c.DisplayObjectContainer);
    c.BitmapText = e;
    e.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {
            this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
            this.commandQueue = []
        }
        c.prototype.beginFill = function(b, a) {};
        c.prototype._setStyle = function(b) {};
        c.prototype.drawRect = function(b, a, d, c) {
            this.checkRect(b, a, d, c)
        };
        c.prototype.drawCircle = function(b, a, d) {
            this.checkRect(b - d, a - d, 2 * d, 2 * d)
        };
        c.prototype.drawRoundRect = function(b, a, d, c, e, f) {
            this.checkRect(b, a, d, c)
        };
        c.prototype.drawEllipse = function(b, a, d, c) {
            this.checkRect(b - d, a - c, 2 * d, 2 * c)
        };
        c.prototype.lineStyle = function(b, a, d, c, e, f, g, h) {};
        c.prototype.lineTo = function(b, a) {
            this.checkPoint(b, a)
        };
        c.prototype.curveTo = function(b, a, d, c) {
            this.checkPoint(b, a);
            this.checkPoint(d, c)
        };
        c.prototype.moveTo = function(b, a) {
            this.checkPoint(b, a)
        };
        c.prototype.clear = function() {
            this._maxY = this._maxX = this._minY = this._minX = 0
        };
        c.prototype.endFill = function() {};
        c.prototype._draw = function(b) {};
        c.prototype.checkRect = function(b, a, d, c) {
            this._minX = Math.min(this._minX, b);
            this._minY = Math.min(this._minY, a);
            this._maxX = Math.max(this._maxX, b + d);
            this._maxY = Math.max(this._maxY, a + c)
        };
        c.prototype.checkPoint = function(b, a) {
            this._minX = Math.min(this._minX, b);
            this._minY = Math.min(this._minY, a);
            this._maxX = Math.max(this._maxX, b);
            this._maxY = Math.max(this._maxY, a);
            this._lastX = b;
            this._lastY = a
        };
        return c
    }();
    c.Graphics = e;
    e.prototype.__class__ = "egret.Graphics";
    (function() {
        return function(c, b, a) {
            this.method = c;
            this.thisObject = b;
            this.args = a
        }
    })().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this)
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new c.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a)
        };
        return b
    }(c.DisplayObject);
    c.Shape = e;
    e.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this)
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new c.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a);
            e.prototype._render.call(this, a)
        };
        return b
    }(c.DisplayObjectContainer);
    c.Sprite = e;
    e.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._inputEnabled = !1;
            this._text = this._type = "";
            this._displayAsPassword = !1;
            this._fontFamily = b.default_fontFamily;
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
        __extends(b, e);
        b.prototype.isInput = function() {
            return this._type == c.TextFieldType.INPUT
        };
        b.prototype._setTouchEnabled = function(a) {
            e.prototype._setTouchEnabled.call(this, a);
            this.isInput() && (this._inputEnabled = !0)
        };
        Object.defineProperty(b.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(a) {
                this._setType(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setType = function(a) {
            this._type != a && (this._type = a, this._type == c.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new c.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
        };
        Object.defineProperty(b.prototype, "text", {
            get: function() {
                return this._getText()
            },
            set: function(a) {
                this._setText(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._getText = function() {
            return this._type == c.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
        };
        b.prototype._setSizeDirty = function() {
            e.prototype._setSizeDirty.call(this);
            this._isArrayChanged = !0
        };
        b.prototype._setTextDirty = function() {
            this._setSizeDirty()
        };
        b.prototype._setBaseText = function(a) {
            null == a && (a = "");
            this._isFlow = !1;
            if (this._text != a || this._displayAsPassword) this._setTextDirty(), this._text = a, a = "", a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
                text: a
            }])
        };
        b.prototype._setText = function(a) {
            null == a && (a = "");
            this._setBaseText(a);
            this._inputUtils && this._inputUtils._setText(this._text)
        };
        Object.defineProperty(b.prototype, "displayAsPassword", {
            get: function() {
                return this._displayAsPassword
            },
            set: function(a) {
                this._setDisplayAsPassword(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setDisplayAsPassword = function(a) {
            this._displayAsPassword != a && (this._displayAsPassword = a, this._setText(this._text))
        };
        Object.defineProperty(b.prototype, "fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._setFontFamily(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setFontFamily = function(a) {
            this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
        };
        Object.defineProperty(b.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._setSize(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setSize = function(a) {
            this._size != a && (this._setTextDirty(), this._size = a)
        };
        Object.defineProperty(b.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(a) {
                this._setItalic(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setItalic = function(a) {
            this._italic != a && (this._setTextDirty(), this._italic = a)
        };
        Object.defineProperty(b.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(a) {
                this._setBold(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setBold = function(a) {
            this._bold != a && (this._setTextDirty(), this._bold = a)
        };
        Object.defineProperty(b.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._setTextColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setTextColor = function(a) {
            this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = c.toColorString(a))
        };
        Object.defineProperty(b.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(a) {
                this._setStrokeColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setStrokeColor = function(a) {
            this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = c.toColorString(a))
        };
        Object.defineProperty(b.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(a) {
                this._setStroke(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setStroke = function(a) {
            this._stroke != a && (this._setTextDirty(), this._stroke = a)
        };
        Object.defineProperty(b.prototype, "textAlign", {
            get: function() {
                return this._textAlign
            },
            set: function(a) {
                this._setTextAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setTextAlign = function(a) {
            this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
        };
        Object.defineProperty(b.prototype, "verticalAlign", {
            get: function() {
                return this._verticalAlign
            },
            set: function(a) {
                this._setVerticalAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setVerticalAlign = function(a) {
            this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
        };
        Object.defineProperty(b.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(a) {
                this._setMaxChars(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setMaxChars = function(a) {
            this._maxChars != a && (this._maxChars = a)
        };
        Object.defineProperty(b.prototype, "scrollV", {
            set: function(a) {
                this._scrollV = a;
                this._setDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "maxScrollV", {
            get: function() {
                return this._maxScrollV
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "selectionBeginIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "selectionEndIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "caretIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setSelection = function(a, d) {};
        Object.defineProperty(b.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(a) {
                this._setLineSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setLineSpacing = function(a) {
            this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
        };
        b.prototype._getLineHeight = function() {
            return this._lineSpacing + this._size
        };
        Object.defineProperty(b.prototype, "numLines", {
            get: function() {
                return this._numLines
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "multiline", {
            get: function() {
                return this._multiline
            },
            set: function(a) {
                this._setMultiline(a)
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setMultiline = function(a) {
            this._multiline = a;
            this._setDirty()
        };
        b.prototype.setFocus = function() {
            c.Logger.warning("TextField.setFocus 没有实现")
        };
        b.prototype._onRemoveFromStage = function() {
            e.prototype._onRemoveFromStage.call(this);
            this._type == c.TextFieldType.INPUT && this._inputUtils._removeStageText()
        };
        b.prototype._onAddToStage = function() {
            e.prototype._onAddToStage.call(this);
            this._type == c.TextFieldType.INPUT && this._inputUtils._addStageText()
        };
        b.prototype._updateBaseTransform = function() {
            e.prototype._updateTransform.call(this)
        };
        b.prototype._updateTransform = function() {
            this._type == c.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(), this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
        };
        b.prototype._render = function(a) {
            this.drawText(a);
            this._clearDirty()
        };
        b.prototype._measureBounds = function() {
            return this.measureText()
        };
        Object.defineProperty(b.prototype, "textFlow", {
            get: function() {
                return this._textArr
            },
            set: function(a) {
                this._isFlow = !0;
                var d = "";
                null == a && (a = []);
                for (var b = 0; b < a.length; b++) d += a[b].text;
                this._displayAsPassword ? this._setBaseText(d) : (this._text = d, this.setMiddleStyle(a))
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.changeToPassText = function(a) {
            if (this._displayAsPassword) {
                for (var d = "", b = 0, c = a.length; b < c; b++) switch (a.charAt(b)) {
                    case "\n":
                        d += "\n";
                        break;
                    case "\r":
                        break;
                    default:
                        d += "*"
                }
                return d
            }
            return a
        };
        b.prototype.setMiddleStyle = function(a) {
            this._isArrayChanged = !0;
            this._textArr = a;
            this._setSizeDirty()
        };
        Object.defineProperty(b.prototype, "textWidth", {
            get: function() {
                return this._textMaxWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "textHeight", {
            get: function() {
                return this._textMaxHeight
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.appendText = function(a) {
            this.appendElement({
                text: a
            })
        };
        b.prototype.appendElement = function(a) {
            this._textArr.push(a);
            this.setMiddleStyle(this._textArr)
        };
        b.prototype._getLinesArr = function() {
            if (!this._isArrayChanged) return this._linesArr;
            this._isArrayChanged = !1;
            var a = this._textArr,
                d = c.MainContext.instance.rendererContext;
            this._linesArr = [];
            this._textMaxWidth = this._textMaxHeight = 0;
            if (this._hasWidthSet && 0 == this._explicitWidth) return console.warn("文本宽度被设置为0"), this._numLines = 0, [{
                width: 0,
                height: 0,
                elements: []
            }];
            var b = this._linesArr,
                e = 0,
                f = 0,
                g = 0,
                h;
            this._isFlow || d.setupFont(this);
            for (var k = 0; k < a.length; k++) {
                var l = a[k];
                l.style = l.style || {};
                for (var m = l.text.toString().split(/(?:\r\n|\r|\n)/), n = 0; n < m.length; n++) {
                    null == b[g] && (h = {
                        width: 0,
                        height: 0,
                        elements: []
                    }, b[g] = h, f = e = 0);
                    f = this._type == c.TextFieldType.INPUT ? this._size : Math.max(f, l.style.size || this._size);
                    if ("" != m[n]) {
                        this._isFlow && d.setupFont(this, l.style);
                        var p = d.measureText(m[n]);
                        if (this._hasWidthSet)
                            if (e + p <= this._explicitWidth) h.elements.push({
                                width: p,
                                text: m[n],
                                style: l.style
                            }), e += p;
                            else {
                                for (var r = 0, w = 0, A = m[n]; r < A.length; r++) {
                                    p = d.measureText(A.charAt(r));
                                    if (e + p > this._explicitWidth) break;
                                    w += p;
                                    e += p
                                }
                                0 < r && (h.elements.push({
                                    width: w,
                                    text: A.substring(0, r),
                                    style: l.style
                                }), m[n] = A.substring(r));
                                n--
                            } else e += p, h.elements.push({
                                width: p,
                                text: m[n],
                                style: l.style
                            })
                    }
                    if (n < m.length - 1) {
                        h.width = e;
                        h.height = f;
                        this._textMaxWidth = Math.max(this._textMaxWidth, e);
                        this._textMaxHeight += f;
                        if (this._type == c.TextFieldType.INPUT && !this._multiline) return this._numLines = b.length, b;
                        g++
                    }
                }
                k == a.length - 1 && h && (h.width = e, h.height = f, this._textMaxWidth = Math.max(this._textMaxWidth, e), this._textMaxHeight += f)
            }
            this._numLines = b.length;
            return b
        };
        b.prototype.measureText = function() {
            return this._getLinesArr() ? c.Rectangle.identity.initialize(0, 0, this._hasWidthSet ? this._explicitWidth : this._textMaxWidth, this._hasHeightSet ? this._explicitHeight : this._textMaxHeight + (this._numLines - 1) * this._lineSpacing) : c.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        b.prototype.drawText = function(a) {
            var d = this._getLinesArr();
            if (d) {
                this._isFlow || a.setupFont(this);
                var b = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
                    e = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
                    f = 0,
                    g = 0;
                if (this._hasHeightSet)
                    if (e < this._explicitHeight) {
                        var h = 0;
                        this._verticalAlign == c.VerticalAlign.MIDDLE ? h = 0.5 : this._verticalAlign == c.VerticalAlign.BOTTOM && (h = 1);
                        f += h * (this._explicitHeight - e)
                    } else e > this._explicitHeight && (g = Math.max(this._scrollV - 1, 0), g = Math.min(this._numLines - 1, g));
                f = Math.round(f);
                e = 0;
                this._textAlign == c.HorizontalAlign.CENTER ? e = 0.5 : this._textAlign == c.HorizontalAlign.RIGHT && (e = 1);
                for (h = 0; g < this._numLines; g++) {
                    var k = d[g],
                        l = k.height,
                        f = f + l / 2;
                    if (0 != g && this._hasHeightSet && f > this._explicitHeight) break;
                    for (var h = Math.round((b - k.width) * e), m = 0; m < k.elements.length; m++) {
                        var n = k.elements[m],
                            p = n.style.size || this._size;
                        this._type == c.TextFieldType.INPUT ? a.drawText(this, n.text, h, f + (l - p) / 2, n.width) : (this._isFlow && a.setupFont(this, n.style), a.drawText(this, n.text, h, f + (l - p) / 2, n.width, n.style));
                        h += n.width
                    }
                    f += l / 2 + this._lineSpacing
                }
            }
        };
        b.default_fontFamily = "Arial";
        return b
    }(c.DisplayObject);
    c.TextField = e;
    e.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {
            this.resutlArr = []
        }
        c.prototype.parser = function(b) {
            this.stackArray = [];
            this.resutlArr = [];
            for (var a = 0, d = b.length; a < d;) {
                var c = b.indexOf("<", a);
                0 > c ? (this.addToResultArr(b.substring(a)), a = d) : (this.addToResultArr(b.substring(a, c)), a = b.indexOf(">", c), "/" == b.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(b.substring(c + 1, a)), a += 1)
            }
            return this.resutlArr
        };
        c.prototype.addToResultArr = function(b) {
            if ("" != b) {
                var a = [];
                a.push(["&lt;", "<"]);
                a.push(["&gt;", ">"]);
                a.push(["&amp;", "&"]);
                a.push(["&quot;", '"']);
                a.push(["&apos;;", "'"]);
                for (var d = 0; d < a.length; d++) b.replace(new RegExp(a[d][0], "g"), a[d][1]);
                0 < this.stackArray.length ? this.resutlArr.push({
                    text: b,
                    style: this.stackArray[this.stackArray.length - 1]
                }) : this.resutlArr.push({
                    text: b
                })
            }
        };
        c.prototype.changeStringToObject = function(b) {
            var a = {};
            b = b.replace(/( )+/g, " ").split(" ");
            for (var d = 0; d < b.length; d++) this.addProperty(a, b[d]);
            return a
        };
        c.prototype.addProperty = function(b, a) {
            var d = a.replace(/( )*=( )*/g, "=").split("=");
            d[1] && (d[1] = d[1].replace(/(\"|\')/g, ""));
            switch (d[0].toLowerCase()) {
                case "color":
                    b.textColor = parseInt(d[1]);
                    break;
                case "b":
                    b.bold = "true" == (d[1] || "true");
                    break;
                case "i":
                    b.italic = "true" == (d[1] || "true");
                    break;
                case "size":
                    b.size = parseInt(d[1]);
                    break;
                case "fontFamily":
                    b.fontFamily = d[1]
            }
        };
        c.prototype.addToArray = function(b) {
            b = this.changeStringToObject(b);
            if (0 != this.stackArray.length) {
                var a = this.stackArray[this.stackArray.length - 1],
                    d;
                for (d in a) null == b[d] && (b[d] = a[d])
            }
            this.stackArray.push(b)
        };
        return c
    }();
    c.HtmlTextParser = e;
    e.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.DYNAMIC = "dynamic";
        c.INPUT = "input";
        return c
    }();
    c.TextFieldType = e;
    e.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            e.call(this);
            var d = a.bitmapData;
            this.bitmapData = d;
            this._textureMap = {};
            this._sourceWidth = d.width;
            this._sourceHeight = d.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(b, e);
        b.prototype.getTexture = function(a) {
            return this._textureMap[a]
        };
        b.prototype.createTexture = function(a, d, b, e, f, g, h, k, l) {
            void 0 === g && (g = 0);
            void 0 === h && (h = 0);
            "undefined" === typeof k && (k = g + e);
            "undefined" === typeof l && (l = h + f);
            var m = new c.Texture,
                n = c.MainContext.instance.rendererContext.texture_scale_factor;
            m._bitmapData = this.bitmapData;
            m._bitmapX = this._bitmapX + d;
            m._bitmapY = this._bitmapY + b;
            m._bitmapWidth = e * n;
            m._bitmapHeight = f * n;
            m._offsetX = g;
            m._offsetY = h;
            m._textureWidth = k * n;
            m._textureHeight = l * n;
            m._sourceWidth = this._sourceWidth;
            m._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = m
        };
        return b
    }(c.HashObject);
    c.SpriteSheet = e;
    e.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._isFocus = !1;
            this._isFirst = this._isFirst = !0
        }
        __extends(b, e);
        b.prototype.init = function(a) {
            this._text = a;
            this.stageText = c.StageText.create();
            a = this._text.localToGlobal();
            this.stageText._open(a.x, a.y, this._text._explicitWidth, this._text._explicitHeight)
        };
        b.prototype._addStageText = function() {
            this._text._inputEnabled || (this._text._touchEnabled = !0);
            this.stageText._add();
            this.stageText._addListeners();
            this.stageText.addEventListener("blur", this.onBlurHandler, this);
            this.stageText.addEventListener("focus", this.onFocusHandler, this);
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(c.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            c.MainContext.instance.stage.addEventListener(c.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
        };
        b.prototype._removeStageText = function() {
            this.stageText._remove();
            this.stageText._removeListeners();
            this._text._inputEnabled || (this._text._touchEnabled = !1);
            this.stageText.removeEventListener("blur", this.onBlurHandler, this);
            this.stageText.removeEventListener("focus", this.onFocusHandler, this);
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(c.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            c.MainContext.instance.stage.removeEventListener(c.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this)
        };
        b.prototype._getText = function() {
            return this.stageText._getText()
        };
        b.prototype._setText = function(a) {
            this.stageText._setText(a)
        };
        b.prototype.onFocusHandler = function(a) {
            this.hideText()
        };
        b.prototype.onBlurHandler = function(a) {
            this.showText()
        };
        b.prototype.onMouseDownHandler = function(a) {
            a.stopPropagation();
            this._text._visible && this.stageText._show()
        };
        b.prototype.onStageDownHandler = function(a) {
            this.stageText._hide();
            this.showText()
        };
        b.prototype.showText = function() {
            this._isFocus && (this._isFocus = !1, this.resetText())
        };
        b.prototype.hideText = function() {
            this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
        };
        b.prototype.updateTextHandler = function(a) {
            this.resetText();
            this._text.dispatchEvent(new c.Event(c.Event.CHANGE))
        };
        b.prototype.resetText = function() {
            this._text._setBaseText(this.stageText._getText())
        };
        b.prototype._updateTransform = function() {
            var a = this._text._worldTransform.a,
                d = this._text._worldTransform.b,
                b = this._text._worldTransform.c,
                e = this._text._worldTransform.d,
                f = this._text._worldTransform.tx,
                g = this._text._worldTransform.ty;
            this._text._updateBaseTransform();
            var h = this._text._worldTransform;
            if (this._isFirst || a != h.a || d != h.b || b != h.c || e != h.d || f != h.tx || g != h.ty) {
                this._isFirst = !1;
                a = this._text.localToGlobal();
                this.stageText.changePosition(a.x, a.y);
                var k = this;
                c.callLater(function() {
                    k.stageText._setScale(k._text._worldTransform.a, k._text._worldTransform.d)
                }, this)
            }
        };
        b.prototype._updateProperties = function() {
            var a = this._text._stage;
            if (null == a) this.stageText._setVisible(!1);
            else {
                for (var d = this._text, b = d._visible; b;) {
                    d = d.parent;
                    if (d == a) break;
                    b = d._visible
                }
                this.stageText._setVisible(b)
            }
            this.stageText._setMultiline(this._text._multiline);
            this.stageText._setMaxChars(this._text._maxChars);
            this.stageText._setSize(this._text._size);
            this.stageText._setTextColor(this._text._textColorString);
            this.stageText._setTextFontFamily(this._text._fontFamily);
            this.stageText._setBold(this._text._bold);
            this.stageText._setItalic(this._text._italic);
            this.stageText._setTextAlign(this._text._textAlign);
            this.stageText._setWidth(this._text._getSize(c.Rectangle.identity).width);
            this.stageText._setHeight(this._text._getSize(c.Rectangle.identity).height);
            this.stageText._setTextType(this._text._displayAsPassword ? "password" : "text");
            this.stageText._setText(this._text._text);
            this.stageText._resetStageText();
            this._updateTransform()
        };
        return b
    }(c.HashObject);
    c.InputController = e;
    e.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b(a, d) {
            c.call(this, a);
            this.charList = this.parseConfig(d)
        }
        __extends(b, c);
        b.prototype.getTexture = function(a) {
            var d = this._textureMap[a];
            if (!d) {
                d = this.charList[a];
                if (!d) return null;
                d = this.createTexture(a, d.x, d.y, d.width, d.height, d.offsetX, d.offsetY);
                this._textureMap[a] = d
            }
            return d
        };
        b.prototype.parseConfig = function(a) {
            a = a.split("\r\n").join("\n");
            a = a.split("\n");
            for (var d = this.getConfigByKey(a[3], "count"), b = {}, c = 4; c < 4 + d; c++) {
                var e = a[c],
                    f = String.fromCharCode(this.getConfigByKey(e, "id")),
                    h = {};
                b[f] = h;
                h.x = this.getConfigByKey(e, "x");
                h.y = this.getConfigByKey(e, "y");
                h.width = this.getConfigByKey(e, "width");
                h.height = this.getConfigByKey(e, "height");
                h.offsetX = this.getConfigByKey(e, "xoffset");
                h.offsetY = this.getConfigByKey(e, "yoffset")
            }
            return b

        };
        b.prototype.getConfigByKey = function(a, d) {
            for (var b = a.split(" "), c = 0, e = b.length; c < e; c++) {
                var f = b[c];
                if (d == f.substring(0, d.length)) return b = f.substring(d.length + 1), parseInt(b)
            }
            return 0
        };
        return b
    }(c.SpriteSheet);
    c.BitmapTextSpriteSheet = e;
    e.prototype.__class__ = "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(b) {
        function a(d, a) {
            b.call(this);
            this.frameRate = 60;
            d instanceof f ? (c.Logger.warning("MovieClip#constructor接口参数已经变更，请尽快调整用法为 new MovieClip(data,texture)"), this.delegate = d) : this.delegate = new f(d, a);
            this.delegate.setMovieClip(this)
        }
        __extends(a, b);
        a.prototype.gotoAndPlay = function(d) {
            this.delegate.gotoAndPlay(d)
        };
        a.prototype.gotoAndStop = function(d) {
            this.delegate.gotoAndStop(d)
        };
        a.prototype.stop = function() {
            this.delegate.stop()
        };
        a.prototype.dispose = function() {
            this.delegate.dispose()
        };
        a.prototype.release = function() {
            c.Logger.warning("MovieClip#release方法即将废弃");
            this.dispose()
        };
        a.prototype.getCurrentFrameIndex = function() {
            c.Logger.warning("MovieClip#getCurrentFrameIndex方法即将废弃");
            return this.delegate._currentFrameIndex
        };
        a.prototype.getTotalFrame = function() {
            c.Logger.warning("MovieClip#getTotalFrame方法即将废弃");
            return this.delegate._totalFrame
        };
        a.prototype.setInterval = function(d) {
            c.Logger.warning("MovieClip#setInterval方法即将废弃,请使用MovieClip#frameRate代替");
            this.frameRate = 60 / d
        };
        a.prototype.getIsPlaying = function() {
            c.Logger.warning("MovieClip#getIsPlaying方法即将废弃");
            return this.delegate.isPlaying
        };
        return a
    }(c.DisplayObjectContainer);
    c.MovieClip = e;
    e.prototype.__class__ = "egret.MovieClip";
    var f = function() {
        function b(a, d) {
            this.data = a;
            this._currentFrameIndex = this._passTime = this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new c.SpriteSheet(d)
        }
        b.prototype.setMovieClip = function(a) {
            this.movieClip = a;
            this.bitmap = new c.Bitmap;
            this.movieClip.addChild(this.bitmap)
        };
        b.prototype.gotoAndPlay = function(a) {
            this.checkHasFrame(a);
            this._isPlaying = !0;
            this._currentFrameIndex = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame();
            this._passTime = 0;
            c.Ticker.getInstance().register(this.update, this)
        };
        b.prototype.gotoAndStop = function(a) {
            this.checkHasFrame(a);
            this.stop();
            this._currentFrameIndex = this._passTime = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame()
        };
        b.prototype.stop = function() {
            this._isPlaying = !1;
            c.Ticker.getInstance().unregister(this.update, this)
        };
        b.prototype.dispose = function() {};
        b.prototype.checkHasFrame = function(a) {
            void 0 == this._frameData.frames[a] && c.Logger.fatal("MovieClip没有对应的frame：", a)
        };
        b.prototype.update = function(a) {
            for (var d = 1E3 / this.movieClip.frameRate, d = Math.floor((this._passTime % d + a) / d); 1 <= d;) 1 == d ? this.playNextFrame() : this.playNextFrame(!1), d--;
            this._passTime += a
        };
        b.prototype.playNextFrame = function(a) {
            void 0 === a && (a = !0);
            var d = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(d.res);
                var b = this.bitmap;
                b.x = d.x;
                b.y = d.y;
                b.texture = a
            }
            null != d.action && this.movieClip.dispatchEventWith(d.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0, d.action != c.Event.COMPLETE && this.movieClip.dispatchEventWith(c.Event.COMPLETE))
        };
        b.prototype.getTexture = function(a) {
            var d = this._frameData.res[a],
                b = this._spriteSheet.getTexture(a);
            b || (b = this._spriteSheet.createTexture(a, d.x, d.y, d.w, d.h));
            return b
        };
        return b
    }();
    c.DefaultMovieClipDelegate = f;
    f.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._scaleY = this._scaleX = 1;
            this._size = 30;
            this._color = "#FFFFFF";
            this._fontFamily = "Arial";
            this._italic = this._bold = !1;
            this._textAlign = "left";
            this._multiline = this._visible = !1;
            this._maxChars = 0
        }
        __extends(b, c);
        b.prototype._getText = function() {
            return null
        };
        b.prototype._setText = function(a) {};
        b.prototype._setTextType = function(a) {};
        b.prototype._getTextType = function() {
            return null
        };
        b.prototype._open = function(a, d, b, c) {};
        b.prototype._show = function() {};
        b.prototype._add = function() {};
        b.prototype._remove = function() {};
        b.prototype._hide = function() {};
        b.prototype._addListeners = function() {};
        b.prototype._removeListeners = function() {};
        b.prototype._setScale = function(a, d) {
            this._scaleX = a;
            this._scaleY = d
        };
        b.prototype.changePosition = function(a, d) {};
        b.prototype._setSize = function(a) {
            this._size = a
        };
        b.prototype._setTextColor = function(a) {
            this._color = a
        };
        b.prototype._setTextFontFamily = function(a) {
            this._fontFamily = a
        };
        b.prototype._setBold = function(a) {
            this._bold = a
        };
        b.prototype._setItalic = function(a) {
            this._italic = a
        };
        b.prototype._setTextAlign = function(a) {
            this._textAlign = a
        };
        b.prototype._setVisible = function(a) {
            this._visible = a
        };
        b.prototype._setWidth = function(a) {};
        b.prototype._setHeight = function(a) {};
        b.prototype._setMultiline = function(a) {
            this._multiline = a
        };
        b.prototype._setMaxChars = function(a) {
            this._maxChars = a
        };
        b.prototype._resetStageText = function() {};
        b.create = function() {
            return null
        };
        return b
    }(c.EventDispatcher);
    c.StageText = e;
    e.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.GET = "get";
        c.POST = "post";
        return c
    }();
    c.URLRequestMethod = e;
    e.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.BINARY = "binary";
        c.TEXT = "text";
        c.VARIABLES = "variables";
        c.TEXTURE = "texture";
        c.SOUND = "sound";
        return c
    }();
    c.URLLoaderDataFormat = e;
    e.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b(a) {
            void 0 === a && (a = null);
            c.call(this);
            null !== a && this.decode(a)
        }
        __extends(b, c);
        b.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var d, b = /[?&]?([^=]+)=([^&]*)/g; d = b.exec(a);) this.variables[decodeURIComponent(d[1])] = decodeURIComponent(d[2])
        };
        b.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
                d = "",
                b = !0,
                c;
            for (c in a) b ? b = !1 : d += "&", d += c + "=" + a[c];
            return d
        };
        return b
    }(c.HashObject);
    c.URLVariables = e;
    e.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        return function(c, b) {
            this.name = c;
            this.value = b
        }
    }();
    c.URLRequestHeader = e;
    e.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            void 0 === a && (a = null);
            e.call(this);
            this.method = c.URLRequestMethod.GET;
            this.url = a
        }
        __extends(b, e);
        return b
    }(c.HashObject);
    c.URLRequest = e;
    e.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            void 0 === a && (a = null);
            e.call(this);
            this.dataFormat = c.URLLoaderDataFormat.TEXT;
            this._status = -1;
            a && this.load(a)
        }
        __extends(b, e);
        b.prototype.load = function(a) {
            this._request = a;
            this.data = null;
            c.MainContext.instance.netContext.proceed(this)
        };
        return b
    }(c.EventDispatcher);
    c.URLLoader = e;
    e.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
        }
        __extends(b, e);
        Object.defineProperty(b.prototype, "textureWidth", {
            get: function() {
                return this._textureWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "textureHeight", {
            get: function() {
                return this._textureHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(b.prototype, "bitmapData", {
            get: function() {
                return this._bitmapData
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._setBitmapData = function(a) {
            var d = c.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * d;
            this._textureHeight = this._sourceHeight * d;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        };
        b.prototype.getPixel32 = function(a, d) {
            return this._bitmapData.getContext("2d").getImageData(a, d, 1, 1).data
        };
        return b
    }(c.HashObject);
    c.Texture = e;
    e.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = c.RendererContext.createRendererContext(this._bitmapData)
        }
        __extends(b, e);
        b.prototype.drawToTexture = function(a) {
            var d = this._bitmapData,
                e = a.getBounds(c.Rectangle.identity);
            if (0 == e.width || 0 == e.height) return c.Logger.warning("egret.RenderTexture#drawToTexture:显示对象测量结果宽高为0，请检查"), !1;
            e.width = Math.floor(e.width);
            e.height = Math.floor(e.height);
            d.width = e.width;
            d.height = e.height;
            this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = e.width, this.renderContext._cacheCanvas.height = e.height);
            b.identityRectangle.width = e.width;
            b.identityRectangle.height = e.height;
            a._worldTransform.identity();
            a.worldAlpha = 1;
            if (a instanceof c.DisplayObjectContainer) {
                var d = a._anchorOffsetX,
                    f = a._anchorOffsetY;
                if (0 != a._anchorX || 0 != a._anchorY) d = a._anchorX * e.width, f = a._anchorY * e.height;
                this._offsetX = e.x + d;
                this._offsetY = e.y + f;
                a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                e = a._children;
                d = 0;
                for (f = e.length; d < f; d++) e[d]._updateTransform()
            }
            e = c.RenderFilter.getInstance();
            d = e._drawAreaList.concat();
            e._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            this.webGLTexture = null;
            (f = a.mask || a._scrollRect) && this.renderContext.pushMask(f);
            a._render(this.renderContext);
            f && this.renderContext.popMask();
            e.addDrawArea(b.identityRectangle);
            this.renderContext.onRenderFinish();
            e._drawAreaList = d;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight;
            return !0
        };
        b.identityRectangle = new c.Rectangle;
        return b
    }(c.Texture);
    c.RenderTexture = e;
    e.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1;
            this.profiler = c.Profiler.getInstance()
        }
        __extends(b, e);
        b.prototype.clearScreen = function() {};
        b.prototype.clearRect = function(a, d, b, c) {};
        b.prototype.drawImage = function(a, d, b, c, e, f, h, k, l, m) {
            this.profiler.onDrawImage()
        };
        b.prototype.setTransform = function(a) {};
        b.prototype.setAlpha = function(a, d) {};
        b.prototype.setupFont = function(a, d) {};
        b.prototype.measureText = function(a) {
            return 0
        };
        b.prototype.drawText = function(a, d, b, c, e, f) {
            this.profiler.onDrawImage()
        };
        b.prototype.strokeRect = function(a, d, b, c, e) {};
        b.prototype.pushMask = function(a) {};
        b.prototype.popMask = function() {};
        b.prototype.onRenderStart = function() {};
        b.prototype.onRenderFinish = function() {};
        b.prototype.setGlobalColorTransform = function(a) {};
        b.createRendererContext = function(a) {
            return null
        };
        b.imageSmoothingEnabled = !0;
        return b
    }(c.HashObject);
    c.RendererContext = e;
    e.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.MOUSE = "mouse";
        c.TOUCH = "touch";
        c.mode = "touch";
        return c
    }();
    c.InteractionMode = e;
    e.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.touchingIdentifiers = [];
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(b, e);
        b.prototype.run = function() {};
        b.prototype.getTouchData = function(a, d, b) {
            var c = this._currentTouchTarget[a];
            null == c && (c = {}, this._currentTouchTarget[a] = c);
            c.stageX = d;
            c.stageY = b;
            c.identifier = a;
            return c
        };
        b.prototype.dispatchEvent = function(a, d) {
            c.TouchEvent.dispatchTouchEvent(d.target, a, d.identifier, d.stageX, d.stageY, !1, !1, !1, !0 == this.touchDownTarget[d.identifier])
        };
        b.prototype.onTouchBegan = function(a, d, b) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var e = c.MainContext.instance.stage.hitTest(a, d);
                e && (a = this.getTouchData(b, a, d), this.touchDownTarget[b] = !0, a.target = e, a.beginTarget = e, this.dispatchEvent(c.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(b)
            }
        };
        b.prototype.onTouchMove = function(a, d, b) {
            if (-1 != this.touchingIdentifiers.indexOf(b) && (a != this.lastTouchX || d != this.lastTouchY)) {
                this.lastTouchX = a;
                this.lastTouchY = d;
                var e = c.MainContext.instance.stage.hitTest(a, d);
                e && (a = this.getTouchData(b, a, d), a.target = e, this.dispatchEvent(c.TouchEvent.TOUCH_MOVE, a))
            }
        };
        b.prototype.onTouchEnd = function(a, d, b) {
            var e = this.touchingIdentifiers.indexOf(b); - 1 != e && (this.touchingIdentifiers.splice(e, 1), e = c.MainContext.instance.stage.hitTest(a, d)) && (a = this.getTouchData(b, a, d), delete this.touchDownTarget[b], b = a.beginTarget, a.target = e, this.dispatchEvent(c.TouchEvent.TOUCH_END, a), b == e ? this.dispatchEvent(c.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(c.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return b
    }(c.HashObject);
    c.TouchContext = e;
    e.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this)
        }
        __extends(b, e);
        b.prototype.proceed = function(a) {};
        b._getUrl = function(a) {
            var d = a.url; - 1 == d.indexOf("?") && a.method == c.URLRequestMethod.GET && a.data && a.data instanceof c.URLVariables && (d = d + "?" + a.data.toString());
            return d
        };
        b.prototype.getChangeList = function() {
            return []
        };
        return b
    }(c.HashObject);
    c.NetContext = e;
    e.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this.frameRate = 60
        }
        __extends(b, c);
        b.prototype.executeMainLoop = function(a, d) {};
        return b
    }(c.HashObject);
    c.DeviceContext = e;
    e.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.call = function(b, a) {};
        c.addCallback = function(b, a) {};
        return c
    }();
    c.ExternalInterface = e;
    e.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this.ua = navigator.userAgent.toLowerCase();
            this.trans = this._getTrans()
        }
        __extends(b, e);
        b.getInstance = function() {
            null == b.instance && (b.instance = new b);
            return b.instance
        };
        Object.defineProperty(b.prototype, "isMobile", {
            get: function() {
                c.Logger.warning("Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
                return c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype._getHeader = function(a) {
            if ("transform" in a) return "";
            for (var d = ["webkit", "ms", "Moz", "O"], b = 0; b < d.length; b++)
                if (d[b] + "Transform" in a) return d[b];
            return ""
        };
        b.prototype._getTrans = function() {
            var a = document.createElement("div").style,
                a = this._getHeader(a);
            return "" == a ? "transform" : a + "Transform"
        };
        b.prototype.$new = function(a) {
            return this.$(document.createElement(a))
        };
        b.prototype.$ = function(a) {
            var d = document;
            if (a = a instanceof HTMLElement ? a : d.querySelector(a)) a.find = a.find || this.$, a.hasClass = a.hasClass || function(d) {
                return this.className.match(new RegExp("(\\s|^)" + d + "(\\s|$)"))
            }, a.addClass = a.addClass || function(d) {
                this.hasClass(d) || (this.className && (this.className += " "), this.className += d);
                return this
            }, a.removeClass = a.removeClass || function(d) {
                this.hasClass(d) && (this.className = this.className.replace(d, ""));
                return this
            }, a.remove = a.remove || function() {}, a.appendTo = a.appendTo || function(d) {
                d.appendChild(this);
                return this
            }, a.prependTo = a.prependTo || function(d) {
                d.childNodes[0] ? d.insertBefore(this, d.childNodes[0]) : d.appendChild(this);
                return this
            }, a.transforms = a.transforms || function() {
                this.style[b.getInstance().trans] = b.getInstance().translate(this.position) + b.getInstance().rotate(this.rotation) + b.getInstance().scale(this.scale) + b.getInstance().skew(this.skew);
                return this
            }, a.position = a.position || {
                x: 0,
                y: 0
            }, a.rotation = a.rotation || 0, a.scale = a.scale || {
                x: 1,
                y: 1
            }, a.skew = a.skew || {
                x: 0,
                y: 0
            }, a.translates = function(d, a) {
                this.position.x = d;
                this.position.y = a - c.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            }, a.rotate = function(d) {
                this.rotation = d;
                this.transforms();
                return this
            }, a.resize = function(d, a) {
                this.scale.x = d;
                this.scale.y = a;
                this.transforms();
                return this
            }, a.setSkew = function(d, a) {
                this.skew.x = d;
                this.skew.y = a;
                this.transforms();
                return this
            };
            return a
        };
        b.prototype.translate = function(a) {
            return "translate(" + a.x + "px, " + a.y + "px) "
        };
        b.prototype.rotate = function(a) {
            return "rotate(" + a + "deg) "
        };
        b.prototype.scale = function(a) {
            return "scale(" + a.x + ", " + a.y + ") "
        };
        b.prototype.skew = function(a) {
            return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        };
        return b
    }(c.HashObject);
    c.Browser = e;
    e.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        c.getItem = function(c) {
            return null
        };
        c.setItem = function(c, b) {
            return !1
        };
        c.removeItem = function(c) {};
        c.clear = function() {}
    })(c.localStorage || (c.localStorage = {}))
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function e() {}
        e.parse = function(b) {
            b = c.SAXParser.getInstance().parserXML(b);
            if (!b || !b.childNodes) return null;
            for (var a = b.childNodes.length, d = !1, s = 0; s < a; s++) {
                var x = b.childNodes[s];
                if (1 == x.nodeType) {
                    d = !0;
                    break
                }
            }
            return d ? e.parseNode(x) : null
        };
        e.parseNode = function(b) {
            if (!b || 1 != b.nodeType) return null;
            var a = {};
            a.localName = b.localName;
            a.name = b.nodeName;
            b.namespaceURI && (a.namespace = b.namespaceURI);
            b.prefix && (a.prefix = b.prefix);
            for (var d = b.attributes, c = d.length, x = 0; x < c; x++) {
                var q = d[x],
                    g = q.name;
                0 != g.indexOf("xmlns:") && (a["$" + g] = q.value)
            }
            d = b.childNodes;
            c = d.length;
            for (x = 0; x < c; x++)
                if (q = e.parseNode(d[x])) a.children || (a.children = []), q.parent = a, a.children.push(q);
                !a.children && (b = b.textContent.trim()) && (a.text = b);
            return a
        };
        e.findChildren = function(b, a, d) {
            d ? d.length = 0 : d = [];
            e.findByPath(b, a, d);
            return d
        };
        e.findByPath = function(b, a, d) {
            var c = a.indexOf("."),
                x; - 1 == c ? (x = a, c = !0) : (x = a.substring(0, c), a = a.substring(c + 1), c = !1);
            if (b = b.children)
                for (var q = b.length, g = 0; g < q; g++) {
                    var h = b[g];
                    h.localName == x && (c ? d.push(h) : e.findByPath(h, a, d))
                }
        };
        e.getAttributes = function(b, a) {
            a ? a.length = 0 : a = [];
            for (var d in b) "$" == d.charAt(0) && a.push(d.substring(1));
            return a
        };
        return e
    }();
    c.XML = e;
    e.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function b() {}
        b.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        b.BIG_ENDIAN = "BIG_ENDIAN";
        return b
    }();
    c.Endian = e;
    e.prototype.__class__ = "egret.Endian";
    var f = function() {
        function b() {
            this.length = this.position = 0;
            this._mode = "";
            this.maxlength = 0;
            this._endian = e.LITTLE_ENDIAN;
            this.isLittleEndian = !1;
            this._mode = "Typed array";
            this.maxlength = 4;
            this.arraybytes = new ArrayBuffer(this.maxlength);
            this.unalignedarraybytestemp = new ArrayBuffer(16);
            this.endian = b.DEFAULT_ENDIAN
        }
        Object.defineProperty(b.prototype, "endian", {
            get: function() {
                return this._endian
            },
            set: function(a) {
                this._endian = a;
                this.isLittleEndian = a == e.LITTLE_ENDIAN
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.ensureWriteableSpace = function(a) {
            this.ensureSpace(a + this.position)
        };
        b.prototype.setArrayBuffer = function(a) {
            this.ensureSpace(a.byteLength);
            this.length = a.byteLength;
            a = new Int8Array(a);
            (new Int8Array(this.arraybytes, 0, this.length)).set(a);
            this.position = 0
        };
        Object.defineProperty(b.prototype, "bytesAvailable", {
            get: function() {
                return this.length - this.position
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.ensureSpace = function(a) {
            if (a > this.maxlength) {
                a = a + 255 & -256;
                var d = new ArrayBuffer(a),
                    b = new Uint8Array(this.arraybytes, 0, this.length);
                (new Uint8Array(d, 0, this.length)).set(b);
                this.arraybytes = d;
                this.maxlength = a
            }
        };
        b.prototype.writeByte = function(a) {
            this.ensureWriteableSpace(1);
            (new Int8Array(this.arraybytes))[this.position++] = ~~a;
            this.position > this.length && (this.length = this.position)
        };
        b.prototype.readByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Int8Array(this.arraybytes))[this.position++]
        };
        b.prototype.readBytes = function(a, d, b) {
            void 0 === d && (d = 0);
            void 0 === b && (b = 0);
            null == b && (b = a.length);
            a.ensureWriteableSpace(d + b);
            var c = new Int8Array(a.arraybytes),
                e = new Int8Array(this.arraybytes);
            c.set(e.subarray(this.position, this.position + b), d);
            this.position += b;
            b + d > a.length && (a.length += b + d - a.length)
        };
        b.prototype.writeUnsignedByte = function(a) {
            this.ensureWriteableSpace(1);
            (new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
            this.position > this.length && (this.length = this.position)
        };
        b.prototype.readUnsignedByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Uint8Array(this.arraybytes))[this.position++]
        };
        b.prototype.writeUnsignedShort = function(a) {
            this.ensureWriteableSpace(2);
            if (0 == (this.position & 1)) {
                var d = new Uint16Array(this.arraybytes);
                d[this.position >> 1] = ~~a & 65535
            } else d = new Uint16Array(this.unalignedarraybytestemp, 0, 1), d[0] = ~~a & 65535, a = new Uint8Array(this.arraybytes, this.position, 2), d = new Uint8Array(this.unalignedarraybytestemp, 0, 2), a.set(d);
            this.position += 2;
            this.position > this.length && (this.length = this.position)
        };
        b.prototype.readUTFBytes = function(a) {
            var d = "";
            a = this.position + a;
            for (var b = new DataView(this.arraybytes); this.position < a;) {
                var c = b.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    d += String.fromCharCode(c)
                } else if (224 > c) d += String.fromCharCode((c & 63) << 6 | b.getUint8(this.position++) & 127);
                else if (240 > c) var e = b.getUint8(this.position++),
                d = d + String.fromCharCode((c & 31) << 12 | (e & 127) << 6 | b.getUint8(this.position++) & 127);
                else var e = b.getUint8(this.position++),
                f = b.getUint8(this.position++), d = d + String.fromCharCode((c & 15) << 18 | (e & 127) << 12 | f << 6 & 127 | b.getUint8(this.position++) & 127)
            }
            return d
        };
        b.prototype.readInt = function() {
            var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
            this.position += 4;
            return a
        };
        b.prototype.readShort = function() {
            var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
            this.position += 2;
            return a
        };
        b.prototype.readDouble = function() {
            var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
            this.position += 8;
            return a
        };
        b.prototype.readUnsignedShort = function() {
            if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 1)) {
                var a = new Uint16Array(this.arraybytes),
                    d = this.position >> 1;
                this.position += 2;
                return a[d]
            }
            a = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
            d = new Uint8Array(this.arraybytes, this.position, 2);
            (new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(d);
            this.position += 2;
            return a[0]
        };
        b.prototype.writeUnsignedInt = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var d = new Uint32Array(this.arraybytes);
                d[this.position >> 2] = ~~a & 4294967295
            } else d = new Uint32Array(this.unalignedarraybytestemp, 0, 1), d[0] = ~~a & 4294967295, a = new Uint8Array(this.arraybytes, this.position, 4), d = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(d);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        b.prototype.readUnsignedInt = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Uint32Array(this.arraybytes),
                    d = this.position >> 2;
                this.position += 4;
                return a[d]
            }
            a = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
            d = new Uint8Array(this.arraybytes, this.position, 4);
            (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(d);
            this.position += 4;
            return a[0]
        };
        b.prototype.writeFloat = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var d = new Float32Array(this.arraybytes);
                d[this.position >> 2] = a
            } else d = new Float32Array(this.unalignedarraybytestemp, 0, 1), d[0] = a, a = new Uint8Array(this.arraybytes, this.position, 4), d = new Uint8Array(this.unalignedarraybytestemp, 0, 4), a.set(d);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        b.prototype.readFloat = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Float32Array(this.arraybytes),
                    d = this.position >> 2;
                this.position += 4;
                return a[d]
            }
            a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
            d = new Uint8Array(this.arraybytes, this.position, 4);
            (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(d);
            this.position += 4;
            return a[0]
        };
        b.DEFAULT_ENDIAN = e.BIG_ENDIAN;
        return b
    }();
    c.ByteArray = f;
    f.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a, d, b) {
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
            this.initialize(a, d, b)
        }
        __extends(b, e);
        b.get = function(a, d, c, e) {
            void 0 === d && (d = null);
            void 0 === c && (c = null);
            void 0 === e && (e = !1);
            e && b.removeTweens(a);
            return new b(a, d, c)
        };
        b.removeTweens = function(a) {
            if (a.tween_count) {
                for (var d = b._tweens, c = d.length - 1; 0 <= c; c--) d[c]._target == a && (d[c].paused = !0, d.splice(c, 1));
                a.tween_count = 0
            }
        };
        b.pauseTweens = function(a) {
            if (a.tween_count)
                for (var d = c.Tween._tweens, b = d.length - 1; 0 <= b; b--) d[b]._target == a && (d[b].paused = !0)
        };
        b.resumeTweens = function(a) {
            if (a.tween_count)
                for (var d = c.Tween._tweens, b = d.length - 1; 0 <= b; b--) d[b]._target == a && (d[b].paused = !1)
        };
        b.tick = function(a, d) {
            void 0 === d && (d = !1);
            for (var c = b._tweens.concat(), e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                d && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : a)
            }
        };
        b._register = function(a, d) {
            var e = a._target,
                f = b._tweens;
            if (d) e && (e.tween_count = e.tween_count ? e.tween_count + 1 : 1), f.push(a), b._inited || (c.Ticker.getInstance().register(b.tick, null), b._inited = !0);
            else
                for (e && e.tween_count--, e = f.length; e--;)
                    if (f[e] == a) {
                        f.splice(e, 1);
                        break
                    }
        };
        b.removeAllTweens = function() {
            for (var a = b._tweens, d = 0, c = a.length; d < c; d++) {
                var e = a[d];
                e.paused = !0;
                e._target.tweenjs_count = 0
            }
            a.length = 0
        };
        b.prototype.initialize = function(a, d, c) {
            this._target = a;
            d && (this._useTicks = d.useTicks, this.ignoreGlobalPause = d.ignoreGlobalPause, this.loop = d.loop, d.onChange && this.addEventListener("change", d.onChange, d.onChangeObj), d.override && b.removeTweens(a));
            this.pluginData = c || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            d && d.paused ? this.paused = !0 : b._register(this, !0);
            d && null != d.position && this.setPosition(d.position, b.NONE)
        };
        b.prototype.setPosition = function(a, d) {
            void 0 === d && (d = 1);
            0 > a && (a = 0);
            var b = a,
                c = !1;
            b >= this.duration && (this.loop ? b %= this.duration : (b = this.duration, c = !0));
            if (b == this._prevPos) return c;
            var e = this._prevPos;
            this.position = this._prevPos = b;
            this._prevPosition = a;
            if (this._target)
                if (c) this._updateTargetProps(null, 1);
                else if (0 < this._steps.length) {
                for (var f = 0, h = this._steps.length; f < h && !(this._steps[f].t > b); f++);
                f = this._steps[f - 1];
                this._updateTargetProps(f, (this._stepPosition = b - f.t) / f.d)
            }
            0 != d && 0 < this._actions.length && (this._useTicks ? this._runActions(b, b) : 1 == d && b < e ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, b, !0)) : this._runActions(e, b));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        };
        b.prototype._runActions = function(a, d, b) {
            void 0 === b && (b = !1);
            var c = a,
                e = d,
                f = -1,
                h = this._actions.length,
                k = 1;
            a > d && (c = d, e = a, f = h, h = k = -1);
            for (;
                (f += k) != h;) {
                d = this._actions[f];
                var l = d.t;
                (l == e || l > c && l < e || b && l == a) && d.f.apply(d.o, d.p)
            }
        };
        b.prototype._updateTargetProps = function(a, d) {
            var c, e, f, g;
            if (a || 1 != d) {
                if (this.passive = !! a.v) return;
                a.e && (d = a.e(d, 0, 1, 1));
                c = a.p0;
                e = a.p1
            } else this.passive = !1, c = e = this._curQueueProps;
            for (var h in this._initQueueProps) {
                null == (f = c[h]) && (c[h] = f = this._initQueueProps[h]);
                null == (g = e[h]) && (e[h] = g = f);
                f = f == g || 0 == d || 1 == d || "number" != typeof f ? 1 == d ? g : f : f + (g - f) * d;
                var k = !1;
                if (g = b._plugins[h])
                    for (var l = 0, m = g.length; l < m; l++) {
                        var n = g[l].tween(this, h, f, c, e, d, !! a && c == e, !a);
                        n == b.IGNORE ? k = !0 : f = n
                    }
                k || (this._target[h] = f)
            }
        };
        b.prototype.setPaused = function(a) {
            this.paused = a;
            b._register(this, !a);
            return this
        };
        b.prototype._cloneProps = function(a) {
            var d = {}, b;
            for (b in a) d[b] = a[b];
            return d
        };
        b.prototype._addStep = function(a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        b.prototype._appendQueueProps = function(a) {
            var d, c, e, f, g, h;
            for (h in a)
                if (void 0 === this._initQueueProps[h]) {
                    c = this._target[h];
                    if (d = b._plugins[h])
                        for (e = 0, f = d.length; e < f; e++) c = d[e].init(this, h, c);
                    this._initQueueProps[h] = this._curQueueProps[h] = void 0 === c ? null : c
                }
            for (h in a) {
                c = this._curQueueProps[h];
                if (d = b._plugins[h])
                    for (g = g || {}, e = 0, f = d.length; e < f; e++) d[e].step && d[e].step(this, h, c, a[h], g);
                this._curQueueProps[h] = a[h]
            }
            g && this._appendQueueProps(g);
            return this._curQueueProps
        };
        b.prototype._addAction = function(a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        b.prototype._set = function(a, d) {
            for (var b in a) d[b] = a[b]
        };
        b.prototype.wait = function(a, d) {
            if (null == a || 0 >= a) return this;
            var b = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: b,
                p1: b,
                v: d
            })
        };
        b.prototype.to = function(a, d, b) {
            void 0 === b && (b = void 0);
            if (isNaN(d) || 0 > d) d = 0;
            return this._addStep({
                d: d || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: b,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        b.prototype.call = function(a, d, b) {
            void 0 === d && (d = void 0);
            void 0 === b && (b = void 0);
            return this._addAction({
                f: a,
                p: b ? b : [],
                o: d ? d : this._target
            })
        };
        b.prototype.set = function(a, d) {
            void 0 === d && (d = null);
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, d ? d : this._target]
            })
        };
        b.prototype.play = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!1])
        };
        b.prototype.pause = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!0])
        };
        b.prototype.tick = function(a) {
            this.paused || this.setPosition(this._prevPosition + a)
        };
        b.NONE = 0;
        b.LOOP = 1;
        b.REVERSE = 2;
        b._tweens = [];
        b.IGNORE = {};
        b._plugins = {};
        b._inited = !1;
        return b
    }(c.EventDispatcher);
    c.Tween = e;
    e.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function e() {
            c.Logger.fatal("Ease不能被实例化")
        }
        e.get = function(b) {
            -1 > b && (b = -1);
            1 < b && (b = 1);
            return function(a) {
                return 0 == b ? a : 0 > b ? a * (a * -b + 1 + b) : a * ((2 - a) * b + (1 - b))
            }
        };
        e.getPowIn = function(b) {
            return function(a) {
                return Math.pow(a, b)
            }
        };
        e.getPowOut = function(b) {
            return function(a) {
                return 1 - Math.pow(1 - a, b)
            }
        };
        e.getPowInOut = function(b) {
            return function(a) {
                return 1 > (a *= 2) ? 0.5 * Math.pow(a, b) : 1 - 0.5 * Math.abs(Math.pow(2 - a, b))
            }
        };
        e.sineIn = function(b) {
            return 1 - Math.cos(b * Math.PI / 2)
        };
        e.sineOut = function(b) {
            return Math.sin(b * Math.PI / 2)
        };
        e.sineInOut = function(b) {
            return -0.5 * (Math.cos(Math.PI * b) - 1)
        };
        e.getBackIn = function(b) {
            return function(a) {
                return a * a * ((b + 1) * a - b)
            }
        };
        e.getBackOut = function(b) {
            return function(a) {
                return --a * a * ((b + 1) * a + b) + 1
            }
        };
        e.getBackInOut = function(b) {
            b *= 1.525;
            return function(a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((b + 1) * a - b) : 0.5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
            }
        };
        e.circIn = function(b) {
            return -(Math.sqrt(1 - b * b) - 1)
        };
        e.circOut = function(b) {
            return Math.sqrt(1 - --b * b)
        };
        e.circInOut = function(b) {
            return 1 > (b *= 2) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
        };
        e.bounceIn = function(b) {
            return 1 - e.bounceOut(1 - b)
        };
        e.bounceOut = function(b) {
            return b < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
        };
        e.bounceInOut = function(b) {
            return 0.5 > b ? 0.5 * e.bounceIn(2 * b) : 0.5 * e.bounceOut(2 * b - 1) + 0.5
        };
        e.getElasticIn = function(b, a) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var e = a / d * Math.asin(1 / b);
                return -(b * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - e) * d / a))
            }
        };
        e.getElasticOut = function(b, a) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var e = a / d * Math.asin(1 / b);
                return b * Math.pow(2, -10 * c) * Math.sin((c - e) * d / a) + 1
            }
        };
        e.getElasticInOut = function(b, a) {
            var d = 2 * Math.PI;
            return function(c) {
                var e = a / d * Math.asin(1 / b);
                return 1 > (c *= 2) ? -0.5 * b * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - e) * d / a) : b * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - e) * d / a) * 0.5 + 1
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
    }();
    c.Ease = e;
    e.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {
            this.type = c.EFFECT
        }
        c.prototype.play = function(b) {
            void 0 === b && (b = !1);
            var a = this.audio;
            a && (isNaN(a.duration) || (a.currentTime = 0), a.loop = b, a.play())
        };
        c.prototype.pause = function() {
            var b = this.audio;
            b && b.pause()
        };
        c.prototype.load = function() {
            var b = this.audio;
            b && b.load()
        };
        c.prototype.addEventListener = function(b, a) {
            this.audio && this.audio.addEventListener(b, a, !1)
        };
        c.prototype.removeEventListener = function(b, a) {
            this.audio && this.audio.removeEventListener(b, a, !1)
        };
        c.prototype.setVolume = function(b) {
            var a = this.audio;
            a && (a.volume = b)
        };
        c.prototype.getVolume = function() {
            return this.audio ? this.audio.volume : 0
        };
        c.prototype.preload = function(b) {
            this.type = b
        };
        c.prototype._setAudio = function(b) {
            this.audio = b
        };
        c.MUSIC = "music";
        c.EFFECT = "effect";
        return c
    }();
    c.Sound = e;
    e.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.isNumber = function(b) {
            return "number" === typeof b && !isNaN(b)
        };
        c.sin = function(b) {
            b = Math.round(b);
            b %= 360;
            0 > b && (b += 360);
            return 90 > b ? egret_sin_map[b] : 180 > b ? egret_cos_map[b - 90] : 270 > b ? -egret_sin_map[b - 180] : -egret_cos_map[b - 270]
        };
        c.cos = function(b) {
            b = Math.round(b);
            b %= 360;
            0 > b && (b += 360);
            return 90 > b ? egret_cos_map[b] : 180 > b ? -egret_sin_map[b - 90] : 270 > b ? -egret_cos_map[b - 180] : egret_sin_map[b - 270]
        };
        return c
    }();
    c.NumberUtils = e;
    e.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(c) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var e = Array.prototype.slice.call(arguments, 1),
        f = this,
        b = function() {}, a = function() {
            return f.apply(this instanceof b && c ? this : c, e.concat(Array.prototype.slice.call(arguments)))
        };
    b.prototype = this.prototype;
    a.prototype = new b;
    return a
});
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, RES;
(function(c) {
    var e = function(c) {
        function b(a, d, b) {
            void 0 === d && (d = !1);
            void 0 === b && (b = !1);
            c.call(this, a, d, b);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(b, c);
        b.dispatchResourceEvent = function(a, d, c, e, f, g) {
            void 0 === c && (c = "");
            void 0 === e && (e = null);
            void 0 === f && (f = 0);
            void 0 === g && (g = 0);
            var h = egret.Event._getPropertyData(b);
            h.groupName = c;
            h.resItem = e;
            h.itemsLoaded = f;
            h.itemsTotal = g;
            egret.Event._dispatchByTarget(b, a, d, h)
        };
        b.ITEM_LOAD_ERROR = "itemLoadError";
        b.CONFIG_COMPLETE = "configComplete";
        b.CONFIG_LOAD_ERROR = "configLoadError";
        b.GROUP_PROGRESS = "groupProgress";
        b.GROUP_COMPLETE = "groupComplete";
        b.GROUP_LOAD_ERROR = "groupLoadError";
        return b
    }(egret.Event);
    c.ResourceEvent = e;
    e.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(c) {
    var e = function() {
        function c(b, a, d) {
            this._loaded = !1;
            this.name = b;
            this.url = a;
            this.type = d
        }
        Object.defineProperty(c.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded : this._loaded
            },
            set: function(b) {
                this.data && (this.data.loaded = b);
                this._loaded = b
            },
            enumerable: !0,
            configurable: !0
        });
        c.prototype.toString = function() {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        };
        c.TYPE_XML = "xml";
        c.TYPE_IMAGE = "image";
        c.TYPE_BIN = "bin";
        c.TYPE_TEXT = "text";
        c.TYPE_JSON = "json";
        c.TYPE_SHEET = "sheet";
        c.TYPE_FONT = "font";
        c.TYPE_SOUND = "sound";
        return c
    }();
    c.ResourceItem = e;
    e.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(c) {
    var e = function() {
        function e() {
            this.keyMap = {};
            this.groupDic = {};
            c.configInstance = this
        }
        e.prototype.getGroupByName = function(b) {
            var a = [];
            if (!this.groupDic[b]) return a;
            b = this.groupDic[b];
            for (var d = b.length, c = 0; c < d; c++) a.push(this.parseResourceItem(b[c]));
            return a
        };
        e.prototype.getRawGroupByName = function(b) {
            return this.groupDic[b] ? this.groupDic[b] : []
        };
        e.prototype.createGroup = function(b, a, d) {
            void 0 === d && (d = !1);
            if (!d && this.groupDic[b] || !a || 0 == a.length) return !1;
            d = this.groupDic;
            for (var c = [], e = a.length, f = 0; f < e; f++) {
                var g = a[f],
                    h = d[g];
                if (h)
                    for (var g = h.length, k = 0; k < g; k++) {
                        var l = h[k]; - 1 == c.indexOf(l) && c.push(l)
                    } else(l = this.keyMap[g]) && -1 == c.indexOf(l) && c.push(l)
            }
            if (0 == c.length) return !1;
            this.groupDic[b] = c;
            return !0
        };
        e.prototype.parseConfig = function(b, a) {
            if (b) {
                var d = b.resources;
                if (d)
                    for (var c = d.length, e = 0; e < c; e++) {
                        var f = d[e],
                            g = f.url;
                        g && -1 == g.indexOf("://") && (f.url = a + g);
                        this.addItemToKeyMap(f)
                    }
                if (d = b.groups)
                    for (c = d.length, e = 0; e < c; e++) {
                        for (var g = d[e], h = [], k = g.keys.split(","), l = k.length, m = 0; m < l; m++) f = k[m].trim(), (f = this.keyMap[f]) && -1 == h.indexOf(f) && h.push(f);
                        this.groupDic[g.name] = h
                    }
            }
        };
        e.prototype.addSubkey = function(b, a) {
            var d = this.keyMap[a];
            d && !this.keyMap[b] && (this.keyMap[b] = d)
        };
        e.prototype.addItemToKeyMap = function(b) {
            this.keyMap[b.name] || (this.keyMap[b.name] = b);
            if (b.hasOwnProperty("subkeys")) {
                var a = b.subkeys.split(",");
                b.subkeys = a;
                for (var d = a.length, c = 0; c < d; c++) {
                    var e = a[c];
                    null == this.keyMap[e] && (this.keyMap[e] = b)
                }
            }
        };
        e.prototype.getName = function(b) {
            return (b = this.keyMap[b]) ? b.name : ""
        };
        e.prototype.getType = function(b) {
            return (b = this.keyMap[b]) ? b.type : ""
        };
        e.prototype.getRawResourceItem = function(b) {
            return this.keyMap[b]
        };
        e.prototype.getResourceItem = function(b) {
            return (b = this.keyMap[b]) ? this.parseResourceItem(b) : null
        };
        e.prototype.parseResourceItem = function(b) {
            var a = new c.ResourceItem(b.name, b.url, b.type);
            a.data = b;
            return a
        };
        return e
    }();
    c.ResourceConfig = e;
    e.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
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
        __extends(b, e);
        b.prototype.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        };
        b.prototype.loadGroup = function(a, d, b) {
            void 0 === b && (b = 0);
            if (!this.itemListDic[d] && d)
                if (a && 0 != a.length) {
                    this.priorityQueue[b] ? this.priorityQueue[b].push(d) : this.priorityQueue[b] = [d];
                    this.itemListDic[d] = a;
                    b = a.length;
                    for (var e = 0; e < b; e++) a[e].groupName = d;
                    this.groupTotalDic[d] = a.length;
                    this.numLoadedDic[d] = 0;
                    this.next()
                } else egret.Logger.warning('RES加载了不存在或空的资源组："' + d + '"'), a = new c.ResourceEvent(c.ResourceEvent.GROUP_LOAD_ERROR), a.groupName = d, this.dispatchEvent(a)
        };
        b.prototype.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName = "";
            this.next()
        };
        b.prototype.next = function() {
            for (; this.loadingCount < this.thread;) {
                var a = this.getOneResourceItem();
                if (!a) break;
                this.loadingCount++;
                if (a.loaded) this.onItemComplete(a);
                else {
                    var d = this.analyzerDic[a.type];
                    d || (d = this.analyzerDic[a.type] = egret.Injector.getInstance(c.AnalyzerBase, a.type));
                    d.loadFile(a, this.onItemComplete, this)
                }
            }
        };
        b.prototype.getOneResourceItem = function() {
            if (0 < this.failedList.length) return this.failedList.shift();
            var a = Number.NEGATIVE_INFINITY,
                d;
            for (d in this.priorityQueue) a = Math.max(a, d);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
            d = a.length;
            for (var b, c = 0; c < d; c++) {
                this.queueIndex >= d && (this.queueIndex = 0);
                b = this.itemListDic[a[this.queueIndex]];
                if (0 < b.length) break;
                this.queueIndex++
            }
            return 0 == b.length ? null : b.shift()
        };
        b.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var d = a.groupName;
            if (!a.loaded) {
                var b = this.retryTimesDic[a.name] || 1;
                if (b > this.maxRetryTimes) delete this.retryTimesDic[a.name], c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.ITEM_LOAD_ERROR, d, a);
                else {
                    this.retryTimesDic[a.name] = b + 1;
                    this.failedList.push(a);
                    this.next();
                    return
                }
            }
            if (d) {
                this.numLoadedDic[d]++;
                var b = this.numLoadedDic[d],
                    e = this.groupTotalDic[d];
                a.loaded || (this.groupErrorDic[d] = !0);
                c.ResourceEvent.dispatchResourceEvent(this.resInstance, c.ResourceEvent.GROUP_PROGRESS, d, a, b, e);
                b == e && (a = this.groupErrorDic[d], this.removeGroupName(d), delete this.groupTotalDic[d], delete this.numLoadedDic[d], delete this.itemListDic[d], delete this.groupErrorDic[d], a ? c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_LOAD_ERROR, d) : c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, d))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        b.prototype.removeGroupName = function(a) {
            for (var d in this.priorityQueue) {
                for (var b = this.priorityQueue[d], c = b.length, e = 0, f = !1, c = b.length, h = 0; h < c; h++) {
                    if (b[h] == a) {
                        b.splice(e, 1);
                        f = !0;
                        break
                    }
                    e++
                }
                if (f) {
                    0 == b.length && delete this.priorityQueue[d];
                    break
                }
            }
        };
        return b
    }(egret.EventDispatcher);
    c.ResourceLoader = e;
    e.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this.resourceConfig = c.configInstance
        }
        __extends(b, e);
        b.prototype.addSubkey = function(a, d) {
            this.resourceConfig.addSubkey(a, d)
        };
        b.prototype.loadFile = function(a, d, b) {};
        b.prototype.getRes = function(a) {};
        b.prototype.destroyRes = function(a) {
            return !1
        };
        b.getStringPrefix = function(a) {
            if (!a) return "";
            var d = a.indexOf(".");
            return -1 != d ? a.substring(0, d) : ""
        };
        b.getStringTail = function(a) {
            if (!a) return "";
            var d = a.indexOf(".");
            return -1 != d ? a.substring(d + 1) : ""
        };
        return b
    }(egret.HashObject);
    c.AnalyzerBase = e;
    e.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(b, c);
        b.prototype.loadFile = function(a, d, b) {
            if (this.fileDic[a.name]) d.call(b, a);
            else {
                var c = this.getLoader();

                this.resItemDic[c.hashCode] = {
                    item: a,
                    func: d,
                    thisObject: b
                };
                c.load(new egret.URLRequest(a.url))
            }
        };
        b.prototype.getLoader = function() {
            var a = this.recycler.pop();
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        b.prototype.onLoadFinish = function(a) {
            var d = a.target,
                b = this.resItemDic[d.hashCode];
            delete this.resItemDic[d.hashCode];
            this.recycler.push(d);
            var c = b.item,
                e = b.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, d.data);
            e.call(b.thisObject, c)
        };
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            !this.fileDic[b] && d && (this.fileDic[b] = d)
        };
        b.prototype.getRes = function(a) {
            return this.fileDic[a]
        };
        b.prototype.hasRes = function(a) {
            return null != this.getRes(a)
        };
        b.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
        };
        return b
    }(c.AnalyzerBase);
    c.BinAnalyzer = e;
    e.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(b, c);
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            !this.fileDic[b] && d && (this.fileDic[b] = d, (b = a.data) && b.scale9grid && (b = b.scale9grid.split(","), d.scale9Grid = new egret.Rectangle(parseInt(b[0]), parseInt(b[1]), parseInt(b[2]), parseInt(b[3]))))
        };
        return b
    }(c.BinAnalyzer);
    c.ImageAnalyzer = e;
    e.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(b, c);
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            if (!this.fileDic[b] && d) try {
                this.fileDic[b] = JSON.parse(d)
            } catch (c) {
                egret.Logger.warning("JSON文件格式不正确: " + a.url + "\ndata:" + d)
            }
        };
        return b
    }(c.BinAnalyzer);
    c.JsonAnalyzer = e;
    e.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(b, c);
        return b
    }(c.BinAnalyzer);
    c.TextAnalyzer = e;
    e.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(b, e);
        b.prototype.getRes = function(a) {
            var d = this.fileDic[a];
            d || (d = this.textureMap[a]);
            !d && (d = c.AnalyzerBase.getStringPrefix(a), d = this.fileDic[d]) && (a = c.AnalyzerBase.getStringTail(a), d = d.getTexture(a));
            return d
        };
        b.prototype.onLoadFinish = function(a) {
            var d = a.target,
                b = this.resItemDic[d.hashCode];
            delete this.resItemDic[d.hashCode];
            this.recycler.push(d);
            var c = b.item,
                e = b.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, d.data);
            "string" == typeof d.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(c, e, b.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : e.call(b.thisObject, c)
        };
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            if (!this.fileDic[b] && d) {
                var c;
                if ("string" == typeof d) {
                    try {
                        c = JSON.parse(d)
                    } catch (e) {
                        egret.Logger.warning("JSON文件格式不正确: " + a.url)
                    }
                    c && (this.sheetMap[b] = c, a.loaded = !1, a.url = this.getRelativePath(a.url, c.file))
                } else c = this.sheetMap[b], delete this.sheetMap[b], d && (c = this.parseSpriteSheet(d, c, a.data && a.data.subkeys ? "" : b), this.fileDic[b] = c)
            }
        };
        b.prototype.getRelativePath = function(a, d) {
            a = a.split("\\").join("/");
            var b = a.lastIndexOf("/");
            return a = -1 != b ? a.substring(0, b + 1) + d : d
        };
        b.prototype.parseSpriteSheet = function(a, d, b) {
            d = d.frames;
            if (!d) return null;
            var c = new egret.SpriteSheet(a),
                e = this.textureMap,
                f;
            for (f in d) {
                var h = d[f];
                a = c.createTexture(f, h.x, h.y, h.w, h.h, h.offX, h.offY, h.sourceW, h.sourceH);
                h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
                null == e[f] && (e[f] = a, b && this.addSubkey(f, b))
            }
            return c
        };
        return b
    }(c.BinAnalyzer);
    c.SheetAnalyzer = e;
    e.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this)
        }
        __extends(b, c);
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            if (!this.fileDic[b] && d) {
                var c;
                "string" == typeof d ? (c = d, this.sheetMap[b] = c, a.loaded = !1, a.url = this.getTexturePath(a.url, c)) : (c = this.sheetMap[b], delete this.sheetMap[b], d && (c = new egret.BitmapTextSpriteSheet(d, c), this.fileDic[b] = c))
            }
        };
        b.prototype.getTexturePath = function(a, d) {
            var b = "",
                c = d.split("\n")[2],
                e = c.indexOf('file="'); - 1 != e && (c = c.substring(e + 6), e = c.indexOf('"'), b = c.substring(0, e));
            a = a.split("\\").join("/");
            e = a.lastIndexOf("/");
            return a = -1 != e ? a.substring(0, e + 1) + b : b
        };
        return b
    }(c.SheetAnalyzer);
    c.FontAnalyzer = e;
    e.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(b, c);
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            !this.fileDic[b] && d && (this.fileDic[b] = d, (b = a.data) && b.soundType ? d.preload(b.soundType) : d.preload(egret.Sound.EFFECT))
        };
        return b
    }(c.BinAnalyzer);
    c.SoundAnalyzer = e;
    e.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(c) {
        function b() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(b, c);
        b.prototype.analyzeData = function(a, d) {
            var b = a.name;
            if (!this.fileDic[b] && d) try {
                var c = egret.XML.parse(d);
                this.fileDic[b] = c
            } catch (e) {}
        };
        return b
    }(c.BinAnalyzer);
    c.XMLAnalyzer = e;
    e.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    c.loadConfig = function(b, a, d) {
        void 0 === a && (a = "");
        void 0 === d && (d = "json");
        f.loadConfig(b, a, d)
    };
    c.loadGroup = function(b, a) {
        void 0 === a && (a = 0);
        f.loadGroup(b, a)
    };
    c.isGroupLoaded = function(b) {
        return f.isGroupLoaded(b)
    };
    c.getGroupByName = function(b) {
        return f.getGroupByName(b)
    };
    c.createGroup = function(b, a, d) {
        void 0 === d && (d = !1);
        return f.createGroup(b, a, d)
    };
    c.hasRes = function(b) {
        return f.hasRes(b)
    };
    c.getRes = function(b) {
        return f.getRes(b)
    };
    c.getResAsync = function(b, a, d) {
        f.getResAsync(b, a, d)
    };
    c.getResByUrl = function(b, a, d, c) {
        void 0 === c && (c = "");
        f.getResByUrl(b, a, d, c)
    };
    c.destroyRes = function(b) {
        return f.destroyRes(b)
    };
    c.setMaxLoadingThread = function(b) {
        f.setMaxLoadingThread(b)
    };
    c.addEventListener = function(b, a, d, c, e) {
        void 0 === c && (c = !1);
        void 0 === e && (e = 0);
        f.addEventListener(b, a, d, c, e)
    };
    c.removeEventListener = function(b, a, d, c) {
        void 0 === c && (c = !1);
        f.removeEventListener(b, a, d, c)
    };
    var e = function(b) {
        function a() {
            b.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(a, b);
        a.prototype.getAnalyzerByType = function(d) {
            var a = this.analyzerDic[d];
            a || (a = this.analyzerDic[d] = egret.Injector.getInstance(c.AnalyzerBase, d));
            return a
        };
        a.prototype.init = function() {
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(c.AnalyzerBase, c.BinAnalyzer, c.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(c.AnalyzerBase, c.ImageAnalyzer, c.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(c.AnalyzerBase, c.TextAnalyzer, c.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(c.AnalyzerBase, c.JsonAnalyzer, c.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(c.AnalyzerBase, c.SheetAnalyzer, c.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(c.AnalyzerBase, c.FontAnalyzer, c.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(c.AnalyzerBase, c.SoundAnalyzer, c.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(c.AnalyzerBase, c.ResourceItem.TYPE_XML) || egret.Injector.mapClass(c.AnalyzerBase, c.XMLAnalyzer, c.ResourceItem.TYPE_XML);
            this.resConfig = new c.ResourceConfig;
            this.resLoader = new c.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(c.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
            this.resLoader.addEventListener(c.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        };
        a.prototype.loadConfig = function(d, a, b) {
            void 0 === b && (b = "json");
            this.configItemList.push({
                url: d,
                resourceRoot: a,
                type: b
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        a.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var d = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = d;
            for (var b = d.length, e = [], f = 0; f < b; f++) {
                var g = d[f],
                    g = new c.ResourceItem(g.url, g.url, g.type);
                e.push(g)
            }
            this.resLoader.loadGroup(e, a.GROUP_CONFIG, Number.MAX_VALUE)
        };
        a.prototype.isGroupLoaded = function(d) {
            return -1 != this.loadedGroups.indexOf(d)
        };
        a.prototype.getGroupByName = function(d) {
            return this.resConfig.getGroupByName(d)
        };
        a.prototype.loadGroup = function(d, a) {
            void 0 === a && (a = 0);
            if (-1 != this.loadedGroups.indexOf(d)) c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.GROUP_COMPLETE, d);
            else if (!this.resLoader.isGroupInLoading(d))
                if (this.configComplete) {
                    var b = this.resConfig.getGroupByName(d);
                    this.resLoader.loadGroup(b, d, a)
                } else this.groupNameList.push({
                    name: d,
                    priority: a
                })
        };
        a.prototype.createGroup = function(d, a, b) {
            void 0 === b && (b = !1);
            if (b) {
                var c = this.loadedGroups.indexOf(d); - 1 != c && this.loadedGroups.splice(c, 1)
            }
            return this.resConfig.createGroup(d, a, b)
        };
        a.prototype.onGroupComp = function(d) {
            if (d.groupName == a.GROUP_CONFIG) {
                d = this.loadingConfigList.length;
                for (var b = 0; b < d; b++) {
                    var e = this.loadingConfigList[b],
                        f = this.getAnalyzerByType(e.type),
                        g = f.getRes(e.url);
                    f.destroyRes(e.url);
                    this.resConfig.parseConfig(g, e.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_COMPLETE);
                e = this.groupNameList;
                d = e.length;
                for (b = 0; b < d; b++) f = e[b], this.loadGroup(f.name, f.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(d.groupName), this.dispatchEvent(d)
        };
        a.prototype.onGroupError = function(d) {
            d.groupName == a.GROUP_CONFIG ? (this.loadingConfigList = null, c.ResourceEvent.dispatchResourceEvent(this, c.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(d)
        };
        a.prototype.hasRes = function(d) {
            var a = this.resConfig.getType(d);
            return "" == a && (d = c.AnalyzerBase.getStringPrefix(d), a = this.resConfig.getType(d), "" == a) ? !1 : !0
        };
        a.prototype.getRes = function(d) {
            var a = this.resConfig.getType(d);
            return "" == a && (a = c.AnalyzerBase.getStringPrefix(d), a = this.resConfig.getType(a), "" == a) ? null : this.getAnalyzerByType(a).getRes(d)
        };
        a.prototype.getResAsync = function(d, a, b) {
            var e = this.resConfig.getType(d),
                f = this.resConfig.getName(d);
            if ("" == e && (f = c.AnalyzerBase.getStringPrefix(d), e = this.resConfig.getType(f), "" == e)) {
                a.call(b, null);
                return
            }(e = this.getAnalyzerByType(e).getRes(d)) ? a.call(b, e) : (d = {
                key: d,
                compFunc: a,
                thisObject: b
            }, this.asyncDic[f] ? this.asyncDic[f].push(d) : (this.asyncDic[f] = [d], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
        };
        a.prototype.getResByUrl = function(d, a, b, e) {
            void 0 === e && (e = "");
            if (d) {
                e || (e = this.getTypeByUrl(d));
                var f = this.getAnalyzerByType(e).getRes(d);
                f ? a.call(b, f) : (a = {
                    key: d,
                    compFunc: a,
                    thisObject: b
                }, this.asyncDic[d] ? this.asyncDic[d].push(a) : (this.asyncDic[d] = [a], d = new c.ResourceItem(d, d, e), this.resLoader.loadItem(d)))
            } else a.call(b, null)
        };
        a.prototype.getTypeByUrl = function(d) {
            (d = d.substr(d.lastIndexOf(".") + 1)) && (d = d.toLowerCase());
            switch (d) {
                case c.ResourceItem.TYPE_XML:
                case c.ResourceItem.TYPE_JSON:
                case c.ResourceItem.TYPE_SHEET:
                    break;
                case "png":
                case "jpg":
                case "gif":
                    d = c.ResourceItem.TYPE_IMAGE;
                    break;
                case "fnt":
                    d = c.ResourceItem.TYPE_FONT;
                    break;
                case "txt":
                    d = c.ResourceItem.TYPE_TEXT;
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
                    d = c.ResourceItem.TYPE_SOUND;
                    break;
                default:
                    d = c.ResourceItem.TYPE_BIN
            }
            return d
        };
        a.prototype.onResourceItemComp = function(d) {
            var a = this.asyncDic[d.name];
            delete this.asyncDic[d.name];
            d = this.getAnalyzerByType(d.type);
            for (var b = a.length, c = 0; c < b; c++) {
                var e = a[c],
                    f = d.getRes(e.key);
                e.compFunc.call(e.thisObject, f, e.key)
            }
        };
        a.prototype.destroyRes = function(d) {
            var a = this.resConfig.getRawGroupByName(d);
            if (a) {
                var b = this.loadedGroups.indexOf(d); - 1 != b && this.loadedGroups.splice(b, 1);
                d = a.length;
                for (var c = 0; c < d; c++) {
                    b = a[c];
                    b.loaded = !1;
                    var e = this.getAnalyzerByType(b.type);
                    e.destroyRes(b.name)
                }
                return !0
            }
            a = this.resConfig.getType(d);
            if ("" == a) return !1;
            b = this.resConfig.getRawResourceItem(d);
            b.loaded = !1;
            e = this.getAnalyzerByType(a);
            return e.destroyRes(d)
        };
        a.prototype.setMaxLoadingThread = function(d) {
            1 > d && (d = 1);
            this.resLoader.thread = d
        };
        a.GROUP_CONFIG = "RES__CONFIG";
        return a
    }(egret.EventDispatcher);
    e.prototype.__class__ = "RES.Resource";
    var f = new e
})(RES || (RES = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.targetLevel = Number.MAX_VALUE;
                this.updateCompleteQueue = new e.DepthQueue;
                this.invalidateClientPropertiesFlag = this.invalidatePropertiesFlag = !1;
                this.invalidatePropertiesQueue = new e.DepthQueue;
                this.invalidateClientSizeFlag = this.invalidateSizeFlag = !1;
                this.invalidateSizeQueue = new e.DepthQueue;
                this.invalidateDisplayListFlag = !1;
                this.invalidateDisplayListQueue = new e.DepthQueue;
                this.listenersAttached = !1
            }
            __extends(a, b);
            a.prototype.invalidateProperties = function(d) {
                this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners());
                this.targetLevel <= d.nestLevel && (this.invalidateClientPropertiesFlag = !0);
                this.invalidatePropertiesQueue.insert(d)
            };
            a.prototype.validateProperties = function() {
                for (var d = this.invalidatePropertiesQueue.shift(); d;) d.parent && (d.validateProperties(), d.updateCompletePendingFlag || (this.updateCompleteQueue.insert(d), d.updateCompletePendingFlag = !0)), d = this.invalidatePropertiesQueue.shift();
                this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1)
            };
            a.prototype.invalidateSize = function(d) {
                this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners());
                this.targetLevel <= d.nestLevel && (this.invalidateClientSizeFlag = !0);
                this.invalidateSizeQueue.insert(d)
            };
            a.prototype.validateSize = function() {
                for (var d = this.invalidateSizeQueue.pop(); d;) d.parent && (d.validateSize(), d.updateCompletePendingFlag || (this.updateCompleteQueue.insert(d), d.updateCompletePendingFlag = !0)), d = this.invalidateSizeQueue.pop();
                this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1)
            };
            a.prototype.invalidateDisplayList = function(d) {
                this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners());
                this.invalidateDisplayListQueue.insert(d)
            };
            a.prototype.validateDisplayList = function() {
                for (var d = this.invalidateDisplayListQueue.shift(); d;) d.parent && (d.validateDisplayList(), d.updateCompletePendingFlag || (this.updateCompleteQueue.insert(d), d.updateCompletePendingFlag = !0)), d = this.invalidateDisplayListQueue.shift();
                this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
            };
            a.prototype.attachListeners = function() {
                e.UIGlobals.stage.addEventListener(c.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
                e.UIGlobals.stage.addEventListener(c.Event.RENDER, this.doPhasedInstantiationCallBack, this);
                e.UIGlobals.stage.invalidate();
                this.listenersAttached = !0
            };
            a.prototype.doPhasedInstantiationCallBack = function(d) {
                e.UIGlobals.stage.removeEventListener(c.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
                e.UIGlobals.stage.removeEventListener(c.Event.RENDER, this.doPhasedInstantiationCallBack, this);
                this.doPhasedInstantiation()
            };
            a.prototype.doPhasedInstantiation = function() {
                this.invalidatePropertiesFlag && this.validateProperties();
                this.invalidateSizeFlag && this.validateSize();
                this.invalidateDisplayListFlag && this.validateDisplayList();
                if (this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag) this.attachListeners();
                else {
                    this.listenersAttached = !1;
                    for (var d = this.updateCompleteQueue.pop(); d;) d.initialized || (d.initialized = !0), d.hasEventListener(e.UIEvent.UPDATE_COMPLETE) && e.UIEvent.dispatchUIEvent(d, e.UIEvent.UPDATE_COMPLETE), d.updateCompletePendingFlag = !1, d = this.updateCompleteQueue.pop();
                    e.UIEvent.dispatchUIEvent(this, e.UIEvent.UPDATE_COMPLETE)
                }
            };
            a.prototype.validateNow = function() {
                for (var d = 0; this.listenersAttached && 100 > d++;) this.doPhasedInstantiationCallBack()
            };
            a.prototype.validateClient = function(d, a) {
                void 0 === a && (a = !1);
                var b, c = !1,
                    f = this.targetLevel;
                this.targetLevel == Number.MAX_VALUE && (this.targetLevel = d.nestLevel);
                for (; !c;) {
                    c = !0;
                    for (b = this.invalidatePropertiesQueue.removeSmallestChild(d); b;) b.parent && (b.validateProperties(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0)), b = this.invalidatePropertiesQueue.removeSmallestChild(d);
                    this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1);
                    this.invalidateClientPropertiesFlag = !1;
                    for (b = this.invalidateSizeQueue.removeLargestChild(d); b;) {
                        b.parent && (b.validateSize(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0));
                        if (this.invalidateClientPropertiesFlag && (b = this.invalidatePropertiesQueue.removeSmallestChild(d))) {
                            this.invalidatePropertiesQueue.insert(b);
                            c = !1;
                            break
                        }
                        b = this.invalidateSizeQueue.removeLargestChild(d)
                    }
                    this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1);
                    this.invalidateClientSizeFlag = this.invalidateClientPropertiesFlag = !1;
                    if (!a) {
                        for (b = this.invalidateDisplayListQueue.removeSmallestChild(d); b;) {
                            b.parent && (b.validateDisplayList(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0));
                            if (this.invalidateClientPropertiesFlag && (b = this.invalidatePropertiesQueue.removeSmallestChild(d))) {
                                this.invalidatePropertiesQueue.insert(b);
                                c = !1;
                                break
                            }
                            if (this.invalidateClientSizeFlag && (b = this.invalidateSizeQueue.removeLargestChild(d))) {
                                this.invalidateSizeQueue.insert(b);
                                c = !1;
                                break
                            }
                            b = this.invalidateDisplayListQueue.removeSmallestChild(d)
                        }
                        this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
                    }
                }
                if (f == Number.MAX_VALUE && (this.targetLevel = Number.MAX_VALUE, !a))
                    for (b = this.updateCompleteQueue.removeLargestChild(d); b;) b.initialized || (b.initialized = !0), b.hasEventListener(e.UIEvent.UPDATE_COMPLETE) && e.UIEvent.dispatchUIEvent(b, e.UIEvent.UPDATE_COMPLETE), b.updateCompletePendingFlag = !1, b = this.updateCompleteQueue.removeLargestChild(d)
            };
            return a
        }(c.EventDispatcher);
        e.LayoutManager = f;
        f.prototype.__class__ = "egret.gui.LayoutManager"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function a() {
                this.depthBins = [];
                this.minDepth = 0;
                this.maxDepth = -1
            }
            a.prototype.insert = function(d) {
                var a = d.nestLevel,
                    c = d.hashCode;
                this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = a : (a < this.minDepth && (this.minDepth = a), a > this.maxDepth && (this.maxDepth = a));
                var e = this.depthBins[a];
                e ? null == e.items[c] && (e.items[c] = d, e.length++) : (e = new b, this.depthBins[a] = e, e.items[c] = d, e.length++)
            };
            a.prototype.pop = function() {
                var d = null;
                if (this.minDepth <= this.maxDepth) {
                    for (var a = this.depthBins[this.maxDepth]; !a || 0 == a.length;) {
                        this.maxDepth--;
                        if (this.maxDepth < this.minDepth) return null;
                        a = this.depthBins[this.maxDepth]
                    }
                    var b = a.items,
                        c;
                    for (c in b) {
                        d = b[c];
                        this.remove(d, this.maxDepth);
                        break
                    }
                    for (; !a || 0 == a.length;) {
                        this.maxDepth--;
                        if (this.maxDepth < this.minDepth) break;
                        a = this.depthBins[this.maxDepth]
                    }
                }
                return d
            };
            a.prototype.shift = function() {
                var d = null;
                if (this.minDepth <= this.maxDepth) {
                    for (var a = this.depthBins[this.minDepth]; !a || 0 == a.length;) {
                        this.minDepth++;
                        if (this.minDepth > this.maxDepth) return null;
                        a = this.depthBins[this.minDepth]
                    }
                    var b = a.items,
                        c;
                    for (c in b) {
                        d = b[c];
                        this.remove(d, this.minDepth);
                        break
                    }
                    for (; !a || 0 == a.length;) {
                        this.minDepth++;
                        if (this.minDepth > this.maxDepth) break;
                        a = this.depthBins[this.minDepth]
                    }
                }
                return d
            };
            a.prototype.removeLargestChild = function(d) {
                for (var a = this.maxDepth, b = d.nestLevel, e = d.hashCode; b <= a;) {
                    var f = this.depthBins[a];
                    if (f && 0 < f.length) {
                        if (a == d.nestLevel) {
                            if (f.items[e]) return this.remove(d, a), d
                        } else {
                            var f = f.items,
                                h;
                            for (h in f) {
                                var k = f[h];
                                if (k instanceof c.DisplayObject && d instanceof c.DisplayObjectContainer && d.contains(k)) return this.remove(k, a), k
                            }
                        }
                        a--
                    } else if (a == this.maxDepth && this.maxDepth--, a--, a < b) break
                }
                return null
            };
            a.prototype.removeSmallestChild = function(d) {
                for (var a = d.nestLevel, b = d.hashCode; a <= this.maxDepth;) {
                    var e = this.depthBins[a];
                    if (e && 0 < e.length) {
                        if (a == d.nestLevel) {
                            if (e.items[b]) return this.remove(d, a), d
                        } else {
                            var e = e.items,
                                f;
                            for (f in e) {
                                var h = e[f];
                                if (h instanceof c.DisplayObject && d instanceof c.DisplayObjectContainer && d.contains(h)) return this.remove(h, a), h
                            }
                        }
                        a++
                    } else if (a == this.minDepth && this.minDepth++, a++, a > this.maxDepth) break
                }
                return null
            };
            a.prototype.remove = function(d, a) {
                void 0 === a && (a = -1);
                var b = d.hashCode,
                    c = this.depthBins[0 <= a ? a : d.nestLevel];
                return c && null != c.items[b] ? (delete c.items[b], c.length--, d) : null
            };
            a.prototype.removeAll = function() {
                this.minDepth = this.depthBins.length = 0;
                this.maxDepth = -1
            };
            a.prototype.isEmpty = function() {
                return this.minDepth > this.maxDepth
            };
            return a
        }();
        e.DepthQueue = f;
        f.prototype.__class__ = "egret.gui.DepthQueue";
        var b = function() {
            return function() {
                this.length = 0;
                this.items = []
            }
        }();
        e.DepthBin = b;
        b.prototype.__class__ = "egret.gui.DepthBin"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b() {}
            Object.defineProperty(b, "stage", {
                get: function() {
                    return b._stage
                },
                enumerable: !0,
                configurable: !0
            });
            b._initlize = function(a) {
                b.initlized || (b._stage = a, b._layoutManager = new c.LayoutManager, b.initlized = !0)
            };
            Object.defineProperty(b, "uiStage", {
                get: function() {
                    return b._uiStage
                },
                enumerable: !0,
                configurable: !0
            });
            b.initlized = !1;
            return b
        }();
        c.UIGlobals = f;
        f.prototype.__class__ = "egret.gui.UIGlobals"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.initializeCalled = this._initialized = this._updateCompletePendingFlag = !1;
                this._nestLevel = 0;
                this._hasOwnStyleChain = !1;
                this._styleProtoChain = null;
                this._hasNoStyleChild = !1;
                this._enabled = !0;
                this._minWidth = this._height = this._width = 0;
                this._maxWidth = 1E4;
                this._minHeight = 0;
                this._maxHeight = 1E4;
                this._measuredHeight = this._measuredWidth = 0;
                this._validateNowFlag = this._invalidateDisplayListFlag = this._invalidateSizeFlag = this._invalidatePropertiesFlag = !1;
                this._includeInLayout = !0;
                this._layoutHeightExplicitlySet = this._layoutWidthExplicitlySet = !1;
                this.touchEnabled = !0;
                this.addEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
                this.addEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this);
                void 0 === a.prototypeCanSet && (a.prototypeCanSet = void 0 !== {}.__proto__)
            }
            __extends(a, b);
            a.prototype.onAddedToStage = function(d) {
                this.removeEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
                this._initialize();
                e.UIGlobals._initlize(this.stage);
                0 < this._nestLevel && this.checkInvalidateFlag()
            };
            Object.defineProperty(a.prototype, "id", {
                get: function() {
                    return this._id
                },
                set: function(d) {
                    this._id = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "isPopUp", {
                get: function() {
                    return this._isPopUp
                },
                set: function(d) {
                    this._isPopUp = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "owner", {
                get: function() {
                    return this._owner ? this._owner : this.parent
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.ownerChanged = function(d) {
                this._owner = d
            };
            Object.defineProperty(a.prototype, "updateCompletePendingFlag", {
                get: function() {
                    return this._updateCompletePendingFlag
                },
                set: function(d) {
                    this._updateCompletePendingFlag = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "initialized", {
                get: function() {
                    return this._initialized
                },
                set: function(d) {
                    this._initialized != d && (this._initialized = d) && (this.childrenCreated(), e.UIEvent.dispatchUIEvent(this, e.UIEvent.CREATION_COMPLETE))
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._initialize = function() {
                this.initializeCalled || (e.UIGlobals.stage && this.removeEventListener(c.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this.initializeCalled = !0, e.UIEvent.dispatchUIEvent(this, e.UIEvent.INITIALIZE), this.createChildren(), this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
            };
            a.prototype.createChildren = function() {};
            a.prototype.childrenCreated = function() {};
            Object.defineProperty(a.prototype, "nestLevel", {
                get: function() {
                    return this._nestLevel
                },
                set: function(d) {
                    this._nestLevel != d && (this._nestLevel = d, 0 == this._nestLevel ? this.addEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this) : this.removeEventListener(c.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this), this._updateChildrenNestLevel())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._updateChildrenNestLevel = function() {
                for (var d = this.numChildren - 1; 0 <= d; d--) {
                    var a = this.getChildAt(d);
                    a && "nestLevel" in a && (a.nestLevel = this._nestLevel + 1)
                }
            };
            a.prototype.getStyle = function(d) {
                var a = this._styleProtoChain;
                return a ? a[d] : void 0
            };
            a.prototype.setStyle = function(d, a) {
                var b = this._styleProtoChain;
                this._hasOwnStyleChain || (b = this._createOwnStyleProtoChain(b));
                b[d] = a;
                this.styleChanged(d);
                this.notifyStyleChangeInChildren(d)
            };
            a.prototype.styleChanged = function(d) {};
            a.prototype.notifyStyleChangeInChildren = function(d) {
                if (!this._hasNoStyleChild)
                    for (var a = this.numChildren - 1; 0 <= a; a--) {
                        var b = this.getChildAt(a);
                        b && "styleChanged" in b && (b.styleChanged(d), b.notifyStyleChangeInChildren(d))
                    }
            };
            a.prototype._createOwnStyleProtoChain = function(d) {
                this._hasOwnStyleChain = !0;
                a.prototypeCanSet ? (this._styleProtoChain = {}, this._styleProtoChain.__proto__ = d ? d : a.emptyStyleChain) : this._styleProtoChain = this.createProtoChain(d);
                d = this._styleProtoChain;
                if (!this._hasNoStyleChild)
                    for (var b = this.numChildren - 1; 0 <= b; b--) {
                        var c = this.getChildAt(b);
                        c && "regenerateStyleCache" in c && c.regenerateStyleCache(d)
                    }
                return d
            };
            a.prototype.createProtoChain = function(d) {
                function a() {}
                a.prototype = d;
                d = new a;
                a.prototype = null;
                return d
            };
            a.prototype.clearStyle = function(d) {
                this._hasOwnStyleChain && (delete this._styleProtoChain[d], this.styleChanged(d), this.notifyStyleChangeInChildren(d))
            };
            a.prototype.regenerateStyleCache = function(d) {
                if (!a.prototypeCanSet) this.regenerateStyleCacheForIE(d);
                else if (this._hasOwnStyleChain) this._styleProtoChain.__proto__ = d ? d : a.emptyStyleChain;
                else if (this._styleProtoChain != d) {
                    this._styleProtoChain = d;
                    for (var b = this.numChildren - 1; 0 <= b; b--) {
                        var c = this.getChildAt(b);
                        c && "regenerateStyleCache" in c && c.regenerateStyleCache(d)
                    }
                }
            };
            a.prototype.regenerateStyleCacheForIE = function(d) {
                if (this._hasOwnStyleChain) {
                    var a = this._styleProtoChain;
                    d = this.createProtoChain(d);
                    for (var b in a) a.hasOwnProperty(b) && (d[b] = a[b])
                }
                this._styleProtoChain = d;
                if (!this._hasNoStyleChild)
                    for (a = this.numChildren - 1; 0 <= a; a--)(b = this.getChildAt(a)) && "regenerateStyleCacheForIE" in b && b.regenerateStyleCacheForIE(d)
            };
            a.prototype._addToDisplayList = function(d, a) {
                void 0 === a && (a = !0);
                var b = this.numChildren;
                d.parent == this && b--;
                this._addingChild(d);
                this._doAddChild(d, b, a);
                this._childAdded(d);
                return d
            };
            a.prototype._addToDisplayListAt = function(d, a, b) {
                void 0 === b && (b = !0);
                this._addingChild(d);
                this._doAddChild(d, a, b);
                this._childAdded(d);
                return d
            };
            a.prototype._removeFromDisplayList = function(d, a) {
                void 0 === a && (a = !0);
                var b = this._children.indexOf(d);
                if (0 <= b) return this._doRemoveChild(b, a), this._childRemoved(d), d;
                c.Logger.fatal("child未被addChild到该parent");
                return null
            };
            a.prototype._removeFromDisplayListAt = function(d, a) {
                void 0 === a && (a = !0);
                if (0 <= d && d < this._children.length) {
                    var b = this._doRemoveChild(d, a);
                    this._childRemoved(b);
                    return b
                }
                c.Logger.fatal("提供的索引超出范围");
                return null
            };
            a.prototype.addChild = function(d) {
                this._addingChild(d);
                b.prototype.addChild.call(this, d);
                this._childAdded(d);
                return d
            };
            a.prototype.addChildAt = function(d, a) {
                this._addingChild(d);
                b.prototype.addChildAt.call(this, d, a);
                this._childAdded(d);
                return d
            };
            a.prototype._addingChild = function(d) {
                if (d && ("nestLevel" in d && (d.nestLevel = this._nestLevel + 1), "styleChanged" in d)) {
                    var a = this._styleProtoChain;
                    if (a || d._styleProtoChain) d.regenerateStyleCache(a), d.styleChanged(null), d.notifyStyleChangeInChildren(null)
                }
            };
            a.prototype._childAdded = function(d) {
                d instanceof a && (d._initialize(), d.checkInvalidateFlag())
            };
            a.prototype.removeChild = function(d) {
                b.prototype.removeChild.call(this, d);
                this._childRemoved(d);
                return d
            };
            a.prototype.removeChildAt = function(d) {
                d = b.prototype.removeChildAt.call(this, d);
                this._childRemoved(d);
                return d
            };
            a.prototype._childRemoved = function(d) {
                d && "nestLevel" in d && (d.nestLevel = 0)
            };
            a.prototype.checkInvalidateFlag = function(d) {
                e.UIGlobals._layoutManager && (this._invalidatePropertiesFlag && e.UIGlobals._layoutManager.invalidateProperties(this), this._invalidateSizeFlag && e.UIGlobals._layoutManager.invalidateSize(this), this._invalidateDisplayListFlag && e.UIGlobals._layoutManager.invalidateDisplayList(this), this._validateNowFlag && (e.UIGlobals._layoutManager.validateClient(this), this._validateNowFlag = !1))
            };
            Object.defineProperty(a.prototype, "enabled", {
                get: function() {
                    return this._enabled
                },
                set: function(d) {
                    this._enabled = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(d) {
                    this._setWidth(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setWidth = function(d) {
                if (this._width != d || this._explicitWidth != d) b.prototype._setWidth.call(this, d), isNaN(d) ? this.invalidateSize() : this._width = d, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()
            };
            Object.defineProperty(a.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(d) {
                    this._setHeight(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setHeight = function(d) {
                if (this._height != d || this._explicitHeight != d) b.prototype._setHeight.call(this, d), isNaN(d) ? this.invalidateSize() : this._height = d, this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()
            };
            Object.defineProperty(a.prototype, "scaleX", {
                get: function() {
                    return this._scaleX
                },
                set: function(d) {
                    this._setScaleX(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setScaleX = function(d) {
                this._scaleX != d && (this._scaleX = d, this.invalidateParentSizeAndDisplayList())
            };
            Object.defineProperty(a.prototype, "scaleY", {
                get: function() {
                    return this._scaleY
                },
                set: function(d) {
                    this._setScaleY(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setScaleY = function(d) {
                this._scaleY != d && (this._scaleY = d, this.invalidateParentSizeAndDisplayList())
            };
            Object.defineProperty(a.prototype, "minWidth", {
                get: function() {
                    return this._minWidth
                },
                set: function(d) {
                    this._minWidth != d && (this._minWidth = d, this.invalidateSize())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "maxWidth", {
                get: function() {
                    return this._maxWidth
                },
                set: function(d) {
                    this._maxWidth != d && (this._maxWidth = d, this.invalidateSize())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._getMaxWidth = function() {
                return this._maxWidth
            };
            Object.defineProperty(a.prototype, "minHeight", {
                get: function() {
                    return this._minHeight
                },
                set: function(d) {
                    this._minHeight != d && (this._minHeight = d, this.invalidateSize())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "maxHeight", {
                get: function() {
                    return this._maxHeight
                },
                set: function(d) {
                    this._maxHeight != d && (this._maxHeight = d, this.invalidateSize())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "measuredWidth", {
                get: function() {
                    return this._measuredWidth
                },
                set: function(d) {
                    this._measuredWidth = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "measuredHeight", {
                get: function() {
                    return this._measuredHeight
                },
                set: function(d) {
                    this._measuredHeight = d
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setActualSize = function(d, a) {
                var b = !1;
                this._width != d && (this._width = d, b = !0);
                this._height != a && (this._height = a, b = !0);
                b && (this.invalidateDisplayList(), this.dispatchResizeEvent())
            };
            Object.defineProperty(a.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(d) {
                    this._x != d && (this._setX(d), this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof a && this.parent._childXYChanged())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(d) {
                    this._y != d && (this._setY(d), this.invalidateProperties(), this._includeInLayout && this.parent && this.parent instanceof a && this.parent._childXYChanged())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.invalidateProperties = function() {
                this._invalidatePropertiesFlag || (this._invalidatePropertiesFlag = !0, this.parent && e.UIGlobals._layoutManager && e.UIGlobals._layoutManager.invalidateProperties(this))
            };
            a.prototype.validateProperties = function() {
                this._invalidatePropertiesFlag && (this.commitProperties(), this._invalidatePropertiesFlag = !1)
            };
            a.prototype.invalidateSize = function() {
                this._invalidateSizeFlag || (this._invalidateSizeFlag = !0, this.parent && e.UIGlobals._layoutManager && e.UIGlobals._layoutManager.invalidateSize(this))
            };
            a.prototype.validateSize = function(d) {
                void 0 === d && (d = !1);
                if (d)
                    for (d = 0; d < this.numChildren; d++) {
                        var a = this.getChildAt(d);
                        "validateSize" in a && a.validateSize(!0)
                    }
                this._invalidateSizeFlag && (this.measureSizes() && (this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()), this._invalidateSizeFlag = !1)
            };
            a.prototype.measureSizes = function() {
                var d = !1;
                if (!this._invalidateSizeFlag) return d;
                this.canSkipMeasurement() || (this.measure(), this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth), this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth), this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight), this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight));
                if (isNaN(this._oldPreferWidth)) this._oldPreferWidth = this.preferredWidth, this._oldPreferHeight = this.preferredHeight, d = !0;
                else {
                    if (this.preferredWidth != this._oldPreferWidth || this.preferredHeight != this._oldPreferHeight) d = !0;
                    this._oldPreferWidth = this.preferredWidth;
                    this._oldPreferHeight = this.preferredHeight
                }
                return d
            };
            a.prototype.invalidateDisplayList = function() {
                this._invalidateDisplayListFlag || (this._invalidateDisplayListFlag = !0, this.parent && e.UIGlobals._layoutManager && e.UIGlobals._layoutManager.invalidateDisplayList(this), this._setSizeDirty())
            };
            a.prototype.validateDisplayList = function() {
                if (this._invalidateDisplayListFlag) {
                    var d = 0,
                        a = 0,
                        d = this._layoutWidthExplicitlySet ? this._width : isNaN(this.explicitWidth) ? this.measuredWidth : this._explicitWidth,
                        a = this._layoutHeightExplicitlySet ? this._height : isNaN(this.explicitHeight) ? this.measuredHeight : this._explicitHeight;
                    isNaN(d) && (d = 0);
                    isNaN(a) && (a = 0);
                    this.setActualSize(d, a);
                    this.updateDisplayList(d, a);
                    this._invalidateDisplayListFlag = !1
                }
            };
            a.prototype.validateNow = function(d) {
                void 0 === d && (d = !1);
                this._validateNowFlag || null == e.UIGlobals._layoutManager ? this._validateNowFlag = !0 : e.UIGlobals._layoutManager.validateClient(this, d)
            };
            a.prototype.invalidateParentSizeAndDisplayList = function() {
                if (this.parent && this._includeInLayout && "invalidateSize" in this.parent) {
                    var d = this.parent;
                    d.invalidateSize();
                    d.invalidateDisplayList()
                }
            };
            a.prototype.updateDisplayList = function(d, a) {};
            a.prototype.canSkipMeasurement = function() {
                return !isNaN(this._explicitWidth) && !isNaN(this._explicitHeight)
            };
            a.prototype.commitProperties = function() {
                this.oldWidth == this._width && this.oldHeight == this._height || this.dispatchResizeEvent();
                this.oldX == this.x && this.oldY == this.y || this.dispatchMoveEvent()
            };
            a.prototype.measure = function() {
                this._measuredWidth = this._measuredHeight = 0
            };
            a.prototype.dispatchMoveEvent = function() {
                this.hasEventListener(e.MoveEvent.MOVE) && e.MoveEvent.dispatchMoveEvent(this, this.oldX, this.oldY);
                this.oldX = this.x;
                this.oldY = this.y
            };
            a.prototype._childXYChanged = function() {};
            a.prototype.dispatchResizeEvent = function() {
                this.hasEventListener(e.ResizeEvent.RESIZE) && e.ResizeEvent.dispatchResizeEvent(this, this.oldWidth, this.oldHeight);
                this.oldWidth = this._width;
                this.oldHeight = this._height
            };
            Object.defineProperty(a.prototype, "includeInLayout", {
                get: function() {
                    return this._includeInLayout
                },
                set: function(d) {
                    this._includeInLayout != d && (this._includeInLayout = !0, this.invalidateParentSizeAndDisplayList(), this._includeInLayout = d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "left", {
                get: function() {
                    return this._left
                },
                set: function(d) {
                    this._left != d && (this._left = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "right", {
                get: function() {
                    return this._right
                },
                set: function(d) {
                    this._right != d && (this._right = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "top", {
                get: function() {
                    return this._top
                },
                set: function(d) {
                    this._top != d && (this._top = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "bottom", {
                get: function() {
                    return this._bottom
                },
                set: function(d) {
                    this._bottom != d && (this._bottom = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "horizontalCenter", {
                get: function() {
                    return this._horizontalCenter
                },
                set: function(d) {
                    this._horizontalCenter != d && (this._horizontalCenter = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "verticalCenter", {
                get: function() {
                    return this._verticalCenter
                },
                set: function(d) {
                    this._verticalCenter != d && (this._verticalCenter = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "percentWidth", {
                get: function() {
                    return this._percentWidth
                },
                set: function(d) {
                    this._percentWidth != d && (this._percentWidth = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "percentHeight", {
                get: function() {
                    return this._percentHeight
                },
                set: function(d) {
                    this._percentHeight != d && (this._percentHeight = d, this.invalidateParentSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setLayoutBoundsSize = function(d, a) {
                isNaN(d) ? (this._layoutWidthExplicitlySet = !1, d = this.preferredWidth) : this._layoutWidthExplicitlySet = !0;
                isNaN(a) ? (this._layoutHeightExplicitlySet = !1, a = this.preferredHeight) : this._layoutHeightExplicitlySet = !0;
                this.setActualSize(d / this._scaleX, a / this._scaleY)
            };
            a.prototype.setLayoutBoundsPosition = function(d, a) {
                0 > this._scaleX && (d += this.layoutBoundsWidth);
                0 > this._scaleY && (a += this.layoutBoundsHeight);
                var b = !1;
                this._x != d && (this._setX(d), b = !0);
                this._y != a && (this._setY(a), b = !0);
                b && this.dispatchMoveEvent()
            };
            Object.defineProperty(a.prototype, "preferredWidth", {
                get: function() {
                    var d = this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
                        a = this._scaleX;
                    0 > a && (a = -a);
                    return d * a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "preferredHeight", {
                get: function() {
                    var d = this._hasHeightSet ? this._explicitHeight : this._measuredHeight,
                        a = this._scaleY;
                    0 > a && (a = -a);
                    return d * a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "preferredX", {
                get: function() {
                    return 0 <= this._scaleX ? this._x : this._x - this.preferredWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "preferredY", {
                get: function() {
                    return 0 <= this._scaleY ? this._y : this._y - this.preferredHeight
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "layoutBoundsX", {
                get: function() {
                    return 0 <= this._scaleX ? this._x : this._x - this.layoutBoundsWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "layoutBoundsY", {
                get: function() {
                    return 0 <= this._scaleY ? this._y : this._y - this.layoutBoundsHeight
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "layoutBoundsWidth", {
                get: function() {
                    var d = 0,
                        d = this._layoutWidthExplicitlySet ? this._width : this._hasWidthSet ? this._explicitWidth : this._measuredWidth,
                        a = this._scaleX;
                    0 > a && (a = -a);
                    return d * a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "layoutBoundsHeight", {
                get: function() {
                    var d = 0,
                        d = this._layoutHeightExplicitlySet ? this._height : this._hasHeightSet ? this._explicitHeight : this._measuredHeight,
                        a = this.scaleY;
                    0 > a && (a = -a);
                    return d * a
                },
                enumerable: !0,
                configurable: !0
            });
            a.emptyStyleChain = {};
            return a
        }(c.DisplayObjectContainer);
        e.UIComponent = f;
        f.prototype.__class__ = "egret.gui.UIComponent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b() {}
            b.ABOVE = "above";
            b.BELOW = "below";
            b.CENTER = "center";
            b.TOP_LEFT = "topLeft";
            b.LEFT = "left";
            b.RIGHT = "right";
            return b
        }();
        c.PopUpPosition = f;
        f.prototype.__class__ = "egret.gui.PopUpPosition"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(d) {
                void 0 === d && (d = null);
                b.call(this);
                this.generator = d
            }
            __extends(a, b);
            a.prototype.newInstance = function() {
                return new this.generator
            };
            return a
        }(c.HashObject);
        e.ClassFactory = f;
        f.prototype.__class__ = "egret.gui.ClassFactory"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b() {}
            b.DOWN = 40;
            b.END = 35;
            b.HOME = 36;
            b.LEFT = 37;
            b.PAGE_DOWN = 34;
            b.PAGE_LEFT = 9111;
            b.PAGE_RIGHT = 9112;
            b.PAGE_UP = 33;
            b.RIGHT = 39;
            b.UP = 38;
            return b
        }();
        c.NavigationUnit = f;
        f.prototype.__class__ = "egret.gui.NavigationUnit"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.initialize = function(d) {};
            a.prototype.apply = function(d) {};
            a.prototype.remove = function(d) {};
            a.prototype.initializeFromObject = function(d) {
                for (var a in d) this[a] = d[a];
                return this
            };
            return a
        }(c.HashObject);
        e.OverrideBase = f;
        f.prototype.__class__ = "egret.gui.OverrideBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a(d, c, e, f) {
                b.call(this);
                this.propertyName = "";
                this.position = a.LAST;
                this.target = d;
                this.propertyName = c;
                this.position = e;
                this.relativeTo = f
            }
            __extends(a, b);
            a.prototype.initialize = function(d) {
                if ((d = d[this.target]) && !(d instanceof c.SkinnableComponent) && "_initialize" in d) try {
                    d._initialize()
                } catch (a) {}
            };
            a.prototype.apply = function(d) {
                var b, c;
                try {
                    c = d[this.relativeTo]
                } catch (e) {}
                var f = d[this.target];
                d = this.propertyName ? d[this.propertyName] : d;
                if (f && d) {
                    switch (this.position) {
                        case a.FIRST:
                            b = 0;
                            break;
                        case a.LAST:
                            b = -1;
                            break;
                        case a.BEFORE:
                            b = d.getElementIndex(c);
                            break;
                        case a.AFTER:
                            b = d.getElementIndex(c) + 1
                    } - 1 == b && (b = d.numElements);
                    d.addElementAt(f, b)
                }
            };
            a.prototype.remove = function(d) {
                var a = null == this.propertyName || "" == this.propertyName ? d : d[this.propertyName];
                (d = d[this.target]) && a && -1 != a.getElementIndex(d) && a.removeElement(d)
            };
            a.FIRST = "first";
            a.LAST = "last";
            a.BEFORE = "before";
            a.AFTER = "after";
            return a
        }(c.OverrideBase);
        c.AddItems = f;
        f.prototype.__class__ = "egret.gui.AddItems"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a(d, a, c) {
                b.call(this);
                this.target = d;
                this.name = a;
                this.value = c
            }
            __extends(a, b);
            a.prototype.apply = function(d) {
                d = null == this.target || "" == this.target ? d : d[this.target];
                null != d && (this.oldValue = d[this.name], this.setPropertyValue(d, this.name, this.value, this.oldValue))
            };
            a.prototype.remove = function(d) {
                d = null == this.target || "" == this.target ? d : d[this.target];
                null != d && (this.setPropertyValue(d, this.name, this.oldValue, this.oldValue), this.oldValue = null)
            };
            a.prototype.setPropertyValue = function(d, a, b, c) {
                d[a] = void 0 === b || null === b ? b : "number" == typeof c ? parseFloat(b) : "boolean" == typeof c ? this.toBoolean(b) : b
            };
            a.prototype.toBoolean = function(d) {
                return "string" == typeof d ? "true" == d.toLowerCase() : !1 != d
            };
            return a
        }(c.OverrideBase);
        c.SetProperty = f;
        f.prototype.__class__ = "egret.gui.SetProperty"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a(d, a, c) {
                b.call(this);
                this.target = d;
                this.name = a;
                this.value = c
            }
            __extends(a, b);
            a.prototype.apply = function(d) {
                d = null == this.target || "" == this.target ? d : d[this.target];
                null != d && (this.oldValue = d.getStyle(this.name), this.setStyleValue(d, this.name, this.value, this.oldValue))
            };
            a.prototype.remove = function(d) {
                d = null == this.target || "" == this.target ? d : d[this.target];
                null != d && (this.setStyleValue(d, this.name, this.oldValue, this.oldValue), this.oldValue = null)
            };
            a.prototype.setStyleValue = function(d, a, b, c) {
                void 0 === b ? d.clearStyle(a) : null === b ? d.setStyle(a, b) : "number" == typeof c ? d.setStyle(a, parseFloat(b)) : "boolean" == typeof c ? d.setStyle(a, this.toBoolean(b)) : d.setStyle(a, b)
            };
            a.prototype.toBoolean = function(d) {
                return "string" == typeof d ? "true" == d.toLowerCase() : !1 != d
            };
            return a
        }(c.OverrideBase);
        c.SetStyle = f;
        f.prototype.__class__ = "egret.gui.SetStyle"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(d, a) {
                b.call(this);
                this.initialized = !1;
                this.name = d;
                this.overrides = a
            }
            __extends(a, b);
            a.prototype.initialize = function(d) {
                if (!this.initialized) {
                    this.initialized = !0;
                    for (var a = 0; a < this.overrides.length; a++) this.overrides[a].initialize(d)
                }
            };
            return a
        }(c.HashObject);
        e.State = f;
        f.prototype.__class__ = "egret.gui.State"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = {};
        e.getScale9Grid = function(b) {
            if (f[b]) return f[b];
            if (!b) return null;
            var a = b.split(","),
                a = new c.Rectangle(parseInt(a[0]), parseInt(a[1]), parseInt(a[2]), parseInt(a[3]));
            return f[b] = a
        }
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        c.setProperties = function(c, b, a) {
            for (var d = b.length, e = 0; e < d; e++) c[b[e]] = a[e];
            return c
        }
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(d, a) {
                void 0 === a && (a = !0);
                b.call(this);
                this.fillMode = "scale";
                this.contentReused = this.createChildrenCalled = this.sourceChanged = !1;
                this.autoScale = !0;
                this.touchChildren = !1;
                d && (this.source = d);
                this.autoScale = a
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "source", {
                get: function() {
                    return this._source
                },
                set: function(d) {
                    this._source != d && (this._source = d, this.createChildrenCalled ? this.parseSource() : this.sourceChanged = !0, this._setSizeDirty())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "content", {
                get: function() {
                    return this._content
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                this.sourceChanged && this.parseSource();
                this.createChildrenCalled = !0
            };
            a.prototype.parseSource = function() {
                this.sourceChanged = !1;
                var d = a.assetAdapter;
                d || (d = this.getAdapter());
                if (this._source) {
                    var b = this.contentReused ? null : this._content;
                    this.contentReused = !0;
                    d.getAsset(this._source, this.contentChanged, this, b)
                } else this.contentChanged(null, null)
            };
            a.prototype.getAdapter = function() {
                var d;
                try {
                    d = c.Injector.getInstance("egret.gui.IAssetAdapter")
                } catch (b) {
                    d = new e.DefaultAssetAdapter
                }
                return a.assetAdapter = d
            };
            a.prototype.contentChanged = function(d, a) {
                if (a === this._source) {
                    var b = this._content;
                    this._content = d;
                    b !== d && (b instanceof c.DisplayObject && b.parent == this && this._removeFromDisplayList(b), d instanceof c.DisplayObject && this._addToDisplayListAt(d, 0));
                    this.invalidateSize();
                    this.invalidateDisplayList();
                    this.contentReused = !1;
                    this.hasEventListener(e.UIEvent.CONTENT_CHANGED) && e.UIEvent.dispatchUIEvent(this, e.UIEvent.CONTENT_CHANGED)
                }
            };
            a.prototype.measure = function() {
                b.prototype.measure.call(this);
                var d = this._content;
                d instanceof c.DisplayObject ? "preferredWidth" in d ? (this.measuredWidth = d.preferredWidth, this.measuredHeight = d.preferredHeight) : (this.measuredWidth = d.width * d.scaleX, this.measuredHeight = d.height * d.scaleY) : d instanceof c.Texture && (this.measuredWidth = d._textureWidth, this.measuredHeight = d._textureHeight)
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a);
                var e = this._content;
                this.autoScale && e instanceof c.DisplayObject && ("setLayoutBoundsSize" in e ? e.setLayoutBoundsSize(d, a) : (e.width = d / e.scaleX, e.height = a / e.scaleY));
                this._setSizeDirty()
            };
            a.prototype._render = function(d) {
                if (this._content instanceof c.Texture) {
                    var a = this._content;
                    this._texture_to_render = a;
                    var e;
                    this.autoScale ? (e = this._width, a = this._height) : (e = a._textureWidth, a = a._textureHeight);
                    c.Bitmap._drawBitmap(d, e, a, this)
                } else this._texture_to_render = null;
                b.prototype._render.call(this, d)
            };
            a.prototype._measureBounds = function() {
                if (this._content instanceof c.Texture) {
                    var d = this._content,
                        a = this.width,
                        e = this.height;
                    return c.Rectangle.identity.initialize(Math.floor(d._offsetX * a / d._textureWidth), Math.floor(d._offsetY * e / d._textureHeight), a, e)
                }
                return b.prototype._measureBounds.call(this)
            };
            a.prototype.addChild = function(d) {
                throw Error("addChild()" + a.errorStr + "addElement()代替");
            };
            a.prototype.addChildAt = function(d, b) {
                throw Error("addChildAt()" + a.errorStr + "addElementAt()代替");
            };
            a.prototype.removeChild = function(d) {
                throw Error("removeChild()" + a.errorStr + "removeElement()代替");
            };
            a.prototype.removeChildAt = function(d) {
                throw Error("removeChildAt()" + a.errorStr + "removeElementAt()代替");
            };
            a.prototype.setChildIndex = function(d, b) {
                throw Error("setChildIndex()" + a.errorStr + "setElementIndex()代替");
            };
            a.prototype.swapChildren = function(d, b) {
                throw Error("swapChildren()" + a.errorStr + "swapElements()代替");
            };
            a.prototype.swapChildrenAt = function(d, b) {
                throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()代替");
            };
            a.errorStr = "在此组件中不可用，若此组件为容器类，请使用";
            return a
        }(e.UIComponent);
        e.UIAsset = f;
        f.prototype.__class__ = "egret.gui.UIAsset"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.hostComponentKey = null;
                this.stateIsDirty = this.skinLayoutEnabled = this.createChildrenCalled = this._skinNameExplicitlySet = !1;
                this.explicitMouseEnabled = this.explicitMouseChildren = this._autoMouseEnabled = !0
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinName", {
                get: function() {
                    return this._skinName
                },
                set: function(d) {
                    this._skinName != d && (this._skinName = d, this._skinNameExplicitlySet = !0, this.createChildrenCalled && this.parseSkinName())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                this.parseSkinName();
                this.createChildrenCalled = !0
            };
            a.prototype.parseSkinName = function() {
                var d = a.skinAdapter;
                d || (d = this.getSkinAdapter());
                var b = this.hostComponentKey || c.getQualifiedClassName(this),
                    d = d.getSkin(this._skinName, b);
                d || (b = a._defaultTheme) && (d = b.getDefaultSkin(this));
                this._setSkin(d)
            };
            a.prototype.getSkinAdapter = function() {
                var d;
                try {
                    d = c.Injector.getInstance("egret.gui.ISkinAdapter")
                } catch (b) {
                    d = new e.DefaultSkinAdapter
                }

                return a.skinAdapter = d
            };
            Object.defineProperty(a.prototype, "skin", {
                get: function() {
                    return this._skin
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setSkin = function(d) {
                var a = this._skin;
                this.detachSkin(a);
                a instanceof c.DisplayObject && this._removeFromDisplayList(a);
                this._skin = d;
                d instanceof c.DisplayObject && this._addToDisplayListAt(this._skin, 0);
                this.attachSkin(d);
                this.invalidateSkinState();
                this.invalidateSize();
                this.invalidateDisplayList();
                this.hasEventListener(e.UIEvent.SKIN_CHANGED) && e.UIEvent.dispatchUIEvent(this, e.UIEvent.SKIN_CHANGED)
            };
            a.prototype.attachSkin = function(d) {
                d && "hostComponent" in d && (d.hostComponent = this, this.findSkinParts());
                this.skinLayoutEnabled = !d || d instanceof c.DisplayObject ? !1 : !0
            };
            a.prototype.findSkinParts = function() {
                var d = this._skin;
                if (d && "skinParts" in d)
                    for (var a = d.skinParts, b = a.length, c = 0; c < b; c++) {
                        var e = a[c];
                        if (e in d) try {
                            this[e] = d[e], this.partAdded(e, d[e])
                        } catch (f) {}
                    }
            };
            a.prototype.detachSkin = function(d) {
                if (d && "skinParts" in d) {
                    for (var a = d.skinParts, b = a.length, c = 0; c < b; c++) {
                        var e = a[c];
                        e in this && (null != this[e] && this.partRemoved(e, this[e]), this[e] = null)
                    }
                    d.hostComponent = null
                }
            };
            a.prototype.partAdded = function(d, a) {
                e.SkinPartEvent.dispatchSkinPartEvent(this, e.SkinPartEvent.PART_ADDED, d, a)
            };
            a.prototype.partRemoved = function(d, a) {
                e.SkinPartEvent.dispatchSkinPartEvent(this, e.SkinPartEvent.PART_REMOVED, d, a)
            };
            a.prototype.invalidateSkinState = function() {
                this.stateIsDirty || (this.stateIsDirty = !0, this.invalidateProperties())
            };
            a.prototype.validateSkinState = function() {
                var d = this.getCurrentSkinState(),
                    a = this._skin;
                a && "currentState" in a && (a.currentState = d);
                this.hasEventListener("stateChanged") && this.dispatchEventWith("stateChanged")
            };
            Object.defineProperty(a.prototype, "autoTouchEnabled", {
                get: function() {
                    return this._autoMouseEnabled
                },
                set: function(d) {
                    this._autoMouseEnabled != d && ((this._autoMouseEnabled = d) ? (this._touchChildren = this.enabled ? this.explicitMouseChildren : !1, this._touchEnabled = this.enabled ? this.explicitMouseEnabled : !1) : (this._touchChildren = this.explicitMouseChildren, this._touchEnabled = this.explicitMouseEnabled))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "touchChildren", {
                get: function() {
                    return this._touchChildren
                },
                set: function(d) {
                    this.enabled && (this._touchChildren = d);
                    this.explicitMouseChildren = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "touchEnabled", {
                get: function() {
                    return this._touchEnabled
                },
                set: function(d) {
                    this.enabled && (this._touchEnabled = d);
                    this.explicitMouseEnabled = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "enabled", {
                get: function() {
                    return this._enabled
                },
                set: function(d) {
                    this._setEnabled(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setEnabled = function(d) {
                this._enabled != d && (this._enabled = d, this._autoMouseEnabled && (this._touchChildren = d ? this.explicitMouseChildren : !1, this._touchEnabled = d ? this.explicitMouseEnabled : !1), this.invalidateSkinState())
            };
            a.prototype.getCurrentSkinState = function() {
                return this.enabled ? "normal" : "disabled"
            };
            a.prototype.commitProperties = function() {
                b.prototype.commitProperties.call(this);
                this.stateIsDirty && (this.stateIsDirty = !1, this.validateSkinState())
            };
            a.prototype._childXYChanged = function() {
                this.skinLayoutEnabled && (this.invalidateSize(), this.invalidateDisplayList())
            };
            a.prototype.measure = function() {
                b.prototype.measure.call(this);
                var d = this._skin;
                d && (this.skinLayoutEnabled ? (d.measure(), this.measuredWidth = d.preferredWidth, this.measuredHeight = d.preferredHeight) : "preferredWidth" in d ? (this.measuredWidth = d.preferredWidth, this.measuredHeight = d.preferredHeight) : (this.measuredWidth = d.width, this.measuredHeight = d.height))
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a);
                var e = this._skin;
                e && (this.skinLayoutEnabled ? e.updateDisplayList(d, a) : "setLayoutBoundsSize" in e ? e.setLayoutBoundsSize(d, a) : e instanceof c.DisplayObject && (e.scaleX = 0 == e.width ? 1 : d / e.width, e.scaleY = 0 == e.height ? 1 : a / e.height))
            };
            a.prototype.addChild = function(d) {
                throw Error("addChild()" + a.errorStr + "addElement()代替");
            };
            a.prototype.addChildAt = function(d, b) {
                throw Error("addChildAt()" + a.errorStr + "addElementAt()代替");
            };
            a.prototype.removeChild = function(d) {
                throw Error("removeChild()" + a.errorStr + "removeElement()代替");
            };
            a.prototype.removeChildAt = function(d) {
                throw Error("removeChildAt()" + a.errorStr + "removeElementAt()代替");
            };
            a.prototype.setChildIndex = function(d, b) {
                throw Error("setChildIndex()" + a.errorStr + "setElementIndex()代替");
            };
            a.prototype.swapChildren = function(d, b) {
                throw Error("swapChildren()" + a.errorStr + "swapElements()代替");
            };
            a.prototype.swapChildrenAt = function(d, b) {
                throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()代替");
            };
            a.errorStr = "在此组件中不可用，若此组件为容器类，请使用";
            return a
        }(e.UIComponent);
        e.SkinnableComponent = f;
        f.prototype.__class__ = "egret.gui.SkinnableComponent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function b() {}
            b.prototype.getSkin = function(a, d) {
                if (!a) return null;
                if (a.prototype) return new a;
                if ("string" == typeof a) {
                    var b = c.getDefinitionByName(a);
                    return b ? new b : null
                }
                return a
            };
            return b
        }();
        e.DefaultSkinAdapter = f;
        f.prototype.__class__ = "egret.gui.DefaultSkinAdapter"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function b() {}
            b.prototype.getAsset = function(a, d, b, e) {
                var f = a;
                a.prototype && (f = new a);
                if (f instanceof c.DisplayObject || f instanceof c.Texture) d.call(b, f, a);
                else if ("string" == typeof a) {
                    var g = new c.URLLoader;
                    g.dataFormat = c.URLLoaderDataFormat.TEXTURE;
                    g.addEventListener(c.Event.COMPLETE, function(c) {
                        f = g.data;
                        d.call(b, f, a)
                    }, this);
                    g.load(new c.URLRequest(a))
                } else d.call(b, f, a)
            };
            return b
        }();
        e.DefaultAssetAdapter = f;
        f.prototype.__class__ = "egret.gui.DefaultAssetAdapter"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function b(a) {
                this.delyList = [];
                this.loadConfig(a)
            }
            b.load = function(a) {
                this.initialized || (this.initialized = !0, e.SkinnableComponent._defaultTheme = new b(a))
            };
            b.prototype.loadConfig = function(a) {
                var d = new c.URLLoader;
                d.addEventListener(c.Event.COMPLETE, this.onLoadComplete, this);
                d.addEventListener(c.IOErrorEvent.IO_ERROR, this.onLoadError, this);
                d.dataFormat = c.URLLoaderDataFormat.TEXT;
                d.load(new c.URLRequest(a))
            };
            b.prototype.onLoadComplete = function(a) {
                a = a.target;
                try {
                    this.skinMap = JSON.parse(a.data).skins
                } catch (d) {
                    c.Logger.warning("JSON文件格式不正确: " + a._request.url + "\ndata:" + a.data)
                }
                this.handleDelyList()
            };
            b.prototype.onLoadError = function(a) {
                c.Logger.warning("主题配置文件加载失败: " + a.target._request.url);
                this.handleDelyList()
            };
            b.prototype.handleDelyList = function() {
                if (this.skinMap) {
                    var a = this.delyList;
                    this.delyList = [];
                    for (var d = a.length, b = 0; b < d; b++) {
                        var c = a[b];
                        if (!c._skin) {
                            var e = this.getDefaultSkin(c);
                            c._setSkin(e)
                        }
                    }
                } else this.skinMap = {}, this.delyList = []
            };
            b.prototype.getDefaultSkin = function(a) {
                var d = this.skinMap;
                if (!d) return -1 == this.delyList.indexOf(a) && this.delyList.push(a), null;
                var b, e = a.hostComponentKey;
                if (e) b = d[e];
                else
                    for (; a;) {
                        e = c.getQualifiedClassName(a);
                        if (b = d[e]) break;
                        a = c.getDefinitionByName(c.getQualifiedSuperclassName(a))
                    }
                if (!b) return null;
                d = c.getDefinitionByName(b);
                return d ? new d : (c.Logger.warning("找不到主题中所配置的皮肤类名: " + b), null)
            };
            b.initialized = !1;
            return b
        }();
        e.Theme = f;
        f.prototype.__class__ = "egret.gui.Theme"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "target", {
                get: function() {
                    return this._target
                },
                set: function(d) {
                    this._target = d
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.measure = function() {
                if (null != this.target) {
                    for (var d = 0, a = 0, b = this._target, c = b.numElements, e = 0; e < c; e++) {
                        var f = b.getElementAt(e);
                        if (f && f.includeInLayout) {
                            var k = f.horizontalCenter,
                                l = f.verticalCenter,
                                m = f.left,
                                n = f.right,
                                p = f.top,
                                r = f.bottom;
                            isNaN(m) || isNaN(n) ? isNaN(k) ? isNaN(m) && isNaN(n) ? k = f.preferredX : (k = isNaN(m) ? 0 : m, k += isNaN(n) ? 0 : n) : k = 2 * Math.abs(k) : k = m + n;
                            isNaN(p) || isNaN(r) ? isNaN(l) ? isNaN(p) && isNaN(r) ? l = f.preferredY : (l = isNaN(p) ? 0 : p, l += isNaN(r) ? 0 : r) : l = 2 * Math.abs(l) : l = p + r;
                            r = f.preferredHeight;
                            d = Math.ceil(Math.max(d, k + f.preferredWidth));
                            a = Math.ceil(Math.max(a, l + r))
                        }
                    }
                    this.target.measuredWidth = d;
                    this.target.measuredHeight = a
                }
            };
            a.prototype.updateDisplayList = function(d, a) {
                if (null != this.target)
                    for (var b = this.target.numElements, c = 0; c < b; c++) {
                        var e = this.target.getElementAt(c);
                        if (null != e && e.includeInLayout) {
                            var f = e.horizontalCenter,
                                k = e.verticalCenter,
                                l = e.left,
                                m = e.right,
                                n = e.top,
                                p = e.bottom,
                                r = e.percentWidth,
                                w = e.percentHeight,
                                A = NaN,
                                u = NaN;
                            isNaN(l) || isNaN(m) ? isNaN(r) || (A = Math.round(d * Math.min(0.01 * r, 1))) : A = d - m - l;
                            isNaN(n) || isNaN(p) ? isNaN(w) || (u = Math.round(a * Math.min(0.01 * w, 1))) : u = a - p - n;
                            e.setLayoutBoundsSize(A, u);
                            r = e.layoutBoundsWidth;
                            w = e.layoutBoundsHeight;
                            u = A = NaN;
                            A = isNaN(f) ? isNaN(l) ? isNaN(m) ? e.layoutBoundsX : d - r - m : l : Math.round((d - r) / 2 + f);
                            u = isNaN(k) ? isNaN(n) ? isNaN(p) ? e.layoutBoundsY : a - w - p : n : Math.round((a - w) / 2 + k);
                            e.setLayoutBoundsPosition(A, u)
                        }
                    }
            };
            return a
        }(c.HashObject);
        e.SkinBasicLayout = f;
        f.prototype.__class__ = "egret.gui.SkinBasicLayout"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._autoRepeat = this._downEventFired = !1;
                this._repeatInterval = this._repeatDelay = 35;
                this._keepDown = this._hovered = !1;
                this._label = "";
                this.touchChildren = this._stickyHighlighting = this._mouseCaptured = !1;
                this.addHandlers()
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "autoRepeat", {
                get: function() {
                    return this._autoRepeat
                },
                set: function(d) {
                    d != this._autoRepeat && (this._autoRepeat = d, this.checkAutoRepeatTimerConditions(this.isDown()))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "repeatDelay", {
                get: function() {
                    return this._repeatDelay
                },
                set: function(d) {
                    this._repeatDelay = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "repeatInterval", {
                get: function() {
                    return this._repeatInterval
                },
                set: function(d) {
                    this._repeatInterval = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "hovered", {
                get: function() {
                    return this._hovered
                },
                set: function(d) {
                    d != this._hovered && (this._hovered = d, this.invalidateSkinState(), this.checkButtonDownConditions())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setKeepDown = function(d) {
                this._keepDown != d && (this._keepDown = d, this.invalidateSkinState())
            };
            Object.defineProperty(a.prototype, "label", {
                get: function() {
                    return this._getLabel()
                },
                set: function(d) {
                    this._setLabel(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._getLabel = function() {
                return this.labelDisplay ? this.labelDisplay.text : this._label
            };
            a.prototype._setLabel = function(d) {
                this._label = d;
                this.labelDisplay && (this.labelDisplay.text = d)
            };
            Object.defineProperty(a.prototype, "mouseCaptured", {
                get: function() {
                    return this._mouseCaptured
                },
                set: function(d) {
                    d != this._mouseCaptured && (this._mouseCaptured = d, this.invalidateSkinState(), d || this.removeStageMouseHandlers(), this.checkButtonDownConditions())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "stickyHighlighting", {
                get: function() {
                    return this._stickyHighlighting
                },
                set: function(d) {
                    d != this._stickyHighlighting && (this._stickyHighlighting = d, this.invalidateSkinState(), this.checkButtonDownConditions())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.checkButtonDownConditions = function() {
                var d = this.isDown();
                this._downEventFired != d && (d && e.UIEvent.dispatchUIEvent(this, e.UIEvent.BUTTON_DOWN), this._downEventFired = d, this.checkAutoRepeatTimerConditions(d))
            };
            a.prototype.addHandlers = function() {
                this.addEventListener(c.TouchEvent.TOUCH_ROLL_OVER, this.mouseEventHandler, this);
                this.addEventListener(c.TouchEvent.TOUCH_ROLL_OUT, this.mouseEventHandler, this);
                this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.mouseEventHandler, this);
                this.addEventListener(c.TouchEvent.TOUCH_END, this.mouseEventHandler, this);
                this.addEventListener(c.TouchEvent.TOUCH_TAP, this.mouseEventHandler, this)
            };
            a.prototype.addStageMouseHandlers = function() {
                e.UIGlobals.stage.addEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
                e.UIGlobals.stage.addEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
            };
            a.prototype.removeStageMouseHandlers = function() {
                e.UIGlobals.stage.removeEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
                e.UIGlobals.stage.removeEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
            };
            a.prototype.isDown = function() {
                return this.enabled ? this.mouseCaptured && (this.hovered || this.stickyHighlighting) ? !0 : !1 : !1
            };
            a.prototype.checkAutoRepeatTimerConditions = function(d) {
                d = this.autoRepeat && d;
                d != (null != this.autoRepeatTimer) && (d ? this.startTimer() : this.stopTimer())
            };
            a.prototype.startTimer = function() {
                this.autoRepeatTimer = new c.Timer(1);
                this.autoRepeatTimer.delay = this._repeatDelay;
                this.autoRepeatTimer.addEventListener(c.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
                this.autoRepeatTimer.start()
            };
            a.prototype.stopTimer = function() {
                this.autoRepeatTimer.stop();
                this.autoRepeatTimer = null
            };
            a.prototype.mouseEventHandler = function(d) {
                switch (d.type) {
                    case c.TouchEvent.TOUCH_ROLL_OVER:
                        if (d.touchDown && !this.mouseCaptured) break;
                        this.hovered = !0;
                        break;
                    case c.TouchEvent.TOUCH_ROLL_OUT:
                        this.hovered = !1;
                        break;
                    case c.TouchEvent.TOUCH_BEGIN:
                        this.addStageMouseHandlers();
                        c.InteractionMode.mode == c.InteractionMode.TOUCH && (this.hovered = !0);
                        this.mouseCaptured = !0;
                        break;
                    case c.TouchEvent.TOUCH_END:
                        d.target == this && (this.hovered = !0, this.mouseCaptured && (this.buttonReleased(), this.mouseCaptured = !1));
                        break;
                    case c.TouchEvent.TOUCH_TAP:
                        this.enabled ? this.clickHandler(d) : d.stopImmediatePropagation()
                }
            };
            a.prototype.buttonReleased = function() {};
            a.prototype.clickHandler = function(d) {};
            a.prototype.stage_mouseUpHandler = function(d) {
                d.target != this && (this.mouseCaptured = !1)
            };
            a.prototype.autoRepeat_timerDelayHandler = function(d) {
                this.autoRepeatTimer.reset();
                this.autoRepeatTimer.removeEventListener(c.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
                this.autoRepeatTimer.delay = this._repeatInterval;
                this.autoRepeatTimer.addEventListener(c.TimerEvent.TIMER, this.autoRepeat_timerHandler, this);
                this.autoRepeatTimer.start()
            };
            a.prototype.autoRepeat_timerHandler = function(d) {
                e.UIEvent.dispatchUIEvent(this, e.UIEvent.BUTTON_DOWN)
            };
            a.prototype.getCurrentSkinState = function() {
                return this.enabled ? this.isDown() || this._keepDown ? "down" : c.InteractionMode.mode == c.InteractionMode.MOUSE && (this.hovered || this.mouseCaptured) ? "over" : "up" : b.prototype.getCurrentSkinState.call(this)
            };
            a.prototype.partAdded = function(d, a) {
                b.prototype.partAdded.call(this, d, a);
                a == this.labelDisplay && (this.labelDisplay.text = this._label)
            };
            return a
        }(e.SkinnableComponent);
        e.ButtonBase = f;
        f.prototype.__class__ = "egret.gui.ButtonBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._autoSelected = !0
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "selected", {
                get: function() {
                    return this._selected
                },
                set: function(d) {
                    this._setSelected(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setSelected = function(d) {
                d != this._selected && (this._selected = d, e.UIEvent.dispatchUIEvent(this, e.UIEvent.VALUE_COMMIT), this.invalidateSkinState())
            };
            a.prototype.getCurrentSkinState = function() {
                var d = b.prototype.getCurrentSkinState.call(this);
                if (this.selected) {
                    var a = d + "AndSelected",
                        c = this.skin;
                    return c && c.hasState(a) ? a : "disabled" == d ? "disabled" : "down"
                }
                return d
            };
            a.prototype.buttonReleased = function() {
                b.prototype.buttonReleased.call(this);
                this._autoSelected && this.enabled && (this.selected = !this.selected, this.dispatchEventWith(c.Event.CHANGE))
            };
            return a
        }(e.ButtonBase);
        e.ToggleButtonBase = f;
        f.prototype.__class__ = "egret.gui.ToggleButtonBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.allStyleChanged = !1;
                this._fontFamily = "SimSun";
                this._size = 30;
                this._focusEnabled = !0;
                this._italic = this._bold = !1;
                this._textAlign = c.HorizontalAlign.LEFT;
                this._verticalAlign = c.VerticalAlign.TOP;
                this._lineSpacing = 0;
                this._textColor = 16777215;
                this._text = "";
                this._textFlow = null;
                this._textFlowChanged = !1;
                this._hasNoStyleChild = !0
            }
            __extends(a, b);
            a.prototype.styleChanged = function(d) {
                if (!this.allStyleChanged) {
                    if (d) switch (d) {
                        case "textColor":
                            this.textColorChanged = !0;
                            break;
                        case "fontFamily":
                            this.fontFamilyChanged = !0;
                            break;
                        case "size":
                            this._sizeChanged = !0;
                            break;
                        case "bold":
                            this.boldChanged = !0;
                            break;
                        case "italic":
                            this.italicChanged = !0;
                            break;
                        case "textAlign":
                            this.textAlignChanged = !0;
                            break;
                        case "verticalAlign":
                            this.verticalAlignChanged = !0
                    } else this.allStyleChanged = !0;
                    this.invalidateProperties();
                    this.invalidateSize();
                    this.invalidateDisplayList()
                }
            };
            Object.defineProperty(a.prototype, "fontFamily", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.fontFamily ? d.fontFamily : this._fontFamily
                },
                set: function(d) {
                    this.setStyle("fontFamily", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "size", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.size ? d.size : this._size
                },
                set: function(d) {
                    void 0 === d && (d = 0);
                    this.setStyle("size", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "focusEnabled", {
                get: function() {
                    return this._focusEnabled
                },
                set: function(d) {
                    this._focusEnabled = d
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setFocus = function() {
                !1 != this._focusEnabled && this._textField && this._textField.setFocus()
            };
            Object.defineProperty(a.prototype, "bold", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.bold ? d.bold : this._bold
                },
                set: function(d) {
                    this.setStyle("bold", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "italic", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.italic ? d.italic : this._italic
                },
                set: function(d) {
                    this.setStyle("italic", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "textAlign", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.textAlign ? d.textAlign : this._textAlign
                },
                set: function(d) {
                    this.setStyle("textAlign", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "verticalAlign", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.verticalAlign ? d.verticalAlign : this._verticalAlign
                },
                set: function(d) {
                    this.setStyle("verticalAlign", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "lineSpacing", {
                get: function() {
                    return this._getLineSpacing()
                },
                set: function(d) {
                    this._setLineSpacing(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._getLineSpacing = function() {
                return this._lineSpacing
            };
            a.prototype._setLineSpacing = function(d) {
                this._lineSpacing != d && (this._lineSpacing = d, this.lineSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
            };
            Object.defineProperty(a.prototype, "textColor", {
                get: function() {
                    var d = this._styleProtoChain;
                    return d && void 0 !== d.textColor ? d.textColor : this._textColor
                },
                set: function(d) {
                    this.setStyle("textColor", d)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "text", {
                get: function() {
                    return this._textField ? this._textField.text : this._text
                },
                set: function(d) {
                    d != this._text && (this._text = d || "", this._textChanged = !0, this._textFlow = null, this._textFlowChanged = !1, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "textFlow", {
                get: function() {
                    return this._textField ? this._textField.textFlow : this._textFlow
                },
                set: function(d) {
                    this._textFlow = d || [];
                    this._textFlowChanged = !0;
                    this._text = null;
                    this._textChanged = !1;
                    this.invalidateProperties();
                    this.invalidateSize();
                    this.invalidateDisplayList()
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                this._textField || this.checkTextField()
            };
            a.prototype.commitProperties = function() {
                b.prototype.commitProperties.call(this);
                this._textField || this.checkTextField();
                this.allStyleChanged && (this.allStyleChanged = !1, this.verticalAlignChanged = this.textAlignChanged = this.italicChanged = this.boldChanged = this._sizeChanged = this.fontFamilyChanged = this.textColorChanged = !0);
                this.fontFamilyChanged && (this._textField.fontFamily = this.fontFamily, this.fontFamilyChanged = !1);
                this._sizeChanged && (this._textField.size = this.size, this._sizeChanged = !1);
                this.boldChanged && (this._textField.bold = this.bold, this.boldChanged = !1);
                this.italic && (this._textField.italic = this.italic, this.italicChanged = !1);
                this.textAlignChanged && (this._textField.textAlign = this.textAlign, this.textAlignChanged = !1);
                this.verticalAlignChanged && (this._textField.verticalAlign = this.verticalAlign, this.verticalAlignChanged = !1);
                this.lineSpacingChanged && (this._textField.lineSpacing = this._lineSpacing, this.lineSpacingChanged = !1);
                this.textColorChanged && (this._textField.textColor = this.textColor, this.textColorChanged = !1);
                this._textChanged && (this._textField.text = this._text, this._textChanged = !1);
                this._textFlowChanged && (this._textField.textFlow = this._textFlow, this._textFlowChanged = !1)
            };
            a.prototype.checkTextField = function() {
                this._textField || (this._createTextField(), this._text && (this._textField.text = this._text, this._textChanged = !0), this._textFlow && (this._textField.textFlow = this._textFlow, this._textFlowChanged = !0), this.invalidateProperties())
            };
            a.prototype._createTextField = function() {
                this._textField = new c.TextField;
                this._textField.fontFamily = this.fontFamily;
                this._textField.size = this.size;
                this._textField.textAlign = this.textAlign;
                this._textField.verticalAlign = this.verticalAlign;
                this._textField.lineSpacing = this._lineSpacing;
                this._textField.textColor = this.textColor;
                this._textField.multiline = !0;
                this._addToDisplayList(this._textField)
            };
            a.prototype.measure = function() {
                b.prototype.measure.call(this);
                this.measuredWidth = a.DEFAULT_MEASURED_WIDTH;
                this.measuredHeight = a.DEFAULT_MEASURED_HEIGHT
            };
            a.prototype.$updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a)
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a);
                this._textField.width = d;
                this._textField.height = a
            };
            a.prototype.dispatchPropertyChangeEvent = function(d, a, b) {
                this.hasEventListener("propertyChange") && e.PropertyChangeEvent.dispatchPropertyChangeEvent(this, e.PropertyChangeEventKind.UPDATE, d, a, b, this)
            };
            a.DEFAULT_MEASURED_WIDTH = 160;
            a.DEFAULT_MEASURED_HEIGHT = 22;
            return a
        }(e.UIComponent);
        e.TextBase = f;
        f.prototype.__class__ = "egret.gui.TextBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._contentHeight = this._contentWidth = 0;
                this._clipAndEnableScrolling = !1;
                this._verticalScrollPosition = this._horizontalScrollPosition = 0;
                this.touchEnabled = this._layoutInvalidateSizeFlag = this._layoutInvalidateDisplayListFlag = !1
            }
            __extends(a, b);
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                this._layout || (this.layout = new e.BasicLayout)
            };
            Object.defineProperty(a.prototype, "contentWidth", {
                get: function() {
                    return this._contentWidth
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setContentWidth = function(d) {
                if (d != this._contentWidth) {
                    var a = this._contentWidth;
                    this._contentWidth = d;
                    this.hasEventListener("propertyChange") && e.PropertyChangeEvent.dispatchPropertyChangeEvent(this, e.PropertyChangeEventKind.UPDATE, "contentWidth", a, d, this)
                }
            };
            Object.defineProperty(a.prototype, "contentHeight", {
                get: function() {
                    return this._contentHeight
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setContentHeight = function(d) {
                if (d != this._contentHeight) {
                    var a = this._contentHeight;
                    this._contentHeight = d;
                    this.hasEventListener("propertyChange") && e.PropertyChangeEvent.dispatchPropertyChangeEvent(this, e.PropertyChangeEventKind.UPDATE, "contentHeight", a, d, this)
                }
            };
            a.prototype.setContentSize = function(d, a) {
                if (d != this._contentWidth || a != this._contentHeight) this.setContentWidth(d), this.setContentHeight(a)
            };
            Object.defineProperty(a.prototype, "layout", {
                get: function() {
                    return this._layout
                },
                set: function(d) {
                    this._setLayout(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setLayout = function(d) {
                if (this._layout != d) {
                    this._layout && (this._layout.target = null);
                    if (this._layout = d) this._layout.target = this;
                    this.invalidateSize();
                    this.invalidateDisplayList();
                    this.dispatchEventWith("layoutChanged")
                }
            };
            Object.defineProperty(a.prototype, "clipAndEnableScrolling", {
                get: function() {
                    return this._clipAndEnableScrolling
                },
                set: function(d) {
                    d != this._clipAndEnableScrolling && (this.scrollRect = (this._clipAndEnableScrolling = d) ? new c.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, this.width, this.height) : null)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "horizontalScrollPosition", {
                get: function() {
                    return this._horizontalScrollPosition
                },
                set: function(d) {
                    if (d != this._horizontalScrollPosition) {
                        var a = this._horizontalScrollPosition;
                        this._horizontalScrollPosition = d;
                        this.scrollPositionChanged();
                        e.PropertyChangeEvent.dispatchPropertyChangeEvent(this, e.PropertyChangeEventKind.UPDATE, "horizontalScrollPosition", a, d, this)
                    }
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "verticalScrollPosition", {
                get: function() {
                    return this._verticalScrollPosition
                },
                set: function(d) {
                    if (d != this._verticalScrollPosition) {
                        var a = this._verticalScrollPosition;
                        this._verticalScrollPosition = d;
                        this.scrollPositionChanged();
                        e.PropertyChangeEvent.dispatchPropertyChangeEvent(this, e.PropertyChangeEventKind.UPDATE, "verticalScrollPosition", a, d, this)
                    }
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.scrollPositionChanged = function() {
                this._clipAndEnableScrolling && (this.updateScrollRect(this.width, this.height), this._invalidateDisplayListExceptLayout(), this._layout && this._layout.scrollPositionChanged())
            };
            a.prototype.updateScrollRect = function(d, a) {
                var b = this._scrollRect;
                this._clipAndEnableScrolling ? b ? (b.x = this._horizontalScrollPosition, b.y = this._verticalScrollPosition, b.width = d, b.height = a) : this._scrollRect = new c.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, d, a) : b && (this._scrollRect = null)
            };
            a.prototype.measure = function() {
                this._layout && this._layoutInvalidateSizeFlag && (b.prototype.measure.call(this), this._layout.measure())
            };
            a.prototype._invalidateDisplayListExceptLayout = function() {
                b.prototype.invalidateDisplayList.call(this)
            };
            a.prototype.invalidateDisplayList = function() {
                b.prototype.invalidateDisplayList.call(this);
                this._layoutInvalidateDisplayListFlag = !0
            };
            a.prototype._childXYChanged = function() {
                this.invalidateSize();
                this.invalidateDisplayList()
            };
            a.prototype._invalidateSizeExceptLayout = function() {
                b.prototype.invalidateSize.call(this)
            };
            a.prototype.invalidateSize = function() {
                b.prototype.invalidateSize.call(this);
                this._layoutInvalidateSizeFlag = !0
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a);
                this._layoutInvalidateDisplayListFlag && this._layout && (this._layoutInvalidateDisplayListFlag = !1, this._layout.updateDisplayList(d, a), this.updateScrollRect(d, a))
            };
            Object.defineProperty(a.prototype, "numElements", {
                get: function() {
                    return -1
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.getElementAt = function(d) {
                return null
            };
            a.prototype.getElementIndex = function(d) {
                return -1
            };
            a.prototype.getElementIndicesInView = function() {
                var d = [],
                    a;
                if (this.scrollRect)
                    for (a = 0; a < this.numChildren; a++) {
                        var b = this.getChildAt(a);
                        if (b) {
                            var e = new c.Rectangle;
                            e.x = b.layoutBoundsX;
                            e.y = b.layoutBoundsY;
                            e.width = b.layoutBoundsWidth;
                            e.height = b.layoutBoundsHeight;
                            this.scrollRect.intersects(e) && d.push(a)
                        }
                    } else
                        for (a = 0; a < this.numChildren; a++) d.push(a);
                return d
            };
            a.prototype.setVirtualElementIndicesInView = function(d, a) {};
            a.prototype.getVirtualElementAt = function(d) {
                return this.getElementAt(d)
            };
            return a
        }(e.UIComponent);
        e.GroupBase = f;
        f.prototype.__class__ = "egret.gui.GroupBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._selected = this.dataChangedFlag = !1;
                this._itemIndex = -1;
                this.touchChildren = !0
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "data", {
                get: function() {
                    return this._data
                },
                set: function(d) {
                    this._data = d;
                    this.initialized || this.parent ? (this.dataChangedFlag = !1, this.dataChanged()) : (this.dataChangedFlag = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.dataChanged = function() {};
            Object.defineProperty(a.prototype, "selected", {
                get: function() {
                    return this._selected
                },
                set: function(d) {
                    this._selected != d && (this._selected = d, this.invalidateSkinState())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "itemIndex", {
                get: function() {
                    return this._itemIndex
                },
                set: function(d) {
                    this._itemIndex = d
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.commitProperties = function() {
                b.prototype.commitProperties.call(this);
                this.dataChangedFlag && (this.dataChangedFlag = !1, this.dataChanged())
            };
            a.prototype.getCurrentSkinState = function() {
                return this._selected ? "down" : b.prototype.getCurrentSkinState.call(this)
            };
            return a
        }(c.ButtonBase);
        c.ItemRenderer = f;
        f.prototype.__class__ = "egret.gui.ItemRenderer"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function b(a, d) {
                this.easerFunction = c.Ease.sineInOut;
                this._duration = 500;
                this._startDelay = 0;
                this._repeatCount = 1;
                this._repeatDelay = 0;
                this.motionPaths = [];
                this._currentValue = {};
                this.pauseTime = 0;
                this._isPaused = !1;
                this.startTime = 0;
                this._started = !1;
                this.playedTimes = 0;
                this.updateFunction = a;
                this.thisObject = d
            }
            Object.defineProperty(b.prototype, "isPlaying", {
                get: function() {
                    return this._isPlaying
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "duration", {
                get: function() {
                    return this._duration
                },
                set: function(a) {
                    this._duration = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "startDelay", {
                get: function() {
                    return this._startDelay
                },
                set: function(a) {
                    this._startDelay = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "repeatCount", {
                get: function() {
                    return this._repeatCount
                },
                set: function(a) {
                    this._repeatCount = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "repeatDelay", {
                get: function() {
                    return this._repeatDelay
                },
                set: function(a) {
                    this._repeatDelay = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "currentValue", {
                get: function() {
                    return this._currentValue
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.play = function() {
                this.stopAnimation();
                this.start()
            };
            b.prototype.seek = function(a) {
                a = Math.min(a, this.duration);
                this.caculateCurrentValue(a / this.duration);
                this.startTime = c.getTimer() - a - this._startDelay;
                null != this.updateFunction && this.updateFunction.call(this.thisObject, this)
            };
            b.prototype.start = function() {
                this.playedTimes = 0;
                this._started = !0;
                this._isPlaying = !1;
                this._currentValue = {};
                this.caculateCurrentValue(0);
                this.startTime = c.getTimer();
                b.currentTime = this.startTime;
                this.doInterval();
                b.addAnimation(this)
            };
            b.prototype.end = function() {
                this._started || (this.caculateCurrentValue(0), null != this.startFunction && this.startFunction.call(this.thisObject, this), null != this.updateFunction && this.updateFunction.call(this.thisObject, this));
                this.caculateCurrentValue(1);
                null != this.updateFunction && this.updateFunction.call(this.thisObject, this);
                this.stopAnimation();
                null != this.endFunction && this.endFunction.call(this.thisObject, this)
            };
            b.prototype.stop = function() {
                this.stopAnimation();
                null != this.stopFunction && this.stopFunction.call(this.thisObject, this)
            };
            b.prototype.stopAnimation = function() {
                this.playedTimes = 0;
                this._isPlaying = !1;
                this.startTime = 0;
                this._started = !1;
                b.removeAnimation(this)
            };
            Object.defineProperty(b.prototype, "isPaused", {
                get: function() {
                    return this._isPaused
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.pause = function() {
                this._started && (this._isPaused = !0, this.pauseTime = c.getTimer(), this._isPlaying = !1, b.removeAnimation(this))
            };
            b.prototype.resume = function() {
                this._started && this._isPaused && (this._isPaused = !1, this.startTime += c.getTimer() - this.pauseTime, this.pauseTime = -1, b.addAnimation(this))
            };
            Object.defineProperty(b.prototype, "started", {
                get: function() {
                    return this._started
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.doInterval = function() {
                var a = b.currentTime - this.startTime - (0 < this.playedTimes ? this._repeatDelay : this._startDelay);
                if (0 > a) return !1;
                this._isPlaying || (this._isPlaying = !0, 0 == this.playedTimes && null != this.startFunction && this.startFunction.call(this.thisObject, this));
                var d = 0 == this._duration ? 1 : Math.min(a, this._duration) / this._duration;
                this.caculateCurrentValue(d);
                null != this.updateFunction && this.updateFunction.call(this.thisObject, this);
                if (a = a >= this._duration) this.playedTimes++, this._isPlaying = !1, this.startTime = b.currentTime, 0 == this._repeatCount || this.playedTimes < this._repeatCount ? a = !1 : (b.removeAnimation(this), this._started = !1, this.playedTimes = 0);
                a && null != this.endFunction && this.endFunction.call(this.thisObject, this);
                return a
            };
            b.prototype.caculateCurrentValue = function(a) {
                this.easerFunction && (a = this.easerFunction(a));
                for (var d = this.motionPaths, b = d.length, c = 0; c < b; c++) {
                    var e = d[c];
                    this.currentValue[e.prop] = e.from + (e.to - e.from) * a
                }
            };
            b.addAnimation = function(a) {
                -1 == b.activeAnimations.indexOf(a) && (b.activeAnimations.push(a), b.registered || (b.registered = !0, c.Ticker.getInstance().register(b.onEnterFrame, null)))
            };
            b.removeAnimation = function(a) {
                a = b.activeAnimations.indexOf(a); - 1 != a && (b.activeAnimations.splice(a, 1), a <= b.currentIntervalIndex && b.currentIntervalIndex--);
                0 == b.activeAnimations.length && b.registered && (b.registered = !1, c.Ticker.getInstance().unregister(b.onEnterFrame, null))
            };
            b.onEnterFrame = function(a, d) {
                b.currentTime = c.getTimer();
                for (b.currentIntervalIndex = 0; b.currentIntervalIndex < b.activeAnimations.length;) b.activeAnimations[b.currentIntervalIndex].doInterval(), b.currentIntervalIndex++;
                b.currentIntervalIndex = -1;
                0 == b.activeAnimations.length && b.registered && (b.registered = !1, c.Ticker.getInstance().unregister(b.onEnterFrame, null))
            };
            b.currentTime = 0;
            b.TIMER_RESOLUTION = 1E3 / 60;
            b.activeAnimations = [];
            b.currentIntervalIndex = -1;
            return b
        }();
        e.Animation = f;
        f.prototype.__class__ = "egret.gui.Animation"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._maximum = 100;
                this.maxChanged = !1;
                this._minimum = 0;
                this.minChanged = !1;
                this._stepSize = 1;
                this.stepSizeChanged = !1;
                this._changedValue = this._value = 0;
                this.valueChanged = !1;
                this._snapInterval = 1;
                this._explicitSnapInterval = this.snapIntervalChanged = !1
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "maximum", {
                get: function() {
                    return this._maximum
                },
                set: function(d) {
                    this._setMaximun(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setMaximun = function(d) {
                d != this._maximum && (this._maximum = d, this.maxChanged = !0, this.invalidateProperties())
            };
            Object.defineProperty(a.prototype, "minimum", {
                get: function() {
                    return this._minimum
                },
                set: function(d) {
                    this._setMinimun(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setMinimun = function(d) {
                d != this._minimum && (this._minimum = d, this.minChanged = !0, this.invalidateProperties())
            };
            Object.defineProperty(a.prototype, "stepSize", {
                get: function() {
                    return this._stepSize
                },
                set: function(d) {
                    d != this._stepSize && (this._stepSize = d, this.stepSizeChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "value", {
                get: function() {
                    return this._getValue()
                },
                set: function(d) {
                    this._setValue(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setValue = function(d) {
                d != this.value && (this._changedValue = d, this.valueChanged = !0, this.invalidateProperties())
            };
            a.prototype._getValue = function() {
                return this.valueChanged ? this._changedValue : this._value
            };
            Object.defineProperty(a.prototype, "snapInterval", {
                get: function() {
                    return this._snapInterval
                },
                set: function(d) {
                    this._explicitSnapInterval = !0;
                    d != this._snapInterval && (isNaN(d) ? (this._snapInterval = 1, this._explicitSnapInterval = !1) : this._snapInterval = d, this.stepSizeChanged = this.snapIntervalChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.commitProperties = function() {
                b.prototype.commitProperties.call(this);
                this.minimum > this.maximum && (this.maxChanged ? this._maximum = this._minimum : this._minimum = this._maximum);
                if (this.valueChanged || this.maxChanged || this.minChanged || this.snapIntervalChanged) {
                    var d = this.valueChanged ? this._changedValue : this._value;
                    this.snapIntervalChanged = this.minChanged = this.maxChanged = this.valueChanged = !1;
                    this.setValue(this.nearestValidValue(d, this.snapInterval))
                }
                this.stepSizeChanged && (this._explicitSnapInterval ? this._stepSize = this.nearestValidSize(this._stepSize) : (this._snapInterval = this._stepSize, this.setValue(this.nearestValidValue(this._value, this.snapInterval))), this.stepSizeChanged = !1)
            };
            a.prototype.nearestValidSize = function(d) {
                var a = this.snapInterval;
                if (0 == a) return d;
                d = Math.round(d / a) * a;
                return Math.abs(d) < a ? a : d
            };
            a.prototype.nearestValidValue = function(d, a) {
                if (0 == a) return Math.max(this.minimum, Math.min(this.maximum, d));
                var b = this.maximum - this.minimum,
                    c = 1;
                d -= this.minimum;
                a != Math.round(a) && (c = (1 + a).toString().split("."), c = Math.pow(10, c[1].length), b *= c, d = Math.round(d * c), a = Math.round(a * c));
                var e = Math.max(0, Math.floor(d / a) * a),
                    b = Math.min(b, Math.floor((d + a) / a) * a);
                return (d - e >= (b - e) / 2 ? b : e) / c + this.minimum
            };
            a.prototype.setValue = function(d) {
                this._value != d && (isNaN(d) && (d = 0), !isNaN(this.maximum) && !isNaN(this.minimum) && this.maximum > this.minimum ? this._value = Math.min(this.maximum, Math.max(this.minimum, d)) : this._value = d, this.valueChanged = !1)
            };
            a.prototype.changeValueByStep = function(d) {
                void 0 === d && (d = !0);
                0 != this.stepSize && this.setValue(this.nearestValidValue(d ? this.value + this.stepSize : this.value - this.stepSize, this.snapInterval))
            };
            return a
        }(c.SkinnableComponent);
        c.Range = f;
        f.prototype.__class__ = "egret.gui.Range"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._slideDuration = 300;
                this.needUpdateValue = !1;
                this.addEventListener(c.Event.ADDED_TO_STAGE, this.addedToStageHandler, this);
                this.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.mouseDownHandler, this)
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "slideDuration", {
                get: function() {
                    return this._slideDuration
                },
                set: function(d) {
                    this._slideDuration = d
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "maximum", {
                get: function() {
                    return this._maximum
                },
                set: function(d) {
                    d != this._maximum && (this._setMaximun(d), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "minimum", {
                get: function() {
                    return this._minimum
                },
                set: function(d) {
                    d != this._minimum && (this._setMinimun(d), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "value", {
                get: function() {
                    return this._getValue()
                },
                set: function(d) {
                    d != this._getValue() && (this._setValue(d), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setValue = function(d) {
                b.prototype.setValue.call(this, d);
                this.invalidateDisplayList()
            };
            a.prototype.pointToValue = function(d, a) {
                return this.minimum
            };
            a.prototype.changeValueByStep = function(d) {
                void 0 === d && (d = !0);
                var a = this.value;
                b.prototype.changeValueByStep.call(this, d);
                this.value != a && this.dispatchEventWith(c.Event.CHANGE)
            };
            a.prototype.partAdded = function(d, a) {
                b.prototype.partAdded.call(this, d, a);
                a == this.thumb ? (this.thumb.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.addEventListener(e.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.addEventListener(e.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this), this.thumb.stickyHighlighting = !0) : a == this.track && (this.track.addEventListener(c.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.addEventListener(e.ResizeEvent.RESIZE, this.track_resizeHandler, this))
            };
            a.prototype.partRemoved = function(d, a) {
                b.prototype.partRemoved.call(this, d, a);
                a == this.thumb ? (this.thumb.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.removeEventListener(e.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.removeEventListener(e.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)) : a == this.track && (this.track.removeEventListener(c.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.removeEventListener(e.ResizeEvent.RESIZE, this.track_resizeHandler, this))
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, a);
                this.updateSkinDisplayList()
            };
            a.prototype.updateSkinDisplayList = function() {};
            a.prototype.addedToStageHandler = function(d) {
                this.updateSkinDisplayList()
            };
            a.prototype.track_resizeHandler = function(d) {
                this.updateSkinDisplayList()
            };
            a.prototype.thumb_resizeHandler = function(d) {
                this.updateSkinDisplayList()
            };
            a.prototype.thumb_updateCompleteHandler = function(d) {
                this.updateSkinDisplayList();
                this.thumb.removeEventListener(e.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)
            };
            a.prototype.thumb_mouseDownHandler = function(d) {
                e.UIGlobals.stage.addEventListener(c.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
                e.UIGlobals.stage.addEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
                e.UIGlobals.stage.addEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
                this.addEventListener(c.Event.ENTER_FRAME, this.onEnterFrame, this);
                d = this.thumb.globalToLocal(d.stageX, d.stageY, c.Point.identity);
                this._clickOffsetX = d.x;
                this._clickOffsetY = d.y;
                e.TrackBaseEvent.dispatchTrackBaseEvent(this, e.TrackBaseEvent.THUMB_PRESS);
                e.UIEvent.dispatchUIEvent(this, e.UIEvent.CHANGE_START)
            };
            a.prototype.onEnterFrame = function(d) {
                this.needUpdateValue && this.track && (this.updateWhenMouseMove(), this.needUpdateValue = !1)
            };
            a.prototype.updateWhenMouseMove = function() {
                if (this.track) {
                    var d = this.track.globalToLocal(this._moveStageX, this._moveStageY, c.Point.identity),
                        d = this.pointToValue(d.x - this._clickOffsetX, d.y - this._clickOffsetY),
                        d = this.nearestValidValue(d, this.snapInterval);
                    d != this.value && (this.setValue(d), this.validateDisplayList(), e.TrackBaseEvent.dispatchTrackBaseEvent(this, e.TrackBaseEvent.THUMB_DRAG), this.dispatchEventWith(c.Event.CHANGE))
                }
            };
            a.prototype.stage_mouseMoveHandler = function(d) {
                this._moveStageX = d.stageX;
                this._moveStageY = d.stageY;
                this.needUpdateValue || (this.needUpdateValue = !0)
            };
            a.prototype.stage_mouseUpHandler = function(d) {
                e.UIGlobals.stage.removeEventListener(c.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
                e.UIGlobals.stage.removeEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
                e.UIGlobals.stage.removeEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
                this.removeEventListener(c.Event.ENTER_FRAME, this.updateWhenMouseMove, this);
                this.needUpdateValue && (this.updateWhenMouseMove(), this.needUpdateValue = !1);
                e.TrackBaseEvent.dispatchTrackBaseEvent(this, e.TrackBaseEvent.THUMB_RELEASE);
                e.UIEvent.dispatchUIEvent(this, e.UIEvent.CHANGE_END)
            };
            a.prototype.track_mouseDownHandler = function(d) {};
            a.prototype.mouseDownHandler = function(d) {
                e.UIGlobals.stage.addEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
                e.UIGlobals.stage.addEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
                this.mouseDownTarget = d.target
            };
            a.prototype.stage_mouseUpSomewhereHandler = function(d) {
                e.UIGlobals.stage.removeEventListener(c.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
                e.UIGlobals.stage.removeEventListener(c.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
                if (this.mouseDownTarget != d.target && d instanceof c.TouchEvent && this.contains(d.target)) {
                    var a = d.target.localToGlobal(d.localX, d.localY);
                    c.TouchEvent.dispatchTouchEvent(this, c.TouchEvent.TOUCH_TAP, d.touchPointID, a.x, a.y, d.ctrlKey, d.altKey, d.shiftKey, d.touchDown)
                }
                this.mouseDownTarget = null
            };
            return a
        }(e.Range);
        e.TrackBase = f;
        f.prototype.__class__ = "egret.gui.TrackBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._showTrackHighlight = !0;
                this._pendingValue = 0;
                this._liveDragging = !0;
                this.maximum = 10
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "showTrackHighlight", {
                get: function() {
                    return this._showTrackHighlight
                },
                set: function(d) {
                    this._showTrackHighlight != d && (this._showTrackHighlight = d, this.trackHighlight && (this.trackHighlight.visible = d), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "pendingValue", {
                get: function() {
                    return this._pendingValue
                },
                set: function(d) {
                    d != this._pendingValue && (this._pendingValue = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setValue = function(d) {
                this._pendingValue = d;
                b.prototype.setValue.call(this, d)
            };
            a.prototype._animationUpdateHandler = function(d) {
                this.pendingValue = d.currentValue.value
            };
            a.prototype.animationEndHandler = function(d) {
                this.setValue(this.slideToValue);
                this.dispatchEventWith(c.Event.CHANGE);
                e.UIEvent.dispatchUIEvent(this, e.UIEvent.CHANGE_END)
            };
            a.prototype.stopAnimation = function() {
                this.animator.stop();
                this.setValue(this.nearestValidValue(this.pendingValue, this.snapInterval));
                this.dispatchEventWith(c.Event.CHANGE);
                e.UIEvent.dispatchUIEvent(this, e.UIEvent.CHANGE_END)
            };
            a.prototype.thumb_mouseDownHandler = function(d) {
                this.animator && this.animator.isPlaying && this.stopAnimation();
                b.prototype.thumb_mouseDownHandler.call(this, d)
            };
            Object.defineProperty(a.prototype, "liveDragging", {
                get: function() {
                    return this._liveDragging
                },
                set: function(d) {
                    this._liveDragging = d
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.updateWhenMouseMove = function() {
                if (this.track) {
                    var d = this.track.globalToLocal(this._moveStageX, this._moveStageY, c.Point.identity),
                        d = this.pointToValue(d.x - this._clickOffsetX, d.y - this._clickOffsetY),
                        d = this.nearestValidValue(d, this.snapInterval);
                    d != this.pendingValue && (e.TrackBaseEvent.dispatchTrackBaseEvent(this, e.TrackBaseEvent.THUMB_DRAG), !0 == this.liveDragging ? (this.setValue(d), this.dispatchEventWith(c.Event.CHANGE)) : this.pendingValue = d)
                }
            };
            a.prototype.stage_mouseUpHandler = function(d) {
                b.prototype.stage_mouseUpHandler.call(this, d);
                !1 == this.liveDragging && this.value != this.pendingValue && (this.setValue(this.pendingValue), this.dispatchEventWith(c.Event.CHANGE))
            };
            a.prototype.track_mouseDownHandler = function(d) {
                this.enabled && (d = this.track.globalToLocal(d.stageX - (this.thumb ? this.thumb.width : 0) / 2, d.stageY - (this.thumb ? this.thumb.height : 0) / 2, c.Point.identity), d = this.pointToValue(d.x, d.y), d = this.nearestValidValue(d, this.snapInterval), d != this.pendingValue && (0 != this.slideDuration ? (this.animator || (this.animator = new e.Animation(this._animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler), this.animator.isPlaying && this.stopAnimation(), this.slideToValue = d, this.animator.duration = this.slideDuration * (Math.abs(this.pendingValue - this.slideToValue) / (this.maximum - this.minimum)), this.animator.motionPaths = [{
                    prop: "value",
                    from: this.pendingValue,
                    to: this.slideToValue
                }], e.UIEvent.dispatchUIEvent(this, e.UIEvent.CHANGE_START), this.animator.play()) : (this.setValue(d), this.dispatchEventWith(c.Event.CHANGE))))
            };
            a.prototype.partAdded = function(d, a) {
                b.prototype.partAdded.call(this, d, a);
                a == this.trackHighlight && (this.trackHighlight.touchEnabled = !1, this.trackHighlight instanceof c.DisplayObjectContainer && (this.trackHighlight.touchChildren = !1), this.trackHighlight.visible = this._showTrackHighlight)
            };
            return a
        }(e.TrackBase);
        e.SliderBase = f;
        f.prototype.__class__ = "egret.gui.SliderBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._maxDisplayedLines = 0;
                this.lastUnscaledWidth = NaN;
                this.strokeColorChanged = !1;
                this._stroke = this._strokeColor = 0;
                this.strokeChanged = !1;
                this._padding = 0;
                this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
                this.addEventListener(c.UIEvent.UPDATE_COMPLETE, this.updateCompleteHandler, this)
            }
            __extends(a, b);
            a.prototype.updateCompleteHandler = function(d) {
                this.lastUnscaledWidth = NaN
            };
            Object.defineProperty(a.prototype, "maxDisplayedLines", {
                get: function() {
                    return this._maxDisplayedLines
                },
                set: function(d) {
                    this._maxDisplayedLines != d && (this._maxDisplayedLines = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
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
                this._strokeColor != d && (this._strokeColor = d, this.strokeColorChanged = !0, this.invalidateProperties())
            };
            Object.defineProperty(a.prototype, "stroke", {
                get: function() {
                    return this._stroke
                },
                set: function(d) {
                    this._stroke != d && (this._stroke = d, this.strokeChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "padding", {
                get: function() {
                    return this._padding
                },
                set: function(d) {
                    this._padding != d && (this._padding = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "paddingLeft", {
                get: function() {
                    return this._paddingLeft
                },
                set: function(d) {
                    this._paddingLeft != d && (this._paddingLeft = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "paddingRight", {
                get: function() {
                    return this._paddingRight
                },
                set: function(d) {
                    this._paddingRight != d && (this._paddingRight = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "paddingTop", {
                get: function() {
                    return this._paddingTop
                },
                set: function(d) {
                    this._paddingTop != d && (this._paddingTop = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "paddingBottom", {
                get: function() {
                    return this._paddingBottom
                },
                set: function(d) {
                    this._paddingBottom != d && (this._paddingBottom = d, this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.commitProperties = function() {
                b.prototype.commitProperties.call(this);
                this.strokeColorChanged && (this._textField.strokeColor = this._strokeColor, this.strokeColorChanged = !1);
                this.strokeChanged && (this._textField.stroke = this._stroke, this.strokeChanged = !1)
            };
            a.prototype.measure = function() {
                this._invalidatePropertiesFlag && this.validateProperties();
                if (this.isSpecialCase())
                    if (isNaN(this.lastUnscaledWidth)) this._oldPreferHeight = this._oldPreferWidth = NaN;
                    else {
                        this.measureUsingWidth(this.lastUnscaledWidth);
                        return
                    }
                var d;
                isNaN(this.explicitWidth) ? 1E4 != this.maxWidth && (d = this.maxWidth) : d = this.explicitWidth;
                this.measureUsingWidth(d)
            };
            a.prototype.isSpecialCase = function() {
                return 1 != this._maxDisplayedLines && (!isNaN(this.percentWidth) || !isNaN(this.left) && !isNaN(this.right)) && isNaN(this.explicitHeight) && isNaN(this.percentHeight)
            };
            a.prototype.measureUsingWidth = function(d) {
                this._textChanged && (this._textField.text = this._text);
                this._textFlowChanged && (this._textField.textFlow = this._textFlow);
                var a = isNaN(this._padding) ? 0 : this._padding,
                    b = isNaN(this._paddingLeft) ? a : this._paddingLeft,
                    c = isNaN(this._paddingRight) ? a : this._paddingRight,
                    e = isNaN(this._paddingTop) ? a : this._paddingTop,
                    a = isNaN(this._paddingBottom) ? a : this._paddingBottom;
                this._textField.width = NaN;
                this._textField.height = NaN;
                isNaN(d) || (this._textField.width = d - b - c);
                this.measuredWidth = Math.ceil(this._textField.measuredWidth);
                this.measuredHeight = Math.ceil(this._textField.measuredHeight);
                0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (d = this._textField.lineSpacing, this.measuredHeight = (this._textField.size + d) * this._maxDisplayedLines - d);
                this.measuredWidth += b + c;
                this.measuredHeight += e + a
            };
            a.prototype.updateDisplayList = function(d, a) {
                this.$updateDisplayList(d, a);
                var b = isNaN(this._padding) ? 0 : this._padding,
                    c = isNaN(this._paddingLeft) ? b : this._paddingLeft,
                    e = isNaN(this._paddingRight) ? b : this._paddingRight,
                    f = isNaN(this._paddingTop) ? b : this._paddingTop,
                    b = isNaN(this._paddingBottom) ? b : this._paddingBottom;
                this._textField.x = c;
                this._textField.y = f;
                if (this.isSpecialCase()) {
                    var k = isNaN(this.lastUnscaledWidth) || this.lastUnscaledWidth != d;
                    this.lastUnscaledWidth = d;
                    if (k) {
                        this._oldPreferHeight = this._oldPreferWidth = NaN;
                        this.invalidateSize();
                        return
                    }
                }
                this._invalidateSizeFlag && this.validateSize();
                this._textField.visible || (this._textField.visible = !0);
                this._textField.width = d - c - e;
                c = a - f - b;
                this._textField.height = c;
                0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (e = this._textField.lineSpacing, this._textField.height = Math.min(c, (this._textField.size + e) * this._maxDisplayedLines - e))
            };
            return a
        }(c.TextBase);
        c.Label = f;
        f.prototype.__class__ = "egret.gui.Label"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._fillColor = 16777215;
                this._fillAlpha = 1;
                this._strokeColor = 4473924;
                this._strokeAlpha = 0;
                this._strokeWeight = 1;
                this.touchChildren = !1
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "graphics", {
                get: function() {
                    this._graphics || (this._graphics = new c.Graphics);
                    return this._graphics
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._render = function(d) {
                this._graphics && this._graphics._draw(d);
                b.prototype._render.call(this, d)
            };
            Object.defineProperty(a.prototype, "fillColor", {
                get: function() {
                    return this._fillColor
                },
                set: function(d) {
                    this._fillColor != d && (this._fillColor = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "fillAlpha", {
                get: function() {
                    return this._fillAlpha
                },
                set: function(d) {
                    this._fillAlpha != d && (this._fillAlpha = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "strokeColor", {
                get: function() {
                    return this._strokeColor
                },
                set: function(d) {
                    this._strokeColor != d && (this._strokeColor = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "strokeAlpha", {
                get: function() {
                    return this._strokeAlpha
                },
                set: function(d) {
                    this._strokeAlpha != d && (this._strokeAlpha = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "strokeWeight", {
                get: function() {
                    return this._strokeWeight
                },
                set: function(d) {
                    this._strokeWeight != d && (this._strokeWeight = d, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._measureBounds = function() {
                var d = b.prototype._measureBounds.call(this),
                    a = this.width,
                    c = this.height;
                0 < d.x && (d.x = 0);
                0 < d.y && (d.y = 0);
                0 + a > d.right && (d.right = 0 + a);
                0 + c > d.bottom && (d.bottom = 0 + c);
                return d
            };
            a.prototype.updateDisplayList = function(d, a) {
                b.prototype.updateDisplayList.call(this, d, d);
                var c = this.graphics;
                c.clear();
                c.beginFill(this._fillColor, this._fillAlpha);
                0 < this._strokeAlpha && c.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, !0, "normal", "square", "miter");
                c.drawRect(0, 0, d, a);
                c.endFill()
            };
            return a
        }(e.UIComponent);
        e.Rect = f;
        f.prototype.__class__ = "egret.gui.Rect"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "icon", {
                get: function() {
                    return this._getIcon()
                },
                set: function(d) {
                    this._setIcon(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._getIcon = function() {
                return this.iconDisplay ? this.iconDisplay.source : this._icon
            };
            a.prototype._setIcon = function(d) {
                this._icon = d;
                this.iconDisplay && (this.iconDisplay.source = d)
            };
            a.prototype.partAdded = function(d, a) {
                b.prototype.partAdded.call(this, d, a);
                a == this.iconDisplay && (this.iconDisplay.source = this._icon)
            };
            return a
        }(c.ButtonBase);
        c.Button = f;
        f.prototype.__class__ = "egret.gui.Button"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "icon", {
                get: function() {
                    return this._getIcon()
                },
                set: function(d) {
                    this._setIcon(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._getIcon = function() {
                return this.iconDisplay ? this.iconDisplay.source : this._icon
            };
            a.prototype._setIcon = function(d) {
                this._icon = d;
                this.iconDisplay && (this.iconDisplay.source = d)
            };
            a.prototype.partAdded = function(d, a) {
                b.prototype.partAdded.call(this, d, a);
                a == this.iconDisplay && (this.iconDisplay.source = this._icon)
            };
            return a
        }(c.ToggleButtonBase);
        c.ToggleButton = f;
        f.prototype.__class__ = "egret.gui.ToggleButton"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.elementsContentChanged = this.createChildrenCalled = !1;
                this._elementsContent = []
            }
            __extends(a, b);
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                this.createChildrenCalled = !0;
                this.elementsContentChanged && (this.elementsContentChanged = !1, this.setElementsContent(this._elementsContent))
            };
            a.prototype._getElementsContent = function() {
                return this._elementsContent
            };
            Object.defineProperty(a.prototype, "elementsContent", {
                set: function(d) {
                    null == d && (d = []);
                    if (d != this._elementsContent)
                        if (this.createChildrenCalled) this.setElementsContent(d);
                        else {
                            this.elementsContentChanged = !0;
                            for (var a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
                            this._elementsContent = d
                        }
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setElementsContent = function(d) {
                var a;
                for (a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
                this._elementsContent = d.concat();
                d = this._elementsContent.length;
                for (a = 0; a < d; a++) {
                    var b = this._elementsContent[a];
                    b.parent && "removeElement" in b.parent ? b.parent.removeElement(b) : b.owner && "removeElement" in b.owner && b.owner.removeElement(b);
                    this._elementAdded(b, a)
                }
            };
            Object.defineProperty(a.prototype, "numElements", {
                get: function() {
                    return this._elementsContent.length
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.getElementAt = function(d) {
                this.checkForRangeError(d);
                return this._elementsContent[d]
            };
            a.prototype.checkForRangeError = function(d, a) {
                void 0 === a && (a = !1);
                var b = this._elementsContent.length - 1;
                a && b++;
                if (0 > d || d > b) throw new RangeError('索引:"' + d + '"超出可视元素索引范围');
            };
            a.prototype.addElement = function(d) {
                var a = this.numElements;
                d.parent == this && (a = this.numElements - 1);
                return this.addElementAt(d, a)
            };
            a.prototype.addElementAt = function(d, a) {
                if (d == this) return d;
                this.checkForRangeError(a, !0);
                var b = d.owner;
                if (b == this || d.parent == this) return this.setElementIndex(d, a), d;
                b && "removeElement" in b && d.owner.removeElement(d);
                this._elementsContent.splice(a, 0, d);
                this.elementsContentChanged || this._elementAdded(d, a);
                return d
            };
            a.prototype.removeElement = function(d) {
                return this.removeElementAt(this.getElementIndex(d))
            };
            a.prototype.removeElementAt = function(d) {
                this.checkForRangeError(d);
                var a = this._elementsContent[d];
                this.elementsContentChanged || this._elementRemoved(a, d);
                this._elementsContent.splice(d, 1);
                return a
            };
            a.prototype.removeAllElements = function() {
                for (var d = this.numElements - 1; 0 <= d; d--) this.removeElementAt(d)
            };
            a.prototype.getElementIndex = function(d) {
                return this._elementsContent.indexOf(d)
            };
            a.prototype.setElementIndex = function(d, a) {
                this.checkForRangeError(a);
                var b = this.getElementIndex(d); - 1 != b && b != a && (this.elementsContentChanged || this._elementRemoved(d, b, !1), this._elementsContent.splice(b, 1), this._elementsContent.splice(a, 0, d), this.elementsContentChanged || this._elementAdded(d, a, !1))
            };
            a.prototype.swapElements = function(d, a) {
                this.swapElementsAt(this.getElementIndex(d), this.getElementIndex(a))
            };
            a.prototype.swapElementsAt = function(d, a) {
                this.checkForRangeError(d);
                this.checkForRangeError(a);
                if (d > a) {
                    var b = a;
                    a = d;
                    d = b
                } else if (d == a) return;
                var b = this._elementsContent,
                    c = b[d],
                    e = b[a];
                this.elementsContentChanged || (this._elementRemoved(c, d, !1), this._elementRemoved(e, a, !1));
                b[d] = e;
                b[a] = c;
                this.elementsContentChanged || (this._elementAdded(e, d, !1), this._elementAdded(c, a, !1))
            };
            a.prototype._elementAdded = function(d, a, b) {
                void 0 === b && (b = !0);
                d instanceof c.DisplayObject && this._addToDisplayListAt(d, a, b);
                b && this.hasEventListener(e.ElementExistenceEvent.ELEMENT_ADD) && e.ElementExistenceEvent.dispatchElementExistenceEvent(this, e.ElementExistenceEvent.ELEMENT_ADD, d, a);
                this.invalidateSize();
                this.invalidateDisplayList()
            };
            a.prototype._elementRemoved = function(d, a, b) {
                void 0 === b && (b = !0);
                b && this.hasEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE) && e.ElementExistenceEvent.dispatchElementExistenceEvent(this, e.ElementExistenceEvent.ELEMENT_REMOVE, d, a);
                d instanceof c.DisplayObject && d.parent == this && this._removeFromDisplayList(d, b);
                this.invalidateSize();
                this.invalidateDisplayList()
            };
            a.prototype.addChild = function(d) {
                throw Error("addChild()" + a.errorStr + "addElement()代替");
            };
            a.prototype.addChildAt = function(d, b) {
                throw Error("addChildAt()" + a.errorStr + "addElementAt()代替");
            };
            a.prototype.removeChild = function(d) {
                throw Error("removeChild()" + a.errorStr + "removeElement()代替");
            };
            a.prototype.removeChildAt = function(d) {
                throw Error("removeChildAt()" + a.errorStr + "removeElementAt()代替");
            };
            a.prototype.setChildIndex = function(d, b) {
                throw Error("setChildIndex()" + a.errorStr + "setElementIndex()代替");
            };
            a.prototype.swapChildren = function(d, b) {
                throw Error("swapChildren()" + a.errorStr + "swapElements()代替");
            };
            a.prototype.swapChildrenAt = function(d, b) {
                throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()代替");
            };
            a.errorStr = "在此组件中不可用，若此组件为容器类，请使用";
            return a
        }(e.GroupBase);
        e.Group = f;
        f.prototype.__class__ = "egret.gui.Group"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.maxWidth = 1E4;
                this.minWidth = 0;
                this.maxHeight = 1E4;
                this.minHeight = 0;
                this._hasWidthSet = !1;
                this._width = NaN;
                this._hasHeightSet = !1;
                this._height = NaN;
                this.measuredHeight = this.measuredWidth = 0;
                this._initialized = !1;
                this._elementsContent = [];
                this._states = [];
                this.initialized = !1;
                this.skinLayout = new e.SkinBasicLayout;
                this.skinLayout.target = this
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(d) {
                    this._width != d && (this._width = d, this._hasWidthSet = c.NumberUtils.isNumber(d))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(d) {
                    this._height != d && (this._height = d, this._hasHeightSet = c.NumberUtils.isNumber(d))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "preferredWidth", {
                get: function() {
                    return this._hasWidthSet ? this._width : this.measuredWidth
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "preferredHeight", {
                get: function() {
                    return this._hasHeightSet ? this._height : this.measuredHeight
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.createChildren = function() {};
            Object.defineProperty(a.prototype, "hostComponent", {
                get: function() {
                    return this._hostComponent
                },
                set: function(d) {
                    this._setHostComponent(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setHostComponent = function(d) {
                if (this._hostComponent != d) {
                    var a;
                    if (this._hostComponent)
                        for (a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
                    this._hostComponent = d;
                    this._initialized || (this._initialized = !0, this.createChildren());
                    if (this._hostComponent) {
                        d = this._elementsContent.length;
                        for (a = 0; a < d; a++) this._elementAdded(this._elementsContent[a], a);
                        this.initializeStates();
                        this.currentStateChanged && this.commitCurrentState()
                    }
                }
            };
            a.prototype._getElementsContent = function() {
                return this._elementsContent
            };
            Object.defineProperty(a.prototype, "elementsContent", {
                set: function(d) {
                    null == d && (d = []);
                    if (d != this._elementsContent)
                        if (this._hostComponent) {
                            var a;
                            for (a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
                            this._elementsContent = d.concat();
                            d = this._elementsContent.length;
                            for (a = 0; a < d; a++) {
                                var b = this._elementsContent[a];
                                b.parent && "removeElement" in b.parent ? b.parent.removeElement(b) : b.owner && "removeElement" in b.owner && b.owner.removeElement(b);
                                this._elementAdded(b, a)
                            }
                        } else this._elementsContent = d.concat()
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "numElements", {
                get: function() {
                    return this._elementsContent.length
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.getElementAt = function(d) {
                this.checkForRangeError(d);
                return this._elementsContent[d]
            };
            a.prototype.checkForRangeError = function(d, a) {
                void 0 === a && (a = !1);
                var b = this._elementsContent.length - 1;
                a && b++;
                if (0 > d || d > b) throw new RangeError('索引:"' + d + '"超出可视元素索引范围');
            };
            a.prototype.addElement = function(d) {
                var a = this.numElements;
                d.owner == this && (a = this.numElements - 1);
                return this.addElementAt(d, a)
            };
            a.prototype.addElementAt = function(d, a) {
                this.checkForRangeError(a, !0);
                var b = d.owner;
                if (b == this) return this.setElementIndex(d, a), d;
                b && "removeElement" in b && b.removeElement(d);
                this._elementsContent.splice(a, 0, d);
                this._hostComponent ? this._elementAdded(d, a) : d.ownerChanged(this);
                return d
            };
            a.prototype.removeElement = function(d) {
                return this.removeElementAt(this.getElementIndex(d))
            };
            a.prototype.removeElementAt = function(d) {
                this.checkForRangeError(d);
                var a = this._elementsContent[d];
                this._hostComponent ? this._elementRemoved(a, d) : a.ownerChanged(null);
                this._elementsContent.splice(d, 1);
                return a
            };
            a.prototype.getElementIndex = function(d) {
                return this._elementsContent.indexOf(d)
            };
            a.prototype.setElementIndex = function(d, a) {
                this.checkForRangeError(a);
                var b = this.getElementIndex(d); - 1 != b && b != a && (this._hostComponent && this._elementRemoved(d, b, !1), this._elementsContent.splice(b, 1), this._elementsContent.splice(a, 0, d), this._hostComponent && this._elementAdded(d, a, !1))
            };
            a.prototype._elementAdded = function(d, a, b) {
                void 0 === b && (b = !0);
                d.ownerChanged(this);
                d instanceof
                c.DisplayObject && this._hostComponent._addToDisplayListAt(d, a, b);
                b && this.hasEventListener(e.ElementExistenceEvent.ELEMENT_ADD) && e.ElementExistenceEvent.dispatchElementExistenceEvent(this, e.ElementExistenceEvent.ELEMENT_ADD, d, a);
                this._hostComponent.invalidateSize();
                this._hostComponent.invalidateDisplayList()
            };
            a.prototype._elementRemoved = function(d, a, b) {
                void 0 === b && (b = !0);
                b && this.hasEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE) && e.ElementExistenceEvent.dispatchElementExistenceEvent(this, e.ElementExistenceEvent.ELEMENT_REMOVE, d, a);
                d instanceof c.DisplayObject && d.parent == this._hostComponent && this._hostComponent._removeFromDisplayList(d, b);
                d.ownerChanged(null);
                this._hostComponent.invalidateSize();
                this._hostComponent.invalidateDisplayList()
            };
            a.prototype.measure = function() {
                this.skinLayout.measure();
                this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth);
                this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth);
                this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight);
                this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight)
            };
            a.prototype.updateDisplayList = function(d, a) {
                this.skinLayout.updateDisplayList(d, a)
            };
            Object.defineProperty(a.prototype, "states", {
                get: function() {
                    return this._states
                },
                set: function(d) {
                    this._setStates(d)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype._setStates = function(d) {
                d || (d = []);
                if ("string" == typeof d[0])
                    for (var a = d.length, b = 0; b < a; b++) {
                        var c = new e.State(d[b], []);
                        d[b] = c
                    }
                this._states = d;
                this.currentStateChanged = !0;
                this.requestedCurrentState = this._currentState;
                this.hasState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState())
            };
            Object.defineProperty(a.prototype, "currentState", {
                get: function() {
                    return this.currentStateChanged ? this.requestedCurrentState : this._currentState ? this._currentState : this.getDefaultState()
                },
                set: function(d) {
                    d || (d = this.getDefaultState());
                    d != this.currentState && d && this.currentState && (this.requestedCurrentState = d, this.currentStateChanged = !0, this._hostComponent && this.commitCurrentState())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.hasState = function(d) {
                return null != this.getState(d)
            };
            a.prototype.getDefaultState = function() {
                return 0 < this._states.length ? this._states[0].name : null
            };
            a.prototype.commitCurrentState = function() {
                if (this.currentStateChanged) {
                    this.currentStateChanged = !1;
                    this.getState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState());
                    var d = this._currentState ? this._currentState : "";
                    this.hasEventListener(e.StateChangeEvent.CURRENT_STATE_CHANGING) && e.StateChangeEvent.dispatchStateChangeEvent(this, e.StateChangeEvent.CURRENT_STATE_CHANGING, d, this.requestedCurrentState ? this.requestedCurrentState : "");
                    this.removeState(this._currentState);
                    (this._currentState = this.requestedCurrentState) && this.applyState(this._currentState);
                    this.hasEventListener(e.StateChangeEvent.CURRENT_STATE_CHANGE) && e.StateChangeEvent.dispatchStateChangeEvent(this, e.StateChangeEvent.CURRENT_STATE_CHANGE, d, this._currentState ? this._currentState : "")
                }
            };
            a.prototype.getState = function(d) {
                if (!d) return null;
                for (var a = this._states, b = a.length, c = 0; c < b; c++) {
                    var e = a[c];
                    if (e.name == d) return e
                }
                return null
            };
            a.prototype.removeState = function(d) {
                if (d = this.getState(d)) {
                    d = d.overrides;
                    for (var a = d.length - 1; 0 <= a; a--) d[a].remove(this)
                }
            };
            a.prototype.applyState = function(a) {
                if (a = this.getState(a)) {
                    a = a.overrides;
                    for (var b = a.length, c = 0; c < b; c++) a[c].apply(this)
                }
            };
            a.prototype.initializeStates = function() {
                if (!this.initialized) {
                    this.initialized = !0;
                    for (var a = this._states, b = a.length, c = 0; c < b; c++) a[c].initialize(this)
                }
            };
            return a
        }(c.EventDispatcher);
        e.Skin = f;
        f.prototype.__class__ = "egret.gui.Skin"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, e, f) {
                void 0 === a && (a = null);
                void 0 === e && (e = null);
                void 0 === f && (f = null);
                b.call(this);
                this.labelDisplay = new c.gui.Label;
                this.iconDisplay = new c.gui.UIAsset;
                var q = {};
                q.up = a;
                q.down = e;
                q.disabled = f;
                this.stateMap = q;
                this._setStates(["up", "down", "disabled"])
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.createChildren = function() {
                b.prototype.createChildren.call(this);
                var a = new e.UIAsset;
                a.left = a.top = a.bottom = a.right = 0;
                this.addElement(a);
                this.backgroundAsset = a;
                this.iconDisplay.includeInLayout = !1;
                this.addElement(this.iconDisplay);
                this.labelDisplay.includeInLayout = !1;
                this.labelDisplay.paddingLeft = 5;
                this.labelDisplay.paddingRight = 5;
                this.addElement(this.labelDisplay)
            };
            a.prototype.commitCurrentState = function() {
                b.prototype.commitCurrentState.call(this);
                var a = this.currentState;
                this.stateMap[a] && (this.backgroundAsset.source = this.stateMap[a])
            };
            a.prototype.measure = function() {
                b.prototype.measure.call(this);
                var a = this.iconDisplay.preferredWidth + this.labelDisplay.preferredWidth + 20,
                    c = Math.max(this.iconDisplay.preferredHeight, this.labelDisplay.preferredHeight) + 20;
                a > this.measuredWidth && (a < this.minWidth && (a = this.minWidth), a > this.maxWidth && (a = this.maxWidth), this.measuredWidth = a);
                c > this.measuredHeight && (c < this.minHeight && (c = this.minHeight), c > this.maxHeight && (c = this.maxHeight), this.measuredHeight = c)
            };
            a.prototype.updateDisplayList = function(a, c) {
                b.prototype.updateDisplayList.call(this, a, c);
                var e = this.iconDisplay.layoutBoundsWidth,
                    f = this.labelDisplay.layoutBoundsHeight,
                    g = 0.5 * (a - e - this.labelDisplay.layoutBoundsWidth);
                this.iconDisplay.setLayoutBoundsPosition(g, 0.5 * (c - this.iconDisplay.layoutBoundsHeight));
                this.labelDisplay.setLayoutBoundsPosition(g + e, 0.5 * (c - f))
            };
            a._skinParts = ["labelDisplay", "iconDisplay"];
            return a
        }(e.Skin);
        e.ButtonSkin = f;
        f.prototype.__class__ = "egret.gui.ButtonSkin"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.useVirtualLayoutChanged = !1;
                this.rendererToClassMap = [];
                this.freeRenderers = [];
                this.dataProviderChanged = this.createNewRendererFlag = !1;
                this.recyclerDic = [];
                this.typicalItemChanged = this.virtualLayoutUnderway = this.itemRendererSkinNameChange = !1;
                this.indexToRenderer = [];
                this.renderersBeingUpdated = this.cleanFreeRenderer = !1
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "layout", {
                get: function() {
                    return this._layout
                },
                set: function(a) {
                    a != this.layout && (this.layout && (this.layout.typicalLayoutRect = null, this.layout.removeEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)), this.layout && a && this.layout.useVirtualLayout != a.useVirtualLayout && this.changeUseVirtualLayout(), this._setLayout(a), a && (a.typicalLayoutRect = this.typicalLayoutRect, a.addEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)))
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.layout_useVirtualLayoutChangedHandler = function(a) {
                this.changeUseVirtualLayout()
            };
            a.prototype.setVirtualElementIndicesInView = function(a, b) {
                if (this.layout && this.layout.useVirtualLayout) {
                    this.virtualRendererIndices = [];
                    for (var c = a; c <= b; c++) this.virtualRendererIndices.push(c);
                    for (var e in this.indexToRenderer) e = parseInt(e), -1 == this.virtualRendererIndices.indexOf(e) && this.freeRendererByIndex(e)
                }
            };
            a.prototype.getVirtualElementAt = function(a) {
                if (0 > a || a >= this.dataProvider.length) return null;
                var b = this.indexToRenderer[a];
                if (!b) {
                    var b = this.dataProvider.getItemAt(a),
                        c = this.createVirtualRenderer(a);
                    this.indexToRenderer[a] = c;
                    this.updateRenderer(c, a, b);
                    this.createNewRendererFlag && ("validateNow" in c && c.validateNow(), this.createNewRendererFlag = !1, e.RendererExistenceEvent.dispatchRendererExistenceEvent(this, e.RendererExistenceEvent.RENDERER_ADD, c, a, b));
                    b = c
                }
                return b
            };
            a.prototype.freeRendererByIndex = function(a) {
                if (this.indexToRenderer[a]) {
                    var b = this.indexToRenderer[a];
                    delete this.indexToRenderer[a];
                    b && b instanceof c.DisplayObject && this.doFreeRenderer(b)
                }
            };
            a.prototype.doFreeRenderer = function(a) {
                var b = this.rendererToClassMap[a.hashCode].hashCode;
                this.freeRenderers[b] || (this.freeRenderers[b] = []);
                this.freeRenderers[b].push(a);
                a.visible = !1
            };
            a.prototype.invalidateSize = function() {
                this.createNewRendererFlag || b.prototype.invalidateSize.call(this)
            };
            a.prototype.createVirtualRenderer = function(a) {
                a = this.dataProvider.getItemAt(a);
                a = this.itemToRendererClass(a);
                var b = a.hashCode,
                    c = this.freeRenderers;
                if (c[b] && 0 < c[b].length) return a = c[b].pop(), a.visible = !0, a;
                this.createNewRendererFlag = !0;
                return this.createOneRenderer(a)
            };
            a.prototype.createOneRenderer = function(a) {
                var b, e = a.hashCode,
                    f = this.recyclerDic[e];
                f && (b = f.pop(), 0 == f.length && delete this.recyclerDic[e]);
                b || (b = a.newInstance(), this.rendererToClassMap[b.hashCode] = a);
                if (!(b && b instanceof c.DisplayObject)) return null;
                this._itemRendererSkinName && this.setItemRenderSkinName(b);
                this._addToDisplayList(b);
                b.setLayoutBoundsSize(NaN, NaN);
                return b
            };
            a.prototype.setItemRenderSkinName = function(a) {
                a && (a ? a._skinNameExplicitlySet || (a.skinName = this._itemRendererSkinName) : a && !a.skinName && (a.skinName = this._itemRendererSkinName))
            };
            a.prototype.finishVirtualLayout = function() {
                if (this.virtualLayoutUnderway) {
                    var a = this.virtualLayoutUnderway = !1,
                        b;
                    for (b in this.freeRenderers)
                        if (0 < this.freeRenderers[b].length) {
                            a = !0;
                            break
                        }
                    a && (this.cleanTimer || (this.cleanTimer = new c.Timer(3E3, 1), this.cleanTimer.addEventListener(c.TimerEvent.TIMER, this.cleanAllFreeRenderer, this)), this.cleanTimer.reset(), this.cleanTimer.start())
                }
            };
            a.prototype.cleanAllFreeRenderer = function(a) {
                var b = this.freeRenderers,
                    c;
                for (c in b)
                    for (var e = b[c], f = e.length, h = 0; h < f; h++) a = e[h], a.visible = !0, this.recycle(a);
                this.freeRenderers = [];
                this.cleanFreeRenderer = !1
            };
            a.prototype.getElementIndicesInView = function() {
                return this.layout && this.layout.useVirtualLayout ? this.virtualRendererIndices ? this.virtualRendererIndices : [] : b.prototype.getElementIndicesInView.call(this)
            };
            a.prototype.changeUseVirtualLayout = function() {
                this.cleanFreeRenderer = this.useVirtualLayoutChanged = !0;
                this.removeDataProviderListener();
                this.invalidateProperties()
            };
            Object.defineProperty(a.prototype, "dataProvider", {
                get: function() {
                    return this._dataProvider
                },
                set: function(a) {
                    this._dataProvider != a && (this.removeDataProviderListener(), this._dataProvider = a, this.cleanFreeRenderer = this.dataProviderChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.removeDataProviderListener = function() {
                this._dataProvider && this._dataProvider.removeEventListener(e.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this)
            };
            a.prototype.onCollectionChange = function(a) {
                switch (a.kind) {
                    case e.CollectionEventKind.ADD:
                        this.itemAddedHandler(a.items, a.location);
                        break;
                    case e.CollectionEventKind.MOVE:
                        this.itemMovedHandler(a.items[0], a.location, a.oldLocation);
                        break;
                    case e.CollectionEventKind.REMOVE:
                        this.itemRemovedHandler(a.items, a.location);
                        break;
                    case e.CollectionEventKind.UPDATE:
                        this.itemUpdatedHandler(a.items[0], a.location);
                        break;
                    case e.CollectionEventKind.REPLACE:
                        this.itemRemoved(a.oldItems[0], a.location);
                        this.itemAdded(a.items[0], a.location);
                        break;
                    case e.CollectionEventKind.RESET:
                    case e.CollectionEventKind.REFRESH:
                        if (this.layout && this.layout.useVirtualLayout)
                            for (var b in this.indexToRenderer) b = parseInt(b), this.freeRendererByIndex(b);
                        this.dataProviderChanged = !0;
                        this.invalidateProperties()
                }
                this.invalidateSize();
                this.invalidateDisplayList()
            };
            a.prototype.itemAddedHandler = function(a, b) {
                for (var c = a.length, e = 0; e < c; e++) this.itemAdded(a[e], b + e);
                this.resetRenderersIndices()
            };
            a.prototype.itemMovedHandler = function(a, b, c) {
                this.itemRemoved(a, c);
                this.itemAdded(a, b);
                this.resetRenderersIndices()
            };
            a.prototype.itemRemovedHandler = function(a, b) {
                for (var c = a.length - 1; 0 <= c; c--) this.itemRemoved(a[c], b + c);
                this.resetRenderersIndices()
            };
            a.prototype.itemAdded = function(a, b) {
                this.layout && this.layout.elementAdded(b);
                if (this.layout && this.layout.useVirtualLayout) {
                    var c = this.virtualRendererIndices;
                    if (c) {
                        for (var f = c.length, g = 0; g < f; g++) {
                            var h = c[g];
                            h >= b && (c[g] = h + 1)
                        }
                        this.indexToRenderer.splice(b, 0, null)
                    }
                } else c = this.itemToRendererClass(a), c = this.createOneRenderer(c), this.indexToRenderer.splice(b, 0, c), c && (this.updateRenderer(c, b, a), e.RendererExistenceEvent.dispatchRendererExistenceEvent(this, e.RendererExistenceEvent.RENDERER_ADD, c, b, a))
            };
            a.prototype.itemRemoved = function(a, b) {
                this.layout && this.layout.elementRemoved(b);
                var f = this.virtualRendererIndices;
                if (f && 0 < f.length) {
                    for (var q = -1, g = f.length, h = 0; h < g; h++) {
                        var k = f[h];
                        k == b ? q = h : k > b && (f[h] = k - 1)
                    } - 1 != q && f.splice(q, 1)
                }
                f = this.indexToRenderer[b];
                this.indexToRenderer.length > b && this.indexToRenderer.splice(b, 1);
                e.RendererExistenceEvent.dispatchRendererExistenceEvent(this, e.RendererExistenceEvent.RENDERER_REMOVE, f, b, a);
                f && f instanceof c.DisplayObject && this.recycle(f)
            };
            a.prototype.recycle = function(a) {
                this._removeFromDisplayList(a);
                "ownerChanged" in a && a.ownerChanged(null);
                var b = this.rendererToClassMap[a.hashCode].hashCode;
                this.recyclerDic[b] || (this.recyclerDic[b] = new c.Recycler);
                this.recyclerDic[b].push(a)
            };
            a.prototype.resetRenderersIndices = function() {
                if (0 != this.indexToRenderer.length)
                    if (this.layout && this.layout.useVirtualLayout)
                        for (var a = this.virtualRendererIndices, b = a.length, c = 0; c < b; c++) {
                            var e = a[c];
                            this.resetRendererItemIndex(e)
                        } else
                            for (a = this.indexToRenderer.length, e = 0; e < a; e++) this.resetRendererItemIndex(e)
            };
            a.prototype.itemUpdatedHandler = function(a, b) {
                if (!this.renderersBeingUpdated) {
                    var c = this.indexToRenderer[b];
                    c && this.updateRenderer(c, b, a)
                }
            };
            a.prototype.resetRendererItemIndex = function(a) {
                var b = this.indexToRenderer[a];
                b && (b.itemIndex = a)
            };
            Object.defineProperty(a.prototype, "itemRenderer", {
                get: function() {
                    return this._itemRenderer
                },
                set: function(a) {
                    this._itemRenderer !== a && (this._itemRenderer = a, this.cleanFreeRenderer = this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "itemRendererSkinName", {
                get: function() {
                    return this._itemRendererSkinName
                },
                set: function(a) {
                    this._itemRendererSkinName != a && (this._itemRendererSkinName = a) && this.initialized && (this.itemRendererSkinNameChange = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "itemRendererFunction", {
                get: function() {
                    return this._itemRendererFunction
                },
                set: function(a) {
                    this._itemRendererFunction != a && (this._itemRendererFunction = a, this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.itemToRendererClass = function(d) {
                null != this._itemRendererFunction ? (d = this._itemRendererFunction(d), d || (d = this._itemRenderer)) : d = this._itemRenderer;
                return d ? d : a.defaultRendererFactory
            };
            a.prototype.createChildren = function() {
                if (!this.layout) {
                    var a = new e.VerticalLayout;
                    a.gap = 0;
                    a.horizontalAlign = c.HorizontalAlign.CONTENT_JUSTIFY;
                    this.layout = a
                }
                b.prototype.createChildren.call(this)
            };
            a.prototype.commitProperties = function() {
                if (this.itemRendererChanged || this.dataProviderChanged || this.useVirtualLayoutChanged) this.removeAllRenderers(), this.layout && this.layout.clearVirtualLayoutCache(), this.setTypicalLayoutRect(null), this.itemRendererChanged = this.useVirtualLayoutChanged = !1, this._dataProvider && this._dataProvider.addEventListener(e.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this), this.layout && this.layout.useVirtualLayout ? (this.invalidateSize(), this.invalidateDisplayList()) : this.createRenderers(), this.dataProviderChanged && (this.dataProviderChanged = !1, this.verticalScrollPosition = this.horizontalScrollPosition = 0);
                b.prototype.commitProperties.call(this);
                this.typicalItemChanged && (this.typicalItemChanged = !1, this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize()));
                if (this.itemRendererSkinNameChange) {
                    this.itemRendererSkinNameChange = !1;
                    for (var a = this.indexToRenderer.length, c = 0; c < a; c++) this.setItemRenderSkinName(this.indexToRenderer[c]);
                    var f = this.freeRenderers,
                        q;
                    for (q in f) {
                        var g = f[q];
                        if (g)
                            for (a = g.length, c = 0; c < a; c++) this.setItemRenderSkinName(g[c])
                    }
                }
            };
            a.prototype.measure = function() {
                this.layout && this.layout.useVirtualLayout && this.ensureTypicalLayoutElement();
                b.prototype.measure.call(this)
            };
            a.prototype.updateDisplayList = function(a, c) {
                this._layoutInvalidateDisplayListFlag && this.layout && this.layout.useVirtualLayout && (this.virtualLayoutUnderway = !0, this.ensureTypicalLayoutElement());
                b.prototype.updateDisplayList.call(this, a, c);
                this.virtualLayoutUnderway && this.finishVirtualLayout()
            };
            a.prototype.ensureTypicalLayoutElement = function() {
                !this.layout.typicalLayoutRect && this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize())
            };
            a.prototype.measureRendererSize = function() {
                if (this.typicalItem) {
                    var a = this.itemToRendererClass(this.typicalItem);
                    if (a = this.createOneRenderer(a)) {
                        this.createNewRendererFlag = !0;
                        this.updateRenderer(a, 0, this.typicalItem);
                        "validateNow" in a && a.validateNow();
                        var b = new c.Rectangle(0, 0, a.preferredWidth, a.preferredHeight);
                        this.recycle(a);
                        this.setTypicalLayoutRect(b);
                        this.createNewRendererFlag = !1
                    } else this.setTypicalLayoutRect(null)
                } else this.setTypicalLayoutRect(null)
            };
            a.prototype.setTypicalLayoutRect = function(a) {
                this.typicalLayoutRect = a;
                this.layout && (this.layout.typicalLayoutRect = a)
            };
            a.prototype.removeAllRenderers = function() {
                for (var a = this.indexToRenderer.length, b, c = 0; c < a; c++)
                    if (b = this.indexToRenderer[c]) this.recycle(b), e.RendererExistenceEvent.dispatchRendererExistenceEvent(this, e.RendererExistenceEvent.RENDERER_REMOVE, b, b.itemIndex, b.data);
                this.indexToRenderer = [];
                this.virtualRendererIndices = null;
                this.cleanFreeRenderer && this.cleanAllFreeRenderer()
            };
            a.prototype.createRenderers = function() {
                if (this._dataProvider)
                    for (var a = 0, b = this._dataProvider.length, c = 0; c < b; c++) {
                        var f = this._dataProvider.getItemAt(c),
                            g = this.itemToRendererClass(f);
                        if (g = this.createOneRenderer(g)) this.indexToRenderer[a] = g, this.updateRenderer(g, a, f), e.RendererExistenceEvent.dispatchRendererExistenceEvent(this, e.RendererExistenceEvent.RENDERER_ADD, g, a, f), a++
                    }
            };
            a.prototype.updateRenderer = function(a, b, c) {
                this.renderersBeingUpdated = !0;
                this._rendererOwner ? a = this._rendererOwner.updateRenderer(a, b, c) : ("ownerChanged" in a && a.ownerChanged(this), a.itemIndex = b, a.label = this.itemToLabel(c), a.data = c);
                this.renderersBeingUpdated = !1;
                return a
            };
            a.prototype.itemToLabel = function(a) {
                return a ? a.toString() : " "
            };
            a.prototype.getElementAt = function(a) {
                return this.indexToRenderer[a]
            };
            a.prototype.getElementIndex = function(a) {
                return a ? this.indexToRenderer.indexOf(a) : -1
            };
            Object.defineProperty(a.prototype, "numElements", {
                get: function() {
                    return this._dataProvider ? this._dataProvider.length : 0
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.addChild = function(d) {
                throw Error("addChild()" + a.errorStr + "addElement()代替");
            };
            a.prototype.addChildAt = function(d, b) {
                throw Error("addChildAt()" + a.errorStr + "addElementAt()代替");
            };
            a.prototype.removeChild = function(d) {
                throw Error("removeChild()" + a.errorStr + "removeElement()代替");
            };
            a.prototype.removeChildAt = function(d) {
                throw Error("removeChildAt()" + a.errorStr + "removeElementAt()代替");
            };
            a.prototype.setChildIndex = function(d, b) {
                throw Error("setChildIndex()" + a.errorStr + "setElementIndex()代替");
            };
            a.prototype.swapChildren = function(d, b) {
                throw Error("swapChildren()" + a.errorStr + "swapElements()代替");
            };
            a.prototype.swapChildrenAt = function(d, b) {
                throw Error("swapChildrenAt()" + a.errorStr + "swapElementsAt()代替");
            };
            a.defaultRendererFactory = new e.ClassFactory(e.ItemRenderer);
            a.errorStr = "在此组件中不可用，若此组件为容器类，请使用";
            return a
        }(e.GroupBase);
        e.DataGroup = f;
        f.prototype.__class__ = "egret.gui.DataGroup"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.pointToValue = function(a, b) {
                if (!this.thumb || !this.track) return 0;
                var c = this.maximum - this.minimum,
                    e = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
                return this.minimum + (0 != e ? a / e * c : 0)
            };
            a.prototype.updateSkinDisplayList = function() {
                if (this.thumb && this.track) {
                    var a = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth,
                        b = this.maximum - this.minimum,
                        a = 0 < b ? (this.pendingValue - this.minimum) / b * a : 0,
                        e = this.track.localToGlobal(a, 0),
                        b = e.x,
                        e = e.y,
                        f = this.thumb.parent.globalToLocal(b, e, c.Point.identity).x;
                    this.thumb.setLayoutBoundsPosition(Math.round(f), this.thumb.layoutBoundsY);
                    this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent && (b = this.trackHighlight.parent.globalToLocal(b, e, c.Point.identity).x - a, this.trackHighlight.x = Math.round(b), this.trackHighlight.width = Math.round(a))
                }
            };
            return a
        }(e.SliderBase);
        e.HSlider = f;
        f.prototype.__class__ = "egret.gui.HSlider"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._autoHideTimer = NaN;
                this._autoHideDelay = 3E3;
                this.trackAlpha = 0.4;
                this.thumbAlpha = 0.8;
                this._autoHideShowAnimat = null;
                this._animatTargetIsShow = !1
            }
            __extends(a, b);
            a.prototype._setViewportMetric = function(a, b) {
                this._setMaximun(b - a);
                this._setMinimun(0);
                this._setVisible(a < b);
                this.thumb._setWidth(a * a / b)
            };
            a.prototype._setValue = function(a) {
                a = Math.max(0, a);
                b.prototype._setValue.call(this, a);
                this.hideOrShow(!0);
                this.autoHide()
            };
            a.prototype.setValue = function(a) {
                b.prototype.setValue.call(this, a);
                this.hideOrShow(!0);
                this.autoHide()
            };
            a.prototype.autoHide = function() {
                NaN != this._autoHideDelay && c.clearTimeout(this._autoHideDelay);
                this._autoHideTimer = c.setTimeout(this.hideOrShow.bind(this, !1), this, this._autoHideDelay)
            };
            a.prototype.hideOrShow = function(a) {
                var b = this;
                if (null == this._autoHideShowAnimat) this._autoHideShowAnimat = new e.Animation(function(a) {
                    a = a.currentValue.alpha;
                    b.thumb.alpha = b.thumbAlpha * a;
                    b.track.alpha = b.trackAlpha * a
                }, this);
                else {
                    if (this._animatTargetIsShow == a) return;
                    this._autoHideShowAnimat.isPlaying && this._autoHideShowAnimat.stop()
                }
                this._animatTargetIsShow = a;
                var c = this._autoHideShowAnimat;
                c.motionPaths = [{
                    prop: "alpha",
                    from: this.thumb.alpha / this.thumbAlpha,
                    to: a ? 1 : 0
                }];
                c.duration = a ? 100 : 500;
                c.play()
            };
            a.prototype._animationUpdateHandler = function(a) {
                this.value = this.pendingValue = a.currentValue.value;
                this.dispatchEventWith(c.Event.CHANGE)
            };
            return a
        }(e.HSlider);
        e.HScrollBar = f;
        f.prototype.__class__ = "egret.gui.HScrollBar"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this)
            }
            __extends(a, b);
            a.prototype.pointToValue = function(a, b) {
                if (!this.thumb || !this.track) return 0;
                var c = this.maximum - this.minimum,
                    e = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight;
                return this.minimum + (0 != e ? (e - b) / e * c : 0)
            };
            a.prototype.updateSkinDisplayList = function() {
                if (this.thumb && this.track) {
                    var a = this.thumb.layoutBoundsHeight,
                        b = this.track.layoutBoundsHeight - a,
                        e = this.maximum - this.minimum,
                        f = this.track.localToGlobal(0, 0 < e ? b - (this.pendingValue - this.minimum) / e * b : 0),
                        e = f.x,
                        f = f.y,
                        g = this.thumb.parent.globalToLocal(e, f, c.Point.identity).y;
                    this.thumb.setLayoutBoundsPosition(this.thumb.layoutBoundsX, Math.round(g));
                    this.showTrackHighlight && this.trackHighlight && this.trackHighlight._parent && (e = this.trackHighlight._parent.globalToLocal(e, f, c.Point.identity).y, this.trackHighlight.y = Math.round(e + a), this.trackHighlight.height = Math.round(b - e))
                }
            };
            return a
        }(e.SliderBase);
        e.VSlider = f;
        f.prototype.__class__ = "egret.gui.VSlider"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._autoHideTimer = NaN;
                this._autoHideDelay = 3E3;
                this.trackAlpha = 0.4;
                this.thumbAlpha = 0.8;
                this._autoHideShowAnimat = null;
                this._animatTargetIsShow = !1
            }
            __extends(a, b);
            a.prototype._setViewportMetric = function(a, b) {
                this._setMaximun(b - a);
                this._setMinimun(0);
                this._setValue(b - a);
                this._setVisible(a < b);
                this.thumb._setHeight(a * a / b)
            };
            a.prototype.setPosition = function(a) {
                this._setValue(this._maximum - a)
            };
            a.prototype.getPosition = function() {
                return this._maximum - this._getValue()
            };
            a.prototype._setValue = function(a) {
                a = Math.max(0, a);
                b.prototype._setValue.call(this, a);
                this.hideOrShow(!0);
                this.autoHide()
            };
            a.prototype.setValue = function(a) {
                b.prototype.setValue.call(this, a);
                this.hideOrShow(!0);
                this.autoHide()
            };
            a.prototype.autoHide = function() {
                NaN != this._autoHideDelay && c.clearTimeout(this._autoHideDelay);
                this._autoHideTimer = c.setTimeout(this.hideOrShow.bind(this, !1), this, this._autoHideDelay)
            };
            a.prototype.hideOrShow = function(a) {
                var b = this;
                if (null == this._autoHideShowAnimat) this._autoHideShowAnimat = new e.Animation(function(a) {
                    a = a.currentValue.alpha;
                    b.thumb.alpha = b.thumbAlpha * a;
                    b.track.alpha = b.trackAlpha * a
                }, this);
                else {
                    if (this._animatTargetIsShow == a) return;
                    this._autoHideShowAnimat.isPlaying && this._autoHideShowAnimat.stop()
                }
                this._animatTargetIsShow = a;
                var c = this._autoHideShowAnimat;
                c.motionPaths = [{
                    prop: "alpha",
                    from: this.thumb.alpha / this.thumbAlpha,
                    to: a ? 1 : 0
                }];
                c.duration = a ? 100 : 500;
                c.play()
            };
            a.prototype._animationUpdateHandler = function(a) {
                this.value = this.pendingValue = a.currentValue.value;
                this.dispatchEventWith(c.Event.CHANGE)
            };
            return a
        }(e.VSlider);
        e.VScrollBar = f;
        f.prototype.__class__ = "egret.gui.VScrollBar"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._displayPopUp = this._popUpWidthMatchesAnchorWidth = this._popUpHeightMatchesAnchorHeight = this.addedToStage = this.popUpIsDisplayed = !1;
                this._popUpPosition = e.PopUpPosition.TOP_LEFT;
                this.inAnimation = !1;
                this.animator = null;
                this._openDuration = 250;
                this._closeDuration = 150;
                this.valueRange = 1;
                this.addEventListener(c.Event.ADDED_TO_STAGE, this.addedToStageHandler, this);
                this.addEventListener(c.Event.REMOVED_FROM_STAGE, this.removedFromStageHandler, this)
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "popUpHeightMatchesAnchorHeight", {
                get: function() {
                    return this._popUpHeightMatchesAnchorHeight
                },
                set: function(a) {
                    this._popUpHeightMatchesAnchorHeight != a && (this._popUpHeightMatchesAnchorHeight = a, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "popUpWidthMatchesAnchorWidth", {
                get: function() {
                    return this._popUpWidthMatchesAnchorWidth
                },
                set: function(a) {
                    this._popUpWidthMatchesAnchorWidth != a && (this._popUpWidthMatchesAnchorWidth = a, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "displayPopUp", {
                get: function() {
                    return this._displayPopUp
                },
                set: function(a) {
                    this._displayPopUp != a && (this._displayPopUp = a, this.addOrRemovePopUp())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "popUp", {
                get: function() {
                    return this._popUp
                },
                set: function(a) {
                    this._popUp != a && (this._popUp = a, this.dispatchEventWith("popUpChanged"))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "popUpPosition", {
                get: function() {
                    return this._popUpPosition
                },
                set: function(a) {
                    this._popUpPosition != a && (this._popUpPosition = a, this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.updateDisplayList = function(a, c) {
                b.prototype.updateDisplayList.call(this, a, c);
                this.applyPopUpTransform(a, c)
            };
            a.prototype.updatePopUpTransform = function() {
                this.applyPopUpTransform(this.width, this.height)
            };
            a.prototype.calculatePopUpPosition = function() {
                var a = c.Point.identity;
                switch (this._popUpPosition) {
                    case e.PopUpPosition.BELOW:
                        a.x = 0;
                        a.y = this.height;
                        break;
                    case e.PopUpPosition.ABOVE:
                        a.x = 0;
                        a.y = -this.popUp.layoutBoundsHeight;
                        break;
                    case e.PopUpPosition.LEFT:
                        a.x = -this.popUp.layoutBoundsWidth;
                        a.y = 0;
                        break;
                    case e.PopUpPosition.RIGHT:
                        a.x = this.width;
                        a.y = 0;
                        break;
                    case e.PopUpPosition.CENTER:
                        a.x = 0.5 * (this.width - this.popUp.layoutBoundsWidth), a.y = 0.5 * (this.height - this.popUp.layoutBoundsHeight)
                }
                a = this.localToGlobal(a.x, a.y, a);
                return a = this.popUp.parent.globalToLocal(a.x, a.y, a)
            };
            Object.defineProperty(a.prototype, "openDuration", {
                get: function() {
                    return this._openDuration
                },
                set: function(a) {
                    this._openDuration = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "closeDuration", {
                get: function() {
                    return this._closeDuration
                },
                set: function(a) {
                    this._closeDuration = a
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.animationStartHandler = function(a) {
                this.inAnimation = !0;
                this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !1)
            };
            a.prototype.animationUpdateHandler = function(a) {
                var b = this.popUp._scrollRect,
                    e = Math.round(a.currentValue.x);
                a = Math.round(a.currentValue.y);
                b ? (b.x = e, b.y = a, b.width = this.popUp.width, b.height = this.popUp.height) : this.popUp._scrollRect = new c.Rectangle(e, a, this.popUp.width, this.popUp.height);
                this.popUp._setScrollRect(b)
            };
            a.prototype.animationEndHandler = function(a) {
                this.inAnimation = !1;
                this.popUp && "enabled" in this.popUp && (this.popUp.enabled = !0);
                this.popUp.scrollRect = null;
                this.popUpIsDisplayed || (e.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null))
            };
            a.prototype.addOrRemovePopUp = function() {
                this.addedToStage && this.popUp && (null == this.popUp.parent && this.displayPopUp ? (e.PopUpManager.addPopUp(this.popUp, !1, !1), this.popUp.ownerChanged(this), this.popUpIsDisplayed = !0, this.inAnimation && this.animator.end(), this.initialized ? (this.applyPopUpTransform(this.width, this.height), 0 < this._openDuration && this.startAnimation()) : c.callLater(function() {
                    0 < this.openDuration && this.startAnimation()
                }, this)) : null == this.popUp.parent || this.displayPopUp || this.removeAndResetPopUp())
            };
            a.prototype.removeAndResetPopUp = function() {
                this.inAnimation && this.animator.end();
                this.popUpIsDisplayed = !1;
                0 < this._closeDuration ? this.startAnimation() : (e.PopUpManager.removePopUp(this.popUp), this.popUp.ownerChanged(null))
            };
            a.prototype.applyPopUpTransform = function(a, b) {
                if (this.popUpIsDisplayed) {
                    this.popUpWidthMatchesAnchorWidth && (this.popUp.width = a);
                    this.popUpHeightMatchesAnchorHeight && (this.popUp.height = b);
                    "validateNow" in this.popUp && this.popUp.validateNow();
                    var c = this.calculatePopUpPosition();
                    this.popUp.x = c.x;
                    this.popUp.y = c.y
                }
            };
            a.prototype.startAnimation = function() {
                this.animator || (this.animator = new e.Animation(this.animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler, this.animator.startFunction = this.animationStartHandler);
                this.animator.motionPaths = this.createMotionPath();
                this.animator.duration = this.popUpIsDisplayed ? this._openDuration : this._closeDuration;
                this.animator.play()
            };
            a.prototype.createMotionPath = function() {
                var a = {
                    prop: "x"
                }, b = {
                        prop: "y"
                    }, c = [a, b];
                switch (this._popUpPosition) {
                    case e.PopUpPosition.TOP_LEFT:
                    case e.PopUpPosition.CENTER:
                    case e.PopUpPosition.BELOW:
                        a.from = a.to = 0;
                        b.from = this.popUp.height;
                        b.to = 0;
                        this.valueRange = this.popUp.height;
                        break;
                    case e.PopUpPosition.ABOVE:
                        a.from = a.to = 0;
                        b.from = -this.popUp.height;
                        b.to = 0;
                        this.valueRange = this.popUp.height;
                        break;
                    case e.PopUpPosition.LEFT:
                        b.from = b.to = 0;
                        a.from = -this.popUp.width;
                        a.to = 0;
                        this.valueRange = this.popUp.width;
                        break;
                    case e.PopUpPosition.RIGHT:
                        b.from = b.to = 0;
                        a.from = this.popUp.width;
                        a.to = 0;
                        this.valueRange = this.popUp.width;
                        break;
                    default:
                        this.valueRange = 1
                }
                this.valueRange = Math.abs(this.valueRange);
                if (!this.popUpIsDisplayed) {
                    var f = a.from;
                    a.from = a.to;
                    a.to = f;
                    f = b.from;
                    b.from = b.to;
                    b.to = f
                }
                return c
            };
            a.prototype.addedToStageHandler = function(a) {
                this.addedToStage = !0;
                c.callLater(this.checkPopUpState, this)
            };
            a.prototype.checkPopUpState = function() {
                this.addedToStage ? this.addOrRemovePopUp() : null != this.popUp && null != this.popUp.parent && this.removeAndResetPopUp()
            };
            a.prototype.removedFromStageHandler = function(a) {
                this.addedToStage = !1;
                c.callLater(this.checkPopUpState, this)
            };
            return a
        }(e.UIComponent);
        e.PopUpAnchor = f;
        f.prototype.__class__ = "egret.gui.PopUpAnchor"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(a) {
            function d(d) {
                a.call(this, d);
                this._height = this._width = 0
            }
            __extends(d, a);
            d.prototype.setContent = function(d) {
                a.prototype.setContent.call(this, d);
                d = this._content;
                this._scrollLeft = d.horizontalScrollPosition;
                this._scrollTop = d.verticalScrollPosition
            };
            d.prototype._updateContentPosition = function() {
                var a = this._content;
                a.horizontalScrollPosition = this._scrollLeft;
                a.verticalScrollPosition = this._scrollTop;
                a.setLayoutBoundsSize(this._width, this._height);
                this.dispatchEvent(new c.Event(c.Event.CHANGE))
            };
            d.prototype.getMaxScrollLeft = function() {
                var a = this._content;
                return Math.max(a.contentWidth - a.width, 0)
            };
            d.prototype.getMaxScrollTop = function() {
                var a = this._content;
                return Math.max(a.contentHeight - a.height, 0)
            };
            d.prototype._getContentWidth = function() {
                return this._content.contentWidth
            };
            d.prototype._getContentHeight = function() {
                return this._content.contentHeight
            };
            d.prototype._setHeight = function(a) {
                this._explicitHeight = a;
                this._hasHeightSet = c.NumberUtils.isNumber(a);
                this._height = a;
                (a = this._content) && a.setLayoutBoundsSize(this._width, this._height)
            };
            d.prototype._setWidth = function(a) {
                this._explicitWidth = a;
                this._hasWidthSet = c.NumberUtils.isNumber(a);
                this._width = a;
                (a = this._content) && a.setLayoutBoundsSize(this._width, this._height)
            };
            Object.defineProperty(d.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(a) {
                    this._setHeight(a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(a) {
                    this._setWidth(a)
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.invalidateSize = function() {
                var a = this.parent;
                a && a.invalidateSize()
            };
            d.prototype.invalidateDisplayList = function() {
                var a = this.parent;
                a && a.invalidateDisplayList()
            };
            return d
        }(c.ScrollView);
        f.prototype.__class__ = "egret.gui.ViewportScroller";
        var b = function(a) {
            function d() {
                a.call(this);
                this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto"
            }
            __extends(d, a);
            d.prototype.measure = function() {
                this._viewport && (this.measuredWidth = this._viewport.preferredWidth, this.measuredHeight = this._viewport.preferredHeight)
            };
            d.prototype.updateDisplayList = function(a, d) {
                this._scroller._setWidth(a);
                this._scroller._setHeight(d);
                this.horizontalScrollBar && "off" != this._horizontalScrollPolicy && (this.horizontalScrollBar._setViewportMetric(a, this._viewport.contentWidth), this.horizontalScrollBar._setWidth(a - 2), this.horizontalScrollBar.x = 1, this.horizontalScrollBar.y = d - this.horizontalScrollBar._height - 1);
                this.verticalScrollBar && "off" != this._verticalScrollPolicy && (this.verticalScrollBar._setViewportMetric(d, this._viewport.contentHeight), this.verticalScrollBar._setHeight(d - 2), this.verticalScrollBar.y = 1, this.verticalScrollBar.x = a - this.verticalScrollBar.width - 1)
            };
            Object.defineProperty(d.prototype, "verticalScrollPolicy", {
                get: function() {
                    return this._verticalScrollPolicy
                },
                set: function(a) {
                    a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a, this._checkVbar(), this._scroller && (this._scroller.verticalScrollPolicy = a))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "horizontalScrollPolicy", {
                get: function() {
                    return this._horizontalScrollPolicy
                },
                set: function(a) {
                    a != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a, this._checkHbar(), this._scroller && (this._scroller.horizontalScrollPolicy = a))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "viewport", {
                get: function() {
                    return this._viewport
                },
                set: function(a) {
                    a != this._viewport && (this.uninstallViewport(), this._viewport = a, this.installViewport(), this.dispatchEventWith("viewportChanged"))
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.installViewport = function() {
                var a = this.viewport;
                null == this._scroller && (this._scroller = new f(a), this._scroller.horizontalScrollPolicy = this._horizontalScrollPolicy, this._scroller.verticalScrollPolicy = this._verticalScrollPolicy, this._scroller.addEventListener(c.Event.CHANGE, this._scrollerChangedHandler, this), this._addToDisplayListAt(this._scroller, 0));
                a && (a.clipAndEnableScrolling = !0, this._scroller.setContent(a), a.addEventListener(c.gui.PropertyChangeEvent.PROPERTY_CHANGE, this._viewportChangedHandler, this), "_addToStyleProtoChain" in a && a._addToStyleProtoChain(this._styleProtoChain))
            };
            d.prototype._onAddToStage = function() {
                a.prototype._onAddToStage.call(this);
                this._scroller._stage = this.stage
            };
            d.prototype.uninstallViewport = function() {
                this.viewport && (this.viewport.clipAndEnableScrolling = !1, this.viewport.removeEventListener(c.gui.PropertyChangeEvent.PROPERTY_CHANGE, this._viewportChangedHandler, this));
                this._scroller && this._scroller.removeContent()
            };
            d.prototype._viewportChangedHandler = function(a) {
                "horizontalScrollPosition" == a.property && this.setViewportHScrollPosition(this.viewport.horizontalScrollPosition);
                "verticalScrollPosition" == a.property && this.setViewportVScrollPosition(this.viewport.verticalScrollPosition)
            };
            d.prototype._scrollerChangedHandler = function(a) {
                this.setViewportHScrollPosition(this._scroller.scrollLeft);
                this.setViewportVScrollPosition(this._scroller.scrollTop)
            };
            d.prototype.setViewportVScrollPosition = function(a) {
                this._scroller.scrollTop != a && (this._scroller.scrollTop = a);
                this.verticalScrollBar && this.verticalScrollBar.value != a && this.verticalScrollBar.setPosition(a)
            };
            d.prototype.setViewportHScrollPosition = function(a) {
                this._scroller.scrollLeft != a && (this._scroller.scrollLeft = a);
                this.horizontalScrollBar && this.horizontalScrollBar.value != a && this.horizontalScrollBar._setValue(a)
            };
            d.prototype.throwHorizontally = function(a, d) {
                void 0 === d && (d = 500);
                this._scroller && this._scroller.setScrollLeft(a, d)
            };
            d.prototype.throwVertically = function(a, d) {
                void 0 === d && (d = 500);
                this._scroller && this._scroller.setScrollTop(a, d)
            };
            Object.defineProperty(d.prototype, "numElements", {
                get: function() {
                    return this.viewport ? 1 : 0
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.throwRangeError = function(a) {
                throw new RangeError('索引:"' + a + '"超出可视元素索引范围');
            };
            d.prototype.getElementAt = function(a) {
                if (this.viewport && 0 == a) return this.viewport;
                this.throwRangeError(a);
                return null
            };
            d.prototype.getElementIndex = function(a) {
                return null != a && a == this.viewport ? 0 : -1
            };
            d.prototype.containsElement = function(a) {
                return null != a && a == this.viewport ? !0 : !1
            };
            d.prototype.throwNotSupportedError = function() {
                throw Error("此方法在Scroller组件内不可用!");
            };
            d.prototype.addElement = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.addElementAt = function(a, d) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.removeElement = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.removeElementAt = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.removeAllElements = function() {
                this.throwNotSupportedError()
            };
            d.prototype.setElementIndex = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype.swapElements = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype.swapElementsAt = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype.addChild = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.addChildAt = function(a, d) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.removeChild = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.removeChildAt = function(a) {
                this.throwNotSupportedError();
                return null
            };
            d.prototype.setChildIndex = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype.swapChildren = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype.swapChildrenAt = function(a, d) {
                this.throwNotSupportedError()
            };
            d.prototype._checkHbar = function() {
                if ("off" == this._horizontalScrollPolicy) this.horizontalScrollBar && this._removeFromDisplayList(this.horizontalScrollBar);
                else if (this.horizontalScrollBar) {
                    var a = this.horizontalScrollBar;
                    a.addEventListener(c.Event.CHANGE, this.hBarChanged, this, !1);
                    a._setViewportMetric(this._viewport.width, this._viewport.contentWidth);
                    this.horizontalScrollBar = a;
                    var d = a.owner;
                    d && "removeElement" in d && d.removeElement(a);
                    this._addToDisplayList(this.horizontalScrollBar)
                }
            };
            d.prototype._checkVbar = function() {
                if ("off" == this._verticalScrollPolicy) this.verticalScrollBar && this._removeFromDisplayList(this.verticalScrollBar);
                else if (this.verticalScrollBar) {
                    var a = this.verticalScrollBar;
                    a.addEventListener(c.Event.CHANGE, this.vBarChanged, this, !1);
                    a._setViewportMetric(this._viewport.height, this._viewport.contentHeight);
                    this.verticalScrollBar = a;
                    var d = a.owner;
                    d && "removeElement" in d && d.removeElement(a);
                    this._addToDisplayList(this.verticalScrollBar)
                }
            };
            d.prototype.partAdded = function(d, b) {
                a.prototype.partAdded.call(this, d, b);
                b == this.horizontalScrollBar && this._checkHbar();
                b == this.verticalScrollBar && this._checkVbar()
            };
            d.prototype._removeScrollBars = function() {
                this.horizontalScrollBar && (this._removeFromDisplayList(this.horizontalScrollBar), this.horizontalScrollBar.removeEventListener(c.Event.CHANGE, this.hBarChanged, this, !1), this.horizontalScrollBar = null);
                this.verticalScrollBar && (this._removeFromDisplayList(this.verticalScrollBar), this.verticalScrollBar.removeEventListener(c.Event.CHANGE, this.vBarChanged, this, !1), this.verticalScrollBar = null)
            };
            d.prototype.hBarChanged = function(a) {
                this.setViewportHScrollPosition(this.horizontalScrollBar._getValue())
            };
            d.prototype.vBarChanged = function(a) {
                this.setViewportVScrollPosition(this.verticalScrollBar.getPosition())
            };
            d.prototype._createOwnStyleProtoChain = function(d) {
                d = a.prototype._createOwnStyleProtoChain.call(this, d);
                var b = this._viewport;
                b && "_addToStyleProtoChain" in b && b._addToStyleProtoChain(d);
                return d
            };
            d.prototype.regenerateStyleCache = function(d) {
                a.prototype.regenerateStyleCache.call(this, d);
                var b = this._viewport;
                b && "regenerateStyleCache" in b && b.regenerateStyleCache(d)
            };
            d.prototype.notifyStyleChangeInChildren = function(d) {
                a.prototype.notifyStyleChangeInChildren.call(this, d);
                var b = this._viewport;
                b && "styleChanged" in b && (b.styleChanged(d), b.notifyStyleChangeInChildren(d))
            };
            d.prototype._updateChildrenNestLevel = function() {
                a.prototype._updateChildrenNestLevel.call(this);
                var d = this._viewport;
                d && "nestLevel" in d && (d.nestLevel = this.nestLevel + 1)
            };
            return d
        }(e.SkinnableComponent);
        e.Scroller = b;
        b.prototype.__class__ = "egret.gui.Scroller"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._selectable = !0;
                this._displayAsPassword = !1;
                this._editable = this.pendingEditable = this.displayAsPasswordChanged = !0;
                this.editableChanged = !1;
                this._maxChars = 0;
                this.maxCharsChanged = !1;
                this._multiline = !0;
                this.multilineChanged = !1;
                this._restrict = null;
                this.restrictChanged = !1;
                this._heightInLines = NaN;
                this.heightInLinesChanged = !1;
                this._widthInChars = NaN;
                this.widthInCharsChanged = !1;
                this._verticalScrollPosition = this._horizontalScrollPosition = this._contentHeight = this._contentWidth = 0;
                this._clipAndEnableScrolling = !1;
                this.defaultWidth = this.defaultHeight = NaN;
                this.isValidating = !1;
                this.selectable = !0
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "selectable", {
                get: function() {
                    return this._selectable
                },
                set: function(a) {
                    this._selectable = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "displayAsPassword", {
                get: function() {
                    return this._displayAsPassword
                },
                set: function(a) {
                    a != this._displayAsPassword && (this._displayAsPassword = a, this.displayAsPasswordChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "editable", {
                get: function() {
                    return this._enabled ? this._editable : this.pendingEditable
                },
                set: function(a) {
                    this._editable != a && (this._enabled ? (this._editable = a, this.editableChanged = !0, this.invalidateProperties()) : this.pendingEditable = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "enabled", {
                get: function() {
                    return this._editable
                },
                set: function(a) {
                    a != this._enabled && ((this._enabled = a) ? (this._editable != this.pendingEditable && (this.editableChanged = !0), this._editable = this.pendingEditable) : (this.editable && (this.editableChanged = !0), this.pendingEditable = this._editable, this._editable = !1), this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "maxChars", {
                get: function() {
                    return this._maxChars
                },
                set: function(a) {
                    void 0 === a && (a = 0);
                    a != this._maxChars && (this._maxChars = a, this.maxCharsChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "multiline", {
                get: function() {
                    return this._multiline
                },
                set: function(a) {
                    a != this.multiline && (this._multiline = a, this.multilineChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "restrict", {
                get: function() {
                    return this._restrict
                },
                set: function(a) {
                    a != this._restrict && (this._restrict = a, this.restrictChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.styleChanged = function(a) {
                b.prototype.styleChanged.call(this, a);
                a && "size" != a || (this.widthInCharsChanged = this.heightInLinesChanged = !0)
            };
            a.prototype._setLineSpacing = function(a) {
                this._lineSpacing != a && (b.prototype._setLineSpacing.call(this, a), this.heightInLinesChanged = !0)
            };
            Object.defineProperty(a.prototype, "heightInLines", {
                get: function() {
                    return this._heightInLines
                },
                set: function(a) {
                    this._heightInLines != a && (this._heightInLines = a, this.heightInLinesChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "widthInChars", {
                get: function() {
                    return this._widthInChars
                },
                set: function(a) {
                    this._widthInChars != a && (this._widthInChars = a, this.widthInCharsChanged = !0, this.invalidateProperties())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "contentWidth", {
                get: function() {
                    return this._contentWidth
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setContentWidth = function(a) {
                if (a != this._contentWidth) {
                    var b = this._contentWidth;
                    this._contentWidth = a;
                    this.dispatchPropertyChangeEvent("contentWidth", b, a)
                }
            };
            Object.defineProperty(a.prototype, "contentHeight", {
                get: function() {
                    return this._contentHeight
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setContentHeight = function(a) {
                if (a != this._contentHeight) {
                    var b = this._contentHeight;
                    this._contentHeight = a;
                    this.dispatchPropertyChangeEvent("contentHeight", b, a)
                }
            };
            Object.defineProperty(a.prototype, "horizontalScrollPosition", {
                get: function() {
                    return this._horizontalScrollPosition
                },
                set: function(a) {
                    this._horizontalScrollPosition != a && (this._horizontalScrollPosition = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "verticalScrollPosition", {
                get: function() {
                    return this._verticalScrollPosition
                },
                set: function(a) {
                    this._verticalScrollPosition != a && (this._verticalScrollPosition = a = Math.round(a))
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.getScrollVByVertitcalPos = function(a) {
                if (0 == this._textField.numLines) return 1;
                var b = this._textField._getLineHeight();
                return this._textField.height + (this.height - 4) % b - this.height == a ? this._textField.maxScrollV : parseInt((a - 2) / b) + 1
            };
            a.prototype.getVerticalPosByScrollV = function(a) {
                void 0 === a && (a = 0);
                if (1 == a || 0 == this._textField.numLines) return 0;
                var b = this._textField._getLineHeight();
                return a == this._textField.maxScrollV ? this._textField.height + (this.height - 4) % b - this.height : b * (a - 1) + 2
            };
            a.prototype.getHorizontalScrollPositionDelta = function(a) {
                void 0 === a && (a = 0);
                var b = 0,
                    c = this._contentWidth - this._horizontalScrollPosition - this.width,
                    f = -this._horizontalScrollPosition;
                switch (a) {
                    case e.NavigationUnit.LEFT:
                        b = 0 >= this._horizontalScrollPosition ? 0 : Math.max(f, -this.size);
                        break;
                    case e.NavigationUnit.RIGHT:
                        b = this._horizontalScrollPosition + this.width >= this.contentWidth ? 0 : Math.min(c, this.size);
                        break;
                    case e.NavigationUnit.PAGE_LEFT:
                        b = Math.max(f, -this.width);
                        break;
                    case e.NavigationUnit.PAGE_RIGHT:
                        b = Math.min(c, this.width);
                        break;
                    case e.NavigationUnit.HOME:
                        b = f;
                        break;
                    case e.NavigationUnit.END:
                        b = c
                }
                return b
            };
            a.prototype.getVerticalScrollPositionDelta = function(a) {
                void 0 === a && (a = 0);
                var b = 0,
                    c = this._contentHeight - this._verticalScrollPosition - this.height,
                    f = -this._verticalScrollPosition;
                switch (a) {
                    case e.NavigationUnit.UP:
                        b = this.getVScrollDelta(-1);
                        break;
                    case e.NavigationUnit.DOWN:
                        b = this.getVScrollDelta(1);
                        break;
                    case e.NavigationUnit.PAGE_UP:
                        b = Math.max(f, -this.width);
                        break;
                    case e.NavigationUnit.PAGE_DOWN:
                        b = Math.min(c, this.width);
                        break;
                    case e.NavigationUnit.HOME:
                        b = f;
                        break;
                    case e.NavigationUnit.END:
                        b = c
                }
                return b
            };
            a.prototype.getVScrollDelta = function(a) {
                void 0 === a && (a = 0);
                if (!this._textField) return 0;
                a = this.getScrollVByVertitcalPos(this._verticalScrollPosition) + a;
                a = Math.max(1, Math.min(this._textField.maxScrollV, a));
                return this.getVerticalPosByScrollV(a) - this._verticalScrollPosition
            };
            Object.defineProperty(a.prototype, "clipAndEnableScrolling", {
                get: function() {
                    return this._clipAndEnableScrolling
                },
                set: function(a) {
                    this._clipAndEnableScrolling != a && (this._clipAndEnableScrolling = a)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.commitProperties = function() {
                this._textField || (this.restrictChanged = this.multilineChanged = this.maxCharsChanged = this.displayAsPasswordChanged = this.editableChanged = !0);
                b.prototype.commitProperties.call(this);
                this.editableChanged && (this._textField.type = this._editable ? c.TextFieldType.INPUT : c.TextFieldType.DYNAMIC, this.editableChanged = !1);
                this.displayAsPasswordChanged && (this._textField.displayAsPassword = this._displayAsPassword, this.displayAsPasswordChanged = !1);
                this.maxCharsChanged && (this._textField.maxChars = this._maxChars, this.maxCharsChanged = !1);
                this.multilineChanged && (this._textField.multiline = this._multiline, this.multilineChanged = !1);
                this.restrictChanged && (this.restrictChanged = !1);
                if (this.heightInLinesChanged)
                    if (this.heightInLinesChanged = !1, isNaN(this._heightInLines)) this.defaultHeight = NaN;
                    else {
                        var a = parseInt(this.heightInLines),
                            e = 22;
                        0 < this._textField._text.length ? e = this._textField._getLineHeight() : (this._textField._text = "M", e = this._textField._getLineHeight(), this._textField._text = "");
                        this.defaultHeight = a * e + 4
                    }
                this.widthInCharsChanged && (this.widthInCharsChanged = !1, isNaN(this._widthInChars) ? this.defaultWidth = NaN : (a = parseInt(this._widthInChars), this.defaultWidth = this.size * a + 5))
            };
            a.prototype.updateDisplayList = function(a, c) {
                this.isValidating = !0;
                b.prototype.updateDisplayList.call(this, a, c);
                this.updateContentSize();
                this.isValidating = !1
            };
            a.prototype.updateContentSize = function() {
                if (this.clipAndEnableScrolling) {
                    this.setContentWidth(this._textField.width);
                    var a = 0;
                    0 == this._textField.numLines ? a = 4 : (a = this._textField._getLineHeight(), a = this._textField.height + (this.height - 4) % a);
                    this.setContentHeight(a)
                }
            };
            Object.defineProperty(a.prototype, "selectionBeginIndex", {
                get: function() {
                    this.validateProperties();
                    return this._textField ? this._textField.selectionBeginIndex : 0
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "selectionEndIndex", {
                get: function() {
                    this.validateProperties();
                    return this._textField ? this._textField.selectionEndIndex : 0
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "caretIndex", {
                get: function() {
                    this.validateProperties();
                    return this._textField ? this._textField.caretIndex : 0
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setSelection = function(a, b) {
                void 0 === b && (b = 0);
                this.validateProperties();
                this._textField && this._textField._setSelection(a, b)
            };
            a.prototype.selectAll = function() {
                this.validateProperties();
                this._textField && this._textField._setSelection(0, this._textField.text.length)
            };
            a.prototype.measure = function() {
                this.measuredWidth = isNaN(this.defaultWidth) ? e.TextBase.DEFAULT_MEASURED_WIDTH : this.defaultWidth;
                0 != this._maxChars && (this.measuredWidth = Math.min(this.measuredWidth, this._textField.width));
                this.measuredHeight = this._multiline ? isNaN(this.defaultHeight) ? 2 * e.TextBase.DEFAULT_MEASURED_HEIGHT : this.defaultHeight : this._textField.height
            };
            a.prototype._createTextField = function() {
                b.prototype._createTextField.call(this);
                this._textField.type = this._editable ? c.TextFieldType.INPUT : c.TextFieldType.DYNAMIC;
                this._textField.multiline = this._multiline;
                this._textField.addEventListener(c.Event.CHANGE, this.textField_changeHandler, this);
                this._textField.addEventListener("scroll", this.textField_scrollHandler, this);
                this._textField.addEventListener("input", this.textField_textInputHandler, this)
            };
            a.prototype.textField_changeHandler = function(a) {
                a.stopImmediatePropagation();
                this.dispatchEvent(new c.Event(c.Event.CHANGE));
                this.invalidateSize();
                this.invalidateDisplayList();
                this.updateContentSize()
            };
            a.prototype.textField_scrollHandler = function(a) {};
            a.prototype.textField_textInputHandler = function(a) {
                a.stopImmediatePropagation();
                var b = new c.Event(a.type, !1, !0);
                b.data = a.data;
                this.dispatchEvent(b);
                b.isDefaultPrevented() && a.preventDefault()
            };
            return a
        }(e.TextBase);
        e.EditableText = f;
        f.prototype.__class__ = "egret.gui.EditableText"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                b.call(this, a, c, e)
            }
            __extends(a, b);
            a.dispatchUIEvent = function(b, e) {
                c.Event._dispatchByTarget(a, b, e)
            };
            a.INITIALIZE = "initialize";
            a.CREATION_COMPLETE = "creationComplete";
            a.UPDATE_COMPLETE = "updateComplete";
            a.BUTTON_DOWN = "buttonDown";
            a.CHANGE_END = "changeEnd";
            a.CHANGE_START = "changeStart";
            a.CHANGING = "changing";
            a.VALUE_COMMIT = "valueCommit";
            a.SKIN_CHANGED = "skinChanged";
            a.CONTENT_CHANGED = "contentChanged";
            a.OPEN = "open";
            a.CLOSE = "close";
            a.PLAY_COMPLETE = "playComplete";
            return a
        }(c.Event);
        e.UIEvent = f;
        f.prototype.__class__ = "egret.gui.UIEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g, h, k, l) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = null);
                void 0 === h && (h = null);
                void 0 === k && (k = null);
                void 0 === l && (l = null);
                b.call(this, a, c, e);
                this.kind = f;
                this.property = g;
                this.oldValue = h;
                this.newValue = k;
                this.source = l
            }
            __extends(a, b);
            a.dispatchPropertyChangeEvent = function(b, e, f, q, g, h) {
                void 0 === e && (e = null);
                void 0 === f && (f = null);
                void 0 === q && (q = null);
                void 0 === g && (g = null);
                void 0 === h && (h = null);
                var k = c.Event._getPropertyData(a);
                k.kind = e;
                k.property = f;
                k.oldValue = q;
                k.newValue = g;
                k.source = h;
                c.Event._dispatchByTarget(a, b, a.PROPERTY_CHANGE, k)
            };
            a.PROPERTY_CHANGE = "propertyChange";
            return a
        }(c.Event);
        e.PropertyChangeEvent = f;
        f.prototype.__class__ = "egret.gui.PropertyChangeEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b() {}
            b.UPDATE = "update";
            b.DELETE = "delete";
            return b
        }();
        c.PropertyChangeEventKind = f;
        f.prototype.__class__ = "egret.gui.PropertyChangeEventKind"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = NaN);
                void 0 === e && (e = NaN);
                void 0 === f && (f = !1);
                void 0 === g && (g = !1);
                b.call(this, a, f, g);
                this.oldX = c;
                this.oldY = e
            }
            __extends(a, b);
            a.dispatchMoveEvent = function(b, e, f) {
                void 0 === e && (e = NaN);
                void 0 === f && (f = NaN);
                var q = c.Event._getPropertyData(a);
                q.oldX = e;
                q.oldY = f;
                c.Event._dispatchByTarget(a, b, a.MOVE, q)
            };
            a.MOVE = "move";
            return a
        }(c.Event);
        e.MoveEvent = f;
        f.prototype.__class__ = "egret.gui.MoveEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = NaN);
                void 0 === e && (e = NaN);
                void 0 === f && (f = !1);
                void 0 === g && (g = !1);
                b.call(this, a, f, g);
                this.oldWidth = c;
                this.oldHeight = e
            }
            __extends(a, b);
            a.dispatchResizeEvent = function(b, e, f) {
                void 0 === e && (e = NaN);
                void 0 === f && (f = NaN);
                var q = c.Event._getPropertyData(a);
                q.oldWidth = e;
                q.oldHeight = f;
                c.Event._dispatchByTarget(a, b, a.RESIZE, q)
            };
            a.RESIZE = "resize";
            return a
        }(c.Event);
        e.ResizeEvent = f;
        f.prototype.__class__ = "egret.gui.ResizeEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = null);
                b.call(this, a, c, e);
                this.partName = f;
                this.instance = g
            }
            __extends(a, b);
            a.dispatchSkinPartEvent = function(b, e, f, q) {
                void 0 === f && (f = null);
                void 0 === q && (q = null);
                var g = c.Event._getPropertyData(a);
                g.partName = f;
                g.instance = q;
                c.Event._dispatchByTarget(a, b, e, g)
            };
            a.PART_ADDED = "partAdded";
            a.PART_REMOVED = "partRemoved";
            return a
        }(c.Event);
        e.SkinPartEvent = f;
        f.prototype.__class__ = "egret.gui.SkinPartEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g, h, k, l) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = -1);
                void 0 === h && (h = -1);
                void 0 === k && (k = null);
                void 0 === l && (l = null);
                b.call(this, a, c, e);
                this.kind = f;
                this.location = g;
                this.oldLocation = h;
                this.items = k ? k : [];
                this.oldItems = l ? l : []
            }
            __extends(a, b);
            a.dispatchCollectionEvent = function(b, e, f, q, g, h, k) {
                void 0 === f && (f = null);
                void 0 === q && (q = -1);
                void 0 === g && (g = -1);
                void 0 === h && (h = null);
                void 0 === k && (k = null);
                var l = c.Event._getPropertyData(a);
                l.kind = f;
                l.location = q;
                l.oldLocation = g;
                l.items = h;
                l.oldItems = k;
                c.Event._dispatchByTarget(a, b, e, l)
            };
            a.COLLECTION_CHANGE = "collectionChange";
            return a
        }(c.Event);
        e.CollectionEvent = f;
        f.prototype.__class__ = "egret.gui.CollectionEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b() {}
            b.ADD = "add";
            b.MOVE = "move";
            b.REFRESH = "refresh";
            b.REMOVE = "remove";
            b.REPLACE = "replace";
            b.RESET = "reset";
            b.UPDATE = "update";
            b.OPEN = "open";
            b.CLOSE = "close";
            return b
        }();
        c.CollectionEventKind = f;
        f.prototype.__class__ = "egret.gui.CollectionEventKind"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = -1);
                b.call(this, a, c, e);
                this.element = f;
                this.index = g
            }
            __extends(a, b);
            a.dispatchElementExistenceEvent = function(b, e, f, q) {
                void 0 === f && (f = null);
                void 0 === q && (q = -1);
                var g = c.Event._getPropertyData(a);
                g.element = f;
                g.index = q;
                c.Event._dispatchByTarget(a, b, e, g)
            };
            a.ELEMENT_ADD = "elementAdd";
            a.ELEMENT_REMOVE = "elementRemove";
            return a
        }(c.Event);
        e.ElementExistenceEvent = f;
        f.prototype.__class__ = "egret.gui.ElementExistenceEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = !1);
                b.call(this, a, c, e);
                this.popUp = f;
                this.modal = g
            }
            __extends(a, b);
            a.dispatchPopUpEvent = function(b, e, f, q) {
                void 0 === f && (f = null);
                void 0 === q && (q = !1);
                var g = c.Event._getPropertyData(a);
                g.popUp = f;
                g.modal = q;
                c.Event._dispatchByTarget(a, b, e, g)
            };
            a.ADD_POPUP = "addPopUp";
            a.REMOVE_POPUP = "removePopUp";
            a.BRING_TO_FRONT = "bringToFront";
            return a
        }(c.Event);
        e.PopUpEvent = f;
        f.prototype.__class__ = "egret.gui.PopUpEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g, h) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = -1);
                void 0 === h && (h = null);
                b.call(this, a, c, e);
                this.renderer = f;
                this.index = g;
                this.data = h
            }
            __extends(a, b);
            a.dispatchRendererExistenceEvent = function(b, e, f, q, g) {
                void 0 === f && (f = null);
                void 0 === q && (q = -1);
                void 0 === g && (g = null);
                var h = c.Event._getPropertyData(a);
                h.renderer = f;
                h.index = q;
                h.data = g;
                c.Event._dispatchByTarget(a, b, e, h)
            };
            a.RENDERER_ADD = "rendererAdd";
            a.RENDERER_REMOVE = "rendererRemove";
            return a
        }(c.Event);
        e.RendererExistenceEvent = f;
        f.prototype.__class__ = "egret.gui.RendererExistenceEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e, f, g) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                void 0 === f && (f = null);
                void 0 === g && (g = null);
                b.call(this, a, c, e);
                this.oldState = f;
                this.newState = g
            }
            __extends(a, b);
            a.dispatchStateChangeEvent = function(b, e, f, q) {
                void 0 === f && (f = null);
                void 0 === q && (q = null);
                var g = c.Event._getPropertyData(a);
                g.oldState = f;
                g.newState = q;
                c.Event._dispatchByTarget(a, b, e, g)
            };
            a.CURRENT_STATE_CHANGE = "currentStateChange";
            a.CURRENT_STATE_CHANGING = "currentStateChanging";
            return a
        }(c.Event);
        e.StateChangeEvent = f;
        f.prototype.__class__ = "egret.gui.StateChangeEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a(a, c, e) {
                void 0 === c && (c = !1);
                void 0 === e && (e = !1);
                b.call(this, a, c, e)
            }
            __extends(a, b);
            a.dispatchTrackBaseEvent = function(b, e) {
                c.Event._dispatchByTarget(a, b, e)
            };
            a.THUMB_DRAG = "thumbDrag";
            a.THUMB_PRESS = "thumbPress";
            a.THUMB_RELEASE = "thumbRelease";
            return a
        }(c.Event);
        e.TrackBaseEvent = f;
        f.prototype.__class__ = "egret.gui.TrackBaseEvent"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._useVirtualLayout = !1
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "target", {
                get: function() {
                    return this._target
                },
                set: function(a) {
                    this._target != a && (this._target = a, this.clearVirtualLayoutCache())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "useVirtualLayout", {
                get: function() {
                    return this._useVirtualLayout
                },
                set: function(a) {
                    this._useVirtualLayout != a && (this._useVirtualLayout = a, this.dispatchEventWith("useVirtualLayoutChanged"), this._useVirtualLayout && !a && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "typicalLayoutRect", {
                get: function() {
                    return this._typicalLayoutRect
                },
                set: function(a) {
                    this._typicalLayoutRect != a && (this._typicalLayoutRect = a, this.target && this.target.invalidateSize())
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.scrollPositionChanged = function() {};
            a.prototype.clearVirtualLayoutCache = function() {};
            a.prototype.elementAdded = function(a) {};
            a.prototype.elementRemoved = function(a) {};
            a.prototype.measure = function() {};
            a.prototype.updateDisplayList = function(a, b) {};
            return a
        }(c.EventDispatcher);
        e.LayoutBase = f;
        f.prototype.__class__ = "egret.gui.LayoutBase"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._mouseWheelSpeed = 20
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "useVirtualLayout", {
                set: function(a) {},
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "mouseWheelSpeed", {
                get: function() {
                    return this._mouseWheelSpeed
                },
                set: function(a) {
                    0 == a && (a = 1);
                    this._mouseWheelSpeed = a
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.getElementBoundsLeftOfScrollRect = function(a) {
                var b = new c.Rectangle;
                b.x = a.x - this._mouseWheelSpeed;
                b.right = a.x;
                return b
            };
            a.prototype.getElementBoundsRightOfScrollRect = function(a) {
                var b = new c.Rectangle;
                b.x = a.right;
                b.right = a.right + this._mouseWheelSpeed;
                return b
            };
            a.prototype.getElementBoundsAboveScrollRect = function(a) {
                var b = new c.Rectangle;
                b.y = a.y - this._mouseWheelSpeed;
                b.bottom = a.y;
                return b
            };
            a.prototype.getElementBoundsBelowScrollRect = function(a) {
                var b = new c.Rectangle;
                b.y = a.bottom;
                b.bottom = a.bottom + this._mouseWheelSpeed;
                return b
            };
            a.prototype.measure = function() {
                b.prototype.measure.call(this);
                if (null != this.target) {
                    for (var a = 0, c = 0, e = this.target.numElements, f = 0; f < e; f++) {
                        var g = this.target.getElementAt(f);
                        if (g && g.includeInLayout) {
                            var h = g.horizontalCenter,
                                k = g.verticalCenter,
                                l = g.left,
                                m = g.right,
                                n = g.top,
                                p = g.bottom;
                            isNaN(l) || isNaN(m) ? isNaN(h) ? isNaN(l) && isNaN(m) ? h = g.preferredX : (h = isNaN(l) ? 0 : l, h += isNaN(m) ? 0 : m) : h = 2 * Math.abs(h) : h = l + m;
                            isNaN(n) || isNaN(p) ? isNaN(k) ? isNaN(n) && isNaN(p) ? k = g.preferredY : (k = isNaN(n) ? 0 : n, k += isNaN(p) ? 0 : p) : k = 2 * Math.abs(k) : k = n + p;
                            p = g.preferredHeight;
                            a = Math.ceil(Math.max(a, h + g.preferredWidth));
                            c = Math.ceil(Math.max(c, k + p))
                        }
                    }
                    this.target.measuredWidth = a;
                    this.target.measuredHeight = c
                }
            };
            a.prototype.updateDisplayList = function(a, c) {
                b.prototype.updateDisplayList.call(this, a, c);
                if (null != this.target) {
                    for (var e = this.target.numElements, f = 0, g = 0, h = 0; h < e; h++) {
                        var k = this.target.getElementAt(h);
                        if (null != k && k.includeInLayout) {
                            var l = k.horizontalCenter,
                                m = k.verticalCenter,
                                n = k.left,
                                p = k.right,
                                r = k.top,
                                w = k.bottom,
                                A = k.percentWidth,
                                u = k.percentHeight,
                                y = NaN,
                                v = NaN;
                            isNaN(n) || isNaN(p) ? isNaN(A) || (y = Math.round(a * Math.min(0.01 * A, 1))) : y = a - p - n;
                            isNaN(r) || isNaN(w) ? isNaN(u) || (v = Math.round(c * Math.min(0.01 * u, 1))) : v = c - w - r;
                            k.setLayoutBoundsSize(y, v);
                            A = k.layoutBoundsWidth;
                            u = k.layoutBoundsHeight;
                            v = y = NaN;
                            y = isNaN(l) ? isNaN(n) ? isNaN(p) ? k.layoutBoundsX : a - A - p : n : Math.round((a - A) / 2 + l);
                            v = isNaN(m) ? isNaN(r) ? isNaN(w) ? k.layoutBoundsY : c - u - w : r : Math.round((c - u) / 2 + m);
                            k.setLayoutBoundsPosition(y, v);
                            f = Math.max(f, y + A);
                            g = Math.max(g, v + u)
                        }
                    }
                    this.target.setContentSize(f, g)
                }
            };
            return a
        }(e.LayoutBase);
        e.BasicLayout = f;
        f.prototype.__class__ = "egret.gui.BasicLayout"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(a) {
            function d() {
                a.call(this);
                this._horizontalAlign = c.HorizontalAlign.LEFT;
                this._verticalAlign = c.VerticalAlign.TOP;
                this._gap = 6;
                this._padding = 0;
                this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
                this.elementSizeTable = [];
                this.endIndex = this.startIndex = -1;
                this.indexInViewCalculated = !1;
                this.maxElementWidth = 0
            }
            __extends(d, a);
            Object.defineProperty(d.prototype, "horizontalAlign", {
                get: function() {
                    return this._horizontalAlign
                },
                set: function(a) {
                    this._horizontalAlign != a && (this._horizontalAlign = a, this.target && this.target.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "verticalAlign", {
                get: function() {
                    return this._verticalAlign
                },
                set: function(a) {
                    this._verticalAlign != a && (this._verticalAlign = a, this.target && this.target.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "gap", {
                get: function() {
                    return this._gap
                },
                set: function(a) {
                    this._gap != a && (this._gap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "padding", {
                get: function() {
                    return this._padding
                },
                set: function(a) {
                    this._padding != a && (this._padding = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingLeft", {
                get: function() {
                    return this._paddingLeft
                },
                set: function(a) {
                    this._paddingLeft != a && (this._paddingLeft = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingRight", {
                get: function() {
                    return this._paddingRight
                },
                set: function(a) {
                    this._paddingRight != a && (this._paddingRight = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingTop", {
                get: function() {
                    return this._paddingTop
                },
                set: function(a) {
                    this._paddingTop != a && (this._paddingTop = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingBottom", {
                get: function() {
                    return this._paddingBottom
                },
                set: function(a) {
                    this._paddingBottom != a && (this._paddingBottom = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.invalidateTargetSizeAndDisplayList = function() {
                this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
            };
            d.prototype.measure = function() {
                a.prototype.measure.call(this);
                this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
            };
            d.prototype.measureVirtual = function() {
                for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, b = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), d = this.getElementTotalSize(), c = this.target.getElementIndicesInView(), e = c.length, f = 0; f < e; f++) {
                    var l = c[f],
                        m = this.target.getElementAt(l);
                    if (null != m && m.includeInLayout) var n = m.preferredWidth,
                    d = d + m.preferredHeight, d = d - (isNaN(this.elementSizeTable[l]) ? a : this.elementSizeTable[l]), b = Math.max(b, n)
                }
                f = isNaN(this._padding) ? 0 : this._padding;
                a = isNaN(this._paddingLeft) ? f : this._paddingLeft;
                c = isNaN(this._paddingRight) ? f : this._paddingRight;
                e = isNaN(this._paddingTop) ? f : this._paddingTop;
                f = isNaN(this._paddingBottom) ? f : this._paddingBottom;
                e += f;
                this.target.measuredWidth = Math.ceil(b + (a + c));
                this.target.measuredHeight = Math.ceil(d + e)
            };
            d.prototype.measureReal = function() {
                for (var a = this.target.numElements, b = a, d = 0, c = 0, e = 0; e < a; e++) {
                    var f = this.target.getElementAt(e);
                    if (f && f.includeInLayout) var l = f.preferredWidth,
                    c = c + f.preferredHeight, d = Math.max(d, l);
                    else b--
                }
                a = isNaN(this._gap) ? 0 : this._gap;
                c += (b - 1) * a;
                f = isNaN(this._padding) ? 0 : this._padding;
                b = isNaN(this._paddingLeft) ? f : this._paddingLeft;
                a = isNaN(this._paddingRight) ? f : this._paddingRight;
                e = isNaN(this._paddingTop) ? f : this._paddingTop;
                f = isNaN(this._paddingBottom) ? f : this._paddingBottom;
                e += f;
                this.target.measuredWidth = Math.ceil(d + (b + a));
                this.target.measuredHeight = Math.ceil(c + e)
            };
            d.prototype.updateDisplayList = function(b, d) {
                a.prototype.updateDisplayList.call(this, b, d);
                this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(b, d) : this.updateDisplayListReal(b, d))
            };
            d.prototype.getStartPosition = function(a) {
                var b = isNaN(this._padding) ? 0 : this._padding,
                    d = isNaN(this._paddingTop) ? b : this._paddingTop,
                    b = isNaN(this._gap) ? 0 : this._gap;
                if (!this.useVirtualLayout) {
                    var c;
                    this.target && (c = this.target.getElementAt(a));
                    return c ? c.y : d
                }
                c = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22;
                for (var e = 0; e < a; e++) {
                    var f = this.elementSizeTable[e];
                    isNaN(f) && (f = c);
                    d += f + b
                }
                return d
            };
            d.prototype.getElementSize = function(a) {
                return this.useVirtualLayout ? (a = this.elementSizeTable[a], isNaN(a) && (a = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22), a) : this.target ? this.target.getElementAt(a).height : 0
            };
            d.prototype.getElementTotalSize = function() {
                for (var a = isNaN(this._gap) ? 0 : this._gap, b = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, d = 0, c = this.target.numElements, e = 0; e < c; e++) {
                    var f = this.elementSizeTable[e];
                    isNaN(f) && (f = b);
                    d += f + a
                }
                return d - a
            };
            d.prototype.elementAdded = function(b) {
                a.prototype.elementAdded.call(this, b);
                this.elementSizeTable.splice(b, 0, this.typicalLayoutRect ? this.typicalLayoutRect.height : 22)
            };
            d.prototype.elementRemoved = function(b) {
                a.prototype.elementRemoved.call(this, b);
                this.elementSizeTable.splice(b, 1)
            };
            d.prototype.clearVirtualLayoutCache = function() {
                a.prototype.clearVirtualLayoutCache.call(this);
                this.elementSizeTable = [];
                this.maxElementWidth = 0
            };
            d.prototype.findIndexAt = function(a, b, d) {
                var c = Math.floor(0.5 * (b + d)),
                    e = this.getStartPosition(c),
                    f = this.getElementSize(c),
                    l = isNaN(this._gap) ? 0 : this._gap;
                return a >= e && a < e + f + l ? c : b == d ? -1 : a < e ? this.findIndexAt(a, b, Math.max(b, c - 1)) : this.findIndexAt(a, Math.min(c + 1, d), d)
            };
            d.prototype.scrollPositionChanged = function() {
                a.prototype.scrollPositionChanged.call(this);
                this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
            };
            d.prototype.getIndexInView = function() {
                if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1, !1;
                var a = isNaN(this._padding) ? 0 : this._padding,
                    b = isNaN(this._paddingTop) ? a : this._paddingTop,
                    d = isNaN(this._paddingBottom) ? a : this._paddingBottom,
                    a = this.target.numElements,
                    c = this.getStartPosition(a - 1) + this.elementSizeTable[a - 1] + d,
                    e = this.target.verticalScrollPosition;
                if (e > c - d) return this.endIndex = this.startIndex = -1, !1;
                d = this.target.verticalScrollPosition + this.target.height;
                if (d < b) return this.endIndex = this.startIndex = -1, !1;
                b = this.startIndex;
                c = this.endIndex;
                this.startIndex = this.findIndexAt(e, 0, a - 1); - 1 == this.startIndex && (this.startIndex = 0);
                this.endIndex = this.findIndexAt(d, 0, a - 1); - 1 == this.endIndex && (this.endIndex = a - 1);
                return b != this.startIndex || c != this.endIndex
            };
            d.prototype.updateDisplayListVirtual = function(a, b) {
                this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
                var d = isNaN(this._padding) ? 0 : this._padding,
                    e = isNaN(this._paddingLeft) ? d : this._paddingLeft,
                    f = isNaN(this._paddingRight) ? d : this._paddingRight,
                    k = isNaN(this._paddingBottom) ? d : this._paddingBottom,
                    l = isNaN(this._gap) ? 0 : this._gap,
                    m = this.target.numElements;
                if (-1 == this.startIndex || -1 == this.endIndex) e = this.getStartPosition(m) - l + k, this.target.setContentSize(this.target.contentWidth, Math.ceil(e));
                else {
                    this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
                    var n = this._horizontalAlign == c.HorizontalAlign.JUSTIFY || this._horizontalAlign == c.HorizontalAlign.CONTENT_JUSTIFY,
                        p = this._horizontalAlign == c.HorizontalAlign.CONTENT_JUSTIFY,
                        r = 0;
                    n || (this._horizontalAlign == c.HorizontalAlign.CENTER ? r = 0.5 : this._horizontalAlign == c.HorizontalAlign.RIGHT && (r = 1));
                    var w = Math.max(0, a - e - f),
                        A = Math.ceil(w),
                        u, y = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22,
                        d = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, this.maxElementWidth);
                    if (p) {
                        for (var v = this.startIndex; v <= this.endIndex; v++)(u = this.target.getVirtualElementAt(v)) && u.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, u.preferredWidth));
                        A = Math.ceil(Math.max(w, this.maxElementWidth))
                    }
                    for (var z = 0, t = 0, v = 0, E = !1, C = this.startIndex; C <= this.endIndex; C++)
                        if (z = 0, u = this.target.getVirtualElementAt(C)) u.includeInLayout ? (n ? (z = e, u.setLayoutBoundsSize(A, NaN)) : (z = (w - u.layoutBoundsWidth) * r, z = 0 < z ? z : 0, z = e + z), p || (this.maxElementWidth = Math.max(this.maxElementWidth, u.preferredWidth)), v = Math.max(v, u.layoutBoundsWidth), E || (t = isNaN(this.elementSizeTable[C]) ? y : this.elementSizeTable[C], t != u.layoutBoundsHeight && (E = !0)), 0 == C && 0 < this.elementSizeTable.length && this.elementSizeTable[C] != u.layoutBoundsHeight && (this.typicalLayoutRect = null), this.elementSizeTable[C] = u.layoutBoundsHeight, t = this.getStartPosition(C), u.setLayoutBoundsPosition(Math.round(z), Math.round(t))) : this.elementSizeTable[C] = 0;
                    v += e + f;
                    e = this.getStartPosition(m) - l + k;
                    this.target.setContentSize(Math.ceil(v), Math.ceil(e));
                    (E || d < this.maxElementWidth) && this.target.invalidateSize()
                }
            };
            d.prototype.updateDisplayListReal = function(a, e) {
                var f = isNaN(this._padding) ? 0 : this._padding,
                    g = isNaN(this._paddingLeft) ? f : this._paddingLeft,
                    h = isNaN(this._paddingRight) ? f : this._paddingRight,
                    k = isNaN(this._paddingTop) ? f : this._paddingTop,
                    f = isNaN(this._paddingBottom) ? f : this._paddingBottom,
                    l = isNaN(this._gap) ? 0 : this._gap,
                    m = Math.max(0, a - g - h),
                    n = Math.max(0, e - k - f),
                    p = this._verticalAlign == c.VerticalAlign.JUSTIFY,
                    r = this._horizontalAlign == c.HorizontalAlign.JUSTIFY || this._horizontalAlign == c.HorizontalAlign.CONTENT_JUSTIFY,
                    w = 0;
                r || (this._horizontalAlign == c.HorizontalAlign.CENTER ? w = 0.5 : this._horizontalAlign == c.HorizontalAlign.RIGHT && (w = 1));
                var A = this.target.numElements,
                    u = A,
                    y = g,
                    v = k,
                    z, t, E = 0,
                    y = 0,
                    C = [],
                    D, B = n;
                for (z = 0; z < A; z++)(t = this.target.getElementAt(z)) && t.includeInLayout ? (this.maxElementWidth = Math.max(this.maxElementWidth, t.preferredWidth), p ? E += t.preferredHeight : isNaN(t.percentHeight) ? B -= t.preferredHeight : (y += t.percentHeight, D = new b, D.layoutElement = t, D.percent = t.percentHeight, D.min = t.minHeight, D.max = t.maxHeight, C.push(D))) : u--;
                var B = B - (u - 1) * l,
                    B = 0 < B ? B : 0,
                    F = n - E - l * (u - 1),
                    G, H = u,
                    I = [];
                if (p) {
                    if (0 > F) {
                        G = B / u;
                        for (z = 0; z < A; z++)(t = this.target.getElementAt(z)) && t.includeInLayout && (t = t.preferredHeight, t <= G && (B -= t, H--));
                        B = 0 < B ? B : 0
                    }
                } else if (0 < y) {
                    d.flexChildrenProportionally(n, B, y, C);
                    n = 0;
                    t = C.length;
                    for (z = 0; z < t; z++) D = C[z], y = Math.round(D.size + n), n += D.size - y, I[D.layoutElement.hashCode] = y, B -= y;
                    B = 0 < B ? B : 0
                }
                this._verticalAlign == c.VerticalAlign.MIDDLE ? v = k + 0.5 * B : this._verticalAlign == c.VerticalAlign.BOTTOM && (v = k + B);
                C = g;
                t = u = 0;
                D = Math.ceil(m);
                this._horizontalAlign == c.HorizontalAlign.CONTENT_JUSTIFY && (D = Math.ceil(Math.max(m, this.maxElementWidth)));
                n = 0;
                u = NaN;
                for (z = 0; z < A; z++) y = 0, (t = this.target.getElementAt(z)) && t.includeInLayout && (u = NaN, p ? (y = NaN, 0 < F ? y = B * t.preferredHeight / E : 0 > F && t.preferredHeight > G && (y = B / H), isNaN(y) || (u = Math.round(y + n), n += y - u)) : u = I[t.hashCode], r ? (y = g, t.setLayoutBoundsSize(D, u)) : (y = NaN, isNaN(t.percentWidth) || (y = Math.min(100, t.percentWidth), y = Math.round(m * y * 0.01)), t.setLayoutBoundsSize(y, u), y = (m - t.layoutBoundsWidth) * w, y = 0 < y ? y : 0, y = g + y), t.setLayoutBoundsPosition(Math.round(y), Math.round(v)), u = Math.ceil(t.layoutBoundsWidth), t = Math.ceil(t.layoutBoundsHeight), C = Math.max(C, y + u), k = Math.max(k, v + t), v += t + l);
                this.target.setContentSize(Math.ceil(C + h), Math.ceil(k + f))
            };
            d.flexChildrenProportionally = function(a, b, d, c) {
                var e = c.length,
                    f;
                do {
                    f = !0;
                    var l = b - a * d / 100;
                    0 < l ? b -= l : l = 0;
                    for (var m = b / d, n = 0; n < e; n++) {
                        var p = c[n],
                            r = p.percent * m;
                        if (r < p.min) {
                            f = p.min;
                            p.size = f;
                            c[n] = c[--e];
                            c[e] = p;
                            d -= p.percent;
                            l >= f || (b -= f - l);
                            f = !1;
                            break
                        } else if (r > p.max) {
                            f = p.max;
                            p.size = f;
                            c[n] = c[--e];
                            c[e] = p;
                            d -= p.percent;
                            l >= f || (b -= f - l);
                            f = !1;
                            break
                        } else p.size = r
                    }
                } while (!f)
            };
            return d
        }(e.LayoutBase);
        e.VerticalLayout = f;
        f.prototype.__class__ = "egret.gui.VerticalLayout";
        var b = function() {
            return function() {
                this.size = 0
            }
        }();
        b.prototype.__class__ = "egret.gui.ChildInfo"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(a) {
            function d() {
                a.call(this);
                this._horizontalAlign = c.HorizontalAlign.LEFT;
                this._verticalAlign = c.VerticalAlign.TOP;
                this._gap = 6;
                this._padding = 0;
                this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
                this.elementSizeTable = [];
                this.endIndex = this.startIndex = -1;
                this.indexInViewCalculated = !1;
                this.maxElementHeight = 0
            }
            __extends(d, a);
            Object.defineProperty(d.prototype, "horizontalAlign", {
                get: function() {
                    return this._horizontalAlign
                },
                set: function(a) {
                    this._horizontalAlign != a && (this._horizontalAlign = a, this.target && this.target.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "verticalAlign", {
                get: function() {
                    return this._verticalAlign
                },
                set: function(a) {
                    this._verticalAlign != a && (this._verticalAlign = a, this.target && this.target.invalidateDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "gap", {
                get: function() {
                    return this._gap
                },
                set: function(a) {
                    this._gap != a && (this._gap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "padding", {
                get: function() {
                    return this._padding
                },
                set: function(a) {
                    this._padding != a && (this._padding = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingLeft", {
                get: function() {
                    return this._paddingLeft
                },
                set: function(a) {
                    this._paddingLeft != a && (this._paddingLeft = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingRight", {
                get: function() {
                    return this._paddingRight
                },
                set: function(a) {
                    this._paddingRight != a && (this._paddingRight = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingTop", {
                get: function() {
                    return this._paddingTop
                },
                set: function(a) {
                    this._paddingTop != a && (this._paddingTop = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "paddingBottom", {
                get: function() {
                    return this._paddingBottom
                },
                set: function(a) {
                    this._paddingBottom != a && (this._paddingBottom = a, this.invalidateTargetSizeAndDisplayList())
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.invalidateTargetSizeAndDisplayList = function() {
                this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
            };
            d.prototype.measure = function() {
                a.prototype.measure.call(this);
                this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
            };
            d.prototype.measureVirtual = function() {
                for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, b = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, d = this.getElementTotalSize(), a = Math.max(this.maxElementHeight, a), c = this.target.getElementIndicesInView(), e = c.length, f = 0; f < e; f++) {
                    var l = c[f],
                        m = this.target.getElementAt(l);
                    if (null != m && m.includeInLayout) var n = m.preferredHeight,
                    d = d + m.preferredWidth, d = d - (isNaN(this.elementSizeTable[l]) ? b : this.elementSizeTable[l]), a = Math.max(a, n)
                }
                f = isNaN(this._padding) ? 0 : this._padding;
                b = isNaN(this._paddingLeft) ? f : this._paddingLeft;
                c = isNaN(this._paddingRight) ? f : this._paddingRight;
                e = isNaN(this._paddingTop) ? f : this._paddingTop;
                f = isNaN(this._paddingBottom) ? f : this._paddingBottom;
                e += f;
                this.target.measuredWidth = Math.ceil(d + (b + c));
                this.target.measuredHeight = Math.ceil(a + e)
            };
            d.prototype.measureReal = function() {
                for (var a = this.target.numElements, b = a, d = 0, c = 0, e = 0; e < a; e++) {
                    var f = this.target.getElementAt(e);
                    if (f && f.includeInLayout) var l = f.preferredHeight,
                    d = d + f.preferredWidth, c = Math.max(c, l);
                    else b--
                }
                a = isNaN(this._gap) ? 0 : this._gap;
                d += (b - 1) * a;
                f = isNaN(this._padding) ? 0 : this._padding;
                b = isNaN(this._paddingLeft) ? f : this._paddingLeft;
                a = isNaN(this._paddingRight) ? f : this._paddingRight;
                e = isNaN(this._paddingTop) ? f : this._paddingTop;
                f = isNaN(this._paddingBottom) ? f : this._paddingBottom;
                e += f;
                this.target.measuredWidth = Math.ceil(d + (b + a));
                this.target.measuredHeight = Math.ceil(c + e)
            };
            d.prototype.updateDisplayList = function(b, d) {
                a.prototype.updateDisplayList.call(this, b, d);
                this.target && (this.useVirtualLayout ? this.updateDisplayListVirtual(b, d) : this.updateDisplayListReal(b, d))
            };
            d.prototype.getStartPosition = function(a) {
                var b = isNaN(this._padding) ? 0 : this._padding,
                    d = isNaN(this._paddingLeft) ? b : this._paddingLeft,
                    b = isNaN(this._gap) ? 0 : this._gap;
                if (!this.useVirtualLayout) {
                    var c;
                    this.target && (c = this.target.getElementAt(a));
                    return c ? c.x : d
                }
                c = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71;
                for (var e = 0; e < a; e++) {
                    var f = this.elementSizeTable[e];
                    isNaN(f) && (f = c);
                    d += f + b
                }
                return d
            };
            d.prototype.getElementSize = function(a) {
                return this.useVirtualLayout ? (a = this.elementSizeTable[a], isNaN(a) && (a = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71), a) : this.target ? this.target.getElementAt(a).width : 0
            };
            d.prototype.getElementTotalSize = function() {
                for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71, b = isNaN(this._gap) ? 0 : this._gap, d = 0, c = this.target.numElements, e = 0; e < c; e++) {
                    var f = this.elementSizeTable[e];
                    isNaN(f) && (f = a);
                    d += f + b
                }
                return d - b
            };
            d.prototype.elementAdded = function(b) {
                this.useVirtualLayout && (a.prototype.elementAdded.call(this, b), this.elementSizeTable.splice(b, 0, this.typicalLayoutRect ? this.typicalLayoutRect.width : 71))
            };
            d.prototype.elementRemoved = function(b) {
                this.useVirtualLayout && (a.prototype.elementRemoved.call(this, b), this.elementSizeTable.splice(b, 1))
            };
            d.prototype.clearVirtualLayoutCache = function() {
                this.useVirtualLayout && (a.prototype.clearVirtualLayoutCache.call(this), this.elementSizeTable = [], this.maxElementHeight = 0)
            };
            d.prototype.findIndexAt = function(a, b, d) {
                var c = Math.floor(0.5 * (b + d)),
                    e = this.getStartPosition(c),
                    f = this.getElementSize(c),
                    l = isNaN(this._gap) ? 0 : this._gap;
                return a >= e && a < e + f + l ? c : b == d ? -1 : a < e ? this.findIndexAt(a, b, Math.max(b, c - 1)) : this.findIndexAt(a, Math.min(c + 1, d), d)
            };
            d.prototype.scrollPositionChanged = function() {
                a.prototype.scrollPositionChanged.call(this);
                this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
            };
            d.prototype.getIndexInView = function() {
                if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1, !1;
                var a = isNaN(this._padding) ? 0 : this._padding,
                    b = isNaN(this._paddingLeft) ? a : this._paddingLeft,
                    d = isNaN(this._paddingRight) ? a : this._paddingRight;
                isNaN(this._paddingTop);
                isNaN(this._paddingBottom);
                var a = this.target.numElements,
                    c = this.getStartPosition(a - 1) + this.elementSizeTable[a - 1] + d,
                    e = this.target.horizontalScrollPosition;
                if (e > c - d) return this.endIndex = this.startIndex = -1, !1;
                d = this.target.horizontalScrollPosition + this.target.width;
                if (d < b) return this.endIndex = this.startIndex = -1, !1;
                b = this.startIndex;
                c = this.endIndex;
                this.startIndex = this.findIndexAt(e, 0, a - 1); - 1 == this.startIndex && (this.startIndex = 0);
                this.endIndex = this.findIndexAt(d, 0, a - 1); - 1 == this.endIndex && (this.endIndex = a - 1);
                return b != this.startIndex || c != this.endIndex
            };
            d.prototype.updateDisplayListVirtual = function(a, b) {
                this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
                var d = isNaN(this._padding) ? 0 : this._padding,
                    e = isNaN(this._paddingRight) ? d : this._paddingRight,
                    f = isNaN(this._paddingTop) ? d : this._paddingTop,
                    k = isNaN(this._paddingBottom) ? d : this._paddingBottom,
                    l = isNaN(this._gap) ? 0 : this._gap,
                    m = this.target.numElements;
                if (-1 == this.startIndex || -1 == this.endIndex) e = this.getStartPosition(m) - l + e, this.target.setContentSize(Math.ceil(e), this.target.contentHeight);
                else {
                    this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
                    var n = this._verticalAlign == c.VerticalAlign.JUSTIFY || this._verticalAlign == c.VerticalAlign.CONTENT_JUSTIFY,
                        p = this._verticalAlign == c.VerticalAlign.CONTENT_JUSTIFY,
                        r = 0;
                    n || (this._verticalAlign == c.VerticalAlign.MIDDLE ? r = 0.5 : this._verticalAlign == c.VerticalAlign.BOTTOM && (r = 1));
                    var w = Math.max(0, b - f - k),
                        A = Math.ceil(w),
                        u, y = this.typicalLayoutRect ? this.typicalLayoutRect.width : 71,
                        d = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.height : 22, this.maxElementHeight);
                    if (p) {
                        for (var v = this.startIndex; v <= this.endIndex; v++)(u = this.target.getVirtualElementAt(v)) && u.includeInLayout && (this.maxElementHeight = Math.max(this.maxElementHeight, u.preferredHeight));
                        A = Math.ceil(Math.max(w, this.maxElementHeight))
                    }
                    for (var z = 0, t = 0, v = 0, E = !1, C = this.startIndex; C <= this.endIndex; C++)
                        if (t = 0, u = this.target.getVirtualElementAt(C)) u.includeInLayout ? (n ? (t = f, u.setLayoutBoundsSize(NaN, A)) : (t = (w - u.layoutBoundsHeight) * r, t = 0 < t ? t : 0, t = f + t), p || (this.maxElementHeight = Math.max(this.maxElementHeight, u.preferredHeight)), v = Math.max(v, u.layoutBoundsHeight), E || (z = isNaN(this.elementSizeTable[C]) ? y : this.elementSizeTable[C], z != u.layoutBoundsWidth && (E = !0)), 0 == C && 0 < this.elementSizeTable.length && this.elementSizeTable[C] != u.layoutBoundsWidth && (this.typicalLayoutRect = null), this.elementSizeTable[C] = u.layoutBoundsWidth, z = this.getStartPosition(C), u.setLayoutBoundsPosition(Math.round(z), Math.round(t))) : this.elementSizeTable[C] = 0;
                    v += f + k;
                    e = this.getStartPosition(m) - l + e;
                    this.target.setContentSize(Math.ceil(e), Math.ceil(v));
                    (E || d < this.maxElementHeight) && this.target.invalidateSize()
                }
            };
            d.prototype.updateDisplayListReal = function(a, e) {
                var f = isNaN(this._padding) ? 0 : this._padding,
                    g = isNaN(this._paddingLeft) ? f : this._paddingLeft,
                    h = isNaN(this._paddingRight) ? f : this._paddingRight,
                    k = isNaN(this._paddingTop) ? f : this._paddingTop,
                    f = isNaN(this._paddingBottom) ? f : this._paddingBottom,
                    l = isNaN(this._gap) ? 0 : this._gap,
                    m = Math.max(0, a - g - h),
                    n = Math.max(0, e - k - f),
                    p = this._horizontalAlign == c.HorizontalAlign.JUSTIFY,
                    r = this._verticalAlign == c.VerticalAlign.JUSTIFY || this._verticalAlign == c.VerticalAlign.CONTENT_JUSTIFY,
                    w = 0;
                r || (this._verticalAlign == c.VerticalAlign.MIDDLE ? w = 0.5 : this._verticalAlign == c.VerticalAlign.BOTTOM && (w = 1));
                var A = this.target.numElements,
                    u = A,
                    y = g,
                    v = k,
                    z, t, E = 0,
                    v = 0,
                    C = [],
                    D, B = m;
                for (z = 0; z < A; z++)(t = this.target.getElementAt(z)) && t.includeInLayout ? (this.maxElementHeight = Math.max(this.maxElementHeight, t.preferredHeight), p ? E += t.preferredWidth : isNaN(t.percentWidth) ? B -= t.preferredWidth : (v += t.percentWidth, D = new b, D.layoutElement = t, D.percent = t.percentWidth, D.min = t.minWidth, D.max = t.maxWidth, C.push(D))) : u--;
                var B = B - l * (u - 1),
                    B = 0 < B ? B : 0,
                    F = m - E - l * (u - 1),
                    G, H = u,
                    I = [];
                if (p) {
                    if (0 > F) {
                        G = B / u;
                        for (z = 0; z < A; z++)(t = this.target.getElementAt(z)) && t.includeInLayout && (t = t.preferredWidth, t <= G && (B -= t, H--));
                        B = 0 < B ? B : 0
                    }
                } else if (0 < v) {
                    d.flexChildrenProportionally(m, B, v, C);
                    m = 0;
                    t = C.length;
                    for (z = 0; z < t; z++) D = C[z], v = Math.round(D.size + m), m += D.size - v, I[D.layoutElement.hashCode] = v, B -= v;
                    B = 0 < B ? B : 0
                }
                this._horizontalAlign == c.HorizontalAlign.CENTER ? y = g + 0.5 * B : this._horizontalAlign == c.HorizontalAlign.RIGHT && (y = g + B);
                C = k;
                t = u = 0;
                D = Math.ceil(n);
                this._verticalAlign == c.VerticalAlign.CONTENT_JUSTIFY && (D = Math.ceil(Math.max(n, this.maxElementHeight)));
                for (z = m = 0; z < A; z++) v = 0, (t = this.target.getElementAt(z)) && t.includeInLayout && (u = NaN, p ? (v = NaN, 0 < F ? v = B * t.preferredWidth / E : 0 > F && t.preferredWidth > G && (v = B / H), isNaN(v) || (u = Math.round(v + m), m += v - u)) : u = I[t.hashCode], r ? (v = k, t.setLayoutBoundsSize(u, D)) : (v = NaN, isNaN(t.percentHeight) || (v = Math.min(100, t.percentHeight), v = Math.round(n * v * 0.01)), t.setLayoutBoundsSize(u, v), v = (n - t.layoutBoundsHeight) * w, v = 0 < v ? v : 0, v = k + v), t.setLayoutBoundsPosition(Math.round(y), Math.round(v)), u = Math.ceil(t.layoutBoundsWidth), t = Math.ceil(t.layoutBoundsHeight), g = Math.max(g, y + u), C = Math.max(C, v + t), y += u + l);
                this.target.setContentSize(Math.ceil(g + h), Math.ceil(C + f))
            };
            d.flexChildrenProportionally = function(a, b, d, c) {
                var e = c.length,
                    f;
                do {
                    f = !0;
                    var l = b - a * d / 100;
                    0 < l ? b -= l : l = 0;
                    for (var m = b / d, n = 0; n < e; n++) {
                        var p = c[n],
                            r = p.percent * m;
                        if (r < p.min) {
                            f = p.min;
                            p.size = f;
                            c[n] = c[--e];
                            c[e] = p;
                            d -= p.percent;
                            l >= f || (b -= f - l);
                            f = !1;
                            break
                        } else if (r > p.max) {
                            f = p.max;
                            p.size = f;
                            c[n] = c[--e];
                            c[e] = p;
                            d -= p.percent;
                            l >= f || (b -= f - l);
                            f = !1;
                            break
                        } else p.size = r
                    }
                } while (!f)
            };
            return d
        }(e.LayoutBase);
        e.HorizontalLayout = f;
        f.prototype.__class__ = "egret.gui.HorizontalLayout";
        var b = function() {
            return function() {
                this.size = 0
            }
        }();
        b.prototype.__class__ = "egret.gui.ChildInfo"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(c) {
        var f = function() {
            function b(a, b, c) {
                this.raw_getElementAt = "raw_getElementAt";
                this.raw_addElementAt = "raw_addElementAt";
                this.raw_getElementIndex = "raw_getElementIndex";
                this.raw_removeElement = "raw_removeElement";
                this.raw_removeElementAt = "raw_removeElementAt";
                this.raw_setElementIndex = "raw_setElementIndex";
                this.owner = a;
                this.lowerBoundReference = b;
                this.upperBoundReference = c
            }
            Object.defineProperty(b.prototype, "numElements", {
                get: function() {
                    return this.owner[this.upperBoundReference] - this.owner[this.lowerBoundReference]
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.getElementAt = function(a) {
                return this.owner[this.raw_getElementAt](this.owner[this.lowerBoundReference] + a)
            };
            b.prototype.addElement = function(a) {
                var b = this.owner[this.upperBoundReference];
                a.parent === this.owner && b--;
                this.owner[this.upperBoundReference]++;
                this.owner[this.raw_addElementAt](a, b);
                a.ownerChanged(this);
                return a
            };
            b.prototype.addElementAt = function(a, b) {
                this.owner[this.upperBoundReference]++;
                this.owner[this.raw_addElementAt](a, this.owner[this.lowerBoundReference] + b);
                a.ownerChanged(this);
                return a
            };
            b.prototype.removeElement = function(a) {
                var b = this.owner[this.raw_getElementIndex](a);
                this.owner[this.lowerBoundReference] <= b && b < this.owner[this.upperBoundReference] && (this.owner[this.raw_removeElement](a), this.owner[this.upperBoundReference]--);
                a.ownerChanged(null);
                return a
            };
            b.prototype.removeElementAt = function(a) {
                a += this.owner[this.lowerBoundReference];
                var b;
                this.owner[this.lowerBoundReference] <= a && a < this.owner[this.upperBoundReference] && (b = this.owner[this.raw_removeElementAt](a), this.owner[this.upperBoundReference]--);
                b.ownerChanged(null);
                return b
            };
            b.prototype.getElementIndex = function(a) {
                a = this.owner[this.raw_getElementIndex](a);
                return a -= this.owner[this.lowerBoundReference]
            };
            b.prototype.setElementIndex = function(a, b) {
                this.owner[this.raw_setElementIndex](a, this.owner[this.lowerBoundReference] + b)
            };
            return b
        }();
        c.UILayer = f;
        f.prototype.__class__ = "egret.gui.UILayer"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this._autoResize = !0;
                this._cursorIndex = this._toolTipIndex = this._topMostIndex = this._noTopMostIndex = 0;
                this.addEventListener(c.Event.ADDED_TO_STAGE, this.onAddToStage, this);
                this.addEventListener(c.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
            }
            __extends(a, b);
            a.prototype.onAddToStage = function(a) {
                if (e.UIGlobals._uiStage) throw Error("UIStage是GUI根容器，只能有一个此实例在显示列表中！");
                e.UIGlobals._uiStage = this;
                this._autoResize && (this.stage.addEventListener(c.Event.RESIZE, this.onResize, this), this.onResize())
            };
            a.prototype.onRemoveFromStage = function(a) {
                e.UIGlobals._uiStage = null;
                this._autoResize && this.stage.removeEventListener(c.Event.RESIZE, this.onResize, this)
            };
            a.prototype.onResize = function(a) {
                this._setWidth(this.stage.stageWidth);
                this._setHeight(this.stage.stageHeight)
            };
            Object.defineProperty(a.prototype, "autoResize", {
                get: function() {
                    return this._autoResize
                },
                set: function(a) {
                    this._autoResize != a && (this._autoResize = a, this.stage && (this._autoResize ? (this.stage.addEventListener(c.Event.RESIZE, this.onResize, this), this.onResize()) : this.stage.removeEventListener(c.Event.RESIZE, this.onResize, this)))
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(a) {
                    this._autoResize || (this._x = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(a) {
                    this._autoResize || (this._y = a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(a) {
                    this._autoResize || this._setWidth(a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(a) {
                    this._autoResize || this._setHeight(a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "scaleX", {
                get: function() {
                    return this._scaleX
                },
                set: function(a) {
                    this._autoResize || this._setScaleX(a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "scaleY", {
                get: function() {
                    return this._scaleY
                },
                set: function(a) {
                    this._autoResize || this._setScaleY(a)
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.setActualSize = function(a, c) {
                this._autoResize || b.prototype.setActualSize.call(this, a, c)
            };
            a.prototype.setLayoutBoundsPosition = function(a, c) {
                this._autoResize || b.prototype.setLayoutBoundsPosition.call(this, a, c)
            };
            a.prototype.setLayoutBoundsSize = function(a, c) {
                this._autoResize || b.prototype.setLayoutBoundsSize.call(this, a, c)
            };
            Object.defineProperty(a.prototype, "layout", {
                get: function() {
                    return this._layout
                },
                set: function(a) {
                    a instanceof e.BasicLayout && this._setLayout(a)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "popUpContainer", {
                get: function() {
                    this._popUpContainer || (this._popUpContainer = new e.UILayer(this, "noTopMostIndex", "topMostIndex"));
                    return this._popUpContainer
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "toolTipContainer", {
                get: function() {
                    this._toolTipContainer || (this._toolTipContainer = new e.UILayer(this, "topMostIndex", "toolTipIndex"));
                    return this._toolTipContainer
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "cursorContainer", {
                get: function() {
                    this._cursorContainer || (this._cursorContainer = new e.UILayer(this, "toolTipIndex", "cursorIndex"));
                    return this._cursorContainer
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "noTopMostIndex", {
                get: function() {
                    return this._noTopMostIndex
                },
                set: function(a) {
                    var b = a - this._noTopMostIndex;
                    this._noTopMostIndex = a;
                    this.topMostIndex += b
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "topMostIndex", {
                get: function() {
                    return this._topMostIndex
                },
                set: function(a) {
                    var b = a - this._topMostIndex;
                    this._topMostIndex = a;
                    this.toolTipIndex += b
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "toolTipIndex", {
                get: function() {
                    return this._toolTipIndex
                },
                set: function(a) {
                    var b = a - this._toolTipIndex;
                    this._toolTipIndex = a;
                    this.cursorIndex += b
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(a.prototype, "cursorIndex", {
                get: function() {
                    return this._cursorIndex
                },
                set: function(a) {
                    this._cursorIndex = a
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.addElement = function(a) {
                var b = this._noTopMostIndex;
                a.parent == this && b--;
                return this.addElementAt(a, b)
            };
            a.prototype.addElementAt = function(a, c) {
                if (a.parent == this) {
                    var e = this.getElementIndex(a);
                    e < this._noTopMostIndex ? this.noTopMostIndex-- : e >= this._noTopMostIndex && e < this._topMostIndex ? this.topMostIndex-- : e >= this._topMostIndex && e < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--
                }
                c <= this._noTopMostIndex ? this.noTopMostIndex++ : c > this._noTopMostIndex && c <= this._topMostIndex ? this.topMostIndex++ : c > this._topMostIndex && c <= this._toolTipIndex ? this.toolTipIndex++ : this.cursorIndex++;
                return b.prototype.addElementAt.call(this, a, c)
            };
            a.prototype.removeElement = function(a) {
                return this.removeElementAt(b.prototype.getElementIndex.call(this, a))
            };
            a.prototype.removeElementAt = function(a) {
                var c = b.prototype.removeElementAt.call(this, a);
                a < this._noTopMostIndex ? this.noTopMostIndex-- : a >= this._noTopMostIndex && a < this._topMostIndex ? this.topMostIndex-- : a >= this._topMostIndex && a < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--;
                return c
            };
            a.prototype.removeAllElements = function() {
                for (; 0 < this._noTopMostIndex;) b.prototype.removeElementAt.call(this, 0), this.noTopMostIndex--
            };
            a.prototype._elementRemoved = function(a, e, f) {
                void 0 === f && (f = !0);
                f && c.Event.dispatchEvent(a, "removeFromUIStage");
                b.prototype._elementRemoved.call(this, a, e, f)
            };
            a.prototype.raw_getElementAt = function(a) {
                return b.prototype.getElementAt.call(this, a)
            };
            a.prototype.raw_addElement = function(a) {
                var b = this.numElements;
                a.parent == this && b--;
                return this.raw_addElementAt(a, b)
            };
            a.prototype.raw_addElementAt = function(a, c) {
                if (a.parent == this) {
                    var e = this.getElementIndex(a);
                    e < this._noTopMostIndex ? this.noTopMostIndex-- : e >= this._noTopMostIndex && e < this._topMostIndex ? this.topMostIndex-- : e >= this._topMostIndex && e < this._toolTipIndex ? this.toolTipIndex-- : this.cursorIndex--
                }
                return b.prototype.addElementAt.call(this, a, c)
            };
            a.prototype.raw_removeElement = function(a) {
                return b.prototype.removeElementAt.call(this, b.prototype.getElementIndex.call(this, a))
            };
            a.prototype.raw_removeElementAt = function(a) {
                return b.prototype.removeElementAt.call(this, a)
            };
            a.prototype.raw_removeAllElements = function() {
                for (; 0 < this.numElements;) b.prototype.removeElementAt.call(this, 0)
            };
            a.prototype.raw_getElementIndex = function(a) {
                return b.prototype.getElementIndex.call(this, a)
            };
            a.prototype.raw_setElementIndex = function(a, c) {
                b.prototype.setElementIndex.call(this, a, c)
            };
            a.prototype.raw_swapElements = function(a, c) {
                b.prototype.swapElementsAt.call(this, b.prototype.getElementIndex.call(this, a), b.prototype.getElementIndex.call(this, c))
            };
            a.prototype.raw_swapElementsAt = function(a, c) {
                b.prototype.swapElementsAt.call(this, a, c)
            };
            return a
        }(e.Group);
        e.UIStage = f;
        f.prototype.__class__ = "egret.gui.UIStage"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(a) {
            function d() {
                a.call(this);
                this._popUpList = [];
                this.popUpDataList = [];
                this._modalColor = 0;
                this._modalAlpha = 0.5;
                this.invalidateModalFlag = !1
            }
            __extends(d, a);
            Object.defineProperty(d.prototype, "popUpList", {
                get: function() {
                    return this._popUpList.concat()
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.findPopUpData = function(a) {
                for (var b = this.popUpDataList, d = b.length, c = 0; c < d; c++) {
                    var e = b[c];
                    if (e.popUp == a) return e
                }
                return null
            };
            d.prototype.addPopUp = function(a, c, f) {
                void 0 === c && (c = !1);
                void 0 === f && (f = !0);
                var g = e.UIGlobals.uiStage,
                    h = this.findPopUpData(a);
                h ? (h.modal = c, a.removeEventListener(d.REMOVE_FROM_UISTAGE, this.onRemoved, this)) : (h = new b(a, c), this.popUpDataList.push(h), this._popUpList.push(a));
                g.popUpContainer.addElement(a);
                f && this.centerPopUp(a);
                "isPopUp" in a && (a.isPopUp = !0);
                c && this.invalidateModal();
                a.addEventListener(d.REMOVE_FROM_UISTAGE, this.onRemoved, this)
            };
            d.prototype.onRemoved = function(a) {
                for (var b = 0, c = this.popUpDataList, e = c.length, f = 0; f < e; f++) {
                    var k = c[f];
                    if (k.popUp == a.target) {
                        "isPopUp" in k.popUp && (k.popUp.isPopUp = !1);
                        k.popUp.removeEventListener(d.REMOVE_FROM_UISTAGE, this.onRemoved, this);
                        this.popUpDataList.splice(b, 1);
                        this._popUpList.splice(b, 1);
                        this.invalidateModal();
                        break
                    }
                    b++
                }
            };
            Object.defineProperty(d.prototype, "modalColor", {
                get: function() {
                    return this._modalColor
                },
                set: function(a) {
                    this._modalColor != a && (this._modalColor = a, this.invalidateModal())
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(d.prototype, "modalAlpha", {
                get: function() {
                    return this._modalAlpha
                },
                set: function(a) {
                    this._modalAlpha != a && (this._modalAlpha = a, this.invalidateModal())
                },
                enumerable: !0,
                configurable: !0
            });
            d.prototype.invalidateModal = function() {
                this.invalidateModalFlag || (this.invalidateModalFlag = !0, e.UIGlobals.stage.addEventListener(c.Event.ENTER_FRAME, this.validateModal, this), e.UIGlobals.stage.addEventListener(c.Event.RENDER, this.validateModal, this), e.UIGlobals.stage.invalidate())
            };
            d.prototype.validateModal = function(a) {
                this.invalidateModalFlag = !1;
                e.UIGlobals.stage.removeEventListener(c.Event.ENTER_FRAME, this.validateModal, this);
                e.UIGlobals.stage.removeEventListener(c.Event.RENDER, this.validateModal, this);
                this.updateModal(e.UIGlobals.uiStage)
            };
            d.prototype.updateModal = function(a) {
                for (var b = a.popUpContainer, d = !1, c = b.numElements - 1; 0 <= c; c--) {
                    var f = b.getElementAt(c);
                    if ((f = this.findPopUpData(f)) && f.modal) {
                        d = !0;
                        break
                    }
                }
                d ? (this.modalMask || (this.modalMask = new e.Rect, this.modalMask.touchEnabled = !0, this.modalMask.top = this.modalMask.left = this.modalMask.right = this.modalMask.bottom = 0), this.modalMask.fillColor = this._modalColor, this.modalMask.alpha = this._modalAlpha, this.modalMask.parent == a ? (b.getElementIndex(this.modalMask) < c && c--, b.setElementIndex(this.modalMask, c)) : b.addElementAt(this.modalMask, c)) : this.modalMask && this.modalMask.parent == a && b.removeElement(this.modalMask)
            };
            d.prototype.removePopUp = function(a) {
                a && a.parent && this.findPopUpData(a) && ("removeElement" in a.parent ? a.parent.removeElement(a) : a.parent instanceof e.UIComponent ? a.parent._removeFromDisplayList(a) : a instanceof c.DisplayObject && a.parent.removeChild(a))
            };
            d.prototype.centerPopUp = function(a) {
                a.top = a.bottom = a.left = a.right = NaN;
                a.verticalCenter = a.horizontalCenter = 0;
                var b = a.parent;
                b && ("validateNow" in a && a.validateNow(), a.x = 0.5 * (b.width - a.layoutBoundsWidth), a.y = 0.5 * (b.height - a.layoutBoundsHeight))
            };
            d.prototype.bringToFront = function(a) {
                if (this.findPopUpData(a) && a.parent && "popUpContainer" in a.parent) {
                    var b = a.parent;
                    b.popUpContainer.setElementIndex(a, b.popUpContainer.numElements - 1);
                    this.invalidateModal()
                }
            };
            d.REMOVE_FROM_UISTAGE = "removeFromUIStage";
            return d
        }(c.EventDispatcher);
        e.PopUpManagerImpl = f;
        f.prototype.__class__ = "egret.gui.PopUpManagerImpl";
        var b = function() {
            return function(a, b) {
                this.popUp = a;
                this.modal = b
            }
        }();
        b.prototype.__class__ = "egret.gui.PopUpData"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
(function(c) {
    (function(e) {
        var f = function() {
            function b() {}
            b.getImpl = function() {
                if (!b._impl) try {
                    b._impl = c.Injector.getInstance("egret.gui.IPopUpManager")
                } catch (a) {
                    b._impl = new e.PopUpManagerImpl
                }
                return b._impl
            };
            Object.defineProperty(b.prototype, "modalColor", {
                get: function() {
                    return b.getImpl().modalColor
                },
                set: function(a) {
                    b.getImpl().modalColor = a
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "modalAlpha", {
                get: function() {
                    return b.getImpl().modalAlpha
                },
                set: function(a) {
                    b.getImpl().modalAlpha = a
                },
                enumerable: !0,
                configurable: !0
            });
            b.addPopUp = function(a, d, c) {
                void 0 === d && (d = !1);
                void 0 === c && (c = !0);
                b.getImpl().addPopUp(a, d, c);
                e.PopUpEvent.dispatchPopUpEvent(b.getImpl(), e.PopUpEvent.ADD_POPUP, a, d)
            };
            b.removePopUp = function(a) {
                b.getImpl().removePopUp(a);
                e.PopUpEvent.dispatchPopUpEvent(b.getImpl(), e.PopUpEvent.REMOVE_POPUP, a)
            };
            b.centerPopUp = function(a) {
                b.getImpl().centerPopUp(a)
            };
            b.bringToFront = function(a) {
                b.getImpl().bringToFront(a);
                e.PopUpEvent.dispatchPopUpEvent(b.getImpl(), e.PopUpEvent.BRING_TO_FRONT, a)
            };
            Object.defineProperty(b, "popUpList", {
                get: function() {
                    return b.getImpl().popUpList
                },
                enumerable: !0,
                configurable: !0
            });
            b.addEventListener = function(a, d, c, e, f) {
                void 0 === e && (e = !1);
                void 0 === f && (f = 0);
                b.getImpl().addEventListener(a, d, this, e, f)
            };
            b.removeEventListener = function(a, d, c, e) {
                void 0 === e && (e = !1);
                b.getImpl().removeEventListener(a, d, c, e)
            };
            return b
        }();
        e.PopUpManager = f;
        f.prototype.__class__ = "egret.gui.PopUpManager"
    })(c.gui || (c.gui = {}))
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            void 0 === a && (a = 60);
            e.call(this);
            this.frameRate = a;
            this._time = 0;
            this._isActivate = !0;
            60 == a && (b.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, b.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
            b.requestAnimationFrame || (b.requestAnimationFrame = function(b) {
                return window.setTimeout(b, 1E3 / a)
            });
            b.cancelAnimationFrame || (b.cancelAnimationFrame = function(a) {
                return window.clearTimeout(a)
            });
            b.instance = this;
            this.registerListener()
        }
        __extends(b, e);
        b.prototype.enterFrame = function() {
            var a = b.instance,
                d = b._thisObject,
                e = b._callback,
                f = c.getTimer(),
                q = f - a._time;
            a._requestAnimationId = b.requestAnimationFrame.call(window, b.prototype.enterFrame);
            e.call(d, q);
            a._time = f
        };
        b.prototype.executeMainLoop = function(a, d) {
            b._callback = a;
            b._thisObject = d;
            this.enterFrame()
        };
        b.prototype.reset = function() {
            var a = b.instance;
            a._requestAnimationId && (a._time = c.getTimer(), b.cancelAnimationFrame.call(window, a._requestAnimationId), a.enterFrame())
        };
        b.prototype.registerListener = function() {
            var a = this,
                d = function() {
                    a._isActivate && (a._isActivate = !1, c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.DEACTIVATE)))
                },
                e = function() {
                    a._isActivate || (a._isActivate = !0, b.instance.reset(), c.MainContext.instance.stage.dispatchEvent(new c.Event(c.Event.ACTIVATE)))
                }, f = function() {
                    document[q] ? d() : e()
                };
            window.addEventListener("focus", e, !1);
            window.addEventListener("blur", d, !1);
            var q, g;
            "undefined" !== typeof document.hidden ? (q = "hidden", g = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (q = "mozHidden", g = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (q = "msHidden", g = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (q = "webkitHidden", g = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (q = "oHidden", g = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", d, !1));
            q && g && document.addEventListener(g, f, !1)
        };
        return b
    }(c.DeviceContext);
    c.HTML5DeviceContext = e;
    e.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(c) {
    c.getItem = function(c) {
        return window.localStorage.getItem(c)
    };
    c.setItem = function(c, f) {
        try {
            return window.localStorage.setItem(c, f), !0
        } catch (b) {
            return console.log("egret_html5_localStorage.setItem保存失败,key=" + c + "&value=" + f), !1
        }
    };
    c.removeItem = function(c) {
        window.localStorage.removeItem(c)
    };
    c.clear = function() {
        window.localStorage.clear()
    };
    c.init = function() {
        for (var e in c) egret.localStorage[e] = c[e]
    }
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
            e.call(this);
            this.globalAlpha = 1;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            this._cacheCanvas = document.createElement("canvas");
            this._cacheCanvas.width = this.canvas.width;
            this._cacheCanvas.height = this.canvas.height;
            this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
            this.onResize();
            var b = this.canvasContext.setTransform,
                c = this;
            this._cacheCanvasContext.setTransform = function(a, e, f, h, k, l) {
                c._matrixA = a;
                c._matrixB = e;
                c._matrixC = f;
                c._matrixD = h;
                c._matrixTx = k;
                c._matrixTy = l;
                b.call(c._cacheCanvasContext, a, e, f, h, k, l)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            this.initBlendMode()
        }
        __extends(b, e);
        b.prototype.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                    a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
            return a
        };
        b.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(c.StageDelegate.canvas_div_name);
                this.canvas.width = c.MainContext.instance.stage.stageWidth;
                this.canvas.height = c.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this._cacheCanvas.width = this.canvas.width;
                this._cacheCanvas.height = this.canvas.height;
                this._cacheCanvasContext.imageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.webkitImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.mozImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.msImageSmoothingEnabled = c.RendererContext.imageSmoothingEnabled
            }
        };
        b.prototype.clearScreen = function() {
            for (var a = c.RenderFilter.getInstance().getDrawAreaList(), b = 0, e = a.length; b < e; b++) {
                var f = a[b];
                this.clearRect(f.x, f.y, f.width, f.height)
            }
            a = c.MainContext.instance.stage;
            this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        };
        b.prototype.clearRect = function(a, b, c, e) {
            this.canvasContext.clearRect(a, b, c, e)
        };
        b.prototype.drawImage = function(a, b, s, x, q, g, h, k, l, m) {
            void 0 === m && (m = void 0);
            var n = a._bitmapData;
            g += this._transformTx;
            h += this._transformTy;
            var p = c.getTimer();
            void 0 === m ? this._cacheCanvasContext.drawImage(n, b, s, x, q, g, h, k, l) : this.drawRepeatImage(a, b, s, x, q, g, h, k, l, m);
            e.prototype.drawImage.call(this, a, b, s, x, q, g, h, k, l, m);
            this.renderCost += c.getTimer() - p
        };
        b.prototype.drawRepeatImage = function(a, b, e, f, q, g, h, k, l, m) {
            if (void 0 === a.pattern) {
                var n = c.MainContext.instance.rendererContext.texture_scale_factor,
                    p = a._bitmapData,
                    r = p;
                if (p.width != f || p.height != q || 1 != n) r = document.createElement("canvas"), r.width = f * n, r.height = q * n, r.getContext("2d").drawImage(p, b, e, f, q, 0, 0, f * n, q * n);
                b = this._cacheCanvasContext.createPattern(r, m);
                a.pattern = b
            }
            this._cacheCanvasContext.fillStyle = a.pattern;
            this._cacheCanvasContext.translate(g, h);
            this._cacheCanvasContext.fillRect(0, 0, k, l);
            this._cacheCanvasContext.translate(-g, -h)
        };
        b.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        b.prototype.setAlpha = function(a, b) {
            a != this.globalAlpha && (this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
            b ? (this.blendValue = this.blendModes[b], this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != c.BlendMode.NORMAL && (this.blendValue = this.blendModes[c.BlendMode.NORMAL], this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
        };
        b.prototype.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[c.BlendMode.NORMAL] = "source-over";
            this.blendModes[c.BlendMode.ADD] = "lighter"
        };
        b.prototype.setupFont = function(a, b) {
            void 0 === b && (b = null);
            b = b || {};
            var c = null == b.size ? a._size : b.size,
                e = null == b.fontFamily ? a._fontFamily : b.fontFamily,
                f = this._cacheCanvasContext,
                g = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
                g = g + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
            f.font = g + (c + "px " + e);
            f.textAlign = "left";
            f.textBaseline = "middle"
        };
        b.prototype.measureText = function(a) {
            return this._cacheCanvasContext.measureText(a).width
        };
        b.prototype.drawText = function(a, b, s, x, q, g) {
            void 0 === g && (g = null);
            this.setupFont(a, g);
            g = g || {};
            var h;
            h = null != g.textColor ? c.toColorString(g.textColor) : a._textColorString;
            var k;
            k = null != g.strokeColor ? c.toColorString(g.strokeColor) : a._strokeColorString;
            var l;
            l = null != g.stroke ? g.stroke : a._stroke;
            var m = this._cacheCanvasContext;
            m.fillStyle = h;
            m.strokeStyle = k;
            l && (m.lineWidth = 2 * l, m.strokeText(b, s + this._transformTx, x + this._transformTy, q || 65535));
            m.fillText(b, s + this._transformTx, x + this._transformTy, q || 65535);
            e.prototype.drawText.call(this, a, b, s, x, q, g)
        };
        b.prototype.strokeRect = function(a, b, c, e, f) {
            this._cacheCanvasContext.strokeStyle = f;
            this._cacheCanvasContext.strokeRect(a, b, c, e)
        };
        b.prototype.pushMask = function(a) {
            this._cacheCanvasContext.save();
            this._cacheCanvasContext.beginPath();
            this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this._cacheCanvasContext.clip();
            this._cacheCanvasContext.closePath()
        };
        b.prototype.popMask = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        b.prototype.onRenderStart = function() {
            this._cacheCanvasContext.save()
        };
        b.prototype.onRenderFinish = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            for (var a = this._cacheCanvas.width, b = this._cacheCanvas.height, e = c.RenderFilter.getInstance().getDrawAreaList(), f = 0, q = e.length; f < q; f++) {
                var g = e[f],
                    h = g.x,
                    k = g.y,
                    l = g.width,
                    g = g.height;
                h + l > a && (l = a - h);
                k + g > b && (g = b - k);
                0 < l && 0 < g && this.canvasContext.drawImage(this._cacheCanvas, h, k, l, g, h, k, l, g)
            }
        };
        return b
    }(c.RendererContext);
    c.HTML5CanvasRenderer = e;
    e.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(c) {
    c.beginFill = function(c, b) {
        void 0 === b && (b = 1);
        var a = "rgba(" + (c >> 16) + "," + ((c & 65280) >> 8) + "," + (c & 255) + "," + b + ")";
        this.fillStyleColor = a;
        this.commandQueue.push(new e(this._setStyle, this, [a]))
    };
    c.drawRect = function(c, b, a, d) {
        this.commandQueue.push(new e(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(e._transformTx + a, e._transformTy + b, d, c);
            this.canvasContext.closePath()
        }, this, [c, b, a, d]));
        this._fill()
    };
    c.drawCircle = function(c, b, a) {
        this.commandQueue.push(new e(function(a, b, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(e._transformTx + a, e._transformTy + b, c, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        }, this, [c, b, a]));
        this._fill()
    };
    c.drawRoundRect = function(c, b, a, d, s, x) {
        this.commandQueue.push(new e(function(a, b, d, c, e, f) {
            var s = this.renderContext;
            a = s._transformTx + a;
            b = s._transformTy + b;
            e /= 2;
            f = f ? f / 2 : e;
            d = a + d;
            c = b + c;
            s = c - f;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(d, s);
            this.canvasContext.quadraticCurveTo(d, c, d - e, c);
            this.canvasContext.lineTo(a + e, c);
            this.canvasContext.quadraticCurveTo(a, c, a, c - f);
            this.canvasContext.lineTo(a, b + f);
            this.canvasContext.quadraticCurveTo(a, b, a + e, b);
            this.canvasContext.lineTo(d - e, b);
            this.canvasContext.quadraticCurveTo(d, b, d, b + f);
            this.canvasContext.lineTo(d, s);
            this.canvasContext.closePath()
        }, this, [c, b, a, d, s, x]));
        this._fill()
    };
    c.drawEllipse = function(c, b, a, d) {
        this.commandQueue.push(new e(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.save();
            a = e._transformTx + a;
            b = e._transformTy + b;
            var e = d > c ? d : c,
                f = d / e;
            c /= e;
            this.canvasContext.scale(f, c);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + d) / f, b / c);
            this.canvasContext.arc(a / f, b / c, e, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        }, this, [c, b, a, d]));
        this._fill()
    };
    c.lineStyle = function(c, b, a, d, s, x, q, g) {
        void 0 === c && (c = NaN);
        void 0 === b && (b = 0);
        void 0 === a && (a = 1);
        void 0 === d && (d = !1);
        void 0 === s && (s = "normal");
        void 0 === x && (x = null);
        void 0 === q && (q = null);
        void 0 === g && (g = 3);
        this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = b = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.commandQueue.push(new e(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        }, this, [c, b]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    c.lineTo = function(c, b) {
        this.commandQueue.push(new e(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
        }, this, [c, b]));
        this.lineX = c;
        this.lineY = b
    };
    c.curveTo = function(c, b, a, d) {
        this.commandQueue.push(new e(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + d, e._transformTy + c)
        }, this, [c, b, a, d]));
        this.lineX = a;
        this.lineY = d
    };
    c.moveTo = function(c, b) {
        this.commandQueue.push(new e(function(a, b) {
            var c = this.renderContext;
            this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
        }, this, [c, b]))
    };
    c.clear = function() {
        this.lineY = this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    c.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new e(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        }, this, null))
    };
    c.endFill = function() {
        null != this.fillStyleColor && this._fill();
        this.fillStyleColor = null
    };
    c._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
    };
    c.createEndLineCommand = function() {
        this.endLineCommand || (this.endLineCommand = new e(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        }, this, null))
    };
    c._draw = function(c) {
        var b = this.commandQueue.length;
        if (0 != b) {
            this.renderContext = c;
            c = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
            c.save();
            this.strokeStyleColor && 0 < b && this.commandQueue[b - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), b = this.commandQueue.length);
            for (var a = 0; a < b; a++) {
                var d = this.commandQueue[a];
                d.method.apply(d.thisObject, d.args)
            }
            c.restore()
        }
    };
    var e = function() {
        return function(c, b, a) {
            this.method = c;
            this.thisObject = b;
            this.args = a
        }
    }();
    e.prototype.__class__ = "egret_h5_graphics.Command";
    c._setStyle = function(c) {
        this.canvasContext.fillStyle = c;
        this.canvasContext.beginPath()
    };
    c.init = function() {
        for (var e in c) egret.Graphics.prototype[e] = c[e];
        egret.RendererContext.createRendererContext = function(b) {
            return new egret.HTML5CanvasRenderer(b)
        }
    }
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b(a) {
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
            console.log("使用WebGL模式");
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var b = 0, s = 0; b < a; b += 6, s += 4) this.indices[b + 0] = s + 0, this.indices[b + 1] = s + 1, this.indices[b + 2] = s + 2, this.indices[b + 3] = s + 0, this.indices[b + 4] = s + 2, this.indices[b + 5] = s + 3;
            this.initWebGL();
            this.shaderManager = new c.WebGLShaderManager(this.gl);
            this.worldTransform = new c.Matrix;
            this.initBlendMode();
            c.MainContext.instance.addEventListener(c.Event.FINISH_RENDER, this._draw, this);
            c.TextField.prototype._draw = function(a) {
                this.getDirty() && (this.cacheAsBitmap = !0);
                c.DisplayObject.prototype._draw.call(this, a)
            }
        }
        __extends(b, e);
        b.prototype.createCanvas = function() {
            var a = c.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var b = document.getElementById(c.StageDelegate.canvas_div_name),
                    a = c.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                b.appendChild(a)
            }
            c.MainContext.instance.stage.addEventListener(c.Event.RESIZE, this.onResize, this);
            return a
        };
        b.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(c.StageDelegate.canvas_div_name);
                this.canvas.width = c.MainContext.instance.stage.stageWidth;
                this.canvas.height = c.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.projectionX = this.canvas.width / 2;
                this.projectionY = -this.canvas.height / 2
            }
        };
        b.prototype.handleContextLost = function() {
            this.contextLost = !0
        };
        b.prototype.handleContextRestored = function() {
            this.initWebGL();
            this.shaderManager.setContext(this.gl);
            this.contextLost = !1
        };
        b.prototype.initWebGL = function() {
            for (var a = {
                stencil: !0
            }, b, c = ["experimental-webgl", "webgl"], e = 0; e < c.length; e++) {
                try {
                    b = this.canvas.getContext(c[e], a)
                } catch (f) {}
                if (b) break
            }
            if (!b) throw Error("当前浏览器不支持webgl");
            this.setContext(b)
        };
        b.prototype.setContext = function(a) {
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
        b.prototype.initBlendMode = function() {
            this.blendModesWebGL = {};
            this.blendModesWebGL[c.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
            this.blendModesWebGL[c.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
        };
        b.prototype.start = function() {
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
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
            }
        };
        b.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var b = c.RenderFilter.getInstance().getDrawAreaList(), e = 0, f = b.length; e < f; e++) {
                var q = b[e];
                a.viewport(q.x, q.y, q.width, q.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null);
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            b = c.MainContext.instance.stage;
            a.viewport(0, 0, b.stageWidth, b.stageHeight);
            this.renderCost = 0
        };
        b.prototype.setBlendMode = function(a) {
            a || (a = c.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var b = this.blendModesWebGL[a];
                b && (this._draw(), this.gl.blendFunc(b[0], b[1]), this.currentBlendMode = a)
            }
        };
        b.prototype.drawRepeatImage = function(a, b, e, f, q, g, h, k, l, m) {
            m = c.MainContext.instance.rendererContext.texture_scale_factor;
            f *= m;
            for (q *= m; g < k; g += f)
                for (var n = h; n < l; n += q) {
                    var p = Math.min(f, k - g),
                        r = Math.min(q, l - n);
                    this.drawImage(a, b, e, p / m, r / m, g, n, p, r)
                }
        };
        b.prototype.drawImage = function(a, b, c, e, f, g, h, k, l, m) {
            void 0 === m && (m = void 0);
            if (!this.contextLost)
                if (void 0 !== m) this.drawRepeatImage(a, b, c, e, f, g, h, k, l, m);
                else {
                    this.createWebGLTexture(a);
                    if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = a.webGLTexture;
                    var n = this.worldTransform,
                        p = n.a,
                        r = n.b,
                        w = n.c,
                        A = n.d,
                        u = n.tx,
                        y = n.ty;
                    0 == g && 0 == h || n.append(1, 0, 0, 1, g, h);
                    1 == e / k && 1 == f / l || n.append(k / e, 0, 0, l / f, 0, 0);
                    g = n.a;
                    h = n.b;
                    k = n.c;
                    l = n.d;
                    m = n.tx;
                    var v = n.ty;
                    n.a = p;
                    n.b = r;
                    n.c = w;
                    n.d = A;
                    n.tx = u;
                    n.ty = y;
                    p = a._sourceWidth;
                    r = a._sourceHeight;
                    a = e;
                    n = f;
                    b /= p;
                    c /= r;
                    e /= p;
                    f /= r;
                    p = this.vertices;
                    r = 4 * this.currentBatchSize * this.vertSize;
                    w = this.worldAlpha;
                    p[r++] = m;
                    p[r++] = v;
                    p[r++] = b;
                    p[r++] = c;
                    p[r++] = w;
                    p[r++] = g * a + m;
                    p[r++] = h * a + v;
                    p[r++] = e + b;
                    p[r++] = c;
                    p[r++] = w;
                    p[r++] = g * a + k * n + m;
                    p[r++] = l * n + h * a + v;
                    p[r++] = e + b;
                    p[r++] = f + c;
                    p[r++] = w;
                    p[r++] = k * n + m;
                    p[r++] = l * n + v;
                    p[r++] = b;
                    p[r++] = f + c;
                    p[r++] = w;
                    this.currentBatchSize++
                }
        };
        b.prototype._draw = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = c.getTimer();
                this.start();
                var b = this.gl;
                b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
                var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                b.bufferSubData(b.ARRAY_BUFFER, 0, e);
                b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
                this.currentBatchSize = 0;
                this.renderCost += c.getTimer() - a;
                c.Profiler.getInstance().onDrawImage()
            }
        };
        b.prototype.setTransform = function(a) {
            var b = this.worldTransform;
            b.a = a.a;
            b.b = a.b;
            b.c = a.c;
            b.d = a.d;
            b.tx = a.tx;
            b.ty = a.ty
        };
        b.prototype.setAlpha = function(a, b) {
            this.worldAlpha = a;
            this.setBlendMode(b)
        };
        b.prototype.createWebGLTexture = function(a) {
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
        b.prototype.pushMask = function(a) {
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
        b.prototype.popMask = function() {
            this._draw();
            var a = this.gl,
                b = this.maskList.pop();
            b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        };
        b.prototype.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        };
        b.prototype.setupFont = function(a, b) {
            var c = this.canvasContext,
                e = a.italic ? "italic " : "normal ",
                e = e + (a.bold ? "bold " : "normal "),
                e = e + (a.size + "px " + a.fontFamily);
            c.font = e;
            c.textAlign = "left";
            c.textBaseline = "middle"
        };
        b.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        b.prototype.renderGraphics = function(a) {
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
        b.prototype.updateGraphics = function(a) {
            var b = this.gl;
            this.buildRectangle(a);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        };
        b.prototype.buildRectangle = function(a) {
            var b = a.x,
                c = a.y,
                e = a.w;
            a = a.h;
            var f = this.graphicsPoints,
                g = this.graphicsIndices,
                h = f.length / 6;
            f.push(b, c);
            f.push(0, 0, 0, 1);
            f.push(b + e, c);
            f.push(0, 0, 0, 1);
            f.push(b, c + a);
            f.push(0, 0, 0, 1);
            f.push(b + e, c + a);
            f.push(0, 0, 0, 1);
            g.push(h, h, h + 1, h + 2, h + 3, h + 3)
        };
        return b
    }(c.RendererContext);
    c.WebGLRenderer = e;
    e.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
(function(c) {
    var e = function() {
        function c() {}
        c.compileProgram = function(b, a, d) {
            d = c.compileFragmentShader(b, d);
            a = c.compileVertexShader(b, a);
            var e = b.createProgram();
            b.attachShader(e, a);
            b.attachShader(e, d);
            b.linkProgram(e);
            b.getProgramParameter(e, b.LINK_STATUS) || console.log("无法初始化着色器");
            return e
        };
        c.compileFragmentShader = function(b, a) {
            return c._compileShader(b, a, b.FRAGMENT_SHADER)
        };
        c.compileVertexShader = function(b, a) {
            return c._compileShader(b, a, b.VERTEX_SHADER)
        };
        c._compileShader = function(b, a, d) {
            d = b.createShader(d);
            b.shaderSource(d, a);
            b.compileShader(d);
            return b.getShaderParameter(d, b.COMPILE_STATUS) ? d : (console.log(b.getShaderInfoLog(d)), null)
        };
        c.checkCanUseWebGL = function() {
            if (void 0 == c.canUseWebGL) try {
                var b = document.createElement("canvas");
                c.canUseWebGL = !! window.WebGLRenderingContext && !(!b.getContext("webgl") && !b.getContext("experimental-webgl"))
            } catch (a) {
                c.canUseWebGL = !1
            }
            return c.canUseWebGL
        };
        return c
    }();
    c.WebGLUtils = e;
    e.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function() {
        function d(a) {
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
            this.setContext(a)
        }
        d.prototype.setContext = function(d) {
            this.gl = d;
            this.primitiveShader = new a(d);
            this.defaultShader = new f(d);
            this.colorTransformShader = new b(d);
            this.activateShader(this.defaultShader)
        };
        d.prototype.activateShader = function(a) {
            this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader = a)
        };
        d.prototype.setAttribs = function(a) {
            var b, d;
            d = this.tempAttribState.length;
            for (b = 0; b < d; b++) this.tempAttribState[b] = !1;
            d = a.length;
            for (b = 0; b < d; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            d = this.attribState.length;
            for (b = 0; b < d; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return d
    }();
    c.WebGLShaderManager = e;
    e.prototype.__class__ = "egret.WebGLShaderManager";
    var f = function() {
        function a(b) {
            this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                b = c.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(b);
            this.uSampler = a.getUniformLocation(b, "uSampler");
            this.projectionVector = a.getUniformLocation(b, "projectionVector");
            this.offsetVector = a.getUniformLocation(b, "offsetVector");
            this.dimensions = a.getUniformLocation(b, "dimensions");
            this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord");
            this.colorAttribute = a.getAttribLocation(b, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var d in this.uniforms) this.uniforms[d].uniformLocation = a.getUniformLocation(b, d);
            this.initUniforms();
            this.program = b
        };
        a.prototype.initUniforms = function() {
            if (this.uniforms) {
                var a = this.gl,
                    b, d;
                for (d in this.uniforms) {
                    b = this.uniforms[d];
                    var c = b.type;
                    "mat2" === c || "mat3" === c || "mat4" === c ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === c ? b.glFunc = a.uniformMatrix2fv : "mat3" === c ? b.glFunc = a.uniformMatrix3fv : "mat4" === c && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + c], b.glValueLength = "2f" === c || "2i" === c ? 2 : "3f" === c || "3i" === c ? 3 : "4f" === c || "4i" === c ? 4 : 1)
                }
            }
        };
        a.prototype.syncUniforms = function() {
            if (this.uniforms) {
                var a, b = this.gl,
                    d;
                for (d in this.uniforms) a = this.uniforms[d], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
            }
        };
        return a
    }();
    c.EgretShader = f;
    f.prototype.__class__ = "egret.EgretShader";
    var b = function(a) {
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
    }(f);
    c.ColorTransformShader = b;
    b.prototype.__class__ = "egret.ColorTransformShader";
    var a = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
                b = c.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(b);
            this.projectionVector = a.getUniformLocation(b, "projectionVector");
            this.offsetVector = a.getUniformLocation(b, "offsetVector");
            this.tintColor = a.getUniformLocation(b, "tint");
            this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(b, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(b, "translationMatrix");
            this.alpha = a.getUniformLocation(b, "alpha");
            this.program = b
        };
        return a
    }();
    c.PrimitiveShader = a;
    a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this)
        }
        __extends(b, e);
        b.prototype.proceed = function(a) {
            function b() {
                if (4 == f.readyState)
                    if (f.status != a._status && (a._status = f.status, c.HTTPStatusEvent.dispatchHTTPStatusEvent(a, f.status)), 400 <= f.status || 0 == f.status) c.IOErrorEvent.dispatchIOErrorEvent(a);
                    else {
                        switch (a.dataFormat) {
                            case c.URLLoaderDataFormat.TEXT:
                                a.data = f.responseText;
                                break;
                            case c.URLLoaderDataFormat.VARIABLES:
                                a.data = new c.URLVariables(f.responseText);
                                break;
                            case c.URLLoaderDataFormat.BINARY:
                                a.data = f.response;
                                break;
                            default:
                                a.data = f.responseText
                        }
                        c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
                    }
            }
            if (a.dataFormat == c.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == c.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var e = a._request,
                    f = this.getXHR();
                f.onreadystatechange = b;
                var q = c.NetContext._getUrl(e);
                f.open(e.method, q, !0);
                this.setResponseType(f, a.dataFormat);
                e.method != c.URLRequestMethod.GET && e.data ? e.data instanceof c.URLVariables ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(e.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(e.data)) : f.send()
            }
        };
        b.prototype.loadSound = function(a) {
            function b(q) {
                window.clearTimeout(f.__timeoutId);
                f.removeEventListener("canplaythrough", b, !1);
                f.removeEventListener("error", e, !1);
                q = new c.Sound;
                q._setAudio(f);
                a.data = q;
                c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
            }

            function e(q) {
                window.clearTimeout(f.__timeoutId);
                f.removeEventListener("canplaythrough", b, !1);
                f.removeEventListener("error", e, !1);
                c.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var f = new Audio(a._request.url);
            f.__timeoutId = window.setTimeout(b, 100);
            f.addEventListener("canplaythrough", b, !1);
            f.addEventListener("error", e, !1);
            f.load()
        };
        b.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        };
        b.prototype.setResponseType = function(a, b) {
            switch (b) {
                case c.URLLoaderDataFormat.TEXT:
                case c.URLLoaderDataFormat.VARIABLES:
                    a.responseType = c.URLLoaderDataFormat.TEXT;
                    break;
                case c.URLLoaderDataFormat.BINARY:
                    a.responseType = "arraybuffer";
                    break;
                default:
                    a.responseType = b
            }
        };
        b.prototype.loadTexture = function(a) {
            var b = a._request,
                e = new Image;
            e.onload = function(b) {
                e.onerror = null;
                e.onload = null;
                b = new c.Texture;
                b._setBitmapData(e);
                a.data = b;
                c.__callAsync(c.Event.dispatchEvent, c.Event, a, c.Event.COMPLETE)
            };
            e.onerror = function(b) {
                e.onerror = null;
                e.onload = null;
                c.IOErrorEvent.dispatchIOErrorEvent(a)
            };
            e.src = b.url
        };
        return b
    }(c.NetContext);
    c.HTML5NetContext = e;
    e.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._isTouchDown = !1;
            this.rootDiv = document.getElementById(c.StageDelegate.canvas_div_name)
        }
        __extends(b, e);
        b.prototype.prevent = function(a) {
            a.stopPropagation();
            !0 != a.isScroll && a.preventDefault()
        };
        b.prototype.run = function() {
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
            }, !1)) : c.MainContext.deviceType == c.MainContext.DEVICE_MOBILE ? this.addTouchListener() : c.MainContext.deviceType == c.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown", function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup", function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            })
        };
        b.prototype.addMouseListener = function() {
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
        b.prototype.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart", function(b) {
                for (var c = b.changedTouches.length, e = 0; e < c; e++) a._onTouchBegin(b.changedTouches[e]);
                a.prevent(b)
            }, !1);
            this.rootDiv.addEventListener("touchmove", function(b) {
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
        b.prototype.inOutOfCanvas = function(a) {
            var b = this.getLocation(this.rootDiv, a);
            a = b.x;
            var b = b.y,
                e = c.MainContext.instance.stage;
            return 0 > a || 0 > b || a > e.stageWidth || b > e.stageHeight ? !0 : !1
        };
        b.prototype.dispatchLeaveStageEvent = function() {
            this.touchingIdentifiers.length = 0;
            c.MainContext.instance.stage.dispatchEventWith(c.Event.LEAVE_STAGE)
        };
        b.prototype._onTouchBegin = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchBegan(b.x, b.y, c)
        };
        b.prototype._onTouchMove = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchMove(b.x, b.y, c)
        };
        b.prototype._onTouchEnd = function(a) {
            var b = this.getLocation(this.rootDiv, a),
                c = -1;
            a.hasOwnProperty("identifier") && (c = a.identifier);
            this.onTouchEnd(b.x, b.y, c)
        };
        b.prototype.getLocation = function(a, b) {
            var e = document.documentElement,
                f = window,
                q, g;
            "function" === typeof a.getBoundingClientRect ? (g = a.getBoundingClientRect(), q = g.left, g = g.top) : g = q = 0;
            q += f.pageXOffset - e.clientLeft;
            g += f.pageYOffset - e.clientTop;
            null != b.pageX ? (e = b.pageX, f = b.pageY) : (q -= document.body.scrollLeft, g -= document.body.scrollTop, e = b.clientX, f = b.clientY);
            var h = c.Point.identity;
            h.x = (e - q) / c.StageDelegate.getInstance().getScaleX();
            h.y = (f - g) / c.StageDelegate.getInstance().getScaleY();
            return h
        };
        return b
    }(c.TouchContext);
    c.HTML5TouchContext = e;
    e.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    var e = function(e) {
        function b() {
            e.call(this);
            this._hasListeners = !1;
            this._inputType = "";
            this._isShow = !1;
            this.textValue = "";
            this._height = this._width = 0;
            this._styleInfoes = {};
            var a = c.StageDelegate.getInstance().getScaleX(),
                b = c.StageDelegate.getInstance().getScaleY(),
                s = c.Browser.getInstance().$new("div");
            s.position.x = 0;
            s.position.y = 0;
            s.scale.x = a;
            s.scale.y = b;
            s.transforms();
            s.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = s;
            b = c.MainContext.instance.stage;
            a = b.stageWidth;
            b = b.stageHeight;
            s = new c.Shape;
            s.width = a;
            s.height = b;
            s.touchEnabled = !0;
            this._shape = s;
            this.getStageDelegateDiv().appendChild(this.div)
        }
        __extends(b, e);
        b.prototype.getStageDelegateDiv = function() {
            var a = c.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = c.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(c.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
            return a
        };
        b.prototype._setMultiline = function(a) {
            e.prototype._setMultiline.call(this, a);
            this.createInput()
        };
        b.prototype.callHandler = function(a) {
            a.stopPropagation()
        };
        b.prototype._add = function() {
            this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
        };
        b.prototype._remove = function() {
            this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
            this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
        };
        b.prototype._addListeners = function() {
            this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart", this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
        };
        b.prototype._removeListeners = function() {
            this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
        };
        b.prototype.createInput = function() {
            var a = this._multiline ? "textarea" : "input";
            this._inputType != a && (this._inputType = a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {}, a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
        };
        b.prototype._open = function(a, b, c, e) {};
        b.prototype._setScale = function(a, b) {
            e.prototype._setScale.call(this, a, b);
            var s = c.StageDelegate.getInstance().getScaleX(),
                x = c.StageDelegate.getInstance().getScaleY();
            this.div.scale.x = s * a;
            this.div.scale.y = x * b;
            this.div.transforms()
        };
        b.prototype.changePosition = function(a, b) {
            var e = c.StageDelegate.getInstance().getScaleX(),
                f = c.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * e;
            this.div.position.y = b * f;
            this.div.transforms()
        };
        b.prototype.setStyles = function() {
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
        b.prototype._show = function() {
            0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
            this._isShow = !0;
            var a = this._getText();
            this.inputElement.value = a;
            var b = this;
            this.inputElement.oninput = function() {
                b.textValue = b.inputElement.value;
                b.dispatchEvent(new c.Event("updateText"))
            };
            this.setStyles();
            this.inputElement.focus();
            this.inputElement.selectionStart = a.length;
            this.inputElement.selectionEnd = a.length;
            this._shape && null == this._shape.parent && c.MainContext.instance.stage.addChild(this._shape)
        };
        b.prototype._hide = function() {
            if (null != this.inputElement) {
                this._isShow = !1;
                this.inputElement.oninput = function() {};
                this.setElementStyle("border", "none");
                this.setElementStyle("display", "none");
                this.inputElement.value = "";
                this.setElementStyle("width", "0px");
                window.scrollTo(0, 0);
                var a = this;
                c.setTimeout(function() {
                    a.inputElement.blur();
                    window.scrollTo(0, 0)
                }, this, 50);
                this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
            }
        };
        b.prototype._getText = function() {
            this.textValue || (this.textValue = "");
            return this.textValue
        };
        b.prototype._setText = function(a) {
            this.textValue = a;
            this.resetText()
        };
        b.prototype.resetText = function() {
            this.inputElement && (this.inputElement.value = this.textValue)
        };
        b.prototype._setWidth = function(a) {
            this._width = a
        };
        b.prototype._setHeight = function(a) {
            this._height = a
        };
        b.prototype.setElementStyle = function(a, b) {
            this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
        };
        return b
    }(c.StageText);
    c.HTML5StageText = e;
    e.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
    return new egret.HTML5StageText
};
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, GuiContainer = function(c) {
        function e() {
            c.call(this)
        }
        __extends(e, c);
        e.prototype.dispose = function() {};
        e.prototype.onAdded = function(c) {};
        return e
    }(egret.gui.SkinnableComponent);
GuiContainer.prototype.__class__ = "GuiContainer";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, MyImg = function(c) {
        function e() {
            c.call(this)
        }
        __extends(e, c);
        e.prototype.setUrl = function(c) {
            c = new egret.gui.UIAsset(c);
            this.addElement(c)
        };
        return e
    }(egret.gui.Group);
MyImg.prototype.__class__ = "MyImg";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, Enemy = function(c) {
        function e() {
            c.call(this);
            this.initEnemy()
        }
        __extends(e, c);
        e.prototype.initEnemy = function() {
            var c = "",
                c = 0.5 > Math.random() ? "emeny_png" : "enemy1_png";
            this.addElement(new egret.gui.UIAsset(c))
        };
        return e
    }(egret.gui.Group);
Enemy.prototype.__class__ = "Enemy";
var GameUtils = function() {
    function c() {}
    c.debug = function(c) {
        console.debug(c)
    };
    c.hitTest = function(c, f) {
        var b = c.getBounds(),
            a = f.getBounds();
        b.x = c.x;
        b.y = c.y;
        a.x = f.x;
        a.y = f.y;
        return b.intersects(a)
    };
    return c
}();
GameUtils.prototype.__class__ = "GameUtils";
var Caches = function() {
    function c() {}
    c.GetEnemyBullet = function() {
        return c.cacheEnemyBullet.length ? c.cacheEnemyBullet.shift() : new egret.gui.UIAsset("enemyBullet_png")
    };
    c.GetEmeny = function() {
        return c.cacheEmeny.length ? c.cacheEmeny.shift() : new Enemy
    };
    c.cacheEnemyBullet = [];
    c.cacheEmeny = [];
    return c
}();
Caches.prototype.__class__ = "Caches";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, EnemyBulletGroup = function(c) {
        function e() {
            c.call(this);
            this.enemyBullets = [];
            this.timeInterval = 60;
            this.temp_i = this.loopCount = 0
        }
        __extends(e, c);
        e.prototype.create = function(c, b) {
            this.temp_bullet = Caches.GetEnemyBullet();
            this.temp_bullet.x = c - this.temp_bullet.width / 2;
            this.temp_bullet.y = b;
            this.addElement(this.temp_bullet);
            this.enemyBullets.push(this.temp_bullet)
        };
        e.prototype.updata = function() {
            for (this.temp_i = this.enemyBullets.length - 1; 0 <= this.temp_i; this.temp_i--) this.temp_bullet = this.enemyBullets[this.temp_i], this.temp_bullet.y += 6, this.temp_bullet.y > Main.main.stage.stageHeight && this.clearItem(this.temp_i)
        };
        e.prototype.clears = function() {
            for (this.removeAllElements(); this.enemyBullets.length;) this.temp_bullet = this.enemyBullets.shift(), Caches.cacheEnemyBullet.push(this.temp_bullet)
        };
        e.prototype.clearItem = function(c) {
            void 0 === c && (c = -1); - 1 != c && (this.temp_bullet = this.enemyBullets[c], this.removeElement(this.temp_bullet), this.enemyBullets.splice(c, 1), Caches.cacheEnemyBullet.push(this.temp_bullet))
        };
        return e
    }(egret.gui.Group);
EnemyBulletGroup.prototype.__class__ = "EnemyBulletGroup";
var VPlayUtil = function() {
    function c() {}
    c.GetBullet = function() {
        if (c.cacheBullet.length) return c.cacheBullet.shift();
        var e = new egret.gui.UIAsset("bullet_png");
        e.anchorX = 0.5;
        return e
    };
    c.GetBigEmeny = function() {
        var e;
        if (c.cacheBigEmeny.length) return e = c.cacheBigEmeny.shift(), e.life = 8, e;
        e = new MyImg;
        e.setUrl("bigEmeny_png");
        e.life = 8;
        return e
    };
    c.SetImgNum = function(e, f, b) {
        void 0 === b && (b = 1);
        e.removeAllElements();
        f = f.toString().split("");
        for (var a = 0, d = 0; d < f.length; d++) a = parseInt(f[d]), a = c.GetImgByNum(a), a.scaleX = b, a.scaleY = b, e.addElement(a)
    };
    c.GetImgByNum = function(e) {
        if (c.cacheImgNum[e]) return c.cacheImgNum[e];
        var f = new egret.gui.UIAsset("imgFont" + e);
        return c[e] = f
    };
    c.cacheBullet = [];
    c.cacheBigEmeny = [];
    c.cacheImgNum = [];
    return c
}();
VPlayUtil.prototype.__class__ = "VPlayUtil";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, VStart = function(c) {
        function e() {
            c.call(this);
            this.skinName = "skins.coustom.StartViewSkin"
        }
        __extends(e, c);
        e.prototype.partAdded = function(e, b) {
            c.prototype.partAdded.call(this, e, b);
            switch (b) {
                case this.startGameBtn:
                    this.startGameBtn.touchEnabled = !0;
                    this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapStartGameBtn, this);
                    break;
                case this.playIntroduce:
                    this.playIntroduce.touchEnabled = !0;
                    this.playIntroduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapplayIntroduceBtn, this);
                    break;
                case this.introducer:
                    this.introducer.visible = !1;
                    break;
                case this.iReturn:
                    this.iReturn.touchEnabled = !0;
                    this.iReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapIReturn, this);
                    break;
                case this.iStart:
                    this.iStart.touchEnabled = !0, this.iStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapStartGameBtn, this)
            }
        };
        e.prototype.onTouchTapIReturn = function(c) {
            this.introducer.visible = !1
        };
        e.prototype.onTouchTapStartGameBtn = function(c) {
            this.touchEnabled = this.touchChildren = !1;
            c = Main.panelLayer.hasVplay;
            var b = Main.panelLayer.vplay;
            b.touchChildren = !0;
            Main.panelLayer.addPanel(b, c)
        };
        e.prototype.onTouchTapplayIntroduceBtn = function(c) {
            this.introducer.visible = !this.introducer.visible
        };
        return e
    }(GuiContainer);
VStart.prototype.__class__ = "VStart";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, skins;
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["fillMode", "height", "source", "verticalCenter", "percentWidth"], ["scale", 10, "hscrollbtn_png", 0, 100]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.HScrollBarThumbSkin = f;
        f.prototype.__class__ = "skins.simple.HScrollBarThumbSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.minHeight = 22;
                this.elementsContent = [this.__7_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__7", "source", "tree_btndown_png")]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__7", "source", "tree_btndisabled_png")]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__7", "source", "tree_btnupselect_png")]), new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__7", "source", "tree_btndownselect_png")]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__7", "source", "tree_btndisabledselect_png")])]
            }
            __extends(a, b);
            a.prototype.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "tree_btnup_png", 100]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.TreeDisclosureButtonSkin = f;
        f.prototype.__class__ = "skins.simple.TreeDisclosureButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["fillMode", "percentHeight", "horizontalCenter", "source", "width"], ["scale", 100, 0, "vscrollbtn_png", 10]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.VScrollBarThumbSkin = f;
        f.prototype.__class__ = "skins.simple.VScrollBarThumbSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, VPlay = function(c) {
        function e() {
            c.call(this);
            this.speedOffset = 0;
            this._lastTime = -1;
            this.bg = null;
            this.currentScore = 0;
            this.currentLife = 10;
            this.currentBom = 0;
            this.isMoveFinishedByPlayer = !1;
            this.enemyBulletGroup = null;
            this.temp_i = 0;
            this.temp_enemy = null;
            this.emenies = [];
            this.temp_enemyBullet = null;
            this.emenyCreatedNum = this.EFIndex = 0;
            this.emenyCreateTime = 60;
            this.sts = [];
            this.bts = [];
            this.fullBomIndex = 0;
            this.bigEnemies = [];
            this.skinName = "skins.coustom.PlayViewSkin";
            this.touchEnabled = !1;
            this.bg = new PlayBg;
            this.bg.start();
            Main.main.gameLayer.addChild(this.bg)
        }
        __extends(e, c);
        e.prototype.onAdded = function(c) {
            c || this.goOnGame()
        };
        e.prototype.partAdded = function(e, b) {
            c.prototype.partAdded.call(this, e, b);
            switch (b) {
                case this.pauseBtn:
                    this.pauseBtn.touchEnabled = !0;
                    this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapPauseBtn, this);
                    break;
                case this.player:
                    this.player.touchEnabled = !0;
                    egret.Tween.get(this.player).wait(1E3).to({
                        y: 614
                    }, 1E3);
                    this.player.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginPlayer, this);
                    this.player.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndPlayer, this);
                    break;
                case this.menuGroup:
                    this.menuGroup.visible = !1;
                    this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                    break;
                case this.gameoverGroup:
                    this.gameoverGroup.visible = !1;
                    break;
                case this.goOnBtn:
                    this.goOnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                    break;
                case this.reStartBtn:
                    this.reStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                    break;
                case this.restartBtn2:
                    this.restartBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                    break;
                case this.fullBomGroup:
                    this.fullBomGroup.touchChildren = !1;
                    this.fullBomGroup.touchEnabled = !0;
                    this.fullBomGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                    break;
                case this.shareToFacebookBtn:
                    this.shareToFacebookBtn.touchEnabled = !0;
                    this.shareToFacebookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapShare, this);
                    break;
                case this.enemyBulletGp:
                    this.enemyBulletGroup = new EnemyBulletGroup, this.enemyBulletGp.addElement(this.enemyBulletGroup)
            }
        };
        e.prototype.onTouchTapShare = function(c) {
			
			// play68_submitScore(window.score);
            
        };
        e.prototype.onTouchTapPauseBtn = function(c) {
            this.gameoverGroup.visible || (this.menuGroup.visible ? this.goOnGame() : this.pauseGame(), this.menuGroup.visible = !this.menuGroup.visible)
        };
        e.prototype.onTouchBeginPlayer = function(c) {
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveThis, this)
        };
        e.prototype.onTouchEndPlayer = function(c) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveThis, this)
        };
        e.prototype.onTouchMoveThis = function(c) {
            var b = c.stageX - this.player.width / 2,
                a = c.stageY - this.player.height / 2;
            0 < b && b < this.width - this.player.width && (this.player.x = b);
            0 < a && a < this.height - this.player.height && (this.player.y = c.stageY - this.player.height / 2)
        };
        e.prototype.onEnterFrame = function(c) {
            this.EFIndex++;
            if (this.getPlayerMoveState())
                if (this.bg.loop(), -1 == this._lastTime) this._lastTime = egret.getTimer();
                else {
                    var b;
                    c = 0;
                    this.enemyBulletGroup && this.enemyBulletGroup.updata();
                    for (c = this.bts.length - 1; 0 <= c; c--) b = this.bts[c], b.y -= 10, Math.abs(b.y) > this.height && (this.bts.splice(c, 1), this.bulletsGroup.removeElement(b), VPlayUtil.cacheBullet.push(b));
                    this.emenyGroup && 0 == this.EFIndex % this.emenyCreateTime && (this.emenyCreatedNum++, 0 == this.emenyCreatedNum % 60 && (this.emenyCreateTime -= 2), this.temp_enemy = Caches.GetEmeny(), this.temp_enemy.x = Math.random() * (this.width - this.temp_enemy.width), this.temp_enemy.y = -this.temp_enemy.height, this.emenyGroup.addElement(this.temp_enemy), this.emenies.push(this.temp_enemy));
                    for (c = this.emenies.length - 1; 0 <= c; c--) this.temp_enemy = this.emenies[c], this.temp_enemy.y += 5, Math.abs(this.temp_enemy.y) > this.height && (this.emenies.splice(c, 1), this.temp_enemy.parent && (this.emenyGroup.removeElement(this.temp_enemy), Caches.cacheEmeny.push(this.temp_enemy)));
                    if (0 == this.EFIndex % 2) this._createEnemyBullet(), this.addBigEnemy(), this.bulletsGroup && 0 == this.EFIndex % 10 && (b = VPlayUtil.GetBullet(), b.x = this.player.x + this.player.width / 2, b.y = this.player.y - b.height, this.bulletsGroup.addElement(b), this.bts.push(b));
                    else {
                        this.checkHit();
                        this._checkHitPlayerWithEnemyBullet();
                        for (c = this.emenies.length - 1; 0 <= c; c--)
                            if (this.temp_enemy = this.emenies[c], GameUtils.hitTest(this.player, this.temp_enemy)) this.emenies.splice(c, 1), this.temp_enemy.parent && this.emenyGroup.removeElement(this.temp_enemy), Caches.cacheEmeny.push(this.temp_enemy), Main.main.showBom(this.temp_enemy.x + this.temp_enemy.width / 2, this.temp_enemy.y + this.temp_enemy.height / 2, 0.8), this._updataLife("hit");
                            else
                                for (b = this.bts.length - 1; 0 <= b; b--) {
                                    var a = this.bts[b];
                                    GameUtils.hitTest(this.temp_enemy, a) && (this.emenies.splice(c, 1), this.temp_enemy.parent && this.emenyGroup.removeElement(this.temp_enemy), Caches.cacheEmeny.push(this.temp_enemy), Main.main.showBom(this.temp_enemy.x + this.temp_enemy.width / 2, this.temp_enemy.y + this.temp_enemy.height / 2, 0.8), this.bts.splice(b, 1), this.bulletsGroup.removeElement(a), VPlayUtil.cacheBullet.push(a), this.addScore(100))
                                }
                            if (this.boss && this.boss.parent) {
                                for (c = this.bts.length - 1; 0 <= c; c--)
                                    if (b = this.bts[c], GameUtils.hitTest(b, this.boss) && (this.bts.splice(c, 1), this.bulletsGroup.removeElement(b), VPlayUtil.cacheBullet.push(b), this.boss.life--, 1 > this.boss.life)) {
                                        Main.main.showBom(this.boss.x, this.boss.y, 1.6);
                                        this.emenyGroup.removeElement(this.boss);
                                        this.boss = null;
                                        this.addScore(1E3);
                                        0 == ++this.fullBomIndex % 3 && (this.currentBom++, VPlayUtil.SetImgNum(this.fullBomLabelGroup, this.currentBom, 0.3));
                                        break
                                    }
                                this.boss && GameUtils.hitTest(this.player, this.boss) && (Main.main.showBom(this.boss.x, this.boss.y, 1.6), this.emenyGroup.removeElement(this.boss), this.boss = null, this.addScore(1E3), 0 == ++this.fullBomIndex % 3 && (this.currentBom++, VPlayUtil.SetImgNum(this.fullBomLabelGroup, this.currentBom, 0.3)), this._updataLife("hit"))
                            }
                    }
                }
        };
        e.prototype.onTouchTap = function(c) {
            switch (c.target) {
                case this.goOnBtn:
                    this.menuGroup.visible = !1;
                    this.goOnGame();
                    break;
                case this.reStartBtn:
                    this.menuGroup.visible = !1;
                    this.reStartGame();
                    break;
                case this.restartBtn2:
                    this.gameoverGroup.visible = !1;
                    this.reStartGame();
                    break;
                case this.fullBomGroup:
                    if (0 < this.currentBom) {
                        this.currentBom--;
                        for (c = this.emenies.length - 1; 0 <= c; c--) {
                            var b = this.emenies[c];
                            Main.main.showBom(b.x, b.y, -0.8);
                            this.emenies.splice(c, 1);
                            b.parent && this.emenyGroup.removeElement(b);
                            Caches.cacheEmeny.push(b);
                            this.addScore(100)
                        }
                        for (c = this.bigEnemies.length - 1; 0 <= c; c--) this.bigEnemy = this.bigEnemies[c], Main.main.showBom(this.bigEnemy.x + this.bigEnemy.width / 2, this.bigEnemy.y + this.bigEnemy.height / 2, 1.6), this.bigEnemies.splice(c, 1), this.bigEnemy.parent && (this.bigEnemy.parent.removeElement(this.bigEnemy), VPlayUtil.cacheBigEmeny.push(this.bigEnemy)), this.addScore(1E3), 0 == ++this.fullBomIndex % 3 && this.currentBom++;
                        VPlayUtil.SetImgNum(this.lifeGroup, this.currentBom, 0.3)
                    }
            }
        };
        e.prototype.onTouchTapReStart = function(c) {
            this.reStartGame()
        };
        e.prototype.onTouchTapQuitBtn = function(c) {
            this.quitGame()
        };
        e.prototype.overGame = function() {
            this.pauseGame();
            this.touchEnabled = !1
        };
        e.prototype.pauseGame = function() {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveThis, this);
            this.player.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginPlayer, this);
            this.player.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndPlayer, this);
            this.pauseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this)
        };
        e.prototype.goOnGame = function() {
            this.player.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginPlayer, this);
            this.player.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndPlayer, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveThis, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this)
        };
        e.prototype.reStartGame = function() {
            this.fullBoms();
            this._createEnemyBullet();
            this.touchChildren = !1;
            var c = Main.panelLayer.vstart;
            c.touchChildren = !0;
            Main.panelLayer.addPanel(c);
            this.currentLife = 10;
            this.currentBom = this.currentScore = 0;
            VPlayUtil.SetImgNum(this.scoreGroup, this.currentScore, 0.3);
            this.lifeBar.scaleX = this.currentLife / 3;
            VPlayUtil.SetImgNum(this.fullBomLabelGroup, this.currentBom, 0.3)
        };
        e.prototype.quitGame = function() {
            this.reStartGame()
        };
        e.prototype.addScore = function(c) {
            this.currentScore += c;
            VPlayUtil.SetImgNum(this.scoreGroup, this.currentScore, 0.3)
        };
        e.prototype.getPlayerMoveState = function() {
            120 != this.EFIndex || this.isMoveFinishedByPlayer || (this.isMoveFinishedByPlayer = !0, this.EFIndex = 1);
            return this.isMoveFinishedByPlayer ? !0 : !1
        };
        e.prototype.checkHit = function() {
            var c,
                b, a;
            for (b = this.bts.length - 1; 0 <= b; b--)
                for (c = this.bts[b], a = this.bigEnemies.length - 1; 0 <= a; a--) this.bigEnemy = this.bigEnemies[a], GameUtils.hitTest(c, this.bigEnemy) && (this.bts.splice(b, 1), this.bulletsGroup.removeElement(c), VPlayUtil.cacheBullet.push(c), this.bigEnemy.life--, 0 >= this.bigEnemy.life && (this.bigEnemies.splice(a, 1), this.bigEmenyGroup.removeElement(this.bigEnemy), VPlayUtil.cacheBigEmeny.push(this.bigEnemy), Main.main.showBom(this.bigEnemy.x + this.bigEnemy.width / 2, this.bigEnemy.y + this.bigEnemy.height / 2, 0.8), this.addScore(1E3), 0 == ++this.fullBomIndex % 3 && (this.currentBom++, VPlayUtil.SetImgNum(this.fullBomLabelGroup, this.currentBom, 0.3))));
            for (b = this.bigEnemies.length - 1; 0 <= b; b--) this.bigEnemy = this.bigEnemies[b], GameUtils.hitTest(this.player, this.bigEnemy) && (this._updataLife("hit"), this.bigEnemies.splice(a, 1), this.bigEmenyGroup.removeElement(this.bigEnemy), VPlayUtil.cacheBigEmeny.push(this.bigEnemy), Main.main.showBom(this.bigEnemy.x + this.bigEnemy.width / 2, this.bigEnemy.y + this.bigEnemy.height / 2, 0.8), this.addScore(1E3), 0 == ++this.fullBomIndex % 3 && (this.currentBom++, VPlayUtil.SetImgNum(this.fullBomLabelGroup, this.currentBom, 0.3)))
        };
        e.prototype.addBigEnemy = function() {
            this.bigEmenyGroup && (0 == this.EFIndex % 500 && (this.bigEnemy = VPlayUtil.GetBigEmeny(), this.bigEnemy.x = Math.random() * (this.width - this.bigEnemy.width), this.bigEnemy.y = -this.bigEnemy.height, this.bigEmenyGroup.addElement(this.bigEnemy), this.bigEnemies.push(this.bigEnemy)), this.moveBigEnemy())
        };
        e.prototype.moveBigEnemy = function() {
            for (var c = 0; c < this.bigEnemies.length; c++) this.bigEnemy = this.bigEnemies[c], this.bigEnemy.y += 2, this.bigEnemy.y > this.height && (this.bigEnemies.splice(c, 1), this.bigEmenyGroup.removeElement(this.bigEnemy), VPlayUtil.cacheBigEmeny.push(this.bigEnemy))
        };
        e.prototype.fullBoms = function() {
            for (var c = this.emenies.length - 1; 0 <= c; c--) {
                var b = this.emenies[c];
                this.emenies.splice(c, 1);
                this.emenyGroup.removeElement(b);
                Caches.cacheEmeny.push(b);
                this.addScore(100)
            }
            for (c = this.bigEnemies.length - 1; 0 <= c; c--) this.bigEnemy = this.bigEnemies[c],
            this.bigEnemies.splice(c, 1), this.bigEmenyGroup.removeElement(this.bigEnemy), VPlayUtil.cacheBigEmeny.push(this.bigEnemy), this.addScore(1E3)
        };
        e.prototype._createEnemyBullet = function() {
            if (0 == this.EFIndex % 60)
                for (this.temp_i = this.bigEnemies.length - 1; 0 <= this.temp_i; this.temp_i--) this.bigEnemy = this.bigEnemies[this.temp_i], this.enemyBulletGroup.create(this.bigEnemy.x + this.bigEnemy.width / 2, this.bigEnemy.y + this.bigEnemy.height);
            if (0 == this.EFIndex % 120) {
                var c = this.emenies.length;
                c && (this.temp_enemy = this.emenies[Math.floor(Math.random() * c)], this.enemyBulletGroup.create(this.temp_enemy.x + this.temp_enemy.width / 2, this.temp_enemy.y + this.temp_enemy.height))
            }
        };
        e.prototype._checkHitPlayerWithEnemyBullet = function() {
            var c = this.enemyBulletGroup.enemyBullets;
            for (this.temp_i = c.length - 1; 0 <= this.temp_i; this.temp_i--) this.temp_enemyBullet = c[this.temp_i], GameUtils.hitTest(this.player, this.temp_enemyBullet) && (this.enemyBulletGroup.clearItem(this.temp_i), this._updataLife("hit"))
        };
        e.prototype._updataLife = function(c) {
			
            "hit" == c && (0 < this.currentLife && this.currentLife--, 0 == this.currentLife && (this.gameoverGroup.visible = !0,submit_score(this.currentScore), VPlayUtil.SetImgNum(this.gameoverScoreGroup, this.currentScore, 0.3), this.overGame()), this.lifeBar.scaleX = this.currentLife / 3)
        };
        e.prototype.tikerHandler = function() {
            GameUtils.debug("tiker")
        };
        return e
    }(GuiContainer);
VPlay.prototype.__class__ = "VPlay";
var AssetAdapter = function() {
    function c() {}
    c.prototype.getAsset = function(c, f, b, a) {
        function d(a) {
            f.call(b, a, c)
        }
        a = c;
        c.prototype && (a = new c);
        a instanceof egret.DisplayObject || a instanceof egret.Texture ? f.call(b, a, c) : "string" == typeof c ? RES.hasRes(c) ? RES.getResAsync(c, d, this) : RES.getResByUrl(c, d, this) : f.call(b, a, c)
    };
    return c
}();
AssetAdapter.prototype.__class__ = "AssetAdapter";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, LoadingUI = function(c) {
        function e() {
            c.call(this);
            this.createView()
        }
        __extends(e, c);
        e.prototype.createView = function() {
            this.textField = new egret.TextField;
            this.addChild(this.textField);
            this.textField.y = 300;
            this.textField.width = 480;
            this.textField.height = 100;
            this.textField.textAlign = "center"
        };
        e.prototype.setProgress = function(c, b) {
            this.textField.text = "资源加载中..." + c + "/" + b
        };
        return e
    }(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, CBomb = function(c) {
        function e() {
            c.call(this)
        }
        __extends(e, c);
        e.prototype.showbomb = function(c, b, a) {
            var d = RES.getRes(c);
            b = RES.getRes(b);
            this.standmc = new egret.MovieClip(d, b);
            this.standmc.frameRate = 20;
            this.standmc.gotoAndPlay(a);
            this.addChild(this.standmc);
            this.standmc.addEventListener(egret.Event.COMPLETE, this.removeBomb, this);
            this.standmc.frameRate = "tc_json" == c ? 10 : 20
        };
        e.prototype.removeBomb = function(c) {
            this.standmc.removeEventListener(egret.Event.COMPLETE, this.removeBomb, this);
            null != this.standmc && null != this.standmc.parent && (this.standmc.dispose(), this.removeChild(this.standmc), this.standmc = null)
        };
        return e
    }(egret.Sprite);
CBomb.prototype.__class__ = "CBomb";
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, PanelLayer = function(c) {
        function e() {
            c.call(this)
        }
        __extends(e, c);
        Object.defineProperty(e.prototype, "vstart", {
            get: function() {
                this._vstart || (this._vstart = new VStart);
                return this._vstart
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "hasVplay", {
            get: function() {
                return this._vplay ? !1 : !0
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "vplay", {
            get: function() {
                this._vplay || (this._vplay = new VPlay);
                return this._vplay
            },
            enumerable: !0,
            configurable: !0
        });
        e.prototype.addPanel = function(c, b) {
            void 0 === b && (b = !1);
            null != c && (this.currentPanel && (this.currentPanel.dispose(), this.removeElement(this.currentPanel)), this.currentPanel = c, this.addElement(c), c.onAdded(b))
        };
        return e
    }(egret.gui.UIStage);
PanelLayer.prototype.__class__ = "PanelLayer";
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.labelDisplay_i()];
                this.states = [new egret.gui.State("up", [new egret.gui.SetProperty("labelDisplay", "textColor", 1118481)]), new egret.gui.State("down", [new egret.gui.SetProperty("__4", "source", "closebtn_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__4", "source", "closebtn_disabled_png"),
                    new egret.gui.SetProperty("labelDisplay", "textColor", 13421772)
                ])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "bottom fontFamily left right size textAlign top verticalAlign".split(" "), [12, "Tahoma", 10, 10, 20, "center", 8, "middle"]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__4 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "closebtn_up_png", 100]);
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.CloseButtonSkin = f;
        f.prototype.__class__ = "skins.simple.CloseButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 40;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.labelDisplay_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__4", "source", "app_list_item_select_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 15790320)]), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["height", "source", "percentWidth"], [1, "app_list_item_cutlline_png", 100]);
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, ["fontFamily", "left", "size", "textColor", "verticalCenter"], ["Tahoma", 32, 24, 1118481, 0]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__4 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "app_list_item_up_png",
                    100
                ]);
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.DropDownListItemRendererSkin = f;
        f.prototype.__class__ = "skins.simple.DropDownListItemRendererSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i(), this.__5_i()];
                this.states = [new egret.gui.State("up", [new egret.gui.SetProperty("__5", "source", "dropdownlist_arrow_up_png")]), new egret.gui.State("down", [new egret.gui.SetProperty("__4", "source", "DropDownListButtonSkin_down_png"), new egret.gui.SetProperty("__5", "source", "dropdownlist_arrow_down_png")]), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__4 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "DropDownListButtonSkin_up_png", 100]);
                return a
            };
            a.prototype.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__5 = a;
                this.__s(a, ["right", "verticalCenter"], [4, 0]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.DropDownListOpenButtonSkin = f;
        f.prototype.__class__ = "skins.simple.DropDownListOpenButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [10, 20]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.thumb_i = function() {
                var a = new egret.gui.Button;
                this.thumb = a;
                this.__s(a, ["height", "skinName", "verticalCenter", "width"], [10, c.simple.HScrollBarThumbSkin, 0, 24]);
                return a
            };
            a.prototype.track_i = function() {
                var a = new egret.gui.UIAsset;
                this.track = a;
                this.__s(a, "height left right source verticalCenter percentWidth".split(" "), [10, 10, 10, "hscrolltrack_png", 0, 100]);
                return a
            };
            a._skinParts = ["track", "thumb"];
            return a
        }(egret.gui.Skin);
        e.HScrollBarSkin = f;
        f.prototype.__class__ = "skins.simple.HScrollBarSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["fillMode", "percentHeight", "source", "percentWidth"], ["scale", 100, "hslider_thumb_png", 100]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.HSliderThumbSkin = f;
        f.prototype.__class__ = "skins.simple.HSliderThumbSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__7_i(), this.labelDisplay_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__7", "source", "button_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__7", "source", "button_disabled_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 13421772)]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__7", "source", "button_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)]), new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__7", "source", "button_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__7", "source", "button_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "bottom fontFamily left right size textAlign textColor top verticalAlign".split(" "), [12, "Tahoma", 10, 10, 20, "center", 1118481, 8, "middle"]);
                return a
            };
            a.prototype.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "button_normal_png", 100]);
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.TabBarButtonSkin = f;
        f.prototype.__class__ = "skins.simple.TabBarButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.minHeight = 22;
                this.elementsContent = [this.contentGroup_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.contentGroup_i = function() {
                var a = new egret.gui.Group;
                this.contentGroup = a;
                this.__s(a, ["bottom", "top"], [0, 0]);
                a.layout = this.__4_i();
                a.elementsContent = [this.disclosureButton_i(), this.iconDisplay_i(), this.labelDisplay_i()];
                return a
            };
            a.prototype.disclosureButton_i = function() {
                var a = new egret.gui.ToggleButton;
                this.disclosureButton = a;
                this.__s(a, ["skinName", "verticalCenter"], [c.simple.TreeDisclosureButtonSkin, 0]);
                return a
            };
            a.prototype.iconDisplay_i = function() {
                var a = new egret.gui.UIAsset;
                this.iconDisplay = a;
                this.__s(a, ["height", "width"], [24, 24]);
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "bottom fontFamily left maxDisplayedLines right textAlign textColor top verticalAlign".split(" "), [3, "Tahoma", 5, 1, 5, "center", 7368816, 3, "middle"]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "verticalAlign"], [1, "middle"]);
                return a
            };
            a._skinParts = ["disclosureButton", "iconDisplay", "labelDisplay", "contentGroup"];
            return a
        }(egret.gui.Skin);
        e.TreeItemRendererSkin = f;
        f.prototype.__class__ = "skins.simple.TreeItemRendererSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [10, 10]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.thumb_i = function() {
                var a = new egret.gui.Button;
                this.thumb = a;
                this.__s(a, ["height", "horizontalCenter", "skinName", "width"], [20, 0, c.simple.VScrollBarThumbSkin, 10]);
                return a
            };
            a.prototype.track_i = function() {
                var a = new egret.gui.UIAsset;
                this.track = a;
                this.__s(a, "bottom percentHeight horizontalCenter source top width".split(" "), [10, 100, 0, "vscrolltrack_png", 10, 10]);
                return a
            };
            a._skinParts = ["track", "thumb"];
            return a
        }(egret.gui.Skin);
        e.VScrollBarSkin = f;
        f.prototype.__class__ = "skins.simple.VScrollBarSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "vslider_thumb_png", 100]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.VSliderThumbSkin = f;
        f.prototype.__class__ = "skins.simple.VSliderThumbSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, Main = function(c) {
        function e() {
            c.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(e, c);
        e.prototype.onAddToStage = function(c) {
            egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
            egret.gui.Theme.load("resource/theme.thm");
            this.loadingView = new LoadingUI;
            this.stage.addChild(this.loadingView);
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/resource.json", "resource/")
        };
        e.prototype.onConfigComplete = function(c) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.loadGroup("preload")
        };
        e.prototype.onResourceLoadComplete = function(c) {
            "preload" == c.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createScene())
        };
        e.prototype.onResourceProgress = function(c) {
            "preload" == c.groupName && this.loadingView.setProgress(c.itemsLoaded, c.itemsTotal)
        };
        e.prototype.createScene = function() {
            e.main = this;
            this.gameLayer = new egret.DisplayObjectContainer;
            this.addChild(this.gameLayer);
            e.panelLayer = new PanelLayer;
            this.addChild(e.panelLayer);
            e.panelLayer.addPanel(e.panelLayer.vstart)
        };
        e.prototype.showBom = function(c, b, a) {
            void 0 === a && (a = 1);
            var d = new CBomb;
            d.showbomb("tc_json", "tc_png", "action");
            this.addChild(d);
            d.anchorX = 0.5;
            d.anchorY = 0.5;
            d.x = c;
            d.y = b;
            d.scaleX = a;
            d.scaleY = a
        };
        return e
    }(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.lifeBar_i(), this.pauseBtn_i(), this.player_i(), this.bulletsGroup_i(), this.emenyGroup_i(), this.bigEmenyGroup_i(), this.enemyBulletGp_i(), this.menuGroup_i(), this.lifeGroup_i(), this.scoreGroup_i(), this.fullBomGroup_i(), this.gameoverGroup_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__11_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["scaleX", "scaleY", "source", "x", "y"], [0.3, 0.3, "imgFont0", 0, 0]);
                return a
            };
            a.prototype.__12_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["over_jpg", 0, 0]);
                return a
            };
            a.prototype.__13_i = function() {
                return new egret.gui.HorizontalLayout
            };
            a.prototype.__14_i = function() {
                return new egret.gui.HorizontalLayout
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["height", "source", "width", "x", "y"], [30, "player_png", 46, 16, 40]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["lfieBg_png", 12, 14]);
                return a
            };
            a.prototype.__5_i = function() {
                var a = new egret.gui.VerticalLayout;
                a.gap = 30;
                return a
            };
            a.prototype.__6_i = function() {
                var a = new egret.gui.Group;
                this.__s(a, ["height", "horizontalCenter", "verticalCenter", "width"], [160, 0.5, 41, 189]);
                a.layout = this.__5_i();
                a.elementsContent = [this.goOnBtn_i(), this.reStartBtn_i()];
                return a
            };
            a.prototype.__7_i = function() {
                return new egret.gui.HorizontalLayout
            };
            a.prototype.__8_i = function() {
                return new egret.gui.HorizontalLayout
            };
            a.prototype.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["scaleX", "scaleY", "source", "x", "y"], [0.3, 0.3, "imgFont0", 27, 21]);
                return a
            };
            a.prototype.bigEmenyGroup_i = function() {
                var a = new egret.gui.Group;
                this.bigEmenyGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [200, 200, 0, 0]);
                return a
            };
            a.prototype.bulletsGroup_i = function() {
                var a = new egret.gui.Group;
                this.bulletsGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [43, 47, 0, 0]);
                return a
            };
            a.prototype.emenyGroup_i = function() {
                var a = new egret.gui.Group;
                this.emenyGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [200, 200, 0, 0]);
                return a
            };
            a.prototype.enemyBulletGp_i = function() {
                var a = new egret.gui.Group;
                this.enemyBulletGp = a;
                this.__s(a, ["height", "width", "x", "y"], [200, 200, 0, 0]);
                return a
            };
            a.prototype.fullBomGroup_i = function() {
                var a = new egret.gui.Group;
                this.fullBomGroup = a;
                this.__s(a, ["x", "y"], [371, 738]);
                a.elementsContent = [this.__10_i(), this.fullBomLabelGroup_i()];
                return a
            };
            a.prototype.fullBomLabelGroup_i = function() {
                var a = new egret.gui.Group;
                this.fullBomLabelGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [44, 44, 63, 11]);
                a.elementsContent = [this.__11_i()];
                return a
            };
            a.prototype.gameoverGroup_i = function() {
                var a = new egret.gui.Group;
                this.gameoverGroup = a;
                this.__s(a, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, !1]);
                a.elementsContent = [this.__12_i(), this.shareToFacebookBtn_i(), this.restartBtn2_i(),
                    this.gameoverScoreGroup_i(), this.gameoverHighScoreGroup_i()
                ];
                return a
            };
            a.prototype.gameoverHighScoreGroup_i = function() {
                var a = new egret.gui.Group;
                this.gameoverHighScoreGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [38, 149, 262, 530]);
                a.layout = this.__14_i();
                return a
            };
            a.prototype.gameoverScoreGroup_i = function() {
                var a = new egret.gui.Group;
                this.gameoverScoreGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [51, 200,262, 449]);
                a.layout = this.__13_i();
                return a
            };
            a.prototype.goOnBtn_i = function() {
                var a = new egret.gui.UIAsset;
                this.goOnBtn = a;
                this.__s(a, ["source", "x", "y"], ["goon_png", 134, 101]);
                return a
            };
            a.prototype.lifeBar_i = function() {
                var a = new egret.gui.UIAsset;
                this.lifeBar = a;
                this.__s(a, ["source", "x", "y"], ["lfieBar_png", 68, 20]);
                return a
            };
            a.prototype.lifeGroup_i = function() {
                var a = new egret.gui.Group;
                this.lifeGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [48, 59, 339, 13]);
                a.layout = this.__7_i();
                return a
            };
            a.prototype.menuGroup_i = function() {
                var a = new egret.gui.Group;
                this.menuGroup = a;
                this.__s(a, ["height", "horizontalCenter", "width", "y"], [360, 0, 292, 144]);
                a.elementsContent = [this.__6_i()];
                return a
            };
            a.prototype.pauseBtn_i = function() {
                var a = new egret.gui.UIAsset;
                this.pauseBtn = a;
                this.__s(a, ["left", "source", "top"], [405, "pause_png", 9]);
                return a
            };
            a.prototype.player_i = function() {
                var a = new egret.gui.UIAsset;
                this.player = a;
                this.__s(a, ["source", "x", "y"], ["player_png", 164, 866]);
                return a
            };
            a.prototype.reStartBtn_i = function() {
                var a = new egret.gui.UIAsset;
                this.reStartBtn = a;
                this.__s(a, ["source", "x", "y"], ["restart_png", 58, 101]);
                return a
            };
            a.prototype.restartBtn2_i = function() {
                var a = new egret.gui.UIAsset;
                this.restartBtn2 = a;
                this.__s(a, ["horizontalCenter", "source", "width", "y"], [94, "restart_png", 190, 610]);
                return a
            };
            a.prototype.scoreGroup_i = function() {
                var a = new egret.gui.Group;
                this.scoreGroup = a;
                this.__s(a, ["height", "width", "x", "y"], [48, 175, 72, 39]);
                a.layout = this.__8_i();
                a.elementsContent = [this.__9_i()];
                return a
            };
            a.prototype.shareToFacebookBtn_i = function() {
                var a = new egret.gui.UIAsset;
                this.shareToFacebookBtn = a;
                this.__s(a, ["height", "horizontalCenter", "source", "width", "y"], [62, -93, "facebooklogo_png", 190, 610]);
                return a
            };
            a.prototype.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["lifeLogo_png", 0, -6]);
                return a
            };
            a._skinParts = "lifeBar pauseBtn player bulletsGroup emenyGroup bigEmenyGroup enemyBulletGp goOnBtn reStartBtn menuGroup lifeGroup scoreGroup fullBomLabelGroup fullBomGroup shareToFacebookBtn restartBtn2 gameoverScoreGroup gameoverHighScoreGroup gameoverGroup".split(" ");
            return a
        }(egret.gui.Skin);
        c.PlayViewSkin = f;
        f.prototype.__class__ = "skins.coustom.PlayViewSkin"
    })(c.coustom || (c.coustom = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.playIntroduce_i(), this.startGameBtn_i(), this.introducer_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["introducer_png", 0, 0]);
                return a
            };
            a.prototype.iReturn_i = function() {
                var a = new egret.gui.UIAsset;
                this.iReturn = a;
                this.__s(a, ["source", "x", "y"], ["ireturn_png", 39, 674]);
                return a
            };
            a.prototype.iStart_i = function() {
                var a = new egret.gui.UIAsset;
                this.iStart = a;
                this.__s(a, ["source", "x", "y"], ["startButton_png", 262, 673]);
                return a
            };
            a.prototype.introducer_i = function() {
                var a = new egret.gui.Group;
                this.introducer = a;
                this.__s(a, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, !1]);
                a.elementsContent = [this.__4_i(), this.iReturn_i(), this.iStart_i()];
                return a
            };
            a.prototype.playIntroduce_i = function() {
                var a = new egret.gui.UIAsset;
                this.playIntroduce = a;
                this.__s(a, ["source", "x", "y"], ["rules_png", 44, 591]);
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["startBg_jpg", 0, 0]);
                return a
            };
            a.prototype.startGameBtn_i = function() {
                var a = new egret.gui.UIAsset;
                this.startGameBtn = a;
                this.__s(a, ["height", "right", "source", "width", "y"], [62, 44, "startButton_png", 189, 591]);
                return a
            };
            a._skinParts = ["playIntroduce", "startGameBtn", "iReturn", "iStart", "introducer"];
            return a
        }(egret.gui.Skin);
        c.StartViewSkin = f;
        f.prototype.__class__ = "skins.coustom.StartViewSkin"
    })(c.coustom || (c.coustom = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 370]);
                this.elementsContent = [this.__1_i(), this.moveArea_i(), this.contentDisplay_i(), this.__4_i()]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__2_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "panel_headeback_png", 100]);
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "horizontalAlign", "paddingLeft", "paddingRight"], [10, "center", 20, 20]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.Group;
                this.__s(a, ["bottom", "horizontalCenter"], [25, 0]);
                a.layout = this.__3_i();
                a.elementsContent = [this.firstButton_i(), this.secondButton_i()];
                return a
            };
            a.prototype.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["right", "skinName", "verticalCenter"], [10, c.simple.CloseButtonSkin, 0]);
                return a
            };
            a.prototype.contentDisplay_i = function() {
                var a = new egret.gui.Label;
                this.contentDisplay = a;
                this.__s(a, "bottom fontFamily left padding right size textAlign textColor top verticalAlign".split(" "), [45, "Tahoma", 1, 10, 1, 22, "center", 7499888, 36, "middle"]);
                return a
            };
            a.prototype.firstButton_i = function() {
                var a = new egret.gui.Button;
                this.firstButton = a;
                this.__s(a, ["height", "label", "width"], [50, "确定", 115]);
                return a
            };
            a.prototype.moveArea_i = function() {
                var a = new egret.gui.Group;
                this.moveArea = a;
                this.__s(a, ["height", "left", "right"], [55, 3, 9]);
                a.elementsContent = [this.__2_i(), this.titleDisplay_i(), this.closeButton_i()];
                return a
            };
            a.prototype.secondButton_i = function() {
                var a = new egret.gui.Button;
                this.secondButton = a;
                this.__s(a, ["height", "label", "width"], [50, "取消", 115]);
                return a
            };
            a.prototype.__1_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "panel_back_png", 100]);
                return a
            };
            a.prototype.titleDisplay_i = function() {
                var a = new egret.gui.Label;
                this.titleDisplay = a;
                this.__s(a, "fontFamily left maxDisplayedLines minHeight right size textAlign textColor verticalAlign verticalCenter".split(" "), ["Tahoma", 5, 1, 28, 5, 26, "center", 7499888, "middle", 0]);
                return a
            };
            a._skinParts = "titleDisplay closeButton moveArea contentDisplay firstButton secondButton".split(" ");
            return a
        }(egret.gui.Skin);
        e.AlertSkin = f;
        f.prototype.__class__ = "skins.simple.AlertSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i(), this.__6_i()];
                this.states = [new egret.gui.State("up", [new egret.gui.SetProperty("labelDisplay", "textColor", 1118481)]), new egret.gui.State("down", [new egret.gui.SetProperty("__4", "source", "button_down_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 2236962)]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__4", "source", "button_disabled_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 13421772)])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__5_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return a
            };
            a.prototype.__6_i = function() {
                var a = new egret.gui.Group;
                this.__s(a, ["bottom", "left", "right", "top"], [10, 10, 10, 10]);
                a.layout = this.__5_i();
                a.elementsContent = [this.iconDisplay_i(), this.labelDisplay_i()];
                return a
            };
            a.prototype.iconDisplay_i = function() {
                var a = new egret.gui.UIAsset;
                return this.iconDisplay = a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "fontFamily paddingLeft paddingRight size textAlign verticalAlign".split(" "), ["Tahoma", 5, 5, 20, "center", "middle"]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__4 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "button_normal_png", 100]);
                return a
            };
            a._skinParts = ["iconDisplay", "labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.ButtonSkin = f;
        f.prototype.__class__ = "skins.simple.ButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__10_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__8", "source", "checkbox_select_over_png")]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__8", "source", "checkbox_unselect_disabled_png")]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__8", "source", "checkbox_select_normal_png")]), new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__8", "source", "checkbox_unselect_over_png")]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__8", "source", "checkbox_select_disabled_png")])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__7_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "verticalAlign"], [5, "middle"]);
                return a
            };
            a.prototype.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                this.__s(a, ["fillMode", "height", "source", "verticalCenter", "width"], ["scale", 24, "checkbox_unselect_normal_png", 1, 24]);
                return a
            };
            a.prototype.__9_i = function() {
                var a = new egret.gui.Group;
                a.elementsContent = [this.__8_i()];
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "fontFamily maxDisplayedLines size textAlign textColor verticalAlign".split(" "), ["Tahoma", 1, 20, "center", 7368816, "middle"]);
                return a
            };
            a.prototype.__10_i = function() {
                var a = new egret.gui.Group;
                a.layout = this.__7_i();
                a.elementsContent = [this.__9_i(), this.labelDisplay_i()];
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.CheckBoxSkin = f;
        f.prototype.__class__ = "skins.simple.CheckBoxSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.openButton_i(), this.labelDisplay_i(), this.popUp_i()];
                this.states = [new egret.gui.State("normal", [new egret.gui.SetProperty("labelDisplay", "textColor", 1118481)]), new egret.gui.State("open", [new egret.gui.SetProperty("labelDisplay", "textColor", 2236962), new egret.gui.SetProperty("popUp", "displayPopUp", !0)]), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                this.__s(a, ["percentHeight", "itemRendererSkinName", "percentWidth"], [100, c.simple.DropDownListItemRendererSkin, 100]);
                a.layout = this.__4_i();
                return a
            };
            a.prototype.dropDown_i = function() {
                var a = new egret.gui.Group;
                this.dropDown = a;
                this.__s(a, ["height", "visible"], [400, !0]);
                a.elementsContent = [this.scroller_i()];
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "fontFamily paddingLeft touchChildren touchEnabled verticalAlign verticalCenter".split(" "), ["Tahoma", 10, !1, !1, "middle", 0]);
                return a
            };
            a.prototype.openButton_i = function() {
                var a = new egret.gui.Button;
                this.openButton = a;
                this.__s(a, ["percentHeight", "skinName", "percentWidth"], [100, c.simple.DropDownListOpenButtonSkin, 100]);
                return a
            };
            a.prototype.popUp_i = function() {
                var a = new egret.gui.PopUpAnchor;
                this.popUp = a;
                this.__s(a, ["displayPopUp", "percentHeight", "popUpPosition", "popUpWidthMatchesAnchorWidth", "percentWidth"], [!1, 100, "below", !0, 100]);
                a.popUp = this.dropDown_i();
                return a
            };
            a.prototype.scroller_i = function() {
                var a = new egret.gui.Scroller;
                this.scroller = a;
                this.__s(a, ["percentHeight", "percentWidth"], [100, 100]);
                a.viewport = this.dataGroup_i();
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.VerticalLayout;
                this.__s(a, ["gap", "horizontalAlign"], [0, "justify"]);
                return a
            };
            a._skinParts = "openButton labelDisplay dataGroup scroller dropDown popUp".split(" ");
            return a
        }(egret.gui.Skin);
        e.DropDownListSkin = f;
        f.prototype.__class__ = "skins.simple.DropDownListSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [13, 50]);
                this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.thumb_i = function() {
                var a = new egret.gui.Button;
                this.thumb = a;
                this.__s(a, ["height", "skinName", "verticalCenter", "width"], [24, c.simple.HSliderThumbSkin, 0, 24]);
                return a
            };
            a.prototype.trackHighlight_i = function() {
                var a = new egret.gui.UIAsset;
                this.trackHighlight = a;
                this.__s(a, ["height", "source", "verticalCenter"], [10, "hslider_fill_png", 0]);
                return a
            };
            a.prototype.track_i = function() {
                var a = new egret.gui.UIAsset;
                this.track = a;
                this.__s(a, ["height", "source", "verticalCenter", "percentWidth"], [10, "hslider_track_png", 0, 100]);
                return a
            };
            a._skinParts = ["track", "trackHighlight", "thumb"];
            return a
        }(egret.gui.Skin);
        e.HSliderSkin = f;
        f.prototype.__class__ = "skins.simple.HSliderSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 85;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.labelDisplay_i()];
                this.states = [new egret.gui.State("up", [new egret.gui.SetProperty("__4", "source", "app_list_item_up_png")]), new egret.gui.State("down", [new egret.gui.SetProperty("__4", "source", "app_list_item_select_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 15790320)]), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__5_i = function() {
                var a = new egret.gui.Rect;
                this.__s(a, "fillAlpha height strokeAlpha strokeColor strokeWeight percentWidth".split(" "), [0, 0.5, 1, 8947848, 0.5, 100]);
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, ["fontFamily", "left", "size", "textColor", "verticalCenter"], ["Tahoma", 32, 24, 1118481, 0]);
                return a
            };
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__4 = a;
                this.__s(a, ["percentHeight", "percentWidth"], [100, 100]);
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.ItemRendererSkin = f;
        f.prototype.__class__ = "skins.simple.ItemRendererSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__4_i = function() {
                var a = new egret.gui.Scroller;
                this.__s(a, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
                a.viewport = this.dataGroup_i();
                return a
            };
            a.prototype.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.layout = this.__3_i();
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.VerticalLayout;
                this.__s(a, ["gap", "horizontalAlign"], [0, "contentJustify"]);
                return a
            };
            a._skinParts = ["dataGroup"];
            return a
        }(egret.gui.Skin);
        c.ListSkin = f;
        f.prototype.__class__ = "skins.simple.ListSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.moveArea_i(), this.contentGroup_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["bottom", "left", "right", "source", "top"], [-4, -2, -2, "panel_headeback_png", -2]);
                return a
            };
            a.prototype.contentGroup_i = function() {
                var a = new egret.gui.Group;
                this.contentGroup = a;
                this.__s(a, ["bottom", "clipAndEnableScrolling", "top", "percentWidth"], [0, !0, 50, 100]);
                return a
            };
            a.prototype.moveArea_i = function() {
                var a = new egret.gui.Group;
                this.moveArea = a;
                this.__s(a, ["height", "left", "right"], [50, 0, 0]);
                a.elementsContent = [this.__4_i(), this.titleDisplay_i()];
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["bottom", "left", "right", "source", "top"], [-10, -4, -10, "panel_back_png", -4]);
                return a
            };
            a.prototype.titleDisplay_i = function() {
                var a = new egret.gui.Label;
                this.titleDisplay = a;
                this.__s(a, "fontFamily left maxDisplayedLines minHeight right size textAlign textColor verticalAlign verticalCenter".split(" "), ["Tahoma", 5, 1, 28, 5, 26, "center", 7499888, "middle", 0]);
                return a
            };
            a._skinParts = ["titleDisplay", "moveArea", "contentGroup"];
            return a
        }(egret.gui.Skin);
        c.PanelSkin = f;
        f.prototype.__class__ = "skins.simple.PanelSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 100;
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i(), this.labelDisplay_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]

            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "left maxDisplayedLines right size textAlign textColor verticalAlign verticalCenter".split(" "), [5, 1, 5, 20, "center", 7368816, "middle", 0]);
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "progressbar_track_png", 100]);
                return a
            };
            a.prototype.thumb_i = function() {
                var a = new egret.gui.UIAsset;
                this.thumb = a;
                a.source = "progressbar_fill_png";
                return a
            };
            a.prototype.track_i = function() {
                var a = new egret.gui.UIComponent;
                this.track = a;
                this.__s(a, ["percentHeight", "percentWidth"], [100, 100]);
                return a
            };
            a._skinParts = ["thumb", "track", "labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.ProgressBarSkin = f;
        f.prototype.__class__ = "skins.simple.ProgressBarSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__10_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__8", "source", "radiobutton_select_over_png")]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__8", "source", "radiobutton_unselect_disabled_png")]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__8", "source", "radiobutton_select_normal_png")]),
                    new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__8", "source", "radiobutton_unselect_over_png")]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__8", "source", "radiobutton_select_disabled_png")])
                ]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__7_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "verticalAlign"], [5, "middle"]);
                return a
            };
            a.prototype.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                this.__s(a, ["fillMode", "height", "source", "verticalCenter", "width"], ["scale", 24, "radiobutton_unselect_normal_png", 1, 24]);
                return a
            };
            a.prototype.__9_i = function() {
                var a = new egret.gui.Group;
                a.elementsContent = [this.__8_i()];
                return a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, "fontFamily maxDisplayedLines size textAlign textColor verticalAlign".split(" "), ["Tahoma", 1, 20, "center", 7368816, "middle"]);
                return a
            };
            a.prototype.__10_i = function() {
                var a = new egret.gui.Group;
                a.layout = this.__7_i();
                a.elementsContent = [this.__9_i(), this.labelDisplay_i()];
                return a
            };
            a._skinParts = ["labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.RadioButtonSkin = f;
        f.prototype.__class__ = "skins.simple.RadioButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 370]);
                this.elementsContent = [this.horizontalScrollBar_i(), this.verticalScrollBar_i()]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.horizontalScrollBar_i = function() {
                var a = new egret.gui.HScrollBar;
                this.horizontalScrollBar = a;
                a.skinName = c.simple.HScrollBarSkin;
                return a
            };
            a.prototype.verticalScrollBar_i = function() {
                var a = new egret.gui.VScrollBar;
                this.verticalScrollBar = a;
                a.skinName = c.simple.VScrollBarSkin;
                return a
            };
            a._skinParts = ["horizontalScrollBar", "verticalScrollBar"];
            return a
        }(egret.gui.Skin);
        e.ScrollerSkin = f;
        f.prototype.__class__ = "skins.simple.ScrollerSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.contentGroup_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.contentGroup_i = function() {
                var a = new egret.gui.Group;
                this.contentGroup = a;
                this.__s(a, ["percentHeight", "percentWidth"], [100, 100]);
                return a
            };
            a._skinParts = ["contentGroup"];
            return a
        }(egret.gui.Skin);
        c.SkinnableContainerSkin = f;
        f.prototype.__class__ = "skins.simple.SkinnableContainerSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [20, 60]);
                this.elementsContent = [this.dataGroup_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                this.__s(a, "bottom percentHeight itemRenderer itemRendererSkinName top percentWidth".split(" "), [0, 100, new egret.gui.ClassFactory(egret.gui.TabBarButton), c.simple.TabBarButtonSkin, 90, 100]);
                a.layout = this.__3_i();
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "horizontalAlign", "verticalAlign"], [-1, "justify", "contentJustify"]);
                return a
            };
            a._skinParts = ["dataGroup"];
            return a
        }(egret.gui.Skin);
        e.TabBarSkin = f;
        f.prototype.__class__ = "skins.simple.TabBarSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [30, 100]);
                this.elementsContent = [this.__3_i(), this.textDisplay_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [new egret.gui.SetProperty("textDisplay", "textColor", 11184810)])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "textbox_png", 100]);
                return a
            };
            a.prototype.textDisplay_i = function() {
                var a = new egret.gui.EditableText;
                this.textDisplay = a;
                this.__s(a, "bottom percentHeight left right size textColor top percentWidth".split(" "), [8, 100, 10, 10, 20, 0, 8, 100]);
                return a
            };
            a._skinParts = ["textDisplay"];
            return a
        }(egret.gui.Skin);
        c.TextAreaSkin = f;
        f.prototype.__class__ = "skins.simple.TextAreaSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [30, 100]);
                this.elementsContent = [this.__3_i(), this.textDisplay_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [new egret.gui.SetProperty("textDisplay", "textColor", 11184810)])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "textbox_png", 100]);
                return a
            };
            a.prototype.textDisplay_i = function() {
                var a = new egret.gui.EditableText;
                this.textDisplay = a;
                this.__s(a, "bottom percentHeight left right size textColor top percentWidth".split(" "), [8, 100, 10, 10, 20, 0, 8, 100]);
                return a
            };
            a._skinParts = ["textDisplay"];
            return a
        }(egret.gui.Skin);
        c.TextInputSkin = f;
        f.prototype.__class__ = "skins.simple.TextInputSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.moveArea_i(), this.contentGroup_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["bottom", "left", "right", "source", "top"], [-4, -3, -3, "panel_headeback_png", -2]);
                return a
            };
            a.prototype.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["right", "skinName", "verticalCenter"], [10, c.simple.CloseButtonSkin, 0]);
                return a
            };
            a.prototype.contentGroup_i = function() {
                var a = new egret.gui.Group;
                this.contentGroup = a;
                this.__s(a, ["bottom", "clipAndEnableScrolling", "top", "percentWidth"], [0, !0, 51, 100]);
                return a
            };
            a.prototype.moveArea_i = function() {
                var a = new egret.gui.Group;
                this.moveArea = a;
                this.__s(a, ["height", "left", "right"], [50, 0, 0]);
                a.elementsContent = [this.__4_i(), this.titleDisplay_i(), this.closeButton_i()];
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["bottom", "left", "right", "source", "top"], [-10, -4, -10, "panel_back_png", -4]);
                return a
            };
            a.prototype.titleDisplay_i = function() {
                var a = new egret.gui.Label;
                this.titleDisplay = a;
                this.__s(a, "fontFamily left maxDisplayedLines minHeight right size textAlign textColor verticalAlign verticalCenter".split(" "), ["Tahoma", 5, 1, 28, 5, 26, "center", 7499888, "middle", 0]);
                return a
            };
            a._skinParts = ["titleDisplay", "closeButton", "moveArea", "contentGroup"];
            return a
        }(egret.gui.Skin);
        e.TitleWindowSkin = f;
        f.prototype.__class__ = "skins.simple.TitleWindowSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__7_i(), this.__9_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", [new egret.gui.SetProperty("__7", "source", "togglebutton_over_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 1995877)]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__7", "source", "togglebutton_disabled_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 13421772)]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__7", "source", "togglebutton_selected_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 15658476)]), new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__7", "source", "togglebutton_over_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 1995877)]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__7", "source", "togglebutton_disabled_png"), new egret.gui.SetProperty("labelDisplay", "textColor", 13421772)])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__8_i = function() {
                var a = new egret.gui.HorizontalLayout;
                this.__s(a, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return a
            };
            a.prototype.__9_i = function() {
                var a = new egret.gui.Group;
                this.__s(a, ["bottom", "left", "right", "top"], [10, 10, 10, 10]);
                a.layout = this.__8_i();
                a.elementsContent = [this.iconDisplay_i(), this.labelDisplay_i()];
                return a
            };
            a.prototype.iconDisplay_i = function() {
                var a = new egret.gui.UIAsset;
                return this.iconDisplay = a
            };
            a.prototype.labelDisplay_i = function() {
                var a = new egret.gui.Label;
                this.labelDisplay = a;
                this.__s(a, ["fontFamily", "size", "textAlign", "textColor", "verticalAlign"], ["Tahoma", 20, "center", 1995877, "middle"]);
                return a
            };
            a.prototype.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["percentHeight", "source", "percentWidth"], [100, "togglebutton_normal_png", 100]);
                return a
            };
            a._skinParts = ["iconDisplay", "labelDisplay"];
            return a
        }(egret.gui.Skin);
        c.ToggleButtonSkin = f;
        f.prototype.__class__ = "skins.simple.ToggleButtonSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(c) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i()];
                this.states = [new egret.gui.State("up", [new egret.gui.SetProperty("__7", "visible", !0), new egret.gui.SetProperty("__8", "visible", !0), new egret.gui.SetProperty("__9", "visible", !0)]), new egret.gui.State("down", [new egret.gui.SetProperty("__7", "visible", !0), new egret.gui.SetProperty("__8", "visible", !0), new egret.gui.SetProperty("__9", "visible", !0)]), new egret.gui.State("disabled", [new egret.gui.SetProperty("__7", "visible", !0), new egret.gui.SetProperty("__8", "visible", !0), new egret.gui.SetProperty("__9", "visible", !0)]), new egret.gui.State("upAndSelected", [new egret.gui.SetProperty("__10", "visible", !0), new egret.gui.SetProperty("__11", "visible", !0), new egret.gui.SetProperty("__12", "visible", !0)]), new egret.gui.State("downAndSelected", [new egret.gui.SetProperty("__10", "visible", !0), new egret.gui.SetProperty("__11", "visible", !0), new egret.gui.SetProperty("__12", "visible", !0)]), new egret.gui.State("disabledAndSelected", [new egret.gui.SetProperty("__10", "visible", !0), new egret.gui.SetProperty("__11", "visible", !0), new egret.gui.SetProperty("__12", "visible", !0)])]
            }
            __extends(a, b);
            a.prototype.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__10 = a;
                this.__s(a, ["source", "visible"], ["onoffbutton_on_track_png", !1]);
                return a
            };
            a.prototype.__11_i = function() {
                var a = new egret.gui.UIAsset;
                this.__11 = a;
                this.__s(a, ["right", "source", "verticalCenter", "visible"], [1, "onoffbutton_on_thumb_png", 0, !1]);
                return a
            };
            a.prototype.__12_i = function() {
                var a = new egret.gui.UIAsset;
                this.__12 = a;
                this.__s(a, ["left", "source", "verticalCenter", "visible"], [15, "onoffbutton_on_label_png", 0, !1]);
                return a
            };
            a.prototype.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["source", "visible"], ["onoffbutton_off_track_png", !1]);
                return a
            };
            a.prototype.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                this.__s(a, ["left", "source", "verticalCenter", "visible"], [1, "onoffbutton_off_thumb_png", 0, !1]);
                return a
            };
            a.prototype.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__9 = a;
                this.__s(a, ["right", "source", "verticalCenter", "visible"], [15, "onoffbutton_off_label_png", 0, !1]);
                return a
            };
            return a
        }(egret.gui.Skin);
        c.ToggleSwitchSkin = f;
        f.prototype.__class__ = "skins.simple.ToggleSwitchSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.__4_i = function() {
                var a = new egret.gui.Scroller;
                this.__s(a, ["percentHeight", "percentWidth"], [100, 100]);
                a.viewport = this.dataGroup_i();
                return a
            };
            a.prototype.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.itemRendererSkinName = c.simple.TreeItemRendererSkin;
                a.layout = this.__3_i();
                return a
            };
            a.prototype.__3_i = function() {
                var a = new egret.gui.VerticalLayout;
                this.__s(a, ["gap", "horizontalAlign"], [2, "justify"]);
                return a
            };
            a._skinParts = ["dataGroup"];
            return a
        }(egret.gui.Skin);
        e.TreeSkin = f;
        f.prototype.__class__ = "skins.simple.TreeSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
__extends = this.__extends || function(c, e) {
    function f() {
        this.constructor = c
    }
    for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
    f.prototype = e.prototype;
    c.prototype = new f
};
(function(c) {
    (function(e) {
        var f = function(b) {
            function a() {
                b.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [13, 13]);
                this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "skinParts", {
                get: function() {
                    return a._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.prototype.thumb_i = function() {
                var a = new egret.gui.Button;
                this.thumb = a;
                this.__s(a, ["height", "horizontalCenter", "skinName", "width"], [24, 0, c.simple.VSliderThumbSkin, 24]);
                return a
            };
            a.prototype.trackHighlight_i = function() {
                var a = new egret.gui.UIAsset;
                this.trackHighlight = a;
                this.__s(a, ["horizontalCenter", "source", "width"], [0, "vslider_fill_png", 10]);
                return a
            };
            a.prototype.track_i = function() {
                var a = new egret.gui.UIAsset;
                this.track = a;
                this.__s(a, ["percentHeight", "horizontalCenter", "source", "width"], [100, 0, "vslider_track_png", 10]);
                return a
            };
            a._skinParts = ["track", "trackHighlight", "thumb"];
            return a
        }(egret.gui.Skin);
        e.VSliderSkin = f;
        f.prototype.__class__ = "skins.simple.VSliderSkin"
    })(c.simple || (c.simple = {}))
})(skins || (skins = {}));
var __extends = this.__extends || function(c, e) {
        function f() {
            this.constructor = c
        }
        for (var b in e) e.hasOwnProperty(b) && (c[b] = e[b]);
        f.prototype = e.prototype;
        c.prototype = new f
    }, PlayBg = function(c) {
        function e() {
            c.call(this);
            this.bgArray = [];
            this.state = "";
            var e = RES.getRes("img_bg_level_1_jpg"),
                b = new egret.Bitmap(e);
            b.y = 0;
            this.addChild(b);
            this.bgArray.push(b);
            e = new egret.Bitmap(e);
            e.y = -e.height;
            this.addChild(e);
            this.bgArray.push(e)
        }
        __extends(e, c);
        e.prototype.loop = function() {
            "start" == this.state && this.step()
        };
        e.prototype.start = function() {
            this.state = "start"
        };
        e.prototype.stop = function() {
            this.state = "stop"
        };
        e.prototype.step = function() {
            for (var c = this.bgArray, b, a = 0; a < c.length; a++) b = c[a], b.y += 3, b.y >= b.height && (c.shift(), c.push(b), b.y -= 2 * b.height)
        };
        return e
    }(egret.DisplayObjectContainer);
PlayBg.prototype.__class__ = "PlayBg";