/*!
Calculating Frame Rate v0.0.1
Calculating frame rate at used by requestAnimationFrame
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/calc-framerate
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CalcFrameRate = factory());
}(this, (function () { 'use strict';

  var asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap: function (fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function (value) {
        return new AwaitValue(value);
      }
    };
  }();





  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _NOW_ = window.performance && (performance.now || performance.mozNow || performance.oNow || performance.webkitNow);

  /**
   * @example
   * var frame = new FrameRate(30.0, 4000)
   *
   * function render(){
   *   requestAnimationFrame(render);
   *
   *   var asc = frame.onAsc();
   *   if(asc === 0){
   *     // frame start 0 -> n
   *   }
   *
   *   var desc = frame.onDesc();
   *   if(desc === 0){
   *     // frame start n -> 0
   *   }
   * }
   *
   * render();
   */

  var _class = function () {
    /**
     * setting
     * @param {number} [fps=30.0]
     * @param {number} [speed=4000]
     */
    function _class() {
      var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30.0;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
      classCallCheck(this, _class);

      this._fps = fps;
      this._start = this._getTime();
      this._sheet = speed / 1000 * this._fps >> 0;

      // error
      if (typeof fps !== 'number') {
        console.error('\'' + fps + '\' is not number. \'fps\' must be numeric.');
      }
      if (typeof speed !== 'number') {
        console.error('\'' + speed + '\' is not number. \'speed\' must be numeric.');
      }
    }

    /**
     * get now time
     * @returns {*|number}
     * @private
     */


    _class.prototype._getTime = function _getTime() {
      return _NOW_ && _NOW_.call(performance) || new Date().getTime();
    };

    /**
     * start to 0 -> n
     * @returns {number}
     */


    _class.prototype.onAsc = function onAsc() {
      var time = this._getTime();
      return Math.floor((time - this._start) / (1000.0 / this._fps) % this._sheet);
    };

    /**
     * start to n -> 0
     * @returns {number}
     */


    _class.prototype.onDesc = function onDesc() {
      var frame = this.onAsc();
      return Math.floor(this._sheet - 1 - frame);
    };

    return _class;
  }();

  return _class;

})));
