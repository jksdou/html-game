
/***************************** Game 9G 主类 *********************************/

Game9G = function (gameid) {
    this.gameid = gameid;
    this.spid = null;
    this.baseurl = "";
    this.homeurl = null;
    this.gzurl = null;
    this.score = null;
    this.scoreName = null;
    this.shareDomain = null;
    this.shareDomains = ["ytins.cn", "ytins.cn", "ytins.cn", "impak.cn", "impak.cn", "frela.cn"];
    this.shareData = {
        imgurl: null,
        link: null,
        title: "游戏",
        content: "游戏"
    };
    this.app = null;
    this.utils = new Game9GUtils(this);
    this.init();
}

// 初始化
Game9G.prototype.init = function () {
    this.spid = this.utils.getParameter("spid");
    this.homeurl = "https://mp.weixin.qq.com/s?__biz=MzUzOTY4Njc1MQ==&mid=2247483654&idx=1&sn=d078ec9b801fb071f0c5053c9bb8215c";
    this.gzurl = "http://uinote.com/html-game/";
    this.shareDomain = this.shareDomains[parseInt(Math.random() * this.shareDomains.length)];
    this.shareData.imgurl = "http://mmbiz.qpic.cn/mmbiz/2zpp2iaH4HWFd0oYCjGHicia0ftzHLib0GMzKDwJePZic0q1AxianGUY4wHtUHDewicrjI3L0QfjN2SXchMLZhdvRdTvA/640";
    this.shareData.link = "http://uinote.com/html-game/games/pmp/";
    switch (this.utils.getAppType()) {
        case "wx":
            this.app = new Game9GWx(this);
            break;
        case "uc":
            this.app = new Game9GUC(this);
            break;
    }
};

// 分享
Game9G.prototype.share = function () {
    // 调用各自 App 的分享接口
    this.app && this.app.share();
}

// 提交成绩
Game9G.prototype.submit = function (callback) {
    if (localStorage.myuid && this.score != null) {
        var _this = this;
        setTimeout(function () {
            if (confirm("？")) {
                window.location = _this.homeurl;
            }
            else {
                window.location = _this.homeurl;
            }
            callback && callback.apply(null);
        }, 500);
    }
    else {
        window.location = this.homeurl;
        callback && callback.apply(null);
    }
}


/***************************** 实用工具类 *********************************/

Game9GUtils = function (game9g) {
    this.game9g = game9g;
}

// 判断当前 App [微信、UC浏览器、etc]
Game9GUtils.prototype.getAppType = function () {
    var e = navigator.userAgent.toLowerCase();
    if (e.match(/MicroMessenger/i) == "micromessenger") {
        return "wx";
    }
    else if (e.match(/UCBrowser/i) == "ucbrowser") {
        return "uc";
    }
    else {
        return "other";
    }
}

// 获取 URL 参数
Game9GUtils.prototype.getParameter = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return null;
}

// 显示分享图片
Game9GUtils.prototype.showShare = function () {
    var img = document.getElementById("game9gshare");
    if (img) {
        img.style.display = "";
    }
    else {
        img = document.createElement("img");
        img.id = "game9gshare";
        img.src = "share.png";
        img.className = "game9gshare";
        //img.addEventListener("click", this.hideShare);
        img.addEventListener("touchstart", this.hideShare);
        document.getElementsByTagName("body")[0].appendChild(img);
    }
}

// 隐藏分享图片
Game9GUtils.prototype.hideShare = function () {
    var img = document.getElementById("game9gshare");
    if (img) img.style.display = "none";
}

// 显示分享对话框
Game9GUtils.prototype.shareConfirm = function (content, callback) {
    var _this = this;
    setTimeout(function () {
        new Game9GUtilsDialog(_this.game9g, {
            title: "9G游戏",
            content: content,
            buttons: [
                { label: "取消", click: null },
                { label: "确定", click: callback }
            ]
        }).open();
    }, 1000);
}

// 对话框
Game9GUtilsDialog = function (game9g, options) {
    this.game9g = game9g;
    this.title = options.title;
    this.content = options.content;
    this.buttons = options.buttons;
}

// 打开对话框
Game9GUtilsDialog.prototype.open = function () {
    if (document.getElementById("game9gdialog")) return;
    var div = document.createElement("div");
    div.id = "game9gdialog";
    div.className = "game9gdialog";
    div.innerHTML = "<header><h2>" + this.title + "</h2></header><section>" + this.content + "</section><footer></footer>";
    for (var i = 0; i < this.buttons.length; i++) {
        var btn = this.buttons[i];
        var a = document.createElement("a");
        a.innerHTML = btn.label;
        //a.addEventListener("click", btn.click);
        //a.addEventListener("click", this.close);
        a.addEventListener("touchstart", btn.click);
        a.addEventListener("touchstart", this.close);
        div.getElementsByTagName("footer")[0].appendChild(a);
    }
    document.getElementsByTagName("body")[0].appendChild(div);
    var mask = document.createElement("div");
    mask.id = "game9gmask";
    mask.className = "game9gmask";
    document.getElementsByTagName("body")[0].appendChild(mask);
}

// 关闭对话框
Game9GUtilsDialog.prototype.close = function () {
    var div = document.getElementById("game9gdialog");
    if (div) document.getElementsByTagName("body")[0].removeChild(div);
    var mask = document.getElementById("game9gmask");
    if (mask) document.getElementsByTagName("body")[0].removeChild(mask);
}

// Ajax 请求
Game9GUtils.prototype.ajax = function (url, success) {
    new Game9GUtilsAjax(this.game9g, "GET", url, null, "json", success);
}

// JSONP 请求
Game9GUtils.prototype.jsonp = function (url, data, param, success) {
    new Game9GUtilsJsonp(url, data, param, success).request();
}

// Ajax 类
Game9GUtilsAjax = function (game9g, method, url, data, type, success) {
    this.game9g = game9g;
    this.xmlhttp = null;
    if (window.XMLHttpRequest) {
        this.xmlhttp = new XMLHttpRequest();
    }
    else {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    this.type = type;
    this.success = success;
    this.xmlhttp.open(method, url, true);
    var _this = this;
    this.xmlhttp.onreadystatechange = function () {
        _this.callback.apply(_this);
    };
    this.xmlhttp.send(data);
}

// Ajax 请求回调
Game9GUtilsAjax.prototype.callback = function () {
    if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
        var data = null;
        switch (this.type) {
            case "text":
                data = this.xmlhttp.responseText;
                break;
            case "json":
                try {
                    data = JSON.parse(this.xmlhttp.responseText);
                }
                catch (e) {
                    data = this.xmlhttp.responseText;
                }
                break;
        }
        this.success && this.success.call(this.xmlhttp, data);
    }
}

// JSONP 类
Game9GUtilsJsonp = function (url, data, jsonparam, success, timeout) {
    var finish = false;
    var theHead = document.getElementsByTagName("head")[0] || document.documentElement;
    var scriptControll = document.createElement("script");
    var jsonpcallback = "jsonpcallback" + (Math.random() + "").substring(2);
    var collect = function () {
        if (theHead != null) {
            theHead.removeChild(scriptControll);
            try {
                delete window[jsonpcallback];
            } catch (ex) { }
            theHead = null;
        }
    };
    var init = function () {
        scriptControll.charset = "utf-8";
        theHead.insertBefore(scriptControll, theHead.firstChild);
        window[jsonpcallback] = function (responseData) {
            finish = true;
            success(responseData);
        };
        if (url.indexOf("?") > 0) {
            url = url + "&" + jsonparam + "=" + jsonpcallback;
        } else {
            url = url + "?" + jsonparam + "=" + jsonpcallback;
        }
        if (typeof data == "object" && data != null) {
            for (var p in data) {
                url = url + "&" + p + "=" + escape(data[p]);
            }
        }
    };
    var timer = function () {
        if (typeof window[jsonpcallback] == "function") {
            collect();
        }
        if (typeof timeout == "function" && finish == false) {
            timeout();
        }
    };
    this.request = function () {
        init();
        scriptControll.src = url;
        window.setTimeout(timer, 10000);
    };
}

// 统计代码
Game9GUtils.prototype.tongji = function () {
    // baidu
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F0ae524064813b8dc07ece5ce724a7b04' type='text/javascript'%3E%3C/script%3E"));
    // cnzz
    var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cspan id='cnzz_stat_icon_2947366'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s5.cnzz.com/stat.php%3Fid%3D2947366' type='text/javascript'%3E%3C/script%3E"));
}


/***************************** 微信工具类 *********************************/

Game9GWx = function (game9g) {
    this.game9g = game9g;
    this.init();
}

// 初始化
Game9GWx.prototype.init = function () {
    var _this = this;
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
        WeixinJSBridge.on("menu:share:appmessage", function (argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                "img_url": _this.game9g.shareData.imgurl,
                "link": _this.game9g.shareData.link,
                "desc": _this.game9g.shareData.content,
                "title": _this.game9g.shareData.title
            }, function (res) {
                _this.shareComplete();
            });
        });
        WeixinJSBridge.on("menu:share:timeline", function (argv) {
            WeixinJSBridge.invoke("shareTimeline", {
                "img_url": _this.game9g.shareData.imgurl,
                "img_width": "640",
                "img_height": "640",
                "link": _this.game9g.shareData.link,
                "desc": _this.game9g.shareData.content,
                "title": _this.game9g.shareData.title
            }, function (res) {
                _this.shareComplete();
            });
        });
    }, false);
}

// 分享接口实现
Game9GWx.prototype.share = function () {
    this.game9g.utils.showShare();
}

// 分享完成
Game9GWx.prototype.shareComplete = function () {
    this.game9g.utils.hideShare();
    this.game9g.submit();
}


/***************************** UC 工具类 *********************************/

Game9GUC = function (game9g) {
    this.game9g = game9g;
    window.uc_param_str = {};
    this.init();
}

// 初始化
Game9GUC.prototype.init = function () {
    var url = "http://hao.uc.cn/getucparam.php";
    var data = { uc_param_str: "dnfrpfbivecpbtnt" };
    this.game9g.utils.jsonp(url, data, "callback", function (data) {
        window.uc_param_str = data;
    });
}

// 分享接口实现
Game9GUC.prototype.share = function () {
    if (uc_param_str.fr === 'android' || uc_param_str.fr === 'iphone') {
        if (uc_param_str.fr === 'android') {
            try {
                ucweb.startRequest("shell.page_share", [
                    this.game9g.shareData.title,
                    this.game9g.shareData.content,
                    this.game9g.shareData.link,
                    ''
                ]);
            } catch (e) {
                console.error(e.message);
            }
        } else {
            // 如果是iphone平台，调用iso的分享接口
            location.href = "ext:web_share:";
        }
    }
    else {
        alert("其它分享接口");
    }
}