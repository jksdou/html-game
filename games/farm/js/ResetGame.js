
FZ.Game.ResetState = new (FZ.newClass({
	StateName : FZ.StateDefs.GAME_STATE_RESET,

	CUR_UI_DEFS : ["NEXT_LEVEL_BG", "TXT_ARE_YOU_SURE"],
	
	BTN_YES_INDEX : 0,
	BTN_NO_INDEX : 1,
	CUR_BTN_DEFS : [["BTN_GAME_YES", "BTN_GAME_YES_TOUCH",], ["BTN_GAME_NO", "BTN_GAME_NO_TOUCH",],],
	
	m_ui_list : null,
	m_btn_list : null,
	popState: false,
	m_load_ui : false,
	COLOR_YELLOW:"#F0D751",
	COLOR_BROWN:"#B97F00",
	COLOR_ORANGE:"#FFC72A",
	COLOR_TITLE:"#FEE7B4",
	LABEL_TEXT_SIZE_SMALL:12,
	LABEL_TEXT_SIZE_MIDDLE:18,
	LABEL_TEXT_SIZE_LARGE:24,
	preProcess : function() {
		var btn = null;
		var info = null;
		var infoDown = null;
		var index = 0;
		var mySelf = this;
		if (!this.m_load_ui) {
			this.createUIs(this.CUR_UI_DEFS);
			this.createBtns(this.CUR_BTN_DEFS, true);
			FZ.DivManager.addChild(this.m_main_div);
			this.m_load_ui = true;
		}
		else {
			this.m_main_div.style.display = "inline";
//			this.m_main_div.style.zIndex = 300;
		}
		this.popState = false;
		setTimeout(function() {
			mySelf.fade_in.call(mySelf, 2000, 1);
		}, 10);
	},

	postProcess : function() {
		this.m_main_div.style.display = "none";
		//this.fade_out(2000, 0, 0);
	},
	buttonClick : function(btn) {
		if(this.popState){
			return;
		}
		var preState = null;
		if(this.m_btn_list[this.BTN_YES_INDEX] === btn) {
//			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
			this.postProcess();
			this.popState = true;
			FZ.GameBase.popState(this.StateName, "yes");
		}
		else if(this.m_btn_list[this.BTN_NO_INDEX] === btn) {
//			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_GAME_IN);
			this.postProcess();
			this.popState = true;
			FZ.GameBase.popState(this.StateName, "no");
		}
	}
	
}, FZ.BaseState))();