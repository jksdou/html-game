
<!DOCTYPE html>
<html>
<head><meta name="x-key" content="e3fc14c6b07dbfd3e4495d4eaeaaba63">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>格鲁的实验室</title>
    <!-- <link rel="shortcut icon" href="icon.png">
    <link rel="icon" href="icon.png"> -->
    <link type="text/css" href="<?php echo $gameinfo['absolute_gamefolder']; ?>common.css" rel="stylesheet" />
    <script type="text/javascript" src="<?php echo $gameinfo['absolute_gamefolder']; ?>zepto.min.js"></script>
    <script src="<?php echo $gameinfo['absolute_gamefolder']; ?>common.js"></script>
  
    <!-- <link rel="icon" href="icon.ico"> -->
    <style>
        #sg-loadscrn {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            z-index: 9999;
        }

        #sg-spinner {
            position: absolute;
            width: 150px;
            height: 50px;
            top: 50%;
            left: 50%;
            margin-top: -25px;
            margin-left: -75px;
            background-image: url('assets/sg-loader.gif');
        }

            #sg-spinner.no-img {
                background: #ffffff;
            }

        #sg-loadtext {
            position: absolute;
            font-family: sans-serif;
            top: 50%;
            left: 50%;
            width: 250px;
            margin-left: -125px;
            margin-top: -125px;
            text-align: center;
            line-height: 150%;
            font-size: 16px;
        }
    </style>
    <script type="text/javascript">
        window.gameLangs = ['en', 'es', 'fr', 'de', 'it', 'ru', 'tr', 'pt'];
        window.gameJS = [
        'lib/viewporter.js',
        'lib/Proxy.js',
        'lib/easeljs-0.7.1.min.js',
        'lib/preloadjs-0.4.1.min.js',
        'lib/soundjs-0.5.2.min.js',
        'lib/tweenjs-0.5.1.min.js',
        'lib/game.js'
        ]
        window.gameOnLoadScript = "init();";
    </script>
    <script type="text/javascript" src="<?php echo $gameinfo['absolute_gamefolder']; ?>assets/softgames-1.1.js"></script>
    <script type="text/javascript" src="<?php echo $gameinfo['absolute_gamefolder']; ?>assets/sg.hooks.js"></script>
    <!-- We also provide hosted minified versions of all CreateJS libraries.
	  http://code.createjs.com -->
    <script>


        function init() {
            new Jok.JokEngine("gameCanvas");
            new Jok.JokG().jokEngine.initState(new PreloadState());

            console.log("init");

        }
    </script>
</head>
<body>

    <div id="viewporter">

        <div class="canvasHolder" style="position: absolute; overflow: hidden">
            <canvas id="gameCanvas" style="position: absolute" width="640" height="960"></canvas>
        </div>

        <div id="portraitLock" class="portraitLock">
            <img class="rotatePhoneIcon" src="<?php echo $gameinfo['absolute_gamefolder']; ?>assets/img/rotate-phone.png">
        </div>
    </div>
    <script type="text/javascript" src="<?php echo $gameinfo['absolute_gamefolder']; ?>game.js"></script>
</body>
</html>
