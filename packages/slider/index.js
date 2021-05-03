// 导入组件，组件必须声明 name
import hRadio from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hRadio.install = function (Vue) {
  Vue.component(hRadio.name, hRadio)
}
// 默认导出组件
export default hRadio