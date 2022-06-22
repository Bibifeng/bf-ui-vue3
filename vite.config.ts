import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Vue 3 单文件组件的解析插件

const { resolve } = require('path');

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        /**
         * 配置别名时，需要在vite.config.ts 和 tsconfig.json 中同时配置
         *
         * 这样简单理解：编辑器中ts的校验提示，是用tsconfig中的配置；和项目的打包编译相关的，是用vite.config
         *
         * vite.config.js 里的是给 Rollup 看的，实际是 @rollup/plugin-alias 这个插件的配置项，用于 Rollup 构建时模块化查找路径。
         * tsconfig.json 里的是给 ts 看的，用于 TypeScript 构建时模块化查找路径。
         * 至于二者为什么会分开，其实就是解耦的缘故。比如你可能压根不用 TS 去开发、只是单纯的 JS；而 tsconfig.json 也不会去考虑你是不是用的 vite。二者在这点上是没有耦合的。
         */
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, 'src')
            },
            {
                find: "packages",
                replacement: resolve(__dirname, 'packages')
            }
        ]
    },
    // css变量预处理样式，非变量样式可直接在main.ts中引入即可
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/css/var.scss";' // 添加公共样式，无需在main.ts中引入
            }
        }
    }
});
