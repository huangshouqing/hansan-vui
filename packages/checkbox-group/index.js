// 导入组件，组件必须声明 name
import hCheckboxGroup from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hCheckboxGroup.install = function (Vue) {
  Vue.component(hCheckboxGroup.name, hCheckboxGroup)
}
// 默认导出组件
export default hCheckboxGroup