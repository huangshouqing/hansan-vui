import hNotice from './notice.vue'

hNotice.install = function (Vue) {
  // 全局注册
  Vue.component(hNotice.name, hNotice)
  function msg (type, options, callBack) {
    // 创建构造器
    let Constructor = Vue.extend(hNotice)
    // 创建 newMessage 实例
    let Options = {
      type: type,
      message: options.message,
      autoclose: options.autoclose,
      duration: options.duration,
      buttonClose: {
        buttonText: options.buttonClose.buttonText,
        isShow: options.buttonClose.isShow,
        callback: callBack
      }
    }
    let newMessage = new Constructor({
      propsData: { ...Options }
    })
    //并挂载到一个元素上。
    let vm = newMessage.$mount()
    let el = vm.$el
    el.setAttribute('data-notice', Math.random())
    //将伪数组转为真数组，为了使用数组的方法
    var bodychildrens = Array.prototype.slice.call(document.body.children);
    // let flag = true
    let arr = []
    bodychildrens.forEach(item => {
      if (item.getAttribute('data-notice'))
      {
        // flag = false
        arr.push(item)
        document.body.removeChild(item)
      }
    })

    // 把生成的提示的dom插入body中
    document.body.appendChild(el)
    // flag && document.body.appendChild(el)

  }
  let $hNotice = function (options, callBack) {
    if (!options) return
    msg(options.type, options, callBack)
  }
  $hNotice.info = function (options, callBack) {
    if (!options) return
    msg('info', options, callBack)
  };
  $hNotice.success = function (options, callBack) {
    if (!options) return
    msg('success', options, callBack)
  };
  $hNotice.error = function (options, callBack) {
    if (!options) return
    msg('error', options, callBack)
  };
  $hNotice.warning = function (options, callBack) {
    if (!options) return
    msg('warning', options, callBack)
  };

  Vue.prototype.$hNotice = $hNotice
}
export default hNotice