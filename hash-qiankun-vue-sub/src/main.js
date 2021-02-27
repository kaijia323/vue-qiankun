import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import './elementUi'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let instance = null

function render (props = {}) {
  const { container } = props
  Vue.use(VueRouter) // 别忘了写这条，官网复制过来没有这个
  const router = new VueRouter({
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#hash-app-sub') : '#hash-app-sub') // 这里匹配的是public文件夹下面的index.html的id
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
} else {
  // eslint-disable-next-line no-undef,camelcase
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
