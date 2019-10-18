/**
 * @fileOverview Pack the SpilAPI for Highscore and other features
 * @author Yu Jianrong
 */

(function()
{

/**
* @namespace The namespace to pack the SpilAPI
*/
FZ.SpilAPI={
    /**
    * Submit the high-score
    * @param {Number} theScore The Highscore
    */
    SubmitScore:function(theScore)
    {
        FZ.SpilAPI.checkSpilAPI();
        SpilGames.Highscores.insert({score:  theScore});
    },

    /**
    * Show the highscore screen
    * @param {Number} theScore The Highscore
    */
    ShowHighscore:function()
    {
        FZ.SpilAPI.checkSpilAPI();
        if (!FZ.SpilAPI.___noSpilGamesAPI && FZ.GameBase)
            FZ.GameBase.pauseGame();

        SpilGames.Highscores.showScoreboard(function(){
                if (FZ.GameBase)
                    FZ.GameBase.resumeGame();
        });
    },
    /**
    * return the Splash screen data url or empty string if SpilAPI does not exist
    * @returns {String} the dataurl of the image
    */
    GetSplashScreenURL:function()
    {
        FZ.SpilAPI.checkSpilAPI();
        if (FZ.SpilAPI.___noSpilGamesAPI)
            return "";
        else
            return SpilGames.Settings.get('currentGameInfo').splashScreen;
    },
    /**
    * return the portrait rotationLockSreen data url or empty string if SpilAPI does not exist
    * @returns {String} the dataurl of the image
    */
    GetPortraitLockURL:function()
    {
        FZ.SpilAPI.checkSpilAPI();
        if (FZ.SpilAPI.___noSpilGamesAPI)
            return "";
        else
            return SpilGames.Settings.get('currentGameInfo').rotationLockSreen.portrait;
    },
    /**
    * return the landscape rotationLockSreen data url or empty string if SpilAPI does not exist
    * @returns {String} the dataurl of the image
    */
    GetLandscapeLockURL:function()
    {
        FZ.SpilAPI.checkSpilAPI();
        if (FZ.SpilAPI.___noSpilGamesAPI)
            return "";
        else
            return SpilGames.Settings.get('currentGameInfo').rotationLockSreen.landscape;
    },
    /**
    * Check if the SpilAPI exist or not.
    * @returns {Boolean} True if SpilAPI exist
    */
    checkSpilAPI:function()
    {
        return !FZ.SpilAPI.___noSpilGamesAPI;
    },
    /**
    * Initial the iterface to SpilAPI
    * @private
    */
    init:function()
    {
        // For debug and non-SpilAPI supported site
        FZ.SpilAPI.___noSpilGamesAPI=!window.SpilGames;
        if (!window.SpilGames)
        {
            window.SpilGames = {
                _:function(text){ 
                    var args= arguments,index = 0;
                    return text.replace(/%s/g, function(){ index++; return (args[index] !== undefined) ? args[index] : arguments[0]; }); 
                },
                Highscores:{
                    insert:function(score)
                    {
                        if (FZ.__localSubmitHighscore)
                            FZ.__localSubmitHighscore(score.score);
                    },
                    showScoreboard:function(callback)
                    {
                        if (FZ.__localShowHighscore)
                            FZ.__localShowHighscore(callback);
                    }
                }
            };
        };
    }
};
FZ.SpilAPI.init();
})();