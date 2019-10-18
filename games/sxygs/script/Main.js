LGlobal.aspectRatio = PORTRAIT;
var GAME_FPS = 30;
init(1000/GAME_FPS, "gamediv", 640, 960, main);
var dataList;
var stageLayer;
var gTime = 4500;
var gScore = 0;
var gHighScore = 0;
try {
	// gHighScore = localStorage["cityrunHighScore"]?localStorage["cityrunHighScore"]:0;
} catch(e) {}
var loadData = [
{name : "start_bg",path : "style/img_d/start_bg.jpg"}
,{name : "start_btn",path : "style/img_d/start_btn.png"}
,{name : "background",path : "style/img_d/background.jpg"}
,{name : "over_board",path : "style/img_d/over_board.png"}
,{name : "share_btn",path : "style/img_d/share_btn.png"}
,{name : "continue_btn",path : "style/img_d/continue_btn.png"}
,{name : "more",path : "style/img_d/more.png"}

,{type : "js",path : "script/config.js"}
,{type : "js",path : "script/GameBody.js"}
,{type : "js",path : "script/Logo.js"}
,{type : "js",path : "script/Util.js"}
,{type : "js",path : "script/Background.js"}
,{type : "js",path : "script/NumberManager.js"}
,{type : "js",path : "script/Schedule.js"}
];
function main() {
	// if(LGlobal.canTouch){
		LGlobal.align = LStageAlign.TOP_MIDDLE;
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
		LSystem.screen(LStage.FULL_SCREEN);
	// }
	//LGlobal.setDebug(true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_UP,true);
	LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,true);
	
	LLoadManage.load(loadData, function(progress) {
		/*btGame.gameLoading(progress/100);*/
	}, imgLoadComplete);
}
function imgLoadComplete(result){
	dataList = result;

	stageLayer = new LSprite();
	addChild(stageLayer);

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
}

