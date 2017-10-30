/*!
Calculating Frame Rate v0.0.1
Calculating frame rate at used by requestAnimationFrame
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/calc-framerate
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.CalcFrameRate=e()}(this,function(){"use strict";!function(){function t(t){this.value=t}function e(e){function n(r,i){try{var u=e[r](i),c=u.value;c instanceof t?Promise.resolve(c.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(u.done?"return":"normal",u.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,u){var c={key:t,arg:e,resolve:o,reject:u,next:null};i?i=i.next=c:(r=i=c,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}();var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=window.performance&&(performance.now||performance.mozNow||performance.oNow||performance.webkitNow);return function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3;t(this,n),this._fps=e,this._start=this._getTime(),this._sheet=o/1e3*this._fps>>0}return n.prototype._getTime=function(){return e&&e.call(performance)||(new Date).getTime()},n.prototype.onAsc=function(){var t=this._getTime();return Math.floor((t-this._start)/(1e3/this._fps)%this._sheet)},n.prototype.onDesc=function(){var t=this.onAsc();return Math.floor(this._sheet-1-t)},n}()});
