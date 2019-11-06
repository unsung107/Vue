# Vue Project 시작하기

## 1. node project 시작

```bash
$ npm init
```


## 2. vue 설치

```bash
$ npm init
```


## 3. webpack 설치
- D는 개발환경에 설치하겠다
- webpack 은 개발자의 편의성을 위한 툴
- webpack cli를 설치해야 webpack의 기능을 command line interface 로 실행가능

```bash
$ npm i -D webpack webpack-cli
```


## 4. webpack 설정파일 생성
```bash
$ touch webpack.config.js
```



## 5. webpack.config.js 설정

```js
const path = require('path')

// node.js 에서는 module 에서 특정 값을 export 하기 위해서는 아래와 같이
// module.exports 에 export 할 값들을 정의한다.
module.exports = { 

  // entry : 모든 파일들의 시작점
  entry: {
    // __dirname 은 최상위 위치 (Django의 BASE_DIR)
    app: path.join(__dirname, 'src', 'main.js')
  },

  // webpack 은 기본적으로 js만 변환가능, 따라서 css나 html 등은 모듈을 통해서 web이
  // 이해할 수 있도록 변환이 필요하다. 변환내용을 작성하는 곳.
  module: {},

  // webpack 을 통해서 번들된 결과를 추가 처리하는 부분
  plugins: {},

  // webpack 을 통해서 번들된 결과물이 정의되는 곳
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
}
```



## src/App.vue 생성

extensions 에서 

vetur 설치 후 src/App.vue 생성

`main.js`

```js
import Vue from 'vue' // 설치했기 때문에 사용가능
import App from './App.vue'
import { create } from 'domain'


// new Vue({
//   render: function(createElement) {
//     return createElement(App)
//   }
// }).$mount('#app')
// 줄인다
// new Vue({
//   render: createElement => createElement(App)
// }).$mount('#app')
// 줄인다
new Vue({
  render: h => h(App)
}).$mount('#app')

```



## vue-loader / vue-template-compiler 설치

- web은 js파일만 변환 가능,

```bash
$ npm install -D vue-loader vue-template-compiler
```

`webpack.config.js`

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.export = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },

  // webpack 을 통해서 번들된 결과를 추가 처리하는 부분
  plugins: [
    new VueLoaderPlugin()
   ],
}
```



## 모아봅시다!

```bash
$ npm run build
```

- dist/app.js 에 모든 js들을 모아줍니다!
- ./public 폴더를 만듭시다. app.js를 사용할겁니다.
- 수정이 일어나면 빌드를 해줘야한다...ㅠ
-  CSS 도 추가하려면 css-loader로 추가해줘야한다.. 