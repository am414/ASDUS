



/* ControlTag Loader for Dailymotion 48fbb5db-11da-49a3-a389-5a85fd757f1e */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.24.5","schema_version":3},"confid":"IfwB8IQs","context_terms":[{"id":"JLXjqL1c","value":"fest"},{"id":"JkxzF4PQ","value":"Holiday"},{"id":"JLWlfdtW","value":"fashion week"},{"id":"JkSB1xn1","value":"pets"},{"id":"JLWlfgXI","value":"election"},{"id":"JLWlfbjT","value":"new york marathon"},{"id":"JkxzF3T5","value":"christmas"},{"id":"JLWlfe-4","value":"paris 2015 climate summit"},{"id":"JkSB1z8Z","value":"Child"},{"id":"JLWlfaz3","value":"world cup"},{"id":"JLXho_-m","value":"superbowl"},{"id":"JkSB1y7s","value":"Saving"},{"id":"JLXh0_gF","value":"music"},{"id":"JkSB1wu6","value":"Environmental"},{"id":"JkSB1zvT","value":"Mom"},{"id":"JkSB1vjV","value":"Holiday shopping"},{"id":"JLXh1ACx","value":"music festival"},{"id":"JkxzF6CI","value":"shopping deals"},{"id":"JLXjqMLU","value":"tdf"},{"id":"JLWlffLn","value":"du mans"},{"id":"JkxzF1ID","value":"recipe"},{"id":"JLWlfccd","value":"saint patrick day"},{"id":"JLWlfeyT","value":"paris climate summit"},{"id":"JkSB1xa3","value":"pet owners"},{"id":"JLXjqLfJ","value":"oktober"},{"id":"JLWlfdhy","value":"paris motor show"},{"id":"JkxzF232","value":"Gifts"},{"id":"JkxzF4r_","value":"holidays"},{"id":"JLWlfbYc","value":"tour de france"},{"id":"JLWlfYrD","value":"oktoberfest"},{"id":"JkSB1wiO","value":"Health and Fitness"},{"id":"JLWlfajn","value":"olympics"},{"id":"JkSB1zIn","value":"Dog"},{"id":"JLWlfbvD","value":"ny marathon"},{"id":"JkSB1v8D","value":"foodie"},{"id":"JLWlfgmO","value":"elections"},{"id":"JLWlfcpZ","value":"st. patrick's day"},{"id":"JLXr_CwQ","value":"rio carnival"},{"id":"JkxzF6f8","value":"ingredients"},{"id":"JkxzF2cW","value":"recipes"},{"id":"JLWlfdL2","value":"geneva and paris motor show"},{"id":"JLXjqLIc","value":"oktober fest"},{"id":"JkxzF5JZ","value":"shopping"},{"id":"JLWlfbNT","value":"nba finals"},{"id":"JLX0rFW-","value":"st patricks day"},{"id":"JLWlfcFj","value":"carnaval of rio"},{"id":"JkxzF68h","value":"healthy cooking"},{"id":"JLWlfb6m","value":"nyc marathon"},{"id":"JkSB1wIx","value":"fitness"},{"id":"JLWlfekr","value":"e3"},{"id":"JkSB1xN-","value":"Eco-friendly"},{"id":"JLWnYDyQ","value":"world fair"},{"id":"JkSB1zVe","value":"Cat"},{"id":"JkSB1yPk","value":"Stocks"},{"id":"JLWlfaYf","value":"olympic"},{"id":"JLXr_DHe","value":"carnival rio"},{"id":"JLWlffrS","value":"24 le mans"},{"id":"Jf3gLdnI","value":"dior"},{"id":"JkxzF3v5","value":"Hanukkah"},{"id":"JkxzF5mH","value":"coupons"},{"id":"JLWlfdW5","value":"geneva motor show"},{"id":"JkSB1x0k","value":"Finance"},{"id":"JkSB1wVi","value":"health"},{"id":"JkxzF7YY","value":"cooking"},{"id":"JLWlfgIU","value":"presidential election"},{"id":"JLXdO_E3","value":"nyfw"},{"id":"JkSB1ysS","value":"Money Management"},{"id":"JLXh0_q7","value":"concert"},{"id":"JLWlfcRc","value":"saint patrick's day"},{"id":"JkSB10NF","value":"Baby"},{"id":"JLXh1AcW","value":"gig"},{"id":"JLWlfd4k","value":"fashion weeks"},{"id":"JkSB1ziU","value":"Parenting"},{"id":"JLWlfa_g","value":"nba final"},{"id":"JLWlfffv","value":"of le mans"},{"id":"JkxzF1lN","value":"restaurants"},{"id":"JLWlff7Q","value":"le mans 24"},{"id":"JkSB1yBp","value":"Investments"},{"id":"JkSB1yci","value":"Stock Market"},{"id":"JkSB1w-r","value":"Eco Friendly"}],"publisher":{"name":"Dailymotion","active":true,"uuid":"48fbb5db-11da-49a3-a389-5a85fd757f1e","version_bucket":"stable","id":1496},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":true,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","use_central_usermatch":false,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"dfp_premium":true},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"name":"Dailymotion","cap":255,"id":18153,"organization_id":1496,"uid":"IfwB8IQs"},"tags":[{"id":21299,"name":"Jivox User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n        \tnew Image().src = \"//pxl.jivox.com/tags/sync/usync.php?px=eZQcCLxB\";\n        }\n})();\n</script>","target":"","target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":30180,"name":"Sticky Ads User-Match","content":"<script>\n(function() {\n        new Image().src = \"//ads.stickyadstv.com/data-registering?dataProviderId=897&redirectId=1409\";\n})();\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["<=","$frequency",3]]]]},{"id":21261,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21262,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21263,"name":"eXelate Media provider tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21264,"name":"Visual DNA provider tag","content":"<script>new Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21265,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21272,"name":"AdAdvisor S2S provider tag","content":"<script>\r\n(function() {\r\n  // adadvisor redirects to http://logger... so it's not https safe\r\n  if (location.protocol == \"http:\") {\r\n     var u = \"https://aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e\";\r\n     (new Image()).src = u;\r\n   }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21275,"name":"DataLogix provider tag","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21278,"name":"Rubicon User Matching","content":"<script>\n(function(){\n  if (window.Krux) {\n    var kuid = window.Krux('get', 'user');\n    if (kuid && typeof kuid != 'undefined') {\n       var rubicon_url = '//tap.rubiconproject.com/oz/feeds/krux/tokens?afu=' + kuid;\n       var i = new Image();\n       i.src = rubicon_url;\n    }\n  }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21280,"name":"TubeMogul","content":"<script>\n    (function() {\n        var prefix = location.protocol == 'https:' ? \"https\" : \"http\";\n        var tm_url = prefix + '://sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + prefix + '%3A%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner_id%3Dcb276571-e0d9-4438-9fd4-80a1ff034b01%26puid%3D%24%7BTM_USER_ID%7D'\n        var i = new Image();\n        i.src = tm_url;\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21281,"name":"Webbula provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21282,"name":"Dun & Bradstreet provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21283,"name":"InfoGroup provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21285,"name":"Experian provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21286,"name":"Gigya provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21287,"name":"DBM User Match","content":"// Image Wrapper script pixel URL\r\n<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src =\r\n'https://cm.g.doubleclick.net/pixel?google_nid=liverail_dbm&google_cm&google_sc';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21289,"name":"Eyeota - Marketplace & Branded provider tag","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21290,"name":"Yahoo! DataX User match","content":"<script>\n(function(){\n    var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = 'https:';\n            var rurl = prefix + '//cms.analytics.yahoo.com/cms?partner_id=KRUX';\n            var i = new Image();\n            i.src = rurl;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21291,"name":"LiveRamp User Matching ","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21292,"name":"TubeMogul User Matching","content":"<script>\n    (function() {\n        var prefix = location.protocol == 'https:' ? \"https\" : \"http\";\n        var tm_url = prefix + '://sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + prefix + '%3A%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner_id%3Dcb276571-e0d9-4438-9fd4-80a1ff034b01%26puid%3D%24%7BTM_USER_ID%7D'\n        var i = new Image();\n        i.src = tm_url;\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21293,"name":"Neustar User Match","content":"<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21294,"name":"TradeDesk User Match","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":"","target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21295,"name":"BrightRoll User Match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n           var url = prefix + '//pix.btrll.com/partner/868092.png';\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21296,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21297,"name":"AppNexus User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\n            var i = new Image();\n            i.src = appnexus_url;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21298,"name":"Videology User Match","content":"<script type=\"text/javascript\">\n(function() {\n    (new Image()).src = '//sync.tidaltv.com/genericusersync.ashx?dpid=395';\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":21302,"name":"DataLogix (Meredith Pepperidge Farms) library tag","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8da8b14d-5569-4bec-bcea-722864ee8d06&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21303,"name":"DataLogix (Meredith VRC) library tag","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bef9f122-393d-4c45-8d8d-32d8be7ac433&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iyzu39iyzud95&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21304,"name":"DataLogix (Heineken) library tag","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n \r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n         \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8bf57916-aac8-4f01-a386-4baf103b3e1f&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=bckw15bckwu20&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21305,"name":"DataLogix (Kelloggs) library tag","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n\r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21306,"name":"DataLogix (Meredith CVS) library tag","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=536f0daa-aaaa-4d9e-9a25-dde40646786a&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21307,"name":"DataLogix (Tribune) library tag","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=7c6392c9-e878-492c-8b14-bf06e3828ebd&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rowp70rowpu60&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21308,"name":"KRM_Datalogix_RFP (Kelloggs) library tag","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n        \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bb8ae0e2-9cd7-45b2-ad37-7737269627d8&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rsxs71rsxsk73&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21309,"name":"DataLogix (afae52b8-1e27-4650-bd6a-ed7d982f5a6a)","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n \n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n         \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=afae52b8-1e27-4650-bd6a-ed7d982f5a6a&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iqbg41iqbgj68&ru=' + kurl;\n            new Image().src = dlx_url;\n          \n        }\n    })();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22402,"name":"Innovid User Matching","content":"<script>\n(function(){\n         var prefix = window.location.protocol == 'https:' ? \"https:\" : \"http:\";\n         var i_url = prefix + '//ag.innovid.com/dv/sync?tid=2';\n         var i = new Image();\n         i.src = i_url;\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":24637,"name":"Signal User Match","content":"<script>\n(function(){\n\n  var kuid = Krux('get', 'user');\n  var prefix = location.protocol == 'https:' ? 'https:' : 'http:';\n\n  if (kuid) {\n    new Image().src = prefix + '//s.thebrighttag.com/cs?tp=8RtgoqC&uid=' + kuid;\n  }\n  \n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":29743,"name":"DataXu User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = location.protocol;\n        if (kuid) {\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\n           var i = new Image();\n           i.src = dxu_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":29744,"name":"MediaMath User Match","content":"<script>\n\n(function(){\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//pixel.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D';\n\t(new Image()).src = url;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":29745,"name":"Gamut User Match","content":"<script>\n(function(){\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//ad.afy11.net/ad?mode=10&tpdpid=880';\n\tnew Image().src = url;\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":29776,"name":"BlueKai User Match","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\n            var bk_params = 'id=' + kuid;\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\n            var i = new Image();\n            i.src = bk_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21271,"name":"Krux Data Transfer Code","content":"<script>\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.is_logged\": {js_global: \"Stringified_DM_Context.is_logged\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.is_web_crawler\": {js_global: \"Stringified_DM_Context.is_web_crawler\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.page_channel\": {js_global: \"Stringified_DM_Context.page_channel\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.search\": {js_global: \"Stringified_DM_Context.search\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_title\": {js_global: \"Stringified_DM_Context.video_title\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_is_explicit\": {js_global: \"Stringified_DM_Context.video_is_explicit\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_uploaded_date\": {js_global: \"Stringified_DM_Context.video_uploaded_date\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_lifetime_in_days\": {js_global: \"Stringified_DM_Context.video_lifetime_in_days\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_duration\": {js_global: \"Stringified_DM_Context.video_duration\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_daily_tags\": {js_global: \"Stringified_DM_Context.video_daily_tags\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_views\": {js_global: \"Stringified_DM_Context.video_views\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.reader_gender\": {js_global: \"Stringified_DM_Context.reader_gender\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.reader_age\": {js_global: \"Stringified_DM_Context.reader_age\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.reader_has_family_filter\": {js_global: \"Stringified_DM_Context.reader_has_family_filter\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_parent_account_login\": {js_global: \"Stringified_DM_Context.video_parent_account_login\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.time_and_day\": {js_global: \"Stringified_DM_Context.time_and_day\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_language\": {js_global: \"Stringified_DM_Context.video_language\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_stream_mode\": {js_global: \"Stringified_DM_Context.video_stream_mode\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_type\": {js_global: \"Stringified_DM_Context.video_type\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_related_algorithm\": {js_global: \"Stringified_DM_Context.video_related_algorithm\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.page_type\": {js_global: \"Stringified_DM_Context.page_type\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.video_strong_tags\": {js_global: \"Stringified_DM_Context.video_strong_tags\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.user_type\": {js_global: \"Stringified_DM_Context.user_type\"}});\r\nKrux('scrape', { \"page_attr_Stringified_DM_Context.search_sort\": {js_global: \"Stringified_DM_Context.search_sort\"}});\r\nKrux('scrape', { \"user_attr_Stringified_DM_Context.reader_xid\": {js_global: \"Stringified_DM_Context.reader_xid\"}});\r\nKrux('scrape', { \"user_attr_DM_Context.user_login\": {js_global: \"DM_Context.user_login\"}});\r\nKrux('scrape', { 'page_attr_Stringified_DM_Context.video_xid': {js_global: \"Stringified_DM_Context.video_xid\"}});\r\n//added 2-5-15 to make DM_Context.user_login a page attribute \r\nKrux('scrape', { \"page_attr_DM_Context.user_login\": {js_global: \"DM_Context.user_login\"}});\r\n</script>","target":"","target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.c3a35cae6beb84887ab6a83973d97fa9', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
