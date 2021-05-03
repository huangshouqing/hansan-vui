const packVersion = '0.0.1-alpha.20'
const r = ['color: #fff', 'border-top-left-radius:3px', 'border-bottom-left-radius:3px', 'background-color: #564b4f', 'padding: 5px'].join(';');
const i = ['color: #fff', 'border-top-right-radius:3px', 'border-bottom-right-radius:3px', 'background-color: #4fc08d', 'padding: 5px'].join(';');
console.log('%cq-vuiVersion %c'.concat(packVersion), r, i);
// Ensure you are using css-loader
import '@/assets/iconfont/index.scss'
// 导入组件
import hButton from "./button/index.js";
import hAnimationButton from "./animationButton/index.js";
import hMessage from "./message/index.js";
import hModal from "./modal/index.js";
import hNotice from "./notice/index.js";
import hPopmessage from './popmessage/index.js'
import hPopover from './popover/index.js'
import hTable from './table/index.js'
import hToast from './toast/index.js'
import hEditor from './editor/index.js'
import hCheckbox from './checkbox/index.js'
import hCheckboxGroup from './checkbox-group/index.js'
import hDatePicker from './date-picker/index.js'
import hRadio from './radio/index.js'
import hRadioGroup from './radio-group/index.js'
import hTabs from './tabs/index.js'
import hIcon from './icon/index.js'
import hInput from './input/index.js'
import hPagination from './pagination/index.js'
import hSlider from './slider/index.js'
// 存储组件列表
const components = { hButton,hAnimationButton, hMessage, hModal, hNotice, hPopmessage, hPopover, hTable, hToast, hEditor, hCheckbox, hCheckboxGroup, hDatePicker, hRadio, hRadioGroup, hTabs, hIcon, hInput, hPagination, hSlider };
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  Object.keys(components).forEach(index => {
    Vue.use(components[index])
  });
};

// 按需导入
export {
  hButton,hAnimationButton, hMessage, hModal, hNotice, hPopmessage, hPopover, hTable, hToast, hEditor, hCheckbox, hCheckboxGroup, hDatePicker, hRadio, hRadioGroup, hTabs, hIcon, hInput, hPagination, hSlider
}
// 全部导入
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  ...components,
};