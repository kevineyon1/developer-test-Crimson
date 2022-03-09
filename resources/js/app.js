require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require('vue-moment'));

const router = new VueRouter({
    mode : 'history',
    routes : routes
})

const app = new Vue({
    el: '#app',
    router : router,
    render : h => h(App)
});
