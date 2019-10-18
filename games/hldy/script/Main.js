LGlobal.aspectRatio = PORTRAIT;
var GAME_FPS = 30;
init(1000/GAME_FPS, "gamediv", 640, 960, main);
var dataList;
var stageLayer;
var mySoundPlayer;
var gScore = 0;
var gHighScore = 0;
try {
	gHighScore = localStorage["fishinglegendHighScore"]?localStorage["fishinglegendHighScore"]:0;
} catch(e) {}
var HOOKS_NUMBER = 3;
var loadData = [
{name : "l_1",path : "style/img_d/l_1.png"}
,{name : "l_2",path : "style/img_d/l_2.png"}
,{name : "l_3",path : "style/img_d/l_3.png"}
,{name : "l_4",path : "style/img_d/l_4.png"}
,{name : "m_1",path : "style/img_d/m_1.png"}
,{name : "m_2",path : "style/img_d/m_2.png"}
,{name : "m_3",path : "style/img_d/m_3.png"}
,{name : "s_1",path : "style/img_d/s_1.png"}
,{name : "s_2",path : "style/img_d/s_2.png"}
,{name : "hook",path : "style/img_d/hook.png"}
,{name : "score_hook",path : "style/img_d/score_hook.png"}
,{name : "score_board",path : "style/img_d/score_board.png"}
,{name : "start_btn",path : "style/img_d/start_btn.png"}
,{name : "continue_btn",path : "style/img_d/continue_btn.png"}
,{name : "more_btn",path : "style/img_d/more_btn.png"}
,{name : "sound_on",path : "style/img_d/sound_on.png"}
,{name : "sound_off",path : "style/img_d/sound_off.png"}
// ,{name : "face_normal",path : "style/img_d/face_normal.png"}
// ,{name : "face_happy",path : "style/img_d/face_happy.png"}
// ,{name : "face_sad",path : "style/img_d/face_sad.png"}
,{name : "bubble",path : "style/img_d/bubble.png"}
,{name : "share",path : "style/img_d/share.jpg"}
,{name : "logo",path : "style/img_d/logo.png"}
,{name : "background",path : "style/img_d/background.jpg"}
,{name : "start_bg",path : "style/img_d/start_bg.jpg"}
,{type : "js",path : "script/GameBody.js"}
,{type : "js",path : "script/GameOver.js"}
,{type : "js",path : "script/FishManager.js"}
,{type : "js",path : "script/Fish.js"}
,{type : "js",path : "script/Hook.js"}
,{type : "js",path : "script/Background.js"}
,{type : "js",path : "script/Logo.js"}
,{type : "js",path : "script/Score.js"}
,{type : "js",path : "script/SoundPlayer.js"}
];
function main() {
	if(LGlobal.canTouch){
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
		LSystem.screen(LStage.FULL_SCREEN);
	}
	//LGlobal.setDebug(true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_UP,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,true);
	
	LLoadManage.load(loadData, function(progress) {
		btGame.gameLoading(progress/100);
	}, imgLoadComplete);
}
function imgLoadComplete(result){
	dataList = result;

	stageLayer = new LSprite();
	addChild(stageLayer);

	mySoundPlayer = new SoundPlayer();
	addChild(mySoundPlayer);
	
	// gameStart();
	
	var logo = new Logo();
	stageLayer.addChild(logo);

	return;

	var fps = new FPS();
	addChild(fps);

}
function gameStart(){
	stageLayer.die();
	stageLayer.removeAllChild();
	var gameBody = new GameBody();
	gameBody.name = "gameBody";
	stageLayer.addChild(gameBody);
	
	return;
	//debug
	var sprite = new LSprite();
	addChild(sprite);
    sprite.graphics.add(function (){
    	var c = LGlobal.canvas;
    	var w = 32,h = 32;
    	var l1 = LGlobal.width/w;
    	var l2 = LGlobal.height/h; 
		c.beginPath();
		c.strokeStyle = "#000000";
		for(var i=1;i<l1;i++){
			c.moveTo(w*i,0);
			c.lineTo(w*i,LGlobal.height);
		}
		for(var i=1;i<l2;i++){
			c.moveTo(0,h*i);
			c.lineTo(LGlobal.width,h*i);
		}
		c.stroke();
	});
}
function gameOver() {
	stageLayer.die();
	stageLayer.removeAllChild();
	LTweenLite.removeAll();
	var gameOvered = new GameOver();
	gameOvered.name = "gameOver";
	stageLayer.addChild(gameOvered);
	return;
}

Util = function(){};
Util.randomN = function(n) {
	return Math.floor(Math.random()*n);
}
Util.randomInRange = function(min, max) {
	return min+(Math.random()*(max-min));
}
Util.fadeIn = function(object, duration) {
	LTweenLite.to(object, duration, {alpha:1, ease:LEasing.Sine.easeIn})
}
Util.fadeOut = function(object, duration, callback) {
	LTweenLite.to(object, duration, {alpha:0, ease:LEasing.Sine.easeOut, onComplete:callback});
}
Util.sFloat = function(object, duration) {
	originY = object.y;
	LTweenLite.to(object, duration, {y:originY-10, loop:true, ease:LEasing.None.easeIn})
	.to(object, duration, {y:originY+10, loop:true, ease:LEasing.None.easeIn});
}
Util.correctInRange = function(v, min, max) {
	if(v < min) return min;
	else if(v > max) return max;
	else return v;
}

