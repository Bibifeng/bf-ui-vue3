import Box from './bf-box.vue';
import { createApp, h } from 'vue';
export const openBfBox = (options) => {
    const { title, content, onOk, onCancel, closeOverlay } = options;
    const boxDiv = document.createElement('div');
    document.body.appendChild(boxDiv);
    const app = createApp({
        render: () => {
            // h方法第一个参数是模板，第二个参数是模板里的props属性(也就是html里的“:”写法)，第三个参数是具名slot
            return h(
                Box,
                {
                    visible: true,
                    title: title,
                    onOk,
                    onCancel,
                    closeOverlay,
                    'onUpdate:visible': (nv) => {
                        if (nv === false) {
                            app.unmount(boxDiv); // 销毁弹窗
                            boxDiv.remove();
                        }
                    }
                },
                {
                    content,
                },
            );
        }
    });
    app.mount(boxDiv);
};