FZ.Diamond = FZ.newClass({


    BLOCK_SPR_LIST: ["farm_1", "farm_2", "farm_3", "farm_4", "farm_5", "farm_6", "farm_7", "farm_8", "farm_9", "farm_10", "farm_11", 
                     "farm_12", "farm_13", "farm_14", "farm_15", "farm_16", "farm_17", "farm_18", "farm_19", "farm_20", "farm_21", 
                     "farm_22", "farm_23", "farm_24", "farm_25", "farm_26", "farm_27", "farm_28", "farm_29", "farm_30", "farm_31","farm_32"
                     ],
    
    m_state: FZ.GameDefs.DREAMPET_INIT,
    m_search_flag: FZ.GameDefs.SEARCH_NONE,
    m_style: -1,
    m_module: -1,
    
    m_line: 0,
    m_col: 0,
    m_x: 0,
    m_y: 0,
    m_dest_x: 0,
    m_dest_y: 0,
    m_fall_time: 0,
    m_fall_speed_x: 0,
    m_fall_speed_y: 0,
    m_fall_x: 0,
    m_fall_y: 0,
    m_turn: FZ.GameDefs.DIAMOND_RORATE_NONE,
    m_angle: 0,
    
    m_spr: null,
    m_flashTime: 0,
    m_worldMatrix: null,
    
    m_back_list: null,
    m_div: null,
    m_div_focus: null,
    m_div_hint: null,
    m_callback: null,
    m_anim_callback: null,
    m_flash_count: FZ.GameDefs.FLASH_COUNT,
    init: function(line, col, style, state){
    
        this.m_search_flag = FZ.GameDefs.SEARCH_NONE;
        this.m_line = line;
        this.m_col = col;
        
        this.m_x = this.m_col * FZ.GameDefs.GRID_WIDTH + FZ.GameDefs.DREAMPET_OFFSET_X;
        this.m_y = this.m_line * FZ.GameDefs.GRID_HEIGHT + FZ.GameDefs.DREAMPET_OFFSET_Y;
        this.m_dest_x = this.m_x;
        this.m_dest_y = this.m_y;
        
        this.m_fall_time = 0;
        this.m_fall_speed_x = 0;
        this.m_fall_speed_y = 0;
        
        this.m_fall_x = this.m_x;
        this.m_fall_y = this.m_y;
        this.m_turn = FZ.GameDefs.DIAMOND_RORATE_NONE;
        
        this.m_style = Math.floor(style);
        this.m_state = Math.floor(state);
        this.m_flashTime = 0;
        this.m_worldMatrix = new FZ.Math.Matrix3();
        this.m_worldMatrix.identity();
        
        
        switch (this.m_style) {
            case FZ.GameDefs.PET_TYPE_0:{
                this.m_module = FZ.GameDefs.PET_1;
                break;
            }
            case FZ.GameDefs.PET_TYPE_1:{
                this.m_module = FZ.GameDefs.PET_2;
                break;
            }
            case FZ.GameDefs.PET_TYPE_2:{
                this.m_module = FZ.GameDefs.PET_3;
                break;
            }
            case FZ.GameDefs.PET_TYPE_3:{
                this.m_module = FZ.GameDefs.PET_4;
                break;
            }
            case FZ.GameDefs.PET_TYPE_4:{
                this.m_module = FZ.GameDefs.PET_5;
                break;
            }
            case FZ.GameDefs.PET_TYPE_5:{
                this.m_module = FZ.GameDefs.PET_6;
                break;
            }
            case FZ.GameDefs.PET_TYPE_6:{
                this.m_module = FZ.GameDefs.PET_7;
                break;
            }
            case FZ.GameDefs.PET_TYPE_7:{
                this.m_module = FZ.GameDefs.PET_8;
                break;
            }
            case FZ.GameDefs.PET_TYPE_8:{
                this.m_module = FZ.GameDefs.PET_9;
                break;
            }
            case FZ.GameDefs.PET_TYPE_9:{
                this.m_module = FZ.GameDefs.PET_10;
                break;
            }
            case FZ.GameDefs.PET_TYPE_10:{
                this.m_module = FZ.GameDefs.PET_11;
                break;
            }
            case FZ.GameDefs.PET_TYPE_11:{
                this.m_module = FZ.GameDefs.PET_12;
                break;
            }
            case FZ.GameDefs.PET_TYPE_12:{
                this.m_module = FZ.GameDefs.PET_13;
                break;
            }
            case FZ.GameDefs.PET_TYPE_13:{
                this.m_module = FZ.GameDefs.PET_14;
                break;
            }
            case FZ.GameDefs.PET_TYPE_14:{
                this.m_module = FZ.GameDefs.PET_15;
                break;
            }
            case FZ.GameDefs.PET_TYPE_15:{
                this.m_module = FZ.GameDefs.PET_16;
                break;
            }
            case FZ.GameDefs.PET_TYPE_16:{
                this.m_module = FZ.GameDefs.PET_17;
                break;
            }
            case FZ.GameDefs.PET_TYPE_17:{
                this.m_module = FZ.GameDefs.PET_18;
                break;
            }
            case FZ.GameDefs.PET_TYPE_18:{
                this.m_module = FZ.GameDefs.PET_19;
                break;
            }
            case FZ.GameDefs.PET_TYPE_19:{
                this.m_module = FZ.GameDefs.PET_20;
                break;
            }
            case FZ.GameDefs.PET_TYPE_20:{
                this.m_module = FZ.GameDefs.PET_21;
                break;
            }
            case FZ.GameDefs.PET_TYPE_21:{
                this.m_module = FZ.GameDefs.PET_22;
                break;
            }
            case FZ.GameDefs.PET_TYPE_22:{
                this.m_module = FZ.GameDefs.PET_23;
                break;
            }
            case FZ.GameDefs.PET_TYPE_23:{
                this.m_module = FZ.GameDefs.PET_24;
                break;
            }
            case FZ.GameDefs.PET_TYPE_24:{
                this.m_module = FZ.GameDefs.PET_25;
                break;
            }
            case FZ.GameDefs.PET_TYPE_25:{
                this.m_module = FZ.GameDefs.PET_26;
                break;
            }
            case FZ.GameDefs.PET_TYPE_26:{
                this.m_module = FZ.GameDefs.PET_27;
                break;
            }
            case FZ.GameDefs.PET_TYPE_27:{
                this.m_module = FZ.GameDefs.PET_28;
                break;
            }
            case FZ.GameDefs.PET_TYPE_28:{
                this.m_module = FZ.GameDefs.PET_29;
                break;
            }
            case FZ.GameDefs.PET_TYPE_29:{
                this.m_module = FZ.GameDefs.PET_30;
                break;
            }
            case FZ.GameDefs.PET_TYPE_30:{
                this.m_module = FZ.GameDefs.PET_31;
                break;
            }
            case FZ.GameDefs.PET_TYPE_31:{
                this.m_module = FZ.GameDefs.PET_32;
                break;
            }
            case FZ.GameDefs.PET_TYPE_32:{
                this.m_module = FZ.GameDefs.PET_33;
                break;
            }
            case FZ.GameDefs.PET_TYPE_33:{
                this.m_module = FZ.GameDefs.PET_34;
                break;
            }
            case FZ.GameDefs.PET_TYPE_34:{
                this.m_module = FZ.GameDefs.PET_35;
                break;
            }
            case FZ.GameDefs.PET_TYPE_35:{
                this.m_module = FZ.GameDefs.PET_36;
                break;
            }
            case FZ.GameDefs.PET_TYPE_36:{
                this.m_module = FZ.GameDefs.PET_37;
                break;
            }
            case FZ.GameDefs.PET_TYPE_37:{
                this.m_module = FZ.GameDefs.PET_38;
                break;
            }
            case FZ.GameDefs.PET_TYPE_38:{
                this.m_module = FZ.GameDefs.PET_39;
                break;
            }
            case FZ.GameDefs.PET_TYPE_39:{
                this.m_module = FZ.GameDefs.PET_40;
                break;
            }
            default:
                {
                    this.m_module = FZ.GameDefs.PET_1;
                    break;
                }
        }
        var url = null;
        var info = null;
        
        
        
        this.m_back_list = [];
        info = FZ.getImgInfo(this.BLOCK_SPR_LIST[this.m_module]);
        url = "url(imgs/" + info.fileURL + ")";
        this.m_back_list.push(url);
        this.m_callback = null;
        
        if (FZ.GameDefs.DREAMPET_REMOVE === state) {
            this.m_div = document.createElement("div");
            this.m_div_focus = document.createElement("div");
            this.m_div_hint = document.createElement("div");
            return;
        }
        
        this.setCss();
        //create focus div	
        var num = this.m_module + 1;
        this.m_div_focus = document.createElement("div");
        this.m_div_focus.style.width = FZ.GameDefs.GRID_WIDTH + "px";
        this.m_div_focus.style.height = FZ.GameDefs.GRID_HEIGHT + "px";
        this.m_div_focus.style.position = "absolute";
        this.m_div_focus.style.backgroundRepeat = "no-repeat";
        
        this.m_div_focus.style.backgroundImage = "url(imgs/farm/" + num + "_touch.png)";
        this.hidden();
//        this.m_div_focus.style.zIndex = 3;
        this.m_div_focus.style.webkitTransition = "opacity, translate";
        this.m_div.appendChild(this.m_div_focus);
        //create hint div	
        this.m_div_hint = document.createElement("div");
        this.m_div_hint.style.width = FZ.GameDefs.GRID_WIDTH + "px";
        this.m_div_hint.style.height = FZ.GameDefs.GRID_HEIGHT + "px";
        this.m_div_hint.style.position = "absolute";
        this.m_div_hint.style.backgroundRepeat = "no-repeat";
        this.m_div_hint.style.backgroundImage = "url(imgs/farm/" + num + "_touch.png)";
        this.hiddenHint();
//        this.m_div_hint.style.zIndex = 3;
        this.m_div_hint.style.webkitTransition = "opacity, translate";
        this.m_div.appendChild(this.m_div_hint);
        this.setPetFocus();
        
    },
    setCss: function(){
        this.m_div = document.createElement("div");
        this.m_div.style.width = FZ.GameDefs.GRID_WIDTH + 2 + "px";
        this.m_div.style.height = FZ.GameDefs.GRID_HEIGHT +2+ "px";
        this.m_div.style.position = "absolute";
        this.m_div.style.webkitTransition = "opacity, left, top, translate";
        this.m_div.style.webkitTransition = "opacity, translate";
        //		this.m_div.style.left = this.m_x + "px";
        //		this.m_div.style.top = this.m_y + "px";
        this.m_div.style.backgroundRepeat = "no-repeat";
        //        this.m_div.style.webkitTransform = "translate(" + (this.m_x) + "px, " + (this.m_y) + "px)";
        this.m_div.style.left = (this.m_x) + "px";
        this.m_div.style.top = (this.m_y) + "px";
    },
    fade_in: function(){
        this.m_div.style.webkitTransitionDuration = FZ.GameDefs.PET_FLICKER_TIME + "ms";
        this.m_div.style.opacity = 1;
        this.m_timer = setTimeout(FZ.Tools.bind(this, this.fade_out), FZ.GameDefs.PET_FLICKER_TIME);
        
    },
    flash: function(){
        if (this.m_flash_count > 0) {
            this.m_div_focus.style.webkitTransitionDuration = FZ.GameDefs.PET_FLICKER_FOCUS_TIME + "ms";
            this.m_div_focus.style.opacity = 0;
            this.m_flash_count--;
            this.m_timer = setTimeout(FZ.Tools.bind(this, this.flash_again), FZ.GameDefs.PET_FLICKER_FOCUS_TIME);
        }
    },
    flash_again: function(){
        this.m_div_focus.style.webkitTransitionDuration = FZ.GameDefs.PET_FLICKER_FOCUS_TIME + "ms";
        this.m_div_focus.style.opacity = 1;
        this.m_timer = setTimeout(FZ.Tools.bind(this, this.flash), FZ.GameDefs.PET_FLICKER_FOCUS_TIME);
    },
    fade_out: function(){
        if (this.m_flash_count > 0) {
            this.m_div.style.webkitTransitionDuration = FZ.GameDefs.PET_FLICKER_TIME + "ms";
            this.m_div.style.opacity = 0;
            this.m_flash_count--;
            this.m_timer = setTimeout(FZ.Tools.bind(this, this.fade_in), FZ.GameDefs.PET_FLICKER_TIME);
        }
        else {
        
            if (FZ.GameDefs.DREAMPET_FLASH_HINT === this.m_state) {
                this.setState(FZ.GameDefs.DREAMPET_INIT);
                this.hiddenHint();
            }
           
        }
    },
    fadeOut: function(){
        this.m_div.style.webkitTransitionDuration = "500ms";
        this.m_div.style.opacity = 0;
        this.m_timer = setTimeout(FZ.Tools.bind(this, this.fadeEnd), 500);
    },
    
    fadeEnd: function(){
        this.setState(FZ.GameDefs.DREAMPET_REMOVE);
        //this.m_div.style.display = "none";
        this.m_div.style.visibility = "hidden";
    },
    setPetFocus: function(){
        if (FZ.GameDefs.DREAMPET_FLASH === this.m_state) {
            this.m_div.style.backgroundImage = this.m_back_list[0];
            //   this.m_div.style.webkitTransition = "opacity";
            //    this.m_div.style.webkitTransitionDuration = "100ms";
            this.m_div.style.opacity = 1;
            //   this.m_timer = setTimeout(FZ.Tools.bind(this, this.fadeOut), 200);
            this.fadeOut();
        }
        else 
            if (FZ.GameDefs.DREAMPET_FLASH_HINT === this.m_state) {
                this.m_div.style.backgroundImage = this.m_back_list[0];
          //      this.m_div.style.webkitTransition = "opacity";
           //     this.m_div.style.webkitTransitionDuration = 1500 + "ms";
           //     this.m_div.style.opacity = 1;
                this.showHint();
           //     this.m_flash_count = FZ.GameDefs.FLASH_COUNT;
                this.m_timer = setTimeout(FZ.Tools.bind(this,function(){
                		if (FZ.GameDefs.DREAMPET_FLASH_HINT === this.m_state) {
                            this.setState(FZ.GameDefs.DREAMPET_INIT);
                            this.hiddenHint();
                        }else if(this.m_state === FZ.GameDefs.DREAMPET_FOCUS){
                        	this.hiddenHint();
                        }
                }), 1500);
            }
            else 
                if (this.m_state === FZ.GameDefs.DREAMPET_INIT) {
                    this.m_div.style.backgroundImage = this.m_back_list[0];
                }
                else 
                    if (this.m_state === FZ.GameDefs.DREAMPET_FOCUS) {
                         this.m_div.style.backgroundImage = this.m_back_list[0];
                        //		 				this.m_div_focus.style.display = "inline";
                        this.m_div_focus.style.visibility = "visible";
                        //this.m_div.style.webkitTransform = "translate(" + (this.m_x) + "px, " + (this.m_y) + "px)";
                        this.m_div_focus.style.webkitTransitionDuration = FZ.GameDefs.PET_FLICKER_FOCUS_TIME + "ms";
                        this.m_div_focus.style.opacity = 1;
                        this.m_flash_count = FZ.GameDefs.FLASH_FOCUS_COUNT;
                    //    this.m_timer = setTimeout(FZ.Tools.bind(this, this.flash), FZ.GameDefs.PET_FLICKER_FOCUS_TIME +150);
                    
                    }
                    else 
                        if (this.m_state === FZ.GameDefs.DREAMPET_REMOVE) {
                            //this.m_div.style.display = "none";
                            this.m_div.style.visibility = "hidden";
                        //								this.hidden();
                        }
    },
    
    show: function(){
        this.m_div_focus.style.visibility = "visible";
    },
    
    hidden: function(){
        this.m_div_focus.style.visibility = "hidden";
    },
    showHint: function(){
        this.m_div_hint.style.visibility = "visible";
    },
    
    hiddenHint: function(){
        this.m_div_hint.style.visibility = "hidden";
    },
    destroy: function(){
        //this.m_state = FZ.GameDefs.DIAMOND_STATE_DESTORY;
        if ((this.m_div) && (this.m_div.parentNode)) {
            this.m_div.parentNode.removeChild(this.m_div);
        }
        
    },
    getLine: function(){
        return this.m_line;
    },
    getCol: function(){
        return this.m_col;
    },
    setLine: function(line){
        this.m_line = line;
    },
    setCol: function(col){
        this.m_col = col;
    },
    
    getStyle: function(){
        return this.m_style;
    },
    
    getState: function(){
        return this.m_state;
    },
    setStyle: function(style){
        this.m_style = style;
    },
    
    setState: function(state){
        this.m_state = state;
    },
    getSearchFlag: function(){
        return this.m_search_flag;
    },
    
    setSearchFlag: function(flag){
        this.m_search_flag = flag;
    },
    
    
    updatePos: function(){
    
        if (!this.m_div) {
            return;
        }
        this.m_x = FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_col;
        this.m_y = FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_line;
        this.m_div.style.backgroundImage = this.m_back_list[0];
        //this.m_div.style.webkitTransform = "translate(" + (this.m_x) + "px, " + (this.m_y) + "px)";
        this.m_div.style.left = (this.m_x) + "px";
        this.m_div.style.top = (this.m_y) + "px";
        
    }
});