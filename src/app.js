import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router/router.js';
import './app.css';

// add font-awesome library
require('./lib/font-awesome');

// create app
var app = createApp(App);

// add router
app.use(router);

// add components
app.component('fa-icon', FontAwesomeIcon);

// configuration
app.config.productionTip = false;

// mount to element
app.mount('#app');
