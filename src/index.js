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
   * @param {number} [ms=4000]
   */
  constructor (fps = 30.0, ms = 4000) {
    this._fps = fps
    this._start = this._getTime()
    this._sheet = ((ms / 1000) * this._fps) >> 0
    this._old = {
      asc: -1,
      desc: -1,
    }
    
    // error
    if (typeof fps !== 'number') {
      console.error(`'${fps}' is not number. 'fps' must be numeric.`)
    }
    if (typeof ms !== 'number') {
      console.error(`'${ms}' is not number. 'speed' must be numeric.`)
    }
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
   * timing is just (ASC)
   * @returns {boolean}
   */
  onAsc () {
    const asc = this.onAscFrame()
    const is_just = asc === 0 && this._old.asc !== asc
    
    this._old.asc = asc
    return is_just
  }
  
  /**
   * timing is just (DESC)
   * @returns {boolean}
   */
  onDesc () {
    const desc = this.onDescFrame()
    const is_just = desc === 0 && this._old.desc !== desc
    
    this._old.desc = desc
    return is_just
  }
  
  /**
   * start to 0 -> n
   * @returns {number}
   */
  onAscFrame () {
    const time = this._getTime()
    return Math.floor((time - this._start) / (1000.0 / this._fps) % this._sheet)
  }
  
  /**
   * start to n -> 0
   * @returns {number}
   */
  onDescFrame () {
    const frame = this.onAscFrame()
    return Math.floor(this._sheet - 1 - frame)
  }
}


