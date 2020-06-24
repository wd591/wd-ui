import WdButton from './src/button'

/* istanbul ignore next */
WdButton.install = function (Vue) {
  Vue.component(WdButton.name, WdButton)
}

export default WdButton
