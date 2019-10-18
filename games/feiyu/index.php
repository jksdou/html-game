<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
		<meta name="format-detection" content="telephone=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<link rel="stylesheet" href="resource/css/style.min.css?20140714V7">
		<link rel="stylesheet" href="resource/css/game/flappyfish/min.css?20140714V7">
		<script type="text/javascript" src="resource/script/lib/zepto.min.js"></script>
		<title>小猪飞飞</title>
	</head>
	<body>				<div id="bg-block"></div>
				<!-- loading start -->
				<div id="loading">
					<div id="mark">
						<img width="84px" height="112px" src="meiri.png"/>
						<div class="bar emtpy-bar"></div>
						<div class="bar loading-bar"></div>
					</div>
				</div>
				<!-- loading end -->		<div id="screen"></div>
        <div id="bg-gray"></div>
        <!-- weixin-share start -->
        <div class="weixin-share">
            <img width="320px" height="254px" src="resource/image/share.png">
        </div>
        <!-- weixin-share end -->
		<script type="text/javascript" src="resource/script/game/flappyfish/min.js?20140714V7"></script>
		<script type="text/javascript">
			var _stpipenumber = 10;
		</script>		<script type="text/javascript" src="resource/script/lib/iscroll.min.js"></script>
		<script type="text/javascript" src="resource/script/common.min.js?20140714V7"></script>
		<script type="text/javascript">
			startLoading();
		</script>
		<script type="text/javascript">
			//数据
			var _best_score = {"score":0};
			var _game_info = {"id":"1","series":"flappyfish","name":"\u5f00\u5fc3\u5c0f\u98de\u9c7c","summary":"\u5f00\u5fc3\u5c0f\u98de\u9c7c\uff0c\u8fde\u6211\u81ea\u5df1\u90fd\u73a9\u5230\u5bb3\u6015\uff0c\u6839\u672c\u505c\u4e0d\u4e0b\u6765\uff01","online":"1","weight":"0","fake_score":"a:10:{i:0;i:2;i:1;i:3;i:2;i:4;i:3;i:6;i:4;i:9;i:5;i:11;i:6;i:12;i:7;i:15;i:8;i:24;i:9;i:33;}","share_gameover":"0"};
			$().ready(function() {
				//全局初始化
				globalInit(1);
			});
		</script>
	</body>
</html>