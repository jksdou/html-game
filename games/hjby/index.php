<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>火贱兔奔月</title>
    <meta name="viewport"
          content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no,target-densitydpi=device-dpi"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>

    <meta name="full-screen" content="true"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>

    <style>
        body {
            text-align: center;
            background: #000000;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }

        body a{
            display: none;
        }

        html {
            -ms-touch-action: none; /* Direct all pointer events to JavaScript code. */
            font-size: 200%
        }

        #weChat_tips{
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            background: rgba(0,0,0,0.8);
            /*height: 2.4375rem;*/
            /*line-height: 2.4375rem;*/
            /*text-align: center;*/
            /*position: absolute;*/
            /*top: 0;*/
            /*right: 0;*/
            /*z-index: 99;*/
            /*color: #fff;*/
            /*background: #ff6600;*/
        }
        #weChat_tips .txt{
            color: #fff;
            font-size: 0.875rem;
            font-family: "Microsoft YaHei", simsun;
            width: 100%;
            text-align: left;
            text-indent: 0.2rem;
            height: 2.4375rem;
            line-height: 2.4375rem;
        }
        #weChat_tips .close{
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            /*line-height: 2.4375rem;*/
            /*height: 2.4375rem;*/
            /*width: 1.8125rem;*/
            z-index: 100;
        }
        @media (max-width: 719px) {
            html{
                font-size: 28px;
            }
        }
        @media (max-width: 639px) {
            html{
                font-size: 24px;
            }
        }
        @media (max-width: 532px) {
            html{
                font-size: 20px;
            }
        }
        @media (max-width: 479px) {
            html{
                font-size: 16px;
            }
        }
        @media (max-width: 319px) {
            html{
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
<div style="display:inline-block;width:100%; height:100%;margin: 0 auto; background: #fff; position:relative;"
     id="gameDiv">
    <canvas id="gameCanvas" width="720" height="1280" style="background-color: #0d0c0d"></canvas>
</div>
<script>var document_class = "GameApp";</script><!--这部分内容在编译时会被替换，要修改文档类，请到工程目录下的egretProperties.json内编辑。-->
<script src="egret_loader.js"></script>
<script src="game-min.js"></script>
<script>
    egret_h5.startGame();
</script>
<script src="launcher/zepto.min.js"></script>
 <script language=javascript>
		var mebtnopenurl = 'http://cnhklm.com/game/';
		window.shareData = {
		        "imgUrl": "http://cnhklm.com/game/youxi/hjby/icon.png",
		        "timeLineLink": "http://cnhklm.com/game/youxi/hjby/",
		        "tTitle": "火贱兔奔月",
		        "tContent": "一只火贱兔流落人间，中秋月圆夜，一心飞奔回嫦娥姐姐身边的故事。"
		};
		 window.openWebsite = function(){
            clickMore();
        }		
        window.log = function(str){
            //$("#logo").append(str+"\n");
        }
        window.shareGame = function(){
            dp_share();
        };
		function goHome(){
			window.location=mebtnopenurl;
		}
		function clickMore(){
			if((window.location+"").indexOf("f=zf",1)>0){
				window.location = "http://cnhklm.com/game/";
			 }
			 else{
				goHome();
			 }
		}
		function dp_share(){
			document.getElementById("share").style.display="";
		}
		function dp_Ranking(){
			window.location=mebtnopenurl;
		}

		function showAd(){
		}
		function hideAd(){
		}
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		    
		    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		        WeixinJSBridge.invoke('sendAppMessage', {
		            "img_url": window.shareData.imgUrl,
		            "link": window.shareData.timeLineLink,
		            "desc": window.shareData.tContent,
		            "title": window.shareData.tTitle
		        }, onShareComplete);
		    });

		    WeixinJSBridge.on('menu:share:timeline', function(argv) {
		        WeixinJSBridge.invoke('shareTimeline', {
		            "img_url": window.shareData.imgUrl,
		            "img_width": "640",
		            "img_height": "640",
		            "link": window.shareData.timeLineLink,
		            "desc": window.shareData.tContent,
		            "title": window.shareData.tTitle
		        }, onShareComplete);
		    });
		}, false);
		</script>
		<div id=share style="display: none">
			<img width=100% src="http://cnhklm.com/game/youxi/hjby/share.png"
				style="position: fixed; z-index: 9999; top: 0; left: 0; display: "
				ontouchstart="document.getElementById('share').style.display='none';" />
		</div>
		<div style="display: none;">
			<script type="text/javascript">
            var myData = { gameid: "hjby" };
            var domain = ["oixm.cn", "hiemma.cn", "peagame.net"][parseInt(Math.random() * 3)];
			//window.shareData.timeLineLink = "http://"+ parseInt(Math.random()*100000) +"."+ myData.gameid +"."+domain+"/gamecenter.html?gameid=" + myData.gameid + (localStorage.myuid ? "&uid=" + localStorage.myuid : "");
			function dp_submitScore(score,stitle){
				myData.score = parseInt(score);
				myData.scoreName = (score/1000)+"米";
				document.title =stitle;
				window.shareData.tTitle = document.title;
			}
			function onShareComplete(res) {
                if (localStorage.myuid && myData.score != undefined) {
                    setTimeout(function(){
                        if (confirm("要将成绩提交到微赢游戏排行榜吗？")) {
                           // window.location = "http://wx.9g.com/rank/submit2.jsp?gameid=" + myData.gameid + "&uid=" + localStorage.myuid + "&score=" + myData.score + "&scorename=" + encodeURIComponent(myData.scoreName);
                        }
                        else {
                            document.location.href = mebtnopenurl;
                        }
                    }, 500);
                }
				else {
		        	document.location.href = mebtnopenurl;
				}
	        }
			</script>
			<div style="display: none;">
			
			</div>
</body>
</html>