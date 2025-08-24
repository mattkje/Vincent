<script setup>
import SideBar from "@/components/SideBar.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div id="app">
    <SideBar />
    <router-view :key="route.fullPath"></router-view>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>