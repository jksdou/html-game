

FZ.Game.GameOverState = new (FZ.newClass({
	StateName : FZ.StateDefs.GAME_STATE_OVER,

	CUR_UI_DEFS : ["GAME_OVER_BG","NUM_STAGE_OVER_TOTAL_1","NUM_STAGE_OVER_TOTAL_2",
	               "NUM_STAGE_OVER_TOTAL_3","NUM_STAGE_OVER_TOTAL_4","NUM_STAGE_OVER_TOTAL_5"],
	UI_SCORE_START_INDEX: 1,
	TOTAL_SCORE: 5,
	BTN_REPLAY_INDEX  : 0,
	
	CUR_BTN_DEFS : [["BTN_RETRY", "BTN_RETRY_TOUCH"],],
	
	STR_RECT : [173, 280, 138, 36],
//	m_last_score_div : null,
	m_load_ui : false,
	popState: false,
	COLOR_YELLOW:"#F0D751",
	COLOR_BROWN:"#B97F00",
	COLOR_ORANGE:"#FFC72A",
	LABEL_TEXT_SIZE_SMALL:12,
	LABEL_TEXT_SIZE_MIDDLE:18,
	LABEL_TEXT_SIZE_LARGE:24,
	m_title_div:null,
	m_conten_div:null,
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
		this.m_title_div.style.fontSize = Math.round(h-10) + "px";
		// add shadow from up down left and right
		this.m_title_div.style.textShadow = "-1px -1px 1px #972301, 1px 1px 1px #972301, 1px -1px 1px #972301, -1px 1px 1px #972301 ";
		this.m_title_div.style.color = color;
		this.m_title_div.innerHTML = text;
	},
createLabelContentTextSprite : function(x,y,w,h, text, color) {
		this.m_conten_div = document.createElement("div");
		this.m_conten_div.style.width = w + "px";
		this.m_conten_div.style.height = h + "px";
		this.m_conten_div.style.left = x + "px";
		this.m_conten_div.style.top = y + "px";
		this.m_conten_div.style.position = "absolute";
		this.m_ui_list[0].appendChild(this.m_conten_div);
		this.m_conten_div.style.zIndex = 300;
		var lnH = h-2;
		this.m_conten_div.style.textAlign = "center";
		this.m_conten_div.style.lineHeight = Math.round(lnH) + "px";;
		this.m_conten_div.style.fontFamily = "Arial";
		this.m_conten_div.style.fontWeight = "900";
		this.m_conten_div.style.fontSize = Math.round(h-10) + "px";
		// add shadow from up down left and right
		this.m_conten_div.style.textShadow = "-1px -1px 1px #972301, 1px 1px 1px #972301, 1px -1px 1px #972301, -1px 1px 1px #972301 ";
		this.m_conten_div.style.color = color;
		this.m_conten_div.innerHTML = text;
},
	createBtnTextSprite: function(divSprite, text, color){
		var spr = divSprite;
		var h = spr.m_h;
		spr.m_div.style.textAlign="center";
//		spr.m_div.style.textIndent = -20+ "px";
		spr.m_div.style.lineHeight= spr.m_div.style.height;
		spr.m_div.style.fontFamily="Arial";
		spr.m_div.style.fontWeight="bold";
		spr.m_div.style.fontSize=Math.round(h/3)+"px";
		//add shadow from up down left and right
		spr.m_div.style.textShadow="-2px -2px 2px #7c2e1a, 2px 2px 2px #7c2e1a, 2px -2px 2px #7c2e1a, -2px 2px 2px #7c2e1a ";
		spr.m_div.style.color=color;
		spr.m_div.innerHTML=text;
		return spr;
	},
	preProcess : function(preState, curState, score) {
		var index = 0;
//		var img = null;
		var btn = null;
		var info = null;
		var infoDown = null;
		var ctx = null;
		
		if(!this.m_load_ui) {
			this.createUIs(this.CUR_UI_DEFS);
			this.createLabelTitleTextSprite(30,25,230,40, FZ.GameText.TEXT_GAME_OVER, "#FEE7B4");
			this.createLabelContentTextSprite(40,80,230,25,FZ.GameText.TEXT_YOUR_TOTAL_SCORE, this.COLOR_YELLOW);
			this.createBtns(this.CUR_BTN_DEFS, true);
			this.createBtnTextSprite(this.m_btn_list[this.BTN_REPLAY_INDEX], FZ.GameText.TEXT_RETRY, this.COLOR_ORANGE);
	//		this.createStrScoreDiv();
			FZ.DivManager.addChild(this.m_main_div);
			
			this.m_load_ui = true;
		}
		else {
			this.m_main_div.style.display = "inline";
		}
		 var scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(score);
         for(var index = 0; index < scoreNum.length; index++){
         	this.m_ui_list[this.UI_SCORE_START_INDEX + this.TOTAL_SCORE - scoreNum.length + index].style.backgroundImage = "url(imgs/number_score_" + scoreNum[scoreNum.length - 1- index] + ".png)";
         }
         if(scoreNum.length < this.TOTAL_SCORE){
         	for(var index = 0; index < this.TOTAL_SCORE - scoreNum.length ; index++){
         		this.m_ui_list[this.UI_SCORE_START_INDEX + index].style.backgroundImage = "url(imgs/number_score_0.png)";
         	}
         }
         this.popState = false;
	//	this.m_last_score_div.innerHTML = "" + score;
		
	},

	postProcess : function() {
		this.m_main_div.style.display = "none";
	},
	
	createStrScoreDiv : function() {
		this.m_last_score_div = document.createElement("div");
		this.m_last_score_div.style.position = "absolute";
		this.m_last_score_div.style.width = this.STR_RECT[2] + "px";
		this.m_last_score_div.style.height = this.STR_RECT[3] + "px";
		this.m_last_score_div.style.left = this.STR_RECT[0] + "px";
		this.m_last_score_div.style.top = this.STR_RECT[1] + "px";
		this.m_last_score_div.style.color = "#fff";
		this.m_last_score_div.style.fontSize = FZ.GameDefs.STATS_FONT_SIZE + "px";
		this.m_last_score_div.style.fontFamily = "Arial";
		this.m_last_score_div.style.lineHeight  = this.STR_RECT[3] + "px";
		this.m_last_score_div.style.textAlign = "left";
		
		this.m_main_div.appendChild(this.m_last_score_div);
		
	},

	buttonClick : function(btn) {
		if(this.popState){
			return;
		}
		var preState = null;
		if(this.m_btn_list[this.BTN_REPLAY_INDEX] === btn) {
			this.postProcess();
			this.popState = true;
			
			Gamehub.Score.submit(0);
			return;
			FZ.GameBase.popState(this.StateName);
			//FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_GAME_IN);
		}
//		else if(this.m_btn_list[this.BTN_NO_INDEX] === btn) {
//			preState = FZ.GameBase.getState(FZ.StateDefs.GAME_STATE_GAME_IN);
//			
//			if(preState.m_main_div.parentNode) {
//				preState.m_main_div.parentNode.removeChild(preState.m_main_div);
//			}
//			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
//		}
	}
	
}, FZ.BaseState))();