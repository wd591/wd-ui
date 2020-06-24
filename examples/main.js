import Vue from 'vue'
import App from './App.vue'
// import './components/theme-chalk/src/index.scss'
// import WdButton from './components/button'
// import WdDialog from './components/dialog'
// import WdInput from './components/input'
import WdUI from './../packages'
Vue.config.productionTip = false
Vue.use(WdUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
