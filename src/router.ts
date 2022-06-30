import { createWebHistory, createRouter } from 'vue-router';
import { defineAsyncComponent, h } from 'vue';
import MarkdownPage from '/src/components/markdown-page/src/markdown-page.vue';

// 懒加载路由
const _import = path => defineAsyncComponent(() => import(/* @vite-ignore */path));
// md文件需要经过render函数利用MarkdownPage模板 生成vue component
const mdComponent = path => h(MarkdownPage, { path });

const menus = [
    {
        path: '/doc/start',
        meta: {
            category: '指南',
            name: '开始',
        },
        component: mdComponent('/src/views/doc/start/index.md'),
    },
    {
        path: '/doc/switch',
        meta: {
            category: '基础组件',
            name: 'switch',
        },
        component: _import('/src/views/doc/switch/index.vue'),
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
