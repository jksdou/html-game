"use strict";
(function() {
    function e(e, t) {
        function n() {}
        n.prototype = e;
        var r = new n,
            i;
        for (i in t) r[i] = t[i];
        t.toString !== Object.prototype.toString && (r.toString = t.toString);
        return r
    }

    function t(e) {
        return e instanceof Array ? function() {
            return l.iter(e)
        } : "function" == typeof e.iterator ? n(e, e.iterator) : e.iterator
    }

    function n(e, t) {
        if (null == t) return null;
        null == t.__id__ && (t.__id__ = Qn++);
        var n;
        null == e.hx__closures__ ? e.hx__closures__ = {} : n = e.hx__closures__[t.__id__];
        null == n && (n = function() {
            return n.method.apply(n.scope, arguments)
        }, n.scope = e, n.method = t, e.hx__closures__[t.__id__] = n);
        return n
    }
    var r = {},
        i = function() {
            return In.__string_rec(this, "")
        },
        s = function(e, t) {
            t = t.split("u").join("");
            this.r = RegExp(e, t)
        };
    r.EReg = s;
    s.__name__ = ["EReg"];
    s.prototype = {
        match: function(e) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(e);
            this.r.s = e;
            return null != this.r.m
        },
        matched: function(e) {
            if (null != this.r.m && 0 <= e && e < this.r.m.length) return this.r.m[e];
            throw "EReg::matched"
        },
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        split: function(e) {
            return e.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        __class__: s
    };
    var o = function() {};
    r.G = o;
    o.__name__ = ["G"];
    o.saveHiScore = function(e) {
        e > o.HI_SCORE && (o.HI_SCORE = e, Kn.saveData("hi_score", o.HI_SCORE))
    };
    o.loadHiScore = function() {
        var e = Kn.loadData("hi_score");
        o.HI_SCORE = 0 < e ? e : 0
    };
    var u = function(e, t) {
        null == t && (t = 0);
        null == e && (e = 0);
        this.x = e;
        this.y = t
    };
    r["flambe.math.Point"] = u;
    u.__name__ = ["flambe", "math", "Point"];
    u.prototype = {
        __class__: u
    };
    var a = function(e, t, n) {
        a.ref = this;
        this.rootRef = e;
        this.width = t;
        this.height = n;
        a.offsetX = (Kn.width - t * (a.pieceWidth + a.gap)) / 2 + a.pieceWidth / 2 | 0;
        e = [];
        t = 0;
        for (n = this.height; t < n;) t++, e.push(function(e) {
            for (var t = [], n = 0, e = e.width; n < e;) n++, t.push(null);
            return t
        }(this));
        this.grid = e;
        f.canMakeAction = !0
    };
    r.Grid = a;
    a.__name__ = ["Grid"];
    a.prototype = {
        addRandPiece: function(e, t) {
            return new f(e, t, m.random(a.pieceTypes))
        },
        addBonusPieceAt: function(e, t) {
            var n = new f(t, 0, a.pieceTypes + e);
            return this.grid[0][t] = n
        },
        addRandRows: function(e) {
            for (var t = this.grid.length - 1, e = t - e; t > e;) {
                for (var n = 0, r = this.grid[t].length; n < r;) {
                    var i = n++;
                    this.grid[t][i] = this.addRandPiece(i, t)
                }
                t--
            }
        },
        getPiecesOfType: function(e) {
            for (var t = [], n = 0, r = this.grid.length; n < r;)
                for (var i = n++, s = 0, o = this.grid[i].length; s < o;) {
                    var u = s++;
                    null != this.grid[i][u] && this.grid[i][u].type == e && t.push(this.grid[i][u])
                }
            return t
        },
        pushPiecesUp: function() {
            var e = this.getPiecesAtTop();
            if (0 < e.length)
                for (var t = 0, n = e.length; t < n;) {
                    var r = t++;
                    if (!(e[r].type > a.pieceTypes - 1)) return !1
                }
            e = 0;
            for (t = this.grid.length; e < t;)
                for (var n = e++, r = 0, i = this.grid[n].length; r < i;) {
                    var s = r++;
                    null != this.grid[n][s] && (0 != n ? (this.grid[n - 1][s] = this.grid[n][s], this.grid[n - 1][s].gridY = n - 1, this.grid[n - 1][s].tweenOnPushUp(), this.grid[n][s] = null) : this.grid[n][s].type > a.pieceTypes - 1 && (this.grid[n][s].tweenOnBonusDeath(), this.grid[n][s] = null))
                }
            this.getPiecesAtTop();
            return !0
        },
        getPiecesAtTop: function() {
            for (var e = [], t = 0, n = this.grid[0].length; t < n;) {
                var r = t++;
                null != this.grid[0][r] && (e.push(this.grid[0][r]), this.grid[0][r].tweenOnTop())
            }
            return e
        },
        coordsInGrid: function(e, t) {
            return 0 <= e && 0 <= t && e < this.width && t < this.height
        },
        getPiece: function(e, t) {
            return this.coordsInGrid(e, t) && null != this.grid[t][e] ? this.grid[t][e] : null
        },
        neighbourOf: function(e, t) {
            var n = e.relativeCoordinates(t, 1);
            return this.getPiece(n.x | 0, n.y | 0)
        },
        neighboursOf: function(e) {
            for (var t = [], n = 0, r = a.dirs.length; n < r;) {
                var i = n++;
                t.push(this.neighbourOf(e, a.dirs[i]))
            }
            return t
        },
        getDeepMatches: function(e) {
            null == e && (e = 2);
            for (var t = [], n = [], r = 0, i = this.grid.length; r < i;)
                for (var s = this.grid[r++], o = 0, u = s.length; o < u;) {
                    var a = o++,
                        f = s[a];
                    if (null != f && -1 == c.indexOf(t, f)) {
                        for (var a = f.deepMatchingNeighbours(), l = 0, h = a.length; l < h;) {
                            var p = l++;
                            t.push(a[p])
                        }
                        if (a.length >= e && null != f) {
                            f = 0;
                            for (l = a.length; f < l;) h = f++, n.push(a[h])
                        }
                    }
                }
            return n
        },
        applyGravityDown: function() {
            for (var e = this.grid.length - 1, t = []; 0 < e;) {
                for (var n = this.grid[e], r = 0, i = n.length; r < i;) {
                    var s = r++;
                    if (null == n[s])
                        for (var o = e; 0 < o;) o--, null != this.grid[o][s] && (this.grid[e][s] = this.grid[o][s], this.grid[e][s].gridY = e, t.push(this.grid[e][s]), this.grid[o][s] = null, o = 0)
                }
                e--
            }
            return t
        },
        slideToLeft: function() {
            for (var e = this.grid[this.grid.length - 1], t = 0, n = [], r = 0, i = e.length; r < i;) {
                var s = r++;
                if (null == e[s] && s != e.length - 1 && (t++, null != e[s + 1])) {
                    for (var s = s + 1, o = e[s]; null != o;) {
                        for (var o = 0, u = this.grid.length; o < u;) {
                            var a = o++;
                            null != this.grid[a][s] && (this.grid[a][s - t] = this.grid[a][s], this.grid[a][s - t].gridX = s - t, n.push(this.grid[a][s - t]), this.grid[a][s] = null)
                        }
                        s++;
                        o = e[s]
                    }
                    t = 0
                }
            }
            return n
        },
        clear: function() {
            for (var e = 0, t = this.grid.length; e < t;)
                for (var n = e++, r = 0, i = this.grid[n].length; r < i;) {
                    var s = r++;
                    null != this.grid[n][s] && this.grid[n][s].tweenOnGameOver();
                    this.grid[n][s] = null
                }
        },
        clear2: function() {
            for (var e = 0, t = this.grid.length; e < t;)
                for (var n = e++, r = 0, i = this.grid[n].length; r < i;) {
                    var s = r++;
                    null != this.grid[n][s] && this.grid[n][s].tweenOnLevelEnd();
                    this.grid[n][s] = null
                }
        },
        __class__: a
    };
    var f = function(e, t, n) {
        this.gridX = e;
        this.gridY = t;
        this.type = n;
        this.init()
    };
    r.Piece = f;
    f.__name__ = ["Piece"];
    f.prototype = {
        init: function() {
            var e = this;
            f.canMakeAction = !0;
            this.pieceEnt = Kn.addImageSprite(a.ref.rootRef, this.getX(), this.initY(), "bl" + this.type);
            this.pieceEnt.add(new yn);
            this.pieceEnt._compMap.Disposer_2.connect1(this.pieceEnt._compMap.Sprite_0.get_pointerUp(), n(this, this.onPointerUp));
            null == f.actionSequence && (f.actionSequence = new wn, f.actionSequence.add(new dn(function() {
                f.canMakeAction = !1;
                for (var e = a.ref.applyGravityDown(), t = 0, n = e.length; t < n;) {
                    var r = t++;
                    e[r].tweenOnGravityDown()
                }
            })), f.actionSequence.add(new vn(.1)), f.actionSequence.add(new dn(function() {
                for (var t = a.ref.slideToLeft(), n = 0, r = t.length; n < r;) {
                    var i = n++;
                    t[i].tweenOnSlideLeft()
                }
                e.showBonusInfo()
            })), f.actionSequence.add(new dn(function() {
                a.ref.rootRef._compMap.GameSceneComp_7.checkForMatches()
            })), f.actionSequence.add(new dn(function() {
                f.canMakeAction = !0
            })));
            this.tweenOnInit();
            this.showBonusInfo()
        },
        onPointerUp: function() {
            if (f.canMakeAction)
                if (this.type > a.pieceTypes - 1) this.activateBonus3(this.type - a.pieceTypes);
                else {
                    var e = this.deepMatchingNeighbours();
                    if (0 < e.length) {
                        $n.playSfx("pop_sfx");
                        for (var t = 0, n = e.length; t < n;) {
                            var r = t++;
                            this.tweenOnRemove(e[r])
                        }
                        this.updateGrid(e);
                        e.length > a.minMatchForBonus - 1 && this.addBonus(Kn.rand(a.pieceTypes))
                    } else this.tweenShake()
                }
        },
        updateGrid: function(e, t) {
            null == t && (t = !1);
            var n = e.length,
                r = 10 * n * n * n - 10 * n;
            t && (r = 10 * n * n);
            a.ref.rootRef._compMap.GameSceneComp_7.updateScore(r);
            var i;
            i = Kn.addLabel(a.ref.rootRef, this.getX(), this.getY(), "+" + r, 1.2, 1, !0)._compMap.Sprite_0;
            Jn.to(i, .5, {
                y: i.y._value - 45
            }, 0, function() {
                i.dispose()
            }, F.cubeOut);
            a.ref.rootRef._compMap.Script_3.run(f.actionSequence)
        },
        addBonus: function(e) {
            var t = this;
            a.ref.rootRef._compMap.Script_3.run(new wn([new vn(.1), new dn(function() {
                a.ref.addBonusPieceAt(e, t.gridX);
                a.ref.rootRef._compMap.Script_3.run(f.actionSequence)
            })]))
        },
        activateBonus3: function(e) {
            e = a.ref.getPiecesOfType(e);
            if (0 == e.length) this.tweenShake();
            else {
                for (var t = 0, n = e.length; t < n;) {
                    var r = t++;
                    this.tweenOnRemove(e[r])
                }
                this.tweenOnRemove(this);
                $n.playSfx("bonus_sfx", 1);
                a.ref.rootRef._compMap.Script_3.run(new En(10, 0, .5));
                this.updateGrid(e, !0)
            }
        },
        showBonusInfo: function() {
            for (var e = [], t = [], n = 0, r = a.ref.grid.length; n < r;)
                for (var i = n++, s = 0, o = a.ref.grid[i].length; s < o;) {
                    var u = s++;
                    if (null != a.ref.grid[i][u]) {
                        a.ref.grid[i][u].pieceEnt.disposeChildren();
                        var f = a.ref.grid[i][u].deepMatchingNeighbours();
                        if (f.length > a.minMatchForBonus - 1 && -1 == c.indexOf(e, a.ref.grid[i][u])) {
                            t.push(a.ref.grid[i][u]);
                            for (var u = 0, l = f.length; u < l;) {
                                var h = u++;
                                e.push(f[h])
                            }
                        }
                    }
                }
            e = 0;
            for (n = t.length; e < n;) r = e++, Kn.addImageSprite(t[r].pieceEnt, (a.pieceWidth / 2 | 0) + 5, a.pieceHeight / 2 | 0, "bonus_marker")
        },
        getX: function() {
            return this.gridX * (a.pieceWidth + a.gap) + (a.gap / 2 | 0) + a.offsetX
        },
        getY: function() {
            return this.gridY * (a.pieceHeight + a.gap) + (a.gap / 2 | 0) + a.offsetY
        },
        initY: function() {
            return this.type < a.pieceTypes ? this.getY() + Kn.height + (a.pieceHeight / 2 | 0) - a.offsetY : -100
        },
        tweenOnInit: function() {
            this.pieceEnt._compMap.Sprite_0.y.animateTo(this.getY(), .4, F.bounceIn)
        },
        tweenOnRemove: function(e) {
            this.removeJitterBehavior();
            a.ref.grid[e.gridY][e.gridX] = null;
            e.pieceEnt._compMap.Sprite_0.setAlpha(.7);
            Jn.to(e.pieceEnt._compMap.Sprite_0, .4, {
                alpha: .5,
                scaleX: 0,
                scaleY: 0
            }, 0, function() {
                e.pieceEnt.dispose()
            }, F.backIn)
        },
        tweenOnBonusDeath: function() {
            var e = this;
            this.removeJitterBehavior();
            this.pieceEnt._compMap.Sprite_0.setAlpha(.7);
            this.pieceEnt._compMap.Sprite_0.y.animateTo(Kn.height + 100, 1, F.backIn);
            Jn.to(this.pieceEnt._compMap.Sprite_0, 3, {
                rotation: 720
            }, 0, function() {
                e.pieceEnt.dispose()
            }, F.backIn)
        },
        tweenOnLevelEnd: function() {
            f.canMakeAction = !1
        },
        tweenOnGameOver: function() {
            var e = this;
            this.removeJitterBehavior();
            f.canMakeAction = !1;
            Jn.to(this.pieceEnt._compMap.Sprite_0, .4, {
                y: this.getY() - 20
            }, 0, function() {
                e.pieceEnt._compMap.Sprite_0.y.animateTo(Kn.height + 100, 1, F.backIn);
                e.pieceEnt._compMap.Sprite_0.rotation.animateTo(720 * Kn.randSign(), 3, F.quadIn)
            }, F.backIn)
        },
        tweenOnTop: function() {
            var e = this;
            this.type > a.pieceTypes - 1 || this.pieceEnt._compMap.Script_3.run(new wn([new vn(.6), new dn(function() {
                e.pieceEnt._compMap.Sprite_0.x.set_behavior(new I(e.getX(), 2));
                e.pieceEnt._compMap.Sprite_0.y.set_behavior(new I(e.getY(), 2));
                if (null == a.ref.rootRef.firstChild.firstChild) {
                    var t;
                    t = Kn.addFillSprite(a.ref.rootRef.firstChild, 0, 0, 16711680, Kn.width, Kn.height, .2, !1)._compMap.Sprite_0;
                    Kn.addDelay(t.owner, .2, function() {.2 == t.alpha._value ? t.alpha.set__(0) : t.alpha.set__(.2)
                    }, !0)
                }
            })]))
        },
        removeJitterBehavior: function() {
            this.pieceEnt._compMap.Script_3.stopAll();
            this.pieceEnt._compMap.Sprite_0.x.set_behavior(null);
            this.pieceEnt._compMap.Sprite_0.y.set_behavior(null);
            0 == a.ref.getPiecesAtTop().length && null != a.ref.rootRef.firstChild.firstChild && a.ref.rootRef.firstChild.disposeChildren()
        },
        tweenOnSlideLeft: function() {
            var e = this;
            f.canMakeAction = !1;
            this.pieceEnt._compMap.Sprite_0.x.animateTo(this.getX(), .4, F.backInOut);
            Jn.to(this.pieceEnt._compMap.Sprite_0, .1, {
                rotation: 10,
                scaleX: .7
            }, .1, function() {
                Jn.to(e.pieceEnt._compMap.Sprite_0, .15, {
                    rotation: 0,
                    scaleX: 1
                }, 0, null, F.backOut)
            }, F.backIn)
        },
        tweenOnPushUp: function() {
            f.canMakeAction = !1;
            Jn.to(this.pieceEnt._compMap.Sprite_0, .4, {
                y: this.getY()
            }, 0, function() {
                f.canMakeAction = !0
            }, F.backIn)
        },
        tweenOnGravityDown: function() {
            var e = this;
            this.removeJitterBehavior();
            this.pieceEnt._compMap.Sprite_0.y.animateTo(this.getY(), .4, F.backIn);
            Jn.to(this.pieceEnt._compMap.Sprite_0, .15, {
                scaleX: 1.2,
                scaleY: .7
            }, .1, function() {
                Jn.to(e.pieceEnt._compMap.Sprite_0, .25, {
                    scaleX: 1,
                    scaleY: 1
                }, 0, null, F.backInOut)
            }, F.bounceInOut)
        },
        tweenShake: function() {
            $n.playSfx("no_match_sfx", .5);
            this.pieceEnt._compMap.Sprite_0.x.set__(this.getX());
            this.pieceEnt._compMap.Sprite_0.y.set__(this.getY());
            this.pieceEnt._compMap.Script_3.run(new En(10, 0, .3))
        },
        relativeCoordinates: function(e, t) {
            return new u(this.gridX + t * e.x, this.gridY + t * e.y)
        },
        neighbours: function() {
            return a.ref.neighboursOf(this)
        },
        matchingNeighbours: function() {
            for (var e = [], t = this.neighbours(), n, r = 0, i = t.length; r < i;) n = r++, n = t[n], null != n && n.type == this.type && this.type < a.pieceTypes && e.push(n);
            return e
        },
        deepMatchingNeighbours: function() {
            var e = [],
                t = null,
                t = function(n) {
                    for (var n = n.matchingNeighbours(), r = 0, i = n.length; r < i;) {
                        var s = r++,
                            s = n[s]; - 1 == c.indexOf(e, s) && (e.push(s), t(s))
                    }
                };
            t(this);
            return e
        },
        __class__: f
    };
    var l = function() {};
    r.HxOverrides = l;
    l.__name__ = ["HxOverrides"];
    l.dateStr = function(e) {
        var t = e.getMonth() + 1,
            n = e.getDate(),
            r = e.getHours(),
            i = e.getMinutes(),
            s = e.getSeconds();
        return e.getFullYear() + "-" + (10 > t ? "0" + t : "" + t) + "-" + (10 > n ? "0" + n : "" + n) + " " + (10 > r ? "0" + r : "" + r) + ":" + (10 > i ? "0" + i : "" + i) + ":" + (10 > s ? "0" + s : "" + s)
    };
    l.strDate = function(e) {
        switch (e.length) {
            case 8:
                var e = e.split(":"),
                    t = new Date;
                t.setTime(0);
                t.setUTCHours(e[0]);
                t.setUTCMinutes(e[1]);
                t.setUTCSeconds(e[2]);
                return t;
            case 10:
                return e = e.split("-"), new Date(e[0], e[1] - 1, e[2], 0, 0, 0);
            case 19:
                return t = e.split(" "), e = t[0].split("-"), t = t[1].split(":"), new Date(e[0], e[1] - 1, e[2], t[0], t[1], t[2]);
            default:
                throw "Invalid date format : " + e
        }
    };
    l.cca = function(e, t) {
        var n = e.charCodeAt(t);
        return n != n ? void 0 : n
    };
    l.substr = function(e, t, n) {
        if (null != t && 0 != t && null != n && 0 > n) return "";
        null == n && (n = e.length);
        0 > t ? (t = e.length + t, 0 > t && (t = 0)) : 0 > n && (n = e.length + n - t);
        return e.substr(t, n)
    };
    l.remove = function(e, t) {
        var n = e.indexOf(t);
        if (-1 == n) return !1;
        e.splice(n, 1);
        return !0
    };
    l.iter = function(e) {
        return {
            cur: 0,
            arr: e,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var c = function() {};
    r.Lambda = c;
    c.__name__ = ["Lambda"];
    c.array = function(e) {
        for (var n = [], e = t(e)(); e.hasNext();) {
            var r = e.next();
            n.push(r)
        }
        return n
    };
    c.count = function(e, n) {
        var r = 0;
        if (null == n)
            for (var i = t(e)(); i.hasNext();) i.next(), r++;
        else
            for (i = t(e)(); i.hasNext();) {
                var s = i.next();
                n(s) && r++
            }
        return r
    };
    c.indexOf = function(e, n) {
        for (var r = 0, i = t(e)(); i.hasNext();) {
            var s = i.next();
            if (n == s) return r;
            r++
        }
        return -1
    };
    var h = function() {
        this.length = 0
    };
    r.List = h;
    h.__name__ = ["List"];
    h.prototype = {
        add: function(e) {
            e = [e];
            null == this.h ? this.h = e : this.q[1] = e;
            this.q = e;
            this.length++
        },
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var e = this.h[0];
                    this.h = this.h[1];
                    return e
                }
            }
        },
        __class__: h
    };
    var p = function() {};
    r.Main = p;
    p.__name__ = ["Main"];
    p.main = function() {
        P.init();
        Kn.systemBgColor = 5459013;
        (new Kn(640, 960)).init.connect(p.onInit).once()
    };
    p.onInit = function() {
        o.loadHiScore();
        Kn.buttonClickSfx = "button_click_sfx";
        Kn.goToScene((new Xn).root)
    };
    var d = function() {};
    r.IMap = d;
    d.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var v = function() {};
    r.Reflect = v;
    v.__name__ = ["Reflect"];
    v.field = function(e, t) {
        try {
            return e[t]
        } catch (n) {
            return null
        }
    };
    v.getProperty = function(e, t) {
        var n;
        return null == e ? null : e.__properties__ && (n = e.__properties__["get_" + t]) ? e[n]() : e[t]
    };
    v.callMethod = function(e, t, n) {
        return t.apply(e, n)
    };
    v.fields = function(e) {
        var t = [];
        if (null != e) {
            var n = Object.prototype.hasOwnProperty,
                r;
            for (r in e) "__id__" != r && "hx__closures__" != r && n.call(e, r) && t.push(r)
        }
        return t
    };
    v.isFunction = function(e) {
        return "function" == typeof e && !(e.__name__ || e.__ename__)
    };
    v.deleteField = function(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t)) return !1;
        delete e[t];
        return !0
    };
    var m = function() {};
    r.Std = m;
    m.__name__ = ["Std"];
    m.is = function(e, t) {
        return In.__instanceof(e, t)
    };
    m.string = function(e) {
        return In.__string_rec(e, "")
    };
    m["int"] = function(e) {
        return e | 0
    };
    m.parseInt = function(e) {
        var t = parseInt(e, 10);
        if (0 == t && (120 == l.cca(e, 1) || 88 == l.cca(e, 1))) t = parseInt(e);
        return isNaN(t) ? null : t
    };
    m.parseFloat = function(e) {
        return parseFloat(e)
    };
    m.random = function(e) {
        return 0 >= e ? 0 : Math.floor(Math.random() * e)
    };
    var g = function() {
        this.b = ""
    };
    r.StringBuf = g;
    g.__name__ = ["StringBuf"];
    g.prototype = {
        add: function(e) {
            this.b += m.string(e)
        },
        __class__: g
    };
    var y = function() {};
    r.StringTools = y;
    y.__name__ = ["StringTools"];
    y.startsWith = function(e, t) {
        return e.length >= t.length && l.substr(e, 0, t.length) == t
    };
    y.replace = function(e, t, n) {
        return e.split(t).join(n)
    };
    y.fastCodeAt = function(e, t) {
        return e.charCodeAt(t)
    };
    var b = r.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    b.TNull = ["TNull", 0];
    b.TNull.toString = i;
    b.TNull.__enum__ = b;
    b.TInt = ["TInt", 1];
    b.TInt.toString = i;
    b.TInt.__enum__ = b;
    b.TFloat = ["TFloat", 2];
    b.TFloat.toString = i;
    b.TFloat.__enum__ = b;
    b.TBool = ["TBool", 3];
    b.TBool.toString = i;
    b.TBool.__enum__ = b;
    b.TObject = ["TObject", 4];
    b.TObject.toString = i;
    b.TObject.__enum__ = b;
    b.TFunction = ["TFunction", 5];
    b.TFunction.toString = i;
    b.TFunction.__enum__ = b;
    b.TClass = function(e) {
        e = ["TClass", 6, e];
        e.__enum__ = b;
        e.toString = i;
        return e
    };
    b.TEnum = function(e) {
        e = ["TEnum", 7, e];
        e.__enum__ = b;
        e.toString = i;
        return e
    };
    b.TUnknown = ["TUnknown", 8];
    b.TUnknown.toString = i;
    b.TUnknown.__enum__ = b;
    var w = function() {};
    r.Type = w;
    w.__name__ = ["Type"];
    w.getClassName = function(e) {
        return e.__name__.join(".")
    };
    w.getEnumName = function(e) {
        return e.__ename__.join(".")
    };
    w.resolveClass = function(e) {
        e = r[e];
        return null == e || !e.__name__ ? null : e
    };
    w.resolveEnum = function(e) {
        e = r[e];
        return null == e || !e.__ename__ ? null : e
    };
    w.createEmptyInstance = function(e) {
        function t() {}
        t.prototype = e.prototype;
        return new t
    };
    w.createEnum = function(e, t, n) {
        var r = v.field(e, t);
        if (null == r) throw "No such constructor " + t;
        if (v.isFunction(r)) {
            if (null == n) throw "Constructor " + t + " need parameters";
            return r.apply(e, n)
        }
        if (null != n && 0 != n.length) throw "Constructor " + t + " does not need parameters";
        return r
    };
    w.getEnumConstructs = function(e) {
        return e.__constructs__.slice()
    };
    w["typeof"] = function(e) {
        switch (typeof e) {
            case "boolean":
                return b.TBool;
            case "string":
                return b.TClass(String);
            case "number":
                return Math.ceil(e) == e % 2147483648 ? b.TInt : b.TFloat;
            case "object":
                if (null == e) return b.TNull;
                var t = e.__enum__;
                if (null != t) return b.TEnum(t);
                e = e instanceof Array && null == e.__enum__ ? Array : e.__class__;
                return null != e ? b.TClass(e) : b.TObject;
            case "function":
                return e.__name__ || e.__ename__ ? b.TObject : b.TFunction;
            case "undefined":
                return b.TNull;
            default:
                return b.TUnknown
        }
    };
    var E = function() {};
    r["flambe.util.Disposable"] = E;
    E.__name__ = ["flambe", "util", "Disposable"];
    E.prototype = {
        __class__: E
    };
    var S = function() {};
    r["flambe.Component"] = S;
    S.__name__ = ["flambe", "Component"];
    S.__interfaces__ = [E];
    S.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        init: function(e, t) {
            this.owner = e;
            this.next = t
        },
        __class__: S,
        __properties__: {
            get_name: "get_name"
        }
    };
    var x = function() {
        this._disposables = []
    };
    r["flambe.Disposer"] = x;
    x.__name__ = ["flambe", "Disposer"];
    x.__super__ = S;
    x.prototype = e(S.prototype, {
        get_name: function() {
            return "Disposer_2"
        },
        add: function(e) {
            this._disposables.push(e);
            return this
        },
        connect1: function(e, t) {
            this.add(e.connect(t));
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            S.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var e = this._disposables;
            this._disposables = [];
            for (var t = 0; t < e.length;) {
                var n = e[t];
                ++t;
                n.dispose()
            }
        },
        __class__: x
    });
    var T = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    r["flambe.Entity"] = T;
    T.__name__ = ["flambe", "Entity"];
    T.__interfaces__ = [E];
    T.prototype = {
        add: function(e) {
            null != e.owner && e.owner.remove(e);
            var t = e.get_name(),
                n = this._compMap[t];
            null != n && this.remove(n);
            this._compMap[t] = e;
            t = null;
            for (n = this.firstComponent; null != n;) t = n, n = n.next;
            null != t ? t.next = e : this.firstComponent = e;
            e.init(this, null);
            e.onAdded();
            return this
        },
        remove: function(e) {
            for (var t = null, n = this.firstComponent; null != n;) {
                var r = n.next;
                if (n == e) return null == t ? this.firstComponent = r : t.init(this, r), delete this._compMap[n.get_name()], n.onRemoved(), n.init(null, null), !0;
                t = n;
                n = r
            }
            return !1
        },
        addChild: function(e, t) {
            null == t && (t = !0);
            null != e.parent && e.parent.removeChild(e);
            e.parent = this;
            if (t) {
                for (var n = null, r = this.firstChild; null != r;) n = r, r = r.next;
                null != n ? n.next = e : this.firstChild = e
            } else e.next = this.firstChild, this.firstChild = e;
            return this
        },
        removeChild: function(e) {
            for (var t = null, n = this.firstChild; null != n;) {
                var r = n.next;
                if (n == e) {
                    null == t ? this.firstChild = r : t.next = r;
                    n.parent = null;
                    n.next = null;
                    break
                }
                t = n;
                n = r
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: T
    };
    var N = function() {};
    r["flambe.util.PackageLog"] = N;
    N.__name__ = ["flambe", "util", "PackageLog"];
    var C = function() {};
    r["flambe.platform.Platform"] = C;
    C.__name__ = ["flambe", "platform", "Platform"];
    C.prototype = {
        __class__: C
    };
    var k = function() {};
    r["flambe.platform.html.HtmlPlatform"] = k;
    k.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    k.__interfaces__ = [C];
    k.prototype = {
        init: function() {
            var e = this;
            tn.fixAndroidMath();
            var t = null;
            try {
                t = window.flambe.canvas
            } catch (n) {}
            t.setAttribute("tabindex", "0");
            t.style.outlineStyle = "none";
            t.style.webkitTapHighlightColor = "transparent";
            t.setAttribute("moz-opaque", "true");
            this._stage = new Zt(t);
            this._pointer = new Tt;
            this._mouse = new Kt(this._pointer, t);
            this._renderer = this.createRenderer(t);
            this.mainLoop = new qt;
            this.musicPlaying = !1;
            this._canvas = t;
            this._container = t.parentElement;
            this._container.style.overflow = "visible";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var r = 0,
                i = function(n) {
                    if (!(1e3 > n.timeStamp - r)) {
                        var i = t.getBoundingClientRect(),
                            s = e.getX(n, i),
                            i = e.getY(n, i);
                        switch (n.type) {
                            case "mousedown":
                                n.target == t && (n.preventDefault(), e._mouse.submitDown(s, i, n.button), t.focus());
                                break;
                            case "mousemove":
                                e._mouse.submitMove(s, i);
                                break;
                            case "mouseup":
                                e._mouse.submitUp(s, i, n.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                e._mouse.submitScroll(s, i, "mousewheel" == n.type ? n.wheelDelta / 40 : -n.detail) && n.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", i, !1);
            window.addEventListener("mousemove", i, !1);
            window.addEventListener("mouseup", i, !1);
            t.addEventListener("mousewheel", i, !1);
            t.addEventListener("DOMMouseScroll", i, !1);
            t.addEventListener("contextmenu", function(e) {
                e.preventDefault()
            }, !1);
            var s = "undefined" != typeof window.ontouchstart,
                i = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (s || i) {
                var o = new kt(this._pointer, s ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = o;
                i = function(t) {
                    var n;
                    n = s ? t.changedTouches : [t];
                    var i = t.target.getBoundingClientRect();
                    r = t.timeStamp;
                    switch (t.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            t.preventDefault();
                            tn.SHOULD_HIDE_MOBILE_BROWSER && tn.hideMobileBrowser();
                            for (t = 0; t < n.length;) {
                                var u = n[t];
                                ++t;
                                var a = e.getX(u, i),
                                    f = e.getY(u, i);
                                o.submitDown((s ? u.identifier : u.pointerId) | 0, a, f)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            t.preventDefault();
                            for (t = 0; t < n.length;) u = n[t], ++t, a = e.getX(u, i), f = e.getY(u, i), o.submitMove((s ? u.identifier : u.pointerId) | 0, a, f);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (t = 0; t < n.length;) u = n[t], ++t, a = e.getX(u, i), f = e.getY(u, i), o.submitUp((s ? u.identifier : u.pointerId) | 0, a, f)
                    }
                };
                s ? (t.addEventListener("touchstart", i, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", i, !1), t.addEventListener("touchcancel", i, !1)) : (t.addEventListener("MSPointerDown", i, !1), t.addEventListener("MSPointerMove", i, !1), t.addEventListener("MSPointerUp", i, !1))
            } else this._touch = new Pt;
            var u = window.onerror;
            window.onerror = function(e, t, n) {
                P.uncaughtError.emit(e);
                return null != u ? u(e, t, n) : !1
            };
            var a = tn.loadExtension("hidden", window.document);
            null != a.value ? (i = function() {
                P.hidden.set__(v.field(window.document, a.field))
            }, i(null), window.document.addEventListener(a.prefix + "visibilitychange", i, !1)) : (i = function(e) {
                P.hidden.set__("pagehide" == e.type)
            }, window.addEventListener("pageshow", i, !1), window.addEventListener("pagehide", i, !1));
            P.hidden.get_changed().connect(function(t) {
                t || (e._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var f = tn.loadExtension("requestAnimationFrame").value,
                i = tn.loadExtension("requestAnimationFrame").prefix;
            if (null != f && "webkit" != i) {
                var l = window.performance,
                    c = null != l && tn.polyfill("now", l);
                c ? this._lastUpdate = l.now() : null;
                var h = null,
                    h = function(n) {
                        e.update(c ? l.now() : n);
                        f(h, t)
                    };
                f(h, t)
            } else window.setInterval(function() {
                e.update(Date.now())
            }, 16);
            H.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(e) {
            return (new Jt(this, e)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var e = qn.getLocalStorage();
                this._storage = null != e ? new en(e) : new Dt
            }
            return this._storage
        },
        update: function(e) {
            var t = (e - this._lastUpdate) / 1e3;
            this._lastUpdate = e;
            P.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(t), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(e, t) {
            return (e.clientX - t.left) * this._stage.get_width() / t.width
        },
        getY: function(e, t) {
            return (e.clientY - t.top) * this._stage.get_height() / t.height
        },
        createRenderer: function(e) {
            return new Xt(e)
        },
        __class__: k
    };
    var L = function(e, t) {
        this._value = e;
        this._changed = null != t ? new M(t) : null
    };
    r["flambe.util.Value"] = L;
    L.__name__ = ["flambe", "util", "Value"];
    L.prototype = {
        watch: function(e) {
            e(this._value, this._value);
            return this.get_changed().connect(e)
        },
        set__: function(e) {
            var t = this._value;
            e != t && (this._value = e, null != this._changed && this._changed.emit(e, t));
            return e
        },
        get_changed: function() {
            null == this._changed && (this._changed = new M);
            return this._changed
        },
        __class__: L,
        __properties__: {
            get_changed: "get_changed",
            set__: "set__"
        }
    };
    var A = function(e, t) {
        this._next = null;
        this._signal = e;
        this._listener = t;
        this.stayInList = !0
    };
    r["flambe.util.SignalConnection"] = A;
    A.__name__ = ["flambe", "util", "SignalConnection"];
    A.__interfaces__ = [E];
    A.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: A
    };
    var O = function(e) {
        this._head = null != e ? new A(this, e) : null;
        this._deferredTasks = null
    };
    r["flambe.util.SignalBase"] = O;
    O.__name__ = ["flambe", "util", "SignalBase"];
    O.prototype = {
        connectImpl: function(e, t) {
            var n = this,
                r = new A(this, e);
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                n.listAdd(r, t)
            }) : this.listAdd(r, t);
            return r
        },
        disconnect: function(e) {
            var t = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                t.listRemove(e)
            }) : this.listRemove(e)
        },
        defer: function(e) {
            for (var t = null, n = this._deferredTasks; null != n;) t = n, n = n.next;
            e = new An(e);
            null != t ? t.next = e : this._deferredTasks = e
        },
        willEmit: function() {
            var e = this._head;
            this._head = O.DISPATCHING_SENTINEL;
            return e
        },
        didEmit: function(e) {
            this._head = e;
            e = this._deferredTasks;
            for (this._deferredTasks = null; null != e;) e.fn(), e = e.next
        },
        listAdd: function(e, t) {
            if (t) e._next = this._head, this._head = e;
            else {
                for (var n = null, r = this._head; null != r;) n = r, r = r._next;
                null != n ? n._next = e : this._head = e
            }
        },
        listRemove: function(e) {
            for (var t = null, n = this._head; null != n;) {
                if (n == e) {
                    e = n._next;
                    null == t ? this._head = e : t._next = e;
                    break
                }
                t = n;
                n = n._next
            }
        },
        __class__: O
    };
    var M = function(e) {
        O.call(this, e)
    };
    r["flambe.util.Signal2"] = M;
    M.__name__ = ["flambe", "util", "Signal2"];
    M.__super__ = O;
    M.prototype = e(O.prototype, {
        connect: function(e, t) {
            null == t && (t = !1);
            return this.connectImpl(e, t)
        },
        emit: function(e, t) {
            var n = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                n.emitImpl(e, t)
            }) : this.emitImpl(e, t)
        },
        emitImpl: function(e, t) {
            for (var n = this.willEmit(), r = n; null != r;) r._listener(e, t), r.stayInList || r.dispose(), r = r._next;
            this.didEmit(n)
        },
        __class__: M
    });
    var _ = function(e) {
        O.call(this, e)
    };
    r["flambe.util.Signal1"] = _;
    _.__name__ = ["flambe", "util", "Signal1"];
    _.__super__ = O;
    _.prototype = e(O.prototype, {
        connect: function(e, t) {
            null == t && (t = !1);
            return this.connectImpl(e, t)
        },
        emit: function(e) {
            var t = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                t.emitImpl(e)
            }) : this.emitImpl(e)
        },
        emitImpl: function(e) {
            for (var t = this.willEmit(), n = t; null != n;) n._listener(e), n.stayInList || n.dispose(), n = n._next;
            this.didEmit(t)
        },
        __class__: _
    });
    var D = function(e, t) {
        this._behavior = null;
        L.call(this, e, t)
    };
    r["flambe.animation.AnimatedFloat"] = D;
    D.__name__ = ["flambe", "animation", "AnimatedFloat"];
    D.__super__ = L;
    D.prototype = e(L.prototype, {
        set__: function(e) {
            this._behavior = null;
            return L.prototype.set__.call(this, e)
        },
        update: function(e) {
            null != this._behavior && (L.prototype.set__.call(this, this._behavior.update(e)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function(e, t, n) {
            this.set_behavior(new q(this._value, e, t, n))
        },
        set_behavior: function(e) {
            this._behavior = e;
            this.update(0);
            return e
        },
        __class__: D,
        __properties__: e(L.prototype.__properties__, {
            set_behavior: "set_behavior"
        })
    });
    var P = function() {};
    r["flambe.System"] = P;
    P.__name__ = ["flambe", "System"];
    P.init = function() {
        P._calledInit || (P._platform.init(), P._calledInit = !0)
    };
    P.loadAssetPack = function(e) {
        return P._platform.loadAssetPack(e)
    };
    var H = function() {};
    r["flambe.Log"] = H;
    H.__name__ = ["flambe", "Log"];
    H.info = function() {
        null
    };
    H.__super__ = N;
    H.prototype = e(N.prototype, {
        __class__: H
    });
    var B = function() {
        this._realDt = 0
    };
    r["flambe.SpeedAdjuster"] = B;
    B.__name__ = ["flambe", "SpeedAdjuster"];
    B.__super__ = S;
    B.prototype = e(S.prototype, {
        get_name: function() {
            return "SpeedAdjuster_6"
        },
        onUpdate: function(e) {
            0 < this._realDt && (e = this._realDt, this._realDt = 0);
            this.scale.update(e)
        },
        __class__: B
    });
    var j = function() {};
    r["flambe.animation.Behavior"] = j;
    j.__name__ = ["flambe", "animation", "Behavior"];
    j.prototype = {
        __class__: j
    };
    var F = function() {};
    r["flambe.animation.Ease"] = F;
    F.__name__ = ["flambe", "animation", "Ease"];
    F.linear = function(e) {
        return e
    };
    F.quadIn = function(e) {
        return e * e
    };
    F.quadOut = function(e) {
        return e * (2 - e)
    };
    F.cubeOut = function(e) {
        return 1 + --e * e * e
    };
    F.bounceIn = function(e) {
        e = 1 - e;
        return .36363636363636365 > e ? 1 - 7.5625 * e * e : .7272727272727273 > e ? 1 - (7.5625 * (e - .5454545454545454) * (e - .5454545454545454) + .75) : .9090909090909091 > e ? 1 - (7.5625 * (e - .8181818181818182) * (e - .8181818181818182) + .9375) : 1 - (7.5625 * (e - .9545454545454546) * (e - .9545454545454546) + .984375)
    };
    F.bounceOut = function(e) {
        return .36363636363636365 > e ? 7.5625 * e * e : .7272727272727273 > e ? 7.5625 * (e - .5454545454545454) * (e - .5454545454545454) + .75 : .9090909090909091 > e ? 7.5625 * (e - .8181818181818182) * (e - .8181818181818182) + .9375 : 7.5625 * (e - .9545454545454546) * (e - .9545454545454546) + .984375
    };
    F.bounceInOut = function(e) {
        if (.5 > e) return e = 1 - 2 * e, .36363636363636365 > e ? (1 - 7.5625 * e * e) / 2 : .7272727272727273 > e ? (1 - (7.5625 * (e - .5454545454545454) * (e - .5454545454545454) + .75)) / 2 : .9090909090909091 > e ? (1 - (7.5625 * (e - .8181818181818182) * (e - .8181818181818182) + .9375)) / 2 : (1 - (7.5625 * (e - .9545454545454546) * (e - .9545454545454546) + .984375)) / 2;
        e = 2 * e - 1;
        return .36363636363636365 > e ? 7.5625 * e * e / 2 + .5 : .7272727272727273 > e ? (7.5625 * (e - .5454545454545454) * (e - .5454545454545454) + .75) / 2 + .5 : .9090909090909091 > e ? (7.5625 * (e - .8181818181818182) * (e - .8181818181818182) + .9375) / 2 + .5 : (7.5625 * (e - .9545454545454546) * (e - .9545454545454546) + .984375) / 2 + .5
    };
    F.backIn = function(e) {
        return e * e * (2.70158 * e - 1.70158)
    };
    F.backOut = function(e) {
        return 1 - --e * e * (-2.70158 * e - 1.70158)
    };
    F.backInOut = function(e) {
        e *= 2;
        if (1 > e) return e * e * (2.70158 * e - 1.70158) / 2;
        e -= 2;
        return (1 - e * e * (-2.70158 * e - 1.70158)) / 2 + .5
    };
    var I = function(e, t) {
        this.base = e;
        this.strength = t
    };
    r["flambe.animation.Jitter"] = I;
    I.__name__ = ["flambe", "animation", "Jitter"];
    I.__interfaces__ = [j];
    I.prototype = {
        update: function() {
            return this.base + 2 * Math.random() * this.strength - this.strength
        },
        isComplete: function() {
            return !1
        },
        __class__: I
    };
    var q = function(e, t, n, r) {
        this._from = e;
        this._to = t;
        this._duration = n;
        this.elapsed = 0;
        this._easing = null != r ? r : F.linear
    };
    r["flambe.animation.Tween"] = q;
    q.__name__ = ["flambe", "animation", "Tween"];
    q.__interfaces__ = [j];
    q.prototype = {
        update: function(e) {
            this.elapsed += e;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: q
    };
    var R = function() {};
    r["flambe.asset.Asset"] = R;
    R.__name__ = ["flambe", "asset", "Asset"];
    R.__interfaces__ = [E];
    R.prototype = {
        __class__: R
    };
    var U = r["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    U.WEBP = ["WEBP", 0];
    U.WEBP.toString = i;
    U.WEBP.__enum__ = U;
    U.JXR = ["JXR", 1];
    U.JXR.toString = i;
    U.JXR.__enum__ = U;
    U.PNG = ["PNG", 2];
    U.PNG.toString = i;
    U.PNG.__enum__ = U;
    U.JPG = ["JPG", 3];
    U.JPG.toString = i;
    U.JPG.__enum__ = U;
    U.GIF = ["GIF", 4];
    U.GIF.toString = i;
    U.GIF.__enum__ = U;
    U.DDS = ["DDS", 5];
    U.DDS.toString = i;
    U.DDS.__enum__ = U;
    U.PVR = ["PVR", 6];
    U.PVR.toString = i;
    U.PVR.__enum__ = U;
    U.PKM = ["PKM", 7];
    U.PKM.toString = i;
    U.PKM.__enum__ = U;
    U.MP3 = ["MP3", 8];
    U.MP3.toString = i;
    U.MP3.__enum__ = U;
    U.M4A = ["M4A", 9];
    U.M4A.toString = i;
    U.M4A.__enum__ = U;
    U.OPUS = ["OPUS", 10];
    U.OPUS.toString = i;
    U.OPUS.__enum__ = U;
    U.OGG = ["OGG", 11];
    U.OGG.toString = i;
    U.OGG.__enum__ = U;
    U.WAV = ["WAV", 12];
    U.WAV.toString = i;
    U.WAV.__enum__ = U;
    U.Data = ["Data", 13];
    U.Data.toString = i;
    U.Data.__enum__ = U;
    var z = function(e, t, n, r) {
        this.name = e;
        this.url = t;
        this.format = n;
        this.bytes = r
    };
    r["flambe.asset.AssetEntry"] = z;
    z.__name__ = ["flambe", "asset", "AssetEntry"];
    z.prototype = {
        __class__: z
    };
    var W = function() {};
    r["flambe.asset.AssetPack"] = W;
    W.__name__ = ["flambe", "asset", "AssetPack"];
    W.__interfaces__ = [E];
    W.prototype = {
        __class__: W
    };
    var X = function() {};
    r["flambe.asset.File"] = X;
    X.__name__ = ["flambe", "asset", "File"];
    X.__interfaces__ = [R];
    X.prototype = {
        __class__: X
    };
    var V = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    r["flambe.asset.Manifest"] = V;
    V.__name__ = ["flambe", "asset", "Manifest"];
    V.fromAssets = function(e, t) {
        null == t && (t = !0);
        var n = v.field(Fn.getType(V).assets[0], e);
        if (null == n) {
            if (t) throw On.withFields("Missing asset pack", ["name", e]);
            return null
        }
        var r = new V;
        r.set_localBase("assets");
        for (var i = 0; i < n.length;) {
            var s = n[i];
            ++i;
            var o = s.name,
                u = e + "/" + o + "?v=" + m.string(s.md5),
                a = V.inferFormat(o);
            a != U.Data && (o = On.removeFileExtension(o));
            r.add(o, u, s.bytes, a)
        }
        return r
    };
    V.inferFormat = function(e) {
        e = On.getUrlExtension(e);
        if (null != e) switch (e.toLowerCase()) {
            case "gif":
                return U.GIF;
            case "jpg":
            case "jpeg":
                return U.JPG;
            case "jxr":
            case "wdp":
                return U.JXR;
            case "png":
                return U.PNG;
            case "webp":
                return U.WEBP;
            case "dds":
                return U.DDS;
            case "pvr":
                return U.PVR;
            case "pkm":
                return U.PKM;
            case "m4a":
                return U.M4A;
            case "mp3":
                return U.MP3;
            case "ogg":
                return U.OGG;
            case "opus":
                return U.OPUS;
            case "wav":
                return U.WAV
        } else null;
        return U.Data
    };
    V.prototype = {
        add: function(e, t, n, r) {
            null == n && (n = 0);
            null == r && (r = V.inferFormat(t));
            e = new z(e, t, r, n);
            this._entries.push(e);
            return e
        },
        iterator: function() {
            return l.iter(this._entries)
        },
        getFullURL: function(e) {
            var t;
            t = null != this.get_remoteBase() && V._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != t ? On.joinPath(t, e.url) : e.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(e) {
            null != e && xn.that(!y.startsWith(e, "http://") && !y.startsWith(e, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = e
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: V,
        __properties__: {
            get_remoteBase: "get_remoteBase",
            set_localBase: "set_localBase",
            get_localBase: "get_localBase"
        }
    };
    var $ = r["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: ["Normal", "Add", "Mask", "Copy"]
    };
    $.Normal = ["Normal", 0];
    $.Normal.toString = i;
    $.Normal.__enum__ = $;
    $.Add = ["Add", 1];
    $.Add.toString = i;
    $.Add.__enum__ = $;
    $.Mask = ["Mask", 2];
    $.Mask.toString = i;
    $.Mask.__enum__ = $;
    $.Copy = ["Copy", 3];
    $.Copy.toString = i;
    $.Copy.__enum__ = $;
    var J = function() {
        this.blendMode = this.scissor = null;
        var e = this;
        this._flags = 139;
        this._localMatrix = new vt;
        var t = function() {
            e._flags |= 12
        };
        this.x = new D(0, t);
        this.y = new D(0, t);
        this.rotation = new D(0, t);
        this.scaleX = new D(1, t);
        this.scaleY = new D(1, t);
        this.anchorX = new D(0, t);
        this.anchorY = new D(0, t);
        this.alpha = new D(1)
    };
    r["flambe.display.Sprite"] = J;
    J.__name__ = ["flambe", "display", "Sprite"];
    J.hitTest = function(e, t, n) {
        var r = e._compMap.Sprite_0;
        if (null != r) {
            if (3 != (r._flags & 3)) return null;
            r.getLocalMatrix().inverseTransform(t, n, J._scratchPoint) && (t = J._scratchPoint.x, n = J._scratchPoint.y);
            var i = r.scissor;
            if (null != i && !i.contains(t, n)) return null
        }
        e = J.hitTestBackwards(e.firstChild, t, n);
        return null != e ? e : null != r && r.containsLocal(t, n) ? r : null
    };
    J.render = function(e, t) {
        var n = e._compMap.Sprite_0;
        if (null != n) {
            var r = n.alpha._value;
            if (0 == (n._flags & 1) || 0 >= r) return;
            t.save();
            1 > r && t.multiplyAlpha(r);
            null != n.blendMode && t.setBlendMode(n.blendMode);
            var r = n.getLocalMatrix(),
                i = r.m02,
                s = r.m12;
            0 != (n._flags & 128) && (i = Math.round(i), s = Math.round(s));
            t.transform(r.m00, r.m10, r.m01, r.m11, i, s);
            r = n.scissor;
            null != r && t.applyScissor(r.x, r.y, r.width, r.height);
            n.draw(t)
        }
        r = e._compMap.Director_5;
        if (null != r) {
            r = r.occludedScenes;
            for (i = 0; i < r.length;) s = r[i], ++i, J.render(s, t)
        }
        for (r = e.firstChild; null != r;) i = r.next, J.render(r, t), r = i;
        null != n && t.restore()
    };
    J.hitTestBackwards = function(e, t, n) {
        if (null != e) {
            var r = J.hitTestBackwards(e.next, t, n);
            return null != r ? r : J.hitTest(e, t, n)
        }
        return null
    };
    J.__super__ = S;
    J.prototype = e(S.prototype, {
        get_name: function() {
            return "Sprite_0"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(e, t) {
            return 0 <= e && e < this.getNaturalWidth() && 0 <= t && t < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            0 != (this._flags & 4) && (this._flags &= -5, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(e, t) {
            this.x.set__(e);
            this.y.set__(t);
            return this
        },
        setAlpha: function(e) {
            this.alpha.set__(e);
            return this
        },
        setRotation: function(e) {
            this.rotation.set__(e);
            return this
        },
        setScale: function(e) {
            this.scaleX.set__(e);
            this.scaleY.set__(e);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 256) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function(e) {
            this.x.update(e);
            this.y.update(e);
            this.rotation.update(e);
            this.scaleX.update(e);
            this.scaleY.update(e);
            this.alpha.update(e);
            this.anchorX.update(e);
            this.anchorY.update(e)
        },
        draw: function() {},
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var e = this.owner.parent; null != e;) {
                var t = e._compMap.Sprite_0;
                if (null != t) return t;
                e = e.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new _);
            return this._pointerDown
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new _);
            return this._pointerUp
        },
        connectHover: function() {
            var e = this;
            null == this._hoverConnection && (this._hoverConnection = P._platform.getPointer().move.connect(function(t) {
                for (var n = t.hit; null != n;) {
                    if (n == e) return;
                    n = n.getParentSprite()
                }
                null != e._pointerOut && 0 != (e._flags & 256) && e._pointerOut.emit(t);
                e._flags &= -257;
                e._hoverConnection.dispose();
                e._hoverConnection = null
            }))
        },
        set_visible: function(e) {
            this._flags = Tn.set(this._flags, 1, e);
            return e
        },
        onPointerDown: function(e) {
            this.onHover(e);
            null != this._pointerDown && this._pointerDown.emit(e)
        },
        onPointerMove: function(e) {
            this.onHover(e);
            null != this._pointerMove && this._pointerMove.emit(e)
        },
        onHover: function(e) {
            if (0 == (this._flags & 256) && (this._flags |= 256, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(e), this.connectHover()
        },
        onPointerUp: function(e) {
            switch (e.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 256) && this._pointerOut.emit(e), this._flags &= -257, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(e)
        },
        __class__: J,
        __properties__: e(S.prototype.__properties__, {
            set_visible: "set_visible",
            get_pointerUp: "get_pointerUp",
            get_pointerDown: "get_pointerDown"
        })
    });
    var K = function(e, t, n) {
        J.call(this);
        this.color = e;
        this.width = new D(t);
        this.height = new D(n)
    };
    r["flambe.display.FillSprite"] = K;
    K.__name__ = ["flambe", "display", "FillSprite"];
    K.__super__ = J;
    K.prototype = e(J.prototype, {
        draw: function(e) {
            e.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(e, t) {
            this.width.set__(e);
            this.height.set__(t);
            return this
        },
        onUpdate: function(e) {
            J.prototype.onUpdate.call(this, e);
            this.width.update(e);
            this.height.update(e)
        },
        __class__: K
    });
    var Q = function(e) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = e
    };
    r["flambe.display.Glyph"] = Q;
    Q.__name__ = ["flambe", "display", "Glyph"];
    Q.prototype = {
        draw: function(e, t, n) {
            0 < this.width && e.drawSubTexture(this.page, t + this.xOffset, n + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(e) {
            return null != this._kernings ? m["int"](this._kernings.get(e)) : 0
        },
        setKerning: function(e, t) {
            null == this._kernings && (this._kernings = new Dn);
            this._kernings.set(e, t)
        },
        __class__: Q
    };
    var G = function(e, t) {
        this.name = t;
        this._pack = e;
        this.reload()
    };
    r["flambe.display.Font"] = G;
    G.__name__ = ["flambe", "display", "Font"];
    G.prototype = {
        layoutText: function(e, t, n, r, i) {
            null == i && (i = 0);
            null == r && (r = 0);
            null == n && (n = 0);
            null == t && (t = Y.Left);
            return new Z(this, e, t, n, r, i)
        },
        reload: function() {
            this._glyphs = new Dn;
            this._glyphs.set(G.NEWLINE.charCode, G.NEWLINE);
            for (var e = new et(this._pack.getFile(this.name + ".fnt").toString()), t = new Dn, n = this.name.lastIndexOf("/"), n = 0 <= n ? l.substr(this.name, 0, n + 1) : "", r = e.keywords(); r.hasNext();) switch (r.next()) {
                case "info":
                    for (var i = e.pairs(); i.hasNext();) {
                        var s = i.next();
                        switch (s.key) {
                            case "size":
                                this.size = s.getInt()
                        }
                    }
                    break;
                case "common":
                    for (i = e.pairs(); i.hasNext();) switch (s = i.next(), s.key) {
                        case "lineHeight":
                            this.lineHeight = s.getInt()
                    }
                    break;
                case "page":
                    for (var i = 0, s = null, o = e.pairs(); o.hasNext();) {
                        var u = o.next();
                        switch (u.key) {
                            case "id":
                                i = u.getInt();
                                break;
                            case "file":
                                s = u.getString()
                        }
                    }
                    s = this._pack.getTexture(n + On.removeFileExtension(s));
                    t.set(i, s);
                    break;
                case "char":
                    i = null;
                    for (s = e.pairs(); s.hasNext();) switch (o = s.next(), o.key) {
                        case "id":
                            i = new Q(o.getInt());
                            break;
                        case "x":
                            i.x = o.getInt();
                            break;
                        case "y":
                            i.y = o.getInt();
                            break;
                        case "width":
                            i.width = o.getInt();
                            break;
                        case "height":
                            i.height = o.getInt();
                            break;
                        case "page":
                            o = o.getInt();
                            i.page = t.get(o);
                            break;
                        case "xoffset":
                            i.xOffset = o.getInt();
                            break;
                        case "yoffset":
                            i.yOffset = o.getInt();
                            break;
                        case "xadvance":
                            i.xAdvance = o.getInt()
                    }
                    this._glyphs.set(i.charCode, i);
                    break;
                case "kerning":
                    i = null;
                    o = s = 0;
                    for (u = e.pairs(); u.hasNext();) {
                        var a = u.next();
                        switch (a.key) {
                            case "first":
                                i = this._glyphs.get(a.getInt());
                                break;
                            case "second":
                                s = a.getInt();
                                break;
                            case "amount":
                                o = a.getInt()
                        }
                    }
                    null != i && 0 != o && i.setKerning(s, o)
            }
        },
        __class__: G
    };
    var Y = r["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    Y.Left = ["Left", 0];
    Y.Left.toString = i;
    Y.Left.__enum__ = Y;
    Y.Center = ["Center", 1];
    Y.Center.toString = i;
    Y.Center.__enum__ = Y;
    Y.Right = ["Right", 2];
    Y.Right.toString = i;
    Y.Right.__enum__ = Y;
    var Z = function(e, t, n, r, i, s) {
        this.lines = 0;
        var o = this;
        this._font = e;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(e.lineHeight + s);
        this.bounds = new mt;
        for (var u = [], s = t.length, a = 0; a < s;) {
            var f = a++,
                f = t.charCodeAt(f),
                f = e._glyphs.get(f);
            null != f ? this._glyphs.push(f) : null
        }
        for (var t = -1, l = 0, c = 0, e = e._glyphs.get(10), s = function() {
            o.bounds.width = dt.max(o.bounds.width, l);
            o.bounds.height += c;
            u[o.lines] = l;
            c = l = 0;
            ++o.lines
        }, a = 0; a < this._glyphs.length;) {
            f = this._glyphs[a];
            this._offsets[a] = Math.round(l);
            var h = 0 < r && l + f.width > r;
            h || f == e ? (h && (0 <= t ? (this._glyphs[t] = e, l = this._offsets[t], a = t) : this._glyphs.splice(a, 0, e)), t = -1, c = this._lineOffset, s()) : (32 == f.charCode && (t = a), l += f.xAdvance + i, c = dt.max(c, f.height + f.yOffset), a + 1 < this._glyphs.length && (l += f.getKerning(this._glyphs[a + 1].charCode)));
            ++a
        }
        s();
        i = 0;
        e = Z.getAlignOffset(n, u[0], r);
        t = 1.79769313486231e308;
        s = -1.79769313486231e308;
        f = a = 0;
        for (h = this._glyphs.length; f < h;) {
            var p = this._glyphs[f];
            10 == p.charCode && (i += this._lineOffset, ++a, e = Z.getAlignOffset(n, u[a], r));
            this._offsets[f] += e;
            var d = i + p.yOffset;
            t < d || (t = d);
            s = dt.max(s, d + p.height);
            ++f
        }
        this.bounds.x = Z.getAlignOffset(n, this.bounds.width, r);
        this.bounds.y = t;
        this.bounds.height = s - t
    };
    r["flambe.display.TextLayout"] = Z;
    Z.__name__ = ["flambe", "display", "TextLayout"];
    Z.getAlignOffset = function(e, t, n) {
        switch (e[1]) {
            case 0:
                return 0;
            case 2:
                return n - t;
            case 1:
                return Math.round((n - t) / 2)
        }
    };
    Z.prototype = {
        draw: function(e) {
            for (var t = 0, n = 0, r = this._glyphs.length; n < r;) {
                var i = this._glyphs[n];
                10 == i.charCode ? t += this._lineOffset : i.draw(e, this._offsets[n], t);
                ++n
            }
        },
        __class__: Z
    };
    var et = function(e) {
        this._configText = e;
        this._keywordPattern = new s("([A-Za-z]+)(.*)", "");
        this._pairPattern = new s('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    r["flambe.display._Font.ConfigParser"] = et;
    et.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    et.advance = function(e, t) {
        var n = t.matchedPos();
        return l.substr(e, n.pos + n.len, e.length)
    };
    et.prototype = {
        keywords: function() {
            var e = this,
                t = this._configText;
            return {
                next: function() {
                    t = et.advance(t, e._keywordPattern);
                    e._pairText = e._keywordPattern.matched(2);
                    return e._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return e._keywordPattern.match(t)
                }
            }
        },
        pairs: function() {
            var e = this,
                t = this._pairText;
            return {
                next: function() {
                    t = et.advance(t, e._pairPattern);
                    return new tt(e._pairPattern.matched(1), e._pairPattern.matched(2))
                },
                hasNext: function() {
                    return e._pairPattern.match(t)
                }
            }
        },
        __class__: et
    };
    var tt = function(e, t) {
        this.key = e;
        this._value = t
    };
    r["flambe.display._Font.ConfigPair"] = tt;
    tt.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    tt.prototype = {
        getInt: function() {
            return m.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : l.substr(this._value, 1, this._value.length - 2)
        },
        __class__: tt
    };
    var nt = function() {};
    r["flambe.display.Graphics"] = nt;
    nt.__name__ = ["flambe", "display", "Graphics"];
    nt.prototype = {
        __class__: nt
    };
    var rt = function(e) {
        J.call(this);
        this.texture = e
    };
    r["flambe.display.ImageSprite"] = rt;
    rt.__name__ = ["flambe", "display", "ImageSprite"];
    rt.__super__ = J;
    rt.prototype = e(J.prototype, {
        draw: function(e) {
            null != this.texture && e.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: rt
    });
    var it = r["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    it.Portrait = ["Portrait", 0];
    it.Portrait.toString = i;
    it.Portrait.__enum__ = it;
    it.Landscape = ["Landscape", 1];
    it.Landscape.toString = i;
    it.Landscape.__enum__ = it;
    var st = function() {};
    r["flambe.display.Texture"] = st;
    st.__name__ = ["flambe", "display", "Texture"];
    st.__interfaces__ = [R];
    st.prototype = {
        __class__: st
    };
    var ot = function() {};
    r["flambe.display.SubTexture"] = ot;
    ot.__name__ = ["flambe", "display", "SubTexture"];
    ot.__interfaces__ = [st];
    var ut = function(e, t) {
        null == t && (t = "");
        this._layout = null;
        var n = this;
        J.call(this);
        this._font = e;
        this._text = t;
        this._align = Y.Left;
        this._flags |= 64;
        var r = function() {
            n._flags |= 64
        };
        this.wrapWidth = new D(0, r);
        this.letterSpacing = new D(0, r);
        this.lineSpacing = new D(0, r)
    };
    r["flambe.display.TextSprite"] = ut;
    ut.__name__ = ["flambe", "display", "TextSprite"];
    ut.__super__ = J;
    ut.prototype = e(J.prototype, {
        draw: function(e) {
            this.updateLayout();
            this._layout.draw(e)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var e = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                t = this._layout.bounds.height;
            return e > t ? e : t
        },
        containsLocal: function(e, t) {
            this.updateLayout();
            return this._layout.bounds.contains(e, t)
        },
        setAlign: function(e) {
            this.set_align(e);
            return this
        },
        set_text: function(e) {
            e != this._text && (this._text = e, this._flags |= 64);
            return e
        },
        set_align: function(e) {
            e != this._align && (this._align = e, this._flags |= 64);
            return e
        },
        updateLayout: function() {
            0 != (this._flags & 64) && (this._flags &= -65, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(e) {
            J.prototype.onUpdate.call(this, e);
            this.wrapWidth.update(e);
            this.letterSpacing.update(e);
            this.lineSpacing.update(e)
        },
        __class__: ut,
        __properties__: e(J.prototype.__properties__, {
            set_align: "set_align",
            set_text: "set_text"
        })
    });
    var at = r["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    at.Left = ["Left", 0];
    at.Left.toString = i;
    at.Left.__enum__ = at;
    at.Middle = ["Middle", 1];
    at.Middle.toString = i;
    at.Middle.__enum__ = at;
    at.Right = ["Right", 2];
    at.Right.toString = i;
    at.Right.__enum__ = at;
    at.Unknown = function(e) {
        e = ["Unknown", 3, e];
        e.__enum__ = at;
        e.toString = i;
        return e
    };
    var ft = r["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    ft.Default = ["Default", 0];
    ft.Default.toString = i;
    ft.Default.__enum__ = ft;
    ft.Button = ["Button", 1];
    ft.Button.toString = i;
    ft.Button.__enum__ = ft;
    ft.None = ["None", 2];
    ft.None.toString = i;
    ft.None.__enum__ = ft;
    var lt = function() {
        this.init(0, 0, 0, null)
    };
    r["flambe.input.MouseEvent"] = lt;
    lt.__name__ = ["flambe", "input", "MouseEvent"];
    lt.prototype = {
        init: function(e, t, n, r) {
            this.id = e;
            this.viewX = t;
            this.viewY = n;
            this.button = r
        },
        __class__: lt
    };
    var ct = r["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    ct.Mouse = function(e) {
        e = ["Mouse", 0, e];
        e.__enum__ = ct;
        e.toString = i;
        return e
    };
    ct.Touch = function(e) {
        e = ["Touch", 1, e];
        e.__enum__ = ct;
        e.toString = i;
        return e
    };
    var ht = function() {
        this.init(0, 0, 0, null, null)
    };
    r["flambe.input.PointerEvent"] = ht;
    ht.__name__ = ["flambe", "input", "PointerEvent"];
    ht.prototype = {
        init: function(e, t, n, r, i) {
            this.id = e;
            this.viewX = t;
            this.viewY = n;
            this.hit = r;
            this.source = i;
            this._stopped = !1
        },
        __class__: ht
    };
    var pt = function(e) {
        this.id = e;
        this._source = ct.Touch(this)
    };
    r["flambe.input.TouchPoint"] = pt;
    pt.__name__ = ["flambe", "input", "TouchPoint"];
    pt.prototype = {
        init: function(e, t) {
            this.viewX = e;
            this.viewY = t
        },
        __class__: pt
    };
    var dt = function() {};
    r["flambe.math.FMath"] = dt;
    dt.__name__ = ["flambe", "math", "FMath"];
    dt.max = function(e, t) {
        return e > t ? e : t
    };
    var vt = function() {
        this.identity()
    };
    r["flambe.math.Matrix"] = vt;
    vt.__name__ = ["flambe", "math", "Matrix"];
    vt.prototype = {
        set: function(e, t, n, r, i, s) {
            this.m00 = e;
            this.m01 = n;
            this.m02 = i;
            this.m10 = t;
            this.m11 = r;
            this.m12 = s
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(e, t, n, r, i) {
            var s = Math.sin(i),
                i = Math.cos(i);
            this.set(i * n, s * n, -s * r, i * r, e, t)
        },
        translate: function(e, t) {
            this.m02 += this.m00 * e + this.m01 * t;
            this.m12 += this.m11 * t + this.m10 * e
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(e, t, n) {
            var r = this.determinant();
            if (0 == r) return !1;
            e -= this.m02;
            t -= this.m12;
            n.x = (e * this.m11 - t * this.m01) / r;
            n.y = (t * this.m00 - e * this.m10) / r;
            return !0
        },
        __class__: vt
    };
    var mt = function(e, t, n, r) {
        null == r && (r = 0);
        null == n && (n = 0);
        null == t && (t = 0);
        null == e && (e = 0);
        this.set(e, t, n, r)
    };
    r["flambe.math.Rectangle"] = mt;
    mt.__name__ = ["flambe", "math", "Rectangle"];
    mt.prototype = {
        set: function(e, t, n, r) {
            this.x = e;
            this.y = t;
            this.width = n;
            this.height = r
        },
        contains: function(e, t) {
            e -= this.x;
            if (0 <= this.width) {
                if (0 > e || e > this.width) return !1
            } else if (0 < e || e < this.width) return !1;
            t -= this.y;
            if (0 <= this.height) {
                if (0 > t || t > this.height) return !1
            } else if (0 < t || t < this.height) return !1;
            return !0
        },
        __class__: mt
    };
    var gt = function() {
        this._disposed = !1
    };
    r["flambe.platform.BasicAsset"] = gt;
    gt.__name__ = ["flambe", "platform", "BasicAsset"];
    gt.__interfaces__ = [R];
    gt.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: gt
    };
    var yt = function(e, t) {
        var n = this;
        this.manifest = t;
        this._platform = e;
        this.promise = new kn;
        this._bytesLoaded = new Hn;
        this._pack = new bt(t, this);
        var r = c.array(t);
        if (0 == r.length) this.handleSuccess();
        else {
            for (var i = new Hn, s = 0; s < r.length;) {
                var o = r[s];
                ++s;
                var u = i.get(o.name);
                null == u && (u = [], i.set(o.name, u));
                u.push(o)
            }
            this._assetsRemaining = c.count(i);
            for (r = i.iterator(); r.hasNext();) i = [r.next()], this.pickBestEntry(i[0], function(e) {
                return function(r) {
                    if (null != r) {
                        var i = t.getFullURL(r);
                        try {
                            n.loadEntry(i, r)
                        } catch (s) {
                            n.handleError(r, "Unexpected error: " + m.string(s))
                        }
                        i = n.promise;
                        i.set_total(i._total + r.bytes)
                    } else r = e[0][0], yt.isAudio(r.format) ? n.handleLoad(r, At.getInstance()) : n.handleError(r, "Could not find a supported format to load")
                }
            }(i))
        }
    };
    r["flambe.platform.BasicAssetPackLoader"] = yt;
    yt.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    yt.isAudio = function(e) {
        switch (e[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    yt.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(e, t) {
            this.getAssetFormats(function(n) {
                for (var r = 0; r < n.length;) {
                    var i = n[r];
                    ++r;
                    for (var s = 0; s < e.length;) {
                        var o = e[s];
                        ++s;
                        if (o.format == i) {
                            t(o);
                            return
                        }
                    }
                }
                t(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(e, t) {
            if (!this._pack.disposed) {
                this.handleProgress(e, e.bytes);
                var n;
                switch (e.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        n = this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        n = this._pack.sounds;
                        break;
                    case 13:
                        n = this._pack.files
                }
                n.set(e.name, t);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(e, t) {
            this._bytesLoaded.set(e.name, t);
            for (var n = 0, r = this._bytesLoaded.iterator(); r.hasNext();) var i = r.next(),
                n = n + i;
            this.promise.set_progress(n)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(e, t) {
            this.promise.error.emit(On.withFields(t, ["url", e.url]))
        },
        handleTextureError: function(e) {
            this.handleError(e, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: yt
    };
    var bt = function(e, t) {
        this.disposed = !1;
        this._manifest = e;
        this.loader = t;
        this.textures = new Hn;
        this.sounds = new Hn;
        this.files = new Hn
    };
    r["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = bt;
    bt.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    bt.__interfaces__ = [W];
    bt.prototype = {
        getTexture: function(e, t) {
            null == t && (t = !0);
            var n = this.textures.get(e);
            if (null == n && t) throw On.withFields("Missing texture", ["name", e]);
            return n
        },
        getSound: function(e, t) {
            null == t && (t = !0);
            var n = this.sounds.get(e);
            if (null == n && t) throw On.withFields("Missing sound", ["name", e]);
            return n
        },
        getFile: function(e, t) {
            null == t && (t = !0);
            var n = this.files.get(e);
            if (null == n && t) throw On.withFields("Missing file", ["name", e]);
            return n
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var e = this.textures.iterator(); e.hasNext();) e.next().dispose();
                this.textures = null;
                for (e = this.sounds.iterator(); e.hasNext();) e.next().dispose();
                this.sounds = null;
                for (e = this.files.iterator(); e.hasNext();) e.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: bt
    };
    var wt = function(e) {
        this._disposed = !1;
        this._content = e
    };
    r["flambe.platform.BasicFile"] = wt;
    wt.__name__ = ["flambe", "platform", "BasicFile"];
    wt.__interfaces__ = [X];
    wt.__super__ = gt;
    wt.prototype = e(gt.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: wt
    });
    var Et = function() {};
    r["flambe.subsystem.MouseSystem"] = Et;
    Et.__name__ = ["flambe", "subsystem", "MouseSystem"];
    var St = function(e) {
        this._pointer = e;
        this._source = ct.Mouse(St._sharedEvent);
        this.down = new _;
        this.move = new _;
        this.up = new _;
        this.scroll = new _;
        this._y = this._x = 0;
        this._cursor = ft.Default;
        this._buttonStates = new Dn
    };
    r["flambe.platform.BasicMouse"] = St;
    St.__name__ = ["flambe", "platform", "BasicMouse"];
    St.__interfaces__ = [Et];
    St.prototype = {
        submitDown: function(e, t, n) {
            this._buttonStates.exists(n) || (this._buttonStates.set(n, !0), this.prepare(e, t, Rt.toButton(n)), this._pointer.submitDown(e, t, this._source), this.down.emit(St._sharedEvent))
        },
        submitMove: function(e, t) {
            this.prepare(e, t, null);
            this._pointer.submitMove(e, t, this._source);
            this.move.emit(St._sharedEvent)
        },
        submitUp: function(e, t, n) {
            this._buttonStates.exists(n) && (this._buttonStates.remove(n), this.prepare(e, t, Rt.toButton(n)), this._pointer.submitUp(e, t, this._source), this.up.emit(St._sharedEvent))
        },
        submitScroll: function(e, t, n) {
            this._x = e;
            this._y = t;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(n);
            return !0
        },
        prepare: function(e, t, n) {
            this._x = e;
            this._y = t;
            St._sharedEvent.init(St._sharedEvent.id + 1, e, t, n)
        },
        __class__: St
    };
    var xt = function() {};
    r["flambe.subsystem.PointerSystem"] = xt;
    xt.__name__ = ["flambe", "subsystem", "PointerSystem"];
    xt.prototype = {
        __class__: xt
    };
    var Tt = function(e, t, n) {
        null == n && (n = !1);
        null == t && (t = 0);
        null == e && (e = 0);
        this.down = new _;
        this.move = new _;
        this.up = new _;
        this._x = e;
        this._y = t;
        this._isDown = n
    };
    r["flambe.platform.BasicPointer"] = Tt;
    Tt.__name__ = ["flambe", "platform", "BasicPointer"];
    Tt.__interfaces__ = [xt];
    Tt.prototype = {
        submitDown: function(e, t, n) {
            if (!this._isDown) {
                this.submitMove(e, t, n);
                this._isDown = !0;
                var r = [],
                    i = J.hitTest(P.root, e, t);
                if (null != i) {
                    var s = i.owner;
                    do {
                        var o = s._compMap.Sprite_0;
                        null != o && r.push(o);
                        s = s.parent
                    } while (null != s)
                }
                this.prepare(e, t, i, n);
                for (e = 0; e < r.length;)
                    if (t = r[e], ++e, t.onPointerDown(Tt._sharedEvent), Tt._sharedEvent._stopped) return;
                this.down.emit(Tt._sharedEvent)
            }
        },
        submitMove: function(e, t, n) {
            if (!(e == this._x && t == this._y)) {
                var r = [],
                    i = J.hitTest(P.root, e, t);
                if (null != i) {
                    var s = i.owner;
                    do {
                        var o = s._compMap.Sprite_0;
                        null != o && r.push(o);
                        s = s.parent
                    } while (null != s)
                }
                this.prepare(e, t, i, n);
                for (e = 0; e < r.length;)
                    if (t = r[e], ++e, t.onPointerMove(Tt._sharedEvent), Tt._sharedEvent._stopped) return;
                this.move.emit(Tt._sharedEvent)
            }
        },
        submitUp: function(e, t, n) {
            if (this._isDown) {
                this.submitMove(e, t, n);
                this._isDown = !1;
                var r = [],
                    i = J.hitTest(P.root, e, t);
                if (null != i) {
                    var s = i.owner;
                    do {
                        var o = s._compMap.Sprite_0;
                        null != o && r.push(o);
                        s = s.parent
                    } while (null != s)
                }
                this.prepare(e, t, i, n);
                for (e = 0; e < r.length;)
                    if (t = r[e], ++e, t.onPointerUp(Tt._sharedEvent), Tt._sharedEvent._stopped) return;
                this.up.emit(Tt._sharedEvent)
            }
        },
        prepare: function(e, t, n, r) {
            this._x = e;
            this._y = t;
            Tt._sharedEvent.init(Tt._sharedEvent.id + 1, e, t, n, r)
        },
        __class__: Tt
    };
    var Nt = function(e, t, n) {
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = e;
        this._width = t;
        this._height = n
    };
    r["flambe.platform.BasicTexture"] = Nt;
    Nt.__name__ = ["flambe", "platform", "BasicTexture"];
    Nt.__interfaces__ = [ot];
    Nt.__super__ = gt;
    Nt.prototype = e(gt.prototype, {
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Nt,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    });
    var Ct = function() {};
    r["flambe.subsystem.TouchSystem"] = Ct;
    Ct.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var kt = function(e, t) {
        null == t && (t = 4);
        this._pointer = e;
        this._maxPoints = t;
        this._pointMap = new Dn;
        this._points = [];
        this.down = new _;
        this.move = new _;
        this.up = new _
    };
    r["flambe.platform.BasicTouch"] = kt;
    kt.__name__ = ["flambe", "platform", "BasicTouch"];
    kt.__interfaces__ = [Ct];
    kt.prototype = {
        submitDown: function(e, t, n) {
            if (!this._pointMap.exists(e)) {
                var r = new pt(e);
                r.init(t, n);
                this._pointMap.set(e, r);
                this._points.push(r);
                null == this._pointerTouch && (this._pointerTouch = r, this._pointer.submitDown(t, n, r._source));
                this.down.emit(r)
            }
        },
        submitMove: function(e, t, n) {
            e = this._pointMap.get(e);
            null != e && (e.init(t, n), this._pointerTouch == e && this._pointer.submitMove(t, n, e._source), this.move.emit(e))
        },
        submitUp: function(e, t, n) {
            var r = this._pointMap.get(e);
            null != r && (r.init(t, n), this._pointMap.remove(e), l.remove(this._points, r), this._pointerTouch == r && (this._pointerTouch = null, this._pointer.submitUp(t, n, r._source)), this.up.emit(r))
        },
        __class__: kt
    };
    var Lt = function() {};
    r["flambe.sound.Sound"] = Lt;
    Lt.__name__ = ["flambe", "sound", "Sound"];
    Lt.__interfaces__ = [R];
    Lt.prototype = {
        __class__: Lt
    };
    var At = function() {
        this._disposed = !1;
        this._playback = new Mt(this)
    };
    r["flambe.platform.DummySound"] = At;
    At.__name__ = ["flambe", "platform", "DummySound"];
    At.__interfaces__ = [Lt];
    At.getInstance = function() {
        null == At._instance && (At._instance = new At);
        return At._instance
    };
    At.__super__ = gt;
    At.prototype = e(gt.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: At
    });
    var Ot = function() {};
    r["flambe.sound.Playback"] = Ot;
    Ot.__name__ = ["flambe", "sound", "Playback"];
    Ot.__interfaces__ = [E];
    Ot.prototype = {
        __class__: Ot
    };
    var Mt = function(e) {
        this._sound = e;
        this.volume = new D(0);
        this._complete = new L(!0)
    };
    r["flambe.platform.DummyPlayback"] = Mt;
    Mt.__name__ = ["flambe", "platform", "DummyPlayback"];
    Mt.__interfaces__ = [Ot];
    Mt.prototype = {
        get_sound: function() {
            return this._sound
        },
        set_paused: function() {
            return !0
        },
        dispose: function() {},
        __class__: Mt,
        __properties__: {
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var _t = function() {};
    r["flambe.subsystem.StorageSystem"] = _t;
    _t.__name__ = ["flambe", "subsystem", "StorageSystem"];
    _t.prototype = {
        __class__: _t
    };
    var Dt = function() {
        this.clear()
    };
    r["flambe.platform.DummyStorage"] = Dt;
    Dt.__name__ = ["flambe", "platform", "DummyStorage"];
    Dt.__interfaces__ = [_t];
    Dt.prototype = {
        set: function(e, t) {
            this._hash.set(e, t);
            return !0
        },
        get: function(e, t) {
            return this._hash.exists(e) ? this._hash.get(e) : t
        },
        clear: function() {
            this._hash = new Hn
        },
        __class__: Dt
    };
    var Pt = function() {
        this.down = new _;
        this.move = new _;
        this.up = new _
    };
    r["flambe.platform.DummyTouch"] = Pt;
    Pt.__name__ = ["flambe", "platform", "DummyTouch"];
    Pt.__interfaces__ = [Ct];
    Pt.prototype = {
        __class__: Pt
    };
    var Ht = function() {
        this._entries = []
    };
    r["flambe.platform.EventGroup"] = Ht;
    Ht.__name__ = ["flambe", "platform", "EventGroup"];
    Ht.__interfaces__ = [E];
    Ht.prototype = {
        addListener: function(e, t, n) {
            e.addEventListener(t, n, !1);
            this._entries.push(new Bt(e, t, n))
        },
        addDisposingListener: function(e, t, n) {
            var r = this;
            this.addListener(e, t, function(e) {
                r.dispose();
                n(e)
            })
        },
        dispose: function() {
            for (var e = 0, t = this._entries; e < t.length;) {
                var n = t[e];
                ++e;
                n.dispatcher.removeEventListener(n.type, n.listener, !1)
            }
            this._entries = []
        },
        __class__: Ht
    };
    var Bt = function(e, t, n) {
        this.dispatcher = e;
        this.type = t;
        this.listener = n
    };
    r["flambe.platform._EventGroup.Entry"] = Bt;
    Bt.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Bt.prototype = {
        __class__: Bt
    };
    var jt = function() {};
    r["flambe.platform.InternalGraphics"] = jt;
    jt.__name__ = ["flambe", "platform", "InternalGraphics"];
    jt.__interfaces__ = [nt];
    jt.prototype = {
        __class__: jt
    };
    var Ft = function() {};
    r["flambe.subsystem.RendererSystem"] = Ft;
    Ft.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Ft.prototype = {
        __class__: Ft
    };
    var It = function() {};
    r["flambe.platform.InternalRenderer"] = It;
    It.__name__ = ["flambe", "platform", "InternalRenderer"];
    It.__interfaces__ = [Ft];
    It.prototype = {
        __class__: It
    };
    var qt = function() {
        this._tickables = []
    };
    r["flambe.platform.MainLoop"] = qt;
    qt.__name__ = ["flambe", "platform", "MainLoop"];
    qt.updateEntity = function(e, t) {
        var n = e._compMap.SpeedAdjuster_6;
        if (null != n && (n._realDt = t, t *= n.scale._value, 0 >= t)) {
            n.onUpdate(t);
            return
        }
        for (n = e.firstComponent; null != n;) {
            var r = n.next;
            n.onUpdate(t);
            n = r
        }
        for (n = e.firstChild; null != n;) r = n.next, qt.updateEntity(n, t), n = r
    };
    qt.prototype = {
        update: function(e) {
            if (!(0 >= e)) {
                1 < e && (e = 1);
                for (var t = 0; t < this._tickables.length;) {
                    var n = this._tickables[t];
                    null == n || n.update(e) ? this._tickables.splice(t, 1) : ++t
                }
                P.volume.update(e);
                qt.updateEntity(P.root, e)
            }
        },
        render: function(e) {
            var t = e.graphics;
            null != t && (e.willRender(), J.render(P.root, t), e.didRender())
        },
        addTickable: function(e) {
            this._tickables.push(e)
        },
        __class__: qt
    };
    var Rt = function() {};
    r["flambe.platform.MouseCodes"] = Rt;
    Rt.__name__ = ["flambe", "platform", "MouseCodes"];
    Rt.toButton = function(e) {
        switch (e) {
            case 0:
                return at.Left;
            case 1:
                return at.Middle;
            case 2:
                return at.Right
        }
        return at.Unknown(e)
    };
    var Ut = function() {};
    r["flambe.platform.TextureRoot"] = Ut;
    Ut.__name__ = ["flambe", "platform", "TextureRoot"];
    var zt = function() {};
    r["flambe.platform.Tickable"] = zt;
    zt.__name__ = ["flambe", "platform", "Tickable"];
    zt.prototype = {
        __class__: zt
    };
    var Wt = function(e) {
        this._firstDraw = !1;
        this._canvasCtx = e.getContext("2d")
    };
    r["flambe.platform.html.CanvasGraphics"] = Wt;
    Wt.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Wt.__interfaces__ = [jt];
    Wt.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(e, t, n, r, i, s) {
            this._canvasCtx.transform(e, t, n, r, i, s)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(e, t, n) {
            this.drawSubTexture(e, t, n, 0, 0, e.get_width(), e.get_height())
        },
        drawSubTexture: function(e, t, n, r, i, s, o) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(e, t, n, r, i, s, o), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(e.root.image, e.rootX + r | 0, e.rootY + i | 0, s | 0, o | 0, t | 0, n | 0, s | 0, o | 0)
        },
        fillRect: function(e, t, n, r, i) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(e, t, n, r, i), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (e = (16777215 & e).toString(16); 6 > e.length;) e = "0" + m.string(e);
                this._canvasCtx.fillStyle = "#" + m.string(e);
                this._canvasCtx.fillRect(t | 0, n | 0, r | 0, i | 0)
            }
        },
        multiplyAlpha: function(e) {
            this._canvasCtx.globalAlpha *= e
        },
        setBlendMode: function(e) {
            var t;
            switch (e[1]) {
                case 0:
                    t = "source-over";
                    break;
                case 1:
                    t = "lighter";
                    break;
                case 2:
                    t = "destination-in";
                    break;
                case 3:
                    t = "copy"
            }
            this._canvasCtx.globalCompositeOperation = t
        },
        applyScissor: function(e, t, n, r) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(e | 0, t | 0, n | 0, r | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        __class__: Wt
    };
    var Xt = function(e) {
        this.graphics = new Wt(e);
        this._hasGPU = new L(!0)
    };
    r["flambe.platform.html.CanvasRenderer"] = Xt;
    Xt.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Xt.__interfaces__ = [It];
    Xt.prototype = {
        get_type: function() {
            return Sn.Canvas
        },
        createTextureFromImage: function(e) {
            e = new $t(Xt.CANVAS_TEXTURES ? tn.createCanvas(e) : e);
            return e.createTexture(e.width, e.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: Xt,
        __properties__: {
            get_type: "get_type"
        }
    };
    var Vt = function(e, t, n) {
        Nt.call(this, e, t, n)
    };
    r["flambe.platform.html.CanvasTexture"] = Vt;
    Vt.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Vt.__super__ = Nt;
    Vt.prototype = e(Nt.prototype, {
        __class__: Vt
    });
    var $t = function(e) {
        this._graphics = null;
        this._disposed = !1;
        this.image = e;
        this.width = e.width;
        this.height = e.height
    };
    r["flambe.platform.html.CanvasTextureRoot"] = $t;
    $t.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    $t.__interfaces__ = [Ut];
    $t.__super__ = gt;
    $t.prototype = e(gt.prototype, {
        createTexture: function(e, t) {
            return new Vt(this, e, t)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: $t
    });
    var Jt = function(e, t) {
        yt.call(this, e, t)
    };
    r["flambe.platform.html.HtmlAssetPackLoader"] = Jt;
    Jt.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    Jt.detectImageFormats = function(e) {
        var t = [U.PNG, U.JPG, U.GIF],
            n = 2,
            r;
        r = window.document.createElement("img");
        r.onload = r.onerror = function() {
            1 == r.width && t.unshift(U.WEBP);
            --n;
            0 == n && e(t)
        };
        r.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var i;
        i = window.document.createElement("img");
        i.onload = i.onerror = function() {
            1 == i.width && t.unshift(U.JXR);
            --n;
            0 == n && e(t)
        };
        i.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    Jt.detectAudioFormats = function() {
        var e;
        e = window.document.createElement("audio");
        if (null == e || null == n(e, e.canPlayType)) return [];
        var t = new s("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            r = window.navigator.userAgent;
        if (!nn.get_supported() && t.match(r)) return [];
        for (var t = [{
            format: U.M4A,
            mimeType: "audio/mp4; codecs=mp4a"
        }, {
            format: U.MP3,
            mimeType: "audio/mpeg"
        }, {
            format: U.OPUS,
            mimeType: "audio/ogg; codecs=opus"
        }, {
            format: U.OGG,
            mimeType: "audio/ogg; codecs=vorbis"
        }, {
            format: U.WAV,
            mimeType: "audio/wav"
        }], r = [], i = 0; i < t.length;) {
            var o = t[i];
            ++i;
            var u = "";
            try {
                u = e.canPlayType(o.mimeType)
            } catch (a) {}
            "" != u && r.push(o.format)
        }
        return r
    };
    Jt.supportsBlob = function() {
        if (Jt._detectBlobSupport) {
            Jt._detectBlobSupport = !1;
            if ((new s("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var e = new XMLHttpRequest;
            e.open("GET", ".", !0);
            if ("" != e.responseType) return !1;
            e.responseType = "blob";
            if ("blob" != e.responseType) return !1;
            Jt._URL = tn.loadExtension("URL").value
        }
        return null != Jt._URL && null != Jt._URL.createObjectURL
    };
    Jt.__super__ = yt;
    Jt.prototype = e(yt.prototype, {
        loadEntry: function(e, t) {
            var n = this;
            switch (t.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var r;
                    r = window.document.createElement("img");
                    var i = new Ht;
                    i.addDisposingListener(r, "load", function() {
                        Jt.supportsBlob() && Jt._URL.revokeObjectURL(r.src);
                        var e = n._platform.getRenderer().createTextureFromImage(r);
                        null != e ? n.handleLoad(t, e) : n.handleTextureError(t)
                    });
                    i.addDisposingListener(r, "error", function() {
                        n.handleError(t, "Failed to load image")
                    });
                    Jt.supportsBlob() ? this.download(e, t, "blob", function(e) {
                        r.src = Jt._URL.createObjectURL(e)
                    }) : r.src = e;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(e, t, "arraybuffer", function() {
                        var e = n._platform.getRenderer().createCompressedTexture(t.format, null);
                        null != e ? n.handleLoad(t, e) : n.handleTextureError(t)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (nn.get_supported()) this.download(e, t, "arraybuffer", function(e) {
                        nn.ctx.decodeAudioData(e, function(e) {
                            n.handleLoad(t, new nn(e))
                        }, function() {
                            n.handleLoad(t, At.getInstance())
                        })
                    });
                    else {
                        var s;
                        s = window.document.createElement("audio");
                        s.preload = "auto";
                        var o = ++Jt._mediaRefCount;
                        null == Jt._mediaElements && (Jt._mediaElements = new Dn);
                        Jt._mediaElements.set(o, s);
                        i = new Ht;
                        i.addDisposingListener(s, "canplaythrough", function() {
                            Jt._mediaElements.remove(o);
                            n.handleLoad(t, new Qt(s))
                        });
                        i.addDisposingListener(s, "error", function() {
                            Jt._mediaElements.remove(o);
                            var e = s.error.code;
                            3 == e || 4 == e ? n.handleLoad(t, At.getInstance()) : n.handleError(t, "Failed to load audio: " + s.error.code)
                        });
                        i.addListener(s, "progress", function() {
                            if (0 < s.buffered.length && 0 < s.duration) {
                                var e = s.buffered.end(0) / s.duration;
                                n.handleProgress(t, e * t.bytes | 0)
                            }
                        });
                        s.src = e;
                        s.load()
                    }
                    break;
                case 13:
                    this.download(e, t, "text", function(e) {
                        n.handleLoad(t, new wt(e))
                    })
            }
        },
        getAssetFormats: function(e) {
            var t = this;
            null == Jt._supportedFormats && (Jt._supportedFormats = new kn, Jt.detectImageFormats(function(e) {
                Jt._supportedFormats.set_result(t._platform.getRenderer().getCompressedTextureFormats().concat(e).concat(Jt.detectAudioFormats()).concat([U.Data]))
            }));
            Jt._supportedFormats.get(e)
        },
        download: function(e, t, n, r) {
            var i = this,
                s = null,
                o = null,
                u = 0,
                a = !1,
                f = function() {
                    a && (a = !1, window.clearInterval(u))
                },
                l = 3,
                c = function() {
                    --l;
                    return 0 <= l ? (o(), !0) : !1
                },
                o = function() {
                    f();
                    null != s && s.abort();
                    s = new XMLHttpRequest;
                    s.open("GET", e, !0);
                    s.responseType = n;
                    var o = 0;
                    s.onprogress = function(e) {
                        a || (a = !0, u = window.setInterval(function() {
                            4 != s.readyState && 5e3 < Date.now() - o && !c() && (f(), i.handleError(t, "Download stalled"))
                        }, 1e3));
                        o = Date.now();
                        i.handleProgress(t, e.loaded)
                    };
                    s.onerror = function() {
                        if (0 != s.status || !c()) f(), i.handleError(t, "HTTP error " + s.status)
                    };
                    s.onload = function() {
                        var e = s.response;
                        null == e && (e = s.responseText);
                        f();
                        r(e)
                    };
                    s.send()
                };
            o()
        },
        __class__: Jt
    });
    var Kt = function(e, t) {
        St.call(this, e);
        this._canvas = t
    };
    r["flambe.platform.html.HtmlMouse"] = Kt;
    Kt.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    Kt.__super__ = St;
    Kt.prototype = e(St.prototype, {
        __class__: Kt
    });
    var Qt = function(e) {
        this._disposed = !1;
        this.audioElement = e
    };
    r["flambe.platform.html.HtmlSound"] = Qt;
    Qt.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    Qt.__interfaces__ = [Lt];
    Qt.__super__ = gt;
    Qt.prototype = e(gt.prototype, {
        play: function(e) {
            null == e && (e = 1);
            return new Gt(this, e, !1)
        },
        loop: function(e) {
            null == e && (e = 1);
            return new Gt(this, e, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: Qt
    });
    var Gt = function(e, t, n) {
        var r = this;
        this._sound = e;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = n;
        this._clonedElement.src = e.audioElement.src;
        this.volume = new D(t, function() {
            r.updateVolume()
        });
        this.updateVolume();
        this._complete = new L(!1);
        this.playAudio();
        P.hidden._value && this.set_paused(!0)
    };
    r["flambe.platform.html._HtmlSound.HtmlPlayback"] = Gt;
    Gt.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    Gt.__interfaces__ = [zt, Ot];
    Gt.prototype = {
        get_sound: function() {
            return this._sound
        },
        set_paused: function(e) {
            this._clonedElement.paused != e && (e ? this._clonedElement.pause() : this.playAudio());
            return e
        },
        update: function(e) {
            this.volume.update(e);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var e = this;
            this._clonedElement.play();
            this._tickableAdded || (k.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = P.volume.get_changed().connect(function() {
                e.updateVolume()
            }), this._hideBinding = P.hidden.get_changed().connect(function(t) {
                t ? (e._wasPaused = e._clonedElement.paused, e.set_paused(!0)) : e.set_paused(e._wasPaused)
            }))
        },
        updateVolume: function() {
            this._clonedElement.volume = P.volume._value * this.volume._value
        },
        __class__: Gt,
        __properties__: {
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var Yt = function() {};
    r["flambe.subsystem.StageSystem"] = Yt;
    Yt.__name__ = ["flambe", "subsystem", "StageSystem"];
    Yt.prototype = {
        __class__: Yt
    };
    var Zt = function(e) {
        var t = this;
        this._canvas = e;
        this.resize = new Ln;
        this.scaleFactor = Zt.computeScaleFactor();
        1 != this.scaleFactor && (tn.setVendorStyle(this._canvas, "transform-origin", "top left"), tn.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        tn.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            tn.callLater(n(t, t.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", n(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new L(null);
        null != window.orientation && (window.addEventListener("orientationchange", n(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new L(!1);
        tn.addVendorListener(window.document, "fullscreenchange", function() {
            t.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    r["flambe.platform.html.HtmlStage"] = Zt;
    Zt.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    Zt.__interfaces__ = [Yt];
    Zt.computeScaleFactor = function() {
        var e = window.devicePixelRatio;
        null == e && (e = 1);
        var t = window.document.createElement("canvas").getContext("2d"),
            t = tn.loadExtension("backingStorePixelRatio", t).value;
        null == t && (t = 1);
        e /= t;
        t = window.screen.height;
        return 1536 < e * window.screen.width || 1536 < e * t ? 1 : e
    };
    Zt.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        lockOrientation: function(e) {
            var t = tn.loadExtension("lockOrientation", window.screen).value;
            if (null != t) {
                var n;
                switch (e[1]) {
                    case 0:
                        n = "portrait";
                        break;
                    case 1:
                        n = "landscape"
                }
                t.apply(window.screen, [n]) || null
            }
        },
        requestFullscreen: function(e) {
            null == e && (e = !0);
            if (e) {
                var e = window.document.documentElement,
                    t = tn.loadFirstExtension(["requestFullscreen", "requestFullScreen"], e).value;
                null != t && t.apply(e, [])
            } else e = tn.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], window.document).value, null != e && v.callMethod(window.document, e, [])
        },
        onWindowResize: function() {
            var e = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(e.width, e.height)
        },
        resizeCanvas: function(e, t) {
            var n = this.scaleFactor * e,
                r = this.scaleFactor * t;
            if (this._canvas.width == n && this._canvas.height == r) return !1;
            this._canvas.width = n | 0;
            this._canvas.height = r | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var e = this,
                t = window.document.documentElement.style;
            t.height = window.innerHeight + 100 + "px";
            t.width = window.innerWidth + "px";
            t.overflow = "visible";
            tn.callLater(function() {
                tn.hideMobileBrowser();
                tn.callLater(function() {
                    t.height = window.innerHeight + "px";
                    e.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(tn.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == tn.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: Zt,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    };
    var en = function(e) {
        this._storage = e
    };
    r["flambe.platform.html.HtmlStorage"] = en;
    en.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    en.__interfaces__ = [_t];
    en.prototype = {
        set: function(e, t) {
            var n;
            try {
                var r = new Mn;
                r.useCache = !0;
                r.useEnumIndex = !1;
                r.serialize(t);
                n = r.toString()
            } catch (i) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + e, n)
            } catch (s) {
                return !1
            }
            return !0
        },
        get: function(e, t) {
            var n = null;
            try {
                n = this._storage.getItem("flambe:" + e)
            } catch (r) {
                null
            }
            if (null != n) try {
                return _n.run(n)
            } catch (i) {
                null
            }
            return t
        },
        __class__: en
    };
    var tn = function() {};
    r["flambe.platform.html.HtmlUtil"] = tn;
    tn.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    tn.callLater = function(e, t) {
        null == t && (t = 0);
        window.setTimeout(e, t)
    };
    tn.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    tn.loadExtension = function(e, t) {
        null == t && (t = window);
        var n = v.field(t, e);
        if (null != n) return {
            prefix: "",
            field: e,
            value: n
        };
        for (var n = e.charAt(0).toUpperCase() + l.substr(e, 1, null), r = 0, i = tn.VENDOR_PREFIXES; r < i.length;) {
            var s = i[r];
            ++r;
            var o = s + n,
                u = v.field(t, o);
            if (null != u) return {
                prefix: s,
                field: o,
                value: u
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    tn.loadFirstExtension = function(e, t) {
        for (var n = 0; n < e.length;) {
            var r = e[n];
            ++n;
            r = tn.loadExtension(r, t);
            if (null != r.field) return r
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    tn.polyfill = function(e, t) {
        null == t && (t = window);
        var n = tn.loadExtension(e, t).value;
        if (null == n) return !1;
        t[e] = n;
        return !0
    };
    tn.setVendorStyle = function(e, t, n) {
        for (var e = e.style, r = 0, i = tn.VENDOR_PREFIXES; r < i.length;) {
            var s = i[r];
            ++r;
            e.setProperty("-" + s + "-" + t, n)
        }
        e.setProperty(t, n)
    };
    tn.addVendorListener = function(e, t, n, r) {
        for (var i = 0, s = tn.VENDOR_PREFIXES; i < s.length;) {
            var o = s[i];
            ++i;
            e.addEventListener(o + t, n, r)
        }
        e.addEventListener(t, n, r)
    };
    tn.orientation = function(e) {
        switch (e) {
            case -90:
            case 90:
                return it.Landscape;
            default:
                return it.Portrait
        }
    };
    tn.createEmptyCanvas = function(e, t) {
        var n;
        n = window.document.createElement("canvas");
        n.width = e;
        n.height = t;
        return n
    };
    tn.createCanvas = function(e) {
        var t = tn.createEmptyCanvas(e.width, e.height),
            n = t.getContext("2d");
        n.save();
        n.globalCompositeOperation = "copy";
        n.drawImage(e, 0, 0);
        n.restore();
        return t
    };
    tn.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var e = Math.sin,
                t = Math.cos;
            Math.sin = function(t) {
                return 0 == t ? 0 : e(t)
            };
            Math.cos = function(e) {
                return 0 == e ? 1 : t(e)
            }
        }
    };
    var nn = function(e) {
        this._disposed = !1;
        this.buffer = e
    };
    r["flambe.platform.html.WebAudioSound"] = nn;
    nn.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    nn.__interfaces__ = [Lt];
    nn.__properties__ = {
        get_supported: "get_supported"
    };
    nn.get_supported = function() {
        if (nn._detectSupport) {
            nn._detectSupport = !1;
            var e = tn.loadExtension("AudioContext").value;
            null != e && (nn.ctx = new e, nn.gain = nn.createGain(), nn.gain.connect(nn.ctx.destination), P.volume.watch(function(e) {
                nn.gain.gain.value = e
            }))
        }
        return null != nn.ctx
    };
    nn.createGain = function() {
        return null != nn.ctx.createGain ? nn.ctx.createGain() : nn.ctx.createGainNode()
    };
    nn.start = function(e, t) {
        null != e.start ? e.start(t) : e.noteOn(t)
    };
    nn.__super__ = gt;
    nn.prototype = e(gt.prototype, {
        play: function(e) {
            null == e && (e = 1);
            return new rn(this, e, !1)
        },
        loop: function(e) {
            null == e && (e = 1);
            return new rn(this, e, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: nn,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var rn = function(e, t, n) {
        var r = this;
        this._sound = e;
        this._head = nn.gain;
        this._complete = new L(!1);
        this._sourceNode = nn.ctx.createBufferSource();
        this._sourceNode.buffer = e.buffer;
        this._sourceNode.loop = n;
        this._sourceNode.onended = function() {
            r._complete.set__(!0)
        };
        nn.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new D(t, function(e) {
            r.setVolume(e)
        });
        1 != t && this.setVolume(t);
        P.hidden._value && this.set_paused(!0)
    };
    r["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = rn;
    rn.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    rn.__interfaces__ = [zt, Ot];
    rn.prototype = {
        get_sound: function() {
            return this._sound
        },
        set_paused: function(e) {
            e != 0 <= this._pausedAt && (e ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return e
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (nn.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(e) {
            this.volume.update(e);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(e) {
            null == this._gainNode && (this._gainNode = nn.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = e
        },
        insertNode: function(e) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(e));
            e.connect(this._head);
            this._head = e
        },
        playAudio: function() {
            var e = this;
            this._sourceNode.connect(this._head);
            this._startedAt = nn.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (k.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = P.hidden.get_changed().connect(function(t) {
                t ? (e._wasPaused = 0 <= e._pausedAt, e.set_paused(!0)) : e.set_paused(e._wasPaused)
            }))
        },
        __class__: rn,
        __properties__: {
            get_position: "get_position",
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var sn = function() {
        this._width = this._height = -1;
        this._transitor = null;
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new T
    };
    r["flambe.scene.Director"] = sn;
    sn.__name__ = ["flambe", "scene", "Director"];
    sn.__super__ = S;
    sn.prototype = e(S.prototype, {
        get_name: function() {
            return "Director_5"
        },
        setSize: function(e, t) {
            this._width = e;
            this._height = t;
            return this
        },
        pushScene: function(e, t) {
            var n = this;
            this.completeTransition();
            var r = this.get_topScene();
            null != r ? this.playTransition(r, e, t, function() {
                n.hide(r)
            }) : (this.add(e), this.invalidateVisibility())
        },
        popScene: function(e) {
            var t = this;
            this.completeTransition();
            var n = this.get_topScene();
            if (null != n) {
                this.scenes.pop();
                var r = this.get_topScene();
                null != r ? this.playTransition(n, r, e, function() {
                    t.hideAndDispose(n)
                }) : (this.hideAndDispose(n), this.invalidateVisibility())
            }
        },
        unwindToScene: function(e, t) {
            var n = this;
            this.completeTransition();
            var r = this.get_topScene();
            if (null != r) {
                if (r != e) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != e;) this.scenes.pop().dispose();
                    this.playTransition(r, e, t, function() {
                        n.hideAndDispose(r)
                    })
                }
            } else this.pushScene(e, t)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var e = 0, t = this.scenes; e < t.length;) {
                var n = t[e];
                ++e;
                n.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(e) {
            null != this._transitor && this._transitor.update(e) && this.completeTransition()
        },
        get_topScene: function() {
            var e = this.scenes.length;
            return 0 < e ? this.scenes[e - 1] : null
        },
        add: function(e) {
            var t = this.get_topScene();
            null != t && this._root.removeChild(t);
            l.remove(this.scenes, e);
            this.scenes.push(e);
            this._root.addChild(e)
        },
        hide: function(e) {
            e = e._compMap.Scene_4;
            null != e && e.hidden.emit()
        },
        hideAndDispose: function(e) {
            this.hide(e);
            e.dispose()
        },
        show: function(e) {
            e = e._compMap.Scene_4;
            null != e && e.shown.emit()
        },
        invalidateVisibility: function() {
            for (var e = this.scenes.length; 0 < e;) {
                var t = this.scenes[--e]._compMap.Scene_4;
                if (null == t || t.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(e, this.scenes.length - 1) : [];
            e = this.get_topScene();
            null != e && this.show(e)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(e, t, n, r) {
            this.completeTransition();
            this.add(t);
            null != n ? (this.occludedScenes.push(e), this._transitor = new on(e, t, n, r), this._transitor.init(this)) : (r(), this.invalidateVisibility())
        },
        get_width: function() {
            return 0 > this._width ? P._platform.getStage().get_width() : this._width
        },
        get_height: function() {
            return 0 > this._height ? P._platform.getStage().get_height() : this._height
        },
        __class__: sn,
        __properties__: e(S.prototype.__properties__, {
            get_height: "get_height",
            get_width: "get_width",
            get_topScene: "get_topScene"
        })
    });
    var on = function(e, t, n, r) {
        this._from = e;
        this._to = t;
        this._transition = n;
        this._onComplete = r
    };
    r["flambe.scene._Director.Transitor"] = on;
    on.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    on.prototype = {
        init: function(e) {
            this._transition.init(e, this._from, this._to)
        },
        update: function(e) {
            return this._transition.update(e)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: on
    };
    var un = function() {};
    r["flambe.scene.Transition"] = un;
    un.__name__ = ["flambe", "scene", "Transition"];
    un.prototype = {
        init: function(e, t, n) {
            this._director = e;
            this._from = t;
            this._to = n
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: un
    };
    var an = function(e, t) {
        this._duration = e;
        this._ease = null != t ? t : F.linear
    };
    r["flambe.scene.TweenTransition"] = an;
    an.__name__ = ["flambe", "scene", "TweenTransition"];
    an.__super__ = un;
    an.prototype = e(un.prototype, {
        init: function(e, t, n) {
            un.prototype.init.call(this, e, t, n);
            this._elapsed = 0
        },
        update: function(e) {
            this._elapsed += e;
            return this._elapsed >= this._duration
        },
        interp: function(e, t) {
            return e + (t - e) * this._ease(this._elapsed / this._duration)
        },
        __class__: an
    });
    var fn = function(e, t) {
        an.call(this, e, t)
    };
    r["flambe.scene.FadeTransition"] = fn;
    fn.__name__ = ["flambe", "scene", "FadeTransition"];
    fn.__super__ = an;
    fn.prototype = e(an.prototype, {
        init: function(e, t, n) {
            an.prototype.init.call(this, e, t, n);
            e = this._to._compMap.Sprite_0;
            null == e && this._to.add(e = new J);
            e.alpha.set__(0)
        },
        update: function(e) {
            e = an.prototype.update.call(this, e);
            this._to._compMap.Sprite_0.alpha.set__(this.interp(0, 1));
            return e
        },
        complete: function() {
            this._to._compMap.Sprite_0.alpha.set__(1)
        },
        __class__: fn
    });
    var ln = function(e) {
        null == e && (e = !0);
        this.opaque = e;
        this.shown = new Ln;
        this.hidden = new Ln
    };
    r["flambe.scene.Scene"] = ln;
    ln.__name__ = ["flambe", "scene", "Scene"];
    ln.__super__ = S;
    ln.prototype = e(S.prototype, {
        get_name: function() {
            return "Scene_4"
        },
        __class__: ln
    });
    var cn = function(e, t) {
        this._direction = 2;
        an.call(this, e, t)
    };
    r["flambe.scene.SlideTransition"] = cn;
    cn.__name__ = ["flambe", "scene", "SlideTransition"];
    cn.__super__ = an;
    cn.prototype = e(an.prototype, {
        left: function() {
            this._direction = 2;
            return this
        },
        init: function(e, t, n) {
            an.prototype.init.call(this, e, t, n);
            switch (this._direction) {
                case 0:
                    this._x = 0;
                    this._y = -this._director.get_height();
                    break;
                case 1:
                    this._x = 0;
                    this._y = this._director.get_height();
                    break;
                case 2:
                    this._x = -this._director.get_width();
                    this._y = 0;
                    break;
                case 3:
                    this._x = this._director.get_width(), this._y = 0
            }
            e = this._from._compMap.Sprite_0;
            null == e && this._from.add(e = new J);
            e.setXY(0, 0);
            e = this._to._compMap.Sprite_0;
            null == e && this._to.add(e = new J);
            e.setXY(-this._x, -this._y)
        },
        update: function(e) {
            e = an.prototype.update.call(this, e);
            this._from._compMap.Sprite_0.setXY(this.interp(0, this._x), this.interp(0, this._y));
            this._to._compMap.Sprite_0.setXY(this.interp(-this._x, 0), this.interp(-this._y, 0));
            return e
        },
        complete: function() {
            this._from._compMap.Sprite_0.setXY(0, 0);
            this._to._compMap.Sprite_0.setXY(0, 0)
        },
        __class__: cn
    });
    var hn = function() {};
    r["flambe.script.Action"] = hn;
    hn.__name__ = ["flambe", "script", "Action"];
    hn.prototype = {
        __class__: hn
    };
    var pn = function(e, t, n, r) {
        this._value = e;
        this._to = t;
        this._seconds = n;
        this._easing = r
    };
    r["flambe.script.AnimateTo"] = pn;
    pn.__name__ = ["flambe", "script", "AnimateTo"];
    pn.__interfaces__ = [hn];
    pn.prototype = {
        update: function(e) {
            null == this._tween && (this._tween = new q(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(e));
            if (this._value._behavior != this._tween) {
                var t = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < t ? e - t : 0
            }
            return -1
        },
        __class__: pn
    };
    var dn = function(e) {
        this._fn = e
    };
    r["flambe.script.CallFunction"] = dn;
    dn.__name__ = ["flambe", "script", "CallFunction"];
    dn.__interfaces__ = [hn];
    dn.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: dn
    };
    var vn = function(e) {
        this._duration = e;
        this._elapsed = 0
    };
    r["flambe.script.Delay"] = vn;
    vn.__name__ = ["flambe", "script", "Delay"];
    vn.__interfaces__ = [hn];
    vn.prototype = {
        update: function(e) {
            this._elapsed += e;
            if (this._elapsed >= this._duration) {
                var t = this._elapsed - this._duration;
                this._elapsed = 0;
                return e - t
            }
            return -1
        },
        __class__: vn
    };
    var mn = function(e) {
        this._completedActions = [];
        this._runningActions = null != e ? e.slice() : []
    };
    r["flambe.script.Parallel"] = mn;
    mn.__name__ = ["flambe", "script", "Parallel"];
    mn.__interfaces__ = [hn];
    mn.prototype = {
        update: function(e, t) {
            for (var n = !0, r = 0, i = 0, s = this._runningActions.length; i < s;) {
                var o = i++,
                    u = this._runningActions[o];
                if (null != u) {
                    var a = u.update(e, t);
                    0 <= a ? (this._runningActions[o] = null, this._completedActions.push(u), a > r && (r = a)) : n = !1
                }
            }
            return n ? (this._runningActions = this._completedActions, this._completedActions = [], r) : -1
        },
        __class__: mn
    };
    var gn = function(e, t) {
        null == t && (t = -1);
        this._action = e;
        this._remaining = this._count = t
    };
    r["flambe.script.Repeat"] = gn;
    gn.__name__ = ["flambe", "script", "Repeat"];
    gn.__interfaces__ = [hn];
    gn.prototype = {
        update: function(e, t) {
            if (0 == this._count) return 0;
            var n = this._action.update(e, t);
            return 0 < this._count && 0 <= n && 0 == --this._remaining ? (this._remaining = this._count, n) : -1
        },
        __class__: gn
    };
    var yn = function() {
        this.stopAll()
    };
    r["flambe.script.Script"] = yn;
    yn.__name__ = ["flambe", "script", "Script"];
    yn.__super__ = S;
    yn.prototype = e(S.prototype, {
        get_name: function() {
            return "Script_3"
        },
        run: function(e) {
            e = new bn(e);
            this._handles.push(e);
            return e
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(e) {
            for (var t = 0; t < this._handles.length;) {
                var n = this._handles[t];
                n.removed || 0 <= n.action.update(e, this.owner) ? this._handles.splice(t, 1) : ++t
            }
        },
        __class__: yn
    });
    var bn = function(e) {
        this.removed = !1;
        this.action = e
    };
    r["flambe.script._Script.Handle"] = bn;
    bn.__name__ = ["flambe", "script", "_Script", "Handle"];
    bn.__interfaces__ = [E];
    bn.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: bn
    };
    var wn = function(e) {
        this._idx = 0;
        this._runningActions = null != e ? e.slice() : []
    };
    r["flambe.script.Sequence"] = wn;
    wn.__name__ = ["flambe", "script", "Sequence"];
    wn.__interfaces__ = [hn];
    wn.prototype = {
        add: function(e) {
            this._runningActions.push(e)
        },
        update: function(e, t) {
            for (var n = 0;;) {
                var r = this._runningActions[this._idx];
                if (null != r)
                    if (r = r.update(e - n, t), 0 <= r) n += r;
                    else return -1;
                    ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (n > e) return -1
            }
            return n
        },
        __class__: wn
    };
    var En = function(e, t, n) {
        this._strengthX = e;
        this._strengthY = t;
        this._duration = n;
        this._elapsed = 0
    };
    r["flambe.script.Shake"] = En;
    En.__name__ = ["flambe", "script", "Shake"];
    En.__interfaces__ = [hn];
    En.prototype = {
        update: function(e, t) {
            var n = t._compMap.Sprite_0;
            null == this._jitterX && (this._jitterX = new I(n.x._value, this._strengthX), this._jitterY = new I(n.y._value, this._strengthY), n.x.set_behavior(this._jitterX), n.y.set_behavior(this._jitterY));
            this._elapsed += e;
            if (this._elapsed >= this._duration) {
                var r = this._elapsed - this._duration;
                n.x._behavior == this._jitterX && n.x.set__(this._jitterX.base);
                n.y._behavior == this._jitterY && n.y.set__(this._jitterY.base);
                this._jitterY = this._jitterX = null;
                this._elapsed = 0;
                return e - r
            }
            return -1
        },
        __class__: En
    };
    var Sn = r["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    Sn.Stage3D = ["Stage3D", 0];
    Sn.Stage3D.toString = i;
    Sn.Stage3D.__enum__ = Sn;
    Sn.WebGL = ["WebGL", 1];
    Sn.WebGL.toString = i;
    Sn.WebGL.__enum__ = Sn;
    Sn.Canvas = ["Canvas", 2];
    Sn.Canvas.toString = i;
    Sn.Canvas.__enum__ = Sn;
    var xn = function() {};
    r["flambe.util.Assert"] = xn;
    xn.__name__ = ["flambe", "util", "Assert"];
    xn.that = function() {};
    var Tn = function() {};
    r["flambe.util.BitSets"] = Tn;
    Tn.__name__ = ["flambe", "util", "BitSets"];
    Tn.set = function(e, t, n) {
        return n ? e | t : e & ~t
    };
    var Nn = function() {
        this.mainSection = new Hn;
        this.sections = new Hn
    };
    r["flambe.util.Config"] = Nn;
    Nn.__name__ = ["flambe", "util", "Config"];
    Nn.parse = function(e) {
        for (var t = new Nn, n = new s("^\\s*;", ""), r = new s("^\\s*\\[\\s*([^\\]]*)\\s*\\]", ""), i = new s("^\\s*([\\w\\.\\-_]+)\\s*=\\s*(.*)", ""), o = t.mainSection, u = 0, e = (new s("\r\n|\r|\n", "g")).split(e); u < e.length;) {
            var a = e[u];
            ++u;
            if (!n.match(a))
                if (r.match(a)) a = r.matched(1), t.sections.exists(a) ? o = t.sections.get(a) : (o = new Hn, t.sections.set(a, o));
                else if (i.match(a)) {
                var a = i.matched(1),
                    f = i.matched(2),
                    c = f.charCodeAt(0);
                if ((34 == c || 39 == c) && f.charCodeAt(f.length - 1) == c) f = l.substr(f, 1, f.length - 2);
                f = y.replace(y.replace(y.replace(y.replace(y.replace(y.replace(f, "\\n", "\n"), "\\r", "\r"), "\\t", "    "), "\\'", "'"), '\\"', '"'), "\\\\", "\\");
                o.set(a, f)
            }
        }
        return t
    };
    Nn.prototype = {
        __class__: Nn
    };
    var Cn = function(e) {
        this.config = e;
        this.missingTranslation = new _
    };
    r["flambe.util.MessageBundle"] = Cn;
    Cn.__name__ = ["flambe", "util", "MessageBundle"];
    Cn.parse = function(e) {
        return new Cn(Nn.parse(e))
    };
    Cn.prototype = {
        __class__: Cn
    };
    var kn = function() {
        this.success = new _;
        this.error = new _;
        this.progressChanged = new Ln;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    r["flambe.util.Promise"] = kn;
    kn.__name__ = ["flambe", "util", "Promise"];
    kn.prototype = {
        set_result: function(e) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = e;
            this.hasResult = !0;
            this.success.emit(e);
            return e
        },
        get: function(e) {
            return this.hasResult ? (e(this._result), null) : this.success.connect(e).once()
        },
        set_progress: function(e) {
            this._progress != e && (this._progress = e, this.progressChanged.emit());
            return e
        },
        set_total: function(e) {
            this._total != e && (this._total = e, this.progressChanged.emit());
            return e
        },
        __class__: kn,
        __properties__: {
            set_total: "set_total",
            set_progress: "set_progress",
            set_result: "set_result"
        }
    };
    var Ln = function(e) {
        O.call(this, e)
    };
    r["flambe.util.Signal0"] = Ln;
    Ln.__name__ = ["flambe", "util", "Signal0"];
    Ln.__super__ = O;
    Ln.prototype = e(O.prototype, {
        connect: function(e, t) {
            null == t && (t = !1);
            return this.connectImpl(e, t)
        },
        emit: function() {
            var e = this;
            this._head == O.DISPATCHING_SENTINEL ? this.defer(function() {
                e.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var e = this.willEmit(), t = e; null != t;) t._listener(), t.stayInList || t.dispose(), t = t._next;
            this.didEmit(e)
        },
        __class__: Ln
    });
    var An = function(e) {
        this.next = null;
        this.fn = e
    };
    r["flambe.util._SignalBase.Task"] = An;
    An.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    An.prototype = {
        __class__: An
    };
    var On = function() {};
    r["flambe.util.Strings"] = On;
    On.__name__ = ["flambe", "util", "Strings"];
    On.getFileExtension = function(e) {
        var t = e.lastIndexOf(".");
        return 0 < t ? l.substr(e, t + 1, null) : null
    };
    On.removeFileExtension = function(e) {
        var t = e.lastIndexOf(".");
        return 0 < t ? l.substr(e, 0, t) : e
    };
    On.getUrlExtension = function(e) {
        var t = e.lastIndexOf("?");
        0 <= t && (e = l.substr(e, 0, t));
        t = e.lastIndexOf("/");
        0 <= t && (e = l.substr(e, t + 1, null));
        return On.getFileExtension(e)
    };
    On.joinPath = function(e, t) {
        0 < e.length && 47 != e.charCodeAt(e.length - 1) && (e += "/");
        return e + t
    };
    On.withFields = function(e, t) {
        var n = t.length;
        if (0 < n) {
            for (var e = 0 < e.length ? e + " [" : e + "[", r = 0; r < n;) {
                0 < r && (e += ", ");
                var i = t[r],
                    s = t[r + 1];
                if (m.is(s, Error)) {
                    var o = s.stack;
                    null != o && (s = o)
                }
                e += i + "=" + m.string(s);
                r += 2
            }
            e += "]"
        }
        return e
    };
    var Mn = function() {
        this.buf = new g;
        this.cache = [];
        this.useCache = Mn.USE_CACHE;
        this.useEnumIndex = Mn.USE_ENUM_INDEX;
        this.shash = new Hn;
        this.scount = 0
    };
    r["haxe.Serializer"] = Mn;
    Mn.__name__ = ["haxe", "Serializer"];
    Mn.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(e) {
            var t = this.shash.get(e);
            null != t ? (this.buf.b += "R", this.buf.b = null == t ? this.buf.b + "null" : this.buf.b + ("" + t)) : (this.shash.set(e, this.scount++), this.buf.b += "y", e = encodeURIComponent(e), this.buf.b = null == e.length ? this.buf.b + "null" : this.buf.b + ("" + e.length), this.buf.b += ":", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e))
        },
        serializeRef: function(e) {
            for (var t = typeof e, n = 0, r = this.cache.length; n < r;) {
                var i = n++,
                    s = this.cache[i];
                if (typeof s == t && s == e) return this.buf.b += "r", this.buf.b = null == i ? this.buf.b + "null" : this.buf.b + ("" + i), !0
            }
            this.cache.push(e);
            return !1
        },
        serializeFields: function(e) {
            for (var t = 0, n = v.fields(e); t < n.length;) {
                var r = n[t];
                ++t;
                this.serializeString(r);
                this.serialize(v.field(e, r))
            }
            this.buf.b += "g"
        },
        serialize: function(e) {
            var t = w["typeof"](e);
            switch (t[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == e) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e);
                    break;
                case 2:
                    Math.isNaN(e) ? this.buf.b += "k" : Math.isFinite(e) ? (this.buf.b += "d", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e)) : this.buf.b = 0 > e ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = e ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    t = t[2];
                    if (t == String) {
                        this.serializeString(e);
                        break
                    }
                    if (this.useCache && this.serializeRef(e)) break;
                    switch (t) {
                        case Array:
                            t = 0;
                            this.buf.b += "a";
                            for (var n = e.length, r = 0; r < n;) {
                                var i = r++;
                                null == e[i] ? t++ : (0 < t && (1 == t ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == t ? this.buf.b + "null" : this.buf.b + ("" + t)), t = 0), this.serialize(e[i]))
                            }
                            0 < t && (1 == t ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == t ? this.buf.b + "null" : this.buf.b + ("" + t)));
                            this.buf.b += "h";
                            break;
                        case h:
                            this.buf.b += "l";
                            for (e = e.iterator(); e.hasNext();) this.serialize(e.next());
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(l.dateStr(e));
                            break;
                        case Hn:
                            this.buf.b += "b";
                            for (t = e.keys(); t.hasNext();) n = t.next(), this.serializeString(n), this.serialize(e.get(n));
                            this.buf.b += "h";
                            break;
                        case Dn:
                            this.buf.b += "q";
                            for (t = e.keys(); t.hasNext();) n = t.next(), this.buf.b += ":", this.buf.b = null == n ? this.buf.b + "null" : this.buf.b + ("" + n), this.serialize(e.get(n));
                            this.buf.b += "h";
                            break;
                        case Pn:
                            this.buf.b += "M";
                            for (t = e.keys(); t.hasNext();) n = t.next(), r = v.field(n, "__id__"), v.deleteField(n, "__id__"), this.serialize(n), n.__id__ = r, this.serialize(e.h[n.__id__]);
                            this.buf.b += "h";
                            break;
                        case Bn:
                            r = 0;
                            i = e.length - 2;
                            t = new g;
                            for (n = Mn.BASE64; r < i;) {
                                var s = e.get(r++),
                                    o = e.get(r++),
                                    u = e.get(r++);
                                t.add(n.charAt(s >> 2));
                                t.add(n.charAt((s << 4 | o >> 4) & 63));
                                t.add(n.charAt((o << 2 | u >> 6) & 63));
                                t.add(n.charAt(u & 63))
                            }
                            r == i ? (i = e.get(r++), e = e.get(r++), t.add(n.charAt(i >> 2)), t.add(n.charAt((i << 4 | e >> 4) & 63)), t.add(n.charAt(e << 2 & 63))) : r == i + 1 && (e = e.get(r++), t.add(n.charAt(e >> 2)), t.add(n.charAt(e << 4 & 63)));
                            e = t.b;
                            this.buf.b += "s";
                            this.buf.b = null == e.length ? this.buf.b + "null" : this.buf.b + ("" + e.length);
                            this.buf.b += ":";
                            this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != e.hxSerialize ? (this.buf.b += "C", this.serializeString(w.getClassName(t)), this.useCache && this.cache.push(e), e.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(w.getClassName(t)), this.useCache && this.cache.push(e), this.serializeFields(e))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(e)) break;
                    this.buf.b += "o";
                    this.serializeFields(e);
                    break;
                case 7:
                    t = t[2];
                    if (this.useCache) {
                        if (this.serializeRef(e)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(w.getEnumName(t));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += m.string(e[1])) : this.serializeString(e[0]);
                    this.buf.b += ":";
                    t = e.length;
                    this.buf.b += m.string(t - 2);
                    for (n = 2; n < t;) r = n++, this.serialize(e[r]);
                    this.useCache && this.cache.push(e);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + m.string(e)
            }
        },
        __class__: Mn
    };
    var _n = function(e) {
        this.buf = e;
        this.length = e.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        e = _n.DEFAULT_RESOLVER;
        null == e && (e = w, _n.DEFAULT_RESOLVER = e);
        this.setResolver(e)
    };
    r["haxe.Unserializer"] = _n;
    _n.__name__ = ["haxe", "Unserializer"];
    _n.initCodes = function() {
        for (var e = [], t = 0, n = _n.BASE64.length; t < n;) {
            var r = t++;
            e[_n.BASE64.charCodeAt(r)] = r
        }
        return e
    };
    _n.run = function(e) {
        return (new _n(e)).unserialize()
    };
    _n.prototype = {
        setResolver: function(e) {
            this.resolver = null == e ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : e
        },
        get: function(e) {
            return this.buf.charCodeAt(e)
        },
        readDigits: function() {
            for (var e = 0, t = !1, n = this.pos;;) {
                var r = this.buf.charCodeAt(this.pos);
                if (r != r) break;
                if (45 == r) {
                    if (this.pos != n) break;
                    t = !0
                } else {
                    if (48 > r || 57 < r) break;
                    e = 10 * e + (r - 48)
                }
                this.pos++
            }
            t && (e *= -1);
            return e
        },
        unserializeObject: function(e) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var t = this.unserialize();
                if ("string" != typeof t) throw "Invalid object key";
                var n = this.unserialize();
                e[t] = n
            }
            this.pos++
        },
        unserializeEnum: function(e, t) {
            if (58 != this.get(this.pos++)) throw "Invalid enum format";
            var n = this.readDigits();
            if (0 == n) return w.createEnum(e, t);
            for (var r = []; 0 < n--;) r.push(this.unserialize());
            return w.createEnum(e, t, r)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var e = this.pos;;) {
                        var t = this.buf.charCodeAt(this.pos);
                        if (43 <= t && 58 > t || 101 == t || 69 == t) this.pos++;
                        else break
                    }
                    return m.parseFloat(l.substr(this.buf, e, this.pos - e));
                case 121:
                    e = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < e) throw "Invalid string length";
                    t = l.substr(this.buf, this.pos, e);
                    this.pos += e;
                    t = decodeURIComponent(t.split("+").join(" "));
                    this.scache.push(t);
                    return t;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    e = [];
                    for (this.cache.push(e);;) {
                        t = this.buf.charCodeAt(this.pos);
                        if (104 == t) {
                            this.pos++;
                            break
                        }
                        117 == t ? (this.pos++, t = this.readDigits(), e[e.length + t - 1] = null) : e.push(this.unserialize())
                    }
                    return e;
                case 111:
                    return e = {}, this.cache.push(e), this.unserializeObject(e), e;
                case 114:
                    e = this.readDigits();
                    if (0 > e || e >= this.cache.length) throw "Invalid reference";
                    return this.cache[e];
                case 82:
                    e = this.readDigits();
                    if (0 > e || e >= this.scache.length) throw "Invalid string reference";
                    return this.scache[e];
                case 120:
                    throw this.unserialize();
                case 99:
                    e = this.unserialize();
                    t = this.resolver.resolveClass(e);
                    if (null == t) throw "Class not found " + e;
                    e = w.createEmptyInstance(t);
                    this.cache.push(e);
                    this.unserializeObject(e);
                    return e;
                case 119:
                    e = this.unserialize();
                    t = this.resolver.resolveEnum(e);
                    if (null == t) throw "Enum not found " + e;
                    e = this.unserializeEnum(t, this.unserialize());
                    this.cache.push(e);
                    return e;
                case 106:
                    e = this.unserialize();
                    t = this.resolver.resolveEnum(e);
                    if (null == t) throw "Enum not found " + e;
                    this.pos++;
                    var n = this.readDigits(),
                        r = w.getEnumConstructs(t)[n];
                    if (null == r) throw "Unknown enum index " + e + "@" + n;
                    e = this.unserializeEnum(t, r);
                    this.cache.push(e);
                    return e;
                case 108:
                    e = new h;
                    for (this.cache.push(e); 104 != this.buf.charCodeAt(this.pos);) e.add(this.unserialize());
                    this.pos++;
                    return e;
                case 98:
                    e = new Hn;
                    for (this.cache.push(e); 104 != this.buf.charCodeAt(this.pos);) t = this.unserialize(), e.set(t, this.unserialize());
                    this.pos++;
                    return e;
                case 113:
                    e = new Dn;
                    this.cache.push(e);
                    for (t = this.get(this.pos++); 58 == t;) t = this.readDigits(), e.set(t, this.unserialize()), t = this.get(this.pos++);
                    if (104 != t) throw "Invalid IntMap format";
                    return e;
                case 77:
                    e = new Pn;
                    for (this.cache.push(e); 104 != this.buf.charCodeAt(this.pos);) t = this.unserialize(), e.set(t, this.unserialize());
                    this.pos++;
                    return e;
                case 118:
                    return e = l.substr(this.buf, this.pos, 19), e = l.strDate(e), this.cache.push(e), this.pos += 19, e;
                case 115:
                    e = this.readDigits();
                    r = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < e) throw "Invalid bytes length";
                    var i = _n.CODES;
                    null == i && (i = _n.initCodes(), _n.CODES = i);
                    for (var s = this.pos, o = e & 3, u = s + (e - o), t = Bn.alloc(3 * (e >> 2) + (2 <= o ? o - 1 : 0)), n = 0; s < u;) {
                        var a = i[y.fastCodeAt(r, s++)],
                            f = i[y.fastCodeAt(r, s++)];
                        t.set(n++, a << 2 | f >> 4);
                        a = i[y.fastCodeAt(r, s++)];
                        t.set(n++, f << 4 | a >> 2);
                        f = i[y.fastCodeAt(r, s++)];
                        t.set(n++, a << 6 | f)
                    }
                    2 <= o && (f = i[y.fastCodeAt(r, s++)], u = i[y.fastCodeAt(r, s++)], t.set(n++, f << 2 | u >> 4), 3 == o && (r = i[y.fastCodeAt(r, s++)], t.set(n++, u << 4 | r >> 2)));
                    this.pos += e;
                    this.cache.push(t);
                    return t;
                case 67:
                    e = this.unserialize();
                    t = this.resolver.resolveClass(e);
                    if (null == t) throw "Class not found " + e;
                    e = w.createEmptyInstance(t);
                    this.cache.push(e);
                    e.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw "Invalid custom data";
                    return e
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos
        },
        __class__: _n
    };
    var Dn = function() {
        this.h = {}
    };
    r["haxe.ds.IntMap"] = Dn;
    Dn.__name__ = ["haxe", "ds", "IntMap"];
    Dn.__interfaces__ = [d];
    Dn.prototype = {
        set: function(e, t) {
            this.h[e] = t
        },
        get: function(e) {
            return this.h[e]
        },
        exists: function(e) {
            return this.h.hasOwnProperty(e)
        },
        remove: function(e) {
            if (!this.h.hasOwnProperty(e)) return !1;
            delete this.h[e];
            return !0
        },
        keys: function() {
            var e = [],
                t;
            for (t in this.h) this.h.hasOwnProperty(t) && e.push(t | 0);
            return l.iter(e)
        },
        __class__: Dn
    };
    var Pn = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    r["haxe.ds.ObjectMap"] = Pn;
    Pn.__name__ = ["haxe", "ds", "ObjectMap"];
    Pn.__interfaces__ = [d];
    Pn.prototype = {
        set: function(e, t) {
            var n = e.__id__ || (e.__id__ = ++Pn.count);
            this.h[n] = t;
            this.h.__keys__[n] = e
        },
        keys: function() {
            var e = [],
                t;
            for (t in this.h.__keys__) this.h.hasOwnProperty(t) && e.push(this.h.__keys__[t]);
            return l.iter(e)
        },
        __class__: Pn
    };
    var Hn = function() {
        this.h = {}
    };
    r["haxe.ds.StringMap"] = Hn;
    Hn.__name__ = ["haxe", "ds", "StringMap"];
    Hn.__interfaces__ = [d];
    Hn.prototype = {
        set: function(e, t) {
            this.h["$" + e] = t
        },
        get: function(e) {
            return this.h["$" + e]
        },
        exists: function(e) {
            return this.h.hasOwnProperty("$" + e)
        },
        keys: function() {
            var e = [],
                t;
            for (t in this.h) this.h.hasOwnProperty(t) && e.push(t.substr(1));
            return l.iter(e)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: Hn
    };
    var Bn = function(e, t) {
        this.length = e;
        this.b = t
    };
    r["haxe.io.Bytes"] = Bn;
    Bn.__name__ = ["haxe", "io", "Bytes"];
    Bn.alloc = function(e) {
        for (var t = [], n = 0; n < e;) n++, t.push(0);
        return new Bn(e, t)
    };
    Bn.prototype = {
        get: function(e) {
            return this.b[e]
        },
        set: function(e, t) {
            this.b[e] = t & 255
        },
        __class__: Bn
    };
    var jn = function() {};
    r["haxe.io.Eof"] = jn;
    jn.__name__ = ["haxe", "io", "Eof"];
    jn.prototype = {
        toString: function() {
            return "Eof"
        },
        __class__: jn
    };
    var Fn = function() {};
    r["haxe.rtti.Meta"] = Fn;
    Fn.__name__ = ["haxe", "rtti", "Meta"];
    Fn.getType = function(e) {
        e = e.__meta__;
        return null == e || null == e.obj ? {} : e.obj
    };
    var In = function() {};
    r["js.Boot"] = In;
    In.__name__ = ["js", "Boot"];
    In.getClass = function(e) {
        return e instanceof Array && null == e.__enum__ ? Array : e.__class__
    };
    In.__string_rec = function(e, t) {
        if (null == e) return "null";
        if (5 <= t.length) return "<...>";
        var n = typeof e;
        if ("function" == n && (e.__name__ || e.__ename__)) n = "object";
        switch (n) {
            case "object":
                if (e instanceof Array) {
                    if (e.__enum__) {
                        if (2 == e.length) return e[0];
                        for (var n = e[0] + "(", t = t + "    ", r = 2, i = e.length; r < i;) var s = r++,
                            n = 2 != s ? n + ("," + In.__string_rec(e[s], t)) : n + In.__string_rec(e[s], t);
                        return n + ")"
                    }
                    n = e.length;
                    r = "[";
                    t += " ";
                    for (i = 0; i < n;) s = i++, r += (0 < s ? "," : "") + In.__string_rec(e[s], t);
                    return r + "]"
                }
                try {
                    r = e.toString
                } catch (o) {
                    return "???"
                }
                if (null != r && r != Object.toString && (n = e.toString(), "[object Object]" != n)) return n;
                n = null;
                r = "{\n";
                t += "  ";
                i = null != e.hasOwnProperty;
                for (n in e)
                    if (!i || e.hasOwnProperty(n)) "prototype" == n || "__class__" == n || "__super__" == n || "__interfaces__" == n || "__properties__" == n || (2 != r.length && (r += ", \n"), r += t + n + " : " + In.__string_rec(e[n], t));
                t = t.substring(1);
                return r + ("\n" + t + "}");
            case "function":
                return "<function>";
            case "string":
                return e;
            default:
                return "" + e
        }
    };
    In.__interfLoop = function(e, t) {
        if (null == e) return !1;
        if (e == t) return !0;
        var n = e.__interfaces__;
        if (null != n)
            for (var r = 0, i = n.length; r < i;) {
                var s = r++,
                    s = n[s];
                if (s == t || In.__interfLoop(s, t)) return !0
            }
        return In.__interfLoop(e.__super__, t)
    };
    In.__instanceof = function(e, t) {
        if (null == t) return !1;
        switch (t) {
            case Gn:
                return (e | 0) === e;
            case Zn:
                return "number" == typeof e;
            case er:
                return "boolean" == typeof e;
            case String:
                return "string" == typeof e;
            case Array:
                return e instanceof Array && null == e.__enum__;
            case Yn:
                return !0;
            default:
                if (null != e) {
                    if ("function" == typeof t && (e instanceof t || In.__interfLoop(In.getClass(e), t))) return !0
                } else return !1;
                return t == tr && null != e.__name__ || t == nr && null != e.__ename__ ? !0 : e.__enum__ == t
        }
    };
    In.__cast = function(e, t) {
        if (In.__instanceof(e, t)) return e;
        throw "Cannot cast " + m.string(e) + " to " + m.string(t)
    };
    var qn = function() {};
    r["js.Browser"] = qn;
    qn.__name__ = ["js", "Browser"];
    qn.getLocalStorage = function() {
        try {
            var e = window.localStorage;
            e.getItem("");
            return e
        } catch (t) {
            return null
        }
    };
    var Rn = function(e) {
        this.root = (new T).add(new ln(!1));
        Kn.addFillSprite(this.root, Kn.halfWidth, Kn.halfHeight, 0, Kn.width, Kn.height, .8);
        Kn.addLabel(this.root, Kn.halfWidth, Kn.halfHeight - 150, "eRMB", 1.2, 1, !0, "font2");
        e = Kn.addLabel(this.root, Kn.halfWidth + 50, Kn.halfHeight, "" + e, 1.2, 1, !0);
        Kn.addImageSprite(e, -50, 25, "score_icon");
        Kn.addButton(this.root, Kn.halfWidth - 75, Kn.halfHeight + 170, "home_btn", function() {
            $n.unmuteSoundtrack();
            Kn.goToScene((new Xn).root)
        });
        Kn.addButton(this.root, Kn.halfWidth + 75, Kn.halfHeight + 170, "replay_btn", function() {
            $n.unmuteSoundtrack();
            Kn.goToScene((new Un(0)).root)
        })
    };
    r["scenes.GameOverScene"] = Rn;
    Rn.__name__ = ["scenes", "GameOverScene"];
    Rn.prototype = {
        __class__: Rn
    };
    var Un = function() {
        this.root = (new T).add(new ln);
        var e = this;
        this.root.add(new yn);
        Kn.addImageSprite(this.root, 0, 0, "game_scene_bg", 1, 1, !1);
        var t = Kn.addImageSprite(this.root, 0, -70, "spikes_block", 1, 1, !1);
        Un.spikesBlock = t._compMap.Sprite_0;
        Kn.addImageSprite(this.root, 0, -20, "hud_bg", 1, 1, !1);
        1 == Un.cLevel && (Un.totalScore = 0, Kn.addDelay(this.root, .2, function() {
            Kn.pushScene((new Wn).root)
        }, !1));
        Kn.addDelay(this.root, .8, function() {
            Kn.addButton(e.root, 585, 58, "pause_btn", function() {
                Kn.pushScene((new Vn).root)
            });
            Kn.addButton(e.root, 390, 58, "push_btn", function() {
                e.root._compMap.GameSceneComp_7.addRow()
            });
            Un.spikesBlock.y.animateTo(101, .8, F.linear);
            e.root.add(new zn(Un.scoreTillNextLevel(Un.cLevel + 1), 0))
        }, !1)
    };
    r["scenes.GameScene"] = Un;
    Un.__name__ = ["scenes", "GameScene"];
    Un.scoreTillNextLevel = function(e) {
        return 1e3 * e + 1e3 * e + (30 * e * e - 30 * e)
    };
    Un.prototype = {
        __class__: Un
    };
    var zn = function(e, t) {
        this.levelEnd = !1;
        this.timerC = this.cLevelScore = 0;
        this.scoreTillNextLevel = e;
        this.cLevelScore = t
    };
    r["scenes.GameSceneComp"] = zn;
    zn.__name__ = ["scenes", "GameSceneComp"];
    zn.__super__ = S;
    zn.prototype = e(S.prototype, {
        get_name: function() {
            return "GameSceneComp_7"
        },
        onAdded: function() {
            this.grid = new a(this.owner, 9, 11);
            this.grid.addRandRows(8);
            this.timeTillNextRow = this.caclAddRowTimer();
            Kn.addLabel(this.owner, 48, 54, "" + Un.cLevel, 1, 1, !0, "font3");
            Kn.addImageSprite(this.owner, 90, 30, "bar1_bg", 1, 1, !1);
            this.scoreBarFill = Kn.addImageSprite(this.owner, 90, 30, "bar1_fill", 1, 1, !1)._compMap.Sprite_0;
            this.scoreBarFillRect = new mt(0, 0, 0, this.scoreBarFill.getNaturalHeight());
            this.scoreBarFill.scissor = this.scoreBarFillRect;
            this.scoreLabel = Kn.addLabel(this.owner, 210, 54, "", 1, 1, !0, "font3")._compMap.Sprite_0;
            this.scoreLabel.setAlign(Y.Center);
            this.updateScore(0);
            Kn.addImageSprite(this.owner, 442, 30, "bar2_bg", 1, 1, !1);
            this.pushUpBarFill = Kn.addImageSprite(this.owner, 442, 30, "bar2_fill", 1, 1, !1)._compMap.Sprite_0;
            this.pushUpBarFillRect = new mt(0, 0, 0, this.pushUpBarFill.getNaturalHeight());
            this.pushUpBarFill.scissor = this.pushUpBarFillRect;
            this.pushUpTimer = Kn.addDelay(this.owner, this.timeTillNextRow, n(this, this.addRow), !0);
            this.timer = Kn.addDelay(this.owner, .1, n(this, this.updateTimer), !0);
            this.checkForMatches()
        },
        caclAddRowTimer: function() {
            var e = 9 - (.5 * Un.cLevel | 0);
            2 > e && (e = 2);
            return e
        },
        checkForMatches: function() {
            this.levelEnd || (this.checkNextLevel(), 0 == this.grid.getDeepMatches().length && (this.pushUpTimer.dispose(), this.pushUpTimer = Kn.addDelay(this.owner, this.timeTillNextRow, n(this, this.addRow), !0), this.addRow()))
        },
        addRow: function() {
            this.pushUpBarFillRect.width = this.pushUpBarFill.getNaturalWidth();
            this.pushUpBarFill.scissor = this.pushUpBarFillRect;
            this.timerC = 0;
            this.levelEnd || (this.grid.pushPiecesUp() ? (this.grid.addRandRows(1), 0 == this.grid.getDeepMatches().length && this.addRow()) : this.checkGameOver())
        },
        checkNextLevel: function() {
            var e = this;
            if (this.cLevelScore >= this.scoreTillNextLevel) {
                this.levelEnd = !0;
                f.canMakeAction = !1;
                Un.spikesBlock.y.animateTo(-70, .6, F.linear);
                this.pushUpTimer._compMap.Script_3.stopAll();
                this.timer._compMap.Script_3.stopAll();
                Kn.addDelay(this.owner, 1, function() {
                    e.grid.clear2()
                }, !1);
                Un.cLevel += 1;
                var t = this.cLevelScore - this.scoreTillNextLevel;
                Un.totalScore += this.cLevelScore;
                o.saveHiScore(Un.totalScore);
                // updateShare(Un.cLevel - 1, Un.totalScore);
                // Play68.setRankingLevelScoreDesc(Un.cLevel - 1, Un.totalScore);
                $n.playSfx("level_end_sfx", 1);
                this.showLevelCompleteMsg();
                Kn.addDelay(this.owner, 1.5, function() {
                    Kn.goToScene((new Un(t)).root, (new cn(.6, F.backIn)).left())
                }, !1)
            }
        },
        checkGameOver: function() {
            this.levelEnd = !0;
            f.canMakeAction = !1;
            var e = o.HI_SCORE;
            Un.totalScore += this.cLevelScore;
            o.saveHiScore(Un.totalScore);
            this.pushUpTimer._compMap.Script_3.stopAll();
            this.timer._compMap.Script_3.stopAll();
            // updateShare(Un.cLevel, Un.totalScore);
            // Play68.setRankingLevelScoreDesc(Un.cLevel, Un.totalScore);
            Un.cLevel = 1;
            this.grid.clear();
            Kn.addDelay(this.owner, 2, function() {
                $n.muteSoundtrack();
                $n.playSfx("game_over_sfx", 1);
                Kn.pushScene((new Rn(Un.totalScore, e)).root)
            }, !1)
        },
        updateScore: function(e) {
            this.cLevelScore += e;
            this.cLevelScore > this.scoreTillNextLevel && (this.cLevelScore = this.scoreTillNextLevel);
            this.scoreLabel.set_text(this.cLevelScore + " - " + this.scoreTillNextLevel);
            this.scoreBarFillRect.width = this.cLevelScore / this.scoreTillNextLevel * this.scoreBarFill.getNaturalWidth();
            this.scoreBarFill.scissor = this.scoreBarFillRect
        },
        updateTimer: function() {
            this.timerC += .1;
            this.timerC > this.timeTillNextRow && (this.timerC = this.timeTillNextRow);
            this.pushUpBarFillRect.width = this.timerC / this.timeTillNextRow * this.pushUpBarFill.getNaturalWidth();
            this.pushUpBarFill.scissor = this.pushUpBarFillRect
        },
        showLevelCompleteMsg: function() {
            var e;
            e = Kn.addFillSprite(this.owner, Kn.halfWidth, Kn.halfHeight, 0, Kn.width, 140, 0)._compMap.Sprite_0;
            var t;
            t = Kn.addLabel(this.owner, Kn.halfWidth, Kn.halfHeight, "ZYXV", 1, 0, !0, "font2")._compMap.Sprite_0;
            e.alpha.animateTo(.8, .4, F.quadIn);
            t.alpha.animateTo(1, .4, F.quadIn)
        },
        __class__: zn
    });
    var Wn = function() {
        this.root = (new T).add(new ln(!1));
        Kn.addFillSprite(this.root, Kn.halfWidth, Kn.halfHeight, 0, Kn.width, Kn.height, .5);
        Kn.addImageSprite(this.root, Kn.halfWidth, 380, "help_info", 1, 1);
        Kn.addButton(this.root, Kn.halfWidth, Kn.height - 160, "play_btn2", function() {
            Kn.popScene(new fn(.2))
        })
    };
    r["scenes.HelpScene"] = Wn;
    Wn.__name__ = ["scenes", "HelpScene"];
    Wn.prototype = {
        __class__: Wn
    };
    var Xn = function() {
        this.root = (new T).add(new ln);
        $n.playSoundtrack("soundtrack1", .8);
        Kn.addImageSprite(this.root, Kn.halfWidth, Kn.halfHeight, "game_scene_bg");
        var e;
        e = Kn.addImageSprite(this.root, Kn.halfWidth, Kn.halfHeight - 270, "game_title", 1, 1)._compMap.Sprite_0;
        e.alpha.animateTo(1, 1, F.quadOut);
        e.y.animateTo(Kn.halfHeight - 160, 1, F.bounceOut);
        e = Kn.addLabel(this.root, Kn.halfWidth + 40, Kn.height + 100, "" + o.HI_SCORE, 1.2, 0, !0)._compMap.Sprite_0;
        Kn.addImageSprite(e.owner, -40, 15, "score_icon");
        e.alpha.animateTo(1, 1, F.quadOut);
        e.y.animateTo(Kn.height - 80, 1, F.bounceOut);
        e = Kn.addButton(this.root, Kn.halfWidth, Kn.height - 200, "play_btn2", function() {
            Kn.goToScene((new Un(0)).root)
        }, "", 1, 0)._compMap.Sprite_0;
        e.alpha.animateTo(1, 1, F.quadOut);
        e.y.animateTo(Kn.height - 280, 1, F.bounceOut);
        Kn.addButton(this.root, Kn.width - 80, 90, "sound_on_btn", function() {
            $n.muteAll()
        }, "sound_off_btn", 1, 1)
    };
    r["scenes.MainScene"] = Xn;
    Xn.__name__ = ["scenes", "MainScene"];
    Xn.prototype = {
        __class__: Xn
    };
    var Vn = function() {
        this.root = (new T).add(new ln(!1));
        Kn.addFillSprite(this.root, Kn.halfWidth, Kn.halfHeight, 0, Kn.width, Kn.height, .8);
        Kn.addLabel(this.root, Kn.halfWidth, Kn.halfHeight - 205, "fb", 1.2, 1, !0, "font2");
        Kn.addButton(this.root, Kn.halfWidth, Kn.halfHeight + 5, "play_btn2", function() {
            Kn.popScene(new fn(0))
        });
        Kn.addButton(this.root, Kn.halfWidth - 150, Kn.halfHeight + 200, "home_btn", function() {
            Un.cLevel = 1;
            Kn.goToScene((new Xn).root)
        });
        Kn.addButton(this.root, Kn.halfWidth, Kn.halfHeight + 200, "replay_btn", function() {
            Un.cLevel = 1;
            Kn.goToScene((new Un(0)).root)
        });
        Kn.addButton(this.root, Kn.halfWidth + 150, Kn.halfHeight + 200, "sound_on_btn", function() {
            $n.muteAll()
        }, "sound_off_btn").firstChild._compMap.Sprite_0.set_visible($n.isMuted)
    };
    r["scenes.PauseScene"] = Vn;
    Vn.__name__ = ["scenes", "PauseScene"];
    Vn.prototype = {
        __class__: Vn
    };
    var $n = function() {};
    r["yzi.Sfx"] = $n;
    $n.__name__ = ["yzi", "Sfx"];
    $n.playSfx = function(e, t) {
        null == t && (t = 1);
        return $n.isMuted ? null : Kn.assets.getSound($n.soundsFolder + "/" + e).play(t)
    };
    $n.playSoundtrack = function(e, t) {
        null == t && (t = 1);
        var n = Kn.assets.getSound($n.soundsFolder + "/" + e);
        null != $n.cSoundtrackPlayback ? $n.cSoundtrackPlayback.get_sound() != n && ($n.cSoundtrackVolume = t, $n.cSoundtrackPlayback = n.loop(t)) : ($n.cSoundtrackVolume = t, $n.cSoundtrackPlayback = n.loop(t));
        return $n.cSoundtrackPlayback
    };
    $n.muteSoundtrack = function() {
        null != $n.cSoundtrackPlayback && ($n.cSoundtrackPlayback.volume.animateTo(0, 1), Kn.addDelay(null, .8, function() {
            $n.cSoundtrackPlayback.set_paused(!0)
        }, !1))
    };
    $n.unmuteSoundtrack = function() {
        null != $n.cSoundtrackPlayback && !$n.isMuted && ($n.cSoundtrackPlayback.set_paused(!1), $n.cSoundtrackPlayback.volume.animateTo($n.cSoundtrackVolume, 1))
    };
    $n.muteAll = function() {
        $n.isMuted ? ($n.isMuted = !1, $n.unmuteSoundtrack(), P.volume.animateTo(1, 0)) : ($n.isMuted = !0, $n.muteSoundtrack(), P.volume.animateTo(0, 1))
    };
    var Jn = function() {};
    r["yzi.Tweener"] = Jn;
    Jn.__name__ = ["yzi", "Tweener"];
    Jn.to = function(e, t, n, r, i, s) {
        null == r && (r = 0);
        F;
        var o = new wn;
        0 > r && (r = 0);
        if (0 == t && 0 == r) Jn.apply(e, n, i);
        else {
            if (0 == t && 0 < r) {
                var u = new T;
                0 != r && o.add(new vn(r));
                o.add(new dn(function() {
                    Jn.apply(e, n, i);
                    u.dispose()
                }));
                t = new yn;
                P.root.addChild(u.add(t))
            } else {
                0 < r && o.add(new vn(r));
                for (var r = [], a = 0, f = v.fields(n); a < f.length;) {
                    var l = f[a];
                    ++a;
                    var c = v.getProperty(e, l);
                    r.push(new pn(c, v.field(n, l), t, s))
                }
                s = new mn(r);
                o.add(s);
                var h = new T;
                o.add(new vn(t));
                o.add(new dn(function() {
                    null != i && i();
                    h.dispose()
                }));
                t = new yn;
                P.root.addChild(h.add(t))
            }
            t.run(o)
        }
    };
    Jn.apply = function(e, t, n) {
        for (var r = 0, i = v.fields(t); r < i.length;) {
            var s = i[r];
            ++r;
            var o = v.getProperty(e, s);
            In.__cast(o, D).set__(v.field(t, s))
        }
        null != n && n()
    };
    var Kn = function(e, t) {
        this.init = new Ln;
        var r = this;
        Kn.width = e;
        Kn.height = t;
        Kn.halfWidth = e / 2 | 0;
        Kn.halfHeight = t / 2 | 0;
        Kn.director = (new T).add(new J).add((new sn).setSize(Kn.width, Kn.height));
        P.root.addChild(Kn.director);
        this.systemBg = Kn.initFillSpriteComp(0, 0, Kn.systemBgColor, 0, 0, 1, !1);
        P.root.add(this.systemBg);
        this.leftBorder = Kn.addFillSprite(P.root, 0, 0, Kn.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        this.rightBorder = Kn.addFillSprite(P.root, 0, 0, Kn.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        this.topBorder = Kn.addFillSprite(P.root, 0, 0, Kn.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        this.bottomBorder = Kn.addFillSprite(P.root, 0, 0, Kn.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        P.loadAssetPack(V.fromAssets("boot")).get(function(e) {
            Kn.assets = e;
            e = Kn.addFillSprite(P.root, 0, 0, 1118481, P._platform.getStage().get_width(), P._platform.getStage().get_height(), 1, !1);
            r.rotPhonePrompt = e._compMap.Sprite_0;
            e = Kn.addImageSprite(r.rotPhonePrompt.owner, 0, 0, "rot_phone")._compMap.Sprite_0;
            Kn.defaultOrientation == it.Landscape && e.setRotation(90);
            (Kn.defaultOrientation == P._platform.getStage().orientation._value || null == P._platform.getStage().orientation._value) && r.rotPhonePrompt.set_visible(!1);
            P._platform.getStage().lockOrientation(Kn.defaultOrientation);
            P._platform.getStage().requestFullscreen(!0);
            P._platform.getStage().orientation.get_changed().connect(n(r, r.onOrientationChange));
            P._platform.getStage().resize.connect(n(r, r.onResize));
            r.onResize();
            r.initPreloaderScene()
        })
    };
    r["yzi.YZI"] = Kn;
    Kn.__name__ = ["yzi", "YZI"];
    Kn.onResizeCallback = function() {};
    Kn.onOrientationChangeCallback = function() {};
    Kn.goToScene = function(e, t) {
        null == t && (t = new fn(.5, F.quadOut));
        Kn.director._compMap.Director_5.unwindToScene(e, t)
    };
    Kn.pushScene = function(e, t) {
        null == t && (t = new fn(.5, F.quadOut));
        Kn.director._compMap.Director_5.pushScene(e, t)
    };
    Kn.popScene = function(e) {
        null == e && (e = new fn(.5, F.quadOut));
        Kn.director._compMap.Director_5.popScene(e)
    };
    Kn.saveData = function(e, t) {
        return P._platform.getStorage().set(e, t)
    };
    Kn.loadData = function(e) {
        return P._platform.getStorage().get(e)
    };
    Kn.initFillSpriteComp = function(e, t, n, r, i, s, o) {
        null == o && (o = !0);
        null == s && (s = 1);
        n = new K(n, r, i);
        n.setXY(e, t);
        n.setAlpha(s);
        o && n.centerAnchor();
        return n
    };
    Kn.initImageSpriteComp = function(e, t, n, r, i, s) {
        null == s && (s = !0);
        null == i && (i = 1);
        null == r && (r = 1);
        n = new rt(Kn.assets.getTexture(n));
        n.setXY(e, t);
        n.setScale(r);
        n.setAlpha(i);
        s && n.centerAnchor();
        return n
    };
    Kn.initTextSpriteComp = function(e, t, n, r, i, s, o) {
        null == o && (o = "");
        null == s && (s = !1);
        null == i && (i = 1);
        null == r && (r = 1);
        null == n && (n = "Label");
        "" == o && (o = Kn.defaultFont);
        n = new ut(new G(Kn.assets, o), n);
        n.setXY(e, t);
        n.setScale(r);
        n.setAlpha(i);
        s && n.centerAnchor();
        return n
    };
    Kn.addFillSprite = function(e, t, n, r, i, s, o, u) {
        null == u && (u = !0);
        null == o && (o = 1);
        var a = new T;
        a.add(new x);
        a.add(Kn.initFillSpriteComp(t, n, r, i, s, o, u));
        null != e && e.addChild(a);
        return a
    };
    Kn.addImageSprite = function(e, t, n, r, i, s, o) {
        null == o && (o = !0);
        null == s && (s = 1);
        null == i && (i = 1);
        var u = new T;
        u.add(new x);
        u.add(Kn.initImageSpriteComp(t, n, r, i, s, o));
        null != e && e.addChild(u);
        return u
    };
    Kn.addLabel = function(e, t, n, r, i, s, o, u) {
        null == u && (u = "");
        null == o && (o = !1);
        null == s && (s = 1);
        null == i && (i = 1);
        null == r && (r = "Label");
        var a = new T;
        a.add(new x);
        a.add(Kn.initTextSpriteComp(t, n, r, i, s, o, u));
        null != e && e.addChild(a);
        return a
    };
    Kn.addButton = function(e, t, n, r, i, s, o, u) {
        null == u && (u = 1);
        null == o && (o = 1);
        null == s && (s = "");
        var a = Kn.addImageSprite(e, t, n, r, o, u, !0);
        a.add(new yn);
        "" != s && (Kn.addImageSprite(a, 0, 0, s, 1, 1, !1), a.firstChild._compMap.Sprite_0.set_visible(!1));
        var f = new wn;
        f.add(new dn(function() {
            a._compMap.Sprite_0.scaleX.animateTo(1.15, .2, F.backOut);
            a._compMap.Sprite_0.scaleY.animateTo(1.15, .2, F.backOut)
        }));
        f.add(new vn(.2));
        f.add(new dn(function() {
            a._compMap.Sprite_0.scaleX.animateTo(1, .1, F.quadIn);
            a._compMap.Sprite_0.scaleY.animateTo(1, .1, F.quadIn)
        }));
        a._compMap.Disposer_2.connect1(a._compMap.Sprite_0.get_pointerDown(), function() {
            a._compMap.Script_3.run(f)
        });
        a._compMap.Disposer_2.connect1(a._compMap.Sprite_0.get_pointerUp(), function() {
            "" != s && (0 == (a.firstChild._compMap.Sprite_0._flags & 1) ? a.firstChild._compMap.Sprite_0.set_visible(!0) : a.firstChild._compMap.Sprite_0.set_visible(!1));
            "" != Kn.buttonClickSfx && $n.playSfx(Kn.buttonClickSfx, .4);
            null != i && i()
        });
        return a
    };
    Kn.addDelay = function(e, t, n, r) {
        var i = new T,
            s = new wn;
        s.add(new vn(t));
        s.add(new dn(function() {
            null != n && n();
            r || i.dispose()
        }));
        t = new yn;
        i.add(new x);
        i.add(t);
        null != e && e.addChild(i);
        r ? t.run(new gn(s)) : t.run(s);
        return i
    };
    Kn.rand = function(e) {
        return m.random(e)
    };
    Kn.randSign = function() {
        var e = 1;
        0 == m.random(2) && (e = -1);
        return e
    };
    Kn.prototype = {
        onResize: function() {
            var e = P._platform.getStage().get_width(),
                t = P._platform.getStage().get_height(),
                n = Math.min(e / Kn.width, t / Kn.height);
            Kn.director._compMap.Sprite_0.setXY(.5 * e - .5 * n * Kn.width, .5 * t - .5 * n * Kn.height);
            Kn.director._compMap.Sprite_0.setScale(n);
            var r = Kn.director._compMap.Sprite_0.x._value,
                i = Kn.director._compMap.Sprite_0.y._value;
            this.systemBg.setXY(0, 0);
            this.systemBg.setSize(e, t);
            this.leftBorder.setXY(0, i);
            this.leftBorder.setSize(r, t - 2 * i);
            this.rightBorder.setXY(e - r, i);
            this.rightBorder.setSize(r, t - 2 * i);
            this.topBorder.setXY(0, 0);
            this.topBorder.setSize(e, i);
            this.bottomBorder.setXY(0, t - i);
            this.bottomBorder.setSize(e, i);
            Kn.onResizeCallback();
            this.rotPhonePrompt.setXY(0, 0);
            this.rotPhonePrompt.setSize(P._platform.getStage().get_width(), P._platform.getStage().get_height());
            this.rotPhonePrompt.owner.firstChild._compMap.Sprite_0.setXY(this.rotPhonePrompt.width._value / 2, this.rotPhonePrompt.height._value / 2);
            this.rotPhonePrompt.owner.firstChild._compMap.Sprite_0.setScale(n)
        },
        onOrientationChange: function(e) {
            Kn.onOrientationChangeCallback();
            Kn.defaultOrientation != e ? this.rotPhonePrompt.set_visible(!0) : this.rotPhonePrompt.set_visible(!1)
        },
        initPreloaderScene: function() {
            var e = this,
                t = Kn.width - 150,
                n = (new T).add(new ln),
                r = Kn.addFillSprite(n, 0, 0, 1118481, Kn.width, Kn.height, 1, !1),
                i = Kn.addFillSprite(r, Kn.halfWidth, Kn.halfHeight, 16777215, t, 50),
                s = Kn.addFillSprite(i, 4, 4, 1118481, 0, 42, 1, !1),
                o = P.loadAssetPack(V.fromAssets("main"));
            o.get(function(t) {
                Kn.assets = t;
                Kn.settings = Cn.parse(t.getFile("settings.ini").toString());
                n.removeChild(i);
                e.init.emit()
            });
            o.progressChanged.connect(function() {
                var e = o._progress / o._total;
                1 < e && (e = 1);
                s._compMap.Sprite_0.width.set__(e * (t - 8))
            });
            Kn.goToScene(n)
        },
        __class__: Kn
    };
    var Qn = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    r.Math = Math;
    Math.isFinite = function(e) {
        return isFinite(e)
    };
    Math.isNaN = function(e) {
        return isNaN(e)
    };
    String.prototype.__class__ = r.String = String;
    String.__name__ = ["String"];
    r.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = r.Date = Date;
    Date.__name__ = ["Date"];
    var Gn = r.Int = {
            __name__: ["Int"]
        },
        Yn = r.Dynamic = {
            __name__: ["Dynamic"]
        },
        Zn = r.Float = Number;
    Zn.__name__ = ["Float"];
    var er = r.Bool = Boolean;
    er.__ename__ = ["Bool"];
    var tr = r.Class = {
            __name__: ["Class"]
        },
        nr = {};
    o.HI_SCORE = 0;
    a.dirs = [new u(0, -1), new u(0, 1), new u(1, 0), new u(-1, 0)];
    a.pieceWidth = 70;
    a.pieceHeight = 70;
    a.gap = 0;
    a.offsetX = 0;
    a.offsetY = 220;
    a.pieceTypes = 5;
    a.minMatchForBonus = 6;
    f.canMakeAction = !0;
    k.instance = new k;
    O.DISPATCHING_SENTINEL = new A(null, null);
    P.root = new T;
    P.uncaughtError = new _;
    P.hidden = new L(!1);
    P.volume = new D(1);
    P._platform = k.instance;
    P._calledInit = !1;
    V.__meta__ = {
        obj: {
            assets: [{
                main: [{
                    bytes: 4502,
                    md5: "1a07e1b8bd85ac57302a7f6943252f1b",
                    name: "bar1_bg.png"
                }, {
                    bytes: 3900,
                    md5: "d158ec68f183f19e1a667d33cb2a5e99",
                    name: "bar1_fill.png"
                }, {
                    bytes: 4282,
                    md5: "b2a3b7fa65a9f33964e3a1753bcbd7f2",
                    name: "bar2_bg.png"
                }, {
                    bytes: 3665,
                    md5: "db7b4625dc8c124172a30d7248914017",
                    name: "bar2_fill.png"
                }, {
                    bytes: 10470,
                    md5: "6d8e31007cf845b7a413458015586e7b",
                    name: "bl0.png"
                }, {
                    bytes: 10144,
                    md5: "dacb277a99d15cdbcc356e3d00b1af3e",
                    name: "bl1.png"
                }, {
                    bytes: 10448,
                    md5: "c49f2cdd7fd13f28990d61df73f7f1c7",
                    name: "bl2.png"
                }, {
                    bytes: 9871,
                    md5: "70689a46fd2a9a7228fbb4a174bb245a",
                    name: "bl3.png"
                }, {
                    bytes: 9981,
                    md5: "7466a42e9c2d50611cf78d22c0d55378",
                    name: "bl4.png"
                }, {
                    bytes: 9360,
                    md5: "87eb9e9ae2bf7c4bae9c5a70d3623d7c",
                    name: "bl5.png"
                }, {
                    bytes: 9330,
                    md5: "9ebc4e7a4ae6c923fb2dd5277fec55c6",
                    name: "bl6.png"
                }, {
                    bytes: 9248,
                    md5: "598433035f5fcbf72949d9b27e2f69b6",
                    name: "bl7.png"
                }, {
                    bytes: 9237,
                    md5: "23de6d2dc69da478422a56bb4d166752",
                    name: "bl8.png"
                }, {
                    bytes: 9129,
                    md5: "97bb837096b10a28cda9ab5f3adafe50",
                    name: "bl9.png"
                }, {
                    bytes: 4492,
                    md5: "1dbd656bdfcd2bdb665d2c0daf8b46e0",
                    name: "bonus_marker.png"
                }, {
                    bytes: 2797,
                    md5: "60a6a8d9c1630acfc695f5eea0664bce",
                    name: "default_font1.fnt"
                }, {
                    bytes: 8254,
                    md5: "7f35e4863f2abe5207e4625449183cf0",
                    name: "default_font1.png"
                }, {
                    bytes: 8620,
                    md5: "dcbd02ae6f63af09d6a7fe617d66c2fe",
                    name: "font2.fnt"
                }, {
                    bytes: 52839,
                    md5: "508510075cfdc25011c449c5a3dce79e",
                    name: "font2.png"
                }, {
                    bytes: 2789,
                    md5: "695a163add424d6b95932d8ecfe822e2",
                    name: "font3.fnt"
                }, {
                    bytes: 7569,
                    md5: "3715a569408118acc6456f1b26f48d07",
                    name: "font3.png"
                }, {
                    bytes: 215286,
                    md5: "ae4bf05b601d87257526ff0ade180af9",
                    name: "game_scene_bg.png"
                }, {
                    bytes: 80614,
                    md5: "95bf85cd975bf0ab4c1f184a82a05e00",
                    name: "game_title.png"
                }, {
                    bytes: 124840,
                    md5: "e57a33a0b70b5e9a7c8fdc41cac906b1",
                    name: "help_info.png"
                }, {
                    bytes: 12048,
                    md5: "f25d83ad9fa23ebd909eb1f390e1f5c4",
                    name: "home_btn.png"
                }, {
                    bytes: 3768,
                    md5: "935abfbea4723840a3e86879a7a377bd",
                    name: "hud_bg.png"
                }, {
                    bytes: 9386,
                    md5: "9c9bea8879710a27ec2ed7dc676c7aba",
                    name: "pause_btn.png"
                }, {
                    bytes: 17551,
                    md5: "6a40697b164d720c573667f9ccac9d87",
                    name: "play_btn.png"
                }, {
                    bytes: 19888,
                    md5: "581e716809709e6247b69ad9d3b0ecb5",
                    name: "play_btn2.png"
                }, {
                    bytes: 9260,
                    md5: "e87c61b2acc5abafa79bfb9529672a71",
                    name: "push_btn.png"
                }, {
                    bytes: 11724,
                    md5: "9558da2f1295b321c8b9b0bb846f6ade",
                    name: "replay_btn.png"
                }, {
                    bytes: 8170,
                    md5: "11d79da76c6e9f6d0d4d305f7d111062",
                    name: "score_icon.png"
                }, {
                    bytes: 12,
                    md5: "dc8056702323802c70172d6227ecff26",
                    name: "settings.ini"
                }, {
                    bytes: 12139,
                    md5: "8f2205d16e919e14420292efeed78868",
                    name: "sound_off_btn.png"
                }, {
                    bytes: 12222,
                    md5: "e8d46c16b669fc7ba6ecfa7cecc37778",
                    name: "sound_on_btn.png"
                }, {
                    bytes: 11319,
                    md5: "101279fccc260cb7badc168e2c1d50b3",
                    name: "sounds/bonus_sfx.mp3"
                }, {
                    bytes: 15705,
                    md5: "492f3aafc9acc2b8c3b5bad8e2f17747",
                    name: "sounds/button_click_sfx.mp3"
                }, {
                    bytes: 57710,
                    md5: "0f9d57525bd6973c3b40a133ebd1dd12",
                    name: "sounds/game_over_sfx.mp3"
                }, {
                    bytes: 74010,
                    md5: "a8a348dd23303bf14ad040ce7e9b0856",
                    name: "sounds/level_end_sfx.mp3"
                }, {
                    bytes: 8182,
                    md5: "0a371ce975a643d632f309a20a0eb90f",
                    name: "sounds/no_match_sfx.mp3"
                }, {
                    bytes: 16332,
                    md5: "37f74f6a6c5a74b34213e1880f5c1477",
                    name: "sounds/pop_sfx.mp3"
                }, {
                    bytes: 385324,
                    md5: "4ebc4263412e80d7ff60ed3ac82e01a2",
                    name: "sounds/soundtrack1.mp3"
                }, {
                    bytes: 49489,
                    md5: "662133e46b53ed6e96a34a220051dfa5",
                    name: "spikes_block.png"
                }],
                boot: [{
                    bytes: 12539,
                    md5: "8ff68b1f9e1dc38d7cb46c0defb7539e",
                    name: "rot_phone.png"
                }]
            }]
        }
    };
    V._supportsCrossOrigin = function() {
        var e;
        e = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        e || null;
        return e
    }();
    J._scratchPoint = new u;
    G.NEWLINE = new Q(10);
    
    St._sharedEvent = new lt;
    Tt._sharedEvent = new ht;
    Xt.CANVAS_TEXTURES = (new s("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    Jt._mediaRefCount = 0;
    Jt._detectBlobSupport = !0;
    tn.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    tn.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new s("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    nn._detectSupport = !0;
    Mn.USE_CACHE = !1;
    Mn.USE_ENUM_INDEX = !1;
    Mn.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    _n.DEFAULT_RESOLVER = w;
    _n.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Pn.count = 0;
    Un.cLevel = 1;
    $n.soundsFolder = "sounds";
    $n.isMuted = !1;
    Kn.defaultOrientation = it.Portrait;
    Kn.defaultFont = "default_font1";
    Kn.systemBgColor = 0;
    Kn.buttonClickSfx = "";
    p.main()
})()