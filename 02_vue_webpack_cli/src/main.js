import Vue from 'vue' // 설치했기 때문에 사용가능
import App from './App.vue' // export default 랑 한셋트
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
