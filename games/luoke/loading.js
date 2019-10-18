(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#666666",
	manifest: [
		{src:"images/AA00001.png", id:"AA00001"},
		{src:"images/AA00003.png", id:"AA00003"},
		{src:"images/AA00005.png", id:"AA00005"},
		{src:"images/AA00007.png", id:"AA00007"},
		{src:"images/Bitmap28.png", id:"Bitmap28"},
		{src:"images/Q2.png", id:"Q2"}
	]
};



// symbols:



(lib.AA00001 = function() {
	this.initialize(img.AA00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,174);


(lib.AA00003 = function() {
	this.initialize(img.AA00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,169);


(lib.AA00005 = function() {
	this.initialize(img.AA00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,174);


(lib.AA00007 = function() {
	this.initialize(img.AA00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,177);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,66);


(lib.Q2 = function() {
	this.initialize(img.Q2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,75);


(lib.元件19 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Q2, null, new cjs.Matrix2D(1,0,0,1,-132.5,-13.8)).s().p("A0rCJIAAkRMApXAAAIAAERg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-13.7,265,27.6);


(lib.元件14 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Q2, null, new cjs.Matrix2D(1,0,0,1,-132.5,-51.3)).s().p("A0rDtIAAnZMApXAAAIAAHZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-23.7,265,47.5);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.AA00001();
	this.instance.setTransform(63,228.3);

	this.instance_1 = new lib.AA00003();
	this.instance_1.setTransform(63.3,233.3);

	this.instance_2 = new lib.AA00005();
	this.instance_2.setTransform(63,228);

	this.instance_3 = new lib.AA00007();
	this.instance_3.setTransform(63,226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,228.3,176,174);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ag7CEIAAkHIB2AAIAAEHg");
	var mask_graphics_1 = new cjs.Graphics().p("AhICEIAAkHICRAAIAAEHg");
	var mask_graphics_2 = new cjs.Graphics().p("AhWCEIAAkHICtAAIAAEHg");
	var mask_graphics_3 = new cjs.Graphics().p("AhkCEIAAkHIDJAAIAAEHg");
	var mask_graphics_4 = new cjs.Graphics().p("AhyCEIAAkHIDlAAIAAEHg");
	var mask_graphics_5 = new cjs.Graphics().p("AiACEIAAkHIEBAAIAAEHg");
	var mask_graphics_6 = new cjs.Graphics().p("AiNCEIAAkHIEbAAIAAEHg");
	var mask_graphics_7 = new cjs.Graphics().p("AibCEIAAkHIE3AAIAAEHg");
	var mask_graphics_8 = new cjs.Graphics().p("AipCEIAAkHIFTAAIAAEHg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai3CEIAAkHIFvAAIAAEHg");
	var mask_graphics_10 = new cjs.Graphics().p("AjFCEIAAkHIGKAAIAAEHg");
	var mask_graphics_11 = new cjs.Graphics().p("AjSCEIAAkHIGlAAIAAEHg");
	var mask_graphics_12 = new cjs.Graphics().p("AjgCEIAAkHIHBAAIAAEHg");
	var mask_graphics_13 = new cjs.Graphics().p("AjuCEIAAkHIHdAAIAAEHg");
	var mask_graphics_14 = new cjs.Graphics().p("Aj8CEIAAkHIH4AAIAAEHg");
	var mask_graphics_15 = new cjs.Graphics().p("AkKCEIAAkHIIUAAIAAEHg");
	var mask_graphics_16 = new cjs.Graphics().p("AkXCEIAAkHIIvAAIAAEHg");
	var mask_graphics_17 = new cjs.Graphics().p("AklCEIAAkHIJLAAIAAEHg");
	var mask_graphics_18 = new cjs.Graphics().p("AkzCEIAAkHIJnAAIAAEHg");
	var mask_graphics_19 = new cjs.Graphics().p("AlBCEIAAkHIKDAAIAAEHg");
	var mask_graphics_20 = new cjs.Graphics().p("AlOCEIAAkHIKdAAIAAEHg");
	var mask_graphics_21 = new cjs.Graphics().p("AlcCEIAAkHIK5AAIAAEHg");
	var mask_graphics_22 = new cjs.Graphics().p("AlqCEIAAkHILVAAIAAEHg");
	var mask_graphics_23 = new cjs.Graphics().p("Al4CEIAAkHILxAAIAAEHg");
	var mask_graphics_24 = new cjs.Graphics().p("AmGCEIAAkHIMMAAIAAEHg");
	var mask_graphics_25 = new cjs.Graphics().p("AmTCEIAAkHIMnAAIAAEHg");
	var mask_graphics_26 = new cjs.Graphics().p("AmhCEIAAkHINDAAIAAEHg");
	var mask_graphics_27 = new cjs.Graphics().p("AmvCEIAAkHINfAAIAAEHg");
	var mask_graphics_28 = new cjs.Graphics().p("Am9CEIAAkHIN7AAIAAEHg");
	var mask_graphics_29 = new cjs.Graphics().p("AnLCEIAAkHIOWAAIAAEHg");
	var mask_graphics_30 = new cjs.Graphics().p("AnYCEIAAkHIOxAAIAAEHg");
	var mask_graphics_31 = new cjs.Graphics().p("AnmCEIAAkHIPNAAIAAEHg");
	var mask_graphics_32 = new cjs.Graphics().p("An0CEIAAkHIPpAAIAAEHg");
	var mask_graphics_33 = new cjs.Graphics().p("AoCCEIAAkHIQFAAIAAEHg");
	var mask_graphics_34 = new cjs.Graphics().p("AoQCEIAAkHIQhAAIAAEHg");
	var mask_graphics_35 = new cjs.Graphics().p("AodCEIAAkHIQ7AAIAAEHg");
	var mask_graphics_36 = new cjs.Graphics().p("AorCEIAAkHIRXAAIAAEHg");
	var mask_graphics_37 = new cjs.Graphics().p("Ao5CEIAAkHIRzAAIAAEHg");
	var mask_graphics_38 = new cjs.Graphics().p("ApHCEIAAkHISPAAIAAEHg");
	var mask_graphics_39 = new cjs.Graphics().p("ApVCEIAAkHISqAAIAAEHg");
	var mask_graphics_40 = new cjs.Graphics().p("ApiCEIAAkHITFAAIAAEHg");
	var mask_graphics_41 = new cjs.Graphics().p("ApwCEIAAkHIThAAIAAEHg");
	var mask_graphics_42 = new cjs.Graphics().p("Ap+CEIAAkHIT9AAIAAEHg");
	var mask_graphics_43 = new cjs.Graphics().p("AqMCEIAAkHIUYAAIAAEHg");
	var mask_graphics_44 = new cjs.Graphics().p("AqaCEIAAkHIU0AAIAAEHg");
	var mask_graphics_45 = new cjs.Graphics().p("AqnCEIAAkHIVPAAIAAEHg");
	var mask_graphics_46 = new cjs.Graphics().p("Aq1CEIAAkHIVrAAIAAEHg");
	var mask_graphics_47 = new cjs.Graphics().p("ArDCEIAAkHIWHAAIAAEHg");
	var mask_graphics_48 = new cjs.Graphics().p("ArRCEIAAkHIWjAAIAAEHg");
	var mask_graphics_49 = new cjs.Graphics().p("AreCEIAAkHIW9AAIAAEHg");
	var mask_graphics_50 = new cjs.Graphics().p("ArsCEIAAkHIXZAAIAAEHg");
	var mask_graphics_51 = new cjs.Graphics().p("Ar6CEIAAkHIX1AAIAAEHg");
	var mask_graphics_52 = new cjs.Graphics().p("AsICEIAAkHIYRAAIAAEHg");
	var mask_graphics_53 = new cjs.Graphics().p("AsWCEIAAkHIYtAAIAAEHg");
	var mask_graphics_54 = new cjs.Graphics().p("AsjCEIAAkHIZHAAIAAEHg");
	var mask_graphics_55 = new cjs.Graphics().p("AsxCEIAAkHIZjAAIAAEHg");
	var mask_graphics_56 = new cjs.Graphics().p("As/CEIAAkHIZ/AAIAAEHg");
	var mask_graphics_57 = new cjs.Graphics().p("AtNCEIAAkHIabAAIAAEHg");
	var mask_graphics_58 = new cjs.Graphics().p("AtbCEIAAkHIa2AAIAAEHg");
	var mask_graphics_59 = new cjs.Graphics().p("AtoCEIAAkHIbRAAIAAEHg");
	var mask_graphics_60 = new cjs.Graphics().p("At2CEIAAkHIbtAAIAAEHg");
	var mask_graphics_61 = new cjs.Graphics().p("AuECEIAAkHIcJAAIAAEHg");
	var mask_graphics_62 = new cjs.Graphics().p("AuSCEIAAkHIclAAIAAEHg");
	var mask_graphics_63 = new cjs.Graphics().p("AugCEIAAkHIdBAAIAAEHg");
	var mask_graphics_64 = new cjs.Graphics().p("AutCEIAAkHIdbAAIAAEHg");
	var mask_graphics_65 = new cjs.Graphics().p("Au7CEIAAkHId3AAIAAEHg");
	var mask_graphics_66 = new cjs.Graphics().p("AvJCEIAAkHIeTAAIAAEHg");
	var mask_graphics_67 = new cjs.Graphics().p("AvXCEIAAkHIevAAIAAEHg");
	var mask_graphics_68 = new cjs.Graphics().p("AvlCEIAAkHIfLAAIAAEHg");
	var mask_graphics_69 = new cjs.Graphics().p("AvyCEIAAkHIflAAIAAEHg");
	var mask_graphics_70 = new cjs.Graphics().p("AwACEIAAkHMAgBAAAIAAEHg");
	var mask_graphics_71 = new cjs.Graphics().p("AwOCEIAAkHMAgdAAAIAAEHg");
	var mask_graphics_72 = new cjs.Graphics().p("AwcCEIAAkHMAg4AAAIAAEHg");
	var mask_graphics_73 = new cjs.Graphics().p("AwqCEIAAkHMAhUAAAIAAEHg");
	var mask_graphics_74 = new cjs.Graphics().p("Aw3CEIAAkHMAhvAAAIAAEHg");
	var mask_graphics_75 = new cjs.Graphics().p("AxFCEIAAkHMAiLAAAIAAEHg");
	var mask_graphics_76 = new cjs.Graphics().p("AxTCEIAAkHMAinAAAIAAEHg");
	var mask_graphics_77 = new cjs.Graphics().p("AxhCEIAAkHMAjCAAAIAAEHg");
	var mask_graphics_78 = new cjs.Graphics().p("AxuCEIAAkHMAjdAAAIAAEHg");
	var mask_graphics_79 = new cjs.Graphics().p("Ax8CEIAAkHMAj5AAAIAAEHg");
	var mask_graphics_80 = new cjs.Graphics().p("AyKCEIAAkHMAkVAAAIAAEHg");
	var mask_graphics_81 = new cjs.Graphics().p("AyYCEIAAkHMAkxAAAIAAEHg");
	var mask_graphics_82 = new cjs.Graphics().p("AymCEIAAkHMAlNAAAIAAEHg");
	var mask_graphics_83 = new cjs.Graphics().p("AyzCEIAAkHMAlnAAAIAAEHg");
	var mask_graphics_84 = new cjs.Graphics().p("AzBCEIAAkHMAmDAAAIAAEHg");
	var mask_graphics_85 = new cjs.Graphics().p("AzPCEIAAkHMAmfAAAIAAEHg");
	var mask_graphics_86 = new cjs.Graphics().p("AzdCEIAAkHMAm7AAAIAAEHg");
	var mask_graphics_87 = new cjs.Graphics().p("AzrCEIAAkHMAnWAAAIAAEHg");
	var mask_graphics_88 = new cjs.Graphics().p("Az4CEIAAkHMAnxAAAIAAEHg");
	var mask_graphics_89 = new cjs.Graphics().p("A0GCEIAAkHMAoNAAAIAAEHg");
	var mask_graphics_90 = new cjs.Graphics().p("A0UCEIAAkHMAopAAAIAAEHg");
	var mask_graphics_91 = new cjs.Graphics().p("A0iCEIAAkHMApFAAAIAAEHg");
	var mask_graphics_92 = new cjs.Graphics().p("A0wCEIAAkHMApgAAAIAAEHg");
	var mask_graphics_93 = new cjs.Graphics().p("A09CEIAAkHMAp7AAAIAAEHg");
	var mask_graphics_94 = new cjs.Graphics().p("A1LCEIAAkHMAqXAAAIAAEHg");
	var mask_graphics_95 = new cjs.Graphics().p("A1ZCEIAAkHMAqzAAAIAAEHg");
	var mask_graphics_96 = new cjs.Graphics().p("A1nCEIAAkHMArPAAAIAAEHg");
	var mask_graphics_97 = new cjs.Graphics().p("A11CEIAAkHMArrAAAIAAEHg");
	var mask_graphics_98 = new cjs.Graphics().p("A2CCEIAAkHMAsFAAAIAAEHg");
	var mask_graphics_99 = new cjs.Graphics().p("A2QCEIAAkHMAshAAAIAAEHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-140.6,y:-4.9}).wait(1).to({graphics:mask_graphics_1,x:-139.2,y:-4.9}).wait(1).to({graphics:mask_graphics_2,x:-137.8,y:-4.9}).wait(1).to({graphics:mask_graphics_3,x:-136.4,y:-4.9}).wait(1).to({graphics:mask_graphics_4,x:-135.1,y:-4.9}).wait(1).to({graphics:mask_graphics_5,x:-133.7,y:-4.9}).wait(1).to({graphics:mask_graphics_6,x:-132.3,y:-4.9}).wait(1).to({graphics:mask_graphics_7,x:-130.9,y:-4.9}).wait(1).to({graphics:mask_graphics_8,x:-129.6,y:-4.9}).wait(1).to({graphics:mask_graphics_9,x:-128.2,y:-4.9}).wait(1).to({graphics:mask_graphics_10,x:-126.8,y:-4.9}).wait(1).to({graphics:mask_graphics_11,x:-125.4,y:-4.9}).wait(1).to({graphics:mask_graphics_12,x:-124,y:-4.9}).wait(1).to({graphics:mask_graphics_13,x:-122.7,y:-4.9}).wait(1).to({graphics:mask_graphics_14,x:-121.3,y:-4.9}).wait(1).to({graphics:mask_graphics_15,x:-119.9,y:-4.9}).wait(1).to({graphics:mask_graphics_16,x:-118.5,y:-4.9}).wait(1).to({graphics:mask_graphics_17,x:-117.1,y:-4.9}).wait(1).to({graphics:mask_graphics_18,x:-115.8,y:-4.9}).wait(1).to({graphics:mask_graphics_19,x:-114.4,y:-4.9}).wait(1).to({graphics:mask_graphics_20,x:-113,y:-4.9}).wait(1).to({graphics:mask_graphics_21,x:-111.6,y:-4.9}).wait(1).to({graphics:mask_graphics_22,x:-110.2,y:-4.9}).wait(1).to({graphics:mask_graphics_23,x:-108.9,y:-4.9}).wait(1).to({graphics:mask_graphics_24,x:-107.5,y:-4.9}).wait(1).to({graphics:mask_graphics_25,x:-106.1,y:-4.9}).wait(1).to({graphics:mask_graphics_26,x:-104.7,y:-4.9}).wait(1).to({graphics:mask_graphics_27,x:-103.3,y:-4.9}).wait(1).to({graphics:mask_graphics_28,x:-102,y:-4.9}).wait(1).to({graphics:mask_graphics_29,x:-100.6,y:-4.9}).wait(1).to({graphics:mask_graphics_30,x:-99.2,y:-4.9}).wait(1).to({graphics:mask_graphics_31,x:-97.8,y:-4.9}).wait(1).to({graphics:mask_graphics_32,x:-96.5,y:-4.9}).wait(1).to({graphics:mask_graphics_33,x:-95.1,y:-4.9}).wait(1).to({graphics:mask_graphics_34,x:-93.7,y:-4.9}).wait(1).to({graphics:mask_graphics_35,x:-92.3,y:-4.9}).wait(1).to({graphics:mask_graphics_36,x:-90.9,y:-4.9}).wait(1).to({graphics:mask_graphics_37,x:-89.6,y:-4.9}).wait(1).to({graphics:mask_graphics_38,x:-88.2,y:-4.9}).wait(1).to({graphics:mask_graphics_39,x:-86.8,y:-4.9}).wait(1).to({graphics:mask_graphics_40,x:-85.4,y:-4.9}).wait(1).to({graphics:mask_graphics_41,x:-84,y:-4.9}).wait(1).to({graphics:mask_graphics_42,x:-82.7,y:-4.9}).wait(1).to({graphics:mask_graphics_43,x:-81.3,y:-4.9}).wait(1).to({graphics:mask_graphics_44,x:-79.9,y:-4.9}).wait(1).to({graphics:mask_graphics_45,x:-78.5,y:-4.9}).wait(1).to({graphics:mask_graphics_46,x:-77.1,y:-4.9}).wait(1).to({graphics:mask_graphics_47,x:-75.8,y:-4.9}).wait(1).to({graphics:mask_graphics_48,x:-74.4,y:-4.9}).wait(1).to({graphics:mask_graphics_49,x:-73,y:-4.9}).wait(1).to({graphics:mask_graphics_50,x:-71.6,y:-4.9}).wait(1).to({graphics:mask_graphics_51,x:-70.2,y:-4.9}).wait(1).to({graphics:mask_graphics_52,x:-68.9,y:-4.9}).wait(1).to({graphics:mask_graphics_53,x:-67.5,y:-4.9}).wait(1).to({graphics:mask_graphics_54,x:-66.1,y:-4.9}).wait(1).to({graphics:mask_graphics_55,x:-64.7,y:-4.9}).wait(1).to({graphics:mask_graphics_56,x:-63.3,y:-4.9}).wait(1).to({graphics:mask_graphics_57,x:-62,y:-4.9}).wait(1).to({graphics:mask_graphics_58,x:-60.6,y:-4.9}).wait(1).to({graphics:mask_graphics_59,x:-59.2,y:-4.9}).wait(1).to({graphics:mask_graphics_60,x:-57.8,y:-4.9}).wait(1).to({graphics:mask_graphics_61,x:-56.5,y:-4.9}).wait(1).to({graphics:mask_graphics_62,x:-55.1,y:-4.9}).wait(1).to({graphics:mask_graphics_63,x:-53.7,y:-4.9}).wait(1).to({graphics:mask_graphics_64,x:-52.3,y:-4.9}).wait(1).to({graphics:mask_graphics_65,x:-50.9,y:-4.9}).wait(1).to({graphics:mask_graphics_66,x:-49.6,y:-4.9}).wait(1).to({graphics:mask_graphics_67,x:-48.2,y:-4.9}).wait(1).to({graphics:mask_graphics_68,x:-46.8,y:-4.9}).wait(1).to({graphics:mask_graphics_69,x:-45.4,y:-4.9}).wait(1).to({graphics:mask_graphics_70,x:-44,y:-4.9}).wait(1).to({graphics:mask_graphics_71,x:-42.7,y:-4.9}).wait(1).to({graphics:mask_graphics_72,x:-41.3,y:-4.9}).wait(1).to({graphics:mask_graphics_73,x:-39.9,y:-4.9}).wait(1).to({graphics:mask_graphics_74,x:-38.5,y:-4.9}).wait(1).to({graphics:mask_graphics_75,x:-37.1,y:-4.9}).wait(1).to({graphics:mask_graphics_76,x:-35.8,y:-4.9}).wait(1).to({graphics:mask_graphics_77,x:-34.4,y:-4.9}).wait(1).to({graphics:mask_graphics_78,x:-33,y:-4.9}).wait(1).to({graphics:mask_graphics_79,x:-31.6,y:-4.9}).wait(1).to({graphics:mask_graphics_80,x:-30.2,y:-4.9}).wait(1).to({graphics:mask_graphics_81,x:-28.9,y:-4.9}).wait(1).to({graphics:mask_graphics_82,x:-27.5,y:-4.9}).wait(1).to({graphics:mask_graphics_83,x:-26.1,y:-4.9}).wait(1).to({graphics:mask_graphics_84,x:-24.7,y:-4.9}).wait(1).to({graphics:mask_graphics_85,x:-23.3,y:-4.9}).wait(1).to({graphics:mask_graphics_86,x:-22,y:-4.9}).wait(1).to({graphics:mask_graphics_87,x:-20.6,y:-4.9}).wait(1).to({graphics:mask_graphics_88,x:-19.2,y:-4.9}).wait(1).to({graphics:mask_graphics_89,x:-17.8,y:-4.9}).wait(1).to({graphics:mask_graphics_90,x:-16.5,y:-4.9}).wait(1).to({graphics:mask_graphics_91,x:-15.1,y:-4.9}).wait(1).to({graphics:mask_graphics_92,x:-13.7,y:-4.9}).wait(1).to({graphics:mask_graphics_93,x:-12.3,y:-4.9}).wait(1).to({graphics:mask_graphics_94,x:-10.9,y:-4.9}).wait(1).to({graphics:mask_graphics_95,x:-9.6,y:-4.9}).wait(1).to({graphics:mask_graphics_96,x:-8.2,y:-4.9}).wait(1).to({graphics:mask_graphics_97,x:-6.8,y:-4.9}).wait(1).to({graphics:mask_graphics_98,x:-5.4,y:-4.9}).wait(1).to({graphics:mask_graphics_99,x:-4,y:-4.9}).wait(1));

	// 图层 2
	this.instance = new lib.元件19();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// 图层 1
	this.instance_1 = new lib.元件19();
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-134,-16,269,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-13.7,265,27.6);


(lib.LOADING = function() {
	this.initialize();

	// 00
	this.instance = new lib.元件9();
	this.instance.setTransform(62.5,-158.6,1,1,0,0,0,83,72);

	// loading_mc
	this.loading_mc = new lib.元件18();
	this.loading_mc.setTransform(132.5,183.4);

	// 元件 14
	this.instance_1 = new lib.元件14();
	this.instance_1.setTransform(132.5,220.9);

	this.addChild(this.instance_1,this.loading_mc,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-2.4,279.1,247);


// stage content:
(lib.loading = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(495.6,956.6,279.1,247);

})(loadingLib = loadingLib||{}, loadingImages = loadingImages||{}, createjs = createjs||{});
var loadingLib, loadingImages, createjs;/*  |xGv00|c61cb6d6eeb9633cf5855b881891a16b */