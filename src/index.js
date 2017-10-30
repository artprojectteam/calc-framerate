const _NOW_ = window.performance &&
  (performance.now || performance.mozNow || performance.oNow ||
    performance.webkitNow)

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
export default class {
  /**
   * setting
   * @param {number} [fps=30.0]
   * @param {number} [speed=4000]
   */
  constructor (fps = 30.0, speed = 4000) {
    this._fps = fps
    this._start = this._getTime()
    this._sheet = ((speed / 1000) * this._fps) >> 0
  }
  
  /**
   * get now time
   * @returns {*|number}
   * @private
   */
  _getTime () {
    return (_NOW_ && _NOW_.call(performance)) || (new Date().getTime())
  }
  
  /**
   * start to 0 -> n
   * @returns {number}
   */
  onAsc () {
    const time = this._getTime()
    return Math.floor((time - this._start) / (1000.0 / this._fps) % this._sheet)
  }
  
  /**
   * start to n -> 0
   * @returns {number}
   */
  onDesc () {
    const frame = this.onAsc()
    return Math.floor(this._sheet - 1 - frame)
  }
}


