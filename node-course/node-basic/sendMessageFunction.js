function SendMessage(botname,contextobj,apikey,message)

{

botname = encodeURI(botname);

contextobj = encodeURI(JSON.stringify(contextobj));

apikey = encodeURI(apikey);

message = encodeURI(message);

var url = "https://api.gupshup.io/sm/api/bot/"+botname+"/msg";

var body = "botname="+botname+"&context="+contextobj+"&message="+message;

var headers = "{\"Accept\": \"application/json\",\"apikey\": \""+apikey+"\",\"Content-Type\":\"application/x-www-form-urlencoded\"}";

context.simplehttp.makePost(url,body,JSON.parse(headers));

}