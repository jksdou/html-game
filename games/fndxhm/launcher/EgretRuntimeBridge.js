var NullLocalStorage = (function () {
    function NullLocalStorage() {
        this.data = {};
    }

    NullLocalStorage.prototype.getItem = function (key) {
        return this.data[key];
    };

    NullLocalStorage.prototype.setItem = function (key, value) {
        this.data[key] = value;
    };

    NullLocalStorage.prototype.removeItem = function (key) {
        delete this.data[key];
    };

    NullLocalStorage.prototype.clear = function () {
        for (var key in this.data) {
            this.removeItem(key);
        }
    };
    return NullLocalStorage;
})();

var EgretLocalStorage = (function () {
    function EgretLocalStorage() {
        if (egret_webview.io.isFileExists(EgretLocalStorage.filePath)) {
            var str = egret_webview.io.readFile(EgretLocalStorage.filePath, null);
            this.data = JSON.parse(str);
        }
        else {
            this.data = {};
        }
    }

    EgretLocalStorage.prototype.getItem = function (key) {
        return this.data[key];
    };

    EgretLocalStorage.prototype.setItem = function (key, value) {
        this.data[key] = value;
        this.save();
    };

    EgretLocalStorage.prototype.removeItem = function (key) {
        delete this.data[key];
        this.save();
    };


    EgretLocalStorage.prototype.clear = function () {
        for (var key in this.data) {
            delete this.data[key];
        }
        this.save();
    };
    EgretLocalStorage.prototype.save = function () {
        egret_webview.io.writeFile(EgretLocalStorage.filePath, JSON.stringify(this.data), null);
    };
    EgretLocalStorage.filePath = "LocalStorage.local";
    return EgretLocalStorage;
})();

function EgretRuntimeBridgeInit() {
    if (typeof(egret_webview) == "undefined") {
        if (typeof(window.____egret_webview) == "undefined") {
            //Runtime出错了！！
            //alert("_js : window.____egret_webview undefined");
        }
        else {
            egret_webview = {};
            egret_webview.obj = window.____egret_webview;
            console.log("_js : egret_webview =  " + egret_webview.obj);
            egret_webview.io = window.____egtIO;
            console.log("_js : egret_webview.io =  " + egret_webview.io);
            egret_webview.audio = window.____egtAudio;
            console.log("_js : egret_webview.audio =  " + egret_webview.audio);
        }
    }

    if (window.hasOwnProperty("egret_webview") && typeof(egret_webview) != "undefined") {
        egret_webview.onDestory = function () {
        };
        egret_webview.onPause = function () {
        };
        egret_webview.onResume = function () {
        };
        egret.localStorage = new EgretLocalStorage();
    }
    else if (window && window.localStorage && window.localStorage.getItem) {
        egret.localStorage = window.localStorage;
    }
    else {
        egret.localStorage = new NullLocalStorage();
    }
}

window.EgretRuntimeBridgeInit = EgretRuntimeBridgeInit;