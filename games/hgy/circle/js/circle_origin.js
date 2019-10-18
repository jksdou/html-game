/* 
* @Author: YuMS
* @Date:   2014-08-14 01:49:45
* @Last Modified by:   YuMS
* @Last Modified time: 2014-08-17 07:20:26
*/
var VERSION = '1.0.4';

// window size
var viewWidth = view.viewSize.width;
var viewHeight = view.viewSize.height;
var windowWidth = viewWidth;
var windowHeight = viewHeight;
var windowMin = Math.min(windowWidth, windowHeight);
var windowMax = Math.max(windowWidth, windowHeight);

// component sizes
var perfectTextPosY = windowHeight / 5.5;
var perfectTextFontSize = windowHeight / 15;
var helpTextFontSize = windowHeight / 30;
var rankTextFontSize = windowHeight / 30;
var versionTextFontSize = windowHeight / 70;
var menuWidth = windowMin / 1.1;
var menuHeight = windowHeight / 2.5;
var menuStrokeWidth = windowHeight / 100;
var slideStrokeWidth = windowHeight / 200;
var replayWidth = windowHeight / 25;
var replayPosY = windowHeight / 2;
var menuButtonWidth = windowHeight / 10;
var menuButtonHeight = windowHeight / 15;
var helpWidth = windowMin / 1.2;
var helpHeight = windowHeight / 2;
var arrowWidth = windowMin / 8;
var arrowHeight = windowMin / 6;
var arrowTextFontSize = windowHeight / 30;
var tutorialWidth = windowMin / 2;
var tutorialHeight = windowMin / 10;
var tutorialStrokeWidth = windowMin / 150;
var tutorialTextFontSize = windowMin / 30;
var maxCircleRadius = windowMin * 0.45;
var pinRadius = windowMin / 180;

// div 2 sizes
var windowWidth2 = windowWidth / 2;
var windowHeight2 = windowHeight / 2;
var viewWidth2 = viewWidth / 2;
var viewHeight2 = viewHeight / 2;
var pinRadius2 = pinRadius / 2;
var menuWidth2 = menuWidth / 2;
var menuHeight2 = menuHeight / 2;
var menuStrokeWidth2 = menuStrokeWidth / 2;
var menuButtonWidth2 = menuButtonWidth / 2;
var menuButtonHeight2 = menuButtonHeight / 2;
var helpWidth2 = helpWidth / 2;
var helpHeight2 = helpHeight / 2;
var arrowWidth2 = arrowWidth / 2;
var arrowHeight2 = arrowHeight / 2;
var tutorialWidth2 = tutorialWidth / 2;
var tutorialHeight2 = tutorialHeight / 2;

// size instances
var windowSize = new Size(windowWidth - 1, windowHeight - 1);
var menuSize = new Size(menuWidth, menuHeight);
var menuButtonSize = new Size(menuButtonWidth, menuButtonHeight);
var helpSize = new Size(helpWidth, helpHeight);
var tutorialSize = new Size(tutorialWidth, tutorialHeight);

// points
var centerPoint = new Point(viewWidth2, viewHeight2);

// bias
var menuButtonBiasX = windowHeight / 6;
var menuButtonBiasY = windowHeight / 4.8;
var maxRandomBias = windowHeight / 20;
var minRandomBias = windowHeight / 200;
var helpBiasY = windowHeight / 3;
var rankBiasY = 0;
var arrowBiasX = windowMin / 20;
var versionBiasX = windowMin / 5;
var tutorialBiasY = windowHeight / 2.5;
var rotateFactor = 200;

// settings
var shared = getCookie('shared').length;
var isiphone = getCookie('isiphone').length;
var circle_played = parseInt(getCookie('circle_played'));
if (!circle_played) {
    circle_played = 0;
}

// uuid
if (!getCookie('uuid')) {
    setCookie('uuid', uuid());
}

// init status
var nameSubmitted = false;
var percentage = '0%';
var status = 0;
var loadedAd = false;
var circleRadius = (Math.random() + 2) / 3 * maxCircleRadius;
var hintLineRotated = 0;
var perfection = 1;
var positionList = Array();
var drawed = null;
var simplified = null;
var saved = false;
var intersections = [];

// log info
// components instances
try {
    var back_rect = new Path.Rectangle(new Point(1, 1), windowSize);
    back_rect.fillColor = 'white';
} catch(err) {
   /* $.ajax({
        type: 'POST',
        url: '/circle',
        data: {unsupport: 1, UA: navigator.appVersion, cookies: document.cookie}
    });*/
    alert('抱歉，本游戏暂不支持您的浏览器。');
}
// circle related
var center = new Shape.Circle(centerPoint, pinRadius);
center.fillColor = 'grey';
var hintCircle = new Path.Circle(centerPoint, circleRadius);
hintCircle.strokeColor = 'blue';
var hintRadiusLine = new Path.Line(centerPoint, new Point(viewWidth2 - circleRadius, viewHeight2));
hintRadiusLine.strokeColor = 'black';
hintRadiusLine.rotate(120, centerPoint);
var hintLongLine = new Path.Line(centerPoint, new Point(viewWidth2 - windowMax, viewHeight2));
hintLongLine.rotate(120, centerPoint);
var perfectText = new PointText({
    point: [viewWidth2, perfectTextPosY],
    justification: 'center',
    fillColor: 'black',
    fontSize: perfectTextFontSize
});
var versionText = new PointText({
    point: [viewWidth2, viewHeight - 0.5 * versionTextFontSize - slideStrokeWidth],
    justification: 'center',
    fillColor: 'black',
    fontSize: versionTextFontSize,
    content: '最好的游戏就在68微游戏！'
});



// help part
var helpBox = new Shape.Rectangle({
    point: [viewWidth2 - helpWidth2, helpBiasY - helpHeight2],
    size: helpSize,
    strokeColor: 'black',
    fillColor: 'white',
    strokeJoin: 'round',
    strokeWidth: menuStrokeWidth
});
var helpText = new PointText({
    point: [viewWidth2, helpBiasY - 3.5 * helpTextFontSize],
    justification: 'center',
    fillColor: 'black',
    fontSize: helpTextFontSize
});
helpText.content = '画个圆\n\n重大更新：现在可以分享自己\n画的圆给好友了\n\n喏，圆心给你了，半径给你了。\n\n点此开始';

var helpGroup = new Group(helpBox, helpText);
helpBox.onMouseUp = function(event) {
    event.preventDefault();
    helpGroup.visible = false;
    versionText.visible = false;
    status = 1;
};
helpText.onMouseUp = function(event) {
    event.preventDefault();
    helpGroup.visible = false;
    versionText.visible = false;
    status = 1;
};

// menu group
var menuBox = new Shape.Rectangle({
    point: [viewWidth2 - menuWidth2, viewHeight2 - menuHeight2],
    size: menuSize,
    strokeColor: 'black',
    fillColor: 'white',
    strokeJoin: 'round',
    strokeWidth: menuStrokeWidth
});
var replayButton = new Path.Circle(new Point(viewWidth2 - menuButtonBiasX, viewHeight2 + menuButtonBiasY), menuButtonWidth2);
replayButton.fillColor = 'white';
var replaySVG = new Path.Circle(new Point(viewWidth2 - menuButtonBiasX, viewHeight2 + menuButtonBiasY), menuButtonWidth2);
replaySVG = replaySVG.split(replaySVG.length * 0.55);
replaySVG.strokeColor = 'red';
replaySVG.strokeWidth = menuStrokeWidth;
replaySVG.strokeCap = 'round';
replaySVG.firstSegment.point -= [menuStrokeWidth, menuStrokeWidth2];
replaySVG.lastSegment.remove();
replaySVG.lastSegment.point += [menuStrokeWidth2, menuStrokeWidth2];
var shareButton = new Path.Rectangle(new Point(viewWidth2 + menuButtonBiasX - menuButtonWidth2, viewHeight2 + menuButtonWidth2 - menuButtonHeight + menuButtonBiasY), menuButtonSize);
shareButton.fillColor = 'white';
var shareSVG = new Path.Rectangle(new Point(viewWidth2 + menuButtonBiasX - menuButtonWidth2, viewHeight2 + menuButtonWidth2 - menuButtonHeight + menuButtonBiasY), menuButtonSize);
shareSVG.strokeColor = 'blue';
shareSVG.strokeWidth = menuStrokeWidth;
var shareSVG1 = new Path.Line(new Point(viewWidth2 + menuButtonBiasX, viewHeight2 + menuButtonBiasY), new Point(viewWidth2 + menuButtonBiasX, viewHeight2 - menuButtonHeight + menuButtonBiasY));
var shareSVG2 = new Path.Line(new Point(viewWidth2 + menuButtonBiasX, viewHeight2 - menuButtonHeight + menuButtonBiasY), new Point(viewWidth2 + menuButtonBiasX - menuButtonHeight2, viewHeight2 - menuButtonHeight2 + menuButtonBiasY));
var shareSVG3 = new Path.Line(new Point(viewWidth2 + menuButtonBiasX, viewHeight2 - menuButtonHeight + menuButtonBiasY), new Point(viewWidth2 + menuButtonBiasX + menuButtonHeight2, viewHeight2 - menuButtonHeight2 + menuButtonBiasY));
shareSVG1.strokeColor = 'blue';
shareSVG1.strokeWidth = menuStrokeWidth;
shareSVG2.strokeColor = 'blue';
shareSVG2.strokeWidth = menuStrokeWidth;
shareSVG2.strokeCap = 'round';
shareSVG3.strokeColor = 'blue';
shareSVG3.strokeWidth = menuStrokeWidth;
shareSVG3.strokeCap = 'round';
var rankText = new PointText({
    point: [viewWidth2, viewHeight2 + rankBiasY - 2 * rankTextFontSize],
    justification: 'center',
    fillColor: 'black',
    fontSize: rankTextFontSize
});
rankText.content = '';
var menuGroup = new Group(menuBox, replayButton, replaySVG, shareButton, shareSVG, shareSVG1, shareSVG2, shareSVG3, rankText);
menuGroup.visible = false;

// menu related events
replayButton.onMouseUp = function(event) {
    event.preventDefault();
    init();
};

shareButton.onMouseDown = function(event) {
    event.preventDefault();
    HideContent('desktop-ad');
	// dp_share();
    play68_submitScore((perfection * 100).toFixed(2));
    if (!saved) {
        circleId = uuid();
        shareSVG2.rotate(20, [viewWidth2 + menuButtonBiasX, viewHeight2 - menuButtonHeight + menuButtonBiasY]);
        shareSVG3.rotate(-20, [viewWidth2 + menuButtonBiasX, viewHeight2 - menuButtonHeight + menuButtonBiasY]);
       /* $.ajax({
            type: 'POST',
            url: '/circle/save',
            data: {
                score: perfection,
                simplified: simplified.exportJSON(),
                window_min: windowMin,
                window_width: windowWidth,
                window_height: windowHeight,
                circle_id: circleId,
                circle_radius: circleRadius,
                timestamp: (new Date).getTime(),
                user_id: getCookie('uuid')
            }
        }).done(function() {
            window.location.replace('http://games.yumaoshu.com/circle/show?circleId=' + circleId);
        });*/
        saved = true;
    }
};

// tutorial group
var tutorialBox = new Shape.Rectangle({
    point: [viewWidth2 - tutorialWidth2, viewHeight2 - tutorialHeight2 + tutorialBiasY],
    size: tutorialSize,
    strokeColor: 'black',
    fillColor: 'white',
    strokeJoin: 'round',
    strokeWidth: tutorialStrokeWidth
});
var tutorialText = new PointText({
    point: [viewWidth2, viewHeight2 + tutorialBiasY + tutorialTextFontSize * 0.5],
    justification: 'center',
    fillColor: 'black',
    fontSize: tutorialTextFontSize
});
tutorialText.content = '更多游戏';
var tutorialGroup = new Group(tutorialBox, tutorialText);
tutorialGroup.visible = false;

// tutorial related events
tutorialBox.onMouseDown = function(event) {
	// dp_share();
    Play68.goHome();
};

tutorialText.onMouseDown = function(event) {
	Play68.goHome();
};

// hint part
var arrowSVG = new Path(
    new Segment(
        new Point(viewWidth - arrowWidth - arrowBiasX, arrowHeight), null,
        new Point(0, -arrowHeight2)
    ),
    new Segment(
        new Point(viewWidth - arrowBiasX, 0), null, null
    )
);
arrowSVG.strokeColor = 'blue';
arrowSVG.strokeWidth = menuStrokeWidth;
var arrowText = new PointText({
    point: [viewWidth - arrowWidth - arrowBiasX, arrowHeight + arrowTextFontSize],
    justification: 'center',
    fillColor: 'black',
    fontSize: arrowTextFontSize
});
arrowText.content = '分享到朋友圈';
var arrowGroup = new Group(arrowSVG, arrowText);
arrowGroup.visible = false;


function init() {
    perfection = 1;
    circleRadius = (Math.random() + 2) / 3 * maxCircleRadius;
    hintLineRotated = 0;
    percentage = '0%';
    status = 1;
    menuGroup.visible = false;
    tutorialGroup.visible = false;
    arrowGroup.visible = false;
    versionText.visible = false;
    HideContent('desktop-ad');
    hintLineRotated = 0;
    drawed.remove();
    drawed = null;
    intersections.forEach(function(x) {
        x.remove();
    })
    intersections = [];
    hintCircle.remove();
    hintCircle = new Path.Circle(centerPoint, circleRadius);
    hintCircle.strokeColor = 'blue';
    hintRadiusLine.remove();
    hintRadiusLine = new Path.Line(centerPoint, new Point(viewWidth2 - circleRadius, viewHeight2));
    hintRadiusLine.strokeColor = 'black';
    hintRadiusLine.rotate(120, centerPoint);
    hintLongLine.remove();
    hintLongLine = new Path.Line(centerPoint, new Point(viewWidth2 - windowMax, viewHeight2));
    hintLongLine.rotate(120, centerPoint);
    simplified.remove();
    simplified = null;
    perfectText.content = '';
    document.title = '画个圆';
}

function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid = [], i;
    radix = radix || chars.length;
    
    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;
    
        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
    
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    
    return uuid.join('');
}

function encourage(perfection) {
    if (perfection < 0.1) {
        return '画的圆，在哪儿呢？。。';
    } else if (perfection < 0.5) {
        return '我这次画的不是圆。。';
    } else if (perfection < 0.7) {
        return '看这个圆有种怪怪的感觉。';
    } else if (perfection < 0.8) {
        return '我这是苗条圆！';
    } else if (perfection < 0.9) {
        return '我的圆有种自然美。';
    } else if (perfection < 0.93) {
        return '比达芬奇的鸡蛋要圆了！';
    } else if (perfection < 0.94) {
        return '就差一点点了！';
    } else if (perfection < 0.95) {
        return '以后可以不用圆规了！';
    } else if (perfection < 0.96) {
        return '美术老师我给您磕个头。';
    } else if (perfection < 0.97) {
        return '我是圆规投胎来的！';
    } else if (perfection < 0.98) {
        return '手上无圆规，心中有圆规！';
    } else if (perfection < 0.99) {
        return '我是神手马良！';
    } else {
        return '我就是完美,完美就是我！';
    }
}

function fillRankText() {
    rankText.content = '“' + encourage(perfection) + '”\n\n';
    rankText.content += '你刚刚画出了一个' + (perfection * 100).toFixed(2) + '分圆！\n快点击下面的蓝色分享\n按钮让小伙伴围观这个圆吧';
    updateShare((perfection * 100).toFixed(2));
    Play68.setRankingScoreDesc((perfection * 100).toFixed(2));
	   window.isConfirm=true;
}

function onFrame(event) {
    if (event.delta > 0.2) {
        event.delta = 0.2;
    }
    if (status === 0) {
        if (!helpText.visible) {
            helpText.bringToFront();
            helpText.visible = true;
        }
        if (loading) {
            loading = false;
            HideContent('inputpage');
        }
    } else if (status === 1) {
        if (hintCircle.visible) {
            opacity = hintCircle.opacity - 2 * event.delta;
            if (opacity < 0) {
                opacity = 0;
                hintCircle.visible = false;
            }
            hintCircle.opacity = opacity;
        }
    } else if (status === 2) {
        if (!hintCircle.visible) {
            hintCircle.visible = true;
        }
        if (hintCircle.opacity < 1) {
            opacity = hintCircle.opacity + 2 * event.delta;
            if (opacity > 1) {
                opacity = 1;
            }
            hintCircle.opacity = opacity;
        } else {
            if (hintLineRotated < 359.9) {
                rotation = event.delta * rotateFactor;
                hintLineRotated += rotation;
                if (hintLineRotated > 360) {
                    rotation = 360 - hintLineRotated + rotation;
                    hintLineRotated = 360;
                }
                hintRadiusLine.rotate(rotation, new Point(viewWidth2, viewHeight2));
                hintLongLine.rotate(rotation, new Point(viewWidth2, viewHeight2));

                var intersectionsDraw = hintLongLine.getIntersections(drawed);
                var intersectionsCircle = hintLongLine.getIntersections(hintCircle);
                var inter1 = centerPoint;
                if (intersectionsDraw.length) {
                    inter1 = intersectionsDraw[0].point;
                }
                var inter2 = inter1;
                if (intersectionsCircle.length) {
                    inter2 = intersectionsCircle[0].point;
                }
                if (!simplified) {
                    simplified = new Path();
                    simplified.visible = false;
                }
                simplified.add(inter1);
                var intersectionLine = new Path.Line(inter1, inter2);
                intersections.push(intersectionLine);
                intersectionLine.strokeWidth = 2;
                intersectionLine.strokeColor = 'pink';
                var distance = inter1.getDistance(inter2);
                perfection -= distance / circleRadius * rotation / 360;
                if (perfection < 0) {
                    perfection = 0;
                }
                perfectText.content = (perfection * 100).toFixed(2) + '%';
            } else {
                if (!simplified.visible) {
                    simplified.closed = true;
                    simplified.smooth();
                    simplified.strokeColor = 'black';
                    simplified.strokeWidth = 2;
                    simplified.opacity = 0;
                    simplified.visible = true;
                } else if (simplified.opacity < 0.8) {
                    opacity = simplified.opacity + event.delta;
                    if (opacity > 1) {
                        opacity = 1;
                    }
                    simplified.opacity = opacity;
                    drawed.opacity = 1 - opacity;
                } else {
                    // console.log(simplified.exportJSON());
                    // console.log(simplified.exportJSON().length);
                   
                    fillRankText();
                    /*$.ajax({
                        type: 'POST',
                        url: '/circle',
                        data: {UA: navigator.appVersion, score: perfection, cookies: document.cookie}
                    });*/
                    circle_played = parseInt(getCookie('circle_played'));
                    if (!circle_played) {
                        circle_played = 0;
                    }
					
                    setCookie('circle_played', circle_played + 1);
					 status = 4;
                }
            }
        }
    } else if (status === 4) {
        if (!loadedAd) {
            if (typeof(startLoadingGoogle) !== 'undefined') {
                startLoadingGoogle();
            }
            loadedAd = true;
        }
        if (!menuGroup.visible) {
            if (circle_played >= 3) {
                ShowContent('desktop-ad');
            }
            menuGroup.bringToFront();
            tutorialGroup.bringToFront();
            versionText.bringToFront();
            menuGroup.opacity = 0;
            menuGroup.visible = true;
            versionText.opacity = 0;
            versionText.visible = true;
            tutorialGroup.opacity = 0;
            tutorialGroup.visible = true;
        }
        if (menuGroup.opacity < 1) {
            opacity = menuGroup.opacity += 5 * event.delta;
            if (opacity > 1) {
                opacity = 1;
            }
            menuGroup.opacity = opacity;
            versionText.opacity = opacity;
            if (circle_played < 20) {
                tutorialGroup.opacity = opacity;
            }
        }
    }
}

function onMouseDown(event) {
    if (status === 1) {
        if (!drawed) {
            drawed = new Path({
                segments: [event.point],
                strokeColor: 'black',
            });
        }
    } else if (status === 3) {
        status = 4;
    }
}

function onMouseDrag(event) {
    if (status === 1) {
        drawed.add(event.point);
    }
}

function onMouseUp(event) {
    if (status === 1) {
        if (drawed) {
            status = 2;
        }
    }
}
