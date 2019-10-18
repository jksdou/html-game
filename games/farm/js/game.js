(function(){

    var orientationSet = false;
    var info = null;
    var ortDiv = null;
    var normalDiv = null;
    //	var mobileType = 0;
    
    FZ.GameBase.MOBILE_IPAD = 10;
    FZ.GameBase.MOBILE_IPHONE = 20;
    
    FZ.GameBase.Width = 700;
    FZ.GameBase.Height = 500;
    FZ.GameBase.Name = "DreamFarmLinkHtml5";
    
    FZ.TARGET_DEF = {};
    FZ.TARGET_DEF.PC = "pc";
    FZ.TARGET_DEF.MOBILE = "mobile";
    FZ.TARGET_DEF.IPHONE = "iPhone";
    FZ.TARGET_DEF.IPAD = "iPad";
    FZ.TARGET_DEF.ANDRIOD = "Android";
    FZ.TargetPort = FZ.TARGET_DEF.PC;// pc, mobile
    FZ.TargetMobile = FZ.TARGET_DEF.IPHONE;
    
    FZ.EVENT_DEF = {};
    FZ.EVENT_DEF.M_OVER = "mouseover";
    FZ.EVENT_DEF.M_OUT = "mouseout";
    FZ.EVENT_DEF.M_MOVE = "mousemove";
    FZ.EVENT_DEF.M_CLICK = "click";
    FZ.EVENT_DEF.T_START = "touchstart";
    FZ.EVENT_DEF.T_MOVE = "touchmove";
    FZ.EVENT_DEF.T_END = "touchend";
    
    FZ.GameBase.setCss = function(div, info){
        div.style.width = info.w + "px";
        div.style.height = info.h + "px";
        div.style.left = info.x + "px";
        div.style.top = info.y + "px";
        div.style.position = "absolute";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundImage = "url(imgs/" + info.fileURL + ")";
    };
    
    FZ.PrintLog = function(str){
        //		var hintDiv = document.getElementById("strHint");
        //		hintDiv.value = str;
    };
    
    var createOrientationDiv = function(){
    
        var img = null;
        if (orientationSet) {
            return true;
        }
        img = FZ.ResourceManager.ResourceLib["OrientationWarning"];
        if (!img) {
            //image not load
            return false;
        }
        info = FZ.getImgInfo("OrientationWarning");
        
        ortDiv.style.backgroundRepeat = "no-repeat";
        ortDiv.style.backgroundImage = "url(imgs/" + info.fileURL + ")";
        ortDiv.style.backgroundPositionX = "50%";
        ortDiv.style.backgroundPositionY = "50%";
        ortDiv.style.backgroundColor = "#fff";
        orientationSet = true;
        return true;
    };
    
    var windowOrientationChangeFunction = function(){
        
        if ((90 === window.orientation) || (-90 === window.orientation)) {
            //			FZ.DivManager.setOverflow("visible");
            //			FZ.DivManager.addChild(orientationDiv);
            normalDiv.style.display = "none";
            ortDiv.style.display = "inline";
            FZ.Game.GameState.pageHide();
        }
        else 
            if (0 === window.orientation) {
                normalDiv.style.display = "inline";
                ortDiv.style.display = "none";
                FZ.Game.GameState.pageShow();
            }
        
        var offsetx = 0;
        var offsety = 0;
        if (FZ.TARGET_DEF.ANDRIOD === FZ.TargetMobile) {
            offsety = 1;
        }
        setTimeout(function(){
           // window.scrollTo(offsetx, offsety);
        }, 10);
        
        //		setTimeout(function () {
        //			window.scrollTo(0,0);			
        //		}, 10);
        //		alert(window.orientation);
    };
    
    var windowonscroll = function(){
        /*var offsetx = 0;
        var offsety = 0;
        if (FZ.TARGET_DEF.ANDRIOD === FZ.TargetMobile) {
            offsety = 1;
        }
        setTimeout(function(){
            window.scrollTo(offsetx, offsety);
        }, 1000);*/
    };
    
    var windowtouchStart = function(evt){
        evt.stopPropagation();
        //evt.preventDefault();
        return false;
    };
    
    var windowInit = function(){
	    // updateShare(0,0);
        var metas = null;
        var heads = null;
        
        FZ.GameBase.loadGame();
        //FZ.GameBase.SaveObject.m_cur_level = 9;
        if (undefined === FZ.GameBase.SaveObject.m_cur_level) {
            //create the default game record.
            FZ.GameBase.SaveObject.m_cur_level = 0;
            FZ.GameBase.SaveObject.pass = false;
            FZ.GameBase.SaveObject.score = 0;
            FZ.GameBase.SaveObject.m_hint = FZ.GameDefs.LEVEL_HINT_NUMBER[1];
            //
            FZ.GameBase.SaveObject.m_gamein = false;
            FZ.GameBase.SaveObject.m_cur_score = 0;
           // FZ.GameBase.SaveObject.m_level_high_score = 0;
            FZ.GameBase.SaveObject.m_cur_hintCount = FZ.GameDefs.LEVEL_HINT_NUMBER[1];
            FZ.GameBase.SaveObject.m_cur_left_pet = FZ.GameDefs.ALL_PET_NUM;
            FZ.GameBase.SaveObject.m_level_usedTime = 0;
            FZ.GameBase.SaveObject.m_usedTime = 0;
            if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                FZ.GameBase.SaveObject.m_sound = true;
            }
            
            var index = 0;
            var tmp = null;
            var tmpPetArr = null;
            tmpPetArr = [];
            for (index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
                tmp = {};
                //                tmp.line = 0;
                //                tmp.col = 0;
                tmp.style = -1;
                tmp.state = FZ.GameDefs.DREAMPET_INIT;
                tmpPetArr.push(tmp);
            }
            FZ.GameBase.SaveObject.m_data = tmpPetArr;
            FZ.GameBase.saveGame();
        }
        
        normalDiv = FZ.$("mainDiv");
        ortDiv = FZ.$("orientationDiv");
        FZ.GameBase.animDiv = FZ.$("animDiv");
        
        //		FZ.GameBase.animDiv.style.overflow = "visible";
        
        ortDiv.style.display = "none";
        
        if (/(iPhone|iPad|iPod|Android)/i.test(window.navigator.appVersion)) {
            FZ.TargetPort = FZ.TARGET_DEF.MOBILE;
            
            FZ.TargetMobile = FZ.TARGET_DEF.IPHONE;
            if (-1 !== navigator.userAgent.indexOf("iPad")) {
                FZ.TargetMobile = FZ.TARGET_DEF.IPAD;
            }
            else 
                if (-1 !== navigator.userAgent.indexOf("Android")) {
                    FZ.TargetMobile = FZ.TARGET_DEF.ANDRIOD;
                }
        }
        
        metas = document.createElement("meta");
        heads = document.getElementsByTagName("head");
        if (FZ.TARGET_DEF.IPAD === FZ.TargetMobile) {
            //			mobileType = FZ.GameBase.MOBILE_IPAD;
            
            metas.setAttribute("name", "viewport");
            metas.setAttribute("content", "width=device-width, initial-scale=2.0, maximum-scale=2.0,user-scalable=no");
            heads[0].appendChild(metas);
            
            //			var Metas = document.getElementsByTagName("meta");
            //			for (var i=0;i<Metas.length;++i){
            //			  if (Metas[i].getAttribute("name")==="viewport") {
            //					Metas[i].setAttribute("content", "width=320, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes");
            //					break;
            //			  }
            //			}
            //			normalDiv.style.left = "50%";
            //			normalDiv.style.marginLeft = "-320px";
        
        }
        else {
            metas.setAttribute("name", "viewport");
            metas.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no");
            heads[0].appendChild(metas);
        }
        
        //window.scrollTo(0, 0);
        
        //		//init the media manager.
        //		FZ.MusicManager.init();
        
        FZ.DivManager.init();
        FZ.DivManager.setParent(normalDiv);
        FZ.DivManager.setSize(FZ.GameDefs.SCREEN_W, FZ.GameDefs.SCREEN_H);
        FZ.DivManager.setOffset(normalDiv.offsetLeft, normalDiv.offsetTop);
        
        //		alert("x = " + normalDiv.offsetLeft + ", y = " + normalDiv.offsetTop);
        
        FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_PRELOADING);
        if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
            //window.onscroll = windowonscroll;
            window.addEventListener("orientationchange", windowOrientationChangeFunction, false);
        }
        
        document.addEventListener("touchstart", windowtouchStart, false);
        
        //		window.ontouchstart = function(event) {
        //			return false;
        //		};
        
        windowOrientationChangeFunction();
        
        FZ.PrintLog("test log");
    };
    
    
    FZ.GameBase.ArrayIndexof = function(arr, obj){
        var index = 0;
        for (index = 0; index < arr.length; index++) {
            if (obj === arr[index]) {
                return index;
            }
        }
        return -1;
    };
    
    window.addEventListener("load", windowInit, false);
    
    FZ.EventHandler = function(obj, target, type, callBack){
        if (!target) {
            return;
        }
        switch (type) {
            case FZ.EVENT_DEF.M_OVER:{
                target.addEventListener(FZ.EVENT_DEF.M_OVER, obj.m_call_mOver = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.onmouseover = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_OUT:{
                target.addEventListener(FZ.EVENT_DEF.M_OUT, obj.m_call_mOut = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.onmouseout = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_MOVE:{
                target.addEventListener(FZ.EVENT_DEF.M_MOVE, obj.m_call_mMove = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.onmousemove = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_CLICK:{
                target.addEventListener(FZ.EVENT_DEF.M_CLICK, obj.m_call_mClick = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.onclick = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_START:{
                target.addEventListener(FZ.EVENT_DEF.T_START, obj.m_call_tStart = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.ontouchstart = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_MOVE:{
                target.addEventListener(FZ.EVENT_DEF.T_MOVE, obj.m_call_tMove = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.ontouchmove = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_END:{
                target.addEventListener(FZ.EVENT_DEF.T_END, obj.m_call_tEnd = function(evt){
                    callBack.call(obj, evt);
                }, false);
                //			target.ontouchend = function(evt) { callBack.call(obj, evt); };
                break;
            }
            default:
                {
                    break;
                }
        }
        
    };
    
    FZ.EventRemove = function(obj, target, type, callBack){
        if ((!target) || (!callBack)) {
            return;
        }
        switch (type) {
            case FZ.EVENT_DEF.M_OVER:{
                target.removeEventListener(FZ.EVENT_DEF.M_OVER, callBack, false);
                obj.m_call_mOver = null;
                //			target.onmouseover = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_OUT:{
                target.removeEventListener(FZ.EVENT_DEF.M_OUT, callBack, false);
                obj.m_call_mOut = null;
                //			target.onmouseout = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_MOVE:{
                target.removeEventListener(FZ.EVENT_DEF.M_MOVE, callBack, false);
                obj.m_call_mMove = null;
                //			target.onmousemove = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.M_CLICK:{
                target.removeEventListener(FZ.EVENT_DEF.M_CLICK, callBack, false);
                obj.m_call_mClick = null;
                //			target.onclick = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_START:{
                target.removeEventListener(FZ.EVENT_DEF.T_START, callBack, false);
                obj.m_call_tStart = null;
                //			target.ontouchstart = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_MOVE:{
                target.removeEventListener(FZ.EVENT_DEF.T_MOVE, callBack, false);
                obj.m_call_tMove = null;
                //			target.ontouchmove = function(evt) { callBack.call(obj, evt); };
                break;
            }
            case FZ.EVENT_DEF.T_END:{
                target.removeEventListener(FZ.EVENT_DEF.T_END, callBack, false);
                obj.m_call_tEnd = null;
                //			target.ontouchend = function(evt) { callBack.call(obj, evt); };
                break;
            }
            default:
                {
                    break;
                }
        }
        
    };
    
})();
