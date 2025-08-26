<template>
  <div class="home">
    <div class="logo-holder">
      <img src="@/assets/logo.png" alt="Vincent Logo"/>
      <h1>Vincent!</h1>
    </div>
    <p class="subtitle">Import an image to get started</p>
    <div
        class="import-box"
        @click="triggerFileInput"
        @dragover.prevent
        @dragenter.prevent
        @drop.prevent="handleDrop"
    >
      <input
          ref="fileInput"
          type="file"
          accept="image/*"
          style="display: none"
          @change="handleFileInput"
      />
      <div class="import-content">
        <span class="import-text">Click or drag an image here</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  setImageSelected: Function
});

const fileInput = ref(null);
const isDragActive = ref(false);

function triggerFileInput() {
  fileInput.value.click();
}
function handleFileInput(event) {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
}
function handleDrop(event) {
  isDragActive.value = false;
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    processFile(file);
  }
}
function processFile(file) {
  // Handle the imported image file here
  props.setImageSelected(true);
}
</script>

<style scoped>
.home {
  width: 100%;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  gap: 12px;
}

.logo-holder img {
  width: 48px;
  height: 48px;
}

.logo-holder h1 {
  color: var(--text-1);
  font-size: 2.3rem;
  letter-spacing: -0.06em;
  font-weight: 700;
  margin: 0;
}

.subtitle {
  color: var(--text-2);
  font-size: 1.15em;
  margin-bottom: 32px;
  margin-top: 0;
}

.import-box {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s, border 0.3s;
  border: 0.4rem dashed var(--border-2);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  border-radius: 2rem;
  overflow: hidden;
}

.import-box:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  border: 0.5rem dashed var(--main-color-hover);
}

.import-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.import-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.import-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.import-text {
  color: var(--text-2);
  font-size: 1.1em;
  font-weight: 500;
}
</style>