import { createApp } from 'vue';
import App from './App.vue';
import './app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router/router.js';

library.add(faUserSecret);

var app = createApp(App);

app.use(router);

app.component('fa-icon', FontAwesomeIcon);

app.config.productionTip = false;

app.mount('#app');
