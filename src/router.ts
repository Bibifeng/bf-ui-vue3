import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '/src/views/home.vue'
import Doc from '/src/views/doc.vue'
import SwitchDemo from '/src/components/switchDemo.vue'
import ButtonDemo from '/src/components/buttonDemo.vue'
import BoxDemo from '/src/components/boxDemo.vue'
import TabsDemo from '/src/components/tabsDemo.vue'
import DocHome from '/src/components/docDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: '',
                    component: DocHome
                },
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                    path: 'button',
                    component: ButtonDemo
                },
                {
                    path: 'box',
                    component: BoxDemo
                },
                {
                    path: 'tabs',
                    component: TabsDemo
                },
            ]
        }
    ],
})