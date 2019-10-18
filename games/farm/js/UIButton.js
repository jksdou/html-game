(function(){
    FZ.UIButton = FZ.newClass({
        SWITCH_ON: 0,
        SWITCH_OFF: 1,
        m_w: 0,
        m_h: 0,
        m_col: 1,
        m_div: null,
        m_img_list: null,
        
        m_call_mOver: null,
        m_call_mOut: null,
        m_call_mMove: null,
        m_call_mClick: null,
        
        m_call_tStart: null,
        m_call_tMove: null,
        m_call_tEnd: null,
        
        m_is_switch: false,
        m_btn_state: 0,
        
        m_observer: null,
        m_enable: true,
        m_clickFlag: false,
        COLOR_BROWN:"#B97F00",
		COLOR_ORANGE:"#FFC72A",
        init: function(w, h, col, url, urlDown){
        
            this.m_col = col;
            this.m_w = w;
            this.m_h = h;
            
            this.m_div = document.createElement("div");
            this.m_div.style.position = "absolute";
            this.m_div.style.width = this.m_w + "px";
            this.m_div.style.height = this.m_h + "px";
            
            this.m_img_list = [];
            this.m_img_list.push(url);
            this.m_img_list.push(urlDown);
            
            this.m_div.style.backgroundRepeat = "no-repeat";
            this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[0] + ")";
            this.m_div.style.backgroundPosition = "0px 0px";
            
            this.m_enable = true;
            
            this.m_is_switch = false;
            
            this.setEnable(this.m_enable);
            this.m_clickFlag = false;
        },
        
        setSwitchButton: function(url, urlDown){
            this.m_is_switch = true;
            this.m_btn_state = this.SWITCH_ON;
            this.m_img_list.push(url);
            this.m_img_list.push(urlDown);
        },
        
        setSwitchState: function(state){
            var index = 0;
            this.m_btn_state = state;
            if (this.SWITCH_OFF === this.m_btn_state) {
                index = 2;
            }
            this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 0] + ")";
        },
        
        setEnable: function(value){
            this.m_enable = value;
            if (this.m_enable) {
                this.addEvent();
            }
            else {
                this.removeEvent();
            }
        },
        
        setPos: function(x, y){
            this.m_div.style.left = x + "px";
            this.m_div.style.top = y + "px";
        },
        
        addEvent: function(){
            this.removeEvent();
            
            if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.T_START, this.mouseHandler);
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.T_MOVE, this.mouseHandler);
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.T_END, this.mouseHandler);
            }
            else {
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.M_OVER, this.mouseHandler);
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.M_MOVE, this.mouseHandler);
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.M_OUT, this.mouseHandler);
                FZ.EventHandler(this, this.m_div, FZ.EVENT_DEF.M_CLICK, this.mouseHandler);
            }
        },
        
        removeEvent: function(){
            if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
            
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.T_START, this.m_call_tStart);
                this.m_call_tStart = null;
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.T_MOVE, this.m_call_tMove);
                this.m_call_tMove = null;
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.T_END, this.m_call_tEnd);
                this.m_call_tEnd = null;
            }
            else {
            
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.M_OVER, this.m_call_mOver);
                this.m_call_mOver = null;
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.M_OUT, this.m_call_mOut);
                this.m_call_mOut = null;
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.M_MOVE, this.m_call_mMove);
                this.m_call_mMove = null;
                FZ.EventRemove(this, this.m_div, FZ.EVENT_DEF.M_CLICK, this.m_call_mClick);
                this.m_call_mClick = null;
            }
        },
        
        addMonitor: function(obj){
            this.m_observer = obj;
        },
        
        removeMonitor: function(){
            this.m_observer = null;
        },
        
        mouseHandler: function(evt){
            var type = "";
            var index = 0;
            
            evt.stopPropagation();
            //evt.preventDefault();
            
            
            if ((this.m_is_switch) && (this.SWITCH_OFF === this.m_btn_state)) {
                index = 2;
            }
            
            if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
                if (FZ.EVENT_DEF.T_START === evt.type) {
                    type = FZ.EVENT_DEF.M_OVER;
//                    this.m_clickFlag = true;
                }
                if (FZ.EVENT_DEF.T_END === evt.type) {
                    type = FZ.EVENT_DEF.M_CLICK;
//                    this.m_clickFlag = true;
                }
            }
            else {
                type = evt.type;
            }
            if (FZ.EVENT_DEF.M_OVER === type) {
                if (FZ.Game.GameState.m_gamePause === true) {
                    if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HOME_INDEX]) {
                        this.m_div.style.backgroundImage = "url(imgs/BTN_MAIN_MENU_ICON_TOUCH.png)";
                    }
                    else 
                        if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HINT_INDEX]) {
                            this.m_div.style.backgroundImage = "url(imgs/BTN_HINT_GREY.png)";
                        }
                        else 
                            if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_PAUSE_INDEX]) {
                                this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 1] + ")";
                                this.m_div.style.color = this.COLOR_BROWN;
                            }
                    
                }
                else {
                    this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 1] + ")";
                    this.m_div.style.color = this.COLOR_BROWN;
                }
                
            }
            else 
                if (FZ.EVENT_DEF.M_OUT === type) {
//                	this.m_clickFlag = true;
                    if (FZ.Game.GameState.m_gamePause === true) {
                        if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HOME_INDEX]) {
                            this.m_div.style.backgroundImage = "url(imgs/BTN_MAIN_MENU_ICON.png)";
                        }
                        else 
                            if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HINT_INDEX]) {
                                this.m_div.style.backgroundImage = "url(imgs/BTN_HINT_GREY.png)";
                            }
                            else 
                                if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_PAUSE_INDEX]) {
                                    this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 0] + ")";
                                    this.m_div.style.color = this.COLOR_ORANGE;
                                }
                    }
                    else {
                        this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 0] + ")";
                        this.m_div.style.color = this.COLOR_ORANGE;
                    }
                    
                }
                else 
                    if (FZ.EVENT_DEF.M_CLICK === type) {
                    	this.m_clickFlag = true;
                        if (FZ.Game.GameState.m_gamePause === true) {
                            if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HOME_INDEX]) {
                                this.m_div.style.backgroundImage = "url(imgs/BTN_MAIN_MENU_ICON.png)";
                            }
                            else 
                                if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_HINT_INDEX]) {
                                    this.m_div.style.backgroundImage = "url(imgs/BTN_HINT_GREY.png)";
                                }
                                else 
                                    if (this === FZ.Game.GameState.m_btn_list[FZ.Game.GameState.BTN_PAUSE_INDEX]) {
                                        this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 0] + ")";
                                        this.m_div.style.color = this.COLOR_ORANGE;
                                    }
                                    
                        }
                        else {
                            this.m_div.style.backgroundImage = "url(imgs/" + this.m_img_list[index + 0] + ")";
                            this.m_div.style.color = this.COLOR_ORANGE;
                        }
                        
                    }
            if ((null !== this.m_observer) && (this.m_observer.buttonClick)) {
                        	if((type === FZ.EVENT_DEF.M_CLICK ||type === FZ.EVENT_DEF.T_END) && this.m_clickFlag){
                        		this.m_observer.buttonClick(this);
                        		this.m_clickFlag = false;
                        	}
                        }
            return false;
        }
   });

})();