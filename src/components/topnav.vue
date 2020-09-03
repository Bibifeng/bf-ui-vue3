<template>
    <div class="top-nav">
        <div class="logo">
              <img alt="Vue logo" src="../assets/logo.png" />
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "topnav",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
.top-nav {
    background: antiquewhite;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .logo {
        img {
            width: 4em;
            height: 4em;
        }
        margin: 6px;
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