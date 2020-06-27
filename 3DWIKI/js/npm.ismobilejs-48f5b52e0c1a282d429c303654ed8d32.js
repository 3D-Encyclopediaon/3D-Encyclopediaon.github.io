(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{G9Ht:function(i,e,t){var n,o,d;
/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
!function(t){var s=/iPhone/i,r=/iPod/i,b=/iPad/i,h=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,p=/Android/i,a=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,l=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,w=/Windows Phone/i,c=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,v=/BlackBerry/i,f=/BB10/i,A=/Opera Mini/i,F=/(CriOS|Chrome)(?=.*\bMobile\b)/i,u=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,K=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),W=function(i,e){return i.test(e)},x=function(i){var e=i||navigator.userAgent,t=e.split("[FBAN");if(void 0!==t[1]&&(e=t[0]),void 0!==(t=e.split("Twitter"))[1]&&(e=t[0]),this.apple={phone:W(s,e),ipod:W(r,e),tablet:!W(s,e)&&W(b,e),device:W(s,e)||W(r,e)||W(b,e)},this.amazon={phone:W(a,e),tablet:!W(a,e)&&W(l,e),device:W(a,e)||W(l,e)},this.android={phone:W(a,e)||W(h,e),tablet:!W(a,e)&&!W(h,e)&&(W(l,e)||W(p,e)),device:W(a,e)||W(l,e)||W(h,e)||W(p,e)},this.windows={phone:W(w,e),tablet:W(c,e),device:W(w,e)||W(c,e)},this.other={blackberry:W(v,e),blackberry10:W(f,e),opera:W(A,e),firefox:W(u,e),chrome:W(F,e),device:W(v,e)||W(f,e)||W(A,e)||W(u,e)||W(F,e)},this.seven_inch=W(K,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},y=function(){var i=new x;return i.Class=x,i};i.exports&&"undefined"==typeof window?i.exports=x:i.exports&&"undefined"!=typeof window?i.exports=y():(o=[],n=t.isMobile=y(),void 0===(d="function"==typeof n?n.apply(e,o):n)||(i.exports=d))}(this)}}]);
//# sourceMappingURL=npm.ismobilejs-48f5b52e0c1a282d429c303654ed8d32.js.map