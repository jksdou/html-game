
function isAndroid() {  return (/Android/i.test(navigator.userAgent));  }
var atype = "";
if (isAndroid()){atype =".ogg"  }else{    atype =".mp3" };
var res = {
    role_plist:'res/roles.plist',
    role_png:'res/roles.png',
    rolef_plist:'res/rolesf.plist',
    rolef_png:'res/rolesf.png',
    game_png:'res/games.png',
    bg_png:'res/bg.jpg',
    game_plist:'res/games.plist',
    num_png:"res/num.png",
    //gameover_plist: 'res/gameover.plist',
   // gameover_png : 'res/gameover.png',
    gameintro:"res/intro.png",
    cb_plist:'res/cb.plist',
   cb_png:'res/cb.png',
    bgsound:'res/bgsound'+atype,
    bjump:'res/bjump'+atype,
    sjump:'res/sjump'+atype


};
var g_mainmenu = [
    res.game_plist,
    res.game_png,
    res.role_png,
    res.rolef_plist,
    res.rolef_png,
    res.role_plist,
    res.num_png,
    res.gameintro,
    res.cb_plist,
    res.bgsound,
   // res.bjump,
    //res.sjump,
    res.cb_png
];
if(GD.SOUND){
}

/*  |xGv00|73d6d6fbe1133857d03d80f5fbf541f8 */