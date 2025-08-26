<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  imageUrl: string
}>();

</script>

<template>
  <div class="image-preview">
    <img :src="imageUrl" alt="Preview" class="preview-img" />
  </div>
</template>

<style scoped>
.image-preview {
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  background-color: var(--background-1);
  border-left: 1px solid var(--border-1, #e0e0e0);
}
.preview-img {
  display: block;
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
  margin: auto;
}
</style>