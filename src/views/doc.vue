<template>
    <topnav></topnav>
    <div class="content" v-if="asideVisible">
        <aside>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="doc/switch">switch</router-link>
                </li>
                <li>
                    <router-link to="doc/button">button</router-link>
                </li>
                <li>
                    <router-link to="doc/dialog">dialog</router-link>
                </li>
                <li>
                    <router-link to="doc/tabs">tabs</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</template>

<script lang="ts">
    import Topnav from '../components/topnav.vue';
    import { Ref, inject } from 'vue';
    export default {
        name: "doc",
        components: {
            Topnav,
        },
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible');
            return {asideVisible}
        }
    }
</script>

<style lang="scss" scoped>
    aside {
        background: lightblue;
        width: 150px;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 96px;
        > h2 {
            margin-bottom: 4px;
        }
        > ol {
            > li {
                padding: 4px 0;
            }
        }
    }
</style>