// 导入组件，组件必须声明 name
import hButton from './button.vue'
// 为组件提供 install 安装方法，供按需引入
hButton.install = function (Vue) {
  Vue.component(hButton.name, hButton)
}
// 默认导出组件
export default hButton