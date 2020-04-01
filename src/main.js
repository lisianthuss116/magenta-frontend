import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

// Plugins
import Axios from './plugins/axios'

import vuetify from './plugins/vuetify';
Vue.use(Axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
