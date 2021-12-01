<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 09:13:47
 * @LastEditiors: Rain
 * @LastEditTime: 2021-12-01 15:17:12
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <!-- <h1>{{ this.$store.state.demo }}</h1> -->
    <router-link to="/btn">
      <a-button type="danger">危险按钮</a-button>
    </router-link>
    <router-link to="/dragger_upload">
      <a-button type="primary">显示文件上传区域</a-button>
    </router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  /* 不起效果 */
  /* background: beige; */
}
</style>
