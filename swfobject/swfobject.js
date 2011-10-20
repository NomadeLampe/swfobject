/*!	SWFObject v2.3 <http://github.com/swfobject/swfobject>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var E="undefined",s="object",U="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",r="application/x-shockwave-flash",T="SWFObjectExprInst",y="onreadystatechange",Q=window,i=document,u=navigator,W=false,X=[],p=[],P=[],K=[],k,S,G,C,L=false,a=false,o,I,l=true,n=false,O=function(){var ad=typeof i.getElementById!=E&&typeof i.getElementsByTagName!=E&&typeof i.createElement!=E,ak=u.userAgent.toLowerCase(),ab=u.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=u.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof u.plugins!=E&&typeof u.plugins[U]==s){ae=u.plugins[U].description;if(ae&&(typeof u.mimeTypes!=E&&u.mimeTypes[r]&&u.mimeTypes[r].enabledPlugin)){W=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=parseInt(ae.replace(/^(.*)\..*$/,"$1"),10);aj[1]=parseInt(ae.replace(/^.*\.(.*)\s.*$/,"$1"),10);aj[2]=/[a-zA-Z]/.test(ae)?parseInt(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof Q.ActiveXObject!=E){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[parseInt(ae[0],10),parseInt(ae[1],10),parseInt(ae[2],10)]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),j=function(){if(!O.w3){return}if((typeof i.readyState!=E&&i.readyState=="complete")||(typeof i.readyState==E&&(i.getElementsByTagName("body")[0]||i.body))){f()}if(!L){if(typeof i.addEventListener!=E){i.addEventListener("DOMContentLoaded",f,false)}if(O.ie&&O.win){i.attachEvent(y,function aa(){if(i.readyState=="complete"){i.detachEvent(y,aa);f()}});if(Q==top){(function ac(){if(L){return}try{i.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()})()}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(i.readyState)){setTimeout(ab,0);return}f()})()}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=D("span");ad.style.display="none";ac=i.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function t(ab){if(typeof Q.addEventListener!=E){Q.addEventListener("load",ab,false)}else{if(typeof i.addEventListener!=E){i.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!=E){h(Q,"onload",ab)}else{if(typeof Q.onload=="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=i.getElementsByTagName("body")[0];var ae=D(s);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",r);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!=E){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[parseInt(ag[0],10),parseInt(ag[1],10),parseInt(ag[2],10)]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;J()})()}else{J()}}function J(){var aj=p.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=p[ai].id;var ae=p[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(H(p[ai].swfVersion)&&!(O.wk&&O.wk<312)){x(ab,true);if(ae){ad.success=true;ad.ref=A(ab);ad.id=ab;ae(ad)}}else{if(p[ai].expressInstall&&B()){var al={};al.data=p[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{q(ah);if(ae){ae(ad)}}}}}else{x(ab,true);if(ae){var ac=A(ab);if(ac&&typeof ac.SetVariable!=E){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(W){Y()}else{J()}};function A(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName==="OBJECT"){if(typeof ab.SetVariable!==E){aa=ab}else{aa=ab.getElementsByTagName(s)[0]||ab}}return aa}function B(){return !a&&H("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function F(aa){if(aa&&aa.readyState==4){aa.parentNode.removeChild(aa)}else{setTimeout(F,10)}}function R(ad,ae,aa,ac){a=true;G=ac||null;C={success:false,id:aa};var ah=c(aa);if(ah){if(ah.nodeName=="OBJECT"){k=g(ah);S=null}else{k=ah;S=aa}ad.id=T;if(typeof ad.width==E||(!/%$/.test(ad.width)&&parseInt(ad.width,10)<310)){ad.width="310"}if(typeof ad.height==E||(!/%$/.test(ad.height)&&parseInt(ad.height,10)<137)){ad.height="137"}i.title=i.title.slice(0,47)+" - Flash Player Installation";var ag=O.ie&&O.win?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+i.title;if(typeof ae.flashvars!=E){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&O.win&&ah.readyState!=4){var ab=D("div");aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";F(ah)}v(ad,ae,aa)}}function q(ab){if(O.ie&&O.win&&ab.readyState!=4){var aa=D("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(g(ab),aa);ab.style.display="none";F(ab)}else{ab.parentNode.replaceChild(g(ab),ab)}}function g(af){var ae=D("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(s)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName=="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function m(aa,ab){var ac=D("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function v(ai,ag,ab){var aa,ad=c(ab);if(O.wk&&O.wk<312){return aa}if(ad){var ac=(O.ie)?D("div"):D(s),af,ah,ae;if(typeof ai.id==E){ai.id=V(ab)?ab.id:ab}for(ae in ag){if(ag.hasOwnProperty(ae)&&ae.toLowerCase()!=="movie"){e(ac,ae,ag[ae])}}if(O.ie){ac=m(ai.data,ac.innerHTML)}for(af in ai){if(ai.hasOwnProperty(af)){ah=af.toLowerCase();if(ah==="styleclass"){ac.setAttribute("class",ai[af])}else{if(ah!=="classid"&&ah!=="data"){ac.setAttribute(af,ai[af])}}}}if(O.ie&&O.win){P[P.length]=ai.id}else{ac.setAttribute("type",r);ac.setAttribute("data",ai.data)}ad.parentNode.replaceChild(ac,ad);aa=ac}return aa}function e(ac,aa,ab){var ad=D("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function z(ac){var ab=c(ac);if(ab&&ab.nodeName=="OBJECT"){if(O.ie&&O.win){ab.style.display="none";(function aa(){if(ab.readyState==4){b(ac)}else{setTimeout(aa,10)}})()}else{ab.parentNode.removeChild(ab)}}}function b(ac){var ab=c(ac);if(ab){for(var aa in ab){if(typeof ab[aa]=="function"){ab[aa]=null}}ab.parentNode.removeChild(ab)}}function V(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function c(ac){if(V(ac)){return ac}var aa=null;try{aa=i.getElementById(ac)}catch(ab){}return aa}function D(aa){return i.createElement(aa)}function h(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function H(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=parseInt(aa[0],10);aa[1]=parseInt(aa[1],10)||0;aa[2]=parseInt(aa[2],10)||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function w(af,ab,ag,ae){if(O.ie&&O.mac){return}var ad=i.getElementsByTagName("head")[0];if(!ad){return}var aa=(ag&&typeof ag=="string")?ag:"screen";if(ae){o=null;I=null}if(!o||I!=aa){var ac=D("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);o=ad.appendChild(ac);if(O.ie&&O.win&&typeof i.styleSheets!=E&&i.styleSheets.length>0){o=i.styleSheets[i.styleSheets.length-1]}I=aa}if(O.ie&&O.win){if(o&&typeof o.addRule!=E){o.addRule(af,ab)}}else{if(o&&typeof i.createTextNode!=E){o.appendChild(i.createTextNode(af+" {"+ab+"}"))}}}function x(ac,aa){if(!l){return}var ab=aa?"visible":"hidden";if(L&&c(ac)){c(ac).style.visibility=ab}else{w("#"+ac,"visibility:"+ab)}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!=null;return aa&&typeof encodeURIComponent!=E?encodeURIComponent(ab):ab}var d=function(){if(O.ie&&O.win){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){z(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;p[p.length]=ab;x(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return A(aa)}},embedSWF:function(ae,ak,ah,aj,ab,ad,ac,ag,ai,af){var aa={success:false,id:ak};if(O.w3&&!(O.wk&&O.wk<312)&&ae&&ak&&ah&&aj&&ab){x(ak,false);M(function(){ah+="";aj+="";var am={};if(ai&&typeof ai===s){for(var ap in ai){am[ap]=ai[ap]}}am.data=ae;am.width=ah;am.height=aj;var aq={};if(ag&&typeof ag===s){for(var an in ag){aq[an]=ag[an]}}if(ac&&typeof ac===s){for(var al in ac){if(ac.hasOwnProperty(al)){var ao=(n)?encodeURIComponent(al):al,ar=(n)?encodeURIComponent(ac[al]):ac[al];if(typeof aq.flashvars!=E){aq.flashvars+="&"+ao+"="+ar}else{aq.flashvars=ao+"="+ar}}}}if(H(ab)){var at=v(am,aq,ak);if(am.id==ak){x(ak,true)}aa.success=true;aa.ref=at;aa.id=at.id}else{if(ad&&B()){am.data=ad;R(am,aq,ak,af);return}else{x(ak,true)}}if(af){af(aa)}})}else{if(af){af(aa)}}},switchOffAutoHideShow:function(){l=false},enableUriEncoding:function(aa){n=(typeof aa===E)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:H,createSWF:function(ac,ab,aa){if(O.w3){return v(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&B()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){z(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){w(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:t,getQueryParamValue:function(ad){var ac=i.location.search||i.location.hash;if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(ad==null){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(T);if(aa&&k){aa.parentNode.replaceChild(k,aa);if(S){x(S,true);if(O.ie&&O.win){k.style.display="block"}}if(G){G(C)}}a=false}}}}();