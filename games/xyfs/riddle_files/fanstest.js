function shuffle(e) {
    return e.sort(function() {
        return.5 - Math.random()
    }) 
}

audio_folder = "http://121.40.137.155/StephenChow/audio/"
function get_audio_url(file) {
    return audio_folder+file
}

var questions = [{
    au: ["breakup_cantanese.mp3","breakup_mandarin.mp3"],
    op: ["赌侠", "逃学威龙2", "整蛊专家"],
    as:  "逃学威龙2", 
},{
    au: ["dream_cantanese.mp3","dream_mandarin.mp3"],
    op: ["少林足球","功夫","百变星君"],
    as:  "少林足球", 
},{
    au: ["howtochaseagirl_cantanese.mp3","howtochaseagirl_mandarin.mp3"],
    op: ["功夫","行运一条龙","百变星君"],
    as:  "行运一条龙", 
},{
    au: ["lostahand_cantanese.mp3","lostahand_mandarin.mp3"],
    op: ["大话西游","唐伯虎点秋香","鹿鼎记"],
    as:  "唐伯虎点秋香", 
},{
    au: ["nothandsome_cantanese.mp3","nothandsome_mandarin.mp3"],
    op: [,"百变星君","喜剧之王","赌侠"],
    as:  "百变星君", 
},{
    au: ["prostitution_cantanese.mp3","prostitution_mandarin.mp3"],
    op: ["喜剧之王","赌侠","国产凌凌漆"],
    as:  "国产凌凌漆", 
},{
    au: ["robbed_cantanese.mp3","robbed_mandarin.mp3"],
    op: ["少林足球","破坏之王","赌侠"],
    as:  "破坏之王", 
},{
    au: ["thereason_cantanese.mp3","thereason_mandarin.mp3"],
    op: ["唐伯虎点秋香","武状元苏乞儿","鹿鼎记"],
    as:  "武状元苏乞儿", 
},{
    au: ["vowel_cantanese.mp3","vowel_mandarin.mp3"],
    op: ["唐伯虎点秋香","赌侠","鹿鼎记"],
    as:  "唐伯虎点秋香", 
},
{
    au: ["dongfang_cantanese.mp3","dongfang_mandarin.mp3"],
    op: ["整蛊专家","破坏之王", "逃学威龙2" ],
    as: "整蛊专家"
}]

player = $("#audio_player")
pe =player.get(0)
ca = $("#cantonese_audio")
ma = $("#mandarin_audio")
choose_audio = ""
function fill_content(question,currentRate){
	cantonese = get_audio_url(question.au[0])
	mandarin = get_audio_url(question.au[1])
    ca.unbind("click")
	ca.click(function (){
        choose_audio = "c"
        playing = !pe.paused && !pe.ended
        src = player.attr("src")
        if (playing) {
            if (src == cantonese){
                pe.pause()
            } else {
                player.attr("src",cantonese)
                pe.play()
            }
        } else {
            if (src != cantonese){
                player.attr("src",cantonese)
            }
            pe.play()
        }
    }),
    ma.unbind("click")
    ma.click(function (){
        choose_audio = "m"
        playing = !pe.paused && !pe.ended
        src = player.attr("src")
        if (playing) {
            if (src == mandarin){
                pe.pause()
            } else {
                player.attr("src",mandarin)
                pe.play()
            }
        } else {
            if (src != mandarin){
                player.attr("src",cantonese)
            }
            pe.play()
        }
    })

    if (choose_audio == "c") {
        player.attr("src",cantonese)
        pe.play()
    } else if (choose_audio == "m") {
        player.attr("src",mandarin)
        pe.play()
    }


    $("#answer").html(question.op[0]),
    $("#answer0").html(question.op[0]),
    $("#answerValue0").attr("value", 0),
    $("#answerValue0").attr("listOrder", 0),
    
    $("#answer1").html(question.op[1]),
    $("#answerValue1").attr("value", 1),
    $("#answerValue1").attr("listOrder", 1),
    $("#answer2").html(question.op[2]),
    $("#answerValue2").attr("value", 2),
    $("#answerValue2").attr("listOrder", 2),
    $("#currentRate").html(currentRate + "%"),
    $("#answerValue0").attr("checked", "checked"),
    $("#answerValue1").removeAttr("checked"),
    $("#answerValue2").removeAttr("checked")
}

function get_title(score){
    if (score >= 100) {
        return "铁杆粉丝"
    } else if (score >= 90) {
        return "铁杆粉丝"
    } else if (score >= 80) {
        return "资深粉丝"
    } else if (score >= 70) {
        return "忠实粉丝"
    } else if (score >= 60) {
        return "鸭血粉丝"
    } else if (score >= 50) {
        return "猪肝粉丝"
    } else if (score >= 40) {
        return "大肠粉丝"
    } else if (score >= 30) {
        return "清汤粉丝"
    } else if (score >= 20) {
        return "路人甲"
    } else if (score >= 10) {
        return "呵呵呵"
    } else {
        return "高端黑"
    }
}

score = 0,
$(document).ready(function() {
    questions = shuffle(questions);
    var questionsNums = questions.length;
    var index = 0
    var currentRate = 0
    fill_content(questions[index],currentRate)
    $(".next").click(function() {
        player.attr("src","#"),
        player.attr("preload","none"),
        player.attr("autoplay","false")
        pe.pause()
        var as = $("#answer").text();
        if (as == questions[index].as) {
        	score++
        }
        
        if (index + 1 >= questionsNums) {
            var realScore = (100 * score / questionsNums).toFixed(0)
            var title = get_title(realScore)
            var r = "<h1>你在星爷粉丝大考验中答对了<em>" + score + "</em>题，得到了"+ realScore +"分</h1>";
            r += "<p>获得称号：<em>"+title+"</em></p>",
            r += "<div class='bottom'></div>",
            $("#showPannel").slideToggle(1e3,
            function() {
                $(".text").hide(),
                $(".progress").hide(),
                $(".next").hide(),
                $("#result").fadeIn(),
                $(".content").css({
                    background: '#ffffff url("./riddle_files/img/shadow2.png") repeat-x'
                }),
                $("#showPannel").html(r),
                $("#showPannel").slideToggle(2e3),
                $("#playAgain").show()
            });
            var t = "我在星爷粉丝大考验中答对" + score + "题，获得" + title + "称号，快来超越我！";
            return void $(document).attr("title", t)
        } else {
        	index++,
        	currentRate = (100 * index / questionsNums).toFixed(0),
        	fill_content(questions[index],currentRate);
        	if (index + 1 >= questionsNums) {
        		$(".next").html("交卷看成绩!")
        	}
        	
        	$(".rate").animate({
            	width: currentRate + "%"
        	}),
        	$("#currentRate").animate({
            	left: currentRate - 7 + "%"
        	}),
        	$(".trangle").animate({
            	left: currentRate - 4 + "%"
        	})
        }

    }),
    $("input:radio").change(function() {
        var e = $(":radio:checked").attr("listOrder");
        newAnswer = $("#answer" + e).html(),
        $("#answer").html(newAnswer)
    }),
    $(".reset").click(function() {
        window.location.reload()
    }),
    $(".share").click(function() {
        $("#share").show()
    }),
    $("#share").click(function() {
        $("#share").hide()
    })
});