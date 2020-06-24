import WdDialog from './src/component'

/* istanbul ignore next */
WdDialog.install = function (Vue) {
  Vue.component(WdDialog.name, WdDialog)
}

export default WdDialog
