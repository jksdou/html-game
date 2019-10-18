var BoardModel = {
    _board: [],
    init : function(max){
        var board = this._board;
        for(var i = 0; i < 6; i++){
            board[i] = [];
            for(var j = 0; j < 7; j++){
                board[i][j] = 0;
            }
        }

        var n = 0;

        while(n < max){
            var row = cc.random(6);
            var col = cc.random(7);
            if(board[row][col] < 3){
                board[row][col]++;
                n++;
            }
        }

        //console.log(board);

        for(var i = 0; i < 6; i++){
            for(var j = 0; j < 7; j++){
                this.emit('create', board[i][j], i, j, j * 6 + i);
            }
        }
    },
    powerUp: function(row, col, flag){
        var board = this._board;
        if(this._board[row] && this._board[row][col] != null){
            if(flag && this._board[row][col] == 0){
                if(flag == 'left'){
                    for(var i = row - 1; i >= 0; i--){
                        if(board[i][col] > 0){
                            break;
                        }
                    }   
                    this.emit('shoot', [row, col], [i, col]);           
                }
                if(flag == 'right'){
                    for(var i = row + 1; i < 6; i++){
                        if(board[i][col] > 0){
                            break;
                        }
                    }                    
                    this.emit('right', [row, col], [i, col]);
                }
                if(flag == 'up'){
                    for(var j = col + 1; j < 7; j++){
                        if(board[row][j] > 0){
                            break;
                        }
                    }
                    this.emit('shoot', [row, col], [row, j]);                    
                }
                if(flag == 'down'){
                    for(var j = col - 1; j >= 0; j--){
                        if(board[row][j] > 0){
                            break;
                        }
                    }
                    this.emit('shoot', [row, col], [row, j]);                    
                }

                return;
            }

            this._board[row][col]++;
            if(this._board[row][col] <= 3){
                this.emit('grow', this._board[row][col], row, col);
                return false;
            }else{
                this._board[row][col] = 0;
                this.emit('explode', row, col);
                this.makeExplod(row, col);
                return true;
            }
        }
    },
    makeExplod: function(row, col){
        var board = this._board;
        //右边
        for(var i = row + 1; i < 6; i++){
            if(board[i][col] > 0){
                break;
            }
        }
        this.emit('shoot', [row, col], [i, col]);

        for(var i = row - 1; i >= 0; i--){
            if(board[i][col] > 0){
                break;
            }
        }
        this.emit('shoot', [row, col], [i, col]);

        for(var j = col + 1; j < 7; j++){
            if(board[row][j] > 0){
                break;
            }
        }
        this.emit('shoot', [row, col], [row, j]);

        for(var j = col - 1; j >= 0; j--){
            if(board[row][j] > 0){
                break;
            }
        }
        this.emit('shoot', [row, col], [row, j]);
    },
    isEmpty: function(){
        for(var i = 0; i < 6; i++){
            for(var j = 0; j < 7; j++){
                if(this._board[i][j] > 0){
                    return false;
                }
            }
        }        
        return true;
    }
}

cc.mixin(BoardModel, cc.EventEmitter.create());

var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();  

        var board = cc.createSprite('water_board.png', {
            anchor: [0.5, 0],
            xy: [360, 150],
        });
        this.addChild(board);

        var tileNode = cc.TileLayer.create(110, 110);
        tileNode.attr({xy: [30, 180]});
        this.addChild(tileNode);
        this.tileNode = tileNode;

        var dropsTitle = cc.createSprite('@剩余水滴：', {
            xy: [480, 1100],
            fontSize: 34,
            color: 'rgb(48, 138, 207)'
        });
        this.addChild(dropsTitle);
        var dropBall = cc.createSprite('big_bubble.png', {
            xy: [650, 1100],
        });
        this.addChild(dropBall);
        this.dropBall = dropBall;

        var bonus = 0;
        this.drops = 10;

        var dropsTxt = cc.createSprite('@'+this.drops, {
            xy: [80, 95],
            fontSize: 44,
            color: 'red'
        });
        dropBall.addChild(dropsTxt);
        this.dropsTxt = dropsTxt;

        this.score = 0;
        var scoreTxt = cc.createSprite('@分数: 000000', {
            anchor: [0, 0.5],
            xy: [60, 1100],
            fontSize: 38,
            color: 'rgb(48, 138, 207)'            
        });
        this.addChild(scoreTxt);

        var self = this;

        BoardModel.on('create', function(n, x, y, d){
            //console.log(n, x, y);
            setTimeout(function(){
                if(n > 0){
                    var sp = tileNode.getTileAt(x, y);
                    if(sp == null){
                        sp = cc.createSprite('bubble'+n+'.png');
                        sp.value = n;
                        tileNode.setTileAt(sp, x, y);
                    }else{
                        sp.attr({
                            'texture': 'bubble'+n+'.png',
                            'opacity': 255
                        });
                        sp.value = n;                
                    }  
                }
                self.bubbleLocker--;             
            }, d * 50);
        });

        BoardModel.on('grow', function(n, x, y){
            var sp = tileNode.getTileAt(x, y);
            if(sp != null){
                sp.attr({
                    'texture': 'bubble'+n+'.png',
                    'opacity': 255
                });
                sp.value = n;
            }else{
                var sp = cc.createSprite('bubble'+n+'.png');
                sp.value = n;
                tileNode.setTileAt(sp, x, y);                
            }
        });

        BoardModel.on('explode', function(x, y){
            var sp = tileNode.getTileAt(x, y);
            if(sp){
                bonus++;
                if(bonus % 9 == 0){
                    self.drops++;
                    self.dropsTxt.setString(self.drops);
                    var drop = cc.createSprite('@+1', {
                        color:'red',
                        fontSize: 32,
                        xy: [100, 120]
                    });
                    self.dropBall.addChild(drop);
                    drop.moveBy(0.5, cc.p(0, 15)).spawn();
                    drop.fadeOut(0.5).then(function(){
                        drop.removeFromParent(true);
                    }).act();    

                    var bonusScore = 100 * bonus;
                    self.score += bonusScore;
                    var bonusSp = cc.createSprite('@+' + bonusScore, {
                        color:'rgb(48, 138, 207)',
                        fontSize: 32,
                        xy: [200, 60]
                    });
                    scoreTxt.addChild(bonusSp);
                    bonusSp.moveBy(0.5, cc.p(0, 15)).spawn();
                    bonusSp.fadeOut(0.5).then(function(){
                        bonusSp.removeFromParent(true);
                    }).act();                     
                }
                sp.attr('opacity', 0);
            }
        });

        BoardModel.on('shoot', function(from, to){
            var loc = tileNode.tileToLocation({x:from[0], y:from[1]});

            var d = [to[0] - from[0], to[1] - from[1]];
            //console.log(d);
            self.bubbleLocker++;

            if(d[0] > 0){
                var sp_right = cc.createSprite('drop.png', {
                    xy: [loc.x + 30,  loc.y],
                    rotation: 90
                });
                tileNode.addChild(sp_right);   
                sp_right.moveBy(0.15 * Math.abs(d[0]), cc.p(d[0] * 110 - 60, 0))
                    .then(function(){
                        BoardModel.powerUp(to[0], to[1], "right");
                        self.bubbleLocker--;
                        self.check();
                        sp_right.removeFromParent(true);
                    }).fadeOut(0.25).act();            
            }else if(d[0] < 0){
                var sp_left = cc.createSprite('drop.png', {
                    xy: [loc.x - 30,  loc.y],
                    rotation: -90
                });
                tileNode.addChild(sp_left); 
                sp_left.moveBy(0.15 * Math.abs(d[0]), cc.p(d[0] * 110 + 60, 0))
                    .then(function(){
                        BoardModel.powerUp(to[0], to[1], "left");
                        self.bubbleLocker--;
                        self.check();
                        sp_left.removeFromParent(true);
                    }).fadeOut(0.25).act();             
            }else if(d[1] > 0){
                var sp_up = cc.createSprite('drop.png', {
                    xy: [loc.x,  loc.y + 30]
                });
                tileNode.addChild(sp_up);   
                sp_up.moveBy(0.15 * Math.abs(d[1]), cc.p(0, d[1] * 110 - 60))
                    .then(function(){
                        BoardModel.powerUp(to[0], to[1], "up");
                        self.bubbleLocker--;
                        self.check();
                        sp_up.removeFromParent(true);
                    }).fadeOut(0.25).act();            
            }else if(d[1] < 0){
                var sp_down = cc.createSprite('drop.png', {
                    xy: [loc.x,  loc.y - 30],
                    rotation: 180
                });
                tileNode.addChild(sp_down); 
                sp_down.moveBy(0.15 * Math.abs(d[1]), cc.p(0, d[1] * 110 + 60))
                    .then(function(){
                        BoardModel.powerUp(to[0], to[1], "down");
                        self.bubbleLocker--;
                        self.check();
                        sp_down.removeFromParent(true);
                    }).fadeOut(0.25).act();                         
            }

            self.score += 50;
            scoreTxt.setString('分数: ' + ('000000' + self.score).slice(-6));
        });

        this.delegate(tileNode, 'click', function(event){
            if(self.bubbleLocker || self.isGameOver || self.drops <= 0) return;

            var loc = event.getLocation();
            loc = tileNode.convertToNodeSpace(loc);
            var pos = tileNode.locationToTile(loc);

            var sp = tileNode.getTileAt(pos.x, pos.y);
            
            if(pos.x < 6 && pos.y < 7){
                self.drops--;  
                dropsTxt.setString(self.drops);
                bonus = 0;
                if(!BoardModel.powerUp(pos.x, pos.y)){
                    self.check();
                }
            }
        });

        this.level = 0;

        this.initBoard();

     

        return true;
    },
    check: function(){
        if(this.bubbleLocker <= 0){
            if(BoardModel.isEmpty()){
                this.level++;
                this.drops++;
                this.dropsTxt.setString(this.drops);
                var sp = cc.createSprite('@+1', {
                    color:'red',
                    fontSize: 32,
                    xy: [100, 120]
                });
                this.dropBall.addChild(sp);
                sp.moveBy(0.5, cc.p(0, 15)).spawn();
                sp.fadeOut(0.5).then(function(){
                    sp.removeFromParent(true);
                }).act();
                this.initBoard();
            }
            else if(this.drops <= 0){
                this.gameOver();
            }
        }
    },
    initBoard: function(){
        var n = Math.max(30, 61 - this.level);
        this.bubbleLocker = 42;
        BoardModel.init(n);
    },
    gameOver: function(){
        this.isGameOver = true;
        //console.log('gameOver');

        var self = this;

        var hiscore = 120000;
        var score = this.score;

        var rand =  Math.random()*12454;
        var rank = 0|((hiscore - score) * 34763  + rand);
        var percent = (score *34763 + rand) / (hiscore*34763+rand);
        percent = Math.min(0.99, percent);

        //self.wxData.desc = "积少成多，我努力收集了"
        //    +score+'滴水，'
        //    +"超越了"+(0|(percent*100))+"％的好友！你能超过我吗？";
        //self.wxData.desc = this.makeText(score);
		var mtext=this.makeText(score);
		dp_submitScore(score,mtext);
        var layerMask = cc.LayerColor.create(cc.color('rgba(0,0,0,128)'));
        layerMask.attr({
            zOrder: 88,
            opacity: 0
        });
        self.addChild(layerMask);  
        layerMask.delay(0.5).then(function(){
            layerMask.attr('opacity', 128);
            var share = cc.createSprite('share_arraw.png', {
                anchor: [1.0, 1.0],
                xy: [720, 1280],
                opacity: 0,
                scale: 0.5
            });
            layerMask.addChild(share);     

            var text = mtext.replace('我', '你');

            var result = cc.createSprite('@'+text, {
                xy: [360, 720],
                fontSize: 46,
                size: [700, 300],
                textAlign: 'center'
            });
            layerMask.addChild(result);

            var againButton = cc.Button.create('button_bg.png', {
                xy: [360, 600],
                opacity: 0,
            });
            layerMask.addChild(againButton);

            var text = cc.createSprite('@再玩一次', {
                xy: [220, 40],
                fontSize: 46,
                color: '#00a538',
            });
            againButton.setCascadeOpacityEnabled(true);
            againButton.addChild(text);
            againButton.delay(0.5).fadeIn(0.5).act();

            layerMask.delegate(againButton, 'click', function(){
               clickMore();
            });

            var shareButton = cc.Button.create('button_bg.png', {
                xy: [360, 480],
                opacity: 0,
            });
            layerMask.addChild(shareButton);

            text = cc.createSprite('@炫耀一下', {
                xy: [220, 40],
                fontSize: 46,
                color: '#00a538',
            });
            shareButton.setCascadeOpacityEnabled(true);
            shareButton.addChild(text);
            shareButton.delay(1.0).fadeIn(0.5).act();

            layerMask.delegate(shareButton, 'click', function(){
                dp_share();
            });

            var otherButton = cc.Button.create('button_bg.png', {
                xy: [360, 360],
                opacity: 0,
            });
            layerMask.addChild(otherButton);

            text = cc.createSprite('@更多游戏',{
                xy: [220, 40],
                fontSize: 46,
                color: '#00a538',
            });
            otherButton.setCascadeOpacityEnabled(true);
            otherButton.addChild(text);
            otherButton.delay(1.5).fadeIn(0.5).act();

            layerMask.delegate(otherButton, 'click', function(){
                clickMore();
            });
        }).act();
    },
    makeText: function(score){
        var text = '我为地球收集了' + score + '滴水'; 
        if(score > 110000){
            text += '，能够将撒哈拉沙漠变成森林！';
        }
        else if(score > 90000){
            text += '，能够形成一个美丽的湖泊';
        }
        else if(score > 70000){
            text += '，能够形成一片美丽的绿洲';
        }
        else if(score > 50000){
            text += '，形成一条小溪';
        }
        else if(score > 30000){
            text += '，形成一个小池塘'
        }
        else if(score > 10000){
            text += '，装满一个小水缸'
        }
        else if(score > 0){
            text += '，装满一个矿泉水瓶'
        }
		
        return text;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

