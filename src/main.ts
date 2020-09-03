import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '/src/components/home/index.vue'
import Home2 from '/src/components/home/index2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/xxx',
            component: Home2
        }
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
