import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
import VFacebookLogin from 'vue-facebook-login-component'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.component('test', VFacebookLogin)

Vue.use(VueSweetalert2)
