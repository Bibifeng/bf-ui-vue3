<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    导航栏 |
    <router-link to="/">Home</router-link> |
    <router-link to="/xxx">Home2</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
