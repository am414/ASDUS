var Lang=function(){"use strict";var t=function(){this._fireEvents=!0,this._dynamic={}};return t.prototype.init=function(t){var e,a,n,i,o=this;t=t||{},t.cookie=t.cookie||{},a=t.defaultLang,n=t.currentLang,i=t.allowCookieOverride,this.cookieName=t.cookie.name||"langCookie",this.cookieExpiry=t.cookie.expiry||365,this.cookiePath=t.cookie.path||"/",this._mutationCopies={append:$.fn.append,appendTo:$.fn.appendTo,prepend:$.fn.prepend,before:$.fn.before,after:$.fn.after,html:$.fn.html},$.fn.append=function(){return o._mutation(this,"append",arguments)},$.fn.appendTo=function(){return o._mutation(this,"appendTo",arguments)},$.fn.prepend=function(){return o._mutation(this,"prepend",arguments)},$.fn.before=function(){return o._mutation(this,"before",arguments)},$.fn.after=function(){return o._mutation(this,"after",arguments)},$.fn.html=function(){return o._mutation(this,"html",arguments)},this.defaultLang=a||"en",this.currentLang=a||"en",!i&&n||"undefined"==typeof Cookies||(e=Cookies.get(this.cookieName),e&&(n=e.lang)),$(function(){o._start(),n&&n!==o.defaultLang&&o.change(n)})},t.prototype.pack={},t.prototype.attrList=["title","alt","placeholder","href"],t.prototype.dynamic=function(t,e){void 0!==t&&void 0!==e&&(this._dynamic[t]=e)},t.prototype.loadPack=function(t,e){var a=this;if(!t||!a._dynamic[t])throw"Cannot load language pack, no file path specified!";$.ajax({dataType:"json",url:a._dynamic[t],success:function(n){if(a.pack[t]=n,a.pack[t].regex){var i,o,r=a.pack[t].regex;for(o=0;o<r.length;o++)i=r[o],2===i.length?i[0]=new RegExp(i[0]):3===i.length&&(i[0]=new RegExp(i[0],i[1]),i.splice(1,1))}e&&e(!1,t,a._dynamic[t])},error:function(){throw e&&e(!0,t,a._dynamic[t]),"Error loading language pack"+a._dynamic[t]}})},t.prototype._start=function(t){for(var e,a=void 0!==t?$(t).find("[lang]"):$(":not(html)[lang]"),n=a.length;n--;)e=$(a[n]),this._processElement(e)},t.prototype._processElement=function(t){t.attr("lang")===this.defaultLang&&(this._storeAttribs(t),this._storeContent(t))},t.prototype._storeAttribs=function(t){var e,a,n;for(e=0;e<this.attrList.length;e++)a=this.attrList[e],t.attr(a)&&(n=t.data("lang-attr")||{},n[a]=t.attr(a),t.data("lang-attr",n))},t.prototype._storeContent=function(t){if(t.is("input"))switch(t.attr("type")){case"button":case"submit":case"hidden":case"reset":t.data("lang-val",t.val())}else if(t.is("img"))t.data("lang-src",t.attr("src"));else{var e=this._getTextNodes(t);e&&t.data("lang-text",e)}},t.prototype._getTextNodes=function(t){var e=t.contents(),a=[],n={};Array.prototype.map;return $.each(e,function(t,e){3===e.nodeType&&(n={node:e,langDefaultText:e.data},a.push(n))}),1==e.length&&(a[0].langToken=t.data("langToken")),a},t.prototype._setTextNodes=function(t,e,a){var n,i,o,r,s=a!==this.defaultLang;for(n=0;n<e.length;n++)if(i=e[n],s){if(o=i.langToken||$.trim(i.langDefaultText))if(r=this.translate(o,a))try{i.node.data=i.node.data.split($.trim(i.node.data)).join(r)}catch(c){}else console&&console.log&&console.log('Translation for "'+o+'" not found!')}else try{i.node.data=i.langDefaultText}catch(c){}},t.prototype._translateAttribs=function(t,e){var a,n,i=t.data("lang-attr")||{};for(a in i)i.hasOwnProperty(a)&&t.attr(a)&&(e!==this.defaultLang?(n=this.translate(i[a],e),n&&t.attr(a,n)):t.attr(a,i[a]))},t.prototype._translateContent=function(t,e){var a,n,i=e!==this.defaultLang;if(t.is("input"))switch(t.attr("type")){case"button":case"submit":case"hidden":case"reset":i?(a=this.translate(t.data("lang-val"),e),a&&t.val(a)):t.val(t.data("lang-val"))}else t.is("img")?i?(a=this.translate(t.data("lang-src"),e),a&&t.attr("src",a)):t.attr("src",t.data("lang-src")):(n=t.data("lang-text"),n&&this._setTextNodes(t,n,e))},t.prototype.change=function(t,e,a){var n=this;if(t!==this.defaultLang&&!this.pack[t]&&!this._dynamic[t])throw a&&a("No language pack defined for: "+t,t,e),'Attempt to change language to "'+t+'" but no language pack for that language is loaded!';if(t!==this.defaultLang){if(!this.pack[t]&&this._dynamic[t])return void this.loadPack(t,function(i,o,r){i?a&&a("Language pack could not load from: "+r,t,e):n.change.call(n,t,e,a)});if(!this.pack[t]&&!this._dynamic[t])throw a&&a("Language pack not defined for: "+t,t,e),"Could not change language to "+t+" because no language pack for this language exists!"}var i=!1,o=this.currentLang;this.currentLang!=t&&(this.beforeUpdate(o,t),i=!0),this.currentLang=t;for(var r,s=void 0!==e?$(e).find("[lang]"):$(":not(html)[lang]"),c=s.length;c--;)r=$(s[c]),r.attr("lang")!==t&&this._translateElement(r,t);i&&this.afterUpdate(o,t),"undefined"!=typeof Cookies&&Cookies.set(n.cookieName,{lang:t},{expires:n.cookieExpiry,path:n.cookiePath}),a&&a(!1,t,e)},t.prototype._translateElement=function(t,e){this._translateAttribs(t,e),"false"!=t.attr("data-lang-content")&&this._translateContent(t,e),t.attr("lang",e)},t.prototype.translate=function(t,e){if(e=e||this.currentLang,this.pack[e]){var a="";return e!=this.defaultLang?(a=this.pack[e][t],a||(a=this._regexMatch(t,e)),a||console&&console.log&&console.log('Translation for "'+t+'" not found in language pack: '+e),a||t):t}return t},t.prototype._regexMatch=function(t,e){var a,n,i,o,r,s;if(a=this.pack[e].regex)for(n=a.length,i=0;i<n;i++)if(o=a[i],r=o[0],s=r.exec(t),s&&s[0])return t.split(s[0]).join(o[1]);return""},t.prototype.beforeUpdate=function(t,e){this._fireEvents&&$(this).triggerHandler("beforeUpdate",[t,e,this.pack[t],this.pack[e]])},t.prototype.afterUpdate=function(t,e){this._fireEvents&&$(this).triggerHandler("afterUpdate",[t,e,this.pack[t],this.pack[e]])},t.prototype.refresh=function(){this._fireEvents=!1,this.change(this.currentLang),this._fireEvents=!0},t.prototype._mutation=function(t,e,a){var n=this._mutationCopies[e].apply(t,a),i=this.currentLang,o=$(t);return o.attr("lang")&&(this._fireEvents=!1,this._translateElement(o,this.defaultLang),this.change(this.defaultLang,o),this.currentLang=i,this._processElement(o),this._translateElement(o,this.currentLang)),this._start(o),this.change(this.currentLang,o),this._fireEvents=!0,n},t}();