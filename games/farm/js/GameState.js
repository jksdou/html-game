var myPlayLevel = "";
(function(){

    //	var gameInst = null;
    var isDebug = false;
    var mySelf = null;
    
    FZ.Game.GameState = new (FZ.newClass({
        StateName: FZ.StateDefs.GAME_STATE_GAME_IN,
        
        CUR_UI_DEFS: ["gameIn_BG", "TIME_EMPTY", "TIME__FULL", "NUM_LEVEL_10","NUM_LEVEL_0", "ARROW_UP_DOWN", "ARROW_LEFT_RIGHT", "ARROW_DOWN", "ARROW_RIGHT", "ARROW_LEFT", "ARROW_UP",
        "score_1", "score_2", "score_3", "score_4", "score_5"],
        UI_ARROW_START_INDEX: 5,
        UI_ARROW_KINDS: 6,
        UI_SCORE_START_INDEX: 11,
        UI_TIME_BAR_INDEX: 2,
        UI_LEVEL_TEN_INDEX: 3,
        UI_LEVEL_NUM_INDEX: 4,
        //BTN_HOME_INDEX: 0,
        BTN_HINT_INDEX: 0,
        BTN_PAUSE_INDEX: 1,
        BTN_START_INDEX: 2,
      //  BTN_SOUND_INDEX: 3,
        
	CUR_BTN_DEFS: [/*["BTN_MAIN_MENU_ICON", "BTN_MAIN_MENU_ICON_TOUCH"], */["BTN_HINT", "BTN_HINT_TOUCH"], ["BTN_PAUSE", "BTN_PAUSE_TOUCH"]/*, ["BTN_SOUND", "BTN_SOUND_TOUCH"],*/ ],
        CUR_BTN_ANDROID_DEFS: [/*["BTN_MAIN_MENU_ICON", "BTN_MAIN_MENU_ICON_TOUCH"], */["BTN_HINT", "BTN_HINT_TOUCH"], ["BTN_PAUSE", "BTN_PAUSE_TOUCH"], ],
        CUR_SWITCH_DEFS: ["BTN_GAME_BACK", "BTN_GAME_BACK_TOUCH"],
       // SOUND_SWITCH_DEFS: ["BTN_SOUND_OFF", "BTN_SOUND_OFF_TOUCH"],
        m_isNoMatch: false,
        m_label_list: null,
        m_levelStart: false,
        
        m_diamondMgr: null,
        m_load_ui: false,
        //		m_start_time : 0,
        m_curLevel_div: null,
        m_curLevel10_div: null,
        m_next_state: "",
        m_slide_menu: null,
        
        m_hint_num_div: null,
        
        m_pause_div: null,
        m_str_nomatch_div: null,
        m_time_bar_div: null,
        m_time_bar_w: 0,
        
        m_call_tStart: null,
        m_call_mClick: null,
        m_call_time: null,
        m_level_usedTime: 0,
        levelStartTime: 0,
        levelCurrentTime: 0,
        levelPauseStartTime: 0,
        levelPauseEndTime: 0,
        levelPauseTime: 0,
        curLevelUsedTime: 0,
        m_showPage:false,
        m_gamePause: false,
        pageHiddin: false,
        STR_SCORE_RECT: [120, 28, 50, 20],
        STR_TIME_RECT: [120, 48, 50, 20],
        COLOR_YELLOW:"#F0D751",
		COLOR_BROWN:"#B97F00",
		COLOR_ORANGE:"#FFC72A",
		COLOR_PAUSE:"#c2fa41",
		COLOR_NOMATCH:"#ffe16f",
		LABEL_TEXT_SIZE_SMALL:12,
		LABEL_TEXT_SIZE_MIDDLE:18,
		LABEL_TEXT_SIZE_LARGE:24,
		LABEL_PAUSE_SIZE:30,
		createLevelTextSprite: function(x, y, w, h,text, color,size){
			var spr = document.createElement("div");
			var lineH = size;
			spr.style.position = "absolute";
			spr.style.width = w +"px";
			spr.style.height = h + "px";
			spr.style.left = x + "px";
			spr.style.top = y+ "px";
			spr.style.textAlign="center";
			spr.style.lineHeight= h + "px";
			spr.style.fontFamily="Arial";
			spr.style.fontWeight="bold";
			spr.style.fontSize=lineH+"px";
			//add shadow from up down left and right
			spr.style.textShadow="-1px -1px 1px #ffffff, 1px 1px 1px #ffffff, 1px -1px 1px #ffffff, -1px 1px 1px #ffffff ";
			spr.style.color=color;
			spr.innerHTML=text;
//			spr.style.zIndex = 5;
			return spr;
		},
		createLabelTextSprite_: function(divSprite,text, color,size){
			var spr = divSprite;
			var h = size;
			spr.style.textAlign="center";
			spr.style.lineHeight= spr.style.height;
			spr.style.fontFamily="Arial";
			spr.style.fontWeight="bold";
			spr.style.fontSize=Math.round(h)+"px";
			//add shadow from up down left and right
			spr.style.textShadow="-1px -1px 1px #FFFFFF, 1px 1px 1px #FFFFFF, 1px -1px 1px #FFFFFF, -1px 1px 1px #FFFFFF ";
			spr.style.color=color;
			spr.innerHTML=text;		
		},
		createPauseTextSprite: function(divSprite,text, color,size){
			var spr = divSprite;
			var h = size;
			spr.style.textAlign = "center";
			spr.style.lineHeight = Math.round(spr.style.height*10/36);
			spr.style.fontFamily = "Arial";
			spr.style.fontWeight = "bolder";
			spr.style.textIndent = -20+ "px";
			spr.style.paddingTop = Math.round(spr.style.height*10/36);
			spr.style.fontSize = Math.round(h) + "px";
			// add shadow from up down left and right
			spr.style.textShadow = "-2px -2px 2px #B97F00, 2px 2px 2px #B97F00, 2px -2px 2px #B97F00, -2px 2px 2px #B97F00 ";
			spr.style.color = color;
			spr.innerHTML = text;
		},
		createLabelTextSprite: function(divSprite,text, color,size){
			var spr = divSprite;
			var h = size;
			spr.style.textAlign = "center";
			spr.style.lineHeight = spr.style.height;
			spr.style.fontFamily = "Arial";
			spr.style.fontWeight = "bold";
			spr.style.fontSize = Math.round(h) + "px";
			// add shadow from up down left and right
			spr.style.textShadow = "-2px -2px 2px #B97F00, 2px 2px 2px #B97F00, 2px -2px 2px #B97F00, -2px 2px 2px #B97F00 ";
			spr.style.color = color;
			spr.innerHTML = text;
		},
        createStrDiv : function(rect) {
    		var div = document.createElement("div");
    		div.style.position = "absolute";
    		div.style.width = rect[2] + "px";
    		div.style.height = rect[3] + "px";
    		div.style.left = rect[0] + "px";
    		div.style.top = rect[1] + "px";
    		div.style.color = "#fff";
    		div.style.fontSize = FZ.GameDefs.STATS_FONT_SIZE + "px";
    		div.style.fontFamily = "Arial";
    		div.style.lineHeight  = rect[3] + "px";
    		div.style.textAlign = "left";
    	    this.m_main_div.appendChild(div); 
    	    return div;
    	},
        pause: function(){
            clearTimeout(this.m_timer);
        },
        resume: function(){
            var statename = null;
            
            if (arguments.length > 0) {
                statename = arguments[0];
            }
           
       //     FZ.PrintLog(arguments[0] + " ismainmenu = " + arguments[1]);
            if (null !== this.m_diamondMgr) {
                this.m_time_bar_div.style.display = "inline";
                
                if (FZ.StateDefs.GAME_STATE_OVER == statename) {
                    this.m_time_bar_div.style.width = this.m_time_bar_w + "px";
                    this.m_btn_list[this.BTN_HINT_INDEX].setEnable(true);
                    this.m_diamondMgr.initAllPets(true);
                    this.m_diamondMgr.showPets();
                    this.levelStartTime = (new Date()).getTime();
                    this.levelCurrentTime = this.levelStartTime;
                    this.levelPauseStartTime = this.levelStartTime;
                    this.levelPauseEndTime = this.levelStartTime;
                    this.levelPauseTime = 0;
                    this.curLevelUsedTime = 0;
                    this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.backgroundImage = "url(imgs/" + this.m_btn_list[this.BTN_HINT_INDEX].m_img_list[0] + ")";
                    this.m_game_bg_div = this.m_ui_list[1];
                    
                    this.m_diamondMgr.setHintCount(FZ.GameBase.SaveObject.m_hint);
                    this.m_diamondMgr.setLevel(FZ.GameBase.SaveObject.m_cur_level);
                    
                    var hint = this.m_diamondMgr.getHintCount();
                    this.m_hint_num_div[0].style.visibility = "visible";
                    this.m_hint_num_div[1].style.visibility = "visible";
                    if (hint >= 10) {
                        var num = Math.floor(hint % 10);
                        this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                        num = Math.floor(hint / 10);
                        this.m_hint_num_div[1].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                    }
                    else 
                        if (hint === 0) {
                            this.m_hint_num_div[0].style.visibility = "hidden";
                            this.m_hint_num_div[1].style.visibility = "hidden";
                        }
                        else {
                            this.m_hint_num_div[1].style.visibility = "hidden";
                            this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + hint + ".png )";
                        }
                    var curLevel = this.m_diamondMgr.getLevel();
                    var info = null;
                    info = FZ.getImgInfo("NUM_LEVEL_" + curLevel);
                    this.m_curLevel10_div.style.backgroundImage = "url(imgs/NUM_LEVEL_0.png )";
                    this.m_curLevel_div.style.backgroundImage = "url(imgs/" + info.fileURL + ")";
                    this.m_diamondMgr.setParent(this.m_main_div);
                }
                else 
                    if (FZ.StateDefs.GAME_STATE_NEXT_LEVEL == statename) {
                        this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.backgroundImage = "url(imgs/" + this.m_btn_list[this.BTN_HINT_INDEX].m_img_list[0] + ")";
                        this.m_time_bar_div.style.width = this.m_time_bar_w + "px";
                        this.m_btn_list[this.BTN_HINT_INDEX].setEnable(true);
                        this.m_diamondMgr.initAllPets(true);
                        this.m_diamondMgr.hidePets();
                        this.levelStartTime = (new Date()).getTime();
                        this.levelCurrentTime = this.levelStartTime;
                        this.levelPauseStartTime = this.levelStartTime;
                        this.levelPauseEndTime = this.levelStartTime;
                        this.levelPauseTime = 0;
                        this.curLevelUsedTime = 0;
                        this.m_hint_num_div[0].style.visibility = "visible";
                        this.m_hint_num_div[1].style.visibility = "visible";
                        var hint = FZ.GameBase.SaveObject.m_hint;
                        if (hint >= 10) {
                            var num = Math.floor(hint % 10);
                            this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                            num = Math.floor(hint / 10);
                            this.m_hint_num_div[1].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                        }
                        else 
                            if (hint === 0) {
                                this.m_hint_num_div[0].style.visibility = "hidden";
                                this.m_hint_num_div[1].style.visibility = "hidden";
                            }
                            else {
                                this.m_hint_num_div[1].style.visibility = "hidden";
                                this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + hint + ".png )";
                            }
                        //  this.m_diamondMgr.setScore(FZ.GameBase.SaveObject.m_total_score);
                        this.m_diamondMgr.setLevel(FZ.GameBase.SaveObject.m_cur_level);
                        this.m_diamondMgr.setHintCount(FZ.GameBase.SaveObject.m_hint);
                        var curLevel = this.m_diamondMgr.getLevel();
                        switch(curLevel){
                        	case 1:
                        	case 2:
                        	case 4:
                        	case 6:
                        	{
                        		this.m_levelStart = true;
                        		this.m_diamondMgr.showPets();
                        		for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
                        			this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
                        		}
                        		this.m_diamondMgr.setParent(this.m_main_div);
                        		break;
                        	}
                        	case 3:
                        	{
                        		this.m_levelStart = false;
                                this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX].style.display = "inline";
                        		break;
                        	}
                        	case 5:
                        	{
                        	this.m_levelStart = false;
                                this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX + 1].style.display = "inline";
                        		break;
                        	}
                        	case 7:
                        	{
                        		this.m_levelStart = false;
                                this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX + 2].style.display = "inline";
                        		break;
                        	}
                        	case 8:
                        	{
                        		this.m_levelStart = false;
                                this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX + 3].style.display = "inline";
                        		break;
                        	}
                        	case 9:
                        	{
                        		this.m_levelStart = false;
                                this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX + 4].style.display = "inline";
                        		break;
                        	}
                        	case 10:
                        	{
                        		this.m_levelStart = false;
                                	this.m_diamondMgr.hidePets();
                        		this.m_ui_list[this.UI_ARROW_START_INDEX + 5].style.display = "inline";
                        		break;
                        	}
                        	default:
            				{
            					break;
            				}
                        }
                        var info = null;
                        info = FZ.getImgInfo("NUM_LEVEL_" + curLevel);
                        if(curLevel === 10){
                        	this.m_curLevel_div.style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
                            this.m_curLevel_div.style.display = "inline";
                            this.m_curLevel10_div.style.backgroundImage = "url(imgs/NUM_LEVEL_1.png )";
                            this.m_curLevel10_div.style.display = "inline";
                        }else{
                        	this.m_curLevel_div.style.backgroundImage = "url(imgs/" + info.fileURL + ")";
                        	this.m_curLevel_div.style.display = "inline";
                        	this.m_curLevel10_div.style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
                        	this.m_curLevel10_div.style.display = "inline";
                        }
                    }
                    else 
                        if (FZ.StateDefs.GAME_STATE_RESET == statename) {
                            if (arguments.length > 1) {
                                if (arguments[1] === "yes") {
                                    //hintDiv.value = "go to main menu!";
                                    
                                    //                                	this.m_diamondMgr.setHintCount(FZ.GameBase.SaveObject.m_hint);
                                    //                                    this.m_diamondMgr.setScore(FZ.GameBase.SaveObject.m_total_score);
                                    //                                    this.m_diamondMgr.setLevel(FZ.GameBase.SaveObject.m_cur_level);
                                    //  this.m_main_div.style.display = "none";
                                    
                                    this.m_next_state = FZ.StateDefs.GAME_STATE_MAINMEN;
                                    this.m_diamondMgr.saveLevel();
                                    setTimeout(function(){
                                        FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
                                    }, 100);
                                    
                                    return;
                                }
                                else {
                                    this.levelPauseEndTime = (new Date()).getTime();
                                    this.levelPauseTime += this.levelPauseEndTime - this.levelPauseStartTime;
                                    this.m_diamondMgr.setParent(this.m_main_div);
                                }
                            }
                        }
            }
            this.m_status = FZ.stateStatus.NORMAL;
            this.m_timer = setTimeout(FZ.Tools.bind(this, this.checkOver), 0);
            
        },
        setText: function(div, text){
        	div.innerHTML="" + text;
        }, 
        preProcess: function(preState){
            mySelf = this;
            
            var index = 0;
            var ctx = null;
            var div = null;
            var info = null;
            var cloneInfo = null;
            var infoDown = null;
            //set current level
            var curLevel = FZ.GameBase.SaveObject.m_cur_level;
            var mySelf = this;
            if (curLevel === undefined || 0 === curLevel) { //set ui
                FZ.GameBase.SaveObject.m_cur_level = 1;
                FZ.GameBase.saveGame();
            }
         
            if (!this.m_load_ui) {
            
                this.m_pause_div = document.createElement("div");
                this.m_pause_div.style.zIndex = 200;
                info = FZ.getImgInfo("PAUSE_BG");
                FZ.GameBase.setCss(this.m_pause_div, info);
                this.m_main_div.appendChild(this.m_pause_div);
                this.m_pause_div.style.display = "none";
                
                this.textPauseDiv = document.createElement("div");
                this.textPauseDiv.style.width = 145 + "px";
                this.textPauseDiv.style.height = 35 + "px";
                this.textPauseDiv.style.left = 38 + "px";
                this.textPauseDiv.style.top = 95 + "px";
                this.textPauseDiv.style.position = "absolute";
//				this.m_ui_list.push(this.textPauseDiv);
				this.m_pause_div.appendChild(this.textPauseDiv);
//				this.m_main_div.appendChild(this.textPauseDiv);
				this.textPauseDiv.style.zIndex = 201;
                this.createPauseTextSprite(this.textPauseDiv,FZ.GameText.TEXT_PAUSED, this.COLOR_PAUSE,this.LABEL_PAUSE_SIZE);
                this.m_str_nomatch_div = document.createElement("div");
                this.m_str_nomatch_div.style.zIndex = 200;
                info = FZ.getImgInfo("NO_MORE_MATCHS");
                FZ.GameBase.setCss(this.m_str_nomatch_div, info);
                this.m_main_div.appendChild(this.m_str_nomatch_div);
                this.m_str_nomatch_div.style.display = "none";
                this.createLabelTextSprite(this.m_str_nomatch_div,FZ.GameText.TEXT_NO_MORE_MATCHES, this.COLOR_NOMATCH,this.LABEL_TEXT_SIZE_MIDDLE);
                var hintNum = FZ.GameBase.SaveObject.m_hint;
                this.m_hint_num_div = [];
                var len = FZ.AG.SearchSpecialPath.setNumDiv(this.m_hint_num_div, hintNum);
                while (len > 0) {
                    this.m_main_div.appendChild(this.m_hint_num_div[len - 1]);
                    len--;
                }
                
                this.createUIs(this.CUR_UI_DEFS);
//                this.createLabelTextSprite_(this.m_ui_list[2],"LEVEL","#fcfb00",12);
                var labelDiv = this.createLevelTextSprite(4,30,65,25,FZ.GameText.TEXT_LEVEL, "#792b0e",this.LABEL_TEXT_SIZE_MIDDLE);
//    			this.m_ui_list.push(labelDiv);
    			this.m_main_div.appendChild(labelDiv);
                for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
                    this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
                }
                
                if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                    this.createBtns(this.CUR_BTN_DEFS, true);
                }
                else {
                    this.createBtns(this.CUR_BTN_ANDROID_DEFS, true);
//                    this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.left = 184 + "px";
                }
                info = FZ.getImgInfo(this.CUR_SWITCH_DEFS[0]);
                cloneInfo = FZ.getImgInfo(this.CUR_SWITCH_DEFS[1]);
                this.m_btn_list[this.BTN_PAUSE_INDEX].setSwitchButton(info.fileURL, cloneInfo.fileURL);
        /* 
       if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                    info = FZ.getImgInfo(this.SOUND_SWITCH_DEFS[0]);
                    cloneInfo = FZ.getImgInfo(this.SOUND_SWITCH_DEFS[1]);
                    this.m_btn_list[this.BTN_SOUND_INDEX].setSwitchButton(info.fileURL, cloneInfo.fileURL);
                }*/
                this.m_diamondMgr = new FZ.DiamondManager();
                
                this.m_diamondMgr.m_parent = this.m_main_div;
                this.m_diamondMgr.setBubble(false);
                
                FZ.DivManager.addChild(this.m_main_div);
                this.m_load_ui = true;
            }
            else {
                this.m_diamondMgr.setBubble(false);
                
                this.m_main_div.style.display = "inline";
            }
            
            //			//the code just for test.
            //			document.addEventListener("keyup", FZ.Tools.bindWithEvent(this, this.gamekeyup), false);
            this.m_curLevel_div = this.m_ui_list[this.UI_LEVEL_NUM_INDEX];
            this.m_curLevel10_div = this.m_ui_list[this.UI_LEVEL_TEN_INDEX];
            this.m_time_bar_div = this.m_ui_list[this.UI_TIME_BAR_INDEX];
            info = FZ.getImgInfo(this.CUR_UI_DEFS[this.UI_TIME_BAR_INDEX]);
            this.m_time_bar_w = info.w;
            this.m_time_bar_div.style.width = this.m_time_bar_w + "px";
            this.m_diamondMgr.setObserver(this);
            
            if ((FZ.StateDefs.GAME_STATE_MAINMEN === preState) ||
            		(FZ.StateDefs.GAME_STATE_OVER === preState) ||
            (FZ.StateDefs.GAME_STATE_HELP === preState)) {
                if (FZ.GameBase.SaveObject.m_gamein === true) {
                    this.m_diamondMgr.resumeLevel();
                    var hint = FZ.GameBase.SaveObject.m_cur_hintCount;
                }
                else {
                    this.m_diamondMgr.initAllPets(true);
                    var hint = FZ.GameBase.SaveObject.m_hint;
                    
                }
                
                this.m_diamondMgr.setHintCount(hint);
                this.m_btn_list[this.BTN_HINT_INDEX].setEnable(true);
                this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_HINT.png )";
                this.m_hint_num_div[0].style.visibility = "visible";
                this.m_hint_num_div[1].style.visibility = "visible";
                if (hint >= 10) {
                    var num = Math.floor(hint % 10);
                    this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                    num = Math.floor(hint / 10);
                    this.m_hint_num_div[1].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                }
                else 
                    if (hint === 0) {
                        this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_HINT_GREY.png )";
                        this.m_btn_list[this.BTN_HINT_INDEX].setEnable(false);
                        this.m_hint_num_div[0].style.visibility = "hidden";
                        this.m_hint_num_div[1].style.visibility = "hidden";
                    }
                    else {
                        this.m_hint_num_div[1].style.visibility = "hidden";
                        this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + hint + ".png )";
                    }
                this.m_diamondMgr.hidePets();
            }
            
            
            info = FZ.getImgInfo("NUM_LEVEL_" + FZ.GameBase.SaveObject.m_cur_level);
            if(FZ.GameBase.SaveObject.m_cur_level === 10){
            	this.m_curLevel_div.style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
                this.m_curLevel_div.style.display = "inline";
                this.m_curLevel10_div.style.backgroundImage = "url(imgs/NUM_LEVEL_1.png )";
                this.m_curLevel10_div.style.display = "inline";
            }else{
            	this.m_curLevel_div.style.backgroundImage = "url(imgs/" + info.fileURL + ")";
            	this.m_curLevel_div.style.display = "inline";
            	this.m_curLevel10_div.style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
            	this.m_curLevel10_div.style.display = "inline";
            }
           
            if (FZ.GameBase.SaveObject.m_gamein === true) {
                this.m_levelStart = true;
                this.curLevelUsedTime = FZ.GameBase.SaveObject.m_level_usedTime;
                this.m_diamondMgr.showPets();
                for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
                    this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
                }
                this.m_diamondMgr.setParent(this.m_main_div);
            }
            else {
                this.curLevelUsedTime = 0;
                this.m_diamondMgr.setLevel(FZ.GameBase.SaveObject.m_cur_level);
                curLevel = this.m_diamondMgr.getLevel();
                switch(curLevel){
            	case 1:
            	case 2:
            	case 4:
            	case 6:
            	{
            		this.m_levelStart = true;
            		this.m_diamondMgr.showPets();
            		for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
            			this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
            		}
            		this.m_diamondMgr.setParent(this.m_main_div);
            		break;
            	}
            	case 3:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX].style.display = "inline";
            		break;
            	}
            	case 5:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 1].style.display = "inline";
            		break;
            	}
            	case 7:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 2].style.display = "inline";
            		break;
            	}
            	case 8:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 3].style.display = "inline";
            		break;
            	}
            	case 9:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 4].style.display = "inline";
            		break;
            	}
            	case 10:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 5].style.display = "inline";
            		break;
            	}
            	default:
				{
					break;
				}
            }
                
            }
            this.levelStartTime = (new Date()).getTime();
            this.levelCurrentTime = this.levelStartTime;
            this.levelPauseStartTime = this.levelStartTime;
            this.levelPauseEndTime = this.levelStartTime;
            this.levelPauseTime = 0;
//            this.m_str_nomatch_div.style.display = "inline";
            
            this.resetTranslate(0);
           /* if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                this.m_sound = FZ.GameBase.SaveObject.m_sound;
                if (this.m_sound === true) {
                	this.m_btn_list[this.BTN_SOUND_INDEX].setSwitchState(this.m_btn_list[this.BTN_SOUND_INDEX].SWITCH_ON);
               //     FZ.Music.play(FZ.ResourceManager.ResourceLib.BGMusic.Resource, true);
                }
                else {
                	this.m_btn_list[this.BTN_SOUND_INDEX].setSwitchState(this.m_btn_list[this.BTN_SOUND_INDEX].SWITCH_OFF);
               //     FZ.Music.stop();
                }
            }*/
            //this.m_btn_list[this.BTN_HOME_INDEX].m_div.style.display = "none";
            this.m_diamondMgr.setBonusTime(0);
            if (isDebug) {
                document.addEventListener("keyup", FZ.Tools.bindWithEvent(this, this.debugLevel), false);
            }
            setTimeout(function(){
                mySelf.fade_in.call(mySelf, 2000, 1);
            }, 10);
            this.m_timer = setTimeout(FZ.Tools.bind(this, this.checkOver), 0);
            
            this.m_call_time = FZ.Tools.bind(this, this.checkOver);
            
        },
        
        postProcess: function(){
            //			var hintDiv = document.getElementById("strHint");
            this.m_diamondMgr.removeEvent();
            if (this.m_next_state === FZ.StateDefs.GAME_STATE_OVER ||
            	this.m_next_state === FZ.StateDefs.GAME_STATE_RESET ||
            	this.m_next_state === FZ.StateDefs.GAME_STATE_NEXT_LEVEL ||
            	this.m_next_state === FZ.StateDefs.GAME_STATE_GAME_WIN) {
                this.m_main_div.style.display = "inline";
                //				hintDiv.value = "show game in next = " + this.m_next_state;
            }
            else {
                this.m_main_div.style.display = "none";
                //				hintDiv.value = "exit game in";
                this.fade_out(2000, 0, 0);
            }
            
        },
        
        mouseHandler: function(evt){
            //evt.preventDefault();
            FZ.EventRemove(this, this.m_main_div, FZ.EVENT_DEF.T_START, this.m_call_tStart);
            FZ.EventRemove(this, this.m_main_div, FZ.EVENT_DEF.M_CLICK, this.m_call_mClick);
            
            this.m_levelStart = true;
            this.m_diamondMgr.showPets();
            for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
                this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
            }
            this.levelStartTime = (new Date()).getTime();
            this.levelCurrentTime = this.levelStartTime;
            this.levelPauseStartTime = this.levelStartTime;
            this.levelPauseEndTime = this.levelStartTime;
            this.levelPauseTime = 0;
            this.m_levelLeftTime = 0;
            this.m_diamondMgr.setParent(this.m_main_div);
        },
        checkOver: function(){
            var mySelf = this;
            //clearTimeout(this.m_timer);
            ////////////////////
            if (undefined === FZ.GameBase.CurrentState) {
                return;
            }
            if (FZ.StateDefs.GAME_STATE_GAME_IN !== FZ.GameBase.CurrentState.StateName) {
                clearTimeout(this.m_timer);
                return;
            }
            var index = 0;
            var level = this.m_diamondMgr.getLevel();
            if (!this.m_levelStart) {
                var time = Math.floor((new Date()).getTime() - this.levelCurrentTime) / 1000;
                var isTouched = false;
               //   this.m_ui_list[this.UI_ARROW_START_INDEX + level - 3].style.display = "inline";
                var scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(FZ.GameBase.SaveObject.score + this.m_diamondMgr.getScore());
                for(var index = 0; index < scoreNum.length; index++){
                	this.m_ui_list[this.UI_SCORE_START_INDEX + 5 - scoreNum.length + index].style.backgroundImage = "url(imgs/NUM_LEVEL_" + scoreNum[scoreNum.length - 1- index] + ".png)";
                }
                if(scoreNum.length < 5){
                	for(var index = 0; index < 5 - scoreNum.length ; index++){
                		this.m_ui_list[this.UI_SCORE_START_INDEX + index].style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
                	}
                }
                switch(level){
            	case 3:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX].style.display = "inline";
            		break;
            	}
            	case 5:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 1].style.display = "inline";
            		break;
            	}
            	case 7:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 2].style.display = "inline";
            		break;
            	}
            	case 8:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 3].style.display = "inline";
            		break;
            	}
            	case 9:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 4].style.display = "inline";
            		break;
            	}
            	case 10:
            	{
            		this.m_levelStart = false;
                    this.m_diamondMgr.hidePets();
            		this.m_ui_list[this.UI_ARROW_START_INDEX + 5].style.display = "inline";
            		break;
            	}
            	default:
				{
					break;
				}
            }
                //                FZ.EventRemove(this, this.m_main_div, FZ.EVENT_DEF.T_START, this.m_call_tStart);
                //                FZ.EventRemove(this, this.m_main_div, FZ.EVENT_DEF.M_CLICK, this.m_call_mClick);               
                if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
                    if (null === this.m_call_tStart) {
                        FZ.EventHandler(this, this.m_main_div, FZ.EVENT_DEF.T_START, this.mouseHandler);
                    }
                }
                else {
                    if (null === this.m_call_mClick) {
                        FZ.EventHandler(this, this.m_main_div, FZ.EVENT_DEF.M_CLICK, this.mouseHandler);
                    }
                }
                if (time > 3) {
                    this.m_levelStart = true;
                    this.m_diamondMgr.showPets();
                    for (var index = 0; index < this.UI_ARROW_KINDS; index++) {
                        this.m_ui_list[this.UI_ARROW_START_INDEX + index].style.display = "none";
                    }
                    this.levelStartTime = (new Date()).getTime();
                    this.levelCurrentTime = this.levelStartTime;
                    this.levelPauseStartTime = this.levelStartTime;
                    this.levelPauseEndTime = this.levelStartTime;
                    this.levelPauseTime = 0;
                    this.m_levelLeftTime = 0;
                    this.m_diamondMgr.setParent(this.m_main_div);
                }
                //                this.m_timer = setTimeout(FZ.Tools.bind(this, this.checkOver), 200);
                this.m_timer = setTimeout(mySelf.m_call_time, 200);
                this.m_diamondMgr.setBubble(true);
                return;
            }
            if (this.m_isNoMatch === true) {
                this.m_str_nomatch_div.style.display = "inline";
                var curTime = (new Date()).getTime();
                if (Math.floor(curTime - this.levelCurrentTime)/1000 > 2) {
                    this.m_diamondMgr.ResetPosition();
                    if (!this.m_diamondMgr.searchHasMatch()) {
                        this.m_diamondMgr.ResetTwoPosition();
                    }
                    this.m_isNoMatch = false;
                    this.levelPauseTime += 3200;
                    this.m_str_nomatch_div.style.display = "none";
                }
                //                this.m_timer = setTimeout(FZ.Tools.bind(this, this.checkOver), 100);
                this.m_timer = setTimeout(mySelf.m_call_time, 200);
                return;
            }
            
            if (this.m_gamePause || this.pageHiddin) {
            	this.m_timer = setTimeout(FZ.Tools.bind(this, this.checkOver), 100);
                return;
            }
            if(this.m_showPage === true && FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD){
            	this.m_showPage = false;
            	this.levelPauseEndTime = (new Date()).getTime();
            	this.levelPauseTime += this.levelPauseEndTime - this.levelPauseStartTime;
            }	
            level = FZ.GameBase.SaveObject.m_cur_level;
			
            var time = Math.floor(((new Date()).getTime() - this.levelPauseTime - this.levelStartTime) / 1000 + this.curLevelUsedTime);
            var perSecLen = (this.m_time_bar_w / FZ.GameDefs.LEVEL_TIME[FZ.GameBase.SaveObject.m_cur_level]);
            
            time -= this.m_diamondMgr.getBonusTime(); 
            if (time >= FZ.GameDefs.LEVEL_TIME[FZ.GameBase.SaveObject.m_cur_level]) {
                time = FZ.GameDefs.LEVEL_TIME[FZ.GameBase.SaveObject.m_cur_level];
            }else if(time < 0){
            	time = 0;
           } 
            var showW = (FZ.GameDefs.LEVEL_TIME[level] - time) * perSecLen;
            
            this.m_time_bar_div.style.width = showW + "px";
            
             var scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(FZ.GameBase.SaveObject.score + this.m_diamondMgr.getScore());
            for(var index = scoreNum.length - 1; index >= 0 ; index--){
            	this.m_ui_list[this.UI_SCORE_START_INDEX + 5 - scoreNum.length + index].style.backgroundImage = "url(imgs/NUM_LEVEL_" + scoreNum[scoreNum.length - 1- index] + ".png)";
            	}
            if(scoreNum.length < 5){
            	for(var index = 0; index < 5 - scoreNum.length ; index++){
            		this.m_ui_list[this.UI_SCORE_START_INDEX + index].style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
            	}
            }
            this.m_level_usedTime = time;
            if ((FZ.GameDefs.LEVEL_TIME[level] <= time)) {
                //game over.
            	 var score = FZ.GameBase.SaveObject.score;
                 var levelscore = this.m_diamondMgr.getScore();
                this.m_timer = setTimeout(FZ.Tools.bind(this, this.setGameOver), levelscore + score);
                this.m_diamondMgr.setBubble(true);
                return;
            }
            else {
            	this.m_timer = setTimeout(mySelf.m_call_time, 1500);
            	this.m_diamondMgr.saveLevel();
            }
        },
        checkWin: function(){
            var level = this.m_diamondMgr.getLevel();
			//console.log(level);
			myPlayLevel = level;
            var time = (((new Date()).getTime() - this.levelPauseTime - this.levelStartTime) / 1000 + this.curLevelUsedTime);
            if (this.m_diamondMgr.getLeftPet() === 0) {
                //into next level
                
                var score = FZ.GameBase.SaveObject.score;
                var timeBonus = (FZ.GameDefs.LEVEL_TIME[level] - this.m_level_usedTime) * 30;
                var levelscore = this.m_diamondMgr.getScore() + timeBonus ;
                var totalUsedTime = FZ.GameBase.SaveObject.m_usedTime + this.m_level_usedTime;
                var levelUsedHint = FZ.GameBase.SaveObject.m_hint - this.m_diamondMgr.getHintCount();
                FZ.GameBase.SaveObject.m_usedTime = totalUsedTime;
                var totalUsedHint = FZ.GameBase.SaveObject.m_totalUsedHint + levelUsedHint;
                FZ.GameBase.SaveObject.m_totalUsedHint = totalUsedHint;
                var scoreNum = FZ.AG.SearchSpecialPath.setScoreNum(FZ.GameBase.SaveObject.score + levelscore);
				myPlayLevelScore = FZ.GameBase.SaveObject.score + levelscore;
                for(var index = scoreNum.length - 1; index >= 0 ; index--){
                	this.m_ui_list[this.UI_SCORE_START_INDEX + 5 - scoreNum.length + index].style.backgroundImage = "url(imgs/NUM_LEVEL_" + scoreNum[scoreNum.length - 1- index] + ".png)";
                }
                if(scoreNum.length < 5){
                	for(var index = 0; index < 5 - scoreNum.length ; index++){
                		this.m_ui_list[this.UI_SCORE_START_INDEX + index].style.backgroundImage = "url(imgs/NUM_LEVEL_0.png)";
                	}
                }
                if (level === FZ.GameDefs.MAX_LEVEL_RANK) {
                    clearTimeout(this.m_timer);
                    this.m_diamondMgr.setBubble(false);
                    this.m_next_state = FZ.StateDefs.GAME_STATE_GAME_WIN;
                    this.pause();
                    FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_GAME_WIN, levelscore + score, totalUsedTime, totalUsedHint);
                    FZ.GameBase.SaveObject.pass = true;
                    FZ.GameBase.SaveObject.score += levelscore;
                    FZ.GameBase.SaveObject.m_hint = this.m_diamondMgr.getHintCount();// + FZ.GameDefs.LEVEL_HINT_NUMBER[level];
                    FZ.GameBase.saveGame();
                    return;
                }
                else {
                    clearTimeout(this.m_timer);
                    this.m_diamondMgr.setBubble(false);
                    this.m_next_state = FZ.StateDefs.GAME_STATE_NEXT_LEVEL;
                    this.pause();
                    FZ.GameBase.pushState(this.StateName);
                    FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_NEXT_LEVEL, levelscore, timeBonus,levelUsedHint);
                    FZ.GameBase.SaveObject.score += levelscore;
                    FZ.GameBase.SaveObject.m_cur_level = level + 1;
                    if(levelUsedHint < FZ.GameDefs.LEVEL_HINT_NUMBER[level]){
                    	FZ.GameBase.SaveObject.m_hint = 1 + FZ.GameDefs.LEVEL_HINT_NUMBER[level+1];
                    }else{
                    	FZ.GameBase.SaveObject.m_hint = FZ.GameDefs.LEVEL_HINT_NUMBER[level+1];
                    }
                    
                    FZ.GameBase.saveGame();
                    return;
                }
                
            }
           
        },
        checkNoMatch: function(){
            if (!this.m_diamondMgr.searchHasMatch()) {
                this.m_isNoMatch = true;
            }
            if (this.m_isNoMatch) {
                this.levelCurrentTime = (new Date()).getTime();
                
            }
        },
        setGameOver: function(){
        	this.m_diamondMgr.setBubble(false);
            clearTimeout(this.m_timer);
            this.m_next_state = FZ.StateDefs.GAME_STATE_OVER;
            this.pause();
            var levelscore = this.m_diamondMgr.getScore();
        	var score = FZ.GameBase.SaveObject.score;
		var t_score = score + levelscore;
            FZ.GameBase.pushState(this.StateName);
            //FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_OVER, levelscore + score);
            FZ.GameBase.SaveObject.score = 0;
            FZ.GameBase.SaveObject.m_cur_level = 1;
            FZ.GameBase.SaveObject.m_hint = FZ.GameDefs.LEVEL_HINT_NUMBER[1];
            FZ.GameBase.SaveObject.m_totalUsedHint = 0;
            FZ.GameBase.SaveObject.m_gamein = false;
            FZ.GameBase.SaveObject.m_cur_score = 0;
            FZ.GameBase.SaveObject.m_cur_hintCount = FZ.GameDefs.LEVEL_HINT_NUMBER[1];
            FZ.GameBase.SaveObject.m_cur_left_pet = FZ.GameDefs.ALL_PET_NUM;
            FZ.GameBase.SaveObject.m_level_usedTime = 0;
            FZ.GameBase.SaveObject.m_usedTime = 0;
            //FZ.GameBase.saveGame();
		Gamehub.Score.submit(t_score);
		
        },
        
        setNextLevel: function(levelscore, totalscore){
            clearTimeout(this.m_timer);
            this.m_diamondMgr.setBubble(false);
            this.m_next_state = FZ.StateDefs.GAME_STATE_NEXT_LEVEL;
            this.pause();
            FZ.GameBase.pushState(this.StateName);
            FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_NEXT_LEVEL, levelscore, totalscore);
            
        },
        setGameWin: function(levelscore, totalscore){
            clearTimeout(this.m_timer);
            this.m_diamondMgr.setBubble(false);
            this.m_next_state = FZ.StateDefs.GAME_STATE_GAME_WIN;
            this.pause();
            FZ.GameBase.pushState(this.StateName);
            FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_GAME_WIN, levelscore, totalscore);
            
        },
        
        buttonClick: function(btn){
            if (undefined === FZ.GameBase.CurrentState) {
                return;
            }
            if (FZ.StateDefs.GAME_STATE_GAME_IN !== FZ.GameBase.CurrentState.StateName) {
            
                return;
            }
            if (this.m_isNoMatch === true) {
                return;
            }
            /*if (this.m_btn_list[this.BTN_HOME_INDEX] === btn) {
            	this.m_gamePause = !this.m_gamePause;
            	//this.m_btn_list[this.BTN_HOME_INDEX].m_div.style.display = "none";
            	this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.display = "inline";
            	var curHint = this.m_diamondMgr.getHintCount();
            	if(curHint > 10){
            		this.m_hint_num_div[0].style.visibility = "visible";
                    this.m_hint_num_div[1].style.visibility = "visible";
            	}else if(curHint === 0){
            		this.m_hint_num_div[0].style.visibility = "hidden";
                    this.m_hint_num_div[1].style.visibility = "hidden";
            	}else{
            		this.m_hint_num_div[0].style.visibility = "visible";
            		this.m_hint_num_div[1].style.visibility = "hidden";
            	}
            	
            	if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
            		this.m_btn_list[this.BTN_SOUND_INDEX].m_div.style.display = "inline";
            	}
                this.m_pause_div.style.display = "none";
                this.m_diamondMgr.m_reset_finished = true;
                if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                
                    if (FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].SWITCH_OFF === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_btn_state) {
                        FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_SOUND_OFF.png)";
                    }
                    if (FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].SWITCH_ON === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_btn_state) {
                        FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_SOUND.png)";
                    }
                }
                this.m_btn_list[this.BTN_PAUSE_INDEX].setSwitchState(this.m_btn_list[this.BTN_PAUSE_INDEX].SWITCH_ON);
                this.levelPauseEndTime = (new Date()).getTime();
                this.levelPauseTime += this.levelPauseEndTime - this.levelPauseStartTime;
                //
                this.m_next_state = FZ.StateDefs.GAME_STATE_MAINMEN;
                
                this.m_diamondMgr.setBubble(false);
                
                this.levelPauseStartTime = (new Date()).getTime();
                FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
	              this.pause();
               FZ.GameBase.pushState(this.StateName);
                FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_RESET);
            }
            else */
                if (this.m_btn_list[this.BTN_HINT_INDEX] === btn) {
                
                    this.m_diamondMgr.setBubble(false);
                    
                    if (this.m_gamePause) {
                        return;
                    }
                    if (this.m_diamondMgr.getHintCount() > 0) {
                        if (true === this.m_diamondMgr.searchHint()) {
                            var hint = this.m_diamondMgr.getHintCount();
                            this.m_hint_num_div[0].style.visibility = "visible";
                            this.m_hint_num_div[1].style.visibility = "visible";
                            if (hint >= 10) {
                                var num = Math.floor(hint % 10);
                                this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                                var num = Math.floor(hint / 10);
                                this.m_hint_num_div[1].style.backgroundImage = "url(imgs/number_hint_" + num + ".png )";
                            }
                            else {
                                this.m_hint_num_div[1].style.visibility = "hidden";
                                this.m_hint_num_div[0].style.backgroundImage = "url(imgs/number_hint_" + hint + ".png )";
                            }
                            
                        }
                    }
                    if ((this.m_diamondMgr.getHintCount()) === 0) {
                        btn.setEnable(false);
                        btn.m_div.style.backgroundImage = "url(imgs/BTN_HINT_GREY.png )";
                        this.m_hint_num_div[0].style.visibility = "hidden";
                        this.m_hint_num_div[1].style.visibility = "hidden";
                    }
                }
                else 
                    if (this.m_btn_list[this.BTN_PAUSE_INDEX] === btn) {
                    	this.m_gamePause = !this.m_gamePause;
                        if (this.m_gamePause === true) {
                        	
                        	//this.m_btn_list[this.BTN_HOME_INDEX].m_div.style.display = "inline";
                        	//this.m_btn_list[this.BTN_HOME_INDEX].setEnable(true);
                        	this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.display = "none";
                        	this.m_hint_num_div[0].style.visibility = "hidden";
                            this.m_hint_num_div[1].style.visibility = "hidden";
                        	/*if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                        		this.m_btn_list[this.BTN_SOUND_INDEX].m_div.style.display = "none";
                        	}*/
                            this.levelPauseStartTime = (new Date()).getTime();
                            this.m_pause_div.style.display = "inline";
                            btn.setSwitchState(btn.SWITCH_OFF);
                            this.m_diamondMgr.m_reset_finished = false;
                            this.m_diamondMgr.setBubble(false);
                            this.m_diamondMgr.hidePets();
                        }
                        else {
                        	this.m_diamondMgr.showPets();
                            //	this.m_gamePause = false;
                        	//this.m_btn_list[this.BTN_HOME_INDEX].m_div.style.display = "none";
                        	this.m_btn_list[this.BTN_HINT_INDEX].m_div.style.display = "inline";
                        	var curHint = this.m_diamondMgr.getHintCount();
                        	if(curHint > 10){
                        		this.m_hint_num_div[0].style.visibility = "visible";
                                this.m_hint_num_div[1].style.visibility = "visible";
                        	}else if(curHint === 0){
                        		this.m_hint_num_div[0].style.visibility = "hidden";
                                this.m_hint_num_div[1].style.visibility = "hidden";
                        	}else{
                        		this.m_hint_num_div[0].style.visibility = "visible";
                        		this.m_hint_num_div[1].style.visibility = "hidden";
                        	}
                        /*	
                        	if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
                        		this.m_btn_list[this.BTN_SOUND_INDEX].m_div.style.display = "inline";
                        	}
                          */  this.m_pause_div.style.display = "none";
                            this.m_diamondMgr.m_reset_finished = true;
           //                 FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HOME_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_HOME.png)";
                            if ((this.m_diamondMgr.getHintCount()) !== 0) {
                                FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HINT_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_HINT.png)";
                            }
                            /*if (FZ.Game.GameState.BTN_SOUND_INDEX !== undefined) {
                            
                                if (FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].SWITCH_OFF === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_btn_state) {
                                    FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_SOUND_OFF.png)";
                                }
                                if (FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].SWITCH_ON === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_btn_state) {
                                    FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_SOUND_INDEX].m_div.style.backgroundImage = "url(imgs/BTN_SOUND.png)";
                                }
                            }*/
                            btn.setSwitchState(btn.SWITCH_ON);
                            
                            this.levelPauseEndTime = (new Date()).getTime();
                            this.levelPauseTime += this.levelPauseEndTime - this.levelPauseStartTime;
                        //     btn.m_div.style.backgroundImage = "url(imgs/" + btn.m_img_list[0] + ")";
                        }
                        this.m_diamondMgr.saveLevel();
                    }/*
                    else 
                        if (this.m_btn_list[this.BTN_SOUND_INDEX] !== undefined && this.m_btn_list[this.BTN_SOUND_INDEX] === btn) {
                            if (this.m_gamePause) {
                                return;
                            }
                            this.m_sound = !this.m_sound;
                            
                            if (this.m_sound) {
                                btn.setSwitchState(btn.SWITCH_ON);
                                FZ.Music.setMute(false);
                            }
                            else {
                                btn.setSwitchState(btn.SWITCH_OFF);
                                FZ.Music.setMute(true);
                            }
                            FZ.GameBase.SaveObject.m_sound = this.m_sound;
                            FZ.GameBase.saveGame();
                        }*/
        },
        
        debugLevel: function(){
            var level = this.m_diamondMgr.getLevel();
            var levelscore = this.m_diamondMgr.getScore() + this.m_levelLeftTime * 20;
            
            if (level < 9) {
                FZ.GameBase.SaveObject.m_cur_level = level + 1;
            }
            
            if (level === 9) {
                clearTimeout(this.m_timer);
                this.m_diamondMgr.setBubble(false);
                this.m_next_state = FZ.StateDefs.GAME_STATE_GAME_WIN;
                this.pause();
                FZ.GameBase.pushState(this.StateName);
                FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_GAME_WIN, this.m_levelLeftTime, levelscore);
                return;
            }
            else {
                clearTimeout(this.m_timer);
                this.m_diamondMgr.setBubble(false);
                this.m_next_state = FZ.StateDefs.GAME_STATE_NEXT_LEVEL;
                this.pause();
                FZ.GameBase.pushState(this.StateName);
                FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_NEXT_LEVEL, this.m_levelLeftTime, levelscore);
                return;
            }
        },
        
        //		update : function() {
        //			var mySelf = this;
        //			switch(substate) {
        //				case "init":
        //				{
        //					//function_init();
        //					//{
        //					// if(time > 3) {
        //					//    substate = "playing";
        //					// }
        //					//}
        //					break;
        //				}
        //				case "playing":
        //				{
        //					//function_playing();
        //					//{
        //					//    this.checkover();
        //					//	  {
        //					//			time < 0;
        //					//    }
        //					//}
        //					break;
        //				}
        //				case "end":
        //				{
        //					//function_end();
        //					break;
        //				}
        //				default: 
        //				{
        //					//function_default();
        //					//
        //					break;
        //				}
        //			}
        //			setTimeout(function() {
        //				mySelf.update();
        //			}, 1000);
        //		},
        pageHide: function(e){
//        	var leftTimeDiv = document.getElementById("strLeftTime");
//			leftTimeDiv.value = "HIde"+Math.random();
            if (FZ.Game.GameState.m_diamondMgr === null) {
                return;
            }
            FZ.Game.GameState.m_diamondMgr.m_reset_finished = false;
            FZ.Game.GameState.m_diamondMgr.setBubble(false);
            FZ.Game.GameState.levelPauseStartTime = (new Date()).getTime();
            FZ.Game.GameState.pageHiddin = true;
        },
        pageShow: function(e){
        	FZ.Game.GameState.m_showPage = true;
//        	var leftTimeDiv = document.getElementById("strLeftTime");
//        	leftTimeDiv.value ="show"+Math.random();
            if (FZ.Game.GameState.m_diamondMgr === null) {
                return;
            }
            FZ.Game.GameState.m_diamondMgr.m_reset_finished = true;
//            FZ.Game.GameState.levelPauseEndTime = (new Date()).getTime();
//            FZ.Game.GameState.levelPauseTime += FZ.Game.GameState.levelPauseEndTime - FZ.Game.GameState.levelPauseStartTime;
            FZ.Game.GameState.pageHiddin = false;
            
        }
        
    }, FZ.BaseState))();
    if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
    	window.addEventListener("pagehide", FZ.Game.GameState.pageHide, false);
    	window.addEventListener("pageshow", FZ.Game.GameState.pageShow, false);
    }
})();