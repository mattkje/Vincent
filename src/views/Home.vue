<template>
    <div class="home">
      <div class="logo-holder">
        <img src="@/assets/logo.png" alt="Vincent Logo" />
        <h1>Vincent!</h1>
      </div>
      <p>Please select a tool</p>
      <div class="tool-grid">
        <router-link class="tool-box" to="/convert">
          <span>Convert Image Type</span>
        </router-link>
        <router-link class="tool-box" to="/compress">
          <span>Compress Image</span>
        </router-link>
        <router-link class="tool-box" to="/resize">
          <span>Resize Image</span>
        </router-link>
        <router-link class="tool-box" to="/crop">
          <span>Crop Image</span>
        </router-link>
        <router-link class="tool-box" to="/watermark">
          <span>Add Watermark</span>
        </router-link>
        <router-link class="tool-box" to="/about">
          <span>About</span>
        </router-link>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Home'
  }
  </script>

  <style scoped>
  .home {
    width: 100%;
    text-align: center;
    background: var(--background-2);
    min-height: 100vh;
  }

  .logo-holder {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    gap: 12px;
  }

  .logo-holder img {
    width: 48px;
    height: 48px;
  }

  .logo-holder h1 {
    color: var(--text-1);
    margin-bottom: 18px;
    font-size: 2.2rem;
    letter-spacing: -0.06em;
  }
  p {
    color: var(--text-2);
    font-size: 1.15em;
    margin-bottom: 36px;
  }
  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 28px;
    max-width: 900px;
    margin: 0 auto;
  }
  .tool-box {
    background: var(--background-1);
    border: 1px solid var(--border-1);
    border-radius: 16px;
    box-shadow: 0 2px 12px var(--shadow);
    padding: 44px 0;
    font-size: 1.13em;
    color: var(--text-1);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      box-shadow 0.18s,
      transform 0.18s,
      border-color 0.18s,
      color 0.18s,
      background 0.18s;
    outline: none;
  }
  .tool-box:hover,
  .tool-box:focus {
    box-shadow: 0 6px 24px rgba(50,134,255,0.13);
    border-color: var(--main-color);
    color: var(--main-color);
    background: var(--main-color-weak);
    transform: translateY(-3px) scale(1.035);
  }
  .tool-box span {
    pointer-events: none;
  }
  </style>