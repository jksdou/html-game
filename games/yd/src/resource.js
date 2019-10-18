var imagePath = 'res/';
var res = {
    logo: 'logo.png',
    btn1: 'btn1.jpg',
    btn2: 'btn2.jpg',
    btn3: 'btn3.jpg',
    btn4: 'btn4.jpg',
    stop: 'stop.png',
    single: 'single.png',
    same: 'same.png',
    htp2: 'htp2.png',
    htp3: 'htp3.png',
    dot: 'dot.jpg',
    dot_current: 'dot_current.jpg',
    logo_ingame: 'logo_ingame.png',
    share: 'share.png',
    add: 'add.jpg',
    minus: 'minus.jpg',
    left:'left.png',
    right:'right.png',
    menuBtn: 'go_to_home.png',
    shopBtn: 'go_to_shop.png'
};

var g_resources = [];
for (var i in res) {
    res[i] = imagePath + res[i];
    g_resources.push(res[i]);
}
