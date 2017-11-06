# Calculating Frame Rate

![IE 11以上](https://img.shields.io/badge/IE-11+-green.svg)
![IE Edge 最新版](https://img.shields.io/badge/IE%20Egde-Latest-green.svg)
![Google Chrome 最新版](https://img.shields.io/badge/Google%20Chrome-Latest-green.svg)
![Mozilla Firefox 最新版](https://img.shields.io/badge/Mozilla%20Firefox-Latest-green.svg)
![Safari 最新版](https://img.shields.io/badge/Safari-Latest-green.svg)
![iOS 7以上](https://img.shields.io/badge/iOS-7+-green.svg)
![Android 4.4以上](https://img.shields.io/badge/Android-4.4+-green.svg)

Calculating frame rate at used by 'requestAnimationFrame'  
FPSを基準に取得したいミリ秒までの合計フレーム数を計算し、requestAnimationFrame内で利用することで、指定したミリ秒の時かどうかの結果を返却するライブラリ。


## Caution

requestAnimationFrame自体はIE9で使用できないので、使用する際はpolyfillを使用してください。

## Usage

### Use browser

```html
<script src="/path/to/dist/calc_framerate.js"></script>
<script>
var Frame = new CalcFrameRate()
</script>
```

### Use npm install

```bash
$ npm i -D calc-framerate
```

```javascriprt
// ES6
import CalcFrameRate from 'calc-framerate'
```

## Document

### initialize

```javascriprt
const Frame = new CalcFrameRate();
const Frame2 = new CalcFrameRate(30.0, 4000);
```

#### options

引数は省略可能。

| params | default | |
| ---  | --- | --- |
| fps | 30.0 | FPS |
| ms | 4000 | ミリ秒 |

#### return

object

### isAscTrue()

カウントアップで呼び出したタイミングが設定したミリ秒ならtrueを返す。  
フレーム数が0からスタートのため、スタート直後もtrueを返す。  
内部的に呼び出した前回のフレーム数を保持しているため、最初に0になったタイミングのみtrueが返ってくる(trueが連続では返ってこない仕組み)

```javascriprt
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const is_just = Frame.isAscTrue()
  if(is_just === true){
    // 何か処理
   }
   
   requestAnimationFrame(render)
}

render()
```

#### options

なし

#### return

boolean

### isDescTrue()

カウントダウンで呼び出したタイミングが設定したミリ秒ならtrueを返す。  
フレーム総数から始まるので、スタート直後はfalseになる。  

```javascriprt
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const is_just = Frame.isDescTrue()
  if(is_just === true){
    // 何か処理
   }
   
   requestAnimationFrame(render)
}

render()
```

#### options

なし

#### return

boolean



### onAscFrame()

0,1,2,3...と昇順でフレーム数を取得する。  

```javascriprt
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const frame = Frame.onAscFrame()
  if(frame === 0){
    // 何か処理
   }
   
   requestAnimationFrame(render)
}

render()
```

#### options

なし

#### return

number

### onDescFrame()

...3,2,1,0と降順でフレーム数を取得する。  

```javascriprt
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const frame = Frame.onDescFrame()
  if(frame === 0){
    // 何か処理
   }
   
   requestAnimationFrame(render)
}

render()
```

#### options

なし

#### return

number
