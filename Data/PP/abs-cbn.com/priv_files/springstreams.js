function SpringStreams(c){this.version="1.5.0";var l="km-sea.net";var b=200;var i=2000;var K="default";var B=new Array();this.syncrate=20;this.pausesync=6;this.maxstates=50;var I;v(j());if(c){K=c}t();function j(){var L={"2cnt.net":{syncrates:[3,7,10,10,10,10,10,60]}};return L}function v(M){var N;if(M){for(var L in M){if(L==l){N=M[L]}}if(N){x(N.syncrates)}}}function x(L){if(L){I=L}}function C(){return I}this.getSyncRates=C;function p(O,M,L){if(!O){return}var N=new s(this,O,M,L);B.push(N);return N}this.track=p;function t(){setInterval(g,b);setInterval(n,i)}function a(){for(var L=0;L<B.length;++L){try{B[L].stop()}catch(M){y(M)}}}this.unload=a;function g(N){for(var L=0;L<B.length;++L){try{B[L].update(N)}catch(M){y(M)}}}this.doUpdate=g;function n(N){for(var L=0;L<B.length;++L){try{B[L].sync(N)}catch(M){y(M)}}}this.doSync=n;function y(L){z("",L)}this.error=y;function q(M,L){return r([[M,L]])}function A(L){if(L&&L.site!=undefined){return L.site}return K}function u(L){}this.debug=u;function h(){if("https"==document.location.href.slice(0,5)){return"https://ssl-"}return"http://"}function E(){if(!this.nlso){try{var L=localStorage.getItem("i00");if(L){return"&c="+L}else{var M="0000",O=M+Math.ceil((new Date()).getTime()/1000).toString(16)+(32768|Math.random()*65535).toString(16)+M;localStorage.setItem("i00",O)}}catch(N){}}return""}function z(N,M){var L=h()+A(M)+"."+l+"/j0="+q(N,M)+"?lt="+(new Date()).getTime().toString(36)+E();(new Image()).src=L;this.debug(L)}this.send=z;function r(P){var N;var Q;var O;var M;var R=/[+&,;=~]/g;var S;var L;switch(typeof P){case"string":return R.test(P)?escape(P).replace(R,function(T){var U=L[T];if(U){return U}return T}):escape(P);case"number":return isFinite(P)?P.toString():"null";case"boolean":case"null":return P.toString();case"object":if(!P){return"null"}N=[];if(typeof P.length=="number"&&!(P.propertyIsEnumerable("length"))){M=P.length;for(Q=0;Q<M;Q+=1){N.push(r(P[Q])||"null")}return","+N.join("+")+";"}for(O in P){if(typeof O=="string"){if(O!="site"){S=r(P[O]);if(S){N.push(r(O)+"="+S)}}}}return","+N.join("+")+";"}return""}function s(ah,ae,ai,ad){var ab=Math.round((Math.random()*10000000000)).toString(36);var Q=Math.round(new Date().getTime()/1000);var X;var aj;var Z;var V;var R=[0,0,Q.toString(36)];var S=0;var ak=0;var T=true;var N=false;var aa;var P;var M;var L;X=ah;aj=ae;if(ad){aa=ad}else{aa=X.HTML5Adapter}V=ac(ai);Z=new Array();Z.push(R);L=0;P=ah.syncrate;M=ah.getSyncRates();Y();function ac(an){var al=new Object();for(var am in an){al[am]=an[am]}return al}function ag(al){if(Z.length<X.maxstates){Z.push(al)}}function O(al){R=[al,al,Math.round(new Date().getTime()/1000).toString(36)];ag(R);T=true;S=0}function Y(){if(M!=null){if(L<M.length){P=M[L++];X.debug("switch syncrate to "+P)}}}function U(ao){if(N){return}var al=R[1];var am=al;try{am=Math.round(aa.getPosition(aj))}catch(ap){}try{if(al==am){if(S>=0){S++;if(S==X.pausesync){T=true}}return}if(S>=X.pausesync){O(am)}else{if(al<am-1){O(am)}else{if(al>am){O(am)}else{R[1]=am;if(R[1]-R[0]>=P){if(am-ak>=P){T=true;Y()}}S=0}}}}catch(an){y=true;X.error(an)}}this.update=U;function af(){if(N){return}T=true;N=true;W(null)}this.stop=af;function W(an){if(T){try{if(aj.width){V.sx=aj.width}if(aj.videoWidth){V.sx=aj.videoWidth}if(aj.height){V.sy=aj.height}if(aj.videoHeight){V.sy=aj.videoHeight}}catch(am){}V.uid=ab;V.pst=Z;var al;try{if(!V.dur||V.dur==0){V.dur=aa.getDuration(aj)}}catch(am){}try{al=aa.getMeta(aj)}catch(am){}V.vt=(Math.round(new Date().getTime()/1000))-Q;X.send(al,V);ak=R[1]}T=false}this.sync=W}this.HTML5Adapter={getMeta:w,getPosition:m,getDuration:k};this.DefaultAdapter={getMeta:f,getPosition:G,getDuration:H};this.WMStreamAdapter={getMeta:o,getPosition:e,getDuration:d};this.RVStreamAdapter={getMeta:J,getPosition:F,getDuration:D};function w(L){return{pl:"HTML 5 Video",pv:"HTML 5",sx:screen.width,sy:screen.height}}function k(L){return Math.round(L.duration)}function m(L){return L.currentTime}function f(L){return{pl:"DEF",pv:version,sx:screen.width,sy:screen.height}}function G(L){return new Date().getTime()/1000}function H(L){return 0}function o(L){return{pl:"MSWM",plv:L.versionInfo,sx:screen.width,sy:screen.height}}function e(L){if(L.CurrentPosition){return L.CurrentPosition}if(L.currentPosition){return L.currentPosition}if(L.controls){if(L.controls.currentPosition){return L.controls.currentPosition}}if(L.Controls){if(L.Controls.currentPosition){return L.Controls.currentPosition}}return 0}function d(L){if(L.currentMedia){if(L.currentMedia.Duration){return L.currentMedia.Duration}if(L.currentMedia.duration){return L.currentMedia.duration}}else{if(L.CurrentMedia){if(L.CurrentMedia.duration){return L.CurrentMedia.duration}if(L.CurrentMedia.Duration){return L.CurrentMedia.Duration}}}}function J(L){return{pl:"RV",plv:L.GetVersionInfo(),sx:screen.width,sy:screen.height}}function F(L){return(L.GetPosition()/1000)}function D(L){return(L.GetLength()/1000)}};