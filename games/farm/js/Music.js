// Music.js
// Background Music support for iPhone, iPad
// FZ, Copyright (c) 2010 Zlongames 

(function()
{

FZ.Music = {
    theAudio:null,
    theIntervalId:0,
    isMute:false,
    set: function(theAudio, loop)
    {
        this.loop = Boolean(loop);
        this.theAudio = theAudio;
        theAudio.loop = loop;
    },
    setMute:function(isMute)
    {
    	this.isMute = isMute;
    	if (this.isMute) { 
    		this.stop();
    	}
    	else {
    		this.play();
    	}
    },
    play: function()
    {
    	if (this.isMute)
    		return;
    	
        this.stop();

        this.theAudio.play();
        if (this.theAudio.duration)
        {
            if (this.loop){
            	this.theIntervalId = window.setInterval(this.replay, Math.floor(this.theAudio.duration * 1000) -1000 );
                
            }
            //    this.theIntervalId = window.setInterval(FZ.Tools.bind(this,this.replay), Math.floor(this.theAudio.duration * 1000) -1000 );
            else{
                window.setTimeout(function(){this.theAudio.pause();try{ this.theAudio.currentTime=0;}catch(e){};}, Math.floor(this.theAudio.duration * 1000) -1000);
            }
        }
    },
    stop: function()
    {
        if (!this.theAudio) return;
        
        this.theAudio.pause();
        try{
            this.theAudio.currentTime = 0;
        } catch(e){};
        window.clearInterval(this.theIntervalId);
    },
    replay:function()
    {
        FZ.Music.stop();
        FZ.Music.play();
    },
    pageHide: function(e)
    {
        if (FZ.Music.theAudio) FZ.Music.stop();
    },
    pageShow: function(e)
    {
        if (FZ.Music.theAudio) FZ.Music.play();
    }
};

window.addEventListener("pagehide", FZ.Music.pageHide, false);
window.addEventListener("pageshow", FZ.Music.pageShow, false);


})();
