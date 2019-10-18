(function() {
    window.Softgames = function() {
        function e() {}
        return e.prototype._getUrlParameters = function() {
            var e = this;
            return this._urlParameters === void 0 && (this._urlParameters = {},
            this._location().replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function(t, n, r) {
                return e._urlParameters[n] = r
            })),
            this._urlParameters
        },
        e.prototype._getUrlParameter = function(e) {
            var t;
            return t = this._getUrlParameters(),
            t[e]
        },
        e.prototype._location = function() {
            return window.location.href
        },
        e.prototype.getReady = function() {
            return this._ready_to_start = !0,
            this.loadVoyager()
        },
        e.prototype.loadVoyager = function() {
            var e, t = this;
            return e = document.createElement("script"),
            e.type = "text/javascript",
            e.src = "./api/voyager_base-83d560e0d0350eb5ccd49f0320347575.js",
            e.onload = function() {
                return window.softgamesDocumentReady = !0,
                t.ready()
            },
            document.getElementsByTagName("head")[0].appendChild(e)
        },
        e
    } (),
    window.softgames = new Softgames,
    window.softgamesDocumentReady = !1,
    window.SG_DefaultLang = "en",
    window.SG_getLang = function() {
        var e;
        return e = window.softgames._getUrlParameter("locale"),
        typeof e == "undefined" && (e = window.softgames._getUrlParameter("lang")),
        typeof e == "undefined" && (e = SG_DefaultLang),
        e
    },
    document.addEventListener("DOMContentLoaded",
    function() {
        var e;
        return e = document.createElement("script"),
        e.type = "text/javascript",
        e.src = "./api/voyager_base-83d560e0d0350eb5ccd49f0320347575.js",
        e.onload = function() {
            return window.softgamesDocumentReady = !0,
            window.softgames.ready()
        },
        document.getElementsByTagName("head")[0].appendChild(e)
    },
    !1)
}).call(this);