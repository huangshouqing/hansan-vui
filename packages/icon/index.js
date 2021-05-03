// 导入组件，组件必须声明 name
import hIcon from './index.vue'
// 为组件提供 install 安装方法，供按需引入
hIcon.install = function (Vue) {
  Vue.component(hIcon.name, hIcon)
}
// 默认导出组件
export default hIcon