# Calculating Frame Rate

![IE 11以上](https://img.shields.io/badge/IE-11+-green.svg)
![IE Edge 最新版](https://img.shields.io/badge/IE%20Egde-Latest-green.svg)
![Google Chrome 最新版](https://img.shields.io/badge/Google%20Chrome-Latest-green.svg)
![Mozilla Firefox 最新版](https://img.shields.io/badge/Mozilla%20Firefox-Latest-green.svg)
![Safari 最新版](https://img.shields.io/badge/Safari-Latest-green.svg)
![iOS 7以上](https://img.shields.io/badge/iOS-7+-green.svg)
![Android 4.4以上](https://img.shields.io/badge/Android-4.4+-green.svg)

Calculating frame rate at used by 'requestAnimationFrame'

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

```babel
// ex. babel
import CalcFrameRate from 'calc-framerate'
```

## Document

### initialize

```babel
const Frame = new CalcFrameRate();
const Frame2 = new CalcFrameRate(30.0, 4000);
```

#### options

引数は省略可能。

| params | default |
| ---  | --- |
| fps | 30.0 |
| speed | 4000 |

#### return

object

### onAsc()

カウントアップで設定したスピードごとにtrueを返す

```babel
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const is_just = Frame.onAsc()
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

### onDesc()

カウントダウンで設定したスピードごとにtrueを返す

```babel
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  const is_just = Frame.onDesc()
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

0,1,2,3...と昇順でフレーム番号を取得する。  

```babel
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

...3,2,1,0と降順でフレーム番号を取得する。  

```babel
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
