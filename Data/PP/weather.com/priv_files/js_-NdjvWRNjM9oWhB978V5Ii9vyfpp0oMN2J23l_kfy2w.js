/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);;
/**
 * Author: ksankaran (Velu)
 * Date: 11/11/13
 * Time: 4:19 PM
 * Comments: The core methods and libraries used by PCO. It is advised that, we keep this file in watch and split
 * if the file grows beyond control.
 */

// Create the window TWC if not there.
window.TWC = window.TWC || {};
// Create tag_data namespace
window.tag_data = window.tag_data || {};

/**
 * Contains Events, LocalStorage and PcoUtils library methods.
 */
jQuery.extend(TWC, {

  callbacks: {},

  JSONPCounter: 0,

  Events: {
    setEvent: function (evt) {
      TWC.Events.createEvent(evt);
    },
    /**
     * return the event 'evt' if one already exists otherwise return a new Deferred object
     *
     * @param evt
     * @returns Deferred object
     */
    createEvent: function (evt) {
      return TWC.Events[evt] = TWC.Events[evt] || jQuery.Deferred();
    },

    /**
     * Helper function to listen to one or more dependency events
     * @param eArray
     * @returns customEvent
     */
    ifReady: function (eArray) {
      var deferredArray = jQuery.map(eArray, jQuery.proxy(function (e, i) {
        return this.getEvent(e);
      }, this));
      return jQuery.when.apply(this, deferredArray);
    },

    /**
     * get the event. Create one and return if not available.
     *
     * @param eventname
     * @returns {Object} - jQuery Deferred Object.
     */
    getEvent: function (eventname) {
      if (!TWC.Events[eventname]) {
        TWC.Events.createEvent(eventname);
      }
      return TWC.Events[eventname];
    },

    defer: function(eventname) {
        if( !TWC.Events[eventname] ) {
            var resolve = null;
            var reject = null;
            var promise = new Promise(function(_resolve, _reject) {
                resolve = _resolve;
                reject = _reject;
            });
            TWC.Events[eventname] = {
                resolve: resolve,
                reject: reject,
                promise: promise
            };
        }
        return TWC.Events[eventname]
    },

    ifDeferReady: function(eArray) {
      var promiseArray = eArray.map(function(eventname) {
        return TWC.Events.defer(eventname).promise;
      });
      return Promise.all(promiseArray);
    },

    exists: function (event) {
      return TWC.Events[event] ? true : false;
    },
    /**
     * For testing purpose
     * @param name
     */
    removeEvent: function (name) {
      for (var i in TWC.Events) {
        if (i === name) {
          delete TWC.Events[i];
          break;
        }
      }
    },
    /**
     * For testing purpose
     * @param name
     * @returns {*}
     */
    fetchEvent: function (name) {
      return TWC.Events[name];
    },

    /**
     * tility method to create immediate resolving deferred event.
     *
     * @returns {promise}
     */
    getDummyDeferredEvent: function () {
      return jQuery.Deferred(function (defer) {
        defer.resolve();
      }).promise();
    }
  },

  // Local storage utility
  LocalStorage: {
    /**
     * persist with key and value with a ttl.
     *
     * @param key
     * @param val
     * @param ttl
     */
    persistValue: function (key, val, ttl) {
      var deferred = jQuery.Deferred();

      ttl = ttl || 0;
      if (!key) {
        deferred.reject();
        return deferred.promise();
      }

      jQuery.jStorage.listenKeyChange(key, function (key, action) {
        jQuery.jStorage.stopListening(key, this);
        deferred.resolve();
      });

      jQuery.jStorage.set(key, val);
      if (ttl > 0) {
        jQuery.jStorage.setTTL(key, ttl);
      }

      return deferred.promise();
    },

    /**
     * get the value using persisted key
     *
     * @param key
     * @returns {*}
     */
    getPersistedValue: function (key) {
      return jQuery.jStorage.get(key);
    },

    /**
     * remove a persisted value.
     *
     * @param key
     * @returns {*}
     */
    removePersistedValue: function (key) {
      return jQuery.jStorage.deleteKey(key);
    },

    /**
     * check if a key is persisted already.
     *
     * @param key
     * @returns {boolean}
     */
    isPersistedKey: function (key) {
      if (typeof getPersistedValue(key) === "undefined" || getPersistedValue(key) == null) {
        return false;
      }
      return true;
    }
  },

  PcoUtils: {

    getter: function (obj, path) {
      // @todo Evaluate whether to refactor using lodash's _.get
      var _path = path.split('.');
      if (_path.length > 0) {
        for (var i = 0; i < _path.length; i++) {
          if (i > 0) {
            _path[i] = _path[i - 1] + '.' + _path[i];
          } else {
            _path[i] = 'obj.' + _path[i];
          }
        }
      }
      var getter = new Function('obj', 'if (' + _path.join(' && ') + '){return obj.' + path + ';}return undefined;');
      return getter(obj);
    },

    updater: function (obj, path, value) {
      // @todo Evaluate whether to refactor using lodash's _.set
      var _path = path.split('.'),
        fn = [],
        l = _path.length;
      if (l > 0) {
        _.each(_path, function (value, index) {
          switch (index) {
            case 0:
              _path[index] = 'obj.' + value;
              fn[index] = 'if(typeof obj.' + value + ' === "undefined") {' + 'obj.' + value + ' = {};}';
              break;
            case (l - 1):
              _path[index] = _path[index - 1] + '.' + value;
              fn[index] = _path[index - 1] + '.' + value + ' = newval;';
              break;
            default:
              fn[index] = 'if(typeof ' + _path[index - 1] + '.' + value + ' === "undefined") {' + _path[index - 1] + '.' + value + ' = {};}';
              _path[index] = _path[index - 1] + '.' + value;
              break;
          }
        });
      }
      var _updater = new Function('obj', 'newval', fn.join(''));
      _updater(obj, value);
      return obj;
    },

    //Returns true if it is a DOM node
    isNode: function isNode(o) {
      return (
        typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
      );
    },

//Returns true if it is a DOM element
    isElement: function isElement(o) {
      return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
      );
    },

    schema: {
      addItemType: function addItemType(elem, val) {
        if (TWC.PcoUtils.isElement(elem)) {
          elem.setAttribute('itemscope', '');
          elem.setAttribute('itemtype', val);
        }
        return elem;
      },

      removeItemType: function removeItemType(elem) {
        if (TWC.PcoUtils.isElement(elem) || TWC.PcoUtils.isNode(elem)) {
          elem.removeAttribute('itemscope');
          elem.removeAttribute('itemtype');
        }
        return elem;
      },

      inject: (function inject() {
        jQuery(document).ready(function (jQ) {
          'use strict';

          var s = TWC.PcoUtils.schema;
          s.addItemType(document.querySelector('html'), 'http://schema.org/WebSite');
          //s.removeItemType(document.querySelector('html'));
          s.addItemType(document.querySelector('head'), 'http://schema.org/WebSite');

          // @todo Change to http://schema.org/CollectionPage, http://schema.org/ItemPage, http://schema.org/AboutPage, http://schema.org/ContactPage, http://schema.org/ProfilePage, http://schema.org/QAPage, http://schema.org/SearchResultsPage
          s.addItemType(document.querySelector('body'), 'http://schema.org/WebPage');

          s.addItemType(document.querySelector('header.header'), 'http://schema.org/SiteNavigationElement');

          var organizationSchema = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta, Georgia, USA",
              "postalCode": "30339",
              "streetAddress": "300 Interstate North Pkwy SE"
            },
            "name": "The Weather Channel"
          };
          var script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(organizationSchema);
          document.querySelector('head').appendChild(script);

        });
      })()
    },

    scrollThrottler: (function () {

      // Used for lazy loading ads on mobile
      var scrollEvent = jQuery.Deferred(),
        mobile = jQuery(window).width() < 768;

      // Load only on mobile
      if (mobile) {
        /** Inserting underscore's debounce and throttle
         *  functions currently loaded in angular twcUtil
         *  factory
         */
        function limit(func, wait, debounce) {
          var timeout;
          return function () {
            var context = this, args = arguments;
            var throttler = function () {
              timeout = null;
              func.apply(context, args);
            };
            if (debounce) {
              clearTimeout(timeout);
            }
            if (debounce || !timeout) {
              timeout = setTimeout(throttler, wait);
            }
          };
        }

        function debounce(func, wait) {
          return limit(func, wait, false);
        }

        function throttle(func, wait) {
          return limit(func, wait, false);
        }

        jQuery(window).bind('scroll', debounce(function () {
          scrollEvent.notify();
        }, 50));

        return {
          onScroll: function (callback, context) {
            scrollEvent.progress(null, null, callback);
          }
        }
      }
    })(),

    /**
     * Capitalize the first letter of the string
     * - If cap1stEvery = true, capitalize first letter of every word in the string
     * - If cap1stEvery = false, only capitalize first letter of the string
     * - If allowOtherSeparators = true, check for hyphens, apostrophes, etc. as word separators
     * - If allowOtherSeparators = false, only use spaces as word boundaries
     * @param string
     * @param [cap1stEvery]
     * @param [allowOtherSeparators]
     * @returns {*}
     */
    capitalize: function (string, cap1stEvery, allowOtherSeparators) {
      var sub, str, i, padding, separators, oneSeparator, wordSeparatorsRegex;
      string = String(string);

      wordSeparatorsRegex = (allowOtherSeparators) ? new RegExp('[\\s-\',]', 'g') : new RegExp('[\\s]', 'g'); // add other chars to the first regex if needed

      if (cap1stEvery) {
        sub = string.split(wordSeparatorsRegex);

        // find the word-separator characters
        separators = [];
        while ((oneSeparator = wordSeparatorsRegex.exec(string)) !== null) {
          separators.push(oneSeparator[0]);
        }

        str = '';

        for (i = 0; i < sub.length; i++) {
          padding = (i < sub.length - 1) ? separators[i] : '';

          // logic to avoid capitalizing apostrophe-s, e.g. "St. John's, Leeds"
          if (sub[i] === 's' && i > 0 && separators[i - 1] === '\'') {
            str += 's' + padding;
          } else {
            str += sub[i].charAt(0).toUpperCase() + sub[i].slice(1).toLowerCase() + padding;
          }
        }
        return str;
      } else {
        return string && (string.charAt(0).toUpperCase() + string.slice(1));
      }
    },

    /**
     * Helper method to replace variable tokens in a html template
     * @param template
     * @param obj
     * @return
     */
    tokenReplace: function (template, obj) {
      return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (match, key) {
        return obj[key];
      });
    },

    /**
     * Get a URL param value using param name.  Use of decodeURIComponent is preferred for query parameters
     * And also account for blank spaces
     * @param name
     * @param [search]
     * @returns {string}
     */
    getURLParameter: function (name, search) {
      var match = new RegExp('[?&]' + name + '=([^&]*)').exec(search ? search : window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    },

    /**
     *  RFC4122 version 4 compliant solution that solves that issue by offsetting the first 13 hex numbers by a hex
     *  portion of the timestamp. That way, even if Math.random is on the same seed, both clients would have to generate
     *  the UUID at the exact same millisecond (or 10,000+ years later) to get the same UUID
     *
     *
     * @returns {uuid}
     */
    generateUUID: function () {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    },

    getUserPreferedUnits : function() {
        var dsxLocale = TWC && TWC.Configs && TWC.Configs.dsx && TWC.Configs.dsx.locale,
            titanLocale = TWC && TWC.Titan && TWC.Titan.locale,
            locale = titanLocale || dsxLocale,
            isInternationalLocale = locale !== 'en_US',
            user = jQuery.jStorage && jQuery.jStorage.get("user") || {user: {}},
            pcoUnits = user.unit,
            userSpecifiedUnits = user.userSpecifiedUnits;


        if (userSpecifiedUnits && pcoUnits) {
          return pcoUnits;
        }
        // WEB-2307 Force all international to m regardless
        //units = isInternationalLocale && !pcoUnits ? 'm' : (pcoUnits || 'e');
        if(locale === 'es_US') {
            var countryCode = window.esidata ? window.esidata.country : null;
            if (countryCode && countryCode.length === 2 && countryCode.match(/US/)) {
                isInternationalLocale = false;
            }
        }
        var units = isInternationalLocale ? 'm' : 'e';
        var qsTempUnit = TWC.PcoUtils.getURLParameter('temp');

        if (userSpecifiedUnits) {
            units = pcoUnits;
        }

        if (qsTempUnit) {
            units = (qsTempUnit.toLowerCase() === 'f' ? 'e' : 'm');
            TWC && TWC.pco && TWC.pco.setNodeValue && TWC.pco.setNodeValue('user','userSpecifiedUnits', true);
            if (window.history && window.history.replaceState){
                window.history.replaceState({},document.title, TWC.PcoUtils.removeURLParameter(window.location.href, "temp"));
            }

        }
        return units;
    },

    /**
     * This removes the given parameter in the query string of the given url
     * @param url
     * @param paramName
     */
    removeURLParameter: function (url, paramName) {
      var index = url.indexOf(paramName + "=");
      if (index === -1) {
        return url;
      }
      var preparamSection = url.substring(0, index);
      var postParamSectionIndex = url.substring(index).indexOf("&");
      var postParamSection = postParamSectionIndex === -1 ? "" : url.substring(index + postParamSectionIndex + 1);

      //If the post param section is empty, remove trailing ? or & from return string
      if (!postParamSection) {
        preparamSection = preparamSection.replace(/[\&\?]$/, "");
      }
      return preparamSection + postParamSection;
    },

    /**
     * Get the pathInfo from a URL (i.e. the information after the last slash
     * @returns {string}
     */
    getPathInfo: function () {
      return window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
    },

    /**
     * Get locId off of url.  Locid is last position of url
     *
     * @returns {string}
     */
    getURLlocid: function () {
      if (window.explicit_location) {
        return window.explicit_location;
      }
      var urlpath = location.pathname;
      if (!!urlpath) {
        var urlArray = decodeURIComponent(urlpath).match("(.*)\/([^?#&]+)"),
          locId = ((urlArray && urlArray.length === 3) ? urlArray[2] : null);
        if (locId && !locId.match(/:/) && locId.indexOf(",") === -1) {
          if (!isNaN(locId)) {
            locId += ":4:US";
          }
        }
        return locId;
      }
      return null;
    },

// Create types
// @todo Maybe move to a types specific file

    /**
     * A node in the DOM tree.
     *
     * @external Node
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node Node}
     */

    /**
     * jQuery object
     * @external jQuery
     * @see {@link http://api.jquery.com/jQuery/}
     */

    /**
     * Determines whether a DOM element or jQuery element is in the viewport relative to the offset.
     *
     * @param {external:Node|external:jQuery} el DOM Element or jQuery Element in question.
     * @param {number} [offset=0] Vertical offset.
     * @returns {boolean} Whether the element is in the current viewport.
     */
    isInViewPort: function (el, offset, bottomCheck) {
      var $ = window.jQuery,
        scrollOffset = $(window).scrollTop(), // Get the vertical position of the window in respect to the document.
        windowHeight = $(window).height() || $(window).prop('innerHeight'), // Viewport height
        $el = (el instanceof jQuery) ? el : $(el), // jQuerify element
        elOffset = $el.data('offset'), // Cached element's offset
        elHeight = $el.data('offset-height'), // Cached element's height
        lastUpdated = $el.data('offset-updated'), // Time element's offset was set
        time = (new Date()).getTime(); // Time check

      // Offset is optional
      offset = offset || 0;

      // Bounce (750ms) the number of offset() requests as offsetTop will trigger reflow. 
      if (!elOffset || !elHeight || !lastUpdated || (time - lastUpdated) > 750) {
        elOffset = $el.offset();
        elHeight = $el.height();
        lastUpdated = time;

        // Set element's offset data
        $el.data('offset', elOffset);
        $el.data('offset-height', elHeight);
        $el.data('offset-updated', lastUpdated);
      }

      if (!bottomCheck) {
        return (scrollOffset + windowHeight + offset) >= elOffset.top;
      }

      return (
        // Determine whether the element's top offset is in view relative to the offset
        ( (scrollOffset + windowHeight + offset) >= elOffset.top) &&
          // Determine whether the element's bottom has not moved out of view relative to offset's opposite
        ( scrollOffset + -(offset) <= (elOffset.top + elHeight) )
      );
    },


    /**
     * Generate a random number in string format.
     *
     * @param inlen
     * @param inchars
     * @returns {string}
     */
    genRandStr: function (inlen, inchars) {
      var chars = inchars ? inchars : "0123456789";
      var len = inlen ? inlen : 16;
      var ret = "";
      for (var i = 0; i < len; i++) {
        ret += chars.charAt(Math.floor(Math.random() * chars.length) % chars.length);
      }
      return ret;
    },

    /**
     * Restrict extend functionality on a object.
     *
     * @param object
     */
    restrictExtend: function (object) {
      if ('preventExtensions' in Object) {
        Object.preventExtensions(object);
      }
    },

    get_dsx_records: function (record, static_cb) {
      // figure out the number at the end.
      if (static_cb) {
        var counter = 0;
        jQuery.each(TWC.callbacks, function (key, value) {
          if (key.indexOf(static_cb) === 0) {
            counter++;
          }
        });
        static_cb = static_cb + "_" + counter;
      }
      // adding code to add timestamp in dsx call
      if (navigator.userAgent.indexOf("Firefox") > -1) {
        var ts = new Date().getTime();
        var dsxUrl = TWC.Configs.dsx.host + (jQuery.isArray(record) ? ("(" + record.join(";") + ")") : record) + "?_=" + ts + "&jsonp=?",
          _self = this,
          _initial = new Date(),
          callbackKey = static_cb ? static_cb : ("_" + (TWC.JSONPCounter++)),
          customPromise = jQuery.Deferred();
      } else {
        var dsxUrl = TWC.Configs.dsx.host + (jQuery.isArray(record) ? ("(" + record.join(";") + ")") : record) + "?jsonp=?",
          _self = this,
          _initial = new Date(),
          callbackKey = static_cb ? static_cb : ("_" + (TWC.JSONPCounter++)),
          customPromise = jQuery.Deferred();
      }

      //adding it for stale data...please remove it later
      this.performanceNode = this.performanceNode || window.twcperf || {
          log_dsx_call: function () {
          }
        };

      TWC.callbacks[callbackKey] = function (data) {
        if (static_cb) {
          //TWC.PcoUtils.setTiming('callbackCalledAt', (new Date()).getTime());
        }
        customPromise.resolve(data);
      };
      var ajaxOpts = {
        url: dsxUrl,
        dataType: 'jsonp',
        contentType: 'application/json',
        data: {api: TWC.Configs.dsx.apiKey},
        cache: true,
        timeout: 10000,
        jsonpCallback: 'TWC.callbacks.' + callbackKey
      };

      var promise = jQuery.ajax(ajaxOpts);
      promise["always"](function () {
        var timeTaken = ((new Date()).getTime() - _initial.getTime()) / 1000;
        _self.performanceNode.log_dsx_call("/" + record, false, timeTaken);
        if (customPromise.state() !== "resolved") {
          customPromise.reject();
        }
      });

      var returnPromise = customPromise.promise();
      returnPromise["success"] = function (callback) {
        returnPromise["then"](callback);
      };
      returnPromise["error"] = function (callback) {
        returnPromise["fail"](callback);
      };

      return returnPromise;
    },

    debugMode: function (mode) {
      var expires = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
      angular.element.cookie('debug', mode, {
        path: '/',
        domain: '.weather.com',
        expires: expires
      });
    },

    setTiming: function (key, value, startTime) {
      if (window.windowRenderStartTime) {
        window.tag_data["adtiming." + key] = value - (startTime || window.windowRenderStartTime || 0);
        if(window.bar) {
          if(window.__uBar){
            var ubar;
            for(var i in window.__uBar){
              ubar = window.__uBar[i];
              bar.timer(i, ubar.value, ubar.startTime, ubar.endTime);
            }
            delete window.__uBar;
          }
          bar.timer('ad.'+ key, key, startTime || window.windowRenderStartTime).end();
        }else{
          window.__uBar = window.__uBar || {};
          window.__uBar['ad.'+key] = {
            endTime: new Date().getTime(),
            value: key,
            startTime: (startTime || window.windowRenderStartTime || 0)
          };
        }
      }
    },

    /**
     * Use date time string and timezone offset to convert into ISO String
     * @param dateTime
     * @param diff
     * @returns {string}
     */
    toISOTimeFormat: function (dateTime, diff) {
      var sign = '+';
      var minutes = "00";
      if (diff < 0) {
        sign = "-";
        diff = diff * -1;
      }
      var addZero = diff > 9 ? "" : "0";
      if (diff % 1 !== 0) {
        diff = parseInt(diff);
        minutes = "30";
      }

      return dateTime.replace(" ", "T") + sign + addZero + diff + ":" + minutes;
    },

    /**
     * Convert ISO string to date.
     */
    fromISOToDate: (function () {
      var testIso = '2011-11-24T09:00:27+0200';
      // Chrome
      var diso = Date.parse(testIso);
      if (diso === 1322118027000) {
        return function (s) {
          return new Date(Date.parse(s));
        };
      }
      // JS 1.8 gecko
      var noOffset = function (s) {
        var day = jQuery.map(s.slice(0, -5).split(/\D/), (function (itm) {
          return parseInt(itm, 10) || 0;
        }));
        day[1] -= 1;
        day = new Date(Date.UTC.apply(Date, day));
        var offsetString = s.slice(-5);
        var offset = parseInt(offsetString, 10) / 100;
        if (offsetString.slice(0, 1) === "+") {
          offset *= -1;
        }
        day.setHours(day.getHours() + offset);
        return day;
      };
      if (noOffset(testIso) === 1322118027000) {
        return noOffset;
      }
      return function (s) { // kennebec@SO + QTax@SO
        var day, tz,
//        rx = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d{4}))?$/,
          rx = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/,

          p = rx.exec(s) || [];
        if (p[1]) {
          day = jQuery.map(p[1].split(/\D/), function (itm) {
            return parseInt(itm, 10) || 0;
          });
          day[1] -= 1;
          day = new Date(Date.UTC.apply(Date, day));
          if (!day.getDate()) {
            return NaN;
          }
          if (p[5]) {
            tz = parseInt(p[5], 10) / 100 * 60;
            if (p[6]) {
              tz += parseInt(p[6], 10);
            }
            if (p[4] === "+") {
              tz *= -1;
            }
            if (tz) {
              day.setUTCMinutes(day.getUTCMinutes() + tz);
            }
          }
          return day;
        }
        return NaN;
      };
    })(),

    /**
     * Get Timezone offset by scrapping it from the ISO string
     * @param ISOStr
     * @returns {number}
     */
    getTzOffset: function (ISOStr) {
      var sign = ISOStr.substr(ISOStr.length - 6, 1);
      var tz = parseInt(ISOStr.substr(ISOStr.length - 5, 2));
      var minutes = parseInt(ISOStr.substr(ISOStr.length - 2, 2)) === 0 ? 0 : 0.5;
      return (tz + minutes) * (sign === "-" ? -1 : 1);
    },

    /**
     * Get the Current Date time ISO String from DSX for the current location
     * @returns {*}
     */
    getDateTimeISO: function () {
      var currentTimeISO;
      var locId = this.getURLlocid();
      if (!locId.match(/:/) && locId.indexOf(",") === -1) {
        locId += ":4:US";
      }
      var promise = jQuery.Deferred();

      var dateTimePromise = TWC.PcoUtils.get_dsx_records("cs/v2/datetime/en_US/" + locId);
      dateTimePromise.success(function (data) {
        currentTimeISO = data && data.body && data.body.datetime ? data.body.datetime : new Date().toISOString();
        return promise.resolve(currentTimeISO);
      });
      dateTimePromise.error(function () {
        currentTimeISO = new Date().toISOString();
        return promise.resolve(currentTimeISO);
      });

      return promise;
    },

    Utf8ArrayToStr: function (array) {
      var out, i, len, c;
      var char2, char3;

      out = "";
      len = array.length;
      i = 0;
      while (i < len) {
        c = array[i++];
        switch (c >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
          case 12:
          case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
          case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
              ((char2 & 0x3F) << 6) |
              ((char3 & 0x3F) << 0));
            break;
        }
      }

      return out;
    },

    getDecodedSaml: function (encodeddata) {

      if (typeof pako === "undefined" || !pako || !encodeddata) {
        return;
      }

      var y = decodeURIComponent(encodeddata);

      var z = atob(y);

      var result = pako.inflateRaw(z);

      var resultStr = this.Utf8ArrayToStr(result);

      return resultStr;
    }
  }
})
;

/**
 * Core Inheritance logic in JS.
 *
 * Inheritance logic extended from Backbone.js 1.1.0.
 * (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.
 * (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *
 * @param protoProps
 * @returns {Function}
 */
Function.prototype.createSubClass = function (protoProps) {
  var parent = this;
  var child = function () {
    return parent.apply(this, arguments);
  };

  // Add static properties to the constructor function, if supplied.
  jQuery.extend(child, parent);

  // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.
  var Surrogate = function () {
    this.constructor = child;
  };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (protoProps) {
    jQuery.extend(child.prototype, protoProps);
  }

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype;

  return child;
};

/**
 * Get key by value
 * @param obj
 * @param val
 */
Function.prototype.getKey = function (obj, val) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] === val
  })[0];
};

/**
 * throttle: Returns a function that will wait for the provided interval in
 * milliseconds between calls before executing the calling function.  This
 * will potentially make more calls than debounce
 * @param {integer} interval This param indicates the number of milliseconds
 *     to wait between calls before calling the original function.
 * @return {function} This returns a function that will wait for the
 *     indicated number of milliseconds between calls before
 *     calling the original function.
 */
Function.prototype.throttle = function (interval) {
  var callingFunction = this,
    lastTimestamp = null,
    limit = interval;

  return function () {
    var self = this,
      args = arguments,
      now = Date.now();

    if (!lastTimestamp || now - lastTimestamp >= limit) {
      lastTimestamp = now;
      callingFunction.apply(self, args);
    }
  };
};

/**
 * debounce:  Returns a function that will execute the calling function when the
 * elapsed time equals the provided wait time in milliseconds. Subsequent call to
 * this function within the given interval will eliminate the previous call.  Meaning
 * if your typing is fast and every key stroke is within the time interval, only the
 * last call gets executed.
 * @param {integer} interval This param indicates the number of milliseconds
 *     to wait before calling the original function.
 * @return {function} Returns a function to be called as indicated by the time interval.
 */
Function.prototype.debounce = function (interval) {
  var callingFunction = this,
    timer = null,
    wait = interval;

  return function () {
    var self = this,
      args = arguments;

    function complete() {
      callingFunction.apply(self, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(complete, wait);
  };
};

/**
 * Get key by value
 * @param obj
 * @param val
 */
Function.prototype.getKey = function (obj, val) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] === val
  })[0];
};

if (!Object.prototype._create) {
  Object.defineProperties(Object.prototype, {
    _create: {
      value: function (state) {
        var This = this.constructor;
        if (This.prototype !== this && this.hasOwnProperty('constructor')) {
          This.prototype = this;
        }
        return new This(state);
      },
      writable: true,
      configurable: true
    }
  });
}

(function () {
  // element-closest | CC0-1.0 | github.com/jonathantneal/closest

  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
})();

/**
 * Checks if element is currently visible in the viewport. You can pass in x(width), y(height) as float values to check how much of element is visible in x and y axis.
 * For example, passing $(element).inViewport(0.5, 0.5) would return true if the element had at least 50% of it’s height and width within the viewport rectangle.
 * Omitting an argument (or passing null) defaults to 1 (or 100%).
 * @param x
 * @param y
 * @returns {boolean}
 */
jQuery.fn.inViewport = function (x, y) {

  if (x == null || typeof x == 'undefined') {
    x = 1;
  }
  if (y == null || typeof y == 'undefined') {
    y = 1;
  }

  var win = jQuery(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var height = this.outerHeight();
  var width = this.outerWidth();

  if (!width || !height) {
    return false;
  }

  var bounds = this.offset();
  bounds.right = bounds.left + width;
  bounds.bottom = bounds.top + height;

  var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  if (!visible) {
    return false;
  }

  var deltas = {
    top: Math.min(1, ( bounds.bottom - viewport.top ) / height),
    bottom: Math.min(1, ( viewport.bottom - bounds.top ) / height),
    left: Math.min(1, ( bounds.right - viewport.left ) / width),
    right: Math.min(1, ( viewport.right - bounds.left ) / width)
  };

  //console.dir(deltas);

  return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

// Notify when this file is loaded, mainly for testing purpose for the moment
TWC.Events.getEvent("core-util-is-loaded").resolve();
;
if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

var getCopy = function(initObj) {
  var copiedObj = {};

  for (var prop in initObj) {
    if (initObj.hasOwnProperty(prop) && typeof initObj[prop] !== 'function') {
      copiedObj[prop] = initObj[prop];
    }
  }

  return copiedObj;
};

var setupTags = function (tag, data) {
  var run = function () {
    tag(data);
  };

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function() {
      run();
    });
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        run();
      }
    });
  }

  if (window.addEventListener) {
    window.addEventListener('load', function() {
      run();
    });
  } else {
    window.attachEvent('onload', function() {
      run();
    });
  }
};

var thirdPartyConfig = (function () {
  var baseGPT = {
    locale: {
      'de-DE': '3673,wx_online,m_mweb_wx',
      'en-US': '7646,web_weather_us,mobile_smart_us,tablet_weather_us',
      'en-GB': '7646,web_weather_en_gb,mobile_smart_en_gb,tablet_weather_en_gb',
      'en-IN': '7646,web_weather_en_in,mobile_smart_en_in,tablet_weather_en_in',
      'es-US': '7646,web_weather_es_us,mobile_smart_es_us,tablet_weather_es_us',
      'es-MX': '7646,web_weather_es_mx,mobile_smart_es_mx,tablet_weather_es_mx',
      'es-ES': '7646,web_weather_es_es,mobile_smart_es_es,tablet_weather_es_es',
      'es-AR': '7646,web_weather_es_ar,mobile_smart_es_ar,tablet_weather_es_ar',
      'it-IT': '7646,web_weather_it,mobile_smart_it,tablet_weather_it',
      'pt-BR': '7646,web_weather_br,mobile_smart_br,tablet_weather_br',
      'fr-FR': '7646,web_weather_fr,mobile_smart_fr,tablet_weather_fr',
      'zh-HK': '7646,web_weather_hk_cn,mobile_smart_hk_cn,tablet_weather_hk_cn',
      'zh-TW': '7646,web_weather_tw_cn,mobile_smart_tw_cn,tablet_weather_tw_cn',
      'ar-AE': '7646,web_weather_ae,mobile_smart_ae,tablet_weather_ae',
      'ca-ES': '7646,web_weather_es_ca,mobile_smart_es_ca,tablet_weather_es_ca',
      'cs-CZ': '7646,web_weather_cz,mobile_smart_cz,tablet_weather_cz',
      'da-DK': '7646,web_weather_dk,mobile_smart_dk,tablet_weather_dk',
      'el-GR': '7646,web_weather_gr,mobile_smart_gr,tablet_weather_gr',
      'fa-IR': '7646,web_weather_ir,mobile_smart_ir,tablet_weather_ir',
      'fi-FI': '7646,web_weather_fi,mobile_smart_fi,tablet_weather_fi',
      'iw-IL': '7646,web_weather_il,mobile_smart_il,tablet_weather_il',
      'hi-IN': '7646,web_weather_in_hi,mobile_smart_in_hi,tablet_weather_in_hi',
      'hr-HR': '7646,web_weather_hr,mobile_smart_hr,tablet_weather_hr',
      'hu-HU': '7646,web_weather_hu,mobile_smart_hu,tablet_weather_hu',
      'in-ID': '7646,web_weather_id,mobile_smart_id,tablet_weather_id',
      'ja-JP': '7646,web_weather_ja,mobile_smart_ja,tablet_weather_ja',
      'ko-KR': '7646,web_weather_kr,mobile_smart_kr,tablet_weather_kr',
      'ms-MY': '7646,web_weather_my,mobile_smart_my,tablet_weather_my',
      'nl-NL': '7646,web_weather_nl,mobile_smart_nl,tablet_weather_nl',
      'no-NO': '7646,web_weather_no,mobile_smart_no,tablet_weather_no',
      'pl-PL': '7646,web_weather_pl,mobile_smart_pl,tablet_weather_pl',
      'pt-PT': '7646,web_weather_pt,mobile_smart_pt,tablet_weather_pt',
      'ro-RO': '7646,web_weather_ro,mobile_smart_ro,tablet_weather_ro',
      'ru-RU': '7646,web_weather_ru,mobile_smart_ru,tablet_weather_ru',
      'sk-SK': '7646,web_weather_sk,mobile_smart_sk,tablet_weather_sk',
      'sv-SE': '7646,web_weather_se,mobile_smart_se,tablet_weather_se',
      'th-TH': '7646,web_weather_th,mobile_smart_th,tablet_weather_th',
      'tr-TR': '7646,web_weather_tr,mobile_smart_tr,tablet_weather_tr',
      'uk-UA': '7646,web_weather_ua,mobile_smart_ua,tablet_weather_ua',
      'vi-VN': '7646,web_weather_vn,mobile_smart_vn,tablet_weather_vn',
      'zh-CN': '7646,web_weather_zh_cn,mobile_smart_zh_cn,tablet_weather_zh_cn',
      'de-AT': '7646,web_weather_de_at,mobile_smart_de_at,tablet_weather_de_at'
    },
    zone: {
      'home': 'home',
      'local_forecasts/today': 'today',
      'local_forecasts/hourly': 'hourly',
      'local_forecasts/weekend': 'weekend',
      'local_forecasts/5_day': '5_day',
      'local_forecasts/10_day': '10_day',
      'local_forecasts/tomorrow': 'tomorrow',
      'local_forecasts/yesterday': 'yesterday',
      'local_forecasts/monthly': 'monthly'
    },
    ugcLookup: {
      '/ugc/adventure': 'photos,toyota,amzg',
      '/ugc/amhq-escape-win': 'vert,tv,amhq',
      '/ugc/driving-imagination': 'photos,toyota,outjny',
      '/ugc/family-kids/holidays': 'vert,fam,hldy',
      '/ugc/family-kids/pets': 'vert,fam,pets',
      '/ugc/home-and-garden/garden': 'vert,home_and_garden,home',
      '/ugc/living-world': 'photos,toyota,amzg',
      '/ugc/news/weather-hurricanes': 'vert,severe,news',
      '/ugc/news/weather-severe': 'vert,severe,news',
      '/ugc/outdoor-journey': 'photos,toyota,outjny',
      '/ugc/sports-rec/beach-marine': 'vert,Boat_and_Beach,boat_and_beach_marine',
      '/ugc/sports-rec/hunting-fishing': 'vert,sports_and_rec,out',
      '/ugc/sports-rec/outdoor-activities': 'vert,sports_and_rec,out',
      '/ugc/the-elements': 'photos,toyota,amzg',
      '/ugc/therapy-dog': 'photos,fam,pets',
      '/ugc/travel': 'vert,travel,biz',
      '/ugc/travel/driving-fall-foliage': 'vert,trvl,driving',
      '/ugc/tv/shows': 'vert,tv,tvshows',
      '/ugc/weather/clouds': 'vert,brella,clouds',
      '/ugc/weather/inthesky': 'vert,brella,inthesky',
      '/ugc/weather/seasons': 'vert,brella,seasons',
      '/ugc/weather/snow-and-ice': 'vert,brella,snowandice',
      '/ugc/weather/storms': 'vert,brella,snowandice',
      '/ugc/weather/sunrise-and-sunset': 'vert,brella,sunrise_sunset',
      '/ugc/road-trips': 'vert,toyota,outjny'
    },
    sponstory: {
      'Sponstory_Febreeze_SpringClean': 'febreeze,springclean',
      'Sponstory_Kingsford_Grilling': 'kingsford,grilling',
      'Sponstory_Quaker_RealMom': 'quaker,realmom',
      'Sponstory_ServePro_Preparedness': 'servepro,preparedness',
      'Sponstory_StateFarm_2015': 'statefarm,statefarm',
      'Sponstory_Thermacell_Camp': 'thermacell,camp',
      'Sponstory_Travelers_ThinkSafe': 'travelers,thinksafe',
      'Sponstory_TruGreen_BackyardHero': 'trugreen,backyardhero',
      'Sponstory_Volvo_OutOfBounds': 'volvo,outbounds',
      'Sponstory_AnheuserBusch _SummerTwist': 'anheuserbusch,summertwist',
      'Sponstory_MyWebGrocer_BestRoadTripEver': 'mywebgrocer,bestroadtripever',
      'Sponstory_Fiat_Epic 50': 'fiat,epic50',
      'Sponstory_HomeDepot_WeekendProject': 'homedepot,weekendproject',
      'Sponstory_MyWebGrocer_BestRoadTripEver': 'mywebgrocer,bestroadtripever',
      'Sponstory_GoldEagle_Sta-Bil': 'goldeagle,sta-bil',
      'Sponstory_Ace_MakingWinterMagic': 'ace,makingwintermagic',
      'Sponstory_Touchstone_PowerOfCommunity': 'touchstone,powerofcommunity',
      'Sponstory_GMCard_JourneyForAllSeasons': 'gmcard,journeyforallseasons',
      'Sponstory_Servepro_LostAndFound': 'servepro,lostandfound'
    },
    positions: {
      'DT_BrandingBar': 'dt_bb',
      'DT_CustomFrame': 'dt_cfr',
      'DT_Hidden': 'dt_hdn',
      'DT_Leader': 'dt_ldr',
      'DT_MedRect': 'dt_300',
      'INT_AdvertorialIB': 'INT_AdvertorialIB',
      'INT_BottomLeader': 'int_midldr',
      'INT_BottomText': 'int_btxt',
      'INT_ContextualAds': 'int_contextualads',
      'INT_HeaderSpon': 'int_hs',
      'INT_Hidden': 'int_hdn',
      'INT_Local428': 'int_lnv',
      'INT_MFWLogo': 'int_mfwlogo',
      'INT_Micro300_1': 'int_mid300',
      'INT_Micro300_2': 'int_ms300',
      'INT_Middle300': 'int_mid300',
      'INT_MidText': 'int_mtxt',
      'INT_PageCounter': 'int_pc',
      'INT_PaidSearch': 'int_pds',
      'INT_PanelFeature': 'int_pnl',
      'INT_PhotoBannerPlus': 'int_t3lb',
      'INT_POI1': 'int_poi',
      'INT_Spon300': 'int_spon300',
      'INT_Spotlight': 'int_sl',
      'INT_Tile1': 'int_t1',
      'INT_Tile2': 'int_t2',
      'INT_Tile3': 'int_t3',
      'INT_Top300Small': 'int_300sm',
      'INT_Top300Variable': 'int_300var',
      'INT_TopLeader': 'int_ldr',
      'INT_TopLeaderPlus': 'int_ldrplus',
      'INT_TopText': 'int_ttxt',
      'INT_Video': 'int_vid',
      'INT_WindowShade': 'int_ws',
      'INT_WxSpon': 'int_wxs',
      'MW3_Bottom': 'mw3_bot',
      'MW3_Middle': 'mw3_mid',
      'MW3_Top': 'mw3_top',
      'MW4_Hidden': 'mw4_hdn',
      'MW4_Mid': 'mw4_mid',
      'MW4_PageCounter': 'mw4_pc',
      'MW4_Top': 'mw4_top',
      'MW4_Top_1': 'mw4_top',
      'MW4_Top_2': 'mw4_top',
      'MW4_Top300variable': 'mw4_300var',
      'WX_AdsRefreshCounter': 'wx_arc',
      'WX_Background': 'wx_background',
      'WX_Banner': 'wx_ban',
      'WX_Bot300': 'wx_bot300',
      'WX_Bot300_1': 'wx_bot300_1',
      'WX_CobrandSpotlight': 'wx_cobrasl',
      'WX_CommuterFcstSpotlight': 'wx_commutesl',
      'WX_ContentAd': 'wx_cad',
      'WX_ConvoStarter': 'wx_cstr',
      'WX_CustomInterstitial': 'wx_300var',
      'WX_CustomSpotlight': 'wx_sl4',
      'WX_DDISpotlight': 'wx_ddisl',
      'WX_Driver1': 'wx_d1',
      'WX_DriverTablet': 'wx_d2',
      'WX_DriverUnit': 'wx_du',
      'WX_DriverUnitTablet': 'wx_dutab',
      'WX_Dual300Spon': 'wx_dual300',
      'WX_DVFeature': 'wx_dvf',
      'WX_FarmingSpotlight': 'wx_farmsl',
      'WX_FlipAd': 'wx_fad',
      'WX_Header': 'wx_hdr',
      'WX_Hidden': 'wx_hdn',
      'WX_HomePushdown': 'wx_hc_hdrspon',
      'Wx_HouseMiniDriver': 'wx_hmd',
      'WX_HouseSkinnyDriver': 'wx_hsd',
      'WX_LargeTile': 'wx_lt',
      'WX_Leaderboard': 'wx_ldr',
      'WX_LocSpon': 'wx_locspon',
      'WX_MFWLocal': 'wx_mfwlocal',
      'WX_MFWLogo': 'wx_mfwlogo',
      'WX_Mid_No_ROS': 'wx_mid_no_ros',
      'WX_Mid_No_ROS_B': 'wx_mid_no_ros_b',
      'WX_Mid300': 'wx_mid300',
      'WX_Mid300_b': 'wx_mid300_b',
      'wx_mid300_chat': 'wx_300chat',
      'WX_MiniBrandingBar': 'wx_mbb',
      'WX_MiniDriver1': 'wx_md1',
      'WX_MiniDriver2': 'wx_md2',
      'WX_MiniMid300': 'wx_minimid300',
      'WX_OnTV': 'wx_ontv',
      'WX_OutdoorEntSpotlight': 'wx_outentsl',
      'WX_PaidSearch': 'wx_pds',
      'WX_ParticipatingSponsor1': 'wx_ps1',
      'WX_ParticipatingSponsor2': 'wx_ps2',
      'WX_ParticipatingSponsor3': 'wx_ps3',
      'WX_Partner': 'wx_ptr',
      'WX_PointOfInterest1': 'wx_poi1',
      'WX_PointOfInterest2': 'wx_poi2',
      'WX_PointOfInterest3': 'wx_poi3',
      'WX_PointOfInterest4': 'wx_poi4',
      'WX_PointOfInterest5': 'wx_poi5',
      'WX_PointOfInterest6': 'wx_poi6',
      'WX_POISpotlight': 'wx_sl5',
      'WX_PollenCastSpotlight': 'wx_plncstsl',
      'WX_PreRoll': 'wx_prer',
      'WX_ProjOfWeekSpotlight': 'wx_projofweeksl',
      'WX_Search': 'wx_srch',
      'WX_SearchTop': 'wx_srchtop',
      'WX_ShowSpon': 'wx_show',
      'WX_SocialPhotosSpotlight': 'wx_photosl',
      'WX_SocialSevere': 'wx_socsev',
      'WX_SocialSevere_2': 'wx_socsev',
      'WX_SocialSevere_3': 'wx_socsev',
      'WX_SocialSevere_B': 'wx_socsev_b',
      'WX_SocialSevereDriver': 'wx_socsevdrvr',
      'WX_SocialSpotlight': 'wx_sl2',
      'WX_SponsoredStories': 'wx_sponstories',
      'WX_StormRespondSpotlight': 'wx_stormrespondsl',
      'WX_StormSpotLight': 'wx_stormsl',
      'WX_SummerMemories': 'wx_summermems',
      'WX_Tag': 'wx_tag',
      'WX_TestSpotlight': 'ws_tsl',
      'WX_Tile1': 'wx_t1',
      'WX_Tile2': 'wx_t2',
      'WX_Tile3': 'wx_t3',
      'WX_Top300Small': 'wx_300sm',
      'WX_Top300Small_1': 'wx_300sm',
      'WX_Top300Variable': 'wx_300var',
      'WX_Video_Embed_Lg': 'wx_videoemlg',
      'WX_Video_Embed_Md': 'wx_videoemmd',
      'WX_Video_Embed_Sm': 'wx_videoemsm',
      'WX_Video_MidSm_RR': 'wx_videomidsm_rr',
      'WX_Video_Player': 'wx_prer',
      'WX_Video_Top_Lg': 'preroll=true',
      'WX_Video_TopLg': 'wx_videotoplg',
      'WX_Video_TopSm_RR': 'wx_videotopsm',
      'WX_VideoCompanion': 'wx_videocomp',
      'WX_VideoCompanion_test1': 'wx_videocomptest',
      'WX_VideoMobile': 'wx_vidmob;preroll=true',
      'WX_VideoResponsive': 'wx_videorespond',
      'WX_VideoSpotlight': 'wx_sl3',
      'WX_Wallpaper': 'wx_wlpr',
      'WX_WeatherReadyAutoSpotlight': 'wx_wxreadyauto',
      'WX_WeatherReadySpotlight': 'wx_wreadysl',
      'WX_WeatherVenturesSpotlight': 'wx_wventuresl',
      'WX_WebSearch': 'wx_websrch',
      'WX_WindowShade': 'wx_ws',
      'WX_WXPartner1': 'wx_wp1',
      'WX_WXPartner2': 'wx_wp2',
      'WX_WXPartner3': 'wx_wp3',
      'WX_WXPartner4': 'wx_wp4',
      'WX_WxSpon': 'wx_wxs',
      'WX_SpotLight': 'wx_sl',
      'WX_EditorialLG': 'wx_edlg',
      'WX_EditorialSM': 'wx_edsm',
      'WX_HuntingFishingSpotlight': 'wx_huntfishsl',
      'WX_AllergyTrackerSpotlight': 'wx_allergytrackersl',
      'WX_WeekendTileCardSpotlight': 'wx_tilewcardsl',
      'WX_WeekendTileListSpotlight': 'wx_tilewlistsl',
      'WX_LifestyleSpotlight': 'wx_lifestylesl',
      'WX_HurricaneWeekSpotlight': 'wx_hurricaneweeksl',
      'WX_WeatherVenturesLogo': 'wx_wxventurelogo',
      'MW4_SpotLight': 'mw4_sl',
      'WX_CobrandSpotlight2': 'wx_cobrasl2',
      'WX_FallForFallSpotlight': 'wx_fallforfallsl',
      'WX_Bot3x1': 'wx_3x1',
      'MW_Position1': 'mw_p1',
      'MW_Position2': 'mw_p2',
      'MW_Position3': 'mw_p3',
      'MW_Position4': 'mw_p4',
      'MW_Position4': 'mw_p5',
      'WX_StormCentralSpotlight': 'wx_stormcentralsl',
      'WX_BottomLeader': 'wx_botldr',
      'WX_BottomLeaderTablet': 'wx_botldrtab',
      'WX_ArticleContentAd': 'wx_acw',
      'MW_ArticleContentAd': 'mw_acw',
      'WX_LSAllergySpotlight': 'wx_allergylssl',
      'WX_LSFarmingSpotlight': 'wx_farmlssl',
      'WX_NativeStories': 'wx_nativestories',
      'WX_PromoDriver1': 'wx_promodriver1',
      'WX_MidLeader': 'wx_midldr',
      'WX_CountdownPromoSpotlight': 'wx_countdownpromosl',
      'WX_ContentFeed1': 'wx_cf1',
      'WX_ContentFeed2': 'wx_cf2',
      'WX_ContentFeed3': 'wx_cf3',
      'MW_ContentFeed1': 'mw_cf1',
      'MW_ContentFeed1': 'mw_cf2',
      'MW_ContentFeed1': 'mw_cf3',
      'WX_BillBoard': 'wx_billbrd',
      'WX_SkiConditionsSpotlight': 'wx_skiconditionspromo',
      'WX_LSDrivingSpotlight': 'wx_drivinglssl'
    },
    sizes: {
      'DT_BrandingBar': '970x66',
      'DT_CustomFrame': '1002x793',
      'DT_Hidden': '1x1',
      'DT_Leader': '728x91',
      'DT_MedRect': '300x251',
      'INT_AdvertorialIB': '300x150',
      'INT_BottomLeader': '728x91',
      'INT_BottomText': '765x30',
      'INT_ContextualAds': '300x251',
      'INT_HeaderSpon': '150x60',
      'INT_Hidden': '1x1',
      'INT_Local428': '468x60,428x60',
      'INT_MFWLogo': '125x33,101x13',
      'INT_Micro300_1': '300x25',
      'INT_Micro300_2': '300x251',
      'INT_Middle300': '300x251',
      'INT_MidText': '765x30',
      'INT_PageCounter': '1x1',
      'INT_PaidSearch': '300x251',
      'INT_PanelFeature': '200x80',
      'INT_PhotoBannerPlus': '300x251,980x551',
      'INT_POI1': '88x31',
      'INT_Spon300': '300x251',
      'INT_Spotlight': '180x35,190x36,300x36',
      'INT_Tile1': '125x125',
      'INT_Tile2': '125x125',
      'INT_Tile3': '125x125',
      'INT_Top300Small': '300x251',
      'INT_Top300Variable': '300x600,300x251',
      'INT_TopLeader': '728x91',
      'INT_TopLeaderPlus': '728x91,1280x90',
      'INT_TopText': '765x30',
      'INT_Video': '640x480,640x360',
      'INT_WindowShade': '970x66',
      'INT_WxSpon': '88x31',
      'MW3_Bottom': '300x50,320x51',
      'MW3_Middle': '300x50',
      'MW3_Top': '300x50,300x251,300x250',
      'MW4_Hidden': '1x1',
      'MW4_Mid': '320x51,320x50,300x251,300x250',
      'MW4_PageCounter': '1x1',
      'MW4_Top': '300x50,320x51,320x50',
      'MW4_Top_1': '300x50,320x51,320x50',
      'MW4_Top_2': '320x51,320x50',
      'MW4_Top300variable': '300x251,320x50',
      'WX_AdsRefreshCounter': '1x1',
      'WX_Background': '1x1',
      'WX_Banner': '1280x90',
      'WX_Bot300': '300x251,300x250',
      'WX_Bot300_1': '300x251, 300x250',
      'WX_CobrandSpotlight': '180x35,190x36',
      'WX_CommuterFcstSpotlight': '180x35',
      'WX_ContentAd': '320x160',
      'WX_ConvoStarter': '270x75',
      'WX_CustomInterstitial': '300x251,300x250,980x551,980x550',
      'WX_CustomSpotlight': '300x36',
      'WX_DDISpotlight': '180x35',
      'WX_Driver1': '453x142,485x50,150x300,130x280,980x64',
      'WX_DriverTablet': '728x91,728x90',
      'WX_DriverUnit': '679x150,665x90,980x64,11x46',
      'WX_DriverUnitTablet': '320x51,320x50',
      'WX_Dual300Spon': '300x251,300x250',
      'WX_DVFeature': '605x150',
      'WX_FarmingSpotlight': '180x35',
      'WX_FlipAd': '190x36',
      'WX_Header': '150x60',
      'WX_Hidden': '1x1',
      'WX_HomePushdown': '980x520',
      'Wx_HouseMiniDriver': '300x50',
      'WX_HouseSkinnyDriver': '636x50',
      'WX_LargeTile': '155x155,135x155',
      'WX_Leaderboard': '728x91,728x90,728x92,728x50',
      'WX_LocSpon': '255x44',
      'WX_MFWLocal': '300x251',
      'WX_MFWLogo': '320x51,320x50',
      'WX_Mid_No_ROS': '300x251,300x250',
      'WX_Mid_No_ROS_B': '300x251,300x250',
      'WX_Mid300': '300x251,300x250,320x300',
      'WX_Mid300_b': '300x251,300x250',
      'wx_mid300_chat': '300x251,300x250',
      'WX_MiniBrandingBar': '300x72',
      'WX_MiniDriver1': '270x75,234x60,300x80',
      'WX_MiniDriver2': '270x75,234x60,300x80',
      'WX_MiniMid300': '300x200',
      'WX_OnTV': '300x251,300x250,274x66,274x182',
      'WX_OutdoorEntSpotlight': '180x35',
      'WX_PageCounter': '1x1',
      'WX_PaidSearch': '300x251,300x250',
      'WX_ParticipatingSponsor1': '300x251,300x250,300x100',
      'WX_ParticipatingSponsor2': '300x100',
      'WX_ParticipatingSponsor3': '300x100',
      'WX_Partner': '7x7',
      'WX_PointOfInterest1': '250x30,35x35,75x50',
      'WX_PointOfInterest2': '250x30,35x35,75x50',
      'WX_PointOfInterest3': '250x30,35x35,75x50',
      'WX_PointOfInterest4': '250x30,35x35,75x50',
      'WX_PointOfInterest5': '250x30,35x35,75x50',
      'WX_PointOfInterest6': '250x30,35x35,75x50',
      'WX_POISpotlight': '300x36',
      'WX_PollenCastSpotlight': '180x35',
      'WX_PreRoll': '8x8',
      'WX_ProjOfWeekSpotlight': '180x35',
      'WX_Search': '336x290',
      'WX_SearchTop': '585x238',
      'WX_ShowSpon': '210x60',
      'WX_SkyScraper': '160x600',
      'WX_SocialPhotosSpotlight': '180x35',
      'WX_SocialSevere': '162x35,190x36,320x50,91x24',
      'WX_SocialSevere_2': '162x35,190x36,320x50,91x24',
      'WX_SocialSevere_3': '162x35,190x36,320x50,91x24',
      'WX_SocialSevere_B': '162x35,190x36,320x50,91x24',
      'WX_SocialSevereDriver': '320x65',
      'WX_SocialSpotlight': '180x35,265x35',
      'WX_SponsoredStories': '205x185,320x80',
      'WX_SpotLight': '180x35,190x36,300x36,320x60',
      'WX_StormRespondSpotlight': '180x35',
      'WX_StormSpotLight': '300x36,180x35,190x36',
      'WX_SummerMemories': '180x35',
      'WX_Tag': '1x1',
      'WX_TestSpotlight': '300x36',
      'WX_Tile1': '125x125',
      'WX_Tile2': '125x125',
      'WX_Tile3': '125x125',
      'WX_Top300Small': '300x251,300x250',
      'WX_Top300Small_1': '300x251,300x250',
      'WX_Top300Variable': '300x600,300x251,300x250,300x1050,300x276',
      'WX_Video_Embed_Lg': '640x480',
      'WX_Video_Embed_Md': '640x480',
      'WX_Video_Embed_Sm': '640x480',
      'WX_Video_MidSm_RR': '640x480',
      'WX_Video_Player': '640x480,640x360',
      'WX_Video_Top_Lg': '640x480',
      'WX_Video_TopLg': '640x480',
      'WX_Video_TopSm_RR': '640x480',
      'WX_VideoCompanion': '300x250',
      'WX_VideoCompanion_test1': '300x60',
      'WX_VideoMobile': '640x480,640x360,400x300',
      'WX_VideoResponsive': '640x480',
      'WX_VideoSpotlight': '180x35',
      'WX_Wallpaper': '1x1',
      'WX_WeatherReadyAutoSpotlight': '180x35',
      'WX_WeatherReadySpotlight': '180x35',
      'WX_WeatherVenturesSpotlight': '180x35',
      'WX_WebSearch': '336x290',
      'WX_WindowShade': '300x276,728x91,728x90,728x50,970x250',
      'WX_WXPartner1': '234x60,300x80',
      'WX_WXPartner2': '234x60,300x80',
      'WX_WXPartner3': '234x60,300x80',
      'WX_WXPartner4': '234x60',
      'WX_WxSpon': '88x31',
      'WX_EditorialLG': '679x600',
      'WX_EditorialSM': '424x434',
      'WX_HuntingFishingSpotlight': '180x35',
      'WX_AllergyTrackerSpotlight': '180x35',
      'WX_WeekendTileCardSpotlight': '120x45',
      'WX_WeekendTileListSpotlight': '180x35',
      'WX_LifestyleSpotlight': '180x35',
      'WX_HurricaneWeekSpotlight': '180x35',
      'WX_WeatherVenturesLogo': '300x36',
      'MW4_SpotLight': '320x51,320x50',
      'WX_CobrandSpotlight2': '180x35',
      'WX_FallForFallSpotlight': '180x35',
      'WX_Bot3x1': '300x100,300x251,300x250',
      'MW_Position1': '320x51,320x50,300x276,300x45',
      'MW_Position2': '300x251,300x250',
      'MW_Position3': '300x251,300x250',
      'MW_Position4': '300x251,300x250',
      'MW_Position5': '300x251,300x250',
      'WX_StormCentralSpotlight': '180x35',
      'WX_BottomLeader': '728x91,728x90',
      'WX_BottomLeaderTablet': '320x51,320x50',
      'WX_ArticleContentAd': '320x80',
      'MW_ArticleContentAd': '300x251,300x250',
      'WX_LSAllergySpotlight': '180x35',
      'WX_LSFarmingSpotlight': '180x35',
      'WX_NativeStories': '320x80',
      'WX_PromoDriver1': '285x100',
      'WX_MidLeader': '728x91,728x90,970x90',
      'WX_CountdownPromoSpotlight': '180x35',
      'WX_ContentFeed1': '363x320',
      'WX_ContentFeed2': '363x320',
      'WX_ContentFeed3': '363x320',
      'MW_ContentFeed1': '310x260',
      'MW_ContentFeed2': '310x260',
      'MW_ContentFeed3': '310x260',
      'WX_BillBoard': '970x250',
      'WX_SkiConditionsSpotlight': '180x35',
      'WX_LSDrivingSpotlight': '180x35'
    },
    defaultNCTAU: '7646,web_weather_intl,mobile_smart_intl,tablet_weather_intl',
    defaultTf: '""',
    valueNull: 'nl'
  };

  return {
    gpt: Object.assign({}, baseGPT, {
      map: {"ad_category":"cat","ad_channel":"ch","ad_family":"fam","Ad_Slot_Definition":"gptSlots","ad_unit":"ad_unit","cp.adstest":"adstest","amznslots":"amznslots","amzn_vid":"amzn_vid","baroTendency":"baro","brwsr":"browser","cig":"cig","cond":"cnd","cntryCd":"cc","countyName":"cnty","partner":"cobr","city":"ct","d1":"d1","d2":"d2","d3":"d3","d4":"d4","d5":"d5","dma":"dma","gpt_env":"env","ent":"ent","faud":"faud","fc1":"fc1","fc2":"fc2","fc3":"fc3","fgeo":"fgeo","fhi":"fhi","fhic":"fhic","fhr":"fhr","fli":"fli","floc":"floc","flr":"flr","fltmpc":"fltmpc","fsnw":"fsnw","impression_id":"impression_id","gpr":"intl","hum":"hmid","intref":"intref","lang":"lang","lat":"lat","locale":"locale","locid":"loc","lon":"lon","lpid":"lpid","mlayer":"mlayer","native":"native","ord":"ord","partner3":"par","plat":"plat","pollen":"plln","refurl":"refurl","rmid":"rmid","severe":"sev","sg":"sg","snw":"snw","story":"story","state":"st","weather_view":"template","tf":"tf","temp":"tmp","tempc":"tmpc","tempR":"tmpr","tempRC":"tmprc","tpid":"tpid","uv":"uv","vab":"vab","cp.fv":"vw","wfxtg":"wfxtg","wind":"wind","scatter_zcs":"zcs","zip":"zip","scatter_hzcs":"hzcs","scatter_nzcs":"nzcs","scatter_cxtg":"cxtg","shield":"shield"}
    }),
    adobeAnalytics: {
      locales: {
        'en-GB': 'twciuk',
        'de-DE': 'twciglsde',
        'en-IN': 'twciin',
        'en-US': 'twciwx',
        'es-US': 'twciespanol',
        'fr-FR': 'twciglsfr',
        'en-CA': 'twciglsca',
        'fr-CA': 'twciglsca',
        'es-AR': 'twciglsar',
        'pt-PT': 'twciglspt',
        'es-ES': 'twciglses'
      },
      mapVars: {
        "sc_report_suite": "s_account",
        "hier1": "hier1",
        "hier2": "hier2",
        "pagename": "pageName",
        "channel": "channel",
        "event_name:event2": "event2",
        "campaign": "campaign",
        "level1": "prop1",
        "recentLocs": "prop2",
        "campaignCode": "eVar3",
        "declarations": "prop4",
        "userStatus": "prop5",
        "campaign2": "eVar4",
        "campaign3": "eVar5",
        "rmid": "prop8",
        "zone": "eVar8",
        "timeframe": "prop10",
        "eVar10": "eVar10",
        "contentSection": "prop11",
        "contentSection2": "eVar12",
        "level1_2": "eVar13",
        "contentFamily": "prop14",
        "contentFamily2": "eVar14",
        "contentChannel": "prop15",
        "contentChannel2": "eVar15",
        "cond": "prop16",
        "cond2": "eVar16",
        "prop17": "prop17",
        "provider_author": "prop18",
        "provider_author2": "eVar18",
        "primaryDecl": "prop19",
        "primaryDecl2": "eVar19",
        "prop20": "prop20",
        "eVar20": "eVar20",
        "prop21": "prop21",
        "locTypeIdName": "prop22",
        "anonymizedURL": "prop24",
        "preferredLocation": "prop25",
        "locCityStateCountry": "prop26",
        "locCityStateCountry2": "eVar26",
        "dma": "prop27",
        "dma2": "eVar27",
        "zip": "prop28",
        "zip2": "eVar28",
        "savedLocs": "prop29",
        "env": "prop30",
        "flash": "eVar30",
        "gender": "prop31",
        "age": "prop32",
        "pageUrl": "eVar33",
        "pollen": "prop34",
        "visitNum": "eVar34",
        "date": "prop38",
        "partner": "prop39",
        "partner2": "eVar39",
        "partnerSite": "eVar40",
        "pagename2": "eVar42",
        "fromStr": "prop44",
        "fromStr2": "eVar44",
        "cobrand": "prop45",
        "ad_category": "prop46",
        "contentType": "prop47",
        "videoCollection": "eVar47",
        "ad_family": "prop48",
        "ad_channel": "prop49",
        "template": "prop50",
        "videoPlaylist": "eVar53",
        "visitNum2": "prop53",
        "vab": "prop66,eVar54",
        "cable_provider": "eVar57",
        "partner3": "eVar60",
        "contains_videoplayer": "eVar62",
        "assetId": "eVar63",
        "assetType": "eVar64",
        "locale": "eVar65",
        "weather_view": "prop67",
        "thirdPartyAdTiming": "prop68",
        "loggedin": "eVar70",
        "screensize": "prop74",
        "banner": "prop73",
        "fcst24_expandedView2": "eVar75",
        "fcst24_expandedView": "prop75",
        "webpush": "eVar79",
        "shield": "eVar7",
        "article_title": "prop13"
      },
      varList: {
        pageName: 'pageName',
        channel: 'ch',
        campaign: 'v0',
        hier1: 'h1',
        hier2: 'h2',
        hier3: 'h3',
        hier4: 'h4'
      },
      s_account: 'twciwx',
      dynamicAccountSelection: false,
      dynamicAccountList: '',
      trackDownloadLinks: true,
      trackExternalLinks: true,
      trackInlineStats: true,
      linkDownloadFileTypes: 'zip,exe,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx',
      linkInternalFilters: '',
      linkLeaveQueryString: false,
      linkTrackVars: 'None',
      linkTrackEvents: 'None',
      usePlugins: false,
      currencyCode: 'USD',
      visitorNamespace: 'twci',
      trackingServer: 'odc.weather.com',
      trackingServerSecure: 'sodc.weather.com',
      dc: 122,
      modifier2Default: 'twcigls'
    },
    lookupTables: Object.assign({}, baseGPT, {
      map: {
        'ad_category': 'cat',
        'ad_channel': 'ch',
        'ad_family': 'fam',
        'Ad_Slot_Definition': 'gptSlots',
        'ad_unit': 'ad_unit',
        'cp.adstest': 'adstest',
        'amznslots': 'amznslots',
        'amzn_vid': 'amzn_vid',
        'baroTendency': 'baro',
        'brwsr': 'browser',
        'cig': 'cig',
        'cond': 'cnd',
        'cntryCd': 'cc',
        'countyName': 'cnty',
        'partner': 'cobr',
        'city': 'ct',
        'd1': 'd1',
        'd2': 'd2',
        'd3': 'd3',
        'd4': 'd4',
        'd5': 'd5',
        'dma': 'dma',
        'gpt_env': 'env',
        'ent': 'ent',
        'faud': 'faud',
        'fc1': 'fc1',
        'fc2': 'fc2',
        'fc3': 'fc3',
        'fgeo': 'fgeo',
        'fhi': 'fhi',
        'fhic': 'fhic',
        'fhr': 'fhr',
        'fli': 'fli',
        'floc': 'floc',
        'flr': 'flr',
        'fltmpc': 'fltmpc',
        'fsnw': 'fsnw',
        'impression_id': 'impression_id',
        'gpr': 'intl',
        'hum': 'hmid',
        'intref': 'intref',
        'lang': 'lang',
        'lat': 'lat',
        'locale': 'locale',
        'locid': 'loc',
        'lon': 'lon',
        'lpid': 'lpid',
        'mlayer': 'mlayer',
        'native': 'native',
        'ord': 'ord',
        'partner3': 'par',
        'plat': 'plat',
        'pollen': 'plln',
        'refurl': 'refurl',
        'rmid': 'rmid',
        'severe': 'sev',
        'sg': 'sg',
        'snw': 'snw',
        'story': 'story',
        'state': 'st',
        'weather_view': 'template',
        'tf': 'tf',
        'temp': 'tmp',
        'tempc': 'tmpc',
        'tempR': 'tmpr',
        'tempRC': 'tmprc',
        'tpid': 'tpid',
        'uv': 'uv',
        'vab': 'vab',
        'cp.fv': 'vw',
        'wfxtg': 'wfxtg',
        'wind': 'wind',
        'scatter_zcs': 'zcs',
        'zip': 'zip',
        'scatter_hzcs': 'hzcs',
        'scatter_nzcs': 'nzcs',
        'scatter_cxtg': 'cxtg',
        'shield': 'shield'
      }
    }),
    gptLazyLoad: Object.assign({}, baseGPT, {
      map: {
        "ad_category": "cat",
        "ad_channel": "ch",
        "ad_family": "fam",
        "Ad_Slot_Definition": "gptSlots",
        "ad_unit": "ad_unit",
        "cp.adstest": "adstest",
        "amznslots": "amznslots",
        "amzn_vid": "amzn_vid",
        "baroTendency": "baro",
        "brwsr": "browser",
        "cond": "cnd",
        "cntryCd": "cc",
        "countyName": "cnty",
        "partner": "cobr",
        "city": "ct",
        "d1": "d1",
        "d2": "d2",
        "d3": "d3",
        "d4": "d4",
        "d5": "d5",
        "dma": "dma",
        "ent": "ent",
        "gpt_env": "env",
        "faud": "faud",
        "fc1": "fc1",
        "fc2": "fc2",
        "fc3": "fc3",
        "fgeo": "fgeo",
        "fhi": "fhi",
        "fhic": "fhic",
        "fhr": "fhr",
        "fli": "fli",
        "floc": "floc",
        "flr": "flr",
        "fltmpc": "fltmpc",
        "fsnw": "fsnw",
        "impression_id": "impression_id",
        "gpr": "intl",
        "hum": "hmid",
        "lang": "lang",
        "lat": "lat",
        "locale": "locale",
        "locid": "loc",
        "lon": "lon",
        "mlayer": "mlayer",
        "native": "native",
        "lpid": "lpid",
        "ord": "ord",
        "partner3": "par",
        "plat": "plat",
        "pollen": "plln",
        "refurl": "refurl",
        "rmid": "rmid",
        "severe": "sev",
        "sg": "sg",
        "snw": "snw",
        "story": "story",
        "state": "st",
        "weather_view": "template",
        "tf": "tf",
        "temp": "tmp",
        "tempc": "tmpc",
        "tempR": "tmpr",
        "tempRC": "tmprc",
        "tpid": "tpid",
        "uv": "uv",
        "cp.fv": "vw",
        "wfxtg": "wfxtg",
        "wind": "wind",
        "scatter_zcs": "zcs",
        "zip": "zip",
        "scatter_hzcs": "hzcs",
        "scatter_nzcs": "nzcs"
      },
    }),
    comScore: {
      data: {
        qsp_delim: '&',
        kvp_delim: '=',
        base_url: 'http' + (document.location.href.charAt(4) === 's' ? 's://sb' : '://b') + '.scorecardresearch.com/c2/9576127/cs.js',
        account: '9576127',
        form: '',
        form_settings: {},
        form_normal: [],
        form_hidden: [],
        form_submit: true,
        form_abandon: false,
        form_failure: false,
        form_preferences: {}
      }
    },
    neilsen: (function () {
      var server = 'secure-us';

      return {
        cid: 'us-803965h',
        server: server,
        link_overlay: '0',
        surveys_enabled: '0',
        sample_rate: 0,
        base_url: '//' + server + '.imrworldwide.com/v60.js',
        initialized: false
      };
    })()
  };
})();

var tags = { trigger: function () {} };
;
var s_account = thirdPartyConfig['adobeAnalytics'].s_account;
var s = s_gi(s_account);
s.dynamicAccountSelection = thirdPartyConfig['adobeAnalytics'].dynamicAccountSelection;
s.dynamicAccountList = thirdPartyConfig['adobeAnalytics'].dynamicAccountList;
s.trackDownloadLinks = thirdPartyConfig['adobeAnalytics'].trackDownloadLinks;
s.trackExternalLinks = thirdPartyConfig['adobeAnalytics'].trackExternalLinks;
s.trackInlineStats = thirdPartyConfig['adobeAnalytics'].trackInlineStats;
s.linkDownloadFileTypes = thirdPartyConfig['adobeAnalytics'].linkDownloadFileTypes;
s.linkInternalFilters = thirdPartyConfig['adobeAnalytics'].linkInternalFilters;
s.linkLeaveQueryString = thirdPartyConfig['adobeAnalytics'].linkLeaveQueryString;
s.linkTrackVars = thirdPartyConfig['adobeAnalytics'].linkTrackVars;
s.linkTrackEvents = thirdPartyConfig['adobeAnalytics'].linkTrackEvents;
s.usePlugins = thirdPartyConfig['adobeAnalytics'].usePlugins;
s.currencyCode = thirdPartyConfig['adobeAnalytics'].currencyCode;
s.visitorNamespace = thirdPartyConfig['adobeAnalytics'].visitorNamespace;
s.trackingServer = thirdPartyConfig['adobeAnalytics'].trackingServer;
s.trackingServerSecure = thirdPartyConfig['adobeAnalytics'].trackingServerSecure;
s.dc = thirdPartyConfig['adobeAnalytics'].dc;
var s_code = '', s_objectID;
function s_gi(un, pg, ss) {
  var c = "s.version='H.26';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\" + "\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return " + "y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;retur" + "n 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x)" + ";for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.subs" + "tring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+'," + "'%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+" + "x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescap" + "e(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z" + "+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0," + "2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f" + ");return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibi" + "litychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(" + "s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s" + ".sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.link" + "Type=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname," + "n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.'" + ",'c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?" + "c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60)" + ";if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');" + "return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l" + "[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=" + "new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.w" + "d,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;r" + "eturn true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s." + "tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(" + "n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingS" + "erverBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLower" + "Case();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.versio" + "n+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!" + "s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r" + ";return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[im" + "n];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if" + "(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s" + "._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<50" + "0)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){" + "if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&" + "&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(" + "\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(" + "q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.len" + "gth-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk " + "in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++" + ")if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=" + "(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.con" + "textData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else " + "if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var " + "s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.p" + "e){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s." + "events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0" + ")&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substr" + "ing(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServe" + "r'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()" + "=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvid" + "er')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c'" + ";else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType'" + ")q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],f" + "v,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='re" + "trieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q" + "='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){" + "t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLower" + "Case():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.w" + "d.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0" + "&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;" + "if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.b" + "ct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else " + "if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e." + "target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a" + ".href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.w" + "d.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEven" + "t(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n" + ",e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=" + "o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathna" + "me.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.sc" + "opeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();" + "else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('ja" + "vascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inner" + "Text;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.subs" + "tring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this" + ".un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1))" + ";s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=" + "new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s" + ".sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=" + "true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.ind" + "exOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s" + ".b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListene" + "r('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''" + "),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>" + "=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){" + "var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m." + "toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=" + "un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];i" + "f(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r" + "','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=" + "s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_" + "\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x" + "(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_" + "nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){" + "if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o" + ".l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i" + "(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementBy" + "Id(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDel" + "ay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id" + "=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Obj" + "ect;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k," + "v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l" + "=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo)" + "{if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(v" + "o){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='012" + "3456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random(" + ")*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.vis" + "itorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if" + "(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorI" + "D=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=" + "tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q=''" + ",qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N" + "',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j=" + "'1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';i" + "f(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=" + "s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;i" + "f(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct" + "=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps" + ")<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo" + "){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s." + "pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s." + "eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s" + "_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkTyp" + "e.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceI" + "ndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(" + "s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.cha" + "rAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx" + "=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('o" + "bjectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs)" + "{s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles" + "=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s" + ".wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss" + ",i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[" + "i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.m" + "l)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];i" + "f(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.lo" + "cation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns" + "6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer'" + ");s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=pa" + "rseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUp" + "perCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationS" + "erverSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProf" + "iles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSec" + "onds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_" + "t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDept" + "h,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackin" + "gServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownlo" + "adLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_refer" + "rer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1" + ").t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}", w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, j, x, s;
  if (un) {
    un = un.toLowerCase();
    if (l)
      for (j = 0; j < 2; j++)
        for (i = 0; i < l.length; i++) {
          s = l[i];
          x = s._c;
          if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) {
            if (s.sa)
              s.sa(un);
            if (x == 's_c')
              return s
          } else
            s = 0
        }
  }
  w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  w.s_sp = new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
  w.s_jn = new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
  w.s_rep = new Function("x","o","n","return s_jn(s_sp(x,o),n)");
  w.s_d = new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
  w.s_fe = new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
  w.s_fa = new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
  w.s_ft = new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
  c = s_d(c);
  if (e > 0) {
    a = parseInt(i = v.substring(e + 5));
    if (a > 3)
      a = parseFloat(i)
  } else if (m > 0)
    a = parseFloat(u.substring(m + 10));
  else
    a = parseFloat(v);
  if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0)
    c = s_ft(c);
  if (!s) {
    s = new Object;
    if (!w.s_c_in) {
      w.s_c_il = new Array;
      w.s_c_in = 0
    }
    s._il = w.s_c_il;
    s._in = w.s_c_in;
    s._il[s._in] = s;
    w.s_c_in++;
  }
  s._c = 's_c';
  (new Function("s","un","pg","ss",c))(s, un, pg, ss);
  return s
}

function s_giqf() {
  var w = window, q = w.s_giq, i, t, s;
  if (q)
    for (i = 0; i < q.length; i++) {
      t = q[i];
      s = s_gi(t.oun);
      s.sa(t.un);
      s.setTagContainer(t.tagContainerName)
    }
  w.s_giq = 0
}
s_giqf()

// --------------MEDIA MODULE------------
s.m_Media_c = "var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m=" + "this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;" + "if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm" + ".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l" + "om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function" + "(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new " + "Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o" + "){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v" + "o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n" + "s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti" + "mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'" + "]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe=" + "pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin" + "g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if(" + "e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x" + "+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even" + "ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='" + "--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!" + "=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr" + "ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam" + "e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i" + ".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi" + "me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?" + "'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if(" + "(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c" + "&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w" + ".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0" + ";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]==" + "'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+" + "=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(" + "x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m." + "completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime" + "=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new " + "Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)" + ";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl," + "pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){" + "var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7" + "='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new" + " Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(" + "e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p=" + "'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8" + ")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x." + "type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==" + "2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime" + "Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x" + "!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c" + ");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL" + "ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|" + "|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new" + " Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack" + "&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd." + "addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
s.m_i("Media");
s.loadModule("Media");
window.TWC = window.TWC || {};
TWC.Events = TWC.Events || {};
TWC.Events.sMediaReady = TWC.Events.sMediaReady || jQuery.Deferred();
TWC.Events.tagsReady = TWC.Events.tagsReady || jQuery.Deferred();
TWC.Events.sMediaReady.resolve();
TWC.Events.siteCatalystReady = TWC.Events.tagsReady;
TWC.Events.tagsReady.resolve();
TWC.PcoUtils.setTiming('sMediaReady', new Date().getTime());

// --------------MEDIA MODULE------------

var adobeAnalytics = (function (config) {
  return {
    push: function(tagData) {
      var adobeManagerObject = {},
        modifiers;

      adobeManagerObject.adobeTagData = s;

      for (var i = 1; i < 80; i++) {
        config.varList['prop' + i] = 'c' + i;
        config.varList['eVar' + i] = 'v' + i
      }

      function customPush(array, element) {
        if (typeof array != 'undefined')
          array.push(element);
      }

      modifiers = {
        modifier1: function(tagData) {
          var primaryDecl = tagData['primaryDecl'],
            level1 = tagData['level1'],
            catFmCh = [],
            adData;

          if (tagData['ugcLookup'] && tagData['ad_catFamCh']) {
            adData = tagData['ad_catFamCh'];
            catFmCh = adData.split(',');
          } else if (level1 === 'LOCALWX' && primaryDecl) {
            adData = tagData['ad_catFamCh'],
              catFmCh = adData && adData.split(',');
          } else if (level1 === 'LOCALWX') {
            catFmCh = ['fcst', 'fcst', 'fcst'];
          } else {
            adData = tagData['zone'];
            catFmCh = adData && adData.split('/');
            catFmCh = catFmCh && catFmCh.slice(-2);
            if (catFmCh && catFmCh.length && catFmCh.length < 2) {
              catFmCh.unshift(catFmCh[0]);
            } else if (catFmCh && catFmCh.length && catFmCh.length === 2) {
              catFmCh.unshift(catFmCh[0] + '_' + catFmCh[1]);
            }
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 0 && catFmCh[0]) {
            TWC.pco.setNodeValue('metrics', 'ad_category', catFmCh[0]);
            tagData['ad_category'] = catFmCh[0];
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 1 && catFmCh[1]) {
            TWC.pco.setNodeValue('metrics', 'ad_family', catFmCh[1]);
            tagData['ad_family'] = catFmCh[1];
          } else {
            TWC.pco.setNodeValue('metrics', 'ad_family', 'nl');
            tagData['ad_family'] = 'nl';
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 2 && catFmCh[2]) {
            TWC.pco.setNodeValue('metrics', 'ad_channel', catFmCh[2]);
            tagData['ad_channel'] = catFmCh[2];
          } else {
            TWC.pco.setNodeValue('metrics', 'ad_channel', 'nl');
            tagData['ad_channel'] = 'nl';
          }
        },
        modifier2: function(tagData) {
          var locale = tagData['locale'];

          if (typeof locale === 'undefined') {
            return;
          }

          tagData['sc_report_suite'] = !!config.locales[locale] ? config.locales[locale] : config.modifier2Default;
        },
        modifier3: function(tagData) {
          tagData['hier2'] = TWC.pco.getNodeValue('metrics', 'ad_family') + '-' + TWC.pco.getNodeValue('metrics', 'ad_channel') + '-' + TWC.pco.getNodeValue('metrics', 'level1');
        },
        modifier4: function(tagData) {
          window.optimizely = window.optimizely || [];
          window.optimizely.push('activateSiteCatalyst');
        },
        modifier5: function(tagData) {
          try {
            tagData['pageUrl'] = s.pageURL || s.wd.location.href;
          } catch (e) {
          }
        },
        modifier6: function(tagData) {
          if (!s.__ccucr) {
            s.c_rr = s.c_r;
            s.__ccucr = true;
            s.c_r = new Function("k", "" + "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret" + "urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=" + "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'" + ",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:" + "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get" + "Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret" + "urn v;");
          }
          if (!s.__ccucw) {
            s.c_wr = s.c_w;
            s.__ccucw = true;
            s.c_w = new Function("k", "v", "e", "" + "this.new2 = true;" + "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv," + "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s" + ".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr" + "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv" + ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i" + "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())" + "{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'" + "='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t" + ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i" + "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set" + "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
          }
          s.getVisitNum = new Function("tp", "c", "c2", "" + "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" + "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" + "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" + "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" + "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" + "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" + "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" + "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" + "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" + ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
          s.dimo = new Function("m", "y", "" + "var d=new Date(y,m+1,0);return d.getDate();");
          s.endof = new Function("x", "" + "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" + "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" + "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " + "t;");
          s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
          s.getTimeParting = new Function("t", "z", "y", "" + "dc=new Date('1/1/2000');f=15;var omne=8;if(dc.getDay()!=6||" + "dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);" + "if(y=='2009'){f=8;omne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay(" + ");gnov=new Date('11/1/'+y);dste=omne-gnov.getDay();spr=new Date('3/'" + "+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();" + "if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO" + "ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear(" + ");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr" + "iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi" + "sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=" + "days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3" + "0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th" + "ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'" + ":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim" + "estring}if(t=='d'){return daystring};if(t=='w'){return en" + "dstring}}};");
          s.getQueryParam = new Function("p", "d", "u", "" + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs" + "tring(i==p.length?i:i+1)}return v");
          s.p_gpv = new Function("k", "u", "" + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" + "=s.pt(q,'&','p_gvf',k)}return v");
          s.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa(v)}return ''");
          s.getValOnce = new Function("v", "c", "e", "" + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
          s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
          s.apl = new Function("L", "v", "d", "u", "" + "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)L=L?L+d+v:v;return L");
          s.downloadLinkHandler = new Function("p", "" + "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT" + "ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;" + "if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
          s.p_gh = new Function("" + "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(" + "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){" + "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s." + "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
        },
        modifier7: function(tagData) {
          try {
            var myDate = new Date(),
              tz = myDate.getTimezoneOffset(),
              year = myDate.getFullYear();

            tz = -tz / 60 + '';
            tagData['eVar10'] = s.getNewRepeat();
            tagData['prop20'] = s.getTimeParting('h', tz, year);
            tagData['prop21'] = s.getTimeParting('d', tz, year);
            tagData['eVar20'] = s.getTimeParting('h', tz, year) + ':' + s.getTimeParting('d', tz, year);
            tagData['visitNum'] = tagData['visitNum2'] = s.getVisitNum(365 * 5) + '||' + s.getNewRepeat(365 * 5, 's_nr2');
          } catch (e) {
          }
        }
      };

      function initTag(tagData) {
        var dataMetrics,
          adobeManagerData,
          splitProp,
          onceEvar,
          productsEvar,
          prop,
          events,
          propString,
          stringifiedProp,
          i;

        adobeManagerObject.data = {};
        tagData.sc_events = tagData.sc_events || {};
        adobeManagerObject.addEvent = function(event) {
          var events = [],
            i;

          if (event instanceof Array) {
            events = eventv.slice(0);
          } else {
            events.push(event);
          }

          for (i = 0; i < events.length; i++) {
            tagData.sc_events[events[i]] = 1;
            customPush(adobeManagerObject.lte, events[i].split('=')[0]);
          }

          return tagData.sc_events;
        };

        adobeManagerObject.addProduct = function(v) {
          adobeManagerObject.data.sc_addProd = "";
          if (v instanceof Array) {
            adobeManagerObject.data.sc_addProd = v.join(',');
          } else {
            adobeManagerObject.data.sc_addProd = v;
          }
        };

        Object.keys(modifiers).forEach(function(modifier) {
          modifiers[modifier](tagData);
        });

        for (prop in getCopy(config.mapVars)) {
          if (typeof tagData[prop] != 'undefined' && typeof config.mapVars[prop] == 'string' && config.mapVars[prop].indexOf('PRODUCTS_') > -1) {
            splitProp = config.mapVars[prop].split(',');

            for (i = 0; i < splitProp.length; i++) {
              if (splitProp[i].indexOf('PRODUCTS_id') || splitProp[i].indexOf('PRODUCTS_category') || splitProp[i].indexOf('PRODUCTS_quantity') || splitProp[i].indexOf('PRODUCTS_price')) {
                adobeManagerObject.data[splitProp[i].substring(9)] = tagData[prop];
              }
            }
          }
        }

        adobeManagerObject.data.id = adobeManagerObject.data.id || (typeof tagData._cprod != 'undefined' ? tagData._cprod.slice(0) : []);
        adobeManagerObject.data.category = adobeManagerObject.data.category || (typeof tagData._ccat != 'undefined' ? tagData._ccat.slice(0) : []);
        adobeManagerObject.data.quantity = adobeManagerObject.data.quantity || (typeof tagData._cquan != 'undefined' ? tagData._cquan.slice(0) : []);
        adobeManagerObject.data.price = adobeManagerObject.data.price || (typeof tagData._cprice != 'undefined' ? tagData._cprice.slice(0) : []);

        if (typeof adobeManagerObject.data.id != 'undefined' && adobeManagerObject.data.id != "") {
          dataMetrics = [];
          adobeManagerData = {};
          events = {};
          for (prop in getCopy(config.mapVars)) {
            if (typeof tagData[prop] != 'undefined' && typeof config.mapVars[prop] == 'string' && config.mapVars[prop].indexOf('PRODUCTS_') > -1) {
              productsEvar = config.mapVars[prop].split(',');

              for (i = 0; i < productsEvar.length; i++) {
                var pv = productsEvar[i].substring(9);

                if (productsEvar[i].indexOf('PRODUCTS_evar') == 0 || productsEvar[i].indexOf('PRODUCTS_eVar') == 0) {
                  if (tagData[prop]instanceof Array) {
                    tagData.sc_prodevars = tagData.sc_prodevars || [];

                    for (var j = 0; j < tagData[prop].length; j++) {
                      var prodvars = {};
                      if (typeof tagData.sc_prodevars[j] != 'undefined' && tagData.sc_prodevars[j] != "") {
                        tagData.sc_prodevars[j][pv] = tagData[prop][j];
                      } else {
                        prodvars[pv] = tagData[prop][j];
                        tagData.sc_prodevars.push(prodvars);
                      }
                    }
                  } else {
                    adobeManagerData[pv] = tagData[prop].split(',');
                  }
                } else if (productsEvar[i].indexOf('PRODUCTS_event') == 0) {
                  if (tagData[prop] instanceof Array) {
                    tagData.sc_prodevents = tagData.sc_prodevents || [];

                    for (var j = 0; j < tagData[prop].length; j++) {
                      var prodevents = {};

                      if (typeof tagData.sc_prodevents[j] != 'undefined' && tagData.sc_prodevents[j] != "") {
                        tagData.sc_prodevents[j][pv] = tagData[prop][j];
                      } else {
                        prodevents[pv] = tagData[prop][j];
                        tagData.sc_prodevents.push(prodevents);
                      }
                    }
                    adobeManagerObject.addEvent(pv);
                  } else {
                    events[pv] = tagData[prop];
                    adobeManagerObject.addEvent(pv);
                  }
                }
              }
            }
          }
          propString = "";

          for (prop in getCopy(adobeManagerData)) {
            for (i = 0; i < adobeManagerData[prop].length; i++) {
              if (propString != '')
                propString += '|' + prop + '=' + adobeManagerData[prop][i];
              else
                propString = prop + '=' + adobeManagerData[prop][i];
            }
          }

          stringifiedProp = "";

          for (prop in getCopy(events)) {
            if (stringifiedProp) {
              stringifiedProp += '|' + prop + '=' + ((isNaN(events[prop])) ? '1' : events[prop]);
            } else {
              stringifiedProp = prop + '=' + ((isNaN(events[prop])) ? '1' : events[prop]);
            }
          }

          tagData.sc_prodevents = tagData.sc_prodevents || [];
          tagData.sc_prodevars = tagData.sc_prodevars || [];

          for (i = 0; i < adobeManagerObject.data.id.length; i++) {
            var h2 = stringifiedProp;
            var h3 = propString;

            if (typeof tagData.sc_prodevents != 'undefined') {
              for (prop in tagData.sc_prodevents[i]) {
                if (typeof tagData.sc_prodevents[i][prop] != 'undefined') {
                  var l = tagData.sc_prodevents[i][prop];

                  if (typeof l != 'undefined' && l != '' && isNaN(l) == false) {
                    if (h2) {
                      h2 += '|' + prop + '=' + l;
                    } else {
                      h2 = prop + '=' + l;
                    }
                  }
                }
              }
            }

            if (typeof tagData.sc_prodevars != 'undefined') {
              for (prop in tagData.sc_prodevars[i]) {
                if (typeof tagData.sc_prodevars[i][prop] != 'undefined') {
                  var l = tagData.sc_prodevars[i][prop];
                  if (typeof l != 'undefined' && l != '') {
                    if (h3) {
                      h3 += '|' + prop + '=' + l;
                    } else {
                      h3 = prop + '=' + l;
                    }
                  }
                }
              }
            }
            dataMetrics.push((adobeManagerObject.data.category[i] ? adobeManagerObject.data.category[i] : '') + ';' + adobeManagerObject.data.id[i] + ';' + (adobeManagerObject.data.quantity[i] ? adobeManagerObject.data.quantity[i] : '') + ';' + (adobeManagerObject.data.price[i] ? ((adobeManagerObject.data.quantity[i] ? parseInt(adobeManagerObject.data.quantity[i]) : 1) * parseFloat(adobeManagerObject.data.price[i])).toFixed(2) : '') + ';' + h2 + ';' + h3);
          }

          if (typeof adobeManagerObject.data.sc_addProd != 'undefined' && adobeManagerObject.data.sc_addProd) {
            dataMetrics.push(adobeManagerObject.data.sc_addProd);
          }

          adobeManagerObject.adobeTagData.products = dataMetrics.join(',');
        }

        var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;

        for (prop in getCopy(tagData)) {
          splitProp = [];

          if (typeof config.mapVars[prop + ':' + tagData[prop]] != 'undefined') {
            tagData[prop + ':' + tagData[prop]] = tagData[prop];
            splitProp = config.mapVars[prop + ':' + tagData[prop]].split(',');
          } else if (typeof config.mapVars[prop] != 'undefined')
            splitProp = config.mapVars[prop].split(',');

          for (i = 0; i < splitProp.length; i++) {
            if (splitProp[i] != 'events' && evt.test(splitProp[i]) && tagData[prop] != '') {
              if (splitProp[i].indexOf('ONCE_') == 0) {
                onceEvar = splitProp[i].substring(5);
              } else {
                adobeManagerObject.addEvent(splitProp[i]);
              }
            }
          }
        }

        for (prop in getCopy(tagData)) {
          if (typeof config.mapVars[prop] != 'undefined') {
            splitProp = config.mapVars[prop].split(',');

            for (i = 0; i < splitProp.length; i++) {
              if (splitProp[i].indexOf('ONCE_') == 0) {
                onceEvar = splitProp[i].substring(5);
              } else if (splitProp[i] == 'doneAction') {
                tagData.doneAction = tagData[prop];

                if (tagData.doneAction != 'navigate') {
                  tagData.doneAction = eval(tagData[prop]);
                }
              } else {
                if (prop == 'sc_events' || prop == 'sc_prodevents' || prop == 'sc_prodevars') {
                } else {
                  adobeManagerObject.adobeTagData[splitProp[i]] = tagData[prop];
                }
                if (splitProp[i] == 's_account') {
                  adobeManagerObject.adobeTagData.dynamicAccountSelection = true;
                  adobeManagerObject.adobeTagData.dynamicAccountList = tagData[prop] + '=.';
                } else if (splitProp[i] == 'linkTrackVars') {
                  adobeManagerObject.ltflag = false;
                } else {
                  customPush(adobeManagerObject.ltv, splitProp[i]);
                }
              }
            }
          }
        }
        var eventsProps = [];

        for (prop in getCopy(tagData.sc_events)) {
          if (tagData.sc_events[prop])
            eventsProps.push(prop)
        }
        if (eventsProps.length > 0) {
          adobeManagerObject.adobeTagData.events = eventsProps.join(',');
          customPush(adobeManagerObject.lte, adobeManagerObject.adobeTagData.events);
        }
        if (tagData._corder) {
          customPush(adobeManagerObject.lte, 'purchase');
          customPush(adobeManagerObject.ltv, 'purchaseID');
          adobeManagerObject.adobeTagData.purchaseID = ((adobeManagerObject.adobeTagData.purchaseID) ? adobeManagerObject.adobeTagData.purchaseID : tagData._corder);
          adobeManagerObject.adobeTagData.events = ((adobeManagerObject.adobeTagData.events) ? adobeManagerObject.adobeTagData.events : 'purchase');
          if (adobeManagerObject.adobeTagData.events.indexOf('purchase') < 0) {
            adobeManagerObject.adobeTagData.events += ',purchase'
          }
        }
        var dData = {};

        for (prop in getCopy(config.varList)) {
          if (typeof adobeManagerObject.adobeTagData[prop] != 'undefined' && adobeManagerObject.adobeTagData[prop] != null && adobeManagerObject.adobeTagData[prop] != '' && adobeManagerObject.adobeTagData[prop].toString().indexOf('D=') != 0) {
            if (typeof dData[adobeManagerObject.adobeTagData[prop]] == 'undefined')
              dData[adobeManagerObject.adobeTagData[prop]] = config.varList[prop];
            else
              adobeManagerObject.adobeTagData[prop] = 'D=' + dData[adobeManagerObject.adobeTagData[prop]];
          }
        }

        var img = adobeManagerObject.adobeTagData.t();
        if (typeof img != 'undefined' && img != '') {
          adobeManagerObject.img = new Image();
          adobeManagerObject.img.src = img.substring(img.indexOf('src=') + 5, img.indexOf('width=') - 2);
        }
      }

      initTag(tagData);
    }
  }
})(window.thirdPartyConfig && window.thirdPartyConfig['adobeAnalytics'] || {});
;
var lookupTable = (function(config) {
  return {
    push: function (tagData) {
      var modifiers = {
        modifier1: function(tagData) {
          var positions = tagData['positions'];

          if (typeof positions === 'undefined') {
            return;
          }

          if (typeof tagData['pos'] === 'undefined') {
            tagData['pos'] = [];
          }

          for (var i = 0; i < positions.length; i++) {
            tagData['pos'][i] = !!config.positions[positions[i]] ? config.positions[positions[i]] : config.valueNull;
          }
        },
        modifier2: function(tagData) {
          var positions = tagData['positions'];

          if (typeof positions === 'undefined') {
            return;
          }

          if (typeof tagData['sizes'] === 'undefined') {
            tagData['sizes'] = [];
          }

          for (var i = 0; i < positions.length; i++) {
            tagData['sizes'][i] = !!config.sizes[positions[i]] ? config.sizes[positions[i]] : config.valueNull;
          }
        },
        modifier3: function(tagData) {
          var locale = tagData['locale'];

          if (typeof locale === 'undefined') {
            return;
          }

          tagData['NCTAU'] = !!config.locale[locale] ? config.locale[locale] : config.defaultNCTAU;
        },
        modifier4: function(tagData) {
          var sizes = tagData['sizes'],
            adDivs = tagData['positions'],
            NCTAU = tagData['NCTAU'].split(','),
            NC = NCTAU[0],
            NCTAU_index = (window.browserWidth < 768) && 2 || (window.browserWidth > 767 && window.browserWidth < 1025) && 3 || (window.browserWidth > 1024) && 1,
            site = NCTAU[NCTAU_index],
            zone = tagData['zone'],
            adUnitAndZone = '/' + NC + '/' + site + '/'+ zone,
            length = jQuery.isArray(adDivs) && adDivs.length,
            i;

          window['OX_dfp_ads'] = [];

          for (i = 0; i < length; i++) {
            if (adDivs[i] !== 'NONE' && sizes[i] !== 'nl') {
              OX_dfp_ads.push([adUnitAndZone, sizes[i].split(','), adDivs[i]]);
            } else if (adDivs[i] === 'NONE') {
              OX_dfp_ads.push([adUnitAndZone, ['1x1'], adDivs[i]]);
            }
          }

          TWC && TWC.Events && TWC.Events.getEvent && TWC.Events.getEvent('OX_dfp_ads_Ready').resolve();
          console.log('OX_dfp_ads_Ready', new Date().getTime() - windowRenderStartTime);
        },
        modifier5: function(tagData) {
          var zone = tagData['zone'];

          if (typeof zone === 'undefined') {
            return;
          }

          tagData['tf'] = !!config.zone[zone] ? config.zone[zone] : '""';
        },
        modifier6: function(tagData) {
          var ugcLookup = tagData['ugcLookup'];

          if (typeof ugcLookup === 'undefined') {
            return;
          }

          tagData['ad_catFamCh'] = !!config.ugcLookup[ugcLookup] ? config.ugcLookup[ugcLookup] : config.valueNull;
        },
        modifier7: function(tagData) {
          var sponstory = tagData['sponstory'];

          if (typeof sponstory === 'undefined') {
            return;
          }

          tagData['sponkeywords'] = !!config.sponstory[sponstory] ? config.sponstory[sponstory] : '';
        },
        modifier8: function(tagData) {
          var adData,
            catFmCh = [],
            level1 = tagData['level1'],
            primaryDecl = tagData['primaryDecl'];

          if (tagData['ugcLookup'] && tagData['ad_catFamCh']) {
            adData = tagData['ad_catFamCh'];
            catFmCh = adData.split(',');
          } else if (level1 === 'LOCALWX' && primaryDecl) {
            adData = tagData['ad_catFamCh'];
            catFmCh = adData && adData.split(',');
          } else if (level1 === 'LOCALWX') {
            catFmCh = ['fcst', 'fcst', 'fcst'];
          } else {
            adData = tagData['zone'];
            catFmCh = adData && adData.split('/');
            catFmCh = catFmCh && catFmCh.slice(-2);

            if (catFmCh && catFmCh.length && catFmCh.length < 2) {
              catFmCh.unshift(catFmCh[0]);
            } else if (catFmCh && catFmCh.length && catFmCh.length === 2) {
              catFmCh.unshift(catFmCh[0] + '_' + catFmCh[1]);
            }
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 0 && catFmCh[0]) {
            TWC.pco.setNodeValue('metrics', 'ad_category', catFmCh[0]);
            tagData['ad_category'] = catFmCh[0];
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 1 && catFmCh[1]) {
            TWC.pco.setNodeValue('metrics', 'ad_family', catFmCh[1]);
            tagData['ad_family'] = catFmCh[1];
          } else {
            TWC.pco.setNodeValue('metrics', 'ad_family', 'nl');
            tagData['ad_family'] = 'nl';
          }
          if (catFmCh && catFmCh.length && catFmCh.length > 2 && catFmCh[2]) {
            TWC.pco.setNodeValue('metrics', 'ad_channel', catFmCh[2]);
            tagData['ad_channel'] = catFmCh[2];
          } else {
            TWC.pco.setNodeValue('metrics', 'ad_channel', 'nl');
            tagData['ad_channel'] = 'nl';
          }
        },
        modifier9: function(tagData) {
          var keywords = [];

          for (var key in config.map) {
            if (config.map.hasOwnProperty(key)) {
              if (key === 'Ad_Slot_Definition') {
                continue;
              }
              if (tagData[key] === undefined) {
                continue;
              }
              keywords.push(config.map[key] + '=' + tagData[key]);
            }
          }
          if (window.crtg_content) {
            var crtg_split = crtg_content.split(';');
            for (i = 1; i < crtg_split.length; i++) {
              keywords.push((crtg_split[i - 1].split('='))[0] + '=' + (crtg_split[i - 1].split('='))[1] + "");
            }
          }
          keywords = keywords.join('&');
          TWC.pco.setNodeValue('ad', 'cust_params', keywords);
        },
        modifier10: function(tagData) {
          var sev = tagData['severe'],
            localsev = TWC.pco.getNodeValue('wx', 'severe'),
            sevStr = localsev && jQuery.isArray(localsev) && localsev.join(',') || null,
            fld = sevStr && sevStr.indexOf('fld') > -1 && 'fld' || '',
            trop = sevStr && sevStr.indexOf('trop') > -1 && 'trop' || '',
            oth = sevStr && sevStr.indexOf('oth') > -1 && 'oth' || '',
            thdr = sevStr && sevStr.indexOf('thdr') > -1 && 'thdr' || '',
            tor = sevStr && sevStr.indexOf('tor') > -1 && 'tor' || '',
            wint = sevStr && sevStr.indexOf('wint') > -1 && 'wint' || '',
            modules = Drupal && Drupal.settings && Drupal.settings.twc && Drupal.settings.twc.modules,
            hybridSevere = modules.glomo_hybrid_mode && 'h',
            severeProps = [fld, trop, oth, thdr, tor, wint],
            finalSev = [],
            cp,
            rgx,
            sevkeyword;

          for (var i = 0; i < severeProps.length; i++) {
            if (severeProps[i]) {
              finalSev.push(severeProps[i]);
            }
          }

          if (finalSev.length === 0) {
            finalSev.push('nl');
          }

          if (hybridSevere) {
            finalSev.unshift(hybridSevere);
          }

          finalSev.unshift(sev);
          tagData['severe'] = finalSev.join(',');
          cp = TWC.pco.getNodeValue('ad', 'cust_params');
          rgx = cp && cp.match(/(sev=)[y,n]/);

          if (rgx) {
            sevkeyword = rgx[1] + finalSev.join(',');
            cp = cp.replace(rgx[0], sevkeyword);
          }
          TWC.pco.setNodeValue('ad', 'cust_params', cp);
        },
        modifier11: function(tagData) {
          window.TWC = window.TWC || {};
          TWC.tagsObject = TWC.tagsObject || {};
          TWC.tagsObject.lookups = TWC.tagsObject.lookups || {};
          TWC.tagsObject.lookups.pos = tagData['pos'];
          TWC.tagsObject.lookups.sizes = tagData['sizes'];
          TWC.tagsObject.lookups.tf = tagData['tf'];
          TWC.tagsObject.lookups.ad_CatFamCh = tagData['ad_catFamCh'];
        }
      };

      Object.keys(modifiers).forEach(function(modifier) {
        modifiers[modifier](tagData);
      });
    }
  };
})(window.thirdPartyConfig && window.thirdPartyConfig['lookupTables'] || {});
;
function gptBase (config) {
  this.config = config;
}
gptBase.prototype = {
  setPositions: function () {
    var positions = this.data['positions'] || [];

    if (typeof this.data['pos'] === 'undefined') {
      this.data['pos'] = [];
    }

    for (var j = 0; j < positions.length; j++) {
      this.data['pos'][j] = !!this.config.positions[positions[j]] ? this.config.positions[positions[j]] : 'nl';
    }
  },
  setSizes: function () {
    var positions = this.data['positions'];

    if (typeof this.data['sizes'] === 'undefined') {
      this.data['sizes'] = [];
    }

    for (var h = 0; h < positions.length; h++) {
      this.data['sizes'][h] = !!this.config.sizes[positions[h]] ? this.config.sizes[positions[h]] : 'nl';
    }
  },
  setNCTAU: function () {
    this.data['NCTAU'] = !!this.config.locale[this.data.locale]
      ? this.config.locale[this.data.locale]
      : this.config.defaultNCTAU;
  },
  setZone: function () {
    this.data['tf'] = !!this.config.zone[this.data.zone]
      ? this.config.zone[this.data.zone]
      : this.config.defaultTf;
  },
  setUgcLookup: function () {
    this.data['ad_catFamCh'] = !!this.config.ugcLookup[this.data.ugcLookup]
      ? this.config.ugcLookup[this.data.ugcLookup]
      : this.config.valueNull;
  },
  setSponstory: function () {
    this.data['sponkeywords'] = !!this.config.ugcLookup[this.data.sponstory]
      ? this.config.ugcLookup[this.data.sponstory]
      : this.config.valueNull;
  },
  processSponkeywords: function () {
    var _spk = this.data.sponstorykeywords || '';
    // @todo Why is the comma separated? Where is this function being used?
    if (_spk) {
      sponstorykeywordsArray = _spk.split(',');
      if (sponstorykeywordsArray.length > 1) {
        this.data['native'] = sponstorykeywordsArray[0];
        this.data['story'] = sponstorykeywordsArray[1];
      }
    }
  },
  processCatFamCh: function () {
    // @todo Can we notate via comments what's happening here with the various if statements?
    var adData, catFmCh = [], cat, level1 = this.data['level1'], primaryDecl = this.data['primaryDecl'];

    if (this.data['ugcLookup'] && this.data['ad_catFamCh']) {
      adData = this.data['ad_catFamCh'];
      catFmCh = adData.split(',');
    } else if (level1 === 'LOCALWX' && primaryDecl) {
      adData = this.data['ad_catFamCh'],
      catFmCh = adData && adData.split(',');
    } else if (level1 === 'LOCALWX') {
      catFmCh = ['fcst', 'fcst', 'fcst'];
    } else {
      adData = this.data['zone'];
      catFmCh = adData && adData.split('/');
      catFmCh = catFmCh && catFmCh.slice(-2);

      if (catFmCh && catFmCh.length && catFmCh.length < 2) {
        catFmCh.unshift(catFmCh[0]);
      } else if (catFmCh && catFmCh.length && catFmCh.length === 2) {
        catFmCh.unshift(catFmCh[0] + '_' + catFmCh[1]);
      }
    }

    if (catFmCh && catFmCh.length && catFmCh.length > 0 && catFmCh[0]) {
      TWC.pco.setNodeValue('metrics', 'ad_category', catFmCh[0]);
      this.data['ad_category'] = catFmCh[0];
    }

    if (catFmCh && catFmCh.length && catFmCh.length > 1 && catFmCh[1]) {
      TWC.pco.setNodeValue('metrics', 'ad_family', catFmCh[1]);
      this.data['ad_family'] = catFmCh[1];
    } else {
      TWC.pco.setNodeValue('metrics', 'ad_family', 'nl');
      this.data['ad_family'] = 'nl';
    }

    if (catFmCh && catFmCh.length && catFmCh.length > 2 && catFmCh[2]) {
      TWC.pco.setNodeValue('metrics', 'ad_channel', catFmCh[2]);
      this.data['ad_channel'] = catFmCh[2];
    } else {
      TWC.pco.setNodeValue('metrics', 'ad_channel', 'nl');
      this.data['ad_channel'] = 'nl';
    }
  },
  processPCOcustParams: function () {
    var dfpmap = this.config.map;
    var keywords = [];

    for (key in dfpmap) {
      if (dfpmap.hasOwnProperty(key)) {
        if (key === 'Ad_Slot_Definition') {
          continue;
        }

        if (this.data[key] === undefined) {
          continue;
        }

        keywords.push(dfpmap[key] + '=' + this.data[key]);
      }
    }

    if (window.crtg_content) {
      var crtg_split = crtg_content.split(';');

      for (i = 1; i < crtg_split.length; i++) {
        keywords.push((crtg_split[i - 1].split('='))[0] + '=' + (crtg_split[i - 1].split('='))[1] + '');
      }
    }

    keywords = keywords.join('&');
    TWC.pco.setNodeValue('ad', 'cust_params', keywords);
  },
  appendLocalSevere: function () {
    var sev = this.data['severe'], localsev = TWC.pco.getNodeValue('wx', 'severe'), sevStr = localsev && jQuery.isArray(localsev) && localsev.join(',') || null, fld = sevStr && sevStr.indexOf('fld') > -1 && 'fld' || '', trop = sevStr && sevStr.indexOf('trop') > -1 && 'trop' || '', oth = sevStr && sevStr.indexOf('oth') > -1 && 'oth' || '', thdr = sevStr && sevStr.indexOf('thdr') > -1 && 'thdr' || '', tor = sevStr && sevStr.indexOf('tor') > -1 && 'tor' || '', wint = sevStr && sevStr.indexOf('wint') > -1 && 'wint' || '', finalSev = [], cp, rgx, sevkeyword, modules = Drupal && Drupal.settings && Drupal.settings.twc && Drupal.settings.twc.modules, hybridSevere = modules.glomo_hybrid_mode && 'h', dummy = fld ? finalSev.push(fld) : null;
    dummy = trop ? finalSev.push(trop) : null;
    dummy = oth ? finalSev.push(oth) : null;
    dummy = thdr ? finalSev.push(thdr) : null;
    dummy = tor ? finalSev.push(tor) : null;
    dummy = wint ? finalSev.push(wint) : null;
    dummy = finalSev.length === 0 ? finalSev.push('nl') : null;
    dummy = hybridSevere && finalSev.unshift(hybridSevere);
    finalSev.unshift(sev);
    this.data['severe'] = finalSev.join(',');
    cp = TWC.pco.getNodeValue('ad', 'cust_params');
    rgx = cp && cp.match(/(sev=)[y,n]/);

    if (rgx) {
      sevkeyword = rgx[1] + finalSev.join(',');
      cp = cp.replace(rgx[0], sevkeyword);
    }

    TWC.pco.setNodeValue('ad', 'cust_params', cp);
  },
  processAdSlots: function () {
    var host = window.location.hostname;
    var settings = window.Drupal && Drupal.settings || {};
    var isMobile = this.data['isMobile'];
    var screenSize = TWC && TWC.pco && TWC.pco.getNodeValue && TWC.pco.getNodeValue('page', 'screenSize');
    var NCTAU_array = this.data['NCTAU'] && this.data['NCTAU'].split(',');
    var NCTAU_index = screenSize === 'tabletSized' && 3 || screenSize === 'mobileSized' && 2 || screenSize === 'desktopSized' && 1;
    var rgx = this.data['beta_indicator'] && new RegExp(this.data['beta_indicator']);
    var beta = host && !!rgx && !!rgx.exec(host) || false;
    var zone = beta ? (this.data['zone'] + '/beta') || 'ros' : this.data['zone'] || 'ros';
    var adstest = this.data['cp.adstest'];
    var site = adstest ? 'test_' + NCTAU_array[NCTAU_index] : NCTAU_array[NCTAU_index];
    site = location.href.match(/\/perf\.|\/perf-edit\./) && 'dev_weather_us' || site;
    var adUnit = settings.pathPrefix && NCTAU_array && '/' + NCTAU_array[0] + '/' + site || this.data['ad_unit'];
    var ilabel = this.data['partner_ilabel'];
    var adUnitAndZone = adUnit + '/' + zone;
    var adDivs = this.data['positions'] || [];
    var adPos = this.data['pos'];
    var adSizes = this.data['sizes'];
    var slotSizes = [];
    var multiSlots = [];
    var video_companions = TWC.pco.getNodeValue('ad', 'ad_video_companions');
    var ads_ctrld_clientside = TWC.pco.getNodeValue('ad', 'ads_ctrld_clientside');
    var ads_lazy_load = TWC.pco.getNodeValue('ad', 'ads_lazy_load');
    var static_ads = this.data['static_ads'];
    var browserWidth = jQuery(window).width();
    var oxmaps = this.data['OX_Price_Maps'];
    var lazyAdConfigs = TWC && TWC.Configs && TWC.Configs.lazy_load_ads;
    var lazyLoadAds = (lazyAdConfigs.mobile && browserWidth < 768) || (lazyAdConfigs.tablet && browserWidth > 767 && browserWidth < 1025) || (lazyAdConfigs.desktop && browserWidth > 1024) || browserWidth < 768;
    var formatSlotSizes = function(slotSizes) {
      for (var j = 0, k = slotSizes.length; j < k; j++) {
        slotSizes[j] = slotSizes[j].split('x');

        for (var m = 0, n = slotSizes[j].length; m < n; m++) {
          slotSizes[j][m] = parseInt(slotSizes[j][m]);
        }
      }

      return slotSizes;
    };
    TWC.pco.setNodeValue('ad', 'adUnitAndZone', adUnitAndZone);
    var NCTAU = TWC.pco.getNodeValue('ad', 'NCTAU') || {};
    NCTAU.adUnit = adUnit;
    NCTAU.zone = zone;
    NCTAU.beta = beta;
    TWC.pco.setNodeValue('ad', 'NCTAU', NCTAU);
    TWC.pco.setNodeValue('ad', 'zone', zone);

    for (var l = adDivs.length, i = l - 1; i >= 0; i--) {
      if (video_companions && video_companions[adDivs[i]]) {
        if (adSizes[i] !== 'nl' && adPos[i] !== 'nl') {
          video_companions[adDivs[i]].sizes = formatSlotSizes(adSizes[i].split(','));
          video_companions[adDivs[i]].pos = adPos[i];
        }
        continue;
      }

      if (ads_ctrld_clientside && ads_ctrld_clientside[adDivs[i]]) {
        if (adSizes[i] !== 'nl' && adPos[i] !== 'nl') {
          ads_ctrld_clientside[adDivs[i]].sizes = formatSlotSizes(adSizes[i].split(','));
          ads_ctrld_clientside[adDivs[i]].pos = adPos[i];
        }
        continue;
      }

      if (static_ads && static_ads[adDivs[i]]) {
        if (adSizes[i] !== 'nl' && adPos[i] !== 'nl') {
          static_ads[adDivs[i]].sizes = formatSlotSizes(adSizes[i].split(','));
          static_ads[adDivs[i]].pos = adPos[i];
        }
        continue;
      }

      if (adDivs[i] === 'WX_Hidden') {
        multiSlots.push([adUnit + '/outofpage', 'OutOfPageSlot', adDivs[i], {
          'pos': adPos[i]
        }]);
      } else {
        var wxalerts = TWC.pco.getNodeValue('wx', 'severe'),
        sizes = adSizes[i],
        severeMode = TWC.pco.getNodeValue('ad', 'severe'),
        regex = new RegExp('BZW|WSW|ISW|HSW|LEW|HIW|HUW|TIW|TRW|MAW|SVW|TSAW|TOW'),
        alertStr = typeof wxalerts === 'object' && wxalerts.length && wxalerts.length > 0 && wxalerts.join('-'),
        removeAdSize = regex.test(alertStr) || severeMode === 'y';
        // @todo Should the below if statements be a switch?

        if (adDivs[i] === 'WX_WindowShade' || adDivs[i] === 'WX_Leaderboard') {
          if (removeAdSize && sizes.indexOf('728x50')) {
            sizes = sizes.replace(/,?728x50/i, '');
            adSizes[i] = sizes;
          }
        }

        if (adDivs[i] === 'MW_Position1') {
          if (removeAdSize && sizes.indexOf('300x45')) {
            sizes = sizes.replace(/,?300x45/i, '');
            adSizes[i] = sizes;
          }
        }

        if (adDivs[i] === 'WX_WindowShade' && zone && zone.match(/local_forecasts\/today/)) {
          if (sizes.indexOf('970x250')) {
            sizes = sizes.replace(/,?970x250/i, '');
            adSizes[i] = sizes;
          }
        }

        if (adDivs[i] === 'WX_DriverUnit' && browserWidth > 1088) {
          var tmpAdSizesArray = adSizes[i].split(',');
          var sizeIdx = tmpAdSizesArray.indexOf('679x150');

          if (sizeIdx > -1) {
            tmpAdSizesArray.splice(sizeIdx, 1);
          }

          tmpAdSizesArray.push('728x91');
          tmpAdSizesArray.push('728x90');
          adSizes[i] = tmpAdSizesArray.join(',');
        }

        if (adDivs.indexOf('WX_DriverUnit') > -1 && adDivs[i] === 'WX_Bot300' && browserWidth > 1088) {
          adDivs.splice(i, 1);
          adSizes[i] = 'nl';
        }

        if (lazyLoadAds && ads_lazy_load && ads_lazy_load[adDivs[i]]) {
          if (adSizes[i] !== 'nl' && adPos[i] !== 'nl') {
            ads_lazy_load[adDivs[i]].sizes = formatSlotSizes(adSizes[i].split(','));
            ads_lazy_load[adDivs[i]].pos = adPos[i];

            if (!jQuery.isEmptyObject(oxmaps)) {
              ads_lazy_load[adDivs[i]]['oxPrice'] = oxmaps[adDivs[i]]['price'];
              ads_lazy_load[adDivs[i]]['oxSize'] = 'ox' + oxmaps[adDivs[i]]['size'];
            }
          }
          continue;
        }

        var slotTargeting = {};

        if (adSizes[i] !== 'nl' && adPos[i] !== 'nl') {
          slotSizes = adSizes[i].split(',');
          slotSizes = formatSlotSizes(slotSizes);
          slotTargeting.pos = adPos[i];

          if (oxmaps) {
            slotTargeting['ox' + oxmaps[adDivs[i]]['size']] = oxmaps[adDivs[i]]['price'];
          }

          multiSlots.push([adUnitAndZone, slotSizes, adDivs[i], slotTargeting]);
        }
      }
    }

    multiSlots.reverse();
    this.data['Ad_Slot_Definition'] = multiSlots;
    console.log('multiSlots', multiSlots);
    TWC.PcoUtils.setTiming('multiSlot', (new Date()).getTime());
    var googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];

    if (ilabel) {
      googletag.cmd.push(googletag.pubads().setCategoryExclusion(ilabel));
    }

    googletag.cmd.push(function() {
      TWC.PcoUtils.setTiming('dfpLoaded', (new Date()).getTime());
      console.log('dfpLoaded', new Date().getTime() - windowRenderStartTime);
      TWC.Events.getEvent('dfpLoaded').resolve();
    });
  }
};

var gptHB = (function (config) {
  function gptHB(config, data) {
    gptBase.call(this, config);

    this.data = data;
    this.push = function () {
      var _context = {};
      _context.setTargeting = {};

      for (var key in this.config.map) {
        if (typeof this.data[key] != 'undefined' && this.data[key] != '') {
          var item = this.config.map[key].split(',');
          for (var i = 0; i < item.length; i++) {
            if (item[i]=='slot'
              || item[i]=='gptSlots'
              || item[i]=='height'
              || item[i]=='width'
              || item[i]=='collapseEmptyDivs'
              || item[i]=='setTargeting_slot'
              || item[i]=='setTargeting') {
              _context[item[i]] = this.data[key];
            } else {
              _context.setTargeting[item[i]] = this.data[key];
            }
          }
        }
      }
      if (_context.networkcode && _context.adunit) { _context.slot = '/' + _context.networkcode + '/' + _context.adunit; }

      _context.gptSlots = _context.gptSlots || ((_context.width==='' && _context.height==='')
        ?[[_context.slot, null, _context.divid]]
        :[[_context.slot, [parseInt(_context.width), parseInt(_context.height)], _context.divid]]);

      var googletag = window.googletag || {};

      googletag.cmd.push(function () {
        for (var i = 0; i < _context.gptSlots.length; i++) {
          var slot;
          // handle OutOfPageSlot
          if (_context.gptSlots[i][1]==null || _context.gptSlots[i][1]=='OutOfPageSlot') {
            slot = googletag.defineOutOfPageSlot.apply(this,[_context.gptSlots[i][0],_context.gptSlots[i][2]]).addService(googletag.pubads());
          } else {
            slot = googletag.defineSlot.apply(this,_context.gptSlots[i].slice(0,3)).addService(googletag.pubads());
          }
          var data = _context.gptSlots[i][3] || _context.setTargeting_slot || {};
          for (var key in data) {
            slot.setTargeting(key + '', data[key]);
          }
          if (_context.collapseEmptyDivs=='true') { slot.setCollapseEmptyDiv(true); }

          /// NEW CODE FOR HEADER BIDDER
          window.ls_dfp_slots = window.ls_dfp_slots ||[];
          window.ls_dfp_slots.push(slot);
          /// NEW CODE FOR HEADER BIDDER
        }
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
      googletag.cmd.push(function () {
        for(var key in _context.setTargeting) {
          googletag.pubads().setTargeting(key, _context.setTargeting[key]);
        }
        /// NEW CODE FOR HEADER BIDDER
        if (typeof index_headertag_lightspeed !== 'undefined') {
          var cb = (function(slots, ls_dfp_slots) {
            return function() {
              index_headertag_lightspeed.set_slot_targeting(ls_dfp_slots)
              for (var i = 0; i < slots.length; i++) {
                if (document.getElementById(slots[i][2])) {
                  googletag.display(slots[i][2]);
                }
              }
              window.TWC && TWC.PcoUtils && TWC.PcoUtils.setTiming('pubadsCall', new Date().getTime());
              console.dir('Pubads Call Time : ' + (new Date().getTime() - windowRenderStartTime) / 1000 + 'secs');
            };
          })(_context.gptSlots, window.ls_dfp_slots);
          index_headertag_lightspeed.add_session_end_hook(cb, true);
          index_headertag_lightspeed.refresh();
        } else {
          for (var i = 0; i < _context.gptSlots.length; i++) {
            if (document.getElementById(_context.gptSlots[i][2])) {
              googletag.display(_context.gptSlots[i][2]);
            }
          }
          window.TWC && TWC.PcoUtils && TWC.PcoUtils.setTiming('pubadsCall', new Date().getTime());
          console.dir('Pubads Call Time : ' + (new Date().getTime() - windowRenderStartTime) / 1000 + 'secs');
        }
        /// NEW CODE FOR HEADER BIDDER
      });
    }

    this.setPositions();
    this.setSizes();
    this.setNCTAU();
    this.setZone();
    this.setUgcLookup();
    this.setSponstory();

    this.processSponkeywords();
    this.processCatFamCh();
    this.processPCOcustParams();
    this.appendLocalSevere();
    this.processAdSlots();
  }
  gptHB.prototype = Object.create(gptBase.prototype);
  gptHB.prototype.constructor = gptHB;

  return function (data) {
    return new gptHB(config, data);
  };
})(window.thirdPartyConfig && window.thirdPartyConfig['gpt'] || {});

function tagsObjectResolve() {
  TWC.Events.tagsObjectLoaded = TWC.Events.tagsObjectLoaded || jQuery.Deferred();
  TWC.Events.tagsObjectLoaded.resolve();
  TWC.Events.tealiumLoaded = TWC.Events.tealiumLoaded || jQuery.Deferred();
  TWC.Events.tealiumLoaded.resolve();
}
tagsObjectResolve();
;
function udm_(a) {
  var b = "comScore=", c = document, d = c.cookie, e = "", f = "indexOf", g = "substring", h = "length", i = 2048, j, k = "&ns_", l = "&", m, n, o, p, q = window, r = q.encodeURIComponent || escape;
  if (d[f](b) + 1)
    for (o = 0,
           n = d.split(";"),
           p = n[h]; o < p; o++)
      m = n[o][f](b),
      m + 1 && (e = l + unescape(n[o][g](m + b[h])));
  a += k + "_t=" + +(new Date) + k + "c=" + (c.characterSet || c.defaultCharset || "") + "&c8=" + r(c.title) + e + "&c7=" + r(c.URL) + "&c9=" + r(c.referrer),
  a[h] > i && a[f](l) > 0 && (j = a[g](0, i - 8).lastIndexOf(l),
    a = (a[g](0, j) + k + "cut=" + r(a[g](j + 1)))[g](0, i)),
    c.images ? (m = new Image,
    q.ns_p || (ns_p = m),
      m.src = a) : c.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">")
}
function ns_order(a, b, c) {
  var d = this
    , e = "ns_undefined"
    , f = "length";
  d.toV = function(a) {
    return (new String(a)).replace(/(%3C|%3E|<|>)/gi, "_")
  }
    ,
    d.toF = function(a) {
      var b = parseFloat(a);
      return isNaN(b) ? e : b
    }
    ,
    d.counterURL = a,
    d.clientID = d.toV(b),
    d.orderID = d.toV(c),
    d.l = [],
    d.addLine = function(a, b, c, g, h, i) {
      d.l[d.l[f]] = {
        ns_prod_id: a ? a : e,
        ns_brand: b ? b : e,
        ns_prod_grp: c ? c : e,
        ns_shop: g ? g : e,
        ns_qty: d.toF(h),
        ns_prod_price: i ? i : 0
      }
    }
    ,
    d.sendOrder = function() {
      var a = "ns_order_id_" + d.orderID + "=true";
      if (!!d.orderID && !ns_.order_sent[d.orderID] && document.cookie.indexOf(a) == -1) {
        ns_.order_sent[d.orderID] = !0,
          document.cookie = a;
        var b = d.counterURL + "&ns_commerce=true&ns_ec_sv=6.1202.02&ns_type=hidden" + "&ns_client_id=" + d.clientID + "&ns_order_id=" + d.orderID + "&ns_orderlines=" + d.l[f];
        for (var c = 0, a = d.l[f]; c < a; c++) {
          var e = d.l[c]
            , g = b + "&ns_orderline_id=" + (c + 1);
          for (var h in e)
            g += "&" + h + "=" + escape(d.toV(e[h]));
          ns_.batch(g)
        }
      }
    }
}
ns_ = window.ns_ || {};
ns_.batch = function(a) {
    var b, c, d = document, e = d.location;
    a = a + "&ns__t=" + (new Date).getTime(),
      a = a + "&ns_c=" + (d.characterSet ? d.characterSet : d.defaultCharset ? d.defaultCharset : "") + "&ns_ti=" + escape(d.title) + "&ns_jspageurl=" + escape(e && e.href ? e.href : d.URL) + "&ns_referrer=" + escape(d.referrer);
    var f = 2040
      , g = a.lastIndexOf("&");
    if (a.length > f && g != -1) {
      while (g > f)
        a = a.substring(0, g),
          g = a.lastIndexOf("&");
      a = a.substring(0, g + 1) + "ns_cut=" + a.substr(g + 1, f - g - 1)
    }
    var h = 'img height="1" width="1"  style="position:absolute;top:0;left:0;"';
    if (d.layers)
      d.images ? (new Image).src = a : d.write("<" + h + ' src="' + a + '">');
    else {
      var i = function(a) {
        var b = document.all(a);
        b && b.length && (b = b[0]);
        return b
      }
        , j = function(a) {
        c.onload = c.onerror = null;
        if (ns_.pipe.length > 0) {
          var e = ns_.pipe.join("")
            , f = e.indexOf("src")
            , g = e.indexOf('"', f)
            , h = e.indexOf('"', g + 1)
            , k = e.substring(g + 1, h)
            , e = e.substring(0, f) + 'id="ns_1"' + e.substring(h + 1);
          ns_.pipe = [],
            b.innerHTML = e,
            c = d.getElementById ? d.getElementById("ns_1") : i("ns_1"),
            c.onload = j,
            c.src = k
        }
      };
      rs = d.readyState,
        ns_ = typeof ns_ != "undefined" ? ns_ : {},
        ns_.pipe = typeof ns_.pipe != "undefined" ? ns_.pipe : [],
        b = d.getElementById ? d.getElementById("ns_") : i("ns_");
      if (!b) {
        var k = ["<", 'div id="ns_" style="position:absolute;top:0;left:0;z-index:32766;background-color:transparent !important"><', h, ' id="ns_1"></', "div>"].join("");
        rs == "complete" ? d.body.innerHTML += k : d.write(k)
      }
      c = d.getElementById ? d.getElementById("ns_1") : i("ns_1");
      if (c && c.onload)
        ns_.pipe[ns_.pipe.length] = "<" + h + ' src="' + a + '">';
      else if (b || c)
        b && (b.innerHTML = "<" + h + ' id="ns_1">'),
          b = d.getElementById ? d.getElementById("ns_") : i("ns_"),
          c = d.getElementById ? d.getElementById("ns_1") : i("ns_1"),
          c.onload = c.onerror = j,
          c.src = a
    }
  };
ns_.order_sent = ns_.order_sent || {};
/*@cc_on@if(@_jscript_version<5.6)ns_={Form:function(){}};ns_.Form.onFailure=function(){};ns_.Form.prototype.onFailure=function(){};@else@*/
if (typeof (ns_) == "undefined") {
  ns_ = new Object()
}
ns_.extend = function(a, c) {
  for (var b in c) {
    a[b] = c[b]
  }
  return a
};
ns_.encode = self.encodeURIComponent ? self.encodeURIComponent : function(a) {
  return escape(a).replace(/\//g, "%2F")
};
ns_.b = {};
ns_.b.ie = /*@cc_on!@*/
  false;
ns_.b.ie9 = ns_.b.ie && document.addEventListener;
ns_.b.sf = navigator.vendor ? /apple/i.test(navigator.vendor) : false;
ns_.b.ch = window.chrome ? true : false;
ns_.b.ff = /firefox/i.test(navigator.userAgent);
ns_.b.op = window.opera ? true : false;
if (typeof (ns_) == "undefined") {
  ns_ = new Object();
}
ns_.dt = {
  initDate: new Date().getTime(),
  lastRun: new Date().getTime(),
  delta: 0,
  intervalID: null,
  intervalTime: 1000,
  intervalRuns: 0,
  timedObserver: function() {
    var a = ns_.dt.getTime();
    ns_.dt.intervalID = setTimeout(ns_.dt.timedObserver, ns_.dt.intervalTime);
    ns_.dt.intervalRuns++;
    var b = a - ns_.dt.lastRun - ns_.dt.intervalTime;
    if (b > (ns_.dt.intervalTime * 2) || b < -(ns_.dt.intervalTime * 2)) {
      ns_.dt.delta += b;
      a -= b
    }
    ns_.dt.lastRun = a
  },
  getTime: function() {
    var a = new Date().getTime();
    return a - ns_.dt.delta
  }
};
ns_.dt.timedObserver();
ns_.extend(Function.prototype, (function() {
  var e = Array.prototype.slice;
  function d(k, h) {
    var j = k.length
      , i = h.length;
    while (i--) {
      k[j + i] = h[i]
    }
    return k
  }
  function f(i, h) {
    i = e.call(i, 0);
    return d(i, h)
  }
  function a() {
    return this.STargumentIsSuper() ? ["$super"] : [""]
  }
  function c() {
    return /^[\s\(]*function[^(]*\(\s*\$super/.test(this.toString())
  }
  function b(j) {
    if (arguments.length < 2 && typeof arguments[0] == "undefined") {
      return this
    }
    var h = this
      , i = e.call(arguments, 1);
    return function() {
      var k = f(i, arguments);
      return h.apply(j, k)
    }
  }
  function g(i) {
    var h = this;
    return function() {
      var j = d([h.STbind(this)], arguments);
      return i.apply(this, j)
    }
  }
  return {
    STargumentNames: a,
    STargumentIsSuper: c,
    STbind: b,
    STwrap: g
  }
})());
ns_.Class = {
  extend: function(c, a) {
    if (arguments.length == 1) {
      a = c,
        c = null
    }
    if (typeof (c) == "function") {
      var b = function() {
        return this.initialize.apply(this, arguments)
      };
      b.prototype = new c()
    } else {
      var b = function() {}
    }
    if (a) {
      ns_.Class.inherit(b.prototype, a)
    }
    return b
  },
  inherit: function(e, b, h) {
    if (arguments.length == 3) {
      var c = e[h]
        , d = b[h]
        , g = d;
      var a;
      if (e && g.STargumentIsSuper()) {
        d = (function(f) {
          return function() {
            return f.apply(this, arguments)
          }
        })(c).STwrap(g)
      } else {
        d = function() {
          var j = this.parent;
          this.parent = c;
          var f = g.apply(this, arguments);
          j ? this.parent = j : delete this.parent;
          return f
        }
      }
      d.valueOf = function() {
        return g
      }
      ;
      d.toString = function() {
        return g.toString()
      }
      ;
      e[h] = d
    } else {
      for (var i in b) {
        if (e[i] && typeof (b[i]) == "function") {
          ns_.Class.inherit(e, b, i)
        } else {
          e[i] = b[i]
        }
      }
    }
    return e
  }
};
if (typeof (ns_.ar) == "undefined") {
  ns_.ar = {
    push: function() {
      for (var b = 0, a = arguments.length; b < a; b++) {
        this[this.length] = arguments[b]
      }
    },
    splice: function() {
      var j = ns_.ar.create()
        , d = arguments;
      if (d.length <= 1) {
        return j
      } else {
        if (d.length > 2) {
          for (var f = 2, c = d.length; f < c; f++) {
            j.push(d[f])
          }
        }
      }
      var b = this.slice(0, d[0]);
      var e = this.slice(d[0], d[0] + d[1]);
      var h = this.slice(d[0] + d[1]);
      var g = b.concat(j, h);
      this.length = 0;
      for (var f = 0, c = g.length; f < c; f++) {
        this.push(g[f])
      }
      return e
    },
    shift: function() {
      for (var d = 0, a = this[0], c = this.length - 1; d < c; d++) {
        this[d] = this[d + 1]
      }
      this.length--;
      return a
    }
  }
}
ns_.ar.create = function() {
  var c = [];
  for (var a in c) {
    delete c[a]
  }
  for (var d = 0, b = arguments.length; d < b; d++) {
    c[c.length] = arguments[d]
  }
  return c
};
ns_.ar.indexOf = function(c, b) {
  var a = -1;
  ns_.ar.each(c, function(e, d) {
    if (e == b) {
      a = d
    }
  }, this);
  return a
};
ns_.ar.merge = function() {
  var a = ns_.ar.create();
  ns_.ar.each(arguments, function(b) {
    ns_.ar.each(b, function(d, c) {
      a[c] = d
    })
  }, this);
  return a
};
ns_.ar.pair = function(c, b) {
  var a = ns_.ar.create();
  ns_.ar.each(b, function(e, d) {
    a.push(d + c + e)
  }, this);
  return a
};
ns_.ar.each = function(g, f, d) {
  try {
    if (typeof (f) == "function") {
      d = typeof (d) != "undefined" ? d : this.each.caller;
      if (typeof g.length != "number" || typeof g[0] == "undefined") {
        var b = typeof (g.__proto__) != "undefined";
        for (var c in g) {
          if ((!b || (b && typeof (g.__proto__[c]) == "undefined")) && typeof g[c] != "function") {
            f.call(d, g[c], c)
          }
        }
      } else {
        for (var c = 0, a = g.length; c < a; c++) {
          f.call(d, g[c], c)
        }
      }
    }
  } catch (h) {}
};
ns_.st = {
  camel: function(e, d) {
    if (!d) {
      d = " "
    }
    var b = e.split(d);
    for (var c = 0, a = b.length; c < a; c++) {
      b[c] = b[c].charAt(0).toUpperCase() + b[c].substr(1).toLowerCase()
    }
    return b.join("")
  }
};
if (typeof (ns_.dom) == "undefined") {
  ns_.dom = {
    cache: {},
    getElementsByTagName: function(b, c) {
      var a, b = b, c = document.getElementById(c) || document;
      if (c.getElementsByTagName) {
        a = c.getElementsByTagName(b)
      } else {
        if (c.all && c.all.tags) {
          a = c.all.tags(b)
        }
      }
      return a || []
    },
    addEvent: (document.addEventListener) ? (function(a, c, b) {
        a.addEventListener(c, b, false);
        if (ns_.dom.cache) {
          ns_.dom.cache.add(a, c, b, false)
        }
        return true
      }
    ) : (document.attachEvent) ? (function(a, c, b) {
        var d;
        if (typeof a.addEventListener != "undefined") {
          d = a.addEventListener(c, b)
        } else {
          c = (c.substring(0, 1) == c.substring(0, 1).toUpperCase() ? c : "on" + c);
          d = a.attachEvent(c, b)
        }
        if (d && ns_.dom.cache) {
          ns_.dom.cache.add(a, c, b, false)
        }
        return d
      }
    ) : (function(c, b, a) {
        if (document.layers && c == document && b.toLowerCase() == "click") {
          b = "mouseup";
          c.captureEvents(Event.MOUSEUP)
        }
        var d = c["on" + b];
        if (typeof d != "function") {
          c["on" + b] = a
        } else {
          c["on" + b] = function(f) {
            if (d) {
              d(f)
            }
            a(f)
          }
        }
        if (ns_.dom.cache) {
          ns_.dom.cache.add(c, b, a, false)
        }
        return true
      }
    ),
    removeEvent: function(a, c, b) {
      ns_.dom.cache.del(a, c, b)
    }
  }
}
ns_.dom.cache = {
  _events: ns_.ar.create(),
  add: function(b, d, c, a) {
    this._events.push(arguments)
  },
  del: function(a, c, b) {
    ns_.ar.each(this._events, function(e, d) {
      if (!!!b && e[0] == a && e[1] == c) {
        this.detach(e[0], e[1], e[2], e[3]);
        this._events.splice(d, 1);
        throw "Event found"
      } else {
        if (!!b && e[0] == a && e[1] == c && e[2] == b) {
          this.detach(e[0], e[1], e[2], e[3]);
          this._events.splice(d, 1);
          throw "Event found"
        }
      }
    }, ns_.dom.cache)
  },
  detach: function(b, d, c, a) {
    if (typeof b.removeEventListener != "undefined") {
      if (ns_.b.ie) {
        b.removeEventListener(d, c)
      } else {
        b.removeEventListener(d, c, a)
      }
    } else {
      if (b.detachEvent) {
        b.detachEvent(d, c)
      }
    }
  },
  flush: function() {
    try {
      ns_.ar.each(this._events, function(c, b) {
        if (typeof c != "undefined") {
          this.detach(c[0], c[1], c[2], c[3]);
          this._events.splice(b, 1)
        }
      }, ns_.dom.cache)
    } catch (a) {}
  }
};
ns_.dom.addEvent(window, "unload", ns_.dom.cache.flush.STbind(ns_.dom.cache));
ns_.Error = {};
ns_.Class.extend((function() {
  var c = false;
  function e(g) {
    c = !!g
  }
  function f(g) {
    var h = [new Date()];
    h = h.concat([("0" + h[0].getHours()).slice(-2), ("0" + h[0].getMinutes()).slice(-2), ("0" + h[0].getSeconds()).slice(-2), ("00" + h[0].getMilliseconds()).slice(-3)]);
    g = f.caller[0] = "[" + h[1] + ":" + h[2] + ":" + h[3] + "." + h[4] + "] " + g;
    return true
  }
  function b(j) {
    for (var h = 0, g = arguments.length; h < g; h++) {
      f(arguments[h])
    }
    a()
  }
  function d(j) {
    for (var h = 0, g = arguments.length; h < g; h++) {
      f(arguments[h])
    }
    a();
    if (c) {
      throw j
    }
    return false
  }
  function a() {
    if (c && typeof (console) == "object") {
      if (console[a.caller.name]) {
        console[a.caller.name].apply(console, a.caller.arguments)
      } else {
        if (console.log) {
          for (var h = 0, g = a.caller.arguments.length; h < g; h++) {
            console.log(a.caller.arguments[h])
          }
        }
      }
    } else {
      if (c && (!a.caller.name || a.caller.name == "error")) {
        for (var h = 0, g = a.caller.arguments.length; h < g; h++) {
          alert(a.caller.arguments[h])
        }
      }
    }
  }
  ns_.Class.inherit(ns_.Error, {
    log: b,
    debug: b,
    error: d,
    setDebug: e
  })
})());
ns_.Lifecycle = ns_.Class.extend(function() {}, {
  log: ns_.Error.error,
  current: null,
  states: null,
  params: null,
  initialize: function(a, b) {
    if (typeof a != "string" || a.length < 1) {
      this.log("ns_.Lifecycle: EmptyStates")
    }
    if (typeof b != "function") {
      this.log("ns_.Lifecycle: InvalidStartCallback")
    }
    a = a.split(" ");
    ns_.ar.each(a, function(d, c) {
      if (!/^\w+$/i.test(d)) {
        a.splice(c, 1)
      }
    }, this);
    if (a.length < 1) {
      this.log("ns_.Lifecycle: InvalidStates")
    }
    this.states = a;
    this.current = "";
    this.params = {}
  },
  property: function(a, b, c) {
    if (!a) {
      this.log("ns_.Lifecycle: EmptyName")
    }
    this["get" + ns_.st.camel(a)] = function() {
      return this.params[a]
    }
    ;
    if (!b) {
      this["set" + ns_.st.camel(a)] = function(d) {
        this.params[a] = d
      }
    } else {
      this["set" + ns_.st.camel(a)] = b
    }
    if (c) {
      this["set" + ns_.st.camel(a)].call(this, c)
    } else {
      this["set" + ns_.st.camel(a)].call(this, "")
    }
  },
  doChecks: function(b, a) {
    if (!(this.states && this.states.length > 0)) {
      throw "ns_.Lifecycle: EmptyStates"
    }
    if (ns_.ar.indexOf(this.states, b) == -1) {
      throw "ns_.Lifecycle: InvalidMutation"
    }
    if ((typeof a != "function") && (typeof a != "object")) {
      throw "ns_.Lifecycle: InvalidEntitlement"
    }
  },
  creation: function(b, d, f, a) {
    try {
      this.doChecks(f, a)
    } catch (c) {
      this.log(c)
    }
    ns_.ar.each(d, function(g, e) {
      this.property(e, g)
    }, this);
    this[b] = (function(k, l, g, i) {
        i = i || {};
        var h = ns_.ar.create();
        ns_.ar.each(k, function(n, m) {
          if (typeof (i[m]) != "undefined") {
            try {
              this["set" + ns_.st.camel(m)].call(this, i[m])
            } catch (o) {
              h.push(o)
            }
          }
        }, this);
        if (this.current != "") {
          h.push("ns_.Lifecycle: InvalidSourceState")
        }
        if (!h.length) {
          try {
            g.apply(this);
            this.current = String(l);
            ns_.Error.log("ns_.Lifecycle: Created at '" + l + "'")
          } catch (j) {
            this.log(j);
            return false
          }
          return true
        }
        return false
      }
    ).STbind(this, d, f, a)
  },
  transition: function(b, d, g, f, a) {
    try {
      this.doChecks(f, a)
    } catch (c) {
      this.log(c)
    }
    ns_.ar.each(d, function(h, e) {
      this.property(e, h)
    }, this);
    this[b] = (function(l, n, m, h, j) {
        j = j || {};
        var i = ns_.ar.create();
        ns_.ar.each(l, function(p, o) {
          if (typeof (j[o]) != "undefined") {
            try {
              this["set" + ns_.st.camel(o)].call(this, j[o])
            } catch (q) {
              i.push(q)
            }
          }
        }, this);
        if (ns_.ar.indexOf(n.split(" "), this.current) < 0) {
          i.push("ns_.Lifecycle: InvalidSourceState")
        }
        if (!i.length) {
          try {
            h.apply(this);
            this.current = String(m);
            ns_.Error.log("ns_.Lifecycle: Transitioning to '" + m + "'")
          } catch (k) {
            this.log(k);
            return false
          }
          return true
        }
        return false
      }
    ).STbind(this, d, g, f, a)
  }
});
ns_.Form = ns_.Class.extend(function() {}, {
  VERSION: "2.1204.27",
  conf: {
    DEBUG: false,
    TIMER_DELAY: 500,
    LABEL_NS: "ns_fo_",
    INIT_TIMER: 30000,
    SUBMIT_TIMER: 1000,
    FAILURE_TIMER: 1000,
    pixelUrl: "",
    labels: {}
  },
  init: null,
  start: null,
  id: null,
  tag: null,
  fields: null,
  settings: null,
  lastField: null,
  validations: null,
  lastValidated: null,
  lastValidation: null,
  sequence: null,
  state: null,
  wasSubmitted: null,
  watcher: null,
  fix: null,
  fail: null,
  button: null,
  pixelUrl: function() {
    var c = this.conf.pixelUrl || (self.ns_p && typeof ns_p.src == "string" ? ns_p.src : (self.ns_pixelUrl ? ns_pixelUrl : ""));
    var f = c.indexOf("&");
    if (f != -1) {
      var b = c.substring(0, f)
        , e = c.substr(f + 1).split("&");
      for (var d = 0, a = e.length; d < a; d++) {
        if (/(c[23456]|name)/.test(e[d].split("=")[0])) {
          b += "&" + e[d]
        }
      }
      return b
    } else {
      if (c.indexOf("?") == -1 || c.charAt(c.length - 1) == "?") {
        return c + ((c.charAt(c.length - 1) != "?") ? "?" : "") + this.id
      }
    }
    return c
  },
  initialize: function(g, l, e) {
    this.init = ns_.dt.getTime();
    var c = (function() {
        this.state = new ns_.Lifecycle("inactive active failed complete abandoned",function() {}
        );
        this.state.property("form", null, this);
        this.state.creation("onInit", {}, "inactive", function() {
          try {
            var n = this.params.form;
            n.start = 0;
            n.validations = ns_.ar.create();
            n.wasSubmitted = false;
            n.watch();
            if (!self.ns_p && !self.ns_pixelUrl && !n.conf.pixelUrl) {
              ns_.Error.log("ns_.Form: Attention, no pixelUrl found")
            }
          } catch (o) {
            ns_.Error.error(o)
          }
        });
        var f = {
          lastField: null,
          type: null
        };
        this.state.transition("onInput", f, "active inactive failed", "active", function() {
          try {
            var n = this.params.lastField
              , o = this.params.type
              , p = this.params.form;
            if (!p.start) {
              p.start = ns_.dt.getTime()
            }
            if (n != null && n != undefined) {
              if (n.getType()) {
                p.lastField = n
              }
              n.value()
            }
            if (o && o != "blur") {
              p.countDown()
            }
          } catch (q) {
            ns_.Error.error(q)
          }
        });
        this.state.transition("onError", {
          field: null,
          message: null
        }, "inactive active failed complete abandoned", "failed", function() {
          try {
            var p = this.params.form;
            if (!p.shallTransmit("failure")) {
              return
            }
            var o = p.field(this.params.field);
            if (o.length > 0) {
              o = o[0]
            } else {
              throw "ns_.Form.onFailure(): unrecognized field [" + this.params.field + "]"
            }
            var r = ns_.ar.create(o.id, this.params.message);
            p.validations.push(r);
            p.lastValidated = o;
            p.lastValidation = this.params.message;
            if (p.wasSubmitted && p.wasSubmitted.type == ns_.Form.SUBMIT) {
              p.sequence--;
              p.wasSubmitted = false
            }
            p.fix = undefined;
            p.fail = ns_.dt.getTime();
            var n = new ns_.Form.Measurement(p,ns_.Form.FAILURE);
            ns_.Form.sitestat(p.pixelUrl(), n.labels);
            p.values()
          } catch (q) {
            ns_.Error.error(q)
          }
        });
        this.state.transition("onSubmit", {}, "inactive active failed", "complete", function() {
          try {
            var p = this.params.form
              , r = ns_.dt.getTime();
            if (!p.shallTransmit("submit")) {
              return
            }
            if (!isNaN(p.fail) && r - p.fail < p.conf.FAILURE_TIMER) {
              throw "ns_.Form: Canceled submit colliding with failures"
            } else {
              p.fail = undefined
            }
            var o = new ns_.Form.Measurement(p,ns_.Form.SUBMIT);
            p.wasSubmitted = o
          } catch (q) {
            ns_.Error.error(q)
          }
        });
        this.state.transition("onAbandon", {}, "active failed", "abandoned", function() {
          try {
            var o = this.params.form;
            if (!o.shallTransmit("abandon")) {
              return
            }
            var n = new ns_.Form.Measurement(o,ns_.Form.ABANDON);
            ns_.Form.sitestat(o.pixelUrl(), n.labels)
          } catch (p) {
            ns_.Error.error(p)
          }
        })
      }
    ).STbind(this);
    l = l || {};
    e = e || {};
    ns_.ar.each(this.conf, function(n, f) {
      this.conf[f] = (typeof (e[f]) != "undefined") ? e[f] : n
    }, this);
    ns_.Error.setDebug(this.conf.DEBUG);
    var k = "ns_.Form(): '" + g + "' was provided, but no form was found";
    if (!g || g == "") {
      ns_.Error.error("ns_.Form(): argument formName is blank. Provide it or an asterisk * for all");
      return new Boolean(0)
    } else {
      if (typeof g == "object") {
        var i = ns_.Form.get(g);
        if (i) {
          return i
        }
        this.tag = g;
        this.id = g = this.fetchID(this.tag)
      } else {
        if (g == "*") {
          var h = ns_.dom.getElementsByTagName("FORM");
          if (h.length > 0) {
            this.id = this.fetchID(h[0]);
            this.tag = h[0];
            ns_.ar.each(h, function(f) {
              new ns_.Form(f,l,e)
            }, this);
            if (ns_.Form.get(this.id)) {
              return ns_.Form.get(this.id)
            }
          } else {
            if (!ns_.Form.loaded) {
              ns_.Form.cache.push(ns_.ar.create(g, l, e))
            } else {
              ns_.Error.error(k)
            }
            return new Boolean(0)
          }
        } else {
          if (typeof g == "string") {
            if (!ns_.Form.get(g)) {
              var d = this.form(g);
              if (d) {
                this.tag = d;
                this.id = this.fetchID(this.tag)
              } else {
                if (!ns_.Form.loaded) {
                  ns_.Form.cache.push(ns_.ar.create(g, l, e))
                } else {
                  ns_.Error.error(k)
                }
                return new Boolean(0)
              }
            } else {
              return ns_.Form.get(g)
            }
          }
        }
      }
    }
    this.sequence = 1;
    this.fail = undefined;
    this.fix = undefined;
    this.watcher = 0;
    this.id = this.id || "";
    this.fields = ns_.ar.create();
    this.anchors = ns_.ar.create();
    if (typeof this.tag == "undefined") {
      return new Boolean(0)
    }
    ns_.Form.store.push(this);
    this.settings = this.defaults();
    var b, j, m = ns_.Form.Element, a = this.defaults;
    ns_.ar.each(this.tag.elements, function(f) {
      new m(f,this,a(false))
    }, this);
    ns_.ar.each(ns_.dom.getElementsByTagName("A", this.tag), function(f) {
      new m(f,this,a(false))
    }, this);
    this.parseFields(l);
    c();
    this.isVisible = this.isVisible.STbind(this);
    ns_.dom.addEvent(this.tag, "submit", (function() {
        this.state.onSubmit()
      }
    ).STbind(this));
    ns_.dom.addEvent(this.tag, "mousedown", (function() {
        this.state.onInput({
          lastField: null,
          type: null
        })
      }
    ).STbind(this));
    this.state.onInit()
  },
  parseFields: function(a) {
    var b = ns_.Form.Element
      , c = this.defaults;
    if (typeof a != "undefined" && typeof a == "object") {
      ns_.ar.each(a, function(e, d) {
        if (d == "*" || (d == 0 && e == "*")) {
          this.settings = c(a["*"]);
          ns_.ar.each(this.tag.elements, function(f) {
            new b(f,this,c(this.settings))
          }, this)
        } else {
          if (d != "") {
            switch (d) {
              case "abandon":
                this.settings = c(a);
                break;
              case "submit":
                this.settings = c(a);
                break;
              case "failure":
                this.settings = c(a);
                break;
              case "password":
                this.settings = c(a);
                break;
              case "hidden":
                this.settings = c(a);
                break;
              default:
                ns_.ar.each(this.element(d), function(f) {
                  new b(f,this,c(a[d]))
                }, this);
                break
            }
          }
        }
      }, this)
    } else {
      if (a == "*") {
        this.settings = c();
        ns_.ar.each(this.tag.elements, function(d) {
          new b(d,this,c(this.settings))
        }, this)
      }
    }
  },
  watch: function() {
    if (this.watcher == 0 && (this.state.current == "" || this.state.current == "inactive")) {
      this.watcher = setTimeout((function(a) {
        return function() {
          if (a.current == "inactive" && a.params.form.isVisible() && ns_.Form.wfocus) {
            a.onInput({
              lastField: null,
              type: null
            })
          }
          a.params.form.watcher = 0
        }
      })(this.state), this.conf.INIT_TIMER)
    }
  },
  unwatch: function() {
    if (!isNaN(this.watcher)) {
      clearTimeout(this.watcher);
      this.watcher = 0
    }
  },
  defaults: function(b) {
    if (typeof conf == "undefined") {
      conf = null
    } else {
      if (!b) {
        b = false
      }
    }
    var a = ns_.extend({
      submit: true,
      abandon: false,
      failure: false,
      password: {
        submit: false,
        abandon: false,
        failure: false
      },
      hidden: {
        submit: false,
        abandon: false,
        failure: false
      }
    }, this.settings);
    if (b != null && typeof b == "object") {
      ns_.ar.each(b, function(d, c) {
        if (typeof d != "undefined") {
          switch (c) {
            case "submit":
            case "abandon":
            case "failure":
              a[c] = !!d;
              break;
            case "password":
            case "hidden":
              if (d != null && typeof d == "object") {
                ns_.ar.each(d, function(f, e) {
                  if (typeof f != "undefined") {
                    switch (e) {
                      case "submit":
                      case "abandon":
                      case "failure":
                        a[c][e] = !!f;
                        break;
                      default:
                        break
                    }
                  }
                }, this)
              } else {
                if (d == true) {
                  a[c] = {
                    submit: true,
                    abandon: true,
                    failure: true
                  }
                }
              }
            default:
              break
          }
        }
      }, this)
    } else {
      if (b == false) {
        a = {
          submit: false,
          abandon: false,
          failure: false,
          hidden: {
            submit: false,
            abandon: false,
            failure: false
          },
          password: {
            submit: false,
            abandon: false,
            failure: false
          }
        }
      }
    }
    return a
  },
  shallTransmit: function(b) {
    var a = false;
    try {
      if (this.settings[b] || this.settings.hidden[b] || this.settings.password[b]) {
        a = true
      }
    } catch (c) {}
    return a
  },
  form: function(b) {
    var a, c, b = b || "";
    c = ns_.dom.getElementsByTagName("FORM");
    ns_.ar.each(c, function(d) {
      if (d.name == b || d.id == b) {
        a = d
      }
    }, this);
    return a
  },
  element: function(b) {
    var a = ns_.ar.create()
      , b = b || "";
    ns_.ar.each(this.tag.elements, function(c) {
      if (c.name == b || c.id == b) {
        a.push(c)
      }
    }, this);
    return a
  },
  field: function(b) {
    var a = ns_.ar.create()
      , b = b || "";
    ns_.ar.each(this.fields, function(c) {
      if (c.id == b) {
        a.push(c)
      }
    }, this);
    return a
  },
  fetchID: function(a) {
    if (a.name != "" && typeof a.name == "string") {
      return a.name
    } else {
      if (a.id != "" && typeof a.id == "string") {
        return a.id
      } else {
        a.id = "form" + ns_.ar.indexOf(document.forms, a);
        return a.id
      }
    }
  },
  registerField: function(c) {
    var b = ns_.ar.create();
    ns_.ar.each(this.fields, function(d) {
      if (d.id == c.id && (d.tag.type || "").toLowerCase() != "radio") {
        b.push(d)
      }
    }, this);
    if (!b.length) {
      this.fields.push(c);
      ns_.dom.addEvent(c.tag, "keyup", c.onUserAction);
      ns_.dom.addEvent(c.tag, "mousedown", c.onUserAction);
      ns_.dom.addEvent(c.tag, "change", c.onUserAction);
      ns_.dom.addEvent(c.tag, "blur", c.onUserAction);
      ns_.dom.addEvent(c.tag, "focus", c.onUserAction);
      var a = c.tag.type;
      if (a == "submit" || a == "button" || a == "image") {
        this.button = true
      }
    } else {
      ns_.ar.each(b, function(d) {
        d.setup(c.settings)
      }, this);
      delete c
    }
  },
  values: function() {
    var a = ns_.ar.create();
    ns_.ar.each(this.fields, function(b) {
      a[b.id] = b.value()
    }, this);
    return a
  },
  onUnload: function() {
    if (this.wasSubmitted == false && !this.button && (!isNaN(this.fix) && ns_.dt.getTime() - this.fix < this.conf.SUBMIT_TIMER)) {
      this.fix = undefined;
      this.state.onSubmit()
    }
    if (!this.wasSubmitted) {
      this.state.onAbandon()
    } else {
      ns_.Form.sitestat(this.pixelUrl(), this.wasSubmitted.labels);
      this.wasSubmitted = false
    }
  },
  countDown: function() {
    if (!this.button) {
      this.fix = ns_.dt.getTime()
    }
  },
  onFailure: function(b, a) {
    this.state.onError({
      field: b,
      message: a
    })
  },
  style: function(b) {
    var a = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
      a = document.defaultView.getComputedStyle(this.tag, "").getPropertyValue(b)
    } else {
      if (this.tag.currentStyle) {
        b = b.replace(/\-(\w)/g, function(c, d) {
          return d.toUpperCase()
        });
        a = this.tag.currentStyle[b]
      }
    }
    return a
  },
  isVisible: function() {
    var b = this.style("display")
      , a = this.style("visibility");
    if (b == "none" || a == "hidden") {
      return false
    }
    return true
  },
  beat: function() {
    var c = false
      , b = document.getElementsByName(this.id)
      , d = document.getElementById(this.id) || b[0];
    if (b.length < 1 && !d) {
      c = true
    } else {
      if (!this.isVisible()) {
        c = true
      }
    }
    if (c) {
      this.onUnload()
    }
  }
});
ns_.Form.SUBMIT = "submit";
ns_.Form.ABANDON = "submitabandon";
ns_.Form.FAILURE = "submitvalfail";
ns_.Form.start = typeof (ns_loadingtime1) != "undefined" ? ns_loadingtime1 : ns_.dt.getTime();
ns_.Form.rx = {
  TypeLb: /type/i,
  AllForms: /\*/,
  FormElm: /^(input|select|textarea|a|button)$/i,
  InputElm: /^(input|select|textarea)$/i,
  InputElmTy: /[^(submit|reset|button)]/i,
  Input: /^input$/i,
  Hidden: /^inputhidden$/i,
  Password: /^inputpassword$/i,
  Radio: /^inputradio$/i,
  Checkbox: /^inputcheckbox$/i,
  TextArea: /^textarea$/i,
  SelectBox: /^select$/i,
  Failure: /^submitvalfail$/i,
  TLDrx: /^(https?\:)?(\/\/)?[^\/\?]+[\/\?]/i
};
ns_.Form.store = ns_.ar.create();
ns_.Form.cache = ns_.ar.create();
ns_.Form.loaded = false;
ns_.Form.get = function(b) {
  var a, b = b || 0;
  ns_.ar.each(ns_.Form.store, function(d, c) {
    if (typeof (b) == "string") {
      if (d.id == b) {
        a = d
      }
    } else {
      if (typeof (b) == "object") {
        if (d == b || d.tag == b) {
          a = d
        }
      } else {
        if (!isNaN(b)) {
          if (b == c) {
            a = d
          }
        }
      }
    }
  }, this);
  return a
};
ns_.Form.beat = function() {
  ns_.ar.each(ns_.Form.store, function(a) {
    a.beat()
  }, this)
};
if (ns_.b.ff || ns_.b.sf) {
  ns_.dom.addEvent(document, "DOMSubtreeModified", function() {
    ns_.Form.beat()
  })
}
ns_.dom.addEvent(document, "mousedown", ns_.Form.beat);
ns_.Form.onFailure = function(b, d, a) {
  if (b == null || b == "") {
    ns_.ar.each(ns_.Form.store, function(e) {
      e.onFailure(d, a)
    }, this)
  } else {
    var c = ns_.Form.get(b);
    if (c != null) {
      c.onFailure(d, a)
    }
  }
};
ns_.Form.onLoad = function(g) {
  var d = ns_.Form;
  d.loaded = true;
  if (!d.store.length && d.cache.length) {
    for (var c = 0, a = d.cache.length; c < a; c++) {
      var g = d.cache[c];
      new d(g[0],g[1],g[2])
    }
  } else {
    if (!d.store.length) {
      var b = function(i, f, e) {
        ns_.ar.each(f, function(j) {
          var k = j.className.split(" ");
          ns_.ar.each(k, function(l) {
            if (l == i) {
              e(j)
            }
          }, this)
        }, this)
      };
      var h = ns_.dom.getElementsByTagName("FORM");
      if (h.length > 0) {
        b("ns_", h, function(e) {
          new ns_.Form(e)
        });
        ns_.ar.each(ns_.Form.store, function(i) {
          var e = {}
            , f = {
            abandon: true,
            failure: true
          };
          b("ns_", i.tag.elements, function(j) {
            e[j.id || j.name] = f
          });
          i.parseFields(e);
          i.settings = i.defaults(f)
        }, this)
      }
    }
  }
};
ns_.Form.onUnload = function(a) {
  ns_.ar.each(ns_.Form.store, function(b) {
    b.onUnload()
  }, this)
};
ns_.dom.addEvent(window, "beforeunload", ns_.Form.onUnload);
ns_.dom.addEvent(window, "load", ns_.Form.onLoad);
ns_.dom.addEvent(window, "unload", ns_.Form.onUnload);
ns_.Form.wfocus = true;
ns_.dom.addEvent(window, ns_.ie ? "focusout" : "blur", function(a) {
  ns_.Form.wfocus = false;
  ns_.ar.each(ns_.Form.store, function(b) {
    b.unwatch()
  })
});
ns_.dom.addEvent(window, ns_.ie ? "focusin" : "focus", function(a) {
  ns_.Form.wfocus = true;
  ns_.ar.each(ns_.Form.store, function(b) {
    b.watch()
  })
});
ns_.Form.sitestat = function(b, g) {
  var e = window.sitestat = ((typeof (window.sitestat) == "function") && (!ns_.b.ie && g && (typeof (g.ns_fo_ev) == "undefined" || ns_.Form.rx.Failure.test(g.ns_fo_ev)))) ? window.sitestat : function(j) {
      var m = new Image();
      m.src = j;
      if (!ns_.b.ie) {
        for (var k = 0, h = 100; k < h; k++) {
          var n = new Function("a","b","return a+b");
          var o = n(k, 1)
        }
      }
    }
  ;
  if (b) {
    g = (typeof g == "object" ? g : {});
    var f = b;
    ns_.ar.each(g, function(i, h) {
      f = f + "&" + h + "=" + i
    }, this);
    if (ns_.Form.rx.TLDrx.test(b)) {
      e(f)
    } else {
      var a = "", c;
      if (self.ns_p && typeof ns_p.src == "string") {
        a = ns_p.src
      } else {
        if (self.ns_pixelUrl) {
          a = ns_pixelUrl
        }
      }
      if (a) {
        c = a.lastIndexOf("?");
        a = a.substring(0, c > 0 ? c : a.length) + "?" + f
      }
      if (a) {
        var d = a.indexOf("&");
        if ((d > 0) && !ns_.Form.rx.TypeLb.test(a)) {
          e(a.substring(0, d) + "&type=hidden" + a.substring(d))
        } else {
          if (!ns_.Form.rx.TypeLb.test(a)) {
            e(a + "&type=hidden")
          } else {
            e(a)
          }
        }
      }
    }
  }
};
ns_.Form.Element = ns_.Class.extend(function() {}, {
  form: null,
  id: null,
  tag: null,
  settings: null,
  cache: null,
  throttle: null,
  skipKeys: ns_.ar.create(),
  initialize: function(d, f, e) {
    var c = this;
    if (!ns_.Form.rx.FormElm.test(d.tagName)) {
      return new Boolean(false)
    }
    c.tag = d;
    c.form = f;
    c.id = c.fetchID();
    c.cache = "";
    c.throttle = ns_.ar.create();
    if (!c.skipKeys.length) {
      for (var b = 1, a = 94; b < a; b++) {
        c.skipKeys.push(b)
      }
      for (var b = 112, a = 146; b < a; b++) {
        c.skipKeys.push(b)
      }
      c.skipKeys.push(224)
    }
    c.onDispatch = c.onDispatch.STbind(this);
    c.onUserAction = c.onUserAction.STbind(this);
    c.settings = {
      submit: true,
      abandon: false,
      failure: false
    };
    c.setup(e);
    c.value();
    c.form.registerField(this)
  },
  setup: function(c) {
    var b = ns_.Form.rx
      , a = this.tag;
    if (!b.InputElm.test(a.tagName)) {
      c = this.form.defaults(false)
    } else {
      if (b.Hidden.test(a.tagName + a.type)) {
        if (c && typeof c.hidden == "object") {
          c = c.hidden
        }
      } else {
        if (b.Password.test(a.tagName + a.type)) {
          if (c && typeof c.password == "object") {
            c = c.password
          }
        }
      }
    }
    ns_.ar.each(c, function(e, d) {
      switch (d) {
        case "submit":
        case "abandon":
        case "failure":
          this.settings[d] = e;
          break;
        case "password":
        case "hidden":
        default:
          break
      }
    }, this)
  },
  fetchID: function() {
    var a = this.tag;
    if (a.name && a.name != "") {
      return a.name
    } else {
      if (a.id && a.id != "") {
        return a.id
      } else {
        a.id = "input" + ns_.ar.indexOf(this.form.tag.elements, a);
        return a.id
      }
    }
  },
  value: function() {
    var a = ""
      , f = this.getType()
      , g = ns_.Form.rx
      , e = this.tag;
    if (f == ns_.Form.Element.PASSWD) {
      a = e.value == "" ? "no" : "yes"
    } else {
      if (g.Checkbox.test(e.tagName + e.type)) {
        if (e.checked) {
          a = "yes"
        } else {
          a = "no"
        }
      } else {
        if (g.Input.test(e.tagName) || g.TextArea.test(e.tagName) || g.Radio.test(e.tagName + e.type) || g.Hidden.test(e.tagName + e.type)) {
          a = e.value
        } else {
          if (g.SelectBox.test(e.tagName)) {
            if (e.multiple) {
              var c = ns_.ar.create();
              for (var d = 0, b = e.options.length; d < b; d++) {
                if (e.options[d].selected) {
                  c.push(e.options[d].value)
                }
              }
              a = c
            } else {
              if (e.selectedIndex != -1) {
                a = e.options[e.selectedIndex].value
              }
            }
          }
        }
      }
    }
    this.cache = a;
    return a
  },
  getType: function() {
    var a = this.tag.tagName + this.tag.type
      , b = ns_.Form.rx;
    if (b.Hidden.test(a)) {
      return ns_.Form.Element.HIDDEN
    } else {
      if (b.Password.test(a)) {
        return ns_.Form.Element.PASSWD
      } else {
        if (b.InputElm.test(this.tag.tagName) && (b.Input.test(this.tag.tagName) ? b.InputElmTy.test(this.tag.type) : true)) {
          return ns_.Form.Element.NORMAL
        } else {
          return false
        }
      }
    }
  },
  onUserAction: function(c) {
    var c = c || window.event
      , b = this
      , h = c.type || "all"
      , g = true
      , a = c.which || c.keyCode
      , f = ns_.dt.getTime();
    if (ns_.ar.indexOf(this.skipKeys, String.fromCharCode(a)) != -1) {
      g = false
    }
    if (g) {
      var d = {
        lastField: b,
        type: h
      };
      b.form.state.onInput(d);
      if (h == "blur") {
        b.form.beat()
      }
      b.throttle[h] = f
    }
  },
  onDispatch: function(d, a) {
    if (this.getType() == false || (ns_.Form.rx.Radio.test(this.tag.tagName + this.tag.type) && !this.tag.checked)) {
      return false
    }
    var e = this.form.conf.LABEL_NS + this.getType()
      , c = this.settings;
    var f = false;
    switch (d) {
      case ns_.Form.SUBMIT:
        f = c.submit;
        break;
      case ns_.Form.ABANDON:
        f = c.abandon;
        break;
      case ns_.Form.FAILURE:
        f = c.failure;
        break
    }
    if (f) {
      var b = typeof (this.cache) == "string" ? ns_.ar.create(this.cache) : this.cache;
      ns_.ar.each(b, function(g) {
        if (typeof (a[e + "n"]) == "string") {
          a[e + "n"] = a[e + "n"] + ";" + ns_.encode(this.id);
          a[e + "v"] = a[e + "v"] + ";" + ns_.encode(g)
        } else {
          a[e + "n"] = ns_.encode(this.id);
          a[e + "v"] = ns_.encode(g)
        }
      }, this)
    }
  }
});
ns_.Form.Element.NORMAL = "f";
ns_.Form.Element.PASSWD = "p";
ns_.Form.Element.HIDDEN = "h";
ns_.Form.Measurement = ns_.Class.extend(function() {}, {
  form: null,
  type: ns_.Form.SUBMIT,
  labels: null,
  initialize: function(b, a) {
    this.labels = ns_.extend(ns_.ar.create(), b.conf.labels);
    this.form = b;
    this.setType(a);
    this.dispatch()
  },
  setType: function(a) {
    switch (a) {
      case ns_.Form.ABANDON:
      case ns_.Form.FAILURE:
      case ns_.Form.SUBMIT:
        this.type = a;
        break
    }
  },
  resetLabels: function() {
    this.labels = ns_.ar.create()
  },
  setLabels: function(c) {
    if (typeof (c) == "string") {
      var a = ns_.ar.merge(ns_.ar.create(), c.split("&"))
        , b = ns_.ar.create();
      ns_.ar.each(a, function(d, e) {
        if (d.indexOf("=")) {
          var f = d.split("=");
          b[f[0]] = f[1]
        }
      }, this);
      this.labels = ns_.ar.merge(this.labels, b)
    } else {
      if (typeof c.pop != "null") {
        this.labels = ns_.ar.merge(this.labels, c)
      }
    }
  },
  dispatch: function() {
    var d = ns_.dt.getTime()
      , g = this.form
      , e = g.conf.LABEL_NS
      , c = this.labels;
    c.type = "hidden";
    c[e + "ev"] = this.type;
    c[e + "id"] = ns_.encode(g.id);
    c[e + "la"] = g.lastField != null ? ns_.encode(g.lastField.id) : "";
    c[e + "sq"] = g.sequence++;
    c[e + "t0"] = d - ns_.Form.start;
    c[e + "t1"] = d - g.start;
    if (g.validations.length > 0) {
      var b = ns_.ar.create();
      ns_.ar.each(g.validations, function(f, h) {
        if (typeof (b[f[0]]) == "number") {
          b[f[0]]++
        } else {
          b[f[0]] = 1
        }
      }, this);
      var a = ns_.ar.create();
      ns_.ar.each(b, function(f, h) {
        a.push(ns_.encode(h) + ":" + f)
      }, this);
      c[e + "vfo"] = a.join("|");
      c[e + "vf"] = g.validations.length
    }
    if (g.lastValidated != null) {
      c[e + "vfl"] = ns_.encode(g.lastValidated.id)
    }
    if (typeof (g.lastValidation) == "string" && g.lastValidation != "") {
      c[e + "vfe"] = ns_.encode(g.lastValidation.substring(0, 255))
    }
    ns_.ar.each(g.fields, function(i, f) {
      try {
        i.onDispatch(this.type, c)
      } catch (h) {
        ns_.Error.error(h)
      }
    }, this);
    c[e + "sv"] = g.VERSION
  }
});
/*@end @*/
function ns_onclick(q, f, u, b, o) {
  var i = window
    , l = i.ns_p
    , m = l && l.src
    , s = "&ns_"
    , h = document.referrer.replace(/\/$/, "")
    , f = f || q.href
    , o = o || ""
    , j = {
    t: 0,
    o: 0
  }
    , e = eventURL = c1_match = c2_match = ""
    , c = /\bc1=[^&]+\b/i
    , g = /\bc2=[^&]+\b/i
    , p = (i.encodeURIComponent ? encodeURIComponent : escape)
    , n = "3.1212.07";
  if (m && (c1_match = l.src.match(c)) && !c.test(u)) {
    e += "&" + c1_match
  }
  if (m && (c2_match = l.src.match(g)) && !g.test(u)) {
    e += "&" + c2_match
  }
  if (m) {
    var t = l.src
      , k = t.indexOf("?");
    eventURL = t.substr(0, k > -1 ? k : t.length) + "?"
  }
  eventURL = [eventURL, u, e, s, "type=", b, s, "action=view", s, "_t=", +new Date, h ? s + "referrer=" + p(h) : "", s, "sc_sv=", n, s, "sc_href=", p(f).substr(0, 1000)].join("");
  var r = q && q.target ? q.target.replace(/^_/, "") : "self"
    , d = new Image();
  if (i[r]) {
    j.t = (function(w, v, a) {
      return function() {
        clearTimeout(a.o);
        d.onload = d.onerror = function() {
          return
        }
        ;
        i[w].location.href = v
      }
    })(r, f, j);
    j.o = setTimeout(j.t, 5000);
    d.onload = d.onerror = j.t
  } else {
    i.open(f, r, o)
  }
  d.src = eventURL;
  return false
}
ns_ = ns_ || {};
ns_.StreamSense = ns_.StreamSense || function() {
    function n(t) {
      e = t
    }
    function r(e) {
      t = e
    }
    function u(t, n) {
      var r = t || ""
        , i = f
        , u = "undefined"
        , a = s.comScore || s.sitestat || function(t) {
          var n = "comScore=", r = o.cookie, i = "", a = "indexOf", f = "substring", l = "length", c = 2048, h, p = "&ns_", d = "&", v, m, g, y, b = s.encodeURIComponent || escape;
          if (r[a](n) + 1)
            for (g = 0,
                   m = r.split(";"),
                   y = m[l]; g < y; g++)
              v = m[g][a](n),
              v + 1 && (i = d + unescape(m[g][f](v + n[l])));
          t += p + "_t=" + +(new Date) + p + "c=" + (o.characterSet || o.defaultCharset || "") + i,
          t[l] > c && t[a](d) > 0 && (h = t[f](0, c - 8).lastIndexOf(d),
            t = (t[f](0, h) + p + "cut=" + b(t[f](h + 1)))[f](0, c)),
            e(t),
          typeof ns_p === u && (ns_p = {
            src: t
          }),
            ns_p.lastMeasurement = t
        }
      ;
      if (typeof n !== u) {
        var l = []
          , c = s.encodeURIComponent || escape;
        for (var h in n)
          n.hasOwnProperty(h) && l.push(c(h) + "=" + c(n[h]));
        /[\?\&]$/.test(r) || (r += "&"),
          r += l.join("&")
      }
      return a(r)
    }
    function a(e, t) {
      var n, r = 2048, i = s.encodeURIComponent || escape, u = [], a = p.LABELS_ORDER, f = e.split("?"), l = f[0], c = f[1], h = c.split("&");
      for (var d = 0, v = h.length; d < v; d++) {
        var m = h[d].split("=")
          , g = unescape(m[0])
          , y = unescape(m[1]);
        g && (t[g] = y)
      }
      var b = {};
      for (var d = 0, v = a.length; d < v; d++) {
        var w = a[d];
        t.hasOwnProperty(w) && (b[w] = !0,
          u.push(i(w) + "=" + i(t[w])))
      }
      for (var w in t) {
        if (b[w])
          continue;
        t.hasOwnProperty(w) && u.push(i(w) + "=" + i(t[w]))
      }
      return n = l + "?" + u.join("&"),
        n = n + (n.indexOf("&c8=") < 0 ? "&c8=" + i(o.title) : "") + (n.indexOf("&c7=") < 0 ? "&c7=" + i(o.URL) : "") + (n.indexOf("&c9=") < 0 ? "&c9=" + i(o.referrer) : ""),
      n.length > r && n.indexOf("&") > 0 && (last = n.substr(0, r - 8).lastIndexOf("&"),
        n = (n.substring(0, last) + "&ns_cut=" + i(n.substring(last + 1))).substr(0, r)),
        n
    }
    var e = function(e, t) {}
      , t = function(e, t, n) {};
    n(function(e, t) {
      var n = new Image;
      n.src = e,
      t && setTimeout(t, 0)
    }),
      r(function(e, t, n) {
        n && setTimeout(n, 0)
      });
    var i = typeof window != "undefined" && typeof document != "undefined", s, o;
    i ? (s = window,
      o = document) : (s = {},
      o = {
        location: {
          href: ""
        },
        title: "",
        URL: "",
        referrer: "",
        cookie: ""
      });
    var f = function() {
      var e = {
        uid: function() {
          var e = 1;
          return function() {
            return +(new Date) + "_" + e++
          }
        }(),
        filter: function(e, t) {
          var n = {};
          for (var r in t)
            t.hasOwnProperty(r) && e(t[r]) && (n[r] = t[r]);
          return n
        },
        extend: function(e) {
          var t = arguments.length, n;
          e = e || {};
          for (var r = 1; r < t; r++) {
            n = arguments[r];
            if (!n)
              continue;
            for (var i in n)
              n.hasOwnProperty(i) && (e[i] = n[i])
          }
          return e
        },
        getString: function(e, t) {
          var n = String(e);
          return e == null ? t || "na" : n
        },
        getLong: function(e, t) {
          var n = Number(e);
          return e == null || isNaN(n) ? t || 0 : n
        },
        getInteger: function(e, t) {
          var n = Number(e);
          return e == null || isNaN(n) ? t || 0 : n
        },
        getBoolean: function(e, t) {
          var n = String(e).toLowerCase() == "true";
          return e == null ? t || !1 : n
        },
        isNotEmpty: function(e) {
          return e != null && e.length > 0
        },
        indexOf: function(t, n) {
          var r = -1;
          return e.forEach(n, function(e, n) {
            e == t && (r = n)
          }),
            r
        },
        forEach: function(e, t, n) {
          try {
            if (typeof t == "function") {
              n = typeof n != "undefined" ? n : null;
              if (typeof e["length"] != "number" || typeof e[0] == "undefined") {
                var r = typeof e.__proto__ != "undefined";
                for (var i in e)
                  (!r || r && typeof e.__proto__[i] == "undefined") && typeof e[i] != "function" && t.call(n, e[i], i)
              } else
                for (var i = 0, s = e.length; i < s; i++)
                  t.call(n, e[i], i)
            }
          } catch (o) {}
        },
        regionMatches: function(e, t, n, r, i) {
          if (t < 0 || r < 0 || t + i > e.length || r + i > n.length)
            return !1;
          while (--i >= 0) {
            var s = e.charAt(t++)
              , o = n.charAt(r++);
            if (s != o)
              return !1
          }
          return !0
        },
        size: function(e) {
          var t = 0, n;
          for (var n in e)
            e.hasOwnProperty(n) && t++;
          return t
        },
        log: function(e, t) {
          if (typeof t != "undefined" && t) {
            var n = new Date
              , r = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
            console.log(r, e)
          }
        },
        isTrue: function(e) {
          return typeof e == "undefined" ? !1 : typeof e == "string" ? (e = e.toLowerCase(),
          e === "true" || e === "1" || e === "on") : e ? !0 : !1
        },
        toString: function(t) {
          if (typeof t == "undefined")
            return "undefined";
          if (typeof t == "string")
            return t;
          if (Object.prototype.toString.call(t) === "[object Array]")
            return t.join(",");
          if (e.size(t) > 0) {
            var n = "";
            for (var r in t)
              t.hasOwnProperty(r) && (n += r + ":" + t[r] + ";");
            return n
          }
          return t.toString()
        },
        exists: function(e) {
          return typeof e != "undefined" && e != null
        },
        firstGreaterThan0: function() {
          for (var e = 0, t = arguments.length; e < t; e++) {
            var n = arguments[e];
            if (n > 0)
              return n
          }
          return 0
        }
      };
      return e.filterMap = function(t, n) {
        for (var r in t)
          e.indexOf(r, n) == -1 && delete t[r]
      }
        ,
        e.getKeys = function(e, t) {
          var n, r = [];
          for (n in e)
            (!t || t.test(n)) && e.hasOwnProperty(n) && (r[r.length] = n);
          return r
        }
        ,
        e.getBrowserName = function() {
          var e = navigator.userAgent, t = navigator.appName, n, r, i;
          return (r = e.indexOf("Opera")) != -1 ? t = "Opera" : (r = e.indexOf("MSIE")) != -1 ? t = "Microsoft Internet Explorer" : (r = e.indexOf("Chrome")) != -1 ? t = "Chrome" : (r = e.indexOf("Safari")) != -1 ? t = "Safari" : (r = e.indexOf("Firefox")) != -1 ? t = "Firefox" : (n = e.lastIndexOf(" ") + 1) < (r = e.lastIndexOf("/")) && (t = e.substring(n, r),
            t.toLowerCase() == t.toUpperCase() && (t = navigator.appName)),
            t
        }
        ,
        e.getBrowserFullVersion = function() {
          var e = navigator.userAgent, t = "" + parseFloat(navigator.appVersion), n = parseInt(navigator.appVersion, 10), r, i, s;
          return (i = e.indexOf("Opera")) != -1 ? (t = e.substring(i + 6),
          (i = e.indexOf("Version")) != -1 && (t = e.substring(i + 8))) : (i = e.indexOf("MSIE")) != -1 ? t = e.substring(i + 5) : (i = e.indexOf("Chrome")) != -1 ? t = e.substring(i + 7) : (i = e.indexOf("Safari")) != -1 ? (t = e.substring(i + 7),
          (i = e.indexOf("Version")) != -1 && (t = e.substring(i + 8))) : (i = e.indexOf("Firefox")) != -1 ? t = e.substring(i + 8) : (r = e.lastIndexOf(" ") + 1) < (i = e.lastIndexOf("/")) && (t = e.substring(i + 1)),
          (s = t.indexOf(";")) != -1 && (t = t.substring(0, s)),
          (s = t.indexOf(" ")) != -1 && (t = t.substring(0, s)),
            n = parseInt("" + t, 10),
          isNaN(n) && (t = "" + parseFloat(navigator.appVersion)),
            t
        }
        ,
        e
    }()
      , l = function() {
      var e = ["play", "pause", "end", "buffer", "keep-alive", "hb", "custom", "ad_play", "ad_pause", "ad_end", "ad_click"];
      return {
        PLAY: 0,
        PAUSE: 1,
        END: 2,
        BUFFER: 3,
        KEEP_ALIVE: 4,
        HEART_BEAT: 5,
        CUSTOM: 6,
        AD_PLAY: 7,
        AD_PAUSE: 8,
        AD_END: 9,
        AD_CLICK: 10,
        toString: function(t) {
          return e[t]
        }
      }
    }()
      , c = function() {
      var e = [l.END, l.PLAY, l.PAUSE, l.BUFFER];
      return {
        IDLE: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        toEventType: function(t) {
          return e[t]
        }
      }
    }()
      , h = {
      ADPLAY: l.AD_PLAY,
      ADPAUSE: l.AD_PAUSE,
      ADEND: l.AD_END,
      ADCLICK: l.AD_CLICK
    }
      , p = {
      STREAMSENSE_VERSION: "4.1403.25",
      DEFAULT_PLAYERNAME: "streamsense",
      DEFAULT_HEARTBEAT_INTERVAL: [{
        playingtime: 6e4,
        interval: 1e4
      }, {
        playingtime: null,
        interval: 6e4
      }],
      DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
      DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
      C1_VALUE: "19",
      C10_VALUE: "js",
      NS_AP_C12M_VALUE: "1",
      NS_NC_VALUE: "1",
      PAGE_NAME_LABEL: "name",
      LABELS_ORDER: ["c1", "c2", "ns_site", "ns_vsite", "ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "name", "ns_ak", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ns_ap_sv", "ns_type", "ns_radio", "ns_nc", "ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sq", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_pt", "ns_st_pa", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_ap_jb", "ns_ap_res", "ns_ap_c12m", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ns_st_pe", "ns_st_ui", "ns_st_bc", "ns_st_bt", "ns_st_bp", "ns_st_pc", "ns_st_pp", "ns_st_br", "ns_st_ub", "ns_st_vo", "ns_st_ws", "ns_st_pl", "ns_st_pr", "ns_st_ep", "ns_st_ty", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_dt", "ns_st_ct", "ns_st_de", "ns_st_pu", "ns_st_cu", "ns_st_fee", "c7", "c8", "c9"]
    }
      , d = function() {
      var e = function() {
        function h(e, t) {
          var n = t[e];
          n != null && (a[e] = n)
        }
        var e = this, t = 0, n = 0, r = 0, i = 0, s = 0, o = 0, u, a;
        f.extend(this, {
          reset: function(t) {
            t != null && t.length > 0 ? f.filterMap(a, t) : a = {},
            a.hasOwnProperty("ns_st_cl") || (a.ns_st_cl = "0"),
            a.hasOwnProperty("ns_st_pn") || (a.ns_st_pn = "1"),
            a.hasOwnProperty("ns_st_tp") || (a.ns_st_tp = "1"),
              e.setPauses(0),
              e.setStarts(0),
              e.setBufferingTime(0),
              e.setBufferingTimestamp(-1),
              e.setPlaybackTime(0),
              e.setPlaybackTimestamp(-1)
          },
          setLabels: function(t, n) {
            t != null && f.extend(a, t),
              e.setRegisters(a, n)
          },
          getLabels: function() {
            return a
          },
          setLabel: function(t, n) {
            var r = {};
            r[t] = n,
              e.setLabels(r, null)
          },
          getLabel: function(e) {
            return a[e]
          },
          getClipId: function() {
            return (typeof u == "undefined" || u == null) && e.setClipId("1"),
              u
          },
          setClipId: function(e) {
            u = e
          },
          setRegisters: function(i, o) {
            var u = i.ns_st_cn;
            u != null && (e.setClipId(u),
              delete i.ns_st_cn),
              u = i.ns_st_bt,
            u != null && (r = Number(u),
              delete i.ns_st_bt),
              h("ns_st_cl", i),
              h("ns_st_pn", i),
              h("ns_st_tp", i),
              h("ns_st_ub", i),
              h("ns_st_br", i);
            if (o == c.PLAYING || o == null)
              u = i.ns_st_sq,
              u != null && (n = Number(u),
                delete i.ns_st_sq);
            o != c.BUFFERING && (u = i.ns_st_pt,
            u != null && (s = Number(u),
              delete i.ns_st_pt));
            if (o == c.PAUSED || o == c.IDLE || o == null)
              u = i.ns_st_pc,
              u != null && (t = Number(u),
                delete i.ns_st_pc)
          },
          createLabels: function(r, i) {
            var s = i || {};
            s.ns_st_cn = e.getClipId(),
              s.ns_st_bt = String(e.getBufferingTime());
            if (r == l.PLAY || r == null)
              s.ns_st_sq = String(n);
            if (r == l.PAUSE || r == l.END || r == l.KEEP_ALIVE || r == l.HEART_BEAT || r == null)
              s.ns_st_pt = String(e.getPlaybackTime()),
                s.ns_st_pc = String(t);
            return f.extend(s, e.getLabels()),
              s
          },
          incrementPauses: function() {
            t++
          },
          incrementStarts: function() {
            n++
          },
          getBufferingTime: function() {
            var e = r;
            return i >= 0 && (e += +(new Date) - i),
              e
          },
          setBufferingTime: function(e) {
            r = e
          },
          getPlaybackTime: function() {
            var e = s;
            return o >= 0 && (e += +(new Date) - o),
              e
          },
          setPlaybackTime: function(e) {
            s = e
          },
          getPlaybackTimestamp: function() {
            return o
          },
          setPlaybackTimestamp: function(e) {
            o = e
          },
          getBufferingTimestamp: function() {
            return i
          },
          setBufferingTimestamp: function(e) {
            i = e
          },
          getPauses: function() {
            return t
          },
          setPauses: function(e) {
            t = e
          },
          getStarts: function() {
            return n
          },
          setStarts: function(e) {
            n = e
          }
        }),
          a = {},
          e.reset()
      };
      return e
    }()
      , v = function() {
      var e = function() {
        var e = this, t = null, n, r = 0, i = 0, s = 0, o = 0, u = 0, a, h = 0, p = !1;
        f.extend(this, {
          reset: function(t) {
            t != null && t.length > 0 ? f.filterMap(a, t) : a = {},
              e.setPlaylistId(+(new Date) + "_" + h),
              e.setBufferingTime(0),
              e.setPlaybackTime(0),
              e.setPauses(0),
              e.setStarts(0),
              e.setRebufferCount(0),
              p = !1
          },
          setLabels: function(t, n) {
            t != null && f.extend(a, t),
              e.setRegisters(a, n)
          },
          getLabels: function() {
            return a
          },
          setLabel: function(t, n) {
            var r = {};
            r[t] = n,
              e.setLabels(r, null)
          },
          getLabel: function(e) {
            return a[e]
          },
          getClip: function() {
            return t
          },
          getPlaylistId: function() {
            return n
          },
          setPlaylistId: function(e) {
            n = e
          },
          setRegisters: function(e, t) {
            var a = e.ns_st_sp;
            a != null && (r = Number(a),
              delete e.ns_st_sp),
              a = e.ns_st_bc,
            a != null && (s = Number(a),
              delete e.ns_st_bc),
              a = e.ns_st_bp,
            a != null && (o = Number(a),
              delete e.ns_st_bp),
              a = e.ns_st_id,
            a != null && (n = a,
              delete e.ns_st_id),
            t != c.BUFFERING && (a = e.ns_st_pa,
            a != null && (u = Number(a),
              delete e.ns_st_pa));
            if (t == c.PAUSED || t == c.IDLE || t == null)
              a = e.ns_st_pp,
              a != null && (i = Number(a),
                delete e.ns_st_pp)
          },
          createLabels: function(t, o) {
            var u = o || {};
            u.ns_st_bp = String(e.getBufferingTime()),
              u.ns_st_sp = String(r),
              u.ns_st_id = String(n),
            s > 0 && (u.ns_st_bc = String(s));
            if (t == l.PAUSE || t == l.END || t == l.KEEP_ALIVE || t == l.HEART_BEAT || t == null)
              u.ns_st_pa = String(e.getPlaybackTime()),
                u.ns_st_pp = String(i);
            if (t == l.PLAY || t == null)
              e.didFirstPlayOccurred() || (u.ns_st_pb = "1",
                e.setFirstPlayOccurred(!0));
            return f.extend(u, e.getLabels()),
              u
          },
          incrementStarts: function() {
            r++
          },
          incrementPauses: function() {
            i++,
              t.incrementPauses()
          },
          setPlaylistCounter: function(e) {
            h = e
          },
          incrementPlaylistCounter: function() {
            h++
          },
          addPlaybackTime: function(n) {
            if (t.getPlaybackTimestamp() >= 0) {
              var r = n - t.getPlaybackTimestamp();
              t.setPlaybackTimestamp(-1),
                t.setPlaybackTime(t.getPlaybackTime() + r),
                e.setPlaybackTime(e.getPlaybackTime() + r)
            }
          },
          addBufferingTime: function(n) {
            if (t.getBufferingTimestamp() >= 0) {
              var r = n - t.getBufferingTimestamp();
              t.setBufferingTimestamp(-1),
                t.setBufferingTime(t.getBufferingTime() + r),
                e.setBufferingTime(e.getBufferingTime() + r)
            }
          },
          getBufferingTime: function() {
            var e = o;
            return t.getBufferingTimestamp() >= 0 && (e += +(new Date) - t.getBufferingTimestamp()),
              e
          },
          setBufferingTime: function(e) {
            o = e
          },
          getPlaybackTime: function() {
            var e = u;
            return t.getPlaybackTimestamp() >= 0 && (e += +(new Date) - t.getPlaybackTimestamp()),
              e
          },
          setPlaybackTime: function(e) {
            u = e
          },
          getStarts: function() {
            return r
          },
          setStarts: function(e) {
            r = e
          },
          getPauses: function() {
            return i
          },
          setPauses: function(e) {
            i = e
          },
          getRebufferCount: function() {
            return s
          },
          incrementRebufferCount: function() {
            s++
          },
          setRebufferCount: function(e) {
            s = e
          },
          didFirstPlayOccurred: function() {
            return p
          },
          setFirstPlayOccurred: function(e) {
            p = e
          }
        }),
          t = new d,
          a = {},
          e.reset()
      };
      return e
    }()
      , m = function() {
      var t = function(t, i) {
        function z(e) {
          var t = 0;
          if (O != null)
            for (var n = 0; n < O.length; n++) {
              var r = O[n]
                , i = r.playingtime;
              if (!i || e < i) {
                t = r.interval;
                break
              }
            }
          return t
        }
        function W() {
          J();
          var e = z(x.getClip().getPlaybackTime());
          if (e > 0) {
            var t = D > 0 ? D : e;
            A = setTimeout($, t)
          }
          D = 0
        }
        function X() {
          J();
          var e = z(x.getClip().getPlaybackTime());
          D = e - x.getClip().getPlaybackTime() % e,
          A != null && J()
        }
        function V() {
          D = 0,
            H = 0,
            P = 0
        }
        function $() {
          P++;
          var e = bt(l.HEART_BEAT, null);
          ot(e),
            D = 0,
            W()
        }
        function J() {
          A != null && (clearTimeout(A),
            A = null)
        }
        function K() {
          G(),
            L = setTimeout(Q, M)
        }
        function Q() {
          var e = bt(l.KEEP_ALIVE, null);
          ot(e),
            S++,
            K()
        }
        function G() {
          L != null && (clearTimeout(L),
            L = null)
        }
        function Y() {
          et(),
          o.isPauseOnBufferingEnabled() && ct(c.PAUSED) && (C = setTimeout(Z, _))
        }
        function Z() {
          if (j == c.PLAYING) {
            x.incrementRebufferCount(),
              x.incrementPauses();
            var e = bt(l.PAUSE, null);
            ot(e),
              S++,
              j = c.PAUSED
          }
        }
        function et() {
          C != null && (clearTimeout(C),
            C = null)
        }
        function tt(e) {
          return e == c.PLAYING || e == c.PAUSED
        }
        function nt() {
          b && (clearInterval(b),
            b = null)
        }
        function rt(e) {
          return e == l.PLAY ? c.PLAYING : e == l.PAUSE ? c.PAUSED : e == l.BUFFER ? c.BUFFERING : e == l.END ? c.IDLE : null
        }
        function it(e, t, n) {
          nt();
          if (dt(e))
            if (n)
              b = setInterval(function() {
                it(e, t)
              }, n);
            else {
              var r = mt()
                , i = g
                , s = pt(t)
                , o = i >= 0 ? s - i : 0;
              ft(mt(), t),
                lt(e, t),
                gt(mt()),
                vt(e);
              for (var u = 0, a = R.length; u < a; u++)
                R[u](r, e, t, o);
              st(t),
                x.setRegisters(t, e),
                x.getClip().setRegisters(t, e);
              var l = bt(c.toEventType(e), t);
              f.extend(l, t),
              ct(E) && (ot(l),
                j = E,
                S++)
            }
        }
        function st(e) {
          var t = e.ns_st_mp;
          t != null && (F = t,
            delete e.ns_st_mp),
            t = e.ns_st_mv,
          t != null && (I = t,
            delete e.ns_st_mv),
            t = e.ns_st_ec,
          t != null && (S = Number(t),
            delete e.ns_st_ec)
        }
        function ot(t, n) {
          n === undefined && (n = !0),
          n && at(t);
          var r = o.getPixelURL();
          if (T) {
            if (!ut()) {
              var i = U.am
                , s = U.et
                , u = i.newApplicationMeasurement(T, s.HIDDEN, t, r);
              T.getQueue().offer(u)
            }
          } else
            r && e(a(r, t))
        }
        function ut() {
          var e = T.getAppContext()
            , t = T.getSalt()
            , n = T.getPixelURL();
          return e == null || t == null || t.length == 0 || n == null || n.length == 0
        }
        function at(e) {
          q = bt(null),
            f.extend(q, e)
        }
        function ft(e, t) {
          var n = pt(t);
          if (e == c.PLAYING)
            x.addPlaybackTime(n),
              X(),
              G();
          else if (e == c.BUFFERING)
            x.addBufferingTime(n),
              et();
          else if (e == c.IDLE) {
            var r = f.getKeys(x.getClip().getLabels());
            x.getClip().reset(r)
          }
        }
        function lt(e, t) {
          var n = pt(t)
            , r = ht(t);
          y = r,
            e == c.PLAYING ? (W(),
              K(),
              x.getClip().setPlaybackTimestamp(n),
            ct(e) && (x.getClip().incrementStarts(),
            x.getStarts() < 1 && x.setStarts(1))) : e == c.PAUSED ? ct(e) && x.incrementPauses() : e == c.BUFFERING ? (x.getClip().setBufferingTimestamp(n),
            k && Y()) : e == c.IDLE && V()
        }
        function ct(e) {
          return e != c.PAUSED || j != c.IDLE && j != null ? e != c.BUFFERING && j != e : !1
        }
        function ht(e) {
          var t = -1;
          return e.hasOwnProperty("ns_st_po") && (t = f.getInteger(e.ns_st_po)),
            t
        }
        function pt(e) {
          var t = -1;
          return e.hasOwnProperty("ns_ts") && (t = Number(e.ns_ts)),
            t
        }
        function dt(e) {
          return e != null && mt() != e
        }
        function vt(e) {
          E = e,
            g = +(new Date)
        }
        function mt() {
          return E
        }
        function gt(e) {
          w = e
        }
        function yt() {
          return w
        }
        function bt() {
          var e, t;
          arguments.length == 1 ? (e = c.toEventType(E),
            t = arguments[0]) : (e = arguments[0],
            t = arguments[1]);
          var n = {};
          if (typeof document != "undefined") {
            var r = document;
            n.c7 = r.URL,
              n.c8 = r.title,
              n.c9 = r.referrer
          }
          return t != null && f.extend(n, t),
          n.hasOwnProperty("ns_ts") || (n.ns_ts = String(+(new Date))),
          e != null && !n.hasOwnProperty("ns_st_ev") && (n.ns_st_ev = l.toString(e)),
          o.isPersistentLabelsShared() && T && f.extend(n, T.getLabels()),
            f.extend(n, o.getLabels()),
            wt(e, n),
            x.createLabels(e, n),
            x.getClip().createLabels(e, n),
          n.hasOwnProperty("ns_st_mp") || (n.ns_st_mp = F),
          n.hasOwnProperty("ns_st_mv") || (n.ns_st_mv = I),
          n.hasOwnProperty("ns_st_ub") || (n.ns_st_ub = "0"),
          n.hasOwnProperty("ns_st_br") || (n.ns_st_br = "0"),
          n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"),
          n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"),
          n.hasOwnProperty("ns_st_it") || (n.ns_st_it = "c"),
            n.ns_st_sv = p.STREAMSENSE_VERSION,
            n.ns_type = "hidden",
            n
        }
        function wt(e, t) {
          var n = t || {};
          n.ns_st_ec = String(S);
          if (!n.hasOwnProperty("ns_st_po")) {
            var r = y
              , i = pt(n);
            if (e == l.PLAY || e == l.KEEP_ALIVE || e == l.HEART_BEAT || e == null && E == c.PLAYING)
              r += i - x.getClip().getPlaybackTimestamp();
            n.ns_st_po = f.getInteger(r)
          }
          return e == l.HEART_BEAT && (n.ns_st_hc = String(P)),
            n
        }
        function Et(e) {
          var t = pt(e);
          t < 0 && (e.ns_ts = String(+(new Date)))
        }
        function St(e, t, n) {
          t = t || {},
            t.ns_st_ad = 1,
          e >= l.AD_PLAY && e <= l.AD_CLICK && o.notify(e, t, n)
        }
        function xt(e, t) {
          o.notify(l.CUSTOM, e, t)
        }
        var o = this, h = 500, d, m = null, g = 0, y = 0, b, w, E, S = 0, x = null, T, N = !0, C, k = !0, L, A, O = p.DEFAULT_HEARTBEAT_INTERVAL, M = p.DEFAULT_KEEP_ALIVE_INTERVAL, _ = p.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL, D = 0, P = 0, H = 0, B = !1, j, F, I, q, R, U = {};
        f.extend(this, {
          reset: function(e) {
            x.reset(e),
              x.setPlaylistCounter(0),
              x.setPlaylistId(+(new Date) + "_1"),
              x.getClip().reset(e),
              e != null && !e.isEmpty() ? f.filterMap(d, e) : d = {},
              S = 1,
              P = 0,
              X(),
              V(),
              G(),
              et(),
              nt(),
              E = c.IDLE,
              w = null,
              g = -1,
              j = null,
              F = p.DEFAULT_PLAYERNAME,
              I = p.STREAMSENSE_VERSION,
              q = null
          },
          setPauseOnBufferingInterval: function(e) {
            _ = e
          },
          getPauseOnBufferingInterval: function() {
            return _
          },
          setKeepAliveInterval: function(e) {
            M = e
          },
          getKeepAliveInterval: function() {
            return M
          },
          setHeartbeatIntervals: function(e) {
            O = e
          },
          notify: function() {
            var e, t, n, r;
            t = arguments[0],
              arguments.length == 3 ? (n = arguments[1],
                r = arguments[2]) : (n = {},
                r = arguments[1]),
              e = rt(t);
            var i = f.extend({}, n);
            Et(i),
            i.hasOwnProperty("ns_st_po") || (i.ns_st_po = f.getInteger(r));
            if (t == l.PLAY || t == l.PAUSE || t == l.BUFFER || t == l.END) {
              var s = +(new Date) - g;
              o.isPausePlaySwitchDelayEnabled() && dt(e) && tt(E) && tt(e) && s <= h ? it(e, i, h) : it(e, i)
            } else {
              var u = bt(t, i);
              f.extend(u, i),
                ot(u, !1),
                S++
            }
          },
          getLabels: function() {
            return d
          },
          getState: function() {
            return E
          },
          setLabels: function(e) {
            e != null && (d == null ? d = e : f.extend(d, e))
          },
          getLabel: function(e) {
            return d[e]
          },
          setLabel: function(e, t) {
            t == null ? delete d[e] : d[e] = t
          },
          setPixelURL: function(e) {
            if (e == null || e.length == 0)
              return null;
            var t = s.decodeURIComponent || unescape
              , n = e.indexOf("?");
            if (n >= 0) {
              if (n < e.length - 1) {
                var r = e.substring(n + 1).split("&");
                for (var i = 0, u = r.length; i < u; i++) {
                  var a = r[i]
                    , f = a.split("=");
                  f.length == 2 ? o.setLabel(f[0], t(f[1])) : f.length == 1 && o.setLabel(p.PAGE_NAME_LABEL, t(f[0]))
                }
                e = e.substring(0, n + 1)
              }
            } else
              e += "?";
            return m = e,
              m
          },
          getPixelURL: function() {
            return m ? m : typeof ns_p != "undefined" && typeof ns_p.src == "string" ? m = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : typeof ns_pixelUrl == "string" ? m.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
          },
          isPersistentLabelsShared: function() {
            return N
          },
          setPersistentLabelsShared: function(e) {
            N = e
          },
          isPauseOnBufferingEnabled: function() {
            return k
          },
          setPauseOnBufferingEnabled: function(e) {
            k = e
          },
          isPausePlaySwitchDelayEnabled: function() {
            return B
          },
          setPausePlaySwitchDelayEnabled: function(e) {
            B = e
          },
          setPausePlaySwitchDelay: function(e) {
            e && e > 0 && (h = e)
          },
          getPausePlaySwitchDelay: function() {
            return h
          },
          setClip: function(e, t) {
            var n = !1;
            return E == c.IDLE && (x.getClip().reset(),
              x.getClip().setLabels(e, null),
            t && x.incrementStarts(),
              n = !0),
              n
          },
          setPlaylist: function(e) {
            var t = !1;
            return E == c.IDLE && (x.incrementPlaylistCounter(),
              x.reset(),
              x.getClip().reset(),
              x.setLabels(e, null),
              t = !0),
              t
          },
          importState: function(e) {
            reset();
            var t = f.extend({}, e);
            x.setRegisters(t, null),
              x.getClip().setRegisters(t, null),
              st(t),
              S++
          },
          exportState: function() {
            return q
          },
          getVersion: function() {
            return p.STREAMSENSE_VERSION
          },
          addListener: function(e) {
            R.push(e)
          },
          removeListener: function(e) {
            R.splice(f.indexOf(e, R), 1)
          },
          getClip: function() {
            return x.getClip()
          },
          getPlaylist: function() {
            return x
          },
          setHttpGet: n,
          setHttpPost: r
        }),
          f.extend(this, {
            adNotify: St,
            customNotify: xt,
            viewNotify: function(e, t) {
              e = e || o.getPixelURL(),
              e && u(e, t)
            }
          }),
        ns_.comScore && (U = ns_.comScore.exports,
          T = U.c()),
          d = {},
          S = 1,
          E = c.IDLE,
          x = new v,
          C = null,
          k = !0,
          A = null,
          P = 0,
          V(),
          L = null,
          b = null,
          B = !1,
          j = null,
          y = 0,
          R = [],
          o.reset(),
        t && o.setLabels(t),
        i && o.setPixelURL(i)
      };
      return function(e) {
        function i(e, n) {
          return t[r] || o(e, n)
        }
        function s() {
          r = -1;
          for (var e = 0; e <= n; e++)
            if (t.hasOwnProperty(e)) {
              r = e;
              break
            }
          return ns_.StreamSense.activeIndex = r,
            r
        }
        function o(e, r) {
          return e = e || null,
            r = r || null,
          e && typeof e == "object" && (r = e,
            e = null),
            t[++n] = new ns_.StreamSense(r,e),
            s(),
            t[n]
        }
        function u() {
          var e = !1
            , n = r;
          if (typeof arguments[0] == "number" && isFinite(arguments[0]))
            n = arguments[0];
          else if (arguments[0]instanceof ns_.StreamSense)
            for (var i in t)
              if (t[i] === arguments[0]) {
                n = i;
                break
              }
          return t.hasOwnProperty(n) && (e = t[n],
            delete t[n],
            e.reset(),
            s()),
            e
        }
        function a(e) {
          return e = e || {},
            i().setPlaylist(e),
            i().getPlaylist()
        }
        function l(e, t, n) {
          return e = e || {},
          typeof t == "number" && (e.ns_st_cn = t),
            i().setClip(e, n),
            i().getClip()
        }
        function c(e, t, n) {
          return typeof e == "undefined" ? !1 : (n = n || null,
            t = t || {},
            i().notify(e, t, n))
        }
        function h(e) {
          typeof e != "undefined" && i().setLabels(e)
        }
        function p() {
          return i().getLabels()
        }
        function d(e) {
          typeof e != "undefined" && i().getPlaylist().setLabels(e)
        }
        function v() {
          return i().getPlaylist().getLabels()
        }
        function m(e) {
          typeof e != "undefined" && i().getClip().setLabels(e)
        }
        function g() {
          return i().getClip().getLabels()
        }
        function y(e) {
          return i().reset(e || {})
        }
        function b(e) {
          return i().getPlaylist().reset(e || {})
        }
        function w(e) {
          return i().getClip().reset(e || {})
        }
        function E(e) {
          return e = e || {},
            i().viewNotify(null, e)
        }
        function S(e, t) {
          return arguments.length > 2 && (e = arguments[1],
            t = arguments[2]),
            e = e || {},
          typeof t == "number" && (e.ns_st_po = t),
            i().customNotify(e, t)
        }
        function x() {
          return i().exportState()
        }
        function T(e) {
          i().importState(e)
        }
        var t = {}
          , n = -1
          , r = -1;
        f.extend(e, {
          activeIndex: r,
          newInstance: o,
          "new": o,
          destroyInstance: u,
          destroy: u,
          newPlaylist: a,
          newClip: l,
          notify: c,
          setLabels: h,
          getLabels: p,
          setPlaylistLabels: d,
          getPlaylistLabels: v,
          setClipLabels: m,
          getClipLabels: g,
          resetInstance: y,
          resetPlaylist: b,
          resetClip: w,
          viewEvent: E,
          customEvent: S,
          exportState: x,
          importState: T
        })
      }(t),
        t
    }();
    return m.AdEvents = h,
      m.PlayerEvents = l,
      m
  }();

var comScore = (function(config) {
  return {
    push: function (tagData) {
      var comScoreManagerObject = {};
      var i;

      comScoreManagerObject.data = config.data;
      g = [];
      g.push('c1=2');
      g.push('c2=' + comScoreManagerObject.data.account);
      udm_('http' + (document.location.href.charAt(4) === 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?' + g.join(comScoreManagerObject.data.qsp_delim));
      if (tagData._corder !== undefined && tagData._corder !== '') {
        var counterURL = 'http' + (document.location.href.charAt(4) === 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?';
        comScoreManagerObject.order = new ns_order(counterURL,((tagData._ccustid) ? tagData._ccustid : tagData._corder),tagData._corder);
        for (i = 0; i < tagData._cprod.length; i++) {
          comScoreManagerObject.order.addLine(tagData._cprod[i], tagData._cbrand[i], tagData._ccat[i], tagData._ccat2[i], parseInt(tagData._cquan[i]), parseFloat(tagData._cprice[i]));
        }
        if (tagData._cship) {
          comScoreManagerObject.order.addLine('shipping', 'none', 'shipping_handling', 'none', 1, parseFloat(tagData._cship));
        }
        comScoreManagerObject.order.sendOrder();
      }
      if (comScoreManagerObject.data.form) {
        comScoreManagerObject.data.form_preferences = {
          submit: (comScoreManagerObject.data.form_submit === 'true' || comScoreManagerObject.data.form_submit === true) ? true : false,
          abandon: (comScoreManagerObject.data.form_abandon === 'true' || comScoreManagerObject.data.form_abandon === true) ? true : false,
          failure: (comScoreManagerObject.data.form_failure === 'true' || comScoreManagerObject.data.form_failure === true) ? true : false,
        }
        if (comScoreManagerObject.data.form_normal.length) {
          for (i = 0; i < comScoreManagerObject.data.form_normal.length; i++) {
            comScoreManagerObject.data.form_settings[comScoreManagerObject.data.form_normal[i]] = comScoreManagerObject.data.form_preferences;
          }
        } else {
          comScoreManagerObject.data.form_settings['*'] = comScoreManagerObject.data.form_preferences;
        }
        for (i = 0; i < comScoreManagerObject.data.form_hidden.length; i++) {
          comScoreManagerObject.data.form_settings[comScoreManagerObject.data.form_hidden[i]] = {
            hidden: comScoreManagerObject.data.form_preferences
          }
        }
        new ns_.Form(comScoreManagerObject.data.form,comScoreManagerObject.data.form_settings);
      }
      (function() {
        var id = 'comScoreTag';
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.id = id;
        script.src = comScoreManagerObject.data.base_url;
        var hostNode = document.getElementsByTagName('script')[0];
        hostNode.parentNode.insertBefore(script, hostNode);
      })();
    }
  }
})(window.thirdPartyConfig && window.thirdPartyConfig['comScore'] || {});

setupTags(comScore.push, tag_data);
;
if (!window.libloader_body) {
  window.libloader_body = function(src, handler) {
    var script = document.createElement('script');

    script.language = 'javascript';
    script.type = 'text/javascript';
    script.src = src;

    if (typeof handler === 'function') {
      script.handlerFlag = 0;
      script.onreadystatechange = function() {
        if ((this.readyState == 'complete' || this.readyState == 'loaded') && !script.handlerFlag) {
          script.handlerFlag = 1;
          handler()
        }
      };

      script.onload = function() {
        if (!script.handlerFlag) {
          script.handlerFlag = 1;
          handler()
        }
      };

      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }
}

var trac;
function Nielsen_Event() {
    trac.pvar.custom = trac.pvar.custom || {};
    trac.pvar.custom.usergen = 1;
    trac.post();
}

var neilsen = (function (config) {
  return {
    push: function() {
      var page_url = config.page_url || document.URL;
      var callback = function () {
        trac = nol_t({
          cid: config.cid,
          content: config.content,
          server: config.server
        }, {
          link_overlay: parseInt(config.link_overlay),
          surveys_enabled: parseInt(config.surveys_enabled),
          sample_rate: parseFloat(config.sample_rate)
        });

        if (config.sample_rate) {
          trac.record().post().do_sample();
        } else {
          trac.record().post();
        }
      };

      if (!config.initialized) {
        config.initialized = true;
        window.libloader_body(config.base_url, callback);
      } else {
        trac.postEventTrack({
          event_type: 'page',
          page_url: page_url,
          content: config.content
        });
      }
    }
  };
})(window.thirdPartyConfig && window.thirdPartyConfig['neilsen'] || {});

window.setupTags(function () {
  neilsen.push();
});
;
