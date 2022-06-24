import { createWebHistory, createRouter } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const _import = path => defineAsyncComponent(() => import(/* @vite-ignore */path));

const menus = [
    {
        path: '/doc/start',
        meta: {
            category: '指南',
            name: '开始',
        },
        component: _import('/src/views/doc/start/index.vue'),
    },
    {
        path: '/doc/switch',
        meta: {
            category: '基础组件',
            name: 'switch',
        },
        component: _import('/src/components/switchDemo.vue'),
    },
    {
        path: '/doc/button',
        meta: {
            category: '基础组件',
            name: 'button',
        },
        component: _import('/src/components/buttonDemo.vue'),
    },
    {
        path: '/doc/box',
        meta: {
            category: '基础组件',
            name: 'box',
        },
        component: _import('/src/components/boxDemo.vue'),
    },
    {
        path: '/doc/tabs',
        meta: {
            category: '基础组件',
            name: 'tabs',
        },
        component: _import('/src/components/tabsDemo.vue'),
    },
];

const routes = [
    {
        path: '/',
        component: _import('/src/views/home/index.vue'),
    },
    {
        path: '/doc',
        component: _import('/src/views/doc/index.vue'),
        redirect: '/doc/start',
        children: menus,
    },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
export { menus };
