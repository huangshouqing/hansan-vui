// 导入组件，组件必须声明 name
import hMessage from './message.vue'
// 为组件提供 install 安装方法，供按需引入
hMessage.install = function (Vue) {
  // 全局注册
  Vue.component(hMessage.name, hMessage)
  function msg (type, options) {
    // 创建构造器
    let Constructor = Vue.extend(hMessage)
    // 创建 newMessage 实例
    let Options = {
      type: type,
      message: options.message,
      autoclose: options.autoclose,
      duration: options.duration,
    }
    let newMessage = new Constructor({
      propsData: { ...Options }
    })
    //并挂载到一个元素上。
    let vm = newMessage.$mount()
    let el = vm.$el
    el.setAttribute('data-message', Math.random())
    //将伪数组转为真数组，为了使用数组的方法
    var bodychildrens = Array.prototype.slice.call(document.body.children);
    //  let flag = true
    let arr = []
    bodychildrens.forEach(item => {
      if (item.getAttribute('data-message'))
      {
        //  flag = false
        arr.push(item)
        document.body.removeChild(item)
      }
    })

    // 把生成的提示的dom插入body中
    document.body.appendChild(el)

  }
  // 挂载到vue原型上，暴露四个方法
  let $hMessage = function (options) {
    if (!options) return
    msg(options.type, options)
  }
  $hMessage.info = function (options) {
    if (!options) return
    msg('info', options)
  };
  $hMessage.success = function (options) {
    if (!options) return
    msg('success', options)
  };
  $hMessage.error = function (options) {
    if (!options) return
    msg('error', options)
  };
  $hMessage.warning = function (options) {
    if (!options) return
    msg('warning', options)
  };
  Vue.prototype.$hMessage = $hMessage
}
// 默认导出组件
export default hMessage