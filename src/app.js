import { createApp } from 'vue';
import App from './App.vue';
import './app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

var app = createApp(App);

library.add(faUserSecret);

app.component('fa-icon', FontAwesomeIcon);

app.config.productionTip = false;

app.mount('#app');
