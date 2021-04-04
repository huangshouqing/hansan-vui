import hToast from './toast.vue'
hToast.install = vue => {
  const ToastCon = vue.extend(hToast)
  const ins = new ToastCon()
  ins.$mount(document.createElement('div'))
  document.body.appendChild(ins.$el)
  //往vue上挂载$toast
  /**
   *duration 延长时间
   *msg 消息内容
   */
  vue.prototype.$hToast = (msg, duration = 3000) => {
    ins.message = msg
    ins.visible = true
    setTimeout(() => {
      ins.visible = false
    }, duration)
  }
}
export default hToast
