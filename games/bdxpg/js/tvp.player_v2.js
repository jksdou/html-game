! function(global) {
    ! function(a) {
        String.prototype.trim === a && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
            if (void 0 === this || null === this) throw new TypeError;
            var c, d = Object(this),
                e = d.length >>> 0,
                f = 0;
            if ("function" != typeof b) throw new TypeError;
            if (0 == e && 1 == arguments.length) throw new TypeError;
            if (arguments.length >= 2) c = arguments[1];
            else
                for (;;) {
                    if (f in d) {
                        c = d[f++];
                        break
                    }
                    if (++f >= e) throw new TypeError
                }
            for (; e > f;) f in d && (c = b.call(a, c, d[f], f, d)), f++;
            return c
        }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this) throw new TypeError("this is null or not defined");
            var e = Object(this),
                f = e.length >>> 0;
            if ("[object Function]" !== {}.toString.call(a)) throw new TypeError(a + " is not a function");
            for (b && (c = b), d = 0; f > d;) {
                var g;
                Object.prototype.hasOwnProperty.call(e, d) && (g = e[d], a.call(c, g, d, e)), d++
            }
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            var b = this.length >>> 0,
                c = Number(arguments[1]) || 0;
            for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++)
                if (c in this && this[c] === a) return c;
            return -1
        })
    }();
    var Zepto = function() {
        function a(a) {
            return null == a ? String(a) : W[X.call(a)] || "object"
        }

        function b(b) {
            return "function" == a(b)
        }

        function c(a) {
            return null != a && a == a.window
        }

        function d(a) {
            return null != a && a.nodeType == a.DOCUMENT_NODE
        }

        function e(b) {
            return "object" == a(b)
        }

        function f(a) {
            if (!a || "[object Object]" !== a.toString() || a.nodeType || a.setInterval) return !1;
            if (a.constructor && !a.hasOwnProperty("constructor") && !a.constructor.prototype.hasOwnProperty("isPrototypeOf")) return !1;
            var b;
            for (b in a);
            return b === w || a.hasOwnProperty(b)
        }

        function g(a) {
            return a instanceof Array
        }

        function h(a) {
            return "number" == typeof a.length
        }

        function i(a) {
            return E.call(a, function(a) {
                return null != a
            })
        }

        function j(a) {
            return a.length > 0 ? y.fn.concat.apply([], a) : a
        }

        function k(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function l(a) {
            return a in H ? H[a] : H[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
        }

        function m(a, b) {
            return "number" != typeof b || J[k(a)] ? b : b + "px"
        }

        function n(a) {
            var b, c;
            return G[a] || (b = F.createElement(a), F.body.appendChild(b), c = I(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), G[a] = c), G[a]
        }

        function o(a) {
            return "children" in a ? D.call(a.children) : y.map(a.childNodes, function(a) {
                return 1 == a.nodeType ? a : void 0
            })
        }

        function p(a, b, c) {
            for (x in b) c && (f(b[x]) || g(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}), g(b[x]) && !g(a[x]) && (a[x] = []), p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
        }

        function q(a, b) {
            return b === w ? y(a) : y(a).filter(b)
        }

        function r(a, c, d, e) {
            return b(c) ? c.call(a, d, e) : c
        }

        function s(a, b, c) {
            null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
        }

        function t(a, b) {
            var c = a.className,
                d = c && c.baseVal !== w;
            return b === w ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
        }

        function u(a) {
            var b;
            try {
                return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? y.parseJSON(a) : a : b) : a
            } catch (c) {
                return a
            }
        }

        function v(a, b) {
            b(a);
            for (var c in a.childNodes) v(a.childNodes[c], b)
        }
        var w, x, y, z, A, B, C = [],
            D = C.slice,
            E = C.filter,
            F = window.document,
            G = {},
            H = {},
            I = F.defaultView ? F.defaultView.getComputedStyle : F.documentElement.currentStyle,
            J = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            K = /^\s*<(\w+|!)[^>]*>/,
            L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            M = /^(?:body|html)$/i,
            N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            O = ["after", "prepend", "before", "append"],
            P = F.createElement("table"),
            Q = F.createElement("tr"),
            R = {
                tr: F.createElement("tbody"),
                tbody: P,
                thead: P,
                tfoot: P,
                td: Q,
                th: Q,
                "*": F.createElement("div")
            },
            S = /complete|loaded|interactive/,
            T = /^\.([\w-]+)$/,
            U = /^#([\w-]*)$/,
            V = /^[\w-]+$/,
            W = {},
            X = W.toString,
            Y = {},
            Z = F.createElement("div");
        return Y.matches = function(a, b) {
            if (!a || 1 !== a.nodeType) return !1;
            var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
            if (c) return c.call(a, b);
            var d, e = a.parentNode,
                f = !e;
            return f && (e = Z).appendChild(a), d = ~Y.qsa(e, b).indexOf(a), f && Z.removeChild(a), d
        }, A = function(a) {
            return a.replace(/-+(.)?/g, function(a, b) {
                return b ? b.toUpperCase() : ""
            })
        }, B = function(a) {
            return E.call(a, function(b, c) {
                return a.indexOf(b) == c
            })
        }, Y.fragment = function(a, b, c) {
            a.replace && (a = a.replace(L, "<$1></$2>")), b === w && (b = K.test(a) && RegExp.$1), b in R || (b = "*");
            var d, e, g = R[b];
            return g.innerHTML = "" + a, e = y.each(D.call(g.childNodes), function() {
                g.removeChild(this)
            }), f(c) && (d = y(e), y.each(c, function(a, b) {
                N.indexOf(a) > -1 ? d[a](b) : d.attr(a, b)
            })), e
        }, Y.Z = function(a, b) {
            return a = a || [], a.__proto__ = y.fn, a.selector = b || "", a
        }, Y.isZ = function(a) {
            return a instanceof Y.Z
        }, Y.init = function(a, c) {
            if (a) {
                if (b(a)) return y(F).ready(a);
                if (Y.isZ(a)) return a;
                var d;
                if (g(a)) d = i(a);
                else if (e(a)) d = [f(a) ? y.extend({}, a) : a], a = null;
                else if (K.test(a)) d = Y.fragment(a.trim(), RegExp.$1, c), a = null;
                else {
                    if (c !== w) return y(c).find(a);
                    d = Y.qsa(F, a)
                }
                return Y.Z(d, a)
            }
            return Y.Z()
        }, y = function(a, b) {
            return Y.init(a, b)
        }, y._tvp = !0, y.extend = function(a) {
            var b, c = D.call(arguments, 1);
            return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
                p(a, c, b)
            }), a
        }, Y.qsa = function(a, b) {
            var c;
            return d(a) && U.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : D.call(T.test(b) ? a.getElementsByClassName(RegExp.$1) : V.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
        }, y.contains = function(a, b) {
            return a !== b && a.contains(b)
        }, y.type = a, y.isFunction = b, y.isWindow = c, y.isArray = g, y.isPlainObject = f, y.isEmptyObject = function(a) {
            var b;
            for (b in a) return !1;
            return !0
        }, y.inArray = function(a, b, c) {
            return C.indexOf.call(b, a, c)
        }, y.camelCase = A, y.trim = function(a) {
            return a.trim()
        }, y.uuid = 0, y.support = {}, y.expr = {}, y.map = function(a, b) {
            var c, d, e, f = [];
            if (h(a))
                for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
            else
                for (e in a) c = b(a[e], e), null != c && f.push(c);
            return j(f)
        }, y.each = function(a, b) {
            var c, d;
            if (h(a)) {
                for (c = 0; c < a.length; c++)
                    if (b.call(a[c], c, a[c]) === !1) return a
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) return a; return a
        }, y.grep = function(a, b) {
            return E.call(a, b)
        }, window.JSON && (y.parseJSON = JSON.parse), y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            W["[object " + b + "]"] = b.toLowerCase()
        }), y.fn = {
            forEach: C.forEach,
            reduce: C.reduce,
            push: C.push,
            sort: C.sort,
            indexOf: C.indexOf,
            concat: C.concat,
            map: function(a) {
                return y(y.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return y(D.apply(this, arguments))
            },
            ready: function(a) {
                return S.test(F.readyState) ? a(y) : F.addEventListener("DOMContentLoaded", function() {
                    a(y)
                }, !1), this
            },
            get: function(a) {
                return a === w ? D.call(this) : this[a >= 0 ? a : a + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(a) {
                return C.every.call(this, function(b, c) {
                    return a.call(b, c, b) !== !1
                }), this
            },
            filter: function(a) {
                return b(a) ? this.not(this.not(a)) : y(E.call(this, function(b) {
                    return Y.matches(b, a)
                }))
            },
            add: function(a, b) {
                return y(B(this.concat(y(a, b))))
            },
            is: function(a) {
                return this.length > 0 && Y.matches(this[0], a)
            },
            not: function(a) {
                var c = [];
                if (b(a) && a.call !== w) this.each(function(b) {
                    a.call(this, b) || c.push(this)
                });
                else {
                    var d = "string" == typeof a ? this.filter(a) : h(a) && b(a.item) ? D.call(a) : y(a);
                    this.forEach(function(a) {
                        d.indexOf(a) < 0 && c.push(a)
                    })
                }
                return y(c)
            },
            has: function(a) {
                return this.filter(function() {
                    return e(a) ? y.contains(this, a) : y(this).find(a).size()
                })
            },
            eq: function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                var a = this[0];
                return a && !e(a) ? a : y(a)
            },
            last: function() {
                var a = this[this.length - 1];
                return a && !e(a) ? a : y(a)
            },
            find: function(a) {
                var b, c = this;
                return b = "object" == typeof a ? y(a).filter(function() {
                    var a = this;
                    return C.some.call(c, function(b) {
                        return y.contains(b, a)
                    })
                }) : 1 == this.length ? y(Y.qsa(this[0], a)) : this.map(function() {
                    return Y.qsa(this, a)
                })
            },
            closest: function(a, b) {
                var c = this[0],
                    e = !1;
                for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : Y.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
                return y(c)
            },
            parents: function(a) {
                for (var b = [], c = this; c.length > 0;) c = y.map(c, function(a) {
                    return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
                });
                return q(b, a)
            },
            parent: function(a) {
                return q(B(this.pluck("parentNode")), a)
            },
            children: function(a) {
                return q(this.map(function() {
                    return o(this)
                }), a)
            },
            contents: function() {
                return this.map(function() {
                    return D.call(this.childNodes)
                })
            },
            siblings: function(a) {
                return q(this.map(function(a, b) {
                    return E.call(o(b.parentNode), function(a) {
                        return a !== b
                    })
                }), a)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(a) {
                return y.map(this, function(b) {
                    return b[a]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = null), "none" == I(this, "").getPropertyValue("display") && (this.style.display = n(this.nodeName))
                })
            },
            replaceWith: function(a) {
                return this.before(a).remove()
            },
            wrap: function(a) {
                var c = b(a);
                if (this[0] && !c) var d = y(a).get(0),
                    e = d.parentNode || this.length > 1;
                return this.each(function(b) {
                    y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                })
            },
            wrapAll: function(a) {
                if (this[0]) {
                    y(this[0]).before(a = y(a));
                    for (var b;
                        (b = a.children()).length;) a = b.first();
                    y(a).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                var c = b(a);
                return this.each(function(b) {
                    var d = y(this),
                        e = d.contents(),
                        f = c ? a.call(this, b) : a;
                    e.length ? e.wrapAll(f) : d.append(f)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    y(this).replaceWith(y(this).children())
                }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(a) {
                return this.each(function() {
                    var b = y(this);
                    (a === w ? "none" == b.css("display") : a) ? b.show(): b.hide()
                })
            },
            prev: function(a) {
                return y(this.pluck("previousElementSibling")).filter(a || "*")
            },
            next: function(a) {
                return y(this.pluck("nextElementSibling")).filter(a || "*")
            },
            html: function(a) {
                return a === w ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
                    var c = this.innerHTML;
                    y(this).empty().append(r(this, a, b, c))
                })
            },
            text: function(a) {
                return a === w ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                    this.textContent = a
                })
            },
            attr: function(a, b) {
                var c;
                return "string" == typeof a && b === w ? 0 == this.length || 1 !== this[0].nodeType ? w : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                    if (1 === this.nodeType)
                        if (e(a))
                            for (x in a) s(this, x, a[x]);
                        else s(this, a, r(this, b, c, this.getAttribute(a)))
                })
            },
            removeAttr: function(a) {
                return this.each(function() {
                    1 === this.nodeType && s(this, a)
                })
            },
            prop: function(a, b) {
                return b === w ? this[0] && this[0][a] : this.each(function(c) {
                    this[a] = r(this, b, c, this[a])
                })
            },
            data: function(a, b) {
                var c = this.attr("data-" + k(a), b);
                return null !== c ? u(c) : w
            },
            val: function(a) {
                return a === w ? this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value) : this.each(function(b) {
                    this.value = r(this, a, b, this.value)
                })
            },
            offset: function(a) {
                if (a) return this.each(function(b) {
                    var c = y(this),
                        d = r(this, a, b, c.offset()),
                        e = c.offsetParent().offset(),
                        f = {
                            top: d.top - e.top,
                            left: d.left - e.left
                        };
                    "static" == c.css("position") && (f.position = "relative"), c.css(f)
                });
                if (0 == this.length) return null;
                var b = this[0].getBoundingClientRect();
                return {
                    left: b.left + window.pageXOffset,
                    top: b.top + window.pageYOffset,
                    width: Math.round(b.width),
                    height: Math.round(b.height)
                }
            },
            css: function(b, c) {
                if (arguments.length < 2 && "string" == typeof b) return this[0] && (this[0].style[A(b)] || I(this[0], "").getPropertyValue(b));
                var d = "";
                if ("string" == a(b)) c || 0 === c ? d = k(b) + ":" + m(b, c) : this.each(function() {
                    this.style.removeProperty(k(b))
                });
                else
                    for (x in b) b[x] || 0 === b[x] ? d += k(x) + ":" + m(x, b[x]) + ";" : this.each(function() {
                        this.style.removeProperty(k(x))
                    });
                return this.each(function() {
                    this.style.cssText += ";" + d
                })
            },
            index: function(a) {
                return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(a) {
                return C.some.call(this, function(a) {
                    return this.test(t(a))
                }, l(a))
            },
            addClass: function(a) {
                return this.each(function(b) {
                    z = [];
                    var c = t(this),
                        d = r(this, a, b, c);
                    d.split(/\s+/g).forEach(function(a) {
                        y(this).hasClass(a) || z.push(a)
                    }, this), z.length && t(this, c + (c ? " " : "") + z.join(" "))
                })
            },
            removeClass: function(a) {
                return this.each(function(b) {
                    return a === w ? t(this, "") : (z = t(this), r(this, a, b, z).split(/\s+/g).forEach(function(a) {
                        z = z.replace(l(a), " ")
                    }), void t(this, z.trim()))
                })
            },
            toggleClass: function(a, b) {
                return this.each(function(c) {
                    var d = y(this),
                        e = r(this, a, c, t(this));
                    e.split(/\s+/g).forEach(function(a) {
                        (b === w ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
                    })
                })
            },
            scrollTop: function() {
                return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
            },
            position: function() {
                if (this.length) {
                    var a = this[0],
                        b = this.offsetParent(),
                        c = this.offset(),
                        d = M.test(b[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : b.offset();
                    return c.top -= parseFloat(y(a).css("margin-top")) || 0, c.left -= parseFloat(y(a).css("margin-left")) || 0, d.top += parseFloat(y(b[0]).css("border-top-width")) || 0, d.left += parseFloat(y(b[0]).css("border-left-width")) || 0, {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || F.body; a && !M.test(a.nodeName) && "static" == y(a).css("position");) a = a.offsetParent;
                    return a
                })
            }
        }, y.fn.detach = y.fn.remove, ["width", "height"].forEach(function(a) {
            y.fn[a] = function(b) {
                var e, f = this[0],
                    g = a.replace(/./, function(a) {
                        return a[0].toUpperCase()
                    });
                return b === w ? c(f) ? f["inner" + g] : d(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[a] : this.each(function(c) {
                    f = y(this), f.css(a, r(this, b, c, f[a]()))
                })
            }
        }), O.forEach(function(b, c) {
            var d = c % 2;
            y.fn[b] = function() {
                var b, e, f = y.map(arguments, function(c) {
                        return b = a(c), "object" == b || "array" == b || null == c ? c : Y.fragment(c)
                    }),
                    g = this.length > 1;
                return f.length < 1 ? this : this.each(function(a, b) {
                    e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null, f.forEach(function(a) {
                        if (g) a = a.cloneNode(!0);
                        else if (!e) return y(a).remove();
                        v(e.insertBefore(a, b), function(a) {
                            null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                        })
                    })
                })
            }, y.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
                return y(a)[b](this), this
            }
        }), Y.Z.prototype = y.fn, Y.uniq = B, Y.deserializeValue = u, y.zepto = Y, y
    }();
    "undefined" == typeof global && (window.Zepto = Zepto),
        function(a) {
            function b(a) {
                var b = this.os = {},
                    c = this.browser = {},
                    d = a.match(/WebKit\/([\d.]+)/),
                    e = a.match(/(Android)(\s+|\/)([\d.]+)/),
                    f = a.match(/(iPad).*OS\s([\d_]+)/),
                    g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
                    h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                    i = h && a.match(/TouchPad/),
                    j = a.match(/Kindle\/([\d.]+)/),
                    k = a.match(/Silk\/([\d._]+)/),
                    l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
                    m = a.match(/(BB10).*Version\/([\d.]+)/),
                    n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                    o = a.match(/PlayBook/),
                    p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                    q = a.match(/Firefox\/([\d.]+)/);
                (c.webkit = !!d) && (c.version = d[1]), e && (b.android = !0, b.version = e[3]), g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")), h && (b.webos = !0, b.version = h[2]), i && (b.touchpad = !0), l && (b.blackberry = !0, b.version = l[2]), m && (b.bb10 = !0, b.version = m[2]), n && (b.rimtabletos = !0, b.version = n[2]), o && (c.playbook = !0), j && (b.kindle = !0, b.version = j[1]), k && (c.silk = !0, c.version = k[1]), !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0), p && (c.chrome = !0, c.version = p[1]), q && (c.firefox = !0, c.version = q[1]), b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)), b.phone = !(b.tablet || !(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/)))
            }
            b.call(a, navigator.userAgent), a.__detect = b
        }(Zepto),
        function(a) {
            function b(a) {
                return a._zid || (a._zid = n++)
            }

            function c(a, c, f, g) {
                if (c = d(c), c.ns) var h = e(c.ns);
                return (m[b(a)] || []).filter(function(a) {
                    return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
                })
            }

            function d(a) {
                var b = ("" + a).split(".");
                return {
                    e: b[0],
                    ns: b.slice(1).sort().join(" ")
                }
            }

            function e(a) {
                return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
            }

            function f(b, c, d) {
                "string" != a.type(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
                    d(a, c)
                })
            }

            function g(a, b) {
                return a.del && ("focus" == a.e || "blur" == a.e) || !!b
            }

            function h(a) {
                return p[a] || a
            }

            function i(c, e, i, j, k, l) {
                var n = b(c),
                    o = m[n] || (m[n] = []);
                f(e, i, function(b, e) {
                    var f = d(b);
                    f.fn = e, f.sel = j, f.e in p && (e = function(b) {
                        var c = b.relatedTarget;
                        return !c || c !== this && !a.contains(this, c) ? f.fn.apply(this, arguments) : void 0
                    }), f.del = k && k(e, b);
                    var i = f.del || e;
                    f.proxy = function(a) {
                        var b = i.apply(c, [a].concat(a.data));
                        return b === !1 && (a.preventDefault(), a.stopPropagation()), b
                    }, f.i = o.length, o.push(f), c.addEventListener ? c.addEventListener(h(f.e), f.proxy, g(f, l)) : c.attachEvent("on" + h(f.e), f.proxy, g(f, l))
                })
            }

            function j(a, d, e, i, j) {
                var k = b(a);
                f(d || "", e, function(b, d) {
                    c(a, b, d, i).forEach(function(b) {
                        delete m[k][b.i], a.removeEventListener ? a.removeEventListener(h(b.e), b.proxy, g(b, j)) : a.detachEvent("on" + h(b.e), b.proxy, g(b, j))
                    })
                })
            }

            function k(b) {
                var c, d = {
                    originalEvent: b
                };
                for (c in b) s.test(c) || void 0 === b[c] || (d[c] = b[c]);
                return a.each(t, function(a, c) {
                    d[a] = function() {
                        return this[c] = q, b[a].apply(b, arguments)
                    }, d[c] = r
                }), d
            }

            function l(a) {
                if (!("defaultPrevented" in a)) {
                    a.defaultPrevented = !1;
                    var b = a.preventDefault;
                    a.preventDefault = function() {
                        this.defaultPrevented = !0, b.call(this)
                    }
                }
            }
            var m = (a.zepto.qsa, {}),
                n = 1,
                o = {},
                p = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
            o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", a.event = {
                add: i,
                remove: j
            }, a.proxy = function(c, d) {
                if (a.isFunction(c)) {
                    var e = function() {
                        return c.apply(d, arguments)
                    };
                    return e._zid = b(c), e
                }
                if ("string" == typeof d) return a.proxy(c[d], c);
                throw new TypeError("expected function")
            }, a.fn.bind = function(a, b) {
                return this.each(function() {
                    i(this, a, b)
                })
            }, a.fn.unbind = function(a, b) {
                return this.each(function() {
                    j(this, a, b)
                })
            }, a.fn.one = function(a, b) {
                return this.each(function(c, d) {
                    i(this, a, b, null, function(a, b) {
                        return function() {
                            var c = a.apply(d, arguments);
                            return j(d, b, a), c
                        }
                    })
                })
            };
            var q = function() {
                    return !0
                },
                r = function() {
                    return !1
                },
                s = /^([A-Z]|layer[XY]$)/,
                t = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
            a.fn.delegate = function(b, c, d) {
                return this.each(function(e, f) {
                    i(f, c, d, b, function(c) {
                        return function(d) {
                            var e, g = a(d.target).closest(b, f).get(0);
                            return g ? (e = a.extend(k(d), {
                                currentTarget: g,
                                liveFired: f
                            }), c.apply(g, [e].concat([].slice.call(arguments, 1)))) : void 0
                        }
                    })
                })
            }, a.fn.undelegate = function(a, b, c) {
                return this.each(function() {
                    j(this, b, c, a)
                })
            }, a.fn.live = function(b, c) {
                return a(document.body).delegate(this.selector, b, c), this
            }, a.fn.die = function(b, c) {
                return a(document.body).undelegate(this.selector, b, c), this
            }, a.fn.on = function(b, c, d) {
                return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
            }, a.fn.off = function(b, c, d) {
                return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
            }, a.fn.trigger = function(b, c) {
                return ("string" == typeof b || a.isPlainObject(b)) && (b = a.Event(b)), l(b), b.data = c, this.each(function() {
                    "dispatchEvent" in this && this.dispatchEvent(b)
                })
            }, a.fn.triggerHandler = function(b, d) {
                var e, f;
                return this.each(function(g, h) {
                    e = k("string" == typeof b ? a.Event(b) : b), e.data = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
                        return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }), f
            }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
                a.fn[b] = function(a) {
                    return a ? this.bind(b, a) : this.trigger(b)
                }
            }), ["focus", "blur"].forEach(function(b) {
                a.fn[b] = function(a) {
                    return a ? this.bind(b, a) : this.each(function() {
                        try {
                            this[b]()
                        } catch (a) {}
                    }), this
                }
            }), a.Event = function(a, b) {
                "string" != typeof a && (b = a, a = b.type);
                var c = document.createEvent(o[a] || "Events"),
                    d = !0;
                if (b)
                    for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
                return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null), c.isDefaultPrevented = function() {
                    return this.defaultPrevented
                }, c
            }
        }(Zepto),
        function(a) {
            var b, c, d, e, f, g, h;
            c = function(a, b) {
                b.parentNode.removeChild(b), window[a] = void 0;
                try {
                    delete window[a]
                } catch (c) {}
            }, d = function(a, b) {
                var c, d, e = "";
                for (c in a) a.hasOwnProperty(c) && (c = b ? encodeURIComponent(c) : c, d = b ? encodeURIComponent(a[c]) : a[c], e += c + "=" + d + "&");
                return e.replace(/&$/, "")
            }, e = function() {
                return "cb_" + tvp.$.createGUID(16)
            }, f = function(a, b) {
                "undefined" != typeof a && a(b)
            }, g = function(a, b) {
                "undefined" != typeof a && a(b)
            }, h = function(a) {
                "undefined" != typeof a && a()
            }, b = {}, b.init = function(a) {
                var c;
                for (c in a) a.hasOwnProperty(c) && (b.options[c] = a[c]);
                return !0
            }, b.get = function(a) {
                a = a || {};
                var b = a.url,
                    i = a.callbackParameter || "callback",
                    j = a.data || {},
                    k = document.createElement("script"),
                    l = a.jsonpCallback || e(),
                    m = "?";
                b && (j[i] = l, b.indexOf("?") >= 0 && (m = "&"), b += m + d(j, !0), b = b.replace(/=\?/, "=" + l), window[l] = function(b) {
                    "undefined" == typeof b ? f(a.error, "Invalid JSON data returned") : g(a.success, b), c(l, k), h(a.complete)
                }, k.setAttribute("src", b), document.getElementsByTagName("head")[0].appendChild(k), k.onerror = function() {
                    c(l, k), h(a.complete), f(a.error, "Error while trying to access the URL")
                })
            }, a.ajax = b.get
        }(Zepto),
        function(a) {
            if ("__proto__" in {} || a.extend(a.zepto, {
                Z: function(b, c) {
                    return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
                },
                isZ: function(b) {
                    return "array" === a.type(b) && "__Z" in b
                }
            }), "function" == typeof window.getComputedStyle) try {
                getComputedStyle(void 0)
            } catch (b) {
                var c = window.getComputedStyle;
                window.getComputedStyle = function() {
                    try {
                        return c.apply(window, arguments)
                    } catch (a) {
                        return null
                    }
                }
            }
        }(Zepto);
    var tvp = {};
    tvp.lastModify = "2015-02-12 22:26:39", tvp.ts = "201502122", tvp.ver = "$V2.0Build3526$", tvp.name = "\u817e\u8baf\u89c6\u9891\u7edf\u4e00\u64ad\u653e\u5668", "undefined" == typeof window.DEBUG && (window.DEBUG = 1);
    var top = window.top;
    if (top != window) try {
        tvp.topurl = top.location.href
    } catch (e) {
        top = window
    }
    tvp.log = function(a) {
            if (window.DEBUG && null != document.getElementById("tvp_debug_console")) {
                var b = document.getElementById("tvp_debug_console");
                b.innerHTML += a + " | "
            } else window.console && window.console.log("[" + tvp.log.debugid+++"] " + a)
        }, tvp.debug = function(a) {
            window.DEBUG || -1 !== tvp.log.isDebug || (tvp.log.isDebug = "true" == tvp.$.getUrlParam("debug") ? 1 : 0), (window.DEBUG || tvp.log.isDebug) && tvp.log(a)
        }, tvp.log.isDebug = -1, tvp.log.debugid = 1, tvp.DEVICE = {
            aphone: 1,
            iphone: 2,
            ipad: 3,
            other: 0
        }, tvp.PLATFORM = {
            wechat: 1,
            mqq: 2,
            qqbrowser: 3,
            other: 0
        }, tvp.APPID = {
            wechatPublic: 1e4,
            news: 10001,
            qqmusic: 10007
        }, tvp.ACTION = {
            onVodH5Init: "tvp:vodhtml5:beforeInit",
            onFlashPlayerInited: "tvp:flash:inited"
        },
        function() {
            function a(a) {
                return a instanceof Array
            }
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o = [].slice;
            f = "1.3.2", c = "pending", e = "resolved", d = "rejected", j = function(a, b) {
                return null != a ? a.hasOwnProperty(b) : void 0
            }, l = function(a) {
                return j(a, "length") && j(a, "callee")
            }, i = function(b) {
                return l(b) ? i(Array.prototype.slice.call(b)) : a(b) ? b.reduce(function(b, c) {
                    return a(c) ? b.concat(i(c)) : (b.push(c), b)
                }, []) : [b]
            }, g = function(a, b) {
                return 0 >= a ? b() : function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }, m = function(a, b) {
                return function() {
                    var c;
                    return c = [a].concat(Array.prototype.slice.call(arguments, 0)), b.apply(this, c)
                }
            }, h = function(a, b, c) {
                var d, e, f, g, h;
                for (g = i(a), h = [], e = 0, f = g.length; f > e; e++) d = g[e], h.push(d.call.apply(d, [c].concat(o.call(b))));
                return h
            }, b = function() {
                var a, f, g, j, k, l;
                return l = c, j = [], k = [], a = [], g = {}, this.promise = function(f) {
                    var m, n;
                    return f = f || {}, f.state = function() {
                        return l
                    }, n = function(a, b) {
                        return function() {
                            return l === c && b.push.apply(b, i(arguments)), a() && h(arguments, g), f
                        }
                    }, f.done = n(function() {
                        return l === e
                    }, j), f.fail = n(function() {
                        return l === d
                    }, k), f.always = n(function() {
                        return l !== c
                    }, a), m = function(a, c) {
                        var d, e;
                        return d = new b, e = function(a, b, c) {
                            return a(c ? function() {
                                return b(c.apply(null, i(arguments)))
                            } : function() {
                                return b.apply(null, i(arguments))
                            })
                        }, e(f.done, d.resolve, a), e(f.fail, d.reject, c), d
                    }, f.pipe = m, f.then = m, f
                }, this.promise(this), f = function(b, d, e) {
                    return function() {
                        return l === c && (l = b, g = arguments, h([d, a], g, e)), this
                    }
                }, this.resolve = f(e, j), this.reject = f(d, k), this.resolveWith = function() {
                    var a, b;
                    return b = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], f(e, j, b).apply(null, a)
                }, this.rejectWith = function() {
                    var a, b;
                    return b = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], f(d, k, b).apply(null, a)
                }, this
            }, n = function() {
                var a, c, d, e, f, h, j, k;
                for (e = new b, c = i(arguments), d = g(c.length, e.resolve), f = 0, j = c.length; j > f; f++) a = c[f], a.done(d);
                for (h = 0, k = c.length; k > h; h++) a = c[h], a.fail(function(a, b) {
                    return e.reject(a, b)
                });
                return e.promise()
            }, k = function(a) {
                return a.Deferred = function() {
                    return new b
                }, a.ajax = m(a.ajax, function(a, c) {
                    var d, e;
                    return null == c && (c = {}), e = new b, d = function(a, b) {
                        return m(a, function() {
                            var a, c;
                            return c = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], c && c.apply(null, a), b.apply(null, a)
                        })
                    }, c.success = d(c.success, e.resolve), c.error = d(c.error, e.reject), a(c), e.promise()
                }), a.when = n
            }, "undefined" != typeof exports ? (exports.Deferred = function() {
                return new b
            }, exports.when = n, exports.installInto = k) : (this.Deferred = function() {
                return new b
            }, this.Deferred.when = n, this.Deferred.installInto = k, this.DeferedClass = b)
        }.call(tvp), tvp.Deferred.installInto("undefined" != typeof Zepto ? Zepto : jq),
        function(a) {
            a.param = function(b, c) {
                var d = [];
                for (var e in b)
                    if (!a.isFunction(b[e])) {
                        var f = c ? c + "[" + e + "]" : e,
                            g = b[e];
                        d.push(a.isPlainObject(g) ? a.param(g, f) : f + "=" + encodeURIComponent(g))
                    }
                return d.join("&")
            }
        }(Zepto);
    var _isUseInnerZepto = !1;
    "undefined" != typeof Zepto && Zepto._tvp ? (tvp.$ = Zepto, _isUseInnerZepto = !0) : (tvp.$ = {}, _isUseInnerZepto = !1),
        function() {
            return _isUseInnerZepto ? void 0 : "function" == typeof window.Zepto ? void(tvp.$ = window.Zepto) : "function" == typeof window.jQuery && "function" == typeof window.jQuery.Deferred ? (tvp.$ = window.jQuery, void(!tvp.$.os && "undefined" != typeof Zepto && Zepto.__detect && Zepto.__detect.call(tvp.$, navigator.userAgent))) : void("function" == typeof window.jq && (tvp.$ = window.jq, !tvp.$.os && "undefined" != typeof Zepto && Zepto.__detect && Zepto.__detect.call(tvp.$, navigator.userAgent)))
        }(),
        function() {
            "undefined" == typeof document.DOCUMENT_NODE && (document.DOCUMENT_NODE = 9)
        }(),
        function(a) {
            function b(b) {
                {
                    var c = b.match(/MQQBrowser\/(\d+\.\d+)/i),
                        d = b.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i) || b.match(/V1_AND_SQ_([\d\.]+)/),
                        e = b.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || b.match(/MicroMessenger\/((\d+)\.(\d+))/),
                        f = b.match(/Mac\sOS\sX\s(\d+\.\d+)/),
                        g = b.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),
                        h = b.match(/MiuiBrowser\/(\d+\.\d+)/i),
                        i = b.match(/MI-ONE/),
                        j = b.match(/MI PAD/),
                        k = b.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/) || b.match(/\sUC\s/),
                        l = b.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || b.match(/WPDesktop/),
                        m = b.match(/(ipod).*\s([\d_]+)/i),
                        n = b.match(/(ipad).*\s([\d_]+)/i),
                        o = b.match(/(iphone)\sos\s([\d_]+)/i),
                        p = b.match(/Chrome\/(\d+\.\d+)/),
                        q = b.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/),
                        r = b.match(/(android)\s([\d\.]+)/i);
                    b.indexOf("HTC") > -1
                }
                if (a.browser = a.browser || {}, a.os = a.os || {}, window.ActiveXObject) {
                    var s = 6;
                    (window.XMLHttpRequest || b.indexOf("MSIE 7.0") > -1) && (s = 7), (window.XDomainRequest || b.indexOf("Trident/4.0") > -1) && (s = 8), b.indexOf("Trident/5.0") > -1 && (s = 9), b.indexOf("Trident/6.0") > -1 && (s = 10), a.browser.ie = !0, a.browser.version = s
                } else b.indexOf("Trident/7.0") > -1 && (a.browser.ie = !0, a.browser.version = 11);
                r && (this.os.android = !0, this.os.version = r[2]), m && (this.os.ios = this.os.ipod = !0, this.os.version = m[2].replace(/_/g, ".")), n && (this.os.ios = this.os.ipad = !0, this.os.version = n[2].replace(/_/g, ".")), o && (this.os.iphone = this.os.ios = !0, this.os.version = o[2].replace(/_/g, ".")), g && (this.os.windows = !0, this.os.version = g[2]), f && (this.os.Mac = !0, this.os.version = f[1]), b.indexOf("lepad_hls") > 0 && (this.os.LePad = !0), j && (this.os.MIPAD = !0), c && (this.browser.MQQ = !0, this.browser.version = c[1]), d && (this.browser.MQQClient = !0, this.browser.version = d[1]), e && (this.browser.WeChat = !0, this.browser.version = e[1]), h && (this.browser.MIUI = !0, this.browser.version = h[1]), k && (this.browser.UC = !0, this.browser.version = k[1] || 0 / 0), l && (this.browser.IEMobile = !0, this.browser.version = l[2]), q && (this.browser.AndriodBrowser = !0), i && (this.browser.M1 = !0), p && (this.browser.Chrome = !0, this.browser.version = p[1]), this.os.windows && (this.os.win64 = "undefined" != typeof navigator.platform && "win64" == navigator.platform.toLowerCase() ? !0 : !1);
                var t = {
                    iPad7: "iPad; CPU OS 7",
                    LePad: "lepad_hls",
                    XiaoMi: "MI-ONE",
                    SonyDTV: "SonyDTV",
                    SamSung: "SAMSUNG",
                    HTC: "HTC",
                    VIVO: "vivo"
                };
                for (var u in t) this.os[u] = -1 !== b.indexOf(t[u]);
                a.os.phone = a.os.phone || /windows phone/i.test(b), this.os.getNumVersion = function() {
                    return parseFloat(a.os.version, "10")
                }, this.os.hasTouch = "ontouchstart" in window, this.os.hasTouch && this.os.ios && this.os.getNumVersion() < 6 && (this.os.hasTouch = !1), a.browser.WeChat && a.browser.version < 5 && (this.os.hasTouch = !1), a.extend(a.browser, {
                    getNumVersion: function() {
                        return parseFloat(a.browser.version, "10")
                    },
                    isFFCanOcx: function() {
                        return a.browser.firefox && a.browser.getNumVersion() >= 3 ? !0 : !1
                    },
                    isCanOcx: function() {
                        return !(!a.os.windows || !a.browser.ie && !a.browser.isFFCanOcx() && !a.browser.webkit)
                    },
                    isNotIESupport: function() {
                        return !!a.os.windows && (!!a.browser.webkit || a.browser.isFFCanOcx())
                    }
                }), a.userAgent = {}, a.extend(a.userAgent, a.os), a.extend(a.userAgent, a.browser), a.userAgent.browserVersion = a.browser.version, a.userAgent.osVersion = a.os.version, delete a.userAgent.version
            }
            b.call(a, navigator.userAgent)
        }(tvp.$),
        function($) {
            var extFun = {
                getByID: function(a) {
                    return document.getElementById(a)
                },
                noop: function() {},
                isString: function(a) {
                    return "string" === $.type(a)
                },
                isUndefined: function(a) {
                    return "undefined" === $.type(a)
                },
                now: function() {
                    return (new Date).getTime()
                },
                getISOTimeFormat: function() {
                    var a = new Date,
                        b = a.getFullYear(),
                        c = a.getMonth() + 1,
                        d = a.getDate(),
                        e = a.getHours(),
                        f = a.getMinutes(),
                        g = a.getSeconds();
                    return [
                        [b, 10 > c ? "0" + c : c, 10 > d ? "0" + d : d].join("-"), [10 > e ? "0" + e : e, 10 > f ? "0" + f : f, 10 > g ? "0" + g : g].join(":")
                    ].join(" ")
                },
                formatSeconds: function(a) {
                    a = parseInt(a);
                    var b = parseInt(a / 60),
                        c = b >= 60 ? parseInt(b / 60) : 0,
                        d = a % 60,
                        e = "";
                    return b >= 60 && (b %= 60), c > 0 && (e += 10 > c ? "0" + c : c, e += ":"), e += 10 > b ? "0" + b : b, e += ":", e += 10 > d ? "0" + d : d
                },
                formatSecondsWithText: function(a) {
                    var b = this.formatSeconds(a),
                        c = b.split(":"),
                        d = "";
                    switch (c.length) {
                        case 1:
                            d = c[0] + "\u79d2";
                            break;
                        case 2:
                            d = c[0] + "\u5206" + c[1] + "\u79d2";
                            break;
                        case 3:
                            d = c[0] + "\u5c0f\u65f6" + c[1] + "\u5206" + c[2] + "\u79d2";
                            break;
                        default:
                            d = b
                    }
                    return d
                },
                formatFileSize: function(a) {
                    return a = parseInt(a, 10), a = a / 1024 / 1024, a = a.toFixed(1), a + "M"
                },
                getHost: function() {
                    var a = window.location.hostname || window.location.host,
                        b = location.host.split(".");
                    return b.length > 1 && (a = b.slice(b.length - 2).join(".")), a
                },
                getUrlParam: function(a, b) {
                    b = b || document.location.toString();
                    var c = new RegExp("(^|&|\\\\?)" + a + "=([^&]*)(&|$|#)"),
                        d = null;
                    return (d = b.match(c)) ? d[2] : ""
                },
                setUrlParam: function(a, b, c) {
                    c = c || location.href;
                    var d, e, f = new RegExp("[?&#]" + a + "=([^&#]+)", "gi"),
                        g = c.match(f),
                        h = "{key" + (new Date).getTime() + "}";
                    if (d = g && g.length > 0 ? g[g.length - 1] : "", e = a + "=" + b, d) {
                        var i = d.charAt(0);
                        c = c.replace(d, h), c = c.replace(h, b ? i + e : "")
                    } else b && (c += c.indexOf("?") > -1 ? "&" + e : "?" + e);
                    return c
                },
                filterXSS: function(a) {
                    return $.isString(a) ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;") : a
                },
                createGUID: function(a) {
                    a = a || 32;
                    for (var b = "", c = 1; a >= c; c++) {
                        var d = Math.floor(16 * Math.random()).toString(16);
                        b += d
                    }
                    return b
                },
                formatSize: function(a) {
                    var b = "" + a;
                    return b.indexOf("%") > 0 ? b : b.indexOf("px") > 0 ? b : /^\d+$/.test(b) ? b + "px" : b
                },
                compareVersion: function(a, b) {
                    a = String(a).split("."), b = String(b).split(".");
                    try {
                        for (var c = 0, d = Math.max(a.length, b.length); d > c; c++) {
                            var e = isFinite(a[c]) && Number(a[c]) || 0,
                                f = isFinite(b[c]) && Number(b[c]) || 0;
                            if (f > e) return -1;
                            if (e > f) return 1
                        }
                    } catch (g) {
                        return -1
                    }
                    return 0
                },
                isTrue: function(v) {
                    return eval(tvp.$.filterXSS(v))
                },
                loadPluginCss: function(a) {
                    var b = "",
                        c = tvp.defaultConfig.pluginCssUrl;
                    return a in c && (b = tvp.defaultConfig.cssPath + c[a]), $.loadCss(b)
                },
                getData: function(a) {
                    return window.localStorage ? window.localStorage[a] : void 0
                },
                setData: function(a, b) {
                    return window.localStorage ? (window.localStorage[a] = b, !0) : void 0
                },
                delData: function(a) {
                    return window.localStorage ? (window.localStorage.removeItem(a), !0) : void 0
                },
                formatTpl: function(a, b) {
                    if (a && "object" === $.type(b)) {
                        for (var c in b)
                            for (var d = "${" + c + "}"; a.indexOf(d) > -1;) a = a.replace(d, b[c]);
                        return a
                    }
                },
                loadCss: function(a) {
                    var b = $.Deferred(),
                        c = !1;
                    if (a) {
                        for (; a.indexOf("../") >= 0;) a = a.replace("../", "");
                        a = $.filterXSS(a);
                        var d = document,
                            e = d.getElementsByTagName("head")[0] || d.documentElement,
                            f = e.getElementsByTagName("base")[0],
                            g = d.createElement("link");
                        g.rel = "stylesheet", g.href = a, g.onload = g.onerror = function() {
                            g.onload = g.onerror = null, c = !0, b.resolve()
                        }, setTimeout(function() {
                            c || b.resolve()
                        }, 2500), f ? e.insertBefore(g, f) : e.appendChild(g)
                    } else b.reject();
                    return b
                }
            };
            $.extend($, extFun)
        }(tvp.$),
        function(a) {
            a.cookie = {
                set: function(a, b, c, d, e) {
                    if (e) {
                        var f = new Date,
                            g = new Date;
                        g.setTime(f.getTime() + 36e5 * e)
                    }
                    return document.cookie = a + "=" + b + "; " + (e ? "expires=" + g.toGMTString() + "; " : "") + (d ? "path=" + d + "; " : "path=/; ") + (c ? "domain=" + c + ";" : "domain=" + window.location.host + ";"), !0
                },
                get: function(a) {
                    var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)"),
                        c = document.cookie.match(b);
                    return c ? c[1] : ""
                },
                del: function(a, b, c) {
                    var d = new Date;
                    d.setTime(d.getTime() - 1), document.cookie = a + "=; expires=" + d.toGMTString() + ";" + (c ? "path=" + c + "; " : "path=/; ") + (b ? "domain=" + b + ";" : "domain=" + window.location.host + ";")
                }
            }
        }(tvp.$), tvp = tvp || {}, tvp.common = {
            isUseHtml5: function() {
                var a = navigator.userAgent,
                    b = (tvp.version.getFlashMain(), null);
                if (/ipad|ipod|iphone|lepad_hls|IEMobile|WPDesktop/gi.test(a)) return !0;
                if (tvp.$.os.android) {
                    if (tvp.common.isSupportMP4()) return !0;
                    if (tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2) return !0;
                    if (-1 != a.indexOf("MI2")) return !0;
                    if (tvp.$.os.version >= "4" && (b = a.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && b[1] >= 4.2) return !0;
                    if (tvp.$.os.version >= "4.1") return !0
                }
                return !1
            },
            isInUseH5: function() {
                var a = navigator.userAgent,
                    b = null;
                if (tvp.$.os.android) {
                    if (tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2) return !0;
                    if (-1 != a.indexOf("MI2")) return !0;
                    if (tvp.$.os.version >= "4" && (b = a.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && b[1] >= 4.2) return !0;
                    if (tvp.$.os.version >= "4.1") return !0
                }
            },
            isUseHLS: function() {
                return tvp.$.os.ios ? !0 : void 0
            },
            isLiveUseHTML5: function() {
                return tvp.$.os.ios ? !0 : tvp.$.os.ipad ? !0 : tvp.$.os.android && tvp.common.isSupportM3u8() ? !0 : !1
            },
            isSupportM3u8: function() {
                var a = document.createElement("video"),
                    b = ["application/x-mpegURL", "audio/mpegurl", "vnd.apple.mpegURL", "application/vnd.apple.mpegURL"],
                    c = !1;
                return "function" == typeof a.canPlayType && tvp.$.each(b, function(b, d) {
                    return a.canPlayType(d) ? void(c = !0) : void 0
                }), a = null, tvp.$.os.android && (tvp.$.os.version >= "4" && tvp.$.browser.Chrome && (c = !0), tvp.$.browser.M1 && (c = !1), /V8 Build/.test(navigator.userAgent) && (c = !1), tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2 && (c = !0)), c
            },
            isSupportMP4: function() {
                var a = document.createElement("video");
                if ("function" == typeof a.canPlayType) {
                    if ("probably" == a.canPlayType('video/mp4; codecs="mp4v.20.8"')) return !0;
                    if ("probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) return !0
                }
                return !1
            },
            isSupportSVG: function() {
                return document.implementation && tvp.$.isFunction(document.implementation.hasFeature) ? document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") : !1
            },
            isEnforceMP4: function() {
                navigator.userAgent;
                if (tvp.$.os.android) {
                    if (tvp.$.browser.firefox) return !0;
                    if (tvp.$.os.version >= "4.0" && tvp.$.browser.MQQ && tvp.$.browser.version < "4.0") return !0
                }
                return !1
            },
            getUin: function() {
                var a = tvp.$.cookie.get("skey"),
                    b = tvp.$.cookie.get("lskey"),
                    c = "",
                    d = 0,
                    e = !1;
                return isLeak = "undefined" == typeof isLeak ? !1 : !0, e = !!isLeak && "" != b, e || "" != a ? (c = tvp.$.cookie.get("uin"), "" == c && e && (c = tvp.$.cookie.get("luin")), d = parseInt(c.replace(/^o0*/g, ""), 10), isNaN(d) || 1e4 >= d ? 0 : d) : 0
            },
            getSKey: function() {
                var a = tvp.$.cookie.get("skey"),
                    b = tvp.$.cookie.get("lskey"),
                    c = "";
                return c = isLeak ? "" != a && "" != b ? [a, b].join(";") : a || b : a
            },
            openLogin: function() {},
            getVideoSnap: function(a, b) {
                var c, d, e = 1e8;
                if (a.indexOf("_") > 0) {
                    var f = a.split("_");
                    a = f[0], b = parseInt(f[1])
                }
                for (var g = 4294967296, e = 1e8, h = 0, i = 0; i < a.length; i++) {
                    var j = a.charCodeAt(i);
                    h = 32 * h + h + j, h >= g && (h %= g)
                }
                return d = h % e, void 0 == b && (b = 0), c = 0 == b ? ["http://vpic.video.qq.com/", d, "/", a, "_160_90_3.jpg"].join("") : ["http://vpic.video.qq.com/", d, "/", a, "_", "160_90_", b, "_1.jpg"].join("")
            },
            getVideoSnapMobile: function(a, b) {
                b = b || 0;
                var c = ["496_280"],
                    d = "http://shp.qpic.cn/qqvideo_ori/0/{vid}_{index}/0";
                return d.replace("{vid}", a).replace("{index}", c[b])
            },
            picerr: function() {},
            getDeviceId: function() {
                var a = tvp.DEVICE.other;
                return tvp.$.os.iphone ? a = tvp.DEVICE.iphone : tvp.$.os.ipad ? a = tvp.DEVICE.ipad : tvp.$.os.android && tvp.$.os.phone && (a = tvp.DEVICE.aphone), a
            },
            getPlatformId: function() {
                var a = tvp.PLATFORM.other;
                return tvp.$.browser.WeChat ? a = tvp.PLATFORM.wechat : tvp.$.browser.MQQClient ? a = tvp.PLATFORM.mqq : tvp.$.browser.MQQ && (a = tvp.PLATFORM.qqbrowser), a
            },
            getParams: function(a) {
                for (var b, c, d = a.indexOf("?"), e = a.substring(d + 1), f = /\w+=[^&]+/g, g = {}; null !== (b = f.exec(e));) c = b[0].split("="), c.length >= 2 && (g[c.shift()] = c.join("="));
                return g
            },
            recomdTextById: function(a) {
                if (a) {
                    if (this.recomdText || (this.recomdText = {}), this.recomdText[a] && "string" == typeof this.recomdText[a]) return this.recomdText[a];
                    var b = tvp.$.Deferred(),
                        c = this,
                        d = 50;
                    return d && 100 * Math.random() > d ? (b.resolve(), b) : (tvp.$.ajax({
                        url: "http://like.video.qq.com/fcgi-bin/like?callback=?",
                        data: {
                            id: a,
                            uin: 0,
                            playright: 7,
                            msgtype: 103,
                            otype: "json",
                            tablist: 9
                        }
                    }).done(function(d) {
                        d && d.rmdword ? (c.recomdText[a] = d.rmdword, b.resolve()) : b.resolve()
                    }).fail(function() {
                        b.resolve()
                    }), setTimeout(function() {
                        b.resolve()
                    }, 5e3), b)
                }
            }
        }, tvp.version = function() {
            function a(a) {
                if (b(a)) return a;
                if (/\d+/i.test(a)) {
                    var c = parseInt(a / 1e4 / 100, 10),
                        d = parseInt(a / 1e4, 10) - 100 * c,
                        e = parseInt(a, 10) - (100 * c * 1e4 + 1e4 * d);
                    return strVer = c + "." + d + "." + e
                }
                return a
            }

            function b(a) {
                return /^(\d+\.){2}\d+(\.\d+)?$/.test(a)
            }
            var c, d = "0.0.0.0",
                e = "0.0.0",
                f = new Image,
                g = !1,
                h = !1;
            return "film.qq.com" == document.location.host && (h = !0), {
                getOcx: function(b) {
                    if (tvp.$.isUndefined(b) && (b = !0), b && "0.0.0.0" != d) return d;
                    var e;
                    if (tvp.$.browser.ie) try {
                        e = "IE begin", c = new ActiveXObject(QQLive.config.PROGID_QQLIVE_INSTALLER), "undefined" != typeof c.getVersion ? (d = c.GetVersionByClsid(QQLive.config.OCX_CLSID), e = "get actObj.GetVersionByClsid:" + d) : e = "no function:actObj.GetVersionByClsid"
                    } catch (i) {
                        h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(i.message) + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random())
                    } else if (tvp.$.browser.isNotIESupport()) {
                        e = "no IE begin";
                        var j, k = navigator.plugins;
                        if (tvp.$.isUndefined(k.namedItem) || (e = "plugs.namedItem", j = k.namedItem("\u817e\u8baf\u89c6\u9891")), !j) {
                            e = "no plugs.namedItem:tencentvideo";
                            for (var l = 0, m = k.length; m > l; l++)
                                if (k[l] && "\u817e\u8baf\u89c6\u9891" == k[l].name || "npQQLive.dll" == k[l].filename) {
                                    j = k[l];
                                    break
                                }
                        }
                        if (j)
                            if (tvp.$.isUndefined(j.version)) {
                                e = "plug.description:" + j.description;
                                var n, o = j.description;
                                (n = o.match(/version:((\d+\.){3}(\d+)?)/)) && (d = n[1])
                            } else e = "plug.version:" + j.version, d = j.version;
                        else e = "no plugs[i].filename:npQQLive.dll"
                    }
                    return parseInt(d, 10) || h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + d + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random()), d = a(d)
                },
                getFlash: function() {
                    if ("0.0.0" != e) return e;
                    var a = null,
                        b = null,
                        c = [],
                        d = "Shockwave Flash",
                        i = navigator,
                        j = "application/x-shockwave-flash";
                    if (tvp.$.browser.ie) try {
                        var k = "IE begin";
                        a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), k = "new ActiveXObject", a && (b = a.GetVariable("$version"), k = "swf.GetVariable", b && (b = b.split(" ")[1].split(","), c = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]))
                    } catch (l) {
                        h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(l.message) + "&sStep=" + encodeURIComponent(k) + "&_=" + Math.random())
                    } else if (!tvp.$.isUndefined(i.plugins) && "object" == typeof i.plugins[d]) {
                        var k = "no IE begin";
                        b = i.plugins[d].description, k = "plugins[S].description", b && (tvp.$.isUndefined(i.mimeTypes) || !i.mimeTypes[j] || i.mimeTypes[j].enabledPlugin) ? (k = "parse description", b = b.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), c[0] = parseInt(b.replace(/^(.*)\..*$/, "$1"), 10), c[1] = parseInt(b.replace(/^.*\.(.*)\s.*$/, "$1"), 10), c[2] = /[a-zA-Z]/.test(b) ? parseInt(b.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0) : k = "no mimeTypes or disable"
                    }
                    return e = c.join("."), parseInt(e, 10) || h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + e + "&sStep=" + encodeURIComponent(k) + "&_=" + Math.random()), e
                },
                getFlashMain: function() {
                    return parseInt(tvp.version.getFlash().split(".")[0], 10)
                }
            }
        }(),
        function(a, b) {
            var c = {
                qqlive: {
                    text1: "\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef",
                    text2: "\u53ef\u89c2\u770b\u66f4\u591a\u89c6\u9891",
                    md5Cgi: "http://mcgi.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                    payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                    scheme: "tenvideo2://",
                    logoClass: "",
                    openUrl: "tenvideo2://?action=5&video_id=${vid}",
                    liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                    ipadDownloadUrl: "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8",
                    iphoneDownloadUrl: "http://itunes.apple.com/cn/app/id458318329?mt=8",
                    aphoneDownloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=140&platform=aphone",
                    VIA: "ANDROIDQQ.QQLIVE",
                    appId: "100730521",
                    downloadId: "TencentVideo",
                    taskName: "TencentVideo",
                    packageName: b.os.iphone ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                    packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme"
                },
                weishi: {
                    text1: "\u5fae\u89c6\u5ba2\u6237\u7aef",
                    text2: "\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69",
                    logoClass: "tvp_download_app_solo_weishi",
                    md5Cgi: "http://www.weishi.com/api/packdata.php?confid=${id}",
                    scheme: b.os.iphone ? " weishiiosscheme://" : "weishiandroidscheme://",
                    openUrl: b.os.iphone ? " weishiiosscheme://detail?tweetid=${id}" : "weishiandroidscheme://detail?tweetid=${id}",
                    iphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                    aphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                    ipadDownloadUrl: "",
                    VIA: "ANDROIDQQ.WEISHI",
                    appId: "1101083114",
                    downloadId: "TencentWeishi",
                    taskName: "TencentWeishi",
                    packageName: b.os.iphone ? "com.tencent.microvision" : "com.tencent.weishi",
                    packageUrl: b.os.iphone ? "weishiiosscheme://can_open_me_if_install_and_regeister_this_scheme" : "weishiandroidscheme://can_open_me_if_install_and_regeister_this_scheme"
                },
                yyb: {
                    packageName: "com.tencent.android.qqdownloader"
                }
            };
            a.app = {
                config: {
                    defaultName: "qqlive",
                    QQApiUrl: "http://pub.idqqimg.com/qqmobile/qqapi.js",
                    mqqApiUrl: "http://res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js"
                },
                loadQQClientDefer: !1,
                loadDownloaderDefer: !1,
                loadMqqDefer: !1,
                getDownloadUrl: function(d, e) {
                    return e = e || a.app.config.defaultName, d = b.os.iphone ? c[e].iphoneDownloadUrl : d || c[e].aphoneDownloadUrl, d = b.os.ipad ? c[e].ipadDownloadUrl : d
                },
                getPayUrl: function(a) {
                    var d = b.formatTpl(c.qqlive.payUrl, {
                        index: a.slice(0, 1),
                        cid: a
                    });
                    return d
                },
                getOpenUrl: function(d) {
                    var e = {},
                        f = !1;
                    if (!d) return f;
                    if (d.appName && d.appName !== a.app.config.defaultName) return f = d.openId ? c[d.appName].openUrl.replace("${id}", d.openId) : c[d.appName].scheme;
                    switch (d.lid ? e.channel_id = d.lid : d.cid ? e.cover_id = d.cid : d.tid ? e.topic_id = d.tid : d.vidArray || !d.vid ? e.video_id = "${vid}" : d.vid && (e.video_id = d.vid), d.vid2 && (e.video_id = d.vid2), d.openType) {
                        case 6:
                            d.cid && (e.action = 1);
                            break;
                        case 2:
                            e.action = d.lid ? 8 : 7;
                            break;
                        case 3:
                            e.action = d.lid ? 8 : d.tid ? 6 : 5;
                            break;
                        case 4:
                            d.cid && (e.action = 1);
                            break;
                        default:
                            e.action = d.lid ? 8 : d.cid ? 1 : 5
                    }
                    if (d.promotionId && (e.from = d.promotionId + "_" + (d.contentId ? d.contentId : "")), e.action = e.action || 5, f = c.qqlive.scheme + "?" + decodeURIComponent(b.param(e)), (d.cid || d.h5Url) && parseInt(d.pay)) {
                        var g = d.cid ? a.app.getPayUrl(d.cid) : d.h5Url;
                        b.os.iphone ? (f = g, d.openUrl = f) : d.version && parseInt(d.version) < 5852 && (f = g)
                    }
                    return f !== g && d.openUrl && (f = b.filterXSS(d.openUrl), f.indexOf("from") < 0 && f.indexOf("?") > -1 && d.promotionId && (f += "&from=" + d.promotionId + "_" + (d.contentId ? d.contentId : ""))), f
                },
                getPackageInfo: function() {
                    return c
                },
                pageType: function() {
                    return b.browser.WeChat ? 1 : b.browser.MQQClient ? 2 : b.browser.MQQ ? 3 : 0
                }(),
                isSupportApp: function() {
                    return b.os.iphone || b.os.ipod || b.os.ipad ? !0 : b.os.android ? !0 : !1
                }(),
                unbindTryOpenAppBanner: function(a) {
                    a ? a.noTryOpen = !0 : ""
                },
                bindTryOpenAppBanner: function(c) {
                    if (c && c.rewriteText && !a.app.pageType) {
                        var d = a.$.os.hasTouch ? "touchend" : "click",
                            e = c.$btn,
                            f = e.attr("data-url"),
                            g = !1,
                            h = function() {
                                var b = navigator.userAgent;
                                return a.$.os.android || a.$.os.ios ? -1 != b.indexOf("qqnews/") ? !1 : a.$.os.android && g ? !1 : /^http|https/g.test(f) ? !1 : !0 : !1
                            };
                        if (!h()) return !1;
                        e.bind("touchend click", function(a) {
                            c.noTryOpen || a.preventDefault()
                        }), d = b.os.ios ? "click" : d, e.bind(d, function() {
                            c.noTryOpen || a.app.tryOpenAppBanner(e)
                        })
                    }
                },
                tryOpenAppBanner: function(b) {
                    if (b.length) {
                        var c = b.attr("href"),
                            d = b.attr("data-url"),
                            e = function() {
                                location.href = c
                            },
                            f = function() {
                                if (a.$.os.android) {
                                    var b = document.createElement("iframe");
                                    b.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", b.src = d, document.body.appendChild(b)
                                } else a.$.os.ios && (location.href = d)
                            };
                        setTimeout(function() {
                            var a = (new Date).valueOf();
                            f(), a = (new Date).valueOf(), setTimeout(function() {
                                var b = (new Date).valueOf();
                                1550 > b - a && e()
                            }, 1500)
                        }, 100)
                    }
                },
                loadMqqAPI: function() {
                    if (a.app.loadMqqDefer) return a.app.loadMqqDefer;
                    var c = b.Deferred();
                    if (a.app.loadMqqDefer = c, window.x5) c.resolve();
                    else {
                        var d = this.config.mqqApiUrl;
                        b.getScript(d, function() {
                            window.x5 ? c.resolve() : c.reject()
                        })
                    }
                    return setTimeout(function() {
                        c.reject()
                    }, 3e3), c
                },
                invokeQQBrowserAPI: function(c) {
                    function d() {
                        if (window.x5 && x5.ios && x5.ios.getMobileAppSupport) {
                            var a = {
                                scheme: c.packageInfo.packageUrl
                            };
                            x5.ios.getMobileAppSupport(a, function(a) {
                                e.resolve(a && 1 == a.isSupportApp ? 1 : 0)
                            }, function() {
                                e.resolve(0)
                            })
                        } else e.resolve(0);
                        setTimeout(function() {
                            e.resolve(0)
                        }, 300)
                    }
                    if (!b.os.iphone && window.QQApi && QQApi.checkAppInstalled) return this.invokeQQClientAPI(c);
                    var e = b.Deferred();
                    if (!b.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var f = window.x5mtt.isApkInstalled('{"packagename": ' + c.packageInfo.packageName + "}");
                        e.resolve(-1 != f ? 1 : 0)
                    } else b.os.iphone && parseInt(b.os.version) > 5 ? a.app.loadMqqAPI().done(function() {
                        d()
                    }).fail(function() {
                        e.resolve(0)
                    }) : e.resolve(0);
                    return setTimeout(function() {
                        e.resolve(0)
                    }, 3e3), e
                },
                getQQBrowserSignKey: function(c, d) {
                    var e = a.app,
                        f = e.pageType,
                        g = new b.Deferred,
                        h = this.loadMqqAPI();
                    return 3 != f ? void g.resolve(0) : (h.done(function() {
                        if (!window.x5 || !a.$.os.ios) return void g.resolve(0);
                        if (!x5.ios || !x5.ios.getBrowserSignature) return void g.resolve(0);
                        var b = {
                            vid: c
                        };
                        d && (b.timestamp = parseInt((new Date).valueOf() / 1e3)), x5.ios.getBrowserSignature(b, function(a) {
                            g.resolve(a && a.key && a.ver && a.platform ? {
                                key: a.key,
                                ver: a.ver,
                                platform: a.platform
                            } : 0)
                        }, function() {
                            g.resolve(0)
                        })
                    }), h.fail(function() {
                        g.resolve(0)
                    }), g)
                },
                loadQQClientAPI: function() {
                    if (a.app.loadQQClientDefer) return a.app.loadQQClientDefer;
                    var c = b.Deferred();
                    if (a.app.loadQQClientDefer = c, window.mqq || window.QQApi) c.resolve();
                    else {
                        var d = this.config.QQApiUrl;
                        b.getScript(d, function() {
                            c.resolve()
                        })
                    }
                    return setTimeout(function() {
                        c.reject()
                    }, 3e3), c
                },
                invokeQQClientAPI: function(a) {
                    function c() {
                        !e && window.QQApi && QQApi.checkAppInstalled ? QQApi.checkAppInstalled(f, function(a) {
                            a && 0 != a ? (a = a.split("."), a = a[a.length - 1], d.resolve(1, a)) : d.resolve(0)
                        }) : window.mqq && mqq.app && mqq.app.isAppInstalled ? mqq.app.isAppInstalled(f, function(a) {
                            d.resolve(a ? 1 : 0)
                        }) : d.resolve(0)
                    }
                    var d = b.Deferred(),
                        e = b.os.iphone,
                        f = e ? a.packageInfo.packageUrl : a.packageInfo.packageName;
                    return this.loadQQClientAPI().done(function() {
                        c()
                    }).fail(function() {
                        d.resolve(0)
                    }), setTimeout(function() {
                        d.resolve(0)
                    }, 5e3), d
                },
                getAppMd5: function(d, e) {
                    d = d || 140, e = e || a.app.config.defaultName;
                    var f = b.Deferred(),
                        g = c[e].md5Cgi.replace("${id}", d);
                    return b.ajax({
                        url: g,
                        dataType: "jsonp"
                    }).then(function(a) {
                        f.resolve(a && a.data ? a.data : a)
                    }), f
                },
                report: function(c, d) {
                    var e = {},
                        d = d && d.curVideo ? d : !1;
                    d && (e = {
                        vid: d.curVideo.getVid() || d.curVideo.getChannelId(),
                        appId: d.config.appid || d.config.appId,
                        contentId: d.config.contentId
                    }), c && (c = b.extend(c, e), a.report(c))
                },
                invokeWeChatAPI: function(a) {
                    var c = b.Deferred(),
                        d = this;
                    return window != top && (WeixinJSBridge = top.WeixinJSBridge), WeixinJSBridge.invoke || c.resolve(0), d.getNetworkTypeInWechat().done(function(b) {
                        a && a.t && a.t.config && (a.t.config.nettype = b)
                    }), b.os.iphone ? WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                        var b = a.err_msg;
                        c.resolve(b.indexOf("get_install_state:yes") > -1 ? 1 : 0)
                    }) : WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                        var b = a.err_msg;
                        if (b.indexOf("get_install_state:yes") > -1) {
                            var d = b.split("yes_"),
                                e = 0;
                            d.length >= 2 && (e = parseInt(d[1], 10)), e = isNaN(e) ? 0 : e, c.resolve(1, e)
                        } else c.resolve(0)
                    }), setTimeout(function() {
                        c.resolve(0)
                    }, 6e3), c
                },
                getNetworkTypeInWechat: function() {
                    var a = b.Deferred();
                    return WeixinJSBridge.invoke("getNetworkType", {}, function(b) {
                        var c = -1;
                        b && b.err_msg && ("network_type:fail" === b.err_msg && (c = 0), "network_type:wifi" === b.err_msg && (c = 1), "network_type:edge" === b.err_msg && (c = 2), "network_type:wwan" === b.err_msg && (c = 3)), a.resolve(c)
                    }), a
                },
                check: function(d) {
                    var e = a.app,
                        f = e.pageType,
                        d = (b.os.iphone, d || {}),
                        g = b.Deferred();
                    if (d.appName = d.appName || a.app.config.defaultName, d.packageInfo = c[d.appName], 1 == f) {
                        var h = window == top ? document : top.document;
                        if (top.WeixinJSBridge) e.invokeWeChatAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        });
                        else try {
                            h.addEventListener("WeixinJSBridgeReady", function() {
                                e.invokeWeChatAPI(d).then(function(a, b) {
                                    g.resolve(e.buildResult(a, d, b))
                                })
                            })
                        } catch (i) {
                            g.resolve(e.buildResult(0, d))
                        }
                    } else if (3 == f) try {
                        e.invokeQQBrowserAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    } else if (2 == f) try {
                        e.invokeQQClientAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    } else g.resolve(e.buildResult(0, d));
                    return g
                },
                loadDownloaderAPI: function() {
                    if (a.app.loadDownloaderDefer) return a.app.loadDownloaderDefer;
                    var c = b.Deferred();
                    a.app.loadDownloaderDefer = c;
                    var d = "";
                    return 1 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickWechat), 2 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickMqq), d || c.reject(), b.downloadClick_wechat || b.downloadClick_mqq ? c.resolve() : (b.getScript(d, function() {
                        c.resolve()
                    }), setTimeout(function() {
                        c.reject()
                    }, 3e3)), c
                },
                checkCanDownloader: function(a, c, d) {
                    function e() {
                        b.downloadClick_wechat && d && b.downloadClick_wechat(d), b.downloadClick_mqq && d && b.downloadClick_mqq(d), f.resolve(1)
                    }
                    var f = b.Deferred();
                    if (b.os.iphone || b.os.ipad || !c || 1 == a) return f.resolve(0), f;
                    var g = !1,
                        h = !1,
                        i = /android/i.test(navigator.userAgent.toLowerCase());
                    return !i || 1 == a || !c.downloader || c.downloadUrl && !c.md5 || !c.downloadUrl && c.md5 ? (f.resolve(0), f) : (b.isArray(c.range) && b.each(c.range, function(a, b) {
                        1 == b && (g = !0), 2 == b && (h = !0)
                    }), c.downloaderCallback || (g = !0, h = !0), b.browser.WeChat && g || b.browser.MQQClient && h ? this.loadDownloaderAPI().done(function() {
                        e()
                    }).fail(function() {
                        f.resolve(0)
                    }) : f.resolve(0), f)
                },
                buildResult: function(c, d, e) {
                    {
                        var f = "",
                            g = this.pageType,
                            h = b.os.iphone;
                        b.os.ipad
                    }
                    d.version = e;
                    var i = a.app.getOpenUrl(d),
                        j = this;
                    return h && !d.openUrl && (1 == g && (i += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1"), 2 == g && (i += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"), 3 == g && (i += "&callback=mqqbrowser%3A%2F%2F&sender=QQ%E6%B5%8F%E8%A7%88%E5%99%A8")), f = 1 == c ? i : b.os.iphone && d.pay && d.cid ? a.app.getPayUrl(d.cid) : j.getDownloadUrl(d.downloadUrl, d.appName), {
                        hasApp: c,
                        pageType: g,
                        os: h,
                        version: e,
                        openUrl: i,
                        liveOpenUrl: i,
                        url: f
                    }
                }
            }
        }(tvp, tvp.$), tvp.PLAYER_DEFINE = {
            LIVE: 1,
            VOD: 2
        }, tvp.defaultConfig = {
            video: null,
            width: 600,
            height: 450,
            autoplay: !1,
            mute: !1,
            volume: 50,
            modId: "mod_player",
            playerid: "",
            coverId: "",
            typeId: 0,
            pic: "",
            type: tvp.PLAYER_DEFINE.VOD,
            playerType: "auto",
            loadingswf: "",
            oid: "",
            share: !0,
            isHtml5UseHLS: "auto",
            isShowDurationLimit: !0,
            isHtml5AutoBuffer: !1,
            isHtml5UseAirPlay: !0,
            isHtml5ControlAlwaysShow: !1,
            html5Preload: "null",
            html5VodUIFeature: ["controlbar", "tips", "title", "meta", "playpause", "progress", "timepanel", "fullscreen", "overlay", "bigben", "posterlayer", "shadow", "promotion", "loadingAd"],
            html5LiveUIFeature: ["controlbar", "tips", "playpause", "fullscreen", "overlay", "posterlayer", "shadow"],
            html5LiveFrontShow: ["liveDownloader"],
            html5FeatureExtJS: {},
            html5ForbiddenUIFeature: [],
            isHtml5UseUI: !0,
            HTML5CSSName: "",
            isHtml5ShowPosterOnStart: !0,
            isHtml5ShowPosterOnEnd: !1,
            isHtml5ShowPosterOnChange: !0,
            isiPhoneShowPosterOnPause: !0,
            isiPhoneShowPlaysinline: !0,
            isHtml5ShowPlayBtnOnPause: !0,
            isHtml5UseFakeFullScreen: !tvp.$.os.ios,
            isIOSVideoOffset: !0,
            isHtml5ShowLoadingAdOnStart: !tvp.$.os.phone,
            isHtml5ShowLoadingAdOnChange: !tvp.$.os.phone,
            specialVideoFileDomain: "",
            flashWmode: "direct",
            vodFlashUrl: "",
            vodFlashType: "TPout",
            vodFlashExtVars: {},
            vodFlashListType: 2,
            vodFlashSkin: "",
            isVodFlashShowCfg: !0,
            isVodFlashShowEnd: !0,
            isVodFlashShowSearchBar: !0,
            isVodFlashShowNextBtn: !0,
            liveFlashUrl: "",
            liveFlashSwfType: "TencentPlayerLive",
            isLiveFlashShowConfigBtn: !0,
            isLiveflashShowFullBtn: !0,
            isLiveFlashShowCfg: !0,
            liveFlashWatermark: "",
            liveFlashAppType: "",
            liveFlashExtVars: {},
            flashVersionTag: "20140714",
            ocxControlBar: "",
            ocxControlHeight: 60,
            ocxSkin: "",
            isOcxShowPauseBtn: !1,
            isOcxHideControl: !1,
            plugins: {
                AppBanner: !1,
                AppRecommend: !1,
                AppDownloadOnPause: !1,
                AppBannerOnPause: !1,
                AppFollow: !1
            },
            pluginUrl: {
                AppBanner: "js/plugins/appbanner.js?v=" + tvp.ts,
                AppFollow: "js/plugins/appfollow.js?v=" + tvp.ts,
                AppRecommend: "js/plugins/apprecommend.js?v=" + tvp.ts,
                AppDownloadOnPause: "js/plugins/appdownloadonpause.js?v=" + tvp.ts,
                AppBannerOnPause: "js/plugins/appbanneronpause.js?v=" + tvp.ts,
                AppDownloadClickWechat: "js/plugins/appdownloadclickwechat.js?v=" + tvp.ts,
                AppDownloadClickMqq: "js/plugins/appdownloadclickmqq.js?v=" + tvp.ts
            },
            cssPath: "http://imgcache.gtimg.cn/tencentvideo_v1/vstyle/mobile/v2/style/",
            pluginCssUrl: {
                AppRecommend: "player_plugins_apprecommend.css?v=" + tvp.ts,
                AppBanner: "player_plugins_appdownloadsolo.css?v=" + tvp.ts,
                AppBannerOnPause: "player_plugins_appdownloadonpause.css?v=" + tvp.ts,
                AppDownloadOnPause: "player_plugins_appdownloadonpause.css?v=" + tvp.ts
            },
            libpath: "http://qzs.qq.com/tencentvideo_v1/tvp/"
        },
        function(a) {
            var b = function(a, c) {
                return function(d, e) {
                    var f = /\s/.test(d) ? function(a) {
                        var b, d = [c],
                            e = [
                                []
                            ];
                        for (b in a) d.push(b), e.push(a[b]);
                        return new Function(d, f.$).apply(a, e).join("")
                    } : a[d] = a[d] || b(document.getElementById(d).innerHTML);
                    return f.$ = f.$ || c + ".push('" + d.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join(c + ".push('").split("\r").join("\\'") + "');return " + c, e ? f(e) : f
                }
            }({}, "$" + +new Date);
            a.tmpl = b
        }(tvp.$),
        function(a) {
            "undefined" == typeof a.getScript && (a.getScript = function(a, b) {
                var c = document.createElement("script"),
                    d = document.getElementsByTagName("head")[0],
                    e = /^(?:loaded|complete|undefined)$/;
                c.async = "async", c.src = a, c.charset = "utf-8", b && (c.onload = c.onerror = c.onreadystatechange = function() {
                    e.test(c.readyState) && (c.onload = c.onerror = c.onreadystatechange = null, window.DEBUG || d.removeChild(c), c = null, b())
                }), d.appendChild(c)
            })
        }(tvp.$), tvp.report = function() {
            function a() {
                return 0 == g.length ? (e = !0, void(f = null)) : (clearTimeout(d), b(g.splice(0, 1)), void(e = !1))
            }

            function b(b) {
                clearTimeout(d), f = document.createElement("img"), f.onerror = a, f.src = b, setTimeout(a, 1e3)
            }

            function c(a) {
                return a && /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i.test(a) ? null == f ? (b(a), void(e = !1)) : e ? (b(a), void(e = !1)) : void g.push(a) : void 0
            }
            var d, e = !0,
                f = null,
                g = [];
            return function(a) {
                if (tvp.$.isString(a)) return void c(a);
                if ("object" == tvp.$.type(a)) {
                    var b, d = {
                            deviceId: "int1",
                            platformId: "int2",
                            appId: "int3",
                            speed: "int4",
                            contentId: "str1",
                            fileName: "str2"
                        },
                        e = {
                            cmd: -1,
                            url: window != top ? document.referrer : document.location.href,
                            ver: tvp.ver.replace(/\$/g, ""),
                            ua: navigator.userAgent,
                            int1: tvp.common.getDeviceId(),
                            int2: tvp.common.getPlatformId(),
                            int3: 0,
                            int4: 0,
                            str1: "",
                            str2: tvp.filename
                        },
                        f = "http://rcgi.video.qq.com/web_report?";
                    for (b in d) b in a && (a[d[b]] = a[b], delete a[b]);
                    a = tvp.$.extend(e, a), f += tvp.$.param(a), c(f)
                }
            }
        }(), tvp.ajax = function(a) {
            function b(a, b) {
                a = a || {}, b = String(b);
                var c, d = /([\d\w_]+)/g;
                for (d.lastIndex = 0; null !== (c = d.exec(b)) && (a = a[c[0]], void 0 !== a && null !== a););
                return a
            }

            function c(a) {
                return a = a.slice(0, a.indexOf("?")), a = a.split("/"), {
                    host: a[2],
                    path: "/" + a.slice(3).join("/")
                }
            }

            function d(a, b, d, e) {
                var f = "http://c.isdspeed.qq.com/code.cgi",
                    g = c(a);
                tvp.report(f, {
                    domain: g.host,
                    cgi: g.path,
                    type: b,
                    code: d,
                    time: e
                })
            }

            function e(c, e) {
                if ("object" == a.type(c) && c.url && "string" == typeof c.url) {
                    "object" == typeof e && (e = a.extend({
                        key: "suc",
                        value: 0
                    }, e));
                    var f = a.Deferred(),
                        g = a.now(),
                        h = 0,
                        i = a.extend({
                            dataType: "jsonp"
                        }, c);
                    return a.ajax(i).done(function(i) {
                        var j = i && "object" == typeof e ? b(i, e.key) : 0;
                        h = a.now() - g, i && "undefined" != typeof j && j == e.value ? (d(c.url, 1, j, h), f.resolve(i, h)) : (d(c.url, 3, j, h), f.resolve(i, h))
                    }).fail(function(b) {
                        h = a.now() - g, d(c.url, 2, 900, h), f.reject(b, h)
                    }), f
                }
            }
            return e
        }(tvp.$), tvp.reportErr = function(a, b) {
            b = b || "tvperror";
            var c = "http://rcgi.video.qq.com/report/jsbossrep?block=" + b + "&ret=-1&level=4&msg=";
            a = [location.href, navigator.userAgent, tvp.filename, tvp.ver, a].join("|"), a = encodeURIComponent(a), c += a, tvp.report(c)
        }, tvp.retCode = {
            snid: 0,
            TYPE: {
                SUC: 1,
                ERR: 2
            },
            config: {
                cgi: "http://isdspeed.qq.com/cgi-bin/v.cgi",
                sampling: 1
            },
            commCode: {
                error: 11,
                MQzone_Err: 12
            },
            report: function(a, b, c, d) {
                if (a && !(isNaN(b) || 1 > b) && "undefined" != typeof c) {
                    var e = this.config.cgi;
                    e += "?flag1=" + a.toString() + "&flag2=" + b.toString() + "&1=" + tvp.retCode.config.sampling + "&2=" + c, d && (e += "&flag3=" + d.toString()), tvp.report(e)
                }
            }
        }, tvp.RetCode = function(a) {
            this.appid = a, this.timer = {
                begin: 0,
                end: 0
            }, this.SNID = tvp.retCode.snid, this.isReported = !1, tvp.retCode.snid++
        }, tvp.RetCode.prototype = {
            begin: function() {
                this.timer.begin = (new Date).valueOf()
            },
            end: function() {
                this.timer.end = this.timer.end || (new Date).valueOf()
            },
            report: function(a, b) {
                if (!this.isReported) {
                    this.end();
                    var c = this.timer.end - this.timer.begin;
                    tvp.retCode.report(this.appid, a, c, b), this.isReported = !0
                }
            },
            reportSuc: function() {
                this.report(tvp.retCode.TYPE.SUC)
            },
            reportErr: function(a) {
                a = a || tvp.retCode.commCode.error, this.report(tvp.retCode.TYPE.ERR, a)
            }
        },
        function(a, b) {
            var c = {
                poster: "",
                prefix: 0,
                tail: 0,
                tagStart: 0,
                tagEnd: 0,
                duration: "",
                historyStart: 0,
                pay: 0,
                eduext: 0,
                coverId: "",
                title: "",
                isLookBack: 0,
                tstart: 0,
                CDNType: 0,
                vFormat: "",
                LiveReTime: "",
                typeId: 0,
                format: b.os.ipad || b.os.MIPAD ? "mp4" : "auto",
                channelExtParam: {},
                pid: "",
                rid: "",
                bulletId: "",
                bullet: !1
            };
            a.VideoInfo = function() {
                function d(a) {
                    return a.indexOf("_") < 0 ? a : a.split("_")[0]
                }

                function e(a) {
                    return a.indexOf("_") < 0 ? 0 : parseInt(a.split("_")[1])
                }

                function f(a) {
                    for (var b = [], c = a.split("|"), e = 0; e < c.length; e++) b.push(d(c[e]));
                    return b.join("|")
                }

                function g() {
                    p && p instanceof a.Player && p.on(a.ACTION.onVodH5Init, function() {
                        var b;
                        "auto" === p.config.isHtml5UseHLS && a.common.isUseHLS() || p.config.isHtml5UseHLS || (b = n.getMP4Url(), n.callGetMp4UrlDefer.resolve(b))
                    })
                }
                var h = "",
                    i = "",
                    j = 0,
                    k = 0,
                    l = "",
                    m = "",
                    n = this,
                    o = {},
                    p = null,
                    q = {},
                    r = null;
                b.extend(o, c), this.data = {}, this.url = "", this.lastQueryVid = "", this.callGetMp4UrlDefer = b.Deferred(), b.each(o, function(a) {
                    !new function() {
                        var b = a.charAt(0).toUpperCase() + a.substr(1);
                        n["set" + b] = function(b) {
                            return o[a] = b, this
                        }, n["get" + b] = function() {
                            return o[a]
                        }
                    }
                }), this.setCurPlayer = function(a) {
                    p = a, g()
                }, this.setVid = function(c) {
                    if (a.$.isString(c)) {
                        if (this.clear(), l = c, c.indexOf("|") < 0) {
                            var g = d(c);
                            h = g, k = e(c), i = g
                        } else {
                            var j = c.split("|");
                            h = d(j[0]), k = e(j[0]), i = f(c)
                        }
                        return h = b.filterXSS(h), i = b.filterXSS(i), this
                    }
                }, this.getVid = function() {
                    return h
                }, this.getVidList = function() {
                    return i
                }, this.getVidArray = function() {
                    return i.split("|")
                }, this.getIdx = function() {
                    return k
                }, this.getDuration = function() {
                    if (!o.duration) return this.data && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 && 0 != this.data.vl.vi[0].td ? this.data.vl.vi[0].td : 0;
                    for (var a = o.duration.split("|"), c = 0, d = 0, e = a.length; e > d; d++) c += parseInt(a[d]);
                    return c
                }, this.getFileSize = function() {
                    return this.data && this.data.vl && this.data.vl.vi && this.data.vl.vi[0] && this.data.vl.vi[0].fs ? parseInt(this.data.vl.vi[0].fs, 10) : 0
                }, this.getTimelong = function() {
                    return this.getDuration()
                }, this.getEndOffset = function() {
                    return this.getDuration() - this.getTail()
                }, this.setChannelId = function(b) {
                    return a.$.isString(b) ? (m = b, this) : void 0
                }, this.getChannelId = function() {
                    return m
                }, this.getFullVid = function() {
                    return 0 == this.getIdx() ? d(this.getVid()) : d(this.getVid()) + "_" + this.getIdx()
                }, this.getTitle = function() {
                    return "" === o.title && this.data && ("mp4" == this.data.playtype && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 ? o.title = this.data.vl.vi[0].ti || "" : "hls" == this.data.playtype && b.isArray(this.data.vi) && this.data.vi.length > 0 && (o.title = this.data.vi[0].title || "")), o.title
                }, this.clear = function() {
                    h = "", i = "", j = 0, k = 0, m = "", r = null, q = {}, b.extend(o, c), this.data = {}, this.url = ""
                }, this.clone = function(a) {
                    a.setVid(l), a.setChannelId(m);
                    for (var c in o) {
                        var d = c.charAt(0).toUpperCase() + c.substr(1);
                        a["set" + d](this["get" + d]())
                    }
                    b.extend(a.data, this.data)
                }, this.getVideoSnap = function() {
                    var b = [];
                    return b[0] = a.common.getVideoSnap(h, k), b[1] = b[0].replace("_160_90_3", "_1"), b[2] = b[1].replace("_1.jpg", ".png"), b
                }, this.getMP4Url = function(c) {
                    var d = "",
                        e = this.getVidArray(),
                        f = "";
                    if (b.isString(c)) {
                        if (d = c, b.inArray(c, e) < 0) {
                            var g = b.Deferred();
                            return g.reject(), g
                        }
                    } else isNaN(c) ? (d = this.getVid(), f = this.getFullVid()) : f = d = this.getVidArray()[c >= e.length ? 0 : c];
                    this.lastQueryVid = f || d, this.setRid(b.createGUID());
                    var h = d + "_mp4_" + this.getFormat();
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadVideoUrlByVid({
                        vid: d,
                        isPay: this.getPay(),
                        eduext: o.eduext ? o.eduext : 0,
                        fmt: this.getFormat(),
                        appId: p instanceof a.Player ? p.config.appid : 0,
                        contentId: p instanceof a.Player ? p.config.contentId : ""
                    }).done(function(a, b) {
                        i.url = a, i.data = b, i.data.playtype = "mp4", q[h] && q[h].resolve(a)
                    }).fail(function(a, c) {
                        q[h] && q[h].reject(a, b.isUndefined(c) ? 0 : c)
                    }), q[h]
                }, this.getHLS = function(c) {
                    var d = "",
                        e = this.getVidArray(),
                        f = "";
                    if (b.isString(c)) {
                        if (d = c, b.inArray(c, e) < 0) {
                            var g = b.Deferred();
                            return g.reject(), g
                        }
                    } else isNaN(c) ? (d = this.getVid(), f = this.getFullVid()) : f = d = this.getVidArray()[c >= e.length ? 0 : c];
                    this.lastQueryVid = f || d, this.setRid(b.createGUID());
                    var h = d + "_hls_" + this.getFormat();
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadHLSUrlByVid({
                        vid: d,
                        isPay: this.getPay(),
                        fmt: this.getFormat(),
                        appId: p instanceof a.Player ? p.config.appid : 0,
                        contentId: p instanceof a.Player ? p.config.contentId : ""
                    }).done(function(a, b) {
                        i.url = a, i.data = b, i.data.playtype = "hls", q[h] && q[h].resolve(a)
                    }).fail(function(a, c) {
                        q[h] && q[h].reject(a, b.isUndefined(c) ? 0 : c)
                    }), q[h]
                }, this.getPlayFormat = function() {
                    if (!b.isPlainObject(this.data)) return this.getFormat();
                    if ("object" == b.type(this.data.fl) && b.isArray(this.data.fl.fi))
                        for (var a = this.data.fl.fi, c = 0; c < a.length; c++)
                            if (1 == a[c].sl) return a[c].name;
                    return this.getFormat()
                }, this.getSrtLangList = function() {
                    return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) ? (b.each(this.data.sfl.fi, function(b, c) {
                        c.desc = a.html5lang.getSrtName(c.id)
                    }), this.data.sfl.fi) : []
                }, this.getSrtUrlList = function(c) {
                    if (b.isUndefined(c)) {
                        var d = this.getSrtLangList();
                        if (!(d.length > 0)) return b.Deferred().reject(-1);
                        c = d[0]
                    }
                    if ("object" != b.type(c) && !isNaN(c)) {
                        for (var e = 0, f = this.data.sfl.fi.length; f > e; e++)
                            if (this.data.sfl.fi[e].id == c) {
                                c = this.data.sfl.fi[e];
                                break
                            }
                        if ("object" != b.type(c)) return b.Deferred().reject(-2)
                    }
                    var g = this.getVid(),
                        h = g + "_srt_" + c.id;
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadSRT({
                        vid: g,
                        sflid: c.id,
                        pid: i.getPid()
                    }).done(function(a) {
                        var d = [];
                        "object" == b.type(a.ul) && b.isArray(a.ul.ui) && b.each(a.ul.ui, function(a, b) {
                            d.push([b.url, "lang=" + c.name].join("?"))
                        }), q[h].resolve(d)
                    }).fail(function(a) {
                        q[h].reject(a)
                    }), q[h]
                }, this.getFormatList = function() {
                    if ("object" == b.type(r) && b.isFunction(r.done)) return r;
                    r = b.Deferred();
                    var a = this,
                        c = ["mp4", "msd"],
                        d = function() {
                            var d = [];
                            return b.isPlainObject(a.data.fl) && b.isArray(a.data.fl.fi) ? (b.each(a.data.fl.fi, function(a, e) {
                                -1 != b.inArray(e.name, c) && d.push(e.name)
                            }), d) : []
                        };
                    return this.getMP4Url().done(function() {
                        r.resolve({
                            list: d()
                        })
                    }).fail(function() {
                        r.reject({
                            list: []
                        })
                    }), r
                }, this.hasHardSubtitle = function() {
                    for (var a = video.getFormat(), b = 0, c = this.data.fl.fi.length; c > b; b++) {
                        var d = this.data.fl.fi[b];
                        if (d.name == a) return !!d.sb
                    }
                    return !1
                }, this.hasSoftSubtitle = function() {
                    return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) && this.data.sfl.fi.length > 0
                }
            }, a.PLAYTYPE = {
                LIVE: "1",
                VOD: "2"
            }
        }(tvp, tvp.$),
        function(a) {
            tvp.speedlimit = {
                buildResult: function(b) {
                    var c = !1,
                        d = !1,
                        e = a.Deferred();
                    return a.browser.MQQ && a.browser.version > 5.1 && (d = !0), d && this.mqqGetResult(b).then(function(a) {
                        a ? e.resolve(a) : e.resolve()
                    }), d && (c = !0), c || e.resolve(), setTimeout(function() {
                        e.resolve()
                    }, 3e3), e
                },
                mqqGetResult: function(b) {
                    function c() {
                        if (window.x5 && window.x5.getBrowserSignature) try {
                            var c = parseInt(tvp.$.now() / 1e3, 10);
                            x5.getBrowserSignature("vid:" + b + "[" + c + "]", function(b) {
                                b ? d.resolve({
                                    bver: a.browser.version,
                                    pkckey: b
                                }) : d.resolve()
                            }, function() {
                                d.resolve()
                            })
                        } catch (e) {
                            d.resolve()
                        } else d.resolve();
                        setTimeout(function() {
                            d.resolve()
                        }, 300)
                    }
                    var d = a.Deferred();
                    return window.x5 && window.x5.getBrowserSignature ? c() : tvp.app ? (tvp.app.loadMqqDefer || (tvp.app.loadMqqDefer = tvp.app.loadMqqAPI()), tvp.app.loadMqqDefer.done(function() {
                        c()
                    }), tvp.app.loadMqqDefer.fail(function() {
                        d.resolve()
                    })) : d.resolve(), d
                }
            }
        }(tvp.$);
    var Qvsec = {};
    Qvsec.ha = function(a) {
            function b(a, b) {
                return ((a >> 1) + (b >> 1) << 1) + (1 & a) + (1 & b)
            }
            for (var c = [], d = 0; 64 > d;) c[d] = 0 | 4294967296 * Math.abs(Math.sin(++d));
            var e = function(d) {
                for (var e, f, g, h, i = [], j = unescape(encodeURI(d)), k = j.length, l = [e = 1732584193, f = -271733879, ~e, ~f], m = 0; k >= m;) i[m >> 2] |= (j.charCodeAt(m) || 128) << 8 * (m++ % 4);
                for (i[d = (k + 8 >> 6) * a + 14] = 8 * k, m = 0; d > m; m += a) {
                    for (k = l, h = 0; 64 > h;) k = [g = k[3], b(e = k[1], (g = b(b(k[0], [e & (f = k[2]) | ~e & g, g & e | ~g & f, e ^ f ^ g, f ^ (e | ~g)][k = h >> 4]), b(c[h], i[[h, 5 * h + 1, 3 * h + 5, 7 * h][k] % a + m]))) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, a, 23, 6, 10, 15, 21][4 * k + h++ % 4]) | g >>> 32 - k), e, f];
                    for (h = 4; h;) l[--h] = b(l[h], k[h])
                }
                for (d = ""; 32 > h;) d += (l[h >> 3] >> 4 * (1 ^ 7 & h++) & 15).toString(a);
                return d
            };
            return e
        }(16), Qvsec.stringToHex = function(a) {
            for (var b = "", c = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), d = 0; d < a.length; d++) b += c[a.charCodeAt(d) >> 4] + c[15 & a.charCodeAt(d)];
            return b
        }, Qvsec.hexToString = function(a) {
            for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2) b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
            return b
        }, Qvsec._Seed = "#$#@#*ad", Qvsec.tempcalc = function(a, b) {
            for (var c = "", d = 0; d < a.length; d++) c += String.fromCharCode(a.charCodeAt(d) ^ b.charCodeAt(d % 4));
            return c
        }, Qvsec.u1 = function(a, b) {
            for (var c = "", d = b; d < a.length; d += 2) c += a.charAt(d);
            return c
        }, Qvsec._urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Qvsec.urlenc = function(a, b, c) {
            for (var d, e, f, g, h, i, j, k = "", l = 0; l < a.length;) d = a.charCodeAt(l++), e = a.charCodeAt(l++), f = a.charCodeAt(l++), 15 == l && (k += "A", k += b, k += c), g = d >> 2, h = (3 & d) << 4 | e >> 4, i = (15 & e) << 2 | f >> 6, j = 63 & f, isNaN(e) ? i = j = 64 : isNaN(f) && (j = 64), k = k + Qvsec._urlStr.charAt(g) + Qvsec._urlStr.charAt(h) + Qvsec._urlStr.charAt(i) + Qvsec._urlStr.charAt(j);
            return k
        }, Qvsec.$xx = function(a, b, c, d) {
            var e = "" + Math.floor((new Date).valueOf() / 1e3),
                d = ("" + d).charAt(0),
                f = "",
                g = "",
                h = {
                    plt: a || "",
                    vid: b || "",
                    std: c || "",
                    sts: d || "",
                    ts: e,
                    rf: f,
                    ua: g
                };
            h = window.JSON ? JSON.stringify(h) : function() {
                var a = [];
                for (var b in h) a.push('"' + b + '":"' + h[b] + '"');
                return "{" + a.join(",") + "}"
            }(h);
            var i = Qvsec.hexToString(Qvsec.ha(a + b + e + Qvsec._Seed + f + g + d.charAt(0) + c)),
                j = Qvsec.urlenc(Qvsec.tempcalc(i, Qvsec._Seed), d.charAt(0), e),
                k = Qvsec.urlenc(Qvsec.tempcalc(i, "86FG@hdf"), d.charAt(0), e),
                l = Qvsec.u1(j, 0),
                m = Qvsec.u1(j, 1);
            return {
                p: h,
                u: j,
                c: k,
                u1: l,
                u2: m,
                t: e
            }
        },
        function(a, b) {
            function c() {
                var a = "view.inews.qq.com" === i.host;
                return b.os.iphone || b.os.ipod ? a ? "v3110" : "v3010" : b.os.ipad ? a ? "v4110" : "v4010" : b.os.android ? b.os.tablet ? "v6010" : a ? "v5110" : "v5010" : b.browser.IEMobile ? "v7010" : "v1010"
            }

            function d(a, b) {
                for (var c = 0, d = b.length; d > c; c++)
                    if (1 == b[c].sl) return b[c].id;
                return -1
            }

            function e(c) {
                var d = {
                    cmd: 3532,
                    speed: 0,
                    appId: 0,
                    contentId: "",
                    vid: "",
                    itype: 1,
                    val: 0,
                    val2: 0,
                    str3: ""
                };
                c = b.extend(d, c), a.report(c)
            }

            function f(a) {
                a = a || {};
                var d, e = !1;
                return a.alias && "string" == typeof a.fn && a.vid && (a.fn = a.fn.replace(a.vid, a.alias), e = !0), j && "string" == typeof a.path && (a.path = a.path.replace(/\/\/(.+?)(\/|#|$|\?)/, function() {
                    return arguments.length > 1 ? arguments[0].replace(arguments[1], j) : arguments[0]
                })), d = a.path.indexOf("?") > -1 ? a.path + "&" + a.fn + "&vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c() : a.path + a.fn + "?vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c(), b.isString(a.sha) && a.sha.length > 0 && (d += "&sha=" + a.sha), e && (d += "&vidalias=1"), d
            }

            function g(a) {
                return function(c) {
                    e(b.extend(a, c))
                }
            }

            function h(d) {
                var e, f, g, h = "",
                    i = 1,
                    j = {};
                if ("object" == typeof Qvsec && "function" == typeof Qvsec.$xx && "string" == typeof d) {
                    e = b.getUrlParam("platform", d), f = b.getUrlParam("vids", d), g = c();
                    try {
                        j = Qvsec.$xx(e, f, g, i)
                    } catch (k) {
                        "function" == typeof a.reportErr && k && k.message && a.reportErr(k.message)
                    }
                    j && (h = h + "&_qv_rmt=" + j.u1, h = h + "&_qv_rmt2=" + j.u2, h = h + "&sdtfrom=" + g, d = d + (-1 == d.indexOf("?") ? "?" : "&") + h, b.cookie.set("qv_als", j.c))
                }
                return d
            }
            var i = {
                    isHLS: !1,
                    isPay: !1,
                    vid: "",
                    fmt: "auto",
                    platform: 11001,
                    host: window != top ? document.referrer : document.location.host
                },
                j = "";
            i.cgi = function() {
                if ("view.inews.qq.com" === i.host) {
                    var a = "";
                    return b.browser.WeChat && (a = "nocache=1&"), {
                        getinfo: "http://h5wx.video.qq.com/getinfo?callback=?&",
                        getkey: "http://h5wx.video.qq.com/getkey?callback=?&" + a
                    }
                }
                return {
                    getinfo: "http://h5vv.video.qq.com/getinfo?callback=?&",
                    edugetvinfo: "http://sv.video.qq.com/edugetvinfo?",
                    getkey: "http://h5vv.video.qq.com/getkey?callback=?&"
                }
            }(), i.retryCgi = function() {
                return b.browser.WeChat || b.browser.MQQClient ? {
                    getinfo: i.cgi.getinfo.replace(/(\/\/)(.+?)(\/|$)/, "$1bkh5vv.video.qq.com$3"),
                    getkey: i.cgi.getkey.replace(/(\/\/)(.+?)(\/|$)/, "$1bkh5vv.video.qq.com$3")
                } : {
                    getinfo: i.cgi.getinfo.replace(/(\/\/)(.+?)(\/|$)/, "$1bkh5vv.video.qq.com$3"),
                    getkey: i.cgi.getkey.replace(/(\/\/)(.+?)(\/|$)/, "$1bkh5vv.video.qq.com$3")
                }
            }(), a.h5Helper = {
                loadVideoUrlByVid: function(c) {
                    var d = "";
                    return a.speedlimit ? (d = b.Deferred(), a.speedlimit.buildResult().done(function(b) {
                        var e = a.h5Helper.loadVideoUrlByVid_base(c, b);
                        e.done(function(a, b) {
                            d.resolve(a, b)
                        }), e.fail(function(a, b) {
                            d.reject(a, b)
                        })
                    })) : d = a.h5Helper.loadVideoUrlByVid_base(c), d
                },
                loadVideoUrlByVid_base: function(e, j) {
                    var k = {},
                        l = {},
                        m = b.Deferred();
                    b.extend(b.extend(k, i), e);
                    var n = new a.RetCode(100126),
                        o = !1,
                        p = i.cgi.getinfo,
                        q = b.now(),
                        r = 0,
                        s = "",
                        t = b.noop,
                        u = i.cgi.getkey;
                    e.eduext && (p = i.cgi.edugetvinfo);
                    var v, w = !1,
                        x = {};
                    if (e.defer && (m = e.defer), e && !e.noAuth) {
                        v = a.common.getParams(location.href);
                        var y = "v.qq.com" === location.hostname && "/iframe/player.html" === location.pathname;
                        y && v && v.cKey && v.encryptVer && v.platform && (w = !0)
                    }
                    e.retryDefer && b.isFunction(e.retryDefer.reject) && (o = !0, m = e.retryDefer, p = i.retryCgi.getinfo, u = i.retryCgi.getkey), e.loadingAdCgi && (p = e.loadingAdCgi), x = {
                        platform: k.platform,
                        charge: k.isPay ? 1 : 0,
                        otype: "json",
                        sb: 1,
                        nocache: b.browser.MQQClient || b.browser.WeChat ? 1 : 0,
                        _rnd: (new Date).valueOf()
                    }, e.eduext ? b.extend(x, {
                        eduext: e.eduext,
                        platform: 261001,
                        vid: k.vid,
                        defn: k.fmt
                    }) : b.extend(x, {
                        vids: k.vid,
                        defaultfmt: k.fmt
                    }), t = g({
                        itype: 1,
                        val2: o ? 1 : 0,
                        str3: s,
                        vid: k.vid,
                        appId: k.appId,
                        contentId: k.contentId
                    }), n.begin(), t();
                    var z = function(a) {
                            var d, g = 0,
                                h = void 0;
                            return r = b.now() - q, a && a.s ? "o" != a.s ? (g = a.em || 50, h = a.exem) : a.vl && a.vl.vi && b.isArray(a.vl.vi) && 0 != a.vl.cnt ? d = a.vl.vi[0] : g = 68 : g = 50, 0 != g || 5 == d.fst && b.isPlainObject(d.ul) && b.isArray(d.ul.ui) && 0 != d.ul.ui.length ? 0 == g && 2 != d.st && (8 != d.st ? g = 62 : (g = 83, h = d.ch)) : g = 62, 0 != g ? (t({
                                val: g,
                                speed: r
                            }), n.reportErr(g), void m.reject(g, h)) : (n.reportSuc(), t({
                                val: 0,
                                speed: r
                            }), e.loadingAdCgi ? void m.resolve(d.ul.ui[0].url, {
                                vl: a.vl,
                                fl: a.fl,
                                sfl: a.sfl,
                                exem: a.exem,
                                preview: a.preview
                            }) : d.fvkey ? (h = f({
                                path: d.ul.ui[0].url,
                                fn: d.fn,
                                vkey: d.fvkey,
                                br: d.br,
                                platform: 2,
                                fmt: k.fmt,
                                level: d.level,
                                sdtfrom: c(),
                                sha: d.fsha,
                                vid: k.vid,
                                alias: d.alias
                            }), void m.resolve(h, {
                                vl: a.vl,
                                fl: a.fl,
                                sfl: a.sfl,
                                exem: a.exem,
                                preview: a.preview
                            })) : void A())
                        },
                        A = function() {
                            var i, j = vi.ul.ui[0];
                            l.br = vi.br, l.path = j.url, l.fn = vi.fn, l.fiid = d(k, infojson.fl.fi), l.vt = j.vt, i = new a.RetCode(100127), i.begin(), q = b.now(), s = u + b.param({
                                otype: "json",
                                vid: k.vid,
                                format: l.fiid,
                                filename: l.fn,
                                platform: k.platform,
                                vt: l.vt,
                                charge: k.isPay ? 1 : 0,
                                _rnd: (new Date).valueOf()
                            }), s = h(s), t = g({
                                itype: 2,
                                val2: o ? 1 : 0,
                                str3: s,
                                vid: k.vid,
                                appId: k.appId,
                                contentId: k.contentId
                            }), t(), b.ajax({
                                url: s,
                                dataType: "jsonp"
                            }).done(function(a) {
                                var d = "";
                                return iRetCode = 0, r = b.now() - q, a && a.s ? "o" != a.s && (iRetCode = a.em || 50) : iRetCode = 50, 0 != iRetCode ? (i.reportErr(iRetCode), t({
                                    val: iRetCode,
                                    speed: r
                                }), void m.reject(iRetCode)) : (d = f({
                                    path: l.path,
                                    fn: l.fn,
                                    vkey: a.key,
                                    br: l.br,
                                    platform: 2,
                                    fmt: k.fmt,
                                    level: a.level,
                                    sdtfrom: c(),
                                    sha: a.sha,
                                    vid: k.vid,
                                    alias: vi.alias
                                }), i.reportSuc(), t({
                                    val: 0,
                                    speed: r
                                }), void m.resolve(d, {
                                    vl: infojson.vl,
                                    fl: infojson.fl,
                                    sfl: infojson.sfl,
                                    exem: infojson.exem,
                                    preview: infojson.preview
                                }))
                            }).fail(function() {
                                i.reportErr(), t({
                                    val: 500,
                                    speed: b.now() - q
                                }), o ? m.reject(500, 2) : (e.retryDefer = m, a.h5Helper.loadVideoUrlByVid(e))
                            })
                        },
                        B = function() {
                            s = p + b.param(x), j && "object" === b.type(j) && (s += "&" + b.param(j)), s = h(s), b.ajax({
                                url: s,
                                dataType: "jsonp"
                            }).done(function(b) {
                                return !e.noAuth && b && 0 != b.em && "o" != b.s ? 85 === b.em && -3 === b.type && 1 === e.qbAuthTimes ? (e.qbAuthTimes += 1, e.defer = m, e.needTime = !0, void a.h5Helper.loadVideoUrlByVid(e)) : (e.noAuth = !0, e.defer = m, void a.h5Helper.loadVideoUrlByVid(e)) : void z(b)
                            }).fail(function() {
                                n.reportErr(), t({
                                    val: 500,
                                    speed: b.now() - q
                                }), o ? m.reject(500, 1) : (e.noAuth = !0, e.retryDefer = m, a.h5Helper.loadVideoUrlByVid(e))
                            })
                        };
                    if (e.noAuth) return B(), m;
                    var C = a.app.pageType,
                        D = window !== top;
                    return 3 !== C || D ? w && v ? (b.extend(x, {
                        platform: v.platform,
                        cKey: v.cKey,
                        encryptVer: v.encryptVer
                    }), "61001" === v.platform.toString() && window.parent !== window && window.parent.location && window.parent.location.href && (x.wxrefer = window.parent.location.href), B()) : B() : (e.qbAuthTimes || (e.qbAuthTimes = 1), a.app.getQQBrowserSignKey(k.vid, e.needTime).done(function(a) {
                        a && b.extend(x, {
                            platform: a.platform,
                            cKey: a.key,
                            encryptVer: a.ver
                        }), B()
                    })), m
                },
                loadHDVideoUrlByVid: function(b) {
                    b.fmt = "mp4", a.h5Helper.loadVideoUrlByVid(b)
                },
                loadHLSUrlByVid: function(c) {
                    var d = {},
                        e = b.Deferred();
                    b.extend(b.extend(d, i), c);
                    var f = new a.RetCode(100128),
                        j = "http://h5vv.video.qq.com/gethls?callback=?&" + b.param({
                            vid: d.vid,
                            charge: d.isPay ? 1 : 0,
                            otype: "json",
                            platform: d.platform,
                            _rnd: (new Date).valueOf()
                        }),
                        k = g({
                            itype: 3,
                            str3: j,
                            vid: d.vid,
                            appId: d.appId,
                            contentId: d.contentId
                        }),
                        l = b.now();
                    return j = h(j), k(), f.begin(), b.ajax({
                        url: j,
                        dataType: "jsonp"
                    }).done(function(c) {
                        if (!c || !c.s) return f.reportErr(50), k({
                            speed: b.now() - l,
                            val: 50
                        }), void e.reject(50);
                        if ("o" != c.s) return f.reportErr(c.em || 50), k({
                            speed: b.now() - l,
                            val: c.em || 50
                        }), void e.reject(c.em || 50);
                        if (!c.vd || !c.vd.vi || !a.$.isArray(c.vd.vi)) return f.reportErr(68), k({
                            speed: b.now() - l,
                            val: 68
                        }), void e.reject(68);
                        for (var d = [], g = -2, h = 0; h < c.vd.vi.length; h++)
                            if (g = c.vd.vi[h].ch, 2 == c.vd.vi[h].st) {
                                var i = c.vd.vi[h].url.toLowerCase();
                                if (!(i.indexOf(".mp4") < 0 && i.indexOf(".m3u8") < 0) && c.vd.vi[h].url) {
                                    var j = c.vd.vi[h];
                                    d.push(j.url);
                                    break
                                }
                            }
                        return 0 == d.length ? (f.reportErr(68), k({
                            speed: b.now() - l,
                            val: 68
                        }), void e.reject(68, g)) : (k({
                            speed: b.now() - l,
                            val: 0
                        }), f.reportSuc(), void e.resolve(d[0], c.vd))
                    }).fail(function() {
                        f.reportErr(), k({
                            speed: b.now() - l,
                            val: 500
                        }), e.reject(500, 3)
                    }), e
                },
                load3GVideoUrl: function(b) {
                    b.fmt = "msd", a.h5Helper.loadVideoUrlByVid(b)
                },
                loadIsUseHLS: function(c) {
                    var d = {},
                        e = b.Deferred();
                    b.extend(b.extend(d, i), c);
                    var f = new a.RetCode(100125);
                    return f.begin(), b.ajax({
                        url: "http://h5vv.video.qq.com/getdtype?callback=?&" + b.param({
                            vids: d.vid,
                            platform: d.platform,
                            otype: "json",
                            _rnd: (new Date).valueOf()
                        }),
                        dataType: "jsonp"
                    }).done(function(a) {
                        var d = 1;
                        if ("object" != b.type(a)) return f.reportErr(), void e.reject(500, 4);
                        if ("o" != a.s || !b.isArray(a.dl) || 0 == a.dl.length) return f.reportErr(a.em), void e.reject(a.em || 50);
                        for (var g = 0, h = a.dl.length; h > g; g++) a.dl[g].vid === c.vid && (d = a.dl[g].dltype);
                        f.reportSuc(), e.resolve(d, a)
                    }).fail(function() {
                        f.reportErr(), e.reject(500, 4)
                    }), e
                },
                loadSRT: function(a) {
                    var c = {},
                        d = b.Deferred();
                    return b.extend(b.extend(c, i), a), b.ajax({
                        url: "http://h5vv.video.qq.com/getsurl?" + b.param({
                            vid: c.vid,
                            format: c.sflid,
                            platform: c.platform,
                            pid: c.pid,
                            otype: "json",
                            _rnd: (new Date).valueOf()
                        }),
                        dataType: "jsonp"
                    }).done(function(a) {
                        return "object" != b.type(a) ? void d.reject(500) : "o" != a.s ? void d.reject(isNaN(a.em) ? 500 : a.em, a.msg || "") : void d.resolve(a)
                    }).fail(function() {
                        d.reject(500)
                    }), d
                },
                setSpecialVideoFileDomain: function(a) {
                    "string" == typeof a && /^(\S+[\.])?qq\.com/.test(location.host) && (j = a)
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            a.BasePlayer = function() {
                var c = {};
                this.modId = "", this.sessionId = "", this.$mod = null, this.videomod = null, this.playerid = "", this.curVideo = null, this.instance = null, this.dataset = {}, this.eventList = ["inited", "play", "playing", "ended", "allended", "pause", "resume", "timeupdate", "getnext", "error", "stop", "fullscreen", "change", "write", "flashpopup", "getnextenable", "msg", "h5loadingadstart", "h5loadingadend"], this.config = {}, this.hijackFun = ["getPlayer", "getCurVideo", "showPlayer", "hidePlayer", "play", "pause", "getPlaytime", "setPlaytime", "getPlayerType", "resize"], this.prototype = {},
                    function(b) {
                        var c = ["init", "addParam", "write", "setPlayerReady"];
                        c = c.concat(b.hijackFun);
                        for (var d = 0, e = c.length; e > d; d++) b.prototype[c[d]] = a.$.noop
                    }(this), this.addParam = function(a, b) {
                        this.config[a] = b
                    }, this.on = function(a, d) {
                        a && b.isFunction(d) && (c[a] = b.isArray(c[a]) ? c[a] : [], c[a].push(d))
                    }, this.trigger = function(a) {
                        var d, e, f;
                        if (a && b.isArray(c[a]))
                            for (e = 0, f = c[a].length; f > e; e++) b.isFunction(c[a][e]) && (d = Array.prototype.slice.call(arguments, 1), c[a][e].apply(null, d))
                    }, this.off = function(a, d) {
                        var e;
                        a && b.isArray(c[a]) && (d ? (e = b.inArray(d, c[a]), e >= 0 && (c[a][e] = void 0)) : c[a] = void 0)
                    }
            }, a.BasePlayer.prototype = {
                setCurVideo: function(a) {
                    this.curVideo = a
                },
                getPlayer: function() {
                    return null
                },
                getCurVideo: function() {
                    return this.curVideo
                },
                getCurVid: function() {
                    return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : ""
                },
                getCurVidList: function() {
                    return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVidList() : ""
                },
                init: function(c) {
                    b.extend(this.config, c);
                    for (var d = 0, e = this.eventList.length; e > d; d++) {
                        var f = "on" + this.eventList[d];
                        this[f] = b.isFunction(this.config[f]) ? this.config[f] : a.$.noop
                    }
                    this.setCurVideo(this.config.video), this.write(this.config.modId)
                },
                write: function(a) {
                    b("#" + a).html("here is player of base")
                },
                log: function(a) {
                    window.console && window.console.log(a)
                },
                getCBEvent: function(c) {
                    var d = void 0;
                    return this.instance && b.isFunction(this.instance[c]) && this.instance[c] != a.$.noop ? d = this.instance[c] : b.isFunction(this[c]) && this[c] != a.$.noop && (d = this[c]), d
                },
                callCBEvent: function(a) {
                    var c = this.getCBEvent(a);
                    if (b.isFunction(c)) {
                        var d = Array.prototype.slice.call(arguments, 1);
                        return c.apply(this, d)
                    }
                    return void 0
                },
                resize: function(a, c) {
                    var d = this.getPlayer();
                    d && (d.style.width = b.formatSize(a), d.style.height = b.formatSize(c))
                },
                showPlayer: function() {
                    return
                },
                hidePlayer: function() {
                    return
                },
                execFlashMethod: function(a) {
                    var b, c = this.getPlayer(),
                        d = [];
                    if (c && c[a]) {
                        d = [].slice.call(arguments, 1);
                        try {
                            return b = c[a].apply(c, d)
                        } catch (e) {}
                    }
                }
            }
        }(tvp, tvp.$), tvp = tvp || {};
    var QQLive = QQLive || {
            ver: "$Rev: 70497 $",
            curSSO: "",
            lastmodify: "$Date: 2015-02-12 22:27:53 +0800 (四, 2015-02-12) $"
        },
        QQLiveSetup = QQLive;
    QQLive.log = tvp.log, QQLive.debug = function(a) {
        var b = "";
        if (a.indexOf("[") < 0 && arguments && arguments.callee && arguments.callee.caller) {
            var c = arguments.callee.caller;
            b = QQLive.debug.getFunName(c)
        }
        a = b ? "[" + b + "]:" + a : a, -1 === tvp.log.isDebug && (tvp.log.isDebug = "true" == tvp.$.getUrlParam("debug") ? 1 : 0), tvp.log.isDebug && ("undefined" != typeof __TenVideo_OCX_CTRL_PAGE__ ? QQLive.driverPage.sendMsg(QQLive.DEFINE.MSG.DRVPG_EVT_DEBUGLOG, encodeURIComponent(a)) : tvp.log(a))
    }, QQLive.debug.getFunName = function(a) {
        if ("function" == typeof a || "object" == typeof a) var b = ("" + a).match(/function\s*([\w\$]*)\s*\(/);
        return b && b[1]
    }, QQLive.config = {
        OLD_MIN_VER: "8.22.5275.0",
        IE_MIN_VER: "8.45.6526.0",
        FF_MIN_VER: "8.45.6526.0",
        CHROME_MIN_VER: "8.45.6526.0",
        STARTUP_MIN_VER: "8.14.4895.0",
        IE_FLASH_MIN_VER: "9.0.124.0",
        FF_FLASH_MIN_VER: "10.0",
        FLASH_CAB: "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0",
        MEDIAPLAYER_DOWNLOAD_URL: "http://dl_dir.qq.com/qqtv/QQLive8.46.6680.0.exe",
        PROGID_QQLIVE_INSTALLER: "QQLiveInstaller.InstallHelper.1",
        PROGID_QQLIVE_LIVEAPI: "QQLive.Application",
        MMINSTALL_CLSID: "1DABF8D5-8430-4985-9B7F-A30E53D709B3",
        MMINSTALL_VER: "8,14,4895,0",
        OLD_IE_CLSID: "11F2A418-94B2-4E16-9B0C-B00C0435F903",
        OLD_FF_CLSID: "D9EBCF5D-3F8F-4B6A-89BA-70577BE73C62",
        SEHLL_CLSID: "f7e55bdf-9528-46ba-b550-777859627591",
        OCX_CLSID: "5EF7B131-C278-4034-BC88-2CE28B128681",
        LIVEAPI_CLSID: "4A8FD414-1EBF-4EBD-A158-0D09B005A17F",
        OCX_URL: "http://imgcache.qq.com/tencentvideo_v1/js/tvp/ocx_ctrl_page.html?max_age=0",
        CTRLSWF_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/vodCtrl.swf",
        CTRLSWF_VOD_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/vodCtrl_drm.swf",
        CTRLSWF_W_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/vodCtrl_w.swf",
        PREVIEW_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/qqlive_logo.swf",
        LOADING_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/loadstart.swf",
        AD_SWF_URL: "http://imgcache.qq.com/liveportal_v1/swf/player/moneyplayer.swf",
        OCX_DISABLED_MANUAL: "http://v.qq.com/help/film_1.html#15"
    }, QQLive.param = {
        playpage: {
            mousewheel: "mousewheel",
            oldmode: "OldMode"
        },
        shell: {
            ocxurl: "OcxUrl",
            hidescripterr: "HideScriptErr"
        },
        ocx: {
            mute: "Mute",
            volume: "Volume",
            fullscreen: "FullScreen",
            appendpausebtn: "AppendPauseBtn",
            programpageurl: "ProgramPageUrl"
        },
        driver: {
            autoplay: "autoPlay",
            iscontinued: "isContinued",
            url: "url",
            type: "type",
            adv: "adv",
            oid: "oid"
        },
        driverurl: {
            ctrlbar: "ctrlbar",
            ctrlheight: "ctrlh",
            previewurl: "previewUrl",
            loadingurl: "loadingUrl",
            previewpic: "previewPic",
            hidectrl: "hideCtrl",
            debug: "debug"
        },
        getParamBool: function(a) {
            return void 0 === a ? !1 : "string" == typeof a ? (a = a.toLowerCase(), "true" == a || "1" == a) : !!a
        },
        getElementObjectById: function(a) {
            return window.ActiveXObject ? document.getElementById(a) : document.embeds[a]
        }
    }, QQLive.version = function() {
        function a(a) {
            if (QQLive.version.checkVerFormatValid(a)) return a;
            if (/\d+/i.test(a)) {
                var b = parseInt(a / 1e4 / 100, 10),
                    c = parseInt(a / 1e4, 10) - 100 * b,
                    d = parseInt(a, 10) - (100 * b * 1e4 + 1e4 * c);
                return strVer = b + "." + c + "." + d
            }
            return a
        }
        var b = -1,
            c = -1,
            d = -1;
        return _version = {}, {
            compare: function(b, c) {
                b = a(b), c = a(c), b = b.replace(/,/g, "."), c = c.replace(/,/g, ".");
                for (var d = b.split("."), e = c.split("."), f = 0; 4 > f; f++) {
                    var g = Number(d[f]),
                        h = Number(e[f]);
                    if (g > h) return 1;
                    if (h > g) return -1
                }
                return 0
            },
            get: function() {
                return tvp.version.getOcx()
            },
            check: function(b) {
                if (b = b || QQLive.version.getSupportMinVersion(), !QQLive.version.checkVerFormatValid(b)) return !1;
                var c, d = QQLive.version.get();
                return c = /^\d+$/.test(d) ? a(d) : d + "", QQLive.version.compare(c, b) < 0 ? !1 : !0
            },
            isZero: function(a) {
                return a = a || QQLive.version.get(), /^\d+$/.test(a) && 0 == a ? !0 : 0 == QQLive.version.compare(a, "0.0.0.0")
            },
            checkVerFormatValid: function(a) {
                return /^(\d+\.){2}\d+(\.\d+)?$/.test(a)
            },
            hasQQLiveOcx: function() {
                if (-1 != d) return 1 == d;
                var a = QQLive.version.check();
                return d = a ? 1 : 0
            },
            hasOldVersion: function() {
                if (-1 != c) return 1 == c;
                var a = QQLive.version.get(QQLive.config.OLD_IE_CLSID, !0);
                return a ? (c = QQLive.version.compare(a, QQLive.config.OLD_MIN_VER) > 0 ? 1 : 0, !!c) : !1
            },
            hasQQLivePlayer: function() {
                if (-1 != b) return 1 == b;
                var a = QQLive.version.get(QQLive.config.LIVEAPI_CLSID);
                return a ? (b = QQLive.version.compare(a, "0.0.0.0") > 0 ? 1 : 0, !!b) : !1
            },
            getSupportMinVersion: function() {
                return tvp.$.browser.ie ? QQLive.config.IE_MIN_VER : tvp.$.browser.firefox ? QQLive.config.FF_MIN_VER : tvp.$.browser.webkit ? QQLive.config.CHROME_MIN_VER : "0.0.0.0"
            }
        }
    }(), QQLive.userAgent = QQLive.browser, QQLive.installer = {
        timer: null,
        installerObj: null,
        getInstallerHtml: function() {
            var a = "";
            return a += '<div id="qqlive_mminstaller_div"><OBJECT classid="clsid:' + QQLive.config.MMINSTALL_CLSID + '" codebase="http://dl_dir.qq.com/qqtv/MMInstaller.cab#version=' + QQLive.config.MMINSTALL_VER + '" ID="QQLiveInstaller" width="0px" height="0px">', a += '	<embed name="FF_MM_Install" id="FF_MM_Install" type="application/tecent-qqlive-plugin" width="0px" height="0px"></embed>', a += "</OBJECT></div>"
        },
        showInstallerObject: function(a) {
            tvp.$.getByID(a).innerHTML = QQLive.installer.getInstallerHtml()
        },
        isMMInstalled: function() {
            if (tvp.$.browser.ie) try {
                var a = new ActiveXObject(QQLive.config.PROGID_QQLIVE_INSTALLER);
                if ("undefined" != typeof a.GetVersionByClsid) return !0;
                try {
                    a.Destroy(), a = null, delete a
                } catch (b) {}
                return !1
            } catch (b) {
                return !1
            } else if (tvp.$.browser.isNotIESupport()) {
                var c = document.embeds.FF_MM_Install;
                try {
                    if (c.CreateAX("MMInstall.dll"), "undefined" != typeof c.GetVersionByClsid) return !0;
                    try {
                        c.Destroy(), c = null, delete c
                    } catch (b) {}
                    return !0
                } catch (b) {
                    return !1
                }
            }
            return !1
        },
        checkFFHasMMEmbed: function() {
            return !!tvp.$.getByID("FF_MM_Install")
        },
        getActiveXObj: function(a, b) {
            var c = null;
            if (b && tvp.$.browser.isNotIESupport()) {
                if (c = document.embeds.FF_MM_Install, !c) {
                    var d = document.createElement("div");
                    d.innerHTML = QQLive.installer.getInstallerHtml(), document.getElementsByTagName("body")[0].appendChild(d), c = document.embeds.FF_MM_Install
                }
                try {
                    c.CreateAX(b)
                } catch (e) {}
            } else if (a && tvp.$.browser.ie) try {
                c = new ActiveXObject(a)
            } catch (e) {}
            return c
        },
        hide: function() {
            var a = tvp.$.getByID("QQLiveInstaller");
            a && (a.style.display = "none")
        }
    }, QQLive.flash = {
        getFullVersion: function() {
            return tvp.version.getFlash()
        },
        getMainVer: function() {
            return tvp.version.getFlashMain()
        },
        isFlashVerVaild: function() {
            var a = !1;
            return a = tvp.$.browser.ie ? -1 == QQLive.version.compare(QQLive.flash.getFullVersion(), QQLive.config.IE_FLASH_MIN_VER) ? !1 : !0 : -1 == QQLive.version.compare(QQLive.flash.getFullVersion(), QQLive.config.FF_FLASH_MIN_VER) ? !1 : !0
        }
    }, QQLive.player = {
        startup: function() {
            0 != tvp.$.browser.isCanOcx() && 0 != QQLive.flash.isFlashVerVaild() && 0 != QQLive.version.check(QQLive.config.STARTUP_MIN_VER) && (window.location.href = "qqlive://system_startup/")
        },
        openClient: function(a, b) {
            if (a && QQLive.version.hasQQLivePlayer()) {
                var c = "qqlive://sso/";
                if (!b) {
                    var d = a;
                    if (/^\d+$/i.test(d)) c += "projectid=" + d;
                    else if (d.toLowerCase().indexOf("qqlive://sso/") >= 0) c = d;
                    else {
                        if (!/^[a-z0-9]{15}$/i.test(d)) return;
                        c += "vbarid=" + d
                    }
                }
                a && b && (c += "vbarid=" + a + "&videoid=" + b);
                var e = QQLive.installer.getActiveXObj(QQLive.config.PROGID_QQLIVE_LIVEAPI, "");
                if (e) try {
                    return void e.OpenQQLive(c)
                } catch (f) {}
                window.location.href = c
            }
        }
    }, QQLive.driverPage = {
        sendMsg: function(a, b) {
            b = b || "", window.navigate("app:OnMsg&nID=" + a + "&vContent=" + b)
        },
        ready: function() {
            window.navigate("app:PageLoaded")
        }
    }, QQLive.event = {
        rptImg: null,
        bind: function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = a || this,
                    e = c.concat(Array.prototype.slice.call(arguments, 0));
                return "string" != typeof b ? b.apply(d, e) : d[b] ? d[b].apply(d, e) : void 0
            }
        },
        closeMousewheel: function() {
            document.onmousewheel = function(a) {
                return a = a || event, a.ctrlKey ? !1 : void 0
            }
        },
        reportTCSSHot: function(a, b) {
            var c = !1;
            if ("undefined" == typeof b) c = !0;
            else {
                var d = tvp.$.cookie.get("lv_ocx_rpt");
                d = d ? parseInt(d) : 0, c = !(d & b)
            }
            c && ("function" == typeof pgvSendClick ? pgvSendClick({
                hottag: "OCX.SETUP." + a,
                virtualURL: "/virtual/ocx.html",
                virtualDomain: "v.qq.com"
            }) : (QQLive.event.rptImg = new Image, QQLive.event.rptImg.src = "http://pinghot.qq.com/pingd?dm=v.qq.com.hot&url=/virtual/ocx.html&tt=" + escape(document.title) + "&hottag=OCX.SETUP." + a + "&hotx=9999&hoty=9999&rand=" + Math.round(1e5 * Math.random())), tvp.$.cookie.set("lv_ocx_rpt", d | b, document.location.hostname || document.location.hostname))
        }
    };
    var QQLive = QQLive || {};
    QQLive.DEFINE = {
            STATUS: {
                NOT_INITED: -1,
                INIT: 0,
                READY: 4,
                PLAYING: 7,
                STOP: 1,
                LOADING: 2,
                PAUSE: 6,
                Buffering: 8,
                Paused_Buffering: 9,
                END: 91
            },
            EVENT: {
                LOADSTART: "loadstart",
                LOADING: "loading",
                PLAY: "playing",
                STOP: "stop",
                PAUSE: "pause",
                RESUME: "resume",
                PLAYNEXT: "playnext",
                PLAYPREV: "playprev",
                MUTE: "mute",
                FULLSCREEN: "fullscreen",
                VIDEOREADY: "videoready",
                PROGESS: "progress",
                END: "ended",
                GET_VIDEO_FORMAT_CNT: "getVideoFormatCnt",
                GET_VIDEO_CUR_FORAMT: "getVideoCurFormat",
                VIDEO_FORMAT_SWITCHED: "videoFormatSwitched",
                VIDEOCHANGE: "videochange",
                VOLUMECHANGE: "volumechange",
                MOUSEMOVE: "mousemove",
                DBCLICK: "dbclick",
                TYPECHANGE: "typechange",
                GET_DRM_PREVDURATION: "getDrmDuration",
                GET_DRM_PREV_REASON: "getDrmPrevReason",
                CHECK_MMINSTALLER: "CheckMMInstall",
                CHECK_FLASH: "CheckFlash",
                CHECK_VERSION: "CheckVersion",
                SHOW_PLAYER: "ShowPlayer",
                DIRVER_PAGE_INITED: "DirverPageInited",
                OCX_READY: "inited",
                GUIDE_FLASH_INITED: "GuideFlashInited",
                UPDATE_SSO: "UpdateSSO",
                PAUSE_BTN_CLICK: "PauseBtnClick",
                FULLSCREEN_BTN_CLICK: "FullScreenBtnClick",
                CAN_PREV: "CanPrev",
                CAN_NEXT: "CanNext",
                OCX_INIT_FAILED: "OcxInitFailed",
                SCRIPT_ERROR: "ScriptError",
                OTHER_MSG: "msg",
                OCX_DISABLED: "ocxdisabeld",
                DRM_ERROR: "drmerror"
            },
            MSG: {
                OCX_EVT_ONMSG_PLAYING: 1,
                OCX_EVT_ONMSG_PAUSED: 2,
                OCX_EVT_ONMSG_STOPED: 3,
                OCX_EVT_PREPLAY_LOADING: 4,
                OCX_EVT_ONMSG_LOADSTART: 7,
                OCX_EVT_ONMSG_MOUSEMOVE: 9,
                OCX_EVT_ONMSG_LBUTTONDOWN: 12,
                OCX_EVT_ONMSG_LBUTTONDBLCLK: 14,
                OCX_EVT_ONMSG_START: 15,
                OCX_EVT_ONMSG_VOLUME_UP: 23,
                OCX_EVT_ONMSG_VOLUME_DOWN: 24,
                OCX_EVT_ONMSG_MUTE: 25,
                OCX_EVT_ONMSG_CANPRE: 26,
                OCX_EVT_ONMSG_CANNEXT: 27,
                OCX_EVT_ONMSG_BUF_RESUME_PLAY: 30,
                OCX_EVT_ONMSG_PAUSE_RESUME_PLAY: 31,
                OCX_EVT_ONMSG_PLAY_PAUSE_CLICK: 32,
                OCX_EVT_ONMSG_VIDEO_FORMAT_COUNT: 49,
                OCX_EVT_ONMSG_CUR_VIDEO_FORMAT_IDX: 50,
                OCX_EVT_ONMSG_VIDEO_FORMAT_SWITCHED: 51,
                OCX_EVT_ONMSG_COMMAND: 100,
                DRVPG_EVT_FLASH_INITED: 501,
                DRVPG_EVT_ALL_INITED: 502,
                LIVE_PAGE_EVENT_GUIDEFLSAH_INITED: 503,
                DRVPG_EVT_UPDATESSO: 504,
                CTRLBAR_EVT_PAUSECLICK: 505,
                CTRLBAR_EVT_FULLSCREENCLICK: 506,
                OCX_EVT_FULLSCREEN_SWITCH: 507,
                DRVPG_EVT_OCX_INIT_FAILED: 508,
                DRVPG_EVT_JS_ERROR: 509,
                DRVPG_EVT_DEBUGLOG: 510,
                CTRLBAR_EVT_STOPCLICK: 511,
                OCX_DISABLED: 512,
                OCX_DRM_PREV_END: 513,
                OCX_DRM_GET_TIMEOUT: 515,
                NEW_OCX: 516,
                USE_OCX: 517,
                SHOW_INSTALLER_TIPS: 518,
                GET_VIDEO_CUR_TIME: 519,
                NO_FLASH_PLAYER: 520,
                CTRLBAR_EVT_RESUMECLICK: 521,
                OCX_EVT_ERROR: 1002,
                OCX_EVT_ONMSG_FLV_PROGRAM_END: 1003,
                OCX_EVT_ONMSG_FLV_TOTAL_TIME: 1005,
                OCX_EVT_GET_QQ: 1104,
                OCX_EVT_PREVIEW_REASON: 1102,
                OCX_EVT_PREVIEW_DURATION: 1103,
                OCX_EVT_DRM_AUTHORIZE_RESULT: 1106,
                OCX_EVT_DRM_BEGIN: 1107
            },
            COMMANDID: {
                IDM_RBUTTON_PLAY_PAUSE: 11251,
                IDM_RBUTTON_PRE: 11253,
                IDM_RBUTTON_NEXT: 11254,
                HOT_KEY_FULLSCREEN: 11302
            },
            PROGRESS_EVENT: {
                FLV_LOADING: 2,
                FLV_HEAD_TOTAL_TIME: 3
            },
            KEYCODE: {
                HOTKEYF_SHIFT: 1,
                HOTKEYF_CONTROL: 2,
                HOTKEYF_ALT: 4,
                HOTKEYF_EXT: 8,
                VK_RETURN: 13,
                VK_ESCAPE: 27,
                VK_SPACE: 32,
                VK_LEFT: 37,
                VK_UP: 38,
                VK_RIGHT: 39,
                VK_DOWN: 40
            },
            VIDEOTYPE: {
                UNKNOWN: 0,
                LIVE: 1,
                VOD: 8
            },
            AD_EVENT: {
                ERROR: "Error",
                DATALOADED: "DataLoaded",
                DOWNLOADED: "Downloaded",
                PLAYEND: "PlayEnd"
            }
        },
        function(a, b) {
            a.livehub = {
                g_flashp2p: !1,
                iretcode: 0,
                g_curCnlInfo: {},
                stepReport: function(c, d) {
                    var e = {
                        cmd: 3545,
                        val: c
                    };
                    "object" == b.type(d) && (e = b.extend(e, {
                        speed: d.delay,
                        int5: d.code,
                        vid: d.lid
                    }), d.config && (e = b.extend(e, {
                        contentId: d.config.contentId,
                        appId: d.config.appid
                    }))), a.report(e)
                },
                FlashChecker: function(c) {
                    var d = this;
                    this.cnlId = "", this.extParam = {}, this.onError = b.noop, this.onCanFlash = b.noop, this.onCanHTML5 = b.noop, this.onCanOCX = b.noop, this.onComplete = b.noop, this.onGetCnlId = b.noop;
                    var e = function(b, d) {
                        d = d || {}, d.config = c, a.livehub.stepReport(b, d)
                    };
                    this.onSuccess = function(c) {
                        c && 0 == c.iretcode ? (a.livehub.iretcode = c.iretcode, a.livehub.g_flashp2p = c.flashp2p ? !0 : !1, a.debug("get channel info:flashid=" + c.flashid + ",p2pid=" + c.p2pid + ",flashp2p=" + c.flashp2p), d.cnlId = "" + c.flashid || c.p2pid || "", d.onGetCnlId("" + d.cnlId, !1), a.livehub.getCurChannelInfo(d.cnlId, d.extParam), c.flashid ? (e(5), d.onCanFlash(d.cnlId)) : b.os.windows && c.p2pid ? (e(6), d.onCanOCX(d.cnlId)) : (e(7, {
                            code: c.iretcode
                        }), d.onError(c.iretcode))) : (e(8, {
                            code: c.iretcode
                        }), d.onError(500))
                    }, this.send = function() {
                        if (e(1), a.common.isUseHtml5()) return e(2), d.onCanHTML5(d.cnlId), void d.onComplete();
                        var c = b.now();
                        b.ajax({
                            url: "http://info.zb.qq.com",
                            data: {
                                cmd: 1,
                                cnlid: d.cnlId || ""
                            },
                            dataType: "jsonp"
                        }).done(function(a, f) {
                            f = b.now() - c, e(3, {
                                delay: f
                            }), d.onSuccess(a), d.onComplete()
                        }).fail(function(a, f) {
                            f = b.now() - c, e(4, {
                                delay: f
                            }), d.onError(), d.onComplete()
                        })
                    }
                },
                getCurChannelInfo: function(c, d) {
                    var e = a.livehub.g_curCnlInfo;
                    d && "object" == b.type(d) ? (e.cnlId = d.cnlId, d.channelname && (e.cnlName = d.channelname), d.currentname && d.currenttime && (e.prmInfo = d.currenttime + "|" + d.currentname)) : e = {}
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            function c(c, d, e) {
                var g = b.now(),
                    h = g - f,
                    i = {
                        cmd: 3529,
                        val: c,
                        str4: d,
                        speed: 0 > h ? b.now() - g : h
                    };
                f = g, "object" == b.type(e) && b.extend(i, e), a.report(i)
            }

            function d(c, d) {
                var e = c + "Defer";
                if (a[e]) return a[e];
                var f = b.Deferred();
                a[e] = f;
                var g = "http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/",
                    h = c.toLowerCase();
                "OcxPlayer" == c && "undefined" != typeof QQLive && "undefined" != typeof QQLive.DEFINE && (h = "ocxplayerlite");
                var i = g + "module/" + h + ".js?max_age=86400&v=" + a.ts;
                if ("function" == typeof a[c]) f.resolve();
                else {
                    var j = new a.RetCode(100123),
                        k = b.now();
                    j.begin(), d(1), b.getScript(i, function() {
                        var e = b.now() - k;
                        if ("function" != typeof a[c]) throw j.reportErr(11), d(2, 11, e), new Error(errMsg[1]);
                        d(2, 0, e), j.reportSuc(), f.resolve()
                    })
                }
                return f
            }

            function e(a) {
                return "string" == b.type(a) && /html5|mp4/i.test(a)
            }
            var f = b.now();
            "true" == b.getUrlParam("__tvpdebug__", window != top ? top.location.href : "") && b.getScript("http://weinre.qq.com/target/target-script.js#__tvpdebug__");
            var g = function(c, f) {
                    function h() {
                        var a = b.Deferred();
                        switch (r.playerType) {
                            case "flash":
                                t = "FlashPlayer";
                                break;
                            case "html5":
                                m();
                                break;
                            case "ocx":
                                t = "OcxPlayer";
                                break;
                            case "mp4":
                                t = "MP4Link";
                                break;
                            default:
                                i()
                        }
                        return a.resolve(), a
                    }

                    function i() {
                        var b = navigator.platform.toLowerCase(),
                            c = navigator.userAgent.toLowerCase(),
                            d = /ipad|ipod|iphone|lepad_hls|IEMobile|WPDesktop/gi.test(c),
                            e = /ipad|ipod|iphone|linux/gi.test(b);
                        return a.common.isEnforceMP4() ? void(t = "MP4Link") : d || e || a.$.os.android ? void(a.common.isSupportMP4() || a.common.isInUseH5() ? m() : t = "MP4Link") : void(t = "FlashPlayer")
                    }

                    function j(c) {
                        if (c.getChannelId()) {
                            var d = c.getChannelId();
                            if ("object" == b.type(s[d]) && b.isFunction(s[d].done)) return s[d];
                            s[d] = b.Deferred();
                            var e = new a.livehub.FlashChecker(r),
                                f = !0;
                            return e.cnlId = c.getChannelId(), e.extParam = c.getChannelExtParam(), e.onGetCnlId = function(a, b) {
                                c.setChannelId(a), c.setIsLookBack(!!b)
                            }, e.onCanFlash = function() {
                                t = "FlashLivePlayer"
                            }, e.onCanHTML5 = function() {
                                n()
                            }, e.onCanOCX = function() {
                                t = "OcxPlayer"
                            }, e.onError = function() {
                                k(), f = !1
                            }, e.onComplete = function() {
                                l(), f ? s[d].resolve() : s[d].reject()
                            }, e.send(), s[d]
                        }
                    }

                    function k() {
                        a.common.isLiveUseHTML5() ? n() : t = b.os.android ? "FlashLivePlayer" : "OcxPlayer"
                    }

                    function l() {
                        switch (r.playerType) {
                            case "flash":
                                t = "FlashLive";
                                break;
                            case "html5":
                                n();
                                break;
                            case "flashLive":
                                t = "FlashLivePlayer";
                                break;
                            case "ocx":
                                t = "OcxPlayer"
                        }
                    }

                    function m() {
                        x = !0, t = r.isHtml5UseUI ? "Html5Player" : "Html5Tiny"
                    }

                    function n() {
                        t = r.isHtml5UseUI ? "Html5Live" : "Html5LiveTiny"
                    }

                    function o(a) {
                        for (var b = !1, c = document.getElementsByTagName("link") || [], d = 0, e = c.length; e > d && !(b = c[d] && c[d].href && (0 == c[d].href.indexOf(a) || -1 != c[d].href.indexOf("player_inews.css")));) d++;
                        return b
                    }

                    function p() {
                        function d() {
                            if (!g) {
                                g = !0;
                                var b = new a[t];
                                b.init(c), q.resolve(b, t)
                            }
                        }
                        var f = null,
                            g = !1,
                            h = b.inArray(t, w),
                            i = r.cssPath + (c.HTML5CSSName || "player.css");
                        (h > -1 && b.isString(c.HTML5CSSName) && c.HTML5CSSName.length > 0 || e(t)) && !o(i) ? (f = setTimeout(function() {
                            c.isHtml5UseUI = !1, t = y[h], d()
                        }, 5e3), i += -1 === i.indexOf("?") ? "?t=" + a.ts : "&t=" + a.ts, b.loadCss(i).done(function() {
                            clearTimeout(f), f = null, d()
                        })) : d()
                    }
                    var q = b.Deferred(),
                        r = {},
                        s = {},
                        t = "FlashPlayer",
                        u = ["\u672a\u6307\u660e\u64ad\u653e\u5668\u5185\u6838", "\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u7edf\u4e00\u64ad\u653e\u5668JS\u6587\u4ef6\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u64ad\u653e\u5668\u5185\u6838", "video\u672a\u521d\u59cb\u5316"],
                        v = ["FlashPlayer", "FlashLivePlayer", "MP4Link", "OcxPlayer"],
                        w = ["Html5Player", "Html5Live"],
                        x = !1,
                        y = ["Html5Tiny", "Html5LiveTiny"];
                    if (v = v.concat(w), v = v.concat(y), b.extend(r, c), b.isUndefined(c.isHTML5UseUI) || (r.isHtml5UseUI = c.isHTML5UseUI), !c.video instanceof a.VideoInfo) throw new Error(u[2]);
                    return c.video.setCurPlayer(f), g.checkLivePlayer = j, b.when(c.type == a.PLAYER_DEFINE.VOD ? h() : j(c.video)).then(function() {
                        var e = "",
                            g = function(b, d, f) {
                                a.report({
                                    cmd: 3531,
                                    val: b,
                                    val2: d || 0,
                                    str3: e,
                                    speed: f || 0,
                                    contentId: c.contentId || "",
                                    appId: c.appid || 0
                                })
                            };
                        if (!t) throw new Error(u[0]);
                        if (b.inArray(t, v) < 0) throw new Error(u[1]);
                        c.type == a.PLAYER_DEFINE.VOD && x && f && f.trigger && f.trigger(a.ACTION.onVodH5Init), "function" != typeof a[t] ? d(t, g).done(function() {
                            p.call(f)
                        }) : p.call(f)
                    }), q
                },
                h = {
                    player: "playerType",
                    showcfg: ["isVodFlashShowCfg", "isLiveFlashShowCfg"],
                    searchbar: ["isVodFlashShowSearchBar"],
                    showend: ["isVodFlashShowEnd"],
                    tpid: ["typeId"],
                    cid: ["coverId"],
                    flashshownext: ["isVodFlashShowNextBtn"],
                    loadingswf: "loadingswf",
                    wmode: "flashWmode",
                    flashskin: ["vodFlashSkin"],
                    extvars: ["vodFlashExtVars"],
                    swftype: ["vodFlashType"],
                    swfurl: ["vodFlashUrl", "liveFlashUrl"]
                };
            a.Player = function(d, e) {
                this.sessionId = b.createGUID(), c(1, this.sessionId), this.instance = null, this.config = {}, this._oldcfg = {}, b.extend(this.config, a.defaultConfig), this.setting("width", d), this.setting("height", e)
            }, a.Player.fn = a.Player.prototype = new a.BasePlayer, b.extend(a.Player.fn, {
                setting: function(a, b) {
                    this.config[a] = b
                },
                output: function(a) {
                    this.setting("modId", a), this.create(this.config)
                },
                create: function(d) {
                    var e = this;
                    b.extend(e.config, d), c(2, this.sessionId, {
                        contentId: e.config.contentId || "",
                        appId: e.config.appid || 0
                    }), g(e.config, e).done(function(f, h) {
                        try {
                            c(3, e.sessionId, {
                                vid: f.curVideo.getFullVid() || f.curVideo.getChannelId(),
                                str3: f.getPlayerType(),
                                contentId: e.config.contentId || "",
                                appId: e.config.appid || 0
                            })
                        } catch (i) {}
                        e.instance = f, e.instance.instance = e;
                        for (var j in e.instance) "instance" != j && ("on" == j.substr(0, 2) && b.isFunction(e[j]) && e[j] != a.$.noop || (e[j] = e.instance[j]));
                        f.callCBEvent("onwrite"), e.config.type == a.PLAYER_DEFINE.LIVE && (e.play = function(c) {
                            b.isString(c) ? (e.config.video.setChannelId(c), c = e.config.video) : c instanceof a.VideoInfo && b.when(g.checkLivePlayer(c)).then(function() {
                                e.instance instanceof a[h] ? e.instance.play(c) : (d.video = c, g(d))
                            })
                        }), a.Player.instance[e.playerid] = e
                    }).always(function() {
                        function c(a, c) {
                            try {
                                var d = "build" + a;
                                return b.isFunction(e[d]) ? (e[d].call(e, c), !0) : !1
                            } catch (f) {}
                        }
                        if (b.each(e.config.plugins, function(a, d) {
                            if (d && a in e.config.pluginUrl) {
                                var f = b.isPlainObject(d) ? d : {};
                                if (!c(a, f)) {
                                    var g = e.config.libpath + e.config.pluginUrl[a];
                                    b.isString(g) && "" != b.trim(g) && b.getScript(g, function() {
                                        c(a, f)
                                    })
                                }
                            }
                        }), window.console && _isUseInnerZepto) {
                            var d = {
                                jQuery: "jq",
                                Zepto: "zepto",
                                jq: "jqmobi"
                            };
                            for (var f in d)
                                if ("function" == typeof window[f]) {
                                    if ("jQuery" === f && "function" != typeof jQuery.Deferred) break;
                                    console.warn("\n" + a.name + "\u63d0\u793a\uff1a\n\u60a8\u5f53\u524d\u9875\u9762\u4f7f\u7528\u4e86" + f + "\n\u5efa\u8bae\u60a8\u5f15\u7528" + a.name + " for " + f + "\u4e13\u7528\u7248\uff0c\u66f4\u8f7b\u66f4\u5feb\u66f4\u7cbe\u7b80\nJS\u5730\u5740:http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2_" + d[f] + ".js\n\n")
                                }
                        }
                    })
                },
                addParam: function(c, d) {
                    a.report({
                        cmd: 3546,
                        val: 1
                    }), "config" == c && "object" == b.type(d) ? b.extend(this.config, d) : this._oldcfg[c] = d
                },
                setCurVideo: function(b) {
                    a.report({
                        cmd: 3546,
                        val: 2
                    }), this.config.video = b, b && b instanceof a.VideoInfo && b.setCurPlayer(this)
                },
                write: function(c) {
                    a.report({
                        cmd: 3546,
                        val: 3
                    }), this.config.modId = c;
                    var d = 1 == this._oldcfg.type ? 1 : 2,
                        e = this;
                    b.each(this._oldcfg, function(c, f) {
                        c in h ? b.isArray(h[c]) ? 2 == d ? e.config[h[c][0]] = f : 1 == d && h[c].length >= 2 && (e.config[h[c][1]] = f) : b.isString(h[c]) && (e.config[h[c]] = f) : c in a.defaultConfig && (e.config[c] = f)
                    }), delete this._oldcfg, this.create(this.config)
                }
            }), a.create = g
        }(tvp, tvp.$), tvp.Player.instance = {}, tvp.filename = "tvp.player_v2.js", "function" == typeof define && define("tvp", [], function() {
            return tvp
        }), global.tvp = tvp, "undefined" != typeof QQLive && (global.QQLive = QQLive)
}(this); /*  |xGv00|0aa9a6e9b2e22999a0ebc0011c69abcc */