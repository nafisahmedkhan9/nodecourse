/** This is a sample code for your bot**/
	    function MessageHandler(context, event) {
	        var msg=event.message.toLowerCase();
	        var seprator=msg.split(" ");

	        if(msg) {
	            /** This is a sample code for your bot**/
	    function MessageHandler(context, event) {
	        var msg=event.message.toLowerCase();
	        var seprator=msg.split(" ");

	        if(msg) {
				var         {
				    "botname": "demobot2",
				    "contextobj": {
				        "botname": "demobot2",
				        "channeltype": "telegram",
				        "contextid": "195173611",
				        "contexttype": "p2p"
				    },
				    "messageobj": {
				        "address": "",
				        "latitude": "18.519825",
				        "longitude": "73.929449",
				        "text": "https://www.google.com/maps/?q=18.519825,73.929449",
				        "type": "location"
				    },
				    "senderobj": {
				        "channelid": "195173611",
				        "channeltype": "telegram",
				        "display": "Shreyans"
				    },
				    "channel": "telegram",
				    "sender": "195173611",
				    "message": "https://www.google.com/maps/?q=18.519825,73.929449"
				}
	        }
	        else {
	            context.sendResponse('No keyword found : '+event.message); 
	        }
	    }
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	        context.sendResponse("this is finding distance bot . To find your distace check in your location ");
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
	        }
	        else {
	            context.sendResponse('No keyword found : '+event.message); 
	        }
	    }
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	        context.sendResponse("this is finding distance bot . To find your distace check in your location ");
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }