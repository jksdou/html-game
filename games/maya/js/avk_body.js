
function avk_start()
{   
    var sgLangs = SG.lang;
    setTimeout("window.scrollTo(0, 1)", 10);
    function gl_vars()
    {
        this.TUTOR=0;
        this.HEART=false;
        this.MAX_PROG=false;
        this.TUTOR_STEPS=[2000,1000000,5000];
        
        this.CLEAR_DATA=false;
        this.FINISH=true;
        this.RUN=false;
        this.PATH_POINTS=1000;
        this.PAUSE=false;
        this.D=0;
        this.X=0;
        this.INSERTS=250;
        this.BACK_A=1/1000;
        this.HS=2;
        this.VS=2;
        this.BS=0.15;
        this.COLORS=[false,false,false,false,false,false,false];
        this.BULLET=null;
        this.BALLS=null;
        this.LENGTH=0;
        this.BACK_SPRITE=null;
        this.SPRITE=null;
        this.OSKOLKI=new Array();
        this.KILLED=new Array();
        this.MUL=0;
        this.SCORE=0;
        this.CURRENT_SCORE=0;
        this.WIN_PROGRESS=3;
        this.TR_1=0;
        this.TR_2=0;
        this.TR_3=0;
        this.TR=0;
        this.LEVELS=[-1,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2];
        this.PROGRESS=[];
        this.CLOUDS=[];
        this.TIME=0;
        this.STAT= [{start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0},
                    {start_cnt:0,win_cnt:0,win_time:0,win_score:0,win_next:0,win_emprove_cnt:0,loose_cnt:0,loose_time:0,loose_score:0,loose_refresh:0,loose_emprove_cnt:0}]
                
        this.SHOW_HANDLER=null;
        this.WND_GAME=null;

        this.LOG=function(txt)
        {
            game.MAIN.txt_log.set_text(game.MAIN.txt_log.caption+"\n"+txt);
            game.MAIN.txt_log.sprite.position.y=game.MAIN.txt_log.y+(game.MAIN.log_place.uni_height-game.MAIN.txt_log.txt.textHeight);
            game.MAIN.txt_log.txt.position.y=0;
        }

        var tk=(new Date()).getTime();
        this.FUNC=function(txt)
        {
            var tm = (new Date()).getTime();

            game.MAIN.txt_log.set_text(game.MAIN.txt_log.caption+"\n"+txt+"["+(tm-tk)+"]");
            tk=tm;
            game.MAIN.txt_log.sprite.position.y=game.MAIN.txt_log.y+(game.MAIN.log_place.uni_height-game.MAIN.txt_log.txt.textHeight);
            game.MAIN.txt_log.txt.position.y=0;
        }
    }

    var GLOBAL=new gl_vars();

    var that = this;
    var order = [];
    var to_update = [];
   
    var game = new AVK_GAME(init,update,event);
    
    var actions={   pr:{pause:0,time:350,changes:{prop:{beg:0,end:1,trans:"sqrt"}}},
                    to_left:{pause:0,time:350,changes:{global_x:{beg:0,end:-1,trans:"sqrt"}}},
                    from_right:{pause:0,time:350,changes:{global_x:{beg:1,end:0,trans:"sqrt"}}},
                    to_right:{pause:0,time:350,changes:{global_x:{beg:0,end:1,trans:"sqrt"}}},
                    alpha:{pause:0,time:1000,changes:{alpha:{beg:0,end:1,trans:"lin"}}},
                    tutor_alpha:{pause:0,time:350,changes:{alpha:{beg:0,end:1,trans:"lin"}}},
                    tutor_alpha_hide:{pause:0,time:350,changes:{alpha:{beg:1,end:0,trans:"lin"}}},
                    light:{pause:0,time:500,changes:{prop:{beg:0,end:1,trans:"lin"}}},
                    hide:{pause:0,time:1000,changes:{prop:{beg:0,end:1,trans:"n2"}}},
                    show:{pause:0,time:700,changes:{prop:{beg:0,end:1,trans:"n2"}}},
                    from_up:{pause:0,time:350,changes:{global_y:{beg:-1,end:0,trans:"sqrt"}}},
                    show_zw:{pause:350,time:1000,changes:{prop:{beg:0,end:1,trans:"lin"}}},
                    ui_scale:{pause:0,time:1000,changes:{prop:{beg:0,end:Math.PI*2,trans:"sin"}}},
                    from_left:{pause:0,time:350,changes:{global_x:{beg:-1,end:0,trans:"sqrt"}}}
                };

    function show_wnd_right(wnd) 
    {
        game.GUI_BUSY=true;
        order.push(wnd);
        wnd.sprite.visible = true;
        game.ACT.start("from_left",wnd);
        game.ACT.start("to_right",order[order.length-2],hide_old);
    }

    function show_wnd_left(wnd) 
    {
        game.GUI_BUSY=true;
        order.push(wnd);
        wnd.sprite.visible = true;
        game.ACT.start("from_right",wnd,on_show);
        game.ACT.start("to_left",order[order.length-2],hide_old);
    }

    function hide_wnd_right() 
    {
        game.GUI_BUSY=true;
        order[order.length-2].sprite.visible = true;
        game.ACT.start("from_right",order[order.length-2]);
        game.ACT.start("to_left",order[order.length-1],hide_old);
        order.pop();
    }

    function hide_wnd_left()
    {
        game.GUI_BUSY=true;
        order[order.length-2].sprite.visible = true;
        game.ACT.start("from_left",order[order.length-2]);
        game.ACT.start("to_right",order[order.length-1],hide_old);
        order.pop();
    }

    function on_show()
    {
        if (GLOBAL.SHOW_HANDLER!=null)
        {
            GLOBAL.SHOW_HANDLER();
            GLOBAL.SHOW_HANDLER=null;
        }
    }

    function hide_old(wnd) 
    {
        game.GUI_BUSY=false;
        PAUSE=false;
        wnd.sprite.visible = false;
    }

    function convert(value)
    {
        var s = "";
        var t = 0;
        value=""+value;
        
        for (var i = value.length - 1; i >= 0; i--)
        {
            if (t == 3)
            {
                t = 0;
                s = " " + s;
            }
            
            if ((value.charAt(i) != "0") && (value.charAt(i) != "1") && (value.charAt(i) != "2") && (value.charAt(i) != "3") && (value.charAt(i) != "4") && (value.charAt(i) != "5") && (value.charAt(i) != "6") && (value.charAt(i) != "7") && (value.charAt(i) != "8") && (value.charAt(i) != "9"))
                return value;
                
            s = value.charAt(i) + s;
            t++;
        }
        
        return s;
    }

    function AVK_CONTAINER()
    {
        
        var cnt=0;
        var maked_objects={};
        var here=this;
        

        this.init=function(obj,place)
        {
            obj.active=1;
            obj.sprite.visible=true;

            if (place!=null)
                place.add(obj);

            return obj;
        }

        this.free=function(obj)
        {
            obj.active=0;
            obj.sprite.visible=false;

           
            
            if (obj.sprite.parent!=null)
                obj.sprite.parent.removeChild(obj.sprite);

          

            return obj;
        }

        this.get_object=function(owner,prototype,place,heap)
        {
            if (maked_objects[owner+"_"+prototype]==null)
                maked_objects[owner+"_"+prototype]=[];

            var tmp_array=maked_objects[owner+"_"+prototype];
            for (var i=0;i<tmp_array.length;i++)
            {
                var tmp_res=tmp_array[i];
                if (tmp_res.active<=0)
                    return here.init(tmp_res,place);
            }

            
            if (tmp_array.length==0)
            {
                tmp_res=game[owner][prototype];
                tmp_res.ID=0;
                tmp_array.push(tmp_res);
                return here.init(tmp_res,place);
            }else
            {
                tmp_res=tmp_array[tmp_array.length-1].make_copy();
                tmp_array.push(tmp_res);
                return here.init(tmp_res,place);
            }
        }
    }
    var CONTAINER=new AVK_CONTAINER();

    function is_snd() 
    {
        return game.GAME.btn_no_snd.sprite.visible;
    }

    

    function change_snd() 
    {
        if (GLOB_M)
        {
            game.GAME.btn_snd.sprite.visible=!game.GAME.btn_snd.sprite.visible;
            game.MAIN.btn_snd.sprite.visible=!game.MAIN.btn_snd.sprite.visible;
            game.GAME.btn_no_snd.sprite.visible=!game.GAME.btn_no_snd.sprite.visible;
            game.MAIN.btn_no_snd.sprite.visible=!game.MAIN.btn_no_snd.sprite.visible;

            GLOB_in_menu.stop();
            GLOB_in_game.stop();
            if (is_snd())
                if (order.length==1)
                    GLOB_in_menu.play("none",0,0,-1);
                else
                    GLOB_in_game.play("none",0,0,-1);
        }else
        {
            game.GAME.btn_snd.sprite.visible=false;
            game.MAIN.btn_snd.sprite.visible=false;
            game.GAME.btn_no_snd.sprite.visible=false;
            game.MAIN.btn_no_snd.sprite.visible=false;
        }

    }

    function save()
    {
        try
        {
            localStorage.avk_maya_data=GLOBAL.LEVELS;
        } catch(e) {};
    }

    function load_stat()
    {
       
    }

    function save_stat()
    {
       
    }

    function init_select()
    {
        try
        {
            if ((typeof(localStorage.avk_maya_data)=='undefined')||(GLOBAL.CLEAR_DATA))
            {
                localStorage.avk_maya_data=GLOBAL.LEVELS;
            }

            var n=0;
            var t=0;
            var s=localStorage.avk_maya_data+",";
            for (var i=0;i<s.length;i++)
            {
                if(s[i]==",")
                {
                    GLOBAL.LEVELS[t]=(s.substring(n,i)/1);
                    n=i+1;
                    t++;
                }
            }
        } catch(e) {};

        var last=null;
        for (var i=18;i>=0;i--)
        {
            var prg=GLOBAL.PROGRESS[i];
            prg.prg_2.sprite.visible=(GLOBAL.LEVELS[i]>2);
            prg.prg_1.sprite.visible=(GLOBAL.LEVELS[i]>1);
            prg.prg_0.sprite.visible=(GLOBAL.LEVELS[i]>0);
            prg.prg_back.sprite.visible=(GLOBAL.LEVELS[i]>-1);
            prg.prg_close.sprite.visible=(GLOBAL.LEVELS[i]==-2);
            game.MAIN["btn_lev_"+i].enabled=(!prg.prg_close.sprite.visible);
            if ((last==null)&&(game.MAIN["btn_lev_"+i].enabled))
                last=game.MAIN["btn_lev_"+i]
        }

        if (GLOBAL.WND_GAME.scle_btn.targ!=null)
        {
            GLOBAL.WND_GAME.scle_btn.targ.sprite.scale.x=1;
            GLOBAL.WND_GAME.scle_btn.targ.sprite.scale.y=1;
        }
        
        if (last.sprite.anchor.x!=0.5)
        {
            last.sprite.anchor.x=0.5;
            last.sprite.anchor.y=0.5;
            last.sprite.position.x+=0.5*last.uni_width;
            last.sprite.position.y+=0.5*last.uni_height;
            last.refresh();
        }
        GLOBAL.WND_GAME.scle_btn.targ=last;

    }

    function init() 
    {
        if (GLOB_M)
        {
            if (GLOB_ball==0)
                GLOB_M=false;
        }
        game.ACT.init(actions);
        order.push(game.MAIN);

        GLOBAL.D=game.BALLS.b_0.uni_width*0.95;
        GLOBAL.HS*=game.SCREEN_HEIGHT/1000;
        GLOBAL.VS*=game.SCREEN_HEIGHT/1000;
        GLOBAL.BS*=game.SCREEN_HEIGHT/1000;

        game.LANGUAGE="TXT";
        game.init_captions();

        GLOBAL.PATH_POINTS=game.SCREEN_HEIGHT*10;
        GLOBAL.WND_GAME = new AVK_WND_GAME();

        
        game.GAME.back.sprite.interactive = true;
		if(isMobile.iOS()){
        game.GAME.back.sprite.mousemove = game.GAME.back.sprite.touchmove = game.GAME.back.sprite.touch = function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("move","GLOBAL","GLOBAL",data.global.x,data.global.y);
        }
		}else{
			 game.GAME.back.sprite.mousemove = function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("move","GLOBAL","GLOBAL",data.global.x,data.global.y);
        }
			
			}
			
		if(isMobile.iOS()){
			
        game.GAME.back.sprite.mouseout = game.GAME.back.sprite.mouseupoutside = game.GAME.back.sprite.mouseup = game.GAME.back.sprite.touchend = game.GAME.back.spritemouseupoutside = game.GAME.back.sprite.touchendoutside = function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("finish","GLOBAL","GLOBAL",data.global.x,data.global.y);
         }
		}else{
			 game.GAME.back.sprite.mouseout = game.GAME.back.sprite.mouseupoutside = game.GAME.back.sprite.mouseup  = game.GAME.back.spritemouseupoutside = function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("finish","GLOBAL","GLOBAL",data.global.x,data.global.y);
        }
			
			
			}

     	if(isMobile.iOS()){

        game.GAME.back.sprite.mousedown = game.GAME.back.sprite.touchstart = function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("start","GLOBAL","GLOBAL",data.global.x,data.global.y);
        }
		}else{
			 game.GAME.back.sprite.mousedown =  function(data)
        {
            if (!GLOBAL.RUN)
                return;

            GLOBAL.X=data.global.x;
            event("start","GLOBAL","GLOBAL",data.global.x,data.global.y);
        }
			
			}

        for (var i=0;i<19;i++)
        {
            game.MAIN["btn_lev_"+i].sprite.anchor.x=0.5;
            game.MAIN["btn_lev_"+i].sprite.anchor.y=0.5;
            game.MAIN["btn_lev_"+i].sprite.position.x+=0.5*game.MAIN["btn_lev_"+i].uni_width;
            game.MAIN["btn_lev_"+i].sprite.position.y+=0.5*game.MAIN["btn_lev_"+i].uni_height;
            game.MAIN["btn_lev_"+i].refresh();
            var prg=CONTAINER.get_object("MAIN","my_prg",game.MAIN["btn_lev_"+i]);
            if (i==0)
            {
                prg.sprite.position.x=game.MAIN.my_prg.sprite.position.x-0.5*game.MAIN["btn_lev_"+i].uni_width;
                prg.sprite.position.y=game.MAIN.my_prg.sprite.position.y-0.5*game.MAIN["btn_lev_"+i].uni_height;
            }else
            {
                prg.sprite.position.x=game.MAIN.my_prg.sprite.position.x;
                prg.sprite.position.y=game.MAIN.my_prg.sprite.position.y;
            }

          

            GLOBAL.PROGRESS.push(prg);
        }
        init_select();

        if (GLOBAL.LEVELS[0]==-1)
            GLOBAL.TUTOR=0;
        else
            GLOBAL.TUTOR=1000000;

        for (i=0;i<10;i++)
            game.GAME["level_"+i].sprite.parent.removeChild(game.GAME["level_"+i].sprite);

        game.MAIN.levels.sprite.visible=false;
        game.GAME.uppper.sprite.anchor.x=0.5;
        game.GAME.up_b.sprite.position.x-=0.5*game.GAME.uppper.uni_width;
        game.GAME.ready_1.sprite.position.x-=0.5*game.GAME.uppper.uni_width;
        game.GAME.ready_0.sprite.position.x-=0.5*game.GAME.uppper.uni_width;
        game.GAME.ready_1.sprite.visible=false;
        game.GAME.ready_0.sprite.visible=false;

        game.GAME.wrays.sprite.visible=false;
        game.GAME.wrays.sprite.scale.x=8;
        game.GAME.wrays.sprite.scale.y=8;
        game.GAME.wrays.sprite.anchor.x=0.5;
        game.GAME.wrays.sprite.anchor.y=0.5;
        game.GAME.wrays.sprite.position.x+=game.GAME.wrays.uni_width/2;
        game.GAME.wrays.sprite.position.y+=game.GAME.wrays.uni_height/2;

        game.GAME.brays.sprite.visible=false;
        game.GAME.brays.sprite.scale.x=8;
        game.GAME.brays.sprite.scale.y=8;
        game.GAME.brays.sprite.anchor.x=0.5;
        game.GAME.brays.sprite.anchor.y=0.5;
        game.GAME.brays.sprite.position.x+=game.GAME.brays.uni_width/2;
        game.GAME.brays.sprite.position.y+=game.GAME.brays.uni_height/2;
        
        game.GAME.btn_snd.sprite.visible=false;
        game.MAIN.btn_snd.sprite.visible=false;
        
        game.GAME.btn_no_snd.sprite.visible=GLOB_M;
        game.MAIN.btn_no_snd.sprite.visible=GLOB_M;

        game.GAME.shadow.sprite.scale.x=25.2;
        game.GAME.shadow.sprite.scale.y=25.2;
        game.GAME.shadow.sprite.position.x=-10;
        game.GAME.shadow.sprite.position.y=-10;
        game.GAME.loose_wnd.sprite.visible=false;
        game.GAME.win_wnd.sprite.visible=false;
        game.GAME.shadow.sprite.visible=false;

        game.GAME.shadow.sprite.interactive = true;
		
		if(isMobile.iOS()){
        game.GAME.shadow.sprite.mousemove = game.GAME.shadow.sprite.touchmove = game.GAME.shadow.sprite.touch = game.GAME.shadow.sprite.mouseout = game.GAME.shadow.sprite.mouseupoutside = game.GAME.shadow.sprite.mouseup = game.GAME.shadow.sprite.touchend = game.GAME.shadow.spritemouseupoutside = game.GAME.shadow.sprite.touchendoutside = game.GAME.shadow.sprite.mousedown = game.GAME.shadow.sprite.touchstart = function(data)
        {
            if (data.originalEvent!=null)
            {
                data.originalEvent.stopPropagation();
                data.originalEvent.preventDefault();
            }
        }
		}else{
			   game.GAME.shadow.sprite.mousemove =  game.GAME.shadow.sprite.mouseout = game.GAME.shadow.sprite.mouseupoutside = game.GAME.shadow.sprite.mouseup =  game.GAME.shadow.spritemouseupoutside = game.GAME.shadow.sprite.mousedown= function(data)
        {
            if (data.originalEvent!=null)
            {
                data.originalEvent.stopPropagation();
                data.originalEvent.preventDefault();
            }
        }
			
			
			
			}

        game.GAME.loose_wnd.y=game.GAME.loose_wnd.sprite.position.y;
        game.GAME.win_wnd.y=game.GAME.win_wnd.sprite.position.y;

        game.GAME.txt_score.set_style(0.5,"AVK_FNT_main","right");
        game.GAME.txt_score_part.sprite.visible=false;
        game.GAME.zvezda_part.sprite.visible=false;

        game.GAME.star_0.sprite.anchor.x=0.5;
        game.GAME.star_0.sprite.anchor.y=0.5;
        game.GAME.star_0.sprite.position.x+=game.GAME.star_0.uni_width*0.5;
        game.GAME.star_0.sprite.position.y+=game.GAME.star_0.uni_height*0.5;
        game.GAME.star_1.sprite.anchor.x=0.5;
        game.GAME.star_1.sprite.anchor.y=0.5;
        game.GAME.star_1.sprite.position.x+=game.GAME.star_1.uni_width*0.5;
        game.GAME.star_1.sprite.position.y+=game.GAME.star_1.uni_height*0.5;
        game.GAME.star_2.sprite.anchor.x=0.5;
        game.GAME.star_2.sprite.anchor.y=0.5;
        game.GAME.star_2.sprite.position.x+=game.GAME.star_2.uni_width*0.5;
        game.GAME.star_2.sprite.position.y+=game.GAME.star_2.uni_height*0.5;

        game.GAME.riska_0.sprite.anchor.x=0.5;
        game.GAME.riska_0.sprite.anchor.y=0.5;
        game.GAME.riska_0.sprite.position.x+=game.GAME.riska_0.uni_width*0.5;
        game.GAME.riska_0.sprite.position.y+=game.GAME.riska_0.uni_height*0.5;

        game.GAME.riska_1.sprite.anchor.x=0.5;
        game.GAME.riska_1.sprite.anchor.y=0.5;
        game.GAME.riska_1.sprite.position.x+=game.GAME.riska_1.uni_width*0.5;
        game.GAME.riska_1.sprite.position.y+=game.GAME.riska_1.uni_height*0.5;

        for (i=0;i<10;i++)
        {
            game.GAME["head_"+i].sprite.parent.removeChild(game.GAME["head_"+i].sprite);
            game.GAME["up_"+i].sprite.parent.removeChild(game.GAME["up_"+i].sprite);
            game.GAME["res_"+i].sprite.parent.removeChild(game.GAME["res_"+i].sprite);
        }

        GLOBAL.UP_SPR = new PIXI.DisplayObjectContainer();
        GLOBAL.HEAD_SPR = new PIXI.DisplayObjectContainer();

        game.GAME.sprite.addChildAt(GLOBAL.UP_SPR,3);
        game.GAME.sprite.addChildAt(GLOBAL.HEAD_SPR,6);


        for (var level=0;level<10;level++)
        {
            game.GAME["up_"+level].sprite.position.x-=game.GAME["up_"+level].uni_width*0.25/2;
            game.GAME["up_"+level].sprite.position.y-=game.GAME["up_"+level].uni_height*0.25/2;
            game.GAME["up_"+level].sprite.scale.x=1.25;
            game.GAME["up_"+level].sprite.scale.y=1.25;

            game.GAME["res_"+level].sprite.position.x-=game.GAME["res_"+level].uni_width*0.25/2;
            game.GAME["res_"+level].sprite.position.y-=game.GAME["res_"+level].uni_height*0.25/2;
            game.GAME["res_"+level].sprite.scale.x=1.25;
            game.GAME["res_"+level].sprite.scale.y=1.25;
        }

        var tmp=game.GAME.btn_refresh_win.make_copy();
        tmp.sprite.position.x=0;
        tmp.sprite.position.y=0;
        tmp.refresh();
        game.GAME.pbtn_refresh.add(tmp);
        tmp=game.GAME.btn_menu_win.make_copy()
        tmp.sprite.position.x=0;
        tmp.sprite.position.y=0;
        tmp.refresh();
        game.GAME.pbtn_menu.add(tmp);
        //tmp=game.GAME.btn_more.make_copy()
        //tmp.sprite.position.x=0;
        //tmp.sprite.position.y=0;
        //tmp.refresh();
        //game.GAME.pbtn_more.add(tmp);
        CONTAINER.free(CONTAINER.get_object("MAIN","cloud",game.MAIN.zag));

        function AVK_HIDE()
        {
            function AVK_BTNS()
            {
                var my_here=this;
                var first=true;
                
                this.set_property = function (newVal)
                {

                    if (newVal<0.2)
                    {
                        newVal=newVal/0.2;
                        game.MAIN.btn_start.sprite.scale.x=1.2-0.2*newVal;
                        game.MAIN.btn_start.sprite.scale.y=1.2-0.2*newVal;
                        game.MAIN.btn_start.sprite.alpha=newVal;
                        game.MAIN.up_back.sprite.scale.x=1.2-0.2*newVal;
                        game.MAIN.up_back.sprite.scale.y=1.2-0.2*newVal;
                        game.MAIN.up_back.sprite.alpha=newVal;
                    }else
                    {
                        if (first)
                    {
                        first=false;
                        for (var i=0;i<4;i++)
                        {
                            var c=CONTAINER.get_object("MAIN","cloud",game.MAIN.zag);
                            c.sprite.scale.x=0.5+Math.random()*4;
                            c.sprite.scale.y=c.sprite.scale.x;
                            c.sprite.alpha=c.sprite.scale.x/4.5;
                            c.sprite.position.x=game.SCREEN_WIDTH*Math.random()-c.uni_width*c.sprite.scale.y/2;
                            c.sprite.position.y=game.SCREEN_HEIGHT*Math.random()/2-c.uni_height*c.sprite.scale.y/2;
                            GLOBAL.CLOUDS.push(c)
                        }
                    }
                        newVal=1-(Math.sin(Math.PI*(newVal-0.2)/0.8*6)*0.03)*(1-(newVal-0.2)/0.8);
                        game.MAIN.sprite.position.x=-game.SCREEN_WIDTH*(newVal-1)/2;
                        game.MAIN.sprite.position.y=-game.SCREEN_HEIGHT*(newVal-1)/2;
                        game.MAIN.sprite.scale.x=newVal;
                        game.MAIN.sprite.scale.y=newVal;
                    }
                }

                function finish()
                {
                    game.GUI_BUSY=false;
                }

                this.start = function()
                {
                    if (is_snd())
                        GLOB_light_on.play();
                    game.MAIN.btn_start.sprite.anchor.x=0.5;
                    game.MAIN.btn_start.sprite.anchor.y=0.5;
                    game.MAIN.btn_start.sprite.position.x+=game.MAIN.btn_start.uni_width/2;
                    game.MAIN.btn_start.sprite.position.y+=game.MAIN.btn_start.uni_height/2;
                    game.MAIN.btn_start.sprite.scale.x=1.2;
                    game.MAIN.btn_start.sprite.scale.y=1.2;
                    game.MAIN.btn_start.sprite.alpha=0;
                    game.MAIN.btn_start.sprite.visible=true;
                    game.MAIN.btn_start.refresh();

                    game.MAIN.up_back.sprite.anchor.x=0.5;
                    game.MAIN.up_back.sprite.anchor.y=0.5;
                    game.MAIN.up_back.sprite.position.x+=game.MAIN.up_back.uni_width/2;
                    game.MAIN.up_back.sprite.position.y+=game.MAIN.up_back.uni_height/2;
                    game.MAIN.up_back.sprite.scale.x=1.2;
                    game.MAIN.up_back.sprite.scale.y=1.2;
                    game.MAIN.up_back.sprite.alpha=0;
                    game.MAIN.up_back.sprite.visible=true;

                    

                    game.ACT.start("show",my_here,finish);
                }
            }
            var here=this;
            var btns=new AVK_BTNS();
            this.up=null;
            this.down=null;

            this.set_property = function (newVal)
            {
                if (newVal<0.2)
                    newVal=-Math.sin(Math.PI*newVal*5)/10;
                else
                    newVal=(newVal-0.2)/0.8;

                here.up.position.y=here.up.sy+(-here.up.height-here.up.sy)*newVal;
                here.down.position.y=here.down.sy+40*newVal;
            }

            function finish_up()
            {
                btns.start();
            }

            function finish()
            {
                game.MAIN.sprite.visible = true;
                while(game.UP_SPR.children.length>0)
                {
                    var ch=game.UP_SPR.children[0];
                    game.UP_SPR.removeChild(ch);
                }

                game.MAIN.sprite.position.y=game.SCREEN_HEIGHT;
                game.MAIN.btn_start.sprite.visible=false;
                game.MAIN.up_back.sprite.visible=false;
                game.ACT.start("from_up",game.MAIN,finish_up);
            }

            this.start = function()
            {
                here.up=game.UP_SPR.children[1];
                here.down=game.UP_SPR.children[0];
                here.up.sy=here.up.position.y;
                here.down.sy=here.down.position.y;
                game.ACT.start("hide",here,finish);
            }
        }

        game.GUI_BUSY=true;
        var hide=new AVK_HIDE();
        hide.start();


      
    }

    function get_l(dx,dy) 
    {
        var l=Math.sqrt(dx*dx+dy*dy);
        if (l==0)
            l=0.001;
        return l;
    }

    function angle(dx,dy)
    {
        var l=get_l(dx,dy);
        var a = Math.acos(dx/l);
        if (dy<0)
            a = 2 * Math.PI - a;
        return a;
    }

    function update(tk) 
    {
        if (tk>200)
            tk=200;
        game.GAME.win_wnd.sprite.rotation=0;
        game.GAME.loose_wnd.sprite.rotation=0;
        for (var i=0;i<to_update.length;i++)
        {
            to_update[i](tk);
        }

        for (i=0;i<GLOBAL.CLOUDS.length;i++)
        {
            var cl=GLOBAL.CLOUDS[i];
            cl.sprite.position.x-=cl.sprite.scale.x*tk/200;
            if (cl.sprite.position.x<-cl.uni_width*cl.sprite.scale.x)
                cl.sprite.position.x=game.SCREEN_WIDTH;
        }
    }

    function add_to_update(f) 
    {
        to_update.push(f);
    }

    function event(act,wnd,el,id,tag) 
    {
        if ((game.GUI_BUSY)&&(el!="btn_m0")&&(el!="btn_m1")&&(el!="btn_m2"))
            return;

      

        if (act=="click")
        {
            if (el=="btn_more")
			
             //Play68.goHome(); 
           

            if (is_snd())
                GLOB_click.play();

            //game.deb(act+";"+wnd+";"+el+";"+id+";"+tag);
            switch (wnd)
            {
                case "MAIN":
                    if (el.substring(0,8)=="btn_lev_")
                    {
                        
                        GLOBAL.WND_GAME.show(el.substring(8,el.length)/1);
                        if (is_snd())
                        {
                            GLOB_in_menu.stop();
                            GLOB_in_game.play("none",0,0,-1);
                        }
                    }

                    switch (el)
                    {
                        case "btn_snd":
                        case "btn_no_snd":
                            change_snd();
                            break;
                        case "btn_start":
                            GLOBAL.WND_GAME.show_level();
                            break;
                        case "btn_back":
                            GLOBAL.WND_GAME.hide_level();
                            break;
                    }
                    break; 
                case "GAME":
                    switch (el)
                    {
                        case "btn_snd":
                        case "btn_no_snd":
                            change_snd();
                            break;
                        case "btn_close":
                            GLOBAL.WND_GAME.pause();
                            break;
                        case "btn_menu":
                        case "btn_menu_win":
                            if (is_snd())
                            {
                                GLOB_heart.stop();
                                GLOB_in_game.stop();
                                GLOB_in_menu.play("none",0,0,-1);
                            }

                            GLOBAL.WND_GAME.close();
                            GLOBAL.PAUSE=false;
                            break;
                        case "btn_refresh":
                            GLOBAL.STAT[GLOBAL.WND_GAME.level_num].loose_refresh++;
                            save_stat();
                        case "btn_refresh_win":
                            GLOBAL.WND_GAME.pre_show();
                            GLOBAL.WND_GAME.on_show();
                            if (is_snd())
                                GLOB_in_game.play("none",0,0,-1);
                            break;
                        case "btn_next":
                            GLOBAL.STAT[GLOBAL.WND_GAME.level_num].win_next++;
                            save_stat();
                            
                            if (!GLOBAL.PAUSE)
                            {
                                if (GLOBAL.WND_GAME.level_num<18)
                                    GLOBAL.WND_GAME.level_num++;
                                else 
                                {
                                    GLOBAL.WND_GAME.close();
                                    return;
                                }
                                
                                GLOBAL.WND_GAME.pre_show();
                                GLOBAL.WND_GAME.on_show();
                                if (is_snd())
                                    GLOB_in_game.play("none",0,0,-1);
                            }else
                            {
                                GLOBAL.PAUSE=false;
                                GLOBAL.RUN=true;
                                game.GAME.win_wnd.sprite.visible=false;
                                game.GAME.shadow.sprite.visible=false;

                            }
                            break;
                    }
                    break;
            }
        }else if (act=="start")
            GLOBAL.WND_GAME.start();
    }

    function AVK_WND_BULLET(b)
    {
        var here=this;
        var all_balls=b;
        var ball=null;
        var up_ball=null;
        var x=0;
        var y=game.GAME.start_place.sprite.position.y+game.GAME.start_place.uni_height/2;
        var target_x=-1;
        var speed=0;
        var ready=0;
        this.color=0;
        this.up_color=0;

        game.GAME.bullet_place.add(game.LIGHT.react.reaction);
        game.LIGHT.react.reaction.sprite.position.y=y/3;
        game.LIGHT.react.reaction.sprite.scale.y=game.SCREEN_HEIGHT*1.2/game.LIGHT.react.reaction.uni_height;
        game.LIGHT.react.reaction.sprite.scale.x=game.LIGHT.react.reaction.sprite.scale.y/2;
        game.LIGHT.react.reaction.sprite.anchor.x=0.45;
        game.LIGHT.react.reaction.sprite.visible=false;

        game.GAME.bullet_place.add(game.BALLS.l);
        game.BALLS.l.sprite.anchor.x=0.5;
        game.BALLS.l.sprite.anchor.y=0.5;
        game.BALLS.l.sprite.visible=false;

        function AVK_LIGHT()
        {
            var t=this;
            this.set_property = function (newVal)
            {
                game.LIGHT.react.reaction.sprite.alpha=Math.sin(newVal*Math.PI);
            }

            this.finish_scale=function ()
            {
                game.LIGHT.react.reaction.sprite.visible=false;
                here.clear_ready();
            }

            this.start = function()
            {
                game.LIGHT.react.reaction.sprite.visible=true;
                game.LIGHT.react.reaction.sprite.alpha=0;
                game.ACT.start("light",t,t.finish_scale);
                GLOBAL.BALLS.try_light(game.LIGHT.react.reaction.sprite.position.x);
            }
        }

        var light=new AVK_LIGHT();

        this.add_ready=function()
        {
            if (ready==2)
            {
                if ((is_snd())&&(!game.BALLS.l.sprite.visible))
                    GLOB_light_on.play();
                game.BALLS.l.sprite.visible=true;
                if ((ball!=null)&&(speed==0))
                {
                    ball.sprite.visible=false;
                }
                
                return;
            }
            game.GAME["ready_"+ready].sprite.visible=true;
            ready++;
        }

        this.clear_ready=function()
        {
            ready=0;
            game.GAME.ready_0.sprite.visible=false;
            game.GAME.ready_1.sprite.visible=false;
            game.BALLS.l.sprite.visible=false;
            if (ball!=null)
                ball.sprite.visible=true;
        }

        this.born=function()
        {
            var f=false;
            for (var i=0;i<GLOBAL.COLORS.length;i++)
                if (GLOBAL.COLORS[i])
                    f=true;

            if (f)
                here.reset_color();
            else
                here.set_color();
        }

        this.reset_color=function()
        {
            here.color=here.up_color;
            here.up_color=Math.floor(Math.random()*7);
            while (!GLOBAL.COLORS[here.up_color])
                here.up_color=Math.floor(Math.random()*7);

            while (!GLOBAL.COLORS[here.color])
                here.color=Math.floor(Math.random()*7);

            here.set_color();
        }

        this.clear=function()
        {
            if (ball!=null)
                CONTAINER.free(ball);

            ball=null;
        }

        this.set_color=function()
        {
            if (GLOBAL.TUTOR==0)
            {
                here.color=1;
                here.up_color=0;
            }

            if (ball!=null)
                CONTAINER.free(ball);

            if (up_ball!=null)
                CONTAINER.free(up_ball);

            ball=CONTAINER.get_object("BALLS","b_"+here.color,game.GAME.bullet_place);
            ball.time=Math.PI*ball.uni_width;
            ball.sprite.anchor.x=0.5;
            ball.sprite.anchor.y=0.5;
            
            ball.sprite.scale.x=1;
            ball.sprite.scale.y=1;
            ball.sprite.alpha=1;
            ball.sprite.position.x=x;
            ball.sprite.position.y=y;
            ball.sprite.rotation=Math.PI/2;
            ball.color=here.color;

            ball.sprite.visible=!game.BALLS.l.sprite.visible;


            up_ball=CONTAINER.get_object("BALLS","b_"+here.up_color,game.GAME.up_b);
            up_ball.time=Math.PI*up_ball.uni_width;
            up_ball.sprite.anchor.x=0.5;
            up_ball.sprite.anchor.y=0.5;
            
            up_ball.sprite.alpha=1;
            up_ball.sprite.position.x=game.GAME.up_b.uni_width/2;
            up_ball.sprite.position.y=game.GAME.up_b.uni_height/2;
            up_ball.sprite.scale.x=0.3;
            up_ball.sprite.scale.y=0.3;
            up_ball.sprite.rotation=Math.PI/2;
            up_ball.color=here.up_color;
        }

        this.start=function()
        {
            if (GLOBAL.TUTOR==1)
            {
                if ((GLOBAL.X>GLOBAL.D+game.GAME.hand_center.sprite.position.x)||(GLOBAL.X<game.GAME.hand_center.sprite.position.x-GLOBAL.D))
                    return;

                GLOBAL.WND_GAME.TUTOR.stop();
                GLOBAL.X=game.GAME.hand_center.sprite.position.x-GLOBAL.D*2/3;
                GLOBAL.TUTOR++;
            }

            if (GLOBAL.TUTOR==3)
            {
                if ((GLOBAL.X>GLOBAL.D+game.GAME.hand_center.sprite.position.x)||(GLOBAL.X<game.GAME.hand_center.sprite.position.x-GLOBAL.D))
                    return;

                GLOBAL.WND_GAME.TUTOR.stop();
                GLOBAL.X=game.GAME.hand_center.sprite.position.x-GLOBAL.D*2/3;
                GLOBAL.TUTOR=1000000;
            }
            

            if ((speed==0)&&(target_x<0))
            {
                target_x=GLOBAL.X;
            }
        }

        this.update=function(tk)
        {
            game.GAME.uppper.sprite.position.x=GLOBAL.X;
            game.BALLS.l.sprite.position.y=y;
            game.BALLS.l.sprite.position.x=game.GAME.uppper.sprite.position.x;
            game.LIGHT.react.reaction.sprite.position.x=game.GAME.uppper.sprite.position.x;
            //game.BALLS.l.sprite.rotation+=tk/300;
            game.BALLS.l.update(tk*2);
            game.LIGHT.react.reaction.update(tk*7);
            game.LIGHT.react.reaction.sprite.rotation=0;
            //game.deb(GLOBAL.X);
            if (ball==null)
                return;

            ball.update(tk/15);
            //ball.sprite.rotation+=Math.PI*tk/1000;
            up_ball.update(-tk/5);
            //up_ball.sprite.rotation-=Math.PI*tk/1000;

            var f=false;
            for (var i=0;i<GLOBAL.COLORS.length;i++)
                if (GLOBAL.COLORS[i])
                    f=true;

            if (target_x>=0)
            {
                if (Math.abs(target_x-x)<GLOBAL.HS*tk)
                {
                    x=target_x;
                    target_x=-1;
                    if (game.BALLS.l.sprite.visible)
                    {
                        if (!game.LIGHT.react.reaction.sprite.visible)
                        {
                            light.start();
                            if (is_snd())
                                GLOB_light.play();
                        }
                    }else 
                    {
                        speed=GLOBAL.VS;
                        if (is_snd())
                            GLOB_ball.play();
                    }
                }else
                {
                    x+=(target_x-x)/Math.abs(target_x-x)*GLOBAL.HS*tk;
                }
                game.GAME.uppper.sprite.position.x=x;
                game.BALLS.l.sprite.position.x=game.GAME.uppper.sprite.position.x;
                game.LIGHT.react.reaction.sprite.position.x=game.GAME.uppper.sprite.position.x;
            }else if (speed==0)
            {
                x=GLOBAL.X;
                ball.sprite.position.y=y;
            }else
            {
                if (all_balls.verify_bullet(ball,ball.sprite.position.x,ball.sprite.position.x,ball.sprite.position.y,ball.sprite.position.y+tk*speed))
                {
                    x=GLOBAL.X;
                    speed=0;
                    ball=null;
                    return;
                }else
                {
                    ball.sprite.position.y+=tk*speed;
                    if (ball.sprite.position.y>game.SCREEN_HEIGHT+ball.uni_height)
                    {
                        x=GLOBAL.X;
                        speed=0;

                        if (f)
                            here.reset_color();
                        else
                            here.set_color();
                    }
                }
            }
            ball.sprite.position.x=x;

            if ((!GLOBAL.COLORS[this.color])&&(f))
                here.reset_color();
        }
    }

    function AVK_WND_CHAIN(bl)
    {
        var here=this;
        this.color=0;
        this.next=null;
        this.prev=null;
        this.shad=null;
        this.ball=null;
        this.active=false;
        this.progress=0;
        this.p_progress=0;
        this.beg_time=0;
        this.end_time=0;
        this.speed=GLOBAL.BS;
        this.prev_child=null;
        this.next_child=null;
        this.need_verify=false;
        this.a=0;
        this.delta=0;
        this.chained=true;
        this.none=false;
        var back_speed=0;
        var on_event=null;
        var max_prog=0;
        var all_balls=bl;

        this.set_max_prog=function(s,o)
        {
            max_prog=s;
            on_event=o;
            if (here.next!=null)
                here.next.set_max_prog(s,o);
        }

        this.get_max_prog=function()
        {
            return max_prog;
        }

        this.get_max_on=function()
        {
            return on_event;
        }

        this.set_speed=function(s)
        {
            back_speed=s;
        }

        this.get_back_speed=function(s)
        {
            return back_speed;
        }

        function add_to_killed()
        {
            for (var i=0;i<GLOBAL.KILLED.length;i++)
                if (GLOBAL.KILLED[i]==null)
                {
                    GLOBAL.KILLED[i]=here.ball;
                    GLOBAL.KILLED[i].time=250;
                    GLOBAL.KILLED[i].start_time=250;
                    here.ball=null;
                    return;
                }

            GLOBAL.KILLED.push(here.ball);
            GLOBAL.KILLED[i].time=150;
            GLOBAL.KILLED[i].start_time=150;
            here.ball=null;
        }

        this.kill=function(init)
        {
            if (here.ball!=null)
            {
                if (!init)
                {
                    all_balls.born_oskolki(here.ball.sprite.position.x,here.ball.sprite.position.y,here.color);
                    add_to_killed();
                }else 
                {
                    CONTAINER.free(here.ball);
                    here.ball=null; 
                }
            }
            if (here.shad!=null)
            {
                CONTAINER.free(here.shad);
                here.shad=null;
            }
            if (here.prev_child!=null)
            {
                CONTAINER.free(here.prev_child);
                GLOBAL.BULLET.born_after=true;
            }

            if (here.next_child!=null)
            {
                CONTAINER.free(here.next_child);
                GLOBAL.BULLET.born_after=true;
            }

            if (here.prev!=null)
            {
                here.prev.next=here.next;
            }

            if (here.next!=null)
            {
                here.next.prev=here.prev;
            }

            if ((here.prev==null)&&(!init))
                all_balls.change_first(here,here.next);

            here.active=false;
            here.next=null;
            here.prev=null;
        }
        
        this.born=function(color,prev,x,y,p,max_p,on_max)
        {
            here.beg_time=0;
            here.end_time=0;
        
            if (!game.TOO_SLOW)
            {
                here.shad=CONTAINER.get_object("BALLS","shadow",game.GAME.place_shad);
                here.shad.sprite.scale.x=1;
                here.shad.sprite.scale.y=1;
                here.shad.sprite.anchor.x=0.5;
                here.shad.sprite.anchor.y=0.5;
                here.shad.sprite.position.x=x-GLOBAL.D*0.1;
                here.shad.sprite.position.y=y+GLOBAL.D*0.1;
            }

            here.ball=CONTAINER.get_object("BALLS","b_"+color,game.GAME.place);
            here.ball.time=Math.PI*here.ball.uni_width;
            here.ball.sprite.alpha=1;
            here.ball.sprite.scale.x=1;
            here.ball.sprite.scale.y=1;
            here.ball.sprite.anchor.x=0.5;
            here.ball.sprite.anchor.y=0.5;
            here.ball.sprite.position.x=x;
            here.ball.sprite.position.y=y;
            here.color=color;
            here.progress=p;
            here.prev=prev;
            here.next=null;
            here.need_verify=false;
            here.a=0;
            here.delta=0;
            back_speed=0;
            here.chained=true;
            here.none=false;
            here.prev_child=null;
            here.next_child=null;

            here.active=true;
            max_prog=max_p;
            on_event=on_max;
            return here;
        }

        this.step=function(tk)
        {
            var tmp=here;
            while ((tmp.next!=null)&&(tmp.chained))
                tmp=tmp.next;

            var mul=tmp.progress/GLOBAL.LENGTH;
            while (tmp.next!=null)
                tmp=tmp.next;

            if (GLOBAL.MAX_PROG<tmp.progress)
                GLOBAL.MAX_PROG=tmp.progress;

            mul=(mul+tmp.progress/GLOBAL.LENGTH)/2;

            if (mul<=0)
                mul+=0.001;
            if (mul>=1)
                mul=1;

            if (mul<0.4)
            {
                mul=2+(1-2)*mul/0.4;//Math.sqrt(1/mul)+50*(1-mul)*(1-mul)*(1-mul)*(1-mul);
                mul*=mul*mul*mul*mul;
            }else if (mul>0.7)
                mul=1+(0.1-1)*(mul-0.7)/0.3;
            else mul=1;

            mul*=GLOBAL.MUL;
            here.press(here.progress+here.speed*tk*mul,tk);
        }

        this.on_max=function()
        {
            if (max_prog==1000000)
                return;

            max_prog=1000000;

            if (here.next!=null)
                here.next.on_max();

            if (here.prev!=null)
                here.prev.on_max();
            else if (on_event!=null)
            {
                if (here.active)
                    on_event();
                on_event=null;
            }
        }

        this.press=function(previos_progress,tk)
        {
            if (!here.active)
                return;

            var child=null;
            var just_chained=false;
            if (here.next_child!=null)
                child=here.next_child;

            if (here.prev_child!=null)
                child=here.prev_child;

            if (child!=null)
            {
                child.end_time-=tk;
                if (child.end_time<0)
                    child.end_time=0;
                child.progress=(child.beg_time-child.end_time)/child.beg_time;
                var l=Math.abs(Math.cos(child.angle))*GLOBAL.D*2-GLOBAL.D;
                if (l<0)
                    l=0;

                if (child.progress>=1)
                {
                    child.end_time=0;
                    child.beg_time=0;
                    child.progress=1;
                    var tmp=null;
                    var inserted=null;
                    if (here.next_child!=null)
                    {
                        here.next_child=null;
                        tmp=here.next;

                        here.next=all_balls.get_chain().born(child.color,here,child.sprite.position.x,child.sprite.position.y,here.progress+GLOBAL.D,max_prog,on_event);
                        inserted=here.next;
                        here.next.next=tmp;
                        if (tmp!=null)
                            tmp.prev=here.next;
                    }else
                    {
                        here.prev_child=null;
                        tmp=here.prev;

                        here.prev=all_balls.get_chain().born(child.color,tmp,child.sprite.position.x,child.sprite.position.y,here.progress-GLOBAL.D,max_prog,on_event);
                        inserted=here.prev;
                        inserted.chained=here.chained;
                        just_chained=true;
                        here.prev.next=here;
                        if (tmp!=null)
                        {
                            tmp.next=here.prev;
                            previos_progress+=l;
                        }else
                            all_balls.change_first(here,here.prev);
                    }

                    GLOBAL.BULLET.born_after=true;
                    CONTAINER.free(child);
                    inserted.ball.sprite.rotation=child.sprite.rotation;
                    inserted.none=true;
                    if (all_balls.try_match(inserted))
                        return;

                    if ((inserted.next!=null)&&(!inserted.next.chained)&&(inserted.next.color==inserted.color))
                    {
                        inserted.next.a=GLOBAL.BACK_A;
                        inserted.next.need_verify=true;
                        inserted.need_verify=true;
                    }else if ((!inserted.chained)&&(inserted.prev!=null)&&(inserted.prev.color==inserted.color))
                    {
                        inserted.a=GLOBAL.BACK_A;
                        inserted.prev.need_verify=true;
                        inserted.need_verify=true;
                    }

                }else
                {
                    child.angle=child.start_angle+(child.finish_angle-child.start_angle)*child.progress;
                }
            }

            if ((here.prev_child!=null)&&(l>0)&&(here.prev!=null))
                previos_progress+=l;

            if (here.a>0)
            {
                back_speed+=here.a*tk;
                here.progress-=back_speed*tk;
                here.delta=-back_speed*tk;
            }else if (here.a<0)
            {
                back_speed+=here.a*tk;
                here.progress-=back_speed*tk;
                if (here.chained)
                    previos_progress=here.progress;

                here.delta=-back_speed*tk;
            }


            here.ball.update(here.progress-here.pprogress);
            here.pprogress=here.progress;

            if (here.a<0)
            {
                back_speed+=here.a*tk;
                if (back_speed<=0)
                {
                    here.a=0;
                    back_speed=0;
                }
            }

            if (here.progress<previos_progress)
            {
                if (here.a!=0)
                {
                    tmp=here.prev;
                    if (tmp!=null)
                    {
                        while ((tmp.prev!=null)&&(tmp.chained))
                            tmp=tmp.prev;

                        tmp.set_speed(back_speed);
                        tmp.a=-1.2*GLOBAL.BACK_A;
                        if (is_snd())
                            GLOB_knock.play();
                    }
                }
                here.a=0;
                back_speed=0;
                here.chained=true;
                if ((here.prev!=null)&&(here.prev.need_verify)&&(here.need_verify))
                {
                    here.need_verify=false;
                    here.prev.need_verify=false;
                    if (all_balls.try_match(here))
                    {
                        here.progress=previos_progress;
                        return;
                    }
                }
            }

            if (here.chained)
            {
                here.delta=previos_progress-here.progress;
                here.progress=previos_progress;
            }else if (just_chained)
                here.chained=true;

            if (here.next!=null)
            {
                if ((here.next_child!=null)&&(l>0))
                    here.next.press(here.progress+GLOBAL.D+l,tk);
                else
                    here.next.press(here.progress+GLOBAL.D,tk);
            }

            

            if ((here.prev==null)&&(here.progress>=max_prog)&&(here.active))
            {
                here.on_max();
            }
        }
    }

    function AVK_WND_BALLS(w,p)
    {
        var here=this;
        var waves_cnt=0;
        var wave_len=0;
        var colors_cnt=0;
        var progress_trigger=0;
        var rnd_min=0;
        var rnd_mul=0;
        var stack=[];
        var chains=[];
        var scores=[];
        var to_kill=[];
        var random_cnt=0;
        var random_color=0;
        var start_x=0;
        var start_y=0;
        var path=p;
        var way=w;
        var chain_cnt=0
        var tutor_colors=[3,3,0,0,3,2,2,0,0,1,1,0,2];
        
        this.export_chains=chains;

        function AVK_COLLISION()
        {
            this.active=false;
            this.blt=null;
            this.trg=null;
            this.x=0;
            this.y=0;
            this.p=0;
        }

        var collision_result=new AVK_COLLISION();

        /*game.GAME.b_0.sprite.visible=false;
        game.GAME.b_1.sprite.visible=false;
        game.GAME.b_2.sprite.visible=false;
        game.GAME.b_3.sprite.visible=false;
        game.GAME.b_4.sprite.visible=false;
        game.GAME.b_5.sprite.visible=false;
        game.GAME.b_6.sprite.visible=false;*/

        function random_init()
        {
            random_cnt=Math.floor(rnd_min+Math.random()*rnd_mul);
            random_color=Math.floor(Math.random()*colors_cnt);
        }

        function get_color()
        {
            if (GLOBAL.TUTOR==0)
            {
                chain_cnt++;
                return tutor_colors[chain_cnt-1];
            }

            random_cnt--;
            if (random_cnt<0)
            {
                random_init();
                random_cnt--;
            }
            return random_color;
        }

        function get_chain()
        {
            for (var i=0;i<stack.length;i++)
                if (!stack[i].active)
                    break;

            if (i==stack.length)
                stack.push(new AVK_WND_CHAIN(here));

            return stack[i];
        }
        this.get_chain=get_chain;

        function get_first()
        {
            chain_cnt=0;
            var f=get_chain().born(get_color(),null,start_x,start_y,-GLOBAL.D*(wave_len-1),progress_trigger,born);
            for (var i=0;i<chains.length;i++)
                if (chains[i]==null)
                {
                    chains[i]=f;
                    return f;
                }

            chains.push(f);
            return f;
        }

        function update_waves()
        {
            for (var i=0;i<24;i++)
            {
                game.GAME["waves_"+i].sprite.visible=i<waves_cnt;
            }
        }

        function born()
        {
            waves_cnt--;
            update_waves();
            if (waves_cnt>=0)
            {
                var first=get_first();

                for (var i=1;i<wave_len;i++)
                {
                    first.next=get_chain().born(get_color(),first,start_x,start_y,-GLOBAL.D*(wave_len-i-1),progress_trigger,born);
                    first=first.next;
                }
            }
        }

        this.try_match=function(b)
        {
            var first=b;
            while ((first.chained)&&(first.prev!=null)&&(first.prev.color==b.color))
                first=first.prev;

            var cnt=1;
            var x=first.ball.sprite.position.x;
            var y=first.ball.sprite.position.y;

            while ((first.next!=null)&&(first.next.chained)&&(first.next.color==b.color))
            {
                first=first.next;
                x+=first.ball.sprite.position.x;
                y+=first.ball.sprite.position.y;
                cnt++;
            }


            if (cnt>2)
            {
                if (is_snd())
                    GLOB_match.play();
                GLOBAL.BALLS.add_score(cnt,x/cnt,y/cnt);
                if (GLOBAL.LEVEL_MUL>1)
                    GLOBAL.BULLET.add_ready();
                while ((b.next!=null)&&(b.next.chained)&&(b.next.color==b.color))
                    b.next.kill(false);
                while ((b.chained)&&(b.prev!=null)&&(b.prev.color==b.color))
                    b.prev.kill(false);

                if (b.next!=null)
                {
                    b.next.chained=false;

                    if ((b.prev!=null)&&(b.next.color==b.prev.color))
                    {
                        GLOBAL.LEVEL_MUL++;
                        b.next.a=GLOBAL.BACK_A;
                        b.next.need_verify=true;
                        b.prev.need_verify=true;
                    }else GLOBAL.LEVEL_MUL=1;
                }else GLOBAL.LEVEL_MUL=1;

                b.kill(false);
                return true;
            }
            GLOBAL.LEVEL_MUL=1;
            return false;
        }

        this.try_light=function(x)
        {
            GLOBAL.LEVEL_MUL=1;
            for (var i=0;i<to_kill.length;i++)
                to_kill[i]=null;

            function ver_now(b)
            {
                if ((b.ball.sprite.position.x>x-2*b.ball.uni_width)&&(b.ball.sprite.position.x<x+2*b.ball.uni_width))
                {
                    GLOBAL.BALLS.add_score(1,b.ball.sprite.position.x,b.ball.sprite.position.y);

                    for (var i=0;i<to_kill.length;i++)
                        if(to_kill[i]==null)
                        {
                            to_kill[i]=b;
                            break;
                        }

                    if (i==to_kill.length)
                        to_kill.push(b);
                }
            }

            for (i=0;i<chains.length;i++)
            {
                var b=chains[i];
                if (b!=null)
                {
                    ver_now(b);

                    while (b.next!=null)
                    {
                        b=b.next;
                        ver_now(b);
                    }
                }

            }

            for (i=0;i<to_kill.length;i++)
            {
                b=to_kill[i];
                if (b!=null)
                {
                    if (b.next!=null)
                    {
                        b.next.chained=false;

                        if (b.prev!=null)
                        {

                            if (b.next.color==b.prev.color)
                            {
                                b.next.a=GLOBAL.BACK_A;
                                b.next.need_verify=true;
                                b.prev.need_verify=true;
                            }else
                            {
                                b.next.a=0;
                                b.next.need_verify=false;
                                b.prev.need_verify=false;
                            }
                        }
                    }

                    b.kill(false);
                }
            }
        }

        this.change_first=function(first,new_first)
        {
            for (var i=0;i<chains.length;i++)
                if (chains[i]==first)
                {
                    chains[i]=new_first;
                }

            if (new_first==null)
                first.on_max();

            var f=true;
            while(f)
            {
                f=false;
                for (i=1;i<chains.length;i++)
                {
                    if ((chains[i-1]==null)&&(chains[i]!=null))
                    {
                        f=true;
                        chains[i-1]=chains[i];
                        chains[i]=null;
                    }
                }
            }
        }

        this.clear_scores=function()
        {
            for (var i=0;i<scores.length;i++)
                if (scores[i]!=null)
                {
                    CONTAINER.free(scores[i]);
                    scores[i]=null;
                }

        }

        this.init=function(waves,len,colors,progress,r_min,r_mul,x,y)
        {
            waves_cnt=waves;
            wave_len=len;
            colors_cnt=colors;
            progress_trigger=progress;
            rnd_min=r_min;
            rnd_mul=r_mul;
            start_x=x;
            start_y=y;

            for (var i=0;i<stack.length;i++)
                stack[i].kill(true);

            for (i=0;i<chains.length;i++)
                chains[i]=null;

            here.clear_scores();
            random_init();
        }
        
        this.start=born;

        function step(c)
        {
            var ball=c.ball;
            var progress=Math.floor(c.progress);
            if (way.length<=progress)
                progress=way.length;
            if (0>progress)
                progress=0;

            if ((way.length>progress)&&(progress>=0))
            {
                var id_0=way[progress].path_id;
                var id_1=way[progress].index;
                var e=way[progress].enabled;
                var x=path[id_0].x[id_1];
                var y=path[id_0].y[id_1];
                var dx=x-ball.sprite.position.x;
                var dy=y-ball.sprite.position.y;
                var a=0;

                ball.enabled=e;
                if (ball.enabled)
                {
                    if (c.shad!=null)
                        game.GAME.place_shad.sprite.addChild(c.shad.sprite);
                    game.GAME.place.sprite.addChild(ball.sprite);
                    if (c.next_child!=null)
                    {
                        game.GAME.place.sprite.addChild(c.next_child.sprite);
                    }else if (c.prev_child!=null)
                    {
                        game.GAME.place.sprite.addChild(c.prev_child.sprite);
                    }

                   
                }else
                {
                    if (c.shad!=null)
                        game.GAME.back_place_shad.sprite.addChild(c.shad.sprite);
                    game.GAME.back_place.sprite.addChild(ball.sprite);
                     if (c.next_child!=null)
                    {
                        game.GAME.back_place.sprite.addChild(c.next_child.sprite);
                    }else if (c.prev_child!=null)
                    {
                        game.GAME.back_place.sprite.addChild(c.prev_child.sprite);
                    }
                    
                }

                if ((dx!=0)||(dy!=0))
                {
                    if (c.delta>0)
                        a=angle(dx,dy);
                    else
                        a=angle(-dx,-dy);

                    ball.sprite.position.x=x;
                    ball.sprite.position.y=y;
                    if (c.shad!=null)
                    {
                        c.shad.sprite.position.x=x-GLOBAL.D*0.1;
                        c.shad.sprite.position.y=y+GLOBAL.D*0.1;
                    }

                    if (!c.none)
                        ball.sprite.rotation=a;
                    else
                        c.none=false;
                }

                var child=null;
                var a=0;
                if (c.next_child!=null)
                {
                    child=c.next_child;
                }

                if (c.prev_child!=null)
                {
                    child=c.prev_child;
                }

                if (child!=null)
                {
                    child.angle=child.start_angle+(child.finish_angle-child.start_angle)*child.progress;
                    child.sprite.rotation=ball.sprite.rotation-child.angle;
                    child.sprite.position.x=ball.sprite.position.x+Math.cos(child.sprite.rotation)*GLOBAL.D;
                    child.sprite.position.y=ball.sprite.position.y+Math.sin(child.sprite.rotation)*GLOBAL.D;
                    if (c.prev_child!=null)
                    {
                        child.sprite.rotation+=Math.PI;
                        if ((c.prev!=null)&&(c.chained))
                        {
                            a=c.prev.ball.sprite.rotation-ball.sprite.rotation;
                            if (a>Math.PI)
                                a=-2*Math.PI+a;
                            if (a<-Math.PI)
                                a=2*Math.PI+a;

                            a/=2;
                            child.sprite.rotation+=a*child.progress;
                            
                        }
                    }else
                    {
                        if ((c.next!=null)&&(c.next.chained))
                        {
                            a=c.next.ball.sprite.rotation-ball.sprite.rotation;
                            if (a>Math.PI)
                                a=-2*Math.PI+a;
                            if (a<-Math.PI)
                                a=2*Math.PI+a;

                            a/=2;
                            child.sprite.rotation+=a*child.progress;
                            
                        }
                    }
                }
            }
        }

        this.born_oskolki=function(x,y,color)
        {
            var num=Math.floor(Math.random()*2)+2;

            for(var n=0;n<num;n++)
            {
                var a=null;
                for (var i=0;i<GLOBAL.OSKOLKI.length;i++)
                    if (GLOBAL.OSKOLKI[i]==null)
                    {
                        a=CONTAINER.get_object("BALLS","star_"+color,game.GAME.bullet_place);
                        GLOBAL.OSKOLKI[i]=a;
                        break;
                    }

                if (a==null)
                {
                    a=CONTAINER.get_object("BALLS","star_"+color,game.GAME.bullet_place);
                    GLOBAL.OSKOLKI.push(a);
                }

                a.sprite.alpha=1;
                a.sprite.anchor.x=0.5;
                a.sprite.anchor.y=0.5;
                
                a.sprite.scale.x=0.5+Math.random()*0.3;
                a.sprite.scale.y=a.sprite.scale.x;
                a.scale=a.sprite.scale.x;
                a.alpha=0.5+Math.random()*0.5;
                
                a.sprite.position.x=x;
                a.sprite.position.y=y;

                a.ang=Math.random()*Math.PI*2;
                a.r=GLOBAL.D/4+Math.random()*GLOBAL.D/2;
                a.rad=GLOBAL.D/2;
                a.speedx=Math.cos(a.ang);
                a.speedy=Math.sin(a.ang);
                
                a.tx=game.GAME.txt_score.sprite.position.x+game.GAME.txt_score.uni_width/2;
                a.ty=game.GAME.txt_score.sprite.position.y+game.GAME.txt_score.uni_height/2;
                
                a.sx=x+GLOBAL.D*8-Math.random()*GLOBAL.D*16;
                a.sy=y+GLOBAL.D*8-Math.random()*GLOBAL.D*4;

                a.time=1+5*(Math.sqrt((x-a.sx)*(x-a.sx)+(y-a.sy)*(y-a.sy))+Math.sqrt((a.sx-a.tx)*(a.sx-a.tx)+(a.sy-a.ty)*(a.sy-a.ty)))/2;
                a.start_time=a.time;
                
                a.ax=a.speedx/500;
                a.ay=a.speedy/500;
               
                
                a.sprite.position.x=x+a.rad*a.speedx;
                a.sprite.position.y=y+a.rad*a.speedy;
                a.x=a.sprite.position.x;
                a.y=a.sprite.position.y;
                a.rot=(Math.random()-0.5)/100;

            }
        }

        function update_oskolki(tk)
        {
            if (GLOBAL.PAUSE)
                return;
            var cnt=0;
            for (var i=0;i<GLOBAL.OSKOLKI.length;i++)
                if ((GLOBAL.OSKOLKI[i]!=null)&&(GLOBAL.OSKOLKI[i].sprite.visible))
                {
                    var a=GLOBAL.OSKOLKI[i];

                    a.time-=tk;

                    if (a.time<=0)
                    {
                        CONTAINER.free(a);
                        GLOBAL.OSKOLKI[i]=null;
                    }else
                    {
                        var pr=(a.start_time-a.time)/a.start_time;

                       
                        a.sprite.scale.x=a.scale+(0.2-a.scale)*pr;
                        a.sprite.scale.y=a.sprite.scale.x;  

                        a.ang+=tk/1000*Math.PI;
                        a.speedx=Math.cos(a.ang);
                        a.speedy=Math.sin(a.ang);
                        a.rad=GLOBAL.D/4+a.r*(a.start_time-a.time)/a.start_time;
                
                        a.sprite.position.x=a.x+(a.sx-a.x)*pr+(a.sx+(a.tx-a.sx)*pr-(a.x+(a.sx-a.x)*pr))*pr;
                        a.sprite.position.y=a.y+(a.sy-a.y)*pr+(a.sy+(a.ty-a.sy)*pr-(a.y+(a.sy-a.y)*pr))*pr;
                
                        
                    }
                }

            

            for (i=0;i<GLOBAL.KILLED.length;i++)
                if ((GLOBAL.KILLED[i]!=null)&&(GLOBAL.KILLED[i].sprite.visible))
                {
                    cnt++;
                    var a=GLOBAL.KILLED[i];

                    a.time-=tk;

                    if (a.time<=0)
                    {
                        CONTAINER.free(a);
                        GLOBAL.KILLED[i]=null;
                    }else
                    {
                        var pr=(a.start_time-a.time)/a.start_time;

                        
                        a.sprite.scale.x=1-pr;
                        a.sprite.scale.y=a.sprite.scale.x;  
                        a.sprite.alpha=0.9-0.9*pr;
                    }
                }

            if (GLOBAL.FINISH)
                return;

            if (cnt==0)
            {
                for (i=0;i<chains.length;i++)
                    if (chains[i]!=null)
                        return;

                GLOBAL.WND_GAME.show_win();
            }
        }

        this.born_stars=function(x,y)
        {
            for (var n=0;n<15;n++)
            {
                var a=null;
                for (var i=0;i<scores.length;i++)
                    if (scores[i]==null)
                    {
                        a=CONTAINER.get_object("GAME","zvezda_part",game.GAME.part_place);
                        scores[i]=a;
                        break;
                    }

                if (a==null)
                {
                    a=CONTAINER.get_object("GAME","zvezda_part",game.GAME.part_place);
                    scores.push(a);
                }

                a.speedx=(Math.random()-0.5)*0.33;
                a.speeddx=0;
                a.speedy=(Math.random()-0.9)*0.48;
                a.speeddy=0.0009;
                
                a.sprite.anchor.x=0.5;
                a.sprite.anchor.y=0.5;
                a.sprite.position.x=x;
                a.sprite.position.y=y;

                a.sprite.scale.x=Math.random();
                a.sprite.scale.y=a.sprite.scale.x;
            }
        }

        function born_score(txt,x,y)
        {
            var a=null;
            for (var i=0;i<scores.length;i++)
                if (scores[i]==null)
                {
                    a=CONTAINER.get_object("GAME","txt_score_part",game.GAME.bullet_place);
                    scores[i]=a;
                    break;
                }

            if (a==null)
            {
                a=CONTAINER.get_object("GAME","txt_score_part",game.GAME.bullet_place);
                scores.push(a);
            }

            a.set_style(0.43,"AVK_FNT_main","left");
            a.set_text(convert(txt));
            a.speedx=-0.03;
            a.speeddx=0;
            a.speedy=-0.1;
            a.speeddy=-0.0005;
            
            a.sprite.position.x=x;
            a.sprite.position.y=y;
        }

        function update_scores(tk)
        {
            if (GLOBAL.CURRENT_SCORE<GLOBAL.SCORE)
            {
                var delta=Math.floor((GLOBAL.SCORE-GLOBAL.CURRENT_SCORE)*tk/200);
                if (delta<1)
                    delta=1;

                GLOBAL.CURRENT_SCORE+=delta;

                if (GLOBAL.CURRENT_SCORE>GLOBAL.SCORE)
                    GLOBAL.CURRENT_SCORE=GLOBAL.SCORE;

                var s=convert(""+GLOBAL.CURRENT_SCORE);
                game.GAME.txt_score.set_text(s);
                var i=s.length;
                var n=Math.floor(i/4);
                i-=n;

                game.GAME.txt_score.txt.position.x=game.GAME.txt_score.uni_width-i*22-n*12;

                if (GLOBAL.CURRENT_SCORE>=GLOBAL.TR_1)
                {
                    if (GLOBAL.WIN_PROGRESS==0)
                    {
                        game.GAME.prog_0.sprite.scale.x=GLOBAL.TR_1/GLOBAL.TR;
                        GLOBAL.WIN_PROGRESS++;
                        GLOBAL.BALLS.born_oskolki(game.GAME.prog_1.sprite.position.x,game.GAME.prog_1.sprite.position.y,1);
                        GLOBAL.BALLS.born_oskolki(game.GAME.prog_1.sprite.position.x,game.GAME.prog_1.sprite.position.y,1);
                        GLOBAL.BALLS.born_oskolki(game.GAME.prog_1.sprite.position.x,game.GAME.prog_1.sprite.position.y,1);
                        if (is_snd())
                            GLOB_up.play();
                    }else if (GLOBAL.CURRENT_SCORE>=GLOBAL.TR_2+GLOBAL.TR_1)
                    {
                        if (GLOBAL.WIN_PROGRESS==1)
                        {
                            game.GAME.prog_1.sprite.scale.x=GLOBAL.TR_2/GLOBAL.TR;
                            GLOBAL.WIN_PROGRESS++;
                            GLOBAL.BALLS.born_oskolki(game.GAME.prog_2.sprite.position.x,game.GAME.prog_2.sprite.position.y,2);
                            GLOBAL.BALLS.born_oskolki(game.GAME.prog_2.sprite.position.x,game.GAME.prog_2.sprite.position.y,2);
                            GLOBAL.BALLS.born_oskolki(game.GAME.prog_2.sprite.position.x,game.GAME.prog_2.sprite.position.y,2);
                            if (is_snd())
                                GLOB_up.play();
                        }else if (GLOBAL.CURRENT_SCORE>=GLOBAL.TR_3+GLOBAL.TR_2+GLOBAL.TR_1)
                        {
                            if (GLOBAL.WIN_PROGRESS==2)
                            {
                                game.GAME.prog_2.sprite.scale.x=GLOBAL.TR_3/GLOBAL.TR;
                                GLOBAL.WIN_PROGRESS++;
                                GLOBAL.BALLS.born_oskolki(game.GAME.prog_0.sprite.position.x+game.GAME.prog_0.uni_width,game.GAME.prog_0.sprite.position.y,0);
                                GLOBAL.BALLS.born_oskolki(game.GAME.prog_0.sprite.position.x+game.GAME.prog_0.uni_width,game.GAME.prog_0.sprite.position.y,0);
                                GLOBAL.BALLS.born_oskolki(game.GAME.prog_0.sprite.position.x+game.GAME.prog_0.uni_width,game.GAME.prog_0.sprite.position.y,0);
                                if (is_snd())
                                    GLOB_up.play();
                            }
                        }else
                        {
                            game.GAME.prog_2.sprite.scale.x=GLOBAL.TR_3/GLOBAL.TR*(GLOBAL.CURRENT_SCORE-GLOBAL.TR_2-GLOBAL.TR_1)/GLOBAL.TR_3;
                        }
                    }else
                    {
                        game.GAME.prog_1.sprite.scale.x=GLOBAL.TR_2/GLOBAL.TR*(GLOBAL.CURRENT_SCORE-GLOBAL.TR_1)/GLOBAL.TR_2;
                    }
                }else
                {
                    game.GAME.prog_0.sprite.scale.x=GLOBAL.TR_1/GLOBAL.TR*GLOBAL.CURRENT_SCORE/GLOBAL.TR_1;
                }

               
            }

            for (var i=0;i<scores.length;i++)
                if ((scores[i]!=null)&&(scores[i].sprite.visible))
                {
                    a=scores[i];

                    a.sprite.position.x+=a.speedx*tk;
                    a.sprite.position.y+=a.speedy*tk;
                    a.speedx+=a.speeddx*tk;
                    a.speedy+=a.speeddy*tk;
                    
                    if ((a.sprite.position.y<=-a.uni_height)||(a.sprite.position.y>=game.SCREEN_HEIGHT+a.uni_height)||(a.sprite.position.x<=-a.uni_width)||(a.sprite.position.x>=game.SCREEN_WIDTH+a.uni_width))
                    {
                        CONTAINER.free(a);
                        scores[i]=null;
                    }
                }
        }
        this.update_scores=update_scores;

        function add_score(m,x,y)
        {
            born_score(convert(m*10*GLOBAL.LEVEL_MUL),x,y);
            GLOBAL.SCORE+=GLOBAL.LEVEL_MUL*m*10;
        }
        this.add_score=add_score;

        this.update=function(tk)
        {
            update_oskolki(tk);
            update_scores(tk);

            if (!GLOBAL.RUN)
                return;

            for (var i=0;i<GLOBAL.COLORS.length;i++)
                GLOBAL.COLORS[i]=false;

            GLOBAL.BULLET.born_after=false;
            GLOBAL.MAX_PROG=0;

            for (i=0;i<chains.length;i++)
            {
                var tmp=chains[i];
                if (tmp!=null)
                {
                    tmp.step(tk);
                    tmp=chains[i];
                }
            }

            if (GLOBAL.MAX_PROG>=GLOBAL.LENGTH)
            {
                GLOBAL.WND_GAME.show_loose();
                if((is_snd())&&(GLOBAL.HEART))
                {
                    GLOBAL.HEART=false;
                    GLOB_heart.stop();
                }
            }else if (GLOBAL.MAX_PROG>=GLOBAL.LENGTH-GLOBAL.D*5)
            {
                if ((is_snd())&&(!GLOBAL.HEART))
                {
                    GLOBAL.HEART=true;
                    GLOB_heart.play("none",0,0,-1);
                }
            }else if ((is_snd()) &&(GLOBAL.HEART))
            {
                GLOBAL.HEART=false;
                GLOB_heart.stop();
            }


            for (i=0;i<chains.length;i++)
            {
                var tmp=chains[i];
                while (tmp!=null)
                {
                    GLOBAL.COLORS[tmp.color]=true;
                    tmp=tmp.next;
                }
            }

            if (GLOBAL.BULLET.born_after)
                GLOBAL.BULLET.born();

            var last=null;
            var prev=null;
            var prev_index=null;
            var l=0;
            var tmp=0;

            for (i=0;i<chains.length;i++)
            {
                tmp=chains[i];
                if (tmp!=null)
                {

                    if (prev!=null)
                    {
                        last=tmp;
                        while (last.next!=null)
                            last=last.next;

                        l=0;
                        if (last.next_child!=null)
                            l=Math.abs(Math.cos(last.next_child.angle))*GLOBAL.D*2-GLOBAL.D;
            
                        if (prev.prev_child!=null)
                            l+=Math.abs(Math.cos(prev.prev_child.angle))*GLOBAL.D*2-GLOBAL.D;

                        if (last.progress+GLOBAL.D+l>=prev.progress)
                        {
                            if (is_snd())
                                GLOB_knock.play();
                            last.next=prev;
                            prev.set_max_prog(last.get_max_prog(),last.get_max_on());
                            prev.prev=last;
                            prev.chained=true;
                            chains[prev_index]=null;

                            if (prev.a!=0)
                            {
                                tmp=prev.prev;
                                if (tmp!=null)
                                {
                                    while ((tmp.prev!=null)&&(tmp.chained))
                                        tmp=tmp.prev;

                                    tmp.set_speed(prev.get_back_speed());
                                    tmp.a=-1.2*GLOBAL.BACK_A;
                                }
                            }
                            prev.a=0;
                            prev.set_speed(0);

                            prev.press(last.progress+GLOBAL.D,0);
                        }
                    }

                    prev=tmp;
                    prev_index=i;
                }
            }

            last=true
            while(last)
            {
                last=false;
                for (i=1;i<chains.length;i++)
                {
                    if ((chains[i-1]==null)&&(chains[i]!=null))
                    {
                        last=true;
                        chains[i-1]=chains[i];
                        chains[i]=null;
                    }
                }
            }

            for (i=0;i<chains.length;i++)
            {
                var tmp=chains[i];
                while(tmp!=null)
                {
                    step(tmp);
                    tmp=tmp.next;
                }
            }
        }

        function on_collision(blt,target,xr,yr,pr)
        {
            if (pr<collision_result.p)
            {            
                collision_result.active=true;
                collision_result.blt=blt;
                collision_result.trg=target;
                collision_result.x=xr;
                collision_result.y=yr;
                collision_result.p=pr;
            }
        }

        this.verify_bullet=function(blt,lx0,lx1,ly0,ly1)
        {
            collision_result.active=false;
            collision_result.p=1000000;

            for (i=0;i<chains.length;i++)
            {
                target=chains[i];
                while (target!=null)
                {
                    if (target.ball.enabled)
                    {
                        var ox=target.ball.sprite.position.x;
                        var oy=target.ball.sprite.position.y;
                        var or=target.ball.uni_height/2;
                        
                        var l=get_l(lx1-lx0,ly1-ly0);
                        var r=Math.abs(((ly0-ly1)*ox+(lx1-lx0)*oy+(lx0*ly1-lx1*ly0))/l);//Кратчайшее расстояние до прямой
                        if (r<2*or)
                        {
                            var l1=Math.sqrt(4*or*or-r*r);//расстояние от точки проекции до центра шара с касанием
                            var m=Math.sqrt((ox-lx0)*(ox-lx0)+(oy-ly0)*(oy-ly0)-r*r);//расстояние от точки проекции до начала отрезка
                            var rp=m-l1;//расстояние, которое нужно пройти до пересечения

                            if (l>=rp)//расстояние пройдено с лихвой
                            {
                                var pr=rp/l;
                                var xr=lx0+(lx1-lx0)*pr;
                                var yr=ly0+(ly1-ly0)*pr;
                                on_collision(blt,target,xr,yr,pr);
                            }
                        }
                    }

                    target=target.next;
                }
            }

            if (collision_result.active)
            {
                if (is_snd())
                    GLOB_knock.play();
                var a=collision_result.trg.ball.sprite.rotation-angle(collision_result.blt.sprite.position.x-collision_result.trg.ball.sprite.position.x,collision_result.blt.sprite.position.y-collision_result.trg.ball.sprite.position.y);

                if (Math.abs(a)>Math.PI)
                {
                    if (a>0)
                        a=2*Math.PI-a;
                    else if (a<0)
                        a=2*Math.PI+a;

                }


                collision_result.blt.start_angle=a;
                collision_result.blt.angle=a;
                collision_result.blt.progress=0;
                game.GAME.place.sprite.addChild(collision_result.blt.sprite);
                
                if (Math.abs(a)<Math.PI/2)
                {//спереди стыкуем
                    collision_result.blt.finish_angle=0;
                    collision_result.trg.next_child=collision_result.blt;
                    collision_result.trg.next_child.beg_time=1+GLOBAL.INSERTS*Math.abs(a)/(Math.PI/2);
                    collision_result.trg.next_child.end_time=collision_result.trg.next_child.beg_time;
                }else
                {//сзади
                    collision_result.trg.prev_child=collision_result.blt;
                    collision_result.trg.prev_child.beg_time=1+GLOBAL.INSERTS*(Math.PI-Math.abs(a))/(Math.PI/2);
                    collision_result.trg.prev_child.end_time=collision_result.trg.prev_child.beg_time;

                    if (a>0)
                        collision_result.blt.finish_angle=Math.PI;
                    else
                        collision_result.blt.finish_angle=-Math.PI;
                }

                collision_result.blt.sprite.position.x=collision_result.x;
                collision_result.blt.sprite.position.y=collision_result.y;
                return true;
            }

            return false;
        }
    }

    function AVK_WND_GAME()
    {
        var here=this;
        var path=[];
        var way=[];
        var path_length=0;
        var balls=new AVK_WND_BALLS(way,path);
        GLOBAL.BALLS=balls;
        GLOBAL.BULLET=new AVK_WND_BULLET(balls);
        this.level_num=0;

        function AVK_WAY()
        {
            this.path_id=0;
            this.index=0;
            this.enabled=true;
        }

        function AVK_PATH()
        {
            this.x=new Array(GLOBAL.PATH_POINTS);
            this.y=new Array(GLOBAL.PATH_POINTS);
            this.l=new Array(GLOBAL.PATH_POINTS);
            this.l[GLOBAL.PATH_POINTS-1]=0;
        }

        function update(tk)
        {
            if (game.GAME.tutor.sprite.visible)
                return;

            game.GAME.wrays.sprite.rotation+=tk/1500;
            game.GAME.brays.sprite.rotation-=tk/1500;

            balls.update(tk);

            if (!GLOBAL.RUN)
                return;

            GLOBAL.TIME+=tk;
            if (GLOBAL.TUTOR<1000000)
            {
                if(GLOBAL.TUTOR_STEPS[GLOBAL.TUTOR]<GLOBAL.TIME)
                {
                    GLOBAL.TUTOR++;

                    switch(GLOBAL.TUTOR)
                    {
                        case 1:
                            var tmp=balls.export_chains[0];

                            for (var i=0;i<10;i++)
                                tmp=tmp.next;

                            tutor.start(tmp.ball.sprite.position.x,game.SCREEN_HEIGHT-game.GAME.hand.uni_height*1.1);
                            break; 
                        case 3:
                            var tmp=balls.export_chains[0];

                            for (var i=0;i<3;i++)
                                tmp=tmp.next;

                            tutor.start(tmp.ball.sprite.position.x,game.SCREEN_HEIGHT-game.GAME.hand.uni_height*1.1);
                            break;
                    }
                }
            }
            GLOBAL.BULLET.update(tk);
        }
        add_to_update(update);

        function get_coord(start,middle,finish,progress)
        {
            return start+(middle-start)*progress+(middle+(finish-middle)*progress-(start+(middle-start)*progress))*progress;
        }

        function init_path(level,pnt_cnt)
        {
            var start_x=0;
            var start_y=0;
            var mid_x=0;
            var mid_y=0;
            var finish_x=0;
            var finish_y=0;

            for (var i=0;i<pnt_cnt;i++)
            {
                if (i+1>=path.length)
                {
                    path.push(new AVK_PATH());
                }

                var pnt_name="l_"+level+"_pnt_"+(i-1);
                var n1_pnt_name="l_"+level+"_pnt_"+(i+0);
                var n2_pnt_name="l_"+level+"_pnt_"+(i+1);

                if (i==0)
                {
                    start_x=game.GAME[n1_pnt_name].sprite.position.x+game.GAME[n1_pnt_name].uni_width/2;
                    start_y=game.GAME[n1_pnt_name].sprite.position.y+game.GAME[n1_pnt_name].uni_width/2;

                    var l=get_l(start_x-(game.GAME[n2_pnt_name].sprite.position.x+game.GAME[n2_pnt_name].uni_width/2),start_y-(game.GAME[n2_pnt_name].sprite.position.y+game.GAME[n2_pnt_name].uni_width/2));
                    start_x+=(start_x-(game.GAME[n2_pnt_name].sprite.position.x+game.GAME[n2_pnt_name].uni_width/2))/l;
                    start_y+=(start_y-(game.GAME[n2_pnt_name].sprite.position.y+game.GAME[n2_pnt_name].uni_width/2))/l;
                    
                }else
                {
                    start_x=game.GAME[pnt_name].sprite.position.x+game.GAME[pnt_name].uni_width/2;
                    start_y=game.GAME[pnt_name].sprite.position.y+game.GAME[pnt_name].uni_width/2;
                }
                mid_x=game.GAME[n1_pnt_name].sprite.position.x+game.GAME[n1_pnt_name].uni_width/2;
                mid_y=game.GAME[n1_pnt_name].sprite.position.y+game.GAME[n1_pnt_name].uni_width/2;

                if (i==pnt_cnt-1)
                {
                    l=get_l(mid_x-start_x,mid_y-start_y);
                    finish_x=mid_x+(mid_x-start_x)/l;
                    finish_y=mid_y+(mid_y-start_y)/l;
                }else
                {
                    finish_x=game.GAME[n2_pnt_name].sprite.position.x+game.GAME[n2_pnt_name].uni_width/2;
                    finish_y=game.GAME[n2_pnt_name].sprite.position.y+game.GAME[n2_pnt_name].uni_width/2;
                }

                start_x=(start_x+mid_x)/2;
                start_y=(start_y+mid_y)/2;
                finish_x=(finish_x+mid_x)/2;
                finish_y=(finish_y+mid_y)/2;

                for (var progress=0;progress<path[i].x.length;progress++)
                {
                    path[i].x[progress]=get_coord(start_x,mid_x,finish_x,progress/(path[i].x.length-1));//последняя точка тоже в массиве
                    path[i].y[progress]=get_coord(start_y,mid_y,finish_y,progress/(path[i].x.length-1));
                    if (progress>0)
                    {
                        path[i].l[progress-1]=Math.sqrt((path[i].x[progress]-path[i].x[progress-1])*(path[i].x[progress]-path[i].x[progress-1])+(path[i].y[progress]-path[i].y[progress-1])*(path[i].y[progress]-path[i].y[progress-1]));
                    }
                }
            }
        }

        function add_way(pnt,e)
        {
            for (var progress=0;progress<path[pnt].x.length;progress++)
            {
                path_length+=path[pnt].l[progress];
                if (path_length>=1)
                {
                    var a=new AVK_WAY();
                    a.path_id=pnt;
                    a.index=progress;
                    a.enabled=e;
                    way.push(a);
                    path_length-=1;
                }
            }
        }

        function init(level)
        {
            GLOBAL.PAUSE=false;
            load_stat();
            GLOBAL.HEART=false;
            game.GAME.wrays.sprite.visible=false;
            game.GAME.brays.sprite.visible=false;
            GLOBAL.BULLET.clear_ready();
            GLOBAL.LEVEL_MUL=1;
            GLOBAL.SCORE=0;
            GLOBAL.CURRENT_SCORE=0;
            GLOBAL.WIN_PROGRESS=0;
            game.GAME.txt_score.set_text("");
            for (i=0;i<10;i++)
            {
                if (game.GAME["head_"+i].sprite.parent!=null)
                    game.GAME["head_"+i].sprite.parent.removeChild(game.GAME["head_"+i].sprite);
                if (game.GAME["up_"+i].sprite.parent!=null)
                    game.GAME["up_"+i].sprite.parent.removeChild(game.GAME["up_"+i].sprite);
                if (game.GAME["res_"+i].sprite.parent!=null)
                    game.GAME["res_"+i].sprite.parent.removeChild(game.GAME["res_"+i].sprite);
            }

            GLOBAL.UP_SPR.addChild(game.GAME["up_"+level].sprite);
            GLOBAL.HEAD_SPR.addChild(game.GAME["head_"+level].sprite);
            game.GAME.back.sprite.addChild(game.GAME["res_"+level].sprite);

            game.GAME["head_"+level].sprite.visible=true;
            game.GAME["up_"+level].sprite.visible=true;
            /*game.GAME["up_"+level].sprite.position.x=0;
            game.GAME["up_"+level].sprite.position.y=0;
            game.GAME["up_"+level].sprite.scale.y=2;*/

            game.GAME["res_"+level].sprite.visible=true;
            //game.GAME["res_"+level].sprite.position.x=0;
            //game.GAME["res_"+level].sprite.position.y=0;
            //game.GAME["real_back_"+level].sprite.visible=true;

            path_length=0;

            while (way.length>0)
                way.pop();
            var cnt=0;
            var elem=game.filtered("points","pnt",cnt,"level",level);

            while(elem!=null)
            {
                cnt++;
                elem=game.filtered("points","pnt",cnt,"level",level);
            }

            init_path(level,cnt);
            
            for (var i=0;i<cnt;i++)
                add_way(i,game.filtered("points","enabled",i,"level",level)==1);

            GLOBAL.LENGTH=way.length;
        }

        function on_show()
        {
            SG_Hooks.start();
            GLOBAL.RUN=true;
            GLOBAL.TIME=0;
            GLOBAL.BULLET.set_color();  
            balls.start();
            GLOBAL.FINISH=false;
            var tmp=balls.export_chains[0];

            while (tmp.next!=null)
                tmp=tmp.next;

           
        }
        this.on_show=on_show;

        this.start=function()
        {
            if ((GLOBAL.TUTOR==0)||(GLOBAL.TUTOR==2))
                return;
            GLOBAL.BULLET.start();
        }

        this.show_level=function()
        {
            game.MAIN.levels.sprite.visible=true;
            game.MAIN.main.sprite.visible=true;

            game.ACT.start("from_right",game.MAIN.levels);
            game.ACT.start("to_left",game.MAIN.main,hide_btn_start);
            game.GUI_BUSY=true;

            function hide_btn_start()
            {
                game.GUI_BUSY=false;
                game.MAIN.levels.sprite.visible=true;
                game.MAIN.main.sprite.visible=false;
            }
        }

        this.hide_level=function()
        {
            game.MAIN.levels.sprite.visible=true;
            game.MAIN.main.sprite.visible=true;

            game.ACT.start("to_right",game.MAIN.levels);
            game.ACT.start("from_left",game.MAIN.main,hide_levels);
            game.GUI_BUSY=true;

            function hide_levels()
            {
                game.GUI_BUSY=false;
                game.MAIN.levels.sprite.visible=false;
                game.MAIN.main.sprite.visible=true;
            }

            for (var i=0;i<GLOBAL.OSKOLKI.length;i++)
                if (GLOBAL.OSKOLKI[i]!=null)
                {
                    var a=GLOBAL.OSKOLKI[i];

                    CONTAINER.free(a);
                    GLOBAL.OSKOLKI[i]=null;
                }

            for (i=0;i<GLOBAL.KILLED.length;i++)
                if (GLOBAL.KILLED[i]!=null)
                {
                    var a=GLOBAL.KILLED[i];

                    CONTAINER.free(a);
                    GLOBAL.KILLED[i]=null;
                }
        }

        this.show=function(id)
        {
            here.level_num=id;
            here.pre_show();
            GLOBAL.SHOW_HANDLER=on_show;
            show_wnd_left(game.GAME);
            


        }

        this.pre_show=function()
        {
            var id=here.level_num;
            game.GAME.shadow.sprite.visible=false;
            game.GAME.win_wnd.sprite.visible=false;
            game.GAME.loose_wnd.sprite.visible=false;
            
            for (var i=0;i<10;i++)
            {
                game.GAME["head_"+i].sprite.visible=false;
                game.GAME["up_"+i].sprite.visible=false;
                game.GAME["res_"+i].sprite.visible=false;
               
            }

            init(game.get("levels","level",id));//waves,len,colors,progress,r_min,r_mul,x,y
            GLOBAL.MUL=game.get("levels","mul",id);
            balls.init(game.get("levels","waves",id),game.get("levels","len",id),game.get("levels","colors",id),game.get("levels","progress",id),game.get("levels","r_min",id),game.get("levels","r_max",id),path[0].x[0],path[0].y[0]);

            GLOBAL.TR_1=game.get("levels","t1",id);
            GLOBAL.TR_2=game.get("levels","t2",id)-GLOBAL.TR_1;
            GLOBAL.TR_3=game.get("levels","t3",id)-GLOBAL.TR_2-GLOBAL.TR_1;;
            GLOBAL.TR=GLOBAL.TR_1+GLOBAL.TR_2+GLOBAL.TR_3;
            
            game.GAME.prog_0.sprite.scale.x=GLOBAL.TR_1/GLOBAL.TR;
            game.GAME.prog_1.sprite.position.x=game.GAME.prog_0.sprite.position.x+game.GAME.prog_0.uni_width*GLOBAL.TR_1/GLOBAL.TR;
            game.GAME.riska_0.sprite.position.x=game.GAME.prog_1.sprite.position.x;
            game.GAME.prog_1.sprite.scale.x=GLOBAL.TR_2/GLOBAL.TR;
            game.GAME.prog_2.sprite.position.x=game.GAME.prog_1.sprite.position.x+game.GAME.prog_1.uni_width*GLOBAL.TR_2/GLOBAL.TR;
            game.GAME.riska_1.sprite.position.x=game.GAME.prog_2.sprite.position.x;
            game.GAME.prog_2.sprite.scale.x=GLOBAL.TR_3/GLOBAL.TR;

            game.GAME.prog_0.sprite.scale.x=0;
            game.GAME.prog_1.sprite.scale.x=0;
            game.GAME.prog_2.sprite.scale.x=0;

            GLOBAL.BULLET.clear();
            game.GAME.txt_score.set_text("");
        }

        this.close=function()
        {
            game.GAME.brays.sprite.visible=false;
            game.GAME.wrays.sprite.visible=false;
            GLOBAL.FINISH=true;
            game.GAME.shadow.sprite.visible=false;
            game.GAME.win_wnd.sprite.visible=false;
            game.GAME.loose_wnd.sprite.visible=false;
            GLOBAL.RUN=false;
            hide_wnd_left();
        }

        this.pause=function()
        {
            GLOBAL.PAUSE=true;
            GLOBAL.RUN=false;
            game.GAME.star_0.sprite.visible=false;
            game.GAME.star_1.sprite.visible=false;
            game.GAME.star_2.sprite.visible=false;

            game.GAME.win_wnd.sprite.position.y=-game.GAME.win_wnd.uni_height;
            game.GAME.win_wnd.sprite.visible=true;
            here.wnd.wnd=game.GAME.win_wnd;
            game.ACT.start("pr",here.wnd);
            game.GAME.shadow.sprite.visible=true;
            game.GAME.shadow.sprite.alpha=0;
            game.GAME.win_wnd_back.sprite.visible=false;
        }

        function AVK_show_wnd()
        {
            var here=this;
            this.wnd=null;

            this.set_property=function (val)
            {
                here.wnd.sprite.position.y=-this.wnd.uni_height+(this.wnd.y+this.wnd.uni_height)*val;
                game.GAME.shadow.sprite.alpha=val/2;
            }

            this.finish=function ()
            {
                var w=null;
                if (here.wnd==game.GAME.win_wnd)
                    w=game.GAME.wrays;
                else
                    w=game.GAME.brays;

                w.sprite.visible=true;
                w.sprite.alpha=0;
                game.ACT.start("alpha",w);

                if (here.wnd==game.GAME.loose_wnd)
                    game.GUI_BUSY=false;
            }
        }
        this.wnd=new AVK_show_wnd();

        function AVK_zvezda()
        {
            var here=this;
            var prog;
            var f=0;

            this.set_property=function(p)
            {
                if (p<1/3)
                {
                    if (!game.GAME.star_0.sprite.visible)
                        game.GUI_BUSY=false;
                    
                    game.GAME.star_0.sprite.alpha=p*3;
                    game.GAME.star_0.sprite.scale.x=-3+12*p;
                    game.GAME.star_0.sprite.scale.y=3-6*p;
                }else if (p<2/3)
                {
                    if (!game.GAME.star_1.sprite.visible)
                        game.GUI_BUSY=false;
                    else if (f==0)
                    {
                        f++;
                        if (is_snd())
                            GLOB_match.play();
                    }

                    if ((prog==0)&&(game.GAME.star_0.sprite.visible))
                    {
                        balls.born_stars(game.GAME.star_0.sprite.position.x+game.GAME.win_wnd.sprite.position.x,game.GAME.star_0.sprite.position.y+game.GAME.win_wnd.sprite.position.y);
                        prog++;
                    }
                    game.GAME.star_0.sprite.alpha=1;
                    game.GAME.star_1.sprite.alpha=(p-1/3)*3;
                    game.GAME.star_1.sprite.scale.x=-3+12*(p-1/3);
                    game.GAME.star_1.sprite.scale.y=3-6*(p-1/3);
                }else
                {
                    if (!game.GAME.star_2.sprite.visible)
                        game.GUI_BUSY=false;
                    else if (f==1)
                    {
                        f++;
                        if (is_snd())
                            GLOB_match.play();
                    }

                    if ((prog==1)&&(game.GAME.star_1.sprite.visible))
                    {
                        balls.born_stars(game.GAME.star_1.sprite.position.x+game.GAME.win_wnd.sprite.position.x,game.GAME.star_1.sprite.position.y+game.GAME.win_wnd.sprite.position.y);
                        prog++;
                    }
                    game.GAME.star_0.sprite.alpha=1;
                    game.GAME.star_1.sprite.alpha=1;
                    game.GAME.star_0.sprite.scale.x=1;
                    game.GAME.star_0.sprite.scale.y=1;
                    game.GAME.star_1.sprite.scale.x=1;
                    game.GAME.star_1.sprite.scale.y=1;
                    game.GAME.star_2.sprite.alpha=(p-2/3)*3;
                    game.GAME.star_2.sprite.scale.x=-3+12*(p-2/3);
                    game.GAME.star_2.sprite.scale.y=3-6*(p-2/3);
                }
            }

            this.finish=function()
            {
                if (game.GAME.star_2.sprite.visible)
                {
                    balls.born_stars(game.GAME.star_2.sprite.position.x+game.GAME.win_wnd.sprite.position.x,game.GAME.star_2.sprite.position.y+game.GAME.win_wnd.sprite.position.y);
                    if (is_snd())
                        GLOB_match.play();
                }
                game.GUI_BUSY=false;
            }

            this.start=function()
            {
                game.GUI_BUSY=true;
                prog=0;
                f=0;
                game.GAME.star_0.sprite.visible=GLOBAL.WIN_PROGRESS>0;
                game.GAME.star_1.sprite.visible=GLOBAL.WIN_PROGRESS>1;
                game.GAME.star_2.sprite.visible=GLOBAL.WIN_PROGRESS>2;
                game.GAME.star_0.sprite.alpha=0;
                game.GAME.star_1.sprite.alpha=0;
                game.GAME.star_2.sprite.alpha=0;
                game.ACT.start("show_zw",here,here.finish);
            }
        }

        var zvezda=new AVK_zvezda();

        this.show_win=function()
        {
            //SG_Hooks.levelUp(here.level_num+1, GLOBAL.SCORE);
            if (is_snd())
            {
                GLOB_heart.stop();
                GLOB_win.play();
                GLOB_in_game.stop();
            }
           
            var stat=GLOBAL.STAT[here.level_num];
            
            stat.win_cnt++;
            stat.win_time+=GLOBAL.TIME;
            stat.win_score+=GLOBAL.SCORE;
            if (GLOBAL.LEVELS[here.level_num]>=0)
                stat.win_emprove_cnt++;
            save_stat();
            
            GLOBAL.LEVELS[here.level_num]=GLOBAL.WIN_PROGRESS;
            if (here.level_num+1<19)
            {
                if (GLOBAL.LEVELS[here.level_num+1]==-2)
                    GLOBAL.LEVELS[here.level_num+1]=-1;
            }

            save();            
            init_select();

            GLOBAL.BALLS.update_scores(1000000);
            game.GAME.win_wnd.sprite.position.y=-game.GAME.win_wnd.uni_height;
            GLOBAL.FINISH=true;
            GLOBAL.RUN=false;
            game.GAME.win_wnd.sprite.visible=true;
            here.wnd.wnd=game.GAME.win_wnd;
            zvezda.start();
            game.ACT.start("pr",here.wnd,here.wnd.finish);
            game.GAME.shadow.sprite.visible=true;
            game.GAME.shadow.sprite.alpha=0;
            game.GAME.win_wnd_back.sprite.visible=true;
		    //Play68.setRankingLevelScoreDesc(here.level_num+1,GLOBAL.SCORE);
			//play68_submitScore(here.level_num+1,GLOBAL.SCORE);
		   
        
        }

        this.show_loose=function()
        {
            //SG_Hooks.gameOver(here.level_num+1, GLOBAL.SCORE);
            if (is_snd())
            {
                GLOB_heart.stop();
                GLOB_gameover.play();
                GLOB_in_game.stop();
            }
            var stat=GLOBAL.STAT[here.level_num];
            
            stat.loose_cnt++;
            stat.loose_time+=GLOBAL.TIME;
            stat.loose_score+=GLOBAL.SCORE;
            if (GLOBAL.LEVELS[here.level_num]>=0)
                stat.loose_emprove_cnt++;
            save_stat();

            game.GAME.loose_wnd.sprite.position.y=-game.GAME.loose_wnd.uni_height;
            GLOBAL.FINISH=true;
            GLOBAL.RUN=false;
            game.GAME.loose_wnd.sprite.visible=true;
            here.wnd.wnd=game.GAME.loose_wnd;
            game.GUI_BUSY=true;
            game.ACT.start("pr",here.wnd,here.wnd.finish);
            game.GAME.shadow.sprite.visible=true;
            game.GAME.shadow.sprite.alpha=0;
        }

        function AVK_WND_TITLE()
        {
            var here=this;
            var stop_ui=false;
            this.targ=null;

            function AVK_BTN_SCALE()
            {
                this.set_property = function (newVal)
                {
                    if (stop_ui)
                        return;
                    game.MAIN.btn_start.sprite.scale.x=1+0.02*newVal;
                    game.MAIN.btn_start.sprite.scale.y=1-0.02*newVal;

                    if (here.targ!=null)
                    {
                        here.targ.sprite.scale.x=1+0.05*newVal;
                        here.targ.sprite.scale.y=1-0.05*newVal;
                    }
                }
            }

            var btn_scale=new AVK_BTN_SCALE();

            function finish_scale()
            {
                if (stop_ui)
                    return;
                game.ACT.start("ui_scale",btn_scale,finish_scale);
            }

            this.stop_scale_ui = function()
            {
                stop_ui=true;
            }

            finish_scale();
        }

        this.scle_btn=new AVK_WND_TITLE();

        function AVK_WND_TUTOR()
        {
            var here=this;
            this.stoped=true;
            this.x=0;
            this.y=0;
            var sh1=game.GAME.shadow.make_copy();
            var sh2=game.GAME.shadow.make_copy();

            game.GAME.tutor.sprite.addChildAt(sh1.sprite,0);
            sh1.sprite.alpha=0.5;
            sh1.sprite.scale.x=25.2;
            sh1.sprite.scale.y=25.2;
            sh1.sprite.position.x=-10;
            sh1.sprite.position.y=-10;

            game.GAME.tutor.sprite.addChildAt(sh2.sprite,0);
            sh2.sprite.alpha=0.5;
            sh2.sprite.scale.x=25.2;
            sh2.sprite.scale.y=25.2;
            sh2.sprite.position.x=-10;
            sh2.sprite.position.y=-10;

            game.GAME.tutor.sprite.visible=false;
            
            this.start = function (x,y)
            {
                if (!here.stoped)
                    return;

                sh1.sprite.position.x=x-GLOBAL.D-sh1.sprite.scale.x*sh1.uni_width;
                sh2.sprite.position.x=x+GLOBAL.D;
                game.GAME.hand_center.sprite.position.x=x;
                game.GAME.hand_center.sprite.position.y=y;
                here.stoped=false;
                game.GAME.tutor.sprite.visible=true;
                game.GAME.tutor.sprite.alpha=0;
                here.x=x;
                here.y=y;

                finish_scale();

                game.ACT.start("tutor_alpha",game.GAME.tutor);
            }

            this.stop = function ()
            {
                if (here.stoped)
                    return;

                here.stoped=true;

                function fin()
                {
                    game.GAME.tutor.sprite.visible=false;
                }

                game.ACT.start("tutor_alpha_hide",game.GAME.tutor,fin);
            }

            this.set_property = function (newVal)
            {
                if (here.stoped)
                    return;

                game.GAME.hand_center.sprite.scale.x=1+0.05*newVal;
                game.GAME.hand_center.sprite.scale.y=1+0.05*newVal;
            }

            function finish_scale()
            {
                if (here.stoped)
                    return;
                game.ACT.start("ui_scale",here,finish_scale);
            }
        }

        var tutor=new AVK_WND_TUTOR();
        this.TUTOR=tutor;
    }
  
}