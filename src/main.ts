import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import routes from 'pages-generated';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import './index.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(PrimeVue).mount('#app');
