// 导入组件，组件必须声明 name
import hRadioGroup from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hRadioGroup.install = function (Vue) {
  Vue.component(hRadioGroup.name, hRadioGroup)
}
// 默认导出组件
export default hRadioGroup