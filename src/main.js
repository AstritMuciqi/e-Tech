import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import loading from 'vuejs-loading-screen'
import './plugins/bootstrap-vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
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
Vue.use(loading,{
  slot: `
  <style>
  #loading-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  #loading-text {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: rgb(20, 121, 60);
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
  }

  #loading-content {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    margin: -85px 0 0 -85px;
    border: 3px solid #F00;
  }

  #loading-content {
    border: 3px solid transparent;
    border-top-color: rgb(121, 61, 185);
    border-bottom-color: rgb(121, 61, 185);
    border-radius: 50%;
    -webkit-animation: loader 2s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 2s linear infinite;
  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

  <div id="loading-wrapper">
    <div id="loading-text">LOADING</div>
    <div id="loading-content"></div>
  </div>


  `
})

Vue.component('fa', FontAwesomeIcon);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");

