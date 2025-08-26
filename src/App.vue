<script setup>
import SideBar from "@/components/SideBar.vue";
import { useRoute, useRouter } from "vue-router";
import {onMounted, ref, watch} from "vue";
import ImagePreview from "@/components/ImagePreview.vue";

const route = useRoute();
const router = useRouter();

const imageSelected = ref(false);
const setImageSelected = (val) => {
  imageSelected.value = val;
};

watch(imageSelected, (val) => {
  if (!val && route.path !== "/") {
    router.replace("/");
  }
});

onMounted(() => {
  if (route.path !== "/") {
    router.replace("/");
  }
});
</script>

<template>
  <div id="app">
    <transition name="sidebar-slide">
      <div v-if="imageSelected" class="sidebar-wrapper">
        <SideBar/>
      </div>
    </transition>
    <router-view :key="route.fullPath" :setImageSelected="setImageSelected"></router-view>
    <ImagePreview image-url="src/assets/logo.png" v-if="imageSelected"/>
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

.sidebar-wrapper {
  height: 100vh;
  /* Adjust width as needed */
  width: 260px;
  min-width: 220px;
  max-width: 320px;
  background: transparent;
  z-index: 10;
  /* Ensure sidebar is above main content if needed */
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s;
}

.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-slide-enter-to,
.sidebar-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>