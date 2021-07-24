import { createApp } from 'vue';
import VurRoute from "vue-router";
import axios from 'axios';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import $ from "jquery";
import App from './App.vue';
import router from './router';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/styles.css';

library.add(fas);

createApp(App).component('fa', FontAwesomeIcon, $).use(router, axios, Vuelidate, library, FontAwesomeIcon, VurRoute).mount('#app');