Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;window["ensightenVariables"]=function(){var custId=merchId=totalAmt=currencyCode=XOFlowId=fptiPage=flowName=pageGroup=urlConstruct="";urlConstruct=window.location.host+window.location.pathname;if(window.fpti!==null&&window.fpti!==undefined){if(window.fpti.cust&&window.fpti.cust.length>0)custId=window.fpti.cust;if(window.pre!==null&&window.pre!==undefined)if(window.pre.payee!==
null&&window.pre.payee!==undefined){if(window.pre.payee.res.data.merchant.id)merchId=window.pre.payee.res.data.merchant.id;if(window.pre.cart.res.data.purchase.amounts.total.amount)totalAmt=window.pre.cart.res.data.purchase.amounts.total.amount;if(window.pre.cart.res.data.purchase.amounts.total.currency_code)currencyCode=window.pre.cart.res.data.purchase.amounts.total.currency_code;if(window.pre.checkoutAppData.res.data.flow_id)XOFlowId=window.pre.checkoutAppData.res.data.flow_id}if(window.fpti.page&&
window.fpti.page.length>0)fptiPage=window.fpti.page;if(window.fpti.flnm&&window.fpti.flnm.length>0)flowName=window.fpti.flnm;if(window.fpti.pgrp&&window.fpti.pgrp.length>0)pageGroup=window.fpti.pgrp}var dcmVars,mediaplexVars,mathVars,allVariables={};dcmVars="u1\x3d"+custId+";u2\x3d"+merchId+";u3\x3d"+totalAmt+";u4\x3d"+currencyCode+";u5\x3d;u6\x3d"+fptiPage+";u7\x3d"+urlConstruct+" "+";u8\x3d"+flowName+";u9\x3d"+Bootstrapper.data.resolve(["19470"])+";u10\x3d"+window.dataLayer.contentCountry+";u11\x3d;u12\x3d;u13\x3d;u14\x3d;u15\x3d;u16\x3d;u17\x3d;u18\x3d;u19\x3d;u20\x3d;"+
"dc_lat\x3d;dc_rdid\x3d;tag_for_child_directed_treatment\x3d;ord\x3d1?";mediaplexVars="mpuid\x3d"+custId+";;;;"+merchId+";;;;"+totalAmt+";;;;;"+currencyCode+";;"+pageGroup+";;;;"+";;;;"+Bootstrapper.data.resolve(["19470"])+";";mathVars="v1\x3d"+Bootstrapper.data.resolve(["19470"])+"\x26v2\x3d"+totalAmt+"\x26v3\x3d\x26s1\x3d"+merchId+"\x26s2\x3d\x26s3\x3d";allVariables={u1_CustomerId:custId,u2_MerchantId:merchId,u3_TotalAmount:totalAmt,u4_CurrencyCode:currencyCode,u5_FPTIPage:fptiPage,u6_FPTIPageGroup:pageGroup,
u7_HREF:urlConstruct,u8_FPTIFlowName:flowName,XOFLOWID:XOFlowId,u9_FPTICookie:Bootstrapper.data.resolve(["19470"])[0],u10_CountryCode:window.dataLayer.contentCountry,u11_ContentLanguage:window.dataLayer.contentLanguage};return{dcmVars:dcmVars,mediaplexVars:mediaplexVars,mathVars:mathVars,allVariables:allVariables}};var watchURL=Bootstrapper.propertyWatcher.create(function(){return window.location.href.toLowerCase()});var watchDataTrack=Bootstrapper.propertyWatcher.create(function(){var dataTrack=
"";if(window.dataLayer!==null&&window.dataLayer!==undefined)if(window.dataLayer.dataTrack&&window.dataLayer.dataTrack.length>0)dataTrack=window.dataLayer.dataTrack;return dataTrack});var ppmeCreation=Bootstrapper.propertyWatcher.create(function(){var slgsel="";if(window.fpti!==null&&window.fpti!==undefined)if(window.fpti.slgsel&&window.fpti.slgsel.length>0)slgsel=window.fpti.slgsel;return slgsel});var applicationStatus=Bootstrapper.propertyWatcher.create(function(){var appStatus="";if(window.appStatus!==
null&&window.appStatus!==undefined)appStatus=window.appStatus;return appStatus});var sendPgrp=Bootstrapper.propertyWatcher.create(function(){var fptiPgrp="";if(window.fpti!==null&&window.fpti!==undefined)if(window.fpti.pgrp!==null&&window.fpti.pgrp!==undefined)fptiPgrp=window.fpti.pgrp;return fptiPgrp});var fired=0;var setFired=Bootstrapper.propertyWatcher.create(function(){if(window.location.href.toLowerCase().indexOf("personalinfo")>1||window.location.href.toLowerCase().indexOf("request/success")>
1||window.location.href.toLowerCase().indexOf("/checkoutnow/")>0||window.location.href.toLowerCase().indexOf("/webapps/hermes")>0||window.location.href.toLowerCase().indexOf("/webscr")>0||window.location.href.toLowerCase().indexOf("hs\x3dactivateemail")>1||window.location.href.toLowerCase().indexOf("hs\x3ddoneverified")>1||window.location.href.toLowerCase().indexOf("created")===0||window.location.href.toLowerCase().indexOf("/invoice/")>1||window.location.href.toLowerCase().indexOf("ppcreditapply/da/us/submit")>
1||window.location.href.toLowerCase().indexOf("ppcreditapply/te/us/submit")>1||window.location.href.toLowerCase().indexOf("ppcreditapply/da/us/decision")>1||window.location.href.toLowerCase().indexOf("ppcreditapply/te/us/decision")>1||window.location.href.toLowerCase().indexOf("da/gb/decision")>1||window.location.href.toLowerCase().indexOf("te/gb/decision")>1||document.referrer.indexOf("application")>-1&&window.location.href.indexOf("/dashboard")>-1)fired++;return fired});watchDataTrack.change=function(oldVal,
newVal){if(newVal==="Finish"){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dConsumerSignup\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");
fired=0}};if(window.location.href.toLowerCase().indexOf("personalinfo")>1){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dMerchantSignup\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+
"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}var AMT=readAmt=CurCode="";Bootstrapper.on("click","button.vx_btn.submitButton_1sxl9gz.preview-sendMoney",function(){if(window.location.href.indexOf("send/preview")>0){if(document.querySelectorAll("span.totalAmount.col-xs-5.txtRight")){readAmt=document.querySelectorAll("span.totalAmount.col-xs-5.txtRight")[0];if(readAmt!==undefined&&readAmt!==null)AMT=readAmt.innerText}if(document.getElementsByClassName("select_miqu48"))CurCode=document.getElementsByClassName("select_miqu48")[0].value;
Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dTransaction-SndMnyP2PPayFlow-P2PPayFlow\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d"+
CurCode+"\x26cd[P2PTPV]\x3d"+AMT);fired=0}});Bootstrapper.on("click","#confirmButtonTop",function(){if(window.location.href.indexOf("/checkoutnow/")>0||window.location.href.indexOf("/webapps/hermes")>0||window.location.href.indexOf("/webscr")>0){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dTransaction-HermesFlowTxnEnd-HermesFlow\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+
"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}});watchURL.change=function(oldUrl,newUrl){if(newUrl.indexOf("hs\x3dactivateemail")>1||newUrl.indexOf("hs\x3ddoneverified")>1){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-PPHSuccess-MobileMerchant\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+
window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}};ppmeCreation.change=function(oldVal,newVal){if(newVal.toLowerCase().indexOf("created")===0){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-PayPalMeSUFin-PayPalMe\x26noscript\x3d1"+
"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}};Bootstrapper.on("click","input#previewInvoice, input#sendInvoice, div#saveAsDraft",function(event){if(window.location.href.indexOf("/invoice/")>
1){var id=event.target.id;if(id==="previewInvoice"&&sessionStorage.getItem("previewInvoiceBtnFB")===null){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-InvoiceFin-Invoice\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+
window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");sessionStorage.setItem("previewInvoiceBtnFB","Fired")}else if(id==="sendInvoice"&&sessionStorage.getItem("sendInvoiceBtnFB")===null){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-InvoiceFin-Invoice\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+
"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");sessionStorage.setItem("sendInvoiceBtnFB","Fired")}else if(id==="saveAsDraft"&&sessionStorage.getItem("saveAsDraftBtnFB")===null){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-InvoiceFin-Invoice\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+
window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");sessionStorage.setItem("saveAsDraftBtnFB","Fired")}fired=0}});applicationStatus.change=function(oldVal,newVal){if(window.location.href.toLowerCase().indexOf("ppcreditapply/da/us/submit")>
1||window.location.href.toLowerCase().indexOf("ppcreditapply/te/us/submit")>1||window.location.href.toLowerCase().indexOf("ppcreditapply/da/us/decision")>1||window.location.href.toLowerCase().indexOf("ppcreditapply/te/us/decision")>1)if(newVal.toLowerCase().indexOf("approved")===0||newVal.toLowerCase().indexOf("approved")>0){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-CreditApproved-PayPalCreditApply\x26noscript\x3d1"+"\x26cd[MerchantID]\x3d"+
window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}};if(document.referrer.indexOf("application")>-1&&window.location.href.indexOf("/dashboard")>-1){Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dProductSignup-PPWCLoanFunded-PayPalWorkingCapital\x26noscript\x3d1"+
"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d");fired=0}setFired.change=function(oldVal,newVal){if(newVal===0)Bootstrapper.imageRequest("https://www.facebook.com/tr?id\x3d1674696026155243\x26ev\x3dViewContent\x26noscript\x3d1"+
"\x26cd[MerchantID]\x3d"+window.ensightenVariables().allVariables.u2_MerchantId+"\x26cd[MerchantTPV]\x3d"+window.ensightenVariables().allVariables.u3_TotalAmount+"\x26cd[MerchantTransaction]\x3d"+window.ensightenVariables().allVariables.u4_CurrencyCode+"\x26cd[FPTICookie]\x3d"+window.ensightenVariables().allVariables.u9_FPTICookie+"\x26cd[P2PTransaction]\x3d\x26cd[P2PTPV]\x3d")}},2061863,484903);
