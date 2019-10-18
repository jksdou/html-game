function resetdpsubmit() {
    g9param.issubmit = false
}
var g9param = {
    resetId: "",
    issubmit: false
};
var cr = {};
cr.plugins_ = {}, cr.behaviors = {}, "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(e) {
        return e.__proto__
    } : function(e) {
        return e.constructor.prototype
    }),
    function() {
        function e(e, t) {
            this.x = e, this.y = t, cr.seal(this)
        }

        function t(e, t, n, r) {
            this.set(e, t, n, r), cr.seal(this)
        }

        function n() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }

        function r(e, t, n, r) {
            t > e ? r > n ? (h = n > e ? e : n, p = t > r ? t : r) : (h = r > e ? e : r, p = t > n ? t : n) : r > n ? (h = n > t ? t : n, p = e > r ? e : r) : (h = r > t ? t : r, p = e > n ? e : n)
        }

        function i() {
            this.s = null, this.items = null, this.item_count = 0, b && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }

        function s(e) {
            w[E++] = e
        }

        function o() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function u(e) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(e), cr.seal(this)
        }

        function a(e, t) {
            this.cellwidth = e, this.cellheight = t, this.cells = {}
        }

        function f(e, t, n) {
            var r;
            return a.prototype.totalCellCount++, x.length ? (r = x.pop(), r.grid = e, r.x = t, r.y = n, r) : new cr.GridCell(e, t, n)
        }

        function l(e) {
            a.prototype.totalCellCount--, e.objects.clear(), x.length < 1e3 && x.push(e)
        }

        function c(e, t, n) {
            this.grid = e, this.x = t, this.y = n, this.objects = new cr.ObjectSet
        }
        cr.logexport = function(e) {
            window.console && window.console.log && window.console.log(e)
        }, cr.seal = function(e) {
            return e
        }, cr.freeze = function(e) {
            return e
        }, cr.is_undefined = function(e) {
            return "undefined" == typeof e
        }, cr.is_number = function(e) {
            return "number" == typeof e
        }, cr.is_string = function(e) {
            return "string" == typeof e
        }, cr.isPOT = function(e) {
            return e > 0 && 0 === (e - 1 & e)
        }, cr.nextHighestPowerOfTwo = function(e) {
            --e;
            for (var t = 1; 32 > t; t <<= 1) e |= e >> t;
            return e + 1
        }, cr.abs = function(e) {
            return 0 > e ? -e : e
        }, cr.max = function(e, t) {
            return e > t ? e : t
        }, cr.min = function(e, t) {
            return t > e ? e : t
        }, cr.PI = Math.PI, cr.round = function(e) {
            return e + .5 | 0
        }, cr.floor = function(e) {
            return e >= 0 ? 0 | e : (0 | e) - 1
        }, cr.ceil = function(e) {
            var t = 0 | e;
            return t === e ? t : t + 1
        }, e.prototype.offset = function(e, t) {
            return this.x += e, this.y += t, this
        }, e.prototype.mul = function(e, t) {
            return this.x *= e, this.y *= t, this
        }, cr.vector2 = e, cr.segments_intersect = function(e, t, n, r, i, s, o, u) {
            var a, f, l, c, h, p, d, v;
            if (n > e ? (f = e, a = n) : (f = n, a = e), o > i ? (p = i, h = o) : (p = o, h = i), p > a || f > h) return !1;
            if (r > t ? (c = t, l = r) : (c = r, l = t), u > s ? (v = s, d = u) : (v = u, d = s), v > l || c > d) return !1;
            var m = i - e + o - n,
                g = s - t + u - r,
                y = n - e,
                b = r - t,
                w = o - i,
                E = u - s,
                S = cr.abs(b * w - E * y),
                x = w * g - E * m;
            if (cr.abs(x) > S) return !1;
            var T = y * g - b * m;
            return cr.abs(T) <= S
        }, t.prototype.set = function(e, t, n, r) {
            this.left = e, this.top = t, this.right = n, this.bottom = r
        }, t.prototype.copy = function(e) {
            this.left = e.left, this.top = e.top, this.right = e.right, this.bottom = e.bottom
        }, t.prototype.width = function() {
            return this.right - this.left
        }, t.prototype.height = function() {
            return this.bottom - this.top
        }, t.prototype.offset = function(e, t) {
            return this.left += e, this.top += t, this.right += e, this.bottom += t, this
        }, t.prototype.normalize = function() {
            var e = 0;
            this.left > this.right && (e = this.left, this.left = this.right, this.right = e), this.top > this.bottom && (e = this.top, this.top = this.bottom, this.bottom = e)
        }, t.prototype.intersects_rect = function(e) {
            return !(e.right < this.left || e.bottom < this.top || e.left > this.right || e.top > this.bottom)
        }, t.prototype.intersects_rect_off = function(e, t, n) {
            return !(e.right + t < this.left || e.bottom + n < this.top || e.left + t > this.right || e.top + n > this.bottom)
        }, t.prototype.contains_pt = function(e, t) {
            return e >= this.left && e <= this.right && t >= this.top && t <= this.bottom
        }, t.prototype.equals = function(e) {
            return this.left === e.left && this.top === e.top && this.right === e.right && this.bottom === e.bottom
        }, cr.rect = t, n.prototype.set_from_rect = function(e) {
            this.tlx = e.left, this.tly = e.top, this.trx = e.right, this.try_ = e.top, this.brx = e.right, this.bry = e.bottom, this.blx = e.left, this.bly = e.bottom
        }, n.prototype.set_from_rotated_rect = function(e, t) {
            if (0 === t) this.set_from_rect(e);
            else {
                var n = Math.sin(t),
                    r = Math.cos(t),
                    i = e.left * n,
                    s = e.top * n,
                    o = e.right * n,
                    u = e.bottom * n,
                    a = e.left * r,
                    f = e.top * r,
                    l = e.right * r,
                    c = e.bottom * r;
                this.tlx = a - s, this.tly = f + i, this.trx = l - s, this.try_ = f + o, this.brx = l - u, this.bry = c + o, this.blx = a - u, this.bly = c + i
            }
        }, n.prototype.offset = function(e, t) {
            return this.tlx += e, this.tly += t, this.trx += e, this.try_ += t, this.brx += e, this.bry += t, this.blx += e, this.bly += t, this
        };
        var h = 0,
            p = 0;
        n.prototype.bounding_box = function(e) {
            r(this.tlx, this.trx, this.brx, this.blx), e.left = h, e.right = p, r(this.tly, this.try_, this.bry, this.bly), e.top = h, e.bottom = p
        }, n.prototype.contains_pt = function(e, t) {
            var n = this.trx - this.tlx,
                r = this.try_ - this.tly,
                i = this.brx - this.tlx,
                s = this.bry - this.tly,
                o = e - this.tlx,
                u = t - this.tly,
                a = n * n + r * r,
                f = n * i + r * s,
                l = n * o + r * u,
                c = i * i + s * s,
                h = i * o + s * u,
                p = 1 / (a * c - f * f),
                d = (c * l - f * h) * p,
                v = (a * h - f * l) * p;
            if (d >= 0 && v > 0 && 1 > d + v) return !0;
            n = this.blx - this.tlx, r = this.bly - this.tly;
            var a = n * n + r * r,
                f = n * i + r * s,
                l = n * o + r * u;
            return p = 1 / (a * c - f * f), d = (c * l - f * h) * p, v = (a * h - f * l) * p, d >= 0 && v > 0 && 1 > d + v
        }, n.prototype.at = function(e, t) {
            if (t) switch (e) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                    return this.tlx;
                default:
                    return this.tlx
            } else switch (e) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                    return this.tly;
                default:
                    return this.tly
            }
        }, n.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, n.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, n.prototype.intersects_segment = function(e, t, n, r) {
            if (this.contains_pt(e, t) || this.contains_pt(n, r)) return !0;
            var i, s, o, u, a;
            for (a = 0; 4 > a; a++)
                if (i = this.at(a, !0), s = this.at(a, !1), o = this.at(a + 1, !0), u = this.at(a + 1, !1), cr.segments_intersect(e, t, n, r, i, s, o, u)) return !0;
            return !1
        }, n.prototype.intersects_quad = function(e) {
            var t = e.midX(),
                n = e.midY();
            if (this.contains_pt(t, n)) return !0;
            if (t = this.midX(), n = this.midY(), e.contains_pt(t, n)) return !0;
            var r, i, s, o, u, a, f, l, c, h;
            for (c = 0; 4 > c; c++)
                for (h = 0; 4 > h; h++)
                    if (r = this.at(c, !0), i = this.at(c, !1), s = this.at(c + 1, !0), o = this.at(c + 1, !1), u = e.at(h, !0), a = e.at(h, !1), f = e.at(h + 1, !0), l = e.at(h + 1, !1), cr.segments_intersect(r, i, s, o, u, a, f, l)) return !0;
            return !1
        }, cr.quad = n, cr.RGB = function(e, t, n) {
            return Math.max(Math.min(e, 255), 0) | Math.max(Math.min(t, 255), 0) << 8 | Math.max(Math.min(n, 255), 0) << 16
        }, cr.GetRValue = function(e) {
            return 255 & e
        }, cr.GetGValue = function(e) {
            return (65280 & e) >> 8
        }, cr.GetBValue = function(e) {
            return (16711680 & e) >> 16
        }, cr.shallowCopy = function(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }, cr.arrayRemove = function(e, t) {
            var n, r;
            if (t = cr.floor(t), !(0 > t || t >= e.length)) {
                for (n = t, r = e.length - 1; r > n; n++) e[n] = e[n + 1];
                e.length = r
            }
        }, cr.shallowAssignArray = function(e, t) {
            e.length = t.length;
            var n, r;
            for (n = 0, r = t.length; r > n; n++) e[n] = t[n]
        }, cr.appendArray = function(e, t) {
            e.push.apply(e, t)
        }, cr.fastIndexOf = function(e, t) {
            var n, r;
            for (n = 0, r = e.length; r > n; ++n)
                if (e[n] === t) return n;
            return -1
        }, cr.arrayFindRemove = function(e, t) {
            var n = cr.fastIndexOf(e, t); - 1 !== n && cr.arrayRemove(e, n)
        }, cr.clamp = function(e, t, n) {
            return t > e ? t : e > n ? n : e
        }, cr.to_radians = function(e) {
            return e / (180 / cr.PI)
        }, cr.to_degrees = function(e) {
            return e * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(e) {
            return e %= 360, 0 > e && (e += 360), e
        }, cr.clamp_angle = function(e) {
            return e %= 2 * cr.PI, 0 > e && (e += 2 * cr.PI), e
        }, cr.to_clamped_degrees = function(e) {
            return cr.clamp_angle_degrees(cr.to_degrees(e))
        }, cr.to_clamped_radians = function(e) {
            return cr.clamp_angle(cr.to_radians(e))
        }, cr.angleTo = function(e, t, n, r) {
            var i = n - e,
                s = r - t;
            return Math.atan2(s, i)
        }, cr.angleDiff = function(e, t) {
            if (e === t) return 0;
            var n = Math.sin(e),
                r = Math.cos(e),
                i = Math.sin(t),
                s = Math.cos(t),
                o = n * i + r * s;
            return o >= 1 ? 0 : -1 >= o ? cr.PI : Math.acos(o)
        }, cr.angleRotate = function(e, t, n) {
            var r = Math.sin(e),
                i = Math.cos(e),
                s = Math.sin(t),
                o = Math.cos(t);
            return cr.clamp_angle(Math.acos(r * s + i * o) > n ? i * s - r * o > 0 ? e + n : e - n : t)
        }, cr.angleClockwise = function(e, t) {
            var n = Math.sin(e),
                r = Math.cos(e),
                i = Math.sin(t),
                s = Math.cos(t);
            return 0 >= r * i - n * s
        }, cr.rotatePtAround = function(e, t, n, r, i, s) {
            if (0 === n) return s ? e : t;
            var o = Math.sin(n),
                u = Math.cos(n);
            e -= r, t -= i;
            var a = e * o,
                f = t * o,
                l = e * u,
                c = t * u;
            return e = l - f, t = c + a, e += r, t += i, s ? e : t
        }, cr.distanceTo = function(e, t, n, r) {
            var i = n - e,
                s = r - t;
            return Math.sqrt(i * i + s * s)
        }, cr.xor = function(e, t) {
            return !e != !t
        }, cr.lerp = function(e, t, n) {
            return e + (t - e) * n
        }, cr.unlerp = function(e, t, n) {
            return e === t ? 0 : (n - e) / (t - e)
        }, cr.anglelerp = function(e, t, n) {
            var r = cr.angleDiff(e, t);
            return cr.angleClockwise(t, e) ? e + r * n : e - r * n
        }, cr.qarp = function(e, t, n, r) {
            return cr.lerp(cr.lerp(e, t, r), cr.lerp(t, n, r), r)
        }, cr.cubic = function(e, t, n, r, i) {
            return cr.lerp(cr.qarp(e, t, n, i), cr.qarp(t, n, r, i), i)
        }, cr.cosp = function(e, t, n) {
            return (e + t + (e - t) * Math.cos(n * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(e) {
            var t;
            for (t in e)
                if (e.hasOwnProperty(t)) return !0;
            return !1
        }, cr.wipe = function(e) {
            var t;
            for (t in e) e.hasOwnProperty(t) && delete e[t]
        };
        var d = +(new Date);
        cr.performance_now = function() {
            if ("undefined" != typeof window.performance) {
                var e = window.performance;
                if ("undefined" != typeof e.now) return e.now();
                if ("undefined" != typeof e.webkitNow) return e.webkitNow();
                if ("undefined" != typeof e.mozNow) return e.mozNow();
                if ("undefined" != typeof e.msNow) return e.msNow()
            }
            return Date.now() - d
        };
        var v = !1,
            m = !1,
            g = !1,
            y = !1;
        "undefined" != typeof window && (v = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), m = !v && /safari/i.test(navigator.userAgent), g = /(iphone|ipod|ipad)/i.test(navigator.userAgent), y = window.c2ejecta);
        var b = !m && !y && !g && "undefined" != typeof Set && "undefined" != typeof Set.prototype.forEach;
        i.prototype.contains = function(e) {
            return this.isEmpty() ? !1 : b ? this.s.has(e) : this.items && this.items.hasOwnProperty(e)
        }, i.prototype.add = function(e) {
            if (b) this.s.has(e) || (this.s.add(e), this.cache_valid = !1);
            else {
                var t = e.toString(),
                    n = this.items;
                n ? n.hasOwnProperty(t) || (n[t] = e, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[t] = e, this.item_count = 1, this.cache_valid = !1)
            }
        }, i.prototype.remove = function(e) {
            if (!this.isEmpty())
                if (b) this.s.has(e) && (this.s["delete"](e), this.cache_valid = !1);
                else if (this.items) {
                var t = e.toString(),
                    n = this.items;
                n.hasOwnProperty(t) && (delete n[t], this.item_count--, this.cache_valid = !1)
            }
        }, i.prototype.clear = function() {
            this.isEmpty() || (b ? this.s.clear() : (this.items = null, this.item_count = 0), this.values_cache.length = 0, this.cache_valid = !0)
        }, i.prototype.isEmpty = function() {
            return 0 === this.count()
        }, i.prototype.count = function() {
            return b ? this.s.size : this.item_count
        };
        var w = null,
            E = 0;
        i.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (b) this.values_cache.length = this.s.size, w = this.values_cache, E = 0, this.s.forEach(s), w = null, E = 0;
                else {
                    var e = this.values_cache;
                    e.length = this.item_count;
                    var t, n = 0,
                        r = this.items;
                    if (r)
                        for (t in r) r.hasOwnProperty(t) && (e[n++] = r[t])
                }
                this.cache_valid = !0
            }
        }, i.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = i;
        var S = new cr.ObjectSet;
        cr.removeArrayDuplicates = function(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; ++t) S.add(e[t]);
            cr.shallowAssignArray(e, S.valuesRef()), S.clear()
        }, o.prototype.add = function(e) {
            this.y = e - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, o.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = o, cr.regexp_escape = function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, u.prototype.set_pts = function(e) {
            this.pts_array = e, this.pts_count = e.length / 2, this.pts_cache.length = e.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, u.prototype.is_empty = function() {
            return !this.pts_array.length
        }, u.prototype.update_bbox = function() {
            for (var e, t, n, r = this.pts_cache, i = r[0], s = i, o = r[1], u = o, a = 1, f = this.pts_count; f > a; ++a) n = 2 * a, e = r[n], t = r[n + 1], i > e && (i = e), e > s && (s = e), o > t && (o = t), t > u && (u = t);
            this.bboxLeft = i, this.bboxRight = s, this.bboxTop = o, this.bboxBottom = u
        }, u.prototype.set_from_rect = function(e, t, n) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var r = this.pts_cache;
            r[0] = e.left - t, r[1] = e.top - n, r[2] = e.right - t, r[3] = e.top - n, r[4] = e.right - t, r[5] = e.bottom - n, r[6] = e.left - t, r[7] = e.bottom - n, this.cache_width = e.right - e.left, this.cache_height = e.bottom - e.top, this.update_bbox()
        }, u.prototype.set_from_quad = function(e, t, n, r, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = e.tlx - t, s[1] = e.tly - n, s[2] = e.trx - t, s[3] = e.try_ - n, s[4] = e.brx - t, s[5] = e.bry - n, s[6] = e.blx - t, s[7] = e.bly - n, this.cache_width = r, this.cache_height = i, this.update_bbox()
        }, u.prototype.set_from_poly = function(e) {
            this.pts_count = e.pts_count, cr.shallowAssignArray(this.pts_cache, e.pts_cache), this.bboxLeft = e.bboxLeft, this.bboxTop - e.bboxTop, this.bboxRight = e.bboxRight, this.bboxBottom = e.bboxBottom
        }, u.prototype.cache_poly = function(e, t, n) {
            if (this.cache_width !== e || this.cache_height !== t || this.cache_angle !== n) {
                this.cache_width = e, this.cache_height = t, this.cache_angle = n;
                var r, i, s, o, u, a, f = 0,
                    l = 1,
                    c = this.pts_array,
                    h = this.pts_cache;
                for (0 !== n && (f = Math.sin(n), l = Math.cos(n)), r = 0, o = this.pts_count; o > r; r++) i = 2 * r, s = i + 1, u = c[i] * e, a = c[s] * t, h[i] = u * l - a * f, h[s] = a * l + u * f;
                this.update_bbox()
            }
        }, u.prototype.contains_pt = function(e, t) {
            var n = this.pts_cache;
            if (e === n[0] && t === n[1]) return !0;
            var r, i, s, o, u, a, f, l = this.pts_count,
                c = this.bboxLeft - 110,
                h = this.bboxTop - 101,
                p = this.bboxRight + 131,
                d = this.bboxBottom + 120,
                v = 0,
                m = 0;
            for (r = 0; l > r; r++) i = 2 * r, s = (r + 1) % l * 2, o = n[i], u = n[i + 1], a = n[s], f = n[s + 1], cr.segments_intersect(c, h, e, t, o, u, a, f) && v++, cr.segments_intersect(p, d, e, t, o, u, a, f) && m++;
            return v % 2 === 1 || m % 2 === 1
        }, u.prototype.intersects_poly = function(e, t, n) {
            var r = e.pts_cache,
                i = this.pts_cache;
            if (this.contains_pt(r[0] + t, r[1] + n)) return !0;
            if (e.contains_pt(i[0] - t, i[1] - n)) return !0;
            var s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w;
            for (s = 0, a = this.pts_count; a > s; s++)
                for (o = 2 * s, u = (s + 1) % a * 2, p = i[o], d = i[o + 1], v = i[u], m = i[u + 1], f = 0, h = e.pts_count; h > f; f++)
                    if (l = 2 * f, c = (f + 1) % h * 2, g = r[l] + t, y = r[l + 1] + n, b = r[c] + t, w = r[c + 1] + n, cr.segments_intersect(p, d, v, m, g, y, b, w)) return !0;
            return !1
        }, u.prototype.intersects_segment = function(e, t, n, r, i, s) {
            var o = this.pts_cache;
            if (this.contains_pt(n - e, r - t)) return !0;
            var u, a, f, l, c, h, p, d;
            for (u = 0, a = this.pts_count; a > u; u++)
                if (f = 2 * u, l = (u + 1) % a * 2, c = o[f] + e, h = o[f + 1] + t, p = o[l] + e, d = o[l + 1] + t, cr.segments_intersect(n, r, i, s, c, h, p, d)) return !0;
            return !1
        }, u.prototype.mirror = function(e) {
            var t, n, r;
            for (t = 0, n = this.pts_count; n > t; ++t) r = 2 * t, this.pts_cache[r] = 2 * e - this.pts_cache[r]
        }, u.prototype.flip = function(e) {
            var t, n, r;
            for (t = 0, n = this.pts_count; n > t; ++t) r = 2 * t + 1, this.pts_cache[r] = 2 * e - this.pts_cache[r]
        }, u.prototype.diag = function() {
            var e, t, n, r, i;
            for (e = 0, t = this.pts_count; t > e; ++e) n = 2 * e, r = n + 1, i = this.pts_cache[n], this.pts_cache[n] = this.pts_cache[r], this.pts_cache[r] = i
        }, cr.CollisionPoly = u, a.prototype.totalCellCount = 0, a.prototype.getCell = function(e, t, n) {
            var r, i = this.cells[e];
            return i ? (r = i[t], r ? r : n ? (r = f(this, e, t), this.cells[e][t] = r, r) : null) : n ? (r = f(this, e, t), this.cells[e] = {}, this.cells[e][t] = r, r) : null
        }, a.prototype.XToCell = function(e) {
            return cr.floor(e / this.cellwidth)
        }, a.prototype.YToCell = function(e) {
            return cr.floor(e / this.cellheight)
        }, a.prototype.update = function(e, t, n) {
            var r, i, s, o, u;
            if (t)
                for (r = t.left, i = t.right; i >= r; ++r)
                    for (s = t.top, o = t.bottom; o >= s; ++s) n && n.contains_pt(r, s) || (u = this.getCell(r, s, !1), u && (u.remove(e), u.isEmpty() && (l(u), this.cells[r][s] = null)));
            if (n)
                for (r = n.left, i = n.right; i >= r; ++r)
                    for (s = n.top, o = n.bottom; o >= s; ++s) t && t.contains_pt(r, s) || this.getCell(r, s, !0).insert(e)
        }, a.prototype.queryRange = function(e, t) {
            var n, r, i, s, o, u;
            for (n = this.XToCell(e.left), i = this.YToCell(e.top), r = this.XToCell(e.right), o = this.YToCell(e.bottom); r >= n; ++n)
                for (s = i; o >= s; ++s) u = this.getCell(n, s, !1), u && u.dump(t)
        }, cr.SparseGrid = a;
        var x = [];
        c.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, c.prototype.insert = function(e) {
            this.objects.add(e)
        }, c.prototype.remove = function(e) {
            this.objects.remove(e)
        }, c.prototype.dump = function(e) {
            cr.appendArray(e, this.objects.valuesRef())
        }, cr.GridCell = c;
        var T = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(e) {
            return 0 >= e || e >= 11 ? "source-over" : T[e - 1]
        }, cr.setGLBlend = function(e, t, n) {
            if (n) switch (e.srcBlend = n.ONE, e.destBlend = n.ONE_MINUS_SRC_ALPHA, t) {
                case 1:
                    e.srcBlend = n.ONE, e.destBlend = n.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    e.srcBlend = n.ONE, e.destBlend = n.ZERO;
                    break;
                case 4:
                    e.srcBlend = n.ONE_MINUS_DST_ALPHA, e.destBlend = n.ONE;
                    break;
                case 5:
                    e.srcBlend = n.DST_ALPHA, e.destBlend = n.ZERO;
                    break;
                case 6:
                    e.srcBlend = n.ZERO, e.destBlend = n.SRC_ALPHA;
                    break;
                case 7:
                    e.srcBlend = n.ONE_MINUS_DST_ALPHA, e.destBlend = n.ZERO;
                    break;
                case 8:
                    e.srcBlend = n.ZERO, e.destBlend = n.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    e.srcBlend = n.DST_ALPHA, e.destBlend = n.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    e.srcBlend = n.ONE_MINUS_DST_ALPHA, e.destBlend = n.SRC_ALPHA
            }
        }, cr.round6dp = function(e) {
            return Math.round(1e6 * e) / 1e6
        }, cr.equals_nocase = function(e, t) {
            return "string" != typeof e || "string" != typeof t ? !1 : e.length !== t.length ? !1 : e === t ? !0 : e.toLowerCase() === t.toLowerCase()
        }, cr.isCanvasInputEvent = function(e) {
            var t = e.target;
            return t ? t === document || t === window ? !0 : document && document.body && t === document.body ? !0 : cr.equals_nocase(t.tagName, "canvas") ? !0 : !1 : !0
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function(e) {
        var t = new MatrixArray(3);
        return e && (t[0] = e[0], t[1] = e[1], t[2] = e[2]), t
    }, vec3.set = function(e, t) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }, vec3.add = function(e, t, n) {
        return n && e !== n ? (n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n) : (e[0] += t[0], e[1] += t[1], e[2] += t[2], e)
    }, vec3.subtract = function(e, t, n) {
        return n && e !== n ? (n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n) : (e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e)
    }, vec3.negate = function(e, t) {
        return t || (t = e), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
    }, vec3.scale = function(e, t, n) {
        return n && e !== n ? (n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n) : (e[0] *= t, e[1] *= t, e[2] *= t, e)
    }, vec3.normalize = function(e, t) {
        t || (t = e);
        var n = e[0],
            r = e[1],
            i = e[2],
            s = Math.sqrt(n * n + r * r + i * i);
        return s ? 1 === s ? (t[0] = n, t[1] = r, t[2] = i, t) : (s = 1 / s, t[0] = n * s, t[1] = r * s, t[2] = i * s, t) : (t[0] = 0, t[1] = 0, t[2] = 0, t)
    }, vec3.cross = function(e, t, n) {
        n || (n = e);
        var r = e[0],
            i = e[1],
            e = e[2],
            s = t[0],
            o = t[1],
            t = t[2];
        return n[0] = i * t - e * o, n[1] = e * s - r * t, n[2] = r * o - i * s, n
    }, vec3.length = function(e) {
        var t = e[0],
            n = e[1],
            e = e[2];
        return Math.sqrt(t * t + n * n + e * e)
    }, vec3.dot = function(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }, vec3.direction = function(e, t, n) {
        n || (n = e);
        var r = e[0] - t[0],
            i = e[1] - t[1],
            e = e[2] - t[2],
            t = Math.sqrt(r * r + i * i + e * e);
        return t ? (t = 1 / t, n[0] = r * t, n[1] = i * t, n[2] = e * t, n) : (n[0] = 0, n[1] = 0, n[2] = 0, n)
    }, vec3.lerp = function(e, t, n, r) {
        return r || (r = e), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r
    }, vec3.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + "]"
    }, mat3.create = function(e) {
        var t = new MatrixArray(9);
        return e && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8]), t
    }, mat3.set = function(e, t) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }, mat3.identity = function(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }, mat3.transpose = function(e, t) {
        if (!t || e === t) {
            var n = e[1],
                r = e[2],
                i = e[5];
            return e[1] = e[3], e[2] = e[6], e[3] = n, e[5] = e[7], e[6] = r, e[7] = i, e
        }
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], t
    }, mat3.toMat4 = function(e, t) {
        return t || (t = mat4.create()), t[15] = 1, t[14] = 0, t[13] = 0, t[12] = 0, t[11] = 0, t[10] = e[8], t[9] = e[7], t[8] = e[6], t[7] = 0, t[6] = e[5], t[5] = e[4], t[4] = e[3], t[3] = 0, t[2] = e[2], t[1] = e[1], t[0] = e[0], t
    }, mat3.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + "]"
    }, mat4.create = function(e) {
        var t = new MatrixArray(16);
        return e && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t
    }, mat4.set = function(e, t) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, mat4.identity = function(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.transpose = function(e, t) {
        if (!t || e === t) {
            var n = e[1],
                r = e[2],
                i = e[3],
                s = e[6],
                o = e[7],
                u = e[11];
            return e[1] = e[4], e[2] = e[8], e[3] = e[12], e[4] = n, e[6] = e[9], e[7] = e[13], e[8] = r, e[9] = s, e[11] = e[14], e[12] = i, e[13] = o, e[14] = u, e
        }
        return t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15], t
    }, mat4.determinant = function(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            i = e[3],
            s = e[4],
            o = e[5],
            u = e[6],
            a = e[7],
            f = e[8],
            l = e[9],
            c = e[10],
            h = e[11],
            p = e[12],
            d = e[13],
            v = e[14],
            e = e[15];
        return p * l * u * i - f * d * u * i - p * o * c * i + s * d * c * i + f * o * v * i - s * l * v * i - p * l * r * a + f * d * r * a + p * n * c * a - t * d * c * a - f * n * v * a + t * l * v * a + p * o * r * h - s * d * r * h - p * n * u * h + t * d * u * h + s * n * v * h - t * o * v * h - f * o * r * e + s * l * r * e + f * n * u * e - t * l * u * e - s * n * c * e + t * o * c * e
    }, mat4.inverse = function(e, t) {
        t || (t = e);
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[3],
            o = e[4],
            u = e[5],
            a = e[6],
            f = e[7],
            l = e[8],
            c = e[9],
            h = e[10],
            p = e[11],
            d = e[12],
            v = e[13],
            m = e[14],
            g = e[15],
            y = n * u - r * o,
            b = n * a - i * o,
            w = n * f - s * o,
            E = r * a - i * u,
            S = r * f - s * u,
            x = i * f - s * a,
            T = l * v - c * d,
            N = l * m - h * d,
            C = l * g - p * d,
            k = c * m - h * v,
            L = c * g - p * v,
            A = h * g - p * m,
            O = 1 / (y * A - b * L + w * k + E * C - S * N + x * T);
        return t[0] = (u * A - a * L + f * k) * O, t[1] = (-r * A + i * L - s * k) * O, t[2] = (v * x - m * S + g * E) * O, t[3] = (-c * x + h * S - p * E) * O, t[4] = (-o * A + a * C - f * N) * O, t[5] = (n * A - i * C + s * N) * O, t[6] = (-d * x + m * w - g * b) * O, t[7] = (l * x - h * w + p * b) * O, t[8] = (o * L - u * C + f * T) * O, t[9] = (-n * L + r * C - s * T) * O, t[10] = (d * S - v * w + g * y) * O, t[11] = (-l * S + c * w - p * y) * O, t[12] = (-o * k + u * N - a * T) * O, t[13] = (n * k - r * N + i * T) * O, t[14] = (-d * E + v * b - m * y) * O, t[15] = (l * E - c * b + h * y) * O, t
    }, mat4.toRotationMat = function(e, t) {
        return t || (t = mat4.create()), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.toMat3 = function(e, t) {
        return t || (t = mat3.create()), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
    }, mat4.toInverseMat3 = function(e, t) {
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[4],
            o = e[5],
            u = e[6],
            a = e[8],
            f = e[9],
            l = e[10],
            c = l * o - u * f,
            h = -l * s + u * a,
            p = f * s - o * a,
            d = n * c + r * h + i * p;
        return d ? (d = 1 / d, t || (t = mat3.create()), t[0] = c * d, t[1] = (-l * r + i * f) * d, t[2] = (u * r - i * o) * d, t[3] = h * d, t[4] = (l * n - i * a) * d, t[5] = (-u * n + i * s) * d, t[6] = p * d, t[7] = (-f * n + r * a) * d, t[8] = (o * n - r * s) * d, t) : null
    }, mat4.multiply = function(e, t, n) {
        n || (n = e);
        var r = e[0],
            i = e[1],
            s = e[2],
            o = e[3],
            u = e[4],
            a = e[5],
            f = e[6],
            l = e[7],
            c = e[8],
            h = e[9],
            p = e[10],
            d = e[11],
            v = e[12],
            m = e[13],
            g = e[14],
            e = e[15],
            y = t[0],
            b = t[1],
            w = t[2],
            E = t[3],
            S = t[4],
            x = t[5],
            T = t[6],
            N = t[7],
            C = t[8],
            k = t[9],
            L = t[10],
            A = t[11],
            O = t[12],
            M = t[13],
            _ = t[14],
            t = t[15];
        return n[0] = y * r + b * u + w * c + E * v, n[1] = y * i + b * a + w * h + E * m, n[2] = y * s + b * f + w * p + E * g, n[3] = y * o + b * l + w * d + E * e, n[4] = S * r + x * u + T * c + N * v, n[5] = S * i + x * a + T * h + N * m, n[6] = S * s + x * f + T * p + N * g, n[7] = S * o + x * l + T * d + N * e, n[8] = C * r + k * u + L * c + A * v, n[9] = C * i + k * a + L * h + A * m, n[10] = C * s + k * f + L * p + A * g, n[11] = C * o + k * l + L * d + A * e, n[12] = O * r + M * u + _ * c + t * v, n[13] = O * i + M * a + _ * h + t * m, n[14] = O * s + M * f + _ * p + t * g, n[15] = O * o + M * l + _ * d + t * e, n
    }, mat4.multiplyVec3 = function(e, t, n) {
        n || (n = t);
        var r = t[0],
            i = t[1],
            t = t[2];
        return n[0] = e[0] * r + e[4] * i + e[8] * t + e[12], n[1] = e[1] * r + e[5] * i + e[9] * t + e[13], n[2] = e[2] * r + e[6] * i + e[10] * t + e[14], n
    }, mat4.multiplyVec4 = function(e, t, n) {
        n || (n = t);
        var r = t[0],
            i = t[1],
            s = t[2],
            t = t[3];
        return n[0] = e[0] * r + e[4] * i + e[8] * s + e[12] * t, n[1] = e[1] * r + e[5] * i + e[9] * s + e[13] * t, n[2] = e[2] * r + e[6] * i + e[10] * s + e[14] * t, n[3] = e[3] * r + e[7] * i + e[11] * s + e[15] * t, n
    }, mat4.translate = function(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d, v = t[0],
            m = t[1],
            t = t[2];
        return n && e !== n ? (r = e[0], i = e[1], s = e[2], o = e[3], u = e[4], a = e[5], f = e[6], l = e[7], c = e[8], h = e[9], p = e[10], d = e[11], n[0] = r, n[1] = i, n[2] = s, n[3] = o, n[4] = u, n[5] = a, n[6] = f, n[7] = l, n[8] = c, n[9] = h, n[10] = p, n[11] = d, n[12] = r * v + u * m + c * t + e[12], n[13] = i * v + a * m + h * t + e[13], n[14] = s * v + f * m + p * t + e[14], n[15] = o * v + l * m + d * t + e[15], n) : (e[12] = e[0] * v + e[4] * m + e[8] * t + e[12], e[13] = e[1] * v + e[5] * m + e[9] * t + e[13], e[14] = e[2] * v + e[6] * m + e[10] * t + e[14], e[15] = e[3] * v + e[7] * m + e[11] * t + e[15], e)
    }, mat4.scale = function(e, t, n) {
        var r = t[0],
            i = t[1],
            t = t[2];
        return n && e !== n ? (n[0] = e[0] * r, n[1] = e[1] * r, n[2] = e[2] * r, n[3] = e[3] * r, n[4] = e[4] * i, n[5] = e[5] * i, n[6] = e[6] * i, n[7] = e[7] * i, n[8] = e[8] * t, n[9] = e[9] * t, n[10] = e[10] * t, n[11] = e[11] * t, n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15], n) : (e[0] *= r, e[1] *= r, e[2] *= r, e[3] *= r, e[4] *= i, e[5] *= i, e[6] *= i, e[7] *= i, e[8] *= t, e[9] *= t, e[10] *= t, e[11] *= t, e)
    }, mat4.rotate = function(e, t, n, r) {
        var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T = n[0],
            N = n[1],
            n = n[2],
            C = Math.sqrt(T * T + N * N + n * n);
        return C ? (1 !== C && (C = 1 / C, T *= C, N *= C, n *= C), i = Math.sin(t), s = Math.cos(t), o = 1 - s, t = e[0], C = e[1], u = e[2], a = e[3], f = e[4], l = e[5], c = e[6], h = e[7], p = e[8], d = e[9], v = e[10], m = e[11], g = T * T * o + s, y = N * T * o + n * i, b = n * T * o - N * i, w = T * N * o - n * i, E = N * N * o + s, S = n * N * o + T * i, x = T * n * o + N * i, T = N * n * o - T * i, N = n * n * o + s, r ? e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]) : r = e, r[0] = t * g + f * y + p * b, r[1] = C * g + l * y + d * b, r[2] = u * g + c * y + v * b, r[3] = a * g + h * y + m * b, r[4] = t * w + f * E + p * S, r[5] = C * w + l * E + d * S, r[6] = u * w + c * E + v * S, r[7] = a * w + h * E + m * S, r[8] = t * x + f * T + p * N, r[9] = C * x + l * T + d * N, r[10] = u * x + c * T + v * N, r[11] = a * x + h * T + m * N, r) : null
    }, mat4.rotateX = function(e, t, n) {
        var r = Math.sin(t),
            t = Math.cos(t),
            i = e[4],
            s = e[5],
            o = e[6],
            u = e[7],
            a = e[8],
            f = e[9],
            l = e[10],
            c = e[11];
        return n ? e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]) : n = e, n[4] = i * t + a * r, n[5] = s * t + f * r, n[6] = o * t + l * r, n[7] = u * t + c * r, n[8] = i * -r + a * t, n[9] = s * -r + f * t, n[10] = o * -r + l * t, n[11] = u * -r + c * t, n
    }, mat4.rotateY = function(e, t, n) {
        var r = Math.sin(t),
            t = Math.cos(t),
            i = e[0],
            s = e[1],
            o = e[2],
            u = e[3],
            a = e[8],
            f = e[9],
            l = e[10],
            c = e[11];
        return n ? e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]) : n = e, n[0] = i * t + a * -r, n[1] = s * t + f * -r, n[2] = o * t + l * -r, n[3] = u * t + c * -r, n[8] = i * r + a * t, n[9] = s * r + f * t, n[10] = o * r + l * t, n[11] = u * r + c * t, n
    }, mat4.rotateZ = function(e, t, n) {
        var r = Math.sin(t),
            t = Math.cos(t),
            i = e[0],
            s = e[1],
            o = e[2],
            u = e[3],
            a = e[4],
            f = e[5],
            l = e[6],
            c = e[7];
        return n ? e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]) : n = e, n[0] = i * t + a * r, n[1] = s * t + f * r, n[2] = o * t + l * r, n[3] = u * t + c * r, n[4] = i * -r + a * t, n[5] = s * -r + f * t, n[6] = o * -r + l * t, n[7] = u * -r + c * t, n
    }, mat4.frustum = function(e, t, n, r, i, s, o) {
        o || (o = mat4.create());
        var u = t - e,
            a = r - n,
            f = s - i;
        return o[0] = 2 * i / u, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * i / a, o[6] = 0, o[7] = 0, o[8] = (t + e) / u, o[9] = (r + n) / a, o[10] = -(s + i) / f, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = -(s * i * 2) / f, o[15] = 0, o
    }, mat4.perspective = function(e, t, n, r, i) {
        return e = n * Math.tan(e * Math.PI / 360), t *= e, mat4.frustum(-t, t, -e, e, n, r, i)
    }, mat4.ortho = function(e, t, n, r, i, s, o) {
        o || (o = mat4.create());
        var u = t - e,
            a = r - n,
            f = s - i;
        return o[0] = 2 / u, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / a, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = -2 / f, o[11] = 0, o[12] = -(e + t) / u, o[13] = -(r + n) / a, o[14] = -(s + i) / f, o[15] = 1, o
    }, mat4.lookAt = function(e, t, n, r) {
        r || (r = mat4.create());
        var i, s, o, u, a, f, l, c, h = e[0],
            p = e[1],
            e = e[2];
        return s = n[0], o = n[1], i = n[2], n = t[1], f = t[2], h === t[0] && p === n && e === f ? mat4.identity(r) : (n = h - t[0], f = p - t[1], l = e - t[2], c = 1 / Math.sqrt(n * n + f * f + l * l), n *= c, f *= c, l *= c, t = o * l - i * f, i = i * n - s * l, s = s * f - o * n, (c = Math.sqrt(t * t + i * i + s * s)) ? (c = 1 / c, t *= c, i *= c, s *= c) : s = i = t = 0, o = f * s - l * i, u = l * t - n * s, a = n * i - f * t, (c = Math.sqrt(o * o + u * u + a * a)) ? (c = 1 / c, o *= c, u *= c, a *= c) : a = u = o = 0, r[0] = t, r[1] = o, r[2] = n, r[3] = 0, r[4] = i, r[5] = u, r[6] = f, r[7] = 0, r[8] = s, r[9] = a, r[10] = l, r[11] = 0, r[12] = -(t * h + i * p + s * e), r[13] = -(o * h + u * p + a * e), r[14] = -(n * h + f * p + l * e), r[15] = 1, r)
    }, mat4.fromRotationTranslation = function(e, t, n) {
        n || (n = mat4.create());
        var r = e[0],
            i = e[1],
            s = e[2],
            o = e[3],
            u = r + r,
            a = i + i,
            f = s + s,
            e = r * u,
            l = r * a;
        r *= f;
        var c = i * a;
        return i *= f, s *= f, u *= o, a *= o, o *= f, n[0] = 1 - (c + s), n[1] = l + o, n[2] = r - a, n[3] = 0, n[4] = l - o, n[5] = 1 - (e + s), n[6] = i + u, n[7] = 0, n[8] = r + a, n[9] = i - u, n[10] = 1 - (e + c), n[11] = 0, n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n
    }, mat4.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + "]"
    }, quat4.create = function(e) {
        var t = new MatrixArray(4);
        return e && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3]), t
    }, quat4.set = function(e, t) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, quat4.calculateW = function(e, t) {
        var n = e[0],
            r = e[1],
            i = e[2];
        return t && e !== t ? (t[0] = n, t[1] = r, t[2] = i, t[3] = -Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), t) : (e[3] = -Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), e)
    }, quat4.inverse = function(e, t) {
        return t && e !== t ? (t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t) : (e[0] *= -1, e[1] *= -1, e[2] *= -1, e)
    }, quat4.length = function(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            e = e[3];
        return Math.sqrt(t * t + n * n + r * r + e * e)
    }, quat4.normalize = function(e, t) {
        t || (t = e);
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[3],
            o = Math.sqrt(n * n + r * r + i * i + s * s);
        return 0 === o ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t) : (o = 1 / o, t[0] = n * o, t[1] = r * o, t[2] = i * o, t[3] = s * o, t)
    }, quat4.multiply = function(e, t, n) {
        n || (n = e);
        var r = e[0],
            i = e[1],
            s = e[2],
            e = e[3],
            o = t[0],
            u = t[1],
            a = t[2],
            t = t[3];
        return n[0] = r * t + e * o + i * a - s * u, n[1] = i * t + e * u + s * o - r * a, n[2] = s * t + e * a + r * u - i * o, n[3] = e * t - r * o - i * u - s * a, n
    }, quat4.multiplyVec3 = function(e, t, n) {
        n || (n = t);
        var r = t[0],
            i = t[1],
            s = t[2],
            t = e[0],
            o = e[1],
            u = e[2],
            e = e[3],
            a = e * r + o * s - u * i,
            f = e * i + u * r - t * s,
            l = e * s + t * i - o * r,
            r = -t * r - o * i - u * s;
        return n[0] = a * e + r * -t + f * -u - l * -o, n[1] = f * e + r * -o + l * -t - a * -u, n[2] = l * e + r * -u + a * -o - f * -t, n
    }, quat4.toMat3 = function(e, t) {
        t || (t = mat3.create());
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[3],
            o = n + n,
            u = r + r,
            a = i + i,
            f = n * o,
            l = n * u;
        n *= a;
        var c = r * u;
        return r *= a, i *= a, o *= s, u *= s, s *= a, t[0] = 1 - (c + i), t[1] = l + s, t[2] = n - u, t[3] = l - s, t[4] = 1 - (f + i), t[5] = r + o, t[6] = n + u, t[7] = r - o, t[8] = 1 - (f + c), t
    }, quat4.toMat4 = function(e, t) {
        t || (t = mat4.create());
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[3],
            o = n + n,
            u = r + r,
            a = i + i,
            f = n * o,
            l = n * u;
        n *= a;
        var c = r * u;
        return r *= a, i *= a, o *= s, u *= s, s *= a, t[0] = 1 - (c + i), t[1] = l + s, t[2] = n - u, t[3] = 0, t[4] = l - s, t[5] = 1 - (f + i), t[6] = r + o, t[7] = 0, t[8] = n + u, t[9] = r - o, t[10] = 1 - (f + c), t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, quat4.slerp = function(e, t, n, r) {
        r || (r = e);
        var i, s, o = e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
        return Math.abs(o) >= 1 ? (r !== e && (r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3]), r) : (i = Math.acos(o), s = Math.sqrt(1 - o * o), Math.abs(s) < .001 ? (r[0] = .5 * e[0] + .5 * t[0], r[1] = .5 * e[1] + .5 * t[1], r[2] = .5 * e[2] + .5 * t[2], r[3] = .5 * e[3] + .5 * t[3], r) : (o = Math.sin((1 - n) * i) / s, n = Math.sin(n * i) / s, r[0] = e[0] * o + t[0] * n, r[1] = e[1] * o + t[1] * n, r[2] = e[2] * o + t[2] * n, r[3] = e[3] * o + t[3] * n, r))
    }, quat4.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + "]"
    },
    function() {
        function e(e) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = e, this.initState()
        }

        function t(e, t, n) {
            this.gl = e, this.shaderProgram = t, this.name = n, this.locAPos = e.getAttribLocation(t, "aPos"), this.locATex = e.getAttribLocation(t, "aTex"), this.locMatP = e.getUniformLocation(t, "matP"), this.locMatMV = e.getUniformLocation(t, "matMV"), this.locOpacity = e.getUniformLocation(t, "opacity"), this.locSamplerFront = e.getUniformLocation(t, "samplerFront"), this.locSamplerBack = e.getUniformLocation(t, "samplerBack"), this.locDestStart = e.getUniformLocation(t, "destStart"), this.locDestEnd = e.getUniformLocation(t, "destEnd"), this.locSeconds = e.getUniformLocation(t, "seconds"), this.locPixelWidth = e.getUniformLocation(t, "pixelWidth"), this.locPixelHeight = e.getUniformLocation(t, "pixelHeight"), this.locLayerScale = e.getUniformLocation(t, "layerScale"), this.locLayerAngle = e.getUniformLocation(t, "layerAngle"), this.locViewOrigin = e.getUniformLocation(t, "viewOrigin"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin), this.locOpacity && e.uniform1f(this.locOpacity, 1), this.locSamplerFront && e.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && e.uniform1i(this.locSamplerBack, 1), this.locDestStart && e.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && e.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && e.uniform1f(this.locLayerScale, 1), this.locLayerAngle && e.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && e.uniform2f(this.locViewOrigin, 0, 0), this.hasCurrentMatMV = !1
        }

        function n(e, t) {
            this.type = e, this.glwrap = t, this.gl = t.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        var r = 8e3,
            i = r / 2 * 3,
            s = 8e3,
            o = 4,
            u = 0,
            a = 1,
            f = 2,
            l = 3,
            c = 4,
            h = 5,
            p = 6,
            d = 7,
            v = 8,
            m = 9,
            g = 10;
        e.prototype.initState = function() {
            var e, t, n = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), this.maxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE), this.lastSrcBlend = n.ONE, this.lastDestBlend = n.ONE_MINUS_SRC_ALPHA, this.pointBuffer = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, this.pointBuffer), this.vertexBuffers = new Array(o), this.texcoordBuffers = new Array(o), e = 0; o > e; e++) this.vertexBuffers[e] = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffers[e]), this.texcoordBuffers[e] = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, this.texcoordBuffers[e]);
            this.curBuffer = 0, this.indexBuffer = n.createBuffer(), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.indexBuffer), this.vertexData = new Float32Array(2 * r), this.texcoordData = new Float32Array(2 * r), this.pointData = new Float32Array(4 * s);
            var u = new Uint16Array(i);
            e = 0, t = i;
            for (var a = 0; t > e;) u[e++] = a, u[e++] = a + 1, u[e++] = a + 2, u[e++] = a, u[e++] = a + 2, u[e++] = a + 3, a += 4;
            n.bufferData(n.ELEMENT_ARRAY_BUFFER, u, n.STATIC_DRAW), this.vertexPtr = 0, this.pointPtr = 0;
            var f, l;
            this.shaderPrograms = [], f = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "    gl_FragColor = texture2D(samplerFront, vTex);", "    gl_FragColor *= opacity;", "}"].join("\n"), l = ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "  gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", " vTex = aTex;", "}"].join("\n");
            var c = this.createShaderProgram({
                src: f
            }, l, "<default>");
            this.shaderPrograms.push(c), f = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "    gl_FragColor = texture2D(samplerFront, gl_PointCoord);", "   gl_FragColor *= opacity;", "}"].join("\n");
            var h = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "   gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", " gl_PointSize = aPos.z;", "   opacity = aPos.w;", "}"].join("\n");
            c = this.createShaderProgram({
                src: f
            }, h, "<point>"), this.shaderPrograms.push(c);
            for (var p in cr.shaders) cr.shaders.hasOwnProperty(p) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[p], l, p));
            n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = n.createFramebuffer(), this.renderToTex = null, this.tmpVec3 = vec3.create([0, 0, 0]);
            var d = n.getParameter(n.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = d[0], this.maxPointSize = d[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, e.prototype.createShaderProgram = function(e, n, r) {
            var i = this.gl,
                s = i.createShader(i.FRAGMENT_SHADER);
            if (i.shaderSource(s, e.src), i.compileShader(s), !i.getShaderParameter(s, i.COMPILE_STATUS)) return i.deleteShader(s), null;
            var o = i.createShader(i.VERTEX_SHADER);
            if (i.shaderSource(o, n), i.compileShader(o), !i.getShaderParameter(o, i.COMPILE_STATUS)) return i.deleteShader(s), i.deleteShader(o), null;
            var u = i.createProgram();
            if (i.attachShader(u, s), i.attachShader(u, o), i.linkProgram(u), !i.getProgramParameter(u, i.LINK_STATUS)) return i.deleteShader(s), i.deleteShader(o), i.deleteProgram(u), null;
            i.useProgram(u), i.deleteShader(s), i.deleteShader(o);
            var a = new t(i, u, r);
            a.extendBoxHorizontal = e.extendBoxHorizontal || 0, a.extendBoxVertical = e.extendBoxVertical || 0, a.crossSampling = !!e.crossSampling, a.animated = !!e.animated, a.parameters = e.parameters || [];
            var f, l;
            for (f = 0, l = a.parameters.length; l > f; f++) a.parameters[f][1] = i.getUniformLocation(u, a.parameters[f][0]), i.uniform1f(a.parameters[f][1], 0);
            return cr.seal(a), a
        }, e.prototype.getShaderIndex = function(e) {
            var t, n;
            for (t = 0, n = this.shaderPrograms.length; n > t; t++)
                if (this.shaderPrograms[t].name === e) return t;
            return -1
        }, e.prototype.project = function(e, t, n) {
            var r = this.matMV,
                i = this.matP,
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            s[0] = r[0] * e + r[4] * t + r[12], s[1] = r[1] * e + r[5] * t + r[13], s[2] = r[2] * e + r[6] * t + r[14], s[3] = r[3] * e + r[7] * t + r[15], s[4] = i[0] * s[0] + i[4] * s[1] + i[8] * s[2] + i[12] * s[3], s[5] = i[1] * s[0] + i[5] * s[1] + i[9] * s[2] + i[13] * s[3], s[6] = i[2] * s[0] + i[6] * s[1] + i[10] * s[2] + i[14] * s[3], s[7] = -s[2], 0 !== s[7] && (s[7] = 1 / s[7], s[4] *= s[7], s[5] *= s[7], s[6] *= s[7], n[0] = (.5 * s[4] + .5) * this.width, n[1] = (.5 * s[5] + .5) * this.height)
        }, e.prototype.setSize = function(e, t, n) {
            if (this.width !== e || this.height !== t || n) {
                this.endBatch(), this.width = e, this.height = t, this.gl.viewport(0, 0, e, t), mat4.perspective(45, e / t, 1, 1e3, this.matP), mat4.lookAt(this.cam, this.look, this.up, this.matMV);
                var r = [0, 0],
                    i = [0, 0];
                this.project(0, 0, r), this.project(1, 1, i), this.worldScale[0] = 1 / (i[0] - r[0]), this.worldScale[1] = -1 / (i[1] - r[1]);
                var s, o, u;
                for (s = 0, o = this.shaderPrograms.length; o > s; s++) u = this.shaderPrograms[s], u.hasCurrentMatMV = !1, u.locMatP && (this.gl.useProgram(u.shaderProgram), this.gl.uniformMatrix4fv(u.locMatP, !1, this.matP));
                this.gl.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null
            }
        }, e.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, e.prototype.translate = function(e, t) {
            (0 !== e || 0 !== t) && (this.tmpVec3[0] = e, this.tmpVec3[1] = t, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, e.prototype.scale = function(e, t) {
            (1 !== e || 1 !== t) && (this.tmpVec3[0] = e, this.tmpVec3[1] = t, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, e.prototype.rotateZ = function(e) {
            0 !== e && mat4.rotateZ(this.matMV, e)
        }, e.prototype.updateModelView = function() {
            for (var e = !1, t = 0; 16 > t; t++)
                if (this.lastMV[t] !== this.matMV[t]) {
                    e = !0;
                    break
                }
            if (e) {
                var n = this.pushBatch();
                n.type = h, n.mat4param ? mat4.set(this.matMV, n.mat4param) : n.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, n.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, n.prototype.doSetTexture1 = function() {
            var e = this.gl;
            e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.texParam), e.activeTexture(e.TEXTURE0)
        }, n.prototype.doSetOpacity = function() {
            var e = this.opacityParam,
                t = this.glwrap;
            t.currentOpacity = e;
            var n = t.currentShader;
            n.locOpacity && this.gl.uniform1f(n.locOpacity, e)
        }, n.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, 2 * this.startIndex)
        }, n.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, n.prototype.doUpdateModelView = function() {
            var e, t, n, r = this.glwrap.shaderPrograms,
                i = this.glwrap.currentProgram;
            for (e = 0, t = r.length; t > e; e++) n = r[e], e === i && n.locMatMV ? (this.gl.uniformMatrix4fv(n.locMatMV, !1, this.mat4param), n.hasCurrentMatMV = !0) : n.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, n.prototype.doRenderToTexture = function() {
            var e = this.gl,
                t = this.glwrap;
            this.texParam ? (t.lastTexture1 === this.texParam && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, null), t.lastTexture1 = null, e.activeTexture(e.TEXTURE0)), e.bindFramebuffer(e.FRAMEBUFFER, t.fbo), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texParam, 0)) : (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0), e.bindFramebuffer(e.FRAMEBUFFER, null))
        }, n.prototype.doClear = function() {
            var e = this.gl;
            0 === this.startIndex ? (e.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), e.clear(e.COLOR_BUFFER_BIT)) : (e.enable(e.SCISSOR_TEST), e.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), e.clearColor(0, 0, 0, 0), e.clear(this.gl.COLOR_BUFFER_BIT), e.disable(e.SCISSOR_TEST))
        }, n.prototype.doPoints = function() {
            var e = this.gl,
                t = this.glwrap,
                n = t.shaderPrograms[1];
            e.useProgram(n.shaderProgram), !n.hasCurrentMatMV && n.locMatMV && (e.uniformMatrix4fv(n.locMatMV, !1, t.currentMV), n.hasCurrentMatMV = !0), e.enableVertexAttribArray(n.locAPos), e.bindBuffer(e.ARRAY_BUFFER, t.pointBuffer), e.vertexAttribPointer(n.locAPos, 4, e.FLOAT, !1, 0, 0), e.drawArrays(e.POINTS, this.startIndex / 4, this.indexCount), n = t.currentShader, e.useProgram(n.shaderProgram), n.locAPos >= 0 && (e.enableVertexAttribArray(n.locAPos), e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffers[t.curBuffer]), e.vertexAttribPointer(n.locAPos, 2, e.FLOAT, !1, 0, 0)), n.locATex >= 0 && (e.enableVertexAttribArray(n.locATex), e.bindBuffer(e.ARRAY_BUFFER, t.texcoordBuffers[t.curBuffer]), e.vertexAttribPointer(n.locATex, 2, e.FLOAT, !1, 0, 0))
        }, n.prototype.doSetProgram = function() {
            var e = this.gl,
                t = this.glwrap,
                n = t.shaderPrograms[this.startIndex];
            t.currentProgram = this.startIndex, t.currentShader = n, e.useProgram(n.shaderProgram), !n.hasCurrentMatMV && n.locMatMV && (e.uniformMatrix4fv(n.locMatMV, !1, t.currentMV), n.hasCurrentMatMV = !0), n.locOpacity && e.uniform1f(n.locOpacity, t.currentOpacity), n.locAPos >= 0 && (e.enableVertexAttribArray(n.locAPos), e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffers[t.curBuffer]), e.vertexAttribPointer(n.locAPos, 2, e.FLOAT, !1, 0, 0)), n.locATex >= 0 && (e.enableVertexAttribArray(n.locATex), e.bindBuffer(e.ARRAY_BUFFER, t.texcoordBuffers[t.curBuffer]), e.vertexAttribPointer(n.locATex, 2, e.FLOAT, !1, 0, 0))
        }, n.prototype.doSetProgramParameters = function() {
            var e, t, n = this.glwrap.currentShader,
                r = this.gl,
                i = this.mat4param;
            if (n.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, r.activeTexture(r.TEXTURE0)), n.locPixelWidth && r.uniform1f(n.locPixelWidth, i[0]), n.locPixelHeight && r.uniform1f(n.locPixelHeight, i[1]), n.locDestStart && r.uniform2f(n.locDestStart, i[2], i[3]), n.locDestEnd && r.uniform2f(n.locDestEnd, i[4], i[5]), n.locLayerScale && r.uniform1f(n.locLayerScale, i[6]), n.locLayerAngle && r.uniform1f(n.locLayerAngle, i[7]), n.locViewOrigin && r.uniform2f(n.locViewOrigin, i[8], i[9]), n.locSeconds && r.uniform1f(n.locSeconds, cr.performance_now() / 1e3), n.parameters.length)
                for (e = 0, t = n.parameters.length; t > e; e++) r.uniform1f(n.parameters[e][1], this.shaderParams[e])
        }, e.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new n(u, this)), this.batch[this.batchPtr++]
        }, e.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var e = this.gl;
                if (this.pointPtr > 0 && (e.bindBuffer(e.ARRAY_BUFFER, this.pointBuffer), e.bufferData(e.ARRAY_BUFFER, this.pointData.subarray(0, this.pointPtr), e.STREAM_DRAW), t && t.locAPos >= 0 && "<point>" === t.name && e.vertexAttribPointer(t.locAPos, 4, e.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var t = this.currentShader;
                    e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), e.bufferData(e.ARRAY_BUFFER, this.vertexData.subarray(0, this.vertexPtr), e.STREAM_DRAW), t && t.locAPos >= 0 && "<point>" !== t.name && e.vertexAttribPointer(t.locAPos, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), e.bufferData(e.ARRAY_BUFFER, this.texcoordData.subarray(0, this.vertexPtr), e.STREAM_DRAW), t && t.locATex >= 0 && "<point>" !== t.name && e.vertexAttribPointer(t.locATex, 2, e.FLOAT, !1, 0, 0)
                }
                var n, r, i;
                for (n = 0, r = this.batchPtr; r > n; n++) switch (i = this.batch[n], i.type) {
                    case 1:
                        i.doQuad();
                        break;
                    case 2:
                        i.doSetTexture();
                        break;
                    case 3:
                        i.doSetOpacity();
                        break;
                    case 4:
                        i.doSetBlend();
                        break;
                    case 5:
                        i.doUpdateModelView();
                        break;
                    case 6:
                        i.doRenderToTexture();
                        break;
                    case 7:
                        i.doClear();
                        break;
                    case 8:
                        i.doPoints();
                        break;
                    case 9:
                        i.doSetProgram();
                        break;
                    case 10:
                        i.doSetProgramParameters();
                        break;
                    case 11:
                        i.doSetTexture1()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.curBuffer++, this.curBuffer >= o && (this.curBuffer = 0)
            }
        }, e.prototype.setOpacity = function(e) {
            if (e !== this.lastOpacity) {
                var t = this.pushBatch();
                t.type = l, t.opacityParam = e, this.lastOpacity = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.setTexture = function(e) {
            if (e !== this.lastTexture0) {
                var t = this.pushBatch();
                t.type = f, t.texParam = e, this.lastTexture0 = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.setBlend = function(e, t) {
            if (e !== this.lastSrcBlend || t !== this.lastDestBlend) {
                var n = this.pushBatch();
                n.type = c, n.startIndex = e, n.indexCount = t, this.lastSrcBlend = e, this.lastDestBlend = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, e.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, e.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        var y = 2 * r - 8;
        e.prototype.quad = function(e, t, n, r, i, s, o, u) {
            this.vertexPtr >= y && this.endBatch();
            var f = this.vertexPtr,
                l = this.vertexData,
                c = this.texcoordData;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var h = this.pushBatch();
                h.type = a, h.startIndex = f / 4 * 3, h.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            l[f] = e, c[f++] = 0, l[f] = t, c[f++] = 0, l[f] = n, c[f++] = 1, l[f] = r, c[f++] = 0, l[f] = i, c[f++] = 1, l[f] = s, c[f++] = 1, l[f] = o, c[f++] = 0, l[f] = u, c[f++] = 1, this.vertexPtr = f
        }, e.prototype.quadTex = function(e, t, n, r, i, s, o, u, f) {
            this.vertexPtr >= y && this.endBatch();
            var l = this.vertexPtr,
                c = this.vertexData,
                h = this.texcoordData;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var p = this.pushBatch();
                p.type = a, p.startIndex = l / 4 * 3, p.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var d = f.left,
                v = f.top,
                m = f.right,
                g = f.bottom;
            c[l] = e, h[l++] = d, c[l] = t, h[l++] = v, c[l] = n, h[l++] = m, c[l] = r, h[l++] = v, c[l] = i, h[l++] = m, c[l] = s, h[l++] = g, c[l] = o, h[l++] = d, c[l] = u, h[l++] = g, this.vertexPtr = l
        }, e.prototype.quadTexUV = function(e, t, n, r, i, s, o, u, f, l, c, h, p, d, v, m) {
            this.vertexPtr >= y && this.endBatch();
            var g = this.vertexPtr,
                b = this.vertexData,
                w = this.texcoordData;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var E = this.pushBatch();
                E.type = a, E.startIndex = g / 4 * 3, E.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            b[g] = e, w[g++] = f, b[g] = t, w[g++] = l, b[g] = n, w[g++] = c, b[g] = r, w[g++] = h, b[g] = i, w[g++] = p, b[g] = s, w[g++] = d, b[g] = o, w[g++] = v, b[g] = u, w[g++] = m, this.vertexPtr = g
        }, e.prototype.convexPoly = function(e) {
            var t, n, r, i, s, o, u, a, f = e.length / 2,
                l = f - 2,
                c = l - 1,
                h = e[0],
                p = e[1];
            for (t = 0; l > t; t += 2) n = 2 * t, r = e[n + 2], i = e[n + 3], s = e[n + 4], o = e[n + 5], t === c ? this.quad(h, p, r, i, s, o, s, o) : (u = e[n + 6], a = e[n + 7], this.quad(h, p, r, i, s, o, u, a))
        };
        var b = s - 4;
        e.prototype.point = function(e, t, n, r) {
            this.pointPtr >= b && this.endBatch();
            var i = this.pointPtr,
                s = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var o = this.pushBatch();
                o.type = v, o.startIndex = i, o.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            s[i++] = e, s[i++] = t, s[i++] = n, s[i++] = r, this.pointPtr = i
        }, e.prototype.switchProgram = function(e) {
            if (this.lastProgram !== e) {
                var t = this.shaderPrograms[e];
                if (!t) {
                    if (0 === this.lastProgram) return;
                    e = 0, t = this.shaderPrograms[0]
                }
                var n = this.pushBatch();
                n.type = m, n.startIndex = e, this.lastProgram = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.programUsesDest = function(e) {
            var t = this.shaderPrograms[e];
            return !(!t.locDestStart && !t.locDestEnd)
        }, e.prototype.programUsesCrossSampling = function(e) {
            var t = this.shaderPrograms[e];
            return !!(t.locDestStart || t.locDestEnd || t.crossSampling)
        }, e.prototype.programExtendsBox = function(e) {
            var t = this.shaderPrograms[e];
            return 0 !== t.extendBoxHorizontal || 0 !== t.extendBoxVertical
        }, e.prototype.getProgramBoxExtendHorizontal = function(e) {
            return this.shaderPrograms[e].extendBoxHorizontal
        }, e.prototype.getProgramBoxExtendVertical = function(e) {
            return this.shaderPrograms[e].extendBoxVertical
        }, e.prototype.getProgramParameterType = function(e, t) {
            return this.shaderPrograms[e].parameters[t][2]
        }, e.prototype.programIsAnimated = function(e) {
            return this.shaderPrograms[e].animated
        }, e.prototype.setProgramParameters = function(e, t, n, r, i, s, o, u, a, f, l, c) {
            var h, p, d, v, m, y = this.shaderPrograms[this.lastProgram];
            if (y.hasAnyOptionalUniforms || c.length) {
                if (d = this.pushBatch(), d.type = g, d.mat4param ? mat4.set(this.matMV, d.mat4param) : d.mat4param = mat4.create(), v = d.mat4param, v[0] = t, v[1] = n, v[2] = r, v[3] = i, v[4] = s, v[5] = o, v[6] = u, v[7] = a, v[8] = f, v[9] = l, d.texParam = y.locSamplerBack ? e : null, c.length)
                    for (m = d.shaderParams, m.length = c.length, h = 0, p = c.length; p > h; h++) m[h] = c[h];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.clear = function(e, t, n, r) {
            var i = this.pushBatch();
            i.type = d, i.startIndex = 0, i.mat4param || (i.mat4param = mat4.create()), i.mat4param[0] = e, i.mat4param[1] = t, i.mat4param[2] = n, i.mat4param[3] = r, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, e.prototype.clearRect = function(e, t, n, r) {
            if (!(0 > n || 0 > r)) {
                var i = this.pushBatch();
                i.type = d, i.startIndex = 1, i.mat4param || (i.mat4param = mat4.create()), i.mat4param[0] = e, i.mat4param[1] = t, i.mat4param[2] = n, i.mat4param[3] = r, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var w = [],
            E = {},
            S = 1,
            x = 2,
            T = 3,
            N = 4;
        e.prototype.loadTexture = function(e, t, n, r, i, s) {
            t = !!t, n = !!n;
            // updateShare(0, 0);
            var o = e.src + "," + t + "," + n + (t ? "," + i : ""),
                u = null;
            if ("undefined" != typeof e.src && E.hasOwnProperty(o)) return u = E[o], u.c2refcount++, u;
            this.endBatch();
            var a = this.gl,
                f = cr.isPOT(e.width) && cr.isPOT(e.height);
            u = a.createTexture(), a.bindTexture(a.TEXTURE_2D, u), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var l = a.RGBA,
                c = a.RGBA,
                h = a.UNSIGNED_BYTE;
            if (r && !this.isIE) switch (r) {
                case S:
                    l = a.RGB, c = a.RGB;
                    break;
                case x:
                    h = a.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case T:
                    h = a.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case N:
                    l = a.RGB, c = a.RGB, h = a.UNSIGNED_SHORT_5_6_5
            }
            if (!f && t) {
                var p = document.createElement("canvas");
                p.width = cr.nextHighestPowerOfTwo(e.width), p.height = cr.nextHighestPowerOfTwo(e.height);
                var d = p.getContext("2d");
                d.webkitImageSmoothingEnabled = n, d.mozImageSmoothingEnabled = n, d.msImageSmoothingEnabled = n, d.imageSmoothingEnabled = n, d.drawImage(e, 0, 0, e.width, e.height, 0, 0, p.width, p.height), a.texImage2D(a.TEXTURE_2D, 0, l, c, h, p)
            } else a.texImage2D(a.TEXTURE_2D, 0, l, c, h, e);
            return t ? "repeat-x" === i ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.REPEAT), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)) : "repeat-y" === i ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.REPEAT)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.REPEAT), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.REPEAT)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)), n ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), f && this.enable_mipmaps && !s ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_LINEAR), a.generateMipmap(a.TEXTURE_2D)) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST)), a.bindTexture(a.TEXTURE_2D, null), this.lastTexture0 = null, u.c2width = e.width, u.c2height = e.height, u.c2refcount = 1, u.c2texkey = o, w.push(u), E[o] = u, u
        }, e.prototype.createEmptyTexture = function(e, t, n, r, i) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (r = !1);
            var o = s.createTexture();
            return s.bindTexture(s.TEXTURE_2D, o), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, e, t, 0, s.RGBA, r ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, null), i ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.REPEAT), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.REPEAT)) : (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE)), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, n ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, n ? s.LINEAR : s.NEAREST), s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = e, o.c2height = t, w.push(o), o
        }, e.prototype.videoToTexture = function(e, t, n) {
            this.endBatch();
            var r = this.gl;
            this.isIE && (n = !1), r.bindTexture(r.TEXTURE_2D, t), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, n ? r.UNSIGNED_SHORT_4_4_4_4 : r.UNSIGNED_BYTE, e), r.bindTexture(r.TEXTURE_2D, null), this.lastTexture0 = null
        }, e.prototype.deleteTexture = function(e) {
            if (e) {
                if ("undefined" != typeof e.c2refcount && e.c2refcount > 1) return void(e.c2refcount--);
                this.endBatch(), e === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), e === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(w, e), "undefined" != typeof e.c2texkey && delete E[e.c2texkey], this.gl.deleteTexture(e)
            }
        }, e.prototype.estimateVRAM = function() {
            var e, t, n, r = this.width * this.height * 4 * 2;
            for (e = 0, t = w.length; t > e; e++) n = w[e], r += n.c2width * n.c2height * 4;
            return r
        }, e.prototype.textureCount = function() {
            return w.length
        }, e.prototype.setRenderingToTexture = function(e) {
            if (e !== this.renderToTex) {
                var t = this.pushBatch();
                t.type = p, t.texParam = e, this.renderToTex = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = e
    }(),
    function() {
        function e(e) {
            if (e && (e.getContext || e.dc) && !e.c2runtime) {
                e.c2runtime = this;
                var t = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" == typeof window.c2isCrosswalk || !window.c2isCrosswalk), this.isPhoneGap = !this.isCrosswalk && "undefined" != typeof window.device && ("undefined" != typeof window.device.cordova || "undefined" != typeof window.device.phonegap) || "undefined" != typeof window.c2isphonegap && window.c2isphonegap, this.isDirectCanvas = !!e.dc, this.isAppMobi = "undefined" != typeof window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    t.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    t.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    t.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    t.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    t.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent), this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE, this.isWindows = /windows/i.test(navigator.userAgent), this.isNodeWebkit = "undefined" != typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent), this.isArcade = "undefined" != typeof window.is_scirra_arcade, this.isWindows8App = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !("undefined" == typeof window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !("undefined" == typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !("undefined" == typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81, this.isBlackberry10 = !("undefined" == typeof window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isPhoneGap || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), "undefined" == typeof cr_is_preview || this.isNodeWebkit || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.isNodeWebkit = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = e, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.ctx = null, this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(e) {
                    return e.preventDefault && e.preventDefault(), !1
                }, this.canvas.onselectstart = function(e) {
                    return e.preventDefault && e.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNodeWebkit && (window.ondragover = function(e) {
                    return e.preventDefault(), !1
                }, window.ondrop = function(e) {
                    return e.preventDefault(), !1
                }, require("nw.gui").App.clearCache()), this.width = e.width, this.height = e.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +(new Date)
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = new cr.ObjectSet, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = "", this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.dt = 0, this.dt1 = 0, this.logictime = 0, this.cpuutilisation = 0, this.zeroDtCount = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.last_tick_time = 0, this.measuring_dt = !0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.halfFramerateMode = !1, this.lastRafTime = 0, this.ranLastRaf = !1, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogo = null, this.snapshotCanvas = null, this.snapshotData = "", this.load(), this.isRetina = (!this.isDomFree || this.isEjecta) && this.useHighDpi && !this.isAndroidStockBrowser, this.devicePixelRatio = this.isRetina ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1, this.ClearDeathRow();
                var n, r = this.alphaBackground && !(this.isNodeWebkit || this.isWinJS || this.isWindowsPhone8 || this.isCrosswalk);
                this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0);
                try {
                    this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (n = {
                        alpha: r,
                        depth: !1,
                        antialias: !1,
                        failIfMajorPerformanceCaveat: !0
                    }, this.gl = e.getContext("webgl", n) || e.getContext("experimental-webgl", n))
                } catch (i) {}
                if (this.gl) {
                    this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function() {
                        return !1
                    }, this.overlay_canvas.onselectstart = function() {
                        return !1
                    }, this.overlay_canvas.width = this.cssWidth, this.overlay_canvas.height = this.cssHeight, jQuery(this.overlay_canvas).css({
                        width: this.cssWidth + "px",
                        height: this.cssHeight + "px"
                    }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile), this.glwrap.setSize(e.width, e.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, this.canvas.addEventListener("webglcontextlost", function(e) {
                        e.preventDefault(), t.onContextLost(), console.log("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
                    }, !1), this.canvas.addEventListener("webglcontextrestored", function() {
                        t.glwrap.initState(), t.glwrap.setSize(t.glwrap.width, t.glwrap.height, !0), t.layer_tex = null, t.layout_tex = null, t.fx_tex[0] = null, t.fx_tex[1] = null, t.onContextRestored(), t.redraw = !0, console.log("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
                    }, !1);
                    var s, o, u, a, f, l, c, h, p, d;
                    for (s = 0, o = this.types_by_index.length; o > s; s++)
                        for (c = this.types_by_index[s], u = 0, a = c.effect_types.length; a > u; u++) h = c.effect_types[u], h.shaderindex = this.glwrap.getShaderIndex(h.id), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(h.shaderindex);
                    for (s = 0, o = this.layouts_by_index.length; o > s; s++) {
                        for (p = this.layouts_by_index[s], u = 0, a = p.effect_types.length; a > u; u++) h = p.effect_types[u], h.shaderindex = this.glwrap.getShaderIndex(h.id);
                        for (u = 0, a = p.layers.length; a > u; u++)
                            for (d = p.layers[u], f = 0, l = d.effect_types.length; l > f; f++) h = d.effect_types[f], h.shaderindex = this.glwrap.getShaderIndex(h.id), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(h.shaderindex)
                    }
                } else {
                    if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                        this.canvas = null, document.oncontextmenu = function() {
                            return !1
                        }, document.onselectstart = function() {
                            return !1
                        }, this.ctx = AppMobi.canvas.getContext("2d");
                        try {
                            this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                        } catch (i) {}
                        0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                    }
                    this.ctx || (this.isCocoonJs ? (n = {
                        antialias: !!this.linearSampling,
                        alpha: r
                    }, this.ctx = e.getContext("2d", n)) : (n = {
                        alpha: r
                    }, this.ctx = e.getContext("2d", n)), this.ctx.webkitImageSmoothingEnabled = this.linearSampling, this.ctx.mozImageSmoothingEnabled = this.linearSampling, this.ctx.msImageSmoothingEnabled = this.linearSampling, this.ctx.imageSmoothingEnabled = this.linearSampling), this.overlay_canvas = null, this.overlay_ctx = null
                }
                this.tickFunc = function() {
                    t.tick(!1)
                }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                    window.focus()
                }, !0), document.addEventListener("touchstart", function() {
                    window.focus()
                }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                    t.setSuspended(!1)
                }), jQuery(window).blur(function() {
                    t.setSuspended(!0)
                })));
                var v = function(e) {
                    cr.isCanvasInputEvent(e) && document.activeElement && document.activeElement.blur && document.activeElement.blur()
                };
                window.navigator.pointerEnabled ? document.addEventListener("pointerdown", v) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", v) : document.addEventListener("touchstart", v), 0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
            }
        }

        function t(e) {
            var t = e.target.result;
            t.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function n(e, n, r, i) {
            var s = indexedDB.open("_C2SaveStates");
            s.onupgradeneeded = t, s.onerror = i, s.onsuccess = function(t) {
                var s = t.target.result;
                s.onerror = i;
                var o = s.transaction(["saves"], "readwrite"),
                    u = o.objectStore("saves"),
                    a = u.put({
                        slot: e,
                        data: n
                    });
                a.onsuccess = r
            }
        }

        function r(e, n, r) {
            var i = indexedDB.open("_C2SaveStates");
            i.onupgradeneeded = t, i.onerror = r, i.onsuccess = function(t) {
                var i = t.target.result;
                i.onerror = r;
                var s = i.transaction(["saves"]),
                    o = s.objectStore("saves"),
                    u = o.get(e);
                u.onsuccess = function() {
                    n(u.result ? u.result.data : null)
                }
            }
        }

        function i() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function s(e) {
            var t, n = {};
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    if (e[t] instanceof cr.ObjectSet) continue;
                    if (e[t] && "undefined" != typeof e[t].c2userdata) continue;
                    n[t] = e[t]
                }
            return n
        }
        e.prototype.setSize = function(e, t, n) {
            var r = 0,
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = this.isiPhoneiOS6 && this.isSafari && !navigator.standalone && !this.isDomFree && !this.isPhoneGap;
            if (a && (t += 60), this.lastWindowWidth !== e || this.lastWindowHeight !== t || n) {
                this.lastWindowWidth = e, this.lastWindowHeight = t;
                var f, l, c = this.fullscreen_mode,
                    h = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isPhoneGap;
                if (h || 0 !== this.fullscreen_mode || n) {
                    h && this.fullscreen_scaling > 0 && (c = this.fullscreen_scaling);
                    var p = this.devicePixelRatio;
                    c >= 4 ? (f = this.original_width / this.original_height, l = e / t, l > f ? (s = t * f, 5 === c ? (u = s * p / this.original_width, u > 1 ? u = Math.floor(u) : 1 > u && (u = 1 / Math.ceil(1 / u)), s = this.original_width * u / p, o = this.original_height * u / p, r = (e - s) / 2, i = (t - o) / 2, e = s, t = o) : (r = (e - s) / 2, e = s)) : (o = e / f, 5 === c ? (u = o * p / this.original_height, u > 1 ? u = Math.floor(u) : 1 > u && (u = 1 / Math.ceil(1 / u)), s = this.original_width * u / p, o = this.original_height * u / p, r = (e - s) / 2, i = (t - o) / 2, e = s, t = o) : (i = (t - o) / 2, t = o)), h && !this.isNodeWebkit && (r = 0, i = 0)) : this.isNodeWebkit && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (r = Math.floor((e - this.original_width) / 2), i = Math.floor((t - this.original_height) / 2), e = this.original_width, t = this.original_height), 2 > c && (this.aspect_scale = p), this.isRetina && this.isiPad && p > 1 && (e >= 1024 && (e = 1023), t >= 1024 && (t = 1023)), this.cssWidth = Math.round(e), this.cssHeight = Math.round(t), this.width = Math.round(e * p), this.height = Math.round(t * p), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === c ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === c ? (f = this.original_width / this.original_height, l = this.lastWindowWidth / this.lastWindowHeight, f > l ? this.draw_width = this.draw_height * l : l > f && (this.draw_height = this.draw_width / l)) : 3 === c && (f = this.original_width / this.original_height, l = this.lastWindowWidth / this.lastWindowHeight, l > f ? this.draw_width = this.draw_height * l : f > l && (this.draw_height = this.draw_width / l))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(e) + "px",
                        height: Math.round(t) + "px",
                        "margin-left": Math.floor(r) + "px",
                        "margin-top": Math.floor(i) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(e) + "px",
                        height: Math.round(t) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(e * p), this.canvas.height = Math.round(t * p), this.isEjecta ? (this.canvas.style.left = Math.floor(r) + "px", this.canvas.style.top = Math.floor(i) + "px", this.canvas.style.width = Math.round(e) + "px", this.canvas.style.height = Math.round(t) + "px") : this.isRetina && !this.isDomFree && jQuery(this.canvas).css({
                        width: Math.round(e) + "px",
                        height: Math.round(t) + "px"
                    })), this.overlay_canvas && (this.overlay_canvas.width = Math.round(e), this.overlay_canvas.height = Math.round(t), jQuery(this.overlay_canvas).css({
                        width: Math.round(e) + "px",
                        height: Math.round(t) + "px"
                    })), this.glwrap && this.glwrap.setSize(Math.round(e * p), Math.round(t * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(e), this.ctx.height = Math.round(t)), this.ctx && (this.ctx.webkitImageSmoothingEnabled = this.linearSampling, this.ctx.mozImageSmoothingEnabled = this.linearSampling, this.ctx.msImageSmoothingEnabled = this.linearSampling, this.ctx.imageSmoothingEnabled = this.linearSampling), this.tryLockOrientation(), this.isDomFree || !a && !this.isiPhone || window.setTimeout(function() {
                        window.scrollTo(0, 1)
                    }, 100)
                }
            }
        }, e.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var e = "portrait";
                2 === this.orientations && (e = "landscape"), screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, e.prototype.onContextLost = function() {
            this.is_WebGL_context_lost = !0;
            var e, t, n;
            for (e = 0, t = this.types_by_index.length; t > e; e++) n = this.types_by_index[e], n.onLostWebGLContext && n.onLostWebGLContext()
        }, e.prototype.onContextRestored = function() {
            this.is_WebGL_context_lost = !1;
            var e, t, n;
            for (e = 0, t = this.types_by_index.length; t > e; e++) n = this.types_by_index[e], n.onRestoreWebGLContext && n.onRestoreWebGLContext()
        }, e.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isPhoneGap,
                    t = e ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                t.position = "absolute", jQuery(this.overlay_canvas).css(t)
            }
        };
        var o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        e.prototype.setSuspended = function(e) {
            var t, n;
            if (e && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && o && o(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), t = 0, n = this.suspend_events.length; n > t; t++) this.suspend_events[t](!0);
            else if (!e && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, t = 0, n = this.suspend_events.length; n > t; t++) this.suspend_events[t](!1);
                this.tick(!1)
            }
        }, e.prototype.addSuspendCallback = function(e) {
            this.suspend_events.push(e)
        }, e.prototype.load = function() {
            var e = cr.getProjectModel();
            this.name = e[0], this.first_layout = e[1], this.fullscreen_mode = e[12], this.fullscreen_mode_set = e[12], this.original_width = e[10], this.original_height = e[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (e[12] >= 4 || 0 === e[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = e[18], this.loaderstyle = e[19], 0 === this.loaderstyle && (this.loaderlogo = new Image, this.loaderlogo.src = "loading-logo.png"), this.next_uid = e[21], this.system = new cr.system_object(this);
            var t, n, r, i, s, o, u, a, f, l, c, h;
            for (t = 0, n = e[2].length; n > t; t++) u = e[2][t], cr.add_common_aces(u), c = new u[0](this), c.singleglobal = u[1], c.is_world = u[2], c.must_predraw = u[9], c.onCreate && c.onCreate(), cr.seal(c), this.plugins.push(c);
            for (e = cr.getProjectModel(), t = 0, n = e[3].length; n > t; t++) {
                for (u = e[3][t], h = u[1], c = null, r = 0, i = this.plugins.length; i > r; r++)
                    if (this.plugins[r] instanceof h) {
                        c = this.plugins[r];
                        break
                    }
                var p = new c.Type(c);
                for (p.name = u[0], p.is_family = u[2], p.instvar_sids = u[3].slice(0), p.vars_count = u[3].length, p.behs_count = u[4], p.fx_count = u[5], p.sid = u[11], p.is_family ? (p.members = [], p.family_index = this.family_count++, p.families = null) : (p.members = null, p.family_index = -1, p.families = []), p.family_var_map = null, p.family_beh_map = null, p.family_fx_map = null, p.is_contained = !1, p.container = null, u[6] ? (p.texture_file = u[6][0], p.texture_filesize = u[6][1], p.texture_pixelformat = u[6][2]) : (p.texture_file = null, p.texture_filesize = 0, p.texture_pixelformat = 0), p.animations = u[7] ? u[7] : null, p.index = t, p.instances = [], p.deadCache = [], p.solstack = [new cr.selection(p)], p.cur_sol = 0, p.default_instance = null, p.default_layerindex = 0, p.stale_iids = !0, p.updateIIDs = cr.type_updateIIDs, p.getFirstPicked = cr.type_getFirstPicked, p.getPairedInstance = cr.type_getPairedInstance, p.getCurrentSol = cr.type_getCurrentSol, p.pushCleanSol = cr.type_pushCleanSol, p.pushCopySol = cr.type_pushCopySol, p.popSol = cr.type_popSol, p.getBehaviorByName = cr.type_getBehaviorByName, p.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, p.getEffectIndexByName = cr.type_getEffectIndexByName, p.applySolToContainer = cr.type_applySolToContainer, p.getInstanceByIID = cr.type_getInstanceByIID, p.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), p.any_cell_changed = !0, p.any_instance_parallaxed = !1, p.extra = {}, p.toString = cr.type_toString, p.behaviors = [], r = 0, i = u[8].length; i > r; r++) {
                    a = u[8][r];
                    var d = a[1],
                        v = null;
                    for (s = 0, o = this.behaviors.length; o > s; s++)
                        if (this.behaviors[s] instanceof d) {
                            v = this.behaviors[s];
                            break
                        }
                    v || (v = new d(this), v.my_types = [], v.my_instances = new cr.ObjectSet, v.onCreate && v.onCreate(), cr.seal(v), this.behaviors.push(v), cr.behaviors.solid && v instanceof cr.behaviors.solid && (this.solidBehavior = v), cr.behaviors.jumpthru && v instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = v), cr.behaviors.shadowcaster && v instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = v)), -1 === v.my_types.indexOf(p) && v.my_types.push(p);
                    var m = new v.Type(v, p);
                    m.name = a[0], m.sid = a[2], m.onCreate(), cr.seal(m), p.behaviors.push(m)
                }
                for (p.global = u[9], p.isOnLoaderLayout = u[10], p.effect_types = [], r = 0, i = u[12].length; i > r; r++) p.effect_types.push({
                    id: u[12][r][0],
                    name: u[12][r][1],
                    shaderindex: -1,
                    active: !0,
                    index: r
                });
                if (p.tile_poly_data = u[13], (!this.uses_loader_layout || p.is_family || p.isOnLoaderLayout || !c.is_world) && (p.onCreate(), cr.seal(p)), p.name && (this.types[p.name] = p), this.types_by_index.push(p), c.singleglobal) {
                    var g = new c.Instance(p);
                    g.uid = this.next_uid++, g.puid = this.next_puid++, g.iid = 0, g.get_iid = cr.inst_get_iid, g.toString = cr.inst_toString, g.properties = u[14], g.onCreate(), cr.seal(g), p.instances.push(g), this.objectsByUid[g.uid.toString()] = g
                }
            }
            for (t = 0, n = e[4].length; n > t; t++) {
                var y, b = e[4][t],
                    w = this.types_by_index[b[0]];
                for (r = 1, i = b.length; i > r; r++) y = this.types_by_index[b[r]], y.families.push(w), w.members.push(y)
            }
            for (t = 0, n = e[26].length; n > t; t++) {
                var E = e[26][t],
                    S = [];
                for (r = 0, i = E.length; i > r; r++) S.push(this.types_by_index[E[r]]);
                for (r = 0, i = S.length; i > r; r++) S[r].is_contained = !0, S[r].container = S
            }
            if (this.family_count > 0)
                for (t = 0, n = this.types_by_index.length; n > t; t++)
                    if (f = this.types_by_index[t], !f.is_family && f.families.length) {
                        f.family_var_map = new Array(this.family_count), f.family_beh_map = new Array(this.family_count), f.family_fx_map = new Array(this.family_count);
                        var x = [],
                            T = 0,
                            N = 0,
                            C = 0;
                        for (r = 0, i = f.families.length; i > r; r++)
                            for (l = f.families[r], f.family_var_map[l.family_index] = T, T += l.vars_count, f.family_beh_map[l.family_index] = N, N += l.behs_count, f.family_fx_map[l.family_index] = C, C += l.fx_count, s = 0, o = l.effect_types.length; o > s; s++) x.push(cr.shallowCopy({}, l.effect_types[s]));
                        for (f.effect_types = x.concat(f.effect_types), r = 0, i = f.effect_types.length; i > r; r++) f.effect_types[r].index = r
                    }
            for (t = 0, n = e[5].length; n > t; t++) {
                u = e[5][t];
                var k = new cr.layout(this, u);
                cr.seal(k), this.layouts[k.name] = k, this.layouts_by_index.push(k)
            }
            for (t = 0, n = e[6].length; n > t; t++) {
                u = e[6][t];
                var L = new cr.eventsheet(this, u);
                cr.seal(L), this.eventsheets[L.name] = L, this.eventsheets_by_index.push(L)
            }
            for (t = 0, n = this.eventsheets_by_index.length; n > t; t++) this.eventsheets_by_index[t].postInit();
            for (t = 0, n = this.eventsheets_by_index.length; n > t; t++) this.eventsheets_by_index[t].updateDeepIncludes();
            for (t = 0, n = this.triggers_to_postinit.length; n > t; t++) this.triggers_to_postinit[t].postInit();
            this.triggers_to_postinit.length = 0, this.audio_to_preload = e[7], this.files_subfolder = e[8], this.pixel_rounding = e[9], this.aspect_scale = 1, this.enableWebGL = e[13], this.linearSampling = e[14], this.alphaBackground = e[15], this.versionstr = e[16], this.useHighDpi = e[17], this.orientations = e[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = e[22], this.wantFullscreenScalingQuality = e[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = e[24], this.preloadSounds = e[25], this.start_time = Date.now()
        };
        var u = !1;
        e.prototype.waitForImageLoad = function(e) {
            e.onerror = function(t) {
                e.c2error = !0, u = !0, console && console.error && console.error("Error loading image '" + e.src + "': ", t)
            }, this.wait_for_textures.push(e)
        }, e.prototype.findWaitingTexture = function(e) {
            var t, n;
            for (t = 0, n = this.wait_for_textures.length; n > t; t++)
                if (this.wait_for_textures[t].cr_src === e) return this.wait_for_textures[t];
            return null
        };
        var a = 0,
            f = !1;
        e.prototype.getready = function() {
            this.audioInstance && (a = this.audioInstance.setPreloadList(this.audio_to_preload))
        }, e.prototype.areAllTexturesAndSoundsLoaded = function() {
            var e, t, n, r = a,
                i = 0,
                s = 0,
                o = !0;
            for (e = 0, t = this.wait_for_textures.length; t > e; e++) {
                n = this.wait_for_textures[e];
                var u = n.cr_filesize;
                (!u || 0 >= u) && (u = 5e4), r += u, !n.complete && !n.loaded || n.c2error ? o = !1 : i += u
            }
            return o && this.preloadSounds && this.audioInstance && (f || (this.audioInstance.startPreloads(), f = !0), s = this.audioInstance.getPreloadedSize(), i += s, a > s && (o = !1)), this.progress = 0 == r ? 0 : i / r, o
        }, e.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var e = this.ctx || this.overlay_ctx;
                if (this.overlay_canvas && this.positionOverlayCanvas(), this.progress = 0, this.last_progress = -1, this.areAllTexturesAndSoundsLoaded()) this.go_loading_finished();
                else {
                    var t = Date.now() - this.start_time;
                    if (e) {
                        var n = this.width,
                            r = this.height,
                            i = this.devicePixelRatio;
                        if (this.overlay_canvas && (n = this.cssWidth, r = this.cssHeight, i = 1), 3 !== this.loaderstyle && (this.isCocoonJs || t >= 500 && this.last_progress != this.progress)) {
                            e.clearRect(0, 0, n, r);
                            var s, o = n / 2,
                                a = r / 2,
                                f = 0 === this.loaderstyle && this.loaderlogo.complete,
                                l = 40 * i,
                                c = 0,
                                h = 80 * i;
                            if (f && (h = this.loaderlogo.width * i, s = this.loaderlogo.height * i, l = h / 2, c = s / 2, e.drawImage(this.loaderlogo, cr.floor(o - l), cr.floor(a - c), h, s)), this.loaderstyle <= 1) a += c + (f ? 12 * i : 0), o -= l, o = cr.floor(o) + .5, a = cr.floor(a) + .5, e.fillStyle = u ? "red" : "DodgerBlue", e.fillRect(o, a, Math.floor(h * this.progress), 6 * i), e.strokeStyle = "black", e.strokeRect(o, a, h, 6 * i), e.strokeStyle = "white", e.strokeRect(o - 1 * i, a - 1 * i, h + 2 * i, 8 * i);
                            else if (2 === this.loaderstyle) {
                                e.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", e.fillStyle = u ? "#f00" : "#999", e.textBaseLine = "middle";
                                var p = Math.round(100 * this.progress) + "%",
                                    d = e.measureText ? e.measureText(p) : null,
                                    v = d ? d.width : 0;
                                e.fillText(p, o - v / 2, a)
                            }
                        }
                        this.last_progress = this.progress
                    }
                    setTimeout(function(e) {
                        return function() {
                            e.go()
                        }
                    }(this), this.isCocoonJs ? 10 : 100)
                }
            }
        }, e.prototype.go_loading_finished = function() {
            this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now();
            var e, t, n;
            if (this.uses_loader_layout)
                for (e = 0, t = this.types_by_index.length; t > e; e++) n = this.types_by_index[e], n.is_family || n.isOnLoaderLayout || !n.plugin.is_world || (n.onCreate(), cr.seal(n));
            else this.isloading = !1;
            for (e = 0, t = this.layouts_by_index.length; t > e; e++) this.layouts_by_index[e].createGlobalNonWorlds();
            if (this.fullscreen_mode >= 2) {
                var r = this.original_width / this.original_height,
                    i = this.width / this.height;
                this.aspect_scale = 2 !== this.fullscreen_mode && i > r || 2 === this.fullscreen_mode && r > i ? this.height / this.original_height : this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null)), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), e = 0, t = this.types_by_index.length; t > e; e++) n = this.types_by_index[e], n.onAppBegin && n.onAppBegin();
            this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        };
        var l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        e.prototype.tick = function(e) {
            if (this.running_layout) {
                var t = cr.performance_now();
                if (this.halfFramerateMode && this.ranLastRaf && t - this.lastRafTime < 29) return this.ranLastRaf = !1, this.lastRafTime = t, void(l ? this.raf_id = l(this.tickFunc, this.canvas) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                this.ranLastRaf = !0, this.lastRafTime = t;
                var n = this.fullscreen_mode,
                    r = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isPhoneGap;
                if ((r || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (n = this.fullscreen_scaling), n > 0 && (!this.isiOS || window.self !== window.top)) {
                    var i = window.innerWidth,
                        s = window.innerHeight;
                    (this.lastWindowWidth !== i || this.lastWindowHeight !== s) && this.setSize(i, s)
                }
                if (this.isDomFree || (r ? (this.firstInFullscreen || (this.fullscreenOldMarginCss = jQuery(this.canvas).css("margin") || "0", this.firstInFullscreen = !0), this.isChrome || this.isNodeWebkit || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.firstInFullscreen ? (this.isChrome || this.isNodeWebkit || jQuery(this.canvas).css("margin", this.fullscreenOldMarginCss), this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                    var o = this.areAllTexturesAndSoundsLoaded();
                    this.loadingprogress = this.progress, o && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null))
                }
                this.logic(), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || e || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - t, this.isSuspended || e || (l ? this.raf_id = l(this.tickFunc, this.canvas) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16))
            }
        }, e.prototype.logic = function() {
            var e, t, n, r, i, s, o, u, a, f = cr.performance_now();
            if (f - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0), this.measuring_dt) {
                if (0 !== this.last_tick_time) {
                    var l = f - this.last_tick_time;
                    0 !== l || this.isDebug ? (this.dt1 = l / 1e3, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > .1 && (this.dt1 = .1)) : (this.zeroDtCount++, this.zeroDtCout >= 10 && (this.measuring_dt = !1), this.dt1 = 1 / 60)
                }
                this.last_tick_time = f
            }
            this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt);
            var c = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isPhoneGap;
            if (this.fullscreen_mode >= 2 || c && this.fullscreen_scaling > 0) {
                var h = this.original_width / this.original_height,
                    p = this.width / this.height,
                    d = this.fullscreen_mode;
                c && this.fullscreen_scaling > 0 && (d = this.fullscreen_scaling), this.aspect_scale = 2 !== d && p > h || 2 === d && h > p ? this.height / this.original_height : this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var v = this.objects_to_pretick.valuesRef();
            for (e = 0, t = v.length; t > e; e++) v[e].pretick();
            for (e = 0, t = this.types_by_index.length; t > e; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; r > n; n++)
                        for (u = o.instances[n], i = 0, s = u.behavior_insts.length; s > i; i++) u.behavior_insts[i].tick();
            for (e = 0, t = this.types_by_index.length; t > e; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; r > n; n++)
                        for (u = o.instances[n], i = 0, s = u.behavior_insts.length; s > i; i++) a = u.behavior_insts[i], a.posttick && a.posttick();
            for (v = this.objects_to_tick.valuesRef(), e = 0, t = v.length; t > e; e++) v[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, t = this.eventsheets_by_index.length; t > e; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), this.registered_collisions.length = 0, this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, t = this.types_by_index.length; t > e; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; r > n; n++) {
                        var u = o.instances[n];
                        for (i = 0, s = u.behavior_insts.length; s > i; i++) a = u.behavior_insts[i], a.tick2 && a.tick2()
                    }
                for (v = this.objects_to_tick2.valuesRef(), e = 0, t = v.length; t > e; e++) v[e].tick2();
            this.isInOnDestroy--
        }, e.prototype.doChangeLayout = function(e) {
            var t = this.running_layout;
            this.running_layout.stopRunning();
            var n, r, i, s, o, u, a, f, l;
            if (this.glwrap)
                for (n = 0, r = this.types_by_index.length; r > n; n++) a = this.types_by_index[n], a.is_family || !a.unloadTextures || a.global && 0 !== a.instances.length || -1 !== e.initial_types.indexOf(a) || a.unloadTextures();
            for (t == e && (this.system.waits.length = 0), e.startRunning(), n = 0, r = this.types_by_index.length; r > n; n++)
                if (a = this.types_by_index[n], a.global || a.plugin.singleglobal)
                    for (i = 0, s = a.instances.length; s > i; i++)
                        if (f = a.instances[i], f.onLayoutChange && f.onLayoutChange(), f.behavior_insts)
                            for (o = 0, u = f.behavior_insts.length; u > o; o++) l = f.behavior_insts[o], l.onLayoutChange && l.onLayoutChange();
            this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, e.prototype.pretickMe = function(e) {
            this.objects_to_pretick.add(e)
        }, e.prototype.unpretickMe = function(e) {
            this.objects_to_pretick.remove(e)
        }, e.prototype.tickMe = function(e) {
            this.objects_to_tick.add(e)
        }, e.prototype.untickMe = function(e) {
            this.objects_to_tick.remove(e)
        }, e.prototype.tick2Me = function(e) {
            this.objects_to_tick2.add(e)
        }, e.prototype.untick2Me = function(e) {
            this.objects_to_tick2.remove(e)
        }, e.prototype.getDt = function(e) {
            return e && -1 !== e.my_timescale ? this.dt1 * e.my_timescale : this.dt
        }, e.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, e.prototype.drawGL = function() {
            this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, e.prototype.addDestroyCallback = function(e) {
            e && this.destroycallbacks.push(e)
        }, e.prototype.removeDestroyCallback = function(e) {
            cr.arrayFindRemove(this.destroycallbacks, e)
        }, e.prototype.getObjectByUID = function(e) {
            var t = e.toString();
            return this.objectsByUid.hasOwnProperty(t) ? this.objectsByUid[t] : null
        }, e.prototype.DestroyInstance = function(e) {
            var t, n;
            if (!this.deathRow.contains(e)) {
                if (this.deathRow.add(e), e.is_contained)
                    for (t = 0, n = e.siblings.length; n > t; t++) this.DestroyInstance(e.siblings[t]);
                this.isInClearDeathRow && this.deathRow.values_cache.push(e), this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(e.type.plugin).cnds.OnDestroyed, e), this.isInOnDestroy--
            }
        }, e.prototype.ClearDeathRow = function() {
            var e, t, n, r, i, s, o, u, a, f, l, c;
            for (this.isInClearDeathRow = !0, i = 0, u = this.createRow.length; u > i; i++)
                for (e = this.createRow[i], t = e.type, t.instances.push(e), s = 0, a = t.families.length; a > s; s++) t.families[s].instances.push(e), t.families[s].stale_iids = !0;
            this.createRow.length = 0;
            var h = this.deathRow.valuesRef();
            for (i = 0; i < h.length; i++) {
                for (e = h[i], t = e.type, n = t.instances, s = 0, a = this.destroycallbacks.length; a > s; s++) this.destroycallbacks[s](e);
                for (cr.arrayFindRemove(n, e), 0 === n.length && (t.any_instance_parallaxed = !1), e.collcells && t.collision_grid.update(e, e.collcells, null), e.layer && (cr.arrayRemove(e.layer.instances, e.get_zindex()), e.layer.zindices_stale = !0), s = 0, a = t.families.length; a > s; s++) cr.arrayFindRemove(t.families[s].instances, e), t.families[s].stale_iids = !0;
                if (e.behavior_insts)
                    for (s = 0, a = e.behavior_insts.length; a > s; s++) r = e.behavior_insts[s], r.onDestroy && r.onDestroy(), r.behavior.my_instances.remove(e);
                for (this.objects_to_pretick.remove(e), this.objects_to_tick.remove(e), this.objects_to_tick2.remove(e), s = 0, a = this.system.waits.length; a > s; s++)
                    if (l = this.system.waits[s], l.sols.hasOwnProperty(t.index) && cr.arrayFindRemove(l.sols[t.index].insts, e), !t.is_family)
                        for (o = 0, f = t.families.length; f > o; o++) c = t.families[o], l.sols.hasOwnProperty(c.index) && cr.arrayFindRemove(l.sols[c.index].insts, e);
                e.onDestroy && e.onDestroy(), this.objectsByUid.hasOwnProperty(e.uid.toString()) && delete this.objectsByUid[e.uid.toString()], this.objectcount--, t.deadCache.length < 64 && t.deadCache.push(e), t.stale_iids = !0
            }
            this.deathRow.isEmpty() || (this.redraw = !0), this.deathRow.clear(), this.isInClearDeathRow = !1
        }, e.prototype.createInstance = function(e, t, n, r) {
            if (e.is_family) {
                var i = cr.floor(Math.random() * e.members.length);
                return this.createInstance(e.members[i], t, n, r)
            }
            return e.default_instance ? this.createInstanceFromInit(e.default_instance, t, !1, n, r, !1) : null
        };
        var c = [];
        e.prototype.createInstanceFromInit = function(e, t, n, r, i, s) {
            var o, u, a, f, l;
            if (!e) return null;
            var h = this.types_by_index[e[1]],
                p = h.plugin.is_world;
            if (this.isloading && p && !h.isOnLoaderLayout) return null;
            if (p && !this.glwrap && 11 === e[0][11]) return null;
            var d = t;
            p || (t = null);
            var v;
            for (h.deadCache.length ? (v = h.deadCache.pop(), v.recycled = !0, h.plugin.Instance.call(v, h)) : (v = new h.plugin.Instance(h), v.recycled = !1), v.uid = n && !s ? e[2] : this.next_uid++, this.objectsByUid[v.uid.toString()] = v, v.puid = this.next_puid++, v.iid = h.instances.length, o = 0, u = this.createRow.length; u > o; ++o) this.createRow[o].type === h && v.iid++;
            v.get_iid = cr.inst_get_iid;
            var m = e[3];
            if (v.recycled) cr.wipe(v.extra);
            else {
                if (v.extra = {}, "undefined" != typeof cr_is_preview)
                    for (v.instance_var_names = [], v.instance_var_names.length = m.length, o = 0, u = m.length; u > o; o++) v.instance_var_names[o] = m[o][1];
                v.instance_vars = [], v.instance_vars.length = m.length
            }
            for (o = 0, u = m.length; u > o; o++) v.instance_vars[o] = m[o][0];
            if (p) {
                var g = e[0];
                if (v.x = cr.is_undefined(r) ? g[0] : r, v.y = cr.is_undefined(i) ? g[1] : i, v.z = g[2], v.width = g[3], v.height = g[4], v.depth = g[5], v.angle = g[6], v.opacity = g[7], v.hotspotX = g[8], v.hotspotY = g[9], v.blend_mode = g[10], l = g[11], !this.glwrap && h.effect_types.length && (v.blend_mode = l), v.compositeOp = cr.effectToCompositeOp(v.blend_mode), this.gl && cr.setGLBlend(v, v.blend_mode, this.gl), v.recycled) {
                    for (o = 0, u = g[12].length; u > o; o++)
                        for (a = 0, f = g[12][o].length; f > a; a++) v.effect_params[o][a] = g[12][o][a];
                    v.bbox.set(0, 0, 0, 0), v.collcells.set(0, 0, -1, -1), v.bquad.set_from_rect(v.bbox), v.bbox_changed_callbacks.length = 0
                } else {
                    for (v.effect_params = g[12].slice(0), o = 0, u = v.effect_params.length; u > o; o++) v.effect_params[o] = g[12][o].slice(0);
                    v.active_effect_types = [], v.active_effect_flags = [], v.active_effect_flags.length = h.effect_types.length, v.bbox = new cr.rect(0, 0, 0, 0), v.collcells = new cr.rect(0, 0, -1, -1), v.bquad = new cr.quad, v.bbox_changed_callbacks = [], v.set_bbox_changed = cr.set_bbox_changed, v.add_bbox_changed_callback = cr.add_bbox_changed_callback, v.contains_pt = cr.inst_contains_pt, v.update_bbox = cr.update_bbox, v.update_collision_cell = cr.update_collision_cell, v.get_zindex = cr.inst_get_zindex
                }
                for (v.tilemap_exists = !1, v.tilemap_width = 0, v.tilemap_height = 0, v.tilemap_data = null, 14 === g.length && (v.tilemap_exists = !0, v.tilemap_width = g[13][0], v.tilemap_height = g[13][1], v.tilemap_data = g[13][2]), o = 0, u = h.effect_types.length; u > o; o++) v.active_effect_flags[o] = !0;
                v.updateActiveEffects = cr.inst_updateActiveEffects, v.updateActiveEffects(), v.uses_shaders = !!v.active_effect_types.length, v.bbox_changed = !0, v.cell_changed = !0, h.any_cell_changed = !0, v.visible = !0, v.my_timescale = -1, v.layer = t, v.zindex = t.instances.length, "undefined" == typeof v.collision_poly && (v.collision_poly = null), v.collisionsEnabled = !0, this.redraw = !0
            }
            v.toString = cr.inst_toString;
            var y, b;
            for (c.length = 0, o = 0, u = h.families.length; u > o; o++) c.push.apply(c, h.families[o].behaviors);
            if (c.push.apply(c, h.behaviors), v.recycled)
                for (o = 0, u = c.length; u > o; o++) {
                    var w = c[o];
                    for (b = v.behavior_insts[o], b.recycled = !0, w.behavior.Instance.call(b, w, v), y = e[4][o], a = 0, f = y.length; f > a; a++) b.properties[a] = y[a];
                    b.onCreate(), w.behavior.my_instances.add(v)
                } else
                    for (v.behavior_insts = [], o = 0, u = c.length; u > o; o++) {
                        var w = c[o],
                            b = new w.behavior.Instance(w, v);
                        b.recycled = !1, b.properties = e[4][o].slice(0), b.onCreate(), cr.seal(b), v.behavior_insts.push(b), w.behavior.my_instances.add(v)
                    }
            if (y = e[5], v.recycled)
                for (o = 0, u = y.length; u > o; o++) v.properties[o] = y[o];
            else v.properties = y.slice(0); if (this.createRow.push(v), t && (t.instances.push(v), (1 !== t.parallaxX || 1 !== t.parallaxY) && (h.any_instance_parallaxed = !0)), this.objectcount++, h.is_contained) {
                if (v.is_contained = !0, v.recycled ? v.siblings.length = 0 : v.siblings = [], !n && !s) {
                    for (o = 0, u = h.container.length; u > o; o++)
                        if (h.container[o] !== h) {
                            if (!h.container[o].default_instance) return null;
                            v.siblings.push(this.createInstanceFromInit(h.container[o].default_instance, d, !1, p ? v.x : r, p ? v.y : i, !0))
                        }
                    for (o = 0, u = v.siblings.length; u > o; o++)
                        for (v.siblings[o].siblings.push(v), a = 0; u > a; a++) o !== a && v.siblings[o].siblings.push(v.siblings[a])
                }
            } else v.is_contained = !1, v.siblings = null;
            for (v.onCreate(), v.recycled || cr.seal(v), o = 0, u = v.behavior_insts.length; u > o; o++) v.behavior_insts[o].postCreate && v.behavior_insts[o].postCreate();
            return v
        }, e.prototype.getLayerByName = function(e) {
            var t, n;
            for (t = 0, n = this.running_layout.layers.length; n > t; t++) {
                var r = this.running_layout.layers[t];
                if (cr.equals_nocase(r.name, e)) return r
            }
            return null
        }, e.prototype.getLayerByNumber = function(e) {
            return e = cr.floor(e), 0 > e && (e = 0), e >= this.running_layout.layers.length && (e = this.running_layout.layers.length - 1), this.running_layout.layers[e]
        }, e.prototype.getLayer = function(e) {
            return cr.is_number(e) ? this.getLayerByNumber(e) : this.getLayerByName(e.toString())
        }, e.prototype.clearSol = function(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) e[t].getCurrentSol().select_all = !0
        }, e.prototype.pushCleanSol = function(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) e[t].pushCleanSol()
        }, e.prototype.pushCopySol = function(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) e[t].pushCopySol()
        }, e.prototype.popSol = function(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) e[t].popSol()
        }, e.prototype.updateAllCells = function(e) {
            if (e.any_cell_changed) {
                var t, n, r = e.instances;
                for (t = 0, n = r.length; n > t; ++t) r[t].update_collision_cell();
                var i = this.createRow;
                for (t = 0, n = i.length; n > t; ++t) i[t].type === e && i[t].update_collision_cell();
                e.any_cell_changed = !1
            }
        }, e.prototype.getCollisionCandidates = function(e, t, n, r) {
            var i, s, o, u = e ? 1 !== e.parallaxX || 1 !== e.parallaxY : !1;
            if (t.is_family)
                for (i = 0, s = t.members.length; s > i; ++i) o = t.members[i], u || o.any_instance_parallaxed ? cr.appendArray(r, o.instances) : (this.updateAllCells(o), o.collision_grid.queryRange(n, r));
            else u || t.any_instance_parallaxed ? cr.appendArray(r, t.instances) : (this.updateAllCells(t), t.collision_grid.queryRange(n, r))
        }, e.prototype.getTypesCollisionCandidates = function(e, t, n, r) {
            var i, s;
            for (i = 0, s = t.length; s > i; ++i) this.getCollisionCandidates(e, t[i], n, r)
        }, e.prototype.getSolidCollisionCandidates = function(e, t, n) {
            var r = this.getSolidBehavior();
            return r ? void this.getTypesCollisionCandidates(e, r.my_types, t, n) : null
        }, e.prototype.getJumpthruCollisionCandidates = function(e, t, n) {
            var r = this.getJumpthruBehavior();
            return r ? void this.getTypesCollisionCandidates(e, r.my_types, t, n) : null
        }, e.prototype.testAndSelectCanvasPointOverlap = function(e, t, n, r) {
            var i, s, o, u, a, f, l = e.getCurrentSol();
            if (l.select_all) {
                for (r || (l.select_all = !1, l.instances.length = 0), i = 0, u = e.instances.length; u > i; i++)
                    if (o = e.instances[i], o.update_bbox(), a = o.layer.canvasToLayer(t, n, !0), f = o.layer.canvasToLayer(t, n, !1), o.contains_pt(a, f)) {
                        if (r) return !1;
                        l.instances.push(o)
                    }
            } else {
                for (s = 0, i = 0, u = l.instances.length; u > i; i++)
                    if (o = l.instances[i], o.update_bbox(), a = o.layer.canvasToLayer(t, n, !0), f = o.layer.canvasToLayer(t, n, !1), o.contains_pt(a, f)) {
                        if (r) return !1;
                        l.instances[s] = l.instances[i], s++
                    }
                r || (l.instances.length = s)
            }
            return e.applySolToContainer(), r ? !0 : l.hasObjects()
        }, e.prototype.testOverlap = function(e, t) {
            if (!(e && t && e !== t && e.collisionsEnabled && t.collisionsEnabled)) return !1;
            e.update_bbox(), t.update_bbox();
            var n, r, i, s, o, u, a, f, l, c, h = e.layer,
                p = t.layer,
                d = h !== p && (h.parallaxX !== p.parallaxX || p.parallaxY !== p.parallaxY || h.scale !== p.scale || h.angle !== p.angle || h.zoomRate !== p.zoomRate);
            if (d) {
                for (a = e.collision_poly && !e.collision_poly.is_empty(), f = t.collision_poly && !t.collision_poly.is_empty(), a ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly.set_from_poly(e.collision_poly)) : this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), l = this.temp_poly, f ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly2.set_from_poly(t.collision_poly)) : this.temp_poly2.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), c = this.temp_poly2, n = 0, r = l.pts_count; r > n; n++) i = 2 * n, s = i + 1, o = l.pts_cache[i], u = l.pts_cache[s], l.pts_cache[i] = h.layerToCanvas(o + e.x, u + e.y, !0), l.pts_cache[s] = h.layerToCanvas(o + e.x, u + e.y, !1);
                for (l.update_bbox(), n = 0, r = c.pts_count; r > n; n++) i = 2 * n, s = i + 1, o = c.pts_cache[i], u = c.pts_cache[s], c.pts_cache[i] = p.layerToCanvas(o + t.x, u + t.y, !0), c.pts_cache[s] = p.layerToCanvas(o + t.x, u + t.y, !1);
                return c.update_bbox(), l.intersects_poly(c, 0, 0)
            }
            return e.bbox.intersects_rect(t.bbox) && e.bquad.intersects_quad(t.bquad) ? e.tilemap_exists && t.tilemap_exists ? !1 : e.tilemap_exists ? this.testTilemapOverlap(e, t) : t.tilemap_exists ? this.testTilemapOverlap(t, e) : (a = e.collision_poly && !e.collision_poly.is_empty(), f = t.collision_poly && !t.collision_poly.is_empty(), a || f ? (a ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), l = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), l = this.temp_poly), f ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), c = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), c = this.temp_poly), l.intersects_poly(c, t.x - e.x, t.y - e.y)) : !0) : !1
        };
        var h = new cr.quad,
            p = new cr.rect(0, 0, 0, 0),
            d = [];
        e.prototype.testTilemapOverlap = function(e, t) {
            var n, r, i, s, o = t.bbox,
                u = e.x,
                a = e.y;
            e.getCollisionRectCandidates(o, d);
            var f = d,
                l = t.collision_poly && !t.collision_poly.is_empty();
            for (n = 0, r = f.length; r > n; ++n)
                if (i = f[n], s = i.rc, o.intersects_rect_off(s, u, a) && (h.set_from_rect(s), h.offset(u, a), h.intersects_quad(t.bquad)))
                    if (l) {
                        if (t.collision_poly.cache_poly(t.width, t.height, t.angle), i.poly) {
                            if (i.poly.intersects_poly(t.collision_poly, t.x - (u + s.left), t.y - (a + s.top))) return d.length = 0, !0
                        } else if (this.temp_poly.set_from_quad(h, 0, 0, s.right - s.left, s.bottom - s.top), this.temp_poly.intersects_poly(t.collision_poly, t.x, t.y)) return d.length = 0, !0
                    } else {
                        if (!i.poly) return d.length = 0, !0;
                        if (this.temp_poly.set_from_quad(t.bquad, 0, 0, t.width, t.height), i.poly.intersects_poly(this.temp_poly, -(u + s.left), -(a + s.top))) return d.length = 0, !0
                    }
            return d.length = 0, !1
        }, e.prototype.testRectOverlap = function(e, t) {
            if (!t || !t.collisionsEnabled) return !1;
            t.update_bbox(); {
                var n;
                t.layer
            }
            if (!t.bbox.intersects_rect(e)) return !1;
            if (t.tilemap_exists) {
                t.getCollisionRectCandidates(e, d);
                var r, i, s, o, u = d,
                    a = t.x,
                    f = t.y;
                for (r = 0, i = u.length; i > r; ++r)
                    if (s = u[r], o = s.rc, e.intersects_rect_off(o, a, f)) {
                        if (!s.poly) return d.length = 0, !0;
                        if (this.temp_poly.set_from_rect(e, 0, 0), s.poly.intersects_poly(this.temp_poly, -(a + o.left), -(f + o.top))) return d.length = 0, !0
                    }
                return d.length = 0, !1
            }
            return h.set_from_rect(e), t.bquad.intersects_quad(h) ? (n = t.collision_poly && !t.collision_poly.is_empty()) ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), h.offset(-e.left, -e.top), this.temp_poly.set_from_quad(h, 0, 0, 1, 1), t.collision_poly.intersects_poly(this.temp_poly, e.left - t.x, e.top - t.y)) : !0 : !1
        }, e.prototype.testSegmentOverlap = function(e, t, n, r, i) {
            if (!i || !i.collisionsEnabled) return !1;
            i.update_bbox(); {
                var s;
                i.layer
            }
            if (p.set(cr.min(e, n), cr.min(t, r), cr.max(e, n), cr.max(t, r)), !i.bbox.intersects_rect(p)) return !1;
            if (i.tilemap_exists) {
                i.getCollisionRectCandidates(p, d);
                var o, u, a, f, l = d,
                    c = i.x,
                    v = i.y;
                for (o = 0, u = l.length; u > o; ++o)
                    if (a = l[o], f = a.rc, p.intersects_rect_off(f, c, v) && (h.set_from_rect(f), h.offset(c, v), h.intersects_segment(e, t, n, r))) {
                        if (!a.poly) return d.length = 0, !0;
                        if (a.poly.intersects_segment(c + f.left, v + f.top, e, t, n, r)) return d.length = 0, !0
                    }
                return d.length = 0, !1
            }
            return i.bquad.intersects_segment(e, t, n, r) ? (s = i.collision_poly && !i.collision_poly.is_empty()) ? (i.collision_poly.cache_poly(i.width, i.height, i.angle), i.collision_poly.intersects_segment(i.x, i.y, e, t, n, r)) : !0 : !1
        }, e.prototype.typeHasBehavior = function(e, t) {
            if (!t) return !1;
            var n, r, i, s, o;
            for (n = 0, r = e.behaviors.length; r > n; n++)
                if (e.behaviors[n].behavior instanceof t) return !0;
            if (!e.is_family)
                for (n = 0, r = e.families.length; r > n; n++)
                    for (o = e.families[n], i = 0, s = o.behaviors.length; s > i; i++)
                        if (o.behaviors[i].behavior instanceof t) return !0;
            return !1
        }, e.prototype.typeHasNoSaveBehavior = function(e) {
            return this.typeHasBehavior(e, cr.behaviors.NoSave)
        }, e.prototype.typeHasPersistBehavior = function(e) {
            return this.typeHasBehavior(e, cr.behaviors.Persist)
        }, e.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, e.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var v = [];
        e.prototype.testOverlapSolid = function(e) {
            var t, n, r;
            for (e.update_bbox(), this.getSolidCollisionCandidates(e.layer, e.bbox, v), t = 0, n = v.length; n > t; ++t)
                if (r = v[t], r.extra.solidEnabled && this.testOverlap(e, r)) return v.length = 0, r;
            return v.length = 0, null
        }, e.prototype.testRectOverlapSolid = function(e) {
            var t, n, r;
            for (this.getSolidCollisionCandidates(null, e, v), t = 0, n = v.length; n > t; ++t)
                if (r = v[t], r.extra.solidEnabled && this.testRectOverlap(e, r)) return v.length = 0, r;
            return v.length = 0, null
        };
        var m = [];
        e.prototype.testOverlapJumpThru = function(e, t) {
            var n = null;
            t && (n = m, n.length = 0), e.update_bbox(), this.getJumpthruCollisionCandidates(e.layer, e.bbox, v);
            var r, i, s;
            for (r = 0, i = v.length; i > r; ++r)
                if (s = v[r], s.extra.jumpthruEnabled && this.testOverlap(e, s)) {
                    if (!t) return v.length = 0, s;
                    n.push(s)
                }
            return v.length = 0, n
        }, e.prototype.pushOutSolid = function(e, t, n, r, i, s) {
            var o, u = r || 50,
                a = e.x,
                f = e.y,
                l = null,
                c = null;
            for (o = 0; u > o; o++)
                if (e.x = a + t * o, e.y = f + n * o, e.set_bbox_changed(), !this.testOverlap(e, l) && (l = this.testOverlapSolid(e), l && (c = l), !l && (i && (l = s ? this.testOverlap(e, s) ? s : null : this.testOverlapJumpThru(e), l && (c = l)), !l))) return c && this.pushInFractional(e, t, n, c, 16), !0;
            return e.x = a, e.y = f, e.set_bbox_changed(), !1
        }, e.prototype.pushOut = function(e, t, n, r, i) {
            var s, o = r || 50,
                u = e.x,
                a = e.y;
            for (s = 0; o > s; s++)
                if (e.x = u + t * s, e.y = a + n * s, e.set_bbox_changed(), !this.testOverlap(e, i)) return !0;
            return e.x = u, e.y = a, e.set_bbox_changed(), !1
        }, e.prototype.pushInFractional = function(e, t, n, r, i) {
            for (var s, o = 2, u = !1, a = !1, f = e.x, l = e.y; i >= o;) s = 1 / o, o *= 2, e.x += t * s * (u ? 1 : -1), e.y += n * s * (u ? 1 : -1), e.set_bbox_changed(), this.testOverlap(e, r) ? (u = !0, a = !0) : (u = !1, a = !1, f = e.x, l = e.y);
            a && (e.x = f, e.y = l, e.set_bbox_changed())
        }, e.prototype.pushOutSolidNearest = function(e, t) {
            var n = cr.is_undefined(t) ? 100 : t,
                r = 0,
                i = e.x,
                s = e.y,
                o = 0,
                u = 0,
                a = 0,
                f = this.testOverlapSolid(e);
            if (!f) return !0;
            for (; n >= r;) {
                switch (o) {
                    case 0:
                        u = 0, a = -1, r++;
                        break;
                    case 1:
                        u = 1, a = -1;
                        break;
                    case 2:
                        u = 1, a = 0;
                        break;
                    case 3:
                        u = 1, a = 1;
                        break;
                    case 4:
                        u = 0, a = 1;
                        break;
                    case 5:
                        u = -1, a = 1;
                        break;
                    case 6:
                        u = -1, a = 0;
                        break;
                    case 7:
                        u = -1, a = -1
                }
                if (o = (o + 1) % 8, e.x = cr.floor(i + u * r), e.y = cr.floor(s + a * r), e.set_bbox_changed(), !this.testOverlap(e, f) && (f = this.testOverlapSolid(e), !f)) return !0
            }
            return e.x = i, e.y = s, e.set_bbox_changed(), !1
        }, e.prototype.registerCollision = function(e, t) {
            e.collisionsEnabled && t.collisionsEnabled && this.registered_collisions.push([e, t])
        }, e.prototype.checkRegisteredCollision = function(e, t) {
            var n, r, i;
            for (n = 0, r = this.registered_collisions.length; r > n; n++)
                if (i = this.registered_collisions[n], i[0] == e && i[1] == t || i[0] == t && i[1] == e) return !0;
            return !1
        }, e.prototype.calculateSolidBounceAngle = function(e, t, n, r) {
            var i = e.x,
                s = e.y,
                o = cr.max(10, cr.distanceTo(t, n, i, s)),
                u = cr.angleTo(t, n, i, s),
                a = r || this.testOverlapSolid(e);
            if (!a) return cr.clamp_angle(u + cr.PI);
            var f, l, c, h, p = a,
                d = cr.to_radians(5);
            for (f = 1; 36 > f; f++)
                if (l = u - f * d, e.x = t + Math.cos(l) * o, e.y = n + Math.sin(l) * o, e.set_bbox_changed(), !this.testOverlap(e, p) && (p = r ? null : this.testOverlapSolid(e), !p)) {
                    c = l;
                    break
                }
            36 === f && (c = cr.clamp_angle(u + cr.PI));
            var p = a;
            for (f = 1; 36 > f; f++)
                if (l = u + f * d, e.x = t + Math.cos(l) * o, e.y = n + Math.sin(l) * o, e.set_bbox_changed(), !this.testOverlap(e, p) && (p = r ? null : this.testOverlapSolid(e), !p)) {
                    h = l;
                    break
                }
            if (36 === f && (h = cr.clamp_angle(u + cr.PI)), e.x = i, e.y = s, e.set_bbox_changed(), h === c) return h;
            var v, m = cr.angleDiff(h, c) / 2;
            v = cr.clamp_angle(cr.angleClockwise(h, c) ? c + m + cr.PI : h + m);
            var g = Math.cos(u),
                y = Math.sin(u),
                b = Math.cos(v),
                w = Math.sin(v),
                E = g * b + y * w,
                S = g - 2 * E * b,
                x = y - 2 * E * w;
            return cr.angleTo(0, 0, S, x)
        };
        var g = -1;
        e.prototype.trigger = function(e, t, n) {
            if (!this.running_layout) return !1;
            var r = this.running_layout.event_sheet;
            if (!r) return !1;
            var i, s, o, u = !1;
            g++;
            var a = r.deep_includes;
            for (s = 0, o = a.length; o > s; ++s) i = this.triggerOnSheet(e, t, a[s], n), u = u || i;
            return i = this.triggerOnSheet(e, t, r, n), u = u || i, g--, u
        }, e.prototype.triggerOnSheet = function(e, t, n, r) {
            var i, s, o, u, a = !1;
            if (t)
                for (o = this.triggerOnSheetForTypeName(e, t, t.type.name, n, r), a = a || o, u = t.type.families, i = 0, s = u.length; s > i; ++i) o = this.triggerOnSheetForTypeName(e, t, u[i].name, n, r), a = a || o;
            else o = this.triggerOnSheetForTypeName(e, t, "system", n, r), a = a || o;
            return a
        }, e.prototype.triggerOnSheetForTypeName = function(e, t, n, r, i) {
            var s, o, u, a, f = !1,
                l = !1,
                c = "undefined" != typeof i,
                h = c ? r.fasttriggers : r.triggers,
                p = h[n];
            if (!p) return f;
            var d = null;
            for (s = 0, o = p.length; o > s; ++s)
                if (p[s].method == e) {
                    d = p[s].evs;
                    break
                }
            if (!d) return f;
            var v;
            if (v = c ? d[i] : d, !v) return null;
            for (s = 0, o = v.length; o > s; s++) u = v[s][0], a = v[s][1], l = this.executeSingleTrigger(t, n, u, a), f = f || l;
            return f
        }, e.prototype.executeSingleTrigger = function(e, t, n, r) {
            var i, s, o = !1;
            this.trigger_depth++;
            var u = this.getCurrentEventStack().current_event;
            u && this.pushCleanSol(u.solModifiersIncludingParents);
            var a = this.trigger_depth > 1;
            this.pushCleanSol(n.solModifiersIncludingParents), a && this.pushLocalVarStack();
            var f = this.pushEventStack(n);
            if (f.current_event = n, e) {
                var l = this.types[t].getCurrentSol();
                l.select_all = !1, l.instances.length = 1, l.instances[0] = e, this.types[t].applySolToContainer()
            }
            var c = !0;
            if (n.parent) {
                for (var h = f.temp_parents_arr, p = n.parent; p;) h.push(p), p = p.parent;
                for (h.reverse(), i = 0, s = h.length; s > i; i++)
                    if (!h[i].run_pretrigger()) {
                        c = !1;
                        break
                    }
            }
            return c && (this.execcount++, n.orblock ? n.run_orblocktrigger(r) : n.run(), o = o || f.last_event_true), this.popEventStack(), a && this.popLocalVarStack(), this.popSol(n.solModifiersIncludingParents), u && this.popSol(u.solModifiersIncludingParents), 0 !== this.isInOnDestroy || 0 !== g || this.isRunningEvents || this.deathRow.isEmpty() && !this.createRow.length || this.ClearDeathRow(), this.trigger_depth--, o
        }, e.prototype.getCurrentCondition = function() {
            var e = this.getCurrentEventStack();
            return e.current_event.conditions[e.cndindex]
        }, e.prototype.getCurrentAction = function() {
            var e = this.getCurrentEventStack();
            return e.current_event.actions[e.actindex]
        }, e.prototype.pushLocalVarStack = function() {
            this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, e.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, e.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, e.prototype.pushEventStack = function(e) {
            this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var t = this.getCurrentEventStack();
            return t.reset(e), t
        }, e.prototype.popEventStack = function() {
            this.event_stack_index--
        }, e.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, e.prototype.pushLoopStack = function(e) {
            this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: e,
                index: 0,
                stopped: !1
            }));
            var t = this.getCurrentLoop();
            return t.name = e, t.index = 0, t.stopped = !1, t
        }, e.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, e.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, e.prototype.getEventVariableByName = function(e, t) {
            for (var n, r, i, s, o, u; t;) {
                for (n = 0, r = t.subevents.length; r > n; n++)
                    if (u = t.subevents[n], u instanceof cr.eventvariable && cr.equals_nocase(e, u.name)) return u;
                t = t.parent
            }
            for (n = 0, r = this.eventsheets_by_index.length; r > n; n++)
                for (o = this.eventsheets_by_index[n], i = 0, s = o.events.length; s > i; i++)
                    if (u = o.events[i], u instanceof cr.eventvariable && cr.equals_nocase(e, u.name)) return u;
            return null
        }, e.prototype.getLayoutBySid = function(e) {
            var t, n;
            for (t = 0, n = this.layouts_by_index.length; n > t; t++)
                if (this.layouts_by_index[t].sid === e) return this.layouts_by_index[t];
            return null
        }, e.prototype.getObjectTypeBySid = function(e) {
            var t, n;
            for (t = 0, n = this.types_by_index.length; n > t; t++)
                if (this.types_by_index[t].sid === e) return this.types_by_index[t];
            return null
        }, e.prototype.getGroupBySid = function(e) {
            var t, n;
            for (t = 0, n = this.allGroups.length; n > t; t++)
                if (this.allGroups[t].sid === e) return this.allGroups[t];
            return null
        }, e.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, e.prototype.handleSaveLoad = function() {
            var e = this,
                t = this.saveToSlot,
                s = this.lastSaveJson,
                o = this.loadFromSlot,
                u = !1;
            if (this.signalledContinuousPreview && (u = !0, t = "__c2_continuouspreview", this.signalledContinuousPreview = !1), t.length) {
                if (this.ClearDeathRow(), s = this.saveToJSONString(), window.indexedDB && !this.isCocoonJs) n(t, s, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + s.length + " bytes)"), e.lastSaveJson = s, e.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), e.lastSaveJson = "", u && i()
                }, function(n) {
                    try {
                        localStorage.setItem("__c2save_" + t, s), cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"), e.lastSaveJson = s, e.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), e.lastSaveJson = "", u && i()
                    } catch (r) {
                        cr.logexport("Failed to save game state: " + n + "; " + r)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + t, s), cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"), e.lastSaveJson = s, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), e.lastSaveJson = "", u && i()
                } catch (a) {
                    cr.logexport("Error saving to WebStorage: " + a)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = ""
            }
            o.length && (window.indexedDB && !this.isCocoonJs ? r(o, function(t) {
                t ? (e.loadFromJson = t, cr.logexport("Loaded state from IndexedDB storage (" + e.loadFromJson.length + " bytes)")) : (e.loadFromJson = localStorage.getItem("__c2save_" + o) || "", cr.logexport("Loaded state from WebStorage (" + e.loadFromJson.length + " bytes)")), e.suspendDrawing = !1, e.loadFromJson.length || e.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
            }, function() {
                e.loadFromJson = localStorage.getItem("__c2save_" + o) || "", cr.logexport("Loaded state from WebStorage (" + e.loadFromJson.length + " bytes)"), e.suspendDrawing = !1, e.loadFromJson.length || e.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
            }) : (this.loadFromJson = localStorage.getItem("__c2save_" + o) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)"), this.suspendDrawing = !1, e.loadFromJson.length || e.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)), this.loadFromSlot = "", this.saveToSlot = ""), this.loadFromJson.length && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson), this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "", this.loadFromJson = "")
        }, e.prototype.saveToJSONString = function() {
            var e, t, n, r, i, o, u, a, f, l, c, h, p = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (e = 0, t = this.types_by_index.length; t > e; e++)
                if (i = this.types_by_index[e], !i.is_family && !this.typeHasNoSaveBehavior(i)) {
                    for (u = {
                        instances: []
                    }, cr.hasAnyOwnProperty(i.extra) && (u.ex = s(i.extra)), n = 0, r = i.instances.length; r > n; n++) u.instances.push(this.saveInstanceToJSON(i.instances[n]));
                    p.types[i.sid.toString()] = u
                }
            for (e = 0, t = this.layouts_by_index.length; t > e; e++) o = this.layouts_by_index[e], p.layouts[o.sid.toString()] = o.saveToJSON();
            var d = p.events.groups;
            for (e = 0, t = this.allGroups.length; t > e; e++) a = this.allGroups[e], d[a.sid.toString()] = this.groups_by_name[a.group_name].group_active;
            var v = p.events.cnds;
            for (h in this.cndsBySid) this.cndsBySid.hasOwnProperty(h) && (f = this.cndsBySid[h], cr.hasAnyOwnProperty(f.extra) && (v[h] = {
                ex: s(f.extra)
            }));
            var m = p.events.acts;
            for (h in this.actsBySid) this.actsBySid.hasOwnProperty(h) && (l = this.actsBySid[h], cr.hasAnyOwnProperty(l.extra) && (m[h] = {
                ex: l.extra
            }));
            var g = p.events.vars;
            for (h in this.varsBySid) this.varsBySid.hasOwnProperty(h) && (c = this.varsBySid[h], c.is_constant || c.parent && !c.is_static || (g[h] = c.data));
            return p.system = this.system.saveToJSON(), JSON.stringify(p)
        }, e.prototype.refreshUidMap = function() {
            var e, t, n, r, i, s;
            for (this.objectsByUid = {}, e = 0, t = this.types_by_index.length; t > e; e++)
                if (n = this.types_by_index[e], !n.is_family)
                    for (r = 0, i = n.instances.length; i > r; r++) s = n.instances[r], this.objectsByUid[s.uid.toString()] = s
        }, e.prototype.loadFromJSONString = function(e) {
            var t = JSON.parse(e);
            if (t.c2save && !(t.version > 1)) {
                var n = t.rt;
                this.kahanTime.reset(), this.kahanTime.sum = n.time, this.timescale = n.timescale, this.tickcount = n.tickcount, this.start_time = Date.now() - n.start_time_offset;
                var r = n.running_layout;
                if (r !== this.running_layout.sid) {
                    var i = this.getLayoutBySid(r);
                    if (!i) return;
                    this.doChangeLayout(i)
                }
                this.isLoadingState = !0;
                var s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S = t.types;
                for (c in S)
                    if (S.hasOwnProperty(c)) {
                        if (h = this.getObjectTypeBySid(parseInt(c, 10)), !h || h.is_family || this.typeHasNoSaveBehavior(h)) continue;
                        for (S[c].ex ? h.extra = S[c].ex : cr.wipe(h.extra), p = h.instances, d = S[c].instances, s = 0, o = cr.min(p.length, d.length); o > s; s++) this.loadInstanceFromJSON(p[s], d[s]);
                        for (s = d.length, o = p.length; o > s; s++) this.DestroyInstance(p[s]);
                        for (s = p.length, o = d.length; o > s; s++) y = null, (!h.plugin.is_world || (y = this.running_layout.getLayerBySid(d[s].w.l))) && (v = this.createInstanceFromInit(h.default_instance, y, !1, 0, 0, !0), this.loadInstanceFromJSON(v, d[s]));
                        h.stale_iids = !0
                    }
                this.ClearDeathRow(), this.refreshUidMap();
                var x = t.layouts;
                for (c in x)
                    if (x.hasOwnProperty(c)) {
                        if (g = this.getLayoutBySid(parseInt(c, 10)), !g) continue;
                        g.loadFromJSON(x[c])
                    }
                var T = t.events.groups;
                for (c in T) T.hasOwnProperty(c) && (b = this.getGroupBySid(parseInt(c, 10)), b && this.groups_by_name[b.group_name] && (this.groups_by_name[b.group_name].group_active = T[c]));
                var N = t.events.cnds;
                for (c in N) N.hasOwnProperty(c) && this.cndsBySid.hasOwnProperty(c) && (this.cndsBySid[c].extra = N[c].ex);
                var C = t.events.acts;
                for (c in C) C.hasOwnProperty(c) && this.actsBySid.hasOwnProperty(c) && (this.actsBySid[c].extra = C[c].ex);
                var k = t.events.vars;
                for (c in k) k.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = k[c]);
                for (this.next_uid = n.next_uid, this.isLoadingState = !1, this.system.loadFromJSON(t.system), s = 0, o = this.types_by_index.length; o > s; s++)
                    if (h = this.types_by_index[s], !h.is_family)
                        for (u = 0, a = h.instances.length; a > u; u++) {
                            if (v = h.instances[u], h.is_contained)
                                for (w = v.get_iid(), v.siblings.length = 0, f = 0, l = h.container.length; l > f; f++) E = h.container[f], h !== E && v.siblings.push(E.instances[w]);
                            if (v.afterLoad && v.afterLoad(), v.behavior_insts)
                                for (f = 0, l = v.behavior_insts.length; l > f; f++) m = v.behavior_insts[f], m.afterLoad && m.afterLoad()
                        }
                    this.redraw = !0
            }
        }, e.prototype.saveInstanceToJSON = function(e, t) {
            var n, r, i, o, u, a = e.type,
                f = a.plugin,
                l = {};
            if (t ? l.c2 = !0 : l.uid = e.uid, cr.hasAnyOwnProperty(e.extra) && (l.ex = s(e.extra)), e.instance_vars && e.instance_vars.length)
                for (l.ivs = {}, n = 0, r = e.instance_vars.length; r > n; n++) l.ivs[e.type.instvar_sids[n].toString()] = e.instance_vars[n];
            if (f.is_world) {
                if (i = {
                    x: e.x,
                    y: e.y,
                    w: e.width,
                    h: e.height,
                    l: e.layer.sid,
                    zi: e.get_zindex()
                }, 0 !== e.angle && (i.a = e.angle), 1 !== e.opacity && (i.o = e.opacity), .5 !== e.hotspotX && (i.hX = e.hotspotX), .5 !== e.hotspotY && (i.hY = e.hotspotY), 0 !== e.blend_mode && (i.bm = e.blend_mode), e.visible || (i.v = e.visible), e.collisionsEnabled || (i.ce = e.collisionsEnabled), -1 !== e.my_timescale && (i.mts = e.my_timescale), a.effect_types.length)
                    for (i.fx = [], n = 0, r = a.effect_types.length; r > n; n++) u = a.effect_types[n], i.fx.push({
                        name: u.name,
                        active: e.active_effect_flags[u.index],
                        params: e.effect_params[u.index]
                    });
                l.w = i
            }
            if (e.behavior_insts && e.behavior_insts.length)
                for (l.behs = {}, n = 0, r = e.behavior_insts.length; r > n; n++) o = e.behavior_insts[n], o.saveToJSON && (l.behs[o.type.sid.toString()] = o.saveToJSON());
            return e.saveToJSON && (l.data = e.saveToJSON()), l
        }, e.prototype.getInstanceVarIndexBySid = function(e, t) {
            var n, r;
            for (n = 0, r = e.instvar_sids.length; r > n; n++)
                if (e.instvar_sids[n] === t) return n;
            return -1
        }, e.prototype.getBehaviorIndexBySid = function(e, t) {
            var n, r;
            for (n = 0, r = e.behavior_insts.length; r > n; n++)
                if (e.behavior_insts[n].type.sid === t) return n;
            return -1
        }, e.prototype.loadInstanceFromJSON = function(e, t, n) {
            var r, i, s, o, u, a, f, l, c, h, p = e.type,
                d = p.plugin;
            if (n) {
                if (!t.c2) return
            } else e.uid = t.uid; if (t.ex ? e.extra = t.ex : cr.wipe(e.extra), u = t.ivs)
                for (r in u)
                    if (u.hasOwnProperty(r)) {
                        if (o = this.getInstanceVarIndexBySid(p, parseInt(r, 10)), 0 > o || o >= e.instance_vars.length) continue;
                        e.instance_vars[o] = u[r]
                    }
            if (d.is_world) {
                if (a = t.w, e.layer.sid !== a.l && (h = e.layer, e.layer = this.running_layout.getLayerBySid(a.l), e.layer ? (e.layer.instances.push(e), e.layer.zindices_stale = !0, cr.arrayFindRemove(h.instances, e), h.zindices_stale = !0) : (e.layer = h, this.DestroyInstance(e))), e.x = a.x, e.y = a.y, e.width = a.w, e.height = a.h, e.zindex = a.zi, e.angle = a.hasOwnProperty("a") ? a.a : 0, e.opacity = a.hasOwnProperty("o") ? a.o : 1, e.hotspotX = a.hasOwnProperty("hX") ? a.hX : .5, e.hotspotY = a.hasOwnProperty("hY") ? a.hY : .5, e.visible = a.hasOwnProperty("v") ? a.v : !0, e.collisionsEnabled = a.hasOwnProperty("ce") ? a.ce : !0, e.my_timescale = a.hasOwnProperty("mts") ? a.mts : -1, e.blend_mode = a.hasOwnProperty("bm") ? a.bm : 0, e.compositeOp = cr.effectToCompositeOp(e.blend_mode), this.gl && cr.setGLBlend(e, e.blend_mode, this.gl), e.set_bbox_changed(), a.hasOwnProperty("fx"))
                    for (i = 0, s = a.fx.length; s > i; i++) f = p.getEffectIndexByName(a.fx[i].name), 0 > f || (e.active_effect_flags[f] = a.fx[i].active, e.effect_params[f] = a.fx[i].params);
                e.updateActiveEffects()
            }
            if (l = t.behs)
                for (r in l)
                    if (l.hasOwnProperty(r)) {
                        if (c = this.getBehaviorIndexBySid(e, parseInt(r, 10)), 0 > c) continue;
                        e.behavior_insts[c].loadFromJSON(l[r])
                    }
            t.data && e.loadFromJSON(t.data)
        }, cr.runtime = e, cr.createRuntime = function(t) {
            return new e(document.getElementById(t))
        }, cr.createDCRuntime = function(t, n) {
            return new e({
                dc: !0,
                width: t,
                height: n
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var t = document.createElement("screencanvas") || document.createElement("canvas");
            t.screencanvas = !0, document.body.appendChild(t);
            var n = new e(t);
            return window.c2runtime = n, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), n
        }, window.createEjectaRuntime = function() {
            var t = document.getElementById("canvas"),
                n = new e(t);
            return window.c2runtime = n, window.c2runtime.setSize(window.innerWidth, window.innerHeight), n
        }
    }(), window.cr_getC2Runtime = function() {
        var e = document.getElementById("c2canvas");
        return e ? e.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_sizeCanvas = function(e, t) {
        if (0 !== e && 0 !== t) {
            var n = window.cr_getC2Runtime();
            n && n.setSize(e, t)
        }
    }, window.cr_setSuspended = function(e) {
        var t = window.cr_getC2Runtime();
        t && t.setSuspended(e)
    },
    function() {
        function e(e, t) {
            this.runtime = e, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = t[0], this.width = t[1], this.height = t[2], this.unbounded_scrolling = t[3], this.sheetname = t[4], this.sid = t[5];
            var n, r, i = t[6];
            for (this.layers = [], this.initial_types = [], n = 0, r = i.length; r > n; n++) {
                var s = new cr.layer(this, i[n]);
                s.number = n, cr.seal(s), this.layers.push(s)
            }
            var o = t[7];
            for (this.initial_nonworld = [], n = 0, r = o.length; r > n; n++) {
                var u = o[n],
                    a = this.runtime.types_by_index[u[1]];
                a.default_instance || (a.default_instance = u), this.initial_nonworld.push(u), -1 === this.initial_types.indexOf(a) && this.initial_types.push(a)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.effect_params = [], n = 0, r = t[8].length; r > n; n++) this.effect_types.push({
                id: t[8][n][0],
                name: t[8][n][1],
                shaderindex: -1,
                active: !0,
                index: n
            }), this.effect_params.push(t[8][n][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }

        function t(e, t) {
            this.layout = e, this.runtime = e.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.name = t[0], this.index = t[1], this.sid = t[2], this.visible = t[3], this.background_color = t[4], this.transparent = t[5], this.parallaxX = t[6], this.parallaxY = t[7], this.opacity = t[8], this.forceOwnTexture = t[9], this.zoomRate = t[10], this.blend_mode = t[11], this.effect_fallback = t[12], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_offscreen = !1;
            var n, r, i = t[13];
            for (this.initial_instances = [], n = 0, r = i.length; r > n; n++) {
                var s = i[n],
                    o = this.runtime.types_by_index[s[1]];
                o.default_instance || (o.default_instance = s, o.default_layerindex = this.index), this.initial_instances.push(s), -1 === this.layout.initial_types.indexOf(o) && this.layout.initial_types.push(o)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.effect_params = [], n = 0, r = t[14].length; r > n; n++) this.effect_types.push({
                id: t[14][n][0],
                name: t[14][n][1],
                shaderindex: -1,
                active: !0,
                index: n
            }), this.effect_params.push(t[14][n][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }

        function n(e, t) {
            return e.zindex - t.zindex
        }
        e.prototype.saveObjectToPersist = function(e) {
            var t = e.type.sid.toString();
            this.persist_data.hasOwnProperty(t) || (this.persist_data[t] = []);
            var n = this.persist_data[t];
            n.push(this.runtime.saveInstanceToJSON(e))
        }, e.prototype.hasOpaqueBottomLayer = function() {
            var e = this.layers[0];
            return !e.transparent && 1 === e.opacity && !e.forceOwnTexture && e.visible
        }, e.prototype.updateActiveEffects = function() {
            this.active_effect_types.length = 0;
            var e, t, n;
            for (e = 0, t = this.effect_types.length; t > e; e++) n = this.effect_types[e], n.active && this.active_effect_types.push(n)
        }, e.prototype.getEffectByName = function(e) {
            var t, n, r;
            for (t = 0, n = this.effect_types.length; n > t; t++)
                if (r = this.effect_types[t], r.name === e) return r;
            return null
        };
        var r = [];
        e.prototype.startRunning = function() {
            this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2;
            var e, t, o, u, a, f, l, c, h, p, d, v, m;
            for (e = 0, o = this.runtime.types_by_index.length; o > e; e++)
                if (a = this.runtime.types_by_index[e], !a.is_family)
                    for (f = a.instances, t = 0, u = f.length; u > t; t++)
                        if (l = f[t], l.layer) {
                            var g = l.layer.number;
                            g >= this.layers.length && (g = this.layers.length - 1), l.layer = this.layers[g], -1 === l.layer.instances.indexOf(l) && l.layer.instances.push(l), l.layer.zindices_stale = !0
                        }
            var m;
            for (r.length = 0, this.boundScrolling(), e = 0, o = this.layers.length; o > e; e++) {
                m = this.layers[e], m.createInitialInstances(), m.disableAngle = !0;
                var y = m.canvasToLayer(0, 0, !0, !0),
                    b = m.canvasToLayer(0, 0, !1, !0);
                m.disableAngle = !1, this.runtime.pixel_rounding && (y = y + .5 | 0, b = b + .5 | 0), m.rotateViewport(y, b, null)
            }
            var w = !1;
            if (!this.first_visit) {
                for (d in this.persist_data)
                    if (this.persist_data.hasOwnProperty(d)) {
                        if (a = this.runtime.getObjectTypeBySid(parseInt(d, 10)), !a || a.is_family || !this.runtime.typeHasPersistBehavior(a)) continue;
                        for (v = this.persist_data[d], e = 0, o = v.length; o > e; e++) m = null, (!a.plugin.is_world || (m = this.getLayerBySid(v[e].w.l))) && (l = this.runtime.createInstanceFromInit(a.default_instance, m, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(l, v[e]), w = !0, r.push(l));
                        v.length = 0
                    }
                for (e = 0, o = this.layers.length; o > e; e++) this.layers[e].instances.sort(n), this.layers[e].zindices_stale = !0
            }
            for (w && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), e = 0; e < r.length; e++)
                if (l = r[e], l.type.is_contained)
                    for (c = l.get_iid(), t = 0, u = l.type.container.length; u > t; t++) h = l.type.container[t], l.type !== h && (h.instances.length > c ? l.siblings.push(h.instances[c]) : h.default_instance && (p = this.runtime.createInstanceFromInit(h.default_instance, l.layer, !0, l.x, l.y, !0), this.runtime.ClearDeathRow(), h.updateIIDs(), l.siblings.push(p), r.push(p)));
            for (e = 0, o = this.initial_nonworld.length; o > e; e++) l = this.runtime.createInstanceFromInit(this.initial_nonworld[e], null, !0);
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (e = 0, o = this.runtime.types_by_index.length; o > e; e++) h = this.runtime.types_by_index[e], !h.is_family && h.instances.length && h.preloadCanvas2D && h.preloadCanvas2D(this.runtime.ctx);
            for (e = 0, o = r.length; o > e; e++) l = r[e], this.runtime.trigger(Object.getPrototypeOf(l.type.plugin).cnds.OnCreated, l);
            r.length = 0, this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, e.prototype.createGlobalNonWorlds = function() {
            var e, t, n, r, i, s;
            for (e = 0, t = 0, n = this.initial_nonworld.length; n > e; e++) r = this.initial_nonworld[e], s = this.runtime.types_by_index[r[1]], s.global ? i = this.runtime.createInstanceFromInit(r, null, !0) : (this.initial_nonworld[t] = r, t++);
            this.initial_nonworld.length = t
        }, e.prototype.stopRunning = function() {
            this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.system.waits.length = 0;
            var e, t, n, r, i, s, o;
            for (e = 0, t = this.layers.length; t > e; e++) {
                for (i = this.layers[e].instances, n = 0, r = i.length; r > n; n++) s = i[n], s.type.global || (this.runtime.typeHasPersistBehavior(s.type) && this.saveObjectToPersist(s), this.runtime.DestroyInstance(s));
                this.runtime.ClearDeathRow(), i.length = 0, this.layers[e].zindices_stale = !0
            }
            for (e = 0, t = this.runtime.types_by_index.length; t > e; e++)
                if (o = this.runtime.types_by_index[e], !(o.global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
                    for (n = 0, r = o.instances.length; r > n; n++) this.runtime.DestroyInstance(o.instances[n]);
                    this.runtime.ClearDeathRow()
                }
        }, e.prototype.draw = function(e) {
            var t, n = e,
                r = !1,
                i = !this.runtime.fullscreenScalingQuality;
            i && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), t = this.runtime.layout_canvas, t.width = this.runtime.draw_width, t.height = this.runtime.draw_height, this.runtime.layout_ctx = t.getContext("2d"), r = !0), t = this.runtime.layout_canvas, n = this.runtime.layout_ctx, t.width !== this.runtime.draw_width && (t.width = this.runtime.draw_width, r = !0), t.height !== this.runtime.draw_height && (t.height = this.runtime.draw_height, r = !0), r && (n.webkitImageSmoothingEnabled = this.runtime.linearSampling, n.mozImageSmoothingEnabled = this.runtime.linearSampling, n.msImageSmoothingEnabled = this.runtime.linearSampling, n.imageSmoothingEnabled = this.runtime.linearSampling)), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && n.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height);
            var s, o, u;
            for (s = 0, o = this.layers.length; o > s; s++) u = this.layers[s], u.visible && u.opacity > 0 && 11 !== u.blend_mode && u.draw(n);
            i && e.drawImage(t, 0, 0, this.runtime.width, this.runtime.height)
        }, e.prototype.drawGL = function(e) {
            var t = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality;
            t ? (this.runtime.layout_tex || (this.runtime.layout_tex = e.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layout_tex.c2width !== this.runtime.draw_width || this.runtime.layout_tex.c2height !== this.runtime.draw_height) && (e.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = e.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), e.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || e.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (e.setRenderingToTexture(null), e.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && e.clear(0, 0, 0, 0);
            var n, r;
            for (n = 0, r = this.layers.length; r > n; n++) this.layers[n].visible && this.layers[n].opacity > 0 && this.layers[n].drawGL(e);
            if (t)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var i = this.active_effect_types[0].index;
                        e.switchProgram(this.active_effect_types[0].shaderindex), e.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.effect_params[i]), e.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else e.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || e.setSize(this.runtime.width, this.runtime.height), e.setRenderingToTexture(null), e.setOpacity(1), e.setTexture(this.runtime.layout_tex), e.setAlphaBlend(), e.resetModelView(), e.updateModelView();
                    var s = this.runtime.width / 2,
                        o = this.runtime.height / 2;
                    e.quad(-s, o, s, o, s, -o, -s, -o), e.setTexture(null)
                } else this.renderEffectChain(e, null, null, null)
        }, e.prototype.getRenderTarget = function() {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality ? this.runtime.layout_tex : null
        }, e.prototype.getMinLayerScale = function() {
            var e, t, n, r = this.layers[0].getScale();
            for (e = 1, t = this.layers.length; t > e; e++) n = this.layers[e], (0 !== n.parallaxX || 0 !== n.parallaxY) && n.getScale() < r && (r = n.getScale());
            return r
        }, e.prototype.scrollToX = function(e) {
            if (!this.unbounded_scrolling) {
                var t = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                e > this.width - t && (e = this.width - t), t > e && (e = t)
            }
            this.scrollX !== e && (this.scrollX = e, this.runtime.redraw = !0)
        }, e.prototype.scrollToY = function(e) {
            if (!this.unbounded_scrolling) {
                var t = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                e > this.height - t && (e = this.height - t), t > e && (e = t)
            }
            this.scrollY !== e && (this.scrollY = e, this.runtime.redraw = !0)
        }, e.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, e.prototype.renderEffectChain = function(e, t, n, r) {
            var i = n ? n.active_effect_types : t ? t.active_effect_types : this.active_effect_types,
                s = 1,
                o = 0,
                u = 0,
                a = 0;
            n ? (s = n.layer.getScale(), o = n.layer.getAngle(), u = n.layer.viewLeft, a = n.layer.viewTop) : t && (s = t.getScale(), o = t.getAngle(), u = t.viewLeft, a = t.viewTop);
            var f, l, c, h, p, d, v = this.runtime.fx_tex,
                m = 0,
                g = 1,
                y = this.runtime.draw_width,
                b = this.runtime.draw_height,
                w = y / 2,
                E = b / 2,
                S = t ? t.rcTex : this.rcTex,
                x = t ? t.rcTex2 : this.rcTex2,
                T = 0,
                N = 0,
                C = 0,
                k = 0,
                L = y,
                A = y,
                O = b,
                M = b,
                _ = 0,
                D = 0,
                P = n ? n.layer.getAngle() : 0;
            if (n) {
                for (f = 0, l = i.length; l > f; f++) _ += e.getProgramBoxExtendHorizontal(i[f].shaderindex), D += e.getProgramBoxExtendVertical(i[f].shaderindex);
                var H = n.bbox;
                if (T = t.layerToCanvas(H.left, H.top, !0, !0), C = t.layerToCanvas(H.left, H.top, !1, !0), L = t.layerToCanvas(H.right, H.bottom, !0, !0), O = t.layerToCanvas(H.right, H.bottom, !1, !0), 0 !== P) {
                    var B = t.layerToCanvas(H.right, H.top, !0, !0),
                        j = t.layerToCanvas(H.right, H.top, !1, !0),
                        F = t.layerToCanvas(H.left, H.bottom, !0, !0),
                        I = t.layerToCanvas(H.left, H.bottom, !1, !0);
                    h = Math.min(T, L, B, F), L = Math.max(T, L, B, F), T = h, h = Math.min(C, O, j, I), O = Math.max(C, O, j, I), C = h
                }
                T -= _, C -= D, L += _, O += D, x.left = T / y, x.top = 1 - C / b, x.right = L / y, x.bottom = 1 - O / b, N = T = cr.floor(T), k = C = cr.floor(C), A = L = cr.ceil(L), M = O = cr.ceil(O), N -= _, k -= D, A += _, M += D, 0 > T && (T = 0), 0 > C && (C = 0), L > y && (L = y), O > b && (O = b), 0 > N && (N = 0), 0 > k && (k = 0), A > y && (A = y), M > b && (M = b), S.left = T / y, S.top = 1 - C / b, S.right = L / y, S.bottom = 1 - O / b
            } else S.left = x.left = 0, S.top = x.top = 0, S.right = x.right = 1, S.bottom = x.bottom = 1;
            var q = n && ((n.angle || P) && e.programUsesDest(i[0].shaderindex) || 0 !== _ || 0 !== D || 1 !== n.opacity || n.type.plugin.must_predraw) || t && !n && 1 !== t.opacity;
            e.setAlphaBlend(), q && (v[m] || (v[m] = e.createEmptyTexture(y, b, this.runtime.linearSampling)), (v[m].c2width !== y || v[m].c2height !== b) && (e.deleteTexture(v[m]), v[m] = e.createEmptyTexture(y, b, this.runtime.linearSampling)), e.switchProgram(0), e.setRenderingToTexture(v[m]), d = M - k, p = b - k - d, e.clearRect(N, p, A - N, d), n ? n.drawGL(e) : (e.setTexture(this.runtime.layer_tex), e.setOpacity(t.opacity), e.resetModelView(), e.translate(-w, -E), e.updateModelView(), e.quadTex(T, O, L, O, L, C, T, C, S)), x.left = x.top = 0, x.right = x.bottom = 1, n && (h = S.top, S.top = S.bottom, S.bottom = h), m = 1, g = 0), e.setOpacity(1);
            var c = i.length - 1,
                R = e.programUsesCrossSampling(i[c].shaderindex) || !t && !n && !this.runtime.fullscreenScalingQuality,
                U = 0;
            for (f = 0, l = i.length; l > f; f++) v[m] || (v[m] = e.createEmptyTexture(y, b, this.runtime.linearSampling)), (v[m].c2width !== y || v[m].c2height !== b) && (e.deleteTexture(v[m]), v[m] = e.createEmptyTexture(y, b, this.runtime.linearSampling)), e.switchProgram(i[f].shaderindex), U = i[f].index, e.programIsAnimated(i[f].shaderindex) && (this.runtime.redraw = !0), 0 != f || q ? (e.setProgramParameters(r, 1 / y, 1 / b, x.left, x.top, x.right, x.bottom, s, o, u, a, n ? n.effect_params[U] : t ? t.effect_params[U] : this.effect_params[U]), e.setTexture(null), f !== c || R ? (e.setRenderingToTexture(v[m]), d = M - k, p = b - k - d, e.clearRect(N, p, A - N, d)) : (n ? e.setBlend(n.srcBlend, n.destBlend) : t && e.setBlend(t.srcBlend, t.destBlend), e.setRenderingToTexture(r)), e.setTexture(v[g]), e.resetModelView(), e.translate(-w, -E), e.updateModelView(), e.quadTex(T, O, L, O, L, C, T, C, S), f !== c || R || e.setTexture(null)) : (e.setRenderingToTexture(v[m]), d = M - k, p = b - k - d, e.clearRect(N, p, A - N, d), n ? (e.setProgramParameters(r, 1 / n.width, 1 / n.height, x.left, x.top, x.right, x.bottom, s, o, u, a, n.effect_params[U]), n.drawGL(e)) : (e.setProgramParameters(r, 1 / y, 1 / b, 0, 0, 1, 1, s, o, u, a, t ? t.effect_params[U] : this.effect_params[U]), e.setTexture(t ? this.runtime.layer_tex : this.runtime.layout_tex), e.resetModelView(), e.translate(-w, -E), e.updateModelView(), e.quadTex(T, O, L, O, L, C, T, C, S)), x.left = x.top = 0, x.right = x.bottom = 1, n && !R && (h = O, O = C, C = h)), m = 0 === m ? 1 : 0, g = 0 === m ? 1 : 0;
            R && (e.switchProgram(0), n ? e.setBlend(n.srcBlend, n.destBlend) : t ? e.setBlend(t.srcBlend, t.destBlend) : this.runtime.fullscreenScalingQuality || (e.setSize(this.runtime.width, this.runtime.height), w = this.runtime.width / 2, E = this.runtime.height / 2, T = 0, C = 0, L = this.runtime.width, O = this.runtime.height), e.setRenderingToTexture(r), e.setTexture(v[g]), e.resetModelView(), e.translate(-w, -E), e.updateModelView(), n && 1 === i.length && !q ? e.quadTex(T, C, L, C, L, O, T, O, S) : e.quadTex(T, O, L, O, L, C, T, C, S), e.setTexture(null))
        }, e.prototype.getLayerBySid = function(e) {
            var t, n;
            for (t = 0, n = this.layers.length; n > t; t++)
                if (this.layers[t].sid === e) return this.layers[t];
            return null
        }, e.prototype.saveToJSON = function() {
            var e, t, n, r, i = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (e = 0, t = this.effect_types.length; t > e; e++) r = this.effect_types[e], i.fx.push({
                name: r.name,
                active: r.active,
                params: this.effect_params[r.index]
            });
            for (e = 0, t = this.layers.length; t > e; e++) n = this.layers[e], i.layers[n.sid.toString()] = n.saveToJSON();
            return i
        }, e.prototype.loadFromJSON = function(e) {
            var t, n, r, i, s;
            this.scrollX = e.sx, this.scrollY = e.sy, this.scale = e.s, this.angle = e.a, this.width = e.w, this.height = e.h, this.persist_data = e.persist, "undefined" != typeof e.fv && (this.first_visit = e.fv);
            var o = e.fx;
            for (t = 0, n = o.length; n > t; t++) r = this.getEffectByName(o[t].name), r && (r.active = o[t].active, this.effect_params[r.index] = o[t].params);
            this.updateActiveEffects();
            var u = e.layers;
            for (i in u)
                if (u.hasOwnProperty(i)) {
                    if (s = this.getLayerBySid(parseInt(i, 10)), !s) continue;
                    s.loadFromJSON(u[i])
                }
        }, cr.layout = e, t.prototype.updateActiveEffects = function() {
            this.active_effect_types.length = 0;
            var e, t, n;
            for (e = 0, t = this.effect_types.length; t > e; e++) n = this.effect_types[e], n.active && this.active_effect_types.push(n)
        }, t.prototype.getEffectByName = function(e) {
            var t, n, r;
            for (t = 0, n = this.effect_types.length; n > t; t++)
                if (r = this.effect_types[t], r.name === e) return r;
            return null
        }, t.prototype.createInitialInstances = function() {
            var e, t, n, i, o, u, a, f;
            for (e = 0, t = 0, n = this.initial_instances.length; n > e; e++) o = this.initial_instances[e], u = this.runtime.types_by_index[o[1]], f = this.runtime.typeHasPersistBehavior(u), a = !0, (!f || this.layout.first_visit) && (i = this.runtime.createInstanceFromInit(o, this, !0), r.push(i), i.type.global && (a = !1)), a && (this.initial_instances[t] = this.initial_instances[e], t++);
            this.initial_instances.length = t, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl)
        }, t.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                var e, t;
                for (e = 0, t = this.instances.length; t > e; e++) this.instances[e].zindex = e;
                this.zindices_stale = !1
            }
        }, t.prototype.getScale = function(e) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || e ? this.runtime.aspect_scale : 1)
        }, t.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, t.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        }, t.prototype.draw = function(e) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var t = this.runtime.canvas,
                n = e,
                r = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), t = this.runtime.layer_canvas, t.width = this.runtime.draw_width, t.height = this.runtime.draw_height, this.runtime.layer_ctx = t.getContext("2d"), r = !0), t = this.runtime.layer_canvas, n = this.runtime.layer_ctx, t.width !== this.runtime.draw_width && (t.width = this.runtime.draw_width, r = !0), t.height !== this.runtime.draw_height && (t.height = this.runtime.draw_height, r = !0), r && (n.webkitImageSmoothingEnabled = this.runtime.linearSampling, n.mozImageSmoothingEnabled = this.runtime.linearSampling, n.msImageSmoothingEnabled = this.runtime.linearSampling, n.imageSmoothingEnabled = this.runtime.linearSampling), this.transparent && n.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", this.transparent || (n.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", n.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), n.save(), this.disableAngle = !0;
            var i = this.canvasToLayer(0, 0, !0, !0),
                s = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), this.rotateViewport(i, s, n);
            var o = this.getScale();
            n.scale(o, o), n.translate(-i, -s);
            var u, a, f, l;
            for (u = 0, a = this.instances.length; a > u; u++) f = this.instances[u], f.visible && 0 !== f.width && 0 !== f.height && (f.update_bbox(), l = f.bbox, l.right < this.viewLeft || l.bottom < this.viewTop || l.left > this.viewRight || l.top > this.viewBottom || (n.globalCompositeOperation = f.compositeOp, f.draw(n)));
            n.restore(), this.render_offscreen && (e.globalCompositeOperation = this.compositeOp, e.globalAlpha = this.opacity, e.drawImage(t, 0, 0))
        }, t.prototype.rotateViewport = function(e, t, n) {
            var r = this.getScale();
            this.viewLeft = e, this.viewTop = t, this.viewRight = e + this.runtime.draw_width * (1 / r), this.viewBottom = t + this.runtime.draw_height * (1 / r);
            var i = this.getAngle();
            0 !== i && (n && (n.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), n.rotate(-i), n.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, i), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, t.prototype.drawGL = function(e) {
            var t = this.runtime.draw_width,
                n = this.runtime.draw_height,
                r = 0,
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = e.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layer_tex.c2width !== this.runtime.draw_width || this.runtime.layer_tex.c2height !== this.runtime.draw_height) && (e.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = e.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), e.setRenderingToTexture(this.runtime.layer_tex), this.transparent && e.clear(0, 0, 0, 0)), this.transparent || e.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), this.disableAngle = !0;
            var s = this.canvasToLayer(0, 0, !0, !0),
                o = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (s = s + .5 | 0, o = o + .5 | 0), this.rotateViewport(s, o, null);
            var u = this.getScale();
            e.resetModelView(), e.scale(u, u), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            var a, f, l, c;
            for (a = 0, f = this.instances.length; f > a; a++)
                if (l = this.instances[a], l.visible && 0 !== l.width && 0 !== l.height && (l.update_bbox(), c = l.bbox, !(c.right < this.viewLeft || c.bottom < this.viewTop || c.left > this.viewRight || c.top > this.viewBottom)))
                    if (l.uses_shaders)
                        if (r = l.active_effect_types[0].shaderindex, i = l.active_effect_types[0].index, 1 !== l.active_effect_types.length || e.programUsesCrossSampling(r) || e.programExtendsBox(r) || (l.angle || l.layer.getAngle()) && e.programUsesDest(r) || 1 !== l.opacity || l.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, l, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(u, u), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
                        else {
                            e.switchProgram(r), e.setBlend(l.srcBlend, l.destBlend), e.programIsAnimated(r) && (this.runtime.redraw = !0);
                            var h = 0,
                                p = 0,
                                d = 0,
                                v = 0;
                            if (e.programUsesDest(r)) {
                                var c = l.bbox,
                                    m = this.layerToCanvas(c.left, c.top, !0, !0),
                                    g = this.layerToCanvas(c.left, c.top, !1, !0),
                                    y = this.layerToCanvas(c.right, c.bottom, !0, !0),
                                    b = this.layerToCanvas(c.right, c.bottom, !1, !0);
                                h = m / t, p = 1 - g / n, d = y / t, v = 1 - b / n
                            }
                            e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), 1 / l.width, 1 / l.height, h, p, d, v, this.getScale(), this.getAngle(), this.viewLeft, this.viewTop, l.effect_params[i]), l.drawGL(e)
                        } else e.switchProgram(0), e.setBlend(l.srcBlend, l.destBlend), l.drawGL(e); if (this.render_offscreen)
                if (r = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !e.programUsesCrossSampling(r) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (e.switchProgram(r), e.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.getScale(), this.getAngle(), this.viewLeft, this.viewTop, this.effect_params[i]), e.programIsAnimated(r) && (this.runtime.redraw = !0)) : e.switchProgram(0), e.setRenderingToTexture(this.layout.getRenderTarget()), e.setOpacity(this.opacity), e.setTexture(this.runtime.layer_tex), e.setBlend(this.srcBlend, this.destBlend), e.resetModelView(), e.updateModelView();
                    var w = this.runtime.draw_width / 2,
                        E = this.runtime.draw_height / 2;
                    e.quad(-w, E, w, E, w, -E, -w, -E), e.setTexture(null)
                } else this.layout.renderEffectChain(e, this, null, this.layout.getRenderTarget())
        }, t.prototype.canvasToLayer = function(e, t, n, r) {
            var i = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (e *= i, t *= i);
            var s = this.runtime.parallax_x_origin,
                o = this.runtime.parallax_y_origin,
                u = (this.layout.scrollX - s) * this.parallaxX + s,
                a = (this.layout.scrollY - o) * this.parallaxY + o,
                f = 1 / this.getScale(!r);
            r ? (u -= this.runtime.draw_width * f / 2, a -= this.runtime.draw_height * f / 2) : (u -= this.runtime.width * f / 2, a -= this.runtime.height * f / 2), u += e * f, a += t * f;
            var l = this.getAngle();
            if (0 !== l) {
                u -= this.layout.scrollX, a -= this.layout.scrollY;
                var c = Math.cos(l),
                    h = Math.sin(l),
                    p = u * c - a * h;
                a = a * c + u * h, u = p, u += this.layout.scrollX, a += this.layout.scrollY
            }
            return n ? u : a
        }, t.prototype.layerToCanvas = function(e, t, n, r) {
            var i = this.getAngle();
            if (0 !== i) {
                e -= this.layout.scrollX, t -= this.layout.scrollY;
                var s = Math.cos(-i),
                    o = Math.sin(-i),
                    u = e * s - t * o;
                t = t * s + e * o, e = u, e += this.layout.scrollX, t += this.layout.scrollY
            }
            var a = this.runtime.parallax_x_origin,
                f = this.runtime.parallax_y_origin,
                l = (this.layout.scrollX - a) * this.parallaxX + a,
                c = (this.layout.scrollY - f) * this.parallaxY + f,
                h = 1 / this.getScale(!r);
            r ? (l -= this.runtime.draw_width * h / 2, c -= this.runtime.draw_height * h / 2) : (l -= this.runtime.width * h / 2, c -= this.runtime.height * h / 2), l = (e - l) / h, c = (t - c) / h;
            var p = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !r && (l /= p, c /= p), n ? l : c
        }, t.prototype.rotatePt = function(e, t, n) {
            if (0 === this.getAngle()) return n ? e : t;
            var r = this.layerToCanvas(e, t, !0),
                i = this.layerToCanvas(e, t, !1);
            this.disableAngle = !0;
            var s = this.canvasToLayer(r, i, !0),
                o = this.canvasToLayer(r, i, !0);
            return this.disableAngle = !1, n ? s : o
        }, t.prototype.saveToJSON = function() {
            var e, t, n, r = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                instances: []
            };
            for (e = 0, t = this.effect_types.length; t > e; e++) n = this.effect_types[e], r.fx.push({
                name: n.name,
                active: n.active,
                params: this.effect_params[n.index]
            });
            return r
        }, t.prototype.loadFromJSON = function(e) {
            var t, r, s;
            this.scale = e.s, this.angle = e.a, this.viewLeft = e.vl, this.viewTop = e.vt, this.viewRight = e.vr, this.viewBottom = e.vb, this.visible = e.v, this.background_color = e.bc, this.transparent = e.t, this.parallaxX = e.px, this.parallaxY = e.py, this.opacity = e.o, this.zoomRate = e.zr;
            var o = e.fx;
            for (t = 0, r = o.length; r > t; t++) s = this.getEffectByName(o[t].name), s && (s.active = o[t].active, this.effect_params[s.index] = o[t].params);
            this.updateActiveEffects(), this.instances.sort(n), this.zindices_stale = !0
        }, cr.layer = t
    }(),
    function() {
        function e(e, t) {
            var n, r = e.length;
            switch (r) {
                case 0:
                    return !0;
                case 1:
                    return e[0] === t[0];
                case 2:
                    return e[0] === t[0] && e[1] === t[1];
                default:
                    for (n = 0; r > n; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
            }
        }

        function t(e, t) {
            return e.index - t.index
        }

        function n(n) {
            var r, i, s, o, u;
            for (2 === n.length ? n[0].index > n[1].index && (o = n[0], n[0] = n[1], n[1] = o) : n.length > 2 && n.sort(t), n.length >= d.length && (d.length = n.length + 1), d[n.length] || (d[n.length] = []), u = d[n.length], r = 0, i = u.length; i > r; r++)
                if (s = u[r], e(n, s)) return s;
            return u.push(n), n
        }

        function r(e, t) {
            this.runtime = e, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = t[0];
            var n = t[1];
            this.events = [];
            var r, i;
            for (r = 0, i = n.length; i > r; r++) this.init_event(n[r], null, this.events)
        }

        function i(e) {
            return cr.plugins_.Sprite && e === cr.plugins_.Sprite.prototype.cnds.OnFrameChanged ? !0 : !1
        }

        function s(e) {
            this.type = e, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function o(e, t, n) {
            this.sheet = e, this.parent = t, this.runtime = e.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, n[1] && (this.group_name = n[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!n[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = n[2], this.sid = n[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var r, i, s = n[5];
            for (r = 0, i = s.length; i > r; r++) {
                var o = new cr.condition(this, s[r]);
                o.index = r, cr.seal(o), this.conditions.push(o), this.addSolModifier(o.type)
            }
            var u = n[6];
            for (r = 0, i = u.length; i > r; r++) {
                var a = new cr.action(this, u[r]);
                a.index = r, cr.seal(a), this.actions.push(a)
            }
            if (8 === n.length) {
                var f = n[7];
                for (r = 0, i = f.length; i > r; r++) this.sheet.init_event(f[r], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function u(e, t) {
            var n, r, i;
            if (e && (-1 === t.indexOf(e) && t.push(e), e.is_contained))
                for (n = 0, r = e.container.length; r > n; n++) i = e.container[n], e !== i && -1 === t.indexOf(i) && t.push(i)
        }

        function a(e, t) {
            if (this.block = e, this.sheet = e.sheet, this.runtime = e.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = t[1], this.trigger = t[3] > 0, this.fasttrigger = 2 === t[3], this.looping = t[4], this.inverted = t[5], this.isstatic = t[6], this.sid = t[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === t[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[t[0]], this.run = this.isstatic ? this.run_static : this.run_object, t[2] ? (this.behaviortype = this.type.getBehaviorByName(t[2]), this.beh_index = this.type.getBehaviorIndexByName(t[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === t.length) {
                var n, r, i = t[9];
                for (n = 0, r = i.length; r > n; n++) {
                    var s = new cr.parameter(this, i[n]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = i.length
            }
        }

        function f(e, t) {
            if (this.block = e, this.sheet = e.sheet, this.runtime = e.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = t[1], -1 === t[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[t[0]], this.run = this.run_object, t[2] ? (this.behaviortype = this.type.getBehaviorByName(t[2]), this.beh_index = this.type.getBehaviorIndexByName(t[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = t[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === t.length) {
                var n, r, i = t[5];
                for (n = 0, r = i.length; r > n; n++) {
                    var s = new cr.parameter(this, i[n]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = i.length
            }
        }

        function l(e, t) {
            this.owner = e, this.block = e.block, this.sheet = e.sheet, this.runtime = e.runtime, this.type = t[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1;
            var n, r, i;
            switch (t[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, t[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, t[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, t[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = t[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[t[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = t[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[t[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = t[1], e.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = t[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = t[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], n = 1, r = t.length; r > n; n++) i = new cr.parameter(this.owner, t[n]), cr.seal(i), this.subparams.push(i), this.variadicret.push(0)
            }
        }

        function c(e, t, n) {
            this.sheet = e, this.parent = t, this.runtime = e.runtime, this.solModifiers = [], this.name = n[1], this.vartype = n[2], this.initial = n[3], this.is_static = !!n[4], this.is_constant = !!n[5], this.sid = n[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.localIndex = this.is_static || this.is_constant ? -1 : this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function h(e, t, n) {
            this.sheet = e, this.parent = t, this.runtime = e.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = n[1], this.active = !0
        }

        function p() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        var d = [];
        r.prototype.toString = function() {
            return this.name
        }, r.prototype.init_event = function(e, t, n) {
            switch (e[0]) {
                case 0:
                    var r = new cr.eventblock(this, t, e);
                    if (cr.seal(r), r.orblock) {
                        n.push(r);
                        var i, s;
                        for (i = 0, s = r.conditions.length; s > i; i++) r.conditions[i].trigger && this.init_trigger(r, i)
                    } else r.is_trigger() ? this.init_trigger(r, 0) : n.push(r);
                    break;
                case 1:
                    var o = new cr.eventvariable(this, t, e);
                    cr.seal(o), n.push(o);
                    break;
                case 2:
                    var u = new cr.eventinclude(this, t, e);
                    cr.seal(u), n.push(u)
            }
        }, r.prototype.postInit = function() {
            var e, t;
            for (e = 0, t = this.events.length; t > e; e++) this.events[e].postInit(t - 1 > e && this.events[e + 1].is_else_block)
        }, r.prototype.updateDeepIncludes = function() {
            this.deep_includes.length = 0, this.already_included_sheets.length = 0, this.addDeepIncludes(this), this.already_included_sheets.length = 0
        }, r.prototype.addDeepIncludes = function(e) {
            var t, n, r, i, s = e.deep_includes,
                o = e.already_included_sheets,
                u = this.includes.valuesRef();
            for (t = 0, n = u.length; n > t; ++t) r = u[t], i = r.include_sheet, !r.isActive() || e === i || o.indexOf(i) > -1 || (o.push(i), i.addDeepIncludes(e), s.push(i))
        }, r.prototype.run = function(e) {
            this.runtime.resuming_breakpoint || (this.hasRun = !0, e || (this.runtime.isRunningEvents = !0));
            var t, n;
            for (t = 0, n = this.events.length; n > t; t++) {
                var r = this.events[t];
                r.run(), this.runtime.clearSol(r.solModifiers), (!this.runtime.deathRow.isEmpty() || this.runtime.createRow.length) && this.runtime.ClearDeathRow()
            }
            e || (this.runtime.isRunningEvents = !1)
        }, r.prototype.init_trigger = function(e, t) {
            e.orblock || this.runtime.triggers_to_postinit.push(e);
            var n, r, s, o = e.conditions[t];
            s = o.type ? o.type.name : "system";
            var u = o.fasttrigger,
                a = u ? this.fasttriggers : this.triggers;
            a[s] || (a[s] = []);
            var f = a[s],
                l = o.func;
            if (u) {
                if (!o.parameters.length) return;
                var c = o.parameters[0];
                if (1 !== c.type || 2 !== c.expression.type) return;
                var h, n, r, p = c.expression.value.toLowerCase();
                for (n = 0, r = f.length; r > n; n++)
                    if (f[n].method == l) return h = f[n].evs, void(h[p] ? h[p].push([e, t]) : h[p] = [
                        [e, t]
                    ]);
                h = {}, h[p] = [
                    [e, t]
                ], f.push({
                    method: l,
                    evs: h
                })
            } else {
                for (n = 0, r = f.length; r > n; n++)
                    if (f[n].method == l) return void f[n].evs.push([e, t]);
                i(l) ? f.unshift({
                    method: l,
                    evs: [
                        [e, t]
                    ]
                }) : f.push({
                    method: l,
                    evs: [
                        [e, t]
                    ]
                })
            }
        }, cr.eventsheet = r, s.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, s.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, s.prototype.pick_one = function(e) {
            if (e)
                if (e.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (this.instances.length = 0, cr.shallowAssignArray(this.else_instances, e.type.instances), this.select_all = !1);
                    var t = this.else_instances.indexOf(e); - 1 !== t && (this.instances.push(this.else_instances[t]), this.else_instances.splice(t, 1))
                } else this.select_all = !1, this.instances.length = 1, this.instances[0] = e
        }, cr.selection = s, window._c2hh_ = "AC4DF46CAE0946F0F6CAE2315999B12F27257076", o.prototype.postInit = function(e) {
            var t, r, i = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; i;) {
                    if (!i.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    i = i.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!e, this.solModifiersIncludingParents = this.solModifiers.slice(0), i = this.parent; i;) {
                for (t = 0, r = i.solModifiers.length; r > t; t++) this.addParentSolModifier(i.solModifiers[t]);
                i = i.parent
            }
            this.solModifiers = n(this.solModifiers), this.solModifiersIncludingParents = n(this.solModifiersIncludingParents);
            var t, r;
            for (t = 0, r = this.conditions.length; r > t; t++) this.conditions[t].postInit();
            for (t = 0, r = this.actions.length; r > t; t++) this.actions[t].postInit();
            for (t = 0, r = this.subevents.length; r > t; t++) this.subevents[t].postInit(r - 1 > t && this.subevents[t + 1].is_else_block)
        }, o.prototype.setGroupActive = function(e) {
            if (this.group_active !== !!e) {
                this.group_active = !!e;
                var t, n;
                for (t = 0, n = this.contained_includes.length; n > t; ++t) this.contained_includes[t].updateActive();
                n > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, o.prototype.addSolModifier = function(e) {
            u(e, this.solModifiers)
        }, o.prototype.addParentSolModifier = function(e) {
            u(e, this.solModifiersIncludingParents)
        }, o.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, o.prototype.is_trigger = function() {
            return this.conditions.length ? this.conditions[0].trigger : !1
        }, o.prototype.run = function() {
            var e, t, n = !1,
                r = this.runtime,
                i = this.runtime.getCurrentEventStack();
            i.current_event = this;
            var s = this.conditions;
            if (this.is_else_block || (i.else_branch_ran = !1), this.orblock) {
                for (0 === s.length && (n = !0), i.cndindex = 0, e = s.length; i.cndindex < e; i.cndindex++) s[i.cndindex].trigger || (t = s[i.cndindex].run(), t && (n = !0));
                i.last_event_true = n, n && this.run_actions_and_subevents()
            } else {
                for (i.cndindex = 0, e = s.length; i.cndindex < e; i.cndindex++)
                    if (t = s[i.cndindex].run(), !t) return i.last_event_true = !1, void(!this.toplevelevent || r.deathRow.isEmpty() && !r.createRow.length || r.ClearDeathRow());
                i.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(i)
        }, o.prototype.end_run = function(e) {
            e.last_event_true && this.has_else_block && (e.else_branch_ran = !0), !this.toplevelevent || this.runtime.deathRow.isEmpty() && !this.runtime.createRow.length || this.runtime.ClearDeathRow()
        }, o.prototype.run_orblocktrigger = function(e) {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this, this.conditions[e].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, o.prototype.run_actions_and_subevents = function() {
            var e, t = this.runtime.getCurrentEventStack();
            for (t.actindex = 0, e = this.actions.length; t.actindex < e; t.actindex++)
                if (this.actions[t.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.resume_actions_and_subevents = function() {
            var e, t = this.runtime.getCurrentEventStack();
            for (e = this.actions.length; t.actindex < e; t.actindex++)
                if (this.actions[t.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var e, t, n, r, i = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (e = 0, t = this.subevents.length; t > e; e++) n = this.subevents[e], r = !this.toplevelgroup || !this.group && i > e, r && this.runtime.pushCopySol(n.solModifiers), n.run(), r ? this.runtime.popSol(n.solModifiers) : this.runtime.clearSol(n.solModifiers);
                else
                    for (e = 0, t = this.subevents.length; t > e; e++) this.subevents[e].run();
                this.runtime.popEventStack()
            }
        }, o.prototype.run_pretrigger = function() {
            var e = this.runtime.getCurrentEventStack();
            e.current_event = this;
            var t, n = !1;
            for (e.cndindex = 0, t = this.conditions.length; e.cndindex < t; e.cndindex++)
                if (this.conditions[e.cndindex].run()) n = !0;
                else if (!this.orblock) return !1;
            return this.orblock ? n : !0
        }, o.prototype.retrigger = function() {
            this.runtime.execcount++;
            var e, t = this.runtime.getCurrentEventStack().cndindex,
                n = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (n.cndindex = t + 1, e = this.conditions.length; n.cndindex < e; n.cndindex++)
                    if (!this.conditions[n.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, o.prototype.isFirstConditionOfType = function(e) {
            var t = e.index;
            if (0 === t) return !0;
            for (--t; t >= 0; --t)
                if (this.conditions[t].type === e.type) return !1;
            return !0
        }, cr.eventblock = o, a.prototype.postInit = function() {
            var e, t, n;
            for (e = 0, t = this.parameters.length; t > e; e++) n = this.parameters[e], n.postInit(), n.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, a.prototype.run_true = function() {
            return !0
        }, a.prototype.run_system = function() {
            var e, t;
            for (e = 0, t = this.parameters.length; t > e; e++) this.results[e] = this.parameters[e].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, a.prototype.run_static = function() {
            var e, t;
            for (e = 0, t = this.parameters.length; t > e; e++) this.results[e] = this.parameters[e].get();
            var n = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), n
        }, a.prototype.run_object = function() {
            var e, t, n, r, i, s, o, u, a, f, l, c, h, p = this.type,
                d = p.getCurrentSol(),
                v = this.block.orblock && !this.trigger,
                m = 0,
                g = p.is_contained,
                y = p.is_family,
                b = p.family_index,
                w = this.beh_index,
                E = w > -1,
                S = this.anyParamVariesPerInstance,
                x = this.parameters,
                T = this.results,
                N = this.inverted,
                C = this.func;
            if (S)
                for (t = 0, i = x.length; i > t; ++t) s = x[t], s.variesPerInstance || (T[t] = s.get(0));
            else
                for (t = 0, i = x.length; i > t; ++t) T[t] = x[t].get(0); if (d.select_all) {
                for (d.instances.length = 0, d.else_instances.length = 0, c = p.instances, e = 0, r = c.length; r > e; ++e) {
                    if (a = c[e], S)
                        for (t = 0, i = x.length; i > t; ++t) s = x[t], s.variesPerInstance && (T[t] = s.get(e));
                    E ? (m = 0, y && (m = a.type.family_beh_map[b]), o = C.apply(a.behavior_insts[w + m], T)) : o = C.apply(a, T), u = cr.xor(o, N), u ? d.instances.push(a) : v && d.else_instances.push(a)
                }
                return p.finish && p.finish(!0), d.select_all = !1, p.applySolToContainer(), d.hasObjects()
            }
            n = 0;
            var k = v && !this.block.isFirstConditionOfType(this);
            c = k ? d.else_instances : d.instances;
            var L = !1;
            for (e = 0, r = c.length; r > e; ++e) {
                if (a = c[e], S)
                    for (t = 0, i = x.length; i > t; ++t) s = x[t], s.variesPerInstance && (T[t] = s.get(e));
                if (E ? (m = 0, y && (m = a.type.family_beh_map[b]), o = C.apply(a.behavior_insts[w + m], T)) : o = C.apply(a, T), cr.xor(o, N))
                    if (L = !0, k) {
                        if (d.instances.push(a), g)
                            for (t = 0, i = a.siblings.length; i > t; t++) f = a.siblings[t], f.type.getCurrentSol().instances.push(f)
                    } else {
                        if (c[n] = a, g)
                            for (t = 0, i = a.siblings.length; i > t; t++) f = a.siblings[t], f.type.getCurrentSol().instances[n] = f;
                        n++
                    } else if (k) {
                    if (c[n] = a, g)
                        for (t = 0, i = a.siblings.length; i > t; t++) f = a.siblings[t], f.type.getCurrentSol().else_instances[n] = f;
                    n++
                } else if (v && (d.else_instances.push(a), g))
                    for (t = 0, i = a.siblings.length; i > t; t++) f = a.siblings[t], f.type.getCurrentSol().else_instances.push(f)
            }
            if (c.length = n, g)
                for (h = p.container, e = 0, r = h.length; r > e; e++) l = h[e].getCurrentSol(), k ? l.else_instances.length = n : l.instances.length = n;
            var A = L;
            if (k && !L)
                for (e = 0, r = d.instances.length; r > e; e++) {
                    if (a = d.instances[e], S)
                        for (t = 0, i = x.length; i > t; t++) s = x[t], s.variesPerInstance && (T[t] = s.get(e));
                    if (o = E ? C.apply(a.behavior_insts[w], T) : C.apply(a, T), cr.xor(o, N)) {
                        L = !0;
                        break
                    }
                }
            return p.finish && p.finish(A || v), v ? L : d.hasObjects()
        }, cr.condition = a, f.prototype.postInit = function() {
            var e, t, n;
            for (e = 0, t = this.parameters.length; t > e; e++) n = this.parameters[e], n.postInit(), n.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, f.prototype.run_system = function() {
            var e, t;
            for (e = 0, t = this.parameters.length; t > e; e++) this.results[e] = this.parameters[e].get();
            return this.func.apply(this.runtime.system, this.results)
        }, f.prototype.run_object = function() {
            var e, t, n, r, i, s, o, u = this.type.getCurrentSol().getObjects(),
                a = this.type.is_family,
                f = this.type.family_index,
                l = this.beh_index,
                c = l > -1,
                h = this.anyParamVariesPerInstance,
                p = this.parameters,
                d = this.results,
                v = this.func;
            if (h)
                for (t = 0, r = p.length; r > t; ++t) i = p[t], i.variesPerInstance || (d[t] = i.get(0));
            else
                for (t = 0, r = p.length; r > t; ++t) d[t] = p[t].get(0);
            for (e = 0, n = u.length; n > e; ++e) {
                if (s = u[e], h)
                    for (t = 0, r = p.length; r > t; ++t) i = p[t], i.variesPerInstance && (d[t] = i.get(e));
                c ? (o = 0, a && (o = s.type.family_beh_map[f]), v.apply(s.behavior_insts[l + o], d)) : v.apply(s, d)
            }
            return !1
        }, cr.action = f;
        var v = [],
            m = -1;
        l.prototype.postInit = function() {
            var e, t;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (e = 0, t = this.subparams.length; t > e; e++) this.subparams[e].postInit();
            this.expression && this.expression.postInit()
        }, l.prototype.maybeVaryForType = function(e) {
            return !this.variesPerInstance && e ? e.plugin.singleglobal ? void 0 : void(this.variesPerInstance = !0) : void 0
        }, l.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, l.prototype.pushTempValue = function() {
            return m++, v.length === m && v.push(new cr.expvalue), v[m]
        }, l.prototype.popTempValue = function() {
            m--
        }, l.prototype.get_exp = function(e) {
            this.solindex = e || 0;
            var t = this.pushTempValue();
            return this.expression.get(t), this.popTempValue(), t.data
        }, l.prototype.get_exp_str = function(e) {
            this.solindex = e || 0;
            var t = this.pushTempValue();
            return this.expression.get(t), this.popTempValue(), cr.is_string(t.data) ? t.data : ""
        }, l.prototype.get_object = function() {
            return this.object
        }, l.prototype.get_combosel = function() {
            return this.combosel
        }, l.prototype.get_layer = function(e) {
            this.solindex = e || 0;
            var t = this.pushTempValue();
            return this.expression.get(t), this.popTempValue(), t.is_number() ? this.runtime.getLayerByNumber(t.data) : this.runtime.getLayerByName(t.data)
        }, l.prototype.get_layout = function() {
            return this.layout
        }, l.prototype.get_key = function() {
            return this.key
        }, l.prototype.get_instvar = function() {
            return this.index
        }, l.prototype.get_familyvar = function(e) {
            var t = e || 0,
                n = this.owner.type,
                r = null,
                i = n.getCurrentSol(),
                s = i.getObjects();
            if (s.length) r = s[t % s.length].type;
            else if (i.else_instances.length) r = i.else_instances[t % i.else_instances.length].type;
            else {
                if (!n.instances.length) return 0;
                r = n.instances[t % n.instances.length].type
            }
            return this.index + r.family_var_map[n.family_index]
        }, l.prototype.get_eventvar = function() {
            return this.eventvar
        }, l.prototype.get_audiofile = function() {
            return this.fileinfo
        }, l.prototype.get_variadic = function() {
            var e, t;
            for (e = 0, t = this.subparams.length; t > e; e++) this.variadicret[e] = this.subparams[e].get();
            return this.variadicret
        }, cr.parameter = l, c.prototype.postInit = function() {
            this.solModifiers = n(this.solModifiers)
        }, c.prototype.setValue = function(e) {
            var t = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && t ? (this.localIndex >= t.length && (t.length = this.localIndex + 1), t[this.localIndex] = e) : this.data = e
        }, c.prototype.getValue = function() {
            var e = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !e || this.is_constant ? this.data : this.localIndex >= e.length ? this.initial : "undefined" == typeof e[this.localIndex] ? this.initial : e[this.localIndex]
        }, c.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = c, h.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, h.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = n(this.solModifiers);
            for (var e = this.parent; e;) e.group && e.contained_includes.push(this), e = e.parent;
            this.updateActive()
        }, h.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, h.prototype.updateActive = function() {
            for (var e = this.parent; e;) {
                if (e.group && !e.group_active) return void(this.active = !1);
                e = e.parent
            }
            this.active = !0
        }, h.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = h, p.prototype.reset = function(e) {
            this.current_event = e, this.cndindex = 0, this.actindex = 0, this.temp_parents_arr.length = 0, this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, p.prototype.isModifierAfterCnds = function() {
            return this.current_event.solWriterAfterCnds ? !0 : this.cndindex < this.current_event.conditions.length - 1 ? !!this.current_event.solModifiers.length : !1
        }, cr.eventStackFrame = p
    }(),
    function() {
        function e(e, t) {
            this.owner = e, this.runtime = e.runtime, this.type = t[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_behavior_exp, this.eval_instvar_exp, this.eval_object_behavior_exp, this.eval_eventvar_exp][this.type];
            var n = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = t[1];
                    break;
                case 3:
                    this.first = new cr.expNode(e, t[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(e, t[1]), this.second = new cr.expNode(e, t[2]), this.third = new cr.expNode(e, t[3]);
                    break;
                case 19:
                    this.func = t[1], (this.func === cr.system_object.prototype.exps.random || this.func === cr.system_object.prototype.exps.choose) && this.owner.setVaries(), this.results = [], this.parameters = [], 3 === t.length ? (n = t[2], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[t[1]], this.beh_index = -1, this.func = t[2], this.return_string = t[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), this.instance_expr = t[4] ? new cr.expNode(e, t[4]) : null, this.results = [], this.parameters = [], 6 === t.length ? (n = t[5], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[t[1]], this.return_string = t[2], this.instance_expr = t[3] ? new cr.expNode(e, t[3]) : null, this.varindex = t[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[t[1]], this.behavior_type = this.object_type.getBehaviorByName(t[2]), this.beh_index = this.object_type.getBehaviorIndexByName(t[2]), this.func = t[3], this.return_string = t[4], this.instance_expr = t[5] ? new cr.expNode(e, t[5]) : null, this.results = [], this.parameters = [], 7 === t.length ? (n = t[6], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = t[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(e, t[1]), this.second = new cr.expNode(e, t[2])), n) {
                var r, i;
                for (r = 0, i = n.length; i > r; r++) this.parameters.push(new cr.expNode(e, n[r]))
            }
            cr.seal(this)
        }

        function t(e, t) {
            this.type = e || cr.exptype.Integer, this.data = t || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        e.prototype.postInit = function() {
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters) {
                var e, t;
                for (e = 0, t = this.parameters.length; t > e; e++) this.parameters[e].postInit()
            }
        }, e.prototype.eval_system_exp = function(e) {
            this.results[0] = e;
            var t, n, r = this.owner.pushTempValue();
            for (t = 0, n = this.parameters.length; n > t; t++) this.parameters[t].get(r), this.results[t + 1] = r.data;
            this.owner.popTempValue(), this.func.apply(this.runtime.system, this.results)
        }, e.prototype.eval_object_behavior_exp = function(e) {
            var t = this.object_type.getCurrentSol(),
                n = t.getObjects();
            if (!n.length) {
                if (!t.else_instances.length) return void(this.return_string ? e.set_string("") : e.set_int(0));
                n = t.else_instances
            }
            this.results[0] = e, e.object_class = this.object_type;
            var r, i, s = this.owner.pushTempValue();
            for (r = 0, i = this.parameters.length; i > r; r++) this.parameters[r].get(s), this.results[r + 1] = s.data;
            var o = this.owner.solindex;
            this.instance_expr && (this.instance_expr.get(s), s.is_number() && (o = s.data, n = this.object_type.instances)), this.owner.popTempValue(), o %= n.length, 0 > o && (o += n.length);
            var u, a = n[o];
            if (this.beh_index > -1) {
                var f = 0;
                this.object_type.is_family && (f = a.type.family_beh_map[this.object_type.family_index]), u = this.func.apply(a.behavior_insts[this.beh_index + f], this.results)
            } else u = this.func.apply(a, this.results)
        }, e.prototype.eval_instvar_exp = function(e) {
            var t = this.object_type.getCurrentSol(),
                n = t.getObjects();
            if (!n.length) {
                if (!t.else_instances.length) return void(this.return_string ? e.set_string("") : e.set_int(0));
                n = t.else_instances
            }
            var r = this.owner.solindex;
            if (this.instance_expr) {
                var i = this.owner.pushTempValue();
                if (this.instance_expr.get(i), i.is_number()) {
                    r = i.data;
                    var s = this.object_type.instances;
                    r %= s.length, 0 > r && (r += s.length);
                    var o = s[r].instance_vars[this.varindex];
                    return cr.is_string(o) ? e.set_string(o) : e.set_float(o), void this.owner.popTempValue()
                }
                this.owner.popTempValue()
            }
            r %= n.length, 0 > r && (r += n.length);
            var u = n[r],
                a = 0;
            this.object_type.is_family && (a = u.type.family_var_map[this.object_type.family_index]);
            var o = u.instance_vars[this.varindex + a];
            cr.is_string(o) ? e.set_string(o) : e.set_float(o)
        }, e.prototype.eval_int = function(e) {
            e.type = cr.exptype.Integer, e.data = this.value
        }, e.prototype.eval_float = function(e) {
            e.type = cr.exptype.Float, e.data = this.value
        }, e.prototype.eval_string = function(e) {
            e.type = cr.exptype.String, e.data = this.value
        }, e.prototype.eval_unaryminus = function(e) {
            this.first.get(e), e.is_number() && (e.data = -e.data)
        }, e.prototype.eval_add = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data += t.data, t.is_float() && e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_subtract = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data -= t.data, t.is_float() && e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_multiply = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data *= t.data, t.is_float() && e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_divide = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data /= t.data, e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_mod = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data %= t.data, t.is_float() && e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_power = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && (e.data = Math.pow(e.data, t.data), t.is_float() && e.make_float()), this.owner.popTempValue()
        }, e.prototype.eval_and = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() ? t.is_string() ? e.set_string(e.data.toString() + t.data) : e.set_int(e.data && t.data ? 1 : 0) : e.is_string() && (e.data += t.is_string() ? t.data : (Math.round(1e10 * t.data) / 1e10).toString()), this.owner.popTempValue()
        }, e.prototype.eval_or = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.is_number() && t.is_number() && e.set_int(e.data || t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_conditional = function(e) {
            this.first.get(e), e.data ? this.second.get(e) : this.third.get(e)
        }, e.prototype.eval_equal = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data === t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_notequal = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data !== t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_less = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data < t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_lessequal = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data <= t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_greater = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data > t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_greaterequal = function(e) {
            this.first.get(e);
            var t = this.owner.pushTempValue();
            this.second.get(t), e.set_int(e.data >= t.data ? 1 : 0), this.owner.popTempValue()
        }, e.prototype.eval_eventvar_exp = function(e) {
            var t = this.eventvar.getValue();
            cr.is_number(t) ? e.set_float(t) : e.set_string(t)
        }, cr.expNode = e, t.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, t.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, t.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, t.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, t.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, t.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, t.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, t.prototype.set_int = function(e) {
            this.type = cr.exptype.Integer, this.data = Math.floor(e)
        }, t.prototype.set_float = function(e) {
            this.type = cr.exptype.Float, this.data = e
        }, t.prototype.set_string = function(e) {
            this.type = cr.exptype.String, this.data = e
        }, t.prototype.set_any = function(e) {
            cr.is_number(e) ? (this.type = cr.exptype.Float, this.data = e) : cr.is_string(e) ? (this.type = cr.exptype.String, this.data = e.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = t, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(e) {
        this.runtime = e, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var e, t, n, r, i, s, o, u, a = {};
        a.waits = [];
        var f, l = a.waits;
        for (e = 0, t = this.waits.length; t > e; e++) {
            for (s = this.waits[e], f = {
                t: s.time,
                st: s.signaltag,
                s: s.signalled,
                ev: s.ev.sid,
                sm: [],
                sols: {}
            }, s.ev.actions[s.actindex] && (f.act = s.ev.actions[s.actindex].sid), n = 0, r = s.solModifiers.length; r > n; n++) f.sm.push(s.solModifiers[n].sid);
            for (i in s.sols)
                if (s.sols.hasOwnProperty(i)) {
                    for (o = this.runtime.types_by_index[parseInt(i, 10)], u = {
                        sa: s.sols[i].sa,
                        insts: []
                    }, n = 0, r = s.sols[i].insts.length; r > n; n++) u.insts.push(s.sols[i].insts[n].uid);
                    f.sols[o.sid.toString()] = u
                }
            l.push(f)
        }
        return a
    }, cr.system_object.prototype.loadFromJSON = function(e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d = e.waits;
        for (this.waits.length = 0, t = 0, n = d.length; n > t; t++)
            if (o = d[t], a = this.runtime.blocksBySid[o.ev.toString()]) {
                for (f = -1, r = 0, i = a.actions.length; i > r; r++)
                    if (a.actions[r].sid === o.act) {
                        f = r;
                        break
                    }
                if (-1 !== f) {
                    for (u = {}, u.sols = {}, u.solModifiers = [], u.deleteme = !1, u.time = o.t, u.signaltag = o.st || "", u.signalled = !!o.s, u.ev = a, u.actindex = f, r = 0, i = o.sm.length; i > r; r++) l = this.runtime.getObjectTypeBySid(o.sm[r]), l && u.solModifiers.push(l);
                    for (s in o.sols)
                        if (o.sols.hasOwnProperty(s)) {
                            if (l = this.runtime.getObjectTypeBySid(parseInt(s, 10)), !l) continue;
                            for (c = o.sols[s], h = {
                                sa: c.sa,
                                insts: []
                            }, r = 0, i = c.insts.length; i > r; r++) p = this.runtime.getObjectByUID(c.insts[r]), p && h.insts.push(p);
                            u.sols[l.index.toString()] = h
                        }
                    this.waits.push(u)
                }
            }
    },
    function() {
        function e() {}

        function t(e, t) {
            var n = e.extra.c2_foreachordered_val,
                r = t.extra.c2_foreachordered_val;
            return cr.is_number(n) && cr.is_number(r) ? n - r : (n = "" + n, r = "" + r, r > n ? -1 : n > r ? 1 : 0)
        }

        function n(e, t) {
            return p && e === d && t === v || (p = new RegExp(e, t), d = e, v = t), p.lastIndex = 0, p
        }

        function r() {}

        function i() {
            var e;
            return g.length ? e = g.pop() : (e = {}, e.sols = {}, e.solModifiers = []), e.deleteme = !1, e
        }

        function s(e) {
            cr.wipe(e.sols), e.solModifiers.length = 0, g.push(e)
        }

        function o() {
            var e;
            return y.length ? e = y.pop() : (e = {}, e.insts = []), e.sa = !1, e
        }

        function u(e) {
            e.insts.length = 0, y.push(e)
        }

        function a() {}

        function f(e, t, r) {
            if (e !== w || t !== E || r !== S) {
                var i = n(t, r);
                b = e.match(i), w = e, E = t, S = r
            }
        }
        var l = cr.system_object.prototype;
        e.prototype.EveryTick = function() {
            return !0
        }, e.prototype.OnLayoutStart = function() {
            return !0
        }, e.prototype.OnLayoutEnd = function() {
            return !0
        }, e.prototype.Compare = function(e, t, n) {
            return cr.do_cmp(e, t, n)
        }, e.prototype.CompareTime = function(e, t) {
            var n = this.runtime.kahanTime.sum;
            if (0 === e) {
                var r = this.runtime.getCurrentCondition();
                return !r.extra.CompareTime_executed && n >= t ? (r.extra.CompareTime_executed = !0, !0) : !1
            }
            return cr.do_cmp(n, e, t)
        }, e.prototype.LayerVisible = function(e) {
            return e ? e.visible : !1
        }, e.prototype.LayerCmpOpacity = function(e, t, n) {
            return e ? cr.do_cmp(100 * e.opacity, t, n) : !1
        }, e.prototype.Repeat = function(e) {
            var t, n = this.runtime.getCurrentEventStack(),
                r = n.current_event,
                i = n.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (i)
                for (t = 0; e > t && !s.stopped; t++) this.runtime.pushCopySol(r.solModifiers), s.index = t, r.retrigger(), this.runtime.popSol(r.solModifiers);
            else
                for (t = 0; e > t && !s.stopped; t++) s.index = t, r.retrigger();
            return this.runtime.popLoopStack(), !1
        }, e.prototype.While = function() {
            var e, t = this.runtime.getCurrentEventStack(),
                n = t.current_event,
                r = t.isModifierAfterCnds(),
                i = this.runtime.pushLoopStack();
            if (r)
                for (e = 0; !i.stopped; e++) this.runtime.pushCopySol(n.solModifiers), i.index = e, n.retrigger() || (i.stopped = !0), this.runtime.popSol(n.solModifiers);
            else
                for (e = 0; !i.stopped; e++) i.index = e, n.retrigger() || (i.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, e.prototype.For = function(e, t, n) {
            var r, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                o = i.isModifierAfterCnds(),
                u = this.runtime.pushLoopStack(e);
            if (t > n)
                if (o)
                    for (r = t; r >= n && !u.stopped; --r) this.runtime.pushCopySol(s.solModifiers), u.index = r, s.retrigger(), this.runtime.popSol(s.solModifiers);
                else
                    for (r = t; r >= n && !u.stopped; --r) u.index = r, s.retrigger();
            else if (o)
                for (r = t; n >= r && !u.stopped; ++r) this.runtime.pushCopySol(s.solModifiers), u.index = r, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (r = t; n >= r && !u.stopped; ++r) u.index = r, s.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var c = [],
            h = -1;
        e.prototype.ForEach = function(e) {
            var t = e.getCurrentSol();
            h++, c.length === h && c.push([]);
            var n = c[h];
            cr.shallowAssignArray(n, t.getObjects());
            var r, i, s, o, u, a, f, l = this.runtime.getCurrentEventStack(),
                p = l.current_event,
                d = l.isModifierAfterCnds(),
                v = this.runtime.pushLoopStack(),
                m = e.is_contained;
            if (d)
                for (r = 0, i = n.length; i > r && !v.stopped; r++) {
                    if (this.runtime.pushCopySol(p.solModifiers), u = n[r], t = e.getCurrentSol(), t.select_all = !1, t.instances.length = 1, t.instances[0] = u, m)
                        for (s = 0, o = u.siblings.length; o > s; s++) a = u.siblings[s], f = a.type.getCurrentSol(), f.select_all = !1, f.instances.length = 1, f.instances[0] = a;
                    v.index = r, p.retrigger(), this.runtime.popSol(p.solModifiers)
                } else
                    for (t.select_all = !1, t.instances.length = 1, r = 0, i = n.length; i > r && !v.stopped; r++) {
                        if (u = n[r], t.instances[0] = u, m)
                            for (s = 0, o = u.siblings.length; o > s; s++) a = u.siblings[s], f = a.type.getCurrentSol(), f.select_all = !1, f.instances.length = 1, f.instances[0] = a;
                        v.index = r, p.retrigger()
                    }
            return n.length = 0, this.runtime.popLoopStack(), h--, !1
        }, e.prototype.ForEachOrdered = function(e, n, r) {
            var i = e.getCurrentSol();
            h++, c.length === h && c.push([]);
            var s = c[h];
            cr.shallowAssignArray(s, i.getObjects());
            var o, u, a, f, l, p, d, v = this.runtime.getCurrentEventStack(),
                m = v.current_event,
                g = this.runtime.getCurrentCondition(),
                y = v.isModifierAfterCnds(),
                b = this.runtime.pushLoopStack();
            for (o = 0, u = s.length; u > o; o++) s[o].extra.c2_foreachordered_val = g.parameters[1].get(o);
            s.sort(t), 1 === r && s.reverse();
            var w = e.is_contained;
            if (y)
                for (o = 0, u = s.length; u > o && !b.stopped; o++) {
                    if (this.runtime.pushCopySol(m.solModifiers), l = s[o], i = e.getCurrentSol(), i.select_all = !1, i.instances.length = 1, i.instances[0] = l, w)
                        for (a = 0, f = l.siblings.length; f > a; a++) p = l.siblings[a], d = p.type.getCurrentSol(), d.select_all = !1, d.instances.length = 1, d.instances[0] = p;
                    b.index = o, m.retrigger(), this.runtime.popSol(m.solModifiers)
                } else
                    for (i.select_all = !1, i.instances.length = 1, o = 0, u = s.length; u > o && !b.stopped; o++) {
                        if (l = s[o], i.instances[0] = l, w)
                            for (a = 0, f = l.siblings.length; f > a; a++) p = l.siblings[a], d = p.type.getCurrentSol(), d.select_all = !1, d.instances.length = 1, d.instances[0] = p;
                        b.index = o, m.retrigger()
                    }
            return s.length = 0, this.runtime.popLoopStack(), h--, !1
        }, e.prototype.PickByComparison = function(e, t, n, r) {
            var i, s, o, u;
            if (e) {
                h++, c.length === h && c.push([]);
                var a = c[h],
                    f = e.getCurrentSol();
                cr.shallowAssignArray(a, f.getObjects()), f.select_all && (f.else_instances.length = 0);
                var l = this.runtime.getCurrentCondition();
                for (i = 0, o = 0, s = a.length; s > i; i++) u = a[i], a[o] = u, t = l.parameters[1].get(i), r = l.parameters[3].get(i), cr.do_cmp(t, n, r) ? o++ : f.else_instances.push(u);
                return a.length = o, f.select_all = !1, cr.shallowAssignArray(f.instances, a), a.length = 0, h--, e.applySolToContainer(), !!f.instances.length
            }
        }, e.prototype.PickByEvaluate = function(e, t) {
            var n, r, i, s;
            if (e) {
                h++, c.length === h && c.push([]);
                var o = c[h],
                    u = e.getCurrentSol();
                cr.shallowAssignArray(o, u.getObjects()), u.select_all && (u.else_instances.length = 0);
                var a = this.runtime.getCurrentCondition();
                for (n = 0, i = 0, r = o.length; r > n; n++) s = o[n], o[i] = s, t = a.parameters[1].get(n), t ? i++ : u.else_instances.push(s);
                return o.length = i, u.select_all = !1, cr.shallowAssignArray(u.instances, o), o.length = 0, h--, e.applySolToContainer(), !!u.instances.length
            }
        }, e.prototype.TriggerOnce = function() {
            var e = this.runtime.getCurrentCondition().extra;
            "undefined" == typeof e.TriggerOnce_lastTick && (e.TriggerOnce_lastTick = -1);
            var t = e.TriggerOnce_lastTick,
                n = this.runtime.tickcount;
            return e.TriggerOnce_lastTick = n, this.runtime.layout_first_tick || t !== n - 1
        }, e.prototype.Every = function(e) {
            var t = this.runtime.getCurrentCondition(),
                n = t.extra.Every_lastTime || 0,
                r = this.runtime.kahanTime.sum;
            "undefined" == typeof t.extra.Every_seconds && (t.extra.Every_seconds = e);
            var i = t.extra.Every_seconds;
            return r >= n + i ? (t.extra.Every_lastTime = n + i, r >= t.extra.Every_lastTime + .04 && (t.extra.Every_lastTime = r), t.extra.Every_seconds = e, !0) : (n - .1 > r && (t.extra.Every_lastTime = r), !1)
        }, e.prototype.PickNth = function(e, t) {
            if (!e) return !1;
            var n = e.getCurrentSol(),
                r = n.getObjects();
            if (t = cr.floor(t), 0 > t || t >= r.length) return !1;
            var i = r[t];
            return n.pick_one(i), e.applySolToContainer(), !0
        }, e.prototype.PickRandom = function(e) {
            if (!e) return !1;
            var t = e.getCurrentSol(),
                n = t.getObjects(),
                r = cr.floor(Math.random() * n.length);
            if (r >= n.length) return !1;
            var i = n[r];
            return t.pick_one(i), e.applySolToContainer(), !0
        }, e.prototype.CompareVar = function(e, t, n) {
            if (e.name.indexOf("Score") >= 0) {
                var r = 0,
                    i = e.name.substring(5);
                r = e.data > n ? e.data : n;
                for (var s = [
                    ["Normal", "普通难度"],
                    ["Nightmare", "噩梦"],
                    ["Hell", "地狱"],
                    ["Inferno", "炼狱"],
                    ["Impossible", "自虐难度"]
                ], o = 0, u = 0; u < s.length; u++) i == s[u][0] && (i = s[u][1], o = u + 2);
                var a = i;
                clearTimeout(g9param.resetId);
                g9param.resetId = setTimeout(resetdpsubmit, 1e3);
                if (!g9param.issubmit) {
                    g9param.issubmit = true;
                    if (a == "自虐难度") {
                        window.myPlayGameScore = e.data;
                        window.myPlayGameHead = 5;
                        // updateShare(window.myPlayGameHead, window.myPlayGameScore);
                        // Play68.setRankingLevelScoreDesc(window.myPlayGameHead, window.myPlayGameScore)
                    } else if (a == "炼狱") {
                        window.myPlayGameScore = e.data;
                        window.myPlayGameHead = 4;
                        // updateShare(window.myPlayGameHead, window.myPlayGameScore);
                        // Play68.setRankingLevelScoreDesc(window.myPlayGameHead, window.myPlayGameScore)
                    } else if (a == "地狱") {
                        window.myPlayGameScore = e.data;
                        window.myPlayGameHead = 3;
                        // updateShare(window.myPlayGameHead, window.myPlayGameScore);
                        // Play68.setRankingLevelScoreDesc(window.myPlayGameHead, window.myPlayGameScore)
                    } else if (a == "噩梦") {
                        window.myPlayGameScore = e.data;
                        window.myPlayGameHead = 2;
                        // updateShare(window.myPlayGameHead, window.myPlayGameScore);
                        // Play68.setRankingLevelScoreDesc(window.myPlayGameHead, window.myPlayGameScore)
                    } else if (a == "普通难度") {
                        window.myPlayGameScore = e.data;
                        window.myPlayGameHead = 1;
                        // updateShare(window.myPlayGameHead, window.myPlayGameScore);
                        // Play68.setRankingLevelScoreDesc(window.myPlayGameHead, window.myPlayGameScore)
                    }
                }
            }
            return cr.do_cmp(e.getValue(), t, n)
        }, e.prototype.IsGroupActive = function(e) {
            var t = this.runtime.groups_by_name[e.toLowerCase()];
            return t && t.group_active
        }, e.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, e.prototype.PickAll = function(e) {
            if (!e) return !1;
            if (!e.instances.length) return !1;
            var t = e.getCurrentSol();
            return t.select_all = !0, e.applySolToContainer(), !0
        }, e.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, e.prototype.CompareBetween = function(e, t, n) {
            return e >= t && n >= e
        }, e.prototype.Else = function() {
            var e = this.runtime.getCurrentEventStack();
            return e.else_branch_ran ? !1 : !e.last_event_true
        }, e.prototype.OnLoadFinished = function() {
            return !0
        }, e.prototype.OnCanvasSnapshot = function() {
            return !0
        }, e.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, e.prototype.OnSaveComplete = function() {
            return !0
        }, e.prototype.OnLoadComplete = function() {
            return !0
        }, e.prototype.OnLoadFailed = function() {
            return !0
        }, e.prototype.ObjectUIDExists = function(e) {
            return !!this.runtime.getObjectByUID(e)
        }, e.prototype.IsOnPlatform = function(e) {
            var t = this.runtime;
            switch (e) {
                case 0:
                    return !(t.isDomFree || t.isNodeWebkit || t.isPhoneGap || t.isCrosswalk || t.isWinJS || t.isWindowsPhone8 || t.isBlackberry10 || t.isAmazonWebApp);
                case 1:
                    return t.isiOS;
                case 2:
                    return t.isAndroid;
                case 3:
                    return t.isWindows8App;
                case 4:
                    return t.isWindowsPhone8;
                case 5:
                    return t.isBlackberry10;
                case 6:
                    return t.isTizen;
                case 7:
                    return t.isCocoonJs;
                case 8:
                    return t.isPhoneGap;
                case 9:
                    return t.isArcade;
                case 10:
                    return t.isNodeWebkit;
                case 11:
                    return t.isCrosswalk;
                case 12:
                    return t.isAmazonWebApp;
                default:
                    return !1
            }
        };
        var p = null,
            d = "",
            v = "";
        e.prototype.RegexTest = function(e, t, r) {
            var i = n(t, r);
            return i.test(e)
        };
        var m = [];
        e.prototype.PickOverlappingPoint = function(e, t, n) {
            if (!e) return !1;
            var r, i, s, o, u = e.getCurrentSol(),
                a = u.getObjects(),
                f = this.runtime.getCurrentEventStack().current_event,
                l = f.orblock,
                c = this.runtime.getCurrentCondition();
            for (u.select_all ? (cr.shallowAssignArray(m, a), u.else_instances.length = 0, u.select_all = !1, u.instances.length = 0) : l ? (cr.shallowAssignArray(m, u.else_instances), u.else_instances.length = 0) : (cr.shallowAssignArray(m, a), u.instances.length = 0), r = 0, i = m.length; i > r; ++r) s = m[r], s.update_bbox(), o = cr.xor(s.contains_pt(t, n), c.inverted), o ? u.instances.push(s) : u.else_instances.push(s);
            return e.applySolToContainer(), cr.xor(!!u.instances.length, c.inverted)
        }, l.cnds = new e, r.prototype.GoToLayout = function(e) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = e)
        }, r.prototype.NextPrevLayout = function(e) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var t = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if (!(e && 0 === t || !e && t === this.runtime.layouts_by_index.length - 1)) {
                    var n = this.runtime.layouts_by_index[t + (e ? -1 : 1)];
                    this.runtime.changelayout = n
                }
            }
        }, r.prototype.CreateObject = function(e, t, n, r) {
            if (t && e) {
                var i = this.runtime.createInstance(e, t, n, r);
                if (i) {
                    this.runtime.isInOnDestroy++;
                    var s, o, u;
                    if (this.runtime.trigger(Object.getPrototypeOf(e.plugin).cnds.OnCreated, i), i.is_contained)
                        for (s = 0, o = i.siblings.length; o > s; s++) u = i.siblings[s], this.runtime.trigger(Object.getPrototypeOf(u.type.plugin).cnds.OnCreated, u);
                    this.runtime.isInOnDestroy--;
                    var a = e.getCurrentSol();
                    if (a.select_all = !1, a.instances.length = 1, a.instances[0] = i, i.is_contained)
                        for (s = 0, o = i.siblings.length; o > s; s++) u = i.siblings[s], a = u.type.getCurrentSol(), a.select_all = !1, a.instances.length = 1, a.instances[0] = u
                }
            }
        }, r.prototype.SetLayerVisible = function(e, t) {
            e && e.visible !== t && (e.visible = t, this.runtime.redraw = !0)
        }, r.prototype.SetLayerOpacity = function(e, t) {
            e && (t = cr.clamp(t / 100, 0, 1), e.opacity !== t && (e.opacity = t, this.runtime.redraw = !0))
        }, r.prototype.SetLayerScaleRate = function(e, t) {
            e && e.zoomRate !== t && (e.zoomRate = t, this.runtime.redraw = !0)
        }, r.prototype.SetLayoutScale = function(e) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== e && (this.runtime.running_layout.scale = e, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, r.prototype.ScrollX = function(e) {
            this.runtime.running_layout.scrollToX(e)
        }, r.prototype.ScrollY = function(e) {
            this.runtime.running_layout.scrollToY(e)
        }, r.prototype.Scroll = function(e, t) {
            this.runtime.running_layout.scrollToX(e), this.runtime.running_layout.scrollToY(t)
        }, r.prototype.ScrollToObject = function(e) {
            var t = e.getFirstPicked();
            t && (this.runtime.running_layout.scrollToX(t.x), this.runtime.running_layout.scrollToY(t.y))
        }, r.prototype.SetVar = function(e, t) {
            0 === e.vartype ? e.setValue(cr.is_number(t) ? t : parseFloat(t)) : 1 === e.vartype && e.setValue(t.toString())
        }, r.prototype.AddVar = function(e, t) {
            0 === e.vartype ? e.setValue(cr.is_number(t) ? e.getValue() + t : e.getValue() + parseFloat(t)) : 1 === e.vartype && e.setValue(e.getValue() + t.toString())
        }, r.prototype.SubVar = function(e, t) {
            0 === e.vartype && e.setValue(cr.is_number(t) ? e.getValue() - t : e.getValue() - parseFloat(t))
        }, r.prototype.SetGroupActive = function(e, t) {
            var n = this.runtime.groups_by_name[e.toLowerCase()];
            if (n) switch (t) {
                case 0:
                    n.setGroupActive(!1);
                    break;
                case 1:
                    n.setGroupActive(!0);
                    break;
                case 2:
                    n.setGroupActive(!n.group_active)
            }
        }, r.prototype.SetTimescale = function(e) {
            var t = e;
            0 > t && (t = 0), this.runtime.timescale = t
        }, r.prototype.SetObjectTimescale = function(e, t) {
            var n = t;
            if (0 > n && (n = 0), e) {
                var r, i, s = e.getCurrentSol(),
                    o = s.getObjects();
                for (r = 0, i = o.length; i > r; r++) o[r].my_timescale = n
            }
        }, r.prototype.RestoreObjectTimescale = function(e) {
            if (!e) return !1;
            var t, n, r = e.getCurrentSol(),
                i = r.getObjects();
            for (t = 0, n = i.length; n > t; t++) i[t].my_timescale = -1
        };
        var g = [],
            y = [];
        r.prototype.Wait = function(e) {
            if (!(0 > e)) {
                var t, n, r, s, u, a = this.runtime.getCurrentEventStack(),
                    f = i();
                for (f.time = this.runtime.kahanTime.sum + e, f.signaltag = "", f.signalled = !1, f.ev = a.current_event, f.actindex = a.actindex + 1, t = 0, n = this.runtime.types_by_index.length; n > t; t++) s = this.runtime.types_by_index[t], r = s.getCurrentSol(), r.select_all && -1 === a.current_event.solModifiers.indexOf(s) || (f.solModifiers.push(s), u = o(), u.sa = r.select_all, cr.shallowAssignArray(u.insts, r.instances), f.sols[t.toString()] = u);
                return this.waits.push(f), !0
            }
        }, r.prototype.WaitForSignal = function(e) {
            var t, n, r, s, u, a = this.runtime.getCurrentEventStack(),
                f = i();
            for (f.time = -1, f.signaltag = e.toLowerCase(), f.signalled = !1, f.ev = a.current_event, f.actindex = a.actindex + 1, t = 0, n = this.runtime.types_by_index.length; n > t; t++) s = this.runtime.types_by_index[t], r = s.getCurrentSol(), r.select_all && -1 === a.current_event.solModifiers.indexOf(s) || (f.solModifiers.push(s), u = o(), u.sa = r.select_all, cr.shallowAssignArray(u.insts, r.instances), f.sols[t.toString()] = u);
            return this.waits.push(f), !0
        }, r.prototype.Signal = function(e) {
            var t, n, r, i = e.toLowerCase();
            for (t = 0, n = this.waits.length; n > t; ++t) r = this.waits[t], -1 === r.time && r.signaltag === i && (r.signalled = !0)
        }, r.prototype.SetLayerScale = function(e, t) {
            e && e.scale !== t && (e.scale = t, this.runtime.redraw = !0)
        }, r.prototype.ResetGlobals = function() {
            var e, t, n;
            for (e = 0, t = this.runtime.all_global_vars.length; t > e; e++) n = this.runtime.all_global_vars[e], n.data = n.initial
        }, r.prototype.SetLayoutAngle = function(e) {
            e = cr.to_radians(e), e = cr.clamp_angle(e), this.runtime.running_layout && this.runtime.running_layout.angle !== e && (this.runtime.running_layout.angle = e, this.runtime.redraw = !0)
        }, r.prototype.SetLayerAngle = function(e, t) {
            e && (t = cr.to_radians(t), t = cr.clamp_angle(t), e.angle !== t && (e.angle = t, this.runtime.redraw = !0))
        }, r.prototype.SetLayerParallax = function(e, t, n) {
            if (e && (e.parallaxX !== t / 100 || e.parallaxY !== n / 100)) {
                if (e.parallaxX = t / 100, e.parallaxY = n / 100, 1 !== e.parallaxX || 1 !== e.parallaxY) {
                    var r, i, s = e.instances;
                    for (r = 0, i = s.length; i > r; ++r) s[r].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, r.prototype.SetLayerBackground = function(e, t) {
            if (e) {
                var n = cr.GetRValue(t),
                    r = cr.GetGValue(t),
                    i = cr.GetBValue(t);
                (e.background_color[0] !== n || e.background_color[1] !== r || e.background_color[2] !== i) && (e.background_color[0] = n, e.background_color[1] = r, e.background_color[2] = i, this.runtime.redraw = !0)
            }
        }, r.prototype.SetLayerTransparent = function(e, t) {
            e && !!t != !!e.transparent && (e.transparent = !!t, this.runtime.redraw = !0)
        }, r.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, r.prototype.GoToLayoutByName = function(e) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var t;
                for (t in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(t) && cr.equals_nocase(t, e)) return void(this.runtime.changelayout = this.runtime.layouts[t])
            }
        }, r.prototype.RestartLayout = function() {
            console.dir("restart");
            if (!this.runtime.isloading && !this.runtime.changelayout && this.runtime.running_layout) {
                this.runtime.changelayout = this.runtime.running_layout;
                var e, t, n;
                for (e = 0, t = this.runtime.allGroups.length; t > e; e++) n = this.runtime.allGroups[e], n.setGroupActive(n.initially_activated)
            }
        }, r.prototype.SnapshotCanvas = function(e, t) {
            this.runtime.snapshotCanvas = [0 === e ? "image/png" : "image/jpeg", t / 100], this.runtime.redraw = !0
        }, r.prototype.SetCanvasSize = function(e, t) {
            if (!(0 >= e || 0 >= t)) {
                var n = this.runtime.fullscreen_mode,
                    r = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen;
                r && this.runtime.fullscreen_scaling > 0 && (n = this.runtime.fullscreen_scaling), 0 === n ? this.runtime.setSize(e, t, !0) : (this.runtime.original_width = e, this.runtime.original_height = t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, r.prototype.SetLayoutEffectEnabled = function(e, t) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var n = this.runtime.running_layout.getEffectByName(t);
                if (n) {
                    var r = 1 === e;
                    n.active != r && (n.active = r, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, r.prototype.SetLayerEffectEnabled = function(e, t, n) {
            if (e && this.runtime.glwrap) {
                var r = e.getEffectByName(n);
                if (r) {
                    var i = 1 === t;
                    r.active != i && (r.active = i, e.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, r.prototype.SetLayoutEffectParam = function(e, t, n) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var r = this.runtime.running_layout.getEffectByName(e);
                if (r) {
                    var i = this.runtime.running_layout.effect_params[r.index];
                    t = Math.floor(t), 0 > t || t >= i.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, t) && (n /= 100), i[t] !== n && (i[t] = n, r.active && (this.runtime.redraw = !0)))
                }
            }
        }, r.prototype.SetLayerEffectParam = function(e, t, n, r) {
            if (e && this.runtime.glwrap) {
                var i = e.getEffectByName(t);
                if (i) {
                    var s = e.effect_params[i.index];
                    n = Math.floor(n), 0 > n || n >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(i.shaderindex, n) && (r /= 100), s[n] !== r && (s[n] = r, i.active && (this.runtime.redraw = !0)))
                }
            }
        }, r.prototype.SaveState = function(e) {
            this.runtime.saveToSlot = e
        }, r.prototype.LoadState = function(e) {
            this.runtime.loadFromSlot = e
        }, r.prototype.LoadStateJSON = function(e) {
            this.runtime.loadFromJson = e
        }, r.prototype.SetHalfFramerateMode = function(e) {
            this.runtime.halfFramerateMode = 0 !== e
        }, r.prototype.SetFullscreenQuality = function(e) {
            var t = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen;
            (t || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, l.acts = new r, a.prototype["int"] = function(e, t) {
            cr.is_string(t) ? (e.set_int(parseInt(t, 10)), isNaN(e.data) && (e.data = 0)) : e.set_int(t)
        }, a.prototype["float"] = function(e, t) {
            cr.is_string(t) ? (e.set_float(parseFloat(t)), isNaN(e.data) && (e.data = 0)) : e.set_float(t)
        }, a.prototype.str = function(e, t) {
            e.set_string(cr.is_string(t) ? t : t.toString())
        }, a.prototype.len = function(e, t) {
            e.set_int(t.length || 0)
        }, a.prototype.random = function(e, t, n) {
            e.set_float(void 0 === n ? Math.random() * t : Math.random() * (n - t) + t)
        }, a.prototype.sqrt = function(e, t) {
            e.set_float(Math.sqrt(t))
        }, a.prototype.abs = function(e, t) {
            e.set_float(Math.abs(t))
        }, a.prototype.round = function(e, t) {
            e.set_int(Math.round(t))
        }, a.prototype.floor = function(e, t) {
            e.set_int(Math.floor(t))
        }, a.prototype.ceil = function(e, t) {
            e.set_int(Math.ceil(t))
        }, a.prototype.sin = function(e, t) {
            e.set_float(Math.sin(cr.to_radians(t)))
        }, a.prototype.cos = function(e, t) {
            e.set_float(Math.cos(cr.to_radians(t)))
        }, a.prototype.tan = function(e, t) {
            e.set_float(Math.tan(cr.to_radians(t)))
        }, a.prototype.asin = function(e, t) {
            e.set_float(cr.to_degrees(Math.asin(t)))
        }, a.prototype.acos = function(e, t) {
            e.set_float(cr.to_degrees(Math.acos(t)))
        }, a.prototype.atan = function(e, t) {
            e.set_float(cr.to_degrees(Math.atan(t)))
        }, a.prototype.exp = function(e, t) {
            e.set_float(Math.exp(t))
        }, a.prototype.ln = function(e, t) {
            e.set_float(Math.log(t))
        }, a.prototype.log10 = function(e, t) {
            e.set_float(Math.log(t) / Math.LN10)
        }, a.prototype.max = function(e) {
            var t = arguments[1];
            "number" != typeof t && (t = 0);
            var n, r, i;
            for (n = 2, r = arguments.length; r > n; n++) i = arguments[n], "number" == typeof i && i > t && (t = i);
            e.set_float(t)
        }, a.prototype.min = function(e) {
            var t = arguments[1];
            "number" != typeof t && (t = 0);
            var n, r, i;
            for (n = 2, r = arguments.length; r > n; n++) i = arguments[n], "number" == typeof i && t > i && (t = i);
            e.set_float(t)
        }, a.prototype.dt = function(e) {
            e.set_float(this.runtime.dt)
        }, a.prototype.timescale = function(e) {
            e.set_float(this.runtime.timescale)
        }, a.prototype.wallclocktime = function(e) {
            e.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, a.prototype.time = function(e) {
            e.set_float(this.runtime.kahanTime.sum)
        }, a.prototype.tickcount = function(e) {
            e.set_int(this.runtime.tickcount)
        }, a.prototype.objectcount = function(e) {
            e.set_int(this.runtime.objectcount)
        }, a.prototype.fps = function(e) {
            e.set_int(this.runtime.fps)
        }, a.prototype.loopindex = function(e, t) {
            var n, r, i;
            if (!this.runtime.loop_stack.length) return void e.set_int(0);
            if (t) {
                for (r = 0, i = this.runtime.loop_stack.length; i > r; r++)
                    if (n = this.runtime.loop_stack[r], n.name === t) return void e.set_int(n.index);
                e.set_int(0)
            } else n = this.runtime.getCurrentLoop(), e.set_int(n ? n.index : -1)
        }, a.prototype.distance = function(e, t, n, r, i) {
            e.set_float(cr.distanceTo(t, n, r, i))
        }, a.prototype.angle = function(e, t, n, r, i) {
            e.set_float(cr.to_degrees(cr.angleTo(t, n, r, i)))
        }, a.prototype.scrollx = function(e) {
            e.set_float(this.runtime.running_layout.scrollX)
        }, a.prototype.scrolly = function(e) {
            e.set_float(this.runtime.running_layout.scrollY)
        }, a.prototype.newline = function(e) {
            e.set_string("\n")
        }, a.prototype.lerp = function(e, t, n, r) {
            e.set_float(cr.lerp(t, n, r))
        }, a.prototype.qarp = function(e, t, n, r, i) {
            e.set_float(cr.qarp(t, n, r, i))
        }, a.prototype.cubic = function(e, t, n, r, i, s) {
            e.set_float(cr.cubic(t, n, r, i, s))
        }, a.prototype.cosp = function(e, t, n, r) {
            e.set_float(cr.cosp(t, n, r))
        }, a.prototype.windowwidth = function(e) {
            e.set_int(this.runtime.width)
        }, a.prototype.windowheight = function(e) {
            e.set_int(this.runtime.height)
        }, a.prototype.uppercase = function(e, t) {
            e.set_string(cr.is_string(t) ? t.toUpperCase() : "")
        }, a.prototype.lowercase = function(e, t) {
            e.set_string(cr.is_string(t) ? t.toLowerCase() : "")
        }, a.prototype.clamp = function(e, t, n, r) {
            e.set_float(n > t ? n : t > r ? r : t)
        }, a.prototype.layerscale = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.scale : 0)
        }, a.prototype.layeropacity = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? 100 * n.opacity : 0)
        }, a.prototype.layerscalerate = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.zoomRate : 0)
        }, a.prototype.layerparallaxx = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? 100 * n.parallaxX : 0)
        }, a.prototype.layerparallaxy = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? 100 * n.parallaxY : 0)
        }, a.prototype.layoutscale = function(e) {
            e.set_float(this.runtime.running_layout ? this.runtime.running_layout.scale : 0)
        }, a.prototype.layoutangle = function(e) {
            e.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, a.prototype.layerangle = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? cr.to_degrees(n.angle) : 0)
        }, a.prototype.layoutwidth = function(e) {
            e.set_int(this.runtime.running_layout.width)
        }, a.prototype.layoutheight = function(e) {
            e.set_int(this.runtime.running_layout.height)
        }, a.prototype.find = function(e, t, n) {
            e.set_int(cr.is_string(t) && cr.is_string(n) ? t.search(new RegExp(cr.regexp_escape(n), "i")) : -1)
        }, a.prototype.left = function(e, t, n) {
            e.set_string(cr.is_string(t) ? t.substr(0, n) : "")
        }, a.prototype.right = function(e, t, n) {
            e.set_string(cr.is_string(t) ? t.substr(t.length - n) : "")
        }, a.prototype.mid = function(e, t, n, r) {
            e.set_string(cr.is_string(t) ? t.substr(n, r) : "")
        }, a.prototype.tokenat = function(e, t, n, r) {
            if (cr.is_string(t) && cr.is_string(r)) {
                var i = t.split(r),
                    s = cr.floor(n);
                e.set_string(0 > s || s >= i.length ? "" : i[s])
            } else e.set_string("")
        }, a.prototype.tokencount = function(e, t, n) {
            e.set_int(cr.is_string(t) && t.length ? t.split(n).length : 0)
        }, a.prototype.replace = function(e, t, n, r) {
            e.set_string(cr.is_string(t) && cr.is_string(n) && cr.is_string(r) ? t.replace(new RegExp(cr.regexp_escape(n), "gi"), r) : cr.is_string(t) ? t : "")
        }, a.prototype.trim = function(e, t) {
            e.set_string(cr.is_string(t) ? t.trim() : "")
        }, a.prototype.pi = function(e) {
            e.set_float(cr.PI)
        }, a.prototype.layoutname = function(e) {
            e.set_string(this.runtime.running_layout ? this.runtime.running_layout.name : "")
        }, a.prototype.renderer = function(e) {
            e.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, a.prototype.anglediff = function(e, t, n) {
            e.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(t), cr.to_radians(n))))
        }, a.prototype.choose = function(e) {
            var t = cr.floor(Math.random() * (arguments.length - 1));
            e.set_any(arguments[t + 1])
        }, a.prototype.rgb = function(e, t, n, r) {
            e.set_int(cr.RGB(t, n, r))
        }, a.prototype.projectversion = function(e) {
            e.set_string(this.runtime.versionstr)
        }, a.prototype.anglelerp = function(e, t, n, r) {
            t = cr.to_radians(t), n = cr.to_radians(n);
            var i = cr.angleDiff(t, n);
            e.set_float(cr.to_clamped_degrees(cr.angleClockwise(n, t) ? t + i * r : t - i * r))
        }, a.prototype.anglerotate = function(e, t, n, r) {
            t = cr.to_radians(t), n = cr.to_radians(n), r = cr.to_radians(r), e.set_float(cr.to_clamped_degrees(cr.angleRotate(t, n, r)))
        }, a.prototype.zeropad = function(e, t, n) {
            var r = 0 > t ? "-" : "";
            0 > t && (t = -t);
            for (var i = n - t.toString().length, s = 0; i > s; s++) r += "0";
            e.set_string(r + t.toString())
        }, a.prototype.cpuutilisation = function(e) {
            e.set_float(this.runtime.cpuutilisation / 1e3)
        }, a.prototype.viewportleft = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.viewLeft : 0)
        }, a.prototype.viewporttop = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.viewTop : 0)
        }, a.prototype.viewportright = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.viewRight : 0)
        }, a.prototype.viewportbottom = function(e, t) {
            var n = this.runtime.getLayer(t);
            e.set_float(n ? n.viewBottom : 0)
        }, a.prototype.loadingprogress = function(e) {
            e.set_float(this.runtime.loadingprogress)
        }, a.prototype.unlerp = function(e, t, n, r) {
            e.set_float(cr.unlerp(t, n, r))
        }, a.prototype.canvassnapshot = function(e) {
            e.set_string(this.runtime.snapshotData)
        }, a.prototype.urlencode = function(e, t) {
            e.set_string(encodeURIComponent(t))
        }, a.prototype.urldecode = function(e, t) {
            e.set_string(decodeURIComponent(t))
        }, a.prototype.canvastolayerx = function(e, t, n, r) {
            var i = this.runtime.getLayer(t);
            e.set_float(i ? i.canvasToLayer(n, r, !0) : 0)
        }, a.prototype.canvastolayery = function(e, t, n, r) {
            var i = this.runtime.getLayer(t);
            e.set_float(i ? i.canvasToLayer(n, r, !1) : 0)
        }, a.prototype.layertocanvasx = function(e, t, n, r) {
            var i = this.runtime.getLayer(t);
            e.set_float(i ? i.layerToCanvas(n, r, !0) : 0)
        }, a.prototype.layertocanvasy = function(e, t, n, r) {
            var i = this.runtime.getLayer(t);
            e.set_float(i ? i.layerToCanvas(n, r, !1) : 0)
        }, a.prototype.savestatejson = function(e) {
            e.set_string(this.runtime.lastSaveJson)
        }, a.prototype.imagememoryusage = function(e) {
            e.set_float(this.runtime.glwrap ? Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100 : 0)
        }, a.prototype.regexsearch = function(e, t, r, i) {
            var s = n(r, i);
            e.set_int(t ? t.search(s) : -1)
        }, a.prototype.regexreplace = function(e, t, r, i, s) {
            var o = n(r, i);
            e.set_string(t ? t.replace(o, s) : "")
        };
        var b = [],
            w = "",
            E = "",
            S = "";
        a.prototype.regexmatchcount = function(e, t, r, i) {
            n(r, i);
            f(t, r, i), e.set_int(b ? b.length : 0)
        }, a.prototype.regexmatchat = function(e, t, r, i, s) {
            s = Math.floor(s);
            n(r, i);
            f(t, r, i), e.set_string(!b || 0 > s || s >= b.length ? "" : b[s])
        }, a.prototype.infinity = function(e) {
            e.set_float(1 / 0)
        }, a.prototype.setbit = function(e, t, n, r) {
            t = 0 | t, n = 0 | n, r = 0 !== r ? 1 : 0, e.set_int(t & ~(1 << n) | r << n)
        }, a.prototype.togglebit = function(e, t, n) {
            t = 0 | t, n = 0 | n, e.set_int(t ^ 1 << n)
        }, a.prototype.getbit = function(e, t, n) {
            t = 0 | t, n = 0 | n, e.set_int(t & 1 << n ? 1 : 0)
        }, l.exps = new a, l.runWaits = function() {
            var e, t, n, r, i, o, a, f = this.runtime.getCurrentEventStack();
            for (e = 0, n = this.waits.length; n > e; e++) {
                if (r = this.waits[e], -1 === r.time) {
                    if (!r.signalled) continue
                } else if (r.time > this.runtime.kahanTime.sum) continue;
                f.current_event = r.ev, f.actindex = r.actindex, f.cndindex = 0;
                for (i in r.sols) r.sols.hasOwnProperty(i) && (o = this.runtime.types_by_index[parseInt(i, 10)].getCurrentSol(), a = r.sols[i], o.select_all = a.sa, cr.shallowAssignArray(o.instances, a.insts), u(a));
                r.ev.resume_actions_and_subevents(), this.runtime.clearSol(r.solModifiers), r.deleteme = !0
            }
            for (e = 0, t = 0, n = this.waits.length; n > e; e++) r = this.waits[e], this.waits[t] = r, r.deleteme ? s(r) : t++;
            this.waits.length = t
        }
    }(),
    function() {
        cr.add_common_aces = function(e) {
            var t = e[0].prototype,
                n = e[1],
                r = e[3],
                i = e[4],
                s = e[5],
                o = e[6],
                u = e[7],
                a = e[8];
            t.cnds || (t.cnds = {}), t.acts || (t.acts = {}), t.exps || (t.exps = {});
            var f = t.cnds,
                l = t.acts,
                c = t.exps;
            r && (f.CompareX = function(e, t) {
                return cr.do_cmp(this.x, e, t)
            }, f.CompareY = function(e, t) {
                return cr.do_cmp(this.y, e, t)
            }, f.IsOnScreen = function() {
                var e = this.layer;
                this.update_bbox();
                var t = this.bbox;
                return !(t.right < e.viewLeft || t.bottom < e.viewTop || t.left > e.viewRight || t.top > e.viewBottom)
            }, f.IsOutsideLayout = function() {
                this.update_bbox();
                var e = this.bbox,
                    t = this.runtime.running_layout;
                return e.right < 0 || e.bottom < 0 || e.left > t.width || e.top > t.height
            }, f.PickDistance = function(e, t, n) {
                var r = this.getCurrentSol(),
                    i = r.getObjects();
                if (!i.length) return !1;
                var s, o, u, a = i[0],
                    f = a,
                    l = cr.distanceTo(a.x, a.y, t, n);
                for (s = 1, o = i.length; o > s; s++) a = i[s], u = cr.distanceTo(a.x, a.y, t, n), (0 === e && l > u || 1 === e && u > l) && (l = u, f = a);
                return r.pick_one(f), !0
            }, l.SetX = function(e) {
                this.x !== e && (this.x = e, this.set_bbox_changed())
            }, l.SetY = function(e) {
                this.y !== e && (this.y = e, this.set_bbox_changed())
            }, l.SetPos = function(e, t) {
                (this.x !== e || this.y !== t) && (this.x = e, this.y = t, this.set_bbox_changed())
            }, l.SetPosToObject = function(e, t) {
                var n = e.getPairedInstance(this);
                if (n) {
                    var r, i;
                    n.getImagePoint ? (r = n.getImagePoint(t, !0), i = n.getImagePoint(t, !1)) : (r = n.x, i = n.y), (this.x !== r || this.y !== i) && (this.x = r, this.y = i, this.set_bbox_changed())
                }
            }, l.MoveForward = function(e) {
                0 !== e && (this.x += Math.cos(this.angle) * e, this.y += Math.sin(this.angle) * e, this.set_bbox_changed())
            }, l.MoveAtAngle = function(e, t) {
                0 !== t && (this.x += Math.cos(cr.to_radians(e)) * t, this.y += Math.sin(cr.to_radians(e)) * t, this.set_bbox_changed())
            }, c.X = function(e) {
                e.set_float(this.x)
            }, c.Y = function(e) {
                e.set_float(this.y)
            }, c.dt = function(e) {
                e.set_float(this.runtime.getDt(this))
            }), i && (f.CompareWidth = function(e, t) {
                return cr.do_cmp(this.width, e, t)
            }, f.CompareHeight = function(e, t) {
                return cr.do_cmp(this.height, e, t)
            }, l.SetWidth = function(e) {
                this.width !== e && (this.width = e, this.set_bbox_changed())
            }, l.SetHeight = function(e) {
                this.height !== e && (this.height = e, this.set_bbox_changed())
            }, l.SetSize = function(e, t) {
                (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.set_bbox_changed())
            }, c.Width = function(e) {
                e.set_float(this.width)
            }, c.Height = function(e) {
                e.set_float(this.height)
            }, c.BBoxLeft = function(e) {
                this.update_bbox(), e.set_float(this.bbox.left)
            }, c.BBoxTop = function(e) {
                this.update_bbox(), e.set_float(this.bbox.top)
            }, c.BBoxRight = function(e) {
                this.update_bbox(), e.set_float(this.bbox.right)
            }, c.BBoxBottom = function(e) {
                this.update_bbox(), e.set_float(this.bbox.bottom)
            }), s && (f.AngleWithin = function(e, t) {
                return cr.angleDiff(this.angle, cr.to_radians(t)) <= cr.to_radians(e)
            }, f.IsClockwiseFrom = function(e) {
                return cr.angleClockwise(this.angle, cr.to_radians(e))
            }, f.IsBetweenAngles = function(e, t) {
                var n = cr.to_clamped_radians(e),
                    r = cr.to_clamped_radians(t),
                    i = cr.clamp_angle(this.angle),
                    s = !cr.angleClockwise(r, n);
                return s ? !(!cr.angleClockwise(i, n) && cr.angleClockwise(i, r)) : cr.angleClockwise(i, n) && !cr.angleClockwise(i, r)
            }, l.SetAngle = function(e) {
                var t = cr.to_radians(cr.clamp_angle_degrees(e));
                isNaN(t) || this.angle !== t && (this.angle = t, this.set_bbox_changed())
            }, l.RotateClockwise = function(e) {
                0 === e || isNaN(e) || (this.angle += cr.to_radians(e), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function(e) {
                0 === e || isNaN(e) || (this.angle -= cr.to_radians(e), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function(e, t) {
                var n = cr.angleRotate(this.angle, cr.to_radians(t), cr.to_radians(e));
                isNaN(n) || this.angle !== n && (this.angle = n, this.set_bbox_changed())
            }, l.RotateTowardPosition = function(e, t, n) {
                var r = t - this.x,
                    i = n - this.y,
                    s = Math.atan2(i, r),
                    o = cr.angleRotate(this.angle, s, cr.to_radians(e));
                isNaN(o) || this.angle !== o && (this.angle = o, this.set_bbox_changed())
            }, l.SetTowardPosition = function(e, t) {
                var n = e - this.x,
                    r = t - this.y,
                    i = Math.atan2(r, n);
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, c.Angle = function(e) {
                e.set_float(cr.to_clamped_degrees(this.angle))
            }), n || (f.CompareInstanceVar = function(e, t, n) {
                return cr.do_cmp(this.instance_vars[e], t, n)
            }, f.IsBoolInstanceVarSet = function(e) {
                return this.instance_vars[e]
            }, f.PickInstVarHiLow = function(e, t) {
                var n = this.getCurrentSol(),
                    r = n.getObjects();
                if (!r.length) return !1;
                var i, s, o, u = r[0],
                    a = u,
                    f = u.instance_vars[t];
                for (i = 1, s = r.length; s > i; i++) u = r[i], o = u.instance_vars[t], (0 === e && f > o || 1 === e && o > f) && (f = o, a = u);
                return n.pick_one(a), !0
            }, f.PickByUID = function(e) {
                var t, n, r, i, s, o, u, a = this.runtime.getCurrentCondition();
                if (a.inverted) {
                    if (u = this.getCurrentSol(), u.select_all) {
                        for (u.select_all = !1, u.instances.length = 0, u.else_instances.length = 0, o = this.instances, t = 0, n = o.length; n > t; t++) i = o[t], i.uid === e ? u.else_instances.push(i) : u.instances.push(i);
                        return this.applySolToContainer(), !!u.instances.length
                    }
                    for (t = 0, r = 0, n = u.instances.length; n > t; t++) i = u.instances[t], u.instances[r] = i, i.uid === e ? u.else_instances.push(i) : r++;
                    return u.instances.length = r, this.applySolToContainer(), !!u.instances.length
                }
                if (i = this.runtime.getObjectByUID(e), !i) return !1;
                if (u = this.getCurrentSol(), !u.select_all && -1 === u.instances.indexOf(i)) return !1;
                if (this.is_family) {
                    for (s = i.type.families, t = 0, n = s.length; n > t; t++)
                        if (s[t] === this) return u.pick_one(i), this.applySolToContainer(), !0
                } else if (i.type === this) return u.pick_one(i), this.applySolToContainer(), !0;
                return !1
            }, f.OnCreated = function() {
                return !0
            }, f.OnDestroyed = function() {
                return !0
            }, l.SetInstanceVar = function(e, t) {
                var n = this.instance_vars;
                cr.is_number(n[e]) ? n[e] = cr.is_number(t) ? t : parseFloat(t) : cr.is_string(n[e]) && (n[e] = cr.is_string(t) ? t : t.toString())
            }, l.AddInstanceVar = function(e, t) {
                var n = this.instance_vars;
                cr.is_number(n[e]) ? n[e] += cr.is_number(t) ? t : parseFloat(t) : cr.is_string(n[e]) && (n[e] += cr.is_string(t) ? t : t.toString())
            }, l.SubInstanceVar = function(e, t) {
                var n = this.instance_vars;
                cr.is_number(n[e]) && (n[e] -= cr.is_number(t) ? t : parseFloat(t))
            }, l.SetBoolInstanceVar = function(e, t) {
                this.instance_vars[e] = t ? 1 : 0
            }, l.ToggleBoolInstanceVar = function(e) {
                this.instance_vars[e] = 1 - this.instance_vars[e]
            }, l.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function(e) {
                var t, n, r, i;
                try {
                    t = JSON.parse(e)
                } catch (s) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, t, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (n = 0, r = this.behavior_insts.length; r > n; ++n) i = this.behavior_insts[n], i.afterLoad && i.afterLoad()
            }), c.Count = function(e) {
                var t, n, r, i = e.object_class.instances.length;
                for (t = 0, n = this.runtime.createRow.length; n > t; t++) r = this.runtime.createRow[t], e.object_class.is_family ? r.type.families.indexOf(e.object_class) >= 0 && i++ : r.type === e.object_class && i++;
                e.set_int(i)
            }, c.PickedCount = function(e) {
                e.set_int(e.object_class.getCurrentSol().getObjects().length)
            }, c.UID = function(e) {
                e.set_int(this.uid)
            }, c.IID = function(e) {
                e.set_int(this.get_iid())
            }, c.AsJSON || (c.AsJSON = function(e) {
                e.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), o && (f.IsVisible = function() {
                return this.visible
            }, l.SetVisible = function(e) {
                !e != !this.visible && (this.visible = e, this.runtime.redraw = !0)
            }, f.CompareOpacity = function(e, t) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), e, t)
            }, l.SetOpacity = function(e) {
                var t = e / 100;
                0 > t ? t = 0 : t > 1 && (t = 1), t !== this.opacity && (this.opacity = t, this.runtime.redraw = !0)
            }, c.Opacity = function(e) {
                e.set_float(cr.round6dp(100 * this.opacity))
            }), u && (f.IsOnLayer = function(e) {
                return e ? this.layer === e : !1
            }, f.PickTopBottom = function(e) {
                var t = this.getCurrentSol(),
                    n = t.getObjects();
                if (!n.length) return !1;
                var r, i, s = n[0],
                    o = s;
                for (r = 1, i = n.length; i > r; r++) s = n[r], 0 === e ? (s.layer.index > o.layer.index || s.layer.index === o.layer.index && s.get_zindex() > o.get_zindex()) && (o = s) : (s.layer.index < o.layer.index || s.layer.index === o.layer.index && s.get_zindex() < o.get_zindex()) && (o = s);
                return t.pick_one(o), !0
            }, l.MoveToTop = function() {
                var e = this.get_zindex();
                e !== this.layer.instances.length - 1 && (cr.arrayRemove(this.layer.instances, e), this.layer.instances.push(this), this.runtime.redraw = !0, this.layer.zindices_stale = !0)
            }, l.MoveToBottom = function() {
                var e = this.get_zindex();
                0 !== e && (cr.arrayRemove(this.layer.instances, e), this.layer.instances.unshift(this), this.runtime.redraw = !0, this.layer.zindices_stale = !0)
            }, l.MoveToLayer = function(e) {
                e && e != this.layer && (cr.arrayRemove(this.layer.instances, this.get_zindex()), this.layer.zindices_stale = !0, this.layer = e, this.zindex = e.instances.length, e.instances.push(this), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function(e, t) {
                var n = 0 === e;
                if (t) {
                    var r = t.getFirstPicked(this);
                    if (r && r.uid !== this.uid) {
                        this.layer.index !== r.layer.index && (cr.arrayRemove(this.layer.instances, this.get_zindex()), this.layer.zindices_stale = !0, this.layer = r.layer, this.zindex = r.layer.instances.length, r.layer.instances.push(this));
                        var i = this.get_zindex(),
                            s = r.get_zindex();
                        cr.arrayRemove(this.layer.instances, i), s > i && s--, n && s++, s === this.layer.instances.length ? this.layer.instances.push(this) : this.layer.instances.splice(s, 0, this), this.layer.zindices_stale = !0, this.runtime.redraw = !0
                    }
                }
            }, c.LayerNumber = function(e) {
                e.set_int(this.layer.number)
            }, c.LayerName = function(e) {
                e.set_string(this.layer.name)
            }, c.ZIndex = function(e) {
                e.set_int(this.get_zindex())
            }), a && (l.SetEffectEnabled = function(e, t) {
                if (this.runtime.glwrap) {
                    var n = this.type.getEffectIndexByName(t);
                    if (!(0 > n)) {
                        var r = 1 === e;
                        this.active_effect_flags[n] !== r && (this.active_effect_flags[n] = r, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function(e, t, n) {
                if (this.runtime.glwrap) {
                    var r = this.type.getEffectIndexByName(e);
                    if (!(0 > r)) {
                        var i = this.type.effect_types[r],
                            s = this.effect_params[r];
                        t = Math.floor(t), 0 > t || t >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(i.shaderindex, t) && (n /= 100), s[t] !== n && (s[t] = n, i.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var e, t, n = this.bbox_changed_callbacks;
            for (e = 0, t = n.length; t > e; ++e) n[e](this)
        }, cr.add_bbox_changed_callback = function(e) {
            e && this.bbox_changed_callbacks.push(e)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var e = this.bbox,
                    t = this.bquad;
                e.set(this.x, this.y, this.x + this.width, this.y + this.height), e.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (e.offset(-this.x, -this.y), t.set_from_rotated_rect(e, this.angle), t.offset(this.x, this.y), t.bounding_box(e)) : t.set_from_rect(e), e.normalize(), this.bbox_changed = !1
            }
        };
        var e = new cr.rect(0, 0, 0, 0);
        cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var n = this.type.collision_grid,
                    r = this.collcells,
                    i = this.bbox;
                e.set(n.XToCell(i.left), n.YToCell(i.top), n.XToCell(i.right), n.YToCell(i.bottom)), r.equals(e) || (r.right < r.left ? n.update(this, null, e) : n.update(this, r, e), r.copy(e), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(e, t) {
            return this.bbox.contains_pt(e, t) && this.bquad.contains_pt(e, t) ? this.collision_poly && !this.collision_poly.is_empty() ? (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(e - this.x, t - this.y)) : !0 : !1
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            this.active_effect_types.length = 0;
            var e, t;
            for (e = 0, t = this.active_effect_flags.length; t > e; e++) this.active_effect_flags[e] && this.active_effect_types.push(this.type.effect_types[e]);
            this.uses_shaders = !!this.active_effect_types.length
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(e) {
            if (e && e.is_contained && e.type != this) {
                var t, n, r;
                for (t = 0, n = e.siblings.length; n > t; t++)
                    if (r = e.siblings[t], r.type == this) return r
            }
            var i = this.getCurrentSol().getObjects();
            return i.length ? i[0] : null
        }, cr.type_getPairedInstance = function(e) {
            var t = this.getCurrentSol().getObjects();
            return t.length ? t[e.get_iid() % t.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var e, t;
                for (e = 0, t = this.instances.length; t > e; e++) this.instances[e].iid = e;
                var n = e,
                    r = this.runtime.createRow;
                for (e = 0, t = r.length; t > e; ++e) r[e].type === this && (r[e].iid = n++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(e) {
            if (e < this.instances.length) return this.instances[e];
            e -= this.instances.length;
            var t, n, r = this.runtime.createRow;
            for (t = 0, n = r.length; n > t; ++t)
                if (r[t].type === this) {
                    if (0 === e) return r[t];
                    --e
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : this.solstack[this.cur_sol].select_all = !0
        }, cr.type_pushCopySol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var e = this.solstack[this.cur_sol],
                t = this.solstack[this.cur_sol - 1];
            t.select_all ? e.select_all = !0 : (e.select_all = !1, cr.shallowAssignArray(e.instances, t.instances), cr.shallowAssignArray(e.else_instances, t.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(e) {
            var t, n, r, i, s, o = 0;
            if (!this.is_family)
                for (t = 0, n = this.families.length; n > t; t++)
                    for (s = this.families[t], r = 0, i = s.behaviors.length; i > r; r++) {
                        if (e === s.behaviors[r].name) return this.extra.lastBehIndex = o, s.behaviors[r];
                        o++
                    }
            for (t = 0, n = this.behaviors.length; n > t; t++) {
                if (e === this.behaviors[t].name) return this.extra.lastBehIndex = o, this.behaviors[t];
                o++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(e) {
            var t = this.getBehaviorByName(e);
            return t ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(e) {
            var t, n;
            for (t = 0, n = this.effect_types.length; n > t; t++)
                if (this.effect_types[t].name === e) return t;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var e, t, n, r, i, s, o;
                this.updateIIDs(), s = this.getCurrentSol();
                var u = s.select_all,
                    a = this.runtime.getCurrentEventStack(),
                    f = a && a.current_event && a.current_event.orblock;
                for (e = 0, t = this.container.length; t > e; e++)
                    if (i = this.container[e], i !== this && (i.updateIIDs(), o = i.getCurrentSol(), o.select_all = u, !u)) {
                        for (o.instances.length = s.instances.length, n = 0, r = s.instances.length; r > n; n++) o.instances[n] = i.getInstanceByIID(s.instances[n].iid);
                        if (f)
                            for (o.else_instances.length = s.else_instances.length, n = 0, r = s.else_instances.length; r > n; n++) o.else_instances[n] = i.getInstanceByIID(s.else_instances[n].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(e, t, n) {
            if ("undefined" == typeof e || "undefined" == typeof n) return !1;
            switch (t) {
                case 0:
                    return e === n;
                case 1:
                    return e !== n;
                case 2:
                    return n > e;
                case 3:
                    return n >= e;
                case 4:
                    return e > n;
                case 5:
                    return e >= n;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.plugins_.Audio = function(e) {
        this.runtime = e
    },
    function() {
        function e(e) {
            var t = n(e);
            return 0 > t && (t = 0), t > 1 && (t = 1), t
        }

        function t(e) {
            return 0 > e && (e = 0), e > 1 && (e = 1), r(e)
        }

        function n(e) {
            return Math.pow(10, e / 20)
        }

        function r(e) {
            return Math.log(e) / Math.log(10) * 20
        }

        function i(e) {
            return e = e.toLowerCase(), lt.hasOwnProperty(e) && lt[e].length ? lt[e][0].getInputNode() : X.destination
        }

        function s() {
            return X.createGain ? X.createGain() : X.createGainNode()
        }

        function o(e) {
            return X.createDelay ? X.createDelay(e) : X.createDelayNode(e)
        }

        function u(e) {
            e.start ? e.start(0) : e.noteOn(0)
        }

        function a(e, t, n) {
            e.start ? e.start(0, t) : e.noteGrainOn(0, t, n - t)
        }

        function f(e) {
            try {
                e.stop ? e.stop(0) : e.noteOff(0)
            } catch (t) {}
        }

        function l(e, t, n, r) {
            if (e) {
                if (e.cancelScheduledValues(0), 0 === r) return void(e.value = t);
                var i = X.currentTime;
                switch (r += i, n) {
                    case 0:
                        e.setValueAtTime(t, r);
                        break;
                    case 1:
                        e.setValueAtTime(e.value, i), e.linearRampToValueAtTime(t, r);
                        break;
                    case 2:
                        e.setValueAtTime(e.value, i), e.exponentialRampToValueAtTime(t, r)
                }
            }
        }

        function c(e, t, n, r, i, o) {
            this.type = "filter", this.params = [e, t, n, r, i, o], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = o, this.dryNode = s(), this.dryNode.gain.value = 1 - o, this.filterNode = X.createBiquadFilter(), this.filterNode.type = "number" == typeof this.filterNode.type ? e : ct[e], this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = n), this.filterNode.Q.value = r, this.filterNode.gain.value = i, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function h(e, t, n) {
            this.type = "delay", this.params = [e, t, n], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = n, this.dryNode = s(), this.dryNode.gain.value = 1 - n, this.mainNode = s(), this.delayNode = o(e), this.delayNode.delayTime.value = e, this.delayGainNode = s(), this.delayGainNode.gain.value = t, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function p(e, t, n, r) {
            this.type = "convolve", this.params = [t, n, r], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = n, this.dryNode = s(), this.dryNode.gain.value = 1 - n, this.convolveNode = X.createConvolver(), e && (this.convolveNode.normalize = t, this.convolveNode.buffer = e), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function d(e, t, n, r, i) {
            this.type = "flanger", this.params = [e, t, n, r, i], this.inputNode = s(), this.dryNode = s(), this.dryNode.gain.value = 1 - i / 2, this.wetNode = s(), this.wetNode.gain.value = i / 2, this.feedbackNode = s(), this.feedbackNode.gain.value = r, this.delayNode = o(e + t), this.delayNode.delayTime.value = e, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = n, this.oscGainNode = s(), this.oscGainNode.gain.value = t, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), u(this.oscNode)
        }

        function v(e, t, n, r, i, o) {
            this.type = "phaser", this.params = [e, t, n, r, i, o], this.inputNode = s(), this.dryNode = s(), this.dryNode.gain.value = 1 - o / 2, this.wetNode = s(), this.wetNode.gain.value = o / 2, this.filterNode = X.createBiquadFilter(), this.filterNode.type = "number" == typeof this.filterNode.type ? 7 : "allpass", this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = t), this.filterNode.Q.value = n, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = s(), this.oscGainNode.gain.value = r, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), u(this.oscNode)
        }

        function m(e) {
            this.type = "gain", this.params = [e], this.node = s(), this.node.gain.value = e
        }

        function g(e, t) {
            this.type = "tremolo", this.params = [e, t], this.node = s(), this.node.gain.value = 1 - t / 2, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = e, this.oscGainNode = s(), this.oscGainNode.gain.value = t / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), u(this.oscNode)
        }

        function y(e, t) {
            this.type = "ringmod", this.params = [e, t], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = t, this.dryNode = s(), this.dryNode.gain.value = 1 - t, this.ringNode = s(), this.ringNode.gain.value = 0, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = e, this.oscNode.connect(this.ringNode.gain), u(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function b(e, t, r, i, o) {
            this.type = "distortion", this.params = [e, t, r, i, o], this.inputNode = s(), this.preGain = s(), this.postGain = s(), this.setDrive(r, n(i)), this.wetNode = s(), this.wetNode.gain.value = o, this.dryNode = s(), this.dryNode.gain.value = 1 - o, this.waveShaper = X.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(e, t), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function w(e, t) {
            return 1 - Math.exp(-t * e)
        }

        function E(e, t, n, r, i) {
            this.type = "compressor", this.params = [e, t, n, r, i], this.node = X.createDynamicsCompressor();
            try {
                this.node.threshold.value = e, this.node.knee.value = t, this.node.ratio.value = n, this.node.attack.value = r, this.node.release.value = i
            } catch (s) {}
        }

        function S(e, t) {
            this.type = "analyser", this.params = [e, t], this.node = X.createAnalyser(), this.node.fftSize = e, this.node.smoothingTimeConstant = t, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(e), this.peak = 0, this.rms = 0
        }

        function x() {
            this.obj = null, this.loadUid = 0, this.speeds = [], this.lastX = 0, this.lastY = 0, this.moveAngle = 0
        }

        function T(e, t) {
            this.src = e, this.myapi = W, this.is_music = t, this.added_end_listener = !1;
            var n = this;
            this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, W === R && t && (this.myapi = q, this.outNode = s()), this.bufferObject = null, this.audioData = null;
            var r;
            switch (this.myapi) {
                case q:
                    this.bufferObject = new Audio, W !== R || !X.createMediaElementSource || B.isFirefox || /wiiu/i.test(navigator.userAgent) || (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        n.mediaSourceNode || (n.mediaSourceNode = X.createMediaElementSource(n.bufferObject), n.mediaSourceNode.connect(n.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = e;
                    break;
                case R:
                    r = new XMLHttpRequest, r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() {
                        n.audioData = r.response, n.decodeAudioBuffer()
                    }, r.onerror = function() {
                        n.failedToLoad = !0
                    }, r.send();
                    break;
                case U:
                    this.bufferObject = !0;
                    break;
                case z:
                    this.bufferObject = !0
            }
        }

        function N(e, t) {
            var n = this;
            this.tag = t, this.fresh = !0, this.stopped = !0, this.src = e.src, this.buffer = e, this.myapi = W, this.is_music = e.is_music, this.playbackRate = 1, this.pgended = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.mutevol = 1, this.startTime = B.kahanTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var r = !1;
            switch (this.myapi !== R || this.buffer.myapi !== q || this.buffer.supportWebAudioAPI || (this.myapi = q), this.myapi) {
                case q:
                    this.is_music ? (this.instanceObject = e.bufferObject, r = !e.added_end_listener, e.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.autoplay = !1, this.instanceObject.src = e.bufferObject.src, r = !0), r && this.instanceObject.addEventListener("ended", function() {
                        F = n.tag, n.stopped = !0, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, j)
                    });
                    break;
                case R:
                    this.gainNode = s(), this.gainNode.connect(i(t)), this.buffer.myapi === R ? e.bufferObject && (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = e.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode));
                    break;
                case U:
                    this.instanceObject = new window.Media(I + this.src, null, null, function(e) {
                        e === window.Media.MEDIA_STOPPED && (n.pgended = !0, n.stopped = !0, F = n.tag, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, j))
                    });
                    break;
                case z:
                    this.instanceObject = !0
            }
        }

        function C(e, t) {
            var n = e.isPlaying() ? 1 : 0,
                r = t.isPlaying() ? 1 : 0;
            return n === r ? 0 : r > n ? 1 : -1
        }

        function k(e, t) {
            if (gt.length = 0, !e.length) return !J || J.hasEnded() ? void 0 : (gt.length = 1, void(gt[0] = J));
            var n, r, i;
            for (n = 0, r = $.length; r > n; n++) i = $[n], cr.equals_nocase(e, i.tag) && gt.push(i);
            t && gt.sort(C)
        }

        function L(e) {
            var t, n, r, i, s = X.destination;
            if (lt.hasOwnProperty(e) && (r = lt[e], r.length))
                for (s = r[0].getInputNode(), t = 0, n = r.length; n > t; t++) i = r[t], i.connectTo(t + 1 === n ? X.destination : r[t + 1].getInputNode());
            for (k(e), t = 0, n = gt.length; n > t; t++) gt[t].reconnect(s);
            ot && ut === e && (ot.disconnect(), ot.connect(s))
        }

        function A(e, t) {
            lt.hasOwnProperty(e) ? lt[e].push(t) : lt[e] = [t], L(e)
        }

        function O() {}

        function M() {}

        function _() {}

        function D(e, t) {
            var n = null;
            return lt.hasOwnProperty(e) && (n = lt[e]), n && t >= 0 && t < n.length && n[t].freqBins ? n[t] : null
        }
        var P = cr.plugins_.Audio.prototype;
        P.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var H = P.Type.prototype;
        H.onCreate = function() {};
        var B = null,
            j = null,
            F = "",
            I = "",
            q = 0,
            R = 1,
            U = 2,
            z = 3,
            W = q,
            X = null,
            V = [],
            $ = [],
            J = null,
            K = !1,
            Q = 0,
            G = !1,
            Y = 1,
            Z = 0,
            et = 0,
            tt = 1,
            nt = 1,
            rt = 10,
            it = 1e4,
            st = 1,
            ot = null,
            ut = "",
            at = !1,
            ft = [],
            lt = {},
            ct = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
        c.prototype.connectTo = function(e) {
            this.wetNode.disconnect(), this.wetNode.connect(e), this.dryNode.disconnect(), this.dryNode.connect(e)
        }, c.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, c.prototype.getInputNode = function() {
            return this.inputNode
        }, c.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[5] = t, l(this.wetNode.gain, t, n, r), l(this.dryNode.gain, 1 - t, n, r);
                    break;
                case 1:
                    this.params[1] = t, l(this.filterNode.frequency, t, n, r);
                    break;
                case 2:
                    this.params[2] = t, l(this.filterNode.detune, t, n, r);
                    break;
                case 3:
                    this.params[3] = t, l(this.filterNode.Q, t, n, r);
                    break;
                case 4:
                    this.params[4] = t, l(this.filterNode.gain, t, n, r)
            }
        }, h.prototype.connectTo = function(e) {
            this.wetNode.disconnect(), this.wetNode.connect(e), this.dryNode.disconnect(), this.dryNode.connect(e)
        }, h.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, h.prototype.getInputNode = function() {
            return this.inputNode
        }, h.prototype.setParam = function(t, n, r, i) {
            switch (t) {
                case 0:
                    n /= 100, 0 > n && (n = 0), n > 1 && (n = 1), this.params[2] = n, l(this.wetNode.gain, n, r, i), l(this.dryNode.gain, 1 - n, r, i);
                    break;
                case 4:
                    this.params[1] = e(n), l(this.delayGainNode.gain, e(n), r, i);
                    break;
                case 5:
                    this.params[0] = n, l(this.delayNode.delayTime, n, r, i)
            }
        }, p.prototype.connectTo = function(e) {
            this.wetNode.disconnect(), this.wetNode.connect(e), this.dryNode.disconnect(), this.dryNode.connect(e)
        }, p.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, p.prototype.getInputNode = function() {
            return this.inputNode
        }, p.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[1] = t, l(this.wetNode.gain, t, n, r), l(this.dryNode.gain, 1 - t, n, r)
            }
        }, d.prototype.connectTo = function(e) {
            this.dryNode.disconnect(), this.dryNode.connect(e), this.wetNode.disconnect(), this.wetNode.connect(e)
        }, d.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, d.prototype.getInputNode = function() {
            return this.inputNode
        }, d.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[4] = t, l(this.wetNode.gain, t / 2, n, r), l(this.dryNode.gain, 1 - t / 2, n, r);
                    break;
                case 6:
                    this.params[1] = t / 1e3, l(this.oscGainNode.gain, t / 1e3, n, r);
                    break;
                case 7:
                    this.params[2] = t, l(this.oscNode.frequency, t, n, r);
                    break;
                case 8:
                    this.params[3] = t / 100, l(this.feedbackNode.gain, t / 100, n, r)
            }
        }, v.prototype.connectTo = function(e) {
            this.dryNode.disconnect(), this.dryNode.connect(e), this.wetNode.disconnect(), this.wetNode.connect(e)
        }, v.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, v.prototype.getInputNode = function() {
            return this.inputNode
        }, v.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[5] = t, l(this.wetNode.gain, t / 2, n, r), l(this.dryNode.gain, 1 - t / 2, n, r);
                    break;
                case 1:
                    this.params[0] = t, l(this.filterNode.frequency, t, n, r);
                    break;
                case 2:
                    this.params[1] = t, l(this.filterNode.detune, t, n, r);
                    break;
                case 3:
                    this.params[2] = t, l(this.filterNode.Q, t, n, r);
                    break;
                case 6:
                    this.params[3] = t, l(this.oscGainNode.gain, t, n, r);
                    break;
                case 7:
                    this.params[4] = t, l(this.oscNode.frequency, t, n, r)
            }
        }, m.prototype.connectTo = function(e) {
            this.node.disconnect(), this.node.connect(e)
        }, m.prototype.remove = function() {
            this.node.disconnect()
        }, m.prototype.getInputNode = function() {
            return this.node
        }, m.prototype.setParam = function(t, n, r, i) {
            switch (t) {
                case 4:
                    this.params[0] = e(n), l(this.node.gain, e(n), r, i)
            }
        }, g.prototype.connectTo = function(e) {
            this.node.disconnect(), this.node.connect(e)
        }, g.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, g.prototype.getInputNode = function() {
            return this.node
        }, g.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[1] = t, l(this.node.gain.value, 1 - t / 2, n, r), l(this.oscGainNode.gain.value, t / 2, n, r);
                    break;
                case 7:
                    this.params[0] = t, l(this.oscNode.frequency, t, n, r)
            }
        }, y.prototype.connectTo = function(e) {
            this.wetNode.disconnect(), this.wetNode.connect(e), this.dryNode.disconnect(), this.dryNode.connect(e)
        }, y.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, y.prototype.getInputNode = function() {
            return this.inputNode
        }, y.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[1] = t, l(this.wetNode.gain, t, n, r), l(this.dryNode.gain, 1 - t, n, r);
                    break;
                case 7:
                    this.params[0] = t, l(this.oscNode.frequency, t, n, r)
            }
        }, b.prototype.setDrive = function(e, t) {.01 > e && (e = .01), this.preGain.gain.value = e, this.postGain.gain.value = Math.pow(1 / e, .6) * t
        }, b.prototype.shape = function(e, t, n) {
            var r = 1.05 * n * t,
                i = r - t,
                s = 0 > e ? -1 : 1,
                o = 0 > e ? -e : e,
                u = t > o ? o : t + i * w(o - t, 1 / i);
            return u *= s
        }, b.prototype.generateColortouchCurve = function(e, t) {
            for (var r = n(e), i = n(t), s = 65536, o = s / 2, u = 0, a = 0; o > a; ++a) u = a / o, u = this.shape(u, r, i), this.curve[o + a] = u, this.curve[o - a - 1] = -u
        }, b.prototype.connectTo = function(e) {
            this.wetNode.disconnect(), this.wetNode.connect(e), this.dryNode.disconnect(), this.dryNode.connect(e)
        }, b.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, b.prototype.getInputNode = function() {
            return this.inputNode
        }, b.prototype.setParam = function(e, t, n, r) {
            switch (e) {
                case 0:
                    t /= 100, 0 > t && (t = 0), t > 1 && (t = 1), this.params[4] = t, l(this.wetNode.gain, t, n, r), l(this.dryNode.gain, 1 - t, n, r)
            }
        }, E.prototype.connectTo = function(e) {
            this.node.disconnect(), this.node.connect(e)
        }, E.prototype.remove = function() {
            this.node.disconnect()
        }, E.prototype.getInputNode = function() {
            return this.node
        }, E.prototype.setParam = function() {}, S.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var e = this.node.fftSize,
                n = 0;
            this.peak = 0;
            for (var r = 0, i = 0; e > n; n++) i = (this.signal[n] - 128) / 128, 0 > i && (i = -i), this.peak < i && (this.peak = i), r += i * i;
            this.peak = t(this.peak), this.rms = t(Math.sqrt(r / e))
        }, S.prototype.connectTo = function(e) {
            this.node.disconnect(), this.node.connect(e)
        }, S.prototype.remove = function() {
            this.node.disconnect()
        }, S.prototype.getInputNode = function() {
            return this.node
        }, S.prototype.setParam = function() {};
        var ht = 4;
        x.prototype.setObject = function(e) {
            this.obj = e, this.obj && (this.lastX = this.obj.x, this.lastY = this.obj.y), this.speeds.length = 0
        }, x.prototype.hasObject = function() {
            return !!this.obj
        }, x.prototype.tick = function(e) {
            if (this.obj && 0 !== e) {
                this.moveAngle = cr.angleTo(this.lastX, this.lastY, this.obj.x, this.obj.y);
                var t = cr.distanceTo(this.lastX, this.lastY, this.obj.x, this.obj.y) / e;
                this.speeds.length < ht ? this.speeds.push(t) : (this.speeds.shift(), this.speeds.push(t)), this.lastX = this.obj.x, this.lastY = this.obj.y
            }
        }, x.prototype.getSpeed = function() {
            if (!this.speeds.length) return 0;
            var e, t, n = 0;
            for (e = 0, t = this.speeds.length; t > e; e++) n += this.speeds[e];
            return n / this.speeds.length
        }, x.prototype.getVelocityX = function() {
            return Math.cos(this.moveAngle) * this.getSpeed()
        }, x.prototype.getVelocityY = function() {
            return Math.sin(this.moveAngle) * this.getSpeed()
        };
        var pt = !1;
        T.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var e = this;
                if (X.decodeAudioData) X.decodeAudioData(this.audioData, function(t) {
                    e.bufferObject = t;
                    var n, r, i, s;
                    if (cr.is_undefined(e.playTagWhenReady) || G) {
                        if (!cr.is_undefined(e.convolveWhenReady)) {
                            var o = e.convolveWhenReady.convolveNode;
                            o.normalize = e.normalizeWhenReady, o.buffer = t
                        }
                    } else if (e.panWhenReady.length) {
                        for (r = 0, i = e.panWhenReady.length; i > r; r++)
                            if (n = e.panWhenReady[r], s = new N(e, n.thistag), s.setPannerEnabled(!0), "undefined" == typeof n.objUid || (n.obj = B.getObjectByUID(n.objUid), n.obj)) {
                                if (n.obj) {
                                    var u = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), Z, et, !0),
                                        a = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), Z, et, !1);
                                    s.setPan(u, a, cr.to_degrees(n.obj.angle - n.obj.layer.getAngle()), n.ia, n.oa, n.og), s.setObject(n.obj)
                                } else s.setPan(n.x, n.y, n.a, n.ia, n.oa, n.og);
                                s.play(e.loopWhenReady, e.volumeWhenReady, e.seekWhenReady), e.pauseWhenReady && s.pause(), $.push(s)
                            }
                        e.panWhenReady.length = 0
                    } else s = new N(e, e.playTagWhenReady), s.play(e.loopWhenReady, e.volumeWhenReady, e.seekWhenReady), e.pauseWhenReady && s.pause(), $.push(s)
                }, function() {
                    e.failedToLoad = !0
                });
                else if (this.bufferObject = X.createBuffer(this.audioData, !1), cr.is_undefined(this.playTagWhenReady) || G) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var t = this.convolveWhenReady.convolveNode;
                        t.normalize = this.normalizeWhenReady, t.buffer = this.bufferObject
                    }
                } else {
                    var n = new N(this, this.playTagWhenReady);
                    n.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && n.pause(), $.push(n)
                }
            }
        }, T.prototype.isLoaded = function() {
            switch (this.myapi) {
                case q:
                    return this.bufferObject.readyState >= 4;
                case R:
                    return !!this.audioData;
                case U:
                    return !0;
                case z:
                    return !0
            }
            return !1
        }, T.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case q:
                    return this.bufferObject.readyState >= 4;
                case R:
                    return !!this.audioData && !!this.bufferObject;
                case U:
                    return !0;
                case z:
                    return !0
            }
            return !1
        }, T.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case q:
                    return !!this.bufferObject.error;
                case R:
                    return this.failedToLoad
            }
            return !1
        }, N.prototype.hasEnded = function() {
            switch (this.myapi) {
                case q:
                    return this.instanceObject.ended;
                case R:
                    return this.buffer.myapi === R ? this.fresh || this.stopped || !this.instanceObject.loop ? this.is_paused ? !1 : B.kahanTime.sum - this.startTime > this.buffer.bufferObject.duration : !1 : this.instanceObject.ended;
                case U:
                    return this.pgended;
                case z:
            }
            return !0
        }, N.prototype.canBeRecycled = function() {
            return this.fresh || this.stopped ? !0 : this.hasEnded()
        }, N.prototype.setPannerEnabled = function(e) {
            if (W === R)
                if (!this.pannerEnabled && e) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = X.createPanner(), this.pannerNode.panningModel = "number" == typeof this.pannerNode.panningModel ? tt : ["equalpower", "HRTF", "soundfield"][tt], this.pannerNode.distanceModel = "number" == typeof this.pannerNode.distanceModel ? nt : ["linear", "inverse", "exponential"][nt], this.pannerNode.refDistance = rt, this.pannerNode.maxDistance = it, this.pannerNode.rolloffFactor = st), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(i(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !e) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(i(this.tag)), this.pannerEnabled = !1
            }
        }, N.prototype.setPan = function(e, t, n, r, i, s) {
            this.pannerEnabled && W === R && (this.pannerNode.setPosition(e, t, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(n)), Math.sin(cr.to_radians(n)), 0), this.pannerNode.coneInnerAngle = r, this.pannerNode.coneOuterAngle = i, this.pannerNode.coneOuterGain = s, this.panX = e, this.panY = t, this.panAngle = n, this.panConeInner = r, this.panConeOuter = i, this.panConeOuterGain = s)
        }, N.prototype.setObject = function(e) {
            this.pannerEnabled && W === R && (this.objectTracker || (this.objectTracker = new x), this.objectTracker.setObject(e))
        }, N.prototype.tick = function(e) {
            if (this.pannerEnabled && W === R && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(e);
                var t = this.objectTracker.obj,
                    n = cr.rotatePtAround(t.x, t.y, -t.layer.getAngle(), Z, et, !0),
                    r = cr.rotatePtAround(t.x, t.y, -t.layer.getAngle(), Z, et, !1);
                this.pannerNode.setPosition(n, r, 0);
                var i = 0;
                "undefined" != typeof this.objectTracker.obj.angle && (i = t.angle - t.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(i), Math.sin(i), 0)), n = cr.rotatePtAround(this.objectTracker.getVelocityX(), this.objectTracker.getVelocityY(), -t.layer.getAngle(), 0, 0, !0), r = cr.rotatePtAround(this.objectTracker.getVelocityX(), this.objectTracker.getVelocityY(), -t.layer.getAngle(), 0, 0, !1), this.pannerNode.setVelocity(n, r, 0)
            }
        }, N.prototype.play = function(e, t, n) {
            var r = this.instanceObject;
            this.looping = e, this.volume = t;
            var i = n || 0;
            switch (this.myapi) {
                case q:
                    if (1 !== r.playbackRate && (r.playbackRate = 1), r.volume !== t * Y && (r.volume = t * Y), r.loop !== e && (r.loop = e), r.muted && (r.muted = !1), r.currentTime !== i) try {
                        r.currentTime = i
                    } catch (s) {}
                    if (this.is_music && at && !B.isInUserInputEvent) ft.push(this);
                    else try {
                        this.instanceObject.play()
                    } catch (o) {}
                    break;
                case R:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === R) this.fresh || (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.loop = e, this.gainNode.gain.value = t * Y, 0 === i ? u(this.instanceObject) : a(this.instanceObject, i, this.getDuration());
                    else {
                        if (1 !== r.playbackRate && (r.playbackRate = 1), r.loop !== e && (r.loop = e), this.gainNode.gain.value = t * Y, r.currentTime !== i) try {
                            r.currentTime = i
                        } catch (s) {}
                        this.is_music && at && !B.isInUserInputEvent ? ft.push(this) : r.play()
                    }
                    break;
                case U:
                    (!this.fresh && this.stopped || 0 !== i) && r.seekTo(i), r.play(), this.pgended = !1;
                    break;
                case z:
                    B.isDirectCanvas ? AppMobi.context.playSound(this.src, e) : AppMobi.player.playSound(this.src, e)
            }
            this.playbackRate = 1, this.startTime = B.kahanTime.sum - i, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, N.prototype.stop = function() {
            switch (this.myapi) {
                case q:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case R:
                    this.buffer.myapi === R ? f(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case U:
                    this.instanceObject.stop();
                    break;
                case z:
                    B.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, N.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case q:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case R:
                        this.buffer.myapi === R ? (this.resume_position = this.getPlaybackTime(), this.looping && (this.resume_position = this.resume_position % this.getDuration()), f(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case U:
                        this.instanceObject.pause();
                        break;
                    case z:
                        B.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, N.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case q:
                        this.instanceObject.play();
                        break;
                    case R:
                        this.buffer.myapi === R ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.loop = this.looping, this.gainNode.gain.value = Y * this.volume * this.mutevol, this.startTime = B.kahanTime.sum - this.resume_position, a(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                        break;
                    case U:
                        this.instanceObject.play();
                        break;
                    case z:
                        B.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, N.prototype.seek = function(e) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case q:
                    try {
                        this.instanceObject.currentTime = e
                    } catch (t) {}
                    break;
                case R:
                    if (this.buffer.myapi === R) this.is_paused ? this.resume_position = e : (this.pause(), this.resume_position = e, this.resume());
                    else try {
                        this.instanceObject.currentTime = e
                    } catch (t) {}
                    break;
                case U:
                    break;
                case z:
                    B.isDirectCanvas && AppMobi.context.seekSound(this.src, e)
            }
        }, N.prototype.reconnect = function(e) {
            this.myapi === R && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(e)) : (this.gainNode.disconnect(), this.gainNode.connect(e)))
        }, N.prototype.getDuration = function() {
            switch (this.myapi) {
                case q:
                    return "undefined" != typeof this.instanceObject.duration ? this.instanceObject.duration : 0;
                case R:
                    return this.buffer.bufferObject.duration;
                case U:
                    return this.instanceObject.getDuration();
                case z:
                    return B.isDirectCanvas ? AppMobi.context.getDurationSound(this.src) : 0
            }
            return 0
        }, N.prototype.getPlaybackTime = function() {
            var e = this.getDuration(),
                t = 0;
            switch (this.myapi) {
                case q:
                    "undefined" != typeof this.instanceObject.currentTime && (t = this.instanceObject.currentTime);
                    break;
                case R:
                    if (this.buffer.myapi === R) {
                        if (this.is_paused) return this.resume_position;
                        t = B.kahanTime.sum - this.startTime
                    } else "undefined" != typeof this.instanceObject.currentTime && (t = this.instanceObject.currentTime);
                    break;
                case U:
                    break;
                case z:
                    B.isDirectCanvas && (t = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return !this.looping && t > e && (t = e), t
        }, N.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, N.prototype.setVolume = function(e) {
            this.volume = e, this.updateVolume()
        }, N.prototype.updateVolume = function() {
            var e = this.volume * Y;
            switch (this.myapi) {
                case q:
                    this.instanceObject.volume && this.instanceObject.volume !== e && (this.instanceObject.volume = e);
                    break;
                case R:
                    this.gainNode.gain.value = e * this.mutevol;
                    break;
                case U:
                    break;
                case z:
            }
        }, N.prototype.getVolume = function() {
            return this.volume
        }, N.prototype.doSetMuted = function(e) {
            switch (this.myapi) {
                case q:
                    this.instanceObject.muted !== !!e && (this.instanceObject.muted = !!e);
                    break;
                case R:
                    this.mutevol = e ? 0 : 1, this.gainNode.gain.value = Y * this.volume * this.mutevol;
                    break;
                case U:
                    break;
                case z:
            }
        }, N.prototype.setMuted = function(e) {
            this.is_muted = !!e, this.doSetMuted(this.is_muted || this.is_silent)
        }, N.prototype.setSilent = function(e) {
            this.is_silent = !!e, this.doSetMuted(this.is_muted || this.is_silent)
        }, N.prototype.setLooping = function(e) {
            switch (this.looping = e, this.myapi) {
                case q:
                    this.instanceObject.loop !== !!e && (this.instanceObject.loop = !!e);
                    break;
                case R:
                    this.instanceObject.loop !== !!e && (this.instanceObject.loop = !!e);
                    break;
                case U:
                    break;
                case z:
                    B.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, e)
            }
        }, N.prototype.setPlaybackRate = function(e) {
            this.playbackRate = e, this.updatePlaybackRate()
        }, N.prototype.updatePlaybackRate = function() {
            var e = this.playbackRate;
            switch ((1 === Q && !this.is_music || 2 === Q) && (e *= B.timescale), this.myapi) {
                case q:
                    this.instanceObject.playbackRate !== e && (this.instanceObject.playbackRate = e);
                    break;
                case R:
                    this.buffer.myapi === R ? this.instanceObject.playbackRate.value !== e && (this.instanceObject.playbackRate.value = e) : this.instanceObject.playbackRate !== e && (this.instanceObject.playbackRate = e);
                    break;
                case U:
                    break;
                case z:
            }
        }, N.prototype.setSuspended = function(e) {
            switch (this.myapi) {
                case q:
                    e ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && this.instanceObject.play();
                    break;
                case R:
                    e ? this.isPlaying() ? (this.buffer.myapi === R ? (this.resume_position = this.getPlaybackTime(), this.looping && (this.resume_position = this.resume_position % this.getDuration()), f(this.instanceObject)) : this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === R ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.loop = this.looping, this.gainNode.gain.value = Y * this.volume * this.mutevol, this.startTime = B.kahanTime.sum - this.resume_position, a(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play());
                    break;
                case U:
                    e ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && this.instanceObject.play();
                    break;
                case z:
            }
        }, P.Instance = function(e) {
            if (this.type = e, this.runtime = e.runtime, B = this.runtime, j = this, this.listenerTracker = null, this.listenerZ = -600, !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || (at = !0), X = null, "undefined" != typeof AudioContext ? (W = R, X = new AudioContext) : "undefined" != typeof webkitAudioContext && (W = R, X = new webkitAudioContext), (this.runtime.isiOS && W === R || at) && document.addEventListener("touchstart", function() {
                var e, t, n;
                if (!pt && X) {
                    var r = X.createBuffer(1, 1, 22050),
                        i = X.createBufferSource();
                    i.buffer = r, i.connect(X.destination), u(i), pt = !0
                }
                if (at) {
                    if (!G)
                        for (e = 0, t = ft.length; t > e; ++e) n = ft[e], n.stopped || n.is_paused || n.instanceObject.play();
                    ft.length = 0
                }
            }, !0), W !== R && (this.runtime.isPhoneGap && "undefined" != typeof window.Media ? W = U : this.runtime.isAppMobi && (W = z)), W === U) {
                I = location.href;
                var t = I.lastIndexOf("/");
                t > -1 && (I = I.substr(0, t + 1)), I = I.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) K = this.runtime.isAndroid;
                else try {
                    K = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (n) {
                    K = !1
                }
                switch (W) {
                    case q:
                        break;
                    case R:
                        break;
                    case U:
                        break;
                    case z:
                }
                this.runtime.tickMe(this)
            }
        };
        var dt = P.Instance.prototype;
        dt.onCreate = function() {
            this.runtime.audioInstance = this, Q = this.properties[0], this.saveload = this.properties[1], tt = this.properties[2], nt = this.properties[3], this.listenerZ = -this.properties[4], rt = this.properties[5], it = this.properties[6], st = this.properties[7], this.listenerTracker = new x, W === R && (X.listener.speedOfSound = this.properties[8], X.listener.dopplerFactor = this.properties[9], X.listener.setPosition(this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.listenerZ), X.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(e, t) {
                ot && ot.disconnect(), ut = t.toLowerCase(), ot = X.createMediaStreamSource(e), ot.connect(i(ut))
            }), this.runtime.addSuspendCallback(function(e) {
                j.onSuspend(e)
            });
            var e = this;
            this.runtime.addDestroyCallback(function(t) {
                e.onInstanceDestroyed(t)
            })
        }, dt.onInstanceDestroyed = function(e) {
            var t, n, r;
            for (t = 0, n = $.length; n > t; t++) r = $[t], r.objectTracker && r.objectTracker.obj === e && (r.objectTracker.obj = null, r.pannerEnabled && r.isPlaying() && r.looping && r.stop());
            this.listenerTracker.obj === e && (this.listenerTracker.obj = null)
        }, dt.saveToJSON = function() {
            var e, t, n, r, i, s, o, u = {
                    silent: G,
                    masterVolume: Y,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                a = u.playing;
            for (e = 0, t = $.length; t > e; e++) n = $[e], n.isPlaying() && 3 !== this.saveload && (n.is_music && 1 === this.saveload || (n.is_music || 2 !== this.saveload) && (o = n.getPlaybackTime(), n.looping && (o %= n.getDuration()), r = {
                tag: n.tag,
                buffersrc: n.buffer.src,
                is_music: n.is_music,
                playbackTime: o,
                volume: n.volume,
                looping: n.looping,
                muted: n.is_muted,
                playbackRate: n.playbackRate,
                paused: n.is_paused,
                resume_position: n.resume_position
            }, n.pannerEnabled && (r.pan = {}, s = r.pan, n.objectTracker && n.objectTracker.hasObject() ? s.objUid = n.objectTracker.obj.uid : (s.x = n.panX, s.y = n.panY, s.a = n.panAngle), s.ia = n.panConeInner, s.oa = n.panConeOuter, s.og = n.panConeOuterGain), a.push(r)));
            var f, l = u.effects;
            for (i in lt)
                if (lt.hasOwnProperty(i)) {
                    for (f = [], e = 0, t = lt[i].length; t > e; e++) f.push({
                        type: lt[i][e].type,
                        params: lt[i][e].params
                    });
                    l[i] = f
                }
            return u
        };
        var vt = [];
        dt.loadFromJSON = function(e) {
            var t = e.silent;
            Y = e.masterVolume, this.listenerZ = e.listenerZ, this.listenerTracker.setObject(null);
            var n = e.listenerUid; - 1 !== n && (this.listenerTracker.loadUid = n, vt.push(this.listenerTracker));
            var r, i, s, o, u, a, f, l, w, T, N, C, k, L, O = e.playing;
            if (3 !== this.saveload)
                for (r = 0, i = $.length; i > r; r++) N = $[r], N.is_music && 1 === this.saveload || (N.is_music || 2 !== this.saveload) && N.stop();
            var M, _, D, P;
            for (C in lt)
                if (lt.hasOwnProperty(C))
                    for (r = 0, i = lt[C].length; i > r; r++) lt[C][r].remove();
            cr.wipe(lt);
            for (C in e.effects)
                if (e.effects.hasOwnProperty(C))
                    for (M = e.effects[C], r = 0, i = M.length; i > r; r++) switch (_ = M[r].type, D = M[r].params, _) {
                        case "filter":
                            A(C, new c(D[0], D[1], D[2], D[3], D[4], D[5]));
                            break;
                        case "delay":
                            A(C, new h(D[0], D[1], D[2]));
                            break;
                        case "convolve":
                            o = D[2], T = this.getAudioBuffer(o, !1), T.bufferObject ? P = new p(T.bufferObject, D[0], D[1], o) : (P = new p(null, D[0], D[1], o), T.normalizeWhenReady = D[0], T.convolveWhenReady = P), A(C, P);
                            break;
                        case "flanger":
                            A(C, new d(D[0], D[1], D[2], D[3], D[4]));
                            break;
                        case "phaser":
                            A(C, new v(D[0], D[1], D[2], D[3], D[4], D[5]));
                            break;
                        case "gain":
                            A(C, new m(D[0]));
                            break;
                        case "tremolo":
                            A(C, new g(D[0], D[1]));
                            break;
                        case "ringmod":
                            A(C, new y(D[0], D[1]));
                            break;
                        case "distortion":
                            A(C, new b(D[0], D[1], D[2], D[3], D[4]));
                            break;
                        case "compressor":
                            A(C, new E(D[0], D[1], D[2], D[3], D[4]));
                            break;
                        case "analyser":
                            A(C, new S(D[0], D[1]))
                    }
                for (r = 0, i = O.length; i > r; r++) 3 !== this.saveload && (s = O[r], o = s.buffersrc, u = s.is_music, a = s.tag, f = s.playbackTime, l = s.looping, w = s.volume, k = s.pan, L = k && k.hasOwnProperty("objUid") ? k.objUid : -1, u && 1 === this.saveload || (u || 2 !== this.saveload) && (N = this.getAudioInstance(o, a, u, l, w), N ? (N.resume_position = s.resume_position, N.setPannerEnabled(!!k), N.play(l, w, f), N.updatePlaybackRate(), N.updateVolume(), N.doSetMuted(N.is_muted || N.is_silent), s.paused && N.pause(), s.muted && N.setMuted(!0), N.doSetMuted(N.is_muted || N.is_silent), k && (-1 !== L ? (N.objectTracker = N.objectTracker || new x, N.objectTracker.loadUid = L, vt.push(N.objectTracker)) : N.setPan(k.x, k.y, k.a, k.ia, k.oa, k.og))) : (T = this.getAudioBuffer(o, u), T.seekWhenReady = f, T.pauseWhenReady = s.paused, k && T.panWhenReady.push(-1 !== L ? {
                    objUid: L,
                    ia: k.ia,
                    oa: k.oa,
                    og: k.og,
                    thistag: a
                } : {
                    x: k.x,
                    y: k.y,
                    a: k.a,
                    ia: k.ia,
                    oa: k.oa,
                    og: k.og,
                    thistag: a
                }))));
            if (t && !G) {
                for (r = 0, i = $.length; i > r; r++) $[r].setSilent(!0);
                G = !0
            } else if (!t && G) {
                for (r = 0, i = $.length; i > r; r++) $[r].setSilent(!1);
                G = !1
            }
        }, dt.afterLoad = function() {
            var e, t, n, r;
            for (e = 0, t = vt.length; t > e; e++) n = vt[e], r = this.runtime.getObjectByUID(n.loadUid), n.setObject(r), n.loadUid = -1, r && (Z = r.x, et = r.y);
            vt.length = 0
        }, dt.onSuspend = function(e) {
            var t, n;
            for (t = 0, n = $.length; n > t; t++) $[t].setSuspended(e)
        }, dt.tick = function() {
            var e, t, n, r = this.runtime.dt;
            for (e = 0, t = $.length; t > e; e++) n = $[e], n.tick(r), n.myapi !== q && n.myapi !== z && (n.fresh || n.stopped || !n.hasEnded() || (n.stopped = !0, F = n.tag, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, j))), 0 !== Q && n.updatePlaybackRate();
            var i, s, o;
            for (i in lt)
                if (lt.hasOwnProperty(i))
                    for (s = lt[i], e = 0, t = s.length; t > e; e++) o = s[e], o.tick && o.tick();
            W === R && this.listenerTracker.hasObject() && (this.listenerTracker.tick(r), Z = this.listenerTracker.obj.x, et = this.listenerTracker.obj.y, X.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ), X.listener.setVelocity(this.listenerTracker.getVelocityX(), this.listenerTracker.getVelocityY(), 0))
        };
        var mt = [];
        dt.setPreloadList = function(e) {
            var t, n, r, i, s, o, u = 0;
            for (t = 0, n = e.length; n > t; ++t) r = e[t], i = r[0], s = 2 * r[1], o = i.length > 4 && ".ogg" === i.substr(i.length - 4), (o && K || !o && !K) && (mt.push({
                filename: i,
                size: s,
                obj: null
            }), u += s);
            return u
        }, dt.startPreloads = function() {
            var e, t, n, r;
            for (e = 0, t = mt.length; t > e; ++e) n = mt[e], r = this.runtime.files_subfolder + n.filename, n.obj = this.getAudioBuffer(r, !1)
        }, dt.getPreloadedSize = function() {
            var e, t, n, r = 0;
            for (e = 0, t = mt.length; t > e; ++e) n = mt[e], n.obj.isLoadedAndDecoded() || n.obj.hasFailedToLoad() || this.runtime.isDomFree ? r += n.size : n.obj.isLoaded() && (r += Math.floor(n.size / 2));
            return r
        }, dt.getAudioBuffer = function(e, t) {
            var n, r, i, s = null;
            for (n = 0, r = V.length; r > n; n++)
                if (i = V[n], i.src === e) {
                    s = i;
                    break
                }
            return s || (s = new T(e, t), V.push(s)), s
        }, dt.getAudioInstance = function(e, t, n, r, i) {
            var s, o, u;
            for (s = 0, o = $.length; o > s; s++)
                if (u = $[s], u.src === e && (u.canBeRecycled() || n)) return u.tag = t, u;
            var a = this.getAudioBuffer(e, n);
            return a.bufferObject ? (u = new N(a, t), $.push(u), u) : ("<preload>" !== t && (a.playTagWhenReady = t, a.loopWhenReady = r, a.volumeWhenReady = i), null)
        };
        var gt = [];
        O.prototype.OnEnded = function(e) {
            return cr.equals_nocase(F, e)
        }, O.prototype.PreloadsComplete = function() {
            var e, t;
            for (e = 0, t = V.length; t > e; e++)
                if (!V[e].isLoaded() && !V[e].hasFailedToLoad()) return !1;
            return !0
        }, O.prototype.AdvancedAudioSupported = function() {
            return W === R
        }, O.prototype.IsSilent = function() {
            return G
        }, O.prototype.IsAnyPlaying = function() {
            var e, t;
            for (e = 0, t = $.length; t > e; e++)
                if ($[e].isPlaying()) return !0;
            return !1
        }, O.prototype.IsTagPlaying = function(e) {
            k(e);
            var t, n;
            for (t = 0, n = gt.length; n > t; t++)
                if (gt[t].isPlaying()) return !0;
            return !1
        }, P.cnds = new O, M.prototype.Play = function(t, n, r, i) {
            if (!G) {
                var s = e(r),
                    o = t[1],
                    u = this.runtime.files_subfolder + t[0] + (K ? ".ogg" : ".m4a");
                J = this.getAudioInstance(u, i, o, 0 !== n, s), J && (J.setPannerEnabled(!1), J.play(0 !== n, s))
            }
        }, M.prototype.PlayAtPosition = function(t, n, r, i, s, o, u, a, f, l) {
            if (!G) {
                var c = e(r),
                    h = t[1],
                    p = this.runtime.files_subfolder + t[0] + (K ? ".ogg" : ".m4a");
                if (J = this.getAudioInstance(p, l, h, 0 !== n, c), !J) {
                    var d = this.getAudioBuffer(p, h);
                    return void d.panWhenReady.push({
                        x: i,
                        y: s,
                        a: o,
                        ia: u,
                        oa: a,
                        og: e(f),
                        thistag: l
                    })
                }
                J.setPannerEnabled(!0), J.setPan(i, s, o, u, a, e(f)), J.play(0 !== n, c)
            }
        }, M.prototype.PlayAtObject = function(t, n, r, i, s, o, u, a) {
            if (!G && i) {
                var f = i.getFirstPicked();
                if (f) {
                    var l = e(r),
                        c = t[1],
                        h = this.runtime.files_subfolder + t[0] + (K ? ".ogg" : ".m4a");
                    if (J = this.getAudioInstance(h, a, c, 0 !== n, l), !J) {
                        var p = this.getAudioBuffer(h, c);
                        return void p.panWhenReady.push({
                            obj: f,
                            ia: s,
                            oa: o,
                            og: e(u),
                            thistag: a
                        })
                    }
                    J.setPannerEnabled(!0);
                    var d = cr.rotatePtAround(f.x, f.y, -f.layer.getAngle(), Z, et, !0),
                        v = cr.rotatePtAround(f.x, f.y, -f.layer.getAngle(), Z, et, !1);
                    J.setPan(d, v, cr.to_degrees(f.angle - f.layer.getAngle()), s, o, e(u)), J.setObject(f), J.play(0 !== n, l)
                }
            }
        }, M.prototype.PlayByName = function(t, n, r, i, s) {
            if (!G) {
                var o = e(i),
                    u = 1 === t,
                    a = this.runtime.files_subfolder + n.toLowerCase() + (K ? ".ogg" : ".m4a");
                J = this.getAudioInstance(a, s, u, 0 !== r, o), J && (J.setPannerEnabled(!1), J.play(0 !== r, o))
            }
        }, M.prototype.PlayAtPositionByName = function(t, n, r, i, s, o, u, a, f, l, c) {
            if (!G) {
                var h = e(i),
                    p = 1 === t,
                    d = this.runtime.files_subfolder + n.toLowerCase() + (K ? ".ogg" : ".m4a");
                if (J = this.getAudioInstance(d, c, p, 0 !== r, h), !J) {
                    var v = this.getAudioBuffer(d, p);
                    return void v.panWhenReady.push({
                        x: s,
                        y: o,
                        a: u,
                        ia: a,
                        oa: f,
                        og: e(l),
                        thistag: c
                    })
                }
                J.setPannerEnabled(!0), J.setPan(s, o, u, a, f, e(l)), J.play(0 !== r, h)
            }
        }, M.prototype.PlayAtObjectByName = function(t, n, r, i, s, o, u, a, f) {
            if (!G && s) {
                var l = s.getFirstPicked();
                if (l) {
                    var c = e(i),
                        h = 1 === t,
                        p = this.runtime.files_subfolder + n.toLowerCase() + (K ? ".ogg" : ".m4a");
                    if (J = this.getAudioInstance(p, f, h, 0 !== r, c), !J) {
                        var d = this.getAudioBuffer(p, h);
                        return void d.panWhenReady.push({
                            obj: l,
                            ia: o,
                            oa: u,
                            og: e(a),
                            thistag: f
                        })
                    }
                    J.setPannerEnabled(!0);
                    var v = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), Z, et, !0),
                        m = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), Z, et, !1);
                    J.setPan(v, m, cr.to_degrees(l.angle - l.layer.getAngle()), o, u, e(a)), J.setObject(l), J.play(0 !== r, c)
                }
            }
        }, M.prototype.SetLooping = function(e, t) {
            k(e);
            var n, r;
            for (n = 0, r = gt.length; r > n; n++) gt[n].setLooping(0 === t)
        }, M.prototype.SetMuted = function(e, t) {
            k(e);
            var n, r;
            for (n = 0, r = gt.length; r > n; n++) gt[n].setMuted(0 === t)
        }, M.prototype.SetVolume = function(t, n) {
            k(t);
            var r, i, s = e(n);
            for (r = 0, i = gt.length; i > r; r++) gt[r].setVolume(s)
        }, M.prototype.Preload = function(e) {
            if (!G) {
                var t = e[1],
                    n = this.runtime.files_subfolder + e[0] + (K ? ".ogg" : ".m4a");
                return W === z ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(n) : AppMobi.player.loadSound(n)) : void(W !== U && this.getAudioInstance(n, "<preload>", t, !1))
            }
        }, M.prototype.PreloadByName = function(e, t) {
            if (!G) {
                var n = 1 === e,
                    r = this.runtime.files_subfolder + t.toLowerCase() + (K ? ".ogg" : ".m4a");
                return W === z ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(r) : AppMobi.player.loadSound(r)) : void(W !== U && this.getAudioInstance(r, "<preload>", n, !1))
            }
        }, M.prototype.SetPlaybackRate = function(e, t) {
            k(e), 0 > t && (t = 0);
            var n, r;
            for (n = 0, r = gt.length; r > n; n++) gt[n].setPlaybackRate(t)
        }, M.prototype.Stop = function(e) {
            k(e);
            var t, n;
            for (t = 0, n = gt.length; n > t; t++) gt[t].stop()
        }, M.prototype.StopAll = function() {
            var e, t;
            for (e = 0, t = $.length; t > e; e++) $[e].stop()
        }, M.prototype.SetPaused = function(e, t) {
            k(e);
            var n, r;
            for (n = 0, r = gt.length; r > n; n++) 0 === t ? gt[n].pause() : gt[n].resume()
        }, M.prototype.Seek = function(e, t) {
            k(e);
            var n, r;
            for (n = 0, r = gt.length; r > n; n++) gt[n].seek(t)
        }, M.prototype.SetSilent = function(e) {
            var t, n;
            if (2 === e && (e = G ? 1 : 0), 0 !== e || G) {
                if (1 === e && G) {
                    for (t = 0, n = $.length; n > t; t++) $[t].setSilent(!1);
                    G = !1
                }
            } else {
                for (t = 0, n = $.length; n > t; t++) $[t].setSilent(!0);
                G = !0
            }
        }, M.prototype.SetMasterVolume = function(t) {
            Y = e(t);
            var n, r;
            for (n = 0, r = $.length; r > n; n++) $[n].updateVolume()
        }, M.prototype.AddFilterEffect = function(e, t, n, r, i, s, o) {
            W !== R || 0 > t || t >= ct.length || !X.createBiquadFilter || (e = e.toLowerCase(), o /= 100, 0 > o && (o = 0), o > 1 && (o = 1), A(e, new c(t, n, r, i, s, o)))
        }, M.prototype.AddDelayEffect = function(t, n, r, i) {
            W === R && (t = t.toLowerCase(), i /= 100, 0 > i && (i = 0), i > 1 && (i = 1), A(t, new h(n, e(r), i)))
        }, M.prototype.AddFlangerEffect = function(e, t, n, r, i, s) {
            W === R && X.createOscillator && (e = e.toLowerCase(), s /= 100, 0 > s && (s = 0), s > 1 && (s = 1), A(e, new d(t / 1e3, n / 1e3, r, i / 100, s)))
        }, M.prototype.AddPhaserEffect = function(e, t, n, r, i, s, o) {
            W === R && X.createOscillator && (e = e.toLowerCase(), o /= 100, 0 > o && (o = 0), o > 1 && (o = 1), A(e, new v(t, n, r, i, s, o)))
        }, M.prototype.AddConvolutionEffect = function(e, t, n, r) {
            if (W === R && X.createConvolver) {
                var i = 0 === n,
                    s = this.runtime.files_subfolder + t[0] + (K ? ".ogg" : ".m4a"),
                    o = this.getAudioBuffer(s, !1);
                e = e.toLowerCase(), r /= 100, 0 > r && (r = 0), r > 1 && (r = 1);
                var u;
                o.bufferObject ? u = new p(o.bufferObject, i, r, s) : (u = new p(null, i, r, s), o.normalizeWhenReady = i, o.convolveWhenReady = u), A(e, u)
            }
        }, M.prototype.AddGainEffect = function(t, n) {
            W === R && (t = t.toLowerCase(), A(t, new m(e(n))))
        }, M.prototype.AddMuteEffect = function(e) {
            W === R && (e = e.toLowerCase(), A(e, new m(0)))
        }, M.prototype.AddTremoloEffect = function(e, t, n) {
            W === R && X.createOscillator && (e = e.toLowerCase(), n /= 100, 0 > n && (n = 0), n > 1 && (n = 1), A(e, new g(t, n)))
        }, M.prototype.AddRingModEffect = function(e, t, n) {
            W === R && X.createOscillator && (e = e.toLowerCase(), n /= 100, 0 > n && (n = 0), n > 1 && (n = 1), A(e, new y(t, n)))
        }, M.prototype.AddDistortionEffect = function(e, t, n, r, i, s) {
            W === R && X.createWaveShaper && (e = e.toLowerCase(), s /= 100, 0 > s && (s = 0), s > 1 && (s = 1), A(e, new b(t, n, r, i, s)))
        }, M.prototype.AddCompressorEffect = function(e, t, n, r, i, s) {
            W === R && X.createDynamicsCompressor && (e = e.toLowerCase(), A(e, new E(t, n, r, i / 1e3, s / 1e3)))
        }, M.prototype.AddAnalyserEffect = function(e, t, n) {
            W === R && (e = e.toLowerCase(), A(e, new S(t, n)))
        }, M.prototype.RemoveEffects = function(e) {
            if (W === R) {
                e = e.toLowerCase();
                var t, n, r;
                if (lt.hasOwnProperty(e) && (r = lt[e], r.length)) {
                    for (t = 0, n = r.length; n > t; t++) r[t].remove();
                    r.length = 0, L(e)
                }
            }
        }, M.prototype.SetEffectParameter = function(e, t, n, r, i, s) {
            if (W === R) {
                e = e.toLowerCase(), t = Math.floor(t);
                var o;
                lt.hasOwnProperty(e) && (o = lt[e], 0 > t || t >= o.length || o[t].setParam(n, r, i, s))
            }
        }, M.prototype.SetListenerObject = function(e) {
            if (e && W === R) {
                var t = e.getFirstPicked();
                t && (this.listenerTracker.setObject(t), Z = t.x, et = t.y)
            }
        }, M.prototype.SetListenerZ = function(e) {
            this.listenerZ = e
        }, P.acts = new M, _.prototype.Duration = function(e, t) {
            k(t, !0), e.set_float(gt.length ? gt[0].getDuration() : 0)
        }, _.prototype.PlaybackTime = function(e, t) {
            k(t, !0), e.set_float(gt.length ? gt[0].getPlaybackTime() : 0)
        }, _.prototype.Volume = function(e, n) {
            if (k(n, !0), gt.length) {
                var r = gt[0].getVolume();
                e.set_float(t(r))
            } else e.set_float(0)
        }, _.prototype.MasterVolume = function(e) {
            e.set_float(Y)
        }, _.prototype.EffectCount = function(e, t) {
            t = t.toLowerCase();
            var n = null;
            lt.hasOwnProperty(t) && (n = lt[t]), e.set_int(n ? n.length : 0)
        }, _.prototype.AnalyserFreqBinCount = function(e, t, n) {
            t = t.toLowerCase(), n = Math.floor(n);
            var r = D(t, n);
            e.set_int(r ? r.node.frequencyBinCount : 0)
        }, _.prototype.AnalyserFreqBinAt = function(e, t, n, r) {
            t = t.toLowerCase(), n = Math.floor(n), r = Math.floor(r);
            var i = D(t, n);
            e.set_float(i ? 0 > r || r >= i.node.frequencyBinCount ? 0 : i.freqBins[r] : 0)
        }, _.prototype.AnalyserPeakLevel = function(e, t, n) {
            t = t.toLowerCase(), n = Math.floor(n);
            var r = D(t, n);
            e.set_float(r ? r.peak : 0)
        }, _.prototype.AnalyserRMSLevel = function(e, t, n) {
            t = t.toLowerCase(), n = Math.floor(n);
            var r = D(t, n);
            e.set_float(r ? r.rms : 0)
        }, P.exps = new _
    }(), cr.plugins_.Browser = function(e) {
        this.runtime = e
    },
    function() {
        function Cnds() {}

        function Acts() {}

        function onFullscreenError() {
            "undefined" != typeof jQuery && crruntime.setSize(jQuery(window).width(), jQuery(window).height())
        }

        function Exps() {}
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {}, pluginProto.Instance = function(e) {
            this.type = e, this.runtime = e.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var e = this;
            window.addEventListener("resize", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, e)
            }), "undefined" != typeof navigator.onLine && (window.addEventListener("online", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, e)
            }), window.addEventListener("offline", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, e)
            })), "undefined" != typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                e.runtime.loadingprogress = 1, e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, e)
            }), window.applicationCache.addEventListener("progress", function(n) {
                e.runtime.loadingprogress = n.loaded / n.total
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, e)
            }), document.addEventListener("backbutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
            }), document.addEventListener("menubutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e)
            }), document.addEventListener("searchbutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, e)
            }), document.addEventListener("tizenhwkey", function(n) {
                var r;
                switch (n.keyName) {
                    case "back":
                        r = e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e), r || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        r = e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e), r || n.preventDefault()
                }
            })), this.runtime.isWindowsPhone81 && (WinJS.Application.onbackclick = function() {
                return !!e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
            }), this.runtime.addSuspendCallback(function(n) {
                n ? e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, e) : e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, e)
            }), this.is_arcade = "undefined" != typeof window.is_scirra_arcade
        }, Cnds.prototype.CookiesEnabled = function() {
            return navigator ? navigator.cookieEnabled : !1
        }, Cnds.prototype.IsOnline = function() {
            return navigator ? navigator.onLine : !1
        }, Cnds.prototype.HasJava = function() {
            return navigator ? navigator.javaEnabled() : !1
        }, Cnds.prototype.OnOnline = function() {
            return !0
        }, Cnds.prototype.OnOffline = function() {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function() {
            return "undefined" == typeof window.applicationCache ? !1 : window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.PageVisible = function() {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function() {
            return !0
        }, Cnds.prototype.OnPageHidden = function() {
            return !0
        }, Cnds.prototype.OnResize = function() {
            return !0
        }, Cnds.prototype.IsFullscreen = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function() {
            return !0
        }, Cnds.prototype.OnMenuButton = function() {
            return !0
        }, Cnds.prototype.OnSearchButton = function() {
            return !0
        }, Cnds.prototype.IsMetered = function() {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return e ? e.metered : !1
        }, Cnds.prototype.IsCharging = function() {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return e ? e.charging : !0
        }, Cnds.prototype.IsPortraitLandscape = function(e) {
            var t = window.innerWidth <= window.innerHeight ? 0 : 1;
            return t === e
        }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function(e) {
            this.runtime.isDomFree || alert(e.toString())
        }, Acts.prototype.Close = function() {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function() {
            if (this.runtime.isNodeWebkit) {
                var e = window.nwgui.Window.get();
                e.focus()
            } else this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function() {
            if (this.runtime.isNodeWebkit) {
                var e = window.nwgui.Window.get();
                e.blur()
            } else this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function() {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function() {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function() {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function(e, t) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(e) : this.runtime.isEjecta ? ejecta.openURL(e) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(e, {
                openExternal: !0
            }) : this.is_arcade || this.runtime.isDomFree || (2 !== t || this.is_arcade ? 1 !== t || this.is_arcade ? window.location = e : window.parent.location = e : window.top.location = e)
        }, Acts.prototype.GoToURLWindow = function(e, t) {
            console.log(e, t), this.runtime.isCocoonJs ? CocoonJS.App.openURL(e) : this.runtime.isEjecta ? ejecta.openURL(e) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(e, {
                openExternal: !0
            }) : this.is_arcade || this.runtime.isDomFree || (e.indexOf("more") >= 0 ? clickMore() : e.indexOf("share") >= 0 && showshare())
        }, Acts.prototype.Reload = function() {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;
        Acts.prototype.RequestFullScreen = function(e) {
            if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            if (e >= 2 && (e += 1), 6 === e && (e = 2), this.runtime.isNodeWebkit) this.runtime.isNodeFullscreen || (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = e >= 2 ? e : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen) return;
                this.runtime.fullscreen_scaling = e >= 2 ? e : 0;
                var t = this.runtime.canvasdiv || this.runtime.canvas;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, t.addEventListener("mozfullscreenerror", onFullscreenError), t.addEventListener("webkitfullscreenerror", onFullscreenError), t.addEventListener("msfullscreenerror", onFullscreenError), t.addEventListener("fullscreenerror", onFullscreenError)), cr.is_undefined(t.requestFullscreen) ? cr.is_undefined(t.webkitRequestFullScreen) ? cr.is_undefined(t.mozRequestFullScreen) ? cr.is_undefined(t.msRequestFullscreen) || t.msRequestFullscreen() : t.mozRequestFullScreen() : "undefined" != typeof Element && "undefined" != typeof Element.ALLOW_KEYBOARD_INPUT ? t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : t.webkitRequestFullScreen() : t.requestFullscreen()
            }
        }, Acts.prototype.CancelFullScreen = function() {
            return this.runtime.isDomFree ? void cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : void(this.runtime.isNodeWebkit ? this.runtime.isNodeFullscreen && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : cr.is_undefined(document.exitFullscreen) ? cr.is_undefined(document.webkitCancelFullScreen) ? cr.is_undefined(document.mozCancelFullScreen) ? cr.is_undefined(document.msExitFullscreen) || document.msExitFullscreen() : document.mozCancelFullScreen() : document.webkitCancelFullScreen() : document.exitFullscreen())
        }, Acts.prototype.Vibrate = function(e) {
            try {
                var t, n, r = e.split(",");
                for (t = 0, n = r.length; n > t; t++) r[t] = parseInt(r[t], 10);
                navigator.vibrate ? navigator.vibrate(r) : navigator.mozVibrate ? navigator.mozVibrate(r) : navigator.webkitVibrate ? navigator.webkitVibrate(r) : navigator.msVibrate && navigator.msVibrate(r)
            } catch (i) {}
        }, Acts.prototype.InvokeDownload = function(e, t) {
            var n = document.createElement("a");
            if ("undefined" == typeof n.download) window.open(e);
            else {
                var r = document.getElementsByTagName("body")[0];
                n.textContent = t, n.href = e, n.download = t, r.appendChild(n);
                var i = document.createEvent("MouseEvent");
                i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(i), r.removeChild(n)
            }
        }, Acts.prototype.InvokeDownloadString = function(e, t, n) {
            var r = "data:" + t + "," + encodeURIComponent(e),
                i = document.createElement("a");
            if ("undefined" == typeof i.download) window.open(r);
            else {
                var s = document.getElementsByTagName("body")[0];
                i.textContent = n, i.href = r, i.download = n, s.appendChild(i);
                var o = document.createEvent("MouseEvent");
                o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(o), s.removeChild(i)
            }
        }, Acts.prototype.ConsoleLog = function(e, t) {
            "undefined" != typeof console && (0 === e && console.log && console.log(t.toString()), 1 === e && console.warn && console.warn(t.toString()), 2 === e && console.error && console.error(t.toString()))
        }, Acts.prototype.ConsoleGroup = function(e) {
            console && console.group && console.group(e)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        Acts.prototype.LockOrientation = function(e) {
            if (e = Math.floor(e), !(0 > e || e >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var t = orientations[e];
                screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(e) {
            e.set_string(navigator && navigator.language ? navigator.language : "")
        }, Exps.prototype.Platform = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(e) {
            e.set_string(navigator && navigator.product ? navigator.product : "")
        }, Exps.prototype.Vendor = function(e) {
            e.set_string(navigator && navigator.vendor ? navigator.vendor : "")
        }, Exps.prototype.UserAgent = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(e) {
            e.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(e, t) {
            if (this.runtime.isDomFree) return void e.set_string("");
            var n = RegExp("[?&]" + t + "=([^&]*)").exec(window.location.search);
            e.set_string(n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : "")
        }, Exps.prototype.Bandwidth = function(e) {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e.set_float(t ? t.bandwidth : Number.POSITIVE_INFINITY)
        }, Exps.prototype.BatteryLevel = function(e) {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e.set_float(t ? t.level : 1)
        }, Exps.prototype.BatteryTimeLeft = function(e) {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e.set_float(t ? t.dischargingTime : Number.POSITIVE_INFINITY)
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (!eval) return void ret.set_any(0);
            var result = 0;
            try {
                result = eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
            ret.set_any("number" == typeof result ? result : "string" == typeof result ? result : "boolean" == typeof result && result ? 1 : 0)
        }, Exps.prototype.ScreenWidth = function(e) {
            e.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(e) {
            e.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(e) {
            e.set_float(this.runtime.devicePixelRatio)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.CJSAds = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}

        function n() {}
        var r = "",
            i = [],
            s = 0,
            o = 0,
            u = !1,
            a = !1,
            f = !1,
            l = !1,
            c = cr.plugins_.CJSAds.prototype;
        c.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var h = c.Type.prototype;
        h.onCreate = function() {}, c.Instance = function(e) {
            this.type = e, this.runtime = e.runtime
        };
        var p = c.Instance.prototype;
        p.onCreate = function() {
            this.isShowingBanner = !1, this.isShowingFullscreen = !1, this.triggerProduct = "", this.socialService = null, this.socialServiceAvailable = !1, this.storeServiceAvailable = this.runtime.isCocoonJs && "undefined" != typeof CocoonJS.Store.nativeExtensionObjectAvailable, this.storeManaged = 1 !== this.properties[0], this.storeSandboxed = 0 !== this.properties[1], this.onConsumePurchaseFailedTransactionId = "", this.onConsumePurchaseCompleted = "";
            var e = this;
            this.runtime.isCocoonJs && (CocoonJS.App.onTextDialogFinished.addEventListener(function(t) {
                r = t, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnKeyboardOK, e)
            }), CocoonJS.App.onTextDialogCancelled.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnKeyboardCancelled, e)
            }), CocoonJS.Ad.onBannerShown.addEventListener(function() {
                e.isShowingBanner = !0, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnBannerShown, e)
            }), CocoonJS.Ad.onBannerReady.addEventListener(function() {
                a = !0, u || (CocoonJS.Ad.setBannerLayout(o), CocoonJS.Ad.showBanner())
            }), CocoonJS.Ad.onFullScreenShown.addEventListener(function() {
                e.isShowingFullscreen = !0, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnFullscreenShown, e)
            }), CocoonJS.Ad.onFullScreenHidden.addEventListener(function() {
                e.isShowingFullscreen = !1, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnFullscreenHidden, e)
            }), CocoonJS.Ad.onFullScreenReady.addEventListener(function() {
                l = !0, preloadFullScreen || CocoonJS.Ad.showFullScreen()
            }), this.storeServiceAvailable && (CocoonJS.Store.onProductPurchaseCompleted.addEventListener(function(t) {
                e.triggerProduct = t.productId, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnPurchaseComplete, e), CocoonJS.Store.addPurchase(t), CocoonJS.Store.consumePurchase(t.transactionId, t.productId), CocoonJS.Store.finishPurchase(t.transactionId)
            }), CocoonJS.Store.onConsumePurchaseFailed.addEventListener(function(t) {
                this.onConsumePurchaseFailedTransactionId = t, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onConsumePurchaseFailed, e)
            }), CocoonJS.Store.onConsumePurchaseCompleted.addEventListener(function(t) {
                this.onConsumePurchaseCompleted = t, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onConsumePurchaseCompleted, e)
            }), CocoonJS.Store.onProductPurchaseFailed.addEventListener(function(t) {
                e.triggerProduct = t, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnPurchaseFail, e)
            }), CocoonJS.Store.onProductPurchaseStarted.addEventListener(function(t) {
                e.triggerProduct = t.productId, e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnPurchaseStart, e)
            }), CocoonJS.Store.onProductsFetchStarted.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onProductsFetchStarted, e)
            }), CocoonJS.Store.onProductsFetchFailed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onProductsFetchFailed, e)
            }), CocoonJS.Store.onProductsFetchCompleted.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.onProductsFetchCompleted, e)
            }), CocoonJS.Store.requestInitialization({
                managed: this.storeManaged,
                sandbox: this.storeSandboxed
            }), CocoonJS.Store.start()), this.socialService = CocoonJS.SocialGaming.GameCenter, this.socialServiceAvailable = !!this.socialService.nativeExtensionObjectAvailable, this.socialService.onRequestLoginSucceed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCLoginSuccess, e)
            }), this.socialService.onRequestLoginFailed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCLoginFail, e)
            }), this.socialService.onLogout.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCLogout, e)
            }), this.socialService.onRequestUserScoreSucceed.addEventListener(function(t) {
                s = t.score || 0, console.log("requested_score", s), e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCScoreReceived, e)
            }), this.socialService.onRequestUserScoreFailed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCScoreUnavailable, e)
            }), this.socialService.onSubmitUserScoreSucceed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCScoreSubmitSuccess, e)
            }), this.socialService.onSubmitUserScoreFailed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCScoreSubmitFail, e)
            }), this.socialService.onLeaderboardViewSucceed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCLeaderboardOpen, e)
            }), this.socialService.onLeaderboardViewClosed.addEventListener(function() {
                e.runtime.trigger(cr.plugins_.CJSAds.prototype.cnds.OnGCLeaderboardClose, e)
            }))
        }, e.prototype.IsShowingBanner = function() {
            return this.isShowingBanner
        }, e.prototype.IsCocoonJS = function() {
            return this.runtime.isCocoonJs
        }, e.prototype.OnBannerShown = function() {
            return !0
        }, e.prototype.OnFullscreenShown = function() {
            return !0
        }, e.prototype.OnFullscreenHidden = function() {
            return !0
        }, e.prototype.IsShowingFullscreen = function() {
            return this.isShowingFullscreen
        }, e.prototype.IsStoreAvailable = function() {
            return this.runtime.isCocoonJs ? this.storeServiceAvailable && CocoonJS.Store.canPurchase() : !1
        }, e.prototype.OnPurchaseStart = function(e) {
            return this.triggerProduct === e
        }, e.prototype.OnPurchaseComplete = function(e) {
            return this.triggerProduct === e
        }, e.prototype.OnPurchaseFail = function(e) {
            return this.triggerProduct === e
        }, e.prototype.onProductsFetchStarted = function() {
            return !0
        }, e.prototype.onConsumePurchaseFailed = function() {
            return !0
        }, e.prototype.onProductsFetchCompleted = function() {
            return !0
        }, e.prototype.onProductsFetchFailed = function() {
            return !0
        }, e.prototype.IsProductPurchased = function(e) {
            return this.runtime.isCocoonJs ? CocoonJS.Store.isProductPurchased(e) : !1
        }, e.prototype.OnKeyboardCancelled = function() {
            return !0
        }, e.prototype.OnKeyboardOK = function() {
            return !0
        }, e.prototype.IsGCAvailable = function() {
            return this.socialServiceAvailable
        }, e.prototype.IsGCLoggedIn = function() {
            return this.socialServiceAvailable ? this.socialService.isLoggedIn() : !1
        }, e.prototype.OnGCLoginSuccess = function() {
            return !0
        }, e.prototype.OnGCLoginFail = function() {
            return !0
        }, e.prototype.OnGCLogout = function() {
            return !0
        }, e.prototype.OnGCScoreReceived = function() {
            return !0
        }, e.prototype.OnGCScoreUnavailable = function() {
            return !0
        }, e.prototype.OnGCScoreSubmitSuccess = function() {
            return !0
        }, e.prototype.OnGCScoreSubmitFail = function() {
            return !0
        }, e.prototype.OnGCLeaderboardOpen = function() {
            return !0
        }, e.prototype.OnGCLeaderboardClose = function() {
            return !0
        }, c.cnds = new e, t.prototype.ShowBanner = function(e) {
            this.runtime.isCocoonJs && (o = 0 === e ? CocoonJS.Ad.BannerLayout.TOP_CENTER : CocoonJS.Ad.BannerLayout.BOTTOM_CENTER, u = !1, a ? (CocoonJS.Ad.setBannerLayout(o), CocoonJS.Ad.showBanner()) : CocoonJS.Ad.preloadBanner())
        }, t.prototype.ShowFullscreen = function() {
            this.runtime.isCocoonJs && (f = !1, l ? CocoonJS.Ad.showFullScreen() : CocoonJS.Ad.preloadFullScreen())
        }, t.prototype.HideBanner = function() {
            this.runtime.isCocoonJs && (CocoonJS.Ad.hideBanner(), this.isShowingBanner = !1)
        }, t.prototype.PreloadBanner = function() {
            this.runtime.isCocoonJs && (u = !0, CocoonJS.Ad.preloadBanner())
        }, t.prototype.PreloadFullscreen = function() {
            this.runtime.isCocoonJs && (f = !0, CocoonJS.Ad.preloadFullScreen())
        }, t.prototype.RefreshBanner = function() {
            this.runtime.isCocoonJs && CocoonJS.Ad.refreshBanner()
        }, t.prototype.RefreshFullscreen = function() {
            this.runtime.isCocoonJs && CocoonJS.Ad.refreshFullScreen()
        }, t.prototype.Purchase = function(e) {
            this.runtime.isCocoonJs && CocoonJS.Store.purchaseProduct(e)
        }, t.prototype.fetchProductsFromStore = function(e) {
            this.runtime.isCocoonJs && CocoonJS.Store.fetchProductsFromStore(e.split(","))
        }, t.prototype.restorePurchases = function() {
            return this.runtime.isCocoonJs ? CocoonJS.Store.restorePurchases() : void 0
        }, t.prototype.PurchasePreview = function(e) {
            this.runtime.isCocoonJs && CocoonJS.Store.purchaseProductModalWithPreview(e)
        }, t.prototype.RestorePurchases = function() {
            this.runtime.isCocoonJs && CocoonJS.Store.restorePurchases()
        }, t.prototype.PromptKeyboard = function(e, t, n, r, i, s) {
            if (this.runtime.isCocoonJs) {
                var o = ["text", "num", "phone", "email", "url"][r];
                CocoonJS.App.showTextDialog(e, t, n, o, i, s)
            }
        }, t.prototype.UpdateProductsList = function() {
            this.runtime.isCocoonJs && CocoonJS.Store.canPurchase() && (i = CocoonJS.Store.getProducts())
        }, t.prototype.GCLogin = function() {
            this.socialServiceAvailable && !this.socialService.isLoggedIn() && this.socialService.requestLogin()
        }, t.prototype.GCLogout = function() {
            this.socialServiceAvailable && this.socialService.isLoggedIn() && this.socialService.requestLogout()
        }, t.prototype.GCSubmitScore = function(e, t) {
            this.socialServiceAvailable && this.socialService.isLoggedIn() && (console.log(e), this.socialService.submitUserScore(e, t))
        }, t.prototype.GCRequestScore = function(e) {
            this.socialServiceAvailable && this.socialService.isLoggedIn() && this.socialService.requestUserScore(e)
        }, t.prototype.GCOpenLeaderboard = function(e) {
            this.socialServiceAvailable && this.socialService.isLoggedIn() && this.socialService.showLeaderboardView(e)
        }, c.acts = new t, n.prototype.InputText = function(e) {
            e.set_string(r)
        }, n.prototype.ProductCount = function(e) {
            e.set_int(i.length)
        }, n.prototype.ProductDescription = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].description)
        }, n.prototype.ProductLocalizedPrice = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].localizedPrice)
        }, n.prototype.ProductPrice = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].price)
        }, n.prototype.ProductAlias = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].productAlias)
        }, n.prototype.ProductID = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].productId)
        }, n.prototype.ProductTitle = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= i.length ? void e.set_string("") : void e.set_string(i[t].title)
        }, n.prototype.GameCenterScore = function(e) {
            e.set_float(s)
        }, c.exps = new n
    }(), cr.plugins_.Particles = function(e) {
        this.runtime = e
    },
    function() {
        function e(e) {
            this.owner = e, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }

        function t() {}

        function n() {}

        function r() {}
        var i = cr.plugins_.Particles.prototype;
        i.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var s = i.Type.prototype;
        s.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.idtkLoadDisposed = !0, this.texture_img.src = this.texture_file, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img))
        }, s.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, s.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, s.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, s.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, s.preloadCanvas2D = function(e) {
            e.drawImage(this.texture_img, 0, 0)
        }, e.prototype.init = function() {
            var e = this.owner;
            this.x = e.x - e.xrandom / 2 + Math.random() * e.xrandom, this.y = e.y - e.yrandom / 2 + Math.random() * e.yrandom, this.speed = e.initspeed - e.speedrandom / 2 + Math.random() * e.speedrandom, this.angle = e.angle - e.spraycone / 2 + Math.random() * e.spraycone, this.opacity = e.initopacity, this.size = e.initsize - e.sizerandom / 2 + Math.random() * e.sizerandom, this.grow = e.growrate - e.growrandom / 2 + Math.random() * e.growrandom, this.gs = 0, this.age = 0
        }, e.prototype.tick = function(e) {
            var t = this.owner;
            return this.x += Math.cos(this.angle) * this.speed * e, this.y += Math.sin(this.angle) * this.speed * e, this.y += this.gs * e, this.speed += t.acc * e, this.size += this.grow * e, this.gs += t.g * e, this.age += e, this.size < 1 ? void(this.active = !1) : (0 !== t.lifeanglerandom && (this.angle += Math.random() * t.lifeanglerandom * e - t.lifeanglerandom * e / 2), 0 !== t.lifespeedrandom && (this.speed += Math.random() * t.lifespeedrandom * e - t.lifespeedrandom * e / 2), 0 !== t.lifeopacityrandom && (this.opacity += Math.random() * t.lifeopacityrandom * e - t.lifeopacityrandom * e / 2, this.opacity < 0 ? this.opacity = 0 : this.opacity > 1 && (this.opacity = 1)), t.destroymode <= 1 && this.age >= t.timeout && (this.active = !1), void(2 === t.destroymode && this.speed <= 0 && (this.active = !1)))
        }, e.prototype.draw = function(e) {
            var t = this.owner.opacity * this.opacity;
            if (0 !== t) {
                0 === this.owner.destroymode && (t *= 1 - this.age / this.owner.timeout), e.globalAlpha = t;
                var n = this.x - this.size / 2,
                    r = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (n = n + .5 | 0, r = r + .5 | 0), e.drawImage(this.owner.type.texture_img, n, r, this.size, this.size)
            }
        }, e.prototype.drawGL = function(e) {
            var t = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (t *= 1 - this.age / this.owner.timeout);
            var n = this.size,
                r = n * this.owner.particlescale,
                i = this.x - n / 2,
                s = this.y - n / 2;
            this.owner.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), 1 > r || 0 === t || (r < e.minPointSize || r > e.maxPointSize ? (e.setOpacity(t), e.quad(i, s, i + n, s, i + n, s + n, i, s + n)) : e.point(this.x, this.y, r, t))
        }, e.prototype.left = function() {
            return this.x - this.size / 2
        }, e.prototype.right = function() {
            return this.x + this.size / 2
        }, e.prototype.top = function() {
            return this.y - this.size / 2
        }, e.prototype.bottom = function() {
            return this.y + this.size / 2
        }, i.Instance = function(e) {
            this.type = e, this.runtime = e.runtime
        };
        var o = i.Instance.prototype,
            u = [];
        o.onCreate = function() {
            var e = this.properties;
            if (this.rate = e[0], this.spraycone = cr.to_radians(e[1]), this.spraytype = e[2], this.spraying = !0, this.initspeed = e[3], this.initsize = e[4], this.initopacity = e[5] / 100, this.growrate = e[6], this.xrandom = e[7], this.yrandom = e[8], this.speedrandom = e[9], this.sizerandom = e[10], this.growrandom = e[11], this.acc = e[12], this.g = e[13], this.lifeanglerandom = e[14], this.lifespeedrandom = e[15], this.lifeopacityrandom = e[16], this.destroymode = e[17], this.timeout = e[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback(function(e) {
                e.bbox.set(e.particleBoxLeft, e.particleBoxTop, e.particleBoxRight, e.particleBoxBottom), e.bquad.set_from_rect(e.bbox), e.bbox_changed = !1, e.update_collision_cell()
            }), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var t = 0; t < this.rate; t++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, o.saveToJSON = function() {
            var e, t, n, r = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                i = r.p;
            for (e = 0, t = this.particles.length; t > e; e++) n = this.particles[e], i.push([n.x, n.y, n.speed, n.angle, n.opacity, n.grow, n.size, n.gs, n.age]);
            return r
        }, o.loadFromJSON = function(e) {
            this.rate = e.r, this.spraycone = e.sc, this.spraytype = e.st, this.spraying = e.s, this.initspeed = e.isp, this.initsize = e.isz, this.initopacity = e.io, this.growrate = e.gr, this.xrandom = e.xr, this.yrandom = e.yr, this.speedrandom = e.spr, this.sizerandom = e.szr, this.growrandom = e.grnd, this.acc = e.acc, this.g = e.g, this.lifeanglerandom = e.lar, this.lifespeedrandom = e.lsr, this.lifeopacityrandom = e.lor, this.destroymode = e.dm, this.timeout = e.to, this.particleCreateCounter = e.pcc, this.first_tick = e.ft, u.push.apply(u, this.particles), this.particles.length = 0;
            var t, n, r, i, s = e.p;
            for (t = 0, n = s.length; n > t; t++) r = this.allocateParticle(), i = s[t], r.x = i[0], r.y = i[1], r.speed = i[2], r.angle = i[3], r.opacity = i[4], r.grow = i[5], r.size = i[6], r.gs = i[7], r.age = i[8]
        }, o.onDestroy = function() {
            u.push.apply(u, this.particles), this.particles.length = 0
        }, o.allocateParticle = function() {
            var t;
            return u.length ? (t = u.pop(), t.owner = this) : t = new e(this), this.particles.push(t), t.active = !0, t
        }, o.tick = function() {
            var e, t, n, r, i, s = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += s * this.rate, r = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= r, e = 0; r > e; e++) n = this.allocateParticle(), n.init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, e = 0, i = 0, t = this.particles.length; t > e; e++) n = this.particles[e], this.particles[i] = n, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && n.init(), n.tick(s), n.active ? (n.left() < this.particleBoxLeft && (this.particleBoxLeft = n.left()), n.right() > this.particleBoxRight && (this.particleBoxRight = n.right()), n.top() < this.particleBoxTop && (this.particleBoxTop = n.top()), n.bottom() > this.particleBoxBottom && (this.particleBoxBottom = n.bottom()), i++) : u.push(n);
            this.particles.length = i, this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, o.draw = function(e) {
            var t, n, r, i = this.layer;
            for (t = 0, n = this.particles.length; n > t; t++) r = this.particles[t], r.right() >= i.viewLeft && r.bottom() >= i.viewTop && r.left() <= i.viewRight && r.top() <= i.viewBottom && r.draw(e)
        }, o.drawGL = function(e) {
            this.particlescale = this.layer.getScale(), e.setTexture(this.type.webGL_texture);
            var t, n, r, i = this.layer;
            for (t = 0, n = this.particles.length; n > t; t++) r = this.particles[t], r.right() >= i.viewLeft && r.bottom() >= i.viewTop && r.left() <= i.viewRight && r.top() <= i.viewBottom && r.drawGL(e)
        }, t.prototype.IsSpraying = function() {
            return this.spraying
        }, i.cnds = new t, n.prototype.SetSpraying = function(e) {
            this.spraying = 0 !== e
        }, n.prototype.SetEffect = function(e) {
            this.compositeOp = cr.effectToCompositeOp(e), cr.setGLBlend(this, e, this.runtime.gl), this.runtime.redraw = !0
        }, n.prototype.SetRate = function(e) {
            this.rate = e;
            var t, n;
            if (1 === this.spraytype && this.first_tick)
                if (e < this.particles.length)
                    for (t = this.particles.length - e, n = 0; t > n; n++) u.push(this.particles.pop());
                else if (e > this.particles.length)
                for (t = e - this.particles.length, n = 0; t > n; n++) this.allocateParticle().opacity = 0
        }, n.prototype.SetSprayCone = function(e) {
            this.spraycone = cr.to_radians(e)
        }, n.prototype.SetInitSpeed = function(e) {
            this.initspeed = e
        }, n.prototype.SetInitSize = function(e) {
            this.initsize = e
        }, n.prototype.SetInitOpacity = function(e) {
            this.initopacity = e / 100
        }, n.prototype.SetGrowRate = function(e) {
            this.growrate = e
        }, n.prototype.SetXRandomiser = function(e) {
            this.xrandom = e
        }, n.prototype.SetYRandomiser = function(e) {
            this.yrandom = e
        }, n.prototype.SetSpeedRandomiser = function(e) {
            this.speedrandom = e
        }, n.prototype.SetSizeRandomiser = function(e) {
            this.sizerandom = e
        }, n.prototype.SetGrowRateRandomiser = function(e) {
            this.growrandom = e
        }, n.prototype.SetParticleAcc = function(e) {
            this.acc = e
        }, n.prototype.SetGravity = function(e) {
            this.g = e
        }, n.prototype.SetAngleRandomiser = function(e) {
            this.lifeanglerandom = e
        }, n.prototype.SetSpeedRandomiser = function(e) {
            this.lifespeedrandom = e
        }, n.prototype.SetOpacityRandomiser = function(e) {
            this.lifeopacityrandom = e
        }, n.prototype.SetTimeout = function(e) {
            this.timeout = e
        }, i.acts = new n, r.prototype.ParticleCount = function(e) {
            e.set_int(this.particles.length)
        }, r.prototype.Rate = function(e) {
            e.set_float(this.rate)
        }, r.prototype.SprayCone = function(e) {
            e.set_float(cr.to_degrees(this.spraycone))
        }, r.prototype.InitSpeed = function(e) {
            e.set_float(this.initspeed)
        }, r.prototype.InitSize = function(e) {
            e.set_float(this.initsize)
        }, r.prototype.InitOpacity = function(e) {
            e.set_float(100 * this.initopacity)
        }, r.prototype.InitGrowRate = function(e) {
            e.set_float(this.growrate)
        }, r.prototype.XRandom = function(e) {
            e.set_float(this.xrandom)
        }, r.prototype.YRandom = function(e) {
            e.set_float(this.yrandom)
        }, r.prototype.InitSpeedRandom = function(e) {
            e.set_float(this.speedrandom)
        }, r.prototype.InitSizeRandom = function(e) {
            e.set_float(this.sizerandom)
        }, r.prototype.InitGrowRandom = function(e) {
            e.set_float(this.growrandom)
        }, r.prototype.ParticleAcceleration = function(e) {
            e.set_float(this.acc)
        }, r.prototype.Gravity = function(e) {
            e.set_float(this.g)
        }, r.prototype.ParticleAngleRandom = function(e) {
            e.set_float(this.lifeanglerandom)
        }, r.prototype.ParticleSpeedRandom = function(e) {
            e.set_float(this.lifespeedrandom)
        }, r.prototype.ParticleOpacityRandom = function(e) {
            e.set_float(this.lifeopacityrandom)
        }, r.prototype.Timeout = function(e) {
            e.set_float(this.timeout)
        }, i.exps = new r
    }(), cr.plugins_.Sprite = function(e) {
        this.runtime = e
    },
    function() {
        function e() {
            if (0 === this.datauri.length) {
                var e = document.createElement("canvas");
                e.width = this.width, e.height = this.height;
                var t = e.getContext("2d");
                this.spritesheeted ? t.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : t.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = e.toDataURL("image/png")
            }
            return this.datauri
        }

        function t() {}

        function n() {
            return m.length ? m.pop() : [0, 0, 0]
        }

        function r(e) {
            e[0] = 0, e[1] = 0, e[2] = 0, m.push(e)
        }

        function i(e, t) {
            return t > e ? "" + e + "," + t : "" + t + "," + e
        }

        function s(e, t, r, s) {
            var o = t.uid,
                u = r.uid,
                a = i(o, u);
            if (e.hasOwnProperty(a)) return void(e[a][2] = s);
            var f = n();
            f[0] = o, f[1] = u, f[2] = s, e[a] = f
        }

        function o(e, t, n) {
            var s = i(t.uid, n.uid);
            e.hasOwnProperty(s) && (r(e[s]), delete e[s])
        }

        function u(e, t) {
            var n, i, s = t.uid;
            for (n in e) e.hasOwnProperty(n) && (i = e[n], (i[0] === s || i[1] === s) && (r(e[n]), delete e[n]))
        }

        function a(e, t, n) {
            var r = i(t.uid, n.uid);
            return e.hasOwnProperty(r) ? (g = e[r][2], !0) : (g = -2, !1)
        }

        function f(e, t, n) {
            if (!e) return !1;
            var r, i, s, o, u, a, f = 0 !== t || 0 !== n,
                l = !1,
                c = this.runtime.getCurrentCondition(),
                h = c.type,
                p = c.inverted,
                d = e.getCurrentSol(),
                v = this.runtime.getCurrentEventStack().current_event.orblock;
            for (d.select_all ? (this.update_bbox(), this.runtime.getCollisionCandidates(this.layer, e, this.bbox, S), a = S) : a = v ? d.else_instances : d.instances, b = e, E = h !== e && !p, f && (r = this.x, i = this.y, this.x += t, this.y += n, this.set_bbox_changed()), s = 0, o = a.length; o > s; s++)
                if (u = a[s], this.runtime.testOverlap(this, u)) {
                    if (l = !0, p) break;
                    h !== e && w.add(u)
                }
            return f && (this.x = r, this.y = i, this.set_bbox_changed()), S.length = 0, l
        }

        function l() {}

        function c() {}
        var h = cr.plugins_.Sprite.prototype;
        h.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var p = h.Type.prototype;
        p.onCreate = function() {
            if (!this.is_family) {
                var t, n, r, i, s, o, u, a, f, l;
                for (this.all_frames = [], this.has_loaded_textures = !1, t = 0, n = this.animations.length; n > t; t++) {
                    for (s = this.animations[t], u = {}, u.name = s[0], u.speed = s[1], u.loop = s[2], u.repeatcount = s[3], u.repeatto = s[4], u.pingpong = s[5], u.sid = s[6], u.frames = [], r = 0, i = s[7].length; i > r; r++) o = s[7][r], a = {}, a.texture_file = o[0], a.texture_filesize = o[1], a.offx = o[2], a.offy = o[3], a.width = o[4], a.height = o[5], a.duration = o[6], a.hotspotX = o[7], a.hotspotY = o[8], a.image_points = o[9], a.poly_pts = o[10], a.pixelformat = o[11], a.spritesheeted = 0 !== a.width, a.datauri = "", a.getDataUri = e, l = {}, l.left = 0, l.top = 0, l.right = 1, l.bottom = 1, a.sheetTex = l, a.webGL_texture = null, f = this.runtime.findWaitingTexture(o[0]), f ? a.texture_img = f : (a.texture_img = new Image, a.texture_img.idtkLoadDisposed = !0, a.texture_img.src = o[0], a.texture_img.cr_src = o[0], a.texture_img.cr_filesize = o[1], a.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(a.texture_img)), cr.seal(a), u.frames.push(a), this.all_frames.push(a);
                    cr.seal(u), this.animations[t] = u
                }
            }
        }, p.updateAllCurrentTexture = function() {
            var e, t, n;
            for (e = 0, t = this.instances.length; t > e; e++) n = this.instances[e], n.curWebGLTexture = n.curFrame.webGL_texture
        }, p.onLostWebGLContext = function() {
            if (!this.is_family) {
                var e, t, n;
                for (e = 0, t = this.all_frames.length; t > e; ++e) n = this.all_frames[e], n.texture_img.c2webGL_texture = null, n.webGL_texture = null
            }
        }, p.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var e, t, n;
                for (e = 0, t = this.all_frames.length; t > e; ++e) n = this.all_frames[e], n.webGL_texture = this.runtime.glwrap.loadTexture(n.texture_img, !1, this.runtime.linearSampling, n.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, p.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var e, t, n;
                for (e = 0, t = this.all_frames.length; t > e; ++e) n = this.all_frames[e], n.webGL_texture = this.runtime.glwrap.loadTexture(n.texture_img, !1, this.runtime.linearSampling, n.pixelformat);
                this.has_loaded_textures = !0
            }
        }, p.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var e, t, n;
                for (e = 0, t = this.all_frames.length; t > e; ++e) n = this.all_frames[e], this.runtime.glwrap.deleteTexture(n.webGL_texture), n.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var d = [];
        p.preloadCanvas2D = function(e) {
            var t, n, r;
            for (d.length = 0, t = 0, n = this.all_frames.length; n > t; ++t) r = this.all_frames[t].texture_img, -1 === d.indexOf(r) && (e.drawImage(r, 0, 0), d.push(r))
        }, h.Instance = function(e) {
            this.type = e, this.runtime = e.runtime;
            var t = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(t) : this.collision_poly = new cr.CollisionPoly(t)
        };
        var v = h.Instance.prototype;
        v.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.type.animations[0].speed || (this.runtime.tickMe(this), this.isTicking = !0), this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var e = this.cur_animation.frames[this.cur_frame];
            this.collision_poly.set_pts(e.poly_pts), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures();
            var t, n, r, i, s, o, u, a;
            for (t = 0, n = this.type.animations.length; n > t; t++)
                for (s = this.type.animations[t], r = 0, i = s.frames.length; i > r; r++) o = s.frames[r], 0 === o.width && (o.width = o.texture_img.width, o.height = o.texture_img.height), o.spritesheeted && (a = o.texture_img, u = o.sheetTex, u.left = o.offx / a.width, u.top = o.offy / a.height, u.right = (o.offx + o.width) / a.width, u.bottom = (o.offy + o.height) / a.height, 0 === o.offx && 0 === o.offy && o.width === a.width && o.height === a.height && (o.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, v.saveToJSON = function() {
            var e = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum
            };
            return this.animPlaying || (e.ap = this.animPlaying), this.animForwards || (e.af = this.animForwards), e
        }, v.loadFromJSON = function(e) {
            var t = this.getAnimationBySid(e.a);
            t && (this.cur_animation = t), this.cur_frame = e.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = e.cas, this.frameStart = e.fs, this.animRepeats = e.ar, this.animTimer.reset(), this.animTimer.sum = e.at, this.animPlaying = e.hasOwnProperty("ap") ? e.ap : !0, this.animForwards = e.hasOwnProperty("af") ? e.af : !0, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, v.animationFinish = function(e) {
            this.cur_frame = e ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, v.getNowTime = function() {
            return this.animTimer.sum
        }, v.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var e, t = this.getNowTime(),
                n = this.cur_animation,
                r = n.frames[this.cur_frame],
                i = r.duration / this.cur_anim_speed;
            this.animPlaying && t >= this.frameStart + i && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += i, this.cur_frame >= n.frames.length && (n.pingpong ? (this.animForwards = !1, this.cur_frame = n.frames.length - 2) : n.loop ? this.cur_frame = n.repeatto : (this.animRepeats++, this.animRepeats >= n.repeatcount ? this.animationFinish(!1) : this.cur_frame = n.repeatto)), this.cur_frame < 0 && (n.pingpong ? (this.cur_frame = 1, this.animForwards = !0, n.loop || (this.animRepeats++, this.animRepeats >= n.repeatcount && this.animationFinish(!0))) : n.loop ? this.cur_frame = n.repeatto : (this.animRepeats++, this.animRepeats >= n.repeatcount ? this.animationFinish(!0) : this.cur_frame = n.repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= n.frames.length && (this.cur_frame = n.frames.length - 1), t > this.frameStart + n.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = t), e = n.frames[this.cur_frame], this.OnFrameChanged(r, e), this.runtime.redraw = !0)
        }, v.getAnimationByName = function(e) {
            var t, n, r;
            for (t = 0, n = this.type.animations.length; n > t; t++)
                if (r = this.type.animations[t], cr.equals_nocase(r.name, e)) return r;
            return null
        }, v.getAnimationBySid = function(e) {
            var t, n, r;
            for (t = 0, n = this.type.animations.length; n > t; t++)
                if (r = this.type.animations[t], r.sid === e) return r;
            return null
        }, v.doChangeAnim = function() {
            var e = this.cur_animation.frames[this.cur_frame],
                t = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", t && (cr.equals_nocase(t.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = t, this.cur_anim_speed = t.speed, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(e, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, v.doChangeAnimFrame = function() {
            var e = this.cur_animation.frames[this.cur_frame],
                t = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), t !== this.cur_frame && (this.OnFrameChanged(e, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, v.OnFrameChanged = function(e, t) {
            var n = e.width,
                r = e.height,
                i = t.width,
                s = t.height;
            n != i && (this.width *= i / n), r != s && (this.height *= s / r), this.hotspotX = t.hotspotX, this.hotspotY = t.hotspotY, this.collision_poly.set_pts(t.poly_pts), this.set_bbox_changed(), this.curFrame = t, this.curWebGLTexture = t.webGL_texture;
            var o, u, a;
            for (o = 0, u = this.behavior_insts.length; u > o; o++) a = this.behavior_insts[o], a.onSpriteFrameChanged && a.onSpriteFrameChanged(e, t);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, v.draw = function(e) {
            e.globalAlpha = this.opacity;
            var t = this.curFrame,
                n = t.spritesheeted,
                r = t.texture_img,
                i = this.x,
                s = this.y,
                o = this.width,
                u = this.height;
            if (0 === this.angle && o >= 0 && u >= 0) i -= this.hotspotX * o, s -= this.hotspotY * u, this.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), n ? e.drawImage(r, t.offx, t.offy, t.width, t.height, i, s, o, u) : e.drawImage(r, i, s, o, u);
            else {
                this.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), e.save();
                var a = o > 0 ? 1 : -1,
                    f = u > 0 ? 1 : -1;
                e.translate(i, s), (1 !== a || 1 !== f) && e.scale(a, f), e.rotate(this.angle * a * f);
                var l = 0 - this.hotspotX * cr.abs(o),
                    c = 0 - this.hotspotY * cr.abs(u);
                n ? e.drawImage(r, t.offx, t.offy, t.width, t.height, l, c, cr.abs(o), cr.abs(u)) : e.drawImage(r, l, c, cr.abs(o), cr.abs(u)), e.restore()
            }
        }, v.drawGL = function(e) {
            e.setTexture(this.curWebGLTexture), e.setOpacity(this.opacity);
            var t = this.curFrame,
                n = this.bquad;
            if (this.runtime.pixel_rounding) {
                var r = (this.x + .5 | 0) - this.x,
                    i = (this.y + .5 | 0) - this.y;
                t.spritesheeted ? e.quadTex(n.tlx + r, n.tly + i, n.trx + r, n.try_ + i, n.brx + r, n.bry + i, n.blx + r, n.bly + i, t.sheetTex) : e.quad(n.tlx + r, n.tly + i, n.trx + r, n.try_ + i, n.brx + r, n.bry + i, n.blx + r, n.bly + i)
            } else t.spritesheeted ? e.quadTex(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly, t.sheetTex) : e.quad(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly)
        }, v.getImagePointIndexByName = function(e) {
            var t, n, r = this.curFrame;
            for (t = 0, n = r.image_points.length; n > t; t++)
                if (cr.equals_nocase(e, r.image_points[t][0])) return t;
            return -1
        }, v.getImagePoint = function(e, t) {
            var n, r = this.curFrame,
                i = r.image_points;
            if (n = cr.is_string(e) ? this.getImagePointIndexByName(e) : e - 1, n = cr.floor(n), 0 > n || n >= i.length) return t ? this.x : this.y;
            var s = (i[n][1] - r.hotspotX) * this.width,
                o = i[n][2];
            o = (o - r.hotspotY) * this.height;
            var u = Math.cos(this.angle),
                a = Math.sin(this.angle),
                f = s * u - o * a;
            return o = o * u + s * a, s = f, s += this.x, o += this.y, t ? s : o
        };
        var m = [],
            g = -2,
            y = [];
        t.prototype.OnCollision = function(e) {
            if (!e) return !1;
            var t = this.runtime,
                n = t.getCurrentCondition(),
                r = n.type;
            n.extra.collmemory || (n.extra.collmemory = {}, t.addDestroyCallback(function(e) {
                return function(t) {
                    u(e, t)
                }
            }(n.extra.collmemory))); {
                var i, f, l, c, h, p, d, v, m, b = n.extra.collmemory,
                    w = r.getCurrentSol(),
                    E = e.getCurrentSol(),
                    S = w.getObjects(),
                    x = this.runtime.tickcount,
                    T = x - 1,
                    N = t.getCurrentEventStack().current_event;
                N.orblock
            }
            for (f = 0; f < S.length; f++) {
                for (l = S[f], E.select_all ? (l.update_bbox(), this.runtime.getCollisionCandidates(l.layer, e, l.bbox, y), i = y) : i = E.getObjects(), c = 0; c < i.length; c++) h = i[c], t.testOverlap(l, h) || t.checkRegisteredCollision(l, h) ? (v = a(b, l, h), m = !v || T > g, s(b, l, h, x), m && (t.pushCopySol(N.solModifiers), p = r.getCurrentSol(), d = e.getCurrentSol(), p.select_all = !1, d.select_all = !1, r === e ? (p.instances.length = 2, p.instances[0] = l, p.instances[1] = h, r.applySolToContainer()) : (p.instances.length = 1, d.instances.length = 1, p.instances[0] = l, d.instances[0] = h, r.applySolToContainer(), e.applySolToContainer()), N.retrigger(), t.popSol(N.solModifiers))) : o(b, l, h);
                y.length = 0
            }
            return !1
        };
        var b = null,
            w = new cr.ObjectSet,
            E = !1,
            S = [];
        p.finish = function(e) {
            if (E) {
                if (e) {
                    var t, n, r, i = this.runtime.getCurrentEventStack().current_event.orblock,
                        s = b.getCurrentSol(),
                        o = w.valuesRef();
                    if (s.select_all) {
                        for (s.select_all = !1, s.instances.length = o.length, t = 0, n = o.length; n > t; t++) s.instances[t] = o[t];
                        if (i)
                            for (s.else_instances.length = 0, t = 0, n = b.instances.length; n > t; t++) r = b.instances[t], w.contains(r) || s.else_instances.push(r)
                    } else if (i) {
                        var u = s.instances.length;
                        for (s.instances.length = u + o.length, t = 0, n = o.length; n > t; t++) s.instances[u + t] = o[t], cr.arrayFindRemove(s.else_instances, o[t])
                    } else cr.shallowAssignArray(s.instances, o);
                    b.applySolToContainer()
                }
                w.clear(), E = !1
            }
        }, t.prototype.IsOverlapping = function(e) {
            return f.call(this, e, 0, 0)
        }, t.prototype.IsOverlappingOffset = function(e, t, n) {
            return f.call(this, e, t, n)
        }, t.prototype.IsAnimPlaying = function(e) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, e) : cr.equals_nocase(this.cur_animation.name, e)
        }, t.prototype.CompareFrame = function(e, t) {
            return cr.do_cmp(this.cur_frame, e, t)
        }, t.prototype.CompareAnimSpeed = function(e, t) {
            var n = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(n, e, t)
        }, t.prototype.OnAnimFinished = function(e) {
            return cr.equals_nocase(this.animTriggerName, e)
        }, t.prototype.OnAnyAnimFinished = function() {
            return !0
        }, t.prototype.OnFrameChanged = function() {
            return !0
        }, t.prototype.IsMirrored = function() {
            return this.width < 0
        }, t.prototype.IsFlipped = function() {
            return this.height < 0
        }, t.prototype.OnURLLoaded = function() {
            return !0
        }, t.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, h.cnds = new t, l.prototype.Spawn = function(e, t, n) {
            if (e && t) {
                var r = this.runtime.createInstance(e, t, this.getImagePoint(n, !0), this.getImagePoint(n, !1));
                if (r) {
                    "undefined" != typeof r.angle && (r.angle = this.angle, r.set_bbox_changed()), this.runtime.isInOnDestroy++;
                    var i, s, o;
                    if (this.runtime.trigger(Object.getPrototypeOf(e.plugin).cnds.OnCreated, r), r.is_contained)
                        for (i = 0, s = r.siblings.length; s > i; i++) o = r.siblings[i], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var u = this.runtime.getCurrentAction(),
                        a = !1;
                    (cr.is_undefined(u.extra.Spawn_LastExec) || u.extra.Spawn_LastExec < this.runtime.execcount) && (a = !0, u.extra.Spawn_LastExec = this.runtime.execcount);
                    var f;
                    if (e != this.type && (f = e.getCurrentSol(), f.select_all = !1, a ? (f.instances.length = 1, f.instances[0] = r) : f.instances.push(r), r.is_contained))
                        for (i = 0, s = r.siblings.length; s > i; i++) o = r.siblings[i], f = o.type.getCurrentSol(), f.select_all = !1, a ? (f.instances.length = 1, f.instances[0] = o) : f.instances.push(o)
                }
            }
        }, l.prototype.SetEffect = function(e) {
            this.compositeOp = cr.effectToCompositeOp(e), cr.setGLBlend(this, e, this.runtime.gl), this.runtime.redraw = !0
        }, l.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, l.prototype.StartAnim = function(e) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === e && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetAnim = function(e, t) {
            this.changeAnimName = e, this.changeAnimFrom = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, l.prototype.SetAnimFrame = function(e) {
            this.changeAnimFrame = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, l.prototype.SetAnimSpeed = function(e) {
            this.cur_anim_speed = cr.abs(e), this.animForwards = e >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetMirrored = function(e) {
            var t = cr.abs(this.width) * (0 === e ? -1 : 1);
            this.width !== t && (this.width = t, this.set_bbox_changed())
        }, l.prototype.SetFlipped = function(e) {
            var t = cr.abs(this.height) * (0 === e ? -1 : 1);
            this.height !== t && (this.height = t, this.set_bbox_changed())
        }, l.prototype.SetScale = function(e) {
            var t = this.curFrame,
                n = this.width < 0 ? -1 : 1,
                r = this.height < 0 ? -1 : 1,
                i = t.width * e * n,
                s = t.height * e * r;
            (this.width !== i || this.height !== s) && (this.width = i, this.height = s, this.set_bbox_changed())
        }, l.prototype.LoadURL = function(e, t) {
            var n = new Image,
                r = this,
                i = this.curFrame;
            n.onload = function() {
                return i.texture_img.src === n.src ? (r.runtime.glwrap && r.curFrame === i && (r.curWebGLTexture = i.webGL_texture), r.runtime.redraw = !0, void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r)) : (i.texture_img = n, i.offx = 0, i.offy = 0, i.width = n.width, i.height = n.height, i.spritesheeted = !1, i.datauri = "", r.runtime.glwrap && (i.webGL_texture && r.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = r.runtime.glwrap.loadTexture(n, !1, r.runtime.linearSampling), r.curFrame === i && (r.curWebGLTexture = i.webGL_texture), r.type.updateAllCurrentTexture()), 0 === t && (r.width = n.width, r.height = n.height, r.set_bbox_changed()), r.runtime.redraw = !0, void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r))
            }, "data:" !== e.substr(0, 5) && (n.crossOrigin = "anonymous"), n.src = e
        }, l.prototype.SetCollisions = function(e) {
            this.collisionsEnabled !== (0 !== e) && (this.collisionsEnabled = 0 !== e, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, h.acts = new l, c.prototype.AnimationFrame = function(e) {
            e.set_int(this.cur_frame)
        }, c.prototype.AnimationFrameCount = function(e) {
            e.set_int(this.cur_animation.frames.length)
        }, c.prototype.AnimationName = function(e) {
            e.set_string(this.cur_animation.name)
        }, c.prototype.AnimationSpeed = function(e) {
            e.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, c.prototype.ImagePointX = function(e, t) {
            e.set_float(this.getImagePoint(t, !0))
        }, c.prototype.ImagePointY = function(e, t) {
            e.set_float(this.getImagePoint(t, !1))
        }, c.prototype.ImagePointCount = function(e) {
            e.set_int(this.curFrame.image_points.length)
        }, c.prototype.ImageWidth = function(e) {
            e.set_float(this.curFrame.width)
        }, c.prototype.ImageHeight = function(e) {
            e.set_float(this.curFrame.height)
        }, h.exps = new c
    }(), cr.plugins_.Text = function(e) {
        this.runtime = e
    },
    function() {
        function e() {
            return c.length ? c.pop() : {}
        }

        function t(e) {
            c.push(e)
        }

        function n(e) {
            var n, r;
            for (n = 0, r = e.length; r > n; n++) t(e[n]);
            e.length = 0
        }

        function r() {}

        function i() {}

        function s() {}
        var o = cr.plugins_.Text.prototype;
        o.onCreate = function() {
            o.acts.SetWidth = function(e) {
                this.width !== e && (this.width = e, this.text_changed = !0, this.set_bbox_changed())
            }
        }, o.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var u = o.Type.prototype;
        u.onCreate = function() {}, u.onLostWebGLContext = function() {
            if (!this.is_family) {
                var e, t, n;
                for (e = 0, t = this.instances.length; t > e; e++) n = this.instances[e], n.mycanvas = null, n.myctx = null, n.mytex = null
            }
        }, o.Instance = function(e) {
            this.type = e, this.runtime = e.runtime, this.recycled ? this.lines.length = 0 : this.lines = [], this.text_changed = !0
        };
        var a = o.Instance.prototype,
            f = {};
        a.onCreate = function() {
            this.text = this.properties[0], this.visible = 0 === this.properties[1], this.font = this.properties[2], this.color = this.properties[3], this.halign = this.properties[4], this.valign = this.properties[5], this.wrapbyword = 0 === this.properties[7], this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height, this.line_height_offset = this.properties[8], this.facename = "", this.fontstyle = "", this.ptSize = 0, this.textWidth = 0, this.textHeight = 0, this.parseFont(), this.mycanvas = null, this.myctx = null, this.mytex = null, this.need_text_redraw = !1, this.last_render_tick = this.runtime.tickcount, this.recycled ? this.rcTex.set(0, 0, 1, 1) : this.rcTex = new cr.rect(0, 0, 1, 1), this.runtime.glwrap && this.runtime.tickMe(this)
        }, a.parseFont = function() {
            var e, t = this.font.split(" ");
            for (e = 0; e < t.length; e++)
                if ("pt" === t[e].substr(t[e].length - 2, 2)) {
                    for (this.ptSize = parseInt(t[e].substr(0, t[e].length - 2)), this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, e > 0 && (this.fontstyle = t[e - 1]), this.facename = t[e + 1], e += 2; e < t.length; e++) this.facename += " " + t[e];
                    break
                }
        }, a.saveToJSON = function() {
            return {
                t: this.text,
                f: this.font,
                c: this.color,
                ha: this.halign,
                va: this.valign,
                wr: this.wrapbyword,
                lho: this.line_height_offset,
                fn: this.facename,
                fs: this.fontstyle,
                ps: this.ptSize,
                pxh: this.pxHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick
            }
        }, a.loadFromJSON = function(e) {
            this.text = e.t, this.font = e.f, this.color = e.c, this.halign = e.ha, this.valign = e.va, this.wrapbyword = e.wr, this.line_height_offset = e.lho, this.facename = e.fn, this.fontstyle = e.fs, this.ptSize = e.ps, this.pxHeight = e.pxh, this.textWidth = e.tw, this.textHeight = e.th, this.last_render_tick = e.lrt, this.text_changed = !0, this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height
        }, a.tick = function() {
            if (this.runtime.glwrap && this.mytex && this.runtime.tickcount - this.last_render_tick >= 300) {
                var e = this.layer;
                this.update_bbox();
                var t = this.bbox;
                (t.right < e.viewLeft || t.bottom < e.viewTop || t.left > e.viewRight || t.top > e.viewBottom) && (this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null, this.myctx = null, this.mycanvas = null)
            }
        }, a.onDestroy = function() {
            this.myctx = null, this.mycanvas = null, this.runtime.glwrap && this.mytex && this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null
        }, a.updateFont = function() {
            this.font = this.fontstyle + " " + this.ptSize.toString() + "pt " + this.facename, this.text_changed = !0, this.runtime.redraw = !0
        }, a.draw = function(e, t) {
            e.font = this.font, e.textBaseline = "top", e.fillStyle = this.color, e.globalAlpha = t ? 1 : this.opacity;
            var n = 1;
            t && (n = this.layer.getScale(), e.save(), e.scale(n, n)), (this.text_changed || this.width !== this.lastwrapwidth) && (this.type.plugin.WordWrap(this.text, this.lines, e, this.width, this.wrapbyword), this.text_changed = !1, this.lastwrapwidth = this.width), this.update_bbox();
            var r = t ? 0 : this.bquad.tlx,
                i = t ? 0 : this.bquad.tly;
            this.runtime.pixel_rounding && (r = r + .5 | 0, i = i + .5 | 0), 0 === this.angle || t || (e.save(), e.translate(r, i), e.rotate(this.angle), r = 0, i = 0);
            var s = i + this.height,
                o = this.pxHeight;
            o += this.line_height_offset;
            var u, a;
            for (1 === this.valign ? i += Math.max(this.height / 2 - this.lines.length * o / 2, 0) : 2 === this.valign && (i += Math.max(this.height - this.lines.length * o - 2, 0)), a = 0; a < this.lines.length && (u = r, 1 === this.halign ? u = r + (this.width - this.lines[a].width) / 2 : 2 === this.halign && (u = r + (this.width - this.lines[a].width)), e.fillText(this.lines[a].text, u, i), i += o, !(i >= s - o)); a++);
            (0 !== this.angle || t) && e.restore(), this.last_render_tick = this.runtime.tickcount
        }, a.drawGL = function(e) {
            if (!(this.width < 1 || this.height < 1)) {
                var t = this.text_changed || this.need_text_redraw;
                this.need_text_redraw = !1;
                var n = this.layer.getScale(),
                    r = this.layer.getAngle(),
                    i = this.rcTex,
                    s = n * this.width,
                    o = n * this.height,
                    u = Math.ceil(s),
                    a = Math.ceil(o),
                    f = this.runtime.draw_width / 2,
                    l = this.runtime.draw_height / 2;
                this.myctx || (this.mycanvas = document.createElement("canvas"), this.mycanvas.width = u, this.mycanvas.height = a, this.lastwidth = u, this.lastheight = a, t = !0, this.myctx = this.mycanvas.getContext("2d")), (u !== this.lastwidth || a !== this.lastheight) && (this.mycanvas.width = u, this.mycanvas.height = a, this.mytex && (e.deleteTexture(this.mytex), this.mytex = null), t = !0), t && (this.myctx.clearRect(0, 0, u, a), this.draw(this.myctx, !0), this.mytex || (this.mytex = e.createEmptyTexture(u, a, this.runtime.linearSampling, this.runtime.isMobile)), e.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile)), this.lastwidth = u, this.lastheight = a, e.setTexture(this.mytex), e.setOpacity(this.opacity), e.resetModelView(), e.translate(-f, -l), e.updateModelView();
                var c = this.bquad,
                    h = this.layer.layerToCanvas(c.tlx, c.tly, !0, !0),
                    p = this.layer.layerToCanvas(c.tlx, c.tly, !1, !0),
                    d = this.layer.layerToCanvas(c.trx, c.try_, !0, !0),
                    v = this.layer.layerToCanvas(c.trx, c.try_, !1, !0),
                    m = this.layer.layerToCanvas(c.brx, c.bry, !0, !0),
                    g = this.layer.layerToCanvas(c.brx, c.bry, !1, !0),
                    y = this.layer.layerToCanvas(c.blx, c.bly, !0, !0),
                    b = this.layer.layerToCanvas(c.blx, c.bly, !1, !0);
                if (this.runtime.pixel_rounding || 0 === this.angle && 0 === r) {
                    var w = (h + .5 | 0) - h,
                        E = (p + .5 | 0) - p;
                    h += w, p += E, d += w, v += E, m += w, g += E, y += w, b += E
                }
                0 === this.angle && 0 === r ? (d = h + u, v = p, m = d, g = p + a, y = h, b = g, i.right = 1, i.bottom = 1) : (i.right = s / u, i.bottom = o / a), e.quadTex(h, p, d, v, m, g, y, b, i), e.resetModelView(), e.scale(n, n), e.rotateZ(-this.layer.getAngle()), e.translate((this.layer.viewLeft + this.layer.viewRight) / -2, (this.layer.viewTop + this.layer.viewBottom) / -2), e.updateModelView(), this.last_render_tick = this.runtime.tickcount
            }
        };
        var l = [];
        o.TokeniseWords = function(e) {
            l.length = 0;
            for (var t, n = "", r = 0; r < e.length;)
                if (t = e.charAt(r), "\n" === t) n.length && (l.push(n), n = ""), l.push("\n"), ++r;
                else if (" " === t || "    " === t || "-" === t) {
                do n += e.charAt(r), r++; while (r < e.length && (" " === e.charAt(r) || "   " === e.charAt(r)));
                l.push(n), n = ""
            } else r < e.length && (n += t, r++);
            n.length && l.push(n)
        };
        var c = [];
        o.WordWrap = function(t, r, i, s, o) {
            if (!t || !t.length) return void n(r);
            if (2 >= s) return void n(r);
            if (t.length <= 100 && -1 === t.indexOf("\n")) {
                var u = i.measureText(t).width;
                if (s >= u) return n(r), r.push(e()), r[0].text = t, void(r[0].width = u)
            }
            this.WrapText(t, r, i, s, o)
        }, o.WrapText = function(n, r, i, s, o) {
            var u;
            o ? (this.TokeniseWords(n), u = l) : u = n;
            var a, f, c, p, d = "",
                v = 0;
            for (c = 0; c < u.length; c++) "\n" !== u[c] ? (a = d, d += u[c], f = i.measureText(d).width, f >= s && (v >= r.length && r.push(e()), p = r[v], p.text = a, p.width = i.measureText(a).width, v++, d = u[c], o || " " !== d || (d = ""))) : (v >= r.length && r.push(e()), p = r[v], p.text = d, p.width = i.measureText(d).width, v++, d = "");
            for (d.length && (v >= r.length && r.push(e()), p = r[v], p.text = d, p.width = i.measureText(d).width, v++), c = v; c < r.length; c++) t(r[c]);
            r.length = v
        }, r.prototype.CompareText = function(e, t) {
            return t ? this.text == e : cr.equals_nocase(this.text, e)
        }, o.cnds = new r, i.prototype.SetText = function(e) {
            cr.is_number(e) && 1e9 > e && (e = Math.round(1e10 * e) / 1e10);
            var t = e.toString();
            this.text !== t && (this.text = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.prototype.AppendText = function(e) {
            cr.is_number(e) && (e = Math.round(1e10 * e) / 1e10);
            var t = e.toString();
            t && (this.text += t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.prototype.SetFontFace = function(e, t) {
            var n = "";
            switch (t) {
                case 1:
                    n = "bold";
                    break;
                case 2:
                    n = "italic";
                    break;
                case 3:
                    n = "bold italic"
            }(e !== this.facename || n !== this.fontstyle) && (this.facename = e, this.fontstyle = n, this.updateFont())
        }, i.prototype.SetFontSize = function(e) {
            this.ptSize !== e && (this.ptSize = e, this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, this.updateFont())
        }, i.prototype.SetFontColor = function(e) {
            var t = "rgb(" + cr.GetRValue(e).toString() + "," + cr.GetGValue(e).toString() + "," + cr.GetBValue(e).toString() + ")";
            t !== this.color && (this.color = t, this.need_text_redraw = !0, this.runtime.redraw = !0)
        }, i.prototype.SetWebFont = function(e, t) {
            if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
            var n = this,
                r = function() {
                    n.runtime.redraw = !0, n.text_changed = !0
                };
            if (f.hasOwnProperty(t)) {
                var i = "'" + e + "'";
                if (this.facename === i) return;
                this.facename = i, this.updateFont();
                for (var s = 1; 10 > s; s++) setTimeout(r, 100 * s), setTimeout(r, 1e3 * s)
            } else {
                var o = document.createElement("link");
                o.href = t, o.rel = "stylesheet", o.type = "text/css", o.onload = r, document.getElementsByTagName("head")[0].appendChild(o), f[t] = !0, this.facename = "'" + e + "'", this.updateFont();
                for (var s = 1; 10 > s; s++) setTimeout(r, 100 * s), setTimeout(r, 1e3 * s)
            }
        }, i.prototype.SetEffect = function(e) {
            this.compositeOp = cr.effectToCompositeOp(e), cr.setGLBlend(this, e, this.runtime.gl), this.runtime.redraw = !0
        }, o.acts = new i, s.prototype.Text = function(e) {
            e.set_string(this.text)
        }, s.prototype.FaceName = function(e) {
            e.set_string(this.facename)
        }, s.prototype.FaceSize = function(e) {
            e.set_int(this.ptSize)
        }, s.prototype.TextWidth = function(e) {
            var t, n, r, i = 0;
            for (t = 0, n = this.lines.length; n > t; t++) r = this.lines[t].width, r > i && (i = r);
            e.set_int(i)
        }, s.prototype.TextHeight = function(e) {
            e.set_int(this.lines.length * (this.pxHeight + this.line_height_offset) - this.line_height_offset)
        }, o.exps = new s
    }(), cr.plugins_.TiledBg = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}

        function n() {}
        var r = cr.plugins_.TiledBg.prototype;
        r.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var i = r.Type.prototype;
        i.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.idtkLoadDisposed = !0, this.texture_img.src = this.texture_file, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img), this.pattern = null, this.webGL_texture = null)
        }, i.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, i.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat));
                var e, t;
                for (e = 0, t = this.instances.length; t > e; e++) this.instances[e].webGL_texture = this.webGL_texture
            }
        }, i.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, i.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, i.preloadCanvas2D = function(e) {
            e.drawImage(this.texture_img, 0, 0)
        }, r.Instance = function(e) {
            this.type = e, this.runtime = e.runtime
        };
        var s = r.Instance.prototype;
        s.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, s.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, s.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, s.draw = function(e) {
            e.globalAlpha = this.opacity, e.save(), e.fillStyle = this.pattern;
            var t = this.x,
                n = this.y;
            this.runtime.pixel_rounding && (t = t + .5 | 0, n = n + .5 | 0);
            var r = -(this.hotspotX * this.width),
                i = -(this.hotspotY * this.height),
                s = r % this.texture_img.width,
                o = i % this.texture_img.height;
            0 > s && (s += this.texture_img.width), 0 > o && (o += this.texture_img.height), e.translate(t, n), e.rotate(this.angle), e.translate(s, o), e.fillRect(r - s, i - o, this.width, this.height), e.restore()
        }, s.drawGL = function(e) {
            e.setTexture(this.webGL_texture), e.setOpacity(this.opacity);
            var t = this.rcTex;
            t.right = this.width / this.texture_img.width, t.bottom = this.height / this.texture_img.height;
            var n = this.bquad;
            if (this.runtime.pixel_rounding) {
                var r = (this.x + .5 | 0) - this.x,
                    i = (this.y + .5 | 0) - this.y;
                e.quadTex(n.tlx + r, n.tly + i, n.trx + r, n.try_ + i, n.brx + r, n.bry + i, n.blx + r, n.bly + i, t)
            } else e.quadTex(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly, t)
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, r.cnds = new e, t.prototype.SetEffect = function(e) {
            this.compositeOp = cr.effectToCompositeOp(e), cr.setGLBlend(this, e, this.runtime.gl), this.runtime.redraw = !0
        }, t.prototype.LoadURL = function(e) {
            var t = new Image,
                n = this;
            t.onload = function() {
                n.texture_img = t, n.runtime.glwrap ? (n.has_own_texture && n.webGL_texture && n.runtime.glwrap.deleteTexture(n.webGL_texture), n.webGL_texture = n.runtime.glwrap.loadTexture(t, !0, n.runtime.linearSampling)) : n.pattern = n.runtime.ctx.createPattern(t, "repeat"), n.has_own_texture = !0, n.runtime.redraw = !0, n.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, n)
            }, "data:" !== e.substr(0, 5) && (t.crossOrigin = "anonymous"), t.src = e
        }, r.acts = new t, n.prototype.ImageWidth = function(e) {
            e.set_float(this.texture_img.width)
        }, n.prototype.ImageHeight = function(e) {
            e.set_float(this.texture_img.height)
        }, r.exps = new n
    }(), cr.plugins_.Touch = function(e) {
        this.runtime = e
    },
    function() {
        function e(e) {
            c = e.x, h = e.y, p = e.z
        }

        function t(e) {
            d = e.x, v = e.y, m = e.z
        }

        function n(e, t, n, r) {
            var s;
            return s = y.length ? y.pop() : new i, s.init(e, t, n, r), s
        }

        function r(e) {
            y.length < 100 && y.push(e)
        }

        function i() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }

        function s() {}

        function o() {}
        var u = cr.plugins_.Touch.prototype;
        u.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var a = u.Type.prototype;
        a.onCreate = function() {}, u.Instance = function(e) {
            this.type = e, this.runtime = e.runtime, this.touches = [], this.mouseDown = !1
        };
        var f = u.Instance.prototype,
            l = {
                left: 0,
                top: 0
            };
        f.findTouch = function(e) {
            var t, n;
            for (t = 0, n = this.touches.length; n > t; t++)
                if (this.touches[t].id === e) return t;
            return -1
        };
        var c = 0,
            h = 0,
            p = 0,
            d = 0,
            v = 0,
            m = 0,
            g = null,
            y = [],
            b = 15,
            w = 500,
            E = 333,
            S = 25;
        i.prototype.init = function(e, t, n, r) {
            var i = cr.performance_now();
            this.time = i, this.lasttime = i, this.starttime = i, this.startx = e, this.starty = t, this.x = e, this.y = t, this.lastx = e, this.lasty = t, this.id = n, this.startindex = r, this.triggeredHold = !1, this.tooFarForHold = !1
        }, i.prototype.update = function(e, t, n) {
            this.lasttime = this.time, this.time = e, this.lastx = this.x, this.lasty = this.y, this.x = t, this.y = n, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= b && (this.tooFarForHold = !0)
        }, i.prototype.maybeTriggerHold = function(e, t) {
            if (!this.triggeredHold) {
                var n = cr.performance_now();
                n - this.starttime >= w && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < b && (this.triggeredHold = !0, e.trigger_index = this.startindex, e.trigger_id = this.id, e.getTouchIndex = t, e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, e), e.curTouchX = this.x, e.curTouchY = this.y, e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, e), e.getTouchIndex = 0)
            }
        };
        var x = -1e3,
            T = -1e3,
            N = -1e4;
        i.prototype.maybeTriggerTap = function(e, t) {
            if (!this.triggeredHold) {
                var n = cr.performance_now();
                n - this.starttime <= E && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < b && (e.trigger_index = this.startindex, e.trigger_id = this.id, e.getTouchIndex = t, 2 * E >= n - N && cr.distanceTo(x, T, this.x, this.y) < S ? (e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, e), e.curTouchX = this.x, e.curTouchY = this.y, e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, e), x = -1e3, T = -1e3, N = -1e4) : (e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, e), e.curTouchX = this.x, e.curTouchY = this.y, e.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, e), x = this.x, T = this.y, N = n), e.getTouchIndex = 0)
            }
        }, f.onCreate = function() {
            g = this, this.isWindows8 = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0, this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
            var n = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                r = document;
            this.runtime.isDirectCanvas ? r = n = window.Canvas : this.runtime.isCocoonJs && (r = n = window);
            var i = this;
            if (window.navigator.pointerEnabled ? (n.addEventListener("pointerdown", function(e) {
                i.onPointerStart(e)
            }, !1), n.addEventListener("pointermove", function(e) {
                i.onPointerMove(e)
            }, !1), r.addEventListener("pointerup", function(e) {
                i.onPointerEnd(e, !1)
            }, !1), r.addEventListener("pointercancel", function(e) {
                i.onPointerEnd(e, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(e) {
                e.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(e) {
                e.preventDefault()
            }, !1), this.runtime.canvas.addEventListener("gesturehold", function(e) {
                e.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(e) {
                e.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (n.addEventListener("MSPointerDown", function(e) {
                i.onPointerStart(e)
            }, !1), n.addEventListener("MSPointerMove", function(e) {
                i.onPointerMove(e)
            }, !1), r.addEventListener("MSPointerUp", function(e) {
                i.onPointerEnd(e, !1)
            }, !1), r.addEventListener("MSPointerCancel", function(e) {
                i.onPointerEnd(e, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(e) {
                e.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(e) {
                e.preventDefault()
            }, !1))) : (n.addEventListener("touchstart", function(e) {
                i.onTouchStart(e)
            }, !1), n.addEventListener("touchmove", function(e) {
                i.onTouchMove(e)
            }, !1), r.addEventListener("touchend", function(e) {
                i.onTouchEnd(e, !1)
            }, !1), r.addEventListener("touchcancel", function(e) {
                i.onTouchEnd(e, !0)
            }, !1)), this.isWindows8) {
                var s = function(e) {
                        var t = e.reading;
                        i.acc_x = t.accelerationX, i.acc_y = t.accelerationY, i.acc_z = t.accelerationZ
                    },
                    o = function(e) {
                        var t = e.reading;
                        i.orient_alpha = t.yawDegrees, i.orient_beta = t.pitchDegrees, i.orient_gamma = t.rollDegrees
                    },
                    u = Windows.Devices.Sensors.Accelerometer.getDefault();
                u && (u.reportInterval = Math.max(u.minimumReportInterval, 16), u.addEventListener("readingchanged", s));
                var a = Windows.Devices.Sensors.Inclinometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", o)), document.addEventListener("visibilitychange", function() {
                    document.hidden || document.msHidden ? (u && u.removeEventListener("readingchanged", s), a && a.removeEventListener("readingchanged", o)) : (u && u.addEventListener("readingchanged", s), a && a.addEventListener("readingchanged", o))
                }, !1)
            } else window.addEventListener("deviceorientation", function(e) {
                i.orient_alpha = e.alpha || 0, i.orient_beta = e.beta || 0, i.orient_gamma = e.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(e) {
                e.accelerationIncludingGravity && (i.acc_g_x = e.accelerationIncludingGravity.x || 0, i.acc_g_y = e.accelerationIncludingGravity.y || 0, i.acc_g_z = e.accelerationIncludingGravity.z || 0), e.acceleration && (i.acc_x = e.acceleration.x || 0, i.acc_y = e.acceleration.y || 0, i.acc_z = e.acceleration.z || 0)
            }, !1);
            this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(e) {
                i.onMouseMove(e)
            }), jQuery(document).mousedown(function(e) {
                i.onMouseDown(e)
            }), jQuery(document).mouseup(function(e) {
                i.onMouseUp(e)
            })), this.runtime.isAppMobi && !this.runtime.isDirectCanvas && AppMobi.accelerometer.watchAcceleration(e, {
                frequency: 40,
                adjustForRotation: !0
            }), this.runtime.isPhoneGap && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(t, null, {
                frequency: 40
            }), this.runtime.tick2Me(this)
        }, f.onPointerMove = function(e) {
            if (e.pointerType !== e.MSPOINTER_TYPE_MOUSE && "mouse" !== e.pointerType) {
                e.preventDefault && e.preventDefault();
                var t = this.findTouch(e.pointerId),
                    n = cr.performance_now();
                if (t >= 0) {
                    var r = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset(),
                        i = this.touches[t];
                    if (n - i.time < 2) return;
                    i.update(n, e.pageX - r.left, e.pageY - r.top)
                }
            }
        }, f.onPointerStart = function(e) {
            if (e.pointerType !== e.MSPOINTER_TYPE_MOUSE && "mouse" !== e.pointerType) {
                e.preventDefault && cr.isCanvasInputEvent(e) && e.preventDefault(); {
                    var t = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset(),
                        r = e.pageX - t.left,
                        i = e.pageY - t.top;
                    cr.performance_now()
                }
                this.trigger_index = this.touches.length, this.trigger_id = e.pointerId, this.touches.push(n(r, i, e.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = r, this.curTouchY = i, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, f.onPointerEnd = function(e, t) {
            if (e.pointerType !== e.MSPOINTER_TYPE_MOUSE && "mouse" !== e.pointerType) {
                e.preventDefault && cr.isCanvasInputEvent(e) && e.preventDefault();
                var n = this.findTouch(e.pointerId);
                this.trigger_index = n >= 0 ? this.touches[n].startindex : -1, this.trigger_id = n >= 0 ? this.touches[n].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), n >= 0 && (t || this.touches[n].maybeTriggerTap(this, n), r(this.touches[n]), this.touches.splice(n, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, f.onTouchMove = function(e) {
            e.preventDefault && e.preventDefault();
            var t, n, r, i, s = cr.performance_now();
            for (t = 0, n = e.changedTouches.length; n > t; t++) {
                r = e.changedTouches[t];
                var o = this.findTouch(r.identifier);
                if (o >= 0) {
                    var u = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset();
                    if (i = this.touches[o], s - i.time < 2) continue;
                    i.update(s, r.pageX - u.left, r.pageY - u.top)
                }
            }
        }, f.onTouchStart = function(e) {
            e.preventDefault && cr.isCanvasInputEvent(e) && e.preventDefault(); {
                var t = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset();
                cr.performance_now()
            }
            this.runtime.isInUserInputEvent = !0;
            var r, i, s, o;
            for (r = 0, i = e.changedTouches.length; i > r; r++)
                if (s = e.changedTouches[r], o = this.findTouch(s.identifier), -1 === o) {
                    var u = s.pageX - t.left,
                        a = s.pageY - t.top;
                    this.trigger_index = this.touches.length, this.trigger_id = s.identifier, this.touches.push(n(u, a, s.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = u, this.curTouchY = a, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, f.onTouchEnd = function(e, t) {
            e.preventDefault && cr.isCanvasInputEvent(e) && e.preventDefault(), this.runtime.isInUserInputEvent = !0;
            var n, i, s, o;
            for (n = 0, i = e.changedTouches.length; i > n; n++) s = e.changedTouches[n], o = this.findTouch(s.identifier), o >= 0 && (this.trigger_index = this.touches[o].startindex, this.trigger_id = this.touches[o].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), t || this.touches[o].maybeTriggerTap(this, o), r(this.touches[o]), this.touches.splice(o, 1));
            this.runtime.isInUserInputEvent = !1
        }, f.getAlpha = function() {
            return this.runtime.isAppMobi && 0 === this.orient_alpha && 0 !== p ? 90 * p : this.runtime.isPhoneGap && 0 === this.orient_alpha && 0 !== m ? 90 * m : this.orient_alpha
        }, f.getBeta = function() {
            return this.runtime.isAppMobi && 0 === this.orient_beta && 0 !== h ? -90 * h : this.runtime.isPhoneGap && 0 === this.orient_beta && 0 !== v ? -90 * v : this.orient_beta
        }, f.getGamma = function() {
            return this.runtime.isAppMobi && 0 === this.orient_gamma && 0 !== c ? 90 * c : this.runtime.isPhoneGap && 0 === this.orient_gamma && 0 !== d ? 90 * d : this.orient_gamma
        };
        f.onMouseDown = function(e) {
            e.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && e.preventDefault();
            var t = {
                    pageX: e.pageX,
                    pageY: e.pageY,
                    identifier: 0
                },
                n = {
                    changedTouches: [t]
                };
            this.onTouchStart(n), this.mouseDown = !0
        }, f.onMouseMove = function(e) {
            if (this.mouseDown) {
                var t = {
                        pageX: e.pageX,
                        pageY: e.pageY,
                        identifier: 0
                    },
                    n = {
                        changedTouches: [t]
                    };
                this.onTouchMove(n)
            }
        }, f.onMouseUp = function(e) {
            e.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && e.preventDefault(), this.runtime.had_a_click = !0;
            var t = {
                    pageX: e.pageX,
                    pageY: e.pageY,
                    identifier: 0
                },
                n = {
                    changedTouches: [t]
                };
            this.onTouchEnd(n), this.mouseDown = !1
        }, f.tick2 = function() {
            var e, t, n, r = cr.performance_now();
            for (e = 0, t = this.touches.length; t > e; ++e) n = this.touches[e], n.time <= r - 50 && (n.lasttime = r), n.maybeTriggerHold(this, e)
        }, s.prototype.OnTouchStart = function() {
            return !0
        }, s.prototype.OnTouchEnd = function() {
            return !0
        }, s.prototype.IsInTouch = function() {
            return this.touches.length
        }, s.prototype.OnTouchObject = function(e) {
            return e ? this.runtime.testAndSelectCanvasPointOverlap(e, this.curTouchX, this.curTouchY, !1) : !1
        };
        var C = [];
        s.prototype.IsTouchingObject = function(e) {
            if (!e) return !1;
            var t, n, r, i, s, o, u = e.getCurrentSol(),
                a = u.getObjects();
            for (r = 0, i = a.length; i > r; r++) {
                var f = a[r];
                for (f.update_bbox(), s = 0, o = this.touches.length; o > s; s++) {
                    var l = this.touches[s];
                    if (t = f.layer.canvasToLayer(l.x, l.y, !0), n = f.layer.canvasToLayer(l.x, l.y, !1), f.contains_pt(t, n)) {
                        C.push(f);
                        break
                    }
                }
            }
            return C.length ? (u.select_all = !1, cr.shallowAssignArray(u.instances, C), e.applySolToContainer(), C.length = 0, !0) : !1
        }, s.prototype.CompareTouchSpeed = function(e, t, n) {
            if (e = Math.floor(e), 0 > e || e >= this.touches.length) return !1;
            var r = this.touches[e],
                i = cr.distanceTo(r.x, r.y, r.lastx, r.lasty),
                s = (r.time - r.lasttime) / 1e3,
                o = 0;
            return s > 0 && (o = i / s), cr.do_cmp(o, t, n)
        }, s.prototype.OrientationSupported = function() {
            return "undefined" != typeof window.DeviceOrientationEvent
        }, s.prototype.MotionSupported = function() {
            return "undefined" != typeof window.DeviceMotionEvent
        }, s.prototype.CompareOrientation = function(e, t, n) {
            var r = 0;
            return r = 0 === e ? this.getAlpha() : 1 === e ? this.getBeta() : this.getGamma(), cr.do_cmp(r, t, n)
        }, s.prototype.CompareAcceleration = function(e, t, n) {
            var r = 0;
            return 0 === e ? r = this.acc_g_x : 1 === e ? r = this.acc_g_y : 2 === e ? r = this.acc_g_z : 3 === e ? r = this.acc_x : 4 === e ? r = this.acc_y : 5 === e && (r = this.acc_z), cr.do_cmp(r, t, n)
        }, s.prototype.OnNthTouchStart = function(e) {
            return e = Math.floor(e), e === this.trigger_index
        }, s.prototype.OnNthTouchEnd = function(e) {
            return e = Math.floor(e), e === this.trigger_index
        }, s.prototype.HasNthTouch = function(e) {
            return e = Math.floor(e), this.touches.length >= e + 1
        }, s.prototype.OnHoldGesture = function() {
            return !0
        }, s.prototype.OnTapGesture = function() {
            return !0
        }, s.prototype.OnDoubleTapGesture = function() {
            return !0
        }, s.prototype.OnHoldGestureObject = function(e) {
            return e ? this.runtime.testAndSelectCanvasPointOverlap(e, this.curTouchX, this.curTouchY, !1) : !1
        }, s.prototype.OnTapGestureObject = function(e) {
            return e ? this.runtime.testAndSelectCanvasPointOverlap(e, this.curTouchX, this.curTouchY, !1) : !1
        }, s.prototype.OnDoubleTapGestureObject = function(e) {
            return e ? this.runtime.testAndSelectCanvasPointOverlap(e, this.curTouchX, this.curTouchY, !1) : !1
        }, u.cnds = new s, o.prototype.TouchCount = function(e) {
            e.set_int(this.touches.length)
        }, o.prototype.X = function(e, t) {
            var n = this.getTouchIndex;
            if (0 > n || n >= this.touches.length) return void e.set_float(0);
            var r, i, s, o, u;
            cr.is_undefined(t) ? (r = this.runtime.getLayerByNumber(0), i = r.scale, s = r.zoomRate, o = r.parallaxX, u = r.angle, r.scale = this.runtime.running_layout.scale, r.zoomRate = 1, r.parallaxX = 1, r.angle = this.runtime.running_layout.angle, e.set_float(r.canvasToLayer(this.touches[n].x, this.touches[n].y, !0)), r.scale = i, r.zoomRate = s, r.parallaxX = o, r.angle = u) : (r = cr.is_number(t) ? this.runtime.getLayerByNumber(t) : this.runtime.getLayerByName(t), e.set_float(r ? r.canvasToLayer(this.touches[n].x, this.touches[n].y, !0) : 0))
        }, o.prototype.XAt = function(e, t, n) {
            if (t = Math.floor(t), 0 > t || t >= this.touches.length) return void e.set_float(0);
            var r, i, s, o, u;
            cr.is_undefined(n) ? (r = this.runtime.getLayerByNumber(0), i = r.scale, s = r.zoomRate, o = r.parallaxX, u = r.angle, r.scale = this.runtime.running_layout.scale, r.zoomRate = 1, r.parallaxX = 1, r.angle = this.runtime.running_layout.angle, e.set_float(r.canvasToLayer(this.touches[t].x, this.touches[t].y, !0)), r.scale = i, r.zoomRate = s, r.parallaxX = o, r.angle = u) : (r = cr.is_number(n) ? this.runtime.getLayerByNumber(n) : this.runtime.getLayerByName(n), e.set_float(r ? r.canvasToLayer(this.touches[t].x, this.touches[t].y, !0) : 0))
        }, o.prototype.XForID = function(e, t, n) {
            var r = this.findTouch(t);
            if (0 > r) return void e.set_float(0);
            var i, s, o, u, a, f = this.touches[r];
            cr.is_undefined(n) ? (i = this.runtime.getLayerByNumber(0), s = i.scale, o = i.zoomRate, u = i.parallaxX, a = i.angle, i.scale = this.runtime.running_layout.scale, i.zoomRate = 1, i.parallaxX = 1, i.angle = this.runtime.running_layout.angle, e.set_float(i.canvasToLayer(f.x, f.y, !0)), i.scale = s, i.zoomRate = o, i.parallaxX = u, i.angle = a) : (i = cr.is_number(n) ? this.runtime.getLayerByNumber(n) : this.runtime.getLayerByName(n), e.set_float(i ? i.canvasToLayer(f.x, f.y, !0) : 0))
        }, o.prototype.Y = function(e, t) {
            var n = this.getTouchIndex;
            if (0 > n || n >= this.touches.length) return void e.set_float(0);
            var r, i, s, o, u;
            cr.is_undefined(t) ? (r = this.runtime.getLayerByNumber(0), i = r.scale, s = r.zoomRate, o = r.parallaxY, u = r.angle, r.scale = this.runtime.running_layout.scale, r.zoomRate = 1, r.parallaxY = 1, r.angle = this.runtime.running_layout.angle, e.set_float(r.canvasToLayer(this.touches[n].x, this.touches[n].y, !1)), r.scale = i, r.zoomRate = s, r.parallaxY = o, r.angle = u) : (r = cr.is_number(t) ? this.runtime.getLayerByNumber(t) : this.runtime.getLayerByName(t), e.set_float(r ? r.canvasToLayer(this.touches[n].x, this.touches[n].y, !1) : 0))
        }, o.prototype.YAt = function(e, t, n) {
            if (t = Math.floor(t), 0 > t || t >= this.touches.length) return void e.set_float(0);
            var r, i, s, o, u;
            cr.is_undefined(n) ? (r = this.runtime.getLayerByNumber(0), i = r.scale, s = r.zoomRate, o = r.parallaxY, u = r.angle, r.scale = this.runtime.running_layout.scale, r.zoomRate = 1, r.parallaxY = 1, r.angle = this.runtime.running_layout.angle, e.set_float(r.canvasToLayer(this.touches[t].x, this.touches[t].y, !1)), r.scale = i, r.zoomRate = s, r.parallaxY = o, r.angle = u) : (r = cr.is_number(n) ? this.runtime.getLayerByNumber(n) : this.runtime.getLayerByName(n), e.set_float(r ? r.canvasToLayer(this.touches[t].x, this.touches[t].y, !1) : 0))
        }, o.prototype.YForID = function(e, t, n) {
            var r = this.findTouch(t);
            if (0 > r) return void e.set_float(0);
            var i, s, o, u, a, f = this.touches[r];
            cr.is_undefined(n) ? (i = this.runtime.getLayerByNumber(0), s = i.scale, o = i.zoomRate, u = i.parallaxY, a = i.angle, i.scale = this.runtime.running_layout.scale, i.zoomRate = 1, i.parallaxY = 1, i.angle = this.runtime.running_layout.angle, e.set_float(i.canvasToLayer(f.x, f.y, !1)), i.scale = s, i.zoomRate = o, i.parallaxY = u, i.angle = a) : (i = cr.is_number(n) ? this.runtime.getLayerByNumber(n) : this.runtime.getLayerByName(n), e.set_float(i ? i.canvasToLayer(f.x, f.y, !1) : 0))
        }, o.prototype.AbsoluteX = function(e) {
            e.set_float(this.touches.length ? this.touches[0].x : 0)
        }, o.prototype.AbsoluteXAt = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= this.touches.length ? void e.set_float(0) : void e.set_float(this.touches[t].x)
        }, o.prototype.AbsoluteXForID = function(e, t) {
            var n = this.findTouch(t);
            if (0 > n) return void e.set_float(0);
            var r = this.touches[n];
            e.set_float(r.x)
        }, o.prototype.AbsoluteY = function(e) {
            e.set_float(this.touches.length ? this.touches[0].y : 0)
        }, o.prototype.AbsoluteYAt = function(e, t) {
            return t = Math.floor(t), 0 > t || t >= this.touches.length ? void e.set_float(0) : void e.set_float(this.touches[t].y)
        }, o.prototype.AbsoluteYForID = function(e, t) {
            var n = this.findTouch(t);
            if (0 > n) return void e.set_float(0);
            var r = this.touches[n];
            e.set_float(r.y)
        }, o.prototype.SpeedAt = function(e, t) {
            if (t = Math.floor(t), 0 > t || t >= this.touches.length) return void e.set_float(0);
            var n = this.touches[t],
                r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty),
                i = (n.time - n.lasttime) / 1e3;
            e.set_float(0 === i ? 0 : r / i)
        }, o.prototype.SpeedForID = function(e, t) {
            var n = this.findTouch(t);
            if (0 > n) return void e.set_float(0);
            var r = this.touches[n],
                i = cr.distanceTo(r.x, r.y, r.lastx, r.lasty),
                s = (r.time - r.lasttime) / 1e3;
            e.set_float(0 === s ? 0 : i / s)
        }, o.prototype.AngleAt = function(e, t) {
            if (t = Math.floor(t), 0 > t || t >= this.touches.length) return void e.set_float(0);
            var n = this.touches[t];
            e.set_float(cr.to_degrees(cr.angleTo(n.lastx, n.lasty, n.x, n.y)))
        }, o.prototype.AngleForID = function(e, t) {
            var n = this.findTouch(t);
            if (0 > n) return void e.set_float(0);
            var r = this.touches[n];
            e.set_float(cr.to_degrees(cr.angleTo(r.lastx, r.lasty, r.x, r.y)))
        }, o.prototype.Alpha = function(e) {
            e.set_float(this.getAlpha())
        }, o.prototype.Beta = function(e) {
            e.set_float(this.getBeta())
        }, o.prototype.Gamma = function(e) {
            e.set_float(this.getGamma())
        }, o.prototype.AccelerationXWithG = function(e) {
            e.set_float(this.acc_g_x)
        }, o.prototype.AccelerationYWithG = function(e) {
            e.set_float(this.acc_g_y)
        }, o.prototype.AccelerationZWithG = function(e) {
            e.set_float(this.acc_g_z)
        }, o.prototype.AccelerationX = function(e) {
            e.set_float(this.acc_x)
        }, o.prototype.AccelerationY = function(e) {
            e.set_float(this.acc_y)
        }, o.prototype.AccelerationZ = function(e) {
            e.set_float(this.acc_z)
        }, o.prototype.TouchIndex = function(e) {
            e.set_int(this.trigger_index)
        }, o.prototype.TouchID = function(e) {
            e.set_float(this.trigger_id)
        }, u.exps = new o
    }(), cr.plugins_.WebStorage = function(e) {
        this.runtime = e
    },
    function() {
        function e() {
            f || (cr.logexport("[Construct 2] Webstorage plugin: session storage is not supported on this platform. Try using local storage or global variables instead."), f = !0)
        }

        function t() {}

        function n() {}

        function r() {}
        var i = cr.plugins_.WebStorage.prototype;
        i.Type = function(e) {
            this.plugin = e, this.runtime = e.runtime
        };
        var s = i.Type.prototype;
        s.onCreate = function() {}, i.Instance = function(e) {
            this.type = e, this.runtime = e.runtime
        };
        var o = i.Instance.prototype,
            u = "",
            a = "undefined" != typeof window.is_scirra_arcade;
        a && (u = "arcade" + window.scirra_arcade_id);
        var f = !1;
        o.onCreate = function() {}, t.prototype.LocalStorageEnabled = function() {
            return !0
        }, t.prototype.SessionStorageEnabled = function() {
            return !0
        }, t.prototype.LocalStorageExists = function(e) {
            return null != localStorage.getItem(u + e)
        }, t.prototype.SessionStorageExists = function(t) {
            return this.runtime.isCocoonJs || !sessionStorage ? (e(), !1) : null != sessionStorage.getItem(u + t)
        }, t.prototype.OnQuotaExceeded = function() {
            return !0
        }, t.prototype.CompareKeyText = function(e, t, n) {
            var r = localStorage.getItem(u + e) || "";
            return n ? r == t : cr.equals_nocase(r, t)
        }, t.prototype.CompareKeyNumber = function(e, t, n) {
            var r = localStorage.getItem(u + e) || "";
            return cr.do_cmp(parseFloat(r), t, n)
        }, i.cnds = new t, n.prototype.StoreLocal = function(e, t) {
            try {
                localStorage.setItem(u + e, t)
            } catch (n) {
                this.runtime.trigger(cr.plugins_.WebStorage.prototype.cnds.OnQuotaExceeded, this)
            }
        }, n.prototype.StoreSession = function(t, n) {
            if (this.runtime.isCocoonJs || !sessionStorage) return void e();
            try {
                sessionStorage.setItem(u + t, n)
            } catch (r) {
                this.runtime.trigger(cr.plugins_.WebStorage.prototype.cnds.OnQuotaExceeded, this)
            }
        }, n.prototype.RemoveLocal = function(e) {
            localStorage.removeItem(u + e)
        }, n.prototype.RemoveSession = function(t) {
            return this.runtime.isCocoonJs || !sessionStorage ? void e() : void sessionStorage.removeItem(u + t)
        }, n.prototype.ClearLocal = function() {
            a || localStorage.clear()
        }, n.prototype.ClearSession = function() {
            return this.runtime.isCocoonJs || !sessionStorage ? void e() : void(a || sessionStorage.clear())
        }, n.prototype.JSONLoad = function(e, t) {
            var n;
            try {
                n = JSON.parse(e)
            } catch (r) {
                return
            }
            if (n.c2dictionary) {
                var i = n.data;
                0 !== t || a || localStorage.clear();
                var s;
                for (s in i)
                    if (i.hasOwnProperty(s)) try {
                        localStorage.setItem(u + s, i[s])
                    } catch (r) {
                        return void this.runtime.trigger(cr.plugins_.WebStorage.prototype.cnds.OnQuotaExceeded, this)
                    }
            }
        }, i.acts = new n, r.prototype.LocalValue = function(e, t) {
            e.set_string(localStorage.getItem(u + t) || "")
        }, r.prototype.SessionValue = function(t, n) {
            return this.runtime.isCocoonJs || !sessionStorage ? (e(), void t.set_string("")) : void t.set_string(sessionStorage.getItem(u + n) || "")
        }, r.prototype.LocalCount = function(e) {
            e.set_int(a ? 0 : localStorage.length)
        }, r.prototype.SessionCount = function(t) {
            return this.runtime.isCocoonJs || !sessionStorage ? (e(), void t.set_int(0)) : void t.set_int(a ? 0 : sessionStorage.length)
        }, r.prototype.LocalAt = function(e, t) {
            e.set_string(a ? "" : localStorage.getItem(localStorage.key(t)) || "")
        }, r.prototype.SessionAt = function(t, n) {
            return this.runtime.isCocoonJs || !sessionStorage ? (e(), void t.set_string("")) : void t.set_string(a ? "" : sessionStorage.getItem(sessionStorage.key(n)) || "")
        }, r.prototype.LocalKeyAt = function(e, t) {
            e.set_string(a ? "" : localStorage.key(t) || "")
        }, r.prototype.SessionKeyAt = function(t, n) {
            return this.runtime.isCocoonJs || !sessionStorage ? (e(), void t.set_string("")) : void t.set_string(a ? "" : sessionStorage.key(n) || "")
        }, r.prototype.AsJSON = function(e) {
            var t, n, r, i = {};
            for (t = 0, n = localStorage.length; n > t; t++) r = localStorage.key(t), a ? r.substr(0, u.length) === u && (i[r.substr(u.length)] = localStorage.getItem(r)) : i[r] = localStorage.getItem(r);
            e.set_string(JSON.stringify({
                c2dictionary: !0,
                data: i
            }))
        }, i.exps = new r
    }(), cr.behaviors.Bullet = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}

        function n() {}
        var r = cr.behaviors.Bullet.prototype;
        r.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var i = r.Type.prototype;
        i.onCreate = function() {}, r.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime
        };
        var s = r.Instance.prototype;
        s.onCreate = function() {
            var e = this.properties[0];
            this.acc = this.properties[1], this.g = this.properties[2], this.bounceOffSolid = 0 !== this.properties[3], this.setAngle = 0 !== this.properties[4], this.dx = Math.cos(this.inst.angle) * e, this.dy = Math.sin(this.inst.angle) * e, this.lastx = this.inst.x, this.lasty = this.inst.y, this.lastKnownAngle = this.inst.angle, this.travelled = 0, this.enabled = 0 !== this.properties[5]
        }, s.saveToJSON = function() {
            return {
                acc: this.acc,
                g: this.g,
                dx: this.dx,
                dy: this.dy,
                lx: this.lastx,
                ly: this.lasty,
                lka: this.lastKnownAngle,
                t: this.travelled,
                e: this.enabled
            }
        }, s.loadFromJSON = function(e) {
            this.acc = e.acc, this.g = e.g, this.dx = e.dx, this.dy = e.dy, this.lastx = e.lx, this.lasty = e.ly, this.lastKnownAngle = e.lka, this.travelled = e.t, this.enabled = e.e
        }, s.tick = function() {
            if (this.enabled) {
                var e, t, n, r, i = this.runtime.getDt(this.inst);
                this.inst.angle !== this.lastKnownAngle && (this.setAngle && (e = cr.distanceTo(0, 0, this.dx, this.dy), this.dx = Math.cos(this.inst.angle) * e, this.dy = Math.sin(this.inst.angle) * e), this.lastKnownAngle = this.inst.angle), 0 !== this.acc && (e = cr.distanceTo(0, 0, this.dx, this.dy), t = 0 === this.dx && 0 === this.dy ? this.inst.angle : cr.angleTo(0, 0, this.dx, this.dy), e += this.acc * i, 0 > e && (e = 0), this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e), 0 !== this.g && (this.dy += this.g * i), this.lastx = this.inst.x, this.lasty = this.inst.y, (0 !== this.dx || 0 !== this.dy) && (this.inst.x += this.dx * i, this.inst.y += this.dy * i, this.travelled += cr.distanceTo(0, 0, this.dx * i, this.dy * i), this.setAngle && (this.inst.angle = cr.angleTo(0, 0, this.dx, this.dy), this.inst.set_bbox_changed(), this.lastKnownAngle = this.inst.angle), this.inst.set_bbox_changed(), this.bounceOffSolid && (n = this.runtime.testOverlapSolid(this.inst), n && (this.runtime.registerCollision(this.inst, n), e = cr.distanceTo(0, 0, this.dx, this.dy), r = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty), this.dx = Math.cos(r) * e, this.dy = Math.sin(r) * e, this.inst.x += this.dx * i, this.inst.y += this.dy * i, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = r, this.lastKnownAngle = r, this.inst.set_bbox_changed()), this.runtime.pushOutSolid(this.inst, this.dx / e, this.dy / e, Math.max(2.5 * e * i, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100))))
            }
        }, e.prototype.CompareSpeed = function(e, t) {
            return cr.do_cmp(cr.distanceTo(0, 0, this.dx, this.dy), e, t)
        }, e.prototype.CompareTravelled = function(e, t) {
            return cr.do_cmp(this.travelled, e, t)
        }, r.cnds = new e, t.prototype.SetSpeed = function(e) {
            var t = cr.angleTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e
        }, t.prototype.SetAcceleration = function(e) {
            this.acc = e
        }, t.prototype.SetGravity = function(e) {
            this.g = e
        }, t.prototype.SetAngleOfMotion = function(e) {
            e = cr.to_radians(e);
            var t = cr.distanceTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t
        }, t.prototype.Bounce = function(e) {
            if (e) {
                var t = e.getFirstPicked(this.inst);
                if (t) {
                    var n = this.runtime.getDt(this.inst),
                        r = cr.distanceTo(0, 0, this.dx, this.dy),
                        i = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty, t);
                    this.dx = Math.cos(i) * r, this.dy = Math.sin(i) * r, this.inst.x += this.dx * n, this.inst.y += this.dy * n, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = i, this.lastKnownAngle = i, this.inst.set_bbox_changed()), this.bounceOffSolid ? this.runtime.pushOutSolid(this.inst, this.dx / r, this.dy / r, Math.max(2.5 * r * n, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100) : this.runtime.pushOut(this.inst, this.dx / r, this.dy / r, Math.max(2.5 * r * n, 30), t)
                }
            }
        }, t.prototype.SetEnabled = function(e) {
            this.enabled = 1 === e
        }, r.acts = new t, n.prototype.Speed = function(e) {
            var t = cr.distanceTo(0, 0, this.dx, this.dy);
            t = cr.round6dp(t), e.set_float(t)
        }, n.prototype.Acceleration = function(e) {
            e.set_float(this.acc)
        }, n.prototype.AngleOfMotion = function(e) {
            e.set_float(cr.to_degrees(cr.angleTo(0, 0, this.dx, this.dy)))
        }, n.prototype.DistanceTravelled = function(e) {
            e.set_float(this.travelled)
        }, r.exps = new n
    }(), cr.behaviors.Pin = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}

        function n() {}
        var r = cr.behaviors.Pin.prototype;
        r.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var i = r.Type.prototype;
        i.onCreate = function() {}, r.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime
        };
        var s = r.Instance.prototype;
        s.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var e = this;
            this.recycled || (this.myDestroyCallback = function(t) {
                e.onInstanceDestroyed(t)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, s.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, s.loadFromJSON = function(e) {
            this.pinObjectUid = e.uid, this.pinAngle = e.pa, this.pinDist = e.pd, this.myStartAngle = e.msa, this.theirStartAngle = e.tsa, this.lastKnownAngle = e.lka, this.mode = e.m
        }, s.afterLoad = function() {
            this.pinObject = -1 === this.pinObjectUid ? null : this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, s.onInstanceDestroyed = function(e) {
            this.pinObject == e && (this.pinObject = null)
        }, s.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, s.tick = function() {}, s.tick2 = function() {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var e = this.inst.x,
                    t = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var n = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (n > this.pinDist || 4 === this.mode && n < this.pinDist) {
                        var r = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        e = this.pinObject.x + Math.cos(r) * this.pinDist, t = this.pinObject.y + Math.sin(r) * this.pinDist
                    }
                } else e = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, t = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var i = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = i, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === e && this.inst.y === t || (this.inst.x = e, this.inst.y = t, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === i || (this.inst.angle = i, this.inst.set_bbox_changed())
            }
        }, e.prototype.IsPinned = function() {
            return !!this.pinObject
        }, r.cnds = new e, t.prototype.Pin = function(e, t) {
            if (e) {
                var n = e.getFirstPicked(this.inst);
                n && (this.pinObject = n, this.pinAngle = cr.angleTo(n.x, n.y, this.inst.x, this.inst.y) - n.angle, this.pinDist = cr.distanceTo(n.x, n.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = n.angle, this.mode = t)
            }
        }, t.prototype.Unpin = function() {
            this.pinObject = null
        }, r.acts = new t, n.prototype.PinnedUID = function(e) {
            e.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, r.exps = new n
    }(), cr.behaviors.Platform = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}

        function n() {}
        var r = cr.behaviors.Platform.prototype;
        r.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var i = r.Type.prototype;
        i.onCreate = function() {};
        var s = 0,
            o = 1,
            u = 2,
            a = 3;
        r.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime, this.leftkey = !1, this.rightkey = !1, this.jumpkey = !1, this.jumped = !1, this.ignoreInput = !1, this.simleft = !1, this.simright = !1, this.simjump = !1, this.lastFloorObject = null, this.loadFloorObject = -1, this.lastFloorX = 0, this.lastFloorY = 0, this.floorIsJumpthru = !1, this.animMode = s, this.fallthrough = 0, this.firstTick = !0, this.dx = 0, this.dy = 0
        };
        var f = r.Instance.prototype;
        f.updateGravity = function() {
            this.downx = Math.cos(this.ga), this.downy = Math.sin(this.ga), this.rightx = Math.cos(this.ga - Math.PI / 2), this.righty = Math.sin(this.ga - Math.PI / 2), this.downx = cr.round6dp(this.downx), this.downy = cr.round6dp(this.downy), this.rightx = cr.round6dp(this.rightx), this.righty = cr.round6dp(this.righty), this.g1 = this.g, this.g < 0 && (this.downx *= -1, this.downy *= -1, this.g = Math.abs(this.g))
        }, f.onCreate = function() {
            this.maxspeed = this.properties[0], this.acc = this.properties[1], this.dec = this.properties[2], this.jumpStrength = this.properties[3], this.g = this.properties[4], this.g1 = this.g, this.maxFall = this.properties[5], this.defaultControls = 1 === this.properties[6], this.enabled = 0 !== this.properties[7], this.wasOnFloor = !1, this.wasOverJumpthru = this.runtime.testOverlapJumpThru(this.inst), this.loadOverJumpthru = -1, this.ga = cr.to_radians(90), this.updateGravity();
            var e = this;
            this.defaultControls && !this.runtime.isDomFree && (jQuery(document).keydown(function(t) {
                e.onKeyDown(t)
            }), jQuery(document).keyup(function(t) {
                e.onKeyUp(t)
            })), this.recycled || (this.myDestroyCallback = function(t) {
                e.onInstanceDestroyed(t)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback), this.inst.extra.isPlatformBehavior = !0
        }, f.saveToJSON = function() {
            return {
                ii: this.ignoreInput,
                lfx: this.lastFloorX,
                lfy: this.lastFloorY,
                lfo: this.lastFloorObject ? this.lastFloorObject.uid : -1,
                am: this.animMode,
                en: this.enabled,
                fall: this.fallthrough,
                ft: this.firstTick,
                dx: this.dx,
                dy: this.dy,
                ms: this.maxspeed,
                acc: this.acc,
                dec: this.dec,
                js: this.jumpStrength,
                g: this.g,
                g1: this.g1,
                mf: this.maxFall,
                wof: this.wasOnFloor,
                woj: this.wasOverJumpthru ? this.wasOverJumpthru.uid : -1,
                ga: this.ga
            }
        }, f.loadFromJSON = function(e) {
            this.ignoreInput = e.ii, this.lastFloorX = e.lfx, this.lastFloorY = e.lfy, this.loadFloorObject = e.lfo, this.animMode = e.am, this.enabled = e.en, this.fallthrough = e.fall, this.firstTick = e.ft, this.dx = e.dx, this.dy = e.dy, this.maxspeed = e.ms, this.acc = e.acc, this.dec = e.dec, this.jumpStrength = e.js, this.g = e.g, this.g1 = e.g1, this.maxFall = e.mf, this.wasOnFloor = e.wof, this.loadOverJumpthru = e.woj, this.ga = e.ga, this.leftkey = !1, this.rightkey = !1, this.jumpkey = !1, this.jumped = !1, this.simleft = !1, this.simright = !1, this.simjump = !1, this.updateGravity()
        }, f.afterLoad = function() {
            this.lastFloorObject = -1 === this.loadFloorObject ? null : this.runtime.getObjectByUID(this.loadFloorObject), this.wasOverJumpthru = -1 === this.loadOverJumpthru ? null : this.runtime.getObjectByUID(this.loadOverJumpthru)
        }, f.onInstanceDestroyed = function(e) {
            this.lastFloorObject == e && (this.lastFloorObject = null)
        }, f.onDestroy = function() {
            this.lastFloorObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, f.onKeyDown = function(e) {
            switch (e.which) {
                case 38:
                    e.preventDefault(), this.jumpkey = !0;
                    break;
                case 37:
                    e.preventDefault(), this.leftkey = !0;
                    break;
                case 39:
                    e.preventDefault(), this.rightkey = !0
            }
        }, f.onKeyUp = function(e) {
            switch (e.which) {
                case 38:
                    e.preventDefault(), this.jumpkey = !1, this.jumped = !1;
                    break;
                case 37:
                    e.preventDefault(), this.leftkey = !1;
                    break;
                case 39:
                    e.preventDefault(), this.rightkey = !1
            }
        }, f.getGDir = function() {
            return this.g < 0 ? -1 : 1
        }, f.isOnFloor = function() {
            var e, t, n, r = null,
                i = null,
                s = this.inst.x,
                o = this.inst.y;
            if (this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed(), this.lastFloorObject && this.runtime.testOverlap(this.inst, this.lastFloorObject)) return this.inst.x = s, this.inst.y = o, this.inst.set_bbox_changed(), this.lastFloorObject;
            if (r = this.runtime.testOverlapSolid(this.inst), r || 0 !== this.fallthrough || (i = this.runtime.testOverlapJumpThru(this.inst, !0)), this.inst.x = s, this.inst.y = o, this.inst.set_bbox_changed(), r) return this.runtime.testOverlap(this.inst, r) ? null : (this.floorIsJumpthru = !1, r);
            if (i && i.length) {
                for (e = 0, n = 0, t = i.length; t > e; e++) i[n] = i[e], this.runtime.testOverlap(this.inst, i[e]) || n++;
                if (n >= 1) return this.floorIsJumpthru = !0, i[0]
            }
            return null
        }, f.tick = function() {}, f.posttick = function() {
            var e, t, n, r, i, f, c, h, p, d, v = this.runtime.getDt(this.inst);
            this.jumpkey || this.simjump || (this.jumped = !1);
            var m = this.leftkey || this.simleft,
                g = this.rightkey || this.simright,
                y = (this.jumpkey || this.simjump) && !this.jumped;
            if (this.simleft = !1, this.simright = !1, this.simjump = !1, this.enabled) {
                this.ignoreInput && (m = !1, g = !1, y = !1);
                var b = this.lastFloorObject,
                    w = !1;
                this.firstTick && ((this.runtime.testOverlapSolid(this.inst) || this.runtime.testOverlapJumpThru(this.inst)) && this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 4, !0), this.firstTick = !1), !b || 0 !== this.dy || b.y === this.lastFloorY && b.x === this.lastFloorX || (e = b.x - this.lastFloorX, t = b.y - this.lastFloorY, this.inst.x += e, this.inst.y += t, this.inst.set_bbox_changed(), this.lastFloorX = b.x, this.lastFloorY = b.y, w = !0, this.runtime.testOverlapSolid(this.inst) && this.runtime.pushOutSolid(this.inst, -e, -t, 2.5 * Math.sqrt(e * e + t * t)));
                var E = this.isOnFloor(),
                    S = this.runtime.testOverlapSolid(this.inst);
                if (S)
                    if (this.inst.extra.inputPredicted) this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 10, !1);
                    else {
                        if (!this.runtime.pushOutSolidNearest(this.inst, Math.max(this.inst.width, this.inst.height) / 2)) return;
                        this.runtime.registerCollision(this.inst, S)
                    }
                E ? (this.dy > 0 && (this.wasOnFloor || (this.runtime.pushInFractional(this.inst, -this.downx, -this.downy, E, 16), this.wasOnFloor = !0), this.dy = 0), b != E ? (this.lastFloorObject = E, this.lastFloorX = E.x, this.lastFloorY = E.y, this.runtime.registerCollision(this.inst, E)) : w && (S = this.runtime.testOverlapSolid(this.inst), S && (this.runtime.registerCollision(this.inst, S), 0 !== e && (e > 0 ? this.runtime.pushOutSolid(this.inst, -this.rightx, -this.righty) : this.runtime.pushOutSolid(this.inst, this.rightx, this.righty)), this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy))), y && (p = this.inst.x, d = this.inst.y, this.inst.x -= this.downx, this.inst.y -= this.downy, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) ? y = !1 : (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnJump, this.inst), this.animMode = u, this.dy = -this.jumpStrength, this.jumped = !0), this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed())) : (this.lastFloorObject = null, this.dy += this.g * v, this.dy > this.maxFall && (this.dy = this.maxFall), y && (this.jumped = !0)), this.wasOnFloor = !!E, m == g && (this.dx < 0 ? (this.dx += this.dec * v, this.dx > 0 && (this.dx = 0)) : this.dx > 0 && (this.dx -= this.dec * v, this.dx < 0 && (this.dx = 0))), m && !g && (this.dx -= this.dx > 0 ? (this.acc + this.dec) * v : this.acc * v), g && !m && (this.dx += this.dx < 0 ? (this.acc + this.dec) * v : this.acc * v), this.dx > this.maxspeed ? this.dx = this.maxspeed : this.dx < -this.maxspeed && (this.dx = -this.maxspeed);
                var x = !1;
                if (0 !== this.dx) {
                    p = this.inst.x, d = this.inst.y, e = this.dx * v * this.rightx, t = this.dx * v * this.righty, this.inst.x += this.rightx * (this.dx > 1 ? 1 : -1) - this.downx, this.inst.y += this.righty * (this.dx > 1 ? 1 : -1) - this.downy, this.inst.set_bbox_changed();
                    var T = !1,
                        N = this.runtime.testOverlapSolid(this.inst);
                    if (this.inst.x = p + e, this.inst.y = d + t, this.inst.set_bbox_changed(), n = this.runtime.testOverlapSolid(this.inst), !n && E && (n = this.runtime.testOverlapJumpThru(this.inst), n && (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), this.runtime.testOverlap(this.inst, n) ? (n = null, T = !1) : T = !0, this.inst.x = p + e, this.inst.y = d + t, this.inst.set_bbox_changed())), n) {
                        var C = Math.abs(this.dx * v) + 2;
                        N || !this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, C, T, n) ? (this.runtime.registerCollision(this.inst, n), C = Math.max(Math.abs(this.dx * v * 2.5), 30), this.runtime.pushOutSolid(this.inst, this.rightx * (this.dx < 0 ? 1 : -1), this.righty * (this.dx < 0 ? 1 : -1), C, !1) ? !E || T || this.floorIsJumpthru || (p = this.inst.x, d = this.inst.y, this.inst.x += this.downx, this.inst.y += this.downy, this.runtime.testOverlapSolid(this.inst) ? this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 3, !1) || (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed()) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed())) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed()), T || (this.dx = 0)) : !N && !y && Math.abs(this.dy) < Math.abs(this.jumpStrength / 4) && (this.dy = 0, E || (x = !0))
                    } else {
                        var k = this.isOnFloor();
                        E && !k ? (r = Math.ceil(Math.abs(this.dx * v)) + 2, p = this.inst.x, d = this.inst.y, this.inst.x += this.downx * r, this.inst.y += this.downy * r, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) || this.runtime.testOverlapJumpThru(this.inst) ? this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, r + 2, !0) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed())) : k && 0 === this.dy && this.runtime.pushInFractional(this.inst, -this.downx, -this.downy, k, 16)
                    }
                }
                if (0 !== this.dy) {
                    p = this.inst.x, d = this.inst.y, this.inst.x += this.dy * v * this.downx, this.inst.y += this.dy * v * this.downy;
                    var L = this.inst.x,
                        A = this.inst.y;
                    this.inst.set_bbox_changed(), S = this.runtime.testOverlapSolid(this.inst);
                    var O = !1;
                    if (!S && this.dy > 0 && !E) {
                        if (i = this.fallthrough > 0 ? null : this.runtime.testOverlapJumpThru(this.inst, !0), i && i.length) {
                            if (this.wasOverJumpthru) {
                                for (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), f = 0, h = 0, c = i.length; c > f; f++) i[h] = i[f], this.runtime.testOverlap(this.inst, i[f]) || h++;
                                i.length = h, this.inst.x = L, this.inst.y = A, this.inst.set_bbox_changed()
                            }
                            i.length >= 1 && (S = i[0])
                        }
                        O = !!S
                    }
                    if (S) {
                        this.runtime.registerCollision(this.inst, S);
                        var C = O ? Math.abs(this.dy * v * 2.5 + 10) : Math.max(Math.abs(this.dy * v * 2.5 + 10), 30);
                        this.runtime.pushOutSolid(this.inst, this.downx * (this.dy < 0 ? 1 : -1), this.downy * (this.dy < 0 ? 1 : -1), C, O, S) ? (this.lastFloorObject = S, this.lastFloorX = S.x, this.lastFloorY = S.y, this.floorIsJumpthru = O, O && (x = !0), this.dy = 0) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), this.wasOnFloor = !0, O || (this.dy = 0))
                    }
                }
                this.animMode !== a && this.dy > 0 && !E && (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnFall, this.inst), this.animMode = a), (E || x) && (this.animMode === a || x || y && 0 === this.dy ? (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnLand, this.inst), this.animMode = 0 === this.dx && 0 === this.dy ? s : o) : (this.animMode !== s && 0 === this.dx && 0 === this.dy && (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnStop, this.inst), this.animMode = s), this.animMode === o || 0 === this.dx && 0 === this.dy || y || (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnMove, this.inst), this.animMode = o))), this.fallthrough > 0 && this.fallthrough--, this.wasOverJumpthru = this.runtime.testOverlapJumpThru(this.inst)
            }
        }, e.prototype.IsMoving = function() {
            return 0 !== this.dx || 0 !== this.dy
        }, e.prototype.CompareSpeed = function(e, t) {
            var n = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
            return cr.do_cmp(n, e, t)
        }, e.prototype.IsOnFloor = function() {
            if (0 !== this.dy) return !1;
            var e, t, n, r = null,
                i = null,
                s = this.inst.x,
                o = this.inst.y;
            if (this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed(), r = this.runtime.testOverlapSolid(this.inst), r || 0 !== this.fallthrough || (i = this.runtime.testOverlapJumpThru(this.inst, !0)), this.inst.x = s, this.inst.y = o, this.inst.set_bbox_changed(), r) return !this.runtime.testOverlap(this.inst, r);
            if (i && i.length) {
                for (e = 0, n = 0, t = i.length; t > e; e++) i[n] = i[e], this.runtime.testOverlap(this.inst, i[e]) || n++;
                if (n >= 1) return !0
            }
            return !1
        }, e.prototype.IsByWall = function(e) {
            var t = !1,
                n = this.inst.x,
                r = this.inst.y;
            return this.inst.x -= 3 * this.downx, this.inst.y -= 3 * this.downy, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) ? (this.inst.x = n, this.inst.y = r, this.inst.set_bbox_changed(), !1) : (0 === e ? (this.inst.x -= 2 * this.rightx, this.inst.y -= 2 * this.righty) : (this.inst.x += 2 * this.rightx, this.inst.y += 2 * this.righty), this.inst.set_bbox_changed(), t = this.runtime.testOverlapSolid(this.inst), this.inst.x = n, this.inst.y = r, this.inst.set_bbox_changed(), t)
        }, e.prototype.IsJumping = function() {
            return this.dy < 0
        }, e.prototype.IsFalling = function() {
            return this.dy > 0
        }, e.prototype.OnJump = function() {
            return !0
        }, e.prototype.OnFall = function() {
            return !0
        }, e.prototype.OnStop = function() {
            return !0
        }, e.prototype.OnMove = function() {
            return !0
        }, e.prototype.OnLand = function() {
            return !0
        }, r.cnds = new e, t.prototype.SetIgnoreInput = function(e) {
            this.ignoreInput = e
        }, t.prototype.SetMaxSpeed = function(e) {
            this.maxspeed = e, this.maxspeed < 0 && (this.maxspeed = 0)
        }, t.prototype.SetAcceleration = function(e) {
            this.acc = e, this.acc < 0 && (this.acc = 0)
        }, t.prototype.SetDeceleration = function(e) {
            this.dec = e, this.dec < 0 && (this.dec = 0)
        }, t.prototype.SetJumpStrength = function(e) {
            this.jumpStrength = e, this.jumpStrength < 0 && (this.jumpStrength = 0)
        }, t.prototype.SetGravity = function(e) {
            this.g1 !== e && (this.g = e, this.updateGravity(), this.runtime.testOverlapSolid(this.inst) && (this.runtime.pushOutSolid(this.inst, this.downx, this.downy, 10), this.inst.x += 2 * this.downx, this.inst.y += 2 * this.downy, this.inst.set_bbox_changed()), this.lastFloorObject = null)
        }, t.prototype.SetMaxFallSpeed = function(e) {
            this.maxFall = e, this.maxFall < 0 && (this.maxFall = 0)
        }, t.prototype.SimulateControl = function(e) {
            switch (e) {
                case 0:
                    this.simleft = !0;
                    break;
                case 1:
                    this.simright = !0;
                    break;
                case 2:
                    this.simjump = !0
            }
        }, t.prototype.SetVectorX = function(e) {
            this.dx = e
        }, t.prototype.SetVectorY = function(e) {
            this.dy = e
        }, t.prototype.SetGravityAngle = function(e) {
            e = cr.to_radians(e), e = cr.clamp_angle(e), this.ga !== e && (this.ga = e, this.updateGravity(), this.lastFloorObject = null)
        }, t.prototype.SetEnabled = function(e) {
            this.enabled !== (1 === e) && (this.enabled = 1 === e, this.enabled || (this.lastFloorObject = null))
        }, t.prototype.FallThrough = function() {
            var e = this.inst.x,
                t = this.inst.y;
            this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed();
            var n = this.runtime.testOverlapJumpThru(this.inst, !1);
            this.inst.x = e, this.inst.y = t, this.inst.set_bbox_changed(), n && (this.fallthrough = 3, this.lastFloorObject = null)
        }, r.acts = new t, n.prototype.Speed = function(e) {
            e.set_float(Math.sqrt(this.dx * this.dx + this.dy * this.dy))
        }, n.prototype.MaxSpeed = function(e) {
            e.set_float(this.maxspeed)
        }, n.prototype.Acceleration = function(e) {
            e.set_float(this.acc)
        }, n.prototype.Deceleration = function(e) {
            e.set_float(this.dec)
        }, n.prototype.JumpStrength = function(e) {
            e.set_float(this.jumpStrength)
        }, n.prototype.Gravity = function(e) {
            e.set_float(this.g)
        }, n.prototype.GravityAngle = function(e) {
            e.set_float(cr.to_degrees(this.ga))
        }, n.prototype.MaxFallSpeed = function(e) {
            e.set_float(this.maxFall)
        }, n.prototype.MovingAngle = function(e) {
            e.set_float(cr.to_degrees(Math.atan2(this.dy, this.dx)))
        }, n.prototype.VectorX = function(e) {
            e.set_float(this.dx)
        }, n.prototype.VectorY = function(e) {
            e.set_float(this.dy)
        }, r.exps = new n
    }(), cr.behaviors.bound = function(e) {
        this.runtime = e
    },
    function() {
        var e = cr.behaviors.bound.prototype;
        e.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var t = e.Type.prototype;
        t.onCreate = function() {}, e.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime, this.mode = 0
        };
        var n = e.Instance.prototype;
        n.onCreate = function() {
            this.mode = this.properties[0]
        }, n.tick = function() {}, n.tick2 = function() {
            this.inst.update_bbox();
            var e = this.inst.bbox,
                t = this.inst.layer.layout,
                n = !1;
            0 === this.mode ? (this.inst.x < 0 && (this.inst.x = 0, n = !0), this.inst.y < 0 && (this.inst.y = 0, n = !0), this.inst.x > t.width && (this.inst.x = t.width, n = !0), this.inst.y > t.height && (this.inst.y = t.height, n = !0)) : (e.left < 0 && (this.inst.x -= e.left, n = !0), e.top < 0 && (this.inst.y -= e.top, n = !0), e.right > t.width && (this.inst.x -= e.right - t.width, n = !0), e.bottom > t.height && (this.inst.y -= e.bottom - t.height, n = !0)), n && this.inst.set_bbox_changed()
        }
    }(), cr.behaviors.destroy = function(e) {
        this.runtime = e
    },
    function() {
        var e = cr.behaviors.destroy.prototype;
        e.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var t = e.Type.prototype;
        t.onCreate = function() {}, e.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime
        };
        var n = e.Instance.prototype;
        n.onCreate = function() {}, n.tick = function() {
            this.inst.update_bbox();
            var e = this.inst.bbox,
                t = this.inst.layer.layout;
            (e.right < 0 || e.bottom < 0 || e.left > t.width || e.top > t.height) && this.runtime.DestroyInstance(this.inst)
        }
    }(), cr.behaviors.solid = function(e) {
        this.runtime = e
    },
    function() {
        function e() {}

        function t() {}
        var n = cr.behaviors.solid.prototype;
        n.Type = function(e, t) {
            this.behavior = e, this.objtype = t, this.runtime = e.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(e, t) {
            this.type = e, this.behavior = e.behavior, this.inst = t, this.runtime = e.runtime
        };
        var i = n.Instance.prototype;
        i.onCreate = function() {
            this.inst.extra.solidEnabled = 0 !== this.properties[0]
        }, i.tick = function() {}, e.prototype.IsEnabled = function() {
            return this.inst.extra.solidEnabled
        }, n.cnds = new e, t.prototype.SetEnabled = function(e) {
            this.inst.extra.solidEnabled = !!e
        }, n.acts = new t
    }(), cr.getProjectModel = function() {
        return [null, "Menu", [
                [cr.plugins_.Particles, !1, !0, !0, !1, !0, !0, !0, !0, !0],
                [cr.plugins_.Sprite, !1, !0, !0, !0, !0, !0, !0, !0, !1],
                [cr.plugins_.Text, !1, !0, !0, !0, !0, !0, !0, !0, !1],
                [cr.plugins_.Touch, !0, !1, !1, !1, !1, !1, !1, !1, !1],
                [cr.plugins_.WebStorage, !0, !1, !1, !1, !1, !1, !1, !1, !1],
                [cr.plugins_.Audio, !0, !1, !1, !1, !1, !1, !1, !1, !1],
                [cr.plugins_.Browser, !0, !1, !1, !1, !1, !1, !1, !1, !1],
                [cr.plugins_.CJSAds, !0, !1, !1, !1, !1, !1, !1, !1, !1],
                [cr.plugins_.TiledBg, !1, !0, !0, !0, !0, !0, !0, !0, !0]
            ],
            [
                ["t0", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0x66f3a2fdf1e97, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 8314878182034448],
                        ["BoundToLayout", cr.behaviors.bound, 0x5d7504344e51b]
                    ], !1, !1, 9202559512583248, [], null
                ],
                ["t1", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 6568188452526936]
                ], !1, !1, 6361042052061363, [], null],
                ["t2", cr.plugins_.Touch, !1, [], 0, 0, null, null, [], !1, !1, 7080415064541899, [], null, [1]],
                ["t3", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg1.png", 156, 1], null, [], !1, !1, 0xc4bc6edb43b9e, [], null],
                ["t4", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg2.png", 156, 1], null, [], !1, !1, 6757427820064185, [], null],
                ["t5", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 9310550853039760, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x3c3a31334fc8e, [], null
                ],
                ["t6", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 5914803487727719]
                ], !1, !1, 0x54bf95c2cac0c, [], null],
                ["t7", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 8121185699953036],
                    ["BoundToLayout", cr.behaviors.bound, 0xa1c0435518447]
                ], !1, !1, 0xfad8802cfae10, [], null],
                ["t8", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0xc8000226fea68, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 0x9142b4d3dfa66],
                        ["BoundToLayout", cr.behaviors.bound, 9923801587168184]
                    ], !1, !1, 8795787654955184, [], null
                ],
                ["t9", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 450205616049659],
                    ["BoundToLayout", cr.behaviors.bound, 9499681905803348]
                ], !1, !1, 5567047572048658, [], null],
                ["t10", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 7505284560090583, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 5204639142997524, [], null
                ],
                ["t11", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 9568985645025144]
                ], !1, !1, 6388260095824243, [], null],
                ["t12", cr.plugins_.Sprite, !1, [7528263856580013], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0xc72788ec0842c, [
                            ["images/spike-sheet0.png", 591, 0, 0, 44, 80, 1, .6590909361839294, .4749999940395355, [],
                                [5.960464477539063e-8, -.1749999821186066, -.2499999403953552, -.2749999761581421, .3181820511817932, -.01249998807907105, -.2045459449291229, .2875000536441803, 5.960464477539063e-8, .1624999940395355, -.6590909361839294, -.01249998807907105], 0
                            ]
                        ]]
                    ],
                    [
                        ["Bullet", cr.behaviors.Bullet, 7073731433865991],
                        ["DestroyOutsideLayout", cr.behaviors.destroy, 5460983221610014]
                    ], !1, !1, 7982039181304106, [], null
                ],
                ["t13", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 6359349168031184, [], null],
                ["t14", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 8835981928719879, [], null],
                ["t15", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 7613620147924718, [
                            ["images/textbg_bestscore_normal-sheet0.png", 589, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 9607777712854436, [], null
                ],
                ["t16", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 7847271434545664, [], null],
                ["t17", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 7297958554087399, [], null],
                ["t18", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x5baba918e84ba, [], null],
                ["t19", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 9589340306433068, [], null],
                ["t20", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 9755286571421904, [
                            ["images/textbg_bestscore_normal-sheet0.png", 589, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x71c647078999f, [], null
                ],
                ["t21", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x3f03fb8429157, [], null],
                ["t22", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0xcc11606c224f7, [], null],
                ["t23", cr.plugins_.WebStorage, !1, [], 0, 0, null, null, [], !1, !1, 5139001462299883, [], null, []],
                ["t24", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 5103342796693258, [
                            ["images/normalbttn-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x7af7f7b168338, [], null
                ],
                ["t25", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 8984062788887902, [], null],
                ["t26", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 5994456087172483, [], null],
                ["t27", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x3e070f6dc0f5d, [], null],
                ["t28", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0xc1835a6e5a28e, [
                            ["images/nightmarebttn-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 4790712197383259, [], null
                ],
                ["t29", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 6951528211348085, [], null],
                ["t30", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 445665985768652, [
                            ["images/hellbttn-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0xe41d3a23e1414, [], null
                ],
                ["t31", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 872611027852685, [
                            ["images/infernobttn-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 7482520610590856, [], null
                ],
                ["t32", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0xa4c197186dc49, [], null],
                ["t33", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 5992033972514587, [], null],
                ["t34", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x6a1d5705e0026, [], null],
                ["t35", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 4966954451971078, [], null],
                ["t36", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 6096583420072432, [
                            ["images/impossiblebttn-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x719f5a58b5c47, [], null
                ],
                ["t37", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 468877404981382, [], null],
                ["t38", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0xda92ffda1bca7, [], null],
                ["t39", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg3.png", 156, 1], null, [], !1, !1, 0xb29ac2431cd86, [], null],
                ["t40", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 0xe3473ebd3799a]
                ], !1, !1, 9677020296823962, [], null],
                ["t41", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0x627aa0a17bb03, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 0xc3da5be5e05be],
                        ["BoundToLayout", cr.behaviors.bound, 9649509671967356]
                    ], !1, !1, 8319208106429983, [], null
                ],
                ["t42", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 6873912397263765, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 8469203959684586, [], null
                ],
                ["t43", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0xe4c53ccaa5463, [], null],
                ["t44", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 8936911518284494, [], null],
                ["t45", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 8952683020386214, [], null],
                ["t46", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x953a83aa41291, [], null],
                ["t47", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg4.png", 156, 1], null, [], !1, !1, 0xbdba9f5f3fcde, [], null],
                ["t48", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0x81c45f58bb5b3, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 0xea0f2a59f4c38],
                        ["BoundToLayout", cr.behaviors.bound, 0xf031991bb3658]
                    ], !1, !1, 5660495787184037, [], null
                ],
                ["t49", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 9142222473371622],
                    ["BoundToLayout", cr.behaviors.bound, 4767382198009075]
                ], !1, !1, 7851621736660535, [], null],
                ["t50", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 4906895085843812, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 0xa64c1cc7a2880, [], null
                ],
                ["t51", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 8423911507388832, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 0xe7bdb851842d, [], null
                ],
                ["t52", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0xfec6c8024c667, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 5790975368279212, [], null
                ],
                ["t53", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 4640784326725808, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 4588411117111063, [], null
                ],
                ["t54", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 532238573144374],
                    ["BoundToLayout", cr.behaviors.bound, 6471116641597284]
                ], !1, !1, 879565000856208, [], null],
                ["t55", cr.plugins_.Sprite, !1, [0xf307ddc1a3a73], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 7260137273477723, [
                            ["images/spike-sheet0.png", 591, 0, 0, 44, 80, 1, .6590909361839294, .4749999940395355, [],
                                [5.960464477539063e-8, -.1749999821186066, -.2499999403953552, -.2749999761581421, .3181820511817932, -.01249998807907105, -.2045459449291229, .2875000536441803, 5.960464477539063e-8, .1624999940395355, -.6590909361839294, -.01249998807907105], 0
                            ]
                        ]]
                    ],
                    [
                        ["Bullet", cr.behaviors.Bullet, 7986109018720562],
                        ["DestroyOutsideLayout", cr.behaviors.destroy, 5470250386077403]
                    ], !1, !1, 8203573051285382, [], null
                ],
                ["t56", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x892413a720ed5, [], null],
                ["t57", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x390e63a5c94c4, [], null],
                ["t58", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg5.png", 156, 1], null, [], !1, !1, 8990260247683904, [], null],
                ["t59", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 0xccaab0afca5e3]
                ], !1, !1, 7788867354988146, [], null],
                ["t60", cr.plugins_.TiledBg, !1, [], 1, 0, ["images/wall.png", 104, 1], null, [
                    ["Solid", cr.behaviors.solid, 4805740337038933]
                ], !1, !1, 5046137115742047, [], null],
                ["t61", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 0xbfbaa6b5af4fd, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 31611307272276],
                        ["BoundToLayout", cr.behaviors.bound, 5326994880616739]
                    ], !1, !1, 0xa860af95ff41b, [], null
                ],
                ["t62", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 8917645216701109],
                    ["BoundToLayout", cr.behaviors.bound, 0x6317a00bd2a2b]
                ], !1, !1, 0x8287c0b2f0e9b, [], null],
                ["t63", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 7702544969032746, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 6580132122188653, [], null
                ],
                ["t64", cr.plugins_.TiledBg, !1, [], 0, 0, ["images/bg6.png", 156, 1], null, [], !1, !1, 0xfa3522dae993b, [], null],
                ["t65", cr.plugins_.Sprite, !1, [], 2, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 5032065670131676, [
                            ["images/player-sheet0.png", 1472, 0, 0, 57, 125, 1, .08771929889917374, .9440000057220459, [],
                                [-.07047790288925171, -.9440000057220459, .3950397074222565, -.9440000057220459, .6364187002182007, -.9440000057220459, .8605566620826721, -.9440000057220459, .2915907204151154, -.9440000057220459, .3950397074222565, -.9440000057220459, -.03599520027637482, -.9440000057220459, .1019357070326805, -.9440000057220459], 0
                            ]
                        ]]
                    ],
                    [
                        ["Platform", cr.behaviors.Platform, 5077497232240966],
                        ["BoundToLayout", cr.behaviors.bound, 6185495358862762]
                    ], !1, !1, 8690321124762315, [], null
                ],
                ["t66", cr.plugins_.Particles, !1, [], 2, 0, ["images/playerparticle.png", 92, 1], null, [
                    ["Pin", cr.behaviors.Pin, 4617043882985752],
                    ["BoundToLayout", cr.behaviors.bound, 0x8da015ecb9783]
                ], !1, !1, 0xb6ffedb55008, [], null],
                ["t67", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 7463286475444659, [
                            ["images/touchleft-sheet0.png", 168, 0, 0, 250, 250, 1, .5, .5, [],
                                [], 3
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x62c3d9d05d28a, [], null
                ],
                ["t68", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x650e3ff8d565d, [], null],
                ["t69", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0xffaf52b2572b9, [], null],
                ["t70", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 509362264958093, [
                            ["images/letsplaybg-sheet0.png", 413, 0, 0, 404, 222, 1, .5, .5, [],
                                [-.4925742745399475, -.4864864945411682, 0, -.5, .4925739765167236, -.4864864945411682, .4925739765167236, .48648601770401, 0, .5, -.4925742745399475, .48648601770401], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 408058538244016, [], null
                ],
                ["t71", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 5316312943955336, [], null],
                ["t72", cr.plugins_.CJSAds, !1, [], 0, 0, null, null, [], !1, !1, 949271420120713, [], null, [0, 1]],
                ["t73", cr.plugins_.Audio, !1, [], 0, 0, null, null, [], !1, !1, 0xdab676c509da5, [], null, [0, 0, 1, 1, 600, 600, 1e4, 1, 5e3, 1]],
                ["t74", cr.plugins_.Text, !1, [], 0, 0, null, null, [], !1, !1, 0x9089e812a8b9a, [], null],
                ["t75", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 6888153195182923, [
                            ["images/facebookshare-sheet0.png", 1958, 0, 0, 118, 118, 1, .491525411605835, .491525411605835, [],
                                [-.3389830589294434, -.3389830589294434, 0, -.4745762646198273, .3474576473236084, -.347457617521286, .491525411605835, 0, .3474576473236084, .3474576473236084, 0, .491525411605835, -.3389830589294434, .3389830589294434, -.4745762646198273, 0], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0x8737d78dc1b8e, [], null
                ],
                ["t76", cr.plugins_.Sprite, !1, [], 0, 0, null, [
                        ["Default", 5, !1, 1, 0, !1, 8810169868865641, [
                            ["images/twittershare-sheet0.png", 2369, 0, 0, 118, 118, 1, .491525411605835, .491525411605835, [],
                                [-.3389830589294434, -.3389830589294434, 0, -.4745762646198273, .3474576473236084, -.347457617521286, .491525411605835, 0, .3474576473236084, .3474576473236084, 0, .491525411605835, -.3389830589294434, .3389830589294434, -.4745762646198273, 0], 0
                            ]
                        ]]
                    ],
                    [], !1, !1, 0xd80c59d575e0d, [], null
                ],
                ["t77", cr.plugins_.Browser, !1, [], 0, 0, null, null, [], !1, !1, 0xc9383e8101249, [], null, []]
            ],
            [],
            [
                ["Normal", 640, 960, !1, "NormalSheet", 6793190745443023, [
                        ["BG", 0, 0xfe2f6cdb9082f, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [324, -10, 0, 323, 985, 0, 0, 1, 0, 0, 0, 0, []], 4, 4, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [-9, -3, 0, 329, 967, 0, 0, 1, 0, 0, 0, 0, []], 3, 2, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [315, -7, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 1, 1, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Objects", 1, 0xf6e591d868dc3, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [141, 280, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 0, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [148, 231, 0, 74, 74, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 7, 7, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [476, 280, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 8, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [481, 227, 0, 74.12152099609375, 74.12152099609375, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 9, 9, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [-37, -3, 0, 627, 74, 0, 0, 1, 0, 0, 0, 0, []], 13, 13, [],
                                    [],
                                    ["0", 0, "36pt Impact", "rgb(255,255,255)", 2, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Touch", 2, 8804938411823264, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [158, 479.5, 0, 324, 971, 0, 0, 1, .5, .5, 0, 0, []], 5, 5, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [500, 480.5, 0, 346, 979, 0, 0, 1, .5, .5, 0, 0, []], 10, 10, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Exterior Walls", 3, 0xadd72705608ec, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-4, -2.908782958984375, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 6, 6, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [606, -14, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 11, 11, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["GameOver", 4, 8210983363784418, !1, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [322, 198.5, 0, 640, 149, 0, 0, 1, .5, .5, 0, 0, []], 14, 14, [],
                                    [],
                                    ["逃亡失败!", 0, "72pt Cambria", "rgb(47,46,48)", 1, 1, 1, 0, 0]
                                ],
                                [
                                    [324, 323, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 15, 15, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [124, 264, 0, 401, 114, 0, 0, 1, 0, 0, 0, 0, []], 16, 16, [],
                                    [],
                                    ["分数", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [309.3287048339844, 329.8324890136719, 0, 236, 67, 0, 0, 1, 0, 0, 0, 0, []], 17, 17, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [321, 582, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 18, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [122, 546, 0, 401.9774780273438, 73.11862182617188, 0, 0, 1, 0, 0, 0, 0, []], 18, 19, [],
                                    [],
                                    ["重试", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [321, 681, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 21, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [120, 644, 0, 401, 72, 0, 0, 1, 0, 0, 0, 0, []], 19, 20, [],
                                    [],
                                    ["返回主界面", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [322, 461, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 20, 22, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [122, 404, 0, 396, 113, 0, 0, 1, 0, 0, 0, 0, []], 21, 23, [],
                                    [],
                                    ["最好成绩", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [305, 462, 0, 227, 59, 0, 0, 1, 0, 0, 0, 0, []], 22, 24, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [48.73337173461914, 906.8275146484375, 0, 84.90583038330078, 84.90583038330078, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 75, 201, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [142, 906.8280029296875, 0, 84.90599822998047, 84.90599822998047, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 76, 202, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Click To Begin!", 5, 8793808151719034, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-5, -2, 0, 651, 975, 0, 0, 1, 0, 0, 0, 0, []], 74, 196, [],
                                    [],
                                    ["点击开始!", 0, "bold 48pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["Menu", 640, 960, !1, "MenuSheet", 7496298940719232, [
                        ["BG", 0, 0x67f99609e3fa6, !0, [248, 237, 221], !1, 1, 1, 1, !1, 1, 0, 0, [],
                            []
                        ],
                        ["UI", 1, 5342882108316562, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [329.9302978515625, 330, 0, 422, 89, 0, 0, 1, .5, .5, 0, 0, []], 24, 26, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [118.9302978515625, 284, 0, 422, 80, 0, 0, 1, 0, 0, 0, 0, []], 25, 27, [],
                                    [],
                                    ["普通难度", 0, "bold 36pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [119, 338, 0, 421.3353271484375, 55, 0, 0, 1, 0, 0, 0, 0, []], 26, 28, [],
                                    [],
                                    ["0", 0, "22pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [1, 70, 0, 638, 98, 0, 0, 1, 0, 0, 0, 0, []], 27, 29, [],
                                    [],
                                    ["火柴人大逃亡", 0, "bold 48pt Impact", "rgb(0,0,0)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [185, 468, 0, 131.5364685058594, 99.99185180664062, 0, 0, 1, .5, .5, 0, 0, []], 28, 30, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [120, 475, 0, 129.9583129882813, 51.3916015625, 0, 0, 1, 0, 0, 0, 0, []], 29, 32, [],
                                    [],
                                    ["0", 0, "22pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [330, 468, 0, 131.5359954833984, 99.99199676513672, 0, 0, 1, .5, .5, 0, 0, []], 30, 33, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [474, 467, 0, 131.5359954833984, 99.99199676513672, 0, 0, 1, .5, .5, 0, 0, []], 31, 34, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [266, 433, 0, 130.5559997558594, 97.36100006103516, 0, 0, 1, 0, 0, 0, 0, []], 32, 35, [],
                                    [],
                                    ["地狱", 0, "bold 24pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [265, 474, 0, 129.9579925537109, 51.39199829101563, 0, 0, 1, 0, 0, 0, 0, []], 33, 36, [],
                                    [],
                                    ["0", 0, "22pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [411, 434, 0, 130.5559997558594, 97.36100006103516, 0, 0, 1, 0, 0, 0, 0, []], 34, 37, [],
                                    [],
                                    ["炼狱", 0, "bold 24pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [409, 475, 0, 129.9579925537109, 51.39199829101563, 0, 0, 1, 0, 0, 0, 0, []], 35, 38, [],
                                    [],
                                    ["0", 0, "22pt Impact", "rgb(46,45,47)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [330, 605, 0, 421.8609924316406, 89, 0, 0, 1, .5, .5, 0, 0, []], 36, 39, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [119, 555.221435546875, 0, 422, 80, 0, 0, 1, 0, 0, 0, 0, []], 37, 40, [],
                                    [],
                                    ["自虐难度", 0, "bold 36pt Impact", "rgb(45,44,46)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [120.58984375, 609.12109375, 0, 421.3349914550781, 55, 0, 0, 1, 0, 0, 0, 0, []], 38, 41, [],
                                    [],
                                    ["0", 0, "22pt Impact", "rgb(46,45,47)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [121, 432, 0, 130.5559997558594, 97.36100006103516, 0, 0, 1, 0, 0, 0, 0, []], 46, 31, [],
                                    [],
                                    ["噩梦", 0, "bold 24pt Impact", "rgb(47,46,48)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [121, 655, 0, 419, 77, 0, 0, 1, 0, 0, 0, 0, []], 68, 183, [],
                                    [],
                                    ["怎么玩?", 0, "36pt Impact", "rgb(0,0,0)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["Nightmare", 640, 960, !1, "NightmareSheet", 476582701442117, [
                        ["BGs", 0, 6141996387292167, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-2, -3, 0, 216, 967, 0, 0, 1, 0, 0, 0, 0, []], 3, 42, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [211, -15, 0, 213, 985, 0, 0, 1, 0, 0, 0, 0, []], 4, 43, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [423, -7, 0, 223, 974, 0, 0, 1, 0, 0, 0, 0, []], 39, 44, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [210, -5, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 1, 45, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [423, -9, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 40, 46, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Players", 1, 6048407420453315, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [570, 239, 0, 74.12200164794922, 74.12000274658203, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 49, 79, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [137, 231, 0, 74, 74, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 7, 77, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [370, 235, 0, 74.12152099609375, 74.12152099609375, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 9, 78, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [130, 280, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 47, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [362, 280, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 48, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [560, 280, 0, 40, 88, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 41, 49, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Touch", 2, 5926261608077473, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [49, 480, 0, 324, 971, 0, 0, 1, .5, .5, 0, 0, []], 5, 50, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [608, 468, 0, 346, 979, 0, 0, 1, .5, .5, 0, 0, []], 10, 51, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [324, 482, 0, 210, 986, 0, 0, 1, .5, .5, 0, 0, []], 42, 52, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["ExteriorWalls", 3, 0xa7eeacb468bd1, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-1, 0, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 6, 53, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [605, -19, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 11, 54, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Objects", 4, 841927784348586, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-35, -2, 0, 627, 74, 0, 0, 1, 0, 0, 0, 0, []], 43, 56, [],
                                    [],
                                    ["0", 0, "36pt Impact", "rgb(255,255,255)", 2, 0, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["GameOver", 5, 9465855984909984, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [322, 461, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 20, 63, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [324, 323, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 15, 59, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [322, 198.5, 0, 640, 149, 0, 0, 1, .5, .5, 0, 0, []], 14, 57, [],
                                    [],
                                    ["逃亡失败!", 0, "72pt Cambria", "rgb(47,46,48)", 1, 1, 1, 0, 0]
                                ],
                                [
                                    [123, 266, 0, 401, 114, 0, 0, 1, 0, 0, 0, 0, []], 16, 58, [],
                                    [],
                                    ["分数", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [321, 582, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 60, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [321, 681, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 61, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [124, 404, 0, 396, 113, 0, 0, 1, 0, 0, 0, 0, []], 21, 62, [],
                                    [],
                                    ["最好成绩", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [122, 546, 0, 401.9774780273438, 73.11862182617188, 0, 0, 1, 0, 0, 0, 0, []], 18, 64, [],
                                    [],
                                    ["重试", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [122, 644, 0, 401, 72, 0, 0, 1, 0, 0, 0, 0, []], 19, 65, [],
                                    [],
                                    ["返回主界面", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [309.3290100097656, 329.8320007324219, 0, 200, 59, 0, 0, 1, 0, 0, 0, 0, []], 44, 66, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [312, 470, 0, 200, 57, 0, 0, 1, 0, 0, 0, 0, []], 45, 67, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [57, 906, 0, 84.90583038330078, 84.90583038330078, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 75, 204, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [146, 906, 0, 84.90599822998047, 84.90599822998047, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 76, 205, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Click To Begin!", 6, 0x58719e360b2c0, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-2, -9, 0, 651, 975, 0, 0, 1, 0, 0, 0, 0, []], 74, 200, [],
                                    [],
                                    ["点击开始!", 0, "48pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["Hell", 640, 960, !1, "HellSheet", 6495772553679315, [
                        ["ObjectsBot", 0, 0x8453830d77bda, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [1224, 203, 0, 72, 56, 0, 0, 1, .6590909361839294, .4749999940395355, 0, 0, []], 12, 91, [
                                        [0]
                                    ],
                                    [
                                        [0, 0, 0, 0, 0, 1],
                                        []
                                    ],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["BG_Top", 1, 5851706206676208, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [0, 0, 0, 320, 480, 0, 0, 1, 0, 0, 0, 0, []], 3, 55, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [320, 0, 0, 320, 480, 0, 0, 1, 0, 0, 0, 0, []], 4, 68, [],
                                    [],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["ObjectsTop", 2, 9495895565874314, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-39.8114013671875, 2.076026916503906, 0, 627, 74, 0, 0, 1, 0, 0, 0, 0, []], 13, 92, [],
                                    [],
                                    ["0", 0, "36pt Impact", "rgb(255,255,255)", 2, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Bg_Bottom", 3, 0xa4cf290d1d3e1, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [0, 480, 0, 320, 480, 0, 0, 1, 0, 0, 0, 0, []], 39, 69, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [320, 480, 0, 320, 480, 0, 0, 1, 0, 0, 0, 0, []], 47, 70, [],
                                    [],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Walls", 4, 0x868a51b11ccb9, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [314, -5, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 1, 71, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [806, 466, 0, 18, 976, 0, 1.570796370506287, 1, 0, 0, 0, 0, []], 40, 72, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Players", 5, 8969480576743454, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [492, 596, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 48, 76, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [165, 596, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 41, 75, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [490, 100, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 74, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [157, 100, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 73, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [171, 55, 0, 74, 74, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 7, 86, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [501, 48, 0, 74.12152099609375, 74.12152099609375, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 9, 87, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [167, 567, 0, 74.12200164794922, 74.12000274658203, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 49, 88, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [497, 566, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 54, 89, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["touch", 6, 7880366942117175, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [147.5, 230.5, 0, 339, 481, 0, 0, 1, .5, .5, 0, 0, []], 50, 80, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [496, 234.5, 0, 348, 475, 0, 0, 1, .5, .5, 0, 0, []], 51, 81, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [140, 725, 0, 354, 482, 0, 0, 1, .5, .5, 0, 0, []], 52, 82, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [486.5, 723, 0, 317, 484, 0, 0, 1, .5, .5, 0, 0, []], 53, 83, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Exterior Walls", 7, 7877837409767375, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-1.125701904296875, -1.933837890625, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 6, 84, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [604, -17, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 11, 85, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["GameOver", 8, 352132221228013, !1, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [322, 198.5, 0, 640, 149, 0, 0, 1, .5, .5, 0, 0, []], 14, 93, [],
                                    [],
                                    ["逃亡失败!", 0, "72pt Cambria", "rgb(47,46,48)", 1, 1, 1, 0, 0]
                                ],
                                [
                                    [324, 323, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 15, 94, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [321, 582, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 95, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [321, 681, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 96, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [322, 461, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 20, 97, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [126, 265, 0, 401, 114, 0, 0, 1, 0, 0, 0, 0, []], 16, 98, [],
                                    [],
                                    ["分数", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [124, 547, 0, 401.9774780273438, 73.11862182617188, 0, 0, 1, 0, 0, 0, 0, []], 18, 99, [],
                                    [],
                                    ["重试", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [122, 645, 0, 401, 72, 0, 0, 1, 0, 0, 0, 0, []], 19, 100, [],
                                    [],
                                    ["返回主界面", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [124, 405, 0, 396, 113, 0, 0, 1, 0, 0, 0, 0, []], 21, 101, [],
                                    [],
                                    ["最好成绩", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [315, 330, 0, 200, 69, 0, 0, 1, 0, 0, 0, 0, []], 56, 102, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [312, 471, 0, 200, 65, 0, 0, 1, 0, 0, 0, 0, []], 57, 103, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [51, 906, 0, 84.90583038330078, 84.90583038330078, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 75, 206, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [139, 906, 0, 84.90599822998047, 84.90599822998047, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 76, 207, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Click To Begin", 9, 5096805631829142, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-9, -6, 0, 651, 975, 0, 0, 1, 0, 0, 0, 0, []], 74, 199, [],
                                    [],
                                    ["点击开始!", 0, "48pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["Inferno", 640, 960, !1, "InfernoSheet", 0x6f96b4ef9dfbd, [
                        ["BG", 0, 0xe235fc1594614, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [217, -15, 0, 213, 985, 0, 0, 1, 0, 0, 0, 0, []], 4, 105, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [411, -12, 0, 240, 974, 0, 0, 1, 0, 0, 0, 0, []], 39, 106, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [318.88916015625, 478, 0, 322, 507, 0, 0, 1, 0, 0, 0, 0, []], 58, 108, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [-7, -5, 0, 241, 973, 0, 0, 1, 0, 0, 0, 0, []], 3, 104, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [-1, 478, 0, 320, 500, 0, 0, 1, 0, 0, 0, 0, []], 47, 107, [],
                                    [],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Walls", 1, 9087930047096660, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [224, -14, 0, 18, 492, 0, 0, 1, 0, 0, 0, 0, []], 1, 109, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [404, -11, 0, 18, 493, 0, 0, 1, 0, 0, 0, 0, []], 40, 110, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [642, 471.0000305175781, 0, 18, 643, 0, 1.570796370506287, 1, 0, 0, 0, 0, []], 59, 111, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [314, 486, 0, 18, 492, 0, 0, 1, 0, 0, 0, 0, []], 60, 112, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Exterior Walls", 2, 8660337620441946, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [0, -2, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 6, 113, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [608, -15, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 11, 114, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Players", 3, 744512630552264, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [90, 110, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 115, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [312, 110, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 116, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [526, 110, 0, 40, 88, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 41, 117, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [86, 598, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 48, 118, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [414, 590, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 61, 119, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [99, 71, 0, 74, 74, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 7, 120, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [321, 70, 0, 74.12152099609375, 74.12152099609375, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 9, 121, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [536, 68, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 49, 122, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [94, 587, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 54, 123, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [423, 605, 0, 128, 128, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 62, 124, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Touch", 4, 0xfe21b7d900dfc, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [37, 234, 0, 339, 481, 0, 0, 1, .5, .5, 0, 0, []], 50, 125, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [319.5, 229, 0, 213, 489, 0, 0, 1, .5, .5, 0, 0, []], 51, 126, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [539.5, 236, 0, 215, 482, 0, 0, 1, .5, .5, 0, 0, []], 52, 127, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [156, 724, 0, 335, 484, 0, 0, 1, .5, .5, 0, 0, []], 53, 128, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [482.5, 720, 0, 313, 482, 0, 0, 1, .5, .5, 0, 0, []], 63, 129, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Objects", 5, 9638733432799384, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-29, 3, 0, 627, 74, 0, 0, 1, 0, 0, 0, 0, []], 13, 142, [],
                                    [],
                                    ["0", 0, "36pt Impact", "rgb(255,255,255)", 2, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["GameOver", 6, 0x5630b637b3fa9, !1, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [316, 243, 0, 640, 149, 0, 0, 1, .5, .5, 0, 0, []], 14, 131, [],
                                    [],
                                    ["逃亡失败!", 0, "72pt Cambria", "rgb(47,46,48)", 1, 1, 1, 0, 0]
                                ],
                                [
                                    [318, 368, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 15, 132, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [315, 627, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 133, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [315, 726, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 134, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [316, 506, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 20, 135, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [120, 310, 0, 401, 114, 0, 0, 1, 0, 0, 0, 0, []], 16, 136, [],
                                    [],
                                    ["分数", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [118, 592, 0, 401.9774780273438, 73.11862182617188, 0, 0, 1, 0, 0, 0, 0, []], 18, 137, [],
                                    [],
                                    ["重试", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [116, 690, 0, 401, 72, 0, 0, 1, 0, 0, 0, 0, []], 19, 138, [],
                                    [],
                                    ["返回主界面", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [118, 450, 0, 396, 113, 0, 0, 1, 0, 0, 0, 0, []], 21, 139, [],
                                    [],
                                    ["最好成绩", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [309, 375, 0, 200, 69, 0, 0, 1, 0, 0, 0, 0, []], 56, 140, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [306, 516, 0, 200, 65, 0, 0, 1, 0, 0, 0, 0, []], 57, 141, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [60, 906, 0, 84.90583038330078, 84.90583038330078, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 75, 208, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [151, 906, 0, 84.90599822998047, 84.90599822998047, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 76, 209, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Click To Begin", 7, 7127975091758518, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-5, -12, 0, 651, 975, 0, 0, 1, 0, 0, 0, 0, []], 74, 198, [],
                                    [],
                                    ["点击开始!", 0, "48pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["Impossible", 640, 960, !1, "ImpossibleSheet", 6221709039222784, [
                        ["BG", 0, 6823650229543361, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-2, -3, 0, 216, 967, 0, 0, 1, 0, 0, 0, 0, []], 3, 130, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [214, -14, 0, 213, 985, 0, 0, 1, 0, 0, 0, 0, []], 4, 143, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [419, -11, 0, 223, 974, 0, 0, 1, 0, 0, 0, 0, []], 39, 144, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [-3.552703857421875, 480, 0, 217.5527038574219, 985, 0, 0, 1, 0, 0, 0, 0, []], 47, 145, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [214.432861328125, 479.03564453125, 0, 204.8214111328125, 985, 0, 0, 1, 0, 0, 0, 0, []], 58, 146, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [416, 479, 0, 232, 985, 0, 0, 1, 0, 0, 0, 0, []], 64, 147, [],
                                    [],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Walls", 1, 9048676112762024, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [204, -6, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 1, 148, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [410, -10, 0, 18, 976, 0, 0, 1, 0, 0, 0, 0, []], 40, 149, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [640, 474, 0, 18, 643, 0, 1.570796370506287, 1, 0, 0, 0, 0, []], 59, 150, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Exterior Walls", 2, 7702851092721567, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-2, -3, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 6, 151, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [611.3544311523438, -18, 0, 36, 979, 0, 0, 1, 0, 0, 0, 0, []], 11, 152, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Players", 3, 0x8b40b1275b6ca, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [80, 109, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 153, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [305, 109, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 154, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [515, 109, 0, 40, 88, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 41, 155, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [77, 595, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 48, 156, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [306, 595, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 61, 157, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [509, 595, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 65, 158, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [88, 63, 0, 74, 74, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 7, 159, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [313, 68, 0, 74.12152099609375, 74.12152099609375, 0, -1.592978477478027, 1, 0, .5, 0, 0, []], 9, 160, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [523, 66, 0, 74.12200164794922, 74.12000274658203, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 49, 161, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [83, 591, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 54, 162, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [311, 599, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 62, 163, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ],
                                [
                                    [512, 597, 0, 74, 74, 0, -1.592979431152344, 1, 0, .5, 0, 0, []], 66, 164, [],
                                    [
                                        [],
                                        [1]
                                    ],
                                    [4, 10, 0, 200, 10, 100, 0, 0, 0, 0, 0, 0, -150, 0, 0, 800, 0, 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Touch", 4, 0x65ea3fa82acf8, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [37, 236, 0, 339, 481, 0, 0, 1, .5, .5, 0, 0, []], 50, 165, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [316.5, 235.5, 0, 199, 488, 0, 0, 1, .5, .5, 0, 0, []], 51, 166, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [527.5, 237, 0, 207, 488, 0, 0, 1, .5, .5, 0, 0, []], 52, 167, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [50, 729, 0, 317, 484, 0, 0, 1, .5, .5, 0, 0, []], 53, 168, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [315, 726, 0, 199, 482, 0, 0, 1, .5, .5, 0, 0, []], 63, 169, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [527, 723.5, 0, 220, 483, 0, 0, 1, .5, .5, 0, 0, []], 67, 170, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [-27, -4, 0, 627, 74, 0, 0, 1, 0, 0, 0, 0, []], 13, 171, [],
                                    [],
                                    ["0", 0, "36pt Impact", "rgb(255,255,255)", 2, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["GameOver", 5, 9817631364158772, !1, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [322, 264, 0, 640, 149, 0, 0, 1, .5, .5, 0, 0, []], 14, 172, [],
                                    [],
                                    ["逃亡失败!", 0, "72pt Cambria", "rgb(47,46,48)", 1, 1, 1, 0, 0]
                                ],
                                [
                                    [324, 389, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 15, 173, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [321, 648, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 174, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [321, 747, 0, 404, 75, 0, 0, 1, .5, .5, 0, 0, []], 15, 175, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [322, 527, 0, 401, 115, 0, 0, 1, .5, .5, 0, 0, []], 20, 176, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [126, 331, 0, 401, 114, 0, 0, 1, 0, 0, 0, 0, []], 16, 177, [],
                                    [],
                                    ["分数", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [124, 613, 0, 401.9774780273438, 73.11862182617188, 0, 0, 1, 0, 0, 0, 0, []], 18, 178, [],
                                    [],
                                    ["重试", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [122, 711, 0, 401, 72, 0, 0, 1, 0, 0, 0, 0, []], 19, 179, [],
                                    [],
                                    ["返回主界面", 0, "26pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ],
                                [
                                    [124, 471, 0, 396, 113, 0, 0, 1, 0, 0, 0, 0, []], 21, 180, [],
                                    [],
                                    ["最好成绩", 0, "36pt Impact", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [315, 396, 0, 200, 69, 0, 0, 1, 0, 0, 0, 0, []], 56, 181, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [312, 537, 0, 200, 65, 0, 0, 1, 0, 0, 0, 0, []], 57, 182, [],
                                    [],
                                    ["0", 0, "28pt Impact", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                                ],
                                [
                                    [55, 906, 0, 84.90583038330078, 84.90583038330078, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 75, 210, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [146, 906, 0, 84.90599822998047, 84.90599822998047, 0, 0, 1, .491525411605835, .491525411605835, 0, 0, []], 76, 211, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Click to begin", 6, 94932088974365, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [1, -11, 0, 651, 975, 0, 0, 1, 0, 0, 0, 0, []], 74, 197, [],
                                    [],
                                    ["点击开始!", 0, "48pt Impact", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ],
                ["HowTo", 640, 960, !1, "HowToSheet", 4684315367693243, [
                        ["BG", 0, 0x3ce4b4fd1bf80, !0, [45, 45, 45], !1, 1, 1, 1, !1, 1, 0, 0, [],
                            []
                        ],
                        ["UI", 1, 0x5f8141a4da503, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [-11, 211, 0, 320, 480, 0, 0, 1, 0, 0, 0, 0, []], 3, 184, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [308, 211, 0, 340, 480.2442626953125, 0, 0, 1, 0, 0, 0, 0, []], 4, 185, [],
                                    [],
                                    [0, 0]
                                ],
                                [
                                    [-2, 88, 0, 644, 77, 0, 0, 1, 0, 0, 0, 0, []], 68, 186, [],
                                    [],
                                    ["怎么玩?", 0, "36pt Impact", "rgb(0,0,0)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ],
                        ["Players", 2, 4849095444399906, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [3, 375, 0, 40.31040573120117, 88.40000915527344, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 0, 187, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [320, 368, 0, 40.31000137329102, 88.4000015258789, 0, 0, 1, .08771929889917374, .9440000057220459, 0, 0, []], 8, 188, [],
                                    [
                                        [330, 1500, 1500, 650, 7e3, 1e3, 1, 1],
                                        [1]
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [298, 210, 0, 18, 482.8175659179688, 0, 0, 1, 0, 0, 0, 0, []], 1, 189, [],
                                    [
                                        [1]
                                    ],
                                    [0, 0]
                                ],
                                [
                                    [47.27220153808594, 528.8405151367188, 0, 72, 56, 0, 0, 1, .6590909361839294, .4749999940395355, 0, 0, []], 12, 190, [
                                        [0]
                                    ],
                                    [
                                        [0, 0, 0, 0, 0, 1],
                                        []
                                    ],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [360.72705078125, 654.2943115234375, 0, 72, 56, 0, 0, 1, .6590909361839294, .4749999940395355, 0, 0, []], 55, 191, [
                                        [0]
                                    ],
                                    [
                                        [0, 0, 0, 0, 0, 1],
                                        []
                                    ],
                                    [0, "Default", 0, 1]
                                ]
                            ],
                            []
                        ],
                        ["Layer 0", 3, 6124428693833151, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                                [
                                    [54, 228, 0, 200, 52, 0, 0, 1, 0, 0, 0, 0, []], 69, 192, [],
                                    [],
                                    ["点击这里让第一个火柴人跳跃!", 0, "12pt Arial", "rgb(0,0,0)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [398, 230, 0, 200, 52, 0, 0, 1, 0, 0, 0, 0, []], 69, 193, [],
                                    [],
                                    ["点击这里让第二个火柴人跳跃!", 0, "12pt Arial", "rgb(0,0,0)", 1, 0, 0, 0, 0]
                                ],
                                [
                                    [305, 737, 0, 165, 69, 0, 0, 1, .5, .5, 0, 0, []], 70, 194, [],
                                    [],
                                    [0, "Default", 0, 1]
                                ],
                                [
                                    [222.6523742675781, 702.348876953125, 0, 165, 69.30474853515625, 0, 0, 1, 0, 0, 0, 0, []], 71, 195, [],
                                    [],
                                    ["开始玩!", 0, "20pt Impact", "rgb(0,0,0)", 1, 1, 0, 0, 0]
                                ]
                            ],
                            []
                        ]
                    ],
                    [],
                    []
                ]
            ],
            [
                ["NormalSheet", [
                    [1, "SpeedNormal", 0, 400, !1, !1, 6128900491694406, !1],
                    [1, "HighScoreNormal", 0, 0, !1, !1, 4593433996538131, !1],
                    [1, "playNormal", 0, 0, !1, !1, 0x7196f0e0e69b3, !1],
                    [1, "gameover_normal", 0, 0, !1, !1, 8858073548351434, !1],
                    [1, "ScoreNormal", 0, 0, !1, !1, 0xfd5a12e454b5e, !1],
                    [1, "gravityNormal", 0, 1, !1, !1, 5456783151183835, !1],
                    [1, "begin", 0, 0, !1, !1, 0xc6750a6942190, !1],
                    [1, "row1Normal", 0, 0, !1, !1, 0x93828e4a91ec5, !1],
                    [1, "row2Normal", 0, 0, !1, !1, 8672221112569121, !1],
                    [1, "gravity2Normal", 0, 1, !1, !1, 7835872564096574, !1],
                    [0, null, !1, null, 406552105737328, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 8450616553162522, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7034860866874568, !1, [
                                [0, [0, 180]]
                            ]],
                            [7, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 6297253402573441, !1, [
                                [4, 0],
                                [3, 1]
                            ]],
                            [9, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 6625915676738488, !1, [
                                [4, 8],
                                [3, 1]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 9701174192858192, !1, [
                                [0, [0, 180]]
                            ]],
                            [72, cr.plugins_.CJSAds.prototype.acts.HideBanner, null, 0x81ad98e908774, !1],
                            [72, cr.plugins_.CJSAds.prototype.acts.ShowBanner, null, 0xccf93c4ce1a9a, !1, [
                                [3, 1]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 9623268513082098, !1, [
                                [5, [0, 4]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 663923452594253, !1, [
                                [5, [0, 4]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5300056357462319, !1, [
                                [11, "playNormal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4904336327581021, !1, [
                                [11, "gameover_normal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7838785186286355, !1, [
                                [11, "gravity2Normal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xac39f40120fd7, !1, [
                                [11, "gravityNormal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4574869848617661, !1, [
                                [11, "SpeedNormal"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8520661857682528, !1, [
                                [11, "ScoreNormal"],
                                [7, [0, 0]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.Destroy, null, 6928821395288654, !1],
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 7318544674801025, !1],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8524203456669225, !1, [
                                [11, "begin"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 4511333943575718, !1, [
                                [5, [0, 5]],
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xfe9ef78e848e9, [
                                    [23, cr.plugins_.WebStorage.prototype.cnds.LocalStorageExists, null, 0, !1, !1, !1, 5395573642807182, !1, [
                                        [1, [2, "HighScoreNormal"]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 330353218818566, !1, [
                                        [11, "HighScoreNormal"],
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNormal"]
                                        ]]]
                                    ]],
                                    [22, cr.plugins_.Text.prototype.acts.SetText, null, 9101649894824476, !1, [
                                        [7, [23, "HighScoreNormal"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xa8f0c73b0492, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0x9452ffaa4b193, !1]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xacc5f0df7584, !1, [
                                        [11, "HighScoreNormal"],
                                        [7, [0, 0]]
                                    ]],
                                    [22, cr.plugins_.Text.prototype.acts.SetText, null, 7441889213008412, !1, [
                                        [7, [23, "HighScoreNormal"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6842642836791274, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x4a38c04477924, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x82eb1ce3290c, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6672168632689776, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 5899417286645038, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 4595441777290981, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 710420021410511, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 7577874649569645, !1, [
                                [4, 5]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0xd542afb1be294, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xca8871e89c0dc, !1, [
                                        [11, "gravity2Normal"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 54371155466584, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8022671629886141, !1, [
                                        [11, "gravity2Normal"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xf098fef8e8923, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 6547636394856382, !1]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 6934896069221051, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8793957128873952, !1, [
                                        [11, "gravity2Normal"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6884490847155575, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 5516733946921833, !1, [
                                [4, 1]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 44706565986367, !1, [
                                [11, "gravityNormal"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xce646acd6a03a, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x89316e36b7de1, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8954979636220256, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xfcd92d5abcf4d, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9696574218967808, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 5408070242146168, !1, [
                                [4, 10]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 9177268882013312, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x39483de928d79, !1, [
                                        [11, "gravityNormal"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8508087942203836, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xd8cb3e6935b5b, !1, [
                                        [11, "gravityNormal"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9182404856283896, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 5041200311744705, !1]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7752289100344649, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 4759490785793237, !1, [
                                        [11, "gravityNormal"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5605217618353073, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 313582747096609, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 1],
                                    [1, 1.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8770515906540405, !1, [
                                [11, "playNormal"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7855845826346227, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x7c0db670fb151, !1, [
                                [11, "row1Normal"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xb400b5d3a0456, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x5b9748316fa93, !1, [
                                        [11, "row1Normal"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9547573636149468, !1, [
                                        [4, 12],
                                        [5, [0, 1]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 978]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x543b0ebd41623, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 4707154781682047, !1, [
                                        [11, "row1Normal"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 8732076363738413, !1, [
                                        [4, 12],
                                        [5, [0, 1]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 978]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5516881870362858, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8018667712521448, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 0xfcdcbe5bd8c1a, !1]
                        ],
                        [
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0x89cf5fa1daa50, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 7741052735229155, !1, [
                                [0, [23, "SpeedNormal"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.AddVar, null, 0x62039b7f448cf, !1, [
                                [11, "SpeedNormal"],
                                [7, [1, .1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 733865702791395, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x830501bf0f849, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 1],
                                    [1, 1.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8101163499250353, !1, [
                                [11, "playNormal"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9868637453720092, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x8cccba8ab2bf5, !1, [
                                [11, "row2Normal"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 3],
                                    [0, 4]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6619574077097245, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7053292196231721, !1, [
                                        [11, "row2Normal"],
                                        [8, 0],
                                        [7, [0, 3]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 5290403359130764, !1, [
                                        [4, 12],
                                        [5, [0, 1]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 978]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 4594433236288963, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7199233062790856, !1, [
                                        [11, "row2Normal"],
                                        [8, 0],
                                        [7, [0, 4]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9756703718549216, !1, [
                                        [4, 12],
                                        [5, [0, 1]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 978]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 972088230442956, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xe0524f2ac91a7, [
                            [12, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 6339528076011626, !1, [
                                [8, 3],
                                [0, [20, 0, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 4872655491988839, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 4759005201449048, !1, [
                                [11, "ScoreNormal"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 6952591301311746, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 7532046882123513, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7402298332704359, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 9845329604716024, !1]
                        ],
                        [
                            [13, cr.plugins_.Text.prototype.acts.SetText, null, 297293624592541, !1, [
                                [7, [23, "ScoreNormal"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x7610b09cc9b46, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 4550817022332795, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6521603438499928, !1, [
                                [11, "playNormal"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xfd062866e46c4, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x67c10cafb040b, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 309127937862541, !1, [
                                [11, "playNormal"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6193186460712161, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc94969bc798d1, !1, [
                                [11, "playNormal"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7460174000982955, !1, [
                                [4, 0],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7790963985354107, !1, [
                                [4, 12],
                                [0, [0, 0]]
                            ]],
                            [7, cr.plugins_.Particles.prototype.acts.Destroy, null, 4560592676367467, !1],
                            [9, cr.plugins_.Particles.prototype.acts.Destroy, null, 9766363625190454, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5239163607311557, !1, [
                                [4, 8],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7235272129785533, !1, [
                                [11, "gameover_normal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 5986707658430202, !1, [
                                [5, [0, 4]],
                                [3, 1]
                            ]],
                            [17, cr.plugins_.Text.prototype.acts.SetText, null, 83053783984799, !1, [
                                [7, [23, "ScoreNormal"]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5623358612633405, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x8454507dd6a5, !1, [
                                        [11, "ScoreNormal"],
                                        [8, 4],
                                        [7, [23, "HighScoreNormal"]]
                                    ]]
                                ],
                                [
                                    [23, cr.plugins_.WebStorage.prototype.acts.StoreLocal, null, 0x690bf76125d60, !1, [
                                        [1, [2, "HighScoreNormal"]],
                                        [7, [23, "ScoreNormal"]]
                                    ]],
                                    [22, cr.plugins_.Text.prototype.acts.SetText, null, 8031147090165105, !1, [
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNormal"]
                                        ]]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x3b204826f0701, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8526956844198822, !1, [
                                [11, "gameover_normal"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 8495235509801385, !1, [
                                [5, [0, 4]],
                                [0, [4, [19, cr.system_object.prototype.exps.layeropacity, [
                                        [0, 4]
                                    ]],
                                    [0, 5]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x8bd7bce904598, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 5543779827744148, !1, [
                                [4, 19]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0xbf010cf182865, !1, [
                                [5, [0, 4]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0xb4f707c295a29, !1, [
                                [6, "Menu"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 8713148075403434, !1, [
                                [5, [0, 4]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 4850127859056702, !1, [
                                [5, [0, 4]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5337063752915593, !1, [
                                [11, "playNormal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xfa2247cee47ef, !1, [
                                [11, "gameover_normal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 345612897143971, !1, [
                                [11, "gravity2Normal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9e262648ccbb0, !1, [
                                [11, "gravityNormal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9999834456895368, !1, [
                                [11, "SpeedNormal"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xe580a8f46a46f, !1, [
                                [11, "ScoreNormal"],
                                [7, [0, 0]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0xa89f52318ddd5, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4617105207162233, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x416c28eee3455, !1, [
                                [4, 18]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0x84ace9d93976f, !1, [
                                [5, [0, 4]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 512668165851831, !1, [
                                [6, "Normal"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 5574890333169155, !1, [
                                [5, [0, 4]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 8769707529128851, !1, [
                                [5, [0, 4]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9135049592581162, !1, [
                                [11, "playNormal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6082751257317717, !1, [
                                [11, "gameover_normal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9e5320c92adf, !1, [
                                [11, "gravity2Normal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4970663866985987, !1, [
                                [11, "gravityNormal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x67274a4a3153b, !1, [
                                [11, "SpeedNormal"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xa1d01443b844f, !1, [
                                [11, "ScoreNormal"],
                                [7, [0, 0]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 8971233977383036, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4634696781480307, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9651852993619680, !1, [
                                [4, 74]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x619183c820b05, !1, [
                                [11, "begin"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 7182661777903734, !1, [
                                [5, [0, 5]],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x72697a624bb72, [
                            [8, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 734310025484482, !1, [
                                [8, 2],
                                [0, [0, 309]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetX, null, 0x9bc711de21fd1, !1, [
                                [0, [0, 476]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7059070686962692, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 8035328653726959, !1, [
                                [4, 75]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 7143950653738538, !1, [
                                [1, [10, [10, [10, [2, "sharegame"],
                                            [23, "ScoreNormal"]
                                        ],
                                        [2, ":"]
                                    ],
                                    [19, cr.system_object.prototype.exps.random, [
                                        [0, 1],
                                        [0, 10]
                                    ]]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4939759628391842, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4554780712947933, !1, [
                                [4, 76]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 0x88f24073bce76, !1, [
                                [1, [10, [10, [2, "more"],
                                        [23, "HighScoreNormal"]
                                    ],
                                    [2, ""]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ]
                ]],
                ["MenuSheet", [
                    [0, null, !1, null, 0x67dd722238388, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x6e09f2c68d1cd, !1, [
                                [4, 25]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0x756b09459cd8d, !1, [
                                [6, "Normal"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0x3ea78da82c215, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5003714479805815, !1, [
                                [11, "playNormal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xe8fafe89db716, !1, [
                                [11, "gameover_normal"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9410945820528542, !1, [
                                [11, "gravity2Normal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4888456995098862, !1, [
                                [11, "gravityNormal"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xce97c9376c18e, !1, [
                                [11, "SpeedNormal"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4579288453640965, !1, [
                                [11, "ScoreNormal"],
                                [7, [0, 0]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x8f332f4ddeb6c, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 0xd2cadb20a27f5, !1]
                        ],
                        [
                            [26, cr.plugins_.Text.prototype.acts.SetText, null, 6478248108990149, !1, [
                                [7, [10, [10, [2, "("],
                                        [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNormal"]
                                        ]]
                                    ],
                                    [2, ")"]
                                ]]
                            ]],
                            [29, cr.plugins_.Text.prototype.acts.SetText, null, 9718452654224912, !1, [
                                [7, [10, [10, [2, "("],
                                        [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNightmare"]
                                        ]]
                                    ],
                                    [2, ")"]
                                ]]
                            ]],
                            [33, cr.plugins_.Text.prototype.acts.SetText, null, 6610706287525575, !1, [
                                [7, [10, [10, [2, "("],
                                        [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreHell"]
                                        ]]
                                    ],
                                    [2, ")"]
                                ]]
                            ]],
                            [35, cr.plugins_.Text.prototype.acts.SetText, null, 0x3c02e3e95c905, !1, [
                                [7, [10, [10, [2, "("],
                                        [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreInferno"]
                                        ]]
                                    ],
                                    [2, ")"]
                                ]]
                            ]],
                            [38, cr.plugins_.Text.prototype.acts.SetText, null, 6112658968646318, !1, [
                                [7, [10, [10, [2, "("],
                                        [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreImpossible"]
                                        ]]
                                    ],
                                    [2, ")"]
                                ]]
                            ]],
                            [72, cr.plugins_.CJSAds.prototype.acts.ShowBanner, null, 550185038712582, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7923777733539721, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4525170388282284, !1, [
                                [4, 46]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 5064514123310331, !1, [
                                [6, "Nightmare"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 9969795365194312, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5116062667703753, !1, [
                                [11, "playNightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8907416408230066, !1, [
                                [11, "gameover_Nightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7386050382098356, !1, [
                                [11, "gravity3Nightmare"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5403299117445234, !1, [
                                [11, "gravity2Nightmare"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9a503471c249b, !1, [
                                [11, "SpeedNightmare"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7402910404973858, !1, [
                                [11, "ScoreNightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5173135598903215, !1, [
                                [11, "gravityNightmare"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9944869931851458, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4784580296224788, !1, [
                                [4, 34]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 694193050280101, !1, [
                                [6, "Inferno"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 5621545330062675, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5428650833926189, !1, [
                                [11, "playInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 350610537732811, !1, [
                                [11, "gameover_Inferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xa1ba15cb270de, !1, [
                                [11, "gravityInferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xc40fa9d7c1aba, !1, [
                                [11, "gravity2Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6449289572590423, !1, [
                                [11, "SpeedInferno"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7249242976183294, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8588010306306847, !1, [
                                [11, "gravity3Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9765718362435840, !1, [
                                [11, "gravity4Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x3ce66d0b49b95, !1, [
                                [11, "gravity5Inferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4901297567204796, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9337382497796412, !1, [
                                [4, 37]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 5310228952932892, !1, [
                                [6, "Impossible"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 5431283592294285, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x89d975b750d8f, !1, [
                                [11, "playImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8510570907126981, !1, [
                                [11, "gameover_Impossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9382044478065654, !1, [
                                [11, "gravityImpossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x61614e3abb310, !1, [
                                [11, "gravity2Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x692dff2def206, !1, [
                                [11, "SpeedImpossible"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xf6c9295197fac, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4566992183673625, !1, [
                                [11, "gravity3Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6499657784839689, !1, [
                                [11, "gravity4Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7623305306859893, !1, [
                                [11, "gravity5Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6321966694798183, !1, [
                                [11, "gravity6Impossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5803685086719148, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9811800540623848, !1, [
                                [4, 32]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 8179488659799367, !1, [
                                [6, "Hell"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6777115528603926, !1, [
                                [11, "playHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xb468f5eda570b, !1, [
                                [11, "gameover_hell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xd3d93a2e26ff5, !1, [
                                [11, "gravityHell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x47b0dcb3d80eb, !1, [
                                [11, "gravity2Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x81de6c491f440, !1, [
                                [11, "SpeedHell"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 28892000005539, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xd260a9c00d98b, !1, [
                                [11, "gravity3Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xdb2c1aa0c9fc1, !1, [
                                [11, "gravity4Hell"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0xc19d062889044, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xab2c67b720b75, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xb5d9716561bd5, !1, [
                                [4, 68]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0xbd1a534d49261, !1, [
                                [6, "HowTo"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 7854263934215204, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ]
                ]],
                ["NightmareSheet", [
                    [1, "gravity3Nightmare", 0, 1, !1, !1, 0x90576286cb034, !1],
                    [1, "row1Nightmare", 0, 0, !1, !1, 8833916289425638, !1],
                    [1, "gravityNightmare", 0, 1, !1, !1, 6672286445578262, !1],
                    [1, "playNightmare", 0, 0, !1, !1, 8751566476406414, !1],
                    [1, "row3Nightmare", 0, 0, !1, !1, 0x3c5ccfdf4c611, !1],
                    [1, "row2Nightmare", 0, 0, !1, !1, 0x46bfb238c1d27, !1],
                    [1, "HighScoreNightmare", 0, 0, !1, !1, 8746127797634645, !1],
                    [1, "ScoreNightmare", 0, 0, !1, !1, 0x6c5f9f8cbb553, !1],
                    [1, "gameover_Nightmare", 0, 0, !1, !1, 0xa0e10d3ec5852, !1],
                    [1, "gravity2Nightmare", 0, 1, !1, !1, 0x87eeef9ac435b, !1],
                    [1, "SpeedNightmare", 0, 400, !1, !1, 8547636572603599, !1],
                    [0, null, !1, null, 0x71357dc57c55f, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 289262232195379, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8713331488910074, !1, [
                                [0, [0, 180]]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x472598acb8ab6, !1, [
                                [0, [0, 180]]
                            ]],
                            [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x8784bff7d2035, !1, [
                                [0, [0, 180]]
                            ]],
                            [7, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0xeeca69c589229, !1, [
                                [4, 0],
                                [3, 1]
                            ]],
                            [9, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 549172360612701, !1, [
                                [4, 8],
                                [3, 1]
                            ]],
                            [49, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 698471779816305, !1, [
                                [4, 41],
                                [3, 1]
                            ]],
                            [72, cr.plugins_.CJSAds.prototype.acts.HideBanner, null, 339740526327409, !1],
                            [72, cr.plugins_.CJSAds.prototype.acts.ShowBanner, null, 8037248055809749, !1, [
                                [3, 1]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 893463671355491, !1, [
                                [5, [0, 5]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xb45c7c88c9d02, !1, [
                                [5, [0, 5]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8992980759042323, !1, [
                                [11, "playNightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 414172205227337, !1, [
                                [11, "gameover_Nightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xa1d0c0b6efee6, !1, [
                                [11, "gravity3Nightmare"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7922766587598361, !1, [
                                [11, "gravity2Nightmare"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4634692795650014, !1, [
                                [11, "SpeedNightmare"],
                                [7, [0, 400]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8755020795068081, !1, [
                                [11, "ScoreNightmare"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8617501127918116, !1, [
                                [11, "gravityNightmare"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.Destroy, null, 0xc4738388cb6d7, !1],
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 6094489929742838, !1],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7776198956814884, !1, [
                                [11, "begin"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 8028603532636329, !1, [
                                [5, [0, 6]],
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9444303163781764, [
                                    [23, cr.plugins_.WebStorage.prototype.cnds.LocalStorageExists, null, 0, !1, !1, !1, 4578259406166423, !1, [
                                        [1, [2, "HighScoreNightmare"]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8401488994608722, !1, [
                                        [11, "HighScoreNightmare"],
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNightmare"]
                                        ]]]
                                    ]],
                                    [45, cr.plugins_.Text.prototype.acts.SetText, null, 8367025300877899, !1, [
                                        [7, [23, "HighScoreNightmare"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5039016096388617, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0x529de400b33fc, !1]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5257572232504928, !1, [
                                        [11, "HighScoreNightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [45, cr.plugins_.Text.prototype.acts.SetText, null, 4557705724387875, !1, [
                                        [7, [23, "HighScoreNightmare"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 635568568447811, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 6447310925656634, !1, [
                                [4, 5]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0x9058361dbf42e, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 860993964427196, !1, [
                                        [11, "gravityNightmare"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 682459216913761, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x66e649c449d42, !1, [
                                        [11, "gravityNightmare"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x94a0c3ca6c085, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0xcd1452faff319, !1]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x41e80f452aa3a, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xc59095b4f6380, !1, [
                                        [11, "gravityNightmare"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xa68930dde8e97, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 6809335468047094, !1, [
                                [4, 42]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0x5029721178128, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x41c5588b6ab07, !1, [
                                        [11, "gravity2Nightmare"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xb02ef1e464b16, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5692415432852029, !1, [
                                        [11, "gravity2Nightmare"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9913176801017936, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0x806dad0c3bb7, !1]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 9397893662435042, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 698448921574584, !1, [
                                        [11, "gravity2Nightmare"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xe3fc2720464af, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xc847ad7ea2241, !1, [
                                [4, 10]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0xd9b198ea4290d, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8716479959184298, !1, [
                                        [11, "gravity3Nightmare"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8213610756315023, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x9673834b5eb4f, !1, [
                                        [11, "gravity3Nightmare"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5832944103539464, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 6044853697827008, !1]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 6035334004755308, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x52ffb80f708c1, !1, [
                                        [11, "gravity3Nightmare"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xfcc1a2cf9f1b3, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 553730868984399, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 6889624833886127, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xed77a6eec3e65, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6770308953364988, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xf4ceb795ea9f3, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5914434661047754, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x9e3d88a467a22, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xe7103e2443483, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 514624775873697, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6712675516759126, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 577277480883874, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8417950530644079, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 4538826408249891, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9492187969585394, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7568821222385036, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6443245544784354, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x5209d48d14ea1, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xefa9d4ee4656d, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 0xed25f90949a7f, !1]
                        ],
                        [
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 6008574749696409, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 4938767017992889, !1, [
                                [0, [23, "SpeedNightmare"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.AddVar, null, 5083014356693013, !1, [
                                [11, "SpeedNightmare"],
                                [7, [1, .1]]
                            ]],
                            [43, cr.plugins_.Text.prototype.acts.SetText, null, 5638081893199741, !1, [
                                [7, [23, "ScoreNightmare"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xa4bf6a0f9656a, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x70a42ef54f5ed, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 1],
                                    [1, 1.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8797309932659033, !1, [
                                [11, "playNightmare"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5588523059894384, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xc79018074cb2f, !1, [
                                [11, "row1Nightmare"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x6b8d0c93c5f6e, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x8468405aa25fb, !1, [
                                        [11, "row1Nightmare"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6959830114045974, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 6508133992803408, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8411351398425876, !1, [
                                        [11, "row1Nightmare"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 730061362131965, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x4f4633adaa62f, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9623070211021e3, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x6af41407b7f79, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 1],
                                    [1, 1.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5599207334652852, !1, [
                                [11, "playNightmare"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6327317079763356, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9432665351690324, !1, [
                                [11, "row2Nightmare"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x6f848d15e686a, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xd35ed858fb9e6, !1, [
                                        [11, "row2Nightmare"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 7286867073744583, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 4509510508602471, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5628702786963106, !1, [
                                        [11, "row2Nightmare"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 40969121211834, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7852625484478836, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x5bc0b1aeabf05, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 8521728435879438, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 1],
                                    [1, 1.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 82667831112436, !1, [
                                [11, "playNightmare"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x7dc49a92f9ac6, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9938873852831308, !1, [
                                [11, "row3Nightmare"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xc614d4eed8bcd, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc69d095a17b7f, !1, [
                                        [11, "row3Nightmare"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 7746760597386925, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9102728382549652, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8261708678716939, !1, [
                                        [11, "row3Nightmare"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xaf25581a7d6ec, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 6935264144681244, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x49c69354ad6aa, [
                            [12, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 7111314653983631, !1, [
                                [8, 3],
                                [0, [20, 0, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 9026375162714122, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 9591681526336340, !1, [
                                [11, "ScoreNightmare"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 8423679302409578, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 8199230395608225, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 767820393524872, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x6764d56a4c665, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x4109a45b18562, !1, [
                                [11, "playNightmare"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8660517495026027, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9898596223676344, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7949281541617439, !1, [
                                [11, "playNightmare"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8915158112963418, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8992490139801813, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7063780445178351, !1, [
                                [11, "playNightmare"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x8ebd35b0e604e, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 604331822146805, !1, [
                                [11, "playNightmare"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 9475556916217748, !1, [
                                [4, 0],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5533323125914953, !1, [
                                [4, 12],
                                [0, [0, 0]]
                            ]],
                            [7, cr.plugins_.Particles.prototype.acts.Destroy, null, 0x75b237404e03f, !1],
                            [9, cr.plugins_.Particles.prototype.acts.Destroy, null, 7709766070796144, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7708939433112673, !1, [
                                [4, 8],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xa17f4a0bf9586, !1, [
                                [11, "gameover_Nightmare"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xa9c5bb881a5e7, !1, [
                                [5, [0, 5]],
                                [3, 1]
                            ]],
                            [44, cr.plugins_.Text.prototype.acts.SetText, null, 7376117922618404, !1, [
                                [7, [23, "ScoreNightmare"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 9943924741033972, !1, [
                                [4, 41],
                                [0, [0, 0]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xf221949d95eea, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x9a6502c369095, !1, [
                                        [11, "ScoreNightmare"],
                                        [8, 4],
                                        [7, [23, "HighScoreNightmare"]]
                                    ]]
                                ],
                                [
                                    [23, cr.plugins_.WebStorage.prototype.acts.StoreLocal, null, 0xa6f805d124e7f, !1, [
                                        [1, [2, "HighScoreNightmare"]],
                                        [7, [23, "ScoreNightmare"]]
                                    ]],
                                    [45, cr.plugins_.Text.prototype.acts.SetText, null, 0xd7b7de376dd06, !1, [
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreNightmare"]
                                        ]]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xac14ca69a3126, [
                                    [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x9848c0e34145a, !1, [
                                        [4, 19]
                                    ]],
                                    [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 5975921553733024, !1, [
                                        [5, [0, 4]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.GoToLayout, null, 9295148921692920, !1, [
                                        [6, "Menu"]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 9236559617232124, !1, [
                                        [5, [0, 5]],
                                        [0, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x496035c3d8837, !1, [
                                        [5, [0, 5]],
                                        [3, 0]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 673813954958534, !1, [
                                        [11, "playNightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x76987b1695ed2, !1, [
                                        [11, "gameover_Nightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 6345850387737552, !1, [
                                        [11, "gravity3Nightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5549239826304016, !1, [
                                        [11, "gravity2Nightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 9101759676138352, !1, [
                                        [11, "SpeedNightmare"],
                                        [7, [0, 400]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 7664454061402409, !1, [
                                        [11, "ScoreNightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xe7be415efd173, !1, [
                                        [11, "gravityNightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [73, cr.plugins_.Audio.prototype.acts.Play, null, 6068216853611987, !1, [
                                        [2, ["click1", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, ""]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x7a731148a9541, [
                                    [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9859905247382864, !1, [
                                        [4, 18]
                                    ]],
                                    [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 7493996782824175, !1, [
                                        [5, [0, 4]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.GoToLayout, null, 5638382792340532, !1, [
                                        [6, "Nightmare"]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0xd36cb7854a4bb, !1, [
                                        [5, [0, 5]],
                                        [0, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 368943587709571, !1, [
                                        [5, [0, 5]],
                                        [3, 0]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x68c8c7aed6114, !1, [
                                        [11, "playNightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 661044301840794, !1, [
                                        [11, "gameover_Nightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5779932704214342, !1, [
                                        [11, "gravity3Nightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xa34fe4c1a64ba, !1, [
                                        [11, "gravity2Nightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8609220136865349, !1, [
                                        [11, "SpeedNightmare"],
                                        [7, [0, 400]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 7935905773248956, !1, [
                                        [11, "ScoreNightmare"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xa1a4285e56dd8, !1, [
                                        [11, "gravityNightmare"],
                                        [7, [0, 1]]
                                    ]],
                                    [73, cr.plugins_.Audio.prototype.acts.Play, null, 6700118219619279, !1, [
                                        [2, ["click1", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, ""]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x4e7915982f084, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5137073280066072, !1, [
                                [11, "gameover_Nightmare"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0x6e4920586735e, !1, [
                                [5, [0, 5]],
                                [0, [4, [19, cr.system_object.prototype.exps.layeropacity, [
                                        [0, 5]
                                    ]],
                                    [0, 5]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7128944285721394, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9331555097558344, !1, [
                                [4, 74]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 863817775873842, !1, [
                                [11, "begin"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 4608149593210765, !1, [
                                [5, [0, 6]],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4781163146057797, [
                            [8, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 0x8cf4548cc6a8d, !1, [
                                [8, 2],
                                [0, [0, 203]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetX, null, 8188541593818606, !1, [
                                [0, [0, 362]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xd888c0612cf81, [
                            [41, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 727703682834698, !1, [
                                [8, 2],
                                [0, [0, 420]]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetX, null, 0x3934faf044fea, !1, [
                                [0, [0, 560]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6972403065434678, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 7096176128512979, !1, [
                                [4, 75]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 9672251408111434, !1, [
                                [5, [0, 4]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 6989249149377233, !1, [
                                [1, [10, [10, [10, [2, "moregame"],
                                            [23, "ScoreNightmare"]
                                        ],
                                        [2, ":"]
                                    ],
                                    [19, cr.system_object.prototype.exps.random, [
                                        [0, 1],
                                        [0, 10]
                                    ]]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5917977512650088, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 5356591655584787, !1, [
                                [4, 76]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0xd888b7c373389, !1, [
                                [5, [0, 4]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 7013855719974894, !1, [
                                [1, [10, [10, [2, "moregame"],
                                        [23, "HighScoreNightmare"]
                                    ],
                                    [2, "%23MakeThemFallNightmare"]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ]
                ]],
                ["HellSheet", [
                    [1, "HighScoreHell", 0, 0, !1, !1, 0x552d46b1ad06f, !1],
                    [1, "SpeedHell", 0, 200, !1, !1, 9928884518557808, !1],
                    [1, "playHell", 0, 0, !1, !1, 8926672357696547, !1],
                    [1, "gameover_hell", 0, 0, !1, !1, 0x8bec73dd934f2, !1],
                    [1, "ScoreHell", 0, 0, !1, !1, 4986134095776752, !1],
                    [1, "gravityHell", 0, 1, !1, !1, 0x901cc3fd1b465, !1],
                    [1, "row1Hell", 0, 0, !1, !1, 0x96a100386c35b, !1],
                    [1, "gravity3Hell", 0, 1, !1, !1, 0x8ae3cdcb9e968, !1],
                    [1, "row3Hell", 0, 0, !1, !1, 0xe3aff52dac73d, !1],
                    [1, "row4Hell", 0, 0, !1, !1, 7069719470143997, !1],
                    [1, "row2Hell", 0, 0, !1, !1, 8567935100386745, !1],
                    [1, "gravity4Hell", 0, 1, !1, !1, 8719070673872469, !1],
                    [1, "gravity2Hell", 0, 1, !1, !1, 7667584891962777, !1],
                    [0, null, !1, null, 0xa7f82182d055a, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 0x7ab60aed63e25, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 9451295605599884, !1, [
                                [0, [0, 180]]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7924164873111842, !1, [
                                [0, [0, 180]]
                            ]],
                            [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x8b35f902032e3, !1, [
                                [0, [0, 180]]
                            ]],
                            [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 4806273730307139, !1, [
                                [0, [0, 180]]
                            ]],
                            [7, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0xe7b0d9756df68, !1, [
                                [4, 0],
                                [3, 1]
                            ]],
                            [9, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 5710866925731601, !1, [
                                [4, 8],
                                [3, 1]
                            ]],
                            [49, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 7033793139173021, !1, [
                                [4, 41],
                                [3, 1]
                            ]],
                            [54, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0x5b46f99808db, !1, [
                                [4, 48],
                                [3, 1]
                            ]],
                            [72, cr.plugins_.CJSAds.prototype.acts.HideBanner, null, 0x6fdb49933c4a2, !1],
                            [72, cr.plugins_.CJSAds.prototype.acts.ShowBanner, null, 8727421015195558, !1, [
                                [3, 1]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.Destroy, null, 598493664277292, !1],
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 7138641630736685, !1],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0xaa97471ef3f35, !1, [
                                [5, [0, 8]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x4aa3d80b417c7, !1, [
                                [5, [0, 8]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x595c293846636, !1, [
                                [11, "playHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6918959011573678, !1, [
                                [11, "gameover_hell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8820816317420429, !1, [
                                [11, "gravityHell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9a9e4478b9933, !1, [
                                [11, "gravity2Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x7d1b69fde5a59, !1, [
                                [11, "SpeedHell"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7444519177505779, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7993124026962483, !1, [
                                [11, "gravity3Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9e3bd84217c0b, !1, [
                                [11, "gravity4Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 7562068510936174, !1, [
                                [5, [0, 9]],
                                [3, 1]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xfbba2e7d487e3, !1, [
                                [11, "begin"],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9655871707940076, [
                                    [23, cr.plugins_.WebStorage.prototype.cnds.LocalStorageExists, null, 0, !1, !1, !1, 9397829282426248, !1, [
                                        [1, [2, "HighScoreHell"]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5594707196559653, !1, [
                                        [11, "HighScoreHell"],
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreHell"]
                                        ]]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 0xc2db402fff4be, !1, [
                                        [7, [23, "HighScoreHell"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7102103040663327, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 5223572565718437, !1]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5940396484919638, !1, [
                                        [11, "HighScoreHell"],
                                        [7, [0, 0]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 0x624ed5f2786d6, !1, [
                                        [7, [23, "HighScoreHell"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xa438abb56740c, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 6311075926567927, !1, [
                                [4, 50]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 5408336356917494, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x6357ac45aa30e, !1, [
                                        [11, "gravity2Hell"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8927741400039142, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 4604606077588142, !1, [
                                        [11, "gravity2Hell"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xe57f9f60738b1, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 9041922704029492, !1]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 9480708660007226, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8591616930206705, !1, [
                                        [11, "gravity2Hell"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7459358099951311, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x7d434765cb136, !1, [
                                [4, 51]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 8357035639897332, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xb8521d258dec, !1, [
                                        [11, "gravityHell"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 6659733294372012, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x4222ba2d7a39c, !1, [
                                        [11, "gravityHell"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8498766517018571, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0x4afaed80d649b, !1]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 9425907747324344, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 6916211718842825, !1, [
                                        [11, "gravityHell"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x8c7493f2bf788, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x77eebe1b1f93, !1, [
                                [4, 52]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 6808690899724214, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5266476720904783, !1, [
                                        [11, "gravity3Hell"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7695050954281474, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8313970855145888, !1, [
                                        [11, "gravity3Hell"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x5b478feb5e794, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 4919067861120487, !1]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5712846548525841, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x9485c47c8089, !1, [
                                        [11, "gravity3Hell"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xe26f282f0aaad, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x890f0f81bcdd3, !1, [
                                [4, 53]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 6338835131561713, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc4efbf9cfc613, !1, [
                                        [11, "gravity4Hell"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xda39bb43bddcd, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x9f5fc535e3077, !1, [
                                        [11, "gravity4Hell"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xbb5dc198ff6d7, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7547455061303808, !1]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 916503000140759, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 7529545599350329, !1, [
                                        [11, "gravity4Hell"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7033289898235823, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x4123318542fc8, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x720ba3150724c, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6903674177238394, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xbdd644f1d5984, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5255730867493892, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9773454816019736, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xd41454c3f11aa, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8018092290538973, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9728758949126892, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 4506465299335244, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7065318726384422, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8814309905977545, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 681667708997426, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x93422891d9b8c, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6674981597113797, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xcdad1e9ed9e5d, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x44673a2390223, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 330669705406735, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 5184418422155062, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9694067107958312, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7759722303409437, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6682667744922014, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5373596525939339, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xfe1727e96d532, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 8925495097780245, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x6601e9e911dbf, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7399237113893897, !1, [
                                [11, "playHell"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xb0b8ae03d27f1, !1, [
                                [11, "row1Hell"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7725739335533569, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xdb555bec63808, !1, [
                                        [11, "row1Hell"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 562620816866994, !1, [
                                        [4, 12],
                                        [5, [0, 2]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 500]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5440540653000954, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x5dcfc69564445, !1, [
                                        [11, "row1Hell"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 5512409534248595, !1, [
                                        [4, 12],
                                        [5, [0, 2]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 500]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 500914232409759, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xb53eaee0e2f05, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x5422d76a2be2f, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xf597cab7ee1f4, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x8ca8e84148412, !1, [
                                [11, "playHell"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5429624349430648, !1, [
                                [11, "row2Hell"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xce7c45b14aaa2, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5726109632642848, !1, [
                                        [11, "row2Hell"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 7440359306595869, !1, [
                                        [4, 12],
                                        [5, [0, 2]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 500]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8142220993732389, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6603130859136417, !1, [
                                        [11, "row2Hell"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 5167873746334534, !1, [
                                        [4, 12],
                                        [5, [0, 2]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 500]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xf4c305d6b5183, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9244399641397636, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 9761212369572626, !1]
                        ],
                        [
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 9715488567604706, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 7441204619361, !1, [
                                [0, [23, "SpeedHell"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.AddVar, null, 704909222498782, !1, [
                                [11, "SpeedHell"],
                                [7, [1, .1]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 671948114910723, !1, [
                                [0, [0, 270]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 7128323783466476, !1, [
                                [0, [23, "SpeedHell"]]
                            ]],
                            [13, cr.plugins_.Text.prototype.acts.SetText, null, 9897522187224684, !1, [
                                [7, [23, "ScoreHell"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5573042847591861, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 5133312597769615, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x5ba7044f16568, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8723610357130276, !1, [
                                [11, "playHell"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xa5139e3d2fe8b, !1, [
                                [11, "row3Hell"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xd11b6e0727806, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7127279986486988, !1, [
                                        [11, "row3Hell"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0x451034bb66383, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7234860650388578, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xe7f4d702ddc3b, !1, [
                                        [11, "row3Hell"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6712559584006983, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8797887105937458, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x81ce717dbece9, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 920919881977293, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8441864204667744, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x8a3caa064a227, !1, [
                                [11, "playHell"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xab91d60d7c2a, !1, [
                                [11, "row4Hell"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xf3443fa67c064, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xd2bceaba5402c, !1, [
                                        [11, "row4Hell"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6269980774003261, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7476320917540544, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xf520826b8570a, !1, [
                                        [11, "row4Hell"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xa98b00e0841e2, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x766e25551329b, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xa60c41caa3b54, [
                            [55, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9616321087636276, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 0xca4efab568ae9, !1]
                        ]
                    ],
                    [0, null, !1, null, 7606537609946389, [
                            [12, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 8736335771192299, !1, [
                                [8, 3],
                                [0, [20, 0, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 0x99fc56568b9b6, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 6309739897581779, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 5652478766510412, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0xef3e10a6ee974, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7638744148201248, [
                            [55, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 0x5c3c36c00890b, !1, [
                                [8, 3],
                                [0, [20, 41, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 5825193909659777, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 9454121423546952, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 1]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 4831056549922517, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0x464a35c0764a7, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x394ce25874130, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 909052229354765, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x55897fe4a88cf, !1, [
                                [11, "playHell"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xe31706d19a354, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x813e7f21779e1, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7804350369064484, !1, [
                                [11, "playHell"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9058823307425932, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 4901371696587304, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x5abbe35175f98, !1, [
                                [11, "playHell"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4843899794236782, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9910063338134196, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x540a1cfcc7ce9, !1, [
                                [11, "playHell"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9050267788390494, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7087817035040411, !1, [
                                [11, "playHell"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 4574218026945983, !1, [
                                [4, 0],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5308654460282015, !1, [
                                [4, 12],
                                [0, [0, 0]]
                            ]],
                            [7, cr.plugins_.Particles.prototype.acts.Destroy, null, 0x6e21e109cbcf0, !1],
                            [9, cr.plugins_.Particles.prototype.acts.Destroy, null, 0x4d697788a2d85, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7149559327042243, !1, [
                                [4, 8],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8104395766873352, !1, [
                                [11, "gameover_hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 9476056011606220, !1, [
                                [5, [0, 8]],
                                [3, 1]
                            ]],
                            [56, cr.plugins_.Text.prototype.acts.SetText, null, 798734445187935, !1, [
                                [7, [23, "ScoreHell"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 6031534127713193, !1, [
                                [4, 55],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0xf485efca61e65, !1, [
                                [4, 41],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 8615423523611822, !1, [
                                [4, 48],
                                [0, [0, 0]]
                            ]],
                            [49, cr.plugins_.Particles.prototype.acts.Destroy, null, 9374567370643080, !1],
                            [54, cr.plugins_.Particles.prototype.acts.Destroy, null, 4642769823445984, !1]
                        ],
                        [
                            [0, null, !1, null, 0x630cfe9020620, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5725862923209495, !1, [
                                        [11, "ScoreHell"],
                                        [8, 4],
                                        [7, [23, "HighScoreHell"]]
                                    ]]
                                ],
                                [
                                    [23, cr.plugins_.WebStorage.prototype.acts.StoreLocal, null, 6840443383976438, !1, [
                                        [1, [2, "HighScoreHell"]],
                                        [7, [23, "ScoreHell"]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 6639621487422242, !1, [
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreHell"]
                                        ]]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 679799451718477, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5830465292927682, !1, [
                                [11, "gameover_hell"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0x73c659f521a2d, !1, [
                                [5, [0, 8]],
                                [0, [4, [19, cr.system_object.prototype.exps.layeropacity, [
                                        [0, 8]
                                    ]],
                                    [0, 5]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7426342302629436, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xc10d4deedd110, !1, [
                                [4, 19]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0x4951d3d3484aa, !1, [
                                [5, [0, 8]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0xe855b1289f474, !1, [
                                [6, "Menu"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 5221581668012458, !1, [
                                [5, [0, 8]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xcf1ffa81902bb, !1, [
                                [5, [0, 8]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8837537605268049, !1, [
                                [11, "playHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xd065ade637207, !1, [
                                [11, "gameover_hell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8956647381998114, !1, [
                                [11, "gravityHell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x4b925037cfff9, !1, [
                                [11, "gravity2Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5322036962388624, !1, [
                                [11, "SpeedHell"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xc33f61c2a07ca, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8552013905766892, !1, [
                                [11, "gravity3Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x3aec293f847f1, !1, [
                                [11, "gravity4Hell"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0x3a0a138bea563, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 18673227703077, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4712561249736626, !1, [
                                [4, 18]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 9130019110431144, !1, [
                                [5, [0, 8]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 5255593128229524, !1, [
                                [6, "Hell"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 309529620636895, !1, [
                                [5, [0, 8]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xd2dd32bd88b74, !1, [
                                [5, [0, 8]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9577109230957962, !1, [
                                [11, "playHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6008793744827708, !1, [
                                [11, "gameover_hell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xb23ea2b556d7b, !1, [
                                [11, "gravityHell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9927724498141316, !1, [
                                [11, "gravity2Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xb49647fac5a26, !1, [
                                [11, "SpeedHell"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6405671479429999, !1, [
                                [11, "ScoreHell"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xd0c3ac8e44724, !1, [
                                [11, "gravity3Hell"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x4f1c06af5cdd0, !1, [
                                [11, "gravity4Hell"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 6189195822342367, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9453216041960614, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4512359609735892, !1, [
                                [4, 74]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xda3b15ce5dca8, !1, [
                                [11, "begin"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x778ba1973244, !1, [
                                [5, [0, 9]],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9362654209296540, [
                            [8, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 8164493035544745, !1, [
                                [8, 2],
                                [0, [0, 308]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetX, null, 0xb850e66ed69aa, !1, [
                                [0, [0, 490]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xdee57bb79bade, [
                            [48, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 9445772067257832, !1, [
                                [8, 2],
                                [0, [0, 308]]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetX, null, 6081515674245238, !1, [
                                [0, [0, 490]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xf01937bd5b4bf, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 8783840378638202, !1, [
                                [4, 75]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 82539754483416, !1, [
                                [5, [0, 8]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 0xe5a4b347dbd58, !1, [
                                [1, [10, [10, [10, [2, "sharegame"],
                                            [23, "ScoreHell"]
                                        ],
                                        [2, ":"]
                                    ],
                                    [19, cr.system_object.prototype.exps.random, [
                                        [0, 1],
                                        [0, 10]
                                    ]]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5680920290399461, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x9270514d93e53, !1, [
                                [4, 76]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0xdf4047a8dfb18, !1, [
                                [5, [0, 8]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 0x6cd8aadce67f8, !1, [
                                [1, [10, [10, [2, "moregame"],
                                        [23, "HighScoreHell"]
                                    ],
                                    [2, "%23MakeThemFallHell"]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ]
                ]],
                ["InfernoSheet", [
                    [1, "HighScoreInferno", 0, 0, !1, !1, 5427305958249449, !1],
                    [1, "SpeedInferno", 0, 200, !1, !1, 4923972904439392, !1],
                    [1, "playInferno", 0, 0, !1, !1, 6944492838968735, !1],
                    [1, "gameover_Inferno", 0, 0, !1, !1, 8804184112140564, !1],
                    [1, "ScoreInferno", 0, 0, !1, !1, 7780086796726354, !1],
                    [1, "gravityInferno", 0, 1, !1, !1, 7290394008370117, !1],
                    [1, "row1Inferno", 0, 0, !1, !1, 434305376478607, !1],
                    [1, "gravity3Inferno", 0, 1, !1, !1, 0x4640bf6d06cca, !1],
                    [1, "row3Inferno", 0, 0, !1, !1, 9244133280940462, !1],
                    [1, "row4Inferno", 0, 0, !1, !1, 7851499609608234, !1],
                    [1, "row2Inferno", 0, 0, !1, !1, 4504163606196058, !1],
                    [1, "gravity4Inferno", 0, 1, !1, !1, 7669883380839554, !1],
                    [1, "gravity5Inferno", 0, 1, !1, !1, 8765740746468771, !1],
                    [1, "row5Inferno", 0, 0, !1, !1, 0x90a644c5beb4b, !1],
                    [1, "gravity2Inferno", 0, 1, !1, !1, 5340274883463521, !1],
                    [0, null, !1, null, 0xd21a4c2ad73ea, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 7366210058875166, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xe4a947ee84853, !1, [
                                [0, [0, 180]]
                            ]],
                            [7, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0x6803bcd008c57, !1, [
                                [4, 0],
                                [3, 1]
                            ]],
                            [9, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 5347855171689379, !1, [
                                [4, 8],
                                [3, 1]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xaed3a2c1c505, !1, [
                                [0, [0, 180]]
                            ]],
                            [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7626300750645152, !1, [
                                [0, [0, 180]]
                            ]],
                            [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x82358b6fb2ad3, !1, [
                                [0, [0, 180]]
                            ]],
                            [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 46697151414898, !1, [
                                [0, [0, 180]]
                            ]],
                            [49, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0xfde18c3207165, !1, [
                                [4, 41],
                                [3, 1]
                            ]],
                            [54, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 465659215783545, !1, [
                                [4, 48],
                                [3, 1]
                            ]],
                            [62, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0x6ec1aeb23e3cd, !1, [
                                [4, 61],
                                [3, 1]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 5805518218894838, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 0x3e7a298c72b1f, !1, [
                                [0, [23, "SpeedInferno"]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0xda08851873ecc, !1, [
                                [0, [0, 270]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 818228860789696, !1, [
                                [0, [23, "SpeedInferno"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 903837226849418, !1, [
                                [5, [0, 6]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 9689903415296520, !1, [
                                [5, [0, 6]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7995930576266594, !1, [
                                [11, "playInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8121524336696859, !1, [
                                [11, "gameover_Inferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7700259449884242, !1, [
                                [11, "gravityInferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xbbbe04f31cdc6, !1, [
                                [11, "gravity2Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4999803614051821, !1, [
                                [11, "SpeedInferno"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 382291598483799, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8772046843832243, !1, [
                                [11, "gravity3Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x70b574bfff572, !1, [
                                [11, "gravity4Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x7ce5b8a13d21a, !1, [
                                [11, "gravity5Inferno"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.Destroy, null, 5375708230565647, !1],
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 5347015258899974, !1],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8171506635122477, !1, [
                                [11, "begin"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x97a98e3fa840d, !1, [
                                [5, [0, 7]],
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9108784559063336, [
                                    [23, cr.plugins_.WebStorage.prototype.cnds.LocalStorageExists, null, 0, !1, !1, !1, 0xa8191aba165d1, !1, [
                                        [1, [2, "HighScoreInferno"]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 9959314045402724, !1, [
                                        [11, "HighScoreInferno"],
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreInferno"]
                                        ]]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 0x49b8ab782ffca, !1, [
                                        [7, [23, "HighScoreInferno"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5312418581386761, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 8292902126301972, !1]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 9338946913205232, !1, [
                                        [11, "HighScoreInferno"],
                                        [7, [0, 0]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 4524989490209989, !1, [
                                        [7, [23, "HighScoreInferno"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4882593036582823, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xcc8bf9076e51f, !1, [
                                [4, 50]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 8996464631526776, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6294614933207501, !1, [
                                        [11, "gravityInferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8134127797557637, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xf8feb881f8153, !1, [
                                        [11, "gravityInferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9250452889424520, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0xc6e23c1b162db, !1]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8600797506998769, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 9745920223075912, !1, [
                                        [11, "gravityInferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x928c3614434c6, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 6285758151508571, !1, [
                                [4, 51]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 8454397771367894, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8596060705614931, !1, [
                                        [11, "gravity2Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8254867236504933, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xeacf41f137b8, !1, [
                                        [11, "gravity2Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xc6e9ac8244f8c, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7223094140894701, !1]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xff540d1b422dd, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 4991968824027909, !1, [
                                        [11, "gravity2Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8912786997229079, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 5742897302013553, !1, [
                                [4, 52]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 4611144412053964, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6210893081316704, !1, [
                                        [11, "gravity3Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x54e9a9d3c17e3, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 4883062748198111, !1, [
                                        [11, "gravity3Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8904354858901054, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 9534125440671772, !1]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5597147491650741, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 538622779151444, !1, [
                                        [11, "gravity3Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6583100441092168, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xaca576fd873c9, !1, [
                                [4, 53]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0x970e78c66a377, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xb15382d6ab3c8, !1, [
                                        [11, "gravity4Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7889477428752737, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 299624160530377, !1, [
                                        [11, "gravity4Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xdc1365eac4bd4, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7642097945962612, !1]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x689b16bca5d33, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 7706720697248146, !1, [
                                        [11, "gravity4Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9496536555254452, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4946556441692031, !1, [
                                [4, 63]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0x686685bc67d22, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 626033466858388, !1, [
                                        [11, "gravity5Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xf2aa3ad565725, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xeaddad98ffa38, !1, [
                                        [11, "gravity5Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7717079452150223, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7460873197638608, !1]
                                ],
                                [
                                    [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5429142703599778, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 850787717979811, !1, [
                                        [11, "gravity5Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9272774304535812, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x741c499977fed, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8069280118671104, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x7984652aee263, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 879148505850931, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x4821a31af446f, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5484341610722308, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8084182581571936, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 6539468406326419, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9777488672897298, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9616654461813536, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7299205444194725, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x3ddec4f6aef8c, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 7496691734142109, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x9034cf392757, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xdd75079b0390d, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6765578790934803, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9448721413584924, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7212690777928609, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9855061660416436, !1, [
                                [4, 60]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9341964562562896, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7775666003631672, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6348150473472743, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8668150481397153, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xd01e02152d061, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 7929266288274391, !1, [
                                [4, 60]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9993824452965766, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5861216079641947, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xaf844e6834cbf, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 4919626949696486, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x3a3b7257da0d8, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 350489085293469, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xf17f5b8522f29, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc601ab00847c7, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 807342960679952, !1, [
                                [11, "row1Inferno"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6132195553715869, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xe6eae8510f816, !1, [
                                        [11, "row1Inferno"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6600468424257562, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 43185091161684, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 4678754784287868, !1, [
                                        [11, "row1Inferno"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 338894155257418, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5464812036682771, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9702964587146112, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 8089184653393612, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7462772797852375, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xcfc3ccc3ccd33, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xfa1c0865952b7, !1, [
                                [11, "row2Inferno"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5614595879804783, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9399553743804792, !1, [
                                        [11, "row2Inferno"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xdaba459c3b8e9, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9420345846122576, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x655b1d0fe7c98, !1, [
                                        [11, "row2Inferno"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xcb12c91214edb, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9012047039545086, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7618918929256268, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 7193553013766789, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8574680399617612, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6115479299509901, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 510637539475, !1, [
                                [11, "row3Inferno"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6977296047121567, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8604734447682628, !1, [
                                        [11, "row3Inferno"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9493790402099184, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xdf28541fb1b05, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5390523792292486, !1, [
                                        [11, "row3Inferno"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0x777e0af167b9d, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xf84a1caab1d19, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7243465845284139, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 9590055551426188, !1]
                        ],
                        [
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0x940fcd5923e2, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 0x41a1a224bf85e, !1, [
                                [0, [23, "SpeedInferno"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.AddVar, null, 534610274322046, !1, [
                                [11, "SpeedInferno"],
                                [7, [1, .05]]
                            ]],
                            [13, cr.plugins_.Text.prototype.acts.SetText, null, 8340403033156446, !1, [
                                [7, [23, "ScoreInferno"]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 6827921256722737, !1, [
                                [0, [0, 270]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 6322480453182522, !1, [
                                [0, [23, "SpeedInferno"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8449813243369269, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x5dd15822e402b, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7076443128870045, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8709607226611714, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9563970597977912, !1, [
                                [11, "row4Inferno"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5649476884932512, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xd3387cbd35e3, !1, [
                                        [11, "row4Inferno"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 5739306571415684, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x89fab9bbd3ad1, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc2a130a8d6b1e, !1, [
                                        [11, "row4Inferno"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6791043561483827, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [5, [20, 60, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 711591480200872, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5820029498458338, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0x8cbeba339e626, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x97fcec35a1280, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc0e5bc39cb616, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8132678086663985, !1, [
                                [11, "row5Inferno"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xde34ce53d34ce, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9724270869061140, !1, [
                                        [11, "row5Inferno"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9687341993852760, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [4, [20, 60, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xcf897a5d3a193, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9842128518214016, !1, [
                                        [11, "row5Inferno"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0x7705fded969a6, !1, [
                                        [4, 55],
                                        [5, [0, 3]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5229377827280678, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4787500666491806, [
                            [12, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 0x5f9ef182bebfc, !1, [
                                [8, 3],
                                [0, [20, 0, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 0x77d1a067044ca, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 6638341489817053, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 6198846684948827, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 9654056415183096, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9494373008678228, [
                            [55, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x56c592feb5337, !1, [
                                [4, 59]
                            ]]
                        ],
                        [
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 0x9caa7864bf2f, !1]
                        ]
                    ],
                    [0, null, !1, null, 9986696502089946, [
                            [55, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 8809161864242001, !1, [
                                [8, 3],
                                [0, [20, 48, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 0xb34bdb0cd1be3, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 4647766565110618, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 1]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 6246811799083932, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 7834046461334358, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9053338163829144, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x9bd3d5bbb0a7b, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8746318384651969, !1, [
                                [11, "playInferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x522673fd55f49, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x6cde3aa7ed11a, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xe1d45c492cc77, !1, [
                                [11, "playInferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x52a28ef6dc876, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8931502994982721, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7638718645253451, !1, [
                                [11, "playInferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9634563093054042, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xf3153daa3d59d, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6435554125040347, !1, [
                                [11, "playInferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8251741735495042, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xbbe5616201fcf, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x626a0e128b7dd, !1, [
                                [11, "playInferno"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6565411383339104, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xb6f39f9688983, !1, [
                                [11, "playInferno"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7185978850190905, !1, [
                                [4, 0],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5149843733787569, !1, [
                                [4, 12],
                                [0, [0, 0]]
                            ]],
                            [7, cr.plugins_.Particles.prototype.acts.Destroy, null, 0xaa648bb76d91, !1],
                            [9, cr.plugins_.Particles.prototype.acts.Destroy, null, 6845574511046973, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 9194210619119080, !1, [
                                [4, 8],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x583b20cfa1dd3, !1, [
                                [11, "gameover_Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x9c8a852fb39cc, !1, [
                                [5, [0, 6]],
                                [3, 1]
                            ]],
                            [56, cr.plugins_.Text.prototype.acts.SetText, null, 6669328124642252, !1, [
                                [7, [23, "ScoreInferno"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0xa898f5b0e9f76, !1, [
                                [4, 55],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 7190395128132829, !1, [
                                [4, 41],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5248244784981169, !1, [
                                [4, 48],
                                [0, [0, 0]]
                            ]],
                            [49, cr.plugins_.Particles.prototype.acts.Destroy, null, 5419749242770061, !1],
                            [54, cr.plugins_.Particles.prototype.acts.Destroy, null, 6916445986135092, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0x51474419557db, !1, [
                                [4, 61],
                                [0, [0, 0]]
                            ]],
                            [62, cr.plugins_.Particles.prototype.acts.Destroy, null, 8905001907516277, !1]
                        ],
                        [
                            [0, null, !1, null, 0xeb7af176d8b3c, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5697416605107817, !1, [
                                        [11, "ScoreInferno"],
                                        [8, 4],
                                        [7, [23, "HighScoreInferno"]]
                                    ]]
                                ],
                                [
                                    [23, cr.plugins_.WebStorage.prototype.acts.StoreLocal, null, 7987523455711837, !1, [
                                        [1, [2, "HighScoreInferno"]],
                                        [7, [23, "ScoreInferno"]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 0xcc4d45a964f0, !1, [
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreInferno"]
                                        ]]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8596257839681754, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x4ba73dc156f70, !1, [
                                [11, "gameover_Inferno"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 6617813911023682, !1, [
                                [5, [0, 6]],
                                [0, [4, [19, cr.system_object.prototype.exps.layeropacity, [
                                        [0, 6]
                                    ]],
                                    [0, 5]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7824211357563056, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4613067345833786, !1, [
                                [4, 19]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 5172648370976479, !1, [
                                [5, [0, 6]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 8544268366965298, !1, [
                                [6, "Menu"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 4998867769019394, !1, [
                                [5, [0, 6]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xfc2b5eb3511ad, !1, [
                                [5, [0, 6]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xcff31e9c22328, !1, [
                                [11, "playInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xee18c6230cbc5, !1, [
                                [11, "gameover_Inferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5438652738286576, !1, [
                                [11, "gravityInferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9620623529916624, !1, [
                                [11, "gravity2Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x7740fb22b7be1, !1, [
                                [11, "SpeedInferno"],
                                [7, [0, 300]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x55c5c9573100e, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5379118109919124, !1, [
                                [11, "gravity3Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4777662028612175, !1, [
                                [11, "gravity4Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7534579503104992, !1, [
                                [11, "gravity5Inferno"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 9178799008349634, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6508774840453701, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 8174997102830957, !1, [
                                [4, 18]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 9557582108483096, !1, [
                                [5, [0, 6]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 9763655999571324, !1, [
                                [6, "Inferno"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 9051245210555536, !1, [
                                [5, [0, 6]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x4d76c83790d28, !1, [
                                [5, [0, 6]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7822025253706092, !1, [
                                [11, "playInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x7d779d061b793, !1, [
                                [11, "gameover_Inferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6618360698063894, !1, [
                                [11, "gravityInferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4579496432007159, !1, [
                                [11, "gravity2Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9418322170549964, !1, [
                                [11, "SpeedInferno"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7651016028740672, !1, [
                                [11, "ScoreInferno"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x6766c04105399, !1, [
                                [11, "gravity3Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8767852330030833, !1, [
                                [11, "gravity4Inferno"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9399246878847284, !1, [
                                [11, "gravity5Inferno"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 5540529755927206, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8164221020062774, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9241912056767152, !1, [
                                [4, 74]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x6bce37d183e20, !1, [
                                [11, "begin"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x606fe5401c74b, !1, [
                                [5, [0, 7]],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xa6da08bd0ecb7, [
                            [8, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 0x9b027cf46e577, !1, [
                                [8, 2],
                                [0, [0, 215]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetX, null, 5265465762367766, !1, [
                                [0, [0, 312]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xbe803c7957b75, [
                            [41, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 6644866110161652, !1, [
                                [8, 2],
                                [0, [0, 400]]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetX, null, 0xbd49ffe1b0b09, !1, [
                                [0, [0, 526]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x64ba55ca599a, [
                            [61, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 9899521610284982, !1, [
                                [8, 2],
                                [0, [0, 306]]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetX, null, 0xec5bb010e0ba2, !1, [
                                [0, [0, 414]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9458437513984536, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9748128685490146, !1, [
                                [4, 75]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 0x80980c56df0d1, !1, [
                                [5, [0, 6]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 0xd20b904e140b9, !1, [
                                [1, [10, [10, [10, [2, "sharegame"],
                                            [23, "ScoreInferno"]
                                        ],
                                        [2, ":"]
                                    ],
                                    [19, cr.system_object.prototype.exps.random, [
                                        [0, 1],
                                        [0, 10]
                                    ]]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x7bd4e385e6cf3, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xfe1d0dbfb0900, !1, [
                                [4, 76]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 348722861818509, !1, [
                                [5, [0, 6]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 5968053375885204, !1, [
                                [1, [10, [10, [2, "moregame"],
                                        [23, "HighScoreInferno"]
                                    ],
                                    [2, "%23MakeThemFallInferno"]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ]
                ]],
                ["ImpossibleSheet", [
                    [1, "HighScoreImpossible", 0, 0, !1, !1, 7402398858658622, !1],
                    [1, "SpeedImpossible", 0, 200, !1, !1, 5127090258814243, !1],
                    [1, "playImpossible", 0, 0, !1, !1, 5699370232092319, !1],
                    [1, "gameover_Impossible", 0, 0, !1, !1, 7348860416612071, !1],
                    [1, "ScoreImpossible", 0, 0, !1, !1, 7740996902252632, !1],
                    [1, "gravityImpossible", 0, 1, !1, !1, 724452625577785, !1],
                    [1, "row1Impossible", 0, 0, !1, !1, 0xe43a2367fd1f9, !1],
                    [1, "gravity3Impossible", 0, 1, !1, !1, 6741110773765168, !1],
                    [1, "row3Impossible", 0, 0, !1, !1, 6211646514117541, !1],
                    [1, "row4Impossible", 0, 0, !1, !1, 5317571230935821, !1],
                    [1, "row2Impossible", 0, 0, !1, !1, 0x3ca9ecb407725, !1],
                    [1, "gravity4Impossible", 0, 1, !1, !1, 0x9382712ba676f, !1],
                    [1, "gravity5Impossible", 0, 1, !1, !1, 861973730259724, !1],
                    [1, "row5Impossible", 0, 0, !1, !1, 9278009837607672, !1],
                    [1, "row6Impossible", 0, 0, !1, !1, 0x6d0777670073d, !1],
                    [1, "gravity2Impossible", 0, 1, !1, !1, 5469800299229031, !1],
                    [1, "gravity6Impossible", 0, 1, !1, !1, 0xcb1919c7d2d65, !1],
                    [0, null, !1, null, 6418704810887246, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 0xef07fa387e481, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x52df38ec1361a, !1, [
                                [0, [0, 180]]
                            ]],
                            [7, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0xceabacc009f1d, !1, [
                                [4, 0],
                                [3, 1]
                            ]],
                            [9, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 5290863605321413, !1, [
                                [4, 8],
                                [3, 1]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xcaa60181ce9a7, !1, [
                                [0, [0, 180]]
                            ]],
                            [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x7ffad08bc54cb, !1, [
                                [0, [0, 180]]
                            ]],
                            [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5104969159299949, !1, [
                                [0, [0, 180]]
                            ]],
                            [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5630839414353163, !1, [
                                [0, [0, 180]]
                            ]],
                            [49, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0xf32def1f1d95d, !1, [
                                [4, 41],
                                [3, 1]
                            ]],
                            [54, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0x8bea26123908f, !1, [
                                [4, 48],
                                [3, 1]
                            ]],
                            [62, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 7124702780667244, !1, [
                                [4, 61],
                                [3, 1]
                            ]],
                            [66, cr.behaviors.Pin.prototype.acts.Pin, "Pin", 0x8d98b359c7c9, !1, [
                                [4, 65],
                                [3, 1]
                            ]],
                            [65, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 5509052326639566, !1, [
                                [0, [0, 180]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0x7fd1a4446ab34, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 0xd0e26fba81c, !1, [
                                [0, [23, "SpeedImpossible"]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0x87a8d49d808ed, !1, [
                                [0, [0, 270]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 0xbb6580bb3cbd6, !1, [
                                [0, [23, "SpeedImpossible"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0xeec25b023987c, !1, [
                                [5, [0, 5]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 8631087035131411, !1, [
                                [5, [0, 5]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 8332999700372955, !1, [
                                [11, "playImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6009896093551915, !1, [
                                [11, "gameover_Impossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xea8d76343efe6, !1, [
                                [11, "gravityImpossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xea75466ce7a2e, !1, [
                                [11, "gravity2Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6283589613693221, !1, [
                                [11, "SpeedImpossible"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4619358751416698, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7104341388778886, !1, [
                                [11, "gravity3Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xe98d562aab172, !1, [
                                [11, "gravity4Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xc6fddcd889dca, !1, [
                                [11, "gravity5Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5421502645440677, !1, [
                                [11, "gravity6Impossible"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.Destroy, null, 6662626866595487, !1],
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 5126923107447298, !1],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xf90d3d31f5f07, !1, [
                                [11, "begin"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 5688078410076598, !1, [
                                [5, [0, 6]],
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xa1d565d6f03b, [
                                    [23, cr.plugins_.WebStorage.prototype.cnds.LocalStorageExists, null, 0, !1, !1, !1, 0xd6190d5100571, !1, [
                                        [1, [2, "HighScoreImpossible"]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 8036042414165201, !1, [
                                        [11, "HighScoreInferno"],
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreImpossible"]
                                        ]]]
                                    ]],
                                    [22, cr.plugins_.Text.prototype.acts.SetText, null, 0x4e7184e2912f9, !1, [
                                        [7, [23, "HighScoreImpossible"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8731338085374912, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 4698002096852956, !1]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xfd9fd1e69e799, !1, [
                                        [11, "HighScoreImpossible"],
                                        [7, [0, 0]]
                                    ]],
                                    [22, cr.plugins_.Text.prototype.acts.SetText, null, 0xe4a613d4698c2, !1, [
                                        [7, [23, "HighScoreImpossible"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x6c151b4a6d627, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 306348601506138, !1, [
                                [4, 50]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 9880047478715416, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xd40b00f69d7cb, !1, [
                                        [11, "gravityInferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7860003791279539, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 6743249970636201, !1, [
                                        [11, "gravityInferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 465039095576912, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7712815601141488, !1]
                                ],
                                [
                                    [0, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x8439cf01c8a1a, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 6225209034119307, !1, [
                                        [11, "gravityInferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8580439934331843, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xd9a3fd25c0d8f, !1, [
                                [4, 51]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 5361161399061406, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6886626006674074, !1, [
                                        [11, "gravity2Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0xe1a0456007068, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xc3e69d2cd08a7, !1, [
                                        [11, "gravity2Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8156967976133167, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 0xb622fabc4ab2c, !1]
                                ],
                                [
                                    [8, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x48f5b72956e55, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 572248730583336, !1, [
                                        [11, "gravity2Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x9598557a5882a, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 4686454823610715, !1, [
                                [4, 52]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 5793946394007177, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8489399614441546, !1, [
                                        [11, "gravity3Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 7666821577336725, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xa9f8614a6d5c1, !1, [
                                        [11, "gravity3Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xfc5b7e1bd1670, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 516666422694402, !1]
                                ],
                                [
                                    [41, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 8212524302638081, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0xc1269c68162bc, !1, [
                                        [11, "gravity3Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 572986022545054, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 8657807079833968, !1, [
                                [4, 53]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 8338758881075035, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xfd251e25911b1, !1, [
                                        [11, "gravity4Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 4880263741601245, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 9728445420588914, !1, [
                                        [11, "gravity4Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x49ff79d54c708, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 5973387507165903, !1]
                                ],
                                [
                                    [48, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 290113288632646, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x8f4e83a117cfb, !1, [
                                        [11, "gravity4Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4910592440788638, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0xb8f5db89da217, !1, [
                                [4, 63]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 7852051715109525, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8605386739392094, !1, [
                                        [11, "gravity5Inferno"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 4936644800116074, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 5992576296177226, !1, [
                                        [11, "gravity5Inferno"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5800558420878574, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 7210313837653653, !1]
                                ],
                                [
                                    [61, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 0x4aea777aa6b26, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x80f8147e190c7, !1, [
                                        [11, "gravity5Inferno"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4976241847827036, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 8409617145300181, !1, [
                                [4, 67]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 8082063475514109, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 4647102767481759, !1, [
                                        [11, "gravity6Impossible"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [65, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 4694599159076202, !1, [
                                        [0, [0, 180]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x95b40e9596720, !1, [
                                        [11, "gravity6Impossible"],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8408804780172576, [
                                    [-1, cr.system_object.prototype.cnds.Else, null, 0, !1, !1, !1, 521505180900857, !1]
                                ],
                                [
                                    [65, cr.behaviors.Platform.prototype.acts.SetGravityAngle, "Platform", 935338192008743, !1, [
                                        [0, [0, 360]]
                                    ]],
                                    [-1, cr.system_object.prototype.acts.SetVar, null, 0x4fc30c996e514, !1, [
                                        [11, "gravity6Impossible"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6565359493038453, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 562335762805476, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x923ad234ea927, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x6b76d1a6b5799, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9347916671078286, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [0, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8212740881647777, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xc3bb526613007, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xa662d8962df6b, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 5810865263927311, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7969667994169023, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xfe96494fe429c, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8859640135457257, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7134051327035208, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 5759891839810282, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7404755711066279, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7859640273972368, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8928894111832834, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9358386974996120, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 475776459480419, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6105235911802122, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9237288209483072, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9060782899358532, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 8741339529867716, !1, [
                                [4, 6]
                            ]]
                        ],
                        [
                            [48, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0x75664a01f92fc, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5943106919968472, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xc6fe192dfa7b, !1, [
                                [4, 1]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 9042003485523406, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4897360697980354, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 9835123000173060, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 6930849541391029, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9283722099934906, [
                            [65, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x9c53c5e34c49c, !1, [
                                [4, 40]
                            ]]
                        ],
                        [
                            [65, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 2359547720634, !1, [
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xffde634b7236, [
                            [65, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 6519035359363083, !1, [
                                [4, 11]
                            ]]
                        ],
                        [
                            [65, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xb47eb81440f0f, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 484919667324593, [
                            [-1, cr.system_object.prototype.cnds.EveryTick, null, 0, !1, !1, !1, 8101218338925943, !1]
                        ],
                        [
                            [12, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 0xc7f2fe81f25f3, !1, [
                                [0, [0, 270]]
                            ]],
                            [12, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 0x859975bede43f, !1, [
                                [0, [23, "SpeedImpossible"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.AddVar, null, 8413390005237065, !1, [
                                [11, "SpeedImpossible"],
                                [7, [1, .05]]
                            ]],
                            [13, cr.plugins_.Text.prototype.acts.SetText, null, 5040751281928451, !1, [
                                [7, [23, "ScoreImpossible"]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, "Bullet", 7394560770137496, !1, [
                                [0, [0, 270]]
                            ]],
                            [55, cr.behaviors.Bullet.prototype.acts.SetSpeed, "Bullet", 9934036195889692, !1, [
                                [0, [23, "SpeedImpossible"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x9bdc08846b340, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0xc82faec8acfe, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5202169911932624, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 286077518744557, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x71c1f47298200, !1, [
                                [11, "row1Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x4606b413421aa, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xa904db73c1655, !1, [
                                        [11, "row1Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xda6ec1c90c4fe, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9124955256431192, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xbc2789f1a1e38, !1, [
                                        [11, "row1Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xd3355ee13b9aa, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8633018124602081, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5560335408984775, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 9080922458699106, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7283557268753761, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xcfdf93ef89657, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xecad4a31cd3f, !1, [
                                [11, "row2Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xe2af50e5c02cf, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9655085398645628, !1, [
                                        [11, "row2Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 6678672033942741, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xa58fa2d598a44, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5861471969901065, !1, [
                                        [11, "row2Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xb3dd0ede8caa1, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7107644668824321, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9474932240165148, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 4777092282614782, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xbb82b252a2821, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 7342523836860821, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xc961dd8abe815, !1, [
                                [11, "row3Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7187906715314596, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x770c08267f363, !1, [
                                        [11, "row3Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0x503cef3149244, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [4, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 460]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 6047160386074863, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9935291203905462, !1, [
                                        [11, "row3Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0x547df5a3d682d, !1, [
                                        [4, 12],
                                        [5, [0, 4]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 460]]
                                    ]],
                                    [12, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 7386170151414615, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x4c2b61a8de37f, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 967440949305739, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x711c7d6d1d85b, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6124920354759082, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xf4ef3869698c0, !1, [
                                [11, "row4Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5216021682540947, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 847016951738177, !1, [
                                        [11, "row4Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xf80eca83b8069, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [4, [20, 6, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 80]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x70ccbc641c37b, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x5930d012e2f13, !1, [
                                        [11, "row4Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 0xed583719689f4, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [5, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 30]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 0xb53e1b8bd37df, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x9b56c6788103d, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 0xa44438159766e, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 9703428932852016, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x4e203ad0b9ecc, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5182547118605347, !1, [
                                [11, "row5Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 611959107108666, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 6657411437005629, !1, [
                                        [11, "row5Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9512319341476040, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [4, [20, 1, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 82680635578615, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 8994286031165795, !1, [
                                        [11, "row5Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 8272219408874706, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [5, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 6133831068543971, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xc51ccd97ff013, [
                            [-1, cr.system_object.prototype.cnds.Every, null, 0, !1, !1, !1, 8053195481456727, !1, [
                                [0, [19, cr.system_object.prototype.exps.random, [
                                    [0, 2],
                                    [1, 2.5]
                                ]]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x692956e27f751, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5357020741669244, !1, [
                                [11, "begin"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6981487123293757, !1, [
                                [11, "row6Impossible"],
                                [7, [19, cr.system_object.prototype.exps.choose, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xaede721f0506d, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0x97ecd156e6c5e, !1, [
                                        [11, "row6Impossible"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 8490020249221315, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [4, [20, 40, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 60]
                                        ]],
                                        [0, [0, 960]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 50898499229713, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xc4048e0dae2e1, !1, [
                                        [11, "row6Impossible"],
                                        [8, 0],
                                        [7, [0, 2]]
                                    ]]
                                ],
                                [
                                    [-1, cr.system_object.prototype.acts.CreateObject, null, 9388840412757354, !1, [
                                        [4, 55],
                                        [5, [0, 4]],
                                        [0, [5, [20, 11, cr.plugins_.TiledBg.prototype.exps.X, !1, null],
                                            [0, 40]
                                        ]],
                                        [0, [0, 960]]
                                    ]],
                                    [55, cr.plugins_.Sprite.prototype.acts.SetMirrored, null, 8250792627865191, !1, [
                                        [3, 0]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x96a3d746c3f3b, [
                            [55, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0xa5121ed22fed3, !1, [
                                [4, 59]
                            ]]
                        ],
                        [
                            [55, cr.plugins_.Sprite.prototype.acts.Destroy, null, 0x985a63d6e464d, !1]
                        ]
                    ],
                    [0, null, !1, null, 0xc1c3a074d3bef, [
                            [12, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 8430623618439026, !1, [
                                [8, 3],
                                [0, [20, 0, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 6978172342289448, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 7872051882463577, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 1]]
                            ]],
                            [12, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 0xddab2c64262af, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 5455528446679587, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5894550085747855, [
                            [55, cr.plugins_.Sprite.prototype.cnds.CompareY, null, 0, !1, !1, !1, 4582320923410074, !1, [
                                [8, 3],
                                [0, [20, 48, cr.plugins_.Sprite.prototype.exps.Y, !1, null]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, null, 0, !1, !0, !1, 9245646701584226, !1, [
                                [10, 0]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.AddVar, null, 8012160510246577, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 1]]
                            ]],
                            [55, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, null, 6094682613232358, !1, [
                                [10, 0],
                                [3, 1]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 9229808645894528, !1, [
                                [2, ["point", !1]],
                                [3, 0],
                                [0, [0, -10]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x92f49731894af, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 5672301977742321, !1, [
                                [11, "playImpossible"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0x55025f17b2f19, !1, [
                                [4, 0],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0xf06923f31fc73, !1, [
                                [4, 12],
                                [0, [0, 0]]
                            ]],
                            [7, cr.plugins_.Particles.prototype.acts.Destroy, null, 5869501078629253, !1],
                            [9, cr.plugins_.Particles.prototype.acts.Destroy, null, 0x9f734f38e2fd4, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 5239741322405668, !1, [
                                [4, 8],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5300289018415897, !1, [
                                [11, "gameover_Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 9876162098509568, !1, [
                                [5, [0, 5]],
                                [3, 1]
                            ]],
                            [56, cr.plugins_.Text.prototype.acts.SetText, null, 7395138579192926, !1, [
                                [7, [23, "ScoreImpossible"]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0x6c9f2f2bc3eaa, !1, [
                                [4, 55],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 4803106115997985, !1, [
                                [4, 41],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0xb4de26505487e, !1, [
                                [4, 48],
                                [0, [0, 0]]
                            ]],
                            [49, cr.plugins_.Particles.prototype.acts.Destroy, null, 8777928805703707, !1],
                            [54, cr.plugins_.Particles.prototype.acts.Destroy, null, 459940856011844, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 0xe63e2ef73b6bb, !1, [
                                [4, 61],
                                [0, [0, 0]]
                            ]],
                            [62, cr.plugins_.Particles.prototype.acts.Destroy, null, 9109937631617592, !1],
                            [-1, cr.system_object.prototype.acts.SetObjectTimescale, null, 9578462565946344, !1, [
                                [4, 65],
                                [0, [0, 0]]
                            ]],
                            [66, cr.plugins_.Particles.prototype.acts.Destroy, null, 9191264259723098, !1]
                        ],
                        [
                            [0, null, !1, null, 0xb1097c8cbb1d2, [
                                    [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xf61dba916727a, !1, [
                                        [11, "ScoreImpossible"],
                                        [8, 4],
                                        [7, [23, "HighScoreImpossible"]]
                                    ]]
                                ],
                                [
                                    [23, cr.plugins_.WebStorage.prototype.acts.StoreLocal, null, 6384071599501739, !1, [
                                        [1, [2, "HighScoreImpossible"]],
                                        [7, [23, "ScoreImpossible"]]
                                    ]],
                                    [57, cr.plugins_.Text.prototype.acts.SetText, null, 598521026190765, !1, [
                                        [7, [20, 23, cr.plugins_.WebStorage.prototype.exps.LocalValue, !0, null, [
                                            [2, "HighScoreImpossible"]
                                        ]]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9210947046583252, [
                            [0, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x5b63cb4d1047c, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x63d6ab01b886b, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7945291225606061, [
                            [8, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 7182671580626588, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7588837819844953, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5188631377632637, [
                            [41, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 576814136131581, !1, [
                                [4, 12]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x9d70e546e1af, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9223887008717436, [
                            [48, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 7746368094577913, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xb4dbe18b61346, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7152630121159691, [
                            [61, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x5349ffac99903, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7452076435949601, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xa2c09aaa6f99a, [
                            [65, cr.plugins_.Sprite.prototype.cnds.OnCollision, null, 0, !1, !1, !0, 0x69ae9ef4d945b, !1, [
                                [4, 55]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x5a19f3be9e49a, !1, [
                                [11, "playImpossible"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x6d165cfae94ec, [
                            [-1, cr.system_object.prototype.cnds.CompareVar, null, 0, !1, !1, !1, 0xd9135bdf74e2b, !1, [
                                [11, "gameover_Impossible"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0xdad481cb2a553, !1, [
                                [5, [0, 5]],
                                [0, [4, [19, cr.system_object.prototype.exps.layeropacity, [
                                        [0, 5]
                                    ]],
                                    [0, 5]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xcdf0adc6e210b, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x7e1711c1361fc, !1, [
                                [4, 19]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 4753692941024491, !1, [
                                [5, [0, 5]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 402766122264184, !1, [
                                [6, "Menu"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 0x7c39f340dee8f, !1, [
                                [5, [0, 5]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0xe8e0d490f9cc6, !1, [
                                [5, [0, 5]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x4e897fbb92418, !1, [
                                [11, "playImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xdcf689e942b11, !1, [
                                [11, "gameover_Impossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 404125084585875, !1, [
                                [11, "gravityImpossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5299536427001595, !1, [
                                [11, "gravity2Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xebcf81ef25bb4, !1, [
                                [11, "SpeedImpossible"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 5720816894623756, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4822431383559057, !1, [
                                [11, "gravity3Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xd27b60370feb5, !1, [
                                [11, "gravity4Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xe3ce744712fb8, !1, [
                                [11, "gravity5Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 9888605591309640, !1, [
                                [11, "gravity6Impossible"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 9800781474866188, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4811165182205955, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 6292350360076174, !1, [
                                [4, 18]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 706335215516044, !1, [
                                [5, [0, 5]]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0xa9a9f14b6b09b, !1, [
                                [6, "Impossible"]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerOpacity, null, 9969738018143008, !1, [
                                [5, [0, 5]],
                                [0, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 0x9b7cc893abe99, !1, [
                                [5, [0, 5]],
                                [3, 0]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x8cf7bd7d355b8, !1, [
                                [11, "playImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x5f26738f149b5, !1, [
                                [11, "gameover_Impossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0x3a2444560f738, !1, [
                                [11, "gravityImpossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6795368688519229, !1, [
                                [11, "gravity2Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6870606719191381, !1, [
                                [11, "SpeedImpossible"],
                                [7, [0, 200]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 4847126089407462, !1, [
                                [11, "ScoreImpossible"],
                                [7, [0, 0]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7190098213805858, !1, [
                                [11, "gravity3Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6194961127426688, !1, [
                                [11, "gravity4Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 6630372358071485, !1, [
                                [11, "gravity5Impossible"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetVar, null, 7616107809307576, !1, [
                                [11, "gravity6Impossible"],
                                [7, [0, 1]]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 5085499607907071, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9555494001599416, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 378184836022266, !1, [
                                [4, 74]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.SetVar, null, 0xbdc2b1c89745b, !1, [
                                [11, "begin"],
                                [7, [0, 1]]
                            ]],
                            [-1, cr.system_object.prototype.acts.SetLayerVisible, null, 9322560042428122, !1, [
                                [5, [0, 6]],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6826168198710871, [
                            [8, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 4772836556227268, !1, [
                                [8, 2],
                                [0, [0, 203]]
                            ]]
                        ],
                        [
                            [8, cr.plugins_.Sprite.prototype.acts.SetX, null, 9479401447862832, !1, [
                                [0, [0, 305]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4963302230019432, [
                            [61, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 8223520359383316, !1, [
                                [8, 2],
                                [0, [0, 203]]
                            ]]
                        ],
                        [
                            [61, cr.plugins_.Sprite.prototype.acts.SetX, null, 6382321529866806, !1, [
                                [0, [0, 305]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8112010701746358, [
                            [41, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 9734284668711604, !1, [
                                [8, 2],
                                [0, [0, 410]]
                            ]]
                        ],
                        [
                            [41, cr.plugins_.Sprite.prototype.acts.SetX, null, 749957638382071, !1, [
                                [0, [0, 515]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xe64fc1a341dc2, [
                            [65, cr.plugins_.Sprite.prototype.cnds.CompareX, null, 0, !1, !1, !1, 0xb22f8102a2806, !1, [
                                [8, 2],
                                [0, [0, 410]]
                            ]]
                        ],
                        [
                            [65, cr.plugins_.Sprite.prototype.acts.SetX, null, 7312449514048943, !1, [
                                [0, [0, 515]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 845026604817764, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 9944749160178972, !1, [
                                [4, 75]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 8225286852988792, !1, [
                                [5, [0, 5]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 6159045890848927, !1, [
                                [1, [10, [10, [10, [2, "sharegame"],
                                            [23, "ScoreImpossible"]
                                        ],
                                        [2, ":"]
                                    ],
                                    [19, cr.system_object.prototype.exps.random, [
                                        [0, 1],
                                        [0, 10]
                                    ]]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9343460922725686, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 0x4e6d2fd0d769f, !1, [
                                [4, 76]
                            ]],
                            [-1, cr.system_object.prototype.cnds.LayerVisible, null, 0, !1, !1, !1, 7091832655060645, !1, [
                                [5, [0, 5]]
                            ]]
                        ],
                        [
                            [77, cr.plugins_.Browser.prototype.acts.GoToURLWindow, null, 8183168696913552, !1, [
                                [1, [10, [10, [2, "moregame"],
                                        [23, "HighScoreImpossible"]
                                    ],
                                    [2, "%23MakeThemFallImpossible"]
                                ]],
                                [1, [2, "NewWindow"]]
                            ]]
                        ]
                    ]
                ]],
                ["HowToSheet", [
                    [0, null, !1, null, 0xf88fd3785cc84, [
                            [2, cr.plugins_.Touch.prototype.cnds.OnTouchObject, null, 1, !1, !1, !1, 5736307910588576, !1, [
                                [4, 71]
                            ]]
                        ],
                        [
                            [-1, cr.system_object.prototype.acts.GoToLayout, null, 0x7159fd315fac2, !1, [
                                [6, "Menu"]
                            ]],
                            [73, cr.plugins_.Audio.prototype.acts.Play, null, 0x6d115ecf9c96f, !1, [
                                [2, ["click1", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, ""]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xe0293c80afe73, [
                            [-1, cr.system_object.prototype.cnds.OnLayoutStart, null, 1, !1, !1, !1, 0xf917d4d88cc2f, !1]
                        ],
                        [
                            [0, cr.behaviors.Platform.prototype.acts.SetGravity, "Platform", 8554221901815929, !1, [
                                [0, [0, 0]]
                            ]],
                            [8, cr.behaviors.Platform.prototype.acts.SetGravity, "Platform", 0xc9afc72b34e4a, !1, [
                                [0, [0, 0]]
                            ]],
                            [72, cr.plugins_.CJSAds.prototype.acts.HideBanner, null, 7850978435576418, !1],
                            [72, cr.plugins_.CJSAds.prototype.acts.ShowBanner, null, 363673293478381, !1, [
                                [3, 1]
                            ]]
                        ]
                    ]
                ]]
            ],
            [
                ["click1.ogg", 6952],
                ["point.ogg", 6841]
            ], "media/", !1, 640, 960, 4, !0, !0, !0, "1.0.0.0", !0, !1, 0, 0, 212, !1, !0, 1, !0, []
        ]
    }