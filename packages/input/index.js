// 导入组件，组件必须声明 name
import hInput from './input.vue'
// 为组件提供 install 安装方法，供按需引入
hInput.install = function (Vue) {
  Vue.component(hInput.name, hInput)
}
// 默认导出组件
export default hInput