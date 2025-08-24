<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="app-layout">
    <SideBar/>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background: #f7f8fa;
}

</style>