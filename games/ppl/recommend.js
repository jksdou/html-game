function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
}
var recom = GetQueryString("recom") || 0;

if(recom == 1){
    function shareWeixin(){
        WeixinJSBridge.trigger('menu:share:timeline');
    }
    var userAgent = window.navigator.userAgent.toLowerCase();
    var htmlStr =
        "<div id=\"233funRecommendId\" style=\"z-index: 900000000;width:100%;position:absolute; bottom:0; left:0; right:0;display: none;\"> 																												"+
        "<div><img  style=\"text-align: left;clear: both;display: table;height: 35px;\" src=\"../../../image/rec/rec.png\"></div>"+
        "<div style=\"background-color: #2f3535;\"> "+
        ((userAgent != "233fun") ? "<a href=\"#\" style=\"margin-right: 3px;\"><img style=\" width:18.2%;margin-top: 6px;\" src=\"../../../image/rec/about1.png\"> </a>     "
          : "<a onclick=\"shareWeixin()\" style=\"margin-right: 3px;\"><img style=\" width:18.2%;margin-top: 6px;\" src=\"../../../image/rec/share1.png\"> </a>     ")
        + "    <a href=\"#?recom=1\" style=\"margin: 0px 3px 0px 6px;\"><img style=\" width:24.2%;margin-top: 6px;\" src=\"../../../image/pre1.png\"> </a>          "+
        "    <a href=\"#?recom=1\" style=\"margin-right: 3px;\"><img style=\" width:24.2%;margin-top: 6px;\" src=\"../../../image/pre2.png\"></a>         "+
        "    <a href=\"#?recom=1\" style=\"margin: 0px;\"><img style=\" width:24.2%;margin-top: 6px; \" src=\"../../../image/pre4.png\"> </a>                    "+
        "</div></div>";
    document.write(htmlStr);
}
else if(recom == 2){
    var html = "<link rel=\"stylesheet\" href=\"../../../css/ui-dialog.css\" /> "+
                   "<script src=\"../../../js/dialog-min.js\" ></script>";
    document.write(html);
}


function show233FunRecommend(){
    if(recom == 1){
        document.getElementById("233funRecommendId").style.display = 'block';
    }
    else if(recom == 2){
        function shareWeixin(){
            WeixinJSBridge.trigger('menu:share:timeline');
        }
        var userAgent = window.navigator.userAgent.toLowerCase();
        var htmlStr =
            "<table style='width: 100%;border-spacing: 0px;'><tr>"+
                "<td style='padding: 0px;'><a style='line-height: 0px; display: block;padding: 5px 5px 0px 10px;' href=\"#?recom=1\" ><img style=\" width:100%;\" src=\"../../../image/pre1.png\"></a></td>  "+
                "<td style='padding: 0px;'><a style='line-height: 0px; display: block;padding: 5px 10px 0px 5px;' href=\"#?recom=1\" ><img style=\" width:100%;\" src=\"../../../image/pre2.png\"></a></td>  "+
            "</tr>"+
            "<tr>"+
                "<td style='padding: 0px;'><a style='line-height: 0px; display: block;padding: 5px 5px 5px 10px;' href=\"#?recom=1\" ><img style=\" width:100%;\" src=\"../../../image/pre3.png\"></a></td>  "+
                "<td style='padding: 0px;'><a style='line-height: 0px; display: block;padding: 5px 10px 5px 5px;' href=\"#?recom=1\" ><img style=\" width:100%;\" src=\"../../../image/pre4.png\"></a></td>  "+
            "</tr>"+
            "<tr>"+
            "<td style='padding: 0px;'><a style='line-height: 0px; display: block;' href=\"#\" ><img style=\" width:100%;\" src=\"../../../image/rec/about.png\"></a> </td>  "+
                ((userAgent != "233fun") ? "<td style='line-height: 0px;padding: 0px;'><a style=' display: block;' href=\#\"><img style=\"width:100% ;\" src=\"../../../image/rec/down.png\"></a></td>  "
                    : "<td style='padding: 0px;'><a style='line-height: 0px; display: block;' onclick=\"shareWeixin()\"><img style=\"width:100% ;\" src=\"../../../image/rec/share.png\"></a></td>  ")+
            "</tr></table>";

        var d = art.dialog({
            title: '推荐游戏',
            content: htmlStr
        });

    }
}

function hide233FunRecommend(){
    if(recom == 1){
        document.getElementById("233funRecommendId").style.display = 'none';
    }
    else if(recom == 2){

    }
}


