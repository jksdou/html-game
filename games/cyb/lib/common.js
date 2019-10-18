/**
* Created by quanchen on 2014/8/26.
*/

// window.onload=function()
// {
//     //加载js文件;
//     //alert('window pgvMain');
//     function loadJS(url,callback){var script=document.createElement('script');script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;if(callback){callback()}}}}else{script.onload=function(){if(callback){callback()}}}script.src=url;document.body.appendChild(script)};
//     loadJS('http://pingjs.qq.com/ping_tcss_ied.js',tcssComplete);
// }

//分享;
var SHARE_ICON_URL='';//jpg 120*120;
var SHARE_URL='';
var SHARE_STR='';

// function onBridgeInit()
// {
//     //执行
//     try{
//         document.addEventListener('WeixinJSBridgeReady', function() {
//             onBridgeReady();
//         });
//     }catch(e){}
// };

// function onBridgeReady()
// {
//     //转发朋友圈
//     WeixinJSBridge.on("menu:share:timeline", function(e) {
//         var url = SHARE_URL;
//         var data = {
//             img_url: SHARE_ICON_URL,
//             img_width: "120",
//             img_height: "120",
//             link: url,
//             //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
//             desc:SHARE_STR,
//             title: SHARE_STR
//         };
//         WeixinJSBridge.invoke("shareTimeline", data, function(res) {
//             WeixinJSBridge.log(res.err_msg)
//         });
//     });
//     //同步到微博
//     WeixinJSBridge.on("menu:share:weibo", function() {
//         var url = SHARE_URL;
//         WeixinJSBridge.invoke("shareWeibo", {
//             "content": SHARE_STR,
//             "url": url
//         }, function(res) {
//             WeixinJSBridge.log(res.err_msg);
//         });
//     });
//     //分享给朋友
//     WeixinJSBridge.on('menu:share:appmessage', function(argv) {
//         var url = SHARE_URL;
//         WeixinJSBridge.invoke("sendAppMessage", {
//             img_url: SHARE_ICON_URL,
//             img_width: "120",
//             img_height: "120",
//             link: url,
//             desc: SHARE_STR,
//             title: SHARE_STR
//         }, function(res) {
//             WeixinJSBridge.log(res.err_msg)
//         });
//     });
// };

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
        //alert('pgvMain');
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
    mx=(touch.pageX-(wrongx/2))/scale;
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
/*  |xGv00|67e6de92a0adc2c16e3c722168e6ef41 */