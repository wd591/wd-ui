import WdButton from './button/src/button.vue'
import WdDialog from './dialog/src/component.vue'
import WdInput from './input/src/main.vue'
import './theme-chalk/src/index.scss'

const components = [
  WdButton,
  WdDialog,
  WdInput
]

const install = function (Vue) {
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否是直接引入文件 如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
