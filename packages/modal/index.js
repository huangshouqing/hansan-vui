import hModal from './modal.vue'
hModal.install = function (Vue) {
  Vue.component(hModal.name, hModal)
}
export default hModal