
FZ.Game.winState = new (FZ.newClass({
	StateName : FZ.StateDefs.GAME_STATE_GAME_WIN,

	CUR_UI_DEFS : ["YOU_WIN_BG", 
	               "NUM_STAGE_WIN_TOTAL_1","NUM_STAGE_WIN_TOTAL_2","NUM_STAGE_WIN_TOTAL_3","NUM_STAGE_WIN_TOTAL_4","NUM_STAGE_WIN_TOTAL_5",
	               "NUM_STAGE_WIN_TOTAL_TIME_1","NUM_STAGE_WIN_TOTAL_TIME_2","NUM_STAGE_WIN_TOTAL_TIME_3","NUM_STAGE_WIN_TOTAL_TIME_4","NUM_STAGE_WIN_TOTAL_TIME_5",
	               "NUM_STAGE_TOTAL_HINT_1","NUM_STAGE_TOTAL_HINT_2","NUM_STAGE_TOTAL_HINT_3","NUM_STAGE_TOTAL_HINT_4","NUM_STAGE_TOTAL_HINT_5"],
	UI_TOTAL_SCORE_START_INDEX: 1,
	UI_TOTAL_TIME_START_INDEX: 6,
	UI_TOTAL_HINT_START_INDEX: 11,
	TOTAL_SCORE: 5,
	TOTAL_TIME:5,
	TOTAL_HINT: 5,
//	BTN_MENU_AWARDS_INDEX : 0,
	BTN_MAIN_MENU_IDNEX : 0,
	//CUR_BTN_DEFS : [["BTN_AWARDS", "BTN_AWARDS_TOUCH",], ["BTN_MAIN_MENU_WIN", "BTN_MAIN_MENU_WIN_TOUCH",],],
	CUR_BTN_DEFS : [ ["BTN_MAIN_MENU", "BTN_MAIN_MENU_TOUCH",]], 
	STR_LEFT_TIME_RECT : [100, 215, 50, 36],
	STR_LEFT_TIME_BONUS_RECT : [203, 215, 30, 36],
	STR_SCORE_RECT : [160, 277, 138, 36],

	m_load_ui : false,
	COLOR_YELLOW:"#F0D751",
	COLOR_BROWN:"#B97F00",
	COLOR_ORANGE:"#FFC72A",
	LABEL_TEXT_SIZE_SMALL:12,
	LABEL_TEXT_SIZE_MIDDLE:18,
	LABEL_TEXT_SIZE_LARGE:24,
	m_title_div:null,
	m_conten_div1:null,
	m_conten_div2:null,
	m_conten_div3:null,
	
	createLabelTitleTextSprite : function(x,y,w,h, text, color) {
		this.m_title_div = document.createElement("div");
		this.m_title_div.style.width = w + "px";
		this.m_title_div.style.height = h + "px";
		this.m_title_div.style.left = x + "px";
		this.m_title_div.style.top = y + "px";
		this.m_title_div.style.position = "absolute";
		this.m_ui_list[0].appendChild(this.m_title_div);
		this.m_title_div.style.zIndex = 300;
		var lnH = h-2;
		this.m_title_div.style.textAlign = "center";
		this.m_title_div.style.lineHeight = Math.round(lnH) + "px";;
		this.m_title_div.style.fontFamily = "Arial";
		this.m_title_div.style.fontWeight = "bolder";
		this.m_title_div.style.fontSize = Math.round(h-12) + "px";
		// add shadow from up down left and right
		this.m_title_div.style.textShadow = "-1px -1px 1px #4F5100, 1px 1px 1px #4F5100, 1px -1px 1px #4F5100, -1px 1px 1px #4F5100 ";
		this.m_title_div.style.color = color;
		this.m_title_div.innerHTML = text;
	},
	createLabelContentTextSprite : function(div,x,y,w,h, text, color) {
		div = document.createElement("div");
		div.style.width = w + "px";
		div.style.height = h + "px";
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.style.position = "absolute";
		this.m_ui_list[0].appendChild(div);
		div.style.zIndex = 300;
		var lnH = h-2;
		div.style.textAlign = "center";
		div.style.lineHeight = Math.round(lnH) + "px";;
		div.style.fontFamily = "Arial";
		div.style.fontWeight = "900";
		div.style.fontSize = Math.round(lnH) + "px";
		// add shadow from up down left and right
		div.style.textShadow = "-1px -1px 1px #AE0000, 1px 1px 1px #AE0000, 1px -1px 1px #AE0000, -1px 1px 1px #AE0000 ";
		div.style.color = color;
		div.innerHTML = text;
	},
	createLabelContentTextSprite_ : function(div, x,y,w,h, text, color) {
		div = document.createElement("div");
		div.style.width = w + "px";
		div.style.height = h + "px";
		div.style.left = x + "px";
		div.style.top = y + "px";
		div.style.position = "absolute";
		this.m_ui_list[0].appendChild(div);
		div.style.zIndex = 300;
		var lnH = h-2;
		div.style.textAlign = "center";
		div.style.lineHeight = Math.round(lnH) + "px";;
		div.style.fontFamily = "Arial";
		div.style.fontWeight = "900";
		div.style.fontSize = Math.round(lnH) + "px";
		// add shadow from up down left and right
		div.style.textShadow = "-1px -1px 1px #054747, 1px 1px 1px #054747, 1px -1px 1px #054747, -1px 1px 1px #054747 ";
		div.style.color = color;
		div.innerHTML = text;
	},
	createBtnTextSprite: function(divSprite, text, color){
		var spr = divSprite;
		var h = spr.m_h;
		spr.m_div.style.textAlign="center";
//		spr.m_div.style.textIndent = -10+ "px";
		spr.m_div.style.lineHeight= spr.m_div.style.height;
		spr.m_div.style.fontFamily="Arial";
		spr.m_div.style.fontWeight="bold";
		spr.m_div.style.fontSize=Math.round(h/4)+"px";
		//add shadow from up down left and right
		spr.m_div.style.textShadow="-2px -2px 2px #7c2e1a, 2px 2px 2px #7c2e1a, 2px -2px 2px #7c2e1a, -2px 2px 2px #7c2e1a ";
		spr.m_div.style.color=color;
		spr.m_div.innerHTML=text;
		return spr;
	},
	preProcess : function(preState, curState, totalScore, totalUsedTime, totalUsedHint) {
		var index = 0;
//		var img = null;
		var btn = null;
		var info = null;
		var infoDown = null;
		var ctx = null;
		var mySelf = this;
		if(!this.m_load_ui) {
			this.createUIs(this.CUR_UI_DEFS);
			var x = (320 - parseInt((this.m_ui_list[0].style.width).substr(0,3)))/2;
			var w = parseInt((this.m_ui_list[0].style.width).substr(0,3));
			this.createLabelTitleTextSprite(x,5,w-20,40, FZ.GameText.TEXT_GAME_COMPLETE, "#BEEB36");
			this.createLabelContentTextSprite_(this.m_conten_div1,x,50,w,25,FZ.GameText.TEXT_TOTAL_SCORE, "#67F1F0");
			this.createLabelContentTextSprite(this.m_conten_div2,x,110,w,25, FZ.GameText.TEXT_USED_TIME, "#FBCE1A");
			this.createLabelContentTextSprite_(this.m_conten_div3,x,172,w,25,FZ.GameText.TEXT_USED_HINTS, "#67F1F0");
			this.createBtns(this.CUR_BTN_DEFS, true);
			this.createBtnTextSprite(this.m_btn_list[this.BTN_MAIN_MENU_IDNEX], FZ.GameText.TEXT_MAIN_MENU, this.COLOR_ORANGE);
//			this.createStrScoreDiv();
//			this.createStrLeftTimeDiv();
			FZ.DivManager.addChild(this.m_main_div);
			
			this.m_load_ui = true;
		}
		else {
			this.m_main_div.style.display = "inline";
		}
//		this.m_last_left_time_div.innerHTML = "" + totalScore;
//		this.m_last_score_div.innerHTML = "" + levelScore;
		var scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(totalScore);
        for(var index = 0; index < scoreNum.length; index++){
        	this.m_ui_list[this.UI_TOTAL_SCORE_START_INDEX + this.TOTAL_SCORE - scoreNum.length + index].style.backgroundImage = "url(imgs/number_score_" + scoreNum[scoreNum.length - 1- index] + ".png)";
        }
        if(scoreNum.length < this.TOTAL_SCORE){
        	for(var index = 0; index < this.TOTAL_SCORE - scoreNum.length ; index++){
        		this.m_ui_list[this.UI_TOTAL_SCORE_START_INDEX + index].style.backgroundImage = "url(imgs/number_score_0.png)";
        	}
        }
        scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(totalUsedTime);
        for(var index = 0; index < scoreNum.length; index++){
        	this.m_ui_list[this.UI_TOTAL_TIME_START_INDEX + this.TOTAL_TIME - scoreNum.length + index].style.backgroundImage = "url(imgs/number_score_" + scoreNum[scoreNum.length - 1- index] + ".png)";
        }
        if(scoreNum.length < this.TOTAL_TIME){
        	for(var index = 0; index < this.TOTAL_TIME - scoreNum.length ; index++){
        		this.m_ui_list[this.UI_TOTAL_TIME_START_INDEX + index].style.backgroundImage = "url(imgs/number_score_0.png)";
        	}
        }
        scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(totalUsedHint);
        for(var index = 0; index < scoreNum.length; index++){
        	this.m_ui_list[this.UI_TOTAL_HINT_START_INDEX + this.TOTAL_HINT - scoreNum.length + index].style.backgroundImage = "url(imgs/number_score_" + scoreNum[scoreNum.length - 1- index] + ".png)";
        }
        if(scoreNum.length < this.TOTAL_HINT){
        	for(var index = 0; index < this.TOTAL_HINT - scoreNum.length ; index++){
        		this.m_ui_list[this.UI_TOTAL_HINT_START_INDEX + index].style.backgroundImage = "url(imgs/number_score_0.png)";
        	}
        }
		setTimeout(function() {
			mySelf.fade_in.call(mySelf, 2000, 1);
		}, 10);
		FZ.GameBase.SaveObject.m_gamein = false;
        FZ.GameBase.saveGame();
	},
	createStrLeftTimeDiv : function() {
		this.m_last_left_time_div = document.createElement("div");
		this.m_last_left_time_div.style.position = "absolute";
		this.m_last_left_time_div.style.width = this.STR_LEFT_TIME_RECT[2] + "px";
		this.m_last_left_time_div.style.height = this.STR_LEFT_TIME_RECT[3] + "px";
		this.m_last_left_time_div.style.left = this.STR_LEFT_TIME_RECT[0] + "px";
		this.m_last_left_time_div.style.top = this.STR_LEFT_TIME_RECT[1] + "px";
		this.m_last_left_time_div.style.color = "#fff";
		this.m_last_left_time_div.style.fontSize = FZ.GameDefs.STATS_FONT_SIZE + "px";
		this.m_last_left_time_div.style.fontFamily = "Arial";
		this.m_last_left_time_div.style.lineHeight  = this.STR_LEFT_TIME_RECT[3] + "px";
		this.m_last_left_time_div.style.textAlign = "left";
		
		this.m_main_div.appendChild(this.m_last_left_time_div);
		
	},
	
	createStrScoreDiv : function() {
		this.m_last_score_div = document.createElement("div");
		this.m_last_score_div.style.position = "absolute";
		this.m_last_score_div.style.width = this.STR_SCORE_RECT[2] + "px";
		this.m_last_score_div.style.height = this.STR_SCORE_RECT[3] + "px";
		this.m_last_score_div.style.left = this.STR_SCORE_RECT[0] + "px";
		this.m_last_score_div.style.top = this.STR_SCORE_RECT[1] + "px";
		this.m_last_score_div.style.color = "#fff";
		this.m_last_score_div.style.fontSize = FZ.GameDefs.STATS_FONT_SIZE + "px";
		this.m_last_score_div.style.fontFamily = "Arial";
		this.m_last_score_div.style.lineHeight  = this.STR_SCORE_RECT[3] + "px";
		this.m_last_score_div.style.textAlign = "left";
		
		this.m_main_div.appendChild(this.m_last_score_div);
		
	},
	postProcess : function() {
		this.fade_out(2000, 0, 0);
	},
	buttonClick : function(btn) {
//		if (this.m_btn_list[this.BTN_MENU_AWARDS_INDEX] === btn) {
//			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_CREDITS);
//		}
		if (this.m_btn_list[this.BTN_MAIN_MENU_IDNEX] === btn) {
			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
			FZ.Game.GameState.m_main_div.style.display = "none";
            FZ.Game.GameState.fade_out(2000, 0, 0);
		}
	}
	
}, FZ.BaseState))();