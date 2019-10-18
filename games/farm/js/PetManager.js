/**
 * @author liaomengcheng
 */
FZ.GRID_COOR = FZ.newClass({
    line: 0,
    col: 0,
    init: function(){
        this.line = 0;
        this.col = 0;
    }
});
FZ.DiamondManager = FZ.newClass({
    EVT_MOUSE_OVER: "mouseover",
    EVT_MOUSE_MOVE: "mousemove",
    EVT_MOUSE_OUT: "mouseout",
    EVT_MOUSE_CLICK: "click",
    
    m_hintX: 0,
    m_hintY: 0,
    m_hintScore: null,
    m_last_selected: -1,
    //   m_spr: null,
    m_dialog: false,
    m_leftNum: -1,
    m_allPets: null,
    m_missDiamonds: null,
    //    m_worldMatrix: null,
    m_hintCount: 0,
    m_bonus_time: 0,
    m_firstPet: null,
    m_secondPet: null,
    m_PetFirstIndex: 0,
    m_PetSecondIndex: 0,
    m_drawLineTime: 0,
    m_left_pet: 0,
    m_ctx: null,
    m_level: 0,
    m_displayPetsIndex: null,
    m_reset_finished: true,
    m_parent: null,
    m_observer: null,
    m_stop_bubble: false,
    
    m_call_mOver: null,
    m_call_mOut: null,
    m_call_mMove: null,
    m_call_mClick: null,
    
    m_call_tStart: null,
    m_call_tMove: null,
    m_call_tEnd: null,
    m_div_line: [],
    isDebug: false,
    m_debug_div: null,
    init: function(){
        this.m_hintX = 0;
        this.m_hintY = 0;
        this.m_hintScore = "";
        this.m_last_selected = -1;
        //      this.m_spr = null;
        this.m_dialog = false;
        this.m_leftNum = -1;
        //     this.m_worldMatrix = new FZ.Math.Matrix3();
        //     this.m_worldMatrix.identity();
        this.m_allPets = (this.m_allPets || []);
        this.m_missDiamonds = (this.m_missDiamonds || []);
        this.m_hintCount = 0;
        this.m_firstPet = null;
        this.m_secondPet = null;
        this.m_PetFirstIndex = 0;
        this.m_PetSecondIndex = 0;
        this.m_drawLineTime = 0;
        this.m_left_pet = FZ.GameDefs.ALL_PET_NUM;
        
        for (var index = 0; index < 3; ++index) {
            this.m_div_line[index] = document.createElement("div");
            this.m_div_line[index].style.position = "absolute";
            this.m_div_line[index].style.backgroundRepeat = "no-repeat";
            this.m_div_line[index].style.backgroundColor = "#ffff00";
            // this.m_div_line[index].style.display = "none";
            this.m_div_line[index].style.visibility = "hidden";
            FZ.DivManager.addChild(this.m_div_line[index]);
        }
        if (this.isDebug) {
            this.m_debug_div = document.createElement("div");
            this.m_debug_div.style.zIndex = 500;
            this.m_debug_div.style.width = 320 + "px";
            this.m_debug_div.style.height = 40 + "px";
            this.m_debug_div.style.left = 0 + "px";
            this.m_debug_div.style.top = 438 + "px";
            this.m_debug_div.style.position = "absolute";
            this.m_debug_div.style.color = "#ff0";
            this.m_debug_div.style.fontSize = FZ.GameDefs.STATS_FONT_SIZE + "px";
            this.m_debug_div.style.fontFamily = "Arial";
            this.m_debug_div.style.lineHeight = 40 + "px";
            this.m_debug_div.style.textAlign = "center";
            this.m_debug_div.style.innerHTML = "";
            FZ.DivManager.addChild(this.m_debug_div);
        }
    },
    removeEvent: function(){
        if (!this.m_parent) {
            return;
        }
        if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
        
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_START, this.m_call_tStart);
            this.m_call_tStart = null;
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_MOVE, this.m_call_tMove);
            this.m_call_tMove = null;
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_END, this.m_call_tEnd);
            this.m_call_tEnd = null;
            
        }
        else {
        
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_OVER, this.m_call_mOver);
            this.m_call_mOver = null;
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_OUT, this.m_call_mOut);
            this.m_call_mOut = null;
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_MOVE, this.m_call_mMove);
            this.m_call_mMove = null;
            FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_CLICK, this.m_call_mClick);
            this.m_call_mClick = null;
            
        }
    },
    setParent: function(obj){
        //		var that = this;
        
        if (obj) {
            this.m_parent = obj;
            if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.T_START, this.mouseHandler);
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.T_MOVE, this.mouseHandler);
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.T_END, this.mouseHandler);
                
                //				this.m_parent.ontouchstart = this.m_parent.ontouchmove = this.m_parent.ontouchend = function(evt) {
                //					that.mouseHandler.call(that, evt);
                //				};
            }
            else {
            
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.M_OVER, this.mouseHandler);
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.M_MOVE, this.mouseHandler);
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.M_OUT, this.mouseHandler);
                FZ.EventHandler(this, this.m_parent, FZ.EVENT_DEF.M_CLICK, this.mouseHandler);
                
                //				this.m_parent.onclick = this.m_parent.onmousemove = this.m_parent.onmouseout = this.m_parent.onmouseover = function(evt){
                //					that.mouseHandler.call(that, evt);
                //				};
            }
        }
        else 
            if (this.m_parent) {
            
                if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_START, this.m_call_tStart);
                    this.m_call_tStart = null;
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_MOVE, this.m_call_tMove);
                    this.m_call_tMove = null;
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.T_END, this.m_call_tEnd);
                    this.m_call_tEnd = null;
                    
                //				this.m_parent.ontouchstart = null;
                //				this.m_parent.ontouchmove = null;
                //				this.m_parent.ontouchend = null;
                }
                else {
                
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_OVER, this.m_call_mOver);
                    this.m_call_mOver = null;
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_OUT, this.m_call_mOut);
                    this.m_call_mOut = null;
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_MOVE, this.m_call_mMove);
                    this.m_call_mMove = null;
                    FZ.EventRemove(this, this.m_parent, FZ.EVENT_DEF.M_CLICK, this.m_call_mClick);
                    this.m_call_mClick = null;
                    
                //				this.m_parent.onmouseover = null;
                //				this.m_parent.onmouseout = null;
                //				this.m_parent.onmousemove = null;
                //				this.m_parent.onclick = null;
                }
                
            ////			this.m_parent = obj;
            //			if(FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
            //				this.m_parent.ontouchstart = null;
            //				this.m_parent.ontouchmove = null;
            //				this.m_parent.ontouchend = null;
            //			}
            //			else {
            //				this.m_parent.onmouseover = null;
            //				this.m_parent.onmouseout = null;
            //				this.m_parent.onmousemove = null;
            //				this.m_parent.onmouseclick = null;
            //			}	
            }
        
        //	this.createLabels();
    
    },
    
    setBubble: function(value){
        this.m_stop_bubble = value;
    },
    
    setObserver: function(obj){
        this.m_observer = obj;
    },
    setCtx: function(ctx){
        this.m_ctx = ctx;
    },
    
    setASprite: function(spr){
        this.m_spr = spr;
    },
    
    clearAllPets: function(){
        var pet = null;
        while (this.m_allPets.length > 0) {
            pet = this.m_allPets.pop();
            if (pet) {
                pet.destroy();
            }
        }
        
    },
    
    getTouchPetIndex: function(posX, posY){
        var index = 0;
        
        if ((posX < FZ.GameDefs.DREAMPET_OFFSET_X) ||
        (posX > (FZ.GameDefs.DREAMPET_OFFSET_X + (FZ.GameDefs.DREAMPET_NUM_COL + 1) * FZ.GameDefs.GRID_WIDTH)) ||
        (posY < FZ.GameDefs.DREAMPET_OFFSET_Y) ||
        (posY > (FZ.GameDefs.DREAMPET_OFFSET_Y + (FZ.GameDefs.DREAMPET_NUM_LINE + 1) * FZ.GameDefs.GRID_HEIGHT))) {
            return -1;
        }
        var col = (posY - FZ.GameDefs.DREAMPET_OFFSET_Y) / FZ.GameDefs.GRID_HEIGHT;
        var line = (posX - FZ.GameDefs.DREAMPET_OFFSET_X) / FZ.GameDefs.GRID_WIDTH;
        index = col * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + line;
        if (index >= ((FZ.GameDefs.DREAMPET_NUM_LINE + 2) * (FZ.GameDefs.DREAMPET_NUM_COL + 2))) {
            index = -1;
        }
        return index;
    },
    checkFocus: function(){
    
        var index = 0;
        
        for (index = 0; index < (FZ.GameDefs.ALL_GENERAL); index++) {
            var state = this.m_allPets[index].getState();
            if (state === FZ.GameDefs.DREAMPET_FOCUS) {
                //alert(index);
                return true;
            }
        }
        return false;
    },
    searchHint: function(){
        var p1 = new FZ.GRID_COOR();
        var p2 = new FZ.GRID_COOR();
        var randomId = Math.floor(FZ.Math.random(0, FZ.GameDefs.ALL_GENERAL - 1));
        
        for (var PetFirstIndex = randomId; PetFirstIndex < FZ.GameDefs.ALL_GENERAL; PetFirstIndex++) {
            if (this.m_allPets[PetFirstIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                continue;
            p1.col = this.m_allPets[PetFirstIndex].getCol();
            p1.line = this.m_allPets[PetFirstIndex].getLine();
            for (var PetSecondIndex = PetFirstIndex + 1; PetSecondIndex < FZ.GameDefs.ALL_GENERAL; PetSecondIndex++) {
                if (this.m_allPets[PetSecondIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                    continue;
                if (this.m_allPets[PetFirstIndex].getStyle() !== this.m_allPets[PetSecondIndex].getStyle()) 
                    continue;
                p2.col = this.m_allPets[PetSecondIndex].getCol();
                p2.line = this.m_allPets[PetSecondIndex].getLine();
                if ((FZ.AG.SearchSpecialPath.getPath(this.m_allPets, (FZ.GameDefs.DREAMPET_NUM_LINE + 2), (FZ.GameDefs.DREAMPET_NUM_COL + 2), p1.col, p1.line, p2.col, p2.line)) !== null) {
                    this.m_allPets[PetFirstIndex].setState(FZ.GameDefs.DREAMPET_FLASH_HINT);
                    this.m_allPets[PetFirstIndex].setPetFocus();
                    this.m_allPets[PetSecondIndex].setState(FZ.GameDefs.DREAMPET_FLASH_HINT);
                    this.m_allPets[PetSecondIndex].setPetFocus();
                    //	this.m_PetFirstIndex = PetFirstIndex;
                    //    this.m_PetSecondIndex = PetSecondIndex;
                    //this.m_hasHint = true;
                    this.m_hintCount--;
                    return true;
                }
                
            }
        }
        for (var PetFirstIndex = 0; PetFirstIndex < randomId; PetFirstIndex++) {
            if (this.m_allPets[PetFirstIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                continue;
            p1.col = this.m_allPets[PetFirstIndex].getCol();
            p1.line = this.m_allPets[PetFirstIndex].getLine();
            for (var PetSecondIndex = PetFirstIndex + 1; PetSecondIndex < FZ.GameDefs.ALL_GENERAL; PetSecondIndex++) {
                if (this.m_allPets[PetSecondIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                    continue;
                if (this.m_allPets[PetFirstIndex].getStyle() !== this.m_allPets[PetSecondIndex].getStyle()) 
                    continue;
                p2.col = this.m_allPets[PetSecondIndex].getCol();
                p2.line = this.m_allPets[PetSecondIndex].getLine();
                if ((FZ.AG.SearchSpecialPath.getPath(this.m_allPets, (FZ.GameDefs.DREAMPET_NUM_LINE + 2), (FZ.GameDefs.DREAMPET_NUM_COL + 2), p1.col, p1.line, p2.col, p2.line)) !== null) {
                    this.m_allPets[PetFirstIndex].setState(FZ.GameDefs.DREAMPET_FLASH_HINT);
                    this.m_allPets[PetFirstIndex].setPetFocus();
                    this.m_allPets[PetSecondIndex].setState(FZ.GameDefs.DREAMPET_FLASH_HINT);
                    this.m_allPets[PetSecondIndex].setPetFocus();
                    //  this.m_PetFirstIndex = PetFirstIndex;
                    //  this.m_PetSecondIndex = PetSecondIndex;
                    this.m_hintCount--;
                    //	this.m_hasHint = true;
                    return true;
                }
                
            }
        }
        return false;
    },
    searchHasMatch: function(){
        var p1 = new FZ.GRID_COOR();
        var p2 = new FZ.GRID_COOR();
        //   var randomId = Math.floor(FZ.Math.random(0, FZ.GameDefs.ALL_GENERAL - 1));
        var tmp = this.m_PointPath;
        for (var PetFirstIndex = 0; PetFirstIndex < FZ.GameDefs.ALL_GENERAL; PetFirstIndex++) {
            if (this.m_allPets[PetFirstIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                continue;
            p1.col = this.m_allPets[PetFirstIndex].getCol();
            if (p1.col < 0) {
                continue;
            }
            
            p1.line = this.m_allPets[PetFirstIndex].getLine();
            if (p1.line < 0) {
                continue;
            }
            for (var PetSecondIndex = PetFirstIndex + 1; PetSecondIndex < FZ.GameDefs.ALL_GENERAL; PetSecondIndex++) {
                if (this.m_allPets[PetSecondIndex].getState() === FZ.GameDefs.DREAMPET_REMOVE) 
                    continue;
                if (this.m_allPets[PetFirstIndex].getStyle() !== this.m_allPets[PetSecondIndex].getStyle()) 
                    continue;
                p2.col = this.m_allPets[PetSecondIndex].getCol();
                if (p2.col < 0) {
                    continue;
                }
                p2.line = this.m_allPets[PetSecondIndex].getLine();
                if (p2.line < 0) {
                    continue;
                }
                
                if (FZ.AG.SearchSpecialPath.getPath(this.m_allPets, (FZ.GameDefs.DREAMPET_NUM_LINE + 2), (FZ.GameDefs.DREAMPET_NUM_COL + 2), p1.col, p1.line, p2.col, p2.line) !== null) {
                    this.m_PointPath = tmp;
                    return true;
                }
                
            }
        }
        if (this.isDebug) {
            this.m_debug_div.style.backgroundColor = "#000";
        }
        this.m_PointPath = tmp;
        return false;
    },
    ResetPosition: function(){
        var firstId;
        var secondId;
        
        var petIndex = null;
        this.getDisplayPet();
        petIndex = this.m_displayPetsIndex;
        var len = petIndex.length;
        var randId = 0;
        
        
        if (len === 4) {
            this.exchagePet(petIndex[0], petIndex[1]);
            return;
        }
        randId = Math.floor(FZ.Math.random(1, len - 2));
        for (var index = 0; index < randId - 1; index++) {
        
            firstId = petIndex[index];
            secondId = petIndex[index + 1];
            this.exchagePet(firstId, secondId);
        }
        for (var index = randId; index < len - 2; index++) {
        
            firstId = petIndex[index];
            secondId = petIndex[index + 1];
            this.exchagePet(firstId, secondId);
        }
        
    },
    ResetTwoPosition: function(){
        var firstId;
        var secondId;
        
        var petIndex = null;
        this.getDisplayPet();
        petIndex = this.m_displayPetsIndex;
        var len = petIndex.length;
        firstId = petIndex[0];
        
        for (var index = 1; index < len - 1; index++) {
            secondId = petIndex[index];
            if (this.m_allPets[firstId].getStyle() !== this.m_allPets[secondId].getStyle()) {
                continue;
            }
            else {
                this.exchagePet(petIndex[1], secondId);
                break;
            }
        }
        
    },
    resetPetPosEffect: function(){
        if (this.m_PetFirstIndex > 0) {
            var curLevel = FZ.GameBase.SaveObject.m_cur_level;
            switch (curLevel) {
                case 1:{
                    //  this.centerReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                    break;
                }
                case 2:{
                    break;
                }
                case 3:{
                    this.updownReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                    break;
                }
                case 4:{
                    break;
                }
                case 5:{
                    this.leftrightReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                    break;
                }
               case 6:{
//                    
                    break;
                }
                case 7:{
                	this.downReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                	break;
                }
                case 8:{
                	this.rightReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                    break;
                }
                case 9:{
                	this.leftReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                    break;
                }
                case 10:{
                	this.upReset(this.m_PetFirstIndex, this.m_PetSecondIndex);
                   break;
               }
                default:
                    break;
            }
            
            this.m_PetFirstIndex = 0;
            //  this.m_left_pet = this.getDisplayPet();
        }
        
    },
    getDisplayPet: function(){
        var displayNum = 0;
        this.m_displayPetsIndex = [];
        for (var index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
            var state = this.m_allPets[index].getState();
            if (state !== FZ.GameDefs.DREAMPET_REMOVE) {
                displayNum++;
                this.m_displayPetsIndex.push(index);
            }
        }
        return displayNum;
    },
    isGreat: function(x, y){
        if (x >= y) {
            return true;
        }
        else {
            return false;
        }
    },
    setPetDisappear: function(x, y){
        //
        var pet_index = 0;
        var path = [];
        
        if ((x < FZ.GameDefs.DREAMPET_OFFSET_X) ||
        (x > (FZ.GameDefs.DREAMPET_OFFSET_X + (FZ.GameDefs.DREAMPET_NUM_COL + 1) * FZ.GameDefs.GRID_WIDTH)) ||
        (y < FZ.GameDefs.DREAMPET_OFFSET_Y) ||
        (y > (FZ.GameDefs.DREAMPET_OFFSET_Y + (FZ.GameDefs.DREAMPET_NUM_LINE + 1) * FZ.GameDefs.GRID_HEIGHT))) {
            return false;
        }
        var line = Math.floor((y - FZ.GameDefs.DREAMPET_OFFSET_Y) / FZ.GameDefs.GRID_HEIGHT);
        var col = Math.floor((x - FZ.GameDefs.DREAMPET_OFFSET_X) / FZ.GameDefs.GRID_WIDTH);
        pet_index = line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + col;
        if (pet_index >= ((FZ.GameDefs.DREAMPET_NUM_LINE + 2) * (FZ.GameDefs.DREAMPET_NUM_COL + 2))) {
            pet_index = -1;
        }
        //alert("col: " + col +"; line" + line);
        //
        //index = getTouchPetIndex(x, y);
        if (pet_index < 0) {
            return false;
        }
        var tmp = this.m_allPets[pet_index];
        
        if (null === tmp || undefined === tmp) {
            return false;
        }
        
        if (tmp.getState() === FZ.GameDefs.DREAMPET_FOCUS || tmp.getState() === FZ.GameDefs.DREAMPET_REMOVE) {
            return false;
        }
        else 
            if (false === this.checkFocus()) {
                this.m_allPets[pet_index].setState(FZ.GameDefs.DREAMPET_FOCUS);
                this.m_allPets[pet_index].show();
                this.m_firstPet = this.m_allPets[pet_index];
                
                return false;
            }//start check two Pets can be disappeared
            else 
                //                if (true) {
                this.m_secondPet = tmp;
        p1 = new FZ.GRID_COOR();
        p1.line = this.m_firstPet.getLine();
        p1.col = this.m_firstPet.getCol();
        p2 = new FZ.GRID_COOR();
        p2.line = this.m_secondPet.getLine();
        p2.col = this.m_secondPet.getCol();
        
        if (this.m_firstPet.getStyle() !== this.m_secondPet.getStyle()) {
            this.m_allPets[pet_index].setState(FZ.GameDefs.DREAMPET_FOCUS);
            this.m_allPets[pet_index].show();
            this.m_firstPet.setState(FZ.GameDefs.DREAMPET_INIT);
            
            this.m_firstPet.hidden();
            this.m_firstPet = this.m_secondPet;
            
            return false;
        }
        //below for 4 kinds steps to check 
        else 
            if ((path = FZ.AG.SearchSpecialPath.getPath(this.m_allPets, (FZ.GameDefs.DREAMPET_NUM_LINE + 2), (FZ.GameDefs.DREAMPET_NUM_COL + 2), p1.col, p1.line, p2.col, p2.line)) !== null) {
            
                this.m_PointPath = path;
                this.m_allPets[(FZ.GameDefs.DREAMPET_NUM_COL + 2) * p1.line + p1.col].setState(FZ.GameDefs.DREAMPET_FLASH);
                this.m_allPets[(FZ.GameDefs.DREAMPET_NUM_COL + 2) * p2.line + p2.col].setState(FZ.GameDefs.DREAMPET_FLASH);
                
                this.m_PetFirstIndex = (FZ.GameDefs.DREAMPET_NUM_COL + 2) * p1.line + p1.col;
                this.m_allPets[this.m_PetFirstIndex].hidden();
                
                this.m_PetSecondIndex = (FZ.GameDefs.DREAMPET_NUM_COL + 2) * p2.line + p2.col;
                this.m_allPets[this.m_PetFirstIndex].setPetFocus();
                this.m_allPets[this.m_PetSecondIndex].setPetFocus();
                this.m_score += 100;
                this.m_bonus_time += 5;
                var lineNum = this.m_PointPath.length;
                var temp = [];
                
                for (var index = 0; index < lineNum - 1; ++index) {
                
                    temp[1] = this.m_PointPath[index + 1][1];
                    temp[0] = this.m_PointPath[index + 1][0];
                    
                    var resultW;
                    var resultH;
                    var w = this.ABS((FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * temp[0] + FZ.GameDefs.GRID_WIDTH_HALF), (FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF));
                    var h = this.ABS((FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * temp[1] + FZ.GameDefs.GRID_HEIGHT_HALF), (FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF));
                    var left;
                    var top;
                    if (0 === Math.floor(w)) {
                        w = 3;
                    }
                    if (0 === Math.floor(h)) {
                        h = 3;
                    }
                    if (w === 3) {
                        resultW = this.isGreat((FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * temp[1] + FZ.GameDefs.GRID_HEIGHT_HALF), (FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF));
                        if (resultW) {
                            left = FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF;
                            top = FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF;
                            
                        }
                        else {
                            left = FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF;
                            top = FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * temp[1] + FZ.GameDefs.GRID_HEIGHT_HALF;
                            h += 3;
                        }
                    }
                    if (h === 3) {
                        resultH = this.isGreat((FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * temp[0] + FZ.GameDefs.GRID_WIDTH_HALF), (FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF));
                        if (resultH) {
                            left = FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF;
                            top = FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF;
                        }
                        else {
                            left = FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * temp[0] + FZ.GameDefs.GRID_WIDTH_HALF;
                            top = FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF;
                            w += 3;
                        }
                    }
                    if (left < FZ.GameDefs.OFFSET_X) {
                        this.m_div_line[index].style.left = 5 + "px";
                        if (w > 3) {
                            w -= 24;
                        }
                    }
                    else 
                        if (left + w > FZ.GameDefs.SCREEN_W && w > 3) {
                            w = 315 - left;
                            this.m_div_line[index].style.left = left + "px";
                        }
                        else 
                            if (left > FZ.GameDefs.SCREEN_W) {
                                this.m_div_line[index].style.left = 312 + "px";
                                
                            }
                            else {
                                this.m_div_line[index].style.left = left + "px";
                            }
                    if (top < FZ.GameDefs.OFFSET_Y) {
                        this.m_div_line[index].style.top = 70 + "px";
                    }
                    else 
                        if (top + h > (FZ.GameDefs.SCREEN_H - FZ.GameDefs.SCREEN_BOTTOM_H) && h > 3) {
                            h = FZ.GameDefs.SCREEN_H - FZ.GameDefs.SCREEN_BOTTOM_H - 5 - top;
                            this.m_div_line[index].style.top = top + "px";
                        }
                        else 
                            if (top > (FZ.GameDefs.SCREEN_H - FZ.GameDefs.SCREEN_BOTTOM_H)) {
                                this.m_div_line[index].style.top = (FZ.GameDefs.SCREEN_H - FZ.GameDefs.SCREEN_BOTTOM_H) - 5 + "px";
                                if (resultH === true) {
                                    w += 3;
                                }
                            }
                            else {
                                this.m_div_line[index].style.top = top + "px";
                            }
                    this.m_div_line[index].style.width = w + "px";
                    this.m_div_line[index].style.height = h + "px";
                    this.m_div_line[index].style.zIndex = 100;
                    // this.m_div_line[index].style.display = "inline";
                    this.m_div_line[index].style.visibility = "visible";
                //	this.m_allPets[this.m_PetFirstIndex].m_div.parentNode.appendChild(this.m_div_line[index]);
                
                }
                
                var that = this;
                that.m_reset_finished = false;
                setTimeout(function(){
                    for (var index = 0; index < lineNum - 1; ++index) {
                        // that.m_div_line[index].style.display = "none";
                        that.m_div_line[index].style.visibility = "hidden";
                    }
                }, 400);
                
                setTimeout(function(){
                    that.resetPetPosEffect();
                    if (that.getLeftPet() !== 0) {
                        if (that.searchHasMatch() === false) {
                            FZ.Game.GameState.m_isNoMatch = true;
                            FZ.Game.GameState.levelCurrentTime = (new Date()).getTime();
                        }
                    }
                    that.m_reset_finished = true;
                }, 600);
                
                
                this.m_left_pet -= 2;
                
                
                return true;
            }
            else {
                this.m_allPets[pet_index].setState(FZ.GameDefs.DREAMPET_FOCUS);
                if (this.m_firstPet) {
                    this.m_firstPet.setState(FZ.GameDefs.DREAMPET_INIT);
                    //                                this.m_firstPet.m_div_focus.style.display = "none";
                    //								this.m_firstPet.m_div_focus.style.visibility = "hidden";
                    this.m_firstPet.hidden();
                    
                    if (this.m_secondPet) {
                        this.m_secondPet.setState(FZ.GameDefs.DREAMPET_FOCUS);
                        this.m_secondPet.show();
                        this.m_firstPet = this.m_secondPet;
                    }
                }
                return false;
            }
        
        //                }//end if current pic not NULL
    },
    
    
    ABS: function(x, y){
        return ((x > y) ? (x - y) : (y - x));
    },
    
    
    updownReset: function(p1, p2){
        var lessId = 0;
        var greatId = 0;
        if (p1 > p2) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        
        if (greatId > (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
            for (var index = greatId; index > (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 2) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                
            }
            for (var index = lessId; index > (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 2) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                
            }
            
        }
        else 
            if (lessId > (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2) &&
            greatId < (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                for (var index = greatId; index < (FZ.GameDefs.DREAMPET_NUM_LINE_HALF) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                
                for (var index = lessId; index > (FZ.GameDefs.DREAMPET_NUM_LINE_HALF + 2) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                    
                }
            }
            else {
                for (var index = lessId; index < (FZ.GameDefs.DREAMPET_NUM_LINE_HALF) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                for (var index = greatId; index < (FZ.GameDefs.DREAMPET_NUM_LINE_HALF) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                
            }
    },
    
    leftrightReset: function(p1, p2){
        var lessId = 0;
        var greatId = 0;
        if (p1 > p2) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        var lessId_line = this.m_allPets[lessId].getLine();
        var lessId_col = this.m_allPets[lessId].getCol();
        var greatId_line = this.m_allPets[greatId].getLine();
        var greatId_col = this.m_allPets[greatId].getCol();
        
        
        if (lessId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF) {
            for (var index = lessId_col; index < FZ.GameDefs.DREAMPET_NUM_COL_HALF; index++) {
                this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
            }
            for (var index = greatId_col; index < FZ.GameDefs.DREAMPET_NUM_COL_HALF; index++) {
                this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
            }
        }
        else 
            if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF) {
                for (var index = greatId_col; index > FZ.GameDefs.DREAMPET_NUM_COL_HALF + 1; index--) {
                    this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
                }
                for (var index = lessId_col; index > FZ.GameDefs.DREAMPET_NUM_COL_HALF + 1; index--) {
                    this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
                }
                
            }
            else 
                if (greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF) {
                    for (var index = greatId_col; index < FZ.GameDefs.DREAMPET_NUM_COL_HALF; index++) {
                        this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
                    }
                    for (var index = lessId_col; index > FZ.GameDefs.DREAMPET_NUM_COL_HALF + 1; index--) {
                        this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
                    }
                    
                }
                else {
                    for (var index = greatId_col; index > FZ.GameDefs.DREAMPET_NUM_COL_HALF + 1; index--) {
                        this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
                    }
                    for (var index = lessId_col; index < FZ.GameDefs.DREAMPET_NUM_COL_HALF; index++) {
                        this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
                    }
                }
    },
    leftReset: function(p1, p2){
        var lessId = 0;
        var greatId = 0;
        if (p2 > p1) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        var lessId_line = this.m_allPets[lessId].getLine();
        var lessId_col = this.m_allPets[lessId].getCol();
        var greatId_line = this.m_allPets[greatId].getLine();
        var greatId_col = this.m_allPets[greatId].getCol();
        
        
        
        for (var index = greatId_col; index < FZ.GameDefs.DREAMPET_NUM_COL; index++) {
            this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
        }
        for (var index = lessId_col; index < FZ.GameDefs.DREAMPET_NUM_COL; index++) {
            this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index + 1);
        }
        
        
    },
    rightReset: function(p1, p2){
        var lessId = 0;
        var greatId = 0;
        if (p1 > p2) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        var lessId_line = this.m_allPets[lessId].getLine();
        var lessId_col = this.m_allPets[lessId].getCol();
        var greatId_line = this.m_allPets[greatId].getLine();
        var greatId_col = this.m_allPets[greatId].getCol();
        
        for (var index = greatId_col; index > 0; index--) {
            if (index === 1) {
                break;
            }
            this.exchagePet(greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, greatId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
        }
        for (var index = lessId_col; index > 0; index--) {
            if (index === 1) {
                break;
            }
            this.exchagePet(lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index, lessId_line * (FZ.GameDefs.DREAMPET_NUM_COL + 2) + index - 1);
        }
        
        
    },
    downReset: function(p1, p2){
        var tmp = 0;
        var lessId = 0;
        var greatId = 0;
        if (p1 > p2) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        
        if ((lessId - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) < (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
            return;
        }
        else 
            if (((greatId - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) > (FZ.GameDefs.DREAMPET_NUM_COL + 2)) && ((greatId - lessId) % (FZ.GameDefs.DREAMPET_NUM_COL + 2) == 0)) {
            
                for (var index = greatId - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index + (FZ.GameDefs.DREAMPET_NUM_COL + 2), index);
                    tmp = index;
                }
                
                for (var index = lessId - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index >= tmp; index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index + (FZ.GameDefs.DREAMPET_NUM_COL + 2), index);
                }
                
                
            }
            else {
                for (var index = lessId - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index + (FZ.GameDefs.DREAMPET_NUM_COL + 2), index);
                    
                }
                for (var index = greatId - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index + (FZ.GameDefs.DREAMPET_NUM_COL + 2), index);
                    
                }
                
            }
        
    },
    upReset: function(p1, p2){
        var tmp = 0;
        var lessId;
        var greatId;
        if (p1 > p2) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        if (FZ.GameDefs.ALL_GENERAL - greatId - (FZ.GameDefs.DREAMPET_NUM_COL + 2) < (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
            return;
        }
        else {
            for (var index = lessId; index + (FZ.GameDefs.DREAMPET_NUM_COL + 2) < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            }
            for (var index = greatId; index + (FZ.GameDefs.DREAMPET_NUM_COL + 2) < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                this.exchagePet(index + (FZ.GameDefs.DREAMPET_NUM_COL + 2), index);
            }
        }
    },
    centerReset: function(p1, p2){
    
        var tmp = 0;
        var lessId;
        var greatId;
        if (p2 > p1) {
            lessId = p1;
            greatId = p2;
        }
        else {
            lessId = p2;
            greatId = p1;
        }
        var lessId_line = this.m_allPets[lessId].getLine();
        var lessId_col = this.m_allPets[lessId].getCol();
        var greatId_line = this.m_allPets[greatId].getLine();
        var greatId_col = this.m_allPets[greatId].getCol();
        //special 1
        if (lessId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
            if (greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF &&
            (Math.floor((greatId - lessId) % (FZ.GameDefs.DREAMPET_NUM_COL + 2)) === 0 /*||(p2-p1)<FZ.GameDefs.DREAMPET_NUM_COL_HALF*/)) {
                tmp = greatId;
                for (var index = greatId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                tmp = lessId;
                for (var index = lessId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                return;
            }
            if (greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF &&
            Math.floor((greatId - lessId) % (FZ.GameDefs.DREAMPET_NUM_COL + 2)) === 0) {
            
                tmp = greatId;
                for (var index = greatId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                tmp = lessId;
                for (var index = lessId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                return;
            }
        }
        //special 2
        if (lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
        
            if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                if ((greatId - lessId) < FZ.GameDefs.DREAMPET_NUM_COL_HALF) {
                    tmp = greatId;
                    for (var index = greatId; index < (greatId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                        if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        else {
                            this.exchagePet(index, index + 1);
                        }
                    }
                    for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                        if (this.m_allPets[index].getState() === FZ.GameDefs.DREAMPET_REMOVE &&
                        this.m_allPets[index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                    }
                    tmp = lessId;
                    for (var index = lessId; index < (lessId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                        if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        else {
                            this.exchagePet(index, index + 1);
                        }
                    }
                    for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                        if (this.m_allPets[index].getState() === FZ.GameDefs.DREAMPET_REMOVE &&
                        this.m_allPets[index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                    }
                    
                    return;
                }
            }
        }
        //special 3
        if (lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
            if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF &&
            (Math.floor((greatId - lessId) % (FZ.GameDefs.DREAMPET_NUM_COL + 2)) === 0 || (greatId - lessId) < FZ.GameDefs.DREAMPET_NUM_COL_HALF)) {
                tmp = greatId;
                for (var index = greatId; index < (greatId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                    if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index + 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                tmp = lessId;
                for (var index = lessId; index < (lessId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                    if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index + 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                return;
            }
            if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF &&
            Math.floor((greatId - lessId) % (FZ.GameDefs.DREAMPET_NUM_COL + 2)) !== 0) {
            
                tmp = lessId;
                for (var index = lessId; index < (lessId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                    if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index + 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                tmp = greatId;
                for (var index = greatId; index < (greatId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                    if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index + 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
                return;
            }
        }
        
        //lessId
        tmp = lessId;
        if (lessId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
            for (var index = lessId; index > 0; index--) {
                if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                    tmp = index;
                    break;
                }
                else {
                    this.exchagePet(index, index - 1);
                }
            }
            for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                if (this.m_allPets[index].getState() === FZ.GameDefs.DREAMPET_REMOVE &&
                this.m_allPets[index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                    tmp = index;
                    break;
                }
                this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            }
        }
        else 
            if (lessId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                for (var index = lessId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
            }
            else 
                if (lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                    for (var index = lessId; index < (lessId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                        if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        else {
                            this.exchagePet(index, index + 1);
                        }
                    }
                    for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                        this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                    }
                }
                else 
                    if (lessId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && lessId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                        for (var index = lessId; index < (lessId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                            if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                                tmp = index;
                                break;
                            }
                            else {
                                this.exchagePet(index, index + 1);
                            }
                        }
                        for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                        
                            this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                        }
                    }
        tmp = greatId;
        //greatId
        if (greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
            for (var index = greatId; index > 0; index--) {
                if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                    tmp = index;
                    break;
                }
                else {
                    this.exchagePet(index, index - 1);
                }
            }
            for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            }
        }
        else 
            if (greatId_col <= FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                for (var index = greatId; index > 0; index--) {
                    if (this.m_allPets[index - 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                        tmp = index;
                        break;
                    }
                    else {
                        this.exchagePet(index, index - 1);
                    }
                }
                for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                    this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                }
            }
            else 
                if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line > FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                    for (var index = greatId; index < (greatId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                        if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                            tmp = index;
                            break;
                        }
                        else {
                            this.exchagePet(index, index + 1);
                        }
                    }
                    for (var index = tmp; index < FZ.GameDefs.ALL_GENERAL - (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index + (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                        this.exchagePet(index, index + (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                    }
                }
                else 
                    if (greatId_col > FZ.GameDefs.DREAMPET_NUM_COL_HALF && greatId_line <= FZ.GameDefs.DREAMPET_NUM_LINE_HALF) {
                        for (var index = greatId; index < (greatId_line + 1) * (FZ.GameDefs.DREAMPET_NUM_COL + 2); index++) {
                            if (this.m_allPets[index + 1].getState() === FZ.GameDefs.DREAMPET_REMOVE) {
                                tmp = index;
                                break;
                            }
                            else {
                                this.exchagePet(index, index + 1);
                            }
                        }
                        for (var index = tmp; index > (FZ.GameDefs.DREAMPET_NUM_COL + 2); index = index - (FZ.GameDefs.DREAMPET_NUM_COL + 2)) {
                            this.exchagePet(index, index - (FZ.GameDefs.DREAMPET_NUM_COL + 2));
                        }
                    }
        
        
    },
    exchagePet: function(firstPetIndex, secondPetIndex){
        var firstCol = this.m_allPets[firstPetIndex].getCol();
        var firstLine = this.m_allPets[firstPetIndex].getLine();
        //	var firstState = this.m_allPets[firstPetIndex].getState();
        var secondCol = this.m_allPets[secondPetIndex].getCol();
        var secondLine = this.m_allPets[secondPetIndex].getLine();
        //  var secondState = this.m_allPets[secondPetIndex].getState();
        var tmpPet = null;
        tmpPet = this.m_allPets[firstPetIndex];
        this.m_allPets[firstPetIndex] = this.m_allPets[secondPetIndex];
        this.m_allPets[firstPetIndex].setCol(firstCol);
        this.m_allPets[firstPetIndex].setLine(firstLine);
        //this.m_allPets[firstPetIndex].setState(firstState);
        this.m_allPets[firstPetIndex].updatePos();
        this.m_allPets[secondPetIndex] = tmpPet;
        this.m_allPets[secondPetIndex].setCol(secondCol);
        this.m_allPets[secondPetIndex].setLine(secondLine);
        //	this.m_allPets[secondPetIndex].setState(secondState);
        this.m_allPets[secondPetIndex].updatePos();
        this.m_allPets[firstPetIndex].setPetFocus();
        this.m_allPets[secondPetIndex].setPetFocus();
    },
    
    getLeftPet: function(){
        return this.m_left_pet;
    },
    getScore: function(){
        return this.m_score;
    },
    setScore: function(score){
        this.m_score = score;
    },
    getBonusTime: function(){
        return this.m_bonus_time;
    },
    setBonusTime: function(time){
        this.m_bonus_time = time;
    },
    onDrawPathLine: function(){
    
        FZ.GameBase.MainContext.strokeStyle = '#ff0';
        FZ.GameBase.MainContext.lineWidth = 3;
        
        var tmpIndex = 0;
        var temp = [];
        
        for (var index = 0; index < (this.m_PointPath.length - 1); ++index) {
        
            temp[1] = this.m_PointPath[index + 1][1];
            temp[0] = this.m_PointPath[index + 1][0];
            
            FZ.GameBase.MainContext.setTransform(this.m_worldMatrix.m11, this.m_worldMatrix.m12, this.m_worldMatrix.m21, this.m_worldMatrix.m22, this.m_worldMatrix.dx, this.m_worldMatrix.dy);
            
            FZ.GameBase.MainContext.beginPath();
            FZ.GameBase.MainContext.moveTo(FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * this.m_PointPath[index][0] + FZ.GameDefs.GRID_WIDTH_HALF, FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * this.m_PointPath[index][1] + FZ.GameDefs.GRID_HEIGHT_HALF);
            FZ.GameBase.MainContext.lineTo(FZ.GameDefs.DREAMPET_OFFSET_X + FZ.GameDefs.GRID_WIDTH * temp[0] + FZ.GameDefs.GRID_WIDTH_HALF, FZ.GameDefs.DREAMPET_OFFSET_Y + FZ.GameDefs.GRID_HEIGHT * temp[1] + FZ.GameDefs.GRID_HEIGHT_HALF);
            FZ.GameBase.MainContext.closePath();
            FZ.GameBase.MainContext.stroke();
            
        }
        
        
    },
    
    showPets: function(){
        var tmp = null;
        for (var index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
            tmp = this.m_allPets[index];
            if (tmp.m_div) {
                //tmp.m_div.style.display = "inline";
                tmp.m_div.style.visibility = "visible";
                if (FZ.GameDefs.DREAMPET_FOCUS === tmp.m_state) {
                	tmp.m_div_focus.style.visibility = "visible";
                }
            }
        }
    },
    hidePets: function(){
        var tmp = null;
        for (var index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
            tmp = this.m_allPets[index];
            if (tmp.m_div) {
                // tmp.m_div.style.display = "none";
                tmp.m_div.style.visibility = "hidden";
                tmp.m_div_focus.style.visibility = "hidden";
            }
        }
    },
    resumeLevel: function(){
        this.m_score = FZ.GameBase.SaveObject.m_cur_score;
        this.m_hintCount = FZ.GameBase.SaveObject.m_cur_hintCount;
        this.m_left_pet = FZ.GameBase.SaveObject.m_cur_left_pet;
        this.m_level = FZ.GameBase.SaveObject.m_cur_level;
        var index;
        var tmp = null;
        var tmpPetArr = null;
        tmpPetArr = [];
        var line = 0;
        var col = 0;
        var style = 0;
        var state = FZ.GameDefs.DREAMPET_INIT;
        this.clearAllPets();
        for (index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
            state = FZ.GameBase.SaveObject.m_data[index].state;
            style = FZ.GameBase.SaveObject.m_data[index].style;
            line = Math.floor(index / (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            col = (index % (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            tmp = null;
            tmp = new FZ.Diamond(line, col, style, state);
            
            this.m_allPets.push(tmp);
            
            if (FZ.GameDefs.DREAMPET_REMOVE !== state) {
                this.m_parent.appendChild(tmp.m_div);
            }
			if (FZ.GameDefs.DREAMPET_FOCUS === state) {
                this.m_firstPet = tmp;
            }
        }
    },
    saveLevel: function(){
        FZ.GameBase.SaveObject.m_gamein = true;
        FZ.GameBase.SaveObject.m_cur_score = this.m_score;
        FZ.GameBase.SaveObject.m_cur_hintCount = this.m_hintCount;
        FZ.GameBase.SaveObject.m_cur_left_pet = this.m_left_pet;
        FZ.GameBase.SaveObject.m_level_usedTime = FZ.Game.GameState.m_level_usedTime;
		if (FZ.TargetMobile !== FZ.TARGET_DEF.ANDRIOD) {
			FZ.GameBase.SaveObject.m_sound = FZ.Game.GameState.m_sound;
		}
        var index;
        var tmp = null;
        var tmpPetArr = null;
        tmpPetArr = FZ.GameBase.SaveObject.m_data;
        for (index = 0; index < FZ.GameDefs.ALL_GENERAL; index++) {
//            tmpPetArr[index].line = this.m_allPets[index].m_line;
//            tmpPetArr[index].col = this.m_allPets[index].m_col;
            tmpPetArr[index].style = this.m_allPets[index].m_style;
            tmpPetArr[index].state = this.m_allPets[index].m_state;
        }
        //      FZ.GameBase.SaveObject.m_data = tmpPetArr;
        FZ.GameBase.saveGame();
    },
    initAllPets: function(isNew){
        var line = 0;
        var col = 0;
        var style = 0;
        var state = FZ.GameDefs.DREAMPET_INIT;
        var index = 0;
        var tmp = null;
        var tmpPetArr = null;
        tmpPetArr = tmpPetArr || [];
        this.m_bonus_time = 0;
        this.m_score = 0;
        this.m_hintCount = FZ.GameDefs.LEVEL_HINT_NUMBER[this.getLevel()];
        this.clearAllPets();
        this.m_left_pet = FZ.GameDefs.ALL_PET_NUM;
        var styleStart = 0;
        var styleEnd = 0;
        styleStart = FZ.Math.random(0, (FZ.GameDefs.DIAMOND_TYPES - FZ.GameDefs.LEVEL_PET_KIND[FZ.GameBase.SaveObject.m_cur_level]));
        if (styleStart < 0) {
            styleStart = 0;
        }
        styleEnd = styleStart + FZ.GameDefs.LEVEL_PET_KIND[FZ.GameBase.SaveObject.m_cur_level];
        for (index = 0; index < FZ.GameDefs.ALL_GENERAL_HALF; index++) {
            style = FZ.Math.random(styleStart, styleEnd);
            state = FZ.GameDefs.DREAMPET_INIT;
            line = Math.floor(index / (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            col = (index % (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            if (((line === 0) || (line === (FZ.GameDefs.DREAMPET_NUM_LINE + 1)) || (col === 0) || (col === (FZ.GameDefs.DREAMPET_NUM_COL + 1)))) {
                state = FZ.GameDefs.DREAMPET_REMOVE;
                style = -1;
            }
            tmp = null;
            
            tmp = new FZ.Diamond(line, col, style, state);
            //          tmp.m_spr = this.m_sprite.clone();
            this.m_allPets.push(tmp);
            
            if (FZ.GameDefs.DREAMPET_REMOVE !== state) {
                this.m_parent.appendChild(tmp.m_div);
            }
            tmpPetArr.push(tmp);
        }
        
        
        var tmpPet = null;
        var tmpLen;
        
        for (index = (FZ.GameDefs.ALL_GENERAL_HALF); index < (FZ.GameDefs.ALL_GENERAL); index++) {
            tmpLen = Math.floor(FZ.Math.random(0, tmpPetArr.length));
            
            //  tmpPet = tmpPetArr.slice(tmpLen, tmpLen + 1);
            state = FZ.GameDefs.DREAMPET_INIT;
            
            style = tmpPetArr[tmpLen].getStyle();
            
            //alert("style :" +  style + ":" + "tmpLen :" + tmpLen);
            //   tmpPetArr.splice(tmpLen, 1);
            
            line = Math.floor(index / (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            col = (index % (FZ.GameDefs.DREAMPET_NUM_COL + 2));
            if (-1 === style) {
                if (!((line === 0) || (line === (FZ.GameDefs.DREAMPET_NUM_LINE + 1)) || (col === 0) || (col === (FZ.GameDefs.DREAMPET_NUM_COL + 1)))) {
                    tmpLen = Math.floor(FZ.Math.random(0, tmpPetArr.length));
                    style = tmpPetArr[tmpLen].getStyle();
                    while (-1 === style) {
                        tmpLen = Math.floor(FZ.Math.random(0, tmpPetArr.length));
                        style = tmpPetArr[tmpLen].getStyle();
                    }
                }
                else {
                    state = FZ.GameDefs.DREAMPET_REMOVE;
                    style = -1;
                }
            }
            else {
                if (((line === 0) || (line === (FZ.GameDefs.DREAMPET_NUM_LINE + 1)) || (col === 0) || (col === (FZ.GameDefs.DREAMPET_NUM_COL + 1)))) {
                    tmpLen = Math.floor(FZ.Math.random(0, tmpPetArr.length));
                    style = tmpPetArr[tmpLen].getStyle();
                    while (-1 !== style) {
                        tmpLen = Math.floor(FZ.Math.random(0, tmpPetArr.length));
                        style = tmpPetArr[tmpLen].getStyle();
                    }
                    state = FZ.GameDefs.DREAMPET_REMOVE;
                }
                else {
                
                
                }
            }
            tmpPetArr.splice(tmpLen, 1);
            tmp = null;
            
            tmp = new FZ.Diamond(line, col, style, state);
            
            this.m_allPets.push(tmp);
            
            if (FZ.GameDefs.DREAMPET_REMOVE !== state) {
                this.m_parent.appendChild(tmp.m_div);
            }
            
            //            this.m_parent.appendChild(tmp.m_div);
        }
        
        //this.debugAllPetsType();
        
        this.m_leftNum = -1;
        this.m_dialog = false;
    },
    
    debugAllPetsType: function(){
        var index = 0;
        debug_data = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 2, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ];
        for (index = 0; index < (FZ.GameDefs.ALL_GENERAL); index++) {
            if (-1 !== debug_data[index]) {
                this.m_allPets[index].m_module = debug_data[index];
                this.m_allPets[index].m_style = debug_data[index];
            }
            
            this.m_allPets[index].setModule();
            if (-1 === debug_data[index]) {
                this.m_allPets[index].m_state = -1;
            }
            else {
                this.m_allPets[index].m_state = 0;
            }
        }
        
    },
    
    getDiamondNumber: function(col){
        var number = 0;
        var index = 0;
        var tmp = null;
        for (index = col; index < (FZ.GameDefs.ALL_GENERAL); index += FZ.GameDefs.DIAMOND_COL_NUM) {
            tmp = this.m_allPets[index];
            if (null !== tmp) {
                number++;
            }
        }
        return number;
    },
    
   
   
    
    getLeftDiamonds: function(){
        var tmp = null;
        var index = 0;
        var leftNumber = 0;
        for (index = 0; index < (FZ.GameDefs.ALL_GENERAL); index++) {
            tmp = this.m_allPets[index];
            if (!tmp) {
                continue;
            }
            leftNumber++;
        }
        return leftNumber;
    },
    getLevel: function(){
        return this.m_level;
    },
    setLevel: function(level){
        this.m_level = level;
    },
    getHintCount: function(){
        return this.m_hintCount;
    },
    setHintCount: function(hintCount){
        this.m_hintCount = hintCount;
    },
    mouseHandler: function(evt){
        //		evt.stopPropagation();
       // evt.preventDefault();
        var petDisappear = false;
        var type = "";
        var x = 0;
        var y = 0;
        //var result = this.RESULT_NONE;
        if (!this.m_reset_finished) {
            return;
        }
        if (FZ.TARGET_DEF.MOBILE === FZ.TargetPort) {
            if (FZ.EVENT_DEF.T_START === evt.type) {
                type = FZ.EVENT_DEF.M_MOVE;
                x = evt.touches[0].pageX - FZ.DivManager.getOffsetX();
                y = evt.touches[0].pageY - FZ.DivManager.getOffsetY();
                this.m_last_x = x;
                this.m_last_y = y;
            }
            else 
                if (FZ.EVENT_DEF.T_MOVE === evt.type) {
                    type = FZ.EVENT_DEF.M_MOVE;
                    x = evt.touches[0].pageX - FZ.DivManager.getOffsetX();
                    y = evt.touches[0].pageY - FZ.DivManager.getOffsetY();
                    this.m_last_x = x;
                    this.m_last_y = y;
                }
                else 
                    if (FZ.EVENT_DEF.T_END === evt.type) {
                        type = FZ.EVENT_DEF.M_CLICK;
                        x = this.m_last_x;
                        y = this.m_last_y;
                        this.m_last_x = 0;
                        this.m_last_y = 0;
                    }
        }
        else {
            x = evt.pageX - FZ.DivManager.getOffsetX();
            y = evt.pageY - FZ.DivManager.getOffsetY();
            type = evt.type;
        }
        
        if (FZ.EVENT_DEF.M_MOVE === type) {
            //			result = this.startSearch(x, y);	
            //			if(this.RESULT_CHANGED === result) {
            //				
            //			}//end if (this.RESULT_CHANGED === result) {
        }//end if(this.EVT_MOUSE_MOVE === evt.type) {
        else 
            if (FZ.EVENT_DEF.M_CLICK === type) {
                petDisappear = this.setPetDisappear(x, y);
                if (petDisappear === false) {
                    return;
                }
                //			if(this.m_PetFirstIndex !== 0){
                //				this.m_timer = setTimeout(FZ.Tools.bind(this, this.wait1), 100);
                //			}
                
                //	this.setLabelText();
                if ((this.m_observer) && this.m_observer.checkWin) {
                    //				if(this.getDisplayPet() !== 0){
                    this.m_observer.checkWin();
                //				}
                }
                
            }
        return false;
    }
});

//
//
