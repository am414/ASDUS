StatsClient={LogVisit:function(pageNodeId,randomId){var that=this;
var logVisit=function(pageNodeId,randomId){var trackingCookieName="sf-trckngckie";
var trackingId=that.readCookie(trackingCookieName);
if(!trackingId){trackingId=randomId;
that.createCookie(trackingCookieName,trackingId,180);
}var xmlHttp=null;
xmlHttp=new XMLHttpRequest();
xmlHttp.open("GET",that.getServiceUrl()+"?pageNodeId="+pageNodeId+"&trackingId="+trackingId+"&referrer="+document.referrer+"&pageUrl="+window.location.href,false);
xmlHttp.send(null);
};
if(window.personalizationManager){window.personalizationManager.addPersonalizedContentLoaded(function(){logVisit(pageNodeId,randomId);
});
}else{logVisit(pageNodeId,randomId);
}},getServiceUrl:function(){var protocol=window.location.protocol;
var port=window.location.port;
var hostName=window.location.hostname;
var sf_appPath=window.sf_appPath;
if(sf_appPath){return protocol+"//"+hostName+":"+port+sf_appPath+"Sitefinity/Public/Services/Statistics/Log.svc/";
}window.sf_appPath="/";
return protocol+"//"+hostName+":"+port+window.sf_appPath+"Sitefinity/Public/Services/Statistics/Log.svc/";
},createCookie:function(name,value,days){if(days){var date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires="; expires="+date.toGMTString();
}else{var expires="";
}document.cookie=name+"="+value+expires+"; path=/";
},readCookie:function(name){var nameEQ=name+"=";
var ca=document.cookie.split(";");
for(var i=0;
i<ca.length;
i++){var c=ca[i];
while(c.charAt(0)==" "){c=c.substring(1,c.length);
}if(c.indexOf(nameEQ)==0){return c.substring(nameEQ.length,c.length);
}}return null;
}};