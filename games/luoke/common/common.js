/**
* Created by quanchen on 2014/8/26.
*/
/*
window.onload=function()
{
    //加载js文件;
    function loadJS(url,callback){var script=document.createElement('script');script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;if(callback){callback()}}}}else{script.onload=function(){if(callback){callback()}}}script.src=url;document.body.appendChild(script)};
    loadJS('http://pingjs.qq.com/ping_tcss_ied.js',tcssComplete);
}*/

//分享;
var SHARE_ICON_URL='';//jpg 120*120;
var SHARE_URL='';//分享地址;
var SHARE_STR='';//分享文案;

//朋友圈分享;
function onBridgeInit()
{
    //执行
    try{
        document.addEventListener('WeixinJSBridgeReady', function() {
            onBridgeReady();
        });
    }catch(e){}
};

function onBridgeReady()
{
    //转发朋友圈
    WeixinJSBridge.on("menu:share:timeline", function(e) {
        var url = SHARE_URL;
        var data = {
            img_url: SHARE_ICON_URL,
            img_width: "120",
            img_height: "120",
            link: url,
            //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            desc:SHARE_STR,
            title: SHARE_STR
        };
        WeixinJSBridge.invoke("shareTimeline", data, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });
    //同步到微博
    WeixinJSBridge.on("menu:share:weibo", function() {
        var url = SHARE_URL;
        WeixinJSBridge.invoke("shareWeibo", {
            "content": SHARE_STR,
            "url": url
        }, function(res) {
            WeixinJSBridge.log(res.err_msg);
        });
    });
    //分享给朋友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        var url = SHARE_URL;
        WeixinJSBridge.invoke("sendAppMessage", {
            img_url: SHARE_ICON_URL,
            img_width: "120",
            img_height: "120",
            link: url,
            desc: SHARE_STR,
            title: SHARE_STR
        }, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });

    WeixinJSBridge.invoke("showOptionMenu");
};

function isAndroid()
{
    return (/Android/i.test(navigator.userAgent));
};

//点击流;
function tcssComplete()
{
    console.log('tcssComplete');
    try{
        if(typeof(pgvMain) == 'function') pgvMain();
        //alert('pgvMain')
    }catch(e){}
}

function clickBtnPgv(arg)
{
    try{
        pgvSendClick({hottag:arg});
    }catch(e){}

    //alert(arg);
}

var wrongx=0;
//单个按钮检测代码;
function checkClick(touch,mc)
{
    var obj={click:false,mcname:null};

    var mx,my;
    //mx=(touch.pageX-(wrongx/2))/scale;
    mx=touch.pageX/scale;
    my=touch.pageY/scale;

    var mcx,mcy,mcwidth,mcheight;

    mcx=mc._matrix.tx;
    mcy=mc._matrix.ty;

    mcwidth=mc.nominalBounds.width
    mcheight=mc.nominalBounds.height;

    var parentmc=mc;
    for(var i=0;i<2;i++)
    {
        parentmc=parentmc.parent;
        //console.log('run:',i,parentmc);
        if(parentmc!=null)
        {
            mcx+=parentmc._matrix.tx;
            mcy+=parentmc._matrix.ty;

            i=0;
        }

    }
    //console.log(mcx,mcwidth,mcy,mcheight,mx,my);
    if((mx>mcx&&mx<(mcx+mcwidth))&&(my>mcy&&my<(mcy+mcheight)))
    {
        obj.click=true;
        obj.mcname=mc.name;
        //console.log('click in mc area!');
    }
    else
    {
        obj.click=false;
    }
    return obj;
}

//多个按钮检测代码;
function checkClickArr(touch,arr)
{
    var obj={click:false,mcname:null};
    var tmp={};
    for(var i=0;i<arr.length;i++)
    {
        tmp=checkClick(touch,arr[i]);
        if(tmp.click==true)
        {
            obj=tmp;
        }
    }
    return obj;
}

//返回mc当前坐标的全局坐标;
function localPosToGlobal(mc)
{
    obj={x:0,y:0};
    var mcx,mcy;

    mcx=mc._matrix.tx;
    mcy=mc._matrix.ty;

    var parentmc=mc;
    for(var i=0;i<2;i++)
    {
        parentmc=parentmc.parent;
        //console.log('run:',i,parentmc);
        if(parentmc!=null)
        {
            mcx+=parentmc._matrix.tx;
            mcy+=parentmc._matrix.ty;
            i=0;
        }
    }
    obj.x=mcx;
    obj.y=mcy;
    return obj;
}

//正则分析法 js获取当前url参数;
function getQueryString(name) {
    //console.log('window.location:'+window.location);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/*
 * 如果无参数 则是默认分享,则直接进入到游戏规则画面;
 *
 * QQ用户登录;
 *
 * 如果有带参数
 * 参数0 好友分值;
 * 参数1 好友机型[自定义参数];
 *
 * 参数2 通过参数0推导出百分比
 * 拉取助阵数据;
 *
 * top排行榜;
 * 拉取{用户名,用户头像,用户分值};
 *
 * 为ta助阵;
 * 发送数据;
 *
 *
 * */

function creatAjax(){
    var ajax=null;
    if (window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        try{
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e){
            try{
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){}
        }
    }
    if (!ajax){
        alert("无法创建 XMLHttpRequest");
    }
    return ajax;
}

function loadUrl(url,completeFun) {
    var ajax = creatAjax();
    if(!ajax) return;
    ajax.open("GET", url, true);
    ajax.send('');
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            completeFun(ajax.responseText);
        }
    }
}

//震动;
function Shake(target)
{

    this.target = target;
    this.shakeX = 0;
    this.shakeY = 0;
    this.time = 0
    this.start = function(x,y,posX)
    {
        this.time = 0
        var rx = x != null? x:0;
        var ry = y != null? y:0;
        //console.log(this.shakeX);
        this.shakeX = this.target.x;
        //this.shakeX = posX;
        //this.shakeY = this.target.y
        this.target.x =  this.shakeX - rx
        this.target.y =  this.shakeY - ry * 3
        this.target.addEventListener("tick",this.enterFrameEvent)
    }
    this.enterFrame =  function()
    {
        this.time++;
        this.target.x += 1.7*(this.shakeX -this.target.x)
        this.target.y += 1.7*(this.shakeY -this.target.y)
        if (this.time >=15)
        {
            this.target.removeEventListener("tick",this.enterFrameEvent)
        }
    }
    this.enterFrameEvent = getProxy(this,this.enterFrame)
}
//震动配套函数;
function getProxy(value,funF)
{
    var f = function(event)
    {
        funF.apply(value,[event])
    }
    return f;
}

function getRandom(a , b){
    return Math.random()*(b-a)+a;
}
//取整;
function getZ(num){
    var rounded;
    rounded = (0.5 + num) | 0;
    // A double bitwise not.
    rounded = ~~ (0.5 + num);
    // Finally, a left bitwise shift.
    rounded = (0.5 + num) << 0;

    return rounded;
}
//合成图获取小图;
function setImgItem(arg,libArg,imagesArg)
{
    var gamePieces = new createjs.SpriteSheet(arg);
    for(var i=0;i<libArg.properties.manifest.length;i++){
        var id=libArg.properties.manifest[i]["id"]
        if(arg.animations[id])
        {
            imagesArg[id]=new createjs.SpriteSheetUtils.extractFrame(gamePieces,id);
            //console.log(id);
        }
    }
}
//clone obj
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}/*  |xGv00|601ec080d2820f7b853a243696b30fba */