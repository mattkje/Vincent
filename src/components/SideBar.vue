<script setup>
const version = __APP_VERSION__
console.log('App version:', __APP_VERSION__)
</script>

<template>
  <nav class="menubar">
    <div class="menu-links">
      <router-link class="nav-link" active-class="active-link" to="/convert">
        <img src="@/assets/icons/convert.svg" alt="Logo"/>
        <span class="nav-text">Convert</span>
      </router-link>
      <router-link class="nav-link" active-class="active-link" to="/compress">
        <img src="@/assets/icons/compress.svg" alt="Logo"/>
        <span class="nav-text">Compress</span>
      </router-link>
      <router-link class="nav-link" active-class="active-link" to="/resize">
        <img src="@/assets/icons/resize.svg" alt="Logo"/>
        <span class="nav-text">Resize</span>
      </router-link>
      <router-link class="nav-link" active-class="active-link" to="/crop">
        <img src="@/assets/icons/crop.svg" alt="Logo"/>
        <span class="nav-text">Crop</span>
      </router-link>
      <router-link class="nav-link" active-class="active-link" to="/watermark">
        <img src="@/assets/icons/watermark.svg" alt="Logo"/>
        <span class="nav-text">Watermark</span>
      </router-link>
      <hr class="menubar-separator"/>
      <router-link class="nav-link" active-class="active-link" to="/about">
        <img src="@/assets/icons/info2.svg" alt="Logo"/>
        <span class="nav-text">About</span>
      </router-link>
      <p class="version-text"> v{{ version }} </p>
    </div>
  </nav>
</template>

<style scoped>

.menubar {
  width: 180px;
  max-width: 180px;
  min-width: 180px;
  height: calc(100% - 1rem);
}

.menubar-separator {
  border: none;
  border-top: 1px solid var(--border-1, #e0e0e0);
  width: 90%;
  margin: 0.5rem auto;
  border-radius: 5px;
}

.menu-links {
  height: 100%;
  background-color: var(--background-1);
  border-right: 1px solid var(--border-1, #e0e0e0);
  padding: 0.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.nav-link {
  padding: 0.8rem 2rem;
  color: var(--text-2);
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-content: center;
  justify-content: flex-start;
  border-radius: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.nav-link:hover {
  background-color: var(--background-2);
}

.active-link {
  background-color: var(--main-color-weak);
  color: var(--main-color);
}

.active-link:hover {
  background-color: var(--main-color-weak);
}

.nav-link img {
  width: 15px;
  height: 15px;
  margin: 0.1rem 0 auto 0;
  filter: invert(41%);
}

.active-link img {
  filter: brightness(0) saturate(100%) invert(41%) sepia(92%) saturate(1232%) hue-rotate(190deg) brightness(97%) contrast(97%);
}

.version-text {
  color: var(--text-2);
  font-size: 0.7rem;
  text-align: center;
  margin-top: auto;
  padding: 0.5rem 0;
}

@media (prefers-color-scheme: dark) {
  .nav-link img {
    filter: invert(1);
  }
}

@media (max-width: 768px) {

  .menu-links {
    width: min-content;
  }

  .menubar {
    width: min-content;
    max-width: min-content;
    min-width: min-content;
    height: 100vh;
  }

  .nav-link {
    font-size: 0;
    padding: 0.8rem;
    margin: 0;
    width: min-content;
    align-items: center;
  }

  .nav-link img {
    width: 20px;
    height: 20px;
    margin: 0;
  }

  .nav-text {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
</style>
