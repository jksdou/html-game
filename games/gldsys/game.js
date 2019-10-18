window.qike = {}, qike.util = qike.utils = {}, qike.ui = {}, qike.lib = {}, qike.template = {}, qike.global = {}, qike.global.CLASS_NAME_SHOW = "dspb", qike.global.CLASS_NAME_HIDE = "dspn", function() {
	function insertHTML(el, where, html) {
		if (!el) return !1;
		if (where = where.toLowerCase(), el.insertAdjacentHTML) el.insertAdjacentHTML(where, html);
		else {
			var range = el.ownerDocument.createRange(),
				frag = null;
			switch (where) {
			case "beforebegin":
				return range.setStartBefore(el), frag = range.createContextualFragment(html), el.parentNode.insertBefore(frag, el), el.previousSibling;
			case "afterbegin":
				return el.firstChild ? (range.setStartBefore(el.firstChild), frag = range.createContextualFragment(html), el.insertBefore(frag, el.firstChild)) : el.innerHTML = html, el.firstChild;
			case "beforeend":
				return el.lastChild ? (range.setStartAfter(el.lastChild), frag = range.createContextualFragment(html), el.appendChild(frag)) : el.innerHTML = html, el.lastChild;
			case "afterend":
				return range.setStartAfter(el), frag = range.createContextualFragment(html), el.parentNode.insertBefore(frag, el.nextSibling), el.nextSibling
			}
		}
	}
	qike.util.insertHTML = insertHTML
}(), function() {
	"use strict";

	function detect(ua) {
		var os = this.os = {},
			browser = this.browser = {},
			webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
			ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
			ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
			iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
			webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			touchpad = webos && ua.match(/TouchPad/),
			kindle = ua.match(/Kindle\/([\d.]+)/),
			silk = ua.match(/Silk\/([\d._]+)/),
			blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
			bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
			rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			playbook = ua.match(/PlayBook/),
			chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
			firefox = ua.match(/Firefox\/([\d.]+)/),
			ie = ua.match(/MSIE ([\d.]+)/),
			safari = webkit && ua.match(/Mobile\//) && !chrome,
			webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !chrome,
			wx = ua.match(/micromessenger\/([\d.]+)/i),
			app = ua.match(/qikegameplayer\/([\d.]+)/i),
			ie = ua.match(/MSIE\s([\d.]+)/);
		(browser.webkit = !! webkit) && (browser.version = webkit[1]), android && (os.android = !0, os.version = android[2]), iphone && !ipod && (os.ios = os.iphone = !0, os.version = iphone[2].replace(/_/g, ".")), ipad && (os.ios = os.ipad = !0, os.version = ipad[2].replace(/_/g, ".")), ipod && (os.ios = os.ipod = !0, os.version = ipod[3] ? ipod[3].replace(/_/g, ".") : null), webos && (os.webos = !0, os.version = webos[2]), touchpad && (os.touchpad = !0), blackberry && (os.blackberry = !0, os.version = blackberry[2]), bb10 && (os.bb10 = !0, os.version = bb10[2]), rimtabletos && (os.rimtabletos = !0, os.version = rimtabletos[2]), playbook && (browser.playbook = !0), kindle && (os.kindle = !0, os.version = kindle[1]), silk && (browser.silk = !0, browser.version = silk[1]), !silk && os.android && ua.match(/Kindle Fire/) && (browser.silk = !0), chrome && (browser.chrome = !0, browser.version = chrome[1]), firefox && (browser.firefox = !0, browser.version = firefox[1]), ie && (browser.ie = !0, browser.version = ie[1]), safari && (ua.match(/Safari/) || os.ios) && (browser.safari = !0), webview && (browser.webview = !0), wx && (browser.wx = !0, browser.version = wx[1]), app && os.android && (browser.androidApp = !0, browser.version = app[1]), app && os.ios && (browser.iosApp = !0, browser.version = app[1]), ie && (browser.ie = !0, browser.version = ie[1]), os.tablet = !! (ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/)), os.phone = !(os.tablet || os.ipod || !(android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)))
	}
	detect.call(qike, navigator.userAgent)
}(), function() {
	function isType(type) {
		return function(obj) {
			return {}.toString.call(obj) == "[object " + type + "]"
		}
	}
	function isFunction(obj) {
		return "[object Function]" == {}.toString.call(obj)
	}
	function request(url, callback, charset) {
		var isCSS = IS_CSS_RE.test(url),
			node = doc.createElement(isCSS ? "link" : "script");
		if (charset) {
			var cs = isFunction(charset) ? charset(url) : charset;
			cs && (node.charset = cs)
		}
		addOnload(node, callback, isCSS, url), isCSS ? (node.rel = "stylesheet", node.href = url) : (node.async = !0, node.src = url), currentlyAddingScript = node, baseElement ? head.insertBefore(node, baseElement) : head.appendChild(node), currentlyAddingScript = null
	}
	function addOnload(node, callback, isCSS) {
		function onload() {
			node.onload = node.onerror = node.onreadystatechange = null, isCSS || head.removeChild(node), node = null, "function" == typeof callback && callback()
		}
		var supportOnload = "onload" in node;
		return !isCSS || !isOldWebKit && supportOnload ? void(supportOnload ? (node.onload = onload, node.onerror = function() {
			onload()
		}) : node.onreadystatechange = function() {
			/loaded|complete/.test(node.readyState) && onload()
		}) : void setTimeout(function() {
			pollCss(node, callback)
		}, 1)
	}
	function pollCss(node, callback) {
		var isLoaded, sheet = node.sheet;
		if (isOldWebKit) sheet && (isLoaded = !0);
		else if (sheet) try {
			sheet.cssRules && (isLoaded = !0)
		} catch (ex) {
			"NS_ERROR_DOM_SECURITY_ERR" === ex.name && (isLoaded = !0)
		}
		setTimeout(function() {
			isLoaded ? callback() : pollCss(node, callback)
		}, 20)
	}
	var currentlyAddingScript, doc = (isType("String"), document),
		head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement,
		baseElement = head.getElementsByTagName("base")[0],
		IS_CSS_RE = /\.css(?:\?|$)/i,
		isOldWebKit = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536;
	qike.util.loadCssJs = request
}(), function() {
	var SubscribeModel = {};
	SubscribeModel.subscribe = function(even, func) {
		var events, eventType, namespace, m = this;
		return "string" != typeof even ? 1 : "function" != typeof func ? 2 : (events = even.split("."), eventType = events[0], namespace = events[1], m.event = m.event || {}, void 0 === m.event[eventType] && (m.event[eventType] = []), m.event[eventType].push(void 0 === namespace ? func : [namespace, func]), 0)
	}, SubscribeModel.unSubscribe = function(even, func) {
		var o, i, len, events, eventType, namespace, m = this;
		if ("string" != typeof even) return 1;
		if (events = even.split("."), eventType = events[0], namespace = events[1], m.event = m.event || {}, void 0 === m.event[eventType]) return 3;
		if (o = m.event[eventType], void 0 === namespace) {
			if ("undefined" == typeof func) return m.event[eventType] = void 0, 3;
			for (i = 0, len = o.length; len > i; i++) o[i] instanceof Array && o[i][1] === func ? o.splice(i, 1) : o[i] == func && o.splice(i, 1)
		} else if ("undefined" == typeof func) for (i = 0, len = o.length; len > i; i++) o[i] instanceof Array && o[i][0] === namespace && o.splice(i, 1);
		else for (i = 0, len = o.length; len > i; i++) o[i] instanceof Array && o[i][0] === namespace && o[i] === func && o.splice(i, 1);
		return 0
	}, SubscribeModel.fire = function(even, data) {
		var len, o, m = this,
			i = 0;
		if (o = m.event[even]) for (i = 0, len = o.length; len > i; i++) o[i] instanceof Array ? o[i][1](data, even) : o[i](data, even)
	}, qike.util.subscribeModel = SubscribeModel
}(), function() {
	function template(html, options) {
		for (var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = "var r=[];\n", cursor = 0, add = function(line, js) {
				return code += js ? line.match(reExp) ? line + "\n" : "r.push(" + line + ");\n" : "" !== line ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : "", add
			}; null !== (match = re.exec(html));) add(html.slice(cursor, match.index))(match[1], !0), cursor = match.index + match[0].length;
		return add(html.substr(cursor, html.length - cursor)), code += 'return r.join("");', new Function(code.replace(/[\r\t\n]/g, "")).apply(options)
	}
	qike.lib.template = template
}(), function() {
	function appendStrAsHtml(htmlStr, target) {
		var dom, i, len, frag = document.createElement("div");
		for (frag.innerHTML = htmlStr, dom = [].slice.call(frag.childNodes), i = 0, len = dom.length; len > i; i++) target.appendChild(dom[i])
	}
	qike.util.appendStrAsHtml = appendStrAsHtml
}(), function() {
	function getTag(tagName) {
		return document.getElementsByTagName(tagName)[0]
	}
	qike.util.getTag = getTag
}(), function() {
	function toCamelCase(str) {
		var STRING_CAMELIZE_REGEXP = /(\-|_|\.|\s)+(.)?/g;
		return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
			return chr ? chr.toUpperCase() : ""
		}).replace(/^([A-Z])/, function(match) {
			return match.toLowerCase()
		})
	}
	qike.util.toCamelCase = toCamelCase
}(), function() {
	var dataAction = {
		isSupportDataSet: function() {
			return document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get ? !0 : !1
		}(),
		toCamelCase: function(dataName) {
			return qike.util.toCamelCase(dataName.replace("data-", ""))
		},
		getData: function(dom, dataName) {
			var res, boolValue;
			return this.isSupportDataSet ? (res = dom.dataset[this.toCamelCase(dataName)], boolValue = !! res, boolValue === !0 ? res : void 0) : (res = dom.getAttribute(dataName), null === res ? void 0 : res)
		},
		setData: function() {}
	};
	qike.util.dataAction = dataAction
}(), function() {
	var classAction = {
		isSupportClassList: !! qike.util.getTag("body").classList,
		isContainsClass: function(dom, className) {
			var classNames, isContains = !1;
			return this.isSupportClassList ? dom.classList.contains(className) : (classNames = dom.className.split(" "), classNames.forEach(function(cn) {
				cn === className && (isContains = !0)
			}), isContains)
		},
		addClass: function(dom, className) {
			this.isSupportClassList ? dom.classList.add(className) : this.isContainsClass(className) || (dom.className = dom.className + " " + className)
		},
		removeClass: function(dom, className) {
			var reg;
			this.isSupportClassList ? dom.classList.remove(className) : (reg = new RegExp("\\s?" + className, "g"), dom.className = dom.className.replace(reg, ""))
		}
	};
	qike.util.classAction = classAction
}(), function() {
	function regEvent(selector, eventType, callback) {
		var doms;
		"string" == typeof selector ? doms = [].slice.call(document.querySelectorAll(selector)) : selector instanceof Array == !1 && void 0 !== selector.length ? doms = [].slice.call(selector) : "object" == typeof selector && (doms = [selector]), doms.forEach(function(dom) {
			dom.addEventListener(eventType, callback, !1)
		})
	}
	qike.util.regEvent = regEvent
}(), function() {
	function all(element, css) {
		var name;
		for (name in css) one(element, name, css[name])
	}
	function one(element, name, value) {
		element.style[qike.util.toCamelCase(name)] = value
	}
	function style(element) {
		return 3 == arguments.length ? one(element, arguments[1], arguments[2]) : all(element, arguments[1])
	}
	qike.util.styleAction = {
		add: style
	}
}(), function() {
	var popupAction = {
		currIndex: 1e3,
		originIndex: 1e3,
		show: function(panel) {
			this.currIndex++, qike.util.styleAction.add(panel, "z-index", this.currIndex)
		},
		hide: function(panel) {
			this.currIndex--, qike.util.styleAction.add(panel, "z-index", this.originIndex)
		}
	};
	qike.util.popupAction = popupAction
}(), function() {
	function extendObj(originObj, willAddedObj, deep) {
		var propName, deep = void 0 !== typeof deep ? !! deep : !1;
		for (propName in willAddedObj) willAddedObj.hasOwnProperty(propName) && (deep && "object" == typeof willAddedObj[propName] && null !== willAddedObj[propName] ? (originObj[propName] = {}, extendObj(originObj[propName], willAddedObj[propName])) : originObj[propName] = willAddedObj[propName]);
		return originObj
	}
	qike.util.extendObj = extendObj
}(), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	function fireEventInTreeFromBase(baseDOM, evt) {
		for (var dataActionValue, actionDataValue, DATA_NAME_ACTION = "data-qike-mobile-action", ACTION_DATA = "data-qike-mobile-action-data";
		"html" !== baseDOM.nodeName.toLowerCase();) {
			dataActionValue = qike.util.dataAction.getData(baseDOM, DATA_NAME_ACTION); {
				if (void 0 !== dataActionValue) {
					evt.preventDefault(), actionDataValue = qike.util.dataAction.getData(baseDOM, ACTION_DATA);
					try {
						actionDataValue = JSON.parse(actionDataValue)
					} catch (e) {
						actionDataValue = {}
					}
					return actionDataValue.eventTarget = baseDOM, void qike.util.subscribeModel.fire(dataActionValue, actionDataValue)
				}
				baseDOM = baseDOM.parentNode
			}
		}
	}
	var wrapDom = document.getElementById("J-qike-mobile-template-wrap");
	qike.lib.FastClick.attach(wrapDom), qike.util.regEvent(wrapDom, "click", function(e) {
		return fireEventInTreeFromBase(e.target, e), !0
	})
}, !1), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	var d = document,
		panelAction = {
			outPanel: d.querySelector("#J-qike-mobile-zoom-panel-out"),
			inPanel: d.querySelector("#J-qike-mobile-zoom-panel-in"),
			show: function() {
				qike.util.classAction.removeClass(this.inPanel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.inPanel), qike.util.classAction.addClass(this.outPanel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.outPanel)
			},
			hide: function() {
				qike.util.classAction.addClass(this.inPanel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.outPanel), qike.util.classAction.removeClass(this.outPanel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.outPanel)
			}
		};
	qike.template.panelAction = panelAction
}), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	var d = document,
		downloadPopupAction = {
			panel: d.querySelector(""),
			show: function() {
				qike.util.classAction.addClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.panel)
			},
			hide: function() {
				qike.util.classAction.removeClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.panel)
			}
		};
	qike.template.downloadPopupAction = downloadPopupAction
}), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	var d = document,
		feedPopupAction = {
			panel: d.querySelector("#J-qike-mobile-feed"),
			show: function() {
				qike.util.classAction.addClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.panel)
			},
			hide: function() {
				qike.util.classAction.removeClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.panel)
			}
		};
	qike.template.feedPopupAction = feedPopupAction
}), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	var d = document,
		gameoverPopupAction = {
			panel: d.querySelector("#J-qike-mobile-gameover"),
			show: function() {
				qike.util.classAction.addClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.panel)
			},
			hide: function() {
				qike.util.classAction.removeClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.panel)
			}
		};
	qike.template.gameoverPopupAction = gameoverPopupAction
}), qike.util.subscribeModel.subscribe("qike-mobile-init", function() {
	var d = document,
		sharePopupAction = {
			panel: d.querySelector("#J-qike-mobile-share"),
			show: function() {
				qike.util.classAction.addClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.show(this.panel)
			},
			hide: function() {
				qike.util.classAction.removeClass(this.panel, qike.global.CLASS_NAME_SHOW), qike.util.popupAction.hide(this.panel)
			}
		};
	qike.template.sharePopupAction = sharePopupAction
}), document.addEventListener("DOMContentLoaded", function() {
	"use strict";

	function init() {
		window.console && console.log("load " + sourceArr[countNum] + " success!"), ++countNum, countNum === sourceNum && (logArr.forEach(function(item) {
			qike.util.loadCssJs(item, function() {
				console.log("load " + item + " success!")
			})
		}), qike.util.insertHTML(qike.util.getTag("body"), "beforeend", qike.template.htmlStr), qike.util.subscribeModel.fire("qike-mobile-init", qike.config))
	}
	function doLoaded() {
		var imgScroll;
		imgScroll = new qike.lib.IScroll("#J-qike-mobile-iscroll-wrap", {
			snap: !0,
			momentum: !1,
			scrollbars: !1,
			scrollY: !1,
			scrollX: !0,
			disableMouse: !0,
			disablePointer: !0
		}), imgScroll.on("scrollEnd", function() {
			var currLi = document.querySelector("#J-qike-mobile-iscroll-dot-wrap .curr"),
				targetLi = document.querySelectorAll("#J-qike-mobile-iscroll-dot-wrap i")[this.currentPage.pageX];
			qike.util.classAction.removeClass(currLi, "curr"), qike.util.classAction.addClass(targetLi, "curr")
		})
	}
	qike.config = {}, qike.config.isWx = qike.browser.wx, qike.config.isApp = qike.browser.androidApp || qike.browser.iosApp, qike.config.version = "20140919", qike.config.baseSourceUrl = "qike_public/qike/component/";
	var i, sourceArr = [qike.config.baseSourceUrl + "h5ui/built/css/main-20140919.css", qike.config.baseSourceUrl + "h5ui/built/js/html-template-20140919-min.js", qike.config.baseSourceUrl + "h5ui/built/js/iscroll-20140819-min.js", qike.config.baseSourceUrl + "h5ui/built/js/fastclick-20140819-min.js"],
		logArr = ["http://w.cnzz.com/c.php?id=30098529", "http://hm.baidu.com/h.js?2330ee0a702a2807b28bfe00eaeb5bbf"],
		sourceNum = sourceArr.length,
		countNum = 0;
	var sourceArr = [];
	var	sourceNum = sourceArr.length;
	var countNum = 0;
	for (qike.browser.wx && (sourceArr.push(qike.config.baseSourceUrl + "h5ui/built/js/weixin-action-20140819-min.js"), sourceNum = sourceArr.length), qike.browser.androidApp || qike.browser.iosApp || qike.browser.wx || (qike.browser.wapSite = !0, qike.config.wapSite = !0), i = 0; sourceNum > i; i++) qike.util.loadCssJs(sourceArr[i], init);
	qike.util.subscribeModel.subscribe("qike-mobile-init.template", function() {
		qike.browser.iosApp || qike.browser.androidApp || qike.util.classAction.addClass(document.querySelector("#J-qike-mobile-zoom-panel-in"), "dspb"), qike.browser.wx && qikeContentPreSet && qikeContentPreSet.shareContent && qike.util.extendObj(qike.template.wxData, qikeContentPreSet.shareContent), qike.browser.wapSite && (qike.util.classAction.removeClass(document.querySelector("#J-qike-mobile-zoom-panel-in"), "dspb"), qike.template.downloadPopupAction.show())
	}), qike.util.subscribeModel.subscribe("panel-action-show-panel.template", function() {
		qike.template.panelAction.show(), doLoaded()
	}), qike.util.subscribeModel.subscribe("panel-action-back-game.template", function() {
		qike.template.panelAction.hide()
	}), qike.util.subscribeModel.subscribe("feed-popup-action-show.template", function() {
		qike.template.feedPopupAction.show()
	}), qike.util.subscribeModel.subscribe("feed-popup-action-hide.template", function() {
		qike.template.feedPopupAction.hide()
	}), qike.util.subscribeModel.subscribe("download-popup-action-show.template", function() {
		qike.os.android && setTimeout(function() {
			location.href = "http://shuju.naitang.com/az/youxi/appipa/201409/12/mashangwan.apk"
		}, 1), qike.os.ios && setTimeout(function() {
			location.href = "itms-services://?action=download-manifest&url=https://ssl.naitang.com/plist/app/442515.plist"
		}, 1)
	}), qike.util.subscribeModel.subscribe("download-popup-action-hide.template", function() {
		qike.template.downloadPopupAction.hide(), qike.browser.iosApp || qike.browser.androidApp || qike.util.classAction.addClass(document.querySelector("#J-qike-mobile-zoom-panel-in"), "dspb")
	}), qike.util.subscribeModel.subscribe("share-popup-action-show.template", function() {
		var msg, defaultMsg = "鐡掞絽鎳楃亸蹇庣箶瀵偓韫囧啩绠伴敍宀勭彯缁旑垰銇囧鏃堢秷閸掑棔闊�-7k7k濞撳憡鍨�";
		window.h5view && window.h5view.scoreToShare ? (msg = qikeContentPreSet && qikeContentPreSet.shareContent ? qikeContentPreSet.shareContent.desc || defaultMsg : defaultMsg, window.h5view.scoreToShare(msg)) : window.WebViewJavascriptBridge ? (msg = qikeContentPreSet && qikeContentPreSet.shareContent ? qikeContentPreSet.shareContent.desc || defaultMsg : defaultMsg, window.WebViewJavascriptBridge.callHandler("js-send-share-to-ios", {
			msg: msg
		}, function() {})) : qike.browser.wx ? (qike.browser.wx && qikeContentPreSet && qikeContentPreSet.shareContent && qike.util.extendObj(qike.template.wxData, qikeContentPreSet.shareContent), qike.template.sharePopupAction.show()) : qike.util.subscribeModel.fire("feed-popup-action-show")
	}), qike.util.subscribeModel.subscribe("page-action-wx-share-all.template", function() {
		location.href = ""
	}), qike.util.subscribeModel.subscribe("page-action-wx-share-ready.template", function() {
		qike.browser.wx && qikeContentPreSet && qikeContentPreSet.shareContent && qike.util.extendObj(qike.template.wxData, qikeContentPreSet.shareContent)
	}), qike.util.subscribeModel.subscribe("share-popup-action-hide.template", function() {
		qike.template.sharePopupAction.hide()
	}), qike.util.subscribeModel.subscribe("gameover-popup-action-show.template", function() {
		qike.template.gameoverPopupAction.show()
	}), qike.util.subscribeModel.subscribe("gameover-popup-action-hide.template", function() {
		qike.template.gameoverPopupAction.hide()
	}), qike.util.subscribeModel.subscribe("page-action-replay.template", function() {
		location.reload()
	}), qike.util.subscribeModel.subscribe("page-action-more.template", function() {
		location.href = ""
	}), qike.util.subscribeModel.subscribe("jump-to-feed-page", function() {
		location.href = "http://mp.weixin.qq.com/s?__biz=MzA3NTk2ODUwNA==&mid=201827628&idx=1&sn=0431fc033780b9e9a9745b993863acc1#rd"
	})
}, !1);