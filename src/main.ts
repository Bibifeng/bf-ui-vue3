import './lib/bf.scss';
import './assets/css/base.scss';
import './assets/iconfont/svg.js';
import 'github-markdown-css/github-markdown-light.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import components from './components';

const app = createApp(App);
app.use(router);
app.use(components);
app.mount('#app');
