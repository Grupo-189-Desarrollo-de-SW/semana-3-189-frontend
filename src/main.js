import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

const base= axios.create({
  baseURL: "http://localhost:3000"
  //baseURL:"https://safe-waters-18200.herokuapp.com"
});

Vue.prototype.$http= base;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
