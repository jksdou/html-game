
function isAndroid() {  return (/Android/i.test(navigator.userAgent));  }
var atype = "";
if (isAndroid()){atype =".ogg"  }else{    atype =".mp3" };
var res = {
    bgMusic : 'res/bgMusic'+atype,
    role_a1:'res/role_a1'+atype,
    role_a2:'res/role_a2'+atype,
    npc_plist:'res/npc50.plist',
    npc_png:'res/npc50.png',
    helo_plist:'res/helo50.plist',
    helo_png:'res/helo50.png',
     gamebg:'res/gamebg50.jpg',
    gameover_plist: 'res/gameover.plist',
    gameover_png : 'res/gameover.png',
    num_png:"res/num50.png",
    gameintro:"res/gameintro.png",
    start:"res/start0001.png",
    foot:"res/foot2.png"


};
var g_mainmenu = [
    res.npc_png,
	res.npc_plist,
    res.helo_png,
    res.helo_plist,
    res.gameover_plist,
    res.gameover_png,
    res.gameintro,
    res.start,
    res.gamebg,
    res.num_png
  //  res.foot
];
if(GD.SOUND){
    g_mainmenu.push(res.role_a1);
    g_mainmenu.push(res.role_a2);
   // g_mainmenu.push(res.bgMusic);
}

/*  |xGv00|e221e57f222132a778f4be94b6c7f4e2 */