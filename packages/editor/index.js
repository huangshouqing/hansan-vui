import hEditor from "./editor.vue";
hEditor.install = function (Vue) {
  Vue.component(hEditor.name, hEditor)
}
export default hEditor