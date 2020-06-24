import WdInput from './src/main'

/* istanbul ignore next */
WdInput.install = function (Vue) {
  Vue.component(WdInput.name, WdInput)
}

export default WdInput
