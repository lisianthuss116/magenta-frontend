import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import Axios from './plugins/axios'
Vue.use(Axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
