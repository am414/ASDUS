richSnippet=function(opts){function isEmpty(variable){return!(typeof variable!='undefined'&&variable.length>0);}
var request=new XMLHttpRequest();var api="https://api-cache.reviews.co.uk";if(opts.site){if(opts.site=='io'){api="https://api.reviews.io";}}else if(document.currentScript&&(src=document.currentScript.src)){if(src.indexOf('.co.uk')==-1){api="https://api.reviews.io";}}
request.onreadystatechange=function(){if(this.readyState===4){if(this.status>=200&&this.status<400){var data=this.responseText;var scriptTag=document.createElement("script");scriptTag.setAttribute("type","application/ld+json");scriptTag.appendChild(document.createTextNode(data));document.getElementsByTagName("head")[0].appendChild(scriptTag);}}};if(isEmpty(opts.sku)&&isEmpty(opts.mpn)&&((typeof opts.internal!='undefined'&&parseInt(opts.internal)==1)||opts.store=='mr-clutch-autocentres-ltd')){request.open('GET',api+'/json-ld/merchant/richsnippet?store='+ opts.store,true);request.send();}
else if(isEmpty(opts.sku)&&!isEmpty(opts.asProduct)){request.open('GET',api+'/json-ld/merchant/richsnippet?store='+ opts.store+'&asProduct='+ encodeURIComponent(opts.asProduct),true);request.send();}
else if(!isEmpty(opts.sku)||!isEmpty(opts.mpn))
{request.open('GET',api+'/json-ld/product/richsnippet?store='+ opts.store+'&sku='+(opts.sku?encodeURIComponent(opts.sku):'')+'&mpn='+(opts.mpn?encodeURIComponent(opts.mpn):''),true);request.send();}
request=null;};if(typeof richSnippetCallback=='function'){richSnippetCallback();}