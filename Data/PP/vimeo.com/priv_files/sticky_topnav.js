(function(){var TEST_NAMESPACE="TopNavSticky",TEST_PARAM="sticky_topnav",TEST_GROUP_ON="on",TEST_GROUP_OFF="off",STICKY_TOPNAV_CLASS="topnav_sticky",STICKY_TOPNAV_SCROLLED_CLASS="sticky_topnav_scrolled",TOPNAV_DESKTOP_SELECTOR=".topnav_desktop",SCROLL_FACTOR=.25;var topnavDesktop,topnavWrap,contentWrap,prevTopnavHeight,initialPaddingTop;function initialize(config){var topnavWrapSelector=config.topnav_wrap_selector,contentWrapSelector=config.content_wrap_selector,excludedPages=config.excluded_pages;var isRouteExcluded=excludedPages.indexOf(window.vimeo_esi.config.route)!==-1;var isControllerExcluded=excludedPages.indexOf(window.vimeo_esi.config.controller)!==-1;if(isRouteExcluded||isControllerExcluded||!window.ABLincoln){return}topnavDesktop=document.querySelector(TOPNAV_DESKTOP_SELECTOR);topnavWrap=document.querySelector(topnavWrapSelector);contentWrap=document.querySelector(contentWrapSelector);toggleSticky();window.addEventListener("resize",toggleSticky)}function toggleSticky(){var isSticky=isTopnavSticky();var isVisible=isTopnavVisible();if(!isSticky&&isVisible&&inStickyBucket()){enableSticky()}else if(isSticky&&!isVisible){disableSticky()}}function enableSticky(){topnavWrap.classList.add(STICKY_TOPNAV_CLASS);initialPaddingTop=window.getComputedStyle(contentWrap).paddingTop;prevTopnavHeight=topnavWrap.getBoundingClientRect().bottom;contentWrap.style.paddingTop=prevTopnavHeight+"px";if(isTopnavBgTransparent()){toggleScrolledClass();document.addEventListener("scroll",toggleScrolledClass)}window.addEventListener("load",adjustContentPaddingTop);if(!window.addResizeListener||!window.removeResizeListener){initResizeListener()}window.addResizeListener(topnavWrap,handleTopnavResize)}function disableSticky(){topnavWrap.classList.remove(STICKY_TOPNAV_CLASS);contentWrap.style.paddingTop=initialPaddingTop;if(isTopnavBgTransparent()){toggleScrolledClass();document.removeEventListener("scroll",toggleScrolledClass)}window.removeEventListener("load",adjustContentPaddingTop);window.removeResizeListener(topnavWrap,handleTopnavResize)}function handleTopnavResize(){if(!isTopnavVisible()){return}var heightChange=topnavWrap.getBoundingClientRect().bottom-prevTopnavHeight;if(window.pageYOffset>prevTopnavHeight){window.scrollBy(0,Math.round(heightChange))}prevTopnavHeight=topnavWrap.getBoundingClientRect().bottom;contentWrap.style.paddingTop=prevTopnavHeight+"px"}function adjustContentPaddingTop(){contentWrap.style.paddingTop=topnavWrap.getBoundingClientRect().bottom+"px"}function isTopnavVisible(){return window.getComputedStyle(topnavDesktop).display!=="none"}function isTopnavSticky(){return topnavWrap.classList.contains(STICKY_TOPNAV_CLASS)}function isTopnavBgTransparent(){var backgroundColor=window.getComputedStyle(topnavDesktop).backgroundColor;if(backgroundColor==="transparent"){return true}var rgba=/(rgba\(.+,.+,.+,)(.+)\)/;var rgbaMatch=backgroundColor.match(rgba);return rgbaMatch&&Number(rgbaMatch[2])===0}function inStickyBucket(){var bucket=window.ABLincoln.getTest(TEST_NAMESPACE).get(TEST_PARAM,TEST_GROUP_OFF);return bucket===TEST_GROUP_ON}function toggleScrolledClass(){if(window.getComputedStyle(document.body).position==="fixed"){return}var scrollRatio=window.pageYOffset/topnavWrap.offsetHeight;var toggle=scrollRatio>=SCROLL_FACTOR?"add":"remove";topnavWrap.classList[toggle](STICKY_TOPNAV_SCROLLED_CLASS)}function initResizeListener(){var attachEvent=document.attachEvent;var isIE=navigator.userAgent.match(/Trident/);var requestFrame=function(){var raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(fn){return window.setTimeout(fn,20)};return function(fn){return raf(fn)}}();var cancelFrame=function(){var cancel=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(id){return cancel(id)}}();function resizeListener(e){var win=e.target||e.srcElement;if(win.__resizeRAF__)cancelFrame(win.__resizeRAF__);win.__resizeRAF__=requestFrame(function(){var trigger=win.__resizeTrigger__;trigger.__resizeListeners__.forEach(function(fn){fn.call(trigger,e)})})}function objectLoad(e){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__;this.contentDocument.defaultView.addEventListener("resize",resizeListener)}window.addResizeListener=function(element,fn){if(!element.__resizeListeners__){element.__resizeListeners__=[]}if(attachEvent){element.__resizeTrigger__=element;element.attachEvent("onresize",resizeListener)}else{if(getComputedStyle(element).position=="static")element.style.position="relative";var obj=element.__resizeTrigger__=document.createElement("object");obj.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;");obj.__resizeElement__=element;obj.onload=objectLoad;obj.type="text/html";if(isIE)element.appendChild(obj);obj.data="about:blank";if(!isIE)element.appendChild(obj)}element.__resizeListeners__.push(fn)};window.removeResizeListener=function(element,fn){element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn),1);if(!element.__resizeListeners__.length){if(attachEvent)element.detachEvent("onresize",resizeListener);else{element.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",resizeListener);element.__resizeTrigger__=!element.removeChild(element.__resizeTrigger__)}}}}if(window.vimeo.config.sticky_topnav){initialize(window.vimeo.config.sticky_topnav)}})();