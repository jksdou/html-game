	    function AVK_ERROR(e) 
	    {
			AVK_DEBUG_CONDITION.msg=e.message;
	    	AVK_DEBUG_CONDITION.stack=e.stack;
	    	var map = JSON.stringify(AVK_DEBUG_CONDITION);
	        $$a({   type:'post',//тип запроса: get,post либо head
	                url:'save_deb.php',//url адрес файла обработчика
	                data:{"data" : map},//параметры запроса
	                response:'text',//тип возвращаемого ответа text либо xml
	                success:function (data) {
	                   
	                }
	            });

	    	alert(e);
	    }

	    function AVK_DEBUG(str) 
	    {
	    	for (var i=0;i<AVK_DEBUG_CONDITION.prog.length-1;i++)
	    		AVK_DEBUG_CONDITION.prog[i]=AVK_DEBUG_CONDITION.prog[i+1];
	    	AVK_DEBUG_CONDITION.prog[i]=str;
	    }

	    function handleLoad(event) 
	    {
	    	
	    }

	