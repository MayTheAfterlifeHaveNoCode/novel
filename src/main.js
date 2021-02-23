import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import "../src/font/iconfont.css"
import store from './store'

import Vant from "vant"
import "vant/lib/index.css"
import {Lazyload} from "vant"

Vue.use(Vant)
Vue.use(Lazyload)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
