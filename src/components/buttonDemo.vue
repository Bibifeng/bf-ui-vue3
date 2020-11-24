<template>
    <p class="eg-title">示例一：主题</p>
    <bf-button>默认主题</bf-button>
    <bf-button theme="button">button主题</bf-button>
    <bf-button theme="link">link主题</bf-button>
    <bf-button theme="text">text主题</bf-button>
    <p class="eg-title">示例二：尺寸大小</p>
    <div>
        <bf-button theme="button" size="small">small</bf-button>
        <bf-button theme="button" size="normal">normal</bf-button>
        <bf-button theme="button" size="big">big</bf-button>
    </div>
    <div>
        <bf-button theme="link" size="small">small</bf-button>
        <bf-button theme="link" size="normal">normal</bf-button>
        <bf-button theme="link" size="big">big</bf-button>
    </div>
    <div>
        <bf-button theme="text" size="small">small</bf-button>
        <bf-button theme="text" size="normal">normal</bf-button>
        <bf-button theme="text" size="big">big</bf-button>
    </div>
    <p class="eg-title">示例三：等级程度</p>
    <div>
        <bf-button theme="button" level="main">main</bf-button>
        <bf-button theme="button" level="normal">normal</bf-button>
        <bf-button theme="button" level="danger">danger</bf-button>
    </div>
    <div>
        <bf-button theme="link" level="main">main</bf-button>
        <bf-button theme="link" level="normal">normal</bf-button>
        <bf-button theme="link" level="danger">big</bf-button>
    </div>
    <div>
        <bf-button theme="text" level="main">main</bf-button>
        <bf-button theme="text" level="normal">normal</bf-button>
        <bf-button theme="text" level="danger">danger</bf-button>
    </div>
    <p class="eg-title">示例四：禁用效果</p>
    <div>
        <bf-button theme="button" disabled>button主题</bf-button>
        <bf-button theme="link" disabled>link主题</bf-button>
        <bf-button theme="text" disabled>text主题</bf-button>
    </div>
    <p class="eg-title">示例四：loading效果</p>
    <div>
        <bf-button theme="button" loading>loading</bf-button>
    </div>
</template>

<script lang="ts">
    import bfButton from '../lib/bf-button.vue'; // 一定要写后缀名
    export default {
        name: "buttonDemo",
        components: {
            bfButton,
        },
        setup() {
            const sayHi = () => {
                console.log('hi');
            };
            return {
                sayHi,
            }
        },
    }
</script>

<style lang="scss" scoped>
.eg-title {
    margin: 15px 0;
    font-weight: bold;
}
</style>