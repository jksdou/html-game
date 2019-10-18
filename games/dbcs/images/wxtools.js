// JavaScript Document
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideToolbar');
});
(function(){
   var onBridgeReady=function(){
   WeixinJSBridge.on('menu:share:appmessage', function(argv){
	  (dataForWeixin.before_share)();
      WeixinJSBridge.invoke('sendAppMessage',{
         "appid":dataForWeixin.appId,
         "img_url":dataForWeixin.MsgImg,
         "img_width":"120",
         "img_height":"120",
         "link":dataForWeixin.shareurl,
         "desc":dataForWeixin.desc,
         "title":dataForWeixin.title
      }, function(res){(dataForWeixin.callback)();});
   });
   WeixinJSBridge.on('menu:share:timeline', function(argv){
	  (dataForWeixin.before_share)();
	  WeixinJSBridge.invoke('shareTimeline',{
         "img_url":dataForWeixin.TLImg,
         "img_width":"120",
         "img_height":"120",
         "link":dataForWeixin.shareurl,
         "desc":dataForWeixin.desc,
         "title":dataForWeixin.title
      }, function(res){(dataForWeixin.callback)();});
   });
   WeixinJSBridge.on('menu:share:weibo', function(argv){
	  (dataForWeixin.before_share)();
	  WeixinJSBridge.invoke('shareWeibo',{
         "content":dataForWeixin.title,
         "url":dataForWeixin.shareurl
      }, function(res){(dataForWeixin.callback)();});
   });
   WeixinJSBridge.on('menu:share:facebook', function(argv){
	  (dataForWeixin.before_share)();
	  WeixinJSBridge.invoke('shareFB',{
         "img_url":dataForWeixin.TLImg,
         "img_width":"120",
         "img_height":"120",
         "link":dataForWeixin.shareurl,
         "desc":dataForWeixin.desc,
         "title":dataForWeixin.title
      }, function(res){(dataForWeixin.callback)();});
   });
};
if(document.addEventListener){
   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
}else if(document.attachEvent){
   document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
   document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
}
})();
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady()  {
	 	WeixinJSBridge.call('showOptionMenu');
	});