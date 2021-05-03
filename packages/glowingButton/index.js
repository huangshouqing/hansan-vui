// 导入组件，组件必须声明 name
import hGlowingButton from './button.vue'
// 为组件提供 install 安装方法，供按需引入
hGlowingButton.install = function (Vue) {
  Vue.component(hGlowingButton.name, hGlowingButton)
}
// 默认导出组件
export default hGlowingButton