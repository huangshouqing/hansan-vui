// 导入组件，组件必须声明 name
import hTab from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hTab.install = function (Vue) {
  Vue.component(hTab.name, hTab)
}
// 默认导出组件
export default hTab