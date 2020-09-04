<template>
    <div class="top-nav">
        <div class="logo" @click="showAside">
              <img alt="Vue logo" src="../assets/logo.png" />
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Ref, inject } from 'vue';
    export default {
        name: "topnav",
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible');
            const showAside = () => {
                asideVisible.value = !asideVisible.value;
            };
            return {showAside}
        }
    }
</script>

<style lang="scss" scoped>
.top-nav {
    background: antiquewhite;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    z-index: 10;
    .logo {
        img {
            width: 4em;
            height: 4em;
        }
        margin: 6px;
        cursor: pointer;
    }
    .menu {
        flex: 1;
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        justify-content: flex-end;
        overflow: hidden;
        > li {
            margin: 0 1em;
        }
    }
}
</style>