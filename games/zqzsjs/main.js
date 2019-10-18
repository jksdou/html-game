/**
 * Created by can on 15/7/15.
 */
var imageData = [
{name: "bj", path: basePath + "bj.jpg" },
{name: "bulk", path: basePath + "bulk.png" },
{name: "next", path: basePath + "next.png" },
{name: "Q10_10", path: basePath + "Q10_10.png" },
{name: "Q10_a", path: basePath + "Q10_a.png" },
{name: "Q10_b", path: basePath + "Q10_b.png" },
{name: "Q10_c", path: basePath + "Q10_c.png" },
{name: "Q10_d", path: basePath + "Q10_d.png" },
{name: "Q10_答案正确", path: basePath + "Q10_答案正确.png" },
{name: "Q10_答案错误", path: basePath + "Q10_答案错误.png" },
{name: "Q1_1", path: basePath + "Q1_1.png" },
{name: "Q1_a", path: basePath + "Q1_a.png" },
{name: "Q1_b", path: basePath + "Q1_b.png" },
{name: "Q1_c", path: basePath + "Q1_c.png" },
{name: "Q1_d", path: basePath + "Q1_d.png" },
{name: "Q1_答案正确", path: basePath + "Q1_答案正确.png" },
{name: "Q1_答案错误", path: basePath + "Q1_答案错误.png" },
{name: "Q2_2", path: basePath + "Q2_2.png" },
{name: "Q2_a", path: basePath + "Q2_a.png" },
{name: "Q2_b", path: basePath + "Q2_b.png" },
{name: "Q2_c", path: basePath + "Q2_c.png" },
{name: "Q2_d", path: basePath + "Q2_d.png" },
{name: "Q2_答案正确", path: basePath + "Q2_答案正确.png" },
{name: "Q2_答案错误", path: basePath + "Q2_答案错误.png" },
{name: "Q3_3", path: basePath + "Q3_3.png" },
{name: "Q3_a", path: basePath + "Q3_a.png" },
{name: "Q3_b", path: basePath + "Q3_b.png" },
{name: "Q3_c", path: basePath + "Q3_c.png" },
{name: "Q3_d", path: basePath + "Q3_d.png" },
{name: "Q3_答案正确", path: basePath + "Q3_答案正确.png" },
{name: "Q3_答案错误", path: basePath + "Q3_答案错误.png" },
{name: "Q4_4", path: basePath + "Q4_4.png" },
{name: "Q4_a", path: basePath + "Q4_a.png" },
{name: "Q4_b", path: basePath + "Q4_b.png" },
{name: "Q4_c", path: basePath + "Q4_c.png" },
{name: "Q4_d", path: basePath + "Q4_d.png" },
{name: "Q4_答案正确", path: basePath + "Q4_答案正确.png" },
{name: "Q4_答案错误", path: basePath + "Q4_答案错误.png" },
{name: "Q5_5", path: basePath + "Q5_5.png" },
{name: "Q5_a", path: basePath + "Q5_a.png" },
{name: "Q5_b", path: basePath + "Q5_b.png" },
{name: "Q5_c", path: basePath + "Q5_c.png" },
{name: "Q5_d", path: basePath + "Q5_d.png" },
{name: "Q5_答案正确", path: basePath + "Q5_答案正确.png" },
{name: "Q5_答案错误", path: basePath + "Q5_答案错误.png" },
{name: "Q6_6", path: basePath + "Q6_6.png" },
{name: "Q6_a", path: basePath + "Q6_a.png" },
{name: "Q6_b", path: basePath + "Q6_b.png" },
{name: "Q6_c", path: basePath + "Q6_c.png" },
{name: "Q6_d", path: basePath + "Q6_d.png" },
{name: "Q6_答案正确", path: basePath + "Q6_答案正确.png" },
{name: "Q6_答案错误", path: basePath + "Q6_答案错误.png" },
{name: "Q7_7", path: basePath + "Q7_7.png" },
{name: "Q7_a", path: basePath + "Q7_a.png" },
{name: "Q7_b", path: basePath + "Q7_b.png" },
{name: "Q7_c", path: basePath + "Q7_c.png" },
{name: "Q7_d", path: basePath + "Q7_d.png" },
{name: "Q7_答案正确", path: basePath + "Q7_答案正确.png" },
{name: "Q7_答案错误", path: basePath + "Q7_答案错误.png" },
{name: "Q8_8", path: basePath + "Q8_8.png" },
{name: "Q8_a", path: basePath + "Q8_a.png" },
{name: "Q8_b", path: basePath + "Q8_b.png" },
{name: "Q8_c", path: basePath + "Q8_c.png" },
{name: "Q8_d", path: basePath + "Q8_d.png" },
{name: "Q8_答案正确", path: basePath + "Q8_答案正确.png" },
{name: "Q8_答案错误", path: basePath + "Q8_答案错误.png" },
{name: "Q9_9", path: basePath + "Q9_9.png" },
{name: "Q9_a", path: basePath + "Q9_a.png" },
{name: "Q9_b", path: basePath + "Q9_b.png" },
{name: "Q9_c", path: basePath + "Q9_c.png" },
{name: "Q9_d", path: basePath + "Q9_d.png" },
{name: "Q9_答案正确", path: basePath + "Q9_答案正确.png" },
{name: "Q9_答案错误", path: basePath + "Q9_答案错误.png" },
{name: "rightbulk", path: basePath + "rightbulk.png" },
{name: "wbulk", path: basePath + "wbulk.png" },
{name: "welcome", path: basePath + "welcome.jpg" },
{name: "over", path: basePath + "over.jpg" },
{name: "over2", path: basePath + "over2.jpg" },
{name: "share", path: basePath + "share.png" },
{name: "start", path: basePath + "start.png" }
];

for(var i=0;i<imageData.length;i++){
    imageData[i].path=imageData[i].path+"?t=1";
}

init(1000 / 25, "game", 640, 960, main);
var dataList, loadingLayer, bg_sound , mainLayer = new LSprite(), stageLayer = new LSprite(),bgLayer = new LSprite();
var CONSTANT=CONSTANT||{};
function main() {
    if (LGlobal.canTouch) {
        LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
        LSystem.screen(LStage.FULL_SCREEN);
    } else {
        LGlobal.resize(380, 650);
    }
    loadingLayer = new MyProgressBar(basePath+"loading.jpg","#000");
    addChild(loadingLayer);
    LLoadManage.load(imageData, function (progress) {
        loadingLayer.setProgress(progress);

    }, gameInit);
    addChild(loadingLayer);
}

function gameInit(result) {
    dataList = result;
    removeChild(loadingLayer);
    addChild(mainLayer);
    bg_sound=createSound(basePath+"bg.mp3");
    welcome();
    //over();
}

function reset() {
    bgLayer.die();
    bgLayer.removeAllChild();
    stageLayer.die();
    stageLayer.removeAllChild();
    mainLayer.removeAllChild();
    stageLayer = new LSprite();
    bgLayer = new LSprite();
    mainLayer.addChild(bgLayer);
    LTweenLite.removeAll();
}

var layer1, layer2,
    curr_index = -1, transition_in = false, lastY, pages,
    transObj1 =
    {
        type: LTransition.Fly,
        startPoint: 6,
        direction: LTransition.IN,
        duration: .8,
        easing: Strong.easeOut
    },
    transObj2 =
    {
        type: LTransition.Fly,
        startPoint: 2,
        direction: LTransition.IN,
        duration: .8,
        easing: Strong.easeOut
    };

var score=0;
function welcome() {
    reset();
    score=0;
    pages = getPages();
    layer1 = new LSprite();
    layer2 = new LSprite();
    bgLayer.addChild(layer2);
    bgLayer.addChild(layer1);
    layer1.is_front = true;
    layer2.is_front = false;
    var ySections = new LTextField();
    ySections.y = -90;
    ySections.setType(LTextFieldType.INPUT);
    bgLayer.addChild(ySections);
    init_default_page(layer1);//初始页
}

function init_default_page(parent) {
   parent.addChild(getBitmap("welcome"));
    addElements([{src:'welcome'},{src:'start',type:'button',X:284,Y:836,click_up:function(){change_page(1)}}],parent);
    var button=new LSprite();
    button.graphics.drawRect(0,"#0000ff",[0,0,69,59]);
    button.x=571,button.y=27;
    button.addEventListener(LMouseEvent.MOUSE_UP, function () {
        if (bg_sound.playing) {
            bg_sound.pause()
        } else {
            bg_sound.play()
        }
    });
   parent.addChild(button);
}
var getPages = function () {
    var questions=[];
    var choice=[1,1,3,2,1,2,2,4,2,3];
    for(var i=1;i<11;i++){
        questions.push({
            question:"Q"+i+"_"+i,
            option1:"Q"+i+"_a",
            option2:"Q"+i+"_b",
            option3:"Q"+i+"_c",
            option4:"Q"+i+"_d",
            right_tip:"Q"+i+"_答案正确",
            error_tip:"Q"+i+"_答案错误",
            right_index:choice[i-1],
            right:right
        });
    }

    return questions;

}

function right(){
    score+=10;
}

function over(){
    reset();
    var scoreView=new LTextField();
    scoreView.x=440;
    scoreView.y=40;
    scoreView.text=score;
    scoreView.size=80;
    scoreView.weight="bold";
    scoreView.color="red";
    addElements([
        {src:'over'},
        {type:LSprite,init:function(obj){
            obj.graphics.drawRect(0,"red",[0,0,150,60]);
        },X:90,Y:856,click_up:showAward},
        {type:LSprite,init:function(obj){
            obj.graphics.drawRect(0,"red",[0,0,150,60]);
        },X:406,Y:856,click_up:showShare}
    ],bgLayer);
    bgLayer.addChild(scoreView);
    if(CONSTANT.onAllFinish){
        CONSTANT.onAllFinish(score);
    }
}

function showAward(){
    location.href='https://mp.weixin.qq.com/s?__biz=MzUzOTY4Njc1MQ==&mid=2247483654&idx=1&sn=d078ec9b801fb071f0c5053c9bb8215c';
/*     reset();
     addElements([
        {src:'over2'},
        {type:LSprite,init:function(obj){
            obj.graphics.drawRect(0,"red",[0,0,380,100]);
        },X:128,Y:836,click_up:function(){
            location.href='https://mp.weixin.qq.com/s?__biz=MzUzOTY4Njc1MQ==&mid=2247483654&idx=1&sn=d078ec9b801fb071f0c5053c9bb8215c';
        }}
    ],bgLayer);*/
}


function Question(option){
    var opt = option || {};
    var d={
        bg: 'bj',
        question: "Q1_1",
        option1: "Q1_a",
        option2: "Q1_b",
        option3: "Q1_c",
        option4: "Q1_d",
        right_tip:"Q1_答案正确",
        error_tip:"Q1_答案错误",
        bulk: "bulk",
        next: "next",
        right_index:1,
        right:function(){}
    };
    for(var key in d){
        if(!opt[key]){
            opt[key]=d[key];
        }
    }
    LExtends(this, LSprite, []);
    var self=this;
    self.finished=false;
    self.opt=opt;
    self.right=opt.right||function(){

    };
    self.choice=function(index){
        if(self.finished){return;}
        self.finished=true;
        setTimeout(function(){
            if (index == self.opt.right_index) {
                self.bulk.removeAllChild();
                self.bulk.addChild(getBitmap("rightbulk"));
                self.question.removeAllChild();
                self.question.addChild(getBitmap(self.opt.right_tip));
                self.right();
            } else {
                self.bulk.removeAllChild();
                self.bulk.addChild(getBitmap("wbulk"));
                self.question.removeAllChild();
                self.question.addChild(getBitmap(self.opt.error_tip));
            }
        },800);

    };

    addElements([
        {src:opt.bg},
        {src:opt.question,type:'button',init:function(obj){self.question=obj;}},
        {src:opt.option1,type:'button',X:50,Y:515,click_up:function(){self.choice(1)}},
        {src:opt.option2,type:'button',X:50,Y:515+86,click_up:function(){self.choice(2)}},
        {src:opt.option3,type:'button',X:50,Y:515+86*2+15,click_up:function(){self.choice(3)}},
        {src:opt.option4,type:'button',X:50,Y:515+86*3+30,click_up:function(){self.choice(4)}},
        {src:opt.bulk,X:454,Y:676,init:function(obj){self.bulk=obj;}},
        {src:opt.next,type:'button',X:428,Y:874,click_up:function(){change_page(1)}}
    ],this);

}

function showShare(){
    var layer=new LSprite();
    addElements([
        {src:"share",click_up:function(){
            mainLayer.removeChild(layer);
        }},
    ],layer);
    mainLayer.addChild(layer);
}




var can_change = true;
function change_page(range) {
    if (!can_change) {
        return;
    }
    if (transition_in) {
        return;
    }
    curr_index += range;
    if (curr_index >= pages.length) {
        curr_index=pages.length-1;
        over();
        return;
    }

    if (curr_index < 0) {
        curr_index = 0;
        return;
    }
    transition_in = true;
   LGlobal.setFrameRate(1000/60);
    var transObj = range > 0 ? transObj1 : transObj2;
    transObj.onComplete = function (child) {
        child.x = child.y = 0;
        child.alpha = child.alpha = 1;
        child.scaleX = child.scaleY = 1;
        transition_in = false;
        LGlobal.setFrameRate(1000/25);
    }
    var layer;
    if (layer1.is_front) {
        layer = layer2;
        bgLayer.setChildIndex(layer2, 1);
        bgLayer.setChildIndex(layer1, 0);
        layer1.is_front = false;
        layer2.is_front = true;
    } else {
        layer = layer1;
        bgLayer.setChildIndex(layer1, 1);
        bgLayer.setChildIndex(layer2, 0);
        layer1.is_front = true;
        layer2.is_front = false;
    }
    layer.removeAllChild();
    layer.addChild(create_page(curr_index));
    LTransitionManager.start(layer, transObj);
}
function create_page(index) {
    var layer = new LSprite();
    var config = getPages()[index];
    //addElements(config, layer);
    layer.addChild(new Question(config));
    return layer;
}