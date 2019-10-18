var btGame;

var btGame;
~function (bt) {
    function popupBox(b, c) {
        this.elemId = b;
        this.hideClass = c || "\x62\x74\x2d\x68\x69\x64\x65"
    };
    popupBox.prototype = {beforeShow: function () {
    }, show: function () {
        this.beforeShow();
        var b = this;
        setTimeout(function () {
            $("\x23" + b.elemId).removeClass(b.hideClass)
        }, 0x1)
    }, hide: function () {
        $("\x23" + this.elemId).addClass(this.hideClass)
    }};
    bt.popupBox = popupBox
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    bt.proxy = function (b, c) {
        return function () {
            b.apply(c, arguments)
        }
    }
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    bt.arCo = function (b) {
        return[].slice.call($(b).map(function (c, d) {
            return String.fromCharCode(d)
        }), 0x0).join("")
    };
    $(function () {
        bt.__gameId = $("\x23\x62\x74\x2d\x67\x61\x6d\x65\x2d\x69\x64");
        bt.__arCo = bt.__gameId.length > 0x0 ? bt.__gameId.val() : "";
        var b = [];
        for (var c = 0x0; c < bt.__arCo.length; c++) {
            b[c] = bt.__arCo[c].charCodeAt(0x0)
        }
        ;
        bt.__arCo = b
    });
    var publisher = function (b) {
        this.__publisher__ = b
    };
    publisher.prototype = {on: function (b, c) {
        this.__publisher__.on(b, bt.proxy(c, this))
    }, fire: function (b) {
        this.__publisher__.trigger(b, [].slice.call(arguments, 0x1))
    }, off: function (b, c) {
        if (c) {
            this.__publisher__.off(b, bt.proxy(c, this))
        } else {
            this.__publisher__.off(b)
        }
    }};
    bt.makePublisher = function (b) {
        var c = typeof b;
        var d = new publisher($("\x3c\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e"));
        if (c == "\x66\x75\x6e\x63\x74\x69\x6f\x6e") {
            b.prototype.__publisher__ = d.__publisher__;
            $.extend(b.prototype, publisher.prototype)
        } else if (c == "\x6f\x62\x6a\x65\x63\x74") {
            b.__publisher__ = d.__publisher__;
            $.extend(b, publisher.prototype)
        }
    }
}(btGame || (btGame = {}));

var btGame;
~function (bt) {
    var b;

    function getB() {
        if (!b) {
            b = document.body || document.getElementsByTagName("\x62\x6f\x64\x79")[0x0]
        }
        ;
        return b
    };
    bt.getDomBody = getB;
    function craeteDiv() {
        return document.createElement("\x64\x69\x76")
    };
    bt.getNewDiv = craeteDiv
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    var b = "\x62\x74\x2d\x6c\x6f\x63\x6b\x2d\x73\x63\x72\x65\x65\x6e";
    var createLock = function (c) {
        var d = bt.getNewDiv();
        d.id = c;
        var e = bt.getDomBody();
        e.appendChild(d);
        return $(d)
    };
    var lock = function (c) {
        bt.popupBox.call(this, c || b)
    };
    lock.__super__ = bt.popupBox;
    lock.prototype = $.extend({}, bt.popupBox.prototype, {beforeShow: function () {
        var c = this.getElem();
        if (c.size() <= 0x0) {
            c = createLock(this.elemId);
            c.addClass("\x62\x74\x2d\x6c\x6f\x63\x6b\x2d\x73\x63\x72\x65\x65\x6e\x20\x62\x74\x2d\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x20\x62\x74\x2d\x68\x69\x64\x65")
        }
    }, remove: function () {
        var c = this.getElem();
        if (c.size() > 0x0) {
            c.addClass("\x62\x74\x2d\x68\x69\x64\x65");
            setTimeout(function () {
                c.remove()
            }, 0xc8)
        }
    }, getElem: function () {
        return $("\x23" + this.elemId)
    }});
    bt.lockScreen = function (c) {
        return new lock(c)
    }
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    var b = {id: "\x62\x74\x2d\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74", html: "\u5e7f\u544a", time: 0x5dc};
    var flash = function (c) {
        var d = $.extend({}, b, c || {});
        var e = $("\x23" + d.id);
        var f = new bt.lockScreen(d.lockId);
        if (e.size() <= 0x0) {
            var h = $(bt.getNewDiv()).attr({id: d.id}).addClass(d.id);
            var i = d.html;
            h.html(i);
            bt.getDomBody().appendChild(h[0x0]);
            e = h
        }
        ;
        this.event = d.id + "\x5f\x74\x69\x6d\x65\x75\x70";
        var g = this;
        if (d.time > 0x0) {
            var h = this.event;
            this.off(h);
            e.data("\x74\x69\x6d\x65\x72", setTimeout(function () {
                e.remove(), f.hide();
                g.fire(h);
                d = null;
                this.elem = this.lock = g.show = g.hide = null
            }, d.time <= 0x0 ? 0x5dc : d.time))
        }
        ;
        this.elem = e;
        this.lock = f;
        this.show = function (h) {
            h && this.elem.html(h);
            this.elem.removeClass("\x62\x74\x2d\x68\x69\x64\x65");
            this.lock.show()
        };
        this.hide = function () {
            this.elem.addClass("\x62\x74\x2d\x68\x69\x64\x65");
            this.lock.hide()
        };
        this.remove = function () {
            this.lock.remove();
            this.elem.remove()
        }
    };
    bt.makePublisher(flash);
    bt.advertisement = function (c) {
        return new flash(c)
    }
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    var b = null;
    var c = null;
    var loading = function (d, e) {
        if (d > 0x0 && !b) {
            b = $(btGame.getNewDiv());
            b.addClass("\x62\x74\x2d\x67\x61\x6d\x65\x2d\x6c\x6f\x61\x64\x69\x6e\x67");
            b.html('\x3c\x74\x61\x62\x6c\x65\x3e\x3c\x74\x72\x3e\x3c\x74\x64\x3e\x3c\x69\x6d\x67\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x74\x2d\x69\x6d\x67\x22\x20\x73\x72\x63\x3d\x22' + bt.URL.root + '\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x70\x72\x65\x6c\x6f\x61\x64\x49\x6d\x61\x67\x65\x2e\x70\x6e\x67\x22\x20\x2f\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x74\x2d\x74\x65\x78\x74\x22\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x74\x64\x3e\x3c\x2f\x74\x72\x3e\x3c\x2f\x74\x61\x62\x6c\x65\x3e');
            bt.getDomBody().appendChild(b[0x0]);
            c = b.find("\x2e\x62\x74\x2d\x74\x65\x78\x74")
        }
        ;
        if (b) {
            if (e) {
                c.html(e)
            } else {
                var f = Math.round(d * 0x64);
                c.html("\u52a0\u8f7d\u8fdb\u5ea6\x3a" + f + "\x25")
            }
        }
        ;
        if (d >= 0x1) {
            b && b.remove();
            b = null
        }
    };
    bt.gameLoading = loading
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    function rate(b, c) {
        var d = window.innerWidth, e = window.innerHeight;
        var f;
        if (b <= d && c <= e) {
        } else if (b > d && c > e) {
            var i = d / b, j = e / c;
            if (i <= j) {
                f = b;
                b = d;
                c = c * b / f
            } else {
                f = c;
                c = e;
                b = b * c / f
            }
        } else if (b > d) {
            f = b;
            b = d;
            c = c * d / f
        } else if (c > e) {
            f = c;
            c = e;
            b = b * e / f
        } else {
        }
        ;
        var g = (e - c) / 0x2, h = (d - b) / 0x2;
        return{width: b, height: c, top: g, left: h}
    };
    function resize(b, c, d, e, f) {
        var g = rate(c, d);
        b.css({width: g.width, height: g.height,
            top: e == "\x63\x65\x6e\x74\x65\x72" ? g.top : e == "\x6c\x65\x66\x74" ? 0x0 : e,
            left: f == "\x63\x65\x6e\x74\x65\x72" ? g.left : f == "\x6c\x65\x66\x74" ? 0x0 : f});
        switch (e) {
            case"\x74\x6f\x70":
                b.css({top: 0x0});
                break;
            case"\x63\x65\x6e\x74\x65\x72":
                b.css({top: g.top});
                break;
            case"\x62\x6f\x74\x74\x6f\x6d":
                b.css({bottom: 0x0});
                break;
            default:
                b.css({top: e})
        }
        ;
        switch (f) {
            case"\x6c\x65\x66\x74":
                b.css({left: 0x0});
                break;
            case"\x63\x65\x6e\x74\x65\x72":
                b.css({left: g.left});
                break;
            case"\x72\x69\x67\x68\x74":
                b.css({right: 0x0});
                break;
            default:
                b.css({left: f})
        }
        ;
        b.trigger("\x72\x65\x73\x69\x7a\x65\x50\x6c\x61\x79\x41\x72\x65\x61", [g])
    };
    function bindResize(b, c, d, e, f) {
        bt.checkHScreen(function () {
            setTimeout(function () {
                resize(b, c, d, e, f)
            }, 0x1f4)
        })
    };
    bt.resizePlayArea = bindResize
}(btGame || (btGame = {}));

var btGame;
~function (bt) {
    var screenResize = function (b) {
        b && b(window.innerWidth > window.innerHeight)
    };

    function check(b, c) {
        if (!c) {
            window.addEventListener("\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x63\x68\x61\x6e\x67\x65", function () {
                screenResize(b)
            });
            window.addEventListener("\x72\x65\x73\x69\x7a\x65", function () {
                screenResize(b)
            })
        }
        ;
        screenResize(b)
    };
    bt.checkHScreen = check
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    var onlyH = function (b, c) {
        this.myCallback = c;
        this.tipsCount = 0x0;
        bt.checkHScreen(bt.proxy(this.callback, this), false);
        if (b) {
            this.once = b
        }
    };
    onlyH.prototype = {hscreen: function () {
        this.buildScreen();
        if (this.once && this.tipsCount <= 0x0) {
            this.screen && this.screen.show()
        } else if (!this.once) {
            this.screen && this.screen.show()
        }
        ;
        this.tipsCount++
    }, vscreen: function () {
        this.screen && this.screen.hide();
        this.myCallback && this.myCallback(this.tipsCount)
    }, getScreenOption: function () {
        return{id: "\x62\x74\x2d\x68\x2d\x73\x63\x72\x72\x65\x6e", html: "\x3c\x74\x61\x62\x6c\x65\x3e\x3c\x74\x72\x3e\x3c\x74\x64\x3e\x3c\x69\x6d\x67\x20\x63\x6c\x61\x73\x73\x3d\x27\x62\x74\x2d\x68\x2d\x73\x63\x72\x65\x65\x6e\x2d\x69\x6d\x67\x27\x20\x73\x72\x63\x3d\x27" + bt.URL.root + "\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x62\x74\x2d\x70\x6c\x61\x79\x2d\x68\x2d\x73\x63\x72\x65\x65\x6e\x2e\x70\x6e\x67\x27\x20\x2f\x3e\x3c\x2f\x74\x64\x3e\x3c\x2f\x74\x72\x3e\x3c\x2f\x74\x61\x62\x6c\x65\x3e", time: 0x0, lockId: '\x62\x74\x2d\x68\x69\x64\x65\x2d\x6c\x6f\x63\x6b'}
    }, buildScreen: function () {
        !this.screen && (this.screen = btGame.advertisement(this.getScreenOption()))
    }, callback: function (b) {
        b ? this.vscreen() : this.hscreen()
    }};
    var onlyV = function (b, c) {
//        onlyH.call(this, b, c)
    };
    onlyV.__super__ = onlyH;
    onlyV.prototype = $.extend({}, onlyH.prototype, {hscreen: function () {
        onlyH.prototype.vscreen.call(this)
    }, vscreen: function () {
        onlyH.prototype.hscreen.call(this)
    }, getScreenOption: function () {
        return{id: "\x62\x74\x2d\x76\x2d\x73\x63\x72\x72\x65\x6e", html: "\x3c\x74\x61\x62\x6c\x65\x3e\x3c\x74\x72\x3e\x3c\x74\x64\x3e\x3c\x69\x6d\x67\x20\x63\x6c\x61\x73\x73\x3d\x27\x62\x74\x2d\x76\x2d\x73\x63\x72\x65\x65\x6e\x2d\x69\x6d\x67\x27\x20\x73\x72\x63\x3d\x27" + bt.URL.root + "\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x62\x74\x2d\x70\x6c\x61\x79\x2d\x76\x2d\x73\x63\x72\x65\x65\x6e\x2e\x70\x6e\x67\x27\x20\x2f\x3e\x3c\x2f\x74\x64\x3e\x3c\x2f\x74\x72\x3e\x3c\x2f\x74\x61\x62\x6c\x65\x3e", time: 0x0, lockId: '\x62\x74\x2d\x68\x69\x64\x65\x2d\x6c\x6f\x63\x6b'}
    }});
    bt.onlyHScreen = function (b, c) {
        return new onlyH(b, c)
    };
    bt.onlyVScreen = function (b, c) {
        return new onlyV(b, c)
    }
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    var b = "\x62\x74\x2d\x70\x6c\x61\x79\x2d\x6c\x6f\x67\x6f\x2d\x61\x64\x76";

    function ad(c) {
    };
    bt.playLogoAdv = ad
}(btGame || (bgGame = {}));
var btGame;
~function (bt) {
    var b = "\x62\x74\x2d\x70\x6c\x61\x79\x2d\x73\x68\x61\x72\x65\x2d\x74\x69\x70";

    function tip() {
        var c = bt.advertisement({id: b, html: "\x3c\x69\x6d\x67\x20\x63\x6c\x61\x73\x73\x3d\x27\x62\x74\x2d\x70\x6c\x61\x79\x2d\x73\x68\x61\x72\x65\x2d\x74\x69\x70\x2d\x69\x6d\x67\x27\x20\x73\x72\x63\x3d\x27" + bt.URL.root + "\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x62\x74\x2d\x70\x6c\x61\x79\x2d\x73\x68\x61\x72\x65\x2d\x74\x69\x70\x2e\x70\x6e\x67\x27\x20\x2f\x3e", time: 0x0});
        c.show();
        setTimeout(function () {
            c.elem.on("\x63\x6c\x69\x63\x6b\x20\x74\x6f\x75\x63\x68\x73\x74\x61\x72\x74", function () {
                c.remove();
                c = null;
                return false
            })
        }, 0x1f4);
        bt.dc("\x73\x68\x61\x72\x65")
    };
    bt.playShareTip = tip
}(btGame || (btGame = {}));
var btGame;
~function (bt) {
    function msg(b) {
        if (confirm(b)) {
            bt.playShareTip()
        }
    };
    bt.playScoreMsg = msg
}(btGame || (btGame = {}));
