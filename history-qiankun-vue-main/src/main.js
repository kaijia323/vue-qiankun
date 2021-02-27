import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './elementUi'
import {
  registerMicroApps,
  start
} from 'qiankun'
import { microApps } from '@/qiankun/micro'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps(microApps, {
  beforeLoad: app => console.log('beforeLoad ===> ', app.name),
  beforeMount: app => console.log('beforeMount ===> ', app.name),
  afterMount: app => console.log('afterMount ===> ', app.name),
  beforeUnmount: app => console.log('beforeUnmount ===> ', app.name),
  afterUnmount: app => console.log('afterUnmount ===> ', app.name)
})

start()
