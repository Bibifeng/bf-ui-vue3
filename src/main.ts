import './lib/bf.scss';
import './assets/css/base.scss';
import './assets/iconfont/svg.js';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
