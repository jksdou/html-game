// JavaScript Document
//updateShare(0);
$("#tryagain").on('click',function () {
	document.location.reload();
});
var shownum=0;
var allnum=0;
var allnumshow=0;
var time_num=600;
var clock=null;
var sec=10;
var show=
[{"info":{"index":42,"j":"\u5e01"},"list":[{"index":42,"f":"\u5e63"},{"index":43,"f":"\u958b"},{"index":44,"f":"\u61b6"},{"index":45,"f":"\u6236"},{"index":46,"f":"\u7d2e"},{"index":47,"f":"\u9b25"}]},{"info":{"index":260,"j":"\u95eb"},"list":[{"index":260,"f":"\u9586"},{"index":261,"f":"\u9589"},{"index":262,"f":"\u554f"},{"index":263,"f":"\u95d6"},{"index":264,"f":"\u967d"},{"index":265,"f":"\u9670"}]},{"info":{"index":658,"j":"\u866e"},"list":[{"index":658,"f":"\u87e3"},{"index":659,"f":"\u896f"},{"index":660,"f":"\u898f"},{"index":661,"f":"\u8993"},{"index":662,"f":"\u8996"},{"index":663,"f":"\u8a86"}]},{"info":{"index":847,"j":"\u6b8b"},"list":[{"index":847,"f":"\u6b98"},{"index":848,"f":"\u6c08"},{"index":849,"f":"\u6c2b"},{"index":850,"f":"\u6fa9"},{"index":851,"f":"\u6f54"},{"index":852,"f":"\u7051"}]},{"info":{"index":1003,"j":"\u949f"},"list":[{"index":1003,"f":"\u937e"},{"index":1004,"f":"\u9209"},{"index":1005,"f":"\u92c7"},{"index":1006,"f":"\u92fc"},{"index":1007,"f":"\u9211"},{"index":1008,"f":"\u9210"}]},{"info":{"index":1360,"j":"\u63b7"},"list":[{"index":1360,"f":"\u64f2"},{"index":1361,"f":"\u64a3"},{"index":1362,"f":"\u647b"},{"index":1363,"f":"\u645c"},{"index":1364,"f":"\u6582"},{"index":1365,"f":"\u65b7"}]},{"info":{"index":1522,"j":"\u94f1"},"list":[{"index":1522,"f":"\u92a5"},{"index":1523,"f":"\u93df"},{"index":1524,"f":"\u9283"},{"index":1525,"f":"\u940b"},{"index":1526,"f":"\u92a8"},{"index":1527,"f":"\u9280"}]},{"info":{"index":1780,"j":"\u5ad4"},"list":[{"index":1780,"f":"\u5b2a"},{"index":1781,"f":"\u5be2"},{"index":1782,"f":"\u5c37"},{"index":1783,"f":"\u810a"},{"index":1784,"f":"\u6e63"},{"index":1785,"f":"\u61fe"}]},{"info":{"index":1997,"j":"\u8c31"},"list":[{"index":1997,"f":"\u8b5c"},{"index":1998,"f":"\u8b4e"},{"index":1999,"f":"\u8d05"},{"index":2000,"f":"\u8cfb"},{"index":2001,"f":"\u8cfa"},{"index":2002,"f":"\u8cfd"}]},{"info":{"index":2195,"j":"\u9cad"},"list":[{"index":2195,"f":"\u9bd6"},{"index":2196,"f":"\u9bea"},{"index":2197,"f":"\u9beb"},{"index":2198,"f":"\u9be1"},{"index":2199,"f":"\u9be4"},{"index":2200,"f":"\u9be7"}]}];
var showtmp=show;

$("#start").on('click',function () {
		document.getElementById('wbegin').style.display = "none";
		document.getElementById('main').style.display = "block";
		init();
	});


function randArray(data){
    //获取数组长度
    var arrlen = data.length;
    //创建数组 存放下标数
    var try1 = new Array();
    for(var i = 0;i < arrlen; i++){
        try1[i] = i;
    }
    //创建数组 生成随机下标数
    var try2 = new Array();
    for(var i = 0;i < arrlen; i++){
        try2[i] = try1.splice(Math.floor(Math.random() * try1.length),1);
    }
    //创建数组，生成对应随机下标数的数组
    var try3 = new Array();
    for(var i = 0; i < arrlen; i++){
        try3[i] = data[try2[i]];
    }
    return try3;
}

//show=randArray(show);
function init(){
	//shows(shownum);
    time();
	$('#selects_box').off('click');	
	newpage();
	
}
var s=0;
function shows(shownum){
	$(".font").text(show[shownum]['info']['j']);
	var p = Math.floor(Math.random()*6);
	for(var i=0;i<6;i++){
		$("#s_"+i).text(show[shownum]['list'][i]['f']);
	}
	s=p;
	$("#s_"+p).text(show[shownum]['list'][0]['f']);
	$("#s_0").text(show[shownum]['list'][p]['f']);
	isWin(shownum);
}
function update(){
	$('.time span').text(sec);
	$('.cell').removeClass('err');
	$('.cell').removeClass('cor');
	clock = setTimeout('time()',time_num);
	allnum++;
	if(shownum < 9){
	shownum++;	
	shows(shownum);
	}
	else{
		show=showtmp;	
		newpage();
	}
}

function newpage(){
	shownum = 0;
	$('.time span').text(sec);
	$('.cell').removeClass('err');
	$('.cell').removeClass('cor');
	show=randArray(show);		
	shows(shownum);
}

function isWin(shownum){
	$("#selects_box").on('click', '.cell', function () {
		if ($(this).text() == show[shownum]['list'][0]['f']) {
			$(this).addClass('cor');
			$('#selects_box').off('click');
			clearInterval(clock);
			setTimeout("update()",time_num);
		} else {			
			$(this).addClass('err');
			$("#s_"+s).addClass('cor');
			$('#selects_box').off('click');			
			allnumshow=allnum;           			
			fuzhi();		
			setTimeout("gameover()",1800);			
		}
       
        
        
	});
}

function gameover(){
    clearInterval(clock);
    //updateShare(allnumshow);
	//Play68.setRankingScoreDesc(allnumshow);
    $('#wend').show();
	$('#main').hide();
}

function fuzhi(){
         if(allnumshow == 0){
                    document.getElementById('text_pic').className = 'lose'; 
                    document.getElementById('text_top').innerHTML = '一个字都没认出来';
                    document.getElementById('text_bottom').innerHTML = '你的小伙们都惊呆了，没文化真可怕';
                }else if(allnumshow <= 10 && allnumshow > 0){
                    document.getElementById('text_pic').className = 'lose'; 
                    document.getElementById('text_top').innerHTML = '认识<span id="shownum">' + allnumshow + '</span>个繁体字';
                    document.getElementById('text_bottom').innerHTML = '你语文是数学老师教的吧，再来一把展现你的实力';
                }else if(allnumshow > 10 && allnumshow <= 50){
                    document.getElementById('text_pic').className = 'win';                     
                    document.getElementById('text_top').innerHTML = '认识<span id="shownum">' + allnumshow + '</span>个繁体字';
                    document.getElementById('text_bottom').innerHTML = '水平杠杠的，去香港和台湾都平趟了';
                }else if(allnumshow > 50 && allnumshow <= 100){
                    document.getElementById('text_pic').className = 'win'; 
                    document.getElementById('text_top').innerHTML = '认识<span id="shownum">' + allnumshow + '</span>个繁体字';
                    document.getElementById('text_bottom').innerHTML = '水平深不可测，你从古代穿越过来的吧';
                }else if(allnumshow > 100 && allnumshow <= 1000){
                    document.getElementById('text_pic').className = 'win';  
                    document.getElementById('text_top').innerHTML = '认识<span id="shownum">' + allnumshow + '</span>个繁体字';
                    document.getElementById('text_bottom').innerHTML = '你有国学大师的素养，国家的栋梁之材！';
                }else if(allnumshow > 1000){
                    document.getElementById('text_pic').className = 'win';  
                    document.getElementById('text_top').innerHTML = '认识<span id="shownum">' + allnumshow + '</span>个繁体字';
                    document.getElementById('text_bottom').innerHTML = '你是神一样的人，才华超出人类范围';
                }    
}
function time(){
	var time = $('.time').text();
	var second = parseInt(time);
	if(second <= 0){		
		$('#selects_box').off('click');
		allnumshow=allnum;
        fuzhi();
		$("#s_"+s).addClass('cor');
		setTimeout("gameover()",1800);
	}else{
	second--;
	time = second + 's';
	$('.time span').text(second);
	clock = setTimeout('time()',1000);
	}
	
}

$("#whshare").on('click',function () {
	//play68_submitScore(allnumshow);
									 });

/* 手机屏幕高度 */
var isDesktop = navigator['userAgent'].match(/(ipad|iphone|ipod|android|windows phone)/i) ? false : true;;
function scr(){
var height  = isDesktop ? 1000 : ((window.innerWidth>window.innerHeight?window.innerWidth:window.innerHeight));
height = height + 'px';
$(".wrap").css('height', height);
}
setTimeout('scr()',600);