(function(a, f) {
    function h(b) {
        return m.isWindow(b) ? b: 9 === b.nodeType ? b.defaultView || b.parentWindow: !1
    }
    function n(b) {
        if (!ea[b]) {
            var a = w.body,
            d = m("<" + b + ">").appendTo(a),
            c = d.css("display");
            d.remove();
            if ("none" === c || "" === c) N || (N = w.createElement("iframe"), N.frameBorder = N.width = N.height = 0),
            a.appendChild(N),
            Q && N.createElement || (Q = (N.contentWindow || N.contentDocument).document, Q.write(("CSS1Compat" === w.compatMode ? "<!doctype html>": "") + "<html><body>"), Q.close()),
            d = Q.createElement(b),
            Q.body.appendChild(d),
            c = m.css(d, "display"),
            a.removeChild(N);
            ea[b] = c
        }
        return ea[b]
    }
    function p(b, a) {
        var d = {};
        m.each(pa.concat.apply([], pa.slice(0, a)),
        function() {
            d[this] = b
        });
        return d
    }
    function b() {
        Y = f
    }
    function d() {
        setTimeout(b, 0);
        return Y = m.now()
    }
    function c() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function e(b, a, d, c) {
        if (m.isArray(a)) m.each(a,
        function(a, H) {
            d || Ta.test(b) ? c(b, H) : e(b + "[" + ("object" == typeof H || m.isArray(H) ? a: "") + "]", H, d, c)
        });
        else if (d || null == a || "object" != typeof a) c(b, a);
        else for (var g in a) e(b + "[" + g + "]", a[g], d, c)
    }
    function g(b, a) {
        var d, c, e = m.ajaxSettings.flatOptions || {};
        for (d in a) a[d] !== f && ((e[d] ? b: c || (c = {}))[d] = a[d]);
        c && m.extend(!0, b, c)
    }
    function r(b, a, d, c, e, g) {
        e = e || a.dataTypes[0];
        g = g || {};
        g[e] = !0;
        e = b[e];
        for (var l = 0,
        m = e ? e.length: 0, k = b === ga, q; l < m && (k || !q); l++) q = e[l](a, d, c),
        "string" == typeof q && (!k || g[q] ? q = f: (a.dataTypes.unshift(q), q = r(b, a, d, c, q, g))); ! k && q || g["*"] || (q = r(b, a, d, c, "*", g));
        return q
    }
    function k(b) {
        return function(a, d) {
            "string" != typeof a && (d = a, a = "*");
            if (m.isFunction(d)) for (var c = a.toLowerCase().split(qa), e = 0, g = c.length, f, l; e < g; e++) f = c[e],
            (l = /^\+/.test(f)) && (f = f.substr(1) || "*"),
            f = b[f] = b[f] || [],
            f[l ? "unshift": "push"](d)
        }
    }
    function l(b, a, d) {
        var c = "width" === a ? b.offsetWidth: b.offsetHeight,
        e = "width" === a ? Ua: Va,
        g = 0,
        f = e.length;
        if (0 < c) {
            if ("border" !== d) for (; g < f; g++) d || (c -= parseFloat(m.css(b, "padding" + e[g])) || 0),
            "margin" === d ? c += parseFloat(m.css(b, d + e[g])) || 0 : c -= parseFloat(m.css(b, "border" + e[g] + "Width")) || 0;
            return c + "px"
        }
        c = S(b, a, a);
        if (0 > c || null == c) c = b.style[a] || 0;
        c = parseFloat(c) || 0;
        if (d) for (; g < f; g++) c += parseFloat(m.css(b, "padding" + e[g])) || 0,
        "padding" !== d && (c += parseFloat(m.css(b, "border" + e[g] + "Width")) || 0),
        "margin" === d && (c += parseFloat(m.css(b, d + e[g])) || 0);
        return c + "px"
    }
    function t(b, a) {
        a.src ? m.ajax({
            url: a.src,
            async: !1,
            dataType: "script"
        }) : m.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Wa, "/*$0*/"));
        a.parentNode && a.parentNode.removeChild(a)
    }
    function v(b) {
        var a = (b.nodeName || "").toLowerCase();
        "input" === a ? q(b) : "script" !== a && "undefined" != typeof b.getElementsByTagName && m.grep(b.getElementsByTagName("input"), q)
    }
    function q(b) {
        if ("checkbox" === b.type || "radio" === b.type) b.defaultChecked = b.checked
    }
    function y(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }
    function s(b, a) {
        var d;
        if (1 === a.nodeType) {
            a.clearAttributes && a.clearAttributes();
            a.mergeAttributes && a.mergeAttributes(b);
            d = a.nodeName.toLowerCase();
            if ("object" === d) a.outerHTML = b.outerHTML;
            else if ("input" !== d || "checkbox" !== b.type && "radio" !== b.type) if ("option" === d) a.selected = b.defaultSelected;
            else {
                if ("input" === d || "textarea" === d) a.defaultValue = b.defaultValue
            } else b.checked && (a.defaultChecked = a.checked = b.checked),
            a.value !== b.value && (a.value = b.value);
            a.removeAttribute(m.expando)
        }
    }
    function u(b, a) {
        if (1 === a.nodeType && m.hasData(b)) {
            var d, c, e;
            c = m._data(b);
            var g = m._data(a, c),
            f = c.events;
            if (f) for (d in delete g.handle, g.events = {},
            f) for (c = 0, e = f[d].length; c < e; c++) m.event.add(a, d + (f[d][c].namespace ? ".": "") + f[d][c].namespace, f[d][c], f[d][c].data);
            g.data && (g.data = m.extend({},
            g.data))
        }
    }
    function z(b, a) {
        return m.nodeName(b, "table") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }
    function A(b) {
        var a = ra.split("|");
        b = b.createDocumentFragment();
        if (b.createElement) for (; a.length;) b.createElement(a.pop());
        return b
    }
    function x(b, a, d) {
        a = a || 0;
        if (m.isFunction(a)) return m.grep(b,
        function(b, c) {
            return !! a.call(b, c, b) === d
        });
        if (a.nodeType) return m.grep(b,
        function(b, c) {
            return b === a === d
        });
        if ("string" == typeof a) {
            var c = m.grep(b,
            function(b) {
                return 1 === b.nodeType
            });
            if (Xa.test(a)) return m.filter(a, c, !d);
            a = m.filter(a, c)
        }
        return m.grep(b,
        function(b, c) {
            return 0 <= m.inArray(b, a) === d
        })
    }
    function D(b) {
        return ! b || !b.parentNode || 11 === b.parentNode.nodeType
    }
    function B() {
        return ! 0
    }
    function F() {
        return ! 1
    }
    function L(b, a, d) {
        var c = a + "defer",
        e = a + "queue",
        g = a + "mark",
        f = m._data(b, c); ! f || "queue" !== d && m._data(b, e) || "mark" !== d && m._data(b, g) || setTimeout(function() {
            m._data(b, e) || m._data(b, g) || (m.removeData(b, c, !0), f.fire())
        },
        0)
    }
    function O(b) {
        for (var a in b) if (("data" !== a || !m.isEmptyObject(b[a])) && "toJSON" !== a) return ! 1;
        return ! 0
    }
    function C(b, a, d) {
        if (d === f && 1 === b.nodeType) if (d = "data-" + a.replace(Ya, "-$1").toLowerCase(), d = b.getAttribute(d), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: m.isNumeric(d) ? parseFloat(d) : Za.test(d) ? m.parseJSON(d) : d
            } catch(c) {}
            m.data(b, a, d)
        } else d = f;
        return d
    }
    function G(b) {
        var a = sa[b] = {},
        d,
        c;
        b = b.split(/\s+/);
        d = 0;
        for (c = b.length; d < c; d++) a[b[d]] = !0;
        return a
    }
    var w = a.document,
    J = a.navigator,
    V = a.location,
    m = function() {
        function b() {
            if (!d.isReady) {
                try {
                    w.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(b, 1);
                    return
                }
                d.ready()
            }
        }
        var d = function(b, a) {
            return new d.fn.init(b, a, g)
        },
        c = a.jQuery,
        e = a.$,
        g,
        l = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        r = /\S/,
        m = /^\s+/,
        k = /\s+$/,
        q = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        h = /^[\],:{}\s]*$/,
        t = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        n = /(?:^|:|,)(?:\s*\[)+/g,
        y = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        p = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        z = /-([a-z]|[0-9])/ig,
        A = /^-ms-/,
        x = function(b, a) {
            return (a + "").toUpperCase()
        },
        D = J.userAgent,
        aa,
        T,
        $a = Object.prototype.toString,
        ha = Object.prototype.hasOwnProperty,
        ia = Array.prototype.push,
        X = Array.prototype.slice,
        ta = String.prototype.trim,
        ua = Array.prototype.indexOf,
        B = {};
        d.fn = d.prototype = {
            constructor: d,
            init: function(b, a, c) {
                var e, E;
                if (!b) return this;
                if (b.nodeType) return this.context = this[0] = b,
                this.length = 1,
                this;
                if ("body" === b && !a && w.body) return this.context = w,
                this[0] = w.body,
                this.selector = b,
                this.length = 1,
                this;
                if ("string" == typeof b) {
                    "<" !== b.charAt(0) || ">" !== b.charAt(b.length - 1) || 3 > b.length ? e = l.exec(b) : e = [null, b, null];
                    if (e && (e[1] || !a)) {
                        if (e[1]) return E = (a = a instanceof d ? a[0] : a) ? a.ownerDocument || a: w,
                        (c = q.exec(b)) ? d.isPlainObject(a) ? (b = [w.createElement(c[1])], d.fn.attr.call(b, a, !0)) : b = [E.createElement(c[1])] : (c = d.buildFragment([e[1]], [E]), b = (c.cacheable ? d.clone(c.fragment) : c.fragment).childNodes),
                        d.merge(this, b);
                        if ((a = w.getElementById(e[2])) && a.parentNode) {
                            if (a.id !== e[2]) return c.find(b);
                            this.length = 1;
                            this[0] = a
                        }
                        this.context = w;
                        this.selector = b;
                        return this
                    }
                    return ! a || a.jquery ? (a || c).find(b) : this.constructor(a).find(b)
                }
                if (d.isFunction(b)) return c.ready(b);
                b.selector !== f && (this.selector = b.selector, this.context = b.context);
                return d.makeArray(b, this)
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return X.call(this, 0)
            },
            get: function(b) {
                return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
            },
            pushStack: function(b, a, c) {
                var e = this.constructor();
                d.isArray(b) ? ia.apply(e, b) : d.merge(e, b);
                e.prevObject = this;
                e.context = this.context;
                "find" === a ? e.selector = this.selector + (this.selector ? " ": "") + c: a && (e.selector = this.selector + "." + a + "(" + c + ")");
                return e
            },
            each: function(b, a) {
                return d.each(this, b, a)
            },
            ready: function(b) {
                d.bindReady();
                aa.add(b);
                return this
            },
            eq: function(b) {
                b = +b;
                return - 1 === b ? this.slice(b) : this.slice(b, b + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
            },
            map: function(b) {
                return this.pushStack(d.map(this,
                function(a, d) {
                    return b.call(a, d, a)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ia,
            sort: [].sort,
            splice: [].splice
        };
        d.fn.init.prototype = d.fn;
        d.extend = d.fn.extend = function() {
            var b, a, c, e, E, g, l = arguments[0] || {},
            r = 1,
            m = arguments.length,
            k = !1;
            "boolean" == typeof l && (k = l, l = arguments[1] || {},
            r = 2);
            "object" != typeof l && !d.isFunction(l) && (l = {});
            for (m === r && (l = this, --r); r < m; r++) if (null != (b = arguments[r])) for (a in b) c = l[a],
            e = b[a],
            l !== e && (k && e && (d.isPlainObject(e) || (E = d.isArray(e))) ? (E ? (E = !1, g = c && d.isArray(c) ? c: []) : g = c && d.isPlainObject(c) ? c: {},
            l[a] = d.extend(k, g, e)) : e !== f && (l[a] = e));
            return l
        };
        d.extend({
            noConflict: function(b) {
                a.$ === d && (a.$ = e);
                b && a.jQuery === d && (a.jQuery = c);
                return d
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(b) {
                b ? d.readyWait++:d.ready(!0)
            },
            ready: function(b) {
                if (!0 === b && !--d.readyWait || !0 !== b && !d.isReady) {
                    if (!w.body) return setTimeout(d.ready, 1);
                    d.isReady = !0; ! 0 !== b && 0 < --d.readyWait || (aa.fireWith(w, [d]), d.fn.trigger && d(w).trigger("ready").off("ready"))
                }
            },
            bindReady: function() {
                if (!aa) {
                    aa = d.Callbacks("once memory");
                    if ("complete" === w.readyState) return setTimeout(d.ready, 1);
                    if (w.addEventListener) w.addEventListener("DOMContentLoaded", T, !1),
                    a.addEventListener("load", d.ready, !1);
                    else if (w.attachEvent) {
                        w.attachEvent("onreadystatechange", T);
                        a.attachEvent("onload", d.ready);
                        var c = !1;
                        try {
                            c = null == a.frameElement
                        } catch(e) {}
                        w.documentElement.doScroll && c && b()
                    }
                }
            },
            isFunction: function(b) {
                return "function" === d.type(b)
            },
            isArray: Array.isArray ||
            function(b) {
                return "array" === d.type(b)
            },
            isWindow: function(b) {
                return b && "object" == typeof b && "setInterval" in b
            },
            isNumeric: function(b) {
                return ! isNaN(parseFloat(b)) && isFinite(b)
            },
            type: function(b) {
                return null == b ? String(b) : B[$a.call(b)] || "object"
            },
            isPlainObject: function(b) {
                if (!b || "object" !== d.type(b) || b.nodeType || d.isWindow(b)) return ! 1;
                try {
                    if (b.constructor && !ha.call(b, "constructor") && !ha.call(b.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(a) {
                    return ! 1
                }
                for (var c in b);
                return c === f || ha.call(b, c)
            },
            isEmptyObject: function(b) {
                for (var a in b) return ! 1;
                return ! 0
            },
            error: function(b) {
                throw Error(b);
            },
            parseJSON: function(b) {
                if ("string" != typeof b || !b) return null;
                b = d.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (h.test(b.replace(t, "@").replace(v, "]").replace(n, ""))) return (new Function("return " + b))();
                d.error("Invalid JSON: " + b)
            },
            parseXML: function(b) {
                var c, e;
                try {
                    a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
                } catch(E) {
                    c = f
                }
                c && c.documentElement && !c.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + b);
                return c
            },
            noop: function() {},
            globalEval: function(b) {
                b && r.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(b) {
                return b.replace(A, "ms-").replace(z, x)
            },
            nodeName: function(b, a) {
                return b.nodeName && b.nodeName.toUpperCase() === a.toUpperCase()
            },
            each: function(b, a, c) {
                var e, E = 0,
                g = b.length,
                l = g === f || d.isFunction(b);
                if (c) if (l) for (e in b) {
                    if (!1 === a.apply(b[e], c)) break
                } else for (; E < g && !1 !== a.apply(b[E++], c););
                else if (l) for (e in b) {
                    if (!1 === a.call(b[e], e, b[e])) break
                } else for (; E < g && !1 !== a.call(b[E], E, b[E++]););
                return b
            },
            trim: ta ?
            function(b) {
                return null == b ? "": ta.call(b)
            }: function(b) {
                return null == b ? "": (b + "").replace(m, "").replace(k, "")
            },
            makeArray: function(b, a) {
                var c = a || [];
                if (null != b) {
                    var e = d.type(b);
                    null == b.length || "string" === e || "function" === e || "regexp" === e || d.isWindow(b) ? ia.call(c, b) : d.merge(c, b)
                }
                return c
            },
            inArray: function(b, a, d) {
                var c;
                if (a) {
                    if (ua) return ua.call(a, b, d);
                    c = a.length;
                    for (d = d ? 0 > d ? Math.max(0, c + d) : d: 0; d < c; d++) if (d in a && a[d] === b) return d
                }
                return - 1
            },
            merge: function(b, a) {
                var d = b.length,
                c = 0;
                if ("number" == typeof a.length) for (var e = a.length; c < e; c++) b[d++] = a[c];
                else for (; a[c] !== f;) b[d++] = a[c++];
                b.length = d;
                return b
            },
            grep: function(b, a, d) {
                var c = [],
                e;
                d = !!d;
                for (var E = 0,
                g = b.length; E < g; E++) e = !!a(b[E], E),
                d !== e && c.push(b[E]);
                return c
            },
            map: function(b, a, c) {
                var e, E, g = [],
                l = 0,
                r = b.length;
                if (b instanceof d || r !== f && "number" == typeof r && (0 < r && b[0] && b[r - 1] || 0 === r || d.isArray(b))) for (; l < r; l++) e = a(b[l], l, c),
                null != e && (g[g.length] = e);
                else for (E in b) e = a(b[E], E, c),
                null != e && (g[g.length] = e);
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(b, a) {
                if ("string" == typeof a) {
                    var c = b[a];
                    a = b;
                    b = c
                }
                if (!d.isFunction(b)) return f;
                var e = X.call(arguments, 2),
                c = function() {
                    return b.apply(a, e.concat(X.call(arguments)))
                };
                c.guid = b.guid = b.guid || c.guid || d.guid++;
                return c
            },
            access: function(b, a, c, e, E, g) {
                var l = b.length;
                if ("object" == typeof a) {
                    for (var r in a) d.access(b, r, a[r], e, E, c);
                    return b
                }
                if (c !== f) {
                    e = !g && e && d.isFunction(c);
                    for (r = 0; r < l; r++) E(b[r], a, e ? c.call(b[r], r, E(b[r], a)) : c, g);
                    return b
                }
                return l ? E(b[0], a) : f
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(b) {
                b = b.toLowerCase();
                b = y.exec(b) || s.exec(b) || p.exec(b) || 0 > b.indexOf("compatible") && u.exec(b) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function b(a, d) {
                    return new b.fn.init(a, d)
                }
                d.extend(!0, b, this);
                b.superclass = this;
                b.fn = b.prototype = this();
                b.fn.constructor = b;
                b.sub = this.sub;
                b.fn.init = function(c, e) {
                    e && e instanceof d && !(e instanceof b) && (e = b(e));
                    return d.fn.init.call(this, c, e, a)
                };
                b.fn.init.prototype = b.fn;
                var a = b(w);
                return b
            },
            browser: {}
        });
        d.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(b, a) {
            B["[object " + a + "]"] = a.toLowerCase()
        });
        D = d.uaMatch(D);
        D.browser && (d.browser[D.browser] = !0, d.browser.version = D.version);
        d.browser.webkit && (d.browser.safari = !0);
        r.test("\u00a0") && (m = /^[\s\xA0]+/, k = /[\s\xA0]+$/);
        g = d(w);
        w.addEventListener ? T = function() {
            w.removeEventListener("DOMContentLoaded", T, !1);
            d.ready()
        }: w.attachEvent && (T = function() {
            "complete" === w.readyState && (w.detachEvent("onreadystatechange", T), d.ready())
        });
        return d
    } (),
    sa = {};
    m.Callbacks = function(b) {
        b = b ? sa[b] || G(b) : {};
        var a = [],
        d = [],
        c,
        e,
        g,
        l,
        r,
        k = function(d) {
            var c, e, g, f;
            c = 0;
            for (e = d.length; c < e; c++) g = d[c],
            f = m.type(g),
            "array" === f ? k(g) : "function" !== f || b.unique && h.has(g) || a.push(g)
        },
        q = function(f, m) {
            m = m || [];
            c = !b.memory || [f, m];
            e = !0;
            r = g || 0;
            g = 0;
            for (l = a.length; a && r < l; r++) if (!1 === a[r].apply(f, m) && b.stopOnFalse) {
                c = !0;
                break
            }
            e = !1;
            a && (b.once ? !0 === c ? h.disable() : a = [] : d && d.length && (c = d.shift(), h.fireWith(c[0], c[1])))
        },
        h = {
            add: function() {
                if (a) {
                    var b = a.length;
                    k(arguments);
                    e ? l = a.length: c && !0 !== c && (g = b, q(c[0], c[1]))
                }
                return this
            },
            remove: function() {
                if (a) for (var d = arguments,
                c = 0,
                g = d.length; c < g; c++) for (var f = 0; f < a.length && (d[c] !== a[f] || (e && f <= l && (l--, f <= r && r--), a.splice(f--, 1), !b.unique)); f++);
                return this
            },
            has: function(b) {
                if (a) for (var d = 0,
                c = a.length; d < c; d++) if (b === a[d]) return ! 0;
                return ! 1
            },
            empty: function() {
                a = [];
                return this
            },
            disable: function() {
                a = d = c = f;
                return this
            },
            disabled: function() {
                return ! a
            },
            lock: function() {
                d = f;
                c && !0 !== c || h.disable();
                return this
            },
            locked: function() {
                return ! d
            },
            fireWith: function(a, g) {
                d && (e ? b.once || d.push([a, g]) : (!b.once || !c) && q(a, g));
                return this
            },
            fire: function() {
                h.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! c
            }
        };
        return h
    };
    var ja = [].slice;
    m.extend({
        Deferred: function(b) {
            var a = m.Callbacks("once memory"),
            d = m.Callbacks("once memory"),
            c = m.Callbacks("memory"),
            e = "pending",
            g = {
                resolve: a,
                reject: d,
                notify: c
            },
            f = {
                done: a.add,
                fail: d.add,
                progress: c.add,
                state: function() {
                    return e
                },
                isResolved: a.fired,
                isRejected: d.fired,
                then: function(b, a, d) {
                    l.done(b).fail(a).progress(d);
                    return this
                },
                always: function() {
                    l.done.apply(l, arguments).fail.apply(l, arguments);
                    return this
                },
                pipe: function(b, a, d) {
                    return m.Deferred(function(c) {
                        m.each({
                            done: [b, "resolve"],
                            fail: [a, "reject"],
                            progress: [d, "notify"]
                        },
                        function(b, a) {
                            var d = a[0],
                            e = a[1],
                            E;
                            m.isFunction(d) ? l[b](function() { (E = d.apply(this, arguments)) && m.isFunction(E.promise) ? E.promise().then(c.resolve, c.reject, c.notify) : c[e + "With"](this === l ? c: this, [E])
                            }) : l[b](c[e])
                        })
                    }).promise()
                },
                promise: function(b) {
                    if (null == b) b = f;
                    else for (var a in f) b[a] = f[a];
                    return b
                }
            },
            l = f.promise({}),
            r;
            for (r in g) l[r] = g[r].fire,
            l[r + "With"] = g[r].fireWith;
            l.done(function() {
                e = "resolved"
            },
            d.disable, c.lock).fail(function() {
                e = "rejected"
            },
            a.disable, c.lock);
            b && b.call(l, l);
            return l
        },
        when: function(b) {
            function a(b) {
                return function(a) {
                    f[b] = 1 < arguments.length ? ja.call(arguments, 0) : a;
                    r.notifyWith(k, f)
                }
            }
            function d(b) {
                return function(a) {
                    c[b] = 1 < arguments.length ? ja.call(arguments, 0) : a; --l || r.resolveWith(r, c)
                }
            }
            var c = ja.call(arguments, 0),
            e = 0,
            g = c.length,
            f = Array(g),
            l = g,
            r = 1 >= g && b && m.isFunction(b.promise) ? b: m.Deferred(),
            k = r.promise();
            if (1 < g) {
                for (; e < g; e++) c[e] && c[e].promise && m.isFunction(c[e].promise) ? c[e].promise().then(d(e), r.reject, a(e)) : --l;
                l || r.resolveWith(r, c)
            } else r !== b && r.resolveWith(r, g ? [b] : []);
            return k
        }
    });
    m.support = function() {
        var b, d, c, e, g, f, l, r, k, q = w.createElement("div");
        q.setAttribute("className", "t");
        q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        d = q.getElementsByTagName("*");
        c = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !c) return {};
        e = w.createElement("select");
        g = e.appendChild(w.createElement("option"));
        d = q.getElementsByTagName("input")[0];
        b = {
            leadingWhitespace: 3 === q.firstChild.nodeType,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(c.getAttribute("style")),
            hrefNormalized: "/a" === c.getAttribute("href"),
            opacity: /^0.55/.test(c.style.opacity),
            cssFloat: !!c.style.cssFloat,
            checkOn: "on" === d.value,
            optSelected: g.selected,
            getSetAttribute: "t" !== q.className,
            enctype: !!w.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== w.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        d.checked = !0;
        b.noCloneChecked = d.cloneNode(!0).checked;
        e.disabled = !0;
        b.optDisabled = !g.disabled;
        try {
            delete q.test
        } catch(h) {
            b.deleteExpando = !1
        } ! q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick"));
        d = w.createElement("input");
        d.value = "t";
        d.setAttribute("type", "radio");
        b.radioValue = "t" === d.value;
        d.setAttribute("checked", "checked");
        q.appendChild(d);
        c = w.createDocumentFragment();
        c.appendChild(q.lastChild);
        b.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.appendChecked = d.checked;
        c.removeChild(d);
        c.appendChild(q);
        q.innerHTML = "";
        a.getComputedStyle && (f = w.createElement("div"), f.style.width = "0", f.style.marginRight = "0", q.style.width = "2px", q.appendChild(f), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(f, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        if (q.attachEvent) for (r in {
            submit: 1,
            change: 1,
            focusin: 1
        }) f = "on" + r,
        (k = f in q) || (q.setAttribute(f, "return;"), k = "function" == typeof q[f]),
        b[r + "Bubbles"] = k;
        c.removeChild(q);
        c = e = g = f = q = d = null;
        m(function() {
            var a, d, c, e, g, f = w.getElementsByTagName("body")[0]; ! f || (a = w.createElement("div"), a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(a, f.firstChild), q = w.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), k = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === l[0].offsetHeight, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", m.boxModel = b.boxModel = 2 === q.offsetWidth, "undefined" != typeof q.style.zoom && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === q.offsetWidth, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== q.offsetWidth), q.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;", q.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = q.firstChild, c = d.firstChild, e = d.nextSibling.firstChild.firstChild, g = {
                doesNotAddBorder: 5 !== c.offsetTop,
                doesAddBorderForTableAndCells: 5 === e.offsetTop
            },
            c.style.position = "fixed", c.style.top = "20px", g.fixedPosition = 20 === c.offsetTop || 15 === c.offsetTop, c.style.position = c.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === c.offsetTop, g.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, f.removeChild(a), q = null, m.extend(b, g))
        });
        return b
    } ();
    var Za = /^(?:\{.*\}|\[.*\])$/,
    Ya = /([A-Z])/g;
    m.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (m.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            b = b.nodeType ? m.cache[b[m.expando]] : b[m.expando];
            return !! b && !O(b)
        },
        data: function(b, a, d, c) {
            if (m.acceptData(b)) {
                var e, g;
                e = m.expando;
                var l = "string" == typeof a,
                r = b.nodeType,
                k = r ? m.cache: b,
                q = r ? b[e] : b[e] && e,
                h = "events" === a;
                if (q && k[q] && (h || c || k[q].data) || !l || d !== f) {
                    q || (r ? b[e] = q = ++m.uuid: q = e);
                    k[q] || (k[q] = {},
                    r || (k[q].toJSON = m.noop));
                    if ("object" == typeof a || "function" == typeof a) c ? k[q] = m.extend(k[q], a) : k[q].data = m.extend(k[q].data, a);
                    b = e = k[q];
                    c || (e.data || (e.data = {}), e = e.data);
                    d !== f && (e[m.camelCase(a)] = d);
                    if (h && !e[a]) return b.events;
                    l ? (g = e[a], null == g && (g = e[m.camelCase(a)])) : g = e;
                    return g
                }
            }
        },
        removeData: function(b, a, d) {
            if (m.acceptData(b)) {
                var c, e, g, f = m.expando,
                l = b.nodeType,
                r = l ? m.cache: b,
                k = l ? b[f] : f;
                if (r[k]) {
                    if (a && (c = d ? r[k] : r[k].data)) {
                        m.isArray(a) || (a in c ? a = [a] : (a = m.camelCase(a), a in c ? a = [a] : a = a.split(" ")));
                        e = 0;
                        for (g = a.length; e < g; e++) delete c[a[e]];
                        if (! (d ? O: m.isEmptyObject)(c)) return
                    }
                    if (!d && (delete r[k].data, !O(r[k]))) return;
                    m.support.deleteExpando || !r.setInterval ? delete r[k] : r[k] = null;
                    l && (m.support.deleteExpando ? delete b[f] : b.removeAttribute ? b.removeAttribute(f) : b[f] = null)
                }
            }
        },
        _data: function(b, a, d) {
            return m.data(b, a, d, !0)
        },
        acceptData: function(b) {
            if (b.nodeName) {
                var a = m.noData[b.nodeName.toLowerCase()];
                if (a) return ! 0 !== a && b.getAttribute("classid") === a
            }
            return ! 0
        }
    });
    m.fn.extend({
        data: function(b, a) {
            var d, c, e, g = null;
            if ("undefined" == typeof b) {
                if (this.length && (g = m.data(this[0]), 1 === this[0].nodeType && !m._data(this[0], "parsedAttrs"))) {
                    c = this[0].attributes;
                    for (var l = 0,
                    r = c.length; l < r; l++) e = c[l].name,
                    0 === e.indexOf("data-") && (e = m.camelCase(e.substring(5)), C(this[0], e, g[e]));
                    m._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            if ("object" == typeof b) return this.each(function() {
                m.data(this, b)
            });
            d = b.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            return a === f ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === f && this.length && (g = m.data(this[0], b), g = C(this[0], b, g)), g === f && d[1] ? this.data(d[0]) : g) : this.each(function() {
                var c = m(this),
                e = [d[0], a];
                c.triggerHandler("setData" + d[1] + "!", e);
                m.data(this, b, a);
                c.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(b) {
            return this.each(function() {
                m.removeData(this, b)
            })
        }
    });
    m.extend({
        _mark: function(b, a) {
            b && (a = (a || "fx") + "mark", m._data(b, a, (m._data(b, a) || 0) + 1))
        },
        _unmark: function(b, a, d) { ! 0 !== b && (d = a, a = b, b = !1);
            if (a) {
                d = d || "fx";
                var c = d + "mark"; (b = b ? 0 : (m._data(a, c) || 1) - 1) ? m._data(a, c, b) : (m.removeData(a, c, !0), L(a, d, "mark"))
            }
        },
        queue: function(b, a, d) {
            var c;
            if (b) return a = (a || "fx") + "queue",
            c = m._data(b, a),
            d && (!c || m.isArray(d) ? c = m._data(b, a, m.makeArray(d)) : c.push(d)),
            c || []
        },
        dequeue: function(b, a) {
            a = a || "fx";
            var d = m.queue(b, a),
            c = d.shift(),
            e = {};
            "inprogress" === c && (c = d.shift());
            c && ("fx" === a && d.unshift("inprogress"), m._data(b, a + ".run", e), c.call(b,
            function() {
                m.dequeue(b, a)
            },
            e));
            d.length || (m.removeData(b, a + "queue " + a + ".run", !0), L(b, a, "queue"))
        }
    });
    m.fn.extend({
        queue: function(b, a) {
            "string" != typeof b && (a = b, b = "fx");
            return a === f ? m.queue(this[0], b) : this.each(function() {
                var d = m.queue(this, b, a);
                "fx" === b && "inprogress" !== d[0] && m.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                m.dequeue(this, b)
            })
        },
        delay: function(b, a) {
            b = m.fx ? m.fx.speeds[b] || b: b;
            return this.queue(a || "fx",
            function(a, d) {
                var c = setTimeout(a, b);
                d.stop = function() {
                    clearTimeout(c)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, a) {
            function d() {--l || c.resolveWith(e, [e])
            }
            "string" != typeof b && (b = f);
            b = b || "fx";
            for (var c = m.Deferred(), e = this, g = e.length, l = 1, r = b + "defer", k = b + "queue", q = b + "mark", h; g--;) if (h = m.data(e[g], r, f, !0) || (m.data(e[g], k, f, !0) || m.data(e[g], q, f, !0)) && m.data(e[g], r, m.Callbacks("once memory"), !0)) l++,
            h.add(d);
            d();
            return c.promise()
        }
    });
    var va = /[\n\t\r]/g,
    ba = /\s+/,
    ab = /\r/g,
    bb = /^(?:button|input)$/i,
    cb = /^(?:button|input|object|select|textarea)$/i,
    db = /^a(?:rea)?$/i,
    wa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    xa = m.support.getSetAttribute,
    K, ya, za;
    m.fn.extend({
        attr: function(b, a) {
            return m.access(this, b, a, !0, m.attr)
        },
        removeAttr: function(b) {
            return this.each(function() {
                m.removeAttr(this, b)
            })
        },
        prop: function(b, a) {
            return m.access(this, b, a, !0, m.prop)
        },
        removeProp: function(b) {
            b = m.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = f,
                    delete this[b]
                } catch(a) {}
            })
        },
        addClass: function(b) {
            var a, d, c, e, g, f, l;
            if (m.isFunction(b)) return this.each(function(a) {
                m(this).addClass(b.call(this, a, this.className))
            });
            if (b && "string" == typeof b) for (a = b.split(ba), d = 0, c = this.length; d < c; d++) if (e = this[d], 1 === e.nodeType) if (e.className || 1 !== a.length) {
                g = " " + e.className + " ";
                f = 0;
                for (l = a.length; f < l; f++)~g.indexOf(" " + a[f] + " ") || (g += a[f] + " ");
                e.className = m.trim(g)
            } else e.className = b;
            return this
        },
        removeClass: function(b) {
            var a, d, c, e, g, l, r;
            if (m.isFunction(b)) return this.each(function(a) {
                m(this).removeClass(b.call(this, a, this.className))
            });
            if (b && "string" == typeof b || b === f) for (a = (b || "").split(ba), d = 0, c = this.length; d < c; d++) if (e = this[d], 1 === e.nodeType && e.className) if (b) {
                g = (" " + e.className + " ").replace(va, " ");
                l = 0;
                for (r = a.length; l < r; l++) g = g.replace(" " + a[l] + " ", " ");
                e.className = m.trim(g)
            } else e.className = "";
            return this
        },
        toggleClass: function(b, a) {
            var d = typeof b,
            c = "boolean" == typeof a;
            return m.isFunction(b) ? this.each(function(d) {
                m(this).toggleClass(b.call(this, d, this.className, a), a)
            }) : this.each(function() {
                if ("string" === d) for (var e, g = 0,
                f = m(this), l = a, r = b.split(ba); e = r[g++];) l = c ? l: !f.hasClass(e),
                f[l ? "addClass": "removeClass"](e);
                else if ("undefined" === d || "boolean" === d) this.className && m._data(this, "__className__", this.className),
                this.className = this.className || !1 === b ? "": m._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var a = 0,
            d = this.length; a < d; a++) if (1 === this[a].nodeType && -1 < (" " + this[a].className + " ").replace(va, " ").indexOf(b)) return ! 0;
            return ! 1
        },
        val: function(b) {
            var a, d, c, e = this[0];
            if (arguments.length) return c = m.isFunction(b),
            this.each(function(d) {
                var e = m(this),
                g;
                1 === this.nodeType && (c ? g = b.call(this, d, e.val()) : g = b, null == g ? g = "": "number" == typeof g ? g += "": m.isArray(g) && (g = m.map(g,
                function(b) {
                    return null == b ? "": b + ""
                })), a = m.valHooks[this.nodeName.toLowerCase()] || m.valHooks[this.type], a && "set" in a && a.set(this, g, "value") !== f || (this.value = g))
            });
            if (e) {
                if ((a = m.valHooks[e.nodeName.toLowerCase()] || m.valHooks[e.type]) && "get" in a && (d = a.get(e, "value")) !== f) return d;
                d = e.value;
                return "string" == typeof d ? d.replace(ab, "") : null == d ? "": d
            }
        }
    });
    m.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var a = b.attributes.value;
                    return ! a || a.specified ? b.value: b.text
                }
            },
            select: {
                get: function(b) {
                    var a, d, c = b.selectedIndex,
                    e = [],
                    g = b.options,
                    f = "select-one" === b.type;
                    if (0 > c) return null;
                    b = f ? c: 0;
                    for (d = f ? c + 1 : g.length; b < d; b++) if (a = g[b], a.selected && !((m.support.optDisabled ? a.disabled: null !== a.getAttribute("disabled")) || a.parentNode.disabled && m.nodeName(a.parentNode, "optgroup"))) {
                        a = m(a).val();
                        if (f) return a;
                        e.push(a)
                    }
                    return f && !e.length && g.length ? m(g[c]).val() : e
                },
                set: function(b, a) {
                    var d = m.makeArray(a);
                    m(b).find("option").each(function() {
                        this.selected = 0 <= m.inArray(m(this).val(), d)
                    });
                    d.length || (b.selectedIndex = -1);
                    return d
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(b, a, d, c) {
            var e, g, l = b.nodeType;
            if (b && 3 !== l && 8 !== l && 2 !== l) {
                if (c && a in m.attrFn) return m(b)[a](d);
                if ("undefined" == typeof b.getAttribute) return m.prop(b, a, d); (c = 1 !== l || !m.isXMLDoc(b)) && (a = a.toLowerCase(), g = m.attrHooks[a] || (wa.test(a) ? ya: K));
                if (d !== f) {
                    if (null === d) {
                        m.removeAttr(b, a);
                        return
                    }
                    if (g && "set" in g && c && (e = g.set(b, d, a)) !== f) return e;
                    b.setAttribute(a, "" + d);
                    return d
                }
                if (g && "get" in g && c && null !== (e = g.get(b, a))) return e;
                e = b.getAttribute(a);
                return null === e ? f: e
            }
        },
        removeAttr: function(b, a) {
            var d, c, e, g, f = 0;
            if (a && 1 === b.nodeType) for (c = a.toLowerCase().split(ba), g = c.length; f < g; f++)(e = c[f]) && (d = m.propFix[e] || e, m.attr(b, e, ""), b.removeAttribute(xa ? e: d), wa.test(e) && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, a) {
                    if (bb.test(b.nodeName) && b.parentNode) m.error("type property can't be changed");
                    else if (!m.support.radioValue && "radio" === a && m.nodeName(b, "input")) {
                        var d = b.value;
                        b.setAttribute("type", a);
                        d && (b.value = d);
                        return a
                    }
                }
            },
            value: {
                get: function(b, a) {
                    return K && m.nodeName(b, "button") ? K.get(b, a) : a in b ? b.value: null
                },
                set: function(b, a, d) {
                    if (K && m.nodeName(b, "button")) return K.set(b, a, d);
                    b.value = a
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, a, d) {
            var c, e, g;
            g = b.nodeType;
            if (b && 3 !== g && 8 !== g && 2 !== g) return (g = 1 !== g || !m.isXMLDoc(b)) && (a = m.propFix[a] || a, e = m.propHooks[a]),
            d !== f ? e && "set" in e && (c = e.set(b, d, a)) !== f ? c: b[a] = d: e && "get" in e && null !== (c = e.get(b, a)) ? c: b[a]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var a = b.getAttributeNode("tabindex");
                    return a && a.specified ? parseInt(a.value, 10) : cb.test(b.nodeName) || db.test(b.nodeName) && b.href ? 0 : f
                }
            }
        }
    });
    m.attrHooks.tabindex = m.propHooks.tabIndex;
    ya = {
        get: function(b, a) {
            var d, c = m.prop(b, a);
            return ! 0 === c || "boolean" != typeof c && (d = b.getAttributeNode(a)) && !1 !== d.nodeValue ? a.toLowerCase() : f
        },
        set: function(b, a, d) {
            var c; ! 1 === a ? m.removeAttr(b, d) : (c = m.propFix[d] || d, c in b && (b[c] = !0), b.setAttribute(d, d.toLowerCase()));
            return d
        }
    };
    xa || (za = {
        name: !0,
        id: !0
    },
    K = m.valHooks.button = {
        get: function(b, a) {
            var d;
            return (d = b.getAttributeNode(a)) && (za[a] ? "" !== d.nodeValue: d.specified) ? d.nodeValue: f
        },
        set: function(b, a, d) {
            var c = b.getAttributeNode(d);
            c || (c = w.createAttribute(d), b.setAttributeNode(c));
            return c.nodeValue = a + ""
        }
    },
    m.attrHooks.tabindex.set = K.set, m.each(["width", "height"],
    function(b, a) {
        m.attrHooks[a] = m.extend(m.attrHooks[a], {
            set: function(b, d) {
                if ("" === d) return b.setAttribute(a, "auto"),
                d
            }
        })
    }), m.attrHooks.contenteditable = {
        get: K.get,
        set: function(b, a, d) {
            "" === a && (a = "false");
            K.set(b, a, d)
        }
    });
    m.support.hrefNormalized || m.each(["href", "src", "width", "height"],
    function(b, a) {
        m.attrHooks[a] = m.extend(m.attrHooks[a], {
            get: function(b) {
                b = b.getAttribute(a, 2);
                return null === b ? f: b
            }
        })
    });
    m.support.style || (m.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || f
        },
        set: function(b, a) {
            return b.style.cssText = "" + a
        }
    });
    m.support.optSelected || (m.propHooks.selected = m.extend(m.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    }));
    m.support.enctype || (m.propFix.enctype = "encoding");
    m.support.checkOn || m.each(["radio", "checkbox"],
    function() {
        m.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on": b.value
            }
        }
    });
    m.each(["radio", "checkbox"],
    function() {
        m.valHooks[this] = m.extend(m.valHooks[this], {
            set: function(b, a) {
                if (m.isArray(a)) return b.checked = 0 <= m.inArray(m(b).val(), a)
            }
        })
    });
    var ka = /^(?:textarea|input|select)$/i,
    Aa = /^([^\.]*)?(?:\.(.+))?$/,
    eb = /\bhover(\.\S+)?\b/,
    fb = /^key/,
    gb = /^(?:mouse|contextmenu)|click/,
    Ba = /^(?:focusinfocus|focusoutblur)$/,
    hb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    ib = function(b) { (b = hb.exec(b)) && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    },
    Ca = function(b) {
        return m.event.special.hover ? b: b.replace(eb, "mouseenter$1 mouseleave$1")
    };
    m.event = {
        add: function(b, a, d, c, e) {
            var g, l, r, k, q, h, t, v, n;
            if (3 !== b.nodeType && 8 !== b.nodeType && a && d && (g = m._data(b))) {
                d.handler && (t = d, d = t.handler);
                d.guid || (d.guid = m.guid++); (r = g.events) || (g.events = r = {}); (l = g.handle) || (g.handle = l = function(b) {
                    return "undefined" == typeof m || b && m.event.triggered === b.type ? f: m.event.dispatch.apply(l.elem, arguments)
                },
                l.elem = b);
                a = m.trim(Ca(a)).split(" ");
                for (g = 0; g < a.length; g++) k = Aa.exec(a[g]) || [],
                q = k[1],
                h = (k[2] || "").split(".").sort(),
                n = m.event.special[q] || {},
                q = (e ? n.delegateType: n.bindType) || q,
                n = m.event.special[q] || {},
                k = m.extend({
                    type: q,
                    origType: k[1],
                    data: c,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    quick: ib(e),
                    namespace: h.join(".")
                },
                t),
                v = r[q],
                v || (v = r[q] = [], v.delegateCount = 0, n.setup && !1 !== n.setup.call(b, c, h, l) || (b.addEventListener ? b.addEventListener(q, l, !1) : b.attachEvent && b.attachEvent("on" + q, l))),
                n.add && (n.add.call(b, k), k.handler.guid || (k.handler.guid = d.guid)),
                e ? v.splice(v.delegateCount++, 0, k) : v.push(k),
                m.event.global[q] = !0;
                b = null
            }
        },
        global: {},
        remove: function(b, a, d, c, e) {
            var g = m.hasData(b) && m._data(b),
            f,
            l,
            r,
            k,
            q,
            h,
            t,
            v,
            n,
            y,
            s;
            if (g && (t = g.events)) {
                a = m.trim(Ca(a || "")).split(" ");
                for (f = 0; f < a.length; f++) if (l = Aa.exec(a[f]) || [], r = k = l[1], l = l[2], r) {
                    v = m.event.special[r] || {};
                    r = (c ? v.delegateType: v.bindType) || r;
                    y = t[r] || [];
                    q = y.length;
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < y.length; h++) s = y[h],
                    !e && k !== s.origType || d && d.guid !== s.guid || l && !l.test(s.namespace) || c && !(c === s.selector || "**" === c && s.selector) || (y.splice(h--, 1), s.selector && y.delegateCount--, !v.remove || v.remove.call(b, s));
                    0 === y.length && q !== y.length && ((!v.teardown || !1 === v.teardown.call(b, l)) && m.removeEvent(b, r, g.handle), delete t[r])
                } else for (r in t) m.event.remove(b, r + a[f], d, c, !0);
                m.isEmptyObject(t) && (n = g.handle, n && (n.elem = null), m.removeData(b, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(b, d, c, e) {
            if (!c || 3 !== c.nodeType && 8 !== c.nodeType) {
                var g = b.type || b,
                l = [],
                r,
                k,
                q,
                h,
                t,
                v;
                if (!Ba.test(g + m.event.triggered) && (0 <= g.indexOf("!") && (g = g.slice(0, -1), r = !0), 0 <= g.indexOf(".") && (l = g.split("."), g = l.shift(), l.sort()), c && !m.event.customEvent[g] || m.event.global[g])) if (b = "object" == typeof b ? b[m.expando] ? b: new m.Event(g, b) : new m.Event(g), b.type = g, b.isTrigger = !0, b.exclusive = r, b.namespace = l.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, r = 0 > g.indexOf(":") ? "on" + g: "", c) {
                    if (b.result = f, b.target || (b.target = c), d = null != d ? m.makeArray(d) : [], d.unshift(b), h = m.event.special[g] || {},
                    !h.trigger || !1 !== h.trigger.apply(c, d)) {
                        v = [[c, h.bindType || g]];
                        if (!e && !h.noBubble && !m.isWindow(c)) {
                            k = h.delegateType || g;
                            l = Ba.test(k + g) ? c: c.parentNode;
                            for (q = null; l; l = l.parentNode) v.push([l, k]),
                            q = l;
                            q && q === c.ownerDocument && v.push([q.defaultView || q.parentWindow || a, k])
                        }
                        for (k = 0; k < v.length && !b.isPropagationStopped(); k++) l = v[k][0],
                        b.type = v[k][1],
                        (t = (m._data(l, "events") || {})[b.type] && m._data(l, "handle")) && t.apply(l, d),
                        (t = r && l[r]) && m.acceptData(l) && !1 === t.apply(l, d) && b.preventDefault();
                        b.type = g;
                        e || b.isDefaultPrevented() || h._default && !1 !== h._default.apply(c.ownerDocument, d) || "click" === g && m.nodeName(c, "a") || m.acceptData(c) && r && c[g] && ("focus" !== g && "blur" !== g || 0 !== b.target.offsetWidth) && !m.isWindow(c) && (q = c[r], q && (c[r] = null), m.event.triggered = g, c[g](), m.event.triggered = f, q && (c[r] = q));
                        return b.result
                    }
                } else for (k in c = m.cache, c) c[k].events && c[k].events[g] && m.event.trigger(b, d, c[k].handle.elem, !0)
            }
        },
        dispatch: function(b) {
            b = m.event.fix(b || a.event);
            var d = (m._data(this, "events") || {})[b.type] || [],
            c = d.delegateCount,
            e = [].slice.call(arguments, 0),
            g = !b.exclusive && !b.namespace,
            l = [],
            r,
            k,
            q,
            h,
            t,
            v,
            n;
            e[0] = b;
            b.delegateTarget = this;
            if (c && !(b.target.disabled || b.button && "click" === b.type)) for (q = m(this), q.context = this.ownerDocument || this, k = b.target; k != this; k = k.parentNode || this) {
                t = {};
                v = [];
                q[0] = k;
                for (r = 0; r < c; r++) {
                    h = d[r];
                    n = h.selector;
                    if (t[n] === f) {
                        var y = t,
                        s = n,
                        p;
                        if (h.quick) {
                            p = h.quick;
                            var u = k.attributes || {};
                            p = (!p[1] || k.nodeName.toLowerCase() === p[1]) && (!p[2] || (u.id || {}).value === p[2]) && (!p[3] || p[3].test((u["class"] || {}).value))
                        } else p = q.is(n);
                        y[s] = p
                    }
                    t[n] && v.push(h)
                }
                v.length && l.push({
                    elem: k,
                    matches: v
                })
            }
            d.length > c && l.push({
                elem: this,
                matches: d.slice(c)
            });
            for (r = 0; r < l.length && !b.isPropagationStopped(); r++) for (c = l[r], b.currentTarget = c.elem, d = 0; d < c.matches.length && !b.isImmediatePropagationStopped(); d++) if (h = c.matches[d], g || !b.namespace && !h.namespace || b.namespace_re && b.namespace_re.test(h.namespace)) b.data = h.data,
            b.handleObj = h,
            h = ((m.event.special[h.origType] || {}).handle || h.handler).apply(c.elem, e),
            h !== f && (b.result = h, !1 === h && (b.preventDefault(), b.stopPropagation()));
            return b.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, a) {
                null == b.which && (b.which = null != a.charCode ? a.charCode: a.keyCode);
                return b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, a) {
                var d, c, e, g = a.button,
                l = a.fromElement;
                null == b.pageX && null != a.clientX && (d = b.target.ownerDocument || w, c = d.documentElement, e = d.body, b.pageX = a.clientX + (c && c.scrollLeft || e && e.scrollLeft || 0) - (c && c.clientLeft || e && e.clientLeft || 0), b.pageY = a.clientY + (c && c.scrollTop || e && e.scrollTop || 0) - (c && c.clientTop || e && e.clientTop || 0)); ! b.relatedTarget && l && (b.relatedTarget = l === b.target ? a.toElement: l); ! b.which && g !== f && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0);
                return b
            }
        },
        fix: function(b) {
            if (b[m.expando]) return b;
            var a, d, c = b,
            e = m.event.fixHooks[b.type] || {},
            g = e.props ? this.props.concat(e.props) : this.props;
            b = m.Event(c);
            for (a = g.length; a;) d = g[--a],
            b[d] = c[d];
            b.target || (b.target = c.srcElement || w);
            3 === b.target.nodeType && (b.target = b.target.parentNode);
            b.metaKey === f && (b.metaKey = b.ctrlKey);
            return e.filter ? e.filter(b, c) : b
        },
        special: {
            ready: {
                setup: m.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, a, d) {
                    m.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, a) {
                    this.onbeforeunload === a && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, a, d, c) {
            b = m.extend(new m.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            c ? m.event.trigger(b, null, a) : m.event.dispatch.call(a, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    m.event.handle = m.event.dispatch;
    m.removeEvent = w.removeEventListener ?
    function(b, a, d) {
        b.removeEventListener && b.removeEventListener(a, d, !1)
    }: function(b, a, d) {
        b.detachEvent && b.detachEvent("on" + a, d)
    };
    m.Event = function(b, a) {
        if (! (this instanceof m.Event)) return new m.Event(b, a);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? B: F) : this.type = b;
        a && m.extend(this, a);
        this.timeStamp = b && b.timeStamp || m.now();
        this[m.expando] = !0
    };
    m.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = B;
            var b = this.originalEvent; ! b || (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = B;
            var b = this.originalEvent; ! b || (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = B;
            this.stopPropagation()
        },
        isDefaultPrevented: F,
        isPropagationStopped: F,
        isImmediatePropagationStopped: F
    };
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(b, a) {
        m.event.special[b] = {
            delegateType: a,
            bindType: a,
            handle: function(b) {
                var d = b.relatedTarget,
                c = b.handleObj,
                e;
                if (!d || d !== this && !m.contains(this, d)) b.type = c.origType,
                e = c.handler.apply(this, arguments),
                b.type = a;
                return e
            }
        }
    });
    m.support.submitBubbles || (m.event.special.submit = {
        setup: function() {
            if (m.nodeName(this, "form")) return ! 1;
            m.event.add(this, "click._submit keypress._submit",
            function(b) {
                b = b.target; (b = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form: f) && !b._submit_attached && (m.event.add(b, "submit._submit",
                function(b) {
                    this.parentNode && !b.isTrigger && m.event.simulate("submit", this.parentNode, b, !0)
                }), b._submit_attached = !0)
            })
        },
        teardown: function() {
            if (m.nodeName(this, "form")) return ! 1;
            m.event.remove(this, "._submit")
        }
    });
    m.support.changeBubbles || (m.event.special.change = {
        setup: function() {
            if (ka.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) m.event.add(this, "propertychange._change",
                function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }),
                m.event.add(this, "click._change",
                function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1, m.event.simulate("change", this, b, !0))
                });
                return ! 1
            }
            m.event.add(this, "beforeactivate._change",
            function(b) {
                b = b.target;
                ka.test(b.nodeName) && !b._change_attached && (m.event.add(b, "change._change",
                function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && m.event.simulate("change", this.parentNode, b, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(b) {
            var a = b.target;
            if (this !== a || b.isSimulated || b.isTrigger || "radio" !== a.type && "checkbox" !== a.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            m.event.remove(this, "._change");
            return ka.test(this.nodeName)
        }
    });
    m.support.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(b, a) {
        var d = 0,
        c = function(b) {
            m.event.simulate(a, b.target, m.event.fix(b), !0)
        };
        m.event.special[a] = {
            setup: function() {
                0 === d++&&w.addEventListener(b, c, !0)
            },
            teardown: function() {
                0 === --d && w.removeEventListener(b, c, !0)
            }
        }
    });
    m.fn.extend({
        on: function(b, a, d, c, e) {
            var g, l;
            if ("object" == typeof b) {
                "string" != typeof a && (d = a, a = f);
                for (l in b) this.on(l, a, d, b[l], e);
                return this
            }
            null == d && null == c ? (c = a, d = a = f) : null == c && ("string" == typeof a ? (c = d, d = f) : (c = d, d = a, a = f));
            if (!1 === c) c = F;
            else if (!c) return this;
            1 === e && (g = c, c = function(b) {
                m().off(b);
                return g.apply(this, arguments)
            },
            c.guid = g.guid || (g.guid = m.guid++));
            return this.each(function() {
                m.event.add(this, b, c, d, a)
            })
        },
        one: function(b, a, d, c) {
            return this.on.call(this, b, a, d, c, 1)
        },
        off: function(b, a, d) {
            if (b && b.preventDefault && b.handleObj) {
                var c = b.handleObj;
                m(b.delegateTarget).off(c.namespace ? c.type + "." + c.namespace: c.type, c.selector, c.handler);
                return this
            }
            if ("object" == typeof b) {
                for (c in b) this.off(c, a, b[c]);
                return this
            }
            if (!1 === a || "function" == typeof a) d = a,
            a = f; ! 1 === d && (d = F);
            return this.each(function() {
                m.event.remove(this, b, d, a)
            })
        },
        bind: function(b, a, d) {
            return this.on(b, null, a, d)
        },
        unbind: function(b, a) {
            return this.off(b, null, a)
        },
        live: function(b, a, d) {
            m(this.context).on(b, this.selector, a, d);
            return this
        },
        die: function(b, a) {
            m(this.context).off(b, this.selector || "**", a);
            return this
        },
        delegate: function(b, a, d, c) {
            return this.on(a, b, d, c)
        },
        undelegate: function(b, a, d) {
            return 1 == arguments.length ? this.off(b, "**") : this.off(a, b, d)
        },
        trigger: function(b, a) {
            return this.each(function() {
                m.event.trigger(b, a, this)
            })
        },
        triggerHandler: function(b, a) {
            if (this[0]) return m.event.trigger(b, a, this[0], !0)
        },
        toggle: function(b) {
            var a = arguments,
            d = b.guid || m.guid++,
            c = 0,
            e = function(d) {
                var e = (m._data(this, "lastToggle" + b.guid) || 0) % c;
                m._data(this, "lastToggle" + b.guid, e + 1);
                d.preventDefault();
                return a[e].apply(this, arguments) || !1
            };
            for (e.guid = d; c < a.length;) a[c++].guid = d;
            return this.click(e)
        },
        hover: function(b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        }
    });
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(b, a) {
        m.fn[a] = function(b, d) {
            null == d && (d = b, b = null);
            return 0 < arguments.length ? this.on(a, null, b, d) : this.trigger(a)
        };
        m.attrFn && (m.attrFn[a] = !0);
        fb.test(a) && (m.event.fixHooks[a] = m.event.keyHooks);
        gb.test(a) && (m.event.fixHooks[a] = m.event.mouseHooks)
    }); (function() {
        function b(a, d, e, g, f, l) {
            f = 0;
            for (var r = g.length; f < r; f++) {
                var k = g[f];
                if (k) {
                    for (var m = !1,
                    k = k[a]; k;) {
                        if (k[c] === e) {
                            m = g[k.sizset];
                            break
                        }
                        if (1 === k.nodeType) if (l || (k[c] = e, k.sizset = f), "string" != typeof d) {
                            if (k === d) {
                                m = !0;
                                break
                            }
                        } else if (0 < t.filter(d, [k]).length) {
                            m = k;
                            break
                        }
                        k = k[a]
                    }
                    g[f] = m
                }
            }
        }
        function a(b, d, e, g, f, l) {
            f = 0;
            for (var r = g.length; f < r; f++) {
                var k = g[f];
                if (k) {
                    for (var m = !1,
                    k = k[b]; k;) {
                        if (k[c] === e) {
                            m = g[k.sizset];
                            break
                        }
                        1 === k.nodeType && !l && (k[c] = e, k.sizset = f);
                        if (k.nodeName.toLowerCase() === d) {
                            m = k;
                            break
                        }
                        k = k[b]
                    }
                    g[f] = m
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        c = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        l = !1,
        r = !0,
        k = /\\/g,
        q = /\r\n/g,
        h = /\W/; [0, 0].sort(function() {
            r = !1;
            return 0
        });
        var t = function(b, a, c, e) {
            c = c || [];
            var f = a = a || w;
            if (1 !== a.nodeType && 9 !== a.nodeType) return [];
            if (!b || "string" != typeof b) return c;
            var l, r, k, m, q, E, h = !0,
            v = t.isXML(a),
            H = [],
            oa = b;
            do
            if (d.exec(""), l = d.exec(oa)) if (oa = l[3], H.push(l[1]), l[2]) {
                m = l[3];
                break
            }
            while (l);
            if (1 < H.length && y.exec(b)) if (2 === H.length && n.relative[H[0]]) r = D(H[0] + H[1], a, e);
            else for (r = n.relative[H[0]] ? [a] : t(H.shift(), a); H.length;) b = H.shift(),
            n.relative[b] && (b += H.shift()),
            r = D(b, r, e);
            else if (!e && 1 < H.length && 9 === a.nodeType && !v && n.match.ID.test(H[0]) && !n.match.ID.test(H[H.length - 1]) && (q = t.find(H.shift(), a, v), a = q.expr ? t.filter(q.expr, q.set)[0] : q.set[0]), a) for (q = e ? {
                expr: H.pop(),
                set: u(e)
            }: t.find(H.pop(), 1 !== H.length || "~" !== H[0] && "+" !== H[0] || !a.parentNode ? a: a.parentNode, v), r = q.expr ? t.filter(q.expr, q.set) : q.set, 0 < H.length ? k = u(r) : h = !1; H.length;) l = E = H.pop(),
            n.relative[E] ? l = H.pop() : E = "",
            null == l && (l = a),
            n.relative[E](k, l, v);
            else k = [];
            k || (k = r);
            k || t.error(E || b);
            if ("[object Array]" === g.call(k)) if (h) if (a && 1 === a.nodeType) for (b = 0; null != k[b]; b++) k[b] && (!0 === k[b] || 1 === k[b].nodeType && t.contains(a, k[b])) && c.push(r[b]);
            else for (b = 0; null != k[b]; b++) k[b] && 1 === k[b].nodeType && c.push(r[b]);
            else c.push.apply(c, k);
            else u(k, c);
            m && (t(m, f, c, e), t.uniqueSort(c));
            return c
        };
        t.uniqueSort = function(b) {
            if (A && (l = r, b.sort(A), l)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1);
            return b
        };
        t.matches = function(b, a) {
            return t(b, null, null, a)
        };
        t.matchesSelector = function(b, a) {
            return 0 < t(a, null, null, [b]).length
        };
        t.find = function(b, a, d) {
            var c, e, g, f, l, r;
            if (!b) return [];
            e = 0;
            for (g = n.order.length; e < g; e++) if (l = n.order[e], f = n.leftMatch[l].exec(b)) if (r = f[1], f.splice(1, 1), "\\" !== r.substr(r.length - 1) && (f[1] = (f[1] || "").replace(k, ""), c = n.find[l](f, a, d), null != c)) {
                b = b.replace(n.match[l], "");
                break
            }
            c || (c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : []);
            return {
                set: c,
                expr: b
            }
        };
        t.filter = function(b, a, d, c) {
            for (var e, g, l, r, k, m, q, E, h = b,
            H = [], v = a, y = a && a[0] && t.isXML(a[0]); b && a.length;) {
                for (l in n.filter) if (null != (e = n.leftMatch[l].exec(b)) && e[2] && (m = n.filter[l], k = e[1], g = !1, e.splice(1, 1), "\\" !== k.substr(k.length - 1))) {
                    v === H && (H = []);
                    if (n.preFilter[l]) if (e = n.preFilter[l](e, v, d, H, c, y), !e) g = r = !0;
                    else if (!0 === e) continue;
                    if (e) for (q = 0; null != (k = v[q]); q++) k && (r = m(k, e, q, v), E = c ^ r, d && null != r ? E ? g = !0 : v[q] = !1 : E && (H.push(k), g = !0));
                    if (r !== f) {
                        d || (v = H);
                        b = b.replace(n.match[l], "");
                        if (!g) return [];
                        break
                    }
                }
                if (b === h) if (null == g) t.error(b);
                else break;
                h = b
            }
            return v
        };
        t.error = function(b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        var v = t.getText = function(b) {
            var a, d;
            a = b.nodeType;
            var c = "";
            if (a) if (1 === a || 9 === a) {
                if ("string" == typeof b.textContent) return b.textContent;
                if ("string" == typeof b.innerText) return b.innerText.replace(q, "");
                for (b = b.firstChild; b; b = b.nextSibling) c += v(b)
            } else {
                if (3 === a || 4 === a) return b.nodeValue
            } else for (a = 0; d = b[a]; a++) 8 !== d.nodeType && (c += v(d));
            return c
        },
        n = t.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(b) {
                    return b.getAttribute("href")

                },
                type: function(b) {
                    return b.getAttribute("type")
                }
            },
            relative: {
                "+": function(b, a) {
                    var d = "string" == typeof a,
                    c = d && !h.test(a),
                    d = d && !c;
                    c && (a = a.toLowerCase());
                    for (var c = 0,
                    e = b.length,
                    g; c < e; c++) if (g = b[c]) {
                        for (; (g = g.previousSibling) && 1 !== g.nodeType;);
                        b[c] = d || g && g.nodeName.toLowerCase() === a ? g || !1 : g === a
                    }
                    d && t.filter(a, b, !0)
                },
                ">": function(b, a) {
                    var d, c = "string" == typeof a,
                    e = 0,
                    g = b.length;
                    if (c && !h.test(a)) for (a = a.toLowerCase(); e < g; e++) {
                        if (d = b[e]) d = d.parentNode,
                        b[e] = d.nodeName.toLowerCase() === a ? d: !1
                    } else {
                        for (; e < g; e++)(d = b[e]) && (b[e] = c ? d.parentNode: d.parentNode === a);
                        c && t.filter(a, b, !0)
                    }
                },
                "": function(d, c, g) {
                    var f, l = e++,
                    r = b;
                    "string" == typeof c && !h.test(c) && (c = c.toLowerCase(), f = c, r = a);
                    r("parentNode", c, l, d, f, g)
                },
                "~": function(d, c, g) {
                    var f, l = e++,
                    r = b;
                    "string" == typeof c && !h.test(c) && (c = c.toLowerCase(), f = c, r = a);
                    r("previousSibling", c, l, d, f, g)
                }
            },
            find: {
                ID: function(b, a, d) {
                    if ("undefined" != typeof a.getElementById && !d) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
                },
                NAME: function(b, a) {
                    if ("undefined" != typeof a.getElementsByName) {
                        for (var d = [], c = a.getElementsByName(b[1]), e = 0, g = c.length; e < g; e++) c[e].getAttribute("name") === b[1] && d.push(c[e]);
                        return 0 === d.length ? null: d
                    }
                },
                TAG: function(b, a) {
                    if ("undefined" != typeof a.getElementsByTagName) return a.getElementsByTagName(b[1])
                }
            },
            preFilter: {
                CLASS: function(b, a, d, c, e, g) {
                    b = " " + b[1].replace(k, "") + " ";
                    if (g) return b;
                    g = 0;
                    for (var f; null != (f = a[g]); g++) f && (e ^ (f.className && 0 <= (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b)) ? d || c.push(f) : d && (a[g] = !1));
                    return ! 1
                },
                ID: function(b) {
                    return b[1].replace(k, "")
                },
                TAG: function(b, a) {
                    return b[1].replace(k, "").toLowerCase()
                },
                CHILD: function(b) {
                    if ("nth" === b[1]) {
                        b[2] || t.error(b[0]);
                        b[2] = b[2].replace(/^\+|\s*/g, "");
                        var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === b[2] && "2n" || "odd" === b[2] && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
                        b[2] = a[1] + (a[2] || 1) - 0;
                        b[3] = a[3] - 0
                    } else b[2] && t.error(b[0]);
                    b[0] = e++;
                    return b
                },
                ATTR: function(b, a, d, c, e, g) {
                    a = b[1] = b[1].replace(k, ""); ! g && n.attrMap[a] && (b[1] = n.attrMap[a]);
                    b[4] = (b[4] || b[5] || "").replace(k, "");
                    "~=" === b[2] && (b[4] = " " + b[4] + " ");
                    return b
                },
                PSEUDO: function(b, a, c, e, g) {
                    if ("not" === b[1]) if (1 < (d.exec(b[3]) || "").length || /^\w/.test(b[3])) b[3] = t(b[3], null, null, a);
                    else return b = t.filter(b[3], a, c, 1 ^ g),
                    c || e.push.apply(e, b),
                    !1;
                    else if (n.match.POS.test(b[0]) || n.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(b) {
                    b.unshift(!0);
                    return b
                }
            },
            filters: {
                enabled: function(b) {
                    return ! 1 === b.disabled && "hidden" !== b.type
                },
                disabled: function(b) {
                    return ! 0 === b.disabled
                },
                checked: function(b) {
                    return ! 0 === b.checked
                },
                selected: function(b) {
                    b.parentNode && b.parentNode.selectedIndex;
                    return ! 0 === b.selected
                },
                parent: function(b) {
                    return !! b.firstChild
                },
                empty: function(b) {
                    return ! b.firstChild
                },
                has: function(b, a, d) {
                    return !! t(d[3], b).length
                },
                header: function(b) {
                    return /h\d/i.test(b.nodeName)
                },
                text: function(b) {
                    var a = b.getAttribute("type"),
                    d = b.type;
                    return "input" === b.nodeName.toLowerCase() && "text" === d && (a === d || null === a)
                },
                radio: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "radio" === b.type
                },
                checkbox: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "checkbox" === b.type
                },
                file: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "file" === b.type
                },
                password: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "password" === b.type
                },
                submit: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && "submit" === b.type
                },
                image: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "image" === b.type
                },
                reset: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && "reset" === b.type
                },
                button: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && "button" === b.type || "button" === a
                },
                input: function(b) {
                    return /input|select|textarea|button/i.test(b.nodeName)
                },
                focus: function(b) {
                    return b === b.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(b, a) {
                    return 0 === a
                },
                last: function(b, a, d, c) {
                    return a === c.length - 1
                },
                even: function(b, a) {
                    return 0 === a % 2
                },
                odd: function(b, a) {
                    return 1 === a % 2
                },
                lt: function(b, a, d) {
                    return a < d[3] - 0
                },
                gt: function(b, a, d) {
                    return a > d[3] - 0
                },
                nth: function(b, a, d) {
                    return d[3] - 0 === a
                },
                eq: function(b, a, d) {
                    return d[3] - 0 === a
                }
            },
            filter: {
                PSEUDO: function(b, a, d, c) {
                    var e = a[1],
                    g = n.filters[e];
                    if (g) return g(b, d, a, c);
                    if ("contains" === e) return 0 <= (b.textContent || b.innerText || v([b]) || "").indexOf(a[3]);
                    if ("not" === e) {
                        a = a[3];
                        d = 0;
                        for (c = a.length; d < c; d++) if (a[d] === b) return ! 1;
                        return ! 0
                    }
                    t.error(e)
                },
                CHILD: function(b, a) {
                    var d, e, g, f, l, r;
                    d = a[1];
                    r = b;
                    switch (d) {
                    case "only":
                    case "first":
                        for (; r = r.previousSibling;) if (1 === r.nodeType) return ! 1;
                        if ("first" === d) return ! 0;
                        r = b;
                    case "last":
                        for (; r = r.nextSibling;) if (1 === r.nodeType) return ! 1;
                        return ! 0;
                    case "nth":
                        d = a[2];
                        e = a[3];
                        if (1 === d && 0 === e) return ! 0;
                        g = a[0];
                        if ((f = b.parentNode) && (f[c] !== g || !b.nodeIndex)) {
                            l = 0;
                            for (r = f.firstChild; r; r = r.nextSibling) 1 === r.nodeType && (r.nodeIndex = ++l);
                            f[c] = g
                        }
                        r = b.nodeIndex - e;
                        return 0 === d ? 0 === r: 0 === r % d && 0 <= r / d
                    }
                },
                ID: function(b, a) {
                    return 1 === b.nodeType && b.getAttribute("id") === a
                },
                TAG: function(b, a) {
                    return "*" === a && 1 === b.nodeType || !!b.nodeName && b.nodeName.toLowerCase() === a
                },
                CLASS: function(b, a) {
                    return - 1 < (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a)
                },
                ATTR: function(b, a) {
                    var d = a[1],
                    d = t.attr ? t.attr(b, d) : n.attrHandle[d] ? n.attrHandle[d](b) : null != b[d] ? b[d] : b.getAttribute(d),
                    c = d + "",
                    e = a[2],
                    g = a[4];
                    return null == d ? "!=" === e: !e && t.attr ? null != d: "=" === e ? c === g: "*=" === e ? 0 <= c.indexOf(g) : "~=" === e ? 0 <= (" " + c + " ").indexOf(g) : g ? "!=" === e ? c !== g: "^=" === e ? 0 === c.indexOf(g) : "$=" === e ? c.substr(c.length - g.length) === g: "|=" === e ? c === g || c.substr(0, g.length + 1) === g + "-": !1 : c && !1 !== d
                },
                POS: function(b, a, d, c) {
                    var e = n.setFilters[a[2]];
                    if (e) return e(b, d, a, c)
                }
            }
        },
        y = n.match.POS,
        s = function(b, a) {
            return "\\" + (a - 0 + 1)
        },
        p;
        for (p in n.match) n.match[p] = new RegExp(n.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        n.leftMatch[p] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[p].source.replace(/\\(\d+)/g, s));
        var u = function(b, a) {
            b = Array.prototype.slice.call(b, 0);
            return a ? (a.push.apply(a, b), a) : b
        };
        try {
            Array.prototype.slice.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch(z) {
            u = function(b, a) {
                var d = 0,
                c = a || [];
                if ("[object Array]" === g.call(b)) Array.prototype.push.apply(c, b);
                else if ("number" == typeof b.length) for (var e = b.length; d < e; d++) c.push(b[d]);
                else for (; b[d]; d++) c.push(b[d]);
                return c
            }
        }
        var A, x;
        w.documentElement.compareDocumentPosition ? A = function(b, a) {
            return b === a ? (l = !0, 0) : b.compareDocumentPosition && a.compareDocumentPosition ? b.compareDocumentPosition(a) & 4 ? -1 : 1 : b.compareDocumentPosition ? -1 : 1
        }: (A = function(b, a) {
            if (b === a) return l = !0,
            0;
            if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
            var d, c, e = [],
            g = [];
            d = b.parentNode;
            c = a.parentNode;
            var f = d;
            if (d === c) return x(b, a);
            if (!d) return - 1;
            if (!c) return 1;
            for (; f;) e.unshift(f),
            f = f.parentNode;
            for (f = c; f;) g.unshift(f),
            f = f.parentNode;
            d = e.length;
            c = g.length;
            for (f = 0; f < d && f < c; f++) if (e[f] !== g[f]) return x(e[f], g[f]);
            return f === d ? x(b, g[f], -1) : x(e[f], a, 1)
        },
        x = function(b, a, d) {
            if (b === a) return d;
            for (b = b.nextSibling; b;) {
                if (b === a) return - 1;
                b = b.nextSibling
            }
            return 1
        }); (function() {
            var b = w.createElement("div"),
            a = "script" + (new Date).getTime(),
            d = w.documentElement;
            b.innerHTML = "<a name='" + a + "'/>";
            d.insertBefore(b, d.firstChild);
            w.getElementById(a) && (n.find.ID = function(b, a, d) {
                if ("undefined" != typeof a.getElementById && !d) return (a = a.getElementById(b[1])) ? a.id === b[1] || "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id").nodeValue === b[1] ? [a] : f: []
            },
            n.filter.ID = function(b, a) {
                var d = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id");
                return 1 === b.nodeType && d && d.nodeValue === a
            });
            d.removeChild(b);
            d = b = null
        })(); (function() {
            var b = w.createElement("div");
            b.appendChild(w.createComment(""));
            0 < b.getElementsByTagName("*").length && (n.find.TAG = function(b, a) {
                var d = a.getElementsByTagName(b[1]);
                if ("*" === b[1]) {
                    for (var c = [], e = 0; d[e]; e++) 1 === d[e].nodeType && c.push(d[e]);
                    d = c
                }
                return d
            });
            b.innerHTML = "<a href='#'></a>";
            b.firstChild && "undefined" != typeof b.firstChild.getAttribute && "#" !== b.firstChild.getAttribute("href") && (n.attrHandle.href = function(b) {
                return b.getAttribute("href", 2)
            });
            b = null
        })();
        w.querySelectorAll &&
        function() {
            var b = t,
            a = w.createElement("div");
            a.innerHTML = "<p class='TEST'></p>";
            if (!a.querySelectorAll || 0 !== a.querySelectorAll(".TEST").length) {
                t = function(a, d, c, e) {
                    d = d || w;
                    if (!e && !t.isXML(d)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (g[1]) return u(d.getElementsByTagName(a), c);
                            if (g[2] && n.find.CLASS && d.getElementsByClassName) return u(d.getElementsByClassName(g[2]), c)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === a && d.body) return u([d.body], c);
                            if (g && g[3]) {
                                var f = d.getElementById(g[3]);
                                if (!f || !f.parentNode) return u([], c);
                                if (f.id === g[3]) return u([f], c)
                            }
                            try {
                                return u(d.querySelectorAll(a), c)
                            } catch(l) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var g = d,
                            r = (f = d.getAttribute("id")) || "__sizzle__",
                            k = d.parentNode,
                            m = /^\s*[+~]/.test(a);
                            f ? r = r.replace(/'/g, "\\$&") : d.setAttribute("id", r);
                            m && k && (d = d.parentNode);
                            try {
                                if (!m || k) return u(d.querySelectorAll("[id='" + r + "'] " + a), c)
                            } catch(q) {} finally {
                                f || g.removeAttribute("id")
                            }
                        }
                    }
                    return b(a, d, c, e)
                };
                for (var d in b) t[d] = b[d];
                a = null
            }
        } (); (function() {
            var b = w.documentElement,
            a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
            if (a) {
                var d = !a.call(w.createElement("div"), "div"),
                c = !1;
                try {
                    a.call(w.documentElement, "[test!='']:sizzle")
                } catch(e) {
                    c = !0
                }
                t.matchesSelector = function(b, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!t.isXML(b)) try {
                        if (c || !n.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var g = a.call(b, e);
                            if (g || !d || b.document && 11 !== b.document.nodeType) return g
                        }
                    } catch(f) {}
                    return 0 < t(e, null, null, [b]).length
                }
            }
        })(); (function() {
            var b = w.createElement("div");
            b.innerHTML = "<div class='test e'></div><div class='test'></div>";
            b.getElementsByClassName && 0 !== b.getElementsByClassName("e").length && (b.lastChild.className = "e", 1 !== b.getElementsByClassName("e").length && (n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(b, a, d) {
                if ("undefined" != typeof a.getElementsByClassName && !d) return a.getElementsByClassName(b[1])
            },
            b = null))
        })();
        w.documentElement.contains ? t.contains = function(b, a) {
            return b !== a && (b.contains ? b.contains(a) : !0)
        }: w.documentElement.compareDocumentPosition ? t.contains = function(b, a) {
            return !! (b.compareDocumentPosition(a) & 16)
        }: t.contains = function() {
            return ! 1
        };
        t.isXML = function(b) {
            return (b = (b ? b.ownerDocument || b: 0).documentElement) ? "HTML" !== b.nodeName: !1
        };
        var D = function(b, a, d) {
            var c, e = [],
            g = "";
            for (a = a.nodeType ? [a] : a; c = n.match.PSEUDO.exec(b);) g += c[0],
            b = b.replace(n.match.PSEUDO, "");
            b = n.relative[b] ? b + "*": b;
            c = 0;
            for (var f = a.length; c < f; c++) t(b, a[c], e, d);
            return t.filter(g, e)
        };
        t.attr = m.attr;
        t.selectors.attrMap = {};
        m.find = t;
        m.expr = t.selectors;
        m.expr[":"] = m.expr.filters;
        m.unique = t.uniqueSort;
        m.text = t.getText;
        m.isXMLDoc = t.isXML;
        m.contains = t.contains
    })();
    var jb = /Until$/,
    kb = /^(?:parents|prevUntil|prevAll)/,
    lb = /,/,
    Xa = /^.[^:#\[\.,]*$/,
    mb = Array.prototype.slice,
    Da = m.expr.match.POS,
    nb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.fn.extend({
        find: function(b) {
            var a = this,
            d, c;
            if ("string" != typeof b) return m(b).filter(function() {
                d = 0;
                for (c = a.length; d < c; d++) if (m.contains(a[d], this)) return ! 0
            });
            var e = this.pushStack("", "find", b),
            g,
            f,
            l;
            d = 0;
            for (c = this.length; d < c; d++) if (g = e.length, m.find(b, this[d], e), 0 < d) for (f = g; f < e.length; f++) for (l = 0; l < g; l++) if (e[l] === e[f]) {
                e.splice(f--, 1);
                break
            }
            return e
        },
        has: function(b) {
            var a = m(b);
            return this.filter(function() {
                for (var b = 0,
                d = a.length; b < d; b++) if (m.contains(this, a[b])) return ! 0
            })
        },
        not: function(b) {
            return this.pushStack(x(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(x(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !! b && ("string" == typeof b ? Da.test(b) ? 0 <= m(b, this.context).index(this[0]) : 0 < m.filter(b, this).length: 0 < this.filter(b).length)
        },
        closest: function(b, a) {
            var d = [],
            c,
            e,
            g = this[0];
            if (m.isArray(b)) {
                for (e = 1; g && g.ownerDocument && g !== a;) {
                    for (c = 0; c < b.length; c++) m(g).is(b[c]) && d.push({
                        selector: b[c],
                        elem: g,
                        level: e
                    });
                    g = g.parentNode;
                    e++
                }
                return d
            }
            var f = Da.test(b) || "string" != typeof b ? m(b, a || this.context) : 0;
            c = 0;
            for (e = this.length; c < e; c++) for (g = this[c]; g;) {
                if (f ? -1 < f.index(g) : m.find.matchesSelector(g, b)) {
                    d.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === a || 11 === g.nodeType) break
            }
            d = 1 < d.length ? m.unique(d) : d;
            return this.pushStack(d, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? m.inArray(this[0], m(b)) : m.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(b, a) {
            var d = "string" == typeof b ? m(b, a) : m.makeArray(b && b.nodeType ? [b] : b),
            c = m.merge(this.get(), d);
            return this.pushStack(D(d[0]) || D(c[0]) ? c: m.unique(c))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    m.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b: null
        },
        parents: function(b) {
            return m.dir(b, "parentNode")
        },
        parentsUntil: function(b, a, d) {
            return m.dir(b, "parentNode", d)
        },
        next: function(b) {
            return m.nth(b, 2, "nextSibling")
        },
        prev: function(b) {
            return m.nth(b, 2, "previousSibling")
        },
        nextAll: function(b) {
            return m.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return m.dir(b, "previousSibling")
        },
        nextUntil: function(b, a, d) {
            return m.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, a, d) {
            return m.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return m.sibling(b.parentNode.firstChild, b)
        },
        children: function(b) {
            return m.sibling(b.firstChild)
        },
        contents: function(b) {
            return m.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document: m.makeArray(b.childNodes)
        }
    },
    function(b, a) {
        m.fn[b] = function(d, c) {
            var e = m.map(this, a, d);
            jb.test(b) || (c = d);
            c && "string" == typeof c && (e = m.filter(c, e));
            e = 1 < this.length && !nb[b] ? m.unique(e) : e; (1 < this.length || lb.test(c)) && kb.test(b) && (e = e.reverse());
            return this.pushStack(e, b, mb.call(arguments).join(","))
        }
    });
    m.extend({
        filter: function(b, a, d) {
            d && (b = ":not(" + b + ")");
            return 1 === a.length ? m.find.matchesSelector(a[0], b) ? [a[0]] : [] : m.find.matches(b, a)
        },
        dir: function(b, a, d) {
            var c = [];
            for (b = b[a]; b && 9 !== b.nodeType && (d === f || 1 !== b.nodeType || !m(b).is(d));) 1 === b.nodeType && c.push(b),
            b = b[a];
            return c
        },
        nth: function(b, a, d, c) {
            a = a || 1;
            for (c = 0; b && (1 !== b.nodeType || ++c !== a); b = b[d]);
            return b
        },
        sibling: function(b, a) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== a && d.push(b);
            return d
        }
    });
    var ra = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ob = / jQuery\d+="(?:\d+|null)"/g,
    la = /^\s+/,
    Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Fa = /<([\w:]+)/,
    pb = /<tbody/i,
    qb = /<|&#?\w+;/,
    rb = /<(?:script|style)/i,
    sb = /<(?:script|object|embed|option|style)/i,
    Ga = new RegExp("<(?:" + ra + ")", "i"),
    Ha = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tb = /\/(java|ecma)script/i,
    Wa = /^\s*<!(?:\[CDATA\[|\-\-)/,
    I = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    Ia = A(w);
    I.optgroup = I.option;
    I.tbody = I.tfoot = I.colgroup = I.caption = I.thead;
    I.th = I.td;
    m.support.htmlSerialize || (I._default = [1, "div<div>", "</div>"]);
    m.fn.extend({
        text: function(b) {
            return m.isFunction(b) ? this.each(function(a) {
                var d = m(this);
                d.text(b.call(this, a, d.text()))
            }) : "object" != typeof b && b !== f ? this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(b)) : m.text(this)
        },
        wrapAll: function(b) {
            if (m.isFunction(b)) return this.each(function(a) {
                m(this).wrapAll(b.call(this, a))
            });
            if (this[0]) {
                var a = m(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return m.isFunction(b) ? this.each(function(a) {
                m(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = m(this),
                d = a.contents();
                d.length ? d.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(b) {
            var a = m.isFunction(b);
            return this.each(function(d) {
                m(this).wrapAll(a ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(b) {
                1 === this.nodeType && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(b) {
                1 === this.nodeType && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = m.clean(arguments);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, m.clean(arguments));
                return b
            }
        },
        remove: function(b, a) {
            for (var d = 0,
            c; null != (c = this[d]); d++) if (!b || m.filter(b, [c]).length) ! a && 1 === c.nodeType && (m.cleanData(c.getElementsByTagName("*")), m.cleanData([c])),
            c.parentNode && c.parentNode.removeChild(c);
            return this
        },
        empty: function() {
            for (var b = 0,
            a; null != (a = this[b]); b++) for (1 === a.nodeType && m.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(b, a) {
            b = null == b ? !1 : b;
            a = null == a ? b: a;
            return this.map(function() {
                return m.clone(this, b, a)
            })
        },
        html: function(b) {
            if (b === f) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ob, "") : null;
            if ("string" != typeof b || rb.test(b) || !m.support.leadingWhitespace && la.test(b) || I[(Fa.exec(b) || ["", ""])[1].toLowerCase()]) m.isFunction(b) ? this.each(function(a) {
                var d = m(this);
                d.html(b.call(this, a, d.html()))
            }) : this.empty().append(b);
            else {
                b = b.replace(Ea, "<$1></$2>");
                try {
                    for (var a = 0,
                    d = this.length; a < d; a++) 1 === this[a].nodeType && (m.cleanData(this[a].getElementsByTagName("*")), this[a].innerHTML = b)
                } catch(c) {
                    this.empty().append(b)
                }
            }
            return this
        },
        replaceWith: function(b) {
            if (this[0] && this[0].parentNode) {
                if (m.isFunction(b)) return this.each(function(a) {
                    var d = m(this),
                    c = d.html();
                    d.replaceWith(b.call(this, a, c))
                });
                "string" != typeof b && (b = m(b).detach());
                return this.each(function() {
                    var a = this.nextSibling,
                    d = this.parentNode;
                    m(this).remove();
                    a ? m(a).before(b) : m(d).append(b)
                })
            }
            return this.length ? this.pushStack(m(m.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, a, d) {
            var c, e, g, l = b[0],
            r = [];
            if (!m.support.checkClone && 3 === arguments.length && "string" == typeof l && Ha.test(l)) return this.each(function() {
                m(this).domManip(b, a, d, !0)
            });
            if (m.isFunction(l)) return this.each(function(c) {
                var e = m(this);
                b[0] = l.call(this, c, a ? e.html() : f);
                e.domManip(b, a, d)
            });
            if (this[0]) {
                g = l && l.parentNode;
                m.support.parentNode && g && 11 === g.nodeType && g.childNodes.length === this.length ? c = {
                    fragment: g
                }: c = m.buildFragment(b, this, r);
                g = c.fragment;
                1 === g.childNodes.length ? e = g = g.firstChild: e = g.firstChild;
                if (e) {
                    a = a && m.nodeName(e, "tr");
                    for (var k = 0,
                    q = this.length,
                    h = q - 1; k < q; k++) d.call(a ? z(this[k], e) : this[k], c.cacheable || 1 < q && k < h ? m.clone(g, !0, !0) : g)
                }
                r.length && m.each(r, t)
            }
            return this
        }
    });
    m.buildFragment = function(b, a, d) {
        var c, e, g, f, l = b[0];
        a && a[0] && (f = a[0].ownerDocument || a[0]);
        f.createDocumentFragment || (f = w);
        1 === b.length && "string" == typeof l && 512 > l.length && f === w && "<" === l.charAt(0) && !(sb.test(l) || !m.support.checkClone && Ha.test(l) || !m.support.html5Clone && Ga.test(l)) && (e = !0, g = m.fragments[l], g && 1 !== g && (c = g));
        c || (c = f.createDocumentFragment(), m.clean(b, f, c, d));
        e && (m.fragments[l] = g ? c: 1);
        return {
            fragment: c,
            cacheable: e
        }
    };
    m.fragments = {};
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(b, a) {
        m.fn[b] = function(d) {
            var c = [];
            d = m(d);
            var e = 1 === this.length && this[0].parentNode;
            if (e && 11 === e.nodeType && 1 === e.childNodes.length && 1 === d.length) return d[a](this[0]),
            this;
            for (var e = 0,
            g = d.length; e < g; e++) {
                var f = (0 < e ? this.clone(!0) : this).get();
                m(d[e])[a](f);
                c = c.concat(f)
            }
            return this.pushStack(c, b, d.selector)
        }
    });
    m.extend({
        clone: function(b, a, d) {
            var c, e, g;
            m.support.html5Clone || !Ga.test("<" + b.nodeName) ? c = b.cloneNode(!0) : (c = w.createElement("div"), Ia.appendChild(c), c.innerHTML = b.outerHTML, c = c.firstChild);
            var f = c;
            if (! (m.support.noCloneEvent && m.support.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || m.isXMLDoc(b))) for (s(b, f), c = y(b), e = y(f), g = 0; c[g]; ++g) e[g] && s(c[g], e[g]);
            if (a && (u(b, f), d)) for (c = y(b), e = y(f), g = 0; c[g]; ++g) u(c[g], e[g]);
            return f
        },
        clean: function(b, a, d, c) {
            a = a || w;
            "undefined" == typeof a.createElement && (a = a.ownerDocument || a[0] && a[0].ownerDocument || w);
            for (var e = [], g, f = 0, l; null != (l = b[f]); f++) if ("number" == typeof l && (l += ""), l) {
                if ("string" == typeof l) if (qb.test(l)) {
                    l = l.replace(Ea, "<$1></$2>");
                    g = (Fa.exec(l) || ["", ""])[1].toLowerCase();
                    var r = I[g] || I._default,
                    k = r[0],
                    q = a.createElement("div");
                    a === w ? Ia.appendChild(q) : A(a).appendChild(q);
                    for (q.innerHTML = r[1] + l + r[2]; k--;) q = q.lastChild;
                    if (!m.support.tbody) for (k = pb.test(l), r = "table" !== g || k ? "<table>" !== r[1] || k ? [] : q.childNodes: q.firstChild && q.firstChild.childNodes, g = r.length - 1; 0 <= g; --g) m.nodeName(r[g], "tbody") && !r[g].childNodes.length && r[g].parentNode.removeChild(r[g]); ! m.support.leadingWhitespace && la.test(l) && q.insertBefore(a.createTextNode(la.exec(l)[0]), q.firstChild);
                    l = q.childNodes
                } else l = a.createTextNode(l);
                var h;
                if (!m.support.appendChecked) if (l[0] && "number" == typeof(h = l.length)) for (g = 0; g < h; g++) v(l[g]);
                else v(l);
                l.nodeType ? e.push(l) : e = m.merge(e, l)
            }
            if (d) for (b = function(b) {
                return ! b.type || tb.test(b.type)
            },
            f = 0; e[f]; f++) ! c || !m.nodeName(e[f], "script") || e[f].type && "text/javascript" !== e[f].type.toLowerCase() ? (1 === e[f].nodeType && (a = m.grep(e[f].getElementsByTagName("script"), b), e.splice.apply(e, [f + 1, 0].concat(a))), d.appendChild(e[f])) : c.push(e[f].parentNode ? e[f].parentNode.removeChild(e[f]) : e[f]);
            return e
        },
        cleanData: function(b) {
            for (var a, d, c = m.cache,
            e = m.event.special,
            g = m.support.deleteExpando,
            f = 0,
            l; null != (l = b[f]); f++) if (!l.nodeName || !m.noData[l.nodeName.toLowerCase()]) if (d = l[m.expando]) {
                if ((a = c[d]) && a.events) {
                    for (var r in a.events) e[r] ? m.event.remove(l, r) : m.removeEvent(l, r, a.handle);
                    a.handle && (a.handle.elem = null)
                }
                g ? delete l[m.expando] : l.removeAttribute && l.removeAttribute(m.expando);
                delete c[d]
            }
        }
    });
    var ma = /alpha\([^)]*\)/i,
    ub = /opacity=([^)]*)/,
    vb = /([A-Z]|^ms)/g,
    Ja = /^-?\d+(?:px)?$/i,
    wb = /^-?\d/,
    xb = /^([\-+])=([\-+.\de]+)/,
    yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ua = ["Left", "Right"],
    Va = ["Top", "Bottom"],
    S,
    Ka,
    La;
    m.fn.css = function(b, a) {
        return 2 === arguments.length && a === f ? this: m.access(this, b, a, !0,
        function(b, a, d) {
            return d !== f ? m.style(b, a, d) : m.css(b, a)
        })
    };
    m.extend({
        cssHooks: {
            opacity: {
                get: function(b, a) {
                    if (a) {
                        var d = S(b, "opacity", "opacity");
                        return "" === d ? "1": d
                    }
                    return b.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": m.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(b, a, d, c) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var e, g = m.camelCase(a),
                l = b.style,
                r = m.cssHooks[g];
                a = m.cssProps[g] || g;
                if (d === f) return r && "get" in r && (e = r.get(b, !1, c)) !== f ? e: l[a];
                c = typeof d;
                "string" === c && (e = xb.exec(d)) && (d = +(e[1] + 1) * +e[2] + parseFloat(m.css(b, a)), c = "number");
                if (! (null == d || "number" === c && isNaN(d) || ("number" === c && !m.cssNumber[g] && (d += "px"), r && "set" in r && (d = r.set(b, d)) === f))) try {
                    l[a] = d
                } catch(k) {}
            }
        },
        css: function(b, a, d) {
            var c, e;
            a = m.camelCase(a);
            e = m.cssHooks[a];
            a = m.cssProps[a] || a;
            "cssFloat" === a && (a = "float");
            if (e && "get" in e && (c = e.get(b, !0, d)) !== f) return c;
            if (S) return S(b, a)
        },
        swap: function(b, a, d) {
            var c = {},
            e;
            for (e in a) c[e] = b.style[e],
            b.style[e] = a[e];
            d.call(b);
            for (e in a) b.style[e] = c[e]
        }
    });
    m.curCSS = m.css;
    m.each(["height", "width"],
    function(b, a) {
        m.cssHooks[a] = {
            get: function(b, d, c) {
                var e;
                if (d) {
                    if (0 !== b.offsetWidth) return l(b, a, c);
                    m.swap(b, yb,
                    function() {
                        e = l(b, a, c)
                    });
                    return e
                }
            },
            set: function(b, a) {
                if (!Ja.test(a)) return a;
                a = parseFloat(a);
                if (0 <= a) return a + "px"
            }
        }
    });
    m.support.opacity || (m.cssHooks.opacity = {
        get: function(b, a) {
            return ub.test((a && b.currentStyle ? b.currentStyle.filter: b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": a ? "1": ""
        },
        set: function(b, a) {
            var d = b.style,
            c = b.currentStyle,
            e = m.isNumeric(a) ? "alpha(opacity=" + 100 * a + ")": "",
            g = c && c.filter || d.filter || "";
            d.zoom = 1;
            if (1 <= a && "" === m.trim(g.replace(ma, "")) && (d.removeAttribute("filter"), c && !c.filter)) return;
            d.filter = ma.test(g) ? g.replace(ma, e) : g + " " + e
        }
    });
    m(function() {
        m.support.reliableMarginRight || (m.cssHooks.marginRight = {
            get: function(b, a) {
                var d;
                m.swap(b, {
                    display: "inline-block"
                },
                function() {
                    a ? d = S(b, "margin-right", "marginRight") : d = b.style.marginRight
                });
                return d
            }
        })
    });
    w.defaultView && w.defaultView.getComputedStyle && (Ka = function(b, a) {
        var d, c, e;
        a = a.replace(vb, "-$1").toLowerCase(); (c = b.ownerDocument.defaultView) && (e = c.getComputedStyle(b, null)) && (d = e.getPropertyValue(a), "" === d && !m.contains(b.ownerDocument.documentElement, b) && (d = m.style(b, a)));
        return d
    });
    w.documentElement.currentStyle && (La = function(b, a) {
        var d, c, e, g = b.currentStyle && b.currentStyle[a],
        f = b.style;
        null === g && f && (e = f[a]) && (g = e); ! Ja.test(g) && wb.test(g) && (d = f.left, c = b.runtimeStyle && b.runtimeStyle.left, c && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === a ? "1em": g || 0, g = f.pixelLeft + "px", f.left = d, c && (b.runtimeStyle.left = c));
        return "" === g ? "auto": g
    });
    S = Ka || La;
    m.expr && m.expr.filters && (m.expr.filters.hidden = function(b) {
        var a = b.offsetHeight;
        return 0 === b.offsetWidth && 0 === a || !m.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || m.css(b, "display"))
    },
    m.expr.filters.visible = function(b) {
        return ! m.expr.filters.hidden(b)
    });
    var zb = /%20/g,
    Ta = /\[\]$/,
    Ma = /\r?\n/g,
    Ab = /#.*$/,
    Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Cb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Db = /^(?:GET|HEAD)$/,
    Eb = /^\/\//,
    Na = /\?/,
    Fb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Gb = /^(?:select|textarea)/i,
    qa = /\s+/,
    Hb = /([?&])_=[^&]*/,
    Oa = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    Pa = m.fn.load,
    ga = {},
    Qa = {},
    M, P, Ra = ["*/"] + ["*"];
    try {
        M = V.href
    } catch(Nb) {
        M = w.createElement("a"),
        M.href = "",
        M = M.href
    }
    P = Oa.exec(M.toLowerCase()) || [];
    m.fn.extend({
        load: function(b, a, d) {
            if ("string" != typeof b && Pa) return Pa.apply(this, arguments);
            if (!this.length) return this;
            var c = b.indexOf(" ");
            if (0 <= c) {
                var e = b.slice(c, b.length);
                b = b.slice(0, c)
            }
            c = "GET";
            a && (m.isFunction(a) ? (d = a, a = f) : "object" == typeof a && (a = m.param(a, m.ajaxSettings.traditional), c = "POST"));
            var g = this;
            m.ajax({
                url: b,
                type: c,
                dataType: "html",
                data: a,
                complete: function(b, a, c) {
                    c = b.responseText;
                    b.isResolved() && (b.done(function(b) {
                        c = b
                    }), g.html(e ? m("<div>").append(c.replace(Fb, "")).find(e) : c));
                    d && g.each(d, [c, a, b])
                }
            });
            return this
        },
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? m.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Gb.test(this.nodeName) || Cb.test(this.type))
            }).map(function(b, a) {
                var d = m(this).val();
                return null == d ? null: m.isArray(d) ? m.map(d,
                function(b, d) {
                    return {
                        name: a.name,
                        value: b.replace(Ma, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: d.replace(Ma, "\r\n")
                }
            }).get()
        }
    });
    m.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(b, a) {
        m.fn[a] = function(b) {
            return this.on(a, b)
        }
    });
    m.each(["get", "post"],
    function(b, a) {
        m[a] = function(b, d, c, e) {
            m.isFunction(d) && (e = e || c, c = d, d = f);
            return m.ajax({
                type: a,
                url: b,
                data: d,
                success: c,
                dataType: e
            })
        }
    });
    m.extend({
        getScript: function(b, a) {
            return m.get(b, f, a, "script")
        },
        getJSON: function(b, a, d) {
            return m.get(b, a, d, "json")
        },
        ajaxSetup: function(b, a) {
            a ? g(b, m.ajaxSettings) : (a = b, b = m.ajaxSettings);
            g(b, a);
            return b
        },
        ajaxSettings: {
            url: M,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(P[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ra
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: k(ga),
        ajaxTransport: k(Qa),
        ajax: function(b, a) {
            function d(b, a, r, t) {
                if (2 !== z) {
                    z = 2;
                    s && clearTimeout(s);
                    p = f;
                    v = t || "";
                    x.readyState = 0 < b ? 4 : 0;
                    var n, y, E;
                    t = a;
                    if (r) {
                        var u = c,
                        H = x,
                        fa = u.contents,
                        w = u.dataTypes,
                        D = u.responseFields,
                        B, C, F, G;
                        for (C in D) C in r && (H[D[C]] = r[C]);
                        for (;
                        "*" === w[0];) w.shift(),
                        B === f && (B = u.mimeType || H.getResponseHeader("content-type"));
                        if (B) for (C in fa) if (fa[C] && fa[C].test(B)) {
                            w.unshift(C);
                            break
                        }
                        if (w[0] in r) F = w[0];
                        else {
                            for (C in r) {
                                if (!w[0] || u.converters[C + " " + w[0]]) {
                                    F = C;
                                    break
                                }
                                G || (G = C)
                            }
                            F = F || G
                        }
                        F ? (F !== w[0] && w.unshift(F), r = r[F]) : r = void 0
                    } else r = f;
                    if (200 <= b && 300 > b || 304 === b) {
                        if (c.ifModified) {
                            if (B = x.getResponseHeader("Last-Modified")) m.lastModified[h] = B;
                            if (B = x.getResponseHeader("Etag")) m.etag[h] = B
                        }
                        if (304 === b) t = "notmodified",
                        n = !0;
                        else try {
                            B = c;
                            B.dataFilter && (r = B.dataFilter(r, B.dataType));
                            var L = B.dataTypes;
                            C = {};
                            var W, Z, O = L.length,
                            J, R = L[0],
                            I,
                            N,
                            K,
                            M,
                            P;
                            for (W = 1; W < O; W++) {
                                if (1 === W) for (Z in B.converters)"string" == typeof Z && (C[Z.toLowerCase()] = B.converters[Z]);
                                I = R;
                                R = L[W];
                                if ("*" === R) R = I;
                                else if ("*" !== I && I !== R) {
                                    N = I + " " + R;
                                    K = C[N] || C["* " + R];
                                    if (!K) for (M in P = f, C) if (J = M.split(" "), J[0] === I || "*" === J[0]) if (P = C[J[1] + " " + R]) {
                                        M = C[M]; ! 0 === M ? K = P: !0 === P && (K = M);
                                        break
                                    }
                                    K || P || m.error("No conversion from " + N.replace(" ", " to ")); ! 0 !== K && (r = K ? K(r) : P(M(r)))
                                }
                            }
                            y = r;
                            t = "success";
                            n = !0
                        } catch(Q) {
                            t = "parsererror",
                            E = Q
                        }
                    } else if (E = t, !t || b) t = "error",
                    0 > b && (b = 0);
                    x.status = b;
                    x.statusText = "" + (a || t);
                    n ? l.resolveWith(e, [y, t, x]) : l.rejectWith(e, [x, t, E]);
                    x.statusCode(q);
                    q = f;
                    A && g.trigger("ajax" + (n ? "Success": "Error"), [x, c, n ? y: E]);
                    k.fireWith(e, [x, t]);
                    A && (g.trigger("ajaxComplete", [x, c]), --m.active || m.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (a = b, b = f);
            a = a || {};
            var c = m.ajaxSetup({},
            a),
            e = c.context || c,
            g = e !== c && (e.nodeType || e instanceof m) ? m(e) : m.event,
            l = m.Deferred(),
            k = m.Callbacks("once memory"),
            q = c.statusCode || {},
            h,
            t = {},
            n = {},
            v,
            y,
            p,
            s,
            u,
            z = 0,
            A,
            w,
            x = {
                readyState: 0,
                setRequestHeader: function(b, a) {
                    if (!z) {
                        var d = b.toLowerCase();
                        b = n[d] = n[d] || b;
                        t[b] = a
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === z ? v: null
                },
                getResponseHeader: function(b) {
                    var a;
                    if (2 === z) {
                        if (!y) for (y = {}; a = Bb.exec(v);) y[a[1].toLowerCase()] = a[2];
                        a = y[b.toLowerCase()]
                    }
                    return a === f ? null: a
                },
                overrideMimeType: function(b) {
                    z || (c.mimeType = b);
                    return this
                },
                abort: function(b) {
                    b = b || "abort";
                    p && p.abort(b);
                    d(0, b);
                    return this
                }
            };
            l.promise(x);
            x.success = x.done;
            x.error = x.fail;
            x.complete = k.add;
            x.statusCode = function(b) {
                if (b) {
                    var a;
                    if (2 > z) for (a in b) q[a] = [q[a], b[a]];
                    else a = b[x.status],
                    x.then(a, a)
                }
                return this
            };
            c.url = ((b || c.url) + "").replace(Ab, "").replace(Eb, P[1] + "//");
            c.dataTypes = m.trim(c.dataType || "*").toLowerCase().split(qa);
            null == c.crossDomain && (u = Oa.exec(c.url.toLowerCase()), c.crossDomain = !(!u || u[1] == P[1] && u[2] == P[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (P[3] || ("http:" === P[1] ? 80 : 443))));
            c.data && c.processData && "string" != typeof c.data && (c.data = m.param(c.data, c.traditional));
            r(ga, c, a, x);
            if (2 === z) return ! 1;
            A = c.global;
            c.type = c.type.toUpperCase();
            c.hasContent = !Db.test(c.type);
            A && 0 === m.active++&&m.event.trigger("ajaxStart");
            if (!c.hasContent && (c.data && (c.url += (Na.test(c.url) ? "&": "?") + c.data, delete c.data), h = c.url, !1 === c.cache)) {
                u = m.now();
                var D = c.url.replace(Hb, "$1_=" + u);
                c.url = D + (D === c.url ? (Na.test(c.url) ? "&": "?") + "_=" + u: "")
            } (c.data && c.hasContent && !1 !== c.contentType || a.contentType) && x.setRequestHeader("Content-Type", c.contentType);
            c.ifModified && (h = h || c.url, m.lastModified[h] && x.setRequestHeader("If-Modified-Since", m.lastModified[h]), m.etag[h] && x.setRequestHeader("If-None-Match", m.etag[h]));
            x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ra + "; q=0.01": "") : c.accepts["*"]);
            for (w in c.headers) x.setRequestHeader(w, c.headers[w]);
            if (c.beforeSend && (!1 === c.beforeSend.call(e, x, c) || 2 === z)) return x.abort(),
            !1;
            for (w in {
                success: 1,
                error: 1,
                complete: 1
            }) x[w](c[w]);
            if (p = r(Qa, c, a, x)) {
                x.readyState = 1;
                A && g.trigger("ajaxSend", [x, c]);
                c.async && 0 < c.timeout && (s = setTimeout(function() {
                    x.abort("timeout")
                },
                c.timeout));
                try {
                    z = 1,
                    p.send(t, d)
                } catch(B) {
                    if (2 > z) d( - 1, B);
                    else throw B;
                }
            } else d( - 1, "No Transport");
            return x
        },
        param: function(b, a) {
            var d = [],
            c = function(b, a) {
                a = m.isFunction(a) ? a() : a;
                d[d.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
            };
            a === f && (a = m.ajaxSettings.traditional);
            if (m.isArray(b) || b.jquery && !m.isPlainObject(b)) m.each(b,
            function() {
                c(this.name, this.value)
            });
            else for (var g in b) e(g, b[g], a, c);
            return d.join("&").replace(zb, "+")
        }
    });
    m.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ib = m.now(),
    ca = /(\=)\?(&|$)|\?\?/i;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return m.expando + "_" + Ib++
        }
    });
    m.ajaxPrefilter("json jsonp",
    function(b, d, c) {
        d = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || !1 !== b.jsonp && (ca.test(b.url) || d && ca.test(b.data))) {
            var e, g = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            f = a[g],
            l = b.url,
            r = b.data,
            k = "$1" + g + "$2"; ! 1 !== b.jsonp && (l = l.replace(ca, k), b.url === l && (d && (r = r.replace(ca, k)), b.data === r && (l += (/\?/.test(l) ? "&": "?") + b.jsonp + "=" + g)));
            b.url = l;
            b.data = r;
            a[g] = function(b) {
                e = [b]
            };
            c.always(function() {
                a[g] = f;
                e && m.isFunction(f) && a[g](e[0])
            });
            b.converters["script json"] = function() {
                e || m.error(g + " was not called");
                return e[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                m.globalEval(b);
                return b
            }
        }
    });
    m.ajaxPrefilter("script",
    function(b) {
        b.cache === f && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    m.ajaxTransport("script",
    function(b) {
        if (b.crossDomain) {
            var a, d = w.head || w.getElementsByTagName("head")[0] || w.documentElement;
            return {
                send: function(c, e) {
                    a = w.createElement("script");
                    a.async = "async";
                    b.scriptCharset && (a.charset = b.scriptCharset);
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function(b, c) {
                        if (c || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null,
                        d && a.parentNode && d.removeChild(a),
                        a = f,
                        c || e(200, "success")
                    };
                    d.insertBefore(a, d.firstChild)
                },
                abort: function() {
                    a && a.onload(0, 1)
                }
            }
        }
    });
    var na = a.ActiveXObject ?
    function() {
        for (var b in U) U[b](0, 1)
    }: !1,
    Jb = 0,
    U;
    m.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        var b;
        if (! (b = !this.isLocal && c())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(d) {}
            b = void 0
        }
        return b
    }: c; (function(b) {
        m.extend(m.support, {
            ajax: !!b,
            cors: !!b && "withCredentials" in b
        })
    })(m.ajaxSettings.xhr());
    m.support.ajax && m.ajaxTransport(function(b) {
        if (!b.crossDomain || m.support.cors) {
            var d;
            return {
                send: function(c, e) {
                    var g = b.xhr(),
                    l,
                    r;
                    b.username ? g.open(b.type, b.url, b.async, b.username, b.password) : g.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (r in b.xhrFields) g[r] = b.xhrFields[r];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType);
                    b.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (r in c) g.setRequestHeader(r, c[r])
                    } catch(k) {}
                    g.send(b.hasContent && b.data || null);
                    d = function(a, c) {
                        var r, k, q, h, t;
                        try {
                            if (d && (c || 4 === g.readyState)) if (d = f, l && (g.onreadystatechange = m.noop, na && delete U[l]), c) 4 !== g.readyState && g.abort();
                            else {
                                r = g.status;
                                q = g.getAllResponseHeaders();
                                h = {}; (t = g.responseXML) && t.documentElement && (h.xml = t);
                                h.text = g.responseText;
                                try {
                                    k = g.statusText
                                } catch(n) {
                                    k = ""
                                }
                                r || !b.isLocal || b.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
                            }
                        } catch(v) {
                            c || e( - 1, v)
                        }
                        h && e(r, k, h, q)
                    };
                    b.async && 4 !== g.readyState ? (l = ++Jb, na && (U || (U = {},
                    m(a).unload(na)), U[l] = d), g.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var ea = {},
    N, Q, Kb = /^(?:toggle|show|hide)$/,
    Lb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    da, pa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    Y;
    m.fn.extend({
        show: function(b, a, d) {
            var c;
            if (b || 0 === b) return this.animate(p("show", 3), b, a, d);
            a = 0;
            for (d = this.length; a < d; a++) b = this[a],
            b.style && (c = b.style.display, !m._data(b, "olddisplay") && "none" === c && (c = b.style.display = ""), "" === c && "none" === m.css(b, "display") && m._data(b, "olddisplay", n(b.nodeName)));
            for (a = 0; a < d; a++) if (b = this[a], b.style && (c = b.style.display, "" === c || "none" === c)) b.style.display = m._data(b, "olddisplay") || "";
            return this
        },
        hide: function(b, a, d) {
            if (b || 0 === b) return this.animate(p("hide", 3), b, a, d);
            var c;
            a = 0;
            for (d = this.length; a < d; a++) b = this[a],
            b.style && (c = m.css(b, "display"), "none" !== c && !m._data(b, "olddisplay") && m._data(b, "olddisplay", c));
            for (a = 0; a < d; a++) this[a].style && (this[a].style.display = "none");
            return this
        },
        _toggle: m.fn.toggle,
        toggle: function(b, a, d) {
            var c = "boolean" == typeof b;
            m.isFunction(b) && m.isFunction(a) ? this._toggle.apply(this, arguments) : null == b || c ? this.each(function() {
                var a = c ? b: m(this).is(":hidden");
                m(this)[a ? "show": "hide"]()
            }) : this.animate(p("toggle", 3), b, a, d);
            return this
        },
        fadeTo: function(b, a, d, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            },
            b, d, c)
        },
        animate: function(b, a, d, c) {
            function e() { ! 1 === g.queue && m._mark(this);
                var a = m.extend({},
                g),
                d = 1 === this.nodeType,
                c = d && m(this).is(":hidden"),
                f,
                l,
                r,
                k,
                q,
                h,
                t,
                v;
                a.animatedProperties = {};
                for (r in b) {
                    f = m.camelCase(r);
                    r !== f && (b[f] = b[r], delete b[r]);
                    l = b[f];
                    m.isArray(l) ? (a.animatedProperties[f] = l[1], l = b[f] = l[0]) : a.animatedProperties[f] = a.specialEasing && a.specialEasing[f] || a.easing || "swing";
                    if ("hide" === l && c || "show" === l && !c) return a.complete.call(this);
                    d && ("height" === f || "width" === f) && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === m.css(this, "display") && "none" === m.css(this, "float") && (m.support.inlineBlockNeedsLayout && "inline" !== n(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != a.overflow && (this.style.overflow = "hidden");
                for (r in b) d = new m.fx(this, a, r),
                l = b[r],
                Kb.test(l) ? (v = m._data(this, "toggle" + r) || ("toggle" === l ? c ? "show": "hide": 0), v ? (m._data(this, "toggle" + r, "show" === v ? "hide": "show"), d[v]()) : d[l]()) : (k = Lb.exec(l), q = d.cur(), k ? (h = parseFloat(k[2]), t = k[3] || (m.cssNumber[r] ? "": "px"), "px" !== t && (m.style(this, r, (h || 1) + t), q *= (h || 1) / d.cur(), m.style(this, r, q + t)), k[1] && (h = ("-=" === k[1] ? -1 : 1) * h + q), d.custom(q, h, t)) : d.custom(q, l, ""));
                return ! 0
            }
            var g = m.speed(a, d, c);
            if (m.isEmptyObject(b)) return this.each(g.complete, [!1]);
            b = m.extend({},
            b);
            return ! 1 === g.queue ? this.each(e) : this.queue(g.queue, e)
        },
        stop: function(b, a, d) {
            "string" != typeof b && (d = a, a = b, b = f);
            a && !1 !== b && this.queue(b || "fx", []);
            return this.each(function() {
                var a, c = !1,
                e = m.timers,
                g = m._data(this);
                d || m._unmark(!0, this);
                if (null == b) for (a in g) {
                    if (g[a] && g[a].stop && a.indexOf(".run") === a.length - 4) {
                        var f = g[a];
                        m.removeData(this, a, !0);
                        f.stop(d)
                    }
                } else g[a = b + ".run"] && g[a].stop && (g = g[a], m.removeData(this, a, !0), g.stop(d));
                for (a = e.length; a--;) e[a].elem !== this || null != b && e[a].queue !== b || (d ? e[a](!0) : e[a].saveState(), c = !0, e.splice(a, 1));
                d && c || m.dequeue(this, b)
            })
        }
    });
    m.each({
        slideDown: p("show", 1),
        slideUp: p("hide", 1),
        slideToggle: p("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(b, a) {
        m.fn[b] = function(b, d, c) {
            return this.animate(a, b, d, c)
        }
    });
    m.extend({
        speed: function(b, a, d) {
            var c = b && "object" == typeof b ? m.extend({},
            b) : {
                complete: d || !d && a || m.isFunction(b) && b,
                duration: b,
                easing: d && a || a && !m.isFunction(a) && a
            };
            c.duration = m.fx.off ? 0 : "number" == typeof c.duration ? c.duration: c.duration in m.fx.speeds ? m.fx.speeds[c.duration] : m.fx.speeds._default;
            if (null == c.queue || !0 === c.queue) c.queue = "fx";
            c.old = c.complete;
            c.complete = function(b) {
                m.isFunction(c.old) && c.old.call(this);
                c.queue ? m.dequeue(this, c.queue) : !1 !== b && m._unmark(this)
            };
            return c
        },
        easing: {
            linear: function(b, a, d, c) {
                return d + c * b
            },
            swing: function(b, a, d, c) {
                return ( - Math.cos(b * Math.PI) / 2 + 0.5) * c + d
            }
        },
        timers: [],
        fx: function(b, a, d) {
            this.options = a;
            this.elem = b;
            this.prop = d;
            a.orig = a.orig || {}
        }
    });
    m.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (m.fx.step[this.prop] || m.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var b, a = m.css(this.elem, this.prop);
            return isNaN(b = parseFloat(a)) ? a && "auto" !== a ? a: 0 : b
        },
        custom: function(b, a, c) {
            function e(b) {
                return g.step(b)
            }
            var g = this,
            l = m.fx;
            this.startTime = Y || d();
            this.end = a;
            this.now = this.start = b;
            this.pos = this.state = 0;
            this.unit = c || this.unit || (m.cssNumber[this.prop] ? "": "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function() {
                g.options.hide && m._data(g.elem, "fxshow" + g.prop) === f && m._data(g.elem, "fxshow" + g.prop, g.start)
            };
            e() && m.timers.push(e) && !da && (da = setInterval(l.tick, l.interval))
        },
        show: function() {
            var b = m._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = b || m.style(this.elem, this.prop);
            this.options.show = !0;
            b !== f ? this.custom(this.cur(), b) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            m(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = m._data(this.elem, "fxshow" + this.prop) || m.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(b) {
            var a, c, e = Y || d(),
            g = !0,
            f = this.elem,
            l = this.options;
            if (b || e >= l.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                l.animatedProperties[this.prop] = !0;
                for (a in l.animatedProperties) ! 0 !== l.animatedProperties[a] && (g = !1);
                if (g) {
                    null != l.overflow && !m.support.shrinkWrapBlocks && m.each(["", "X", "Y"],
                    function(b, a) {
                        f.style["overflow" + a] = l.overflow[b]
                    });
                    l.hide && m(f).hide();
                    if (l.hide || l.show) for (a in l.animatedProperties) m.style(f, a, l.orig[a]),
                    m.removeData(f, "fxshow" + a, !0),
                    m.removeData(f, "toggle" + a, !0); (b = l.complete) && (l.complete = !1, b.call(f))
                }
                return ! 1
            }
            Infinity == l.duration ? this.now = e: (c = e - this.startTime, this.state = c / l.duration, this.pos = m.easing[l.animatedProperties[this.prop]](this.state, c, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return ! 0
        }
    };
    m.extend(m.fx, {
        tick: function() {
            for (var b, a = m.timers,
            d = 0; d < a.length; d++) b = a[d],
            !b() && a[d] === b && a.splice(d--, 1);
            a.length || m.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(da);
            da = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(b) {
                m.style(b.elem, "opacity", b.now)
            },
            _default: function(b) {
                b.elem.style && null != b.elem.style[b.prop] ? b.elem.style[b.prop] = b.now + b.unit: b.elem[b.prop] = b.now
            }
        }
    });
    m.each(["width", "height"],
    function(b, a) {
        m.fx.step[a] = function(b) {
            m.style(b.elem, a, Math.max(0, b.now) + b.unit)
        }
    });
    m.expr && m.expr.filters && (m.expr.filters.animated = function(b) {
        return m.grep(m.timers,
        function(a) {
            return b === a.elem
        }).length
    });
    var Mb = /^t(?:able|d|h)$/i,
    Sa = /^(?:body|html)$/i;
    "getBoundingClientRect" in w.documentElement ? m.fn.offset = function(b) {
        var a = this[0],
        d;
        if (b) return this.each(function(a) {
            m.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return m.offset.bodyOffset(a);
        try {
            d = a.getBoundingClientRect()
        } catch(c) {}
        var e = a.ownerDocument,
        g = e.documentElement;
        if (!d || !m.contains(g, a)) return d ? {
            top: d.top,
            left: d.left
        }: {
            top: 0,
            left: 0
        };
        a = e.body;
        e = h(e);
        return {
            top: d.top + (e.pageYOffset || m.support.boxModel && g.scrollTop || a.scrollTop) - (g.clientTop || a.clientTop || 0),
            left: d.left + (e.pageXOffset || m.support.boxModel && g.scrollLeft || a.scrollLeft) - (g.clientLeft || a.clientLeft || 0)
        }
    }: m.fn.offset = function(b) {
        var a = this[0];
        if (b) return this.each(function(a) {
            m.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return m.offset.bodyOffset(a);
        var d, c = a.offsetParent,
        e = a.ownerDocument,
        g = e.documentElement,
        f = e.body;
        d = (e = e.defaultView) ? e.getComputedStyle(a, null) : a.currentStyle;
        for (var l = a.offsetTop,
        r = a.offsetLeft; (a = a.parentNode) && a !== f && a !== g && (!m.support.fixedPosition || "fixed" !== d.position);) d = e ? e.getComputedStyle(a, null) : a.currentStyle,
        l -= a.scrollTop,
        r -= a.scrollLeft,
        a === c && (l += a.offsetTop, r += a.offsetLeft, m.support.doesNotAddBorder && (!m.support.doesAddBorderForTableAndCells || !Mb.test(a.nodeName)) && (l += parseFloat(d.borderTopWidth) || 0, r += parseFloat(d.borderLeftWidth) || 0), c = a.offsetParent),
        m.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (l += parseFloat(d.borderTopWidth) || 0, r += parseFloat(d.borderLeftWidth) || 0);
        if ("relative" === d.position || "static" === d.position) l += f.offsetTop,
        r += f.offsetLeft;
        m.support.fixedPosition && "fixed" === d.position && (l += Math.max(g.scrollTop, f.scrollTop), r += Math.max(g.scrollLeft, f.scrollLeft));
        return {
            top: l,
            left: r
        }
    };
    m.offset = {
        bodyOffset: function(b) {
            var a = b.offsetTop,
            d = b.offsetLeft;
            m.support.doesNotIncludeMarginInBodyOffset && (a += parseFloat(m.css(b, "marginTop")) || 0, d += parseFloat(m.css(b, "marginLeft")) || 0);
            return {
                top: a,
                left: d
            }
        },
        setOffset: function(b, a, d) {
            var c = m.css(b, "position");
            "static" === c && (b.style.position = "relative");
            var e = m(b),
            g = e.offset(),
            f = m.css(b, "top"),
            l = m.css(b, "left"),
            r = {},
            k = {},
            q,
            h; ("absolute" === c || "fixed" === c) && -1 < m.inArray("auto", [f, l]) ? (k = e.position(), q = k.top, h = k.left) : (q = parseFloat(f) || 0, h = parseFloat(l) || 0);
            m.isFunction(a) && (a = a.call(b, d, g));
            null != a.top && (r.top = a.top - g.top + q);
            null != a.left && (r.left = a.left - g.left + h);
            "using" in a ? a.using.call(b, r) : e.css(r)
        }
    };
    m.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var b = this[0],
            a = this.offsetParent(),
            d = this.offset(),
            c = Sa.test(a[0].nodeName) ? {
                top: 0,
                left: 0
            }: a.offset();
            d.top -= parseFloat(m.css(b, "marginTop")) || 0;
            d.left -= parseFloat(m.css(b, "marginLeft")) || 0;
            c.top += parseFloat(m.css(a[0], "borderTopWidth")) || 0;
            c.left += parseFloat(m.css(a[0], "borderLeftWidth")) || 0;
            return {
                top: d.top - c.top,
                left: d.left - c.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || w.body; b && !Sa.test(b.nodeName) && "static" === m.css(b, "position");) b = b.offsetParent;
                return b
            })
        }
    });
    m.each(["Left", "Top"],
    function(b, a) {
        var d = "scroll" + a;
        m.fn[d] = function(a) {
            var c, e;
            return a === f ? (c = this[0], c ? (e = h(c)) ? "pageXOffset" in e ? e[b ? "pageYOffset": "pageXOffset"] : m.support.boxModel && e.document.documentElement[d] || e.document.body[d] : c[d] : null) : this.each(function() { (e = h(this)) ? e.scrollTo(b ? m(e).scrollLeft() : a, b ? a: m(e).scrollTop()) : this[d] = a
            })
        }
    });
    m.each(["Height", "Width"],
    function(b, a) {
        var d = a.toLowerCase();
        m.fn["inner" + a] = function() {
            var b = this[0];
            return b ? b.style ? parseFloat(m.css(b, d, "padding")) : this[d]() : null
        };
        m.fn["outer" + a] = function(b) {
            var a = this[0];
            return a ? a.style ? parseFloat(m.css(a, d, b ? "margin": "border")) : this[d]() : null
        };
        m.fn[d] = function(b) {
            var c = this[0];
            if (!c) return null == b ? null: this;
            if (m.isFunction(b)) return this.each(function(a) {
                var c = m(this);
                c[d](b.call(this, a, c[d]()))
            });
            if (m.isWindow(c)) {
                var e = c.document.documentElement["client" + a],
                g = c.document.body;
                return "CSS1Compat" === c.document.compatMode && e || g && g["client" + a] || e
            }
            return 9 === c.nodeType ? Math.max(c.documentElement["client" + a], c.body["scroll" + a], c.documentElement["scroll" + a], c.body["offset" + a], c.documentElement["offset" + a]) : b === f ? (c = m.css(c, d), e = parseFloat(c), m.isNumeric(e) ? e: c) : this.css(d, "string" == typeof b ? b: b + "px")
        }
    });
    a.jQuery = a.$ = m;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return m
    })
})(window);
ADS = function() {};
ADS.displayCount = 0;
ADS.modulo = 2;
ADS.showAd = function() {}; !
function() {
    var a = null,
    f = !0,
    h = !1;
    try {
        "undefined" != typeof AudioContext ? a = new AudioContext: "undefined" != typeof webkitAudioContext ? a = new webkitAudioContext: f = !1
    } catch(n) {
        f = !1
    }
    if (!f) if ("undefined" != typeof Audio) try {
        new Audio
    } catch(p) {
        h = !0
    } else h = !0;
    if (f) {
        var b = void 0 === a.createGain ? a.createGainNode() : a.createGain();
        b.gain.value = 1;
        b.connect(a.destination)
    }
    var d = function() {
        this.init()
    };
    d.prototype = {
        init: function() {
            return this._codecs = {},
            this._howls = [],
            this._muted = !1,
            this._volume = 1,
            this.iOSAutoEnable = !0,
            this.noAudio = h,
            this.usingWebAudio = f,
            this.ctx = a,
            h || this._setupCodecs(),
            this
        },
        volume: function(a) {
            if (a = parseFloat(a), void 0 !== a && 0 <= a && 1 >= a) {
                this._volume = a;
                f && (b.gain.value = a);
                for (var d = 0; d < this._howls.length; d++) if (!this._howls[d]._webAudio) for (var c = this._howls[d]._getSoundIds(), e = 0; e < c.length; e++) {
                    var g = this._howls[d]._soundById(c[d]);
                    g && (g._node.volume = g._volume * a)
                }
                return this
            }
            return this._volume
        },
        mute: function(a) {
            this._muted = a;
            f && (b.gain.value = a ? 0 : this._volume);
            for (var d = 0; d < this._howls.length; d++) if (!this._howls[d]._webAudio) for (var c = this._howls[d]._getSoundIds(), e = 0; e < c.length; e++) {
                var g = this._howls[d]._soundById(c[d]);
                g && (g._node.muted = a)
            }
            return this
        },
        codecs: function(b) {
            return this._codecs[b]
        },
        _setupCodecs: function() {
            var b = new Audio;
            return this._codecs = {
                mp3: !!b.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!b.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!b.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!b.canPlayType("audio/aac;").replace(/^no$/, ""),
                m4a: !!(b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(b.canPlayType("audio/x-mp4;") || b.canPlayType("audio/mp4;") || b.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!b.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!b.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            },
            this
        },
        _enableiOSAudio: function() {
            var b = this;
            if (!a || !b._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                b._iOSEnabled = !1;
                var d = function() {
                    var c = a.createBuffer(1, 1, 22050),
                    e = a.createBufferSource();
                    e.buffer = c;
                    e.connect(a.destination);
                    void 0 === e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        e.playbackState !== e.PLAYING_STATE && e.playbackState !== e.FINISHED_STATE || (b._iOSEnabled = !0, b.iOSAutoEnable = !1, window.removeEventListener("touchstart", d, !1))
                    },
                    0)
                };
                return window.addEventListener("touchstart", d, !1),
                b
            }
        }
    };
    var c = new d,
    e = function(b) {
        return b.src ? void this.init(b) : void console.error("An array of source files must be passed with any new Howl.")
    };
    e.prototype = {
        init: function(b) {
            return this._autoplay = b.autoplay || !1,
            this._ext = b.ext || null,
            this._html5 = b.html5 || !1,
            this._loop = b.loop || !1,
            this._pool = b.pool || 5,
            this._preload = "boolean" == typeof b.preload ? b.preload: !0,
            this._rate = b.rate || 1,
            this._sprite = b.sprite || {},
            this._src = "string" != typeof b.src ? b.src: [b.src],
            this._volume = void 0 !== b.volume ? b.volume: 1,
            this._duration = 0,
            this._muted = !1,
            this._loaded = !1,
            this._sounds = [],
            this._endTimers = {},
            this._onend = b.onend ? [b.onend] : [],
            this._onfaded = b.onfaded ? [b.onfaded] : [],
            this._onload = b.onload ? [b.onload] : [],
            this._onloaderror = b.onloaderror ? [b.onloaderror] : [],
            this._onpause = b.onpause ? [b.onpause] : [],
            this._onplay = b.onplay ? [b.onplay] : [],
            this._webAudio = f && !this._html5,
            void 0 !== a && a && c.iOSAutoEnable && c._enableiOSAudio(),
            c._howls.push(this),
            this._preload && this.load(),
            this
        },
        load: function() {
            var b = null;
            if (h) return void this._emit("loaderror");
            for (var a = 0; a < this._src.length; a++) {
                var d, e;
                if (this._ext && this._ext[a] ? d = this._ext[a] : (e = this._src[a], d = /^data:audio\/([^;,]+);/i.exec(e), d || (d = /\.([^.]+)$/.exec(e.split("?", 1)[0])), d && (d = d[1].toLowerCase())), c.codecs(d)) {
                    b = this._src[a];
                    break
                }
            }
            return b ? (this._src = b, new g(this), this._webAudio && k(this), this) : void this._emit("loaderror")
        },
        play: function(b) {
            var d = this,
            e = null;
            if ("number" == typeof b) e = b,
            b = null;
            else if (void 0 === b) {
                b = "__default";
                for (var g = 0,
                f = 0; f < d._sounds.length; f++) d._sounds[f]._paused && !d._sounds[f]._ended && (g++, e = d._sounds[f]._id);
                1 === g ? b = null: e = null
            }
            var l = e ? d._soundById(e) : d._inactiveSound();
            if (e && !b && (b = l._sprite || "__default"), !l) return null;
            if (!d._loaded && !d._sprite[b]) return d.once("load",
            function() {
                d.play(l._id)
            }),
            l._id;
            if (e && !l._paused) return l._id;
            var r = 0 < l._seek ? l._seek: d._sprite[b][0] / 1E3,
            k = (d._sprite[b][0] + d._sprite[b][1]) / 1E3 - r,
            h = !(!d._loop && !d._sprite[b][2]),
            t = function() {
                d._emit("end", l._id); ! d._webAudio && h && d.stop(l._id).play(l._id);
                d._webAudio && h && (d._emit("play", l._id), d._endTimers[l._id] = setTimeout(t, 1E3 * k / Math.abs(d._rate)));
                d._webAudio && !h && (l._paused = !0, l._ended = !0, l._seek = l._start || 0, d._clearTimer(l._id), l._node.bufferSource = null);
                d._webAudio || h || d.stop(l._id)
            };
            d._endTimers[l._id] = setTimeout(t, 1E3 * k / Math.abs(d._rate));
            l._paused = !1;
            l._ended = !1;
            l._sprite = b;
            l._seek = r;
            l._start = d._sprite[b][0] / 1E3;
            l._stop = (d._sprite[b][0] + d._sprite[b][1]) / 1E3;
            l._loop = h;
            var n = l._node;
            if (d._webAudio) b = function() {
                d._refreshBuffer(l);
                var b = l._muted || d._muted ? 0 : l._volume * c.volume();
                n.gain.setValueAtTime(b, a.currentTime);
                l._playStart = a.currentTime;
                void 0 === n.bufferSource.start ? n.bufferSource.noteGrainOn(0, r, k) : n.bufferSource.start(0, r, k);
                d._endTimers[l._id] || (d._endTimers[l._id] = setTimeout(t, 1E3 * k / Math.abs(d._rate)))
            },
            d._loaded ? b() : (d.once("load", b), d._clearTimer(l._id));
            else {
                var v = function() {
                    n.currentTime = r;
                    n.muted = l._muted || d._muted || c._muted || n.muted;
                    n.volume = l._volume * c.volume();
                    n.playbackRate = d._rate;
                    setTimeout(function() {
                        n.play()
                    },
                    0)
                };
                if (4 === n.readyState || !n.readyState && navigator.isCocoonJS) v();
                else {
                    var p = function() {
                        d._endTimers[l._id] = setTimeout(t, 1E3 * k / Math.abs(d._rate));
                        v();
                        n.removeEventListener("canplaythrough", p, !1)
                    };
                    n.addEventListener("canplaythrough", p, !1);
                    d._clearTimer(l._id)
                }
            }
            return d._emit("play", l._id),
            l._id
        },
        pause: function(b) {
            var a = this;
            if (!a._loaded) return a.once("play",
            function() {
                a.pause(b)
            }),
            a;
            for (var d = a._getSoundIds(b), c = 0; c < d.length; c++) {
                a._clearTimer(d[c]);
                var e = a._soundById(d[c]);
                if (e && !e._paused) if (e._seek = a.seek(d[c]), e._paused = !0, a._webAudio) {
                    if (!e._node.bufferSource) break;
                    void 0 === e._node.bufferSource.stop ? e._node.bufferSource.noteOff(0) : e._node.bufferSource.stop(0);
                    e._node.bufferSource = null
                } else isNaN(e._node.duration) || e._node.pause()
            }
            return a
        },
        stop: function(b) {
            var a = this;
            if (!a._loaded) return a.once("play",
            function() {
                a.stop(b)
            }),
            a;
            for (var d = a._getSoundIds(b), c = 0; c < d.length; c++) {
                a._clearTimer(d[c]);
                var e = a._soundById(d[c]);
                if (e && !e._paused) if (e._seek = e._start || 0, e._paused = !0, e._ended = !0, a._webAudio) {
                    if (!e._node.bufferSource) break;
                    void 0 === e._node.bufferSource.stop ? e._node.bufferSource.noteOff(0) : e._node.bufferSource.stop(0);
                    e._node.bufferSource = null
                } else isNaN(e._node.duration) || (e._node.pause(), e._node.currentTime = e._start || 0)
            }
            return a
        },
        mute: function(b, d) {
            var e = this;
            if (!e._loaded) return e.once("play",
            function() {
                e.mute(b, d)
            }),
            e;
            void 0 === d && (e._muted = b);
            for (var g = e._getSoundIds(d), l = 0; l < g.length; l++) {
                var f = e._soundById(g[l]);
                f && (f._muted = b, e._webAudio ? f._node.gain.setValueAtTime(b ? 0 : f._volume * c.volume(), a.currentTime) : f._node.muted = b)
            }
            return e
        },
        volume: function() {
            var b, d, e = this,
            g = arguments;
            if (0 === g.length) return e._volume;
            1 === g.length ? 0 <= e._getSoundIds().indexOf(g[0]) ? d = parseInt(g[0], 10) : b = parseFloat(g[0]) : 2 === g.length && (b = parseFloat(g[0]), d = parseInt(g[1], 10));
            var l;
            if (! (void 0 !== b && 0 <= b && 1 >= b)) return l = d ? e._soundById(d) : e._sounds[0],
            l ? l._volume: 0;
            if (!e._loaded) return e.once("play",
            function() {
                e.volume.apply(e, g)
            }),
            e;
            void 0 === d && (e._volume = b);
            d = e._getSoundIds(d);
            for (var f = 0; f < d.length; f++)(l = e._soundById(d[f])) && (l._volume = b, e._webAudio ? l._node.gain.setValueAtTime(b * c.volume(), a.currentTime) : l._node.volume = b * c.volume());
            return e
        },
        fade: function(b, d, c, e) {
            var g = this;
            if (!g._loaded) return g.once("play",
            function() {
                g.fade(b, d, c, e)
            }),
            g;
            g.volume(b, e);
            for (var l = g._getSoundIds(e), f = 0; f < l.length; f++) {
                var r = g._soundById(l[f]);
                if (r) if (g._webAudio) {
                    var k = a.currentTime,
                    h = k + c / 1E3;
                    r._volume = b;
                    r._node.gain.setValueAtTime(b, k);
                    r._node.gain.linearRampToValueAtTime(d, h);
                    setTimeout(function(b, c) {
                        setTimeout(function() {
                            c._volume = d;
                            g._emit("faded", b)
                        },
                        0 < h - a.currentTime ? Math.ceil(1E3 * (h - a.currentTime)) : 0)
                    }.bind(g, l[f], r), c)
                } else {
                    var r = Math.abs(b - d),
                    t = b > d ? "out": "in",
                    n = c / (r / 0.01); !
                    function() {
                        var a = b,
                        c = setInterval(function(b) {
                            a += "in" === t ? 0.01 : -0.01;
                            a = Math.max(0, a);
                            a = Math.min(1, a);
                            g.volume(a, b);
                            a === d && (clearInterval(c), g._emit("faded", b))
                        }.bind(g, l[f]), n)
                    } ()
                }
            }
            return g
        },
        loop: function() {
            var b, a, d, c = arguments;
            if (0 === c.length) return this._loop;
            if (1 === c.length) {
                if ("boolean" != typeof c[0]) return d = this._soundById(parseInt(c[0], 10)),
                d ? d._loop: !1;
                b = c[0]
            } else 2 === c.length && (b = c[0], a = parseInt(c[1], 10));
            a = this._getSoundIds(a);
            for (c = 0; c < a.length; c++)(d = this._soundById(a[c])) && (d._loop = b);
            return this
        },
        seek: function() {
            var b, d, c = this,
            e = arguments;
            0 === e.length ? d = c._sounds[0]._id: 1 === e.length ? 0 <= c._getSoundIds().indexOf(e[0]) ? d = parseInt(e[0], 10) : (d = c._sounds[0]._id, b = parseFloat(e[0])) : 2 === e.length && (b = parseFloat(e[0]), d = parseInt(e[1], 10));
            if (void 0 === d) return c;
            if (!c._loaded) return c.once("load",
            function() {
                c.seek.apply(c, e)
            }),
            c;
            var g = c._soundById(d);
            if (g) {
                if (! (0 <= b)) return c._webAudio ? g._seek + (a.currentTime - g._playStart) : g._node.currentTime;
                c.pause(d);
                g._seek = b;
                c._clearTimer(d);
                c.play(d)
            }
            return c
        },
        playing: function(b) {
            return (b = this._soundById(b)) ? !!b._paused: !1
        },
        unload: function() {
            for (var b = this,
            a = b._sounds,
            d = 0; d < a.length; d++) {
                a[d]._paused || (b.stop(a[d]._id), b._emit("end", a[d]._id));
                b._webAudio ? a[d]._node.disconnect(0) : a[d]._node.src = "";
                delete a[d]._node;
                b._clearTimer(a[d]._id);
                var e = c._howls.indexOf(b);
                0 <= e && c._howls.splice(e, 1);
                r && delete r[b._src];
                b = null
            }
            return null
        },
        on: function(b, a) {
            var d = this["_on" + b];
            return "function" == typeof a && d.push(a),
            this
        },
        off: function(b, a) {
            var d = this["_on" + b];
            if (a) for (var c = 0; c < d.length; c++) if (a === d[c]) {
                d.splice(c, 1);
                break
            }
            return this
        },
        once: function(b, a) {
            var d = this,
            c = function() {
                a();
                d.off(b, c)
            };
            return d.on(b, c),
            d
        },
        _emit: function(b, a, d) {
            b = this["_on" + b];
            for (var c = 0; c < b.length; c++) b[c].call(this, a, d);
            return this
        },
        _clearTimer: function(b) {
            return this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]),
            this
        },
        _soundById: function(b) {
            for (var a = 0; a < this._sounds.length; a++) if (b === this._sounds[a]._id) return this._sounds[a];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++) if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new g(this)
        },
        _drain: function() {
            var b = this._pool,
            a = 0,
            d = 0;
            if (! (this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && a++;
                for (d = this._sounds.length - 1; 0 <= d && !(b >= a); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), a--)
            }
        },
        _getSoundIds: function(b) {
            if (void 0 === b) {
                b = [];
                for (var a = 0; a < this._sounds.length; a++) b.push(this._sounds[a]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            return b._node.bufferSource = a.createBufferSource(),
            b._node.bufferSource.buffer = r[this._src],
            b._node.bufferSource.connect(b._panner ? b._panner: b._node),
            b._node.bufferSource.loop = b._loop,
            b._loop && (b._node.bufferSource.loopStart = b._seek, b._node.bufferSource.loopEnd = b._stop),
            b._node.bufferSource.playbackRate.value = this._rate,
            this
        }
    };
    var g = function(b) {
        this._parent = b;
        this.init()
    };
    if (g.prototype = {
        init: function() {
            var b = this._parent;
            return this._muted = b._muted,
            this._loop = b._loop,
            this._volume = b._volume,
            this._muted = b._muted,
            this._seek = 0,
            this._paused = !0,
            this._ended = !1,
            this._id = Math.round(Date.now() * Math.random()),
            b._sounds.push(this),
            this.create(),
            this
        },
        create: function() {
            var d = this,
            e = d._parent,
            g = c._muted || d._muted || d._parent._muted ? 0 : d._volume * c.volume();
            if (e._webAudio) d._node = void 0 === a.createGain ? a.createGainNode() : a.createGain(),
            d._node.gain.setValueAtTime(g, a.currentTime),
            d._node.paused = !0,
            d._node.connect(b);
            else {
                d._node = new Audio;
                var l = function() {
                    d._node.error && 4 === d._node.error.code && (c.noAudio = !0);
                    e._emit("loaderror", d._id, d._node.error ? d._node.error.code: 0);
                    d._node.removeEventListener("error", l, !1)
                };
                d._node.addEventListener("error", l, !1);
                var f = function() {
                    e._duration = Math.ceil(10 * d._node.duration) / 10;
                    0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1E3 * e._duration]
                    });
                    e._loaded || (e._loaded = !0, e._emit("load"));
                    e._autoplay && e.play();
                    d._node.removeEventListener("canplaythrough", f, !1)
                };
                d._node.addEventListener("canplaythrough", f, !1);
                d._node.src = e._src;
                d._node.preload = "auto";
                d._node.volume = g;
                d._node.load()
            }
            return d
        },
        reset: function() {
            var b = this._parent;
            return this._muted = b._muted,
            this._loop = b._loop,
            this._volume = b._volume,
            this._muted = b._muted,
            this._seek = 0,
            this._paused = !0,
            this._ended = !1,
            this._sprite = null,
            this._id = Math.round(Date.now() * Math.random()),
            this
        }
    },
    f) var r = {},
    k = function(b) {
        var a = b._src;
        if (r[a]) return b._duration = r[a].duration,
        void v(b);
        if (/^data:[^;]+;base64,/.test(a)) {
            for (var d = atob(a.split(",")[1]), c = new Uint8Array(d.length), e = 0; e < d.length; ++e) c[e] = d.charCodeAt(e);
            t(c.buffer, b)
        } else {
            var g = new XMLHttpRequest;
            g.open("GET", a, !0);
            g.responseType = "arraybuffer";
            g.onload = function() {
                t(g.response, b)
            };
            g.onerror = function() {
                b._webAudio && (b._buffer = !0, b._webAudio = !1, b._sounds = [], delete r[a], b.load())
            };
            l(g)
        }
    },
    l = function(b) {
        try {
            b.send()
        } catch(a) {
            b.onerror()
        }
    },
    t = function(b, d) {
        a.decodeAudioData(b,
        function(b) {
            b && (r[d._src] = b, v(d, b))
        },
        function() {
            d._emit("loaderror")
        })
    },
    v = function(b, a) {
        a && !b._duration && (b._duration = a.duration);
        0 === Object.keys(b._sprite).length && (b._sprite = {
            __default: [0, 1E3 * b._duration]
        });
        b._loaded || (b._loaded = !0, b._emit("load"));
        b._autoplay && b.play()
    };
    "function" == typeof define && define.amd && define("howler",
    function() {
        return {
            Howler: c,
            Howl: e
        }
    });
    "undefined" != typeof exports && (exports.Howler = c, exports.Howl = e);
    "undefined" != typeof window && (window.HowlerGlobal = d, window.Howler = c, window.Howl = e, window.Sound = g)
} (); !
function() {
    HowlerGlobal.prototype.init = function(a) {
        return function() {
            return this._pos = [0, 0, 0],
            this._orientation = [0, 0, -1, 0, 1, 0],
            this._velocity = [0, 0, 0],
            this._listenerAttr = {
                dopplerFactor: 1,
                speedOfSound: 343.3
            },
            a.call(this, o)
        }
    } (HowlerGlobal.prototype.init);
    HowlerGlobal.prototype.pos = function(a, h, n) {
        return this.ctx && this.ctx.listener ? (h = "number" != typeof h ? this._pos[1] : h, n = "number" != typeof n ? this._pos[2] : n, "number" != typeof a ? this._pos: (this._pos = [a, h, n], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._Pos[2]), this)) : this
    };
    HowlerGlobal.prototype.orientatin = function(a, h, n, p, b, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        var c = this._orientation;
        return h = "number" != typeof h ? c[1] : h,
        n = "number" != typeof n ? c[2] : n,
        p = "number" != typeof p ? c[3] : p,
        b = "number" != typeof b ? c[4] : b,
        d = "number" != typeof d ? c[5] : d,
        "number" != typeof a ? c: (this._orientation = [a, h, n, p, b, d], this.ctx.listener.setOrientation(c[0], c[1], c[2], c[3], c[4], c[5]), this)
    };
    HowlerGlobal.prototype.velocity = function(a, h, n) {
        return this.ctx && this.ctx.listener ? (h = "number" != typeof h ? this._velocity[1] : h, n = "number" != typeof n ? this._velocity[2] : n, "number" != typeof a ? this._velocity: (this._velocity = [a, h, n], this.ctx.listener.setVelocity(this._velocity[0], this._velocity[1], this._velocity[2]), this)) : this
    };
    HowlerGlobal.prototype.listenerAttr = function(a) {
        if (!this.ctx || !this.ctx.listener) return this;
        var h = this._listenerAttr;
        return a ? (this._listenerAttr = {
            dopplerFactor: void 0 !== a.dopplerFactor ? a.dopplerFactor: h.dopplerFactor,
            speedOfSound: void 0 !== a.speedOfSound ? a.speedOfSound: h.speedOfSound
        },
        this.ctx.listener.dopplerFactor = h.dopplerFactor, this.ctx.listener.speedOfSound = h.speedOfSound, this) : h
    };
    Howl.prototype.init = function(a) {
        return function(h) {
            return this._orientation = h.orientation || [1, 0, 0],
            this._pos = h.pos || null,
            this._velocity = h.velocity || [0, 0, 0],
            this._pannerAttr = {
                coneInnerAngle: void 0 !== h.coneInnerAngle ? h.coneInnerAngle: 360,
                coneOUterAngle: void 0 !== h.coneOUterAngle ? h.coneOUterAngle: 360,
                coneOuterGain: void 0 !== h.coneOuterGain ? h.coneOuterGain: 0,
                distanceModel: void 0 !== h.distanceModel ? h.distanceModel: "inverse",
                maxDistance: void 0 !== h.maxDistance ? h.maxDistance: 1E4,
                panningModel: void 0 !== h.panningModel ? h.panningModel: "HRTF",
                refDistance: void 0 !== h.refDistance ? h.refDistance: 1,
                rolloffFactor: void 0 !== h.rolloffFactor ? h.rolloffFactor: 1
            },
            a.call(this, h)
        }
    } (Howl.prototype.init);
    Howl.prototype.pos = function(f, h, n, p) {
        var b = this;
        if (!b._webAudio) return b;
        if (!b._loaded) return b.once("play",
        function() {
            b.pos(f, h, n, p)
        }),
        b;
        if (h = "number" != typeof h ? 0 : h, n = "number" != typeof n ? -0.5 : n, void 0 === p) {
            if ("number" != typeof f) return b._pos;
            b._pos = [f, h, n]
        }
        for (var d = b._getSoundIds(p), c = 0; c < d.length; c++) {
            var e = b._soundById(d[c]);
            if (e) {
                if ("number" != typeof f) return e._pos;
                e._pos = [f, h, n];
                e._node && (e._panner || a(e), e._panner.setPosition(f, h, n))
            }
        }
        return b
    };
    Howl.prototype.orientation = function(f, h, n, p) {
        var b = this;
        if (!b._webAudio) return b;
        if (!b._loaded) return b.once("play",
        function() {
            b.orientation(f, h, n, p)
        }),
        b;
        if (h = "number" != typeof h ? b._orientation[1] : h, n = "number" != typeof n ? b._orientation[1] : n, void 0 === p) {
            if ("number" != typeof f) return b._orientation;
            b._orientation = [f, h, n]
        }
        for (var d = b._getSoundIds(p), c = 0; c < d.length; c++) {
            var e = b._soundById(d[c]);
            if (e) {
                if ("number" != typeof f) return e._orientation;
                e._orientation = [f, h, n];
                e._node && (e._panner || a(e), e._panner.setOrientation(f, h, n))
            }
        }
        return b
    };
    Howl.prototype.velocity = function(f, h, n, p) {
        var b = this;
        if (!b._webAudio) return b;
        if (!b._loaded) return b.once("play",
        function() {
            b.velocity(f, h, n, p)
        }),
        b;
        if (h = "number" != typeof h ? b._velocity[1] : h, n = "number" != typeof n ? b._velocity[1] : n, void 0 === p) {
            if ("number" != typeof f) return b._velocity;
            b._velocity = [f, h, n]
        }
        for (var d = b._getSoundIds(p), c = 0; c < d.length; c++) {
            var e = b._soundById(d[c]);
            if (e) {
                if ("number" != typeof f) return e._velocity;
                e._velocity = [f, h, n];
                e._node && (e._panner || a(e), e._panner.setVelocity(f, h, n))
            }
        }
        return b
    };
    Howl.prototype.pannerAttr = function() {
        var f, h, n, p = arguments;
        if (!this._webAudio) return this;
        if (0 === p.length) return this._pannerAttr;
        if (1 === p.length) {
            if ("object" != typeof p[0]) return n = this._soundById(parseInt(p[0], 10)),
            n ? n._pannerAttr: this._pannerAttr;
            f = p[0];
            void 0 === h && (this._pannerAttr = {
                coneInnerAngle: void 0 !== f.coneInnerAngle ? f.coneInnerAngle: this._coneInnerAngle,
                coneOUterAngle: void 0 !== f.coneOUterAngle ? f.coneOUterAngle: this._coneOUterAngle,
                coneOuterGain: void 0 !== f.coneOuterGain ? f.coneOuterGain: this._coneOuterGain,
                distanceModel: void 0 !== f.distanceModel ? f.distanceModel: this._distanceModel,
                maxDistance: void 0 !== f.maxDistance ? f.maxDistance: this._maxDistance,
                panningModel: void 0 !== f.panningModel ? f.panningModel: this._panningModel,
                refDistance: void 0 !== f.refDistance ? f.refDistance: this._refDistance,
                rolloffFactor: void 0 !== f.rolloffFactor ? f.rolloffFactor: this._rolloffFactor
            })
        } else 2 === p.length && (f = p[0], h = parseInt(p[1], 10));
        h = this._getSoundIds(h);
        for (p = 0; p < h.length; p++) if (n = this._soundById(h[p])) {
            var b = n._pannerAttr,
            b = {
                coneInnerAngle: void 0 !== f.coneInnerAngle ? f.coneInnerAngle: b.coneInnerAngle,
                coneOUterAngle: void 0 !== f.coneOUterAngle ? f.coneOUterAngle: b.coneOUterAngle,
                coneOuterGain: void 0 !== f.coneOuterGain ? f.coneOuterGain: b.coneOuterGain,
                distanceModel: void 0 !== f.distanceModel ? f.distanceModel: b.distanceModel,
                maxDistance: void 0 !== f.maxDistance ? f.maxDistance: b.maxDistance,
                panningModel: void 0 !== f.panningModel ? f.panningModel: b.panningModel,
                refDistance: void 0 !== f.refDistance ? f.refDistance: b.refDistance,
                rolloffFactor: void 0 !== f.rolloffFactor ? f.rolloffFactor: b.rolloffFactor
            },
            d = n._panner;
            d ? (d.coneInnerAngle = b.coneInnerAngle, d.coneOUterAngle = b.coneOUterAngle, d.coneOuterGain = b.coneOuterGain, d.distanceModel = b.distanceModel, d.maxDistance = b.maxDistance, d.panningModel = b.panningModel, d.refDistance = b.refDistance, d.rolloffFactor = b.rolloffFactor) : (n._pos || (n._pos = this._pos || [0, 0, -0.5]), a(n))
        }
        return this
    };
    Sound.prototype.init = function(a) {
        return function() {
            var h = this._parent;
            this._orientation = h._orientation;
            this._pos = h._pos;
            this._velocity = h._velocity;
            this._pannerAttr = h._pannerAttr;
            a.call(this);
            this._pos && h.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
        }
    } (Sound.prototype.init);
    Sound.prototype.reset = function(a) {
        return function() {
            var h = this._parent;
            return this._orientation = h._orientation,
            this._pos = h._pos,
            this._velocity = h._velocity,
            this._pannerAttr = h._pannerAttr,
            a.call(this)
        }
    } (Sound.prototype.reset);
    var a = function(a) {
        a._panner = Howler.ctx.createPanner();
        a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle;
        a._panner.coneOUterAngle = a._pannerAttr.coneOUterAngle;
        a._panner.coneOuterGain = a._pannerAttr.coneOuterGain;
        a._panner.distanceModel = a._pannerAttr.distanceModel;
        a._panner.maxDistance = a._pannerAttr.maxDistance;
        a._panner.panningModel = a._pannerAttr.panningModel;
        a._panner.refDistance = a._pannerAttr.refDistance;
        a._panner.rolloffFactor = a._pannerAttr.rolloffFactor;
        a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]);
        a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2]);
        a._panner.setVelocity(a._velocity[0], a._velocity[1], a._velocity[2]);
        a._panner.connect(a._node);
        a._paused || a._parent.pause(a._id).play(a._id)
    }
} (); (function(a) {
    function f() {
        this.fontFamily = "fjs" + (999999 * Math.random() | 0)
    }
    if (!Object.defineProperty) throw "Font.js requires Object.defineProperty, which this browser does not support.";
    if (!document.createElement("canvas").getContext) throw "Font.js requires <canvas> and the Canvas2D API, which this browser does not support."; (function(a) {
        function f(b, a) {
            return this.slice(b, a)
        }
        function p(b, a) {
            var d, f = b.length;
            2 > arguments.length && (a = 0);
            for (d = 0; d < f; ++d, ++a) this[a] = b[d] & 255
        }
        function b(b) {
            var a, d;
            if ("number" === typeof b) for (a = Array(b), d = 0; d < b; ++d) a[d] = 0;
            else a = b.slice(0);
            a.subarray = f;
            a.buffer = a;
            a.byteLength = a.length;
            a.set = p;
            "object" === typeof b && b.buffer && (a.buffer = b.buffer);
            return a
        }
        try {
            new Uint8Array(1);
            return
        } catch(d) {}
        a.Uint8Array = b;
        a.Uint32Array = b;
        a.Int32Array = b
    })(a); (function(a) {
        a.opera || "response" in XMLHttpRequest.prototype || "mozResponseArrayBuffer" in XMLHttpRequest.prototype || "mozResponse" in XMLHttpRequest.prototype || "responseArrayBuffer" in XMLHttpRequest.prototype || Object.defineProperty(XMLHttpRequest.prototype, "response", {
            get: a.VBArray ?
            function() {
                return new Uint8Array((new VBArray(this.responseBody)).toArray())
            }: function() {
                this.responseBody
            }
        })
    })(a);
    a.btoa || (a.btoa = function(a) {
        var f, p, b, d, c = 0,
        e = 0,
        g = "",
        g = [];
        if (!a) return a;
        do f = a.charCodeAt(c++),
        p = a.charCodeAt(c++),
        b = a.charCodeAt(c++),
        d = f << 16 | p << 8 | b,
        f = d >> 18 & 63,
        p = d >> 12 & 63,
        b = d >> 6 & 63,
        d &= 63,
        g[e++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
        while (c < a.length);
        g = g.join("");
        a = a.length % 3;
        return (a ? g.slice(0, a - 3) : g) + "===".slice(a || 3)
    });
    f.prototype.url = "";
    f.prototype.format = "";
    f.prototype.data = "";
    f.prototype.base64 = "AAEAAAAKAIAAAwAgT1MvMgAAAAAAAACsAAAAWGNtYXAAAAAAAAABBAAAACxnbHlmAAAAAAAAATAAAAAQaGVhZAAAAAAAAAFAAAAAOGhoZWEAAAAAAAABeAAAACRobXR4AAAAAAAAAZwAAAAIbG9jYQAAAAAAAAGkAAAACG1heHAAAAAAAAABrAAAACBuYW1lAAAAAAAAAcwAAAAgcG9zdAAAAAAAAAHsAAAAEAAEAAEAZAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAABAAMAAQAAAAwABAAgAAAABAAEAAEAAABB//8AAABB////wAABAAAAAAABAAAAAAAAAAAAAAAAMQAAAQAAAAAAAAAAAABfDzz1AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAgAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAIAAAAAQAAAAIAAQABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAIAHgADAAEECQABAAAAAAADAAEECQACAAIAAAAAAAEAAAAAAAAAAAAAAAAAAA==";
    f.prototype.metrics = {
        quadsize: 0,
        leading: 0,
        ascent: 0,
        descent: 0,
        weightclass: 400
    };
    f.prototype.systemfont = !1;
    f.prototype.loaded = !1;
    f.prototype.onload = function() {};
    f.prototype.onerror = function() {};
    f.prototype.canvas = !1;
    f.prototype.context = !1;
    f.prototype.validate = function(a, f, p, b, d) {
        if (!1 !== d && 0 > d) this.onerror("Requested system font '" + this.fontFamily + "' could not be loaded (it may not be installed).");
        else 0 < getComputedStyle(a, null).getPropertyValue("width").replace("px", "") ? (document.head.removeChild(f), document.body.removeChild(a), this.loaded = !0, this.onload()) : (console.log("Font timing out. Trying again ..."), setTimeout(function() {
            b.validate(a, f, p, b, !1 === d ? !1 : d - 50)
        },
        1E3))
    };
    f.prototype.ondownloaded = function() {
        var a = this,
        f = function(b) {
            return String.fromCharCode(b)
        },
        p = function(b) {
            if (256 > b) return f(0) + f(b);
            var a = b & 255;
            return f(b >> 8) + f(a)
        },
        b = function(b, a) {
            var d = 1 === b >> 7,
            c;
            c = 256 * (b & 127) + a;
            return d ? c - 32768 : c
        },
        d = f(0) + f(1) + f(0) + f(0),
        c = this.data,
        e = f(c[0]) + f(c[1]) + f(c[2]) + f(c[3]),
        e = (d = e === d) ? !1 : "OTTO" === e;
        if (d) this.format = "truetype";
        else if (e) this.format = "opentype";
        else {
            a.onerror("Error: file at " + this.url + " cannot be interpreted as OpenType font.");
            return
        }
        for (var e = 256 * c[4] + c[5], g = 12 + 16 * e, r = {},
        d = 12; d < g; d += 16) e = f(c[d]) + f(c[d + 1]) + f(c[d + 2]) + f(c[d + 3]),
        r[e] = {
            name: e,
            checksum: 16777216 * c[d + 4] + 65536 * c[d + 5] + 256 * c[d + 6] + c[d + 7],
            offset: 16777216 * c[d + 8] + 65536 * c[d + 9] + 256 * c[d + 10] + c[d + 11],
            length: 16777216 * c[d + 12] + 65536 * c[d + 13] + 256 * c[d + 14] + c[d + 15]
        };
        g = function(b) {
            return r[b] ? b: (a.onerror("Error: font is missing the required OpenType '" + b + "' table."), !1)
        };
        e = g("head");
        if (!1 !== e) {
            d = r[e].offset;
            r[e].version = "" + c[d] + c[d + 1] + c[d + 2] + c[d + 3];
            var k = 256 * c[d + 18] + c[d + 19];
            this.metrics.quadsize = k;
            e = g("hhea");
            if (!1 !== e && (d = r[e].offset, r[e].version = "" + c[d] + c[d + 1] + c[d + 2] + c[d + 3], this.metrics.ascent = b(c[d + 4], c[d + 5]) / k, this.metrics.descent = b(c[d + 6], c[d + 7]) / k, this.metrics.leading = b(c[d + 8], c[d + 9]) / k, e = g("OS/2"), !1 !== e && (d = r[e].offset, r[e].version = "" + c[d] + c[d + 1], this.metrics.weightclass = 256 * c[d + 4] + c[d + 5], e = g("cmap"), !1 !== e))) {
                d = r[e].offset;
                r[e].version = "" + c[d] + c[d + 1];
                for (var e = 256 * c[d + 2] + c[d + 3], l, t, g = !1, b = 0; b < e; b++) l = d + 4 + 8 * b,
                k = 256 * c[l] + c[l + 1],
                t = 256 * c[l + 2] + c[l + 3],
                l = 16777216 * c[l + 4] + 65536 * c[l + 5] + 256 * c[l + 6] + c[l + 7],
                3 === k && 1 === t && (g = l);
                b = "A";
                if (!1 !== g && (d += g, e = 256 * c[d] + c[d + 1], 4 === e)) {
                    e = d + 14;
                    g = d + 14 + (256 * c[d + 6] + c[d + 7]) / 2 * 2;
                    for (d = !1; e < g; e += 2) {
                        d = 256 * c[e] + c[e + 1];
                        if ( - 1 === [9, 10, 11, 12, 13, 32, 133, 160, 5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288].indexOf(d)) break;
                        d = !1
                    } ! 1 != d && (b = String.fromCharCode(d), c = ( - (d - 1) + 65536) % 65536, p = f(0) + p(d) + p(65535) + p(0) + p(d) + p(65535) + p(c) + p(1), p = btoa(p), this.base64 = this.base64.substring(0, 380) + p + this.base64.substring(380 + p.length))
                }
                this.bootstrapValidation(b, !1)
            }
        }
    };
    f.prototype.bootstrapValidation = function(a, f) {
        var p = this.fontFamily + " testfont",
        b = document.createElement("style");
        b.setAttribute("type", "text/css");
        b.innerHTML = "@font-face {\n  font-family: '" + p + "';\n  src: url('data:application/x-font-ttf;base64," + this.base64 + "')\n       format('truetype');}";
        document.head.appendChild(b);
        var d = !1;
        this.systemfont || (d = this.toStyleNode(), document.head.appendChild(d));
        var c = document.createElement("p");
        c.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;";
        c.style.fontFamily = "'" + this.fontFamily + "', '" + p + "'";
        c.innerHTML = a + a + a + a + a + a + a + a + a + a;
        document.body.appendChild(c);
        if ("undefined" === typeof getComputedStyle) this.onload(),
        error("Error: getComputedStyle is not supported by this browser.\nConsequently, Font.onload() cannot be trusted.");
        else {
            var p = this.systemfont ? 1E3: this.metrics.quadsize,
            e = document.createElement("canvas");
            e.width = p;
            e.height = p;
            this.canvas = e;
            e = e.getContext("2d");
            e.font = "1em '" + this.fontFamily + "'";
            e.fillStyle = "white";
            e.fillRect( - 1, -1, p + 2, p + 2);
            e.fillStyle = "black";
            e.fillText("test text", 50, p / 2);
            this.context = e;
            var g = this;
            setTimeout(function() {
                g.validate(c, b, d, g, f)
            },
            50)
        }
    };
    f.prototype.processSystemFont = function() {
        this.systemfont = !0;
        this.metrics = !1;
        this.bootstrapValidation("A", 1E3)
    };
    f.prototype.loadFont = function() {
        var a = this;
        if ( - 1 === this.url.indexOf(".")) setTimeout(function() {
            a.processSystemFont()
        },
        10);
        else {
            var f = new XMLHttpRequest;
            f.open("GET", a.url, !0);
            f.responseType = "arraybuffer";
            f.onload = function(p) {
                if (p = f.response) a.data = new Uint8Array(p),
                a.ondownloaded();
                else a.onerror("Error downloading font resource from " + a.url)
            };
            f.send(null)
        }
    };
    f.prototype.styleNode = !1;
    f.prototype.toStyleNode = function() {
        if (this.styleNode) return this.styleNode;
        this.styleNode = document.createElement("style");
        this.styleNode.type = "text/css";
        var a;
        a = "@font-face {\n" + ("  font-family: '" + this.fontFamily + "';\n");
        a += "  src: url('" + this.url + "') format('" + this.format + "');\n";
        this.styleNode.innerHTML = a + "}";
        return this.styleNode
    };
    f.prototype.measureText = function(a, f) {
        if (!this.loaded) return this.onerror("measureText() was called while the font was not yet loaded"),
        !1;
        this.context.font = f + "px '" + this.fontFamily + "'";
        var p = this.context.measureText(a);
        p.fontsize = f;
        p.ascent = 0;
        p.descent = 0;
        p.bounds = {
            minx: 0,
            maxx: p.width,
            miny: 0,
            maxy: 0
        };
        p.height = 0;
        var b = [];
        b.push(a);
        var d = b.length,
        c;
        for (c = 0; c < d; c++) this.measureSegment(b[c], f, p);
        return p
    };
    f.prototype.measureSegment = function(a, f, p) {
        var b, d = document.createElement("div");
        d.style.position = "absolute";
        d.style.opacity = 0;
        d.style.font = f + "px '" + this.fontFamily + "'";
        d.innerHTML = a;
        for (b = 1; 10 > b; b++) d.innerHTML += "<br/>" + a;
        document.body.appendChild(d);
        p.leading = 1.2 * f;
        b = document.defaultView.getComputedStyle(d, null).getPropertyValue("height");
        b = b.replace("px", "");
        b >= 10 * f && (p.leading = b / 10 | 0);
        document.body.removeChild(d);
        if (/^\s*$/.test(a)) return p;
        b = this.context;
        var c = this.systemfont ? 1E3: this.metrics.quadsize,
        d = c / 2,
        e = (c - p.width) / 2;
        e !== (e | 0) && (e |= 0);
        b.fillStyle = "white";
        b.fillRect( - 50, -50, c + 100, c + 100);
        b.fillStyle = "black";
        b.fillText(a, e, d);
        a = p.width + 50 | 0;
        var g = 4 * f;
        f = b.getImageData(e - 25, d - g / 2, a, g).data;
        d = b = 0;
        e = 4 * a;
        c = f.length;
        for (g /= 2; ++b < c && 255 === f[b];);
        var r = b / e | 0;
        for (b = c - 1; 0 < --b && 255 === f[b];);
        for (var k = b / e | 0,
        d = b = 0; d < a && 255 === f[b];) b += e,
        b >= c && (d++, b = b - c + 4);
        var l = d,
        t = 1;
        b = c - 3;
        for (d = 0; d < a && 255 === f[b];) b -= e,
        0 > b && (d++, b = c - 3 - 4 * t++);
        p.ascent = g - r;
        p.descent = k - g;
        p.bounds = {
            minx: l - 25,
            maxx: a - d - 25,
            miny: -p.descent,
            maxy: p.ascent
        };
        p.height = 1 + (k - r);
        return p
    };
    Object.defineProperty(f.prototype, "src", {
        set: function(a) {
            this.url = a;
            this.loadFont()
        }
    });
    "undefined" !== typeof define ? define(function() {
        return f
    }) : a.Font = f
})(window);
/*

*/
(function() {
    var a = a || {};
    a.WEBGL_RENDERER = 0;
    a.CANVAS_RENDERER = 1;
    a.VERSION = "v1.6";
    a.blendModes = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16
    };
    a.scaleModes = {
        DEFAULT: 0,
        LINEAR: 0,
        NEAREST: 1
    };
    a._UID = 0;
    "undefined" != typeof Float32Array ? (a.Float32Array = Float32Array, a.Uint16Array = Uint16Array) : (a.Float32Array = Array, a.Uint16Array = Array);
    a.INTERACTION_FREQUENCY = 30;
    a.AUTO_PREVENT_DEFAULT = !0;
    a.RAD_TO_DEG = 180 / Math.PI;
    a.DEG_TO_RAD = Math.PI / 180;
    a.dontSayHello = !1;
    a.sayHello = function(b) {
  
    };
    a.Point = function(b, a) {
        this.x = b || 0;
        this.y = a || 0
    };
    a.Point.prototype.clone = function() {
        return new a.Point(this.x, this.y)
    };
    a.Point.prototype.set = function(b, a) {
        this.x = b || 0;
        this.y = a || (0 !== a ? this.x: 0)
    };
    a.Point.prototype.constructor = a.Point;
    a.Rectangle = function(b, a, c, e) {
        this.x = b || 0;
        this.y = a || 0;
        this.width = c || 0;
        this.height = e || 0
    };
    a.Rectangle.prototype.clone = function() {
        return new a.Rectangle(this.x, this.y, this.width, this.height)
    };
    a.Rectangle.prototype.contains = function(b, a) {
        if (0 >= this.width || 0 >= this.height) return ! 1;
        var c = this.x;
        return b >= c && b <= c + this.width && (c = this.y, a >= c && a <= c + this.height) ? !0 : !1
    };
    a.Rectangle.prototype.constructor = a.Rectangle;
    a.EmptyRectangle = new a.Rectangle(0, 0, 0, 0);
    a.Polygon = function(b) {
        b instanceof Array || (b = Array.prototype.slice.call(arguments));
        if ("number" === typeof b[0]) {
            for (var d = [], c = 0, e = b.length; c < e; c += 2) d.push(new a.Point(b[c], b[c + 1]));
            b = d
        }
        this.points = b
    };
    a.Polygon.prototype.clone = function() {
        for (var b = [], d = 0; d < this.points.length; d++) b.push(this.points[d].clone());
        return new a.Polygon(b)
    };
    a.Polygon.prototype.contains = function(b, a) {
        for (var c = !1,
        e = 0,
        g = this.points.length - 1; e < this.points.length; g = e++) {
            var f = this.points[e].x,
            k = this.points[e].y,
            l = this.points[g].x,
            g = this.points[g].y;
            k > a !== g > a && b < (l - f) * (a - k) / (g - k) + f && (c = !c)
        }
        return c
    };
    a.Polygon.prototype.constructor = a.Polygon;
    a.Circle = function(b, a, c) {
        this.x = b || 0;
        this.y = a || 0;
        this.radius = c || 0
    };
    a.Circle.prototype.clone = function() {
        return new a.Circle(this.x, this.y, this.radius)
    };
    a.Circle.prototype.contains = function(b, a) {
        if (0 >= this.radius) return ! 1;
        var c = this.x - b,
        e = this.y - a,
        g = this.radius * this.radius;
        return c * c + e * e <= g
    };
    a.Circle.prototype.getBounds = function() {
        return new a.Rectangle(this.x - this.radius, this.y - this.radius, this.width, this.height)
    };
    a.Circle.prototype.constructor = a.Circle;
    a.Ellipse = function(b, a, c, e) {
        this.x = b || 0;
        this.y = a || 0;
        this.width = c || 0;
        this.height = e || 0
    };
    a.Ellipse.prototype.clone = function() {
        return new a.Ellipse(this.x, this.y, this.width, this.height)
    };
    a.Ellipse.prototype.contains = function(b, a) {
        if (0 >= this.width || 0 >= this.height) return ! 1;
        var c = (b - this.x) / this.width,
        e = (a - this.y) / this.height;
        return 1 >= c * c + e * e
    };
    a.Ellipse.prototype.getBounds = function() {
        return new a.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
    };
    a.Ellipse.prototype.constructor = a.Ellipse;
    a.Matrix = function() {
        this.a = 1;
        this.c = this.b = 0;
        this.d = 1;
        this.ty = this.tx = 0
    };
    a.Matrix.prototype.fromArray = function(b) {
        this.a = b[0];
        this.b = b[1];
        this.c = b[3];
        this.d = b[4];
        this.tx = b[2];
        this.ty = b[5]
    };
    a.Matrix.prototype.toArray = function(b) {
        this.array || (this.array = new Float32Array(9));
        var a = this.array;
        b ? (a[0] = this.a, a[1] = this.c, a[2] = 0, a[3] = this.b, a[4] = this.d, a[5] = 0, a[6] = this.tx, a[7] = this.ty) : (a[0] = this.a, a[1] = this.b, a[2] = this.tx, a[3] = this.c, a[4] = this.d, a[5] = this.ty, a[6] = 0, a[7] = 0);
        a[8] = 1;
        return a
    };
    a.identityMatrix = new a.Matrix;
    a.determineMatrixArrayType = function() {
        return "undefined" !== typeof Float32Array ? Float32Array: Array
    };
    a.Matrix2 = a.determineMatrixArrayType();
    a.DisplayObject = function() {
        this.position = new a.Point;
        this.scale = new a.Point(1, 1);
        this.pivot = new a.Point(0, 0);
        this.rotation = 0;
        this.alpha = 1;
        this.visible = !0;
        this.hitArea = null;
        this.renderable = this.buttonMode = !1;
        this.stage = this.parent = null;
        this.worldAlpha = 1;
        this._interactive = !1;
        this.defaultCursor = "pointer";
        this.worldTransform = new a.Matrix;
        this.color = [];
        this.dynamic = !0;
        this._sr = 0;
        this._cr = 1;
        this.filterArea = null;
        this._bounds = new a.Rectangle(0, 0, 1, 1);
        this._mask = this._currentBounds = null;
        this._cacheIsDirty = this._cacheAsBitmap = !1
    };
    a.DisplayObject.prototype.constructor = a.DisplayObject;
    a.DisplayObject.prototype.setInteractive = function(b) {
        this.interactive = b
    };
    Object.defineProperty(a.DisplayObject.prototype, "interactive", {
        get: function() {
            return this._interactive
        },
        set: function(b) {
            this._interactive = b;
            this.stage && (this.stage.dirty = !0)
        }
    });
    Object.defineProperty(a.DisplayObject.prototype, "worldVisible", {
        get: function() {
            var b = this;
            do {
                if (!b.visible) return ! 1;
                b = b.parent
            } while ( b );
            return ! 0
        }
    });
    Object.defineProperty(a.DisplayObject.prototype, "mask", {
        get: function() {
            return this._mask
        },
        set: function(b) {
            this._mask && (this._mask.isMask = !1);
            if (this._mask = b) this._mask.isMask = !0
        }
    });
    Object.defineProperty(a.DisplayObject.prototype, "filters", {
        get: function() {
            return this._filters
        },
        set: function(b) {
            if (b) {
                for (var a = [], c = 0; c < b.length; c++) for (var e = b[c].passes, g = 0; g < e.length; g++) a.push(e[g]);
                this._filterBlock = {
                    target: this,
                    filterPasses: a
                }
            }
            this._filters = b
        }
    });
    Object.defineProperty(a.DisplayObject.prototype, "cacheAsBitmap", {
        get: function() {
            return this._cacheAsBitmap
        },
        set: function(b) {
            this._cacheAsBitmap !== b && (b ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = b)
        }
    });
    a.DisplayObject.prototype.updateTransform = function() {
        this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
        var b = this.parent.worldTransform,
        a = this.worldTransform,
        c = this.pivot.x,
        e = this.pivot.y,
        g = this._cr * this.scale.x,
        f = -this._sr * this.scale.y,
        k = this._sr * this.scale.x,
        l = this._cr * this.scale.y,
        t = this.position.x - g * c - e * f,
        c = this.position.y - l * e - c * k,
        e = b.a,
        h = b.b,
        q = b.c,
        n = b.d;
        a.a = e * g + h * k;
        a.b = e * f + h * l;
        a.tx = e * t + h * c + b.tx;
        a.c = q * g + n * k;
        a.d = q * f + n * l;
        a.ty = q * t + n * c + b.ty;
        this.worldAlpha = this.alpha * this.parent.worldAlpha
    };
    a.DisplayObject.prototype.getBounds = function(b) {
        return a.EmptyRectangle
    };
    a.DisplayObject.prototype.getLocalBounds = function() {
        return this.getBounds(a.identityMatrix)
    };
    a.DisplayObject.prototype.setStageReference = function(b) {
        this.stage = b;
        this._interactive && (this.stage.dirty = !0)
    };
    a.DisplayObject.prototype.generateTexture = function(b) {
        var d = this.getLocalBounds();
        b = new a.RenderTexture(d.width | 0, d.height | 0, b);
        b.render(this, new a.Point( - d.x, -d.y));
        return b
    };
    a.DisplayObject.prototype.updateCache = function() {
        this._generateCachedSprite()
    };
    a.DisplayObject.prototype._renderCachedSprite = function(b) {
        this._cachedSprite.worldAlpha = this.worldAlpha;
        b.gl ? a.Sprite.prototype._renderWebGL.call(this._cachedSprite, b) : a.Sprite.prototype._renderCanvas.call(this._cachedSprite, b)
    };
    a.DisplayObject.prototype._generateCachedSprite = function() {
        this._cacheAsBitmap = !1;
        var b = this.getLocalBounds();
        if (this._cachedSprite) this._cachedSprite.texture.resize(b.width | 0, b.height | 0);
        else {
            var d = new a.RenderTexture(b.width | 0, b.height | 0);
            this._cachedSprite = new a.Sprite(d);
            this._cachedSprite.worldTransform = this.worldTransform
        }
        d = this._filters;
        this._filters = null;
        this._cachedSprite.filters = d;
        this._cachedSprite.texture.render(this, new a.Point( - b.x, -b.y));
        this._cachedSprite.anchor.x = -(b.x / b.width);
        this._cachedSprite.anchor.y = -(b.y / b.height);
        this._filters = d;
        this._cacheAsBitmap = !0
    };
    a.DisplayObject.prototype._destroyCachedSprite = function() {
        this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
    };
    a.DisplayObject.prototype._renderWebGL = function(b) {};
    a.DisplayObject.prototype._renderCanvas = function(b) {};
    Object.defineProperty(a.DisplayObject.prototype, "x", {
        get: function() {
            return this.position.x
        },
        set: function(b) {
            this.position.x = b
        }
    });
    Object.defineProperty(a.DisplayObject.prototype, "y", {
        get: function() {
            return this.position.y
        },
        set: function(b) {
            this.position.y = b
        }
    });
    a.DisplayObjectContainer = function() {
        a.DisplayObject.call(this);
        this.children = []
    };
    a.DisplayObjectContainer.prototype = Object.create(a.DisplayObject.prototype);
    a.DisplayObjectContainer.prototype.constructor = a.DisplayObjectContainer;
    Object.defineProperty(a.DisplayObjectContainer.prototype, "width", {
        get: function() {
            return this.scale.x * this.getLocalBounds().width
        },
        set: function(b) {
            this.scale.x = b / (this.getLocalBounds().width / this.scale.x);
            this._width = b
        }
    });
    Object.defineProperty(a.DisplayObjectContainer.prototype, "height", {
        get: function() {
            return this.scale.y * this.getLocalBounds().height
        },
        set: function(b) {
            this.scale.y = b / (this.getLocalBounds().height / this.scale.y);
            this._height = b
        }
    });
    a.DisplayObjectContainer.prototype.addChild = function(b) {
        return this.addChildAt(b, this.children.length)
    };
    a.DisplayObjectContainer.prototype.addChildAt = function(b, a) {
        if (0 <= a && a <= this.children.length) return b.parent && b.parent.removeChild(b),
        b.parent = this,
        this.children.splice(a, 0, b),
        this.stage && b.setStageReference(this.stage),
        b;
        throw Error(b + " The index " + a + " supplied is out of bounds " + this.children.length);
    };
    a.DisplayObjectContainer.prototype.swapChildren = function(b, a) {
        if (b !== a) {
            var c = this.children.indexOf(b),
            e = this.children.indexOf(a);
            if (0 > c || 0 > e) throw Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
            this.children[c] = a;
            this.children[e] = b
        }
    };
    a.DisplayObjectContainer.prototype.getChildAt = function(b) {
        if (0 <= b && b < this.children.length) return this.children[b];
        throw Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
    };
    a.DisplayObjectContainer.prototype.removeChild = function(b) {
        return this.removeChildAt(this.children.indexOf(b))
    };
    a.DisplayObjectContainer.prototype.removeChildAt = function(b) {
        var a = this.getChildAt(b);
        this.stage && a.removeStageReference();
        a.parent = void 0;
        this.children.splice(b, 1);
        return a
    };
    a.DisplayObjectContainer.prototype.removeChildren = function(b, a) {
        var c = b || 0,
        e = "number" === typeof a ? a: this.children.length,
        g = e - c;
        if (0 < g && g <= e) {
            c = this.children.splice(c, g);
            for (e = 0; e < c.length; e++) g = c[e],
            this.stage && g.removeStageReference(),
            g.parent = void 0;
            return c
        }
        throw Error("Range Error, numeric values are outside the acceptable range");
    };
    a.DisplayObjectContainer.prototype.updateTransform = function() {
        if (this.visible && (a.DisplayObject.prototype.updateTransform.call(this), !this._cacheAsBitmap)) for (var b = 0,
        d = this.children.length; b < d; b++) this.children[b].updateTransform()
    };
    a.DisplayObjectContainer.prototype.getBounds = function(b) {
        if (0 === this.children.length) return a.EmptyRectangle;
        if (b) {
            var d = this.worldTransform;
            this.worldTransform = b;
            this.updateTransform();
            this.worldTransform = d
        }
        for (var c = d = Infinity,
        e = -Infinity,
        g = -Infinity,
        f, k, l = !1,
        t = 0,
        h = this.children.length; t < h; t++) this.children[t].visible && (l = !0, f = this.children[t].getBounds(b), d = d < f.x ? d: f.x, c = c < f.y ? c: f.y, k = f.width + f.x, f = f.height + f.y, e = e > k ? e: k, g = g > f ? g: f);
        if (!l) return a.EmptyRectangle;
        b = this._bounds;
        b.x = d;
        b.y = c;
        b.width = e - d;
        b.height = g - c;
        return b
    };
    a.DisplayObjectContainer.prototype.getLocalBounds = function() {
        var b = this.worldTransform;
        this.worldTransform = a.identityMatrix;
        for (var d = 0,
        c = this.children.length; d < c; d++) this.children[d].updateTransform();
        d = this.getBounds();
        this.worldTransform = b;
        return d
    };
    a.DisplayObjectContainer.prototype.setStageReference = function(b) {
        this.stage = b;
        this._interactive && (this.stage.dirty = !0);
        for (var a = 0,
        c = this.children.length; a < c; a++) this.children[a].setStageReference(b)
    };
    a.DisplayObjectContainer.prototype.removeStageReference = function() {
        for (var b = 0,
        a = this.children.length; b < a; b++) this.children[b].removeStageReference();
        this._interactive && (this.stage.dirty = !0);
        this.stage = null
    };
    a.DisplayObjectContainer.prototype._renderWebGL = function(b) {
        if (this.visible && !(0 >= this.alpha)) if (this._cacheAsBitmap) this._renderCachedSprite(b);
        else {
            var a, c;
            if (this._mask || this._filters) {
                this._filters && (b.spriteBatch.flush(), b.filterManager.pushFilter(this._filterBlock));
                this._mask && (b.spriteBatch.stop(), b.maskManager.pushMask(this.mask, b), b.spriteBatch.start());
                a = 0;
                for (c = this.children.length; a < c; a++) this.children[a]._renderWebGL(b);
                b.spriteBatch.stop();
                this._mask && b.maskManager.popMask(this._mask, b);
                this._filters && b.filterManager.popFilter();
                b.spriteBatch.start()
            } else for (a = 0, c = this.children.length; a < c; a++) this.children[a]._renderWebGL(b)
        }
    };
    a.DisplayObjectContainer.prototype._renderCanvas = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha) if (this._cacheAsBitmap) this._renderCachedSprite(b);
        else {
            this._mask && b.maskManager.pushMask(this._mask, b.context);
            for (var a = 0,
            c = this.children.length; a < c; a++) this.children[a]._renderCanvas(b);
            this._mask && b.maskManager.popMask(b.context)
        }
    };
    a.Sprite = function(b) {
        a.DisplayObjectContainer.call(this);
        this.anchor = new a.Point;
        this.texture = b;
        this._height = this._width = 0;
        this.tint = 16777215;
        this.blendMode = a.blendModes.NORMAL;
        if (b.baseTexture.hasLoaded) this.onTextureUpdate();
        else this.onTextureUpdateBind = this.onTextureUpdate.bind(this),
        this.texture.addEventListener("update", this.onTextureUpdateBind);
        this.renderable = !0
    };
    a.Sprite.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.Sprite.prototype.constructor = a.Sprite;
    Object.defineProperty(a.Sprite.prototype, "width", {
        get: function() {
            return this.scale.x * this.texture.frame.width
        },
        set: function(b) {
            this.scale.x = b / this.texture.frame.width;
            this._width = b
        }
    });
    Object.defineProperty(a.Sprite.prototype, "height", {
        get: function() {
            return this.scale.y * this.texture.frame.height
        },
        set: function(b) {
            this.scale.y = b / this.texture.frame.height;
            this._height = b
        }
    });
    a.Sprite.prototype.setTexture = function(b) {
        this.texture.baseTexture !== b.baseTexture && (this.textureChange = !0);
        this.texture = b;
        this.cachedTint = 16777215
    };
    a.Sprite.prototype.onTextureUpdate = function() {
        this._width && (this.scale.x = this._width / this.texture.frame.width);
        this._height && (this.scale.y = this._height / this.texture.frame.height)
    };
    a.Sprite.prototype.getBounds = function(b) {
        var a = this.texture.frame.width,
        c = this.texture.frame.height,
        e = a * (1 - this.anchor.x),
        g = a * -this.anchor.x,
        f = c * (1 - this.anchor.y),
        k = c * -this.anchor.y;
        b = b || this.worldTransform;
        var l = b.a,
        h = b.c,
        v = b.b,
        q = b.d,
        n = b.tx,
        p = b.ty;
        b = l * g + v * k + n;
        var c = q * k + h * g + p,
        a = l * e + v * k + n,
        k = q * k + h * e + p,
        u = l * e + v * f + n,
        e = q * f + h * e + p,
        l = l * g + v * f + n,
        g = q * f + h * g + p,
        h = f = -Infinity,
        v = q = Infinity,
        q = b < q ? b: q,
        q = a < q ? a: q,
        q = u < q ? u: q,
        q = l < q ? l: q,
        v = c < v ? c: v,
        v = k < v ? k: v,
        v = e < v ? e: v,
        v = g < v ? g: v,
        f = b > f ? b: f,
        f = a > f ? a: f,
        f = u > f ? u: f,
        h = c > h ? c: h,
        h = k > h ? k: h,
        h = e > h ? e: h;
        b = this._bounds;
        b.x = q;
        b.width = (l > f ? l: f) - q;
        b.y = v;
        b.height = (g > h ? g: h) - v;
        return this._currentBounds = b
    };
    a.Sprite.prototype._renderWebGL = function(b) {
        if (this.visible && !(0 >= this.alpha)) {
            var a, c;
            if (this._mask || this._filters) {
                var e = b.spriteBatch;
                this._filters && (e.flush(), b.filterManager.pushFilter(this._filterBlock));
                this._mask && (e.stop(), b.maskManager.pushMask(this.mask, b), e.start());
                e.render(this);
                a = 0;
                for (c = this.children.length; a < c; a++) this.children[a]._renderWebGL(b);
                e.stop();
                this._mask && b.maskManager.popMask(this._mask, b);
                this._filters && b.filterManager.popFilter();
                e.start()
            } else for (b.spriteBatch.render(this), a = 0, c = this.children.length; a < c; a++) this.children[a]._renderWebGL(b)
        }
    };
    a.Sprite.prototype._renderCanvas = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha) {
            this.blendMode !== b.currentBlendMode && (b.currentBlendMode = this.blendMode, b.context.globalCompositeOperation = a.blendModesCanvas[b.currentBlendMode]);
            this._mask && b.maskManager.pushMask(this._mask, b.context);
            if (this.texture.valid) {
                b.context.globalAlpha = this.worldAlpha;
                b.roundPixels ? b.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, this.worldTransform.tx | 0, this.worldTransform.ty | 0) : b.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, this.worldTransform.tx, this.worldTransform.ty);
                b.smoothProperty && b.scaleMode !== this.texture.baseTexture.scaleMode && (b.scaleMode = this.texture.baseTexture.scaleMode, b.context[b.smoothProperty] = b.scaleMode === a.scaleModes.LINEAR);
                var d = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width: this.anchor.x * -this.texture.frame.width,
                c = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height: this.anchor.y * -this.texture.frame.height;
                16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.CanvasTinter.getTintedTexture(this, this.tint)), b.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, d, c, this.texture.crop.width, this.texture.crop.height)) : b.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, d, c, this.texture.crop.width, this.texture.crop.height)
            }
            d = 0;
            for (c = this.children.length; d < c; d++) this.children[d]._renderCanvas(b);
            this._mask && b.maskManager.popMask(b.context)
        }
    };
    a.Sprite.fromFrame = function(b) {
        var d = a.TextureCache[b];
        if (!d) throw Error('The frameId "' + b + '" does not exist in the texture cache' + this);
        return new a.Sprite(d)
    };
    a.Sprite.fromImage = function(b, d, c) {
        b = a.Texture.fromImage(b, d, c);
        return new a.Sprite(b)
    };
    a.SpriteBatch = function(b) {
        a.DisplayObjectContainer.call(this);
        this.textureThing = b;
        this.ready = !1
    };
    a.SpriteBatch.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.SpriteBatch.constructor = a.SpriteBatch;
    a.SpriteBatch.prototype.initWebGL = function(b) {
        this.fastSpriteBatch = new a.WebGLFastSpriteBatch(b);
        this.ready = !0
    };
    a.SpriteBatch.prototype.updateTransform = function() {
        a.DisplayObject.prototype.updateTransform.call(this)
    };
    a.SpriteBatch.prototype._renderWebGL = function(b) { ! this.visible || 0 >= this.alpha || !this.children.length || (this.ready || this.initWebGL(b.gl), b.spriteBatch.stop(), b.shaderManager.setShader(b.shaderManager.fastShader), this.fastSpriteBatch.begin(this, b), this.fastSpriteBatch.render(this), b.spriteBatch.start())
    };
    a.SpriteBatch.prototype._renderCanvas = function(b) {
        var d = b.context;
        d.globalAlpha = this.worldAlpha;
        a.DisplayObject.prototype.updateTransform.call(this);
        for (var c = this.worldTransform,
        e = !0,
        g = 0; g < this.children.length; g++) {
            var f = this.children[g];
            if (f.visible) {
                var k = f.texture,
                l = k.frame;
                d.globalAlpha = this.worldAlpha * f.alpha;
                if (0 === f.rotation % (2 * Math.PI)) e && (d.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), e = !1),
                d.drawImage(k.baseTexture.source, l.x, l.y, l.width, l.height, f.anchor.x * -l.width * f.scale.x + f.position.x + 0.5 | 0, f.anchor.y * -l.height * f.scale.y + f.position.y + 0.5 | 0, l.width * f.scale.x, l.height * f.scale.y);
                else {
                    e || (e = !0);
                    a.DisplayObject.prototype.updateTransform.call(f);
                    var h = f.worldTransform;
                    b.roundPixels ? d.setTransform(h.a, h.c, h.b, h.d, h.tx | 0, h.ty | 0) : d.setTransform(h.a, h.c, h.b, h.d, h.tx, h.ty);
                    d.drawImage(k.baseTexture.source, l.x, l.y, l.width, l.height, f.anchor.x * -l.width + 0.5 | 0, f.anchor.y * -l.height + 0.5 | 0, l.width, l.height)
                }
            }
        }
    };
    a.MovieClip = function(b) {
        a.Sprite.call(this, b[0]);
        this.textures = b;
        this.animationSpeed = 1;
        this.loop = !0;
        this.onComplete = null;
        this.currentFrame = 0;
        this.playing = !1
    };
    a.MovieClip.prototype = Object.create(a.Sprite.prototype);
    a.MovieClip.prototype.constructor = a.MovieClip;
    Object.defineProperty(a.MovieClip.prototype, "totalFrames", {
        get: function() {
            return this.textures.length
        }
    });
    a.MovieClip.prototype.stop = function() {
        this.playing = !1
    };
    a.MovieClip.prototype.play = function() {
        this.playing = !0
    };
    a.MovieClip.prototype.gotoAndStop = function(b) {
        this.playing = !1;
        this.currentFrame = b;
        this.setTexture(this.textures[(this.currentFrame + 0.5 | 0) % this.textures.length])
    };
    a.MovieClip.prototype.gotoAndPlay = function(b) {
        this.currentFrame = b;
        this.playing = !0
    };
    a.MovieClip.prototype.updateTransform = function() {
        a.Sprite.prototype.updateTransform.call(this);
        if (this.playing) {
            this.currentFrame += this.animationSpeed;
            var b = this.currentFrame + 0.5 | 0;
            this.currentFrame %= this.textures.length;
            if (this.loop || b < this.textures.length) this.setTexture(this.textures[b % this.textures.length]);
            else if (b >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete)) this.onComplete()
        }
    };
    a.MovieClip.fromFrames = function(b) {
        for (var d = [], c = 0; c < b.length; c++) d.push(new a.Texture.fromFrame(b[c]));
        return new a.MovieClip(d)
    };
    a.MovieClip.fromImages = function(b) {
        for (var d = [], c = 0; c < b.length; c++) d.push(new a.Texture.fromImage(b[c]));
        return new a.MovieClip(d)
    };
    a.FilterBlock = function() {
        this.renderable = this.visible = !0
    };
    a.Text = function(b, d) {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        a.Sprite.call(this, a.Texture.fromCanvas(this.canvas));
        this.setText(b);
        this.setStyle(d);
        this.updateText();
        this.dirty = !1
    };
    a.Text.prototype = Object.create(a.Sprite.prototype);
    a.Text.prototype.constructor = a.Text;
    a.Text.prototype.setStyle = function(b) {
        b = b || {};
        b.font = b.font || "bold 20pt Arial";
        b.fill = b.fill || "black";
        b.align = b.align || "left";
        b.stroke = b.stroke || "black";
        b.strokeThickness = b.strokeThickness || 0;
        b.wordWrap = b.wordWrap || !1;
        b.wordWrapWidth = b.wordWrapWidth || 100;
        b.wordWrapWidth = b.wordWrapWidth || 100;
        b.dropShadow = b.dropShadow || !1;
        b.dropShadowAngle = b.dropShadowAngle || Math.PI / 6;
        b.dropShadowDistance = b.dropShadowDistance || 4;
        b.dropShadowColor = b.dropShadowColor || "black";
        this.style = b;
        this.dirty = !0
    };
    a.Text.prototype.setText = function(b) {
        this.text = b.toString() || " ";
        this.dirty = !0
    };
    a.Text.prototype.updateText = function() {
        this.context.font = this.style.font;
        var b = this.text;
        this.style.wordWrap && (b = this.wordWrap(this.text));
        for (var b = b.split(/(?:\r\n|\r|\n)/), a = [], c = 0, e = 0; e < b.length; e++) {
            var g = this.context.measureText(b[e]).width;
            a[e] = g;
            c = Math.max(c, g)
        }
        e = c + this.style.strokeThickness;
        this.style.dropShadow && (e += this.style.dropShadowDistance);
        this.canvas.width = e + this.context.lineWidth;
        g = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
        e = g * b.length;
        this.style.dropShadow && (e += this.style.dropShadowDistance);
        this.canvas.height = e;
        navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.font = this.style.font;
        this.context.strokeStyle = this.style.stroke;
        this.context.lineWidth = this.style.strokeThickness;
        this.context.textBaseline = "top";
        var f, k;
        if (this.style.dropShadow) {
            this.context.fillStyle = this.style.dropShadowColor;
            for (var l = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance, h = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance, e = 0; e < b.length; e++) f = this.style.strokeThickness / 2,
            k = this.style.strokeThickness / 2 + e * g,
            "right" === this.style.align ? f += c - a[e] : "center" === this.style.align && (f += (c - a[e]) / 2),
            this.style.fill && this.context.fillText(b[e], f + l, k + h)
        }
        this.context.fillStyle = this.style.fill;
        for (e = 0; e < b.length; e++) f = this.style.strokeThickness / 2,
        k = this.style.strokeThickness / 2 + e * g,
        "right" === this.style.align ? f += c - a[e] : "center" === this.style.align && (f += (c - a[e]) / 2),
        this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], f, k),
        this.style.fill && this.context.fillText(b[e], f, k);
        this.updateTexture()
    };
    a.Text.prototype.updateTexture = function() {
        this.texture.baseTexture.width = this.canvas.width;
        this.texture.baseTexture.height = this.canvas.height;
        this.texture.crop.width = this.texture.frame.width = this.canvas.width;
        this.texture.crop.height = this.texture.frame.height = this.canvas.height;
        this._width = this.canvas.width;
        this._height = this.canvas.height;
        this.requiresUpdate = !0
    };
    a.Text.prototype._renderWebGL = function(b) {
        this.requiresUpdate && (this.requiresUpdate = !1, a.updateWebGLTexture(this.texture.baseTexture, b.gl));
        a.Sprite.prototype._renderWebGL.call(this, b)
    };
    a.Text.prototype.updateTransform = function() {
        this.dirty && (this.updateText(), this.dirty = !1);
        a.Sprite.prototype.updateTransform.call(this)
    };
    a.Text.prototype.determineFontHeight = function(b) {
        var d = a.Text.heightCache[b];
        if (!d) {
            var c = document.getElementsByTagName("body")[0],
            e = document.createElement("div"),
            d = document.createTextNode("M");
            e.appendChild(d);
            e.setAttribute("style", b + ";position:absolute;top:0;left:0");
            c.appendChild(e);
            d = e.offsetHeight;
            a.Text.heightCache[b] = d;
            c.removeChild(e)
        }
        return d
    };
    a.Text.prototype.wordWrap = function(b) {
        var a = "";
        b = b.split("\n");
        for (var c = 0; c < b.length; c++) {
            for (var e = this.style.wordWrapWidth,
            g = b[c].split(" "), f = 0; f < g.length; f++) {
                var k = this.context.measureText(g[f]).width,
                l = k + this.context.measureText(" ").width;
                0 === f || l > e ? (0 < f && (a += "\n"), a += g[f], e = this.style.wordWrapWidth - k) : (e -= l, a += " " + g[f])
            }
            c < b.length - 1 && (a += "\n")
        }
        return a
    };
    a.Text.prototype.destroy = function(b) {
        this.canvas = this.context = null;
        this.texture.destroy(void 0 === b ? !0 : b)
    };
    a.Text.heightCache = {};
    a.BitmapText = function(b, d) {
        a.DisplayObjectContainer.call(this);
        this._pool = [];
        this.setText(b);
        this.setStyle(d);
        this.updateText();
        this.dirty = !1
    };
    a.BitmapText.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.BitmapText.prototype.constructor = a.BitmapText;
    a.BitmapText.prototype.setText = function(b) {
        this.text = b || " ";
        this.dirty = !0
    };
    a.BitmapText.prototype.setStyle = function(b) {
        b = b || {};
        b.align = b.align || "left";
        this.style = b;
        var d = b.font.split(" ");
        this.fontName = d[d.length - 1];
        this.fontSize = 2 <= d.length ? parseInt(d[d.length - 2], 10) : a.BitmapText.fonts[this.fontName].size;
        this.dirty = !0;
        this.tint = b.tint
    };
    a.BitmapText.prototype.updateText = function() {
        for (var b = a.BitmapText.fonts[this.fontName], d = new a.Point, c = null, e = [], g = 0, f = [], k = 0, l = this.fontSize / b.size, h = 0; h < this.text.length; h++) {
            var n = this.text.charCodeAt(h);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(h))) f.push(d.x),
            g = Math.max(g, d.x),
            k++,
            d.x = 0,
            d.y += b.lineHeight,
            c = null;
            else {
                var q = b.chars[n];
                q && (c && q[c] && (d.x += q.kerning[c]), e.push({
                    texture: q.texture,
                    line: k,
                    charCode: n,
                    position: new a.Point(d.x + q.xOffset, d.y + q.yOffset)
                }), d.x += q.xAdvance, c = n)
            }
        }
        f.push(d.x);
        g = Math.max(g, d.x);
        c = [];
        for (h = 0; h <= k; h++) n = 0,
        "right" === this.style.align ? n = g - f[h] : "center" === this.style.align && (n = (g - f[h]) / 2),
        c.push(n);
        k = this.children.length;
        f = e.length;
        n = this.tint || 16777215;
        for (h = 0; h < f; h++)(q = h < k ? this.children[h] : this._pool.pop()) ? q.setTexture(e[h].texture) : q = new a.Sprite(e[h].texture),
        q.position.x = (e[h].position.x + c[e[h].line]) * l,
        q.position.y = e[h].position.y * l,
        q.scale.x = q.scale.y = l,
        q.tint = n,
        q.parent || this.addChild(q);
        for (; this.children.length > f;) e = this.getChildAt(this.children.length - 1),
        this._pool.push(e),
        this.removeChild(e);
        this.textWidth = g * l;
        this.textHeight = (d.y + b.lineHeight) * l
    };
    a.BitmapText.prototype.updateTransform = function() {
        this.dirty && (this.updateText(), this.dirty = !1);
        a.DisplayObjectContainer.prototype.updateTransform.call(this)
    };
    a.BitmapText.fonts = {};
    a.InteractionData = function() {
        this.global = new a.Point;
        this.originalEvent = this.target = null
    };
    a.InteractionData.prototype.getLocalPosition = function(b) {
        var d = b.worldTransform;
        b = this.global;
        var c = d.a,
        e = d.b,
        g = d.tx,
        f = d.c,
        k = d.d,
        d = d.ty,
        l = 1 / (c * k + e * -f);
        return new a.Point(k * l * b.x + -e * l * b.y + (d * e - g * k) * l, c * l * b.y + -f * l * b.x + ( - d * c + g * f) * l)
    };
    a.InteractionData.prototype.constructor = a.InteractionData;
    a.InteractionManager = function(b) {
        this.stage = b;
        this.mouse = new a.InteractionData;
        this.touchs = {};
        this.tempPoint = new a.Point;
        this.mouseoverEnabled = !0;
        this.pool = [];
        this.interactiveItems = [];
        this.interactionDOMElement = null;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.last = 0;
        this.currentCursorStyle = "inherit";
        this.mouseOut = !1
    };
    a.InteractionManager.prototype.constructor = a.InteractionManager;
    a.InteractionManager.prototype.collectInteractiveSprite = function(b, a) {
        for (var c = b.children,
        e = c.length - 1; 0 <= e; e--) {
            var g = c[e];
            g._interactive ? (a.interactiveChildren = !0, this.interactiveItems.push(g), 0 < g.children.length && this.collectInteractiveSprite(g, g)) : (g.__iParent = null, 0 < g.children.length && this.collectInteractiveSprite(g, a))
        }
    };
    a.InteractionManager.prototype.setTarget = function(b) {
        this.target = b;
        null === this.interactionDOMElement && this.setTargetDomElement(b.view)
    };
    a.InteractionManager.prototype.setTargetDomElement = function(b) {
        this.removeEvents();
        window.navigator.msPointerEnabled && (b.style["-ms-content-zooming"] = "none", b.style["-ms-touch-action"] = "none");
        this.interactionDOMElement = b;
        b.addEventListener("mousemove", this.onMouseMove, !0);
        b.addEventListener("mousedown", this.onMouseDown, !0);
        b.addEventListener("mouseout", this.onMouseOut, !0);
        b.addEventListener("touchstart", this.onTouchStart, !0);
        b.addEventListener("touchend", this.onTouchEnd, !0);
        b.addEventListener("touchmove", this.onTouchMove, !0);
        window.addEventListener("mouseup", this.onMouseUp, !0)
    };
    a.InteractionManager.prototype.removeEvents = function() {
        this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
    };
    a.InteractionManager.prototype.update = function() {
        if (this.target) {
            var b = Date.now(),
            d = b - this.last,
            d = d * a.INTERACTION_FREQUENCY / 1E3;
            if (! (1 > d)) {
                this.last = b;
                b = 0;
                this.dirty && this.rebuildInteractiveGraph();
                for (var d = this.interactiveItems.length,
                c = "inherit",
                e = !1,
                b = 0; b < d; b++) {
                    var g = this.interactiveItems[b];
                    g.__hit = this.hitTest(g, this.mouse);
                    this.mouse.target = g;
                    g.__hit && !e ? (g.buttonMode && (c = g.defaultCursor), g.interactiveChildren || (e = !0), g.__isOver || (g.mouseover && g.mouseover(this.mouse), g.__isOver = !0)) : g.__isOver && (g.mouseout && g.mouseout(this.mouse), g.__isOver = !1)
                }
                this.currentCursorStyle !== c && (this.currentCursorStyle = c, this.interactionDOMElement.style.cursor = c)
            }
        }
    };
    a.InteractionManager.prototype.rebuildInteractiveGraph = function() {
        this.dirty = !1;
        for (var b = this.interactiveItems.length,
        a = 0; a < b; a++) this.interactiveItems[a].interactiveChildren = !1;
        this.interactiveItems = [];
        this.stage.interactive && this.interactiveItems.push(this.stage);
        this.collectInteractiveSprite(this.stage, this.stage)
    };
    a.InteractionManager.prototype.onMouseMove = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        this.mouse.originalEvent = b || window.event;
        var a = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = this.target.width / a.width * (b.clientX - a.left);
        this.mouse.global.y = this.target.height / a.height * (b.clientY - a.top);
        b = this.interactiveItems.length;
        for (a = 0; a < b; a++) {
            var c = this.interactiveItems[a];
            c.mousemove && c.mousemove(this.mouse)
        }
    };
    a.InteractionManager.prototype.onMouseDown = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        this.mouse.originalEvent = b || window.event;
        a.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
        b = this.interactiveItems.length;
        for (var d = 0; d < b; d++) {
            var c = this.interactiveItems[d];
            if (c.mousedown || c.click) if (c.__mouseIsDown = !0, c.__hit = this.hitTest(c, this.mouse), c.__hit && (c.mousedown && c.mousedown(this.mouse), c.__isDown = !0, !c.interactiveChildren)) break
        }
    };
    a.InteractionManager.prototype.onMouseOut = function() {
        this.dirty && this.rebuildInteractiveGraph();
        var b = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var a = 0; a < b; a++) {
            var c = this.interactiveItems[a];
            c.__isOver && (this.mouse.target = c, c.mouseout && c.mouseout(this.mouse), c.__isOver = !1)
        }
        this.mouseOut = !0;
        this.mouse.global.x = -1E4;
        this.mouse.global.y = -1E4
    };
    a.InteractionManager.prototype.onMouseUp = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        this.mouse.originalEvent = b || window.event;
        b = this.interactiveItems.length;
        for (var a = !1,
        c = 0; c < b; c++) {
            var e = this.interactiveItems[c];
            e.__hit = this.hitTest(e, this.mouse);
            e.__hit && !a ? (e.mouseup && e.mouseup(this.mouse), e.__isDown && e.click && e.click(this.mouse), e.interactiveChildren || (a = !0)) : e.__isDown && e.mouseupoutside && e.mouseupoutside(this.mouse);
            e.__isDown = !1
        }
    };
    a.InteractionManager.prototype.hitTest = function(b, d) {
        var c = d.global;
        if (!b.worldVisible) return ! 1;
        var e = b instanceof a.Sprite,
        g = b.worldTransform,
        f = g.a,
        k = g.b,
        l = g.tx,
        h = g.c,
        n = g.d,
        g = g.ty,
        q = 1 / (f * n + k * -h),
        k = n * q * c.x + -k * q * c.y + (g * k - l * n) * q,
        c = f * q * c.y + -h * q * c.x + ( - g * f + l * h) * q;
        d.target = b;
        if (b.hitArea && b.hitArea.contains) return b.hitArea.contains(k, c) ? (d.target = b, !0) : !1;
        if (e && (f = b.texture.frame.width, e = b.texture.frame.height, l = -f * b.anchor.x, k > l && k < l + f && (k = -e * b.anchor.y, c > k && c < k + e))) return d.target = b,
        !0;
        e = b.children.length;
        for (k = 0; k < e; k++) if (this.hitTest(b.children[k], d)) return d.target = b,
        !0;
        return ! 1
    };
    a.InteractionManager.prototype.onTouchMove = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        for (var a = this.interactionDOMElement.getBoundingClientRect(), c = b.changedTouches, e, g = 0, g = 0; g < c.length; g++) {
            var f = c[g];
            e = this.touchs[f.identifier];
            e.originalEvent = b || window.event;
            e.global.x = this.target.width / a.width * (f.clientX - a.left);
            e.global.y = this.target.height / a.height * (f.clientY - a.top);
            navigator.isCocoonJS && (e.global.x = f.clientX, e.global.y = f.clientY);
            for (var k = 0; k < this.interactiveItems.length; k++) {
                var l = this.interactiveItems[k];
                l.touchmove && l.__touchData && l.__touchData[f.identifier] && l.touchmove(e)
            }
        }
    };
    a.InteractionManager.prototype.onTouchStart = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        var d = this.interactionDOMElement.getBoundingClientRect();
        a.AUTO_PREVENT_DEFAULT && b.preventDefault();
        for (var c = b.changedTouches,
        e = 0; e < c.length; e++) {
            var g = c[e],
            f = this.pool.pop();
            f || (f = new a.InteractionData);
            f.originalEvent = b || window.event;
            this.touchs[g.identifier] = f;
            f.global.x = this.target.width / d.width * (g.clientX - d.left);
            f.global.y = this.target.height / d.height * (g.clientY - d.top);
            navigator.isCocoonJS && (f.global.x = g.clientX, f.global.y = g.clientY);
            for (var k = this.interactiveItems.length,
            l = 0; l < k; l++) {
                var h = this.interactiveItems[l];
                if (h.touchstart || h.tap) if (h.__hit = this.hitTest(h, f), h.__hit && (h.touchstart && h.touchstart(f), h.__isDown = !0, h.__touchData = h.__touchData || {},
                h.__touchData[g.identifier] = f, !h.interactiveChildren)) break
            }
        }
    };
    a.InteractionManager.prototype.onTouchEnd = function(b) {
        this.dirty && this.rebuildInteractiveGraph();
        for (var a = this.interactionDOMElement.getBoundingClientRect(), c = b.changedTouches, e = 0; e < c.length; e++) {
            var g = c[e],
            f = this.touchs[g.identifier],
            k = !1;
            f.global.x = this.target.width / a.width * (g.clientX - a.left);
            f.global.y = this.target.height / a.height * (g.clientY - a.top);
            navigator.isCocoonJS && (f.global.x = g.clientX, f.global.y = g.clientY);
            for (var l = this.interactiveItems.length,
            h = 0; h < l; h++) {
                var n = this.interactiveItems[h];
                if (n.__touchData && n.__touchData[g.identifier]) {
                    n.__hit = this.hitTest(n, n.__touchData[g.identifier]);
                    f.originalEvent = b || window.event;
                    if (n.touchend || n.tap) n.__hit && !k ? (n.touchend && n.touchend(f), n.__isDown && n.tap && n.tap(f), n.interactiveChildren || (k = !0)) : n.__isDown && n.touchendoutside && n.touchendoutside(f),
                    n.__isDown = !1;
                    n.__touchData[g.identifier] = null
                }
            }
            this.pool.push(f);
            this.touchs[g.identifier] = null
        }
    };
    a.Stage = function(b) {
        a.DisplayObjectContainer.call(this);
        this.worldTransform = new a.Matrix;
        this.interactive = !0;
        this.interactionManager = new a.InteractionManager(this);
        this.dirty = !0;
        this.stage = this;
        this.stage.hitArea = new a.Rectangle(0, 0, 1E5, 1E5);
        this.setBackgroundColor(b)
    };
    a.Stage.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.Stage.prototype.constructor = a.Stage;
    a.Stage.prototype.setInteractionDelegate = function(b) {
        this.interactionManager.setTargetDomElement(b)
    };
    a.Stage.prototype.updateTransform = function() {
        this.worldAlpha = 1;
        for (var b = 0,
        a = this.children.length; b < a; b++) this.children[b].updateTransform();
        this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0);
        this.interactive && this.interactionManager.update()
    };
    a.Stage.prototype.setBackgroundColor = function(b) {
        this.backgroundColor = b || 0;
        this.backgroundColorSplit = a.hex2rgb(this.backgroundColor);
        b = this.backgroundColor.toString(16);
        b = "000000".substr(0, 6 - b.length) + b;
        this.backgroundColorString = "#" + b
    };
    a.Stage.prototype.getMousePosition = function() {
        return this.interactionManager.mouse.global
    };
    for (var f = 0,
    h = ["ms", "moz", "webkit", "o"], n = 0; n < h.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[h[n] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[h[n] + "CancelAnimationFrame"] || window[h[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var a = (new Date).getTime(),
        c = Math.max(0, 16 - (a - f)),
        e = window.setTimeout(function() {
            b(a + c)
        },
        c);
        f = a + c;
        return e
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(b) {
        clearTimeout(b)
    });
    window.requestAnimFrame = window.requestAnimationFrame;
    a.hex2rgb = function(b) {
        return [(b >> 16 & 255) / 255, (b >> 8 & 255) / 255, (b & 255) / 255]
    };
    a.rgb2hex = function(b) {
        return (255 * b[0] << 16) + (255 * b[1] << 8) + 255 * b[2]
    };
    "function" !== typeof Function.prototype.bind && (Function.prototype.bind = function() {
        var b = Array.prototype.slice;
        return function(a) {
            function c() {
                var f = g.concat(b.call(arguments));
                e.apply(this instanceof c ? this: a, f)
            }
            var e = this,
            g = b.call(arguments, 1);
            if ("function" !== typeof e) throw new TypeError;
            c.prototype = function k(b) {
                b && (k.prototype = b);
                if (! (this instanceof k)) return new k
            } (e.prototype);
            return c
        }
    } ());
    a.AjaxRequest = function() {
        var b = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
        if (window.ActiveXObject) for (var a = 0; a < b.length; a++) try {
            return new window.ActiveXObject(b[a])
        } catch(c) {} else return window.XMLHttpRequest ? new window.XMLHttpRequest: !1
    };
    a.canUseNewCanvasBlendModes = function() {
        var b = document.createElement("canvas");
        b.width = 1;
        b.height = 1;
        b = b.getContext("2d");
        b.fillStyle = "#000";
        b.fillRect(0, 0, 1, 1);
        b.globalCompositeOperation = "multiply";
        b.fillStyle = "#fff";
        b.fillRect(0, 0, 1, 1);
        return 0 === b.getImageData(0, 0, 1, 1).data[0]
    };
    a.getNextPowerOfTwo = function(b) {
        if (0 < b && 0 === (b & b - 1)) return b;
        for (var a = 1; a < b;) a <<= 1;
        return a
    };
    a.EventTarget = function() {
        var b = {};
        this.addEventListener = this.on = function(a, c) {
            void 0 === b[a] && (b[a] = []); - 1 === b[a].indexOf(c) && b[a].unshift(c)
        };
        this.dispatchEvent = this.emit = function(a) {
            if (b[a.type] && b[a.type].length) for (var c = b[a.type].length - 1; 0 <= c; c--) b[a.type][c](a)
        };
        this.removeEventListener = this.off = function(a, c) {
            if (void 0 !== b[a]) {
                var e = b[a].indexOf(c); - 1 !== e && b[a].splice(e, 1)
            }
        };
        this.removeAllEventListeners = function(a) {
            if (a = b[a]) a.length = 0
        }
    };
    a.autoDetectRenderer = function(b, d, c, e, g) {
        b || (b = 800);
        d || (d = 600);
        var f;
        try {
            var k = document.createElement("canvas");
            f = !!window.WebGLRenderingContext && (k.getContext("webgl") || k.getContext("experimental-webgl"))
        } catch(l) {
            f = !1
        }
        return f ? new a.WebGLRenderer(b, d, c, e, g) : new a.CanvasRenderer(b, d, c, e)
    };
    a.autoDetectRecommendedRenderer = function(b, d, c, e, g) {
        b || (b = 800);
        d || (d = 600);
        var f;
        try {
            var k = document.createElement("canvas");
            f = !!window.WebGLRenderingContext && (k.getContext("webgl") || k.getContext("experimental-webgl"))
        } catch(l) {
            f = !1
        }
        k = /Android/i.test(navigator.userAgent);
        return f && !k ? new a.WebGLRenderer(b, d, c, e, g) : new a.CanvasRenderer(b, d, c, e)
    };
    a.PolyK = {};
    a.PolyK.Triangulate = function(b) {
        var d = !0,
        c = b.length >> 1;
        if (3 > c) return [];
        for (var e = [], g = [], f = 0; f < c; f++) g.push(f);
        for (var f = 0,
        k = c; 3 < k;) {
            var l = g[(f + 0) % k],
            h = g[(f + 1) % k],
            n = g[(f + 2) % k],
            q = b[2 * l],
            p = b[2 * l + 1],
            s = b[2 * h],
            u = b[2 * h + 1],
            z = b[2 * n],
            A = b[2 * n + 1],
            x = !1;
            if (a.PolyK._convex(q, p, s, u, z, A, d)) for (var x = !0,
            D = 0; D < k; D++) {
                var B = g[D];
                if (B !== l && B !== h && B !== n && a.PolyK._PointInTriangle(b[2 * B], b[2 * B + 1], q, p, s, u, z, A)) {
                    x = !1;
                    break
                }
            }
            if (x) e.push(l, h, n),
            g.splice((f + 1) % k, 1),
            k--,
            f = 0;
            else if (f++>3 * k) if (d) {
                e = [];
                g = [];
                for (f = 0; f < c; f++) g.push(f);
                f = 0;
                k = c;
                d = !1
            } else return window.console.log("PIXI Warning: shape too complex to fill"),
            []
        }
        e.push(g[0], g[1], g[2]);
        return e
    };
    a.PolyK._PointInTriangle = function(b, a, c, e, g, f, k, l) {
        k -= c;
        l -= e;
        g -= c;
        f -= e;
        b -= c;
        c = a - e;
        a = k * k + l * l;
        e = k * g + l * f;
        k = k * b + l * c;
        l = g * g + f * f;
        g = g * b + f * c;
        f = 1 / (a * l - e * e);
        l = (l * k - e * g) * f;
        k = (a * g - e * k) * f;
        return 0 <= l && 0 <= k && 1 > l + k
    };
    a.PolyK._convex = function(b, a, c, e, g, f, k) {
        return 0 <= (a - e) * (g - c) + (c - b) * (f - e) === k
    };
    a.initDefaultShaders = function() {};
    a.CompileVertexShader = function(b, d) {
        return a._CompileShader(b, d, b.VERTEX_SHADER)
    };
    a.CompileFragmentShader = function(b, d) {
        return a._CompileShader(b, d, b.FRAGMENT_SHADER)
    };
    a._CompileShader = function(b, a, c) {
        a = a.join("\n");
        c = b.createShader(c);
        b.shaderSource(c, a);
        b.compileShader(c);
        return b.getShaderParameter(c, b.COMPILE_STATUS) ? c: (window.console.log(b.getShaderInfoLog(c)), null)
    };
    a.compileProgram = function(b, d, c) {
        c = a.CompileFragmentShader(b, c);
        d = a.CompileVertexShader(b, d);
        var e = b.createProgram();
        b.attachShader(e, d);
        b.attachShader(e, c);
        b.linkProgram(e);
        b.getProgramParameter(e, b.LINK_STATUS) || window.console.log("Could not initialise shaders");
        return e
    };
    a.PixiShader = function(b) {
        this._UID = a._UID++;
        this.gl = b;
        this.program = null;
        this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"];
        this.textureCount = 0;
        this.attributes = [];
        this.init()
    };
    a.PixiShader.prototype.init = function() {
        var b = this.gl,
        d = a.compileProgram(b, this.vertexSrc || a.PixiShader.defaultVertexSrc, this.fragmentSrc);
        b.useProgram(d);
        this.uSampler = b.getUniformLocation(d, "uSampler");
        this.projectionVector = b.getUniformLocation(d, "projectionVector");
        this.offsetVector = b.getUniformLocation(d, "offsetVector");
        this.dimensions = b.getUniformLocation(d, "dimensions");
        this.aVertexPosition = b.getAttribLocation(d, "aVertexPosition");
        this.aTextureCoord = b.getAttribLocation(d, "aTextureCoord");
        this.colorAttribute = b.getAttribLocation(d, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
        this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
        for (var c in this.uniforms) this.uniforms[c].uniformLocation = b.getUniformLocation(d, c);
        this.initUniforms();
        this.program = d
    };
    a.PixiShader.prototype.initUniforms = function() {
        this.textureCount = 1;
        var b = this.gl,
        a, c;
        for (c in this.uniforms) {
            a = this.uniforms[c];
            var e = a.type;
            "sampler2D" === e ? (a._init = !1, null !== a.value && this.initSampler2D(a)) : "mat2" === e || "mat3" === e || "mat4" === e ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === e ? a.glFunc = b.uniformMatrix2fv: "mat3" === e ? a.glFunc = b.uniformMatrix3fv: "mat4" === e && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + e], a.glValueLength = "2f" === e || "2i" === e ? 2 : "3f" === e || "3i" === e ? 3 : "4f" === e || "4i" === e ? 4 : 1)
        }
    };
    a.PixiShader.prototype.initSampler2D = function(b) {
        if (b.value && b.value.baseTexture && b.value.baseTexture.hasLoaded) {
            var a = this.gl;
            a.activeTexture(a["TEXTURE" + this.textureCount]);
            a.bindTexture(a.TEXTURE_2D, b.value.baseTexture._glTextures[a.id]);
            if (b.textureData) {
                var c = b.textureData,
                e = c.magFilter ? c.magFilter: a.LINEAR,
                g = c.minFilter ? c.minFilter: a.LINEAR,
                f = c.wrapS ? c.wrapS: a.CLAMP_TO_EDGE,
                k = c.wrapT ? c.wrapT: a.CLAMP_TO_EDGE,
                l = c.luminance ? a.LUMINANCE: a.RGBA;
                c.repeat && (k = f = a.REPEAT);
                a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !!c.flipY);
                c.width ? a.texImage2D(a.TEXTURE_2D, 0, l, c.width ? c.width: 512, c.height ? c.height: 2, c.border ? c.border: 0, l, a.UNSIGNED_BYTE, null) : a.texImage2D(a.TEXTURE_2D, 0, l, a.RGBA, a.UNSIGNED_BYTE, b.value.baseTexture.source);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, g);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, f);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, k)
            }
            a.uniform1i(b.uniformLocation, this.textureCount);
            b._init = !0;
            this.textureCount++
        }
    };
    a.PixiShader.prototype.syncUniforms = function() {
        this.textureCount = 1;
        var b, d = this.gl,
        c;
        for (c in this.uniforms) b = this.uniforms[c],
        1 === b.glValueLength ? !0 === b.glMatrix ? b.glFunc.call(d, b.uniformLocation, b.transpose, b.value) : b.glFunc.call(d, b.uniformLocation, b.value) : 2 === b.glValueLength ? b.glFunc.call(d, b.uniformLocation, b.value.x, b.value.y) : 3 === b.glValueLength ? b.glFunc.call(d, b.uniformLocation, b.value.x, b.value.y, b.value.z) : 4 === b.glValueLength ? b.glFunc.call(d, b.uniformLocation, b.value.x, b.value.y, b.value.z, b.value.w) : "sampler2D" === b.type && (b._init ? (d.activeTexture(d["TEXTURE" + this.textureCount]), d.bindTexture(d.TEXTURE_2D, b.value.baseTexture._glTextures[d.id] || a.createWebGLTexture(b.value.baseTexture, d)), d.uniform1i(b.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(b))
    };
    a.PixiShader.prototype.destroy = function() {
        this.gl.deleteProgram(this.program);
        this.attributes = this.gl = this.uniforms = null
    };
    a.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;", "   vColor = vec4(color * aColor.x, aColor.x);", "}"];
    a.PixiFastShader = function(b) {
        this._UID = a._UID++;
        this.gl = b;
        this.program = null;
        this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"];
        this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"];
        this.textureCount = 0;
        this.init()
    };
    a.PixiFastShader.prototype.init = function() {
        var b = this.gl,
        d = a.compileProgram(b, this.vertexSrc, this.fragmentSrc);
        b.useProgram(d);
        this.uSampler = b.getUniformLocation(d, "uSampler");
        this.projectionVector = b.getUniformLocation(d, "projectionVector");
        this.offsetVector = b.getUniformLocation(d, "offsetVector");
        this.dimensions = b.getUniformLocation(d, "dimensions");
        this.uMatrix = b.getUniformLocation(d, "uMatrix");
        this.aVertexPosition = b.getAttribLocation(d, "aVertexPosition");
        this.aPositionCoord = b.getAttribLocation(d, "aPositionCoord");
        this.aScale = b.getAttribLocation(d, "aScale");
        this.aRotation = b.getAttribLocation(d, "aRotation");
        this.aTextureCoord = b.getAttribLocation(d, "aTextureCoord");
        this.colorAttribute = b.getAttribLocation(d, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
        this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute];
        this.program = d
    };
    a.PixiFastShader.prototype.destroy = function() {
        this.gl.deleteProgram(this.program);
        this.attributes = this.gl = this.uniforms = null
    };
    a.StripShader = function(b) {
        this._UID = a._UID++;
        this.gl = b;
        this.program = null;
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "}"];
        this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"];
        this.init()
    };
    a.StripShader.prototype.init = function() {
        var b = this.gl,
        d = a.compileProgram(b, this.vertexSrc, this.fragmentSrc);
        b.useProgram(d);
        this.uSampler = b.getUniformLocation(d, "uSampler");
        this.projectionVector = b.getUniformLocation(d, "projectionVector");
        this.offsetVector = b.getUniformLocation(d, "offsetVector");
        this.colorAttribute = b.getAttribLocation(d, "aColor");
        this.aVertexPosition = b.getAttribLocation(d, "aVertexPosition");
        this.aTextureCoord = b.getAttribLocation(d, "aTextureCoord");
        this.attributes = [this.aVertexPosition, this.aTextureCoord];
        this.translationMatrix = b.getUniformLocation(d, "translationMatrix");
        this.alpha = b.getUniformLocation(d, "alpha");
        this.program = d
    };
    a.PrimitiveShader = function(b) {
        this._UID = a._UID++;
        this.gl = b;
        this.program = null;
        this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"];
        this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"];
        this.init()
    };
    a.PrimitiveShader.prototype.init = function() {
        var b = this.gl,
        d = a.compileProgram(b, this.vertexSrc, this.fragmentSrc);
        b.useProgram(d);
        this.projectionVector = b.getUniformLocation(d, "projectionVector");
        this.offsetVector = b.getUniformLocation(d, "offsetVector");
        this.tintColor = b.getUniformLocation(d, "tint");
        this.aVertexPosition = b.getAttribLocation(d, "aVertexPosition");
        this.colorAttribute = b.getAttribLocation(d, "aColor");
        this.attributes = [this.aVertexPosition, this.colorAttribute];
        this.translationMatrix = b.getUniformLocation(d, "translationMatrix");
        this.alpha = b.getUniformLocation(d, "alpha");
        this.program = d
    };
    a.PrimitiveShader.prototype.destroy = function() {
        this.gl.deleteProgram(this.program);
        this.attribute = this.gl = this.uniforms = null
    };
    a.ComplexPrimitiveShader = function(b) {
        this._UID = a._UID++;
        this.gl = b;
        this.program = null;
        this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"];
        this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"];
        this.init()
    };
    a.ComplexPrimitiveShader.prototype.init = function() {
        var b = this.gl,
        d = a.compileProgram(b, this.vertexSrc, this.fragmentSrc);
        b.useProgram(d);
        this.projectionVector = b.getUniformLocation(d, "projectionVector");
        this.offsetVector = b.getUniformLocation(d, "offsetVector");
        this.tintColor = b.getUniformLocation(d, "tint");
        this.color = b.getUniformLocation(d, "color");
        this.aVertexPosition = b.getAttribLocation(d, "aVertexPosition");
        this.attributes = [this.aVertexPosition, this.colorAttribute];
        this.translationMatrix = b.getUniformLocation(d, "translationMatrix");
        this.alpha = b.getUniformLocation(d, "alpha");
        this.program = d
    };
    a.ComplexPrimitiveShader.prototype.destroy = function() {
        this.gl.deleteProgram(this.program);
        this.attribute = this.gl = this.uniforms = null
    };
    a.WebGLGraphics = function() {};
    a.WebGLGraphics.renderGraphics = function(b, d) {
        var c = d.gl,
        e = d.projection,
        g = d.offset,
        f = d.shaderManager.primitiveShader,
        k;
        b.dirty && a.WebGLGraphics.updateGraphics(b, c);
        for (var l = b._webGL[c.id], h = 0; h < l.data.length; h++) 1 === l.data[h].mode ? (k = l.data[h], d.stencilManager.pushStencil(b, k, d), c.drawElements(c.TRIANGLE_FAN, 4, c.UNSIGNED_SHORT, 2 * (k.indices.length - 4)), d.stencilManager.popStencil(b, k, d), this.last = k.mode) : (k = l.data[h], d.shaderManager.setShader(f), f = d.shaderManager.primitiveShader, c.uniformMatrix3fv(f.translationMatrix, !1, b.worldTransform.toArray(!0)), c.uniform2f(f.projectionVector, e.x, -e.y), c.uniform2f(f.offsetVector, -g.x, -g.y), c.uniform3fv(f.tintColor, a.hex2rgb(b.tint)), c.uniform1f(f.alpha, b.worldAlpha), c.bindBuffer(c.ARRAY_BUFFER, k.buffer), c.vertexAttribPointer(f.aVertexPosition, 2, c.FLOAT, !1, 24, 0), c.vertexAttribPointer(f.colorAttribute, 4, c.FLOAT, !1, 24, 8), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, k.indexBuffer), c.drawElements(c.TRIANGLE_STRIP, k.indices.length, c.UNSIGNED_SHORT, 0))
    };
    a.WebGLGraphics.updateGraphics = function(b, d) {
        var c = b._webGL[d.id];
        c || (c = b._webGL[d.id] = {
            lastIndex: 0,
            data: [],
            gl: d
        });
        b.dirty = !1;
        var e;
        if (b.clearDirty) {
            b.clearDirty = !1;
            for (e = 0; e < c.data.length; e++) {
                var g = c.data[e];
                g.reset();
                a.WebGLGraphics.graphicsDataPool.push(g)
            }
            c.data = [];
            c.lastIndex = 0
        }
        for (e = c.lastIndex; e < b.graphicsData.length; e++) {
            var f = b.graphicsData[e];
            f.type === a.Graphics.POLY ? (f.fill && 6 < f.points.length && (10 < f.points.length ? (g = a.WebGLGraphics.switchMode(c, 1), a.WebGLGraphics.buildComplexPoly(f, g)) : (g = a.WebGLGraphics.switchMode(c, 0), a.WebGLGraphics.buildPoly(f, g))), 0 < f.lineWidth && (g = a.WebGLGraphics.switchMode(c, 0), a.WebGLGraphics.buildLine(f, g))) : (g = a.WebGLGraphics.switchMode(c, 0), f.type === a.Graphics.RECT ? a.WebGLGraphics.buildRectangle(f, g) : f.type === a.Graphics.CIRC || f.type === a.Graphics.ELIP ? a.WebGLGraphics.buildCircle(f, g) : f.type === a.Graphics.RREC && a.WebGLGraphics.buildRoundedRectangle(f, c));
            c.lastIndex++
        }
        for (e = 0; e < c.data.length; e++) g = c.data[e],
        g.dirty && g.upload()
    };
    a.WebGLGraphics.switchMode = function(b, d) {
        var c;
        if (b.data.length) {
            if (c = b.data[b.data.length - 1], c.mode !== d || 1 === d) c = a.WebGLGraphics.graphicsDataPool.pop() || new a.WebGLGraphicsData(b.gl),
            c.mode = d,
            b.data.push(c)
        } else c = a.WebGLGraphics.graphicsDataPool.pop() || new a.WebGLGraphicsData(b.gl),
        c.mode = d,
        b.data.push(c);
        c.dirty = !0;
        return c
    };
    a.WebGLGraphics.buildRectangle = function(b, d) {
        var c = b.points,
        e = c[0],
        g = c[1],
        f = c[2],
        c = c[3];
        if (b.fill) {
            var k = a.hex2rgb(b.fillColor),
            l = b.fillAlpha,
            h = k[0] * l,
            n = k[1] * l,
            k = k[2] * l,
            q = d.points,
            p = d.indices,
            s = q.length / 6;
            q.push(e, g);
            q.push(h, n, k, l);
            q.push(e + f, g);
            q.push(h, n, k, l);
            q.push(e, g + c);
            q.push(h, n, k, l);
            q.push(e + f, g + c);
            q.push(h, n, k, l);
            p.push(s, s, s + 1, s + 2, s + 3, s + 3)
        }
        b.lineWidth && (l = b.points, b.points = [e, g, e + f, g, e + f, g + c, e, g + c, e, g], a.WebGLGraphics.buildLine(b, d), b.points = l)
    };
    a.WebGLGraphics.buildRoundedRectangle = function(b, d) {
        function c(b, a, d, c, e, g) {
            for (var f, l, k, r, h = [], n = 0, t = 0; 20 >= t; t++) n = t / 20,
            f = b + (d - b) * n,
            l = a + (c - a) * n,
            k = d + (e - d) * n,
            r = c + (g - c) * n,
            f += (k - f) * n,
            l += (r - l) * n,
            h.push(f, l);
            return h
        }
        var e = b.points,
        g = e[0],
        f = e[1],
        k = e[2],
        l = e[3],
        h = e[4],
        e = [];
        e.push(g, f + h);
        e = e.concat(c(g, f + l - h, g, f + l, g + h, f + l));
        e = e.concat(c(g + k - h, f + l, g + k, f + l, g + k, f + l - h));
        e = e.concat(c(g + k, f + h, g + k, f, g + k - h, f));
        e = e.concat(c(g + h, f, g, f, g, f + h));
        if (b.fill) {
            for (var l = a.hex2rgb(b.fillColor), g = b.fillAlpha, f = l[0] * g, k = l[1] * g, l = l[2] * g, h = d.points, n = d.indices, q = h.length / 6, p = a.PolyK.Triangulate(e), s = 0, s = 0; s < p.length; s += 3) n.push(p[s] + q),
            n.push(p[s] + q),
            n.push(p[s + 1] + q),
            n.push(p[s + 2] + q),
            n.push(p[s + 2] + q);
            for (s = 0; s < e.length; s++) h.push(e[s], e[++s], f, k, l, g)
        }
        b.lineWidth && (g = b.points, b.points = e, a.WebGLGraphics.buildLine(b, d), b.points = g)
    };
    a.WebGLGraphics.buildCircle = function(b, d) {
        var c = b.points,
        e = c[0],
        g = c[1],
        f = c[2],
        c = c[3],
        k = 2 * Math.PI / 40,
        l = 0;
        if (b.fill) {
            var l = a.hex2rgb(b.fillColor),
            h = b.fillAlpha,
            n = l[0] * h,
            q = l[1] * h,
            p = l[2] * h,
            s = d.points,
            u = d.indices,
            z = s.length / 6;
            u.push(z);
            for (l = 0; 41 > l; l++) s.push(e, g, n, q, p, h),
            s.push(e + Math.sin(k * l) * f, g + Math.cos(k * l) * c, n, q, p, h),
            u.push(z++, z++);
            u.push(z - 1)
        }
        if (b.lineWidth) {
            h = b.points;
            b.points = [];
            for (l = 0; 41 > l; l++) b.points.push(e + Math.sin(k * l) * f, g + Math.cos(k * l) * c);
            a.WebGLGraphics.buildLine(b, d);
            b.points = h
        }
    };
    a.WebGLGraphics.buildLine = function(b, d) {
        var c = 0,
        e = b.points;
        if (0 !== e.length) {
            if (b.lineWidth % 2) for (c = 0; c < e.length; c++) e[c] += 0.5;
            var g = new a.Point(e[0], e[1]),
            f = new a.Point(e[e.length - 2], e[e.length - 1]);
            if (g.x === f.x && g.y === f.y) {
                e = e.slice();
                e.pop();
                e.pop();
                var f = new a.Point(e[e.length - 2], e[e.length - 1]),
                k = f.x + 0.5 * (g.x - f.x),
                g = f.y + 0.5 * (g.y - f.y);
                e.unshift(k, g);
                e.push(k, g)
            }
            var k = d.points,
            g = d.indices,
            f = e.length / 2,
            l = e.length,
            h = k.length / 6,
            n = b.lineWidth / 2,
            c = a.hex2rgb(b.lineColor),
            q = b.lineAlpha,
            p = c[0] * q,
            s = c[1] * q,
            u = c[2] * q,
            z,
            A,
            x,
            D,
            B,
            F,
            L,
            O,
            C,
            G,
            w,
            J,
            V;
            x = e[0];
            D = e[1];
            B = e[2];
            F = e[3];
            C = -(D - F);
            G = x - B;
            A = Math.sqrt(C * C + G * G);
            C = C / A * n;
            G = G / A * n;
            k.push(x - C, D - G, p, s, u, q);
            k.push(x + C, D + G, p, s, u, q);
            for (c = 1; c < f - 1; c++) x = e[2 * (c - 1)],
            D = e[2 * (c - 1) + 1],
            B = e[2 * c],
            F = e[2 * c + 1],
            L = e[2 * (c + 1)],
            O = e[2 * (c + 1) + 1],
            C = -(D - F),
            G = x - B,
            A = Math.sqrt(C * C + G * G),
            C /= A,
            G /= A,
            C *= n,
            G *= n,
            w = -(F - O),
            J = B - L,
            A = Math.sqrt(w * w + J * J),
            w /= A,
            J /= A,
            w *= n,
            J *= n,
            A = -G + D - ( - G + F),
            z = -C + B - ( - C + x),
            x = ( - C + x) * ( - G + F) - ( - C + B) * ( - G + D),
            D = -J + O - ( - J + F),
            V = -w + B - ( - w + L),
            L = ( - w + L) * ( - J + F) - ( - w + B) * ( - J + O),
            O = A * V - D * z,
            0.1 > Math.abs(O) ? (k.push(B - C, F - G, p, s, u, q), k.push(B + C, F + G, p, s, u, q)) : (z = (z * L - V * x) / O, A = (D * x - A * L) / O, L = (z - B) * (z - B) + (A - F) + (A - F), 19600 < L ? (C -= w, G -= J, A = Math.sqrt(C * C + G * G), C /= A, G /= A, C *= n, G *= n, k.push(B - C, F - G), k.push(p, s, u, q), k.push(B + C, F + G), k.push(p, s, u, q), k.push(B - C, F - G), k.push(p, s, u, q), l++) : (k.push(z, A), k.push(p, s, u, q), k.push(B - (z - B), F - (A - F)), k.push(p, s, u, q)));
            x = e[2 * (f - 2)];
            D = e[2 * (f - 2) + 1];
            B = e[2 * (f - 1)];
            F = e[2 * (f - 1) + 1];
            C = -(D - F);
            G = x - B;
            A = Math.sqrt(C * C + G * G);
            C /= A;
            G /= A;
            C *= n;
            G *= n;
            k.push(B - C, F - G);
            k.push(p, s, u, q);
            k.push(B + C, F + G);
            k.push(p, s, u, q);
            g.push(h);
            for (c = 0; c < l; c++) g.push(h++);
            g.push(h - 1)
        }
    };
    a.WebGLGraphics.buildComplexPoly = function(b, d) {
        var c = b.points.slice();
        if (! (6 > c.length)) {
            var e = d.indices;
            d.points = c;
            d.alpha = b.fillAlpha;
            d.color = a.hex2rgb(b.fillColor);
            for (var g = Infinity,
            f = -Infinity,
            k = Infinity,
            l = -Infinity,
            h, n, q = 0; q < c.length; q += 2) h = c[q],
            n = c[q + 1],
            g = h < g ? h: g,
            f = h > f ? h: f,
            k = n < k ? n: k,
            l = n > l ? n: l;
            c.push(g, k, f, k, f, l, g, l);
            c = c.length / 2;
            for (q = 0; q < c; q++) e.push(q)
        }
    };
    a.WebGLGraphics.buildPoly = function(b, d) {
        var c = b.points;
        if (! (6 > c.length)) {
            for (var e = d.points,
            g = d.indices,
            f = c.length / 2,
            k = a.hex2rgb(b.fillColor), l = b.fillAlpha, h = k[0] * l, n = k[1] * l, k = k[2] * l, q = a.PolyK.Triangulate(c), p = e.length / 6, s = 0, s = 0; s < q.length; s += 3) g.push(q[s] + p),
            g.push(q[s] + p),
            g.push(q[s + 1] + p),
            g.push(q[s + 2] + p),
            g.push(q[s + 2] + p);
            for (s = 0; s < f; s++) e.push(c[2 * s], c[2 * s + 1], h, n, k, l)
        }
    };
    a.WebGLGraphics.graphicsDataPool = [];
    a.WebGLGraphicsData = function(b) {
        this.gl = b;
        this.color = [0, 0, 0];
        this.points = [];
        this.indices = [];
        this.lastIndex = 0;
        this.buffer = b.createBuffer();
        this.indexBuffer = b.createBuffer();
        this.alpha = this.mode = 1;
        this.dirty = !0
    };
    a.WebGLGraphicsData.prototype.reset = function() {
        this.points = [];
        this.indices = [];
        this.lastIndex = 0
    };
    a.WebGLGraphicsData.prototype.upload = function() {
        var b = this.gl;
        this.glPoints = new Float32Array(this.points);
        b.bindBuffer(b.ARRAY_BUFFER, this.buffer);
        b.bufferData(b.ARRAY_BUFFER, this.glPoints, b.STATIC_DRAW);
        this.glIndicies = new Uint16Array(this.indices);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.glIndicies, b.STATIC_DRAW);
        this.dirty = !1
    };
    a.glContexts = [];
    a.WebGLRenderer = function(b, d, c, e, g, f) {
        a.defaultRenderer || (a.sayHello("webGL"), a.defaultRenderer = this);
        this.type = a.WEBGL_RENDERER;
        this.transparent = !!e;
        this.preserveDrawingBuffer = f;
        this.width = b || 800;
        this.height = d || 600;
        this.view = c || document.createElement("canvas");
        this.view.width = this.width;
        this.view.height = this.height;
        this.contextLost = this.handleContextLost.bind(this);
        this.contextRestoredLost = this.handleContextRestored.bind(this);
        this.view.addEventListener("webglcontextlost", this.contextLost, !1);
        this.view.addEventListener("webglcontextrestored", this.contextRestoredLost, !1);
        this.options = {
            alpha: this.transparent,
            antialias: !!g,
            premultipliedAlpha: !!e,
            stencil: !0,
            preserveDrawingBuffer: f
        };
        var k = null; ["experimental-webgl", "webgl"].forEach(function(b) {
            try {
                k = k || this.view.getContext(b, this.options)
            } catch(a) {}
        },
        this);
        if (!k) throw Error("This browser does not support webGL. Try using the canvas renderer" + this);
        this.gl = k;
        this.glContextId = k.id = a.WebGLRenderer.glContextId++;
        a.glContexts[this.glContextId] = k;
        a.blendModesWebGL || (a.blendModesWebGL = [], a.blendModesWebGL[a.blendModes.NORMAL] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.ADD] = [k.SRC_ALPHA, k.DST_ALPHA], a.blendModesWebGL[a.blendModes.MULTIPLY] = [k.DST_COLOR, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.SCREEN] = [k.SRC_ALPHA, k.ONE], a.blendModesWebGL[a.blendModes.OVERLAY] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.DARKEN] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.LIGHTEN] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.COLOR_DODGE] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.COLOR_BURN] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.HARD_LIGHT] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.SOFT_LIGHT] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.DIFFERENCE] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.EXCLUSION] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.HUE] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.SATURATION] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.COLOR] = [k.ONE, k.ONE_MINUS_SRC_ALPHA], a.blendModesWebGL[a.blendModes.LUMINOSITY] = [k.ONE, k.ONE_MINUS_SRC_ALPHA]);
        this.projection = new a.Point;
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
        this.offset = new a.Point(0, 0);
        this.resize(this.width, this.height);
        this.contextLost = !1;
        this.shaderManager = new a.WebGLShaderManager(k);
        this.spriteBatch = new a.WebGLSpriteBatch(k);
        this.maskManager = new a.WebGLMaskManager(k);
        this.filterManager = new a.WebGLFilterManager(k, this.transparent);
        this.stencilManager = new a.WebGLStencilManager(k);
        this.blendModeManager = new a.WebGLBlendModeManager(k);
        this.renderSession = {};
        this.renderSession.gl = this.gl;
        this.renderSession.drawCount = 0;
        this.renderSession.shaderManager = this.shaderManager;
        this.renderSession.maskManager = this.maskManager;
        this.renderSession.filterManager = this.filterManager;
        this.renderSession.blendModeManager = this.blendModeManager;
        this.renderSession.spriteBatch = this.spriteBatch;
        this.renderSession.stencilManager = this.stencilManager;
        this.renderSession.renderer = this;
        k.useProgram(this.shaderManager.defaultShader.program);
        k.disable(k.DEPTH_TEST);
        k.disable(k.CULL_FACE);
        k.enable(k.BLEND);
        k.colorMask(!0, !0, !0, this.transparent)
    };
    a.WebGLRenderer.prototype.constructor = a.WebGLRenderer;
    a.WebGLRenderer.prototype.render = function(b) {
        if (!this.contextLost) {
            this.__stage !== b && (b.interactive && b.interactionManager.removeEvents(), this.__stage = b);
            a.WebGLRenderer.updateTextures();
            b.updateTransform();
            b._interactive && !b._interactiveEventsAdded && (b._interactiveEventsAdded = !0, b.interactionManager.setTarget(this));
            var d = this.gl;
            d.viewport(0, 0, this.width, this.height);
            d.bindFramebuffer(d.FRAMEBUFFER, null);
            this.transparent ? d.clearColor(0, 0, 0, 0) : d.clearColor(b.backgroundColorSplit[0], b.backgroundColorSplit[1], b.backgroundColorSplit[2], 1);
            d.clear(d.COLOR_BUFFER_BIT);
            this.renderDisplayObject(b, this.projection);
            b.interactive ? b._interactiveEventsAdded || (b._interactiveEventsAdded = !0, b.interactionManager.setTarget(this)) : b._interactiveEventsAdded && (b._interactiveEventsAdded = !1, b.interactionManager.setTarget(this))
        }
    };
    a.WebGLRenderer.prototype.renderDisplayObject = function(b, d, c) {
        this.renderSession.blendModeManager.setBlendMode(a.blendModes.NORMAL);
        this.renderSession.drawCount = 0;
        this.renderSession.currentBlendMode = 9999;
        this.renderSession.projection = d;
        this.renderSession.offset = this.offset;
        this.spriteBatch.begin(this.renderSession);
        this.filterManager.begin(this.renderSession, c);
        b._renderWebGL(this.renderSession);
        this.spriteBatch.end()
    };
    a.WebGLRenderer.updateTextures = function() {
        for (var b = 0,
        b = 0; b < a.Texture.frameUpdates.length; b++) a.WebGLRenderer.updateTextureFrame(a.Texture.frameUpdates[b]);
        for (b = 0; b < a.texturesToDestroy.length; b++) a.WebGLRenderer.destroyTexture(a.texturesToDestroy[b]);
        a.texturesToUpdate.length = 0;
        a.texturesToDestroy.length = 0;
        a.Texture.frameUpdates.length = 0
    };
    a.WebGLRenderer.destroyTexture = function(b) {
        for (var d = b._glTextures.length - 1; 0 <= d; d--) {
            var c = b._glTextures[d],
            e = a.glContexts[d];
            e && c && e.deleteTexture(c)
        }
        b._glTextures.length = 0
    };
    a.WebGLRenderer.updateTextureFrame = function(b) {
        b._updateWebGLuvs()
    };
    a.WebGLRenderer.prototype.resize = function(b, a) {
        this.width = b;
        this.height = a;
        this.view.width = b;
        this.view.height = a;
        this.gl.viewport(0, 0, this.width, this.height);
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2
    };
    a.createWebGLTexture = function(b, d) {
        b.hasLoaded && (b._glTextures[d.id] = d.createTexture(), d.bindTexture(d.TEXTURE_2D, b._glTextures[d.id]), d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultipliedAlpha), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, b.source), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, b.scaleMode === a.scaleModes.LINEAR ? d.LINEAR: d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, b.scaleMode === a.scaleModes.LINEAR ? d.LINEAR: d.NEAREST), b._powerOf2 ? (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.REPEAT), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.REPEAT)) : (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE)), d.bindTexture(d.TEXTURE_2D, null), b._dirty[d.id] = !1);
        return b._glTextures[d.id]
    };
    a.updateWebGLTexture = function(b, d) {
        b._glTextures[d.id] && (d.bindTexture(d.TEXTURE_2D, b._glTextures[d.id]), d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultipliedAlpha), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, b.source), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, b.scaleMode === a.scaleModes.LINEAR ? d.LINEAR: d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, b.scaleMode === a.scaleModes.LINEAR ? d.LINEAR: d.NEAREST), b._powerOf2 ? (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.REPEAT), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.REPEAT)) : (d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE)), b._dirty[d.id] = !1)
    };
    a.WebGLRenderer.prototype.handleContextLost = function(b) {
        b.preventDefault();
        this.contextLost = !0
    };
    a.WebGLRenderer.prototype.handleContextRestored = function() {
        try {
            this.gl = this.view.getContext("experimental-webgl", this.options)
        } catch(b) {
            try {
                this.gl = this.view.getContext("webgl", this.options)
            } catch(d) {
                throw Error(" This browser does not support webGL. Try using the canvas renderer" + this);
            }
        }
        var c = this.gl;
        c.id = a.WebGLRenderer.glContextId++;
        this.shaderManager.setContext(c);
        this.spriteBatch.setContext(c);
        this.primitiveBatch.setContext(c);
        this.maskManager.setContext(c);
        this.filterManager.setContext(c);
        this.renderSession.gl = this.gl;
        c.disable(c.DEPTH_TEST);
        c.disable(c.CULL_FACE);
        c.enable(c.BLEND);
        c.colorMask(!0, !0, !0, this.transparent);
        this.gl.viewport(0, 0, this.width, this.height);
        for (var e in a.TextureCache) a.TextureCache[e].baseTexture._glTextures = [];
        this.contextLost = !1
    };
    a.WebGLRenderer.prototype.destroy = function() {
        this.view.removeEventListener("webglcontextlost", this.contextLost);
        this.view.removeEventListener("webglcontextrestored", this.contextRestoredLost);
        this.offset = this.projection = a.glContexts[this.glContextId] = null;
        this.shaderManager.destroy();
        this.spriteBatch.destroy();
        this.primitiveBatch.destroy();
        this.maskManager.destroy();
        this.filterManager.destroy();
        this.renderSession = this.gl = this.filterManager = this.maskManager = this.spriteBatch = this.shaderManager = null
    };
    a.WebGLRenderer.glContextId = 0;
    a.WebGLBlendModeManager = function(b) {
        this.gl = b;
        this.currentBlendMode = 99999
    };
    a.WebGLBlendModeManager.prototype.setBlendMode = function(b) {
        if (this.currentBlendMode === b) return ! 1;
        this.currentBlendMode = b;
        b = a.blendModesWebGL[this.currentBlendMode];
        this.gl.blendFunc(b[0], b[1]);
        return ! 0
    };
    a.WebGLBlendModeManager.prototype.destroy = function() {
        this.gl = null
    };
    a.WebGLMaskManager = function(b) {
        this.maskStack = [];
        this.maskPosition = 0;
        this.setContext(b);
        this.reverse = !1;
        this.count = 0
    };
    a.WebGLMaskManager.prototype.setContext = function(b) {
        this.gl = b
    };
    a.WebGLMaskManager.prototype.pushMask = function(b, d) {
        var c = d.gl;
        b.dirty && a.WebGLGraphics.updateGraphics(b, c);
        b._webGL[c.id].data.length && d.stencilManager.pushStencil(b, b._webGL[c.id].data[0], d)
    };
    a.WebGLMaskManager.prototype.popMask = function(b, a) {
        a.stencilManager.popStencil(b, b._webGL[this.gl.id].data[0], a)
    };
    a.WebGLMaskManager.prototype.destroy = function() {
        this.gl = this.maskStack = null
    };
    a.WebGLStencilManager = function(b) {
        this.stencilStack = [];
        this.setContext(b);
        this.reverse = !0;
        this.count = 0
    };
    a.WebGLStencilManager.prototype.setContext = function(b) {
        this.gl = b
    };
    a.WebGLStencilManager.prototype.pushStencil = function(b, a, c) {
        var e = this.gl;
        this.bindGraphics(b, a, c);
        0 === this.stencilStack.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0);
        this.stencilStack.push(a);
        b = this.count;
        e.colorMask(!1, !1, !1, !1);
        e.stencilFunc(e.ALWAYS, 0, 255);
        e.stencilOp(e.KEEP, e.KEEP, e.INVERT);
        1 === a.mode ? (e.drawElements(e.TRIANGLE_FAN, a.indices.length - 4, e.UNSIGNED_SHORT, 0), this.reverse ? (e.stencilFunc(e.EQUAL, 255 - b, 255), e.stencilOp(e.KEEP, e.KEEP, e.DECR)) : (e.stencilFunc(e.EQUAL, b, 255), e.stencilOp(e.KEEP, e.KEEP, e.INCR)), e.drawElements(e.TRIANGLE_FAN, 4, e.UNSIGNED_SHORT, 2 * (a.indices.length - 4)), this.reverse ? e.stencilFunc(e.EQUAL, 255 - (b + 1), 255) : e.stencilFunc(e.EQUAL, b + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (e.stencilFunc(e.EQUAL, b, 255), e.stencilOp(e.KEEP, e.KEEP, e.INCR)) : (e.stencilFunc(e.EQUAL, 255 - b, 255), e.stencilOp(e.KEEP, e.KEEP, e.DECR)), e.drawElements(e.TRIANGLE_STRIP, a.indices.length, e.UNSIGNED_SHORT, 0), this.reverse ? e.stencilFunc(e.EQUAL, b + 1, 255) : e.stencilFunc(e.EQUAL, 255 - (b + 1), 255));
        e.colorMask(!0, !0, !0, !0);
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
        this.count++
    };
    a.WebGLStencilManager.prototype.bindGraphics = function(b, d, c) {
        this._currentGraphics = b;
        var e = this.gl,
        g = c.projection,
        f = c.offset,
        k;
        1 === d.mode ? (k = c.shaderManager.complexPrimativeShader, c.shaderManager.setShader(k), e.uniformMatrix3fv(k.translationMatrix, !1, b.worldTransform.toArray(!0)), e.uniform2f(k.projectionVector, g.x, -g.y), e.uniform2f(k.offsetVector, -f.x, -f.y), e.uniform3fv(k.tintColor, a.hex2rgb(b.tint)), e.uniform3fv(k.color, d.color), e.uniform1f(k.alpha, b.worldAlpha * d.alpha), e.bindBuffer(e.ARRAY_BUFFER, d.buffer), e.vertexAttribPointer(k.aVertexPosition, 2, e.FLOAT, !1, 8, 0)) : (k = c.shaderManager.primitiveShader, c.shaderManager.setShader(k), e.uniformMatrix3fv(k.translationMatrix, !1, b.worldTransform.toArray(!0)), e.uniform2f(k.projectionVector, g.x, -g.y), e.uniform2f(k.offsetVector, -f.x, -f.y), e.uniform3fv(k.tintColor, a.hex2rgb(b.tint)), e.uniform1f(k.alpha, b.worldAlpha), e.bindBuffer(e.ARRAY_BUFFER, d.buffer), e.vertexAttribPointer(k.aVertexPosition, 2, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(k.colorAttribute, 4, e.FLOAT, !1, 24, 8));
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, d.indexBuffer)
    };
    a.WebGLStencilManager.prototype.popStencil = function(b, a, c) {
        var e = this.gl;
        this.stencilStack.pop();
        this.count--;
        if (0 === this.stencilStack.length) e.disable(e.STENCIL_TEST);
        else {
            var g = this.count;
            this.bindGraphics(b, a, c);
            e.colorMask(!1, !1, !1, !1);
            1 === a.mode ? ((this.reverse = !this.reverse) ? (e.stencilFunc(e.EQUAL, 255 - (g + 1), 255), e.stencilOp(e.KEEP, e.KEEP, e.INCR)) : (e.stencilFunc(e.EQUAL, g + 1, 255), e.stencilOp(e.KEEP, e.KEEP, e.DECR)), e.drawElements(e.TRIANGLE_FAN, 4, e.UNSIGNED_SHORT, 2 * (a.indices.length - 4)), e.stencilFunc(e.ALWAYS, 0, 255), e.stencilOp(e.KEEP, e.KEEP, e.INVERT), e.drawElements(e.TRIANGLE_FAN, a.indices.length - 4, e.UNSIGNED_SHORT, 0)) : (this.reverse ? (e.stencilFunc(e.EQUAL, g + 1, 255), e.stencilOp(e.KEEP, e.KEEP, e.DECR)) : (e.stencilFunc(e.EQUAL, 255 - (g + 1), 255), e.stencilOp(e.KEEP, e.KEEP, e.INCR)), e.drawElements(e.TRIANGLE_STRIP, a.indices.length, e.UNSIGNED_SHORT, 0));
            this.reverse ? e.stencilFunc(e.EQUAL, g, 255) : e.stencilFunc(e.EQUAL, 255 - g, 255);
            e.colorMask(!0, !0, !0, !0);
            e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
        }
    };
    a.WebGLStencilManager.prototype.destroy = function() {
        this.gl = this.maskStack = null
    };
    a.WebGLShaderManager = function(b) {
        this.maxAttibs = 10;
        this.attribState = [];
        this.tempAttribState = [];
        this.shaderMap = [];
        for (var a = 0; a < this.maxAttibs; a++) this.attribState[a] = !1;
        this.setContext(b)
    };
    a.WebGLShaderManager.prototype.setContext = function(b) {
        this.gl = b;
        this.primitiveShader = new a.PrimitiveShader(b);
        this.complexPrimativeShader = new a.ComplexPrimitiveShader(b);
        this.defaultShader = new a.PixiShader(b);
        this.fastShader = new a.PixiFastShader(b);
        this.stripShader = new a.StripShader(b);
        this.setShader(this.defaultShader)
    };
    a.WebGLShaderManager.prototype.setAttribs = function(b) {
        var a;
        for (a = 0; a < this.tempAttribState.length; a++) this.tempAttribState[a] = !1;
        for (a = 0; a < b.length; a++) this.tempAttribState[b[a]] = !0;
        b = this.gl;
        for (a = 0; a < this.attribState.length; a++) this.attribState[a] !== this.tempAttribState[a] && (this.attribState[a] = this.tempAttribState[a], this.tempAttribState[a] ? b.enableVertexAttribArray(a) : b.disableVertexAttribArray(a))
    };
    a.WebGLShaderManager.prototype.setShader = function(b) {
        if (this._currentId === b._UID) return ! 1;
        this._currentId = b._UID;
        this.currentShader = b;
        this.gl.useProgram(b.program);
        this.setAttribs(b.attributes);
        return ! 0
    };
    a.WebGLShaderManager.prototype.destroy = function() {
        this.tempAttribState = this.attribState = null;
        this.primitiveShader.destroy();
        this.defaultShader.destroy();
        this.fastShader.destroy();
        this.stripShader.destroy();
        this.gl = null
    };
    a.WebGLSpriteBatch = function(b) {
        this.vertSize = 6;
        this.size = 2E3;
        var a = 6 * this.size;
        this.vertices = new Float32Array(4 * this.size * this.vertSize);
        this.indices = new Uint16Array(a);
        for (var c = this.lastIndexCount = 0,
        e = 0; c < a; c += 6, e += 4) this.indices[c + 0] = e + 0,
        this.indices[c + 1] = e + 1,
        this.indices[c + 2] = e + 2,
        this.indices[c + 3] = e + 0,
        this.indices[c + 4] = e + 2,
        this.indices[c + 5] = e + 3;
        this.drawing = !1;
        this.currentBatchSize = 0;
        this.currentBaseTexture = null;
        this.setContext(b);
        this.dirty = !0
    };
    a.WebGLSpriteBatch.prototype.setContext = function(b) {
        this.gl = b;
        this.vertexBuffer = b.createBuffer();
        this.indexBuffer = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW);
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.vertices, b.DYNAMIC_DRAW);
        this.currentBlendMode = 99999
    };
    a.WebGLSpriteBatch.prototype.begin = function(b) {
        this.renderSession = b;
        this.shader = this.renderSession.shaderManager.defaultShader;
        this.start()
    };
    a.WebGLSpriteBatch.prototype.end = function() {
        this.flush()
    };
    a.WebGLSpriteBatch.prototype.render = function(b) {
        var a = b.texture,
        c = this.renderSession.blendModeManager.currentBlendMode !== b.blendMode;
        if (a.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size || c) this.flush(),
        this.currentBaseTexture = a.baseTexture,
        this.renderSession.blendModeManager.setBlendMode(b.blendMode);
        if (c = a._uvs) {
            var e = b.worldAlpha,
            g = b.tint,
            f = this.vertices,
            k = b.anchor.x,
            l = b.anchor.y,
            h, n;
            a.trim ? (n = a.trim, k = n.x - k * n.width, h = k + a.crop.width, l = n.y - l * n.height, n = l + a.crop.height) : (h = a.frame.width * (1 - k), k = a.frame.width * -k, n = a.frame.height * (1 - l), l = a.frame.height * -l);
            var a = 4 * this.currentBatchSize * this.vertSize,
            q = b.worldTransform;
            b = q.a;
            var p = q.c,
            s = q.b,
            u = q.d,
            z = q.tx,
            q = q.ty;
            f[a++] = b * k + s * l + z;
            f[a++] = u * l + p * k + q;
            f[a++] = c.x0;
            f[a++] = c.y0;
            f[a++] = e;
            f[a++] = g;
            f[a++] = b * h + s * l + z;
            f[a++] = u * l + p * h + q;
            f[a++] = c.x1;
            f[a++] = c.y1;
            f[a++] = e;
            f[a++] = g;
            f[a++] = b * h + s * n + z;
            f[a++] = u * n + p * h + q;
            f[a++] = c.x2;
            f[a++] = c.y2;
            f[a++] = e;
            f[a++] = g;
            f[a++] = b * k + s * n + z;
            f[a++] = u * n + p * k + q;
            f[a++] = c.x3;
            f[a++] = c.y3;
            f[a++] = e;
            f[a++] = g;
            this.currentBatchSize++
        }
    };
    a.WebGLSpriteBatch.prototype.renderTilingSprite = function(b) {
        var d = b.tilingTexture,
        c = this.renderSession.blendModeManager.currentBlendMode !== b.blendMode;
        if (d.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size || c) this.flush(),
        this.currentBaseTexture = d.baseTexture,
        this.renderSession.blendModeManager.setBlendMode(b.blendMode);
        b._uvs || (b._uvs = new a.TextureUvs);
        c = b._uvs;
        b.tilePosition.x %= d.baseTexture.width * b.tileScaleOffset.x;
        b.tilePosition.y %= d.baseTexture.height * b.tileScaleOffset.y;
        var e = b.tilePosition.x / (d.baseTexture.width * b.tileScaleOffset.x),
        g = b.tilePosition.y / (d.baseTexture.height * b.tileScaleOffset.y),
        f = b.width / d.baseTexture.width / (b.tileScale.x * b.tileScaleOffset.x),
        d = b.height / d.baseTexture.height / (b.tileScale.y * b.tileScaleOffset.y);
        c.x0 = 0 - e;
        c.y0 = 0 - g;
        c.x1 = 1 * f - e;
        c.y1 = 0 - g;
        c.x2 = 1 * f - e;
        c.y2 = 1 * d - g;
        c.x3 = 0 - e;
        c.y3 = 1 * d - g;
        var d = b.worldAlpha,
        e = b.tint,
        g = this.vertices,
        k = b.width,
        l = b.height,
        h = b.anchor.x,
        n = b.anchor.y,
        f = k * (1 - h),
        k = k * -h,
        h = l * (1 - n),
        l = l * -n,
        n = 4 * this.currentBatchSize * this.vertSize,
        q = b.worldTransform;
        b = q.a;
        var p = q.c,
        s = q.b,
        u = q.d,
        z = q.tx,
        q = q.ty;
        g[n++] = b * k + s * l + z;
        g[n++] = u * l + p * k + q;
        g[n++] = c.x0;
        g[n++] = c.y0;
        g[n++] = d;
        g[n++] = e;
        g[n++] = b * f + s * l + z;
        g[n++] = u * l + p * f + q;
        g[n++] = c.x1;
        g[n++] = c.y1;
        g[n++] = d;
        g[n++] = e;
        g[n++] = b * f + s * h + z;
        g[n++] = u * h + p * f + q;
        g[n++] = c.x2;
        g[n++] = c.y2;
        g[n++] = d;
        g[n++] = e;
        g[n++] = b * k + s * h + z;
        g[n++] = u * h + p * k + q;
        g[n++] = c.x3;
        g[n++] = c.y3;
        g[n++] = d;
        g[n++] = e;
        this.currentBatchSize++
    };
    a.WebGLSpriteBatch.prototype.flush = function() {
        if (0 !== this.currentBatchSize) {
            var b = this.gl;
            this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader);
            if (this.dirty) {
                this.dirty = !1;
                b.activeTexture(b.TEXTURE0);
                b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var d = this.renderSession.projection;
                b.uniform2f(this.shader.projectionVector, d.x, d.y);
                d = 4 * this.vertSize;
                b.vertexAttribPointer(this.shader.aVertexPosition, 2, b.FLOAT, !1, d, 0);
                b.vertexAttribPointer(this.shader.aTextureCoord, 2, b.FLOAT, !1, d, 8);
                b.vertexAttribPointer(this.shader.colorAttribute, 2, b.FLOAT, !1, d, 16)
            }
            b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture._glTextures[b.id] || a.createWebGLTexture(this.currentBaseTexture, b));
            this.currentBaseTexture._dirty[b.id] && a.updateWebGLTexture(this.currentBaseTexture, b);
            this.currentBatchSize > 0.5 * this.size ? b.bufferSubData(b.ARRAY_BUFFER, 0, this.vertices) : (d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize), b.bufferSubData(b.ARRAY_BUFFER, 0, d));
            b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
            this.currentBatchSize = 0;
            this.renderSession.drawCount++
        }
    };
    a.WebGLSpriteBatch.prototype.stop = function() {
        this.flush()
    };
    a.WebGLSpriteBatch.prototype.start = function() {
        this.dirty = !0
    };
    a.WebGLSpriteBatch.prototype.destroy = function() {
        this.indices = this.vertices = null;
        this.gl.deleteBuffer(this.vertexBuffer);
        this.gl.deleteBuffer(this.indexBuffer);
        this.gl = this.currentBaseTexture = null
    };
    a.WebGLFastSpriteBatch = function(b) {
        this.vertSize = 10;
        this.size = this.maxSize = 6E3;
        var a = 6 * this.maxSize;
        this.vertices = new Float32Array(4 * this.size * this.vertSize);
        this.indices = new Uint16Array(a);
        this.indexBuffer = this.vertexBuffer = null;
        for (var c = this.lastIndexCount = 0,
        e = 0; c < a; c += 6, e += 4) this.indices[c + 0] = e + 0,
        this.indices[c + 1] = e + 1,
        this.indices[c + 2] = e + 2,
        this.indices[c + 3] = e + 0,
        this.indices[c + 4] = e + 2,
        this.indices[c + 5] = e + 3;
        this.drawing = !1;
        this.currentBatchSize = 0;
        this.currentBaseTexture = null;
        this.currentBlendMode = 0;
        this.matrix = this.shader = this.renderSession = null;
        this.setContext(b)
    };
    a.WebGLFastSpriteBatch.prototype.setContext = function(b) {
        this.gl = b;
        this.vertexBuffer = b.createBuffer();
        this.indexBuffer = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW);
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.vertices, b.DYNAMIC_DRAW)
    };
    a.WebGLFastSpriteBatch.prototype.begin = function(b, a) {
        this.renderSession = a;
        this.shader = this.renderSession.shaderManager.fastShader;
        this.matrix = b.worldTransform.toArray(!0);
        this.start()
    };
    a.WebGLFastSpriteBatch.prototype.end = function() {
        this.flush()
    };
    a.WebGLFastSpriteBatch.prototype.render = function(b) {
        b = b.children;
        var a = b[0];
        if (a.texture._uvs) {
            this.currentBaseTexture = a.texture.baseTexture;
            a.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(a.blendMode));
            for (var a = 0,
            c = b.length; a < c; a++) this.renderSprite(b[a]);
            this.flush()
        }
    };
    a.WebGLFastSpriteBatch.prototype.renderSprite = function(b) {
        if (b.visible) {
            if (b.texture.baseTexture !== this.currentBaseTexture && (this.flush(), this.currentBaseTexture = b.texture.baseTexture, !b.texture._uvs)) return;
            var a, c = this.vertices,
            e, g, f, k, l;
            a = b.texture._uvs;
            b.texture.trim ? (f = b.texture.trim, g = f.x - b.anchor.x * f.width, e = g + b.texture.crop.width, k = f.y - b.anchor.y * f.height, f = k + b.texture.crop.height) : (e = b.texture.frame.width * (1 - b.anchor.x), g = b.texture.frame.width * -b.anchor.x, f = b.texture.frame.height * (1 - b.anchor.y), k = b.texture.frame.height * -b.anchor.y);
            l = 4 * this.currentBatchSize * this.vertSize;
            c[l++] = g;
            c[l++] = k;
            c[l++] = b.position.x;
            c[l++] = b.position.y;
            c[l++] = b.scale.x;
            c[l++] = b.scale.y;
            c[l++] = b.rotation;
            c[l++] = a.x0;
            c[l++] = a.y1;
            c[l++] = b.alpha;
            c[l++] = e;
            c[l++] = k;
            c[l++] = b.position.x;
            c[l++] = b.position.y;
            c[l++] = b.scale.x;
            c[l++] = b.scale.y;
            c[l++] = b.rotation;
            c[l++] = a.x1;
            c[l++] = a.y1;
            c[l++] = b.alpha;
            c[l++] = e;
            c[l++] = f;
            c[l++] = b.position.x;
            c[l++] = b.position.y;
            c[l++] = b.scale.x;
            c[l++] = b.scale.y;
            c[l++] = b.rotation;
            c[l++] = a.x2;
            c[l++] = a.y2;
            c[l++] = b.alpha;
            c[l++] = g;
            c[l++] = f;
            c[l++] = b.position.x;
            c[l++] = b.position.y;
            c[l++] = b.scale.x;
            c[l++] = b.scale.y;
            c[l++] = b.rotation;
            c[l++] = a.x3;
            c[l++] = a.y3;
            c[l++] = b.alpha;
            this.currentBatchSize++;
            this.currentBatchSize >= this.size && this.flush()
        }
    };
    a.WebGLFastSpriteBatch.prototype.flush = function() {
        if (0 !== this.currentBatchSize) {
            var b = this.gl;
            this.currentBaseTexture._glTextures[b.id] || a.createWebGLTexture(this.currentBaseTexture, b);
            b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture._glTextures[b.id]);
            if (this.currentBatchSize > 0.5 * this.size) b.bufferSubData(b.ARRAY_BUFFER, 0, this.vertices);
            else {
                var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                b.bufferSubData(b.ARRAY_BUFFER, 0, d)
            }
            b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
            this.currentBatchSize = 0;
            this.renderSession.drawCount++
        }
    };
    a.WebGLFastSpriteBatch.prototype.stop = function() {
        this.flush()
    };
    a.WebGLFastSpriteBatch.prototype.start = function() {
        var b = this.gl;
        b.activeTexture(b.TEXTURE0);
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var a = this.renderSession.projection;
        b.uniform2f(this.shader.projectionVector, a.x, a.y);
        b.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
        a = 4 * this.vertSize;
        b.vertexAttribPointer(this.shader.aVertexPosition, 2, b.FLOAT, !1, a, 0);
        b.vertexAttribPointer(this.shader.aPositionCoord, 2, b.FLOAT, !1, a, 8);
        b.vertexAttribPointer(this.shader.aScale, 2, b.FLOAT, !1, a, 16);
        b.vertexAttribPointer(this.shader.aRotation, 1, b.FLOAT, !1, a, 24);
        b.vertexAttribPointer(this.shader.aTextureCoord, 2, b.FLOAT, !1, a, 28);
        b.vertexAttribPointer(this.shader.colorAttribute, 1, b.FLOAT, !1, a, 36)
    };
    a.WebGLFilterManager = function(b, a) {
        this.transparent = a;
        this.filterStack = [];
        this.offsetY = this.offsetX = 0;
        this.setContext(b)
    };
    a.WebGLFilterManager.prototype.setContext = function(b) {
        this.gl = b;
        this.texturePool = [];
        this.initShaderBuffers()
    };
    a.WebGLFilterManager.prototype.begin = function(b, a) {
        this.renderSession = b;
        this.defaultShader = b.shaderManager.defaultShader;
        var c = this.renderSession.projection;
        this.width = 2 * c.x;
        this.height = 2 * -c.y;
        this.buffer = a
    };
    a.WebGLFilterManager.prototype.pushFilter = function(b) {
        var d = this.gl,
        c = this.renderSession.projection,
        e = this.renderSession.offset;
        b._filterArea = b.target.filterArea || b.target.getBounds();
        this.filterStack.push(b);
        var g = b.filterPasses[0];
        this.offsetX += b._filterArea.x;
        this.offsetY += b._filterArea.y;
        var f = this.texturePool.pop();
        f ? f.resize(this.width, this.height) : f = new a.FilterTexture(this.gl, this.width, this.height);
        d.bindTexture(d.TEXTURE_2D, f.texture);
        var k = b._filterArea,
        g = g.padding;
        k.x -= g;
        k.y -= g;
        k.width += 2 * g;
        k.height += 2 * g;
        0 > k.x && (k.x = 0);
        k.width > this.width && (k.width = this.width);
        0 > k.y && (k.y = 0);
        k.height > this.height && (k.height = this.height);
        d.bindFramebuffer(d.FRAMEBUFFER, f.frameBuffer);
        d.viewport(0, 0, k.width, k.height);
        c.x = k.width / 2;
        c.y = -k.height / 2;
        e.x = -k.x;
        e.y = -k.y;
        this.renderSession.shaderManager.setShader(this.defaultShader);
        d.uniform2f(this.defaultShader.projectionVector, k.width / 2, -k.height / 2);
        d.uniform2f(this.defaultShader.offsetVector, -k.x, -k.y);
        d.colorMask(!0, !0, !0, !0);
        d.clearColor(0, 0, 0, 0);
        d.clear(d.COLOR_BUFFER_BIT);
        b._glFilterTexture = f
    };
    a.WebGLFilterManager.prototype.popFilter = function() {
        var b = this.gl,
        d = this.filterStack.pop(),
        c = d._filterArea,
        e = d._glFilterTexture,
        g = this.renderSession.projection,
        f = this.renderSession.offset;
        if (1 < d.filterPasses.length) {
            b.viewport(0, 0, c.width, c.height);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
            this.vertexArray[0] = 0;
            this.vertexArray[1] = c.height;
            this.vertexArray[2] = c.width;
            this.vertexArray[3] = c.height;
            this.vertexArray[4] = 0;
            this.vertexArray[5] = 0;
            this.vertexArray[6] = c.width;
            this.vertexArray[7] = 0;
            b.bufferSubData(b.ARRAY_BUFFER, 0, this.vertexArray);
            b.bindBuffer(b.ARRAY_BUFFER, this.uvBuffer);
            this.uvArray[2] = c.width / this.width;
            this.uvArray[5] = c.height / this.height;
            this.uvArray[6] = c.width / this.width;
            this.uvArray[7] = c.height / this.height;
            b.bufferSubData(b.ARRAY_BUFFER, 0, this.uvArray);
            var k = this.texturePool.pop();
            k || (k = new a.FilterTexture(this.gl, this.width, this.height));
            k.resize(this.width, this.height);
            b.bindFramebuffer(b.FRAMEBUFFER, k.frameBuffer);
            b.clear(b.COLOR_BUFFER_BIT);
            b.disable(b.BLEND);
            for (var l = 0; l < d.filterPasses.length - 1; l++) {
                var h = d.filterPasses[l];
                b.bindFramebuffer(b.FRAMEBUFFER, k.frameBuffer);
                b.activeTexture(b.TEXTURE0);
                b.bindTexture(b.TEXTURE_2D, e.texture);
                this.applyFilterPass(h, c, c.width, c.height);
                h = e;
                e = k;
                k = h
            }
            b.enable(b.BLEND);
            this.texturePool.push(k)
        }
        k = d.filterPasses[d.filterPasses.length - 1];
        this.offsetX -= c.x;
        this.offsetY -= c.y;
        var l = this.width,
        h = this.height,
        n = 0,
        q = 0,
        p = this.buffer;
        0 === this.filterStack.length ? b.colorMask(!0, !0, !0, !0) : (p = this.filterStack[this.filterStack.length - 1], c = p._filterArea, l = c.width, h = c.height, n = c.x, q = c.y, p = p._glFilterTexture.frameBuffer);
        g.x = l / 2;
        g.y = -h / 2;
        f.x = n;
        f.y = q;
        c = d._filterArea;
        g = c.x - n;
        f = c.y - q;
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        this.vertexArray[0] = g;
        this.vertexArray[1] = f + c.height;
        this.vertexArray[2] = g + c.width;
        this.vertexArray[3] = f + c.height;
        this.vertexArray[4] = g;
        this.vertexArray[5] = f;
        this.vertexArray[6] = g + c.width;
        this.vertexArray[7] = f;
        b.bufferSubData(b.ARRAY_BUFFER, 0, this.vertexArray);
        b.bindBuffer(b.ARRAY_BUFFER, this.uvBuffer);
        this.uvArray[2] = c.width / this.width;
        this.uvArray[5] = c.height / this.height;
        this.uvArray[6] = c.width / this.width;
        this.uvArray[7] = c.height / this.height;
        b.bufferSubData(b.ARRAY_BUFFER, 0, this.uvArray);
        b.viewport(0, 0, l, h);
        b.bindFramebuffer(b.FRAMEBUFFER, p);
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, e.texture);
        this.applyFilterPass(k, c, l, h);
        this.renderSession.shaderManager.setShader(this.defaultShader);
        b.uniform2f(this.defaultShader.projectionVector, l / 2, -h / 2);
        b.uniform2f(this.defaultShader.offsetVector, -n, -q);
        this.texturePool.push(e);
        d._glFilterTexture = null
    };
    a.WebGLFilterManager.prototype.applyFilterPass = function(b, d, c, e) {
        d = this.gl;
        var g = b.shaders[d.id];
        g || (g = new a.PixiShader(d), g.fragmentSrc = b.fragmentSrc, g.uniforms = b.uniforms, g.init(), b.shaders[d.id] = g);
        this.renderSession.shaderManager.setShader(g);
        d.uniform2f(g.projectionVector, c / 2, -e / 2);
        d.uniform2f(g.offsetVector, 0, 0);
        b.uniforms.dimensions && (b.uniforms.dimensions.value[0] = this.width, b.uniforms.dimensions.value[1] = this.height, b.uniforms.dimensions.value[2] = this.vertexArray[0], b.uniforms.dimensions.value[3] = this.vertexArray[5]);
        g.syncUniforms();
        d.bindBuffer(d.ARRAY_BUFFER, this.vertexBuffer);
        d.vertexAttribPointer(g.aVertexPosition, 2, d.FLOAT, !1, 0, 0);
        d.bindBuffer(d.ARRAY_BUFFER, this.uvBuffer);
        d.vertexAttribPointer(g.aTextureCoord, 2, d.FLOAT, !1, 0, 0);
        d.bindBuffer(d.ARRAY_BUFFER, this.colorBuffer);
        d.vertexAttribPointer(g.colorAttribute, 2, d.FLOAT, !1, 0, 0);
        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0);
        this.renderSession.drawCount++
    };
    a.WebGLFilterManager.prototype.initShaderBuffers = function() {
        var b = this.gl;
        this.vertexBuffer = b.createBuffer();
        this.uvBuffer = b.createBuffer();
        this.colorBuffer = b.createBuffer();
        this.indexBuffer = b.createBuffer();
        this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.vertexArray, b.STATIC_DRAW);
        this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

        b.bindBuffer(b.ARRAY_BUFFER, this.uvBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.uvArray, b.STATIC_DRAW);
        this.colorArray = new Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]);
        b.bindBuffer(b.ARRAY_BUFFER, this.colorBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.colorArray, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), b.STATIC_DRAW)
    };
    a.WebGLFilterManager.prototype.destroy = function() {
        var b = this.gl;
        this.filterStack = null;
        for (var a = this.offsetY = this.offsetX = 0; a < this.texturePool.length; a++) this.texturePool[a].destroy();
        this.texturePool = null;
        b.deleteBuffer(this.vertexBuffer);
        b.deleteBuffer(this.uvBuffer);
        b.deleteBuffer(this.colorBuffer);
        b.deleteBuffer(this.indexBuffer)
    };
    a.FilterTexture = function(b, d, c, e) {
        this.gl = b;
        this.frameBuffer = b.createFramebuffer();
        this.texture = b.createTexture();
        e = e || a.scaleModes.DEFAULT;
        b.bindTexture(b.TEXTURE_2D, this.texture);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, e === a.scaleModes.LINEAR ? b.LINEAR: b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e === a.scaleModes.LINEAR ? b.LINEAR: b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.bindFramebuffer(b.FRAMEBUFFER, this.framebuffer);
        b.bindFramebuffer(b.FRAMEBUFFER, this.frameBuffer);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.texture, 0);
        this.renderBuffer = b.createRenderbuffer();
        b.bindRenderbuffer(b.RENDERBUFFER, this.renderBuffer);
        b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_STENCIL_ATTACHMENT, b.RENDERBUFFER, this.renderBuffer);
        this.resize(d, c)
    };
    a.FilterTexture.prototype.clear = function() {
        var b = this.gl;
        b.clearColor(0, 0, 0, 0);
        b.clear(b.COLOR_BUFFER_BIT)
    };
    a.FilterTexture.prototype.resize = function(b, a) {
        if (this.width !== b || this.height !== a) {
            this.width = b;
            this.height = a;
            var c = this.gl;
            c.bindTexture(c.TEXTURE_2D, this.texture);
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, b, a, 0, c.RGBA, c.UNSIGNED_BYTE, null);
            c.bindRenderbuffer(c.RENDERBUFFER, this.renderBuffer);
            c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_STENCIL, b, a)
        }
    };
    a.FilterTexture.prototype.destroy = function() {
        var b = this.gl;
        b.deleteFramebuffer(this.frameBuffer);
        b.deleteTexture(this.texture);
        this.texture = this.frameBuffer = null
    };
    a.CanvasMaskManager = function() {};
    a.CanvasMaskManager.prototype.pushMask = function(b, d) {
        d.save();
        var c = b.alpha,
        e = b.worldTransform;
        d.setTransform(e.a, e.c, e.b, e.d, e.tx, e.ty);
        a.CanvasGraphics.renderGraphicsMask(b, d);
        d.clip();
        b.worldAlpha = c
    };
    a.CanvasMaskManager.prototype.popMask = function(b) {
        b.restore()
    };
    a.CanvasTinter = function() {};
    a.CanvasTinter.getTintedTexture = function(b, d) {
        var c = b.texture;
        d = a.CanvasTinter.roundColor(d);
        var e = "#" + ("00000" + (d | 0).toString(16)).substr( - 6);
        c.tintCache = c.tintCache || {};
        if (c.tintCache[e]) return c.tintCache[e];
        var g = a.CanvasTinter.canvas || document.createElement("canvas");
        a.CanvasTinter.tintMethod(c, d, g);
        if (a.CanvasTinter.convertTintToImage) {
            var f = new Image;
            f.src = g.toDataURL();
            c.tintCache[e] = f
        } else c.tintCache[e] = g,
        a.CanvasTinter.canvas = null;
        return g
    };
    a.CanvasTinter.tintWithMultiply = function(b, a, c) {
        var e = c.getContext("2d"),
        g = b.frame;
        c.width = g.width;
        c.height = g.height;
        e.fillStyle = "#" + ("00000" + (a | 0).toString(16)).substr( - 6);
        e.fillRect(0, 0, g.width, g.height);
        e.globalCompositeOperation = "multiply";
        e.drawImage(b.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height);
        e.globalCompositeOperation = "destination-atop";
        e.drawImage(b.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height)
    };
    a.CanvasTinter.tintWithOverlay = function(b, a, c) {
        var e = c.getContext("2d"),
        g = b.frame;
        c.width = g.width;
        c.height = g.height;
        e.globalCompositeOperation = "copy";
        e.fillStyle = "#" + ("00000" + (a | 0).toString(16)).substr( - 6);
        e.fillRect(0, 0, g.width, g.height);
        e.globalCompositeOperation = "destination-atop";
        e.drawImage(b.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height)
    };
    a.CanvasTinter.tintWithPerPixel = function(b, d, c) {
        var e = c.getContext("2d"),
        g = b.frame;
        c.width = g.width;
        c.height = g.height;
        e.globalCompositeOperation = "copy";
        e.drawImage(b.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height);
        c = a.hex2rgb(d);
        b = c[0];
        d = c[1];
        c = c[2];
        for (var g = e.getImageData(0, 0, g.width, g.height), f = g.data, k = 0; k < f.length; k += 4) f[k + 0] *= b,
        f[k + 1] *= d,
        f[k + 2] *= c;
        e.putImageData(g, 0, 0)
    };
    a.CanvasTinter.roundColor = function(b) {
        var d = a.CanvasTinter.cacheStepsPerColorChannel;
        b = a.hex2rgb(b);
        b[0] = Math.min(255, b[0] / d * d);
        b[1] = Math.min(255, b[1] / d * d);
        b[2] = Math.min(255, b[2] / d * d);
        return a.rgb2hex(b)
    };
    a.CanvasTinter.cacheStepsPerColorChannel = 8;
    a.CanvasTinter.convertTintToImage = !1;
    a.CanvasTinter.canUseMultiply = a.canUseNewCanvasBlendModes();
    a.CanvasTinter.tintMethod = a.CanvasTinter.canUseMultiply ? a.CanvasTinter.tintWithMultiply: a.CanvasTinter.tintWithPerPixel;
    a.CanvasRenderer = function(b, d, c, e) {
        a.defaultRenderer || (a.sayHello("Canvas"), a.defaultRenderer = this);
        this.type = a.CANVAS_RENDERER;
        this.clearBeforeRender = !0;
        this.transparent = !!e;
        a.blendModesCanvas || (a.blendModesCanvas = [], a.canUseNewCanvasBlendModes() ? (a.blendModesCanvas[a.blendModes.NORMAL] = "source-over", a.blendModesCanvas[a.blendModes.ADD] = "lighter", a.blendModesCanvas[a.blendModes.MULTIPLY] = "multiply", a.blendModesCanvas[a.blendModes.SCREEN] = "screen", a.blendModesCanvas[a.blendModes.OVERLAY] = "overlay", a.blendModesCanvas[a.blendModes.DARKEN] = "darken", a.blendModesCanvas[a.blendModes.LIGHTEN] = "lighten", a.blendModesCanvas[a.blendModes.COLOR_DODGE] = "color-dodge", a.blendModesCanvas[a.blendModes.COLOR_BURN] = "color-burn", a.blendModesCanvas[a.blendModes.HARD_LIGHT] = "hard-light", a.blendModesCanvas[a.blendModes.SOFT_LIGHT] = "soft-light", a.blendModesCanvas[a.blendModes.DIFFERENCE] = "difference", a.blendModesCanvas[a.blendModes.EXCLUSION] = "exclusion", a.blendModesCanvas[a.blendModes.HUE] = "hue", a.blendModesCanvas[a.blendModes.SATURATION] = "saturation", a.blendModesCanvas[a.blendModes.COLOR] = "color", a.blendModesCanvas[a.blendModes.LUMINOSITY] = "luminosity") : (a.blendModesCanvas[a.blendModes.NORMAL] = "source-over", a.blendModesCanvas[a.blendModes.ADD] = "lighter", a.blendModesCanvas[a.blendModes.MULTIPLY] = "source-over", a.blendModesCanvas[a.blendModes.SCREEN] = "source-over", a.blendModesCanvas[a.blendModes.OVERLAY] = "source-over", a.blendModesCanvas[a.blendModes.DARKEN] = "source-over", a.blendModesCanvas[a.blendModes.LIGHTEN] = "source-over", a.blendModesCanvas[a.blendModes.COLOR_DODGE] = "source-over", a.blendModesCanvas[a.blendModes.COLOR_BURN] = "source-over", a.blendModesCanvas[a.blendModes.HARD_LIGHT] = "source-over", a.blendModesCanvas[a.blendModes.SOFT_LIGHT] = "source-over", a.blendModesCanvas[a.blendModes.DIFFERENCE] = "source-over", a.blendModesCanvas[a.blendModes.EXCLUSION] = "source-over", a.blendModesCanvas[a.blendModes.HUE] = "source-over", a.blendModesCanvas[a.blendModes.SATURATION] = "source-over", a.blendModesCanvas[a.blendModes.COLOR] = "source-over", a.blendModesCanvas[a.blendModes.LUMINOSITY] = "source-over"));
        this.width = b || 800;
        this.height = d || 600;
        this.view = c || document.createElement("canvas");
        this.context = this.view.getContext("2d", {
            alpha: this.transparent
        });
        this.refresh = !0;
        this.view.width = this.width;
        this.view.height = this.height;
        this.count = 0;
        this.maskManager = new a.CanvasMaskManager;
        this.renderSession = {
            context: this.context,
            maskManager: this.maskManager,
            scaleMode: null,
            smoothProperty: null,
            roundPixels: !1
        };
        "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled": "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled": "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled": "oImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "oImageSmoothingEnabled")
    };
    a.CanvasRenderer.prototype.constructor = a.CanvasRenderer;
    a.CanvasRenderer.prototype.render = function(b) {
        a.texturesToUpdate.length = 0;
        a.texturesToDestroy.length = 0;
        b.updateTransform();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.globalAlpha = 1;
        navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()); ! this.transparent && this.clearBeforeRender ? (this.context.fillStyle = b.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height)) : this.transparent && this.clearBeforeRender && this.context.clearRect(0, 0, this.width, this.height);
        this.renderDisplayObject(b);
        b.interactive && !b._interactiveEventsAdded && (b._interactiveEventsAdded = !0, b.interactionManager.setTarget(this));
        0 < a.Texture.frameUpdates.length && (a.Texture.frameUpdates.length = 0)
    };
    a.CanvasRenderer.prototype.resize = function(b, a) {
        this.width = b;
        this.height = a;
        this.view.width = b;
        this.view.height = a
    };
    a.CanvasRenderer.prototype.renderDisplayObject = function(b, a) {
        this.renderSession.context = a || this.context;
        b._renderCanvas(this.renderSession)
    };
    a.CanvasRenderer.prototype.renderStripFlat = function(b) {
        var a = this.context;
        b = b.verticies;
        var c = b.length / 2;
        this.count++;
        a.beginPath();
        for (var e = 1; e < c - 2; e++) {
            var g = 2 * e,
            f = b[g + 2],
            k = b[g + 4],
            l = b[g + 3],
            h = b[g + 5];
            a.moveTo(b[g], b[g + 1]);
            a.lineTo(f, l);
            a.lineTo(k, h)
        }
        a.fillStyle = "#FF0000";
        a.fill();
        a.closePath()
    };
    a.CanvasRenderer.prototype.renderStrip = function(b) {
        var a = this.context,
        c = b.verticies,
        e = b.uvs,
        g = c.length / 2;
        this.count++;
        for (var f = 1; f < g - 2; f++) {
            var k = 2 * f,
            l = c[k],
            h = c[k + 2],
            n = c[k + 4],
            q = c[k + 1],
            p = c[k + 3],
            s = c[k + 5],
            u = e[k] * b.texture.width,
            z = e[k + 2] * b.texture.width,
            A = e[k + 4] * b.texture.width,
            x = e[k + 1] * b.texture.height,
            D = e[k + 3] * b.texture.height,
            k = e[k + 5] * b.texture.height;
            a.save();
            a.beginPath();
            a.moveTo(l, q);
            a.lineTo(h, p);
            a.lineTo(n, s);
            a.closePath();
            a.clip();
            var B = u * D + x * A + z * k - D * A - x * z - u * k;
            a.transform((l * D + x * n + h * k - D * n - x * h - l * k) / B, (q * D + x * s + p * k - D * s - x * p - q * k) / B, (u * h + l * A + z * n - h * A - l * z - u * n) / B, (u * p + q * A + z * s - p * A - q * z - u * s) / B, (u * D * n + x * h * A + l * z * k - l * D * A - x * z * n - u * h * k) / B, (u * D * s + x * p * A + q * z * k - q * D * A - x * z * s - u * p * k) / B);
            a.drawImage(b.texture.baseTexture.source, 0, 0);
            a.restore()
        }
    };
    a.CanvasBuffer = function(b, a) {
        this.width = b;
        this.height = a;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = b;
        this.canvas.height = a
    };
    a.CanvasBuffer.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height)
    };
    a.CanvasBuffer.prototype.resize = function(b, a) {
        this.width = this.canvas.width = b;
        this.height = this.canvas.height = a
    };
    a.CanvasGraphics = function() {};
    a.CanvasGraphics.renderGraphics = function(b, d) {
        for (var c = b.worldAlpha,
        e = 0; e < b.graphicsData.length; e++) {
            var g = b.graphicsData[e],
            f = g.points;
            d.strokeStyle = "#" + ("00000" + (g.lineColor | 0).toString(16)).substr( - 6);
            d.lineWidth = g.lineWidth;
            if (g.type === a.Graphics.POLY) {
                d.beginPath();
                d.moveTo(f[0], f[1]);
                for (var k = 1; k < f.length / 2; k++) d.lineTo(f[2 * k], f[2 * k + 1]);
                f[0] === f[f.length - 2] && f[1] === f[f.length - 1] && d.closePath();
                g.fill && (d.globalAlpha = g.fillAlpha * c, d.fillStyle = "#" + ("00000" + (g.fillColor | 0).toString(16)).substr( - 6), d.fill());
                g.lineWidth && (d.globalAlpha = g.lineAlpha * c, d.stroke())
            } else if (g.type === a.Graphics.RECT) {
                if (g.fillColor || 0 === g.fillColor) d.globalAlpha = g.fillAlpha * c,
                d.fillStyle = "#" + ("00000" + (g.fillColor | 0).toString(16)).substr( - 6),
                d.fillRect(f[0], f[1], f[2], f[3]);
                g.lineWidth && (d.globalAlpha = g.lineAlpha * c, d.strokeRect(f[0], f[1], f[2], f[3]))
            } else if (g.type === a.Graphics.CIRC) d.beginPath(),
            d.arc(f[0], f[1], f[2], 0, 2 * Math.PI),
            d.closePath(),
            g.fill && (d.globalAlpha = g.fillAlpha * c, d.fillStyle = "#" + ("00000" + (g.fillColor | 0).toString(16)).substr( - 6), d.fill()),
            g.lineWidth && (d.globalAlpha = g.lineAlpha * c, d.stroke());
            else if (g.type === a.Graphics.ELIP) {
                var l = g.points,
                h = 2 * l[2],
                n = 2 * l[3],
                k = l[0] - h / 2,
                l = l[1] - n / 2;
                d.beginPath();
                var q = h / 2 * 0.5522848,
                f = n / 2 * 0.5522848,
                p = k + h,
                s = l + n,
                h = k + h / 2,
                n = l + n / 2;
                d.moveTo(k, n);
                d.bezierCurveTo(k, n - f, h - q, l, h, l);
                d.bezierCurveTo(h + q, l, p, n - f, p, n);
                d.bezierCurveTo(p, n + f, h + q, s, h, s);
                d.bezierCurveTo(h - q, s, k, n + f, k, n);
                d.closePath();
                g.fill && (d.globalAlpha = g.fillAlpha * c, d.fillStyle = "#" + ("00000" + (g.fillColor | 0).toString(16)).substr( - 6), d.fill());
                g.lineWidth && (d.globalAlpha = g.lineAlpha * c, d.stroke())
            } else if (g.type === a.Graphics.RREC) {
                k = f[0];
                n = f[1];
                l = f[2];
                q = f[3];
                f = f[4];
                p = Math.min(l, q) / 2 | 0;
                f = f > p ? p: f;
                d.beginPath();
                d.moveTo(k, n + f);
                d.lineTo(k, n + q - f);
                d.quadraticCurveTo(k, n + q, k + f, n + q);
                d.lineTo(k + l - f, n + q);
                d.quadraticCurveTo(k + l, n + q, k + l, n + q - f);
                d.lineTo(k + l, n + f);
                d.quadraticCurveTo(k + l, n, k + l - f, n);
                d.lineTo(k + f, n);
                d.quadraticCurveTo(k, n, k, n + f);
                d.closePath();
                if (g.fillColor || 0 === g.fillColor) d.globalAlpha = g.fillAlpha * c,
                d.fillStyle = "#" + ("00000" + (g.fillColor | 0).toString(16)).substr( - 6),
                d.fill();
                g.lineWidth && (d.globalAlpha = g.lineAlpha * c, d.stroke())
            }
        }
    };
    a.CanvasGraphics.renderGraphicsMask = function(b, d) {
        var c = b.graphicsData.length;
        if (0 !== c) for (1 < c && window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"), c = 0; 1 > c; c++) {
            var e = b.graphicsData[c],
            f = e.points;
            if (e.type === a.Graphics.POLY) {
                d.beginPath();
                d.moveTo(f[0], f[1]);
                for (e = 1; e < f.length / 2; e++) d.lineTo(f[2 * e], f[2 * e + 1]);
                f[0] === f[f.length - 2] && f[1] === f[f.length - 1] && d.closePath()
            } else if (e.type === a.Graphics.RECT) d.beginPath(),
            d.rect(f[0], f[1], f[2], f[3]),
            d.closePath();
            else if (e.type === a.Graphics.CIRC) d.beginPath(),
            d.arc(f[0], f[1], f[2], 0, 2 * Math.PI),
            d.closePath();
            else if (e.type === a.Graphics.ELIP) {
                var h = e.points,
                k = 2 * h[2],
                e = 2 * h[3],
                f = h[0] - k / 2,
                h = h[1] - e / 2;
                d.beginPath();
                var l = k / 2 * 0.5522848,
                n = e / 2 * 0.5522848,
                p = f + k,
                q = h + e,
                k = f + k / 2,
                e = h + e / 2;
                d.moveTo(f, e);
                d.bezierCurveTo(f, e - n, k - l, h, k, h);
                d.bezierCurveTo(k + l, h, p, e - n, p, e);
                d.bezierCurveTo(p, e + n, k + l, q, k, q);
                d.bezierCurveTo(k - l, q, f, e + n, f, e);
                d.closePath()
            } else e.type === a.Graphics.RREC && (e = f[0], h = f[1], l = f[2], n = f[3], f = f[4], p = Math.min(l, n) / 2 | 0, f = f > p ? p: f, d.beginPath(), d.moveTo(e, h + f), d.lineTo(e, h + n - f), d.quadraticCurveTo(e, h + n, e + f, h + n), d.lineTo(e + l - f, h + n), d.quadraticCurveTo(e + l, h + n, e + l, h + n - f), d.lineTo(e + l, h + f), d.quadraticCurveTo(e + l, h, e + l - f, h), d.lineTo(e + f, h), d.quadraticCurveTo(e, h, e, h + f), d.closePath())
        }
    };
    a.Graphics = function() {
        a.DisplayObjectContainer.call(this);
        this.renderable = !0;
        this.fillAlpha = 1;
        this.lineWidth = 0;
        this.lineColor = "black";
        this.graphicsData = [];
        this.tint = 16777215;
        this.blendMode = a.blendModes.NORMAL;
        this.currentPath = {
            points: []
        };
        this._webGL = [];
        this.isMask = !1;
        this.bounds = null;
        this.boundsPadding = 10;
        this.dirty = !0
    };
    a.Graphics.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.Graphics.prototype.constructor = a.Graphics;
    Object.defineProperty(a.Graphics.prototype, "cacheAsBitmap", {
        get: function() {
            return this._cacheAsBitmap
        },
        set: function(b) { (this._cacheAsBitmap = b) ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
        }
    });
    a.Graphics.prototype.lineStyle = function(b, d, c) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.lineWidth = b || 0;
        this.lineColor = d || 0;
        this.lineAlpha = 3 > arguments.length ? 1 : c;
        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: a.Graphics.POLY
        };
        this.graphicsData.push(this.currentPath);
        return this
    };
    a.Graphics.prototype.moveTo = function(b, d) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: a.Graphics.POLY
        };
        this.currentPath.points.push(b, d);
        this.graphicsData.push(this.currentPath);
        return this
    };
    a.Graphics.prototype.lineTo = function(b, a) {
        this.currentPath.points.push(b, a);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.quadraticCurveTo = function(b, a, c, e) {
        for (var f, h, k = this.currentPath.points,
        l = k[k.length - 2], n = k[k.length - 1], p = 0, q = 1; 20 >= q; q++) p = q / 20,
        f = l + (b - l) * p,
        h = n + (a - n) * p,
        k.push(f + (b + (c - b) * p - f) * p, h + (a + (e - a) * p - h) * p);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.bezierCurveTo = function(b, a, c, e, f, h) {
        for (var k, l, n, p, q, y = this.currentPath.points,
        s = y[y.length - 2], u = y[y.length - 1], z = 0, A = 1; 20 > A; A++) z = A / 20,
        k = 1 - z,
        l = k * k,
        n = l * k,
        p = z * z,
        q = p * z,
        y.push(n * s + 3 * l * z * b + 3 * k * p * c + q * f, n * u + 3 * l * z * a + 3 * k * p * e + q * h);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.arcTo = function(b, a, c, e, f) {
        var h = this.currentPath.points,
        k = h[h.length - 1] - a,
        l = h[h.length - 2] - b;
        e -= a;
        c -= b;
        var n = Math.abs(k * c - l * e);
        if (1E-8 > n || 0 === f) h.push(b, a);
        else {
            var p = k * k + l * l,
            q = e * e + c * c,
            y = k * e + l * c,
            h = f * Math.sqrt(p) / n,
            n = f * Math.sqrt(q) / n,
            p = h * y / p,
            s = n * y / q,
            q = h * c + n * l,
            y = h * e + n * k,
            u = c * (h + s),
            h = e * (h + s),
            n = Math.atan2(k * (n + p) - y, l * (n + p) - q),
            h = Math.atan2(h - y, u - q);
            this.arc(q + b, y + a, f, n, h, l * e > c * k)
        }
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.arc = function(b, a, c, e, f, h) {
        var k = b + Math.cos(e) * c,
        l = a + Math.sin(e) * c,
        n = this.currentPath.points,
        p = n[n.length - 1];
        n[n.length - 2] === k && p === l || n.push(k, l);
        if (e === f) return this; ! h && f <= e ? f += 2 * Math.PI: h && e <= f && (e += 2 * Math.PI);
        h = h ? -1 * (e - f) : f - e;
        f = Math.abs(h) / (2 * Math.PI) * 40;
        if (0 === h) return this;
        h /= 2 * f;
        for (var k = 2 * h,
        l = Math.cos(h), p = Math.sin(h), q = f % 1 / f, y = 0; y <= f; y++) {
            var s = h + e + k * (y + q * y),
            u = Math.cos(s),
            s = -Math.sin(s);
            n.push((l * u + p * s) * c + b, (l * -s + p * u) * c + a)
        }
        this.dirty = !0;

        return this
    };
    a.Graphics.prototype.drawPath = function(b) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: a.Graphics.POLY
        };
        this.graphicsData.push(this.currentPath);
        this.currentPath.points = this.currentPath.points.concat(b);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.beginFill = function(b, a) {
        this.filling = !0;
        this.fillColor = b || 0;
        this.fillAlpha = 2 > arguments.length ? 1 : a;
        return this
    };
    a.Graphics.prototype.endFill = function() {
        this.filling = !1;
        this.fillColor = null;
        this.fillAlpha = 1;
        return this
    };
    a.Graphics.prototype.drawRect = function(b, d, c, e) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [b, d, c, e],
            type: a.Graphics.RECT
        };
        this.graphicsData.push(this.currentPath);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.drawRoundedRect = function(b, d, c, e, f) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [b, d, c, e, f],
            type: a.Graphics.RREC
        };
        this.graphicsData.push(this.currentPath);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.drawCircle = function(b, d, c) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [b, d, c, c],
            type: a.Graphics.CIRC
        };
        this.graphicsData.push(this.currentPath);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.drawEllipse = function(b, d, c, e) {
        this.currentPath.points.length || this.graphicsData.pop();
        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [b, d, c, e],
            type: a.Graphics.ELIP
        };
        this.graphicsData.push(this.currentPath);
        this.dirty = !0;
        return this
    };
    a.Graphics.prototype.clear = function() {
        this.lineWidth = 0;
        this.filling = !1;
        this.clearDirty = this.dirty = !0;
        this.graphicsData = [];
        this.bounds = null;
        return this
    };
    a.Graphics.prototype.generateTexture = function() {
        var b = this.getBounds(),
        d = new a.CanvasBuffer(b.width, b.height),
        c = a.Texture.fromCanvas(d.canvas);
        d.context.translate( - b.x, -b.y);
        a.CanvasGraphics.renderGraphics(this, d.context);
        return c
    };
    a.Graphics.prototype._renderWebGL = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha && !0 !== this.isMask) if (this._cacheAsBitmap) this.dirty && (this._generateCachedSprite(), a.updateWebGLTexture(this._cachedSprite.texture.baseTexture, b.gl), this.dirty = !1),
        this._cachedSprite.alpha = this.alpha,
        a.Sprite.prototype._renderWebGL.call(this._cachedSprite, b);
        else {
            b.spriteBatch.stop();
            b.blendModeManager.setBlendMode(this.blendMode);
            this._mask && b.maskManager.pushMask(this._mask, b);
            this._filters && b.filterManager.pushFilter(this._filterBlock);
            if (this.blendMode !== b.spriteBatch.currentBlendMode) {
                b.spriteBatch.currentBlendMode = this.blendMode;
                var d = a.blendModesWebGL[b.spriteBatch.currentBlendMode];
                b.spriteBatch.gl.blendFunc(d[0], d[1])
            }
            a.WebGLGraphics.renderGraphics(this, b);
            if (this.children.length) {
                b.spriteBatch.start();
                for (var d = 0,
                c = this.children.length; d < c; d++) this.children[d]._renderWebGL(b);
                b.spriteBatch.stop()
            }
            this._filters && b.filterManager.popFilter();
            this._mask && b.maskManager.popMask(this.mask, b);
            b.drawCount++;
            b.spriteBatch.start()
        }
    };
    a.Graphics.prototype._renderCanvas = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha && !0 !== this.isMask) {
            var d = b.context,
            c = this.worldTransform;
            this.blendMode !== b.currentBlendMode && (b.currentBlendMode = this.blendMode, d.globalCompositeOperation = a.blendModesCanvas[b.currentBlendMode]);
            this._mask && b.maskManager.pushMask(this._mask, b.context);
            d.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty);
            a.CanvasGraphics.renderGraphics(this, d);
            d = 0;
            for (c = this.children.length; d < c; d++) this.children[d]._renderCanvas(b);
            this._mask && b.maskManager.popMask(b.context)
        }
    };
    a.Graphics.prototype.getBounds = function(b) {
        this.bounds || this.updateBounds();
        var a = this.bounds.x,
        c = this.bounds.width + this.bounds.x,
        e = this.bounds.y,
        f = this.bounds.height + this.bounds.y;
        b = b || this.worldTransform;
        var h = b.a,
        k = b.c,
        l = b.b,
        n = b.d,
        p = b.tx,
        q = b.ty,
        y = h * c + l * f + p,
        s = n * f + k * c + q;
        b = h * a + l * f + p;
        var f = n * f + k * a + q,
        u = h * a + l * e + p,
        a = n * e + k * a + q,
        h = h * c + l * e + p,
        c = n * e + k * c + q,
        e = y,
        k = s,
        y = b < y ? b: y,
        y = u < y ? u: y,
        y = h < y ? h: y,
        s = f < s ? f: s,
        s = a < s ? a: s,
        s = c < s ? c: s,
        e = b > e ? b: e,
        e = u > e ? u: e,
        k = f > k ? f: k,
        k = a > k ? a: k;
        b = this._bounds;
        b.x = y;
        b.width = (h > e ? h: e) - y;
        b.y = s;
        b.height = (c > k ? c: k) - s;
        return b
    };
    a.Graphics.prototype.updateBounds = function() {
        for (var b = Infinity,
        d = -Infinity,
        c = Infinity,
        e = -Infinity,
        f, h, k, l, n, p = 0; p < this.graphicsData.length; p++) if (f = this.graphicsData[p], h = f.type, n = f.lineWidth, f = f.points, h === a.Graphics.RECT) h = f[0] - n / 2,
        k = f[1] - n / 2,
        l = f[2] + n,
        n = f[3] + n,
        b = h < b ? h: b,
        d = h + l > d ? h + l: d,
        c = k < c ? h: c,
        e = k + n > e ? k + n: e;
        else if (h === a.Graphics.CIRC || h === a.Graphics.ELIP) h = f[0],
        k = f[1],
        l = f[2] + n / 2,
        n = f[3] + n / 2,
        b = h - l < b ? h - l: b,
        d = h + l > d ? h + l: d,
        c = k - n < c ? k - n: c,
        e = k + n > e ? k + n: e;
        else for (l = 0; l < f.length; l += 2) h = f[l],
        k = f[l + 1],
        b = h - n < b ? h - n: b,
        d = h + n > d ? h + n: d,
        c = k - n < c ? k - n: c,
        e = k + n > e ? k + n: e;
        p = this.boundsPadding;
        this.bounds = new a.Rectangle(b - p, c - p, d - b + 2 * p, e - c + 2 * p)
    };
    a.Graphics.prototype._generateCachedSprite = function() {
        var b = this.getLocalBounds();
        if (this._cachedSprite) this._cachedSprite.buffer.resize(b.width, b.height);
        else {
            var d = new a.CanvasBuffer(b.width, b.height),
            c = a.Texture.fromCanvas(d.canvas);
            this._cachedSprite = new a.Sprite(c);
            this._cachedSprite.buffer = d;
            this._cachedSprite.worldTransform = this.worldTransform
        }
        this._cachedSprite.anchor.x = -(b.x / b.width);
        this._cachedSprite.anchor.y = -(b.y / b.height);
        this._cachedSprite.buffer.context.translate( - b.x, -b.y);
        a.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);
        this._cachedSprite.alpha = this.alpha
    };
    a.Graphics.prototype.destroyCachedSprite = function() {
        this._cachedSprite.texture.destroy(!0);
        this._cachedSprite = null
    };
    a.Graphics.POLY = 0;
    a.Graphics.RECT = 1;
    a.Graphics.CIRC = 2;
    a.Graphics.ELIP = 3;
    a.Graphics.RREC = 4;
    a.Strip = function(b) {
        a.DisplayObjectContainer.call(this);
        this.texture = b;
        this.uvs = new a.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]);
        this.verticies = new a.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
        this.colors = new a.Float32Array([1, 1, 1, 1]);
        this.indices = new a.Uint16Array([0, 1, 2, 3]);
        this.dirty = !0
    };
    a.Strip.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.Strip.prototype.constructor = a.Strip;
    a.Strip.prototype._renderWebGL = function(b) { ! this.visible || 0 >= this.alpha || (b.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(b), b.shaderManager.setShader(b.shaderManager.stripShader), this._renderStrip(b), b.spriteBatch.start())
    };
    a.Strip.prototype._initWebGL = function(b) {
        b = b.gl;
        this._vertexBuffer = b.createBuffer();
        this._indexBuffer = b.createBuffer();
        this._uvBuffer = b.createBuffer();
        this._colorBuffer = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, this._vertexBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.verticies, b.DYNAMIC_DRAW);
        b.bindBuffer(b.ARRAY_BUFFER, this._uvBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.uvs, b.STATIC_DRAW);
        b.bindBuffer(b.ARRAY_BUFFER, this._colorBuffer);
        b.bufferData(b.ARRAY_BUFFER, this.colors, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW)
    };
    a.Strip.prototype._renderStrip = function(b) {
        var d = b.gl,
        c = b.projection,
        e = b.offset;
        b = b.shaderManager.stripShader;
        d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA);
        d.uniformMatrix3fv(b.translationMatrix, !1, this.worldTransform.toArray(!0));
        d.uniform2f(b.projectionVector, c.x, -c.y);
        d.uniform2f(b.offsetVector, -e.x, -e.y);
        d.uniform1f(b.alpha, 1);
        this.dirty ? (this.dirty = !1, d.bindBuffer(d.ARRAY_BUFFER, this._vertexBuffer), d.bufferData(d.ARRAY_BUFFER, this.verticies, d.STATIC_DRAW), d.vertexAttribPointer(b.aVertexPosition, 2, d.FLOAT, !1, 0, 0), d.bindBuffer(d.ARRAY_BUFFER, this._uvBuffer), d.bufferData(d.ARRAY_BUFFER, this.uvs, d.STATIC_DRAW), d.vertexAttribPointer(b.aTextureCoord, 2, d.FLOAT, !1, 0, 0), d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, this.texture.baseTexture._glTextures[d.id] || a.createWebGLTexture(this.texture.baseTexture, d)), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this._indexBuffer), d.bufferData(d.ELEMENT_ARRAY_BUFFER, this.indices, d.STATIC_DRAW)) : (d.bindBuffer(d.ARRAY_BUFFER, this._vertexBuffer), d.bufferSubData(d.ARRAY_BUFFER, 0, this.verticies), d.vertexAttribPointer(b.aVertexPosition, 2, d.FLOAT, !1, 0, 0), d.bindBuffer(d.ARRAY_BUFFER, this._uvBuffer), d.vertexAttribPointer(b.aTextureCoord, 2, d.FLOAT, !1, 0, 0), d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, this.texture.baseTexture._glTextures[d.id] || a.createWebGLTexture(this.texture.baseTexture, d)), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this._indexBuffer));
        d.drawElements(d.TRIANGLE_STRIP, this.indices.length, d.UNSIGNED_SHORT, 0)
    };
    a.Strip.prototype._renderCanvas = function(b) {
        var a = b.context,
        c = this.worldTransform;
        b.roundPixels ? a.setTransform(c.a, c.c, c.b, c.d, c.tx | 0, c.ty | 0) : a.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty);
        b = this.verticies;
        var c = this.uvs,
        e = b.length / 2;
        this.count++;
        for (var f = 0; f < e - 2; f++) {
            var h = 2 * f,
            k = b[h],
            l = b[h + 2],
            n = b[h + 4],
            p = b[h + 1],
            q = b[h + 3],
            y = b[h + 5],
            s = (k + l + n) / 3,
            u = (p + q + y) / 3,
            z = k - s,
            A = p - u,
            x = Math.sqrt(z * z + A * A),
            k = s + z / x * (x + 3),
            p = u + A / x * (x + 3),
            z = l - s,
            A = q - u,
            x = Math.sqrt(z * z + A * A),
            l = s + z / x * (x + 3),
            q = u + A / x * (x + 3),
            z = n - s,
            A = y - u,
            x = Math.sqrt(z * z + A * A),
            n = s + z / x * (x + 3),
            y = u + A / x * (x + 3),
            s = c[h] * this.texture.width,
            u = c[h + 2] * this.texture.width,
            z = c[h + 4] * this.texture.width,
            A = c[h + 1] * this.texture.height,
            x = c[h + 3] * this.texture.height,
            h = c[h + 5] * this.texture.height;
            a.save();
            a.beginPath();
            a.moveTo(k, p);
            a.lineTo(l, q);
            a.lineTo(n, y);
            a.closePath();
            a.clip();
            var D = s * x + A * z + u * h - x * z - A * u - s * h;
            a.transform((k * x + A * n + l * h - x * n - A * l - k * h) / D, (p * x + A * y + q * h - x * y - A * q - p * h) / D, (s * l + k * z + u * n - l * z - k * u - s * n) / D, (s * q + p * z + u * y - q * z - p * u - s * y) / D, (s * x * n + A * l * z + k * u * h - k * x * z - A * u * n - s * l * h) / D, (s * x * y + A * q * z + p * u * h - p * x * z - A * u * y - s * q * h) / D);
            a.drawImage(this.texture.baseTexture.source, 0, 0);
            a.restore()
        }
    };
    a.Strip.prototype.onTextureUpdate = function() {
        this.updateFrame = !0
    };
    a.Rope = function(b, d) {
        a.Strip.call(this, b);
        this.points = d;
        this.verticies = new a.Float32Array(4 * d.length);
        this.uvs = new a.Float32Array(4 * d.length);
        this.colors = new a.Float32Array(2 * d.length);
        this.indices = new a.Uint16Array(2 * d.length);
        this.refresh()
    };
    a.Rope.prototype = Object.create(a.Strip.prototype);
    a.Rope.prototype.constructor = a.Rope;
    a.Rope.prototype.refresh = function() {
        var b = this.points;
        if (! (1 > b.length)) {
            var a = this.uvs,
            c = this.indices,
            e = this.colors;
            this.count -= 0.2;
            a[0] = 0;
            a[1] = 0;
            a[2] = 0;
            a[3] = 1;
            e[0] = 1;
            e[1] = 1;
            c[0] = 0;
            c[1] = 1;
            for (var b = b.length,
            f, h, k = 1; k < b; k++) f = 4 * k,
            h = k / (b - 1),
            a[f] = h,
            a[f + 1] = 0,
            a[f + 2] = h,
            a[f + 3] = 1,
            f = 2 * k,
            e[f] = 1,
            e[f + 1] = 1,
            f = 2 * k,
            c[f] = f,
            c[f + 1] = f + 1
        }
    };
    a.Rope.prototype.updateTransform = function() {
        var b = this.points;
        if (! (1 > b.length)) {
            var d = b[0],
            c,
            e = c = 0;
            this.count -= 0.2;
            for (var f = this.verticies,
            h = b.length,
            k, l, n, p = 0; p < h; p++) k = b[p],
            l = 4 * p,
            c = p < b.length - 1 ? b[p + 1] : k,
            e = -(c.x - d.x),
            c = c.y - d.y,
            d = Math.sqrt(c * c + e * e),
            n = this.texture.height / 2,
            c /= d,
            e /= d,
            c *= n,
            e *= n,
            f[l] = k.x + c,
            f[l + 1] = k.y + e,
            f[l + 2] = k.x - c,
            f[l + 3] = k.y - e,
            d = k;
            a.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
    };
    a.Rope.prototype.setTexture = function(b) {
        this.texture = b
    };
    a.TilingSprite = function(b, d, c) {
        a.Sprite.call(this, b);
        this.width = d || 100;
        this.height = c || 100;
        this.tileScale = new a.Point(1, 1);
        this.tileScaleOffset = new a.Point(1, 1);
        this.tilePosition = new a.Point(0, 0);
        this.renderable = !0;
        this.tint = 16777215;
        this.blendMode = a.blendModes.NORMAL
    };
    a.TilingSprite.prototype = Object.create(a.Sprite.prototype);
    a.TilingSprite.prototype.constructor = a.TilingSprite;
    Object.defineProperty(a.TilingSprite.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(b) {
            this._width = b
        }
    });
    Object.defineProperty(a.TilingSprite.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(b) {
            this._height = b
        }
    });
    a.TilingSprite.prototype.setTexture = function(b) {
        this.texture !== b && (this.texture = b, this.refreshTexture = !0, this.cachedTint = 16777215)
    };
    a.TilingSprite.prototype._renderWebGL = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha) {
            var d, c;
            this.mask && (b.spriteBatch.stop(), b.maskManager.pushMask(this.mask, b), b.spriteBatch.start());
            this.filters && (b.spriteBatch.flush(), b.filterManager.pushFilter(this._filterBlock)); ! this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (a.updateWebGLTexture(this.tilingTexture.baseTexture, b.gl), this.tilingTexture.needsUpdate = !1)) : b.spriteBatch.renderTilingSprite(this);
            d = 0;
            for (c = this.children.length; d < c; d++) this.children[d]._renderWebGL(b);
            b.spriteBatch.stop();
            this.filters && b.filterManager.popFilter();
            this.mask && b.maskManager.popMask(b);
            b.spriteBatch.start()
        }
    };
    a.TilingSprite.prototype._renderCanvas = function(b) {
        if (!1 !== this.visible && 0 !== this.alpha) {
            var d = b.context;
            this._mask && b.maskManager.pushMask(this._mask, d);
            d.globalAlpha = this.worldAlpha;
            var c = this.worldTransform;
            d.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty);
            if (!this.__tilePattern || this.refreshTexture) if (this.generateTilingTexture(!1), this.tilingTexture) this.__tilePattern = d.createPattern(this.tilingTexture.baseTexture.source, "repeat");
            else return;
            this.blendMode !== b.currentBlendMode && (b.currentBlendMode = this.blendMode, d.globalCompositeOperation = a.blendModesCanvas[b.currentBlendMode]);
            var c = this.tilePosition,
            e = this.tileScale;
            c.x %= this.tilingTexture.baseTexture.width;
            c.y %= this.tilingTexture.baseTexture.height;
            d.scale(e.x, e.y);
            d.translate(c.x, c.y);
            d.fillStyle = this.__tilePattern;
            d.fillRect( - c.x + this.anchor.x * -this._width, -c.y + this.anchor.y * -this._height, this._width / e.x, this._height / e.y);
            d.scale(1 / e.x, 1 / e.y);
            d.translate( - c.x, -c.y);
            this._mask && b.maskManager.popMask(b.context);
            d = 0;
            for (c = this.children.length; d < c; d++) this.children[d]._renderCanvas(b)
        }
    };
    a.TilingSprite.prototype.getBounds = function() {
        var b = this._width,
        a = this._height,
        c = b * (1 - this.anchor.x),
        e = b * -this.anchor.x,
        f = a * (1 - this.anchor.y),
        h = a * -this.anchor.y,
        a = this.worldTransform,
        k = a.a,
        l = a.c,
        n = a.b,
        p = a.d,
        q = a.tx,
        y = a.ty,
        a = k * e + n * h + q,
        b = p * h + l * e + y,
        s = k * c + n * h + q,
        h = p * h + l * c + y,
        u = k * c + n * f + q,
        c = p * f + l * c + y,
        k = k * e + n * f + q,
        e = p * f + l * e + y,
        l = f = -Infinity,
        n = p = Infinity,
        p = a < p ? a: p,
        p = s < p ? s: p,
        p = u < p ? u: p,
        p = k < p ? k: p,
        n = b < n ? b: n,
        n = h < n ? h: n,
        n = c < n ? c: n,
        n = e < n ? e: n,
        f = a > f ? a: f,
        f = s > f ? s: f,
        f = u > f ? u: f,
        l = b > l ? b: l,
        l = h > l ? h: l,
        l = c > l ? c: l,
        a = this._bounds;
        a.x = p;
        a.width = (k > f ? k: f) - p;
        a.y = n;
        a.height = (e > l ? e: l) - n;
        return this._currentBounds = a
    };
    a.TilingSprite.prototype.generateTilingTexture = function(b) {
        if (this.texture.baseTexture.hasLoaded) {
            var d = this.texture,
            c = d.frame,
            e, f, h = c.width !== d.baseTexture.width || c.height !== d.baseTexture.height,
            k = !1;
            if (b) {
                if (e = a.getNextPowerOfTwo(c.width), f = a.getNextPowerOfTwo(c.height), c.width !== e || c.height !== f) k = !0
            } else h && (e = c.width, f = c.height, k = !0);
            k ? (this.tilingTexture && this.tilingTexture.isTiling ? (b = this.tilingTexture.canvasBuffer, b.resize(e, f), this.tilingTexture.baseTexture.width = e, this.tilingTexture.baseTexture.height = f, this.tilingTexture.needsUpdate = !0) : (b = new a.CanvasBuffer(e, f), this.tilingTexture = a.Texture.fromCanvas(b.canvas), this.tilingTexture.canvasBuffer = b, this.tilingTexture.isTiling = !0), b.context.drawImage(d.baseTexture.source, d.crop.x, d.crop.y, d.crop.width, d.crop.height, 0, 0, e, f), this.tileScaleOffset.x = c.width / e, this.tileScaleOffset.y = c.height / f) : (this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = d);
            this.refreshTexture = !1;
            this.tilingTexture.baseTexture._powerOf2 = !0
        }
    };
    var p = {
        BoneData: function(b, a) {
            this.name = b;
            this.parent = a
        }
    };
    p.BoneData.prototype = {
        length: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1
    };
    p.SlotData = function(b, a) {
        this.name = b;
        this.boneData = a
    };
    p.SlotData.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        attachmentName: null
    };
    p.Bone = function(b, a) {
        this.data = b;
        this.parent = a;
        this.setToSetupPose()
    };
    p.Bone.yDown = !1;
    p.Bone.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        m00: 0,
        m01: 0,
        worldX: 0,
        m10: 0,
        m11: 0,
        worldY: 0,
        worldRotation: 0,
        worldScaleX: 1,
        worldScaleY: 1,
        updateWorldTransform: function(b, a) {
            var c = this.parent;
            null != c ? (this.worldX = this.x * c.m00 + this.y * c.m01 + c.worldX, this.worldY = this.x * c.m10 + this.y * c.m11 + c.worldY, this.worldScaleX = c.worldScaleX * this.scaleX, this.worldScaleY = c.worldScaleY * this.scaleY, this.worldRotation = c.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
            var e = this.worldRotation * Math.PI / 180,
            c = Math.cos(e),
            e = Math.sin(e);
            this.m00 = c * this.worldScaleX;
            this.m10 = e * this.worldScaleX;
            this.m01 = -e * this.worldScaleY;
            this.m11 = c * this.worldScaleY;
            b && (this.m00 = -this.m00, this.m01 = -this.m01);
            a && (this.m10 = -this.m10, this.m11 = -this.m11);
            p.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
        },
        setToSetupPose: function() {
            var b = this.data;
            this.x = b.x;
            this.y = b.y;
            this.rotation = b.rotation;
            this.scaleX = b.scaleX;
            this.scaleY = b.scaleY
        }
    };
    p.Slot = function(b, a, c) {
        this.data = b;
        this.skeleton = a;
        this.bone = c;
        this.setToSetupPose()
    };
    p.Slot.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        _attachmentTime: 0,
        attachment: null,
        setAttachment: function(b) {
            this.attachment = b;
            this._attachmentTime = this.skeleton.time
        },
        setAttachmentTime: function(b) {
            this._attachmentTime = this.skeleton.time - b
        },
        getAttachmentTime: function() {
            return this.skeleton.time - this._attachmentTime
        },
        setToSetupPose: function() {
            var b = this.data;
            this.r = b.r;
            this.g = b.g;
            this.b = b.b;
            this.a = b.a;
            for (var a = this.skeleton.data.slots,
            c = 0,
            e = a.length; c < e; c++) if (a[c] == b) {
                this.setAttachment(b.attachmentName ? this.skeleton.getAttachmentBySlotIndex(c, b.attachmentName) : null);
                break
            }
        }
    };
    p.Skin = function(b) {
        this.name = b;
        this.attachments = {}
    };
    p.Skin.prototype = {
        addAttachment: function(b, a, c) {
            this.attachments[b + ":" + a] = c
        },
        getAttachment: function(b, a) {
            return this.attachments[b + ":" + a]
        },
        _attachAll: function(b, a) {
            for (var c in a.attachments) {
                var e = c.indexOf(":"),
                f = parseInt(c.substring(0, e), 10),
                h = c.substring(e + 1),
                e = b.slots[f];
                e.attachment && e.attachment.name == h && (f = this.getAttachment(f, h)) && e.setAttachment(f)
            }
        }
    };
    p.Animation = function(b, a, c) {
        this.name = b;
        this.timelines = a;
        this.duration = c
    };
    p.Animation.prototype = {
        apply: function(b, a, c) {
            c && this.duration && (a %= this.duration);
            c = this.timelines;
            for (var e = 0,
            f = c.length; e < f; e++) c[e].apply(b, a, 1)
        },
        mix: function(b, a, c, e) {
            c && this.duration && (a %= this.duration);
            c = this.timelines;
            for (var f = 0,
            h = c.length; f < h; f++) c[f].apply(b, a, e)
        }
    };
    p.binarySearch = function(b, a, c) {
        var e = 0,
        f = Math.floor(b.length / c) - 2;
        if (!f) return c;
        for (var h = f >>> 1;;) {
            b[(h + 1) * c] <= a ? e = h + 1 : f = h;
            if (e == f) return (e + 1) * c;
            h = e + f >>> 1
        }
    };
    p.linearSearch = function(b, a, c) {
        for (var e = 0,
        f = b.length - c; e <= f; e += c) if (b[e] > a) return e;
        return - 1
    };
    p.Curves = function(b) {
        this.curves = [];
        this.curves.length = 6 * (b - 1)
    };
    p.Curves.prototype = {
        setLinear: function(b) {
            this.curves[6 * b] = 0
        },
        setStepped: function(b) {
            this.curves[6 * b] = -1
        },
        setCurve: function(b, a, c, e, f) {
            var h = 0.1 * 0.1,
            k = 0.1 * h,
            l = 3 * 0.1,
            n = 3 * h,
            h = 6 * h,
            p = 6 * k,
            q = 2 * -a + e,
            y = 2 * -c + f;
            e = 3 * (a - e) + 1;
            f = 3 * (c - f) + 1;
            b *= 6;
            var s = this.curves;
            s[b] = a * l + q * n + e * k;
            s[b + 1] = c * l + y * n + f * k;
            s[b + 2] = q * h + e * p;
            s[b + 3] = y * h + f * p;
            s[b + 4] = e * p;
            s[b + 5] = f * p
        },
        getCurvePercent: function(b, a) {
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            var c = 6 * b,
            e = this.curves,
            f = e[c];
            if (!f) return a;
            if ( - 1 == f) return 0;
            for (var h = e[c + 1], k = e[c + 2], l = e[c + 3], n = e[c + 4], p = e[c + 5], c = f, e = h, q = 8;;) {
                if (c >= a) return f = c - f,
                h = e - h,
                h + (e - h) * (a - f) / (c - f);
                if (!q) break;
                q--;
                f += k;
                h += l;
                k += n;
                l += p;
                c += f;
                e += h
            }
            return e + (1 - e) * (a - c) / (1 - c)
        }
    };
    p.RotateTimeline = function(b) {
        this.curves = new p.Curves(b);
        this.frames = [];
        this.frames.length = 2 * b
    };
    p.RotateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 2
        },
        setFrame: function(b, a, c) {
            b *= 2;
            this.frames[b] = a;
            this.frames[b + 1] = c
        },
        apply: function(b, a, c) {
            var e = this.frames;
            if (! (a < e[0])) {
                b = b.bones[this.boneIndex];
                if (a >= e[e.length - 2]) e = b.data.rotation + e[e.length - 1] - b.rotation;
                else {
                    var f = p.binarySearch(e, a, 2),
                    h = e[f - 1],
                    k = e[f];
                    a = 1 - (a - k) / (e[f - 2] - k);
                    a = this.curves.getCurvePercent(f / 2 - 1, a);
                    for (e = e[f + 1] - h; 180 < e;) e -= 360;
                    for (; - 180 > e;) e += 360;
                    e = b.data.rotation + (h + e * a) - b.rotation
                }
                for (; 180 < e;) e -= 360;
                for (; - 180 > e;) e += 360;
                b.rotation += e * c
            }
        }
    };
    p.TranslateTimeline = function(b) {
        this.curves = new p.Curves(b);
        this.frames = [];
        this.frames.length = 3 * b
    };
    p.TranslateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 3
        },
        setFrame: function(b, a, c, e) {
            b *= 3;
            this.frames[b] = a;
            this.frames[b + 1] = c;
            this.frames[b + 2] = e
        },
        apply: function(b, a, c) {
            var e = this.frames;
            if (! (a < e[0])) if (b = b.bones[this.boneIndex], a >= e[e.length - 3]) b.x += (b.data.x + e[e.length - 2] - b.x) * c,
            b.y += (b.data.y + e[e.length - 1] - b.y) * c;
            else {
                var f = p.binarySearch(e, a, 3),
                h = e[f - 2],
                k = e[f - 1],
                l = e[f];
                a = 1 - (a - l) / (e[f + -3] - l);
                a = this.curves.getCurvePercent(f / 3 - 1, a);
                b.x += (b.data.x + h + (e[f + 1] - h) * a - b.x) * c;
                b.y += (b.data.y + k + (e[f + 2] - k) * a - b.y) * c
            }
        }
    };
    p.ScaleTimeline = function(b) {
        this.curves = new p.Curves(b);
        this.frames = [];
        this.frames.length = 3 * b
    };
    p.ScaleTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 3
        },
        setFrame: function(b, a, c, e) {
            b *= 3;
            this.frames[b] = a;
            this.frames[b + 1] = c;
            this.frames[b + 2] = e
        },
        apply: function(b, a, c) {
            var e = this.frames;
            if (! (a < e[0])) if (b = b.bones[this.boneIndex], a >= e[e.length - 3]) b.scaleX += (b.data.scaleX - 1 + e[e.length - 2] - b.scaleX) * c,
            b.scaleY += (b.data.scaleY - 1 + e[e.length - 1] - b.scaleY) * c;
            else {
                var f = p.binarySearch(e, a, 3),
                h = e[f - 2],
                k = e[f - 1],
                l = e[f];
                a = 1 - (a - l) / (e[f + -3] - l);
                a = this.curves.getCurvePercent(f / 3 - 1, a);
                b.scaleX += (b.data.scaleX - 1 + h + (e[f + 1] - h) * a - b.scaleX) * c;
                b.scaleY += (b.data.scaleY - 1 + k + (e[f + 2] - k) * a - b.scaleY) * c
            }
        }
    };
    p.ColorTimeline = function(b) {
        this.curves = new p.Curves(b);
        this.frames = [];
        this.frames.length = 5 * b
    };
    p.ColorTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 5
        },
        setFrame: function(b, a, c, e, f, h) {
            b *= 5;
            this.frames[b] = a;
            this.frames[b + 1] = c;
            this.frames[b + 2] = e;
            this.frames[b + 3] = f;
            this.frames[b + 4] = h
        },
        apply: function(b, a, c) {
            var e = this.frames;
            if (! (a < e[0])) if (b = b.slots[this.slotIndex], a >= e[e.length - 5]) c = e.length - 1,
            b.r = e[c - 3],
            b.g = e[c - 2],
            b.b = e[c - 1],
            b.a = e[c];
            else {
                var f = p.binarySearch(e, a, 5),
                h = e[f - 4],
                k = e[f - 3],
                l = e[f - 2],
                n = e[f - 1],
                v = e[f];
                a = 1 - (a - v) / (e[f - 5] - v);
                a = this.curves.getCurvePercent(f / 5 - 1, a);
                h += (e[f + 1] - h) * a;
                k += (e[f + 2] - k) * a;
                l += (e[f + 3] - l) * a;
                e = n + (e[f + 4] - n) * a;
                1 > c ? (b.r += (h - b.r) * c, b.g += (k - b.g) * c, b.b += (l - b.b) * c, b.a += (e - b.a) * c) : (b.r = h, b.g = k, b.b = l, b.a = e)
            }
        }
    };
    p.AttachmentTimeline = function(b) {
        this.curves = new p.Curves(b);
        this.frames = [];
        this.frames.length = b;
        this.attachmentNames = [];
        this.attachmentNames.length = b
    };
    p.AttachmentTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function() {
            return this.frames.length
        },
        setFrame: function(b, a, c) {
            this.frames[b] = a;
            this.attachmentNames[b] = c
        },
        apply: function(b, a, c) {
            c = this.frames;
            a < c[0] || (a = a >= c[c.length - 1] ? c.length - 1 : p.binarySearch(c, a, 1) - 1, a = this.attachmentNames[a], b.slots[this.slotIndex].setAttachment(a ? b.getAttachmentBySlotIndex(this.slotIndex, a) : null))
        }
    };
    p.SkeletonData = function() {
        this.bones = [];
        this.slots = [];
        this.skins = [];
        this.animations = []
    };
    p.SkeletonData.prototype = {
        defaultSkin: null,
        findBone: function(b) {
            for (var a = this.bones,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return a[c];
            return null
        },
        findBoneIndex: function(b) {
            for (var a = this.bones,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return c;
            return - 1
        },
        findSlot: function(b) {
            for (var a = this.slots,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return slot[c];
            return null
        },
        findSlotIndex: function(b) {
            for (var a = this.slots,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return c;
            return - 1
        },
        findSkin: function(b) {
            for (var a = this.skins,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return a[c];
            return null
        },
        findAnimation: function(b) {
            for (var a = this.animations,
            c = 0,
            e = a.length; c < e; c++) if (a[c].name == b) return a[c];
            return null
        }
    };
    p.Skeleton = function(b) {
        this.data = b;
        this.bones = [];
        for (var a = 0,
        c = b.bones.length; a < c; a++) {
            var e = b.bones[a],
            f = e.parent ? this.bones[b.bones.indexOf(e.parent)] : null;
            this.bones.push(new p.Bone(e, f))
        }
        this.slots = [];
        this.drawOrder = [];
        a = 0;
        for (c = b.slots.length; a < c; a++) e = b.slots[a],
        f = this.bones[b.bones.indexOf(e.boneData)],
        e = new p.Slot(e, this, f),
        this.slots.push(e),
        this.drawOrder.push(e)
    };
    p.Skeleton.prototype = {
        x: 0,
        y: 0,
        skin: null,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        time: 0,
        flipX: !1,
        flipY: !1,
        updateWorldTransform: function() {
            for (var b = this.flipX,
            a = this.flipY,
            c = this.bones,
            e = 0,
            f = c.length; e < f; e++) c[e].updateWorldTransform(b, a)
        },
        setToSetupPose: function() {
            this.setBonesToSetupPose();
            this.setSlotsToSetupPose()
        },
        setBonesToSetupPose: function() {
            for (var b = this.bones,
            a = 0,
            c = b.length; a < c; a++) b[a].setToSetupPose()
        },
        setSlotsToSetupPose: function() {
            for (var b = this.slots,
            a = 0,
            c = b.length; a < c; a++) b[a].setToSetupPose(a)
        },
        getRootBone: function() {
            return this.bones.length ? this.bones[0] : null
        },
        findBone: function(b) {
            for (var a = this.bones,
            c = 0,
            e = a.length; c < e; c++) if (a[c].data.name == b) return a[c];
            return null
        },
        findBoneIndex: function(b) {
            for (var a = this.bones,
            c = 0,
            e = a.length; c < e; c++) if (a[c].data.name == b) return c;
            return - 1
        },
        findSlot: function(b) {
            for (var a = this.slots,
            c = 0,
            e = a.length; c < e; c++) if (a[c].data.name == b) return a[c];
            return null
        },
        findSlotIndex: function(b) {
            for (var a = this.slots,
            c = 0,
            e = a.length; c < e; c++) if (a[c].data.name == b) return c;
            return - 1
        },
        setSkinByName: function(b) {
            var a = this.data.findSkin(b);
            if (!a) throw "Skin not found: " + b;
            this.setSkin(a)
        },
        setSkin: function(b) {
            this.skin && b && b._attachAll(this, this.skin);
            this.skin = b
        },
        getAttachmentBySlotName: function(b, a) {
            return this.getAttachmentBySlotIndex(this.data.findSlotIndex(b), a)
        },
        getAttachmentBySlotIndex: function(b, a) {
            if (this.skin) {
                var c = this.skin.getAttachment(b, a);
                if (c) return c
            }
            return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(b, a) : null
        },
        setAttachment: function(b, a) {
            for (var c = this.slots,
            e = 0,
            f = c.size; e < f; e++) {
                var h = c[e];
                if (h.data.name == b) {
                    c = null;
                    if (a && (c = this.getAttachment(e, a), null == c)) throw "Attachment not found: " + a + ", for slot: " + b;
                    h.setAttachment(c);
                    return
                }
            }
            throw "Slot not found: " + b;
        },
        update: function(b) {
            time += b
        }
    };
    p.AttachmentType = {
        region: 0
    };
    p.RegionAttachment = function() {
        this.offset = [];
        this.offset.length = 8;
        this.uvs = [];
        this.uvs.length = 8
    };
    p.RegionAttachment.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        width: 0,
        height: 0,
        rendererObject: null,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        setUVs: function(b, a, c, e, f) {
            var h = this.uvs;
            f ? (h[2] = b, h[3] = e, h[4] = b, h[5] = a, h[6] = c, h[7] = a, h[0] = c, h[1] = e) : (h[0] = b, h[1] = e, h[2] = b, h[3] = a, h[4] = c, h[5] = a, h[6] = c, h[7] = e)
        },
        updateOffset: function() {
            var b = this.width / this.regionOriginalWidth * this.scaleX,
            a = this.height / this.regionOriginalHeight * this.scaleY,
            c = -this.width / 2 * this.scaleX + this.regionOffsetX * b,
            e = -this.height / 2 * this.scaleY + this.regionOffsetY * a,
            f = c + this.regionWidth * b,
            b = e + this.regionHeight * a,
            a = this.rotation * Math.PI / 180,
            h = Math.cos(a),
            k = Math.sin(a),
            a = c * h + this.x,
            c = c * k,
            l = e * h + this.y,
            e = e * k,
            n = f * h + this.x,
            f = f * k,
            h = b * h + this.y,
            b = b * k,
            k = this.offset;
            k[0] = a - e;
            k[1] = l + c;
            k[2] = a - b;
            k[3] = h + c;
            k[4] = n - b;
            k[5] = h + f;
            k[6] = n - e;
            k[7] = l + f
        },
        computeVertices: function(b, a, c, e) {
            b += c.worldX;
            a += c.worldY;
            var f = c.m00,
            h = c.m01,
            k = c.m10;
            c = c.m11;
            var l = this.offset;
            e[0] = l[0] * f + l[1] * h + b;
            e[1] = l[0] * k + l[1] * c + a;
            e[2] = l[2] * f + l[3] * h + b;
            e[3] = l[2] * k + l[3] * c + a;
            e[4] = l[4] * f + l[5] * h + b;
            e[5] = l[4] * k + l[5] * c + a;
            e[6] = l[6] * f + l[7] * h + b;
            e[7] = l[6] * k + l[7] * c + a
        }
    };
    p.AnimationStateData = function(b) {
        this.skeletonData = b;
        this.animationToMixTime = {}
    };
    p.AnimationStateData.prototype = {
        defaultMix: 0,
        setMixByName: function(b, a, c) {
            var e = this.skeletonData.findAnimation(b);
            if (!e) throw "Animation not found: " + b;
            b = this.skeletonData.findAnimation(a);
            if (!b) throw "Animation not found: " + a;
            this.setMix(e, b, c)
        },
        setMix: function(b, a, c) {
            this.animationToMixTime[b.name + ":" + a.name] = c
        },
        getMix: function(b, a) {
            var c = this.animationToMixTime[b.name + ":" + a.name];
            return c ? c: this.defaultMix
        }
    };
    p.AnimationState = function(b) {
        this.data = b;
        this.queue = []
    };
    p.AnimationState.prototype = {
        animationSpeed: 1,
        current: null,
        previous: null,
        currentTime: 0,
        previousTime: 0,
        currentLoop: !1,
        previousLoop: !1,
        mixTime: 0,
        mixDuration: 0,
        update: function(b) {
            this.currentTime += b * this.animationSpeed;
            this.previousTime += b;
            this.mixTime += b;
            0 < this.queue.length && (b = this.queue[0], this.currentTime >= b.delay && (this._setAnimation(b.animation, b.loop), this.queue.shift()))
        },
        apply: function(b) {
            if (this.current) if (this.previous) {
                this.previous.apply(b, this.previousTime, this.previousLoop);
                var a = this.mixTime / this.mixDuration;
                1 <= a && (a = 1, this.previous = null);
                this.current.mix(b, this.currentTime, this.currentLoop, a)
            } else this.current.apply(b, this.currentTime, this.currentLoop)
        },
        clearAnimation: function() {
            this.current = this.previous = null;
            this.queue.length = 0
        },
        _setAnimation: function(a, d) {
            this.previous = null;
            a && this.current && (this.mixDuration = this.data.getMix(this.current, a), 0 < this.mixDuration && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop));
            this.current = a;
            this.currentLoop = d;
            this.currentTime = 0
        },
        setAnimationByName: function(a, d) {
            var c = this.data.skeletonData.findAnimation(a);
            if (!c) throw "Animation not found: " + a;
            this.setAnimation(c, d)
        },
        setAnimation: function(a, d) {
            this.queue.length = 0;
            this._setAnimation(a, d)
        },
        addAnimationByName: function(a, d, c) {
            var e = this.data.skeletonData.findAnimation(a);
            if (!e) throw "Animation not found: " + a;
            this.addAnimation(e, d, c)
        },
        addAnimation: function(a, d, c) {
            var e = {};
            e.animation = a;
            e.loop = d;
            if (!c || 0 >= c) d = this.queue.length ? this.queue[this.queue.length - 1].animation: this.current,
            c = null != d ? d.duration - this.data.getMix(d, a) + (c || 0) : 0;
            e.delay = c;
            this.queue.push(e)
        },
        isComplete: function() {
            return ! this.current || this.currentTime >= this.current.duration
        }
    };
    p.SkeletonJson = function(a) {
        this.attachmentLoader = a
    };
    p.SkeletonJson.prototype = {
        scale: 1,
        readSkeletonData: function(a) {
            for (var d = new p.SkeletonData,
            c, e = a.bones,
            f = 0,
            h = e.length; f < h; f++) {
                var k = e[f];
                c = null;
                if (k.parent && (c = d.findBone(k.parent), !c)) throw "Parent bone not found: " + k.parent;
                c = new p.BoneData(k.name, c);
                c.length = (k.length || 0) * this.scale;
                c.x = (k.x || 0) * this.scale;
                c.y = (k.y || 0) * this.scale;
                c.rotation = k.rotation || 0;
                c.scaleX = k.scaleX || 1;
                c.scaleY = k.scaleY || 1;
                d.bones.push(c)
            }
            e = a.slots;
            f = 0;
            for (h = e.length; f < h; f++) {
                k = e[f];
                c = d.findBone(k.bone);
                if (!c) throw "Slot bone not found: " + k.bone;
                c = new p.SlotData(k.name, c);
                var l = k.color;
                l && (c.r = p.SkeletonJson.toColor(l, 0), c.g = p.SkeletonJson.toColor(l, 1), c.b = p.SkeletonJson.toColor(l, 2), c.a = p.SkeletonJson.toColor(l, 3));
                c.attachmentName = k.attachment;
                d.slots.push(c)
            }
            var f = a.skins,
            n;
            for (n in f) if (f.hasOwnProperty(n)) {
                h = f[n];
                c = new p.Skin(n);
                for (var v in h) if (h.hasOwnProperty(v)) {
                    var e = d.findSlotIndex(v),
                    k = h[v],
                    q;
                    for (q in k) k.hasOwnProperty(q) && (l = this.readAttachment(c, q, k[q]), null != l && c.addAttachment(e, q, l))
                }
                d.skins.push(c);
                "default" == c.name && (d.defaultSkin = c)
            }
            a = a.animations;
            for (var y in a) a.hasOwnProperty(y) && this.readAnimation(y, a[y], d);
            return d
        },
        readAttachment: function(a, d, c) {
            d = c.name || d;
            a = p.AttachmentType[c.type || "region"];
            if (a == p.AttachmentType.region) return a = new p.RegionAttachment,
            a.x = (c.x || 0) * this.scale,
            a.y = (c.y || 0) * this.scale,
            a.scaleX = c.scaleX || 1,
            a.scaleY = c.scaleY || 1,
            a.rotation = c.rotation || 0,
            a.width = (c.width || 32) * this.scale,
            a.height = (c.height || 32) * this.scale,
            a.updateOffset(),
            a.rendererObject = {},
            a.rendererObject.name = d,
            a.rendererObject.scale = {},
            a.rendererObject.scale.x = a.scaleX,
            a.rendererObject.scale.y = a.scaleY,
            a.rendererObject.rotation = -a.rotation * Math.PI / 180,
            a;
            throw "Unknown attachment type: " + a;
        },
        readAnimation: function(a, d, c) {
            var e = [],
            f = 0,
            h,
            k,
            l,
            n,
            v,
            q,
            y,
            s = d.bones,
            u;
            for (u in s) if (s.hasOwnProperty(u)) {
                var z = c.findBoneIndex(u);
                if ( - 1 == z) throw "Bone not found: " + u;
                var A = s[u];
                for (l in A) if (A.hasOwnProperty(l)) if (v = A[l], "rotate" == l) {
                    k = new p.RotateTimeline(v.length);
                    k.boneIndex = z;
                    q = h = 0;
                    for (y = v.length; q < y; q++) n = v[q],
                    k.setFrame(h, n.time, n.angle),
                    p.SkeletonJson.readCurve(k, h, n),
                    h++;
                    e.push(k);
                    f = Math.max(f, k.frames[2 * k.getFrameCount() - 2])
                } else if ("translate" == l || "scale" == l) {
                    var x = 1;
                    "scale" == l ? k = new p.ScaleTimeline(v.length) : (k = new p.TranslateTimeline(v.length), x = this.scale);
                    k.boneIndex = z;
                    q = h = 0;
                    for (y = v.length; q < y; q++) n = v[q],
                    k.setFrame(h, n.time, (n.x || 0) * x, (n.y || 0) * x),
                    p.SkeletonJson.readCurve(k, h, n),
                    h++;
                    e.push(k);
                    f = Math.max(f, k.frames[3 * k.getFrameCount() - 3])
                } else throw "Invalid timeline type for a bone: " + l + " (" + u + ")";
            }
            d = d.slots;
            for (var D in d) if (d.hasOwnProperty(D)) for (l in s = d[D], u = c.findSlotIndex(D), s) if (s.hasOwnProperty(l)) if (v = s[l], "color" == l) {
                k = new p.ColorTimeline(v.length);
                k.slotIndex = u;
                q = h = 0;
                for (y = v.length; q < y; q++) {
                    n = v[q];
                    var B = n.color,
                    z = p.SkeletonJson.toColor(B, 0),
                    A = p.SkeletonJson.toColor(B, 1),
                    x = p.SkeletonJson.toColor(B, 2),
                    B = p.SkeletonJson.toColor(B, 3);
                    k.setFrame(h, n.time, z, A, x, B);
                    p.SkeletonJson.readCurve(k, h, n);
                    h++
                }
                e.push(k);
                f = Math.max(f, k.frames[5 * k.getFrameCount() - 5])
            } else if ("attachment" == l) {
                k = new p.AttachmentTimeline(v.length);
                k.slotIndex = u;
                q = h = 0;
                for (y = v.length; q < y; q++) n = v[q],
                k.setFrame(h++, n.time, n.name);
                e.push(k);
                f = Math.max(f, k.frames[k.getFrameCount() - 1])
            } else throw "Invalid timeline type for a slot: " + l + " (" + D + ")";
            c.animations.push(new p.Animation(a, e, f))
        }
    };
    p.SkeletonJson.readCurve = function(a, d, c) { (c = c.curve) && ("stepped" == c ? a.curves.setStepped(d) : c instanceof Array && a.curves.setCurve(d, c[0], c[1], c[2], c[3]))
    };
    p.SkeletonJson.toColor = function(a, d) {
        if (8 != a.length) throw "Color hexidecimal length must be 8, recieved: " + a;
        return parseInt(a.substr(2 * d, 2), 16) / 255
    };
    p.Atlas = function(a, d) {
        this.textureLoader = d;
        this.pages = [];
        this.regions = [];
        var c = new p.AtlasReader(a),
        e = [];
        e.length = 4;
        for (var f = null;;) {
            var h = c.readLine();
            if (null == h) break;
            h = c.trim(h);
            if (h.length) if (f) {
                var k = new p.AtlasRegion;
                k.name = h;
                k.page = f;
                k.rotate = "true" == c.readValue();
                c.readTuple(e);
                var h = parseInt(e[0], 10),
                l = parseInt(e[1], 10);
                c.readTuple(e);
                var n = parseInt(e[0], 10),
                v = parseInt(e[1], 10);
                k.u = h / f.width;
                k.v = l / f.height;
                k.rotate ? (k.u2 = (h + v) / f.width, k.v2 = (l + n) / f.height) : (k.u2 = (h + n) / f.width, k.v2 = (l + v) / f.height);
                k.x = h;
                k.y = l;
                k.width = Math.abs(n);
                k.height = Math.abs(v);
                4 == c.readTuple(e) && (k.splits = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10)], 4 == c.readTuple(e) && (k.pads = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10)], c.readTuple(e)));
                k.originalWidth = parseInt(e[0], 10);
                k.originalHeight = parseInt(e[1], 10);
                c.readTuple(e);
                k.offsetX = parseInt(e[0], 10);
                k.offsetY = parseInt(e[1], 10);
                k.index = parseInt(c.readValue(), 10);
                this.regions.push(k)
            } else f = new p.AtlasPage,
            f.name = h,
            f.format = p.Atlas.Format[c.readValue()],
            c.readTuple(e),
            f.minFilter = p.Atlas.TextureFilter[e[0]],
            f.magFilter = p.Atlas.TextureFilter[e[1]],
            k = c.readValue(),
            f.uWrap = p.Atlas.TextureWrap.clampToEdge,
            f.vWrap = p.Atlas.TextureWrap.clampToEdge,
            "x" == k ? f.uWrap = p.Atlas.TextureWrap.repeat: "y" == k ? f.vWrap = p.Atlas.TextureWrap.repeat: "xy" == k && (f.uWrap = f.vWrap = p.Atlas.TextureWrap.repeat),
            d.load(f, h),
            this.pages.push(f);
            else f = null
        }
    };
    p.Atlas.prototype = {
        findRegion: function(a) {
            for (var d = this.regions,
            c = 0,
            e = d.length; c < e; c++) if (d[c].name == a) return d[c];
            return null
        },
        dispose: function() {
            for (var a = this.pages,
            d = 0,
            c = a.length; d < c; d++) this.textureLoader.unload(a[d].rendererObject)
        },
        updateUVs: function(a) {
            for (var d = this.regions,
            c = 0,
            e = d.length; c < e; c++) {
                var f = d[c];
                f.page == a && (f.u = f.x / a.width, f.v = f.y / a.height, f.rotate ? (f.u2 = (f.x + f.height) / a.width, f.v2 = (f.y + f.width) / a.height) : (f.u2 = (f.x + f.width) / a.width, f.v2 = (f.y + f.height) / a.height))
            }
        }
    };
    p.Atlas.Format = {
        alpha: 0,
        intensity: 1,
        luminanceAlpha: 2,
        rgb565: 3,
        rgba4444: 4,
        rgb888: 5,
        rgba8888: 6
    };
    p.Atlas.TextureFilter = {
        nearest: 0,
        linear: 1,
        mipMap: 2,
        mipMapNearestNearest: 3,
        mipMapLinearNearest: 4,
        mipMapNearestLinear: 5,
        mipMapLinearLinear: 6
    };
    p.Atlas.TextureWrap = {
        mirroredRepeat: 0,
        clampToEdge: 1,
        repeat: 2
    };
    p.AtlasPage = function() {};
    p.AtlasPage.prototype = {
        name: null,
        format: null,
        minFilter: null,
        magFilter: null,
        uWrap: null,
        vWrap: null,
        rendererObject: null,
        width: 0,
        height: 0
    };
    p.AtlasRegion = function() {};
    p.AtlasRegion.prototype = {
        page: null,
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        u: 0,
        v: 0,
        u2: 0,
        v2: 0,
        offsetX: 0,
        offsetY: 0,
        originalWidth: 0,
        originalHeight: 0,
        index: 0,
        rotate: !1,
        splits: null,
        pads: null
    };
    p.AtlasReader = function(a) {
        this.lines = a.split(/\r\n|\r|\n/)
    };
    p.AtlasReader.prototype = {
        index: 0,
        trim: function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        },
        readLine: function() {
            return this.index >= this.lines.length ? null: this.lines[this.index++]
        },
        readValue: function() {
            var a = this.readLine(),
            d = a.indexOf(":");
            if ( - 1 == d) throw "Invalid line: " + a;
            return this.trim(a.substring(d + 1))
        },
        readTuple: function(a) {
            var d = this.readLine(),
            c = d.indexOf(":");
            if ( - 1 == c) throw "Invalid line: " + d;
            for (var e = 0,
            c = c + 1; 3 > e; e++) {
                var f = d.indexOf(",", c);
                if ( - 1 == f) {
                    if (!e) throw "Invalid line: " + d;
                    break
                }
                a[e] = this.trim(d.substr(c, f - c));
                c = f + 1
            }
            a[e] = this.trim(d.substring(c));
            return e + 1
        }
    };
    p.AtlasAttachmentLoader = function(a) {
        this.atlas = a
    };
    p.AtlasAttachmentLoader.prototype = {
        newAttachment: function(a, d, c) {
            switch (d) {
            case p.AttachmentType.region:
                a = this.atlas.findRegion(c);
                if (!a) throw "Region not found in atlas: " + c + " (" + d + ")";
                d = new p.RegionAttachment(c);
                d.rendererObject = a;
                d.setUVs(a.u, a.v, a.u2, a.v2, a.rotate);
                d.regionOffsetX = a.offsetX;
                d.regionOffsetY = a.offsetY;
                d.regionWidth = a.width;
                d.regionHeight = a.height;
                d.regionOriginalWidth = a.originalWidth;
                d.regionOriginalHeight = a.originalHeight;
                return d
            }
            throw "Unknown attachment type: " + d;
        }
    };
    p.Bone.yDown = !0;
    a.AnimCache = {};
    a.Spine = function(b) {
        a.DisplayObjectContainer.call(this);
        this.spineData = a.AnimCache[b];
        if (!this.spineData) throw Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + b);
        this.skeleton = new p.Skeleton(this.spineData);
        this.skeleton.updateWorldTransform();
        this.stateData = new p.AnimationStateData(this.spineData);
        this.state = new p.AnimationState(this.stateData);
        this.slotContainers = [];
        b = 0;
        for (var d = this.skeleton.drawOrder.length; b < d; b++) {
            var c = this.skeleton.drawOrder[b],
            e = c.attachment,
            f = new a.DisplayObjectContainer;
            this.slotContainers.push(f);
            this.addChild(f);
            if (e instanceof p.RegionAttachment) {
                var h = e.rendererObject.name,
                e = this.createSprite(c, e.rendererObject);
                c.currentSprite = e;
                c.currentSpriteName = h;
                f.addChild(e)
            }
        }
    };
    a.Spine.prototype = Object.create(a.DisplayObjectContainer.prototype);
    a.Spine.prototype.constructor = a.Spine;
    a.Spine.prototype.updateTransform = function() {
        this.lastTime = this.lastTime || Date.now();
        var b = 0.001 * (Date.now() - this.lastTime);
        this.lastTime = Date.now();
        this.state.update(b);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();
        for (var b = this.skeleton.drawOrder,
        d = 0,
        c = b.length; d < c; d++) {
            var e = b[d],
            f = e.attachment,
            h = this.slotContainers[d];
            if (f instanceof p.RegionAttachment) {
                if (f.rendererObject && (!e.currentSpriteName || e.currentSpriteName != f.name)) {
                    var k = f.rendererObject.name;
                    void 0 !== e.currentSprite && (e.currentSprite.visible = !1);
                    e.sprites = e.sprites || {};
                    if (void 0 !== e.sprites[k]) e.sprites[k].visible = !0;
                    else {
                        var l = this.createSprite(e, f.rendererObject);
                        h.addChild(l)
                    }
                    e.currentSprite = e.sprites[k];
                    e.currentSpriteName = k
                }
                h.visible = !0;
                k = e.bone;
                h.position.x = k.worldX + f.x * k.m00 + f.y * k.m01;
                h.position.y = k.worldY + f.x * k.m10 + f.y * k.m11;
                h.scale.x = k.worldScaleX;
                h.scale.y = k.worldScaleY;
                h.rotation = -(e.bone.worldRotation * Math.PI / 180);
                h.alpha = e.a;
                e.currentSprite.tint = a.rgb2hex([e.r, e.g, e.b])
            } else h.visible = !1
        }
        a.DisplayObjectContainer.prototype.updateTransform.call(this)
    };
    a.Spine.prototype.createSprite = function(b, d) {
        var c = new a.Sprite(a.Texture.fromFrame(a.TextureCache[d.name] ? d.name: d.name + ".png"));
        c.scale = d.scale;
        c.rotation = d.rotation;
        c.anchor.x = c.anchor.y = 0.5;
        b.sprites = b.sprites || {};
        return b.sprites[d.name] = c
    };
    a.BaseTextureCache = {};
    a.texturesToUpdate = [];
    a.texturesToDestroy = [];
    a.BaseTextureCacheIdGenerator = 0;
    a.BaseTexture = function(b, d) {
        a.EventTarget.call(this);
        this.height = this.width = 100;
        this.scaleMode = d || a.scaleModes.DEFAULT;
        this.hasLoaded = !1;
        this.source = b;
        this.id = a.BaseTextureCacheIdGenerator++;
        this.premultipliedAlpha = !0;
        this._glTextures = [];
        this._dirty = [];
        if (b) {
            if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0,
            this.width = this.source.width,
            this.height = this.source.height,
            a.texturesToUpdate.push(this);
            else {
                var c = this;
                this.source.onload = function() {
                    c.hasLoaded = !0;
                    c.width = c.source.width;
                    c.height = c.source.height;
                    for (var a = 0; a < c._glTextures.length; a++) c._dirty[a] = !0;
                    c.dispatchEvent({
                        type: "loaded",
                        content: c
                    })
                };
                this.source.onerror = function() {
                    c.dispatchEvent({
                        type: "error",
                        content: c
                    })
                }
            }
            this.imageUrl = null;
            this._powerOf2 = !1
        }
    };
    a.BaseTexture.prototype.constructor = a.BaseTexture;
    a.BaseTexture.prototype.destroy = function() {
        this.imageUrl ? (delete a.BaseTextureCache[this.imageUrl], delete a.TextureCache[this.imageUrl], this.imageUrl = null) : this.source && this.source._pixiId && delete a.BaseTextureCache[this.source._pixiId];
        this.source = null;
        a.texturesToDestroy.push(this)
    };
    a.BaseTexture.prototype.updateSourceImage = function(a) {
        this.hasLoaded = !1;
        this.source.src = null;
        this.source.src = a
    };
    a.BaseTexture.fromImage = function(b, d, c) {
        var e = a.BaseTextureCache[b];
        void 0 === d && -1 === b.indexOf("data:") && (d = !0);
        e || (e = new Image, d && (e.crossOrigin = ""), e.src = b, e = new a.BaseTexture(e, c), e.imageUrl = b, a.BaseTextureCache[b] = e);
        return e
    };
    a.BaseTexture.fromCanvas = function(b, d) {
        b._pixiId || (b._pixiId = "canvas_" + a.TextureCacheIdGenerator++);
        var c = a.BaseTextureCache[b._pixiId];
        c || (c = new a.BaseTexture(b, d), a.BaseTextureCache[b._pixiId] = c);
        return c
    };
    a.TextureCache = {};
    a.FrameCache = {};
    a.TextureCacheIdGenerator = 0;
    a.Texture = function(b, d) {
        a.EventTarget.call(this);
        this.noFrame = !1;
        d || (this.noFrame = !0, d = new a.Rectangle(0, 0, 1, 1));
        b instanceof a.Texture && (b = b.baseTexture);
        this.baseTexture = b;
        this.frame = d;
        this.trim = null;
        this.valid = !1;
        this.scope = this;
        this._uvs = null;
        this.height = this.width = 0;
        this.crop = new a.Rectangle(0, 0, 1, 1);
        if (b.hasLoaded) this.noFrame && (d = new a.Rectangle(0, 0, b.width, b.height)),
        this.setFrame(d);
        else {
            var c = this;
            b.addEventListener("loaded",
            function() {
                c.onBaseTextureLoaded()
            })
        }
    };
    a.Texture.prototype.constructor = a.Texture;
    a.Texture.prototype.onBaseTextureLoaded = function() {
        var b = this.baseTexture;
        b.removeEventListener("loaded", this.onLoaded);
        this.noFrame && (this.frame = new a.Rectangle(0, 0, b.width, b.height));
        this.setFrame(this.frame);
        this.scope.dispatchEvent({
            type: "update",
            content: this
        })
    };
    a.Texture.prototype.destroy = function(a) {
        a && this.baseTexture.destroy();
        this.valid = !1
    };
    a.Texture.prototype.setFrame = function(b) {
        this.noFrame = !1;
        this.frame = b;
        this.width = b.width;
        this.height = b.height;
        this.crop.x = b.x;
        this.crop.y = b.y;
        this.crop.width = b.width;
        this.crop.height = b.height;
        if (!this.trim && (b.x + b.width > this.baseTexture.width || b.y + b.height > this.baseTexture.height)) throw Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
        this.valid = b && b.width && b.height && this.baseTexture.source && this.baseTexture.hasLoaded;
        this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height);
        this.valid && a.Texture.frameUpdates.push(this)
    };
    a.Texture.prototype._updateWebGLuvs = function() {
        this._uvs || (this._uvs = new a.TextureUvs);
        var b = this.crop,
        d = this.baseTexture.width,
        c = this.baseTexture.height;
        this._uvs.x0 = b.x / d;
        this._uvs.y0 = b.y / c;
        this._uvs.x1 = (b.x + b.width) / d;
        this._uvs.y1 = b.y / c;
        this._uvs.x2 = (b.x + b.width) / d;
        this._uvs.y2 = (b.y + b.height) / c;
        this._uvs.x3 = b.x / d;
        this._uvs.y3 = (b.y + b.height) / c
    };
    a.Texture.fromImage = function(b, d, c) {
        var e = a.TextureCache[b];
        e || (e = new a.Texture(a.BaseTexture.fromImage(b, d, c)), a.TextureCache[b] = e);
        return e
    };
    a.Texture.fromFrame = function(b) {
        var d = a.TextureCache[b];
        if (!d) throw Error('The frameId "' + b + '" does not exist in the texture cache ');
        return d
    };
    a.Texture.fromCanvas = function(b, d) {
        var c = a.BaseTexture.fromCanvas(b, d);
        return new a.Texture(c)
    };
    a.Texture.addTextureToCache = function(b, d) {
        a.TextureCache[d] = b
    };
    a.Texture.removeTextureFromCache = function(b) {
        var d = a.TextureCache[b];
        delete a.TextureCache[b];
        delete a.BaseTextureCache[b];
        return d
    };
    a.Texture.frameUpdates = [];
    a.TextureUvs = function() {
        this.y3 = this.x3 = this.y2 = this.x2 = this.y1 = this.x1 = this.y0 = this.x0 = 0
    };
    a.RenderTexture = function(b, d, c, e) {
        a.EventTarget.call(this);
        this.width = b || 100;
        this.height = d || 100;
        this.frame = new a.Rectangle(0, 0, this.width, this.height);
        this.crop = new a.Rectangle(0, 0, this.width, this.height);
        this.baseTexture = new a.BaseTexture;
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
        this.baseTexture._glTextures = [];
        this.baseTexture.scaleMode = e || a.scaleModes.DEFAULT;
        this.baseTexture.hasLoaded = !0;
        this.renderer = c || a.defaultRenderer;
        this.renderer.type === a.WEBGL_RENDERER ? (b = this.renderer.gl, this.textureBuffer = new a.FilterTexture(b, this.width, this.height, this.baseTexture.scaleMode), this.baseTexture._glTextures[b.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new a.Point(this.width / 2, -this.height / 2)) : (this.render = this.renderCanvas, this.textureBuffer = new a.CanvasBuffer(this.width, this.height), this.baseTexture.source = this.textureBuffer.canvas);
        this.valid = !0;
        a.Texture.frameUpdates.push(this)
    };
    a.RenderTexture.prototype = Object.create(a.Texture.prototype);
    a.RenderTexture.prototype.constructor = a.RenderTexture;
    a.RenderTexture.prototype.resize = function(b, d, c) {
        if (b !== this.width || d !== this.height) this.width = this.frame.width = this.crop.width = b,
        this.height = this.frame.height = this.crop.height = d,
        c && (this.baseTexture.width = this.width, this.baseTexture.height = this.height),
        this.renderer.type === a.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2),
        this.textureBuffer.resize(this.width, this.height)
    };
    a.RenderTexture.prototype.clear = function() {
        this.renderer.type === a.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
        this.textureBuffer.clear()
    };
    a.RenderTexture.prototype.renderWebGL = function(b, d, c) {
        var e = this.renderer.gl;
        e.colorMask(!0, !0, !0, !0);
        e.viewport(0, 0, this.width, this.height);
        e.bindFramebuffer(e.FRAMEBUFFER, this.textureBuffer.frameBuffer);
        c && this.textureBuffer.clear();
        c = b.children;
        e = b.worldTransform;
        b.worldTransform = a.RenderTexture.tempMatrix;
        b.worldTransform.d = -1;
        b.worldTransform.ty = -2 * this.projection.y;
        d && (b.worldTransform.tx = d.x, b.worldTransform.ty -= d.y);
        d = 0;
        for (var f = c.length; d < f; d++) c[d].updateTransform();
        a.WebGLRenderer.updateTextures();
        this.renderer.spriteBatch.dirty = !0;
        this.renderer.renderDisplayObject(b, this.projection, this.textureBuffer.frameBuffer);
        b.worldTransform = e;
        this.renderer.spriteBatch.dirty = !0
    };
    a.RenderTexture.prototype.renderCanvas = function(b, d, c) {
        var e = b.children,
        f = b.worldTransform;
        b.worldTransform = a.RenderTexture.tempMatrix;
        d ? (b.worldTransform.tx = d.x, b.worldTransform.ty = d.y) : (b.worldTransform.tx = 0, b.worldTransform.ty = 0);
        d = 0;
        for (var h = e.length; d < h; d++) e[d].updateTransform();
        c && this.textureBuffer.clear();
        c = this.textureBuffer.context;
        this.renderer.renderDisplayObject(b, c);
        c.setTransform(1, 0, 0, 1, 0, 0);
        b.worldTransform = f
    };
    a.RenderTexture.tempMatrix = new a.Matrix;
    a.AssetLoader = function(b, d) {
        a.EventTarget.call(this);
        this.assetURLs = b;
        this.crossorigin = d;
        this.loadersByType = {
            jpg: a.ImageLoader,
            jpeg: a.ImageLoader,
            png: a.ImageLoader,
            gif: a.ImageLoader,
            webp: a.ImageLoader,
            json: a.JsonLoader,
            atlas: a.AtlasLoader,
            anim: a.SpineLoader,
            xml: a.BitmapFontLoader,
            fnt: a.BitmapFontLoader
        }
    };
    a.AssetLoader.prototype.constructor = a.AssetLoader;
    a.AssetLoader.prototype._getDataType = function(a) {
        if ("data:" === a.slice(0, 5).toLowerCase()) {
            a = a.slice(5);
            var d = a.indexOf(",");
            return - 1 === d ? null: (a = a.slice(0, d).split(";")[0]) && "text/plain" !== a.toLowerCase() ? a.split("/").pop().toLowerCase() : "txt"
        }
        return null
    };
    a.AssetLoader.prototype.load = function() {
        function a(b) {
            d.onAssetLoaded(b.content)
        }
        var d = this;
        this.loadCount = this.assetURLs.length;
        for (var c = 0; c < this.assetURLs.length; c++) {
            var e = this.assetURLs[c],
            f = this._getDataType(e);
            f || (f = e.split("?").shift().split(".").pop().toLowerCase());
            var h = this.loadersByType[f];
            if (!h) throw Error(f + " is an unsupported file type");
            e = new h(e, this.crossorigin);
            e.addEventListener("loaded", a);
            e.load()
        }
    };
    a.AssetLoader.prototype.onAssetLoaded = function(a) {
        this.loadCount--;
        this.dispatchEvent({
            type: "onProgress",
            content: this,
            loader: a
        });
        if (this.onProgress) this.onProgress(a);
        if (!this.loadCount && (this.dispatchEvent({
            type: "onComplete",
            content: this
        }), this.onComplete)) this.onComplete()
    };
    a.JsonLoader = function(b, d) {
        a.EventTarget.call(this);
        this.url = b;
        this.crossorigin = d;
        this.baseUrl = b.replace(/[^\/]*$/, "");
        this.loaded = !1
    };
    a.JsonLoader.prototype.constructor = a.JsonLoader;
    a.JsonLoader.prototype.load = function() {
        var a = this;
        window.XDomainRequest && a.crossorigin ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3E3, this.ajaxRequest.onerror = function() {
            a.onError()
        },
        this.ajaxRequest.ontimeout = function() {
            a.onError()
        },
        this.ajaxRequest.onprogress = function() {}) : this.ajaxRequest = window.XMLHttpRequest ? new window.XMLHttpRequest: new window.ActiveXObject("Microsoft.XMLHTTP");
        this.ajaxRequest.onload = function() {
            a.onJSONLoaded()
        };
        this.ajaxRequest.open("GET", this.url, !0);
        this.ajaxRequest.send()
    };
    a.JsonLoader.prototype.onJSONLoaded = function() {
        if (this.ajaxRequest.responseText) if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
            var b = this,
            d = new a.ImageLoader(this.baseUrl + this.json.meta.image, this.crossorigin),
            c = this.json.frames;
            this.texture = d.texture.baseTexture;
            d.addEventListener("loaded",
            function() {
                b.onLoaded()
            });
            for (var e in c) {
                var f = c[e].frame;
                if (f && (a.TextureCache[e] = new a.Texture(this.texture, {
                    x: f.x,
                    y: f.y,
                    width: f.w,
                    height: f.h
                }), a.TextureCache[e].crop = new a.Rectangle(f.x, f.y, f.w, f.h), c[e].trimmed)) {
                    var f = c[e].sourceSize,
                    h = c[e].spriteSourceSize;
                    a.TextureCache[e].trim = new a.Rectangle(h.x, h.y, f.w, f.h)
                }
            }
            d.load()
        } else this.json.bones && (d = (new p.SkeletonJson).readSkeletonData(this.json), a.AnimCache[this.url] = d),
        this.onLoaded();
        else this.onError()
    };
    a.JsonLoader.prototype.onLoaded = function() {
        this.loaded = !0;
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    };
    a.JsonLoader.prototype.onError = function() {
        this.dispatchEvent({
            type: "error",
            content: this
        })
    };
    a.AtlasLoader = function(b, d) {
        a.EventTarget.call(this);
        this.url = b;
        this.baseUrl = b.replace(/[^\/]*$/, "");
        this.crossorigin = d;
        this.loaded = !1
    };
    a.AtlasLoader.constructor = a.AtlasLoader;
    a.AtlasLoader.prototype.load = function() {
        this.ajaxRequest = new a.AjaxRequest;
        this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this);
        this.ajaxRequest.open("GET", this.url, !0);
        this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json");
        this.ajaxRequest.send(null)
    };
    a.AtlasLoader.prototype.onAtlasLoaded = function() {
        if (4 === this.ajaxRequest.readyState) if (200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
            this.atlas = {
                meta: {
                    image: []
                },
                frames: []
            };
            for (var b = this.ajaxRequest.responseText.split(/\r?\n/), d = -3, c = 0, e = null, f = !1, h = 0, k = 0, l = this.onLoaded.bind(this), h = 0; h < b.length; h++) b[h] = b[h].replace(/^\s+|\s+$/g, ""),
            "" === b[h] && (f = h + 1),
            0 < b[h].length && (f === h ? (this.atlas.meta.image.push(b[h]), c = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), d = -3) : 0 < d && (1 === d % 7 ? (null != e && (this.atlas.frames[c][e.name] = e), e = {
                name: b[h],
                frame: {}
            }) : (k = b[h].split(" "), 3 === d % 7 ? (e.frame.x = Number(k[1].replace(",", "")), e.frame.y = Number(k[2])) : 4 === d % 7 ? (e.frame.w = Number(k[1].replace(",", "")), e.frame.h = Number(k[2])) : 5 === d % 7 && (k = {
                x: 0,
                y: 0,
                w: Number(k[1].replace(",", "")),
                h: Number(k[2])
            },
            k.w > e.frame.w || k.h > e.frame.h ? (e.trimmed = !0, e.realSize = k) : e.trimmed = !1))), d++);
            null != e && (this.atlas.frames[c][e.name] = e);
            if (0 < this.atlas.meta.image.length) {
                this.images = [];
                for (k = 0; k < this.atlas.meta.image.length; k++) for (h in b = this.atlas.frames[k], this.images.push(new a.ImageLoader(this.baseUrl + this.atlas.meta.image[k], this.crossorigin)), b) if (d = b[h].frame) a.TextureCache[h] = new a.Texture(this.images[k].texture.baseTexture, {
                    x: d.x,
                    y: d.y,
                    width: d.w,
                    height: d.h
                }),
                b[h].trimmed && (a.TextureCache[h].realSize = b[h].realSize, a.TextureCache[h].trim.x = 0, a.TextureCache[h].trim.y = 0);
                for (k = this.currentImageId = 0; k < this.images.length; k++) this.images[k].addEventListener("loaded", l);
                this.images[this.currentImageId].load()
            } else this.onLoaded()
        } else this.onError()
    };
    a.AtlasLoader.prototype.onLoaded = function() {
        this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        }))
    };
    a.AtlasLoader.prototype.onError = function() {
        this.dispatchEvent({
            type: "error",
            content: this
        })
    };
    a.SpriteSheetLoader = function(b, d) {
        a.EventTarget.call(this);
        this.url = b;
        this.crossorigin = d;
        this.baseUrl = b.replace(/[^\/]*$/, "");
        this.texture = null;
        this.frames = {}
    };
    a.SpriteSheetLoader.prototype.constructor = a.SpriteSheetLoader;
    a.SpriteSheetLoader.prototype.load = function() {
        var b = this,
        d = new a.JsonLoader(this.url, this.crossorigin);
        d.addEventListener("loaded",
        function(a) {
            b.json = a.content.json;
            b.onLoaded()
        });
        d.load()
    };
    a.SpriteSheetLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    };
    a.ImageLoader = function(b, d) {
        a.EventTarget.call(this);
        this.texture = a.Texture.fromImage(b, d);
        this.frames = []
    };
    a.ImageLoader.prototype.constructor = a.ImageLoader;
    a.ImageLoader.prototype.load = function() {
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var a = this;
            this.texture.baseTexture.addEventListener("loaded",
            function() {
                a.onLoaded()
            })
        }
    };
    a.ImageLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    };
    a.ImageLoader.prototype.loadFramedSpriteSheet = function(b, d, c) {
        this.frames = [];
        for (var e = Math.floor(this.texture.width / b), f = Math.floor(this.texture.height / d), h = 0, k = 0; k < f; k++) for (var l = 0; l < e; l++, h++) {
            var n = new a.Texture(this.texture, {
                x: l * b,
                y: k * d,
                width: b,
                height: d
            });
            this.frames.push(n);
            c && (a.TextureCache[c + "-" + h] = n)
        }
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var p = this;
            this.texture.baseTexture.addEventListener("loaded",
            function() {
                p.onLoaded()
            })
        }
    };
    a.BitmapFontLoader = function(b, d) {
        a.EventTarget.call(this);
        this.url = b;
        this.crossorigin = d;
        this.baseUrl = b.replace(/[^\/]*$/, "");
        this.texture = null
    };
    a.BitmapFontLoader.prototype.constructor = a.BitmapFontLoader;
    a.BitmapFontLoader.prototype.load = function() {
        this.ajaxRequest = new a.AjaxRequest;
        var b = this;
        this.ajaxRequest.onreadystatechange = function() {
            b.onXMLLoaded()
        };
        this.ajaxRequest.open("GET", this.url, !0);
        this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml");
        this.ajaxRequest.send(null)
    };
    a.BitmapFontLoader.prototype.onXMLLoaded = function() {
        if (4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
            var b = this.ajaxRequest.responseXML;
            if (!b || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS) if ("function" === typeof window.DOMParser) b = (new DOMParser).parseFromString(this.ajaxRequest.responseText, "text/xml");
            else {
                var d = document.createElement("div");
                d.innerHTML = this.ajaxRequest.responseText;
                b = d
            }
            d = this.baseUrl + b.getElementsByTagName("page")[0].getAttribute("file");
            d = new a.ImageLoader(d, this.crossorigin);
            this.texture = d.texture.baseTexture;
            var c = {},
            e = b.getElementsByTagName("info")[0],
            f = b.getElementsByTagName("common")[0];
            c.font = e.getAttribute("face");
            c.size = parseInt(e.getAttribute("size"), 10);
            c.lineHeight = parseInt(f.getAttribute("lineHeight"), 10);
            c.chars = {};
            f = b.getElementsByTagName("char");
            for (e = 0; e < f.length; e++) {
                var h = parseInt(f[e].getAttribute("id"), 10),
                k = new a.Rectangle(parseInt(f[e].getAttribute("x"), 10), parseInt(f[e].getAttribute("y"), 10), parseInt(f[e].getAttribute("width"), 10), parseInt(f[e].getAttribute("height"), 10));
                c.chars[h] = {
                    xOffset: parseInt(f[e].getAttribute("xoffset"), 10),
                    yOffset: parseInt(f[e].getAttribute("yoffset"), 10),
                    xAdvance: parseInt(f[e].getAttribute("xadvance"), 10),
                    kerning: {},
                    texture: a.TextureCache[h] = new a.Texture(this.texture, k)
                }
            }
            b = b.getElementsByTagName("kerning");
            for (e = 0; e < b.length; e++) f = parseInt(b[e].getAttribute("first"), 10),
            h = parseInt(b[e].getAttribute("second"), 10),
            k = parseInt(b[e].getAttribute("amount"), 10),
            c.chars[h].kerning[f] = k;
            a.BitmapText.fonts[c.font] = c;
            var l = this;
            d.addEventListener("loaded",
            function() {
                l.onLoaded()
            });
            d.load()
        }
    };
    a.BitmapFontLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    };
    a.SpineLoader = function(b, d) {
        a.EventTarget.call(this);
        this.url = b;
        this.crossorigin = d;
        this.loaded = !1
    };
    a.SpineLoader.prototype.constructor = a.SpineLoader;
    a.SpineLoader.prototype.load = function() {
        var b = this,
        d = new a.JsonLoader(this.url, this.crossorigin);
        d.addEventListener("loaded",
        function(a) {
            b.json = a.content.json;
            b.onLoaded()
        });
        d.load()
    };
    a.SpineLoader.prototype.onLoaded = function() {
        this.loaded = !0;
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    };
    a.AbstractFilter = function(a, d) {
        this.passes = [this];
        this.shaders = [];
        this.dirty = !0;
        this.padding = 0;
        this.uniforms = d || {};
        this.fragmentSrc = a || []
    };
    a.AlphaMaskFilter = function(b) {
        a.AbstractFilter.call(this);
        this.passes = [this];
        b.baseTexture._powerOf2 = !0;
        this.uniforms = {
            mask: {
                type: "sampler2D",
                value: b
            },
            mapDimensions: {
                type: "2f",
                value: {
                    x: 1,
                    y: 5112
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        };
        b.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = b.width, this.uniforms.mask.value.y = b.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), b.baseTexture.on("loaded", this.boundLoadedFunction));
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
    };
    a.AlphaMaskFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.AlphaMaskFilter.prototype.constructor = a.AlphaMaskFilter;
    a.AlphaMaskFilter.prototype.onTextureLoaded = function() {
        this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width;
        this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height;
        this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
    };
    Object.defineProperty(a.AlphaMaskFilter.prototype, "map", {
        get: function() {
            return this.uniforms.mask.value
        },
        set: function(a) {
            this.uniforms.mask.value = a
        }
    });
    a.ColorMatrixFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            matrix: {
                type: "mat4",
                value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
    };
    a.ColorMatrixFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.ColorMatrixFilter.prototype.constructor = a.ColorMatrixFilter;
    Object.defineProperty(a.ColorMatrixFilter.prototype, "matrix", {
        get: function() {
            return this.uniforms.matrix.value
        },
        set: function(a) {
            this.uniforms.matrix.value = a
        }
    });
    a.GrayFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            gray: {
                type: "1f",
                value: 1
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
    };
    a.GrayFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.GrayFilter.prototype.constructor = a.GrayFilter;
    Object.defineProperty(a.GrayFilter.prototype, "gray", {
        get: function() {
            return this.uniforms.gray.value
        },
        set: function(a) {
            this.uniforms.gray.value = a
        }
    });
    a.DisplacementFilter = function(b) {
        a.AbstractFilter.call(this);
        this.passes = [this];
        b.baseTexture._powerOf2 = !0;
        this.uniforms = {
            displacementMap: {
                type: "sampler2D",
                value: b
            },
            scale: {
                type: "2f",
                value: {
                    x: 30,
                    y: 30
                }
            },
            offset: {
                type: "2f",
                value: {
                    x: 0,
                    y: 0
                }
            },
            mapDimensions: {
                type: "2f",
                value: {
                    x: 1,
                    y: 5112
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        };
        b.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = b.width, this.uniforms.mapDimensions.value.y = b.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), b.baseTexture.on("loaded", this.boundLoadedFunction));
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
    };
    a.DisplacementFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.DisplacementFilter.prototype.constructor = a.DisplacementFilter;
    a.DisplacementFilter.prototype.onTextureLoaded = function() {
        this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
        this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;
        this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
    };
    Object.defineProperty(a.DisplacementFilter.prototype, "map", {
        get: function() {
            return this.uniforms.displacementMap.value
        },
        set: function(a) {
            this.uniforms.displacementMap.value = a
        }
    });
    Object.defineProperty(a.DisplacementFilter.prototype, "scale", {
        get: function() {
            return this.uniforms.scale.value
        },
        set: function(a) {
            this.uniforms.scale.value = a
        }
    });
    Object.defineProperty(a.DisplacementFilter.prototype, "offset", {
        get: function() {
            return this.uniforms.offset.value
        },
        set: function(a) {
            this.uniforms.offset.value = a
        }
    });
    a.PixelateFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            invert: {
                type: "1f",
                value: 0
            },
            dimensions: {
                type: "4fv",
                value: new Float32Array([1E4, 100, 10, 10])
            },
            pixelSize: {
                type: "2f",
                value: {
                    x: 10,
                    y: 10
                }
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
    };
    a.PixelateFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.PixelateFilter.prototype.constructor = a.PixelateFilter;
    Object.defineProperty(a.PixelateFilter.prototype, "size", {
        get: function() {
            return this.uniforms.pixelSize.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.pixelSize.value = a
        }
    });
    a.BlurXFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
    };
    a.BlurXFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.BlurXFilter.prototype.constructor = a.BlurXFilter;
    Object.defineProperty(a.BlurXFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7E3)
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.blur.value = 1 / 7E3 * a
        }
    });
    a.BlurYFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
    };
    a.BlurYFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.BlurYFilter.prototype.constructor = a.BlurYFilter;
    Object.defineProperty(a.BlurYFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7E3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7E3 * a
        }
    });
    a.BlurFilter = function() {
        this.blurXFilter = new a.BlurXFilter;
        this.blurYFilter = new a.BlurYFilter;
        this.passes = [this.blurXFilter, this.blurYFilter]
    };
    Object.defineProperty(a.BlurFilter.prototype, "blur", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(a) {
            this.blurXFilter.blur = this.blurYFilter.blur = a
        }
    });
    Object.defineProperty(a.BlurFilter.prototype, "blurX", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(a) {
            this.blurXFilter.blur = a
        }
    });
    Object.defineProperty(a.BlurFilter.prototype, "blurY", {
        get: function() {
            return this.blurYFilter.blur
        },
        set: function(a) {
            this.blurYFilter.blur = a
        }
    });
    a.InvertFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            invert: {
                type: "1f",
                value: 1
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
    };
    a.InvertFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.InvertFilter.prototype.constructor = a.InvertFilter;
    Object.defineProperty(a.InvertFilter.prototype, "invert", {
        get: function() {
            return this.uniforms.invert.value
        },
        set: function(a) {
            this.uniforms.invert.value = a
        }
    });
    a.SepiaFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            sepia: {
                type: "1f",
                value: 1
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
    };
    a.SepiaFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.SepiaFilter.prototype.constructor = a.SepiaFilter;
    Object.defineProperty(a.SepiaFilter.prototype, "sepia", {
        get: function() {
            return this.uniforms.sepia.value
        },
        set: function(a) {
            this.uniforms.sepia.value = a
        }
    });
    a.TwistFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            radius: {
                type: "1f",
                value: 0.5
            },
            angle: {
                type: "1f",
                value: 5
            },
            offset: {
                type: "2f",
                value: {
                    x: 0.5,
                    y: 0.5
                }
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
    };
    a.TwistFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.TwistFilter.prototype.constructor = a.TwistFilter;
    Object.defineProperty(a.TwistFilter.prototype, "offset", {
        get: function() {
            return this.uniforms.offset.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.offset.value = a
        }
    });
    Object.defineProperty(a.TwistFilter.prototype, "radius", {
        get: function() {
            return this.uniforms.radius.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.radius.value = a
        }
    });
    Object.defineProperty(a.TwistFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.angle.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.angle.value = a
        }
    });
    a.ColorStepFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            step: {
                type: "1f",
                value: 5
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
    };
    a.ColorStepFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.ColorStepFilter.prototype.constructor = a.ColorStepFilter;
    Object.defineProperty(a.ColorStepFilter.prototype, "step", {
        get: function() {
            return this.uniforms.step.value
        },
        set: function(a) {
            this.uniforms.step.value = a
        }
    });
    a.DotScreenFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            scale: {
                type: "1f",
                value: 1
            },
            angle: {
                type: "1f",
                value: 5
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
    };
    a.DotScreenFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.DotScreenFilter.prototype.constructor = a.DotScreenFilter;
    Object.defineProperty(a.DotScreenFilter.prototype, "scale", {
        get: function() {
            return this.uniforms.scale.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.scale.value = a
        }
    });
    Object.defineProperty(a.DotScreenFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.angle.value
        },
        set: function(a) {
            this.dirty = !0;
            this.uniforms.angle.value = a
        }
    });
    a.CrossHatchFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
    };
    a.CrossHatchFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.CrossHatchFilter.prototype.constructor = a.BlurYFilter;
    Object.defineProperty(a.CrossHatchFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7E3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7E3 * a
        }
    });
    a.RGBSplitFilter = function() {
        a.AbstractFilter.call(this);
        this.passes = [this];
        this.uniforms = {
            red: {
                type: "2f",
                value: {
                    x: 20,
                    y: 20
                }
            },
            green: {
                type: "2f",
                value: {
                    x: -20,
                    y: 20
                }
            },
            blue: {
                type: "2f",
                value: {
                    x: 20,
                    y: -20
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        };
        this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
    };
    a.RGBSplitFilter.prototype = Object.create(a.AbstractFilter.prototype);
    a.RGBSplitFilter.prototype.constructor = a.RGBSplitFilter;
    Object.defineProperty(a.RGBSplitFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7E3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7E3 * a
        }
    });
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = a), exports.PIXI = a) : "undefined" !== typeof define && define.amd ? define(a) : this.PIXI = a
}).call(this); (function() {
    var a = a || {};
    a.viewporter;
    a.VERSION = "1.6";
    a.CANVAS = 0;
    a.WEBGL = 1;
    a.AUTO = 2;
    a.HD = 640;
    a.LANDSCAPE = 0;
    a.PORTRAIT = 1;
    a.SCROLL = 2E3;
    var f = null;
    a._isVisible = null;
    a._isWebGL = null;
    a._isCanvas = !1;
    a._currentRenderer = null;
    a._isHD = !1;
    a._isOrientation = !1;
    a._isTouchable = null;
    a._isLocalStorage = !1;
    a._isWebAudio = !1;
    a._isHtmlAudio = !1;
    a._isAndroid = !1;
    a._isChromeOS = !1;
    a._isiOS = !1;
    a._isArora = !1;
    a._isChrome = !1;
    a._isDolphin = !1;
    a._isEpiphany = !1;
    a._isFirefox = !1;
    a._isMobileSafari = !1;
    a._isStockAndroid = !1;
    a._isIE = !1;
    a._ieVersion = 0;
    a._isMidori = !1;
    a._isOpera = !1;
    a._isSafari = !1;
    a._isWebApp = !1;
    a._isWebOS = !1;
    a._isWindowsPhone = !1;
    a._isBlackBerry = !1;
    a._isKindle = !1;
    a._isCocoonJS = !1;
    a._pixelRatio = null;
    a._isiPhone = !1;
    a._isiPhone4 = !1;
    a._isiPad = !1;
    a._isDesktop = !1;
    a._isLinux = !1;
    a._isMacOS = !1;
    a._isWindows = !1;
    a._checkVisibility = function() { (this._hiddenVar = void 0 !== document.webkitHidden ? "webkitvisibilitychange": void 0 !== document.mozHidden ? "mozvisibilitychange": void 0 !== document.msHidden ? "msvisibilitychange": void 0 !== document.hidden ? "visibilitychange": null) && document.addEventListener(this._hiddenVar, this._onVisibilityChange, !1);
        window.onpagehide = a._onVisibilityChange;
        window.onpageshow = a._onVisibilityChange;
        window.onblur = a._onVisibilityChange;
        window.onfocus = a._onVisibilityChange
    };
    a.visibilityChange = function(b) {
        if ("pagehide" === b.type || "blur" === b.type || "pageshow" === b.type || "focus" === b.type) if ("pagehide" === b.type || "blur" === b.type) a._isVisible = !1,
        a.onFocusLost && a.onFocusLost.call();
        else if ("pageshow" === b.type || "focus" === b.type) a._isVisible = !0,
        a.onFocusGain && a.onFocusGain.call()
    };
    a._checkCanvas = function() {
        try {
            a._isCanvas = !!window.CanvasRenderingContext2D || navigator.isCocoonJS
        } catch(b) {
            a._isCanvas = !1
        }
    };
    a._checkWebGL = function() {
        var b = null;
        try {
            var c = document.createElement(navigator.isCocoonJS ? "screencanvas": "canvas"),
            b = !!window.WebGLRenderingContext && (c.getContext("experimental-webgl") || c.getContext("webgl"))
        } catch(d) {
            return a._isWebGL = !1
        }
        a._isWebGL = null != b && !1 != b ? !0 : !1
    };
    var h = a,
    n = function() {
        a._onVisibilityChange = function(b) {
            return a.visibilityChange(b)
        };
        a._checkVisibility()
    } (),
    p = function() {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded",
        function() {
            a._checkCanvas()
        },
        !1) : a._checkCanvas()
    } (),
    b = function() {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded",
        function() {
            a._checkWebGL()
        },
        !1) : a._checkWebGL()
    } ();
    a._isTouchable = "ontouchstart" in window || "onmsgesturechange" in window;
    try {
        localStorage.setItem("ENEAtestItem", "testValue"),
        localStorage.removeItem("ENEAtestItem"),
        a._isLocalStorage = !!window.localStorage
    } catch(d) {
        a._isLocalStorage = !1
    }
    var c = a._isWebAudio = !!window.AudioContext || !!window.webkitAudioContext || !!window.mozAudioContext,
    e = a._isHtmlAudio = !!document.createElement("audio").canPlayType && !!window.Audio,
    g = function() {
        var b = navigator.userAgent;
        /Android/.test(b) ? a._isAndroid = !0 : /CrOS/.test(b) ? a._isChromeOS = !0 : /iP[ao]d|iPhone/i.test(b) ? a._isiOS = !0 : /Linux/.test(b) ? a._isLinux = !0 : /Mac OS/.test(b) ? a._isMacOS = !0 : /Windows/.test(b) && (a._isWindows = !0);
        if (a._isWindows || a._isMacOS || a._isLinux && 0 > b.indexOf("Silk")) a._isDesktop = !0
    } (),
    r = function() {
        var b = navigator.userAgent;
        /Arora/.test(b) ? a._isArora = !0 : /Dolfin/.test(b) ? a._isDolphin = !0 : /Chrome/.test(b) ? a._isChrome = !0 : /Epiphany/.test(b) ? a._isEpiphany = !0 : /Firefox/.test(b) ? a._isFirefox = !0 : /Mobile/.test(b) ? /Safari/.test(b) && (a._isMobileSafari = !0) : /Linux/.test(b) && ( - 1 < b.indexOf("Silk") || -1 < b.indexOf("Kindle")) ? a._isKindle = !0 : -1 < b.indexOf("Mozilla/5.0") && ( - 1 < b.indexOf("Android") || -1 < b.indexOf("Linux")) && -1 < b.indexOf("AppleWebKit") && !( - 1 < b.indexOf("Chrome")) ? a._isStockAndroid = !0 : /MSIE (\d+\.\d+);/.test(b) ? (a._isIE = !0, a._ieVersion = parseInt(RegExp.$1, 10)) : /Trident\/(\d+\.\d+);/.test(b) ? (a._isIE = !0, a._ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(b) ? a._isMidori = !0 : /Opera/.test(b) ? a._isOpera = !0 : /Safari/.test(b) ? a._isSafari = !0 : /webos/i.test(b) ? a._isWebOS = !0 : /Windows Phone/i.test(b) ? a._isWindowsPhone = !0 : /BlackBerry/i.test(b) && (a._isBlackBerry = !0);
        navigator.standalone && (a._isWebApp = !0);
        a._isCocoonJS = navigator.isCocoonJS ? !0 : !1
    } (),
    k = function() {
        a._pixelRatio = window.devicePixelRatio || 1;
        a._isiPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone");
        a._isiPhone4 = 2 == this.pixelRatio && this.iPhone;
        a._isiPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad")
    } ();
    a._screen = {
        width: window.screen.availWidth * a._pixelRatio,
        height: window.screen.availHeight * a._pixelRatio
    };
    a._isOrientation = window.orientation;
    Math.min(a._screen.width, a._screen.height) >= a.HD && (a._isHD = !0);
    h._checkDevice = {
        _visibility: n,
        _canvas: p,
        _webGL: b,
        _touchDevice: void 0,
        _localStorage: void 0,
        _webAudio: c,
        _htmlAudio: e,
        _checkOS: g,
        _checkBrowser: r,
        _device: k,
        _detectScreenResolution: void 0
    };
    a.Game = function(b, c) {
        f = this;
        var d = b || {};
        d.background = b.background || 0;
        d.canvas = b.canvas || null;
        d.transparent = b.transparent || !1;
        d.width = b.width || 320;
        d.height = b.height || 480;
        d.forceLandscape = b.forceLandscape || !1;
        d.forcePortrait = b.forcePortrait || !1;
        d.noResize = b.noResize || !1;
        d.desktopFullScreen = b.desktopFullScreen || !1;
        this.container = "string" === typeof c ? document.getElementById(c) : c;
        this.container || (this.container = document.body);
        this._frameEnd = this._frameStart = null;
        this.width = d.width;
        this.halfWidth = d.width / 2;
        this.height = d.height;
        this.halfHeight = d.height / 2;
        isNaN(d.renderer) || d.renderer == a.AUTO ? this.renderMethod = a.AUTO: this.renderMethod = d.renderer;
        this.transparent = d.transparent;
        this.background = d.background;
        isNaN(d.interactive) || d.interactive ? this.interactive = !0 : this.interactive = !1;
        isNaN(d.antialias) || !d.antialias ? this.antialias = !1 : this.antialias = !0;
        this.canvas = d.canvas;
        this.__updateList = [];
        isNaN(d.keepAspectRatio) || d.keepAspectRatio ? this.keepAspectRatio = !0 : this.keepAspectRatio = !1;
        isNaN(d.desktopFullScreen) || d.desktopFullScreen ? this.desktopFullScreen = !0 : this.desktopFullScreen = !1;
        this.noResize = d.noResize;
        isNaN(d.alignHorizontally) || d.alignHorizontally ? this.alignHorizontally = !0 : this.alignHorizontally = !1;
        this.aspectRatio = this.width / this.height;
        if (!a._isDesktop) {
            document.body.style.overflow = "visible";
            var e = document.createElement("div");
            document.body.appendChild(e)
        }
        this.canvas || (this.canvas = document.createElement(navigator.isCocoonJS ? "screencanvas": "canvas"));
        this.stage = new PIXI.Stage(this.background);
        this.stage.interactive = this.interactive;
        this.renderer = this._createRenderer();
        this.container.appendChild(this.renderer.view);
        this.renderer.view.style.width = this.width + "px";
        this.renderer.view.style.height = this.height + "px";
        setTimeout(function() {
            f.resize()
        },
        10);
        window.addEventListener("resize", this.resize.bind(this), !1);
        document.body.addEventListener("touchmove",
        function(a) {
            a.preventDefault()
        },
        !1);
        document.body.addEventListener("touchstart",
        function(a) {
            a.preventDefault()
        },
        !1);
        this.forceLandscape = d.forceLandscape;
        this.forcePortrait = d.forcePortrait;
        this.onChangeOrientation = this.onWrongOrientation = null;
        setTimeout(function() {
            f.orientation = new a.Orientation
        },
        10)
    };
    a.Game.prototype._createRenderer = function() {
        var b = null,
        c = a._isDesktop ? "DESKTOP": "MOBILE";
        if (this.renderMethod != a.AUTO && this.renderMethod != a.WEBGL || !a._isWebGL) {
            if (this.renderMethod != a.AUTO && this.renderMethod != a.CANVAS || !a._isCanvas) throw Error("ENEA.Game : can't initialize Canvas or WebGL. Try to download newer browser");
            b = new PIXI.CanvasRenderer(this.width, this.height, this.canvas, this.transparent);
            a._currentRenderer = a.CANVAS;
            console.log("%cENEA v" + a.VERSION + " | " + c + " | CANVAS |", "color: #009;")
        } else b = new PIXI.WebGLRenderer(this.width, this.height, this.canvas, this.transparent, this.antialias),
        a._currentRenderer = a.WEBGL,
        console.log("%cENEA v" + a.VERSION + " | " + c + " | WEBGL |", "color: #009;");
        return b
    };
    a.Game.prototype.setContextSmoothing = function(b) {
        a._currentRenderer == a.CANVAS && (this.renderer.context.imageSmoothingEnabled = b, this.renderer.context.mozImageSmoothingEnabled = b, this.renderer.context.oImageSmoothingEnabled = b, this.renderer.context.webkitImageSmoothingEnabled = b, this.renderer.context.msImageSmoothingEnabled = b)
    };
    a.Game.prototype.render = function() {
        this._frameEnd = Date.now();
        requestAnimFrame(this.render.bind(this));
        for (var b in this.__updateList) if (!this.__updateList[b].postponed) this.__updateList[b]();
        a.Tweener.update();
        this.renderer.render(this.stage);
        this._frameStart = Date.now()
    };
    a.Game.prototype.getFrameTime = function() {
        return this._frameEnd - this._frameStart
    };
    a.Game.prototype.addUpdate = function(a, b) {
        if ("function" == typeof b) this.__updateList[a] = b,
        this.__updateList[a].postponed = !1;
        else throw Error("ENEA.Game.addUpdate : input must be an function");
    };
    a.Game.prototype.postponeAllUpdates = function() {
        for (var a in this.__updateList) this.__updateList[a].postponed = !0
    };
    a.Game.prototype.postponeUpdate = function(a) {
        if (void 0 !== this.__updateList[a] && null !== this.__updateList[a]) this.__updateList[a].postponed = !0;
        else throw Error("ENEA.Game.postponeUpdate : update not found");
    };
    a.Game.prototype.reinstateAllUpdates = function() {
        for (var a in this.__updateList) this.__updateList[a].postponed = !1
    };
    a.Game.prototype.reinstateUpdate = function(a) {
        if (void 0 !== this.__updateList[a] && null !== this.__updateList[a]) this.__updateList[a].postponed = !1;
        else throw Error("ENEA.Game.reinstateUpdate : update not found");
    };
    a.Game.prototype.removeUpdate = function(a) {
        this.__updateList[a] = null;
        delete this.__updateList[a]
    };
    a.Game.prototype.removeAllUpdates = function() {
        this.__updateList = []
    };
    a.Game.prototype.resize = function() {
        this.noResize || (this.renderer.view.style.width = this.keepAspectRatio || a._isDesktop ? window.innerHeight * this.aspectRatio + "px": window.innerWidth + "px", this.renderer.view.style.height = window.innerHeight + "px", a._isDesktop && this.desktopFullScreen && (this.renderer.view.style.width = window.innerWidth + "px", this.renderer.view.style.height = this.keepAspectRatio ? Math.floor(window.innerWidth / this.aspectRatio) + "px": window.innerHeight + "px"));
        this._alignHorizontally()
    };
    a.Game.prototype._alignHorizontally = function() {
        if (this.alignHorizontally) {
            var a = this.renderer.view.style.width,
            a = parseInt(a.substring(0, a.length - 2), 10);
            this.renderer.view.style.marginLeft = Math.floor((window.innerWidth - a) / 2) + "px"
        } else this.renderer.view.style.marginLeft = "0px"
    };
    a.Game.prototype.relativeX = a.Game.prototype.relX = function(a) {
        return~~ (this.width * a)
    };
    a.Game.prototype.relativeY = a.Game.prototype.relY = function(a) {
        return~~ (this.height * a)
    };
    Object.defineProperty(a.Game.prototype, "centerX", {
        get: function() {
            return~~ (this.width >> 1)
        }
    });
    Object.defineProperty(a.Game.prototype, "centerY", {
        get: function() {
            return~~ (this.height >> 1)
        }
    });
    a.Container = function(a, b) {
        PIXI.DisplayObjectContainer.call(this);
        if (null != a) if ("function" == typeof a) a.call(this, b);
        else throw Error("ENEA.Container : input needs to be an function");
    };
    a.Container.prototype.constructor = a.Container;
    a.Container.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    a.Sprite = function(a) {
        PIXI.Sprite.call(this, a.texture);
        this.applyParams(a);
        return this
    };
    a.Sprite.prototype = Object.create(PIXI.Sprite.prototype);
    a.Sprite.prototype.constructor = a.Sprite;
    a.Sprite.prototype.applyParams = function(a) {
        for (var b in a)"texture" != b && (this[b] = a[b]);
        return this
    };
    a.Sprite.prototype.addTo = function(a) {
        a.addChild(this);
        return this
    };
    PIXI.Sprite.prototype.applyParams = function(a) {
        for (var b in a)"texture" != b && (this[b] = a[b]);
        return this
    };
    PIXI.Sprite.prototype.addTo = function(a) {
        a.addChild(this);
        return this
    };
    Object.defineProperty(PIXI.DisplayObject.prototype, "numChildren", {
        get: function() {
            return this.children.length
        }
    });
    a.Container.prototype.removeAllChildren = function() {
        try {
            for (; this.children.length;) ! this.children[0].destroy || this.children[0] instanceof a.Container || this.children[0].destroy(!0),
            this.removeChild(this.children[0])
        } catch(b) {
            throw Error("ENEA.Container.removeAllChildren : can't delete all children");
        }
    };
    Object.defineProperty(PIXI.DisplayObject.prototype, "responsive", {
        set: function(a) {
            this.buttonMode = this.interactive = a
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, "scaleX", {
        get: function() {
            return this.scale.x
        },
        set: function(a) {
            this.scale.x = a
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, "scaleY", {
        get: function() {
            return this.scale.y
        },
        set: function(a) {
            this.scale.y = a
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, "scaleXY", {
        set: function(a) {
            this.scale.x = a;
            this.scale.y = a
        }
    });
    a.Container.prototype.destroy = function() {
        this.removeAllChildren();
        this.parent && this.parent.removeChild(this)
    };
    Object.defineProperty(PIXI.Sprite.prototype, "anchorX", {
        get: function() {
            return this.anchor.x
        },
        set: function(a) {
            this.anchor.x = a
        }
    });
    Object.defineProperty(PIXI.Sprite.prototype, "anchorY", {
        get: function() {
            return this.anchor.y
        },
        set: function(a) {
            this.anchor.y = a
        }
    });
    Object.defineProperty(PIXI.Sprite.prototype, "anchorXY", {
        set: function(a) {
            this.anchor.x = a;
            this.anchor.y = a
        }
    });
    a.Preloader = function() {
        if (null == f) throw Error("ENEA.Preloader : ENEA.Game needs to be initialized first");
        this.loaded = this.count = 0;
        this.list = []
    };
    a.Preloader.prototype.start = function() {
        var a = this;
        this.loader = new PIXI.AssetLoader(this.list);
        this.loader.onProgress = function() {
            a.loaded++;
            if (a.onProgress) a.onProgress()
        };
        this.loader.onComplete = function() {
            if (a.onComplete) a.onComplete()
        };
        this.loader.load()
    };
    a.Preloader.prototype.add = function(a) {
        this.list.push(a);
        this.count++
    };
    a.Preloader.prototype.addImage = function(a) {
        this.list.push(a);
        this.count++
    };
    a.Preloader.prototype.addBitmapFont = function(a, b) {
        this.list.push(a);
        this.count++;
        this.list.push(b);
        this.count++
    };
    a.Preloader.prototype.addAtlas = function(a, b) {
        this.list.push(a);
        this.count++;
        this.list.push(b);
        this.count++
    };
    a.ProgressBar = function(a) {
        if (null == f) throw Error("ENEA.ProgressBar : ENEA.Game needs to be initialized first");
        this._checkParameters(a);
        this.loaded = 0;
        this.error = !1;
        this._x = f.centerX - this.pbParams.width / 2;
        this._y = f.centerY - this.pbParams.height / 2;
        this._step = this.pbParams.width / this.pbParams.count;
        null == this.pbParams.bitmap ? this.draw() : (this.bitmapDimensions = this.pbParams.bitmap.frame, this.pbParams.bitmap.setFrame(new PIXI.Rectangle(this.bitmapDimensions.x, this.bitmapDimensions.y, 1, this.bitmapDimensions.height)), this._step = this.bitmapDimensions.width / this.pbParams.count)
    };
    a.ProgressBar.prototype._checkParameters = function(b) {
        var c = {
            silent: !1,
            width: Math.floor(f.width / 1.5),
            height: 2,
            text: "LOADING",
            fontFace: "Tahoma",
            fontSize: "11pt",
            fontColor: "#FFFFFF",
            bgColor: 8421504,
            fgColor: 16777215,
            errColor: 16711680,
            count: 1,
            bitmap: null
        };
        this.pbParams = null == b || "undefined" == b ? c: a.mergeParams(c, b)
    };
    a.ProgressBar.prototype.draw = function() {
        this.pbParams.silent || (this.container = new PIXI.DisplayObjectContainer, f.stage.addChild(this.container), navigator.isCocoonJS || (this.pbText = new PIXI.Text(this.pbParams.text, {
            font: this.pbParams.fontSize + " " + this.pbParams.fontFace,
            fill: this.pbParams.fontColor,
            align: "center"
        }), this.pbText.position.x = f.centerX - this.pbText.width / 2, this.pbText.position.y = this._y - this.pbText.height - 2, this.container.addChild(this.pbText)), this.graphics = new PIXI.Graphics, this.graphics.beginFill(this.pbParams.bgColor, 1), this.graphics.lineStyle(0, this.pbParams.bgColor, 1), this.graphics.drawRect(this._x, this._y, this.pbParams.width, this.pbParams.height), this.graphics.endFill(), this.container.addChild(this.graphics))
    };
    a.ProgressBar.prototype.update = function() {
        this.pbParams.silent || (null == this.pbParams.bitmap ? (this.graphics.clear(), this.graphics.beginFill(this.pbParams.bgColor, 1), this.graphics.lineStyle(0, this.pbParams.bgColor, 1), this.graphics.drawRect(this._x + this._step * this.loaded, this._y, this.pbParams.width - this._step * this.loaded, this.pbParams.height), this.graphics.endFill(), this.graphics.beginFill(this.error ? this.pbParams.errColor: this.pbParams.fgColor, 1), this.graphics.lineStyle(0, this.error ? this.pbParams.errColor: this.pbParams.fgColor, 1), this.graphics.drawRect(this._x, this._y, this._step * this.loaded, this.pbParams.height), this.graphics.endFill()) : this.pbParams.bitmap.setFrame(new PIXI.Rectangle(this.bitmapDimensions.x, this.bitmapDimensions.y, this._step * this.loaded, this.bitmapDimensions.height)));
        if (this.loaded >= this.pbParams.count && (null != this.pbParams.bitmap && this.pbParams.bitmap.setFrame(new PIXI.Rectangle(this.bitmapDimensions.x, this.bitmapDimensions.y, this.bitmapDimensions.width, this.bitmapDimensions.height)), this.onComplete)) this.onComplete()
    };
    a.ProgressBar.prototype.removeAllChildren = function() {
        try {
            for (; this.container.children.length;) this.container.children[0].destroy && this.container.children[0].destroy(),
            this.container.removeChild(this.container.children[0])
        } catch(a) {
            throw Error("ENEA.ProgressBar.removeAllChildren : can't delete all children");
        }
    };
    a.ProgressBar.prototype.destroy = function() {
        this.pbParams.silent || null != this.pbParams.bitmap || (this.graphics.clear(), this.removeAllChildren(), this.container.parent && this.container.parent.removeChild(this.container))
    };
    a.Timer = function() {
        this._isActive = !1;
        this._addToStartTime = 0;
        this._dirty = !1
    };
    a.Timer.prototype.reset = function() {
        this.timerStart = 0;
        this.timerEnd = null;
        this.isPaused = !1;
        this._pauseStart = Date.now();
        this._pauseTime = 0;
        this._isActive = !1;
        this._dirty || (this._addToStartTime = 0)
    };
    a.Timer.prototype.start = function() {
        this.reset();
        this._isActive = !0;
        this.timerStart = Date.now();
        if (null !== this.onStarted) this.onStarted()
    };
    a.Timer.prototype.addStartTime = function(a) {
        this._addToStartTime = a;
        this._dirty = !0
    };
    a.Timer.prototype.isActive = function() {
        return this._isActive
    };
    a.Timer.prototype.stop = function() {
        this.isPaused && this.resume();
        this._dirty = this._isActive = !1;
        this.timerEnd = Date.now();
        if (null !== this.onStopped) this.onStopped()
    };
    a.Timer.prototype.pause = function() {
        if (!this.isPaused && (this._pauseStart = Date.now(), this.isPaused = !0, null !== this.onPaused)) this.onPaused()
    };
    a.Timer.prototype.resume = function() {
        if (this.isPaused && (this._pauseEnd = Date.now(), this.isPaused = !1, this._pauseTime += this._pauseEnd - this._pauseStart, null !== this.onResumed)) this.onResumed()
    };
    a.Timer.prototype.onStarted = function() {};
    a.Timer.prototype.onPaused = function() {};
    a.Timer.prototype.onResumed = function() {};
    a.Timer.prototype.onStopped = function() {};
    a.Timer.prototype.getTotalTime = function() {
        return null == this.timerEnd ? !1 : this.timerEnd - this.timerStart + this._addToStartTime
    };
    a.Timer.prototype.getExecutionTime = function() {
        var a = Date.now();
        return this.isPaused ? a - this.timerStart - (a - this._pauseStart) + this._addToStartTime - this._pauseTime: null == this.timerEnd ? a - this.timerStart - this._pauseTime + this._addToStartTime: this.timerEnd - this.timerStart - this._pauseTime + this._addToStartTime
    };
    a.Emitter = function(b) {
        var c = {
            spawnTime: 1,
            maxParticles: 20,
            x: 0,
            y: 0,
            dxInterval: [ - 0.5, 0.5],
            dyInterval: [ - 0.5, 0.5],
            liveInterval: [500, 1E3],
            frameRate: 60
        };
        this.params = null == b || "undefined" == b ? c: a.mergeParams(c, b);
        this._now = this._delta = null;
        this._then = Date.now();
        this._emiting = !1;
        this._currentSpawned = this._lastSpawned = null;
        this.frameRate = this.params.frameRate;
        this._spawnTime = this.params.spawnTime;
        this.maxParticles = this.params.maxParticles;
        this.x = this.params.x;
        this.y = this.params.y;
        this.particles = Array(this.maxParticles)
    };
    a.Emitter.prototype.init = function() {
        for (var a = 0; a < this.maxParticles; a++) this.particles[a] = this.createParticle()
    };
    a.Emitter.prototype.initDead = function() {
        for (var a = 0; a < this.maxParticles; a++) this.particles[a] = this.createParticle(),
        this.particles[a].dead = !0
    };
    a.Emitter.prototype.createParticle = function() {
        return {
            x: this.x,
            y: this.y,
            dx: a.randomInterval(this.params.dxInterval[0], this.params.dxInterval[1]),
            dy: a.randomInterval(this.params.dyInterval[0], this.params.dyInterval[1]),
            dead: !1,
            live: a.randomInterval(this.params.liveInterval[0], this.params.liveInterval[1])
        }
    };
    a.Emitter.prototype.setDxInterval = function(a, b) {
        this.params.dxInterval[0] = a;
        this.params.dxInterval[1] = b
    };
    a.Emitter.prototype.setDyInterval = function(a, b) {
        this.params.dyInterval[0] = a;
        this.params.dyInterval[1] = b
    };
    a.Emitter.prototype.setLiveInterval = function(a, b) {
        this.params.liveInterval[0] = a;
        this.params.liveInterval[1] = b
    };
    a.Emitter.prototype.update = function() {
        this._now = Date.now();
        this._delta = this._now - this._then;
        for (var a = 0; a < this.maxParticles; a++) this.particles[a].live -= this._delta,
        0 < this.particles[a].live ? (this.particles[a].x += this.calculate(this._delta, this.particles[a].dx), this.particles[a].y += this.calculate(this._delta, this.particles[a].dy)) : this._emiting ? (this._currentSpawned = Date.now(), this._currentSpawned - this._lastSpawned <= this._spawnTime && (this._lastSpawned = this._currentSpawned, this.particles[a] = this.createParticle())) : this.particles[a].dead = !0;
        this._then = this._now
    };
    a.Emitter.prototype.calculate = function(a, b) {
        return this.frameRate / 1E3 * a * b
    };
    a.Emitter.prototype.start = function() {
        this._emiting = !0;
        this._lastSpawned = Date.now()
    };
    a.Emitter.prototype.stop = function() {
        this._emiting = !1
    };
    a.createCanvas = function(b) {
        var c = {
            id: "eneaDefaultCanvas",
            width: 2,
            height: 2,
            border: "1px solid",
            display: "none"
        };
        this.params = null == b || "undefined" == b ? c: a.mergeParams(c, b);
        this.canvas = document.createElement(a._isCocoonJS ? "screencanvas": "canvas");
        this.canvas.id = this.params.id;
        this.canvas.width = this.params.width;
        this.canvas.height = this.params.height;
        this.canvas.style.border = this.params.border;
        this.canvas.style.display = this.params.display;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        null == this.context && console.log("ENEA.createCanvas error : context is null")
    };
    a.createCanvas.prototype.getTexture = function() {
        return PIXI.Texture.fromCanvas(this.canvas)
    };
    a.createCanvas.prototype.destroy = function() {
        this.canvas.parentNode.removeChild(this.canvas)
    };
    a.randomInterval = function(a, b) {
        return Math.random() * (b - a) + a
    };
    a.Orientation = function() {
        if (!a._isDesktop) {
            if (isNaN(a._isOrientation)) throw Error("ENEA.Orientation : device doesn't support window.orientation method");
            this.check();
            var b = this;
            window.addEventListener("orientationchange",
            function() {
                b.check();
                b.onChangeOrientation()
            },
            !1)
        }
    };
    a.Orientation.prototype.check = function() {
        if (90 === Math.abs(window.orientation)) {
            if (f._isLandscape = !0, f._isPortrait = !1, f.forcePortrait) this.onWrongOrientation()
        } else if (f._isPortrait = !0, f._isLandscape = !1, f.forceLandscape) this.onWrongOrientation()
    };
    a.Orientation.prototype.onWrongOrientation = function() {
        if ("function" == typeof f.onWrongOrientation) f.onWrongOrientation()
    };
    a.Orientation.prototype.onChangeOrientation = function() {
        f.resize();
        if ("function" == typeof f.onChangeOrientation) f.onChangeOrientation()
    };
    a.Language = function() {
        this._defaultLanguage = "en";
        this.languageDirectoryPath = "lang/";
        this.forceLanguage = null;
        this._isAddressBarLang = !1;
        this._langsrc = this._language = null
    };
    a.Language.prototype._checkAddressBar = function() {
        try {
            var a = window.location.href.split("?");
            1 != a.length && (a = a[1].split("="), "lang" == a[0] && "" != a[1] && (this._isAddressBarLang = !0, this._language = a[1]))
        } catch(b) {
            console.log("Error : " + b)
        }
        return this._isAddressBarLang
    };
    a.Language.prototype.start = function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        this._langsrc = this.languageDirectoryPath;
        this._langsrc = null != this.forceLanguage ? this._langsrc + this.forceLanguage: this._langsrc + (this._checkAddressBar() ? this._language: this._defaultLanguage);
        this._langsrc += ".js";
        a.src = this._langsrc;
        var b = this;
        a.onload = function() {
            if ("function" == typeof b.onLoad) b.onLoad()
        };
        document.getElementsByTagName("head")[0].appendChild(a)
    };
    a.fadeElement = function(b, c, d, e, f, g) {
        var h = {
            something: c
        };
        c = {
            something: d
        }; (new a.Tweener.Tween(h)).to(c, e).easing(a.Tweener.Easing.Linear.None).onStart(function() {
            f && f.call()
        }).onUpdate(function() {
            b.alpha = a.normalize(h.something)
        }).onComplete(function() {
            g && g.call()
        }).start()
    };
    a.hideAddressBar = function() {
        a._isCocoonjs || (a.viewporter.preventPageScroll = !0, a.viewporter.forceDetection = !0, a.viewporter.refresh());
        f.resize()
    };
    a.randomString = function() {
        return Math.floor(Date.now() * Math.random()).toString()
    };
    a.normalize = function(a) {
        return 1 < a ? 1 : 0 > a ? 0 : a
    };
    a.mergeParams = function(a, b) {
        for (var c in a) for (var d in b) c == d && null != b[d] && (a[c] = b[d]);
        return a
    };
    a.emptyTween = function(b, c) { (new a.Tweener.Tween({
            something: 1
        })).to({
            something: 1
        },
        b).easing(a.Tweener.Easing.Linear.None).onComplete(function() {
            c && c.call()
        }).start()
    };
    a._storage = function() {
        this.id = "enea.sk"
    };
    a._storage.prototype = {
        get: function(a, b) {
            var c = localStorage.getItem(this.id + "." + a);
            return null == c ? b: c
        },
        set: function(a, b) {
            localStorage.setItem(this.id + "." + a, b)
        },
        remove: function(a) {
            localStorage.removeItem(this.id + "." + a)
        },
        has: function(a) {
            return null !== localStorage.getItem(this.id + "." + a)
        },
        removeAllById: function() {
            for (var a = localStorage.length - 1; 0 <= a; a--) {
                var b = localStorage.key(a); - 1 !== b.indexOf(this.id + ".") && localStorage.removeItem(b)
            }
        }
    };
    a._isLocalStorage ? a.Storage = new a._storage: console.log("ENEA : localStorage is not available");
    a.seededRandom = function(b, c) {
        c = c || 0;
        a.SEED = (9301 * a.SEED + 49297) % 233280;
        return c + a.SEED / 233280 * ((b || 1) - c)
    };
    a.debug = function() {
        console.log("---------------------------");
        for (var b in a) a.hasOwnProperty(b) && ("function" == typeof a[b] ? console.log("%c" + b + " : function", "color: #00b") : "object" == typeof a[b] ? console.log("%c" + b + " : object", "color: #0b0") : console.log(b + " : " + a[b]));
        console.log("---------------------------")
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = a), exports.ENEA = a) : this.ENEA = a
}).call(this);
ENEA.Signal = function() {
    this._bindings = [];
    this._prevParams = null;
    var a = this;
    this.dispatch = function() {
        ENEA.Signal.prototype.dispatch.apply(a, arguments)
    }
};
ENEA.Signal.prototype = {
    VERSION: "::VERSION_NUMBER::",
    memorize: !1,
    _shouldPropagate: !0,
    active: !0,
    validateListener: function(a, f) {
        if ("function" !== typeof a) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", f));
    },
    _registerListener: function(a, f, h, n) {
        var p = this._indexOfListener(a, h);
        if ( - 1 !== p) {
            if (a = this._bindings[p], a.isOnce() !== f) throw Error("You cannot add" + (f ? "": "Once") + "() then add" + (f ? "Once": "") + "() the same listener without removing the relationship first.");
        } else a = new ENEA.SignalBinding(this, a, f, h, n),
        this._addBinding(a);
        this.memorize && this._prevParams && a.execute(this._prevParams);
        return a
    },
    _addBinding: function(a) {
        var f = this._bindings.length;
        do--f;
        while (this._bindings[f] && a._priority <= this._bindings[f]._priority);
        this._bindings.splice(f + 1, 0, a)
    },
    _indexOfListener: function(a, f) {
        for (var h = this._bindings.length,
        n; h--;) if (n = this._bindings[h], n._listener === a && n.context === f) return h;
        return - 1
    },
    has: function(a, f) {
        return - 1 !== this._indexOfListener(a, f)
    },
    add: function(a, f, h) {
        this.validateListener(a, "add");
        return this._registerListener(a, !1, f, h)
    },
    addOnce: function(a, f, h) {
        this.validateListener(a, "addOnce");
        return this._registerListener(a, !0, f, h)
    },
    remove: function(a, f) {
        this.validateListener(a, "remove");
        var h = this._indexOfListener(a, f); - 1 !== h && (this._bindings[h]._destroy(), this._bindings.splice(h, 1));
        return a
    },
    removeAll: function() {
        for (var a = this._bindings.length; a--;) this._bindings[a]._destroy();
        this._bindings.length = 0
    },
    getNumListeners: function() {
        return this._bindings.length
    },
    halt: function() {
        this._shouldPropagate = !1
    },
    dispatch: function(a) {
        if (this.active) {
            var f = Array.prototype.slice.call(arguments),
            h = this._bindings.length,
            n;
            this.memorize && (this._prevParams = f);
            if (h) {
                n = this._bindings.slice();
                this._shouldPropagate = !0;
                do h--;
                while (n[h] && this._shouldPropagate && !1 !== n[h].execute(f))
            }
        }
    },
    forget: function() {
        this._prevParams = null
    },
    dispose: function() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams
    },
    toString: function() {
        return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
    }
};
ENEA.Signal.prototype.constructor = ENEA.Signal;
ENEA.SignalBinding = function(a, f, h, n, p) {
    this._listener = f;
    this._isOnce = h;
    this.context = n;
    this._signal = a;
    this._priority = p || 0
};
ENEA.SignalBinding.prototype = {
    active: !0,
    params: null,
    execute: function(a) {
        var f;
        this.active && this._listener && (a = this.params ? this.params.concat(a) : a, f = this._listener.apply(this.context, a), this._isOnce && this.detach());
        return f
    },
    detach: function() {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null
    },
    isBound: function() {
        return !! this._signal && !!this._listener
    },
    isOnce: function() {
        return this._isOnce
    },
    getListener: function() {
        return this._listener
    },
    getSignal: function() {
        return this._signal
    },
    _destroy: function() {
        delete this._signal;
        delete this._listener;
        delete this.context
    },
    toString: function() {
        return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
    }
};
ENEA.SignalBinding.prototype.constructor = ENEA.SignalBinding;
void 0 === Date.now && (Date.now = function() {
    return (new Date).valueOf()
});
ENEA.Tweener = ENEA.Tweener ||
function() {
    var a = [];
    return {
        REVISION: "14",
        getAll: function() {
            return a
        },
        removeAll: function() {
            a = []
        },
        add: function(f) {
            a.push(f)
        },
        remove: function(f) {
            f = a.indexOf(f); - 1 !== f && a.splice(f, 1)
        },
        update: function(f) {
            if (0 === a.length) return ! 1;
            var h = 0;
            for (f = void 0 !== f ? f: "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); h < a.length;) a[h].update(f) ? h++:a.splice(h, 1);
            return ! 0
        }
    }
} ();
ENEA.Tweener.Tween = function(a) {
    var f = {},
    h = {},
    n = {},
    p = 1E3,
    b = 0,
    d = !1,
    c = !1,
    e = 0,
    g = null,
    r = ENEA.Tweener.Easing.Linear.None,
    k = ENEA.Tweener.Interpolation.Linear,
    l = [],
    t = null,
    v = null,
    q = null,
    y = null,
    s = null,
    u;
    for (u in a) f[u] = parseFloat(a[u], 10);
    this.to = function(a, b) {
        void 0 !== b && (p = b);
        h = a;
        return this
    };
    this.start = function(b) {
        ENEA.Tweener.add(this);
        c = !0;
        g = void 0 !== b ? b: "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
        g += e;
        for (var d in h) {
            if (h[d] instanceof Array) {
                if (0 === h[d].length) continue;
                h[d] = [a[d]].concat(h[d])
            }
            f[d] = a[d]; ! 1 === f[d] instanceof Array && (f[d] *= 1);
            n[d] = f[d] || 0
        }
        return this
    };
    this.stop = function() {
        if (!c) return this;
        ENEA.Tweener.remove(this);
        c = !1;
        null !== s && s.dispatch(a);
        s = y = q = v = t = null;
        this.stopChainedTweens();
        return this
    };
    this.stopChainedTweens = function() {
        for (var a = 0,
        b = l.length; a < b; a++) l[a].stop()
    };
    this.delay = function(a) {
        e = a;
        return this
    };
    this.repeat = function(a) {
        b = a;
        return this
    };
    this.yoyo = function(a) {
        d = a;
        return this
    };
    this.easing = function(a) {
        r = a;
        return this
    };
    this.interpolation = function(a) {
        k = a;
        return this
    };
    this.chain = function() {
        l = arguments;
        return this
    };
    this.onStart = function(a) {
        t = new ENEA.Signal;
        t.addOnce(a);
        return this
    };
    this.onUpdate = function(a) {
        v = a;
        return this
    };
    this.onComplete = function(a) {
        q = new ENEA.Signal;
        q.addOnce(a);
        return this
    };
    this.onYoyo = function(a) {
        y = new ENEA.Signal;
        y.add(a);
        return this
    };
    this.onStop = function(a) {
        s = new ENEA.Signal;
        s.addOnce(a);
        return this
    };
    this.update = function(c) {
        var s;
        if (c < g) return ! 0;
        null !== t && (t.dispatch(a), t = null);
        var u = (c - g) / p,
        u = 1 < u ? 1 : u,
        D = r(u);
        for (s in h) {
            var B = f[s] || 0,
            F = h[s];
            F instanceof Array ? a[s] = k(F, D) : ("string" === typeof F && (F = B + parseFloat(F, 10)), "number" === typeof F && (a[s] = B + (F - B) * D))
        }
        null !== v && v.call(a, D);
        if (1 == u) if (0 < b) {
            isFinite(b) && b--;
            for (s in n)"string" === typeof h[s] && (n[s] += parseFloat(h[s], 10)),
            d && (u = n[s], n[s] = h[s], h[s] = u),
            f[s] = n[s];
            d && null !== y && y.dispatch(a);
            g = c + e
        } else {
            null !== q && q.dispatch(a);
            s = 0;
            for (u = l.length; s < u; s++) l[s].start(c);
            return ! 1
        }
        return ! 0
    }
};
ENEA.Tweener.Easing = {
    Linear: {
        None: function(a) {
            return a
        }
    },
    Quadratic: {
        In: function(a) {
            return a * a
        },
        Out: function(a) {
            return a * (2 - a)
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a: -0.5 * (--a * (a - 2) - 1)
        }
    },
    Cubic: {
        In: function(a) {
            return a * a * a
        },
        Out: function(a) {
            return--a * a * a + 1
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * a: 0.5 * ((a -= 2) * a * a + 2)
        }
    },
    Quartic: {
        In: function(a) {
            return a * a * a * a
        },
        Out: function(a) {
            return 1 - --a * a * a * a
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * a * a: -0.5 * ((a -= 2) * a * a * a - 2)
        }
    },
    Quintic: {
        In: function(a) {
            return a * a * a * a * a
        },
        Out: function(a) {
            return--a * a * a * a * a + 1
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * a * a * a: 0.5 * ((a -= 2) * a * a * a * a + 2)
        }
    },
    Sinusoidal: {
        In: function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        },
        Out: function(a) {
            return Math.sin(a * Math.PI / 2)
        },
        InOut: function(a) {
            return 0.5 * (1 - Math.cos(Math.PI * a))
        }
    },
    Exponential: {
        In: function(a) {
            return 0 === a ? 0 : Math.pow(1024, a - 1)
        },
        Out: function(a) {
            return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
        },
        InOut: function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * ( - Math.pow(2, -10 * (a - 1)) + 2)
        }
    },
    Circular: {
        In: function(a) {
            return 1 - Math.sqrt(1 - a * a)
        },
        Out: function(a) {
            return Math.sqrt(1 - --a * a)
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }
    },
    Elastic: {
        In: function(a) {
            var f, h = 0.1;
            if (0 === a) return 0;
            if (1 === a) return 1; ! h || 1 > h ? (h = 1, f = 0.1) : f = 0.4 * Math.asin(1 / h) / (2 * Math.PI);
            return - (h * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - f) * Math.PI / 0.4))
        },
        Out: function(a) {
            var f, h = 0.1;
            if (0 === a) return 0;
            if (1 === a) return 1; ! h || 1 > h ? (h = 1, f = 0.1) : f = 0.4 * Math.asin(1 / h) / (2 * Math.PI);
            return h * Math.pow(2, -10 * a) * Math.sin(2 * (a - f) * Math.PI / 0.4) + 1
        },
        InOut: function(a) {
            var f, h = 0.1;
            if (0 === a) return 0;
            if (1 === a) return 1; ! h || 1 > h ? (h = 1, f = 0.1) : f = 0.4 * Math.asin(1 / h) / (2 * Math.PI);
            return 1 > (a *= 2) ? -0.5 * h * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - f) * Math.PI / 0.4) : h * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - f) * Math.PI / 0.4) * 0.5 + 1
        }
    },
    Back: {
        In: function(a) {
            return a * a * (2.70158 * a - 1.70158)
        },
        Out: function(a) {
            return--a * a * (2.70158 * a + 1.70158) + 1
        },
        InOut: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
        }
    },
    Bounce: {
        In: function(a) {
            return 1 - ENEA.Tweener.Easing.Bounce.Out(1 - a)
        },
        Out: function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        },
        InOut: function(a) {
            return 0.5 > a ? 0.5 * ENEA.Tweener.Easing.Bounce.In(2 * a) : 0.5 * ENEA.Tweener.Easing.Bounce.Out(2 * a - 1) + 0.5
        }
    }
};
ENEA.Tweener.Interpolation = {
    Linear: function(a, f) {
        var h = a.length - 1,
        n = h * f,
        p = Math.floor(n),
        b = ENEA.Tweener.Interpolation.Utils.Linear;
        return 0 > f ? b(a[0], a[1], n) : 1 < f ? b(a[h], a[h - 1], h - n) : b(a[p], a[p + 1 > h ? h: p + 1], n - p)
    },
    Bezier: function(a, f) {
        var h = 0,
        n = a.length - 1,
        p = Math.pow,
        b = ENEA.Tweener.Interpolation.Utils.Bernstein,
        d;
        for (d = 0; d <= n; d++) h += p(1 - f, n - d) * p(f, d) * a[d] * b(n, d);
        return h
    },
    CatmullRom: function(a, f) {
        var h = a.length - 1,
        n = h * f,
        p = Math.floor(n),
        b = ENEA.Tweener.Interpolation.Utils.CatmullRom;
        return a[0] === a[h] ? (0 > f && (p = Math.floor(n = h * (1 + f))), b(a[(p - 1 + h) % h], a[p], a[(p + 1) % h], a[(p + 2) % h], n - p)) : 0 > f ? a[0] - (b(a[0], a[0], a[1], a[1], -n) - a[0]) : 1 < f ? a[h] - (b(a[h], a[h], a[h - 1], a[h - 1], n - h) - a[h]) : b(a[p ? p - 1 : 0], a[p], a[h < p + 1 ? h: p + 1], a[h < p + 2 ? h: p + 2], n - p)
    },
    Utils: {
        Linear: function(a, f, h) {
            return (f - a) * h + a
        },
        Bernstein: function(a, f) {
            var h = ENEA.Tweener.Interpolation.Utils.Factorial;
            return h(a) / h(f) / h(a - f)
        },
        Factorial: function() {
            var a = [1];
            return function(f) {
                var h = 1,
                n;
                if (a[f]) return a[f];
                for (n = f; 1 < n; n--) h *= n;
                return a[f] = h
            }
        } (),
        CatmullRom: function(a, f, h, n, p) {
            a = 0.5 * (h - a);
            n = 0.5 * (n - f);
            var b = p * p;
            return (2 * f - 2 * h + a + n) * p * b + ( - 3 * f + 3 * h - 2 * a - n) * b + a * p + f
        }
    }
};
"undefined" !== typeof module && module.exports && (module.exports = ENEA.Tweener); (function() {
    var a;
    ENEA.viewporter = {
        forceDetection: !1,
        disableLegacyAndroid: !0,
        ACTIVE: function() {
            return ENEA.viewporter.disableLegacyAndroid && /android 2/i.test(navigator.userAgent) || /ipad/i.test(navigator.userAgent) ? !1 : /webos/i.test(navigator.userAgent) || "ontouchstart" in window ? !0 : !1
        },
        READY: !1,
        isLandscape: function() {
            return 90 === window.orientation || -90 === window.orientation
        },
        ready: function(a) {
            window.addEventListener("viewportready", a, !1)
        },
        change: function(a) {
            window.addEventListener("viewportchange", a, !1)
        },
        refresh: function() {
            a && a.prepareVisualViewport()
        },
        preventPageScroll: function() {
            document.body.addEventListener("touchmove",
            function(a) {
                a.preventDefault()
            },
            !1);
            document.body.addEventListener("touchstart",
            function() {
                a.prepareVisualViewport()
            },
            !1)
        }
    };
    ENEA.viewporter.ACTIVE = ENEA.viewporter.ACTIVE();
    if (ENEA.viewporter.ACTIVE) {
        var f = function() {
            var a = this;
            this.IS_ANDROID = /Android/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
            var f = function() {
                a.prepareVisualViewport();
                var f = window.orientation;
                window.addEventListener("orientationchange",
                function() {
                    window.orientation !== f && (a.prepareVisualViewport(), f = window.orientation)
                },
                !1)
            };
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded",
            function() {
                f()
            },
            !1) : f()
        };
        f.prototype = {
            getProfile: function() {
                if (ENEA.viewporter.forceDetection) return null;
                for (var a in ENEA.viewporter.profiles) if ((new RegExp(a)).test(navigator.userAgent)) return ENEA.viewporter.profiles[a];
                return null
            },
            postProcess: function() {
                ENEA.viewporter.READY = !0;
                this.triggerWindowEvent(this._firstUpdateExecuted ? "viewportchange": "viewportready");
                this._firstUpdateExecuted = !0
            },
            prepareVisualViewport: function() {
                var a = this;
                if (navigator.standalone) return this.postProcess();
                document.documentElement.style.minHeight = "5000px";
                var f = window.innerHeight,
                p = this.getProfile(),
                b = ENEA.viewporter.isLandscape() ? "landscape": "portrait";
                window.scrollTo(0, a.IS_ANDROID ? 1 : 0);
                var d = 40,
                c = window.setInterval(function() {
                    window.scrollTo(0, a.IS_ANDROID ? 1 : 0);
                    d--;
                    if ((a.IS_ANDROID ? p && window.innerHeight === p[b] : window.innerHeight > f) || 0 > d) document.documentElement.style.minHeight = window.innerHeight + "px",
                    document.getElementById("viewporter").style.position = "relative",
                    document.getElementById("viewporter").style.height = window.innerHeight + "px",
                    clearInterval(c),
                    a.postProcess()
                },
                10)
            },
            triggerWindowEvent: function(a) {
                var f = document.createEvent("Event");
                f.initEvent(a, !1, !1);
                window.dispatchEvent(f)
            }
        };
        a = new f
    }
})();
ENEA.viewporter.profiles = {
    "iPhone|iPod": {
        ppi: function() {
            return 2 <= window.devicePixelRatio ? 326 : 163
        },
        width: function(a, f) {
            return a * window.devicePixelRatio
        },
        height: function(a, f) {
            return f * window.devicePixelRatio
        },
        chromePrescale: function(a, f, h) {
            return 2 <= window.devicePixelRatio ? (navigator.standalone ? 0 : ENEA.viewporter.isLandscape() ? 100 : 124) * h + 2 : (navigator.standalone ? 0 : ENEA.viewporter.isLandscape() ? 50 : 62) * h + 2
        }
    },
    iPad: {
        ppi: 132,
        chrome: function(a, f) {
            return navigator.standalone ? 0 : /OS 5_/.test(navigator.userAgent) ? 96 : 78
        }
    },
    "GT-I9000|GT-I9100|Nexus S": {
        ppi: function() {
            if (/GT-I9000/.test(navigator.userAgent) || /GT-I9100/.test(navigator.userAgent)) return 239.3;
            if (/Nexus S/.test(navigator.userAgent)) return 239
        },
        width: 800,
        height: 480,
        chrome: 38
    },
    MZ601: {
        ppi: 160,
        portrait: {
            width: function(a, f) {
                return f
            },
            height: function(a, f) {
                return a
            }
        },
        chrome: 152,
        inverseLandscape: !0
    },
    "GT-P1000": {
        width: 1024,
        height: 600,
        portrait: {
            chrome: 38
        }
    },
    "Desire_A8181|DesireHD_A9191": {
        width: 800,
        height: 480
    },
    TF101: {
        ppi: 160,
        portrait: {
            width: function(a, f) {
                return f
            },
            height: function(a, f) {
                return a
            }
        },
        chrome: 103,
        inverseLandscape: !0
    },
    A500: {
        portrait: {
            width: function(a, f) {
                return f
            },
            height: function(a, f) {
                return a
            }
        },
        inverseLandscape: !0
    }
}; (function() {
    var a = a || {};
    a.FADETIME = 250;
    a._isKik = !1;
    a._isNuggeta = !1;
    a.Music = null;
    a._musicMuted = !1;
    a.Sounds = null;
    a._soundsMuted = !1;
    a._isAudioUnlocked = !1;
    a.achieved = null;
    a.game = null;
    a._tutorialHeight = 50;
    a._tutorialIsRunning = !1;
    ENEA.Storage.id = "ninja.enea.sk";
    ENEA._isHD = !1;
    a.InitGame = function() {
        this.gameParams = {
            width: ENEA._isHD ? 1248 : 624,
            height: ENEA._isHD ? 2080 : 1040,
            background: 0,
            keepAspectRatio: !1,
            forcePortrait: !0
        };
        this.start();
        this.checkMusic();
        this.checkAchievements();
        new a.Layers(a.game);
        this.preloader()
    };
    a.InitGame.prototype = {
        checkAchievements: function() {
            a.game.achievements = new a.ReadAchievements;
            a.achieved = a.game.achievements.read()
        },
        start: function() {
            a.game = new ENEA.Game(this.gameParams, "FOTN-game-container");
            ENEA._isDesktop || this.handleViewporter();
            a.game.setContextSmoothing(!0);
            a.game.render();
            ENEA._isDesktop && PIXI.canUseNewCanvasBlendModes() && (a.CANBLEND = !0);
            a.game.resolution = ENEA._isHD ? "hd": "sd"
        },
        checkMusic: function() {
            ENEA.Storage.has("music") || ENEA.Storage.set("music", 0);
            a._musicMuted = !!parseInt(ENEA.Storage.get("music"));
            ENEA.Storage.has("sounds") || ENEA.Storage.set("sounds", 0);
            a._soundsMuted = !!parseInt(ENEA.Storage.get("sounds"))
        },
        handleViewporter: function() {
            document.getElementById("lock").style.display = "block";
            window.addEventListener("viewportready",
            function() {
                ENEA.hideAddressBar()
            },
            !1)
        },
        preloader: function() {
            var f = this;
            this.loaderFiles = {
                preloader: "media/" + a.game.resolution + "/preloader.png",
                preloader_desc: "media/" + a.game.resolution + "/preloader.json"
            };
            this.loader = new ENEA.Preloader;
            for (var h in this.loaderFiles) this.loader.add(this.loaderFiles[h]);
            this.loader.onComplete = function() {
                f.drawLoader(a.game); (new a.Loader(a.game)).onComplete = f.prepareGame.bind(f)
            };
            this.loader.start()
        },
        drawLoader: function(f) {
            f.loaderBG = PIXI.Texture.fromFrame("loadingbar_bg.png");
            f.loaderFG = PIXI.Texture.fromFrame("loadingbar.png");
            f.loaderImage = PIXI.Texture.fromFrame("loadingtitle.png");
            f.loaderWhite = PIXI.Texture.fromFrame("loadingwhite.png");
            f.loaderLogo = PIXI.Texture.fromFrame("loadinglogo.png");
            f.loaderNinja = PIXI.Texture.fromFrame("loadingninja.png");
            f.loaderContainer.addChild(new ENEA.Sprite({
                texture: f.loaderWhite,
                anchorXY: 0.5,
                scaleXY: 20,
                x: f.centerX,
                y: f.centerY
            }));
            f.loaderContainer.addChild(new ENEA.Sprite({
                texture: f.loaderLogo,
                anchorXY: 0.5,
                x: f.centerX,
                y: f.relY(0.25)
            }));
            f.loaderNinjaSprite = (new ENEA.Sprite({
                texture: f.loaderNinja,
                anchorXY: 0.5,
                x: f.centerX,
                y: f.relY(0.6)
            })).addTo(f.loaderContainer);
            f.loaderLoadingSprite = (new ENEA.Sprite({
                texture: f.loaderImage,
                anchorXY: 0.5,
                x: f.centerX,
                y: f.relY(0.855)
            })).addTo(f.loaderContainer);
            f.loaderBgSprite = (new ENEA.Sprite({
                texture: f.loaderBG,
                anchorXY: 0.5,
                x: f.centerX,
                y: f.relY(0.9)
            })).addTo(f.loaderContainer);
            f.loaderFgSprite = (new ENEA.Sprite({
                texture: f.loaderFG,
                anchorX: 0,
                anchorY: 0.5,
                x: f.centerX - f.loaderFG.width / 2,
                y: f.relY(0.9)
            })).addTo(f.loaderContainer);
            ENEA._isDesktop && (f.loaderYes = PIXI.Texture.fromFrame("loadingyes.png"), f.loaderNo = PIXI.Texture.fromFrame("loadingno.png"), f.loaderSounds = PIXI.Texture.fromFrame("loadingsounds.png"), f.loaderSoundsSprite = (new ENEA.Sprite({
                texture: f.loaderSounds,
                anchorX: 0.5,
                anchorY: 0.5,
                visible: !1,
                x: f.centerX,
                y: f.relY(0.55)
            })).addTo(f.loaderContainer), f.loaderYesSprite = (new ENEA.Sprite({
                texture: f.loaderYes,
                anchorX: 0.5,
                anchorY: 0.5,
                visible: !1,
                x: f.centerX - f.relX(0.13),
                y: f.relY(0.65)
            })).addTo(f.loaderContainer), f.loaderYesSprite.click = f.loaderYesSprite.tap = function() {
                a._musicMuted = !1;
                a._soundsMuted = !1;
                ENEA.Storage.set("music", a._musicMuted ? 1 : 0);
                ENEA.Storage.set("sounds", a._soundsMuted ? 1 : 0);
                this.answer && this.answer.call()
            },
            f.loaderNoSprite = (new ENEA.Sprite({
                texture: f.loaderNo,
                anchorX: 0.5,
                anchorY: 0.5,
                visible: !1,
                x: f.centerX + f.relX(0.13),
                y: f.relY(0.65)
            })).addTo(f.loaderContainer), f.loaderNoSprite.click = f.loaderNoSprite.tap = function() {
                a._musicMuted = !0;
                a._soundsMuted = !0;
                ENEA.Storage.set("music", a._musicMuted ? 1 : 0);
                ENEA.Storage.set("sounds", a._soundsMuted ? 1 : 0);
                this.answer && this.answer.call()
            })
        },
        prepareGame: function() {
            a.game.bitmapFont = ENEA._isHD ? {
                font: "176px sauna",
                align: "center"
            }: {
                font: "88px sauna",
                align: "center"
            };
            a.game.Camera = new a.Camera;
            new a.DrawGame(a.game, a.game.gameScreen);
            ENEA._isDesktop && new a.DrawSettings(a.game, a.game.settings);
            if (1 == parseInt(ENEA.Storage.get("tutorial")) || parseInt(ENEA.Storage.get("best")) < a._tutorialHeight) a.game.tutorialContainer = new ENEA.Container,
            a.game.tutorialContainer.visible = !1,
            a.game.stage.addChild(a.game.tutorialContainer),
            a.game.tutorial = new a.DrawTutorial(a.game, a.game.tutorialContainer);
            a.game.unlocked = new a.DrawAchievementUnlocked(a.game, a.game.achievementContainer);
            new a.DrawGameOver(a.game, a.game.gameOverScreen);
            new a.DrawMenu(a.game, a.game.menuScreen);
            new a.MenuIN(a.game, a.game.menuScreen)
        }
    };
    a.showButtonsState = function(f) {
        this.game.buttonsContainer.position.y = 0;
        switch (f) {
        case "menu":
            this.game.buttonsContainer.visible = !0;
            this.game.buttonsContainer.bottomButtons.x = 0;
            this.game.button_restart.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_start.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_achievements.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_leaderboard.applyParams({
                visible: a._isNuggeta ? !0 : !1,
                responsive: a._isNuggeta ? !0 : !1
            });
            this.game.button_moregames.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_kik.applyParams({
                visible: a._isKik ? !0 : !1,
                responsive: a._isKik ? !0 : !1
            });
            this.game.button_facebook.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_twitter.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_home.applyParams({
                visible: !1,
                responsive: !1
            });
            break;
        case "achievements":
            this.game.buttonsContainer.bottomButtons.x = 0;
            this.game.buttonsContainer.visible = !0;
            this.game.button_restart.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_start.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_achievements.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_leaderboard.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_moregames.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_kik.applyParams({
                visible: a._isKik ? !0 : !1,
                responsive: a._isKik ? !0 : !1
            });
            this.game.button_facebook.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_twitter.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_home.applyParams({
                visible: !1,
                responsive: !1
            });
            break;
        case "leaderboards":
            this.game.buttonsContainer.bottomButtons.x = 0;
            this.game.buttonsContainer.visible = !0;
            this.game.button_restart.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_start.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_achievements.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_leaderboard.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_moregames.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_kik.applyParams({
                visible: a._isKik ? !0 : !1,
                responsive: a._isKik ? !0 : !1
            });
            this.game.button_facebook.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_twitter.applyParams({
                visible: !0,
                responsive: !0
            });
            this.game.button_home.applyParams({
                visible: !1,
                responsive: !1
            });
            break;
        case "game":
            this.game.buttonsContainer.bottomButtons.x = 0;
            this.game.buttonsContainer.visible = !1;
            this.game.button_restart.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_start.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_achievements.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_leaderboard.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_moregames.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_kik.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_facebook.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_twitter.applyParams({
                visible: !1,
                responsive: !1
            });
            this.game.button_home.applyParams({
                visible: !1,
                responsive: !1
            });
            break;
        case "over":
            this.game.buttonsContainer.bottomButtons.x = 0,
            this.game.buttonsContainer.visible = !0,
            this.game.button_restart.applyParams({
                visible: !0,
                responsive: !0
            }),
            this.game.button_start.applyParams({
                visible: !1,
                responsive: !1
            }),
            this.game.button_achievements.applyParams({
                visible: !1,
                responsive: !1
            }),
            this.game.button_leaderboard.applyParams({
                visible: !1,
                responsive: !1
            }),
            this.game.button_moregames.applyParams({
                visible: !0,
                responsive: !0
            }),
            this.game.button_kik.applyParams({
                visible: a._isKik ? !0 : !1,
                responsive: a._isKik ? !0 : !1
            }),
            this.game.button_facebook.applyParams({
                visible: !0,
                responsive: !0
            }),
            this.game.button_twitter.applyParams({
                visible: !0,
                responsive: !0
            }),
            this.game.button_home.applyParams({
                visible: !0,
                responsive: !0
            })
        }
    };
    window.onload = function() {
        new a.InitGame
    };
    window.addEventListener("touchstart",
    function() {
        this.removeEventListener("touchstart", arguments.callee, !1);
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            var f = new AudioContext,
            h = f.createBuffer(1, 1, 22050),
            n = f.createBufferSource();
            n.buffer = h;
            n.connect(f.destination);
            n.noteOn(0);
            setTimeout(function() {
                if (n.playbackState === n.PLAYING_STATE || n.playbackState === n.FINISHED_STATE) a._isAudioUnlocked = !0
            },
            500)
        } catch(p) {
            console.log("Web Audio API is not supported")
        }
    },
    !1);
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = a), exports.FOTN = a) : this.FOTN = a
}).call(this);
FOTN.Achievements = function(a, f) {
    var h = this;
    this.game = a;
    this.layer = f;
    this.currentPage = 0;
    this.maxItems = 7;
    this.titleTop = a.relY(0.055);
    this.itemsTop = a.relY(0.15);
    this.spacing = this.game.relY(0.103);
    this.layer.removeAllChildren();
    this.bgLayer = new FOTN.BGScroller(this.game);
    this.layer.addChild(this.bgLayer);
    this.drawTitle();
    this.drawItems();
    this.drawButtons();
    this.drawShine();
    this.fadeIN();
    this.game.addUpdate("scrollBG",
    function() {
        h.bgLayer.layerCamera.y -= 0.005;
        h.bgLayer.updatePosition();
        h.layer.shine.rotation += 0.005
    })
};
FOTN.Achievements.prototype = {
    drawTitle: function() {
        this.titleSprite = new PIXI.Text("Achievements", {
            font: (ENEA._isHD ? 100 : 50) + "px Sauna-BlackItalic",
            fill: "#FFFFFF",
            align: "center"
        });
        this.titleSprite.applyParams({
            x: this.game.centerX - this.titleSprite.width / 2,
            y: this.titleTop - this.titleSprite.height / 2
        }).addTo(this.layer)
    },
    doSeppuku: function() {
        this.destroyItems();
        this.titleSprite.destroy(!0)
    },
    destroyItems: function() {
        if (this.itemsContainer instanceof ENEA.Container) {
            for (; this.itemsContainer.children.length;) this.itemsContainer.children[0].doSeppuku && this.itemsContainer.children[0].doSeppuku(),
            this.itemsContainer.removeChild(this.itemsContainer.children[0]);
            this.itemsContainer.destroy()
        }
    },
    getPercent: function(a) {
        var f = 0;
        4 <= a && 8 >= a && (f = parseInt(ENEA.Storage.get("longrunner")) / FOTN._desired[a]);
        12 <= a && 14 >= a && (f = parseInt(ENEA.Storage.get("longslider")) / FOTN._desired[a]);
        15 <= a && 17 >= a && (f = parseInt(ENEA.Storage.get("reincarnation")) / FOTN._desired[a]);
        18 <= a && 20 >= a && (f = parseInt(FOTN.achieved[a]) / FOTN._desired[a]);
        return f
    },
    drawItems: function() {
        this.destroyItems();
        this.itemsContainer = new ENEA.Container;
        this.layer.addChild(this.itemsContainer);
        for (var a = this.currentPage * this.maxItems,
        f = 0; f < this.maxItems && a < FOTN._achievements.data.length;) {
            var h = new FOTN.AchievementsItem(this.game, [this.game.textures[FOTN._achievements.data[a].locked], this.game.textures[FOTN._achievements.data[a].unlocked]], FOTN._achievements.data[a].name, FOTN._achievements.data[a].description, FOTN.achieved[a] == FOTN.game.achievements.done ? !1 : !0, this.getPercent(a));
            h.x = this.game.centerX;
            h.y = this.itemsTop + this.spacing * f;
            this.itemsContainer.addChild(h);
            a++;
            f++
        }
    },
    drawButtons: function() {
        var a = this,
        f = this.game.relY(0.855),
        h = this.game.relX(0.228);
        this.game.button_downArrow.applyParams({
            x: a.game.centerX - h,
            y: f,
            visible: !0,
            onClick: function() {
                a.currentPage++;
                a.currentPage * a.maxItems >= FOTN._achievements.data.length ? a.currentPage--:a.drawItems()
            }
        }).addTo(this.layer);
        this.game.button_upArrow.applyParams({
            x: a.game.centerX,
            y: f,
            visible: !0,
            onClick: function() {
                a.currentPage--;
                0 > a.currentPage ? a.currentPage++:a.drawItems()
            }
        }).addTo(this.layer);
        this.game.button_homeSmall.applyParams({
            x: this.game.centerX + h,
            y: f,
            visible: !0,
            onClick: function() {
                a.doSeppuku();
                a.game.removeAllUpdates();
                ENEA.Tweener.removeAll();
                a.game.achievementsScreen.visible = !1;
                a.game.leaderboardsScreen.visible = !1;
                a.game.gameOverScreen.visible = !1;
                a.game.gameScreen.visible = !1;
                ENEA._isDesktop && (a.game.settings.visible = !1);
                FOTN.showButtonsState("menu");
                a.game.buttonsContainer.visible = !1;
                new FOTN.MenuIN(FOTN.game, FOTN.game.menuScreen)
            }
        }).addTo(this.layer);
        this.game.button_homeSmall.callforward = function() {}
    },
    fadeIN: function(a) {
        var f = this;
        ENEA.fadeElement(this.layer, 0, 1, FOTN.FADETIME,
        function() {
            ENEA._isDesktop && (f.game.settings.visible = !0);
            f.layer.visible = !0;
            FOTN.showButtonsState("achievements")
        },
        a)
    },
    drawShine: function() {
        this.layer.shine = (new ENEA.Sprite({
            texture: this.game.textures.shine,
            anchorXY: 0.5,
            scaleXY: 2,
            x: this.game.centerX,
            y: this.game.relY( - 0.05)
        })).addTo(this.layer)
    }
};
FOTN.AchievementsItem = function(a, f, h, n, p, b) {
    this.game = a;
    this._isLocked = p || !1;
    this.pictures = f;
    this.percent = void 0 === b ? 0 : b;
    this.text = h;
    this.description = n;
    this.positions = {
        pictureX: this.game.relX( - 0.241),
        pictureY: this.game.relY(0),
        textX: this.game.relX( - 0.152),
        textY: this.game.relY( - 0.014),
        descX: this.game.relX( - 0.152),
        descY: this.game.relY(0.018)
    };
    ENEA.Container.call(this);
    this.drawBackground();
    this.drawPictures();
    this.drawText();
    this.drawDescription()
};
FOTN.AchievementsItem.prototype = Object.create(ENEA.Container.prototype);
FOTN.AchievementsItem.prototype.constructor = FOTN.AchievementsItem;
FOTN.AchievementsItem.prototype.drawBackground = function() {
    this.bgSprite = (new ENEA.Sprite({
        texture: this.game.textures.itemBg,
        anchorX: 0.5,
        anchorY: 0.5
    })).addTo(this)
};
FOTN.AchievementsItem.prototype.doSeppuku = function() {
    this.textSprite.destroy(!0);
    this.descriptionSprite.destroy(!0);
    null !== this.tmpTexture && this.tmpTexture.destroy(!0)
};
FOTN.AchievementsItem.prototype.drawPictures = function() {
    this.pic1Sprite = (new ENEA.Sprite({
        texture: this.pictures[0],
        x: this.positions.pictureX,
        y: this.positions.pictureY,
        anchorX: 0.5,
        anchorY: 0.5
    })).addTo(this);
    this.tmpTexture = null;
    if (this._isLocked) {
        var a = Math.floor(this.percent * this.pictures[1].height);
        if (0 !== a) {
            var f = {
                id: "eneaDefaultCanvas",
                width: this.pictures[1].width,
                height: this.pictures[1].height,
                border: "1px solid",
                display: "inline"
            },
            h = new ENEA.createCanvas(f);
            h.context.drawImage(this.pictures[1].baseTexture.source, this.pictures[1].crop.x, this.pictures[1].crop.y + f.height - a, this.pictures[1].crop.width, a, 0, f.height - a, this.pictures[1].crop.width, a);
            this.tmpTexture = h.getTexture();
            h.destroy()
        }
    }
    this.pic2Sprite = (new ENEA.Sprite({
        texture: null == this.tmpTexture ? this.pictures[1] : this.tmpTexture,
        x: this.positions.pictureX,
        y: this.positions.pictureY,
        visible: null == this.tmpTexture ? !1 : !0,
        anchorX: 0.5,
        anchorY: 0.5
    })).addTo(this);
    this.locked = this._isLocked
};
FOTN.AchievementsItem.prototype.drawText = function() {
    this.textSprite = new PIXI.Text(this.text, {
        font: (ENEA._isHD ? 76 : 38) + "px Sauna-BlackItalic",
        fill: "#FFFFFF",
        align: "center"
    });
    this.textSprite.applyParams({
        x: this.positions.textX,
        y: this.positions.textY - this.textSprite.height / 2
    }).addTo(this)
};
FOTN.AchievementsItem.prototype.drawDescription = function() {
    this.descriptionSprite = new PIXI.Text(this.description, {
        font: (ENEA._isHD ? 50 : 25) + "px Sauna-BlackItalic",
        fill: "#FFFFFF",
        align: "center"
    });
    this.descriptionSprite.applyParams({
        x: this.positions.descX,
        y: this.positions.descY - this.descriptionSprite.height / 2
    }).addTo(this)
};
Object.defineProperty(FOTN.AchievementsItem.prototype, "locked", {
    get: function() {
        return this._isLocked
    },
    set: function(a) { (this._isLocked = a) ? this.pic1Sprite.visible = !0 : (this.pic1Sprite.visible = !1, this.pic2Sprite.visible = !0)
    }
});
FOTN.BGScroller = function(a) {
    this.game = a;
    this.layerCamera = new PIXI.Point(0, 0);
    this.bgPattern = [0, 0, 0, 0, 0, 0];
    this.bgPatternLength = this.bgPattern.length;
    this.leftBorder = this.game.relX(0.11);
    this.rightBorder = this.game.relX(0.89);
    this.textures = [this.game.textures.bg1, this.game.textures.bg2, this.game.textures.bg3];
    this.stageHeight = 20;
    this.tileHeight = this.stageHeight / 4;
    this.meter = this.game.height / this.stageHeight;
    this.bgOffset = Math.floor(this.meter * this.tileHeight);
    PIXI.DisplayObjectContainer.call(this);
    this.createPool();
    this.resetAll()
};
FOTN.BGScroller.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
FOTN.BGScroller.prototype.constructor = FOTN.BGScroller;
FOTN.BGScroller.prototype.resetAll = function() {
    this.repeat = this.y = this.x = 0;
    this.updatePosition()
};
FOTN.BGScroller.prototype.createPool = function() {
    this.maxObjects = 5;
    this._poolBG = [];
    this._poolLS = [];
    this._poolRS = [];
    for (var a = 0; a < this.maxObjects; a++) {
        var f = new PIXI.Sprite(this.textures[0]);
        f.anchorX = 0.5;
        f.anchorY = 1;
        f.x = this.game.centerX;
        this.addChild(f);
        this._poolBG.push(f)
    }
    for (a = 0; a < this.maxObjects; a++) f = new PIXI.Sprite(this.game.textures.sideLeft),
    f.anchorX = 0,
    f.anchorY = 1,
    f.x = 0,
    this.addChild(f),
    this._poolLS.push(f);
    for (a = 0; a < this.maxObjects; a++) f = new PIXI.Sprite(this.game.textures.sideRight),
    f.anchorX = 1,
    f.anchorY = 1,
    f.x = this.game.width,
    this.addChild(f),
    this._poolRS.push(f)
};
FOTN.BGScroller.prototype.updatePosition = function() {
    this.position.y = this.game.height - this.meter * this.layerCamera.y;
    for (var a, f = ~~ (this.position.y / this.bgOffset), h = ~~ (this.game.height - Math.abs(f * this.bgOffset)), n = 0; n < this.maxObjects; n++) a = this.textures[this.bgPattern[(n + f) % this.bgPatternLength]],
    this._poolBG[n].texture !== a && this._poolBG[n].setTexture(a),
    this._poolBG[n].position.y = h,
    this._poolLS[n].position.y = h,
    this._poolRS[n].position.y = h,
    h -= this.bgOffset
};
FOTN.Button = function(a) {
    this.textures = a;
    PIXI.Sprite.call(this, this.textures[0]);
    this.responsive = !0;
    this.anchorXY = 0.5;
    this.disabled = !1;
    this._clickDelta = this._lastClickTime = this._currentClickTime = null;
    this._bugTime = 400;
    ENEA._isDesktop || this.tap || !this.click || (this.tap = this.click);
    ENEA._isDesktop || this.touchmove || !this.mousemove || (this.touchmove = this.mousemove);
    ENEA._isDesktop || this.touchstart || !this.mousedown || (this.touchstart = this.mousedown);
    ENEA._isDesktop || this.touchend || !this.mouseup || (this.touchend = this.mouseup);
    ENEA._isDesktop || this.touchendoutside || !this.mouseupoutside || (this.touchendoutside = this.mouseupoutside)
};
FOTN.Button.prototype = Object.create(PIXI.Sprite.prototype);
FOTN.Button.prototype.constructor = FOTN.Button;
FOTN.Button.prototype.normal = function() {
    this.setTexture(this.textures[0])
};
FOTN.Button.prototype.hover = function() {
    1 < this.textures.length && this.setTexture(this.textures[1])
};
FOTN.Button.prototype.pressed = function() {
    2 < this.textures.length && this.setTexture(this.textures[2])
};
FOTN.Button.prototype.enable = function() {
    this.disabled = !1;
    this.normal()
};
FOTN.Button.prototype.disable = function() {
    3 < this.textures.length && (this.disabled = !0, this.setTexture(this.textures[3]))
};
FOTN.Button.prototype.mouseover = function() {
    this.disabled || this.hover()
};
FOTN.Button.prototype.mouseout = function() {
    this.disabled || this.normal()
};
FOTN.Button.prototype.mousedown = FOTN.Button.prototype.touchstart = function() {
    this.disabled || (this._currentClickTime = Date.now(), this._clickDelta = this._currentClickTime - this._lastClickTime, this._clickDelta < this._bugTime || this.pressed(), this._lastClickTime = this._currentClickTime)
};
FOTN.Button.prototype.mouseup = FOTN.Button.prototype.touchend = function() {
    this.disabled || (this.normal(), FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("button"), this.onClick && this.onClick.call())
};
FOTN.Button.prototype.touchendoutside = function() {
    this.disabled || this.normal()
};
FOTN.Camera = function(a) {
    this.game = a;
    PIXI.Point.call(this, 0, 0);
    this.playerOffset = 6
};
FOTN.Camera.prototype = Object.create(PIXI.Point.prototype);
FOTN.Camera.prototype.constructor = FOTN.Camera;
FOTN.DrawAchievementUnlocked = function(a, f) {
    this.game = a;
    this.layer = f;
    this.isOut = !1;
    this.init()
};
FOTN.DrawAchievementUnlocked.prototype = {
    init: function() {
        this.unlockedSprite = (new ENEA.Sprite({
            texture: this.game.textures.ach_unlocked,
            anchorX: 0.5,
            anchorY: 1,
            x: this.game.centerX + this.game.relX(0.07),
            y: -10
        })).addTo(this.layer);
        this.unlockedIconSprite = (new ENEA.Sprite({
            texture: this.game.textures.ach_fastRunner,
            anchorX: 0.5,
            anchorY: 1,
            x: this.game.centerX - this.game.relX(0.18),
            y: -10
        })).addTo(this.layer)
    },
    animateOut: function() {
        FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("achievement");
        if (!this.isOut) {
            var a = this,
            f = {
                y: -10
            },
            h = {
                y: this.game.textures.ach_unlocked.height + this.game.relY(0.02)
            },
            n = (new ENEA.Tweener.Tween(f)).to(h, 200).easing(ENEA.Tweener.Easing.Cubic.Out).onStart(function() {
                a.isOut = !0;
                a.layer.visible = !0
            }).onUpdate(function() {
                a.unlockedSprite.position.y = f.y;
                a.unlockedIconSprite.position.y = f.y
            }),
            h = (new ENEA.Tweener.Tween(f)).to(h, 3E3),
            p = {
                y: this.game.textures.ach_unlocked.height + this.game.relY(0.02)
            }; (new ENEA.Tweener.Tween(p)).to({
                y: -10
            },
            200).delay(3200).easing(ENEA.Tweener.Easing.Cubic.Out).onUpdate(function() {
                a.unlockedSprite.position.y = p.y;
                a.unlockedIconSprite.position.y = p.y
            }).onComplete(function() {
                a.layer.visible = !0;
                a.isOut = !1
            }).start();
            n.chain(h);
            n.start()
        }
    }
};
FOTN.DrawGame = function(a, f) {
    this.game = a;
    this.layer = f;
    this.init()
};
FOTN.DrawGame.prototype = {
    init: function() {
        this.layer.bgContainer = new FOTN.GameBackground(this.game);
        this.layer.addChild(this.layer.bgContainer);
        this.layer.shine = (new ENEA.Sprite({
            texture: this.game.textures.shine,
            anchorXY: 0.5,
            scaleXY: 2,
            x: this.game.centerX,
            y: this.game.relY( - 0.05)
        })).addTo(this.layer);
        this.game.player = new FOTN.Player(this.game, this.layer);
        this.layer.bgContainer.addChild(this.game.player);
        this.drawHeightText()
    },
    drawHeightText: function() {
        this.layer.heightText = new PIXI.BitmapText("", this.game.bitmapFont);
        this.layer.heightText.x = this.game.centerX - this.layer.heightText.textWidth / 2;
        this.layer.heightText.y = this.game.relY(0.15);
        this.layer.addChild(this.layer.heightText)
    }
};
FOTN.DrawGameOver = function(a, f) {
    this.game = a;
    this.layer = f;
    this.init();
	
};
FOTN.DrawGameOver.prototype = {
    init: function() {
        this.game.bestScore = new PIXI.Text("最好成绩: ", {
            font: (ENEA._isHD ? 40 : 40) + "px Sauna-BlackItalic",
            fill: "#FFFFFF",
            align: "center"
        });
        this.game.bestScore.applyParams({
            x: this.game.centerX - this.game.bestScore.width / 2,
            y: this.game.relY(0.25)
        }).addTo(this.layer);
        this.game.hintMainText = new PIXI.Text("Hint: ", {
            font: (ENEA._isHD ? 100 : 50) + "px Sauna-BlackItalic",
            fill: "#FFFFFF",
            align: "center"
        });
        this.game.hintMainText.applyParams({
            x: this.game.centerX - this.game.hintMainText.width / 2,
            y: this.game.relY(0.675)
        }).addTo(this.layer);
        var a = FOTN._hints.data[~~ (Math.random() * (FOTN._hints.data.length - 1))];
        this.game.hintText = new PIXI.Text(a, {
            font: (ENEA._isHD ? 80 : 40) + "px Sauna-BlackItalic",
            fill: "#FFFFFF",
            align: "center"
        });
        this.game.hintText.applyParams({
            x: this.game.centerX - this.game.hintText.width / 2,
            y: this.game.relY(0.735)
        }).addTo(this.layer);
        this.game.button_replay.applyParams({
            x: this.game.centerX,
            y: this.game.relY(0.775),
            visible: !1,
            responsive: !1
        }).addTo(this.layer)
    }
};
FOTN.DrawMenu = function(a, f) {
    this.game = a;
    this.layer = f;
    this.init()
};
FOTN.DrawMenu.prototype = {
    init: function() {
        var a = this;
        this.layer.bg = (new ENEA.Sprite({
            texture: this.game.textures.mainBg,
            anchorXY: 0.5,
            x: this.game.centerX,
            y: this.game.centerY,
            alpha: 0,
            visible: !0
        })).addTo(this.layer);
        this.layer.shine = (new ENEA.Sprite({
            texture: this.game.textures.shine,
            anchorXY: 0.5,
            scaleXY: 1,
            x: this.game.centerX,
            y: this.game.relY(0.5),
            visible: !1
        })).addTo(this.layer);
        this.layer.stripeTop = (new ENEA.Sprite({
            texture: this.game.textures.mainStripeTop,
            anchorX: 0.5,
            anchorY: 1,
            x: this.game.centerX,
            y: this.game.textures.mainStripeTop.height,
            alpha: 1,
            visible: !0
        })).addTo(this.layer);
        this.layer.stripeBottom = (new ENEA.Sprite({
            texture: this.game.textures.mainStripeBottom,
            anchorX: 0.5,
            anchorY: 0,
            x: this.game.centerX,
            y: this.game.height - this.game.textures.mainStripeBottom.height,
            alpha: 1,
            visible: !0
        })).addTo(this.layer);
        this.layer.ornament = (new ENEA.Sprite({
            texture: this.game.textures.mainPattern,
            anchorXY: 0.5,
            x: this.game.centerX,
            y: this.game.centerY,
            alpha: 0,
            visible: !0
        })).addTo(this.layer);
        this.layer.ninja = (new ENEA.Sprite({
            texture: this.game.textures.mainNinja,
            anchorXY: 0.5,
            x: this.game.centerX,
            y: this.game.relY(0.535),
            visible: !0
        })).addTo(this.layer);
        this.layer.title = (new ENEA.Sprite({
            texture: this.game.textures.mainLogo,
            anchorXY: 0.5,
            x: this.game.centerX,
            y: this.game.relY(0.127),
            visible: !0
        })).addTo(this.layer);
        this.game.button_home.applyParams({
            x: this.game.centerX + this.game.relX(0.13),
            y: this.game.centerY + this.game.relY(0.005),
            onClick: function() {
                a.game.button_home.callforward && a.game.button_home.callforward.call();
                a.game.removeAllUpdates();
                ENEA.Tweener.removeAll();
                a.game.achievementsScreen.visible = !1;
                a.game.leaderboardsScreen.visible = !1;
                a.game.gameOverScreen.visible = !1;
                a.game.gameScreen.visible = !1;
                ENEA._isDesktop && (a.game.settings.visible = !1);
                FOTN.showButtonsState("menu");
                a.game.buttonsContainer.visible = !1;
                new FOTN.MenuIN(FOTN.game, FOTN.game.menuScreen)
            }
        }).addTo(this.game.buttonsContainer);
        this.game.button_restart.applyParams({
            x: this.game.centerX + this.game.relX( - 0.13),
            y: this.game.centerY + this.game.relY(0.005)
        }).addTo(this.game.buttonsContainer);
        this.game.button_start.applyParams({
            x: this.game.centerX,
            y: this.game.relY(0.835),
            onClick: function() {
                new FOTN.MenuOUT(FOTN.game, FOTN.game.menuScreen,
                function() {
                    new FOTN.RunGame(FOTN.game, FOTN.game.gameScreen)
                })
            }
        }).addTo(this.game.buttonsContainer);
        var f = new ENEA.Container;
        this.layer.addChild(f);
        this.game.button_achievements.applyParams({
            x: this.game.relX(0.12),
            y: this.game.relY(0.835),
            onClick: function() {
                new FOTN.MenuOUT(FOTN.game, FOTN.game.menuScreen,
                function() {
                    new FOTN.Achievements(a.game, a.game.achievementsScreen)
                })
            }
        }).addTo(f);
        this.game.button_leaderboard.applyParams({
            x: this.game.relX(0.88),
            y: this.game.relY(0.835),
            onClick: function() {
                new FOTN.MenuOUT(FOTN.game, FOTN.game.menuScreen,
                function() {
                    new FOTN.Leaderboards(a.game, a.game.leaderboardsScreen)
                })
            }
        }).addTo(f);
        this.game.buttonsContainer.bottomButtons = new ENEA.Container;
        this.game.buttonsContainer.addChild(this.game.buttonsContainer.bottomButtons);
        var f = this.game.relX(FOTN._isKik ? 0.305 : 0.375),
        h = this.game.relY(0.943),
        n = this.game.relY(0.08);
        this.game.button_moregames.applyParams({
            x: f,
            y: h
        }).addTo(this.game.buttonsContainer.bottomButtons);
        this.game.button_kik.applyParams({
            x: f + 1 * n,
            y: h,
            visible: FOTN._isKik ? !0 : !1,
            onClick: function() {
                console.log("menu: kik clicked")
            }
        }).addTo(this.game.buttonsContainer.bottomButtons);
        this.game.button_facebook.applyParams({
            x: f + (FOTN._isKik ? 2 : 1) * n,
            y: h
        }).addTo(this.game.buttonsContainer.bottomButtons);
        this.game.button_twitter.applyParams({
            x: f + (FOTN._isKik ? 3 : 2) * n,
            y: h
        }).addTo(this.game.buttonsContainer.bottomButtons);
        FOTN.showButtonsState("menu");
        this.game.buttonsContainer.visible = !1
    }
};
FOTN.MenuIN = function(a, f) {
    this.game = a;
    this.layer = f;
    this.preparePositions();
    this.layer.visible = !0;
    this.layer.responsive = !0;
    this.game.eventsContainer.responsive = !1;
    this.start()
};
FOTN.MenuIN.prototype = {
    preparePositions: function() {
        this.layer.stripeTop.y = 0;
        this.layer.stripeBottom.y = this.game.height;
        this.layer.ninja.x = this.game.width + this.layer.ninja.texture.width / 2;
        this.layer.title.y = this.game.relY( - 0.1);
        this.game.buttonsContainer.y = 0;
        this.game.button_achievements.x = this.game.relX( - 0.12);
        this.game.button_leaderboard.x = this.game.relX(1.12)
    },
    start: function() {
        var a = this;
        this.fadeBG([this.layer.bg, this.layer.ornament], 0, 1, 300,
        function() {
            a.layer.bg.visible = !0;
            a.layer.ornament.visible = !0
        },
        function() {
            a.waveNinja();
            a.ninjaIN(null,
            function() {
                a.titleIN(null,
                function() {
                    a.shineIN(function() {
                        a.layer.shine.visible = !0;
                        FOTN.game.achievements.compareAddict()
                    },
                    null);
                    a.rotateShine()
                })
            })
        })
    },
    fadeBG: function(a, f, h, n, p, b) {
        var d = {
            alpha: f
        },
        c = {
            alpha: h
        }; (new ENEA.Tweener.Tween(d)).to(c, n).easing(ENEA.Tweener.Easing.Linear.None).onStart(function() {
            p && p.call()
        }).onUpdate(function() {
            for (var b = 0; b < a.length; b++) a[b].alpha = ENEA.normalize(d.alpha)
        }).onComplete(function() {
            for (var d = 0; d < a.length; d++) a[d].alpha = c.alpha;
            b && b.call()
        }).start()
    },
    waveNinja: function() {
        var a = this,
        f = 0;
        this.game.addUpdate("ninja",
        function() {
            f += 0.02;
            a.layer.ninja.position.y = a.game.relativeY(0.01) * Math.sin(f) + a.game.relativeY(0.53)
        })
    },
    ninjaIN: function(a, f) {
        var h = this,
        n = {
            ninjaX: this.layer.ninja.x,
            stripeTopY: this.layer.stripeTop.y,
            stripeBottomY: this.layer.stripeBottom.y
        },
        p = {
            ninjaX: this.game.centerX,
            stripeTopY: this.game.textures.mainStripeTop.height,
            stripeBottomY: this.game.height - this.game.textures.mainStripeBottom.height
        }; (new ENEA.Tweener.Tween(n)).to(p, 500).easing(ENEA.Tweener.Easing.Cubic.Out).onStart(function() {
            a && a.call()
        }).onUpdate(function() {
            h.layer.ninja.position.x = n.ninjaX;
            h.layer.stripeTop.position.y = n.stripeTopY;
            h.layer.stripeBottom.position.y = n.stripeBottomY
        }).onComplete(function() {
            f && f.call()
        }).start()
    },
    titleIN: function(a, f) {
        var h = this,
        n = {
            titleY: this.layer.title.y,
            allButtonsY: this.game.buttonsContainer.y + this.game.relY(0.22),
            aX: this.game.button_achievements.x,
            lX: this.game.button_leaderboard.x
        },
        p = {
            titleY: this.game.relY(0.127),
            aX: this.game.relX(0.12),
            lX: this.game.relX(0.88),
            allButtonsY: 0
        }; (new ENEA.Tweener.Tween(n)).to(p, 200).easing(ENEA.Tweener.Easing.Cubic.Out).onStart(function() {
            h.game.buttonsContainer.visible = !0;
            a && a.call()
        }).onUpdate(function() {
            h.layer.title.position.y = n.titleY;
            h.game.buttonsContainer.position.y = n.allButtonsY;
            h.game.button_achievements.position.x = n.aX;
            h.game.button_leaderboard.position.x = n.lX
        }).onComplete(function() {
            f && f.call()
        }).start()
    },
    rotateShine: function(a, f) {
        var h = this;
        this.game.addUpdate("shine",
        function() {
            h.layer.shine.rotation += 0.005
        })
    },
    shineIN: function(a, f) {
        var h = this,
        n = {
            shineA: 0,
            shineS: 0.1
        }; (new ENEA.Tweener.Tween(n)).to({
            shineA: 1,
            shineS: 4
        },
        1E3).easing(ENEA.Tweener.Easing.Back.Out).onStart(function() {
            a && a.call()
        }).onUpdate(function() {
            h.layer.shine.alpha = ENEA.normalize(n.shineA);
            h.layer.shine.scale.x = n.shineS;
            h.layer.shine.scale.y = n.shineS
        }).onComplete(function() {
            f && f.call()
        }).start()
    }
};
FOTN.MenuOUT = function(a, f, h) {
    this.game = a;
    this.layer = f;
    this.callback = h;
    this.start()
};
FOTN.MenuOUT.prototype = {
    start: function() {
        var a = this;
        a.titleOUT(null,
        function() {
            a.ninjaOUT(null,
            function() {
                a.shineOUT();
                a.fadeBG([a.layer.bg, a.layer.ornament], 1, 0, 300, null,
                function() {
                    a.layer.visible = !1;
                    a.game.removeAllUpdates();
                    a.callback && a.callback.call()
                })
            })
        })
    },
    fadeBG: function(a, f, h, n, p, b) {
        var d = {
            alpha: f
        },
        c = {
            alpha: h
        }; (new ENEA.Tweener.Tween(d)).to(c, n).easing(ENEA.Tweener.Easing.Linear.None).onStart(function() {
            p && p.call()
        }).onUpdate(function() {
            for (var b = 0; b < a.length; b++) a[b].alpha = ENEA.normalize(d.alpha)
        }).onComplete(function() {
            for (var d = 0; d < a.length; d++) a[d].alpha = c.alpha;
            b && b.call()
        }).start()
    },
    titleOUT: function(a, f) {
        var h = this,
        n = {
            titleY: this.layer.title.y,
            allButtonsY: this.game.buttonsContainer.y,
            aX: this.game.button_achievements.x,
            lX: this.game.button_leaderboard.x,
            stripeTopY: this.layer.stripeTop.y,
            stripeBottomY: this.game.height
        },
        p = {
            titleY: this.game.relY( - 0.1),
            allButtonsY: this.game.relY(0.23),
            aX: this.game.relX( - 0.12),
            lX: this.game.relX(1.12),
            stripeTopY: 0,
            stripeBottomY: this.game.height
        }; (new ENEA.Tweener.Tween(n)).to(p, 200).easing(ENEA.Tweener.Easing.Cubic.Out).onStart(function() {
            a && a.call()
        }).onUpdate(function() {
            h.layer.title.position.y = n.titleY;
            h.game.buttonsContainer.position.y = n.allButtonsY;
            h.game.button_achievements.position.x = n.aX;
            h.game.button_leaderboard.position.x = n.lX;
            h.layer.stripeTop.position.y = n.stripeTopY;
            h.layer.stripeBottom.position.y = n.stripeBottomY
        }).onComplete(function() {
            f && f.call()
        }).start()
    },
    ninjaOUT: function(a, f) {
        var h = this,
        n = {
            ninjaX: this.layer.ninja.x
        },
        p = {
            ninjaX: 0 - this.layer.ninja.texture.width / 2
        }; (new ENEA.Tweener.Tween(n)).to(p, 500).easing(ENEA.Tweener.Easing.Back.In).onStart(function() {
            a && a.call()
        }).onUpdate(function() {
            h.layer.ninja.position.x = n.ninjaX
        }).onComplete(function() {
            f && f.call()
        }).start()
    },
    shineOUT: function(a, f) {
        var h = this,
        n = {
            shineA: 0,
            shineS: 4
        }; (new ENEA.Tweener.Tween(n)).to({
            shineA: 1,
            shineS: 0.1
        },
        300).easing(ENEA.Tweener.Easing.Back.Out).onStart(function() {
            a && a.call()
        }).onUpdate(function() {
            h.layer.shine.alpha = ENEA.normalize(n.shineA);
            h.layer.shine.scale.x = n.shineS;
            h.layer.shine.scale.y = n.shineS
        }).onComplete(function() {
            f && f.call()
        }).start()
    }
};
FOTN.DrawSettings = function(a, f) {
    this.game = a;
    this.layer = f;
    this.offsets = {
        x: this.game.relX(0.11),
        y1: this.game.relY(0.071),
        y2: this.game.relY(0.171),
        y3: this.game.relY(0.26)
    };
    this.init();
    this.closed = !0
};
FOTN.DrawSettings.prototype = {
    init: function() {
        var a = this;
        this.game.button_soundON.applyParams({
            x: this.game.width - this.offsets.x,
            y: this.offsets.y1,
            visible: !0,
            onClick: function() {
                FOTN._soundsMuted = !FOTN._soundsMuted;
                ENEA.Storage.set("sounds", FOTN._soundsMuted ? 1 : 0);
                a.refreshButtons()
            }
        }).addTo(this.layer);
        this.game.button_soundOFF.applyParams({
            x: this.game.width - this.offsets.x,
            y: this.offsets.y1,
            visible: !0,
            onClick: function() {
                FOTN._soundsMuted = !FOTN._soundsMuted;
                ENEA.Storage.set("sounds", FOTN._soundsMuted ? 1 : 0);
                a.refreshButtons()
            }
        }).addTo(this.layer);
        this.game.button_musicON.applyParams({
            x: this.game.width - this.offsets.x,
            y: this.offsets.y1,
            visible: !0,
            onClick: function() {
                FOTN._musicMuted = !FOTN._musicMuted;
                FOTN._musicMuted ? FOTN.Music.stop() : FOTN.Music.play();
                ENEA.Storage.set("music", FOTN._musicMuted ? 1 : 0);
                a.refreshButtons()
            }
        }).addTo(this.layer);
        this.game.button_musicOFF.applyParams({
            x: this.game.width - this.offsets.x,
            y: this.offsets.y1,
            visible: !0,
            onClick: function() {
                FOTN._musicMuted = !FOTN._musicMuted;
                FOTN._musicMuted ? FOTN.Music.stop() : FOTN.Music.play();
                ENEA.Storage.set("music", FOTN._musicMuted ? 1 : 0);
                a.refreshButtons()
            }
        }).addTo(this.layer);
        this.refreshButtons();
        this.checkClosed();
        this.game.button_settings.applyParams({
            x: this.game.width - this.offsets.x,
            y: this.offsets.y1,
            visible: !0,
            onClick: function() {
                a.closed && a.refreshButtons();
                a.animateSettings(function() {
                    a.checkClosed();
                    a.closed = !a.closed
                })
            }
        }).addTo(this.layer)
    },
    checkClosed: function() {
        this.closed || (this.game.button_soundON.visible = !1, this.game.button_soundOFF.visible = !1, this.game.button_musicON.visible = !1, this.game.button_musicOFF.visible = !1, this.game.button_soundON.y = this.offsets.y1, this.game.button_soundOFF.y = this.offsets.y1, this.game.button_musicON.y = this.offsets.y1, this.game.button_musicOFF.y = this.offsets.y1)
    },
    refreshButtons: function() {
        FOTN._soundsMuted ? (this.game.button_soundON.visible = !1, this.game.button_soundOFF.visible = !0) : (this.game.button_soundON.visible = !0, this.game.button_soundOFF.visible = !1);
        FOTN._musicMuted ? (this.game.button_musicON.visible = !1, this.game.button_musicOFF.visible = !0) : (this.game.button_musicON.visible = !0, this.game.button_musicOFF.visible = !1)
    },
    animateSettings: function(a) {
        var f = this,
        h = {
            ty2: f.closed ? f.offsets.y1: f.offsets.y2,
            ty3: f.closed ? f.offsets.y1: f.offsets.y3
        },
        n = {
            ty2: f.closed ? f.offsets.y2: f.offsets.y1,
            ty3: f.closed ? f.offsets.y3: f.offsets.y1
        }; (new ENEA.Tweener.Tween(h)).to(n, 400).easing(ENEA.Tweener.Easing.Cubic.Out).onUpdate(function() {
            f.game.button_musicON.position.y = h.ty2;
            f.game.button_musicOFF.position.y = h.ty2;
            f.game.button_soundON.position.y = h.ty3;
            f.game.button_soundOFF.position.y = h.ty3
        }).onComplete(function() {
            a && a.call()
        }).start()
    }
};
FOTN.DrawTutorial = function(a, f) {
    this.game = a;
    this.layer = f;
    this.draw()
};
FOTN.DrawTutorial.prototype = {
    draw: function() {
        this.phoneSprite = (new ENEA.Sprite({
            texture: this.game.textures.tutorial_phone,
            x: this.game.centerX,
            y: this.game.relY(0.4),
            anchorX: 0.5,
            anchorY: 0.5
        })).addTo(this.layer);
        this.ninjaSprite = (new ENEA.Sprite({
            texture: this.game.textures.tutorial_ninja,
            x: this.game.centerX,
            y: this.phoneSprite.y + this.game.relY(0.07),
            anchorX: 0.5,
            anchorY: 0.5
        })).addTo(this.layer);
        this.handSprite = (new ENEA.Sprite({
            texture: this.game.textures.tutorial_hand,
            x: 2 * this.game.centerX + this.game.relX(0.05),
            y: this.phoneSprite.y + this.game.relY(0.06),
            anchorX: 0.234,
            anchorY: 0.037
        })).addTo(this.layer);
        this.bubbleSprite = (new ENEA.Sprite({
            texture: this.game.textures.tutorial_click,
            x: this.handSprite.x,
            y: this.handSprite.y,
            visible: !1,
            anchorX: 0.5,
            anchorY: 0.5
        })).addTo(this.layer);
        this.goSprite = (new ENEA.Sprite({
            texture: this.game.textures.tutorial_go,
            x: this.game.centerX,
            y: this.game.centerY - this.game.relY(0.1),
            visible: !1,
            anchorX: 0.5,
            anchorY: 0.5
        })).addTo(this.layer)
    },
    runTutorial: function(a) {
        var f = this;
        this.rungame = a;
        this.game.eventsContainer.responsive = !1;
        this.game.tutorialContainer.visible = !0;
        this.game.tutorialContainer.alpha = 1;
        this.goSprite.visible = !1;
        this.ninjaSprite.x = this.game.centerX;
        this.handSprite.visible = !1;
        this.game.gameScreen.heightText.visible = !1;
        FOTN._tutorialIsRunning = !0;
        a = this.blink();
        var h = this.handIN(),
        n = this.handClick(),
        p = this.firstJump(),
        b = this.handClick(),
        d = this.jumpRight(),
        c = this.slide(),
        e = this.jumpLeft(),
        g = this.handClick(),
        r = this.slide(0.04, 800),
        k = this.fadeOUT(800);
        a.onComplete(function() {
            h.start()
        });
        h.onComplete(function() {
            n.start()
        });
        n.onComplete(function() {
            p.start()
        });
        p.onComplete(function() {
            b.start()
        });
        b.onComplete(function() {
            d.start()
        });
        d.onComplete(function() {
            c.start()
        });
        c.onComplete(function() {
            g.start()
        });
        g.onYoyo(function() {
            e.start()
        });
        e.onComplete(function() {
            r.start();
            k.start()
        });
        k.onComplete(function() {
            f.game.tutorialContainer.visible = !1;
            f.game.eventsContainer.responsive = !0;
            ENEA.Storage.set("tutorial", 0)
        });
        a.start()
    },
    blink: function() {
        _self = this;
        var a = {
            a: 1
        };
        _self.ninjaSprite.y = this.phoneSprite.y + this.game.relY(0.07);
        return (new ENEA.Tweener.Tween(a)).to({
            a: 0
        },
        250).repeat(5).yoyo(!0).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {}).onUpdate(function() {
            _self.game.player.alpha = a.a;
            _self.ninjaSprite.alpha = a.a
        })
    },
    handIN: function() {
        _self = this;
        var a = {
            x: 2 * this.game.centerX + this.game.relX(0.05),
            a: 0
        },
        f = {
            x: this.game.centerX + this.game.relX(0.05),
            a: 1
        };
        return (new ENEA.Tweener.Tween(a)).to(f, 500).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {
            _self.handSprite.visible = !0
        }).onUpdate(function() {
            _self.handSprite.x = a.x;
            _self.handSprite.alpha = a.a;
            _self.bubbleSprite.x = a.x
        })
    },
    handClick: function() {
        _self = this;
        var a = {
            s: 1,
            bs: 1.5,
            ba: 0
        };
        return (new ENEA.Tweener.Tween(a)).to({
            s: 0.95,
            bs: 1,
            ba: 1
        },
        200).repeat(1).yoyo(!0).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {}).onYoyo(function() {
            _self.bubbleSprite.visible = !0
        }).onUpdate(function() {
            _self.handSprite.scale.x = a.s;
            _self.handSprite.scale.y = a.s;
            _self.bubbleSprite.scale.x = a.bs;
            _self.bubbleSprite.scale.y = a.bs;
            _self.bubbleSprite.alpha = a.ba
        })
    },
    firstJump: function() {
        _self = this;
        var a = {
            x: this.game.centerX,
            y: _self.ninjaSprite.position.y
        },
        f = {
            x: this.game.centerX - this.game.relX(0.075),
            y: _self.ninjaSprite.position.y - this.game.relY(0.025)
        };
        return (new ENEA.Tweener.Tween(a)).to(f, 200).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {
            _self.rungame.doFirstJump()
        }).onUpdate(function() {
            _self.ninjaSprite.position.x = a.x;
            _self.ninjaSprite.position.y = a.y
        })
    },
    jumpRight: function() {
        _self = this;
        var a = {
            x: _self.ninjaSprite.position.x - this.game.relX(0.075),
            y: _self.ninjaSprite.position.y - this.game.relY(0.025)
        },
        f = {
            x: this.game.centerX + this.game.relX(0.075),
            y: _self.ninjaSprite.position.y - this.game.relY(0.05)
        };
        return (new ENEA.Tweener.Tween(a)).to(f, 400).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {
            _self.rungame.jump(_self.game.Camera.y, _self.game.player.metresPosition.y + _self.game.player.jumpHeight - _self.game.Camera.playerOffset,
            function() {
                _self.game.player.checkSlide()
            })
        }).onUpdate(function() {
            _self.ninjaSprite.position.x = a.x;
            _self.ninjaSprite.position.y = a.y
        })
    },
    jumpLeft: function() {
        _self = this;
        var a = {
            x: _self.ninjaSprite.position.x + this.game.relX(0.075),
            y: _self.ninjaSprite.position.y - this.game.relY(0.03)
        },
        f = {
            x: this.game.centerX - this.game.relX(0.075),
            y: _self.ninjaSprite.position.y - this.game.relY(0.055)
        };
        return (new ENEA.Tweener.Tween(a)).to(f, 400).easing(ENEA.Tweener.Easing.Cubic.InOut).onStart(function() {
            _self.rungame.jump(_self.game.Camera.y, _self.game.player.metresPosition.y + _self.game.player.jumpHeight - _self.game.Camera.playerOffset,
            function() {
                _self.game.player.checkSlide()
            })
        }).onUpdate(function() {
            _self.ninjaSprite.position.x = a.x;
            _self.ninjaSprite.position.y = a.y
        })
    },
    slide: function(a, f) {
        _self = this;
        var h = {
            y: _self.ninjaSprite.position.y - this.game.relY(0.05)
        },
        n = {
            y: _self.ninjaSprite.position.y - (void 0 === a ? this.game.relY(0.03) : this.game.relY(a))
        };
        return (new ENEA.Tweener.Tween(h)).to(n, void 0 === f ? 1200 : f).easing(ENEA.Tweener.Easing.Linear.None).onStart(function() {}).onUpdate(function() {
            _self.ninjaSprite.position.y = h.y
        })
    },
    fadeOUT: function(a) {
        _self = this;
        var f = {
            a: 1,
            sg: 0.5
        };
        return (new ENEA.Tweener.Tween(f)).to({
            a: 0,
            sg: 4
        },
        void 0 === a ? 1200 : a).easing(ENEA.Tweener.Easing.Linear.None).onStart(function() {
            _self.goSprite.visible = !0;
            _self.goSprite.alpha = 1
        }).onUpdate(function() {
            _self.game.tutorialContainer.alpha = f.a;
            _self.goSprite.scaleX = f.sg;
            _self.goSprite.scaleY = f.sg
        })
    }
};
FOTN.GameBackground = function(a) {
    this.game = a;
    this.bgPattern = [0, 1, 0, 0, 2, 0];
    this.bgPatternLength = this.bgPattern.length;
    this.leftBorder = this.game.relX(0.11);
    this.rightBorder = this.game.relX(0.89);
    this.disksPattern = [];
    this.maxDiskPattern = 200;
    this.diskCounter = 0;
    this.sawSpeed = 0.08;
    this.repeat = 0;
    this.obstaclesDistance = 12;
    this.obstaclesVariation = 10;
    ENEA.SEED = 100;
    for (a = 1; a < this.maxDiskPattern; a++) {
        var f = a * this.obstaclesDistance + ENEA.seededRandom( - this.obstaclesVariation, this.obstaclesVariation);
        this.disksPattern.push(f)
    }
    this.disksPattern[0] -= 3.1;
    this.disksPattern[1] += 7.5;
    this.textures = [this.game.textures.bg1, this.game.textures.bg2, this.game.textures.bg3];
    this.stageHeight = 20;
    this.tileHeight = this.stageHeight / 4;
    this.groundHeight = 2.05;
    this.meter = this.game.height / this.stageHeight;
    this.bgOffset = Math.floor(this.meter * this.tileHeight);
    PIXI.DisplayObjectContainer.call(this);
    this.createPool();
    this.createGroundNspikes();
    this.resetAll()
};
FOTN.GameBackground.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
FOTN.GameBackground.prototype.constructor = FOTN.GameBackground;
FOTN.GameBackground.prototype.createGroundNspikes = function() {
    this.groundNspikes = (new ENEA.Sprite({
        texture: this.game.textures.ground,
        anchorX: 0.5,
        anchorY: 0.4
    })).addTo(this)
};
FOTN.GameBackground.prototype.resetAll = function() {
    this.repeat = this.y = this.x = 0;
    this.resetDisksPool();
    this.resetGroundNspikes();
    this.updateGroundNspikes();
    this.updatePosition()
};
FOTN.GameBackground.prototype.resetGroundNspikes = function() {
    this.groundNspikes.setTexture(this.game.textures.ground);
    this.groundNspikes.anchorY = 0.4;
    this.groundNspikes._isGround = !0;
    this.groundPosition = 0;
    this.updateGroundNspikes()
};
FOTN.GameBackground.prototype.updateGroundNspikes = function() {
    this.groundNspikes.position.x = this.game.centerX;
    this.groundNspikes.position.y = -this.game.relY(0.06) - this.meter * this.groundPosition
};
FOTN.GameBackground.prototype.getGroundPosition = function() {
    return this.groundNspikes.position.y
};
FOTN.GameBackground.prototype.setSpikes = function() {
    this.groundNspikes._isGround = !1;
    this.groundNspikes.visible = !0;
    this.groundNspikes.anchorY = 0.2;
    this.groundNspikes.setTexture(this.game.textures.spikes)
};
FOTN.GameBackground.prototype.setSpikesPosition = function(a) {
    this.setSpikes();
    this.groundPosition = a;
    this.updateGroundNspikes()
};
FOTN.GameBackground.prototype.resetDisksPool = function() {
    for (var a = this.diskCounter = 0; a < this.maxObjects; a++) this._poolDisks[a].x = 0 == this.diskCounter % 2 ? this.rightBorder: this.leftBorder,
    this._poolDisks[a].y = -this.meter * this.disksPattern[this.diskCounter % this.disksPattern.length],
    this._poolDisks[a].visible = !0,
    this.diskCounter++
};
FOTN.GameBackground.prototype.createPool = function() {
    this.maxObjects = 5;
    this._poolBG = [];
    this._poolDisks = [];
    this._poolLS = [];
    this._poolRS = [];
    for (var a = 0; a < this.maxObjects; a++) {
        var f = new PIXI.Sprite(this.textures[0]);
        f.anchorX = 0.5;
        f.anchorY = 1;
        f.x = this.game.centerX;
        this.addChild(f);
        this._poolBG.push(f)
    }
    for (a = 0; a < this.maxObjects; a++) f = new PIXI.Sprite(this.game.textures.disk),
    f.anchorXY = 0.5,
    f.x = 0 == this.diskCounter % 2 ? this.rightBorder: this.leftBorder,
    f.y = this.meter * this.disksPattern[this.diskCounter % this.disksPattern.length],
    f.rotation = 2 * Math.random() * Math.PI,
    f.rotSpeed = 0 == this.diskCounter % 2 ? this.sawSpeed: -this.sawSpeed,
    f.collisionRadius = ENEA._isHD ? 98 : 49,
    f.visible = !0,
    this.diskCounter++,
    this.addChild(f),
    this._poolDisks.push(f);
    for (a = 0; a < this.maxObjects; a++) f = new PIXI.Sprite(this.game.textures.sideLeft),
    f.anchorX = 0,
    f.anchorY = 1,
    f.x = 0,
    this.addChild(f),
    this._poolLS.push(f);
    for (a = 0; a < this.maxObjects; a++) f = new PIXI.Sprite(this.game.textures.sideRight),
    f.anchorX = 1,
    f.anchorY = 1,
    f.x = this.game.width,
    this.addChild(f),
    this._poolRS.push(f)
};
FOTN.GameBackground.prototype.updateDisks = function() {
    var a, f = !0;
    0 == this.diskCounter % 2 && (f = !1);
    for (var h = 0; h < this.maxObjects; h++) this._poolDisks[h].position.y + this.position.y - this.game.textures.disk.height > this.game.height && this._poolDisks[h].visible && (this._poolDisks[h].visible = !1, a = this.getAvailableDisk(), null !== a && (a.rotation = this.disksPattern[this.diskCounter % this.disksPattern.length], a.position.x = !1 == f ? this.rightBorder: this.leftBorder, a.position.y = -this.repeat - this.meter * this.disksPattern[this.diskCounter % this.disksPattern.length], a.rotSpeed = !1 == f ? this.sawSpeed: -this.sawSpeed, a.position.visible = !0, this.diskCounter++, this.diskCounter >= this.maxDiskPattern && (this.repeat = this.meter * ~~ (this.diskCounter / (this.maxDiskPattern - 2)) * this.disksPattern[this.maxDiskPattern - 2])))
};
FOTN.GameBackground.prototype.getAvailableDisk = function() {
    for (var a = 0; a < this.maxObjects; a++) if (!1 === this._poolDisks[a].visible) {
        this._poolDisks[a].visible = !0;
        break
    }
    return a >= this.maxObjects ? (console.log("Out of disk pool"), null) : this._poolDisks[a]
};
FOTN.GameBackground.prototype.updatePosition = function() {
    this.position.x = this.meter * this.game.Camera.x;
    this.position.y = this.game.height + this.meter * this.game.Camera.y;
    for (var a, f = ~~ (this.position.y / this.bgOffset), h = ~~ (this.game.height - Math.abs(f * this.bgOffset)), n = 0; n < this.maxObjects; n++) a = this.textures[this.bgPattern[(n + f) % this.bgPatternLength]],
    this._poolBG[n].texture !== a && this._poolBG[n].setTexture(a),
    this._poolBG[n].position.y = h,
    this._poolLS[n].position.y = h,
    this._poolRS[n].position.y = h,
    h -= this.bgOffset;
    this.updateDisks()
};
FOTN.InitButtons = function(a) {
    this.game = a;
    this.init()
};
FOTN.InitButtons.prototype = {
    init: function() {
        this.game.button_start = new FOTN.Button([this.game.textures.button_start_normal, this.game.textures.button_start_hover, this.game.textures.button_start_pressed]);
        this.game.button_start.visible = !1;
        this.game.button_moregames = new FOTN.Button([this.game.textures.button_moregames_normal]);
        this.game.button_moregames.visible = !1;
        this.game.button_moregames.onClick = function() {
            try {
                parent.moregame();
            } catch(e) {}
        };
        this.game.button_kik = new FOTN.Button([this.game.textures.button_kik_normal]);
        this.game.button_kik.visible = !1;
        this.game.button_facebook = new FOTN.Button([this.game.textures.button_facebook_normal]);
        this.game.button_facebook.visible = !1;
        this.game.button_facebook.onClick = function() {};
        this.game.button_twitter = new FOTN.Button([this.game.textures.button_twitter_normal]);
        this.game.button_twitter.visible = !1;
        this.game.button_twitter.onClick = function() {};
        this.game.button_restart = new FOTN.Button([this.game.textures.button_restart_normal, this.game.textures.button_restart_hover, this.game.textures.button_restart_pressed]);
        this.game.button_restart.visible = !1;
        this.game.button_home = new FOTN.Button([this.game.textures.button_home_normal, this.game.textures.button_home_hover, this.game.textures.button_home_pressed]);
        this.game.button_home.visible = !1;
        this.game.button_replay = new FOTN.Button([this.game.textures.button_replay_normal, this.game.textures.button_replay_hover, this.game.textures.button_replay_pressed]);
        this.game.button_replay.visible = !1;
        this.game.button_homeSmall = new FOTN.Button([this.game.textures.button_homeSmall_normal, this.game.textures.button_homeSmall_hover, this.game.textures.button_homeSmall_pressed]);
        this.game.button_homeSmall.visible = !1;
        ENEA._isDesktop && (this.game.button_settings = new FOTN.Button([this.game.textures.button_settings_normal, this.game.textures.button_settings_hover, this.game.textures.button_settings_pressed]), this.game.button_settings.visible = !1, this.game.button_musicON = new FOTN.Button([this.game.textures.button_music_normal, this.game.textures.button_music_hover, this.game.textures.button_music_pressed]), this.game.button_musicON.visible = !1, this.game.button_musicOFF = new FOTN.Button([this.game.textures.button_musicoff_normal, this.game.textures.button_musicoff_hover, this.game.textures.button_musicoff_pressed]), this.game.button_musicOFF.visible = !1, this.game.button_soundON = new FOTN.Button([this.game.textures.button_sound_normal, this.game.textures.button_sound_hover, this.game.textures.button_sound_pressed]), this.game.button_soundON.visible = !1, this.game.button_soundOFF = new FOTN.Button([this.game.textures.button_soundoff_normal, this.game.textures.button_soundoff_hover, this.game.textures.button_soundoff_pressed]), this.game.button_soundOFF.visible = !1);
        this.game.button_achievements = new FOTN.Button([this.game.textures.button_achieve_normal, this.game.textures.button_achieve_hover, this.game.textures.button_achieve_pressed]);
        this.game.button_achievements.visible = !1;
        this.game.button_leaderboard = new FOTN.Button([this.game.textures.button_leader_normal, this.game.textures.button_leader_hover, this.game.textures.button_leader_pressed]);
        this.game.button_leaderboard.visible = !1;
        this.game.button_downArrow = new FOTN.Button([this.game.textures.button_downArrow_normal, this.game.textures.button_downArrow_hover, this.game.textures.button_downArrow_pressed]);
        this.game.button_downArrow.visible = !1;
        this.game.button_upArrow = new FOTN.Button([this.game.textures.button_upArrow_normal, this.game.textures.button_upArrow_hover, this.game.textures.button_upArrow_pressed]);
        this.game.button_upArrow.visible = !1
    }
};
FOTN.Layers = function(a) {
    this.game = a;
    this.init()
};
FOTN.Layers.prototype = {
    init: function() {
        this.game.loaderContainer = new ENEA.Container;
        this.game.stage.addChild(this.game.loaderContainer);
        this.game.menuScreen = new ENEA.Container;
        this.game.menuScreen.visible = !1;
        this.game.stage.addChild(this.game.menuScreen);
        this.game.achievementsScreen = new ENEA.Container;
        this.game.achievementsScreen.visible = !1;
        this.game.stage.addChild(this.game.achievementsScreen);
        this.game.leaderboardsScreen = new ENEA.Container;
        this.game.leaderboardsScreen.visible = !1;
        this.game.stage.addChild(this.game.leaderboardsScreen);
        this.game.gameScreen = new ENEA.Container;
        this.game.gameScreen.visible = !1;
        this.game.stage.addChild(this.game.gameScreen);
        this.game.eventsContainer = new ENEA.Container;
        this.game.eventsContainer.responsive = !1;
        this.game.stage.addChild(this.game.eventsContainer);
        ENEA._isDesktop && (this.game.settings = new ENEA.Container, this.game.settings.visible = !1, this.game.settings.responsive = !0, this.game.stage.addChild(this.game.settings));
        this.game.gameOverScreen = new ENEA.Container;
        this.game.gameOverScreen.visible = !1;
        this.game.gameOverScreen.responsive = !0;
        this.game.stage.addChild(this.game.gameOverScreen);
        this.game.buttonsContainer = new ENEA.Container;
        this.game.buttonsContainer.visible = !1;
        this.game.stage.addChild(this.game.buttonsContainer);
        this.game.achievementContainer = new ENEA.Container;
        this.game.achievementContainer.visible = !1;
        this.game.stage.addChild(this.game.achievementContainer)
    }
};
FOTN.Leaderboards = function(a, f) {
    var h = this;
    this.game = a;
    this.layer = f;
    this.currentPage = 0;
    this.maxItems = 6;
    this.titleTop = a.relY(0.055);
    this.itemsTop = a.relY(0.15);
    this.spacing = this.game.relY(0.103);
    this.leaders = [];
    this.avatars = [];
    this.player = [];
    this.layer.removeAllChildren();
    this.bgLayer = new FOTN.BGScroller(this.game);
    this.layer.addChild(this.bgLayer);
    this.drawTitle();
    this.getPlayer();
    this.drawPlayer();
    this.getLeaders(function() {
        setTimeout(function() {
            h.drawItems()
        },
        10)
    });
    this.drawButtons();
    this.drawShine();
    this.fadeIN();
    this.game.addUpdate("scrollBG",
    function() {
        h.bgLayer.layerCamera.y -= 0.005;
        h.bgLayer.updatePosition();
        h.layer.shine.rotation += 0.005
    })
};
FOTN.Leaderboards.prototype = {
    getPlayer: function(a) {
        this.player.push({
            name: "Diavolo",
            score: 666,
            avatar: "avatars/alpacino.jpg"
        });
        a && a.call()
    },
    getLeaders: function(a) {
        this.leaders.push({
            name: "Siimon",
            score: 100,
            avatar: "avatars/siimon.jpg"
        });
        this.leaders.push({
            name: "John Doe",
            score: 90,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "Jane Doe",
            score: 80,
            avatar: "avatars/janedoe.jpg"
        });
        this.leaders.push({
            name: "xxxx",
            score: 5,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "yyyy",
            score: 4.4,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "Mr. Z",
            score: 3.5,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "Mrs. AZ",
            score: 3,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "asdasdas",
            score: 2,
            avatar: "avatars/others.jpg"
        });
        this.leaders.push({
            name: "sdfgdfgd",
            score: 1,
            avatar: "avatars/others.jpg"
        });
        a && a.call()
    },
    drawTitle: function() {
        this.titleSprite = new PIXI.Text("Leaderboards", {
            font: (ENEA._isHD ? 100 : 50) + "px Sauna-BlackItalic",
            fill: "#FFFFFF",
            align: "center"
        });
        this.titleSprite.applyParams({
            x: this.game.centerX - this.titleSprite.width / 2,
            y: this.titleTop - this.titleSprite.height / 2
        }).addTo(this.layer)
    },
    doSeppuku: function() {
        this.destroyItems();
        this.titleSprite.destroy(!0)
    },
    destroyItems: function() {
        if (this.itemsContainer instanceof ENEA.Container) {
            for (; this.itemsContainer.children.length;) this.itemsContainer.children[0].doSeppuku && this.itemsContainer.children[0].doSeppuku(),
            this.itemsContainer.removeChild(this.itemsContainer.children[0]);
            this.itemsContainer.destroy()
        }
    },
    drawItems: function() {
        this.destroyItems();
        this.itemsContainer = new ENEA.Container;
        this.layer.addChild(this.itemsContainer);
        for (var a = this.currentPage * this.maxItems,
        f = 0; f < this.maxItems && a < this.leaders.length;) {
            var h = new FOTN.LeaderboardsItem(this.game, a + 1, [this.leaders[a].avatar, this.game.textures.loading], this.leaders[a].name, this.leaders[a].score, !1);
            h.x = this.game.centerX;
            h.y = this.itemsTop + this.spacing * f;
            this.itemsContainer.addChild(h);
            a++;
            f++
        }
    },
    drawPlayer: function() {
        var a = new FOTN.LeaderboardsItem(this.game, 666, [this.player[0].avatar, this.game.textures.loading], this.player[0].name, this.player[0].score, !1);
        a.x = this.game.centerX;
        a.y = this.itemsTop + this.spacing * this.maxItems + this.game.relY(0.075);
        this.layer.addChild(a)
    },
    drawButtons: function() {
        var a = this,
        f = this.game.relY(0.755),
        h = this.game.relX(0.228);
        this.game.button_downArrow.applyParams({
            x: a.game.centerX - h,
            y: f,
            visible: !0,
            onClick: function() {
                a.currentPage++;
                a.currentPage * a.maxItems >= a.leaders.length ? a.currentPage--:a.drawItems()
            }
        }).addTo(this.layer);
        this.game.button_upArrow.applyParams({
            x: a.game.centerX,
            y: f,
            visible: !0,
            onClick: function() {
                a.currentPage--;
                0 > a.currentPage ? a.currentPage++:a.drawItems()
            }
        }).addTo(this.layer);
        this.game.button_homeSmall.applyParams({
            x: this.game.centerX + h,
            y: f,
            visible: !0,
            onClick: function() {
                a.doSeppuku();
                a.game.removeAllUpdates();
                ENEA.Tweener.removeAll();
                a.game.achievementsScreen.visible = !1;
                a.game.leaderboardsScreen.visible = !1;
                a.game.gameOverScreen.visible = !1;
                a.game.gameScreen.visible = !1;
                ENEA._isDesktop && (a.game.settings.visible = !1);
                FOTN.showButtonsState("menu");
                a.game.buttonsContainer.visible = !1;
                new FOTN.MenuIN(FOTN.game, FOTN.game.menuScreen)
            }
        }).addTo(this.layer)
    },
    fadeIN: function(a) {
        var f = this;
        ENEA.fadeElement(this.layer, 0, 1, FOTN.FADETIME,
        function() {
            ENEA._isDesktop && (f.game.settings.visible = !0);
            f.layer.visible = !0;
            FOTN.showButtonsState("leaderboards")
        },
        a)
    },
    drawShine: function(a) {
        this.layer.shine = (new ENEA.Sprite({
            texture: this.game.textures.shine,
            anchorXY: 0.5,
            scaleXY: 2,
            x: this.game.centerX,
            y: this.game.relY( - 0.05)
        })).addTo(this.layer)
    }
};
FOTN.LeaderboardsItem = function(a, f, h, n, p, b) {
    this.game = a;
    this._isLoaded = b || !1;
    this.rank = f;
    this.pictures = h;
    this.name = n;
    this.score = p;
    this.avatar = null;
    this.positions = {
        rankX: this.game.relX( - 0.248),
        rankY: this.game.relY(0),
        pictureX: this.game.relX( - 0.12),
        pictureY: this.game.relY(0),
        textX: this.game.relX( - 0.031),
        textY: this.game.relY( - 0.019),
        scoreX: this.game.relX( - 0.031),
        scoreY: this.game.relY(0.011)
    };
    ENEA.Container.call(this);
    this.drawBackground();
    this.drawRank();
    this.drawPictures();
    this.drawName();
    this.drawScore()
};
FOTN.LeaderboardsItem.prototype = Object.create(ENEA.Container.prototype);
FOTN.LeaderboardsItem.prototype.constructor = FOTN.LeaderboardsItem;
FOTN.LeaderboardsItem.prototype.drawBackground = function() {
    this.bgSprite = (new ENEA.Sprite({
        texture: this.game.textures.itemBg,
        anchorX: 0.5,
        anchorY: 0.5
    })).addTo(this)
};
FOTN.LeaderboardsItem.prototype.drawRank = function() {
    this.rankSprite = new PIXI.Text(this.rank.toString(), {
        font: (ENEA._isHD ? 80 : 40) + "px Sauna-BlackItalic",
        fill: "#FFFFFF",
        align: "center"
    });
    this.rankSprite.applyParams({
        x: this.positions.rankX - this.rankSprite.width / 2,
        y: this.positions.rankY - this.rankSprite.height / 2
    }).addTo(this)
};
FOTN.LeaderboardsItem.prototype.drawPictures = function() {
    var a = this;
    this.avatarSprite = (new ENEA.Sprite({
        texture: this.pictures[1],
        x: this.positions.pictureX,
        y: this.positions.pictureY,
        anchorX: 0.5,
        anchorY: 0.5
    })).addTo(this);
    this.avatarSprite.animID = ENEA.randomString();
    this.game.addUpdate("avatarRot" + this.avatarSprite.animID,
    function() {
        a.avatarSprite.rotation += 0.05
    });
    null == this.avatar && (this.avatar = PIXI.Texture.fromImage(this.pictures[0]), this.avatar.baseTexture.hasLoaded && (this.game.removeUpdate("avatarRot" + this.avatarSprite.animID), this.avatarSprite.rotation = 0, this.avatarSprite.setTexture(this.avatar)), this.avatar.addEventListener("update", this.updateHandler.bind(this)))
};
FOTN.LeaderboardsItem.prototype.updateHandler = function(a) {
    this.game.removeUpdate("avatarRot" + this.avatarSprite.animID);
    this.avatarSprite.rotation = 0;
    this.avatarSprite.setTexture(this.avatar);
    this.avatar.removeEventListener("update", this.updateHandler)
};
FOTN.LeaderboardsItem.prototype.getAvatar = function() {
    return this.avatar
};
FOTN.LeaderboardsItem.prototype.doSeppuku = function() {
    this.rankSprite.destroy(!0);
    this.textSprite.destroy(!0);
    this.scoreSprite.destroy(!0)
};
FOTN.LeaderboardsItem.prototype.drawName = function() {
    this.textSprite = new PIXI.Text(this.name, {
        font: (ENEA._isHD ? 60 : 30) + "px Sauna-BlackItalic",
        fill: "#FFFFFF",
        align: "center"
    });
    this.textSprite.applyParams({
        x: this.positions.textX,
        y: this.positions.textY - this.textSprite.height / 2
    }).addTo(this)
};
FOTN.LeaderboardsItem.prototype.drawScore = function() {
    this.scoreSprite = new PIXI.Text(this.score, {
        font: (ENEA._isHD ? 100 : 50) + "px Sauna-BlackItalic",
        fill: "#FFFFFF",
        align: "center"
    });
    this.scoreSprite.applyParams({
        x: this.positions.scoreX,
        y: this.positions.scoreY - this.scoreSprite.height / 2
    }).addTo(this)
};
Object.defineProperty(FOTN.LeaderboardsItem.prototype, "loaded", {
    get: function() {
        return this._isLoaded
    },
    set: function(a) { (this._isLoaded = a) ? (this.pic1Sprite.visible = !0, this.pic2Sprite.visible = !1) : (this.pic1Sprite.visible = !1, this.pic2Sprite.visible = !0)
    }
});
FOTN.Loader = function(a) {
    // updateShare(0);
    this.game = a;
    this.resolution = this.game.resolution;
    this.gameFiles = ["media/" + this.resolution + "/atlas01.png", "media/" + this.resolution + "/atlas01.json", "media/" + this.resolution + "/atlas02.png", "media/" + this.resolution + "/atlas02.json", "media/" + this.resolution + "/saunabitmap.fnt"];
    if (1 == parseInt(ENEA.Storage.get("tutorial")) || parseInt(ENEA.Storage.get("best")) < FOTN._tutorialHeight) this.gameFiles.push("media/" + this.resolution + "/tutorial.png"),
    this.gameFiles.push("media/" + this.resolution + "/tutorial.json");
    this.init();
    this.start()
};
FOTN.Loader.prototype = {
    init: function() {
        var a = this;
        this.preloader = new ENEA.Preloader;
        for (var f in this.gameFiles) this.preloader.add(this.gameFiles[f]);
        this.pb = new ENEA.ProgressBar({
            bitmap: this.game.loaderFG,
            count: this.preloader.count + (ENEA._isDesktop ? 5 : 3)
        });
        this.preloader.onProgress = function() {
            this.onProgress.call(a)
        };
        this.loadData("data/hints.js");
        this.loadData("data/achievements.js");
        this.loadFont("media/sauna.ttf", "Sauna-BlackItalic");
        ENEA._isDesktop && (this.loadMusic(["sounds/music.m4a", "sounds/music.ogg", "sounds/music.mp3"]), this.loadSounds(["sounds/sounds.m4a", "sounds/sounds.ogg", "sounds/sounds.mp3", "sounds/sounds.wav"]));
        this.pb.onComplete = function() {
            new FOTN.Textures(a.game);
            new FOTN.InitButtons(a.game);
            ENEA._isDesktop ? a.askForSoundsFirst() : a.onLoaderComplete.call(a)
        }
    },
    loadData: function(a) {
        var f = this,
        h = document.createElement("script");
        h.type = "text/javascript";
        h.src = a;
        h.onload = function() {
            f.onProgress()
        };
        h.onerror = function() {
            console.log("Problem loading data")
        };
        document.getElementsByTagName("head")[0].appendChild(h)
    },
    loadFont: function(a, f) {
        var h = this;
        this.font = new Font;
        this.font.src = a;
        this.font.fontFamily = f;
        this.font.onload = function() {
            h.preloader.onProgress()
        };
        this.font.onerror = function(a) {
            h.preloader.onProgress();
            console.log("Font loading error: " + a)
        }
    },
    loadMusic: function(a) {
        var f = this;
        ENEA.Storage.has("volume") || ENEA.Storage.set("volume", 0.3);
        FOTN.Music = new Howl({
            src: a,
            loop: !0,
            volume: ENEA.Storage.get("volume"),
            onload: function() {
                console.log("Music loaded");
                f.onProgress()
            },
            onloaderror: function() {
                console.log("Problem loading music");
                f.preloader.onProgress()
            }
        })
    },
    loadSounds: function(a) {
        var f = this;
        FOTN.Sounds = new Howl({
            src: a,
            sprite: {
                spikes: [500, 2E3],
                jump: [3E3, 390],
                button: [3990, 350],
                impact: [4820, 600],
                achievement: [6E3, 600]
            },
            onload: function() {
                console.log("Sounds loaded");
                f.onProgress()
            },
            onloaderror: function() {
                console.log("Problem loading sounds");
                f.preloader.onProgress()
            }
        })
    },
    onProgress: function() {
        this.pb.loaded++;
        this.pb.update()
    },
    askForSoundsFirst: function(a) {
        var f = this;
        this.game.loaderNinjaSprite.visible = !1;
        this.game.loaderSoundsSprite.visible = !0;
        this.game.loaderYesSprite.visible = !0;
        this.game.loaderYesSprite.responsive = !0;
        this.game.loaderNoSprite.visible = !0;
        this.game.loaderNoSprite.responsive = !0;
        this.game.loaderBgSprite.visible = !1;
        this.game.loaderFgSprite.visible = !1;
        this.game.loaderLoadingSprite.visible = !1;
        this.game.loaderYesSprite.answer = this.game.loaderNoSprite.answer = function() {
            FOTN._musicMuted || FOTN.Music.play();
            f.onLoaderComplete.call(f)
        }
    },
    onLoaderComplete: function() {
        var a = this;
        ENEA.fadeElement(this.game.loaderContainer, 1, 0, FOTN.FADETIME, null,
        function() {
            a.pb.destroy();
            a.pb = null;
            a.destroyLoaderTextures();
            a.game.loaderContainer.destroy();
            a.game.loaderContainer = null;
            a.onComplete && a.onComplete.call()
        })
    },
    destroyLoaderTextures: function() {
        this.game.loaderFG.destroy(!0)
    },
    start: function() {
        this.preloader.start()
    }
};
FOTN.Player = function(a, f) {
    this.game = a;
    this.layer = f;
    this._now = this._delta = null;
    this._then = Date.now();
    this.totalFrames = this.currentFrame = this.startFrame = null;
    this.isDead = !1;
    this.score = 0;
    this._spikesSounds = 400;
    this._timePassed = 0;
    this.animationSpeed = 70;
    this.jumpHeight = this.defaultJumpHeight = 7;
    this.jumpHeightIncerease = 0.3;
    this.jumpInterval = 200;
    this._slidingDownTimer = this._slideTimer = null;
    this.slideStartTime = 100;
    this.slideDownDuration = 3E3;
    this.sinStart = 2 * Math.PI;
    this.sinEnd = Math.PI;
    this.jumpCurvature = ENEA._isHD ? 220 : 110;
    this._jumpStart = this.slideTween = null;
    this._jumpEnd = Date.now();
    this.collisionRadius = ENEA._isHD ? 80 : 40;
    this._isPlaying = !1;
    this.animations = {
        idle: [0, 1, 2, 3, 4],
        first: [5, 6, 7, 8, 9, 10, 11],
        jump: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    };
    this.currentAnimation = null;
    this.playerTextures = [];
    this.createTextures();
    this._maxPool = 5;
    this._pool = [];
    this._previousFrames = [];
    this.createPool();
    PIXI.Sprite.call(this, this.playerTextures[0]);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.metresPosition = new PIXI.Point(0, 0);
    this.reset()
};
FOTN.Player.prototype = Object.create(PIXI.Sprite.prototype);
FOTN.Player.prototype.constructor = FOTN.Player;
FOTN.Player.prototype.storeGhost = function(a) {
    this._previousFrames.unshift(a)
};
FOTN.Player.prototype.showGhosts = function() {
    for (var a = 0.8 / this._maxPool,
    f = 0; f < this._maxPool && !(f >= this._previousFrames.length); f++) this._pool[f].position.x = this._previousFrames[f].x,
    this._pool[f].position.y = this._previousFrames[f].y,
    this._pool[f].rotation = this._previousFrames[f].r,
    this._pool[f].setTexture(this.playerTextures[this._previousFrames[f].frame]),
    this._pool[f].alpha = 0.9 - f * a,
    this._pool[f].visible = !0;
    f >= this._maxPool && this._previousFrames.pop()
};
FOTN.Player.prototype.clearGhosts = function(a) {
    for (a = 0; a < this._maxPool; a++) this._pool[a].visible = !1,
    this._pool[a].rotation = 0;
    this._previousFrames = []
};
FOTN.Player.prototype.createPool = function() {
    for (var a = 0; a < this._maxPool; a++) {
        var f = (new ENEA.Sprite({
            texture: this.playerTextures[0],
            anchorXY: 0.5,
            visible: !0,
            alpha: 1,
            x: 300,
            y: 300
        })).addTo(this.layer.bgContainer);
        this._pool.push(f)
    }
};
FOTN.Player.prototype.createTextures = function() {
    this.playerImages = "ninja_idle (1).png;ninja_idle (2).png;ninja_idle (3).png;ninja_idle (4).png;ninja_idle (5).png;ninja_1stJump (1).png;ninja_1stJump (2).png;ninja_1stJump (3).png;ninja_1stJump (4).png;ninja_1stJump (5).png;ninja_1stJump (6).png;ninja_1stJump (7).png;ninja_flip (1).png;ninja_flip (2).png;ninja_flip (3).png;ninja_flip (4).png;ninja_flip (5).png;ninja_flip (6).png;ninja_flip (7).png;ninja_flip (8).png;ninja_flip (9).png;ninja_flip (10).png".split(";");
    for (var a = 0; a < this.playerImages.length; a++) this.playerTextures.push(PIXI.Texture.fromFrame(this.playerImages[a]))
};
FOTN.Player.prototype.reset = function(a) {
    document.getElementById('moregame').style.display = "none",
    this.score = 0;
    this.scale.x = -1;
    this.rotation = 0;
    this.clearGhosts();
    this.isDead = !1;
    this.metresPosition.y = 0;
    this.x = this.game.centerX;
    this.jumpHeight = this.defaultJumpHeight;
    this.loopAnimation("idle");
    ENEA.Tweener.remove(this.slideTween);
    this.tacticalSlider = 0;
    this.longSlider = parseInt(ENEA.Storage.get("longslider"))
};
FOTN.Player.prototype.startJump = function(a) {
    clearTimeout(this._slidingDownTimer);
    clearTimeout(this._slideTimer);
    this._jumpStart = Date.now();
    this.jumpHeight = this._jumpStart - this._jumpEnd < this.jumpInterval ? this.jumpHeight + this.jumpHeightIncerease: this.defaultJumpHeight
};
FOTN.Player.prototype.checkSlide = function(a) {
    var f = this;
    this._slideTimer = setTimeout(function() {
        f._jumpEnd - f._jumpStart > f.slideStartTime && (clearTimeout(f._slideTimer), f._slidingDownTimer = setTimeout(function() {
            FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("spikes");
            clearTimeout(f._slidingDownTimer)
        },
        f._spikesSounds), f.slideDown())
    },
    this.slideStartTime)
};
FOTN.Player.prototype.slideDown = function(a) {
    var f = this,
    h = this.metresPosition.y;
    this._slidingDown = !0;
    this.layer.bgContainer.setSpikes();
    this.tmpSlider = this.metresPosition.y;
    var n = {
        pY: this.metresPosition.y,
        sY: h - this.game.Camera.playerOffset - 2
    },
    h = {
        pY: this.metresPosition.y - this.game.Camera.playerOffset,
        sY: h - 4
    };
    this.slideTween = (new ENEA.Tweener.Tween(n)).to(h, this.slideDownDuration).easing(ENEA.Tweener.Easing.Linear.None).onUpdate(function() {
        f.metresPosition.y = n.pY;
        f.position.y = -n.pY * f.layer.bgContainer.meter;
        f.layer.bgContainer.groundPosition = n.sY;
        f.layer.bgContainer.updateGroundNspikes();
        f.checkCollisions()
    }).onStop(function() {
        f.tacticalSlider += Math.round(10 * (f.tmpSlider - n.pY)) / 10;
        FOTN._tutorialIsRunning && (f.tacticalSlider = 0);
        FOTN.game.achievements.compareCurrentSlide(f.tacticalSlider);
        FOTN.game.achievements.compareTotalSlide(f.longSlider + f.tacticalSlider)
    }).onComplete(function() {
        f.slidingDown = !1;
        a && a.call()
    }).start()
};
FOTN.Player.prototype.endJump = function(a) {
    this._jumpEnd = Date.now()
};
FOTN.Player.prototype.gotoFrame = function(a) {
    this.setTexture(this.playerTextures[a])
};
FOTN.Player.prototype.startAnimation = function(a) {
    this.startFrame = this.animations[a][0];
    this.currentFrame = 0;
    this.totalFrames = this.animations[a].length;
    this._now = Date.now();
    this._delta = this._now - this._then;
    this._then = Date.now();
    this._timePassed = 0;
    this.currentAnimation = a;
    this._isPlaying = !0
};
FOTN.Player.prototype.updateAnimation = function() {
    this._now = Date.now();
    this._delta = this._now - this._then;
    this._timePassed += this._delta;
    this._timePassed >= this.animationSpeed && (this.currentFrame += ~~ (this._timePassed / this.animationSpeed), this.currentFrame >= this.totalFrames && (this._loop ? this.currentFrame = 0 : (this._numLoops--, 0 >= this._numLoops ? this.stopAnimation() : this.currentFrame = 0)), this._timePassed = 0);
    this._isPlaying && this.setTexture(this.playerTextures[this.animations[this.currentAnimation][this.currentFrame]]);
    this._then = this._now
};
FOTN.Player.prototype.stopAnimation = function() {
    this._isPlaying = !1;
    this.setTexture(this.playerTextures[this.animations[this.currentAnimation][this.totalFrames - 1]]);
    this.currentAnimation = null;
    this._timePassed = 0;
    this.game.removeUpdate(this.animID)
};
FOTN.Player.prototype.loopAnimation = function(a, f) {
    var h = this;
    this._isPlaying && this.stopAnimation();
    f ? (this._loop = !1, this._numLoops = f) : this._loop = !0;
    this.animID = "playerAnimation";
    this.startAnimation(a);
    this.game.addUpdate(this.animID,
    function() {
        h.updateAnimation()
    })
};
FOTN.Player.prototype.getScore = function() {
    return this.score
};
FOTN.Player.prototype.setScore = function(a) {
    this.score = a
};
FOTN.Player.prototype.checkCollisions = function() {
    for (var a, f, h = this.collisionRadius + this.layer.bgContainer._poolDisks[0].collisionRadius, h = h * h, n = 0; n < this.layer.bgContainer.maxObjects; n++) a = this.layer.bgContainer._poolDisks[n].position.x - this.game.player.position.x,
    f = this.layer.bgContainer._poolDisks[n].position.y - this.game.player.position.y,
    a = a * a + f * f,
    a < h && this.onCollision && (clearTimeout(this._slidingDownTimer), clearTimeout(this._slideTimer), this.onCollision.call());
    this.y + this.collisionRadius > this.layer.bgContainer.groundNspikes.position.y && this.onCollision && this.onCollision.call()
};
FOTN.Player.prototype.set = function(a) {
    this.defaultJumpHeight = a
};
FOTN.Player.prototype.getScore = function() {
    return FOTN._tutorialIsRunning ? 0 : this.score
};
FOTN.Player.prototype.setScore = function(a) {
    this.score = a
};
FOTN.ReadAchievements = function() {
    ENEA.Storage.has("tutorial") || ENEA.Storage.set("tutorial", 1);
    ENEA.Storage.has("longrunner") || ENEA.Storage.set("longrunner", 0);
    ENEA.Storage.has("longslider") || ENEA.Storage.set("longslider", 0);
    ENEA.Storage.has("reincarnation") || ENEA.Storage.set("reincarnation", 0);
    ENEA.Storage.has("first") || ENEA.Storage.set("first", this.getDate());
    this.done = "OK"
};
FOTN.ReadAchievements.prototype = {
    read: function() {
        var a = [];
        FOTN._isNuggeta || (a = this.getFromLocalStorage());
        return a
    },
    write: function(a) {
        FOTN._isNuggeta || ENEA.Storage.set("achievements", JSON.stringify(a))
    },
    getFromLocalStorage: function() {
        var a = {
            0 : 0,
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0,
            9 : 0,
            10 : 0,
            11 : 0,
            12 : 0,
            13 : 0,
            14 : 0,
            15 : 0,
            16 : 0,
            17 : 0,
            18 : 0,
            19 : 0,
            20 : 0
        };
        ENEA.Storage.has("achievements") || ENEA.Storage.set("achievements", JSON.stringify(a));
        return a = JSON.parse(ENEA.Storage.get("achievements"))
    },
    compareCurrentHeight: function(a) {
        a >= FOTN._desired[0] && FOTN.achieved[0] !== this.done && (FOTN.achieved[0] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_fastRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[1] && FOTN.achieved[1] !== this.done && (FOTN.achieved[1] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_fastRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[2] && FOTN.achieved[2] !== this.done && (FOTN.achieved[2] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_fastRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[3] && FOTN.achieved[3] !== this.done && (FOTN.achieved[3] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_fastRunner), this.onAchievement && this.onAchievement.call())
    },
    compareTotalHeight: function(a) {
        a >= FOTN._desired[4] && FOTN.achieved[4] !== this.done && (FOTN.achieved[4] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[5] && FOTN.achieved[5] !== this.done && (FOTN.achieved[5] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[6] && FOTN.achieved[6] !== this.done && (FOTN.achieved[6] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[7] && FOTN.achieved[7] !== this.done && (FOTN.achieved[7] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longRunner), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[8] && FOTN.achieved[8] !== this.done && (FOTN.achieved[8] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longRunner), this.onAchievement && this.onAchievement.call())
    },
    compareCurrentSlide: function(a) {
        a >= FOTN._desired[9] && FOTN.achieved[9] !== this.done && (FOTN.achieved[9] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_tactical), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[10] && FOTN.achieved[10] !== this.done && (FOTN.achieved[10] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_tactical), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[11] && FOTN.achieved[11] !== this.done && (FOTN.achieved[11] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_tactical), this.onAchievement && this.onAchievement.call())
    },
    compareTotalSlide: function(a) {
        a >= FOTN._desired[12] && FOTN.achieved[12] !== this.done && (FOTN.achieved[12] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longSlider), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[13] && FOTN.achieved[13] !== this.done && (FOTN.achieved[13] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longSlider), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[14] && FOTN.achieved[14] !== this.done && (FOTN.achieved[14] = this.done, this.write(FOTN.achieved), FOTN.game.unlocked.unlockedIconSprite.setTexture(FOTN.game.textures.ach_longSlider), this.onAchievement && this.onAchievement.call())
    },
    compareDeaths: function(a) {
        a >= FOTN._desired[15] && FOTN.achieved[15] !== this.done && (FOTN.achieved[15] = this.done, this.write(FOTN.achieved), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[16] && FOTN.achieved[16] !== this.done && (FOTN.achieved[16] = this.done, this.write(FOTN.achieved), this.onAchievement && this.onAchievement.call());
        a >= FOTN._desired[17] && FOTN.achieved[17] !== this.done && (FOTN.achieved[17] = this.done, this.write(FOTN.achieved), this.onAchievement && this.onAchievement.call())
    },
    compareAddict: function() {
        var a = new Date(ENEA.Storage.get("first")),
        f = new Date(this.getDate());
        0 != this.daysBetween(a, f) && (0 == this.daysBetween(a, f) - 1 ? (FOTN.achieved[18] !== this.done && (FOTN.achieved[18] += 1), FOTN.achieved[19] !== this.done && (FOTN.achieved[19] += 1), FOTN.achieved[20] !== this.done && (FOTN.achieved[20] += 1), this.write(FOTN.achieved), ENEA.Storage.set("first", this.getDate(f)), FOTN.achieved[18] >= FOTN._desired[18] && FOTN.achieved[18] !== this.done && (FOTN.achieved[18] = this.done, this.write(FOTN.achieved)), FOTN.achieved[19] >= FOTN._desired[19] && FOTN.achieved[19] !== this.done && (FOTN.achieved[19] = this.done, this.write(FOTN.achieved)), FOTN.achieved[20] >= FOTN._desired[20] && FOTN.achieved[20] !== this.done && (FOTN.achieved[20] = this.done, this.write(FOTN.achieved))) : (FOTN.achieved[18] !== this.done && (FOTN.achieved[18] = 0, this.write(FOTN.achieved), ENEA.Storage.set("first", this.getDate(f))), FOTN.achieved[19] !== this.done && (FOTN.achieved[19] = 0, this.write(FOTN.achieved), ENEA.Storage.set("first", this.getDate(f))), FOTN.achieved[20] !== this.done && (FOTN.achieved[20] = 0, this.write(FOTN.achieved), ENEA.Storage.set("first", this.getDate(f)))))
    },
    getDate: function(a) {
        var f;
        f = void 0 == a ? new Date: a;
        a = f.getDate().toString();
        var h = (f.getMonth() + 1).toString();
        f = f.getFullYear().toString();
        return (h[1] ? h: "0" + h[0]) + "/" + (a[1] ? a: "0" + a[0]) + "/" + f
    },
    daysBetween: function(a, f) {
        var h = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()),
        n = Date.UTC(f.getFullYear(), f.getMonth(), f.getDate());
        return Math.floor((n - h) / 864E5)
    }
};
FOTN.RunGame = function(a, f) {
    var h = this;
    this.game = a;
    this.layer = f;
    this.maxObjects = this.layer.bgContainer.maxObjects;
    this.game.removeAllUpdates();
    this.playerTween = null;
    this.game.player.onCollision = null;
    this.game.player.onCollision = this.onCollision.bind(this);
    ENEA._isDesktop && (this.game.settings.visible = !0);
    this.resetGame();
    FOTN.game.achievements.onAchievement = this.game.unlocked.animateOut.bind(this.game.unlocked);
    this.game.gameScreen.alpha = 0;
    this.game.gameScreen.visible = !0;
    this.spinItAll();
    this.fadeIN(function() {
        h.bindControls();
        h.animateSawsIN();
        1 == parseInt(ENEA.Storage.get("tutorial")) && (h.game.tutorialContainer.visible = !0, h.game.tutorial.runTutorial(h));
        h.game.button_restart.onClick = function() {
            h.resetGame();
            h.animateSawsIN()
        }
    })
};
FOTN.RunGame.prototype = {
    resetGame: function(a) {
        this.game.Camera.x = 0;
        this.game.Camera.y = 0;
        this.layer.bgContainer.resetAll();
        void 0 != this.playerTween && this.playerTween.stop();
        this.animating = !1;
        this.game.player.reset();
        this.game.player.y = this.layer.bgContainer.getGroundPosition() - this.game.player.playerTextures[0].height / 2;
        this.layer.heightText.setText("");
        this.layer.heightText.updateTransform();
        this.prepareSaws();
        this._isFirstJump = !0;
        this.game.gameOverScreen.visible = !1;
        FOTN.showButtonsState("game");
        this.longRunner = parseInt(ENEA.Storage.get("longrunner"));
        1 === parseInt(ENEA.Storage.get("tutorial")) || FOTN._tutorialIsRunning || ENEA.Storage.set("reincarnation", parseInt(ENEA.Storage.get("reincarnation")) + 1)
    },
    updateHeightText: function() {
        this.game.player.setScore(Math.round(10 * this.game.player.metresPosition.y) / 10);
        this.layer.heightText.setText(this.game.player.getScore() + " m");
        this.layer.heightText.updateTransform();
        this.layer.heightText.position.x = this.game.centerX - this.layer.heightText.textWidth / 2;
        FOTN.game.achievements.compareCurrentHeight(this.game.player.getScore());
        FOTN.game.achievements.compareTotalHeight(this.longRunner + this.game.player.getScore())
    },
    fadeIN: function(a) {
        ENEA.fadeElement(this.game.gameScreen, 0, 1, FOTN.FADETIME, null, a)
    },
    prepareSaws: function() {
        this.sawsOffset = 0.2;
        for (var a = 0; a < this.maxObjects; a++) this.layer.bgContainer._poolDisks[a].position.x = this.game.relX(0 == a % 2 ? 0.89 + this.sawsOffset: 0.11 - this.sawsOffset)
    },
    animateSawsIN: function(a) {
        var f = this,
        h = {
            x: this.sawsOffset
        }; (new ENEA.Tweener.Tween(h)).to({
            x: 0
        },
        400).easing(ENEA.Tweener.Easing.Cubic.Out).onUpdate(function() {
            for (var a = 0; a < f.maxObjects; a++) f.layer.bgContainer._poolDisks[a].position.x = f.game.relX(0 == a % 2 ? 0.89 + h.x: 0.11 - h.x)
        }).onComplete(function() {
            a && a.call()
        }).start()
    },
    spinItAll: function(a) {
        var f = this;
        this.game.addUpdate("shineNsaws",
        function() {
            f.layer.shine.rotation += 0.005;
            for (var a = 0; a < f.maxObjects; a++) f.layer.bgContainer._poolDisks[a].rotation += f.layer.bgContainer._poolDisks[a].rotSpeed
        })
    },
    bindControls: function() {
        var a = this;
        this.game.eventsContainer.responsive = !0;
        this.game.eventsContainer.hitArea = new PIXI.Rectangle(0, 0, this.game.width, this.game.height);
        this.game.eventsContainer.mousedown = this.game.eventsContainer.touchstart = function() {
            FOTN._tutorialIsRunning = !1;
            a.layer.heightText.visible = !0;
            a.animating || a.game.player.isDead || (a._isFirstJump ? (FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("jump"), FOTN.game.achievements.compareDeaths(parseInt(ENEA.Storage.get("reincarnation"))), a.doFirstJump()) : (a.game.player.startJump(), FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("jump"), a.jump(a.game.Camera.y, a.game.player.metresPosition.y + a.game.player.jumpHeight - a.game.Camera.playerOffset,
            function() {
                a.game.player.checkSlide()
            })))
        }
    },
    doFirstJump: function(a, f, h) {
        this.animating = !0;
        var n = this;
        a = n.game.relX(0.05);
        var p = {
            f: 5,
            plY: n.game.player.metresPosition.y,
            x: n.game.player.x,
            y: n.game.player.y
        };
        a = {
            f: 11,
            plY: n.game.player.metresPosition.y + n.game.player.jumpHeight / 2,
            x: n.layer.bgContainer.leftBorder + a,
            y: n.game.player.y - n.layer.bgContainer.meter * n.game.player.jumpHeight / 2
        }; (new ENEA.Tweener.Tween(p)).to(a, 200).easing(ENEA.Tweener.Easing.Sinusoidal.Out).onStart(function() {
            n.game.player._isPlaying && n.game.player.stopAnimation();
            n.game.player.gotoFrame(5)
        }).onUpdate(function() {
            n.game.player.position.x = p.x;
            n.game.player.position.y = p.y;
            n.game.player.gotoFrame(~~p.f);
            n.game.player.metresPosition.y = p.plY;
            n.game.player.storeGhost({
                x: n.game.player.position.x,
                y: n.game.player.position.y,
                r: n.game.player.rotation,
                frame: ~~p.f
            });
            n.game.player.showGhosts()
        }).onComplete(function() {
            n.animating = !1;
            n.game.player.clearGhosts();
            n._isFirstJump = !1;
            n.game.player.endJump();
            h && h.call()
        }).start()
    },
    jump: function(a, f, h) {
        var n = this;
        this.animating = !0;
        var p = n.game.relX(0.05),
        b = {
            camY: a,
            plY: n.game.player.metresPosition.y,
            f: 12,
            s: n.game.player.sinStart,
            x: n.game.player.position.x < n.game.centerX ? n.layer.bgContainer.leftBorder - p: n.layer.bgContainer.rightBorder + p
        };
        a = {
            camY: f,
            plY: n.game.player.metresPosition.y + n.game.player.jumpHeight,
            f: 21,
            s: n.game.player.sinEnd,
            x: n.game.player.position.x < n.game.centerX ? n.layer.bgContainer.rightBorder - p: n.layer.bgContainer.leftBorder + p
        };
        this.playerTween = (new ENEA.Tweener.Tween(b)).to(a, 400).easing(ENEA.Tweener.Easing.Sinusoidal.InOut).onStart(function() {
            void 0 != n.game.player.slideTween && n.game.player.slideTween.stop()
        }).onUpdate(function() {
            n.game.player.metresPosition.y = b.plY;
            n.game.player.position.x = b.x;
            n.game.player.position.y = -n.game.player.metresPosition.y * n.layer.bgContainer.meter + n.game.player.jumpCurvature * Math.sin(b.s);
            n.game.Camera.y = b.camY;
            n.layer.bgContainer.updatePosition();
            n.updateHeightText();
            n.checkCollisions();
            n.game.player.gotoFrame(~~b.f);
            n.game.player.storeGhost({
                x: n.game.player.position.x,
                y: n.game.player.position.y,
                r: n.game.player.rotation,
                frame: ~~b.f
            });
            n.game.player.showGhosts()
        }).onComplete(function() {
            n.game.player.scale.x = n.game.player.position.x < n.game.centerX ? 1 : -1;
            n.game.player.clearGhosts();
            n.animating = !1;
            n.game.player.endJump();
            h && h.call()
        }).start()
    },
    checkCollisions: function() {
        for (var a, f, h = this.game.player.collisionRadius + this.layer.bgContainer._poolDisks[0].collisionRadius, h = h * h, n = 0; n < this.maxObjects; n++) if (a = this.layer.bgContainer._poolDisks[n].position.x - this.game.player.position.x, f = this.layer.bgContainer._poolDisks[n].position.y - this.game.player.position.y, a = a * a + f * f, a < h) this.onCollision()
    },
    onCollision: function() {
        FOTN._soundsMuted || ENEA._isIE || !ENEA._isDesktop || FOTN.Sounds.play("impact");
        this.game.player.isDead = !0;
        this.updateGameOverScreen();
        FOTN.showButtonsState("over");
        this.game.button_restart.responsive = !1;
        var a = this;
        void 0 != this.playerTween && this.playerTween.stop();
        void 0 != this.game.player.slideTween && this.game.player.slideTween.stop();
        ENEA.Storage.set("longrunner", parseInt(ENEA.Storage.get("longrunner")) + this.game.player.getScore());
        ENEA.Storage.set("longslider", parseInt(ENEA.Storage.get("longslider")) + this.game.player.tacticalSlider);
        this.cameraShake();
        this.animatePlayerFall(function() {
            a.game.player.clearGhosts()
        });
        setTimeout(function() {
            a.getHint();
            a.game.gameOverScreen.visible = !0;
            a.game.button_restart.responsive = !0;
            ADS.showAd()
        },
        50)
    },
    getHint: function() {
        var a = this,
        f, h = 0;
        parseInt(ENEA.Storage.get("best")) < FOTN._tutorialHeight ? (f = FOTN._hints.data[FOTN._hints.data.length - 1], h = this.game.relY(0.07), this.game.hintMainText.visible = !1, this.game.button_replay.visible = !0, this.game.button_replay.responsive = !0, this.game.button_replay.onClick = function() {
           
		   Play68.goHome();
		   // a.resetGame();
            a.animateSawsIN();
            a.game.tutorialContainer.visible = !0;
            a.game.tutorial.runTutorial(a)
        }) : (f = FOTN._hints.data[~~ (Math.random() * (FOTN._hints.data.length - 1))], this.game.button_replay.visible = !1, this.game.button_replay.responsive = !1, document.getElementById('moregame').style.display = "block", this.game.player.getScore(), this.game.hintMainText.visible = !1);
        this.game.hintText.setText(f);
		window._Score=this.game.player.getScore();
		// updateShare(this.game.player.getScore());Play68.setRankingScoreDesc(this.game.player.getScore());
        this.game.hintText.updateTransform();
        this.game.hintText.x = this.game.centerX - this.game.hintText.width / 2;
        this.game.hintText.y = this.game.relY(0.735) - h
    },
    updateGameOverScreen: function() {
        this.game.bestScore.setText("最好成绩: " + this.getBestScore() + " m");
        this.game.bestScore.updateTransform();
        this.game.bestScore.applyParams({
            x: this.game.centerX - this.game.bestScore.width / 2,
            y: this.game.relY(0.23)
        })
    },
    getBestScore: function() {
        ENEA.Storage.has("best") || ENEA.Storage.set("best", 0);
        this.game.player.getScore() > parseInt(ENEA.Storage.get("best")) && ENEA.Storage.set("best", this.game.player.getScore());
        return ENEA.Storage.get("best")
    },
    animatePlayerFall: function(a) {
        var f = this,
        h = f.game.relX(0.6),
        n = {
            plX: f.game.player.position.x,
            plY: f.game.player.metresPosition.y,
            s: f.game.player.sinStart,
            r: 0
        },
        h = {
            plX: f.game.player.position.x < f.game.centerX ? f.game.player.position.x + h: f.game.player.position.x - h,
            plY: f.game.player.metresPosition.y - f.layer.bgContainer.stageHeight / 2,
            s: f.game.player.sinEnd,
            r: 2 * Math.PI
        };
        this.playerTween = (new ENEA.Tweener.Tween(n)).to(h, 1E3).easing(ENEA.Tweener.Easing.Linear.None).onUpdate(function() {
            f.game.player.metresPosition.y = n.plY;
            f.game.player.position.x = n.plX;
            f.game.player.position.y = -f.game.player.metresPosition.y * f.layer.bgContainer.meter + 3 * f.game.player.jumpCurvature * Math.sin(n.s);
            f.game.player.rotation = n.r;
            f.game.player.storeGhost({
                x: f.game.player.position.x,
                y: f.game.player.position.y,
                r: f.game.player.rotation,
                frame: ~~n.f
            });
            f.game.player.showGhosts()
        }).onComplete(function() {
            f.game.player.clearGhosts();
            a && a.call()
        }).start()
    },
    cameraShake: function(a) {
        var f = this,
        h = ENEA._isHD ? 12 : 6,
        n = this.layer.bgContainer;
        this.scrollElement(n, n.position.x, n.position.x - h, 90, null,
        function() {
            f.scrollElement(n, n.position.x, n.position.x + 2 * h, 90, null,
            function() {
                f.scrollElement(n, n.position.x, n.position.x - h, 90, null,
                function() {
                    a && a.call()
                })
            })
        })
    },
    scrollElement: function(a, f, h, n, p, b) {
        var d = {
            x: f
        };
        f = {
            x: h
        }; (new ENEA.Tweener.Tween(d)).to(f, n).easing(ENEA.Tweener.Easing.Bounce.Out).onStart(function() {
            p && p.call()
        }).onUpdate(function() {
            a.position.x = d.x
        }).onComplete(function() {
            b && b.call()
        }).start()
    }
};
FOTN.Textures = function(a) {
    this.game = a;
    this.resolution = this.game.resolution;
    this.fillTextureList();
    this.init()
};
FOTN.Textures.prototype = {
    init: function() {
        this.game.textures = [];
        for (var a in this.textureList) this.game.textures[a] = PIXI.Texture.fromFrame(this.textureList[a])
    },
    fillTextureList: function() {
        this.textureList = {
            mainBg: "bg_main.jpg",
            mainLogo: "main_logo.png",
            mainNinja: "main_ninja.png",
            mainPattern: "main_pattern.png",
            mainStripeTop: "main_stripe_top.png",
            mainStripeBottom: "main_stripe_bottom.png",
            button_start_normal: "button_start.png",
            button_start_hover: "button_start_hover.png",
            button_start_pressed: "button_start_pressed.png",
            button_moregames_normal: "button_white_moregames.png",
            button_kik_normal: "button_white_kik.png",
            button_facebook_normal: "button_white_facebook.png",
            button_twitter_normal: "button_white_twitter.png",
            button_achieve_normal: "achievements.png",
            button_achieve_hover: "achievements_hover.png",
            button_achieve_pressed: "achievements_pressed.png",
            button_leader_normal: "leaderboard.png",
            button_leader_hover: "leaderboard_hover.png",
            button_leader_pressed: "leaderboard_pressed.png",
            button_downArrow_normal: "downArrow.png",
            button_downArrow_hover: "downArrow_hover.png",
            button_downArrow_pressed: "downArrow_pressed.png",
            button_upArrow_normal: "upArrow.png",
            button_upArrow_hover: "upArrow_hover.png",
            button_upArrow_pressed: "upArrow_pressed.png",
            ach_unlocked: "ach_unlocked.png",
            itemBg: "list_bg.png",
            ach_fastRunner: "achFastRunner.png",
            ach_fastRunner_locked: "achFastRunner_locked.png",
            ach_longRunner: "achLongRunner.png",
            ach_longRunner_locked: "achLongRunner_locked.png",
            ach_longSlider: "achLongSlider.png",
            ach_longSlider_locked: "achLongSlider_locked.png",
            ach_ninjaAddict: "achNinjaAddict.png",
            ach_ninjaAddict_locked: "achNinjaAddict_locked.png",
            ach_reincarnation: "achReincarnation.png",
            ach_reincarnation_locked: "achReincarnation_locked.png",
            ach_tactical: "achTacticalSlider.png",
            ach_tactical_locked: "achTacticalSlider_locked.png",
            loading: "loading.png",
            bg1: "bg1.png",
            bg2: "bg2.png",
            bg3: "bg3.png",
            disk: "disk.png",
            ground: "ground.png",
            sideLeft: "side_left.png",
            sideRight: "side_right.png",
            shine: "shine.png",
            spikes: "spikes.png",
            button_restart_normal: "button_restart.png",
            button_restart_hover: "button_restart_hover.png",
            button_restart_pressed: "button_restart_pressed.png",
            button_settings_normal: "button_settings.png",
            button_settings_hover: "button_settings_hover.png",
            button_settings_pressed: "button_settings_pressed.png",
            button_homeSmall_normal: "button_homeSmall.png",
            button_homeSmall_hover: "button_homeSmall_hover.png",
            button_homeSmall_pressed: "button_homeSmall_pressed.png",
            button_backSmall_normal: "button_back.png",
            button_backSmall_hover: "button_back_hover.png",
            button_backSmall_pressed: "button_back_pressed.png",
            button_home_normal: "button_home.png",
            button_home_hover: "button_home_hover.png",
            button_home_pressed: "button_home_pressed.png",
            button_replay_normal: "button_replay.png",
            button_replay_hover: "button_replay_hover.png",
            button_replay_pressed: "button_replay_pressed.png",
            button_mainmenu_normal: "button_white_mainmenu.png"
        };
        if (ENEA._isDesktop) {
            this.desktopTextureList = {
                button_music_normal: "button_music.png",
                button_music_hover: "button_music_hover.png",
                button_music_pressed: "button_music_pressed.png",
                button_musicoff_normal: "button_musicoff.png",
                button_musicoff_hover: "button_musicoff_hover.png",
                button_musicoff_pressed: "button_musicoff_pressed.png",
                button_sound_normal: "button_sound.png",
                button_sound_hover: "button_sound_hover.png",
                button_sound_pressed: "button_sound_pressed.png",
                button_soundoff_normal: "button_soundoff.png",
                button_soundoff_hover: "button_soundoff_hover.png",
                button_soundoff_pressed: "button_soundoff_pressed.png"
            };
            for (var a in this.desktopTextureList) this.textureList[a] = this.desktopTextureList[a]
        }
        if (1 == parseInt(ENEA.Storage.get("tutorial")) || parseInt(ENEA.Storage.get("best")) < FOTN._tutorialHeight) for (a in this.tutorialTextureList = {
            tutorial_click: "tutorial_clickBubble.png",
            tutorial_go: "tutorial_go.png",
            tutorial_hand: "tutorial_hand.png",
            tutorial_ninja: "tutorial_ninja.png",
            tutorial_phone: "tutorial_phone.png"
        },
        this.tutorialTextureList) this.textureList[a] = this.tutorialTextureList[a]
    }
};