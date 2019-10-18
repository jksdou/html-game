/**
 * Created by quanchen on 2014/12/1.
 * 参数记录;
 *
 */



var isTest=true;//是否为本地测试版本 true 是 false 否;
var isNeedFps=false;//是否显示fps帧频;
var username='洛克小蛋蛋'//用户名;
var isNeedTeach=true;//是否出现新手教程;
var isLoadBigPic=true;//是否加载大图;
var defultW=640;
var defultH=1008;
var HEARTNUM=3;//血值;

var CONW=640;
var CONH=1008;


//分数区间;
var scoreInterval=[
    [   0,  1000,0,   0.2],
    [20001,  30000,0.21,0.3],
    [30001,  40000,0.31,0.4],
    [40001,  50000,0.41,0.5],
    [50001,  60000,0.51,0.6],
    [60001,  70000,0.61,0.7],
    [70001,  80000,0.71,0.8],
    [80001, 90000,0.81,0.9],
    [90001,100000,0.91,1]
];
var score=0;//分数;

//合并大图数据;
var gamedata0=
{
    "images": ["images/images0.png"],
    "frames": [

        [448, 299, 55, 74],
        [448, 425, 45, 74],
        [2, 466, 33, 29],
        [2, 2, 278, 462],
        [448, 238, 61, 59],
        [282, 2, 223, 234],
        [282, 238, 164, 222],
        [448, 375, 48, 48],
        [37, 466, 229, 26],
        [282, 462, 111, 38]
    ],
    "animations": {

        "Bitmap29":[0],
        "Bitmap33":[1],
        "E0":[2],
        "EE0037":[3],
        "EE0038":[4],
        "EE0042":[5],
        "EE0048":[6],
        "EE0052":[7],
        "Q6":[8],
        "Z3":[9]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}


var gamedata1=
{
    "images": ["images/images1.png"],
    "frames": [

        [124, 366, 170, 66],
        [2, 2, 356, 75],
        [2, 79, 356, 75],
        [360, 2, 149, 156],
        [391, 388, 106, 116],
        [2, 156, 300, 75],
        [124, 434, 265, 75],
        [2, 233, 297, 60],
        [2, 233, 297, 60],
        [2, 295, 294, 69],
        [298, 323, 207, 63],
        [304, 160, 206, 161],
        [2, 388, 120, 120]
    ],
    "animations": {

        "Bitmap28":[0],
        "E3":[1],
        "E4":[2],
        "EE0040":[3],
        "EE0050":[4],
        "FFFFFF":[5],
        "Q2":[6],
        "Q3":[7],
        "Q3333":[8],
        "Q7":[9],
        "R2":[10],
        "ball17":[11],
        "icon":[12]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}



var gamedata2=
{
    "images": ["images/images2.png"],
    "frames": [

        [446, 2, 44, 74],
        [446, 78, 44, 74],
        [414, 176, 96, 95],
        [2, 276, 189, 195],
        [2, 2, 262, 272],
        [266, 176, 146, 96],
        [373, 274, 133, 222],
        [193, 276, 178, 172],
        [193, 276, 178, 172],
        [266, 2, 178, 172]
    ],
    "animations": {

        "Bitmap31":[0],
        "Bitmap36":[1],
        "E1":[2],
        "EE0001":[3],
        "EE0046":[4],
        "Z2":[5],
        "Z4":[6],
        "ball1":[7],
        "ball25":[8],
        "ball5":[9]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}



var gamedata3=
{
    "images": ["images/images3.png"],
    "frames": [

        [255, 152, 107, 104],
        [429, 347, 37, 74],
        [384, 239, 43, 74],
        [429, 271, 41, 74],
        [447, 119, 42, 74],
        [447, 195, 42, 74],
        [384, 315, 43, 74],
        [2, 267, 189, 195],
        [193, 267, 189, 195],
        [2, 2, 251, 263],
        [364, 152, 81, 85],
        [255, 2, 140, 148],
        [397, 2, 85, 115]
    ],
    "animations": {

        "Bitmap26":[0],
        "Bitmap30":[1],
        "Bitmap32":[2],
        "Bitmap34":[3],
        "Bitmap35":[4],
        "Bitmap37":[5],
        "Bitmap38":[6],
        "EE0003":[7],
        "EE0005":[8],
        "EE0044":[9],
        "EE0049":[10],
        "EE0051":[11],
        "Z1":[12]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}


var gamedata4=
{
    "images": ["images/images4.png"],
    "frames": [

        [180, 289, 176, 174],
        [2, 282, 176, 177],
        [264, 2, 130, 117],
        [2, 2, 260, 81],
        [2, 85, 189, 195],
        [193, 121, 187, 166]
    ],
    "animations": {

        "AA00001":[0],
        "AA00007":[1],
        "Bitmap27":[2],
        "E2":[3],
        "EE0007":[4],
        "ball19":[5]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}


var gamedata5=
{
    "images": ["images/images5.png"],
    "frames": [

        [190, 2, 176, 174],
        [2, 174, 178, 171],
        [2, 2, 186, 170],
        [2, 347, 171, 163],
        [182, 178, 178, 171]
    ],
    "animations": {

        "AA00005":[0],
        "ball13":[1],
        "ball21":[2],
        "ball3":[3],
        "ball9":[4]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}


var gamedata6=
{
    "images": ["images/images6.png"],
    "frames": [

        [2, 2, 176, 169],
        [180, 173, 174, 168],
        [2, 173, 176, 168],
        [180, 2, 174, 169]
    ],
    "animations": {

        "AA00003":[0],
        "ball11":[1],
        "ball23":[2],
        "ball7":[3]
    },
    "texturepacker": [
        "SmartUpdateHash: $TexturePacker:SmartUpdate:effaec617119a892c3ac3be8a0f3a30d:278c0070c855f15e2fe7320c3b8373d6:ddba611840aaa9e1d89eeb71897ce6df$",
        "Created with TexturePacker (http://www.texturepacker.com) for EaselJS"
    ]
}


var gamedataArr=
    [
        gamedata0,gamedata1,
        gamedata2,gamedata3
//        gamedata4,
//        gamedata5,
//        gamedata6
//        gamedata7,
//        gamedata8,gamedata9,
//        gamedata10,gamedata11,
//        gamedata12,gamedata13,
//        gamedata14,gamedata15,
//        gamedata16,gamedata17
    ];

SHARE_ICON_URL='http://roco.qq.com/act/a20141208game/images/icon.png';//分享icon地址;
SHARE_URL='http://roco.qq.com/act/a20141208game/index.html';//分享地址;
SHARE_STR='一起来玩洛克王国滚蛋小游戏吧，我一定让你滚得最远！你敢来挑战吗？';//分享文案;

/*  |xGv00|5c2ca7f7d33fff3ae48da8866571f766 */