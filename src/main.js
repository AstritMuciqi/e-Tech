import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css';
import "./services/firebase";
// import "./services/firebase";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import vuetify from './plugins/vuetify';

library.add(fas, fab);

Vue.config.productionTip = false;

Vue.component('fa', FontAwesomeIcon);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");

