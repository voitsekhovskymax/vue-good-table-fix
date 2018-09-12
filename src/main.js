import Vue from 'vue'
import App from './App'


//custom Link to the  plugin
import VueGoodTablePlugin from './../vue-good-table-master/src/';

// import the styles plugin
import './../vue-good-table-master/dist/vue-good-table.css'

//Include 
Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
