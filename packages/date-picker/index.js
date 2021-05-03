// 导入组件，组件必须声明 name
import hDatePicker from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hDatePicker.install = function (Vue) {
  Vue.component(hDatePicker.name, hDatePicker)
}
// 默认导出组件
export default hDatePicker