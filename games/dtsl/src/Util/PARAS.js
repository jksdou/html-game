//页面层
var g_GameZOrder = {bg: 0, ui: 1, front: 100};
//数字变更的时间
var NO_TIME = 0.6;

//板子更新策略
var g_GameLevel = {level1: 1, level2: 2, level3: 3, level4: 4, level5: 5, level6: 6};

//谁的轮
var g_WhosTurn = {player: 1, AI: 0};

//board移动的速度
var MoveSpeed = {slow: 0.6, normal: 0.4, fast: 0.2};

//策略参数
var move_Direct = {
    forw: -1,
    rever: 1
}

var move_Oper = {
    //小圈
    level2_sc: 0,
    //中圈
    level2_mc: 1,
    //大圈
    level2_bc: 2
}

//胜利状态
var j_SuccState = {
    success: 1,
    failed: 0,
    nosure: 2
}