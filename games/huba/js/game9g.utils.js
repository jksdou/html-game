var game9g={};
 if(!game9g.utils){
	game9g.utils={};
 }
if(!$.os){
	$.os={};
}
var probe = {
	support: function(key) {
		var bln = true;
		switch (key) {
		case "boxshadow":
			bln = this.supportBoxShadow();
			break;
		default:
			break
		}
		return bln
	},
	supportBoxShadow: function() {
		var $testDiv = $('<div style="box-shadow:inset 0px -1px 1px  -1px #b2b2b2;"></div>');
		try {
			if ($testDiv.css("box-shadow")) {
				return true
			} else {
				return false
			}
		} catch(e) {
			return false
		}
	}
};
	game9g.utils.dialog= {
	alert: function(options, callback) {
		var self = this;
		var closebtn = {
			title: "\u5173\u95ed",
			click: function() {}
		};
		var opt = {
			title: null,
			content: null,
			zindex: 4200,
			bgcolor: "#ccc",
			opacity: .5,
			topOffset: 0,
			width: "280",
			loadDefaultCss: true,
			buttons: {
				close: {
					title: "\u5173\u95ed",
					click: function() {}
				}
			}
		};
		if (typeof options == "string") {
			opt.content = options;
			if (callback) {
				closebtn.click = callback;
				opt = $.extend(true, opt, {
					buttons: {
						close: closebtn
					}
				})
			}
		} else {
			opt = $.extend(true, opt, options)
		}
		self.dialog(opt)
	},
	confirm: function(options, callback) {
		var self = this;
		var confirmbtn = {
			title: "\u786e\u5b9a",
			click: function() {}
		};
		var opt = {
			title: null,
			content: null,
			zindex: 4200,
			bgcolor: "#ccc",
			opacity: .5,
			topOffset: 0,
			width: "280",
			loadDefaultCss: true,
			buttons: {
				confirm: {
					title: "\u786e\u5b9a",
					click: function() {}
				},
				close: {
					title: "\u53d6\u6d88",
					click: function() {}
				}
			}
		};
		if (typeof options == "string") {
			opt.content = options;
			if (callback) {
				confirmbtn.click = callback;
				opt = $.extend(true, opt, {
					buttons: {
						confirm: confirmbtn
					}
				})
			}
		} else {
			opt = $.extend(true, opt, options)
		}
		self.dialog(opt)
	},
	dialog: function(options) {
		var self = this;
		var id = "dialog_" + (new Date).getTime();
		var opt = {
			title: null,
			content: null,
			zindex: 4200,
			bgcolor: "rgb(0,0,0)",
			opacity: .5,
			topOffset: 0,
			width: "280",
			loadDefaultCss: true,
			buttons: {
				close: {
					title: "\u5173\u95ed",
					click: function() {}
				}
			}
		};
		opt = $.extend(true, opt, options);
		opt.id = id;
		if (String(opt.width).indexOf("%") < 0) {
			opt.width = opt.width + "px"
		}
		if (opt.loadDefaultCss == true) {
			this.loadDialogCss()
		}
		var $mask = $('<div id="' + id + '_cover"  ></div>');
		$mask.css({
			"z-index": opt.zindex,
			"background-color": "rgb(0,0,0)",
			position: "fixed",
			left: 0,
			top: 0,
			width: "100%",
			height: "100%",
			opacity: opt.opacity
		});
		$("body").append($mask);
		var $dialog = $('<div id="' + id + '" class="amsmobi_dialog"  style="width:' + opt.width + ";coclor:white;z-index:" + parseInt(opt.zindex + 1) + ";top:50%;left:50%;position:fixed;_position:absolute;_top:expression(eval(document.compatMode && document.compatMode=='CSS1Compat') ? documentElement.scrollTop+(document.documentElement.clientHeight - this.offsetHeight)/2+this.offsetHeight/2:document.body.scrollTop+(document.body.clientHeight - this.clientHeight)/2);\"></div>");
		var $head = $("<header></header>");
		var $body = $("<section></section>");
		if (probe.support("boxshadow")) {
			$body.css("box-shadow", "inset 0px -1px 1px  -1px #b2b2b2")
		} else {
			$body.css("border-bottom", "1px solid #b2b2b2")
		}
		var $footer = $("<footer></footer>");
		var closeDialog = function() {
			$dialog.remove();
			/*$mask.animate({
				opacity: 0
			},
			600, "ease-out",
			function() {
				$mask.remove()
			})*/
			$mask.remove();
		};
		if (opt.title) {
			$head.append($("<h2>" + opt.title + "</h2>"))
		}
		$dialog.append($head);
		if (opt.content) {
			$body.append(opt.content)
		}
		$dialog.append($body);
		var newButtons = new Array;
		$.each(opt.buttons,
		function(key, btn) {
			if (key.toLowerCase() != "close") {
				btn.key = key;
				newButtons.push(btn)
			}
		});
		if (opt.buttons["close"]) {
			var btn = opt.buttons["close"];
			btn.key = "close";
			newButtons.push(btn)
		}
		var ibtnWidth = parseFloat((100 - newButtons.length) / newButtons.length);
		$.each(newButtons,
		function(key, btn) {
			var $btn = $('<a href="javascript:;"   style="width:' + 43 + '%;margin: 8px;border: solid 1px white;" data-key="' + key + '">' + btn.title + "</a>");
			if (btn.key != "close") {
				if (probe.support("boxshadow")) {
					$btn.css("box-shadow", "inset -1px 0px 1px -1px #b2b2b2")
				} else {
					$btn.css("border-right", "1px solid #b2b2b2")
				}
			}
			if ($.os.ios) {
				$btn.click(function(e) {
					e.stopPropagation();
					e.preventDefault();
					if (btn.click) {
						btn.click();
						closeDialog()
					}
				})
			} else {
				$btn.click(function(e) {
					e.stopPropagation();
					e.preventDefault();
					if (btn.click) {
						btn.click();
						closeDialog()
					}
				})
			}
			$footer.append($btn)
		});
		$dialog.append($footer);
		$("body").append($dialog);
		var fixDialog = function() {
			var maxHeight = $(window).height() - 40;
			if ($dialog.height() > maxHeight) {
				var mTop = -(maxHeight / 2) + $(window).scrollTop();
				if ($.os.ios) {
					$dialog.css({
						"margin-left": -($dialog.width() / 2) + "px",
						"margin-top": mTop + "px",
						position: "absolute"
					})
				} else {
					$mask.css("position", "absolute");
					$(window).on("scroll",
					function() {
						var newHeight = $(window).height() + $(window).scrollTop();
						$mask.css("height", newHeight + "px")
					});
					var left = ($(window).width() - $dialog.width()) / 2;
					var style = "width:" + opt.width + ";z-index:" + parseInt(opt.zindex + 1) + ";position:absolute;top:" + ($(window).scrollTop() + 20) + "px;left:" + left + "px;";
					$dialog.attr("style", style)
				}
			} else {
				$dialog.css({
					"margin-left": -($dialog.width() / 2) + "px",
					"margin-top": -($dialog.height() / 2) + "px"
				})
			}
		};
		fixDialog();
		$(window).on("resize",
		function() {
			fixDialog()
		});
		$(window).on("orientationchange",
		function() {
			fixDialog()
		},
		false);
		return $dialog
	},
	showLoading: function(options) {
		this.loadLoadingCSS();
		var opt = {
			zindex: 4100,
			bgcolor: "#ccc",
			opacity: .5
		};
		opt = $.extend(true, opt, options);
		var id = "amsmobi_loading";
		if ($("#" + id).length == 0) {
			var $mask = $('<div id="' + id + '_cover"   style="z-index:' + opt.zindex + ";background-color:" + opt.bgcolor + ";position:fixed;left:0;top:0;width:100%;height:100%;filter:alpha(opacity=" + opt.opacity * 100 + ");opacity:" + opt.opacity + ';_position:absolute;_top:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.scrollTop+(document.documentElement.clientHeight-this.offsetHeight)/2:document.body.scrollTop+(document.body.clientHeight - this.clientHeight)/2); "><iframe style="position:fixed;_position:absolute;width:100%;height:100%;border:none;filter:alpha(opacity=0);opacity:0;left:0;top:0;z-index:-1;"  src="about:blank"></iframe></div>');
			var $dialog = $('<div id="' + id + '"   style="background-color:#999;width:106px;height:106px;margin-left:-53px;margin-top:-53px;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius:8px; z-index:' + parseInt(opt.zindex + 1) + ";top:50%;left:50%;position:fixed;_position:absolute;_top:expression(eval(document.compatMode && document.compatMode=='CSS1Compat') ? documentElement.scrollTop+(document.documentElement.clientHeight - this.offsetHeight)/2+this.offsetHeight/2:document.body.scrollTop+(document.body.clientHeight - this.clientHeight)/2);\"></div>");
			if (probe.support("boxshadow")) {
				$dialog.append('<div class="amsmobi_loader" >Loading...</div>')
			} else {
				$dialog.append('<div style="margin-top:41px;margin-left:15px;color:#666">Loading...</div>')
			}
			$("body").append($mask).append($dialog)
		} else {
			$("#" + id + "_cover").show();
			$("#" + id).show()
		}
	},
	hideLoading: function() {
		$("#amsmobi_loading").hide();
		$("#amsmobi_loading_cover").hide()
	},
	loadLoadingCSS: function() {
		var style = ".amsmobi_loader {margin: 4em auto;font-size: 12px;width: 1em;height: 1em;border-radius: 50%;position: relative;text-indent: -9999em;-webkit-animation: amsmobi_load5 1.1s infinite ease;animation: amsmobi_load5 1.1s infinite ease;}" + " @-webkit-keyframes amsmobi_load5 {0%,100% {box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);}" + " 12.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);}" + " 25% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);} " + " 37.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);}" + " 50% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);} " + " 62.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);} " + " 75% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);} " + " 87.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;} }" + " @keyframes amsmobi_load5 {0%,100% { box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);} " + " 12.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);} " + " 25% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);}" + " 37.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);}" + " 50% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);} " + " 62.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);}" + " 75% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);}" + " 87.5% {box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;}}";
		this.loadCss("mobi_loading_style", style)
	},
	loadDialogCss: function() {
		var style = ".amsmobi_dialog {color:white;background-color:rgb(0,0,0); text-align:center;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-weight:normal;font-size:14px;}" + " .amsmobi_dialog header{font-weight:bold;margin-top:10px;line-height:20px;text-align:center;font-family:Arial,Helvetica,sans-serif;height:auto;width:auto;}" + " .amsmobi_dialog footer{height:40px;padding:0px 0px;width:auto;}" + " .amsmobi_dialog footer a{display:block;color:#007afe;float:left;text-align:center;height:40px;line-height:36px;font-weight:bold;text-decoration: none;font-family:Arial,Helvetica,sans-serif;font-size:16px; }" + " .amsmobi_dialog footer a:hover{text-decoration:none;}" + " .amsmobi_dialog footer button{border:none;background:none;}" + " .amsmobi_dialog section{padding:0px 20px 20px 20px ;overflow-x:hidden;text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:normal;height:auto;width:auto;}";
		this.loadCss("mobi_dialog_style", style)
	},
	loadCss: function(id, style) {
		if ($("#" + id).length == 0) {
			var newStyle = $('<style id="' + id + '">' + style + "</style>");
			$("head").append(newStyle)
		}
	}
};
game9g.utils.shareConfirmparam={};
game9g.utils.shareConfirm=function(scontent,callback,stitle){
	if(!stitle){
		stitle="提示";
	}
	game9g.utils.shareConfirmparam={
		stitle:stitle,
		scontent:scontent,
		callback:callback
	}
	setTimeout(delayShareConfirm,1000);
	
}
function delayShareConfirm(){
	game9g.utils.dialog.confirm({
				title: game9g.utils.shareConfirmparam.stitle,
				content: game9g.utils.shareConfirmparam.scontent,
				buttons: {
					confirm: {
						title: "取消",
						click: function() {
							
						}
					},
					close: {
						title: "确定",
						click: function() {
							game9g.utils.shareConfirmparam.callback();
						}
					}
				}
			})
}
//转发域名配置
var domains=["oixm.cn", "aross.cn", "lival.cn", "cubbe.cn", "emofo.cn"];
var domain = domains[parseInt(Math.random() * domains.length)];
if(window.shareData){
	window.shareData.timeLineLink = thegameurl ;
}
