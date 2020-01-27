// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import ProductZoomer from 'vue-product-zoomer'
import vuetify from 'vuetify'
import Vuex from 'vuex'
import store from './vuex/store'


Vue.use(Router)
Vue.use(Vuex)
Vue.use(ProductZoomer)
Vue.use(vuetify)


window.addEventListener('touchstart',event=>{
  console.log(event)
},{passive:true})

/*eslint-disable*/
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  vuetify:new vuetify(),
  components: { App },
  template: '<App/>'
})
