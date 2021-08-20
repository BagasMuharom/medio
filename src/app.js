import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import PrimaryButton from './components/buttons/PrimaryButton.vue';
import StandardModal from './components/modal/StandardModal.vue';
import LineSeparator from './components/utilities/LineSeparator.vue';
import SoalPilihanGanda from './components/app/layouts/soal/SoalPilihanGanda.vue';
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
app.component('btn-primary', PrimaryButton);
app.component('std-modal', StandardModal);
app.component('line-separator', LineSeparator);
app.component('soal-pilihan-ganda', SoalPilihanGanda);

// configuration
app.config.productionTip = false;

// mount to element
app.mount('#app');
