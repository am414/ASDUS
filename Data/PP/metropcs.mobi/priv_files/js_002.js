var $=jQuery.noConflict();var marketcode;function getMarketCode(){if(navigator.cookieEnabled){var zipcodeEntered=$('#zipcode').val();if(zipcodeEntered.localeCompare('')===0){$('#zipemptyerror').show();$('#zipemptyerror').html("Please enter a zip code");$('#zipinvaliderror').hide();$('#zipcode').attr('aria-invalid','true');}else{if(/[^a-zA-Z0-9]/.test(zipcodeEntered)){$('#zipemptyerror').show();$('#zipemptyerror').html("Enter a valid zip code");$('#zipcode').attr('aria-invalid','true');return false;}
$(location).attr('href');var pathname=window.location.pathname;document.getElementById('currentPage').value=pathname;tmoLocalStorage.set('zipEntered',zipcodeEntered);$("#zipcodeForm").submit();}
$("#zipcode").focus(function(){$('#zipemptyerror').hide();$('#zipinvaliderror').hide();$('#zipcode').attr('aria-invalid','false');});}else{$('.modal-error-button').click();}}
function editZip(){if(navigator.cookieEnabled){$('#succZipText').css('display','none');$('#zipcode').css('display','inline');$('#submit-search').css('display','inline');if(('').localeCompare(tmoLocalStorage.get('zipEntered'))!==0){$('#zipcode').val(tmoLocalStorage.get('zipEntered'));$('#zipcode').select();}}else{$('.modal-error-button').click();}}
$(document).ready(function(){if(('null').localeCompare(tmoLocalStorage.get('zipEntered'))===0){getZipCode();}
$("#zipcode").focusin(function(){$('#zipinvaliderror').hide();$('#zipcode').attr('aria-invalid','false');if("placeholder"in document.createElement("input")){return;}
else{$('[placeholder]').focus(function(){var input=$(this);if(input.val()===input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()===''||input.val()===input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur();$('[placeholder]').parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');}});});}});if(navigator.cookieEnabled){var name="MP_MARKETCODE"+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=$.trim(ca[i]);if(c.indexOf(name)==0){marketcode=c.substring(name.length,c.length);break;}}
if((('"000"').localeCompare(marketcode)===0)){$('#succZipText').css('display','none');$('#zipcode').css('display','inline');$('#submit-search').css('display','inline');$('#zipinvaliderror').show();$('#zipcode').attr('aria-invalid','true');}
else{if(('null').localeCompare(tmoLocalStorage.get('zipEntered'))!==0){$('#succZipCode').html(tmoLocalStorage.get('zipEntered'));$('#succZipText').css('display','inline');$('#zipcode').css('display','none');$('#submit-search').css('display','none');}
else{$('#succZipText').css('display','none');$('#zipcode').css('display','inline');$('#submit-search').css('display','inline');}}}
else{$('#succZipText').css('display','none');$('#zipcode').css('display','inline');$('#submit-search').css('display','inline');}});function getZipCode(){var response=tmoCaller.callSync({url:"/apps/mpcs/servlet/MarketEnablementServlet.html",data:"",tmoOptions:{componentEl:".error"}});var resultObj=jQuery.parseJSON(response);if(null!==resultObj.zipcodeVal&&""!==resultObj.zipcodeVal){tmoLocalStorage.set('zipEntered',resultObj.zipcodeVal);}}