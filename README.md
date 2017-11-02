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

## Use browser

```html
<script src="/path/to/dist/calc_framerate.js"></script>
<script>
var Frame = new CalcFrameRate()
</script>
```

## Use npm install

```bash
$ npm i -D calc-framerate
```

```babel
// ex. babel
import CalcFrameRate from 'calc-framerate'
```

## Usage

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


### onAsc()

0,1,2,3...と昇順でフレーム番号を取得する。  
0が設定した秒数のタイミング。

```babel
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  requestAnimationFrame(render)
  
  const frame = Frame.onAsc()
  if(frame === 0){
    // 何か処理
   }
}

render()
```

#### options

なし

### onDesc()

...3,2,1,0と降順でフレーム番号を取得する。  
0が設定した秒数のタイミング。

```babel
const Frame = new CalcFrameRate(30.0, 4000);

function render(){
  requestAnimationFrame(render)
  
  const frame = Frame.onDesc()
  if(frame === 0){
    // 何か処理
   }
}

render()
```

#### options

なし
