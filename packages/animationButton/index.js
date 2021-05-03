// 导入组件，组件必须声明 name
import hAnimationButton from './button.vue'
// 为组件提供 install 安装方法，供按需引入
hAnimationButton.install = function (Vue) {
  Vue.component(hAnimationButton.name, hAnimationButton)
}
// 默认导出组件
export default hAnimationButton